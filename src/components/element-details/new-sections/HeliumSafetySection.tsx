
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumSafetySection: React.FC = () => (
  <Card className="my-4 border border-yellow-200 dark:border-yellow-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <strong>Low toxicity:</strong> Helium is chemically, radiologically and physiologically inert and non-toxic.
        </li>
        <li>
          <strong>Asphyxiation hazard:</strong> Major risk is oxygen displacement in confined spaces—helium is colorless, odorless, and cannot be sensed; asphyxiation can occur with little warning.
        </li>
        <li>
          <strong>Pressurized containers:</strong> Cylinders may explode if heated or damaged—handle with proper safety protocols.
        </li>
        <li>
          <strong>Handling liquid helium:</strong> Extreme cryogenic hazard (–269°C); direct contact causes severe cold burns and rapid asphyxiation if large volumes are released.
        </li>
        <li>
          <strong>Balloon/inhalation risks:</strong> Inhalation for voice alteration is dangerous—can cause hypoxia, collapse, or unconsciousness.
        </li>
        <li>
          <strong>Fire/extinguishing:</strong> Helium is not flammable and does not support combustion.
        </li>
        <li>
          <strong>Regulation:</strong> Use proper gas storage, ventilation, and leak detection for safety in laboratories and industry.
        </li>
      </ul>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: Airgas, CDC NIOSH, University chemical safety offices, USGS
      </div>
    </CardContent>
  </Card>
);

export default HeliumSafetySection;
