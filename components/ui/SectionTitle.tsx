type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="section__header">
      {eyebrow ? <span className="badge">{eyebrow}</span> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section__description text-muted">{description}</p> : null}
    </div>
  );
}
