"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function FavorDetailsPage() {
  const params = useParams();
  const id = params?.id;

  // frontend-only placeholder
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2">Favor #{id}</h1>
      <p className="text-gray-700 mb-4">Description will appear here after you connect the backend.</p>

      <div className="flex gap-3">
        <button className="btn-primary flex-1">Chat</button>
        <button className="btn-outline flex-1">Accept</button>
      </div>
    </div>
  );
}
