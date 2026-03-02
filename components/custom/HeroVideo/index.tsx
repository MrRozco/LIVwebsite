"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroVideo() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div>
            <p className="hero__eyebrow">Video Intro</p>
            <h1 className="hero__title">
              A guided path to <span>balanced</span> nutrition
            </h1>
            <p className="hero__text">
              Watch how our team builds meal strategies around your schedule and wellness goals.
            </p>
            <div className="hero__actions">
              <Button label="Book a Session" href="/contact" />
              <Button label="Start Assessment" href="/assessment" variant="outline" />
            </div>
          </div>
          <div className="hero__media">
            <Image
              src="/assets/images/hero-video.svg"
              alt="Video preview"
              width={560}
              height={420}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
