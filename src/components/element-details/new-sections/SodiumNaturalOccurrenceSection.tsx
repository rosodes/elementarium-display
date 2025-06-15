
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 2.36% (6th most abundant)</div>
          <div><strong>Abundance in seawater:</strong> 1.08% by weight</div>
          <div><strong>Natural sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Rock salt (halite) - NaCl deposits</li>
            <li>Seawater and salt lakes</li>
            <li>Sodium carbonate (trona) deposits</li>
            <li>Feldspar minerals (albite - NaAlSi₃O₈)</li>
            <li>Salt domes and evaporite deposits</li>
            <li>Brine wells and underground salt formations</li>
          </ul>
          <div><strong>Major deposits:</strong> Great Salt Lake (USA), Dead Sea, Atacama Salt Flat (Chile)</div>
          <div><strong>Biological role:</strong> Essential electrolyte in all living organisms</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SodiumNaturalOccurrenceSection;
