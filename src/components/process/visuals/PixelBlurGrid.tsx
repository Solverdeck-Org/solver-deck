interface PixelBlurGridProps {
  cols: number;
  rows: number;
  blurredCells: Set<string>;
  className?: string;
}

export function PixelBlurGrid({ cols, rows, blurredCells, className }: PixelBlurGridProps) {
  return (
    <div
      className={`pointer-events-none ${className ?? ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const key = `${col}-${row}`;
        if (!blurredCells.has(key)) return <div key={key} className="w-full h-full" />;
        return (
          <div
            key={key}
            className="w-full h-full backdrop-blur-3xl backdrop-saturate-200 bg-white/5 border-[0.5px] border-white/5"
          />
        );
      })}
    </div>
  );
}
