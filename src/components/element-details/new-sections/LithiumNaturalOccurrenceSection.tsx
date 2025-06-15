
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 20 ppm</div>
          <div><strong>Main sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Spodumene (LiAlSi₂O₆) - most important ore</li>
            <li>Petalite (LiAlSi₄O₁₀)</li>
            <li>Lepidolite (mica mineral)</li>
            <li>Salt brines (Chile, Argentina, Bolivia)</li>
            <li>Seawater (very low concentration: 0.17 ppm)</li>
          </ul>
          <div><strong>Major deposits:</strong> Chile, Australia, Argentina, China</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumNaturalOccurrenceSection;
