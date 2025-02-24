"use client";

import React from "react";
import { useEffect } from "react";

export default function WidgetComponent() {
  useEffect(() => {
    // Dynamically load the script once the component mounts
    const script = document.createElement("script");
    script.src = "https://nexx-widget.vercel.app/widget.umd.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<my-widget project-id="336">
        Hello 
        </my-widget>`,
        }}
      />
    </div>
  );
}
