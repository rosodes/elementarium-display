
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 1050 ppm (11th most abundant)</div>
          <div><strong>Never found free in nature due to high reactivity</strong></div>
          <div><strong>Main minerals:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Apatite group: fluorapatite Ca₅(PO₄)₃F</li>
            <li>Hydroxyapatite Ca₅(PO₄)₃OH - in bones and teeth</li>
            <li>Chlorapatite Ca₅(PO₄)₃Cl</li>
            <li>Phosphorite rock - sedimentary phosphate deposits</li>
            <li>Vivianite Fe₃(PO₄)₂·8H₂O</li>
            <li>Turquoise CuAl₆(PO₄)₄(OH)₈·4H₂O</li>
          </ul>
          <div><strong>Biological role:</strong> Essential for all life - DNA, RNA, ATP, cell membranes</div>
          <div><strong>Major deposits:</strong> Morocco, China, USA, Russia</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusNaturalOccurrenceSection;
