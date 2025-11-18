import React from "react";
import Link from "next/link";
import { Favor } from "../lib/types";

type Props = {
  favor: Favor;
};

export default function FavorCard({ favor }: Props) {
  return (
    <Link href={`/favors/${favor.id}`}>
      <article className="card cursor-pointer hover:shadow-lg transition">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">{favor.title}</h3>
            <p className="text-gray-600 text-sm">{favor.description}</p>
            <div className="text-xs text-gray-500 mt-1">{favor.distance} • {favor.eta}</div>
          </div>
          <div className="ml-4">
            <div className="bg-[#cfe9d0] rounded-full px-3 py-1 text-sm font-semibold">{favor.reward}</div>
          </div>
        </div>
      </article>
    </Link>
  );
}
