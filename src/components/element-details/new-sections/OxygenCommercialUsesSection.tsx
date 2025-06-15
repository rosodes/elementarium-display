
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Medical applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Oxygen therapy for respiratory conditions</li>
            <li>Emergency medical treatment</li>
            <li>Anesthesia and surgery</li>
            <li>Hyperbaric oxygen therapy</li>
          </ul>
          <div><strong>Industrial processes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Steel production and metal cutting</li>
            <li>Welding and brazing</li>
            <li>Chemical manufacturing</li>
            <li>Wastewater treatment</li>
          </ul>
          <div><strong>Aerospace and transportation:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Rocket propellant oxidizer</li>
            <li>Aircraft emergency oxygen systems</li>
            <li>Submarine and spacecraft life support</li>
            <li>High-altitude breathing apparatus</li>
          </ul>
          <div><strong>Other applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Aquaculture and fish farming</li>
            <li>Glass manufacturing</li>
            <li>Pulp and paper bleaching</li>
            <li>Fire safety and emergency systems</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenCommercialUsesSection;
