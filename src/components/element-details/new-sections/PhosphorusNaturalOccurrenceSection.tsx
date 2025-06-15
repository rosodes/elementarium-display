
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
          <div><strong>Never found as free element in nature</strong></div>
          <div><strong>Main phosphate minerals:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Apatite - Ca₅(PO₄)₃(F,Cl,OH)</li>
            <li>Phosphorite rock - sedimentary deposits</li>
            <li>Wavellite - Al₃(PO₄)₂(OH)₃·5H₂O</li>
            <li>Turquoise - CuAl₆(PO₄)₄(OH)₈·4H₂O</li>
          </ul>
          <div><strong>Biological occurrence:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential element in all living organisms</li>
            <li>Component of DNA, RNA, and ATP</li>
            <li>Found in bones and teeth as calcium phosphate</li>
            <li>Critical for cellular energy metabolism</li>
          </ul>
          <div><strong>Major deposits:</strong> Morocco, China, Algeria, Syria</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusNaturalOccurrenceSection;
