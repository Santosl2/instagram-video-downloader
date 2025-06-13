## Important Notice

**THIS IS NOT AN AUTOMATION - IT IS ONLY A STUDY PROJECT**

To make this work, you need to save a test payload that follows the code patterns. This payload is the same one that Instagram provides through their API.

# Instagram Video Downloader

A Node.js application for downloading videos and images from Instagram stories.

## Features

- Download videos (MP4) and images (JPG) from Instagram
- Process multiple media items from user timelines
- Automatic file naming with timestamps
- URL decoding for Instagram media links

## File Structure

```
├── package.json          # Project configuration
├── instagram.mjs         # Main application logic
├── mappers.mjs          # Data mapping utilities
└── payloads/
  └── example.mjs      # Sample Instagram API response data
```

## Usage

The application processes Instagram API payload data to extract and download media files:

1. Media items are mapped from the payload using `timelineUsers()` mapper
2. For each item, the application determines if it's a video or image
3. Files are downloaded to the `./videos/` directory with format: `{username}-video-{timestamp}.{ext}`

## Core Functions

- `decodeInstagramUrl()` - Decodes Instagram URL encoding
- `extractVideoAndImage()` - Processes payload and downloads media
- `downloadVideoByUrl()` - Handles the actual file download
- `timelineUsers()` - Maps Instagram API response to usable data structure

## Dependencies

- Node.js with ES modules support
- Built-in `fs` and `fetch` modules

## Note

This project works with Instagram API response data. Ensure you have proper authorization and comply with Instagram's terms of service when using this tool.
