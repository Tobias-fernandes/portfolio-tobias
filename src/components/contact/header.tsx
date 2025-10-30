import { House } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleDarkMode } from "../ui/toggleDarkMode";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const Header: React.FC = () => {
  return (
    <header>
      {/* Desktop */}
      <div className="hidden sm:flex justify-around py-4 fixed top-0 left-0 backdrop-blur-md right-0 z-10">
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
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden justify-around gap-4 py-4 fixed bottom-8 left-0 backdrop-brightness-75 backdrop-blur-md right-0 z-10 mx-10 px-4 rounded-4xl">
        <nav>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant={"ghost"}>
                <Link href={"/"}>
                  <House className="size-6" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Get home</TooltipContent>
          </Tooltip>
        </nav>
        <Tooltip>
          <TooltipTrigger asChild>
            <ToggleDarkMode variant="ghost" iconSize={6} />
          </TooltipTrigger>
          <TooltipContent>Change theme</TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
