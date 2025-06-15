
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Electronics and semiconductors:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Computer processors and memory chips</li>
            <li>Solar cells and photovoltaic panels</li>
            <li>Diodes, transistors, and integrated circuits</li>
            <li>LED and laser diodes</li>
          </ul>
          <div><strong>Metallurgy and alloys:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Steel production (deoxidizer)</li>
            <li>Aluminum-silicon alloys for casting</li>
            <li>Ferrosilicon alloys</li>
          </ul>
          <div><strong>Chemical industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Silicones and silicone rubber</li>
            <li>Silanes and siloxanes</li>
            <li>Silicon carbide (abrasives, ceramics)</li>
            <li>Glass and ceramics production</li>
          </ul>
          <div><strong>Other applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Concrete and construction materials</li>
            <li>Refractory materials</li>
            <li>Optical fibers</li>
            <li>Medical implants (silicone)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiliconCommercialUsesSection;
