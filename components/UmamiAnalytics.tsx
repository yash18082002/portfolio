"use client"

import Script from "next/script";

export const UmamiAnalytics = () => {
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
    const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL;

    const cleanUrl = () => {
        if (window.location.search) {
            window.history.replaceState({}, "", window.location.pathname);
        }
    }

    if (!websiteId || !umamiUrl) {
        return null;
    }

    return (
        <Script 
            async
            src={`${umamiUrl}/script.js`}
            data-website-id={websiteId}
            onLoad={cleanUrl}
        />
    )
}