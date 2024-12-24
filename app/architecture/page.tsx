import { PageHeader } from "@/components/page-header"
import { PageContainer } from "@/components/layout/page-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ArchitecturePage() {
  return (
    <PageContainer>
      <PageHeader
        title="Technical Architecture"
        description="Comprehensive overview of ParrotAnalyzer's technical stack and infrastructure"
      />

      <Tabs defaultValue="frontend">
        <TabsList>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
        </TabsList>
        
        <TabsContent value="frontend" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Ecosystem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Framework</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>React Native with Expo for cross-platform development</li>
                  <li>Native performance optimization</li>
                  <li>Rapid iteration capabilities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Styling</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>NativeWind (Tailwind CSS for React Native)</li>
                  <li>Responsive and adaptive design principles</li>
                  <li>Consistent UI/UX across platforms</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backend" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Backend Infrastructure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Server Technology</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Node.js with Express.js</li>
                  <li>WebSocket integration for real-time updates</li>
                  <li>Scalable microservices architecture</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Authentication</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>JWT-based secure authentication</li>
                  <li>Role-based access control (RBAC)</li>
                  <li>Multi-tier permission management</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">PostgreSQL (Neon)</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Robust relational database</li>
                  <li>ACID compliance</li>
                  <li>Advanced querying capabilities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Models</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Normalized schema design</li>
                  <li>Efficient data relationships</li>
                  <li>Comprehensive indexing</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageContainer>
  )
}