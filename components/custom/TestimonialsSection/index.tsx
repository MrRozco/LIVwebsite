import Image from "next/image";
import type { SectionHeader, Testimonial } from "@/types";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";

type TestimonialsSectionProps = {
  header: SectionHeader;
  items: Testimonial[];
};

export function TestimonialsSection({ header, items }: TestimonialsSectionProps) {
  return (
    <SectionContainer variant="light">
      <SectionTitle
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />
      <div className="grid grid--3">
        {items.map((item) => (
          <div key={item.name} className="testimonial">
            <p className="testimonial__quote">“{item.quote}”</p>
            <div className="testimonial__meta">
              <Image src={item.image} alt={item.name} width={56} height={56} />
              <div>
                <strong>{item.name}</strong>
                <p className="text-muted">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
