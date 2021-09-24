import React, {useEffect} from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import {HandleLanguages} from "./../../utils";

// Resolves charts dependancy
charts(FusionCharts);

const Pie3D = ({data}) => {

  const dataSource = {
    chart: {
      caption: "Top Languages",
      showpercentvalues: "1",
      aligncaptionwithcanvas: "0",
      captionpadding: "0",
      decimals: "1",
      plottooltext:
        "<b>$percentValue</b> of repos use <b>$label</b>",
      centerlabel: "$value repos",
      theme: "gammel"
    },
    data: data
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

export default Pie3D;