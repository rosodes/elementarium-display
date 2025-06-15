
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenBioSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Essential for life:</strong> Nitrogen is fundamental to all living organisms, comprising about 3% of human body weight and present in all proteins and nucleic acids.
      </div>
      <div>
        <strong>Biological functions:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Component of amino acids (building blocks of proteins)</li>
          <li>Essential part of DNA and RNA bases (purines and pyrimidines)</li>
          <li>Present in chlorophyll (photosynthesis)</li>
          <li>Cofactor in many enzymes and vitamins</li>
          <li>Part of neurotransmitters and hormones</li>
        </ul>
      </div>
      <div>
        <strong>Nitrogen cycle in biology:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Nitrogen fixation by symbiotic bacteria in root nodules</li>
          <li>Uptake of nitrates and ammonium by plant roots</li>
          <li>Protein synthesis in plants and animals</li>
          <li>Decomposition and return to soil</li>
        </ul>
      </div>
      <div>
        <strong>Toxicity and safety:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Nitrogen gas (N<sub>2</sub>):</strong> Non-toxic but can cause asphyxiation by displacing oxygen</li>
          <li><strong>Nitrous oxide (N<sub>2</sub>O):</strong> "Laughing gas" - anesthetic at low doses, toxic at high concentrations</li>
          <li><strong>Nitrogen dioxide (NO<sub>2</sub>):</strong> Toxic brown gas, causes respiratory problems and acid rain</li>
          <li><strong>Ammonia (NH<sub>3</sub>):</strong> Irritant to eyes, skin, and respiratory system</li>
          <li><strong>Nitrates/nitrites:</strong> Can form carcinogenic nitrosamines in body</li>
        </ul>
      </div>
      <div>
        <strong>Environmental impact:</strong> Nitrogen pollution from fertilizers causes eutrophication in water bodies, leading to algal blooms and dead zones.
      </div>
      <div>
        <strong>Deficiency effects:</strong> Nitrogen deficiency in plants causes stunted growth and yellowing of leaves (chlorosis).
      </div>
      <div className="mt-2 text-xs text-gray-600 dark:text-gray-300">
        Nitrogen is both essential for life and potentially harmful depending on the chemical form and concentration.
      </div>
    </CardContent>
  </Card>
);

export default NitrogenBioSection;
