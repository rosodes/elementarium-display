
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Sulfuric acid production (largest use):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Most important industrial chemical</li>
            <li>Used in fertilizer, battery, and chemical production</li>
            <li>Metal processing and petroleum refining</li>
          </ul>
          <div><strong>Rubber industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Vulcanization of rubber</li>
            <li>Cross-linking agent for polymers</li>
            <li>Tire manufacturing</li>
          </ul>
          <div><strong>Agriculture:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fungicides and pesticides</li>
            <li>Soil amendment for alkaline soils</li>
            <li>Essential plant nutrient</li>
          </ul>
          <div><strong>Other applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Detergents and surfactants</li>
            <li>Pharmaceuticals and cosmetics</li>
            <li>Paper and pulp bleaching</li>
            <li>Gunpowder and fireworks</li>
            <li>Matches and flame retardants</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurCommercialUsesSection;
