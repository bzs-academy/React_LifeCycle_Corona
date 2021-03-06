import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';



 
function DailyChart (props) {

    const { totalConfirmed, totalDeaths } = props

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    
    const options = {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: ""
        },
        axisY: {
          title: "( Number of Cases )"
        },
        toolTip: {
          shared: true
        },
        legend: {
          verticalAlign: "center",
          horizontalAlign: "right",
          reversed: true,
          cursor: "pointer"
        },
        data: [
          {
              type: "stackedArea",
              name: "Deaths",
              showInLegend: true,
              xValueFormatString: "DD/MM/YYYY",
              dataPoints: totalDeaths
          },
          {
              type: "stackedArea",
              name: "Confirmed",
              showInLegend: true,
              xValueFormatString: "dd/mm/yyyy",
              dataPoints: totalConfirmed
          }
          
      ]
  }
    
    return (
        <div className="my-5 p-3 shadow">
            <CanvasJSChart options = {options} />
        </div>
    );
	
}
 
export default DailyChart;