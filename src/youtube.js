  const API_KEY = AIzaSyCwsfq638HVTH3fk2TKJ8cMuyq87AHt7y0;
  const CHANNEL_ID = UC8HWVLdFyaeLcDUdAEmPg6g;

  export async function fetchYouTubeVideos() {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.items?.filter((item) => item.id.videoId) || [];
    } catch (error) {
      console.error("YouTube fetch error:", error);
      return [];
    }
  }