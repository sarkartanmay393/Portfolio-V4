import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/services/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Fragment } from "react";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Proof of Works",
  description: "My works.",
};

export default function ProjectsPage() {

  return (
    <section id="works">
      <div className="flex items-center justify-between gap-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-2xl mb-8 tracking-tighter">proof of works</h1>
        </BlurFade>
      </div>
      <div className="grid grid-cols-1 gap-4 max-w-[800px] mx-auto">
        {DATA.works.map((project: any, id) => (
          <Fragment key={id}>
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <div className="flex flex-col gap-1">
                <h3 className="cursor-pointer text-base font-semibold hover:font-bold hover:text-primary transition-all duration-300 flex items-center gap-1">
                  {project?.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                  {project.href && <ExternalLink className="inline-block size-4 pl-1" />}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </BlurFade>
          </Fragment>
        ))}
      </div>
    </section>
  );
}