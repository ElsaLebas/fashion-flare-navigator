
import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface FeaturedProductsProps {
  title: string;
  products: Product[];
}

const FeaturedProducts = ({ title, products }: FeaturedProductsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
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
