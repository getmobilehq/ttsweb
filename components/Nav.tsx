"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TtsMark } from "./ui/TtsMark";
import { APPLY_URL, BPO_REGISTER } from "@/lib/links";

const PAGES: [string, string][] = [
  ["/", "Home"],
  ["/about", "About"],
  ["/stories", "Stories"],
  ["/programmes", "Programmes"],
  ["/insights", "Insights"],
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="logo" onClick={close}>
          <TtsMark size={36} />
          <span>
            TTS Nigeria<small>Initiative</small>
          </span>
        </Link>
        <nav className={`nav-mid ${open ? "open" : ""}`}>
          {PAGES.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className={pathname === href ? "active" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-end">
          <a className="btn btn-ghost" href={BPO_REGISTER}>
            Become a BPO partner
          </a>
          <a className="btn btn-primary keep" href={APPLY_URL}>
            Apply for free
          </a>
          <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
