import { Progress } from "../ui/progress";
import Image from "next/image";

interface skillsDataProps {
  name: string;
  percentual: number;
  url: string;
}

export default function Skills() {
  const skillsData: skillsDataProps[] = [
    {
      name: "React.js",
      percentual: 90,
      url: "reactjs-icon.svg",
    },
    {
      name: "Next.js",
      percentual: 90,
      url: "nextjs-icon.svg",
    },
    {
      name: "Cypress",
      percentual: 50,
      url: "cypress-icon.svg",
    },
    {
      name: "Node.js",
      percentual: 60,
      url: "nodejs-icon.svg",
    },
    {
      name: "Prisma",
      percentual: 80,
      url: "prisma-icon.svg",
    },
    {
      name: "TypeScript",
      percentual: 90,
      url: "typescript-icon.svg",
    },
  ];

  return (
    <section className="flex justify-center" id="skills">
      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="">
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] md:text-5xl lg:text-5xl md:leading-[4rem]">
            Skills
          </h2>
          <div className="mt-5 space-y-8">
            {skillsData.map(({ name, percentual }, index) => (
              <div key={index} className="max-w-md space-y-3">
                <h3 className="font-bold text-lg">{name}</h3>
                <Progress className="rounded-xs" value={percentual} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 place-items-center gap-10">
            {skillsData.map(({ url, name }, index) => (
              <div
                key={index}
                className="group dark:bg-[#212121] bg-[#898989] hover:bg-[#4d4d4d] transition-colors rounded-xl text-center p-5"
              >
                <Image
                  src={`/skills/${url}`}
                  alt={url}
                  width={100}
                  height={100}
                  className="grayscale group-hover:grayscale-0"
                />
                <span className="text-secondary dark:text-primary">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
