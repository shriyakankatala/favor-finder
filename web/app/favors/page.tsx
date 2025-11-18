"use client";

import React, { useState } from "react";
import { FavorInput } from "../../../lib/types";

export default function CreateFavorPage() {
  const [form, setForm] = useState<FavorInput>({ title: "", description: "", reward: "" });

  function handleChange<K extends keyof FavorInput>(key: K, value: FavorInput[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // stub: UI-only. Later replace with api.createFavor
    console.log("Would submit favor:", form);
    alert("Favor submitted (stub) — hook up API later.");
    setForm({ title: "", description: "", reward: "" });
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Create a Favor</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input value={form.title} onChange={e => handleChange("title", e.target.value)} className="border p-2 rounded" placeholder="Title" />
        <textarea value={form.description} onChange={e => handleChange("description", e.target.value)} className="border p-2 rounded" rows={4} placeholder="Description" />
        <input value={form.reward} onChange={e => handleChange("reward", e.target.value)} className="border p-2 rounded" placeholder="Reward (optional)" />
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
}
