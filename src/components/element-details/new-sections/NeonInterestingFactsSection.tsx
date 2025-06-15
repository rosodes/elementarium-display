
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Most chemically inert element - no compounds known</li>
          <li>Produces characteristic red-orange glow in discharge tubes</li>
          <li>Fifth most abundant element in the universe</li>
          <li>Used in the first gas laser (helium-neon laser)</li>
          <li>Neon signs actually use many different gases for colors</li>
          <li>Has the narrowest liquid range of any element</li>
          <li>Liquid neon is an excellent cryogenic refrigerant</li>
          <li>More expensive than liquid helium to produce</li>
          <li>Named "neon" because it was "new" when discovered</li>
          <li>Glows when electricity passes through it</li>
          <li>Used in television tubes and high-voltage indicators</li>
          <li>Critical component in particle detectors</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NeonInterestingFactsSection;
