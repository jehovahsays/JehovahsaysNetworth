


/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).DOMPurify=t()}(this,(function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object;let{freeze:i,seal:a,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;i||(i=function(e){return e}),a||(a=function(e){return e}),c||(c=function(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return e.apply(t,o)}),s||(s=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return new e(...n)});const u=D(Array.prototype.forEach),m=D(Array.prototype.lastIndexOf),p=D(Array.prototype.pop),f=D(Array.prototype.push),d=D(Array.prototype.splice),h=D(String.prototype.toLowerCase),g=D(String.prototype.toString),T=D(String.prototype.match),y=D(String.prototype.replace),E=D(String.prototype.indexOf),A=D(String.prototype.trim),_=D(Object.prototype.hasOwnProperty),b=D(RegExp.prototype.test),S=(N=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(N,t)});var N;function D(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(e,t,o)}}function R(e,o){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h;t&&t(e,null);let i=o.length;for(;i--;){let t=o[i];if("string"==typeof t){const e=r(t);e!==t&&(n(o)||(o[i]=e),t=e)}e[t]=!0}return e}function w(e){for(let t=0;t<e.length;t++){_(e,t)||(e[t]=null)}return e}function C(t){const n=l(null);for(const[o,r]of e(t)){_(t,o)&&(Array.isArray(r)?n[o]=w(r):r&&"object"==typeof r&&r.constructor===Object?n[o]=C(r):n[o]=r)}return n}function O(e,t){for(;null!==e;){const n=r(e,t);if(n){if(n.get)return D(n.get);if("function"==typeof n.value)return D(n.value)}e=o(e)}return function(){return null}}const v=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),x=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),L=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),k=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),I=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),M=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),U=i(["#text"]),z=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),P=i(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),F=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),H=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),B=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),G=a(/<%[\w\W]*|[\w\W]*%>/gm),W=a(/\$\{[\w\W]*/gm),Y=a(/^data-[\-\w.\u00B7-\uFFFF]+$/),j=a(/^aria-[\-\w]+$/),X=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),q=a(/^(?:\w+script|data):/i),$=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),K=a(/^html$/i),V=a(/^[a-z][.\w]*(-[.\w]+)+$/i);var Z=Object.freeze({__proto__:null,ARIA_ATTR:j,ATTR_WHITESPACE:$,CUSTOM_ELEMENT:V,DATA_ATTR:Y,DOCTYPE_NAME:K,ERB_EXPR:G,IS_ALLOWED_URI:X,IS_SCRIPT_OR_DATA:q,MUSTACHE_EXPR:B,TMPLIT_EXPR:W});const J=1,Q=3,ee=7,te=8,ne=9,oe=function(){return"undefined"==typeof window?null:window};var re=function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe();const o=e=>t(e);if(o.version="3.3.1",o.removed=[],!n||!n.document||n.document.nodeType!==ne||!n.Element)return o.isSupported=!1,o;let{document:r}=n;const a=r,c=a.currentScript,{DocumentFragment:s,HTMLTemplateElement:N,Node:D,Element:w,NodeFilter:B,NamedNodeMap:G=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:W,DOMParser:Y,trustedTypes:j}=n,q=w.prototype,$=O(q,"cloneNode"),V=O(q,"remove"),re=O(q,"nextSibling"),ie=O(q,"childNodes"),ae=O(q,"parentNode");if("function"==typeof N){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let le,ce="";const{implementation:se,createNodeIterator:ue,createDocumentFragment:me,getElementsByTagName:pe}=r,{importNode:fe}=a;let de={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};o.isSupported="function"==typeof e&&"function"==typeof ae&&se&&void 0!==se.createHTMLDocument;const{MUSTACHE_EXPR:he,ERB_EXPR:ge,TMPLIT_EXPR:Te,DATA_ATTR:ye,ARIA_ATTR:Ee,IS_SCRIPT_OR_DATA:Ae,ATTR_WHITESPACE:_e,CUSTOM_ELEMENT:be}=Z;let{IS_ALLOWED_URI:Se}=Z,Ne=null;const De=R({},[...v,...x,...L,...I,...U]);let Re=null;const we=R({},[...z,...P,...F,...H]);let Ce=Object.seal(l(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Oe=null,ve=null;const xe=Object.seal(l(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Le=!0,ke=!0,Ie=!1,Me=!0,Ue=!1,ze=!0,Pe=!1,Fe=!1,He=!1,Be=!1,Ge=!1,We=!1,Ye=!0,je=!1,Xe=!0,qe=!1,$e={},Ke=null;const Ve=R({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ze=null;const Je=R({},["audio","video","img","source","image","track"]);let Qe=null;const et=R({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tt="http://www.w3.org/1998/Math/MathML",nt="http://www.w3.org/2000/svg",ot="http://www.w3.org/1999/xhtml";let rt=ot,it=!1,at=null;const lt=R({},[tt,nt,ot],g);let ct=R({},["mi","mo","mn","ms","mtext"]),st=R({},["annotation-xml"]);const ut=R({},["title","style","font","a","script"]);let mt=null;const pt=["application/xhtml+xml","text/html"];let ft=null,dt=null;const ht=r.createElement("form"),gt=function(e){return e instanceof RegExp||e instanceof Function},Tt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!dt||dt!==e){if(e&&"object"==typeof e||(e={}),e=C(e),mt=-1===pt.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,ft="application/xhtml+xml"===mt?g:h,Ne=_(e,"ALLOWED_TAGS")?R({},e.ALLOWED_TAGS,ft):De,Re=_(e,"ALLOWED_ATTR")?R({},e.ALLOWED_ATTR,ft):we,at=_(e,"ALLOWED_NAMESPACES")?R({},e.ALLOWED_NAMESPACES,g):lt,Qe=_(e,"ADD_URI_SAFE_ATTR")?R(C(et),e.ADD_URI_SAFE_ATTR,ft):et,Ze=_(e,"ADD_DATA_URI_TAGS")?R(C(Je),e.ADD_DATA_URI_TAGS,ft):Je,Ke=_(e,"FORBID_CONTENTS")?R({},e.FORBID_CONTENTS,ft):Ve,Oe=_(e,"FORBID_TAGS")?R({},e.FORBID_TAGS,ft):C({}),ve=_(e,"FORBID_ATTR")?R({},e.FORBID_ATTR,ft):C({}),$e=!!_(e,"USE_PROFILES")&&e.USE_PROFILES,Le=!1!==e.ALLOW_ARIA_ATTR,ke=!1!==e.ALLOW_DATA_ATTR,Ie=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Me=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Ue=e.SAFE_FOR_TEMPLATES||!1,ze=!1!==e.SAFE_FOR_XML,Pe=e.WHOLE_DOCUMENT||!1,Be=e.RETURN_DOM||!1,Ge=e.RETURN_DOM_FRAGMENT||!1,We=e.RETURN_TRUSTED_TYPE||!1,He=e.FORCE_BODY||!1,Ye=!1!==e.SANITIZE_DOM,je=e.SANITIZE_NAMED_PROPS||!1,Xe=!1!==e.KEEP_CONTENT,qe=e.IN_PLACE||!1,Se=e.ALLOWED_URI_REGEXP||X,rt=e.NAMESPACE||ot,ct=e.MATHML_TEXT_INTEGRATION_POINTS||ct,st=e.HTML_INTEGRATION_POINTS||st,Ce=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&gt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ce.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&gt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ce.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ce.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ue&&(ke=!1),Ge&&(Be=!0),$e&&(Ne=R({},U),Re=[],!0===$e.html&&(R(Ne,v),R(Re,z)),!0===$e.svg&&(R(Ne,x),R(Re,P),R(Re,H)),!0===$e.svgFilters&&(R(Ne,L),R(Re,P),R(Re,H)),!0===$e.mathMl&&(R(Ne,I),R(Re,F),R(Re,H))),e.ADD_TAGS&&("function"==typeof e.ADD_TAGS?xe.tagCheck=e.ADD_TAGS:(Ne===De&&(Ne=C(Ne)),R(Ne,e.ADD_TAGS,ft))),e.ADD_ATTR&&("function"==typeof e.ADD_ATTR?xe.attributeCheck=e.ADD_ATTR:(Re===we&&(Re=C(Re)),R(Re,e.ADD_ATTR,ft))),e.ADD_URI_SAFE_ATTR&&R(Qe,e.ADD_URI_SAFE_ATTR,ft),e.FORBID_CONTENTS&&(Ke===Ve&&(Ke=C(Ke)),R(Ke,e.FORBID_CONTENTS,ft)),e.ADD_FORBID_CONTENTS&&(Ke===Ve&&(Ke=C(Ke)),R(Ke,e.ADD_FORBID_CONTENTS,ft)),Xe&&(Ne["#text"]=!0),Pe&&R(Ne,["html","head","body"]),Ne.table&&(R(Ne,["tbody"]),delete Oe.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw S('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw S('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');le=e.TRUSTED_TYPES_POLICY,ce=le.createHTML("")}else void 0===le&&(le=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}}(j,c)),null!==le&&"string"==typeof ce&&(ce=le.createHTML(""));i&&i(e),dt=e}},yt=R({},[...x,...L,...k]),Et=R({},[...I,...M]),At=function(e){f(o.removed,{element:e});try{ae(e).removeChild(e)}catch(t){V(e)}},_t=function(e,t){try{f(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){f(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(Be||Ge)try{At(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},bt=function(e){let t=null,n=null;if(He)e="<remove></remove>"+e;else{const t=T(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===mt&&rt===ot&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=le?le.createHTML(e):e;if(rt===ot)try{t=(new Y).parseFromString(o,mt)}catch(e){}if(!t||!t.documentElement){t=se.createDocument(rt,"template",null);try{t.documentElement.innerHTML=it?ce:o}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),rt===ot?pe.call(t,Pe?"html":"body")[0]:Pe?t.documentElement:i},St=function(e){return ue.call(e.ownerDocument||e,e,B.SHOW_ELEMENT|B.SHOW_COMMENT|B.SHOW_TEXT|B.SHOW_PROCESSING_INSTRUCTION|B.SHOW_CDATA_SECTION,null)},Nt=function(e){return e instanceof W&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof G)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Dt=function(e){return"function"==typeof D&&e instanceof D};function Rt(e,t,n){u(e,(e=>{e.call(o,t,n,dt)}))}const wt=function(e){let t=null;if(Rt(de.beforeSanitizeElements,e,null),Nt(e))return At(e),!0;const n=ft(e.nodeName);if(Rt(de.uponSanitizeElement,e,{tagName:n,allowedTags:Ne}),ze&&e.hasChildNodes()&&!Dt(e.firstElementChild)&&b(/<[/\w!]/g,e.innerHTML)&&b(/<[/\w!]/g,e.textContent))return At(e),!0;if(e.nodeType===ee)return At(e),!0;if(ze&&e.nodeType===te&&b(/<[/\w]/g,e.data))return At(e),!0;if(!(xe.tagCheck instanceof Function&&xe.tagCheck(n))&&(!Ne[n]||Oe[n])){if(!Oe[n]&&Ot(n)){if(Ce.tagNameCheck instanceof RegExp&&b(Ce.tagNameCheck,n))return!1;if(Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(n))return!1}if(Xe&&!Ke[n]){const t=ae(e)||e.parentNode,n=ie(e)||e.childNodes;if(n&&t){for(let o=n.length-1;o>=0;--o){const r=$(n[o],!0);r.__removalCount=(e.__removalCount||0)+1,t.insertBefore(r,re(e))}}}return At(e),!0}return e instanceof w&&!function(e){let t=ae(e);t&&t.tagName||(t={namespaceURI:rt,tagName:"template"});const n=h(e.tagName),o=h(t.tagName);return!!at[e.namespaceURI]&&(e.namespaceURI===nt?t.namespaceURI===ot?"svg"===n:t.namespaceURI===tt?"svg"===n&&("annotation-xml"===o||ct[o]):Boolean(yt[n]):e.namespaceURI===tt?t.namespaceURI===ot?"math"===n:t.namespaceURI===nt?"math"===n&&st[o]:Boolean(Et[n]):e.namespaceURI===ot?!(t.namespaceURI===nt&&!st[o])&&!(t.namespaceURI===tt&&!ct[o])&&!Et[n]&&(ut[n]||!yt[n]):!("application/xhtml+xml"!==mt||!at[e.namespaceURI]))}(e)?(At(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!b(/<\/no(script|embed|frames)/i,e.innerHTML)?(Ue&&e.nodeType===Q&&(t=e.textContent,u([he,ge,Te],(e=>{t=y(t,e," ")})),e.textContent!==t&&(f(o.removed,{element:e.cloneNode()}),e.textContent=t)),Rt(de.afterSanitizeElements,e,null),!1):(At(e),!0)},Ct=function(e,t,n){if(Ye&&("id"===t||"name"===t)&&(n in r||n in ht))return!1;if(ke&&!ve[t]&&b(ye,t));else if(Le&&b(Ee,t));else if(xe.attributeCheck instanceof Function&&xe.attributeCheck(t,e));else if(!Re[t]||ve[t]){if(!(Ot(e)&&(Ce.tagNameCheck instanceof RegExp&&b(Ce.tagNameCheck,e)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(e))&&(Ce.attributeNameCheck instanceof RegExp&&b(Ce.attributeNameCheck,t)||Ce.attributeNameCheck instanceof Function&&Ce.attributeNameCheck(t,e))||"is"===t&&Ce.allowCustomizedBuiltInElements&&(Ce.tagNameCheck instanceof RegExp&&b(Ce.tagNameCheck,n)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(n))))return!1}else if(Qe[t]);else if(b(Se,y(n,_e,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==E(n,"data:")||!Ze[e]){if(Ie&&!b(Ae,y(n,_e,"")));else if(n)return!1}else;return!0},Ot=function(e){return"annotation-xml"!==e&&T(e,be)},vt=function(e){Rt(de.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Nt(e))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Re,forceKeepAttr:void 0};let r=t.length;for(;r--;){const i=t[r],{name:a,namespaceURI:l,value:c}=i,s=ft(a),m=c;let f="value"===a?m:A(m);if(n.attrName=s,n.attrValue=f,n.keepAttr=!0,n.forceKeepAttr=void 0,Rt(de.uponSanitizeAttribute,e,n),f=n.attrValue,!je||"id"!==s&&"name"!==s||(_t(a,e),f="user-content-"+f),ze&&b(/((--!?|])>)|<\/(style|title|textarea)/i,f)){_t(a,e);continue}if("attributename"===s&&T(f,"href")){_t(a,e);continue}if(n.forceKeepAttr)continue;if(!n.keepAttr){_t(a,e);continue}if(!Me&&b(/\/>/i,f)){_t(a,e);continue}Ue&&u([he,ge,Te],(e=>{f=y(f,e," ")}));const d=ft(e.nodeName);if(Ct(d,s,f)){if(le&&"object"==typeof j&&"function"==typeof j.getAttributeType)if(l);else switch(j.getAttributeType(d,s)){case"TrustedHTML":f=le.createHTML(f);break;case"TrustedScriptURL":f=le.createScriptURL(f)}if(f!==m)try{l?e.setAttributeNS(l,a,f):e.setAttribute(a,f),Nt(e)?At(e):p(o.removed)}catch(t){_t(a,e)}}else _t(a,e)}Rt(de.afterSanitizeAttributes,e,null)},xt=function e(t){let n=null;const o=St(t);for(Rt(de.beforeSanitizeShadowDOM,t,null);n=o.nextNode();)Rt(de.uponSanitizeShadowNode,n,null),wt(n),vt(n),n.content instanceof s&&e(n.content);Rt(de.afterSanitizeShadowDOM,t,null)};return o.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,r=null,i=null,l=null;if(it=!e,it&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Dt(e)){if("function"!=typeof e.toString)throw S("toString is not a function");if("string"!=typeof(e=e.toString()))throw S("dirty is not a string, aborting")}if(!o.isSupported)return e;if(Fe||Tt(t),o.removed=[],"string"==typeof e&&(qe=!1),qe){if(e.nodeName){const t=ft(e.nodeName);if(!Ne[t]||Oe[t])throw S("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof D)n=bt("\x3c!----\x3e"),r=n.ownerDocument.importNode(e,!0),r.nodeType===J&&"BODY"===r.nodeName||"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!Be&&!Ue&&!Pe&&-1===e.indexOf("<"))return le&&We?le.createHTML(e):e;if(n=bt(e),!n)return Be?null:We?ce:""}n&&He&&At(n.firstChild);const c=St(qe?e:n);for(;i=c.nextNode();)wt(i),vt(i),i.content instanceof s&&xt(i.content);if(qe)return e;if(Be){if(Ge)for(l=me.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return(Re.shadowroot||Re.shadowrootmode)&&(l=fe.call(a,l,!0)),l}let m=Pe?n.outerHTML:n.innerHTML;return Pe&&Ne["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&b(K,n.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+m),Ue&&u([he,ge,Te],(e=>{m=y(m,e," ")})),le&&We?le.createHTML(m):m},o.setConfig=function(){Tt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Fe=!0},o.clearConfig=function(){dt=null,Fe=!1},o.isValidAttribute=function(e,t,n){dt||Tt({});const o=ft(e),r=ft(t);return Ct(o,r,n)},o.addHook=function(e,t){"function"==typeof t&&f(de[e],t)},o.removeHook=function(e,t){if(void 0!==t){const n=m(de[e],t);return-1===n?void 0:d(de[e],n,1)[0]}return p(de[e])},o.removeHooks=function(e){de[e]=[]},o.removeAllHooks=function(){de={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},o}();return re}));
//# sourceMappingURL=purify.min.js.map

const MEV_VERSION = "1.2.6-PerimeterFinal";


// 1. The Debounce Helper (The "Firewall" for rapid input)
function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        // If a new keystroke comes in before the delay is over, 
        // we kill the previous timer and start a new one.
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
}

/**
 * Actual Wiki Filtering Logic
 * This is where the perimeter hands off the "Cleaned" input to the UI
 */
function performWikiSearch(query) {
    console.log(`🔍 Wiki is now searching for: ${query}`);
    // Add your logic here to filter through your page list or content
}


// 2. The Search Logic (Sanitized and Protected)
const handleSearch = (event) => {
    const rawInput = event.target.value;
    
    // Shielding: Only process if the input is clean
    const cleanInput = DOMPurify.sanitize(rawInput).trim();
    
    if (cleanInput.length > 0) {
        console.log(`[Perimeter] Processing sanitized search: ${cleanInput}`);
  
       // Your actual filtering logic goes here
        performWikiSearch(cleanInput); 
    }
};

// 3. Attach with 300ms Cooldown
const searchInput = document.getElementById('filterInput-splash');
if (searchInput) {
    searchInput.addEventListener('input', debounce(handleSearch, 300));
}



/* ====== MEV SOVEREIGN FIREWALL & CORE LOGIC ====== */

// 1. ACTIVE IMMUNE SYSTEM (Real-Time Scrubbing)
(function secureClientApp() {
    const sanitize = (el) => {
        if (el && el.value) {
            // Check against the HTML pattern attribute first for a "fast fail"
            if (el.pattern && !new RegExp(el.pattern).test(el.value)) {
                console.warn("⚠️ MEV Firewall: Regex Pattern Mismatch.");
            }
            
            // Real-time scrubbing using DOMPurify
            const clean = DOMPurify.sanitize(el.value, {
                ALLOWED_TAGS: [], // In the subconscious search/auth, we allow NO tags
                ALLOWED_ATTR: []
            });

            if (el.value !== clean) {
                el.value = clean;
                console.warn("⚠️ MEV Firewall: Blocked potential script injection.");
            }
        }
    };

    document.addEventListener("input", (e) => sanitize(e.target));
    document.addEventListener("blur", (e) => sanitize(e.target));

    // Disable invasive browser behaviors to protect the "Subconscious" UI
    document.addEventListener("contextmenu", e => e.preventDefault());
    document.addEventListener("dragstart", e => e.preventDefault());
})();

// 2. HARDENED DATA IMPORT (Firewall for External Files)
document.getElementById('import-input')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                // Pre-scan the entire file string before parsing JSON
                const rawData = event.target.result;
                const sanitizedData = DOMPurify.sanitize(rawData);
                
                if (rawData !== sanitizedData) {
                    throw new Error("Malicious script detected in backup file.");
                }

                const data = JSON.parse(sanitizedData);
                // logic to merge data...
                alert("Data Imported Successfully into the Subconscious.");
                window.location.reload();
            } catch (err) {
                alert("Security Alert: " + err.message);
                console.error("Import blocked by Sovereign Perimeter.");
            }
        };
        reader.readAsText(file);
    }
});

// 3. STORAGE & CRYPTO CONFIG
const STORAGE_KEYS = {
    pages: 'wiki_pages',
    users: 'wiki_users',
    currentUser: 'wiki_current_user',
    changes: 'wiki_changes',
    theme: 'wiki_theme',
    sidebar: 'wiki_sidebar',
    knowledge: 'wiki_knowledge',
    cryptoParams: 'wiki_crypto_params'
};

const CRYPTO_CONFIG = {
    iterations: 600000, // High iteration count to resist brute-force
    saltLength: 16,
    ivLength: 12,
    algo: 'AES-GCM',
    hash: 'SHA-256'
};

let encryptionKey = null;

// 4. THEME & STATUS INITIALIZATION
(function initSubconscious() {
    // Apply "Less" mode if enabled
    if (localStorage.getItem('wiki_theme_less') === 'enabled') {
        document.body.classList.add('less-mode');
    }
    
    // Update the status indicator in the footer
    const indicator = document.getElementById('status-indicator');
    if (indicator) {
        indicator.innerText = navigator.onLine ? '🟢 Online' : '🔴 Offline';
        indicator.style.color = navigator.onLine ? '#4caf50' : '#f44336';
    }
})();

// 5. RECOVERY PERIMETER (Verification)
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'restore-perimeter-btn') {
        const challenge = prompt("Perimeter Locked. Enter 'RESTORE' to return to conscious state:");
        // Only allow exact match, no whitespace/scripts
        if (challenge?.trim() === 'RESTORE') {
            localStorage.removeItem('mev_breach_detected');
            localStorage.setItem('mev_human_verified', 'true');
            window.location.href = './index.html#search';
        }
    }
});

function base64ToArrayBuffer(base64) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

/**
 * Derives a strong encryption key from a PIN using PBKDF2.
 */
async function deriveKey(pin, salt) {
    const pinBuffer = new TextEncoder().encode(pin);
    const keyMaterial = await crypto.subtle.importKey(
        'raw', pinBuffer,
        { name: 'PBKDF2' },
        false,
        ['deriveKey']
    );

    return crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt: salt,
            iterations: CRYPTO_CONFIG.iterations,
            hash: CRYPTO_CONFIG.hash
        },
        keyMaterial,
        { name: CRYPTO_CONFIG.algo, length: 256 },
        false,
        ['encrypt', 'decrypt']
    );
}

/**
 * Encrypts plaintext using the session's encryption key.
 */
async function encryptData(plaintext) {
    if (!encryptionKey) throw new Error("Encryption key not set.");

    const iv = crypto.getRandomValues(new Uint8Array(CRYPTO_CONFIG.ivLength));
    const encoded = new TextEncoder().encode(plaintext);

    const ciphertextBuffer = await crypto.subtle.encrypt(
        { name: CRYPTO_CONFIG.algo, iv: iv },
        encryptionKey,
        encoded
    );

    return {
        ciphertext: arrayBufferToBase64(ciphertextBuffer),
        iv: arrayBufferToBase64(iv.buffer)
    };
}

/**
 * Decrypts ciphertext using the session's encryption key.
 */
async function decryptData(encryptedData) {
    if (!encryptionKey) throw new Error("Encryption key not set.");

    const ciphertextBuffer = base64ToArrayBuffer(encryptedData.ciphertext);
    const ivBuffer = base64ToArrayBuffer(encryptedData.iv);

    const decryptedBuffer = await crypto.subtle.decrypt(
        { name: CRYPTO_CONFIG.algo, iv: new Uint8Array(ivBuffer) },
        encryptionKey,
        ciphertextBuffer
    );

    return new TextDecoder().decode(decryptedBuffer);
}

async function saveData(key, data) {
    try {
        const rawJson = JSON.stringify(data);
        let valueToStore;

        if (encryptionKey) {
            const encrypted = await encryptData(rawJson);
            valueToStore = JSON.stringify({
                __encrypted: true,
                data: encrypted
            });
            // console.log(`✅ Data for ${key} saved (Encrypted).`);
        } else {
            valueToStore = rawJson;
        }

        localStorage.setItem(key, valueToStore);
        updateStorageBar();

        // --- ADD THESE LINES TO FIX THE RESULTS/SIDEBAR ---
        if (key === STORAGE_KEYS.pages) {
            updatePageListSidebar(); // Refreshes the sidebar list
        }
        
        if (key === STORAGE_KEYS.changes) {
            // Only refresh the results view if the user is currently looking at it
            if (window.location.hash === "#recent") {
                showRecent(); // Refreshes the Recent Changes display
            }
        }
        // --------------------------------------------------

    } catch(e) {
        console.error(`❌ Failed to save data for ${key}:`, e);
        speak("Error saving data. Check console for details.");
    }
}

async function loadData(key, defaultVal) {
    try {
        const v = localStorage.getItem(key);
        if (!v) return defaultVal;

        const storedPayload = JSON.parse(v);

        if (storedPayload && storedPayload.__encrypted) {
            if (!encryptionKey) {
                console.warn(`🔒 Data for ${key} is encrypted. Decryption key missing.`);
                return defaultVal;
            }
            const decryptedJson = await decryptData(storedPayload.data);
            return JSON.parse(decryptedJson);

        } else {
            return JSON.parse(v);
        }

    } catch (e) {
        console.error(`❌ Failed to load or decrypt data for ${key}:`, e);
        speak(`Warning: Data for ${key} is inaccessible or corrupt.`);
        return defaultVal;
    }
}

// ==========================================================
// 👤 AUTHENTICATION UTILITIES
// ==========================================================

function getCurrentUser() {
  try {
    const user = JSON.parse(localStorage.getItem(STORAGE_KEYS.currentUser) || 'null');
    if (user && user.crypto) {
        window.userCrypto = user.crypto;
    } else {
        window.userCrypto = null;
    }
    return user;
  } catch {
    return null;
  }
}

function speak(text) {
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'en-US';
      msg.pitch = 1;
      msg.rate = 1;
      window.speechSynthesis.speak(msg);
    }
}

