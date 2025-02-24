import { MindSageBookingForm } from "@/components/booking-form";
import React from "react";

const MeetingsPage = () => {
  return (
    <>
      <div className="px-4 py-auto max-w-screen-lg md:py-8 py-4 space-y-8 mx-auto">
        <h2 className="text-6xl font-bold tracking-tighter  max-w-screen-lg  mx-auto">
          Let us help you create the life you deserve.
        </h2>
        <p className="leading-relaxed text-xl text-muted-foreground max-w-screen-lg mx-auto">
          Let&apos;s figure it out together. Schedule a{" "}
          <b>free 15 minute consultation</b> to discuss your needs and goals.
        </p>
      </div>

      <div className=" w-full  mx-auto space-y-12 p-1">
        <MindSageBookingForm />
      </div>
    </>
  );
};

export default MeetingsPage;
