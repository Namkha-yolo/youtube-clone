import React, { useState } from 'react';
import { Search, Menu, Home, Compass, PlaySquare, ThumbsUp, Bell, User } from 'lucide-react';

const YouTubeClone = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample video data
  const videos = [
    {
      id: 1,
      title: 'How to Build a React App in 10 Minutes',
      channel: 'CodeMaster',
      views: '1.2M views',
      timestamp: '3 days ago',
      thumbnail: '/api/placeholder/320/180',
      avatar: '/api/placeholder/36/36',
      duration: '10:15'
    },
    {
      id: 2,
      title: 'Beautiful Mountain Landscapes - Relaxing Nature Footage',
      channel: 'NatureVibes',
      views: '4.5M views',
      timestamp: '2 weeks ago',
      thumbnail: '/api/placeholder/320/180',
      avatar: '/api/placeholder/36/36',
      duration: '25:30'
    },
    {
      id: 3,
      title: 'Learn JavaScript Fundamentals - Complete Course',
      channel: 'WebDevPro',
      views: '850K views',
      timestamp: '1 month ago',
      thumbnail: '/api/placeholder/320/180',
      avatar: '/api/placeholder/36/36',
      duration: '1:45:20'
    },
    {
      id: 4,
      title: 'Easy Dinner Recipes for Beginners',
      channel: 'CookingWithJoy',
      views: '2.3M views',
      timestamp: '5 days ago',
      thumbnail: '/api/placeholder/320/180',
      avatar: '/api/placeholder/36/36',
      duration: '18:42'
    },
    {
      id: 5,
      title: 'The History of Space Exploration',
      channel: 'ScienceNow',
      views: '1.8M views',
      timestamp: '3 months ago',
      thumbnail: '/api/placeholder/320/180',
      avatar: '/api/placeholder/36/36',
      duration: '32:15'
    },
    {
      id: 6,
      title: 'Top 10 Travel Destinations for 2025',
      channel: 'TravelGuide',
      views: '3.7M views',
      timestamp: '2 weeks ago',
      thumbnail: '/api/placeholder/320/180',
      avatar: '/api/placeholder/36/36',
      duration: '15:10'
    }
  ];

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    window.scrollTo(0, 0);
  };

  const VideoDetails = ({ video }) => (
    <div className="flex flex-col w-full">
      <div className="w-full bg-black aspect-video flex items-center justify-center text-white">
        <PlaySquare size={48} />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold">{video.title}</h1>
        <div className="flex items-center justify-between mt-2">
          <div className="text-gray-500">{video.views} • {video.timestamp}</div>
          <div className="flex space-x-4">
            <button className="flex items-center gap-1"><ThumbsUp size={20} /> Like</button>
            <button className="flex items-center gap-1">Share</button>
            <button className="flex items-center gap-1">Save</button>
          </div>
        </div>
        <div className="flex items-center mt-4 pb-4 border-b">
          <div className="rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center overflow-hidden">
            <img src={video.avatar} alt={video.channel} />
          </div>
          <div className="ml-3">
            <div className="font-bold">{video.channel}</div>
            <div className="text-gray-500 text-sm">1.2M subscribers</div>
          </div>
          <button className="ml-auto bg-red-600 text-white px-4 py-2 rounded-full">Subscribe</button>
        </div>
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <div className="font-bold">Description</div>
          <p className="mt-2 text-sm">This is a sample description for the video. It would contain details about the video content, links to resources mentioned, timestamps for different sections, and more information about the creator.</p>
        </div>
        <div className="mt-4">
          <div className="font-bold mb-2">Comments • 1,024</div>
          <div className="flex items-start mt-4">
            <div className="rounded-full bg-gray-300 w-8 h-8 flex-shrink-0"></div>
            <div className="ml-3 w-full">
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="w-full border-b pb-1 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-start mt-4">
            <div className="rounded-full bg-gray-300 w-8 h-8 flex-shrink-0"></div>
            <div className="ml-3">
              <div className="font-bold text-sm">ViewerOne <span className="font-normal text-gray-500">3 days ago</span></div>
              <div className="mt-1">This video was really helpful! Thanks for sharing your knowledge.</div>
              <div className="flex items-center mt-1 text-sm text-gray-600">
                <button className="flex items-center mr-4"><ThumbsUp size={14} /> 245</button>
                <button>Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VideoCard = ({ video, isRecommended = false }) => (
    <div 
      className={`cursor-pointer ${isRecommended ? 'flex gap-2' : 'flex-col'}`} 
      onClick={() => handleVideoSelect(video)}
    >
      <div className={`relative ${isRecommended ? 'w-40 flex-shrink-0' : 'w-full'}`}>
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full object-cover"
        />
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className={`${isRecommended ? 'flex-1' : 'flex mt-2'}`}>
        {!isRecommended && (
          <div className="w-9 h-9 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
            <img src={video.avatar} alt={video.channel} />
          </div>
        )}
        <div className={`${isRecommended ? '' : 'ml-2'}`}>
          <h3 className={`font-semibold ${isRecommended ? 'text-sm' : 'text-base'} line-clamp-2`}>{video.title}</h3>
          <p className="text-gray-500 text-sm">{video.channel}</p>
          <p className="text-gray-500 text-xs">{video.views} • {video.timestamp}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center">
          <button className="mr-4"><Menu size={24} /></button>
          <div className="flex items-center text-2xl font-bold">
            <span className="text-red-600">You</span>Tube
          </div>
        </div>
        <div className="flex-1 max-w-xl mx-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded-l-full px-4 focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-gray-100 px-5 rounded-r-full border border-l-0">
              <Search size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button><Bell size={24} /></button>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <User size={20} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-16 md:w-56 bg-white flex-shrink-0 fixed left-0 top-14 bottom-0 overflow-y-auto hidden md:block">
          <div className="py-2">
            <div className="flex flex-col items-center md:items-start">
              <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-lg">
                <Home size={24} />
                <span className="ml-4 hidden md:inline">Home</span>
              </button>
              <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-lg">
                <Compass size={24} />
                <span className="ml-4 hidden md:inline">Explore</span>
              </button>
              <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-lg">
                <PlaySquare size={24} />
                <span className="ml-4 hidden md:inline">Subscriptions</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 md:ml-16 lg:ml-56 p-4">
          {selectedVideo ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <VideoDetails video={selectedVideo} />
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-bold">Recommended videos</h2>
                {filteredVideos
                  .filter(v => v.id !== selectedVideo.id)
                  .map(video => (
                    <VideoCard key={video.id} video={video} isRecommended />
                  ))}
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-xl font-bold mb-4">Recommended</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredVideos.map(video => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default YouTubeClone;
