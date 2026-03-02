import type { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <div className={clsx("card", className)}>{children}</div>;
}

export function CardBody({ children, className }: CardProps) {
  return <div className={clsx("card__body", className)}>{children}</div>;
}
