"use client";

import { Button } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

const CLINIC_ID = 16;

interface BookingWidgetProps extends VariantProps<typeof buttonVariants> {
  buttonText?: string;
  className?: string;
}

declare global {
  interface Window {
    launchEmrgWidget: (clinicId: number) => void;
  }
}

export function BookingWidget({
  buttonText = "Book Appointment",
  variant,
  size,
  className,
}: BookingWidgetProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        if (window.launchEmrgWidget) {
          window.launchEmrgWidget(CLINIC_ID);
        }
      }}
    >
      {buttonText}
    </Button>
  );
}
