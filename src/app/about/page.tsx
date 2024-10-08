import Title from "@/components/page_title";
import { Breadcrumbs } from "@/components/ui/breadcrumb";
import GithubMark from "@/public/github-mark.png";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        links={[
          { href: "/", text: "oleagues.nz" },
          { href: "about", text: "About" },
        ]}
      />
      <Title>About oleagues.nz</Title>
      <p className="mb-8">
        oleagues.nz is a website for the New Zealand orienteering community. It
        provides a centralised location for orienteers to view rankings in
        various competitions throughout the year, updated after each event.
        Created by Ryan Moore, &#169; 2024.
      </p>
      <p>
        Technology Stack: Typescript, React, Next.js, shadcn/ui, TailwindCSS,
        Prisma, MySQL, Docker
      </p>
      <p className="mb-8">
        Mixed Static/SSG rendering using Next 15 server actions
      </p>

      <a
        href="https://github.com/ryan-mooore/oleague"
        className="flex flex-row gap-2 underline"
      >
        <Image src={GithubMark} alt="Github Mark" width={24} /> View on Github
      </a>
    </>
  );
}
