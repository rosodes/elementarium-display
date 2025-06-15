
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CalciumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Construction (major use):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Cement and concrete production</li>
            <li>Mortar and plaster</li>
            <li>Building stone (limestone, marble)</li>
          </ul>
          <div><strong>Industrial applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Steel production (flux and desulfurizer)</li>
            <li>Paper manufacturing (filler and coating)</li>
            <li>Plastics and rubber (filler)</li>
            <li>Glass manufacturing</li>
            <li>Water treatment (pH adjustment)</li>
          </ul>
          <div><strong>Biological and medical:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Dietary supplements</li>
            <li>Antacids (calcium carbonate)</li>
            <li>Bone health medications</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalciumCommercialUsesSection;
