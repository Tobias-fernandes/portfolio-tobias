import {
  Avatar as AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const Avatar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <AvatarRoot className={cn(className)}>
      <AvatarImage src="/tobias-photo.jpg" alt="profile photo" />
      <AvatarFallback>
        <Skeleton />
      </AvatarFallback>
    </AvatarRoot>
  );
};

const Hero: React.FC = () => {
  const sections = [
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <section className="flex flex-col space-y-5 h-screen items-center justify-center ">
      <Avatar className="size-44 sm:size-52 md:size-64" />
      <div className="flex flex-col items-center space-y-2">
        <h2 className="uppercase text-primary/75 tracking-[0.3em] sm:tracking-[0.5em] text-base md:text-lg lg:text-xl">
          Software Engineer
        </h2>
        <h1 className="uppercase text-3xl font-extrabold tracking-[-0.02em] md:text-5xl lg:text-6xl md:leading-[4rem]">
          Tobias Figueiredo
        </h1>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-center">
        {sections.map(({ name, href }, index) => (
          <Button
            key={index}
            asChild
            variant="link"
            className="text-xl text-primary/75 hover:text-primary"
          >
            <Link href={href}>{name}</Link>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
