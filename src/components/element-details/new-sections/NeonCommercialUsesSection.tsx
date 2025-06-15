
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Lighting applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Neon signs and advertising displays</li>
            <li>Decorative lighting and art installations</li>
            <li>Television tube indicators</li>
            <li>Warning and safety lights</li>
          </ul>
          <div><strong>Scientific instruments:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Gas chromatography detectors</li>
            <li>Geiger counter filling gas</li>
            <li>Cryogenic applications</li>
            <li>Laser research applications</li>
          </ul>
          <div><strong>Industrial applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Inert atmosphere for welding</li>
            <li>High-voltage indicators</li>
            <li>Refrigeration applications</li>
            <li>Leak detection systems</li>
          </ul>
          <div><strong>Specialty uses:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Diving equipment (gas mixtures)</li>
            <li>Aerospace applications</li>
            <li>Research and development</li>
            <li>Museum preservation systems</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonCommercialUsesSection;
