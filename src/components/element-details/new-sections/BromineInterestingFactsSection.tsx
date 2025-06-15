
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BromineInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Only nonmetal element that is liquid at room temperature</li>
        <li>Distinctive reddish-brown color and strong odor</li>
        <li>Highly toxic and corrosive to skin and lungs</li>
        <li>Used historically in photography (silver bromide)</li>
        <li>Essential trace element for some marine organisms</li>
        <li>Depletes ozone layer (methyl bromide)</li>
        <li>Creates purple vapor when heated</li>
      </ul>
    </CardContent>
  </Card>
);

export default BromineInterestingFactsSection;
