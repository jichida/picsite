import React from 'react';
import map from "lodash.map";
import imagesdata from "./images_data";

class Page extends React.Component {
	render() {
        return (
            <div className="headerbaiyue">
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default Page;