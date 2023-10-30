"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,A=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,s=new RegExp("^"+n.source),i=new RegExp(n.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),o=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),o=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?o(e):n(e);return e!==n(e)&&(e=((e,A,r)=>{let n=!1,s=!1,i=!1;for(let l=0;l<e.length;l++){const o=e[l];n&&t.test(o)?(e=e.slice(0,l)+"-"+e.slice(l),n=!1,i=s,s=!0,l++):s&&i&&a.test(o)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=s,s=!1,n=!0):(n=A(o)===o&&r(o)!==o,i=s,s=r(o)===o&&A(o)!==o)}return e})(e,n,o)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(A.lastIndex=0,e.replace(A,(e=>t(e)))))(e,n):n(e),r.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{G:function(){return Y},L:function(){return m},M:function(){return j},P:function(){return B},S:function(){return _},_:function(){return i},a:function(){return s},b:function(){return d},c:function(){return o},g:function(){return u},h:function(){return l}});var A=a(7294),r=(a(3204),a(5697)),n=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var A in a)Object.prototype.hasOwnProperty.call(a,A)&&(e[A]=a[A])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,A,r={},n=Object.keys(e);for(A=0;A<n.length;A++)t.indexOf(a=n[A])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const o=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function c(e,t,a){const A={};let r="gatsby-image-wrapper";return"fixed"===a?(A.width=e,A.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:A}}function d(e,t,a,A,r){return void 0===r&&(r={}),s({},a,{loading:A,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function u(e,t,a,A,r,n,i,l){const o={};n&&(o.backgroundColor=n,"fixed"===a?(o.width=A,o.height=r,o.backgroundColor=n,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),i&&(o.objectFit=i),l&&(o.objectPosition=l);const c=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return c}const g=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?A.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?A.createElement("div",{style:{maxWidth:a,display:"block"}},A.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=i(e,g);return A.createElement(A.Fragment,null,A.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:r,alt:n="",shouldLoad:l}=e,o=i(e,h);return A.createElement("img",s({},o,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,n=i(e,b);const l=n.sizes||(null==t?void 0:t.sizes),o=A.createElement(f,s({},n,t,{sizes:l,shouldLoad:r}));return a.length?A.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return A.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),o):o};var w;f.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const y=["fallback"],B=function(e){let{fallback:t}=e,a=i(e,y);return t?A.createElement(E,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):A.createElement("div",s({},a))};B.displayName="Placeholder",B.propTypes={fallback:r.string,sources:null==(w=E.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const j=function(e){return A.createElement(A.Fragment,null,A.createElement(E,s({},e)),A.createElement("noscript",null,A.createElement(E,s({},e,{shouldLoad:!0}))))};j.displayName="MainImage",j.propTypes=E.propTypes;const v=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),Q=function(e,t,a){for(var A=arguments.length,r=new Array(A>3?A-3:0),s=3;s<A;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:n().object.isRequired,alt:Q},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],k=new Set;let D,L;const R=function(e){let{as:t="div",image:r,style:n,backgroundColor:o,className:d,class:u,onStartLoad:g,onLoad:p,onError:m}=e,h=i(e,C);const{width:b,height:f,layout:E}=r,w=c(b,f,E),{style:y,className:B}=w,j=i(w,x),v=(0,A.useRef)(),N=(0,A.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(d=u);const S=function(e,t,a){let A="";return"fullWidth"===e&&(A='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(A='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),A}(E,b,f);return(0,A.useEffect)((()=>{D||(D=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=v.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void k.add(N);if(L&&k.has(N))return;let t,A;return D.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;v.current&&(v.current.innerHTML=a(s({isLoading:!0,isLoaded:k.has(N),image:r},h)),k.has(N)||(t=requestAnimationFrame((()=>{v.current&&(A=i(v.current,N,k,n,g,p,m))}))))})),()=>{t&&cancelAnimationFrame(t),A&&A()}}),[r]),(0,A.useLayoutEffect)((()=>{k.has(N)&&L&&(v.current.innerHTML=L(s({isLoading:k.has(N),isLoaded:k.has(N),image:r},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,A.createElement)(t,s({},j,{style:s({},y,n,{backgroundColor:o}),className:B+(d?" "+d:""),ref:v,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},Y=(0,A.memo)((function(e){return e.image?(0,A.createElement)(R,e):null}));Y.propTypes=I,Y.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function T(e){return function(t){let{src:a,__imageData:r,__error:n}=t,l=i(t,M);return n&&console.warn(n),r?A.createElement(e,s({image:r},l)):(console.warn("Image not loaded",a),null)}}const O=T((function(e){let{as:t="div",className:a,class:r,style:n,image:l,loading:o="lazy",imgClassName:g,imgStyle:p,backgroundColor:h,objectFit:b,objectPosition:f}=e,E=i(e,v);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=s({objectFit:b,objectPosition:f,backgroundColor:h},p);const{width:w,height:y,layout:Q,images:I,placeholder:C,backgroundColor:x}=l,k=c(w,y,Q),{style:D,className:L}=k,R=i(k,N),Y={fallback:void 0,sources:[]};return I.fallback&&(Y.fallback=s({},I.fallback,{srcSet:I.fallback.srcSet?S(I.fallback.srcSet):void 0})),I.sources&&(Y.sources=I.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),A.createElement(t,s({},R,{style:s({},D,n,{backgroundColor:h}),className:L+(a?" "+a:"")}),A.createElement(m,{layout:Q,width:w,height:y},A.createElement(B,s({},u(C,!1,Q,w,y,x,b,f))),A.createElement(j,s({"data-gatsby-image-ssr":"",className:g},E,d("eager"===o,!1,Y,o,p)))))})),G=function(e,t){for(var a=arguments.length,A=new Array(a>2?a-2:0),r=2;r<a;r++)A[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(A)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),F={src:n().string.isRequired,alt:Q,width:G,height:G,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};O.displayName="StaticImage",O.propTypes=F;const _=T(Y);_.displayName="StaticImage",_.propTypes=F},791:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var A=a(7294),r=a(4160),n=a(8032);var s=()=>{const e=(0,r.K2)("3165310569"),t=(0,n.c)(e.sun1.childImageSharp),a=(0,n.c)(e.sun2.childImageSharp);return A.createElement(A.Fragment,null,A.createElement("div",{className:"helloImg"},A.createElement("h2",null," Sunset Images (Dynamic)")),A.createElement("div",null,A.createElement("div",{className:"image-container"},A.createElement(n.G,{image:t,alt:"sun1.jpg"})),A.createElement("div",{className:"image-container"},A.createElement(n.G,{image:a,alt:"demo2.jpg"}))))};var i=()=>A.createElement(A.Fragment,null,A.createElement("div",{className:"helloImg"},A.createElement("h2",null," Sunset Image (Static Method)")),A.createElement("div",{className:"image-container"},A.createElement(n.S,{src:"./assets/sun1.jpg",alt:"pic12",width:400,placeholder:"blurred",__imageData:a(4475)}),A.createElement(n.S,{src:"./assets/demo2.jpg",alt:"pic2",width:400,placeholder:"blurred",__imageData:a(9187)})));function l(){return A.createElement(A.Fragment,null,A.createElement("div",{className:"container"},A.createElement("h1",null,"HELLO WORLD")),A.createElement(s,null),A.createElement(i,null))}},9187:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABjTkOIMJ//8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAEQMSIf/aAAgBAQABBQIaxsaUzCwgjIIU7//EABcRAQADAAAAAAAAAAAAAAAAAAABEhP/2gAIAQMBAT8BzlV//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAESE//aAAgBAgEBPwHWFn//xAAcEAABAwUAAAAAAAAAAAAAAAAAAQIhEBESMUH/2gAIAQEABj8ClyF8kIp02f/EABsQAAICAwEAAAAAAAAAAAAAAAABESFBUXGB/9oACAEBAAE/IVlQ9FaddNiQ7bUjWUIw/9oADAMBAAIAAwAAABDU/wD/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/EAy0cv/EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Qq9RD0//EABsQAAMAAwEBAAAAAAAAAAAAAAABESExYVFx/9oACAEBAAE/EF9gMkh5iN0pZ+mhpVxYhPiDtKSV/Uf/2Q=="},"images":{"fallback":{"src":"/static/39dc49b1dd5b230d1960c9178dfad403/d6c95/demo2.jpg","srcSet":"/static/39dc49b1dd5b230d1960c9178dfad403/c9998/demo2.jpg 100w,\\n/static/39dc49b1dd5b230d1960c9178dfad403/503f5/demo2.jpg 200w,\\n/static/39dc49b1dd5b230d1960c9178dfad403/d6c95/demo2.jpg 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/39dc49b1dd5b230d1960c9178dfad403/90ebf/demo2.webp 100w,\\n/static/39dc49b1dd5b230d1960c9178dfad403/59b5d/demo2.webp 200w,\\n/static/39dc49b1dd5b230d1960c9178dfad403/697e6/demo2.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":250}')},4475:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAdsww3JGSvO1dmdX/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAECAxIRE//aAAgBAQABBQLhw4ekUK2DNodUGlRBGImmaZpn/8QAFhEBAQEAAAAAAAAAAAAAAAAAABMS/9oACAEDAQE/AcJqKv/EABcRAQEBAQAAAAAAAAAAAAAAAAASAVH/2gAIAQIBAT8BtaN6h//EABcQAAMBAAAAAAAAAAAAAAAAAAAQMTD/2gAIAQEABj8CdLh//8QAGRABAAMBAQAAAAAAAAAAAAAAAQAQESFh/9oACAEBAAE/IS+g1E4gZ6zBMZ2gsD//2gAMAwEAAgADAAAAEOj+8f/EABgRAAMBAQAAAAAAAAAAAAAAAAARUQFh/9oACAEDAQE/EGg0M5Gh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQIBAT8QjYL6f//EABwQAAICAgMAAAAAAAAAAAAAAAABETEhUUFhcf/aAAgBAQABPxDpK0POiCIvR3ltMc9SASRXDajjQ56RuGCxyWf/2Q=="},"images":{"fallback":{"src":"/static/1663f691b25b48e8e8f06bbd09a86b0c/5ffda/sun1.jpg","srcSet":"/static/1663f691b25b48e8e8f06bbd09a86b0c/3212f/sun1.jpg 100w,\\n/static/1663f691b25b48e8e8f06bbd09a86b0c/291ee/sun1.jpg 200w,\\n/static/1663f691b25b48e8e8f06bbd09a86b0c/5ffda/sun1.jpg 400w,\\n/static/1663f691b25b48e8e8f06bbd09a86b0c/8f605/sun1.jpg 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/1663f691b25b48e8e8f06bbd09a86b0c/fd5fd/sun1.webp 100w,\\n/static/1663f691b25b48e8e8f06bbd09a86b0c/436db/sun1.webp 200w,\\n/static/1663f691b25b48e8e8f06bbd09a86b0c/48627/sun1.webp 400w,\\n/static/1663f691b25b48e8e8f06bbd09a86b0c/4c685/sun1.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":560}')}}]);
//# sourceMappingURL=component---src-pages-index-js-616521ba5a1d5499d146.js.map