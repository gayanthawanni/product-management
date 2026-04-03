"use client"

import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <Search className="h-4 w-4 text-primary" />
      </InputGroupAddon>
      <InputGroupInput
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pr-10 border-border/50 focus:border-primary/50 focus:ring-primary/20"
      />
      {value && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          onClick={() => onChange("")}
        >
          <X className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
    </InputGroup>
  )
}