async function updatePageListSidebar(filter = '') {
    const listEl = document.getElementById('page-list');
    if (!listEl) return;
    listEl.innerHTML = '';
    const pages = await loadData(STORAGE_KEYS.pages, {});
    const titles = Object.keys(pages)
      .filter(t => t !== "Formatting_Examples")
      .sort();
    const filterLower = filter.toLowerCase();

    let resultsCount = 0;

    titles.forEach(title => {
        if (filterLower === '' || title.toLowerCase().includes(filterLower)) {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${encodeURIComponent(title)}`;
            link.textContent = title;
            // CSP-SAFE: Use data attributes for linking
            link.setAttribute('data-page-link', title);
            li.appendChild(link);
            listEl.appendChild(li);
            resultsCount++;
        }
    });

    if (filterLower !== '') {
      const statusLi = document.createElement('li');
      statusLi.style.cssText = 'font-size: 0.85rem; color: #666; padding: 5px;';
      statusLi.textContent = `(${resultsCount} pages found)`;
      listEl.prepend(statusLi);
    }
}

// Exposed for the filter input to call
function titleInputSidebar() {
    const input = document.getElementById('ai-input');
    updatePageListSidebar(input ? input.value : '');
}



async function showRecent() {
  setMainView(true);
  console.log("Navigating to Recent Changes");
  closeSidebar();
  let changes = await loadData(STORAGE_KEYS.changes, []); 
  const c = document.getElementById('page-container');
  if (!c) return;

  const section = document.createElement('section'); 
  section.className = 'page'; 
  section.innerHTML = '<h2>Recent Changes</h2>';
  const ul = document.createElement('ul');
  
  // FIX: Ensure changes is an array before sorting
  if (Array.isArray(changes)) {
      changes.sort((a, b) => new Date(b.time) - new Date(a.time));
  } else {
      console.warn("Changes data is not an array, resetting to empty.");
      changes = []; 
  }
  
  if (changes.length === 0) {
      ul.innerHTML = '<li>No recent changes found. Start editing pages!</li>';
  } else {
      changes.slice(0,50).forEach(ch => {
        const li = document.createElement('li');
        const link = document.createElement('a'); 
        link.href = `#${encodeURIComponent(ch.title)}`; 
        link.textContent = ch.title;
        // CSP-SAFE: Use data attributes for linking
        link.setAttribute('data-page-link', ch.title);
        
        let typeClass = ch.type === 'create' ? 'color: green;' : ch.type === 'delete' ? 'color: red;' : 'color: orange;';
        li.innerHTML = `<strong style="${typeClass}">${ch.type.toUpperCase()}</strong> — `;
        li.appendChild(link); 
        li.append(` by ${ch.user} at ${new Date(ch.time).toLocaleString()}`);
        ul.appendChild(li);
      });
  }
  
  section.appendChild(ul);
  c.innerHTML = ''; 
  c.appendChild(section);
  location.hash = "#recent";
}

