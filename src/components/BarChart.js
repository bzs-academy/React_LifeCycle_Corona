import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';



 
function BarChart ({...country}) {
   
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: country.name
        },
        
        data: [{
            type: "column",
            indexLabelFontColor: '#5a5757',
            indexLabelPlacement: 'outside',
            dataPoints: [
                { label: "Confirmed", y: country.chartData[0]},
                { label: "Deaths", y: country.chartData[1]}
            ]
        }]
    }
    
    
    return (
        <div className="my-5 p-1 shadow">
            <CanvasJSChart options = {options} />
            
            <p style={{margin:'10px', fontSize: '12px'}}>Last Update : {new Date(country.chartData[2]).toLocaleString()}</p>

            <p style={{margin:'10px', fontSize: '12px', color:'red'}}>Deaths/Confirmed Rate : <span style={{fontSize: '18px'}}>{((country.chartData[1] / country.chartData[0]) * 100).toFixed(2)} % </span></p>

            <p style={{margin:'10px', fontSize: '12px'}}>Confirmed : <span style={{fontSize: '18px'}}>{country.chartData[0]}</span></p>

            <p style={{margin:'10px', fontSize: '12px'}}>Deaths : <span style={{fontSize: '18px'}}>{country.chartData[1]} </span></p>

        </div>
    );
	
}
 
export default BarChart;