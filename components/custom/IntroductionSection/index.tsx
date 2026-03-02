import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import type { IntroductionBlock } from "@/types";

type IntroductionSectionProps = {
  content: IntroductionBlock;
};

export function IntroductionSection({ content }: IntroductionSectionProps) {
  return (
    <SectionContainer className="intro">
      <div className="intro__wrapper">
        <div className="intro__content">
          <h2 className="intro__title">{content.title}</h2>
          <p className="intro__text">{content.description}</p>
          <div className="intro__actions">
            <Button label={content.ctaLabel} href={content.ctaHref} />
          </div>
        </div>
        <div className="intro__media">
          <Image
            src={content.image}
            alt={content.imageAlt}
            width={520}
            height={520}
            className="intro__image"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
