"use client";

import Script from "next/script";

const CLINIC_ID = 16;
const GA_MEASUREMENT_ID = "G-QW1QL5HJ6B";
const META_PIXEL_ID = "813481134551296";

declare global {
  interface Window {
    emrgWidget?: {
      init: (config: {
        clinicId: number;
        gaMeasurementId?: string;
        metaPixelId?: string;
      }) => void;
    };
  }
}

export function EmrgScript() {
  return (
    <Script
      id="emrg-widget-script"
      src="https://joinemrg.com/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.emrgWidget) {
          window.emrgWidget.init({
            clinicId: CLINIC_ID,
            gaMeasurementId: GA_MEASUREMENT_ID,
            metaPixelId: META_PIXEL_ID,
          });
        }
      }}
    />
  );
}
