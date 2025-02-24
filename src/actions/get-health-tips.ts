"use server";

import ai from "@/lib/google";
import { Symptom, Medication, User } from "@prisma/client";

interface Props {
    symptoms: Symptom[];
    medications: Medication[];
    user: User;
}

const generateTips = ({ symptoms, medications, user }: Props) => {

    
    const { age, bloodGroup, firstName, gender, height, medicalIssues, weight } = user;

    const formattedSymptoms = symptoms
    .map((symptom) => {
      return `- ${symptom.name} (Intensity of appering  this symptom out of 10 is : ${symptom.intensity}, Frequency of this sysmptom is : ${symptom.frequency})`;
    })
    .join("\n");

  const formattedMedications = medications
    .map((medication) => {
      return `- ${medication.name} is/are the challanges ${
        firstName ? firstName : "Unknown"
      } is facing  , ( These challanges are appearing : ${
        medication.dosage
      }, Frequency: ${medication.frequency})`;
    })
    .join("\n");

    const prompt = `
        The user ${firstName ? firstName : ""} is ${age ? `${age} years old` : "of unknown age"}, ${gender ? gender : "of unknown gender"}. 
        Their blood group is ${bloodGroup ? bloodGroup : "unknown"}, height is ${height ? `${height} cm` : "unknown"}, and weight is ${weight ? `${weight} kg` : "unknown"}. 
        They have the following medical issues: ${medicalIssues ? medicalIssues : "none reported"}.

        Here are the details of their health condition:

        Symptoms:
        ${formattedSymptoms}

        Challanges :
        ${formattedMedications}

        Based on the above information, provide a very concise personalized health tips. Please provide up to 10 (or more if required based on the context) of the most important and relevant tips. Please do not give any medical advice, disclaimers, warnings, or any other information that could be considered as medical advice. Do not tell the user to consult a doctor or seek medical help. Just provide general health tips based on the information provided.and most most important thing is dont act AI ! I will tell you a use case ! if a user is suffering with some mental illness and having suicidal thoughts !  you should not advice him to call a local emergency service ! its not advicable right, instead its better to tell the importance of the life ! our family friends ! and these problems are temporary  ! and moreover  Focus on providing supportive, non-judgmental advice related to the user's mental health conditions and symptoms for example if the user is having a Placement related issues just ask 1-2 questions about his placement related queries and give your response which you are aiming to give like giving him some motivation and suggesting him to be up to date with tech .most of our users are students and feel free to respond based on thier age and mind set ! 
    `;

    return prompt;
};

const getHealthTips = async ({ symptoms, medications, user }: Props) => {
    const prompt = generateTips({ symptoms, medications, user });

    const model = ai.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "Generate mental health tips based on the user's symptoms and Mental helath challanages .Please only provide general health tips and do not give any medical advice.Do not tell the user to consult a doctor or seek medical help.Just provide mental health recommendations based on the information provided. act as a friend ! "
    });

    if (!prompt) {
        throw new Error("Prompt not generated");
    }

    try {
        const result = await model.generateContent(prompt);

        const res = await result.response;

        const recommendations = res.text();

        return recommendations;
    } catch (error) {
        console.error(error);
        throw new Error("Error generating health tips");
    }
};

export default getHealthTips;
