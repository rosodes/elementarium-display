
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurBioSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential element for all living things – part of amino acids (cysteine, methionine), proteins, enzymes, and vitamins (biotin, thiamine).</li>
        <li>Found in keratin (hair, nails, skin), insulin, and many antibodies.</li>
        <li>Key for energy metabolism in some bacteria (use sulfur compounds as electron donors/acceptors).</li>
        <li>Sulfur dioxide and hydrogen sulfide gases are toxic to humans even at low concentrations – can cause respiratory irritation or death.</li>
        <li>Elemental sulfur and sulfate ions in food/drink are generally non-toxic to humans, though some may have allergies.</li>
        <li>Sulfur-based drugs include sulfa antibiotics and other medications.</li>
        <li>Overexposure to industrial sulfur compounds may cause acid rain, environmental hazards, and health risks for workers.</li>
      </ul>
    </CardContent>
  </Card>
);

export default SulfurBioSection;
