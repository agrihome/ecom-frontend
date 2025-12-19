"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroCategoryToggle } from "@/components/Hero";
import Link from "next/link";

export default function ResponsiveMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 hover:bg-gray-100 rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Overlay and Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeMenu}
            />

            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">Exclusive</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Category List */}
              <div className="p-5">

                <ul className="h-full block md:hidden  pr-5 select-none text-gray-700 min-w-54">

                    <li className="py-2">
                       <Link href="/">
                        Home
                      </Link>
                    </li>
                  
                    <li className="py-2">
                    <Link href="/login">
                        Login
                    </Link>

                    </li>  

                    <li className="py-2">
                    <Link href="/wishlist">
                        WishList
                    </Link>

                    </li>  

                    <li className="py-2">
                    <Link href="/cart">
                        Cart
                    </Link>

                    </li>    
                  
                
                
                 
                </ul>
                <HeroCategoryToggle />

                <ul className="h-full block md:hidden  pr-5 select-none text-gray-700 min-w-54">
                    <li className="py-2">
                       <Link href="/contact">
                      Contact
                    </Link>

                    </li>  
                    <li className="py-2">
                    <Link href="/about">
                    About
                  </Link>

                    </li>  
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}