import { ReactNode } from "react";
import Header from "@/components/contact/header";
import Footer from "@/components/website/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="px-5">{children}</main>
      <Footer className="absolute bottom-0 left-0 right-0" />
    </>
  );
}
