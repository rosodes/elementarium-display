
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety Information</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>General safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Non-toxic but can be dangerous in high concentrations</li>
            <li>Strongly supports combustion - fire and explosion hazard</li>
            <li>Oxygen-enriched atmospheres increase fire risk dramatically</li>
          </ul>
          <div><strong>Health hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Oxygen toxicity at high partial pressures</li>
            <li>Can cause lung damage with prolonged exposure to pure O₂</li>
            <li>Central nervous system toxicity in hyperbaric conditions</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Keep away from ignition sources and flammable materials</li>
            <li>Use oxygen-compatible materials and lubricants</li>
            <li>Ensure proper ventilation when using</li>
            <li>Store cylinders upright and secured</li>
          </ul>
          <div><strong>Emergency measures:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>In case of oxygen-enriched fire: evacuate area immediately</li>
            <li>Do not use water on oxygen-fed fires</li>
            <li>Seek medical attention for oxygen toxicity symptoms</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenSafetySection;
