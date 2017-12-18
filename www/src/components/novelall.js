import React from 'react';
import map from "lodash.map";
import noveldata from "./novel_data";

class Page extends React.Component {

	render() {
        return (
            <div className="novellist">
            	<div className="title"><span>魅力小说</span></div>
                <ul>
                	{ 
                		map(noveldata, (v, i)=>{
							return (<li key={i}><a href={v.url} target="_blank">{v.name}</a></li>)
	                	})
	                }
                </ul>
            </div>
        );
    }
}

export default Page;