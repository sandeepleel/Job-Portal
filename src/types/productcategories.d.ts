declare interface ProductCategies {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  categories: Category[];
}

declare interface Category {
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

type CategoryiesResponse = ApiResponse<ProductCategies>;
