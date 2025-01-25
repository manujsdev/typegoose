"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[963],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var o=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),y=a,u=c["".concat(l,".").concat(y)]||c[y]||g[y]||i;return t?o.createElement(u,r(r({ref:n},d),{},{components:t})):o.createElement(u,r({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=t(8168),a=(t(6540),t(5680));const i={id:"known-issues",title:"Known Issues"},r=void 0,s={unversionedId:"guides/known-issues",id:"guides/known-issues",title:"Known Issues",description:"Known Issues",source:"@site/../docs/guides/known-issues.md",sourceDirName:"guides",slug:"/guides/known-issues",permalink:"/typegoose/docs/guides/known-issues",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/known-issues.md",tags:[],version:"current",frontMatter:{id:"known-issues",title:"Known Issues"},sidebar:"guides",previous:{title:"FAQ",permalink:"/typegoose/docs/guides/faq"},next:{title:"Mongoose Compatibility",permalink:"/typegoose/docs/guides/mongoose-compatibility"}},l={},p=[{value:"Known Issues",id:"known-issues",level:2},{value:"transpile-only",id:"transpile-only",level:3},{value:"tsconfig-paths",id:"tsconfig-paths",level:3},{value:"Self-Containing classes",id:"self-containing-classes",level:3},{value:"Babel",id:"babel",level:3},{value:"prop on get &amp; set",id:"prop-on-get--set",level:3},{value:"Webpack",id:"webpack",level:3},{value:"<code>@types/node</code> breaking change",id:"typesnode-breaking-change",level:3},{value:"NodeJS 17.5 Breaking Change",id:"nodejs-175-breaking-change",level:3},{value:"<code>DocumentType</code> is not generic",id:"documenttype-is-not-generic",level:3},{value:"Typescript 5.0 ES Decorators",id:"typescript-50-es-decorators",level:3},{value:"Deferred function with explicit function",id:"deferred-function-with-explicit-function",level:3}],d={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"known-issues"},"Known Issues"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/Automattic/mongoose/issues?utf8=%E2%9C%93&q=is%3Aissue+involves%3Ahasezoey"},"Please look here first, to decide if it is a Typegoose or a Mongoose issue.")),(0,a.yg)("h3",{id:"transpile-only"},"transpile-only"),(0,a.yg)("p",null,"It is not recommended to run compilers with option ",(0,a.yg)("inlineCode",{parentName:"p"},"transpile-only")," (like ",(0,a.yg)("inlineCode",{parentName:"p"},"tsc --transpile-only")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"ts-node --transpile-only"),"), because this will act like not having ",(0,a.yg)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," enabled, see ",(0,a.yg)("a",{parentName:"p",href:"/typegoose/docs/guides/use-without-emitDecoratorMetadata"},'Use Without "emitDecoratorMetadata"'),"."),(0,a.yg)("h3",{id:"tsconfig-paths"},"tsconfig-paths"),(0,a.yg)("p",null,"TypeScript provides the option to alias paths (with ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig-paths"),") but is somehow incompatible with Typegoose, ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/szokodiakos/typegoose/issues/392"},"more info in here"),"."),(0,a.yg)("h3",{id:"self-containing-classes"},"Self-Containing classes"),(0,a.yg)("p",null,"It is currently not (and probably never) possible to use a self-containing class:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'class SomeClass {\n  @prop()\n  public ref: SomeClass; // ERROR "Maximum Class Stack Size Exceeded"\n}\n')),(0,a.yg)("p",null,"Though Deferred Reference will still work:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"class SomeClass {\n  @prop({ ref: () => SomeClass }) // or hardcode the string\n  public ref: Ref<SomeClass>;\n}\n")),(0,a.yg)("h3",{id:"babel"},"Babel"),(0,a.yg)("span",{class:"badge badge--warning"},"This Section may be outdated"),(0,a.yg)("p",null,"Using babel as a TypeScript compiler is known to cause problems (like incorrect types) (see ",(0,a.yg)("a",{parentName:"p",href:"#transpile-only"},(0,a.yg)("inlineCode",{parentName:"a"},"transpile-only")),"), it is recommended you use ",(0,a.yg)("inlineCode",{parentName:"p"},"tsc"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"ts-node")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"ts-jest")," directly."),(0,a.yg)("p",null,"If Babel is still needed, then read ",(0,a.yg)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-typescript"},"Babel TypeScript preset")," and install the following plugins:  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"To reproduce the typescript decorators (",(0,a.yg)("inlineCode",{parentName:"li"},"experimentalDecorators"),"), use ",(0,a.yg)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators"},(0,a.yg)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-decorators"))),(0,a.yg)("li",{parentName:"ul"},"To reproduce the decorator metadata output (",(0,a.yg)("inlineCode",{parentName:"li"},"emitDecoratorMetadata"),"), use ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/leonardfactory/babel-plugin-transform-typescript-metadata"},(0,a.yg)("inlineCode",{parentName:"a"},"babel-plugin-transform-typescript-metadata"))),(0,a.yg)("li",{parentName:"ul"},"Plugin ",(0,a.yg)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-class-properties"},(0,a.yg)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-class-properties"))," is required to solve the error ",(0,a.yg)("inlineCode",{parentName:"li"},"Syntax error, Definitely assigned fields cannot be initialized here, but only in the constructor")," which would come with using decorators (legacy / stage 1) nowdays")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," is not strictly needed, see ",(0,a.yg)("a",{parentName:"p",href:"/typegoose/docs/guides/use-without-emitDecoratorMetadata"},"Use Without ",(0,a.yg)("inlineCode",{parentName:"a"},"emitDecoratorMetadata")),".")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  plugins: [\n    ['@babel/plugin-proposal-decorators', { legacy: true }],\n    'babel-plugin-transform-typescript-metadata',\n    ['@babel/plugin-proposal-class-properties', { loose: true }],\n  ]\n}\n")),(0,a.yg)("h3",{id:"prop-on-get--set"},"prop on get & set"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"@prop")," cannot be applied to ",(0,a.yg)("inlineCode",{parentName:"p"},"get")," & ",(0,a.yg)("inlineCode",{parentName:"p"},"set")," (ES6 class keywords), because virtuals do not accept options & ",(0,a.yg)("a",{parentName:"p",href:"https://mongoosejs.com/docs/advanced_schemas.html#creating-from-es6-classes-using-loadclass"},(0,a.yg)("inlineCode",{parentName:"a"},"schema.loadClass"))," wouldn't load these."),(0,a.yg)("h3",{id:"webpack"},"Webpack"),(0,a.yg)("p",null,"Webpack's ",(0,a.yg)("inlineCode",{parentName:"p"},"minimize")," cannot be used with typegoose, because typegoose relies heavily on reflection and property names."),(0,a.yg)("p",null,"In webpack, it can be disabled when adding the following to the webpack config:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  optimization: {\n    minimize: false\n  }\n}\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"There are some workarounds for some minification problems, like the class name (which would be the model name) can be changed with ",(0,a.yg)("a",{parentName:"p",href:"../api/decorators/model-options#customname"},(0,a.yg)("inlineCode",{parentName:"a"},"customName")),".")),(0,a.yg)("h3",{id:"typesnode-breaking-change"},(0,a.yg)("inlineCode",{parentName:"h3"},"@types/node")," breaking change"),(0,a.yg)("p",null,"Early January 2022, there was a update in ",(0,a.yg)("inlineCode",{parentName:"p"},"@types/node"),", which was actually a breaking change which causes typescript compile errors to show up (like for ",(0,a.yg)("inlineCode",{parentName:"p"},"GridFSBucketWriteStream")," from mongodb, even though unused)."),(0,a.yg)("p",null,(0,a.yg)("del",{parentName:"p"},"The current only workaround is to pin the versions of ",(0,a.yg)("inlineCode",{parentName:"del"},"@types/node")," used to ones before the update, which in the case of typegoose is ",(0,a.yg)("inlineCode",{parentName:"del"},"@types/node@12.20.39"),"."),(0,a.yg)("br",{parentName:"p"}),"\n","As of 02-02-2022 (d/m/y), mongoose has released ",(0,a.yg)("inlineCode",{parentName:"p"},"6.2.0")," which upgraded ",(0,a.yg)("inlineCode",{parentName:"p"},"mongodb")," to a version that has updated types, and typegoose ",(0,a.yg)("inlineCode",{parentName:"p"},"9.6.0")," uses this mongoose version."),(0,a.yg)("h3",{id:"nodejs-175-breaking-change"},"NodeJS 17.5 Breaking Change"),(0,a.yg)("p",null,"NodeJS 17.5 was released, which included a breaking change for mongoose, which resulted in a error (/ crash of the application)."),(0,a.yg)("p",null,"Mongoose has released version ",(0,a.yg)("inlineCode",{parentName:"p"},"6.2.2")," on 16.2.22 (d/m/y) which fixes the issue on mongoose's side.",(0,a.yg)("br",{parentName:"p"}),"\n","Since 24.2.22 (d/m/y) NodeJS 17.6 is released which should include the fix."),(0,a.yg)("h3",{id:"documenttype-is-not-generic"},(0,a.yg)("inlineCode",{parentName:"h3"},"DocumentType")," is not generic"),(0,a.yg)("p",null,"Typescript has its own ",(0,a.yg)("inlineCode",{parentName:"p"},"DocumentType")," when having ",(0,a.yg)("inlineCode",{parentName:"p"},"DOM")," enabled in ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig")," option ",(0,a.yg)("inlineCode",{parentName:"p"},"lib"),", in any case the correct ",(0,a.yg)("inlineCode",{parentName:"p"},"DocumentType")," has to be imported directly from typegoose.",(0,a.yg)("br",{parentName:"p"}),"\n","It is also recommended to remove the option ",(0,a.yg)("inlineCode",{parentName:"p"},"DOM")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig")," option ",(0,a.yg)("inlineCode",{parentName:"p"},"lib")," when possible."),(0,a.yg)("h3",{id:"typescript-50-es-decorators"},"Typescript 5.0 ES Decorators"),(0,a.yg)("p",null,"Typescript 5.0 has support for ES Decorators (Stage 3) so ",(0,a.yg)("inlineCode",{parentName:"p"},"@decorator")," is now valid syntax whether ",(0,a.yg)("inlineCode",{parentName:"p"},"experimentalDecorators")," is ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," (Stage 2), but the implementations are not type and runtime compatible and would require special handling, also the new ES Decorators (Stage 3) ",(0,a.yg)("em",{parentName:"p"},"dont support metadata"),", which typegoose heavily relies on. (and no ",(0,a.yg)("a",{parentName:"p",href:"/typegoose/docs/guides/use-without-emitDecoratorMetadata"},"use without ",(0,a.yg)("inlineCode",{parentName:"a"},"emitDecoratorMetadata"))," cannot be used as a workaround)."),(0,a.yg)("p",null,"TL;DR: typegoose currently does not support ES Decorators (Stage 3) and ",(0,a.yg)("inlineCode",{parentName:"p"},"experimentalDecorators: true")," has to be enabled."),(0,a.yg)("p",null,"Example Error: ",(0,a.yg)("inlineCode",{parentName:"p"},"Unable to resolve signature of property decorator when called as an expression. Argument of type 'undefined' is not assignable to parameter of type 'Object'.ts(1240)")),(0,a.yg)("h3",{id:"deferred-function-with-explicit-function"},"Deferred function with explicit function"),(0,a.yg)("p",null,"When deferred functions are using with explicit functions, then the expected resulting type is not actually returned."),(0,a.yg)("p",null,"Example of a deferred function: ",(0,a.yg)("inlineCode",{parentName:"p"},"type: () => Something"),(0,a.yg)("br",{parentName:"p"}),"\n","Example of a explicit function: ",(0,a.yg)("inlineCode",{parentName:"p"},"type: function() { return Something; }")),(0,a.yg)("p",null,"Explicit functions can implicitly occur if the ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"target")," is not set to at least ",(0,a.yg)("inlineCode",{parentName:"p"},"es6"),"."),(0,a.yg)("p",null,"The reason currently is that there is not a good way to differentiate between classes\xb9, functions like ",(0,a.yg)("inlineCode",{parentName:"p"},"String"),"\xb2, and other function like mongoose's types\xb3 which are callable without ",(0,a.yg)("inlineCode",{parentName:"p"},"new")," (could likely be worked around), but it is not worth the performance to check for all of this and likely also does not cover all the bases."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\xb9: classes could be differentiated with ",(0,a.yg)("inlineCode",{parentName:"li"},"/^class\\s/.test(Function.prototype.toString.call(obj))")),(0,a.yg)("li",{parentName:"ul"},"\xb2: native types could be differentiated with ",(0,a.yg)("inlineCode",{parentName:"li"},"/\\[native code\\]/.test(Function.prototype.toString.call(obj))"),", but what about mocked or proxied types?"),(0,a.yg)("li",{parentName:"ul"},"\xb3: could likely be differenitated by matching references & names against ",(0,a.yg)("inlineCode",{parentName:"li"},"mongoose.Types.*")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"mongoose.Schema.Types.*"))))}g.isMDXComponent=!0}}]);