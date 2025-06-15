
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotope:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁹Be (100% abundance) - only stable isotope</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁰Be (half-life: 1.39 million years) - cosmogenic isotope</li>
            <li>⁷Be (half-life: 53.3 days) - produced in atmosphere</li>
            <li>⁸Be (half-life: 67 attoseconds) - extremely unstable</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁰Be used in dating ice cores and sediments</li>
            <li>⁷Be used in atmospheric research</li>
            <li>Neutron source when mixed with alpha emitters</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Beryllium is monoisotopic - only one stable isotope exists.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BerylliumIsotopesSection;
