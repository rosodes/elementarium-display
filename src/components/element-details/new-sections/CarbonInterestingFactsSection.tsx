
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Diamond is the hardest natural substance (10 on Mohs scale)</li>
          <li>Graphite is one of the softest minerals (1-2 on Mohs scale)</li>
          <li>Carbon has more known compounds than any other element</li>
          <li>Forms the basis of all organic chemistry and life</li>
          <li>Can exist in multiple allotropes: diamond, graphite, fullerenes, graphene</li>
          <li>A pencil "lead" is actually graphite mixed with clay</li>
          <li>Graphene is 200 times stronger than steel</li>
          <li>Carbon nanotubes can be stronger than diamond</li>
          <li>Coal formed from ancient plant matter over millions of years</li>
          <li>Diamonds form 150-200 km below Earth's surface</li>
          <li>Carbon cycle is essential for life on Earth</li>
          <li>Fullerene C₆₀ resembles a soccer ball structure</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CarbonInterestingFactsSection;
