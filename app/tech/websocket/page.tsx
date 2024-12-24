import { PageHeader } from "@/components/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WebSocketPage() {
  return (
    <PageContainer>
      <PageHeader
        title="WebSocket Communication"
        description="Real-time communication infrastructure and implementation details"
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Real-time Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Instant notifications for system events</li>
              <li>Live location updates with minimal latency</li>
              <li>Real-time expense and shift status changes</li>
              <li>Bi-directional communication channel</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation Details</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>WebSocket protocol for persistent connections</li>
              <li>Automatic reconnection handling</li>
              <li>Message queuing for offline scenarios</li>
              <li>Event-based architecture for scalability</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
