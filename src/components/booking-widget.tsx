"use client";

import { Button } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CLINIC_ID = 29;
// const CLINIC_ID=25; // localhost clinic

interface BookingWidgetProps extends VariantProps<typeof buttonVariants> {
  buttonText?: string;
  className?: string;
}

declare global {
  interface Window {
    launchEmrgWidget?: (clinicId: number) => void;
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
      className={cn("hover:cursor-pointer", className)}
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
