
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>White phosphorus is highly reactive and ignites spontaneously in air</li>
          <li>Red phosphorus is much more stable and less reactive</li>
          <li>Reacts vigorously with oxygen to form P₂O₅</li>
          <li>Forms phosphides with metals at high temperatures</li>
          <li>Reacts with halogens to form phosphorus halides</li>
          <li>Can form multiple bonds with carbon and other nonmetals</li>
          <li>Does not react with water under normal conditions</li>
          <li>Forms various oxoacids (H₃PO₄, H₃PO₃, etc.)</li>
          <li>White P burns: P₄ + 5O₂ → P₄O₁₀</li>
          <li>Shows both reducing and oxidizing properties</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default PhosphorusReactivitySection;
