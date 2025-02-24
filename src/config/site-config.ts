export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Guided Yoga Therapy",
    icon: "yoga",
    username: "@MindSageapp",
    description:
      "Explore the benefits of yoga for mental wellness. Our guided yoga sessions help with stress relief and emotional balance.",
    color: "#FFC107",
    buttonTitle: "Start Yoga",
    buttonLink: "/dashboard/yoga",
    buttonSecondaryText: "New Sessions",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Health Profile",
    icon: "brain",
    username: "@MindSageapp",
    buttonTitle: "Visit Profile",
    buttonLink: "/dashboard/health-status",
    buttonSecondaryText: "Updated",
    color: "#00796B",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Activity Progress",
    icon: "progress",
    username: "@MindSageapp",
    buttonTitle: "View Progress",
    buttonLink: "/dashboard/your-progress",
    color: "#673AB7",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Know Yourself! Let Us Guide You",
    image: "/cond3.webp",
    equipments: [
      {
        title: "Anger Management",
        link: "/dashboard/guidance",
      },
      {
        title: "Anxiety Relief",
        link: "/dashboard/guidance",
      },
      {
        title: "Overcoming Depression",
        link: "/dashboard/guidance",
      },
      {
        title: " Insomnia",
        link: "/dashboard/guidance",
      },
      {
        title: "Self-Confidence",
        link: "/dashboard/guidance",
      },

      {
        title: "Reducing Fear & Phobia",
        link: "/dashboard/guidance",
      },
    ],
  },

  // {
  //   layout: "2x2",
  //   type: "social",
  //   title: "Mental Health AI Chat",
  //   icon: "ai",
  //   username: "@MindSageapp",
  //   description:
  //     "Get real-time support with our AI-powered chatbot, designed to offer helpful insights for your mental wellness journey.",
  //   color: "#8E24AA",
  //   buttonTitle: "Chat Now",
  //   buttonLink: "/dashboard/ai",
  // },

  {
    layout: "2x2",
    type: "social",
    title: "Therapist Support",
    icon: "stethoscope", // Replace with the specific therapist icon if available
    username: "@MindSageapp",
    description:
      "Connect with certified therapists for professional guidance in your mental wellness journey.",
    color: "#FB923C",
    buttonTitle: "Find Therapist",
    buttonLink: "/dashboard/therapist",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Reading Theraphy",
    icon: "book", // Use an icon that represents reading or resources
    description:
      "Explore our curated reading material on therapy, coping techniques, and self-improvement strategies.",
    color: "#7547FF",
    buttonTitle: "Browse Resources",
    buttonLink: "/dashboard/reading-theraphy",
  },

  {
    layout: "2x1",
    type: "mentor",
    title: "Talking Theraphy",
    icon: "stethoscope",
    color: "#4547FF",
    promotion: "Explore",
    buttonLink: "/dashboard/meetings",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Audio Therapy",
    username: "@MindSageapp",
    description:
      "Engage in audio therapy sessions tailored to help you relax and manage stress effectively.",
    icon: "headphones",
    buttonTitle: "Listen Now",
    color: "#F50048",
    buttonLink: "/dashboard/audio-theraphy",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Self-Reflection Journal",
    icon: "notepad",
    color: "#FF5722",
    
    buttonLink: "/dashboard/activities",
  },
];

// const GridItems: GridItemInterface[] = [
//   {
//     layout: "2x2",
//     type: "social",
//     title: "Youtube",
//     icon: "youtube",
//     username: "@makrdev",
//     description:
//       "My true passion is learning and sharing my knowledge, which is why I started creating Youtube videos about web development, startups, and marketing.",
//     color: "#FF0000",
//     buttonTitle: "Subscribe",
//     buttonLink: "https://www.youtube.com/@makrdev",
//     buttonSecondaryText: "1.1K",
//   },
//   {
//     layout: "1x2",
//     type: "social",
//     title: "Discord",
//     icon: "discord",
//     username: "@makrdev",
//     buttonTitle: "Join",
//     buttonLink: "https://discord.com/invite/5aXRp49Q4h",
//     buttonSecondaryText: "44",
//     color: "#5865F2",
//   },
//   {
//     layout: "1x2",
//     type: "social",
//     title: "Github",
//     icon: "github",
//     username: "@batuhanbilginn",
//     buttonTitle: "Follow",
//     buttonSecondaryText: "36",
//     buttonLink: "https://github.com/batuhanbilginn",
//     color: "#070707",
//   },
//   {
//     layout: "2x4",
//     type: "equipment",
//     title: "Know yourself ! Let us Guide you ! ",
//     image: "/cond3.webp",

//     // image: "/cond3.webp",

//     equipments: [
//       {
//         title: "Click Here for a Quick Guide ",
//         link: "/dashboard/guidance",
//       },
//     ],
//   },
//   {
//     layout: "2x2",
//     type: "social",
//     title: "Twitter",
//     icon: "twitter",
//     username: "@makrdev",
//     buttonTitle: "Follow",
//     buttonLink: "https://twitter.com/makrdev",
//     buttonSecondaryText: "279",
//     color: "#1DA1F2",
//     description:
//       "Full-stack Developer / I build AI applications and create video tutorials on Youtube.",
//   },

//   {
//     layout: "2x1",
//     type: "mentor",
//     title: "Supabase Mentorship",
//     icon: "superpeer",
//     promotion: "MAKRDEVFELLOWS",
//     buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
//   },
//   {
//     layout: "2x1",
//     type: "project",
//     title: "makrAI",
//     icon: "github",
//     color: "#070707",
//     buttonLink: "https://github.com/batuhanbilginn/makr-ai",
//     stars: 73,
//   },
//   {
//     layout: "2x2",
//     type: "social",
//     title: "Full-stack Multilingual Blog with Next.js 13",
//     username: "@batuhanbilginn",
//     description:
//       "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
//     icon: "udemy",
//     buttonTitle: "Enroll",
//     buttonSecondaryText: "%90 OFF",
//     buttonLink:
//       "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
//   },
//   {
//     layout: "2x1",
//     type: "project",
//     title: "AI Blog Post Generator",
//     icon: "github",
//     stars: 19,
//     color: "#070707",
//     buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
//   },
// ];

export const siteConfig = {
  creator: "MindSage ",
  title: "AI Powered Mental Health Assistant ! ",
  bio: " MindSage is your friendly companion for mental health!  ",
  bio2: " We’re here to support you with real-time help, personalized tips, and tools to track your well-being. Whether you're looking for a quick chat with our AI or resources to help you feel better",
  bio3: "MindSage is here for you every step of the way",
  bio4: "Let’s take care of your mind together! ",

  items: GridItems,
} as const;
