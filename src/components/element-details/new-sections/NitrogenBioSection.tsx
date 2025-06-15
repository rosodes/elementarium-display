
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenBioSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Essential element:</strong> Nitrogen is vital to all living organisms. It is a key component of amino acids (proteins), nucleic acids (DNA/RNA), ATP and other biomolecules.
      </div>
      <div>
        <strong>Metabolic pathways:</strong> Nitrogen fixation, nitrification, and denitrification in bacteria and plants. Animals obtain nitrogen via diet.
      </div>
      <div>
        <strong>Physiological functions:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Protein and enzyme synthesis</li>
          <li>Genetic information (nucleic acids)</li>
          <li>Energy storage and transfer (ATP)</li>
        </ul>
      </div>
      <div>
        <strong>Toxicity:</strong> Molecular nitrogen (N<sub>2</sub>) is inert and nontoxic, but nitrogen oxides and ammonia are toxic at elevated concentrations.
      </div>
      <div>
        <strong>Decompression sickness ("the bends"):</strong> Rapid reduction in pressure causes dissolved nitrogen to form dangerous bubbles in the body.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: WHO, CDC, PubChem
      </div>
    </CardContent>
  </Card>
);

export default NitrogenBioSection;
