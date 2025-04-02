
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { products } from "@/data/products";

interface ShopByProductOccasionProps {
  title: string;
}

const ShopByProductOccasion = ({ title }: ShopByProductOccasionProps) => {
  // Extract unique occasions from products
  const occasions = products.reduce<Array<{ id: string, title: string, image: string }>>((acc, product) => {
    if (product.occasions) {
      product.occasions.forEach(occasion => {
        // Check if this occasion is already in our accumulator
        if (!acc.some(item => item.id === occasion.toLowerCase())) {
          acc.push({
            id: occasion.toLowerCase(),
            title: occasion,
            image: product.images[0], // Use the first image of the product
          });
        }
      });
    }
    return acc;
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-8">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {occasions.map((occasion) => (
            <Link key={occasion.id} to={`/occasion/${occasion.id}`}>
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0 pb-3">
                  <AspectRatio ratio={1}>
                    <img
                      src={occasion.image}
                      alt={occasion.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </AspectRatio>
                  <div className="px-4 pt-4 pb-2 text-center">
                    <h3 className="text-lg font-medium text-fashion-black">{occasion.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByProductOccasion;
