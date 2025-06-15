
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ScandiumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>One of the rarest and most expensive metals</li>
          <li>Lighter than aluminum but stronger than titanium alloys</li>
          <li>First transition metal in the periodic table</li>
          <li>Has unique properties bridging main group and transition metals</li>
          <li>Used in high-performance bicycle frames</li>
          <li>Essential for advanced aerospace applications</li>
          <li>More abundant than gold but much harder to extract</li>
          <li>Forms the basis for high-intensity discharge lamps</li>
          <li>Critical material for next-generation aircraft</li>
          <li>Can improve aluminum alloy strength by 50%</li>
          <li>Burns with brilliant white light</li>
          <li>Has no known biological role</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ScandiumInterestingFactsSection;
