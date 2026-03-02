import type { SelectHTMLAttributes } from "react";
import clsx from "clsx";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
};

export function Select({ className, ...props }: SelectProps) {
  return <select className={clsx("select", className)} {...props} />;
}
