import React from 'react';
import map from "lodash.map";
import reverse from "lodash.reverse";
import imagesdata from "./images_data";
import LazyLoad from 'react-lazyload';
import Novelall from './novelall';

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
        let newmv = imagesdata.data.mv;
        let newpa = imagesdata.data.pa;
        let newgx = imagesdata.data.gx;
        return (
            <div className="albumlist">
            	<ul>
	                {   nav === "mv" &&
	                	map(newmv, (v, i)=>{
							return (<li onClick={()=>{this.props.history.push(`/album/mv/${v.albumid}/1`)}} key={i}>
                                <div>
                                
                                <LazyLoad height={height}>
                                <img 
                                    src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/mv/${v.albumid}/0.jpg`}
                                    alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" />
                                </LazyLoad>
                                <span key={i}>{`第${v.albumid}期:`}{v.name}</span></div></li>)
	                	})
	               	}
                    {   nav === "pa" &&
                        map(newpa, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/pa/${v.albumid}/1`)}} key={i}><div>
                                <LazyLoad height={height}>
                                <img alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/pa/${v.albumid}/0.jpg`} />
                                </LazyLoad>
                                <span key={i}>{`邪恶动图第${v.albumid}期`}</span></div></li>)
                        })
                    }
                    {   nav === "gx" &&
                        map(newgx, (v, i)=>{
                            let img0name = i==0?`1`:`${i}1`;
                            return (<li onClick={()=>{this.props.history.push(`/album/gx/${v.albumid}/1`)}} key={i}><div>
                                <LazyLoad height={height}>
                                <img alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/gx/${v.albumid}/${img0name}.gif`} width={height} height={height} />
                                </LazyLoad>
                                <span key={i}>{`第${v.albumid}期`}</span></div></li>)
                        })
                    }
                    {
                        nav === "xs" &&
                        <Novelall />
                    }
                    {
                        !nav && 
                        map(newmv, (v, i)=>{
                            return (<li onClick={()=>{this.props.history.push(`/album/mv/${v.albumid}/1`)}} key={i}><div>
                                <LazyLoad height={height}>
                                <img alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式" src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/mv/${v.albumid}/0.jpg`} />
                                </LazyLoad>
                                <span key={i}>{`第${v.albumid}期:`}{v.name}</span></div></li>)
                        })
                    }

               </ul>
               <div className="showmore">资源每天更新，敬请期待...</div>
            </div>
        );
    }
}

export default Page;