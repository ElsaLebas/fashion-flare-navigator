
import { useParams } from "react-router-dom";
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { Hits, InstantSearch, Configure } from 'react-instantsearch';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { categories } from "@/data/products";
import AlgoliaProductHit from "@/components/AlgoliaProductHit";

const searchClient = algoliasearch('OCMWCWP51K', '03e24dfa26a757a423d97bd062a0fa1b');

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(c => c.id === categoryId);

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
          {/* Algolia InstantSearch */}
          <div className="w-full">
            <InstantSearch searchClient={searchClient} indexName="fashion">
              {/* Filter using hierarchical_categories.lvl0 attribute */}
              <Configure filters={`hierarchical_categories.lvl0:"${categoryId}"`} />
              
              <div className="mb-6">
                <p className="text-sm text-gray-600">Browse our {category.name} collection</p>
              </div>

              <div className="product-grid">
                <Hits hitComponent={AlgoliaProductHit} />
              </div>
            </InstantSearch>
          </div>
        </div>

        <NewsletterSignup />
      </main>

      <Footer />
    </>
  );
};

export default CategoryPage;
