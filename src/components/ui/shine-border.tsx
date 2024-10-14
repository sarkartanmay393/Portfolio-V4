"use client";

import { rootContext } from "@/app/provider";
import { cn } from "@/lib/utils";
import { useContext } from "react";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
export default function ShineBorder({
  borderRadius = 0,
  borderWidth = 6,
  duration = 5,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  const rootStore = useContext(rootContext);
  const borderWidth2 = rootStore?.meAiActivated ? borderWidth : 0;
  
  return (
    
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
          zIndex: 30,
          filter: "blur(0.5px)",
        } as React.CSSProperties
      }
      className={cn(
        "fixed top-0 left-0 h-screen antialiased grid place-items-center rounded-[--border-radius] bg-transparent p-3 text-black dark:text-white",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth2}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${color instanceof Array ? color.join(",") : color},transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`transition-all duration-1000 ease-in before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine`}
      >

      </div>
      {children}
    </div>
   
  );
}
