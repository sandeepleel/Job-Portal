import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  cardData: Category | Product;
}

const ProductCard = ({ cardData, className }: Props) => {
  // Data for cards

  if ("productID" in cardData) {
    return (
      <div
        className={`card relative flex-shrink-0 flex flex-col  overflow-hidden rounded-3xl bg-white transition-transform transform w-full ${className}`}
      >
        {/* Image */}
        <Link
          href={`/products/${cardData.productID}?name=${cardData.name}&category=${cardData.productCategory.name}`}
          className="relative w-full h-48 overflow-hidden rounded-t-lg"
        >
          <Image
            src={cardData.productMedia[0].media_url}
            alt={cardData.name}
            className="object-contain rounded-t-none3xl w-full h-full shadow-lg"
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
        className={`card relative flex-shrink-0 flex flex-col  overflow-hidden rounded-3xl bg-white transition-transform transform w-full ${className}`}
      >
        {/* Image */}
        <Link
          href={`/products?category=${cardData.name}`}
          className="relative w-full h-48 overflow-hidden rounded-t-lg"
        >
          <Image
            src={cardData.media_url}
            alt={cardData.name}
            className="object-cover rounded-t-none3xl w-full h-full shadow-lg"
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

export default ProductCard;
