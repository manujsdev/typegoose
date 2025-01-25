"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[84],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>u});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},g=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,u=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?o.createElement(u,a(a({ref:t},g),{},{components:r})):o.createElement(u,a({ref:t},g))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(8168),n=(r(6540),r(5680));const i={id:"migrate-7",title:"Migrate to 7.0.0"},a=void 0,l={unversionedId:"guides/migration/migrate-7",id:"guides/migration/migrate-7",title:"Migrate to 7.0.0",description:"These are the changes made for 7.0.0 that are breaking or just important to know",source:"@site/../docs/guides/migration/migrate-7.md",sourceDirName:"guides/migration",slug:"/guides/migration/migrate-7",permalink:"/typegoose/docs/guides/migration/migrate-7",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/migration/migrate-7.md",tags:[],version:"current",frontMatter:{id:"migrate-7",title:"Migrate to 7.0.0"},sidebar:"guides",previous:{title:"Migrate to 8.0.0",permalink:"/typegoose/docs/guides/migration/migrate-8"},next:{title:"Migrate to 6.0.0",permalink:"/typegoose/docs/guides/migration/migrate-6"}},s={},p=[{value:"Requirements changed",id:"requirements-changed",level:2},{value:"Deprecation removals",id:"deprecation-removals",level:2},{value:"arrayProp options removed",id:"arrayprop-options-removed",level:3},{value:"Typegoose class got removed",id:"typegoose-class-got-removed",level:3},{value:"IC all remaining cache-maps got moved to reflection",id:"ic-all-remaining-cache-maps-got-moved-to-reflection",level:2},{value:"IC almost all &quot;if-throw&quot; blocks got replaced with &quot;assertion&quot; functions",id:"ic-almost-all-if-throw-blocks-got-replaced-with-assertion-functions",level:2},{value:"IC The Testing Framework for Typegoose changed to Jest",id:"ic-the-testing-framework-for-typegoose-changed-to-jest",level:2}],g={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,o.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"These are the changes made for 7.0.0 that are breaking or just important to know"),(0,n.yg)("admonition",{title:"Important, Read this first",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"This Guide is written for migration from version ",(0,n.yg)("inlineCode",{parentName:"p"},"6.5.0")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"7.0.0"),", for versions ",(0,n.yg)("inlineCode",{parentName:"p"},">7.0.0 <8.0.0"),", please consult the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/blob/master/CHANGELOG.md"},"CHANGELOG"))),(0,n.yg)("h2",{id:"requirements-changed"},"Requirements changed"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Nodejs 8 & 9 are now unsupported, lowest supported version is now ",(0,n.yg)("inlineCode",{parentName:"li"},"10.15")),(0,n.yg)("li",{parentName:"ul"},"Typescript ",(0,n.yg)("inlineCode",{parentName:"li"},"3.8")," is now required (",(0,n.yg)("inlineCode",{parentName:"li"},"4.9")," is recommended)"),(0,n.yg)("li",{parentName:"ul"},"Mongoose ",(0,n.yg)("inlineCode",{parentName:"li"},"5.9.10")," or higher is now required")),(0,n.yg)("h2",{id:"deprecation-removals"},"Deprecation removals"),(0,n.yg)("h3",{id:"arrayprop-options-removed"},"arrayProp options removed"),(0,n.yg)("p",null,"The following options got removed:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"itemsRef")," got replaced with just ",(0,n.yg)("inlineCode",{parentName:"li"},"ref")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"itemsRefPath")," got replaced with just ",(0,n.yg)("inlineCode",{parentName:"li"},"refPath")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"itemsRefType")," got replaced with just ",(0,n.yg)("inlineCode",{parentName:"li"},"refType"))),(0,n.yg)("h3",{id:"typegoose-class-got-removed"},"Typegoose class got removed"),(0,n.yg)("p",null,"In 6.0.0 it was announced that the ",(0,n.yg)("inlineCode",{parentName:"p"},"Typegoose")," class was useless and will be removed in a future version. Now, in 7.0.0, it was completely removed."),(0,n.yg)("h2",{id:"ic-all-remaining-cache-maps-got-moved-to-reflection"},"[IC]"," all remaining cache-maps got moved to reflection"),(0,n.yg)("p",null,"All possible cache-maps that were in ",(0,n.yg)("inlineCode",{parentName:"p"},"data.ts")," were refactored to be in the reflection of the class."),(0,n.yg)("h2",{id:"ic-almost-all-if-throw-blocks-got-replaced-with-assertion-functions"},"[IC]",' almost all "if-throw" blocks got replaced with "assertion" functions'),(0,n.yg)("p",null,"Typescript 3.7 introduced a new type-keyword ",(0,n.yg)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/#assertion-functions"},(0,n.yg)("inlineCode",{parentName:"a"},"asserts"))," and now almost every occurrence has been replaced with a custom assertion function."),(0,n.yg)("h2",{id:"ic-the-testing-framework-for-typegoose-changed-to-jest"},"[IC]"," The Testing Framework for Typegoose changed to Jest"),(0,n.yg)("p",null,"For Typegoose 7.0.0, the Testing Framework change from ",(0,n.yg)("inlineCode",{parentName:"p"},"mocha + chai")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"jest")),(0,n.yg)("hr",null),(0,n.yg)("sub",null,"*`IC` means `Internal Change`*"))}m.isMDXComponent=!0}}]);