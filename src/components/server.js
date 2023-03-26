const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json()); // add this middleware to parse JSON data in request body

app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'fahimibnislam@gmail.com', // your email address
            pass: 'your-email-password' // your email password
        }
    });
    const mailOptions = {
        from: `${name} <${email}>`,
        to: 'fahimibnislam@gmail.com', // your email address
        subject: 'New message from contact form',
        text: message
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send message' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
