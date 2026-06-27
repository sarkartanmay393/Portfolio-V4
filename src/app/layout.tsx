import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/app/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getResumeData } from "@/services/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "@/app/postHog.provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const DATA = await getResumeData();

  return {
    metadataBase: new URL(DATA.url),
    title: {
      default: DATA.name,
      template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    openGraph: {
      title: `${DATA.name}`,
      description: DATA.description,
      url: DATA.url,
      siteName: `${DATA.name}`,
      locale: "en_US",
      type: "website",
      images: '/me.webp',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: `${DATA.name}`,
      card: "summary_large_image",
    },
    verification: {
      google: "",
      yandex: "",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const DATA = await getResumeData();

  return (
    <html lang="en" suppressHydrationWarning>
      <CSPostHogProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto px-5 pt-2 pb-8",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
              <Navbar navbar={DATA.navbar} />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
