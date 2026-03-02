import type { PricingPlan, SectionHeader } from "@/types";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

type PricingSectionProps = {
  header: SectionHeader;
  plans: PricingPlan[];
};

export function PricingSection({ header, plans }: PricingSectionProps) {
  return (
    <SectionContainer variant="light">
      <SectionTitle
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />
      <div className="grid grid--3">
        {plans.map((plan) => (
          <div key={plan.name} className="pricing__card">
            <h3>{plan.name}</h3>
            <p className="pricing__price">{plan.price}</p>
            <p>{plan.description}</p>
            <ul className="pricing__list">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <Button label="Get Started" href="/contact" />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
