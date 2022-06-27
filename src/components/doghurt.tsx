import React from "react";
import { PieChart } from "react-native-svg-charts";
import { Circle, G, Line } from "react-native-svg";
import { View, Text, useWindowDimensions } from "react-native";
import {Dimensions, Platform } from 'react-native'
// import { data } from '../data/portfolio'

const { height, width } = Dimensions.get(
  Platform.OS === "android" ? "screen" : "window"
);
// const { height, width } = useWindowDimensions()
class DoghurtChart extends React.PureComponent {
  render() {
    const data = [
      {
        key: 1,
        amount: 50,
        svg: { fill: "#C2C7FF" },
        label: "Medium Company stocks (IJH)",
      },
      {
        key: 2,
        amount: 195,
        svg: { fill: "#1826D0" },
        label: "Large Company Stocks (VOO)",
      },
      {
        key: 3,
        amount: 50,
        svg: { fill: "#7982FA" },
        label: "Small Company Stocks (IJR)",
      },
      {
        key: 4,
        amount: 90,
        svg: { fill: "#EEEFFF" },
        label: "International Company Stocks",
      },
    ];

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          // <Text
          //     key={index}
          //     x={pieCentroid[ 0 ]}
          //     y={pieCentroid[ 1 ]}
          //     fill={'white'}
          //     textAnchor={'middle'}
          //     alignmentBaseline={'middle'}
          //     fontSize={24}
          //     stroke={'black'}
          //     strokeWidth={0.2}
          // >
          //     {data.amount}
          // </Text>
          <G key={index}>
            <Line
              x1={labelCentroid[0]}
              y1={labelCentroid[1]}
              x2={pieCentroid[0]}
              y2={pieCentroid[1]}
              stroke={data.svg.fill}
            />
            {/* <Circle
              cx={labelCentroid[0]}
              cy={labelCentroid[1]}
              r={15}
            //   fill={ data.svg.fill }
            > */}
              {/* <Text
                style={{ fontSize: 10, color: "black" }}
                fill={"white"}
                stroke={"black"}
                strokeWidth={0.2}
              >
                helloworld
              </Text> */}
            {/* </Circle> */}
          </G>
        );
      });
    };

    return (
      <PieChart
        style={{ height: height / 3.8 }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        // spacing={0}
        innerRadius={width / 7.2}
        outerRadius={width / 4.2353}
        labelRadius={width / 4}
        // padAngle = {36}
      >
        <Labels />
      </PieChart>
    );
  }
}

export default DoghurtChart;
