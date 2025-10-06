# Company Filters Project

A full-stack application for filtering companies with a React frontend and Node.js/Express backend.

## Project Structure
project-root/   
├── backend/ # Node.js + Express server     
├── frontend/ # React + Vite application    
└── README.md   

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Set up the database:
- The project uses Prisma ORM
- Check if you need to run Prisma commands 
```bash
npx prisma generate
```
4. Start the development server:
```bash
npm run dev
```
The backend will run on the port specified in your .env file.
### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
### Technology Stack
### Backend
- Node.js + Express - Server framework
- Prisma - Database ORM and query management
- PostgreSQL - Database (or your configured database)
### Frontend
- React + Vite - Frontend framework and build tool
- TanStack Query - Data fetching and caching
- Context API - State management
- ShadcnUI + TailwindCSS - UI components and styling
