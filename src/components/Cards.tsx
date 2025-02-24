import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "Virat Kohli",
    body: "Self-belief and hard work will always earn you success. Remember, it's okay to take breaks and focus on your mental health.",
    img: "https://avatar.vercel.sh/virat",
  },
  {
    name: "Deepika Padukone",
    body: "Mental health is not a destination, but a process. It’s about how you drive, not where you’re going.",
    img: "https://avatar.vercel.sh/deepika",
  },
  {
    name: "Sachin Tendulkar",
    body: "People throw stones at you and you convert them into milestones. Persevere, both for your goals and mental peace.",
    img: "https://avatar.vercel.sh/sachin",
  },
  {
    name: "Priyanka Chopra",
    body: "Courage is not the absence of fear, but the triumph over it. Take care of your mind just as you do your body.",
    img: "https://avatar.vercel.sh/priyanka",
  },
  {
    name: "MS Dhoni",
    body: "You don’t play for the crowd; you play for the country. True focus comes from peace within.",
    img: "https://avatar.vercel.sh/dhoni",
  },
  {
    name: "Shah Rukh Khan",
    body: "Success and failure are both part of life. The key is to stay balanced. Keep your mental health as a priority.",
    img: "https://avatar.vercel.sh/srk",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
   
   
        <div className="flex flex-col">
          <figcaption className="text-[17px] font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 font-medium  text-sm">{body}</blockquote>
    </figure>
  );
};

export function MovingCards() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-100/50 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-100/50 dark:from-background"></div>
    </div>
  );
}
