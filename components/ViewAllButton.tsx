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

  const variantClasses = variant === "large" ? "lg:px-12 lg:py-3 px-8 py-2 xs:w-32" : "sm:px-8 sm:py-2 px-3 py-1";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
}
