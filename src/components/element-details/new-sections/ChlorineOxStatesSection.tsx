
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Common oxidation states:</strong> -1, +1, +3, +5, +7</div>
          <div><strong>Most stable:</strong> -1, +7</div>
          <div><strong>Examples by oxidation state:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>-1: Hydrogen chloride (HCl), sodium chloride (NaCl)</li>
            <li>+1: Hypochlorous acid (HClO), sodium hypochlorite (NaClO)</li>
            <li>+3: Chlorous acid (HClO₂), chlorine dioxide (ClO₂)</li>
            <li>+5: Chloric acid (HClO₃), potassium chlorate (KClO₃)</li>
            <li>+7: Perchloric acid (HClO₄), perchlorates</li>
            <li>0: Molecular chlorine (Cl₂)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Chlorine shows variable oxidation states due to its seven valence electrons.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChlorineOxStatesSection;
