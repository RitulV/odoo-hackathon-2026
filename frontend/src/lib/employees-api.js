import { apiFetch } from "./api";

export function getEmployees() {
  return apiFetch("/employees");
}
