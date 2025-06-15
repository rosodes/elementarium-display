
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Only oxidation state:</strong> -1</div>
          <div><strong>Most electronegative element</strong></div>
          <div className="space-y-1">
            <div><strong>Examples:</strong></div>
            <ul className="list-disc pl-4 space-y-1">
              <li>-1: Hydrogen fluoride (HF), metal fluorides (NaF, CaF₂)</li>
              <li>-1: Organic fluorides (CF₄, Teflon)</li>
              <li>0: Molecular fluorine (F₂)</li>
            </ul>
          </div>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Fluorine never exhibits positive oxidation states due to its extremely high electronegativity (3.98).
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluorineOxStatesSection;
