
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const TitaniumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 5650 ppm (9th most abundant)</div>
          <div><strong>Main ores:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ilmenite (FeTiO₃) - primary source</li>
            <li>Rutile (TiO₂) - high grade ore</li>
            <li>Anatase (TiO₂) - crystal form</li>
            <li>Brookite (TiO₂) - rare form</li>
            <li>Sphene (CaTiSiO₅)</li>
          </ul>
          <div><strong>Major deposits:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Australia (largest reserves)</li>
            <li>South Africa</li>
            <li>Canada</li>
            <li>Norway</li>
            <li>Ukraine</li>
            <li>China</li>
          </ul>
          <div><strong>Distribution:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Beach sand deposits (heavy mineral sands)</li>
            <li>Igneous rock formations</li>
            <li>Metamorphic rocks</li>
            <li>Placer deposits</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitaniumNaturalOccurrenceSection;
