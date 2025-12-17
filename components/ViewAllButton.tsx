interface ViewAllButtonProps {
  text?: string;
  variant?: "small" | "large";
  className?: string;
  bgColor?: string;
}

export default function ViewAllButton({
  text = "View All",
  variant = "small",
  className = "",
  bgColor = "#DB4444",
}: ViewAllButtonProps) {
  const baseClasses =
    "text-white rounded-md transition duration-100 active:scale-95 hover:scale-105";

  const variantClasses = variant === "large" ? "px-12 py-3" : "px-8 py-2";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
}
