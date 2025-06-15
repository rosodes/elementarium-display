
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Industrial: reduction of silica with carbon in electric furnace</li>
          <li>Reaction: SiO₂ + 2C → Si + 2CO (at 2000°C)</li>
          <li>Produces metallurgical grade silicon (98-99% pure)</li>
          <li>Electronic grade: further purified by Siemens process</li>
          <li>Siemens process: thermal decomposition of trichlorosilane</li>
          <li>SiHCl₃ → Si + HCl (on heated silicon rods)</li>
          <li>Zone refining used to achieve ultra-high purity</li>
          <li>Major producers: China, Norway, Brazil, United States</li>
          <li>Annual production: over 8 million tons globally</li>
          <li>Electronic grade silicon much more expensive than metallurgical</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SiliconExtractionSection;
