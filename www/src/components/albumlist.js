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
							return (<li onClick={()=>{this.props.history.push(`/album/mv/${v.albumid}/1`)}} key={i}>
                                <div><img 
                                    src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/mv/${v.albumid}/0.jpg`}
                                    alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" />
                                <span key={i}>{v.name}</span></div></li>)
	                	})
	               	}
                    {   nav === "pa" &&
                        map(imagesdata.data.pa, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/pa/${v.albumid}/1`)}} key={i}><div><img alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/pa/${v.albumid}/0.jpg`} /><span key={i}>{v.name}</span></div></li>)
                        })
                    }
                    {   nav === "gx" &&
                        map(imagesdata.data.gx, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/gx/${v.albumid}/1`)}} key={i}><div><img alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/gx/${v.albumid}/0.jpg`} /><span key={i}>{v.name}</span></div></li>)
                        })
                    }
                    {
                        !nav && 
                        map(imagesdata.data.mv, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/mv/${v.albumid}/1`)}} key={i}><div><img alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/mv/${v.albumid}/0.jpg`} /><span key={i}>{v.name}</span></div></li>)
                        })
                    }
               </ul>
               <div className="showmore">资源每天更新，敬请期待...</div>
            </div>
        );
    }
}

export default Page;