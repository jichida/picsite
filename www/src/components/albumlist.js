import React from 'react';
import map from "lodash.map";
import imagesdata from "./images_data";
import LazyLoad from 'react-lazyload';

let resizetimecontent = null;
class Page extends React.Component {

    constructor(props) {  
        super(props);  
        this.state = {imgheight: 173};
    }
    
    onWindowResize=()=> {
        window.clearTimeout(resizetimecontent);
        resizetimecontent = window.setTimeout(()=>{
            this.setState({
                imgheight: Math.floor((window.innerWidth-30)/2),
            });
        }, 10)
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }
    
	render() {
        let nav = this.props.nav;
        let height = this.state.imgheight;
        return (
            <div className="albumlist">
            	<ul>
	                {   nav === "mv" &&
	                	map(imagesdata.data.mv, (v, i)=>{
							return (<li onClick={()=>{this.props.history.push(`/album/mv/${v.albumid}/1`)}} key={i}>
                                <div>
                                
                                <LazyLoad height={height}>
                                <img 
                                    src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/mv/${v.albumid}/0.jpg`}
                                    alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" />
                                </LazyLoad>

                                <span key={i}>{v.name}</span></div></li>)
	                	})
	               	}
                    {   nav === "pa" &&
                        map(imagesdata.data.pa, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/pa/${v.albumid}/1`)}} key={i}><div>
                                <LazyLoad height={height}>
                                <img alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/pa/${v.albumid}/0.jpg`} />
                                </LazyLoad>
                                <span key={i}>{v.name}</span></div></li>)
                        })
                    }
                    {   nav === "gx" &&
                        map(imagesdata.data.gx, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/gx/${v.albumid}/1`)}} key={i}><div>
                                <LazyLoad height={height}>
                                <img alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/gx/${v.albumid}/0.jpg`} />
                                </LazyLoad>
                                <span key={i}>{v.name}</span></div></li>)
                        })
                    }
                    {
                        !nav && 
                        map(imagesdata.data.mv, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/mv/${v.albumid}/1`)}} key={i}><div>
                                <LazyLoad height={height}>
                                <img alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/mv/${v.albumid}/0.jpg`} />
                                </LazyLoad>
                                <span key={i}>{v.name}</span></div></li>)
                        })
                    }
               </ul>
               <div className="showmore">资源每天更新，敬请期待...</div>
            </div>
        );
    }
}

export default Page;