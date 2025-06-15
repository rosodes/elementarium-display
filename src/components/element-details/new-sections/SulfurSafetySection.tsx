
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
          <div><strong>Elemental sulfur hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Combustible - burns to form toxic SO₂</li>
            <li>Dust can form explosive mixtures</li>
            <li>Generally low toxicity as element</li>
            <li>Can cause skin and eye irritation</li>
          </ul>
          <div><strong>Sulfur compound hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>H₂S extremely toxic and flammable</li>
            <li>SO₂ causes respiratory irritation</li>
            <li>Sulfuric acid highly corrosive</li>
            <li>Many organic sulfur compounds toxic</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Avoid dust formation and ignition sources</li>
            <li>Use proper ventilation systems</li>
            <li>Store in cool, dry conditions</li>
            <li>Personal protective equipment required</li>
          </ul>
          <div><strong>Environmental considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>SO₂ emissions cause acid rain</li>
            <li>Essential for ecosystem sulfur cycle</li>
            <li>Bioaccumulation in some compounds</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurSafetySection;
