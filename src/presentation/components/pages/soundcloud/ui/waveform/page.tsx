"use client";
import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

interface WaveformProps {
  audioFile: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const Waveform: React.FC<WaveformProps> = ({
  audioFile,
  isPlaying,
  onTogglePlay,
}) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveformRef.current && !waveSurferRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#ddd",
        progressColor: "#ff5500",
        cursorColor: "#ff5500",
        barWidth: 2,
        barRadius: 3,
        height: 65,
      });
      waveSurferRef.current.on("finish", () => {
        onTogglePlay();
      });
    }

    if (waveSurferRef.current) {
      waveSurferRef.current.load(audioFile);
    }

    return () => {
      waveSurferRef.current?.destroy();
      waveSurferRef.current = null;
    };
  }, [audioFile]);

  useEffect(() => {
    if (isPlaying) {
      waveSurferRef.current?.play();
    } else {
      waveSurferRef.current?.pause();
    }
  }, [isPlaying]);

  return <div ref={waveformRef} onClick={onTogglePlay}></div>;
};

export default Waveform;
