// "use client";

// import { createMessages } from "@/actions";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib";
// import ai from "@/lib/google";
// import { generatePrompt } from "@/utils";
// import { Medication, Message, Symptom, User } from "@prisma/client";
// import { useMutation } from "@tanstack/react-query";
// import { LoaderIcon, SendIcon, TriangleAlertIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import { toast } from "sonner";

// interface Props {
//   isPro: boolean;
//   user: User;
//   symptoms: Symptom[];
//   medications: Medication[];
//   messages: Message[];
// }

// const ChatBox = ({ isPro, user, symptoms, medications, messages }: Props) => {
//   console.log("isPro", isPro);

//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const [input, setInput] = useState<string>("");
//   const [error, setError] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const [msgs, setMsgs] = useState<Message[]>(messages || []);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [msgs]);

//   const { mutate: createUserMessage } = useMutation({
//     mutationKey: ["create-user-messages"],
//     mutationFn: async (message: string) =>
//       createMessages({ role: "user", message: message }),
//   });

//   const { mutate: createBotMessage } = useMutation({
//     mutationKey: ["create-bot-messages"],
//     mutationFn: async (message: string) =>
//       createMessages({ role: "model", message: message }),
//   });

//   const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     scrollToBottom();

//     // TODO !
//     if (isPro === false && messages.length >= 50) {
//       setError("Message limit reached. Please upgrade to pro.");
//       toast.error("Message limit reached. Please upgrade to pro.");
//       return;
//     }

//     if (!input.trim()) return;

//     const newMessages = [...msgs, { role: "user", content: input }];
//     // @ts-ignore
//     setMsgs(newMessages);
//     setInput("");
//     setIsLoading(true);

//     try {

      
//       const model = ai.getGenerativeModel({
//         // model: "gemini-1.5-flash"
//         model: "gemini-1.5-pro-exp-0801",
//         // const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
//       });

//       const promptText = generatePrompt({ symptoms, medications, user });

//       const chat = model.startChat({
//         history: [
//           {
//             role: "user",
//             parts: [{ text: promptText }],
//           },
//         ],
//         ...newMessages.map((message) => ({
//           role: message.role,
//           parts: [{ text: message.content }],
//         })),
//         generationConfig: {
//           maxOutputTokens: 600,
//           temperature: 0,
//         },
//         systemInstruction: {
//           role: "model",
//           parts: [
//             {
//               text: promptText,
//             },
//           ],
//         },
//       });

//       const result = await chat.sendMessage(input);
//       const response = result.response;
//       const botMessageContent = response.text();

//       const botMessage = { role: "model", content: botMessageContent };

//       createUserMessage(input);
//       createBotMessage(botMessage.content);

//       // @ts-ignore
//       setMsgs((prev) => [...prev, botMessage]);
//     } catch (error) {
//       setError("Error generating response");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (messages) {
//       setMsgs(messages);
//     }
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-full w-full relative sm:pl-4">
//       <div className="flex flex-col  rounded-xl  h-full w-full">
//         <div className="w-full h-full overflow-y-scroll space-y-4 md:p-4 pb-12 flex flex-col flex-1 scrollbar-hide rounded-xl">
//           {!isLoading && !error && msgs?.length === 0 && (
//             <div className="flex flex-col items-center justify-center text-center w-full py-8 h-full">
//               <Image
//                 src="/files/gi.webp"
//                 alt="mockup"
//                 width={500}
//                 height={500}
//                 quality={100}
//                 priority
//                 className="mx-auto lg:mr-auto   max-w-full sm:max-w-sm"
//               />
//               <h2 className="text-[20px] font-bold "> Hello Frnd ! </h2>
//               <p className="text-sm text-muted-foreground font-medium mt-2">
//                 Start a conversation with your personal mental wellness
//                 assistant
//               </p>
//             </div>
//           )}
//           {msgs?.map((message, index) => (
//             <div
//               key={index}
//               className={cn(
//                 "flex max-w-lg",
//                 message.role === "user"
//                   ? "ml-auto max-w-72 sm:max-w-lg"
//                   : "mr-auto"
//               )}
//             >
//               {message.role === "user" ? (
//                 <div className="flex items-end">
//                   <p className="bg-primary text-white text-sm dark:bg-orange-500 font-semibold  leading-[30px]     md:text-[18px] px-3 py-1 rounded-lg">
//                     {message.content}
//                   </p>
//                 </div>
//               ) : (
//                 <div className="flex items-start">
//                   <div className="dark:bg-black200 bg-neutral-100 text-foreground font-semibold leading-[30px]   md:text-[18px] text-sm px-4 py-2 rounded-lg">
//                     <ReactMarkdown
//                       remarkPlugins={[remarkGfm]}
//                       className="whitespace-pre-line"
//                     >
//                       {message.content}
//                     </ReactMarkdown>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//           {isLoading && (
//             <div className="flex flex-col justify-center items-center text-center p-4">
//               <LoaderIcon className="w-5 h-5 animate-spin" />
//               <p className="text-sm text-muted-foreground font-medium">
//                 Assistant Bro is thinking...
//               </p>
//             </div>
//           )}
//           {!isLoading && error && (
//             <div className="flex flex-col items-center justify-center w-full py-8 h-full">
//               <p className="text-sm text-red-500 bg-red-50 px-4 py-1.5 rounded-md mx-auto font-medium flex items-center">
//                 <TriangleAlertIcon className="w-4 h-4 mr-2" />
//                 {error}
//               </p>
//               {!isPro && (
//                 <Button asChild size="sm" className="mt-4">
//                   <Link href="/dashboard/account/billing">Upgrade to Pro</Link>
//                 </Button>
//               )}
//             </div>
//           )}
//           <div ref={messagesEndRef} className="w-full h-px" />
//         </div>

