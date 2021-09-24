import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const ExampleChart = ({data}) => {
  data.map(item => {
    if (item.label === null) {
      item.label = "Others"
    }
  })
  const dataSource = {
    chart: {
      caption: "Android Distribution for our app",
      subcaption: "For all users in 2017",
      showpercentvalues: "1",
      defaultcenterlabel: "Android Distribution",
      aligncaptionwithcanvas: "0",
      captionpadding: "0",
      decimals: "1",
      plottooltext:
        "<b>$percentValue</b> of our Android users are on <b>$label</b>",
      centerlabel: "# Users: $value",
      theme: "fusion"
    },
    data: data ? data : []
  };
  
  return (
    <ReactFusioncharts
    type="doughnut2d"
    width="100%"
    height="400"
    dataFormat="JSON"
    dataSource={dataSource}
  />
  )
}

export default ExampleChart;