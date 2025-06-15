
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Elemental silicon is not hazardous in bulk or solid state.</li>
        <li>Crystalline and amorphous silicon dust can be explosive if finely divided.</li>
        <li>Inhalation of fine silica (SiO₂) dust leads to silicosis, a chronic lung disease.</li>
        <li>Workplaces must use dust control, protective equipment when cutting or processing silicates or quartz.</li>
        <li>Silica gel (desiccant) is non-toxic, but not for consumption.</li>
        <li>Silicone-based products are generally regarded as safe and inert.</li>
      </ul>
    </CardContent>
  </Card>
);

export default SiliconSafetySection;
