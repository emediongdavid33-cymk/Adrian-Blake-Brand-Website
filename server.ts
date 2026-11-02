import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // In-memory inquiries store with thread-safety and sample logs
  const inquiries: Array<{
    id: string;
    fullName: string;
    email: string;
    bookTitle: string;
    service: string;
    projectDescription: string;
    createdAt: string;
  }> = [];

  // API endpoint for inquiry submissions
  app.post('/api/contact', (req, res) => {
    try {
      const { fullName, email, bookTitle, service, projectDescription } = req.body;

      if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
        return res.status(400).json({
          success: false,
          error: 'Please enter your full name (at least 2 characters).',
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Please enter a valid email address where we can reach you.',
        });
      }

      if (!bookTitle || typeof bookTitle !== 'string' || bookTitle.trim().length === 0) {
        return res.status(400).json({
          success: false,
          error: 'Please provide the working or published title of your book.',
        });
      }

      if (!service || typeof service !== 'string' || service.trim().length === 0) {
        return res.status(400).json({
          success: false,
          error: 'Please select a primary service of interest.',
        });
      }

      if (
        !projectDescription ||
        typeof projectDescription !== 'string' ||
        projectDescription.trim().length < 10
      ) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a brief project summary (at least 10 characters).',
        });
      }

      const inquiryId = `AB-${Date.now().toString(36).toUpperCase()}-${Math.random()
        .toString(36)
        .substring(2, 6)
        .toUpperCase()}`;

      const inquiryRecord = {
        id: inquiryId,
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        bookTitle: bookTitle.trim(),
        service: service.trim(),
        projectDescription: projectDescription.trim(),
        createdAt: new Date().toISOString(),
      };

      inquiries.unshift(inquiryRecord);
      console.log(
        `[Adrian Blake Studio] New inquiry registered: ${inquiryId} for "${inquiryRecord.bookTitle}" (${inquiryRecord.service}) from ${inquiryRecord.fullName} <${inquiryRecord.email}>`
      );

      return res.status(200).json({
        success: true,
        message: 'Your inquiry has been received. Adrian Blake will review your book details and respond promptly.',
        inquiryId,
        timestamp: inquiryRecord.createdAt,
        officialEmail: 'clement.bookmakerter@gmail.com',
      });
    } catch (err) {
      console.error('[Adrian Blake Studio] Contact form processing error:', err);
      return res.status(500).json({
        success: false,
        error: 'An unexpected error occurred while transmitting your inquiry. Please reach out directly to clement.bookmakerter@gmail.com.',
      });
    }
  });

  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'active',
      brand: 'Adrian Blake',
      officialEmail: 'clement.bookmakerter@gmail.com',
      storedInquiries: inquiries.length,
    });
  });

  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Adrian Blake Portfolio server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
