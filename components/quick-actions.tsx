"use client"

import { Plus, Upload, Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuickActionsProps {
  onAddProduct: () => void
}

export function QuickActions({ onAddProduct }: QuickActionsProps) {
  const actions = [
    { icon: Plus, label: "Add Product", onClick: onAddProduct, primary: true },
    { icon: Upload, label: "Import", onClick: () => {}, primary: false },
    { icon: Download, label: "Export", onClick: () => {}, primary: false },
    { icon: Filter, label: "Filter", onClick: () => {}, primary: false },
  ]

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.primary ? "default" : "outline"}
            size="sm"
            onClick={action.onClick}
            className={action.primary 
              ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-md shadow-primary/20" 
              : "border-border/50 hover:bg-secondary/80"
            }
          >
            <action.icon className="h-4 w-4 mr-1.5" />
            {action.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
