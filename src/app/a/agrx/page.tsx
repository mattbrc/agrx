"use client";

import { useEffect } from "react";

const CLINIC_ID = 29;
const AFFILIATE_CODE = "AGRX";
const GA_MEASUREMENT_ID = "G-DHL2FR1J21";

export default function AgrxAffiliatePage() {
  useEffect(() => {
    // Re-init widget with affiliate code, then auto-open
    const tryLaunch = () => {
      if (window.emrgWidget) {
        window.emrgWidget.init({
          clinicId: CLINIC_ID,
          gaMeasurementId: GA_MEASUREMENT_ID,
          affiliateCode: AFFILIATE_CODE,
        });
      }
      if (window.launchEmrgWidget) {
        window.launchEmrgWidget(CLINIC_ID);
      }
    };

    // Widget script may not be loaded yet, retry briefly
    if (window.emrgWidget && window.launchEmrgWidget) {
      tryLaunch();
    } else {
      const interval = setInterval(() => {
        if (window.emrgWidget && window.launchEmrgWidget) {
          clearInterval(interval);
          tryLaunch();
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
        <p className="text-muted-foreground mb-8 text-lg">
          Opening your booking form now...
        </p>
      </div>
    </div>
  );
}
