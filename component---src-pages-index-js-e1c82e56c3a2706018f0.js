"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,A=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,n=new RegExp("^"+s.source),r=new RegExp(s.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),o=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),o=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?o(e):s(e);return e!==s(e)&&(e=((e,A,i)=>{let s=!1,n=!1,r=!1;for(let l=0;l<e.length;l++){const o=e[l];s&&t.test(o)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,r=n,n=!0,l++):n&&r&&a.test(o)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),r=n,n=!1,s=!0):(s=A(o)===o&&i(o)!==o,r=n,n=i(o)===o&&A(o)!==o)}return e})(e,s,o)),e=e.replace(n,""),e=i.preserveConsecutiveUppercase?((e,t)=>(A.lastIndex=0,e.replace(A,(e=>t(e)))))(e,s):s(e),i.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(r.lastIndex=0,l.lastIndex=0,e.replace(r,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{G:function(){return Y},L:function(){return m},M:function(){return j},P:function(){return B},_:function(){return r},a:function(){return n},b:function(){return d},c:function(){return o},g:function(){return g},h:function(){return l}});var A=a(7294),i=(a(3204),a(5697)),s=a.n(i);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var A in a)Object.prototype.hasOwnProperty.call(a,A)&&(e[A]=a[A])}return e},n.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,A,i={},s=Object.keys(e);for(A=0;A<s.length;A++)t.indexOf(a=s[A])>=0||(i[a]=e[a]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const o=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function c(e,t,a){const A={};let i="gatsby-image-wrapper";return"fixed"===a?(A.width=e,A.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:A}}function d(e,t,a,A,i){return void 0===i&&(i={}),n({},a,{loading:A,shouldLoad:e,"data-main-image":"",style:n({},i,{opacity:t?1:0})})}function g(e,t,a,A,i,s,r,l){const o={};s&&(o.backgroundColor=s,"fixed"===a?(o.width=A,o.height=i,o.backgroundColor=s,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),r&&(o.objectFit=r),l&&(o.objectPosition=l);const c=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return c}const u=["children"],p=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?A.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?A.createElement("div",{style:{maxWidth:a,display:"block"}},A.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=r(e,u);return A.createElement(A.Fragment,null,A.createElement(p,n({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:i,alt:s="",shouldLoad:l}=e,o=r(e,b);return A.createElement("img",n({},o,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,s=r(e,h);const l=s.sizes||(null==t?void 0:t.sizes),o=A.createElement(f,n({},s,t,{sizes:l,shouldLoad:i}));return a.length?A.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return A.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:l})})),o):o};var y;f.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},E.displayName="Picture",E.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],B=function(e){let{fallback:t}=e,a=r(e,w);return t?A.createElement(E,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):A.createElement("div",n({},a))};B.displayName="Placeholder",B.propTypes={fallback:i.string,sources:null==(y=E.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const j=function(e){return A.createElement(A.Fragment,null,A.createElement(E,n({},e)),A.createElement("noscript",null,A.createElement(E,n({},e,{shouldLoad:!0}))))};j.displayName="MainImage",j.propTypes=E.propTypes;const v=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],Q=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var A=arguments.length,i=new Array(A>3?A-3:0),n=3;n<A;n++)i[n-3]=arguments[n];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:s().object.isRequired,alt:S},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],k=new Set;let D,L;const R=function(e){let{as:t="div",image:i,style:s,backgroundColor:o,className:d,class:g,onStartLoad:u,onLoad:p,onError:m}=e,b=r(e,I);const{width:h,height:f,layout:E}=i,y=c(h,f,E),{style:w,className:B}=y,j=r(y,x),v=(0,A.useRef)(),N=(0,A.useMemo)((()=>JSON.stringify(i.images)),[i.images]);g&&(d=g);const Q=function(e,t,a){let A="";return"fullWidth"===e&&(A='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(A='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),A}(E,h,f);return(0,A.useEffect)((()=>{D||(D=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=v.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void k.add(N);if(L&&k.has(N))return;let t,A;return D.then((e=>{let{renderImageToString:a,swapPlaceholderImage:r}=e;v.current&&(v.current.innerHTML=a(n({isLoading:!0,isLoaded:k.has(N),image:i},b)),k.has(N)||(t=requestAnimationFrame((()=>{v.current&&(A=r(v.current,N,k,s,u,p,m))}))))})),()=>{t&&cancelAnimationFrame(t),A&&A()}}),[i]),(0,A.useLayoutEffect)((()=>{k.has(N)&&L&&(v.current.innerHTML=L(n({isLoading:k.has(N),isLoaded:k.has(N),image:i},b)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,A.createElement)(t,n({},j,{style:n({},w,s,{backgroundColor:o}),className:B+(d?" "+d:""),ref:v,dangerouslySetInnerHTML:{__html:Q},suppressHydrationWarning:!0}))},Y=(0,A.memo)((function(e){return e.image?(0,A.createElement)(R,e):null}));Y.propTypes=C,Y.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function T(e){return function(t){let{src:a,__imageData:i,__error:s}=t,l=r(t,M);return s&&console.warn(s),i?A.createElement(e,n({image:i},l)):(console.warn("Image not loaded",a),null)}}const O=T((function(e){let{as:t="div",className:a,class:i,style:s,image:l,loading:o="lazy",imgClassName:u,imgStyle:p,backgroundColor:b,objectFit:h,objectPosition:f}=e,E=r(e,v);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),p=n({objectFit:h,objectPosition:f,backgroundColor:b},p);const{width:y,height:w,layout:S,images:C,placeholder:I,backgroundColor:x}=l,k=c(y,w,S),{style:D,className:L}=k,R=r(k,N),Y={fallback:void 0,sources:[]};return C.fallback&&(Y.fallback=n({},C.fallback,{srcSet:C.fallback.srcSet?Q(C.fallback.srcSet):void 0})),C.sources&&(Y.sources=C.sources.map((e=>n({},e,{srcSet:Q(e.srcSet)})))),A.createElement(t,n({},R,{style:n({},D,s,{backgroundColor:b}),className:L+(a?" "+a:"")}),A.createElement(m,{layout:S,width:y,height:w},A.createElement(B,n({},g(I,!1,S,y,w,x,h,f))),A.createElement(j,n({"data-gatsby-image-ssr":"",className:u},E,d("eager"===o,!1,Y,o,p)))))})),G=function(e,t){for(var a=arguments.length,A=new Array(a>2?a-2:0),i=2;i<a;i++)A[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(A)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:S,width:G,height:G,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};O.displayName="StaticImage",O.propTypes=F;const U=T(Y);U.displayName="StaticImage",U.propTypes=F},791:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var A=a(7294),i=a(4160),s=a(8032);var n=()=>{const e=(0,i.K2)("213027756"),t=(0,s.c)(e.sun1.childImageSharp);return A.createElement(A.Fragment,null,A.createElement("div",{className:"helloImg"},A.createElement("h2",null," Sunset Images (Dynamic)")),A.createElement("div",null,A.createElement("div",{className:"image-container"},A.createElement(s.G,{image:t,alt:"sun1.jpg"})),A.createElement("div",{className:"image-container"})))};function r(){const e=(0,i.K2)("2244527904"),t=(0,s.c)(e.sun1.childImageSharp);return A.createElement(A.Fragment,null,A.createElement("div",{className:"container"},A.createElement("h1",null,"HELLO WORLD")),A.createElement("div",{className:"image-container"},A.createElement(s.G,{image:t,alt:"sun2.jpg"})),A.createElement(n,null))}},9187:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABjTkOIMJ//8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAEQMSIf/aAAgBAQABBQIaxsaUzCwgjIIU7//EABcRAQADAAAAAAAAAAAAAAAAAAABEhP/2gAIAQMBAT8BzlV//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAESE//aAAgBAgEBPwHWFn//xAAcEAABAwUAAAAAAAAAAAAAAAAAAQIhEBESMUH/2gAIAQEABj8ClyF8kIp02f/EABsQAAICAwEAAAAAAAAAAAAAAAABESFBUXGB/9oACAEBAAE/IVlQ9FaddNiQ7bUjWUIw/9oADAMBAAIAAwAAABDU/wD/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/EAy0cv/EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Qq9RD0//EABsQAAMAAwEBAAAAAAAAAAAAAAABESExYVFx/9oACAEBAAE/EF9gMkh5iN0pZ+mhpVxYhPiDtKSV/Uf/2Q=="},"images":{"fallback":{"src":"/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/d6c95/demo2.jpg","srcSet":"/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/c9998/demo2.jpg 100w,\\n/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/503f5/demo2.jpg 200w,\\n/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/d6c95/demo2.jpg 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/90ebf/demo2.webp 100w,\\n/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/59b5d/demo2.webp 200w,\\n/gatsby-plugin-images.github.io/static/39dc49b1dd5b230d1960c9178dfad403/697e6/demo2.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":250}')},4475:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAdsww3JGSvO1dmdX/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAECAxIRE//aAAgBAQABBQLhw4ekUK2DNodUGlRBGImmaZpn/8QAFhEBAQEAAAAAAAAAAAAAAAAAABMS/9oACAEDAQE/AcJqKv/EABcRAQEBAQAAAAAAAAAAAAAAAAASAVH/2gAIAQIBAT8BtaN6h//EABcQAAMBAAAAAAAAAAAAAAAAAAAQMTD/2gAIAQEABj8CdLh//8QAGRABAAMBAQAAAAAAAAAAAAAAAQAQESFh/9oACAEBAAE/IS+g1E4gZ6zBMZ2gsD//2gAMAwEAAgADAAAAEOj+8f/EABgRAAMBAQAAAAAAAAAAAAAAAAARUQFh/9oACAEDAQE/EGg0M5Gh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQIBAT8QjYL6f//EABwQAAICAgMAAAAAAAAAAAAAAAABETEhUUFhcf/aAAgBAQABPxDpK0POiCIvR3ltMc9SASRXDajjQ56RuGCxyWf/2Q=="},"images":{"fallback":{"src":"/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/5ffda/sun1.jpg","srcSet":"/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/3212f/sun1.jpg 100w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/291ee/sun1.jpg 200w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/5ffda/sun1.jpg 400w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/8f605/sun1.jpg 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/fd5fd/sun1.webp 100w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/436db/sun1.webp 200w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/48627/sun1.webp 400w,\\n/gatsby-plugin-images.github.io/static/1663f691b25b48e8e8f06bbd09a86b0c/4c685/sun1.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":560}')}}]);
//# sourceMappingURL=component---src-pages-index-js-e1c82e56c3a2706018f0.js.map