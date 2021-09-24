import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const Bar3D = ({data}) => {

  const dataSource = {
    chart: {
      caption: "Top 5 Most Popular Repos",
      yaxisname: "Repos",
      plottooltext:
      "This repo has <b>$value</b> stars</b>",
      decimals: "1",
      numberprefix: "",
      theme: "gammel"
    },
    data: data
  };

    return (
      <ReactFusioncharts
        type="bar3d"
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
}


export default Bar3D;
