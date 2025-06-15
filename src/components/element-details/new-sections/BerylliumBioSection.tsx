
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumBioSection: React.FC = () => (
  <Card className="my-4 border border-red-200 dark:border-red-700">
    <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Toxicity:</strong> No known biological role. Extremely toxic to humans and animals in all forms.</div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Not required by any biological system</li>
          <li>Highly toxic if inhaled, ingested, or in contact with wounds</li>
          <li>Causes incurable chronic beryllium disease (CBD/berylliosis)</li>
          <li>Classified as a Group 1 carcinogen (lung cancer risk)</li>
          <li>Accumulates in lungs and disrupts respiratory function</li>
        </ul>
        <div>
          <strong>Environmental Impact:</strong> Low bioavailability; rare in biological systems.
        </div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Does not play any metabolic or enzymatic role</li>
          <li>Highly regulated due to its toxicity</li>
          <li>Environmental contamination possible from industrial processing</li>
        </ul>
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          Even very small amounts of beryllium are dangerous—strict occupational limits apply.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default BerylliumBioSection;
