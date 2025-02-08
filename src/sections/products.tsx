import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
  productID: string;
  name: string;
  description: string;
  productCategory: { name: string };
  productMedia: { media_url: string }[];
}

interface Category {
  categoryID: string;
  name: string;
  description: string;
  media_url: string;
}

interface Props {
  className?: string;
  cardData: Category | Product;
}

const ProductCard = ({ cardData, className }: Props) => {
  if ("productID" in cardData) {
    return (
      <div
        className={`card relative flex-shrink-0 flex flex-col overflow-hidden rounded-3xl bg-white transition-transform transform w-full ${className}`}
      >
        {/* Image */}
        <Link
          href={`/products/${cardData.productID}?name=${cardData.name}&category=${cardData.productCategory.name}`}
          className="relative w-full h-48 overflow-hidden rounded-t-lg"
        >
          <Image
            src={cardData.productMedia[0].media_url}
            alt={cardData.name}
            className="object-contain w-full h-full shadow-lg"
            width={500}
            height={300}
          />
        </Link>

        {/* Title and Description */}
        <Link
          href={`/products/${cardData.productID}?name=${cardData.name}&category=${cardData.productCategory.name}`}
          className="p-6 flex flex-col"
        >
          <h5 className="text-2xl font-semibold text-slate-700">
            {cardData.name}
          </h5>
          <p className="mt-2 text-sm text-gray-500">{cardData.description}</p>
        </Link>
      </div>
    );
  } else if ("categoryID" in cardData) {
    return (
      <div
        className={`card relative flex-shrink-0 flex flex-col overflow-hidden rounded-3xl bg-white transition-transform transform w-full ${className}`}
      >
        {/* Image */}
        <Link
          href={`/products?category=${cardData.name}`}
          className="relative w-full h-48 overflow-hidden rounded-t-lg"
        >
          <Image
            src={cardData.media_url}
            alt={cardData.name}
            className="object-cover w-full h-full shadow-lg"
            width={500}
            height={300}
          />
        </Link>

        {/* Title and Description */}
        <Link
          href={`/products?category=${cardData.name}`}
          className="p-6 flex flex-col"
        >
          <h5 className="text-2xl font-semibold text-slate-700">
            {cardData.name}
          </h5>
          <p className="mt-2 text-sm text-gray-500">{cardData.description}</p>
        </Link>
      </div>
    );
  }
};

// Static data for cards
const staticCards: (Product | Category)[] = [
  {
    productID: "1",
    name: "Laptop",
    description: "High-performance laptop for professionals.",
    productCategory: { name: "Electronics" },
    productMedia: [{ media_url: "/images/laptop.jpg" }],
  },
  {
    productID: "2",
    name: "Smartphone",
    description: "Latest smartphone with advanced features.",
    productCategory: { name: "Electronics" },
    productMedia: [{ media_url: "/images/smartphone.jpg" }],
  },
  {
    categoryID: "101",
    name: "Furniture",
    description: "Modern and stylish furniture collection.",
    media_url: "/images/furniture.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {staticCards.map((card, index) => (
        <ProductCard key={index} cardData={card} />
      ))}
    </div>
  );
};

export default ProductList;
