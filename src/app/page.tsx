import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/services/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { HackathonCard } from "@/components/hackathon-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { WordRotate } from "@/components/magicui/word-rotate";
import { LinkPreview } from "@/components/ui/link-preview";
import GitHubCalendar from "react-github-calendar";

const GREETINGS = ["Hello", "नमस्ते", "你好", "Hola", "Ciao", "Hallo"];

export default function Page() {
  const greetings = GREETINGS;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-2.5">
              <BlurFade
                delay={BLUR_FADE_DELAY}
                className="transition-all duration-300 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                yOffset={4}
              >
                <WordRotate words={greetings} />, I&apos;m {DATA.name.split(" ")[0]} 👋
              </BlurFade>
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-black/80 dark:text-white/80"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-semibold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <span className="prose max-w-full text-pretty font-sans text-base text-foreground/70 dark:prose-invert">
            Have experience of developing web applications, servers, ci/cd pipelines and AI workflows. I post nonsense on
            <LinkPreview
              url={DATA.contact.social.x.url}
              imageSrc="/x-account-screenshot.png"
              isStatic
              className="inline-block px-1 font-semibold prose text-pretty no-underline font-sans text-sm dark:prose-invert"
            >X/Twitter</LinkPreview>
            as well, and share other content across my socials. Other times, I ride motorcycles, make videos, play digital games and help my father in his business.
          </span>
        </BlurFade>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-semibold">Tech Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill} variant="outline">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="hackathons" className={cn(DATA.hackathons.length > 0 ? '' : 'hidden')}>
        <div className="space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project: any, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="github-stats">
        <div className="space-y-4 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-semibold">Stats
              <span className="text-sm text-muted-foreground font-light pl-2 pb-1.5">(most of contributes are now in company github)</span>
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <GitHubCalendar username="sarkartanmay393" hideColorLegend />
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="contact">
        <Separator orientation="horizontal" className="py-[0.5px]" />
        <div className="grid items-center justify-center gap-4 px-4 text-center pt-6 mb-2">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-2">
              {/* <Button name="download-resume" asChild className="rounded-lg bg-foreground text-background text-xs" size="sm" variant="outline">
                <Link href="https://dub.sh/tanmays-resume" download className="text-xs">
                  Download Resume
                </Link>
              </Button> */}
              <div className="flex gap-1 justify-center items-center">
                <h2 className="text-lg font-bold tracking-tighter sm:text-xl">
                  Get in Touch:
                </h2>
                <div className="">
                  {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => (
                      <Tooltip key={name}>
                        <TooltipTrigger asChild>
                          <Link
                            href={social.url}
                            className={cn(
                              buttonVariants({ variant: "ghost", size: "icon" }),
                              "size-8"
                            )}
                          >
                            <social.icon className="size-4" aria-label={social.name} />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                </div>
              </div>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-base/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.x.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

    </main>
  );
}
