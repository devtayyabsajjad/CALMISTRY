'use client'

import { useState } from 'react';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

// List of YouTube video IDs
const videoIds = [
    'koRbYQyPU0U',
  'DdIIhary3-E',
  'jyRFwFwZZ5c',
  // Add more video IDs as needed
];

const musicTracks = [
  { title: "Relaxing Music 1", src: "/music/relax1.mp3" },
  { title: "Relaxing Music 2", src: "/music/relax2.mp3" },
  { title: "Relaxing Music 3", src: "/music/relax3.mp3" },
];

export default function MeditationPage() {
  const [isOpen, setOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const openModal = (id) => {
    setCurrentVideoId(id);
    setOpen(true);
  };

  const playMusic = (track) => {
    if (currentTrack) {
      currentTrack.pause();
    }
    const audio = new Audio(track.src);
    audio.play();
    setCurrentTrack(audio);
    setIsPlaying(true);
    audio.onended = () => setIsPlaying(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Meditation Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoIds.map((videoId) => (
          <div key={videoId} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative aspect-video">
              <Image
                src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                alt="Video thumbnail"
                layout="fill"
                objectFit="cover"
                className="cursor-pointer"
                onClick={() => openModal(videoId)}
              />
              <button
                onClick={() => openModal(videoId)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
              >
                <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4l12 6-12 6z" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">Meditation Video</h2>
            </div>
          </div>
        ))}
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={currentVideoId}
        onClose={() => setOpen(false)}
      />

      <h2 className="text-3xl font-bold mt-8 mb-4 text-center">Background Music</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {musicTracks.map((track) => (
          <div key={track.title} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
            <button
              onClick={() => playMusic(track)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {isPlaying && currentTrack && currentTrack.src === track.src ? "Pause" : "Play"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
