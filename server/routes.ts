import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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

  const httpServer = createServer(app);

  return httpServer;
}
