
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotope:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³¹P (100% abundance) - only stable isotope</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³²P (half-life: 14.3 days) - medical and research applications</li>
            <li>³³P (half-life: 25.3 days) - biological research tracer</li>
            <li>³⁰P (half-life: 2.5 minutes) - very short-lived</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³²P used in radiotherapy for blood disorders</li>
            <li>³³P used as tracer in molecular biology</li>
            <li>³¹P NMR spectroscopy for studying phosphates</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusIsotopesSection;
