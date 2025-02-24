// @ts-nocheck


import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from 'react'



const AuthCallbackPage = async () => {

    const user = await currentUser();

    if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
        return redirect("/signin");
    }

    const dbUser = await db.user.findFirst({
        where: {
            clerkId: user.id,
        },
    });

    if (!dbUser) {
        await db.user.create({
            data: {
                id: user.id,
                clerkId: user.id,
                email: user.primaryEmailAddress.emailAddress,
                firstName: user.firstName!,
                lastName: user.lastName || "",
                image: user.imageUrl,
            },
        });

        redirect("/onboarding");
    }

    redirect("/dashboard");
};

export default AuthCallbackPage



// import { db } from "@/lib/db";
// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import React from 'react';

// const AuthCallbackPage = async () => {
//   const user = await currentUser();

//   if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
//     return redirect("/signin");
//   }

//   // Check if user already has an active session
//   if (user.session) {
//     return redirect("/dashboard");
//   }

//   const dbUser = await db.user.findFirst({
//     where: {
//       clerkId: user.id,
//     },
//   });

//   if (!dbUser) {
//     await db.user.create({
//       data: {
//         id: user.id,
//         clerkId: user.id,
//         email: user.primaryEmailAddress.emailAddress,
//         firstName: user.firstName!,
//         lastName: user.lastName || "",
//         image: user.imageUrl,
//       },
//     });

//     return redirect("/onboarding");
//   }

//   return redirect("/dashboard");
// };

// export default AuthCallbackPage;