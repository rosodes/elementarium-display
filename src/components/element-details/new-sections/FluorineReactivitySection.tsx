
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Most reactive and electronegative element</li>
          <li>Reacts violently with most elements and compounds</li>
          <li>Forms fluorides with all elements except He and Ne</li>
          <li>Reacts explosively with hydrogen: H₂ + F₂ → 2HF</li>
          <li>Attacks glass and silicates: SiO₂ + 4HF → SiF₄ + 2H₂O</li>
          <li>Reacts with water: 2F₂ + 2H₂O → 4HF + O₂</li>
          <li>Forms extremely strong C-F bonds in organic compounds</li>
          <li>Passivates metals by forming protective fluoride layer</li>
          <li>Cannot be displaced from compounds by other halogens</li>
          <li>Reacts with noble gas xenon at high pressure</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default FluorineReactivitySection;
