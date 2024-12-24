import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from "next/navigation"

const features = {
  "geofencing": {
    title: "Geofencing and Location Tracking",
    description: "Advanced real-time location monitoring and management",
    details: [
      "Real-time geographical monitoring",
      "Customizable geofence zones",
      "Automated entry/exit logging",
      "Compliance and security alerts"
    ]
  },
  "shift-management": {
    title: "Shift Management System",
    description: "Comprehensive shift planning and management solution",
    details: [
      "Dynamic shift creation",
      "Automated scheduling",
      "Attendance tracking",
      "Overtime calculation",
      "Shift swap and management workflows"
    ]
  },
  "expense-management": {
    title: "Expense Management",
    description: "Streamlined expense tracking and approval system",
    details: [
      "Multi-category expense tracking",
      "Photographic receipt upload",
      "Approval workflow",
      "Expense analytics and reporting",
      "Integration with payroll systems"
    ]
  }
}

export default function FeaturePage({ params }: { params: { feature: string } }) {
  const feature = features[params.feature as keyof typeof features]
  
  if (!feature) {
    notFound()
  }

  return (
    <div className="container space-y-8 py-8">
      <PageHeader
        title={feature.title}
        description={feature.description}
      />

      <Card>
        <CardHeader>
          <CardTitle>Key Capabilities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {feature.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}