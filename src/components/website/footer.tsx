import { cn } from "@/lib/utils";

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer className={cn("py-5 mt-20", className)}>
      <h2 className="text-center text-sm md:text-base font-extrabold uppercase">
        copyright &copy; 2025 tobias figueiredo
      </h2>
    </footer>
  );
};

export default Footer;
