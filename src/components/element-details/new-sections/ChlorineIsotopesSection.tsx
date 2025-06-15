
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³⁵Cl (75.77% abundance)</li>
            <li>³⁷Cl (24.23% abundance)</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³⁶Cl (half-life: 301,000 years) - environmental tracer</li>
            <li>³⁴Cl (half-life: 1.53 seconds) - research applications</li>
            <li>³⁸Cl (half-life: 37.2 minutes) - medical imaging</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³⁶Cl dating of groundwater and ice</li>
            <li>Isotope ratio studies in geochemistry</li>
            <li>Medical research tracers</li>
            <li>Nuclear reactor studies</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Natural chlorine is a mixture of the two stable isotopes.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChlorineIsotopesSection;
