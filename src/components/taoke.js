import React from 'react';
import map from "lodash.map";
import taoke from "./taoke_data";

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
		this.getRandomArrayElements(taoke, 4);
	}

	render() {
        return (
            <div className="taokelist">
            	<div className="title"><span>淘宝限时折扣</span><span onClick={this.getRandomArrayElements.bind(this, taoke, 4)}>换一批</span></div>
                <ul>
                	{	this.state.newlist.length > 0 &&
                		map(this.state.newlist, (v, i)=>{
							return (
								<li key={i}>
									<a href={v.url} target="_blank">
										<img src={v.pic} />
										<p className="tt">{v.title}</p>
										<p className="pic">
											<span>¥ {v.price}</span>
											<span><span>领券</span>{v.coupon}元</span>
										</p>
									</a>
								</li>
							)
	                	})
	                }
                </ul>
            </div>
        );
    }
}

export default Page;