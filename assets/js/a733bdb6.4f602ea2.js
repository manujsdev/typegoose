"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[1007],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),u=r,y=l["".concat(c,".").concat(u)]||l[u]||g[u]||i;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(8168),r=(n(6540),n(5680));const i={id:"using-objectid-type",title:"Using ObjectId Type"},a=void 0,s={unversionedId:"guides/advanced/using-objectid-type",id:"guides/advanced/using-objectid-type",title:"Using ObjectId Type",description:"Using the type ObjectId can be done by defining it as follows:",source:"@site/../docs/guides/advanced/objectId.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/using-objectid-type",permalink:"/typegoose/docs/guides/advanced/using-objectid-type",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/objectId.md",tags:[],version:"current",frontMatter:{id:"using-objectid-type",title:"Using ObjectId Type"},sidebar:"guides",previous:{title:"Change _id Type",permalink:"/typegoose/docs/guides/advanced/change-id-type"},next:{title:"Non-Nested Discriminators",permalink:"/typegoose/docs/guides/advanced/non-nested-discriminators"}},c={},d=[],p={toc:d},l="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(l,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Using the type ",(0,r.yg)("inlineCode",{parentName:"p"},"ObjectId")," can be done by defining it as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import mongoose from 'mongoose';\nimport { prop } from '@typegoose/typegoose';\n\nclass FooModel {\n  @prop()\n  userId: mongoose.Types.ObjectId;\n}\n")),(0,r.yg)("p",null,"You need to refer to the full length type since defining it as ",(0,r.yg)("inlineCode",{parentName:"p"},"type ObjectId = mongoose.Types.ObjectId")," and referencing that will lead to it being an ",(0,r.yg)("inlineCode",{parentName:"p"},"Object")," at compile time, meaning Typegoose will translate the property type to ",(0,r.yg)("inlineCode",{parentName:"p"},"Mixed"),"."),(0,r.yg)("p",null,"In order to query this model later you should use the type ",(0,r.yg)("inlineCode",{parentName:"p"},"mongoose.Types.ObjectId"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const FooModel = getModelForClass(FooModel);\nFooModel.findOne({ userId: new mongoose.Types.ObjectId('5e997f95d6a35f3a0def3339') });\n")))}g.isMDXComponent=!0}}]);