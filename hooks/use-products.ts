"use client"

import { useState, useEffect, useCallback } from "react"
import type { Product } from "@/lib/types"

const STORAGE_KEY = "products"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load products from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setProducts(JSON.parse(stored))
      } catch {
        setProducts([])
      }
    }
    setIsLoading(false)
  }, [])

  // Save products to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    }
  }, [products, isLoading])

  const addProduct = useCallback((product: Omit<Product, "id" | "createdAt">) => {
    const newProduct: Product = {
      ...product,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    setProducts((prev) => [newProduct, ...prev])
    return newProduct
  }, [])

  const updateProduct = useCallback((id: string, updates: Partial<Omit<Product, "id" | "createdAt">>) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...updates } : product
      )
    )
  }, [])

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }, [])

  const getProduct = useCallback(
    (id: string) => products.find((product) => product.id === id),
    [products]
  )

  return {
    products,
    isLoading,
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
  }
}
