# PromptNest

PromptNest is a full-stack platform for discovering, sharing, and managing AI prompts.

I built PromptNest to create a simple place where users can share useful AI prompts, discover prompts from other users, search through them, and manage their own content.

## Live Demo

[View Live Demo](YOUR_VERCEL_URL)

## Features

- Google Authentication
- Create and share AI prompts
- Edit and delete your own prompts
- Search prompts by:
  - Prompt content
  - Tag
  - Username
- Click on a tag to find related prompts
- View other users' profiles and their prompts
- Copy prompts with one click
- Responsive design
- User profiles with their shared prompts

## Tech Stack

- Next.js 16
- React
- Tailwind CSS
- NextAuth / Auth.js
- Google OAuth
- MongoDB Atlas
- Mongoose
- JavaScript
- Next.js App Router
- Vercel

## How It Works

Users can sign in with their Google account and start sharing AI prompts.

Each prompt contains:

- The prompt itself
- A tag
- The user who created it

Users can then search for prompts, filter them by tags, visit other users' profiles, copy prompts, and manage the prompts they created.

## Authentication

PromptNest uses Google OAuth for authentication through NextAuth.

User information is stored in MongoDB, and each prompt is connected to its creator using a MongoDB reference.

## Project Structure

```text
PromptNest
├── app
│   ├── api
│   ├── profile
│   ├── create-prompt
│   └── update-prompt
├── components
├── models
├── utils
├── public
├── next.config.ts
├── package.json
└── README.mdr [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
