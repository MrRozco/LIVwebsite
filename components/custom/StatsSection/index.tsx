import type { Stat } from "@/types";
import { SectionContainer } from "@/components/ui/SectionContainer";

type StatsSectionProps = {
  stats: Stat[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <SectionContainer>
      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stats__item">
            <div className="stats__value">{stat.value}</div>
            <p className="text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
