
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Discovered in 1669 by Hennig Brand, a German alchemist, who isolated it from urine by evaporation and heating residues.</li>
        <li>Named from the Greek "phosphoros" meaning "light-bringer", for its glowing (chemiluminescence) property.</li>
        <li>First element isolated from a living source (urine) rather than a mineral.</li>
        <li>The isolated form was white phosphorus, which glows in the dark and is highly reactive and toxic.</li>
        <li>Soon became essential in manufacturing matches and fertilizers.</li>
        <li>Modern production uses phosphate rock, discovered in the 18th-19th centuries.</li>
      </ul>
    </CardContent>
  </Card>
);

export default PhosphorusHistorySection;
