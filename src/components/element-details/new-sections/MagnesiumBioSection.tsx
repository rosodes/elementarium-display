
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumBioSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Essential Nutrient:</strong> Required by all living cells, crucial for plant and animal life.</div>
        <ul className="list-disc pl-4">
          <li>Central atom in chlorophyll molecule (photosynthesis in plants)</li>
          <li>Important for energy metabolism (ATP processing)</li>
          <li>Stabilizes DNA and RNA structures</li>
          <li>Aids muscle/nerve function and bone strength in animals and humans</li>
        </ul>
        <div><strong>Dietary Info:</strong> Found in nuts, grains, leafy greens, seawater.</div>
        <div><strong>Toxicity:</strong></div>
        <ul className="list-disc pl-4">
          <li>Low toxicity when taken by mouth (excess excreted by kidneys)</li>
          <li>Very high doses (supplements) can disturb heart rhythm and cause dangerous effects in those with kidney failure</li>
          <li>Magnesium metal is not toxic, but powder/dust can cause fire hazard if inhaled</li>
        </ul>
        <div>No known toxicity to plants — essential for healthy growth.</div>
      </div>
    </CardContent>
  </Card>
);

export default MagnesiumBioSection;
