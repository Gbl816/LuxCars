# LuxCars Project

A full-stack TypeScript application for luxury car management.

## Project Structure

```
luxcars-project/
├─ server/           # Backend Node.js/Express server
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ models/
│  │  ├─ routes/
│  │  ├─ middleware/
│  │  └─ server.ts
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ .env.example
├─ client/          # Frontend React application
│  ├─ public/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ store/
│  │  └─ index.tsx
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ sass/
```

## Getting Started

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file based on .env.example:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Technologies Used

- Backend:
  - Node.js
  - Express
  - TypeScript
  - MongoDB
  - JWT Authentication

- Frontend:
  - React
  - Redux Toolkit
  - TypeScript
  - SASS
  - Vite

## License

MIT