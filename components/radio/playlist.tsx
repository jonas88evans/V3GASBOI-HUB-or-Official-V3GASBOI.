"use client";

import { cn } from "@/lib/utils";

interface Track {
  id: number;
  name: string;
  artist: string;
  genre: string;
  duration: string;
  src?: string;
}

interface PlaylistProps {
  tracks: Track[];
  currentTrack: number;
  onTrackSelect: (index: number) => void;
}

export function Playlist({ tracks, currentTrack, onTrackSelect }: PlaylistProps) {
  return (
    <div className="bg-muted/90 border border-border rounded-lg p-8">
      <h2
        className="text-primary text-xl mb-5 uppercase tracking-widest border-b-2 border-primary pb-3"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Rotation Playlist
      </h2>

      <div className="max-h-[400px] overflow-y-auto">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            onClick={() => onTrackSelect(index)}
            className={cn(
              "flex items-center p-4 border-b border-border/50 cursor-pointer transition-all relative overflow-hidden",
              "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-primary before:scale-y-0 before:transition-transform",
              currentTrack === index
                ? "bg-primary/10 pl-6 before:scale-y-100"
                : "hover:bg-primary/10 hover:pl-6 hover:before:scale-y-100"
            )}
          >
            <span className="text-muted-foreground w-8 font-bold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <div className="font-bold text-foreground">{track.name}</div>
              <div className="text-xs text-muted-foreground">
                {track.artist} - {track.genre}
              </div>
            </div>
            <span className="text-primary font-mono">{track.duration}</span>
            {currentTrack === index && (
              <span className="ml-3 text-primary animate-bounce">|||</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
