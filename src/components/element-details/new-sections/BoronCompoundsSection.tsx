
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Boron forms many covalent compounds such as boric acid (H<sub>3</sub>BO<sub>3</sub>), borax (Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>), and boron carbide (B<sub>4</sub>C).</li>
        <li>Boron hydrides (boranes) and halides are important in synthesis and industry.</li>
        <li>Most boron chemistry is in the +3 oxidation state.</li>
      </ul>
    </CardContent>
  </Card>
);
export default BoronCompoundsSection;
