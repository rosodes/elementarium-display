
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <b>Boron forms primarily covalent compounds:</b> Boric acid (H<sub>3</sub>BO<sub>3</sub>), borax (Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>), boron trioxide (B<sub>2</sub>O<sub>3</sub>).
        </li>
        <li>
          <b>Boranes (boron hydrides):</b> Electron-deficient, cluster structures (e.g. diborane B<sub>2</sub>H<sub>6</sub>, decaborane B<sub>10</sub>H<sub>14</sub>), important in rocket fuel and chemistry.
        </li>
        <li>
          <b>Boron halides:</b> Especially boron trifluoride (BF<sub>3</sub>)—a strong Lewis acid and important industrial catalyst.
        </li>
        <li>
          <b>Boron carbide (B<sub>4</sub>C):</b> Extremely hard, used for armor and abrasives.
        </li>
        <li>
          <b>Boron nitride (BN):</b> Ceramic, excellent high-temperature stability, electrical insulator, lubricant, structural material.
        </li>
        <li>
          <b>Borates:</b> Glass, ceramics, detergents, and insulation materials.
        </li>
        <li>
          <b>Boron tribromide (BBr<sub>3</sub>):</b> Organic synthesis reagent; <b>boron phosphide</b> is a semiconductor.
        </li>
        <li>
          Most boron chemistry occurs in the +3 oxidation state; many compounds are electron deficient and have unusual multi-center bonds.
        </li>
      </ul>
      <div className="mt-2 text-xs text-gray-500">
        Sources: Royal Society of Chemistry, CRC Handbook, IUPAC Gold Book.
      </div>
    </CardContent>
  </Card>
);

export default BoronCompoundsSection;
