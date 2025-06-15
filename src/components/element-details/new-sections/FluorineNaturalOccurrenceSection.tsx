
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-lime-200 dark:border-lime-700">
    <CardHeader className="bg-lime-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence &amp; Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Fluorine is the 13th most abundant element in the Earth's crust (~0.054% by mass).</li>
        <li>Never occurs as a free element in nature, due to its extreme reactivity—always found in combined form.</li>
        <li>Main minerals: fluorite (CaF₂), cryolite (Na₃AlF₆), fluorapatite (Ca₅(PO₄)₃F) — fluorite is the chief commercial source.</li>
        <li>Traces occur in water, soil, and some plants (notably tea leaves); present in bones and teeth as fluoride.</li>
        <li>Atmospheric fluorine is virtually undetectable due to rapid chemical consumption.</li>
      </ul>
    </CardContent>
  </Card>
);

export default FluorineNaturalOccurrenceSection;
