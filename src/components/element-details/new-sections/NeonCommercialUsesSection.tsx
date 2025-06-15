
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
            <li>High-voltage indicators</li>
            <li>Television tubes (older models)</li>
            <li>Decorative lighting</li>
          </ul>
          <div><strong>Scientific instruments:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Helium-neon lasers</li>
            <li>Gas chromatography</li>
            <li>Particle detectors</li>
            <li>Research applications</li>
          </ul>
          <div><strong>Cryogenic applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Cryogenic refrigerant</li>
            <li>Laboratory cooling</li>
            <li>Ultra-low temperature research</li>
          </ul>
          <div><strong>Specialty applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Diving gas mixtures (for deep diving)</li>
            <li>Window insulation (double-pane)</li>
            <li>Plasma displays</li>
            <li>Aerospace applications</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonCommercialUsesSection;
