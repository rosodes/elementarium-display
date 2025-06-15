
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 27.7% (2nd most abundant element)</div>
          <div><strong>Never found free in nature</strong></div>
          <div><strong>Main silicon-bearing minerals:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Quartz (SiO₂) - most common form</li>
            <li>Feldspar (KAlSi₃O₈, NaAlSi₃O₈, CaAl₂Si₂O₈)</li>
            <li>Mica (complex silicates)</li>
            <li>Clay minerals (hydrated aluminosilicates)</li>
            <li>Olivine ((Mg,Fe)₂SiO₄)</li>
            <li>Pyroxene (silicate chains)</li>
          </ul>
          <div><strong>Forms of silica:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Crystalline: quartz, cristobalite, tridymite</li>
            <li>Amorphous: opal, diatomaceous earth</li>
            <li>Sand, sandstone, and granite</li>
          </ul>
          <div><strong>Major deposits:</strong> Worldwide - sand, quartz deposits</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiliconNaturalOccurrenceSection;
