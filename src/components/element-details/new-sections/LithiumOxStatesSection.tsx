
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Окислительные состояния и химия */
const LithiumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <strong>Most common:</strong> +1 (the only stable state)
          </li>
          <li>
            <strong>Compounds:</strong> All lithium compounds (Li₂O, LiCl, LiOH, Li₂CO₃) contain Li<sup>+</sup>; strongly ionic.
          </li>
          <li>
            Unlike heavier alkali metals, lithium doesn't exhibit higher oxidation states or -1; its small ionic radius leads to unique, partly covalent behavior in some compounds.
          </li>
          <li>
            <span className="italic">Forms:</span> hydrates (LiCl·H₂O), oxides/superoxides (Li₂O, Li₂O₂), carbonates, nitride (Li₃N), and others.
          </li>
        </ul>
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          Lithium's small, highly charged +1 ion gives its salts high solubility, and sometimes considerable covalency—unlike heavier alkalis.
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumOxStatesSection;
