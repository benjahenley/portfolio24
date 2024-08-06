"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

type AudioContextType = {
  currentAudio: string | null;
  setCurrentAudio: (audio: string) => void;
  waveSurferRef: React.MutableRefObject<WaveSurfer | null>;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveSurferRef.current) {
      waveSurferRef.current.load(currentAudio || "");
    }
  }, [currentAudio]);

  return (
    <AudioContext.Provider
      value={{ currentAudio, setCurrentAudio, waveSurferRef }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
