
import { useParams } from "react-router-dom";
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { Hits, InstantSearch, Configure, Pagination } from 'react-instantsearch';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { occasions } from "@/data/interfaces";
import AlgoliaProductHit from "@/components/AlgoliaProductHit";

// Create the Algolia client outside the component to prevent recreation on each render
const searchClient = algoliasearch('OCMWCWP51K', '03e24dfa26a757a423d97bd062a0fa1b');

const OccasionPage = () => {
  const { occasionId } = useParams<{ occasionId: string }>();
  const occasion = occasions.find(o => o.title === occasionId);

  if (!occasion) {
    return <div>Occasion not found</div>;
  }

  const filter = `occasion:"${occasionId}"`;

  return (
    <>
      <Navbar />

      <main className="pb-16">
        {/* Occasion Banner */}
        <div className="relative h-80 bg-fashion-cream overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={occasion.image}
              alt={occasion.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-fashion-black bg-opacity-40"></div>
          </div>

          <div className="relative h-full container-custom flex flex-col justify-center items-center text-center">
            <h1 className="text-white font-serif text-4xl md:text-5xl font-medium mb-4">
              {occasion.title}
            </h1>
          </div>
        </div>

        <div className="container-custom py-8">
          {/* Algolia InstantSearch */}
          <div className="w-full">
            <InstantSearch searchClient={searchClient} indexName="fashion">
              <Configure filters={filter} hitsPerPage={30} />

              <div className="mb-6">
                <p className="text-sm text-gray-600">Showing {occasionId} products</p>
              </div>

              <Hits
                hitComponent={AlgoliaProductHit}
                classNames={{ list: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" }}
              />

              <Pagination
                classNames={{
                  root: "flex justify-center mt-8",
                  list: "flex space-x-2",
                  item: "px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100",
                  selectedItem: "px-3 py-2 border border-gray-900 bg-gray-900 text-white rounded-lg",
                  disabledItem: "px-3 py-2 text-gray-400 cursor-not-allowed"
                }}
              />
            </InstantSearch>
          </div>
        </div>

        <NewsletterSignup />
      </main>

      <Footer />
    </>
  );
};

export default OccasionPage;
