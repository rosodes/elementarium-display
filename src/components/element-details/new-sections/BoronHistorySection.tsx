
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronHistorySection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History &amp; Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Early use:</strong> Boron compounds such as borax (Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>) and boric acid (H<sub>3</sub>BO<sub>3</sub>) were known and utilized since ancient times in glassmaking, metalworking flux, pottery, and medicine. Borax was traded along the Silk Road from Tibet and Persia.
      </div>
      <div>
        <strong>Discovery:</strong> Although compounds were known, pure elemental boron wasn’t isolated until 1808. Sir Humphry Davy in England used electrolysis of borates; almost simultaneously, French chemists Joseph-Louis Gay-Lussac and Louis Jacques Thénard reduced boric acid with potassium. Both only obtained impure (non-metallic) samples.
      </div>
      <div>
        <strong>Isolation of pure boron:</strong> Pure crystalline boron was not obtained until Moissan (1895, France), and fully pure boron forms are difficult to achieve even today.
      </div>
      <div>
        <strong>Etymology:</strong> “Boron” comes from “borax”, which ultimately traces to the Arabic "bauraq".
      </div>
      <div>
        <strong>Modern research:</strong> Boron science advanced in the 20th century, especially in chemistry (boranes, cluster chemistry), semiconductors, and nuclear technology.
      </div>
    </CardContent>
  </Card>
);

export default BoronHistorySection;
