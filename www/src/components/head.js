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
            	
                <span>{this.props.title}</span>
                <div className={this.state.shownavclass}>
                	<div className="navwamp">
	                	<div className="t">导航</div>
					</div>
					<div className="bgwamp" onClick={this.shownav.bind(this, "hidden")}></div>
                </div>
            </div>
        );
    }
}

export default Page;