
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁶O (99.757% abundance) - most common isotope</li>
            <li>¹⁸O (0.205% abundance) - used in paleoclimatology</li>
            <li>¹⁷O (0.038% abundance) - rare stable isotope</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁵O (half-life: 2.04 minutes) - PET imaging</li>
            <li>¹⁹O (half-life: 26.9 seconds) - research</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁸O/¹⁶O ratios in climate studies</li>
            <li>¹⁵O PET tracers for medical imaging</li>
            <li>Isotope studies in water cycle research</li>
            <li>Geological dating methods</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Oxygen-18 is important for studying ancient climates and water cycles.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenIsotopesSection;