// ----------------------------------------------------
// ✅ MODIFIED: showSettings function to use the dedicated Import_Data page
// ----------------------------------------------------
async function showSettings() {
  setMainView(true);
  console.log("Navigating to Settings");
  closeSidebar();
  const c = document.getElementById('page-container');
  if (!c) return;
  const section = document.createElement('section');
  section.className = 'page';
  section.innerHTML = '<h2>Settings</h2>';
  
  // Theme Toggle
  const themeToggle = document.createElement('button'); 
  themeToggle.textContent = '🌗 Toggle Dark Mode'; 
  themeToggle.id = 'toggle-theme-btn';
  themeToggle.className = 'edit-btn';
  themeToggle.style.marginRight = '10px'; 
  section.appendChild(themeToggle);

  // NEW: Navigation Link to Import/Export Page (Replaces old file import/export buttons)
  const importExportLink = document.createElement('a'); 
  importExportLink.href = '#Import_Data';
  importExportLink.textContent = '📦 Manage Data (Import/Export)';
  importExportLink.className = 'edit-btn'; // Use a button-like style
  // Bind the navigation logic
  importExportLink.onclick = () => { showPage('Import_Data'); return false; }; 
  // Ensure it looks like a block button
  importExportLink.style.cssText = 'background-color: var(--color-accent); color: white; display: block; text-align: center; margin-top: 10px; padding: 10px 20px; border-radius: 8px; font-weight: bold;';
  section.appendChild(importExportLink);
  // --- END MODIFICATION ---

  
  // Storage Stats
  const storageStats = document.createElement('pre'); 
  storageStats.style.marginTop = '20px';
  storageStats.id = 'storage-stats';
  section.appendChild(storageStats);

  // ADDED: Data Security Warning
  const warning = document.createElement('div');
  const isEncrypted = encryptionKey !== null;
  warning.style.cssText = `padding: 15px; background: ${isEncrypted ? '#d4edda' : '#ffe0b2'}; border: 1px solid ${isEncrypted ? '#155724' : '#ff9800'}; border-radius: 4px; margin-top: 20px; color: ${isEncrypted ? '#155724' : '#000'};`;
  warning.innerHTML = `
      <h3>🚨 Data Security Warning</h3>
      <p>All localhost data is saved directly in your browser **Local Storage**. This data is **${isEncrypted ? '🔐 ENCRYPTED' : 'NOT encrypted'}**.</p>
      <p>${isEncrypted ? 'Your data is secured using AES-GCM (256-bit) derived from your PIN. If you forget your PIN, the data is permanently lost.' : 'The data may be readable by browser extensions. Log in with a PIN to enable strong encryption.'}</p>
      <p>Use the **Manage Data (Import/Export)** feature regularly.</p>
  `;
  section.appendChild(warning);

  // Clear Memory Button
  const clearBtn = document.createElement('button'); 
  clearBtn.textContent = '🧠 Clear Memory'; 
  clearBtn.className = 'delete-btn';
  clearBtn.id = 'clear-ai-memory-btn';
  section.appendChild(clearBtn);

  function updateStats() { 
      let totalBytes = 0; 
      for (let i = 0; i < localStorage.length; i++) { 
          const key = localStorage.key(i); 
          const value = localStorage.getItem(key) || ''; 
          totalBytes += (key.length + value.length) * 2; 
      } 
      const statsEl = document.getElementById('storage-stats');
      if (statsEl) {
        statsEl.textContent = `--- Local Storage Usage ---\nTotal Used: ${Math.round(totalBytes/1024)} KB\nTypical Quota: ~5120 KB (5MB)`; 
      }
  }

  c.innerHTML = '';
  c.appendChild(section);
  
  updateStats();

  location.hash = "#settings";
}

