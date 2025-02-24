// @ts-nocheck


// "use client";
// import Image from "next/image";
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { useEffect, useState } from 'react';
// import { Progress } from "@/components/ui/progress"
// import { Card } from "@/components/ui/card";
// import { cn } from '@/lib/utils';
// import Markdown from 'react-markdown'
// import React from 'react'
// import { Button } from "@/components/ui/button";
// import { useRef } from "react";
// import { useRive, RiveState, useStateMachineInput, StateMachineInput, Layout, Fit, Alignment, RiveProps } from 'rive-react';
// import styles from '@/styles/styles.module.css'
// import "@/styles/LoginFormComponent.css";
// import Confetti from "@/components/Confetti";
// import toast, {Toaster} from "react-hot-toast";

// export default function Page({ params }: { params: { name: string } }) {

//     const name = params.name;

//     // const [score, setScore] = useState(0);
//     const [score, setScore] = useState(0);
//     const [count, setCount] = useState(0);
//     const [chosen, setChosen] = useState();
//     const [content, setContent] = useState();
//     const [question, setQuestion] = useState();
//     const [progress, setProgress] = useState(10);

//     const [inputLookMultiplier, setInputLookMultiplier] = useState(0);
//     const inputRef = useRef(null);

//     const [response, setResponse] = useState("");
//     const [output, setOutput] = useState("The response will appear here...");

//     const onSubmit = async () => {

//         // clear the output
//         setOutput("The response will appear here...");

//         toast.success("Based on the personality test we are creating a response to diagnose " + name);

//         // create a post request to the /api/chat endpoint
//         const response = await fetch("/api/chat", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 userPrompt: `hello I have obtained a score of ${30 - score}/${30} in ${name} related issue based on my performance I would like to get a cure for ${name} can you suggest me a path? The lesser the score the better the precautions and cure the person should take.`,
//             }),
//         });

//         // get the response from the server
//         const data = await response.json();
        
//         if (data.error) {
//             toast.error(data.error)
//             return
//         }

//         if (data.text == "") {
//             toast.error("No response from the server, please try again")
//         }
        
//         if (data.text.includes("Sorry I don't understand")) {
//             toast.error("Sorry I don't understand, please try again")
//             return
//         }

//         // set the response in the state
//         setResponse(data.text);
//     };

//     useEffect(() => {
//         // update the response character by character in the output
//         if (response.length === 0) return;

//         setOutput("");

//         for (let i = 0; i < response.length; i++) {
//             setTimeout(() => {
//                 setOutput((prev) => prev + response[i]);
//             }, i * 10);
//         }

//     }, [response]);

//     const STATE_MACHINE_NAME = 'Login Machine'

//     useEffect(() => {
//         if (inputRef?.current && !inputLookMultiplier) {
//             setInputLookMultiplier(inputRef.current.offsetWidth / 100);
//         }
//     }, [inputRef])

//     const { rive: riveInstance, RiveComponent }: RiveState = useRive({
//         src: '/bear.riv',
//         stateMachines: STATE_MACHINE_NAME,
//         autoplay: true,
//         layout: new Layout({
//             fit: Fit.Cover,
//             alignment: Alignment.Center
//         }),
//     });

//     // State Machine Inputs
//     const trigSuccessInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'trigSuccess');
//     const trigFailInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'trigFail');

//     // read the file from the file system with the `name`
//     const readFile = async (name: string) => {
//         const markdown = await import(`/data/${name}.d.ts`);
//         return markdown.data;
//     }

//     const onNext = () => {

//         if (!chosen) {
//             toast.error("Please select an option")
//             return
//         }

//         setProgress(progress + 10)

//         setCount(count + 1)

//         let currentScore = parseInt(chosen.split('+')[1])
//         setScore(score + currentScore)

//         if (question?.correctOption == chosen.split('+')[0]) {
//             trigSuccessInput.fire()
//         } else {
//             trigFailInput.fire()
//         }

//         setQuestion(content?.questions[count + 1])

//         setChosen("")

//         if (progress >= 100) {
//             onSubmit()
//             return
//         }

//     }

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const content = await readFile(name);
//                 setQuestion(content?.questions[0]);
//                 setContent(content);
//             } catch (error) {
//                 toast.error("Error reading file")
//             }
//         };
//         fetchData();
//     }, [name]);

