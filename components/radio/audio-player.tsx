"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

interface Track {
  id: number;
  name: string;
  artist: string;
  genre: string;
  duration: string;
  src?: string;
}

interface AudioPlayerProps {
  tracks: Track[];
  currentTrack: number;
  onTrackChange: (index: number) => void;
  onVisualizerData?: (data: Uint8Array | null) => void;
}

export function AudioPlayer({
  tracks,
  currentTrack,
  onTrackChange,
  onVisualizerData,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const track = tracks[currentTrack];

  // Setup audio analyzer
  useEffect(() => {
    if (!audioRef.current) return;

    const setupAnalyzer = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      if (!sourceRef.current && audioRef.current) {
        sourceRef.current = audioContextRef.current.createMediaElementSource(
          audioRef.current
        );
        analyzerRef.current = audioContextRef.current.createAnalyser();
        analyzerRef.current.fftSize = 256;
        sourceRef.current.connect(analyzerRef.current);
        analyzerRef.current.connect(audioContextRef.current.destination);
      }
    };

    const updateVisualizer = () => {
      if (analyzerRef.current && onVisualizerData) {
        const dataArray = new Uint8Array(
          analyzerRef.current.frequencyBinCount
        );
        analyzerRef.current.getByteFrequencyData(dataArray);
        onVisualizerData(dataArray);
      }
      animationRef.current = requestAnimationFrame(updateVisualizer);
    };

    if (isPlaying) {
      setupAnalyzer();
      updateVisualizer();
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      onVisualizerData?.(null);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, onVisualizerData]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    const newIndex = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    onTrackChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentTrack === tracks.length - 1 ? 0 : currentTrack + 1;
    onTrackChange(newIndex);
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-gradient-to-br from-muted to-background border-2 border-primary rounded-lg p-8 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />

      {/* Now Playing */}
      <div className="text-center mb-8">
        <div className="text-primary text-xs uppercase tracking-widest mb-2">
          Now Broadcasting
        </div>
        <div
          className="text-2xl font-bold text-foreground mb-1"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {track.name}
        </div>
        <div className="text-muted-foreground">{track.artist}</div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-5 mb-8">
        <button
          onClick={handlePrevious}
          className="w-14 h-14 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-background transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
        >
          <SkipBack className="w-6 h-6" />
        </button>

        <button
          onClick={togglePlay}
          className="w-20 h-20 rounded-full bg-primary text-background flex items-center justify-center hover:scale-110 transition-all shadow-[0_0_20px_rgba(220,38,38,0.6)]"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8 ml-1" />
          )}
        </button>

        <button
          onClick={handleNext}
          className="w-14 h-14 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-background transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
        >
          <SkipForward className="w-6 h-6" />
        </button>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-3 text-primary">
        <Volume2 className="w-5 h-5 shrink-0" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
          className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(220,38,38,0.8)]"
        />
        <span className="text-sm w-10 text-right">{volume}%</span>
      </div>

      {/* Time Display */}
      <div className="mt-5 text-center text-muted-foreground text-sm font-mono">
        {formatTime(currentTime)} / {formatTime(duration) || track.duration}
      </div>
    </div>
  );
}
