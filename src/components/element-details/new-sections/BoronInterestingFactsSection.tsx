
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Second hardest element after diamond and carbon</li>
          <li>Essential micronutrient for plants but not animals</li>
          <li>Can form cage-like molecular structures (boranes)</li>
          <li>Boron nitride is sometimes called "white graphite"</li>
          <li>Critical material for nuclear reactor control</li>
          <li>Forms some of the strongest known materials</li>
          <li>Borosilicate glass can withstand thermal shock</li>
          <li>Used in medieval times as a flux for metallurgy</li>
          <li>Only element that forms stable electron-deficient compounds</li>
          <li>Can enhance plant root development and fruit quality</li>
          <li>Boric acid is a mild antiseptic</li>
          <li>Boron carbide is one of the hardest materials known</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default BoronInterestingFactsSection;
