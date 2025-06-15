
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Abundance:</strong> About 2.1% by weight of Earth's crust (8th most abundant element); present in seawater and all natural waters.</div>
        <div><strong>Major minerals:</strong>
          <ul className="list-disc pl-4">
            <li>Dolomite (CaMg(CO<sub>3</sub>)<sub>2</sub>)</li>
            <li>Magnesite (MgCO<sub>3</sub>)</li>
            <li>Olivine ((Mg,Fe)<sub>2</sub>SiO<sub>4</sub>)</li>
            <li>Kieserite, carnallite, brucite</li>
          </ul>
        </div>
        <div><strong>Seawater:</strong> Contains about 1,300 ppm Mg<sup>2+</sup> ions; major industrial source.</div>
        <div><strong>Main deposits:</strong> China, Russia, USA, Israel, Brazil</div>
      </div>
    </CardContent>
  </Card>
);

export default MagnesiumNaturalOccurrenceSection;
