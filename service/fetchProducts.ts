import { Product } from '~/components/product/card/Index.vue'
import { apiUrls } from '~/api/urls'

interface ApiResponse {
    products: Product[]
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(apiUrls.products)
  const json: ApiResponse = await response.json()

  return json.products
}
