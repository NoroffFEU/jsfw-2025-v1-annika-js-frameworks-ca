import type { ApiResponse, Product } from "../types/product";

const API_URL = "https://v2.api.noroff.dev/online-shop";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Could not fetch products");
  }

  const result: ApiResponse<Product[]> = await response.json();

  return result.data;
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/${id}`);

  if (response.status === 400) {
    throw new Error("Invalid product ID");
  }
  if (response.status === 404) {
    throw new Error("Product not found");
  }

  if (!response.ok) {
    throw new Error("Could not fetch product");
  }

  const result: ApiResponse<Product> = await response.json();

  return result.data;
}
