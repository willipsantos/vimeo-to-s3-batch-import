import { s3 } from "../services/s3"
import { QueueTask } from "./queue"
import stream from "stream"
import fs from "fs"

const uploadStream = ({ Bucket, Key }:QueueTask) => {
  const pass = new stream.PassThrough()
  return {
    writeStream: pass,
    promise: s3.upload({ Bucket, Key, Body: pass }).promise(),
  }
}

const { writeStream, promise } = uploadStream({Bucket: 'yourbucket', Key: 'yourfile.mp4'})
const readStream = fs.createReadStream('/path/to/yourfile.mp4')
const pipeline = readStream.pipe(writeStream)

promise.then(() => {
  console.log('upload completed successfully');
}).catch((err) => {
  console.log('upload failed.', err.message);
});
