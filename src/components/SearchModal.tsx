
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import * as algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Configure } from "react-instantsearch";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

// Replace with your own Algolia credentials
const searchClient = algoliasearch.default(
  "YOUR_ALGOLIA_APP_ID", 
  "YOUR_ALGOLIA_SEARCH_API_KEY"
);

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [mounted, setMounted] = useState(false);

  // Handle escape key press to close modal
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    document.addEventListener("keydown", handleEsc);
    setMounted(true);
    
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl max-h-[80vh] overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-serif text-xl">Search Products</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <InstantSearch
            searchClient={searchClient}
            indexName="products" // Replace with your Algolia index name
          >
            <SearchBox 
              placeholder="Search for products..." 
              classNames={{
                root: "mb-4",
                form: "relative",
                input: "w-full border border-gray-300 rounded-md py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-fashion-burgundy focus:border-fashion-burgundy",
                submitIcon: "hidden",
                resetIcon: "hidden",
                loadingIcon: "absolute right-3 top-3.5"
              }}
            />
            
            <Configure hitsPerPage={8} />
            
            <Hits 
              hitComponent={({ hit }) => <ProductHit hit={hit as unknown as Product} onClose={onClose} />}
              classNames={{
                list: "space-y-4 max-h-[60vh] overflow-y-auto",
              }} 
            />
          </InstantSearch>
        </div>
      </div>
    </div>
  );
};

interface ProductHitProps {
  hit: Product;
  onClose: () => void;
}

const ProductHit = ({ hit, onClose }: ProductHitProps) => {
  return (
    <Link 
      to={`/product/${hit.id}`} 
      className="flex items-center p-3 hover:bg-gray-50 rounded-md transition-colors"
      onClick={onClose}
    >
      <img 
        src={hit.images[0]} 
        alt={hit.name} 
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="ml-4">
        <h3 className="font-medium text-fashion-black">{hit.name}</h3>
        <p className="text-fashion-burgundy">${hit.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">{hit.category}</p>
      </div>
    </Link>
  );
};

export default SearchModal;
