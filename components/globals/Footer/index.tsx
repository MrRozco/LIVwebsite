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
              alt="NutriCare"
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
            <li>+1 (555) 840-2398</li>
            <li>hello@nutricare.com</li>
            <li>42 Wellness Avenue, Portland</li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p>Weekly tips, recipes, and wellness insights.</p>
          <form className="footer__form">
            <input className="input" placeholder="Email address" />
            <button className="btn btn--ghost" type="submit">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2026 Living in Vibrance. All rights reserved.</span>
        <div className="footer__links">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}
