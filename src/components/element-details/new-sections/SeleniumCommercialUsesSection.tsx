
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SeleniumCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Glass manufacturing: Decolorizing agent</li>
        <li>Electronics: Photoelectric cells, rectifiers</li>
        <li>Xerography: Photocopying drums</li>
        <li>Pigments: Red glass and ceramics</li>
        <li>Metallurgy: Steel and copper alloys</li>
        <li>Dietary supplements: Essential nutrient</li>
        <li>Anti-dandruff shampoos: Selenium sulfide</li>
      </ul>
    </CardContent>
  </Card>
);

export default SeleniumCommercialUsesSection;
