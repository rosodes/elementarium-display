
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Atmospheric abundance:</strong> 20.9% of Earth's atmosphere</div>
          <div><strong>Abundance in Earth's crust:</strong> 46.1% (most abundant)</div>
          <div><strong>Natural forms:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Molecular oxygen (O₂) in atmosphere</li>
            <li>Water (H₂O) in oceans, lakes, rivers</li>
            <li>Ozone (O₃) in stratosphere</li>
            <li>Metal oxides in rocks and minerals</li>
            <li>Silicates and carbonates</li>
          </ul>
          <div><strong>Biological role:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential for cellular respiration</li>
            <li>65% of human body mass</li>
            <li>Component of water and organic molecules</li>
            <li>Required for aerobic life forms</li>
          </ul>
          <div><strong>Atmospheric oxygen cycle:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Produced by photosynthesis</li>
            <li>Consumed by respiration and combustion</li>
            <li>Ozone layer protects from UV radiation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenNaturalOccurrenceSection;
