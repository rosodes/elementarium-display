
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ScandiumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary extraction:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Mining of thortveitite ore (very rare)</li>
            <li>By-product of uranium ore processing</li>
            <li>Recovery from rare earth element mining</li>
            <li>Extraction from titanium ore processing</li>
          </ul>
          <div><strong>Purification methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Solvent extraction with organic compounds</li>
            <li>Ion exchange chromatography</li>
            <li>Selective precipitation</li>
            <li>Electrorefining</li>
          </ul>
          <div><strong>Metal production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Electrolysis of molten ScCl₃ and LiCl</li>
            <li>Reduction with calcium or lithium</li>
            <li>Vacuum distillation for purification</li>
            <li>Zone refining for high purity</li>
          </ul>
          <div><strong>Challenges:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Very low ore concentrations</li>
            <li>Complex separation from rare earths</li>
            <li>High production costs</li>
            <li>Limited commercial sources</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScandiumExtractionSection;
