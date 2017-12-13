import React from 'react';
import map from "lodash.map";
import imagesdata from "./images_data";

class Page extends React.Component {

	constructor(props) {  
        super(props);  
        this.state = {shownavclass: 'leftnav'};
	} 

	shownav =(v)=>{
		let classname =  v==="show"?"leftnav shownav":"leftnav hidenav";
		this.setState({shownavclass: classname});
	}

	render() {
        return (
            <div className="header">
            	{ !!this.props.back && <a className="back" onClick={()=>{this.props.history.push(`/navmain/${this.props.nav}`)}}></a>}
                <span>{this.props.title}</span>
                <a onClick={this.shownav.bind(this, "show")} className="navlnk"></a>
                <div className={this.state.shownavclass}>
                	<div className="navwamp">
	                	<div className="t">导航</div>
						{
							map(imagesdata.nav, (v, i)=>{
								return (<div key={i}><a href={`/navmain/${i}`}>{v}</a></div>)	
							})
						}
					</div>
					<div className="bgwamp" onClick={this.shownav.bind(this, "hidden")}></div>
                </div>
            </div>
        );
    }
}

export default Page;