// ----------------------------------------------------
// ✅ FIX 2: Corrected showProfile function to ensure unique listener binding
// ----------------------------------------------------
/**
 * PLACEHOLDER FUNCTION FOR PROFILE PAGE
 */
async function showProfile() {
    setMainView(true);
    console.log("Navigating to Profile");
    closeSidebar();
    const c = document.getElementById('page-container');
    if (!c) return;

    const user = getCurrentUser();

    const section = document.createElement('section');
    section.className = 'page';
    section.innerHTML = `<h2>User Profile: ${user ? user.name : 'Guest'}</h2>`;

    if (user) {
        section.innerHTML += `
            <p><strong>Status:</strong> Logged in and **${encryptionKey ? 'encrypted' : 'unencrypted'}** session active.</p>
            <p><strong>Joined:</strong> ${new Date(user.joined).toLocaleDateString()}</p>
            <p><strong>Total Edits:</strong> (Not tracked yet)</p>
            <p>This page will be expanded to show user-specific statistics and history.</p>
            <button class="delete-btn" id="profile-logout-btn">Log Out</button> 
            `;
    } else {
        section.innerHTML += `<p>You are not currently logged in. Please log in or create an account to manage your profile.</p>`;
    }
    
    c.innerHTML = '';
    c.appendChild(section);
    location.hash = "#profile";
    
    // Re-bind the logout link using the new unique ID
    const logoutBtn = document.getElementById('profile-logout-btn');
    if (logoutBtn && !logoutBtn.getAttribute('data-listener-bound')) {
        logoutBtn.addEventListener('click', e => { 
            e.preventDefault(); 
            // Trigger the click event of the working sidebar logout link (id="logout-link")
            document.getElementById('logout-link')?.click();
        });
        logoutBtn.setAttribute('data-listener-bound', 'true'); // Prevent rebinding
    }
}


async function showAbout() {
  setMainView(true);
  console.log("Navigating to About");
  closeSidebar();
  const c = document.getElementById('page-container');
  if (!c) return;
  c.innerHTML = `<section class="page"><h2>About</h2>
    <p><strong>localhost </strong> is an offline‑first encyclopedia powered by your browser. It uses your browser local storage to save the data. No tracking, no server needed.</p>
    <h3>Features</h3>
    <ul>
      <li>Offline Editing and Viewing</li>
      <li>**Encrypted Storage (PIN required to unlock data)**</li>
      <li>Full-text search (for page titles)</li>
      <li>Voice Search Filtering</li>
      <li>Basic  Markup (==Headers, ''Bold, ''Italics, [[Links]])</li>
    </ul>
    <p>Source Version: localhost v1.2.3</p>
    </section>`;
  location.hash = "#about";
}




// Ensure this remains safe for your CSP
const htmlEscapes = {
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;', '/': '&#x2F;'
};

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>\x22\x27\/]/g, match => htmlEscapes[match]);
}

function parseWiki(text) {
  if (!text) return '';

  let lines = text.split('\n');
  let finalHtml = '';
  let inUL = false;
  let inOL = false;

  lines.forEach(line => {
    // Check for Lists first
    if (/^\*\s+/.test(line)) {
      if (inOL) { finalHtml += '</ol>'; inOL = false; }
      if (!inUL) { finalHtml += '<ul>'; inUL = true; }
      finalHtml += `<li>${inlineParse(line.replace(/^\*\s+/, ''))}</li>`;
    } else if (/^\#\s+/.test(line)) {
      if (inUL) { finalHtml += '</ul>'; inUL = false; }
      if (!inOL) { finalHtml += '<ol>'; inOL = true; }
      finalHtml += `<li>${inlineParse(line.replace(/^\#\s+/, ''))}</li>`;
    } else {
      // Close open lists
      if (inUL) { finalHtml += '</ul>'; inUL = false; }
      if (inOL) { finalHtml += '</ol>'; inOL = false; }
      
      if (line.trim() !== '') {
        finalHtml += inlineParse(line) + '<br>';
      } else {
        finalHtml += '<br>';
      }
    }
  });

  if (inUL) finalHtml += '</ul>';
  if (inOL) finalHtml += '</ol>';
  return finalHtml;
}

