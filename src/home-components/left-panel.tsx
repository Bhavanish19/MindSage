import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";
import { siteConfig } from "@/config/site-config";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { MovingCards } from "@/components/Cards";

const LeftPanel = async () => {
  const user = await currentUser();

  const dbUser = await db.user.findUnique({
    where: {
      id: user?.id,
    },
    include: {
      symptoms: true,
      medications: true,
      mentalwellness: true,
    },
  });

  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 px-3   xl:max-w-sm xl:py-10 xl:h-full"
    >
      {/* Top Container */}

      <div>
        <div>
          <Image
            priority
            loading="eager"
            alt={dbUser?.firstName!}
            placeholder="blur"
            src={dbUser?.image!}
            width={100}
            height={100}
            className="rounded-[18px]"
            blurDataURL="/pp-new3.png"
          />
        </div>

        {/* Text Container */}
        <div className="my-8 px-2">
          <div className="text-xl font-medium text-primary">
            WELCOME ! {/* {dbUser?.firstName} {dbUser?.lastName} */}
          </div>
          <h1 className="mt-2 text-4xl font-bold">
            {" "}
            {dbUser?.firstName} {dbUser?.lastName}{" "}
          </h1>

          <Link
            href="/dashboard/account/settings"
            className={buttonVariants({ size: "sm", className: "mt-4" })}
          >
            Update Profile
          </Link>

          <p className="text-[17px] font-semibold text-gray-800 dark:text-neutral-200">
            <br />
            {siteConfig.bio}
          </p>
          <p className="text-[15px] font-semibold text-gray-800 dark:text-neutral-200">
            <br />
            {siteConfig.bio2}
          </p>
          {/* <p className="text-[17px] font-semibold text-gray-800 dark:text-neutral-200">
            <br />
            {siteConfig.bio3}
          </p> */}
          <p className="text-[17px] font-semibold text-gray-800 dark:text-neutral-200">
            <br />
            {siteConfig.bio4}
          </p>
        </div>
        <MovingCards />

        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
