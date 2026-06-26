import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { getResumeData } from "@/services/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: "Experience",
  description: "Where I've worked and what I work with.",
};

export default async function ExperiencePage() {
  const DATA = await getResumeData();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">experience</h1>
      </BlurFade>

      {/* <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
        <div className="space-y-3 mb-12">
          <p className="prose max-w-full text-pretty font-sans text-base text-foreground/70 dark:prose-invert">
            I'm a full-stack engineer with 3+ years building production systems, not just demos.
            Right now I'm the 2nd engineer at Re-twin Energy, where I own everything from AI
            agents (RAG + MCP) running in production to the Azure infrastructure they ship on.
            Before that, I built a visual Kubernetes policy editor used by 200+ enterprises at
            Nirmata, and shipped frontend systems for a multi-tenant cybersecurity SaaS at Simbian AI.
          </p>
          <p className="prose max-w-full text-pretty font-sans text-base text-foreground/70 dark:prose-invert">
            If you're a founder, I'm comfortable with ambiguity — I've taken solo projects like
            GeoPulse and ElezaAI from zero to deployed, and I'd rather own a problem end-to-end
            than wait for a spec. If you're hiring for a senior team, I've worked across the stack
            (TypeScript, React, Next.js, Node.js, FastAPI, PostgreSQL) and have real production
            experience with agentic AI systems most teams are still experimenting with. And if
            you're the one reading resumes all day — I show up, communicate clearly, and I'm easy
            to work with.
          </p>
          <p className="prose max-w-full text-pretty font-sans text-base text-foreground/70 dark:prose-invert">
            If any of that's useful to you, here's where I've actually worked and what I actually know:
          </p>
        </div>
      </BlurFade> */}

      <div className="space-y-4 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-xl font-semibold">Work Experience</h2>
        </BlurFade>
        <div className="space-y-5">
          {DATA.work.map((job, id) => (
            <BlurFade key={job.company} delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="text-sm sm:text-base font-semibold">
                    <Link href={job.href} target="_blank" className="hover:underline">
                      {job.company}
                    </Link>
                    <span className="font-normal text-muted-foreground"> — {job.title}</span>
                  </h3>
                  <span className="text-xs sm:text-sm text-muted-foreground tabular-nums whitespace-nowrap">
                    {job.start} – {job.end}
                  </span>
                </div>
                <p className="text-sm text-foreground/70">{job.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      <div className="flex min-h-0 flex-col gap-y-3 mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <h2 className="text-xl font-semibold">Tech Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 7 + id * 0.05}>
              <Badge key={skill} variant="skill">{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
