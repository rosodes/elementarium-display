
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²⁸Si (92.23% abundance) - most common isotope</li>
            <li>²⁹Si (4.67% abundance)</li>
            <li>³⁰Si (3.10% abundance)</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³¹Si (half-life: 157.3 minutes) - medical tracers</li>
            <li>³²Si (half-life: 153 years) - cosmogenic nuclide</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²⁸Si for ultra-pure semiconductor applications</li>
            <li>²⁹Si for NMR studies of silicates</li>
            <li>³¹Si as radiotracer in biological research</li>
            <li>Isotope studies in geochemistry</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiliconIsotopesSection;
