
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronBioSection: React.FC = () => (
  <Card className="my-4 border border-red-200 dark:border-red-700">
    <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Biological Role:</strong> Boron is a micronutrient essential for plants, some algae, and possibly beneficial to certain animals, including humans in trace amounts.</div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Required for plant cell wall strength, seed/fruit development, and pollen germination.</li>
          <li>Suspected to play a regulatory role in hormones or metabolism in some animals.</li>
          <li>Safe dietary levels for humans: 1–13 mg/day considered adequate.</li>
        </ul>
        <div><strong>Toxicity:</strong></div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Overdose can be toxic: acute doses (&gt;15–20 grams) are fatal for humans.</li>
          <li>Symptoms of toxicity: nausea, vomiting, diarrhea, skin rash, sometimes kidney damage.</li>
          <li>Chronic exposure (workplace): irritations, reproductive toxicity.</li>
        </ul>
        <div><strong>Environmental Impact:</strong> Boron is not bioaccumulative and has low toxicity to animals at environmental concentrations, but high concentrations may impact aquatic life and crops.</div>
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          Main hazard: ingesting large quantities of boron compounds, mostly via accidental or industrial exposures; dietary boron from food/water is safe.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default BoronBioSection;

