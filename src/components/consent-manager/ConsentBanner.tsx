'use client';

import { useHeadlessConsentUI } from '@c15t/nextjs/headless';

export function ConsentBanner() {
  const { banner, performBannerAction } = useHeadlessConsentUI();

  if (!banner.isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-9999 max-w-md w-[calc(100vw-3rem)] md:w-md">
      <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <span className="text-white font-outfit font-semibold text-base tracking-tight">
            We use cookies
          </span>
          <p className="text-white text-sm font-outfit leading-relaxed">
            We use cookies to improve your experience, analyse site traffic, and personalise content. You can choose which cookies you allow.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => performBannerAction('accept')}
            className="flex-1 px-4 py-2.5 rounded-full bg-white text-black font-outfit font-semibold text-sm tracking-tight transition-colors duration-200 hover:bg-white/90 cursor-pointer"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => performBannerAction('reject')}
            className="flex-1 px-4 py-2.5 rounded-full border border-white/20 text-white font-outfit font-semibold text-sm tracking-tight transition-colors duration-200 hover:bg-white/5 cursor-pointer"
          >
            Reject all
          </button>
        </div>

        <p className="text-white text-[11px] font-mono leading-relaxed">
          By continuing to use this site, you agree to our{' '}
          <a href="/privacy" className="underline underline-offset-2 hover:text-white/70 transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
