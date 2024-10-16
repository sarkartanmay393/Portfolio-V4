import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/services/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Fragment } from "react";

export const metadata = {
  title: "Project",
  description: "My side projects.",
};

export default function ProjectsPage() {

  return (
    <section id="projects">
      <div className="space-y-12 w-full py-0">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple
                websites to complex web applications. Here are a few of my
                favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project, id, arr) => (
            <Fragment key={id}>
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={''}
                  video={''}
                  links={project.links}
                />
              </BlurFade>
            </Fragment>
          ))}
        </div>
        <BlurFade
          key={'view more button'}
          delay={BLUR_FADE_DELAY * 12 + 10 * 0.05}
        >
          <div className="flex justify-center">
            <Link href={DATA.contact.social.GitHub.url}><Button size='sm'>View More</Button></Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}