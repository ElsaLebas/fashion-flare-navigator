import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";
import { getFeaturedProducts, getProductById } from "@/data/interfaces";
import { useToast } from "@/components/ui/use-toast";
import { Minus, Plus, Star, Truck, RefreshCcw, Heart } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(Number(productId));
  const similarProducts = getFeaturedProducts().filter(p => p.id !== Number(productId)).slice(0, 4);
  const { toast } = useToast();

  const [mainImage, setMainImage] = useState(product?.images[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    if (!selectedColor) {
      toast({
        title: "Please select a color",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Added to cart",
      description: `${product?.name} - Size: ${selectedSize}, Color: ${selectedColor}, Quantity: ${quantity}`,
    });
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount / 100)
    : product.price;

  return (
    <>
      <Navbar />

      <main className="pb-16">
        <div className="container-custom py-8">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="text-sm">
              <Link to="/" className="text-gray-500 hover:text-fashion-burgundy">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link
                to={`/category/${product.category}`}
                className="text-gray-500 hover:text-fashion-burgundy capitalize"
              >
                {product.category}
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">{product.name}</span>
            </nav>
          </div>

          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Images */}
            <div>
              <div className="mb-4 aspect-square overflow-hidden">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`aspect-square border-2 overflow-hidden ${
                      mainImage === image ? 'border-fashion-black' : 'border-transparent'
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-serif text-3xl font-medium mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">36 reviews</span>
              </div>

              <div className="mb-6">
                {product.discount ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-medium text-fashion-burgundy">
                      ${discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="bg-fashion-burgundy text-white px-2 py-1 text-xs font-medium">
                      {product.discount}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-8">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Color: {selectedColor}</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`
                        border-2 px-4 py-2
                        ${selectedColor === color
                          ? 'border-fashion-black'
                          : 'border-fashion-gray'}
                      `}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Size: {selectedSize}</h3>
                  <button className="text-fashion-burgundy text-sm underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`
                        border-2 min-w-[3rem] py-2 text-center
                        ${selectedSize === size
                          ? 'border-fashion-black bg-fashion-black text-white'
                          : 'border-fashion-gray'}
                      `}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex border border-fashion-gray w-32">
                  <button
                    className="px-3 py-2 border-r border-fashion-gray"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center outline-none"
                  />
                  <button
                    className="px-3 py-2 border-l border-fashion-gray"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex space-x-4 mb-8">
                <button
                  className="flex-grow bg-fashion-black text-white py-3 font-medium hover:bg-fashion-burgundy transition-colors"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button className="border border-fashion-gray p-3">
                  <Heart size={24} />
                </button>
              </div>

              {/* Shipping Info */}
              <div className="border-t border-b border-fashion-gray py-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Truck size={20} className="shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Free Shipping</h4>
                    <p className="text-sm text-gray-500">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RefreshCcw size={20} className="shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Free Returns</h4>
                    <p className="text-sm text-gray-500">Within 30 days of purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Products */}
          <div className="mt-16">
            <h2 className="section-title">You May Also Like</h2>
            <div className="product-grid">
              {similarProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative overflow-hidden">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

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
                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="text-fashion-black font-medium mb-1 hover:text-fashion-burgundy transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center space-x-2">
                      {product.discount ? (
                        <>
                          <span className="text-fashion-burgundy font-medium">
                            ${(product.price - (product.price * product.discount / 100)).toFixed(2)}
                          </span>
                          <span className="text-gray-500 line-through text-sm">
                            ${product.price.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="font-medium">${product.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductDetail;
