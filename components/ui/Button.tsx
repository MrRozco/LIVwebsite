import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({
  label,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = clsx(
    "btn",
    variant === "outline" && "btn--outline",
    variant === "ghost" && "btn--ghost",
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {label}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {label}
    </button>
  );
}
