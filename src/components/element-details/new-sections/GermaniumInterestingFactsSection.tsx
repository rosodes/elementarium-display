
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GermaniumInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>First element predicted by periodic table theory</li>
        <li>Key material in early computer technology</li>
        <li>Transparent to infrared radiation</li>
        <li>Higher refractive index than diamond</li>
        <li>Used in fiber optic systems</li>
        <li>Essential for night vision equipment</li>
        <li>Can form organometallic compounds</li>
      </ul>
    </CardContent>
  </Card>
);

export default GermaniumInterestingFactsSection;
