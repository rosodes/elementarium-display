
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CalciumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Essential for bone and teeth formation in all vertebrates</li>
          <li>Burns with orange-red flame (flame test identification)</li>
          <li>Your body contains about 1-1.5 kg of calcium</li>
          <li>Dairy products are excellent calcium sources</li>
          <li>Used in making cement and concrete (lime)</li>
          <li>Can be cut with a knife when pure</li>
          <li>Silvery metal that tarnishes to yellow-white</li>
          <li>Critical for muscle contractions and blood clotting</li>
          <li>Limestone caves formed by calcium carbonate dissolution</li>
          <li>Pearls and shells are calcium carbonate structures</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CalciumInterestingFactsSection;
