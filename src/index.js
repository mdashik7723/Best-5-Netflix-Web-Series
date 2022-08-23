import React from "react";
import ReactDom from "react-dom"
import Card from "./Cards";
import './index.css'
import Sdata from "./Sdata";

ReactDom.render(
    <>
        <h1 className='heading_style'> List of top 5 Netflix Series 2022 </h1>
        {Sdata.map((val) => {
            return (
                <Card
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.links}
                />

            );
        })
        };
    </>,
    document.getElementById("root")
);