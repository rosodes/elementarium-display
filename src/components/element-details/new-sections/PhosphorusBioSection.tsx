
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusBioSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential element for all known forms of life—DNA, RNA, ATP (energy), cell membranes (phospholipids).</li>
        <li>Key nutrient for plants, growth-limiting in many ecosystems (why it's a fertilizer).</li>
        <li>White phosphorus is highly toxic—ingestion, inhalation, or skin contact is extremely dangerous.</li>
        <li>Chronic exposure to white phosphorus causes “phossy jaw” (bone necrosis, historically affected match workers).</li>
        <li>Phosphates in diet are generally non-toxic and essential, but excessive intake/unbalanced ratio with calcium can cause health issues.</li>
        <li>Environmental hazards: phosphate runoff leads to water eutrophication and fish kills.</li>
      </ul>
    </CardContent>
  </Card>
);

export default PhosphorusBioSection;
