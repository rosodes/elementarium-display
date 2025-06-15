
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
          <li>Second most abundant element in Earth's crust (27.7%)</li>
          <li>Foundation of the entire computer and electronics industry</li>
          <li>Silicon Valley named after this element</li>
          <li>Sand on beaches is mostly silicon dioxide</li>
          <li>Can form chains and rings like carbon</li>
          <li>Ultra-pure silicon is 99.9999999% pure (9N purity)</li>
          <li>Silicon wafers must be atomically flat for chips</li>
          <li>Conducts electricity better when heated (unlike metals)</li>
          <li>Glass, concrete, and ceramics all contain silicon</li>
          <li>Can be doped to create p-type and n-type semiconductors</li>
          <li>Single silicon crystal can weigh over 100 kg</li>
          <li>Essential element for many life forms (diatoms)</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SiliconInterestingFactsSection;
