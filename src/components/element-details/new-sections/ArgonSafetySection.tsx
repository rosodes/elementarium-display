
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArgonSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-yellow-200 dark:border-yellow-700">
      <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Handling</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary hazard - Asphyxiation:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Displaces oxygen in enclosed spaces</li>
            <li>Colorless and odorless - undetectable by human senses</li>
            <li>Can cause unconsciousness without warning</li>
            <li>Higher density causes pooling in low areas</li>
          </ul>
          <div><strong>Physical hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>High pressure in gas cylinders</li>
            <li>Extremely cold liquid form (-186°C)</li>
            <li>Can cause frostbite on contact</li>
            <li>Rapid expansion from liquid to gas</li>
          </ul>
          <div><strong>Safety precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ensure adequate ventilation</li>
            <li>Use oxygen monitors in confined spaces</li>
            <li>Proper cylinder handling and storage</li>
            <li>Personal protective equipment for liquid handling</li>
          </ul>
          <div><strong>Emergency procedures:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Move to fresh air immediately</li>
            <li>Artificial respiration if breathing stops</li>
            <li>Treat cold burns with warm water</li>
            <li>No chemical toxicity - purely physical hazards</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArgonSafetySection;
