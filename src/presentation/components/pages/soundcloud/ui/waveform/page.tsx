// components/Waveform.tsx
import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

interface WaveformProps {
  audioFile: string;
}

const Waveform: React.FC<WaveformProps> = ({ audioFile }) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveformRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        // waveColor: "#ddd",
        progressColor: "#ff5500",
        cursorColor: "#ff5500",
        barWidth: 2,
        barRadius: 3,
        // responsive: true,
        height: 65,
      });

      waveSurferRef.current.load(audioFile);

      return () => {
        waveSurferRef.current?.destroy();
      };
    }
  }, [audioFile]);

  return (
    <div>
      <div ref={waveformRef}></div>
      {/* <audio id="track" src={audioFile} controls></audio> */}
    </div>
  );
};

export default Waveform;
