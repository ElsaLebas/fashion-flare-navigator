
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import ShopByOccasion from "@/components/ShopByOccasion";
import NewsletterSignup from "@/components/NewsletterSignup";
import { categories, getFeaturedProducts, getNewArrivals } from "@/data/products";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  
  return (
    <>
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Categories Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="section-title text-center">Shop by Category</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/category/${category.id}`} 
                  className="group relative h-80 overflow-hidden"
                >
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-fashion-black bg-opacity-30 group-hover:bg-opacity-20 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 px-8 py-4 text-center">
                      <h3 className="font-serif text-xl text-fashion-black">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Shop by Occasion */}
        <ShopByOccasion title="Shop by Occasion" />
        
        {/* Featured Products */}
        <FeaturedProducts title="Featured Collection" products={featuredProducts} />
        
        {/* Banner */}
        <section className="relative h-96 bg-fashion-black overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80" 
              alt="Fashion" 
              className="w-full h-full object-cover object-center opacity-70"
            />
          </div>
          
          <div className="relative h-full container-custom flex flex-col justify-center items-center text-center">
            <h2 className="text-white font-serif text-3xl md:text-4xl font-medium mb-4 max-w-xl">
              Craftsmanship That Speaks Volumes
            </h2>
            <p className="text-white text-lg mb-8 max-w-xl">
              Each piece is meticulously designed and crafted to ensure exceptional quality and timeless style.
            </p>
            <Link 
              to="/category/accessories" 
              className="bg-white text-fashion-black px-8 py-3 font-medium hover:bg-fashion-cream transition-all"
            >
              Explore Collection
            </Link>
          </div>
        </section>
        
        {/* New Arrivals */}
        <FeaturedProducts 
          title="New Arrivals" 
          products={newArrivals} 
          backgroundClass="bg-fashion-cream"
        />
        
        {/* Newsletter */}
        <NewsletterSignup />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
