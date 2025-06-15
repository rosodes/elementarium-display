
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Relatively unreactive due to protective oxide layer</li>
          <li>Does not react with water at room temperature</li>
          <li>Reacts with acids to produce hydrogen gas</li>
          <li>Burns brilliantly in air at high temperatures</li>
          <li>Forms covalent compounds due to small size and high charge density</li>
          <li>Amphoteric - reacts with both acids and strong bases</li>
          <li>Forms complex ions readily due to high polarizing power</li>
          <li>Reacts with halogens at elevated temperatures</li>
          <li>Does not react with hydrogen directly</li>
          <li>Unique among alkaline earth metals in forming covalent bonds</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default BerylliumReactivitySection;
