import Layout from "@/layouts";
import Hero from "@/sections/hero";
import TopCategories from "@/sections/top-categories";
import TopProducts from "@/sections/top-products";
import Contact from "@/sections/contact";
import { Backgrounds } from "@/lib/constant";

interface Props {
  latestProductsData: ProductsResponse;
  topCategoriesData: CategoryiesResponse;
}

const staticLatestProductsData = {
  products: [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
    { id: 7, name: "Product 7", price: 700 },
    { id: 8, name: "Product 8", price: 800 },
  ],
};

const staticTopCategoriesData = {
  categories: [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
    { id: 6, name: "Category 6" },
    { id: 7, name: "Category 7" },
    { id: 8, name: "Category 8" },
  ],
};

export default function Home({ latestProductsData, topCategoriesData }: Props) {
  return (
    <Layout>
      <Hero Backgrounds={Backgrounds} />
      <TopCategories TopSellingProducts={topCategoriesData} />
      <TopProducts BestProducts={latestProductsData} />
      <Contact />
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      latestProductsData: staticLatestProductsData,
      topCategoriesData: staticTopCategoriesData,
    },
  };
}
