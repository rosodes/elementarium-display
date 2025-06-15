
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronSafetySection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div><strong>Elemental boron:</strong> Non-toxic and safe to handle.</div>
      <div>
        <strong>Major hazards:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Boric acid and borax: Mildly toxic if ingested, particularly dangerous for infants. May cause skin or eye irritation. Avoid inhalation of powders.</li>
          <li>Boron dust (industrial): Respiratory tract irritation if inhaled. Use respiratory and dust protection where appropriate.</li>
          <li>High borate exposure in water/soil: Toxic to aquatic life and harmful to many plants.</li>
        </ul>
      </div>
      <div>
        <strong>Safety tips:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Avoid ingestion and prolonged contact with boron compounds.</li>
          <li>Wear masks if handling boron dust or large quantities.</li>
          <li>Use gloves and eye protection when working with concentrated products.</li>
        </ul>
      </div>
      <div>
        <strong>Regulatory:</strong> Boron compounds are regulated for use as food additives, and pesticide restrictions apply in agriculture (maximum residue levels).
      </div>
    </CardContent>
  </Card>
);

export default BoronSafetySection;
