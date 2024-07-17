import {useState, useEffect, ReactNode} from "react";
import type {ToastActionElement, ToastProps} from "@/components/ui/toast";

interface State {
    toasts: ToasterToast[]
}

type ToasterToast = ToastProps & {
    id: string
    title?: ReactNode
    description?: ReactNode
    action?: ToastActionElement
};

type Action =
    | { type: "ADD_TOAST"; toast: ToasterToast }
    | { type: "UPDATE_TOAST"; toast: Partial<ToasterToast> }
    | { type: "DISMISS_TOAST"; toastId?: string }
    | { type: "REMOVE_TOAST"; toastId?: string };

type Toast = Omit<ToasterToast, "id">
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
let TOAST_COUNT = 0;

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
const listeners: Array<(state: State) => void> = [];
let memoryState: State = {toasts: []};

const dispatch = (action: Action): void => {
    memoryState = (() => {
        switch (action.type) {
            case "ADD_TOAST":
                return {...memoryState, toasts: [action.toast, ...memoryState.toasts].slice(0, TOAST_LIMIT)};
            case "UPDATE_TOAST":
                return {
                    ...memoryState,
                    toasts: memoryState.toasts.map(t => t.id === action.toast.id ? {...t, ...action.toast} : t)
                };
            case "DISMISS_TOAST":
                if (action.toastId) {
                    if (!toastTimeouts.has(action.toastId)) {
                        const timeout = setTimeout(() => {
                            toastTimeouts.delete(action.toastId!);
                            dispatch({type: "REMOVE_TOAST", toastId: action.toastId});
                        }, TOAST_REMOVE_DELAY);
                        toastTimeouts.set(action.toastId, timeout);
                    }
                } else {
                    memoryState.toasts.forEach(toast => {
                        if (!toastTimeouts.has(toast.id)) {
                            const timeout = setTimeout(() => {
                                toastTimeouts.delete(toast.id);
                                dispatch({type: "REMOVE_TOAST", toastId: toast.id});
                            }, TOAST_REMOVE_DELAY);
                            toastTimeouts.set(toast.id, timeout);
                        }
                    });
                }
                return {
                    ...memoryState,
                    toasts: memoryState.toasts.map(toast => (toast.id === action.toastId || action.toastId === undefined) ? {
                        ...toast,
                        open: false
                    } : toast)
                };
            case "REMOVE_TOAST":
                return {
                    ...memoryState,
                    toasts: action.toastId === undefined ? [] : memoryState.toasts.filter(t => t.id !== action.toastId)
                };
            default:
                return memoryState;
        }
    })();
    listeners.forEach(listener => listener(memoryState));
};

function toast(props: Toast) {
    const id = (++TOAST_COUNT % Number.MAX_SAFE_INTEGER).toString();
    const update = (props: Partial<ToasterToast>) => dispatch({type: "UPDATE_TOAST", toast: {...props, id}});
    const dismiss = () => dispatch({type: "DISMISS_TOAST", toastId: id});

    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open: boolean) => {
                if (!open) dismiss();
            },
        },
    });

    return {
        id,
        dismiss,
        update,
    };
}

function useToast() {
    const [state, setState] = useState<State>(memoryState);

    useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if (index > -1) listeners.splice(index, 1);
        };
    }, [state]);

    return {
        ...state,
        toast,
        dismiss: (toastId?: string) => dispatch({type: "DISMISS_TOAST", toastId}),
    };
}

export {useToast, toast};