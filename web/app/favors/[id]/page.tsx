"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Favor } from "../../../lib/types";

// Mock data (your original list)
const ALL_FAVORS: Favor[] = [
  { id: "1", title: "Pick up groceries", description: "123 Main St", reward: "$10" },
  { id: "2", title: "Walk the dog", description: "123 Main St", reward: "$5" },
  { id: "3", title: "Move a couch", description: "456 Oak Ave", reward: "$25", distance: "1.2 mi", eta: "15 min" },
  { id: "4", title: "Math tutoring", description: "789 Pine St", reward: "$18", distance: "0.6 mi", eta: "8 min" }
];

export default function FavorDetailsPage() {
  const params = useParams();
  const favor = ALL_FAVORS.find(f => f.id === params?.id);

  if (!favor) {
    return (
      <main className="min-h-screen bg-[#fdfbe9] px-6 py-6">
        <h1 className="text-2xl font-bold">Favor Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdfbe9] px-6 py-6">

      {/* Header */}
      <header className="flex items-center mb-4">
        <Link href="/" className="mr-3 text-2xl text-[#4c8d3a]">&larr;</Link>
        <h1 className="text-2xl font-semibold text-[#4c8d3a]">Favor Finder</h1>
      </header>

      {/* Main details box */}
      <section className="bg-white p-5 rounded-2xl border border-[#d5dfc8] shadow-sm mb-6">
        
        {/* Title + points */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-xl font-semibold text-[#333]">{favor.title}</h2>

            {/* Distance + ETA if available */}
            {(favor.distance || favor.eta) && (
              <p className="text-sm text-gray-500 mt-1">
                {favor.distance && <>📍 {favor.distance}</>}
                {favor.distance && favor.eta && " | "}
                {favor.eta && favor.eta}
              </p>
            )}
          </div>

          <span className="bg-green-100 border border-green-600 text-green-700 px-3 py-1 rounded-full font-semibold text-sm">
            {favor.reward}
          </span>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-48 rounded-xl bg-gray-200 flex items-center justify-center mb-3">
          <span className="text-gray-500 text-sm">Map Placeholder</span>
        </div>

        {/* Address */}
        <p className="text-sm text-gray-700 mb-4">
          {favor.description}
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
