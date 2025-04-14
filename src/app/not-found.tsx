import { Button } from "@/components/ui/button";
import { ArrowLeft, PackageOpen } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="max-w-lg flex flex-col items-center space-y-4">
        <PackageOpen size={128} />
        <h1 className="uppercase text-3xl text-center font-extrabold tracking-[-0.02em] md:text-5xl lg:text-5xl md:leading-[4rem]">
          Page not found!
        </h1>
        <p className="text-center text-primary/80 text-lg mb-5">
          The page you must be looking for is not here. It may have been removed
          or you may have mistyped the URL.
        </p>
        <Button asChild size={"lg"} variant={"outline"}>
          <Link href={"/"}>
            <ArrowLeft />
            Back to home
          </Link>
        </Button>
      </div>
    </section>
  );
}
