"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  className?: string;
  label?: string;
};

const baseClasses =
  "rounded-full border border-white/30 bg-black/40 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur transition hover:bg-black/60";

const BackButton = ({ className, label = "Back" }: BackButtonProps) => {
  const router = useRouter();
  const classes = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={classes}
    >
      ← {label}
    </button>
  );
};

export default BackButton;

