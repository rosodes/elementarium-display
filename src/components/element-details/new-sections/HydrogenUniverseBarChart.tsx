
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

// Доля водорода в разных средах, %
const data = [
  { env: "Universe", percent: 75, color: "#818cf8" },
  { env: "Sun", percent: 74, color: "#fbbf24" },
  { env: "Earth's Oceans", percent: 11, color: "#38bdf8" },
  { env: "Earth's Crust", percent: 0.15, color: "#a3e635" },
  { env: "Human Body", percent: 10, color: "#60a5fa" },
];

const HydrogenUniverseBarChart: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Hydrogen in the Universe and on Earth</CardTitle>
    </CardHeader>
    <CardContent className="p-4">
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{top: 10, right: 30, left: 6, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 2" />
            <XAxis dataKey="env" tick={{fontSize: 12}} />
            <YAxis tickFormatter={v => `${v}%`} />
            <Tooltip formatter={(v) => [`${v}%`, "Hydrogen"]} />
            <Bar dataKey="percent">
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-center mt-2 text-gray-600 dark:text-gray-300">
        Hydrogen is the <b>most abundant</b> element in the universe!
      </div>
    </CardContent>
  </Card>
);

export default HydrogenUniverseBarChart;
