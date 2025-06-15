
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 8.23% (3rd most abundant element)</div>
          <div><strong>Most abundant metal in Earth's crust</strong></div>
          <div><strong>Main minerals:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Bauxite (Al₂O₃·nH₂O) - primary ore</li>
            <li>Corundum (Al₂O₃) - including ruby and sapphire</li>
            <li>Feldspar (KAlSi₃O₈, NaAlSi₃O₈)</li>
            <li>Mica (complex aluminosilicates)</li>
            <li>Clay minerals (kaolinite Al₂Si₂O₅(OH)₄)</li>
            <li>Cryolite (Na₃AlF₆) - rare but important for extraction</li>
          </ul>
          <div><strong>Major deposits:</strong> Australia, Guinea, Brazil, Jamaica</div>
          <div><strong>Never found free in nature due to high reactivity</strong></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumNaturalOccurrenceSection;
