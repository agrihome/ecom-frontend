"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CategoryToggleProps {
  title: string;
  subcategories: string[];
}

export function CategoryToggle({ title, subcategories }: CategoryToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2 py-2">
        <Link href="/" className="flex-1">
          {title}
        </Link>
        <button
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          <ChevronRight
            size={16}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <ul className="ml-4 mt-1 space-y-1">
          {subcategories.map((subcategory, index) => (
            <li key={index} className="py-1 hover:text-gray-600">
              <Link href="/">{subcategory}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
