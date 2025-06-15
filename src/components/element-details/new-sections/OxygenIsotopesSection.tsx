
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
            <li>¹⁸O (0.205% abundance) - used in paleoclimate studies</li>
            <li>¹⁷O (0.038% abundance) - rare stable isotope</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁵O (half-life: 122 seconds) - medical imaging (PET)</li>
            <li>¹⁴O (half-life: 70.6 seconds) - research applications</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁸O/¹⁶O ratios for paleoclimate reconstruction</li>
            <li>¹⁵O-labeled compounds in medical diagnostics</li>
            <li>Isotope studies in atmospheric and ocean science</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenIsotopesSection;
