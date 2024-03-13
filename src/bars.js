import React from "react";

export function Bars(props){
    //complete the getColor when you are asked to
    const {data, xScale, yScale, barchart_height, selectedPoint, onMouseEnter, onMouseOut} = props;
    const getColor = (d) => {
        if (d.station === selectedPoint.station) {
            return "red"
        } else {
            return "steelblue"
        }
    }
    // const [selectedPoint, setSelectedPoint] = React.useState(null);
    // const onMouseEnter = (d) => {
    //     setSelectedPoint(d);
    // };

    // const onMouseOut = () => {
    //     setSelectedPoint(null);
    // };
    if (selectedPoint === null){
    return <g>
    {data.map(d => {
        return <rect key={d.station.replace('&','').replace(/\s/g, '')} 
        x={xScale(d.station)} 
        y={yScale(d.start)} 
        width = {xScale.bandwidth()} 
        height = {barchart_height - yScale(d.start)}
        fill={"steelblue"} 
        stroke={"black"}
        onMouseOver={()=>onMouseEnter(d)} onMouseOut={onMouseOut}
        />
    })}
    </g>
    }   
    else{
        return <g>
        {data.map(d => {
            return <rect key={d.station.replace('&','').replace(/\s/g, '')} 
            x={xScale(d.station)} 
            y={yScale(d.start)} 
            width = {xScale.bandwidth()} 
            height = {barchart_height - yScale(d.start)}
            fill={getColor(d)} 
            stroke={"black"}
            onMouseOver={()=>onMouseEnter(d)} onMouseOut={onMouseOut}
            />
        })}
        {data.filter(d => d.index === selectedPoint.index).map(d => {
            return <rect key={d.station.replace('&','').replace(/\s/g, '')} 
            x={xScale(d.station)} 
            y={yScale(d.start)} 
            width = {xScale.bandwidth()} 
            height = {barchart_height - yScale(d.start)}
            fill={getColor(d)} 
            stroke={"black"}
            onMouseOver={()=>onMouseEnter(d)} onMouseOut={onMouseOut}/>
        })}
        </g>    
    }
}