//     return (
//         <div className="around">
//             <Toaster />
//             {progress < 110 ? (
//                 <>
//                     <div className="rive-container">
//                         <div className="rive-wrapper">
//                             <RiveComponent className="rive-container" />
//                         </div>
//                     </div>
//                     <div className='flex flex-col mt-5 items-center h-screen gap-6'>
//                         <Progress value={progress} className={cn("w-[60%]")} />
//                         <div className='w-[60%] flex justify-center'>
//                             <h1 className='text-2xl font-bold'>{question?.question}</h1>
//                         </div>

//                         <RadioGroup defaultValue="comfortable">
//                             <div className="flex items-center space-x-2">
//                                 <RadioGroupItem value={question?.options[0]} id="r1" onClick={(e) => {
//                                     setChosen(e.target.value)
//                                 }} />
//                                 <Label htmlFor="r1">{question?.options[0].split('+')[0]}</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <RadioGroupItem value={question?.options[1]} id="r2" onClick={(e) => {
//                                     setChosen(e.target.value)
//                                 }} />
//                                 <Label htmlFor="r2">{question?.options[1].split('+')[0]}</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <RadioGroupItem value={question?.options[2]} id="r3" onClick={(e) => {
//                                     setChosen(e.target.value)
//                                 }} />
//                                 <Label htmlFor="r3">{question?.options[2].split('+')[0]}</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <RadioGroupItem value={question?.options[3]} id="r4" onClick={(e) => {
//                                     setChosen(e.target.value)
//                                 }} />
//                                 <Label htmlFor="r4">{question?.options[3].split('+')[0]}</Label>
//                             </div>
//                         </RadioGroup>
//                         <Button onClick={() => {
//                             onNext()
//                         }
//                         }>{progress <= 110 ? "Next" : "Submit"}</Button>
//                     </div>
//                 </>
//             ) : (
//                 <div className='flex flex-col items-center h-screen gap-6'>
//                     <h1 className='text-2xl mt-2 font-bold'>You scored {score} out of {30}</h1>
//                     <Button onClick={() => {
//                         setProgress(10)
//                         setScore(0)
//                         setCount(0)
//                         setQuestion(content?.questions[0])
//                     }
//                     }>Restart</Button>
//                     {score > 20 && (
//                         <>
//                             <Confetti />
//                             <div className="flex items-center flex-col gap-5">
//                                 <h1 className='text-2xl font-bold'>Congratulations! You have obtained a <span className="font-black text-red-500">Gold medal</span></h1>
//                                 <Image src="/icons2/goldmedal.svg" width={100} height={100} />
//                             </div>
//                         </>
//                     )}
//                     {score > 10 && score <= 20 && (
//                         <>
//                             <Confetti />
//                             <div className="flex items-center flex-col gap-5">
//                                 <h1 className='text-2xl font-bold'>Congratulations! You have obtained a <span className="font-black text-red-500">Silver Medal</span></h1>
//                                 <Image src="/icons2/silvermedal.svg" width={100} height={100} />
//                             </div>
//                         </>
//                     )}
//                     {score <= 10 && (
//                         <>
//                             <Confetti />
//                             <div className="flex items-center flex-col gap-5">
//                                 <h1 className='text-2xl font-bold'>Congratulations! You have obtained a <span className="font-black text-red-500">Bronze Medal</span></h1>
//                                 <Image src="/icons2/bronzemedal.svg" width={100} height={100} />
//                             </div>
//                         </>
//                     )}
//                     <h1 className='text-1xl font-bold mt-1'>Based on the personality test we are creating a response to diagnose <span className="text-red-500">{name}</span></h1>
//                     <Card className={cn("p-5 whitespace-normal min-w-[320px] sm:w-[500px] md:min-w-[600px]")}>
//                         <div className={styles.textwrapper}>
//                             <Markdown className={cn("w-full h-full ")}>{`${output}`}</Markdown>
//                         </div>
//                     </Card>
//                 </div>
//             )}
//         </div>
//     )
// }



"use client"



import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from 'rive-react';
import Markdown from 'react-markdown';
import Confetti from "@/components/Confetti";
import toast, { Toaster } from "react-hot-toast";

const STATE_MACHINE_NAME = 'Login Machine';

