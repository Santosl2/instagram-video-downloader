import { payload } from "../payloads/example.mjs";
import { timelineUsers } from "./mappers.mjs";
import fs from "node:fs";

/**
 * Decodes Instagram URL-encoded characters.
 * @param {string} url - The URL to decode.
 * @returns {string} - The decoded URL.
 */
function decodeInstagramUrl(url) {
  return url.replace(/\\u0026/g, "&");
}

/**
 * Extracts video and image URLs from the Instagram API payload.
 * @param {*} payload - The Instagram API payload.
 */
function extractVideoAndImage(payload) {
  const data = timelineUsers(payload);

  data?.forEach((d) => {
    const username = d.user.username;
    d.items.forEach((item, index) => {
      console.log(
        `Processing media from ${username} ${index + 1}/${d.items.length}...`
      );

      const isVideo = item.media_type === 2;
      const extension = isVideo ? "mp4" : "jpg";
      const url = isVideo
        ? item.video_versions[0].url
        : item.image_versions2.candidates[0].url;

      downloadVideoByUrl({
        url: decodeInstagramUrl(url),
        ext: extension,
        filename: `${username}-media-${index + 1}`,
      });
    });
  });
}

/**
 * Downloads a video from a given URL and saves it to the filesystem.
 * @param {string} url - The URL of the video to download.
 * @param {string} ext - The file extension for the video (default is "mp4").
 * @param {string} filename - The filename for the saved file.
 */
async function downloadVideoByUrl({
  url,
  ext = "mp4",
  filename = "instagram-video",
}) {
  const response = await fetch(url);
  const videoBlob = await response.blob();

  fs.writeFileSync(
    `./resources/${filename}.${ext}`,
    Buffer.from(await videoBlob.arrayBuffer())
  );
}

extractVideoAndImage(payload);
