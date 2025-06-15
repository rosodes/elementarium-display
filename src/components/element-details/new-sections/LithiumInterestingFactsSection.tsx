
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
          <li>Lightest metal and lightest solid element under standard conditions</li>
          <li>Can float on water but reacts violently with it</li>
          <li>Used in mood-stabilizing medications for bipolar disorder</li>
          <li>Essential component in rechargeable lithium-ion batteries</li>
          <li>Burns with a brilliant crimson flame</li>
          <li>Can be cut with a knife due to its softness</li>
          <li>One of only three elements created in the Big Bang (along with hydrogen and helium)</li>
          <li>Chile produces about 40% of the world's lithium</li>
          <li>Demand has skyrocketed due to electric vehicle batteries</li>
          <li>Sometimes called "white gold" due to its value</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default LithiumInterestingFactsSection;
