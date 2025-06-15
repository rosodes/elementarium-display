
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Природное распространение */
const LithiumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div>
            <strong>Abundance in crust:</strong> ~20 ppm (parts per million), moderately rare.
          </div>
          <div>
            <strong>Main minerals:</strong>
            <ul className="list-disc pl-4">
              <li>Spodumene (LiAlSi₂O₆) — key economic source</li>
              <li>Lepidolite (a lithium mica, KLi₂Al(Al,Si)₃O₁₀(F,OH)₂)</li>
              <li>Petalite (LiAlSi₄O₁₀)</li>
            </ul>
          </div>
          <div>
            <strong>In brines:</strong> Found in salt lakes, some groundwaters, and seawater (trace).
          </div>
          <div>
            <strong>Major producers:</strong> Australia (hard rock), Chile & Argentina (brines), China, Zimbabwe.
          </div>
          <div>
            <strong>Free lithium metal:</strong> Not found in nature—highly reactive; only occurs in compounds.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default LithiumNaturalOccurrenceSection;
