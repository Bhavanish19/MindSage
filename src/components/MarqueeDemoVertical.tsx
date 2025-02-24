import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";


const reviews = [
    {
      name: "Anonymous",
      username: "@MindSage_user1",
      body: "Just have a little faith – one step at a time to better days.",
      img: "https://avatar.vercel.sh/user1",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user2",
      body: "Mental health and physical health go hand in hand. Take care of both!",
      img: "https://avatar.vercel.sh/user2",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user3",
      body: "A small act of self-care can make a big difference.",
      img: "https://avatar.vercel.sh/user3",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user4",
      body: "Breathe. Reset. Keep going.",
      img: "https://avatar.vercel.sh/user4",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user5",
      body: "Every day is a chance to start fresh.",
      img: "https://avatar.vercel.sh/user5",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user6",
      body: "You’re stronger than you think. Keep believing.",
      img: "https://avatar.vercel.sh/user6",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user7",
      body: "Listen to your body, and be kind to your mind.",
      img: "https://avatar.vercel.sh/user7",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user8",
      body: "Taking care of yourself is the best investment.",
      img: "https://avatar.vercel.sh/user8",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user9",
      body: "Sometimes the smallest steps lead to the biggest changes.",
      img: "https://avatar.vercel.sh/user9",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user10",
      body: "It’s okay to ask for help when you need it.",
      img: "https://avatar.vercel.sh/user10",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user11",
      body: "A healthy mind is the first step to a healthy life.",
      img: "https://avatar.vercel.sh/user11",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user12",
      body: "Take time to rest. Your mind deserves peace too.",
      img: "https://avatar.vercel.sh/user12",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user13",
      body: "Let go of what you can’t control and focus on what you can.",
      img: "https://avatar.vercel.sh/user13",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user14",
      body: "Little wins add up. Celebrate them.",
      img: "https://avatar.vercel.sh/user14",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user15",
      body: "Trust the journey. Healing takes time.",
      img: "https://avatar.vercel.sh/user15",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user16",
      body: "Remember, progress is progress – no matter how small.",
      img: "https://avatar.vercel.sh/user16",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user17",
      body: "Taking care of yourself is a priority, not a luxury.",
      img: "https://avatar.vercel.sh/user17",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user18",
      body: "You deserve peace, joy, and rest. Don’t forget that.",
      img: "https://avatar.vercel.sh/user18",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user19",
      body: "Stay patient with yourself. Change doesn’t happen overnight.",
      img: "https://avatar.vercel.sh/user19",
    },
    {
      name: "Anonymous",
      username: "@MindSage_user20",
      body: "Your mental health matters. Take the time to care for it.",
      img: "https://avatar.vercel.sh/user20",
    },
  ];
  
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative max-w-[430px]    h-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex  flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-[14px] font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-[20px] font-semibold text-sm">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex  max-h-screen   w-full flex-row items-center justify-center overflow-hidden   bg-background md:shadow-md">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
