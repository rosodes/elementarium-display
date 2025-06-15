
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
          <li>Forms more compounds than all other elements combined</li>
          <li>Diamond is the hardest naturally occurring substance</li>
          <li>Graphite is one of the softest minerals</li>
          <li>Can exist in more allotropes than any other element</li>
          <li>Essential for all known life forms</li>
          <li>Graphene is stronger than steel but thinner than paper</li>
          <li>Carbon dating revolutionized archaeology</li>
          <li>Coal formed from ancient forests millions of years ago</li>
          <li>Diamonds can be billions of years old</li>
          <li>Carbon nanotubes are incredibly strong and conductive</li>
          <li>Fullerenes can trap other atoms inside them</li>
          <li>Human body is about 18% carbon by mass</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CarbonInterestingFactsSection;
