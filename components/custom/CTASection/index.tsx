import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import type { CTABlock } from "@/types";

type CTASectionProps = {
  content: CTABlock;
};

export function CTASection({ content }: CTASectionProps) {
  return (
    <SectionContainer className="cta">
      <div className="cta__layout">
        <div className="cta__content">
          <span className="cta__eyebrow">{content.eyebrow}</span>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <ul className="cta__bullets">
            {content.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="cta__actions">
            <Button label={content.primaryCtaLabel} href={content.primaryCtaHref} />
            <Button
              label={content.secondaryCtaLabel}
              href={content.secondaryCtaHref}
              variant="outline"
            />
          </div>
          <p className="cta__reassurance">{content.reassurance}</p>
        </div>
        <div className="cta__card">
          <div className="cta__highlight">
            <span>{content.highlightLabel}</span>
            <strong>{content.highlightValue}</strong>
          </div>
          <div className="cta__card-body">
            <h3>What happens next</h3>
            <ol>
              <li>Complete the assessment in minutes.</li>
              <li>Receive a personalized plan from Dr. Obi.</li>
              <li>Start measurable progress within 7 days.</li>
            </ol>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
