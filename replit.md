# WebySoft Next.js Portfolio Website

## Overview

This is a professional portfolio website for WebySoft, a digital agency specializing in web development and design services. The application is built using Next.js 15 with TypeScript, featuring a modern glass morphism design, smooth animations, and a comprehensive showcase of portfolio projects.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and interactions
- **Theme**: Professional dark theme with purple primary color (#8B5CF6)

### Backend Architecture
- **API Routes**: Next.js API routes for server-side functionality
- **Database**: Drizzle ORM with PostgreSQL (Neon Database)
- **Email Service**: Nodemailer for contact form submissions
- **File Structure**: Modular component-based architecture

## Key Components

### Core Features
1. **Portfolio Showcase**: Dynamic grid displaying various website projects
2. **Contact System**: Professional contact form with email integration
3. **Service Presentation**: Comprehensive overview of offered services
4. **FAQ Section**: Interactive accordion-style frequently asked questions
5. **Responsive Design**: Mobile-first approach with tablet and desktop optimization

### UI/UX Components
- **GlassCard**: Reusable glass morphism component with 3D effects
- **Background Particles**: Animated background elements for visual appeal
- **Smooth Scrolling**: Hash-based navigation with smooth scrolling
- **Interactive Elements**: Hover effects, animations, and micro-interactions

### Data Management
- **Portfolio Data**: Centralized portfolio items with type definitions
- **React Query**: Client-side state management and API calls
- **Form Handling**: React Hook Form with Zod validation

## Data Flow

1. **Static Content**: Portfolio items and service information stored in data files
2. **Dynamic Features**: Contact forms processed through API routes
3. **Email Processing**: Contact submissions sent via Nodemailer
4. **Client Interaction**: React Query manages form submissions and API states
5. **Navigation**: Hash-based routing for single-page application experience

## External Dependencies

### Core Dependencies
- **Next.js**: React framework for production
- **React**: UI library for component-based architecture
- **TypeScript**: Type safety and enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions

### UI & Components
- **Radix UI**: Accessible, unstyled UI primitives
- **Lucide React**: Modern icon library
- **React Icons**: Additional icon sets
- **Class Variance Authority**: Component variant management

### Database & Backend
- **Drizzle ORM**: Type-safe database toolkit
- **Neon Database**: Serverless PostgreSQL database
- **Nodemailer**: Email sending functionality

### Development Tools
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **React Query**: Server state management

## Deployment Strategy

### Platform Configuration
- **Hosting**: Replit with autoscale deployment
- **Database**: Neon PostgreSQL with connection pooling
- **Build Process**: Next.js static generation with dynamic API routes
- **Environment**: Node.js 20 runtime environment

### Port Configuration
- **Development**: Port 5000 (mapped to external port 80)
- **API**: Next.js API routes handle backend functionality
- **Database**: PostgreSQL connection via environment variables

### Performance Optimizations
- **Image Optimization**: Next.js built-in image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Static Generation**: Pre-rendered pages where possible
- **CDN**: Leveraging Replit's CDN for static assets

## Changelog

```
Changelog:
- June 22, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```