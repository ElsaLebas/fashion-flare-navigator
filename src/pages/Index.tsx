
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";
import ShopByOccasion from "@/components/ShopByOccasion";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* Shop by Occasion */}
        <ShopByOccasion title="Shop by Occasion" />

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

        {/* Newsletter */}
        <NewsletterSignup />
      </main>

      <Footer />
    </>
  );
};

export default Index;
