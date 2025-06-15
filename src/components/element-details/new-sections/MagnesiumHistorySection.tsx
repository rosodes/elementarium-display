
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Discovery of Element:</strong> Recognized as a distinct element by Joseph Black in 1755.</div>
        <div><strong>Isolation:</strong> First isolated by Sir Humphry Davy in 1808 (England) through electrolysis of a mixture containing magnesia (MgO).</div>
        <div>
          <strong>Origin of Name:</strong> Named after Magnesia (region in Greece), where magnesite and related minerals were found.
        </div>
        <ul className="list-disc pl-4">
          <li>Ancient times: Used in the form of Epsom salts (magnesium sulfate) and magnesia alba (magnesium carbonate).</li>
          <li>Early 19th century: Recognized as important for light-weight alloys and flares.</li>
        </ul>
        <div>
          <strong>Fun fact:</strong> Magnesium ribbon burning produces an intense, white light—once popular in early photography (flash powder).
        </div>
      </div>
    </CardContent>
  </Card>
);

export default MagnesiumHistorySection;
