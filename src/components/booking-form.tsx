"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const MindSageBookingForm = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "MindSage-doctors" });
            cal("ui", {
                theme: "light",
                styles: {
                    branding: {
                        brandColor: "#FA812D"
                    }
                },
                hideEventTypeDetails: false,
                layout: "month_view",
                cssVarsPerTheme: {
                    light: {
                        "cal-brand": "hsl(198.6 88.7% 48.4%)", // primary
                        "cal-text": "hsl(198.6 5% 0%)", // foreground
                        "cal-text-emphasis": "hsl(198.6 5% 10%)", // accent-foreground
                        "cal-text-muted": "hsl(198.6 5% 35%)", // muted-foreground
                        "cal-bg": "hsl(198.6 100% 95%)", // background
                        "cal-bg-emphasis": "hsl(160.6 30% 80%)", // accent
                        "cal-bg-muted": "hsl(160.6 30% 85%)", // muted
                        scrollbar: "rounded",
                    },
                    dark: {
                        "cal-brand": "hsl(198.6 88.7% 48.4%)",  // Keep the primary color
                        "cal-text": "hsl(198.6 10% 90%)",  // Soften the text color to reduce eye strain
                        "cal-text-emphasis": "hsl(198.6 10% 75%)",  // Slightly muted accent text for readability
                        "cal-text-muted": "hsl(198.6 10% 50%)",  // Even more muted for secondary info
                        "cal-bg": "hsl(198.6 20% 12%)",  // Darken the background slightly
                        "cal-bg-emphasis": "hsl(160.6 30% 25%)",  // Slightly brighten accent areas for better contrast
                        "cal-bg-muted": "hsl(160.6 30% 18%)",  // Darken muted background for subtle elements
                        scrollbar: "rounded",  // Keep the scrollbar style as is
                    },
                    
                },
            });
        })();
    }, []);

    return (
        <Cal
            namespace="MindSage-doctors"
            calLink="bhavanish-dhamnaskar-110djk/mindsage"
            // https://cal.com/bhavanish-dhamnaskar-110djk
            style={{width:"100%", height:"100%", overflow:"scroll"}}
            config={{
                layout: "month_view",
                theme: "light"
            }}
        />
    );
};


// https://cal.com/bhavanish-dhamnaskar-110djk/mindsage

