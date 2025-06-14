
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Меры предосторожности и опасности при обращении с водородом
 */
const HydrogenSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-red-200 dark:border-red-700">
      <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Handling</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Highly flammable:</strong> mixes with air and ignites easily, may explode violently.</li>
          <li>H₂ flame is almost invisible. Danger of unrecognized leaks!</li>
          <li>Store cylinders away from heat, prevent static discharge.</li>
          <li>Used in industry under strict safety measures (sensors, alarms, ventilation).</li>
          <li><strong>Tritium</strong>: radioactive, handled with additional shielding and precautions.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HydrogenSafetySection;
