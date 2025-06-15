
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Production & Extraction</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs space-y-2">
        <ul className="list-disc pl-4">
          <li>
            <b>Main industrial source:</b> Helium is extracted from certain natural gas fields (usually where He content is &gt;0.3%), especially in the USA, Qatar, Algeria, Russia.
          </li>
          <li>
            <b>Extraction Process:</b> Natural gas is purified, then subjected to cryogenic fractional distillation, liquefying nearly all other gases&nbsp;— helium remains gaseous and is separated.
          </li>
          <li>
            <b>Purification:</b> Removal of impurities by catalytic oxidation, pressure-swing adsorption, and further cooling yields high-purity He.
          </li>
          <li>
            <b>World production:</b> ~160 million m³/yr (2023); the U.S. has helium strategic reserves.
          </li>
          <li>
            <b>Helium reserves finite:</b> Once released, He escapes Earth's gravity and is lost to space.
          </li>
          <li>
            <b>Not made synthetically:</b> All commercially used He comes from Earth's crustal decay, not artificial synthesis.
          </li>
        </ul>
        <div className="mt-2 text-sky-700 dark:text-sky-200 text-xs">
          <b>Note:</b> Helium supplies are strategic and concerns about helium shortages arise due to its unique uses and irreplaceability.
        </div>
      </CardContent>
    </Card>
  );
};
export default HeliumExtractionSection;
