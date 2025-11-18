"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Favor } from "../../../lib/types";

// Mock data
const ALL_FAVORS: Favor[] = [
  { id: "1", title: "Pick up groceries", description: "123 Main St", reward: "$10" },
  { id: "2", title: "Walk the dog", description: "123 Main St", reward: "$5" },
  { id: "3", title: "Move a couch", description: "456 Oak Ave", reward: "$25" },
  { id: "4", title: "Math tutoring", description: "789 Pine St", reward: "$18" }
];

export default function FavorDetailsPage() {
  const params = useParams();
  const favor = ALL_FAVORS.find(f => f.id === params?.id);

  if (!favor) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Favor not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2">{favor.title}</h1>
      <p className="text-gray-700 mb-2">Address: {favor.description}</p>
      <p className="text-gray-700 mb-4">Points: {favor.reward ?? "N/A"}</p>
      <button className="btn-primary w-full">Book this favor</button>
    </div>
  );
}
