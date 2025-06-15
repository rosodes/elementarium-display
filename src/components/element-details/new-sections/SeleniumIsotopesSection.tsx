
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SeleniumIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Stable isotopes:</strong></div>
        <ul className="list-disc pl-4 space-y-1">
          <li>⁷⁴Se (0.89% abundance)</li>
          <li>⁷⁶Se (9.37% abundance)</li>
          <li>⁷⁷Se (7.63% abundance)</li>
          <li>⁷⁸Se (23.77% abundance) - most common</li>
          <li>⁸⁰Se (49.61% abundance) - most abundant</li>
          <li>⁸²Se (8.73% abundance)</li>
        </ul>
        <div><strong>Important radioisotope:</strong> ⁷⁵Se (t½ = 120 days, medical use)</div>
      </div>
    </CardContent>
  </Card>
);

export default SeleniumIsotopesSection;
