
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumBioSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div>
          <strong>Biological Role:</strong> Helium is a noble gas, completely inert and has no biological function in any organisms.
        </div>
        <div>
          <strong>Toxicity:</strong> Helium is non-toxic and chemically unreactive under normal conditions.<br />
          It can act as a simple asphyxiant if it displaces oxygen in enclosed spaces.<br />
          High concentrations can cause suffocation by lack of oxygen, especially in confined areas.
        </div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Helium does not accumulate in tissues or organs.</li>
          <li>No evidence of mutagenic, carcinogenic, or developmental toxicity.</li>
          <li>Breathing helium alters your voice but does not have lasting health effects (except for suffocation risk in high concentrations).</li>
        </ul>
        <div>
          <strong>Environmental Impact:</strong> Helium released into the atmosphere is harmless and escapes into space.
        </div>
      </div>
    </CardContent>
  </Card>
);
export default HeliumBioSection;
