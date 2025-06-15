
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Изотопы лития */
const LithiumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div>
            <strong>Stable isotopes:</strong>
            <ul className="list-disc pl-4 mb-2">
              <li>
                <b>⁶Li</b> – 7.5% natural abundance. Used in some nuclear applications.
              </li>
              <li>
                <b>⁷Li</b> – 92.5% abundance (the vast majority). Used in lithium-ion batteries, some fusion research.
              </li>
            </ul>
          </div>
          <div>
            <strong>Radioactive/isotopes:</strong> Several known (from 3Li to 12Li), all with very short half-lives.
          </div>
          <div>
            <strong>Significance:</strong> 
            Isotopic composition affects certain nuclear technologies, e.g., tritium production (from ⁶Li), and isotopic enrichment has military/research uses.
          </div>
        </div>
        <div className="mt-2 text-[11px] text-gray-500">
          Sources: IUPAC Isotope Database, CRC Handbook
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumIsotopesSection;
