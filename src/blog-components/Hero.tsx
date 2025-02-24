import Image from "next/image";
import Link from "next/link";

import resume from ".././app/resume.json";
import { ContactShape } from "@/components/tech-icons";
export default function Hero() {
  const { author } = resume;
  return (
    <div
      id="headline-row"
      className="  border rounded-[60px] max-w-full mx-auto flex flex-col md:flex-row items-stretch gap-2"
    >
      <div
        id="intro"
        className="flex-[3] container-bg rounded-3xl flex flex-col justify-between gap-6 p-10 py-12"
      >
        <div className="w-[10rem] select-none h-[10rem] rounded-full overflow-hidden">
          <Image
            src={author.avatar_url}
            alt={`Portrait photo of ${author.name}`}
            width={150}
            height={150}
            className="transform select-none  scale-110 translate-x-1 translate-y-1 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
          />
        </div>
        <p className="text-4xl select-none md:text-5xl lg:text-6xl font-medium">
          {author.name}
          <br /> {author.current_role.toLowerCase()}{" "}
          <span className="text-white/50">
            <br />
            <h2 className="text-orange-500">
              I turn ideas into reality through design and building.{" "}
            </h2>
            <Link href={author.current_job_url} target="_blank">
              {author.current_job}
            </Link>
            .
          </span>
        </p>
      </div>
      <div
        id="contact-hero"
        className="flex-[2]  container-slate-100 border rounded-[60px] shadow-lg text-3xl md:text-4xl lg:text-5xl font-medium   p-10 py-12 flex flex-col justify-between gap-10 items-center text-center"
      >
        <div className="flex flex-col gap-4 md:gap-10 items-center">
          <Image
            src="/expressions/glad.png"
            alt={`Portrait photo of ${author.name}`}
            width={150}
            height={150}
            className="scale-110  "
          />
          <div className="leading-[5rem] ">Need help with your project?</div>
        </div>
        <Link
          href={`mailto:${author.email}?subject=${
            author.name.split(" ")?.[0] || "Hey"
          }, Bhavanish...`}
          className="font-medium text-white bg-orange-500 rounded-full px-6 py-4"
        >
          Let&apos;s talk.
        </Link>
      </div>
    </div>
  );
}
