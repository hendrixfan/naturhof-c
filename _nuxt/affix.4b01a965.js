import{u as S}from"./index.1b482c63.js";import{o as y,a as $,b,j as C,y as z,z as h,i as E,A as d,v as H,x as m,s as T,B,C as R}from"./entry.6d40c333.js";import{_ as I}from"./_plugin-vue_export-helper.a1a6add7.js";function _(o,s,r,f,l,t){return y(),$("div",{class:"affix",ref:"root",style:h(o.rootStyle)},[b("div",{class:z({"position-fixed":o.state.fixed}),style:h(o.affixStyle)},[C(o.$slots,"default")],6)],4)}const k=E({name:"Affix",props:{zIndex:{type:[Number,String],default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}},emits:["scroll","change"],setup(o,{emit:s}){const r=d(),f=d(),l=d(),t=H({fixed:!1,height:0,width:0,scrollTop:0,clientHeight:0,transform:0}),g=m(()=>({height:t.fixed?`${t.height}px`:"",width:t.fixed?`${t.width}px`:""})),x=m(()=>{if(!t.fixed)return;const e=o.offset?`${o.offset}px`:0,n=t.transform?`translateY(${t.transform}px)`:"";return{height:`${t.height}px`,width:`${t.width}px`,top:o.position==="top"?e:"",bottom:o.position==="bottom"?e:"",transform:n,zIndex:o.zIndex}}),u=()=>{if(!f.value||!r.value||!l.value)return;const e=f.value.getBoundingClientRect(),n=r.value.getBoundingClientRect();if(t.height=e.height,t.width=e.width,t.scrollTop=l.value instanceof Window?document.documentElement.scrollTop:l.value.scrollTop,t.clientHeight=document.documentElement.clientHeight,o.position==="top")if(o.target){const i=n.bottom-o.offset-t.height;t.fixed=o.offset>e.top&&n.bottom>0,t.transform=i<0?i:0}else t.fixed=o.offset>e.top;else if(o.target){const i=t.clientHeight-n.top-o.offset-t.height;t.fixed=t.clientHeight-o.offset<e.bottom&&t.clientHeight>n.top,t.transform=i<0?-i:0}else t.fixed=t.clientHeight-o.offset<e.bottom},v=()=>{u(),s("scroll",{scrollTop:t.scrollTop,fixed:t.fixed})},c=function(e,n){if(!e||!n)return null;n=R(n),n==="float"&&(n="cssFloat");try{const i=e.style[n];if(i)return i;const a=document.defaultView.getComputedStyle(e,"");return a?a[n]:""}catch{return e.style[n]}},w=(e,n)=>(n==null?c(e,"overflow"):n?c(e,"overflow-y"):c(e,"overflow-x")).match(/(scroll|auto|overlay)/),p=(e,n)=>{let i=e;for(;i;){if([window,document,document.documentElement].includes(i))return window;if(w(i,n))return i;i=i.parentNode}return i};return T(()=>t.fixed,()=>{s("change",t.fixed)}),B(()=>{var e;if(o.target){if(r.value=(e=document.querySelector(o.target))!=null?e:void 0,!r.value)throw new Error(`Target is not existed: ${o.target}`)}else r.value=document.documentElement;l.value=p(f.value,!0)}),S(l,"scroll",v),{root:f,state:t,rootStyle:g,affixStyle:x,update:u}}}),q=I(k,[["render",_]]);export{q as default};