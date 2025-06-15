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
          <li>May regulate hormones or metabolism in animals.</li>
          <li>Dietary reference intake (humans): 1–13 mg/day is adequate.</li>
        </ul>
        <div><strong>Toxicity:</strong></div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Higher doses can be toxic: acute doses (&gt;15–20 grams) are fatal for adults.</li>
          <li>Symptoms: nausea, vomiting, diarrhea, dermatitis, sometimes kidney effects.</li>
          <li>Chronic exposure: skin/respiratory irritation, possible reproductive impacts (industry).</li>
        </ul>
        <div><strong>Environmental Impact:</strong> Not bioaccumulative, low animal toxicity in environment; excess in water/soil can harm crops.</div>
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          Main hazard: ingestion of large amounts of boron compounds (occupational or accidental); dietary boron from normal food/water is safe.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default BoronBioSection;
