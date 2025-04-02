
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
      image: "https://plus.unsplash.com/premium_photo-1688497831384-e40b2e5615cd?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/occasion/casual"
    },
    {
      id: "formal",
      title: "Formal Evening",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=783&q=80",
      link: "/occasion/formal"
    },
    {
      id: "office",
      title: "Office Wear",
      image: "https://images.unsplash.com/photo-1636191284490-fff58f369ec6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/occasion/office"
    },
    {
      id: "wedding",
      title: "Wedding Guest",
      image: "https://images.unsplash.com/photo-1518102885802-e869dcb9da8b?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/occasion/wedding"
    },
    {
      id: "party",
      title: "Party Night",
      image: "https://plus.unsplash.com/premium_photo-1699389167605-88e5bc060a10?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/occasion/party"
    },
    {
      id: "vacation",
      title: "Vacation Vibes",
      image: "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "/occasion/vacation"
    },
    {
      id: "active",
      title: "Active & Sporty",
      image: "https://plus.unsplash.com/premium_photo-1664885647983-772bde237f43?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/occasion/active"
    },
    {
      id: "cozy",
      title: "Cozy & Comfy",
      image: "https://images.unsplash.com/photo-1675379086716-95bf8a4d22f2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/occasion/cozy"
    },
    {
      id: "date",
      title: "Date Night",
      image: "https://images.unsplash.com/photo-1629123384492-ebee058af32e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/occasion/date"
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
