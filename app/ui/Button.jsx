"use client";

import Link from "next/link";
import clsx from "clsx";

export default function Button({
  children = "Button",
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  showArrow = true,
  disabled = false,
  loading = false,
  className = "",
}) {
  // Base styles
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#C8A96A]/40";

  // Variants
  const variants = {
    primary:
      "bg-[#D4A373] text-white shadow-[0_4px_20px_rgba(212,149,106,0.45)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,149,106,0.6)] active:scale-95",
    secondary:
      "border border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white",
    ghost: "text-[#8EB69B] hover:text-[#D4A373]",
  };

  // Sizes
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  // Disabled / loading state
  const stateStyles =
    disabled || loading
      ? "opacity-60 cursor-not-allowed pointer-events-none"
      : "";

  const classes = clsx(
    base,
    variants[variant],
    sizes[size],
    stateStyles,
    className
  );

  const content = (
    <>
      {/* Shine effect (only for primary) */}
      {variant === "primary" && (
        <span className="pointer-events-none absolute left-[-75%] top-0 h-full w-1/2 bg-white/30 blur-md transition-all duration-700 ease-in-out group-hover:left-[125%]" />
      )}

      {/* Content */}
      {loading ? (
        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <span className="relative z-10 flex items-center gap-2">
          {children}

          {showArrow && (
            <svg
              className="transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 opacity-80"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      )}
    </>
  );

  // Link version
  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  // Button version
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  );
}