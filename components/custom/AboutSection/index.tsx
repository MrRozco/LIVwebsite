"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import type { AboutBlock } from "@/types";

type AboutSectionProps = {
  content: AboutBlock;
};

export function AboutSection({ content }: AboutSectionProps) {
  const imagePosition = content.imagePosition ?? "right";

  return (
    <SectionContainer variant="light">
      <div className={`about ${imagePosition === "left" ? "about--image-left" : ""}`}>
        <div className="about__content">
          <SectionTitle
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          {content.highlights?.length ? (
            <ul className="about__list">
              {content.highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <span>✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          ) : null}
          <div className="about__actions">
            <Button label={content.ctaLabel} href={content.ctaHref} />
          </div>
        </div>
        <div className="about__panel">
          <Image
            src={content.image}
            alt="About nutrition"
            width={520}
            height={420}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