// Sub-function to handle formatting inside lines
function inlineParse(str) {
  // Bold/Italic
  str = str.replace(/'''(.*?)'''/g, '<strong>$1</strong>');
  str = str.replace(/''(.*?)''/g, '<em>$1</em>');
  // Wiki Links - Escape display text, but keep attribute functional
  str = str.replace(/\[\[([^\]]+)\]\]/g, (_, t) => `<a href="#" data-page-link="${escapeHTML(t)}">${escapeHTML(t)}</a>`);
  // Inline Code
  str = str.replace(/`([^`]+)`/g, (m, p1) => `<code>${escapeHTML(p1)}</code>`);
  return str;
}


function updateStorageBar() {
    const bar = document.getElementById('storage-bar-inner');
    if (!bar) return;
    if (navigator.storage && navigator.storage.estimate) {
      navigator.storage.estimate().then(est => {
        const usage = est.usage || 0;
        const quota = est.quota || 1;
        const percent = Math.min((usage / quota) * 100, 100).toFixed(1);
        bar.style.width = percent + '%';
        bar.title = `Used: ${(usage / 1024).toFixed(1)} KB / ${(quota / 1024).toFixed(1)} KB`;
      });
    } else {
      let totalBytes = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key) || '';
        totalBytes += (key.length + value.length) * 2;
      }
      bar.style.width = '100%';
      bar.title = `Approx. ${(totalBytes / 1024).toFixed(1)} KB used`;
    }
}

function applyThemeFromStorage() {
    let mode = localStorage.getItem(STORAGE_KEYS.theme);
    if (mode === null) {
      mode = 'dark';
      localStorage.setItem(STORAGE_KEYS.theme, mode); 
    }
    document.body.classList.toggle('dark', mode === 'dark');
}
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem(STORAGE_KEYS.theme, isDark ? 'dark' : 'light');
}
function restoreSidebarState() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      const storedState = localStorage.getItem(STORAGE_KEYS.sidebar);
      if (storedState === 'closed') {
        sidebar.style.display = 'none';
      } else {
        sidebar.style.display = 'block';
      }
    }
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    const isOpen = sidebar.style.display === 'block';
    if (isOpen) {
      sidebar.style.display = 'none';
      localStorage.setItem(STORAGE_KEYS.sidebar, 'closed');
    } else {
      sidebar.style.display = 'block';
      localStorage.setItem(STORAGE_KEYS.sidebar, 'open');
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.style.display === 'block') { 
      sidebar.style.display = 'none';
      localStorage.setItem(STORAGE_KEYS.sidebar, 'closed');
    }
}


// Utility for Hashing (for PIN verification, not encryption key derivation)
async function hashPin(pin) {
  if (!crypto.subtle) return null;
  const encoder = new TextEncoder();
  const data = encoder.encode(pin);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data); 
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// SETUP AUTH FUNCTION WRAPPED TO EXPOSE LOGOUT
function setupAuth() {
  const s = {
    modal: 'auth-modal', username: 'auth-username', pin: 'auth-pin', 
    title: 'auth-modal-title', createLink: 'create-account-link',
    loginLink: 'login-link', logoutLink: 'logout-link', userStatus: 'user-status',
    submitBtn: 'submit-auth', cancelBtn: 'cancel-auth'
  };

  async function getAllUsers() { return await loadData(STORAGE_KEYS.users, []); }
  async function saveAllUsers(users) { await saveData(STORAGE_KEYS.users, users); }
  
  function updateUserStatus() {
    const user = getCurrentUser();
    const el = document.getElementById(s.userStatus);
    if (el) el.textContent = user ? `Logged in as ${user.name}` : 'Not logged in';
  }
  function updateAuthUI() {
    const user = getCurrentUser();
    // CSP-SAFE: Using classList.add/remove('hidden') instead of manipulating .style.display
    document.getElementById(s.createLink)?.classList.toggle('hidden', !!user);
    document.getElementById(s.loginLink)?.classList.toggle('hidden', !!user);
    document.getElementById(s.logoutLink)?.classList.toggle('hidden', !user);
    const profileLink = document.getElementById('profile-link');
    if (profileLink) profileLink.classList.toggle('hidden', !user);
  }
  function showModal(isLogin = false) {
    const modal = document.getElementById(s.modal);
    const usernameInput = document.getElementById(s.username);
    const pinInput = document.getElementById(s.pin);
    document.getElementById(s.title).textContent = isLogin ? "Log In" : "Create Account";
    if (usernameInput) usernameInput.value = "";
    if (pinInput) pinInput.value = ""; 
    if (modal) modal.style.display = 'block';
    setTimeout(() => document.getElementById(s.username)?.focus(), 50);
  }
  function closeModal() {
    const modal = document.getElementById(s.modal);
    if (modal) modal.style.display = 'none';
  }
  
  async function submitAuth() { 
    const input = document.getElementById(s.username);
    const pinInput = document.getElementById(s.pin);
    const name = input ? input.value.trim() : '';
    const pin = pinInput ? pinInput.value.trim() : '';

    if (!name || !pin) { 
      console.error("Please enter both username and PIN."); 
      speak("Please enter both username and PIN."); 
      return; 
    }
    
    const enteredPinHash = await hashPin(pin);
    if (!enteredPinHash) { console.error("Hashing failed."); speak("Error: Pin hashing failed."); return; }

    let users = await getAllUsers();
    let user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    
    let saltArrayBuffer;
    let isNewUser = false;
    
    if (!user) {
      // --- ACCOUNT CREATION ---
      isNewUser = true;
      
      const salt = crypto.getRandomValues(new Uint8Array(CRYPTO_CONFIG.saltLength));
      saltArrayBuffer = salt.buffer;
      const saltB64 = arrayBufferToBase64(saltArrayBuffer);
      
      user = { 
          name, 
          joined: new Date().toISOString(), 
          edits: [],
          pinHash: enteredPinHash, 
          crypto: { salt: saltB64 } 
      }; 
      users.push(user);
      
    } else {
      // --- ACCOUNT LOGIN ---
      if (!user.pinHash || user.pinHash !== enteredPinHash) {
        console.error("❌ Invalid PIN."); 
        speak("Invalid PIN."); 
        return; 
      }
      if (!user.crypto || !user.crypto.salt) {
           console.error("❌ User found but missing crypto parameters. Data may be unrecoverable."); 
           speak("User data is incomplete. Please contact support.");
           return;
      }
      saltArrayBuffer = base64ToArrayBuffer(user.crypto.salt);
    }
    
    // 3. DERIVE SESSION ENCRYPTION KEY
    try {
        const key = await deriveKey(pin, saltArrayBuffer);
        encryptionKey = key; 
        console.log("✅ Encryption key derived and set for session.");
    } catch(e) {
        console.error("❌ Key derivation failed:", e);
        speak("Critical error during key derivation. Cannot log in.");
        encryptionKey = null;
        return;
    }
    
    // 4. SAVE
    if (isNewUser) {
      await saveAllUsers(users); 
      console.log(`✅ Account created and encrypted storage initiated for ${name}`);
      speak(`Account created and encrypted storage initiated for ${name}.`);
    }
    
    // 5. FINISH LOGIN
    localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user));
    closeModal();
    updateAuthUI();
    updateUserStatus();
    updateStorageBar();
    await showPage("Main_Page");
  }
  
  function logout() {
    encryptionKey = null; 
    window.userCrypto = null;
    localStorage.removeItem(STORAGE_KEYS.currentUser);
    console.log("Logged out. Encryption key cleared from memory.");
    updateAuthUI();
    updateUserStatus();
    updateStorageBar();
    showAbout();
  }
  
  // CSP-SAFE: Attaching event listeners instead of inline 'onclick'
  document.getElementById(s.createLink)?.addEventListener('click', e => { e.preventDefault(); showModal(false); });
  document.getElementById(s.loginLink)?.addEventListener('click', e => { e.preventDefault(); showModal(true); });
  document.getElementById(s.logoutLink)?.addEventListener('click', e => { e.preventDefault(); logout(); });
  document.getElementById(s.submitBtn)?.addEventListener('click', e => { e.preventDefault(); submitAuth(); }); 
  document.getElementById(s.cancelBtn)?.addEventListener('click', e => { e.preventDefault(); closeModal(); });
  document.addEventListener('keydown', e => { 
      if (e.key === 'Escape' && document.getElementById(s.modal)?.style.display === 'block') closeModal(); 
  });

  updateUserStatus();
  updateAuthUI();
  
  // EXPOSE LOGOUT FUNCTIONALITY FOR DYNAMICALLY CREATED BUTTONS
  return { logout: logout };
}

// Attach the Auth functions to the global scope for dynamic button binding (e.g., in showProfile)
setupAuth.getAuthFunctions = setupAuth;


function sanitizeContent(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return input; 
}

function setMainView(showMain) {
    const findView = document.getElementById('find-view');
    const pageContainer = document.getElementById('page-container');

    if (showMain) {
        if(findView) findView.style.display = 'none';
        if(pageContainer) pageContainer.style.display = 'block';
    } else {
        if(findView) findView.style.display = 'block';
        if(pageContainer) pageContainer.style.display = 'none';
    }
}

async function createPage(titleFromSearch = null) {
  setMainView(true);
  const title = titleFromSearch || prompt("Enter new page title:");
  if (!title || title.trim() === '') return;

  // 🛡️ 1. SECURITY: Initial Perimeter Check
  const protectedKeywords = ['__proto__', 'constructor', 'prototype'];
  const cleanTitle = title.toString().trim();
  const lowerTitle = cleanTitle.toLowerCase();

  if (protectedKeywords.includes(lowerTitle)) {
      console.warn("Unauthorized property manipulation attempt detected.");
      localStorage.setItem('mev_breach_detected', 'true');
      location.href = './css.html#search'; 
      return;
  }
  
  const pages = await loadData(STORAGE_KEYS.pages, {}); 
  const user = getCurrentUser();
  
  // 2. CHECK FOR EXISTING DATA
  if (Object.prototype.hasOwnProperty.call(pages, cleanTitle)) { 
      speak(`Page ${cleanTitle} already exists.`); 
      window.location.hash = encodeURIComponent(cleanTitle);
      showPage(cleanTitle); 
      return; 
  }
  
  // 🛡️ 3. SOVEREIGN ASSIGNMENT (Double-Lock Hardening)
  // We check the key again here to clear CodeQL alerts for line 845 area
  if (!protectedKeywords.includes(lowerTitle)) {
      pages[cleanTitle] = { 
          title: cleanTitle, 
          content: `== ${cleanTitle} ==\n\nThis is your new page.`, 
          lastEdited: new Date().toISOString(), 
          createdBy: user ? user.name : 'Guest' 
      };
  } else {
      // Emergency return if perimeter was somehow bypassed
      return;
  }
  
  // 4. PERSISTENCE
  await saveData(STORAGE_KEYS.pages, pages); 

  // 5. LOG CHANGES
  const newChangeEntry = { 
    type: 'create', 
    title: cleanTitle, 
    time: new Date().toISOString(), 
    user: user ? user.name : 'Guest' 
  };
  
  const changes = await loadData(STORAGE_KEYS.changes, []); 
  changes.unshift(newChangeEntry);
  await saveData(STORAGE_KEYS.changes, changes);

  // 6. UI REFRESH
  await updatePageListSidebar(); 
  window.location.hash = encodeURIComponent(cleanTitle);
  await showPage(cleanTitle);
}

async function savePage(title) {
  // 🛡️ HARDENED SECURITY: Remediates CodeQL Alert #51
  const protectedKeywords = ['__proto__', 'constructor', 'prototype'];

  // 1. Validate type and content BEFORE any assignment
  if (typeof title !== 'string' || !title.trim() || protectedKeywords.includes(title.toLowerCase())) {
      console.warn("STOP! Unauthorized property manipulation attempt detected.");
      localStorage.setItem('mev_breach_detected', 'true');
      location.href = './css.html#search'; 
      return;
  }

  // 2. Use a sanitized variable name
  const safeTitle = title.trim();

  const pages = await loadData(STORAGE_KEYS.pages, {}); 
  const user = getCurrentUser();
  const editor = document.querySelector('.editor');
  if (!editor) return;
  
  const rawContent = editor.value;

  // 3. Assignment is now safe because safeTitle is validated
  if (!pages[safeTitle]) pages[safeTitle] = {}; 
  
  pages[safeTitle].content = rawContent;
  pages[safeTitle].lastEdited = new Date().toISOString();
  pages[safeTitle].createdBy = user ? user.name : 'Guest';
  
  await saveData(STORAGE_KEYS.pages, pages); 

  const newChangeEntry = { 
    type: 'edit', title: safeTitle, time: new Date().toISOString(), user: user ? user.name : 'Guest' 
  };
  
  const changes = await loadData(STORAGE_KEYS.changes, []); 
  changes.unshift(newChangeEntry);
  await saveData(STORAGE_KEYS.changes, changes); 
  
  await updatePageListSidebar(); 
  window.location.hash = encodeURIComponent(safeTitle);
  await showPage(safeTitle);
}



async function deletePage(title) {
  console.log("Deleting page:", title);
  const pages = await loadData(STORAGE_KEYS.pages, {}); 
  const changes = await loadData(STORAGE_KEYS.changes, []); 
  const user = getCurrentUser();
  
  // Custom modal UI should be used here instead of confirm() for a proper PWA
  if (!window.confirm(`Are you sure you want to delete the page "${title}"? This cannot be undone.`)) { return; }
  
  
    if (!pages[title]) {
        speak(`Page ${title} not found.`);
        return;
    }
    
    // Remove page
    delete pages[title];
    await saveData(STORAGE_KEYS.pages, pages);

    // 1. Define the change entry
    const newChangeEntry = { 
        type:'delete', 
        title, 
        time:new Date().toISOString(), 
        user:user ? user.name : 'Guest' 
    };
    
    // 2. Log to global changes array
    changes.unshift(newChangeEntry);
    await saveData(STORAGE_KEYS.changes, changes);

    if (user) {
        let users = await loadData(STORAGE_KEYS.users, []);
        const userIndex = users.findIndex(u => u.name === user.name);

        if (userIndex !== -1) {
            let userToUpdate = users[userIndex];
            
            // Initialize 'edits' if it doesn't exist
            if (!userToUpdate.edits) userToUpdate.edits = [];
            
            // Add the new deletion entry to the user's personal history
            userToUpdate.edits.unshift(newChangeEntry); 
            
            // Save the full user list back to storage
            await saveData(STORAGE_KEYS.users, users);
            
            // Update the currentUser session key
            localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(userToUpdate));
        }
    }
    
  
  
  await updatePageListSidebar(); 
  await generatePageButtonsFindView();
  console.log(`✅ Page "${title}" deleted.`);
  speak(`Page ${title} deleted.`);
  await showRecent();
}

async function showPage(title) {
  if (title === "find-view") {
    setMainView(false);
    return;
  }
  setMainView(true);
  console.log("Showing page:", title);
  closeSidebar();
  
  // --- START MODIFICATION: Add return statement for custom pages ---
  if (title === 'Import_Data') {
      document.getElementById('page-container').innerHTML = renderImportPage();
      document.title = 'Import/Export Data – localhost ';
      location.hash = '#Import_Data';
      return; // <-- CRITICAL FIX: Stop execution here
  }
  // --- END MODIFICATION ---

  const pages = await loadData(STORAGE_KEYS.pages, {}); 
  const page = pages[title];
  const c = document.getElementById('page-container');
  if (!c) return;
  
  if (!page) {
    const all = Object.keys(pages);
    const suggest = all.filter(t => t.toLowerCase().includes(title.toLowerCase()));
    let html = `<section class="page"><h2>No page found for "${escapeHTML(title)}"</h2>`;
    if (suggest.length) {
      html += `<p>Did you mean: ${suggest.map(t => `<a href="#" data-page-link="${t}">${escapeHTML(t)}</a>`).join(', ')}</p>`;
    }
    html += `<p>Would you like to create it?</p><button class="edit-btn" data-create-page="${escapeHTML(title)}">Create Page "${escapeHTML(title)}"</button></section>`;
    c.innerHTML = html;
    speak(`No page found for ${title}.`);
    location.hash = "#notfound";
    return;
  }
  
  const finalSafeHTML = parseWiki(page.content); 
  // IMPORTANT: For the single file, the URL will always be index.html.
  const pageUrl = `${location.origin}#${encodeURIComponent(page.title)}`; 
  const dateMod = new Date(page.lastEdited).toISOString();
  const authorName = escapeHTML(page.createdBy || 'Guest');

  // SCHEMA FIX: Injected fully compliant Article schema
  c.innerHTML = `
    <article class="page" 
             itemscope 
             itemtype="https://schema.org/Article"
             itemid="${pageUrl}"
    >
      <meta itemprop="mainEntityOfPage" content="${pageUrl}">
      <h2 itemprop="headline">${escapeHTML(page.title)}</h2>
      
      <div class="meta-info" style="font-size: 0.85rem; color: #555555; margin-bottom: 10px;">
        Last edited: <time itemprop="dateModified" datetime="${dateMod}">${new Date(page.lastEdited).toLocaleString()}</time> 
        by <span itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">${authorName}</span></span>
      </div>

      <meta itemprop="image" content="${location.origin}/icon-512.png">
      
      <div class="content" itemprop="articleBody">${finalSafeHTML}</div>
      
      <hr style="margin-top:20px; border-top: 1px solid #ccc;">
      <button class="edit-btn" id="edit-btn">Edit</button>
      <button class="delete-btn" id="delete-btn">Delete Page</button>
      <div class="semantic-status">✔️ Semantic HTML Loaded</div>
    </article>
  `;

  document.getElementById('edit-btn')?.addEventListener('click', () => editPage(title));
  document.getElementById('delete-btn')?.addEventListener('click', () => deletePage(title));
  
  if (title === "Main_Page") {
      location.hash = "#main";
  } else {
      location.hash = `#${encodeURIComponent(title)}`;
  }
}

