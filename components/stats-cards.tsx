"use client"

import { Package, DollarSign, TrendingUp, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/types"

interface StatsCardsProps {
  products: Product[]
}

export function StatsCards({ products }: StatsCardsProps) {
  const totalProducts = products.length
  const totalValue = products.reduce((sum, p) => sum + p.price, 0)
  const avgPrice = totalProducts > 0 ? totalValue / totalProducts : 0
  const highestPrice = totalProducts > 0 ? Math.max(...products.map(p => p.price)) : 0

  const stats = [
    {
      label: "Total Products",
      value: totalProducts.toString(),
      icon: Package,
      gradient: "from-primary to-primary/70",
      bgGradient: "from-primary/20 to-primary/5",
    },
    {
      label: "Total Value",
      value: `$${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: DollarSign,
      gradient: "from-accent to-accent/70",
      bgGradient: "from-accent/20 to-accent/5",
    },
    {
      label: "Average Price",
      value: `$${avgPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: TrendingUp,
      gradient: "from-chart-3 to-chart-3/70",
      bgGradient: "from-chart-3/20 to-chart-3/5",
    },
    {
      label: "Highest Price",
      value: `$${highestPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: ShoppingBag,
      gradient: "from-chart-5 to-chart-5/70",
      bgGradient: "from-chart-5/20 to-chart-5/5",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card 
          key={stat.label} 
          className={`relative overflow-hidden border-border/50 bg-gradient-to-br ${stat.bgGradient} backdrop-blur-sm`}
        >
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-muted-foreground truncate">
                  {stat.label}
                </p>
                <p className="text-lg font-bold text-foreground truncate">
                  {stat.value}
                </p>
              </div>
            </div>
          </CardContent>
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-gradient-to-br opacity-10 blur-2xl" 
               style={{ background: `linear-gradient(135deg, var(--primary), var(--accent))` }} />
        </Card>
      ))}
    </div>
  )
}
