"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn, StepTwoSchema, StepTwoSchemaType } from "@/lib";
import { RadioGroup } from "@headlessui/react";
import { ArrowRightIcon, LoaderIcon } from "lucide-react";

interface Props {
  nextStep: () => void;
}

const StepTwo = ({ nextStep }: Props) => {
  const form = useForm<StepTwoSchemaType>({
    resolver: zodResolver(StepTwoSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["step-two"],
    mutationFn: async ({ name, intensity, frequency }: StepTwoSchemaType) => {
      const payload: StepTwoSchemaType = {
        name,
        intensity,
        frequency,
      };

      const { data } = await axios.post("/api/onboarding/step-two", payload);
      return data;
    },
    onSuccess: () => {
      toast.success("Data saved!");
      nextStep();
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error("Something went wrong");
    },
  });

  const onSubmit = (data: StepTwoSchemaType) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-6 w-full h-full relative"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What symptom are you experiencing?</FormLabel>
                <RadioGroup
                  value={field.value}
                  onChange={field.onChange}
                  className="grid grid-cols-2 md:grid-cols-5 gap-2"
                >
                  {
                  
                  [
                    "ANXIETY", 
                    "STRESS", 
                    "DEPRESSION", 
                    "FATIGUE", 
                    "INSOMNIA", 
                    "IRRITABILITY", 
                    "MOOD_SWINGS", 
                    "LACK_OF_MOTIVATION", 
                    "DIFFICULTY_CONCENTRATING", 
                    "SOCIAL_WITHDRAWAL", 
                    "RESTLESSNESS"
                  ]
                  
                  .map((symptom) => (
                    <RadioGroup.Option
                      key={symptom}
                      value={symptom}
                      id={symptom}
                      className={({ active, checked }) =>
                        cn(
                          "border-2  rounded-lg w-full py-1 text-center   border-border outline-none disabled:opacity-50 transition transform duration-200 ease-in-out active:scale-95 h-full border-b-4 hover:bg-black/5 cursor-pointer active:border-amber-500 active:border-b-2 flex flex-col items-center justify-between p-3 focus:outline-none ring-0 focus:ring-0  md:font-semibold font-medium",
                          (active || checked) && "border-primary"
                        )
                      }
                    >
                      <RadioGroup.Label
                        as="span"
                        htmlFor={symptom}
                        className="text-sm !capitalize"
                      >
                        {symptom.replace("_", " ").toLowerCase()}
                      </RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="frequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often do you experience it?</FormLabel>
                <RadioGroup
                  value={field.value}
                  onChange={field.onChange}
                  className="grid grid-cols-2 md:grid-cols-4 gap-2"
                >
                  {["DAILY", "WEEKLY", "MONTHLY", "RARELY"].map((freq) => (
                    <RadioGroup.Option
                      key={freq}
                      value={freq}
                      id={freq}
                      className={({ active, checked }) =>
                        cn(
                          " border-2  rounded-lg w-full py-1 text-center   border-border outline-none disabled:opacity-50 transition transform duration-200 ease-in-out active:scale-95 h-full border-b-4 hover:bg-black/5 cursor-pointer active:border-amber-500 active:border-b-2 flex flex-col items-center justify-between p-3 focus:outline-none ring-0 focus:ring-0  md:font-semibold font-medium",
                          (active || checked) && "border-primary"
                        )
                      }
                    >
                      <RadioGroup.Label
                        as="span"
                        htmlFor={freq}
                        className="text-sm !capitalize"
                      >
                        {freq.toLowerCase()}
                      </RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="intensity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How intense is it?</FormLabel>
                <RadioGroup
                  value={field.value?.toString()}
                  onChange={(value) => field.onChange(Number(value))}
                  className="grid grid-cols-5 gap-2"
                >
                  {[...Array(10)].map((_, index) => (
                    <RadioGroup.Option
                      key={index + 1}
                      id={`intensity-${index + 1}`}
                      value={(index + 1).toString()}
                      className={({ active, checked }) =>
                        cn(
                          "border-2  rounded-lg w-full py-1 text-center   border-border outline-none disabled:opacity-50 transition transform duration-200 ease-in-out active:scale-95 h-full border-b-4 hover:bg-black/5 cursor-pointer active:border-amber-500 active:border-b-2 flex flex-col items-center justify-between p-3 focus:outline-none ring-0 focus:ring-0  md:font-semibold font-medium",
                          (active || checked) && "border-primary"
                        )
                      }
                    >
                      <RadioGroup.Label
                        htmlFor={`intensity-${index + 1}`}
                        className="cursor-pointer"
                      >
                        {index + 1}
                      </RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end w-full mt-10 gap-6">
            <p className="text-16-regular">
              You can update these settings in dashboard
            </p>
            <Button type="submit" disabled={isPending} className="w-24 gap-x-2">
              Next
              {isPending ? (
                <LoaderIcon className="animate-spin h-4 w-4" />
              ) : (
                <ArrowRightIcon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default StepTwo;
