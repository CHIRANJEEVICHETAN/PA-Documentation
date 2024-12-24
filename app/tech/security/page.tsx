import { PageHeader } from "@/components/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SecurityPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Security Implementation"
        description="Comprehensive security measures and protocols"
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Authentication & Authorization</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>JWT-based secure authentication system</li>
              <li>Role-based access control (RBAC)</li>
              <li>Multi-factor authentication support</li>
              <li>Session management and token refresh</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Protection</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>End-to-end encryption for sensitive data</li>
              <li>Regular security audits and penetration testing</li>
              <li>Compliance with GDPR and data protection regulations</li>
              <li>Secure data backup and recovery protocols</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
