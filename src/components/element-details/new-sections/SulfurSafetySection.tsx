
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-red-200 dark:border-red-700">
      <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Handling</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Physical hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Combustible dust - fire and explosion risk</li>
            <li>Can generate static electricity</li>
            <li>Burns with toxic sulfur dioxide fumes</li>
          </ul>
          <div><strong>Health effects:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Generally low toxicity in elemental form</li>
            <li>Dust may irritate eyes and respiratory system</li>
            <li>Some people sensitive to sulfur compounds</li>
          </ul>
          <div><strong>Compound hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>H₂S extremely toxic and flammable</li>
            <li>SO₂ toxic, corrosive respiratory irritant</li>
            <li>H₂SO₄ highly corrosive and dangerous</li>
          </ul>
          <div><strong>Safety measures:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Avoid dust formation and ignition sources</li>
            <li>Use ventilation when heating</li>
            <li>Store away from oxidizing agents</li>
            <li>Wear appropriate PPE when handling</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurSafetySection;
