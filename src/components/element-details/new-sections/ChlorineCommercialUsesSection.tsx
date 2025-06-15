
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Industrial & Everyday Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Water treatment and disinfection (municipal and pools)</li>
          <li>Production of PVC plastic and synthetic rubber</li>
          <li>Pharmaceutical manufacturing (85% of medicines)</li>
          <li>Paper and pulp bleaching</li>
          <li>Pesticide and herbicide production</li>
          <li>Metal processing and purification</li>
          <li>Textile bleaching and processing</li>
          <li>Food industry sanitation</li>
          <li>Semiconductor manufacturing</li>
          <li>Chemical intermediate for thousands of compounds</li>
          <li>Medical disinfection and sterilization</li>
          <li>Swimming pool and spa maintenance</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChlorineCommercialUsesSection;
