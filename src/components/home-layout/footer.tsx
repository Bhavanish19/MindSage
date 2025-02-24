import Link from "next/link";

export function Footer() {
  return (
    <div className="z-20 w-full bg-background/95  p-3 rounded-md bg-slate-200  backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 items-center">
        <p className=" font-bold text-[20px] leading-loose text-muted-foreground text-left">
          Build with ❤️{" "}
          <Link
            href="https://www.linkedin.com/in/dbhavanish/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            Bhavanish Dhamnaskar
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
