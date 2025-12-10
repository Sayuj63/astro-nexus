# Required Assets

## Video Files
- `herovideo.mp4` - Main hero video for the scroll expansion effect
  - Should be a cosmic/space themed video
  - Recommended dimensions: 1920x1080 or higher
  - Format: MP4 with H.264 encoding for web compatibility
  - Duration: 10-30 seconds (will loop automatically)

## Placeholder Images
The component currently uses Unsplash images as placeholders:
- Background: Deep space/nebula image
- Poster: Space/Earth image for video poster

## Adding Your Own Video
1. Place your video file in the `public` folder as `herovideo.mp4`
2. The component will automatically use it for the scroll expansion effect
3. Make sure the video is optimized for web (compressed but good quality)

## Alternative: Using YouTube Videos
You can also use YouTube videos by changing the `mediaSrc` prop to a YouTube URL in the CosmicHero component.