
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumHistorySection: React.FC = () => (
  <Card className="my-4 border border-yellow-200 dark:border-yellow-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Discovery &amp; History</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <strong>Discovery in sun:</strong> Helium was first detected in the solar spectrum in 1868 by French astronomer Pierre Janssen and independently by English astronomer Joseph Norman Lockyer during a solar eclipse, due to a yellow spectral line in sunlight (D3 line).
        </li>
        <li>
          <strong>Lockyer named it “helium”</strong> after the Greek god of the Sun, Helios, believing it was a new solar element.
        </li>
        <li>
          <strong>Found on Earth:</strong> In 1895, Scottish chemist Sir William Ramsay isolated helium on Earth while studying radioactive minerals (cleveite), confirming it was a terrestrial element.
        </li>
        <li>
          <strong>Recognition:</strong> Helium’s identification was confirmed by Per Teodor Cleve and Abraham Langlet in Sweden, also from cleveite.
        </li>
        <li>
          <strong>Commercial use:</strong> First balloon filled with helium: 1921 (U.S. Navy). Helium became significant in airships after Hindenburg disaster (1937), as a safe replacement for hydrogen.
        </li>
        <li>
          <strong>Nobel Prizes:</strong> 1904 (Ramsay) for discoveries in noble gases including helium.
        </li>
      </ul>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: Royal Society of Chemistry, Nobel Prize archives, NASA, CRC Handbook, Science History Institute
      </div>
    </CardContent>
  </Card>
);

export default HeliumHistorySection;

