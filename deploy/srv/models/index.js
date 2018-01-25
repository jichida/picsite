var imgdata = require('../public/javascripts/images_data.js');
var novellist = require('../public/javascripts/novel_data.js');
var describe = require('../public/javascripts/describe.js');
//首页
exports.index = function(req, res){
	// console.log(imgdata.imagesdata.data.mv);
	// var id = req.params.id;//获取id
	var renders = {
		datanav : imgdata.imagesdata.nav,
		imgalmlist : imgdata.imagesdata.data.mv, 
		urlnav : "mv",
		layout : true,
		back: false,
		title: "性感美女 美女私房照 宅男福利"
	}
	res.render('index.html',renders);
}
//某相册首页
exports.navmain = function(req, res){
	// console.log(imgdata.imagesdata.data.mv);
	var urlnav = req.params.nav;//获取id
	var titledata = {
		mv : "清纯美女 性感美女 童颜巨乳 宅男福利 私房照",
		pa : "啪啪啪动态图 撸管图 邪恶动态图 后入式动态图 gif动态图 动态福利图 李毅吧动态图",
		gx : "搞笑动态图",
	}

	var renders = {
		datanav : imgdata.imagesdata.nav,
		urlnav: urlnav,
		imgalmlist : imgdata.imagesdata.data[urlnav], 
		layout : true,
		back: false,
		title: titledata[urlnav]
	}
	res.render('index.html',renders);
}
//没有更多图片了
exports.notalbum = function(req, res){
	var shuffled = novellist.noveldata.slice(0);
	var ii = novellist.noveldata.length;
	var min_i = ii - 10;
	var temp_i;
	var index_i;
    while (ii -- > min_i) {
        index_i = Math.floor((ii + 1) * Math.random());
        temp_i = shuffled[index_i];
        shuffled[index_i] = shuffled[ii];
        shuffled[ii] = temp_i;
    }
    var noveldata = shuffled.slice(min_i);
	// console.log(imgdata.imagesdata.data.mv);
	var urlnav = req.params.nav;//获取id
	var renders = {
		datanav : imgdata.imagesdata.nav,
		urlnav: urlnav,
		imgalmlist : imgdata.imagesdata.data[urlnav], 
		noveldata: noveldata,
		layout : true,
		back: true,
		title: "清纯美女 性感美女 童颜巨乳 宅男福利 私房照 啪啪啪动态图 撸管图 邪恶动态图 后入式动态图 gif动态图 动态福利图 李毅吧动态图 搞笑动态图"
	}
	res.render('notalbum.html',renders);
}
//小说列表 novel
exports.novel = function(req, res){
	// console.log(imgdata.imagesdata.data.mv);
	var urlnav = req.params.nav;//获取id
	var renders = {
		datanav : imgdata.imagesdata.nav,
		urlnav: urlnav,
		noveldata : novellist.noveldata, 
		layout : true,
		back: false,
		title: "魅力小说 网络小说 言情小说 穿越小说 色色的小说 性感小说"
	}
	res.render('novel.html',renders);
}
//图片详情页
exports.album = function(req, res){
	// console.log(imgdata.imagesdata.data.mv);
	var urlnav = req.params.nav;//获取类型id
	var albumid = req.params.albumid;//获取相册id
	var imgname = req.params.imgname;//获取图片名称
	var imgalmlist = imgdata.imagesdata.data[urlnav];

	// console.log(imgalmlist);
	var albumname = {
		pa: "邪恶动图",
		gx: "搞笑动图",
		mv: "美女图片",
	}
	var nextid = parseInt(imgname)+1;
    var provid = parseInt(imgname)-1;
    var provclass = "i lnk";
    if(provid < 1){
    	provid = false;
    	provclass = "i";
    }

    console.log("noveldata.noveldata");
    console.log(describe.describe.gx);

	var title = albumname[urlnav]+"第"+albumid+"期";
	var imgbaseurl = "http://yinuonet-img.oss-cn-beijing.aliyuncs.com/";
	var imgurl = "";
	var nexturl = "";
	var nextlnk = "";//
	var provlnk = "";//
	var gx_url_imgname = "";
	var titles = '';

	if(urlnav==="mv"){
		imgurl = imgbaseurl+urlnav+"/"+albumid+"/"+imgname+".jpg";
		nexturl = imgbaseurl+urlnav+"/"+albumid+"/"+nextid+".jpg";
		if(!!provid){provlnk = "/album/mv/"+albumid+"/"+provid;}
		nextlnk = "/album/mv/"+albumid+"/"+nextid;
		if(nextid > imgalmlist[parseInt(albumid)-1].length){
			nexturl = "";
			nextlnk = "/album/mv/"+(parseInt(albumid)+1)+"/1";
		}
		if(parseInt(albumid)+1>imgalmlist.length && nextid > imgalmlist[parseInt(albumid)-1].length){
			nextlnk = "/notalbum/"+urlnav;
		}
	}
	if(urlnav==="pa"){
		imgurl = imgbaseurl+urlnav+"/"+albumid+"/"+imgname+".gif";
		nexturl = imgbaseurl+urlnav+"/"+albumid+"/"+nextid+".gif";
		if(!!provid){provlnk = "/album/pa/"+albumid+"/"+provid;}
		nextlnk = "/album/pa/"+albumid+"/"+nextid;
		if(nextid > imgalmlist[parseInt(albumid)-1].length){
			nexturl = "";
			nextlnk = "/album/pa/"+(parseInt(albumid)+1)+"/1";
		}

		if(parseInt(albumid)+1>imgalmlist.length && nextid > imgalmlist[parseInt(albumid)-1].length){
			nextlnk = "/notalbum/"+urlnav;
		}
	}
	if(urlnav==="gx"){
		var url_imgname = (parseInt(albumid)-1)*10+parseInt(imgname);
		
		var url_nextid = parseInt(url_imgname)+1;
    	var url_provid = parseInt(url_imgname)-1;

    	// console.log("url_nextid");
    	// console.log(albumid);
    	// console.log(url_nextid);
    	// console.log(url_provid);
    	// console.log(nextid%10);
    	// console.log(imgalmlist[parseInt(albumid)-1].length);

		imgurl = imgbaseurl+urlnav+"/"+albumid+"/"+url_imgname+".gif";
		nexturl = imgbaseurl+urlnav+"/"+albumid+"/"+url_nextid+".gif";

		if(!!provid){provlnk = "/album/gx/"+albumid+"/"+provid;}

		var nalbumid = Math.floor(url_nextid/10)+1;
		if(url_nextid%10===0 && parseInt(url_nextid)!==0){
			nalbumid = Math.floor(url_nextid/10);
		}

		nextlnk = "/album/gx/"+nalbumid+"/"+nextid;

		if(nextid>10){
			nextlnk = "/album/gx/"+nalbumid+"/1";
		}
		// if(url_nextid%10 > imgalmlist[parseInt(albumid)-1].length){
		// 	nextlnk = "/album/gx/"+(parseInt(albumid)+1)+"/1";
		// }
		// console.log("sdqdwqwdqwd");
		// console.log(imgalmlist);
		// console.log(parseInt(albumid)+1);

		console.log("parseInt(albumid)+1");
		console.log(url_imgname);
		// console.log(parseInt(albumid)+1);
		// console.log(parseInt(imgalmlist.length));
		// console.log(parseInt(nextid));
		// console.log(parseInt(imgalmlist[parseInt(albumid)-1].length));

		if(parseInt(albumid)+1>imgalmlist.length && nextid > imgalmlist[parseInt(albumid)-1].length){
			nextlnk = "/notalbum/"+urlnav;
		}

		gx_url_imgname = url_imgname;
	}

	var shuffled = novellist.noveldata.slice(0);
	var ii = novellist.noveldata.length;
	var min_i = ii - 10;
	var temp_i;
	var index_i;
    while (ii -- > min_i) {
        index_i = Math.floor((ii + 1) * Math.random());
        temp_i = shuffled[index_i];
        shuffled[index_i] = shuffled[ii];
        shuffled[ii] = temp_i;
    }
    var noveldata = shuffled.slice(min_i);

    if(urlnav === "pa"){
		titles = imgalmlist[albumid-1].name+"第"+imgname+"张";
    }
    if(urlnav === "mv"){
		titles = imgalmlist[albumid-1].name+"第"+imgname+"张";
		title = titles;
    }
    if(urlnav === "gx"){
		titles = describe.describe.gx[gx_url_imgname-1];
    }


	// imgurl = "http://yinuonet-img.oss-cn-beijing.aliyuncs.com/"+urlnav+"/"+albumid+"/"+filename;
	// nexturl = "http://yinuonet-img.oss-cn-beijing.aliyuncs.com/"+urlnav+"/"+albumid+"/"+filename;

	var renders = {
		datanav : imgdata.imagesdata.nav,
		urlnav: urlnav,
		albumid: albumid,
		albumtitle: title,
		imgname: imgname,
		imgurl : imgurl,
		nexturl : nexturl,
		nextlnk : nextlnk,
		provlnk: provlnk,
		back: true,
		provid : provid,
		imgalmlist : imgalmlist, 
		albumlength : imgalmlist[parseInt(albumid)-1].length, 
		provclass : provclass,
		noveldata: noveldata,
		layout : true,
		gx_describe: describe.describe.gx,
		gx_url_imgname : gx_url_imgname,
		title: titles
	}
	
	res.render('album.html',renders);
}