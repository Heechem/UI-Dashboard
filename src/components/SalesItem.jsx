import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import {
  Bold,
  Button,
  Card,
  Divider,
  DonutChart,
  Flex,
  List,
  ListItem,
  Metric,
  Tab,
  TabGroup,
  TabList,
  Text,
  Title,
} from "@tremor/react";
import React, { useState } from "react";

const stocks = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logibling Inc.",
    value: 4367,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Raindrop Inc.",
    value: 3421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mwatch Group",
    value: 1432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const SalesItem = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Card className="mx-auto max-w-full">
      <Flex className="flex-col space-x-8 lg:flex-row">
        <Title>Overview</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>Chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className="mt-8">Stocks Values</Text>
      <Metric>3754,12 $</Metric>
      <Divider />
      <Text className="mt-8">
        <Bold>Asset Value</Bold>
      </Text>
      <Text className="mt-3">1 Asset Class -5 Holdings</Text>
      {selectedIndex === 0 ? (
        <DonutChart
          data={stocks}
          valueFormatter={dataFormatter}
          colors={["yellow", "purple", "indigo", "rose", "cyan", "amber"]}
          category="value"
          index="name"
          className="mt-8"
        />
      ) : (
        <>
          <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
              <Bold>Stocks</Bold>
            </Text>
            <Text>Since Transactions</Text>
          </Flex>
          <List>
            {stocks.map((item, index) => (
              <ListItem key={index}>
                <Text color="red">{item.name}</Text>
                <Flex className="space-x-2 " justifyContent="end">
                  <Text>
                    ${Intl.NumberFormat("ca").format(item.value.toString())}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Flex className="mt-6 border-t pt-4">
        <Button
          size="xs"
          variant="light"
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
    </Card>
  );
};

export default SalesItem;
