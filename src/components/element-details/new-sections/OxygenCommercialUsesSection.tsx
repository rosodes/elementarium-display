
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Medical applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Medical oxygen for respiratory therapy</li>
            <li>Emergency and intensive care treatment</li>
            <li>Anesthesia and surgical procedures</li>
            <li>Hyperbaric oxygen therapy</li>
          </ul>
          <div><strong>Industrial uses:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Steel production (blast furnace enrichment)</li>
            <li>Metal cutting and welding (oxyacetylene torch)</li>
            <li>Chemical production (oxidation reactions)</li>
            <li>Water treatment and purification</li>
          </ul>
          <div><strong>Aerospace:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Rocket fuel oxidizer (liquid oxygen)</li>
            <li>Life support systems in spacecraft</li>
            <li>High-altitude aircraft breathing systems</li>
          </ul>
          <div><strong>Other applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Aquaculture (fish farming oxygenation)</li>
            <li>Glass manufacturing</li>
            <li>Pulp and paper bleaching</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenCommercialUsesSection;