//         <div className="w-full rounded-xl fixed sm:sticky bottom-0 inset-x-0 px-2 py-2 bg-background dark:bg-black200">
//           <form
//             onSubmit={handleSendMessage}
//             className="flex flex-row items-center   gap-x-4 rounded-xl py-3 md:px-3"
//           >
//             <Input
//               type="text"
//               value={input}
//               disabled={isLoading}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask about your mental health..."
//               className="flex-1 bg-slate-200 dark:bg-black100 min-w-0 py-5 text-[16px]  focus-visible:ring-0 focus-visible:ring-transparent border"
//             />
//             <div className="flex  cursor-pointer items-center justify-center w-10">
//               <Button
//                 size="icon"
//                 type="submit"
//                 disabled={isLoading || !input.trim()}
//                 className="flex-shrink-0"
//               >
//                 {isLoading ? (
//                   <LoaderIcon className="w-5 h-5 animate-spin" />
//                 ) : (
//                   <SendIcon className="w-5 h-5" />
//                 )}
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBox;

// // const handleSendMessage = async (e: FormEvent) => {
// //     e.preventDefault();

// //     if (!input.trim()) return;

// //     const newMessages = [...msgs];
// //     setMsgs(newMessages);
// //     setInput("");
// //     setIsLoading(true);

// //     console.log("starting")

// //     try {
// //         const model = ai.getGenerativeModel({
// //             model: "gemini-1.5-flash"
// //         });

// //         const prompt = newMessages.map(message => `${message.role === "USER" ? "User" : "Assistant"}: ${message.content}`).join("\n");
// //         const result = await model.generateContent(prompt);
// //         const res = await result.response;

// //         const botMessage = { role: "MODEL", content: res.text() };

// //         createUserMessage(input);
// //         console.log("created user message")
// //         createBotMessage(botMessage.content);
// //         console.log("created bot message")

// //         setMsgs([...newMessages!, { role: "MODEL", content: res.text() }]);
// //     } catch (error) {
// //         console.log("Error generating response:", error);
// //     } finally {
// //         setIsLoading(false);
// //     }
// // };



"use client";

