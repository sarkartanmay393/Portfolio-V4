import { cache } from "react";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID!;
const NAMESPACE_ID = process.env.CLOUDFLARE_KV_NAMESPACE_ID!;
const TOKEN = process.env.CLOUDFLARE_KV_TOKEN!;

const BASE_URL = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}`;

const REVALIDATE_SECONDS = 60;

// cache() dedupes calls with identical args within a single render pass, so
// Navbar/NavbarBigScreen/layout/page can each call this without triggering
// multiple network round-trips for the same request.
export const getKVBulk = cache(async (keys: string[]): Promise<Record<string, string>> => {
  const res = await fetch(`${BASE_URL}/bulk/get`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ keys }),
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`Cloudflare KV bulk read failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  return json.result.values as Record<string, string>;
});
