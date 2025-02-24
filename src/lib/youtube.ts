//@ts-nocheck
import axios from 'axios';
import { videoIds } from './video-data'; // Move import to top

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

export interface YouTubeVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  category: string;
  description?: string;
  viewCount?: string;
  publishedAt?: string;
}

export async function getVideoDetails(videoId: string): Promise<YouTubeVideo | null> {
  try {
    // Find the category from our videoIds list
    const videoData = videoIds.find(v => v.id === videoId);
    const category = videoData?.category;

    const response = await axios.get(`${YOUTUBE_API_URL}/videos`, {
      params: {
        part: 'snippet,contentDetails,statistics',
        id: videoId,
        key: YOUTUBE_API_KEY,
      },
    });

    if (!response.data.items?.[0]) return null;

    const video = response.data.items[0];
    const duration = formatDuration(video.contentDetails.duration);

    return {
      id: videoId,
      title: video.snippet.title,
      duration,
      thumbnail: video.snippet.thumbnails.medium.url,
      category: category || 'Uncategorized',
      description: video.snippet.description,
      viewCount: video.statistics.viewCount,
      publishedAt: new Date(video.snippet.publishedAt).toLocaleDateString()
    };
  } catch (error) {
    console.error('Error fetching video details:', error);
    return null;
  }
}

export async function getRelatedVideos(videoId: string, category: string, maxResults = 5): Promise<YouTubeVideo[]> {
  try {
    // Get videos from our predefined list with the same category
    const relatedFromCategory = videoIds
      .filter(v => v.category === category && v.id !== videoId)
      .slice(0, maxResults);

    // Fetch details for these videos
    const videoDetails = await Promise.all(
      relatedFromCategory.map(async ({ id }) => {
        const details = await getVideoDetails(id);
        return details;
      })
    );

    return videoDetails.filter((v): v is YouTubeVideo => v !== null);
  } catch (error) {
    console.error('Error fetching related videos:', error);
    return [];
  }
}

function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  let result = '';
  
  if (hours) result += `${hours}:`;
  if (minutes) result += `${minutes.padStart(2, '0')}:`;
  else result += '00:';
  if (seconds) result += seconds.padStart(2, '0');
  else result += '00';

  return result;
}
