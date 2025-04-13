import Image from "next/image";
import Link from "next/link";

interface ProjectsCardProps {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}

function ProjectsCard({ data }: { data: ProjectsCardProps }) {
  return (
    <div className="relative group max-sm:w-full w-[275px] hover:w-[400px] h-[500px] shadow-lg rounded-lg overflow-hidden transition-all duration-300">
      <Link href={data.link} target="_blank">
        <Image
          src={`/projects/${data.imgSrc}`}
          alt={data.title}
          width={150}
          height={150}
          priority
          quality={100}
          unoptimized
          className="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-50"
        />

        <h3 className="hidden absolute group-hover:block bottom-15 px-5 font-black text-gray-400">
          {data.title}
        </h3>
        <p className="hidden absolute group-hover:block bottom-5 px-5 leading-5 text-gray-400">
          {data.description}
        </p>
      </Link>
    </div>
  );
}

export default function Projects() {
  const projectsData: ProjectsCardProps[] = [
    {
      imgSrc: "portfolio.png",
      title: "Portfolio",
      description:
        "A personal portfolio website to showcase myself and my work.",
      link: "https://github.com/Tobias-fernandes/portfolio-tobias",
    },
    {
      imgSrc: "portfolio.png",
      title: "Tobias",
      description: "A web application for managing tasks and projects.",
      link: "#",
    },
    {
      imgSrc: "portfolio.png",
      title: "Soon...",
      description: "",
      link: "#",
    },
  ];
  return (
    <section id="projects">
      <h2 className="text-3xl text-center my-5 font-extrabold tracking-[-0.02em] md:text-5xl lg:text-5xl md:leading-[4rem]">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-10 transition-all duration-300">
        {projectsData.map((project, index) => (
          <ProjectsCard key={index} data={project} />
        ))}
      </div>
    </section>
  );
}
