interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return <div className="text-4xl font-semibold">{children}</div>;
}

