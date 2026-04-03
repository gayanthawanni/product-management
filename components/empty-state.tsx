"use client"

import { Package, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Empty, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty"

interface EmptyStateProps {
  onAddProduct: () => void
  isSearching?: boolean
}

export function EmptyState({ onAddProduct, isSearching }: EmptyStateProps) {
  if (isSearching) {
    return (
      <Empty className="my-12">
        <EmptyMedia>
          <div className="p-4 rounded-full bg-gradient-to-br from-secondary to-muted">
            <Package className="h-12 w-12 text-primary" />
          </div>
        </EmptyMedia>
        <EmptyTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          No products found
        </EmptyTitle>
        <EmptyDescription>
          No products match your search criteria. Try a different search term.
        </EmptyDescription>
      </Empty>
    )
  }

  return (
    <Empty className="my-12">
      <EmptyMedia>
        <div className="p-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg shadow-primary/10">
          <Package className="h-14 w-14 text-primary" />
        </div>
      </EmptyMedia>
      <EmptyTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-2xl">
        No products yet
      </EmptyTitle>
      <EmptyDescription className="text-base">
        Get started by adding your first product to the catalog.
      </EmptyDescription>
      <EmptyContent>
        <Button onClick={onAddProduct} className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
          <Plus className="h-4 w-4 mr-2" />
          Add Your First Product
        </Button>
      </EmptyContent>
    </Empty>
  )
}
