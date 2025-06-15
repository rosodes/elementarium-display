
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SeleniumInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential trace element - deficiency causes disease</li>
        <li>Toxic in larger amounts - narrow safe dosage range</li>
        <li>Shows photoconductive properties</li>
        <li>Used in first photocopiers (xerography)</li>
        <li>Changes electrical resistance with light exposure</li>
        <li>Important antioxidant in biological systems</li>
        <li>Brazil nuts are richest dietary source</li>
      </ul>
    </CardContent>
  </Card>
);

export default SeleniumInterestingFactsSection;
