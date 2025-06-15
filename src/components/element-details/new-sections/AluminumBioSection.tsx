
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumBioSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>No known biological function for humans or animals</li>
        <li>Aluminum salts used as vaccine adjuvants</li>
        <li>Small amounts naturally present in many foods</li>
        <li>Generally low toxicity, poorly absorbed by digestive tract</li>
        <li>Chronic high exposure linked to neurotoxicity in some studies</li>
        <li>Renal patients may experience toxicity from high body levels</li>
        <li>Tolerated by some plants at low levels, toxic in acidic soils</li>
        <li>Not considered an essential nutrient for life</li>
      </ul>
    </CardContent>
  </Card>
);

export default AluminumBioSection;

