'use client';

import { Mic, MicOff } from "lucide-react";
import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { rootContext } from "@/app/provider";

export default function MeAi() {
  const rootStore = useContext(rootContext);

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      name="theme-toggle"
      className="px-2"
      onClick={rootStore?.handleMeAiToggle}
    >
      {rootStore?.meAiActivated ?
        <MicOff className="h-[1.2rem] w-[1.2rem] dark:text-neutral-200" /> :
        <Mic className="h-[1.2rem] w-[1.2rem] dark:text-neutral-200" />}
    </Button>
  )
};