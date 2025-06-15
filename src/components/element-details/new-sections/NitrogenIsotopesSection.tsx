
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
            <li>¹⁴N (99.632% abundance) - most common isotope</li>
            <li>¹⁵N (0.368% abundance) - used as tracer in research</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹³N (half-life: 9.97 minutes) - PET scan tracer</li>
            <li>¹⁶N (half-life: 7.13 seconds) - nuclear reactor coolant analysis</li>
            <li>¹⁷N (half-life: 4.17 seconds) - nuclear physics research</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁵N labeling in biochemical research</li>
            <li>¹³N-ammonia for cardiac PET imaging</li>
            <li>¹⁵N NMR spectroscopy for protein structure</li>
            <li>Isotope ratio analysis in environmental studies</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenIsotopesSection;
