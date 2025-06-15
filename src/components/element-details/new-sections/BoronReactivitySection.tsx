
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Relatively unreactive at room temperature</li>
          <li>Forms protective oxide layer preventing further oxidation</li>
          <li>Reacts with fluorine at room temperature</li>
          <li>Combines with nitrogen at high temperature to form BN</li>
          <li>Forms unique electron-deficient compounds (boranes)</li>
          <li>Does not react with water or hydrochloric acid</li>
          <li>Reacts with hot concentrated oxidizing acids</li>
          <li>Forms covalent compounds due to small size and high charge</li>
          <li>Can form complex cluster compounds</li>
          <li>Burns in air at elevated temperatures</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default BoronReactivitySection;
