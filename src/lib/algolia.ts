
import algoliasearch from "algoliasearch/lite";

export const createInstantSearchClient = () => {
  return algoliasearch(
    "ZH6901PX1J", // Your Algolia App ID
    "6be0576ff61c053d5f9a3225e2a90f76" // Your Algolia Search API Key (this should be a search-only API key)
  );
};
