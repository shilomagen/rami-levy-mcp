import { z } from "zod";
import { ramiLevyRequest } from "../common/utils.js";
import { SearchResponseSchema } from "../common/types.js";

const CATALOG_API_URL = "https://www.rami-levy.co.il/api/catalog";

// Schema definitions
export const SearchItemsSchema = z.object({
  q: z.string().describe("Search query"),
  store: z
    .string()
    .default("331")
    .describe("Store identifier (default: '331')"),
  aggs: z.number().default(1).describe("Aggregation flag"),
});

// Function implementations
export async function searchItems(params: z.infer<typeof SearchItemsSchema>) {
  const response = await ramiLevyRequest(CATALOG_API_URL, {
    method: "POST",
    body: {
      q: params.q,
      store: params.store,
      aggs: params.aggs,
    },
  });

  // Parse and transform the response to include only the fields we want
  return SearchResponseSchema.parse(response);
}
