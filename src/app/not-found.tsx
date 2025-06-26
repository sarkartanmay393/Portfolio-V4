import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default function NotFound() {
    return (
        <main className="flex flex-col min-h-[90dvh] md:min-h-[75dvh] items-center justify-center space-y-8">
            <DotPattern
                glow={false}
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "opacity-30 sm:opacity-50"
                )}
            />
            <div className="text-center flex flex-col items-center gap-4 max-w-lg">
                <p className="text-muted-foreground prose">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <a href="/" className="transition-colors duration-300 text-black/70 hover:text-black">
                    &larr; Go back
                </a>
            </div>
        </main>
    );
}
