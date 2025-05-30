"use client"

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MaterialChecklistProps {
  materials: string[]
  className?: string
}

export function MaterialChecklist({ materials, className }: MaterialChecklistProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {materials.map((material, index) => (
        <div key={index} className="material-item">
          <div className="w-5 h-5 bg-soft-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="h-3 w-3 text-white" />
          </div>
          <span className="text-gray-700 text-sm">{material}</span>
        </div>
      ))}
    </div>
  )
} 