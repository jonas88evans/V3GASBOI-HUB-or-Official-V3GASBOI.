"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Radio } from "lucide-react";
import { AudioPlayer } from "@/components/radio/audio-player";
import { AudioVisualizer } from "@/components/radio/audio-visualizer";
import { Playlist } from "@/components/radio/playlist";
import { Schedule } from "@/components/radio/schedule";

const defaultTracks = [
  {
    id: 1,
    name: "Independence Code",
    artist: "V3GASBOI",
    genre: "Hip Hop",
    duration: "3:45",
  },
  {
    id: 2,
    name: "Vegas Nights",
    artist: "V3GASBOI",
    genre: "Trap",
    duration: "2:55",
  },
  {
    id: 3,
    name: "88 Mob Anthem",
    artist: "V3GASBOI",
    genre: "Drill",
    duration: "3:12",
  },
  {
    id: 4,
    name: "Digital Hustle",
    artist: "V3GASBOI",
    genre: "Hip Hop",
    duration: "3:30",
  },
];

export default function RadioPage() {
  const [tracks] = useState(defaultTracks);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [visualizerData, setVisualizerData] = useState<Uint8Array | null>(null);

  const handleVisualizerData = useCallback((data: Uint8Array | null) => {
    setVisualizerData(data);
  }, []);

  return (
    <main className="min-h-screen bg-background relative">
      {/* Animated Background Grid */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow Effect */}
      <div className="fixed w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.3)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-5 py-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm uppercase tracking-wide">Back to Hub</span>
        </Link>

        {/* Header */}
        <header className="text-center pb-8 mb-8 border-b-[3px] border-primary relative">
          <div className="absolute top-5 right-5 bg-primary text-background px-4 py-1.5 font-bold text-sm animate-pulse flex items-center gap-2">
            <Radio className="w-4 h-4" />
            ON AIR
          </div>

          <h1
            className="text-5xl md:text-6xl font-black uppercase tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-[200%_200%] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite]"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            V3GASBOI RADIO
          </h1>
          <div className="text-3xl text-primary mt-3 font-bold tracking-[10px]">
            88.5 FM
          </div>
          <div className="text-muted-foreground mt-3">
            24/7 Hip Hop - Las Vegas - Independence Code
          </div>
        </header>

        {/* Player Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <AudioVisualizer data={visualizerData} />
          <AudioPlayer
            tracks={tracks}
            currentTrack={currentTrack}
            onTrackChange={setCurrentTrack}
            onVisualizerData={handleVisualizerData}
          />
        </div>

        {/* Playlist */}
        <div className="mb-10">
          <Playlist
            tracks={tracks}
            currentTrack={currentTrack}
            onTrackSelect={setCurrentTrack}
          />
        </div>

        {/* Schedule */}
        <div className="mb-10">
          <Schedule />
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border text-muted-foreground">
          <p>V3GASBOI RADIO - Broadcasting the Independence Code 24/7</p>
          <p className="mt-2 text-sm">#88Mob - Las Vegas, Nevada</p>
        </footer>
      </div>
    </main>
  );
}
