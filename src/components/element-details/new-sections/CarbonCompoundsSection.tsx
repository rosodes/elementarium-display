
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds & Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li><b>Organic chemistry:</b> Carbon uniquely forms millions of covalent compounds (organic molecules) with hydrogen, oxygen, nitrogen, and other elements—basis of life.</li>
        <li><b>Allotropes:</b> Three main allotropes are diamond (hardest natural material), graphite (good conductor), and amorphous (charcoal, soot). Fullerenes, nanotubes, and graphene are recent discoveries.</li>
        <li><b>Inorganics:</b> Carbon dioxide (CO<sub>2</sub>) and carbon monoxide (CO) are essential atmospheric gases. Carbonates (CaCO<sub>3</sub>, Na<sub>2</sub>CO<sub>3</sub>) are widespread.</li>
        <li><b>Key classes:</b> Hydrocarbons (alkanes, alkenes, alkynes, aromatics), alcohols, acids, amines, esters, carbohydrates, proteins, lipids, nucleic acids.</li>
        <li><b>Oxidation states:</b> From –4 (methane) to +4 (CO<sub>2</sub>); central to redox cycles in nature.</li>
        <li><b>Polymers:</b> Carbon forms vast array of synthetic materials (plastic, rubber, fiber, etc.).</li>
        <li><b>Carbides, cyanides:</b> Important for industry (e.g. SiC, CaC<sub>2</sub>, NaCN).</li>
      </ul>
      <div className="mt-2 text-xs text-gray-500">
        Sources: IUPAC Gold Book, CRC Handbook, Royal Society of Chemistry, Organic Chemistry literature.
      </div>
    </CardContent>
  </Card>
);

export default CarbonCompoundsSection;
