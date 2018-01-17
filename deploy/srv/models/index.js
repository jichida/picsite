var imgdata = require('../public/javascripts/images_data.js');
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
	}
	res.render('index.html',renders);
}
//某相册首页
exports.navmain = function(req, res){
	// console.log(imgdata.imagesdata.data.mv);
	var urlnav = req.params.nav;//获取id
	var renders = {
		datanav : imgdata.imagesdata.nav,
		urlnav: urlnav,
		imgalmlist : imgdata.imagesdata.data[urlnav], 
		layout : true,
		back: false,
	}
	res.render('index.html',renders);
}
//没有更多图片了
exports.notalbum = function(req, res){
	// console.log(imgdata.imagesdata.data.mv);
	var urlnav = req.params.nav;//获取id
	var renders = {
		datanav : imgdata.imagesdata.nav,
		urlnav: urlnav,
		imgalmlist : imgdata.imagesdata.data[urlnav], 
		layout : true,
		back: true,
	}
	res.render('notalbum.html',renders);
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

	var title = albumname[urlnav]+"第"+albumid+"期";
	var imgurl = "http://yinuonet-img.oss-cn-beijing.aliyuncs.com/";
	var nexturl = "";
	var nextlnk = "";//
	var provlnk = "";//
	


	if(urlnav==="mv"){
		imgurl = imgurl+urlnav+"/"+albumid+"/"+imgname+".jpg";
		nexturl = imgurl+urlnav+"/"+albumid+"/"+nextid+".jpg";
		if(!!provid){provlnk = "/album/mv/"+albumid+"/"+provid;}
		nextlnk = "/album/mv/"+albumid+"/"+nextid;
		if(nextid > imgalmlist[parseInt(albumid)-1].length){
			nexturl = "";
			nextlnk = "/album/mv/"+(parseInt(albumid)+1)+"/1";
		}
		console.log("sdqdwqwdqwd");
		console.log(imgalmlist);
		console.log(parseInt(albumid)+1);

		if(parseInt(albumid)+1>imgalmlist.length && nextid > imgalmlist[parseInt(albumid)-1].length){
			nextlnk = "/notalbum/"+urlnav;
		}
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
		layout : true
	}
	
	res.render('album.html',renders);
}