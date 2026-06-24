import { APPLY_URL } from "@/lib/links";
import { ribbon } from "@/lib/content";

export function Ribbon() {
  return (
    <div className="ribbon">
      <div className="ribbon-in">
        <span>
          <b>{ribbon.bold}</b> {ribbon.rest}
        </span>
        <a href={APPLY_URL}>Apply for free →</a>
      </div>
    </div>
  );
}
