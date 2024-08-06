import React, { useCallback, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

interface WaveformProps {
  audioFile: string;
}

const Waveform: React.FC<WaveformProps> = ({ audioFile }) => {
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
    }

    if (waveSurferRef.current) {
      waveSurferRef.current.load(audioFile);
    }

    return () => {
      // waveSurferRef.current?.destroy();
      // waveSurferRef.current = null;
    };
  }, [audioFile]);

  return <div ref={waveformRef}></div>;
};

export default Waveform;
