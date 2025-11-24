// web/components/FavorCard.tsx
"use client";

import Link from "next/link";
import { Favor } from "../lib/types";

type Props = {
  favor: Favor;
};

export default function FavorCard({ favor }: Props) {
  return (
    <Link
      href={`/favors/${favor.id}`}
      className="block p-4 rounded-xl bg-white shadow border border-gray-200 hover:bg-gray-50 transition"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{favor.title}</h3>
          <p className="text-sm text-gray-600">{favor.description}</p>

          {(favor.distance || favor.eta) && (
            <p className="text-sm text-gray-500 mt-1">
              {favor.distance && <>📍 {favor.distance}</>}
              {favor.distance && favor.eta && " · "}
              {favor.eta && <>🕓 {favor.eta}</>}
            </p>
          )}
        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          {favor.reward}
        </span>
      </div>
    </Link>
  );
}
