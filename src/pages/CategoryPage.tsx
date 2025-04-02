
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { categories, getProductsByCategory, Product } from "@/data/products";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  
  const category = categories.find(c => c.id === categoryId);
  
  useEffect(() => {
    if (categoryId) {
      const categoryProducts = getProductsByCategory(categoryId);
      setProducts(categoryProducts);
    }
  }, [categoryId]);
  
  if (!category) {
    return <div>Category not found</div>;
  }
  
  return (
    <>
      <Navbar />
      
      <main className="pb-16">
        {/* Category Banner */}
        <div className="relative h-80 bg-fashion-cream overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-fashion-black bg-opacity-40"></div>
          </div>
          
          <div className="relative h-full container-custom flex flex-col justify-center items-center text-center">
            <h1 className="text-white font-serif text-4xl md:text-5xl font-medium mb-4">
              {category.name}
            </h1>
          </div>
        </div>
        
        <div className="container-custom py-8">
          {/* Products Grid - Simplified for Algolia integration */}
          <div className="w-full">
            <div className="mb-6">
              <p className="text-sm text-gray-600">Showing {products.length} products</p>
            </div>
            
            {products.length > 0 ? (
              <div className="product-grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
        
        <NewsletterSignup />
      </main>
      
      <Footer />
    </>
  );
};

export default CategoryPage;
