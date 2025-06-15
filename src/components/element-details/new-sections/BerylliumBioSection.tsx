
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Biological Role & Toxicity of Beryllium */
const BerylliumBioSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div>
          <strong>Biological Role:</strong> Beryllium has no known essential function in any organism. It is not a required nutrient in humans, animals, or plants.
        </div>
        <div>
          <strong>Toxicity:</strong> Beryllium is highly toxic, especially by inhalation of dust or fumes. Chronic exposure causes “berylliosis,” a debilitating and potentially fatal lung disease. Soluble beryllium compounds are also acutely toxic.
        </div>
        <ul className="list-disc pl-4 space-y-1">
          <li>No metabolic role or beneficial biological effect in humans, animals, or plants.</li>
          <li>Acute effects: skin rash, respiratory distress, chemical pneumonia.</li>
          <li>Long-term exposure: lung cancer risk (confirmed human carcinogen), sarcoidosis-like granulomas in lungs.</li>
          <li>Soluble compounds are toxic by ingestion though poorly absorbed; the greatest risk is via inhalation.</li>
          <li>Rarely bioaccumulates because of low solubility and strong binding in soils.</li>
        </ul>
        <div>
          <b>Environmental impact:</b> Beryllium pollution is strictly regulated due to hazards for workers and the ecosystem.
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Sources: US CDC, NIOSH, ATSDR, Royal Society of Chemistry, IARC.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default BerylliumBioSection;
