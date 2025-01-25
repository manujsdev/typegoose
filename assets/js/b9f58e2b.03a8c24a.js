"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[3074],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>c});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(n),m=r,c=g["".concat(s,".").concat(m)]||g[m]||y[m]||o;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(8168),r=(n(6540),n(5680));const o={id:"get-discriminator-model-for-class",title:"getDiscriminatorModelForClass"},i=void 0,l={unversionedId:"api/functions/get-discriminator-model-for-class",id:"api/functions/get-discriminator-model-for-class",title:"getDiscriminatorModelForClass",description:"Overload 1",source:"@site/../docs/api/functions/getDiscriminatorModelForClass.md",sourceDirName:"api/functions",slug:"/api/functions/get-discriminator-model-for-class",permalink:"/typegoose/docs/api/functions/get-discriminator-model-for-class",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/getDiscriminatorModelForClass.md",tags:[],version:"current",frontMatter:{id:"get-discriminator-model-for-class",title:"getDiscriminatorModelForClass"},sidebar:"docs",previous:{title:"buildSchema",permalink:"/typegoose/docs/api/functions/build-schema"},next:{title:"addModelToTypegoose",permalink:"/typegoose/docs/api/functions/add-model-to-typegoose"}},s={},d=[{value:"Overload 1",id:"overload-1",level:3},{value:"Overload 2",id:"overload-2",level:3},{value:"Overload 3",id:"overload-3",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:2},{value:"Notes",id:"notes",level:2}],p={toc:d},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"overload-1"},"Overload 1"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Typings:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"function getDiscriminatorModelForClass<U extends AnyParamConstructor<any>, QueryHelpers = BeAnObject>(\n  from: mongoose.Model<any, any>,\n  cl: U,\n  options?: IModelOptions\n): ReturnModelType<U, QueryHelpers>;\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"from")," ",(0,r.yg)("span",{class:"badge badge--secondary"},"Required")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"mongoose.Model")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The Model to register a discriminator on")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"cl")," ",(0,r.yg)("span",{class:"badge badge--secondary"},"Required")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"U")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The Class to build into a Model")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"IModelOptions")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Overwrite some Model options, only property ",(0,r.yg)("inlineCode",{parentName:"td"},"schemaOptions")," is merged with the existing options")))),(0,r.yg)("h3",{id:"overload-2"},"Overload 2"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Typings:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"function getDiscriminatorModelForClass<U extends AnyParamConstructor<any>, QueryHelpers = BeAnObject>(\n  from: mongoose.Model<any, any>,\n  cl: U,\n  value?: string\n): ReturnModelType<U, QueryHelpers>;\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"from")," ",(0,r.yg)("span",{class:"badge badge--secondary"},"Required")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"mongoose.Model")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The Model to register a discriminator on")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"cl")," ",(0,r.yg)("span",{class:"badge badge--secondary"},"Required")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"U")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The Class to build into a Model")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"value")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"IModelOptions")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Overwrite the discrimiantor value to register by")))),(0,r.yg)("h3",{id:"overload-3"},"Overload 3"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Typings:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"function getDiscriminatorModelForClass<U extends AnyParamConstructor<any>, QueryHelpers = BeAnObject>(\n  from: mongoose.Model<any, any>,\n  cl: U,\n  value?: string,\n  options?: IModelOptions\n): ReturnModelType<U, QueryHelpers>;\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"from")," ",(0,r.yg)("span",{class:"badge badge--secondary"},"Required")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"mongoose.Model")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The Model to register a discriminator on")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"cl")," ",(0,r.yg)("span",{class:"badge badge--secondary"},"Required")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"U")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The Class to build into a Model")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"value")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"IModelOptions")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Overwrite the discrimiantor value to register by")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"IModelOptions")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Overwrite some Model options, only property ",(0,r.yg)("inlineCode",{parentName:"td"},"schemaOptions")," is merged with the existing options")))),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"getDiscriminatorModelForClass")," is used to compile a given Class (",(0,r.yg)("inlineCode",{parentName:"p"},"cl"),") into a Model and register it as a discriminator on a given Model (",(0,r.yg)("inlineCode",{parentName:"p"},"from"),")."),(0,r.yg)("p",null,"Option ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," is to overwrite the key the class is registered on as a discriminator, by default it is the generated model name, but can be overwritten with any string, recommended is to use a ",(0,r.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/enums.html#string-enums"},"string-",(0,r.yg)("inlineCode",{parentName:"a"},"enum"))," to keep track of names."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Note that ",(0,r.yg)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/model-options#existingconnection"},(0,r.yg)("inlineCode",{parentName:"a"},"existingConnection"))," and ",(0,r.yg)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/model-options#existingmongoose"},(0,r.yg)("inlineCode",{parentName:"a"},"existingMongoose"))," will not be used and instead will be registered on the ",(0,r.yg)("inlineCode",{parentName:"p"},"from")," model's settings.",(0,r.yg)("br",{parentName:"p"}),"\n","See ",(0,r.yg)("a",{parentName:"p",href:"/typegoose/docs/guides/error-warning-details#property-was-defined-differently-on-base-and-discriminator-w002"},(0,r.yg)("inlineCode",{parentName:"a"},"Warning W002")),".")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"// The Base Class\nclass Event {\n  @prop({ required: true })\n  public name!: string;\n}\n\n// A Discriminator Class Variant\nclass ClickEvent extends Event {\n  @prop({ required: true, default: 0 })\n  public timesClicked!: number;\n}\n\nconst EventModel = getModelForClass(Event);\nconst ClickEventModel = getDiscriminatorModelForClass(EventModel, ClickEvent);\n")),(0,r.yg)("h2",{id:"notes"},"Notes"),(0,r.yg)("p",null,"ModelOption ",(0,r.yg)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/model-options#disablepluginsondiscriminator"},(0,r.yg)("inlineCode",{parentName:"a"},"disablePluginsOnDiscriminator"))," many need to be set to not get duplicate plugins / plugin hooks."),(0,r.yg)("p",null,"This will not be neccessary for typegoose 9.13.0 and higher."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"function pluginFn(schema) {\n  schema.pre('save', function hookTestTimesNonGlobal() {});\n}\n\n@plugin(pluginFn)\n@modelOptions({ options: { disablePluginsOnDiscriminator: true } })\nclass DisBase {\n  @prop()\n  public dummy?: string;\n}\n\nconst DisBaseModel = getModelForClass(DisBase);\n\nclass Dis1 extends DisBase {\n  @prop()\n  public dummy2?: string;\n}\n\nconst Dis1Model = getDiscriminatorModelForClass(DisBaseModel, Dis1);\n\n// should only contain \"hookTestTimesNonGlobal\" once\n// if \"disablePluginsOnDiscriminator\" is falsy, this will otherwise result in duplicates\nconsole.log('Dis1Model save hooks', (Dis1Model.schema as any).s.hooks._pres.get('save'));\n")))}y.isMDXComponent=!0}}]);