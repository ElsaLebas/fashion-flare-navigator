
import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  className?: string;
  backgroundClass?: string;
}

const FeaturedProducts = ({ 
  title, 
  products, 
  className = "", 
  backgroundClass = "bg-white" 
}: FeaturedProductsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = searchQuery 
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className={`container-custom ${className}`}>
        <h2 className="section-title text-center">{title}</h2>
        
        <div className="w-full max-w-md mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-3 text-gray-400" size={18} />
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No products found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
