export default function NotFound() {
    return (
        <main className="flex flex-col min-h-[90dvh] md:min-h-[75dvh] items-center justify-center space-y-8">
            <div className="text-center flex flex-col items-center gap-4 max-w-md">
                <p className="text-muted-foreground prose">
                    Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <a href="/" className="transition-colors duration-300 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
                    &larr; Go back
                </a>
            </div>
        </main>
    );
}
