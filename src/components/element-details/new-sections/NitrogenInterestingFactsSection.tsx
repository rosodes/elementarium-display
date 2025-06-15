
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
          <li>Makes up 78% of Earth's atmosphere</li>
          <li>Nitrogen gas is odorless, colorless, and tasteless</li>
          <li>Has the strongest triple bond in nature (N≡N)</li>
          <li>Essential for all proteins and DNA</li>
          <li>Liquid nitrogen is extremely cold (-196°C)</li>
          <li>Lightning helps convert atmospheric nitrogen to nitrates</li>
          <li>Some bacteria can "fix" nitrogen from the air</li>
          <li>Nitrogen compounds are used in explosives</li>
          <li>Nitrous oxide (N₂O) is known as "laughing gas"</li>
          <li>Nitrogen gas is used to preserve food</li>
          <li>About 3% of human body weight is nitrogen</li>
          <li>Nitrogen depletion is a major agricultural concern</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NitrogenInterestingFactsSection;
