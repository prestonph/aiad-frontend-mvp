# AIAD MVP

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 with your browser to see the result. 
```
---

## Instructions

## a. How to run locally: 
1. Clone the repository and navigate to the project directory.
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Open the app in your browser:
Open http://localhost:3000 in your browser to access the app.

## b. How to run in the live environment:
 1. Deploy the application to your preferred hosting provider (e.g., Vercel, Netlify).
 2. If testing in the local environment, install the CORS Policy extension in your browser to bypass CORS issues.

## c. Environment variables required:
# Create a .env.local file in the root of your project and add the following environment variable:
```
NEXT_PUBLIC_API_BASE_URL=https://api.anyad.app/v1
```
## d. How to replace the images/videos on the home page:
For dynamic content via API:
1. Locate the API calls in the codebase and update the API URLs that fetch images or videos.

For static assets:
1. Search for <Image in the codebase to find all static images.
2. Replace the src property of these images with your desired paths.
