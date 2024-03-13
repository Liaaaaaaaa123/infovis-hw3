import React from "react";
import { max } from "d3";
import { XAxis, YAxis } from "./axes";
import { Scales } from "./scale";
import { Bars } from './bars';

export function BarChart (props) {
    const {data, offsetX, offsetY, width, height, selectedPoint, onMouseEnter, onMouseOut} = props;
    const xScale = Scales.band(data.map(d => d.station), 0, width);
    const yScale = Scales.linear(0, max(data, (d)=> d.tripdurationE), height, 0);
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        <Bars data={data} xScale={xScale} yScale={yScale} barchart_height = {height}
        selectedPoint={selectedPoint} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}/>
        <YAxis axisLable={"Bikers star from"} yScale={yScale} height={height}/>
        <XAxis chartType={"bar"} xScale={xScale} height={height} width={width}/>
    </g>
}