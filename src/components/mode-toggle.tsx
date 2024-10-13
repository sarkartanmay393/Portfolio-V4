"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { forwardRef } from "react";

export const ModeToggle = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      name="theme-toggle"
      className="px-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
});

ModeToggle.displayName = 'ModeToggle';
