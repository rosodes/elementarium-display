
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumBioSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Role:</strong> Essential for all animals (main extracellular cation).</div>
        <ul className="list-disc pl-4">
          <li>Critical for nerve impulse transmission, muscle contraction</li>
          <li>Vital for osmotic balance and regulation of blood pressure</li>
          <li>Maintains fluid balance in cells and tissues</li>
          <li>Absorbed via diet, abundant in table salt (NaCl)</li>
        </ul>
        <div><strong>Toxicity:</strong></div>
        <ul className="list-disc pl-4">
          <li>Hypernatremia (excess sodium): hypertension, cardiovascular risk</li>
          <li>Hyponatremia (deficiency): confusion, muscle cramps, seizures</li>
          <li>Metallic sodium is highly dangerous; burns tissue and reacts violently with water</li>
        </ul>
        <div>No known role in plants — not essential for most; in excess, can harm plant growth.</div>
      </div>
    </CardContent>
  </Card>
);

export default SodiumBioSection;
