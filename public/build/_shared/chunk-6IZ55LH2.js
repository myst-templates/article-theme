import{B as q,C as V,D as Z,E as j,F as ee,H as re,J as te,L as oe,a as de,b as F,c as M,d as O,e as K,f as x,g as y,h as E,i as k,j as R,k as G,l as H,m as w,n as S,o as N,p as L,q as _,r as A,s as I,t as z,u as J,v as X,w as $,x as Q,y as W,z as Y}from"/myst_assets_folder/_shared/chunk-ROYJ7O6C.js";import{a as U}from"/myst_assets_folder/_shared/chunk-XIW7RL3H.js";import{a as ce}from"/myst_assets_folder/_shared/chunk-MITWS4PZ.js";import{i as C}from"/myst_assets_folder/_shared/chunk-M5ZDOVXY.js";import{g as T}from"/myst_assets_folder/_shared/chunk-W2XTUIOP.js";import{d as c}from"/myst_assets_folder/_shared/chunk-XJN3BT5Q.js";import{e as s}from"/myst_assets_folder/_shared/chunk-2NH4LW52.js";var ne={rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css",integrity:"sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ",crossOrigin:"anonymous"};var me=s(de());var b=s(c());function D({children:e}){return(0,b.jsx)(E,{children:(0,b.jsx)(R,{children:(0,b.jsx)(O,{gridSystem:"article-left-grid",children:(0,b.jsx)("article",{className:"article content article-left-grid subgrid-gap",children:e})})})})}var se=s(ce());var g=s(c());function fe(e){switch(e){case"pdf":return"PDF";case"meca":return"MECA";case"xml":return"JATS";default:break}return e}function ae(){var f,p,l,o,m;let e=k(),t=(f=e==null?void 0:e.projects)==null?void 0:f[0],a=[...(p=t==null?void 0:t.exports)!=null?p:[],...(m=(o=(l=t==null?void 0:t.pages)==null?void 0:l[0])==null?void 0:o.exports)!=null?m:[]];return a.length===0?null:(0,g.jsx)("div",{className:"col-margin mt-3 mx-5 lg:m-0 lg:w-[300px]",children:(0,g.jsx)("div",{className:"flex flex-wrap gap-2 lg:flex-col w-fit lg:mx-auto",children:a.map(d=>(0,g.jsxs)("a",{href:d.url,className:"inline-block mr-2 no-underline lg:mr-0 lg:block",children:[(0,g.jsx)(w,{width:"1.5rem",height:"1.5rem",className:"inline h-5 pr-2"}),(0,g.jsxs)("span",{children:["Download ",fe(d.format)]})]},d.url))})})}var n=s(c());function ie({article:e,hideKeywords:t,hideOutline:a,hideTitle:f}){var h,v,P;let p=(v=(h=e.frontmatter)==null?void 0:h.keywords)!=null?v:[],l=C(e.mdast),o=F(l),{title:m,subtitle:d}=e.frontmatter,i=A();return(0,n.jsx)(x,{references:{...e.references,article:e.mdast},frontmatter:e.frontmatter,children:(0,n.jsx)(N,{children:(0,n.jsxs)(S,{enable:(P=i==null?void 0:i.enabled)!=null?P:!1,contents:e,children:[!f&&(0,n.jsx)(V,{frontmatter:{title:m,subtitle:d},className:"mb-5"}),!a&&(0,n.jsx)("div",{className:"sticky top-0 z-10 hidden h-0 pt-2 ml-10 col-margin-right lg:block",children:(0,n.jsx)(Q,{className:"relative",children:(0,n.jsx)(W,{})})}),(i==null?void 0:i.enabled)&&(i==null?void 0:i.features.notebookCompute)&&e.kind===U.Notebook&&(0,n.jsx)(X,{showLaunch:!0}),(0,n.jsx)(z,{pageSlug:e.slug}),(0,n.jsx)("div",{id:"skip-to-article"}),(0,n.jsx)(j,{parts:o,keywords:p,hideKeywords:t}),(0,n.jsx)($,{mdast:l}),(0,n.jsx)(ee,{parts:o}),(0,n.jsx)(q,{}),(0,n.jsx)(J,{})]})})})}var r=s(c());function le({article:e}){var i,h,v,P,B;let t=K(),{projects:a,hide_footer_links:f}=(i=k())!=null?i:{},p=M(),l=y(),o=A(),m=a==null?void 0:a[0],d=e.slug===(m==null?void 0:m.index);return m?(0,r.jsx)(x,{references:{...e.references,article:e.mdast},frontmatter:e.frontmatter,children:(0,r.jsx)(N,{children:(0,r.jsxs)(S,{enable:(h=o==null?void 0:o.enabled)!=null?h:!1,contents:e,children:[(0,r.jsx)(Z,{frontmatter:m,children:(0,r.jsxs)("div",{className:"pt-5 md:self-center h-fit lg:pt-0 col-body lg:col-margin-right-inset",children:[(0,r.jsx)(ae,{}),(o==null?void 0:o.enabled)&&o.features.launchBinder&&(0,r.jsx)("div",{className:"col-margin mt-3 mx-5 lg:mt-2 lg:mx-0 lg:w-[300px]",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 lg:flex-col w-[147px] pl-[1px] lg:mx-auto",children:(0,r.jsx)(L,{type:"link",location:e.location})})})]})}),(0,r.jsxs)("main",{id:"main",className:(0,se.default)(t,"subgrid-gap col-screen",{"pt-10":d}),children:[!d&&(0,r.jsxs)("div",{className:"flex items-center p-3 mb-10 border-y bg-slate-50 dark:bg-slate-600 border-y-slate-300 col-screen",children:[(0,r.jsxs)(p,{to:l||"/",className:"flex gap-1 px-2 py-1 font-normal no-underline border rounded bg-slate-200 border-slate-600 hover:bg-slate-800 hover:text-white hover:border-transparent",children:[(0,r.jsx)(H,{width:"1rem",height:"1rem",className:"self-center transition-transform group-hover:-translate-x-1 shrink-0"}),(0,r.jsx)("span",{children:"Back to Article"})]}),(0,r.jsx)("div",{className:"flex-grow text-center",children:e.frontmatter.title}),(o==null?void 0:o.enabled)&&o.features.launchBinder&&(0,r.jsx)("div",{className:"mr-2",children:(0,r.jsx)(L,{type:"button",location:e.location})}),(0,r.jsxs)("a",{href:(B=(P=(v=e.frontmatter)==null?void 0:v.exports)==null?void 0:P[0])==null?void 0:B.url,className:"flex gap-1 px-2 py-1 font-normal no-underline border rounded bg-slate-200 border-slate-600 hover:bg-slate-800 hover:text-white hover:border-transparent",children:[(0,r.jsx)(w,{width:"1rem",height:"1rem",className:"self-center transition-transform group-hover:-translate-x-1 shrink-0"}),(0,r.jsxs)("span",{children:["Download ",e.kind]})]})]}),(0,r.jsx)(ie,{article:e,hideKeywords:!d,hideTitle:d})]}),!f&&(0,r.jsx)(Y,{links:e.footer})]})})}):(0,r.jsx)(re,{})}var u=s(c()),Je=e=>{var f,p,l;let t=(p=(f=e.parentsData)==null?void 0:f.root)==null?void 0:p.config,a=e.data;return!t||!a||!a.frontmatter?{}:oe({origin:"",url:e.location.pathname,title:`${a.frontmatter.title} - ${t==null?void 0:t.title}`,description:a.frontmatter.description,image:(l=a.frontmatter.thumbnailOptimized||a.frontmatter.thumbnail)!=null?l:void 0})},Xe=()=>[ne];function pe(){let e=y(),t=T();return(0,u.jsx)(D,{children:(0,u.jsx)(G,{children:(0,u.jsx)(_,{features:{notebookCompute:!1,figureCompute:!0,launchBinder:!0},children:(0,u.jsx)(I,{baseurl:e!=null?e:"",children:(0,u.jsx)(le,{article:t})})})})})}function $e(){return(0,u.jsx)(D,{children:(0,u.jsx)("main",{className:"article",children:(0,u.jsx)(te,{})})})}export{D as a,Je as b,Xe as c,pe as d,$e as e};