import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExperienceProps {
  jobPosition: string;
  companyName: string;
  dateStart: string;
  dateEnd: string;
  list: string[];
}

function CardComponent({ data }: { data: ExperienceProps }) {
  return (
    <Card className="bg-[#898989] dark:bg-[#4d4d4d] text-secondary dark:text-primary">
      <CardHeader>
        <CardTitle>
          <span className="text-2xl">{data.jobPosition}</span>
          <br />
          <span className="text-xl">{data.companyName}</span>
        </CardTitle>
        <CardDescription className="text-lg text-secondary/50">
          {data.dateStart} - {data.dateEnd}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          {data.list.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default function Experience() {
  const experienceData: ExperienceProps[] = [
    {
      jobPosition: "Software Engineer",
      companyName: "AltoTech Juniors",
      dateStart: "Sep 2023",
      dateEnd: "Present",
      list: [
        "Developed and maintained web applications using React/NextJS and Node.js.",
        "Collaborated with cross-functional teams to design and implement new features.",
        "Participated in code reviews and contributed to team knowledge sharing.",
        "Currenly at General Director of AltoTech Juniors.",
      ],
    },
    {
      jobPosition: "Web Developer",
      companyName: "Saudeker",
      dateStart: "Oct 2024",
      dateEnd: "Feb 2025",
      list: [
        "Designed and developed responsive websites using NextJS",
        "Worked closely with designers to ensure a seamless user experience.",
        "Optimized website performance and SEO best practices.",
        "Implemented tests using Cypress to ensure code quality and reliability.",
      ],
    },
  ];

  return (
    <section
      className="-mt-[200px] flex flex-col items-center justify-between space-y-10"
      id="experience"
    >
      <div className="max-w-screen-xl">
        <h2 className="text-3xl text-center my-5 font-extrabold tracking-[-0.02em] md:text-5xl lg:text-5xl md:leading-[4rem]">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experienceData.map((experience, index) => (
            <CardComponent key={index} data={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
