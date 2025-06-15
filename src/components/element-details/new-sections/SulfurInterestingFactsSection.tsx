
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Forms the famous S₈ crown-shaped molecules</li>
          <li>Has more allotropes than any other element</li>
          <li>Can exist as plastic sulfur when rapidly cooled</li>
          <li>Essential component of gunpowder (with charcoal and saltpeter)</li>
          <li>Gives onions and garlic their characteristic smell</li>
          <li>Creates the "rotten egg" smell of hydrogen sulfide</li>
          <li>Vulcanization of rubber uses sulfur cross-linking</li>
          <li>Bright yellow crystals are piezoelectric</li>
          <li>Burns with a distinctive blue flame</li>
          <li>Some bacteria can "eat" sulfur for energy</li>
          <li>Jupiter's moon Io has sulfur volcanoes</li>
          <li>Used in traditional medicine for skin conditions</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SulfurInterestingFactsSection;
