import React from 'react';

function copy (id, attr) {
    let target = null;

    if (attr) {
        target = document.createElement('div');
        target.id = 'tempTarget';
        target.style.opacity = '0';
        if (id) {
            let curNode = document.querySelector('#' + id);
            target.innerText = curNode[attr];
        } else {
            target.innerText = attr;
        }
        document.body.appendChild(target);
    } else {
        target = document.querySelector('#' + id);
    }

    try {
        let range = document.createRange();
        range.selectNode(target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('复制成功,去关注公众号')
    } catch (e) {
        alert('复制失败')
    }

    if (attr) {
        // remove temp target
        target.parentElement.removeChild(target);
    }
}

class Page extends React.Component {
	render() {
        return (
            <div className="footerbaiyue">
            	<p>后续更精彩....</p>
            	<p style={{marginBottom: "-10px"}} ><img src="../../y2.png" style={{width: "240px"}} /></p>
                <p className="dispoint" style={{lineHeight: "32px", display: "flex"}}><span>1、关注微信公众号</span><img id="copyLnk" src="../../y3.gif" /></p>
                <p>2、回复数字“<span className="colorWarning">{this.props.num}</span>”继续<span className="colorWarning">免费</span>阅读</p>
            </div>
        );
    }
}

export default Page;