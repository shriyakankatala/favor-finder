"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MenuDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="p-2 rounded bg-white border">Menu</button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-white p-6 shadow-xl">
            <button onClick={() => setOpen(false)} className="mb-4">Close</button>
            <nav className="flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link href="/favors/create">Create Favor</Link>
              <Link href="/login">Login</Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
