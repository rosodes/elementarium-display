
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁴N (99.636% abundance) - most common isotope</li>
            <li>¹⁵N (0.364% abundance) - used in research and NMR</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹³N (half-life: 9.97 minutes) - PET imaging</li>
            <li>¹⁶N (half-life: 7.13 seconds) - nuclear reactors</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁵N labeling in biological research</li>
            <li>¹⁵N NMR spectroscopy</li>
            <li>¹³N PET tracers for medical imaging</li>
            <li>Isotope ratio studies in ecology</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Nitrogen-15 is important for studying biological nitrogen cycles.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenIsotopesSection;
