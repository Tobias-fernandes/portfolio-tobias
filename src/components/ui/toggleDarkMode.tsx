"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun, Loader2Icon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

interface IToggleDarkMode {
  className?: string;
  variant?: "outline" | "ghost";
  iconSize?: number;
}

const ToggleDarkMode = ({
  className,
  variant = "outline",
  iconSize = 5,
}: IToggleDarkMode) => {
  const { theme, systemTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);
  const [initialTheme, setInitialTheme] = useState<"light" | "dark">("light");

  const currentTheme = theme === "system" ? systemTheme || initialTheme : theme;

  const setMountedTrue = useCallback(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setInitialTheme(prefersDark ? "dark" : "light");
    setMounted(true);
  }, []);

  useEffect(() => {
    setMountedTrue();
  }, [setMountedTrue]);

  if (!mounted)
    return (
      <Button variant={"outline"} className={className}>
        <Loader2Icon className="animate-spin" />
      </Button>
    );

  return (
    <>
      {currentTheme === "dark" && (
        <Button
          variant={variant}
          className={className}
          onClick={() => setTheme("light")}
        >
          <Moon className={`size-${iconSize}`} />
        </Button>
      )}
      {currentTheme === "light" && (
        <Button
          variant={variant}
          className={className}
          onClick={() => setTheme("dark")}
        >
          <Sun className={`size-${iconSize}`} />
        </Button>
      )}
    </>
  );
};

export { ToggleDarkMode };
