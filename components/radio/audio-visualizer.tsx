"use client";

import { useRef, useEffect } from "react";

interface AudioVisualizerProps {
  data: Uint8Array | null;
}

export function AudioVisualizer({ data }: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, rect.width, rect.height);

    if (!data) {
      // Draw idle state
      const bars = 64;
      const barWidth = rect.width / bars;
      ctx.fillStyle = "#dc2626";

      for (let i = 0; i < bars; i++) {
        const height = Math.random() * 10 + 2;
        const x = i * barWidth;
        const y = rect.height - height;
        ctx.fillRect(x, y, barWidth - 2, height);
      }
      return;
    }

    // Draw visualizer
    const bars = Math.min(data.length, 64);
    const barWidth = rect.width / bars;

    for (let i = 0; i < bars; i++) {
      const percent = data[i] / 255;
      const height = rect.height * percent * 0.9;
      const x = i * barWidth;
      const y = rect.height - height;

      // Gradient color from red to orange based on height
      const gradient = ctx.createLinearGradient(x, rect.height, x, y);
      gradient.addColorStop(0, "#dc2626");
      gradient.addColorStop(1, "#d97706");
      ctx.fillStyle = gradient;

      ctx.fillRect(x, y, barWidth - 2, height);
    }
  }, [data]);

  return (
    <div className="bg-gradient-to-br from-muted to-background border-2 border-primary rounded-lg p-5 shadow-[0_0_20px_rgba(220,38,38,0.3)] relative overflow-hidden">
      <div className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 bg-gradient-to-br from-primary/50 via-transparent to-primary/50 -z-10 rounded-lg opacity-50" />
      <canvas
        ref={canvasRef}
        className="w-full h-[200px] bg-background rounded"
      />
      <div className="text-center mt-3 text-muted-foreground text-xs uppercase tracking-widest">
        Live Audio Visualizer
      </div>
    </div>
  );
}
