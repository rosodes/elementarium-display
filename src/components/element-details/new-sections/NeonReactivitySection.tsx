
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Completely chemically inert - no reactions known</li>
          <li>No compounds have ever been synthesized</li>
          <li>Does not react with any element or compound</li>
          <li>Highest first ionization energy of any element</li>
          <li>Complete electron configuration prevents bonding</li>
          <li>Even theoretical compounds are considered impossible</li>
          <li>Does not form van der Waals compounds</li>
          <li>No catalytic activity</li>
          <li>Remains monatomic under all conditions</li>
          <li>Most inert of all noble gases</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NeonReactivitySection;
