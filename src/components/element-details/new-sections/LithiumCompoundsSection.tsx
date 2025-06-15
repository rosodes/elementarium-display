
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Lithium forms many ionic compounds: lithium carbonate (Li<sub>2</sub>CO<sub>3</sub>), lithium chloride (LiCl), lithium hydroxide (LiOH), and more.</li>
        <li>Lithium salts are widely used in batteries, ceramics, and as mood stabilizing drugs.</li>
        <li>Lithium reacts vigorously with water to produce lithium hydroxide and hydrogen gas.</li>
        <li>Lithium forms only +1 oxidation state compounds in nature and in practice.</li>
      </ul>
    </CardContent>
  </Card>
);
export default LithiumCompoundsSection;
