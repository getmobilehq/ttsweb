import Link from "next/link";
import Image from "next/image";
import { TtsMark } from "./ui/TtsMark";
import { APPLY_URL, MAIL, FRAUD, PARTNERSHIP_EMAIL, TAG } from "@/lib/links";

// Static year stamped at build (Server Component) — no client Date to avoid
// hydration drift.
const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <h5>Explore</h5>
            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/stories">Stories of impact</Link>
              </li>
              <li>
                <Link href="/programmes">Programmes &amp; states</Link>
              </li>
              <li>
                <Link href="/insights">Insights &amp; updates</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Get involved</h5>
            <ul>
              <li>
                <a href={APPLY_URL}>Apply for free</a>
              </li>
              <li>
                <a href={MAIL}>Become a partner</a>
              </li>
              <li>
                <a href={MAIL}>{PARTNERSHIP_EMAIL}</a>
              </li>
              <li>
                <a href={FRAUD}>Report fraud</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-funder">
          <div className="foot-funder-credit">
            <span className="eyebrow">In partnership with</span>
            <Image
              src="/images/mastercard-foundation.png"
              alt="Mastercard Foundation"
              width={150}
              height={142}
              className="foot-funder-mark"
            />
          </div>
          <div className="foot-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <TtsMark size={42} />
              <div className="tag" style={{ marginTop: 0 }}>
                TTS Nigeria Initiative
              </div>
            </div>
            <p style={{ marginTop: 16, maxWidth: "40ch", fontSize: ".92rem" }}>{TAG}</p>
            <p style={{ marginTop: 18, fontSize: ".88rem" }}>
              <b style={{ color: "#fff" }}>TTS Nigeria is free, always.</b> We never charge for
              applications, training, or placement.
            </p>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {YEAR} Technology Talent Services Nigeria Initiative.</span>
          <span>A consortium programme advancing inclusive, impact-sourced digital work.</span>
        </div>
      </div>
    </footer>
  );
}
