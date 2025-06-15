
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotope:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁹F (100% abundance) - only stable isotope</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁸F (half-life: 109.8 minutes) - medical imaging (PET)</li>
            <li>²⁰F (half-life: 11.0 seconds) - research applications</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁸F-labeled compounds in medical diagnostics</li>
            <li>¹⁸F-FDG for cancer detection in PET scans</li>
            <li>Nuclear medicine and radiopharmaceuticals</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Fluorine is monoisotopic - it has only one stable isotope.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluorineIsotopesSection;
