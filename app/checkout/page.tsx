"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/lib/redux/hooks";

export default function CheckoutPage() {
  const { items, totalPrice } = useAppSelector((state) => state.cart);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-20 py-10 min-h-screen">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm mb-12 text-gray-400">
        <Link href="/" className="hover:text-black">Account</Link>
        <span>/</span>
        <Link href="/cart" className="hover:text-black">My Account</Link>
        <span>/</span>
        <Link href="/product" className="hover:text-black">Product</Link>
        <span>/</span>
        <Link href="/cart" className="hover:text-black">View Cart</Link>
        <span>/</span>
        <span className="text-black font-medium">CheckOut</span>
      </div>

      <h1 className="text-3xl font-medium mb-10">Billing Details</h1>

      <div className="flex flex-col lg:flex-row gap-20">
        {/* Billing Form */}
        <div className="flex-1">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">First Name<span className="text-[#DB4444]">*</span></label>
              <input type="text" className="bg-[#F5F5F5] rounded px-4 py-3 focus:outline-none" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Company Name</label>
              <input type="text" className="bg-[#F5F5F5] rounded px-4 py-3 focus:outline-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Street Address<span className="text-[#DB4444]">*</span></label>
              <input type="text" className="bg-[#F5F5F5] rounded px-4 py-3 focus:outline-none" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Apartment, floor, etc. (optional)</label>
              <input type="text" className="bg-[#F5F5F5] rounded px-4 py-3 focus:outline-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Town/City<span className="text-[#DB4444]">*</span></label>
              <input type="text" className="bg-[#F5F5F5] rounded px-4 py-3 focus:outline-none" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Phone Number<span className="text-[#DB4444]">*</span></label>
              <input type="tel" className="bg-[#F5F5F5] rounded px-4 py-3 focus:outline-none" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Email Address<span className="text-[#DB4444]">*</span></label>
              <input type="email" className="bg-[#F5F5F5] rounded px-4 py-3 focus:outline-none" required />
            </div>

            <div className="flex items-center gap-3 mt-4">
              <input type="checkbox" id="save-info" className="w-5 h-5 accent-[#DB4444]" />
              <label htmlFor="save-info" className="text-sm">Save this information for faster check-out next time</label>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-[420px] flex flex-col gap-8 pt-6 lg:pt-0">
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14">
                    {item.image && (
                      <Image src={item.image} alt={item.name} fill className="object-contain" />
                    )}
                  </div>
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-b border-gray-300 pb-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
          </div>

          <div className="flex justify-between font-medium text-lg">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <input type="radio" name="payment" id="bank" className="w-5 h-5 accent-black" defaultChecked />
                    <label htmlFor="bank" className="font-medium">Bank</label>
                </div>
                <div className="flex gap-2">
                    {/* Placeholder payment icons */}
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <input type="radio" name="payment" id="cod" className="w-5 h-5 accent-black" />
                <label htmlFor="cod" className="font-medium">Cash on delivery</label>
            </div>
          </div>

          {/* Coupon */}
          <div className="flex gap-4 mt-4">
            <input 
              type="text" 
              placeholder="Coupon Code" 
              className="border border-black px-6 py-4 rounded flex-1 focus:outline-none"
            />
            <button className="bg-[#DB4444] text-white px-10 py-4 rounded font-medium hover:bg-opacity-90 transition-all">
              Apply Coupon
            </button>
          </div>

          <button className="bg-[#DB4444] text-white py-4 rounded font-medium hover:bg-opacity-90 transition-all mt-4 w-full lg:w-max px-12">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
