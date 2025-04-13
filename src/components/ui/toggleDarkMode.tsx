"use client";

import * as React from "react";
import { Moon, Sun, Loader2Icon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// Simplified button for toggle
export function ToggleDarkMode({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false); // useState to store the mounted state

  // useEffect used to solve hydration problem
  useEffect(() => {
    setMounted(true);
  }, []);
  const { theme, setTheme } = useTheme();
  if (!mounted)
    return (
      <Button variant={"outline"} className={cn("", className)}>
        <Loader2Icon className="animate-spin" />
      </Button>
    );
  return (
    <>
      {theme === "dark" ? (
        <Button
          variant={"outline"}
          className={cn("", className)}
          onClick={() => setTheme("light")}
        >
          <Moon />
        </Button>
      ) : (
        <Button
          variant={"outline"}
          className={cn("", className)}
          onClick={() => setTheme("dark")}
        >
          <Sun />
        </Button>
      )}
    </>
  );
}
