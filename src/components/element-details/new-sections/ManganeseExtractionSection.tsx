
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Промышленное получение марганца
const ManganeseExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Mostly produced as ferromanganese alloy for steelmaking</li>
        <li>Pure metal obtained by electrolysis or aluminothermic reduction</li>
        <li>Reduction of MnO₂ with aluminum or carbon</li>
        <li>Major mining operations in South Africa, Australia, Gabon</li>
      </ul>
    </CardContent>
  </Card>
);
export default ManganeseExtractionSection;
