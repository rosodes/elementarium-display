
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Природная встречаемость и формы водорода
 */
const HydrogenNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Mainly as diatomic gas (H₂) in atmosphere (trace amounts on Earth; most escapes to space)</li>
          <li>Found in water (H₂O), all organic compounds</li>
          <li>Solar and cosmic abundance: dominant in stars</li>
          <li>Rare in pure form on Earth, found in volcanic gases</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HydrogenNaturalOccurrenceSection;
