
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Safety and hazards for Fluorine
const FluorineSafetySection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Elemental F<sub>2</sub>:</strong> Extremely toxic, corrosive, and reactive. Contact with skin, eyes, or inhalation is highly dangerous.
      </div>
      <div>
        <strong>Hydrogen fluoride (HF):</strong> Its vapors are deadly. Skin exposure causes deep tissue burns; systemic toxicity can be fatal.
      </div>
      <div>
        <strong>Fire/explosion hazard:</strong> F<sub>2</sub> ignites organic and many inorganic materials. Storage requires special equipment and protocols.
      </div>
      <div>
        <strong>Protective measures:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Only trained personnel with full PPE (respirator, goggles, gloves) should handle</li>
          <li>Use in well-ventilated, specialized fume hoods or chambers</li>
          <li>Immediate emergency response for spills or exposure</li>
        </ul>
      </div>
      <div>
        <strong>Fluoride poisoning:</strong> Symptoms include nausea, vomiting, abdominal pain, tremors, cardiac arrhythmia; can be fatal at high doses.
      </div>
      <div>
        <strong>Chronic exposure:</strong> Even low-level fluoride intake can cause health issues over time.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: CDC, OSHA, Royal Society of Chemistry, PubChem
      </div>
    </CardContent>
  </Card>
);

export default FluorineSafetySection;
