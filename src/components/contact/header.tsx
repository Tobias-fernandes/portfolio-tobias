import { House } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleDarkMode } from "../ui/toggleDarkMode";

export default function Header() {
  return (
    <header className="flex justify-around py-4 fixed top-0 left-0 backdrop-blur-md right-0 z-10">
      <nav>
        <Button asChild variant={"ghost"}>
          <Link href={"/"}>
            <House className="size-6" />
          </Link>
        </Button>
      </nav>
      <div>
        <ToggleDarkMode />
      </div>
    </header>
  );
}
