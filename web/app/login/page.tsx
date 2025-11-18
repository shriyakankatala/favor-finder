"use client";

import React from "react";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form className="flex flex-col gap-3">
        <input className="border p-2 rounded" placeholder="Email" type="email" />
        <input className="border p-2 rounded" placeholder="Password" type="password" />
        <button type="button" className="btn-primary">Login</button>
      </form>
    </div>
  );
}
