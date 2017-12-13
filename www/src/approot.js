import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router, Route } from 'react-router-dom';
import App from './components/index';
import Images from './components/images';
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()
/*
	/  					首页          ／网站首页，展示相册列表，每一个相册的首张图片
	/album/:day/:id  	展示相册图片，  并且展示图片数量，和上一张下一张操作

*/
const AppRoot = (props) => {
    return (
        <Router history={customHistory}>
            <div className="container">
                <Route exact path="/" component={App} />
                <Route exact path="/navmain/:nav" component={App} />
                <Route path="/album/:nav/:day/:id" component={Images} />
            </div>
        </Router>
    );
}
export default AppRoot;