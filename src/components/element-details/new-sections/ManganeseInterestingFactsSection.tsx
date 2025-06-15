
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Интересные факты о марганце
const ManganeseInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential trace element for all living organisms</li>
        <li>Critical for steel production—improves strength and workability</li>
        <li>Potassium permanganate is a powerful oxidizer and disinfectant</li>
        <li>Manganese dioxide used in dry cell batteries</li>
      </ul>
    </CardContent>
  </Card>
);
export default ManganeseInterestingFactsSection;
