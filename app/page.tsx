import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  GitFork,
  Star,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8 lg:p-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          ParrotAnalyzer Documentation
        </h1>
        <p className="text-lg text-muted-foreground max-w-[700px]">
          Advanced workforce management solution combining real-time tracking,
          intelligent scheduling, and streamlined expense management.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button asChild size="lg">
          <Link href="/objectives">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          <GitFork className="mr-2 h-4 w-4" />
          Fork on GitHub
        </Button>
      </div>

      {/* Key Features Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <Users className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Real-time Tracking</h3>
          <p className="text-muted-foreground">
            Advanced geofencing and real-time location tracking for workforce
            management
          </p>
        </Card>
        <Card className="p-6">
          <Star className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Smart Shifts</h3>
          <p className="text-muted-foreground">
            Intelligent shift management with automated scheduling and
            attendance tracking
          </p>
        </Card>
        <Card className="p-6">
          <GitFork className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Expense Control</h3>
          <p className="text-muted-foreground">
            Streamlined expense reporting with multi-tier approval workflow
          </p>
        </Card>
      </div>

      {/* Technical Highlights */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
          Technical Highlights
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                End-to-end encryption with JWT authentication and RBAC
                implementation
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Optimized for speed with code splitting and efficient state
                management
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Scalability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Microservices architecture designed for enterprise-level scaling
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
          Quick Links
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/architecture" className="block">
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>Technical Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore the complete technical stack and infrastructure
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/roles/super-admin" className="block">
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>Access Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn about role-based permissions and user hierarchy
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}