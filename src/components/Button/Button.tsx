import React from "react";
import "./Button.css";

export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "teal";
  children: React.ReactNode;
};

export function Button({ variant, children }: ButtonProps) {
  return <button data-button={`variant:${variant}`}>{children}</button>;
}
