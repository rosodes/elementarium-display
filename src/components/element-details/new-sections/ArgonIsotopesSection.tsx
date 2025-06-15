
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArgonIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁰Ar (99.60% abundance) - most common</li>
            <li>³⁶Ar (0.337% abundance)</li>
            <li>³⁸Ar (0.063% abundance)</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³⁹Ar (half-life: 269 years) - atmospheric tracer</li>
            <li>³⁷Ar (half-life: 35.0 days) - medical applications</li>
            <li>⁴¹Ar (half-life: 109.3 minutes) - research tracer</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁰Ar/³⁹Ar dating of rocks and meteorites</li>
            <li>³⁹Ar in groundwater dating</li>
            <li>Atmospheric and climate research</li>
            <li>Medical imaging and research</li>
          </ul>
          <div><strong>Origin:</strong> ⁴⁰Ar formed from radioactive decay of ⁴⁰K</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArgonIsotopesSection;
