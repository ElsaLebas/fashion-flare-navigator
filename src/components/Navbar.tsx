
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ShoppingBag } from "lucide-react";
import { categories } from "@/data/products";
import AlgoliaSearch from "./AlgoliaSearch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-bold">LUXESTYLE</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-fashion-black hover:text-fashion-burgundy transition-colors">
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="text-fashion-black hover:text-fashion-burgundy transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <AlgoliaSearch />
            <Link to="/account" className="text-fashion-black hover:text-fashion-burgundy transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-fashion-black hover:text-fashion-burgundy transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-fashion-burgundy text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-fashion-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-fashion-black hover:text-fashion-burgundy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="text-fashion-black hover:text-fashion-burgundy transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
