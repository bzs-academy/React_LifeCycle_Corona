import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';



 
function PieChart (props) {

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    
    const { title, date, chartData} = props;

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        title:{
            text: ""
        },
        data: [{
            type: "pie",
			startAngle: 0,
			toolTipContent: "<b>{label}</b>: {y}",
			showInLegend: "true",
			legendText: "{label}",
			indexLabelFontSize: 16,
			indexLabel: "{label} - {y}",
            dataPoints: chartData
        }]
    }
		
    return (
        <div>
            <h2 className="text-center my-3">{title}</h2>
            <p className="text-center mb-5">{date}</p>
            <CanvasJSChart options = {options} />
        </div>
    );
	
}
 
export default PieChart;