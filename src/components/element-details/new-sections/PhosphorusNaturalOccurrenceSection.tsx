
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence & Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>11th most abundant element in Earth’s crust (about 0.1% by weight).</li>
        <li>Never found as a pure element in nature, always in chemical combination due to high reactivity.</li>
        <li>Main minerals: apatite group (fluorapatite, hydroxyapatite, chlorapatite), phosphorite rocks, vivianite, turquoise.</li>
        <li>Essential for biological material—DNA, RNA, and phospholipids (cell membranes).</li>
        <li>Deposits: Morocco (largest), China, USA, Russia.</li>
        <li>Recycled in modern agriculture from animal/plant waste.</li>
      </ul>
    </CardContent>
  </Card>
);

export default PhosphorusNaturalOccurrenceSection;
