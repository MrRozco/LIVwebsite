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
            <a href="#" aria-label="Facebook">
              Fb
            </a>
            <a href="#" aria-label="Instagram">
              Ig
            </a>
            <a href="#" aria-label="X">
              X
            </a>
            <a href="#" aria-label="Behance">
              Be
            </a>
          </div>
        </div>
      </div>
      <div className="container header__main">
        <Link href="/" className="header__logo">
          <Image
            src="/assets/images/livinginvibrance_logo_no_font.png"
            alt="NutriCare"
            width={36}
            height={36}
          />
          Living in Vibrance
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
