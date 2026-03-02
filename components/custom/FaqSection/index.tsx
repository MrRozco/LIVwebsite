import type { FaqItem, SectionHeader } from "@/types";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";

type FaqSectionProps = {
  header: SectionHeader;
  items: FaqItem[];
};

export function FaqSection({ header, items }: FaqSectionProps) {
  return (
    <SectionContainer variant="light">
      <SectionTitle
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />
      <div>
        {items.map((item) => (
          <div key={item.question} className="faq__item">
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
