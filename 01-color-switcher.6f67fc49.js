let t=t=>document.querySelector(t);const e=t("[data-start]"),a=t("[data-stop]"),l=t("body");let r=null,n=0;e.addEventListener("click",(()=>{n+=1,1===n&&(r=setInterval((()=>{l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),a.addEventListener("click",(()=>{clearInterval(r),n=0}));
//# sourceMappingURL=01-color-switcher.6f67fc49.js.map
