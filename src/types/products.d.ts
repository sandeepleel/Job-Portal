declare interface Products {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  products: Product[];
}

declare interface Product {
  productID: string;
  userID: string;
  categoryID: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  is_deleted: string;
  created_dt: string;
  created_by: string;
  updated_dt: string;
  updated_by: string;
  brand: string;
  original_price: string | null;
  brand_details: string;
  spec_details: string;
  productMedia: ProductMedum[];
  productCategory: ProductCategory;
}

declare interface ProductMedum {
  mediaID: string;
  productID: string;
  media_type: string;
  media_url: string;
  is_deleted: string;
  created_dt: string;
  created_by: string;
  updated_dt: string;
  updated_by: string;
  multiple_mediaurls: string;
}

declare interface ProductCategory {
  categoryID: string;
  name: string;
  description: string;
  is_deleted: string;
  created_dt: string;
  created_by: string;
  updated_dt: string;
  updated_by: string;
  sort_order: number;
  media_url: string;
}

type ProductsResponse = ApiResponse<Products>;
