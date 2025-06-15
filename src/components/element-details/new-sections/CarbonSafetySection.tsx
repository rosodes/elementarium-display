
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety Information</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>General safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Pure carbon (diamond, graphite) is non-toxic</li>
            <li>Carbon dust can be a respiratory irritant</li>
            <li>Fine carbon particles may cause pneumoconiosis</li>
          </ul>
          <div><strong>Carbon monoxide hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Highly toxic gas - binds to hemoglobin</li>
            <li>Colorless and odorless - difficult to detect</li>
            <li>Can cause death by asphyxiation</li>
            <li>Requires proper ventilation and CO detectors</li>
          </ul>
          <div><strong>Workplace precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Use respiratory protection when handling carbon dust</li>
            <li>Ensure adequate ventilation in carbon processing</li>
            <li>Monitor for carbon monoxide in combustion areas</li>
            <li>Follow OSHA guidelines for carbon-based materials</li>
          </ul>
          <div><strong>Environmental considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>CO₂ is a major greenhouse gas</li>
            <li>Coal burning produces air pollution</li>
            <li>Carbon sequestration important for climate</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonSafetySection;
