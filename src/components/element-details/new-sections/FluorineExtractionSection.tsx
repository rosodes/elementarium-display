
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Production/synthesis of Fluorine
const FluorineExtractionSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production &amp; Synthesis</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>No natural free F<sub>2</sub>:</strong> Fluorine must be manufactured chemically.
      </div>
      <div>
        <strong>Industrial production:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Electrolysis of potassium fluoride (KF) and hydrogen fluoride (HF) in a special electrolysis cell with nickel or Monel electrodes (Moissan process)</li>
          <li>Most F<sub>2</sub> is made on-site and used immediately; it is difficult and hazardous to store</li>
        </ul>
      </div>
      <div>
        <strong>Hydrogen fluoride (HF):</strong> Produced from reaction of CaF<sub>2</sub> (fluorspar) with sulfuric acid</div>
      <div>
        <strong>Uses of produced fluorine/F-compounds:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>UF<sub>6</sub> for nuclear fuel processing</li>
          <li>SF<sub>6</sub> for electrical insulation</li>
          <li>Fluoropolymers (Teflon/PTFE), refrigerants, fluorinated pharmaceuticals</li>
        </ul>
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: USGS, NobelPrize.org, Industrial Chemistry
      </div>
    </CardContent>
  </Card>
);

export default FluorineExtractionSection;
