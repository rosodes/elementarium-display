
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Biological Role & Toxicity of Lithium */
const LithiumBioSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Presence:</strong> Trace amounts of lithium are found in all living organisms, including plants, animals, and humans. It's not essential for life, but might play minor roles in some animals.
      </div>
      <div>
        <strong>Medical use:</strong> Lithium carbonate and other lithium salts are the most effective drugs for stabilizing mood in bipolar disorder. Lithium is unique in clinical psychiatry—a true metal-based medicine.
      </div>
      <ul className="list-disc pl-4">
        <li><b>No vital biological function:</b> Not necessary for any metabolic process in humans or higher organisms.</li>
        <li><b>Toxicity:</b> The therapeutic dose is close to the toxic dose—careful monitoring is required. Chronic overdose can lead to trembling, confusion, renal failure, and death.</li>
        <li><b>In the environment:</b> High concentrations may inhibit plant growth and harm aquatic species. Typical natural levels are safe.</li>
      </ul>
      <div className="mt-2 text-xs text-gray-500">
        Sources: US National Library of Medicine, Royal Society of Chemistry, CDC, NIH.
      </div>
    </CardContent>
  </Card>
);
export default LithiumBioSection;
