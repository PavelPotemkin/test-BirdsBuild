import { Product } from '~/components/product/card/Index.vue'

export const createProductStorage = (products: Product[]): Product[] => {
  return products
}

export const addProduct = (
  products: Product[],
  product: Product
): Product[] => {
  if (products.find(p => p.id === product.id)) {
    return products
  }

  const updatedProducts = [...products]
  updatedProducts.push(product)

  return updatedProducts
}

export const removeProduct = (
  products: Product[],
  product: Product
): Product[] => {
  return [...products].filter(p => p.id !== product.id)
}
