const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

const TARGET_EMAIL = process.env.TARGET_EMAIL || 'mfilla.mf@gmail.com';
const SMTP_HOST = process.env.EMAIL_HOST || 'smtp.example.com';
const SMTP_PORT = Number(process.env.EMAIL_PORT || 587);
const SMTP_USER = process.env.EMAIL_USER || 'mfilla.mf@gmail.com';
const SMTP_PASS = process.env.EMAIL_PASS || 'lucanestle';

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.post('/submit', upload.fields([{ name: 'picture', maxCount: 1 }, { name: 'video', maxCount: 1 }]), async (req, res) => {
  try {
    const fields = req.body;
    const values = [];
    for (let i = 1; i <= 10; i += 1) {
      values.push(`Field ${i}: ${fields[`text${i}`] || ''}`);
    }

    const messageBody = [
      'A new form submission has arrived.',
      '',
      ...values,
      '',
      `Submitted at: ${new Date().toISOString()}`,
    ].join('\n');

    const attachments = [];
    if (req.files.picture && req.files.picture[0]) {
      attachments.push({
        filename: req.files.picture[0].originalname,
        content: req.files.picture[0].buffer,
        contentType: req.files.picture[0].mimetype,
      });
    }
    if (req.files.video && req.files.video[0]) {
      attachments.push({
        filename: req.files.video[0].originalname,
        content: req.files.video[0].buffer,
        contentType: req.files.video[0].mimetype,
      });
    }

    await transporter.sendMail({
      from: SMTP_USER,
      to: TARGET_EMAIL,
      subject: 'Web App Form Submission',
      text: messageBody,
      attachments,
    });

    res.sendFile(path.join(__dirname, 'public', 'success.html'));
  } catch (error) {
    console.error('Send failed:', error);
    res.status(500).send('Unable to send email. Check server logs and SMTP configuration.');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web app running on http://localhost:${port}`);
});
