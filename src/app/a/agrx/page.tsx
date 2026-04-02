"use client";

import { useEffect } from "react";
import { BookingWidget } from "@/components/booking-widget";

const CLINIC_ID = 29;
const AFFILIATE_CODE = "AGRX";
const GA_MEASUREMENT_ID = "G-DHL2FR1J21";

export default function AgrxAffiliatePage() {
  useEffect(() => {
    // Re-init widget with affiliate code
    if (window.emrgWidget) {
      window.emrgWidget.init({
        clinicId: CLINIC_ID,
        gaMeasurementId: GA_MEASUREMENT_ID,
        affiliateCode: AFFILIATE_CODE,
      });
    } else {
      const interval = setInterval(() => {
        if (window.emrgWidget) {
          clearInterval(interval);
          window.emrgWidget.init({
            clinicId: CLINIC_ID,
            gaMeasurementId: GA_MEASUREMENT_ID,
            affiliateCode: AFFILIATE_CODE,
          });
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center px-6 pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
          Affiliate Partner
        </p>
        <h1 className="text-foreground mb-4 text-4xl font-bold">
          Book With <span className="text-primary">AG Rx</span>
        </h1>
        <BookingWidget size="lg" buttonText="Book Appointment" />
      </div>
    </div>
  );
}
