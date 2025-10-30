import { House } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleDarkMode } from "../ui/toggleDarkMode";

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
      <div className="flex sm:hidden justify-center gap-12 py-4 fixed bottom-8 left-0 backdrop-brightness-75 backdrop-blur-md right-0 z-10 mx-20 rounded-4xl text-white">
        <nav>
          <Button asChild variant={"ghost"}>
            <Link href={"/"}>
              <House className="size-6" />
            </Link>
          </Button>
        </nav>
        <div>
          <ToggleDarkMode variant="ghost" iconSize={6} />
        </div>
      </div>
    </header>
  );
};

export default Header;
