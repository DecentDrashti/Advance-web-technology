"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProductModal({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const router = useRouter();
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-40" />

      {/* Modal */}
      <div className="relative inset-0 z-50 flex items-center justify-center">
        <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-2xl relative animate-scaleIn">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Product {id} Details
          </h1>

          <div className="space-y-3">
            <p><b>Product ID:</b> {id}</p>
            <p><b>Name:</b> Product {id}</p>
            <p><b>Description:</b> This is the description for Product {id}</p>
            <p><b>Price:</b> ₹{Number(id) * 10}</p>
          </div>

          <button
            onClick={() => router.back()}
            className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
