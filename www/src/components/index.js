import React from "react";
import Header from "./head";
import Albumlist from "./albumlist";
import imagesdata from "./images_data";
import Footer from "./foot";

class Page extends React.Component {

	render() {
		let nav = this.props.match.params.nav;
        return (
            <div className="index">
                <Header title={"LEESOO图片"} />
                <Albumlist history={this.props.history} nav={nav} />
                <Footer />
            </div>
        );
    }
}

export default Page;