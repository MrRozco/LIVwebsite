type IconButtonProps = {
  label: string;
  icon: string;
};

export function IconButton({ label, icon }: IconButtonProps) {
  return (
    <button className="btn btn--icon" type="button" aria-label={label}>
      <span>{icon}</span>
    </button>
  );
}
