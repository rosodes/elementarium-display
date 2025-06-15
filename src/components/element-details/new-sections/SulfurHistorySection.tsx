
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History &amp; Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Knew since ancient times, sulfur (brimstone) is mentioned in the Bible, Homer’s works, and writings from China, Egypt, and India.</li>
        <li>Used by the Romans and Greeks for fumigation and medicinal purposes, as well as a component of “Greek fire.”</li>
        <li>Alchemists classified sulfur as one of the three basic principles of matter (sulfur, mercury, salt).</li>
        <li>The name “sulfur” comes from the Latin "sulphurium" (burning stone).</li>
        <li>Early methods of producing sulfur involved mining naturally occurring elemental sulfur or distilling it from pyrite (iron sulfide).</li>
        <li>Lavoisier (late 18th century) proved sulfur was an element, not a compound.</li>
        <li>Modern use increased dramatically in the 19th century with the invention of the contact process for making sulfuric acid, a cornerstone of the chemical industry.</li>
      </ul>
    </CardContent>
  </Card>
);

export default SulfurHistorySection;
