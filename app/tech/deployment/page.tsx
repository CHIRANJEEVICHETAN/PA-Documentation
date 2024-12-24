import { PageHeader } from "@/components/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DeploymentPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Deployment Strategy"
        description="Cloud infrastructure and deployment processes"
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cloud Infrastructure</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Backend hosted on Azure App Service</li>
              <li>Database on Azure PostgreSQL</li>
              <li>WebSocket support via Azure SignalR Service</li>
              <li>Content delivery through Azure CDN</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CI/CD Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Automated testing with GitHub Actions</li>
              <li>Continuous integration and deployment</li>
              <li>Mobile app distribution through app stores</li>
              <li>Over-the-air updates via Expo</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
