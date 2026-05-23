export function PhaseBackground() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="w-full h-full text-white"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <title>Diagonal Grid Pattern Background</title>
          <defs>
            <pattern id="cross-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="20" y1="15" x2="20" y2="25" stroke="currentColor" strokeWidth="1" />
              <line x1="15" y1="20" x2="25" y2="20" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cross-grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_80%)] pointer-events-none" />
    </>
  );
}
