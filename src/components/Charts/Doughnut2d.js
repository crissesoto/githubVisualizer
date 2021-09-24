import React from 'react';

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const Doughnut2d = ({data}) => {


  const dataSource = {
    chart: {
      caption: "Top Stars Per Language",
      enablesmartlabels: "1",
      showlabels: "1",
      numbersuffix: " stars",
      usedataplotcolorforlabels: "1",
      plottooltext: "$label has <b>$value</b> stars",
      donutRadius: "35%",
      theme: "fusion"
    },
    data: data
  };
    return (
      <ReactFusioncharts
        type="doughnut3d"
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
}


export default Doughnut2d;
