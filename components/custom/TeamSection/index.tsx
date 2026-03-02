import Image from "next/image";
import type { SectionHeader, TeamMember } from "@/types";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";

type TeamSectionProps = {
  header: SectionHeader;
  members: TeamMember[];
};

export function TeamSection({ header, members }: TeamSectionProps) {
  return (
    <SectionContainer>
      <SectionTitle
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />
      <div className="grid grid--4">
        {members.map((member) => (
          <div key={member.name} className="team__card">
            <div className="team__image">
              <Image src={member.image} alt={member.name} width={280} height={320} />
            </div>
            <h4>{member.name}</h4>
            <p className="team__role">{member.role}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
