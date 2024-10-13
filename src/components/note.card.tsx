"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
// import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  no: number,
  title?: string;
  href?: string;
  badges?: readonly string[];
  period?: string;
  description?: string;
  brief?: string;
  type?: string;
  publishedAt?: string;
}
export const NoteCard = ({
  no,
  title,
  brief,
  badges,
  description,
}: ResumeCardProps) => {
  const [isExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      // setIsExpanded(!isExpanded);
    }
  };

  return (
    // <Link
    //   href={href || "#"}
    //   className="block cursor-pointer"
    //   onClick={handleClick}
    // >
      <Card className="flex" onClick={handleClick}>
        <div className="flex-none">
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-normal leading-none text-xs sm:text-sm">
                {no+'. '}
                {title || brief}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {/* <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                /> */}
              </h3>
              {/* <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div> */}
            </div>
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm font-[300]"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    // </Link>
  );
};
