import { useCallback, useRef, useState } from "react";

const VIDEOS = [
  "https://res.cloudinary.com/dqovfvo29/video/upload/q_auto/f_auto/v1779192604/6308670_Women_Friends_3840x2160_ecmokw.mp4",
  "https://res.cloudinary.com/dqovfvo29/video/upload/q_auto/f_auto/v1779192570/5406502_Coll_wavebreak_Raised_Arms_3840x2160_bb71nb.mp4",
  "https://res.cloudinary.com/dqovfvo29/video/upload/q_auto/f_auto/v1779193434/5394036_Coll_wavebreak_People_4096x2160_1_cknaj0.mp4",
];

export function useVideoCarousel() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = useCallback(() => {
    const nextIndex = (currentVideoIndex + 1) % VIDEOS.length;
    setIsTransitioning(true);
    if (nextVideoRef.current) {
      nextVideoRef.current.src = VIDEOS[nextIndex];
      nextVideoRef.current.play().catch(() => {});
    }
    setTimeout(() => {
      setCurrentVideoIndex(nextIndex);
      setIsTransitioning(false);
      if (videoRef.current) {
        videoRef.current.src = VIDEOS[nextIndex];
        videoRef.current.play().catch(() => {});
      }
    }, 1200);
  }, [currentVideoIndex]);

  return { VIDEOS, currentVideoIndex, isTransitioning, videoRef, nextVideoRef, handleVideoEnded };
}
