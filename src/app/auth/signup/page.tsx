// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useSignUp } from "@clerk/nextjs";
// import { toast } from "sonner";
// import { ArrowLeftIcon, EyeIcon, EyeOffIcon, LoaderIcon } from "lucide-react";

// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { MarqueeDemoVertical } from "@/components/MarqueeDemoVertical";

// const SignUpPage = ({ searchParams }: { searchParams: any }) => {
//   const router = useRouter();
//   const { isLoaded, signUp, setActive } = useSignUp();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [password, setPassword] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isVerifying, setIsVerifying] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!isLoaded || !name || !email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }
//     setIsLoading(true);
//     try {
//       await signUp.create({
//         emailAddress: email,
//         password,
//         firstName: name.split(" ")[0],
//         lastName: name.split(" ")[1] || "",
//       });
//       await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
//       setIsVerified(true);
//     } catch (error: any) {
//       console.log(JSON.stringify(error, null, 2));
//       handleSignUpError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerify = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!isLoaded || !code) {
//       toast.error("Please enter the verification code");
//       return;
//     }
//     setIsVerifying(true);
//     try {
//       const completeSignUp = await signUp.attemptEmailAddressVerification({
//         code,
//       });
//       if (completeSignUp.status === "complete") {
//         await setActive({ session: completeSignUp.createdSessionId });
//         router.push("/auth/auth-callback");
//       } else {
//         toast.error("Invalid verification code. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", JSON.stringify(error, null, 2));
//       toast.error("An error occurred. Please try again");
//     } finally {
//       setIsVerifying(false);
//     }
//   };

//   const handleSignUpError = (error: any) => {
//     const errorCode = error.errors[0]?.code;
//     const errorMessages: { [key: string]: string } = {
//       form_identifier_exists:
//         "This email is already registered. Please sign in.",
//       form_password_pwned:
//         "The password is too common. Please choose a stronger password.",
//       form_param_format_invalid:
//         "Invalid email address. Please enter a valid email address.",
//       form_password_length_too_short:
//         "Password is too short. Please choose a longer password.",
//     };
//     toast.error(
//       errorMessages[errorCode] || "An error occurred. Please try again"
//     );
//   };

//   const renderForm = () => (
//     <div>
//       <div className="space-y-2">
//         <p className=" text-18-bold  my-4">
//           Create an account to start your journey to inner peace
//         </p>
//         <h1 className="text-32-bold flex gap-2 mb-2">
//           Hi there{" "}
//           <Image
//             src="/images/brain-hi.png"
//             height={100}
//             width={100}
//             alt="MindSage logo"
//             className="mb-1x h-10 w-fit"
//           />
//         </h1>
//         <p className="text-16-regular text-dark-600 mb-6">
//           Sign up to get started with MindSage.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4 my-3 md:my-6">
//         <div>
//           <Label htmlFor="name">Full Name</Label>
//           <Input
//             id="name"
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             disabled={isLoading}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div>
//           <Label htmlFor="email">Email address</Label>
//           <Input
//             id="email"
//             type="email"
//             placeholder="Enter your email address"
//             value={email}
//             disabled={isLoading}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <Label htmlFor="password">Password</Label>
//           <div className="relative">
//             <Input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter your password"
//               value={password}
//               disabled={isLoading}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button
//               type="button"
//               disabled={isLoading}
//               className="absolute right-2 top-1/2 -translate-y-1/2"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? (
//                 <EyeOffIcon className="h-4 w-4" />
//               ) : (
//                 <EyeIcon className="h-4 w-4" />
//               )}
//             </Button>
//           </div>
//         </div>
//         <Button type="submit" className="w-full" disabled={isLoading}>
//           {isLoading ? (
//             <LoaderIcon className="h-4 w-4 animate-spin" />
//           ) : (
//             "Sign Up"
//           )}
//         </Button>
//       </form>
//     </div>
//   );

//   const renderVerification = () => (
//     <form
//       onSubmit={handleVerify}
//       className=" border-slate-700 rounded-xl  border-2  p-10 space-y-4"
//     >
//       <div className="flex flex-col justify-center items-center  text-center gap-1">
//         <Image
//           src="/images/brain-hi.png"
//           alt="Dashboard"
//           width={45}
//           height={45}
//           quality={100}
//           priority
//         />
//         <h1 className="text-2xl font-bold font-heading mt-2">
//           Please check your email
//         </h1>
//         <p className="text-muted-foreground">
//           We&apos;ve sent a verification code to {email}
//         </p>
//       </div>

//       <div>
//         <Label className="text-16-semibold mb-4" htmlFor="code">
//           Verification Code
//         </Label>
//         <InputOTP
//           maxLength={6}
//           value={code}
//           onChange={(value) => setCode(value)}
//           disabled={isVerifying}
//           className="justify-center"
//         >
//           <InputOTPGroup className="shad-otp my-3 gap-1 md:gap-2.5 ">
//             <InputOTPSlot className=" shad-otp-slot" index={0} />
//             <InputOTPSlot className="shad-otp-slot" index={1} />
//             <InputOTPSlot className="shad-otp-slot" index={2} />
//             <InputOTPSlot className="shad-otp-slot" index={3} />
//             <InputOTPSlot className="shad-otp-slot" index={4} />
//             <InputOTPSlot className="shad-otp-slot" index={5} />
//           </InputOTPGroup>
//         </InputOTP>
//       </div>
//       <Button type="submit" className="w-full font-bold" disabled={isVerifying}>
//         {isVerifying ? (
//           <LoaderIcon className="h-4 w-4 animate-spin" />
//         ) : (
//           "Verify Code"
//         )}
//       </Button>
//     </form>
//   );

