
import ProductCard from "@/components/card/produtCard";
import React from "react";

type Props = {
  TopSellingProducts: CategoryiesResponse;
};

function TopCategories({ TopSellingProducts }: Props) {
  console.log(TopCategories);
  return (
    <section className="p-6 lg:px-24">
      {/* Heading */}
      <h1 className="main-heading">Find Your best Product</h1>

      {/* Cards */}
      <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {TopSellingProducts?.result?.data?.categories?.map((card, key) => (
          <ProductCard key={key} cardData={card} />
        ))}
      </div>
    </section>
  );
}

export default TopCategories;
