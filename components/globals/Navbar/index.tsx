import Link from "next/link";
import type { NavItem } from "@/types";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  return (
    <nav className="navbar" aria-label="Primary">
      <ul className="navbar__list">
        {items.map((item) => (
          <li key={item.label} className="navbar__item">
            <Link
              href={item.href}
              className="navbar__link"
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </Link>
            {item.children ? (
              <ul className="navbar__dropdown">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      target={child.target}
                      rel={child.target === "_blank" ? "noopener noreferrer" : undefined}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
