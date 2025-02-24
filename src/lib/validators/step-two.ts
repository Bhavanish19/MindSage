import { z } from "zod";

export const StepTwoSchema = z.object({
    name: z.enum(
        
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

),
    frequency: z.enum(["DAILY", "WEEKLY", "MONTHLY", "RARELY"]),
    intensity: z.number().min(1).max(10),
    loggedAt: z.date().optional(),
});

export type StepTwoSchemaType = z.infer<typeof StepTwoSchema>;