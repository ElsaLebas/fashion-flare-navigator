
import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface HitProps {
  hit: {
    objectID: string;
    name: string;
    price: {
      value: number;
      discounted_value?: number;
      discount_percent?: number;
    };
    primary_image: string;
    images: string[];
    categoryPageId: string[];
    slug: string;
  };
}

const AlgoliaProductHit = ({ hit }: HitProps) => {
  const { objectID, name, price, primary_image, slug } = hit;
  const hasDiscount = price.discount_percent && price.discount_percent > 0;
  
  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <Link to={`/product/${slug}`}>
          <img 
            src={primary_image} 
            alt={name} 
            className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-fashion-burgundy text-white px-2 py-1 text-xs font-medium">
            {price.discount_percent}% OFF
          </div>
        )}
        
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 opacity-70 hover:opacity-100 transition-opacity">
          <Heart size={18} className="text-fashion-black" />
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-fashion-black text-white py-2 text-sm font-medium hover:bg-fashion-burgundy transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="mt-4 px-1">
        <Link to={`/product/${slug}`} className="block">
          <h3 className="text-fashion-black font-medium mb-1 hover:text-fashion-burgundy transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center space-x-2">
          {hasDiscount ? (
            <>
              <span className="text-fashion-burgundy font-medium">${price.discounted_value?.toFixed(2)}</span>
              <span className="text-gray-500 line-through text-sm">${price.value.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-medium">${price.value.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgoliaProductHit;
