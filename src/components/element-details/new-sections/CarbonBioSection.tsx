
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonBioSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Essential for life:</strong> Carbon is the central atom of all living matter. Present in every biological molecule (proteins, DNA, carbohydrates, lipids, enzymes, hormones).
      </div>
      <div>
        <strong>Biochemical cycles:</strong> Carbon cycles through the biosphere via photosynthesis (conversion of CO<sub>2</sub> to sugars in plants), respiration (release of CO<sub>2</sub>), decomposition, combustion, and sedimentation.
      </div>
      <div>
        <strong>Atmospheric role:</strong> CO<sub>2</sub> is a greenhouse gas, essential for regulating Earth's temperature but dangerous in excess.
      </div>
      <div>
        <strong>Carbon in the body:</strong> About 18% of the mass of the human body is carbon.
      </div>
      <div>
        <strong>Toxicity:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Elemental carbon (graphite, diamond) is non-toxic and inert.</li>
          <li>Carbon monoxide (CO): highly toxic — binds hemoglobin, preventing oxygen transport; CO poisoning is often fatal.</li>
          <li>Carbon dioxide (CO<sub>2</sub>): asphyxiant at high concentrations; not itself toxic, but dangerous if it displaces O<sub>2</sub>.</li>
          <li>Coal dust and soot: occupational exposure (mines, industry) can cause lung disease and cancer (via inhaled particulates, PAHs, soot).</li>
        </ul>
      </div>
      <div>
        <strong>Other biological aspects:</strong> Graphene, carbon nanotubes, nanocarbon — being studied for potential (nano)toxicology.
      </div>
      <div className="mt-2 text-xs text-gray-600 dark:text-gray-300">
        Carbon is fundamental to the structure, energy, and chemistry of life on Earth.
      </div>
    </CardContent>
  </Card>
);

export default CarbonBioSection;
