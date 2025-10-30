import Image from "next/image";
import Link from "next/link";

interface ProjectsCardProps {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}

const ProjectsCard: React.FC<{ data: ProjectsCardProps }> = ({ data }) => {
  return (
    <div className="relative group max-md:w-full md:w-[275px] md:hover:w-[400px] h-[500px] shadow-lg rounded-lg overflow-hidden transition-all duration-300">
      <Link href={data.link} target="_blank">
        {data.imgSrc && (
          <Image
            src={`/projects/${data.imgSrc}`}
            alt={data.title}
            width={150}
            height={150}
            priority
            quality={100}
            unoptimized
            className="max-sm:brightness-50 rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-50"
          />
        )}
        {!data.imgSrc && <div className="w-full h-full bg-accent" />}
        <h3 className="sm:hidden absolute group-hover:block bottom-10 px-5">
          <span className="font-black text-gray-400">{data.title}</span>
          <br />
          <span className="leading-5 text-gray-400">{data.description}</span>
        </h3>
      </Link>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectsData: ProjectsCardProps[] = [
    {
      imgSrc: "portfolio.png",
      title: "Portfolio",
      description:
        "A personal portfolio website to showcase myself and my work.",
      link: "https://github.com/Tobias-fernandes/portfolio-tobias",
    },
    {
      imgSrc: "wordle.png",
      title: "Worlde Game",
      description: "A web game to try to discover a random word",
      link: "https://github.com/Tobias-fernandes/WordleGame",
    },
    {
      imgSrc: "",
      title: "Soon...",
      description: "Project in development",
      link: "",
    },
  ];
  return (
    <section id="projects">
      <h2 className="text-3xl text-center my-5 font-extrabold tracking-[-0.02em] md:text-5xl lg:text-5xl md:leading-[4rem]">
        Projects
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-10 transition-all duration-300">
        {projectsData.map((project, index) => (
          <ProjectsCard key={index} data={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