// --- NEW FUNCTION: Render the Import/Export UI as a  Page ---
function renderImportPage() {
    return `
        <section class="bg-white p-6 rounded-xl shadow-lg" style="background-color: var(--bg-card); border: 1px solid var(--border-color);">
            <h1 class="text-3xl font-extrabold mb-4" style="color: var(--text-primary);">Import/Export Data</h1>
            <p class="mb-6" style="color: var(--text-secondary);">This utility allows you to backup and restore your localhost content. The full backup includes your login details (hashed PIN), so be cautious when sharing.</p>
            
            <h2 class="text-xl font-semibold mt-6" style="color: var(--text-primary);">1. Import Data (Paste JSON)</h2>
            <p class="text-sm" style="color: var(--text-secondary);">Paste your localhost  JSON backup code below and click the green button to import pages.</p>
            
            <textarea 
                id="importDataInput" 
                placeholder="Paste your localhost JSON backup code here..." 
                rows="10" 
                style="width:100%; padding:10px; border-radius: 8px; border: 1px solid var(--border-color); background-color: var(--bg-page); color: var(--text-primary); font-family: monospace; resize: vertical;"
            ></textarea>
            <button 
                onclick="runImport()" 
                class="block w-full text-center px-4 py-2 text-lg font-semibold rounded-lg text-white bg-green-500 hover:bg-green-600 mt-3"
            >
                Import Wiki Content
            </button>
            <p id="importStatus" class="mt-3 text-sm" style="color: var(--color-accent);"></p>
            
            <h2 class="text-xl font-semibold mt-6" style="color: var(--text-primary);">2. Export Data</h2>
            <button 
                onclick="exportData(true)" 
                class="block w-full text-center px-4 py-2 text-lg font-semibold rounded-lg text-white bg-green-500 hover:bg-green-600 mt-3"
            >
                Download Content-Only Backup (Safe to Share)
            </button>
            <button 
                onclick="exportData(false)" 
                class="block w-full text-center px-4 py-2 text-lg font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-600 mt-3"
            >
                Download Full Backup (Includes Users & Pins)
            </button>
        </section>
    `;
}


async function editPage(title) {
  setMainView(true);
  console.log("Editing page:", title);
  const user = getCurrentUser();
  if (!user) { console.error("You must be logged in to edit sections."); speak("You must be logged in to edit pages."); return; }
  
  const pages = await loadData(STORAGE_KEYS.pages, {}); 
  const page = pages[title];
  const c = document.getElementById('page-container');
  if (!c) return;
  
  c.innerHTML = `<section class="page">
    <h2>Editing: ${escapeHTML(title)}</h2>
    <p style="font-size: 0.85rem; color: #6c757d;">Using simple localhost markup. See Formatting_Examples for help.</p>
    <textarea class="editor">${escapeHTML(page.content)}</textarea>
    <button class="edit-btn" id="save-page-btn">Save Changes</button>
    <button class="delete-btn" id="cancel-edit-btn">Cancel</button>
  </section>`;
  
  // CSP-SAFE: Attaching listeners to the newly created buttons
  document.getElementById('save-page-btn')?.addEventListener('click', () => savePage(title));
  document.getElementById('cancel-edit-btn')?.addEventListener('click', () => showPage(title));
  document.querySelector('.editor')?.focus();
}

async function savePage(title) {
  console.log("Saving page:", title);
  
  // 🛡️ 1. SECURITY: Initial Perimeter Check
  const protectedKeywords = ['__proto__', 'constructor', 'prototype'];
  
  // Sanitize input to block hidden bypasses
  const cleanTitle = title.toString().toLowerCase().trim();
  
  if (protectedKeywords.includes(cleanTitle)) {
      console.warn("STOP! Unauthorized property manipulation attempt detected.");
      localStorage.setItem('mev_breach_detected', 'true');
      location.href = './css.html#search'; 
      return;
  }

  // 2. DATA PREPARATION
  const pages = await loadData(STORAGE_KEYS.pages, {}); 
  const user = getCurrentUser();
  const editor = document.querySelector('.editor');
  if (!editor) { console.error("Editor not found."); return; }
  
  const rawContent = editor.value;

  // 🛡️ 3. SOVEREIGN ASSIGNMENT (Property Isolation - Resolves Alert #57)
  if (!protectedKeywords.includes(cleanTitle)) {
      // Initialize the entry using the safe hasOwnProperty check
      if (!Object.prototype.hasOwnProperty.call(pages, title)) {
          pages[title] = {
              content: "",
              lastEdited: "",
              createdBy: ""
          }; 
      }
      
      // ISOLATION: Define a local reference to the specific page object.
      // This tells CodeQL that we are now working on a verified object,
      // not a dynamic property of the 'pages' map.
      const targetPage = pages[title];

      if (targetPage && typeof targetPage === 'object') {
          targetPage.content = rawContent;
          targetPage.lastEdited = new Date().toISOString();
          targetPage.createdBy = user ? user.name : 'Guest';
      }
  } else {
      // Perimeter Backup: Block execution
      return;
  }
  
  // 4. PERSISTENCE
  await saveData(STORAGE_KEYS.pages, pages); 

  // 5. UPDATE CONTRIBUTION HISTORY
  const newChangeEntry = { 
    type: 'edit', 
    title, 
    time: new Date().toISOString(), 
    user: user ? user.name : 'Guest' 
  };
  
  if (user) {
    let users = await loadData(STORAGE_KEYS.users, []);
    const userIndex = users.findIndex(u => u.name === user.name);
    if (userIndex !== -1) {
        let userToUpdate = users[userIndex];
        if (!userToUpdate.edits) userToUpdate.edits = [];
        userToUpdate.edits.unshift(newChangeEntry);
        await saveData(STORAGE_KEYS.users, users);
        localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(userToUpdate));
    }
  }

  // 6. UPDATE RECENT CHANGES
  const changes = await loadData(STORAGE_KEYS.changes, []); 
  changes.unshift(newChangeEntry);
  await saveData(STORAGE_KEYS.changes, changes); 
  
  console.log("✅ Page saved.");
  speak(`Page ${title} saved.`);
  
  // 7. UI REFRESH
  await updatePageListSidebar(); 
  if (typeof generatePageButtonsFindView === 'function') {
      await generatePageButtonsFindView(); 
  }

  // 8. NAVIGATION
  setTimeout(async () => {
      window.location.hash = encodeURIComponent(title);
      await showPage(title);
  }, 100);
}

