import React from "react";
import ReactDom from "react-dom"
import Card from "./Cards";
import './index.css'
import Sdata from "./Sdata";


console.log(Sdata[0].sname);

ReactDom.render(
    <>


        <h1 className='heading_style'> List of top 5 Netflix Series 2022 </h1>
        <Card
            imgsrc={(Sdata[0].imgsrc)}
            title={(Sdata[0].title)}
            sname={(Sdata[0].sname)}
            link={(Sdata[0].links)}
            />

        <Card
            imgsrc={(Sdata[1].imgsrc)}
            title={(Sdata[1].title)}
            sname={(Sdata[1].sname)}
            link={(Sdata[1].links)}
        />
        <Card
            imgsrc={(Sdata[2].imgsrc)}
            title={(Sdata[2].title)}
            sname={(Sdata[2].sname)}
            link={(Sdata[2].links)}
        />
    </>,
    document.getElementById("root")
);