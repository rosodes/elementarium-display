
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹²C (98.93% abundance) - most common isotope</li>
            <li>¹³C (1.07% abundance) - used in NMR spectroscopy</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁴C (half-life: 5,730 years) - radiocarbon dating</li>
            <li>¹¹C (half-life: 20.3 minutes) - PET imaging</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁴C dating for archaeology and geology</li>
            <li>¹³C NMR for molecular structure analysis</li>
            <li>¹¹C tracers in medical imaging</li>
            <li>¹²C standard for atomic mass units</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Carbon-14 is continuously produced in the atmosphere by cosmic rays.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonIsotopesSection;
