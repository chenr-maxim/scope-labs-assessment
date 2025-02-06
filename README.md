# Video Application

## Overview

This is a simple video platform application that is built using Next.js (App Router), Typescript and SCSS.

So it allows the user to:

- View a list of videos with the titles, desccriptions, thumbnails in grid format
- Allows the user to play the videos in full-screen mode as well as controlling volume
- Create new videos by submitting a title, description, and video url, with simple validation
- View and post comments on each video

note: Since I didn't want to spend too much time on this project here are some things I would have done if I had more time:

- better utilize Next.js App Router for better routing and performance
- quality of life issues I can solve such as already showing the latest comment on each video
- allow the user to manipulate playback speed on the video
- cleaner and more accessible design for responsiveness and for mobile users

## Application Features

- Home Page (video list)

  - Displays a list of videos that's fetched from the API
  - Clicking on a video navigates to `/video/[id]`.
<img width="1647" alt="Screenshot 2025-02-07 at 12 31 51 AM" src="https://github.com/user-attachments/assets/cdd70bd6-96d5-418b-8ab6-493ec2048448" />

- Video Page (`/video/[id]`)

  - Displays the selected video and allows for full-screen format
  - Shows a list of comments next to the selected video
  - Allows the user to post new comments to the selected video
<img width="1295" alt="Screenshot 2025-02-07 at 12 32 10 AM" src="https://github.com/user-attachments/assets/7607cf0f-ef2a-491e-851b-2634d64caaf9" />


- Create Video Page (`/create-video`)
  - Form for the user to submit a new video with a title, description and video URL
<img width="835" alt="Screenshot 2025-02-07 at 12 41 52 AM" src="https://github.com/user-attachments/assets/695fe8d6-37d3-4b6c-8245-417fb30b5950" />


## How to run the project

To run the project first clone the repository, and install the dependencies.

```
git clone https://github.com/yourusername/video-platform.git
cd video-platform
```

```
npm install
```

Once the install finishes to run the development server:

```bash
npm run dev
```

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
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
