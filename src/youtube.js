export async function onRequest(context) {
    const API_KEY = AIzaSyCwsfq638HVTH3fk2TKJ8cMuyq87AHt7y0;
    const CHANNEL_ID = UC8HWVLdFyaeLcDUdAEmPg6g;
  
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response("Error fetching YouTube data", { status: 500 });
    }
  }
  