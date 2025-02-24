// // @ts-nocheck

// "use client";
// import { Button } from "@/components/ui/button";
// import React from "react";
// import GradualSpacing from "@/components/magicui/gradual-spacing";
// import Image from "next/image"; // Assuming you're using Next.js for optimized images2
// import { Link } from "lucide-react";

// const services = [
//   {
//     title: "Audio Therapy",
//     description:
//       "Listening to music & other audio files often enlightens our mood.",
//     image: "/images2/audio.png",
//     link: "/audioTherapy",
//   },
//   {
//     title: "Reading Therapy",
//     description:
//       "Motivational quotes and books can help us to divert and change our mood.",
//     image: "/images2/reading.png",
//     link: "/readingTherapy",
//   },
//   {
//     title: "Yoga Therapy",
//     description: "Yoga and exercise plays a very important role in our lives.",
//     image: "/images2/yoga.png",
//     link: "/yogatherapy",
//   },
//   {
//     title: "Laughing Therapy",
//     description: "Laughing is the only medicine which refreshes our mind.",
//     image: "/images2/laughing.png",
//     link: "/laughTherapy",
//   },
//   {
//     title: "Talking Therapy",
//     description:
//       "A quick short conversation can often bring smile to our face.",
//     image: "/images2/talking.png",
//     link: "/talkingTherapy",
//   },
//   {
//     title: "Consult A Doctor",
//     description:
//       "If you're facing too many problems, you should consult a doctor.",
//     image: "/images2/doctor.png",
//     link: "https://www.practo.com/counselling-psychology",
//   },
//   {
//     title: "Child Therapy",
//     description: "Children make us forget about worries with their innocence.",
//     image: "/images2/child.jpg",
//     link: "/childTherapy",
//   },
//   {
//     title: "Spiritual Therapy",
//     description: "Helps you to become more mindful in your thinking.",
//     image: "/images2/spiritualtherapy.jpg",
//     link: "/spirituality",
//   },
//   {
//     title: "Special Therapy",
//     description: "If you need special attention and help from us.",
//     image: "/images2/specialtherapy.jpg",
//     link: "/specialTherapy",
//   },
// ];

// const page = () => {
//   return (
//     <>
//       <section id="services" className="py-16 bg-gray-100 dark:bg-gray-900">
//         <div className=" mx-auto px-4">
//           <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
//             Our Services
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
//               >
//                 <div className="p-6">
//                   <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
//                     <Image
//                       src={service.image}
//                       alt={service.title}
//                       width={96}
//                       height={96}
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <h2 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">
//                     {service.title}
//                   </h2>
//                   <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
//                     {service.description}
//                   </p>
//                   <Link href={service.link} passHref>
//                     <span className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out">
//                       Lets Explore
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <GradualSpacing
//         className="my-5 text-center text-[16px] font-bold -tracking-widest text-black dark:text-white md:my-7 md:text-5xl md:leading-[5rem]"
//         text="Unlock your Inner Peace Step by Step"
//       />

//       <div className="flex flex-col gap-5 px-5 md:px-10">
//         {/* Section for Mental Wellness Techniques */}
//         <div className="text-center">
//           <h2 className="text-xl font-bold md:text-3xl">
//             Mental Wellness Techniques
//           </h2>
//           <p className="my-3 text-gray-600 dark:text-gray-300">
//             Here are some techniques to improve your mental well-being and help
//             you relax.
//           </p>

//           <div className="flex justify-center">
//             <Image
//               src="/files/meditation.png" // Use your actual path to the image
//               alt="Yoga for Mental Wellness"
//               width={400}
//               height={400}
//               className="rounded-lg  "
//             />
//           </div>
//         </div>

//         {/* Section for Facts and Knowledge */}
//         <div className="text-center">
//           <h3 className="text-lg font-semibold md:text-2xl">
//             Facts on Mental Health{" "}
//           </h3>
//           <p className="my-3 text-gray-600 dark:text-gray-300">
//             Learn more about the benefits of practices like yoga, meditation,
//             and breathing exercises for mental well-being.
//           </p>
//         </div>

//         {/* Blog section */}
//         <div className=" text-center">
//           <div className="flex flex-col  items-center ">
//             <Image
//               src="/files/doc.png" // Use your actual path to the image
//               alt="Yoga for Mental Wellness"
//               width={90}
//               height={90}
//             />
//             <h2 className="text-2xl font-bold md:text-4xl">
//               Blogs by Mental Health Experts
//             </h2>
//             <div className="flex justify-center"></div>
//           </div>

//           {/* Blog 1 */}
//           <div className="flex flex-row gap-3">
//             <div className="mt-5 p-5 border-b border-gray-300 dark:border-gray-600">
//               <h3 className="text-xl font-semibold">
//                 The Power of Mindfulness
//               </h3>
//               <p className="my-3 text-gray-600 dark:text-gray-300">
//                 Discover how mindfulness can reduce stress and anxiety, helping
//                 you maintain a balanced mental state. Learn more from experts in
//                 the field.
//               </p>

//               {/* more blog details  */}
//             </div>

