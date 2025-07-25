import { Product } from "../pages/product";

export function getAllProducts() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

type PaginatedProducts = {
  data: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
};
