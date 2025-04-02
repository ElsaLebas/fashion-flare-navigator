
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { categories, getProductsByCategory, Product } from "@/data/products";
import { Sliders, X } from "lucide-react";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");
  
  const category = categories.find(c => c.id === categoryId);
  
  useEffect(() => {
    if (categoryId) {
      const categoryProducts = getProductsByCategory(categoryId);
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
    }
  }, [categoryId]);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by price
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by size
    if (selectedSizes.length > 0) {
      result = result.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // Filter by color
    if (selectedColors.length > 0) {
      result = result.filter(product => 
        product.colors.some(color => selectedColors.includes(color))
      );
    }
    
    // Sort products
    if (sortOption === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(result);
  }, [products, priceRange, selectedSizes, selectedColors, sortOption]);
  
  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size) 
        : [...prev, size]
    );
  };
  
  const handleColorToggle = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color) 
        : [...prev, color]
    );
  };
  
  const availableSizes = Array.from(
    new Set(products.flatMap(product => product.sizes))
  );
  
  const availableColors = Array.from(
    new Set(products.flatMap(product => product.colors))
  );
  
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
          {/* Filter Toggle (Mobile) */}
          <div className="md:hidden mb-4">
            <button 
              className="flex items-center space-x-2 bg-fashion-cream px-4 py-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Sliders size={18} />
              <span>Filter & Sort</span>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Filters (Sidebar) */}
            <aside className={`
              ${isFilterOpen ? 'block' : 'hidden'} 
              md:block md:w-64 shrink-0 pr-8
              ${isFilterOpen ? 'fixed inset-0 z-50 bg-white p-4 overflow-auto' : ''}
            `}>
              {isFilterOpen && (
                <div className="flex justify-between items-center mb-4 md:hidden">
                  <h3 className="font-medium">Filters</h3>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
              )}
              
              {/* Sort */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Sort By</h3>
                <select 
                  className="w-full border border-fashion-gray p-2"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
              
              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
              
              {/* Size Filter */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      className={`
                        border px-3 py-1 text-sm
                        ${selectedSizes.includes(size) 
                          ? 'bg-fashion-black text-white border-fashion-black' 
                          : 'border-fashion-gray text-fashion-black'}
                      `}
                      onClick={() => handleSizeToggle(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Color Filter */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      className={`
                        border px-3 py-1 text-sm
                        ${selectedColors.includes(color) 
                          ? 'bg-fashion-black text-white border-fashion-black' 
                          : 'border-fashion-gray text-fashion-black'}
                      `}
                      onClick={() => handleColorToggle(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {isFilterOpen && (
                <button 
                  className="md:hidden w-full bg-fashion-black text-white py-2 mt-4"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </button>
              )}
            </aside>
            
            {/* Products Grid */}
            <div className="flex-grow">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-sm text-gray-600">Showing {filteredProducts.length} products</p>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="product-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-500">No products match your selected filters.</p>
                  <button 
                    className="text-fashion-burgundy underline mt-2"
                    onClick={() => {
                      setPriceRange([0, 500]);
                      setSelectedSizes([]);
                      setSelectedColors([]);
                      setSortOption("default");
                    }}
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <NewsletterSignup />
      </main>
      
      <Footer />
    </>
  );
};

export default CategoryPage;
