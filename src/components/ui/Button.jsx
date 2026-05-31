import { cn } from "@/lib/utils";

const variantStyles = {
  primary: "bg-[#3dd68c] text-[#0b0e0c] hover:bg-[#34c97d] font-bold tracking-[0.1em]",
  outline: "bg-transparent border border-white/15 text-white/60 hover:border-[rgba(61,214,140,0.4)] tracking-[0.08em]",
  ghost:   "bg-transparent text-[#3dd68c] border border-[rgba(61,214,140,0.5)] hover:bg-[#3dd68c] hover:text-[#0b0e0c] tracking-[0.08em]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export function Button({ variant = "primary", size = "md", className, children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200 font-[family-name:var(--font-jetbrains)]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
