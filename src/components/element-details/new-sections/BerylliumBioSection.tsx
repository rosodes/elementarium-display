
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumBioSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <b>Role in living organisms:</b> Beryllium has <span className="text-red-700 font-bold">no known biological role</span> in humans or other life forms. It is not essential for any organism.
      </div>
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <b>Extremely toxic:</b> Even very low concentrations are harmful; beryllium is a <span className="font-semibold">Group 1 carcinogen</span> (i.e., causes cancer in humans).
        </li>
        <li>
          <b>Chronic beryllium disease (CBD):</b> Inhalation of beryllium dust/fumes leads to berylliosis, a life-threatening autoimmune disorder affecting lungs, causing shortness of breath, cough, fatigue, and scarring.
        </li>
        <li>
          <b>Acute exposure:</b> Rare, but can cause severe inflammation of respiratory tract, chemical pneumonia.
        </li>
        <li>
          <b>Other toxic effects:</b> Skin contact can lead to chronic ulcers and rashes; ingestion usually much less dangerous, as absorption is poor.
        </li>
        <li>
          <b>Environmental impact:</b> Toxic to plants and aquatic life if present in significant amounts (rare in nature however).
        </li>
      </ul>
      <div className="mt-2 text-xs text-gray-500">
        <b>Summary:</b> <span className="font-bold">Beryllium is highly toxic and strictly regulated.</span> There are no beneficial or essential effects for life, only occupational health hazards.
      </div>
    </CardContent>
  </Card>
);
export default BerylliumBioSection;

