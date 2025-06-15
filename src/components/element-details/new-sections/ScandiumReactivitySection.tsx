
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ScandiumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Tarnishes slowly in air forming protective oxide layer</li>
          <li>Reacts with hot water to produce hydrogen gas</li>
          <li>Dissolves readily in dilute acids</li>
          <li>Burns in air when finely divided</li>
          <li>Forms halides with halogens at elevated temperatures</li>
          <li>Does not react with nitrogen under normal conditions</li>
          <li>Combines with hydrogen at high temperatures</li>
          <li>More reactive than aluminum but less than calcium</li>
          <li>Forms intermetallic compounds with many metals</li>
          <li>Resistant to corrosion in seawater</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ScandiumReactivitySection;
