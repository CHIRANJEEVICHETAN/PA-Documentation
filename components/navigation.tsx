"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/" },
      { title: "Core Objectives", href: "/objectives" },
      { title: "Technical Architecture", href: "/architecture" },
    ],
  },
  {
    title: "Features",
    items: [
      { title: "Geofencing", href: "/features/geofencing" },
      { title: "Shift Management", href: "/features/shift-management" },
      { title: "Expense Management", href: "/features/expense-management" },
    ],
  },
  {
    title: "Access Control",
    items: [
      { title: "Super Admin", href: "/roles/super-admin" },
      { title: "Management", href: "/roles/management" },
      { title: "Group Admin", href: "/roles/group-admin" },
      { title: "Employee", href: "/roles/employee" },
    ],
  },
  {
    title: "Technical Specs",
    items: [
      { title: "WebSocket Communication", href: "/tech/websocket" },
      { title: "Security", href: "/tech/security" },
      { title: "Deployment", href: "/tech/deployment" },
    ],
  },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="relative">
      {/* Mobile Navigation */}
      <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b bg-background px-4 lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0" title="Navigation Menu">
            <NavItems pathname={pathname} setOpen={setOpen} />
          </SheetContent>
        </Sheet>
        <div className="flex-1">
          <h2 className="text-lg font-semibold">ParrotAnalyzer</h2>
        </div>
      </div>

      {/* Desktop Navigation */}
      <aside className="hidden lg:block fixed inset-y-0 z-30 w-[300px] border-r bg-background">
        <NavItems pathname={pathname} />
      </aside>
    </div>
  )
}

function NavItems({ pathname, setOpen }: { pathname: string; setOpen?: (open: boolean) => void }) {
  return (
    <ScrollArea className="h-full py-6">
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold tracking-tight">ParrotAnalyzer</h2>
        <p className="text-sm text-muted-foreground">Documentation</p>
      </div>
      <div className="space-y-4">
        {navigation.map((section) => (
          <div key={section.title} className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              {section.title}
            </h2>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setOpen?.(false)}
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}