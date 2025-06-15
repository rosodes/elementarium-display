
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ScandiumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁵Sc (100% abundance) - only stable isotope</li>
          </ul>
          <div><strong>Radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁶Sc (t½ = 83.8 days) - medical applications</li>
            <li>⁴⁷Sc (t½ = 3.35 days) - medical tracer</li>
            <li>⁴⁸Sc (t½ = 43.7 hours) - research applications</li>
            <li>⁴⁴Sc (t½ = 3.97 hours) - PET imaging</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁶Sc used in radiotherapy</li>
            <li>⁴⁷Sc for targeted cancer therapy</li>
            <li>⁴⁴Sc in positron emission tomography</li>
            <li>Research into nuclear properties</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Scandium is monoisotopic with only one stable isotope.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScandiumIsotopesSection;
