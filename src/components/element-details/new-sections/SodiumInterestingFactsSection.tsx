
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Soft enough to cut with a knife like butter</li>
          <li>Less dense than water but reacts violently with it</li>
          <li>Essential for human life - regulates blood pressure and volume</li>
          <li>Sodium-vapor lamps produce characteristic yellow light</li>
          <li>Average human body contains about 100g of sodium</li>
          <li>Can conduct electricity like other metals</li>
          <li>Tarnishes rapidly in air, forming sodium oxide coating</li>
          <li>Used in some nuclear reactors as coolant</li>
          <li>Sodium deficiency can be life-threatening</li>
          <li>Burns with distinctive bright yellow flame</li>
          <li>Forms explosive mixtures with many organic compounds</li>
          <li>Critical component in nerve impulse transmission</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SodiumInterestingFactsSection;
