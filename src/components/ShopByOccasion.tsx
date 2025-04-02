
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface OccasionItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface ShopByOccasionProps {
  title: string;
}

const ShopByOccasion = ({ title }: ShopByOccasionProps) => {
  const occasions: OccasionItem[] = [
    {
      id: "casual",
      title: "Casual Day Out",
      image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "/category/women?occasion=casual"
    },
    {
      id: "formal",
      title: "Formal Evening",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=783&q=80",
      link: "/category/women?occasion=formal"
    },
    {
      id: "office",
      title: "Office Wear",
      image: "https://images.unsplash.com/photo-1548454782-15b189d129ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "/category/women?occasion=office"
    },
    {
      id: "wedding",
      title: "Wedding Guest",
      image: "https://images.unsplash.com/photo-1623091410901-00e2d268ee37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "/category/women?occasion=wedding"
    },
    {
      id: "party",
      title: "Party Night",
      image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "/category/women?occasion=party"
    },
    {
      id: "vacation",
      title: "Vacation Vibes",
      image: "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "/category/women?occasion=vacation"
    },
    {
      id: "active",
      title: "Active & Sporty",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "/category/women?occasion=active"
    },
    {
      id: "cozy",
      title: "Cozy & Comfy",
      image: "https://images.unsplash.com/photo-1614141882592-4356e9661c71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      link: "/category/women?occasion=cozy"
    },
    {
      id: "date",
      title: "Date Night",
      image: "https://images.unsplash.com/photo-1565128939079-0d525e675a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "/category/women?occasion=date"
    }
  ];

  return (
    <section className="py-16 bg-fashion-cream">
      <div className="container-custom">
        <h2 className="section-title text-center">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {occasions.map((occasion) => (
            <Link key={occasion.id} to={occasion.link}>
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

export default ShopByOccasion;
