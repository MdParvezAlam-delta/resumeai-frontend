# ResumeAI Frontend

ResumeAI is a React and Vite frontend for creating personalized interview preparation reports and tailored resumes with AI.

## Features

- User registration, login, logout, and session restoration
- Resume upload and self-description input
- AI-generated interview preparation reports
- Technical and behavioral interview questions
- Skill-gap analysis and preparation plans
- Resume PDF generation and download
- Protected interview report pages

## Requirements

- Node.js 18 or newer
- npm
- The ResumeAI backend running locally or deployed on Render

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in this directory:

```env
VITE_API_URL=http://localhost:3000
```

For a Vercel deployment, set `VITE_API_URL` in the Vercel project environment variables to the public backend URL:

```env
VITE_API_URL=https://your-backend.onrender.com
```

Do not use the Vercel frontend URL as `VITE_API_URL`. Vite embeds this value during the production build, so redeploy Vercel after changing it.

## Development

Start the frontend locally:

```bash
npm run dev
```

The development server runs at `http://localhost:5173`. The backend must be available at `http://localhost:3000` when using the local API URL.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Application Routes

| Route | Access |
| --- | --- |
| `/login` | Public |
| `/register` | Public |
| `/` | Authenticated users |
| `/interview/:interviewId` | Authenticated users |

## Deployment

Deploy the `Frontend` directory as the Vercel project root. Configure `VITE_API_URL` in Vercel and redeploy whenever the backend URL changes.

The backend must allow the Vercel deployment origin through CORS and must support credentials for authentication cookies.
