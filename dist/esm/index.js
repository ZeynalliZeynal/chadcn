import{jsxs as e,jsx as r}from"react/jsx-runtime";import t from"react";import{Link as a}from"react-router-dom";import o from"clsx";"function"==typeof SuppressedError&&SuppressedError;const n=t.forwardRef(((n,i)=>{var{children:d,size:l="md",full:s=!1,href:u,prefix:b=null,suffix:g=null,primary:c,onClick:p,disabled:f,type:h="button",className:m}=n,y=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]])}return t}(n,["children","size","full","href","prefix","suffix","primary","onClick","disabled","type","className"]);const[x,v]=t.useState(!1),O=t.useRef(null);t.useImperativeHandle(i,(()=>O.current));const j=o("flex items-center justify-center transition duration-200 font-medium border select-none rounded-md",{"text-gray-900 border bg-background-100 hover:text-foreground hover:bg-gray-alpha-200":c,"text-gray-500 border-gray-200 bg-gray-1000 hover:text-background-100 hover:bg-button-invert-hover":!c,"text-xs h-8 px-1.5":"sm"===l,"px-2.5 h-10 text-sm":"md"===l,"px-3.5 h-12":"lg"===l,"w-full":s,"w-fit":!s,"data-[highlighted]:text-foreground data-[highlighted]:bg-gray-alpha-200":c&&x,"disabled:text-gray-700 disabled:bg-gray-100 disabled:border-gray-400":c&&f,"data-[highlighted]:text-background-100 data-[highlighted]:bg-button-invert-hover":!c&&x,"disabled:bg-button-invert-disabled disabled:text-gray-700 disabled:border-gray-400":!c&&f},m),k={"data-testid":"button","data-highlighted":!(f||!x)||null,className:j,onMouseEnter:()=>!f&&v(!0),onMouseLeave:()=>!f&&v(!1)};return u?e(a,Object.assign({ref:O,to:u},k,y,{children:[b," ",r("span",{className:"px-1.5",children:d})," ",g]})):e("button",Object.assign({ref:O,type:h,onClick:p,disabled:f},k,y,{children:[b," ",r("span",{className:"px-1.5",children:d})," ",g]}))}));n.displayName="Button";export{n as Button};
//# sourceMappingURL=index.js.map
