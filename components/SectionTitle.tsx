interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="flex gap-2 items-center font-semibold text-[#DB4444]">
      <div className="w-[20px] h-[20px] lg:w-[20px] lg:h-[40px]  bg-[#DB4444] rounded-sm"></div>
      {children}
    </div>
  );
}

