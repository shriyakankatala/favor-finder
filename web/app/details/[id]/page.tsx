"use client";

import React from "react";
import Link from "next/link";
import { useGlobal } from "@/contexts/GlobalContext";
import { useParams } from "next/navigation";

export default function FavorDetailsPage() {
  const params = useParams();
  const { nearbyFavors } = useGlobal();

  const currentFavor = nearbyFavors[parseInt(params.id[0])-1];
  if (currentFavor == null) {
    return (
      <main className="min-h-screen bg-[#fdfbe9] px-6 py-6">
        <h1 className="text-2xl font-bold">Favor Not Found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto mt-8 px-4">

      {/* Header */}
      <header className="flex items-center mb-4">
        <Link href="/home" className="mr-3 text-2xl text-[#4c8d3a]">&larr;</Link>
        <h1 className="text-2xl font-semibold text-[#4c8d3a]">Favor Finder</h1>
      </header>

      {/* Main details box */}
      <section className="bg-white p-5 rounded-2xl border border-[#d5dfc8] shadow-sm mb-6">
        
        {/* Title + points */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-xl font-semibold text-[#333]">{currentFavor.title}</h2>

            {/* Distance + ETA if available */}
            {(currentFavor.distance || currentFavor.eta) && (
              <p className="text-sm text-gray-500 mt-1">
                {currentFavor.distance && <>📍 {currentFavor.distance}</>}
                {currentFavor.distance && currentFavor.eta && " | "}
                {currentFavor.eta && currentFavor.eta}
              </p>
            )}
          </div>

          <span className="bg-green-100 border border-green-600 text-green-700 px-3 py-1 rounded-full font-semibold text-sm">
            {currentFavor.reward}
          </span>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-48 rounded-xl bg-gray-200 flex items-center justify-center mb-3">
          <span className="text-gray-500 text-sm">Map Placeholder</span>
        </div>

        {/* Address */}
        <p className="text-sm text-gray-700 mb-4">
          {currentFavor.description}
        </p>

        {/* Posted by (placeholder for now) */}
        <div className="flex items-center text-sm text-gray-700">
          <span className="text-xl mr-2">👤</span>
          <span><strong>Posted By:</strong> Sally</span>
        </div>

      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <button className="w-full py-3 rounded-full bg-[#4c8d3a] text-white font-semibold text-lg">
          Chat
        </button>
        <button className="w-full py-3 rounded-full bg-[#4c8d3a] text-white font-semibold text-lg">
          Book This Favor!
        </button>
      </section>

    </main>
  );
}
