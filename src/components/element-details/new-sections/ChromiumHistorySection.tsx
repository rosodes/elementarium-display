
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// История открытия хрома
const ChromiumHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Discovered by Louis Nicolas Vauquelin (1797, France)</li>
        <li>Name from Greek "chroma" (χρῶμα)—color, due to colorful compounds</li>
        <li>Isolated in metallic form (1798), used for pigments and dyes since 18th century</li>
      </ul>
    </CardContent>
  </Card>
);
export default ChromiumHistorySection;
