import Image from "next/image";
import type { GalleryItem, SectionHeader } from "@/types";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardBody } from "@/components/ui/Card";

type GallerySectionProps = {
  header: SectionHeader;
  items: GalleryItem[];
};

export function GallerySection({ header, items }: GallerySectionProps) {
  return (
    <SectionContainer>
      <SectionTitle
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />
      <div className="grid grid--4">
        {items.map((item) => (
          <Card key={item.title}>
            <Image src={item.image} alt={item.title} width={280} height={240} />
            <CardBody>
              <h4>{item.title}</h4>
              <p className="text-muted">{item.tag}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
