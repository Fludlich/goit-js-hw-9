!function(){var t=function(t){return document.querySelector(t)},n=t("[data-start]"),e=t("[data-stop]"),o=t("body"),a=null,c=0;e.style.opacity=.5,n.addEventListener("click",(function(){1===(c+=1)&&(a=setInterval((function(){n.style.opacity=.5,e.style.opacity=1,o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))})),e.addEventListener("click",(function(){clearInterval(a),c=0,n.style.opacity=1,e.style.opacity=.5}))}();
//# sourceMappingURL=01-color-switcher.c0dbb8cc.js.map
