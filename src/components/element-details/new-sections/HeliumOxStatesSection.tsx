
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs space-y-2">
        <div>
          <b>Main oxidation state:</b> <span className="font-mono">0</span>
        </div>
        <div>
          Helium is the most inert element. It does not form any chemical compounds under normal conditions, so it exhibits *exclusively* oxidation state 0.
        </div>
        <ul className="list-disc pl-4 mt-2">
          <li>Electron shell: 1s² &mdash; complete, extremely stable</li>
          <li>Ionization energy of 24.59 eV &mdash; exceptionally high</li>
          <li>No positive or negative ions found in nature</li>
          <li>Only possible "helium compounds" are unstable He-containing ions (HeH⁺, He₂⁺) or vanishingly rare inclusion compounds in extreme conditions</li>
        </ul>
        <div className="mt-2 text-gray-500 text-xs">
          The IUPAC designates helium as a chemical element of zero valence and reactivity.
        </div>
      </CardContent>
    </Card>
  );
};
export default HeliumOxStatesSection;
