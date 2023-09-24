import React from "react";
import CardItem from "./CardItem";
import { AreaChart } from "@tremor/react";
import AreaChartComp from "./AreaChartComp";
import TableComponenet from "./TableComponenet";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const LeftColumn = () => {
  return (
    <div className="flex w-full flex-col justify-between p-2">
      <div className="flex w-full flex-col gap-2 ">
        <CardItem />
        <CardItem />
        <CardItem />
        <div className="w-full flex-auto">
          <AreaChartComp chartdata={chartdata} dataFormatter={dataFormatter} />
          <TableComponenet />
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
