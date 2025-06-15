
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
          <div><strong>Sulfuric acid production (85% of sulfur):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fertilizer manufacturing</li>
            <li>Chemical processing</li>
            <li>Metal processing and refining</li>
            <li>Battery acid</li>
          </ul>
          <div><strong>Rubber industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Vulcanization process</li>
            <li>Tire manufacturing</li>
            <li>Rubber goods production</li>
          </ul>
          <div><strong>Agriculture:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fungicides and pesticides</li>
            <li>Soil pH adjustment</li>
            <li>Fertilizer production</li>
          </ul>
          <div><strong>Other applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Gunpowder and explosives</li>
            <li>Matches and fireworks</li>
            <li>Paper and pulp bleaching</li>
            <li>Petroleum refining</li>
            <li>Pharmaceuticals</li>
            <li>Detergents and soaps</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurCommercialUsesSection;
