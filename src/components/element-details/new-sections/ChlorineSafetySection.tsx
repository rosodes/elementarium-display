
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-red-200 dark:border-red-700">
      <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Highly toxic:</strong> Severe respiratory irritant</li>
          <li>Can cause chemical burns to skin and eyes</li>
          <li>Pulmonary edema at high concentrations</li>
          <li>Forms phosgene when mixed with organic compounds</li>
          <li>Never mix with ammonia - produces toxic chloramine gas</li>
          <li>Store in cool, dry, well-ventilated areas</li>
          <li>Use appropriate PPE when handling</li>
          <li>Emergency procedures required for leaks</li>
          <li>Chronic exposure can cause respiratory problems</li>
          <li>Regulated as hazardous material for transport</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChlorineSafetySection;
