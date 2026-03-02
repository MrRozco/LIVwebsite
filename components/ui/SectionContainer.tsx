import type { ReactNode } from "react";
import clsx from "clsx";

type SectionContainerProps = {
  children: ReactNode;
  variant?: "default" | "light";
  className?: string;
};

export function SectionContainer({
  children,
  variant = "default",
  className,
}: SectionContainerProps) {
  return (
    <section className={clsx("section", variant === "light" && "section--light", className)}>
      <div className="container">{children}</div>
    </section>
  );
}
