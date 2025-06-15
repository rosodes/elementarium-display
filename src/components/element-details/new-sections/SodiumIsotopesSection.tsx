
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotope:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²³Na (100% abundance) - only stable isotope</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²²Na (half-life: 2.6 years) - medical imaging (PET)</li>
            <li>²⁴Na (half-life: 15 hours) - medical tracer</li>
            <li>²⁵Na (half-life: 60 seconds) - research applications</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²²Na in positron emission tomography</li>
            <li>²⁴Na as radiotracer in biological studies</li>
            <li>Nuclear medicine and research</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SodiumIsotopesSection;
