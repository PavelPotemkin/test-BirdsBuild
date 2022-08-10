import { Product } from '~/components/product/card/Index.vue'

interface ApiResponse {
    products: Product[]
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/products.json')
  const json: ApiResponse = await response.json()

  return json.products
}
