
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Molecular nitrogen (N₂) is very stable due to triple bond</li>
          <li>Relatively unreactive at room temperature</li>
          <li>Reacts with lithium at room temperature: 6Li + N₂ → 2Li₃N</li>
          <li>Forms ammonia under pressure and heat (Haber process)</li>
          <li>Reacts with oxygen at high temperature to form NOₓ</li>
          <li>Nitrogen compounds can be highly reactive (explosives)</li>
          <li>Forms hydrogen bonds in compounds</li>
          <li>Can act as Lewis base (electron pair donor)</li>
          <li>Essential for protein and nucleic acid formation</li>
          <li>Nitrogen fixation by bacteria converts N₂ to NH₃</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NitrogenReactivitySection;
