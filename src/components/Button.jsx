import React from "react";

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-3xs py-2 rounded-xl font-semibold shadow-sm hover:shadow transition active:scale-[.99] bg-teal-700 text-white  ${className}`}
    >
      {children}
    </button>
  );
}
