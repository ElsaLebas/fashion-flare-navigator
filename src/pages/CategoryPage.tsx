
import { useParams, useNavigate } from "react-router-dom";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hits, InstantSearch, Configure, Pagination, RefinementList, RangeInput } from "react-instantsearch";
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { categories } from "@/data/interfaces";
import AlgoliaProductHit from "@/components/AlgoliaProductHit";

const searchClient = algoliasearch("OCMWCWP51K", "03e24dfa26a757a423d97bd062a0fa1b");

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((c) => c.id === categoryId);
  
  // Scroll to top on component mount or categoryId change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return <div>Category not found</div>;
  }

  const filter = `hierarchical_categories.lvl0:\"${categoryId}\"`;

  return (
    <>
      <Navbar />

      <main className="pb-16">
        <div className="relative h-80 bg-fashion-cream overflow-hidden">
          <div className="absolute inset-0">
            <img src={category.image} alt={category.name} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-fashion-black bg-opacity-40"></div>
          </div>

          <div className="relative h-full container-custom flex flex-col justify-center items-center text-center">
            <h1 className="text-white font-serif text-4xl md:text-5xl font-medium mb-4">{category.name}</h1>
          </div>
        </div>

        <div className="container-custom py-8">
          <InstantSearch searchClient={searchClient} indexName="fashion">
            <Configure filters={filter} hitsPerPage={30} />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <aside className="bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>

                <div className="mb-4">
                  <h3 className="text-md font-medium text-gray-700 mb-2">Brand</h3>
                  <RefinementList
                    attribute="brand"
                    classNames={{
                      list: "space-y-2",
                      item: "flex items-center space-x-2 text-gray-700",
                      label: "cursor-pointer hover:text-gray-900 flex w-full justify-start gap-2",
                      count: "bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full"
                    }}
                  />
                </div>

                <div className="mb-4">
                  <h3 className="text-md font-medium text-gray-700 mb-2">Occasion</h3>
                  <RefinementList
                    attribute="occasion"
                    classNames={{
                      list: "space-y-2",
                      item: "flex items-center space-x-2 text-gray-700",
                      label: "cursor-pointer hover:text-gray-900 flex w-full justify-start gap-2",
                      count: "bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full"
                    }}
                  />
                </div>

                <div className="mb-4">
                  <h3 className="text-md font-medium text-gray-700 mb-2">Sizes</h3>
                  <RefinementList
                    attribute="available_sizes"
                    classNames={{
                      list: "space-y-2",
                      item: "flex items-center space-x-2 text-gray-700",
                      label: "cursor-pointer hover:text-gray-900 flex w-full justify-start gap-2",
                      count: "bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full"
                    }}
                  />
                </div>

                <div className="mb-4">
                  <h3 className="text-md font-medium text-gray-700 mb-2">Price Range</h3>
                  <div className="flex flex-col space-y-2 p-3 border border-gray-300 rounded-lg bg-gray-50">
                    <RangeInput
                      attribute="price.value"
                      classNames={{
                        root: "flex flex-col space-y-2",
                        input: "border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-gray-400",
                        submit: "mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
                      }}
                    />
                  </div>
                </div>
              </aside>

              <div className="col-span-3">
                <div className="mb-6">
                  <p className="text-sm text-gray-600">Showing {category.name} products</p>
                </div>

                <Hits
                  hitComponent={AlgoliaProductHit}
                  classNames={{
                    list: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                  }}
                />

                <Pagination
                  classNames={{
                    root: "flex justify-center mt-8",
                    list: "flex space-x-2",
                    item: "px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100",
                    selectedItem: "px-3 py-2 border border-gray-900 bg-gray-900 text-white rounded-lg",
                    disabledItem: "px-3 py-2 text-gray-400 cursor-not-allowed",
                  }}
                />
              </div>
            </div>
          </InstantSearch>
        </div>

        <NewsletterSignup />
      </main>

      <Footer />
    </>
  );
};

export default CategoryPage;
