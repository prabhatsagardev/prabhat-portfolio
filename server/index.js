import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact.js';
import projectRoutes from './routes/projects.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), brand: 'Prabhat Sagar' });
});

app.listen(PORT, () => {
  console.log(`[Prabhat Sagar Backend] Express server running on port ${PORT}`);
});
