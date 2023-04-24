import type { MouseEventHandler } from "react";

interface ButtonProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-contrast hover:opacity-50 py-2 px-4  rounded text-white font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
