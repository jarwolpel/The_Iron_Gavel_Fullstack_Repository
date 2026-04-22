# The Iron Gavel Fullstack Team

## Members:
- Jared
- Oliver
- Matt

## Description

- As a history enthusiast, I want to be able to simulate battles between my favourite historical figures.
- As a gamer, I want to be able to simulate fun and whacky battles between my favourite characters.
- As a competitive gamer, I want to be able to share my battles with other people online.

## Local setup and Replication instructions:

- Prerequisites; Git, VSCode, Docker

- 1: Clone repo
- 2: Open project in VSCode, Ctrl+J to open terminal and enter `npm install`
- 3: Make sure you are in the project root and run `docker compose up -d` to create the SQL container that will hold the database
- 4: Enter the backend of the project with `cd apps/backend` and enter `npx prisma generate`, and then `npx prisma migrate dev --name fsd-iron-gavel-project`
- 5: create .env files in the root of the /frontend and /backend directories
- 5.1 Frontend .env
  VITE_API_BASE_URL=http://localhost:3000
  FRONTEND_URL=http://localhost:5173
  VITE_CLERK_PUBLISHABLE_KEY=pk_test_d29ya2luZy1ob25leWJlZS05OS5jbGVyay5hY2NvdW50cy5kZXYk
- 5.2 Backend .env
  FRONTEND_URL=http://localhost:5173
  PORT=3000
  DATABASE_URL="postgresql://postgres:password@localhost:5433/fsd-iron-gavel-project"
  CLERK_PUBLISHABLE_KEY=pk_test_d29ya2luZy1ob25leWJlZS05OS5jbGVyay5hY2NvdW50cy5kZXYk
  CLERK_SECRET_KEY=sk_test_VBYW6hELK41YbZT4YjV98ugF2DBj1WlotWQWFYfcDa
- 6: run the project with `npm run dev` while in the root directory of the project. If you are in the frontend or backend directories you can return to the root with `cd ../..`
