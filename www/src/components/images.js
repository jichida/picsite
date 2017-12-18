import React from 'react';
import Header from "./head";
import map from "lodash.map";
import imagesdata from "./images_data";
import get from "lodash.get";
import Novel from "./novel";
import Taoke from "./taoke";
import Loading from "./loading";
import Footer from "./foot";
import Discribe from "./describe";
import * as Scroll from 'react-scroll';
let scroll = Scroll.animateScroll;
// import LazyLoad from 'react-lazyload';

// let showimgtimeout = null;
// let showloadingtimeout = null;

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            imageStatus : false
        };
    }

    handleImageLoaded() {
        this.setState({ imageStatus: true });
    }
 
    handleImageErrored() {
        this.setState({ imageStatus: true });
    }
    //document.body.scrollTop
    componentDidMount(){
        // let nav = this.props.match.params.nav;
        // let day = this.props.match.params.day;
        // if(!!imagesdata.data[nav]){
        //     console.log(imagesdata.data[nav][]);
        //     // this.setState({ albumtitle: imagesdata.data[nav].name });
        // }
    }
    clickpage =(d, tp, i)=>{
         // window.clearTimeout(showloadingtimeout);
        if(this.state.imageStatus){
            let nav = this.props.match.params.nav;
            let imagesmap = {};
            map(imagesdata.data[nav], (v, i)=>{
                imagesmap[v.albumid] = v;
            })
            let imageslist = get(imagesmap,this.props.match.params.day,false);
            if(imageslist){
                let imageslength = imageslist.length;
                if(i){
                    this.setState({ imageStatus: false });
                    if(i>imageslength){
                        d = parseInt(d)+1;
                        i = 1;
                    }
                    this.props.history.push(`/album/${nav}/${d}/${i}`);
                }
            }else{
                this.props.history.push(`/`);
            }
        }else{
        }
    }

	render() {
        // document.body.scrollTop;
        scroll.scrollToTop();
        // window.clearTimeout(showimgtimeout);
        // showimgtimeout = window.setTimeout(()=>{this.setState({ imageStatus: true });},500);
        let day = this.props.match.params.day;
        let id = this.props.match.params.id;
        let nav = this.props.match.params.nav;
        let imagesmap = {};
        let albumtitle = "";
        map(imagesdata.data[nav], (v, i)=>{
            imagesmap[v.albumid] = v;
        })
        let imageslist = get(imagesmap,day,false);
        if(imageslist){
            if(nav ==="pa"){albumtitle = `邪恶第${day}期`;}
            if(nav ==="mv"){albumtitle = `美女第${day}期`;}
            if(nav ==="gx"){albumtitle = `搞笑第${day}期`;}
            let imageslength = imageslist.length;
            let nextid = parseInt(this.props.match.params.id)+1;
            let provid = parseInt(this.props.match.params.id)-1;
            let imgtp = nav==="mv"? "jpg":"gif";
            if(provid<1){
                provid = false;
            }

            let imgurl = `http://yinuonet-img.oss-cn-beijing.aliyuncs.com/${nav}/${day}/${id}.${imgtp}`;
            let loadurl = `http://yinuonet-img.oss-cn-beijing.aliyuncs.com/${nav}/${day}/${parseInt(id)+1}.${imgtp}`;
            let imgid = 0;
            if(nav==="gx"){
                imgid = (parseInt(day)-1)*10+parseInt(id);
                imgurl = `http://yinuonet-img.oss-cn-beijing.aliyuncs.com/${nav}/${day}/${imgid}.gif`;
                loadurl = `http://yinuonet-img.oss-cn-beijing.aliyuncs.com/${nav}/${day}/${imgid+1}.gif`;
            }

            return (
                <div className="images">
                	<Header back={true} nav={nav} history={this.props.history} title={"LEESONG图片"} />
                    <div className="title">{albumtitle}</div>
                    <div className="showimg" onClick={this.clickpage.bind(this, day, "next", nextid)}>
                        <img 
                            src={imgurl}
                            onLoad={this.handleImageLoaded.bind(this)}
                            onError={this.handleImageErrored.bind(this)}
                            alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式"
                            />
                        { id < imageslength && 
                        <img 
                            src={loadurl}
                            onLoad={this.handleImageLoaded.bind(this)}
                            onError={this.handleImageErrored.bind(this)}
                            alt="美女,写真,GIF,GIF出处,电影GIF,美女GIF,邪恶GIF,番号,求出处,老司机,动态图,撸管图,邪恶动态图,papa,后入式"
                            style={{display: "none"}}
                            />
                        }
                        { nav==="gx" && <p style={{padding:"10px"}}>{Discribe.gx[imgid-1]}</p> }
                    </div>
                    <div className="showbtn">
    					<span className={provid?"i lnk":"i"} onClick={this.clickpage.bind(this, day, "prov", provid)}>上一页</span>
    					<span className="i c">
                            <b>{this.props.match.params.id}</b>/<b>{imagesmap[this.props.match.params.day].length}</b>
                        </span>
    					<span className={nextid?"i lnk":"i"} onClick={this.clickpage.bind(this, day, "next", nextid)}>下一页</span>
                    </div>
                    <Novel />
                    <Taoke />
                    { !this.state.imageStatus && <Loading /> }
                    <Footer />
                </div>
            );
        }else{
            return (
                <div className="images">
                    <Header back={true} nav={nav} history={this.props.history} title={"LEESOO图片"} />
                    <div className="homelinkdiv">
                        <span style={{lineHeight : "40px", color: "#999", display: "block", fontSize: "22px"}}>没有更多图片了</span>
                        <a href="/" className="homelink">返回首页</a>
                    </div>
                    <Novel pageid={id} />
                    <Taoke pageid={id} />
                    <Footer />
                </div>
            )
        }
    }
}
export default Page;