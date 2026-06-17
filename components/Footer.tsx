import { TtsMark } from "./ui/TtsMark";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-green-900 py-[46px] text-white/70">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-3">
          <TtsMark size={40} />
          <div>
            <div className="font-display text-[1.05rem] font-bold -tracking-[0.02em] text-white">
              {footer.tag}
            </div>
            <small className="text-[0.82rem] leading-[1.6]">{footer.tagline}</small>
          </div>
        </div>
        <small className="text-[0.82rem] leading-[1.6]">{footer.consortium}</small>
      </div>
    </footer>
  );
}
