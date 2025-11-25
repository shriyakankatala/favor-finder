"use client";

import React from "react";
import FavorCard from "../../components/FavorCard";
import MenuDrawer from "../../components/MenuDrawer";
import { useGlobal } from "@/contexts/GlobalContext";
import { useRouter } from "next/navigation";
// Mock data
export default function HomePage() {
    const { myFavors, nearbyFavors } = useGlobal();
    const router = useRouter();

    function handleFavorClick(id: number) {
        router.push(`/details/${id}`);
    }

    function handleEditFavor(id: number) {
        router.push(`/edit/${id}`);
    }

  return (
    <main className="max-w-4xl mx-auto mt-8 px-4">
      <header className="flex items-center justify-between mb-6">
        <MenuDrawer/>
        <h1 className="text-3xl font-bold">Favor Finder</h1>
        <div className="flex gap-2">
          <a href="/create" className="btn-primary">＋</a>
        </div>
      </header>

      {/* My Requested Favors */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-3">My Requested Favors</h2>
        {myFavors.length > 0 ? (
          <div className="space-y-4">
            {myFavors.map(f => <FavorCard key={f.id} favor={f} onClick={() => handleEditFavor(f.id)}/>)}
          </div>
        ) : (
          <p className="text-gray-500">You have no requested favors.</p>
        )}
      </section>

      {/* Requested Favors Near Me */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Favors Requested Near Me</h2>
        {nearbyFavors.length > 0 ? (
          <div className="space-y-4" >
            {nearbyFavors.map(f => <FavorCard key={f.id} favor={f} onClick={() => handleFavorClick(f.id)}/>)}
          </div>
        ) : (
          <p className="text-gray-500">No nearby favors found.</p>
        )}
      </section>
    </main>
  );
}
