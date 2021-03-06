
var Config = require('./config'),
    Tools  = require('./tools'),
    ViewOP = require('./viewop'),
    url    = require('url'),
    util   = require('util');

// mkv路由分发
function Router(req, res) {

    var mkvs = {}, // path,dir,mkv,query,ourl; type,mod,key,view,err
        vop = null;

    // 运行入口
    this.run = function() {
        vop = new ViewOP(req, res);
        // init-mkv
        this.init(req.url); if(mkvs.err) return vop.static(mkvs.err, 404);
        this.imkv();        if(mkvs.err) return vop.static(mkvs.err, 404);
        // 处理用户扩展
        if(mkvs.dir=='viewop.js'){
            var fop = '/'+mkvs.mkv+'/viewop.js';
            var sop = require(_dir+fop); // 子路由
            mkvs.dir = mkvs.mkv;
            mkvs.mkv = mkvs.path.replace('/'+ mkvs.dir+'/','').replace('/'+ mkvs.dir,'');
            mkvs.type = mkvs.mod = mkvs.key = '';
            return new sop(req, res).run(mkvs);
        }
        // 目录:禁止访问/静态目录/未定义目录
        if(mkvs.dir=='forbid' || mkvs.dir=='static' || !Config.dirv[mkvs.dir] || mkvs.path=='/favicon.ico'){
            var code = 200;
            if(mkvs.dir=='forbid'){ // 禁止访问
                code = 403;
            }else if(mkvs.dir=='static'){ // 静态目录,favicon
                code = 200;
            }else if(!Config.dirv[mkvs.dir]){ // 未定义目录
                code = 404;
            }
            return vop.static(mkvs.path, code);
        }
        // mkv-处理
        return vop.run(mkvs);
    };
    // 初始化mkv
    this.init = function(requrl){
        var ourl = url.parse(requrl, true);
        mkvs.path = ourl.pathname;
        var dir, mkv,
            tmp = mkvs.path.split('/'),
            len = tmp.length;
        // fill ", ', <, >
        if(Tools.safeFill(ourl.search, 1)){ 
            mkvs.err = 'Error path [a1]: '+Tools.safeFill(ourl.search, 0);
            return;
        }
        // /index/home-index 
        if(tmp[1]=='index' || /(^home\-)|(\-index$)|(^index$)/.test(tmp[tmp.length-1])){
            mkvs.err = 'Error path [a2]: '+Tools.safeFill(mkvs.path, 0);
            return;
        }
        if(Config.dirs[tmp[1]] || (Config.dirv[tmp[1]] && Config.dirv[tmp[1]]=='viewop.js')){
            dir = Config.dirs[tmp[1]] ? Config.dirs[tmp[1]] : Config.dirv[tmp[1]];
            mkv = tmp[1];
        }else if(len==3){ // /rest/news-add, /rest/news.2017-ab-1234
            dir = tmp[1];
            mkv = tmp[2] ? tmp[2] : 'home';
        }else if(len==2){ // /, /about.htm
            dir = 'index';
            mkv = tmp[1] ? tmp[1] : 'index';
            var flag = /^[\w]{1,24}$/.test(mkv);
            if(flag) mkv = 'home-' + mkv;
        }else{ // len>3, /rest/css/style.js
            dir = 'static';
            mkv = tmp[1];
        }
        mkvs.dir = dir;
        mkvs.mkv = mkv;
        mkvs.query = ourl.query;
        delete ourl["query"];
        delete ourl["pathname"];
        delete ourl["href"];
        mkvs.ourl = ourl;
    }
    // 分离imkv
    this.imkv = function(){
        var tmp=[]; 
        if(mkvs.mkv.indexOf('.')>0){
            tmp = mkvs.mkv.split('.');
            mkvs.type = 'detail';
        }else if(mkvs.mkv.indexOf('-')>0){
            tmp = mkvs.mkv.split('-');
            mkvs.type = 'mtype';
        }else{ // /about
            tmp[0] = mkvs.mkv;
            mkvs.type = 'mhome';
        }
        if(tmp.length>3 || !tmp[0] || !tmp[tmp.length-1]){
            mkvs.err = 'Error mkv [b1]: '+util.inspect(mkvs.mkv);
            return;
        }
        for (var i=0; i<tmp.length; i++) {
            var flag = /^[0-9a-z]{1}[\w|\-]{0,24}$/.test(tmp[i]);
            if(!tmp[i] || !flag || tmp[i]=='0'){
                mkvs.err = 'Error mkv [b2]: '+util.inspect(mkvs.mkv);
                return;
            } 
        }
        mkvs.mod = tmp[0];
        mkvs.view = mkvs.key = '';
        if(mkvs.type!='mhome'){
            mkvs.key = tmp[1];
            mkvs.view = tmp.length==3 ? tmp[2] : '';
        }else{
            mkvs.key = 'index';
        }
    }

};
module.exports = Router;
