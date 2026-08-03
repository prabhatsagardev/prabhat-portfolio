import { Router } from 'express';

const router = Router();

// Store in-memory submissions (for dev inspection)
const submissions = [];

router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required fields.',
    });
  }

  const submission = {
    id: Date.now(),
    name,
    email,
    subject: subject || 'General Inquiry',
    message,
    timestamp: new Date().toISOString(),
  };

  submissions.push(submission);

  console.log('[Supreme Spike Backend] New contact submission received:', submission);

  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out! Your message has been received.',
    data: submission,
  });
});

router.get('/list', (req, res) => {
  res.json({ success: true, count: submissions.length, data: submissions });
});

export default router;
