import React from "react";
import { max } from 'd3';
import { Scales } from "./scale";
import { Points } from "./points";
import { XAxis, YAxis } from "./axes";


export function ScatterPlot(props){
    const {data, offsetX, offsetY, width, height, selectedPoint, onMouseEnter, onMouseOut} = props;
    const xScale = Scales.linear(0, max(data, (d)=> d.tripdurationS), 0, width);
    const yScale = Scales.linear(0, max(data, (d)=> d.tripdurationE), height, 0);
    
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Points data={data} xScale={xScale} yScale={yScale} width = {width} height = {height} 
            selectedPoint={selectedPoint} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}/>
            <YAxis axisLable={"Trip duration end in"} yScale={yScale} height={height}/>
            <XAxis axisLable={"Trip duration start from"} chartType={"scatter"} xScale={xScale} height={height} width={width}/>
        </g>
    
}