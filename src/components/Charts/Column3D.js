import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const Column3D = ({data}) => {

  const dataSource = {
    chart: {
      caption: "Top 5 most forked repos",
      yaxisname: "total forks",
      plottooltext:
      "This repo has been forked <b>$value</b> times. </b>",
      decimals: "1",
      theme: "gammel"
    },
    data: data
  };

  return (
    <ReactFusioncharts
    type="column3d"
    width="100%"
    height="400"
    dataFormat="JSON"
    dataSource={dataSource}
    />
  )
}

export default Column3D;
