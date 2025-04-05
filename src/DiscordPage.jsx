import React, { useEffect, useState } from 'react';
import Layout from './components/Layout'; // Adjust path based on your folder structure

const DiscordPage = () => {
  const [presenceCount, setPresenceCount] = useState(null);
  const [totalMembers, setTotalMembers] = useState(null);

  const SERVER_ID = '876952941553131560'; // Replace with your actual server ID
  const SERVER_BANNER = 'https://cdn.discordapp.com/discovery-splashes/876952941553131560/c80a67aec979e806a0ddeab556cafb49.jpg?size=2048';
  const SERVER_ICON = 'https://cdn.discordapp.com/icons/876952941553131560/a_d7e729ff3276b2fb618171bcb69fb343.jpg?size=256';

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        // Widget API for online members
        const widgetRes = await fetch(`https://discord.com/api/guilds/${SERVER_ID}/widget.json`);
        const widgetData = await widgetRes.json();
        setPresenceCount(widgetData.presence_count);

        // Guild API for total members (requires bot token or public access via external API)
        const vanityURLRes = await fetch(`https://discord.com/api/v9/invites/ajr?with_counts=true&with_expiration=true`);
        const vanityData = await vanityURLRes.json();
        setTotalMembers(vanityData.approximate_member_count);
      } catch (error) {
        console.error('Failed to fetch Discord data:', error);
      }
    };

    fetchDiscordData();
  }, []);

  return (
    <Layout>
        <div className="min-h-screen bg-black text-white font-sans">
        <div className="relative">
            <img
            src={SERVER_BANNER}
            alt="Server Banner"
            className="w-full h-64 object-cover opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center backdrop-blur-md bg-black/20">
            <img
                src={SERVER_ICON}
                alt="Server Icon"
                className="w-20 h-20 rounded-2xl border-4 border-white shadow-xl"
            />
            <div>
                <h1 className="text-3xl font-bold">AJREarlyReleases</h1>
                <p className="text-sm">
                <span className="text-green-400 font-semibold">
                    {presenceCount !== null ? `${presenceCount.toLocaleString()} Online` : 'Loading...'}
                </span>{' '}
                ·{' '}
                <span className="text-gray-300">
                    {totalMembers !== null ? `${totalMembers.toLocaleString()} Members` : ''}
                </span>
                </p>
                {/* 👉 Join Server Button Here */}
                <a
                    href="https://discord.gg/AJR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg shadow-md transition"
                >
                    Join the Discord
                </a>
            </div>
            </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
            <section>
            <h2 className="text-2xl font-bold mb-4">The AJREarlyReleases Discord</h2>
            <p className="text-gray-300">
                Welcome to AJREarlyReleases, the largest fan-made server for the band AJR, an American indie-pop trio from New York.
            </p>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">🎧 Like a chill coffee shop</h3>
                <p>The latest music by AJR is discussed here!</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">📰 Fastest AJR news</h3>
                <p>The quickest place for AJR news online!</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">📢 Notifications</h3>
                <p>Get alerts for AJR-related content, events, and updates.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">🚀 Largest AJR Discord</h3>
                <p>The fastest growing AJR community available!</p>
            </div>
            </section>

            <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Community Highlights</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Frequent events and fun contests 🎉</li>
                <li>Giveaways and polls 📊</li>
                <li>Weekly questions and discussions 💬</li>
                <li>A welcoming place for all fans new and old 🤝</li>
            </ul>
            </section>
        </div>
        </div>
    </Layout>
  );
};

export default DiscordPage;
