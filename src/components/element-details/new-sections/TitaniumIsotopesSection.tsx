
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const TitaniumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁶Ti (8.25% abundance)</li>
            <li>⁴⁷Ti (7.44% abundance)</li>
            <li>⁴⁸Ti (73.72% abundance) - most common</li>
            <li>⁴⁹Ti (5.41% abundance)</li>
            <li>⁵⁰Ti (5.18% abundance)</li>
          </ul>
          <div><strong>Radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁴Ti (t½ = 63 years) - medical applications</li>
            <li>⁴⁵Ti (t½ = 3.08 hours) - research</li>
            <li>⁵¹Ti (t½ = 5.76 minutes) - short-lived</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁴Ti used in medical imaging</li>
            <li>Natural isotope ratios for geological dating</li>
            <li>Research into stellar nucleosynthesis</li>
            <li>Nuclear physics studies</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Titanium has five stable isotopes with ⁴⁸Ti being most abundant.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitaniumIsotopesSection;
