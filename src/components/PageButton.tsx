import React from "react";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  label: string;
}

export default function PageButton({
  label,
  type,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type ?? "button"}
      {...rest}
      onClick={disabled ? undefined : onClick}
      className={`font-medium ${
        disabled ? "opacity-30 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
}
