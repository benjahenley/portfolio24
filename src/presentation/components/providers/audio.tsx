"use client";

import { createContext, useContext, useState, useEffect, FC } from "react";

type AudioContextType = {
  currentAudio: string | null;
  isPlaying: boolean;
  playAudio: (audioFile: string) => void;
  pauseAudio: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

type Props = {
  children: any;
};

export const AudioProvider = ({ children }: Props) => {
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (audioFile: string) => {
    if (currentAudio && currentAudio !== audioFile) {
      setIsPlaying(false);
    }
    setCurrentAudio(audioFile);
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    setIsPlaying(false);
  };

  return (
    <AudioContext.Provider
      value={{ currentAudio, isPlaying, playAudio, pauseAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
