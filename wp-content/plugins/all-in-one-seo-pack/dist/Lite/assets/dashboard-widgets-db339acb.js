import{n as C,V as O}from"./js/_plugin-vue2_normalizer.61652a7c.js";import"./js/index.3c70e00e.js";import{a as q}from"./js/vuex.esm.8fdeb4b6.js";import{S as h}from"./js/Standalone.7784fb5a.js";import{C as K}from"./js/SeoSetup.a73f38ca.js";import{C as Q}from"./js/Overview.d5610a06.js";import{s as X}from"./js/index.ec9852b3.js";import{e as rr}from"./js/elemLoaded.9a6eb745.js";import{c as s}from"./js/_commonjsHelpers.f84db168.js";import"./js/client.e62d6c37.js";import"./js/translations.c394afe3.js";import"./js/default-i18n.3a91e0e5.js";import"./js/Caret.19b10233.js";import"./js/helpers.de7566d0.js";import"./js/constants.0d8c074c.js";import"./js/isArrayLikeObject.9b4b678d.js";import"./js/portal-vue.esm.98f2e05b.js";import"./js/Rocket.dc643d1e.js";import"./js/DonutChartWithLegend.72361d7c.js";import"./js/AnimatedNumber.932b583a.js";const er={mixins:[h],components:{CoreSeoSetup:K},computed:{...q(["internalOptions"])}};var or=function(){var e=this,o=e._self._c;return e.internalOptions.internal?o("div",[o("core-seo-setup",{attrs:{isWpDashboard:!0}})],1):e._e()},ur=[],ar=C(er,or,ur,!1,null,null,null,null);const nr=ar.exports,tr={components:{CoreOverview:Q},mixins:[h]};var ir=function(){var e=this,o=e._self._c;return o("div",{staticClass:"aioseo-app",staticStyle:{"background-color":"transparent"}},[o("core-overview",{attrs:{isWpDashboard:!0}})],1)},sr=[],fr=C(tr,ir,sr,!1,null,null,null,null);const cr=fr.exports;var dr=typeof s=="object"&&s&&s.Object===Object&&s,lr=dr,pr=lr,br=typeof self=="object"&&self&&self.Object===Object&&self,xr=pr||br||Function("return this")(),mr=xr,vr=mr,gr=vr.Symbol,l=gr;function $r(r,e){for(var o=-1,a=r==null?0:r.length,u=Array(a);++o<a;)u[o]=e(r[o],o,r);return u}var _r=$r,Sr=Array.isArray,yr=Sr,p=l,T=Object.prototype,Rr=T.hasOwnProperty,Ar=T.toString,i=p?p.toStringTag:void 0;function Cr(r){var e=Rr.call(r,i),o=r[i];try{r[i]=void 0;var a=!0}catch{}var u=Ar.call(r);return a&&(e?r[i]=o:delete r[i]),u}var Or=Cr,hr=Object.prototype,Tr=hr.toString;function jr(r){return Tr.call(r)}var Ur=jr,b=l,Lr=Or,Mr=Ur,Er="[object Null]",Wr="[object Undefined]",x=b?b.toStringTag:void 0;function kr(r){return r==null?r===void 0?Wr:Er:x&&x in Object(r)?Lr(r):Mr(r)}var wr=kr;function zr(r){return r!=null&&typeof r=="object"}var Ir=zr,Nr=wr,Zr=Ir,Dr="[object Symbol]";function Fr(r){return typeof r=="symbol"||Zr(r)&&Nr(r)==Dr}var Pr=Fr,m=l,Gr=_r,Hr=yr,Vr=Pr,Jr=1/0,v=m?m.prototype:void 0,g=v?v.toString:void 0;function j(r){if(typeof r=="string")return r;if(Hr(r))return Gr(r,j)+"";if(Vr(r))return g?g.call(r):"";var e=r+"";return e=="0"&&1/r==-Jr?"-0":e}var Yr=j,Br=Yr;function qr(r){return r==null?"":Br(r)}var f=qr;function Kr(r,e,o){var a=-1,u=r.length;e<0&&(e=-e>u?0:u+e),o=o>u?u:o,o<0&&(o+=u),u=e>o?0:o-e>>>0,e>>>=0;for(var n=Array(u);++a<u;)n[a]=r[a+e];return n}var Qr=Kr,Xr=Qr;function re(r,e,o){var a=r.length;return o=o===void 0?a:o,!e&&o>=a?r:Xr(r,e,o)}var ee=re,oe="\\ud800-\\udfff",ue="\\u0300-\\u036f",ae="\\ufe20-\\ufe2f",ne="\\u20d0-\\u20ff",te=ue+ae+ne,ie="\\ufe0e\\ufe0f",se="\\u200d",fe=RegExp("["+se+oe+te+ie+"]");function ce(r){return fe.test(r)}var U=ce;function de(r){return r.split("")}var le=de,L="\\ud800-\\udfff",pe="\\u0300-\\u036f",be="\\ufe20-\\ufe2f",xe="\\u20d0-\\u20ff",me=pe+be+xe,ve="\\ufe0e\\ufe0f",ge="["+L+"]",c="["+me+"]",d="\\ud83c[\\udffb-\\udfff]",$e="(?:"+c+"|"+d+")",M="[^"+L+"]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",W="[\\ud800-\\udbff][\\udc00-\\udfff]",_e="\\u200d",k=$e+"?",w="["+ve+"]?",Se="(?:"+_e+"(?:"+[M,E,W].join("|")+")"+w+k+")*",ye=w+k+Se,Re="(?:"+[M+c+"?",c,E,W,ge].join("|")+")",Ae=RegExp(d+"(?="+d+")|"+Re+ye,"g");function Ce(r){return r.match(Ae)||[]}var Oe=Ce,he=le,Te=U,je=Oe;function Ue(r){return Te(r)?je(r):he(r)}var Le=Ue,Me=ee,Ee=U,We=Le,ke=f;function we(r){return function(e){e=ke(e);var o=Ee(e)?We(e):void 0,a=o?o[0]:e.charAt(0),u=o?Me(o,1).join(""):e.slice(1);return a[r]()+u}}var ze=we,Ie=ze,Ne=Ie("toUpperCase"),Ze=Ne,De=f,Fe=Ze;function Pe(r){return Fe(De(r).toLowerCase())}var Ge=Pe;function He(r,e,o,a){var u=-1,n=r==null?0:r.length;for(a&&n&&(o=r[++u]);++u<n;)o=e(o,r[u],u,r);return o}var Ve=He;function Je(r){return function(e){return r==null?void 0:r[e]}}var Ye=Je,Be=Ye,qe={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Ke=Be(qe),Qe=Ke,Xe=Qe,ro=f,eo=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,oo="\\u0300-\\u036f",uo="\\ufe20-\\ufe2f",ao="\\u20d0-\\u20ff",no=oo+uo+ao,to="["+no+"]",io=RegExp(to,"g");function so(r){return r=ro(r),r&&r.replace(eo,Xe).replace(io,"")}var fo=so,co=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function lo(r){return r.match(co)||[]}var po=lo,bo=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xo(r){return bo.test(r)}var mo=xo,z="\\ud800-\\udfff",vo="\\u0300-\\u036f",go="\\ufe20-\\ufe2f",$o="\\u20d0-\\u20ff",_o=vo+go+$o,I="\\u2700-\\u27bf",N="a-z\\xdf-\\xf6\\xf8-\\xff",So="\\xac\\xb1\\xd7\\xf7",yo="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ro="\\u2000-\\u206f",Ao=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Z="A-Z\\xc0-\\xd6\\xd8-\\xde",Co="\\ufe0e\\ufe0f",D=So+yo+Ro+Ao,F="['’]",$="["+D+"]",Oo="["+_o+"]",P="\\d+",ho="["+I+"]",G="["+N+"]",H="[^"+z+D+P+I+N+Z+"]",To="\\ud83c[\\udffb-\\udfff]",jo="(?:"+Oo+"|"+To+")",Uo="[^"+z+"]",V="(?:\\ud83c[\\udde6-\\uddff]){2}",J="[\\ud800-\\udbff][\\udc00-\\udfff]",t="["+Z+"]",Lo="\\u200d",_="(?:"+G+"|"+H+")",Mo="(?:"+t+"|"+H+")",S="(?:"+F+"(?:d|ll|m|re|s|t|ve))?",y="(?:"+F+"(?:D|LL|M|RE|S|T|VE))?",Y=jo+"?",B="["+Co+"]?",Eo="(?:"+Lo+"(?:"+[Uo,V,J].join("|")+")"+B+Y+")*",Wo="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ko="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wo=B+Y+Eo,zo="(?:"+[ho,V,J].join("|")+")"+wo,Io=RegExp([t+"?"+G+"+"+S+"(?="+[$,t,"$"].join("|")+")",Mo+"+"+y+"(?="+[$,t+_,"$"].join("|")+")",t+"?"+_+"+"+S,t+"+"+y,ko,Wo,P,zo].join("|"),"g");function No(r){return r.match(Io)||[]}var Zo=No,Do=po,Fo=mo,Po=f,Go=Zo;function Ho(r,e,o){return r=Po(r),e=o?void 0:e,e===void 0?Fo(r)?Go(r):Do(r):r.match(e)||[]}var Vo=Ho,Jo=Ve,Yo=fo,Bo=Vo,qo="['’]",Ko=RegExp(qo,"g");function Qo(r){return function(e){return Jo(Bo(Yo(e).replace(Ko,"")),r,"")}}var Xo=Qo,ru=Ge,eu=Xo,ou=eu(function(r,e,o){return e=e.toLowerCase(),r+(o?ru(e):e)}),R=ou;O.config.productionTip=!1;const uu=[{id:"aioseo-seo-setup-app",component:nr},{id:"aioseo-overview-app",component:cr}],A=r=>{new O({store:X,render:e=>e(r.component)}).$mount("#"+r.id)};uu.forEach(r=>{document.getElementById(r.id)?A(r):(rr("#"+r.id,R(r.id)),document.addEventListener("animationstart",function(e){R(r.id)===e.animationName&&A(r)},{passive:!0}))});
