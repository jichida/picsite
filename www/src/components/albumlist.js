import React from 'react';
import map from "lodash.map";
import imagesdata from "./images_data";

class Page extends React.Component {
    
	render() {
        let nav = this.props.nav;
        return (
            <div className="albumlist">
            	<ul>
	                {   nav === "mv" &&
	                	map(imagesdata.data.mv, (v, i)=>{
							return (<li onClick={()=>{this.props.history.push(`/album/mv/${v.albumid}/1`)}} key={i}><div><img src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/mv/${v.albumid}/0.jpg`} /><span key={i}>{v.name}</span></div></li>)
	                	})
	               	}
                    {   nav === "pa" &&
                        map(imagesdata.data.pa, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/pa/${v.albumid}/1`)}} key={i}><div><img src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/pa/${v.albumid}/0.jpg`} /><span key={i}>{v.name}</span></div></li>)
                        })
                    }
                    {   nav === "gx" &&
                        map(imagesdata.data.gx, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/gx/${v.albumid}/1`)}} key={i}><div><img src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/gx/${v.albumid}/0.jpg`} /><span key={i}>{v.name}</span></div></li>)
                        })
                    }
                    {
                        !nav && 
                        map(imagesdata.data.mv, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/mv/${v.albumid}/1`)}} key={i}><div><img src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/mv/${v.albumid}/0.jpg`} /><span key={i}>{v.name}</span></div></li>)
                        })
                    }
               </ul>
               <div className="showmore">资源每天更新，敬请期待...</div>
            </div>
        );
    }
}

export default Page;