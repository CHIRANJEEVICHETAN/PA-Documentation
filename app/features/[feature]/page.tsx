import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from "next/navigation"
import { features, type FeatureType } from "@/lib/data/features";

export function generateStaticParams() {
  return Object.keys(features).map((feature) => ({
    feature,
  }));
}

export default function FeaturePage({
  params,
}: {
  params: { feature: FeatureType };
}) {
  const feature = features[params.feature];

  if (!feature) {
    notFound();
  }

  return (
    <div className="container space-y-8 py-8">
      <PageHeader title={feature.title} description={feature.description} />

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
  );
}