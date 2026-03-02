import Image from "next/image";
import Link from "next/link";
import type { BlogPost, SectionHeader } from "@/types";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardBody } from "@/components/ui/Card";

type BlogSectionProps = {
  header: SectionHeader;
  posts: BlogPost[];
};

export function BlogSection({ header, posts }: BlogSectionProps) {
  return (
    <SectionContainer>
      <SectionTitle
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />
      <div className="grid grid--3">
        {posts.map((post) => (
          <Card key={post.title}>
            <Image src={post.image} alt="" width={400} height={260} />
            <CardBody>
              <div className="blog__meta">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>
              <h3 className="blog__title">
                <Link href={post.href}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <Link className="services__link" href={post.href}>
                Read Article →
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
