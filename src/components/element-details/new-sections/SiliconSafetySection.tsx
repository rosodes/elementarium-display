
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Pure silicon is generally non-toxic</li>
            <li>Crystalline silica dust causes silicosis</li>
            <li>Prolonged inhalation can lead to lung disease</li>
            <li>Essential trace element for human health</li>
          </ul>
          <div><strong>Workplace safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Use respiratory protection when handling silica dust</li>
            <li>Proper ventilation in semiconductor fabs</li>
            <li>Avoid inhalation of silicon dust particles</li>
            <li>Follow OSHA standards for crystalline silica</li>
          </ul>
          <div><strong>Environmental impact:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Silicon compounds generally environmentally benign</li>
            <li>Semiconductor manufacturing uses toxic chemicals</li>
            <li>Electronic waste contains valuable silicon</li>
            <li>Solar panels enable renewable energy</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiliconSafetySection;
