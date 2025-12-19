"use client";

import StarRating from "./StarRating";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { addToCart } from "@/lib/redux/features/cartSlice";
import { addToWishlist, removeFromWishlist } from "@/lib/redux/features/wishlistSlice";

interface ProductCardProps {
  id: string;
  productName: string;
  rating: number;
  imgUrl: string | any; // Can be string URL or imported image
  currentPrice: number;
  originalPrice: number;
  reviewCount?: number; // Optional review count
  discountPercent?: number; // Optional discount percentage
  new?: boolean; // Optional new badge
}

export default function ProductCard({
  id,
  productName,
  rating,
  imgUrl,
  currentPrice,
  originalPrice,
  reviewCount,
  discountPercent,
  new: isNew,
}: ProductCardProps) {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const cartItems = useAppSelector((state) => state.cart.items);
  
  const isInWishlist = wishlistItems.some((item) => item.id === id);
  const isInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name: productName,
      price: currentPrice,
      quantity: 1,
      image: typeof imgUrl === 'string' ? imgUrl : imgUrl?.src || imgUrl
    }));
  };

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist({
        id,
        name: productName,
        price: currentPrice,
        image: typeof imgUrl === 'string' ? imgUrl : imgUrl?.src || imgUrl
      }));
    }
  };

  return (
    <div className="relative w-max group">
      <div className="bg-[#F5F5F5] w-[180px] h-[166px] lg:w-[270px] lg:h-[250px] flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src={imgUrl}
          alt={productName}
          className="object-cover lg:w-[172px] w-[114px] h-auto"
        />
        
        <button 
          onClick={handleAddToCart}
          className={`w-full text-white text-center py-2 absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-md ${isInCart ? "bg-green-600" : "bg-black"}`}
        >
          {isInCart ? "Add More" : "Add To Cart"}
        </button>
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <p className="font-medium">{productName}</p>
        <p className="flex gap-3 font-medium">
          <span className="text-[#DB4444]">${currentPrice}</span>
          <span className="line-through text-[#7D8184]">${originalPrice}</span>
        </p>

        <div className="flex gap-2 items-center">
          <StarRating rating={rating} size={15} />
          {reviewCount && (
            <span className="text-[#7D8184] font-medium text-sm">({reviewCount})</span>
          )}
        </div>
      </div>

      {isNew ? (
        <span className="w-[56px] flex h-[26px] absolute top-4 left-4 items-center justify-center bg-[#00FF66] rounded-md text-white text-[12px]">
          New
        </span>
      ) : (
        discountPercent !== undefined && (
          <span className="w-[56px] flex h-[26px] absolute top-4 left-4 items-center justify-center bg-[#DB4444] rounded-md text-white text-[12px]">
            {discountPercent}%
          </span>
        )
      )}

      <div className="flex flex-col gap-2 absolute top-4 right-4">
        <button onClick={toggleWishlist} className="bg-white rounded-full p-1 shadow-sm hover:bg-gray-50 transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 34 34"
              fill={isInWishlist ? "#DB4444" : "none"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                stroke={isInWishlist ? "#DB4444" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
        </button>
        <button className="bg-white rounded-full p-1 shadow-sm hover:bg-gray-50 transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
        </button>
      </div>
    </div>
  );
}

