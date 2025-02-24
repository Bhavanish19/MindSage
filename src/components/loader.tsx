// import React from "react";

// const Loader = () => {
//   return (
//     <div className="flex items-center justify-center h-screen w-full absolute inset-0 z-[999] bg-background">
//       <div className="flex items-center justify-center w-full -ml-10">
//         {/* <svg
//                     className="container"
//                     x="0px"
//                     y="0px"
//                     viewBox="0 0 50 31.25"
//                     height="31.25"
//                     width="50"
//                     preserveAspectRatio="xMidYMid meet"
//                 >
//                     <path
//                         className="track"
//                         strokeWidth="2"
//                         fill="none"
//                         pathLength="100"
//                         d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
//                     />
//                     <path
//                         className="car"
//                         strokeWidth="2"
//                         fill="none"
//                         pathLength="100"
//                         d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
//                     />
//                 </svg> */}
//         MindSage !
//       </div>
//     </div>
//   );
// };

// export default Loader;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const quotes = [
//   {
//     text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
//     author: "MindSage",
//   },
//   {
//     text: "Take a deep breath. You're doing better than you think.",
//     author: "MindSage",
//   },
//   {
//     text: "Small steps forward are still progress.",
//     author: "MindSage",
//   },
//   {
//     text: "Your mind is a garden. Your thoughts are the seeds. You can grow flowers or you can grow weeds.",
//     author: "MindSage",
//   },
//   {
//     text: "Self-care is not selfish. You cannot serve from an empty vessel.",
//     author: "MindSage",
//   },
//   {
//     text: "Every moment is a fresh beginning.",
//     author: "MindSage",
//   },
//   {
//     text: "You are stronger than you know, braver than you believe.",
//     author: "MindSage",
//   },
//   {
//     text: "Peace begins with a smile within.",
//     author: "MindSage",
//   },
// ];

// const Loader = () => {
//   const [currentQuote, setCurrentQuote] = React.useState(
//     () => quotes[Math.floor(Math.random() * quotes.length)]
//   );

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-[999] bg-background/80 backdrop-blur-sm">
//       <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto px-4">
//         {/* Pulsing Logo */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.5, 1, 0.5],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="mb-8 text-3xl md:text-4xl font-bold text-primary"
//         >
//           MindSage
//         </motion.div>

//         {/* Quote Container */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           key={currentQuote.text}
//           className="text-center"
//         >
//           <p className="text-lg md:text-xl font-medium text-foreground mb-4">
//             "{currentQuote.text}"
//           </p>
//           <p className="text-sm text-muted-foreground">
//             — {currentQuote.author}
//           </p>
//         </motion.div>

//         {/* Loading Dots */}
//         <div className="mt-8 flex space-x-2">
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               animate={{
//                 scale: [1, 1.5, 1],
//                 opacity: [0.3, 1, 0.3],
//               }}
//               transition={{
//                 duration: 1,
//                 repeat: Infinity,
//                 delay: i * 2.2,
//               }}
//               className="w-2 h-2 rounded-full bg-primary"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;

"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    author: "MindSage",
  },
  {
    text: "Take a deep breath. You're doing better than you think.",
    author: "MindSage",
  },
  {
    text: "Small steps forward are still progress.",
    author: "MindSage",
  },
  {
    text: "Your mind is a garden. Your thoughts are the seeds. You can grow flowers or you can grow weeds.",
    author: "MindSage",
  },
  {
    text: "Self-care is not selfish. You cannot serve from an empty vessel.",
    author: "MindSage",
  },
  {
    text: "Every moment is a fresh beginning.",
    author: "MindSage",
  },
  {
    text: "You are stronger than you know, braver than you believe.",
    author: "MindSage",
  },
  {
    text: "Peace begins with a smile within.",
    author: "MindSage",
  },
];

const Loader = () => {
  const [currentQuote, setCurrentQuote] = React.useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        setIsVisible(true);
      }, 500); // Wait for exit animation to complete
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto px-4">
        {/* Pulsing Logo */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8 text-3xl md:text-4xl font-bold text-primary"
        >
          MindSage
        </motion.div>

        {/* Quote Container */}
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={currentQuote.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl font-medium text-foreground mb-4">
                "{currentQuote.text}"
              </p>
              {/* <p className="text-sm text-muted-foreground">
                — {currentQuote.author}
              </p> */}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Dots */}
        <div className="mt-8 flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
