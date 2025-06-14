
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Основные применения водорода
 */
const HydrogenCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Industrial & Everyday Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Fuel for rockets and space vehicles (liquid hydrogen/oxygen engines)</li>
          <li>Production of ammonia (NH₃) via the Haber-Bosch process (fertilizer industry)</li>
          <li>Hydrogenation of fats and oils in food industry</li>
          <li>As a reducing agent in metallurgy (extraction of metals)</li>
          <li>Production of hydrochloric acid (HCl)</li>
          <li>Fuel cells & potential green fuel</li>
          <li>Used in electronics and glass making</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HydrogenCommercialUsesSection;
