import { useCallback, useEffect, useState } from "react";

const SLIDE_DURATION_MS = 15000;
const TICK_MS = 30;
const STEP = (TICK_MS / SLIDE_DURATION_MS) * 100;

interface UseAutoProgressOptions {
  count: number;
  isPaused: boolean;
  onTransition: (nextIndex: number) => void;
}

export function useAutoProgress({ count, isPaused, onTransition }: UseAutoProgressOptions) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback(
    (nextIndex: number) => {
      onTransition(nextIndex);
      setSelectedIndex(nextIndex);
      setProgress(0);
    },
    [onTransition],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (isPaused) return prev;
        if (prev >= 100) {
          setSelectedIndex((i) => {
            const next = (i + 1) % count;
            goTo(next);
            return i;
          });
          return 0;
        }
        return prev + STEP;
      });
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [isPaused, count, goTo]);

  return { selectedIndex, progress, goTo };
}
