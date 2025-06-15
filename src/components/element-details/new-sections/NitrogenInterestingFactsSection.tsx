
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Makes up 78% of Earth's atmosphere by volume</li>
          <li>The N≡N triple bond is one of the strongest chemical bonds</li>
          <li>Essential for all life - component of amino acids and DNA</li>
          <li>Liquid nitrogen is used as extreme coolant (-196°C)</li>
          <li>Pure nitrogen is colorless, odorless, and tasteless</li>
          <li>Nitrogen narcosis affects deep-sea divers (rapture of the deep)</li>
          <li>Lightning converts atmospheric nitrogen to nitrates</li>
          <li>Nitrogen gas is used to preserve food by preventing oxidation</li>
          <li>Nitrogen deficiency in plants causes yellowing of leaves</li>
          <li>The Haber process revolutionized agriculture and warfare</li>
          <li>Nitrogen compounds can be both life-giving (fertilizers) and deadly (explosives)</li>
          <li>Nitrogen makes up about 3% of human body mass</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NitrogenInterestingFactsSection;
