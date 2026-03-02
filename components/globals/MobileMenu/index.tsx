"use client";

import Link from "next/link";
import type { NavItem } from "@/types";
import clsx from "clsx";

type MobileMenuProps = {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  return (
    <div className={clsx("mobile-menu", isOpen && "mobile-menu--open")}>
      <button className="mobile-menu__close" onClick={onClose} type="button">
        Close
      </button>
      <ul className="mobile-menu__list">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              onClick={onClose}
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </Link>
            {item.children ? (
              <ul className="mobile-menu__sub">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      onClick={onClose}
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
    </div>
  );
}
