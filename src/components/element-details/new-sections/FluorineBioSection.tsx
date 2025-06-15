
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineBioSection: React.FC = () => (
  <Card className="my-4 border border-red-200 dark:border-red-700">
    <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Biological Role:</strong> Fluorine is not essential for most life forms, but fluoride ions (in trace amounts) play a beneficial role in vertebrates.</div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Strengthens tooth enamel and bones — prevents dental caries (cavities).</li>
          <li>Optimal intake: 0.05–0.07 mg/kg/day for humans.</li>
          <li>Main source: drinking water (supplemented in some areas), toothpaste, diet (tea, seafood).</li>
          <li>Aquatic life: trace levels may benefit fish and some algae.</li>
          <li>No known biological role for plants or most microorganisms; some bacteria tolerate fluoride but at much lower than toxic levels.</li>
        </ul>
        <div><strong>Toxicity:</strong></div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Very toxic in excess &ndash; chronic ingestion (&gt;10 mg/day) can cause skeletal and dental fluorosis.</li>
          <li>Acute poisoning symptoms: nausea, vomiting, abdominal pain, diarrhea, convulsions, cardiac disturbances.</li>
          <li>Fluorine gas (F₂) and hydrogen fluoride (HF) are extremely toxic/corrosive — inhalation can cause fatal pulmonary edema and deep tissue burns.</li>
          <li>Fluoride accumulates in bones and teeth; long-term excess = skeletal deformities, joint stiffness, liver and kidney damage.</li>
        </ul>
        <div><strong>Environmental Impact:</strong> At industrial levels, fluoride is hazardous and can pollute soil, water, and livestock — emission controls are essential.</div>
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          Fluorides at trace levels are beneficial for teeth, but excess is highly toxic for humans, animals, and the environment.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default FluorineBioSection;
