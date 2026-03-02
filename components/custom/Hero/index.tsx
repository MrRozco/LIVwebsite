"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { HeroSlide } from "@/types";

type HeroProps = {
  slides: HeroSlide[];
};

export function Hero({ slides }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const safeSlides = useMemo(() => (slides.length ? slides : []), [slides]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (safeSlides.length <= 1) {
      return;
    }
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeSlides.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, [safeSlides.length]);

  const slide = safeSlides[activeIndex] ?? safeSlides[0] ?? slides[0] ?? null;
  const highlightSet = useMemo(() => {
    const words = slide?.highlight ?? [];
    return new Set(words.map((word) => word.toLowerCase()));
  }, [slide?.highlight]);

  const renderTitle = (title: string) =>
    title.split(" ").map((word, index, array) => {
      const cleaned = word.replace(/[^a-z0-9]/gi, "").toLowerCase();
      const isHighlighted = highlightSet.has(cleaned);
      return (
        <span key={`${word}-${index}`} className={isHighlighted ? "hero__highlight" : undefined}>
          {word}
          {index < array.length - 1 ? " " : ""}
        </span>
      );
    });

  if (!slide) {
    return null;
  }

  return (
    <section className="hero">
      <div className="container">
        <h1 className="sr-only">{slide.title}</h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            className="hero__slide"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="hero__grid">
              <div>
                <Reveal>
                  <p className="hero__eyebrow">{slide.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.2}>
                  <h2 className="hero__title">{renderTitle(slide.title)}</h2>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="hero__text">{slide.description}</p>
                </Reveal>
                <Reveal delay={0.4}>
                  <div className="hero__actions">
                    <Button label="Book a Consultation" href="/contact" />
                    <Button label="Start Assessment" href="/assessment" variant="outline" />
                  </div>
                </Reveal>
              </div>
              <Reveal delay={0.2}>
                <div className="hero__media">
                  <Image
                    src={slide.image}
                    alt="Nutrition coaching"
                    width={560}
                    height={520}
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
