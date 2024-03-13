import React from "react";

export function Points(props){
    const {data, xScale, yScale, width, height, selectedPoint, onMouseEnter, onMouseOut} = props;
    // const [selectedPoint, setSelectedPoint] = React.useState(null);
    // const onMouseEnter = (d) => {
    //     // console.log('mouse-on', d);
    //     setSelectedPoint(d);
    // };
    // const onMouseOut = () => {
    //     setSelectedPoint(null);
    // };

    const getColor = (d) => {
        if (d.station == selectedPoint.station) {
            return 'red'
        } 
        else {
            return 'steelblue'
            }
    }
    const getRadius = (d) => {
        if (d.station == selectedPoint.station) {
            return 10
        }
        else {
            return 5
            }    
    }

    if (selectedPoint === null){
        return <g>
            {data.map(d => {
            return <circle key={d.station.replace('&','').replace(/\s/g, '')} 
            cx={xScale(d.tripdurationS)} 
            cy={yScale(d.tripdurationE)} 
            r={5} 
            fill={"steelblue"} 
            stroke={"black"}
            onMouseOver={(event)=>{
                let point = d;
                onMouseEnter(event, point);
            }} onMouseOut={()=>onMouseOut()}
            />
        })}
            </g>
    }
    else{
        return <g>
            {data.map(d => {
            return <circle key={d.station.replace('&','').replace(/\s/g, '')} 
            cx={xScale(d.tripdurationS)} 
            cy={yScale(d.tripdurationE)} 
            r={getRadius(d)} 
            fill={getColor(d)} 
            stroke={"black"}
            onMouseOver={(event)=>{
                let point = d;
                onMouseEnter(event, point);
            }} onMouseOut={()=>onMouseOut()}
            />
        })}
         <rect x={0} y={0} width={width} height={height} fill={"yellow"} opacity={0.6}/>
        {data.filter(d => d.station === selectedPoint.station).map( d => {
            return <circle key={d.station} 
            cx={xScale(d.tripdurationS)} cy={yScale(d.tripdurationE)} 
            r={getRadius(d)} fill={getColor(d)} stroke={"black"}
            onMouseOver={(event)=>{
                let point = d;
                onMouseEnter(event, point);
            }} onMouseOut={()=>onMouseOut()}
            />
        })}

            </g>
    }
}
