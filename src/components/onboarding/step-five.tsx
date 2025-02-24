// "use client";

// import { ArrowRightIcon } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { buttonVariants } from "../ui/button";
// import Image from "next/image";
// import Confetti from "react-dom-confetti";

// const StepFive = () => {
//   const [showConfetti, setShowConfetti] = useState<boolean>(false);

//   useEffect(() => setShowConfetti(true), []);

//   return (
//     <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto h-full py-2 relative">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none select-none absolute inset-0 overflow-hidden flex h-full justify-center z-30"
//       >
//         <Confetti
//           active={showConfetti}
//           config={{ elementCount: 250, spread: 250 }}
//         />
//       </div>
//       <div className="max-w-5xl mx-auto text-center">
//         <Image
//           src="/files/allset.png"
//           alt="Onboarding Complete"
//           width={800}
//           height={800}
//           className="w-52 h-auto object-cover mx-auto"
//         />
//         <h2 className=" text-xl md:text-2xl font-bold font-heading text-foreground mt-4">
//           You&apos;re all done!
//         </h2>
//         <p className=" dark:text-slate-200 text-slate-900 mb-5 md:mb-3 text-[16px] md:text-[17px] font-bold max-w-lg mt-2">
//           Congratulations, you&apos;ve completed the onboarding process. Get
//           ready to start your journey to better health with{" "}
//           <span className="text-orange-500">MindSage.</span>
//         </p>
//         <Link
//           href="/dashboard"
//           className={buttonVariants({ className: "mt-4" })}
//         >
//           Get personalized plan
//           <ArrowRightIcon className="w-4 h-4 ml-1.5" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default StepFive;

// "use client";

// import { ArrowRightIcon } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { buttonVariants } from "../ui/button";
// import Image from "next/image";
// import Confetti from "react-dom-confetti";
// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";

// const StepFive = () => {
//   const [showConfetti, setShowConfetti] = useState<boolean>(false);

//   useEffect(() => setShowConfetti(true), []);

//   return (
//     <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto h-full py-2 relative">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none select-none absolute inset-0 overflow-hidden flex h-full justify-center z-30"
//       >
//         <Confetti
//           active={showConfetti}
//           config={{ elementCount: 250, spread: 250 }}
//         />
//       </div>
//       <div className="max-w-5xl mx-auto text-center">
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Image
//             src="/files/allset.png"
//             alt="Onboarding Complete"
//             width={800}
//             height={800}
//             className="w-52 h-auto object-cover mx-auto"
//           />
//         </motion.div>
//         <motion.h2
//           className="text-xl md:text-2xl font-bold font-heading text-foreground mt-4"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           You&apos;re all done!
//         </motion.h2>
//         <motion.p
//           className="dark:text-slate-200 text-slate-900 mb-5 md:mb-3 text-[16px] md:text-[17px] font-bold max-w-lg mt-2 mx-auto"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Congratulations, you&apos;ve completed the onboarding process. Get
//           ready to start your journey to better health with{" "}
//           <span className="text-orange-500">MindSage.</span>
//         </motion.p>

//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="mb-6"
//         >
//           <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-none shadow-lg max-w-lg mx-auto">
//             <p className="text-base leading-relaxed">
//               Remember, 90% of what you worry about aren&apos;t even real
//               problems. Take a moment to{" "}
//               <span className="text-primary font-semibold">breathe</span>, spend
//               quality time with your{" "}
//               <span className="text-primary font-semibold">
//                 family and friends
//               </span>
//               , watch a movie, or simply take a{" "}
//               <span className="text-primary font-semibold">break</span>.
//               <br />
//               <span className="block mt-2 font-medium text-lg">
//                 Everything&apos;s going to be just fine! 🌟
//               </span>
//             </p>
//           </Card>
//         </motion.div>

//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <Link
//             href="/dashboard"
//             className={buttonVariants({
//               className:
//                 "mt-4 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105",
//             })}
//           >
//             Get personalized plan
//             <ArrowRightIcon className="w-4 h-4 ml-1.5" />
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default StepFive;

"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import Confetti from "react-dom-confetti";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const StepFive = () => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => setShowConfetti(true), []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto h-full py-2 relative">
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex h-full justify-center z-30"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 250, spread: 250 }}
        />
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/files/allset.png"
            alt="Onboarding Complete"
            width={800}
            height={800}
            className="w-52 h-auto object-cover mx-auto"
          />
        </motion.div>
        <motion.h2
          className="text-xl md:text-2xl font-bold font-heading text-foreground mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          You&apos;re all done!
        </motion.h2>
        <motion.p
          className="dark:text-slate-200 text-slate-900 mb-5 md:mb-3 text-[16px] md:text-[17px] font-bold max-w-lg mt-2 mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Congratulations, you&apos;ve completed the onboarding process. Get
          ready to start your journey to better health with{" "}
          <span className="text-orange-500">MindSage.</span>
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <Card className="p-6 bg-gradient-to-r from-primary/20 to-secondary/20 border-slate-400   max-w-lg mx-auto rounded-lg">
            <p className="text-base leading-relaxed">
              Remember, 90% of what you worry about aren&apos;t even real
              problems. Take a moment to{" "}
              <span className="text-primary font-semibold">breathe</span>, spend
              quality time with your{" "}
              <span className="text-primary font-semibold">
                family and friends
              </span>
              , watch a movie, or simply take a{" "}
              <span className="text-primary font-semibold">break</span>.
              <br />
              <span className="block mt-2 font-medium text-lg">
                Everything&apos;s going to be just fine! 🌟
              </span>
            </p>
            <p className="text-right font-medium text-slate-700 dark:text-slate-300 mt-4">
              – Hunt
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/dashboard"
            className={buttonVariants({
              className:
                "mt-4 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105",
            })}
          >
            Get personalized plan
            <ArrowRightIcon className="w-4 h-4 ml-1.5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default StepFive;
