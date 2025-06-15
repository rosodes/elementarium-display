
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumBioSection: React.FC = () => (
  <Card className="my-4 border border-yellow-200 dark:border-yellow-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <strong>No biological function:</strong> Helium is completely biologically inert—does not interact or combine with other atoms in the body.
        </li>
        <li>
          <strong>Non-toxic:</strong> It is non-toxic, non-irritating, and does not participate in any biological pathways.
        </li>
        <li>
          <strong>Inhalation risks:</strong> Brief inhalation changes voice pitch but prolonged inhalation can cause asphyxiation by displacing oxygen, leading to hypoxia or death.
        </li>
        <li>
          <strong>Medical uses:</strong> Heliox (helium-oxygen mixtures) used in medicine to treat respiratory conditions, as helium is less dense and reduces airway resistance.
        </li>
        <li>
          <strong>No nutritional role:</strong> Not an essential element for any plant, animal, or microorganism.
        </li>
      </ul>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: CDC, NIH, US National Library of Medicine, Royal Society of Chemistry
      </div>
    </CardContent>
  </Card>
);

export default HeliumBioSection;
