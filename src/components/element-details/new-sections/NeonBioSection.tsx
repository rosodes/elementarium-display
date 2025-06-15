
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonBioSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div>
          <strong>Biological Role:</strong> Neon is an inert noble gas with no known biological function. It does not play any role in the biochemistry or physiology of living organisms.
        </div>
        <div>
          <strong>Toxicity:</strong> Neon is non-toxic and chemically unreactive under normal conditions. It is not hazardous to health at typical environmental concentrations.
        </div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Does not accumulate in tissues or organs.</li>
          <li>Acts only as a simple asphyxiant in high concentrations by displacing oxygen from air.</li>
          <li>High concentrations (in enclosed spaces) can cause suffocation by lack of oxygen.</li>
          <li>No evidence for mutagenic, carcinogenic, or developmental toxicity.</li>
        </ul>
        <div>
          <strong>Environmental Impact:</strong> Neon is environmentally harmless and does not contribute to pollution or ecological imbalance.
        </div>
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          Neon is completely safe for use in scientific, industrial, and artistic applications.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default NeonBioSection;
