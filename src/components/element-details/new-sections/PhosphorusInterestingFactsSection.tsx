
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>First element discovered through alchemical experimentation</li>
          <li>White phosphorus glows in the dark (chemiluminescence)</li>
          <li>Essential component of DNA, RNA, and ATP</li>
          <li>Has four main allotropes: white, red, black, and violet</li>
          <li>White phosphorus ignites spontaneously in air at 30°C</li>
          <li>Used in early matches before safety matches were invented</li>
          <li>Black phosphorus conducts electricity like graphite</li>
          <li>Human body contains about 780g of phosphorus</li>
          <li>Bone and teeth contain 85% of body's phosphorus</li>
          <li>Critical for all cellular energy processes</li>
          <li>Limiting nutrient in many ecosystems</li>
          <li>Used in biological warfare agents (unfortunately)</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default PhosphorusInterestingFactsSection;
