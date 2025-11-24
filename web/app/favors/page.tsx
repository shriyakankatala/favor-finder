// web/app/page.tsx
"use client";

import React from "react";
import FavorCard from "../components/FavorCard";
import MenuDrawer from "../components/MenuDrawer";
import { MY_FAVORS, NEARBY_FAVORS } from "../lib/mock-data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fdfbe9] px-6 py-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#4c8d3a]">Favor Finder</h1>
        <div className="flex gap-2">
          <a
            href="/favors/create"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4c8d3a] text-white text-2xl leading-none"
          >
            +
          </a>
        </div>
      </header>

      <MenuDrawer />

      {/* My Requested Favors */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-3 text-[#4c8d3a]">
          My Requested Favors
        </h2>
        {MY_FAVORS.length > 0 ? (
          <div className="space-y-4">
            {MY_FAVORS.map((f) => (
              <FavorCard key={f.id} favor={f} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">You have no requested favors.</p>
        )}
      </section>

      {/* Requested Favors Near Me */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#4c8d3a]">
          Requested Favors Near Me
        </h2>
        {NEARBY_FAVORS.length > 0 ? (
          <div className="space-y-4">
            {NEARBY_FAVORS.map((f) => (
              <FavorCard key={f.id} favor={f} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No nearby favors found.</p>
        )}
      </section>
    </main>
  );
}
