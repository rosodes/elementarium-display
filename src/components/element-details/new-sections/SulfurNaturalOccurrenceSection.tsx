
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence & Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>16th most abundant element in Earth’s crust (about 0.042% by weight).</li>
        <li>Found as native (elemental) sulfur around volcanic regions and hot springs.</li>
        <li>Main minerals: pyrite (FeS₂), galena (PbS), sphalerite (ZnS), gypsum (CaSO₄·2H₂O), and anhydrite (CaSO₄).</li>
        <li>Large underground pure sulfur deposits formed by biological reduction of sulfate minerals (Texas, Louisiana, Poland, Sicily).</li>
        <li>Significant in ocean water as dissolved sulfate ions (about 900 mg/L).</li>
        <li>Occurs in proteins (amino acids cysteine and methionine), vital for all living things.</li>
        <li>Also present in meteorites and interstellar dust.</li>
      </ul>
    </CardContent>
  </Card>
);

export default SulfurNaturalOccurrenceSection;
