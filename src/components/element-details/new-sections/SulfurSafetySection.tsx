
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurSafetySection: React.FC = () => (
  <Card className="my-4 border border-yellow-200 dark:border-yellow-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Elemental sulfur is relatively non-toxic, but should be handled to prevent dust inhalation (mild respiratory irritant).</li>
        <li>Sulfur burns in air or oxygen – fire hazard! Sulfur dioxide is a choking, toxic gas.</li>
        <li>Hydrogen sulfide is extremely toxic, flammable, and deadly in confined spaces (rotten egg odor is warning).</li>
        <li>Use local exhaust ventilation and personal protective equipment in workplaces handling sulfur or sulfur compounds.</li>
        <li>Store away from flames, oxidizers, and strong acids.</li>
        <li>Chronic or occupational exposure to sulfur dioxide linked to bronchitis, asthma, and other lung issues.</li>
        <li>Sulfate forms in food, water, and medicine are of very low toxicity – not considered a general hazard.</li>
      </ul>
    </CardContent>
  </Card>
);

export default SulfurSafetySection;
