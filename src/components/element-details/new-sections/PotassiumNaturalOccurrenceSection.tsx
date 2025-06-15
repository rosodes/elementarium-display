
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PotassiumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 2.09% (7th most abundant)</div>
          <div><strong>Main sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Sylvite (KCl) - primary ore</li>
            <li>Carnallite (KMgCl₃·6H₂O)</li>
            <li>Polyhalite (K₂Ca₂Mg(SO₄)₄·2H₂O)</li>
            <li>Feldspar minerals (KAlSi₃O₈)</li>
            <li>Seawater (380 ppm)</li>
            <li>Salt lakes and underground deposits</li>
          </ul>
          <div><strong>Major deposits:</strong> Canada, Russia, Belarus, Germany</div>
          <div><strong>Never found as free metal</strong> due to high reactivity</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PotassiumNaturalOccurrenceSection;
