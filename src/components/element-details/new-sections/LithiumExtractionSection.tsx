
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Extraction & Production of Lithium */
const LithiumExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction &amp; Production</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>From minerals:</strong> Lithium is mined as spodumene, lepidolite, and petalite. Ores are concentrated and then processed, commonly by roasting, acid leaching, or carbonate precipitation, to produce lithium carbonate.
      </div>
      <div>
        <strong>From brines:</strong> The largest lithium source today. Brine is pumped into evaporation ponds—solar energy removes water, concentrating lithium salts that are collected as lithium carbonate or lithium chloride.
      </div>
      <div>
        <strong>Metallic lithium:</strong> Industrially obtained by electrolyzing molten lithium chloride (LiCl) or lithium carbonate—done under inert gas to avoid oxidation.
      </div>
      <div>
        <strong>Annual production:</strong> Over 130,000 metric tons (2022), with growth driven by battery demand (especially for electric vehicles).
      </div>
      <div>
        <strong>Refining & storage:</strong> Metallic lithium must be stored under oil or in inert atmosphere—it reacts violently with moisture.
      </div>
      <div className="mt-2 text-xs text-gray-500">
        Sources: USGS, Royal Society of Chemistry, CRC Handbook, mining industry reports.
      </div>
    </CardContent>
  </Card>
);
export default LithiumExtractionSection;
