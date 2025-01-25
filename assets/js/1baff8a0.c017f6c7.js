"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[2022],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(n),y=o,u=l["".concat(s,".").concat(y)]||l[y]||g[y]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:o,r[1]=p;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(8168),o=(n(6540),n(5680));const i={id:"change-id-type",title:"Change _id Type"},r=void 0,p={unversionedId:"guides/advanced/change-id-type",id:"guides/advanced/change-id-type",title:"Change _id Type",description:"You can easily change the type of the _id field by doing:",source:"@site/../docs/guides/advanced/changeIDType.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/change-id-type",permalink:"/typegoose/docs/guides/advanced/change-id-type",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/changeIDType.md",tags:[],version:"current",frontMatter:{id:"change-id-type",title:"Change _id Type"},sidebar:"guides",previous:{title:"Reference other Classes",permalink:"/typegoose/docs/guides/advanced/reference-other-classes"},next:{title:"Using ObjectId Type",permalink:"/typegoose/docs/guides/advanced/using-objectid-type"}},s={},d=[{value:"With the Base Interface",id:"with-the-base-interface",level:2}],c={toc:d},l="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(l,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"You can easily change the type of the ",(0,o.yg)("inlineCode",{parentName:"p"},"_id")," field by doing:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"class SomeChangedID {\n  @prop()\n  public _id!: string; // change the type of _id to string\n}\n")),(0,o.yg)("p",null,"The example above sets the ",(0,o.yg)("inlineCode",{parentName:"p"},"_id")," type to be a string, but does not provide a ",(0,o.yg)("inlineCode",{parentName:"p"},"default")," function, so the ",(0,o.yg)("inlineCode",{parentName:"p"},"_id")," property needs to be always set manually before saving / inserting a document, use the ",(0,o.yg)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/prop#default"},(0,o.yg)("inlineCode",{parentName:"a"},"default"))," option to set a function to generate a new id everytime, be careful to not forget that using ",(0,o.yg)("inlineCode",{parentName:"p"},"default: fn()")," will only call the function ",(0,o.yg)("em",{parentName:"p"},"once at scope time")," instead of ",(0,o.yg)("em",{parentName:"p"},"everytime a new document is created"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"class SomeUUIDv4 {\n  @prop({ required: true, default: () => uuidv4() })\n  public _id!: string;\n}\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"_id")," property can also be disabled for subdocuments, with the ",(0,o.yg)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/prop#_id"},"prop option ",(0,o.yg)("inlineCode",{parentName:"a"},"_id: false"))," for the field in the class that uses the subdocument, or the ",(0,o.yg)("a",{parentName:"p",href:"https://mongoosejs.com/docs/guide.html#_id"},"schema option ",(0,o.yg)("inlineCode",{parentName:"a"},"_id")),", but note that the schema-option does not disable ",(0,o.yg)("inlineCode",{parentName:"p"},"_id")," if it is not a sub-document."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ schemaOptions: { _id: false } }) // with the schema option\nclass WithNoId {\n  @prop()\n  public someValue: string;\n}\n\nclass SomeChangedID {\n  @prop({ type: WithNoId, _id: false }) // or with the prop-option\n  public someField: WithNoId[];\n}\n")),(0,o.yg)("div",{id:"with-the-base-class"}),(0,o.yg)("h2",{id:"with-the-base-interface"},"With the Base Interface"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"It is recommended to use the manual approach over using ",(0,o.yg)("inlineCode",{parentName:"p"},"Base"),", because default classes & interfaces may be removed in the future and dont greatly support extending from each other.")),(0,o.yg)("p",null,"There is also a ",(0,o.yg)("inlineCode",{parentName:"p"},"Base")," interface typegoose provides, which includes ",(0,o.yg)("inlineCode",{parentName:"p"},"_id")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"id"),", which can be used as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'interface Something extends Base<string> {} // have the interface to add the types of "Base" to the class\nclass Something { // have your class, OR\n  @prop()\n  public _id: string;\n}\nclass Something extends TimeStamps { // have your class extend some other class\n  @prop()\n  public _id: string;\n}\n')),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("inlineCode",{parentName:"p"},"_id")," property needs to also be included in the actual class, because the default interface ",(0,o.yg)("inlineCode",{parentName:"p"},"Base")," doesn't change anything at runtime (",(0,o.yg)("inlineCode",{parentName:"p"},"Base")," does not use ",(0,o.yg)("inlineCode",{parentName:"p"},"@prop"),").")),(0,o.yg)("admonition",{title:"Restriction",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"This method (extending ",(0,o.yg)("inlineCode",{parentName:"p"},"Base"),") can only be used with types that are in ",(0,o.yg)("inlineCode",{parentName:"p"},"RefType")," (all of ",(0,o.yg)("inlineCode",{parentName:"p"},"mongoose.Schema.Types")," should work except ",(0,o.yg)("inlineCode",{parentName:"p"},"Array"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Mixed"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Boolean"),").")))}g.isMDXComponent=!0}}]);