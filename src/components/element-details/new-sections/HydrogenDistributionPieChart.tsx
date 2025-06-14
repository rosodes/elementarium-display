
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Примерные данные (процентное содержание элементов в теле человека)
const data = [
  { name: "Hydrogen (H)", value: 10, color: "#60a5fa" },
  { name: "Oxygen (O)", value: 65, color: "#38bdf8" },
  { name: "Carbon (C)", value: 18, color: "#a3e635" },
  { name: "Nitrogen (N)", value: 3, color: "#fbbf24" },
  { name: "Other", value: 4, color: "#a1a1aa" },
];

const COLORS = data.map(d => d.color);

const HydrogenDistributionPieChart: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Hydrogen in the Human Body</CardTitle>
    </CardHeader>
    <CardContent className="p-4">
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={38}
              outerRadius={70}
              fill="#60a5fa"
              paddingAngle={2}
              label={({ name, percent }) => percent > 0.08 ? `${name.split(" ")[0]} ${(percent * 100).toFixed(0)}%` : ""}
            >
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(v, n) => [`${v}%`, n]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 text-xs text-gray-700 dark:text-gray-300 text-center">
        Did you know? Hydrogen makes up about <b>10%</b> of your body mass—it's crucial to all living things!
      </div>
    </CardContent>
  </Card>
);

export default HydrogenDistributionPieChart;
