
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ScandiumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Precautions</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Physical hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Finely divided metal is flammable</li>
            <li>Can ignite in air when heated</li>
            <li>Produces toxic fumes when burning</li>
            <li>Store under inert atmosphere</li>
          </ul>
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Generally considered low toxicity</li>
            <li>No known biological role</li>
            <li>Dust may cause respiratory irritation</li>
            <li>Eye and skin irritant in powder form</li>
          </ul>
          <div><strong>Radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁶Sc and ⁴⁷Sc require radiation safety protocols</li>
            <li>Proper shielding and handling procedures</li>
            <li>Controlled disposal of radioactive waste</li>
            <li>Medical supervision for therapeutic uses</li>
          </ul>
          <div><strong>Industrial safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Use proper ventilation systems</li>
            <li>Personal protective equipment required</li>
            <li>Fire suppression systems for metal dust</li>
            <li>Emergency procedures for spills</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScandiumSafetySection;
