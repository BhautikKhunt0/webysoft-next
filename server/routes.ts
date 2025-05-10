import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { sendContactFormEmail, type ContactFormData } from "./email";
import { log } from "./vite";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post('/api/newsletter', async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ 
          message: 'Email is required and must be a valid email address' 
        });
      }
      
      // In a real app, this would store the email in a database
      // For this demo, we'll just return a success response
      
      return res.status(200).json({ 
        message: 'Successfully subscribed to newsletter',
        email
      });
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      return res.status(500).json({ 
        message: 'Failed to subscribe to newsletter' 
      });
    }
  });

  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, subject, message }: ContactFormData = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          message: 'Missing required fields (name, email, subject, message)'
        });
      }
      
      // Send email notification
      await sendContactFormEmail({
        name,
        email,
        phone,
        subject,
        message
      });
      
      return res.status(200).json({
        message: 'Your message has been sent successfully'
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      return res.status(500).json({
        message: 'Failed to send message. Please try again later.'
      });
    }
  });

  // For production environment only
  if (process.env.NODE_ENV === "production") {
    // Add a middleware to handle SSR for all non-API routes
    app.get('*', (req: Request, res: Response, next: NextFunction) => {
      try {
        // Skip if this is an API route or a static asset
        if (req.path.startsWith('/api') || req.path.includes('.')) {
          return next();
        }

        // Read the pre-rendered index.html
        const templatePath = path.resolve(process.cwd(), "dist", "public", "index.html");
        
        if (fs.existsSync(templatePath)) {
          let html = fs.readFileSync(templatePath, 'utf-8');
          
          // Insert pre-rendered content here
          // In a real implementation, we would dynamically render the app based on the route
          // and insert the HTML into the template
          
          return res.status(200).send(html);
        }
        
        log("SSR template not found, falling back to client-side rendering");
        return next();
      } catch (error) {
        console.error("SSR error:", error);
        return next();
      }
    });
  }

  const httpServer = createServer(app);

  return httpServer;
}
