
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineBioSection: React.FC = () => (
  <Card className="my-4 border border-lime-200 dark:border-lime-700">
    <CardHeader className="bg-lime-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Fluoride is not considered essential for human metabolism, but trace amounts protect tooth enamel from decay (caries).</li>
        <li>High fluoride exposure can cause dental and skeletal fluorosis (bone and joint problems, mottled teeth).</li>
        <li>Acute fluorine gas exposure is extremely toxic, causing severe respiratory and systemic effects.</li>
        <li>Fluoride is toxic at high levels, especially to children—regulations limit fluoride in water and toothpaste.</li>
        <li>Certain plants accumulate fluorine from soil and can be hazardous to grazing animals.</li>
        <li>Some pharmaceuticals contain organofluorine groups (e.g., certain antidepressants, anesthetics).</li>
      </ul>
    </CardContent>
  </Card>
);

export default FluorineBioSection;
