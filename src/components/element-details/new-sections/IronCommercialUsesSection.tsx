
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Коммерческое применение железа
const IronCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Steel production (&gt;95% of use)—construction, automotive</li>
        <li>Cast iron for pipes, engine blocks</li>
        <li>Magnetic materials—transformers, motors</li>
        <li>Iron supplements and fortification</li>
        <li>Catalysts in chemical processes</li>
      </ul>
    </CardContent>
  </Card>
);

export default IronCommercialUsesSection;
