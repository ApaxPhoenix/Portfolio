import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface Package {
    name: string;
    subject: string;
    text: string;
}

const transporter = nodemailer.createTransport({
    host: "send.smtp.mailtrap.io",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAILTRAP_USERNAME!,
        pass: process.env.MAILTRAP_API_TOKEN!,
    },
});

export default async function handler(
    request: NextApiRequest,
    res: NextApiResponse<{ message: string }>
) {
    if (request.method === 'POST') {
        const { name, subject, text } = request.body as Partial<Package>;
        if (!name || !subject || !text) {
            console.log('Missing required fields');
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const options: Package = { name, subject, text };
        console.log('Email options:', options);
        try {
            console.log('Attempting to send email with options:', options);
            const info = await transporter.sendMail({
                from: "mailtrap@demomailtrap.com",
                to: "andromedeyz@hotmail.com",
                ...options
            });
            console.log('Nodemailer response:', info);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error: unknown) {
            console.error('Error sending email:', error);
            if (error instanceof Error) {
                res.status(500).json({ message: `Failed to send email: ${error.message}` });
            } else {
                res.status(500).json({ message: 'Failed to send email: Unknown error' });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${request.method} Not Allowed` });
    }
}
