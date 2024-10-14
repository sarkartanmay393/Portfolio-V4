import Navbar, { NavbarBigScreen } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/services/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "@/components/postHog.provider";
import ShineBorder from "@/components/ui/shine-border";
import { RootProvider } from "./provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
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
    images: '/screenshot.png',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <CSPostHogProvider>
        <body
          className={cn(
            "relative min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto px-5 py-8 pb-[72px] md:pb-8 md:pt-[102px]",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
              <RootProvider>
                <ShineBorder
                  className="h-full w-full"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <></>
                </ShineBorder>
                <NavbarBigScreen />
                {children}
                <Navbar />

              </RootProvider>
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
