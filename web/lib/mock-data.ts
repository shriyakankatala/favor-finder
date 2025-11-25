// web/lib/mock-data.ts

import { Favor } from "./favor";

export const MY_FAVORS: Favor[] = [
  {
    id: "1",
    title: "Pick up groceries",
    description: "123 Main St",
    reward: "$10",
  },
  {
    id: "2",
    title: "Walk the dog",
    description: "123 Main St",
    reward: "$5",
  },
];

export const NEARBY_FAVORS: Favor[] = [
  {
    id: "3",
    title: "Move a couch",
    description: "456 Oak Ave",
    reward: "$25",
    distance: "1.2 mi",
    eta: "15 min",
  },
  {
    id: "4",
    title: "Math tutoring",
    description: "789 Pine St",
    reward: "$18",
    distance: "0.6 mi",
    eta: "8 min",
  },
];

// Handy combined list for detail page lookup
export const ALL_FAVORS: Favor[] = [...MY_FAVORS, ...NEARBY_FAVORS];
