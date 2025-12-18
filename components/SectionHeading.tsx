interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return <div className="sm:text-2xl lg:text-4xl font-semibold">{children}</div>;
}

