
import { useState } from "react";
import { Product } from "@/data/interfaces";
import ProductCard from "./ProductCard";

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
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className={`container-custom ${className}`}>
        <h2 className="section-title text-center">{title}</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
