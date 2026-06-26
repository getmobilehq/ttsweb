import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { FRAUD } from "@/lib/links";
import { fraud } from "@/lib/content";

// Safeguarding element — keep its prominence; do not bury it (HANDOFF_V2 §6).
export function FraudBand() {
  return (
    <section className="fraud">
      <div className="wrap">
        <Reveal className="fraud-card">
          <div className="fraud-badge">
            <Icon name="shield" />
          </div>
          <div>
            <h3>{fraud.heading}</h3>
            <p>
              {fraud.bodyBefore}
              <b>{fraud.bodyBold}</b>
              {fraud.bodyAfter}
            </p>
          </div>
          <a className="btn btn-dark" href={FRAUD}>
            Report fraud
          </a>
        </Reveal>
      </div>
    </section>
  );
}
