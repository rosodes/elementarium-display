
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PotassiumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Essential for all living organisms - regulates fluid balance</li>
          <li>Burns with characteristic violet/lilac flame color</li>
          <li>Less dense than water but reacts violently with it</li>
          <li>Your body contains about 140g of potassium</li>
          <li>Bananas are famous for potassium content (~400mg)</li>
          <li>Can be cut with a knife due to its softness</li>
          <li>Silvery metal that tarnishes rapidly in air</li>
          <li>Used in atomic clocks for precise timekeeping</li>
          <li>Critical for muscle contractions and nerve signals</li>
          <li>Potassium-40 makes you slightly radioactive!</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default PotassiumInterestingFactsSection;
