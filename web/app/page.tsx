"use client";

import React from "react";
import FavorCard from "../components/FavorCard";
import MenuDrawer from "../components/MenuDrawer";
import { Favor } from "../lib/types";

// Mock data (frontend-only)
const MOCK_FAVORS: Favor[] = [
  { id: "1", title: "Move a couch", description: "Help moving a couch Saturday 2pm", reward: "$25", distance: "1.2 mi", eta: "15 min" },
  { id: "2", title: "Math tutoring", description: "Algebra help for 30 minutes", reward: "$18", distance: "0.6 mi", eta: "8 min" }
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

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-3">Favors Near Me</h2>
        <div className="space-y-4">
          {MOCK_FAVORS.map((f) => <FavorCard key={f.id} favor={f} />)}
        </div>
      </section>
    </main>
  );
}
