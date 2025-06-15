
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArgonReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Completely chemically inert under normal conditions</li>
          <li>Does not form any known stable chemical compounds</li>
          <li>No reaction with oxygen, hydrogen, or any other elements</li>
          <li>Unreactive due to complete outer electron shell</li>
          <li>Can form van der Waals compounds at very low temperatures</li>
          <li>Forms clathrate hydrates under pressure</li>
          <li>No oxidation or reduction reactions</li>
          <li>Extremely stable electronic configuration</li>
          <li>Used as inert atmosphere for sensitive reactions</li>
          <li>Maintains stability across wide temperature range</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ArgonReactivitySection;
