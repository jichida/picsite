import React from 'react';
import map from "lodash.map";
import noveldata from "./novel_data";

class Page extends React.Component {

	constructor(props) {  
        super(props);  
        this.state = {newlist: []};
	} 

	getRandomArrayElements=(arr,count)=>{
		var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
		while (i-- > min){
			index = Math.floor((i + 1) * Math.random());
			//alert(index)
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
			}
		this.setState({newlist : shuffled.slice(min)});
	}

	componentWillMount(){
		this.getRandomArrayElements(noveldata, 8);
	}

	render() {
        return (
            <div className="novellist">
            	<div className="title"><span>大家都在看</span><span onClick={this.getRandomArrayElements.bind(this, noveldata, 6)}>换一批</span></div>
                <ul>
                	{ 
                		map(this.state.newlist, (v, i)=>{
							return (<li key={i}><a href={v.url} target="_blank">{v.name}</a></li>)
	                	})
	                }
                </ul>
            </div>
        );
    }
}

export default Page;