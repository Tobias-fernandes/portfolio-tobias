import { ReactNode } from "react";
import Header from "@/components/website/header";
import Footer from "@/components/website/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="px-5 scroll-smooth space-y-[200px]">{children}</main>
      <Footer />
    </>
  );
}
