
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const OccasionPage = () => {
  const { occasionId } = useParams<{ occasionId: string }>();
  
  // Filter products that match the occasion
  const filteredProducts = products.filter(product => 
    product.occasions?.some(occasion => 
      occasion.toLowerCase() === occasionId?.toLowerCase()
    )
  );

  return (
    <>
      <Navbar />

      <main className="pb-16">
        {/* Occasion Banner */}
        <div className="relative h-80 bg-fashion-cream overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={filteredProducts[0]?.images[0] || "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt={occasionId}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-fashion-black bg-opacity-40"></div>
          </div>

          <div className="relative h-full container-custom flex flex-col justify-center items-center text-center">
            <h1 className="text-white font-serif text-4xl md:text-5xl font-medium mb-4 capitalize">
              {occasionId?.replace("-", " ")}
            </h1>
            <p className="text-white text-lg max-w-2xl">
              Discover our collection perfect for {occasionId?.replace("-", " ")} occasions
            </p>
          </div>
        </div>

        <div className="container-custom py-8">
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found for {occasionId?.replace("-", " ")}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-600">
                We couldn't find any products that match this occasion. Please try another category.
              </p>
            </div>
          )}
        </div>

        <NewsletterSignup />
      </main>

      <Footer />
    </>
  );
};

export default OccasionPage;
