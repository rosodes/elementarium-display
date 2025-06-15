
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Любопытные факты и необычные свойства */
const LithiumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Lightest metal and least dense solid element in the periodic table.</li>
          <li>Can float on oil and even on kerosene—less dense than most liquids.</li>
          <li>Critical for modern rechargeable lithium-ion batteries (phones, cars, laptops, etc).</li>
          <li>Li salts (mainly carbonate) used for the treatment of bipolar disorder and depression.</li>
          <li>Burns with a bright crimson-red flame—commonly used in fireworks/pyrotechnics as a coloring agent.</li>
          <li>Liquefied lithium exhibits magnetic properties at extremely high pressures.</li>
          <li>First metallic element where direct nuclear fusion was observed (deuterium-lithium reactions).</li>
          <li>Super-reactive: Must be handled under mineral oil or inert gas to prevent oxidation and fire.</li>
          <li>Present in trace amounts in all living organisms—but no known essential biological role in humans.</li>
        </ul>
      </CardContent>
    </Card>
  );
};
export default LithiumInterestingFactsSection;
