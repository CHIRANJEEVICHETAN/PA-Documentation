import { PageHeader } from "@/components/page-header"
import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from "next/navigation"

// Move data to a separate file for better organization
import { roles } from "@/lib/data/roles"

// Add generateStaticParams for static generation
export function generateStaticParams() {
  return Object.keys(roles).map((role) => ({
    role,
  }))
}

export default function RolePage({ params }: { params: { role: string } }) {
  const role = roles[params.role as keyof typeof roles]
  
  if (!role) {
    notFound()
  }

  return (
    <PageContainer>
      <PageHeader title={role.title} description={role.description} />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Responsibilities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {role.permissions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}