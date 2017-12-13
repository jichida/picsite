import React from 'react';

class Page extends React.Component {

	render() {
        return (
            <div className="loading">
            	<div className="weui-loading weui-icon_toast"></div>
            	<p className="weui-toast__content">加载中...</p>
            </div>
        );
    }
}

export default Page;