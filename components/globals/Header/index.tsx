"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/navigation";
import { Navbar } from "@/components/globals/Navbar";
import { MobileMenu } from "@/components/globals/MobileMenu";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container header__top-inner">
          <span>Welcome to Living in Vibrance</span>
          <div className="header__social">
            <a href="#" aria-label="Facebook" className="header__social-link">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                focusable="false"
                className="header__social-icon"
              >
                <path
                  fill="currentColor"
                  d="M13.5 8.6V7c0-1 .7-1.2 1.2-1.2h2.1V3h-2.9C11.3 3 10 4.4 10 6.7v1.9H8v2.8h2V21h3.5v-9.6H16l.5-2.8h-3z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container header__main">
        <Link href="/" className="header__logo">
          <Image
            src="/assets/images/livinginvibrance_logo_font.png"
            alt="Living in Vibrance"
            width={140}
            height={140}
          />
        </Link>
        <div className="header__right">
          <Navbar items={navItems} />
          <div className="header__actions">
            <Button label="Free Consultation" href="/contact" />
            <button
              className={`header__toggle ${menuOpen ? "is-open" : ""}`}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu items={navItems} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
