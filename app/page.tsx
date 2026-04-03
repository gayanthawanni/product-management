"use client"

import { useState, useMemo } from "react"
import { Plus, Sparkles } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { SearchBar } from "@/components/search-bar"
import { ProductGrid } from "@/components/product-grid"
import { ProductForm } from "@/components/product-form"
import { StatsCards } from "@/components/stats-cards"
import { QuickActions } from "@/components/quick-actions"
import { RecentActivity } from "@/components/recent-activity"
import { useProducts } from "@/hooks/use-products"
import type { Product } from "@/lib/types"

export default function ProductManagementPage() {
  const { products, isLoading, addProduct, updateProduct, deleteProduct } = useProducts()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products

    const query = searchQuery.toLowerCase()
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    )
  }, [products, searchQuery])

  const handleAddProduct = () => {
    setEditingProduct(null)
    setIsFormOpen(true)
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setIsFormOpen(true)
  }

  const handleSubmit = (data: Omit<Product, "id" | "createdAt">) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, data)
      toast.success("Product updated", {
        description: `${data.name} has been updated successfully.`,
      })
    } else {
      addProduct(data)
      toast.success("Product added", {
        description: `${data.name} has been added to your catalog.`,
      })
    }
  }

  const handleDelete = (id: string) => {
    const product = products.find((p) => p.id === id)
    deleteProduct(id)
    toast.success("Product deleted", {
      description: `${product?.name || "Product"} has been removed from your catalog.`,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-chart-3/15 rounded-full blur-3xl" />
      </div>

      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Product Dashboard
                  </h1>
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <p className="text-muted-foreground mt-1">
                  Manage your product catalog with ease. Add, edit, or remove products.
                </p>
              </div>
              <Button 
                onClick={handleAddProduct} 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Product
              </Button>
            </div>

            {/* Stats Cards */}
            <StatsCards products={products} />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              {/* Products Section - 3 columns */}
              <div className="xl:col-span-3 space-y-4">
                {/* Search and Filter Bar */}
                <div className="flex items-center justify-between gap-4 flex-wrap p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-muted-foreground">
                      {filteredProducts.length === products.length
                        ? `${products.length} product${products.length !== 1 ? "s" : ""}`
                        : `${filteredProducts.length} of ${products.length} products`}
                    </p>
                  </div>
                </div>

                {/* Product Grid */}
                <ProductGrid
                  products={filteredProducts}
                  isLoading={isLoading}
                  onEdit={handleEditProduct}
                  onDelete={handleDelete}
                  onAddProduct={handleAddProduct}
                  isSearching={searchQuery.length > 0}
                />
              </div>

              {/* Sidebar Content - 1 column */}
              <div className="space-y-4">
                <QuickActions onAddProduct={handleAddProduct} />
                <RecentActivity products={products} />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Product Form Dialog */}
      <ProductForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        onSubmit={handleSubmit}
        initialData={editingProduct}
        mode={editingProduct ? "edit" : "add"}
      />
    </div>
  )
}
