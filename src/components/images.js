import React from 'react';
import Header from "./head";
import map from "lodash.map";
import imagesdata from "./images_data";
import get from "lodash.get";
import Novel from "./novel";
import Taoke from "./taoke";
import Loading from "./loading";

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
            this.setState({ imageStatus: false });
            let nav = this.props.match.params.nav;
            let imagesmap = {};
            map(imagesdata.data[nav], (v, i)=>{
                imagesmap[v.albumid] = v;
            })
            let imageslist = get(imagesmap,this.props.match.params.day,false);
            if(imageslist){
                let imageslength = imageslist.length;
                if(i){
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
        let imageslist = get(imagesmap,this.props.match.params.day,false);
        if(imageslist){
            albumtitle = imageslist.name;
            let imageslength = imageslist.length;
            let nextid = parseInt(this.props.match.params.id)+1;
            let provid = parseInt(this.props.match.params.id)-1;
            let imgtp = nav==="mv"? "jpg":"gif";
            if(provid<1){
                provid = false;
            }
            return (
                <div className="images">
                	<Header back={true} history={this.props.history} title={"LEESOO图片"} />
                    <div className="title">{albumtitle}</div>
                    <div className="showimg" onClick={this.clickpage.bind(this, day, "next", nextid)}>
                    	<img 
                            src={`http://yinuonet-img.oss-cn-beijing.aliyuncs.com/${nav}/${day}/${id}.${imgtp}`}
                            onLoad={this.handleImageLoaded.bind(this)}
                            onError={this.handleImageErrored.bind(this)}
                            />
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
                </div>
            );
        }else{
            return (
                <div className="images">
                    <Header back={true} history={this.props.history} title={"LEESOO图片"} />
                    <div className="homelinkdiv">
                        <span style={{lineHeight : "40px", color: "#999", display: "block", fontSize: "22px"}}>没有更多图片了</span>
                        <a href="/" className="homelink">返回首页</a>
                    </div>
                    <Novel pageid={id} />
                    <Taoke pageid={id} />
                </div>
            )
        }
    }
}
export default Page;