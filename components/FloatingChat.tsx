'use client';

import * as React from 'react';
import { useChat } from '@ai-sdk/react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AiFillMessage } from 'react-icons/ai';

export default function FloatingChat() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [localError, setLocalError] = React.useState<string | null>(null);

  // Keep it simple for compatibility: do not pass unsupported options
  // If you changed your route path, add { api: '/api/chat' } here only if
  // your version supports `api`. Otherwise, rely on the default '/api/chat'.
  const { messages, status, sendMessage, error } = useChat();

  // Focus textarea on open
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  React.useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [open]);

  // Auto-scroll on stream updates
  const listRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const id = requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
    return () => cancelAnimationFrame(id);
  }, [messages, status]);

  const derivedError =
    localError || (error ? error.message || 'Something went wrong' : null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLocalError(null);

    const text = input.trim();
    if (!text) return;

    if (status !== 'ready') {
      setLocalError('Please wait for the current response to finish.');
      return;
    }

    // Clear immediately so the textarea empties on Enter
    setInput('');

    try {
      // Start streaming; we can await but UI is already cleared
      await sendMessage({ parts: [{ type: 'text', text }] });
    } catch (err: any) {
      setLocalError(err?.message || 'Failed to send message. Please try again.');
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && status === 'ready') {
        (e.currentTarget.closest('form') as HTMLFormElement | null)
          ?.requestSubmit();
      }
    }
  }

  const isBusy = status !== 'ready';

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        aria-label="Open SolverDeck chat"
        className="fixed bottom-5 right-5 z-50 size-14 rounded-full bg-[#1800AD] shadow-lg hover:bg-[#1800AD]/90"
      >
        <AiFillMessage size={22} />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="flex h-full w-[380px] max-w-[92vw] flex-col bg-black p-0"
        >
          <SheetHeader className="border-b px-4 py-3">
            <SheetTitle className="text-white">solverdeck assistant</SheetTitle>
          </SheetHeader>

          {/* Scrollable messages */}
          <div
            ref={listRef}
            className="min-h-0 flex-1 overflow-y-auto px-3 py-3"
            aria-live="polite"
            aria-busy={isBusy}
          >
            <div className="space-y-3">
              {/* Static welcome bubble (since we don't pass initialMessages) */}
              {messages.length === 0 && (
                <div className="flex w-full justify-start">
                  <div className="max-w-[80%] whitespace-pre-wrap rounded-lg bg-white px-3 py-2 text-sm text-[#1800AD]">
                    Hi! I’m the SolverDeck assistant. Ask about our services,
                    case studies, or how to contact us.
                  </div>
                </div>
              )}

              {messages.map((m) => {
                const isUser = m.role === 'user';
                return (
                  <div
                    key={m.id}
                    className={`flex w-full ${
                      isUser ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] whitespace-pre-wrap rounded-lg px-3 py-2 text-sm ${
                        isUser
                          ? 'bg-[#1800AD] text-white'
                          : 'bg-white text-[#1800AD]'
                      }`}
                    >
                      {m.parts.map((part, idx) => {
                        if (part.type === 'text') return <span key={idx}>{part.text}</span>;
                        return null;
                      })}
                    </div>
                  </div>
                );
              })}

              {isBusy && (
                <div className="text-xs text-white/80">Thinking…</div>
              )}

              {derivedError && (
                <div
                  role="alert"
                  className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200"
                >
                  {derivedError}
                </div>
              )}
            </div>
          </div>

          {/* Composer */}
          <form onSubmit={onSubmit} className="border-t border-white/10 p-3">
            <div className="flex items-end gap-2">
              <Textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about SolverDeck…"
                rows={1}
                className="min-h-[40px] resize-none bg-transparent text-white placeholder-white/50"
                aria-label="Message"
              />
              <Button
                type="submit"
                disabled={isBusy}
                aria-disabled={isBusy}
                className="h-[40px] bg-[#1800AD] text-white hover:bg-[#1800AD]/90 disabled:opacity-60"
              >
                Send
              </Button>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => setInput('What services does SolverDeck provide?')}
                className="bg-white text-[#1800AD]"
              >
                Services
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => setInput('How can I contact SolverDeck?')}
                className="bg-white text-[#1800AD]"
              >
                Contact
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() =>
                  setInput('Share recent case studies from SolverDeck.')
                }
                className="bg-white text-[#1800AD]"
              >
                Case studies
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
}