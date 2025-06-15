
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonBioSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div>
          <strong>Essential for all life:</strong> Carbon is the backbone of all known biological molecules—proteins, DNA, carbohydrates, lipids. Central to biochemistry and metabolism (e.g. respiration, photosynthesis).
        </div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Inhalation of high concentrations of carbon dioxide (CO<sub>2</sub>) can cause suffocation.</li>
          <li>Carbon monoxide (CO) is highly toxic—binds hemoglobin and prevents oxygen transport.</li>
        </ul>
        <div>
          <strong>Natural forms:</strong> Diamond and graphite are non-toxic; activated carbon is used as medicine (antidote for poisoning).</div>
        <div>
          <strong>Health precautions:</strong> Coal dust and soot may cause lung disease in occupational settings. Micro- and nanocarbon (e.g. nanotubes) under study for possible toxicity.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default CarbonBioSection;
