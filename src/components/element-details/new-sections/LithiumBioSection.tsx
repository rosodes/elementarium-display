
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumBioSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <b>Presence in biology:</b> Lithium is present in trace amounts in all living organisms, including humans, plants, and animals, but is not considered essential for life.
      </div>
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <b>Role in humans:</b> No established vital biological function, but trace amounts may influence mood and nervous system activity. Most mammals have Li<sup>+</sup> ions in tissues at part-per-billion levels.
        </li>
        <li>
          <b>Medical use:</b> Lithium carbonate (Li₂CO₃) and other salts are used as <span className="font-semibold">mood stabilizers</span> in the treatment of bipolar disorder (manic-depressive illness) and, less commonly, depression. Lithium is the only metal with proven psychiatric application.
        </li>
        <li>
          <b>Toxicity:</b> Therapeutic dosage is close to toxic levels. Overdose leads to <span className="text-red-700">lithium poisoning</span>: symptoms include tremor, nausea, diarrhea, kidney and thyroid dysfunction, confusion, and in severe cases, death. <b>Requires blood monitoring.</b>
        </li>
        <li>
          <b>Toxic effects in environment:</b> High concentrations can inhibit plant growth and are toxic to aquatic life, though natural levels are generally safe.
        </li>
      </ul>
      <div className="mt-2 text-xs text-gray-500">
        <b>Summary:</b> Lithium plays no essential biological role in humans, but its compounds are critical in psychiatric medicine; careful dosing is vital due to narrow safety margins.
      </div>
    </CardContent>
  </Card>
);
export default LithiumBioSection;
