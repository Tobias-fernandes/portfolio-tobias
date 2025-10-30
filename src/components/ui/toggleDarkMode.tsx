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
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  const setMountedTrue = useCallback(() => {
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
      {theme === "dark" ? (
        <Button
          variant={variant}
          className={className}
          onClick={() => setTheme("light")}
        >
          <Moon className={`size-${iconSize}`} />
        </Button>
      ) : (
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
