"use client";

import { useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from "../ui/button";

type GlitchButtonProps = ButtonProps;

export const GlitchButton = ({ ...props }: GlitchButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonText, setButtonText] = useState<string | null>(null);
  const { children } = props;

  useEffect(() => {
    setButtonText(buttonRef.current && buttonRef.current.textContent);
  }, [buttonRef.current]);

  return (
    <Button
      ref={buttonRef}
      className="hover:glitch bg-indigo-500 text-indigo-50 hover:bg-indigo-500/90"
    >
      <span data-text={buttonText}>{children}</span>
    </Button>
  );
};
