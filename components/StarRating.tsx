interface StarRatingProps {
  rating: number; // Rating value (0-5, can be decimal like 4.5)
  size?: number; // Optional size prop (default: 15)
}

export default function StarRating({ rating, size = 15 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const StarIcon = ({ filled = true }: { filled?: boolean }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 6.83189Z"
        fill={filled ? "#FFAD33" : "#E5E5E5"}
      />
    </svg>
  );

  return (
    <div className="flex gap-1 items-center">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <StarIcon key={`full-${i}`} filled={true} />
      ))}
      
      {/* Half star (if needed) */}
      {hasHalfStar && (
        <div className="relative">
          <StarIcon filled={false} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <StarIcon filled={true} />
          </div>
        </div>
      )}
      
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarIcon key={`empty-${i}`} filled={false} />
      ))}
    </div>
  );
}

