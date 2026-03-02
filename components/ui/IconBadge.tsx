import Image from "next/image";

type IconBadgeProps = {
  icon: string;
  label: string;
};

export function IconBadge({ icon, label }: IconBadgeProps) {
  return (
    <div className="badge">
      <Image src={icon} alt="" width={18} height={18} />
      <span>{label}</span>
    </div>
  );
}
