interface PhaseFrameProps {
  isActive: boolean;
  phaseId: string;
  children: React.ReactNode;
}

export function PhaseFrame({ isActive, phaseId, children }: PhaseFrameProps) {
  return (
    <div
      key={phaseId}
      className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isActive
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
}
