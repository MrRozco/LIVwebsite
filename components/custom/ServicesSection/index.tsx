import Image from "next/image";
import type { SectionHeader, Service } from "@/types";
import { Card, CardBody } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

type ServicesSectionProps = {
  header: SectionHeader;
  items: Service[];
};

export function ServicesSection({ header, items }: ServicesSectionProps) {
  return (
    <SectionContainer>
      <SectionTitle
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />
      <div className="grid grid--3">
        {items.map((service) => (
          <Card key={service.title} className="services__card">
            <div className="services__image">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="services__image-img"
              />
            </div>
            <CardBody>
              <h3 className="services__title">{service.title}</h3>
              <p>{service.description}</p>
              <Button label={service.ctaLabel} href={service.href} variant="ghost" />
            </CardBody>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
