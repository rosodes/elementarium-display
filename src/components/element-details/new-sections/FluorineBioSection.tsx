
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Biological role/toxicity for Fluorine
const FluorineBioSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>No essential role:</strong> Fluorine is not essential for human/animal metabolism.
      </div>
      <div>
        <strong>Dental health:</strong> Low concentrations of fluoride help prevent tooth decay by strengthening enamel (hence addition to water or toothpaste).
      </div>
      <div>
        <strong>Toxicity:</strong> Excess fluoride causes dental fluorosis (tooth mottling/discoloration) and, at high levels, skeletal fluorosis (bone/joint issues).
      </div>
      <div>
        <strong>Biological impact:</strong> High concentrations are toxic to plants and animals. Chronic exposure is a health hazard.
      </div>
      <div>
        <strong>Industrial risk:</strong> Inhalation or skin contact with hydrogen fluoride (HF) is extremely dangerous—can cause deep tissue damage and systemic toxicity.
      </div>
      <div>
        <strong>Environmental hazard:</strong> Fluorides released by industrial processes can accumulate in soils, water, and biota.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: WHO, CDC, PubChem, Nature Reviews Chemistry
      </div>
    </CardContent>
  </Card>
);

export default FluorineBioSection;
