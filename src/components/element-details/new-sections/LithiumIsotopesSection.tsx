
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁶Li (7.59% abundance) - used in nuclear applications</li>
            <li>⁷Li (92.41% abundance) - most common isotope</li>
          </ul>
          <div><strong>Notable properties:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁶Li has high neutron absorption cross-section</li>
            <li>⁷Li is used in lithium-ion batteries</li>
            <li>Radioactive isotopes range from ³Li to ¹²Li</li>
            <li>All radioactive isotopes have very short half-lives</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumIsotopesSection;
