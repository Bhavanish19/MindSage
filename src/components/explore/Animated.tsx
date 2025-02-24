// @ts-nocheck



import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import Link from "next/link";
 ;
import Metric from "../shared/Metric";
import { SignedIn } from "@clerk/nextjs";
import EditDeleteAction from "../shared/EditDeleteAction";
// import CodingQuestionBadge from "../ui/CodingQuestionBadge";
import { AnimatedShinyTextDemo } from "../magic/ShinyTextDemo";

interface ProblemProps {
  _id: string;
  title: string;
  slug: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
    clerkId: string;
  };
  upvotes: string[];
  views: number;
  level: string;
  comments: Array<object>;
  createdAt: Date;
  clerkId?: string;
}

const ProblemCard = ({
  clerkId,
  _id,
  title,
  slug,
  tags,
  author,
  upvotes,
  level,
  views,
  comments,
  createdAt,
}: ProblemProps) => {
  const showActionButtons = clerkId && clerkId === author.clerkId;

  return (
    <div className="card-wrapper max-w-[839.954px] rounded-[20px] border border-slate-200/90 p-5 hover:bg-[#F7F7F7] dark:border-slate-700 dark:bg-[#252930] dark:hover:bg-slate-900 hover:dark:bg-[#252930] sm:px-10 md:p-6">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
         
          <Link href={`/problem/${slug}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 mt-2 line-clamp-2 flex-1 font-lexend">
              {title}
            </h3>
          </Link>
        </div>
      </div>

      

   
    </div>
  );
};

const mockProblems: ProblemProps[] = [
  {
    _id: "1",
    title: "How to center a div?",
    slug: "how-to-center-a-div",
    tags: [{ _id: "1", name: "CSS" }],
    author: { _id: "1", name: "John Doe", picture: "", clerkId: "1" },
    upvotes: ["1", "2"],
    views: 100,
    level: "Beginner",
    comments: [],
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "What is event delegation in JavaScript?",
    slug: "event-delegation-javascript",
    tags: [{ _id: "2", name: "JavaScript" }],
    author: { _id: "2", name: "Jane Smith", picture: "", clerkId: "2" },
    upvotes: ["2", "3"],
    views: 150,
    level: "Intermediate",
    comments: [],
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "How to make a REST API in Node.js?",
    slug: "rest-api-nodejs",
    tags: [{ _id: "3", name: "Node.js" }],
    author: { _id: "3", name: "Alice Johnson", picture: "", clerkId: "3" },
    upvotes: ["1", "4"],
    views: 200,
    level: "Intermediate",
    comments: [],
    createdAt: new Date(),
  },
  {
    _id: "4",
    title: "What is the difference between var, let, and const?",
    slug: "var-let-const-difference",
    tags: [{ _id: "2", name: "JavaScript" }],
    author: { _id: "4", name: "Bob Brown", picture: "", clerkId: "4" },
    upvotes: ["3", "5"],
    views: 180,
    level: "Beginner",
    comments: [],
    createdAt: new Date(),
  },
  {
    _id: "5",
    title: "How to use Flexbox for layout?",
    slug: "flexbox-layout",
    tags: [{ _id: "1", name: "CSS" }],
    author: { _id: "5", name: "Charlie Davis", picture: "", clerkId: "5" },
    upvotes: ["2", "6"],
    views: 120,
    level: "Beginner",
    comments: [],
    createdAt: new Date(),
  },
  {
    _id: "6",
    title: "How to optimize a React application?",
    slug: "optimize-react-app",
    tags: [{ _id: "4", name: "React" }],
    author: { _id: "6", name: "Emily White", picture: "", clerkId: "6" },
    upvotes: ["1", "7"],
    views: 220,
    level: "Advanced",
    comments: [],
    createdAt: new Date(),
  },
  {
    _id: "7",
    title: "How to handle asynchronous code in JavaScript?",
    slug: "async-code-javascript",
    tags: [{ _id: "2", name: "JavaScript" }],
    author: { _id: "7", name: "David Green", picture: "", clerkId: "7" },
    upvotes: ["3", "8"],
    views: 140,
    level: "Intermediate",
    comments: [],
    createdAt: new Date(),
  },
  {
    _id: "8",
    title: "What is the CSS box model?",
    slug: "css-box-model",
    tags: [{ _id: "1", name: "CSS" }],
    author: { _id: "8", name: "Fiona Black", picture: "", clerkId: "8" },
    upvotes: ["4", "9"],
    views: 110,
    level: "Beginner",
    comments: [],
    createdAt: new Date(),
  },
  {
    _id: "9",
    title: "How to manage state in a React application?",
    slug: "manage-state-react",
    tags: [{ _id: "4", name: "React" }],
    author: { _id: "9", name: "George Brown", picture: "", clerkId: "9" },
    upvotes: ["2", "10"],
    views: 210,
    level: "Intermediate",
    comments: [],
    createdAt: new Date(),
  },
  {
    _id: "10",
    title: "What are Promises in JavaScript?",
    slug: "promises-javascript",
    tags: [{ _id: "2", name: "JavaScript" }],
    author: { _id: "10", name: "Helen Grey", picture: "", clerkId: "10" },
    upvotes: ["3", "11"],
    views: 170,
    level: "Intermediate",
    comments: [],
    createdAt: new Date(),
  },
];

const problems: ProblemProps[] = [
  {
    _id: "1",
    title: "Finding the Longest Palindromic Substring",
    slug: "finding-longest-palindromic-substring",
    tags: [
      { _id: "1", name: "cpp" },
      { _id: "2", name: "Strings" },
      { _id: "3", name: "Programming" },
    ],
    author: { _id: "1", name: "John Doe", picture: "", clerkId: "1" },
    upvotes: ["1", "2"],
    views: 37,
    level: "medium",
    comments: [{}],
    createdAt: new Date("2024-08-29"),
  },
  {
    _id: "2",
    title: "Binary Search and Linear Search in C++",
    slug: "binary-search-linear-search-cpp",
    tags: [
      { _id: "4", name: "DSA" },
      { _id: "5", name: "Searching" },
      { _id: "6", name: "coding" },
    ],
    author: { _id: "2", name: "Jane Smith", picture: "", clerkId: "2" },
    upvotes: [],
    views: 3,
    level: "easy",
    comments: [],
    createdAt: new Date("2024-08-28"),
  },
  {
    _id: "3",
    title: "How to Reverse Only Letters and Vowels in a String Using C++",
    slug: "reverse-letters-vowels-string-cpp",
    tags: [
      { _id: "2", name: "Strings" },
      { _id: "4", name: "DSA" },
      { _id: "1", name: "cpp" },
    ],
    author: { _id: "3", name: "Alice Johnson", picture: "", clerkId: "3" },
    upvotes: [],
    views: 1,
    level: "easy",
    comments: [],
    createdAt: new Date("2024-08-27"),
  },
  {
    _id: "4",
    title: "Moving all the Negative Numbers to left side in the given array",
    slug: "moving-negative-numbers-left-array",
    tags: [
      { _id: "1", name: "cpp" },
      { _id: "7", name: "Arrays" },
      { _id: "4", name: "DSA" },
    ],
    author: { _id: "4", name: "Bob Williams", picture: "", clerkId: "4" },
    upvotes: [],
    views: 8,
    level: "medium",
    comments: [],
    createdAt: new Date("2024-08-26"),
  },
  {
    _id: "5",
    title: "Sorting Colors Solution in C++",
    slug: "sorting-colors-solution-cpp",
    tags: [
      { _id: "1", name: "cpp" },
      { _id: "4", name: "DSA" },
      { _id: "8", name: "LeetCode" },
    ],
    author: { _id: "5", name: "Charlie Brown", picture: "", clerkId: "5" },
    upvotes: [],
    views: 1,
    level: "medium",
    comments: [],
    createdAt: new Date("2024-08-25"),
  },
  {
    _id: "6",
    title: "Find the Duplicate Number in the Given Array",
    slug: "find-duplicate-number-array",
    tags: [
      { _id: "7", name: "Arrays" },
      { _id: "8", name: "LeetCode" },
      { _id: "4", name: "DSA" },
    ],
    author: { _id: "6", name: "Diana Prince", picture: "", clerkId: "6" },
    upvotes: ["1"],
    views: 4,
    level: "medium",
    comments: [],
    createdAt: new Date("2024-08-24"),
  },
  {
    _id: "7",
    title: "Accenture Pizza Party",
    slug: "accenture-pizza-party",
    tags: [
      { _id: "9", name: "Accenture" },
      { _id: "1", name: "cpp" },
      { _id: "4", name: "DSA" },
    ],
    author: { _id: "7", name: "Ethan Hunt", picture: "", clerkId: "7" },
    upvotes: [],
    views: 0,
    level: "medium",
    comments: [],
    createdAt: new Date("2024-08-23"),
  },
  {
    _id: "8",
    title: "Longest Common Prefix using cpp",
    slug: "longest-common-prefix-cpp",
    tags: [
      { _id: "10", name: "twopointer" },
      { _id: "8", name: "LeetCode" },
      { _id: "2", name: "Strings" },
    ],
    author: { _id: "8", name: "Fiona Green", picture: "", clerkId: "8" },
    upvotes: ["1"],
    views: 0,
    level: "easy",
    comments: [],
    createdAt: new Date("2024-08-22"),
  },
  {
    _id: "9",
    title: "Isomorphic Strings using C++",
    slug: "isomorphic-strings-cpp",
    tags: [
      { _id: "1", name: "cpp" },
      { _id: "2", name: "Strings" },
      { _id: "8", name: "LeetCode" },
    ],
    author: { _id: "9", name: "George Wilson", picture: "", clerkId: "9" },
    upvotes: [],
    views: 2,
    level: "medium",
    comments: [],
    createdAt: new Date("2024-08-21"),
  },
  {
    _id: "10",
    title: "Implement Stack using Queues",
    slug: "implement-stack-using-queues",
    tags: [
      { _id: "11", name: "Stack" },
      { _id: "12", name: "Queue" },
      { _id: "4", name: "DSA" },
    ],
    author: { _id: "10", name: "Hannah Baker", picture: "", clerkId: "10" },
    upvotes: ["1", "2"],
    views: 15,
    level: "medium",
    comments: [{}],
    createdAt: new Date("2024-08-20"),
  },
  {
    _id: "11",
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    tags: [
      { _id: "13", name: "LinkedList" },
      { _id: "8", name: "LeetCode" },
      { _id: "4", name: "DSA" },
    ],
    author: { _id: "11", name: "Ian Malcolm", picture: "", clerkId: "11" },
    upvotes: ["1"],
    views: 7,
    level: "easy",
    comments: [],
    createdAt: new Date("2024-08-19"),
  },
  {
    _id: "12",
    title: "Best Time to Buy and Sell Stock",
    slug: "best-time-buy-sell-stock",
    tags: [
      { _id: "14", name: "DynamicProgramming" },
      { _id: "8", name: "LeetCode" },
      { _id: "7", name: "Arrays" },
    ],
    author: { _id: "12", name: "Julia Roberts", picture: "", clerkId: "12" },
    upvotes: ["1", "2", "3"],
    views: 25,
    level: "easy",
    comments: [{}],
    createdAt: new Date("2024-08-18"),
  },
  {
    _id: "13",
    title: "Implement Trie (Prefix Tree)",
    slug: "implement-trie-prefix-tree",
    tags: [
      { _id: "15", name: "Trie" },
      { _id: "8", name: "LeetCode" },
      { _id: "4", name: "DSA" },
    ],
    author: { _id: "13", name: "Kevin Hart", picture: "", clerkId: "13" },
    upvotes: [],
    views: 3,
    level: "medium",
    comments: [],
    createdAt: new Date("2024-08-17"),
  },
  {
    _id: "14",
    title: "Kth Largest Element in an Array",
    slug: "kth-largest-element-array",
    tags: [
      { _id: "16", name: "Heap" },
      { _id: "8", name: "LeetCode" },
      { _id: "7", name: "Arrays" },
    ],
    author: { _id: "14", name: "Lila White", picture: "", clerkId: "14" },
    upvotes: ["1"],
    views: 9,
    level: "medium",
    comments: [],
    createdAt: new Date("2024-08-16"),
  },
  {
    _id: "15",
    title: "Design a Hash Map",
    slug: "design-hash-map",
    tags: [
      { _id: "17", name: "HashMap" },
      { _id: "8", name: "LeetCode" },
      { _id: "4", name: "DSA" },
    ],
    author: { _id: "15", name: "Mike Ross", picture: "", clerkId: "15" },
    upvotes: ["1", "2"],
    views: 12,
    level: "easy",
    comments: [{}],
    createdAt: new Date("2024-08-15"),
  },
];

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative hidden h-[690px] w-full flex-col overflow-hidden rounded-lg bg-background p-6 md:flex",
        className,
      )}
    >
      <AnimatedShinyTextDemo title={"✨ Share Your Knowledge with Others "} />
      <AnimatedList className="my-5 md:my-8">
        {mockProblems.map((problem, idx) => (
          <ProblemCard key={idx} {...problem} />
        ))}
      </AnimatedList>
    </div>
  );
}

export function AnimatedListDemo2({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[690px] w-full flex-col overflow-hidden rounded-lg bg-background p-1 d:p-3 md:mt-0",
        className,
      )}
    >
      <AnimatedShinyTextDemo title={"✨ In Depth DSA Explaination"} />
      <AnimatedList className=" my-8 md:pb-10">
        {problems.map((problem, idx) => (
          <ProblemCard key={idx} {...problem} />
        ))}
      </AnimatedList>
    </div>
  );
}
