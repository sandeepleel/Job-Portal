import ProductCard from "@/components/card/produtCard";
import React from "react";

interface Props {
  BestProducts: ProductsResponse;
}

function TopProducts({ BestProducts }: Props) {
  return (
    <section className="p-6 lg:px-24">
      {/* Heading */}
      <h1 className="main-heading">Latest Listed Products</h1>
      <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {BestProducts?.result?.data?.products?.map((card, key) => (
          <ProductCard key={key} cardData={card} />
        ))}
      </div>
    </section>
  );
}

export default TopProducts;
