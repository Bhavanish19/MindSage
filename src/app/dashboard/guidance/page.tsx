// @ts-nocheck

"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast, Toaster } from "react-hot-toast";

const mentalHealthIssues = [
  { name: "Anger", icon: "/icons2/anger.png" },
  { name: "Anxiety", icon: "/icons2/anxiety.png" },
  { name: "Bipolar", icon: "/icons2/bipolar.png" },
  { name: "Depression", icon: "/icons2/depression.png" },
  { name: "WeightLoss", icon: "/icons2/weight-loss.png" },
  { name: "Loneliness", icon: "/icons2/loneliness.png" },
  { name: "Fear", icon: "/icons2/fear.png" },
  { name: "Insomnia", icon: "/icons2/insomnia.png" },
  { name: "HearingVoices", icon: "/icons2/listen.png" },
  { name: "PanicAttack", icon: "/icons2/panic-attack.png" },
  { name: "Paranoia", icon: "/icons2/paranoia.png" },
  { name: "Phobia", icon: "/icons2/phobia.png" },
  { name: "Psychosis", icon: "/icons2/psychosis.png" },
  { name: "Schizophrenia", icon: "/icons2/schizophrenia.png" },
  { name: "SelfConfidence", icon: "/icons2/self-confidence.png" },
  { name: "SelfHarm", icon: "/icons2/self-harm.png" },
];

export default function Career() {
  const [selectedIssue, setSelectedIssue] = React.useState(
    "Please select an issue"
  );
  const [issueDescription, setIssueDescription] = React.useState("");
  const router = useRouter();

  const handleClick = async (name: string) => {
    toast.success(`You selected ${name}`);
    setSelectedIssue(name);

    try {
      const { data } = await import(`/data/career.d.ts`);
      setIssueDescription(data[name] || "No description available.");
    } catch (error) {
      console.error("Error loading issue description:", error);
      setIssueDescription("Failed to load description.");
    }
  };

  const handleGetGuidance = () => {
    if (selectedIssue === "Please select an issue") {
      toast.error("Please select an issue");
      return;
    }
    router.push(`/dashboard/guidance/GetGuidance/${selectedIssue}`);
  };

  const handleEvaluate = () => {
    if (selectedIssue === "Please select an issue") {
      toast.error("Please select an issue");
      return;
    }
    router.push(`/dashboard/Courses/${selectedIssue}`);
  };

  return (
    <main className=" mx-auto p-2 md:p-3  mt-2">
      <Toaster />
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="w-full dark:bg-black200 md:w-3/4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Select an Issue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-6 2xl:grid-cols-4 gap-4">
              {mentalHealthIssues.map((issue) => (
                <button
                  key={issue.name}
                  onClick={() => handleClick(issue.name)}
                  className={` rounded-lg transition-all    hover:scale-105 
                      focus:ring-primary
                     
                     border-2 border-border  w-full py-2 text-center  focus:outline-none ring-0 focus:ring-0 outline-none disabled:opacity-50   transform duration-200 ease-in-out active:scale-95 h-full  border-b-5 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6   
                     ${
                       selectedIssue === issue.name
                         ? "ring-2 ring-primary scale-110"
                         : ""
                     }`}
                >
                  <Image
                    src={issue.icon}
                    alt={issue.name}
                    width={90}
                    height={90}
                    className="mx-auto"
                  />
                  <p className="mt-2 font-semibold  text-center">
                    {issue.name}
                  </p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="w-full dark:bg-black200 md:w-1/4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {selectedIssue}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base">{issueDescription}</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button onClick={handleGetGuidance} className="w-full">
              Get Guidance
            </Button>
            <Button onClick={handleEvaluate} className="w-full">
              Evaluate
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
