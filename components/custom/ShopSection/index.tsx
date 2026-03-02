import Image from "next/image";
import Link from "next/link";
import type { Product, SectionHeader } from "@/types";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardBody } from "@/components/ui/Card";

type ShopSectionProps = {
  header: SectionHeader;
  items: Product[];
};

export function ShopSection({ header, items }: ShopSectionProps) {
  return (
    <SectionContainer>
      <SectionTitle
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />
      <div className="grid grid--3">
        {items.map((item) => (
          <Card key={item.name}>
            <Image src={item.image} alt={item.name} width={320} height={240} />
            <CardBody>
              <h4>
                <Link href={item.href}>{item.name}</Link>
              </h4>
              <p className="shop__price">{item.price}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
