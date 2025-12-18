interface FeaturedProductTitleProps {
  children: React.ReactNode;
}

export function FeaturedProductTitle({ children }: FeaturedProductTitleProps) {
  return <h2 className="text-lg lg:text-2xl font-semibold sm:block hidden">{children}</h2>;
}

interface FeaturedProductDescriptionProps {
  children: React.ReactNode;
}

export function FeaturedProductDescription({
  children,
}: FeaturedProductDescriptionProps) {
  return <p className="text-sm font-normal lg:block hidden">{children}</p>;
}

interface ShopNowButtonProps {
  children?: React.ReactNode;
}

export function ShopNowButton({ children = "Shop Now" }: ShopNowButtonProps) {
  return (
    <button className="font-medium underline sm:underline-offset-6 mr-auto text-xs sm:text-base">
      {children}
    </button>
  );
}

interface FeaturedProductProps {
  title: string;
  description: string;
}

export function FeaturedProduct({
  title,
  description,
}: FeaturedProductProps) {
  return (
    <div
      className={`absolute bottom-[10%] left-[10%] text-white flex-col md:gap-3 gap-1 flex  lg:w-5/12`}
    >
      <FeaturedProductTitle>{title}</FeaturedProductTitle>
      <FeaturedProductDescription>{description}</FeaturedProductDescription>
      <ShopNowButton />
    </div>
  );
}
