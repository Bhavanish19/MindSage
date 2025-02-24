// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
// const isPublicRoute = createRouteMatcher(["/", "(auth)(.*)"]);

// export default clerkMiddleware((auth, req) => {
//     const { userId } = auth();

//     if (isPublicRoute(req)) {
//         return NextResponse.next();
//     }

//     if (isProtectedRoute(req) && !userId) {
//         return NextResponse.redirect(new URL("/auth/signin", req.url));
//     }
// });

// export const config = {
//     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };



 

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define the protected and public route matchers
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
const isPublicRoute = createRouteMatcher(["/", "/auth(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // const { userId } = auth();
  const { userId } = await auth();

  // If the route is public, allow access
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // If the route is protected and the user is not signed in, redirect to sign-in
  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
  
  // For protected routes, proceed if the user is authenticated
  return NextResponse.next();
});

// Middleware configuration
export const config = {
  matcher: [
    // Exclude Next.js internals and static files unless specified in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
