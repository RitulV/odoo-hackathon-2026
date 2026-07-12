import { apiFetch } from "./api";

export function getAssets() {
  return apiFetch("/assets");
}