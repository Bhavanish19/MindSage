import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import Icons from "../global/icons";
import MaxWidthWrapper from "../global/max-width-wrapper";
import { buttonVariants } from "../ui/button";
import UserAccount from "../user-account";
import Image from "next/image";

interface Props {
  user: User | null;
}

const Navbar = ({ user }: Props) => {
  return (
    <header className="sticky top-0 inset-x-0 w-full h-14  md:h-20 border-b border-border/40 bg-background/20 backdrop-blur-md z-50">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between w-full h-full">
          <div className="flex">
            <Link
              href="/"
              className="flex items-center md:font-bold font-semibold gap-2 text-lg md:text-[24px]"
            >
              <Image
                src="/expressions/good.png"
                height={50}
                width={50}
                alt="MindSage logo"
                className="mb-1x h-10 w-fit"
              />
              MindSage
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({ size: "sm" })}
                >
                  Dashboard
                </Link>
                <UserAccount />
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className={buttonVariants({ size: "sm" })}
                >
                  Start for free
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
