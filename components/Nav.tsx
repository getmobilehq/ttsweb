"use client";

import { useState } from "react";
import { TtsMark } from "./ui/TtsMark";
import { navLinks, PARTNERSHIP_MAILTO } from "@/lib/content";

// Sticky, blur-on-scroll nav with a mobile hamburger. Smooth scrolling and
// heading clearance are handled in CSS (scroll-behavior + scroll-mt), so links
// are plain anchors; the menu just closes on selection.
export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/[0.86] backdrop-blur-[10px] backdrop-saturate-[140%]">
      <div className="mx-auto flex h-[68px] max-w-content items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-[34px] w-[34px] flex-none place-items-center">
            <TtsMark size={34} />
          </span>
          <span className="font-display text-[1.05rem] font-extrabold leading-none -tracking-[0.02em]">
            TTS Nigeria
            <small className="mt-px block text-[0.6rem] font-semibold uppercase leading-none tracking-[0.18em] text-green">
              Initiative
            </small>
          </span>
        </a>

        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-[68px] flex-col items-stretch gap-0 border-b border-line bg-white px-6 pb-[18px] pt-2 wide:static wide:flex wide:flex-row wide:items-center wide:gap-[30px] wide:border-0 wide:bg-transparent wide:p-0`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-[0.92rem] font-medium text-muted hover:text-ink wide:border-0 wide:py-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PARTNERSHIP_MAILTO}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-green px-5 py-[11px] text-[0.92rem] font-semibold text-[#062f1d] transition-colors hover:bg-green-600 hover:text-white wide:mt-0"
          >
            Partner with us
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="p-2 wide:hidden"
        >
          <span className="my-1 block h-0.5 w-[22px] rounded bg-ink" />
          <span className="my-1 block h-0.5 w-[22px] rounded bg-ink" />
          <span className="my-1 block h-0.5 w-[22px] rounded bg-ink" />
        </button>
      </div>
    </header>
  );
}
