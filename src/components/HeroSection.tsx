
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] bg-fashion-cream overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Fashion model"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-fashion-black bg-opacity-20"></div>
      </div>

      <div className="relative h-full container-custom flex flex-col justify-center items-start">
        <div className="max-w-xl animate-slide-up">
          <h1 className="text-white font-serif text-4xl md:text-6xl font-medium mb-4">
            Autumn Collection 2025
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Discover timeless pieces crafted with exceptional quality and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/category/women"
              className="bg-white text-fashion-black px-8 py-3 font-medium hover:bg-opacity-90 transition-all text-center"
            >
              Shop Women
            </Link>
            <Link
              to="/category/men"
              className="bg-fashion-burgundy text-white px-8 py-3 font-medium hover:bg-opacity-90 transition-all text-center"
            >
              Shop Men
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
