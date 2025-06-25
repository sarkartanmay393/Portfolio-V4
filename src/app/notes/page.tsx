import BlurFade from "@/components/magicui/blur-fade";
import { NoteCard } from "@/components/note.card";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { DATA } from "@/services/resume";

export const metadata = {
  title: "Notes",
  description: "My thoughts on software development, life, and more.",
};

export default function NotesPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">notes</h1>
      </BlurFade>
      <div className="flex flex-col gap-2">
        {DATA.notes.map((note, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={(note as any)?.slug + id}>
            <NoteCard
              no={id + 1}
              title={note?.title || note.brief}
              description={note.brief} period={""} />
            {/* <Link
            className="flex flex-col space-y-1 mb-4"
            href={'#'}
          // `/blog/${post.slug}`
          >
            <div className="w-full flex flex-col">
              <p className="tracking-tight">{note.title}</p>
              <p className="h-6 text-xs text-muted-foreground">
                {note.publishedAt}
              </p>
            </div> */}
            {/* </Link> */}
          </BlurFade>
        ))}
      </div>
    </section>
  );
}