// ✅ UPDATED: Content for Formatting_Examples page.
async function createExampleWikiPage() {
  const title = "Formatting_Examples";
  const pages = await loadData(STORAGE_KEYS.pages, {}); 
  if (pages[title]) return;
  const content = `
==  Page Formatting_Examples ==

This localhost uses a simple, lightweight markup for fast and clean formatting.

=== Headings ===
Use the '=' symbol at the start and end of a line to create headings:
== Level 2 Header (Section) ==
=== Level 3 Header (Subsection) ===

=== Text Styles ===
* '''Bold:''' Use triple apostrophes. Example: '''word'''
* ''Italic:'' Use double apostrophes. Example: ''word''
* '''Bold & Italic:''' Combine them. Example: '''''word'''''

=== Lists ===
* Item One (Unordered List / Bullet)
* Item Two
# Step One (Ordered List / Numbered)
# Step Two
# Step Three

=== Internal Links ===
Link to another page in the localhost using double square brackets:
[[Main_Page]]
[[Formatting_Examples]]

=== Code Blocks ===
Inline code: Use a backtick \` to wrap short code snippets. Example: \`const x = 5;\`

Block code uses three backticks:
\`\`\`
function exampleCode() {
  // Code block preserves spaces and new lines
  console.log("Hello World!");
}
\`\`\`
`;
  pages[title] = { title, content, createdBy:'System', lastEdited:new Date().toISOString() };
  await saveData(STORAGE_KEYS.pages, pages); 
  console.log("✅ Example localhost page created.");
}

// ✅ UPDATED: Content for Main_Page.
async function ensureMainPage() {
  const pages = await loadData(STORAGE_KEYS.pages, {}); 
  if (!pages["Main_Page"]) {
    pages["Main_Page"] = {
      title: "Main_Page",
      content: "== Welcome to localhost  ==\n\nAn offline‑first encyclopedia powered by your browser. No tracking, no server. You can search the localhost using the bar above, or check the [[Formatting_Examples]] page to learn more. You can also create a new page now!",
      lastEdited: new Date().toISOString(),
      createdBy: "System"
    };
    await saveData(STORAGE_KEYS.pages, pages); 
    console.log("✅ Main_Page created.");
  }
}



async function answerAI(query) {
  setMainView(true); 
  console.log("Search query:", query);
  const txt = query.trim();
  if (!txt) {
      await showPage("Main_Page"); 
      return;
  }
  
  const pages = await loadData(STORAGE_KEYS.pages, {}); 
  const titles = Object.keys(pages);
  const queryLower = txt.toLowerCase();

  if (pages[txt]) {
      await showPage(txt); 
      return;
  }
  
  const suggestedTitles = titles.filter(t => t.toLowerCase().includes(queryLower));

  const c = document.getElementById('page-container');
  if (!c) return;

  if (suggestedTitles.length) {
    c.innerHTML = `<section class="page">
      <h2>Closest matches for "${escapeHTML(txt)}"</h2>
      <p>Found ${suggestedTitles.length} pages matching your query:</p>
      <ul>${suggestedTitles.map(t => `<li><a href="#" data-page-link="${t}">${escapeHTML(t)}</a></li>`).join('')}</ul>
      <p>Or you can create a new page.</p>
      <button class="edit-btn" data-create-page="${escapeHTML(txt)}">Create Page "${escapeHTML(txt)}"</button>
    </section>`;
    speak(`Found ${suggestedTitles.length} similar pages for ${txt}.`);
  } else {
    c.innerHTML = `<section class="page">
      <h2>No page found for "${escapeHTML(txt)}"</h2>
      <p>There are no existing pages that match your search query. Would you like to create this page?</p>
      <button class="edit-btn" data-create-page="${escapeHTML(txt)}">Create Page "${escapeHTML(txt)}"</button>
    </section>`;
    speak(`No local page found for ${txt}.`);
  }
  location.hash = "#search"; 
}

async function generatePageButtonsFindView() {
  const listEl = document.getElementById('page-list-find');
  const pages = await loadData(STORAGE_KEYS.pages, {}); 
  
  listEl.innerHTML = '';
  
  const staticLinks = [
      { title: "Main_Page", hash: "main" },
      { title: "Recent Changes", hash: "recent" },
      { title: "Settings", hash: "settings" },
      { title: "About", hash: "about" }
  ];

  staticLinks.forEach(link => {
      listEl.appendChild(createButtonElementFindView(link.title, link.hash, true));
  });

  const titles = Object.keys(pages).filter(t => t !== "Formatting_Examples").sort();
  
  titles.forEach(title => {
      listEl.appendChild(createButtonElementFindView(title, encodeURIComponent(title), false));
  });

  titleInputFindView();
}
  
function titleInputFindView() {
  const inputEl = document.getElementById('filterInput-find');
  const statusEl = document.getElementById('status-message-find');
  if (!inputEl) return;
  
  const input = inputEl.value.toLowerCase().trim();
  const items = document.querySelectorAll('#page-list-find .titleInput-find');
  let visibleCount = 0;

  items.forEach(li => {
      const buttonText = li.querySelector('button').textContent.toLowerCase();
      
      if (buttonText.includes(input)) {
          li.style.display = "list-item";
          visibleCount++;
      } else {
          li.style.display = "none";
      }
  });

  if (input) {
      statusEl.textContent = `Pages Matching "${input}": ${visibleCount}`;
  } else {
      statusEl.textContent = `Total  Pages Found: ${items.length}`;
  }
  
  document.getElementById('ai-input').value = inputEl.value;
}

function updateConnectionStatus() {
  const el = document.getElementById('status-indicator');
  const banner = document.getElementById('offline-message');
  const online = navigator.onLine;
  if (el) el.textContent = online ? '🟢 Online' : '🔴 Offline';
  if (banner) banner.style.display = online ? 'none' : 'block';
}

function resetHashAndScroll(hash = "#main") {
  history.replaceState(null, null, ' ');
  location.hash = hash;
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const main = document.getElementById("main-content-wrapper");
    if (main) main.scrollTop = 0;
  }, 50);
}

function createButtonElementFindView(title, hash, isStatic) {
      const li = document.createElement('li');
      li.className = 'titleInput-find'; 
      li.setAttribute('data-static', isStatic); 

      const button = document.createElement('button');
      button.textContent = title;
      
      // CSP-SAFE: Use data attributes for linking
      button.setAttribute('data-nav-target', hash);
      button.setAttribute('data-page-target', title);

      li.appendChild(button);
      return li;
  }

async function handleLinkClick(e) {
    e.preventDefault();
    const target = e.target.closest('[data-page-link], [data-page-target], [data-nav-target], [data-create-page]');
    if (!target) return;

    if (target.hasAttribute('data-page-link')) {
        await showPage(target.getAttribute('data-page-link'));
    } else if (target.hasAttribute('data-page-target')) {
        await showPage(target.getAttribute('data-page-target'));
    } else if (target.hasAttribute('data-nav-target')) {
        const hash = target.getAttribute('data-nav-target');
        if (hash === "recent") await showRecent();
        else if (hash === "settings") await showSettings();
        else if (hash === "about") await showAbout();
    } else if (target.hasAttribute('data-create-page')) {
        await createPage(target.getAttribute('data-create-page'));
    }
    
    // Clear search inputs after navigation
    document.getElementById('ai-input').value = ''; 
    document.getElementById('filterInput-find').value = '';
}

async function handleSettingsAction(e) {
  const target = e.target;
  if (target.id === 'toggle-theme-btn') {
      toggleTheme();
  // --- START MODIFICATION: REMOVE OLD IMPORT/EXPORT LOGIC ---
  } else if (target.id === 'clear-ai-memory-btn') {
      localStorage.removeItem(STORAGE_KEYS.knowledge); 
      await saveData(STORAGE_KEYS.knowledge, {});
      console.log(' memory cleared.'); 
      speak(" memory cleared.");
      // Re-run showSettings to update the stats and warning section
      await showSettings(); 
  }
  // --- END MODIFICATION ---
}

// --- START PR 1 FIX: Robust runImport() function (KEPT AS IS) ---
async function runImport() {
    const input = document.getElementById('importDataInput').value;
    const statusMsg = document.getElementById('importStatus');
    statusMsg.innerText = 'Processing...';

    if (!input) {
        statusMsg.innerText = 'Please paste the code first.';
        return;
    }

    try {
        // 1. Parse the JSON
        let importedData = JSON.parse(input);

        // 2. SANITIZATION: Strip out sensitive data before merging
        // This is VITAL to prevent overwriting the current session (currentUser) 
        // and deleting the Admin user's pinHash, which would break login.
        delete importedData.users;
        delete importedData.currentUser;
        // Also ensure no stray pinHash keys at the root level are imported
        delete importedData.pinHash; 

        // 3. Fix the specific encoding glitch in page content
        if (importedData.pages) {
            for (const key in importedData.pages) {
                let page = importedData.pages[key];
                if (page.content) {
                    // Replaces the broken 'â€‘' with a standard hyphen '-'
                    page.content = page.content.replace(/â€‘/g, "-");
                }
            }
        }

        // 4. MERGE DATA (Pages)
        // Load existing pages and merge the imported ones on top (overwriting conflicts)
        const currentPages = await loadData(STORAGE_KEYS.pages, {});
        const newPages = { ...currentPages, ...importedData.pages };
        await saveData(STORAGE_KEYS.pages, newPages);

        // 5. MERGE DATA (Changes/History - optional, but good for completeness)
        if (importedData.changes) {
            const currentChanges = await loadData(STORAGE_KEYS.changes, []);
            // Concatenate the imported changes with the current history
            await saveData(STORAGE_KEYS.changes, [...importedData.changes, ...currentChanges]);
        }
        
        // 6. Final success state
        statusMsg.innerText = "Import successful! Reloading to apply changes...";
        
        // Reload the page to refresh the navigation and current view
        setTimeout(() => {
            location.reload();
        }, 1000);

    } catch (e) {
        // Handle malformed JSON errors gracefully
        console.error('Import Error:', e);
        statusMsg.innerText = `❌ Error importing data: ${e.message}. Check your JSON syntax.`;
    }
}
// --- END PR 1 FIX ---

// --- START PR 2 FIX: Safe Export Function (KEPT AS IS) ---
async function exportData(isContentOnly) {
    // 1. Load the full application state
    const appState = {
        pages: await loadData(STORAGE_KEYS.pages, {}),
        users: await loadData(STORAGE_KEYS.users, []),
        currentUser: getCurrentUser(), // Get the active user object
        changes: await loadData(STORAGE_KEYS.changes, []),
        knowledge: await loadData(STORAGE_KEYS.knowledge, {}),
    };

    let exportData = { ...appState };
    let fileName = `localhost-wiki-backup-${new Date().toISOString().slice(0, 10)}`;

    if (isContentOnly) {
        // 2. SANITIZE: Keep only content and public history
        delete exportData.users;
        delete exportData.currentUser;
        // Do not delete 'changes' as that is often useful historical context
        
        fileName += '-content-only.json';
    } else {
        // 3. FULL BACKUP: Include everything (users, pinHash, etc.)
        fileName += '-full.json';
    }

    // 4. Create the JSON string
    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    
    // 5. Trigger the download
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    speak(`Exported data to ${fileName}`);
}
// --- END PR 2 FIX ---



