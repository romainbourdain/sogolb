"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { category: "IA", activity: 320 },
  { category: "Blockchain", activity: 450 },
  { category: "Cloud", activity: 390 },
  { category: "Web", activity: 340 },
  { category: "Cyber", activity: 320 },
  { category: "Système", activity: 500 },
];

const chartConfig = {
  activity: {
    label: "activiy",
    color: "hsl(var(--chart-8))",
  },
} satisfies ChartConfig;

export function StatsChart({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="flex justify-center items-center size-full aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <PolarAngleAxis dataKey="category" />
            <PolarGrid />
            <Radar
              dataKey="activity"
              fill="var(--color-activity)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
