import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleDarkMode } from "../ui/toggleDarkMode";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  return (
    <header>
      {/* desktop */}
      <div className="hidden sm:flex justify-around py-4 fixed top-0 left-0 backdrop-blur-md right-0 z-10">
        <nav>
          <ul className="flex gap-2">
            <Tooltip>
              <TooltipTrigger>
                <li>
                  <Button asChild variant="ghost" className="p-2">
                    <Link
                      href="https://www.linkedin.com/in/tobiasfigueiredo/"
                      target="_blank"
                    >
                      <Linkedin className="size-6" />
                    </Link>
                  </Button>
                </li>
              </TooltipTrigger>
              <TooltipContent>@tobiasfigueiredo</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <li>
                  <Button asChild variant="ghost" className="p-2">
                    <Link
                      href="https://github.com/Tobias-fernandes"
                      target="_blank"
                    >
                      <Github className="size-6" />
                    </Link>
                  </Button>
                </li>
              </TooltipTrigger>
              <TooltipContent>@tobias-fernandes</TooltipContent>
            </Tooltip>
          </ul>
        </nav>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger>
              <Button
                asChild
                variant="ghost"
                className="flex items-center text-lg font-bold"
              >
                <Link href={"/contact"}>
                  <Mail className="size-5 sm:size-6" />
                  <span className="uppercase hidden sm:block">
                    get in touch
                  </span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>tobys312@gmail.com</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleDarkMode variant="ghost" iconSize={6} />
            </TooltipTrigger>
            <TooltipContent>Change theme</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* mobile */}
      <div className="flex sm:hidden justify-between gap-4 py-4 fixed bottom-8 left-0 backdrop-brightness-75 backdrop-blur-md right-0 z-10 mx-10 px-4 rounded-4xl">
        <nav>
          <ul className="flex gap-2">
            <Tooltip>
              <TooltipTrigger>
                <li>
                  <Button asChild variant="ghost" className="p-2">
                    <Link
                      href="https://www.linkedin.com/in/tobiasfigueiredo/"
                      target="_blank"
                    >
                      <Linkedin className="size-6" />
                    </Link>
                  </Button>
                </li>
              </TooltipTrigger>
              <TooltipContent>@tobiasfigueiredo</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <li>
                  <Button asChild variant="ghost" className="p-2">
                    <Link
                      href="https://github.com/Tobias-fernandes"
                      target="_blank"
                    >
                      <Github className="size-6" />
                    </Link>
                  </Button>
                </li>
              </TooltipTrigger>
              <TooltipContent>@tobias-fernandes</TooltipContent>
            </Tooltip>
          </ul>
        </nav>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger>
              <Button
                asChild
                variant="ghost"
                className="flex items-center text-lg font-bold"
              >
                <Link href={"/contact"}>
                  <Mail className="size-6" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>tobys312@gmail.com</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleDarkMode variant="ghost" iconSize={6} />
            </TooltipTrigger>
            <TooltipContent>Change theme</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};

export default Header;
