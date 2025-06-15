
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Foundation of all modern electronics and computers</li>
          <li>Can form chains like carbon, but Si-Si bonds are weaker</li>
          <li>Silicon Valley named after this element's importance in tech</li>
          <li>Essential for some living organisms (diatoms use it for shells)</li>
          <li>Extremely pure silicon (99.9999999%) needed for semiconductors</li>
          <li>One silicon wafer can contain billions of transistors</li>
          <li>Silicon solar cells convert sunlight directly to electricity</li>
          <li>Forms glass when heated with sodium carbonate</li>
          <li>Can be doped with other elements to control conductivity</li>
          <li>Second most abundant element but rarely seen in pure form</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SiliconInterestingFactsSection;
