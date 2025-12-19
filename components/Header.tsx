"use client";

import Link from "next/link";
import ResponsiveMenu from "@/components/ResponsiveMenu";
import UserDropdown from "@/components/UserDropdown";
import { useAppSelector } from "@/lib/redux/hooks";

export default function Header() {
  const { totalItems } = useAppSelector((state) => state.cart);
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  return (
    <header className="w-full bg-white pt-10 pb-4 px-5 sm:px-20 border-gray-200 border-b">
      <nav className="w-full">
        <div className="flex items-center w-full [@media(min-width:1250px)]:gap-32">
          <div className="text-2xl font-bold text-black">
            <Link href="/">Exclusive</Link>
          </div>
          <div className="flex items-center space-x-6 text-gray-700 [@media(max-width:1250px)]:ml-6">
            <Link href="/" className="hover:text-gray-600 hidden sm:block">
              Home
            </Link>
            <Link href="/contact" className="hover:text-gray-600 hidden md:block">
              Contact
            </Link>
            <Link href="/about" className="hover:text-gray-600 hidden md:block">
              About
            </Link>
            <Link href="/login" className="hover:text-gray-600 hidden sm:block">
              Login
            </Link>
          </div>

          <div className="flex gap-5 items-center ml-auto">
            <div className="bg-[#F5F5F5] h-[38px] w-[250px] outline-none [@media(min-width:1080px)]:flex items-center px-3 justify-between gap-1 hidden">
              <input
                type="text"
                className="h-[22px] text-sm outline-none flex-1 placeholder:text-gray-500 text-gray-700"
                placeholder="What are you looking for?"
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.75 16.75L12.9723 12.9656M15.0658 7.90789C15.0658 9.80629 14.3117 11.6269 12.9693 12.9693C11.6269 14.3117 9.80629 15.0658 7.90789 15.0658C6.0095 15.0658 4.18886 14.3117 2.8465 12.9693C1.50413 11.6269 0.75 9.80629 0.75 7.90789C0.75 6.0095 1.50413 4.18886 2.8465 2.8465C4.18886 1.50413 6.0095 0.75 7.90789 0.75C9.80629 0.75 11.6269 1.50413 12.9693 2.8465C14.3117 4.18886 15.0658 6.0095 15.0658 7.90789V7.90789Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <Link href="/wishlist" className="hidden sm:block relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {wishlistItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-[#DB4444] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>


            <Link href="/cart" className="relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 5H7L10 22H26"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#DB4444] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <UserDropdown />

            <div className="[@media(min-width:1250px)]:hidden">
              <ResponsiveMenu></ResponsiveMenu>
            </div>


          </div>
        </div>
      </nav>
    </header>
  );
}
