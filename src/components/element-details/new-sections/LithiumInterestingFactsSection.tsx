
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Lightest metal and least dense solid element</li>
          <li>Critical for rechargeable lithium-ion batteries</li>
          <li>Used to treat bipolar disorder as lithium carbonate</li>
          <li>Burns with a bright red flame</li>
          <li>Was used in early nuclear fusion experiments</li>
          <li>Liquefied can be magnetic at very high pressure</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default LithiumInterestingFactsSection;
