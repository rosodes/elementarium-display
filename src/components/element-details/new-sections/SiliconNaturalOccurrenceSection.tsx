
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Second most abundant element in Earth's crust (27.7%)</li>
          <li>Never found as pure element in nature</li>
          <li>Most common as silica (SiO₂) - quartz, sand, flint</li>
          <li>Major component of silicate minerals: feldspar, mica, clay</li>
          <li>Found in igneous, metamorphic, and sedimentary rocks</li>
          <li>Present in all soils as silicon compounds</li>
          <li>Forms complex silicate structures in minerals</li>
          <li>Found in living organisms (diatoms, grasses, horsetails)</li>
          <li>Major deposits: quartzite, sandstone, granite</li>
          <li>Pure silicon extracted industrially from silica</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SiliconNaturalOccurrenceSection;