// ==========================================================
// 🚀 INITIALIZATION & EVENT BINDING (CSP-SAFE)
// ==========================================================

document.addEventListener('DOMContentLoaded', async () => {
  applyThemeFromStorage();
  setupAuth();
  updateConnectionStatus();
  updateStorageBar();

  
  // Create/Ensure essential localhost pages
  await createExampleWikiPage(); 
  await ensureMainPage(); 
  
  await updatePageListSidebar(); 
  await generatePageButtonsFindView(); 
  
  restoreSidebarState(); 

  window.addEventListener('online', updateConnectionStatus);
  window.addEventListener('offline', updateConnectionStatus);
  
  // Hash Change Listener (remains functional)
  window.addEventListener('hashchange', async () => { 
    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash === "main") await showPage("Main_Page");
    else if (hash === "settings") await showSettings();
    else if (hash === "about") await showAbout();
    else if (hash === "recent") await showRecent();
    else if (hash === "profile") showProfile();
    else if (hash === "Import_Data") await showPage("Import_Data"); // Added for hash nav
    else if (hash === "search" || hash === "notfound") {}
    else if (hash) { 
        await showPage(hash); 
    } else {
        await showPage("Main_Page"); 
    }
  });

  // CSP-SAFE Event Listeners (Instead of inline handlers)

// 1. Menu and Search Controls
document.getElementById('menu-btn')?.addEventListener('click', toggleSidebar);

const searchInput = document.getElementById('ai-input');
if (searchInput) {
    // A. Original sidebar filtering logic
    searchInput.addEventListener('input', titleInputSidebar); 

    // B. Hardened Underscore Logic (moved from index.html)
    searchInput.addEventListener('input', function(e) {
        const start = this.selectionStart;
        const end = this.selectionEnd;
        const originalValue = this.value;
        const newValue = originalValue.replace(/\s+/g, '_');

        if (originalValue !== newValue) {
            this.value = newValue;
            this.setSelectionRange(start, end);
        }
    });

    // C. Handle "Paste" events
    searchInput.addEventListener('paste', function(e) {
        setTimeout(() => {
            this.value = this.value.replace(/\s+/g, '_');
        }, 0);
    });
}

document.getElementById('filterInput-find')?.addEventListener('input', titleInputFindView);
  
  // 2. Search Button Action
  document.getElementById('ai-button')?.addEventListener('click', async () => {
    const inp = document.getElementById('ai-input');
    const findInp = document.getElementById('filterInput-find');
    const query = (inp?.value.trim() || findInp?.value.trim() || "");
    
    if (inp) inp.value = query;
    if (findInp) findInp.value = query;

    if (query) {
      await answerAI(query);
    } else {
      await showPage("Main_Page");
    }
    
    // Clear search inputs after submission
    if (inp) inp.value = '';
    if (findInp) findInp.value = '';
  });

  // 3. Enter Key Submission (Combined for both search inputs)
  const searchHandler = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('ai-button')?.click();
    }
  };
  document.getElementById('ai-input')?.addEventListener('keydown', searchHandler);
  document.getElementById('filterInput-find')?.addEventListener('keydown', searchHandler);
  
  // 4. Create Page Button
  document.getElementById('create-page-btn')?.addEventListener('click', e => {
    e.preventDefault();
    createPage();
  });
  
  // 5. Global Link/Button Handler (Delegated for dynamically created links)
  document.getElementById('main-content-wrapper')?.addEventListener('click', handleLinkClick);
  document.getElementById('sidebar')?.addEventListener('click', handleLinkClick);

  // 6. Profile Link
  document.getElementById('profile-link')?.addEventListener('click', e => { e.preventDefault(); showProfile(); });
  
  // 7. Settings Action Handler (Delegated)
  document.getElementById('page-container')?.addEventListener('click', handleSettingsAction);


// SW Registration (Hardened Physical File)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Points to the physical sw.js file with correct scope
        navigator.serviceWorker.register('./sw.js', { scope: './' })
            .then(reg => {
                console.log('✅ Service Worker registered via Physical File. Scope:', reg.scope);
            })
            .catch(err => {
                console.error('❌ SW registration failed (Physical File):', err);
                console.warn('Check if sw.js exists at the root of the ./ directory.');
            });
    });
}

  // SW Update Fix for SPA Stale Content 
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
          console.log("New Service Worker activated. Forcing page reload for fresh content.");
          window.location.reload();
      }, { once: true }); 
  }
});



// Request persistent storage to prevent browser 'eviction'
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then(granted => {
    if (granted) {
      console.log("✅ Sovereign Data Status: Persistent (Browser will not auto-delete).");
    } else {
      console.log("⚠️ Sovereign Data Status: Best-effort (Browser might delete if space is critical).");
    }
  });
}



// ====== SPLASH SCREEN & SEARCH INITIALIZATION (CSP-SAFE) ======
(function initSovereignSplash() {
    const HUMAN_KEY = 'mev_human_verified';

    // Helper to hide splash and navigate
    function exitSplash(hash) {
        localStorage.setItem(HUMAN_KEY, 'true');
        const splash = document.getElementById('mev-splash-screen');
        if (splash) splash.style.display = 'none';
        
        // Ensure proper hash formatting
        const targetHash = hash.startsWith('#') ? hash : `#${hash}`;
        window.location.hash = targetHash;
        
        if (typeof window.showPage === 'function') {
            window.showPage(decodeURIComponent(targetHash.substring(1)));
        }
    }

    function createSplashButton(title, hash) {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = title.replace(/_/g, ' ');
        button.className = 'mev-button';
        button.type = 'button'; // Prevents button from submitting forms
        
        button.addEventListener('click', () => exitSplash(hash));
        
        li.appendChild(button);
        return li;
    }

    async function setupSplash() {
        const listEl = document.getElementById('page-list-splash');
        const inputEl = document.getElementById('filterInput-splash');
        const formEl = document.getElementById('splash-form');
        if (!listEl) return;

        // 1. Clear and Load Data
        listEl.innerHTML = '';
        const pages = await loadData(STORAGE_KEYS.pages, {});
        const fragment = document.createDocumentFragment();

        // 2. Add Static & Dynamic Links to a Fragment (Performance Boost)
        const staticLinks = [{ title: "Main_Page", hash: "Main_Page" }];
        const titles = Object.keys(pages).sort();

        staticLinks.forEach(link => fragment.appendChild(createSplashButton(link.title, link.hash)));
        titles.forEach(title => fragment.appendChild(createSplashButton(title, title)));

        listEl.appendChild(fragment);

        // 3. Fix the "Enter Key" Refresh (Form Submission)
        formEl?.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the page refresh
            const firstVisible = listEl.querySelector('li:not([style*="display: none"]) button');
            if (firstVisible) {
                firstVisible.click(); // Open the first result found
            }
        });

        // 4. Search Filter Logic
        inputEl?.addEventListener('input', function() {
            const filter = this.value.toLowerCase();
            const items = listEl.querySelectorAll('li');
            
            items.forEach(li => {
                const text = li.textContent.toLowerCase();
                li.style.display = text.includes(filter) ? "block" : "none";
            });
        });
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupSplash);
    } else {
        setupSplash();
    }
})();


	// --- Theme Toggle Logic --- feb 28 1030 pm
const themeBtn = document.getElementById('theme-toggle-btn');
if (themeBtn) {
    // Check for saved preference
    if (localStorage.getItem('mev_theme') === 'less') {
        document.body.classList.add('less-mode');
        themeBtn.textContent = 'Standard UI';
    }

    themeBtn.addEventListener('click', () => {
        const isLess = document.body.classList.toggle('less-mode');
        
        if (isLess) {
            localStorage.setItem('mev_theme', 'less');
            themeBtn.textContent = 'Standard UI';
        } else {
            localStorage.setItem('mev_theme', 'standard');
            themeBtn.textContent = 'Toggle "Less" Theme';
        }
    });
}



// ====== SOVEREIGN CONTROLLER: THEME & DATA (CSP-SAFE) ======
document.addEventListener('click', async (e) => {
    // 1. Handle "Less" Theme Toggle
    if (e.target && e.target.id === 'toggle-theme-btn') {
        const isLess = document.body.classList.toggle('less-mode');
        localStorage.setItem('wiki_theme_less', isLess ? 'enabled' : 'disabled');
        e.target.textContent = isLess ? '🌖 Switch to Full Theme' : '🌗 Toggle Less Theme';
    }

    // 2. Handle Import Data Button Trigger
    if (e.target && e.target.id === 'import-trigger-btn') {
        document.getElementById('import-file-input')?.click();
    }

    // 3. Handle Export Data Button
    if (e.target && e.target.id === 'export-data-btn') {
        const pages = await loadData(STORAGE_KEYS.pages, {});
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({pages}));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "mev_sovereign_backup.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    }
});

// 4. Handle File Processing for Import
document.addEventListener('change', (e) => {
    if (e.target && e.target.id === 'import-file-input') {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (event) => {
            try {
                const data = JSON.parse(event.target.result);
                await saveData(STORAGE_KEYS.pages, data.pages || {});
                alert("Data Imported Successfully into the Subconscious.");
                window.location.reload();
            } catch (err) {
                alert("Error: Invalid Backup File.");
            }
        };
        reader.readAsText(file);
    }
});

// 5. Apply Theme State on Startup
(function initThemeState() {
    if (localStorage.getItem('wiki_theme_less') === 'enabled') {
        document.body.classList.add('less-mode');
    }
})();

// ====== RECOVERY PERIMETER CONTROLLER (HARDENED) ======
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'restore-perimeter-btn') {
        const BREACH_KEY = 'mev_breach_detected';
        
        // Manual Challenge to verify human/partner intent
        const challenge = prompt("Perimeter Locked. Enter 'RESTORE' to return to the conscious state:");
        
        if (challenge === 'RESTORE') {
            // 1. Clear the breach flags
            localStorage.removeItem(BREACH_KEY);
            localStorage.setItem('mev_human_verified', 'true');
            
            alert("Perimeter Restored. Redirecting...");
            
            // 2. FIXED: Redirect to index.html (Conscious State)
            window.location.href = './index.html#search';
        } else {
            alert("Verification failed. Perimeter remains locked.");
        }
    }
});

// Ensure your existing Debounce and DOMPurify logic remains below or above this!

 // three js video game mobile browser touch screen
 
