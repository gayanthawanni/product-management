"use client"

import { useState } from "react"
import { 
  LayoutDashboard, 
  Package, 
  Tags, 
  BarChart3, 
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Package, label: "Products", active: false },
  { icon: Tags, label: "Categories", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside 
      className={cn(
        "hidden lg:flex flex-col h-[calc(100vh-4rem)] sticky top-16 border-r border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300",
        collapsed ? "w-16" : "w-56"
      )}
    >
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item, index) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
              index === 0
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            )}
          >
            <item.icon className={cn("h-5 w-5 shrink-0", index === 0 && "text-primary-foreground")} />
            {!collapsed && <span className="truncate">{item.label}</span>}
          </button>
        ))}
      </nav>
      
      <div className="p-3 border-t border-border/50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full justify-center"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </aside>
  )
}
