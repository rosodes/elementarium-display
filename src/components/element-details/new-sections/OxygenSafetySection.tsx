
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Safety considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Pure oxygen accelerates combustion</li>
            <li>Fire hazard in oxygen-rich environments</li>
            <li>High-pressure oxygen systems require special care</li>
            <li>Oxygen toxicity at high concentrations</li>
          </ul>
          <div><strong>Health effects:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential for life and cellular respiration</li>
            <li>Oxygen deficiency causes hypoxia</li>
            <li>Excess oxygen can damage lungs</li>
            <li>Ozone is toxic to respiratory system</li>
          </ul>
          <div><strong>Environmental impact:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ozone depletion from CFCs</li>
            <li>Ground-level ozone as air pollutant</li>
            <li>Oxygen depletion in water bodies</li>
            <li>Essential for ecosystem health</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Avoid oil and grease near oxygen</li>
            <li>Use appropriate materials for oxygen service</li>
            <li>Proper ventilation in confined spaces</li>
            <li>Monitor oxygen levels in work environments</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenSafetySection;
