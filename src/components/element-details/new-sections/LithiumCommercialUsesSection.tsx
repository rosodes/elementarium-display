
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Основные коммерческие применения лития */
const LithiumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4">
          <li>
            <b>Rechargeable batteries:</b> Lithium-ion and lithium-polymer batteries for phones, laptops, electric vehicles, grid storage.
          </li>
          <li>
            <b>Glass and ceramics:</b> Improves strength and resistance; used in ovenware, stovetops, high-grade glass.
          </li>
          <li>
            <b>Pharmaceuticals:</b> Lithium carbonate as a mood stabilizer (bipolar disorder).
          </li>
          <li>
            <b>Lubricating greases:</b> Lithium stearate greases withstand high temperatures and are important in automotive/industry.
          </li>
          <li>
            <b>Air purification:</b> Lithium hydroxide removes CO₂ in spacecraft and submarines.
          </li>
          <li>
            <b>Alloys:</b> Used in making lightweight aluminum-lithium alloys for aerospace.
          </li>
          <li>
            <b>Other uses:</b> Primary lithium batteries, dehumidifiers, rocket propellants, specialty chemicals.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
export default LithiumCommercialUsesSection;
