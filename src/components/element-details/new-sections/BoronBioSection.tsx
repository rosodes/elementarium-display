
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronBioSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div>
          <strong>Essential micronutrient (plants):</strong> Boron is vital for cell wall synthesis, growth, and reproductive development in higher plants. Deficiency causes poor crop yield, sterility, and growth disorders.
        </div>
        <div>
          <strong>Animal/human role:</strong> Not considered essential for animal or human metabolism, but boron may influence bone health, cognitive function, and hormone regulation (research ongoing).
        </div>
        <div>
          <strong>Toxicity:</strong> Boron is safe in trace amounts, but high doses (especially boric acid, borax) are toxic to plants, insects, and animals. Symptoms of poisoning: nausea, dermatitis, gastrointestinal and kidney issues.
        </div>
        <div>
          <strong>Environmental aspect:</strong> Used as an insecticide/fungicide; excessive levels in irrigation water harm crops.
        </div>
        <div>
          <strong>Therapeutic/medical uses:</strong> Boric acid: mild antiseptic, eye wash, and in pharmaceuticals. 
        </div>
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          <em>Boron is essential for plants, beneficial for health in small amounts, but toxic in excess.</em>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default BoronBioSection;