//   return (
//     <div className="flex  h-screen max-h-screen">
//       <section className="remove-scrollbar relative flex-1 overflow-y-auto px-[5%] my-auto">
//         <div className="sub-container   max-w-[496px]">
//           <div className="space-y-6">
//             {isVerified ? renderVerification() : renderForm()}
//             <div className="text-center text-sm">
//               <span className="text-muted-foreground">
//                 Already have an account?{" "}
//               </span>
//               <Link
//                 href="/auth/signin"
//                 className="font-medium text-primary hover:underline"
//               >
//                 Sign In
//               </Link>
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

// export default SignUpPage;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import { toast } from "sonner";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, LoaderIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { MarqueeDemoVertical } from "@/components/MarqueeDemoVertical";

const SignUpPage = ({ searchParams }: { searchParams: any }) => {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    try {
      await signUp.create({
        emailAddress: email,
        password,
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1] || "",
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setIsVerified(true);
    } catch (error: any) {
      console.log(JSON.stringify(error, null, 2));
      handleSignUpError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !code) {
      toast.error("Please enter the verification code");
      return;
    }
    setIsVerifying(true);
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/auth/auth-callback");
      } else {
        toast.error("Invalid verification code. Please try again.");
      }
    } catch (error) {
      console.error("Error:", JSON.stringify(error, null, 2));
      toast.error("An error occurred. Please try again");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSignUpError = (error: any) => {
    const errorCode = error.errors[0]?.code;
    const errorMessages: { [key: string]: string } = {
      form_identifier_exists:
        "This email is already registered. Please sign in.",
      form_password_pwned:
        "The password is too common. Please choose a stronger password.",
      form_param_format_invalid:
        "Invalid email address. Please enter a valid email address.",
      form_password_length_too_short:
        "Password is too short. Please choose a longer password.",
    };
    toast.error(
      errorMessages[errorCode] || "An error occurred. Please try again"
    );
  };

  const renderForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-2">
        <motion.p
          className="text-18-bold my-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Create an account to start your journey to inner peace
        </motion.p>
        <motion.h1
          className="text-32-bold flex gap-2 mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi there{" "}
          <motion.div
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <Image
              src="/images/brain-hi.png"
              height={100}
              width={100}
              alt="MindSage logo"
              className="mb-1x h-10 w-fit"
            />
          </motion.div>
        </motion.h1>
        <motion.p
          className="text-16-regular text-dark-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Sign up to get started with MindSage.
        </motion.p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4 my-3 md:my-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            disabled={isLoading}
            onChange={(e) => setName(e.target.value)}
            className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
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
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Label htmlFor="password"> Password</Label>
          <span className="text-orange-500 text-sm ml-2  ">
            (Please Remember this password){" "}
          </span>
          <div className="relative">
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
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="h-4 w-4" />
              ) : (
                <EyeIcon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button type="submit" className="w-full h-12" disabled={isLoading}>
            {isLoading ? (
              <LoaderIcon className="h-4 w-4 animate-spin" />
            ) : (
              "Sign Up"
            )}
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );

  const renderVerification = () => (
    <motion.form
      onSubmit={handleVerify}
      className="border-slate-700 rounded-xl border-2 p-10 space-y-4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col justify-center items-center text-center gap-1"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Image
            src="/images/brain-hi.png"
            alt="Dashboard"
            width={45}
            height={45}
            quality={100}
            priority
          />
        </motion.div>
        <h1 className="text-2xl font-bold font-heading mt-2">
          Please check your email
        </h1>
        <p className="text-muted-foreground">
          We&apos;ve sent a verification code to {email}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Label className="text-16-semibold mb-4" htmlFor="code">
          Verification Code
        </Label>
        <InputOTP
          maxLength={6}
          value={code}
          onChange={(value) => setCode(value)}
          disabled={isVerifying}
          className="justify-center"
        >
          <InputOTPGroup className="shad-otp my-3 gap-1 md:gap-2.5">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <InputOTPSlot className="shad-otp-slot" index={index} />
              </motion.div>
            ))}
          </InputOTPGroup>
        </InputOTP>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Button
          type="submit"
          className="w-full font-bold h-12"
          disabled={isVerifying}
        >
          {isVerifying ? (
            <LoaderIcon className="h-4 w-4 animate-spin" />
          ) : (
            "Verify Code"
          )}
        </Button>
      </motion.div>
    </motion.form>
  );

  return (
    <div className="flex h-screen max-h-screen">
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="remove-scrollbar relative flex-1 overflow-y-auto px-[5%] my-auto"
      >
        <div className="sub-container max-w-[496px]">
          <div className="space-y-6">
            {isVerified ? renderVerification() : renderForm()}
            <motion.div
              className="text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <span className=" text-[15px] md:text-[18px] font-semibold">
                Already have an account?{" "}
              </span>
              <Link
                href="/auth/signin"
                className="font-medium text-primary text-[15px] md:text-[18px] hover:underline"
              >
                Sign In
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="mt-20 flex justify-between text-14-regular"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
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

export default SignUpPage;
