
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { occasions } from "@/data/interfaces";

interface ShopByOccasionProps {
  title: string;
}

const ShopByOccasion = ({ title }: ShopByOccasionProps) => {
  const navigate = useNavigate();

  const handleCardClick = (link: string) => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-16 bg-fashion-cream">
      <div className="container-custom">
        <h2 className="section-title text-center">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {occasions.map((occasion) => (
            <div 
              key={occasion.id} 
              onClick={() => handleCardClick(occasion.link)}
              className="cursor-pointer"
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByOccasion;
