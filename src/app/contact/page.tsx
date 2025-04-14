import ContactForm from "@/components/contact/form";
import { Headset } from "lucide-react";

export default function Contact() {
  return (
    <section className="-mt-[69px] h-screen flex flex-col gap-10 items-center justify-center max-w-screen-lg mx-auto">
      <h1 className="uppercase text-4xl font-extrabold tracking-[-0.02em] md:text-5xl lg:text-6xl md:leading-[4rem]">
        Contact Me!
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:flex justify-center items-center w-full h-full">
          <Headset size={225} />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
