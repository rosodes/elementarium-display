import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li><b>Boron forms primarily covalent compounds:</b> Boric acid (H<sub>3</sub>BO<sub>3</sub>), borax (Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>), boron trioxide (B<sub>2</sub>O<sub>3</sub>).</li>
        <li><b>Boranes (boron hydrides):</b> Electron-deficient, unique cluster structures (e.g. diborane B<sub>2</sub>H<sub>6</sub>, used in rocket fuel and chemistry).</li>
        <li><b>Boron halides:</b> Especially boron trifluoride (BF<sub>3</sub>)—a Lewis acid, industrial catalyst.</li>
        <li><b>Boron carbide (B<sub>4</sub>C):</b> Very hard material used for armor and abrasives.</li>
        <li><b>Boron nitride (BN):</b> Heat-resistant ceramic, electrically insulating; used as lubricant and in electronics.</li>
        <li>Most boron chemistry is in the +3 oxidation state; forms electron-deficient, multicenter bonds.</li>
        <li>Boron tribromide (BBr<sub>3</sub>): organics synthesis reagent; boron phosphide and borates are key in industry.</li>
        <li>Cluster boranes are often written as B<sub>n</sub>H<sub>n+4</sub> (n &gt; 2), showing multicenter bonding.</li>
      </ul>
      <div className="mt-2 text-xs text-gray-500">
        Sources: Royal Society of Chemistry, CRC Handbook, IUPAC Gold Book.
      </div>
    </CardContent>
  </Card>
);

export default BoronCompoundsSection;
