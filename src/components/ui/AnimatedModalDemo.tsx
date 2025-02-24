"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  NotepadText,
  Stethoscope,
  HeartPulse,
  Bot,
  Headphones,
  MessageCircle,
  BookOpen,
  Brain,
  PersonStanding,
} from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

export default function AnimatedModalDemo() {
  const images = [
    "/expressions/glad.png",
    "/expressions/good.png",
    "/expressions/HAPPY.png",
    "/expressions/lovely.png",
    "/expressions/smily.png",
  ];
  return (
    <div className="  flex items-center  ">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span
            className="group-hover/modal-btn:translate-x-40 text-center   duration-500 self-end  text-yellow-500 
                transition-transform group-hover:scale-105  w-full "
          >
            Explore Blogs !
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            📚
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className=" ">
            <h2 className="text-2xl text-foreground font-bold text-center mb-4">
              MindSage Blogs
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Our blog is currently under development. In the meantime, explore
              these amazing features:
            </p>
            <div className="flex justify-center  bg:black200 items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2  mt-10 md:grid-cols-3 gap-6">
              <ActivityItem
                icon={NotepadText}
                text="Building Habits"
                href="/dashboard/activities"
              />
              <ActivityItem
                icon={Brain}
                text="Guidance"
                href="/dashboard/guidance"
              />
              <ActivityItem icon={Bot} text="AI Chat" href="/dashboard/ai" />
              <ActivityItem
                icon={Headphones}
                text="Audio Therapy"
                href="/dashboard/audio-theraphy"
              />
              <ActivityItem
                icon={PersonStanding}
                text="Yoga Therapy"
                href="/dashboard/yoga"
              />
              <ActivityItem
                icon={BookOpen}
                text="Reading Therapy"
                href="/dashboard/reading-theraphy"
              />
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
const ActivityItem = ({
  icon: Icon,
  text,
  href,
}: {
  icon: React.ElementType;
  text: string;
  href: string;
}) => (
  <Link href={href}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center p-4  hover:dark:bg-black300 dark:bg-black200 rounded-lg shadow-sm cursor-pointer"
    >
      <Icon className="text-primary h-8 w-8 mb-2" />
      <span className="text-foreground text-sm text-center">{text}</span>
    </motion.div>
  </Link>
);
