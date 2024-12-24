"use client"

import { cn } from "@/lib/utils"

interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("container space-y-8 py-8 px-4 md:px-8", className)}>
      {children}
    </div>
  )
}