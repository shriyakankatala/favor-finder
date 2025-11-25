"use client"; // must be a client component

import { createContext, useContext, useState, ReactNode } from "react";
import { Favor } from "../lib/favor";

const MY_FAVORS: Favor[] = [
  { id: 1, title: "Pick up groceries", description: "123 Main St", reward: "$10" },
  { id: 2, title: "Walk the dog", description: "123 Main St", reward: "$5" }
];

const NEARBY_FAVORS: Favor[] = [
  { id: 1, title: "Move a couch", description: "456 Oak Ave", reward: "$25", distance: "1.2 mi", eta: "15 min" },
  { id: 2, title: "Math tutoring", description: "789 Pine St", reward: "$18", distance: "0.6 mi", eta: "8 min" }
];

type GlobalContextType = {
  myFavors: Favor[];
  setMyFavors: (newMyFavors: Favor[]) => void;
  nearbyFavors: Favor[];
  setNearbyFavors: (newMyNearbyFavors: Favor[]) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [myFavors, setMyFavors] = useState<Favor[]>(MY_FAVORS);
    const [nearbyFavors, setNearbyFavors] = useState<Favor[]>(NEARBY_FAVORS);

  return (
    <GlobalContext.Provider value={{ myFavors, setMyFavors, nearbyFavors, setNearbyFavors }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobal must be used within GlobalProvider");
  return context;
}
