
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
          <div><strong>Abundance in Earth's crust:</strong> 46.1% by mass</div>
          <div><strong>Abundance in atmosphere:</strong> 20.946% by volume</div>
          <div><strong>Abundance in universe:</strong> 3rd most abundant element</div>
          <div><strong>Natural forms:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Molecular oxygen (O₂) in atmosphere</li>
            <li>Ozone (O₃) in stratosphere</li>
            <li>Water (H₂O) in oceans, lakes, rivers</li>
            <li>Metal oxides in minerals and rocks</li>
            <li>Silicates and carbonates in Earth's crust</li>
            <li>Organic compounds in all living organisms</li>
            <li>Carbon dioxide (CO₂) in atmosphere</li>
          </ul>
          <div><strong>Sources:</strong> Atmospheric O₂ produced by photosynthesis in plants and algae</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenNaturalOccurrenceSection;
