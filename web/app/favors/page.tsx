"use client";

import React from "react";
import FavorCard from "../components/FavorCard";
import MenuDrawer from "../components/MenuDrawer";
import { Favor } from "../lib/types";

// Mock data
const MY_FAVORS: Favor[] = [
  { id: "1", title: "Pick up groceries", description: "Home Address: 123 Main St", reward: "$10" },
  { id: "2", title: "Walk the dog", description: "Home Address: 123 Main St", reward: "$5" }
];

const NEARBY_FAVORS: Favor[] = [
  { id: "3", title: "Move a couch", description: "456 Oak Ave", reward: "$25", distance: "1.2 mi", eta: "15 min" },
  { id: "4", title: "Math tutoring", description: "789 Pine St", reward: "$18", distance: "0.6 mi", eta: "8 min" }
];

export default function HomePage() {
  return (
    <main>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Favor Finder</h1>
        <div className="flex gap-2">
          <a href="/favors/create" className="btn-primary">＋</a>
        </div>
      </header>

      <MenuDrawer />

      {/* My Requested Favors */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-3">My Requested Favors</h2>
        {MY_FAVORS.length > 0 ? (
          <div className="space-y-4">
            {MY_FAVORS.map(f => <FavorCard key={f.id} favor={f} />)}
          </div>
        ) : (
          <p className="text-gray-500">You have no requested favors.</p>
        )}
      </section>

      {/* Requested Favors Near Me */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Requested Favors Near Me</h2>
        {NEARBY_FAVORS.length > 0 ? (
          <div className="space-y-4">
            {NEARBY_FAVORS.map(f => <FavorCard key={f.id} favor={f} />)}
          </div>
        ) : (
          <p className="text-gray-500">No nearby favors found.</p>
        )}
      </section>
    </main>
  );
}