export default function MentalHealthAssessment({ params }: { params: { name: string } }) {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [chosen, setChosen] = useState('');
  const [content, setContent] = useState(null);
  const [question, setQuestion] = useState(null);
  const [progress, setProgress] = useState(10);
  const [response, setResponse] = useState("");
  const [output, setOutput] = useState("The response will appear here...");

  const router = useRouter();
  const inputRef = useRef(null);

  const { rive: riveInstance, RiveComponent } = useRive({
    src: '/bear.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  const trigSuccessInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'trigSuccess');
  const trigFailInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'trigFail');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const content = await import(`/data/${params.name}.d.ts`);
        setQuestion(content.data.questions[0]);
        setContent(content.data);
      } catch (error) {
        toast.error("Error loading assessment questions");
      }
    };
    fetchData();
  }, [params.name]);

  useEffect(() => {
    if (response.length === 0) return;
    setOutput("");
    for (let i = 0; i < response.length; i++) {
      setTimeout(() => setOutput((prev) => prev + response[i]), i * 10);
    }
  }, [response]);

  const onSubmit = async () => {
    setOutput("Generating response...");
    toast.success(`Creating a diagnosis for ${params.name}`);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userPrompt: `I've scored ${30 - score}/30 on a ${params.name} assessment. Can you suggest a treatment path? Lower scores indicate a need for more precautions and intensive treatment.`,
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      if (data.text === "") throw new Error("No response from the server");
      if (data.text.includes("Sorry I don't understand")) throw new Error("AI couldn't process the request");

      setResponse(data.text);
    } catch (error) {
      toast.error(error.message || "Failed to get a response. Please try again.");
    }
  };

  const onNext = () => {
    if (!chosen) {
      toast.error("Please select an option");
      return;
    }

    setProgress(progress + 10);
    setCount(count + 1);
    setScore(score + parseInt(chosen.split('+')[1]));

    if (question?.correctOption === chosen.split('+')[0]) {
      trigSuccessInput.fire();
    } else {
      trigFailInput.fire();
    }

    setQuestion(content?.questions[count + 1]);
    setChosen("");

    if (progress >= 100) {
      onSubmit();
    }
  };

  const renderMedal = () => {
    let medal = '';
    if (score > 20) medal = 'Gold';
    else if (score > 10) medal = 'Silver';
    else medal = 'Bronze';

    return (
      <>
        <Confetti />
        <div className="flex items-center flex-col gap-5">
          <h1 className='text-2xl font-bold'>Congratulations! You have earned a <span className="font-black text-red-500">{medal} Medal</span></h1>
          <Image src={`/icons2/${medal.toLowerCase()}medal.svg`} width={100} height={100} alt={`${medal} Medal`} />
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen  p-6">
      <Toaster />
      {progress < 110 ? (
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 w-full h-64">
            <RiveComponent />
          </div>
          <Progress value={progress} className="mb-6" />
          <h1 className='text-2xl font-bold mb-6 text-center'>{question?.question}</h1>
          <RadioGroup value={chosen} onValueChange={setChosen} className="space-y-4">
            {question?.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-800 bg-opacity-50 p-3 rounded-lg hover:bg-opacity-70 transition-all">
                <RadioGroupItem value={option} id={`r${index}`} className="border-white" />
                <Label htmlFor={`r${index}`} className="flex-grow cursor-pointer">{option.split('+')[0]}</Label>
              </div>
            ))}
          </RadioGroup>
          <Button onClick={onNext} className="mt-8 w-full  transition-colors">
            {progress <= 100 ? "Next Question" : "Submit Assessment"}
          </Button>
        </div>
      ) : (
        <div className='flex flex-col items-center gap-6 max-w-3xl mx-auto'>
          <h1 className='text-3xl font-bold mt-8'>Assessment Complete</h1>
          <p className='text-xl'>Your score: {score} out of 30</p>
          {renderMedal()}
          <Button onClick={() => {
            setProgress(10);
            setScore(0);
            setCount(0);
            setQuestion(content?.questions[0]);
          }} className="bg-green-600 hover:bg-green-700 transition-colors">
            Retake Assessment
          </Button>
          <h2 className='text-xl font-semibold mt-6'>Your {params.name} Diagnosis</h2>
          <Card className="p-6 w-full bg-gray-800 bg-opacity-50 rounded-xl shadow-lg">
            <div className="prose prose-invert max-w-none">
              <Markdown>{output}</Markdown>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}