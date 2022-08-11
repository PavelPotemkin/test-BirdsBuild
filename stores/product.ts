import { defineStore } from 'pinia'
import { Product } from '~/components/product/card/Index.vue'
import { addProduct, createProductStorage, removeProduct } from '~/domain/ProductStorage'
import { fetchPay } from '~/service/fetchPay'
import PaymentError from '~/lib/errors/PaymentError'

export type StockStorageName = 'stock'
export type FavoritesStorageName = 'favorites'
export type DealsStorageName = 'deals'

export type StorageName = StockStorageName | FavoritesStorageName | DealsStorageName

export const useProductStore = defineStore('product', {
  state: (): Record<StorageName, Product[]> => ({
    stock: null,
    favorites: null,
    deals: null
  }),

  actions: {
    initProducts ({
      stock,
      favorites,
      deals
    }: {
      stock?: Product[],
      favorites?: Product[],
      deals?: Product[]
    }) {
      this.stock = createProductStorage(stock || [])
      this.favorites = createProductStorage(favorites || [])
      this.deals = createProductStorage(deals || [])
    },

    addFav (product: Product) {
      product.favorite = true

      this.favorites = addProduct(this.favorites, product)
    },

    removeFav (product: Product) {
      product.favorite = false

      this.favorites = removeProduct(this.favorites, product)
    },

    addDeal (product: Product) {
      product.deal = true

      this.deals = addProduct(this.deals, product)
    },

    removeDeal (product: Product) {
      product.deal = false

      this.deals = removeProduct(this.deals, product)
    },

    add (name: StorageName, product: Product) {
      if (name === 'favorites') {
        this.addFav(product)
      } else if (name === 'deals') {
        this.addDeal(product)
      }
    },

    remove (name: StorageName, product: Product) {
      if (name === 'favorites') {
        this.removeFav(product)
      } else if (name === 'deals') {
        this.removeDeal(product)
      }
    },

    async pay (product: Product) {
      const data = await fetchPay(product.id)

      if (!data.ok) {
        throw new PaymentError('Ошибка оплаты')
      }

      product.payed = true
      product.favorite && this.remove('favorites', product)
      !product.deal && this.add('deals', product)
    }
  }
})
