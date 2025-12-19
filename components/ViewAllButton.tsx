import Link from "next/link";

interface ViewAllButtonProps {
  text?: string;
  variant?: "small" | "large";
  className?: string;
  bgColor?: string;
  href?: string;
}

export default function ViewAllButton({
  text = "View All",
  variant = "small",
  className = "",
  bgColor = "#DB4444",
  href = "/products",
}: ViewAllButtonProps) {
  const baseClasses =
    "text-white rounded-md transition duration-100 active:scale-95 hover:scale-105 flex items-center justify-center";

  const variantClasses = variant === "large" ? "lg:px-12 lg:py-4 px-8 py-3 w-max" : "sm:px-8 sm:py-3 px-6 py-2 w-max";

  return (
    <Link 
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </Link>
  );
}

