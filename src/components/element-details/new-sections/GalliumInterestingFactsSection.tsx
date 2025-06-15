
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GalliumInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>One of few metals liquid at room temperature</li>
        <li>Expands 3.1% when it freezes (like water)</li>
        <li>Can supercool to -120°C without freezing</li>
        <li>Essential for LED and laser technology</li>
        <li>Used in "gallium spoons" magic trick (melts in hot tea)</li>
        <li>Gallium arsenide faster than silicon in computers</li>
        <li>Non-toxic, unlike mercury</li>
      </ul>
    </CardContent>
  </Card>
);

export default GalliumInterestingFactsSection;
