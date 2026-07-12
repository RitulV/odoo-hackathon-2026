export const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  const body = await res.json().catch(() => null);

  if (!res.ok || body?.success === false) {
    throw new Error(
      body?.message ?? `Request failed with status ${res.status}`,
    );
  }

  return body.data;
}
