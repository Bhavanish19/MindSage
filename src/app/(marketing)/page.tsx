/* eslint-disable react/no-unescaped-entities */
import { AnimationContainer, Icons, MaxWidthWrapper } from "@/components";
import { Button, buttonVariants } from "@/components/ui/button";
import { FEATURES, PLANS } from "@/constants";

import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import Image from "next/image";

const HomePage = () => {
  const baseDelay = 0.2;

  return (
    <>
      {/* hero */}
      <MaxWidthWrapper className="flex flex-col items-center w-full relative">
        <div className="flex flex-col items-center justify-center w-full py-20 text-center">
          <div className="flex items-center justify-center lg:gap-16 w-full absolute top-[15%] left-1/2 -translate-x-1/2 -z-10">
            <div className="w-52 h-52 rounded-full bg-yellow-500 blur-[10rem] opacity-70 -z-10"></div>
            <div className="hidden lg:w-52 h-52 rounded-full bg-amber-500 blur-[10rem] opacity-70 -z-10"></div>
          </div>
          <h1 className="text-foreground py-6 text-[2.6rem] sm:text-6xl md:text-7xl font-semibold md:font-bold !leading-snug tracking-normal text-balance w-full">
            Transform Your Journey to <br />{" "}
            <span className="bg-gradient-to-r from-primary to-amber-500 text-transparent bg-clip-text">
              Mental Wellbeing
            </span>{" "}
            Today
          </h1>
          <p className="text-muted-foreground leading-[30px] font-semibold dark:text-yellow-200 text-[1.1rem] md:text-[1.3rem] max-w-[38rem] py-2">
            Discover expert guidance, habit-building activities, and real-time
            AI support designed to nurture your mental well-being.
          </p>
          <div className="flex flex-row md:flex-row items-center justify-center gap-4 mt-8 w-full">
            <Link href="/dashboard" className={buttonVariants()}>
              Start for free
              <ArrowRightIcon className="w-4 h-4 ml-1.5" />
            </Link>
            {/* <Link
              href="#"
              className={buttonVariants({ variant: "secondaryOutline" })}
            >
              <Icons.store className="w-4 h-4 mr-1.5" />
              Download the app
            </Link> */}
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="app-container relative lg:pt-[140px] md:pt-[120px] pt-[110px] pb-[60px]">
        <div className="flex lg:flex-row flex-col items-center justify-center">
          <div
            className="lg:w-[60%] w-full mt-10 lg:mr-[65px] mr-[0] flex flex-col lg:items-start items-center 
          lg:text-left text-center"
          >
            <Image
              src="/images/chat.png"
              height={350}
              width={350}
              alt=" Small-logo"
            />
            <p className="lg:leading-[64px] leading-[80px] mb-[32px] font-[500] lg:text-[56px] text-[32px] hero-text">
              Discover Peace Within <br />
              <span className="lg:leading-[89px] lg:text-[78px] text-[40px] font-[700] bg-gradient-to-r from-primary to-amber-500 text-transparent bg-clip-text">
                Mental Wellness
              </span>{" "}
              <br /> Begins With You
            </p>
            <div className="space-y-6">
              <p className="lg:text-[24px] text-[16px] lg:leading-[34px] text-muted-foreground">
                Your journey to inner balance starts here. Let MindSage guide
                you through personalized meditation, therapy, and mindfulness
                practices tailored just for you.
              </p>
            </div>
          </div>

          <div className="lg:w-[40%] w-full lg:mt-0 mt-[24px]">
            <Image
              src="/images/home-hero.png"
              height={580}
              width={580}
              alt="MindSage logo"
            />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* WHY US  */}
      <MaxWidthWrapper className="   py-8 md:py-[60px]">
        <div className="lg:mx-[10px] flex lg:flex-row flex-col items-center justify-between">
          <article className="lg:w-[50%] w-full lg:mr-[120px] mr-[0] lg:text-left text-center">
            <h3 className="lg:mb-[22px] mb-[20px] text-primary  font-semibold md:font-bold  lg:text-[40px] text-[30px] lg:text-left text-center">
              Who we are
            </h3>
            <p className="lg:mb-[22px]   text-[1.1rem] md:text-[1.2rem] mb-[20px]">
              We are a team of mental health professionals, wellness experts,
              and technology innovators working together to make mental
              healthcare more accessible, personalized, and effective through
              digital solutions.
            </p>
            <p className="lg:mb-[22px] text-[1.1rem] md:text-[1.2rem] mb-[20px]">
              At MindSage, we combine evidence-based therapeutic approaches with
              cutting-edge technology to create a comprehensive platform where
              individuals can access support, resources, and guidance for their
              mental wellness journey.
            </p>
            <p className="lg:mb-[22px] text-[1.1rem] md:text-[1.2rem] mb-[20px]">
              We believe that mental health support should be accessible to
              everyone, everywhere. Through our platform, we offer a range of
              services from AI-guided support to professional therapy sessions,
              making mental wellness achievable for all.
            </p>
          </article>
          <article className="lg:w-[50%] w-full bg-[#F5E8D7] dark:bg-black200 rounded-[32px] lg:p-[24px] p-[20px] transition-colors duration-300">
            <div className="rounded-[16px] p-[20px] border border-[#D3D7D7] dark:border-slate-700 bg-[#fff] dark:bg-slate-800/50 mb-[24px] lg:text-left text-center backdrop-blur-sm transition-all duration-300 hover:dark:bg-slate-800/80">
              <p className="sub-title_01 font-bold dark:text-slate-200">
                Our Mission
              </p>
              <p className="mt-[10px] md:text-[1.4rem] text-balance text-slate-900 dark:text-slate-300">
                To empower individuals worldwide through accessible mental
                health support, combining human expertise with innovative
                technology for personalized wellness journeys.
              </p>
            </div>
            <div className="rounded-[16px] p-[20px] border border-[#D3D7D7] dark:border-slate-700 bg-[#fff] dark:bg-slate-800/50 lg:text-left text-center backdrop-blur-sm transition-all duration-300 hover:dark:bg-slate-800/80">
              <p className="sub-title_01 font-bold dark:text-slate-200">
                Our Vision
              </p>
              <p className="mt-[10px]  md:text-[1.4rem]  text-balance text-slate-900 dark:text-slate-300">
                To create a world where mental wellness is accessible,
                understood, and prioritized, enabling everyone to live
                healthier, more fulfilling lives.
              </p>
            </div>
          </article>
        </div>
      </MaxWidthWrapper>

      {/* features */}
      <MaxWidthWrapper className=" py-3 md:py-14">
        <div className="flex flex-col text-start md:text-center justify-center w-full py-8 max-w-lg mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold font-heading text-foreground mt-6">
            Features that will <span className="text-gradient">amaze</span> you
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            MindSage is packed with features that will help you get the right
            medications for your symptoms
          </p>
        </div>
        <div className="py-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-8 md:gap-x-8 w-full">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col bg-white dark:bg-black200 border-primary border-[1px]  p-5 rounded-[20px] items-start"
            >
              <feature.icon className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-medium font-heading mt-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mt-1 text-sm md:text-base">
                {feature.info}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* pricing TODO */}
      {/* <MaxWidthWrapper className="py-10">
        <div className="flex flex-col text-start md:text-center justify-center w-full py-8 max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold font-heading text-foreground mt-6">
            Choose a <span className="text-gradient">plan</span> that works for
            you
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Get started with our free plan or upgrade to a premium plan for
            additional features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-6 max-w-3xl px-0 lg:px-8 mx-auto w-full">
          {PLANS.map((plan, index) => (
            <AnimationContainer
              key={plan.name}
              delay={baseDelay + index / 5}
              className="flex flex-col w-full h-full"
            >
              <Card
                className={cn(
                  "w-full h-full flex flex-col rounded-xl border-2 shadow-none",
                  plan.name === "Pro" ? "border-primary" : "border-border"
                )}
              >
                <CardHeader>
                  <CardTitle className="font-heading">{plan.name}</CardTitle>
                  <CardDescription>{plan.info}</CardDescription>
                  <h5 className="text-3xl md:text-4xl font-semibold font-heading pt-2">
                    ${plan.price}
                    <span className="text-sm text-muted-foreground font-normal">
                      {plan.name === "Pro" ? "(one time)" : ""}
                    </span>
                  </h5>
                </CardHeader>
                <CardContent className="w-full">
                  <ul className="flex flex-col items-start gap-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckIcon
                          className={cn(
                            "w-5 h-5",
                            plan.name === "Pro"
                              ? "text-primary"
                              : "text-foreground"
                          )}
                        />
                        <TooltipProvider>
                          <Tooltip delayDuration={0}>
                            <TooltipTrigger asChild>
                              <p
                                className={cn(
                                  "text-sm text-muted-foreground",
                                  feature.tooltip &&
                                    "border-b border-dotted border-border cursor-pointer"
                                )}
                              >
                                {feature.text}
                              </p>
                            </TooltipTrigger>
                            {feature.tooltip && (
                              <TooltipContent>{feature.tooltip}</TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto w-full">
                  <Button
                    asChild
                    variant={plan.name === "Pro" ? "default" : "secondary"}
                  >
                    <Link
                      href={plan.btn.href}
                      className="flex items-center w-full group"
                    >
                      {plan.btn.text}
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper> */}

      <MaxWidthWrapper className="py-10 md:py-30">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto w-full py-8 gap-8 lg:gap-12">
          <div className="flex flex-col-reverse md:flex-row md:order-1 w-full relative">
            <Image
              src="/files/doctor.png"
              alt="Mental health support illustration"
              width={1000}
              height={1200}
              quality={100}
              priority
              className="mx-auto lg:mr-auto h-[420px] max-w-full sm:max-w-sm"
            />
            <div className="absolute -z-10 inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl blur-3xl" />
          </div>

          <div className="flex flex-col justify-center w-full order-2 md:order-2 space-y-6 max-w-xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-heading text-foreground leading-tight">
              Begin Your Journey to
              <span className="bg-gradient-to-r from-primary to-amber-500 text-transparent bg-clip-text">
                {" "}
                Inner Peace
              </span>
            </h2>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-primary">
                  Feeling Overwhelmed?
                </h3>
                <p className="text-muted-foreground text-base lg:text-lg">
                  Transform your mental wellness with MindSage's comprehensive
                  support system. From AI-guided meditation to professional
                  therapy sessions, we're here to guide you every step of the
                  way.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-medium text-primary">
                  Your Wellness Matters
                </h3>
                <p className="text-muted-foreground text-base lg:text-lg">
                  Experience personalized care that adapts to your needs.
                  Whether it's daily mindfulness exercises, therapy sessions, or
                  community support, MindSage provides the tools for lasting
                  mental wellness.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/dashboard"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full sm:w-auto text-base",
                })}
              >
                Start Your Journey
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="hero    ">
        <div className="relative h-screen">
          <video
            playsInline
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 h-screen w-full object-cover z-[-1]"
          >
            <source src="/assets/videos/mental.mp4" type="video/mp4" />
          </video>

          <div className="hero-content h-full flex flex-col justify-between p-8">
            {/* <Header /> */}
            <div className="hero-wrapper h-1/6 flex flex-col justify-center items-center gap-14 md:h-full md:justify-evenly">
              <div className="hero-cta flex flex-row justify-center gap-4">
                <p className=" text-slate-900 leading-9  md:text-gray-200 font-bold md:text-[2.6rem] text-[1.3rem]">
                  Your peace is more important than your productivity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
