
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Most Common State:</strong> +2 (Mg<sup>2+</sup>)</div>
        <ul className="list-disc pl-4">
          <li>Forms only ionic compounds as Mg<sup>2+</sup></li>
          <li>No stable oxidation states other than +2</li>
        </ul>
        <div><strong>Important compounds:</strong>
          <ul className="list-disc pl-4">
            <li>Magnesium oxide (MgO)</li>
            <li>Magnesium chloride (MgCl<sub>2</sub>)</li>
            <li>Magnesium sulfate (MgSO<sub>4</sub>)</li>
            <li>Magnesium carbonate (MgCO<sub>3</sub>)</li>
            <li>Magnesium hydroxide (Mg(OH)<sub>2</sub>)</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default MagnesiumOxStatesSection;
