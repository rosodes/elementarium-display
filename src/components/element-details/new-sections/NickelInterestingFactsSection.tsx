
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NickelInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>US 5-cent coin ("nickel") is 75% copper, 25% nickel</li>
        <li>Meteorites contain 5-20% nickel</li>
        <li>Essential element for some bacteria and plants</li>
        <li>Raney nickel - highly active catalyst form</li>
        <li>Can cause contact allergies in some people</li>
        <li>Memory alloy (nitinol) contains ~50% nickel</li>
      </ul>
    </CardContent>
  </Card>
);

export default NickelInterestingFactsSection;
