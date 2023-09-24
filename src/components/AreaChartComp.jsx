import React from "react";
import { AreaChart, Card, Title } from "@tremor/react";
const AreaChartComp = ({ chartdata, dataFormatter }) => {
  return (
    <div>
      <Card className="mt-4">
        <Title>Newsletter revenue over time (USD)</Title>
        <AreaChart
          className="mt-4 h-72"
          data={chartdata}
          index="date"
          categories={["SemiAnalysis", "The Pragmatic Engineer"]}
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
        />
      </Card>
    </div>
  );
};

export default AreaChartComp;
