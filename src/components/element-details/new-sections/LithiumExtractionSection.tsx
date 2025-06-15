
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Добыча и получение металлического лития */
const LithiumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs space-y-2">
        <div>
          <strong>From minerals:</strong> Mined from spodumene and other minerals, then concentrated via roasting and acid/carbonate extraction.
        </div>
        <div>
          <strong>From brines:</strong> Most lithium now produced from salt lake brines (South America, China) via solar evaporation, resulting in lithium carbonate precipitation.
        </div>
        <div>
          <strong>Metallic lithium:</strong> Obtained by electrolysis of molten lithium chloride (LiCl) or lithium carbonate (Li₂CO₃).
        </div>
        <div>
          <b>Refining:</b> Metallic Li must be stored under oil or inert atmosphere.
        </div>
        <div>
          <b>Annual production:</b> Over 130,000 metric tons (as of 2022), with rapid growth due to battery demand.
        </div>
      </CardContent>
    </Card>
  );
};
export default LithiumExtractionSection;
