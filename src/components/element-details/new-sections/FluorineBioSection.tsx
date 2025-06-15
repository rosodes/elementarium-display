
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineBioSection: React.FC = () => (
  <Card className="my-4 border border-red-200 dark:border-red-700">
    <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div>
          <strong>Biological Role:</strong> Fluorine is not essential to most living organisms, but fluoride ions (trace amounts) have important roles for vertebrates.
        </div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Strengthens tooth enamel and bones, prevents dental caries (cavities).</li>
          <li>Recommended intake: 0.05–0.07 mg/kg/day for humans.</li>
          <li>Main sources: drinking water (sometimes supplemented), toothpaste, food (tea, seafood).</li>
          <li>In small concentrations may benefit fish and some algae.</li>
          <li>No essential role in plants or most microbes; only fluoride-tolerant bacteria survive higher levels.</li>
        </ul>
        <div>
          <strong>Toxicity:</strong>
        </div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Very toxic in excess — chronic overexposure (&gt;10 mg/day) can cause skeletal and dental fluorosis.</li>
          <li>Acute poisoning: nausea, vomiting, abdominal pain, diarrhea, seizures, heart arrhythmia.</li>
          <li>Fluorine gas (F₂) and hydrogen fluoride (HF) are extremely toxic/corrosive — inhalation can be fatal, with severe pulmonary edema and tissue burns.</li>
          <li>Fluoride accumulates in bones and teeth; long-term excess causes skeletal deformities, joint stiffness, liver and kidney damage.</li>
        </ul>
        <div>
          <strong>Environmental Impact:</strong> At industrial concentrations, fluoride is a pollutant for soil, water and livestock. Strong emission controls are needed.
        </div>
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          Fluoride at trace levels is beneficial for human dental health, but excess is hazardous to humans, animals, and the environment.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default FluorineBioSection;
