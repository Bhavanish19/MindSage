// "use client";

// import { MarqueeDemoVertical } from "@/components/MarqueeDemoVertical";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useSignIn } from "@clerk/nextjs";
// import { EyeIcon, EyeOffIcon, LoaderIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { toast } from "sonner";

// const SignInPage = () => {
//   const router = useRouter();

//   const { isLoaded, signIn, setActive } = useSignIn();

//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!isLoaded) return;

//     if (!email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const signInAttempt = await signIn.create({
//         identifier: email,
//         password,
//         redirectUrl: "/auth/auth-callback",
//       });

//       if (signInAttempt.status === "complete") {
//         await setActive({ session: signInAttempt.createdSessionId });
//         router.push("/dashboard");
//       } else {
//         console.error(JSON.stringify(signInAttempt, null, 2));
//         toast.error("Invalid email or password. Please try again.");
//       }
//     } catch (error: any) {
//       console.error(JSON.stringify(error, null, 2));
//       switch (error.errors[0]?.code) {
//         case "form_identifier_not_found":
//           toast.error("This email is not registered. Please sign up first.");
//           break;
//         case "form_password_incorrect":
//           toast.error("Incorrect password. Please try again.");
//           break;
//         case "too_many_attempts":
//           toast.error("Too many attempts. Please try again later.");
//           break;
//         default:
//           toast.error("An error occurred. Please try again");
//           break;
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex   h-screen max-h-screen">
//       <section className="remove-scrollbar relative flex-1 overflow-y-auto px-[5%] my-auto">
//         <div className="sub-container   max-w-[496px]">
//           <div className="space-y-6   w-full">
//             <div className="flex flex-col items-center w-full justify-center  gap-y-6">
//               <div className="space-y-2 w-full">
//                 <h1 className="text-32-bold flex gap-2 mb-2">
//                   Welcome Back !{" "}
//                   <Image
//                     src="/images/brain-gym.png"
//                     height={150}
//                     width={150}
//                     alt="MindSage logo"
//                     className="mb-1x h-10 w-fit"
//                   />
//                 </h1>
//                 <p className="text-16-regular text-dark-600 mb-6">
//                   Sign up to get started with MindSage.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="w-full  ">
//                 <div className="mt-4 space-y-1">
//                   <Label htmlFor="email">Email address</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email address"
//                     value={email}
//                     disabled={isLoading}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="mt-4 space-y-1">
//                   <Label htmlFor="password">Password</Label>
//                   <div className="relative w-full">
//                     <Input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your password"
//                       value={password}
//                       disabled={isLoading}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <Button
//                       type="button"
//                       size="icon"
//                       variant="ghost"
//                       disabled={isLoading}
//                       className="absolute top-1 right-1 hover:translate-y-0"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? (
//                         <EyeOffIcon className="w-4 h-4" />
//                       ) : (
//                         <EyeIcon className="w-4 h-4" />
//                       )}
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <Button
//                     type="submit"
//                     size="default"
//                     disabled={isLoading}
//                     className="w-full"
//                   >
//                     {isLoading ? (
//                       <LoaderIcon className="w-4 h-4 animate-spin" />
//                     ) : (
//                       "Sign In"
//                     )}
//                   </Button>
//                 </div>
//               </form>

//               <div className="flex mt-2">
//                 <p className="text-sm text-muted-foreground text-center w-full">
//                   Dont&apos;t have an account?{" "}
//                   <Link
//                     href="/auth/signup"
//                     className="text-foreground font-medium"
//                   >
//                     Sign Up
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="mt-20 flex justify-between text-14-regular">
//             <p className="text-dark-600 xl:text-left">© 2024 MindSage</p>
//           </div>
//         </div>
//       </section>

//       <div className=" w-[50%] hidden h-full object-cover md:block bg-red-500">
//       <MarqueeDemoVertical/>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;

"use client";

import { MarqueeDemoVertical } from "@/components/MarqueeDemoVertical";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignIn } from "@clerk/nextjs";
import { EyeIcon, EyeOffIcon, LoaderIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const SignInPage = () => {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
        redirectUrl: "/auth/auth-callback",
      });
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/dashboard");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
        toast.error("Invalid email or password. Please try again.");
      }
    } catch (error: any) {
      console.error(JSON.stringify(error, null, 2));
      switch (error.errors[0]?.code) {
        case "form_identifier_not_found":
          toast.error("This email is not registered. Please sign up first.");
          break;
        case "form_password_incorrect":
          toast.error("Incorrect password. Please try again.");
          break;
        case "too_many_attempts":
          toast.error("Too many attempts. Please try again later.");
          break;
        default:
          toast.error("An error occurred. Please try again");
          break;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen max-h-screen">
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="remove-scrollbar relative flex-1 overflow-y-auto px-[5%] my-auto"
      >
        <div className="sub-container max-w-[496px]">
          <motion.div
            className="space-y-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col items-center w-full justify-center gap-y-6">
              <motion.div
                className="space-y-2 w-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-32-bold flex gap-2 mb-2">
                  Welcome Back!{" "}
                  <motion.div
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    <Image
                      src="/images/brain-gym.png"
                      height={150}
                      width={150}
                      alt="MindSage logo"
                      className="mb-1x h-10 w-fit"
                    />
                  </motion.div>
                </h1>
                <p className="text-16-regular text-dark-600 mb-6">
                  Continue your journey with MindSage
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="w-full space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="space-y-1">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      disabled={isLoading}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative w-full">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        disabled={isLoading}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                      <Button
                        type="button"
                        disabled={isLoading}
                        className="absolute top-1 right-1 hover:translate-y-0 transition-transform"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOffIcon className="w-4 h-4" />
                        ) : (
                          <EyeIcon className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    type="submit"
                    size="default"
                    disabled={isLoading}
                    className="w-full h-12 relative overflow-hidden transition-all duration-200"
                  >
                    {isLoading ? (
                      <LoaderIcon className="w-4 h-4 animate-spin" />
                    ) : (
                      <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        Sign In
                      </motion.span>
                    )}
                  </Button>
                </motion.div>
              </motion.form>

              <motion.div
                className="flex mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className=" text-[15px] md:text-[18px] text-center w-full">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/auth/signup"
                    className=" text-[15px] md:text-[18px]  font-bold text-primary transition-colors"
                  >
                    Sign Up
                  </Link>
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="mt-20 flex justify-between text-14-regular"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-dark-600 xl:text-left">© 2024 MindSage</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[50%] hidden h-full object-cover md:block"
      >
        <MarqueeDemoVertical />
      </motion.div>
    </div>
  );
};

export default SignInPage;
