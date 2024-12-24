import { PageHeader } from "@/components/page-header"
import { PageContainer } from "@/components/layout/page-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, LineChart, Shield, Workflow } from "lucide-react"

const objectives = [
  {
    title: "Operational Efficiency",
    description: "Streamline workforce management processes and reduce administrative overhead",
    icon: Workflow,
  },
  {
    title: "Workforce Insights",
    description: "Provide detailed analytics and reporting for data-driven decision making",
    icon: LineChart,
  },
  {
    title: "Secure Tracking",
    description: "Ensure transparent and secure employee location tracking and monitoring",
    icon: Shield,
  },
  {
    title: "Process Simplification",
    description: "Automate and simplify administrative tasks and workflows",
    icon: Target,
  },
]

export default function ObjectivesPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Core Objectives"
        description="Key goals and objectives of the ParrotAnalyzer platform"
      />
      
      <div className="grid gap-6 md:grid-cols-2">
        {objectives.map((objective) => (
          <Card key={objective.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <objective.icon className="h-5 w-5" />
                {objective.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{objective.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  )
}