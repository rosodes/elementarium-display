
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Интересные факты о железе
const IronInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential for human life—key component of hemoglobin</li>
        <li>Earth's core is primarily iron and nickel</li>
        <li>Fe-56 has the most stable atomic nucleus</li>
        <li>Magnetic properties make it useful in motors and generators</li>
        <li>Can be made stronger than pure iron by adding carbon (steel)</li>
      </ul>
    </CardContent>
  </Card>
);

export default IronInterestingFactsSection;
