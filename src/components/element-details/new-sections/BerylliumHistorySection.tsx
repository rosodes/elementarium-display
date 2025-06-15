
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Discovery and History of Beryllium */
const BerylliumHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Discovery &amp; History</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Discovery:</strong> Beryllium was discovered in 1798 by French chemist Louis-Nicolas Vauquelin, who identified a new "sweet-tasting" element in beryl and emerald gemstones, calling its oxide "glucina."
      </div>
      <div>
        <strong>Isolation:</strong> First isolated as a metal in 1828 independently by Friedrich Wöhler (Germany) and Antoine Bussy (France) by reacting potassium with beryllium chloride.
      </div>
      <ul className="list-disc pl-4">
        <li>The name "beryllium" comes from the mineral beryl (from Greek "beryllos"), officially adopted in 1949 by IUPAC, replacing the earlier name "glucinium."</li>
        <li>Historically used in X-ray tube windows and early fluorescent lighting technologies.</li>
        <li>Its lightness and stiffness led to increasing use in aerospace and defense applications from the 20th century onward.</li>
        <li>Beryllium compounds (notably BeO) have been important in electronics, ceramics, and nuclear research since the 1930s.</li>
        <li>Beryllium was instrumental in the discovery of the neutron (1932, James Chadwick).</li>
      </ul>
      <div className="mt-2 text-xs text-gray-500">
        Sources: Royal Society of Chemistry, CRC Handbook, Science History Institute.
      </div>
    </CardContent>
  </Card>
);

export default BerylliumHistorySection;
