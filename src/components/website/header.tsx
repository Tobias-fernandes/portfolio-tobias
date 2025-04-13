import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleDarkMode } from "./toggleDarkMode";

export default function Header() {
  return (
    <header className="flex justify-around py-4 fixed top-0 left-0 backdrop-blur-md right-0 z-10">
      <nav>
        <ul className="flex gap-2 md:gap-5">
          <li>
            <Button asChild variant="ghost" className="p-2">
              <Link
                href="https://www.linkedin.com/in/tobiasfigueiredo/"
                target="_blank"
              >
                <Linkedin className="size-5 sm:size-6" />
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" className="p-2">
              <Link href="https://github.com/Tobias-fernandes" target="_blank">
                <Github className="size-5 sm:size-6" />
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
      <div className="flex gap-2 md:gap-5">
        <div>
          <Button
            asChild
            variant="ghost"
            className="flex items-center text-lg font-bold"
          >
            <Link href={"/contact"}>
              <Mail className="size-5 sm:size-6" />
              <span className="uppercase hidden sm:block">get in touch</span>
            </Link>
          </Button>
        </div>
        <div>
          <ToggleDarkMode />
        </div>
      </div>
    </header>
  );
}
