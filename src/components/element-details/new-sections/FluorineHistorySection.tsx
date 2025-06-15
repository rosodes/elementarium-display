
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineHistorySection: React.FC = () => (
  <Card className="my-4 border border-lime-200 dark:border-lime-700">
    <CardHeader className="bg-lime-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History &amp; Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Early chemists recognized the power and hazards of hydrofluoric acid (HF), but could not isolate elemental fluorine due to extreme reactivity.</li>
        <li>The isolation of fluorine was a major challenge, causing injuries and deaths among 19th-century scientists—nicknamed "the chemist's hell".</li>
        <li>French chemist Henri Moissan first isolated pure fluorine gas in 1886 by electrolyzing potassium bifluoride in anhydrous HF — an achievement that earned him the Nobel Prize (1906).</li>
        <li>The name "fluorine" comes from the mineral fluorite, which was used as a flux in metallurgy (Latin "fluere" = to flow).</li>
        <li>Pioneered the field of inorganic fluorine chemistry, leading to widespread industrial and scientific uses.</li>
      </ul>
    </CardContent>
  </Card>
);

export default FluorineHistorySection;
