"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import techstack from '../data/techstack.json' with { type: "json" };

const chartData = techstack;

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function Stats() {
  return (
    <div className="w-full mx-auto my-auto max-w-sm
     h-full 
     pt-4 pb-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-w-sm"
        >
          <RadarChart data={chartData}>
            {/* <ChartTooltip cursor={false} content={<ChartTooltipContent />} /> */}
            <PolarAngleAxis dataKey="name" />
            <PolarGrid />
            <Radar
              dataKey="domain"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
        <p className="text-center font-light text-sm">Tech stack</p>
    </div>
  )
}
