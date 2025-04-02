
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Configure,
  PoweredBy,
} from "react-instantsearch";
import { createInstantSearchClient } from "@/lib/algolia";
import { X, Search } from "lucide-react";
import { Product } from "@/data/products";

const Hit = ({ hit }: { hit: Product & { objectID: string } }) => (
  <Link to={`/product/${hit.id}`} className="block p-2 hover:bg-gray-100">
    <div className="flex items-center gap-3">
      <img
        src={hit.images[0]}
        alt={hit.name}
        className="w-16 h-16 object-cover"
      />
      <div>
        <h3 className="font-medium">
          <Highlight attribute="name" hit={hit} />
        </h3>
        <p className="text-fashion-burgundy">${hit.price.toFixed(2)}</p>
      </div>
    </div>
  </Link>
);

interface AlgoliaSearchProps {
  placeholder?: string;
}

const AlgoliaSearch = ({ placeholder = "Search products..." }: AlgoliaSearchProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchClient = createInstantSearchClient();

  return (
    <div className="relative">
      <button
        onClick={() => setIsSearchOpen(true)}
        className="text-fashion-black hover:text-fashion-burgundy transition-colors focus:outline-none"
      >
        <span className="sr-only">Search</span>
        <Search size={20} />
      </button>

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-serif text-lg">Search Products</h2>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-500 hover:text-fashion-black"
                >
                  <X size={20} />
                </button>
              </div>

              <InstantSearch
                searchClient={searchClient}
                indexName="products"
              >
                <Configure hitsPerPage={5} />
                <SearchBox
                  placeholder={placeholder}
                  classNames={{
                    root: "mb-4",
                    form: "relative",
                    input:
                      "w-full border border-gray-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-fashion-burgundy focus:border-fashion-burgundy",
                    submit: "absolute right-2 top-1/2 transform -translate-y-1/2",
                    submitIcon: "w-4 h-4 fill-current text-gray-500",
                    reset: "hidden",
                  }}
                />
                <div className="max-h-80 overflow-y-auto">
                  <Hits hitComponent={Hit} />
                </div>
                <div className="mt-2 text-right">
                  <PoweredBy />
                </div>
              </InstantSearch>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlgoliaSearch;
