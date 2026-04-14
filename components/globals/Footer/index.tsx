import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div>
          <div className="footer__logo">
            <Image
              src="/assets/images/livinginvibrance_logo_font.png"
              alt="Living in Vibrance"
              width={200}
              height={200}
            />
          </div>
          <p>Thoughtful nutrition support, built around your lifestyle and goals.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {navItems.slice(0, 4).map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+13016756700">(301) 675-6700</a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=9701+Apollo+Dr,+Largo,+MD+20774"
                target="_blank"
                rel="noopener noreferrer"
              >
                9701 Apollo Dr, Largo, MD 20774
              </a>
            </li>
            <li>Mon – Sat: 7:00 AM – 7:00 PM</li>
            <li>Appointments Only</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>
          © 2026 Living in Vibrance. All rights reserved. Site made by{" "}
          <a href="https://appleseedsites.com" target="_blank" rel="noopener noreferrer">
            AppleSeedSites
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
