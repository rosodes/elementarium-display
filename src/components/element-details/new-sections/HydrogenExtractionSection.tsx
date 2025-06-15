
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Методы получения водорода
 */
const HydrogenExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Production & Extraction</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-sm">
        <ul className="list-disc pl-4 space-y-1">
          <li>Industrial: Steam reforming of methane (CH₄ + H₂O → CO + 3H₂)</li>
          <li>Electrolysis of water (2H₂O → 2H₂ + O₂)</li>
          <li>Coal gasification</li>
          <li>Laboratory: Reaction of acids with active metals (e.g., Zn + H₂SO₄ → ZnSO₄ + H₂)</li>
          <li>By-product of chlorine and sodium hydroxide production (chloralkali process)</li>
        </ul>
        <p className="mt-2">
          The vast majority of hydrogen is produced from natural gas by steam reforming.
        </p>
      </CardContent>
    </Card>
  );
};

export default HydrogenExtractionSection;
