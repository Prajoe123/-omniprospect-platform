# OmniProspect - Compliant Lead Generation Platform

## Overview

OmniProspect is a streamlined, compliance-focused lead generation platform that combines LinkedIn public profile scraping with multi-source search engine integration. The application provides enterprise-grade tools for searching, enriching, and managing prospects through Google, Bing, Yahoo, and LinkedIn with strict adherence to platform terms of service and data privacy regulations.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### July 2025 - Cloud Deployment & Integration
- ✓ Integrated advanced multi-platform search directly into OmniProspect main interface
- ✓ Added Quick Search and Advanced Multi-Platform modes with seamless toggle
- ✓ Built platform selection for Google, Bing, DuckDuckGo, and LinkedIn with boolean operators
- ✓ Created comprehensive cloud deployment configurations for Vercel, Railway, Render, Netlify
- ✓ Set up Docker containerization with multi-stage builds and health checks
- ✓ Implemented GitHub Actions CI/CD pipeline with automated testing and deployment
- ✓ Added health check endpoints and production-ready monitoring
- ✓ Created detailed deployment guides with continuous update capabilities

### July 2025 - Compliance System Integration & Testing
- ✓ Implemented comprehensive server-side compliance middleware with automatic rate limiting
- ✓ Created compliance API endpoints for real-time monitoring and guidelines
- ✓ Built comprehensive test suite with 100% pass rate covering unit tests, API tests, and rate limiting
- ✓ Integrated compliance monitoring directly into application architecture
- ✓ Added automated violation prevention and usage tracking across all platforms
- ✓ Established robust testing framework for ongoing compliance verification

### January 2025 - Documentation Overhaul
- ✓ Created comprehensive user documentation suite
- ✓ Updated platform to focus only on LinkedIn and search engines (Google, Bing, Yahoo)
- ✓ Removed all unsupported social media platforms from UI and backend
- ✓ Added detailed compliance guidelines and best practices
- ✓ Created step-by-step onboarding tutorial for new users
- ✓ Established configuration guides for API setup
- ✓ Updated architecture documentation to reflect simplified, compliant focus

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Pattern**: RESTful API with structured error handling
- **Development**: TSX for TypeScript execution in development

### Build and Deployment Strategy
- **Development**: Vite dev server with HMR and Express API proxy
- **Production**: Static frontend built with Vite, Express server bundled with esbuild
- **Database Migrations**: Drizzle Kit for schema management
- **Environment**: Configured for Replit deployment with development tooling

## Key Components

### Database Schema (Drizzle ORM)
- **Users Table**: Authentication and role-based access control
- **Search Results**: Multi-source search result storage with metadata
- **Prospects**: Contact management with enrichment data
- **Workflows**: Visual automation sequence storage
- **Platform Connections**: Search engine and LinkedIn integration tracking
- **API Usage**: Analytics and rate limiting data

### Frontend Components
- **Dashboard**: Main application interface with stats and controls
- **Search Interface**: Multi-source search with compliance indicators
- **Platform Overview**: Real-time connection status for search engines and LinkedIn
- **Workflow Builder**: Visual drag-and-drop automation designer
- **Feature Showcase**: Compliance-focused feature demonstration

### Backend Services
- **Search Services**: Google Custom Search API, Bing Web Search API, Yahoo scraping, LinkedIn scraping
- **Storage Layer**: Abstracted database operations with type safety
- **Route Handlers**: RESTful endpoints for compliant search operations
- **Middleware**: Request logging, error handling, and compliance monitoring

## Data Flow

### Search and Prospect Management
1. **Search Input**: User submits search queries through the frontend interface
2. **Multi-Source Search**: Backend queries multiple search APIs (Google, Bing, SerpAPI)
3. **Result Processing**: Search results are normalized and stored in the database
4. **Prospect Creation**: Relevant results are converted to prospect records
5. **AI Enhancement**: OpenAI integration enriches prospect data with additional context
6. **Workflow Automation**: Visual workflows process prospects through defined sequences

### Authentication and Authorization
1. **User Management**: Role-based access control (Admin, Manager, Standard)
2. **Session Management**: Secure session handling with database persistence
3. **API Security**: Request validation and rate limiting per user role

### Analytics and Monitoring
1. **Usage Tracking**: API call monitoring and platform interaction logging
2. **Performance Metrics**: Search success rates, prospect conversion tracking
3. **Compliance Monitoring**: Rate limit adherence and platform policy compliance

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Comprehensive UI component primitives
- **zod**: Runtime type validation and schema definition

### Development Tools
- **vite**: Fast build tool with TypeScript support
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server code
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development enhancements

### AI and Search Integration
- **OpenAI API**: GPT-4o integration for content generation and data enhancement
- **Google Custom Search API**: Web search capabilities
- **Bing Web Search API**: Alternative search provider
- **SerpAPI**: Professional search API with advanced features

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **API Development**: Express server with tsx for TypeScript execution
- **Database**: Neon Database with environment variable configuration
- **Environment Variables**: DATABASE_URL, API keys for external services

### Production Deployment
- **Frontend Build**: Vite builds static assets to `dist/public`
- **Backend Build**: esbuild bundles Express server to `dist/index.js`
- **Database Migrations**: Drizzle Kit pushes schema changes to production
- **Environment**: NODE_ENV=production with optimized configurations

### Hosting Requirements
- **Current Specification**: 1 CPU core, 2GB RAM, 40GB SSD storage
- **Database**: External Neon Database (serverless PostgreSQL)
- **Scaling Considerations**: Application designed for horizontal scaling with external database
- **Monitoring**: Built-in analytics and usage tracking for performance optimization

### Configuration Management
- **Database Configuration**: Drizzle config with PostgreSQL dialect
- **Build Scripts**: Separate development and production build processes
- **Type Safety**: Comprehensive TypeScript configuration across all layers
- **Path Aliases**: Organized import structure with `@/` and `@shared/` aliases