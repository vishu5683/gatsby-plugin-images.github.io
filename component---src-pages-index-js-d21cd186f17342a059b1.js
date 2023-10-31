"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,A=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),r=new RegExp(s.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),o=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),o=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?o(e):s(e);return e!==s(e)&&(e=((e,A,n)=>{let s=!1,i=!1,r=!1;for(let l=0;l<e.length;l++){const o=e[l];s&&t.test(o)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,r=i,i=!0,l++):i&&r&&a.test(o)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),r=i,i=!1,s=!0):(s=A(o)===o&&n(o)!==o,r=i,i=n(o)===o&&A(o)!==o)}return e})(e,s,o)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(A.lastIndex=0,e.replace(A,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(r.lastIndex=0,l.lastIndex=0,e.replace(r,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{G:function(){return Y},L:function(){return m},M:function(){return j},P:function(){return B},S:function(){return _},_:function(){return r},a:function(){return i},b:function(){return d},c:function(){return o},g:function(){return g},h:function(){return l}});var A=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var A in a)Object.prototype.hasOwnProperty.call(a,A)&&(e[A]=a[A])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,A,n={},s=Object.keys(e);for(A=0;A<s.length;A++)t.indexOf(a=s[A])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const o=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function c(e,t,a){const A={};let n="gatsby-image-wrapper";return"fixed"===a?(A.width=e,A.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:A}}function d(e,t,a,A,n){return void 0===n&&(n={}),i({},a,{loading:A,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function g(e,t,a,A,n,s,r,l){const o={};s&&(o.backgroundColor=s,"fixed"===a?(o.width=A,o.height=n,o.backgroundColor=s,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),r&&(o.objectFit=r),l&&(o.objectPosition=l);const c=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return c}const u=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?A.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?A.createElement("div",{style:{maxWidth:a,display:"block"}},A.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=r(e,u);return A.createElement(A.Fragment,null,A.createElement(p,i({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,o=r(e,b);return A.createElement("img",i({},o,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=r(e,h);const l=s.sizes||(null==t?void 0:t.sizes),o=A.createElement(f,i({},s,t,{sizes:l,shouldLoad:n}));return a.length?A.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return A.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),o):o};var y;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},E.displayName="Picture",E.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],B=function(e){let{fallback:t}=e,a=r(e,w);return t?A.createElement(E,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):A.createElement("div",i({},a))};B.displayName="Placeholder",B.propTypes={fallback:n.string,sources:null==(y=E.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const j=function(e){return A.createElement(A.Fragment,null,A.createElement(E,i({},e)),A.createElement("noscript",null,A.createElement(E,i({},e,{shouldLoad:!0}))))};j.displayName="MainImage",j.propTypes=E.propTypes;const v=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],Q=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var A=arguments.length,n=new Array(A>3?A-3:0),i=3;i<A;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:s().object.isRequired,alt:S},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],k=new Set;let D,L;const R=function(e){let{as:t="div",image:n,style:s,backgroundColor:o,className:d,class:g,onStartLoad:u,onLoad:p,onError:m}=e,b=r(e,I);const{width:h,height:f,layout:E}=n,y=c(h,f,E),{style:w,className:B}=y,j=r(y,x),v=(0,A.useRef)(),N=(0,A.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(d=g);const Q=function(e,t,a){let A="";return"fullWidth"===e&&(A='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(A='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),A}(E,h,f);return(0,A.useEffect)((()=>{D||(D=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=v.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void k.add(N);if(L&&k.has(N))return;let t,A;return D.then((e=>{let{renderImageToString:a,swapPlaceholderImage:r}=e;v.current&&(v.current.innerHTML=a(i({isLoading:!0,isLoaded:k.has(N),image:n},b)),k.has(N)||(t=requestAnimationFrame((()=>{v.current&&(A=r(v.current,N,k,s,u,p,m))}))))})),()=>{t&&cancelAnimationFrame(t),A&&A()}}),[n]),(0,A.useLayoutEffect)((()=>{k.has(N)&&L&&(v.current.innerHTML=L(i({isLoading:k.has(N),isLoaded:k.has(N),image:n},b)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,A.createElement)(t,i({},j,{style:i({},w,s,{backgroundColor:o}),className:B+(d?" "+d:""),ref:v,dangerouslySetInnerHTML:{__html:Q},suppressHydrationWarning:!0}))},Y=(0,A.memo)((function(e){return e.image?(0,A.createElement)(R,e):null}));Y.propTypes=C,Y.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function T(e){return function(t){let{src:a,__imageData:n,__error:s}=t,l=r(t,M);return s&&console.warn(s),n?A.createElement(e,i({image:n},l)):(console.warn("Image not loaded",a),null)}}const O=T((function(e){let{as:t="div",className:a,class:n,style:s,image:l,loading:o="lazy",imgClassName:u,imgStyle:p,backgroundColor:b,objectFit:h,objectPosition:f}=e,E=r(e,v);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=i({objectFit:h,objectPosition:f,backgroundColor:b},p);const{width:y,height:w,layout:S,images:C,placeholder:I,backgroundColor:x}=l,k=c(y,w,S),{style:D,className:L}=k,R=r(k,N),Y={fallback:void 0,sources:[]};return C.fallback&&(Y.fallback=i({},C.fallback,{srcSet:C.fallback.srcSet?Q(C.fallback.srcSet):void 0})),C.sources&&(Y.sources=C.sources.map((e=>i({},e,{srcSet:Q(e.srcSet)})))),A.createElement(t,i({},R,{style:i({},D,s,{backgroundColor:b}),className:L+(a?" "+a:"")}),A.createElement(m,{layout:S,width:y,height:w},A.createElement(B,i({},g(I,!1,S,y,w,x,h,f))),A.createElement(j,i({"data-gatsby-image-ssr":"",className:u},E,d("eager"===o,!1,Y,o,p)))))})),G=function(e,t){for(var a=arguments.length,A=new Array(a>2?a-2:0),n=2;n<a;n++)A[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(A)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:S,width:G,height:G,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};O.displayName="StaticImage",O.propTypes=F;const _=T(Y);_.displayName="StaticImage",_.propTypes=F},791:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var A=a(7294),n=a(4160),s=a(8032);var i=()=>{const e=(0,n.K2)("2174223795");console.log(e);const t=(0,s.c)(e.sun1);return A.createElement("section",null,A.createElement("div",{className:"helloImg"},A.createElement("h2",null," Sunset Images (Dynamic)")),A.createElement("div",null,A.createElement("div",{className:"image-container"},A.createElement(s.G,{image:t,alt:"sun1.jpg"}))))};var r=()=>A.createElement(A.Fragment,null,A.createElement("div",{className:"helloImg"},A.createElement("h2",null," Sunset Image (Static Method)")),A.createElement("div",{className:"image-container"},A.createElement(s.S,{src:"./assets/sun1.jpg",alt:"pic12",width:400,placeholder:"blurred",__imageData:a(4475)}),A.createElement(s.S,{src:"./assets/demo2.jpg",alt:"pic2",width:400,placeholder:"blurred",__imageData:a(9187)})));function l(){const e=(0,n.K2)("2244527904"),t=(0,s.c)(e.sun1.childImageSharp);return A.createElement(A.Fragment,null,A.createElement("div",{className:"container"},A.createElement("h1",null,"HELLO WORLD")),A.createElement("div",{className:"image-container"},A.createElement(s.G,{image:t,alt:"sun2.jpg"})),A.createElement(i,null),A.createElement(r,null))}},9187:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABjTkOIMJ//8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAEQMSIf/aAAgBAQABBQIaxsaUzCwgjIIU7//EABcRAQADAAAAAAAAAAAAAAAAAAABEhP/2gAIAQMBAT8BzlV//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAESE//aAAgBAgEBPwHWFn//xAAcEAABAwUAAAAAAAAAAAAAAAAAAQIhEBESMUH/2gAIAQEABj8ClyF8kIp02f/EABsQAAICAwEAAAAAAAAAAAAAAAABESFBUXGB/9oACAEBAAE/IVlQ9FaddNiQ7bUjWUIw/9oADAMBAAIAAwAAABDU/wD/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/EAy0cv/EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Qq9RD0//EABsQAAMAAwEBAAAAAAAAAAAAAAABESExYVFx/9oACAEBAAE/EF9gMkh5iN0pZ+mhpVxYhPiDtKSV/Uf/2Q=="},"backgroundColor":"transparent","images":{"fallback":{"src":"/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/d675e/demo2.jpg","srcSet":"/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/d675e/demo2.jpg 400w,\\n/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/b3a5b/demo2.jpg 728w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/522e3/demo2.webp 400w,\\n/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/0ad5b/demo2.webp 728w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":250}')},4475:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAdsww3JGSvO1dmdX/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAECAxIRE//aAAgBAQABBQLhw4ekUK2DNodUGlRBGImmaZpn/8QAFhEBAQEAAAAAAAAAAAAAAAAAABMS/9oACAEDAQE/AcJqKv/EABcRAQEBAQAAAAAAAAAAAAAAAAASAVH/2gAIAQIBAT8BtaN6h//EABcQAAMBAAAAAAAAAAAAAAAAAAAQMTD/2gAIAQEABj8CdLh//8QAGRABAAMBAQAAAAAAAAAAAAAAAQAQESFh/9oACAEBAAE/IS+g1E4gZ6zBMZ2gsD//2gAMAwEAAgADAAAAEOj+8f/EABgRAAMBAQAAAAAAAAAAAAAAAAARUQFh/9oACAEDAQE/EGg0M5Gh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQIBAT8QjYL6f//EABwQAAICAgMAAAAAAAAAAAAAAAABETEhUUFhcf/aAAgBAQABPxDpK0POiCIvR3ltMc9SASRXDajjQ56RuGCxyWf/2Q=="},"backgroundColor":"transparent","images":{"fallback":{"src":"/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/63455/sun1.jpg","srcSet":"/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/63455/sun1.jpg 400w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/97794/sun1.jpg 750w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/df520/sun1.jpg 1080w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/e09f2/sun1.jpg 1366w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/c0e42/sun1.jpg 1920w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/a26cf/sun1.webp 400w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/70b34/sun1.webp 750w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/beddb/sun1.webp 1080w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/86d57/sun1.webp 1366w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/393f0/sun1.webp 1920w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":560}')}}]);
//# sourceMappingURL=component---src-pages-index-js-d21cd186f17342a059b1.js.map