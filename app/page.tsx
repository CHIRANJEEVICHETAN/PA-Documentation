import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, GitFork, Star, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-8 lg:p-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          ParrotAnalyzer Documentation
        </h1>
        <p className="text-lg text-muted-foreground">
          Advanced workforce management through cutting-edge technology
        </p>
      </div>

      <div className="flex gap-4">
        <Button asChild>
          <Link href="/objectives">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline">
          <GitFork className="mr-2 h-4 w-4" />
          Fork on GitHub
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <Users className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Real-time Tracking</h3>
          <p className="text-muted-foreground">
            Advanced geofencing and real-time location tracking for workforce management
          </p>
        </Card>
        <Card className="p-6">
          <Star className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Smart Shifts</h3>
          <p className="text-muted-foreground">
            Intelligent shift management with automated scheduling and attendance tracking
          </p>
        </Card>
        <Card className="p-6">
          <GitFork className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Expense Control</h3>
          <p className="text-muted-foreground">
            Streamlined expense reporting with multi-tier approval workflow
          </p>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter">Core Features</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Geofencing</h3>
            <p className="text-muted-foreground">
              Real-time geographical monitoring with customizable zones and automated entry/exit logging
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Shift Management</h3>
            <p className="text-muted-foreground">
              Dynamic shift creation with automated scheduling and attendance tracking
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Expense Management</h3>
            <p className="text-muted-foreground">
              Multi-category expense tracking with photographic receipt upload and approval workflow
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Access Control</h3>
            <p className="text-muted-foreground">
              Role-based access control with hierarchical permissions management
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}