# S3 batch import

Import a list of videos to S3 with ease.

## Setup

Copy `.env.example` to `.env` and fill the environment variables based on the S3 access

## Running the migration

1. Clone the repository and install dependencies using NPM or Yarn;
2. Fill video list data inside `data/videos.json`;
3. Run `yarn run-migration` or `npm run run-migration`;

All of the videos from `videos.json` will be uploaded directly to S3 without saving them to the disk.

This process is kinda slow but, if you have a good internet connection and hardware, you can increment the concurrency inside `src/lib/queue.ts` to migrate more videos in parallel.