//             {/* Blog 2 */}
//             <div className="mt-5 p-5 border-b border-gray-300 dark:border-gray-600">
//               <h3 className="text-xl font-semibold">
//                 Breathing Techniques for Stress Relief
//               </h3>
//               <p className="my-3 text-gray-600 dark:text-gray-300">
//                 Learn the best breathing techniques for immediate stress relief
//                 and mental clarity, written by health experts.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;

"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import Image from "next/image"; // Assuming you're using Next.js for optimized images
import Link from "next/link"; // Update import statement to use Next.js Link

const services = [
  {
    title: "Audio Therapy",
    description:
      "Listening to music & other audio files often enlightens our mood.",
    image: "/images2/audio.png",
    link: "/audioTherapy",
  },
  {
    title: "Reading Therapy",
    description:
      "Motivational quotes and books can help us to divert and change our mood.",
    image: "/images2/reading.png",
    link: "/readingTherapy",
  },
  {
    title: "Yoga Therapy",
    description: "Yoga and exercise plays a very important role in our lives.",
    image: "/images2/yoga.png",
    link: "/yogatherapy",
  },
  {
    title: "Laughing Therapy",
    description: "Laughing is the only medicine which refreshes our mind.",
    image: "/images2/laughing.png",
    link: "/laughTherapy",
  },
  {
    title: "Talking Therapy",
    description:
      "A quick short conversation can often bring smile to our face.",
    image: "/images2/talking.png",
    link: "/talkingTherapy",
  },
  {
    title: "Consult A Doctor",
    description:
      "If you're facing too many problems, you should consult a doctor.",
    image: "/images2/doctor.png",
    link: "https://www.practo.com/counselling-psychology",
  },
  {
    title: "Child Therapy",
    description: "Children make us forget about worries with their innocence.",
    image: "/images2/child.jpg",
    link: "/childTherapy",
  },
  {
    title: "Spiritual Therapy",
    description: "Helps you to become more mindful in your thinking.",
    image: "/images2/spiritualtherapy.jpg",
    link: "/spirituality",
  },
  {
    title: "Special Therapy",
    description: "If you need special attention and help from us.",
    image: "/images2/specialtherapy.jpg",
    link: "/specialTherapy",
  },
];

const page = () => {
  return (
    <>
      <section id="services" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Our Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  {service.link.startsWith("http") ? ( // Check if the link is external
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out">
                        Lets Explore
                      </span>
                    </a>
                  ) : (
                    // Internal links
                    <Link href={service.link} passHref>
                      <span className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out">
                        Lets Explore
                      </span>
                    </Link>
                  )}
                  {!service.link && ( // If no link exists, show a Coming Soon button
                    <Button
                      className="block w-full mt-4 py-2 px-4 bg-gray-400 text-white font-semibold rounded-md cursor-not-allowed"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradualSpacing
        className="my-5 text-center text-[16px] font-bold -tracking-widest text-black dark:text-white md:my-7 md:text-5xl md:leading-[5rem]"
        text="Unlock your Inner Peace Step by Step"
      />

      <div className="flex flex-col gap-5 px-5 md:px-10">
        {/* Section for Mental Wellness Techniques */}
        <div className="text-center">
          <h2 className="text-xl font-bold md:text-3xl">
            Mental Wellness Recommendations!
          </h2>
          <p className="my-3 text-gray-600 dark:text-gray-300">
            Here are some techniques to improve your mental well-being and help
            you relax.
          </p>

          <div className="flex justify-center">
            <Image
              src="/files/meditation.png" // Use your actual path to the image
              alt="Yoga for Mental Wellness"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Section for Facts and Knowledge */}
        <div className="text-center">
          <h3 className="text-lg font-semibold md:text-2xl">
            Facts on Mental Health{" "}
          </h3>
          <p className="my-3 text-gray-600 dark:text-gray-300">
            Learn more about the benefits of practices like yoga, meditation,
            and breathing exercises for mental well-being.
          </p>
        </div>

        {/* Blog section */}
        <div className="text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/files/doc.png" // Use your actual path to the image
              alt="Yoga for Mental Wellness"
              width={90}
              height={90}
            />
            <h2 className="text-2xl font-bold md:text-4xl">
              Videos You should definitly look into !
            </h2>
            <div className="flex justify-center"></div>
          </div>

          {/* Blog 1 */}
          <div className="flex flex-row gap-3">
            <div className="mt-5 p-5 border-b border-gray-300 dark:border-gray-600">
              <h3 className="text-xl font-semibold">
                The Power of Mindfulness
              </h3>
              <p className="my-3 text-gray-600 dark:text-gray-300">
                Discover how mindfulness can reduce stress and anxiety, helping
                you maintain a balanced mental state. Learn more from experts in
                the field.
              </p>

              {/* more blog details */}
            </div>

            {/* Blog 2 */}
            <div className="mt-5 p-5 border-b border-gray-300 dark:border-gray-600">
              <h3 className="text-xl font-semibold">
                Breathing Techniques for Stress Relief
              </h3>
              <p className="my-3 text-gray-600 dark:text-gray-300">
                Learn the best breathing techniques for immediate stress relief
                and mental clarity, written by health experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
