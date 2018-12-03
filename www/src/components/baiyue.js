import React from 'react';
import Header from "./head";
import Headerbaiyue from "./headbaiyue";
import map from "lodash.map";
import Baiyue_data from "./baiyue_data";
import get from "lodash.get";
import Novel from "./novel";
import Taoke from "./taoke";
import Loading from "./loading";
import Footerbaiyue from "./footbaiyue";
import Discribe from "./describe";

class Page extends React.Component {

	render() {
        
        let thisObj = Baiyue_data.data[this.props.match.params.id];
        let ojbId = this.props.match.params.id;
        let imgdemolist = [];
        for(let i=0; i<thisObj.imglength;i++ ){
            imgdemolist.push(<p key={i}><img src={`../${ojbId}/${i+1}.jpg`} /></p>);
        }

        return (
            <div className="baiyue">
                <div className="title">{thisObj.title}</div>
                {
                    map(imgdemolist, (img, i)=>{
                        return img;
                    })
                }
                <Footerbaiyue num={ojbId} />
            </div>
        )
    }
}
export default Page;