import { createMessages } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generatePrompt } from "@/utils";
import { Medication, Message, Symptom, User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { LoaderIcon, SendIcon, TriangleAlertIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

interface Props {
  isPro: boolean;
  user: User;
  symptoms: Symptom[];
  medications: Medication[];
  messages: Message[];
}

const ChatBox = ({ isPro, user, symptoms, medications, messages }: Props) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [msgs, setMsgs] = useState<Message[]>(messages || []);

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "AIzaSyCIusz1cw3yD8l8LVLcgsSXF_cBI-ueDdQ");
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [msgs]);

  const { mutate: createUserMessage } = useMutation({
    mutationKey: ["create-user-messages"],
    mutationFn: async (message: string) =>
      createMessages({ role: "user", message: message }),
  });

  const { mutate: createBotMessage } = useMutation({
    mutationKey: ["create-bot-messages"],
    mutationFn: async (message: string) =>
      createMessages({ role: "model", message: message }),
  });

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    scrollToBottom();

    if (isPro === false && messages.length >= 50) {
      setError("Message limit reached. Please upgrade to pro.");
      toast.error("Message limit reached. Please upgrade to pro.");
      return;
    }

    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMsgs(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Create chat context with history
      const chat = model.startChat({
        history: msgs.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
        generationConfig: {
          maxOutputTokens: 800,
          temperature: 0.7,
          topP: 0.8,
          topK: 40,
        },
      });

      // Generate prompt with user context
      const basePrompt = generatePrompt({ symptoms, medications, user });
      
      // Send message and get response
      const result = await chat.sendMessage(`${basePrompt}\n\nUser: ${input}`);
      const botResponse = result.response.text();

      // Create bot message
      const botMessage = { role: "model", content: botResponse };

      // Save messages
      createUserMessage(input);
      createBotMessage(botResponse);

      setMsgs(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setError("Error generating response. Please try again.");
      toast.error("Failed to get response from assistant");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full relative sm:pl-4">
      <div className="flex flex-col rounded-xl h-full w-full">
        <div className="w-full h-full overflow-y-scroll space-y-4 md:p-4 pb-12 flex flex-col flex-1 scrollbar-hide rounded-xl">
          {!isLoading && !error && msgs?.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center w-full py-8 h-full">
              <Image
                src="/files/gi.webp"
                alt="mockup"
                width={500}
                height={500}
                quality={100}
                priority
                className="mx-auto lg:mr-auto max-w-full sm:max-w-sm"
              />
              <h2 className="text-[20px] font-bold">Hello Friend!</h2>
              <p className="text-sm text-muted-foreground font-medium mt-2">
                Start a conversation with your personal mental wellness assistant
              </p>
            </div>
          )}

          {msgs?.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex max-w-lg",
                message.role === "user" ? "ml-auto max-w-72 sm:max-w-lg" : "mr-auto"
              )}
            >
              {message.role === "user" ? (
                <div className="flex items-end">
                  <p className="bg-primary text-white text-sm dark:bg-orange-500 font-semibold leading-[30px] md:text-[18px] px-3 py-1 rounded-lg">
                    {message.content}
                  </p>
                </div>
              ) : (
                <div className="flex items-start">
                  <div className="dark:bg-black200 bg-neutral-100 text-foreground font-semibold leading-[30px] md:text-[18px] text-sm px-4 py-2 rounded-lg">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} className="whitespace-pre-line">
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex flex-col justify-center items-center text-center p-4">
              <LoaderIcon className="w-5 h-5 animate-spin" />
              <p className="text-sm text-muted-foreground font-medium">
                Assistant is thinking...
              </p>
            </div>
          )}

          {!isLoading && error && (
            <div className="flex flex-col items-center justify-center w-full py-8 h-full">
              <p className="text-sm text-red-500 bg-red-50 px-4 py-1.5 rounded-md mx-auto font-medium flex items-center">
                <TriangleAlertIcon className="w-4 h-4 mr-2" />
                {error}
              </p>
              {!isPro && (
                <Button asChild size="sm" className="mt-4">
                  <Link href="/dashboard/account/billing">Upgrade to Pro</Link>
                </Button>
              )}
            </div>
          )}

          <div ref={messagesEndRef} className="w-full h-px" />
        </div>

        <div className="w-full rounded-xl fixed sm:sticky bottom-0 inset-x-0 px-2 py-2 bg-background dark:bg-black200">
          <form
            onSubmit={handleSendMessage}
            className="flex flex-row items-center gap-x-4 rounded-xl py-3 md:px-3"
          >
            <Input
              type="text"
              value={input}
              disabled={isLoading}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your mental health..."
              className="flex-1 bg-slate-200 dark:bg-black100 min-w-0 py-5 text-[16px] focus-visible:ring-0 focus-visible:ring-transparent border"
            />
            <div className="flex cursor-pointer items-center justify-center w-10">
              <Button
                size="icon"
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex-shrink-0"
              >
                {isLoading ? (
                  <LoaderIcon className="w-5 h-5 animate-spin" />
                ) : (
                  <SendIcon className="w-5 h-5" />
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;