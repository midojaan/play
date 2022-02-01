var TTTTTTTTT = "Iw==";
var ScriptPath = 'https://player.kwikmotion.com/packages/'; // online  player/KwikMotion/packages/'; // online  player
var dS_kL = {logo :   '',
hideLogo :   '',
link :   '',
position :   '',
logoMargin :   '',
primary :   '',
highlight :   '',
background :   '',
thumbContainerBG :   '',
playProgressColor :   '',
loadProgressColor :   '',
progressHolderColor :   '',
};
var CustomCSSPath = '';



function kwikMotion(videoId, opts) {

    try {
        if (opts == {} || opts == undefined | opts == '') {
           
        }
        else {
            if (opts.designStudio != undefined && dS_kL!=undefined) {

                dS_kL.logo                = (opts.designStudio.logo                == undefined ? dS_kL.logo                : opts.designStudio.logo);
                dS_kL.hideLogo            = (opts.designStudio.hideLogo            == undefined ? dS_kL.hideLogo            : opts.designStudio.hideLogo);
                dS_kL.link                = (opts.designStudio.link                == undefined ? dS_kL.link                : opts.designStudio.link);
                dS_kL.position            = (opts.designStudio.position            == undefined ? dS_kL.position            : opts.designStudio.position);
                dS_kL.logoMargin          = (opts.designStudio.logoMargin          == undefined ? dS_kL.logoMargin          : opts.designStudio.logoMargin);
                dS_kL.primary             = (opts.designStudio.primary             == undefined ? dS_kL.primary             : opts.designStudio.primary);
                dS_kL.highlight           = (opts.designStudio.highlight           == undefined ? dS_kL.highlight           : opts.designStudio.highlight);
                dS_kL.background          = (opts.designStudio.background          == undefined ? dS_kL.background          : opts.designStudio.background);
                dS_kL.thumbContainerBG    = (opts.designStudio.thumbContainerBG    == undefined ? dS_kL.thumbContainerBG    : opts.designStudio.thumbContainerBG);
                dS_kL.playProgressColor   = (opts.designStudio.playProgressColor   == undefined ? dS_kL.playProgressColor   : opts.designStudio.playProgressColor);
                dS_kL.loadProgressColor   = (opts.designStudio.loadProgressColor   == undefined ? dS_kL.loadProgressColor   : opts.designStudio.loadProgressColor);
                dS_kL.progressHolderColor = (opts.designStudio.progressHolderColor == undefined ? dS_kL.progressHolderColor : opts.designStudio.progressHolderColor);
                
            }

            if (dS_kL != undefined) {
                opts.designStudio = dS_kL;
            }
        }


        //setTimeout(function () {
        //    loadScriptKwikLink(ScriptPath + 'KwikMotion.js', function () {
        //        kwikMotionMain(videoId, opts, TTTTTTTTT, ScriptPath);
        //    });

        //}, 3000);

//            var instance = {
//          handlers: {},
//          on: function(event, cb) {
//            this.handlers[event] = (typeof this.handlers[event] === 'undefined') ? [] : this.handlers[event];
//            this.handlers[event].push(cb);
//          }
//        };
//        
//        opts.handlers = instance.handlers;
//        
//        loadScriptKwikLink(ScriptPath + 'KwikMotion.js', function () {
//            return kwikMotionMain(videoId, opts, TTTTTTTTT, ScriptPath, CustomCSSPath);
//            
//        });
//        
//        return instance;

        // get stored player data
        var el = document.getElementById(videoId);
        el.kwikplayer = el.kwikplayer ? el.kwikplayer : new kwikPlayer(videoId, opts);
        
        return el.kwikplayer;



    }
    catch (exp) {

    }
}


function loadScriptKwikLink(url, callback) {
    try {
        console.log("loadScript started");
        var script = document.createElement("script")
        script.type = "text/javascript";
		script.id = 'scrmotionmain';
		
        if (script.readyState) {  //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
        console.log("loadScript ended");
    }
    catch (exp) {
        console.error("loadScript error", exp);
    }
}

function kwikPlayer(id, options) {
  
  this.handlers = {};
  
  if(!options) {
    return false;
  }
  var scr = document.getElementById('scrmotionmain'), k;
  if(!scr){
    // scrip did not created yet
    loadScriptKwikLink(ScriptPath + 'KwikMotion.js', function () {
      k = new kwikMotionMain(id, options, TTTTTTTTT, ScriptPath, CustomCSSPath);
    });
    
  } else if (typeof kwikMotionMain === 'undefined') {
    // script did not loaded yet
    scr.addEventListener('load', function(){
      k = new kwikMotionMain(id, options, TTTTTTTTT, ScriptPath, CustomCSSPath);
    })
  } else {
    // script already exists
    k = new kwikMotionMain(id, options, TTTTTTTTT, ScriptPath, CustomCSSPath);
  }

}
kwikPlayer.prototype.on = function(event, cb) {
  this.handlers[event] = (typeof this.handlers[event] === 'undefined') ? [] : this.handlers[event];
  this.handlers[event].push(cb);
}


