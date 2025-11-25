import { Favor } from "./favor";
import { FavorInput } from "./favor-input";
/**
 * FRONTEND-ONLY STUBS — Option B:
 * These preserve the interface for later wiring to your backend.
 * They intentionally do not call any network endpoints.
 */

export async function getFavors(): Promise<Favor[]> {
  // Return empty or local mock list. Replace with fetch/axios later.
  return [];
}

export async function getFavorById(id: string): Promise<Favor | null> {
  return null;
}

export async function createFavor(data: FavorInput): Promise<{ success: boolean; id?: string }> {
  return { success: true, id: "stub-id" };
}

export async function login(email: string, password: string): Promise<{ success: boolean; token?: string }> {
  return { success: true, token: "stub-token" };
}
