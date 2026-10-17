const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.BJTUZoCI.js","assets/chunks/framework.DjvAMpXr.js"])))=>i.map(i=>d[i]);
import{d as Z,o as b,c as x,r as O,n as Y,a as L,t as U,b as Q,w as z,e as V,T as So,_ as re,u as xo,i as by,f as yy,g as hr,h as F,j as w,k as r,l as Qa,m as Au,p as H,q as Ke,s as ke,v as on,x as Ne,y as dd,z as Sy,A as xy,B as Ra,F as ie,C as ye,D as vr,E as N,G as jf,H as tn,I as Vf,J as gr,K as pa,L as ui,M as _y,N as he,O as Ru,P as Vt,Q as Lf,R as br,S as Hf,U as Cy,V as ky,W as If,X as yr,Y as wy,Z as rs,$ as md,a0 as dn,a1 as Ff,a2 as nn,a3 as qf,a4 as Na,a5 as Bs,a6 as Ny,a7 as Ty,a8 as zy,a9 as Uy,aa as Gf,ab as $y,ac as Ey,ad as Ay,ae as Ry,af as By,ag as Oy,ah as Zy,ai as Dy}from"./framework.DjvAMpXr.js";const My=Z({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(b(),x("span",{class:Y(["VPBadge",e.type])},[O(t.$slots,"default",{},()=>[L(U(e.text),1)])],2))}}),jy={key:0,class:"VPBackdrop"},Vy=Z({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(b(),Q(So,{name:"fade"},{default:z(()=>[e.show?(b(),x("div",jy)):V("",!0)]),_:1}))}}),Ly=re(Vy,[["__scopeId","data-v-b4eae23b"]]),be=xo;function Hy(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),(a=!0)&&setTimeout(()=>a=!1,t))}}function Bu(e){return e.startsWith("/")?e:`/${e}`}function pd(e){const{pathname:t,search:n,hash:a,protocol:l}=new URL(e,"http://a.com");if(by(e)||e.startsWith("#")||!l.startsWith("http")||!yy(t))return e;const{site:i}=be(),o=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${n}${a}`);return hr(o)}function _o({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:a,theme:l,hash:i}=be(),o=F(()=>{var u,d;return{label:(u=t.value.locales[n.value])==null?void 0:u.label,link:((d=t.value.locales[n.value])==null?void 0:d.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:F(()=>Object.entries(t.value.locales).flatMap(([u,d])=>o.value.label===d.label?[]:{text:d.label,link:Iy(d.link||(u==="root"?"/":`/${u}/`),l.value.i18nRouting!==!1&&e,a.value.relativePath.slice(o.value.link.length-1),!t.value.cleanUrls)+i.value})),currentLang:o}}function Iy(e,t,n,a){return t?e.replace(/\/$/,"")+Bu(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):e}const Fy={class:"NotFound"},qy={class:"code"},Gy={class:"title"},Yy={class:"quote"},Ky={class:"action"},Py=["href","aria-label"],Xy=Z({__name:"NotFound",setup(e){const{theme:t}=be(),{currentLang:n}=_o();return(a,l)=>{var i,o,s,u,d;return b(),x("div",Fy,[w("p",qy,U(((i=r(t).notFound)==null?void 0:i.code)??"404"),1),w("h1",Gy,U(((o=r(t).notFound)==null?void 0:o.title)??"PAGE NOT FOUND"),1),l[0]||(l[0]=w("div",{class:"divider"},null,-1)),w("blockquote",Yy,U(((s=r(t).notFound)==null?void 0:s.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),w("div",Ky,[w("a",{class:"link",href:r(hr)(r(n).link),"aria-label":((u=r(t).notFound)==null?void 0:u.linkLabel)??"go to home"},U(((d=r(t).notFound)==null?void 0:d.linkText)??"Take me home"),9,Py)])])}}}),Qy=re(Xy,[["__scopeId","data-v-b6076cfe"]]);function Yf(e,t){if(Array.isArray(e))return us(e);if(e==null)return[];t=Bu(t);const n=Object.keys(e).sort((l,i)=>i.split("/").length-l.split("/").length).find(l=>t.startsWith(Bu(l))),a=n?e[n]:[];return Array.isArray(a)?us(a):us(a.items,a.base)}function Jy(e){const t=[];let n=0;for(const a in e){const l=e[a];if(l.items){n=t.push(l);continue}t[n]||t.push({items:[]}),t[n].items.push(l)}return t}function Wy(e){const t=[];function n(a){for(const l of a)l.text&&l.link&&t.push({text:l.text,link:l.link,docFooterText:l.docFooterText}),l.items&&n(l.items)}return n(e),t}function Ou(e,t){return Array.isArray(t)?t.some(n=>Ou(e,n)):Qa(e,t.link)?!0:t.items?Ou(e,t.items):!1}function us(e,t){return[...e].map(n=>{const a={...n},l=a.base||t;return l&&a.link&&(a.link=l+a.link),a.items&&(a.items=us(a.items,l)),a})}function Yn(){const{frontmatter:e,page:t,theme:n}=be(),a=Au("(min-width: 960px)"),l=H(!1),i=F(()=>{const S=n.value.sidebar,_=t.value.relativePath;return S?Yf(S,_):[]}),o=H(i.value);Ke(i,(S,_)=>{JSON.stringify(S)!==JSON.stringify(_)&&(o.value=i.value)});const s=F(()=>e.value.sidebar!==!1&&o.value.length>0&&e.value.layout!=="home"),u=F(()=>d?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),d=F(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),p=F(()=>s.value&&a.value),c=F(()=>s.value?Jy(o.value):[]);function f(){l.value=!0}function g(){l.value=!1}function C(){l.value?g():f()}return{isOpen:l,sidebar:o,sidebarGroups:c,hasSidebar:s,hasAside:d,leftAside:u,isSidebarEnabled:p,open:f,close:g,toggle:C}}function eS(e,t){let n;ke(()=>{n=e.value?document.activeElement:void 0}),on(()=>{window.addEventListener("keyup",a)}),Ne(()=>{window.removeEventListener("keyup",a)});function a(l){l.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function tS(e){const{page:t,hash:n}=be(),a=H(!1),l=F(()=>e.value.collapsed!=null),i=F(()=>!!e.value.link),o=H(!1),s=()=>{o.value=Qa(t.value.relativePath,e.value.link)};Ke([t,e,n],s),on(s);const u=F(()=>o.value?!0:e.value.items?Ou(t.value.relativePath,e.value.items):!1),d=F(()=>!!(e.value.items&&e.value.items.length));ke(()=>{a.value=!!(l.value&&e.value.collapsed)}),dd(()=>{(o.value||u.value)&&(a.value=!1)});function p(){l.value&&(a.value=!a.value)}return{collapsed:a,collapsible:l,isLink:i,isActiveLink:o,hasActiveLink:u,hasChildren:d,toggle:p}}function nS(){const{hasSidebar:e}=Yn(),t=Au("(min-width: 960px)"),n=Au("(min-width: 1280px)");return{isAsideEnabled:F(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const aS=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Zu=[];function Kf(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function fd(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const a=Number(n.tagName[1]);return{element:n,title:lS(n),link:"#"+n.id,level:a}});return iS(t,e)}function lS(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(aS.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function iS(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[a,l]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return rS(e,a,l)}function oS(e,t){const{isAsideEnabled:n}=nS(),a=Hy(i,100);let l=null;on(()=>{requestAnimationFrame(i),window.addEventListener("scroll",a)}),Sy(()=>{o(location.hash)}),Ne(()=>{window.removeEventListener("scroll",a)});function i(){if(!n.value)return;const s=window.scrollY,u=window.innerHeight,d=document.body.offsetHeight,p=Math.abs(s+u-d)<1,c=Zu.map(({element:g,link:C})=>({link:C,top:sS(g)})).filter(({top:g})=>!Number.isNaN(g)).sort((g,C)=>g.top-C.top);if(!c.length){o(null);return}if(s<1){o(null);return}if(p){o(c[c.length-1].link);return}let f=null;for(const{link:g,top:C}of c){if(C>s+xy()+4)break;f=g}o(f)}function o(s){l&&l.classList.remove("active"),s==null?l=null:l=e.value.querySelector(`a[href="${decodeURIComponent(s)}"]`);const u=l;u?(u.classList.add("active"),t.value.style.top=u.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function sS(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function rS(e,t,n){Zu.length=0;const a=[],l=[];return e.forEach(i=>{const o={...i,children:[]};let s=l[l.length-1];for(;s&&s.level>=o.level;)l.pop(),s=l[l.length-1];if(o.element.classList.contains("ignore-header")||s&&"shouldIgnore"in s){l.push({level:o.level,shouldIgnore:!0});return}o.level>n||o.level<t||(Zu.push({element:o.element,link:o.link}),s?s.children.push(o):a.push(o),l.push(o))}),a}const uS=["href","title"],cS=Z({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const a=n.href.split("#")[1],l=document.getElementById(decodeURIComponent(a));l==null||l.focus({preventScroll:!0})}return(n,a)=>{const l=Ra("VPDocOutlineItem",!0);return b(),x("ul",{class:Y(["VPDocOutlineItem",e.root?"root":"nested"])},[(b(!0),x(ie,null,ye(e.headers,({children:i,link:o,title:s})=>(b(),x("li",null,[w("a",{class:"outline-link",href:o,onClick:t,title:s},U(s),9,uS),i!=null&&i.length?(b(),Q(l,{key:0,headers:i},null,8,["headers"])):V("",!0)]))),256))],2)}}}),Pf=re(cS,[["__scopeId","data-v-21c134d0"]]),dS={class:"content"},mS={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},pS=Z({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=be(),a=jf([]);vr(()=>{a.value=fd(t.value.outline??n.value.outline)});const l=H(),i=H();return oS(l,i),(o,s)=>(b(),x("nav",{"aria-labelledby":"doc-outline-aria-label",class:Y(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:l},[w("div",dS,[w("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),w("div",mS,U(r(Kf)(r(n))),1),N(Pf,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),fS=re(pS,[["__scopeId","data-v-811e79c0"]]),hS={class:"VPDocAsideCarbonAds"},vS=Z({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,a)=>(b(),x("div",hS,[N(r(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),gS={class:"VPDocAside"},bS=Z({__name:"VPDocAside",setup(e){const{theme:t}=be();return(n,a)=>(b(),x("div",gS,[O(n.$slots,"aside-top",{},void 0,!0),O(n.$slots,"aside-outline-before",{},void 0,!0),N(fS),O(n.$slots,"aside-outline-after",{},void 0,!0),a[0]||(a[0]=w("div",{class:"spacer"},null,-1)),O(n.$slots,"aside-ads-before",{},void 0,!0),r(t).carbonAds?(b(),Q(vS,{key:0,"carbon-ads":r(t).carbonAds},null,8,["carbon-ads"])):V("",!0),O(n.$slots,"aside-ads-after",{},void 0,!0),O(n.$slots,"aside-bottom",{},void 0,!0)]))}}),yS=re(bS,[["__scopeId","data-v-1f35908d"]]);function SS(){const{theme:e,page:t}=be();return F(()=>{const{text:n="Edit this page",pattern:a=""}=e.value.editLink||{};let l;return typeof a=="function"?l=a(t.value):l=a.replace(/:path/g,t.value.filePath),{url:l,text:n}})}function xS(){const{page:e,theme:t,frontmatter:n}=be();return F(()=>{var d,p,c,f,g,C,S,_;const a=Yf(t.value.sidebar,e.value.relativePath),l=Wy(a),i=_S(l,v=>v.link.replace(/[?#].*$/,"")),o=i.findIndex(v=>Qa(e.value.relativePath,v.link)),s=((d=t.value.docFooter)==null?void 0:d.prev)===!1&&!n.value.prev||n.value.prev===!1,u=((p=t.value.docFooter)==null?void 0:p.next)===!1&&!n.value.next||n.value.next===!1;return{prev:s?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((c=i[o-1])==null?void 0:c.docFooterText)??((f=i[o-1])==null?void 0:f.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((g=i[o-1])==null?void 0:g.link)},next:u?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((C=i[o+1])==null?void 0:C.docFooterText)??((S=i[o+1])==null?void 0:S.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((_=i[o+1])==null?void 0:_.link)}}})}function _S(e,t){const n=new Set;return e.filter(a=>{const l=t(a);return n.has(l)?!1:n.add(l)})}const wn=Z({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=F(()=>t.tag??(t.href?"a":"span")),a=F(()=>t.href&&Vf.test(t.href)||t.target==="_blank");return(l,i)=>(b(),Q(tn(n.value),{class:Y(["VPLink",{link:e.href,"vp-external-link-icon":a.value,"no-icon":e.noIcon}]),href:e.href?r(pd)(e.href):void 0,target:e.target??(a.value?"_blank":void 0),rel:e.rel??(a.value?"noreferrer":void 0)},{default:z(()=>[O(l.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),CS={class:"VPLastUpdated"},kS=["datetime"],wS=Z({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:a}=be(),l=F(()=>new Date(n.value.lastUpdated)),i=F(()=>l.value.toISOString()),o=H("");return on(()=>{ke(()=>{var s,u,d;o.value=new Intl.DateTimeFormat((u=(s=t.value.lastUpdated)==null?void 0:s.formatOptions)!=null&&u.forceLocale?a.value:void 0,((d=t.value.lastUpdated)==null?void 0:d.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(l.value)})}),(s,u)=>{var d;return b(),x("p",CS,[L(U(((d=r(t).lastUpdated)==null?void 0:d.text)||r(t).lastUpdatedText||"Last updated")+": ",1),w("time",{datetime:i.value},U(o.value),9,kS)])}}}),NS=re(wS,[["__scopeId","data-v-a0add123"]]),TS={key:0,class:"VPDocFooter"},zS={key:0,class:"edit-info"},US={key:0,class:"edit-link"},$S={key:1,class:"last-updated"},ES={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},AS={class:"pager"},RS=["innerHTML"],BS=["innerHTML"],OS={class:"pager"},ZS=["innerHTML"],DS=["innerHTML"],MS=Z({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:a}=be(),l=SS(),i=xS(),o=F(()=>t.value.editLink&&a.value.editLink!==!1),s=F(()=>n.value.lastUpdated),u=F(()=>o.value||s.value||i.value.prev||i.value.next);return(d,p)=>{var c,f,g,C;return u.value?(b(),x("footer",TS,[O(d.$slots,"doc-footer-before",{},void 0,!0),o.value||s.value?(b(),x("div",zS,[o.value?(b(),x("div",US,[N(wn,{class:"edit-link-button",href:r(l).url,"no-icon":!0},{default:z(()=>[p[0]||(p[0]=w("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),L(" "+U(r(l).text),1)]),_:1},8,["href"])])):V("",!0),s.value?(b(),x("div",$S,[N(NS)])):V("",!0)])):V("",!0),(c=r(i).prev)!=null&&c.link||(f=r(i).next)!=null&&f.link?(b(),x("nav",ES,[p[1]||(p[1]=w("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),w("div",AS,[(g=r(i).prev)!=null&&g.link?(b(),Q(wn,{key:0,class:"pager-link prev",href:r(i).prev.link},{default:z(()=>{var S;return[w("span",{class:"desc",innerHTML:((S=r(t).docFooter)==null?void 0:S.prev)||"Previous page"},null,8,RS),w("span",{class:"title",innerHTML:r(i).prev.text},null,8,BS)]}),_:1},8,["href"])):V("",!0)]),w("div",OS,[(C=r(i).next)!=null&&C.link?(b(),Q(wn,{key:0,class:"pager-link next",href:r(i).next.link},{default:z(()=>{var S;return[w("span",{class:"desc",innerHTML:((S=r(t).docFooter)==null?void 0:S.next)||"Next page"},null,8,ZS),w("span",{class:"title",innerHTML:r(i).next.text},null,8,DS)]}),_:1},8,["href"])):V("",!0)])])):V("",!0)])):V("",!0)}}}),jS=re(MS,[["__scopeId","data-v-9efd0a2f"]]),VS={class:"container"},LS={class:"aside-container"},HS={class:"aside-content"},IS={class:"content"},FS={class:"content-container"},qS={class:"main"},GS=Z({__name:"VPDoc",setup(e){const{theme:t}=be(),n=gr(),{hasSidebar:a,hasAside:l,leftAside:i}=Yn(),o=F(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(s,u)=>{const d=Ra("Content");return b(),x("div",{class:Y(["VPDoc",{"has-sidebar":r(a),"has-aside":r(l)}])},[O(s.$slots,"doc-top",{},void 0,!0),w("div",VS,[r(l)?(b(),x("div",{key:0,class:Y(["aside",{"left-aside":r(i)}])},[u[0]||(u[0]=w("div",{class:"aside-curtain"},null,-1)),w("div",LS,[w("div",HS,[N(yS,null,{"aside-top":z(()=>[O(s.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":z(()=>[O(s.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":z(()=>[O(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":z(()=>[O(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":z(()=>[O(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":z(()=>[O(s.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):V("",!0),w("div",IS,[w("div",FS,[O(s.$slots,"doc-before",{},void 0,!0),w("main",qS,[N(d,{class:Y(["vp-doc",[o.value,r(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),N(jS,null,{"doc-footer-before":z(()=>[O(s.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),O(s.$slots,"doc-after",{},void 0,!0)])])]),O(s.$slots,"doc-bottom",{},void 0,!0)],2)}}}),YS=re(GS,[["__scopeId","data-v-a4018fe9"]]),KS=Z({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=F(()=>t.href&&Vf.test(t.href)),a=F(()=>t.tag||(t.href?"a":"button"));return(l,i)=>(b(),Q(tn(a.value),{class:Y(["VPButton",[e.size,e.theme]]),href:e.href?r(pd)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:z(()=>[L(U(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),PS=re(KS,[["__scopeId","data-v-d62b1c2f"]]),XS=["src","alt"],QS=Z({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const a=Ra("VPImage",!0);return e.image?(b(),x(ie,{key:0},[typeof e.image=="string"||"src"in e.image?(b(),x("img",pa({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:r(hr)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,XS)):(b(),x(ie,{key:1},[N(a,pa({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),N(a,pa({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):V("",!0)}}}),Os=re(QS,[["__scopeId","data-v-e7ab6932"]]),JS={class:"container"},WS={class:"main"},e0={class:"heading"},t0=["innerHTML"],n0=["innerHTML"],a0=["innerHTML"],l0={key:0,class:"actions"},i0={key:0,class:"image"},o0={class:"image-container"},s0=Z({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=ui("hero-image-slot-exists");return(n,a)=>(b(),x("div",{class:Y(["VPHero",{"has-image":e.image||r(t)}])},[w("div",JS,[w("div",WS,[O(n.$slots,"home-hero-info-before",{},void 0,!0),O(n.$slots,"home-hero-info",{},()=>[w("h1",e0,[e.name?(b(),x("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,t0)):V("",!0),e.text?(b(),x("span",{key:1,innerHTML:e.text,class:"text"},null,8,n0)):V("",!0)]),e.tagline?(b(),x("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,a0)):V("",!0)],!0),O(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(b(),x("div",l0,[(b(!0),x(ie,null,ye(e.actions,l=>(b(),x("div",{key:l.link,class:"action"},[N(PS,{tag:"a",size:"medium",theme:l.theme,text:l.text,href:l.link,target:l.target,rel:l.rel},null,8,["theme","text","href","target","rel"])]))),128))])):V("",!0),O(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||r(t)?(b(),x("div",i0,[w("div",o0,[a[0]||(a[0]=w("div",{class:"image-bg"},null,-1)),O(n.$slots,"home-hero-image",{},()=>[e.image?(b(),Q(Os,{key:0,class:"image-src",image:e.image},null,8,["image"])):V("",!0)],!0)])])):V("",!0)])],2))}}),r0=re(s0,[["__scopeId","data-v-c0fe9412"]]),u0=Z({__name:"VPHomeHero",setup(e){const{frontmatter:t}=be();return(n,a)=>r(t).hero?(b(),Q(r0,{key:0,class:"VPHomeHero",name:r(t).hero.name,text:r(t).hero.text,tagline:r(t).hero.tagline,image:r(t).hero.image,actions:r(t).hero.actions},{"home-hero-info-before":z(()=>[O(n.$slots,"home-hero-info-before")]),"home-hero-info":z(()=>[O(n.$slots,"home-hero-info")]),"home-hero-info-after":z(()=>[O(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":z(()=>[O(n.$slots,"home-hero-actions-after")]),"home-hero-image":z(()=>[O(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):V("",!0)}}),c0={class:"box"},d0={key:0,class:"icon"},m0=["innerHTML"],p0=["innerHTML"],f0=["innerHTML"],h0={key:4,class:"link-text"},v0={class:"link-text-value"},g0=Z({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(b(),Q(wn,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:z(()=>[w("article",c0,[typeof e.icon=="object"&&e.icon.wrap?(b(),x("div",d0,[N(Os,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(b(),Q(Os,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(b(),x("div",{key:2,class:"icon",innerHTML:e.icon},null,8,m0)):V("",!0),w("h2",{class:"title",innerHTML:e.title},null,8,p0),e.details?(b(),x("p",{key:3,class:"details",innerHTML:e.details},null,8,f0)):V("",!0),e.linkText?(b(),x("div",h0,[w("p",v0,[L(U(e.linkText)+" ",1),n[0]||(n[0]=w("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):V("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),b0=re(g0,[["__scopeId","data-v-b285169c"]]),y0={key:0,class:"VPFeatures"},S0={class:"container"},x0={class:"items"},_0=Z({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=F(()=>{const a=t.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,l)=>e.features?(b(),x("div",y0,[w("div",S0,[w("div",x0,[(b(!0),x(ie,null,ye(e.features,i=>(b(),x("div",{key:i.title,class:Y(["item",[n.value]])},[N(b0,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):V("",!0)}}),C0=re(_0,[["__scopeId","data-v-641f3c6a"]]),k0=Z({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=be();return(n,a)=>r(t).features?(b(),Q(C0,{key:0,class:"VPHomeFeatures",features:r(t).features},null,8,["features"])):V("",!0)}}),w0=Z({__name:"VPHomeContent",setup(e){const{width:t}=_y({initialWidth:0,includeScrollbar:!1});return(n,a)=>(b(),x("div",{class:"vp-doc container",style:he(r(t)?{"--vp-offset":`calc(50% - ${r(t)/2}px)`}:{})},[O(n.$slots,"default",{},void 0,!0)],4))}}),N0=re(w0,[["__scopeId","data-v-a7e7b8fa"]]),T0=Z({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=be();return(a,l)=>{const i=Ra("Content");return b(),x("div",{class:Y(["VPHome",{"external-link-icon-enabled":r(n).externalLinkIcon}])},[O(a.$slots,"home-hero-before",{},void 0,!0),N(u0,null,{"home-hero-info-before":z(()=>[O(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":z(()=>[O(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":z(()=>[O(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":z(()=>[O(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":z(()=>[O(a.$slots,"home-hero-image",{},void 0,!0)]),_:3}),O(a.$slots,"home-hero-after",{},void 0,!0),O(a.$slots,"home-features-before",{},void 0,!0),N(k0),O(a.$slots,"home-features-after",{},void 0,!0),r(t).markdownStyles!==!1?(b(),Q(N0,{key:0},{default:z(()=>[N(i)]),_:1})):(b(),Q(i,{key:1}))],2)}}}),z0=re(T0,[["__scopeId","data-v-a06b0b8e"]]),U0={},$0={class:"VPPage"};function E0(e,t){const n=Ra("Content");return b(),x("div",$0,[O(e.$slots,"page-top"),N(n),O(e.$slots,"page-bottom")])}const A0=re(U0,[["render",E0]]),R0=Z({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=be(),{hasSidebar:a}=Yn();return(l,i)=>(b(),x("div",{class:Y(["VPContent",{"has-sidebar":r(a),"is-home":r(n).layout==="home"}]),id:"VPContent"},[r(t).isNotFound?O(l.$slots,"not-found",{},()=>[N(Qy)],!0,0):r(n).layout==="page"?(b(),Q(A0,{key:1},{"page-top":z(()=>[O(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":z(()=>[O(l.$slots,"page-bottom",{},void 0,!0)]),_:3})):r(n).layout==="home"?(b(),Q(z0,{key:2},{"home-hero-before":z(()=>[O(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":z(()=>[O(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":z(()=>[O(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":z(()=>[O(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":z(()=>[O(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":z(()=>[O(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":z(()=>[O(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":z(()=>[O(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":z(()=>[O(l.$slots,"home-features-after",{},void 0,!0)]),_:3})):r(n).layout&&r(n).layout!=="doc"?(b(),Q(tn(r(n).layout),{key:3})):(b(),Q(YS,{key:4},{"doc-top":z(()=>[O(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":z(()=>[O(l.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":z(()=>[O(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":z(()=>[O(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":z(()=>[O(l.$slots,"doc-after",{},void 0,!0)]),"aside-top":z(()=>[O(l.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":z(()=>[O(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":z(()=>[O(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":z(()=>[O(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":z(()=>[O(l.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":z(()=>[O(l.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),B0=re(R0,[["__scopeId","data-v-e0f29958"]]),O0={class:"container"},Z0=["innerHTML"],D0=["innerHTML"],M0=Z({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=be(),{hasSidebar:a}=Yn();return(l,i)=>r(t).footer&&r(n).footer!==!1?(b(),x("footer",{key:0,class:Y(["VPFooter",{"has-sidebar":r(a)}])},[w("div",O0,[r(t).footer.message?(b(),x("p",{key:0,class:"message",innerHTML:r(t).footer.message},null,8,Z0)):V("",!0),r(t).footer.copyright?(b(),x("p",{key:1,class:"copyright",innerHTML:r(t).footer.copyright},null,8,D0)):V("",!0)])],2)):V("",!0)}}),j0=re(M0,[["__scopeId","data-v-e10f4d64"]]);function V0(){const{theme:e,frontmatter:t}=be(),n=jf([]),a=F(()=>n.value.length>0);return vr(()=>{n.value=fd(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:a}}const L0={class:"menu-text"},H0={class:"header"},I0={class:"outline"},F0=Z({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=be(),a=H(!1),l=H(0),i=H(),o=H();function s(c){var f;(f=i.value)!=null&&f.contains(c.target)||(a.value=!1)}Ke(a,c=>{if(c){document.addEventListener("click",s);return}document.removeEventListener("click",s)}),Ru("Escape",()=>{a.value=!1}),vr(()=>{a.value=!1});function u(){a.value=!a.value,l.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function d(c){c.target.classList.contains("outline-link")&&(o.value&&(o.value.style.transition="none"),Vt(()=>{a.value=!1}))}function p(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(c,f)=>(b(),x("div",{class:"VPLocalNavOutlineDropdown",style:he({"--vp-vh":l.value+"px"}),ref_key:"main",ref:i},[e.headers.length>0?(b(),x("button",{key:0,onClick:u,class:Y({open:a.value})},[w("span",L0,U(r(Kf)(r(n))),1),f[0]||(f[0]=w("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(b(),x("button",{key:1,onClick:p},U(r(n).returnToTopLabel||"Return to top"),1)),N(So,{name:"flyout"},{default:z(()=>[a.value?(b(),x("div",{key:0,ref_key:"items",ref:o,class:"items",onClick:d},[w("div",H0,[w("a",{class:"top-link",href:"#",onClick:p},U(r(n).returnToTopLabel||"Return to top"),1)]),w("div",I0,[N(Pf,{headers:e.headers},null,8,["headers"])])],512)):V("",!0)]),_:1})],4))}}),q0=re(F0,[["__scopeId","data-v-bbddb214"]]),G0={class:"container"},Y0=["aria-expanded"],K0={class:"menu-text"},P0=Z({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=be(),{hasSidebar:a}=Yn(),{headers:l}=V0(),{y:i}=Lf(),o=H(0);on(()=>{o.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),vr(()=>{l.value=fd(n.value.outline??t.value.outline)});const s=F(()=>l.value.length===0),u=F(()=>s.value&&!a.value),d=F(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:s.value,fixed:u.value}));return(p,c)=>r(n).layout!=="home"&&(!u.value||r(i)>=o.value)?(b(),x("div",{key:0,class:Y(d.value)},[w("div",G0,[r(a)?(b(),x("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:c[0]||(c[0]=f=>p.$emit("open-menu"))},[c[1]||(c[1]=w("span",{class:"vpi-align-left menu-icon"},null,-1)),w("span",K0,U(r(t).sidebarMenuLabel||"Menu"),1)],8,Y0)):V("",!0),N(q0,{headers:r(l),navHeight:o.value},null,8,["headers","navHeight"])])],2)):V("",!0)}}),X0=re(P0,[["__scopeId","data-v-2f5e8597"]]);function Q0(){const e=H(!1);function t(){e.value=!0,window.addEventListener("resize",l)}function n(){e.value=!1,window.removeEventListener("resize",l)}function a(){e.value?n():t()}function l(){window.outerWidth>=768&&n()}const i=gr();return Ke(()=>i.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:a}}const J0={},W0={class:"VPSwitch",type:"button",role:"switch"},e1={class:"check"},t1={key:0,class:"icon"};function n1(e,t){return b(),x("button",W0,[w("span",e1,[e.$slots.default?(b(),x("span",t1,[O(e.$slots,"default",{},void 0,!0)])):V("",!0)])])}const a1=re(J0,[["render",n1],["__scopeId","data-v-263cf1e6"]]),l1=Z({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=be(),a=ui("toggle-appearance",()=>{t.value=!t.value}),l=H("");return dd(()=>{l.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(i,o)=>(b(),Q(a1,{title:l.value,class:"VPSwitchAppearance","aria-checked":r(t),onClick:r(a)},{default:z(()=>[...o[0]||(o[0]=[w("span",{class:"vpi-sun sun"},null,-1),w("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),hd=re(l1,[["__scopeId","data-v-bd069591"]]),i1={key:0,class:"VPNavBarAppearance"},o1=Z({__name:"VPNavBarAppearance",setup(e){const{site:t}=be();return(n,a)=>r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(b(),x("div",i1,[N(hd)])):V("",!0)}}),s1=re(o1,[["__scopeId","data-v-7aa28a41"]]),vd=H();let Xf=!1,Pr=0;function r1(e){const t=H(!1);if(br){!Xf&&u1(),Pr++;const n=Ke(vd,a=>{var l,i,o;a===e.el.value||(l=e.el.value)!=null&&l.contains(a)?(t.value=!0,(i=e.onFocus)==null||i.call(e)):(t.value=!1,(o=e.onBlur)==null||o.call(e))});Ne(()=>{n(),Pr--,Pr||c1()})}return Hf(t)}function u1(){document.addEventListener("focusin",Qf),Xf=!0,vd.value=document.activeElement}function c1(){document.removeEventListener("focusin",Qf)}function Qf(){vd.value=document.activeElement}const d1={class:"VPMenuLink"},m1=["innerHTML"],p1=Z({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=be();return(n,a)=>(b(),x("div",d1,[N(wn,{class:Y({active:r(Qa)(r(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:z(()=>[w("span",{innerHTML:e.item.text},null,8,m1)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Sr=re(p1,[["__scopeId","data-v-740b01a7"]]),f1={class:"VPMenuGroup"},h1={key:0,class:"title"},v1=Z({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(b(),x("div",f1,[e.text?(b(),x("p",h1,U(e.text),1)):V("",!0),(b(!0),x(ie,null,ye(e.items,a=>(b(),x(ie,null,["link"in a?(b(),Q(Sr,{key:0,item:a},null,8,["item"])):V("",!0)],64))),256))]))}}),g1=re(v1,[["__scopeId","data-v-fbf0a0d3"]]),b1={class:"VPMenu"},y1={key:0,class:"items"},S1=Z({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(b(),x("div",b1,[e.items?(b(),x("div",y1,[(b(!0),x(ie,null,ye(e.items,a=>(b(),x(ie,{key:JSON.stringify(a)},["link"in a?(b(),Q(Sr,{key:0,item:a},null,8,["item"])):"component"in a?(b(),Q(tn(a.component),pa({key:1,ref_for:!0},a.props),null,16)):(b(),Q(g1,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):V("",!0),O(t.$slots,"default",{},void 0,!0)]))}}),x1=re(S1,[["__scopeId","data-v-5079ecf8"]]),_1=["aria-expanded","aria-label"],C1={key:0,class:"text"},k1=["innerHTML"],w1={key:1,class:"vpi-more-horizontal icon"},N1={class:"menu"},T1=Z({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=H(!1),n=H();r1({el:n,onBlur:a});function a(){t.value=!1}return(l,i)=>(b(),x("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:i[1]||(i[1]=o=>t.value=!0),onMouseleave:i[2]||(i[2]=o=>t.value=!1)},[w("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:i[0]||(i[0]=o=>t.value=!t.value)},[e.button||e.icon?(b(),x("span",C1,[e.icon?(b(),x("span",{key:0,class:Y([e.icon,"option-icon"])},null,2)):V("",!0),e.button?(b(),x("span",{key:1,innerHTML:e.button},null,8,k1)):V("",!0),i[3]||(i[3]=w("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(b(),x("span",w1))],8,_1),w("div",N1,[N(x1,{items:e.items},{default:z(()=>[O(l.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),gd=re(T1,[["__scopeId","data-v-d6305e53"]]),z1=["href","aria-label","innerHTML"],U1=Z({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=H();on(async()=>{var i;await Vt();const l=(i=n.value)==null?void 0:i.children[0];l instanceof HTMLElement&&l.className.startsWith("vpi-social-")&&(getComputedStyle(l).maskImage||getComputedStyle(l).webkitMaskImage)==="none"&&l.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const a=F(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(l,i)=>(b(),x("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:a.value},null,8,z1))}}),$1=re(U1,[["__scopeId","data-v-012cce12"]]),E1={class:"VPSocialLinks"},A1=Z({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(b(),x("div",E1,[(b(!0),x(ie,null,ye(e.links,({link:a,icon:l,ariaLabel:i})=>(b(),Q($1,{key:a,icon:l,link:a,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),bd=re(A1,[["__scopeId","data-v-8fd41632"]]),R1={key:0,class:"group translations"},B1={class:"trans-title"},O1={key:1,class:"group"},Z1={class:"item appearance"},D1={class:"label"},M1={class:"appearance-action"},j1={key:2,class:"group"},V1={class:"item social-links"},L1=Z({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=be(),{localeLinks:a,currentLang:l}=_o({correspondingLink:!0}),i=F(()=>a.value.length&&l.value.label||t.value.appearance||n.value.socialLinks);return(o,s)=>i.value?(b(),Q(gd,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:z(()=>[r(a).length&&r(l).label?(b(),x("div",R1,[w("p",B1,U(r(l).label),1),(b(!0),x(ie,null,ye(r(a),u=>(b(),Q(Sr,{key:u.link,item:u},null,8,["item"]))),128))])):V("",!0),r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(b(),x("div",O1,[w("div",Z1,[w("p",D1,U(r(n).darkModeSwitchLabel||"Appearance"),1),w("div",M1,[N(hd)])])])):V("",!0),r(n).socialLinks?(b(),x("div",j1,[w("div",V1,[N(bd,{class:"social-links-list",links:r(n).socialLinks},null,8,["links"])])])):V("",!0)]),_:1})):V("",!0)}}),H1=re(L1,[["__scopeId","data-v-aa6e6ef3"]]),I1=["aria-expanded"],F1=Z({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(b(),x("button",{type:"button",class:Y(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=a=>t.$emit("click"))},[...n[1]||(n[1]=[w("span",{class:"container"},[w("span",{class:"top"}),w("span",{class:"middle"}),w("span",{class:"bottom"})],-1)])],10,I1))}}),q1=re(F1,[["__scopeId","data-v-a2b2b557"]]),G1=["innerHTML"],Y1=Z({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=be();return(n,a)=>(b(),Q(wn,{class:Y({VPNavBarMenuLink:!0,active:r(Qa)(r(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:z(()=>[w("span",{innerHTML:e.item.text},null,8,G1)]),_:1},8,["class","href","target","rel","no-icon"]))}}),K1=re(Y1,[["__scopeId","data-v-53298616"]]),P1=Z({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=be(),a=i=>"component"in i?!1:"link"in i?Qa(n.value.relativePath,i.link,!!t.item.activeMatch):i.items.some(a),l=F(()=>a(t.item));return(i,o)=>(b(),Q(gd,{class:Y({VPNavBarMenuGroup:!0,active:r(Qa)(r(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||l.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),X1={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Q1=Z({__name:"VPNavBarMenu",setup(e){const{theme:t}=be();return(n,a)=>r(t).nav?(b(),x("nav",X1,[a[0]||(a[0]=w("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(b(!0),x(ie,null,ye(r(t).nav,l=>(b(),x(ie,{key:JSON.stringify(l)},["link"in l?(b(),Q(K1,{key:0,item:l},null,8,["item"])):"component"in l?(b(),Q(tn(l.component),pa({key:1,ref_for:!0},l.props),null,16)):(b(),Q(P1,{key:2,item:l},null,8,["item"]))],64))),128))])):V("",!0)}}),J1=re(Q1,[["__scopeId","data-v-200a2831"]]);function W1(e){const{localeIndex:t,theme:n}=be();function a(l){var C,S,_;const i=l.split("."),o=(C=n.value.search)==null?void 0:C.options,s=o&&typeof o=="object",u=s&&((_=(S=o.locales)==null?void 0:S[t.value])==null?void 0:_.translations)||null,d=s&&o.translations||null;let p=u,c=d,f=e;const g=i.pop();for(const v of i){let h=null;const y=f==null?void 0:f[v];y&&(h=f=y);const k=c==null?void 0:c[v];k&&(h=c=k);const E=p==null?void 0:p[v];E&&(h=p=E),y||(f=h),k||(c=h),E||(p=h)}return(p==null?void 0:p[g])??(c==null?void 0:c[g])??(f==null?void 0:f[g])??""}return a}const ex=["aria-label"],tx={class:"DocSearch-Button-Container"},nx={class:"DocSearch-Button-Placeholder"},km=Z({__name:"VPNavBarSearchButton",setup(e){const n=W1({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,l)=>(b(),x("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":r(n)("button.buttonAriaLabel")},[w("span",tx,[l[0]||(l[0]=w("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),w("span",nx,U(r(n)("button.buttonText")),1)]),l[1]||(l[1]=w("span",{class:"DocSearch-Button-Keys"},[w("kbd",{class:"DocSearch-Button-Key"}),w("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,ex))}}),ax={class:"VPNavBarSearch"},lx={id:"local-search"},ix={key:1,id:"docsearch"},ox=Z({__name:"VPNavBarSearch",setup(e){const t=Cy(()=>ky(()=>import("./VPLocalSearchBox.BJTUZoCI.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:a}=be(),l=H(!1),i=H(!1);on(()=>{});function o(){l.value||(l.value=!0,setTimeout(s,16))}function s(){const c=new Event("keydown");c.key="k",c.metaKey=!0,window.dispatchEvent(c),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||s()},16)}function u(c){const f=c.target,g=f.tagName;return f.isContentEditable||g==="INPUT"||g==="SELECT"||g==="TEXTAREA"}const d=H(!1);Ru("k",c=>{(c.ctrlKey||c.metaKey)&&(c.preventDefault(),d.value=!0)}),Ru("/",c=>{u(c)||(c.preventDefault(),d.value=!0)});const p="local";return(c,f)=>{var g;return b(),x("div",ax,[r(p)==="local"?(b(),x(ie,{key:0},[d.value?(b(),Q(r(t),{key:0,onClose:f[0]||(f[0]=C=>d.value=!1)})):V("",!0),w("div",lx,[N(km,{onClick:f[1]||(f[1]=C=>d.value=!0)})])],64)):r(p)==="algolia"?(b(),x(ie,{key:1},[l.value?(b(),Q(r(n),{key:0,algolia:((g=r(a).search)==null?void 0:g.options)??r(a).algolia,onVnodeBeforeMount:f[2]||(f[2]=C=>i.value=!0)},null,8,["algolia"])):V("",!0),i.value?V("",!0):(b(),x("div",ix,[N(km,{onClick:o})]))],64)):V("",!0)])}}}),sx=Z({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=be();return(n,a)=>r(t).socialLinks?(b(),Q(bd,{key:0,class:"VPNavBarSocialLinks",links:r(t).socialLinks},null,8,["links"])):V("",!0)}}),rx=re(sx,[["__scopeId","data-v-72f459c3"]]),ux=["href","rel","target"],cx=["innerHTML"],dx={key:2},mx=Z({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=be(),{hasSidebar:a}=Yn(),{currentLang:l}=_o(),i=F(()=>{var u;return typeof n.value.logoLink=="string"?n.value.logoLink:(u=n.value.logoLink)==null?void 0:u.link}),o=F(()=>{var u;return typeof n.value.logoLink=="string"||(u=n.value.logoLink)==null?void 0:u.rel}),s=F(()=>{var u;return typeof n.value.logoLink=="string"||(u=n.value.logoLink)==null?void 0:u.target});return(u,d)=>(b(),x("div",{class:Y(["VPNavBarTitle",{"has-sidebar":r(a)}])},[w("a",{class:"title",href:i.value??r(pd)(r(l).link),rel:o.value,target:s.value},[O(u.$slots,"nav-bar-title-before",{},void 0,!0),r(n).logo?(b(),Q(Os,{key:0,class:"logo",image:r(n).logo},null,8,["image"])):V("",!0),r(n).siteTitle?(b(),x("span",{key:1,innerHTML:r(n).siteTitle},null,8,cx)):r(n).siteTitle===void 0?(b(),x("span",dx,U(r(t).title),1)):V("",!0),O(u.$slots,"nav-bar-title-after",{},void 0,!0)],8,ux)],2))}}),px=re(mx,[["__scopeId","data-v-b0934674"]]),fx={class:"items"},hx={class:"title"},vx=Z({__name:"VPNavBarTranslations",setup(e){const{theme:t}=be(),{localeLinks:n,currentLang:a}=_o({correspondingLink:!0});return(l,i)=>r(n).length&&r(a).label?(b(),Q(gd,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:r(t).langMenuLabel||"Change language"},{default:z(()=>[w("div",fx,[w("p",hx,U(r(a).label),1),(b(!0),x(ie,null,ye(r(n),o=>(b(),Q(Sr,{key:o.link,item:o},null,8,["item"]))),128))])]),_:1},8,["label"])):V("",!0)}}),gx=re(vx,[["__scopeId","data-v-715d9207"]]),bx={class:"wrapper"},yx={class:"container"},Sx={class:"title"},xx={class:"content"},_x={class:"content-body"},Cx=Z({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=Lf(),{hasSidebar:a}=Yn(),{frontmatter:l}=be(),i=H({});return dd(()=>{i.value={"has-sidebar":a.value,home:l.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(o,s)=>(b(),x("div",{class:Y(["VPNavBar",i.value])},[w("div",bx,[w("div",yx,[w("div",Sx,[N(px,null,{"nav-bar-title-before":z(()=>[O(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":z(()=>[O(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),w("div",xx,[w("div",_x,[O(o.$slots,"nav-bar-content-before",{},void 0,!0),N(ox,{class:"search"}),N(J1,{class:"menu"}),N(gx,{class:"translations"}),N(s1,{class:"appearance"}),N(rx,{class:"social-links"}),N(H1,{class:"extra"}),O(o.$slots,"nav-bar-content-after",{},void 0,!0),N(q1,{class:"hamburger",active:e.isScreenOpen,onClick:s[0]||(s[0]=u=>o.$emit("toggle-screen"))},null,8,["active"])])])])]),s[1]||(s[1]=w("div",{class:"divider"},[w("div",{class:"divider-line"})],-1))],2))}}),kx=re(Cx,[["__scopeId","data-v-4dd2485b"]]),wx={key:0,class:"VPNavScreenAppearance"},Nx={class:"text"},Tx=Z({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=be();return(a,l)=>r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(b(),x("div",wx,[w("p",Nx,U(r(n).darkModeSwitchLabel||"Appearance"),1),N(hd)])):V("",!0)}}),zx=re(Tx,[["__scopeId","data-v-74df9a14"]]),Ux=["innerHTML"],$x=Z({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=ui("close-screen");return(n,a)=>(b(),Q(wn,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:r(t)},{default:z(()=>[w("span",{innerHTML:e.item.text},null,8,Ux)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ex=re($x,[["__scopeId","data-v-cdb49edc"]]),Ax=["innerHTML"],Rx=Z({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=ui("close-screen");return(n,a)=>(b(),Q(wn,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:r(t)},{default:z(()=>[w("span",{innerHTML:e.item.text},null,8,Ax)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Jf=re(Rx,[["__scopeId","data-v-b1603663"]]),Bx={class:"VPNavScreenMenuGroupSection"},Ox={key:0,class:"title"},Zx=Z({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(b(),x("div",Bx,[e.text?(b(),x("p",Ox,U(e.text),1)):V("",!0),(b(!0),x(ie,null,ye(e.items,a=>(b(),Q(Jf,{key:a.text,item:a},null,8,["item"]))),128))]))}}),Dx=re(Zx,[["__scopeId","data-v-c381fc92"]]),Mx=["aria-controls","aria-expanded"],jx=["innerHTML"],Vx=["id"],Lx={key:0,class:"item"},Hx={key:1,class:"item"},Ix={key:2,class:"group"},Fx=Z({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=H(!1),a=F(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function l(){n.value=!n.value}return(i,o)=>(b(),x("div",{class:Y(["VPNavScreenMenuGroup",{open:n.value}])},[w("button",{class:"button","aria-controls":a.value,"aria-expanded":n.value,onClick:l},[w("span",{class:"button-text",innerHTML:e.text},null,8,jx),o[0]||(o[0]=w("span",{class:"vpi-plus button-icon"},null,-1))],8,Mx),w("div",{id:a.value,class:"items"},[(b(!0),x(ie,null,ye(e.items,s=>(b(),x(ie,{key:JSON.stringify(s)},["link"in s?(b(),x("div",Lx,[N(Jf,{item:s},null,8,["item"])])):"component"in s?(b(),x("div",Hx,[(b(),Q(tn(s.component),pa({ref_for:!0},s.props,{"screen-menu":""}),null,16))])):(b(),x("div",Ix,[N(Dx,{text:s.text,items:s.items},null,8,["text","items"])]))],64))),128))],8,Vx)],2))}}),qx=re(Fx,[["__scopeId","data-v-bf4d52fa"]]),Gx={key:0,class:"VPNavScreenMenu"},Yx=Z({__name:"VPNavScreenMenu",setup(e){const{theme:t}=be();return(n,a)=>r(t).nav?(b(),x("nav",Gx,[(b(!0),x(ie,null,ye(r(t).nav,l=>(b(),x(ie,{key:JSON.stringify(l)},["link"in l?(b(),Q(Ex,{key:0,item:l},null,8,["item"])):"component"in l?(b(),Q(tn(l.component),pa({key:1,ref_for:!0},l.props,{"screen-menu":""}),null,16)):(b(),Q(qx,{key:2,text:l.text||"",items:l.items},null,8,["text","items"]))],64))),128))])):V("",!0)}}),Kx=Z({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=be();return(n,a)=>r(t).socialLinks?(b(),Q(bd,{key:0,class:"VPNavScreenSocialLinks",links:r(t).socialLinks},null,8,["links"])):V("",!0)}}),Px={class:"list"},Xx=Z({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=_o({correspondingLink:!0}),a=H(!1);function l(){a.value=!a.value}return(i,o)=>r(t).length&&r(n).label?(b(),x("div",{key:0,class:Y(["VPNavScreenTranslations",{open:a.value}])},[w("button",{class:"title",onClick:l},[o[0]||(o[0]=w("span",{class:"vpi-languages icon lang"},null,-1)),L(" "+U(r(n).label)+" ",1),o[1]||(o[1]=w("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),w("ul",Px,[(b(!0),x(ie,null,ye(r(t),s=>(b(),x("li",{key:s.link,class:"item"},[N(wn,{class:"link",href:s.link},{default:z(()=>[L(U(s.text),1)]),_:2},1032,["href"])]))),128))])],2)):V("",!0)}}),Qx=re(Xx,[["__scopeId","data-v-26e9d429"]]),Jx={class:"container"},Wx=Z({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=H(null),n=If(br?document.body:null);return(a,l)=>(b(),Q(So,{name:"fade",onEnter:l[0]||(l[0]=i=>n.value=!0),onAfterLeave:l[1]||(l[1]=i=>n.value=!1)},{default:z(()=>[e.open?(b(),x("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[w("div",Jx,[O(a.$slots,"nav-screen-content-before",{},void 0,!0),N(Yx,{class:"menu"}),N(Qx,{class:"translations"}),N(zx,{class:"appearance"}),N(Kx,{class:"social-links"}),O(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):V("",!0)]),_:3}))}}),e_=re(Wx,[["__scopeId","data-v-134880d5"]]),t_={key:0,class:"VPNav"},n_=Z({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:a}=Q0(),{frontmatter:l}=be(),i=F(()=>l.value.navbar!==!1);return yr("close-screen",n),ke(()=>{br&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(o,s)=>i.value?(b(),x("header",t_,[N(kx,{"is-screen-open":r(t),onToggleScreen:r(a)},{"nav-bar-title-before":z(()=>[O(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":z(()=>[O(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":z(()=>[O(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":z(()=>[O(o.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),N(e_,{open:r(t)},{"nav-screen-content-before":z(()=>[O(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":z(()=>[O(o.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):V("",!0)}}),a_=re(n_,[["__scopeId","data-v-0ca8dbb3"]]),l_=["role","tabindex"],i_={key:1,class:"items"},o_=Z({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:a,isLink:l,isActiveLink:i,hasActiveLink:o,hasChildren:s,toggle:u}=tS(F(()=>t.item)),d=F(()=>s.value?"section":"div"),p=F(()=>l.value?"a":"div"),c=F(()=>s.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),f=F(()=>l.value?void 0:"button"),g=F(()=>[[`level-${t.depth}`],{collapsible:a.value},{collapsed:n.value},{"is-link":l.value},{"is-active":i.value},{"has-active":o.value}]);function C(_){"key"in _&&_.key!=="Enter"||!t.item.link&&u()}function S(){t.item.link&&u()}return(_,v)=>{const h=Ra("VPSidebarItem",!0);return b(),Q(tn(d.value),{class:Y(["VPSidebarItem",g.value])},{default:z(()=>[e.item.text?(b(),x("div",pa({key:0,class:"item",role:f.value},wy(e.item.items?{click:C,keydown:C}:{},!0),{tabindex:e.item.items&&0}),[v[1]||(v[1]=w("div",{class:"indicator"},null,-1)),e.item.link?(b(),Q(wn,{key:0,tag:p.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:z(()=>[(b(),Q(tn(c.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(b(),Q(tn(c.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(b(),x("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:S,onKeydown:rs(S,["enter"]),tabindex:"0"},[...v[0]||(v[0]=[w("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):V("",!0)],16,l_)):V("",!0),e.item.items&&e.item.items.length?(b(),x("div",i_,[e.depth<5?(b(!0),x(ie,{key:0},ye(e.item.items,y=>(b(),Q(h,{key:y.text,item:y,depth:e.depth+1},null,8,["item","depth"]))),128)):V("",!0)])):V("",!0)]),_:1},8,["class"])}}}),s_=re(o_,[["__scopeId","data-v-8cc228a4"]]),r_=Z({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=H(!0);let n=null;return on(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),md(()=>{n!=null&&(clearTimeout(n),n=null)}),(a,l)=>(b(!0),x(ie,null,ye(e.items,i=>(b(),x("div",{key:i.text,class:Y(["group",{"no-transition":t.value}])},[N(s_,{item:i,depth:0},null,8,["item"])],2))),128))}}),u_=re(r_,[["__scopeId","data-v-21ed53d7"]]),c_={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},d_=Z({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=Yn(),a=e,l=H(null),i=If(br?document.body:null);Ke([a,l],()=>{var s;a.open?(i.value=!0,(s=l.value)==null||s.focus()):i.value=!1},{immediate:!0,flush:"post"});const o=H(0);return Ke(t,()=>{o.value+=1},{deep:!0}),(s,u)=>r(n)?(b(),x("aside",{key:0,class:Y(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:l,onClick:u[0]||(u[0]=dn(()=>{},["stop"]))},[u[2]||(u[2]=w("div",{class:"curtain"},null,-1)),w("nav",c_,[u[1]||(u[1]=w("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),O(s.$slots,"sidebar-nav-before",{},void 0,!0),(b(),Q(u_,{items:r(t),key:o.value},null,8,["items"])),O(s.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):V("",!0)}}),m_=re(d_,[["__scopeId","data-v-e1a02360"]]),p_=Z({__name:"VPSkipLink",setup(e){const{theme:t}=be(),n=gr(),a=H();Ke(()=>n.path,()=>a.value.focus());function l({target:i}){const o=document.getElementById(decodeURIComponent(i.hash).slice(1));if(o){const s=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",s)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",s),o.focus(),window.scrollTo(0,0)}}return(i,o)=>(b(),x(ie,null,[w("span",{ref_key:"backToTop",ref:a,tabindex:"-1"},null,512),w("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:l},U(r(t).skipToContentLabel||"Skip to content"),1)],64))}}),f_=re(p_,[["__scopeId","data-v-eb1c66e5"]]),h_=Z({__name:"Layout",setup(e){const{isOpen:t,open:n,close:a}=Yn(),l=gr();Ke(()=>l.path,a),eS(t,a);const{frontmatter:i}=be(),o=Ff(),s=F(()=>!!o["home-hero-image"]);return yr("hero-image-slot-exists",s),(u,d)=>{const p=Ra("Content");return r(i).layout!==!1?(b(),x("div",{key:0,class:Y(["Layout",r(i).pageClass])},[O(u.$slots,"layout-top",{},void 0,!0),N(f_),N(Ly,{class:"backdrop",show:r(t),onClick:r(a)},null,8,["show","onClick"]),N(a_,null,{"nav-bar-title-before":z(()=>[O(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":z(()=>[O(u.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":z(()=>[O(u.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":z(()=>[O(u.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":z(()=>[O(u.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":z(()=>[O(u.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),N(X0,{open:r(t),onOpenMenu:r(n)},null,8,["open","onOpenMenu"]),N(m_,{open:r(t)},{"sidebar-nav-before":z(()=>[O(u.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":z(()=>[O(u.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),N(B0,null,{"page-top":z(()=>[O(u.$slots,"page-top",{},void 0,!0)]),"page-bottom":z(()=>[O(u.$slots,"page-bottom",{},void 0,!0)]),"not-found":z(()=>[O(u.$slots,"not-found",{},void 0,!0)]),"home-hero-before":z(()=>[O(u.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":z(()=>[O(u.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":z(()=>[O(u.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":z(()=>[O(u.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":z(()=>[O(u.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":z(()=>[O(u.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":z(()=>[O(u.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":z(()=>[O(u.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":z(()=>[O(u.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":z(()=>[O(u.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":z(()=>[O(u.$slots,"doc-before",{},void 0,!0)]),"doc-after":z(()=>[O(u.$slots,"doc-after",{},void 0,!0)]),"doc-top":z(()=>[O(u.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":z(()=>[O(u.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":z(()=>[O(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":z(()=>[O(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":z(()=>[O(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":z(()=>[O(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":z(()=>[O(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":z(()=>[O(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),N(j0),O(u.$slots,"layout-bottom",{},void 0,!0)],2)):(b(),Q(p,{key:1}))}}}),v_=re(h_,[["__scopeId","data-v-143d77da"]]),Wf={Layout:v_,enhanceApp:({app:e})=>{e.component("Badge",My)}},g_=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function b_(e){return!(e.hasAttribute("disabled")||e.getAttribute("tabindex")==="-1"||(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLButtonElement)&&e.disabled)}function eh(e,t){if(e.key!=="Tab")return!1;const n=Array.from(t.querySelectorAll(g_)).filter(b_),a=document.activeElement,l=a!==null&&a!==t&&t.contains(a);if(n.length===0)return e.preventDefault(),t.focus(),!0;const i=n[0],o=n[n.length-1];return e.shiftKey?!l||a===i?(e.preventDefault(),o.focus(),!0):!1:!l||a===o?(e.preventDefault(),i.focus(),!0):!1}const y_=["日","一","二","三","四","五","六"];function th(e,t,n){const a=String(t).padStart(2,"0"),l=String(n).padStart(2,"0");return`${e}-${a}-${l}`}function cs(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const[t,n,a]=e.split("-").map(Number),l=new Date(t,n-1,a);return l.getFullYear()===t&&l.getMonth()===n-1&&l.getDate()===a}function wm(e){if(!cs(e))return null;const[t,n,a]=e.split("-").map(Number);return{year:t,month:n,day:a}}function S_(){const e=new Date;return th(e.getFullYear(),e.getMonth()+1,e.getDate())}function nh(e,t){const n=new Date(e,t-1,1).getDay(),a=S_(),l=[];for(let i=0;i<42;i+=1){const o=new Date(e,t-1,1-n+i),s=th(o.getFullYear(),o.getMonth()+1,o.getDate());l.push({date:s,day:o.getDate(),inMonth:o.getMonth()===t-1,isToday:s===a})}return l}function ah(e={}){const t=e.value!==void 0,n=cs(e.value??e.defaultValue)?e.value??e.defaultValue:null,a=n?wm(n):null,l=new Date,i={value:n,open:!1,viewYear:(a==null?void 0:a.year)??l.getFullYear(),viewMonth:(a==null?void 0:a.month)??l.getMonth()+1,disabled:e.disabled??!1},o=e.onChange,s=e.onClear,u=new Set,d=()=>{const c={...i};u.forEach(f=>f(c))},p=()=>{const c=i.value?wm(i.value):null,f=new Date;i.viewYear=(c==null?void 0:c.year)??f.getFullYear(),i.viewMonth=(c==null?void 0:c.month)??f.getMonth()+1};return{subscribe(c){return u.add(c),()=>{u.delete(c)}},getState:()=>({...i}),updateOptions(c){let f=!1;const g=c.disabled??i.disabled;if(g!==i.disabled&&(i.disabled=g,f=!0,i.disabled&&i.open&&(i.open=!1)),c.value!==void 0){const C=cs(c.value)?c.value:null;C!==i.value&&(i.value=C,f=!0,i.open&&p())}f&&d()},toggleOpen(){i.disabled||(i.open=!i.open,i.open&&p(),d())},close(){i.open&&(i.open=!1,d())},prevMonth(){i.viewMonth===1?(i.viewMonth=12,i.viewYear-=1):i.viewMonth-=1,d()},nextMonth(){i.viewMonth===12?(i.viewMonth=1,i.viewYear+=1):i.viewMonth+=1,d()},select(c){i.disabled||!cs(c)||(t||(i.value=c),i.open=!1,d(),o==null||o(c))},clear(){!t&&i.value!==null&&(i.value=null,d()),s==null||s()}}}const x_=["January","February","March","April","May","June","July","August","September","October","November","December"],__={modal:{ok:"OK",cancel:"Cancel"},popconfirm:{confirm:"OK",cancel:"Cancel"},table:{empty:"No data",selectAll:"Select all",selectRow:e=>`Select row ${e+1}`},pagination:{nav:"Pagination",prev:"Previous page",next:"Next page"},datePicker:{panel:"Select date",prevMonth:"Previous month",nextMonth:"Next month",titleFormat:(e,t)=>`${x_[t-1]} ${e}`,weekdays:["Su","Mo","Tu","We","Th","Fr","Sa"],placeholder:"Select date"},skeleton:{loading:"Loading"},breadcrumb:{nav:"Breadcrumb"},select:{searchPlaceholder:"Search...",searchAriaLabel:"Search options",triggerPlaceholder:"Select"}},lh={modal:{ok:"确认",cancel:"取消"},popconfirm:{confirm:"确定",cancel:"取消"},table:{empty:"暂无数据",selectAll:"全选",selectRow:e=>`选择第 ${e+1} 行`},pagination:{nav:"分页",prev:"上一页",next:"下一页"},datePicker:{panel:"选择日期",prevMonth:"上个月",nextMonth:"下个月",titleFormat:(e,t)=>`${e} 年 ${String(t).padStart(2,"0")} 月`,weekdays:y_,placeholder:"请选择日期"},skeleton:{loading:"加载中"},breadcrumb:{nav:"面包屑"},select:{searchPlaceholder:"搜索...",searchAriaLabel:"搜索选项",triggerPlaceholder:"请选择"}},C_="zh-CN",Du=new Map([["zh-CN",lh],["en-US",__]]);let Zs=C_,to=lh;const Mu=new Set;function Ta(){return Zs}function ih(){return to}function oh(){Mu.forEach(e=>e(to))}function sh(e){return Mu.add(e),()=>{Mu.delete(e)}}function ci(e){const t=Du.get(e);!t||e===Zs||(Zs=e,to=t,oh())}function rh(e,t){if(e.length===0||t===null||typeof t!="object")return;const n=Du.get(e)??to,a={...n},l=a,i=n,o=t;let s=!1;Object.keys(t).forEach(u=>{const d=o[u];d===null||typeof d!="object"||(l[u]={...i[u],...d},s=!0)}),s&&(Du.set(e,a),e===Zs&&(to=a,oh()))}function di(e){if(typeof window>"u")return()=>{};let t=null;const n=()=>{t===null&&(t=window.requestAnimationFrame(()=>{t=null,e()}))};return window.addEventListener("scroll",n,!0),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n,!0),window.removeEventListener("resize",n),t!==null&&(window.cancelAnimationFrame(t),t=null)}}const $i="data-theme",k_=new Set,Co=()=>typeof document<"u";function no(){return Co()&&document.documentElement.getAttribute($i)==="dark"?"dark":"light"}function xr(e){if(!Co())return;const t=document.documentElement;if(e==="dark"?t.getAttribute($i)==="dark":!t.hasAttribute($i))return;e==="dark"?t.setAttribute($i,"dark"):t.removeAttribute($i);const n=e;k_.forEach(a=>a(n))}function uh(){if(!Co())return"light";const e=no()==="dark"?"light":"dark";return xr(e),e}const ju=new Set;function ch(e){if(!Co())return;const t=document.documentElement;Object.entries(e).forEach(([n,a])=>{!n.startsWith("--")||typeof a!="string"||(t.style.setProperty(n,a),ju.add(n))})}function dh(){if(!Co())return;const e=document.documentElement;ju.forEach(t=>{e.style.removeProperty(t)}),ju.clear()}function mh(e={}){const t={visible:!0,closable:e.closable??!1};let n=e.onClose;const a=new Set,l=()=>{const i={...t};a.forEach(o=>o(i))};return{subscribe(i){return a.add(i),()=>{a.delete(i)}},getState:()=>({...t}),updateOptions(i){let o=!1;i.closable!==void 0&&i.closable!==t.closable&&(t.closable=i.closable,o=!0),i.onClose!==void 0&&(n=i.onClose),o&&l()},handleClose(){t.visible&&(t.visible=!1,l(),n==null||n())}}}function ph(e={}){const t={failed:!1};let n=e.src,a=e.onError;const l=new Set,i=()=>{const o={...t};l.forEach(s=>s(o))};return{subscribe(o){return l.add(o),()=>{l.delete(o)}},getState:()=>({...t}),updateOptions(o){let s=!1;o.src!==void 0&&o.src!==n&&(n=o.src,t.failed&&(t.failed=!1,s=!0)),o.onError!==void 0&&(a=o.onError),s&&i()},handleError(){n!==void 0&&(t.failed||(t.failed=!0,i(),a==null||a()))}}}function fh(e={}){const t={visible:!1,text:null},n=new Set;function a(i){const o=i.dot??!1,s=i.showZero??!1,u=typeof i.max=="number"&&Number.isFinite(i.max)&&i.max>0?i.max:99,d=i.count;if(o){t.visible=!0,t.text=null;return}if(typeof d!="number"||!Number.isFinite(d)){t.visible=!1,t.text=null;return}if(d===0&&!s){t.visible=!1,t.text=null;return}t.visible=!0,t.text=d>u?`${u}+`:String(d)}a(e);const l=()=>{const i={...t};n.forEach(o=>o(i))};return{subscribe(i){return n.add(i),()=>{n.delete(i)}},getState:()=>({...t}),updateOptions(i){const o={count:i.count!==void 0?i.count:e.count,max:i.max!==void 0?i.max:e.max,dot:i.dot!==void 0?i.dot:e.dot,showZero:i.showZero!==void 0?i.showZero:e.showZero},s=t.visible,u=t.text;a(o),(t.visible!==s||t.text!==u)&&l()}}}const w_="/";function Nm(e){return e||w_}function hh(e={}){const t={items:e.items??[],separator:Nm(e.separator)},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){const i=l.items!==void 0?l.items:t.items,o=l.separator!==void 0?Nm(l.separator):t.separator,s=i!==t.items||o!==t.separator;t.items=i,t.separator=o,s&&a()},selectItem(l){var i;const o=t.items[l];o&&(l===t.items.length-1||o.disabled||(i=e.onItemClick)==null||i.call(e,o,l))}}}function vh(e={}){const t={disabled:e.disabled??!1,loading:e.loading??!1};let n=e.onClick;const a=new Set,l=()=>{const i={...t};a.forEach(o=>o(i))};return{subscribe(i){return a.add(i),()=>{a.delete(i)}},getState:()=>({...t}),updateOptions(i){let o=!1;i.disabled!==void 0&&i.disabled!==t.disabled&&(t.disabled=i.disabled,o=!0),i.loading!==void 0&&i.loading!==t.loading&&(t.loading=i.loading,o=!0),i.onClick!==void 0&&(n=i.onClick),o&&l()},handleClick(i){t.disabled||t.loading||n==null||n(i)}}}function gh(e={}){const t=e.value!==void 0,n={checked:e.value??e.defaultValue??!1,disabled:e.disabled??!1,indeterminate:e.indeterminate??!1};let a=e.onChange;const l=new Set,i=()=>{const o={...n};l.forEach(s=>s(o))};return{subscribe(o){return l.add(o),()=>{l.delete(o)}},getState:()=>({...n}),updateOptions(o){let s=!1;o.value!==void 0&&o.value!==n.checked&&(n.checked=o.value,s=!0),o.disabled!==void 0&&o.disabled!==n.disabled&&(n.disabled=o.disabled,s=!0),o.indeterminate!==void 0&&o.indeterminate!==n.indeterminate&&(n.indeterminate=o.indeterminate,s=!0),o.onChange!==void 0&&(a=o.onChange),s&&i()},toggle(){if(n.disabled)return;const o=n.indeterminate?!0:!n.checked;t||(n.checked=o,n.indeterminate&&(n.indeterminate=!1),i()),a==null||a(o)}}}function Tm(e){const t=(e==null?void 0:e.trim())??"";return t===""?null:t}function bh(e={}){const t={description:Tm(e.description)},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){if(l.description===void 0)return;const i=Tm(l.description);i!==t.description&&(t.description=i,a())}}}function rl(e){return e==null||e===""?!0:Array.isArray(e)?e.length===0:typeof e=="object"?Object.keys(e).length===0:!1}function N_(e){return typeof e=="string"?new RegExp(e):e}const T_={required:"该字段为必填项",email:"请输入有效的邮箱地址",phone:"请输入有效的手机号码",number:"请输入有效的数字",url:"请输入有效的 URL",length:"长度不符合要求",regex:"格式不正确",custom:"校验未通过"};function z_(e){return!rl(e)}const U_=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;function $_(e){return rl(e)?!0:typeof e=="string"&&U_.test(e)}const E_=/^1[3-9]\d{9}$/;function A_(e){return rl(e)?!0:typeof e=="string"&&E_.test(e)}function R_(e,t,n,a){if(rl(e))return!0;const l=Number(e);return!(Number.isNaN(l)||a!==void 0&&l!==a||t!==void 0&&l<t||n!==void 0&&l>n)}function B_(e,t,n,a){if(rl(e))return!0;const l=Array.isArray(e)?e.length:String(e).length;return!(a!==void 0&&l!==a||t!==void 0&&l<t||n!==void 0&&l>n)}function O_(e,t){return rl(e)?!0:N_(t).test(String(e))}const Z_=/^https?:\/\/[^\s]+$/;function D_(e){return rl(e)?!0:typeof e=="string"&&Z_.test(e)}async function M_(e,t,n,a){if(e.trigger&&a&&a!=="submit"&&e.trigger!==a||e.when&&!e.when(n))return null;const l=()=>e.message??T_[e.type??"custom"];switch(e.type){case"required":return z_(t)?null:l();case"email":return $_(t)?null:l();case"phone":return A_(t)?null:l();case"number":return R_(t,e.min,e.max,e.exact)?null:l();case"length":return B_(t,e.min,e.max,e.exact)?null:l();case"regex":return e.pattern?O_(t,e.pattern)?null:l():null;case"url":return D_(t)?null:l();case"custom":default:{if(!e.validator)return null;const i=await e.validator(t,n);return i===!0?null:typeof i=="string"?i:l()}}}async function zm(e,t,n,a,l=!1){const i=[];for(const o of e){const s=await M_(o,t,n,a);if(s&&(i.push(s),l))break}return{valid:i.length===0,errors:i}}function yh(e){return e?e.some(t=>t.type==="required"):!1}function Sh(e={}){const t={...e.initialValues??{}},n={values:{...t},errors:{},validating:!1,submitting:!1,disabled:e.disabled??!1,readonly:e.readonly??!1};let a={...e.rules??{}},l=e.onSubmit,i=e.onSubmitFail,o=e.onValuesChange;const s=new Map,u=new Set,d=()=>{const c={values:{...n.values},errors:Object.fromEntries(Object.entries(n.errors).map(([f,g])=>[f,[...g]])),validating:n.validating,submitting:n.submitting,disabled:n.disabled,readonly:n.readonly};u.forEach(f=>f(c))},p=c=>{const f=s.get(c)??[],g=a[c]??[];return[...f,...g]};return{subscribe(c){return u.add(c),()=>{u.delete(c)}},getState:()=>({values:{...n.values},errors:Object.fromEntries(Object.entries(n.errors).map(([c,f])=>[c,[...f]])),validating:n.validating,submitting:n.submitting,disabled:n.disabled,readonly:n.readonly}),updateOptions(c){let f=!1;c.disabled!==void 0&&c.disabled!==n.disabled&&(n.disabled=c.disabled,f=!0),c.readonly!==void 0&&c.readonly!==n.readonly&&(n.readonly=c.readonly,f=!0),c.rules!==void 0&&(a={...c.rules}),c.onSubmit!==void 0&&(l=c.onSubmit),c.onSubmitFail!==void 0&&(i=c.onSubmitFail),c.onValuesChange!==void 0&&(o=c.onValuesChange),f&&d()},setFieldValue(c,f){n.values[c]!==f&&(n.values[c]=f,o==null||o({[c]:f},{...n.values}),d())},getFieldValue(c){return n.values[c]},getFieldsValue(){return{...n.values}},setFieldsValue(c){n.values={...n.values,...c},o==null||o({...c},{...n.values}),d()},async validateField(c,f){const g=p(c);if(g.length===0)return delete n.errors[c],d(),[];n.validating=!0,d();const C=n.values[c],S=await zm(g,C,{...n.values},f);return n.validating=!1,S.errors.length>0?n.errors[c]=S.errors:delete n.errors[c],d(),S.errors},async validate(c){const f=new Set([...Object.keys(a),...s.keys()]),g={};let C=!0;n.validating=!0,d();for(const S of f){const _=p(S);if(_.length===0)continue;const v=n.values[S],h=await zm(_,v,{...n.values},c);h.errors.length>0&&(g[S]=h.errors,C=!1)}return n.validating=!1,n.errors=g,d(),{valid:C,errors:g,values:{...n.values}}},resetFields(c){if(c&&c.length>0)for(const f of c)t[f]!==void 0?n.values[f]=t[f]:delete n.values[f],delete n.errors[f];else n.values={...t},n.errors={};d()},clearValidate(c){if(c&&c.length>0)for(const f of c)delete n.errors[f];else n.errors={};d()},async submit(){const c=await this.validate("submit");if(c.valid){n.submitting=!0,d();try{await(l==null?void 0:l(c.values))}finally{n.submitting=!1,d()}}else i==null||i(c.errors);return c},registerField(c,f){f&&f.length>0?s.set(c,f):s.set(c,[])},unregisterField(c){s.delete(c),delete n.errors[c],d()}}}function xh(e={}){const t=e.value!==void 0,n={value:e.value??e.defaultValue??"",focused:!1,disabled:e.disabled??!1,readonly:e.readonly??!1};let a=e.onInput,l=e.onChange,i=e.onFocus,o=e.onBlur,s=e.onClear;const u=new Set,d=()=>{const c={...n};u.forEach(f=>f(c))},p=()=>!n.disabled&&!n.readonly;return{subscribe(c){return u.add(c),()=>{u.delete(c)}},getState:()=>({...n}),updateOptions(c){let f=!1;c.value!==void 0&&c.value!==n.value&&(n.value=c.value,f=!0),c.disabled!==void 0&&c.disabled!==n.disabled&&(n.disabled=c.disabled,f=!0),c.readonly!==void 0&&c.readonly!==n.readonly&&(n.readonly=c.readonly,f=!0),c.onInput!==void 0&&(a=c.onInput),c.onChange!==void 0&&(l=c.onChange),c.onFocus!==void 0&&(i=c.onFocus),c.onBlur!==void 0&&(o=c.onBlur),c.onClear!==void 0&&(s=c.onClear),f&&d()},handleInput(c){p()&&(t||(n.value=c,d()),a==null||a(c))},handleChange(c){p()&&(l==null||l(c))},handleFocus(c){n.focused=!0,d(),i==null||i(c)},handleBlur(c){n.focused=!1,d(),o==null||o(c)},handleClear(){p()&&(t||(n.value="",d()),a==null||a(""),s==null||s())}}}function Um(e){return typeof e=="number"&&Number.isFinite(e)?e:-1/0}function $m(e){return typeof e=="number"&&Number.isFinite(e)?e:1/0}function Em(e){return typeof e!="number"||!Number.isFinite(e)||e<=0?1:e}function Am(e){return typeof e!="number"||!Number.isInteger(e)||e<0||e>20?null:e}function j_(e){const t=String(e),n=t.indexOf(".");return n===-1?0:t.length-n-1}function _h(e={}){const t={value:null,disabled:e.disabled??!1,min:Um(e.min),max:$m(e.max),step:Em(e.step),precision:Am(e.precision)};t.min>t.max&&([t.min,t.max]=[t.max,t.min]);const n=new Set,a=()=>{const s={...t};n.forEach(u=>u(s))};function l(s){if(s==null||typeof s!="number"||!Number.isFinite(s))return null;const u=t.precision!==null?Number(s.toFixed(t.precision)):s;return Math.min(t.max,Math.max(t.min,u))}function i(){return e.value!==void 0}function o(s){var u;t.value!==s&&(i()||(t.value=s,a()),(u=e.onChange)==null||u.call(e,s))}return t.value=l(i()?e.value:e.defaultValue),{subscribe(s){return n.add(s),()=>{n.delete(s)}},getState:()=>({...t}),updateOptions(s){s.min!==void 0&&(t.min=Um(s.min)),s.max!==void 0&&(t.max=$m(s.max)),t.min>t.max&&([t.min,t.max]=[t.max,t.min]),s.step!==void 0&&(t.step=Em(s.step)),s.precision!==void 0&&(t.precision=Am(s.precision)),s.disabled!==void 0&&(t.disabled=s.disabled),s.value!==void 0?t.value=l(s.value):(s.min!==void 0||s.max!==void 0||s.precision!==void 0)&&(t.value=l(t.value)),a()},stepValue(s){if(t.disabled)return;const u=l(t.value??e.defaultValue??0)??0,d=10**Math.max(j_(t.step),t.precision??0),p=(Math.round(u*d)+s*Math.round(t.step*d))/d;o(l(p))},commitText(s){if(t.disabled)return;const u=s.trim();let d;if(u==="")d=null;else{const p=Number(u);d=Number.isFinite(p)?p:null}o(l(d))}}}const Mo={type:"info",duration:3e3,closable:!1,maxCount:5};function Ch(e={}){const t={items:[]};let n=e.maxCount??Mo.maxCount,a=1;const l=new Map,i=new Map,o=new Set,s=()=>{const p={items:[...t.items]};o.forEach(c=>c(p))},u=p=>{const c=l.get(p);if(c!==void 0&&(clearTimeout(c),l.delete(p)),!t.items.some(g=>g.id===p))return;const f=i.get(p);i.delete(p),t.items=t.items.filter(g=>g.id!==p),f==null||f(),s()},d=p=>{t.items.length<=p||t.items.slice(0,t.items.length-p).forEach(c=>u(c.id))};return{subscribe(p){return o.add(p),()=>{o.delete(p)}},getState:()=>({items:[...t.items]}),updateOptions(p){let c=!1;if(p.maxCount!==void 0&&p.maxCount!==n&&(n=p.maxCount,c=!0),t.items.length>n){d(n);return}c&&s()},open(p){const c=p.duration??Mo.duration,f=C=>{if(c<=0)return;const S=setTimeout(()=>{l.delete(C),u(C)},c);l.set(C,S)};if(p.key!==void 0){const C=t.items.find(S=>S.key===p.key);if(C){const S=l.get(C.id);return S!==void 0&&(clearTimeout(S),l.delete(C.id)),t.items=t.items.map(_=>_.id===C.id?{..._,type:p.type??_.type,content:p.content,closable:p.closable??_.closable,icon:p.icon??_.icon}:_),p.onClose!==void 0&&i.set(C.id,p.onClose),s(),f(C.id),{close:()=>u(C.id)}}}const g=a;return a+=1,d(n-1),t.items=[...t.items,{id:g,type:p.type??Mo.type,content:p.content,closable:p.closable??Mo.closable,icon:p.icon,key:p.key}],p.onClose!==void 0&&i.set(g,p.onClose),s(),f(g),{close:()=>{u(g)}}},close(p){u(p)},closeAll(){if(l.forEach(c=>clearTimeout(c)),l.clear(),t.items.length===0)return;const p=[...i.values()];i.clear(),t.items=[],p.forEach(c=>c()),s()}}}function kh(e={}){const t={visible:e.visible??e.defaultVisible??!1,closable:e.closable??!0};let n=e.maskClosable??!0,a=e.closeOnEsc??!0,l=e.onOpen,i=e.onClose,o=e.onOk,s=e.onCancel;const u=new Set,d=()=>{const c={...t};u.forEach(f=>f(c))},p=c=>{t.visible!==c&&(t.visible=c,d(),c?l==null||l():i==null||i())};return{subscribe(c){return u.add(c),()=>{u.delete(c)}},getState:()=>({...t}),updateOptions(c){let f=!1;c.visible!==void 0&&c.visible!==t.visible&&(t.visible=c.visible,f=!0),c.closable!==void 0&&c.closable!==t.closable&&(t.closable=c.closable,f=!0),c.maskClosable!==void 0&&(n=c.maskClosable),c.closeOnEsc!==void 0&&(a=c.closeOnEsc),c.onOpen!==void 0&&(l=c.onOpen),c.onClose!==void 0&&(i=c.onClose),c.onOk!==void 0&&(o=c.onOk),c.onCancel!==void 0&&(s=c.onCancel),f&&d()},open:()=>p(!0),close:()=>p(!1),toggle:()=>p(!t.visible),handleOk(){o==null||o(),p(!1)},handleCancel(){s==null||s(),p(!1)},handleMaskClick(){n&&p(!1)},handleEsc(){a&&p(!1)}}}const Ei=(e,t)=>Math.min(Math.max(Math.floor(e),1),t);function wh(e={}){const t=e.value!==void 0,n=(p,c)=>Math.max(1,Math.ceil(Math.max(p??0,0)/c)),a=p=>Math.max(1,Math.floor(p??10)),l=a(e.pageSize),i=n(e.total,l),o={page:Ei(e.value??e.defaultValue??1,i),pageCount:i,disabled:e.disabled??!1};let s=e.onChange;const u=new Set,d=()=>{const p={...o};u.forEach(c=>c(p))};return{subscribe(p){return u.add(p),()=>{u.delete(p)}},getState:()=>({...o}),updateOptions(p){let c=!1;const f=a(p.pageSize??l),g=n(p.total??e.total,f);g!==o.pageCount&&(o.pageCount=g,c=!0);const C=p.disabled??o.disabled;if(C!==o.disabled&&(o.disabled=C,c=!0),p.value!==void 0){const _=Ei(p.value,o.pageCount);_!==o.page&&(o.page=_,c=!0)}const S=Ei(o.page,o.pageCount);S!==o.page&&(o.page=S,c=!0),p.onChange!==void 0&&(s=p.onChange),c&&d()},goTo(p){if(o.disabled)return;const c=Ei(p,o.pageCount);c!==o.page&&(t||(o.page=c,d()),s==null||s(c))},prev(){o.page<=1||this.goTo(o.page-1)},next(){o.page>=o.pageCount||this.goTo(o.page+1)}}}function Nh(e,t){const n=Math.max(1,t),a=Ei(e,n);return n<=7?Array.from({length:n},(l,i)=>i+1):a<=4?[1,2,3,4,5,"ellipsis-next",n]:a>=n-3?[1,"ellipsis-prev",n-4,n-3,n-2,n-1,n]:[1,"ellipsis-prev",a-1,a,a+1,"ellipsis-next",n]}const V_=["top","bottom","left","right"];function Rm(e){return e!==void 0&&V_.includes(e)?e:"top"}function Th(e={}){const t={open:!1,placement:Rm(e.placement),disabled:e.disabled??!1},n=new Set,a=()=>{const i={...t};n.forEach(o=>o(i))};function l(){return t.open?(t.open=!1,a(),!0):!1}return{subscribe(i){return n.add(i),()=>{n.delete(i)}},getState:()=>({...t}),updateOptions(i){const o=i.placement!==void 0?Rm(i.placement):t.placement,s=i.disabled!==void 0?i.disabled:t.disabled;let u=o!==t.placement||s!==t.disabled;t.placement=o,t.disabled=s,s&&t.open&&(t.open=!1,u=!0),u&&a()},toggle(){t.disabled||(t.open=!t.open,a())},confirm(){var i;l()&&((i=e.onConfirm)==null||i.call(e))},cancel(){var i;l()&&((i=e.onCancel)==null||i.call(e))},close(){l()}}}function Bm(e){return typeof e!="number"||!Number.isFinite(e)?0:Math.min(100,Math.max(0,e))}function Om(e){return typeof e!="number"||!Number.isFinite(e)||e<=0?6:e}function zh(e={}){const t={percent:Bm(e.percent),strokeWidth:Om(e.strokeWidth),status:"normal"};t.status=a(t,e.status);const n=new Set;function a(i,o){return o==="success"||o==="error"?o:i.percent>=100?"success":"normal"}const l=()=>{const i={...t};n.forEach(o=>o(i))};return{subscribe(i){return n.add(i),()=>{n.delete(i)}},getState:()=>({...t}),updateOptions(i){const o=Bm(i.percent!==void 0?i.percent:t.percent),s=Om(i.strokeWidth!==void 0?i.strokeWidth:t.strokeWidth),u=a({percent:o},i.status!==void 0?i.status:void 0),d=o!==t.percent||s!==t.strokeWidth||u!==t.status;t.percent=o,t.strokeWidth=s,t.status=u,d&&l()}}}function Uh(e={}){const t=e.value!==void 0,n={value:e.value??e.defaultValue??null,disabled:e.disabled??!1};let a=e.onChange;const l=new Set,i=()=>{const o={...n};l.forEach(s=>s(o))};return{subscribe(o){return l.add(o),()=>{l.delete(o)}},getState:()=>({...n}),updateOptions(o){let s=!1;o.value!==void 0&&o.value!==n.value&&(n.value=o.value,s=!0),o.disabled!==void 0&&o.disabled!==n.disabled&&(n.disabled=o.disabled,s=!0),o.onChange!==void 0&&(a=o.onChange),s&&i()},select(o){n.disabled||(!t&&n.value!==o&&(n.value=o,i()),a==null||a(o))}}}function $h(e={}){const t={disabled:e.disabled??!1},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){l.disabled!==void 0&&l.disabled!==t.disabled&&(t.disabled=l.disabled,a())}}}function Zm(e,t){return t?Array.isArray(e)?[...e]:e==null?[]:[e]:Array.isArray(e)?e[0]??null:e??null}function L_(e,t){return Array.isArray(e)||Array.isArray(t)?!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,a)=>n===t[a]):e===t}function Eh(e={}){const t=e.value!==void 0;let n=e.multiple??!1,a=e.searchable??!1;const l={value:Zm(e.value??e.defaultValue,n),open:!1,activeIndex:-1,disabled:e.disabled??!1,searchQuery:"",filteredOptions:e.options??[]};let i=e.onChange,o=e.onClear,s=e.options??[],u=e.clearable??!1;const d=new Set,p=()=>{const S={...l,value:Array.isArray(l.value)?[...l.value]:l.value,filteredOptions:[...l.filteredOptions]};d.forEach(_=>_(S))},c=()=>{if(!a)return s;const S=l.searchQuery.trim().toLowerCase();return S===""?s:s.filter(_=>_.label.toLowerCase().includes(S))},f=(S,_)=>{var v;const h=l.filteredOptions.length;if(h===0)return-1;const y=S===-1?_===1?0:h-1:S+_;for(let k=0;k<h;k+=1){const E=((y+_*k)%h+h)%h;if(!((v=l.filteredOptions[E])!=null&&v.disabled))return E}return-1},g=()=>Array.isArray(l.value)?l.value:[],C=S=>n?g().includes(S):l.value===S;return{subscribe(S){return d.add(S),()=>{d.delete(S)}},getState:()=>({...l,value:Array.isArray(l.value)?[...l.value]:l.value,filteredOptions:[...l.filteredOptions]}),updateOptions(S){let _=!1;S.value!==void 0&&!L_(S.value,l.value)&&(l.value=Zm(S.value,n),_=!0),S.disabled!==void 0&&S.disabled!==l.disabled&&(l.disabled=S.disabled,l.disabled&&(l.open=!1,l.activeIndex=-1),_=!0),S.options!==void 0&&(s=S.options),S.clearable!==void 0&&(u=S.clearable),S.multiple!==void 0&&(n=S.multiple),S.searchable!==void 0&&(a=S.searchable),S.onChange!==void 0&&(i=S.onChange),S.onClear!==void 0&&(o=S.onClear);const v=c();v!==l.filteredOptions&&(l.filteredOptions=v,_=!0),_&&p()},toggleOpen(){var S;if(!l.disabled){if(l.open)l.open=!1,l.activeIndex=-1,l.searchQuery!==""&&(l.searchQuery="",l.filteredOptions=c());else{l.open=!0,l.filteredOptions=c();const _=l.filteredOptions.findIndex(v=>C(v.value));l.activeIndex=_!==-1&&!((S=l.filteredOptions[_])!=null&&S.disabled)?_:f(-1,1)}p()}},close(){!l.open&&l.activeIndex===-1&&l.searchQuery===""||(l.open=!1,l.activeIndex=-1,l.searchQuery!==""&&(l.searchQuery="",l.filteredOptions=c()),p())},select(S){if(l.disabled)return;const _=s.find(v=>v.value===S);if(!(!_||_.disabled)){if(n){const v=g(),h=v.includes(S)?v.filter(y=>y!==S):[...v,S];t||(l.value=h,p()),i==null||i(h);return}l.open=!1,l.activeIndex=-1,l.searchQuery!==""&&(l.searchQuery="",l.filteredOptions=c()),l.value!==S?(t||(l.value=S,p()),i==null||i(S)):p()}},clear(){if(!l.disabled){if(n){if(g().length===0)return;t||(l.value=[],p()),o==null||o();return}!u||l.value===null||(t||(l.value=null,p()),o==null||o())}},moveHighlight(S){if(l.disabled||!l.open||l.filteredOptions.length===0)return;const _=f(l.activeIndex,S);_!==-1&&_!==l.activeIndex&&(l.activeIndex=_,p())},confirmHighlight(){if(l.activeIndex===-1)return;const S=l.filteredOptions[l.activeIndex];S&&this.select(S.value)},setSearch(S){!a||l.searchQuery===S||(l.searchQuery=S,l.filteredOptions=c(),l.activeIndex=l.filteredOptions.length>0?f(-1,1):-1,p())}}}function Dm(e){return typeof e!="number"||!Number.isFinite(e)||e<=0?3:Math.floor(e)}function Ah(e={}){const t={loading:e.loading??!0,avatar:e.avatar??!1,rows:Dm(e.rows)},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){const i=l.loading!==void 0?l.loading:t.loading,o=l.avatar!==void 0?l.avatar:t.avatar,s=l.rows!==void 0?Dm(l.rows):t.rows,u=i!==t.loading||o!==t.avatar||s!==t.rows;t.loading=i,t.avatar=o,t.rows=s,u&&a()}}}const H_=["sm","md","lg"];function Mm(e){return e!==void 0&&H_.includes(e)?e:"md"}function jm(e){return e||null}function Rh(e={}){const t={size:Mm(e.size),spinning:e.spinning??!0,tip:jm(e.tip)},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){const i=l.size!==void 0?Mm(l.size):t.size,o=l.spinning!==void 0?l.spinning:t.spinning,s=l.tip!==void 0?jm(l.tip):t.tip,u=i!==t.size||o!==t.spinning||s!==t.tip;t.size=i,t.spinning=o,t.tip=s,u&&a()}}}function Bh(e={}){const t=e.value!==void 0,n={checked:e.value??e.defaultValue??!1,disabled:e.disabled??!1,loading:e.loading??!1};let a=e.onChange;const l=new Set,i=()=>{const o={...n};l.forEach(s=>s(o))};return{subscribe(o){return l.add(o),()=>{l.delete(o)}},getState:()=>({...n}),updateOptions(o){let s=!1;o.value!==void 0&&o.value!==n.checked&&(n.checked=o.value,s=!0),o.disabled!==void 0&&o.disabled!==n.disabled&&(n.disabled=o.disabled,s=!0),o.loading!==void 0&&o.loading!==n.loading&&(n.loading=o.loading,s=!0),o.onChange!==void 0&&(a=o.onChange),s&&i()},toggle(){if(n.disabled||n.loading)return;const o=!n.checked;t||(n.checked=o,i()),a==null||a(o)}}}function Oh(e){return e==null?"":String(e)}function la(e,t,n){if(n===void 0)return t;const a=e[n];return typeof a=="string"||typeof a=="number"?a:t}const I_=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e-t;const n=String(e??""),a=String(t??"");return n<a?-1:n>a?1:0};function Zh(e={}){let t=e.dataSource??[],n=e.rowKey,a=e.rowSelection;const l={sortKey:null,sortOrder:null,sortedData:t,selectedRowKeys:[],allSelected:!1,indeterminate:!1};let i=e.onSortChange;const o=new Set,s=new Set,u=()=>{const C={...l};s.forEach(S=>S(C))},d=()=>{if(l.sortKey===null||l.sortOrder===null){l.sortedData=t;return}const C=l.sortKey,S=l.sortOrder==="asc"?1:-1;l.sortedData=[...t].sort((_,v)=>I_(_[C],v[C])*S)},p=()=>{if((a==null?void 0:a.getCheckboxDisabled)===void 0)return t.map((_,v)=>la(_,v,n));const C=a.getCheckboxDisabled,S=[];return t.forEach((_,v)=>{C(_,v)||S.push(la(_,v,n))}),S},c=C=>{const S=p(),_=S.filter(v=>C.includes(v)).length;l.allSelected=S.length>0&&_===S.length,l.indeterminate=_>0&&_<S.length},f=()=>{const C=a==null?void 0:a.selectedRowKeys,S=C!==void 0?C:[...o];l.selectedRowKeys=S,c(S)},g=C=>{if((a==null?void 0:a.onChange)===void 0)return;const S=new Set(C),_=t.filter((v,h)=>S.has(la(v,h,n)));a.onChange(C,_)};return(a==null?void 0:a.selectedRowKeys)!==void 0&&(l.selectedRowKeys=a.selectedRowKeys,c(a.selectedRowKeys)),{subscribe(C){return s.add(C),()=>{s.delete(C)}},getState:()=>({...l,selectedRowKeys:[...l.selectedRowKeys]}),updateOptions(C){let S=!1;C.dataSource!==void 0&&C.dataSource!==t&&(t=C.dataSource,d(),a!==void 0&&f(),S=!0),C.rowKey!==void 0&&C.rowKey!==n&&(n=C.rowKey,a!==void 0&&f(),S=!0),C.rowSelection!==void 0&&C.rowSelection!==a&&(a=C.rowSelection,f(),S=!0),C.onSortChange!==void 0&&(i=C.onSortChange),S&&u()},toggleSort(C){let S;l.sortKey!==C?(l.sortKey=C,S="asc"):l.sortOrder==="asc"?S="desc":(l.sortOrder==="desc"&&(l.sortKey=null),S=null),l.sortOrder=S,d(),u(),i==null||i({key:C,order:S})},toggleRow(C){var S;if(a===void 0)return;const _=t.findIndex((k,E)=>la(k,E,n)===C);if(_!==-1){const k=t[_];if(((S=a.getCheckboxDisabled)==null?void 0:S.call(a,k,_))===!0)return}const v=a.selectedRowKeys,h=v!==void 0?[...v]:[...o],y=h.indexOf(C);y===-1?h.push(C):h.splice(y,1),v===void 0&&(o.clear(),h.forEach(k=>o.add(k)),f(),u()),g(h)},toggleAll(){if(a===void 0)return;const C=a.selectedRowKeys,S=C!==void 0?C:[...o],_=p(),v=_.length>0&&_.every(h=>S.includes(h))?S.filter(h=>!_.includes(h)):[...new Set([...S,..._])];C===void 0&&(o.clear(),v.forEach(h=>o.add(h)),f(),u()),g(v)}}}function Dh(e={}){const t=e.value!==void 0,n={value:e.value??e.defaultValue??null};let a=e.items??[],l=e.onChange;const i=new Set,o=()=>{const u={...n};i.forEach(d=>d(u))},s=(u,d)=>{var p;const c=a.length;if(c===0)return-1;const f=u===-1?d===1?0:c-1:u+d;for(let g=0;g<c;g+=1){const C=((f+d*g)%c+c)%c;if(!((p=a[C])!=null&&p.disabled))return C}return-1};return{subscribe(u){return i.add(u),()=>{i.delete(u)}},getState:()=>({...n}),updateOptions(u){let d=!1;u.value!==void 0&&u.value!==n.value&&(n.value=u.value,d=!0),u.items!==void 0&&(a=u.items),u.onChange!==void 0&&(l=u.onChange),d&&o()},activate(u){const d=a.find(p=>p.value===u);!d||d.disabled||n.value!==u&&(t||(n.value=u,o()),l==null||l(u))},moveActive(u){if(a.length===0)return;const d=a.findIndex(c=>c.value===n.value),p=s(d,u);p!==-1&&this.activate(a[p].value)}}}function Mh(e={}){const t={visible:!0,closable:e.closable??!1};let n=e.onClose;const a=new Set,l=()=>{const i={...t};a.forEach(o=>o(i))};return{subscribe(i){return a.add(i),()=>{a.delete(i)}},getState:()=>({...t}),updateOptions(i){let o=!1;i.closable!==void 0&&i.closable!==t.closable&&(t.closable=i.closable,o=!0),i.onClose!==void 0&&(n=i.onClose),o&&l()},handleClose(){t.visible&&(t.visible=!1,l(),n==null||n())}}}function jh(e={}){const t={open:!1,disabled:e.disabled??!1},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){let i=!1;l.disabled!==void 0&&l.disabled!==t.disabled&&(t.disabled=l.disabled,i=!0,t.disabled&&t.open&&(t.open=!1)),i&&a()},show(){t.disabled||t.open||(t.open=!0,a())},hide(){t.open&&(t.open=!1,a())}}}function _r(e={}){let t=Math.max(0,Math.floor(e.itemCount??0)),n=Math.max(1,e.itemHeight??32),a=Math.max(0,e.viewportHeight??0),l=Math.max(0,Math.floor(e.overscan??5)),i=0;const o={startIndex:0,endIndex:0,offsetY:0,fillerHeight:0,totalHeight:0,scrollTop:0},s=new Set,u=()=>{const d=t*n,p=Math.max(0,d-a),c=Math.min(Math.max(0,i),p),f=a>0?Math.ceil(a/n):0,g=Math.floor(c/n),C=Math.min(Math.max(0,g-l),Math.max(0,t-1)),S=t===0?-1:Math.min(t-1,g+f+l),_=C*n,v=Math.max(0,d-_-(S-C+1)*n);if(o.startIndex===C&&o.endIndex===S&&o.offsetY===_&&o.fillerHeight===v&&o.totalHeight===d&&o.scrollTop===c)return;o.startIndex=C,o.endIndex=S,o.offsetY=_,o.fillerHeight=v,o.totalHeight=d,o.scrollTop=c;const h={...o};s.forEach(y=>y(h))};return u(),{subscribe(d){return s.add(d),()=>{s.delete(d)}},getState:()=>({...o}),updateOptions(d){let p=!1;if(d.itemCount!==void 0){const c=Math.max(0,Math.floor(d.itemCount));c!==t&&(t=c,p=!0)}if(d.itemHeight!==void 0){const c=Math.max(1,d.itemHeight);c!==n&&(n=c,p=!0)}if(d.viewportHeight!==void 0){const c=Math.max(0,d.viewportHeight);c!==a&&(a=c,p=!0)}if(d.overscan!==void 0){const c=Math.max(0,Math.floor(d.overscan));c!==l&&(l=c,p=!0)}p&&u()},scrollTo(d){i=d,u()},scrollToIndex(d,p="auto"){if(t===0)return;const c=Math.min(Math.max(0,Math.floor(d)),t-1)*n,f=c+n;if(p==="auto"&&c>=o.startIndex*n&&f<=(o.endIndex+1)*n)return;const g=Math.max(0,t*n-a);let C;p==="end"?C=f-a:C=c,i=Math.min(Math.max(0,C),g),u()}}}function Vm(e,t,n){return n<t?t:Math.min(Math.max(e,t),n)}function mi(e,t,n,a){const l=a.gap??8,i=a.viewportPadding??8,o=a.placement,s=e.top-n.top,u=n.bottom-e.bottom,d=e.left-n.left,p=n.right-e.right,c=t.height+l,f=t.width+l;let g=o;o==="top"&&s<c&&u>s?g="bottom":o==="bottom"&&u<c&&s>u?g="top":o==="left"&&d<f&&p>d?g="right":o==="right"&&p<f&&d>p&&(g="left");let C=0;if(g==="top"||g==="bottom"){const S=e.left+(e.width-t.width)/2,_=n.left+i,v=n.right-i-t.width;C=Vm(S,_,Math.max(_,v))-S}else{const S=e.top+(e.height-t.height)/2,_=n.top+i,v=n.bottom-i-t.height;C=Vm(S,_,Math.max(_,v))-S}return{placement:g,shift:C}}function pi(){return typeof window>"u"?{top:0,right:0,bottom:0,left:0}:{top:0,left:0,right:window.innerWidth,bottom:window.innerHeight}}const oe={close:'<path d="M6 6l12 12M18 6L6 18" />',clear:'<circle cx="12" cy="12" r="10" /><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" />',loading:'<circle cx="12" cy="12" r="9" stroke-width="2.5" stroke-dasharray="40 60" />',check:'<path d="M4 12l5 5L20 7" />',search:'<circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />',plus:'<path d="M12 5v14M5 12h14" />',minus:'<path d="M5 12h14" />',"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7" />',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7" />',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7" />',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7" />',calendar:'<rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" />',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />',inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />',info:'<circle cx="12" cy="12" r="9" /><path d="M12 8h.01" /><path d="M12 11v5" />',success:'<circle cx="12" cy="12" r="9" /><path d="M8.5 12.2l2.4 2.4 4.6-5.2" />',warning:'<path d="M10.3 4.1L2.8 17a2 2 0 001.7 3h15a2 2 0 001.7-3L13.7 4.1a2 2 0 00-3.4 0z" /><path d="M12 9v4" /><path d="M12 16.5h.01" />',error:'<circle cx="12" cy="12" r="9" /><path d="M15 9l-6 6M9 9l6 6" />'},F_=["disabled"],q_={key:0,class:"xui-button__loading-icon"},G_=["innerHTML"],Y_={key:1,class:"xui-button__icon"},K_={class:"xui-button__content"},K=Z({__name:"Button",props:{type:{default:"default"},size:{default:"md"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},className:{},style:{}},emits:["click"],setup(e,{expose:t,emit:n}){const a=n,l=vh({disabled:e.disabled,loading:e.loading,onClick:c=>a("click",c)}),i=H(l.getState()),o=l.subscribe(c=>{i.value=c});Ne(()=>{o()}),ke(()=>{l.updateOptions({disabled:e.disabled,loading:e.loading})});const s=c=>{l.handleClick(c)},u=nn("btn");return t({focus:()=>{var c;(c=u.value)==null||c.focus()},setLoading:c=>{l.updateOptions({loading:c})}}),(c,f)=>(b(),x("button",{ref:"btn",type:"button",class:Y([e.className,"xui-button",`xui-button--${e.type}`,`xui-button--${e.size}`,{"is-disabled":i.value.disabled,"is-loading":i.value.loading,"is-block":e.block}]),style:he(e.style),disabled:i.value.disabled||i.value.loading,onClick:s},[i.value.loading?(b(),x("span",q_,[O(c.$slots,"loadingIcon",{},()=>[(b(),x("svg",{class:"xui-button__spinner",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-linecap":"round",innerHTML:r(oe).loading},null,8,G_))])])):V("",!0),!i.value.loading&&c.$slots.icon?(b(),x("span",Y_,[O(c.$slots,"icon")])):V("",!0),w("span",K_,[O(c.$slots,"default")])],14,F_))}}),P_={key:0,class:"xui-input__prefix"},X_=["id","type","value","placeholder","disabled","readonly","maxlength"],Q_=["innerHTML"],J_={key:2,class:"xui-input__suffix"},it=Z({__name:"Input",props:Bs({type:{default:"text"},placeholder:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxLength:{},clearable:{type:Boolean,default:!1},className:{},style:{}},{value:{default:""},valueModifiers:{}}),emits:Bs(["input","change","focus","blur","clear"],["update:value"]),setup(e,{expose:t,emit:n}){const a=n,l=qf(e,"value"),i=nn("input"),o=Na(),s=xh({value:l.value,disabled:e.disabled,readonly:e.readonly,onInput:v=>{l.value=v,a("input",v)},onChange:v=>a("change",v),onFocus:v=>a("focus",v),onBlur:v=>a("blur",v),onClear:()=>{l.value="",a("clear")}}),u=H(s.getState()),d=s.subscribe(v=>{u.value=v});Ne(()=>{d()}),ke(()=>{s.updateOptions({value:l.value,disabled:e.disabled,readonly:e.readonly})});const p=v=>{const h=v.target;s.handleInput(h.value)},c=v=>{const h=v.target;s.handleChange(h.value)},f=v=>{s.handleFocus(v)},g=v=>{s.handleBlur(v)},C=()=>{s.handleClear()};return t({focus:()=>{var v;(v=i.value)==null||v.focus()},blur:()=>{var v;(v=i.value)==null||v.blur()},clear:C}),(v,h)=>(b(),x("div",{class:Y([e.className,"xui-input",{"is-disabled":u.value.disabled,"is-readonly":u.value.readonly,"is-focused":u.value.focused}]),style:he(e.style)},[v.$slots.prefix?(b(),x("span",P_,[O(v.$slots,"prefix")])):V("",!0),w("input",{id:r(o),ref:"input",type:e.type,value:u.value.value,placeholder:e.placeholder,disabled:u.value.disabled,readonly:u.value.readonly,maxlength:e.maxLength,class:"xui-input__inner",onInput:p,onChange:c,onFocus:f,onBlur:g},null,40,X_),e.clearable&&u.value.value&&!u.value.disabled&&!u.value.readonly?(b(),x("span",{key:1,class:"xui-input__clear",onClick:C},[O(v.$slots,"clearIcon",{},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(oe).clear},null,8,Q_))])])):V("",!0),v.$slots.suffix?(b(),x("span",J_,[O(v.$slots,"suffix")])):V("",!0)],6))}}),W_=["aria-checked","aria-disabled","disabled"],eC={class:"xui-switch__core"},tC={key:0,class:"xui-switch__text-wrap"},nC=["title"],aC=["title"],lC={class:"xui-switch__thumb"},iC=["innerHTML"],Et=Z({__name:"Switch",props:{value:{type:Boolean,default:void 0},defaultValue:{type:Boolean,default:void 0},size:{default:"md"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},checkedText:{},uncheckedText:{},className:{},style:{}},emits:["change","update:value"],setup(e,{expose:t,emit:n}){const a=e,{value:l,defaultValue:i,disabled:o,loading:s}=a,u=n,d=Bh({value:l,defaultValue:i,disabled:o,loading:s,onChange:_=>{u("update:value",_),u("change",_)}}),p=H(d.getState()),c=d.subscribe(_=>{p.value=_});Ne(()=>{c()}),ke(()=>{d.updateOptions({value:a.value,disabled:a.disabled,loading:a.loading})});const f=()=>{d.toggle()},g=nn("btn");return t({focus:()=>{var _;(_=g.value)==null||_.focus()},toggle:()=>{d.toggle()}}),(_,v)=>(b(),x("button",{ref:"btn",type:"button",role:"switch",class:Y([e.className,"xui-switch",`xui-switch--${a.size}`,{"is-checked":p.value.checked,"is-disabled":p.value.disabled,"is-loading":p.value.loading,"xui-switch--has-text":!!(a.checkedText||a.uncheckedText)}]),style:he(e.style),"aria-checked":p.value.checked,"aria-disabled":p.value.disabled||p.value.loading,disabled:p.value.disabled||p.value.loading,onClick:f},[w("span",eC,[a.checkedText||a.uncheckedText?(b(),x("span",tC,[a.checkedText?(b(),x("span",{key:0,class:"xui-switch__text xui-switch__text--checked",title:a.checkedText,"aria-hidden":"true"},U(a.checkedText),9,nC)):V("",!0),a.uncheckedText?(b(),x("span",{key:1,class:"xui-switch__text xui-switch__text--unchecked",title:a.uncheckedText,"aria-hidden":"true"},U(a.uncheckedText),9,aC)):V("",!0)])):V("",!0),w("span",lC,[p.value.loading?O(_.$slots,"loadingIcon",{},()=>[(b(),x("svg",{class:"xui-switch__spinner","aria-hidden":"true",viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round",innerHTML:r(oe).loading},null,8,iC))],void 0,0):V("",!0)])])],14,W_))}}),oC=["checked","disabled",".indeterminate","aria-disabled"],sC={class:"xui-checkbox__box","aria-hidden":"true"},rC=["innerHTML"],uC=["innerHTML"],cC={key:0,class:"xui-checkbox__label"},ds=Z({__name:"Checkbox",props:{value:{type:Boolean,default:void 0},defaultValue:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},className:{},style:{}},emits:["change","update:value"],setup(e,{expose:t,emit:n}){const a=e,{value:l,defaultValue:i,disabled:o,indeterminate:s}=a,u=n,d=gh({value:l,defaultValue:i,disabled:o,indeterminate:s,onChange:_=>{u("update:value",_),u("change",_)}}),p=H(d.getState()),c=d.subscribe(_=>{p.value=_});Ne(()=>{c()}),ke(()=>{d.updateOptions({value:a.value,disabled:a.disabled,indeterminate:a.indeterminate})});const f=()=>{d.toggle()},g=nn("input");return t({focus:()=>{var _;(_=g.value)==null||_.focus()},toggle:()=>{d.toggle()}}),(_,v)=>(b(),x("label",{class:Y([e.className,"xui-checkbox",{"is-checked":p.value.checked,"is-disabled":p.value.disabled,"is-indeterminate":p.value.indeterminate}]),style:he(e.style)},[w("input",{ref:"input",class:"xui-checkbox__input",type:"checkbox",checked:p.value.checked,disabled:p.value.disabled,".indeterminate":p.value.indeterminate,"aria-disabled":p.value.disabled,onChange:f},null,40,oC),w("span",sC,[p.value.indeterminate?O(_.$slots,"indeterminateIcon",{},()=>[(b(),x("svg",{class:"xui-checkbox__icon","aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round",innerHTML:r(oe).minus},null,8,rC))],void 0,0):p.value.checked?O(_.$slots,"checkIcon",{},()=>[(b(),x("svg",{class:"xui-checkbox__icon","aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round",innerHTML:r(oe).check},null,8,uC))],void 0,1):V("",!0)]),_.$slots.default?(b(),x("span",cC,[O(_.$slots,"default")])):V("",!0)],6))}}),dC=["innerHTML"],bn=Z({__name:"Tag",props:{type:{default:"default"},size:{default:"md"},closable:{type:Boolean,default:!1},className:{},style:{}},emits:["close"],setup(e,{emit:t}){const n=t,a=Mh({closable:e.closable,onClose:()=>n("close")}),l=H(a.getState()),i=a.subscribe(s=>{l.value=s});Ne(()=>{i()}),ke(()=>{a.updateOptions({closable:e.closable})});const o=()=>{a.handleClose()};return(s,u)=>l.value.visible?(b(),x("span",{key:0,class:Y([e.className,"xui-tag",`xui-tag--${e.type}`,`xui-tag--${e.size}`]),style:he(e.style)},[O(s.$slots,"default"),l.value.closable?(b(),x("button",{key:0,type:"button",class:"xui-tag__close","aria-label":"close",onClick:o},[O(s.$slots,"closeIcon",{},()=>[(b(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(oe).close},null,8,dC))])])):V("",!0)],6)):V("",!0)}}),mC={key:0,class:"xui-alert__icon","aria-hidden":"true"},pC=["innerHTML"],fC={class:"xui-alert__content"},hC={key:0,class:"xui-alert__title"},vC={key:1,class:"xui-alert__description"},gC=["innerHTML"],_l=Z({__name:"Alert",props:{type:{default:"info"},title:{},description:{},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},className:{},style:{}},emits:["close"],setup(e,{emit:t}){const n=t,a=mh({closable:e.closable,onClose:()=>n("close")}),l=H(a.getState()),i=a.subscribe(s=>{l.value=s});Ne(()=>{i()}),ke(()=>{a.updateOptions({closable:e.closable})});const o=()=>{a.handleClose()};return(s,u)=>l.value.visible?(b(),x("div",{key:0,class:Y([e.className,"xui-alert",`xui-alert--${e.type}`]),style:he(e.style),role:"alert"},[e.showIcon?(b(),x("div",mC,[O(s.$slots,"icon",{},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(oe)[e.type]},null,8,pC))])])):V("",!0),w("div",fC,[e.title||s.$slots.title?(b(),x("div",hC,[O(s.$slots,"title",{},()=>[L(U(e.title),1)])])):V("",!0),s.$slots.default||e.description?(b(),x("div",vC,[O(s.$slots,"default",{},()=>[L(U(e.description),1)])])):V("",!0)]),l.value.closable?(b(),x("button",{key:1,type:"button",class:"xui-alert__close","aria-label":"close",onClick:o},[O(s.$slots,"closeIcon",{},()=>[(b(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(oe).close},null,8,gC))])])):V("",!0)],6)):V("",!0)}}),Vh=Symbol("xui-radio-group");let Lm=0;function bC(){return Lm+=1,`xui-radio-group-${Lm}`}const yC=["name","value","checked","disabled","aria-disabled"],SC={key:0,class:"xui-radio__label"},ms=Z({__name:"Radio",props:{value:{},disabled:{type:Boolean,default:!1},className:{},style:{}},setup(e){const t=e,n=$h({disabled:t.disabled}),a=H(n.getState()),l=n.subscribe(d=>{a.value=d});Ne(()=>{l()}),ke(()=>{n.updateOptions({disabled:t.disabled})});const i=ui(Vh,null),o=F(()=>i?i.groupValue.value===t.value:!1),s=F(()=>a.value.disabled||(i?i.groupDisabled.value:!1)),u=d=>{const p=d.target;if(s.value){p.checked=o.value;return}if(!i){p.checked=!1;return}i.select(t.value),p.checked=i.groupValue.value===t.value};return(d,p)=>{var c;return b(),x("label",{class:Y([e.className,"xui-radio",{"is-checked":o.value,"is-disabled":s.value}]),style:he(e.style)},[w("input",{class:"xui-radio__input",type:"radio",name:(c=r(i))==null?void 0:c.name,value:t.value,checked:o.value,disabled:s.value,"aria-disabled":s.value,onChange:u},null,40,yC),p[0]||(p[0]=w("span",{class:"xui-radio__dot","aria-hidden":"true"},null,-1)),d.$slots.default?(b(),x("span",SC,[O(d.$slots,"default")])):V("",!0)],6)}}}),Vu=Z({__name:"RadioGroup",props:{value:{default:void 0},defaultValue:{default:void 0},disabled:{type:Boolean,default:!1},options:{default:void 0},className:{},style:{}},emits:["change","update:value"],setup(e,{emit:t}){const n=e,a=t,{value:l,defaultValue:i,disabled:o}=n,s=Uh({value:l,defaultValue:i,disabled:o,onChange:p=>{a("update:value",p),a("change",p)}}),u=H(s.getState()),d=s.subscribe(p=>{u.value=p});return Ne(()=>{d()}),ke(()=>{s.updateOptions({value:n.value,disabled:n.disabled})}),yr(Vh,{name:bC(),groupValue:F(()=>u.value.value),groupDisabled:F(()=>u.value.disabled),select:p=>{s.select(p)}}),(p,c)=>(b(),x("div",{class:Y(["xui-radio-group",e.className]),style:he(e.style),role:"radiogroup"},[n.options&&n.options.length>0?(b(!0),x(ie,{key:0},ye(n.options,f=>(b(),Q(ms,{key:f.value,value:f.value,disabled:f.disabled},{default:z(()=>[L(U(f.label),1)]),_:2},1032,["value","disabled"]))),128)):O(p.$slots,"default",{},void 0,void 0,1)],6))}}),xC=["aria-valuenow"],_C={class:"xui-progress__svg",viewBox:"0 0 100 100","aria-hidden":"true"},CC=["r","stroke-width"],kC=["r","stroke-width","stroke-dasharray","stroke-dashoffset"],wC={key:0,class:"xui-progress__text xui-progress__text--circle"},NC={key:0,class:"xui-progress__text"},ji=Z({__name:"Progress",props:{percent:{default:0},type:{default:"line"},strokeWidth:{default:6},showText:{type:Boolean,default:!0},status:{default:"normal"},className:{},style:{}},setup(e){const t=e,n=zh({percent:t.percent,strokeWidth:t.strokeWidth,status:t.status}),a=H(n.getState()),l=n.subscribe(s=>{a.value=s});Ne(()=>{l()}),ke(()=>{n.updateOptions({percent:t.percent,strokeWidth:t.strokeWidth,status:t.status})});const i=F(()=>`${Math.round(a.value.percent)}%`),o=F(()=>{const s=(100-a.value.strokeWidth)/2,u=2*Math.PI*s;return{radius:s,circumference:u,offset:u*(1-a.value.percent/100)}});return(s,u)=>(b(),x("div",{class:Y([e.className,"xui-progress",`xui-progress--${t.type}`,`is-${a.value.status}`]),style:he(e.style),role:"progressbar","aria-valuenow":Math.round(a.value.percent),"aria-valuemin":"0","aria-valuemax":"100"},[t.type==="circle"?(b(),x(ie,{key:0},[(b(),x("svg",_C,[w("circle",{class:"xui-progress__track",cx:50,cy:50,r:o.value.radius,fill:"none","stroke-width":a.value.strokeWidth},null,8,CC),w("circle",{class:"xui-progress__bar",cx:50,cy:50,r:o.value.radius,fill:"none","stroke-width":a.value.strokeWidth,"stroke-linecap":"round","stroke-dasharray":o.value.circumference,"stroke-dashoffset":o.value.offset,transform:"rotate(-90 50 50)"},null,8,kC)])),t.showText?(b(),x("span",wC,U(i.value),1)):V("",!0)],64)):(b(),x(ie,{key:1},[w("div",{class:"xui-progress__track",style:he({height:`${a.value.strokeWidth}px`})},[w("div",{class:"xui-progress__bar",style:he({width:`${a.value.percent}%`})},null,4)],4),t.showText?(b(),x("span",NC,U(i.value),1)):V("",!0)],64))],14,xC))}}),TC=["aria-hidden"],zC=["aria-hidden"],Cl=Z({__name:"Badge",props:{count:{default:void 0},max:{default:99},dot:{type:Boolean,default:!1},showZero:{type:Boolean,default:!1},className:{},style:{}},setup(e){const t=e,n=fh({count:t.count,max:t.max,dot:t.dot,showZero:t.showZero}),a=H(n.getState()),l=n.subscribe(i=>{a.value=i});return Ne(()=>{l()}),ke(()=>{n.updateOptions({count:t.count,max:t.max,dot:t.dot,showZero:t.showZero})}),(i,o)=>i.$slots.default?(b(),x("span",{key:0,class:Y(["xui-badge",e.className]),style:he(e.style)},[O(i.$slots,"default"),a.value.visible?(b(),x("sup",{key:0,class:Y(["xui-badge__sup",{"is-dot":t.dot}]),"aria-hidden":t.dot||void 0},U(a.value.text),11,TC)):V("",!0)],6)):a.value.visible?(b(),x("sup",{key:1,class:Y(["xui-badge__sup","xui-badge__sup--standalone",{"is-dot":t.dot}]),"aria-hidden":t.dot||void 0},U(a.value.text),11,zC)):V("",!0)}}),UC=["src","alt"],$C={key:1,class:"xui-avatar__inner"},EC=["innerHTML"],ia=Z({__name:"Avatar",props:{size:{default:"md"},shape:{default:"circle"},src:{default:void 0},alt:{default:void 0},className:{},style:{}},emits:["error"],setup(e,{emit:t}){const n=e,a=t,l=ph({src:n.src,onError:()=>{a("error")}}),i=H(l.getState()),o=l.subscribe(s=>{i.value=s});return Ne(()=>{o()}),ke(()=>{l.updateOptions({src:n.src})}),(s,u)=>(b(),x("span",{class:Y([e.className,"xui-avatar",`xui-avatar--${n.size}`,`xui-avatar--${n.shape}`]),style:he(e.style)},[n.src&&!i.value.failed?(b(),x("img",{key:0,class:"xui-avatar__img",src:n.src,alt:n.alt??"",onError:u[0]||(u[0]=d=>r(l).handleError())},null,40,UC)):s.$slots.default?(b(),x("span",$C,[O(s.$slots,"default")])):O(s.$slots,"icon",{},()=>[(b(),x("svg",{class:"xui-avatar__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(oe).user},null,8,EC))],void 0,2)],6))}}),AC={class:"xui-empty__image","aria-hidden":"true"},RC=["innerHTML"],BC={key:0,class:"xui-empty__description"},OC={key:1,class:"xui-empty__footer"},Lu=Z({__name:"Empty",props:{description:{default:void 0},className:{},style:{}},setup(e){const t=e,n=bh({description:t.description}),a=H(n.getState()),l=n.subscribe(i=>{a.value=i});return Ne(()=>{l()}),ke(()=>{n.updateOptions({description:t.description})}),(i,o)=>(b(),x("div",{class:Y(["xui-empty",e.className]),style:he(e.style)},[w("div",AC,[O(i.$slots,"image",{},()=>[(b(),x("svg",{class:"xui-empty__svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(oe).inbox},null,8,RC))])]),a.value.description?(b(),x("div",BC,U(a.value.description),1)):V("",!0),i.$slots.default?(b(),x("div",OC,[O(i.$slots,"default")])):V("",!0)],6))}});function Ba(){const e=H(ih()),t=sh(n=>{e.value=n});return Ny()?Ty(t):t(),e}const ZC=["id","aria-expanded","aria-controls","aria-activedescendant","aria-disabled","tabindex"],DC={key:0,class:"xui-select__tags"},MC={class:"xui-select__tag-label"},jC=["onClick"],VC=["innerHTML"],LC={key:0,class:"xui-select__placeholder"},HC={key:1,class:"xui-select__value"},IC={key:2,class:"xui-select__placeholder"},FC=["innerHTML"],qC={key:4,class:"xui-select__arrow","aria-hidden":"true"},GC=["innerHTML"],YC=["id","aria-labelledby","aria-multiselectable"],KC={key:0,role:"presentation",class:"xui-select__search-item"},PC=["placeholder","value","aria-label"],XC=["id","aria-selected","aria-disabled","onClick"],QC={key:2,class:"xui-select__empty",role:"presentation"},JC=30,fa=Z({__name:"Select",props:{value:{default:void 0},defaultValue:{default:void 0},options:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},maxHeight:{default:264},className:{default:void 0},style:{default:void 0}},emits:["change","clear","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=Ba(),o=nn("root"),s=nn("trigger"),u=nn("dropdown"),d=Na(),p=Na(),{value:c,defaultValue:f,options:g,disabled:C,clearable:S,multiple:_,searchable:v}=a,h=Eh({value:c,defaultValue:f,options:g,disabled:C,clearable:S,multiple:_,searchable:v,onChange:ee=>{l("update:value",ee),l("change",ee)},onClear:()=>l("clear")}),y=H(h.getState()),k=h.subscribe(ee=>{y.value=ee}),E=_r({itemCount:0,itemHeight:JC,viewportHeight:0}),$=H(E.getState()),A=E.subscribe(ee=>{$.value=ee}),B=ee=>{y.value.open&&o.value&&!o.value.contains(ee.target)&&h.close()};on(()=>{document.addEventListener("mousedown",B)}),Ne(()=>{k(),A(),te==null||te(),document.removeEventListener("mousedown",B)}),ke(()=>{h.updateOptions({value:a.value,options:a.options,disabled:a.disabled,clearable:a.clearable,multiple:a.multiple,searchable:a.searchable})});const M=F(()=>y.value.filteredOptions),D=F(()=>a.virtual),J=F(()=>{const ee=M.value;return D.value?ee.slice($.value.startIndex,$.value.endIndex+1):ee}),de=F(()=>{var ee;return(ee=a.options)==null?void 0:ee.find(Oe=>Oe.value===y.value.value)}),ae=F(()=>a.multiple?(Array.isArray(y.value.value)?y.value.value:[]).map(Oe=>{var qe;const ve=(qe=a.options)==null?void 0:qe.find(hl=>hl.value===Oe);return{value:Oe,label:(ve==null?void 0:ve.label)??Oe}}):[]),se=F(()=>a.multiple?ae.value.length>0:y.value.value!==null),ut=F(()=>[a.className,{"is-disabled":y.value.disabled,"is-open":y.value.open,"is-multiple":a.multiple,"is-virtual":D.value,"is-drop-up":G.value}]),G=H(!1);let te=null;function W(){const ee=o.value,Oe=u.value;if(!ee||!Oe)return;const ve=Oe.getBoundingClientRect();if(ve.width===0&&ve.height===0)return;const{placement:qe}=mi(ee.getBoundingClientRect(),ve,pi(),{placement:"bottom",gap:4,viewportPadding:4});G.value=qe==="top"}Ke(()=>y.value.open,ee=>{ee?(G.value=!1,Vt(W),te==null||te(),te=di(W)):(te==null||te(),te=null,G.value=!1)});const j=F(()=>a.style??void 0),q=F(()=>{const ee={maxHeight:`${a.maxHeight}px`};return D.value&&(ee.height=`${a.maxHeight}px`),ee});ke(()=>{D.value&&E.updateOptions({itemCount:M.value.length,viewportHeight:a.maxHeight})}),Ke(()=>y.value.searchQuery,async()=>{D.value&&(E.scrollTo(0),await Vt(),u.value&&(u.value.scrollTop=0))}),ke(()=>{const{open:ee,activeIndex:Oe}=y.value;!ee||Oe===-1||Vt(()=>{var qe;const ve=document.getElementById(`${p}-option-${Oe}`);(qe=ve==null?void 0:ve.scrollIntoView)==null||qe.call(ve,{block:"nearest"})})});const le=ee=>{E.scrollTo(ee.target.scrollTop)},ue=ee=>{h.setSearch(ee.target.value)};Ke(()=>y.value.open,async ee=>{var Oe,ve;!ee||!a.searchable||(await Vt(),(ve=(Oe=u.value)==null?void 0:Oe.querySelector(".xui-select__search"))==null||ve.focus())});const We=ee=>{switch(ee.key){case"Enter":case" ":ee.preventDefault(),y.value.open?h.confirmHighlight():h.toggleOpen();break;case"Escape":y.value.open&&(ee.preventDefault(),h.close());break;case"ArrowDown":ee.preventDefault(),y.value.open?h.moveHighlight(1):h.toggleOpen();break;case"ArrowUp":ee.preventDefault(),y.value.open?h.moveHighlight(-1):h.toggleOpen();break}},Fe=ee=>{switch(ee.key){case"Enter":ee.preventDefault(),h.confirmHighlight();break;case"ArrowDown":ee.preventDefault(),h.moveHighlight(1);break;case"ArrowUp":ee.preventDefault(),h.moveHighlight(-1);break;case"Escape":ee.preventDefault(),h.close();break}};return t({focus:()=>{var ee;(ee=s.value)==null||ee.focus()},toggleOpen:()=>{h.toggleOpen()},close:()=>{h.close()}}),(ee,Oe)=>(b(),x("div",{ref:"root",class:Y(["xui-select",ut.value]),style:he(j.value)},[w("div",{ref:"trigger",id:r(d),class:"xui-select__trigger",role:"combobox","aria-expanded":y.value.open,"aria-haspopup":"listbox","aria-controls":y.value.open?r(p):void 0,"aria-activedescendant":y.value.open&&y.value.activeIndex!==-1?`${r(p)}-option-${y.value.activeIndex}`:void 0,"aria-disabled":y.value.disabled||void 0,tabindex:y.value.disabled?-1:0,onClick:Oe[1]||(Oe[1]=ve=>r(h).toggleOpen()),onKeydown:We},[a.multiple?(b(),x("span",DC,[(b(!0),x(ie,null,ye(ae.value,ve=>(b(),x("span",{key:ve.value,class:"xui-select__tag"},[w("span",MC,U(ve.label),1),w("span",{class:"xui-select__tag-close",role:"button","aria-label":"remove",onClick:dn(qe=>r(h).select(ve.value),["stop"])},[O(ee.$slots,"clearIcon",{},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(oe).clear},null,8,VC))])],8,jC)]))),128)),ae.value.length===0?(b(),x("span",LC,U(a.placeholder??r(i).select.triggerPlaceholder),1)):V("",!0)])):de.value?(b(),x("span",HC,U(de.value.label),1)):(b(),x("span",IC,U(a.placeholder??r(i).select.triggerPlaceholder),1)),a.clearable&&se.value&&!y.value.disabled?(b(),x("span",{key:3,class:"xui-select__clear",role:"button","aria-label":"clear",onClick:Oe[0]||(Oe[0]=dn(ve=>r(h).clear(),["stop"]))},[O(ee.$slots,"clearIcon",{},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(oe).clear},null,8,FC))])])):(b(),x("span",qC,[O(ee.$slots,"suffixIcon",{},()=>[(b(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(oe)["arrow-down"]},null,8,GC))])]))],40,ZC),y.value.open?(b(),x("ul",{key:0,ref:"dropdown",id:r(p),class:"xui-select__dropdown",role:"listbox","aria-labelledby":r(d),"aria-multiselectable":a.multiple||void 0,style:he(q.value),onScroll:le},[a.searchable?(b(),x("li",KC,[w("input",{class:"xui-select__search",type:"text",role:"searchbox",placeholder:r(i).select.searchPlaceholder,value:y.value.searchQuery,"aria-label":r(i).select.searchAriaLabel,onInput:ue,onKeydown:Fe,onClick:Oe[2]||(Oe[2]=dn(()=>{},["stop"]))},null,40,PC)])):V("",!0),J.value.length>0?(b(),x(ie,{key:1},[D.value&&$.value.offsetY>0?(b(),x("li",{key:0,class:"xui-select__spacer",style:he({height:`${$.value.offsetY}px`}),"aria-hidden":"true"},null,4)):V("",!0),(b(!0),x(ie,null,ye(J.value,(ve,qe)=>(b(),x("li",{id:`${r(p)}-option-${D.value?$.value.startIndex+qe:qe}`,key:ve.value,class:Y(["xui-select__option",{"is-selected":a.multiple?Array.isArray(y.value.value)&&y.value.value.includes(ve.value):ve.value===y.value.value,"is-active":(D.value?$.value.startIndex+qe:qe)===y.value.activeIndex,"is-disabled":ve.disabled}]),role:"option","aria-selected":a.multiple?Array.isArray(y.value.value)&&y.value.value.includes(ve.value):ve.value===y.value.value,"aria-disabled":ve.disabled||void 0,onClick:hl=>r(h).select(ve.value)},U(ve.label),11,XC))),128)),D.value&&$.value.fillerHeight>0?(b(),x("li",{key:1,class:"xui-select__spacer",style:he({height:`${$.value.fillerHeight}px`}),"aria-hidden":"true"},null,4)):V("",!0)],64)):(b(),x("li",QC,"无匹配结果"))],44,YC)):V("",!0)],6))}}),WC=["id","aria-selected","aria-disabled","aria-controls","tabindex","data-value","onClick"],ek=["id","aria-labelledby"],Lh=Z({__name:"Tabs",props:{value:{default:void 0},defaultValue:{default:void 0},items:{},className:{},style:{}},emits:["change","update:value"],setup(e,{emit:t}){const n=e,a=t,l=nn("root"),i=Na(),{value:o,defaultValue:s,items:u}=n,d=Dh({value:o,defaultValue:s,items:u,onChange:_=>{a("update:value",_),a("change",_)}}),p=H(d.getState()),c=d.subscribe(_=>{p.value=_});Ne(()=>{c()}),ke(()=>{d.updateOptions({value:n.value,items:n.items})});const f=F(()=>{var _;return(_=n.items)==null?void 0:_.find(v=>v.value===p.value.value)}),g=_=>{d.activate(_)},C=_=>{var v;return(v=l.value)==null?void 0:v.querySelector(`[data-value="${_.replace(/"/g,'\\"')}"]`)},S=_=>{_.key!=="ArrowRight"&&_.key!=="ArrowLeft"||(_.preventDefault(),d.moveActive(_.key==="ArrowRight"?1:-1),Vt(()=>{var h;const v=p.value.value;v!==null&&((h=C(v))==null||h.focus())}))};return(_,v)=>(b(),x("div",{ref:"root",class:Y(["xui-tabs",e.className]),style:he(e.style)},[w("div",{class:"xui-tabs__list",role:"tablist",onKeydown:S},[(b(!0),x(ie,null,ye(n.items,h=>(b(),x("button",{id:`${r(i)}-tab-${h.value}`,key:h.value,type:"button",class:Y(["xui-tabs__tab",{"is-active":h.value===p.value.value,"is-disabled":h.disabled}]),role:"tab","aria-selected":h.value===p.value.value,"aria-disabled":h.disabled||void 0,"aria-controls":`${r(i)}-panel-${h.value}`,tabindex:h.value===p.value.value?0:-1,"data-value":h.value,onClick:y=>g(h.value)},U(h.label),11,WC))),128))],32),f.value?(b(),x("div",{key:0,id:`${r(i)}-panel-${f.value.value}`,class:"xui-tabs__panel",role:"tabpanel","aria-labelledby":`${r(i)}-tab-${f.value.value}`},[O(_.$slots,"default",{item:f.value},()=>[L(U(f.value.label),1)])],8,ek)):V("",!0)],6))}}),tk={class:"xui-message","aria-live":"polite"},nk=["innerHTML"],ak={class:"xui-message__content"},lk=["onClick"],ik=["innerHTML"],ok=Z({__name:"MessageHost",props:{manager:{}},setup(e){const t=e,n=H(t.manager.getState()),a=t.manager.subscribe(i=>{n.value=i});Ne(()=>{a()});const l={info:oe.info,success:oe.success,warning:oe.warning,error:oe.error};return(i,o)=>(b(),x("div",tk,[(b(!0),x(ie,null,ye(n.value.items,s=>(b(),x("div",{key:s.id,class:Y(["xui-message__item",`xui-message__item--${s.type}`])},[(b(),x("svg",{class:"xui-message__icon",viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:s.icon??l[s.type]},null,8,nk)),w("span",ak,U(s.content),1),s.closable?(b(),x("button",{key:0,type:"button",class:"xui-message__close","aria-label":"close",onClick:u=>t.manager.close(s.id)},[(b(),x("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(oe).close},null,8,ik))],8,lk)):V("",!0)],2))),128))]))}});let jo=null,Hm=!1;function Hh(){if(jo===null&&(jo=Ch()),!Hm&&typeof document<"u"){const e=document.createElement("div");document.body.appendChild(e),zy(ok,{manager:jo}).mount(e),Hm=!0}return jo}function _i(e){return Hh().open(e)}const Bn={info:(e,t)=>_i({...t,type:"info",content:e}),success:(e,t)=>_i({...t,type:"success",content:e}),warning:(e,t)=>_i({...t,type:"warning",content:e}),error:(e,t)=>_i({...t,type:"error",content:e}),open:_i,closeAll:()=>Hh().closeAll()},sk=["aria-describedby"],rk=["id"],On=Z({__name:"Tooltip",props:{content:{default:void 0},placement:{default:"top"},trigger:{default:"hover"},disabled:{type:Boolean,default:!1},className:{},style:{}},setup(e,{expose:t}){const n=e,a=Na(),{disabled:l}=n,i=jh({disabled:l}),o=H(i.getState()),s=i.subscribe(k=>{o.value=k});Ne(()=>{s(),f==null||f()}),ke(()=>{i.updateOptions({disabled:n.disabled})});const u=H(null),d=H(null),p=H(n.placement),c=H(0);let f=null;function g(){const k=u.value,E=d.value;if(!k||!E)return;const $=E.getBoundingClientRect();if($.width===0&&$.height===0)return;const{placement:A,shift:B}=mi(k.getBoundingClientRect(),$,pi(),{placement:n.placement,gap:8});p.value=A,c.value=B}Ke(()=>o.value.open,k=>{k?(p.value=n.placement,c.value=0,Vt(g),f==null||f(),f=di(g)):(f==null||f(),f=null)}),Ke(()=>n.placement,()=>{o.value.open&&(p.value=n.placement,c.value=0,Vt(g))});const C=()=>{n.trigger==="hover"&&i.show()},S=()=>{n.trigger==="hover"&&i.hide()},_=()=>{n.trigger==="focus"&&i.show()},v=()=>{n.trigger==="focus"&&i.hide()};return t({show:()=>{i.show()},hide:()=>{i.hide()}}),(k,E)=>(b(),x("span",{class:Y(["xui-tooltip",e.className]),style:he(e.style),onMouseenter:C,onMouseleave:S,onFocusin:_,onFocusout:v},[w("span",{ref_key:"triggerRef",ref:u,class:"xui-tooltip__trigger","aria-describedby":o.value.open?r(a):void 0},[O(k.$slots,"default"),o.value.open?(b(),x("span",{key:0,ref_key:"popperRef",ref:d,id:r(a),class:Y(["xui-tooltip__popper",`is-${p.value}`]),style:he(p.value==="top"||p.value==="bottom"?{marginLeft:`${c.value}px`}:{marginTop:`${c.value}px`}),role:"tooltip"},[O(k.$slots,"content",{},()=>[L(U(n.content),1)]),E[0]||(E[0]=w("span",{class:"xui-tooltip__arrow","aria-hidden":"true"},null,-1))],14,rk)):V("",!0)],8,sk)],38))}}),uk=["aria-label"],ck=["disabled","aria-label"],dk=["innerHTML"],mk=["aria-current","disabled","onClick"],pk={key:1,class:"xui-pagination__ellipsis","aria-hidden":"true"},fk=["disabled","aria-label"],hk=["innerHTML"],Hu=Z({__name:"Pagination",props:{value:{default:void 0},defaultValue:{default:void 0},total:{default:void 0},pageSize:{default:10},disabled:{type:Boolean,default:!1},className:{},style:{}},emits:["change","update:value"],setup(e,{emit:t}){const n=e,a=t,{value:l,defaultValue:i,total:o,pageSize:s,disabled:u}=n,d=wh({value:l,defaultValue:i,total:o,pageSize:s,disabled:u,onChange:S=>{a("update:value",S),a("change",S)}}),p=H(d.getState()),c=d.subscribe(S=>{p.value=S});Ne(()=>{c()}),ke(()=>{d.updateOptions({value:n.value,total:n.total,pageSize:n.pageSize,disabled:n.disabled})});const f=F(()=>Nh(p.value.page,p.value.pageCount)),g=Ba(),C=S=>typeof S=="number";return(S,_)=>(b(),x("nav",{class:Y(["xui-pagination",[e.className,{"is-disabled":p.value.disabled}]]),style:he(e.style),role:"navigation","aria-label":r(g).pagination.nav},[w("button",{type:"button",class:Y(["xui-pagination__nav",{"is-prev":!0}]),disabled:p.value.disabled||p.value.page<=1,"aria-label":r(g).pagination.prev,onClick:_[0]||(_[0]=v=>r(d).prev())},[O(S.$slots,"prevIcon",{},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(oe)["arrow-left"]},null,8,dk))])],8,ck),(b(!0),x(ie,null,ye(f.value,(v,h)=>(b(),x(ie,{key:`${v}-${h}`},[C(v)?(b(),x("button",{key:0,type:"button",class:Y(["xui-pagination__page",{"is-active":v===p.value.page}]),"aria-current":v===p.value.page?"page":void 0,disabled:p.value.disabled,onClick:y=>r(d).goTo(v)},U(v),11,mk)):(b(),x("span",pk,"···"))],64))),128)),w("button",{type:"button",class:"xui-pagination__nav",disabled:p.value.disabled||p.value.page>=p.value.pageCount,"aria-label":r(g).pagination.next,onClick:_[1]||(_[1]=v=>r(d).next())},[O(S.$slots,"nextIcon",{},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(oe)["arrow-right"]},null,8,hk))])],8,fk)],14,uk))}}),vk=["id","aria-expanded","aria-controls","aria-disabled","tabindex"],gk={key:0,class:"xui-date-picker__value"},bk={key:1,class:"xui-date-picker__placeholder"},yk=["innerHTML"],Sk={key:3,class:"xui-date-picker__icon","aria-hidden":"true"},xk=["innerHTML"],_k=["id","aria-label"],Ck={class:"xui-date-picker__header"},kk=["aria-label"],wk=["innerHTML"],Nk={class:"xui-date-picker__title"},Tk=["aria-label"],zk=["innerHTML"],Uk={class:"xui-date-picker__weekdays","aria-hidden":"true"},$k={class:"xui-date-picker__grid"},Ek=["aria-label","onClick"],Ds=Z({__name:"DatePicker",props:{value:{default:void 0},defaultValue:{default:void 0},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},className:{},style:{}},emits:["change","clear","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=nn("root"),o=nn("trigger"),s=Na(),u=Na(),{value:d,defaultValue:p,disabled:c}=a,f=ah({value:d,defaultValue:p,disabled:c,onChange:A=>{l("update:value",A),l("change",A)},onClear:()=>l("clear")}),g=H(f.getState()),C=f.subscribe(A=>{g.value=A}),S=A=>{g.value.open&&i.value&&!i.value.contains(A.target)&&f.close()};on(()=>{document.addEventListener("mousedown",S)}),Ne(()=>{C(),document.removeEventListener("mousedown",S)}),ke(()=>{f.updateOptions({value:a.value,disabled:a.disabled})});const _=F(()=>nh(g.value.viewYear,g.value.viewMonth)),v=Ba(),h=F(()=>v.value.datePicker.titleFormat(g.value.viewYear,g.value.viewMonth)),y=A=>{switch(A.key){case"Enter":case" ":A.preventDefault(),f.toggleOpen();break;case"Escape":g.value.open&&(A.preventDefault(),f.close());break}};return t({focus:()=>{var A;(A=o.value)==null||A.focus()},toggleOpen:()=>{f.toggleOpen()},close:()=>{f.close()}}),(A,B)=>(b(),x("div",{ref:"root",class:Y(["xui-date-picker",[e.className,{"is-disabled":g.value.disabled,"is-open":g.value.open}]]),style:he(e.style)},[w("div",{ref:"trigger",id:r(s),class:"xui-date-picker__trigger",role:"combobox","aria-expanded":g.value.open,"aria-haspopup":"dialog","aria-controls":g.value.open?r(u):void 0,"aria-disabled":g.value.disabled||void 0,tabindex:g.value.disabled?-1:0,onClick:B[1]||(B[1]=M=>r(f).toggleOpen()),onKeydown:y},[g.value.value?(b(),x("span",gk,U(g.value.value),1)):(b(),x("span",bk,U(a.placeholder??r(v).datePicker.placeholder),1)),a.clearable&&g.value.value&&!g.value.disabled?(b(),x("span",{key:2,class:"xui-date-picker__clear",role:"button","aria-label":"clear",onClick:B[0]||(B[0]=dn(M=>r(f).clear(),["stop"]))},[O(A.$slots,"clearIcon",{},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(oe).clear},null,8,yk))])])):(b(),x("span",Sk,[O(A.$slots,"calendarIcon",{},()=>[(b(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(oe).calendar},null,8,xk))])]))],40,vk),g.value.open?(b(),x("div",{key:0,id:r(u),class:"xui-date-picker__panel",role:"dialog","aria-label":r(v).datePicker.panel},[w("div",Ck,[w("button",{type:"button",class:"xui-date-picker__nav","aria-label":r(v).datePicker.prevMonth,onClick:B[2]||(B[2]=M=>r(f).prevMonth())},[O(A.$slots,"prevIcon",{},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(oe)["arrow-left"]},null,8,wk))])],8,kk),w("span",Nk,U(h.value),1),w("button",{type:"button",class:"xui-date-picker__nav","aria-label":r(v).datePicker.nextMonth,onClick:B[3]||(B[3]=M=>r(f).nextMonth())},[O(A.$slots,"nextIcon",{},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(oe)["arrow-right"]},null,8,zk))])],8,Tk)]),w("div",Uk,[(b(!0),x(ie,null,ye(r(v).datePicker.weekdays,M=>(b(),x("span",{key:M,class:"xui-date-picker__weekday"},U(M),1))),128))]),w("div",$k,[(b(!0),x(ie,null,ye(_.value,M=>(b(),x("button",{key:M.date,type:"button",class:Y(["xui-date-picker__day",{"is-outside":!M.inMonth,"is-today":M.isToday,"is-selected":M.date===g.value.value}]),"aria-label":M.date,onClick:D=>r(f).select(M.date)},U(M.day),11,Ek))),128))])],8,_k)):V("",!0)],6))}}),Ak={class:"xui-table__table"},Rk={key:0,class:"xui-table__th",style:{width:"42px"}},Bk=["checked","indeterminate","aria-label"],Ok=["aria-sort"],Zk=["onClick"],Dk={class:"xui-table__sort-icons","aria-hidden":"true"},Mk=["innerHTML"],jk=["innerHTML"],Vk={key:1},Lk={key:0,class:"xui-table__spacer","aria-hidden":"true"},Hk=["colspan"],Ik=["onClick"],Fk=["checked","disabled","aria-label","onChange"],qk={key:1,class:"xui-table__spacer","aria-hidden":"true"},Gk=["colspan"],Yk={key:2},Kk=["colspan"],Kl=Z({__name:"Table",props:{columns:{default:void 0},dataSource:{default:void 0},rowKey:{default:void 0},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},height:{default:void 0},rowHeight:{default:40},rowSelection:{default:void 0},className:{default:void 0},style:{default:void 0}},emits:["sortChange","rowClick"],setup(e,{emit:t}){const n=e,a=t,l=Ba(),i=Uy(),o=F(()=>i.onRowClick!==void 0),{dataSource:s}=n,u=Zh({dataSource:s,rowKey:n.rowKey,rowSelection:n.rowSelection,onSortChange:j=>a("sortChange",j)}),d=H(u.getState()),p=u.subscribe(j=>{d.value=j});Ne(()=>{p()}),ke(()=>{u.updateOptions({dataSource:n.dataSource,rowKey:n.rowKey,rowSelection:n.rowSelection})});const c=_r({itemCount:0,itemHeight:n.rowHeight??40}),f=H(c.getState()),g=c.subscribe(j=>{f.value=j});Ne(()=>{g()});const C=H(null);let S;on(()=>{if(!n.virtual)return;const j=C.value;j&&(c.updateOptions({viewportHeight:j.clientHeight}),!(typeof ResizeObserver>"u")&&(S=new ResizeObserver(()=>{c.updateOptions({viewportHeight:j.clientHeight})}),S.observe(j)))}),Ne(()=>{S==null||S.disconnect()});const _=j=>{n.virtual&&c.scrollTo(j.target.scrollTop)};ke(()=>{n.virtual&&c.updateOptions({itemCount:d.value.sortedData.length,itemHeight:n.rowHeight??40})});const v=F(()=>{const j=d.value.sortedData;return n.virtual?f.value.endIndex<f.value.startIndex?[]:j.slice(f.value.startIndex,f.value.endIndex+1):j}),h=F(()=>[n.className,{"is-striped":n.stripe,"is-bordered":n.border,"is-virtual":n.virtual}]),y=F(()=>{const j={...n.style};return n.virtual&&(n.height!==void 0&&(j.height=typeof n.height=="number"?`${n.height}px`:n.height),j["--xui-table-row-height"]=`${n.rowHeight??40}px`),Object.keys(j).length>0?j:void 0}),k=F(()=>n.rowSelection!==void 0),E=F(()=>{var j;return(((j=n.columns)==null?void 0:j.length)??0)+(k.value?1:0)}),$=(j,q)=>{const le=la(j,q,n.rowKey);return d.value.selectedRowKeys.includes(le)},A=(j,q)=>{var le,ue;return((ue=(le=n.rowSelection)==null?void 0:le.getCheckboxDisabled)==null?void 0:ue.call(le,j,q))??!1},B=(j,q,le)=>{var ue;u.toggleRow(la(j,q,n.rowKey)),((ue=n.rowSelection)==null?void 0:ue.selectedRowKeys)!==void 0&&(le.target.checked=$(j,q))},M=j=>{var q;u.toggleAll(),((q=n.rowSelection)==null?void 0:q.selectedRowKeys)!==void 0&&(j.target.checked=d.value.allSelected)},D=(j,q)=>{a("rowClick",j,q)},J=(j,q)=>({"is-even":q%2===1,"is-selected":k.value&&$(j,q),"is-clickable":o.value}),de=j=>{j.sortable&&u.toggleSort(j.key)},ae=j=>{if(d.value.sortKey===j.key)return d.value.sortOrder==="asc"?"ascending":"descending"},se=j=>{const q={};return j.width!==void 0&&(q.width=typeof j.width=="number"?`${j.width}px`:j.width),j.align!==void 0&&(q.textAlign=j.align),Object.keys(q).length>0?q:void 0},ut=(j,q,le)=>j.render?j.render(q,le):Oh(q[j.key]),G=(j,q)=>({"is-active":d.value.sortKey===j.key&&d.value.sortOrder===(q==="up"?"asc":"desc")}),te=oe["arrow-up"],W=oe["arrow-down"];return(j,q)=>(b(),x("div",{ref_key:"scrollRef",ref:C,class:Y(["xui-table",h.value]),style:he(y.value),onScroll:_},[w("table",Ak,[w("thead",null,[w("tr",null,[k.value?(b(),x("th",Rk,[w("input",{type:"checkbox",class:"xui-table__check",checked:d.value.allSelected,indeterminate:d.value.indeterminate,"aria-label":r(l).table.selectAll,onChange:q[0]||(q[0]=le=>M(le))},null,40,Bk)])):V("",!0),(b(!0),x(ie,null,ye(n.columns,le=>(b(),x("th",{key:le.key,class:"xui-table__th",style:he(se(le)),"aria-sort":ae(le),scope:"col"},[le.sortable?(b(),x("button",{key:0,type:"button",class:"xui-table__sort",onClick:ue=>de(le)},[L(U(le.title)+" ",1),w("span",Dk,[O(j.$slots,"sortIcon",{order:"asc"},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",class:Y(G(le,"up")),innerHTML:r(te)},null,10,Mk))]),O(j.$slots,"sortIcon",{order:"desc"},()=>[(b(),x("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",class:Y(G(le,"down")),innerHTML:r(W)},null,10,jk))])])],8,Zk)):(b(),x("span",Vk,U(le.title),1))],12,Ok))),128))])]),w("tbody",null,[n.virtual&&f.value.offsetY>0?(b(),x("tr",Lk,[w("td",{style:he({height:`${f.value.offsetY}px`}),colspan:E.value},null,12,Hk)])):V("",!0),(b(!0),x(ie,null,ye(v.value,(le,ue)=>(b(),x("tr",{key:r(la)(le,n.virtual?f.value.startIndex+ue:ue,n.rowKey),class:Y(J(le,n.virtual?f.value.startIndex+ue:ue)),onClick:We=>D(le,n.virtual?f.value.startIndex+ue:ue)},[k.value?(b(),x("td",{key:0,class:"xui-table__td",onClick:q[1]||(q[1]=dn(()=>{},["stop"]))},[w("input",{type:"checkbox",class:"xui-table__check",checked:$(le,n.virtual?f.value.startIndex+ue:ue),disabled:A(le,n.virtual?f.value.startIndex+ue:ue),"aria-label":r(l).table.selectRow(n.virtual?f.value.startIndex+ue:ue),onChange:We=>B(le,n.virtual?f.value.startIndex+ue:ue,We)},null,40,Fk)])):V("",!0),(b(!0),x(ie,null,ye(n.columns,We=>(b(),x("td",{key:We.key,class:"xui-table__td",style:he(se(We))},U(ut(We,le,n.virtual?f.value.startIndex+ue:ue)),5))),128))],10,Ik))),128)),n.virtual&&f.value.fillerHeight>0?(b(),x("tr",qk,[w("td",{style:he({height:`${f.value.fillerHeight}px`}),colspan:E.value},null,12,Gk)])):V("",!0),d.value.sortedData.length===0?(b(),x("tr",Yk,[w("td",{class:"xui-table__empty",colspan:E.value},[O(j.$slots,"empty",{},()=>[L(U(r(l).table.empty),1)])],8,Kk)])):V("",!0)])])],38))}}),Pk={key:0,class:"xui-spin__mask",role:"status","aria-live":"polite"},Xk={key:0,class:"xui-spin__tip"},Qk={key:0,class:"xui-spin__tip"},Ai=Z({__name:"Spin",props:{size:{default:"md"},spinning:{type:Boolean,default:!0},tip:{default:void 0},className:{},style:{}},setup(e){const t=e,n=Rh({size:t.size,spinning:t.spinning,tip:t.tip}),a=H(n.getState()),l=n.subscribe(i=>{a.value=i});return Ne(()=>{l()}),ke(()=>{n.updateOptions({size:t.size,spinning:t.spinning,tip:t.tip})}),(i,o)=>i.$slots.default?(b(),x("div",{key:0,class:Y(["xui-spin xui-spin--wrapper",e.className]),style:he(e.style)},[w("div",{class:Y(["xui-spin__content",{"is-blur":a.value.spinning}])},[O(i.$slots,"default")],2),a.value.spinning?(b(),x("div",Pk,[w("span",{class:Y(["xui-spin__indicator",`is-${a.value.size}`]),"aria-hidden":"true"},null,2),a.value.tip?(b(),x("span",Xk,U(a.value.tip),1)):V("",!0)])):V("",!0)],6)):a.value.spinning?(b(),x("span",{key:1,class:Y(["xui-spin",e.className]),style:he(e.style),role:"status","aria-live":"polite"},[w("span",{class:Y(["xui-spin__indicator",`is-${a.value.size}`]),"aria-hidden":"true"},null,2),a.value.tip?(b(),x("span",Qk,U(a.value.tip),1)):V("",!0)],6)):V("",!0)}}),Jk=["aria-label"],Wk=["aria-label"],ew={class:"xui-breadcrumb__list"},tw=["href","onClick"],nw=["aria-current","onClick"],aw={key:2,class:"xui-breadcrumb__separator","aria-hidden":"true"},Iu=Z({__name:"Breadcrumb",props:{items:{default:void 0},separator:{default:"/"},className:{},style:{}},emits:["itemClick"],setup(e,{emit:t}){const n=e,a=t,l=Ba(),i=hh({items:n.items,separator:n.separator,onItemClick:(u,d)=>a("itemClick",u,d)}),o=H(i.getState()),s=i.subscribe(u=>{o.value=u});return Ne(()=>{s()}),ke(()=>{i.updateOptions({items:n.items,separator:n.separator})}),(u,d)=>u.$slots.default?(b(),x("nav",{key:0,class:Y(["xui-breadcrumb",e.className]),style:he(e.style),"aria-label":r(l).breadcrumb.nav},[O(u.$slots,"default")],14,Jk)):(b(),x("nav",{key:1,class:Y(["xui-breadcrumb",e.className]),style:he(e.style),"aria-label":r(l).breadcrumb.nav},[w("ol",ew,[(b(!0),x(ie,null,ye(o.value.items,(p,c)=>(b(),x("li",{key:c,class:Y(["xui-breadcrumb__item",{"is-active":c===o.value.items.length-1,"is-disabled":p.disabled}])},[p.href&&c!==o.value.items.length-1&&!p.disabled?(b(),x("a",{key:0,class:"xui-breadcrumb__link",href:p.href,onClick:f=>r(i).selectItem(c)},U(p.label),9,tw)):(b(),x("span",{key:1,class:"xui-breadcrumb__label","aria-current":c===o.value.items.length-1?"page":void 0,onClick:f=>r(i).selectItem(c)},U(p.label),9,nw)),c!==o.value.items.length-1?(b(),x("span",aw,U(o.value.separator),1)):V("",!0)],2))),128))])],14,Wk))}}),lw=["aria-label"],iw={key:0,class:"xui-skeleton__avatar","aria-hidden":"true"},ow={class:"xui-skeleton__rows","aria-hidden":"true"},Fu=Z({__name:"Skeleton",props:{loading:{type:Boolean,default:!0},avatar:{type:Boolean,default:!1},rows:{default:3},className:{},style:{}},setup(e){const t=e,n=Ah({loading:t.loading,avatar:t.avatar,rows:t.rows}),a=Ba(),l=H(n.getState()),i=n.subscribe(o=>{l.value=o});return Ne(()=>{i()}),ke(()=>{n.updateOptions({loading:t.loading,avatar:t.avatar,rows:t.rows})}),(o,s)=>l.value.loading?(b(),x("div",{key:1,class:Y(["xui-skeleton",e.className]),style:he(e.style),role:"status","aria-label":r(a).skeleton.loading},[l.value.avatar?(b(),x("span",iw)):V("",!0),w("div",ow,[(b(!0),x(ie,null,ye(l.value.rows,u=>(b(),x("span",{key:u,class:Y(["xui-skeleton__row",{"is-last":u===l.value.rows}])},null,2))),128))])],14,lw)):O(o.$slots,"default",{},void 0,void 0,0)}}),sw=["aria-valuenow","aria-valuemin","aria-valuemax","placeholder","disabled","onKeydown"],rw={class:"xui-input-number__step","aria-hidden":"true"},uw=["disabled"],cw=["innerHTML"],dw=["disabled"],mw=["innerHTML"],qu=Z({__name:"InputNumber",props:{value:{default:void 0},defaultValue:{default:void 0},min:{default:void 0},max:{default:void 0},step:{default:1},precision:{default:void 0},disabled:{type:Boolean,default:!1},placeholder:{default:void 0},className:{},style:{}},emits:["change","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=_h({value:a.value,defaultValue:a.defaultValue,min:a.min,max:a.max,step:a.step,precision:a.precision,disabled:a.disabled,onChange:_=>{l("change",_),l("update:value",_)}}),o=H(i.getState());function s(_){if(_===null)return"";const v=i.getState().precision;return v!==null?_.toFixed(v):String(_)}const u=H(s(o.value.value)),d=i.subscribe(_=>{o.value=_,a.value===void 0&&(u.value=s(_.value))});Ne(()=>{d()}),ke(()=>{i.updateOptions({value:a.value,min:a.min,max:a.max,step:a.step,precision:a.precision,disabled:a.disabled}),a.value!==void 0&&(u.value=s(o.value.value))});function p(){i.commitText(u.value),u.value=s(o.value.value)}function c(_){i.stepValue(_),u.value=s(o.value.value)}const f=nn("input");return t({focus:()=>{var _;(_=f.value)==null||_.focus()},blur:()=>{var _;(_=f.value)==null||_.blur()},stepValue:_=>{i.stepValue(_),u.value=s(o.value.value)}}),(_,v)=>(b(),x("div",{class:Y(["xui-input-number",[e.className,{"is-disabled":o.value.disabled}]]),style:he(e.style)},[Gf(w("input",{ref:"input","onUpdate:modelValue":v[0]||(v[0]=h=>u.value=h),class:"xui-input-number__input",type:"text",inputmode:"decimal",role:"spinbutton","aria-valuenow":o.value.value??void 0,"aria-valuemin":Number.isFinite(o.value.min)?o.value.min:void 0,"aria-valuemax":Number.isFinite(o.value.max)?o.value.max:void 0,placeholder:a.placeholder,disabled:o.value.disabled,onChange:p,onKeydown:[rs(dn(p,["prevent"]),["enter"]),v[1]||(v[1]=rs(dn(h=>c(1),["prevent"]),["up"])),v[2]||(v[2]=rs(dn(h=>c(-1),["prevent"]),["down"]))]},null,40,sw),[[$y,u.value]]),w("div",rw,[w("button",{class:"xui-input-number__btn",type:"button",tabindex:"-1",disabled:o.value.disabled,onClick:v[3]||(v[3]=h=>c(1))},[O(_.$slots,"upIcon",{},()=>[(b(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(oe)["arrow-up"]},null,8,cw))])],8,uw),w("button",{class:"xui-input-number__btn",type:"button",tabindex:"-1",disabled:o.value.disabled,onClick:v[4]||(v[4]=h=>c(-1))},[O(_.$slots,"downIcon",{},()=>[(b(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(oe)["arrow-down"]},null,8,mw))])],8,dw)])],6))}}),pw=["aria-describedby"],fw=["id"],hw={class:"xui-popconfirm__content"},vw={class:"xui-popconfirm__actions"},Ja=Z({__name:"Popconfirm",props:{content:{default:void 0},confirmText:{},cancelText:{},placement:{default:"top"},disabled:{type:Boolean,default:!1},className:{},style:{}},emits:["confirm","cancel"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=Ba(),o=F(()=>a.confirmText??i.value.popconfirm.confirm),s=F(()=>a.cancelText??i.value.popconfirm.cancel),u=Na(),d=H(null),p=Th({placement:a.placement,disabled:a.disabled,onConfirm:()=>l("confirm"),onCancel:()=>l("cancel")}),c=H(p.getState()),f=p.subscribe(A=>{c.value=A}),g=A=>{const B=d.value;B&&!B.contains(A.target)&&p.close()};document.addEventListener("mousedown",g);const C=H(null),S=H(null),_=H(a.placement),v=H(0);let h=null;function y(){const A=C.value,B=S.value;if(!A||!B)return;const M=B.getBoundingClientRect();if(M.width===0&&M.height===0)return;const{placement:D,shift:J}=mi(A.getBoundingClientRect(),M,pi(),{placement:c.value.placement,gap:8});_.value=D,v.value=J}return Ke(()=>c.value.open,A=>{A?(_.value=c.value.placement,v.value=0,Vt(y),h==null||h(),h=di(y)):(h==null||h(),h=null)}),Ke(()=>c.value.placement,A=>{c.value.open&&(_.value=A,v.value=0,Vt(y))}),Ne(()=>{f(),h==null||h(),document.removeEventListener("mousedown",g)}),ke(()=>{p.updateOptions({placement:a.placement,disabled:a.disabled})}),t({show:()=>{c.value.open||p.toggle()},hide:()=>{p.close()},toggle:()=>{p.toggle()}}),(A,B)=>(b(),x("span",{ref_key:"rootRef",ref:d,class:Y(["xui-popconfirm",e.className]),style:he(e.style)},[w("span",{ref_key:"triggerRef",ref:C,class:"xui-popconfirm__trigger","aria-describedby":c.value.open?r(u):void 0,onClick:B[3]||(B[3]=M=>r(p).toggle())},[O(A.$slots,"default"),c.value.open?(b(),x("span",{key:0,ref_key:"popperRef",ref:S,id:r(u),class:Y(["xui-popconfirm__popper",`is-${_.value}`]),style:he(_.value==="top"||_.value==="bottom"?{marginLeft:`${v.value}px`}:{marginTop:`${v.value}px`}),role:"tooltip",onClick:B[2]||(B[2]=dn(()=>{},["stop"]))},[w("span",hw,[O(A.$slots,"content",{},()=>[L(U(a.content),1)])]),w("div",vw,[w("button",{class:"xui-button xui-button--sm",type:"button",onClick:B[0]||(B[0]=M=>r(p).cancel())},U(s.value),1),w("button",{class:"xui-button xui-button--primary xui-button--sm",type:"button",onClick:B[1]||(B[1]=M=>r(p).confirm())},U(o.value),1)]),B[4]||(B[4]=w("span",{class:"xui-popconfirm__arrow","aria-hidden":"true"},null,-1))],14,fw)):V("",!0)],8,pw)],6))}}),gw={key:0,class:"xui-modal"},bw={class:"xui-modal__header"},yw={class:"xui-modal__title"},Sw=["innerHTML"],xw={class:"xui-modal__body"},_w={class:"xui-modal__footer"},ko=Z({__name:"Modal",props:Bs({title:{},width:{default:520},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},okText:{},cancelText:{},trapFocus:{type:Boolean,default:!0},className:{},style:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:Bs(["open","close","ok","cancel"],["update:visible"]),setup(e,{expose:t,emit:n}){const a=n,l=qf(e,"visible"),i=nn("panel"),o=Ba(),s=F(()=>e.okText??o.value.modal.ok),u=F(()=>e.cancelText??o.value.modal.cancel),d=kh({visible:l.value,closable:e.closable,maskClosable:e.maskClosable,closeOnEsc:e.closeOnEsc,onOpen:()=>{l.value=!0,a("open")},onClose:()=>{l.value=!1,a("close")},onOk:()=>a("ok"),onCancel:()=>a("cancel")}),p=H(d.getState()),c=d.subscribe(E=>{p.value=E}),f=E=>{E.key==="Escape"&&d.handleEsc()},g=E=>{if(E.key==="Escape"){E.preventDefault(),d.handleEsc();return}e.trapFocus&&eh(E,E.currentTarget)};let C=null;Ne(()=>{c(),document.removeEventListener("keydown",f)}),ke(()=>{d.updateOptions({visible:l.value,closable:e.closable,maskClosable:e.maskClosable,closeOnEsc:e.closeOnEsc})}),Ke(()=>p.value.visible,E=>{E?(e.closeOnEsc&&document.addEventListener("keydown",f),C=document.activeElement instanceof HTMLElement?document.activeElement:null,Vt(()=>{var $;($=i.value)==null||$.focus()})):(document.removeEventListener("keydown",f),C==null||C.focus(),C=null)});const S=()=>{d.open()},_=()=>{d.close()},v=()=>{d.toggle()},h=()=>{d.handleOk()},y=()=>{d.handleCancel()},k=()=>{d.handleMaskClick()};return t({open:S,close:_,toggle:v}),(E,$)=>(b(),Q(Ey,{to:"body"},[p.value.visible?(b(),x("div",gw,[w("div",{class:"xui-modal__overlay",onClick:k}),w("div",{ref:"panel",class:Y(["xui-modal__panel",e.className]),style:he([{width:typeof e.width=="number"?`${e.width}px`:e.width},e.style]),tabindex:"-1",onKeydown:g},[w("div",bw,[O(E.$slots,"title",{},()=>[w("span",yw,U(e.title),1)]),p.value.closable?(b(),x("button",{key:0,class:"xui-modal__close",onClick:_},[O(E.$slots,"closeIcon",{},()=>[(b(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(oe).close},null,8,Sw))])])):V("",!0)]),w("div",xw,[O(E.$slots,"default")]),w("div",_w,[O(E.$slots,"footer",{},()=>[w("button",{class:"xui-button xui-button--md",onClick:y},U(u.value),1),w("button",{class:"xui-button xui-button--primary xui-button--md",onClick:h},U(s.value),1)])])],38)])):V("",!0)]))}}),Cw={key:0,class:"xui-form__actions"},Cr=Z({__name:"Form",props:{initialValues:{},rules:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},labelWidth:{},labelPosition:{default:"right"},validateTrigger:{},scrollToFirstError:{type:Boolean,default:!1},className:{},style:{}},emits:["submit","submitFail","valuesChange"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=H(null);i.value===null&&(i.value=Sh({initialValues:a.initialValues,rules:a.rules,disabled:a.disabled,readonly:a.readonly,validateTrigger:a.validateTrigger,onSubmit:c=>l("submit",c),onSubmitFail:c=>l("submitFail",c),onValuesChange:(c,f)=>l("valuesChange",c,f)}));const o=i.value,s=H(o.getState()),u=o.subscribe(c=>{s.value=c});Ne(()=>{u()}),ke(()=>{o.updateOptions({disabled:a.disabled,readonly:a.readonly,rules:a.rules,onSubmit:c=>l("submit",c),onSubmitFail:c=>l("submitFail",c),onValuesChange:(c,f)=>l("valuesChange",c,f)})});const d=F(()=>({logic:o,state:s.value,disabled:a.disabled,readonly:a.readonly,labelWidth:a.labelWidth,labelPosition:a.labelPosition}));yr("xuiForm",d);const p=c=>{c.preventDefault(),o.submit()};return t({validate:c=>o.validate(c),validateField:(c,f)=>o.validateField(c,f),getFieldValue:c=>o.getFieldValue(c),getFieldsValue:()=>o.getFieldsValue(),setFieldValue:(c,f)=>o.setFieldValue(c,f),setFieldsValue:c=>o.setFieldsValue(c),resetFields:c=>o.resetFields(c),clearValidate:c=>o.clearValidate(c),submit:()=>o.submit()}),(c,f)=>(b(),x("form",{class:Y(["xui-form",a.className]),style:he(a.style),onSubmit:dn(p,["prevent"])},[O(c.$slots,"default"),c.$slots.actions?(b(),x("div",Cw,[O(c.$slots,"actions")])):V("",!0)],38))}}),kw={class:"xui-form-item__content"},ww={key:1,class:"xui-form-item__extra"},Nw={key:0,class:"xui-form-item__error"},Tw={key:0,class:"xui-form-item__error-count"},Tt=Z({__name:"FormItem",props:{label:{},required:{type:Boolean,default:!1},trigger:{},validateFirst:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},extra:{},labelAlign:{default:"right"},className:{},style:{},name:{},rules:{}},emits:["change","blur"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=Ff(),o=ui("xuiForm",void 0),s=F(()=>{if(!o)return;const $=o;return $&&typeof $=="object"&&"value"in $&&typeof $.value=="object"?$.value:$});s.value;const u=F(()=>a.rules??[]),d=F(()=>a.required||yh(u.value)),p=F(()=>{if(a.name&&s.value)return s.value.state.values[a.name]}),c=F(()=>!a.name||!s.value?[]:s.value.state.errors[a.name]??[]),f=F(()=>s.value?s.value.state.validating:!1),g=F(()=>{var $;return(($=s.value)==null?void 0:$.disabled)??!1}),C=F(()=>{var $;return(($=s.value)==null?void 0:$.readonly)??!1}),S=F(()=>{var B;const $=(B=s.value)==null?void 0:B.labelWidth;return $===void 0?void 0:{width:typeof $=="number"?`${$}px`:$,flexShrink:0}}),_=F(()=>{var $;return(($=s.value)==null?void 0:$.labelPosition)??"right"});on(()=>{a.name&&s.value&&s.value.logic.registerField(a.name,u.value)}),md(()=>{a.name&&s.value&&s.value.logic.unregisterField(a.name)}),Ke(()=>u.value,$=>{a.name&&s.value&&s.value.logic.registerField(a.name,$)});const v=$=>{!a.name||!s.value||(s.value.logic.setFieldValue(a.name,$),l("change",$),s.value.logic.validateField(a.name,"change"))},h=()=>{!a.name||!s.value||(l("blur",p.value),s.value.logic.validateField(a.name,"blur"))},y=()=>{var A;const $=((A=i.default)==null?void 0:A.call(i))??[];for(const B of $)if(B.type!==Ry&&B.type!==null)return B;return null},k=F(()=>{const $=y();if(!$)return null;const A={value:p.value,disabled:g.value||void 0,readonly:C.value||void 0};return A["onUpdate:value"]=B=>v(B),A.onChange=B=>{v(B)},A.onBlur=()=>h(),Ay($,A)}),E=Object.assign($=>$.node,{props:["node"]});return t({validate:$=>!a.name||!s.value?Promise.resolve([]):s.value.logic.validateField(a.name,$),clearValidation:()=>{!a.name||!s.value||s.value.logic.clearValidate([a.name])},resetField:()=>{!a.name||!s.value||s.value.logic.resetFields([a.name])}}),($,A)=>a.hidden?V("",!0):(b(),x("div",{key:0,class:Y(["xui-form-item",`xui-form-item--label-${_.value}`,{"is-error":c.value.length>0,"is-required":d.value,"is-validating":f.value},a.className]),style:he(a.style)},[a.label||$.$slots.label?(b(),x("label",{key:0,class:Y(["xui-form-item__label",`xui-form-item__label--${a.labelAlign}`]),style:he(S.value)},[O($.$slots,"label",{},()=>[L(U(a.label),1)])],6)):V("",!0),w("div",kw,[k.value?(b(),Q(tn(r(E)),{key:0,node:k.value},null,8,["node"])):V("",!0),a.extra||$.$slots.extra?(b(),x("div",ww,[O($.$slots,"extra",{},()=>[L(U(a.extra),1)])])):V("",!0),N(So,{name:"xui-form-item-fade"},{default:z(()=>[c.value.length>0&&!$.$slots.error?(b(),x("div",Nw,[L(U(c.value[0])+" ",1),c.value.length>1?(b(),x("span",Tw," (+"+U(c.value.length-1)+") ",1)):V("",!0)])):V("",!0)]),_:1}),$.$slots.error?O($.$slots,"error",{errors:c.value},void 0,void 0,2):V("",!0)])],6))}}),ul=By({locale:"zh-CN"}),zw=Hf(ul),Ia=e=>e[ul.locale],T=()=>ul.locale==="zh-CN",Gu=new Set,Uw=e=>(Gu.add(e),()=>{Gu.delete(e)}),Im=()=>ul.locale,$w=e=>{ul.locale=e,Gu.forEach(t=>t(e)),!(typeof document>"u")&&(document.documentElement.lang=e,ci(e))},Ew=e=>{e!==ul.locale&&$w(e)},Aw=e=>{ul.locale=e,!(typeof document>"u")&&(document.documentElement.lang=e,ci(e))},Rw={hidden:"","aria-hidden":"true"},Bw=Z({__name:"LocaleSync",setup(e){const{lang:t}=xo(),n=a=>a==="en-US"?"en-US":"zh-CN";return Aw(n(t.value)),Ke(t,a=>Ew(n(a))),(a,l)=>(b(),x("span",Rw))}}),Ow=Z({__name:"Layout",setup(e){const{isDark:t}=xo();return Ke(t,n=>xr(n?"dark":"light"),{immediate:!0}),(n,a)=>(b(),Q(r(Wf).Layout,null,{"layout-top":z(()=>[N(Bw)]),_:1}))}}),Zw=Z({__name:"PageContent",setup(e){const{page:t}=xo();return(n,a)=>(b(),Q(So,{name:"xui-page",mode:"out-in"},{default:z(()=>[(b(),Q(r(Oy),{key:r(t).relativePath}))]),_:1}))}}),Dw=[{key:"basic",title:{"zh-CN":"基础组件","en-US":"Basic"}},{key:"form",title:{"zh-CN":"表单交互","en-US":"Form"}},{key:"display",title:{"zh-CN":"数据展示","en-US":"Data Display"}},{key:"navigation",title:{"zh-CN":"导航布局","en-US":"Navigation"}},{key:"feedback",title:{"zh-CN":"反馈提示","en-US":"Feedback"}}],Mw=[{name:"Button",slug:"button",title:"按钮",category:"basic",available:!0},{name:"Input",slug:"input",title:"输入框",category:"basic",available:!0},{name:"Modal",slug:"modal",title:"对话框",category:"basic",available:!0},{name:"Switch",slug:"switch",title:"开关",category:"form",available:!0},{name:"Checkbox",slug:"checkbox",title:"复选框",category:"form",available:!0},{name:"Radio",slug:"radio",title:"单选框",category:"form",available:!0},{name:"Select",slug:"select",title:"下拉选择",category:"form",available:!0},{name:"DatePicker",slug:"date-picker",title:"日期选择",category:"form",available:!0},{name:"InputNumber",slug:"input-number",title:"数字输入框",category:"form",available:!0},{name:"Form",slug:"form",title:"表单",category:"form",available:!0},{name:"Tag",slug:"tag",title:"标签",category:"display",available:!0},{name:"Progress",slug:"progress",title:"进度条",category:"display",available:!0},{name:"Badge",slug:"badge",title:"徽标数",category:"display",available:!0},{name:"Avatar",slug:"avatar",title:"头像",category:"display",available:!0},{name:"Empty",slug:"empty",title:"空状态",category:"display",available:!0},{name:"Skeleton",slug:"skeleton",title:"骨架屏",category:"display",available:!0},{name:"Table",slug:"table",title:"表格",category:"display",available:!0},{name:"Tabs",slug:"tabs",title:"标签页",category:"navigation",available:!0},{name:"Pagination",slug:"pagination",title:"分页",category:"navigation",available:!0},{name:"Breadcrumb",slug:"breadcrumb",title:"面包屑",category:"navigation",available:!0},{name:"Alert",slug:"alert",title:"警告提示",category:"feedback",available:!0},{name:"Message",slug:"message",title:"全局提示",category:"feedback",available:!0},{name:"Tooltip",slug:"tooltip",title:"文字提示",category:"feedback",available:!0},{name:"Spin",slug:"spin",title:"加载中",category:"feedback",available:!0},{name:"Popconfirm",slug:"popconfirm",title:"气泡确认",category:"feedback",available:!0}],jw={class:"demo-row"},Vw=Z({__name:"type",setup(e){return(t,n)=>(b(),x("div",jw,[N(r(K),null,{default:z(()=>[...n[0]||(n[0]=[L("Default",-1)])]),_:1}),N(r(K),{type:"primary"},{default:z(()=>[...n[1]||(n[1]=[L("Primary",-1)])]),_:1}),N(r(K),{type:"danger"},{default:z(()=>[...n[2]||(n[2]=[L("Danger",-1)])]),_:1}),N(r(K),{type:"link"},{default:z(()=>[...n[3]||(n[3]=[L("Link",-1)])]),_:1})]))}}),Lw={class:"demo-column"},Hw={class:"demo-row"},Iw=Z({__name:"size",setup(e){return(t,n)=>(b(),x("div",Lw,[w("div",Hw,[N(r(K),{size:"sm"},{default:z(()=>[...n[0]||(n[0]=[L("Small",-1)])]),_:1}),N(r(K),{size:"md"},{default:z(()=>[...n[1]||(n[1]=[L("Medium",-1)])]),_:1}),N(r(K),{size:"lg"},{default:z(()=>[...n[2]||(n[2]=[L("Large",-1)])]),_:1})]),N(r(K),{block:""},{default:z(()=>[L(U(r(T)()?"Block（宽度撑满容器）":"Block (full width)"),1)]),_:1})]))}}),Fw={class:"demo-row"},qw=Z({__name:"state",setup(e){const t=H(!1),n=()=>{t.value=!0,setTimeout(()=>{t.value=!1},1500)};return(a,l)=>(b(),x("div",Fw,[N(r(K),{disabled:""},{default:z(()=>[...l[0]||(l[0]=[L("Disabled",-1)])]),_:1}),N(r(K),{loading:""},{default:z(()=>[...l[1]||(l[1]=[L("Loading",-1)])]),_:1}),N(r(K),{type:"primary",loading:t.value,onClick:n},{default:z(()=>[L(U(t.value?r(T)()?"提交中...":"Submitting...":r(T)()?"点击模拟提交":"Click to submit"),1)]),_:1},8,["loading"])]))}});var Fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ih={exports:{}},kr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yw=Symbol.for("react.transitional.element"),Kw=Symbol.for("react.fragment");function Fh(e,t,n){var a=null;if(n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),"key"in t){n={};for(var l in t)l!=="key"&&(n[l]=t[l])}else n=t;return t=n.ref,{$$typeof:Yw,type:e,key:a,ref:t!==void 0?t:null,props:n}}kr.Fragment=Kw;kr.jsx=Fh;kr.jsxs=Fh;Ih.exports=kr;var m=Ih.exports,qh={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd=Symbol.for("react.transitional.element"),Pw=Symbol.for("react.portal"),Xw=Symbol.for("react.fragment"),Qw=Symbol.for("react.strict_mode"),Jw=Symbol.for("react.profiler"),Ww=Symbol.for("react.consumer"),eN=Symbol.for("react.context"),tN=Symbol.for("react.forward_ref"),nN=Symbol.for("react.suspense"),aN=Symbol.for("react.memo"),Gh=Symbol.for("react.lazy"),lN=Symbol.for("react.activity"),iN=Symbol.for("react.view_transition"),qm=Symbol.iterator;function oN(e){return e===null||typeof e!="object"?null:(e=qm&&e[qm]||e["@@iterator"],typeof e=="function"?e:null)}var Yh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kh=Object.assign,Ph={};function fi(e,t,n){this.props=e,this.context=t,this.refs=Ph,this.updater=n||Yh}fi.prototype.isReactComponent={};fi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xh(){}Xh.prototype=fi.prototype;function Sd(e,t,n){this.props=e,this.context=t,this.refs=Ph,this.updater=n||Yh}var xd=Sd.prototype=new Xh;xd.constructor=Sd;Kh(xd,fi.prototype);xd.isPureReactComponent=!0;var Gm=Array.isArray;function Yu(){}var Ve={H:null,A:null,T:null,S:null},Qh=Object.prototype.hasOwnProperty;function _d(e,t,n){var a=n.ref;return{$$typeof:yd,type:e,key:t,ref:a!==void 0?a:null,props:n}}function sN(e,t){return _d(e.type,t,e.props)}function Cd(e){return typeof e=="object"&&e!==null&&e.$$typeof===yd}function rN(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ym=/\/+/g;function Xr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rN(""+e.key):t.toString(36)}function uN(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Yu,Yu):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function bl(e,t,n,a,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case yd:case Pw:o=!0;break;case Gh:return o=e._init,bl(o(e._payload),t,n,a,l)}}if(o)return l=l(e),o=a===""?"."+Xr(e,0):a,Gm(l)?(n="",o!=null&&(n=o.replace(Ym,"$&/")+"/"),bl(l,t,n,"",function(d){return d})):l!=null&&(Cd(l)&&(l=sN(l,n+(l.key==null||e&&e.key===l.key?"":(""+l.key).replace(Ym,"$&/")+"/")+o)),t.push(l)),1;o=0;var s=a===""?".":a+":";if(Gm(e))for(var u=0;u<e.length;u++)a=e[u],i=s+Xr(a,u),o+=bl(a,t,n,i,l);else if(u=oN(e),typeof u=="function")for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,i=s+Xr(a,u++),o+=bl(a,t,n,i,l);else if(i==="object"){if(typeof e.then=="function")return bl(uN(e),t,n,a,l);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return o}function Vo(e,t,n){if(e==null)return e;var a=[],l=0;return bl(e,a,"","",function(i){return t.call(n,i,l++)}),a}function cN(e){if(e._status===-1){var t=e._result,n=t();n.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a,n.status===void 0&&(n.status="fulfilled",n.value=a))},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a,n.status===void 0&&(n.status="rejected",n.reason=a))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Km=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Jh(e){var t=Ve.T,n={};n.types=t!==null?t.types:null,Ve.T=n;try{var a=e(),l=Ve.S;l!==null&&l(n,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Yu,Km)}catch(i){Km(i)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ve.T=t}}function Wh(e){var t=Ve.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Jh(Wh.bind(null,e))}var dN={map:Vo,forEach:function(e,t,n){Vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vo(e,function(){t++}),t},toArray:function(e){return Vo(e,function(t){return t})||[]},only:function(e){if(!Cd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Activity=lN;pe.Children=dN;pe.Component=fi;pe.Fragment=Xw;pe.Profiler=Jw;pe.PureComponent=Sd;pe.StrictMode=Qw;pe.Suspense=nN;pe.ViewTransition=iN;pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ve;pe.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ve.H.useMemoCache(e)}};pe.addTransitionType=Wh;pe.cache=function(e){return function(){return e.apply(null,arguments)}};pe.cacheSignal=function(){return null};pe.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=Kh({},e.props),l=e.key;if(t!=null)for(i in t.key!==void 0&&(l=""+t.key),t)!Qh.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(a[i]=t[i]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var o=Array(i),s=0;s<i;s++)o[s]=arguments[s+2];a.children=o}return _d(e.type,l,a)};pe.createContext=function(e){return e={$$typeof:eN,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Ww,_context:e},e};pe.createElement=function(e,t,n){var a,l={},i=null;if(t!=null)for(a in t.key!==void 0&&(i=""+t.key),t)Qh.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(l[a]=t[a]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var s=Array(o),u=0;u<o;u++)s[u]=arguments[u+2];l.children=s}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)l[a]===void 0&&(l[a]=o[a]);return _d(e,i,l)};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:tN,render:e}};pe.isValidElement=Cd;pe.lazy=function(e){return{$$typeof:Gh,_payload:{_status:-1,_result:e},_init:cN}};pe.memo=function(e,t){return{$$typeof:aN,type:e,compare:t===void 0?null:t}};pe.startTransition=Jh;pe.unstable_useCacheRefresh=function(){return Ve.H.useCacheRefresh()};pe.use=function(e){return Ve.H.use(e)};pe.useActionState=function(e,t,n){return Ve.H.useActionState(e,t,n)};pe.useCallback=function(e,t){return Ve.H.useCallback(e,t)};pe.useContext=function(e){return Ve.H.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e,t){return Ve.H.useDeferredValue(e,t)};pe.useEffect=function(e,t){return Ve.H.useEffect(e,t)};pe.useEffectEvent=function(e){return Ve.H.useEffectEvent(e)};pe.useId=function(){return Ve.H.useId()};pe.useImperativeHandle=function(e,t,n){return Ve.H.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return Ve.H.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return Ve.H.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return Ve.H.useMemo(e,t)};pe.useOptimistic=function(e,t){return Ve.H.useOptimistic(e,t)};pe.useReducer=function(e,t,n){return Ve.H.useReducer(e,t,n)};pe.useRef=function(e){return Ve.H.useRef(e)};pe.useState=function(e){return Ve.H.useState(e)};pe.useSyncExternalStore=function(e,t,n){return Ve.H.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return Ve.H.useTransition()};pe.version="19.3.0";qh.exports=pe;var R=qh.exports;function $e(e,t){const n=R.useRef(null);n.current===null&&(n.current=t());const a=R.useCallback(i=>e(o=>{n.current=o,i()}),[e]),l=R.useCallback(()=>n.current,[]);return R.useSyncExternalStore(a,l,l)}function me(...e){const t=[];for(const n of e)if(n){if(typeof n=="string"||typeof n=="number")t.push(String(n));else if(Array.isArray(n)){const a=me(...n);a&&t.push(a)}else if(typeof n=="object")for(const[a,l]of Object.entries(n))l&&t.push(a)}return t.join(" ")}function At(e){const{value:t,defaultValue:n,size:a="md",disabled:l=!1,loading:i=!1,checkedText:o,uncheckedText:s,className:u,style:d,onChange:p,renderLoadingIcon:c,ref:f}=e,g=!!(o||s),C=R.useRef(null),S=R.useRef({onChange:p});S.current={onChange:p};const _=R.useRef(null);_.current===null&&(_.current=Bh({value:t,defaultValue:n,disabled:l,loading:i,onChange:y=>{var k,E;return(E=(k=S.current).onChange)==null?void 0:E.call(k,y)}}));const v=_.current;R.useEffect(()=>{v.updateOptions({value:t,disabled:l,loading:i})},[v,t,l,i]);const h=$e(v.subscribe,v.getState);return R.useImperativeHandle(f,()=>({focus:()=>{var y;return(y=C.current)==null?void 0:y.focus()},toggle:()=>v.toggle()}),[v]),m.jsx("button",{ref:C,type:"button",role:"switch",className:me("xui-switch",`xui-switch--${a}`,{"is-checked":h.checked,"is-disabled":h.disabled,"is-loading":h.loading,"xui-switch--has-text":g},u),style:d,"aria-checked":h.checked,"aria-disabled":h.disabled||h.loading,disabled:h.disabled||h.loading,onClick:()=>v.toggle(),children:m.jsxs("span",{className:"xui-switch__core",children:[g&&m.jsxs("span",{className:"xui-switch__text-wrap",children:[o&&m.jsx("span",{className:"xui-switch__text xui-switch__text--checked",title:o,"aria-hidden":"true",children:o}),s&&m.jsx("span",{className:"xui-switch__text xui-switch__text--unchecked",title:s,"aria-hidden":"true",children:s})]}),m.jsx("span",{className:"xui-switch__thumb",children:h.loading&&(c?c():m.jsx(mN,{}))})]})})}function mN(){return m.jsx("svg",{className:"xui-switch__spinner",viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe.loading}})}function ps(e){const{value:t,defaultValue:n,disabled:a=!1,indeterminate:l=!1,className:i,style:o,onChange:s,children:u,renderCheckIcon:d,renderIndeterminateIcon:p,ref:c}=e,f=R.useRef(null),g=R.useRef({onChange:s});g.current={onChange:s};const C=R.useRef(null);C.current===null&&(C.current=gh({value:t,defaultValue:n,disabled:a,indeterminate:l,onChange:v=>{var h,y;return(y=(h=g.current).onChange)==null?void 0:y.call(h,v)}}));const S=C.current;R.useEffect(()=>{S.updateOptions({value:t,disabled:a,indeterminate:l})},[S,t,a,l]);const _=$e(S.subscribe,S.getState);return R.useEffect(()=>{f.current&&(f.current.indeterminate=_.indeterminate)},[_.indeterminate]),R.useImperativeHandle(c,()=>({focus:()=>{var v;return(v=f.current)==null?void 0:v.focus()},toggle:()=>S.toggle()}),[S]),m.jsxs("label",{className:me("xui-checkbox",{"is-checked":_.checked,"is-disabled":_.disabled,"is-indeterminate":_.indeterminate},i),style:o,children:[m.jsx("input",{ref:f,type:"checkbox",className:"xui-checkbox__input",checked:_.checked,disabled:_.disabled,"aria-disabled":_.disabled,onChange:()=>S.toggle()}),m.jsx("span",{className:"xui-checkbox__box","aria-hidden":"true",children:_.indeterminate?p?p():m.jsx(Pm,{name:"minus"}):_.checked?d?d():m.jsx(Pm,{name:"check"}):null}),u!=null&&m.jsx("span",{className:"xui-checkbox__label",children:u})]})}function Pm({name:e}){return m.jsx("svg",{className:"xui-checkbox__icon",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe[e]}})}function yn(e){const{type:t="default",size:n="md",closable:a=!1,className:l,style:i,onClose:o,renderCloseIcon:s,children:u}=e,d=R.useRef({onClose:o});d.current={onClose:o};const p=R.useRef(null);p.current===null&&(p.current=Mh({closable:a,onClose:()=>{var g,C;return(C=(g=d.current).onClose)==null?void 0:C.call(g)}}));const c=p.current;R.useEffect(()=>{c.updateOptions({closable:a})},[c,a]);const f=$e(c.subscribe,c.getState);return f.visible?m.jsxs("span",{className:me("xui-tag",`xui-tag--${t}`,`xui-tag--${n}`,l),style:i,children:[u,f.closable&&m.jsx("button",{type:"button",className:"xui-tag__close","aria-label":"close",onClick:()=>c.handleClose(),children:s?s():m.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe.close}})})]}):null}function kl(e){const{type:t="info",title:n,description:a,closable:l=!1,showIcon:i=!1,className:o,style:s,onClose:u,children:d,renderTitle:p,renderIcon:c,renderCloseIcon:f}=e,g=R.useRef({onClose:u});g.current={onClose:u};const C=R.useRef(null);C.current===null&&(C.current=mh({closable:l,onClose:()=>{var y,k;return(k=(y=g.current).onClose)==null?void 0:k.call(y)}}));const S=C.current;R.useEffect(()=>{S.updateOptions({closable:l})},[S,l]);const _=$e(S.subscribe,S.getState);if(!_.visible)return null;const v=p!==void 0||n!==void 0,h=d!=null||a!==void 0;return m.jsxs("div",{className:me("xui-alert",`xui-alert--${t}`,o),style:s,role:"alert",children:[i&&m.jsx("div",{className:"xui-alert__icon","aria-hidden":"true",children:c?c():m.jsx(pN,{type:t})}),m.jsxs("div",{className:"xui-alert__content",children:[v&&m.jsx("div",{className:"xui-alert__title",children:p?p():n}),h&&m.jsx("div",{className:"xui-alert__description",children:d??a})]}),_.closable&&m.jsx("button",{type:"button",className:"xui-alert__close","aria-label":"close",onClick:()=>S.handleClose(),children:f?f():m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe.close}})})]})}function pN({type:e}){return m.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe[e]}})}const ev=R.createContext(null);function fs(e){const{value:t,disabled:n=!1,className:a,style:l,children:i}=e,o=R.useRef(null);o.current===null&&(o.current=$h({disabled:n}));const s=o.current;R.useEffect(()=>{s.updateOptions({disabled:n})},[s,n]);const u=$e(s.subscribe,s.getState),d=R.useContext(ev),p=d?d.groupValue===t:!1,c=u.disabled||(d?d.groupDisabled:!1),f=()=>{c||d==null||d.select(t)};return m.jsxs("label",{className:me("xui-radio",{"is-checked":p,"is-disabled":c},a),style:l,children:[m.jsx("input",{className:"xui-radio__input",type:"radio",name:d==null?void 0:d.name,value:t,checked:p,disabled:c,"aria-disabled":c,onChange:f}),m.jsx("span",{className:"xui-radio__dot","aria-hidden":"true"}),i!=null&&m.jsx("span",{className:"xui-radio__label",children:i})]})}function Ku(e){const{value:t,defaultValue:n,disabled:a=!1,options:l,className:i,style:o,onChange:s,children:u}=e,d=`xui-radio-${R.useId()}`,p=R.useRef({onChange:s});p.current={onChange:s};const c=R.useRef(null);c.current===null&&(c.current=Uh({value:t,defaultValue:n,disabled:a,onChange:S=>{var _,v;return(v=(_=p.current).onChange)==null?void 0:v.call(_,S)}}));const f=c.current;R.useEffect(()=>{f.updateOptions({value:t,disabled:a})},[f,t,a]);const g=$e(f.subscribe,f.getState),C=R.useMemo(()=>({name:d,groupValue:g.value,groupDisabled:g.disabled,select:S=>f.select(S)}),[d,g.value,g.disabled,f]);return m.jsx(ev.Provider,{value:C,children:m.jsx("div",{className:me("xui-radio-group",i),style:o,role:"radiogroup",children:l&&l.length>0?l.map(S=>m.jsx(fs,{value:S.value,disabled:S.disabled,children:S.label},S.value)):u})})}function Vi(e){const{percent:t=0,type:n="line",strokeWidth:a=6,showText:l=!0,status:i="normal",className:o,style:s}=e,u=R.useRef(null);u.current===null&&(u.current=zh({percent:t,strokeWidth:a,status:i}));const d=u.current;R.useEffect(()=>{d.updateOptions({percent:t,strokeWidth:a,status:i})},[d,t,a,i]);const p=$e(d.subscribe,d.getState),c=`${Math.round(p.percent)}%`,f=(100-p.strokeWidth)/2,g=2*Math.PI*f,C=g*(1-p.percent/100);return m.jsx("div",{className:me("xui-progress",`xui-progress--${n}`,`is-${p.status}`,o),style:s,role:"progressbar","aria-valuenow":Math.round(p.percent),"aria-valuemin":0,"aria-valuemax":100,children:n==="circle"?m.jsxs(m.Fragment,{children:[m.jsxs("svg",{className:"xui-progress__svg",viewBox:"0 0 100 100","aria-hidden":"true",children:[m.jsx("circle",{className:"xui-progress__track",cx:50,cy:50,r:f,fill:"none",strokeWidth:p.strokeWidth}),m.jsx("circle",{className:"xui-progress__bar",cx:50,cy:50,r:f,fill:"none",strokeWidth:p.strokeWidth,strokeLinecap:"round",strokeDasharray:g,strokeDashoffset:C,transform:"rotate(-90 50 50)"})]}),l&&m.jsx("span",{className:"xui-progress__text xui-progress__text--circle",children:c})]}):m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"xui-progress__track",style:{height:`${p.strokeWidth}px`},children:m.jsx("div",{className:"xui-progress__bar",style:{width:`${p.percent}%`}})}),l&&m.jsx("span",{className:"xui-progress__text",children:c})]})})}function wl(e){const{count:t,max:n=99,dot:a=!1,showZero:l=!1,className:i,style:o,children:s}=e,u=R.useRef(null);u.current===null&&(u.current=fh({count:t,max:n,dot:a,showZero:l}));const d=u.current;R.useEffect(()=>{d.updateOptions({count:t,max:n,dot:a,showZero:l})},[d,t,n,a,l]);const p=$e(d.subscribe,d.getState);return s!=null?m.jsxs("span",{className:me("xui-badge",i),style:o,children:[s,p.visible?m.jsx("sup",{className:me("xui-badge__sup",{"is-dot":a}),"aria-hidden":a||void 0,children:p.text}):null]}):p.visible?m.jsx("sup",{className:me("xui-badge__sup","xui-badge__sup--standalone",{"is-dot":a}),"aria-hidden":a||void 0,children:p.text}):null}function oa(e){const{size:t="md",shape:n="circle",src:a,alt:l,className:i,style:o,onError:s,renderIcon:u,children:d}=e,p=R.useRef({onError:s});p.current={onError:s};const c=R.useRef(null);c.current===null&&(c.current=ph({src:a,onError:()=>{var C,S;return(S=(C=p.current).onError)==null?void 0:S.call(C)}}));const f=c.current;R.useEffect(()=>{f.updateOptions({src:a})},[f,a]);const g=$e(f.subscribe,f.getState);return m.jsx("span",{className:me("xui-avatar",`xui-avatar--${t}`,`xui-avatar--${n}`,i),style:o,children:a&&!g.failed?m.jsx("img",{className:"xui-avatar__img",src:a,alt:l??"",onError:()=>f.handleError()}):d!=null?m.jsx("span",{className:"xui-avatar__inner",children:d}):u?u():m.jsx(fN,{})})}function fN(){return m.jsx("svg",{className:"xui-avatar__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe.user}})}function Pu(e){const{description:t,className:n,style:a,children:l,renderImage:i}=e,o=R.useRef(null);o.current===null&&(o.current=bh({description:t}));const s=o.current;R.useEffect(()=>{s.updateOptions({description:t})},[s,t]);const u=$e(s.subscribe,s.getState);return m.jsxs("div",{className:me("xui-empty",n),style:a,children:[m.jsx("div",{className:"xui-empty__image","aria-hidden":"true",children:i?i():m.jsx(hN,{})}),u.description&&m.jsx("div",{className:"xui-empty__description",children:u.description}),l!=null&&m.jsx("div",{className:"xui-empty__footer",children:l})]})}function hN(){return m.jsx("svg",{className:"xui-empty__svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round",dangerouslySetInnerHTML:{__html:oe.inbox}})}function Oa(){return $e(sh,ih)}const vN=30;function ha(e){const{value:t,defaultValue:n,options:a,placeholder:l,disabled:i=!1,clearable:o=!1,multiple:s=!1,searchable:u=!1,virtual:d=!1,maxHeight:p=264,className:c,style:f,onChange:g,onClear:C,renderClearIcon:S,renderSuffixIcon:_,ref:v}=e,h=Oa(),y=R.useRef(null),k=R.useRef(null),E=R.useRef(null),$=R.useId(),A=R.useId(),B=R.useRef({onChange:g,onClear:C});B.current={onChange:g,onClear:C};const M=R.useRef(null);M.current===null&&(M.current=Eh({value:t,defaultValue:n,options:a,disabled:i,clearable:o,multiple:s,searchable:u,onChange:X=>{var ze,ee;return(ee=(ze=B.current).onChange)==null?void 0:ee.call(ze,X)},onClear:()=>{var X,ze;return(ze=(X=B.current).onClear)==null?void 0:ze.call(X)}}));const D=M.current,J=R.useRef(null);J.current===null&&(J.current=_r({itemCount:0,itemHeight:vN,viewportHeight:0}));const de=J.current;R.useEffect(()=>{D.updateOptions({value:t,options:a,disabled:i,clearable:o,multiple:s,searchable:u})},[D,t,a,i,o,s,u]);const ae=$e(D.subscribe,D.getState),se=$e(de.subscribe,de.getState);R.useImperativeHandle(v,()=>({focus:()=>{var X;return(X=k.current)==null?void 0:X.focus()},toggleOpen:()=>D.toggleOpen(),close:()=>D.close()}),[D]);const[ut,G]=R.useState(!1);R.useLayoutEffect(()=>{if(!ae.open){G(!1);return}G(!1);const X=()=>{const Oe=y.current,ve=E.current;if(!Oe||!ve)return;const qe=ve.getBoundingClientRect();if(qe.width===0&&qe.height===0)return;const{placement:hl}=mi(Oe.getBoundingClientRect(),qe,pi(),{placement:"bottom",gap:4,viewportPadding:4});G(hl==="top")},ze=requestAnimationFrame(X),ee=di(X);return()=>{cancelAnimationFrame(ze),ee()}},[ae.open]),R.useEffect(()=>{d&&de.updateOptions({itemCount:ae.filteredOptions.length,viewportHeight:p})}),R.useEffect(()=>{const X=ze=>{y.current&&!y.current.contains(ze.target)&&D.close()};return document.addEventListener("mousedown",X),()=>document.removeEventListener("mousedown",X)},[D]);const te=a==null?void 0:a.find(X=>X.value===ae.value),W=s?(Array.isArray(ae.value)?ae.value:[]).map(X=>{const ze=a==null?void 0:a.find(ee=>ee.value===X);return{value:X,label:(ze==null?void 0:ze.label)??X}}):[],j=s?W.length>0:ae.value!==null,q=ae.filteredOptions,le=d?q.slice(se.startIndex,se.endIndex+1):q,ue={maxHeight:`${p}px`,...d?{height:`${p}px`}:{}};R.useEffect(()=>{var X,ze;!ae.open||!u||(ze=(X=E.current)==null?void 0:X.querySelector(".xui-select__search"))==null||ze.focus()},[ae.open,u]),R.useEffect(()=>{d&&(de.scrollTo(0),E.current&&(E.current.scrollTop=0))},[ae.searchQuery,d,de]),R.useEffect(()=>{var X,ze;!ae.open||ae.activeIndex===-1||(ze=(X=document.getElementById(`${A}-option-${ae.activeIndex}`))==null?void 0:X.scrollIntoView)==null||ze.call(X,{block:"nearest"})},[ae.open,ae.activeIndex,A]);const We=X=>{switch(X.key){case"Enter":case" ":X.preventDefault(),ae.open?D.confirmHighlight():D.toggleOpen();break;case"Escape":ae.open&&(X.preventDefault(),D.close());break;case"ArrowDown":X.preventDefault(),ae.open?D.moveHighlight(1):D.toggleOpen();break;case"ArrowUp":X.preventDefault(),ae.open?D.moveHighlight(-1):D.toggleOpen();break}},Fe=X=>{switch(X.key){case"Enter":X.preventDefault(),D.confirmHighlight();break;case"ArrowDown":X.preventDefault(),D.moveHighlight(1);break;case"ArrowUp":X.preventDefault(),D.moveHighlight(-1);break;case"Escape":X.preventDefault(),D.close();break}},ct=X=>s?Array.isArray(ae.value)&&ae.value.includes(X):ae.value===X;return m.jsxs("div",{ref:y,className:me("xui-select",c,s&&"is-multiple",d&&"is-virtual",{"is-disabled":ae.disabled,"is-open":ae.open,"is-drop-up":ut}),style:f,children:[m.jsxs("div",{ref:k,id:$,className:"xui-select__trigger",role:"combobox","aria-expanded":ae.open,"aria-haspopup":"listbox","aria-controls":ae.open?A:void 0,"aria-activedescendant":ae.open&&ae.activeIndex!==-1?`${A}-option-${ae.activeIndex}`:void 0,"aria-disabled":ae.disabled||void 0,tabIndex:ae.disabled?-1:0,onClick:()=>D.toggleOpen(),onKeyDown:We,children:[s?m.jsxs("span",{className:"xui-select__tags",children:[W.map(X=>m.jsxs("span",{className:"xui-select__tag",children:[m.jsx("span",{className:"xui-select__tag-label",children:X.label}),m.jsx("span",{className:"xui-select__tag-close",role:"button","aria-label":"remove",onClick:ze=>{ze.stopPropagation(),D.select(X.value)},children:S?S():m.jsx("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe.clear}})})]},X.value)),W.length===0&&m.jsx("span",{className:"xui-select__placeholder",children:l??h.select.triggerPlaceholder})]}):te?m.jsx("span",{className:"xui-select__value",children:te.label}):m.jsx("span",{className:"xui-select__placeholder",children:l??h.select.triggerPlaceholder}),o&&j&&!ae.disabled?m.jsx("span",{className:"xui-select__clear",role:"button","aria-label":"clear",onClick:X=>{X.stopPropagation(),D.clear()},children:S?S():m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe.clear}})}):m.jsx("span",{className:"xui-select__arrow","aria-hidden":"true",children:_?_():m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe["arrow-down"]}})})]}),ae.open&&m.jsxs("ul",{ref:E,id:A,className:"xui-select__dropdown",role:"listbox","aria-labelledby":$,"aria-multiselectable":s||void 0,style:ue,onScroll:X=>de.scrollTo(X.currentTarget.scrollTop),children:[u&&m.jsx("li",{role:"presentation",className:"xui-select__search-item",children:m.jsx("input",{className:"xui-select__search",type:"text",role:"searchbox",placeholder:h.select.searchPlaceholder,value:ae.searchQuery,"aria-label":h.select.searchAriaLabel,onChange:X=>D.setSearch(X.currentTarget.value),onKeyDown:Fe,onClick:X=>X.stopPropagation()})}),le.length>0?m.jsxs(m.Fragment,{children:[d&&se.offsetY>0&&m.jsx("li",{className:"xui-select__spacer",style:{height:`${se.offsetY}px`},"aria-hidden":"true"}),le.map((X,ze)=>{const ee=d?se.startIndex+ze:ze;return m.jsx("li",{id:`${A}-option-${ee}`,className:me("xui-select__option",{"is-selected":ct(X.value),"is-active":ee===ae.activeIndex,"is-disabled":X.disabled}),role:"option","aria-selected":ct(X.value),"aria-disabled":X.disabled||void 0,onClick:()=>D.select(X.value),children:X.label},X.value)}),d&&se.fillerHeight>0&&m.jsx("li",{className:"xui-select__spacer",style:{height:`${se.fillerHeight}px`},"aria-hidden":"true"})]}):m.jsx("li",{className:"xui-select__empty",role:"presentation",children:"无匹配结果"})]})]})}function tv(e){const{value:t,defaultValue:n,items:a,className:l,style:i,onChange:o,renderPanel:s}=e,u=R.useRef(null),d=R.useId(),p=R.useRef({onChange:o});p.current={onChange:o};const c=R.useRef(null);c.current===null&&(c.current=Dh({value:t,defaultValue:n,items:a,onChange:v=>{var h,y;return(y=(h=p.current).onChange)==null?void 0:y.call(h,v)}}));const f=c.current;R.useEffect(()=>{f.updateOptions({value:t,items:a})},[f,t,a]);const g=$e(f.subscribe,f.getState),C=R.useRef(g.value);R.useEffect(()=>{var v,h;g.value!==null&&g.value!==C.current&&((h=(v=u.current)==null?void 0:v.querySelector(`[data-value="${g.value.replace(/"/g,'\\"')}"]`))==null||h.focus()),C.current=g.value},[g.value]);const S=a==null?void 0:a.find(v=>v.value===g.value),_=v=>{v.key!=="ArrowRight"&&v.key!=="ArrowLeft"||(v.preventDefault(),f.moveActive(v.key==="ArrowRight"?1:-1))};return m.jsxs("div",{ref:u,className:me("xui-tabs",l),style:i,children:[m.jsx("div",{className:"xui-tabs__list",role:"tablist",onKeyDown:_,children:(a??[]).map(v=>m.jsx("button",{id:`${d}-tab-${v.value}`,type:"button",className:me("xui-tabs__tab",{"is-active":v.value===g.value,"is-disabled":v.disabled}),role:"tab","aria-selected":v.value===g.value,"aria-disabled":v.disabled||void 0,"aria-controls":`${d}-panel-${v.value}`,tabIndex:v.value===g.value?0:-1,"data-value":v.value,onClick:()=>f.activate(v.value),children:v.label},v.value))}),S&&m.jsx("div",{id:`${d}-panel-${S.value}`,className:"xui-tabs__panel",role:"tabpanel","aria-labelledby":`${d}-tab-${S.value}`,children:s?s(S):S.label})]})}var nv={exports:{}},wr={},av={exports:{}},lv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(G,te){var W=G.length;G.push(te);e:for(;0<W;){var j=W-1>>>1,q=G[j];if(0<l(q,te))G[j]=te,G[W]=q,W=j;else break e}}function n(G){return G.length===0?null:G[0]}function a(G){if(G.length===0)return null;var te=G[0],W=G.pop();if(W!==te){G[0]=W;e:for(var j=0,q=G.length,le=q>>>1;j<le;){var ue=2*(j+1)-1,We=G[ue],Fe=ue+1,ct=G[Fe];if(0>l(We,W))Fe<q&&0>l(ct,We)?(G[j]=ct,G[Fe]=W,j=Fe):(G[j]=We,G[ue]=W,j=ue);else if(Fe<q&&0>l(ct,W))G[j]=ct,G[Fe]=W,j=Fe;else break e}}return te}function l(G,te){var W=G.sortIndex-te.sortIndex;return W!==0?W:G.id-te.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],p=1,c=null,f=3,g=!1,C=!1,S=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function k(G){for(var te=n(d);te!==null;){if(te.callback===null)a(d);else if(te.startTime<=G)a(d),te.sortIndex=te.expirationTime,t(u,te);else break;te=n(d)}}function E(G){if(S=!1,k(G),!C)if(n(u)!==null)C=!0,$||($=!0,de());else{var te=n(d);te!==null&&ut(E,te.startTime-G)}}var $=!1,A=-1,B=5,M=-1;function D(){return _?!0:!(e.unstable_now()-M<B)}function J(){if(_=!1,$){var G=e.unstable_now();M=G;var te=!0;try{e:{C=!1,S&&(S=!1,h(A),A=-1),g=!0;var W=f;try{t:{for(k(G),c=n(u);c!==null&&!(c.expirationTime>G&&D());){var j=c.callback;if(typeof j=="function"){c.callback=null,f=c.priorityLevel;var q=j(c.expirationTime<=G);if(G=e.unstable_now(),typeof q=="function"){c.callback=q,k(G),te=!0;break t}c===n(u)&&a(u),k(G)}else a(u);c=n(u)}if(c!==null)te=!0;else{var le=n(d);le!==null&&ut(E,le.startTime-G),te=!1}}break e}finally{c=null,f=W,g=!1}te=void 0}}finally{te?de():$=!1}}}var de;if(typeof y=="function")de=function(){y(J)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,se=ae.port2;ae.port1.onmessage=J,de=function(){se.postMessage(null)}}else de=function(){v(J,0)};function ut(G,te){A=v(function(){G(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(G){G.callback=null},e.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<G?Math.floor(1e3/G):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(G){switch(f){case 1:case 2:case 3:var te=3;break;default:te=f}var W=f;f=te;try{return G()}finally{f=W}},e.unstable_requestPaint=function(){_=!0},e.unstable_runWithPriority=function(G,te){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var W=f;f=G;try{return te()}finally{f=W}},e.unstable_scheduleCallback=function(G,te,W){var j=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?j+W:j):W=j,G){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=W+q,G={id:p++,callback:te,priorityLevel:G,startTime:W,expirationTime:q,sortIndex:-1},W>j?(G.sortIndex=W,t(d,G),n(u)===null&&G===n(d)&&(S?(h(A),A=-1):S=!0,ut(E,W-j))):(G.sortIndex=q,t(u,G),C||g||(C=!0,$||($=!0,de()))),G},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(G){var te=f;return function(){var W=f;f=te;try{return G.apply(this,arguments)}finally{f=W}}}})(lv);av.exports=lv;var gN=av.exports,iv={exports:{}},yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bN=R;function ov(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Qn(){}var Ct={d:{f:Qn,r:function(){throw Error(ov(522))},D:Qn,C:Qn,L:Qn,m:Qn,X:Qn,S:Qn,M:Qn},p:0,findDOMNode:null},yN=Symbol.for("react.portal"),SN=Symbol.for("react.recoverable"),Xm=Symbol.for("react.optimistic_key");function xN(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yN,key:a==null?null:a===Xm?Xm:""+a,children:e,containerInfo:t,implementation:n}}var Li=bN.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Nr(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ct;yt.browser=function(e){return{$$typeof:SN,_reason:e}};yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(ov(299));return xN(e,t,null,n)};yt.flushSync=function(e){var t=Li.T,n=Ct.p;try{if(Li.T=null,Ct.p=2,e)return e()}finally{Li.T=t,Ct.p=n,Ct.d.f()}};yt.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ct.d.C(e,t))};yt.prefetchDNS=function(e){typeof e=="string"&&Ct.d.D(e)};yt.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,a=Nr(n,t.crossOrigin),l=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Ct.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:l,fetchPriority:i}):n==="script"&&Ct.d.X(e,{crossOrigin:a,integrity:l,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};yt.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Nr(t.as,t.crossOrigin);Ct.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Ct.d.M(e)};yt.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,a=Nr(n,t.crossOrigin);Ct.d.L(e,n,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};yt.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Nr(t.as,t.crossOrigin);Ct.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Ct.d.m(e)};yt.requestFormReset=function(e){Ct.d.r(e)};yt.unstable_batchedUpdates=function(e,t){return e(t)};yt.useFormState=function(e,t,n){return Li.H.useFormState(e,t,n)};yt.useFormStatus=function(){return Li.H.useHostTransitionStatus()};yt.version="19.3.0";function sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv)}catch(e){console.error(e)}}sv(),iv.exports=yt;var rv=iv.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=gN,uv=R,_N=rv;function I(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function cv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wo(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function dv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qm(e){if(wo(e)!==e)throw Error(I(188))}function CN(e){var t=e.alternate;if(!t){if(t=wo(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Qm(l),e;if(i===a)return Qm(l),t;i=i.sibling}throw Error(I(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,a=i;break}if(s===a){o=!0,a=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,a=l;break}if(s===a){o=!0,a=i,n=l;break}s=s.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==a)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function pv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=pv(e),t!==null)return t;e=e.sibling}return null}function Bt(e,t,n,a,l,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,a,l,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Bt(e.child,t,n,a,l,i))return!0;e=e.sibling}return!1}function cl(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Jm(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function fv(e){var t=[null,null],n=cl(e);return n===null||hv(t,e,n.child,{foundSelf:!1}),t}function hv(e,t,n,a){for(;n!==null;){if(n===t)a.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(a.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&hv(e,t,n.child,a))return!0;n=n.sibling}return!1}function tt(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(I(559))}}var Nl=null,Xu=null;function kN(e,t,n){return e===n?!0:e===t?(Nl=e,!0):!1}function wN(e,t,n){return e===n?(Xu=e,!1):e===t?(Xu!==null&&(Nl=e),!0):!1}function Wm(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Qu(e,t,n){for(var a=0,l=e;l;l=n(l))a++;l=0;for(var i=t;i;i=n(i))l++;for(;0<a-l;)e=n(e),a--;for(;0<l-a;)t=n(t),l--;for(;a--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var De=Object.assign,NN=Symbol.for("react.element"),Lo=Symbol.for("react.transitional.element"),Ri=Symbol.for("react.portal"),Tl=Symbol.for("react.fragment"),vv=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),gv=Symbol.for("react.consumer"),xn=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),ec=Symbol.for("react.suspense_list"),wd=Symbol.for("react.memo"),ta=Symbol.for("react.lazy"),tc=Symbol.for("react.activity"),TN=Symbol.for("react.legacy_hidden"),zN=Symbol.for("react.memo_cache_sentinel"),nc=Symbol.for("react.view_transition"),UN=Symbol.for("react.recoverable"),ep=Symbol.iterator;function Ci(e){return e===null||typeof e!="object"?null:(e=ep&&e[ep]||e["@@iterator"],typeof e=="function"?e:null)}var $N=Symbol.for("react.client.reference");function ac(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$N?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tl:return"Fragment";case Ju:return"Profiler";case vv:return"StrictMode";case Wu:return"Suspense";case ec:return"SuspenseList";case tc:return"Activity";case nc:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Ri:return"Portal";case xn:return e.displayName||"Context";case gv:return(e._context.displayName||"Context")+".Consumer";case kd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wd:return t=e.displayName||null,t!==null?t:ac(e.type)||"Memo";case ta:t=e._payload,e=e._init;try{return ac(e(t))}catch{}}return null}var Bi=Array.isArray,ce=uv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te=_N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ga={pending:!1,data:null,method:null,action:null},lc=[],zl=-1;function Un(e){return{current:e}}function ft(e){0>zl||(e.current=lc[zl],lc[zl]=null,zl--)}function Le(e,t){zl++,lc[zl]=e.current,e.current=t}var Nn=Un(null),ao=Un(null),va=Un(null),Ms=Un(null);function js(e,t){switch(Le(va,t),Le(ao,e),Le(Nn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ff(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ff(t),e=jb(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ft(Nn),Le(Nn,e)}function Pl(){ft(Nn),ft(ao),ft(va)}function ic(e){var t=e.memoizedState;t!==null&&(ii._currentValue=t.memoizedState,Le(Ms,e)),t=Nn.current;var n=jb(t,e.type);t!==n&&(Le(ao,e),Le(Nn,n))}function Vs(e){ao.current===e&&(ft(Nn),ft(ao)),Ms.current===e&&(ft(Ms),ii._currentValue=Ga)}var Qr,tp;function Wn(e){if(Qr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qr=t&&t[1]||"",tp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qr+e+tp}var Jr=!1;function Wr(e,t){if(!e||Jr)return"";Jr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var c=function(){throw Error()};if(Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(C){var f=C}Reflect.construct(e,[],c)}else{try{c.call()}catch(C){f=C}c=!1;try{var g=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),c=!0,new e}finally{c&&(g!==void 0?Object.defineProperty(e.prototype,"props",g):delete e.prototype.props)}}}else{try{throw Error()}catch(C){f=C}(c=e())&&typeof c.catch=="function"&&c.catch(function(){})}}catch(C){if(C&&f&&typeof C.stack=="string")return[C.stack,f.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var u=o.split(`
`),d=s.split(`
`);for(l=a=0;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;for(;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;if(a===u.length||l===d.length)for(a=u.length-1,l=d.length-1;1<=a&&0<=l&&u[a]!==d[l];)l--;for(;1<=a&&0<=l;a--,l--)if(u[a]!==d[l]){if(a!==1||l!==1)do if(a--,l--,0>l||u[a]!==d[l]){var p=`
`+u[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=l);break}}}finally{Jr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Wn(n):""}function EN(e,t){switch(e.tag){case 26:case 27:case 5:return Wn(e.type);case 16:return Wn("Lazy");case 13:return e.child!==t&&t!==null?Wn("Suspense Fallback"):Wn("Suspense");case 19:return Wn("SuspenseList");case 0:case 15:return Wr(e.type,!1);case 11:return Wr(e.type.render,!1);case 1:return Wr(e.type,!0);case 31:return Wn("Activity");case 30:return Wn("ViewTransition");default:return""}}function np(e){try{var t="",n=null;do t+=EN(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var oc=Object.prototype.hasOwnProperty,Nd=nt.unstable_scheduleCallback,eu=nt.unstable_cancelCallback,AN=nt.unstable_shouldYield,RN=nt.unstable_requestPaint,Ht=nt.unstable_now,BN=nt.unstable_getCurrentPriorityLevel,bv=nt.unstable_ImmediatePriority,yv=nt.unstable_UserBlockingPriority,Ls=nt.unstable_NormalPriority,ON=nt.unstable_LowPriority,Sv=nt.unstable_IdlePriority,ZN=nt.log,DN=nt.unstable_setDisableYieldValue,No=null,It=null;function sa(e){if(typeof ZN=="function"&&DN(e),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(No,e)}catch{}}var Ft=Math.clz32?Math.clz32:VN,MN=Math.log,jN=Math.LN2;function VN(e){return e>>>=0,e===0?32:31-(MN(e)/jN|0)|0}var Ho=256,Io=262144,Fo=4194304;function Va(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Tr(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?l=Va(a):(o&=s,o!==0?l=Va(o):n||(n=s&~e,n!==0&&(l=Va(n))))):(s=a&~i,s!==0?l=Va(s):o!==0?l=Va(o):n||(n=a&~e,n!==0&&(l=Va(n)))),l===0?0:t!==0&&t!==l&&!(t&i)&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function To(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xv(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-Ft(n),l=1<<a;t|=e[a],n&=~l}return t}function LN(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _v(){var e=Fo;return Fo<<=1,!(Fo&62914560)&&(Fo=4194304),e}function tu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function HN(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,u=e.expirationTimes,d=e.hiddenUpdates;for(n=o&~n;0<n;){var p=31-Ft(n),c=1<<p;s[p]=0,u[p]=-1;var f=d[p];if(f!==null)for(d[p]=null,p=0;p<f.length;p++){var g=f[p];g!==null&&(g.lane&=-536870913)}n&=~c}a!==0&&Cv(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Cv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ft(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function kv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ft(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function wv(e,t){var n=t&-t;return n=n&42?1:Td(n),n&(e.suspendedLanes|t)?0:n}function Td(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zd(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Nv(){var e=Te.p;return e!==0?e:(e=window.event,e===void 0?32:oy(e.type))}function ap(e,t){var n=Te.p;try{return Te.p=e,t()}finally{Te.p=n}}var Kn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Kn,Ot="__reactProps$"+Kn,hi="__reactContainer$"+Kn,lp="__reactEvents$"+Kn,IN="__reactListeners$"+Kn,FN="__reactHandles$"+Kn,ip="__reactResources$"+Kn,Uo="__reactMarker$"+Kn,Hs="__reactLoad$"+Kn;function zr(e){delete e[mt],delete e[Ot],delete e[IN],delete e[FN]}function Fa(e){var t;if(t=e[mt])return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_f(e);e!==null;){if(n=e[mt])return n;e=_f(e)}return t}e=n,n=e.parentNode}return null}function vi(e){if(e=e[mt]||e[hi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Oi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(I(33))}function Ml(e){var t=e[ip];return t||(t=e[ip]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[Uo]=!0}function Tv(e){e[Hs]=void 0}var zv=new Set,Uv={};function dl(e,t){Xl(e,t),Xl(e+"Capture",t)}function Xl(e,t){for(Uv[e]=t,e=0;e<t.length;e++)zv.add(t[e])}var qN=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),op={},sp={};function GN(e){return oc.call(sp,e)?!0:oc.call(op,e)?!1:qN.test(e)?sp[e]=!0:(op[e]=!0,!1)}var Ce=!1;function rp(){var e=Ce;return Ce=!1,e}function hs(e,t,n){if(GN(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function qo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function En(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,a)}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $v(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function YN(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sc(e){if(!e._valueTracker){var t=$v(e)?"checked":"value";e._valueTracker=YN(e,t,""+e[t])}}function Ev(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=$v(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}var KN=/[\n"\\]/g;function Jt(e){return e.replace(KN,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function rc(e,t,n,a,l,i,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?o==="number"&&e.value==t?nu(e,Dt(e.value)):nu(e,Dt(t)):n!=null?nu(e,Dt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Dt(s):e.removeAttribute("name")}function Av(e,t,n,a,l,i,o,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){sc(e);return}n=n!=null?""+Dt(n):"",t=t!=null?""+Dt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),sc(e)}function nu(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function jl(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Rv(e,t,n){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Dt(n):""}function Bv(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(I(92));if(Bi(a)){if(1<a.length)throw Error(I(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Dt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),sc(e)}function Ql(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var PN=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function up(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||PN.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ov(e,t,n){if(t!=null&&typeof t!="object")throw Error(I(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",Ce=!0);for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&(up(e,l,a),Ce=!0)}else for(var i in t)t.hasOwnProperty(i)&&up(e,i,t[i])}function Ud(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var XN=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),QN=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(e){return QN.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _n(){}var uc=null;function $d(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,Vl=null;function cp(e){var t=vi(e);if(t&&(e=t.stateNode)){var n=e[Ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(rc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Jt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Ot]||null;if(!l)throw Error(I(90));rc(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ev(a)}break e;case"textarea":Rv(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&jl(e,!!n.multiple,t,!1)}}}var au=!1;function Zv(e,t,n){if(au)return e(t,n);au=!0;try{var a=e(t);return a}finally{if(au=!1,(Ul!==null||Vl!==null)&&(Hr(),Ul&&(t=Ul,e=Vl,Vl=Ul=null,cp(t),e)))for(t=0;t<e.length;t++)cp(e[t])}}function lo(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Ot]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=!1;if(Ln)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){cc=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{cc=!1}var ra=null,Ed=null,gs=null;function Dv(){if(gs)return gs;var e,t=Ed,n=t.length,a,l="value"in ra?ra.value:ra.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return gs=l.slice(e,1<a?1-a:void 0)}function bs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Go(){return!0}function dp(){return!1}function kt(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Go:dp,this.isPropagationStopped=dp,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),t}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ur=kt(Za),$o=De({},Za,{view:0,detail:0}),JN=kt($o),lu,iu,wi,$r=De({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(lu=e.screenX-wi.screenX,iu=e.screenY-wi.screenY):iu=lu=0,wi=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),mp=kt($r),WN=De({},$r,{dataTransfer:0}),eT=kt(WN),tT=De({},$o,{relatedTarget:0}),ou=kt(tT),nT=De({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),aT=kt(nT),lT=De({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iT=kt(lT),oT=De({},Za,{data:0}),pp=kt(oT),sT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uT[e])?!!t[e]:!1}function Ad(){return cT}var dT=De({},$o,{key:function(e){if(e.key){var t=sT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(e){return e.type==="keypress"?bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mT=kt(dT),pT=De({},$r,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=kt(pT),fT=De({},Za,{submitter:0}),hT=kt(fT),vT=De({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),gT=kt(vT),bT=De({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),yT=kt(bT),ST=De({},$r,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xT=kt(ST),_T=De({},Za,{newState:0,oldState:0,source:0}),CT=kt(_T),kT=[9,13,27,32],Rd=Ln&&"CompositionEvent"in window,Hi=null;Ln&&"documentMode"in document&&(Hi=document.documentMode);var wT=Ln&&"TextEvent"in window&&!Hi,Mv=Ln&&(!Rd||Hi&&8<Hi&&11>=Hi),hp=" ",vp=!1;function jv(e,t){switch(e){case"keyup":return kT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $l=!1;function NT(e,t){switch(e){case"compositionend":return Vv(t);case"keypress":return t.which!==32?null:(vp=!0,hp);case"textInput":return e=t.data,e===hp&&vp?null:e;default:return null}}function TT(e,t){if($l)return e==="compositionend"||!Rd&&jv(e,t)?(e=Dv(),gs=Ed=ra=null,$l=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mv&&t.locale!=="ko"?null:t.data;default:return null}}var zT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zT[e.type]:t==="textarea"}function Lv(e,t,n,a){Ul?Vl?Vl.push(a):Vl=[a]:Ul=a,t=cr(t,"onChange"),0<t.length&&(n=new Ur("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ii=null,io=null;function UT(e){Zb(e,0)}function Er(e){var t=Oi(e);if(Ev(t))return e}function bp(e,t){if(e==="change")return t}var Hv=!1;if(Ln){var su;if(Ln){var ru="oninput"in document;if(!ru){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),ru=typeof yp.oninput=="function"}su=ru}else su=!1;Hv=su&&(!document.documentMode||9<document.documentMode)}function Sp(){Ii&&(Ii.detachEvent("onpropertychange",Iv),io=Ii=null)}function Iv(e){if(e.propertyName==="value"&&Er(io)){var t=[];Lv(t,io,e,$d(e)),Zv(UT,t)}}function $T(e,t,n){e==="focusin"?(Sp(),Ii=t,io=n,Ii.attachEvent("onpropertychange",Iv)):e==="focusout"&&Sp()}function ET(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Er(io)}function AT(e,t){if(e==="click")return Er(t)}function RT(e,t){if(e==="input"||e==="change")return Er(t)}function BT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:BT;function oo(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!oc.call(t,l)||!Gt(e[l],t[l]))return!1}return!0}function dc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _p(e,t){var n=xp(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xp(n)}}function Fv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=dc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=dc(e.document)}return t}function Bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var OT=Ln&&"documentMode"in document&&11>=document.documentMode,El=null,mc=null,Fi=null,pc=!1;function Cp(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pc||El==null||El!==dc(a)||(a=El,"selectionStart"in a&&Bd(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Fi&&oo(Fi,a)||(Fi=a,a=cr(mc,"onSelect"),0<a.length&&(t=new Ur("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=El)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Al={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},uu={},Gv={};Ln&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete Al.animationend.animation,delete Al.animationiteration.animation,delete Al.animationstart.animation),"TransitionEvent"in window||delete Al.transitionend.transition);function ml(e){if(uu[e])return uu[e];if(!Al[e])return e;var t=Al[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gv)return uu[e]=t[n];return e}var Yv=ml("animationend"),Kv=ml("animationiteration"),Pv=ml("animationstart"),ZT=ml("transitionrun"),DT=ml("transitionstart"),MT=ml("transitioncancel"),Xv=ml("transitionend"),Qv=new Map,fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fc.push("scrollEnd");function pn(e,t){Qv.set(e,t),dl(t,[e])}var jT=0;function Hn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=mn.identifierPrefix;var n=jT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function kp(e){if(e==null||typeof e=="string")return e;var t=null,n=Yl;if(n!==null)for(var a=0;a<n.length;a++){var l=e[n[a]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function Pn(e,t){return e=kp(e),t=kp(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Is=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pt=[],Rl=0,Od=0;function Ar(){for(var e=Rl,t=Od=Rl=0;t<e;){var n=Pt[t];Pt[t++]=null;var a=Pt[t];Pt[t++]=null;var l=Pt[t];Pt[t++]=null;var i=Pt[t];if(Pt[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&Jv(n,l,i)}}function Rr(e,t,n,a){Pt[Rl++]=e,Pt[Rl++]=t,Pt[Rl++]=n,Pt[Rl++]=a,Od|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Zd(e,t,n,a){return Rr(e,t,n,a),Fs(e)}function pl(e,t){return Rr(e,null,null,t),Fs(e)}function Jv(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-Ft(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function Fs(e){if(50<eo)throw eo=0,zs=null,Error(I(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Bl={};function VT(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,a){return new VT(e,t,n,a)}function Dd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jn(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wv(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ys(e,t,n,a,l,i){var o=0;if(a=e,typeof a=="function")Dd(a)&&(o=1);else if(typeof a=="string")o=f2(e,n,Nn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case tc:return e=$t(31,n,t,l),e.elementType=tc,e.lanes=i,e;case Tl:return Ya(n.children,l,i,t);case vv:o=8,l|=24;break;case Ju:return e=$t(12,n,t,l|2),e.elementType=Ju,e.lanes=i,e;case Wu:return e=$t(13,n,t,l),e.elementType=Wu,e.lanes=i,e;case ec:return e=$t(19,n,t,l),e.elementType=ec,e.lanes=i,e;case TN:case nc:return e=l|32,e=$t(30,n,t,e),e.elementType=nc,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case xn:o=10;break e;case gv:o=9;break e;case kd:o=11;break e;case wd:o=14;break e;case ta:o=16,a=null;break e}o=29,n=Error(I(130,e===null?"null":typeof e,"")),a=null}return t=$t(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Ya(e,t,n,a){return e=$t(7,e,a,t),e.lanes=n,e}function cu(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function eg(e){var t=$t(18,null,null,0);return t.stateNode=e,t}function du(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wp=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var n=wp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:np(t)},wp.set(e,t),t)}return{value:e,source:t,stack:np(t)}}var Ol=[],Zl=0,qs=null,so=0,Xt=[],Qt=0,za=null,Cn=1,kn="";function Rn(e,t){Ol[Zl++]=so,Ol[Zl++]=qs,qs=e,so=t}function tg(e,t,n){Xt[Qt++]=Cn,Xt[Qt++]=kn,Xt[Qt++]=za,za=e;var a=Cn;e=kn;var l=32-Ft(a)-1;a&=~(1<<l),n+=1;var i=32-Ft(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Cn=1<<32-Ft(t)+l|n<<l|a,kn=i+e}else Cn=1<<i|n<<l|a,kn=e}function Br(e){e.return!==null&&(Rn(e,1),tg(e,1,0))}function Md(e){for(;e===qs;)qs=Ol[--Zl],Ol[Zl]=null,so=Ol[--Zl],Ol[Zl]=null;for(;e===za;)za=Xt[--Qt],Xt[Qt]=null,kn=Xt[--Qt],Xt[Qt]=null,Cn=Xt[--Qt],Xt[Qt]=null}function ng(e,t){Xt[Qt++]=Cn,Xt[Qt++]=kn,Xt[Qt++]=za,Cn=t.id,kn=t.overflow,za=e}var rt=null,je=null,ge=!1,ga=null,en=!1,hc=Error(I(519));function Ua(e){var t=Error(I(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(Wt(t,e)),hc}function Np(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[mt]=e,t[Ot]=a,n){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(n=0;n<po.length;n++)Se(po[n],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),Av(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),Bv(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Mb(t.textContent,n)?(a.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),a.onScroll!=null&&Se("scroll",t),a.onScrollEnd!=null&&Se("scrollend",t),a.onClick!=null&&(t.onclick=_n),t=!0):t=!1,t||Ua(e,!0)}function Gs(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:rt=rt.return}}function vl(e){if(e!==rt)return!1;if(!ge)return Gs(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Wc(e.type,e.memoizedProps)),n=!n),n&&je&&Ua(e),Gs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));je=xf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));je=xf(e)}else t===27?(t=je,Da(e.type)?(e=ad,ad=null,je=e):je=t):je=rt?an(e.stateNode.nextSibling):null;return!0}function Wa(){je=rt=null,ge=!1}function mu(){var e=ga;return e!==null&&(Nt===null?Nt=e:Nt.push.apply(Nt,e),ga=null),e}function ro(e){ga===null?ga=[e]:ga.push(e)}var vc=Un(null),fl=null,Zn=null;function ua(e,t,n){Le(vc,t._currentValue),t._currentValue=n}function Vn(e){e._currentValue=vc.current,ft(vc)}function Ss(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function gc(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=l;for(var u=0;u<t.length;u++)if(s.context===t[u]){i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ss(i.return,n,e),a||(o=null);break e}i=s.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(I(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Ss(o,n,e),o=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Ss(l.return,n,e),o=l.child,o=o!==null?o.sibling:null):o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function el(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if(l.flags&524288)i=!0;else if(l.flags&262144)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(I(387));if(o=o.memoizedProps,o!==null){var s=l.type;Gt(l.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(l===Ms.current){if(o=l.alternate,o===null)throw Error(I(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ii):e=[ii])}l=l.return}return e!==null&&gc(t,e,n,a),t.flags|=262144,e!==null}function Ys(e){for(e=e.firstContext;e!==null;){if(!Gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tl(e){fl=e,Zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pt(e){return ag(fl,e)}function Yo(e,t){return fl===null&&tl(e),ag(e,t)}function ag(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zn===null){if(e===null)throw Error(I(308));Zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zn=Zn.next=t;return n}var LT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},HT=nt.unstable_scheduleCallback,IT=nt.unstable_NormalPriority,Qe={$$typeof:xn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jd(){return{controller:new LT,data:new Map,refCount:0}}function Eo(e){e.refCount--,e.refCount===0&&HT(IT,function(){e.controller.abort()})}function Tp(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var a=t[e];n.indexOf(a)===-1&&n.push(a)}}}var Zi=null;function FT(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var qi=null,bc=0,nl=0,Ll=null;function qT(e,t){if(qi===null){var n=qi=[];bc=0,nl=pm(),Ll={status:"pending",value:void 0,then:function(a){n.push(a)}}}return bc++,t.then(zp,zp),t}function zp(){if(--bc===0&&(Zi=null,qi!==null)){Ll!==null&&(Ll.status="fulfilled");var e=qi;qi=null,nl=0,Ll=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function GT(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Up=ce.S;ce.S=function(e,t){if(xb=Ht(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&qT(e,t),Zi!==null)for(var n=ni;n!==null;)Tp(n,Zi),n=n.next;if(n=e.types,n!==null){for(var a=ni;a!==null;)Tp(a,n),a=a.next;if(nl!==0){a=Zi,a===null&&(a=Zi=[]);for(var l=0;l<n.length;l++){var i=n[l];a.indexOf(i)===-1&&a.push(i)}}}Up!==null&&Up(e,t)};var Ka=Un(null);function Vd(){var e=Ka.current;return e!==null?e:Ze.pooledCache}function xs(e,t){t===null?Le(Ka,Ka.current):Le(Ka,t.pool)}function lg(){var e=Vd();return e===null?null:{parent:Qe._currentValue,pool:e}}var gi=Error(I(460)),Ld=Error(I(474)),Or=Error(I(542)),Ks={then:function(){}};function $p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ig(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(_n,_n),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ap(e),e===void 0&&!("reason"in t)?Error(I(600)):e;default:if(typeof t.status=="string")t.then(_n,_n);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(I(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ap(e),e}throw Pa=t,gi}}function La(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Pa=n,gi):n}}var Pa=null;function Ep(){if(Pa===null)throw Error(I(459));var e=Pa;return Pa=null,e}function Ap(e){if(e===gi||e===Or)throw Error(I(483))}var Hl=null,uo=0;function Ko(e){var t=uo;return uo+=1,Hl===null&&(Hl=[]),ig(Hl,e,t)}function Jn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Po(e,t){throw t.$$typeof===NN?Error(I(525)):(e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function og(e){function t(v,h){if(e){var y=v.deletions;y===null?(v.deletions=[h],v.flags|=16):y.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function a(v){for(var h=new Map;v!==null;)v.key===null?h.set(v.index,v):h.set(v.key,v),v=v.sibling;return h}function l(v,h){return v=jn(v,h),v.index=0,v.sibling=null,v}function i(v,h,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<h?(v.flags|=2,h):y):(v.flags|=134217730,h)):(v.flags|=1048576,h)}function o(v){return e&&v.alternate===null&&(v.flags|=134217730),v}function s(v,h,y,k){return h===null||h.tag!==6?(h=cu(y,v.mode,k),h.return=v,h):(h=l(h,y),h.return=v,h)}function u(v,h,y,k){var E=y.type;return E===Tl?(v=p(v,h,y.props.children,k,y.key),Jn(v,y),v):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ta&&La(E)===h.type)?(h=l(h,y.props),Jn(h,y),h.return=v,h):(h=ys(y.type,y.key,y.props,null,v.mode,k),Jn(h,y),h.return=v,h)}function d(v,h,y,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=du(y,v.mode,k),h.return=v,h):(h=l(h,y.children||[]),h.return=v,h)}function p(v,h,y,k,E){return h===null||h.tag!==7?(h=Ya(y,v.mode,k,E),h.return=v,h):(h=l(h,y),h.return=v,h)}function c(v,h,y){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=cu(""+h,v.mode,y),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Lo:return y=ys(h.type,h.key,h.props,null,v.mode,y),Jn(y,h),y.return=v,y;case Ri:return h=du(h,v.mode,y),h.return=v,h;case ta:return h=La(h),c(v,h,y)}if(Bi(h)||Ci(h))return h=Ya(h,v.mode,y,null),h.return=v,h;if(typeof h.then=="function")return c(v,Ko(h),y);if(h.$$typeof===xn)return c(v,Yo(v,h),y);Po(v,h)}return null}function f(v,h,y,k){var E=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return E!==null?null:s(v,h,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Lo:return y.key===E?u(v,h,y,k):null;case Ri:return y.key===E?d(v,h,y,k):null;case ta:return y=La(y),f(v,h,y,k)}if(Bi(y)||Ci(y))return E!==null?null:p(v,h,y,k,null);if(typeof y.then=="function")return f(v,h,Ko(y),k);if(y.$$typeof===xn)return f(v,h,Yo(v,y),k);Po(v,y)}return null}function g(v,h,y,k,E){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return v=v.get(y)||null,s(h,v,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Lo:return v=v.get(k.key===null?y:k.key)||null,u(h,v,k,E);case Ri:return v=v.get(k.key===null?y:k.key)||null,d(h,v,k,E);case ta:return k=La(k),g(v,h,y,k,E)}if(Bi(k)||Ci(k))return v=v.get(y)||null,p(h,v,k,E,null);if(typeof k.then=="function")return g(v,h,y,Ko(k),E);if(k.$$typeof===xn)return g(v,h,y,Yo(h,k),E);Po(h,k)}return null}function C(v,h,y,k){for(var E=null,$=null,A=h,B=h=0,M=null;A!==null&&B<y.length;B++){A.index>B?(M=A,A=null):M=A.sibling;var D=f(v,A,y[B],k);if(D===null){A===null&&(A=M);break}e&&A&&D.alternate===null&&t(v,A),h=i(D,h,B),$===null?E=D:$.sibling=D,$=D,A=M}if(B===y.length)return n(v,A),ge&&Rn(v,B),E;if(A===null){for(;B<y.length;B++)A=c(v,y[B],k),A!==null&&(h=i(A,h,B),$===null?E=A:$.sibling=A,$=A);return ge&&Rn(v,B),E}for(A=a(A);B<y.length;B++)M=g(A,v,B,y[B],k),M!==null&&(e&&(D=M.alternate,D!==null&&A.delete(D.key===null?B:D.key)),h=i(M,h,B),$===null?E=M:$.sibling=M,$=M);return e&&A.forEach(function(J){return t(v,J)}),ge&&Rn(v,B),E}function S(v,h,y,k){if(y==null)throw Error(I(151));for(var E=null,$=null,A=h,B=h=0,M=null,D=y.next();A!==null&&!D.done;B++,D=y.next()){A.index>B?(M=A,A=null):M=A.sibling;var J=f(v,A,D.value,k);if(J===null){A===null&&(A=M);break}e&&A&&J.alternate===null&&t(v,A),h=i(J,h,B),$===null?E=J:$.sibling=J,$=J,A=M}if(D.done)return n(v,A),ge&&Rn(v,B),E;if(A===null){for(;!D.done;B++,D=y.next())D=c(v,D.value,k),D!==null&&(h=i(D,h,B),$===null?E=D:$.sibling=D,$=D);return ge&&Rn(v,B),E}for(A=a(A);!D.done;B++,D=y.next())D=g(A,v,B,D.value,k),D!==null&&(e&&(M=D.alternate,M!==null&&A.delete(M.key===null?B:M.key)),h=i(D,h,B),$===null?E=D:$.sibling=D,$=D);return e&&A.forEach(function(de){return t(v,de)}),ge&&Rn(v,B),E}function _(v,h,y,k){if(typeof y=="object"&&y!==null&&y.type===Tl&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Lo:e:{for(var E=y.key;h!==null;){if(h.key===E){if(E=y.type,E===Tl){if(h.tag===7){n(v,h.sibling),k=l(h,y.props.children),Jn(k,y),k.return=v,v=k;break e}}else if(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ta&&La(E)===h.type){n(v,h.sibling),k=l(h,y.props),Jn(k,y),k.return=v,v=k;break e}n(v,h);break}else t(v,h);h=h.sibling}y.type===Tl?(k=Ya(y.props.children,v.mode,k,y.key),Jn(k,y),k.return=v,v=k):(k=ys(y.type,y.key,y.props,null,v.mode,k),Jn(k,y),k.return=v,v=k)}return o(v);case Ri:e:{for(E=y.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(v,h.sibling),k=l(h,y.children||[]),k.return=v,v=k;break e}else{n(v,h);break}else t(v,h);h=h.sibling}k=du(y,v.mode,k),k.return=v,v=k}return o(v);case ta:return y=La(y),_(v,h,y,k)}if(Bi(y))return C(v,h,y,k);if(Ci(y)){if(E=Ci(y),typeof E!="function")throw Error(I(150));return y=E.call(y),S(v,h,y,k)}if(typeof y.then=="function")return _(v,h,Ko(y),k);if(y.$$typeof===xn)return _(v,h,Yo(v,y),k);Po(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,h!==null&&h.tag===6?(n(v,h.sibling),k=l(h,y),k.return=v,v=k):(n(v,h),k=cu(y,v.mode,k),k.return=v,v=k),o(v)):n(v,h)}return function(v,h,y,k){try{uo=0;var E=_(v,h,y,k);return Hl=null,E}catch(A){if(A===gi||A===Or)throw A;var $=$t(29,A,null,v.mode);return $.lanes=k,$.return=v,$}finally{}}}var al=og(!0),sg=og(!1),na=!1;function Hd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,we&2){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Fs(e),Jv(e,null,n),t}return Rr(e,a,t,n),Fs(e)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,kv(e,n)}}function pu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Sc=!1;function Yi(){if(Sc){var e=Ll;if(e!==null)throw e}}function Ki(e,t,n,a){Sc=!1;var l=e.updateQueue;na=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==o&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=u))}if(i!==null){var c=l.baseState;o=0,p=d=u=null,s=i;do{var f=s.lane&-536870913,g=f!==s.lane;if(g?(_e&f)===f:(a&f)===f){f!==0&&f===nl&&(Sc=!0),p!==null&&(p=p.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var C=e,S=s;f=t;var _=n;switch(S.tag){case 1:if(C=S.payload,typeof C=="function"){c=C.call(_,c,f);break e}c=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=S.payload,f=typeof C=="function"?C.call(_,c,f):C,f==null)break e;c=De({},c,f);break e;case 2:na=!0}}f=s.callback,f!==null&&(e.flags|=64,g&&(e.flags|=8192),g=l.callbacks,g===null?l.callbacks=[f]:g.push(f))}else g={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=g,u=c):p=p.next=g,o|=f;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);p===null&&(u=c),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=p,i===null&&(l.shared.lanes=0),Aa|=o,e.lanes=o,e.memoizedState=c}}function rg(e,t){if(typeof e!="function")throw Error(I(191,e));e.call(t)}function ug(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)rg(n[e],t)}var $a=Un(null),Ps=Un(0);function Rp(e,t){e=Gn,Le(Ps,e),Le($a,t),Gn=e|t.baseLanes}function xc(){Le(Ps,Gn),Le($a,$a.current)}function Id(){Gn=Ps.current,ft($a),ft(Ps)}var gt=Un(null),bt=null;function Sa(e){var t=e.alternate;Le(ht,ht.current&1),Le(gt,e),bt===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(bt=e)}function _c(e){Le(ht,ht.current),Le(gt,e),bt===null&&(bt=e)}function cg(e){e.tag===22?(Le(ht,ht.current),Le(gt,e),bt===null&&(bt=e)):xa()}function xa(){Le(ht,ht.current),Le(gt,gt.current)}function Mt(e){ft(gt),bt===e&&(bt=null),ft(ht)}var ht=Un(0);function co(e,t){Le(gt,gt.current),Le(ht,t)}function Fd(e){ft(ht),ft(gt),bt===e&&(bt=null)}function Xs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||nd(n)||gm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var In=0,fe=null,Be=null,Xe=null,Qs=!1,Il=!1,ll=!1,Js=0,mo=0,Fl=null,YT=0;function Ge(){throw Error(I(321))}function qd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gt(e[n],t[n]))return!1;return!0}function Gd(e,t,n,a,l,i){return In=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ce.H=e===null||e.memoizedState===null?Lg:Hg,ll=!1,i=n(a,l),ll=!1,Il&&(i=mg(t,n,a,l)),dg(e),i}function dg(e){ce.H=Ws;var t=Be!==null&&Be.next!==null;if(In=0,Xe=Be=fe=null,Qs=!1,mo=0,Fl=null,t)throw Error(I(300));e===null||Je||(e=e.dependencies,e!==null&&Ys(e)&&(Je=!0))}function mg(e,t,n,a){fe=e;var l=0;do{if(Il&&(Fl=null),mo=0,Il=!1,25<=l)throw Error(I(301));if(l+=1,Xe=Be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}ce.H=tz,i=t(n,a)}while(Il);return i}function KT(){var e=ce.H,t=e.useState()[0];return t=typeof t.then=="function"?Ao(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(fe.flags|=1024),t}function Yd(){var e=Js!==0;return Js=0,e}function Kd(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Pd(e){if(Qs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Qs=!1}In=0,Xe=Be=fe=null,Il=!1,mo=Js=0,Fl=null}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?fe.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Pe(){if(Be===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Xe===null?fe.memoizedState:Xe.next;if(t!==null)Xe=t,Be=e;else{if(e===null)throw fe.alternate===null?Error(I(467)):Error(I(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Xe===null?fe.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Zr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=mo;return mo+=1,Fl===null&&(Fl=[]),e=ig(Fl,e,t),t=fe,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,ce.H=t===null||t.memoizedState===null?Lg:Hg),e}function Dr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===UN)return;if(e.$$typeof===xn)return pt(e)}throw Error(I(438,String(e)))}function Xd(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=fe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Zr(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=zN;return t.index++,n}function Fn(e,t){return typeof t=="function"?t(e):t}function _s(e){var t=Pe();return Qd(t,Be,e)}function Qd(e,t,n){var a=e.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var s=o=null,u=null,d=t,p=!1;do{var c=d.lane&-536870913;if(c!==d.lane?(_e&c)===c:(In&c)===c){var f=d.revertLane;if(f===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),c===nl&&(p=!0);else if((In&f)===f){d=d.next,f===nl&&(p=!0);continue}else c={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},u===null?(s=u=c,o=i):u=u.next=c,fe.lanes|=f,Aa|=f;c=d.action,ll&&n(i,c),i=d.hasEagerState?d.eagerState:n(i,c)}else f={lane:c,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},u===null?(s=u=f,o=i):u=u.next=f,fe.lanes|=c,Aa|=c;d=d.next}while(d!==null&&d!==t);if(u===null?o=i:u.next=s,!Gt(i,e.memoizedState)&&(Je=!0,p&&(n=Ll,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=u,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function fu(e){var t=Pe(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Gt(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function pg(e,t,n){var a=fe,l=Pe(),i=ge;if(i){if(n===void 0)throw Error(I(407));n=n()}else n=t();var o=!Gt((Be||l).memoizedState,n);if(o&&(l.memoizedState=n,Je=!0),l=l.queue,Jd(vg.bind(null,a,l,e),[e]),e=l.getSnapshot!==t||o||Xe!==null&&(Xe.memoizedState.tag&1)!==0,Jl(e?9:8,{destroy:void 0},hg.bind(null,a,l,n,t),null),e){if(a.flags|=2048,Ze===null)throw Error(I(349));i||In&127||fg(a,t,n)}return n}function fg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=Zr(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hg(e,t,n,a){t.value=n,t.getSnapshot=a,gg(t)&&bg(e)}function vg(e,t,n){return n(function(){gg(t)&&bg(e)})}function gg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gt(e,n)}catch{return!0}}function bg(e){var t=pl(e,2);t!==null&&Rt(t,e,2)}function Cc(e){var t=_t();if(typeof e=="function"){var n=e;if(e=n(),ll){sa(!0);try{n()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:e},t}function yg(e,t,n,a){return e.baseState=n,Qd(e,Be,typeof a=="function"?a:Fn)}function PT(e,t,n,a,l){if(jr(e))throw Error(I(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};ce.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Sg(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Sg(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=ce.T,o={};o.types=i!==null?i.types:null,ce.T=o;try{var s=n(l,a),u=ce.S;u!==null&&u(o,s),Bp(e,t,s)}catch(d){kc(e,t,d)}finally{i!==null&&o.types!==null&&(i.types=o.types),ce.T=i}}else try{i=n(l,a),Bp(e,t,i)}catch(d){kc(e,t,d)}}function Bp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Op(e,t,a)},function(a){return kc(e,t,a)}):Op(e,t,n)}function Op(e,t,n){t.status="fulfilled",t.value=n,xg(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sg(e,n)))}function kc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,xg(t),t=t.next;while(t!==a)}e.action=null}function xg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _g(e,t){return t}function Zp(e,t){if(ge){var n=Ze.formState;if(n!==null){e:{var a=fe;if(ge){if(je){t:{for(var l=je,i=en;l.nodeType!==8;){if(!i){l=null;break t}if(l=an(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){je=an(l.nextSibling),a=l.data==="F!";break e}}Ua(a)}a=!1}a&&(t=n[0])}}return n=_t(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_g,lastRenderedState:t},n.queue=a,n=Mg.bind(null,fe,a),a.dispatch=n,a=Cc(!1),i=nm.bind(null,fe,!1,a.queue),a=_t(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=PT.bind(null,fe,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Dp(e){var t=Pe();return Cg(t,Be,e)}function Cg(e,t,n){if(t=Qd(e,t,_g)[0],e=_s(Fn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ao(t)}catch(o){throw o===gi?Or:o}else a=t;t=Pe();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,Jl(9,{destroy:void 0},XT.bind(null,l,n),null)),[a,i,e]}function XT(e,t){e.action=t}function Mp(e){var t=Pe(),n=Be;if(n!==null)return Cg(t,n,e);Pe(),t=t.memoizedState,n=Pe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Jl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=fe.updateQueue,t===null&&(t=Zr(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function kg(){return Pe().memoizedState}function Cs(e,t,n,a){var l=_t();fe.flags|=e,l.memoizedState=Jl(1|t,{destroy:void 0},n,a===void 0?null:a)}function Mr(e,t,n,a){var l=Pe();a=a===void 0?null:a;var i=l.memoizedState.inst;Be!==null&&a!==null&&qd(a,Be.memoizedState.deps)?l.memoizedState=Jl(t,i,n,a):(fe.flags|=e,l.memoizedState=Jl(1|t,i,n,a))}function jp(e,t){Cs(8390656,8,e,t)}function Jd(e,t){Mr(2048,8,e,t)}function QT(e){fe.flags|=4;var t=fe.updateQueue;if(t===null)t=Zr(),fe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function wg(e){var t=Pe().memoizedState;return QT({ref:t,nextImpl:e}),function(){if(we&2)throw Error(I(440));return t.impl.apply(void 0,arguments)}}function Ng(e,t){return Mr(4,2,e,t)}function Tg(e,t){return Mr(4,4,e,t)}function zg(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ug(e,t,n){n=n!=null?n.concat([e]):null,Mr(4,4,zg.bind(null,t,e),n)}function Wd(){}function $g(e,t){var n=Pe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&qd(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Eg(e,t){var n=Pe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&qd(t,a[1]))return a[0];if(a=e(),ll){sa(!0);try{e()}finally{sa(!1)}}return n.memoizedState=[a,t],a}function em(e,t,n){return n===void 0||In&1073741824&&!(_e&261930)?e.memoizedState=t:(e.memoizedState=n,e=Cb(),fe.lanes|=e,Aa|=e,n)}function Ag(e,t,n,a){return Gt(n,t)?n:$a.current!==null?(e=em(e,n,a),Gt(e,t)||(Je=!0),e):!(In&106)||In&1073741824&&!(_e&261930)?(Je=!0,e.memoizedState=n):(e=Cb(),fe.lanes|=e,Aa|=e,t)}function Rg(e,t,n,a,l){var i=Te.p;Te.p=i!==0&&8>i?i:8;var o=ce.T,s={};s.types=o!==null?o.types:null,ce.T=s,nm(e,!1,t,n);try{var u=l(),d=ce.S;if(d!==null&&d(s,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=GT(u,a);Pi(e,t,p,qt(e))}else Pi(e,t,a,qt(e))}catch(c){Pi(e,t,{then:function(){},status:"rejected",reason:c},qt())}finally{Te.p=i,o!==null&&s.types!==null&&(o.types=s.types),ce.T=o}}function JT(){}function wc(e,t,n,a){if(e.tag!==5)throw Error(I(476));var l=Bg(e).queue;Rg(e,l,t,Ga,n===null?JT:function(){return Og(e),n(a)})}function Bg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ga,baseState:Ga,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:Ga},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Og(e){var t=Bg(e);t.next===null&&(t=e.alternate.memoizedState),Pi(e,t.next.queue,{},qt())}function tm(){return pt(ii)}function Zg(){return Pe().memoizedState}function Dg(){return Pe().memoizedState}function WT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=qt();e=ba(n);var a=ya(t,e,n);a!==null&&(Rt(a,t,n),Gi(a,t,n)),t={cache:jd()},e.payload=t;return}t=t.return}}function ez(e,t,n){var a=qt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},jr(e)?jg(t,n):(n=Zd(e,t,n,a),n!==null&&(Rt(n,e,a),Vg(n,t,a)))}function Mg(e,t,n){var a=qt();Pi(e,t,n,a)}function Pi(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(jr(e))jg(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Gt(s,o))return Rr(e,t,l,0),Ze===null&&Ar(),!1}catch{}finally{}if(n=Zd(e,t,l,a),n!==null)return Rt(n,e,a),Vg(n,t,a),!0}return!1}function nm(e,t,n,a){if(a={lane:2,revertLane:pm(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jr(e)){if(t)throw Error(I(479))}else t=Zd(e,n,a,2),t!==null&&Rt(t,e,2)}function jr(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function jg(e,t){Il=Qs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vg(e,t,n){if(n&4194048){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,kv(e,n)}}var Ws={readContext:pt,use:Dr,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge,useEffectEvent:Ge},Lg={readContext:pt,use:Dr,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:jp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Cs(4194308,4,zg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){Cs(4,2,e,t)},useMemo:function(e,t){var n=_t();t=t===void 0?null:t;var a=e();if(ll){sa(!0);try{e()}finally{sa(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=_t();if(n!==void 0){var l=n(t);if(ll){sa(!0);try{n(t)}finally{sa(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=ez.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:function(e){e=Cc(e);var t=e.queue,n=Mg.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Wd,useDeferredValue:function(e,t){var n=_t();return em(n,e,t)},useTransition:function(){var e=Cc(!1);return e=Rg.bind(null,fe,e.queue,!0,!1),_t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=fe,l=_t();if(ge){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Ze===null)throw Error(I(349));_e&127||fg(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,jp(vg.bind(null,a,i,e),[e]),a.flags|=2048,Jl(9,{destroy:void 0},hg.bind(null,a,i,n,t),null),n},useId:function(){var e=_t(),t=Ze.identifierPrefix;if(ge){var n=kn,a=Cn;n=(a&~(1<<32-Ft(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Js++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=YT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:tm,useFormState:Zp,useActionState:Zp,useOptimistic:function(e){var t=_t();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=nm.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Xd,useCacheRefresh:function(){return _t().memoizedState=WT.bind(null,fe)},useEffectEvent:function(e){var t=_t(),n={impl:e};return t.memoizedState=n,function(){if(we&2)throw Error(I(440));return n.impl.apply(void 0,arguments)}}},Hg={readContext:pt,use:Dr,useCallback:$g,useContext:pt,useEffect:Jd,useImperativeHandle:Ug,useInsertionEffect:Ng,useLayoutEffect:Tg,useMemo:Eg,useReducer:_s,useRef:kg,useState:function(){return _s(Fn)},useDebugValue:Wd,useDeferredValue:function(e,t){var n=Pe();return Ag(n,Be.memoizedState,e,t)},useTransition:function(){var e=_s(Fn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ao(e),t]},useSyncExternalStore:pg,useId:Zg,useHostTransitionStatus:tm,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,t){var n=Pe();return yg(n,Be,e,t)},useMemoCache:Xd,useCacheRefresh:Dg,useEffectEvent:wg},tz={readContext:pt,use:Dr,useCallback:$g,useContext:pt,useEffect:Jd,useImperativeHandle:Ug,useInsertionEffect:Ng,useLayoutEffect:Tg,useMemo:Eg,useReducer:fu,useRef:kg,useState:function(){return fu(Fn)},useDebugValue:Wd,useDeferredValue:function(e,t){var n=Pe();return Be===null?em(n,e,t):Ag(n,Be.memoizedState,e,t)},useTransition:function(){var e=fu(Fn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ao(e),t]},useSyncExternalStore:pg,useId:Zg,useHostTransitionStatus:tm,useFormState:Mp,useActionState:Mp,useOptimistic:function(e,t){var n=Pe();return Be!==null?yg(n,Be,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Xd,useCacheRefresh:Dg,useEffectEvent:wg};function hu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=qt(),l=ba(a);l.payload=t,n!=null&&(l.callback=n),t=ya(e,l,a),t!==null&&(Rt(t,e,a),Gi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=qt(),l=ba(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ya(e,l,a),t!==null&&(Rt(t,e,a),Gi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qt(),a=ba(n);a.tag=2,t!=null&&(a.callback=t),t=ya(e,a,n),t!==null&&(Rt(t,e,n),Gi(t,e,n))}};function Vp(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!oo(n,a)||!oo(l,i):!0}function Lp(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Nc.enqueueReplaceState(t,t.state,null)}function il(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=De({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Ig(e){Is(e)}function Fg(e){console.error(e)}function qg(e){Is(e)}function er(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Hp(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Tc(e,t,n){return n=ba(n),n.tag=3,n.payload={element:null},n.callback=function(){er(e,t)},n}function Gg(e){return e=ba(e),e.tag=3,e}function Yg(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Hp(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Hp(t,n,a),typeof l!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function nz(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&el(t,n,l,!0),n=gt.current,n!==null){switch(n.tag){case 31:case 13:case 19:return bt===null?rr():n.alternate===null&&Ye===0&&(Ye=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Ks?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),_u(e,a,l)),!1;case 22:return n.flags|=65536,a===Ks?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),_u(e,a,l)),!1}throw Error(I(435,n.tag))}return _u(e,a,l),rr(),!1}if(ge)return t=gt.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==hc&&(e=Error(I(422),{cause:a}),ro(Wt(e,n)))):(a!==hc&&(t=Error(I(423),{cause:a}),ro(Wt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Wt(a,n),l=Tc(e.stateNode,a,l),pu(e,l),Ye!==4&&(Ye=2)),!1;var i=Error(I(520),{cause:a});if(i=Wt(i,n),Wi===null?Wi=[i]:Wi.push(i),Ye!==4&&(Ye=2),t===null)return!0;a=Wt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Tc(n.stateNode,a,e),pu(n,e),!1;case 1:if(t=n.type,i=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(_a===null||!_a.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Gg(l),Yg(l,e,n,a),pu(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var am=Error(I(461)),Je=!1;function et(e,t,n,a){t.child=e===null?sg(t,null,n,a):al(t,e.child,n,a)}function Ip(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var s in a)s!=="ref"&&(o[s]=a[s])}else o=a;return tl(t),a=Gd(e,t,n,o,i,l),s=Yd(),e!==null&&!Je?(Kd(e,t,l),qn(e,t,l)):(ge&&s&&Br(t),t.flags|=1,et(e,t,a,l),t.child)}function Fp(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Dd(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Kg(e,t,i,a,l)):(e=ys(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!im(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(o,a)&&e.ref===t.ref)return qn(e,t,l)}return t.flags|=1,e=jn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Kg(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(oo(i,a)&&e.ref===t.ref)if(Je=!1,t.pendingProps=a=i,im(e,l))e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,qn(e,t,l)}return zc(e,t,n,a,l)}function Pg(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return qp(e,t,i,n,a)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xs(t,i!==null?i.cachePool:null),i!==null?Rp(t,i):xc(),cg(t);else return a=t.lanes=536870912,qp(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(xs(t,i.cachePool),Rp(t,i),xa(),t.memoizedState=null):(e!==null&&xs(t,null),xc(),xa());return et(e,t,l,n),t.child}function Xi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function qp(e,t,n,a,l){var i=Vd();return i=i===null?null:{parent:Qe._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&xs(t,null),xc(),cg(t),e!==null&&el(e,t,a,!0),t.childLanes=l,null}function ks(e,t){return t=Vr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gp(e,t,n){return al(t,e.child,null,n),e=ks(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function az(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(a.mode==="hidden")return e=ks(t,a),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Xi(null,e);if(_c(t),(e=je)?(e=Kb(e,en),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:Cn,overflow:kn}:null,retryLane:536870912,hydrationErrors:null},n=eg(e),n.return=t,t.child=n,rt=t,je=null)):e=null,e===null)throw Ua(t);return t.lanes=536870912,null}return ks(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(_c(t),l)if(t.flags&256)t.flags&=-257,t=Gp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(I(558));else if(Je||el(e,t,n,!1),l=(n&e.childLanes)!==0,Je||l){if($a.current===null){if(a=Ze,a!==null&&(o=wv(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,pl(e,o),Rt(a,e,o),am;rr()}t=Gp(e,t,n)}else e=i.treeContext,je=an(o.nextSibling),rt=t,ge=!0,ga=null,en=!1,e!==null&&ng(t,e),t=ks(t,a),t.flags|=134221824;return t}return e=jn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function yl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(I(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zc(e,t,n,a,l){return tl(t),n=Gd(e,t,n,a,void 0,l),a=Yd(),e!==null&&!Je?(Kd(e,t,l),qn(e,t,l)):(ge&&a&&Br(t),t.flags|=1,et(e,t,n,l),t.child)}function Yp(e,t,n,a,l,i){return tl(t),t.updateQueue=null,n=mg(t,a,n,l),dg(e),a=Yd(),e!==null&&!Je?(Kd(e,t,i),qn(e,t,i)):(ge&&a&&Br(t),t.flags|=1,et(e,t,n,i),t.child)}function Kp(e,t,n,a,l){if(tl(t),t.stateNode===null){var i=Bl,o=n.contextType;typeof o=="object"&&o!==null&&(i=pt(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Nc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Hd(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?pt(o):Bl,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(hu(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Nc.enqueueReplaceState(i,i.state,null),Ki(t,a,i,l),Yi(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,u=il(n,s);i.props=u;var d=i.context,p=n.contextType;o=Bl,typeof p=="object"&&p!==null&&(o=pt(p));var c=n.getDerivedStateFromProps;p=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||d!==o)&&Lp(t,i,a,o),na=!1;var f=t.memoizedState;i.state=f,Ki(t,a,i,l),Yi(),d=t.memoizedState,s||f!==d||na?(typeof c=="function"&&(hu(t,n,c,a),d=t.memoizedState),(u=na||Vp(t,n,u,a,f,d,o))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),i.props=a,i.state=d,i.context=o,a=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,yc(e,t),o=t.memoizedProps,p=il(n,o),i.props=p,c=t.pendingProps,f=i.context,d=n.contextType,u=Bl,typeof d=="object"&&d!==null&&(u=pt(d)),s=n.getDerivedStateFromProps,(d=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==c||f!==u)&&Lp(t,i,a,u),na=!1,f=t.memoizedState,i.state=f,Ki(t,a,i,l),Yi();var g=t.memoizedState;o!==c||f!==g||na||e!==null&&e.dependencies!==null&&Ys(e.dependencies)?(typeof s=="function"&&(hu(t,n,s,a),g=t.memoizedState),(p=na||Vp(t,n,p,a,f,g,u)||e!==null&&e.dependencies!==null&&Ys(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),i.props=a,i.state=g,i.context=u,a=p):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,yl(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=al(t,e.child,null,l),t.child=al(t,null,n,l)):et(e,t,n,l),t.memoizedState=i.state,e=t.child):e=qn(e,t,l),e}function Pp(e,t,n,a){return Wa(),t.flags|=256,et(e,t,n,a),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:lg()}}function Ec(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function Xg(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(ht.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(l?Sa(t):xa(),(e=je)?(e=Kb(e,en),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:Cn,overflow:kn}:null,retryLane:536870912,hydrationErrors:null},n=eg(e),n.return=t,t.child=n,rt=t,je=null)):e=null,e===null)throw Ua(t);return gm(e)?t.lanes=32:t.lanes=536870912,null}return i=a.children,a=a.fallback,l?(xa(),l=t.mode,i=Vr({mode:"hidden",children:i},l),a=Ya(a,l,n,null),i.return=t,a.return=t,i.sibling=a,t.child=i,a=t.child,a.memoizedState=$c(n),a.childLanes=Ec(e,o,n),t.memoizedState=Uc,Xi(null,a)):(Sa(t),lm(t,i))}var s=e.memoizedState;if(s!==null){var u=s.dehydrated;if(u!==null)return lz(e,t,i,o,a,u,s,n)}return l?(xa(),l=a.fallback,i=t.mode,s=e.child,u=s.sibling,a=jn(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&1206910976,u!==null?l=jn(u,l):(l=Ya(l,i,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,Xi(null,a),a=t.child,l=e.child.memoizedState,l===null?l=$c(n):(i=l.cachePool,i!==null?(s=Qe._currentValue,i=i.parent!==s?{parent:s,pool:s}:i):i=lg(),l={baseLanes:l.baseLanes|n,cachePool:i}),a.memoizedState=l,a.childLanes=Ec(e,o,n),t.memoizedState=Uc,Xi(e.child,a)):(Sa(t),n=e.child,e=n.sibling,n=jn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function lm(e,t){return t=Vr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vr(e,t){return e=$t(22,e,null,t),e.lanes=0,e}function Xo(e,t,n){return al(t,e.child,null,n),e=lm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lz(e,t,n,a,l,i,o,s){if(n)return t.flags&256?(Sa(t),t.flags&=-257,Xo(e,t,s)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,null):(xa(),i=l.fallback,o=t.mode,l=Vr({mode:"visible",children:l.children},o),i=Ya(i,o,s,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,al(t,e.child,null,s),l=t.child,l.memoizedState=$c(s),l.childLanes=Ec(e,a,s),t.memoizedState=Uc,Xi(null,l));if(Sa(t),gm(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var u=a.dgst;return a=u,a!==""&&(l=Error(I(419)),l.stack="",l.digest=a,ro({value:l,source:null,stack:null})),Xo(e,t,s)}if(Je||el(e,t,s,!1),a=(s&e.childLanes)!==0,Je||a){if($a.current!==null)return Xo(e,t,s);if(a=Ze,a!==null&&(l=wv(a,s),l!==0&&l!==o.retryLane))throw o.retryLane=l,pl(e,l),Rt(a,e,l),am;return nd(i)||rr(),Xo(e,t,s)}return nd(i)?(t.flags|=192,t.child=e.child,null):(e=o.treeContext,je=an(i.nextSibling),rt=t,ge=!0,ga=null,en=!1,e!==null&&ng(t,e),t=lm(t,l.children),t.flags|=134221824,t)}function Xp(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ss(e.return,t,n)}function Qp(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Xs(n)===null&&(t=e),e=e.sibling}return t}function Qo(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function vu(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Ac(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=ht.current;if(t.flags&128)return co(t,o),null;var s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,co(t,o),l==="backwards"&&e!==null?(vu(e),et(e,t,a,n),vu(e)):et(e,t,a,n),a=ge?so:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xp(e,n,t);else if(e.tag===19)Xp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":n=Qp(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null,vu(t)),Qo(t,!0,l,null,i,a);break;case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xs(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Qo(t,!0,n,null,i,a);break;case"together":Qo(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:n=Qp(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Qo(t,!1,l,n,i,a)}return t.child}function Jp(e,t,n){var a=t.pendingProps;return ua(t,t.type,a.value),et(e,t,a.children,n),t.child}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Aa|=t.lanes,!(n&t.childLanes))if(e!==null){if(el(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function im(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Ys(e)))}function iz(e,t,n){switch(t.tag){case 3:js(t,t.stateNode.containerInfo),ua(t,Qe,e.memoizedState.cache),Wa();break;case 27:case 5:ic(t);break;case 4:js(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_c(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return Sa(t),t.flags|=128,null;a=el(e,t,n,!1);var l=t.child.childLanes;return a||n&l?Xg(e,t,n):(Sa(t),e=qn(e,t,n),e!==null?e.sibling:null)}Sa(t);break;case 19:if(t.flags&128)return Ac(e,t,n);if(l=(e.flags&128)!==0,a=(n&t.childLanes)!==0,a||(el(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Ac(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),co(t,ht.current),a)break;return null;case 22:return t.lanes=0,Pg(e,t,n,t.pendingProps);case 24:ua(t,Qe,e.memoizedState.cache)}return qn(e,t,n)}function Qg(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!im(e,n)&&!(t.flags&128))return Je=!1,iz(e,t,n);Je=!!(e.flags&131072)}else Je=!1,ge&&t.flags&1048576&&tg(t,so,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=La(t.elementType),t.type=e,typeof e=="function")Dd(e)?(a=il(e,a),t.tag=1,t=Kp(null,t,e,a,n)):(t.tag=0,t=zc(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===kd){t.tag=11,t=Ip(null,t,e,a,n);break e}else if(l===wd){t.tag=14,t=Fp(null,t,e,a,n);break e}else if(l===xn){t.tag=10,t.type=e,t=Jp(null,t,n);break e}}throw t=ac(e)||e,Error(I(306,t,""))}}return t;case 0:return zc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=il(a,t.pendingProps),Kp(e,t,a,l,n);case 3:e:{if(js(t,t.stateNode.containerInfo),e===null)throw Error(I(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,yc(e,t),Ki(t,a,null,n);var o=t.memoizedState;if(a=o.cache,ua(t,Qe,a),a!==i.cache&&gc(t,[Qe],n,!0),Yi(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Pp(e,t,a,n);break e}else if(a!==l){l=Wt(Error(I(424)),t),ro(l),t=Pp(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=an(e.firstChild),rt=t,ge=!0,ga=null,en=!0,n=sg(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Wa(),a===l){t=qn(e,t,n);break e}et(e,t,a,n)}t=t.child}return t;case 26:return yl(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(t.stateNode=Vb(t.type,t.pendingProps,va.current,t)):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ic(t),e===null&&ge&&(a=t.stateNode=Pb(t.type,t.pendingProps,va.current),rt=t,en=!0,l=je,Da(t.type)?(ad=l,je=an(a.firstChild)):je=l),et(e,t,t.pendingProps.children,n),yl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((l=a=je)&&(a=Wz(a,t.type,t.pendingProps,en),a!==null?(t.stateNode=a,rt=t,je=an(a.firstChild),en=!1,l=!0):l=!1),l||Ua(t)),ic(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Wc(l,i)?a=null:o!==null&&Wc(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=Gd(e,t,KT,null,null,n),ii._currentValue=l),yl(e,t),et(e,t,a,n),t.child;case 6:return e===null&&ge&&((e=n=je)&&(n=e2(n,t.pendingProps,en),n!==null?(t.stateNode=n,rt=t,je=null,e=!0):e=!1),e||Ua(t)),null;case 13:return Xg(e,t,n);case 4:return js(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=al(t,null,a,n):et(e,t,a,n),t.child;case 11:return Ip(e,t,t.type,t.pendingProps,n);case 7:return a=t.pendingProps,yl(e,t),et(e,t,a,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return Jp(e,t,n);case 9:return l=t.type._context,a=t.pendingProps.children,tl(t),l=pt(l),a=a(l),t.flags|=1,et(e,t,a,n),t.child;case 14:return Fp(e,t,t.type,t.pendingProps,n);case 15:return Kg(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return az(e,t,n);case 22:return Pg(e,t,n,t.pendingProps);case 24:return tl(t),a=pt(Qe),e===null?(l=Vd(),l===null&&(l=Ze,i=jd(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},Hd(t),ua(t,Qe,l)):(e.lanes&n&&(yc(e,t),Ki(t,null,null,n),Yi()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ua(t,Qe,a)):(a=i.cache,ua(t,Qe,a),a!==l.cache&&gc(t,[Qe],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=e===null?18882560:18874368:ge&&Br(t),e!==null&&e.memoizedProps.name!==a.name?t.flags|=4194816:yl(e,t),et(e,t,a.children,n),t.child;case 29:throw t.pendingProps}throw Error(I(156,t.tag))}function An(e){e.flags|=4}function gu(e,t,n,a,l){var i;if((i=(e.mode&32)!==0)&&(i=n===null?Tf(t,a):Tf(t,a)&&(a.src!==n.src||a.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Nb())e.flags|=8192;else throw Pa=Ks,Ld}else e.flags&=-16777217}function Wp(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wb(t))if(Nb())e.flags|=8192;else throw Pa=Ks,Ld}function Jo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?_v():536870912,e.lanes|=t,Wl|=t)}function Ni(e,t){if(!ge)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&1206910976,a|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function oz(e,t,n){var a=t.pendingProps;switch(Md(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vn(Qe),Pl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(vl(t)?An(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mu())),Me(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(An(t),i!==null?(Me(t),Wp(t,i)):(Me(t),gu(t,l,null,a,n))):i?i!==e.memoizedState?(An(t),Me(t),Wp(t,i)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&An(t),Me(t),gu(t,l,e,a,n)),null;case 27:if(Vs(t),n=va.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&An(t);else{if(!a){if(t.stateNode===null)throw Error(I(166));return Me(t),t.subtreeFlags&=-33554433,null}e=Nn.current,vl(t)?Np(t):(e=Pb(l,a,n),t.stateNode=e,An(t))}return Me(t),t.subtreeFlags&=-33554433,null;case 5:if(Vs(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&An(t);else{if(!a){if(t.stateNode===null)throw Error(I(166));return Me(t),t.subtreeFlags&=-33554433,null}if(i=Nn.current,vl(t))Np(t);else{var o=ho(va.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[mt]=t,i[Ot]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(vt(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&An(t)}}return Me(t),t.subtreeFlags&=-33554433,gu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&An(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(I(166));if(e=va.current,vl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=rt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Mb(e.nodeValue,n)),e||Ua(t,!0)}else e=ho(e).createTextNode(a),e[mt]=t,t.stateNode=e}return Me(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=vl(t),n!==null){if(e===null){if(!a)throw Error(I(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(557));e[mt]=t}else Wa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else n=mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if(t.flags&128)throw Error(I(558))}return Me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=vl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(I(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(I(317));l[mt]=t}else Wa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),l=!1}else l=mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),t.flags&128?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Jo(t,t.updateQueue),Me(t),null);case 4:return Pl(),e===null&&fm(t.stateNode.containerInfo),t.flags|=67108864,Me(t),null;case 10:return Vn(t.type),Me(t),null;case 19:if(Fd(t),a=t.memoizedState,a===null)return Me(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Ni(a,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Xs(e),i!==null){for(t.flags|=128,Ni(a,!1),e=i.updateQueue,t.updateQueue=e,Jo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Wv(n,e),n=n.sibling;return co(t,ht.current&1|2),ge&&Rn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Ht()>or&&(t.flags|=128,l=!0,Ni(a,!1),t.lanes=4194304)}else{if(!l)if(e=Xs(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Jo(t,e),Ni(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!ge)return Me(t),null}else 2*Ht()-a.renderingStartTime>or&&n!==536870912&&(t.flags|=128,l=!0,Ni(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}if(a.tail!==null){e=a.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ht(),e.sibling=null,i=ht.current,i=l?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!n||ge?co(t,i):(n=i,Le(gt,t),Le(ht,n),bt===null&&(bt=t)),ge&&Rn(t,a.treeForkCount),e}return Me(t),null;case 22:case 23:return Mt(t),Id(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?n&536870912&&!(t.flags&128)&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&Jo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&ft(Ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Vn(Qe),Me(t),null;case 25:return null;case 30:return t.flags|=33554432,Me(t),null}throw Error(I(156,t.tag))}function sz(e,t){switch(Md(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(Qe),Pl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Vs(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(I(340));Wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fd(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Pl(),null;case 10:return Vn(t.type),null;case 22:case 23:return Mt(t),Id(),e!==null&&ft(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vn(Qe),null;case 25:return null;default:return null}}function Jg(e,t){switch(Md(t),t.tag){case 3:Vn(Qe),Pl();break;case 26:case 27:case 5:Vs(t);break;case 4:Pl();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:Fd(t);break;case 10:Vn(t.type);break;case 22:case 23:Mt(t),Id(),e!==null&&ft(Ka);break;case 24:Vn(Qe)}}function Ro(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(s){Re(t,t.return,s)}}function Ea(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,l=t;var u=n,d=s;try{d()}catch(p){Re(l,u,p)}}}a=a.next}while(a!==i)}}catch(p){Re(t,t.return,p)}}function Wg(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ug(t,n)}catch(a){Re(e,e.return,a)}}}function eb(e,t,n){n.props=il(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Re(e,t,a)}}function gn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var l=e.stateNode,i=Hn(e.memoizedProps,l);(l.ref===null||l.ref.name!==i)&&(l.ref=Ib(i)),a=l.ref;break;case 7:if(e.stateNode===null){var o=new Yt(e);Bt(e.child,!1,Qz,o,void 0,void 0),e.stateNode=o}a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(s){Re(e,t,s)}}function dt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Re(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Re(e,t,l)}else n.current=null}function tr(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Yb(e.stateNode,t[n])}function ef(e){for(var t=e.return;t!==null&&(sm(t)&&Yb(e.stateNode,t.stateNode),!om(t));)t=t.return}function Qi(e){for(var t=e.return;t!==null&&(sm(t)&&Jz(e.stateNode,t.stateNode),!om(t));)t=t.return}function om(e){return e.tag===5||e.tag===3||e.tag===27}function sm(e){return e&&e.tag===7&&e.stateNode!==null}function Rc(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Re(e,e.return,l)}}function bu(e,t,n){try{var a=e.stateNode;Rz(a,e.type,n,t),a[Ot]=t}catch(l){Re(e,e.return,l)}}function tb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bc(e,t,n,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(l),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_n)),tr(e,a),Ce=!0;else if(l!==4&&(l===27&&(tr(e,a),a=null,Da(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Bc(e,t,n,a),e=e.sibling;e!==null;)Bc(e,t,n,a),e=e.sibling}function nr(e,t,n,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?n.insertBefore(l,t):n.appendChild(l),tr(e,a),Ce=!0;else if(l!==4&&(l===27&&(tr(e,a),a=null,Da(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(nr(e,t,n,a),e=e.sibling;e!==null;)nr(e,t,n,a),e=e.sibling}function nb(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);vt(t,a,n),t[mt]=e,t[Ot]=n}catch(i){Re(e,e.return,i)}}var ar=!1,jt=null;function tf(e){(e.tag===30||e.subtreeFlags&33554432)&&(ar=!0)}var Sn=null;function nf(){var e=Sn;return Sn=null,e}var zt=0;function bi(e,t,n,a,l){return zt=0,ab(e.child,t,n,a,l)}function ab(e,t,n,a,l){for(var i=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(a!==null){var s=ed(o);a.push(s),s.view&&(i=!0)}else i||ed(o).view&&(i=!0);ar=!0,Lb(o,zt===0?t:t+"_"+zt,n),zt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||ab(e.child,t,n,a,l)&&(i=!0));e=e.sibling}return i}function zn(e,t){for(;e!==null;)e.tag===5?Hb(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||zn(e.child,t)),e=e.sibling}function ws(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ws(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(I(544));var n=t.name;t=Pn(t.default,t.share),t!=="none"&&(bi(e,n,t,null,!1)||zn(e.child,!1))}e=e.sibling}}function Oc(e,t){if(e.tag===30){var n=e.stateNode,a=e.memoizedProps,l=Hn(a,n),i=Pn(a.default,n.paired?a.share:a.enter);i!=="none"?bi(e,l,i,null,!1)?(ws(e),n.paired||t||ei(e,a.onEnter)):zn(e.child,!1):ws(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Oc(e,t),e=e.sibling;else ws(e)}function Zc(e){if(jt!==null&&jt.size!==0){var t=jt;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,a=n.name;if(a!=null&&a!=="auto"){var l=t.get(a);if(l!==void 0){var i=Pn(n.default,n.share);if(i!=="none"&&(bi(e,a,i,null,!1)?(i=e.stateNode,l.paired=i,i.paired=l,ei(e,n.onShare)):zn(e.child,!1)),t.delete(a),t.size===0)break}}}Zc(e)}e=e.sibling}}}function Dc(e){if(e.tag===30){var t=e.memoizedProps,n=Hn(t,e.stateNode),a=jt!==null?jt.get(n):void 0,l=Pn(t.default,a!==void 0?t.share:t.exit);l!=="none"&&(bi(e,n,l,null,!1)?a!==void 0?(l=e.stateNode,a.paired=l,l.paired=a,jt.delete(n),ei(e,t.onShare)):ei(e,t.onExit):zn(e.child,!1)),jt!==null&&Zc(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Dc(e),e=e.sibling;else jt!==null&&Zc(e)}function lb(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Hn(t,e.stateNode);t=Pn(t.default,t.update),e.flags&=-5,t!=="none"&&bi(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&lb(e);e=e.sibling}}function Mc(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,zn(e.child,!1))}Mc(e)}e=e.sibling}}function Ns(e){if(e.tag===30)e.stateNode.paired=null,zn(e.child,!1),Mc(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ns(e),e=e.sibling;else Mc(e)}function ib(e){for(e=e.child;e!==null;)e.tag===30?zn(e.child,!1):e.subtreeFlags&33554432&&ib(e),e=e.sibling}function rm(e,t,n,a,l,i,o){for(var s=!1;t!==null;){if(t.tag===5){var u=t.stateNode;if(i!==null&&zt<i.length){var d=i[zt],p=ed(u);(d.view||p.view)&&(s=!0);var c;if(c=(e.flags&4)===0)if(p.clip)c=!0;else{c=d.rect;var f=p.rect;c=c.y!==f.y||c.x!==f.x||c.height!==f.height||c.width!==f.width}c&&(e.flags|=4),p.abs?p=!d.abs:(d=d.rect,p=p.rect,p=d.height!==p.height||d.width!==p.width),p&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Lb(u,zt===0?n:n+"_"+zt,l),s&&e.flags&4||(Sn===null&&(Sn=[]),Sn.push(u,zt===0?a:a+"_"+zt,t.memoizedProps)),zt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:rm(e,t.child,n,a,l,i,o)&&(s=!0));t=t.sibling}return s}function ob(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=e.stateNode,l=Hn(n,a),i=Pn(n.default,n.update),o;o=e.memoizedState,e.memoizedState=null,a=e;var s=e.child;zt=0,l=rm(a,s,l,l,i,o,!1),e.flags&4&&l&&ei(e,n.onUpdate)}else e.subtreeFlags&33554432&&ob(e);e=e.sibling}}var at=!1,Ue=!1,fn=!1,Su=!1,af=typeof WeakSet=="function"?WeakSet:Set,lt=null,hn=!1,Di=!1,lr=!1,jc=!1;function rz(e,t,n){if(e=e.containerInfo,Qc=oi,e=qv(e),Bd(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var s=0,u=-1,d=-1,p=0,c=0,f=e,g=null;t:for(;;){for(var C;f!==a||i!==0&&f.nodeType!==3||(u=s+i),f!==o||l!==0&&f.nodeType!==3||(d=s+l),f.nodeType===3&&(s+=f.nodeValue.length),(C=f.firstChild)!==null;)g=f,f=C;for(;;){if(f===e)break t;if(g===a&&++p===i&&(u=s),g===o&&++c===l&&(d=s),(C=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=C}a=u===-1||d===-1?null:{start:u,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jc={focusedElem:e,selectionRange:a},oi=!1,n=(n&335544064)===n,lt=t,t=n?9270:1024;lt!==null;){if(e=lt,n&&(a=e.deletions,a!==null))for(i=0;i<a.length;i++)n&&Dc(a[i]);if(e.alternate===null&&e.flags&2)n&&tf(e),Wo(n);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&n&&Dc(a),Wo(n);continue}else if(a!==null&&a.memoizedState!==null){n&&tf(e),Wo(n);continue}}a=e.child,e.subtreeFlags&t&&a!==null?(a.return=e,lt=a):(n&&lb(e),Wo(n))}}jt=null}function Wo(e){for(;lt!==null;){var t=lt,n=e,a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(l&1024&&a!==null){n=void 0,l=a.memoizedProps,a=a.memoizedState;var i=t.stateNode;try{var o=il(t.type,l);n=i.getSnapshotBeforeUpdate(o,a),i.__reactInternalSnapshotBeforeUpdate=n}catch(s){Re(t,t.return,s)}}break;case 3:if(l&1024){if(a=t.stateNode.containerInfo,n=a.nodeType,n===9)td(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":td(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&a!==null&&(n=Hn(a.memoizedProps,a.stateNode),l=t.memoizedProps,l=Pn(l.default,l.update),l!=="none"&&bi(a,n,l,a.memoizedState=[],!0));break;default:if(l&1024)throw Error(I(163))}if(a=t.sibling,a!==null){a.return=t.return,lt=a;break}lt=t.return}}function sb(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:vn(e,n),a&4&&Ro(5,n);break;case 1:if(vn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Re(n,n.return,o)}else{var l=il(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Re(n,n.return,o)}}a&64&&Wg(n),a&512&&gn(n,n.return);break;case 3:if(vn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ug(e,t)}catch(o){Re(n,n.return,o)}}break;case 27:t===null&&a&4&&nb(n);case 26:case 5:vn(e,n),t===null&&a&4&&Rc(n),a&512&&gn(n,n.return);break;case 12:vn(e,n);break;case 31:vn(e,n),a&4&&db(e,n);break;case 13:vn(e,n),a&4&&mb(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Sz.bind(null,n),t2(e,n))));break;case 22:if(a=n.memoizedState!==null||at,!a){var i=t!==null&&t.memoizedState!==null||Ue;t=at,l=Ue,at=a,(Ue=i)&&!l?(a=2,n.subtreeFlags&8772&&(a|=1),rn(e,n,a)):vn(e,n),at=t,Ue=l}break;case 30:vn(e,n),a&512&&gn(n,n.return);break;case 7:a&512&&gn(n,n.return);default:vn(e,n)}}function Vc(e,t){for(e=e.child;e!==null;)rb(e,t),e=e.sibling}function rb(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var a=n.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var l=e.stateNode,i=e.memoizedProps.style,o=i!=null&&i.hasOwnProperty("display")?i.display:null;l.style.display=o==null||typeof o=="boolean"?"":(""+o).trim()}}catch(u){Re(e,e.return,u)}Lc(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Ce=!0}catch(u){Re(e,e.return,u)}break;case 18:try{var s=e.stateNode;t?bf(s,!0):bf(e.stateNode,!1)}catch(u){Re(e,e.return,u)}break;case 22:case 23:e.memoizedState===null&&Vc(e,t);break;default:Vc(e,t)}}function Lc(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,a=t;switch(n.tag){case 4:rb(n,a);break e;case 22:n.memoizedState===null&&Lc(n,a);break e;default:Lc(n,a)}}e=e.sibling}}function ub(e){var t=e.alternate;t!==null&&(e.alternate=null,ub(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,wt=!1;function sn(e,t,n){for(n=n.child;n!==null;)cb(e,t,n),n=n.sibling}function cb(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 26:Ue||dt(n,t),sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ue&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ue||dt(n,t),Qi(n);var a=He,l=wt;Da(n.type)&&(He=n.stateNode,wt=!1),sn(e,t,n),Xb(n.stateNode,n.type,n.memoizedProps),He=a,wt=l;break;case 5:Ue||dt(n,t),Qi(n);case 6:if(n.tag===6&&Qi(n),a=He,l=wt,He=null,sn(e,t,n),He=a,wt=l,He!==null)if(wt)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(n.stateNode),Ce=!0}catch(i){Re(n,t,i)}else try{He.removeChild(n.stateNode),Ce=!0}catch(i){Re(n,t,i)}break;case 18:He!==null&&(wt?(e=He,gf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),si(e)):gf(He,n.stateNode));break;case 4:a=He,l=wt,He=n.stateNode.containerInfo,wt=!0,sn(e,t,n),He=a,wt=l;break;case 0:case 11:case 14:case 15:Ea(2,n,t),Ue||Ea(4,n,t),sn(e,t,n);break;case 1:Ue||(dt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&eb(n,t,a)),sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:Ue=(a=Ue)||n.memoizedState!==null,sn(e,t,n),Ue=a;break;case 30:dt(n,t),sn(e,t,n);break;case 7:Ue||dt(n,t),sn(e,t,n);break;default:sn(e,t,n)}}function db(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{si(e)}catch(n){Re(t,t.return,n)}}}function mb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(n){Re(t,t.return,n)}}function uz(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new af),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new af),t;default:throw Error(I(435,e.tag))}}function es(e,t){var n=uz(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=xz.bind(null,e,a);a.then(l,l)}})}function St(e,t,n){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],o=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(Da(u.type)){He=u.stateNode,wt=!1;break e}break;case 5:He=u.stateNode,wt=!1;break e;case 3:case 4:He=u.stateNode.containerInfo,wt=!0;break e}u=u.return}if(He===null)throw Error(I(160));cb(o,s,i),He=null,wt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pb(t,e,n),t=t.sibling}var un=null;function pb(e,t,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var o=a[i];o.ref.impl=o.nextImpl}St(t,e,n),xt(e),l&4&&(Ea(3,e,e.return),Ro(3,e),Ea(5,e,e.return));break;case 1:St(t,e,n),xt(e),l&512&&(Ue||a===null||dt(a,a.return)),l&64&&at&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(i=un,St(t,e,n),xt(e),l&512&&(Ue||a===null||dt(a,a.return)),l&4)if(l=a!==null?a.memoizedState:null,n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null)if(at)e.stateNode=Vb(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,l=i.ownerDocument||i;t:switch(t){case"title":a=l.getElementsByTagName("title")[0],(!a||a[Uo]||a[mt]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(t),l.head.insertBefore(a,l.querySelector("head > title"))),vt(a,t,n),a[mt]=e,ot(a),t=a;break e;case"link":if(i=Nf("link","href",l).get(t+(n.href||""))){for(o=0;o<i.length;o++)if(a=i[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(o,1);break t}}a=l.createElement(t),vt(a,t,n),l.head.appendChild(a);break;case"meta":if(i=Nf("meta","content",l).get(t+(n.content||""))){for(o=0;o<i.length;o++)if(a=i[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(o,1);break t}}a=l.createElement(t),vt(a,t,n),l.head.appendChild(a);break;default:throw Error(I(468,t))}a[mt]=e,ot(a),t=a}e.stateNode=t}else at||ld(i,e.type,e.stateNode);else e.stateNode=wf(i,n,e.memoizedProps);else l!==n?(l===null?(t=a.stateNode,t===null||Ue||t.parentNode.removeChild(t)):l.count--,n===null?at||ld(i,e.type,e.stateNode):wf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&bu(e,e.memoizedProps,a.memoizedProps);break;case 27:St(t,e,n),xt(e),l&512&&(Ue||a===null||dt(a,a.return)),a!==null&&l&4&&bu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(i=fn,fn=!1,St(t,e,n),fn=i,xt(e),l&512&&(Ue||a===null||dt(a,a.return)),e.flags&32){t=e.stateNode;try{Ql(t,""),Ce=!0}catch(p){Re(e,e.return,p)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,bu(e,t,a!==null?a.memoizedProps:t)),l&1024&&(Su=!0);break;case 6:if(St(t,e,n),xt(e),l&4){if(e.stateNode===null)throw Error(I(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Ce=!0}catch(p){Re(e,e.return,p)}}break;case 3:if(Ce=!1,$s=null,i=un,un=vo(t.containerInfo),St(t,e,n),un=i,xt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(p){Re(e,e.return,p)}Su&&(Su=!1,fb(e)),Ce=!1;break;case 4:l=fn,fn=at,a=rp(),i=un,un=vo(e.stateNode.containerInfo),St(t,e,n),xt(e),un=i,Ce&&Di&&(lr=!0),Ce=a,fn=l;break;case 12:St(t,e,n),xt(e);break;case 31:St(t,e,n),xt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,es(e,t)));break;case 13:St(t,e,n),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lr=Ht()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,es(e,t)));break;case 22:i=e.memoizedState!==null,o=a!==null&&a.memoizedState!==null;var s=at,u=Ue,d=fn;at=s||i,fn=d||i,Ue=u||o,St(t,e,n),Ue=u,fn=d,at=s,xt(e),l&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||a===null||o||at||Ue||(t=o||Ue,n=at,a=Ue,at=i||at,Ue=t,ea(e,2),at=n,Ue=a),!i&&fn||Vc(e,i)),l&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,es(e,n))));break;case 19:St(t,e,n),xt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,es(e,t)));break;case 30:l&512&&(Ue||a===null||dt(a,a.return)),l=rp(),i=Di,o=(n&335544064)===n,s=e.memoizedProps,Di=o&&Pn(s.default,s.update)!=="none",St(t,e,n),xt(e),o&&a!==null&&Ce&&(e.flags|=4),Di=i,Ce=l;break;case 21:break;case 7:l&512&&(Ue||a===null||dt(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:St(t,e,n),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(tb(a)){n=a;break}a=a.return}a=null;for(var l=e.return;l!==null;){if(sm(l)){var i=l.stateNode;a===null?a=[i]:a.push(i)}if(om(l))break;l=l.return}var o=a;if(n==null)throw Error(I(160));switch(n.tag){case 27:var s=n.stateNode,u=yu(e);nr(e,u,s,o);break;case 5:var d=n.stateNode;n.flags&32&&(Ql(d,""),n.flags&=-33);var p=yu(e);nr(e,p,d,o);break;case 3:case 4:var c=n.stateNode.containerInfo,f=yu(e);Bc(e,f,c,o);break;default:throw Error(I(161))}}catch(g){Re(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fb(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fb(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,oi=!0,t.reset(),oi=!1),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)hb(t,e),t=t.sibling;else ob(t)}function hb(e,t){var n=e.alternate;if(n===null)Oc(e,!1);else switch(e.tag){case 3:if(jc=hn=!1,nf(),gl(t,e),!hn&&!lr){if(e=Sn,e!==null)for(var a=0;a<e.length;a+=3){n=e[a];var l=e[a+1];Hb(n,e[a+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),jc=!0}Sn=null;break;case 5:gl(t,e);break;case 4:a=hn,hn=!1,gl(t,e),hn&&(lr=!0),hn=a;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Oc(e,!1):gl(t,e));break;case 30:a=hn,l=nf(),hn=!1,gl(t,e),hn&&(e.flags|=4);var i=e.memoizedProps,o=e.stateNode;t=Hn(i,o),o=Hn(n.memoizedProps,o);var s=Pn(i.default,i.update);s==="none"?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,zt=0,t=rm(e,n,t,o,s,i,!0),zt!==(i===null?0:i.length)&&(e.flags|=32)),e.flags&4&&t?(ei(e,e.memoizedProps.onUpdate),Sn=l):l!==null&&(l.push.apply(l,Sn),Sn=l),hn=e.flags&32?!0:a;break;default:gl(t,e)}}function vn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sb(e,t.alternate,t),t=t.sibling}function ea(e,t){for(e=e.child;e!==null;){var n=e,a=t;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),ea(n,a);break;case 1:dt(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&eb(n,n.return,l),ea(n,a);break;case 27:a&2&&Xb(n.stateNode,n.type,n.memoizedProps);case 5:dt(n,n.return),n.tag!==5&&n.tag!==27||Qi(n),ea(n,a);break;case 6:Qi(n);break;case 26:dt(n,n.return),l=n.stateNode,n.memoizedState!==null||l===null||Ue||l.parentNode.removeChild(l),ea(n,a);break;case 22:n.memoizedState===null&&ea(n,a);break;case 30:dt(n,n.return),ea(n,a);break;case 7:dt(n,n.return);default:ea(n,a)}e=e.sibling}}function rn(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags,s=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:rn(l,i,n),Ro(4,i);break;case 1:if(rn(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){Re(a,a.return,p)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)rg(d[l],u)}catch(p){Re(a,a.return,p)}}s&&o&64&&Wg(i),gn(i,i.return);break;case 27:n&2&&nb(i);case 5:i.tag!==5&&i.tag!==27||ef(i),rn(l,i,n),s&&a===null&&o&4&&Rc(i),gn(i,i.return);break;case 6:ef(i);break;case 26:u=i.stateNode,i.memoizedState!==null||u===null||at||ld(vo(u.ownerDocument),i.type,u),rn(l,i,n),s&&a===null&&o&4&&Rc(i),gn(i,i.return);break;case 12:rn(l,i,n);break;case 31:rn(l,i,n),s&&o&4&&db(l,i);break;case 13:rn(l,i,n),s&&o&4&&mb(l,i);break;case 22:i.memoizedState===null&&rn(l,i,n),gn(i,i.return);break;case 30:rn(l,i,n),gn(i,i.return);break;case 7:gn(i,i.return);default:rn(l,i,n)}t=t.sibling}}function um(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Eo(n))}function cm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Eo(e))}function Kt(e,t,n,a){var l=(n&335544064)===n;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)vb(e,t,n,a),t=t.sibling;else l&&ib(t)}function vb(e,t,n,a){var l=(n&335544064)===n;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ns(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Kt(e,t,n,a),i&2048&&Ro(9,t);break;case 1:Kt(e,t,n,a);break;case 3:Kt(e,t,n,a),l&&jc&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&Eo(i)));break;case 12:if(i&2048){Kt(e,t,n,a),i=t.stateNode;try{var o=t.memoizedProps,s=o.id,u=o.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(d){Re(t,t.return,d)}}else Kt(e,t,n,a);break;case 31:Kt(e,t,n,a);break;case 13:Kt(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?(l&&s!==null&&s.memoizedState===null&&Ns(s),o._visibility&2?Kt(e,t,n,a):Ji(e,t)):(l&&s!==null&&s.memoizedState!==null&&Ns(t),o._visibility&2?Kt(e,t,n,a):(o._visibility|=2,Sl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1))),i&2048&&um(s,t);break;case 24:Kt(e,t,n,a),i&2048&&cm(t.alternate,t);break;case 30:l&&(i=t.alternate,i!==null&&(zn(i.child,!0),zn(t.child,!0))),Kt(e,t,n,a);break;default:Kt(e,t,n,a)}}function Sl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,s=n,u=a,d=o.flags;switch(o.tag){case 0:case 11:case 15:Sl(i,o,s,u,l),Ro(8,o);break;case 23:break;case 22:var p=o.stateNode;o.memoizedState!==null?p._visibility&2?Sl(i,o,s,u,l):Ji(i,o):(p._visibility|=2,Sl(i,o,s,u,l)),l&&d&2048&&um(o.alternate,o);break;case 24:Sl(i,o,s,u,l),l&&d&2048&&cm(o.alternate,o);break;default:Sl(i,o,s,u,l)}t=t.sibling}}function Ji(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Ji(n,a),l&2048&&um(a.alternate,a);break;case 24:Ji(n,a),l&2048&&cm(a.alternate,a);break;default:Ji(n,a)}t=t.sibling}}var Ha=8192;function ja(e,t,n){if(e.subtreeFlags&Ha)for(e=e.child;e!==null;)gb(e,t,n),e=e.sibling}function gb(e,t,n){switch(e.tag){case 26:ja(e,t,n),e.flags&Ha&&(e.memoizedState!==null?h2(n,un,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&zf(n,e)));break;case 5:ja(e,t,n),e.flags&Ha&&(e=e.stateNode,(t&335544128)===t&&zf(n,e));break;case 3:case 4:var a=un;un=vo(e.stateNode.containerInfo),ja(e,t,n),un=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ha,Ha=16777216,ja(e,t,n),Ha=a):ja(e,t,n));break;case 30:if(e.flags&Ha&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var l=e.stateNode;l.paired=null,jt===null&&(jt=new Map),jt.set(a,l)}ja(e,t,n);break;default:ja(e,t,n)}}function bb(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ti(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];lt=a,Sb(a,e)}bb(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yb(e),e=e.sibling}function yb(e){switch(e.tag){case 0:case 11:case 15:Ti(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:Ti(e);break;case 12:Ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ts(e)):Ti(e);break;default:Ti(e)}}function Ts(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];lt=a,Sb(a,e)}bb(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ea(8,t,t.return),Ts(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ts(t));break;default:Ts(t)}e=e.sibling}}function Sb(e,t){for(;lt!==null;){var n=lt;switch(n.tag){case 0:case 11:case 15:Ea(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Eo(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,lt=a;else e:for(n=e;lt!==null;){a=lt;var l=a.sibling,i=a.return;if(ub(a),a===n){lt=null;break e}if(l!==null){l.return=i,lt=l;break e}lt=i}}}var cz={getCacheForType:function(e){var t=pt(Qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return pt(Qe).controller.signal}},dz=typeof WeakMap=="function"?WeakMap:Map,we=0,Ze=null,xe=null,_e=0,Ee=0,Zt=null,ca=!1,yi=!1,dm=!1,Gn=0,Ye=0,Aa=0,Xa=0,ir=0,Lt=0,Wl=0,Wi=null,Nt=null,Hc=!1,Lr=0,xb=0,or=1/0,sr=null,_a=null,Ie=0,mn=null,ol=null,Tn=0,Ic=0,Fc=null,_b=null,ql=null,Gl=null,Yl=null,eo=0,zs=null;function qt(){return we&2&&_e!==0?_e&-_e:ce.T!==null?pm():Nv()}function Cb(){if(Lt===0)if(!(_e&536870912)||ge){var e=Io;Io<<=1,!(Io&3932160)&&(Io=262144),Lt=e}else Lt=536870912;return e=gt.current,e!==null&&(e.flags|=32),Lt}function ei(e,t){if(t!=null){var n=e.stateNode,a=n.ref;a===null&&(a=n.ref=Ib(Hn(e.memoizedProps,n))),Gl===null&&(Gl=[]),Gl.push(t.bind(null,a))}}function Rt(e,t,n){(e===Ze&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(ti(e,0),da(e,_e,Lt,!1)),zo(e,n),(!(we&2)||e!==Ze)&&(e===Ze&&(!(we&2)&&(Xa|=n),Ye===4&&da(e,_e,Lt,!1)),$n(e))}function kb(e,t,n){if(we&6)throw Error(I(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||To(e,t),l=a?fz(e,t):xu(e,t,!0),i=a;do{if(l===0){yi&&!a&&da(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!mz(n)){l=xu(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;l=Wi;var u=s.current.memoizedState.isDehydrated;if(u&&(ti(s,o).flags|=256),o=xu(s,o,!1),o!==2&&o!==6){if(dm&&!u){s.errorRecoveryDisabledLanes|=i,Xa|=i,l=4;break e}i=Nt,Nt=l,i!==null&&(Nt===null?Nt=i:Nt.push.apply(Nt,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){ti(e,0),da(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(I(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:da(a,t,Lt,!ca);break e;case 2:Nt=null;break;case 3:case 5:break;default:throw Error(I(329))}if((t&62914560)===t&&(l=Lr+300-Ht(),10<l)){if(da(a,t,Lt,!ca),Tr(a,0,!0)!==0)break e;Tn=t,a.timeoutHandle=hm(lf.bind(null,a,n,Nt,sr,Hc,t,Lt,Xa,Wl,ca,i,"Throttled",-0,0),l);break e}lf(a,n,Nt,sr,Hc,t,Lt,Xa,Wl,ca,i,null,-0,0)}}break}while(!0);$n(e)}function lf(e,t,n,a,l,i,o,s,u,d,p,c,f,g){e.timeoutHandle=-1;var C=t.subtreeFlags,S=(i&335544064)===i;if(c=null,(S||C&8192||(C&16785408)===16785408)&&(c={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_n},jt=null,gb(t,i,c),S&&(C=c,S=e.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(C.count++,C.waitingForViewTransition=!0,C=go.bind(C),S.finished.then(C,C))),C=(i&62914560)===i?Lr-Ht():(i&4194048)===i?xb-Ht():0,C=v2(c,C),C!==null)){Tn=i,e.cancelPendingCommit=C(sf.bind(null,e,t,i,n,a,l,o,s,u,d,p,c,null,f,g)),da(e,i,o,!d);return}sf(e,t,i,n,a,l,o,s,u,d,p,c)}function mz(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Gt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,n,a){t=xv(e,t),t&=~ir,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-Ft(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&Cv(e,n,t)}function Hr(){return we&6?!0:(Bo(0),!1)}function mm(){if(xe!==null){if(Ee===0)var e=xe.return;else e=xe,Zn=fl=null,Pd(e),Hl=null,uo=0,e=xe;for(;e!==null;)Jg(e.alternate,e),e=e.return;xe=null}}function ti(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Zz(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Tn=0,mm(),Ze=e,xe=n=jn(e.current,null),_e=t,Ee=0,Zt=null,ca=!1,yi=To(e,t),dm=!1,Wl=Lt=ir=Xa=Aa=Ye=0,Nt=Wi=null,Hc=!1,Gn=xv(e,t),Ar(),n}function wb(e,t){fe=null,ce.H=Ws,t===gi||t===Or?(t=Ep(),Ee=3):t===Ld?(t=Ep(),Ee=4):Ee=t===am?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Zt=t,xe===null&&(Ye=1,er(e,Wt(t,e.current)))}function Nb(){var e=gt.current;return e===null?!0:(_e&4194048)===_e?bt===null:(_e&62914560)===_e||_e&536870912?e===bt:!1}function Tb(){var e=ce.H;return ce.H=Ws,e===null?Ws:e}function zb(){var e=ce.A;return ce.A=cz,e}function rr(){Ye=4,ca||(_e&4194048)!==_e&&gt.current!==null||(yi=!0),!(Aa&134217727)&&!(Xa&134217727)||Ze===null||da(Ze,_e,Lt,!1)}function xu(e,t,n){var a=we;we|=2;var l=Tb(),i=zb();(Ze!==e||_e!==t)&&(sr=null,ti(e,t)),t=!1;var o=Ye;e:do try{if(Ee!==0&&xe!==null){var s=xe,u=Zt;switch(Ee){case 8:mm(),o=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var d=Ee;if(Ee=0,Zt=null,Dl(e,s,u,d),n&&yi){o=0;break e}break;default:d=Ee,Ee=0,Zt=null,Dl(e,s,u,d)}}pz(),o=Ye;break}catch(p){wb(e,p)}while(!0);return t&&e.shellSuspendCounter++,Zn=fl=null,we=a,ce.H=l,ce.A=i,xe===null&&(Ze=null,_e=0,Ar()),o}function pz(){for(;xe!==null;)Ub(xe)}function fz(e,t){var n=we;we|=2;var a=Tb(),l=zb();Ze!==e||_e!==t?(sr=null,or=Ht()+500,ti(e,t)):yi=To(e,t);e:do try{if(Ee!==0&&xe!==null){t=xe;var i=Zt;t:switch(Ee){case 1:Ee=0,Zt=null,Dl(e,t,i,1);break;case 2:case 9:if($p(i)){Ee=0,Zt=null,of(t);break}t=function(){Ee!==2&&Ee!==9||Ze!==e||(Ee=7),$n(e)},i.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:$p(i)?(Ee=0,Zt=null,of(t)):(Ee=0,Zt=null,Dl(e,t,i,7));break;case 5:var o=null;switch(xe.tag){case 26:o=xe.memoizedState;case 5:case 27:var s=xe;if(o?Wb(o):s.stateNode.complete){Ee=0,Zt=null;var u=s.sibling;if(u!==null)xe=u;else{var d=s.return;d!==null?(xe=d,Ir(d)):xe=null}break t}}Ee=0,Zt=null,Dl(e,t,i,5);break;case 6:Ee=0,Zt=null,Dl(e,t,i,6);break;case 8:mm(),Ye=6;break e;default:throw Error(I(462))}}hz();break}catch(p){wb(e,p)}while(!0);return Zn=fl=null,ce.H=a,ce.A=l,we=n,xe!==null?0:(Ze=null,_e=0,Ar(),Ye)}function hz(){for(;xe!==null&&!AN();)Ub(xe)}function Ub(e){var t=Qg(e.alternate,e,Gn);e.memoizedProps=e.pendingProps,t===null?Ir(e):xe=t}function of(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yp(n,t,t.pendingProps,t.type,void 0,_e);break;case 11:t=Yp(n,t,t.pendingProps,t.type.render,t.ref,_e);break;case 5:Pd(t);var a=t;a===rt&&(ge?(Gs(a),a.tag===5&&a.stateNode!=null&&(je=a.stateNode)):(Gs(a),ge=!0));default:Jg(n,t),t=xe=Wv(t,Gn),t=Qg(n,t,Gn)}e.memoizedProps=e.pendingProps,t===null?Ir(e):xe=t}function Dl(e,t,n,a){Zn=fl=null,Pd(t),Hl=null,uo=0;var l=t.return;try{if(nz(e,l,t,n,_e)){Ye=1,er(e,Wt(n,e.current)),xe=null;return}}catch(i){if(l!==null)throw xe=l,i;Ye=1,er(e,Wt(n,e.current)),xe=null;return}t.flags&32768?(ge||a===1?e=!0:yi||_e&536870912?e=!1:(ca=e=!0,(a===2||a===9||a===3||a===6)&&(a=gt.current,a!==null&&a.tag===13&&(a.flags|=16384))),$b(t,e)):Ir(t)}function Ir(e){var t=e;do{if(t.flags&32768){$b(t,ca);return}e=t.return;var n=oz(t.alternate,t,Gn);if(n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Ye===0&&(Ye=5)}function $b(e,t){do{var n=sz(e.alternate,e);if(n!==null){n.flags&=32767,xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=n}while(e!==null);Ye=6,xe=null}function sf(e,t,n,a,l,i,o,s,u,d,p,c){e.cancelPendingCommit=null;do Fr();while(Ie!==0);if(we&6)throw Error(I(327));if(t!==null){if(t===e.current)throw Error(I(177));e===Ze&&(xe=Ze=null,_e=0),ol=t,mn=e,Tn=n,Fc=l,_b=a,vz(e,t,n,o,s,u,c)}}function vz(e,t,n,a,l,i,o){var s=t.lanes|t.childLanes;if(Ic=s,s|=Od,HN(e,n,s,a,l,i),Gl=null,(n&335544064)===n?(Yl=FT(e),a=10262):(Yl=null,a=10256),t.subtreeFlags&a||t.flags&a?(e.callbackNode=null,e.callbackPriority=0,_z(Ls,function(){return Kc(),null})):(e.callbackNode=null,e.callbackPriority=0),ar=!1,a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=ce.T,ce.T=null,l=Te.p,Te.p=2,i=we,we|=4;try{rz(e,t,n)}finally{we=i,Te.p=l,ce.T=a}}Ie=1,ar?ql=Hz(o,e.containerInfo,Yl,qc,Gc,bz,Yc,Kc,gz):(qc(),Gc(),Yc())}function gz(e){if(Ie!==0){var t=mn.onRecoverableError;t(e,{componentStack:null})}}function bz(){Ie===3&&(Ie=0,hb(ol,mn),Ie=4)}function qc(){if(Ie===1){Ie=0;var e=mn,t=ol,n=Tn,a=(t.flags&13878)!==0;if(t.subtreeFlags&13878||a){a=ce.T,ce.T=null;var l=Te.p;Te.p=2;var i=we;we|=4;try{Di=lr=!1,pb(t,e,n),n=Jc;var o=qv(e.containerInfo),s=n.focusedElem,u=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fv(s.ownerDocument.documentElement,s)){if(u!==null&&Bd(s)){var d=u.start,p=u.end;if(p===void 0&&(p=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(p,s.value.length);else{var c=s.ownerDocument||document,f=c&&c.defaultView||window;if(f.getSelection){var g=f.getSelection(),C=s.textContent.length,S=Math.min(u.start,C),_=u.end===void 0?S:Math.min(u.end,C);!g.extend&&S>_&&(o=_,_=S,S=o);var v=_p(s,S),h=_p(s,_);if(v&&h&&(g.rangeCount!==1||g.anchorNode!==v.node||g.anchorOffset!==v.offset||g.focusNode!==h.node||g.focusOffset!==h.offset)){var y=c.createRange();y.setStart(v.node,v.offset),g.removeAllRanges(),S>_?(g.addRange(y),g.extend(h.node,h.offset)):(y.setEnd(h.node,h.offset),g.addRange(y))}}}}for(c=[],g=s;g=g.parentNode;)g.nodeType===1&&c.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<c.length;s++){var k=c[s];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}oi=!!Qc,Jc=Qc=null}finally{we=i,Te.p=l,ce.T=a}}e.current=t,Ie=2}}function Gc(){if(Ie===2){Ie=0;var e=mn,t=ol,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=ce.T,ce.T=null;var a=Te.p;Te.p=2;var l=we;we|=4;try{sb(e,t.alternate,t)}finally{we=l,Te.p=a,ce.T=n}}Ie=3}}function Yc(){if(Ie===4||Ie===3){Ie=0;var e=ql;ql=null,RN();var t=mn,n=ol,a=Tn,l=_b,i=(a&335544064)===a?10262:10256;if(n.subtreeFlags&i||n.flags&i?Ie=5:(Ie=0,ol=mn=null,Eb(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(_a=null),zd(a),n=n.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(No,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=ce.T,i=Te.p,Te.p=2,ce.T=null;try{for(var o=t.onRecoverableError,s=0;s<l.length;s++){var u=l[s];o(u.value,{componentStack:u.stack})}}finally{ce.T=n,Te.p=i}}if(l=Gl,o=Yl,Yl=null,l!==null&&(Gl=null,o===null&&(o=[]),e!==null))for(u=0;u<l.length;u++)n=(0,l[u])(o),n!==void 0&&e.finished.finally(n);Tn&3&&Fr(),$n(t),i=t.pendingLanes,a&261930&&i&42?t===zs?eo++:(eo=0,zs=t):(eo=0,zs=null),Bo(0)}}function Eb(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Eo(t)))}function Fr(){return ql!==null&&(ql.skipTransition(),ql=null),qc(),Gc(),Yc(),Kc()}function Kc(){if(Ie!==5)return!1;var e=mn,t=Ic;Ic=0;var n=zd(Tn),a=ce.T,l=Te.p;try{Te.p=32>n?32:n,ce.T=null,n=Fc,Fc=null;var i=mn,o=Tn;if(Ie=0,ol=mn=null,Tn=0,we&6)throw Error(I(331));var s=we;if(we|=4,yb(i.current),vb(i,i.current,o,n),we=s,Bo(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(No,i)}catch{}return!0}finally{Te.p=l,ce.T=a,Eb(e,t)}}function rf(e,t,n){t=Wt(n,t),t=Tc(e.stateNode,t,2),e=ya(e,t,2),e!==null&&(zo(e,2),$n(e))}function Re(e,t,n){if(e.tag===3)rf(e,e,n);else for(;t!==null;){if(t.tag===3){rf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_a===null||!_a.has(a))){e=Wt(n,e),n=Gg(2),a=ya(t,n,2),a!==null&&(Yg(n,a,t,e),zo(a,2),$n(a));break}}t=t.return}}function _u(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new dz;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(dm=!0,l.add(n),e=yz.bind(null,e,t,n),t.then(e,e))}function yz(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ze===e&&(_e&n)===n&&(Ye===4||Ye===3&&(_e&62914560)===_e&&300>Ht()-Lr?we&2?ir|=n:ti(e,0):ir|=n,Wl===_e&&(Wl=0)),$n(e)}function Ab(e,t){t===0&&(t=_v()),e=pl(e,t),e!==null&&(zo(e,t),$n(e))}function Sz(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ab(e,n)}function xz(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(I(314))}a!==null&&a.delete(t),Ab(e,n)}function _z(e,t){return Nd(e,t)}var ni=null,xl=null,Pc=!1,ur=!1,Cu=!1,ma=0;function $n(e){e!==xl&&e.next===null&&(xl===null?ni=xl=e:xl=xl.next=e),ur=!0,Pc||(Pc=!0,kz())}function Bo(e,t){if(!Cu&&ur){Cu=!0;do for(var n=!1,a=ni;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Ft(42|e)+1)-1,i&=l&~(o&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,uf(a,i))}else i=_e,i=Tr(a,a===Ze?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(i&3)||To(a,i)||(n=!0,uf(a,i));a=a.next}while(n);Cu=!1}}function Cz(){Rb()}function Rb(){ur=Pc=!1;var e=0;ma!==0&&Oz()&&(e=ma);for(var t=Ht(),n=null,a=ni;a!==null;){var l=a.next,i=Bb(a,t);i===0?(a.next=null,n===null?ni=l:n.next=l,l===null&&(xl=n)):(n=a,(e!==0||i&3)&&(ur=!0)),a=l}Ie!==0&&Ie!==5||Bo(e),ma!==0&&(ma=0)}function Bb(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-Ft(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&a)&&(l[o]=LN(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}if(t=Ze,n=_e,n=Tr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&eu(a),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||To(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&eu(a),zd(n)){case 2:case 8:n=yv;break;case 32:n=Ls;break;case 268435456:n=Sv;break;default:n=Ls}return a=Ob.bind(null,e),n=Nd(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&eu(a),e.callbackPriority=2,e.callbackNode=null,2}function Ob(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Fr()&&e.callbackNode!==n)return null;var a=_e;return a=Tr(e,e===Ze?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(kb(e,a,t),Bb(e,Ht()),e.callbackNode!=null&&e.callbackNode===n?Ob.bind(null,e):null)}function uf(e,t){if(Fr())return null;kb(e,t,!0)}function kz(){Dz(function(){we&6?Nd(bv,Cz):Rb()})}function pm(){if(ma===0){var e=nl;e===0&&(e=Ho,Ho<<=1,!(Ho&261888)&&(Ho=256)),ma=e}return ma}function cf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vs(e)}function wz(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=cf((l[Ot]||null).action),o=a.submitter;o&&(t=(t=o[Ot]||null)?cf(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var s=new Ur("action","action",null,a,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ma!==0){var u=new FormData(l,o);wc(n,{pending:!0,data:u,method:l.method,action:i},null,u)}}else typeof i=="function"&&(s.preventDefault(),u=new FormData(l,o),wc(n,{pending:!0,data:u,method:l.method,action:i},i,u))},currentTarget:l}]})}}for(var ku=0;ku<fc.length;ku++){var wu=fc[ku],Nz=wu.toLowerCase(),Tz=wu[0].toUpperCase()+wu.slice(1);pn(Nz,"on"+Tz)}pn(Yv,"onAnimationEnd");pn(Kv,"onAnimationIteration");pn(Pv,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(ZT,"onTransitionRun");pn(DT,"onTransitionStart");pn(MT,"onTransitionCancel");pn(Xv,"onTransitionEnd");Xl("onMouseEnter",["mouseout","mouseover"]);Xl("onMouseLeave",["mouseout","mouseover"]);Xl("onPointerEnter",["pointerout","pointerover"]);Xl("onPointerLeave",["pointerout","pointerover"]);dl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dl("onBeforeInput",["compositionend","keypress","textInput","paste"]);dl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zz=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Zb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var s=a[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=d;try{i(l)}catch(p){Is(p)}l.currentTarget=null,i=u}else for(o=0;o<a.length;o++){if(s=a[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=d;try{i(l)}catch(p){Is(p)}l.currentTarget=null,i=u}}}}function Se(e,t){var n=t[lp];n===void 0&&(n=t[lp]=new Set);var a=e+"__bubble";n.has(a)||(Db(t,e,2,!1),n.add(a))}function Nu(e,t,n){var a=0;t&&(a|=4),Db(n,e,a,t)}var ts="_reactListening"+Math.random().toString(36).slice(2);function fm(e){if(!e[ts]){e[ts]=!0,zv.forEach(function(n){n!=="selectionchange"&&(zz.has(n)||Nu(n,!1,e),Nu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ts]||(t[ts]=!0,Nu("selectionchange",!1,t))}}function Db(e,t,n,a){switch(oy(t)){case 2:var l=S2;break;case 8:l=x2;break;default:l=xm}n=l.bind(null,t,n,e),l=void 0,!cc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Tu(e,t,n,a,l){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===l)break;if(o===4)for(o=a.return;o!==null;){var u=o.tag;if((u===3||u===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;s!==null;){if(o=Fa(s),o===null)return;if(u=o.tag,u===5||u===6||u===26||u===27){a=i=o;continue e}s=s.parentNode}}a=a.return}Zv(function(){var d=i,p=$d(n),c=[];e:{var f=Qv.get(e);if(f!==void 0){var g=Ur,C=e;switch(e){case"keypress":if(bs(n)===0)break e;case"keydown":case"keyup":g=mT;break;case"focusin":C="focus",g=ou;break;case"focusout":C="blur",g=ou;break;case"beforeblur":case"afterblur":g=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=eT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gT;break;case Yv:case Kv:case Pv:g=aT;break;case Xv:g=yT;break;case"scroll":case"scrollend":g=JN;break;case"wheel":g=xT;break;case"copy":case"cut":case"paste":g=iT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=fp;break;case"submit":g=hT;break;case"toggle":case"beforetoggle":g=CT}var S=(t&4)!==0,_=!S&&(e==="scroll"||e==="scrollend"),v=S?f!==null?f+"Capture":null:f;S=[];for(var h=d,y;h!==null;){var k=h;if(y=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||y===null||v===null||(k=lo(h,v),k!=null&&S.push(fo(h,k,y))),_)break;h=h.return}0<S.length&&(f=new g(f,C,null,n,p),c.push({event:f,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",g&&n!==uc&&(C=n.relatedTarget||n.fromElement)&&(Fa(C)||C[hi]))break e;(f||g)&&(C=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=d,g=g?Fa(g):null,g!==null&&(_=wo(g),S=g.tag,g!==_||S!==5&&S!==27&&S!==6)&&(g=null)):(f=null,g=d),f!==g&&(S=mp,k="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(S=fp,k="onPointerLeave",v="onPointerEnter",h="pointer"),_=f==null?C:Oi(f),y=g==null?C:Oi(g),C=new S(k,h+"leave",f,n,p),C.target=_,C.relatedTarget=y,k=null,Fa(p)===d&&(S=new S(v,h+"enter",g,n,p),S.target=y,S.relatedTarget=_,k=S),_=k,S=f&&g?Qu(f,g,Uz):null,f!==null&&df(c,C,f,S,!1),g!==null&&_!==null&&df(c,_,g,S,!0)))}e:{if(f=d?Oi(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var E=bp;else if(gp(f))if(Hv)E=RT;else{E=ET;var $=$T}else g=f.nodeName,!g||g.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?d&&Ud(d.elementType)&&(E=bp):E=AT;if(E&&(E=E(e,d))){Lv(c,E,n,p);break e}$&&$(e,f,d)}switch($=d?Oi(d):window,e){case"focusin":(gp($)||$.contentEditable==="true")&&(El=$,mc=d,Fi=null);break;case"focusout":Fi=mc=El=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Cp(c,n,p);break;case"selectionchange":if(OT)break;case"keydown":case"keyup":Cp(c,n,p)}var A;if(Rd)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else $l?jv(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Mv&&n.locale!=="ko"&&($l||B!=="onCompositionStart"?B==="onCompositionEnd"&&$l&&(A=Dv()):(ra=p,Ed="value"in ra?ra.value:ra.textContent,$l=!0)),$=cr(d,B),0<$.length&&(B=new pp(B,e,null,n,p),c.push({event:B,listeners:$}),A?B.data=A:(A=Vv(n),A!==null&&(B.data=A)))),(A=wT?NT(e,n):TT(e,n))&&(B=cr(d,"onBeforeInput"),0<B.length&&($=new pp("onBeforeInput","beforeinput",null,n,p),c.push({event:$,listeners:B}),$.data=A)),wz(c,e,d,n,p)}Zb(c,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=lo(e,n),l!=null&&a.unshift(fo(e,l,i)),l=lo(e,t),l!=null&&a.push(fo(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Uz(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function df(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var s=n,u=s.alternate,d=s.stateNode;if(s=s.tag,u!==null&&u===a)break;s!==5&&s!==26&&s!==27||d===null||(u=d,l?(d=lo(n,i),d!=null&&o.unshift(fo(n,d,u))):l||(d=lo(n,i),d!=null&&o.push(fo(n,d,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var $z=/\r\n?/g,Ez=/\u0000|\uFFFD/g;function mf(e){return(typeof e=="string"?e:""+e).replace($z,`
`).replace(Ez,"")}function Mb(e,t){return t=mf(t),mf(e)===t}function Ae(e,t,n,a,l,i){switch(n){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||Ql(e,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&Ql(e,""+a);else return;break;case"className":qo(e,"class",a);break;case"tabIndex":qo(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":qo(e,n,a);break;case"style":Ov(e,a,i);return;case"data":if(t!=="object"){qo(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=vs(a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",l.name,l,null),Ae(e,t,"formEncType",l.formEncType,l,null),Ae(e,t,"formMethod",l.formMethod,l,null),Ae(e,t,"formTarget",l.formTarget,l,null)):(Ae(e,t,"encType",l.encType,l,null),Ae(e,t,"method",l.method,l,null),Ae(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=vs(a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=_n);return;case"onScroll":a!=null&&Se("scroll",e);return;case"onScrollEnd":a!=null&&Se("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(I(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(I(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=vs(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Se("beforetoggle",e),Se("toggle",e),hs(e,"popover",a);break;case"xlinkActuate":En(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":En(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":En(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":En(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":En(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":En(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":En(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":En(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":En(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":hs(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=XN.get(n)||n,hs(e,n,a);else return}Ce=!0}function Xc(e,t,n,a,l,i){switch(n){case"style":Ov(e,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(I(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(I(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof a=="string")Ql(e,a);else if(typeof a=="number"||typeof a=="bigint")Ql(e,""+a);else return;break;case"onScroll":a!=null&&Se("scroll",e);return;case"onScrollEnd":a!=null&&Se("scrollend",e);return;case"onClick":a!=null&&(e.onclick=_n);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Uv.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),i=n.slice(2,l?n.length-7:void 0),t=e[Ot]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(i,t,l),typeof a=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,a,l);break e}Ce=!0,n in e?e[n]=a:a===!0?e.setAttribute(n,""):hs(e,n,a)}return}Ce=!0}function vt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(I(137,t));default:Ae(e,t,i,o,n,null)}}l&&Ae(e,t,"srcSet",n.srcSet,n,null),a&&Ae(e,t,"src",n.src,n,null);return;case"input":Se("invalid",e);var s=i=o=l=null,u=null,d=null;for(a in n)if(n.hasOwnProperty(a)){var p=n[a];if(p!=null)switch(a){case"name":l=p;break;case"type":o=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(I(137,t));break;default:Ae(e,t,a,p,n,null)}}Av(e,i,s,u,d,o,l,!1);return;case"select":Se("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(s=n[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":o=s;break;case"multiple":a=s;default:Ae(e,t,l,s,n,null)}t=i,n=o,e.multiple=!!a,t!=null?jl(e,!!a,t,!1):n!=null&&jl(e,!!a,n,!0);return;case"textarea":Se("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case"value":a=s;break;case"defaultValue":l=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(I(91));break;default:Ae(e,t,o,s,n,null)}Bv(e,a,l,i);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(a=n[u],a!=null))switch(u){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ae(e,t,u,a,n,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(a=0;a<po.length;a++)Se(po[a],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&(a=n[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(I(137,t));default:Ae(e,t,d,a,n,null)}return;default:if(Ud(t)){for(p in n)n.hasOwnProperty(p)&&(a=n[p],a!==void 0&&Xc(e,t,p,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(a=n[s],a!=null&&Ae(e,t,s,a,n,null))}var Az={};function Rz(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,s=null,u=null,d=null,p=null;for(g in n){var c=n[g];if(n.hasOwnProperty(g)&&c!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":u=c;default:a.hasOwnProperty(g)||Ae(e,t,g,null,a,c)}}for(var f in a){var g=a[f];if(c=n[f],a.hasOwnProperty(f)&&(g!=null||c!=null))switch(f){case"type":g!==c&&(Ce=!0),i=g;break;case"name":g!==c&&(Ce=!0),l=g;break;case"checked":g!==c&&(Ce=!0),d=g;break;case"defaultChecked":g!==c&&(Ce=!0),p=g;break;case"value":g!==c&&(Ce=!0),o=g;break;case"defaultValue":g!==c&&(Ce=!0),s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(I(137,t));break;default:g!==c&&Ae(e,t,f,g,a,c)}}rc(e,o,s,u,d,p,i,l);return;case"select":g=o=s=f=null;for(i in n)if(u=n[i],n.hasOwnProperty(i)&&u!=null)switch(i){case"value":break;case"multiple":g=u;default:a.hasOwnProperty(i)||Ae(e,t,i,null,a,u)}for(l in a)if(i=a[l],u=n[l],a.hasOwnProperty(l)&&(i!=null||u!=null))switch(l){case"value":i!==u&&(Ce=!0),f=i;break;case"defaultValue":i!==u&&(Ce=!0),s=i;break;case"multiple":i!==u&&(Ce=!0),o=i;default:i!==u&&Ae(e,t,l,i,a,u)}t=s,n=o,a=g,f!=null?jl(e,!!n,f,!1):!!a!=!!n&&(t!=null?jl(e,!!n,t,!0):jl(e,!!n,n?[]:"",!1));return;case"textarea":g=f=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Ae(e,t,s,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":l!==i&&(Ce=!0),f=l;break;case"defaultValue":l!==i&&(Ce=!0),g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(I(91));break;default:l!==i&&Ae(e,t,o,l,a,i)}Rv(e,f,g);return;case"option":for(var C in n)if(f=n[C],n.hasOwnProperty(C)&&f!=null&&!a.hasOwnProperty(C))switch(C){case"selected":e.selected=!1;break;default:Ae(e,t,C,null,a,f)}for(u in a)if(f=a[u],g=n[u],a.hasOwnProperty(u)&&f!==g&&(f!=null||g!=null))switch(u){case"selected":f!==g&&(Ce=!0),e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Ae(e,t,u,f,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)f=n[S],n.hasOwnProperty(S)&&f!=null&&!a.hasOwnProperty(S)&&Ae(e,t,S,null,a,f);for(d in a)if(f=a[d],g=n[d],a.hasOwnProperty(d)&&f!==g&&(f!=null||g!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(I(137,t));break;default:Ae(e,t,d,f,a,g)}return;default:if(Ud(t)){for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!==void 0&&!a.hasOwnProperty(_)&&Xc(e,t,_,void 0,a,f);for(p in a)f=a[p],g=n[p],!a.hasOwnProperty(p)||f===g||f===void 0&&g===void 0||Xc(e,t,p,f,a,g);return}}for(var v in n)f=n[v],n.hasOwnProperty(v)&&f!=null&&!a.hasOwnProperty(v)&&Ae(e,t,v,null,a,f);for(c in a)f=a[c],g=n[c],!a.hasOwnProperty(c)||f===g||f==null&&g==null||Ae(e,t,c,f,a,g)}function pf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bz(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,s=l.duration;if(i&&s&&pf(o)){for(o=0,s=l.responseEnd,a+=1;a<n.length;a++){var u=n[a],d=u.startTime;if(d>s)break;var p=u.transferSize,c=u.initiatorType;p&&pf(c)&&(u=u.responseEnd,o+=p*(u<s?1:(s-d)/(u-d)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qc=null,Jc=null;function ho(e){return e.nodeType===9?e:e.ownerDocument}function ff(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jb(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vb(e,t,n,a){return n=ho(n).createElement(e),n[mt]=a,n[Ot]=t,vt(n,e,t),ot(n),n}function Wc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zu=null;function Oz(){var e=window.event;return e&&e.type==="popstate"?e===zu?!1:(zu=e,!0):(zu=null,!1)}var hm=typeof setTimeout=="function"?setTimeout:void 0,Zz=typeof clearTimeout=="function"?clearTimeout:void 0,hf=typeof Promise=="function"?Promise:void 0,vf=typeof requestAnimationFrame=="function"?requestAnimationFrame:hm,Dz=typeof queueMicrotask=="function"?queueMicrotask:typeof hf<"u"?function(e){return hf.resolve(null).then(e).catch(Mz)}:hm;function Mz(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function gf(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),si(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")$u(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,$u(n);for(var i=n.firstChild;i;){var o=i.nextSibling,s=i.nodeName;i[Uo]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&$u(e.ownerDocument.body);n=l}while(n);si(t)}function bf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Lb(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var a=1;else for(var l=a=0;l<t.length;l++){var i=t[l];0<i.width&&0<i.height&&a++}a===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Hb(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function jz(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function ed(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return jz(t,n,e)}function Vz(e){return e.documentElement.clientHeight}function Lz(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Hz(e,t,n,a,l,i,o,s,u){var d=t.nodeType===9?t:t.ownerDocument;try{var p=d.startViewTransition({update:function(){var f=d.defaultView,g=f.navigation&&f.navigation.transition,C=d.fonts.status;a();var S=[];if(C==="loaded"&&(Vz(d),d.fonts.status==="loading"&&S.push(d.fonts.ready)),C=S.length,e!==null)for(var _=e.suspenseyImages,v=0,h=0;h<_.length;h++){var y=_[h];if(!y.complete){var k=y.getBoundingClientRect();if(0<k.bottom&&0<k.right&&k.top<f.innerHeight&&k.left<f.innerWidth){if(v+=ey(y),v>Es){S.length=C;break}y=new Promise(Lz.bind(y)),S.push(y)}}}if(0<S.length)return f=Promise.race([Promise.all(S),new Promise(function(E){return setTimeout(E,500)})]).then(l,l),(g?Promise.allSettled([g.finished,f]):f).then(i,i);if(l(),g)return g.finished.then(i,i);i()},types:n});d.__reactViewTransition=p;var c=[];return p.ready.then(function(){for(var f=d.documentElement.getAnimations({subtree:!0}),g=0;g<f.length;g++){var C=f[g],S=C.effect,_=S.pseudoElement;if(_!=null&&_.startsWith("::view-transition")){c.push(C),C=S.getKeyframes();for(var v=_=void 0,h=!0,y=0;y<C.length;y++){var k=C[y],E=k.width;if(_===void 0)_=E;else if(_!==E){h=!1;break}if(E=k.height,v===void 0)v=E;else if(v!==E){h=!1;break}delete k.width,delete k.height,k.transform==="none"&&delete k.transform}h&&_!==void 0&&v!==void 0&&(S.setKeyframes(C),h=getComputedStyle(S.target,S.pseudoElement),h.width!==_||h.height!==v)&&(h=C[0],h.width=_,h.height=v,h=C[C.length-1],h.width=_,h.height=v,S.setKeyframes(C))}}o()},function(f){d.__reactViewTransition===p&&(d.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&u(f)}finally{a(),l(),o()}}),p.finished.finally(function(){for(var f=0;f<c.length;f++)c[f].cancel();d.__reactViewTransition===p&&(d.__reactViewTransition=null),s()}),p}catch{return a(),l(),o(),null}}function qa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}qa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:De({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};qa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),a=[],l=0;l<n.length;l++){var i=n[l].effect;i!==null&&i.target===e&&i.pseudoElement===t&&a.push(n[l])}return a};qa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ib(e){return{name:e,group:new qa("group",e),imagePair:new qa("image-pair",e),old:new qa("old",e),new:new qa("new",e)}}function Yt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Yt.prototype.addEventListener=function(e,t,n){var a=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(a=n.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Fb(i,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(s=function(u){o.removeEventListener(e,t,n),typeof t=="function"?t.call(this,u):t.handleEvent(u)}),a!==null&&(l=o.removeEventListener.bind(o,e,t,n),a.addEventListener("abort",l,{once:!0}),l=a.removeEventListener.bind(a,"abort",l)),a=ai(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:l}),Bt(this._fragmentFiber.child,!1,Iz,e,s,a)}this._eventListeners=i}};function Iz(e,t,n,a){return tt(e).addEventListener(t,n,a),!1}Yt.prototype.removeEventListener=function(e,t,n){var a=this._eventListeners;if(a!==null&&(t=Fb(a,e,t,n),t!==-1)){var l=a[t];n=l.attachedListener;var i=l.cleanup;l=ai(l.optionsOrUseCapture),Bt(this._fragmentFiber.child,!1,Fz,e,n,l),a.splice(t,1),i!==null&&i()}};function Fz(e,t,n,a){return tt(e).removeEventListener(t,n,a),!1}function ai(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function yf(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Fb(e,t,n,a){if(e.length===0)return-1;a=yf(a);for(var l=0;l<e.length;l++){var i=e[l];if(i.type===t&&i.listener===n&&yf(i.optionsOrUseCapture)===a)return l}return-1}Yt.prototype.dispatchEvent=function(e){var t=cl(this._fragmentFiber);if(t===null)return!0;t=tt(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var i=n[l];a.addEventListener(i.type,i.attachedListener,ai(i.optionsOrUseCapture))}if(t.appendChild(a),e=a.dispatchEvent(e),n)for(l=0;l<n.length;l++)i=n[l],a.removeEventListener(i.type,i.attachedListener,ai(i.optionsOrUseCapture));return t.removeChild(a),e}return t.dispatchEvent(e)};Yt.prototype.focus=function(e){Bt(this._fragmentFiber.child,!0,qb,e,void 0,void 0)};function qb(e,t){return e.tag===6?!1:(e=tt(e),n2(e,t))}Yt.prototype.focusLast=function(e){var t=[];Bt(this._fragmentFiber.child,!0,vm,t,void 0,void 0);for(var n=t.length-1;0<=n&&!qb(t[n],e);n--);};function vm(e,t){return t.push(e),!1}Yt.prototype.blur=function(){var e=cl(this._fragmentFiber);e!==null&&(e=tt(e),e=ho(e).activeElement,e!==null&&Bt(this._fragmentFiber.child,!1,qz,e,void 0,void 0))};function qz(e,t){return e.tag===6?!1:(e=tt(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Yt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Bt(this._fragmentFiber.child,!1,Gz,e,void 0,void 0)};function Gz(e,t){return e.tag===6||(e=tt(e),t.observe(e)),!1}Yt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Bt(this._fragmentFiber.child,!1,Yz,e,void 0,void 0);for(var n=t=0;n<cn.length;n++){var a=cn[n];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):cn[t++]=a}cn.length=t}};function Yz(e,t){return e.tag===6||(e=tt(e),t.unobserve(e)),!1}var cn=[],Uu=!1;function Kz(e,t,n){cn.push({fragmentInstance:e,observer:t,instance:n}),Uu||(Uu=!0,a2(function(){Uu=!1;var a=cn;cn=[];for(var l=0;l<a.length;l++){var i=a[l];i.observer.unobserve(i.instance)}}))}Yt.prototype.getClientRects=function(){var e=[];return Bt(this._fragmentFiber.child,!1,Pz,e,void 0,void 0),e};function Pz(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=tt(e),t.push.apply(t,e.getClientRects());return!1}Yt.prototype.getRootNode=function(e){var t=cl(this._fragmentFiber);return t===null?this:tt(t).getRootNode(e)};Yt.prototype.compareDocumentPosition=function(e){var t=cl(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Bt(this._fragmentFiber.child,!1,vm,n,void 0,void 0);var a=tt(t);if(n.length===0){if(n=a,Jm(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var l=a=n.compareDocumentPosition(e);return n===e?l=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=fv(t)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=tt(n).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=tt(n[0]),l=tt(n[n.length-1]);var i=Jm(this._fragmentFiber)?t.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=l.compareDocumentPosition(e),u=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=a&&i&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===e||i&&l===e||u||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===e||!i&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xz(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xz(e,t,n,a,l){var i=Fa(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){n=!0;break e}i=i.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=l.ownerDocument,l===i||l===i.documentElement||l===i.body;e:{for(i=t,t=cl(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(t=Qu(n,i,Wm),t===null?t=!1:(Bt(t,!0,kN,i,n),i=Nl,Nl=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===a)&&(t=Qu(a,i,Wm),t===null?t=!1:(Bt(t,!0,wN,i,a),i=Nl,Xu=Nl=null,t=i!==null)),t):!1}function Sf(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Yt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(I(566));var t=[];Bt(this._fragmentFiber.child,!1,vm,t,void 0,void 0);var n=e!==!1;if(t.length===0){var a=fv(this._fragmentFiber);if(a=n?a[1]||a[0]||cl(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=tt(a),Sf(e,n);return}if(a=tt(a),a.nodeType!==9){if(a.nodeType===11){n="host"in a?a.host:null,n!==null&&n.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=n?t.length-1:0;a!==(n?-1:t.length);){var l=t[a];l.tag===6?(l=tt(l),Sf(l,n)):tt(l).scrollIntoView(e),a+=n?-1:1}};function Qz(e,t){return e=tt(e),Gb(e,t),!1}function Gb(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Yb(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];e.addEventListener(l.type,l.attachedListener,ai(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){for(var o=0,s=0;s<cn.length;s++){var u=cn[s];(u.fragmentInstance!==t||u.observer!==i||u.instance!==e)&&(cn[o++]=u)}cn.length=o,i.observe(e)}),Gb(e,t))}function Jz(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];e.removeEventListener(l.type,l.attachedListener,ai(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?Kz(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function td(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":td(n),zr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Wz(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Uo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=an(e.nextSibling),e===null)break}return null}function e2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=an(e.nextSibling),e===null))return null;return e}function Kb(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=an(e.nextSibling),e===null))return null;return e}function nd(e){return e.data==="$?"||e.data==="$~"}function gm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function t2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ad=null;function xf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return an(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function _f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function n2(e,t){function n(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return a}function a2(e){vf(function(){vf(function(t){return e(t)})})}function Pb(e,t,n){switch(t=ho(n),e){case"html":if(e=t.documentElement,!e)throw Error(I(452));return e;case"head":if(e=t.head,!e)throw Error(I(453));return e;case"body":if(e=t.body,!e)throw Error(I(454));return e;default:throw Error(I(451))}}function Xb(e,t,n){for(var a in n){var l=n[a];n.hasOwnProperty(a)&&l!=null&&Ae(e,t,a,null,Az,l)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===_n&&(e.onclick=null),zr(e)}function $u(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zr(e)}var ln=new Map,Cf=new Set;function vo(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Xn=Te.d;Te.d={f:l2,r:i2,D:o2,C:s2,L:r2,m:u2,X:d2,S:c2,M:m2};function l2(){var e=Xn.f(),t=Hr();return e||t}function i2(e){var t=vi(e);t!==null&&t.tag===5&&t.type==="form"?Og(t):Xn.r(e)}var Si=typeof document>"u"?null:document;function Qb(e,t,n){var a=Si;if(a&&typeof t=="string"&&t){var l=Jt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Cf.has(l)||(Cf.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),vt(t,"link",e),ot(t),a.head.appendChild(t)))}}function o2(e){Xn.D(e),Qb("dns-prefetch",e,null)}function s2(e,t){Xn.C(e,t),Qb("preconnect",e,t)}function r2(e,t,n){Xn.L(e,t,n);var a=Si;if(a&&e&&t){var l='link[rel="preload"][as="'+Jt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Jt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Jt(n.imageSizes)+'"]')):l+='[href="'+Jt(e)+'"]';var i=l;switch(t){case"style":i=li(e);break;case"script":i=xi(e)}if(!(ln.has(i)||(e=De({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ln.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Oo(i))||t==="script"&&a.querySelector(Zo(i))))){var o=a.createElement("link");vt(o,"link",e),t==="style"&&(o[Hs]=!0,o.onload=o.onerror=function(){Tv(o)}),ot(o),a.head.appendChild(o)}}}function u2(e,t){Xn.m(e,t);var n=Si;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Jt(a)+'"][href="'+Jt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=xi(e)}if(!ln.has(i)&&(e=De({rel:"modulepreload",href:e},t),ln.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Zo(i)))return}a=n.createElement("link"),vt(a,"link",e),ot(a),n.head.appendChild(a)}}}function c2(e,t,n){Xn.S(e,t,n);var a=Si;if(a&&e){var l=Ml(a).hoistableStyles,i=li(e);t=t||"default";var o=l.get(i);if(!o){var s={loading:0,preload:null};if(o=a.querySelector(Oo(i)))s.loading=5;else{e=De({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ln.get(i))&&bm(e,n);var u=o=a.createElement("link");ot(u),vt(u,"link",e),u._p=new Promise(function(d,p){u.onload=d,u.onerror=p}),u.addEventListener("load",function(){s.loading|=1}),u.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Us(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:s},l.set(i,o)}}}function d2(e,t){Xn.X(e,t);var n=Si;if(n&&e){var a=Ml(n).hoistableScripts,l=xi(e),i=a.get(l);i||(i=n.querySelector(Zo(l)),i||(e=De({src:e,async:!0},t),(t=ln.get(l))&&ym(e,t),i=n.createElement("script"),ot(i),vt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function m2(e,t){Xn.M(e,t);var n=Si;if(n&&e){var a=Ml(n).hoistableScripts,l=xi(e),i=a.get(l);i||(i=n.querySelector(Zo(l)),i||(e=De({src:e,async:!0,type:"module"},t),(t=ln.get(l))&&ym(e,t),i=n.createElement("script"),ot(i),vt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function kf(e,t,n,a){var l=(l=va.current)?vo(l):null;if(!l)throw Error(I(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=li(n.href),t=Ml(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=li(n.href);var i=Ml(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Oo(e)))?i._p||(o.instance=i,o.state.loading=5):(i=ln.get(e),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ln.set(e,i)),p2(l,e,i,o.state))),t&&a===null)throw Error(I(528,""));return o}if(t&&a!==null)throw Error(I(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=xi(n),t=Ml(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(I(444,e))}}function li(e){return'href="'+Jt(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function Jb(e){return De({},e,{"data-precedence":e.precedence,precedence:null})}function p2(e,t,n,a){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Hs]!==!0){a.loading=1;return}}else t=e.createElement("link"),t[Hs]=!0,t.onload=t.onerror=Tv.bind(null,t),vt(t,"link",n),ot(t),e.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function xi(e){return'[src="'+Jt(e)+'"]'}function Zo(e){return"script[async]"+e}function wf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Jt(n.href)+'"]');if(a)return t.instance=a,ot(a),a;var l=De({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ot(a),vt(a,"style",l),Us(a,n.precedence,e),t.instance=a;case"stylesheet":l=li(n.href);var i=e.querySelector(Oo(l));if(i)return t.state.loading|=4,t.instance=i,ot(i),i;a=Jb(n),(l=ln.get(l))&&bm(a,l),i=(e.ownerDocument||e).createElement("link"),ot(i);var o=i;return o._p=new Promise(function(s,u){o.onload=s,o.onerror=u}),vt(i,"link",a),t.state.loading|=4,Us(i,n.precedence,e),t.instance=i;case"script":return i=xi(n.src),(l=e.querySelector(Zo(i)))?(t.instance=l,ot(l),l):(a=n,(l=ln.get(i))&&(a=De({},n),ym(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),ot(l),vt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(I(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,Us(a,n.precedence,e));return t.instance}function Us(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var s=a[o];if(s.dataset.precedence===t)i=s;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function bm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ym(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $s=null;function Nf(e,t,n){if($s===null){var a=new Map,l=$s=new Map;l.set(n,a)}else l=$s,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Uo]||i[mt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var s=a.get(o);s?s.push(i):a.set(o,[i])}}return a}function ld(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function f2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tf(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Wb(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function ey(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function zf(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=ey(t),e.suspenseyImages.push(t)),e=g2.bind(e),t.decode().then(e,e))}function h2(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var l=li(a.href),i=t.querySelector(Oo(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=go.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,ot(i);return}i=t.ownerDocument||t,a=Jb(a),(l=ln.get(l))&&bm(a,l),i=i.createElement("link"),ot(i);var o=i;o._p=new Promise(function(s,u){o.onload=s,o.onerror=u}),vt(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=go.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Es=0;function v2(e,t){return e.stylesheets&&e.count===0&&As(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&As(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Es===0&&(Es=62500*Bz());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&As(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Es?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function ty(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)As(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function go(){this.count--,ty(this)}function g2(){this.imgCount--,ty(this)}var dr=null;function As(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dr=new Map,t.forEach(b2,e),dr=null,go.call(e))}function b2(e,t){if(!(t.state.loading&4)){var n=dr.get(e);if(n)var a=n.get(null);else{n=new Map,dr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=go.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ii={$$typeof:xn,Provider:null,Consumer:null,_currentValue:Ga,_currentValue2:Ga,_threadCount:0};function y2(e,t,n,a,l,i,o,s,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.hiddenUpdates=tu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.transitionTypes=null,this.incompleteTransitions=new Map}function ny(e,t,n,a,l,i,o,s,u,d,p,c){return e=new y2(e,t,n,o,u,d,p,c,s),t=1,i===!0&&(t|=24),i=$t(3,null,null,t),e.current=i,i.stateNode=e,t=jd(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Hd(i),e}function ay(e){return e?(e=Bl,e):Bl}function ly(e,t,n,a,l,i){l=ay(l),a.context===null?a.context=l:a.pendingContext=l,a=ba(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=ya(e,a,t),n!==null&&(Rt(n,e,t),Gi(n,e,t))}function Uf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sm(e,t){Uf(e,t),(e=e.alternate)&&Uf(e,t)}function iy(e){if(e.tag===13||e.tag===31){var t=pl(e,67108864);t!==null&&Rt(t,e,67108864),Sm(e,67108864)}}function $f(e){if(e.tag===13||e.tag===31){var t=qt();t=Td(t);var n=pl(e,t);n!==null&&Rt(n,e,t),Sm(e,t)}}var oi=!0;function S2(e,t,n,a){var l=ce.T;ce.T=null;var i=Te.p;try{Te.p=2,xm(e,t,n,a)}finally{Te.p=i,ce.T=l}}function x2(e,t,n,a){var l=ce.T;ce.T=null;var i=Te.p;try{Te.p=8,xm(e,t,n,a)}finally{Te.p=i,ce.T=l}}function xm(e,t,n,a){if(oi){var l=id(a);if(l===null)Tu(e,t,a,mr,n),Ef(e,a);else if(C2(l,e,t,n,a))a.stopPropagation();else if(Ef(e,a),t&4&&-1<_2.indexOf(e)){for(;l!==null;){var i=vi(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Va(i.pendingLanes);if(o!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var u=1<<31-Ft(o);s.entanglements[1]|=u,o&=~u}$n(i),!(we&6)&&(or=Ht()+500,Bo(0))}}break;case 31:case 13:s=pl(i,2),s!==null&&Rt(s,i,2),Hr(),Sm(i,2)}if(i=id(a),i===null&&Tu(e,t,a,mr,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else Tu(e,t,a,null,n)}}function id(e){return e=$d(e),_m(e)}var mr=null;function _m(e){if(mr=null,e=Fa(e),e!==null){var t=wo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=dv(t),e!==null)return e;e=null}else if(n===31){if(e=mv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mr=e,null}function oy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(BN()){case bv:return 2;case yv:return 8;case Ls:case ON:return 32;case Sv:return 268435456;default:return 32}default:return 32}}var od=!1,Ca=null,ka=null,wa=null,bo=new Map,yo=new Map,aa=[],_2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(t.pointerId)}}function zi(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=vi(t),t!==null&&iy(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function C2(e,t,n,a,l){switch(t){case"focusin":return Ca=zi(Ca,e,t,n,a,l),!0;case"dragenter":return ka=zi(ka,e,t,n,a,l),!0;case"mouseover":return wa=zi(wa,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return bo.set(i,zi(bo.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,yo.set(i,zi(yo.get(i)||null,e,t,n,a,l)),!0}return!1}function sy(e){var t=Fa(e.target);if(t!==null){var n=wo(t);if(n!==null){if(t=n.tag,t===13){if(t=dv(n),t!==null){e.blockedOn=t,ap(e.priority,function(){$f(n)});return}}else if(t===31){if(t=mv(n),t!==null){e.blockedOn=t,ap(e.priority,function(){$f(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=id(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);uc=a,n.target.dispatchEvent(a),uc=null}else return t=vi(n),t!==null&&iy(t),e.blockedOn=n,!1;t.shift()}return!0}function Af(e,t,n){Rs(e)&&n.delete(t)}function k2(){od=!1,Ca!==null&&Rs(Ca)&&(Ca=null),ka!==null&&Rs(ka)&&(ka=null),wa!==null&&Rs(wa)&&(wa=null),bo.forEach(Af),yo.forEach(Af)}function ns(e,t){e.blockedOn===t&&(e.blockedOn=null,od||(od=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,k2)))}var as=null;function Rf(e){as!==e&&(as=e,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,function(){as===e&&(as=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(_m(a||n)===null)continue;break}var i=vi(n);i!==null&&(e.splice(t,3),t-=3,wc(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function si(e){function t(u){return ns(u,e)}Ca!==null&&ns(Ca,e),ka!==null&&ns(ka,e),wa!==null&&ns(wa,e),bo.forEach(t),yo.forEach(t);for(var n=0;n<aa.length;n++){var a=aa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<aa.length&&(n=aa[0],n.blockedOn===null);)sy(n),n.blockedOn===null&&aa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[Ot]||null;if(typeof i=="function")o||Rf(n);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Ot]||null)s=o.formAction;else if(_m(l)!==null)continue}else s=o.action;typeof s=="function"?n[a+1]=s:(n.splice(a,3),a-=3),Rf(n)}}}function ry(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Cm(e){this._internalRoot=e}qr.prototype.render=Cm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));var n=t.current,a=qt();ly(n,a,e,t,null,null)};qr.prototype.unmount=Cm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ly(e.current,2,null,e,null,null),Hr(),t[hi]=null}};function qr(e){this._internalRoot=e}qr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<aa.length&&t!==0&&t<aa[n].priority;n++);aa.splice(n,0,e),n===0&&sy(e)}};var Bf=uv.version;if(Bf!=="19.3.0")throw Error(I(527,Bf,"19.3.0"));Te.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=CN(t),e=e!==null?pv(e):null,e=e===null?null:e.stateNode,e};var w2={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ce,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{No=ls.inject(w2),It=ls}catch{}}wr.createRoot=function(e,t){if(!cv(e))throw Error(I(299));var n=!1,a="",l=Ig,i=Fg,o=qg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ny(e,1,!1,null,null,n,a,null,l,i,o,ry),e[hi]=t.current,fm(e),new Cm(t)};wr.hydrateRoot=function(e,t,n){if(!cv(e))throw Error(I(299));var a=!1,l="",i=Ig,o=Fg,s=qg,u=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=ny(e,1,!0,t,n??null,a,l,u,i,o,s,ry),t.context=ay(null),n=t.current,a=qt(),a=Td(a),l=ba(a),l.callback=null,ya(n,l,a),n=a,t.current.lanes=n,zo(t,n),$n(t),e[hi]=t.current,fm(e),new qr(t)};wr.version="19.3.0";function uy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uy)}catch(e){console.error(e)}}uy(),nv.exports=wr;var cy=nv.exports;const N2={info:oe.info,success:oe.success,warning:oe.warning,error:oe.error};function T2({manager:e}){const t=$e(e.subscribe,e.getState);return m.jsx("div",{className:"xui-message","aria-live":"polite",children:t.items.map(n=>m.jsxs("div",{className:me("xui-message__item",`xui-message__item--${n.type}`),children:[m.jsx("svg",{className:"xui-message__icon",viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:n.icon??N2[n.type]}}),m.jsx("span",{className:"xui-message__content",children:n.content}),n.closable&&m.jsx("button",{type:"button",className:"xui-message__close","aria-label":"close",onClick:()=>e.close(n.id),children:m.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe.close}})})]},n.id))})}let is=null,Of=!1;function dy(){if(is===null&&(is=Ch()),!Of&&typeof document<"u"){const e=document.createElement("div");document.body.appendChild(e),cy.createRoot(e).render(m.jsx(T2,{manager:is})),Of=!0}return is}function Ui(e){return dy().open(e)}const Dn={info:(e,t)=>Ui({...t,type:"info",content:e}),success:(e,t)=>Ui({...t,type:"success",content:e}),warning:(e,t)=>Ui({...t,type:"warning",content:e}),error:(e,t)=>Ui({...t,type:"error",content:e}),open:Ui,closeAll:()=>dy().closeAll()};function Mn(e){const{content:t,placement:n="top",trigger:a="hover",disabled:l=!1,className:i,style:o,children:s,renderContent:u,ref:d}=e,p=R.useId(),c=R.useRef(null);c.current===null&&(c.current=jh({disabled:l}));const f=c.current;R.useEffect(()=>{f.updateOptions({disabled:l})},[f,l]);const g=$e(f.subscribe,f.getState);R.useImperativeHandle(d,()=>({show:()=>f.show(),hide:()=>f.hide()}),[f]);const C=R.useRef(null),S=R.useRef(null),[_,v]=R.useState({placement:n,shift:0});R.useLayoutEffect(()=>{if(!g.open)return;v({placement:n,shift:0});const A=()=>{const D=C.current,J=S.current;if(!D||!J)return;const de=J.getBoundingClientRect();de.width===0&&de.height===0||v(mi(D.getBoundingClientRect(),de,pi(),{placement:n,gap:8}))},B=requestAnimationFrame(A),M=di(A);return()=>{cancelAnimationFrame(B),M()}},[g.open,n]);const h=()=>{a==="hover"&&f.show()},y=()=>{a==="hover"&&f.hide()},k=()=>{a==="focus"&&f.show()},E=()=>{a==="focus"&&f.hide()},$=_.placement==="top"||_.placement==="bottom"?{marginLeft:`${_.shift}px`}:{marginTop:`${_.shift}px`};return m.jsx("span",{className:me("xui-tooltip",i),style:o,onMouseEnter:h,onMouseLeave:y,onFocus:k,onBlur:E,children:m.jsxs("span",{className:"xui-tooltip__trigger",ref:C,"aria-describedby":g.open?p:void 0,children:[s,g.open&&m.jsxs("span",{ref:S,id:p,className:me("xui-tooltip__popper",`is-${_.placement}`),style:$,role:"tooltip",children:[u?u():t,m.jsx("span",{className:"xui-tooltip__arrow","aria-hidden":"true"})]})]})})}const z2=e=>typeof e=="number";function sd(e){const{value:t,defaultValue:n,total:a,pageSize:l=10,disabled:i=!1,className:o,style:s,onChange:u,renderPrevIcon:d,renderNextIcon:p}=e,c=Oa(),f=R.useRef({onChange:u});f.current={onChange:u};const g=R.useRef(null);g.current===null&&(g.current=wh({value:t,defaultValue:n,total:a,pageSize:l,disabled:i,onChange:v=>{var h,y;return(y=(h=f.current).onChange)==null?void 0:y.call(h,v)}}));const C=g.current;R.useEffect(()=>{C.updateOptions({value:t,total:a,pageSize:l,disabled:i})},[C,t,a,l,i]);const S=$e(C.subscribe,C.getState),_=Nh(S.page,S.pageCount);return m.jsxs("nav",{className:me("xui-pagination",o,{"is-disabled":S.disabled}),style:s,role:"navigation","aria-label":c.pagination.nav,children:[m.jsx("button",{type:"button",className:"xui-pagination__nav",disabled:S.disabled||S.page<=1,"aria-label":c.pagination.prev,onClick:()=>C.prev(),children:d?d():m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe["arrow-left"]}})}),_.map((v,h)=>z2(v)?m.jsx("button",{type:"button",className:me("xui-pagination__page",{"is-active":v===S.page}),"aria-current":v===S.page?"page":void 0,disabled:S.disabled,onClick:()=>C.goTo(v),children:v},`${v}-${h}`):m.jsx("span",{className:"xui-pagination__ellipsis","aria-hidden":"true",children:"···"},`${v}-${h}`)),m.jsx("button",{type:"button",className:"xui-pagination__nav",disabled:S.disabled||S.page>=S.pageCount,"aria-label":c.pagination.next,onClick:()=>C.next(),children:p?p():m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe["arrow-right"]}})})]})}function pr(e){const{value:t,defaultValue:n,placeholder:a,disabled:l=!1,clearable:i=!1,className:o,style:s,onChange:u,onClear:d,renderClearIcon:p,renderCalendarIcon:c,renderPrevIcon:f,renderNextIcon:g,ref:C}=e,S=Oa(),_=R.useRef(null),v=R.useRef(null),h=R.useId(),y=R.useId(),k=R.useRef({onChange:u,onClear:d});k.current={onChange:u,onClear:d};const E=R.useRef(null);E.current===null&&(E.current=ah({value:t,defaultValue:n,disabled:l,onChange:D=>{var J,de;return(de=(J=k.current).onChange)==null?void 0:de.call(J,D)},onClear:()=>{var D,J;return(J=(D=k.current).onClear)==null?void 0:J.call(D)}}));const $=E.current;R.useEffect(()=>{$.updateOptions({value:t,disabled:l})},[$,t,l]);const A=$e($.subscribe,$.getState);R.useImperativeHandle(C,()=>({focus:()=>{var D;return(D=v.current)==null?void 0:D.focus()},toggleOpen:()=>$.toggleOpen(),close:()=>$.close()}),[$]),R.useEffect(()=>{const D=J=>{_.current&&!_.current.contains(J.target)&&$.close()};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[$]);const B=nh(A.viewYear,A.viewMonth),M=D=>{switch(D.key){case"Enter":case" ":D.preventDefault(),$.toggleOpen();break;case"Escape":A.open&&(D.preventDefault(),$.close());break}};return m.jsxs("div",{ref:_,className:me("xui-date-picker",o,{"is-disabled":A.disabled,"is-open":A.open}),style:s,children:[m.jsxs("div",{ref:v,id:h,className:"xui-date-picker__trigger",role:"combobox","aria-expanded":A.open,"aria-haspopup":"dialog","aria-controls":A.open?y:void 0,"aria-disabled":A.disabled||void 0,tabIndex:A.disabled?-1:0,onClick:()=>$.toggleOpen(),onKeyDown:M,children:[A.value?m.jsx("span",{className:"xui-date-picker__value",children:A.value}):m.jsx("span",{className:"xui-date-picker__placeholder",children:a??S.datePicker.placeholder}),i&&A.value&&!A.disabled?m.jsx("span",{className:"xui-date-picker__clear",role:"button","aria-label":"clear",onClick:D=>{D.stopPropagation(),$.clear()},children:p?p():m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe.clear}})}):m.jsx("span",{className:"xui-date-picker__icon","aria-hidden":"true",children:c?c():m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe.calendar}})})]}),A.open&&m.jsxs("div",{id:y,className:"xui-date-picker__panel",role:"dialog","aria-label":S.datePicker.panel,children:[m.jsxs("div",{className:"xui-date-picker__header",children:[m.jsx("button",{type:"button",className:"xui-date-picker__nav","aria-label":S.datePicker.prevMonth,onClick:()=>$.prevMonth(),children:f?f():m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe["arrow-left"]}})}),m.jsx("span",{className:"xui-date-picker__title",children:S.datePicker.titleFormat(A.viewYear,A.viewMonth)}),m.jsx("button",{type:"button",className:"xui-date-picker__nav","aria-label":S.datePicker.nextMonth,onClick:()=>$.nextMonth(),children:g?g():m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe["arrow-right"]}})})]}),m.jsx("div",{className:"xui-date-picker__weekdays","aria-hidden":"true",children:S.datePicker.weekdays.map(D=>m.jsx("span",{className:"xui-date-picker__weekday",children:D},D))}),m.jsx("div",{className:"xui-date-picker__grid",children:B.map(D=>m.jsx("button",{type:"button",className:me("xui-date-picker__day",{"is-outside":!D.inMonth,"is-today":D.isToday,"is-selected":D.date===A.value}),"aria-label":D.date,onClick:()=>$.select(D.date),children:D.day},D.date))})]})]})}const Zf=e=>{const t={};return e.width!==void 0&&(t.width=typeof e.width=="number"?`${e.width}px`:e.width),e.align!==void 0&&(t.textAlign=e.align),Object.keys(t).length>0?t:void 0},U2=(e,t,n)=>{if(t===e.key)return n==="asc"?"ascending":"descending"};function ri(e){const{columns:t,dataSource:n,rowKey:a,stripe:l=!1,border:i=!1,virtual:o=!1,height:s,rowHeight:u=40,rowSelection:d,className:p,style:c,onSortChange:f,onRowClick:g,renderEmpty:C,renderSortIcon:S}=e,_=Oa(),v=R.useRef({onSortChange:f});v.current={onSortChange:f};const h=R.useRef(null);h.current===null&&(h.current=Zh({dataSource:n,rowKey:a,rowSelection:d,onSortChange:j=>{var q,le;return(le=(q=v.current).onSortChange)==null?void 0:le.call(q,j)}}));const y=h.current;R.useEffect(()=>{y.updateOptions({dataSource:n,rowKey:a,rowSelection:d})},[y,n,a,d]);const k=$e(y.subscribe,y.getState),E=R.useRef(null);E.current===null&&(E.current=_r({itemCount:0,itemHeight:u}));const $=E.current,A=$e($.subscribe,$.getState),B=R.useRef(null);R.useEffect(()=>{if(!o)return;const j=B.current;if(!j||($.updateOptions({viewportHeight:j.clientHeight}),typeof ResizeObserver>"u"))return;const q=new ResizeObserver(()=>{$.updateOptions({viewportHeight:j.clientHeight})});return q.observe(j),()=>{q.disconnect()}},[$,o]),R.useEffect(()=>{o&&$.updateOptions({itemCount:k.sortedData.length,itemHeight:u})},[$,o,k.sortedData.length,u]);const M=j=>{o&&$.scrollTo(j.currentTarget.scrollTop)},D=k.sortedData,J=o&&A.startIndex<=A.endIndex,de=J?D.slice(A.startIndex,A.endIndex+1):D,ae=j=>o?A.startIndex+j:j,se=d!==void 0,ut=(t??[]).length+(se?1:0),G={...c,...o?{...s!==void 0?{height:typeof s=="number"?`${s}px`:s}:{},"--xui-table-row-height":`${u}px`}:{}},te=D.length===0,W=(j,q,le)=>j.render?j.render(q,le):Oh(q[j.key]);return m.jsx("div",{ref:B,className:me("xui-table",p,{"is-striped":l,"is-bordered":i,"is-virtual":o}),style:Object.keys(G).length>0?G:void 0,onScroll:M,children:m.jsxs("table",{className:"xui-table__table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[se&&m.jsx("th",{className:"xui-table__th",style:{width:"42px"},children:m.jsx("input",{ref:j=>{j&&(j.indeterminate=k.indeterminate)},type:"checkbox",className:"xui-table__check",checked:k.allSelected,"aria-label":_.table.selectAll,onChange:()=>y.toggleAll()})}),(t??[]).map(j=>m.jsx("th",{className:"xui-table__th",style:Zf(j),"aria-sort":U2(j,k.sortKey,k.sortOrder),scope:"col",children:j.sortable?m.jsxs("button",{type:"button",className:"xui-table__sort",onClick:()=>y.toggleSort(j.key),children:[j.title,m.jsx("span",{className:"xui-table__sort-icons","aria-hidden":"true",children:S?m.jsxs(m.Fragment,{children:[S({order:"asc"}),S({order:"desc"})]}):m.jsxs(m.Fragment,{children:[m.jsx("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:me({"is-active":k.sortKey===j.key&&k.sortOrder==="asc"}),dangerouslySetInnerHTML:{__html:oe["arrow-up"]}}),m.jsx("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:me({"is-active":k.sortKey===j.key&&k.sortOrder==="desc"}),dangerouslySetInnerHTML:{__html:oe["arrow-down"]}})]})})]}):m.jsx("span",{children:j.title})},j.key))]})}),m.jsxs("tbody",{children:[J&&A.offsetY>0&&m.jsx("tr",{className:"xui-table__spacer","aria-hidden":"true",children:m.jsx("td",{style:{height:`${A.offsetY}px`},colSpan:ut})}),de.map((j,q)=>{var ct;const le=ae(q),ue=la(j,le,a),We=k.selectedRowKeys.includes(ue),Fe=((ct=d==null?void 0:d.getCheckboxDisabled)==null?void 0:ct.call(d,j,le))??!1;return m.jsxs("tr",{className:me({"is-even":le%2===1,"is-selected":se&&We,"is-clickable":g!==void 0}),onClick:()=>g==null?void 0:g(j,le),children:[se&&m.jsx("td",{className:"xui-table__td",onClick:X=>X.stopPropagation(),children:m.jsx("input",{type:"checkbox",className:"xui-table__check",checked:We,disabled:Fe,"aria-label":_.table.selectRow(le),onChange:()=>y.toggleRow(ue)})}),(t??[]).map(X=>m.jsx("td",{className:"xui-table__td",style:Zf(X),children:W(X,j,le)},X.key))]},ue)}),J&&A.fillerHeight>0&&m.jsx("tr",{className:"xui-table__spacer","aria-hidden":"true",children:m.jsx("td",{style:{height:`${A.fillerHeight}px`},colSpan:ut})}),te&&m.jsx("tr",{children:m.jsx("td",{className:"xui-table__empty",colSpan:ut,children:C?C():_.table.empty})})]})]})})}function Mi(e){const{size:t="md",spinning:n=!0,tip:a,className:l,style:i,children:o}=e,s=R.useRef(null);s.current===null&&(s.current=Rh({size:t,spinning:n,tip:a}));const u=s.current;R.useEffect(()=>{u.updateOptions({size:t,spinning:n,tip:a})},[u,t,n,a]);const d=$e(u.subscribe,u.getState);return o!==void 0?m.jsxs("div",{className:me("xui-spin","xui-spin--wrapper",l),style:i,children:[m.jsx("div",{className:me("xui-spin__content",{"is-blur":d.spinning}),children:o}),d.spinning&&m.jsxs("div",{className:"xui-spin__mask",role:"status","aria-live":"polite",children:[m.jsx("span",{className:me("xui-spin__indicator",`is-${d.size}`),"aria-hidden":"true"}),d.tip&&m.jsx("span",{className:"xui-spin__tip",children:d.tip})]})]}):d.spinning?m.jsxs("span",{className:me("xui-spin",l),style:i,role:"status","aria-live":"polite",children:[m.jsx("span",{className:me("xui-spin__indicator",`is-${d.size}`),"aria-hidden":"true"}),d.tip&&m.jsx("span",{className:"xui-spin__tip",children:d.tip})]}):null}function rd(e){const{items:t,separator:n="/",className:a,style:l,onItemClick:i,children:o}=e,s=Oa(),u=R.useRef({onItemClick:i});u.current={onItemClick:i};const d=R.useRef(null);d.current===null&&(d.current=hh({items:t,separator:n,onItemClick:(g,C)=>{var S,_;return(_=(S=u.current).onItemClick)==null?void 0:_.call(S,g,C)}}));const p=d.current;R.useEffect(()=>{p.updateOptions({items:t,separator:n})},[p,t,n]);const c=$e(p.subscribe,p.getState);if(o!==void 0)return m.jsx("nav",{className:me("xui-breadcrumb",a),style:l,"aria-label":s.breadcrumb.nav,children:o});const f=c.items.length-1;return m.jsx("nav",{className:me("xui-breadcrumb",a),style:l,"aria-label":s.breadcrumb.nav,children:m.jsx("ol",{className:"xui-breadcrumb__list",children:c.items.map((g,C)=>m.jsxs("li",{className:me("xui-breadcrumb__item",{"is-active":C===f,"is-disabled":g.disabled}),children:[g.href&&C!==f&&!g.disabled?m.jsx("a",{className:"xui-breadcrumb__link",href:g.href,onClick:()=>p.selectItem(C),children:g.label}):m.jsx("span",{className:"xui-breadcrumb__label","aria-current":C===f?"page":void 0,onClick:()=>p.selectItem(C),children:g.label}),C!==f&&m.jsx("span",{className:"xui-breadcrumb__separator","aria-hidden":"true",children:c.separator})]},`${g.label}-${C}`))})})}function ud(e){const{loading:t=!0,avatar:n=!1,rows:a=3,className:l,style:i,children:o}=e,s=Oa(),u=R.useRef(null);u.current===null&&(u.current=Ah({loading:t,avatar:n,rows:a}));const d=u.current;R.useEffect(()=>{d.updateOptions({loading:t,avatar:n,rows:a})},[d,t,n,a]);const p=$e(d.subscribe,d.getState);return p.loading?m.jsxs("div",{className:me("xui-skeleton",l),style:i,role:"status","aria-label":s.skeleton.loading,children:[p.avatar&&m.jsx("span",{className:"xui-skeleton__avatar","aria-hidden":"true"}),m.jsx("div",{className:"xui-skeleton__rows","aria-hidden":"true",children:Array.from({length:p.rows},(c,f)=>m.jsx("span",{className:f===p.rows-1?"xui-skeleton__row is-last":"xui-skeleton__row"},f))})]}):o!==void 0?m.jsx(m.Fragment,{children:o}):null}function os(e,t){return e===null?"":t!==null?e.toFixed(t):String(e)}function cd(e){const{value:t,defaultValue:n,min:a,max:l,step:i=1,precision:o,disabled:s=!1,placeholder:u,className:d,style:p,onChange:c,renderUpIcon:f,renderDownIcon:g,ref:C}=e,S=R.useRef({onChange:c});S.current={onChange:c};const _=R.useRef(null),v=R.useRef(null);v.current===null&&(v.current=_h({value:t,defaultValue:n,min:a,max:l,step:i,precision:o,disabled:s,onChange:B=>{var M,D;return(D=(M=S.current).onChange)==null?void 0:D.call(M,B)}}));const h=v.current;R.useEffect(()=>{h.updateOptions({value:t,min:a,max:l,step:i,precision:o,disabled:s})},[h,t,a,l,i,o,s]);const y=$e(h.subscribe,h.getState);R.useImperativeHandle(C,()=>({focus:()=>{var B;return(B=_.current)==null?void 0:B.focus()},blur:()=>{var B;return(B=_.current)==null?void 0:B.blur()},stepValue:B=>h.stepValue(B)}),[h]);const[k,E]=R.useState(()=>os(y.value,y.precision));R.useEffect(()=>{t!==void 0&&E(os(y.value,y.precision))},[t,y.value,y.precision]);const $=()=>{h.commitText(k);const B=h.getState();E(os(B.value,B.precision))},A=B=>{h.stepValue(B);const M=h.getState();E(os(M.value,M.precision))};return m.jsxs("div",{className:me("xui-input-number",d,{"is-disabled":y.disabled}),style:p,children:[m.jsx("input",{ref:_,className:"xui-input-number__input",type:"text",inputMode:"decimal",role:"spinbutton","aria-valuenow":y.value??void 0,"aria-valuemin":Number.isFinite(y.min)?y.min:void 0,"aria-valuemax":Number.isFinite(y.max)?y.max:void 0,placeholder:u,disabled:y.disabled,value:k,onChange:B=>E(B.target.value),onBlur:$,onKeyDown:B=>{B.key==="Enter"?(B.preventDefault(),$()):B.key==="ArrowUp"?(B.preventDefault(),A(1)):B.key==="ArrowDown"&&(B.preventDefault(),A(-1))}}),m.jsxs("div",{className:"xui-input-number__step","aria-hidden":"true",children:[m.jsx("button",{className:"xui-input-number__btn",type:"button",tabIndex:-1,disabled:y.disabled,onClick:()=>A(1),children:f?f():m.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe["arrow-up"]}})}),m.jsx("button",{className:"xui-input-number__btn",type:"button",tabIndex:-1,disabled:y.disabled,onClick:()=>A(-1),children:g?g():m.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe["arrow-down"]}})})]})]})}function sl(e){const{content:t,confirmText:n,cancelText:a,placement:l="top",disabled:i=!1,className:o,style:s,onConfirm:u,onCancel:d,children:p,renderContent:c,ref:f}=e,g=Oa(),C=R.useRef({onConfirm:u,onCancel:d});C.current={onConfirm:u,onCancel:d};const S=R.useRef(null);S.current===null&&(S.current=Th({placement:l,disabled:i,onConfirm:()=>{var B,M;return(M=(B=C.current).onConfirm)==null?void 0:M.call(B)},onCancel:()=>{var B,M;return(M=(B=C.current).onCancel)==null?void 0:M.call(B)}}));const _=S.current;R.useEffect(()=>{_.updateOptions({placement:l,disabled:i})},[_,l,i]);const v=$e(_.subscribe,_.getState);R.useImperativeHandle(f,()=>({show:()=>{v.open||_.toggle()},hide:()=>_.close(),toggle:()=>_.toggle()}),[_,v.open]);const h=R.useRef(null),y=R.useRef(null),k=R.useRef(null),E=R.useId(),[$,A]=R.useState({placement:l,shift:0});return R.useLayoutEffect(()=>{if(!v.open)return;A({placement:v.placement,shift:0});const B=()=>{const J=y.current,de=k.current;if(!J||!de)return;const ae=de.getBoundingClientRect();ae.width===0&&ae.height===0||A(mi(J.getBoundingClientRect(),ae,pi(),{placement:v.placement,gap:8}))},M=requestAnimationFrame(B),D=di(B);return()=>{cancelAnimationFrame(M),D()}},[v.open,v.placement]),R.useEffect(()=>{const B=M=>{const D=h.current;D&&!D.contains(M.target)&&_.close()};return document.addEventListener("mousedown",B),()=>{document.removeEventListener("mousedown",B)}},[_]),m.jsx("span",{ref:h,className:me("xui-popconfirm",o),style:s,children:m.jsxs("span",{ref:y,className:"xui-popconfirm__trigger","aria-describedby":v.open?E:void 0,onClick:()=>_.toggle(),children:[p,v.open&&m.jsxs("span",{ref:k,id:E,className:`xui-popconfirm__popper is-${$.placement}`,style:$.placement==="top"||$.placement==="bottom"?{marginLeft:`${$.shift}px`}:{marginTop:`${$.shift}px`},role:"tooltip",onClick:B=>B.stopPropagation(),children:[m.jsx("span",{className:"xui-popconfirm__content",children:c?c():t}),m.jsxs("div",{className:"xui-popconfirm__actions",children:[m.jsx("button",{className:"xui-button xui-button--sm",type:"button",onClick:()=>_.cancel(),children:a??g.popconfirm.cancel}),m.jsx("button",{className:"xui-button xui-button--primary xui-button--sm",type:"button",onClick:()=>_.confirm(),children:n??g.popconfirm.confirm})]}),m.jsx("span",{className:"xui-popconfirm__arrow","aria-hidden":"true"})]})]})})}function P(e){const{type:t="default",size:n="md",disabled:a=!1,loading:l=!1,block:i=!1,className:o,style:s,onClick:u,children:d,renderIcon:p,renderLoadingIcon:c,ref:f}=e,g=R.useRef(null),C=R.useRef(null);C.current===null&&(C.current=vh({disabled:a,loading:l,onClick:h=>u==null?void 0:u(h)}));const S=C.current;R.useEffect(()=>{S.updateOptions({disabled:a,loading:l,onClick:h=>u==null?void 0:u(h)})},[S,a,l,u]);const _=$e(S.subscribe,S.getState);R.useImperativeHandle(f,()=>({focus:()=>{var h;return(h=g.current)==null?void 0:h.focus()},setLoading:h=>S.updateOptions({loading:h})}),[S]);const v=h=>{S.handleClick(h.nativeEvent)};return m.jsxs("button",{ref:g,type:"button",className:me("xui-button",`xui-button--${t}`,`xui-button--${n}`,{"is-disabled":_.disabled,"is-loading":_.loading,"is-block":i},o),style:s,disabled:_.disabled||_.loading,onClick:v,children:[_.loading&&m.jsx("span",{className:"xui-button__loading-icon","aria-hidden":"true",children:c?c():m.jsx($2,{})}),!_.loading&&p&&m.jsx("span",{className:"xui-button__icon","aria-hidden":"true",children:p()}),m.jsx("span",{className:"xui-button__content",children:d})]})}function $2(){return m.jsx("svg",{className:"xui-button__spinner",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeLinecap:"round",dangerouslySetInnerHTML:{__html:oe.loading}})}function st(e){const{type:t="text",value:n,defaultValue:a,placeholder:l,disabled:i=!1,readonly:o=!1,maxLength:s,clearable:u=!1,className:d,style:p,onInput:c,onChange:f,onFocus:g,onBlur:C,onClear:S,renderPrefix:_,renderSuffix:v,renderClearIcon:h,ref:y}=e,k=R.useRef(null),E=R.useRef(null);E.current===null&&(E.current=xh({value:n,defaultValue:a,disabled:i,readonly:o,onInput:se=>c==null?void 0:c(se),onChange:se=>f==null?void 0:f(se),onFocus:se=>g==null?void 0:g(se),onBlur:se=>C==null?void 0:C(se),onClear:()=>S==null?void 0:S()}));const $=E.current;R.useEffect(()=>{$.updateOptions({value:n,disabled:i,readonly:o,onInput:se=>c==null?void 0:c(se),onChange:se=>f==null?void 0:f(se),onFocus:se=>g==null?void 0:g(se),onBlur:se=>C==null?void 0:C(se),onClear:()=>S==null?void 0:S()})},[$,n,i,o,c,f,g,C,S]);const A=$e($.subscribe,$.getState);R.useImperativeHandle(y,()=>({focus:()=>{var se;return(se=k.current)==null?void 0:se.focus()},blur:()=>{var se;return(se=k.current)==null?void 0:se.blur()},clear:()=>$.handleClear()}),[$]);const B=se=>{$.handleInput(se.currentTarget.value)},M=se=>{$.handleChange(se.currentTarget.value)},D=se=>{$.handleFocus(se.nativeEvent)},J=se=>{$.handleBlur(se.nativeEvent)},de=()=>{$.handleClear()},ae=u&&!!A.value&&!A.disabled&&!A.readonly;return m.jsxs("div",{className:me("xui-input",{"is-focused":A.focused,"is-disabled":A.disabled,"is-readonly":A.readonly},d),style:p,children:[_&&m.jsx("span",{className:"xui-input__prefix",children:_()}),m.jsx("input",{ref:k,className:"xui-input__inner",type:t,value:A.value,placeholder:l,disabled:A.disabled,readOnly:A.readonly,maxLength:s,onInput:B,onChange:M,onFocus:D,onBlur:J}),ae&&m.jsx("button",{type:"button",className:"xui-input__clear",tabIndex:0,onClick:de,"aria-label":"clear",children:h?h():m.jsx(E2,{})}),v&&m.jsx("span",{className:"xui-input__suffix",children:v()})]})}function E2(){return m.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",dangerouslySetInnerHTML:{__html:oe.clear}})}function Do(e){const{visible:t,defaultVisible:n,title:a,width:l=520,closable:i=!0,maskClosable:o=!0,closeOnEsc:s=!0,okText:u,cancelText:d,trapFocus:p=!0,className:c,style:f,onOpen:g,onClose:C,onOk:S,onCancel:_,children:v,renderTitle:h,renderFooter:y,renderCloseIcon:k,ref:E}=e,$=Oa(),A=R.useRef({onOpen:g,onClose:C,onOk:S,onCancel:_});A.current={onOpen:g,onClose:C,onOk:S,onCancel:_};const B=R.useRef(null);B.current===null&&(B.current=kh({visible:t,defaultVisible:n,closable:i,maskClosable:o,closeOnEsc:s,onOpen:()=>{var j,q;return(q=(j=A.current).onOpen)==null?void 0:q.call(j)},onClose:()=>{var j,q;return(q=(j=A.current).onClose)==null?void 0:q.call(j)},onOk:()=>{var j,q;return(q=(j=A.current).onOk)==null?void 0:q.call(j)},onCancel:()=>{var j,q;return(q=(j=A.current).onCancel)==null?void 0:q.call(j)}}));const M=B.current;R.useEffect(()=>{M.updateOptions({visible:t,closable:i,maskClosable:o,closeOnEsc:s})},[M,t,i,o,s]);const D=$e(M.subscribe,M.getState);R.useImperativeHandle(E,()=>({open:()=>M.open(),close:()=>M.close(),toggle:()=>M.toggle()}),[M]),R.useEffect(()=>{if(!D.visible||!s)return;const j=q=>{q.key==="Escape"&&M.handleEsc()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[D.visible,s,M]);const J=R.useRef(null),de=R.useRef(null);R.useEffect(()=>{var j,q;if(!D.visible){(j=de.current)==null||j.focus(),de.current=null;return}de.current=document.activeElement instanceof HTMLElement?document.activeElement:null,(q=J.current)==null||q.focus()},[D.visible]);const ae=j=>{if(j.key==="Escape"){j.preventDefault(),M.handleEsc();return}p&&eh(j.nativeEvent,j.currentTarget)},se=()=>{M.handleMaskClick()},ut=()=>{M.handleOk()},G=()=>{M.handleCancel()},te=()=>{M.close()},W={};return l!==void 0&&(W.width=typeof l=="number"?`${l}px`:l),D.visible?rv.createPortal(m.jsxs("div",{className:"xui-modal",children:[m.jsx("div",{className:"xui-modal__overlay",onClick:se}),m.jsxs("div",{ref:J,className:me("xui-modal__panel",c),style:{...W,...f},role:"dialog","aria-modal":"true",tabIndex:-1,onKeyDown:ae,children:[m.jsxs("div",{className:"xui-modal__header",children:[m.jsx("span",{className:"xui-modal__title",children:h?h():a??null}),D.closable&&m.jsx("button",{type:"button",className:"xui-modal__close",onClick:te,"aria-label":"close",children:k?k():m.jsx(A2,{})})]}),m.jsx("div",{className:"xui-modal__body",children:v}),y?m.jsx("div",{className:"xui-modal__footer",children:y()}):m.jsxs("div",{className:"xui-modal__footer",children:[m.jsx("button",{type:"button",className:me("xui-button","xui-button--md"),onClick:G,children:d??$.modal.cancel}),m.jsx("button",{type:"button",className:me("xui-button","xui-button--primary","xui-button--md"),onClick:ut,children:u??$.modal.ok})]})]})]}),document.body):null}function A2(){return m.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:oe.close}})}const my=R.createContext(void 0);function R2(){return R.useContext(my)}function Gr(e){const{initialValues:t,rules:n,disabled:a=!1,readonly:l=!1,labelWidth:i,labelPosition:o="right",validateTrigger:s,className:u,style:d,onSubmit:p,onSubmitFail:c,onValuesChange:f,children:g,ref:C}=e,S=R.useRef(null);S.current===null&&(S.current=Sh({initialValues:t,rules:n,disabled:a,readonly:l,onSubmit:k=>p==null?void 0:p(k),onSubmitFail:k=>c==null?void 0:c(k),onValuesChange:(k,E)=>f==null?void 0:f(k,E)}));const _=S.current;R.useEffect(()=>{_.updateOptions({disabled:a,readonly:l,rules:n,onSubmit:k=>p==null?void 0:p(k),onSubmitFail:k=>c==null?void 0:c(k),onValuesChange:(k,E)=>f==null?void 0:f(k,E)})},[_,a,l,n,p,c,f]);const v=$e(_.subscribe,_.getState);R.useImperativeHandle(C,()=>({validate:k=>_.validate(k),validateField:(k,E)=>_.validateField(k,E),getFieldValue:k=>_.getFieldValue(k),getFieldsValue:()=>_.getFieldsValue(),setFieldValue:(k,E)=>_.setFieldValue(k,E),setFieldsValue:k=>_.setFieldsValue(k),resetFields:k=>_.resetFields(k),clearValidate:k=>_.clearValidate(k),submit:()=>_.submit()}),[_]);const h=k=>{k.preventDefault(),_.submit()},y={logic:_,disabled:v.disabled,readonly:v.readonly,labelWidth:i,labelPosition:o};return m.jsx(my.Provider,{value:y,children:m.jsx("form",{className:me("xui-form",u),style:d,onSubmit:h,children:g})})}function Ut(e){const{name:t,label:n,rules:a,required:l=!1,validateFirst:i=!1,hidden:o=!1,extra:s,labelAlign:u="right",className:d,style:p,children:c,ref:f}=e,g=R2(),C=g==null?void 0:g.logic;R.useEffect(()=>(t&&C&&C.registerField(t,a??[]),()=>{t&&C&&C.unregisterField(t)}),[t,C,a]);const S=$e(g?g.logic.subscribe:()=>()=>{},g?g.logic.getState:()=>({values:{},errors:{},validating:!1,submitting:!1,disabled:!1,readonly:!1})),_=t?S.values[t]:void 0,v=t?S.errors[t]??[]:[],h=S.validating,y=l||yh(a),k=(g==null?void 0:g.disabled)??!1,E=(g==null?void 0:g.readonly)??!1,$=M=>{!t||!g||(g.logic.setFieldValue(t,M),g.logic.validateField(t,"change"))},A=()=>{!t||!g||g.logic.validateField(t,"blur")},B=(()=>{if(!c)return null;const M=R.Children.only(c);if(!M)return null;const D=M.props;return R.cloneElement(M,{value:_,disabled:k||void 0,readonly:E||void 0,onUpdateValue:J=>{$(J),typeof D.onUpdateValue=="function"&&D.onUpdateValue(J)},onChange:J=>{$(J),typeof D.onChange=="function"&&D.onChange(J)},onBlur:J=>{A(),typeof D.onBlur=="function"&&D.onBlur(J)}})})();return R.useImperativeHandle(f,()=>({validate:M=>!t||!g?Promise.resolve([]):g.logic.validateField(t,M),clearValidation:()=>{!t||!g||g.logic.clearValidate([t])},resetField:()=>{!t||!g||g.logic.resetFields([t])}}),[t,g]),o?null:m.jsxs("div",{className:me("xui-form-item",`xui-form-item--label-${(g==null?void 0:g.labelPosition)??"right"}`,{"is-error":v.length>0,"is-required":y,"is-validating":h},d),style:p,children:[n!==void 0&&m.jsx("label",{className:me("xui-form-item__label",`xui-form-item__label--${u}`),style:(()=>{const M=g==null?void 0:g.labelWidth;if(M!==void 0)return{width:typeof M=="number"?`${M}px`:M,flexShrink:0}})(),children:n}),m.jsxs("div",{className:"xui-form-item__content",children:[B,s&&m.jsx("div",{className:"xui-form-item__extra",children:s}),v.length>0&&m.jsxs("div",{className:"xui-form-item__error",children:[v[0],v.length>1&&m.jsxs("span",{className:"xui-form-item__error-count",children:["(+",v.length-1,")"]})]})]})]})}function B2(){return m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{children:"Default"}),m.jsx(P,{type:"primary",children:"Primary"}),m.jsx(P,{type:"danger",children:"Danger"}),m.jsx(P,{type:"link",children:"Link"})]})}const O2=()=>R.useSyncExternalStore(Uw,Im,Im),ne=()=>O2()==="zh-CN";function Z2(){const e=ne();return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{size:"sm",children:"Small"}),m.jsx(P,{size:"md",children:"Medium"}),m.jsx(P,{size:"lg",children:"Large"})]}),m.jsx(P,{block:!0,children:e?"Block（宽度撑满容器）":"Block (full width)"})]})}function D2(){const e=ne(),[t,n]=R.useState(!1),a=()=>{n(!0),setTimeout(()=>n(!1),1500)};return m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{disabled:!0,children:"Disabled"}),m.jsx(P,{loading:!0,children:"Loading"}),m.jsx(P,{type:"primary",loading:t,onClick:a,children:t?e?"提交中...":"Submitting...":e?"点击模拟提交":"Click to submit"})]})}const M2=`<script setup lang="ts">
import { Button } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-row">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
  </div>
</template>
`,j2=`<script setup lang="ts">
import { Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
    <Button block>{{ isZh() ? 'Block（宽度撑满容器）' : 'Block (full width)' }}</Button>
  </div>
</template>
`,V2=`<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const loading = ref(false);
const submit = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1500);
};
<\/script>

<template>
  <div class="demo-row">
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
    <Button type="primary" :loading="loading" @click="submit">
      {{
        loading
          ? isZh()
            ? '提交中...'
            : 'Submitting...'
          : isZh()
            ? '点击模拟提交'
            : 'Click to submit'
      }}
    </Button>
  </div>
</template>
`,L2=`import { Button } from '@xui-design/react';

export default function ButtonTypeDemo() {
  return (
    <div className="demo-row">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
    </div>
  );
}
`,H2=`import { Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function ButtonSizeDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-column">
      <div className="demo-row">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <Button block>{isZh ? 'Block（宽度撑满容器）' : 'Block (full width)'}</Button>
    </div>
  );
}
`,I2=`import { useState } from 'react';
import { Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function ButtonStateDemo() {
  const isZh = useIsZh();
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="demo-row">
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button type="primary" loading={loading} onClick={submit}>
        {loading
          ? isZh
            ? '提交中...'
            : 'Submitting...'
          : isZh
            ? '点击模拟提交'
            : 'Click to submit'}
      </Button>
    </div>
  );
}
`,F2={name:"Button",slug:"button",title:"按钮",category:"basic",summary:{"zh-CN":"基础按钮组件，支持多种语义类型、尺寸、加载与禁用状态。","en-US":"A basic button component with multiple semantic types, sizes, loading and disabled states."},features:[{"zh-CN":"四种语义类型：default / primary / danger / link","en-US":"Four semantic types: default / primary / danger / link"},{"zh-CN":"三种尺寸：sm / md（默认）/ lg","en-US":"Three sizes: sm / md (default) / lg"},{"zh-CN":"disabled 禁用、loading 加载态（加载中点击被忽略）","en-US":"Disabled state and loading state (clicks are ignored while loading)"},{"zh-CN":"block 块级按钮（宽度撑满容器）","en-US":"Block-level button that stretches to the container width"},{"zh-CN":"前置图标与加载图标均可通过插槽 / 回调自定义","en-US":"Leading icon and loading icon are customizable via slot / render callback"}],scenarios:[{"zh-CN":"表单提交、操作触发、导航跳转等一切需要点击交互的场景。","en-US":"Any click-driven interaction such as form submission, action triggering, or navigation."}],demos:[{id:"type",title:{"zh-CN":"按钮类型","en-US":"Button Types"},description:{"zh-CN":"通过 type 指定语义类型，默认 default。","en-US":"Use type to set the semantic type; defaults to default."},vueComponent:Vw,reactComponent:B2,vueSource:M2,reactSource:L2},{id:"size",title:{"zh-CN":"尺寸与块级","en-US":"Sizes & Block"},description:{"zh-CN":"sm / md / lg 三档尺寸；block 使按钮宽度撑满父容器。","en-US":"Three sizes: sm / md / lg. The block prop stretches the button to its parent width."},vueComponent:Iw,reactComponent:Z2,vueSource:j2,reactSource:H2},{id:"state",title:{"zh-CN":"禁用与加载","en-US":"Disabled & Loading"},description:{"zh-CN":"disabled 完全禁用交互；loading 时显示加载图标且点击被忽略，适合异步提交场景。","en-US":"disabled turns off all interaction; loading shows a spinner and ignores clicks, ideal for async submissions."},vueComponent:qw,reactComponent:D2,vueSource:V2,reactSource:I2}],api:{props:[{name:"type",type:"'default' | 'primary' | 'danger' | 'link'",default:"'default'",description:{"zh-CN":"按钮语义类型","en-US":"Semantic type of the button"}},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:{"zh-CN":"按钮尺寸","en-US":"Button size"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"loading",type:"boolean",default:"false",description:{"zh-CN":"加载状态（显示加载图标，点击被忽略）","en-US":"Loading state (shows a spinner; clicks are ignored)"}},{name:"block",type:"boolean",default:"false",description:{"zh-CN":"块级按钮（宽度撑满容器）","en-US":"Block button (stretches to container width)"}},{name:"onClick",type:"(event: MouseEvent) => void",default:"—",description:{"zh-CN":"点击回调（由适配层桥接为框架事件）","en-US":"Click callback (bridged to framework events by the adapter)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"click",react:"onClick",payload:"MouseEvent",description:{"zh-CN":"点击按钮时触发（disabled / loading 状态下不触发）","en-US":"Fired on click (not fired while disabled or loading)"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"按钮内容","en-US":"Button content"}},{vue:"icon",react:"renderIcon",description:{"zh-CN":"前置图标（loading 时隐藏）","en-US":"Leading icon (hidden while loading)"}},{vue:"loadingIcon",react:"renderLoadingIcon",description:{"zh-CN":"加载态图标（默认为旋转 Spinner）","en-US":"Loading icon (defaults to a spinning spinner)"}}]},notes:[{"zh-CN":"loading 状态下点击事件被忽略，避免异步提交期间重复触发。","en-US":"Clicks are ignored while loading to prevent duplicate triggers during async submission."},{"zh-CN":'type="link" 仅表现为链接样式，语义仍是 button 元素；需要原生导航请自行包裹 <a>。',"en-US":'type="link" only looks like a link; the element is still a button. Wrap an <a> yourself when native navigation is needed.'}],a11y:[{"zh-CN":"渲染为原生 <button>，disabled / loading 时携带 disabled 属性，键盘与读屏行为与原生按钮一致。","en-US":"Renders as a native <button> with the disabled attribute applied when disabled or loading, matching native keyboard and screen-reader behavior."}]},q2={class:"demo-row"},G2={class:"demo-text"},Y2=Z({__name:"basic",setup(e){const t=H(!1);return(n,a)=>(b(),x("div",q2,[N(r(Et),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l)},null,8,["value"]),w("span",G2,U(r(T)()?"当前值：":"Current: ")+U(t.value?r(T)()?"开启":"On":r(T)()?"关闭":"Off"),1)]))}}),K2={class:"demo-row"},P2=Z({__name:"state",setup(e){return(t,n)=>(b(),x("div",K2,[N(r(Et),{"default-value":"",size:"sm"}),N(r(Et),{"default-value":""}),N(r(Et),{disabled:""}),N(r(Et),{loading:""})]))}});function X2(){const e=ne(),[t,n]=R.useState(!1);return m.jsxs("div",{className:"demo-row",children:[m.jsx(At,{value:t,onChange:n}),m.jsxs("span",{className:"demo-text",children:[e?"当前值：":"Current: ",t?e?"开启":"On":e?"关闭":"Off"]})]})}function Q2(){return m.jsxs("div",{className:"demo-row",children:[m.jsx(At,{defaultValue:!0,size:"sm"}),m.jsx(At,{defaultValue:!0}),m.jsx(At,{disabled:!0}),m.jsx(At,{loading:!0})]})}const J2={class:"demo-column"},W2={class:"demo-row"},eU={class:"demo-row"},tU=Z({__name:"text",setup(e){const t=H(!0);return(n,a)=>(b(),x("div",J2,[w("div",W2,[N(r(Et),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),"checked-text":r(T)()?"开启":"On","unchecked-text":r(T)()?"关闭":"Off"},null,8,["value","checked-text","unchecked-text"]),N(r(Et),{"default-value":"","checked-text":"ON","unchecked-text":"OFF"}),N(r(Et),{size:"sm","default-value":"","checked-text":r(T)()?"是":"Yes","unchecked-text":r(T)()?"否":"No"},null,8,["checked-text","unchecked-text"])]),w("div",eU,[N(r(Et),{"default-value":"","checked-text":r(T)()?"启用超长文本展示":"Enabled long text","unchecked-text":r(T)()?"禁用超长文本展示":"Disabled long text"},null,8,["checked-text","unchecked-text"])])]))}});function nU(){const e=ne(),[t,n]=R.useState(!0);return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{className:"demo-row",children:[m.jsx(At,{value:t,onChange:n,checkedText:e?"开启":"On",uncheckedText:e?"关闭":"Off"}),m.jsx(At,{defaultValue:!0,checkedText:"ON",uncheckedText:"OFF"}),m.jsx(At,{size:"sm",defaultValue:!0,checkedText:e?"是":"Yes",uncheckedText:e?"否":"No"})]}),m.jsx("div",{className:"demo-row",children:m.jsx(At,{defaultValue:!0,checkedText:e?"启用超长文本展示":"Enabled long text",uncheckedText:e?"禁用超长文本展示":"Disabled long text"})})]})}const aU=`<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const enabled = ref(false);
<\/script>

<template>
  <div class="demo-row">
    <Switch v-model:value="enabled" />
    <span class="demo-text"
      >{{ isZh() ? '当前值：' : 'Current: '
      }}{{ enabled ? (isZh() ? '开启' : 'On') : isZh() ? '关闭' : 'Off' }}</span
    >
  </div>
</template>
`,lU=`<script setup lang="ts">
import { Switch } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-row">
    <Switch default-value size="sm" />
    <Switch default-value />
    <Switch disabled />
    <Switch loading />
  </div>
</template>
`,iU=`import { useState } from 'react';
import { Switch } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function SwitchBasicDemo() {
  const isZh = useIsZh();
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="demo-row">
      <Switch value={enabled} onChange={setEnabled} />
      <span className="demo-text">
        {isZh ? '当前值：' : 'Current: '}
        {enabled ? (isZh ? '开启' : 'On') : isZh ? '关闭' : 'Off'}
      </span>
    </div>
  );
}
`,oU=`<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref(true);
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Switch
        v-model:value="value"
        :checked-text="isZh() ? '开启' : 'On'"
        :unchecked-text="isZh() ? '关闭' : 'Off'"
      />
      <Switch default-value checked-text="ON" unchecked-text="OFF" />
      <Switch
        size="sm"
        default-value
        :checked-text="isZh() ? '是' : 'Yes'"
        :unchecked-text="isZh() ? '否' : 'No'"
      />
    </div>
    <div class="demo-row">
      <Switch
        default-value
        :checked-text="isZh() ? '启用超长文本展示' : 'Enabled long text'"
        :unchecked-text="isZh() ? '禁用超长文本展示' : 'Disabled long text'"
      />
    </div>
  </div>
</template>
`,sU=`import { useState } from 'react';
import { Switch } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function SwitchTextDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState(true);

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Switch
          value={value}
          onChange={setValue}
          checkedText={isZh ? '开启' : 'On'}
          uncheckedText={isZh ? '关闭' : 'Off'}
        />
        <Switch defaultValue checkedText="ON" uncheckedText="OFF" />
        <Switch
          size="sm"
          defaultValue
          checkedText={isZh ? '是' : 'Yes'}
          uncheckedText={isZh ? '否' : 'No'}
        />
      </div>
      <div className="demo-row">
        <Switch
          defaultValue
          checkedText={isZh ? '启用超长文本展示' : 'Enabled long text'}
          uncheckedText={isZh ? '禁用超长文本展示' : 'Disabled long text'}
        />
      </div>
    </div>
  );
}
`,rU=`import { Switch } from '@xui-design/react';

export default function SwitchStateDemo() {
  return (
    <div className="demo-row">
      <Switch defaultValue size="sm" />
      <Switch defaultValue />
      <Switch disabled />
      <Switch loading />
    </div>
  );
}
`,uU={name:"Switch",slug:"switch",title:"开关",category:"form",summary:{"zh-CN":"布尔值开关选择器，支持受控 / 非受控双模式与加载态。","en-US":"A boolean toggle switch with controlled / uncontrolled modes and a loading state."},features:[{"zh-CN":"受控 / 非受控双模式（提供 value 即受控），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes (controlled when value is provided); v-model:value on Vue"},{"zh-CN":"sm / md 两种尺寸","en-US":"Two sizes: sm / md"},{"zh-CN":"disabled 禁用、loading 加载态（加载中切换被忽略，滑块显示 Spinner）","en-US":"Disabled state and loading state (toggles are ignored while loading; the thumb shows a spinner)"},{"zh-CN":"checkedText / uncheckedText 双态文本：显示在轨道内滑块对侧，超长自动截断（title 提示）","en-US":"Dual-state text via checkedText / uncheckedText: shown inside the track on the opposite side of the thumb, auto-truncated when too long (with a title tooltip)"},{"zh-CN":"通过 ref 暴露 focus() 命令式聚焦","en-US":"Imperative focus() exposed via ref"}],scenarios:[{"zh-CN":"通知开关、功能启停、协议同意等布尔设置的即时切换场景。","en-US":"Instant toggling of boolean settings such as notification switches, feature flags, and agreement consent."}],demos:[{id:"basic",title:{"zh-CN":"受控用法","en-US":"Controlled Usage"},description:{"zh-CN":"绑定 value 并监听 change 同步外部状态，Vue 端推荐 v-model:value。","en-US":"Bind value and listen to change to sync external state; v-model:value is recommended on Vue."},vueComponent:Y2,reactComponent:X2,vueSource:aU,reactSource:iU},{id:"state",title:{"zh-CN":"尺寸与状态","en-US":"Sizes & States"},description:{"zh-CN":"小尺寸、非受控默认开启、禁用与加载态。","en-US":"Small size, uncontrolled default-on, disabled, and loading states."},vueComponent:P2,reactComponent:Q2,vueSource:lU,reactSource:rU},{id:"text",title:{"zh-CN":"双态文本","en-US":"Dual-State Text"},description:{"zh-CN":"checkedText / uncheckedText 显示在轨道内；不传保持纯开关模式。","en-US":"checkedText / uncheckedText are shown inside the track; omit them for a plain switch."},vueComponent:tU,reactComponent:nU,vueSource:oU,reactSource:sU}],api:{props:[{name:"value",type:"boolean",default:"—",description:{"zh-CN":"受控选中状态（提供即受控）","en-US":"Controlled checked state (controlled when provided)"}},{name:"defaultValue",type:"boolean",default:"false",description:{"zh-CN":"非受控初始状态","en-US":"Uncontrolled initial state"}},{name:"size",type:"'sm' | 'md'",default:"'md'",description:{"zh-CN":"尺寸","en-US":"Switch size"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用","en-US":"Disabled state"}},{name:"loading",type:"boolean",default:"false",description:{"zh-CN":"加载中（切换被忽略）","en-US":"Loading state (toggles are ignored)"}},{name:"checkedText",type:"string",default:"—",description:{"zh-CN":"开启态文本（轨道内滑块左侧；空串视为未提供；超长截断 + title）","en-US":"On-state text (left of the thumb inside the track; an empty string is treated as not provided; truncated with a title tooltip when too long)"}},{name:"uncheckedText",type:"string",default:"—",description:{"zh-CN":"关闭态文本（轨道内滑块右侧；空串视为未提供；超长截断 + title）","en-US":"Off-state text (right of the thumb inside the track; an empty string is treated as not provided; truncated with a title tooltip when too long)"}},{name:"onChange",type:"(value: boolean) => void",default:"—",description:{"zh-CN":"状态变更回调","en-US":"State change callback"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"boolean",description:{"zh-CN":"切换后的选中值","en-US":"Fired with the checked value after toggle"}},{vue:"update:value",react:"—",payload:"boolean",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"loadingIcon",react:"renderLoadingIcon",description:{"zh-CN":"自定义加载图标（替换内置 Spinner）","en-US":"Custom loading icon (replaces the built-in spinner)"}}]},notes:[{"zh-CN":"受控模式下组件不自改状态，仅通过 change / update:value 回调通知外部同步。","en-US":"In controlled mode the component never changes its own state; it only notifies the external side via change / update:value."},{"zh-CN":'loading 为 true 时点击切换被忽略，但不禁用样式，适合"切换中等待异步结果"场景。',"en-US":'When loading is true, click toggles are ignored but the disabled styling is not applied — ideal for "waiting for an async result after toggling" scenarios.'},{"zh-CN":'双态文本对读屏隐藏（状态由 role="switch" + aria-checked 传达），两文本常驻 DOM 并以 CSS Grid 重叠，轨道宽度自适应较宽文本，切换时无宽度抖动。',"en-US":'Dual-state text is hidden from screen readers (state is conveyed via role="switch" + aria-checked); both texts stay in the DOM overlapped with CSS Grid, the track width adapts to the wider text, and no width jitter occurs on toggle.'}],a11y:[{"zh-CN":'渲染为 role="switch" 的按钮，携带 aria-checked；禁用时携带 disabled，支持空格 / 回车切换。',"en-US":'Renders as a button with role="switch" and aria-checked; carries disabled when disabled, and toggles with Space / Enter.'}]},cU=Z({__name:"basic",setup(e){const t=F(()=>[{key:"name",title:T()?"姓名":"Name"},{key:"age",title:T()?"年龄":"Age",sortable:!0,width:100,align:"center"},{key:"city",title:T()?"城市":"City"}]),n=F(()=>T()?[{id:1,name:"张三",age:30,city:"Beijing"},{id:2,name:"李四",age:25,city:"Shanghai"},{id:3,name:"王五",age:28,city:"Guangzhou"},{id:4,name:"赵六",age:32,city:"Shenzhen"}]:[{id:1,name:"John",age:30,city:"Beijing"},{id:2,name:"Jane",age:25,city:"Shanghai"},{id:3,name:"Mike",age:28,city:"Guangzhou"},{id:4,name:"Lily",age:32,city:"Shenzhen"}]),a=l=>{console.log("sort-change:",l.key,l.order)};return(l,i)=>(b(),Q(r(Kl),{columns:t.value,"data-source":n.value,"row-key":"id",stripe:"",border:"",onSortChange:a},null,8,["columns","data-source"]))}}),dU={class:"demo-column"},mU=Z({__name:"custom",setup(e){const t=F(()=>[{key:"name",title:T()?"姓名":"Name"},{key:"action",title:T()?"操作":"Action",render:a=>T()?`查看 ${String(a.name)}`:`View ${String(a.name)}`}]),n=F(()=>T()?[{id:1,name:"张三"},{id:2,name:"李四"}]:[{id:1,name:"John"},{id:2,name:"Jane"}]);return(a,l)=>(b(),x("div",dU,[N(r(Kl),{columns:t.value,"data-source":n.value,"row-key":"id",border:""},null,8,["columns","data-source"]),N(r(Kl),{columns:t.value,"data-source":[]},{empty:z(()=>[w("span",null,U(r(T)()?"自定义空态：没有更多数据啦":"Custom empty: no more data"),1)]),_:1},8,["columns"])]))}}),pU={class:"demo-column"},fU={class:"demo-text"},hU=Z({__name:"virtual",setup(e){const t=F(()=>Array.from({length:1e3},(i,o)=>({id:o+1,name:T()?`用户${o+1}`:`User ${o+1}`,age:20+o%40,city:T()?`城市${o%20+1}`:`City ${o%20+1}`}))),n=F(()=>[{key:"name",title:T()?"姓名":"Name"},{key:"age",title:T()?"年龄":"Age",width:100,align:"center"},{key:"city",title:T()?"城市":"City"}]),a=H([]),l=i=>{a.value=i};return(i,o)=>(b(),x("div",pU,[N(r(Kl),{columns:n.value,"data-source":t.value,"row-key":"id",virtual:"",height:320,"row-height":40,stripe:"","row-selection":{onChange:l}},null,8,["columns","data-source","row-selection"]),w("p",fU,U(r(T)()?`虚拟滚动 · 1000 行仅渲染可视窗口；当前选中 ${a.value.length} 行（滚动时勾选状态保持）。`:`Virtual scroll · only the visible window of 1000 rows is rendered; ${a.value.length} row(s) selected (selection preserved on scroll).`),1)]))}});function vU(){const e=ne(),t=[{key:"name",title:e?"姓名":"Name"},{key:"age",title:e?"年龄":"Age",sortable:!0,width:100,align:"center"},{key:"city",title:e?"城市":"City"}],n=e?[{id:1,name:"张三",age:30,city:"Beijing"},{id:2,name:"李四",age:25,city:"Shanghai"},{id:3,name:"王五",age:28,city:"Guangzhou"},{id:4,name:"赵六",age:32,city:"Shenzhen"}]:[{id:1,name:"John",age:30,city:"Beijing"},{id:2,name:"Jane",age:25,city:"Shanghai"},{id:3,name:"Mike",age:28,city:"Guangzhou"},{id:4,name:"Lily",age:32,city:"Shenzhen"}];return m.jsx(ri,{columns:t,dataSource:n,rowKey:"id",stripe:!0,border:!0,onSortChange:a=>console.log("sort-change:",a.key,a.order)})}function gU(){const e=ne(),t=[{key:"name",title:e?"姓名":"Name"},{key:"action",title:e?"操作":"Action",render:a=>e?`查看 ${String(a.name)}`:`View ${String(a.name)}`}],n=e?[{id:1,name:"张三"},{id:2,name:"李四"}]:[{id:1,name:"John"},{id:2,name:"Jane"}];return m.jsxs("div",{className:"demo-column",children:[m.jsx(ri,{columns:t,dataSource:n,rowKey:"id",border:!0}),m.jsx(ri,{columns:t,dataSource:[],renderEmpty:()=>m.jsx("span",{children:e?"自定义空态：没有更多数据啦":"Custom empty: no more data"})})]})}function bU(){const e=ne(),[t,n]=R.useState([]),a=Array.from({length:1e3},(i,o)=>({id:o+1,name:e?`用户${o+1}`:`User ${o+1}`,age:20+o%40,city:e?`城市${o%20+1}`:`City ${o%20+1}`})),l=[{key:"name",title:e?"姓名":"Name"},{key:"age",title:e?"年龄":"Age",width:100,align:"center"},{key:"city",title:e?"城市":"City"}];return m.jsxs("div",{className:"demo-column",children:[m.jsx(ri,{columns:l,dataSource:a,rowKey:"id",virtual:!0,height:320,rowHeight:40,stripe:!0,rowSelection:{onChange:i=>n([...i])}}),m.jsx("p",{className:"demo-text",children:e?`虚拟滚动 · 1000 行仅渲染可视窗口；当前选中 ${t.length} 行（滚动时勾选状态保持）。`:`Virtual scroll · only the visible window of 1000 rows is rendered; ${t.length} row(s) selected (selection preserved on scroll).`})]})}const yU=`<script setup lang="ts">
import { Table } from '@xui-design/vue';
import type { TableColumn, TableSort } from '@xui-design/core';
import { computed } from 'vue';
import { isZh } from '../../../i18n';

const columns = computed<TableColumn[]>(() => [
  { key: 'name', title: isZh() ? '姓名' : 'Name' },
  { key: 'age', title: isZh() ? '年龄' : 'Age', sortable: true, width: 100, align: 'center' },
  { key: 'city', title: isZh() ? '城市' : 'City' },
]);

const dataSource = computed(() =>
  isZh()
    ? [
        { id: 1, name: '张三', age: 30, city: 'Beijing' },
        { id: 2, name: '李四', age: 25, city: 'Shanghai' },
        { id: 3, name: '王五', age: 28, city: 'Guangzhou' },
        { id: 4, name: '赵六', age: 32, city: 'Shenzhen' },
      ]
    : [
        { id: 1, name: 'John', age: 30, city: 'Beijing' },
        { id: 2, name: 'Jane', age: 25, city: 'Shanghai' },
        { id: 3, name: 'Mike', age: 28, city: 'Guangzhou' },
        { id: 4, name: 'Lily', age: 32, city: 'Shenzhen' },
      ],
);

const onSortChange = (sort: TableSort) => {
  console.log('sort-change:', sort.key, sort.order);
};
<\/script>

<template>
  <Table
    :columns="columns"
    :data-source="dataSource"
    row-key="id"
    stripe
    border
    @sort-change="onSortChange"
  />
</template>
`,SU=`<script setup lang="ts">
import { computed } from 'vue';
import { Table } from '@xui-design/vue';
import type { TableColumn } from '@xui-design/core';
import { isZh } from '../../../i18n';

const columns = computed<TableColumn[]>(() => [
  { key: 'name', title: isZh() ? '姓名' : 'Name' },
  {
    key: 'action',
    title: isZh() ? '操作' : 'Action',
    render: (record: Record<string, unknown>) =>
      isZh() ? \`查看 \${String(record.name)}\` : \`View \${String(record.name)}\`,
  },
]);

const dataSource = computed(() =>
  isZh()
    ? [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
      ]
    : [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ],
);
<\/script>

<template>
  <div class="demo-column">
    <Table :columns="columns" :data-source="dataSource" row-key="id" border />
    <Table :columns="columns" :data-source="[]">
      <template #empty>
        <span>{{ isZh() ? '自定义空态：没有更多数据啦' : 'Custom empty: no more data' }}</span>
      </template>
    </Table>
  </div>
</template>
`,xU=`<script setup lang="ts">
import { ref, computed } from 'vue';
import { Table } from '@xui-design/vue';
import type { TableColumn, TableRowKey } from '@xui-design/core';
import { isZh } from '../../../i18n';

type UserRow = {
  id: number;
  name: string;
  age: number;
  city: string;
};

const bigRows = computed<UserRow[]>(() =>
  Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: isZh() ? \`用户\${i + 1}\` : \`User \${i + 1}\`,
    age: 20 + (i % 40),
    city: isZh() ? \`城市\${(i % 20) + 1}\` : \`City \${(i % 20) + 1}\`,
  })),
);

const columns = computed<TableColumn[]>(() => [
  { key: 'name', title: isZh() ? '姓名' : 'Name' },
  { key: 'age', title: isZh() ? '年龄' : 'Age', width: 100, align: 'center' },
  { key: 'city', title: isZh() ? '城市' : 'City' },
]);

const selectedRowKeys = ref<TableRowKey[]>([]);

const handleSelectionChange = (keys: TableRowKey[]) => {
  selectedRowKeys.value = keys;
};
<\/script>

<template>
  <div class="demo-column">
    <Table
      :columns="columns"
      :data-source="bigRows"
      row-key="id"
      virtual
      :height="320"
      :row-height="40"
      stripe
      :row-selection="{ onChange: handleSelectionChange }"
    />
    <p class="demo-text">
      {{
        isZh()
          ? \`虚拟滚动 · 1000 行仅渲染可视窗口；当前选中 \${selectedRowKeys.length} 行（滚动时勾选状态保持）。\`
          : \`Virtual scroll · only the visible window of 1000 rows is rendered; \${selectedRowKeys.length} row(s) selected (selection preserved on scroll).\`
      }}
    </p>
  </div>
</template>
`,_U=`import { Table } from '@xui-design/react';
import type { TableColumn } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TableBasicDemo() {
  const isZh = useIsZh();
  const columns: TableColumn[] = [
    { key: 'name', title: isZh ? '姓名' : 'Name' },
    { key: 'age', title: isZh ? '年龄' : 'Age', sortable: true, width: 100, align: 'center' },
    { key: 'city', title: isZh ? '城市' : 'City' },
  ];

  const dataSource = isZh
    ? [
        { id: 1, name: '张三', age: 30, city: 'Beijing' },
        { id: 2, name: '李四', age: 25, city: 'Shanghai' },
        { id: 3, name: '王五', age: 28, city: 'Guangzhou' },
        { id: 4, name: '赵六', age: 32, city: 'Shenzhen' },
      ]
    : [
        { id: 1, name: 'John', age: 30, city: 'Beijing' },
        { id: 2, name: 'Jane', age: 25, city: 'Shanghai' },
        { id: 3, name: 'Mike', age: 28, city: 'Guangzhou' },
        { id: 4, name: 'Lily', age: 32, city: 'Shenzhen' },
      ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey="id"
      stripe
      border
      onSortChange={(sort) => console.log('sort-change:', sort.key, sort.order)}
    />
  );
}
`,CU=`import { Table } from '@xui-design/react';
import type { TableColumn } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TableCustomDemo() {
  const isZh = useIsZh();
  const columns: TableColumn[] = [
    { key: 'name', title: isZh ? '姓名' : 'Name' },
    {
      key: 'action',
      title: isZh ? '操作' : 'Action',
      render: (record: Record<string, unknown>) =>
        isZh ? \`查看 \${String(record.name)}\` : \`View \${String(record.name)}\`,
    },
  ];

  const dataSource = isZh
    ? [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
      ]
    : [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ];

  return (
    <div className="demo-column">
      <Table columns={columns} dataSource={dataSource} rowKey="id" border />
      <Table
        columns={columns}
        dataSource={[]}
        renderEmpty={() => (
          <span>{isZh ? '自定义空态：没有更多数据啦' : 'Custom empty: no more data'}</span>
        )}
      />
    </div>
  );
}
`,kU=`import { useState } from 'react';
import { Table } from '@xui-design/react';
import type { TableColumn, TableRowKey } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

type UserRow = {
  id: number;
  name: string;
  age: number;
  city: string;
};

export default function TableVirtualDemo() {
  const isZh = useIsZh();
  const [selectedRowKeys, setSelectedRowKeys] = useState<TableRowKey[]>([]);

  const bigRows: UserRow[] = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: isZh ? \`用户\${i + 1}\` : \`User \${i + 1}\`,
    age: 20 + (i % 40),
    city: isZh ? \`城市\${(i % 20) + 1}\` : \`City \${(i % 20) + 1}\`,
  }));

  const columns: TableColumn[] = [
    { key: 'name', title: isZh ? '姓名' : 'Name' },
    { key: 'age', title: isZh ? '年龄' : 'Age', width: 100, align: 'center' },
    { key: 'city', title: isZh ? '城市' : 'City' },
  ];

  return (
    <div className="demo-column">
      <Table
        columns={columns}
        dataSource={bigRows}
        rowKey="id"
        virtual
        height={320}
        rowHeight={40}
        stripe
        rowSelection={{ onChange: (keys) => setSelectedRowKeys([...keys]) }}
      />
      <p className="demo-text">
        {isZh
          ? \`虚拟滚动 · 1000 行仅渲染可视窗口；当前选中 \${selectedRowKeys.length} 行（滚动时勾选状态保持）。\`
          : \`Virtual scroll · only the visible window of 1000 rows is rendered; \${selectedRowKeys.length} row(s) selected (selection preserved on scroll).\`}
      </p>
    </div>
  );
}
`,wU={name:"Table",slug:"table",title:"表格",category:"display",summary:{"zh-CN":"结构化数据表格，支持列定义、非受控排序、行选择、虚拟滚动、自定义单元格与空态。","en-US":"A structured data table with column definitions, uncontrolled sorting, row selection, virtual scrolling, custom cells, and an empty state."},features:[{"zh-CN":"columns 列定义 + dataSource 数据驱动，rowKey 指定行唯一键","en-US":"Driven by columns definitions and dataSource, with rowKey as the unique row key"},{"zh-CN":"列级排序：点击表头循环 升序 → 降序 → 取消（非受控内部排序）","en-US":"Column sorting: clicking the header cycles ascending → descending → cleared (uncontrolled internal sorting)"},{"zh-CN":"columns[].render(record, index) 自定义单元格内容（返回字符串）","en-US":"columns[].render(record, index) customizes cell content (returns a string)"},{"zh-CN":"rowSelection 行选择：全选 / 半选联动、受控 selectedRowKeys、getCheckboxDisabled 禁用行","en-US":"rowSelection row selection: linked select-all / indeterminate states, controlled selectedRowKeys, and getCheckboxDisabled for disabled rows"},{"zh-CN":"virtual 虚拟滚动：1000+ 行仅渲染可视窗口，height / rowHeight 控制视口与行高","en-US":"virtual scrolling: 1000+ rows render only the visible window; height / rowHeight control the viewport and row height"},{"zh-CN":"onRowClick 行点击事件；className / style 自定义透传（支持 CSS 变量）","en-US":"onRowClick row-click event; className / style pass-through customization (CSS variables supported)"},{"zh-CN":"stripe 斑马纹 / border 边框模式；空数据态支持插槽 / 回调覆盖","en-US":"stripe zebra striping / border mode; the empty state can be overridden via slot / render callback"}],scenarios:[{"zh-CN":"列表页、详情面板、后台管理等结构化数据的展示场景。","en-US":"Displaying structured data in list pages, detail panels, admin consoles, and more."},{"zh-CN":"大数据量表格浏览场景（配合 virtual 虚拟滚动，仅渲染可视窗口）。","en-US":"Browsing large datasets (with virtual scrolling rendering only the visible window)."},{"zh-CN":"需要勾选批量操作的列表场景（配合 rowSelection 行选择）。","en-US":"Lists that need batch operations on checked rows (with rowSelection)."}],demos:[{id:"basic",title:{"zh-CN":"基础表格","en-US":"Basic Table"},description:{"zh-CN":'列宽、对齐、斑马纹、边框与可排序列；点击"年龄"表头体验排序循环。',"en-US":'Column width, alignment, zebra striping, borders, and sortable columns; click the "Age" header to try the sort cycle.'},vueComponent:cU,reactComponent:vU,vueSource:yU,reactSource:_U},{id:"custom",title:{"zh-CN":"自定义单元格与空态","en-US":"Custom Cells & Empty State"},description:{"zh-CN":"render 返回自定义文本；无数据时通过插槽 / renderEmpty 渲染自定义空态。","en-US":"render returns custom text; when there is no data, use the slot / renderEmpty to render a custom empty state."},vueComponent:mU,reactComponent:gU,vueSource:SU,reactSource:CU},{id:"virtual",title:{"zh-CN":"虚拟滚动与行选择","en-US":"Virtual Scrolling & Row Selection"},description:{"zh-CN":"1000 行数据仅渲染可视窗口，滚动流畅；配合 rowSelection 勾选行，滚动时勾选状态保持。","en-US":"Only the visible window of 1000 rows is rendered for smooth scrolling; with rowSelection, checked state is preserved while scrolling."},vueComponent:hU,reactComponent:bU,vueSource:xU,reactSource:kU}],api:{props:[{name:"columns",type:"TableColumn[]",default:"—",description:{"zh-CN":"列定义数组（必填）","en-US":"Column definitions (required)"},required:!0},{name:"dataSource",type:"TableRow[]",default:"—",description:{"zh-CN":"行数据数组（必填）","en-US":"Row data array (required)"},required:!0},{name:"rowKey",type:"string",default:"—",description:{"zh-CN":"行唯一键字段名（缺省用行下标；行选择建议提供）","en-US":"Field name of the unique row key (falls back to row index; recommended for row selection)"}},{name:"stripe",type:"boolean",default:"false",description:{"zh-CN":"斑马纹","en-US":"Zebra striping"}},{name:"border",type:"boolean",default:"false",description:{"zh-CN":"边框模式","en-US":"Border mode"}},{name:"virtual",type:"boolean",default:"false",description:{"zh-CN":"虚拟滚动模式（需提供 rowKey；建议同时设置 height 与 rowHeight）","en-US":"Virtual scrolling mode (requires rowKey; setting height and rowHeight is recommended)"}},{name:"height",type:"number | string",default:"—",description:{"zh-CN":"表格主体固定高度（px）","en-US":"Fixed height of the table body (px)"}},{name:"rowHeight",type:"number",default:"40",description:{"zh-CN":"虚拟模式行高（px，须与实际行高一致）","en-US":"Row height in virtual mode (px; must match the actual row height)"}},{name:"rowSelection",type:"TableRowSelection",default:"—",description:{"zh-CN":"行选择配置：selectedRowKeys（受控）/ onChange / getCheckboxDisabled","en-US":"Row selection config: selectedRowKeys (controlled) / onChange / getCheckboxDisabled"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式（支持 CSS 变量如 --xui-table-row-height）","en-US":"Inline styles appended to the root element (CSS variables such as --xui-table-row-height supported)"}},{name:"onSortChange",type:"(sort: TableSort) => void",default:"—",description:{"zh-CN":"排序变更回调","en-US":"Callback fired when sorting changes"}},{name:"onRowClick",type:"(record: TableRow, index: number) => void",default:"—",description:{"zh-CN":"行点击回调（选择列点击不触发）","en-US":"Row-click callback (clicks on the selection column do not trigger it)"}}],events:[{vue:"sortChange",react:"onSortChange",payload:"TableSort",description:{"zh-CN":"点击表头排序时触发","en-US":"Fired when a header click changes the sorting"}},{vue:"rowClick",react:"onRowClick",payload:"record: TableRow, index: number",description:{"zh-CN":"点击数据行时触发（选择列点击不冒泡）","en-US":"Fired when a data row is clicked (clicks on the selection column do not bubble)"}}],slots:[{vue:"sortIcon",react:"renderSortIcon",description:{"zh-CN":"自定义排序图标（作用域参数 order: 'asc' | 'desc'）","en-US":"Custom sort icon (scoped param order: 'asc' | 'desc')"}},{vue:"empty",react:"renderEmpty",description:{"zh-CN":'空数据内容（覆盖默认语言包 table.empty，zh-CN："暂无数据"）',"en-US":'Empty-data content (overrides the default locale entry table.empty, zh-CN: "暂无数据")'}}],types:[{name:"TableColumn",definition:`type TableColumn = {
  key: string;
  title: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (record: TableRow, index: number) => string;
};`,description:{"zh-CN":"列定义。width 数字按 px、字符串原样；render 返回字符串覆盖默认取值。","en-US":"Column definition. A numeric width is treated as px while strings are used as-is; render returns a string to override the default cell value."}},{name:"TableSort",definition:`type TableSort = {
  key: string;
  order: 'asc' | 'desc' | null;
};`,description:{"zh-CN":"排序事件载荷，order 为 null 表示已取消排序。","en-US":"Sort event payload; order set to null means sorting has been cleared."}},{name:"TableRowSelection",definition:`type TableRowSelection = {
  selectedRowKeys?: TableRowKey[];
  onChange?: (selectedRowKeys: TableRowKey[], selectedRows: TableRow[]) => void;
  getCheckboxDisabled?: (record: TableRow, index: number) => boolean;
};`,description:{"zh-CN":"行选择配置。提供 selectedRowKeys 即受控（内部状态不变，仅回调）；未全选含半选时点击全选选中全部可选行。","en-US":"Row selection config. Providing selectedRowKeys makes it controlled (internal state stays unchanged; callbacks only). When not all rows are selected (including the indeterminate state), clicking select-all selects every selectable row."}},{name:"TableRowKey",definition:"type TableRowKey = string | number;",description:{"zh-CN":"行唯一键（rowKey 字段取值）。","en-US":"Unique row key (value of the rowKey field)."}}]},notes:[{"zh-CN":"非受控排序：排序状态由组件内部维护，外部仅通过 sortChange 感知，不修改传入的原数组。","en-US":"Uncontrolled sorting: sort state is maintained internally; the outside only observes it via sortChange, and the original array passed in is never mutated."},{"zh-CN":"排序比较：同为 number 按数值比较，否则按字符串（码点序）稳定排序。","en-US":"Sort comparison: two numbers compare numerically; otherwise values are stably sorted as strings (by code point)."},{"zh-CN":"render 返回值仅支持字符串；单元格取值为 null / undefined 时显示为空字符串。","en-US":"render only supports returning strings; a cell value of null / undefined renders as an empty string."},{"zh-CN":"虚拟模式采用固定行高 + spacer 占位方案，保持原生 table 语义；行高必须与 rowHeight 一致。","en-US":"Virtual mode uses fixed row height plus a spacer placeholder while keeping native table semantics; the actual row height must match rowHeight."},{"zh-CN":"行选择未提供 selectedRowKeys 时为非受控（内部维护）；禁用行（getCheckboxDisabled）不参与全选。","en-US":"Row selection is uncontrolled (internally maintained) without selectedRowKeys; disabled rows (getCheckboxDisabled) are excluded from select-all."}],a11y:[{"zh-CN":"可排序列表头携带 aria-sort（ascending / descending），未排序时省略。","en-US":"Sortable column headers carry aria-sort (ascending / descending), omitted when unsorted."},{"zh-CN":'表头使用 scope="col" 与数据行关联；全选框同步 indeterminate 半选语义。',"en-US":'Headers use scope="col" to associate with data rows; the select-all checkbox syncs the indeterminate semantics.'}]},NU={class:"demo-row"},TU=Z({__name:"basic",setup(e){return(t,n)=>(b(),x("div",NU,[N(r(K),{onClick:n[0]||(n[0]=a=>r(Bn).info(r(T)()?"这是一条普通提示":"A normal info message."))},{default:z(()=>[...n[4]||(n[4]=[L("Info",-1)])]),_:1}),N(r(K),{type:"primary",onClick:n[1]||(n[1]=a=>r(Bn).success(r(T)()?"保存成功":"Saved successfully"))},{default:z(()=>[...n[5]||(n[5]=[L(" Success ",-1)])]),_:1}),N(r(K),{onClick:n[2]||(n[2]=a=>r(Bn).warning(r(T)()?"磁盘空间不足":"Insufficient disk space"))},{default:z(()=>[...n[6]||(n[6]=[L(" Warning ",-1)])]),_:1}),N(r(K),{onClick:n[3]||(n[3]=a=>r(Bn).error(r(T)()?"保存失败，请重试":"Save failed, please retry"))},{default:z(()=>[...n[7]||(n[7]=[L(" Error ",-1)])]),_:1})]))}}),zU={class:"demo-row"},UU=Z({__name:"options",setup(e){const t=()=>{Bn.open({content:T()?"这条消息不会自动关闭，可手动关闭":"This message will not auto-close, close it manually",duration:0,closable:!0})};return(n,a)=>(b(),x("div",zU,[N(r(K),{type:"primary",onClick:t},{default:z(()=>[L(U(r(T)()?"不自动关闭":"No auto-close"),1)]),_:1}),N(r(K),{onClick:a[0]||(a[0]=l=>r(Bn).closeAll())},{default:z(()=>[L(U(r(T)()?"关闭全部":"Close all"),1)]),_:1})]))}}),$U={class:"demo-column"},EU={class:"demo-row"},AU={class:"demo-text"},RU=Z({__name:"update",setup(e){let t=0;const n=H(!1),a=()=>{t=0,n.value=!1,Bn.open({content:T()?`上传中 ${t}%`:`Uploading ${t}%`,key:"upload",duration:0})},l=()=>{t=Math.min(t+25,100),t<100?Bn.open({content:T()?`上传中 ${t}%`:`Uploading ${t}%`,key:"upload",duration:0}):Bn.open({content:T()?"上传完成":"Upload complete",key:"upload",type:"success",duration:3e3,onClose:()=>{n.value=!0}})};return(i,o)=>(b(),x("div",$U,[w("div",EU,[N(r(K),{type:"primary",onClick:a},{default:z(()=>[L(U(r(T)()?"开始上传":"Start upload"),1)]),_:1}),N(r(K),{onClick:l},{default:z(()=>[L(U(r(T)()?"推进进度":"Advance progress"),1)]),_:1})]),w("p",AU,U(r(T)()?"同 key 反复 open 原地刷新进度（不堆叠消息）；完成后自动关闭并触发 onClose（已触发：":"Repeatedly open with the same key to refresh progress in place (no message stacking); auto-closes when done and triggers onClose (triggered: ")+U(n.value?r(T)()?"是":"yes":r(T)()?"否":"no")+") ",1)]))}});function BU(){const e=ne();return m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{onClick:()=>Dn.info(e?"这是一条普通提示":"A normal info message."),children:"Info"}),m.jsx(P,{type:"primary",onClick:()=>Dn.success(e?"保存成功":"Saved successfully"),children:"Success"}),m.jsx(P,{onClick:()=>Dn.warning(e?"磁盘空间不足":"Insufficient disk space"),children:"Warning"}),m.jsx(P,{onClick:()=>Dn.error(e?"保存失败，请重试":"Save failed, please retry"),children:"Error"})]})}function OU(){const e=ne(),t=()=>{Dn.open({content:e?"这条消息不会自动关闭，可手动关闭":"This message will not auto-close, close it manually",duration:0,closable:!0})};return m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{type:"primary",onClick:t,children:e?"不自动关闭":"No auto-close"}),m.jsx(P,{onClick:()=>Dn.closeAll(),children:e?"关闭全部":"Close all"})]})}function ZU(){const e=ne(),[t,n]=R.useState(!1),a=R.useRef(0),l=()=>{a.current=0,n(!1),Dn.open({content:e?"上传中 0%":"Uploading 0%",key:"upload",duration:0})},i=()=>{a.current=Math.min(a.current+25,100);const o=a.current;o<100?Dn.open({content:e?`上传中 ${o}%`:`Uploading ${o}%`,key:"upload",duration:0}):Dn.open({content:e?"上传完成":"Upload complete",key:"upload",type:"success",duration:3e3,onClose:()=>n(!0)})};return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{type:"primary",onClick:l,children:e?"开始上传":"Start upload"}),m.jsx(P,{onClick:i,children:e?"推进进度":"Advance progress"})]}),m.jsxs("p",{className:"demo-text",children:[e?"同 key 反复 open 原地刷新进度（不堆叠消息）；完成后自动关闭并触发 onClose（已触发：":"Repeatedly open with the same key to refresh progress in place (no message stacking); auto-closes when done and triggers onClose (triggered: ",t?e?"是":"yes":e?"否":"no",")"]})]})}const DU=`<script setup lang="ts">
import { Button, message } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-row">
    <Button @click="message.info(isZh() ? '这是一条普通提示' : 'A normal info message.')"
      >Info</Button
    >
    <Button type="primary" @click="message.success(isZh() ? '保存成功' : 'Saved successfully')">
      Success
    </Button>
    <Button @click="message.warning(isZh() ? '磁盘空间不足' : 'Insufficient disk space')">
      Warning
    </Button>
    <Button @click="message.error(isZh() ? '保存失败，请重试' : 'Save failed, please retry')">
      Error
    </Button>
  </div>
</template>
`,MU=`<script setup lang="ts">
import { Button, message } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const openPersistent = () => {
  message.open({
    content: isZh()
      ? '这条消息不会自动关闭，可手动关闭'
      : 'This message will not auto-close, close it manually',
    duration: 0,
    closable: true,
  });
};
<\/script>

<template>
  <div class="demo-row">
    <Button type="primary" @click="openPersistent">
      {{ isZh() ? '不自动关闭' : 'No auto-close' }}
    </Button>
    <Button @click="message.closeAll()">{{ isZh() ? '关闭全部' : 'Close all' }}</Button>
  </div>
</template>
`,jU=`<script setup lang="ts">
import { ref } from 'vue';
import { Button, message } from '@xui-design/vue';
import { isZh } from '../../../i18n';

let progress = 0;
const closed = ref(false);

const startUpload = () => {
  progress = 0;
  closed.value = false;
  message.open({
    content: isZh() ? \`上传中 \${progress}%\` : \`Uploading \${progress}%\`,
    key: 'upload',
    duration: 0,
  });
};

const stepUpload = () => {
  progress = Math.min(progress + 25, 100);
  if (progress < 100) {
    message.open({
      content: isZh() ? \`上传中 \${progress}%\` : \`Uploading \${progress}%\`,
      key: 'upload',
      duration: 0,
    });
  } else {
    message.open({
      content: isZh() ? '上传完成' : 'Upload complete',
      key: 'upload',
      type: 'success',
      duration: 3000,
      onClose: () => {
        closed.value = true;
      },
    });
  }
};
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button type="primary" @click="startUpload">{{
        isZh() ? '开始上传' : 'Start upload'
      }}</Button>
      <Button @click="stepUpload">{{ isZh() ? '推进进度' : 'Advance progress' }}</Button>
    </div>
    <p class="demo-text">
      {{
        isZh()
          ? '同 key 反复 open 原地刷新进度（不堆叠消息）；完成后自动关闭并触发 onClose（已触发：'
          : 'Repeatedly open with the same key to refresh progress in place (no message stacking); auto-closes when done and triggers onClose (triggered: '
      }}{{ closed ? (isZh() ? '是' : 'yes') : isZh() ? '否' : 'no' }})
    </p>
  </div>
</template>
`,VU=`import { Button, message } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function MessageBasicDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-row">
      <Button onClick={() => message.info(isZh ? '这是一条普通提示' : 'A normal info message.')}>
        Info
      </Button>
      <Button
        type="primary"
        onClick={() => message.success(isZh ? '保存成功' : 'Saved successfully')}
      >
        Success
      </Button>
      <Button onClick={() => message.warning(isZh ? '磁盘空间不足' : 'Insufficient disk space')}>
        Warning
      </Button>
      <Button
        onClick={() => message.error(isZh ? '保存失败，请重试' : 'Save failed, please retry')}
      >
        Error
      </Button>
    </div>
  );
}
`,LU=`import { Button, message } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function MessageOptionsDemo() {
  const isZh = useIsZh();
  const openPersistent = () => {
    message.open({
      content: isZh
        ? '这条消息不会自动关闭，可手动关闭'
        : 'This message will not auto-close, close it manually',
      duration: 0,
      closable: true,
    });
  };

  return (
    <div className="demo-row">
      <Button type="primary" onClick={openPersistent}>
        {isZh ? '不自动关闭' : 'No auto-close'}
      </Button>
      <Button onClick={() => message.closeAll()}>{isZh ? '关闭全部' : 'Close all'}</Button>
    </div>
  );
}
`,HU=`import { useRef, useState } from 'react';
import { Button, message } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function MessageUpdateDemo() {
  const isZh = useIsZh();
  const [closed, setClosed] = useState(false);
  const progressRef = useRef(0);

  const startUpload = () => {
    progressRef.current = 0;
    setClosed(false);
    message.open({
      content: isZh ? \`上传中 0%\` : \`Uploading 0%\`,
      key: 'upload',
      duration: 0,
    });
  };

  const stepUpload = () => {
    progressRef.current = Math.min(progressRef.current + 25, 100);
    const progress = progressRef.current;
    if (progress < 100) {
      message.open({
        content: isZh ? \`上传中 \${progress}%\` : \`Uploading \${progress}%\`,
        key: 'upload',
        duration: 0,
      });
    } else {
      message.open({
        content: isZh ? '上传完成' : 'Upload complete',
        key: 'upload',
        type: 'success',
        duration: 3000,
        onClose: () => setClosed(true),
      });
    }
  };

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Button type="primary" onClick={startUpload}>
          {isZh ? '开始上传' : 'Start upload'}
        </Button>
        <Button onClick={stepUpload}>{isZh ? '推进进度' : 'Advance progress'}</Button>
      </div>
      <p className="demo-text">
        {isZh
          ? '同 key 反复 open 原地刷新进度（不堆叠消息）；完成后自动关闭并触发 onClose（已触发：'
          : 'Repeatedly open with the same key to refresh progress in place (no message stacking); auto-closes when done and triggers onClose (triggered: '}
        {closed ? (isZh ? '是' : 'yes') : isZh ? '否' : 'no'})
      </p>
    </div>
  );
}
`,IU={name:"Message",slug:"message",title:"全局提示",category:"feedback",summary:{"zh-CN":"命令式全局轻提示，双端同构 API，首次调用自动挂载容器，无需预置组件。","en-US":"Imperative global toast with an isomorphic API across frameworks; the container mounts automatically on first call, no host component needed."},features:[{"zh-CN":"命令式 API：info / success / warning / error / open / closeAll，双端同构","en-US":"Imperative API: info / success / warning / error / open / closeAll, isomorphic across frameworks"},{"zh-CN":"4 种语义类型，各配图标与色板，3s 自动关闭（duration 可配，0 为常驻）","en-US":"Four semantic types with matching icons and palettes; auto-closes after 3s (duration configurable, 0 keeps it open)"},{"zh-CN":"closable 手动关闭；open 返回 { close } 句柄，重复关闭幂等","en-US":"closable enables manual close; open returns a { close } handle and repeated closes are idempotent"},{"zh-CN":"maxCount（默认 5）同屏上限，超限自动移除最早一条","en-US":"maxCount (default 5) caps on-screen messages; the oldest is removed when exceeded"},{"zh-CN":"key 更新语义：相同 key 再次 open 原地更新该条（不新增、重置计时），适合进度类反馈","en-US":"key-based updates: calling open again with the same key updates that message in place (no new entry, timer resets), ideal for progress feedback"},{"zh-CN":"onClose 回调：消息被移除（自动 / 手动 / 挤出 / closeAll）时触发","en-US":"onClose fires whenever a message is removed (auto / manual / evicted / closeAll)"},{"zh-CN":"首次调用惰性挂载全局容器（页面顶部居中 fixed），应用中无需声明任何宿主组件","en-US":"The global container mounts lazily on first call (fixed, top-center); no host component needs to be declared"}],scenarios:[{"zh-CN":"保存成功、请求失败、复制完成等不打断操作流程的轻量全局反馈。","en-US":"Lightweight global feedback that does not interrupt the flow, such as save success, request failure, or copy completion."},{"zh-CN":"上传 / 导出等耗时任务的进度反馈（配合 key 更新语义，始终只有一条消息）。","en-US":"Progress feedback for long tasks like upload / export (with key-based updates, always a single message)."}],demos:[{id:"basic",title:{"zh-CN":"四种语义类型","en-US":"Four Semantic Types"},description:{"zh-CN":"直接从框架包导入 message 单例调用，容器首次调用时自动挂载。","en-US":"Import the message singleton from the framework package and call it directly; the container mounts on first call."},vueComponent:TU,reactComponent:BU,vueSource:DU,reactSource:VU},{id:"options",title:{"zh-CN":"常驻与关闭全部","en-US":"Persistent & Close All"},description:{"zh-CN":"duration: 0 时不自动关闭；closeAll 清空当前所有消息及其定时器。","en-US":"duration: 0 disables auto-close; closeAll clears all current messages and their timers."},vueComponent:UU,reactComponent:OU,vueSource:MU,reactSource:LU},{id:"update",title:{"zh-CN":"key 更新与 onClose","en-US":"key Updates & onClose"},description:{"zh-CN":"同 key 反复 open 原地刷新进度；消息关闭时触发 onClose 回调。","en-US":"Repeated open calls with the same key refresh progress in place; onClose fires when the message closes."},vueComponent:RU,reactComponent:ZU,vueSource:jU,reactSource:HU}],api:{methods:[{name:"message.info",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 info 消息","en-US":"Open an info message"}},{name:"message.success",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 success 消息","en-US":"Open a success message"}},{name:"message.warning",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 warning 消息","en-US":"Open a warning message"}},{name:"message.error",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 error 消息","en-US":"Open an error message"}},{name:"message.open",signature:"(options: MessageOptions) => MessageHandle",description:{"zh-CN":"按完整选项打开消息（支持 key / onClose）","en-US":"Open a message with full options (supports key / onClose)"}},{name:"message.closeAll",signature:"() => void",description:{"zh-CN":"关闭全部消息","en-US":"Close all messages"}}],types:[{name:"MessageOptions",definition:`type MessageOptions = {
  type?: 'info' | 'success' | 'warning' | 'error'; // 默认 'info'
  content: string;        // 必填
  duration?: number;      // 默认 3000，0 表示不自动关闭
  closable?: boolean;     // 默认 false
  icon?: string;          // 自定义类型图标（内层 SVG 标记，与 @xui-design/icons 数据源同构）
  key?: string | number;  // 更新键：同 key 再次 open 原地更新该条
  onClose?: () => void;   // 消息移除回调
};`,description:{"zh-CN":"open 的完整参数；快捷方法的第二参仅支持 duration / closable（type 与 content 由方法注入，key / onClose 需走 message.open）。","en-US":"Full options for open; shortcut methods only accept duration / closable as the second argument (type and content are injected by the method; key / onClose require message.open)."}},{name:"MessageHandle",definition:`type MessageHandle = {
  close: () => void;
};`,description:{"zh-CN":"open / 快捷方法返回的句柄，close() 手动关闭且幂等。","en-US":"Handle returned by open / shortcut methods; close() closes manually and is idempotent."}}]},notes:[{"zh-CN":"Message 是命令式 API 而非声明式组件：双端均未导出 Message 组件，也不进 contract-test 声明式校验矩阵。","en-US":"Message is an imperative API, not a declarative component: neither framework exports a Message component, and it is excluded from the declarative contract-test matrix."},{"zh-CN":"Vue 与 React 各自导出独立的 message 单例（@xui-design/vue / @xui-design/react），在对应框架入口直接调用即可。","en-US":"Vue and React each export their own message singleton (@xui-design/vue / @xui-design/react); call it directly from the corresponding framework entry."},{"zh-CN":"maxCount 超限时连带移除最早消息的自动关闭定时器；closeAll 同时清空全部定时器。","en-US":"When maxCount is exceeded, the oldest message is removed along with its auto-close timer; closeAll clears all timers."},{"zh-CN":"key 更新：content 必填刷新，type / closable 未传保留原值；duration 以最新值重置计时，onClose 传入时替换旧回调。","en-US":"key updates: content is required and always refreshed; type / closable keep their previous values when omitted; duration resets the timer with the latest value; onClose replaces the old callback when provided."},{"zh-CN":"onClose 触发时机统一：自动关闭 / 手动关闭 / maxCount 挤出 / closeAll 均触发。","en-US":"onClose fires consistently for auto-close / manual close / maxCount eviction / closeAll."},{"zh-CN":"icon 选项传内层 SVG 标记（不含 <svg> 壳，如 icons.close 的值），渲染时替换按 type 的内置图标。","en-US":"The icon option takes inner SVG markup (without the <svg> wrapper, e.g. the value of icons.close), replacing the built-in type icon at render."}],a11y:[{"zh-CN":'消息容器 aria-live="polite"，新消息出现时读屏播报但不打断当前朗读；关闭按钮携带 aria-label。',"en-US":'The message container uses aria-live="polite" so screen readers announce new messages without interrupting the current reading; the close button carries an aria-label.'}]},FU={class:"demo-column"},qU={class:"demo-text"},GU=Z({__name:"basic",setup(e){const t=H("");return(n,a)=>(b(),x("div",FU,[N(r(it),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),placeholder:r(T)()?"输入点内容...":"Type something...",clearable:""},null,8,["value","placeholder"]),w("p",qU,U(r(T)()?"当前值：":"Current: ")+U(t.value||(r(T)()?"（空）":"(empty)")),1)]))}}),YU={class:"demo-column"},KU=Z({__name:"state",setup(e){return(t,n)=>(b(),x("div",YU,[N(r(it),{value:r(T)()?"禁用态":"Disabled",disabled:""},null,8,["value"]),N(r(it),{value:r(T)()?"只读态":"Read-only",readonly:""},null,8,["value"]),N(r(it),{placeholder:r(T)()?"带前缀内容":"With prefix"},{prefix:z(()=>[...n[0]||(n[0]=[L("🔍",-1)])]),_:1},8,["placeholder"])]))}});function PU(){const e=ne(),[t,n]=R.useState("");return m.jsxs("div",{className:"demo-column",children:[m.jsx(st,{value:t,onInput:n,placeholder:e?"输入点内容...":"Type something...",clearable:!0}),m.jsxs("p",{className:"demo-text",children:[e?"当前值：":"Current: ",t||(e?"（空）":"(empty)")]})]})}function XU(){const e=ne();return m.jsxs("div",{className:"demo-column",children:[m.jsx(st,{value:e?"禁用态":"Disabled",disabled:!0}),m.jsx(st,{value:e?"只读态":"Read-only",readonly:!0}),m.jsx(st,{placeholder:e?"带前缀内容":"With prefix",renderPrefix:()=>m.jsx("span",{children:"🔍"})})]})}const QU=`<script setup lang="ts">
import { ref } from 'vue';
import { Input } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref('');
<\/script>

<template>
  <div class="demo-column">
    <Input
      v-model:value="value"
      :placeholder="isZh() ? '输入点内容...' : 'Type something...'"
      clearable
    />
    <p class="demo-text">
      {{ isZh() ? '当前值：' : 'Current: ' }}{{ value || (isZh() ? '（空）' : '(empty)') }}
    </p>
  </div>
</template>
`,JU=`<script setup lang="ts">
import { Input } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <Input :value="isZh() ? '禁用态' : 'Disabled'" disabled />
    <Input :value="isZh() ? '只读态' : 'Read-only'" readonly />
    <Input :placeholder="isZh() ? '带前缀内容' : 'With prefix'">
      <template #prefix>🔍</template>
    </Input>
  </div>
</template>
`,WU=`import { useState } from 'react';
import { Input } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function InputBasicDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState('');

  return (
    <div className="demo-column">
      <Input
        value={value}
        onInput={setValue}
        placeholder={isZh ? '输入点内容...' : 'Type something...'}
        clearable
      />
      <p className="demo-text">
        {isZh ? '当前值：' : 'Current: '}
        {value || (isZh ? '（空）' : '(empty)')}
      </p>
    </div>
  );
}
`,e$=`import { Input } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function InputStateDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-column">
      <Input value={isZh ? '禁用态' : 'Disabled'} disabled />
      <Input value={isZh ? '只读态' : 'Read-only'} readonly />
      <Input
        placeholder={isZh ? '带前缀内容' : 'With prefix'}
        renderPrefix={() => <span>🔍</span>}
      />
    </div>
  );
}
`,t$={name:"Input",slug:"input",title:"输入框",category:"basic",summary:{"zh-CN":"基础文本输入框，支持受控 / 非受控、清除按钮、前后缀与多种原生类型。","en-US":"A basic text input with controlled / uncontrolled modes, a clear button, prefix / suffix, and multiple native types."},features:[{"zh-CN":"受控 / 非受控双模式（提供 value 即受控），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes (controlled when value is provided); v-model:value on Vue"},{"zh-CN":"支持 text / password / number / email / search / tel / url 原生类型","en-US":"Supports native types: text / password / number / email / search / tel / url"},{"zh-CN":"disabled 禁用、readonly 只读、maxLength 最大长度","en-US":"Disabled state, read-only state, and maxLength limit"},{"zh-CN":"clearable 显示清除按钮；prefix / suffix 前后缀内容可定制","en-US":"Clear button via clearable; customizable prefix / suffix content"},{"zh-CN":"通过 ref 暴露 focus() 命令式聚焦","en-US":"Imperative focus() exposed via ref"}],scenarios:[{"zh-CN":"表单文本录入、搜索框、带图标的复合输入等场景。","en-US":"Form text entry, search boxes, composite inputs with icons, and similar scenarios."}],demos:[{id:"basic",title:{"zh-CN":"受控用法","en-US":"Controlled Usage"},description:{"zh-CN":"绑定 value 同步外部状态，clearable 提供一键清空。","en-US":"Bind value to sync external state; clearable offers one-click clearing."},vueComponent:GU,reactComponent:PU,vueSource:QU,reactSource:WU},{id:"state",title:{"zh-CN":"禁用 / 只读 / 前缀","en-US":"Disabled / Readonly / Prefix"},description:{"zh-CN":"禁用与只读均透传原生属性；prefix 插槽可放置图标等前置内容。","en-US":"Disabled and readonly pass through to native attributes; the prefix slot holds leading content such as icons."},vueComponent:KU,reactComponent:XU,vueSource:JU,reactSource:e$}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控值（提供即受控）","en-US":"Controlled value (controlled when provided)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始值","en-US":"Uncontrolled initial value"}},{name:"type",type:"'text' | 'password' | 'number' | 'email' | 'search' | 'tel' | 'url'",default:"'text'",description:{"zh-CN":"原生 input 类型","en-US":"Native input type"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文本","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"readonly",type:"boolean",default:"false",description:{"zh-CN":"只读状态（双端 prop 同名，内部映射 DOM readOnly）","en-US":"Read-only state (same prop name on both frameworks; mapped to DOM readOnly)"}},{name:"maxLength",type:"number",default:"—",description:{"zh-CN":"最大输入长度","en-US":"Maximum input length"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清除图标","en-US":"Whether to show the clear icon"}},{name:"onInput",type:"(value: string) => void",default:"—",description:{"zh-CN":"输入回调（每次键入）","en-US":"Input callback (on every keystroke)"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"值变更提交回调（失焦或回车）","en-US":"Value commit callback (on blur or Enter)"}},{name:"onFocus",type:"(event: FocusEvent) => void",default:"—",description:{"zh-CN":"聚焦回调","en-US":"Focus callback"}},{name:"onBlur",type:"(event: FocusEvent) => void",default:"—",description:{"zh-CN":"失焦回调","en-US":"Blur callback"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调（点击清除图标）","en-US":"Clear callback (fired when the clear icon is clicked)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"input",react:"onInput",payload:"string",description:{"zh-CN":"每次键入触发","en-US":"Fired on every keystroke"}},{vue:"change",react:"onChange",payload:"string",description:{"zh-CN":"失焦或回车提交时触发","en-US":"Fired when the value is committed on blur or Enter"}},{vue:"focus",react:"onFocus",payload:"FocusEvent",description:{"zh-CN":"获得焦点","en-US":"Fired on focus"}},{vue:"blur",react:"onBlur",payload:"FocusEvent",description:{"zh-CN":"失去焦点","en-US":"Fired on blur"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"点击清除图标","en-US":"Fired when the clear icon is clicked"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"prefix",react:"renderPrefix",description:{"zh-CN":"前置内容（如图标）","en-US":"Leading content (e.g. an icon)"}},{vue:"suffix",react:"renderSuffix",description:{"zh-CN":"后置内容","en-US":"Trailing content"}},{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标（clearable 模式）","en-US":"Custom clear icon (in clearable mode)"}}]},notes:[{"zh-CN":"input 事件在每次键入时触发；change 事件在失焦或回车时触发，二者语义不同，注意按需监听。","en-US":"The input event fires on every keystroke, while change fires on blur or Enter; they have different semantics, so listen as needed."},{"zh-CN":"readonly 允许聚焦与复制但不可编辑，disabled 完全不可交互且不会随表单提交。","en-US":"readonly allows focus and copying but not editing; disabled blocks all interaction and is excluded from form submission."}],a11y:[{"zh-CN":"渲染为原生 <input>，disabled / readonly 透传原生属性，保留原生焦点与键盘输入行为。","en-US":"Renders as a native <input> with disabled / readonly passed through, preserving native focus and keyboard input behavior."}]},n$={class:"demo-column"},a$=Z({__name:"basic",setup(e){const t=H(!1);return(n,a)=>(b(),x("div",n$,[N(r(K),{type:"primary",onClick:a[0]||(a[0]=l=>t.value=!0)},{default:z(()=>[L(U(r(T)()?"打开对话框":"Open modal"),1)]),_:1}),N(r(ko),{visible:t.value,"onUpdate:visible":a[3]||(a[3]=l=>t.value=l),title:r(T)()?"操作确认":"Confirm action",onOk:a[4]||(a[4]=l=>t.value=!1),onCancel:a[5]||(a[5]=l=>t.value=!1)},{footer:z(()=>[N(r(K),{onClick:a[1]||(a[1]=l=>t.value=!1)},{default:z(()=>[L(U(r(T)()?"取消":"Cancel"),1)]),_:1}),N(r(K),{type:"primary",onClick:a[2]||(a[2]=l=>t.value=!1)},{default:z(()=>[L(U(r(T)()?"确认":"Confirm"),1)]),_:1})]),default:z(()=>[w("p",null,U(r(T)()?"这是一段对话框内容，确认后将执行对应操作。":"Modal body text. Confirm to proceed with the action."),1)]),_:1},8,["visible","title"])]))}}),l$={class:"demo-column"},i$=Z({__name:"custom",setup(e){const t=H(!1);return(n,a)=>(b(),x("div",l$,[N(r(K),{type:"primary",onClick:a[0]||(a[0]=l=>t.value=!0)},{default:z(()=>[L(U(r(T)()?"打开对话框":"Open modal"),1)]),_:1}),N(r(ko),{visible:t.value,"onUpdate:visible":a[1]||(a[1]=l=>t.value=l),title:r(T)()?"删除确认":"Delete confirmation","ok-text":r(T)()?"确认删除":"Confirm delete","cancel-text":r(T)()?"再想想":"Maybe later",onOk:a[2]||(a[2]=l=>t.value=!1),onCancel:a[3]||(a[3]=l=>t.value=!1)},{default:z(()=>[w("p",null,U(r(T)()?"删除后不可恢复，请谨慎操作。底部按钮文案由 okText / cancelText 自定义。":"Deletion is irreversible, proceed with caution. Footer button text is customized via okText / cancelText."),1)]),_:1},8,["visible","title","ok-text","cancel-text"])]))}}),o$={class:"demo-column"},s$=Z({__name:"ref",setup(e){const t=H(null);return(n,a)=>(b(),x("div",o$,[N(r(K),{onClick:a[0]||(a[0]=l=>{var i;return(i=t.value)==null?void 0:i.open()})},{default:z(()=>[L(U(r(T)()?"通过 ref 打开":"Open via ref"),1)]),_:1}),N(r(ko),{ref_key:"modalRef",ref:t,title:r(T)()?"命令式控制":"Imperative control",width:"420px"},{default:z(()=>[w("p",null,U(r(T)()?"不需要维护 visible 状态，直接调用实例方法 open() / close()。":"No need to manage visible state manually; call instance methods open() / close() directly."),1)]),_:1},8,["title"])]))}});function r$(){const e=ne(),[t,n]=R.useState(!1),a=()=>n(!1);return m.jsxs("div",{className:"demo-column",children:[m.jsx(P,{type:"primary",onClick:()=>n(!0),children:e?"打开对话框":"Open modal"}),m.jsx(Do,{visible:t,title:e?"操作确认":"Confirm action",onOk:a,onCancel:a,renderFooter:()=>m.jsxs(m.Fragment,{children:[m.jsx(P,{onClick:a,children:e?"取消":"Cancel"}),m.jsx(P,{type:"primary",onClick:a,children:e?"确认":"Confirm"})]}),children:m.jsx("p",{children:e?"这是一段对话框内容，确认后将执行对应操作。":"Modal body text. Confirm to proceed with the action."})})]})}function u$(){const e=ne(),[t,n]=R.useState(!1);return m.jsxs("div",{className:"demo-column",children:[m.jsx(P,{type:"primary",onClick:()=>n(!0),children:e?"打开对话框":"Open modal"}),m.jsx(Do,{visible:t,title:e?"删除确认":"Delete confirmation",okText:e?"确认删除":"Confirm delete",cancelText:e?"再想想":"Maybe later",onOk:()=>n(!1),onCancel:()=>n(!1),children:m.jsx("p",{children:e?"删除后不可恢复，请谨慎操作。底部按钮文案由 okText / cancelText 自定义。":"Deletion is irreversible, proceed with caution. Footer button text is customized via okText / cancelText."})})]})}function c$(){const e=ne(),t=R.useRef(null);return m.jsxs("div",{className:"demo-column",children:[m.jsx(P,{onClick:()=>{var n;return(n=t.current)==null?void 0:n.open()},children:e?"通过 ref 打开":"Open via ref"}),m.jsx(Do,{ref:t,title:e?"命令式控制":"Imperative control",width:"420px",children:m.jsx("p",{children:e?"不需要维护 visible 状态，直接调用实例方法 open() / close()。":"No need to manage visible state manually; call instance methods open() / close() directly."})})]})}const d$=`<script setup lang="ts">
import { ref } from 'vue';
import { Button, Modal } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const visible = ref(false);
<\/script>

<template>
  <div class="demo-column">
    <Button type="primary" @click="visible = true">{{
      isZh() ? '打开对话框' : 'Open modal'
    }}</Button>
    <Modal
      v-model:visible="visible"
      :title="isZh() ? '操作确认' : 'Confirm action'"
      @ok="visible = false"
      @cancel="visible = false"
    >
      <p>
        {{
          isZh()
            ? '这是一段对话框内容，确认后将执行对应操作。'
            : 'Modal body text. Confirm to proceed with the action.'
        }}
      </p>
      <template #footer>
        <Button @click="visible = false">{{ isZh() ? '取消' : 'Cancel' }}</Button>
        <Button type="primary" @click="visible = false">{{ isZh() ? '确认' : 'Confirm' }}</Button>
      </template>
    </Modal>
  </div>
</template>
`,m$=`<script setup lang="ts">
import { ref } from 'vue';
import { Button, Modal } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const visible = ref(false);
<\/script>

<template>
  <div class="demo-column">
    <Button type="primary" @click="visible = true">{{
      isZh() ? '打开对话框' : 'Open modal'
    }}</Button>
    <Modal
      v-model:visible="visible"
      :title="isZh() ? '删除确认' : 'Delete confirmation'"
      :ok-text="isZh() ? '确认删除' : 'Confirm delete'"
      :cancel-text="isZh() ? '再想想' : 'Maybe later'"
      @ok="visible = false"
      @cancel="visible = false"
    >
      <p>
        {{
          isZh()
            ? '删除后不可恢复，请谨慎操作。底部按钮文案由 okText / cancelText 自定义。'
            : 'Deletion is irreversible, proceed with caution. Footer button text is customized via okText / cancelText.'
        }}
      </p>
    </Modal>
  </div>
</template>
`,p$=`<script setup lang="ts">
import { ref } from 'vue';
import { Button, Modal } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const modalRef = ref<InstanceType<typeof Modal> | null>(null);
<\/script>

<template>
  <div class="demo-column">
    <Button @click="modalRef?.open()">{{ isZh() ? '通过 ref 打开' : 'Open via ref' }}</Button>
    <Modal ref="modalRef" :title="isZh() ? '命令式控制' : 'Imperative control'" width="420px">
      <p>
        {{
          isZh()
            ? '不需要维护 visible 状态，直接调用实例方法 open() / close()。'
            : 'No need to manage visible state manually; call instance methods open() / close() directly.'
        }}
      </p>
    </Modal>
  </div>
</template>
`,f$=`import { useState } from 'react';
import { Button, Modal } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function ModalBasicDemo() {
  const isZh = useIsZh();
  const [visible, setVisible] = useState(false);
  const close = () => setVisible(false);

  return (
    <div className="demo-column">
      <Button type="primary" onClick={() => setVisible(true)}>
        {isZh ? '打开对话框' : 'Open modal'}
      </Button>
      <Modal
        visible={visible}
        title={isZh ? '操作确认' : 'Confirm action'}
        onOk={close}
        onCancel={close}
        renderFooter={() => (
          <>
            <Button onClick={close}>{isZh ? '取消' : 'Cancel'}</Button>
            <Button type="primary" onClick={close}>
              {isZh ? '确认' : 'Confirm'}
            </Button>
          </>
        )}
      >
        <p>
          {isZh
            ? '这是一段对话框内容，确认后将执行对应操作。'
            : 'Modal body text. Confirm to proceed with the action.'}
        </p>
      </Modal>
    </div>
  );
}
`,h$=`import { useState } from 'react';
import { Button, Modal } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function ModalCustomDemo() {
  const isZh = useIsZh();
  const [visible, setVisible] = useState(false);
  return (
    <div className="demo-column">
      <Button type="primary" onClick={() => setVisible(true)}>
        {isZh ? '打开对话框' : 'Open modal'}
      </Button>
      <Modal
        visible={visible}
        title={isZh ? '删除确认' : 'Delete confirmation'}
        okText={isZh ? '确认删除' : 'Confirm delete'}
        cancelText={isZh ? '再想想' : 'Maybe later'}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>
          {isZh
            ? '删除后不可恢复，请谨慎操作。底部按钮文案由 okText / cancelText 自定义。'
            : 'Deletion is irreversible, proceed with caution. Footer button text is customized via okText / cancelText.'}
        </p>
      </Modal>
    </div>
  );
}
`,v$=`import { useRef } from 'react';
import { Button, Modal } from '@xui-design/react';
import type { ModalRef } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function ModalRefDemo() {
  const isZh = useIsZh();
  const modalRef = useRef<ModalRef>(null);

  return (
    <div className="demo-column">
      <Button onClick={() => modalRef.current?.open()}>
        {isZh ? '通过 ref 打开' : 'Open via ref'}
      </Button>
      <Modal ref={modalRef} title={isZh ? '命令式控制' : 'Imperative control'} width="420px">
        <p>
          {isZh
            ? '不需要维护 visible 状态，直接调用实例方法 open() / close()。'
            : 'No need to manage visible state manually; call instance methods open() / close() directly.'}
        </p>
      </Modal>
    </div>
  );
}
`,g$={name:"Modal",slug:"modal",title:"对话框",category:"basic",summary:{"zh-CN":"模态对话框，承载需要用户明确处理的信息或操作；支持焦点陷阱 / 焦点恢复、自定义底部文案与受控、ref 命令式两种用法。","en-US":"A modal dialog for information or actions that require explicit handling, with focus trap / focus restore, customizable footer text, and both controlled and ref-based imperative usage."},features:[{"zh-CN":"受控 visible / 非受控 defaultVisible，Vue 端支持 v-model:visible","en-US":"Controlled visible or uncontrolled defaultVisible; v-model:visible on Vue"},{"zh-CN":"title 标题、width 自定义宽度（数字按 px，字符串原样输出）","en-US":"Title and custom width (numbers are treated as px; strings are applied as-is)"},{"zh-CN":"closable 关闭按钮、maskClosable 遮罩点击关闭、closeOnEsc ESC 关闭","en-US":"Close button via closable, mask click to close via maskClosable, and ESC to close via closeOnEsc"},{"zh-CN":"焦点陷阱：打开期间 Tab 循环约束在弹窗内（trapFocus 可关闭）；关闭后焦点恢复到打开前元素","en-US":"Focus trap: Tab cycles within the dialog while open (can be disabled with trapFocus); focus returns to the pre-open element after close"},{"zh-CN":"okText / cancelText 自定义默认底部按钮文案（未提供时取全局语言包，zh-CN 默认 确认 / 取消）","en-US":"Custom default footer button text via okText / cancelText (falls back to the global locale; zh-CN defaults to 确认 / 取消)"},{"zh-CN":"default / title / footer 三个插槽（React 对应 children / renderTitle / renderFooter）","en-US":"Three slots: default / title / footer (children / renderTitle / renderFooter in React)"},{"zh-CN":"通过 ref 暴露 open() / close() 命令式方法（类型 ModalRef）","en-US":"Imperative open() / close() methods exposed via ref (type ModalRef)"}],scenarios:[{"zh-CN":"操作确认、表单编辑、详情展示等需要打断主流程并聚焦用户注意力的场景。","en-US":"Confirmations, form editing, detail views, and other scenarios that interrupt the main flow to focus user attention."}],demos:[{id:"basic",title:{"zh-CN":"受控对话框","en-US":"Controlled Dialog"},description:{"zh-CN":"外部维护 visible 状态，footer 插槽自定义底部按钮。","en-US":"Maintain visible externally; customize footer buttons via the footer slot."},vueComponent:a$,reactComponent:r$,vueSource:d$,reactSource:f$},{id:"custom",title:{"zh-CN":"自定义按钮文案","en-US":"Custom Button Text"},description:{"zh-CN":"okText / cancelText 定制底部文案；ESC、遮罩、关闭按钮均可退出。","en-US":"Customize footer text with okText / cancelText; ESC, mask click, and the close button all dismiss the dialog."},vueComponent:i$,reactComponent:u$,vueSource:m$,reactSource:h$},{id:"ref",title:{"zh-CN":"ref 命令式打开","en-US":"Imperative Open via ref"},description:{"zh-CN":"无需维护 visible，直接调用实例 open() / close()。","en-US":"No need to maintain visible; call open() / close() on the instance directly."},vueComponent:s$,reactComponent:c$,vueSource:p$,reactSource:v$}],api:{props:[{name:"visible",type:"boolean",default:"—",description:{"zh-CN":"受控可见性","en-US":"Controlled visibility"}},{name:"defaultVisible",type:"boolean",default:"false",description:{"zh-CN":"非受控初始可见性","en-US":"Uncontrolled initial visibility"}},{name:"title",type:"string",default:"—",description:{"zh-CN":"标题","en-US":"Dialog title"}},{name:"width",type:"number | string",default:"520",description:{"zh-CN":"宽度（数字按 px，字符串原样输出）","en-US":"Dialog width (numbers are treated as px; strings are applied as-is)"}},{name:"closable",type:"boolean",default:"true",description:{"zh-CN":"是否显示右上角关闭按钮","en-US":"Whether to show the close button in the top-right corner"}},{name:"maskClosable",type:"boolean",default:"true",description:{"zh-CN":"点击遮罩是否关闭","en-US":"Whether clicking the mask closes the dialog"}},{name:"closeOnEsc",type:"boolean",default:"true",description:{"zh-CN":"按 ESC 是否关闭","en-US":"Whether pressing ESC closes the dialog"}},{name:"okText",type:"string",default:"—",description:{"zh-CN":"确认按钮文案；未提供时取全局语言包（zh-CN：确认 / en-US：OK）","en-US":"OK button text; falls back to the global locale (zh-CN: 确认 / en-US: OK)"}},{name:"cancelText",type:"string",default:"—",description:{"zh-CN":"取消按钮文案；未提供时取全局语言包（zh-CN：取消 / en-US：Cancel）","en-US":"Cancel button text; falls back to the global locale (zh-CN: 取消 / en-US: Cancel)"}},{name:"trapFocus",type:"boolean",default:"true",description:{"zh-CN":"打开期间 Tab 焦点是否循环约束在弹窗内","en-US":"Whether Tab focus cycles within the dialog while open"}},{name:"onOpen",type:"() => void",default:"—",description:{"zh-CN":"打开回调","en-US":"Open callback"}},{name:"onClose",type:"() => void",default:"—",description:{"zh-CN":"关闭回调","en-US":"Close callback"}},{name:"onOk",type:"() => void",default:"—",description:{"zh-CN":"确认回调（触发后自动关闭）","en-US":"OK callback (the dialog closes automatically afterwards)"}},{name:"onCancel",type:"() => void",default:"—",description:{"zh-CN":"取消回调（触发后自动关闭）","en-US":"Cancel callback (the dialog closes automatically afterwards)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到对话框面板的自定义类名","en-US":"Custom class name appended to the dialog panel"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到对话框面板的自定义样式","en-US":"Custom styles appended to the dialog panel"}}],events:[{vue:"open",react:"onOpen",payload:"—",description:{"zh-CN":"对话框打开","en-US":"Fired when the dialog opens"}},{vue:"close",react:"onClose",payload:"—",description:{"zh-CN":"对话框关闭","en-US":"Fired when the dialog closes"}},{vue:"ok",react:"onOk",payload:"—",description:{"zh-CN":"点击确认","en-US":"Fired when OK is clicked"}},{vue:"cancel",react:"onCancel",payload:"—",description:{"zh-CN":"点击取消","en-US":"Fired when Cancel is clicked"}},{vue:"update:visible",react:"—",payload:"boolean",description:{"zh-CN":"v-model:visible 回写","en-US":"Write-back for v-model:visible"}}],slots:[{vue:"closeIcon",react:"renderCloseIcon",description:{"zh-CN":"自定义关闭图标（替换右上角内置 close）","en-US":"Custom close icon (replaces the built-in top-right close)"}},{vue:"default",react:"children",description:{"zh-CN":"弹窗内容","en-US":"Dialog content"}},{vue:"title",react:"renderTitle",description:{"zh-CN":"标题（覆盖 title prop）","en-US":"Title (overrides the title prop)"}},{vue:"footer",react:"renderFooter",description:{"zh-CN":"底部操作区","en-US":"Footer action area"}}]},notes:[{"zh-CN":"onOk / onCancel 触发后组件自动关闭；若使用自定义 footer，需自行调用 close() 或更新 visible。","en-US":"The dialog closes automatically after onOk / onCancel; with a custom footer, call close() or update visible yourself."},{"zh-CN":"ref 实例类型为 ModalRef，提供 open() 与 close() 两个方法。","en-US":"The ref instance is of type ModalRef, providing open() and close() methods."},{"zh-CN":"自定义 footer 插槽时 okText / cancelText 不生效（底部完全由插槽接管）。","en-US":"okText / cancelText have no effect when a custom footer slot is used (the slot fully takes over the footer)."},{"zh-CN":"trapFocus 打开且面板内无可聚焦元素时，焦点锁定在面板自身（tabindex=-1）。","en-US":"With trapFocus enabled and no focusable elements inside, focus is locked on the panel itself (tabindex=-1)."}],a11y:[{"zh-CN":'面板携带 role="dialog" + aria-modal="true"；打开时聚焦面板，Tab / Shift+Tab 循环约束在弹窗内。',"en-US":'The panel carries role="dialog" + aria-modal="true"; it receives focus on open, and Tab / Shift+Tab cycle within the dialog.'},{"zh-CN":"关闭后焦点恢复到打开前的元素，键盘用户不会丢失位置；支持 ESC 关闭（closeOnEsc）。","en-US":"Focus returns to the pre-open element after close so keyboard users keep their place; ESC to close is supported (closeOnEsc)."}]},b$={class:"demo-column"},y$={class:"demo-text"},S$=Z({__name:"basic",setup(e){const t=H(!0);return(n,a)=>(b(),x("div",b$,[N(r(ds),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l)},{default:z(()=>[L(U(r(T)()?"我已阅读并同意用户协议":"I have read and agree to the user agreement"),1)]),_:1},8,["value"]),w("p",y$,U(r(T)()?"当前选中":"Selected")+"："+U(r(T)()?t.value?"是":"否":t.value?"Yes":"No"),1)]))}}),x$={class:"demo-column"},_$=Z({__name:"state",setup(e){const t=H(!0);return(n,a)=>(b(),x("div",x$,[N(r(ds),{indeterminate:t.value,"onUpdate:indeterminate":a[0]||(a[0]=l=>t.value=l)},{default:z(()=>[L(U(r(T)()?"全选（半选态，点击后变全选）":"Select all (indeterminate, click to select all)"),1)]),_:1},8,["indeterminate"]),N(r(ds),{value:"",disabled:""},{default:z(()=>[L(U(r(T)()?"禁用未选":"Disabled unchecked"),1)]),_:1}),N(r(ds),{value:!0,disabled:""},{default:z(()=>[L(U(r(T)()?"禁用已选":"Disabled checked"),1)]),_:1})]))}});function C$(){const e=ne(),[t,n]=R.useState(!0);return m.jsxs("div",{className:"demo-column",children:[m.jsx(ps,{value:t,onChange:n,children:e?"我已阅读并同意用户协议":"I have read and agree to the user agreement"}),m.jsxs("p",{className:"demo-text",children:[e?"当前选中":"Selected","：",e?t?"是":"否":t?"Yes":"No"]})]})}function k$(){const e=ne(),[t,n]=R.useState(!0);return m.jsxs("div",{className:"demo-column",children:[m.jsx(ps,{indeterminate:t,onChange:()=>n(!1),children:e?"全选（半选态，点击后变全选）":"Select all (indeterminate, click to select all)"}),m.jsx(ps,{value:!1,disabled:!0,children:e?"禁用未选":"Disabled unchecked"}),m.jsx(ps,{value:!0,disabled:!0,children:e?"禁用已选":"Disabled checked"})]})}const w$=`<script setup lang="ts">
import { ref } from 'vue';
import { Checkbox } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const checked = ref(true);
<\/script>

<template>
  <div class="demo-column">
    <Checkbox v-model:value="checked">{{
      isZh() ? '我已阅读并同意用户协议' : 'I have read and agree to the user agreement'
    }}</Checkbox>
    <p class="demo-text">
      {{ isZh() ? '当前选中' : 'Selected' }}：{{
        isZh() ? (checked ? '是' : '否') : checked ? 'Yes' : 'No'
      }}
    </p>
  </div>
</template>
`,N$=`<script setup lang="ts">
import { ref } from 'vue';
import { Checkbox } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const indeterminate = ref(true);
<\/script>

<template>
  <div class="demo-column">
    <Checkbox v-model:indeterminate="indeterminate">{{
      isZh() ? '全选（半选态，点击后变全选）' : 'Select all (indeterminate, click to select all)'
    }}</Checkbox>
    <Checkbox value disabled>{{ isZh() ? '禁用未选' : 'Disabled unchecked' }}</Checkbox>
    <Checkbox :value="true" disabled>{{ isZh() ? '禁用已选' : 'Disabled checked' }}</Checkbox>
  </div>
</template>
`,T$=`import { useState } from 'react';
import { Checkbox } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function CheckboxBasicDemo() {
  const isZh = useIsZh();
  const [checked, setChecked] = useState(true);

  return (
    <div className="demo-column">
      <Checkbox value={checked} onChange={setChecked}>
        {isZh ? '我已阅读并同意用户协议' : 'I have read and agree to the user agreement'}
      </Checkbox>
      <p className="demo-text">
        {isZh ? '当前选中' : 'Selected'}：{isZh ? (checked ? '是' : '否') : checked ? 'Yes' : 'No'}
      </p>
    </div>
  );
}
`,z$=`import { useState } from 'react';
import { Checkbox } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function CheckboxStateDemo() {
  const isZh = useIsZh();
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <div className="demo-column">
      <Checkbox indeterminate={indeterminate} onChange={() => setIndeterminate(false)}>
        {isZh ? '全选（半选态，点击后变全选）' : 'Select all (indeterminate, click to select all)'}
      </Checkbox>
      <Checkbox value={false} disabled>
        {isZh ? '禁用未选' : 'Disabled unchecked'}
      </Checkbox>
      <Checkbox value disabled>
        {isZh ? '禁用已选' : 'Disabled checked'}
      </Checkbox>
    </div>
  );
}
`,U$={name:"Checkbox",slug:"checkbox",title:"复选框",category:"form",summary:{"zh-CN":"在一组可选项中进行多选，或单独使用表示两种状态的切换，支持半选态。","en-US":"Select multiple options from a set, or use standalone as a two-state toggle, with indeterminate state support."},features:[{"zh-CN":"受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; v-model:value on Vue"},{"zh-CN":'indeterminate 半选态（常用于"全选"联动，点击后切换为全选）',"en-US":'Indeterminate state via indeterminate (often used for "select all"; clicking switches to fully checked)'},{"zh-CN":"disabled 禁用；label 文案通过默认插槽 / children 传入","en-US":"Disabled state; label text is passed via the default slot / children"}],scenarios:[{"zh-CN":"协议勾选、条件筛选、表格行选择与全选联动等场景。","en-US":"Agreement checkboxes, conditional filtering, table row selection with select-all linkage, and similar scenarios."}],demos:[{id:"basic",title:{"zh-CN":"受控复选框","en-US":"Controlled Checkbox"},description:{"zh-CN":"绑定布尔值，监听 change 获取切换后的选中状态。","en-US":"Bind a boolean and listen to change for the checked state after toggle."},vueComponent:S$,reactComponent:C$,vueSource:w$,reactSource:T$},{id:"state",title:{"zh-CN":"半选态与禁用","en-US":"Indeterminate & Disabled"},description:{"zh-CN":'indeterminate 表示"部分选中"；disabled 下点击无效。',"en-US":'indeterminate means "partially selected"; clicks have no effect when disabled.'},vueComponent:_$,reactComponent:k$,vueSource:N$,reactSource:z$}],api:{props:[{name:"value",type:"boolean",default:"—",description:{"zh-CN":"受控选中状态（提供即受控）","en-US":"Controlled checked state (controlled when provided)"}},{name:"defaultValue",type:"boolean",default:"false",description:{"zh-CN":"非受控初始状态","en-US":"Uncontrolled initial state"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"indeterminate",type:"boolean",default:"false",description:{"zh-CN":"半选状态（点击后切换为全选）","en-US":"Indeterminate state (clicking switches to fully checked)"}},{name:"onChange",type:"(value: boolean) => void",default:"—",description:{"zh-CN":"状态变更回调（载荷为切换后的选中值）","en-US":"State change callback (payload is the checked value after toggle)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: boolean",description:{"zh-CN":"选中状态变更","en-US":"Fired when the checked state changes"}},{vue:"update:value",react:"—",payload:"boolean",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"标签内容","en-US":"Label content"}},{vue:"checkIcon",react:"renderCheckIcon",description:{"zh-CN":"自定义选中勾选图标","en-US":"Custom checked checkmark icon"}},{vue:"indeterminateIcon",react:"renderIndeterminateIcon",description:{"zh-CN":"自定义半选图标","en-US":"Custom indeterminate icon"}}]},notes:[{"zh-CN":'半选（indeterminate）仅是视觉状态，表示"部分选中"；点击后半选消除并切换为全选。',"en-US":'Indeterminate is only a visual state meaning "partially selected"; clicking clears it and switches to fully checked.'},{"zh-CN":'实现"全选 / 全不选 / 半选"三态联动时，需由外部根据子项选中数量计算 indeterminate 与 value。',"en-US":'For "all / none / partial" tri-state linkage, compute indeterminate and value externally from the number of selected children.'}],a11y:[{"zh-CN":"底层使用原生 checkbox 输入语义，键盘空格可切换，禁用状态携带 disabled 属性。","en-US":"Built on native checkbox input semantics; toggles with the Space key and carries the disabled attribute when disabled."}]},$$={class:"demo-column"},E$={class:"demo-text"},A$=Z({__name:"group",setup(e){const t=H("a");return(n,a)=>(b(),x("div",$$,[N(r(Vu),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l)},{default:z(()=>[N(r(ms),{value:"a"},{default:z(()=>[L(U(r(T)()?"选项 A":"Option A"),1)]),_:1}),N(r(ms),{value:"b"},{default:z(()=>[L(U(r(T)()?"选项 B":"Option B"),1)]),_:1}),N(r(ms),{value:"c",disabled:""},{default:z(()=>[L(U(r(T)()?"选项 C（禁用）":"Option C (disabled)"),1)]),_:1})]),_:1},8,["value"]),w("p",E$,U(r(T)()?"当前选中":"Selected")+"："+U(t.value),1)]))}}),R$={class:"demo-column"},B$=Z({__name:"options",setup(e){const t=H("weekly"),n=F(()=>T()?[{label:"每天",value:"daily"},{label:"每周",value:"weekly"},{label:"每月",value:"monthly"},{label:"从不（禁用）",value:"never",disabled:!0}]:[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"},{label:"Monthly",value:"monthly"},{label:"Never (disabled)",value:"never",disabled:!0}]);return(a,l)=>(b(),x("div",R$,[N(r(Vu),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),options:n.value},null,8,["value","options"]),N(r(Vu),{options:n.value,disabled:""},null,8,["options"])]))}});function O$(){const e=ne(),[t,n]=R.useState("a");return m.jsxs("div",{className:"demo-column",children:[m.jsxs(Ku,{value:t,onChange:n,children:[m.jsx(fs,{value:"a",children:e?"选项 A":"Option A"}),m.jsx(fs,{value:"b",children:e?"选项 B":"Option B"}),m.jsx(fs,{value:"c",disabled:!0,children:e?"选项 C（禁用）":"Option C (disabled)"})]}),m.jsxs("p",{className:"demo-text",children:[e?"当前选中":"Selected","：",t]})]})}function Z$(){const e=ne(),[t,n]=R.useState("weekly"),a=[{label:e?"每天":"Daily",value:"daily"},{label:e?"每周":"Weekly",value:"weekly"},{label:e?"每月":"Monthly",value:"monthly"},{label:e?"从不（禁用）":"Never (disabled)",value:"never",disabled:!0}];return m.jsxs("div",{className:"demo-column",children:[m.jsx(Ku,{value:t,onChange:n,options:a}),m.jsx(Ku,{options:a,disabled:!0})]})}const D$=`<script setup lang="ts">
import { ref } from 'vue';
import { RadioGroup, Radio } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref('a');
<\/script>

<template>
  <div class="demo-column">
    <RadioGroup v-model:value="value">
      <Radio value="a">{{ isZh() ? '选项 A' : 'Option A' }}</Radio>
      <Radio value="b">{{ isZh() ? '选项 B' : 'Option B' }}</Radio>
      <Radio value="c" disabled>{{ isZh() ? '选项 C（禁用）' : 'Option C (disabled)' }}</Radio>
    </RadioGroup>
    <p class="demo-text">{{ isZh() ? '当前选中' : 'Selected' }}：{{ value }}</p>
  </div>
</template>
`,M$=`<script setup lang="ts">
import { ref, computed } from 'vue';
import { RadioGroup } from '@xui-design/vue';
import type { RadioOption } from '@xui-design/core';
import { isZh } from '../../../i18n';

const value = ref('weekly');
const options = computed<RadioOption[]>(() =>
  isZh()
    ? [
        { label: '每天', value: 'daily' },
        { label: '每周', value: 'weekly' },
        { label: '每月', value: 'monthly' },
        { label: '从不（禁用）', value: 'never', disabled: true },
      ]
    : [
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Never (disabled)', value: 'never', disabled: true },
      ],
);
<\/script>

<template>
  <div class="demo-column">
    <RadioGroup v-model:value="value" :options="options" />
    <RadioGroup :options="options" disabled />
  </div>
</template>
`,j$=`import { useState } from 'react';
import { RadioGroup, Radio } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function RadioGroupDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState('a');

  return (
    <div className="demo-column">
      <RadioGroup value={value} onChange={setValue}>
        <Radio value="a">{isZh ? '选项 A' : 'Option A'}</Radio>
        <Radio value="b">{isZh ? '选项 B' : 'Option B'}</Radio>
        <Radio value="c" disabled>
          {isZh ? '选项 C（禁用）' : 'Option C (disabled)'}
        </Radio>
      </RadioGroup>
      <p className="demo-text">
        {isZh ? '当前选中' : 'Selected'}：{value}
      </p>
    </div>
  );
}
`,V$=`import { useState } from 'react';
import { RadioGroup } from '@xui-design/react';
import type { RadioOption } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function RadioOptionsDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState('weekly');
  const options: RadioOption[] = [
    { label: isZh ? '每天' : 'Daily', value: 'daily' },
    { label: isZh ? '每周' : 'Weekly', value: 'weekly' },
    { label: isZh ? '每月' : 'Monthly', value: 'monthly' },
    { label: isZh ? '从不（禁用）' : 'Never (disabled)', value: 'never', disabled: true },
  ];

  return (
    <div className="demo-column">
      <RadioGroup value={value} onChange={setValue} options={options} />
      <RadioGroup options={options} disabled />
    </div>
  );
}
`,L$={name:"Radio",slug:"radio",title:"单选框",category:"form",summary:{"zh-CN":"在一组互斥选项中选择一个，由 RadioGroup 管理选中值，Radio 作为子项；也支持 options 数组配置。","en-US":"Select one option from a mutually exclusive set. RadioGroup manages the selected value with Radio as the child item; an options array is also supported."},features:[{"zh-CN":"RadioGroup 受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes for RadioGroup; v-model:value on Vue"},{"zh-CN":"两种渲染方式：Radio 子组件插槽，或 options 配置数组（二者取其一，options 优先）","en-US":"Two rendering approaches: Radio child components via slot, or an options config array (choose one; options takes precedence)"},{"zh-CN":"支持整组 disabled 与单个选项 disabled（叠加生效）","en-US":"Supports disabling the whole group or individual options (effects stack)"},{"zh-CN":"Radio 自身不维护状态、不发事件，选中统一由组上下文派生","en-US":"Radio itself holds no state and emits no events; selection is derived from the group context"}],scenarios:[{"zh-CN":"互斥条件选择、设置项中的单一选择、表单枚举字段等场景。","en-US":"Mutually exclusive choices, single-choice settings, enum form fields, and similar scenarios."}],demos:[{id:"group",title:{"zh-CN":"Radio 子组件","en-US":"Radio Children"},description:{"zh-CN":"在 RadioGroup 默认插槽中放置 Radio，value 为选项取值。","en-US":"Place Radio in the RadioGroup default slot; value is the option value."},vueComponent:A$,reactComponent:O$,vueSource:D$,reactSource:j$},{id:"options",title:{"zh-CN":"options 配置与整组禁用","en-US":"options Config & Group Disabled"},description:{"zh-CN":"传入 options 数组即可渲染；disabled 作用于整组。","en-US":"Pass an options array to render the group; disabled applies to the whole group."},vueComponent:B$,reactComponent:Z$,vueSource:M$,reactSource:V$}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"【Group】受控选中值（提供即受控）","en-US":"[Group] Controlled selected value (controlled when provided)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"【Group】非受控初始选中值","en-US":"[Group] Uncontrolled initial selected value"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"【Group】禁用整组","en-US":"[Group] Disable the whole group"}},{name:"options",type:"RadioOption[]",default:"—",description:{"zh-CN":"【Group】选项数组（提供后忽略子组件插槽）","en-US":"[Group] Options array (the child component slot is ignored when provided)"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"【Group】选中值变更回调","en-US":"[Group] Selected value change callback"}},{name:"Radio.value",type:"string",default:"—",required:!0,description:{"zh-CN":"【Radio 子项】选项取值（必填，组内唯一）","en-US":"[Radio item] Option value (required, unique within the group)"}},{name:"Radio.disabled",type:"boolean",default:"false",description:{"zh-CN":"【Radio 子项】禁用当前选项（与组禁用叠加）","en-US":"[Radio item] Disable this option (stacks with group disabled)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"选中值变更（由 Group 触发）","en-US":"Fired when the selected value changes (emitted by the Group)"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"【Group】自定义选项（渲染 Radio 子项，options 存在时忽略）；【Radio 子项】选项文案","en-US":"[Group] Custom options (renders Radio children; ignored when options is present); [Radio item] option label"}}],types:[{name:"RadioOption",definition:`interface RadioOption {
  label: string
  value: string
  disabled?: boolean
}`,description:{"zh-CN":"options 数组中的单项配置。","en-US":"Configuration of a single item in the options array."}}]},notes:[{"zh-CN":"Radio 必须放在 RadioGroup 内使用，其选中态由组上下文决定，不要单独给 Radio 传 value 受控。","en-US":"Radio must be used inside a RadioGroup; its checked state comes from the group context, so do not control Radio with its own value."},{"zh-CN":"options 模式下单项禁用通过该选项的 disabled: true 配置；插槽模式下在 <Radio> 上设置 disabled。","en-US":"In options mode, disable an item via disabled: true on that option; in slot mode, set disabled on the <Radio> itself."}],a11y:[{"zh-CN":"组内选项使用原生 radio 语义并共享同一分组名，方向键可在组内移动选择。","en-US":"Options use native radio semantics and share one group name; arrow keys move the selection within the group."}]},H$={class:"demo-column"},I$={class:"demo-text"},F$=Z({__name:"basic",setup(e){const t=H(""),n=F(()=>T()?[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳（暂不可选）",value:"shenzhen",disabled:!0}]:[{label:"Beijing",value:"beijing"},{label:"Shanghai",value:"shanghai"},{label:"Guangzhou",value:"guangzhou"},{label:"Shenzhen (unavailable)",value:"shenzhen",disabled:!0}]);return(a,l)=>(b(),x("div",H$,[N(r(fa),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),options:n.value,placeholder:r(T)()?"请选择城市":"Select a city",clearable:""},null,8,["value","options","placeholder"]),w("p",I$,U(r(T)()?"当前选中":"Selected")+"："+U(t.value||(r(T)()?"（未选择）":"(none)")),1)]))}}),q$={class:"demo-column"},G$=Z({__name:"state",setup(e){const t=F(()=>T()?[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}]);return(n,a)=>(b(),x("div",q$,[N(r(fa),{options:t.value,"default-value":"1"},null,8,["options"]),N(r(fa),{options:t.value,"default-value":"1",disabled:""},null,8,["options"])]))}}),Y$={class:"demo-column"},K$={class:"demo-text"},P$={class:"demo-text"},X$={class:"demo-text"},Q$=Z({__name:"advanced",setup(e){const t=F(()=>T()?[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}]:[{label:"Beijing",value:"beijing"},{label:"Shanghai",value:"shanghai"},{label:"Guangzhou",value:"guangzhou"},{label:"Shenzhen",value:"shenzhen"}]),n=F(()=>Array.from({length:1e3},(o,s)=>({label:T()?`选项 ${s+1}`:`Option ${s+1}`,value:`opt-${s+1}`}))),a=H(["beijing"]),l=H(""),i=H("");return(o,s)=>(b(),x("div",Y$,[N(r(fa),{value:a.value,"onUpdate:value":s[0]||(s[0]=u=>a.value=u),options:t.value,multiple:"",placeholder:r(T)()?"多选城市":"Multi-select cities"},null,8,["value","options","placeholder"]),w("p",K$,U(r(T)()?"多选已选":"Multi-selected")+"："+U(a.value.join(r(T)()?"、":", ")||(r(T)()?"（无）":"(none)")),1),N(r(fa),{value:l.value,"onUpdate:value":s[1]||(s[1]=u=>l.value=u),options:t.value,searchable:"",clearable:"",placeholder:r(T)()?"输入关键字过滤":"Type a keyword to filter"},null,8,["value","options","placeholder"]),w("p",P$,U(r(T)()?"可搜索当前选中":"Searchable selected")+"："+U(l.value||(r(T)()?"（未选择）":"(none)")),1),N(r(fa),{value:i.value,"onUpdate:value":s[2]||(s[2]=u=>i.value=u),options:n.value,virtual:"","max-height":200,placeholder:r(T)()?"虚拟滚动 · 1000 项":"Virtual scroll · 1000 items"},null,8,["value","options","placeholder"]),w("p",X$,U(r(T)()?"虚拟滚动当前选中":"Virtual scroll selected")+"："+U(i.value||(r(T)()?"（未选择）":"(none)")),1)]))}});function J$(){const e=ne(),[t,n]=R.useState(""),a=[{label:e?"北京":"Beijing",value:"beijing"},{label:e?"上海":"Shanghai",value:"shanghai"},{label:e?"广州":"Guangzhou",value:"guangzhou"},{label:e?"深圳（暂不可选）":"Shenzhen (unavailable)",value:"shenzhen",disabled:!0}];return m.jsxs("div",{className:"demo-column",children:[m.jsx(ha,{value:t,onChange:l=>n(l),options:a,placeholder:e?"请选择城市":"Select a city",clearable:!0}),m.jsxs("p",{className:"demo-text",children:[e?"当前选中":"Selected","：",t||(e?"（未选择）":"(none)")]})]})}function W$(){const e=ne(),t=[{label:e?"选项一":"Option 1",value:"1"},{label:e?"选项二":"Option 2",value:"2"}];return m.jsxs("div",{className:"demo-column",children:[m.jsx(ha,{options:t,defaultValue:"1"}),m.jsx(ha,{options:t,defaultValue:"1",disabled:!0})]})}function eE(){const e=ne(),[t,n]=R.useState(["beijing"]),[a,l]=R.useState(""),[i,o]=R.useState(""),s=[{label:e?"北京":"Beijing",value:"beijing"},{label:e?"上海":"Shanghai",value:"shanghai"},{label:e?"广州":"Guangzhou",value:"guangzhou"},{label:e?"深圳":"Shenzhen",value:"shenzhen"}],u=Array.from({length:1e3},(d,p)=>({label:e?`选项 ${p+1}`:`Option ${p+1}`,value:`opt-${p+1}`}));return m.jsxs("div",{className:"demo-column",children:[m.jsx(ha,{value:t,onChange:d=>n(Array.isArray(d)?d:[d]),options:s,multiple:!0,placeholder:e?"多选城市":"Multi-select cities"}),m.jsxs("p",{className:"demo-text",children:[e?"多选已选":"Multi-selected","：",t.join(e?"、":", ")||(e?"（无）":"(none)")]}),m.jsx(ha,{value:a,onChange:d=>l(d),options:s,searchable:!0,clearable:!0,placeholder:e?"输入关键字过滤":"Type a keyword to filter"}),m.jsxs("p",{className:"demo-text",children:[e?"可搜索当前选中":"Searchable selected","：",a||(e?"（未选择）":"(none)")]}),m.jsx(ha,{value:i,onChange:d=>o(d),options:u,virtual:!0,maxHeight:200,placeholder:e?"虚拟滚动 · 1000 项":"Virtual scroll · 1000 items"}),m.jsxs("p",{className:"demo-text",children:[e?"虚拟滚动当前选中":"Virtual scroll selected","：",i||(e?"（未选择）":"(none)")]})]})}const tE=`<script setup lang="ts">
import { ref, computed } from 'vue';
import { Select } from '@xui-design/vue';
import type { SelectOption } from '@xui-design/core';
import { isZh } from '../../../i18n';

const value = ref('');
const options = computed<SelectOption[]>(() =>
  isZh()
    ? [
        { label: '北京', value: 'beijing' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' },
        { label: '深圳（暂不可选）', value: 'shenzhen', disabled: true },
      ]
    : [
        { label: 'Beijing', value: 'beijing' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Guangzhou', value: 'guangzhou' },
        { label: 'Shenzhen (unavailable)', value: 'shenzhen', disabled: true },
      ],
);
<\/script>

<template>
  <div class="demo-column">
    <Select
      v-model:value="value"
      :options="options"
      :placeholder="isZh() ? '请选择城市' : 'Select a city'"
      clearable
    />
    <p class="demo-text">
      {{ isZh() ? '当前选中' : 'Selected' }}：{{ value || (isZh() ? '（未选择）' : '(none)') }}
    </p>
  </div>
</template>
`,nE=`<script setup lang="ts">
import { computed } from 'vue';
import { Select } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const options = computed(() =>
  isZh()
    ? [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' },
      ]
    : [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ],
);
<\/script>

<template>
  <div class="demo-column">
    <Select :options="options" default-value="1" />
    <Select :options="options" default-value="1" disabled />
  </div>
</template>
`,aE=`<script setup lang="ts">
import { ref, computed } from 'vue';
import { Select } from '@xui-design/vue';
import type { SelectOption } from '@xui-design/core';
import { isZh } from '../../../i18n';

const basicOptions = computed<SelectOption[]>(() =>
  isZh()
    ? [
        { label: '北京', value: 'beijing' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' },
        { label: '深圳', value: 'shenzhen' },
      ]
    : [
        { label: 'Beijing', value: 'beijing' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Guangzhou', value: 'guangzhou' },
        { label: 'Shenzhen', value: 'shenzhen' },
      ],
);

const bigOptions = computed<SelectOption[]>(() =>
  Array.from({ length: 1000 }, (_, i) => ({
    label: isZh() ? \`选项 \${i + 1}\` : \`Option \${i + 1}\`,
    value: \`opt-\${i + 1}\`,
  })),
);

const cities = ref<string[]>(['beijing']);
const searched = ref('');
const virtualValue = ref('');
<\/script>

<template>
  <div class="demo-column">
    <Select
      v-model:value="cities"
      :options="basicOptions"
      multiple
      :placeholder="isZh() ? '多选城市' : 'Multi-select cities'"
    />
    <p class="demo-text">
      {{ isZh() ? '多选已选' : 'Multi-selected' }}：{{
        cities.join(isZh() ? '、' : ', ') || (isZh() ? '（无）' : '(none)')
      }}
    </p>

    <Select
      v-model:value="searched"
      :options="basicOptions"
      searchable
      clearable
      :placeholder="isZh() ? '输入关键字过滤' : 'Type a keyword to filter'"
    />
    <p class="demo-text">
      {{ isZh() ? '可搜索当前选中' : 'Searchable selected' }}：{{
        searched || (isZh() ? '（未选择）' : '(none)')
      }}
    </p>

    <Select
      v-model:value="virtualValue"
      :options="bigOptions"
      virtual
      :max-height="200"
      :placeholder="isZh() ? '虚拟滚动 · 1000 项' : 'Virtual scroll · 1000 items'"
    />
    <p class="demo-text">
      {{ isZh() ? '虚拟滚动当前选中' : 'Virtual scroll selected' }}：{{
        virtualValue || (isZh() ? '（未选择）' : '(none)')
      }}
    </p>
  </div>
</template>
`,lE=`import { useState } from 'react';
import { Select } from '@xui-design/react';
import type { SelectOption } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function SelectBasicDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState('');
  const options: SelectOption[] = [
    { label: isZh ? '北京' : 'Beijing', value: 'beijing' },
    { label: isZh ? '上海' : 'Shanghai', value: 'shanghai' },
    { label: isZh ? '广州' : 'Guangzhou', value: 'guangzhou' },
    {
      label: isZh ? '深圳（暂不可选）' : 'Shenzhen (unavailable)',
      value: 'shenzhen',
      disabled: true,
    },
  ];

  return (
    <div className="demo-column">
      <Select
        value={value}
        onChange={(v) => setValue(v as string)}
        options={options}
        placeholder={isZh ? '请选择城市' : 'Select a city'}
        clearable
      />
      <p className="demo-text">
        {isZh ? '当前选中' : 'Selected'}：{value || (isZh ? '（未选择）' : '(none)')}
      </p>
    </div>
  );
}
`,iE=`import { Select } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function SelectStateDemo() {
  const isZh = useIsZh();
  const options = [
    { label: isZh ? '选项一' : 'Option 1', value: '1' },
    { label: isZh ? '选项二' : 'Option 2', value: '2' },
  ];

  return (
    <div className="demo-column">
      <Select options={options} defaultValue="1" />
      <Select options={options} defaultValue="1" disabled />
    </div>
  );
}
`,oE=`import { useState } from 'react';
import { Select } from '@xui-design/react';
import type { SelectOption, SelectValue } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function SelectAdvancedDemo() {
  const isZh = useIsZh();
  const [cities, setCities] = useState<string[]>(['beijing']);
  const [searched, setSearched] = useState('');
  const [virtualValue, setVirtualValue] = useState('');
  const basicOptions: SelectOption[] = [
    { label: isZh ? '北京' : 'Beijing', value: 'beijing' },
    { label: isZh ? '上海' : 'Shanghai', value: 'shanghai' },
    { label: isZh ? '广州' : 'Guangzhou', value: 'guangzhou' },
    { label: isZh ? '深圳' : 'Shenzhen', value: 'shenzhen' },
  ];
  const bigOptions: SelectOption[] = Array.from({ length: 1000 }, (_, i) => ({
    label: isZh ? \`选项 \${i + 1}\` : \`Option \${i + 1}\`,
    value: \`opt-\${i + 1}\`,
  }));

  return (
    <div className="demo-column">
      <Select
        value={cities}
        onChange={(v: SelectValue) => setCities(Array.isArray(v) ? v : [v])}
        options={basicOptions}
        multiple
        placeholder={isZh ? '多选城市' : 'Multi-select cities'}
      />
      <p className="demo-text">
        {isZh ? '多选已选' : 'Multi-selected'}：
        {cities.join(isZh ? '、' : ', ') || (isZh ? '（无）' : '(none)')}
      </p>

      <Select
        value={searched}
        onChange={(v: SelectValue) => setSearched(v as string)}
        options={basicOptions}
        searchable
        clearable
        placeholder={isZh ? '输入关键字过滤' : 'Type a keyword to filter'}
      />
      <p className="demo-text">
        {isZh ? '可搜索当前选中' : 'Searchable selected'}：
        {searched || (isZh ? '（未选择）' : '(none)')}
      </p>

      <Select
        value={virtualValue}
        onChange={(v: SelectValue) => setVirtualValue(v as string)}
        options={bigOptions}
        virtual
        maxHeight={200}
        placeholder={isZh ? '虚拟滚动 · 1000 项' : 'Virtual scroll · 1000 items'}
      />
      <p className="demo-text">
        {isZh ? '虚拟滚动当前选中' : 'Virtual scroll selected'}：
        {virtualValue || (isZh ? '（未选择）' : '(none)')}
      </p>
    </div>
  );
}
`,sE={name:"Select",slug:"select",title:"下拉选择",category:"form",summary:{"zh-CN":"从弹出的选项面板中选择值，支持单选 / 多选 / 可搜索 / 虚拟滚动，键盘操作与 ARIA 语义完整。","en-US":"Pick values from a pop-up option panel, with single / multiple selection, search, and virtual scrolling, plus full keyboard support and ARIA semantics."},features:[{"zh-CN":"受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; v-model:value on Vue"},{"zh-CN":"multiple 多选：选中值为 string[]，点击选项切换选中且面板不关闭，tag 可单独移除","en-US":"Multiple selection via multiple: the value is a string[], clicking an option toggles it without closing the panel, and tags can be removed individually"},{"zh-CN":"searchable 可搜索：面板顶部搜索框按选项文案过滤（大小写不敏感）","en-US":"Searchable mode: a search box at the top of the panel filters options by label (case-insensitive)"},{"zh-CN":"virtual 虚拟滚动：1000+ 选项仅渲染可视窗口，maxHeight 控制面板视口高度","en-US":"Virtual scrolling via virtual: 1000+ options render only the visible window; maxHeight controls the panel viewport height"},{"zh-CN":"clearable 已选中时显示清空按钮（多选清空全部）；disabled 整体禁用","en-US":"Clear button via clearable when a value is selected (clears all in multiple mode); disabled disables the whole select"},{"zh-CN":"键盘支持：上下方向键移动高亮（跳过禁用项）、Enter 确认、Esc 关闭","en-US":"Keyboard support: ArrowUp / ArrowDown move the highlight (skipping disabled options), Enter confirms, Esc closes"}],scenarios:[{"zh-CN":"选项数量较多、不适合用 Radio 平铺的单选 / 多选表单字段。","en-US":"Single / multiple form fields with too many options to lay out with Radio."},{"zh-CN":"选项上千条的大数据量选择场景（配合 virtual 虚拟滚动）。","en-US":"Large datasets with thousands of options (with virtual scrolling)."},{"zh-CN":"需要按文案快速定位选项的检索式选择场景（配合 searchable）。","en-US":"Search-driven selection to quickly locate options by label (with searchable)."}],demos:[{id:"basic",title:{"zh-CN":"受控与清空","en-US":"Controlled & Clearable"},description:{"zh-CN":"options 中可对单项设置 disabled；clearable 支持一键清空。","en-US":"Individual options can be disabled in options; clearable offers one-click clearing."},vueComponent:F$,reactComponent:J$,vueSource:tE,reactSource:lE},{id:"state",title:{"zh-CN":"默认值与禁用","en-US":"Default Value & Disabled"},description:{"zh-CN":"defaultValue 指定初始选中；disabled 禁用整个选择器。","en-US":"defaultValue sets the initial selection; disabled disables the whole select."},vueComponent:G$,reactComponent:W$,vueSource:nE,reactSource:iE},{id:"advanced",title:{"zh-CN":"多选 / 可搜索 / 虚拟滚动","en-US":"Multiple / Searchable / Virtual"},description:{"zh-CN":"multiple 以 tag 展示选中项；searchable 按文案过滤；virtual 渲染 1000 项仅维护可视窗口。","en-US":"multiple shows selections as tags; searchable filters by label; virtual renders 1000 items while maintaining only the visible window."},vueComponent:Q$,reactComponent:eE,vueSource:aE,reactSource:oE}],api:{props:[{name:"value",type:"string | string[]",default:"—",description:{"zh-CN":"受控选中值（提供即受控）；多选模式为 string[]","en-US":"Controlled selected value (controlled when provided); a string[] in multiple mode"}},{name:"defaultValue",type:"string | string[]",default:"—",description:{"zh-CN":"非受控初始选中值","en-US":"Uncontrolled initial selected value"}},{name:"options",type:"SelectOption[]",default:"—",required:!0,description:{"zh-CN":"选项数组","en-US":"Options array"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清空按钮（仅已选中时；多选清空全部）","en-US":"Whether to show the clear button (only when a value is selected; clears all in multiple mode)"}},{name:"multiple",type:"boolean",default:"false",description:{"zh-CN":"多选模式：选中值为数组，点击选项切换选中且面板不关闭","en-US":"Multiple mode: the value is an array; clicking an option toggles it without closing the panel"}},{name:"searchable",type:"boolean",default:"false",description:{"zh-CN":"可搜索模式：面板顶部显示搜索框，按选项文案过滤","en-US":"Searchable mode: shows a search box at the top of the panel and filters options by label"}},{name:"virtual",type:"boolean",default:"false",description:{"zh-CN":"虚拟滚动模式（大数据量选项）","en-US":"Virtual scrolling mode (for large option sets)"}},{name:"maxHeight",type:"number",default:"264",description:{"zh-CN":"下拉面板最大高度（px）；虚拟模式下即视口高度","en-US":"Maximum height of the dropdown panel (px); the viewport height in virtual mode"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式（支持 CSS 自定义属性）","en-US":"Custom inline styles appended to the root element (CSS custom properties supported)"}},{name:"onChange",type:"(value: string | string[]) => void",default:"—",description:{"zh-CN":"选中值变更回调（多选载荷为 string[]）","en-US":"Selected value change callback (payload is a string[] in multiple mode)"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调","en-US":"Clear callback"}}],events:[{vue:"change",react:"onChange",payload:"value: string | string[]",description:{"zh-CN":"选中值变更（多选为最新数组）","en-US":"Fired when the selected value changes (the latest array in multiple mode)"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"清空选中值","en-US":"Fired when the selected value is cleared"}},{vue:"update:value",react:"—",payload:"string | string[]",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标（触发器 clear 与多选标签删除按钮共用）","en-US":"Custom clear icon (shared by the trigger clear button and the multiple-mode tag remove button)"}},{vue:"suffixIcon",react:"renderSuffixIcon",description:{"zh-CN":"自定义下拉箭头图标","en-US":"Custom dropdown arrow icon"}}],types:[{name:"SelectOption",definition:`interface SelectOption {
  label: string
  value: string
  disabled?: boolean
}`,description:{"zh-CN":"下拉选项配置。","en-US":"Configuration of a dropdown option."}},{name:"SelectValue",definition:"type SelectValue = string | string[];",description:{"zh-CN":"选中值：单选为 string，多选为 string[]（向后兼容：单选行为与旧版一致）。","en-US":"Selected value: a string in single mode and a string[] in multiple mode (backward compatible: single-select behavior matches the old version)."}}]},notes:[{"zh-CN":"禁用选项不响应点击与键盘高亮，选中禁用项的操作会被静默忽略。","en-US":"Disabled options do not respond to clicks or keyboard highlighting; attempts to select them are silently ignored."},{"zh-CN":"点击组件外部会收起面板且不改变选中值；多选模式点击选项后面板保持展开。","en-US":"Clicking outside closes the panel without changing the value; in multiple mode the panel stays open after an option is clicked."},{"zh-CN":"虚拟模式要求选项行高固定（默认 30px，可用 CSS 变量 --xui-select-item-height 对齐调整）。","en-US":"Virtual mode requires a fixed option row height (30px by default; align it via the --xui-select-item-height CSS variable)."},{"zh-CN":"多选删除某个 tag 即切换取消该项，触发 onChange 携带最新数组。","en-US":"Removing a tag in multiple mode toggles that option off and fires onChange with the latest array."},{"zh-CN":"自带视口避让：视口下方空间不足时面板自动向上展开（根元素加 is-drop-up），滚动与窗口 resize 时实时重算；overflow: hidden 祖先仍可能裁剪面板。","en-US":"Built-in viewport avoidance: the panel flips upward when space below is insufficient (is-drop-up is added to the root), recalculated in real time on scroll and window resize; an overflow: hidden ancestor may still clip the panel."}],a11y:[{"zh-CN":"选择器可通过 Tab 聚焦，方向键 / Enter / Esc 完成全部键盘操作；禁用项携带禁用语义。","en-US":"The select is focusable via Tab; arrow keys / Enter / Esc cover all keyboard operations, and disabled options carry disabled semantics."},{"zh-CN":"多选面板携带 aria-multiselectable；搜索框独立 role=searchbox。","en-US":"The multiple panel carries aria-multiselectable; the search box has its own role=searchbox."}]},rE={class:"demo-column"},uE={class:"demo-text"},cE=Z({__name:"basic",setup(e){const t=H("2026-10-01");return(n,a)=>(b(),x("div",rE,[N(r(Ds),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),clearable:""},null,8,["value"]),w("p",uE,U(r(T)()?"当前日期":"Current date")+"："+U(t.value||(r(T)()?"（未选择）":"(none)")),1)]))}}),dE={class:"demo-column"},mE=Z({__name:"state",setup(e){return(t,n)=>(b(),x("div",dE,[N(r(Ds),{"default-value":"2026-01-15",placeholder:r(T)()?"选择日期":"Select a date"},null,8,["placeholder"]),N(r(Ds),{"default-value":"2026-01-15",disabled:""})]))}});function pE(){const e=ne(),[t,n]=R.useState("2026-10-01");return m.jsxs("div",{className:"demo-column",children:[m.jsx(pr,{value:t,onChange:n,clearable:!0}),m.jsxs("p",{className:"demo-text",children:[e?"当前日期":"Current date","：",t||(e?"（未选择）":"(none)")]})]})}function fE(){const e=ne();return m.jsxs("div",{className:"demo-column",children:[m.jsx(pr,{defaultValue:"2026-01-15",placeholder:e?"选择日期":"Select a date"}),m.jsx(pr,{defaultValue:"2026-01-15",disabled:!0})]})}const hE=`<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref('2026-10-01');
<\/script>

<template>
  <div class="demo-column">
    <DatePicker v-model:value="value" clearable />
    <p class="demo-text">
      {{ isZh() ? '当前日期' : 'Current date' }}：{{ value || (isZh() ? '（未选择）' : '(none)') }}
    </p>
  </div>
</template>
`,vE=`<script setup lang="ts">
import { DatePicker } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <DatePicker default-value="2026-01-15" :placeholder="isZh() ? '选择日期' : 'Select a date'" />
    <DatePicker default-value="2026-01-15" disabled />
  </div>
</template>
`,gE=`import { useState } from 'react';
import { DatePicker } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function DatePickerBasicDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState('2026-10-01');

  return (
    <div className="demo-column">
      <DatePicker value={value} onChange={setValue} clearable />
      <p className="demo-text">
        {isZh ? '当前日期' : 'Current date'}：{value || (isZh ? '（未选择）' : '(none)')}
      </p>
    </div>
  );
}
`,bE=`import { DatePicker } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function DatePickerStateDemo() {
  const isZh = useIsZh();

  return (
    <div className="demo-column">
      <DatePicker defaultValue="2026-01-15" placeholder={isZh ? '选择日期' : 'Select a date'} />
      <DatePicker defaultValue="2026-01-15" disabled />
    </div>
  );
}
`,yE={name:"DatePicker",slug:"date-picker",title:"日期选择",category:"form",summary:{"zh-CN":"点击弹出月历面板选择单个日期，值统一为 YYYY-MM-DD 字符串，零日期依赖。","en-US":"Click to open a month calendar and pick a single date; the value is always a YYYY-MM-DD string, with zero date dependencies."},features:[{"zh-CN":"受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; supports v-model:value on the Vue side"},{"zh-CN":"值格式统一为 'YYYY-MM-DD' 字符串（序列化友好），非法值回退 null","en-US":"Values are always 'YYYY-MM-DD' strings (serialization-friendly); invalid values fall back to null"},{"zh-CN":"月历面板支持上个月 / 下个月切换（跨年自动滚动），42 格完整周视图","en-US":"The calendar panel switches between previous / next month (scrolling across years automatically), with a full 42-cell week view"},{"zh-CN":"clearable 清空、disabled 禁用；点击外部或选中后自动收起","en-US":"A clearable clear button and disabled state; the panel closes on outside click or after selection"}],scenarios:[{"zh-CN":"生日、预约、查询时间范围等需要选择某一天的表单场景。","en-US":"Form scenarios that pick a specific day, such as birthdays, reservations, or date-range queries."}],demos:[{id:"basic",title:{"zh-CN":"受控选择","en-US":"Controlled Selection"},description:{"zh-CN":"外部维护 YYYY-MM-DD 字符串，可一键清空。","en-US":"The YYYY-MM-DD string is maintained externally and can be cleared in one click."},vueComponent:cE,reactComponent:pE,vueSource:hE,reactSource:gE},{id:"state",title:{"zh-CN":"默认值与禁用","en-US":"Default Value & Disabled"},description:{"zh-CN":"defaultValue 定位初始日期；disabled 下不可打开面板。","en-US":"defaultValue sets the initial date; the panel cannot be opened when disabled."},vueComponent:mE,reactComponent:fE,vueSource:vE,reactSource:bE}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控选中日期（'YYYY-MM-DD'）","en-US":"Controlled selected date ('YYYY-MM-DD')"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始日期（'YYYY-MM-DD'）","en-US":"Uncontrolled initial date ('YYYY-MM-DD')"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清空按钮（仅已选中时）","en-US":"Whether to show the clear button (only when a date is selected)"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"选中值变更回调","en-US":"Callback when the selected value changes"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调","en-US":"Callback on clear"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"选中日期变更","en-US":"Fired when the selected date changes"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"清空日期","en-US":"Fired when the date is cleared"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标","en-US":"Custom clear icon"}},{vue:"calendarIcon",react:"renderCalendarIcon",description:{"zh-CN":"自定义日历图标","en-US":"Custom calendar icon"}},{vue:"prevIcon",react:"renderPrevIcon",description:{"zh-CN":"自定义上一月图标","en-US":"Custom previous-month icon"}},{vue:"nextIcon",react:"renderNextIcon",description:{"zh-CN":"自定义下一月图标","en-US":"Custom next-month icon"}}]},notes:[{"zh-CN":"契约只接受 / 输出 'YYYY-MM-DD' 字符串，不引入 Date 对象；非法字符串回退为 null。","en-US":"The contract only accepts / emits 'YYYY-MM-DD' strings with no Date objects involved; invalid strings fall back to null."},{"zh-CN":"面板打开时视图自动定位到选中日期所在月份，无选中值时定位到当前月。","en-US":"When the panel opens, the view jumps to the month of the selected date, or to the current month when nothing is selected."}],a11y:[{"zh-CN":"日期按钮可通过键盘聚焦与选择，月份切换与日期格具备可读的文本语义。","en-US":"Date buttons are keyboard-focusable and selectable; month switches and date cells carry readable text semantics."}]},SE={class:"demo-column"},xE={class:"demo-text"},_E=Z({__name:"basic",setup(e){const t=H(3.5);return(n,a)=>(b(),x("div",SE,[N(r(qu),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),min:0,max:10,step:.5,precision:2},null,8,["value"]),w("p",xE,U(r(T)()?`当前值：${t.value}（范围 0 - 10，步长 0.5，保留 2 位小数）`:`Current: ${t.value} (range 0-10, step 0.5, 2 decimals)`),1)]))}}),CE={class:"demo-column"},kE=Z({__name:"state",setup(e){return(t,n)=>(b(),x("div",CE,[N(r(qu),{"default-value":3,min:1,max:5,placeholder:r(T)()?"非受控，1 - 5":"Uncontrolled, 1 - 5"},null,8,["placeholder"]),N(r(qu),{"default-value":8,disabled:"",placeholder:r(T)()?"禁用态":"Disabled"},null,8,["placeholder"])]))}});function wE(){const e=ne(),[t,n]=R.useState(3.5);return m.jsxs("div",{className:"demo-column",children:[m.jsx(cd,{value:t,onChange:n,min:0,max:10,step:.5,precision:2}),m.jsx("p",{className:"demo-text",children:e?`当前值：${t}（范围 0 - 10，步长 0.5，保留 2 位小数）`:`Current: ${t} (range 0-10, step 0.5, 2 decimals)`})]})}function NE(){const e=ne();return m.jsxs("div",{className:"demo-column",children:[m.jsx(cd,{defaultValue:3,min:1,max:5,placeholder:e?"非受控，1 - 5":"Uncontrolled, 1 - 5"}),m.jsx(cd,{defaultValue:8,disabled:!0,placeholder:e?"禁用态":"Disabled"})]})}const TE=`<script setup lang="ts">
import { ref } from 'vue';
import { InputNumber } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref(3.5);
<\/script>

<template>
  <div class="demo-column">
    <InputNumber v-model:value="value" :min="0" :max="10" :step="0.5" :precision="2" />
    <p class="demo-text">
      {{
        isZh()
          ? \`当前值：\${value}（范围 0 - 10，步长 0.5，保留 2 位小数）\`
          : \`Current: \${value} (range 0-10, step 0.5, 2 decimals)\`
      }}
    </p>
  </div>
</template>
`,zE=`<script setup lang="ts">
import { InputNumber } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <InputNumber
      :default-value="3"
      :min="1"
      :max="5"
      :placeholder="isZh() ? '非受控，1 - 5' : 'Uncontrolled, 1 - 5'"
    />
    <InputNumber :default-value="8" disabled :placeholder="isZh() ? '禁用态' : 'Disabled'" />
  </div>
</template>
`,UE=`import { useState } from 'react';
import { InputNumber } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function InputNumberBasicDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState<number | null>(3.5);

  return (
    <div className="demo-column">
      <InputNumber value={value} onChange={setValue} min={0} max={10} step={0.5} precision={2} />
      <p className="demo-text">
        {isZh
          ? \`当前值：\${value}（范围 0 - 10，步长 0.5，保留 2 位小数）\`
          : \`Current: \${value} (range 0-10, step 0.5, 2 decimals)\`}
      </p>
    </div>
  );
}
`,$E=`import { InputNumber } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function InputNumberStateDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-column">
      <InputNumber
        defaultValue={3}
        min={1}
        max={5}
        placeholder={isZh ? '非受控，1 - 5' : 'Uncontrolled, 1 - 5'}
      />
      <InputNumber defaultValue={8} disabled placeholder={isZh ? '禁用态' : 'Disabled'} />
    </div>
  );
}
`,EE={name:"InputNumber",slug:"input-number",title:"数字输入框",category:"form",summary:{"zh-CN":"通过步进按钮或直接键入输入数字，自动完成范围收敛、步长对齐与精度处理。","en-US":"Enter numbers via stepper buttons or direct typing, with automatic range clamping, step alignment, and precision handling."},features:[{"zh-CN":"受控 / 非受控双模式，值为 number | null（清空或非法输入为 null），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; the value is number | null (null when cleared or invalid); supports v-model:value on the Vue side"},{"zh-CN":"min / max 边界收敛，step 步长（非正数回退 1），上下步进按钮循环对齐","en-US":"min / max boundary clamping and step increments (non-positive values fall back to 1); up / down steppers keep values aligned to step multiples"},{"zh-CN":"precision 小数位数（0-20），提交时统一格式化；非法 / 越界输入自动回退或 clamp","en-US":"precision decimal places (0-20), formatted uniformly on commit; invalid or out-of-range input automatically falls back or is clamped"},{"zh-CN":"disabled 禁用与 placeholder 占位文本","en-US":"disabled state and placeholder text"}],scenarios:[{"zh-CN":"数量、金额、比例等需要精确数字输入与步进调节的场景。","en-US":"Scenarios requiring precise numeric input with stepper adjustment, such as quantities, amounts, and ratios."}],demos:[{id:"basic",title:{"zh-CN":"范围 / 步长 / 精度","en-US":"Range / Step / Precision"},description:{"zh-CN":"0-10 范围、0.5 步长、两位小数，步进与键入都会自动收敛。","en-US":"Range 0-10, step 0.5, two decimal places; both stepping and typing are clamped automatically."},vueComponent:_E,reactComponent:wE,vueSource:TE,reactSource:UE},{id:"state",title:{"zh-CN":"非受控与禁用","en-US":"Uncontrolled & Disabled"},description:{"zh-CN":"defaultValue 提供初始值；越界值在提交时 clamp 到边界。","en-US":"defaultValue provides the initial value; out-of-range values are clamped to the bounds on commit."},vueComponent:kE,reactComponent:NE,vueSource:zE,reactSource:$E}],api:{props:[{name:"value",type:"number | null",default:"—",description:{"zh-CN":"受控值（null 表示空值；非法输入回退 null）","en-US":"Controlled value (null means empty; invalid input falls back to null)"}},{name:"defaultValue",type:"number | null",default:"—",description:{"zh-CN":"非受控初始值","en-US":"Uncontrolled initial value"}},{name:"min",type:"number",default:"-Infinity",description:{"zh-CN":"最小值","en-US":"Minimum value"}},{name:"max",type:"number",default:"Infinity",description:{"zh-CN":"最大值","en-US":"Maximum value"}},{name:"step",type:"number",default:"1",description:{"zh-CN":"步长（非正数回退 1）","en-US":"Step increment (non-positive values fall back to 1)"}},{name:"precision",type:"number",default:"—",description:{"zh-CN":"小数位数（0-20，缺省不应用精度）","en-US":"Decimal places (0-20; no precision applied when omitted)"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"onChange",type:"(value: number | null) => void",default:"—",description:{"zh-CN":"值变更回调（清空 / 非法输入载荷为 null）","en-US":"Value change callback (payload is null when cleared or invalid)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: number | null",description:{"zh-CN":"值提交时触发","en-US":"Fired when a value is committed"}},{vue:"update:value",react:"—",payload:"number | null",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:"upIcon",react:"renderUpIcon",description:{"zh-CN":"自定义步进递增图标","en-US":"Custom increment stepper icon"}},{vue:"downIcon",react:"renderDownIcon",description:{"zh-CN":"自定义步进递减图标","en-US":"Custom decrement stepper icon"}}]},notes:[{"zh-CN":"输入文本在失焦或回车时提交：空串 / 非法内容收敛为 null，合法值先 clamp 到 [min, max] 再按 precision 格式化。","en-US":"Typed text is committed on blur or Enter: empty or invalid input falls back to null, while valid values are clamped to [min, max] and then formatted by precision."},{"zh-CN":"步进结果始终是 step 的整数倍并按精度显示；到达边界继续步进为 no-op。","en-US":"Stepping always lands on a multiple of step and displays at the configured precision; stepping past a boundary is a no-op."}],a11y:[{"zh-CN":"步进按钮为可聚焦的原生按钮，输入区为 number 语义，禁用状态透传 disabled。","en-US":"Stepper buttons are focusable native buttons, the input carries number semantics, and the disabled state passes through the disabled attribute."}]},AE={class:"demo-row"},RE=Z({__name:"basic",setup(e){return(t,n)=>(b(),x("div",AE,[N(r(bn),null,{default:z(()=>[L(U(r(T)()?"默认":"Default"),1)]),_:1}),N(r(bn),{type:"primary"},{default:z(()=>[L(U(r(T)()?"主要":"Primary"),1)]),_:1}),N(r(bn),{type:"success"},{default:z(()=>[L(U(r(T)()?"成功":"Success"),1)]),_:1}),N(r(bn),{type:"warning"},{default:z(()=>[L(U(r(T)()?"警告":"Warning"),1)]),_:1}),N(r(bn),{type:"danger"},{default:z(()=>[L(U(r(T)()?"危险":"Danger"),1)]),_:1})]))}}),BE={class:"demo-column"},OE={class:"demo-row"},ZE=Z({__name:"closable",setup(e){const t=()=>T()?["前端","Vue","React","TypeScript"]:["Frontend","Vue","React","TypeScript"],n=H(t()),a=i=>{n.value.splice(i,1)},l=()=>{n.value=t()};return(i,o)=>(b(),x("div",BE,[w("div",OE,[(b(!0),x(ie,null,ye(n.value,(s,u)=>(b(),Q(r(bn),{key:s,size:"sm",closable:"",onClose:d=>a(u)},{default:z(()=>[L(U(s),1)]),_:2},1032,["onClose"]))),128))]),N(r(K),{size:"sm",onClick:l},{default:z(()=>[L(U(r(T)()?"重置标签":"Reset tags"),1)]),_:1})]))}});function DE(){const e=ne();return m.jsxs("div",{className:"demo-row",children:[m.jsx(yn,{children:e?"默认":"Default"}),m.jsx(yn,{type:"primary",children:e?"主要":"Primary"}),m.jsx(yn,{type:"success",children:e?"成功":"Success"}),m.jsx(yn,{type:"warning",children:e?"警告":"Warning"}),m.jsx(yn,{type:"danger",children:e?"危险":"Danger"})]})}function ME(){const e=ne(),t=()=>e?["前端","Vue","React","TypeScript"]:["Frontend","Vue","React","TypeScript"],[n,a]=R.useState(t),l=i=>{a(o=>o.filter((s,u)=>u!==i))};return m.jsxs("div",{className:"demo-column",children:[m.jsx("div",{className:"demo-row",children:n.map((i,o)=>m.jsx(yn,{size:"sm",closable:!0,onClose:()=>l(o),children:i},i))}),m.jsx(P,{size:"sm",onClick:()=>a(t),children:e?"重置标签":"Reset tags"})]})}const jE=`<script setup lang="ts">
import { Tag } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-row">
    <Tag>{{ isZh() ? '默认' : 'Default' }}</Tag>
    <Tag type="primary">{{ isZh() ? '主要' : 'Primary' }}</Tag>
    <Tag type="success">{{ isZh() ? '成功' : 'Success' }}</Tag>
    <Tag type="warning">{{ isZh() ? '警告' : 'Warning' }}</Tag>
    <Tag type="danger">{{ isZh() ? '危险' : 'Danger' }}</Tag>
  </div>
</template>
`,VE=`<script setup lang="ts">
import { ref } from 'vue';
import { Button, Tag } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const initialTags = () =>
  isZh() ? ['前端', 'Vue', 'React', 'TypeScript'] : ['Frontend', 'Vue', 'React', 'TypeScript'];

const tags = ref(initialTags());

const remove = (index: number) => {
  tags.value.splice(index, 1);
};

const reset = () => {
  tags.value = initialTags();
};
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Tag v-for="(tag, index) in tags" :key="tag" size="sm" closable @close="remove(index)">
        {{ tag }}
      </Tag>
    </div>
    <Button size="sm" @click="reset">{{ isZh() ? '重置标签' : 'Reset tags' }}</Button>
  </div>
</template>
`,LE=`import { Tag } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TagBasicDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-row">
      <Tag>{isZh ? '默认' : 'Default'}</Tag>
      <Tag type="primary">{isZh ? '主要' : 'Primary'}</Tag>
      <Tag type="success">{isZh ? '成功' : 'Success'}</Tag>
      <Tag type="warning">{isZh ? '警告' : 'Warning'}</Tag>
      <Tag type="danger">{isZh ? '危险' : 'Danger'}</Tag>
    </div>
  );
}
`,HE=`import { useState } from 'react';
import { Button, Tag } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TagClosableDemo() {
  const isZh = useIsZh();
  const buildTags = () =>
    isZh ? ['前端', 'Vue', 'React', 'TypeScript'] : ['Frontend', 'Vue', 'React', 'TypeScript'];
  const [tags, setTags] = useState(buildTags);
  const remove = (index: number) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="demo-column">
      <div className="demo-row">
        {tags.map((tag, index) => (
          <Tag key={tag} size="sm" closable onClose={() => remove(index)}>
            {tag}
          </Tag>
        ))}
      </div>
      <Button size="sm" onClick={() => setTags(buildTags)}>
        {isZh ? '重置标签' : 'Reset tags'}
      </Button>
    </div>
  );
}
`,IE={name:"Tag",slug:"tag",title:"标签",category:"display",summary:{"zh-CN":"用于标记和分类的小型标签，支持五种语义类型、两种尺寸与可关闭交互。","en-US":"A small tag for labeling and categorization, with five semantic types, two sizes, and closable interaction."},features:[{"zh-CN":"五种语义类型：default / primary / success / warning / danger","en-US":"Five semantic types: default / primary / success / warning / danger"},{"zh-CN":"sm / md 两种尺寸","en-US":"Two sizes: sm / md"},{"zh-CN":"closable 显示关闭按钮，点击后组件自动隐藏并触发 close","en-US":"closable shows a close button; clicking it hides the component and fires close"}],scenarios:[{"zh-CN":"分类标记、可删除的筛选条件、状态简要标识等场景。","en-US":"Category labels, removable filter criteria, brief status indicators, and more."}],demos:[{id:"basic",title:{"zh-CN":"语义类型","en-US":"Semantic Types"},description:{"zh-CN":"通过 type 切换五种内置色彩语义。","en-US":"Use type to switch between the five built-in color semantics."},vueComponent:RE,reactComponent:DE,vueSource:jE,reactSource:LE},{id:"closable",title:{"zh-CN":"可关闭标签","en-US":"Closable Tag"},description:{"zh-CN":"closable 标签关闭后自动隐藏；由外部在 close 中同步数据源。","en-US":"A closable tag hides itself after closing; sync the data source externally in the close handler."},vueComponent:ZE,reactComponent:ME,vueSource:VE,reactSource:HE}],api:{props:[{name:"type",type:"'default' | 'primary' | 'success' | 'warning' | 'danger'",default:"'default'",description:{"zh-CN":"语义类型","en-US":"Semantic type"}},{name:"size",type:"'sm' | 'md'",default:"'md'",description:{"zh-CN":"尺寸","en-US":"Size"}},{name:"closable",type:"boolean",default:"false",description:{"zh-CN":"是否可关闭（显示关闭按钮）","en-US":"Whether the tag is closable (shows a close button)"}},{name:"onClose",type:"() => void",default:"—",description:{"zh-CN":"关闭回调（组件隐藏后触发）","en-US":"Close callback (fired after the component hides)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"close",react:"onClose",payload:"—",description:{"zh-CN":"点击关闭按钮、组件隐藏后触发","en-US":"Fired after the close button is clicked and the component hides"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"标签内容","en-US":"Tag content"}},{vue:"closeIcon",react:"renderCloseIcon",description:{"zh-CN":"自定义关闭图标（替换内置 close）","en-US":"Custom close icon (replaces the built-in close)"}}]},notes:[{"zh-CN":'点击关闭后组件内部先隐藏再回调；如需"恢复显示"（如重置示例），需重新挂载组件（Vue 用 key、React 重挂载）。',"en-US":'After the close click, the component hides internally before firing the callback; to "bring it back" (e.g. resetting a demo), remount the component (via key in Vue or a remount in React).'}],a11y:[{"zh-CN":'关闭按钮具备按钮语义与可读的"关闭"文本，键盘可聚焦操作。',"en-US":'The close button has button semantics and a readable "Close" label, and is keyboard-focusable.'}]},FE={class:"demo-column"},qE={class:"demo-row"},GE=Z({__name:"basic",setup(e){const t=H(35),n=l=>{t.value=Math.min(100,Math.max(0,t.value+l))},a=F(()=>t.value);return(l,i)=>(b(),x("div",FE,[N(r(ji),{percent:t.value},null,8,["percent"]),N(r(ji),{type:"circle",percent:a.value,"stroke-width":8},null,8,["percent"]),w("div",qE,[N(r(K),{size:"sm",onClick:i[0]||(i[0]=o=>n(-10))},{default:z(()=>[...i[2]||(i[2]=[L("-10%",-1)])]),_:1}),N(r(K),{size:"sm",type:"primary",onClick:i[1]||(i[1]=o=>n(10))},{default:z(()=>[...i[3]||(i[3]=[L("+10%",-1)])]),_:1})])]))}}),YE={class:"demo-column"},KE=Z({__name:"status",setup(e){return(t,n)=>(b(),x("div",YE,[N(r(ji),{percent:100}),N(r(ji),{percent:100,status:"error"}),N(r(ji),{percent:60})]))}});function PE(){const[e,t]=R.useState(35),n=a=>{t(l=>Math.min(100,Math.max(0,l+a)))};return m.jsxs("div",{className:"demo-column",children:[m.jsx(Vi,{percent:e}),m.jsx(Vi,{type:"circle",percent:e,strokeWidth:8}),m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{size:"sm",onClick:()=>n(-10),children:"-10%"}),m.jsx(P,{size:"sm",type:"primary",onClick:()=>n(10),children:"+10%"})]})]})}function XE(){return m.jsxs("div",{className:"demo-column",children:[m.jsx(Vi,{percent:100}),m.jsx(Vi,{percent:100,status:"error"}),m.jsx(Vi,{percent:60})]})}const QE=`<script setup lang="ts">
import { computed, ref } from 'vue';
import { Button, Progress } from '@xui-design/vue';

const percent = ref(35);
const add = (delta: number) => {
  percent.value = Math.min(100, Math.max(0, percent.value + delta));
};
const circlePercent = computed(() => percent.value);
<\/script>

<template>
  <div class="demo-column">
    <Progress :percent="percent" />
    <Progress type="circle" :percent="circlePercent" :stroke-width="8" />
    <div class="demo-row">
      <Button size="sm" @click="add(-10)">-10%</Button>
      <Button size="sm" type="primary" @click="add(10)">+10%</Button>
    </div>
  </div>
</template>
`,JE=`<script setup lang="ts">
import { Progress } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-column">
    <Progress :percent="100" />
    <Progress :percent="100" status="error" />
    <Progress :percent="60" />
  </div>
</template>
`,WE=`import { useState } from 'react';
import { Button, Progress } from '@xui-design/react';

export default function ProgressBasicDemo() {
  const [percent, setPercent] = useState(35);
  const add = (delta: number) => {
    setPercent((prev) => Math.min(100, Math.max(0, prev + delta)));
  };

  return (
    <div className="demo-column">
      <Progress percent={percent} />
      <Progress type="circle" percent={percent} strokeWidth={8} />
      <div className="demo-row">
        <Button size="sm" onClick={() => add(-10)}>
          -10%
        </Button>
        <Button size="sm" type="primary" onClick={() => add(10)}>
          +10%
        </Button>
      </div>
    </div>
  );
}
`,eA=`import { Progress } from '@xui-design/react';

export default function ProgressStatusDemo() {
  return (
    <div className="demo-column">
      <Progress percent={100} />
      <Progress percent={100} status="error" />
      <Progress percent={60} />
    </div>
  );
}
`,tA={name:"Progress",slug:"progress",title:"进度条",category:"display",summary:{"zh-CN":"展示任务进度百分比，支持线性与环形两种形态及成功 / 失败状态色。","en-US":"Displays task progress as a percentage, in linear or circular form, with success / error status colors."},features:[{"zh-CN":"type 支持 'line' 线性与 'circle' 环形（SVG 描边）","en-US":"type supports 'line' (linear) and 'circle' (circular, SVG stroke)"},{"zh-CN":"percent 自动收敛到 [0, 100]，非数值按 0 处理","en-US":"percent is clamped to [0, 100] automatically; non-numeric input is treated as 0"},{"zh-CN":"status 支持 normal / success / error；percent 达到 100 且未显式指定时自动派生 success","en-US":"status supports normal / success / error; success is derived automatically when percent reaches 100 and no status is set explicitly"},{"zh-CN":"strokeWidth 自定义条粗 / 描边宽度，showText 控制百分比文本","en-US":"strokeWidth customizes the bar / stroke width; showText toggles the percentage text"}],scenarios:[{"zh-CN":"文件上传 / 下载、任务处理进度、加载完成度展示等场景。","en-US":"File upload / download, task processing progress, loading completion display, and more."}],demos:[{id:"basic",title:{"zh-CN":"线性与环形","en-US":"Line & Circle"},description:{"zh-CN":"同一百分比驱动 line 与 circle 两种形态，按钮模拟进度变化。","en-US":"One percentage drives both the line and circle forms; buttons simulate progress changes."},vueComponent:GE,reactComponent:PE,vueSource:QE,reactSource:WE},{id:"status",title:{"zh-CN":"成功与失败状态","en-US":"Success & Error States"},description:{"zh-CN":'100% 默认派生 success；显式 status="error" 显示失败色。',"en-US":'100% derives success by default; an explicit status="error" shows the error color.'},vueComponent:KE,reactComponent:XE,vueSource:JE,reactSource:eA}],api:{props:[{name:"percent",type:"number",default:"0",description:{"zh-CN":"进度百分比（0-100，越界自动收敛）","en-US":"Progress percentage (0-100; out-of-range values are clamped)"}},{name:"type",type:"'line' | 'circle'",default:"'line'",description:{"zh-CN":"进度条类型","en-US":"Progress bar type"}},{name:"strokeWidth",type:"number",default:"6",description:{"zh-CN":"条粗（px）；circle 类型为 SVG 描边宽度","en-US":"Bar thickness (px); the SVG stroke width for the circle type"}},{name:"showText",type:"boolean",default:"true",description:{"zh-CN":"是否显示百分比文本","en-US":"Whether to show the percentage text"}},{name:"status",type:"'normal' | 'success' | 'error'",default:"'normal'",description:{"zh-CN":"进度状态（100% 自动派生 success）","en-US":"Progress status (success is derived automatically at 100%)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],types:[{name:"ProgressStatus",definition:`type ProgressType = 'line' | 'circle'
type ProgressStatus = 'normal' | 'success' | 'error'`,description:{"zh-CN":"进度条形态与状态枚举。","en-US":"Enums of the progress form and status."}}]},notes:[{"zh-CN":"纯展示组件，无事件；达到 100% 时若未显式传入 status，颜色自动切换为成功色。","en-US":"A purely presentational component with no events; at 100% the color switches to the success color unless status is passed explicitly."}],a11y:[{"zh-CN":'进度根节点携带进度百分比语义（role="progressbar" 及 aria-valuenow / min / max）。',"en-US":'The root element carries progress semantics (role="progressbar" with aria-valuenow / min / max).'}]},nA={class:"demo-column"},aA={class:"demo-row"},lA={class:"demo-row"},iA=Z({__name:"basic",setup(e){const t=H(5);return(n,a)=>(b(),x("div",nA,[w("div",aA,[N(r(Cl),{count:t.value},{default:z(()=>[N(r(K),null,{default:z(()=>[L(U(r(T)()?"消息":"Messages"),1)]),_:1})]),_:1},8,["count"]),N(r(Cl),{count:120,max:99},{default:z(()=>[N(r(K),null,{default:z(()=>[L(U(r(T)()?"通知":"Notifications"),1)]),_:1})]),_:1})]),w("div",lA,[N(r(K),{size:"sm",onClick:a[0]||(a[0]=l=>t.value=Math.max(0,t.value-1))},{default:z(()=>[...a[2]||(a[2]=[L("-1",-1)])]),_:1}),N(r(K),{size:"sm",type:"primary",onClick:a[1]||(a[1]=l=>t.value++)},{default:z(()=>[L(U(r(T)()?"+1（试试超过 99）":"+1 (try over 99)"),1)]),_:1})])]))}}),oA={class:"demo-row"},sA={class:"demo-anchor"},rA={class:"demo-anchor"},uA=Z({__name:"variants",setup(e){return(t,n)=>(b(),x("div",oA,[N(r(Cl),{dot:""},{default:z(()=>[w("span",sA,U(r(T)()?"小红点":"Dot"),1)]),_:1}),N(r(Cl),{count:0,"show-zero":""},{default:z(()=>[...n[0]||(n[0]=[w("span",{class:"demo-anchor"},"showZero",-1)])]),_:1}),N(r(Cl),{count:0},{default:z(()=>[w("span",rA,U(r(T)()?"零值隐藏":"Hidden when zero"),1)]),_:1}),N(r(Cl),{count:8})]))}}),cA=re(uA,[["__scopeId","data-v-9ee9e1ed"]]);function dA(){const e=ne(),[t,n]=R.useState(5);return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{className:"demo-row",children:[m.jsx(wl,{count:t,children:m.jsx(P,{children:e?"消息":"Messages"})}),m.jsx(wl,{count:120,max:99,children:m.jsx(P,{children:e?"通知":"Notifications"})})]}),m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{size:"sm",onClick:()=>n(a=>Math.max(0,a-1)),children:"-1"}),m.jsx(P,{size:"sm",type:"primary",onClick:()=>n(a=>a+1),children:e?"+1（试试超过 99）":"+1 (try over 99)"})]})]})}const Eu={padding:"6px 12px",background:"#f1f5f9",borderRadius:"6px"};function mA(){const e=ne();return m.jsxs("div",{className:"demo-row",children:[m.jsx(wl,{dot:!0,children:m.jsx("span",{style:Eu,children:e?"小红点":"Dot"})}),m.jsx(wl,{count:0,showZero:!0,children:m.jsx("span",{style:Eu,children:"showZero"})}),m.jsx(wl,{count:0,children:m.jsx("span",{style:Eu,children:e?"零值隐藏":"Hidden when zero"})}),m.jsx(wl,{count:8})]})}const pA=`<script setup lang="ts">
import { ref } from 'vue';
import { Badge, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const count = ref(5);
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Badge :count="count">
        <Button>{{ isZh() ? '消息' : 'Messages' }}</Button>
      </Badge>
      <Badge :count="120" :max="99">
        <Button>{{ isZh() ? '通知' : 'Notifications' }}</Button>
      </Badge>
    </div>
    <div class="demo-row">
      <Button size="sm" @click="count = Math.max(0, count - 1)">-1</Button>
      <Button size="sm" type="primary" @click="count++">
        {{ isZh() ? '+1（试试超过 99）' : '+1 (try over 99)' }}
      </Button>
    </div>
  </div>
</template>
`,fA=`<script setup lang="ts">
import { Badge } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-row">
    <Badge dot>
      <span class="demo-anchor">{{ isZh() ? '小红点' : 'Dot' }}</span>
    </Badge>
    <Badge :count="0" show-zero>
      <span class="demo-anchor">showZero</span>
    </Badge>
    <Badge :count="0">
      <span class="demo-anchor">{{ isZh() ? '零值隐藏' : 'Hidden when zero' }}</span>
    </Badge>
    <Badge :count="8" />
  </div>
</template>

<style scoped>
.demo-anchor {
  padding: 6px 12px;
  background: #f1f5f9;
  border-radius: 6px;
}
</style>
`,hA=`import { useState } from 'react';
import { Badge, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function BadgeBasicDemo() {
  const isZh = useIsZh();
  const [count, setCount] = useState(5);

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Badge count={count}>
          <Button>{isZh ? '消息' : 'Messages'}</Button>
        </Badge>
        <Badge count={120} max={99}>
          <Button>{isZh ? '通知' : 'Notifications'}</Button>
        </Badge>
      </div>
      <div className="demo-row">
        <Button size="sm" onClick={() => setCount((c) => Math.max(0, c - 1))}>
          -1
        </Button>
        <Button size="sm" type="primary" onClick={() => setCount((c) => c + 1)}>
          {isZh ? '+1（试试超过 99）' : '+1 (try over 99)'}
        </Button>
      </div>
    </div>
  );
}
`,vA=`import { Badge } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

const anchorStyle = {
  padding: '6px 12px',
  background: '#f1f5f9',
  borderRadius: '6px',
};

export default function BadgeVariantsDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-row">
      <Badge dot>
        <span style={anchorStyle}>{isZh ? '小红点' : 'Dot'}</span>
      </Badge>
      <Badge count={0} showZero>
        <span style={anchorStyle}>showZero</span>
      </Badge>
      <Badge count={0}>
        <span style={anchorStyle}>{isZh ? '零值隐藏' : 'Hidden when zero'}</span>
      </Badge>
      <Badge count={8} />
    </div>
  );
}
`,gA={name:"Badge",slug:"badge",title:"徽标数",category:"display",summary:{"zh-CN":"以角标形式展示消息数量或状态红点，可包裹任意内容，也可独立使用。","en-US":"Shows a message count or status dot as a corner badge; can wrap any content or be used standalone."},features:[{"zh-CN":"包裹模式：徽标悬浮于内容右上角；无子内容时独立渲染","en-US":"Wrapper mode: the badge floats at the top-right corner of the content; renders standalone without children"},{"zh-CN":"count 超过 max 时显示 `${max}+`（max 默认 99）","en-US":"Shows `${max}+` when count exceeds max (max defaults to 99)"},{"zh-CN":"dot 点状徽标，忽略具体数值；showZero 控制 count 为 0 时是否显示","en-US":"dot renders a dot badge ignoring the numeric value; showZero controls whether a count of 0 is shown"}],scenarios:[{"zh-CN":"未读消息 / 通知数量、有新内容的状态红点等场景。","en-US":"Unread message / notification counts, status dots for new content, and more."}],demos:[{id:"basic",title:{"zh-CN":"计数与上限","en-US":"Count & Max"},description:{"zh-CN":"count 动态变化，超过 max 后折叠为 99+。","en-US":"count changes dynamically and collapses to 99+ once it exceeds max."},vueComponent:iA,reactComponent:dA,vueSource:pA,reactSource:hA},{id:"variants",title:{"zh-CN":"红点 / 零值 / 独立","en-US":"Dot / Zero / Standalone"},description:{"zh-CN":"dot 仅提示有更新；showZero 决定 0 是否展示；无包裹内容时独立显示。","en-US":"dot only hints that there are updates; showZero decides whether 0 is shown; renders standalone without wrapped content."},vueComponent:cA,reactComponent:mA,vueSource:fA,reactSource:vA}],api:{props:[{name:"count",type:"number",default:"—",description:{"zh-CN":"徽标数值（未提供时不显示；dot 模式仅作无障碍语义）","en-US":"Badge count (hidden when not provided; only serves as accessibility semantics in dot mode)"}},{name:"max",type:"number",default:"99",description:{"zh-CN":"数值上限（超出显示 `${max}+`）","en-US":"Maximum value (shows `${max}+` when exceeded)"}},{name:"dot",type:"boolean",default:"false",description:{"zh-CN":"点状徽标（忽略 count 与 max）","en-US":"Dot badge (ignores count and max)"}},{name:"showZero",type:"boolean",default:"false",description:{"zh-CN":"count 为 0 时是否显示徽标（默认隐藏）","en-US":"Whether to show the badge when count is 0 (hidden by default)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"徽标包裹的内容（未提供时徽标独立渲染）","en-US":"Content wrapped by the badge (the badge renders standalone when not provided)"}}]},notes:[{"zh-CN":"纯展示组件，无事件；count 为 0 且未开启 showZero 时徽标不占位。","en-US":"A purely presentational component with no events; the badge takes up no space when count is 0 and showZero is off."}],a11y:[{"zh-CN":"数值徽标以可读文本暴露数量语义；dot 模式作为状态提示，装饰性内容对读屏隐藏。","en-US":"Numeric badges expose the count as readable text; dot mode acts as a status hint, and decorative content is hidden from screen readers."}]},bA={class:"demo-row"},yA="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%236366f1'/><text x='40' y='52' font-size='36' fill='white' text-anchor='middle'>X</text></svg>",SA=Z({__name:"basic",setup(e){return(t,n)=>(b(),x("div",bA,[N(r(ia),{src:yA,alt:r(T)()?"X 用户头像":"X user avatar"},null,8,["alt"]),N(r(ia),null,{default:z(()=>[L(U(r(T)()?"杨":"Yang"),1)]),_:1}),N(r(ia),{size:"sm"},{default:z(()=>[L(U(r(T)()?"小":"Sm"),1)]),_:1}),N(r(ia),{size:"lg"},{default:z(()=>[L(U(r(T)()?"大":"Lg"),1)]),_:1})]))}}),xA={class:"demo-column"},_A={class:"demo-row"},CA={class:"demo-row"},kA=Z({__name:"shape",setup(e){return(t,n)=>(b(),x("div",xA,[w("div",_A,[N(r(ia),{shape:"square"},{default:z(()=>[L(U(r(T)()?"方":"Square"),1)]),_:1}),N(r(ia),{shape:"circle"},{default:z(()=>[L(U(r(T)()?"圆":"Circle"),1)]),_:1})]),w("div",CA,[N(r(ia),{src:"/not-exist.png",onError:n[0]||(n[0]=()=>console.log("image load failed"))},{default:z(()=>[L(U(r(T)()?"失败回退":"Fallback"),1)]),_:1}),N(r(ia),{src:"/not-exist.png"})])]))}}),wA="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%236366f1'/><text x='40' y='52' font-size='36' fill='white' text-anchor='middle'>X</text></svg>";function NA(){const e=ne();return m.jsxs("div",{className:"demo-row",children:[m.jsx(oa,{src:wA,alt:e?"X 用户头像":"X user avatar"}),m.jsx(oa,{children:e?"杨":"Yang"}),m.jsx(oa,{size:"sm",children:e?"小":"Sm"}),m.jsx(oa,{size:"lg",children:e?"大":"Lg"})]})}function TA(){const e=ne();return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{className:"demo-row",children:[m.jsx(oa,{shape:"square",children:e?"方":"Square"}),m.jsx(oa,{shape:"circle",children:e?"圆":"Circle"})]}),m.jsxs("div",{className:"demo-row",children:[m.jsx(oa,{src:"/not-exist.png",onError:()=>console.log("image load failed"),children:e?"失败回退":"Fallback"}),m.jsx(oa,{src:"/not-exist.png"})]})]})}const zA=`<script setup lang="ts">
import { Avatar } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const avatarSrc =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%236366f1'/><text x='40' y='52' font-size='36' fill='white' text-anchor='middle'>X</text></svg>";
<\/script>

<template>
  <div class="demo-row">
    <Avatar :src="avatarSrc" :alt="isZh() ? 'X 用户头像' : 'X user avatar'" />
    <Avatar>{{ isZh() ? '杨' : 'Yang' }}</Avatar>
    <Avatar size="sm">{{ isZh() ? '小' : 'Sm' }}</Avatar>
    <Avatar size="lg">{{ isZh() ? '大' : 'Lg' }}</Avatar>
  </div>
</template>
`,UA=`<script setup lang="ts">
import { Avatar } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Avatar shape="square">{{ isZh() ? '方' : 'Square' }}</Avatar>
      <Avatar shape="circle">{{ isZh() ? '圆' : 'Circle' }}</Avatar>
    </div>
    <div class="demo-row">
      <Avatar src="/not-exist.png" @error="() => console.log('image load failed')">
        {{ isZh() ? '失败回退' : 'Fallback' }}
      </Avatar>
      <Avatar src="/not-exist.png" />
    </div>
  </div>
</template>
`,$A=`import { Avatar } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

const avatarSrc =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%236366f1'/><text x='40' y='52' font-size='36' fill='white' text-anchor='middle'>X</text></svg>";

export default function AvatarBasicDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-row">
      <Avatar src={avatarSrc} alt={isZh ? 'X 用户头像' : 'X user avatar'} />
      <Avatar>{isZh ? '杨' : 'Yang'}</Avatar>
      <Avatar size="sm">{isZh ? '小' : 'Sm'}</Avatar>
      <Avatar size="lg">{isZh ? '大' : 'Lg'}</Avatar>
    </div>
  );
}
`,EA=`import { Avatar } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function AvatarShapeDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-column">
      <div className="demo-row">
        <Avatar shape="square">{isZh ? '方' : 'Square'}</Avatar>
        <Avatar shape="circle">{isZh ? '圆' : 'Circle'}</Avatar>
      </div>
      <div className="demo-row">
        <Avatar src="/not-exist.png" onError={() => console.log('image load failed')}>
          {isZh ? '失败回退' : 'Fallback'}
        </Avatar>
        <Avatar src="/not-exist.png" />
      </div>
    </div>
  );
}
`,AA={name:"Avatar",slug:"avatar",title:"头像",category:"display",summary:{"zh-CN":"展示用户或事物的图片 / 文字头像，支持三种尺寸、圆形方形与图片失败回退。","en-US":"Displays an image or text avatar for a user or entity, with three sizes, circle / square shapes, and image-failure fallback."},features:[{"zh-CN":"size 支持 sm / md / lg，shape 支持 circle / square","en-US":"size supports sm / md / lg; shape supports circle / square"},{"zh-CN":"内容优先级：加载成功的图片 ＞ 默认插槽 / children（文字图标）＞ 默认图标","en-US":"Content priority: a successfully loaded image > default slot / children (text or icon) > default icon"},{"zh-CN":"src 加载失败自动回退并触发 error 事件","en-US":"Falls back automatically and fires the error event when src fails to load"}],scenarios:[{"zh-CN":"用户信息、评论列表、导航栏账号入口等需要形象标识的场景。","en-US":"User profiles, comment lists, navbar account entries, and other scenarios needing a visual identity."}],demos:[{id:"basic",title:{"zh-CN":"图片 / 文字 / 尺寸","en-US":"Image / Text / Sizes"},description:{"zh-CN":"src 为图片地址；无图时显示插槽文字；size 控制三档尺寸。","en-US":"src sets the image URL; slot text shows when there is no image; size controls the three size options."},vueComponent:SA,reactComponent:NA,vueSource:zA,reactSource:$A},{id:"shape",title:{"zh-CN":"形状与失败回退","en-US":"Shapes & Failure Fallback"},description:{"zh-CN":"shape 切换方形 / 圆形；图片加载失败时回退为插槽内容或默认图标。","en-US":"shape switches between square and circle; falls back to slot content or the default icon when the image fails to load."},vueComponent:kA,reactComponent:TA,vueSource:UA,reactSource:EA}],api:{props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:{"zh-CN":"头像尺寸","en-US":"Avatar size"}},{name:"shape",type:"'circle' | 'square'",default:"'circle'",description:{"zh-CN":"头像形状","en-US":"Avatar shape"}},{name:"src",type:"string",default:"—",description:{"zh-CN":"图片地址（加载失败时回退默认图标或插槽内容）","en-US":"Image URL (falls back to the default icon or slot content on load failure)"}},{name:"alt",type:"string",default:"—",description:{"zh-CN":"图片 alt（未提供时按装饰图处理，读屏跳过）","en-US":"Image alt (treated as decorative and skipped by screen readers when not provided)"}},{name:"onError",type:"() => void",default:"—",description:{"zh-CN":"图片加载失败回调","en-US":"Callback when the image fails to load"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"error",react:"onError",payload:"—",description:{"zh-CN":"图片加载失败时触发","en-US":"Fired when the image fails to load"}}],slots:[{vue:"icon",react:"renderIcon",description:{"zh-CN":"自定义占位图标（无 src / 加载失败时替换内置 user 图标）","en-US":"Custom placeholder icon (replaces the built-in user icon when there is no src or loading fails)"}},{vue:"default",react:"children",description:{"zh-CN":"自定义内容（文字 / 图标；优先级低于成功的图片）","en-US":"Custom content (text / icon; lower priority than a successfully loaded image)"}}]},notes:[{"zh-CN":"同时提供 src 与插槽内容时，图片加载成功只显示图片；失败后才显示插槽回退内容。","en-US":"When both src and slot content are provided, only the image shows on successful load; the slot fallback appears only after a failure."}],a11y:[{"zh-CN":"提供 alt 时图片具备替代文本；纯装饰头像建议省略 alt，由读屏跳过。","en-US":"The image gets alternative text when alt is provided; omit alt for purely decorative avatars so screen readers skip them."}]},RA=Z({__name:"basic",setup(e){return(t,n)=>(b(),Q(r(Lu),{description:r(T)()?"暂无数据，去创建第一条吧":"No data yet — create the first one"},{default:z(()=>[N(r(K),{type:"primary"},{default:z(()=>[L(U(r(T)()?"立即创建":"Create now"),1)]),_:1})]),_:1},8,["description"]))}}),BA={class:"demo-column"},OA=Z({__name:"image",setup(e){return(t,n)=>(b(),x("div",BA,[N(r(Lu),{description:r(T)()?"自定义插画":"Custom illustration"},{image:z(()=>[...n[0]||(n[0]=[L("🔍",-1)])]),_:1},8,["description"]),N(r(Lu))]))}});function ZA(){const e=ne();return m.jsx(Pu,{description:e?"暂无数据，去创建第一条吧":"No data yet — create the first one",children:m.jsx(P,{type:"primary",children:e?"立即创建":"Create now"})})}function DA(){const e=ne();return m.jsxs("div",{className:"demo-column",children:[m.jsx(Pu,{description:e?"自定义插画":"Custom illustration",renderImage:()=>m.jsx("span",{style:{fontSize:40},children:"🔍"})}),m.jsx(Pu,{})]})}const MA=`<script setup lang="ts">
import { Empty, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <Empty :description="isZh() ? '暂无数据，去创建第一条吧' : 'No data yet — create the first one'">
    <Button type="primary">{{ isZh() ? '立即创建' : 'Create now' }}</Button>
  </Empty>
</template>
`,jA=`<script setup lang="ts">
import { Empty } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <Empty :description="isZh() ? '自定义插画' : 'Custom illustration'">
      <template #image>🔍</template>
    </Empty>
    <Empty />
  </div>
</template>
`,VA=`import { Empty, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function EmptyBasicDemo() {
  const isZh = useIsZh();
  return (
    <Empty description={isZh ? '暂无数据，去创建第一条吧' : 'No data yet — create the first one'}>
      <Button type="primary">{isZh ? '立即创建' : 'Create now'}</Button>
    </Empty>
  );
}
`,LA=`import { Empty } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function EmptyImageDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-column">
      <Empty
        description={isZh ? '自定义插画' : 'Custom illustration'}
        renderImage={() => <span style={{ fontSize: 40 }}>🔍</span>}
      />
      <Empty />
    </div>
  );
}
`,HA={name:"Empty",slug:"empty",title:"空状态",category:"display",summary:{"zh-CN":"空数据 / 无结果时的占位展示，内置默认插画，支持自定义描述、插画与操作区。","en-US":"Placeholder for empty data or no results, with a built-in default illustration and customizable description, illustration, and action area."},features:[{"zh-CN":"内置默认插画，description 提供描述文案（空白时不渲染描述，避免内置 i18n）","en-US":"Built-in default illustration; description provides the text (not rendered when blank, avoiding built-in i18n)"},{"zh-CN":"image 插槽 / renderImage 自定义插画，default 插槽放置操作按钮","en-US":"Customize the illustration via the image slot / renderImage; place action buttons in the default slot"}],scenarios:[{"zh-CN":"列表无数据、搜索无结果、首次使用引导等场景。","en-US":"Scenarios such as empty lists, no search results, or first-use onboarding."}],demos:[{id:"basic",title:{"zh-CN":"描述与操作","en-US":"Description & Action"},description:{"zh-CN":'默认插槽放置"去创建"等引导动作。',"en-US":'The default slot holds guiding actions such as "Create".'},vueComponent:RA,reactComponent:ZA,vueSource:MA,reactSource:VA},{id:"image",title:{"zh-CN":"自定义插画与纯默认","en-US":"Custom Illustration & Pure Default"},description:{"zh-CN":"image 插槽覆盖默认插画；不传 description 时仅展示插画。","en-US":"The image slot overrides the default illustration; when description is omitted, only the illustration is shown."},vueComponent:OA,reactComponent:DA,vueSource:jA,reactSource:LA}],api:{props:[{name:"description",type:"string",default:"—",description:{"zh-CN":"空状态描述文案（未提供或空白时不渲染）","en-US":"Description text of the empty state (not rendered when omitted or blank)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":'底部动作区（如"去创建"按钮）',"en-US":'Bottom action area (e.g., a "Create" button)'}},{vue:"image",react:"renderImage",description:{"zh-CN":"自定义插画（覆盖默认插画）","en-US":"Custom illustration (overrides the default one)"}}]},notes:[{"zh-CN":"组件不内置任何文案，description 完全由使用方决定，便于国际化。","en-US":"The component ships no built-in text; description is fully controlled by the consumer, which simplifies internationalization."}],a11y:[{"zh-CN":"空状态作为说明性区域，描述文本可被读屏朗读，装饰性插画标注为装饰图。","en-US":"The empty state acts as a descriptive region: the description text can be read by screen readers, and the decorative illustration is marked as decorative."}]},IA={class:"demo-column"},FA={class:"demo-article"},qA=Z({__name:"basic",setup(e){const t=H(!0);return(n,a)=>(b(),x("div",IA,[N(r(Fu),{loading:t.value,rows:3},{default:z(()=>[w("div",FA,[w("h4",null,U(r(T)()?"加载完成后的真实内容":"Real content after loading"),1),w("p",null,U(r(T)()?"这是一段从服务端获取的数据，loading 为 false 时替换骨架屏渲染。":"This is data fetched from the server; skeleton is replaced when loading is false."),1)])]),_:1},8,["loading"]),N(r(K),{size:"sm",onClick:a[0]||(a[0]=l=>t.value=!t.value)},{default:z(()=>[L(U(r(T)()?t.value?"加载完成":"重新加载":t.value?"Finish loading":"Reload"),1)]),_:1})]))}}),GA=re(qA,[["__scopeId","data-v-4e6e0b33"]]),YA={class:"demo-column"},KA=Z({__name:"variants",setup(e){return(t,n)=>(b(),x("div",YA,[N(r(Fu),{avatar:"",rows:2}),N(r(Fu),{rows:5})]))}});function PA(){const e=ne(),[t,n]=R.useState(!0);return m.jsxs("div",{className:"demo-column",children:[m.jsx(ud,{loading:t,rows:3,children:m.jsxs("div",{children:[m.jsx("h4",{style:{margin:"0 0 8px"},children:e?"加载完成后的真实内容":"Real content after loading"}),m.jsx("p",{style:{margin:0,color:"#6b7280"},children:e?"这是一段从服务端获取的数据，loading 为 false 时替换骨架屏渲染。":"This is data fetched from the server; skeleton is replaced when loading is false."})]})}),m.jsx(P,{size:"sm",onClick:()=>n(a=>!a),children:e?t?"加载完成":"重新加载":t?"Finish loading":"Reload"})]})}function XA(){return m.jsxs("div",{className:"demo-column",children:[m.jsx(ud,{avatar:!0,rows:2}),m.jsx(ud,{rows:5})]})}const QA=`<script setup lang="ts">
import { ref } from 'vue';
import { Skeleton, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const loading = ref(true);
<\/script>

<template>
  <div class="demo-column">
    <Skeleton :loading="loading" :rows="3">
      <div class="demo-article">
        <h4>{{ isZh() ? '加载完成后的真实内容' : 'Real content after loading' }}</h4>
        <p>
          {{
            isZh()
              ? '这是一段从服务端获取的数据，loading 为 false 时替换骨架屏渲染。'
              : 'This is data fetched from the server; skeleton is replaced when loading is false.'
          }}
        </p>
      </div>
    </Skeleton>
    <Button size="sm" @click="loading = !loading">
      {{ isZh() ? (loading ? '加载完成' : '重新加载') : loading ? 'Finish loading' : 'Reload' }}
    </Button>
  </div>
</template>

<style scoped>
.demo-article h4 {
  margin: 0 0 8px;
}

.demo-article p {
  margin: 0;
  color: #6b7280;
}
</style>
`,JA=`<script setup lang="ts">
import { Skeleton } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-column">
    <Skeleton avatar :rows="2" />
    <Skeleton :rows="5" />
  </div>
</template>
`,WA=`import { useState } from 'react';
import { Skeleton, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function SkeletonBasicDemo() {
  const isZh = useIsZh();
  const [loading, setLoading] = useState(true);

  return (
    <div className="demo-column">
      <Skeleton loading={loading} rows={3}>
        <div>
          <h4 style={{ margin: '0 0 8px' }}>
            {isZh ? '加载完成后的真实内容' : 'Real content after loading'}
          </h4>
          <p style={{ margin: 0, color: '#6b7280' }}>
            {isZh
              ? '这是一段从服务端获取的数据，loading 为 false 时替换骨架屏渲染。'
              : 'This is data fetched from the server; skeleton is replaced when loading is false.'}
          </p>
        </div>
      </Skeleton>
      <Button size="sm" onClick={() => setLoading((v) => !v)}>
        {isZh ? (loading ? '加载完成' : '重新加载') : loading ? 'Finish loading' : 'Reload'}
      </Button>
    </div>
  );
}
`,eR=`import { Skeleton } from '@xui-design/react';

export default function SkeletonVariantsDemo() {
  return (
    <div className="demo-column">
      <Skeleton avatar rows={2} />
      <Skeleton rows={5} />
    </div>
  );
}
`,tR={name:"Skeleton",slug:"skeleton",title:"骨架屏",category:"display",summary:{"zh-CN":"数据加载中的占位屏，在内容就绪前提供结构感知，支持头像占位与自定义行数。","en-US":"Placeholder screen shown while data is loading, conveying structure before content is ready, with avatar placeholder and customizable row count."},features:[{"zh-CN":"loading 控制骨架 / 真实内容切换，false 时渲染默认插槽内容","en-US":"loading toggles between skeleton and real content; renders the default slot when false"},{"zh-CN":"avatar 显示头部头像占位，rows 配置段落行数（收敛为正整数，默认 3）","en-US":"avatar shows a leading avatar placeholder; rows sets the paragraph line count (coerced to a positive integer, defaults to 3)"}],scenarios:[{"zh-CN":"卡片 / 列表 / 详情页首次加载、弱网等待数据等场景。","en-US":"First-load of cards / lists / detail pages, or waiting for data on slow networks."}],demos:[{id:"basic",title:{"zh-CN":"加载切换","en-US":"Loading Toggle"},description:{"zh-CN":"loading=true 显示骨架，false 渲染插槽中的真实内容。","en-US":"loading=true shows the skeleton; false renders the real content in the slot."},vueComponent:GA,reactComponent:PA,vueSource:QA,reactSource:WA},{id:"variants",title:{"zh-CN":"头像占位与行数","en-US":"Avatar Placeholder & Rows"},description:{"zh-CN":"avatar 渲染圆形头像占位；rows 控制文本段落条数。","en-US":"avatar renders a circular avatar placeholder; rows controls the text line count."},vueComponent:KA,reactComponent:XA,vueSource:JA,reactSource:eR}],api:{props:[{name:"loading",type:"boolean",default:"true",description:{"zh-CN":"加载中状态（true 渲染骨架，false 渲染插槽内容）","en-US":"Loading state (true renders the skeleton, false renders the slot content)"}},{name:"avatar",type:"boolean",default:"false",description:{"zh-CN":"是否显示头部头像占位","en-US":"Whether to show the leading avatar placeholder"}},{name:"rows",type:"number",default:"3",description:{"zh-CN":"段落行数（收敛为正整数）","en-US":"Paragraph line count (coerced to a positive integer)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"真实内容（loading=false 时渲染）","en-US":"Real content (rendered when loading=false)"}}]},notes:[{"zh-CN":"rows 传入 0 或负数等非法值会收敛为 1，保证至少渲染一行。","en-US":"Invalid rows values such as 0 or negatives are coerced to 1, guaranteeing at least one line."}],a11y:[{"zh-CN":"骨架区域标记为忙碌状态（aria-busy），读屏可感知内容正在加载。","en-US":"The skeleton region is marked busy (aria-busy) so screen readers can sense that content is loading."}]},nR={class:"demo-text"},aR=Z({__name:"basic",setup(e){const t=H("overview"),n=F(()=>[{label:T()?"概览":"Overview",value:"overview"},{label:T()?"配置":"Config",value:"config"},{label:T()?"日志":"Logs",value:"logs",disabled:!0}]);return(a,l)=>(b(),Q(r(Lh),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),items:n.value},{default:z(({item:i})=>[w("p",nR,U(r(T)()?`${i.label}页的内容（value: ${i.value}）`:`${i.label} panel content (value: ${i.value})`),1)]),_:1},8,["value","items"]))}}),lR={class:"demo-text"},iR=Z({__name:"uncontrolled",setup(e){const t=F(()=>[{label:T()?"章节一":"Chapter 1",value:"ch1"},{label:T()?"章节二":"Chapter 2",value:"ch2"},{label:T()?"章节三":"Chapter 3",value:"ch3"}]);return(n,a)=>(b(),Q(r(Lh),{"default-value":"ch2",items:t.value},{default:z(({item:l})=>[w("p",lR,U(r(T)()?`当前激活：${l.label}`:`Active: ${l.label}`),1)]),_:1},8,["items"]))}});function oR(){const e=ne(),[t,n]=R.useState("overview"),a=[{label:e?"概览":"Overview",value:"overview"},{label:e?"配置":"Config",value:"config"},{label:e?"日志":"Logs",value:"logs",disabled:!0}];return m.jsx(tv,{value:t,onChange:n,items:a,renderPanel:l=>m.jsx("p",{className:"demo-text",children:e?`${l.label}页的内容（value: ${l.value}）`:`${l.label} panel content (value: ${l.value})`})})}function sR(){const e=ne(),t=[{label:e?"章节一":"Chapter 1",value:"ch1"},{label:e?"章节二":"Chapter 2",value:"ch2"},{label:e?"章节三":"Chapter 3",value:"ch3"}];return m.jsx(tv,{defaultValue:"ch2",items:t,renderPanel:n=>m.jsx("p",{className:"demo-text",children:e?`当前激活：${n.label}`:`Active: ${n.label}`})})}const rR=`<script setup lang="ts">
import { ref, computed } from 'vue';
import { Tabs } from '@xui-design/vue';
import type { TabItem } from '@xui-design/core';
import { isZh } from '../../../i18n';

const active = ref('overview');
const items = computed<TabItem[]>(() => [
  { label: isZh() ? '概览' : 'Overview', value: 'overview' },
  { label: isZh() ? '配置' : 'Config', value: 'config' },
  { label: isZh() ? '日志' : 'Logs', value: 'logs', disabled: true },
]);
<\/script>

<template>
  <Tabs v-model:value="active" :items="items">
    <template #default="{ item }">
      <p class="demo-text">
        {{
          isZh()
            ? \`\${item.label}页的内容（value: \${item.value}）\`
            : \`\${item.label} panel content (value: \${item.value})\`
        }}
      </p>
    </template>
  </Tabs>
</template>
`,uR=`<script setup lang="ts">
import { computed } from 'vue';
import { Tabs } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const items = computed(() => [
  { label: isZh() ? '章节一' : 'Chapter 1', value: 'ch1' },
  { label: isZh() ? '章节二' : 'Chapter 2', value: 'ch2' },
  { label: isZh() ? '章节三' : 'Chapter 3', value: 'ch3' },
]);
<\/script>

<template>
  <Tabs default-value="ch2" :items="items">
    <template #default="{ item }">
      <p class="demo-text">
        {{ isZh() ? \`当前激活：\${item.label}\` : \`Active: \${item.label}\` }}
      </p>
    </template>
  </Tabs>
</template>
`,cR=`import { useState } from 'react';
import { Tabs } from '@xui-design/react';
import type { TabItem } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TabsBasicDemo() {
  const isZh = useIsZh();
  const [active, setActive] = useState('overview');

  const items: TabItem[] = [
    { label: isZh ? '概览' : 'Overview', value: 'overview' },
    { label: isZh ? '配置' : 'Config', value: 'config' },
    { label: isZh ? '日志' : 'Logs', value: 'logs', disabled: true },
  ];

  return (
    <Tabs
      value={active}
      onChange={setActive}
      items={items}
      renderPanel={(item) => (
        <p className="demo-text">
          {isZh
            ? \`\${item.label}页的内容（value: \${item.value}）\`
            : \`\${item.label} panel content (value: \${item.value})\`}
        </p>
      )}
    />
  );
}
`,dR=`import { Tabs } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TabsUncontrolledDemo() {
  const isZh = useIsZh();
  const items = [
    { label: isZh ? '章节一' : 'Chapter 1', value: 'ch1' },
    { label: isZh ? '章节二' : 'Chapter 2', value: 'ch2' },
    { label: isZh ? '章节三' : 'Chapter 3', value: 'ch3' },
  ];

  return (
    <Tabs
      defaultValue="ch2"
      items={items}
      renderPanel={(item) => (
        <p className="demo-text">{isZh ? \`当前激活：\${item.label}\` : \`Active: \${item.label}\`}</p>
      )}
    />
  );
}
`,mR={name:"Tabs",slug:"tabs",title:"标签页",category:"navigation",summary:{"zh-CN":"在同一区域切换多个平级内容面板，配置化标签项，支持受控 / 非受控与键盘切换。","en-US":"Switches between multiple peer content panels in the same area, with configurable tab items, controlled / uncontrolled modes, and keyboard navigation."},features:[{"zh-CN":"items 配置标签项（label / value / disabled），受控 value / 非受控 defaultValue","en-US":"items configures tabs (label / value / disabled); controlled value or uncontrolled defaultValue"},{"zh-CN":'面板内容通过作用域插槽获取当前激活项：Vue #default="{ item }"，React renderPanel(item)',"en-US":'Panel content receives the active item via a scoped slot: Vue #default="{ item }", React renderPanel(item)'},{"zh-CN":"禁用标签不可激活；方向键在可用标签间循环移动","en-US":"Disabled tabs cannot be activated; arrow keys cycle through enabled tabs"}],scenarios:[{"zh-CN":"表单分区、详情页多视图、设置项分类等内容平级切换场景。","en-US":"Switching between peer content such as form sections, multi-view detail pages, or grouped settings."}],demos:[{id:"basic",title:{"zh-CN":"受控与禁用项","en-US":"Controlled & Disabled Tabs"},description:{"zh-CN":"外部维护激活 value，disabled 标签不可点击也不参与键盘循环。","en-US":"The active value is maintained externally; disabled tabs are not clickable and are skipped in keyboard cycling."},vueComponent:aR,reactComponent:oR,vueSource:rR,reactSource:cR},{id:"uncontrolled",title:{"zh-CN":"非受控","en-US":"Uncontrolled"},description:{"zh-CN":"仅提供 defaultValue 指定初始激活项，切换由组件内部管理。","en-US":"Only defaultValue sets the initially active tab; switching is managed internally."},vueComponent:iR,reactComponent:sR,vueSource:uR,reactSource:dR}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控激活值（提供即受控）","en-US":"Controlled active value (providing it makes the component controlled)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始激活值","en-US":"Uncontrolled initial active value"}},{name:"items",type:"TabItem[]",default:"—",required:!0,description:{"zh-CN":"标签页配置","en-US":"Tab items configuration"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"激活项变更回调","en-US":"Callback fired when the active tab changes"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"激活标签变更","en-US":"Active tab changed"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:'default="{ item }"',react:"renderPanel(item)",description:{"zh-CN":"面板内容（作用域参数为当前激活的 TabItem）","en-US":"Panel content (scoped param is the currently active TabItem)"}}],types:[{name:"TabItem",definition:`interface TabItem {
  label: string
  value: string
  disabled?: boolean
}`,description:{"zh-CN":"标签页项配置。","en-US":"Tab item configuration."}}]},notes:[{"zh-CN":'Vue 端面板是 default 作用域插槽（#default="{ item }"），不存在名为 item 的具名插槽。',"en-US":'On Vue the panel is the default scoped slot (#default="{ item }"); there is no named slot called item.'},{"zh-CN":"点击禁用标签与通过键盘切换时都会跳过禁用项。","en-US":"Disabled tabs are skipped both when clicked and when switching via keyboard."}],a11y:[{"zh-CN":"标签栏具备 tablist / tab 语义，aria-selected 标识激活项，左右方向键可切换焦点。","en-US":"The tab bar has tablist / tab semantics; aria-selected marks the active tab, and left/right arrow keys move focus."}]},pR={class:"demo-column"},fR={class:"demo-text"},hR=Z({__name:"basic",setup(e){const t=H(3);return(n,a)=>(b(),x("div",pR,[N(r(Hu),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),total:285},null,8,["value"]),w("p",fR,U(r(T)()?`第 ${t.value} 页 / 共 29 页（每页 10 条，共 285 条）`:`Page ${t.value} / 29 pages (10 per page, 285 total)`),1)]))}}),vR={class:"demo-column"},gR=Z({__name:"variants",setup(e){return(t,n)=>(b(),x("div",vR,[N(r(Hu),{"default-value":1,total:80,"page-size":20}),N(r(Hu),{"default-value":2,total:50,disabled:""})]))}});function bR(){const e=ne(),[t,n]=R.useState(3);return m.jsxs("div",{className:"demo-column",children:[m.jsx(sd,{value:t,onChange:n,total:285}),m.jsx("p",{className:"demo-text",children:e?`第 ${t} 页 / 共 29 页（每页 10 条，共 285 条）`:`Page ${t} / 29 pages (10 per page, 285 total)`})]})}function yR(){return m.jsxs("div",{className:"demo-column",children:[m.jsx(sd,{defaultValue:1,total:80,pageSize:20}),m.jsx(sd,{defaultValue:2,total:50,disabled:!0})]})}const SR=`<script setup lang="ts">
import { ref } from 'vue';
import { Pagination } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const page = ref(3);
<\/script>

<template>
  <div class="demo-column">
    <Pagination v-model:value="page" :total="285" />
    <p class="demo-text">
      {{
        isZh()
          ? \`第 \${page} 页 / 共 29 页（每页 10 条，共 285 条）\`
          : \`Page \${page} / 29 pages (10 per page, 285 total)\`
      }}
    </p>
  </div>
</template>
`,xR=`<script setup lang="ts">
import { Pagination } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-column">
    <Pagination :default-value="1" :total="80" :page-size="20" />
    <Pagination :default-value="2" :total="50" disabled />
  </div>
</template>
`,_R=`import { useState } from 'react';
import { Pagination } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function PaginationBasicDemo() {
  const isZh = useIsZh();
  const [page, setPage] = useState(3);

  return (
    <div className="demo-column">
      <Pagination value={page} onChange={setPage} total={285} />
      <p className="demo-text">
        {isZh
          ? \`第 \${page} 页 / 共 29 页（每页 10 条，共 285 条）\`
          : \`Page \${page} / 29 pages (10 per page, 285 total)\`}
      </p>
    </div>
  );
}
`,CR=`import { Pagination } from '@xui-design/react';

export default function PaginationVariantsDemo() {
  return (
    <div className="demo-column">
      <Pagination defaultValue={1} total={80} pageSize={20} />
      <Pagination defaultValue={2} total={50} disabled />
    </div>
  );
}
`,kR={name:"Pagination",slug:"pagination",title:"分页",category:"navigation",summary:{"zh-CN":"数据分页导航，页码从 1 开始，自动计算总页数并收敛越界操作。","en-US":"Data pagination navigation with 1-based page numbers, automatically computing the total page count and clamping out-of-range operations."},features:[{"zh-CN":"受控 value / 非受控 defaultValue，页码从 1 开始，Vue 端支持 v-model:value","en-US":"Controlled value / uncontrolled defaultValue, 1-based page numbers, and v-model:value support on Vue"},{"zh-CN":"total 总条数 + pageSize 每页条数（默认 10）自动计算总页数","en-US":"total item count plus pageSize per-page count (default 10) automatically computes the total page count"},{"zh-CN":"上一页 / 下一页在边界自动 no-op，越界页码自动 clamp","en-US":"Prev / next become no-ops at boundaries; out-of-range page numbers are clamped automatically"},{"zh-CN":"disabled 禁用整个分页器","en-US":"disabled turns off the whole paginator"}],scenarios:[{"zh-CN":"长列表 / 表格 / 搜索结果等数据量较大需要分页浏览的场景。","en-US":"Browsing large datasets page by page, such as long lists, tables, or search results."}],demos:[{id:"basic",title:{"zh-CN":"受控分页","en-US":"Controlled Pagination"},description:{"zh-CN":"285 条数据、每页 10 条共 29 页，外部同步当前页码。","en-US":"285 items at 10 per page make 29 pages, with the current page synced externally."},vueComponent:hR,reactComponent:bR,vueSource:SR,reactSource:_R},{id:"variants",title:{"zh-CN":"每页条数与禁用","en-US":"Page Size & Disabled"},description:{"zh-CN":"pageSize 改变分页粒度；disabled 下所有翻页操作无效。","en-US":"pageSize changes the paging granularity; all paging operations are inert while disabled."},vueComponent:gR,reactComponent:yR,vueSource:xR,reactSource:CR}],api:{props:[{name:"value",type:"number",default:"—",description:{"zh-CN":"受控当前页（从 1 开始）","en-US":"Controlled current page (1-based)"}},{name:"defaultValue",type:"number",default:"1",description:{"zh-CN":"非受控初始页码","en-US":"Uncontrolled initial page number"}},{name:"total",type:"number",default:"—",required:!0,description:{"zh-CN":"数据总条数","en-US":"Total number of items"}},{name:"pageSize",type:"number",default:"10",description:{"zh-CN":"每页条数","en-US":"Items per page"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"onChange",type:"(page: number) => void",default:"—",description:{"zh-CN":"页码变更回调","en-US":"Callback fired when the page changes"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"page: number",description:{"zh-CN":"页码变更","en-US":"Page changed"}},{vue:"update:value",react:"—",payload:"number",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:"prevIcon",react:"renderPrevIcon",description:{"zh-CN":"自定义上一页图标","en-US":"Custom previous-page icon"}},{vue:"nextIcon",react:"renderNextIcon",description:{"zh-CN":"自定义下一页图标","en-US":"Custom next-page icon"}}]},notes:[{"zh-CN":"当前页超出总页数时（如 total 变小）会自动 clamp 到有效范围并触发一次 change。","en-US":"When the current page exceeds the total page count (e.g., total shrinks), it is clamped to the valid range and one change is fired."},{"zh-CN":"total 变化后总页数自动重算，无需外部维护页数。","en-US":"The total page count is recomputed automatically when total changes, so no external page-count bookkeeping is needed."}],a11y:[{"zh-CN":"导航区域具备分页语义，页码按钮可键盘聚焦，当前页携带 aria-current，边界按钮自动禁用。","en-US":"The nav region has pagination semantics; page buttons are keyboard-focusable, the current page carries aria-current, and boundary buttons disable automatically."}]},wR={class:"demo-column"},NR=Z({__name:"basic",setup(e){const t=F(()=>T()?[{label:"首页"},{label:"组件库"},{label:"面包屑 Breadcrumb"}]:[{label:"Home"},{label:"Components"},{label:"Breadcrumb"}]);return(n,a)=>(b(),x("div",wR,[N(r(Iu),{items:t.value},null,8,["items"]),N(r(Iu),{items:t.value,separator:">"},null,8,["items"])]))}}),TR={class:"demo-column"},zR={class:"demo-text"},UR=Z({__name:"click",setup(e){const t=H(T()?"（点击前级项试试）":"(Try clicking a non-last item)"),n=F(()=>T()?[{label:"首页"},{label:"归档（禁用）",disabled:!0},{label:"文章详情"}]:[{label:"Home"},{label:"Archive (disabled)",disabled:!0},{label:"Article Detail"}]),a=(l,i)=>{t.value=T()?`点击了第 ${i} 项：${l.label}`:`Clicked item ${i}: ${l.label}`};return(l,i)=>(b(),x("div",TR,[N(r(Iu),{items:n.value,onItemClick:a},null,8,["items"]),w("p",zR,U(t.value)+U(r(T)()?"（末项为当前页，不可点击）":" (last item is the current page, not clickable)"),1)]))}});function $R(){const t=ne()?[{label:"首页"},{label:"组件库"},{label:"面包屑 Breadcrumb"}]:[{label:"Home"},{label:"Components"},{label:"Breadcrumb"}];return m.jsxs("div",{className:"demo-column",children:[m.jsx(rd,{items:t}),m.jsx(rd,{items:t,separator:">"})]})}function ER(){const e=ne(),[t,n]=R.useState(e?"（点击前级项试试）":"(Try clicking a non-last item)"),a=e?[{label:"首页"},{label:"归档（禁用）",disabled:!0},{label:"文章详情"}]:[{label:"Home"},{label:"Archive (disabled)",disabled:!0},{label:"Article Detail"}];return m.jsxs("div",{className:"demo-column",children:[m.jsx(rd,{items:a,onItemClick:(l,i)=>n(e?`点击了第 ${i} 项：${l.label}`:`Clicked item ${i}: ${l.label}`)}),m.jsxs("p",{className:"demo-text",children:[t,e?"（末项为当前页，不可点击）":" (last item is the current page, not clickable)"]})]})}const AR=`<script setup lang="ts">
import { computed } from 'vue';
import { Breadcrumb } from '@xui-design/vue';
import type { BreadcrumbItem } from '@xui-design/core';
import { isZh } from '../../../i18n';

const items = computed<BreadcrumbItem[]>(() =>
  isZh()
    ? [{ label: '首页' }, { label: '组件库' }, { label: '面包屑 Breadcrumb' }]
    : [{ label: 'Home' }, { label: 'Components' }, { label: 'Breadcrumb' }],
);
<\/script>

<template>
  <div class="demo-column">
    <Breadcrumb :items="items" />
    <Breadcrumb :items="items" separator=">" />
  </div>
</template>
`,RR=`<script setup lang="ts">
import { computed, ref } from 'vue';
import { Breadcrumb } from '@xui-design/vue';
import type { BreadcrumbItem } from '@xui-design/core';
import { isZh } from '../../../i18n';

const lastClick = ref(isZh() ? '（点击前级项试试）' : '(Try clicking a non-last item)');
const items = computed<BreadcrumbItem[]>(() =>
  isZh()
    ? [{ label: '首页' }, { label: '归档（禁用）', disabled: true }, { label: '文章详情' }]
    : [
        { label: 'Home' },
        { label: 'Archive (disabled)', disabled: true },
        { label: 'Article Detail' },
      ],
);

const onItemClick = (item: BreadcrumbItem, index: number) => {
  lastClick.value = isZh()
    ? \`点击了第 \${index} 项：\${item.label}\`
    : \`Clicked item \${index}: \${item.label}\`;
};
<\/script>

<template>
  <div class="demo-column">
    <Breadcrumb :items="items" @item-click="onItemClick" />
    <p class="demo-text">
      {{ lastClick
      }}{{
        isZh() ? '（末项为当前页，不可点击）' : ' (last item is the current page, not clickable)'
      }}
    </p>
  </div>
</template>
`,BR=`import { Breadcrumb } from '@xui-design/react';
import type { BreadcrumbItem } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function BreadcrumbBasicDemo() {
  const isZh = useIsZh();
  const items: BreadcrumbItem[] = isZh
    ? [{ label: '首页' }, { label: '组件库' }, { label: '面包屑 Breadcrumb' }]
    : [{ label: 'Home' }, { label: 'Components' }, { label: 'Breadcrumb' }];

  return (
    <div className="demo-column">
      <Breadcrumb items={items} />
      <Breadcrumb items={items} separator=">" />
    </div>
  );
}
`,OR=`import { useState } from 'react';
import { Breadcrumb } from '@xui-design/react';
import type { BreadcrumbItem } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function BreadcrumbClickDemo() {
  const isZh = useIsZh();
  const [lastClick, setLastClick] = useState(
    isZh ? '（点击前级项试试）' : '(Try clicking a non-last item)',
  );
  const items: BreadcrumbItem[] = isZh
    ? [{ label: '首页' }, { label: '归档（禁用）', disabled: true }, { label: '文章详情' }]
    : [
        { label: 'Home' },
        { label: 'Archive (disabled)', disabled: true },
        { label: 'Article Detail' },
      ];

  return (
    <div className="demo-column">
      <Breadcrumb
        items={items}
        onItemClick={(item, index) =>
          setLastClick(
            isZh ? \`点击了第 \${index} 项：\${item.label}\` : \`Clicked item \${index}: \${item.label}\`,
          )
        }
      />
      <p className="demo-text">
        {lastClick}
        {isZh ? '（末项为当前页，不可点击）' : ' (last item is the current page, not clickable)'}
      </p>
    </div>
  );
}
`,ZR={name:"Breadcrumb",slug:"breadcrumb",title:"面包屑",category:"navigation",summary:{"zh-CN":"显示当前页面层级路径，支持链接项 / 可点击项与自定义分隔符。","en-US":"Shows the hierarchical path of the current page, supporting link items / clickable items and a custom separator."},features:[{"zh-CN":"items 配置层级，最后一项自动视为当前页（不可点击）","en-US":"items configures the hierarchy; the last item is automatically treated as the current page (not clickable)"},{"zh-CN":"item 存在 href 时渲染为 <a>，否则渲染为可点击 <span>；separator 自定义分隔符（默认 '/'）","en-US":"An item with href renders as <a>, otherwise as a clickable <span>; separator customizes the delimiter (defaults to '/')"},{"zh-CN":"disabled 项与末项不触发 itemClick","en-US":"Disabled items and the last item do not fire itemClick"}],scenarios:[{"zh-CN":"详情页层级返回、管理系统内容分区定位等场景。","en-US":"Scenarios such as hierarchical back-navigation on detail pages or section location in admin systems."}],demos:[{id:"basic",title:{"zh-CN":"基础与分隔符","en-US":"Basic & Separator"},description:{"zh-CN":"末项为当前页；separator 可替换默认斜杠。","en-US":"The last item is the current page; separator can replace the default slash."},vueComponent:NR,reactComponent:$R,vueSource:AR,reactSource:BR},{id:"click",title:{"zh-CN":"点击与禁用","en-US":"Click & Disabled"},description:{"zh-CN":"无 href 的项点击触发 itemClick；disabled 项与末项被忽略。","en-US":"Clicking an item without href fires itemClick; disabled items and the last item are ignored."},vueComponent:UR,reactComponent:ER,vueSource:RR,reactSource:OR}],api:{props:[{name:"items",type:"BreadcrumbItem[]",default:"[]",description:{"zh-CN":"面包屑项列表（末项视为当前页）","en-US":"Breadcrumb item list (the last item is treated as the current page)"}},{name:"separator",type:"string",default:"'/'",description:{"zh-CN":"分隔符","en-US":"Separator"}},{name:"onItemClick",type:"(item: BreadcrumbItem, index: number) => void",default:"—",description:{"zh-CN":"点击可导航项回调（末项 / disabled 不触发）","en-US":"Callback for clicking a navigable item (not fired for the last item or disabled ones)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"itemClick",react:"onItemClick",payload:"item: BreadcrumbItem, index: number",description:{"zh-CN":"点击导航项","en-US":"Navigable item clicked"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"自定义内容区（覆盖 items 渲染）","en-US":"Custom content area (overrides items rendering)"}}],types:[{name:"BreadcrumbItem",definition:`interface BreadcrumbItem {
  label: string
  href?: string
  disabled?: boolean
}`,description:{"zh-CN":"面包屑层级项；href 存在渲染为链接。","en-US":"Breadcrumb hierarchy item; renders as a link when href is present."}}]},notes:[{"zh-CN":"组件本身不拦截链接默认导航（对齐 Element Plus），SPA 内路由拦截由应用层负责。","en-US":"The component does not intercept the default link navigation (aligned with Element Plus); route interception in an SPA is handled by the application layer."},{"zh-CN":"在 hash 路由应用中若不希望改变地址，可省略 href，改用 itemClick 处理跳转。","en-US":"In hash-routed apps, omit href and handle navigation via itemClick if you do not want to change the address."}],a11y:[{"zh-CN":'根节点使用 nav + aria-label="面包屑"，当前页以 aria-current 标识。',"en-US":'The root uses nav with aria-label="面包屑", and the current page is marked with aria-current.'}]},DR={class:"demo-column"},MR=Z({__name:"basic",setup(e){return(t,n)=>(b(),x("div",DR,[N(r(_l),{type:"info",title:r(T)()?"信息提示":"Info",description:r(T)()?"这是一条普通的信息性说明。":"A normal informational message."},null,8,["title","description"]),N(r(_l),{type:"success",title:r(T)()?"成功提示":"Success",description:r(T)()?"操作已成功完成。":"The operation completed successfully."},null,8,["title","description"]),N(r(_l),{type:"warning",title:r(T)()?"警告提示":"Warning",description:r(T)()?"请注意当前操作可能产生的影响。":"Note the potential impact of the current operation."},null,8,["title","description"]),N(r(_l),{type:"error",title:r(T)()?"错误提示":"Error",description:r(T)()?"操作失败，请稍后重试。":"Operation failed, please retry later."},null,8,["title","description"])]))}}),jR={class:"demo-column"},VR=Z({__name:"closable",setup(e){return(t,n)=>(b(),x("div",jR,[N(r(_l),{type:"warning","show-icon":"",closable:""},{title:z(()=>[w("strong",null,U(r(T)()?"可关闭且带图标":"Closable with icon"),1)]),default:z(()=>[L(U(r(T)()?"描述内容通过默认插槽传入，支持更灵活的排版。":"Description content is passed via the default slot, allowing flexible layout.")+" ",1)]),_:1})]))}});function LR(){const e=ne();return m.jsxs("div",{className:"demo-column",children:[m.jsx(kl,{type:"info",title:e?"信息提示":"Info",description:e?"这是一条普通的信息性说明。":"A normal informational message."}),m.jsx(kl,{type:"success",title:e?"成功提示":"Success",description:e?"操作已成功完成。":"The operation completed successfully."}),m.jsx(kl,{type:"warning",title:e?"警告提示":"Warning",description:e?"请注意当前操作可能产生的影响。":"Note the potential impact of the current operation."}),m.jsx(kl,{type:"error",title:e?"错误提示":"Error",description:e?"操作失败，请稍后重试。":"Operation failed, please retry later."})]})}function HR(){const e=ne();return m.jsx("div",{className:"demo-column",children:m.jsx(kl,{type:"warning",showIcon:!0,closable:!0,renderTitle:()=>m.jsx("strong",{children:e?"可关闭且带图标":"Closable with icon"}),children:e?"描述内容通过 children 传入，支持更灵活的排版。":"Description content is passed via children, allowing flexible layout."})})}const IR=`<script setup lang="ts">
import { Alert } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <Alert
      type="info"
      :title="isZh() ? '信息提示' : 'Info'"
      :description="isZh() ? '这是一条普通的信息性说明。' : 'A normal informational message.'"
    />
    <Alert
      type="success"
      :title="isZh() ? '成功提示' : 'Success'"
      :description="isZh() ? '操作已成功完成。' : 'The operation completed successfully.'"
    />
    <Alert
      type="warning"
      :title="isZh() ? '警告提示' : 'Warning'"
      :description="
        isZh()
          ? '请注意当前操作可能产生的影响。'
          : 'Note the potential impact of the current operation.'
      "
    />
    <Alert
      type="error"
      :title="isZh() ? '错误提示' : 'Error'"
      :description="isZh() ? '操作失败，请稍后重试。' : 'Operation failed, please retry later.'"
    />
  </div>
</template>
`,FR=`<script setup lang="ts">
import { Alert } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <Alert type="warning" show-icon closable>
      {{
        isZh()
          ? '描述内容通过默认插槽传入，支持更灵活的排版。'
          : 'Description content is passed via the default slot, allowing flexible layout.'
      }}
      <template #title>
        <strong>{{ isZh() ? '可关闭且带图标' : 'Closable with icon' }}</strong>
      </template>
    </Alert>
  </div>
</template>
`,qR=`import { Alert } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function AlertBasicDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-column">
      <Alert
        type="info"
        title={isZh ? '信息提示' : 'Info'}
        description={isZh ? '这是一条普通的信息性说明。' : 'A normal informational message.'}
      />
      <Alert
        type="success"
        title={isZh ? '成功提示' : 'Success'}
        description={isZh ? '操作已成功完成。' : 'The operation completed successfully.'}
      />
      <Alert
        type="warning"
        title={isZh ? '警告提示' : 'Warning'}
        description={
          isZh
            ? '请注意当前操作可能产生的影响。'
            : 'Note the potential impact of the current operation.'
        }
      />
      <Alert
        type="error"
        title={isZh ? '错误提示' : 'Error'}
        description={isZh ? '操作失败，请稍后重试。' : 'Operation failed, please retry later.'}
      />
    </div>
  );
}
`,GR=`import { Alert } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function AlertClosableDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-column">
      <Alert
        type="warning"
        showIcon
        closable
        renderTitle={() => <strong>{isZh ? '可关闭且带图标' : 'Closable with icon'}</strong>}
      >
        {isZh
          ? '描述内容通过 children 传入，支持更灵活的排版。'
          : 'Description content is passed via children, allowing flexible layout.'}
      </Alert>
    </div>
  );
}
`,YR={name:"Alert",slug:"alert",title:"警告提示",category:"feedback",summary:{"zh-CN":"静态内嵌的提示横幅，用于展示需用户关注的信息，支持四种语义、图标与关闭。","en-US":"A static inline banner for information that needs user attention, with four semantic types, icon and closable support."},features:[{"zh-CN":"四种语义类型：info / success / warning / error","en-US":"Four semantic types: info / success / warning / error"},{"zh-CN":"title 标题 + description 描述（描述也可用默认插槽 / children）","en-US":"title plus description (description can also use the default slot / children)"},{"zh-CN":"showIcon 显示类型图标，closable 可手动关闭（隐藏后触发 close）","en-US":"showIcon shows the type icon; closable allows manual close (close fires after hiding)"},{"zh-CN":"title / icon 均提供插槽，可完全自定义（React 对应 renderTitle / renderIcon）","en-US":"title and icon both offer slots for full customization (renderTitle / renderIcon in React)"}],scenarios:[{"zh-CN":"表单校验汇总、页面级通知、操作后果说明等常驻提示场景。","en-US":"Persistent inline notices such as form validation summaries, page-level notifications, and consequence explanations."}],demos:[{id:"basic",title:{"zh-CN":"四种语义","en-US":"Four Semantic Types"},description:{"zh-CN":"通过 type 切换 info / success / warning / error 配色与语义。","en-US":"Use type to switch between info / success / warning / error colors and semantics."},vueComponent:MR,reactComponent:LR,vueSource:IR,reactSource:qR},{id:"closable",title:{"zh-CN":"图标 / 关闭 / 自定义标题","en-US":"Icon / Closable / Custom Title"},description:{"zh-CN":"showIcon + closable，标题通过 title 插槽自定义。","en-US":"showIcon plus closable; the title is customized via the title slot."},vueComponent:VR,reactComponent:HR,vueSource:FR,reactSource:GR}],api:{props:[{name:"type",type:"'info' | 'success' | 'warning' | 'error'",default:"'info'",description:{"zh-CN":"语义类型","en-US":"Semantic type"}},{name:"title",type:"string",default:"—",description:{"zh-CN":"标题","en-US":"Title"}},{name:"description",type:"string",default:"—",description:{"zh-CN":"辅助描述（默认插槽的回退内容）","en-US":"Supporting description (fallback for the default slot)"}},{name:"closable",type:"boolean",default:"false",description:{"zh-CN":"是否可关闭","en-US":"Whether it is closable"}},{name:"showIcon",type:"boolean",default:"false",description:{"zh-CN":"是否显示类型图标","en-US":"Whether to show the type icon"}},{name:"onClose",type:"() => void",default:"—",description:{"zh-CN":"关闭回调（组件隐藏后触发）","en-US":"Close callback (fired after the component hides)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"close",react:"onClose",payload:"—",description:{"zh-CN":"点击关闭按钮、提示隐藏后触发","en-US":"Fired when the close button is clicked and the alert has hidden"}}],slots:[{vue:"closeIcon",react:"renderCloseIcon",description:{"zh-CN":"自定义关闭图标（替换内置 close）","en-US":"Custom close icon (replaces the built-in close icon)"}},{vue:"default",react:"children",description:{"zh-CN":"描述内容（覆盖 description prop）","en-US":"Description content (overrides the description prop)"}},{vue:"title",react:"renderTitle",description:{"zh-CN":"标题（覆盖 title prop）","en-US":"Title (overrides the title prop)"}},{vue:"icon",react:"renderIcon",description:{"zh-CN":"类型图标（覆盖默认图标，showIcon 开启时生效）","en-US":"Type icon (overrides the default icon when showIcon is on)"}}]},notes:[{"zh-CN":"Alert 为页面内静态提示（非浮层）；需要自动消失的全局浮层请使用 Message。","en-US":"Alert is a static in-page notice, not a floating layer. Use Message for auto-dismissing global toasts."}],a11y:[{"zh-CN":'提示区域按类型携带 role="status" / "alert" 等语义，关闭按钮可键盘操作。',"en-US":'The alert region carries role="status" / "alert" semantics per type; the close button is keyboard operable.'}]},KR={class:"demo-row"},PR=Z({__name:"basic",setup(e){return(t,n)=>(b(),x("div",KR,[N(r(On),{content:r(T)()?"上方提示":"Top tooltip",placement:"top"},{default:z(()=>[N(r(K),null,{default:z(()=>[...n[0]||(n[0]=[L("Top",-1)])]),_:1})]),_:1},8,["content"]),N(r(On),{content:r(T)()?"下方提示":"Bottom tooltip",placement:"bottom"},{default:z(()=>[N(r(K),null,{default:z(()=>[...n[1]||(n[1]=[L("Bottom",-1)])]),_:1})]),_:1},8,["content"]),N(r(On),{content:r(T)()?"左侧提示":"Left tooltip",placement:"left"},{default:z(()=>[N(r(K),null,{default:z(()=>[...n[2]||(n[2]=[L("Left",-1)])]),_:1})]),_:1},8,["content"]),N(r(On),{content:r(T)()?"右侧提示":"Right tooltip",placement:"right"},{default:z(()=>[N(r(K),null,{default:z(()=>[...n[3]||(n[3]=[L("Right",-1)])]),_:1})]),_:1},8,["content"])]))}}),XR={class:"demo-column"},QR=Z({__name:"trigger",setup(e){return(t,n)=>(b(),x("div",XR,[N(r(On),{content:r(T)()?"聚焦输入框时显示":"Shown when the input is focused",trigger:"focus"},{default:z(()=>[N(r(it),{placeholder:r(T)()?"点击聚焦查看 focus 提示":"Click to focus and see the focus tooltip"},null,8,["placeholder"])]),_:1},8,["content"]),N(r(On),{content:r(T)()?"禁用后不再响应":"No response when disabled",disabled:""},{default:z(()=>[N(r(K),null,{default:z(()=>[L(U(r(T)()?"禁用的 Tooltip":"Disabled Tooltip"),1)]),_:1})]),_:1},8,["content"])]))}});function JR(){const e=ne();return m.jsxs("div",{className:"demo-row",children:[m.jsx(Mn,{content:e?"上方提示":"Top tooltip",placement:"top",children:m.jsx(P,{children:"Top"})}),m.jsx(Mn,{content:e?"下方提示":"Bottom tooltip",placement:"bottom",children:m.jsx(P,{children:"Bottom"})}),m.jsx(Mn,{content:e?"左侧提示":"Left tooltip",placement:"left",children:m.jsx(P,{children:"Left"})}),m.jsx(Mn,{content:e?"右侧提示":"Right tooltip",placement:"right",children:m.jsx(P,{children:"Right"})})]})}function WR(){const e=ne();return m.jsxs("div",{className:"demo-column",children:[m.jsx(Mn,{content:e?"聚焦输入框时显示":"Shown when the input is focused",trigger:"focus",children:m.jsx(st,{placeholder:e?"点击聚焦查看 focus 提示":"Click to focus and see the focus tooltip"})}),m.jsx(Mn,{content:e?"禁用后不再响应":"No response when disabled",disabled:!0,children:m.jsx(P,{children:e?"禁用的 Tooltip":"Disabled Tooltip"})})]})}const eB=`<script setup lang="ts">
import { Tooltip, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-row">
    <Tooltip :content="isZh() ? '上方提示' : 'Top tooltip'" placement="top">
      <Button>Top</Button>
    </Tooltip>
    <Tooltip :content="isZh() ? '下方提示' : 'Bottom tooltip'" placement="bottom">
      <Button>Bottom</Button>
    </Tooltip>
    <Tooltip :content="isZh() ? '左侧提示' : 'Left tooltip'" placement="left">
      <Button>Left</Button>
    </Tooltip>
    <Tooltip :content="isZh() ? '右侧提示' : 'Right tooltip'" placement="right">
      <Button>Right</Button>
    </Tooltip>
  </div>
</template>
`,tB=`<script setup lang="ts">
import { Tooltip, Input, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <Tooltip
      :content="isZh() ? '聚焦输入框时显示' : 'Shown when the input is focused'"
      trigger="focus"
    >
      <Input
        :placeholder="
          isZh() ? '点击聚焦查看 focus 提示' : 'Click to focus and see the focus tooltip'
        "
      />
    </Tooltip>
    <Tooltip :content="isZh() ? '禁用后不再响应' : 'No response when disabled'" disabled>
      <Button>{{ isZh() ? '禁用的 Tooltip' : 'Disabled Tooltip' }}</Button>
    </Tooltip>
  </div>
</template>
`,nB=`import { Tooltip, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TooltipBasicDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-row">
      <Tooltip content={isZh ? '上方提示' : 'Top tooltip'} placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content={isZh ? '下方提示' : 'Bottom tooltip'} placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content={isZh ? '左侧提示' : 'Left tooltip'} placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content={isZh ? '右侧提示' : 'Right tooltip'} placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  );
}
`,aB=`import { Tooltip, Input, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TooltipTriggerDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-column">
      <Tooltip
        content={isZh ? '聚焦输入框时显示' : 'Shown when the input is focused'}
        trigger="focus"
      >
        <Input
          placeholder={
            isZh ? '点击聚焦查看 focus 提示' : 'Click to focus and see the focus tooltip'
          }
        />
      </Tooltip>
      <Tooltip content={isZh ? '禁用后不再响应' : 'No response when disabled'} disabled>
        <Button>{isZh ? '禁用的 Tooltip' : 'Disabled Tooltip'}</Button>
      </Tooltip>
    </div>
  );
}
`,lB={name:"Tooltip",slug:"tooltip",title:"文字提示",category:"feedback",summary:{"zh-CN":"鼠标悬停或聚焦时展示的简单文字气泡，CSS 包裹定位（非 portal），支持四方位与两种触发。","en-US":"A simple text bubble shown on hover or focus, positioned with a CSS wrapper (no portal), supporting four placements and two triggers."},features:[{"zh-CN":"placement 支持 top / bottom / left / right 四个方位","en-US":"placement supports top / bottom / left / right"},{"zh-CN":"trigger 支持 hover（默认）与 focus；disabled 后不再响应触发","en-US":"trigger supports hover (default) and focus; disabled stops responding to triggers"},{"zh-CN":"content 属性或 content 插槽 / renderContent 自定义提示内容","en-US":"Tooltip content via the content prop or the content slot / renderContent"}],scenarios:[{"zh-CN":"图标按钮说明、字段含义解释、快捷操作提示等轻量辅助说明场景。","en-US":"Lightweight hints such as icon button labels, field explanations, and shortcut tips."}],demos:[{id:"basic",title:{"zh-CN":"四个方位","en-US":"Four Placements"},description:{"zh-CN":"鼠标悬停（或键盘聚焦）触发元素查看对应方位的气泡。","en-US":"Hover (or keyboard-focus) the trigger elements to see the bubble at each placement."},vueComponent:PR,reactComponent:JR,vueSource:eB,reactSource:nB},{id:"trigger",title:{"zh-CN":"focus 触发与禁用","en-US":"Focus Trigger & Disabled"},description:{"zh-CN":'trigger="focus" 适合输入框；disabled 完全关闭提示能力。',"en-US":'trigger="focus" suits input fields; disabled turns the tooltip off entirely.'},vueComponent:QR,reactComponent:WR,vueSource:tB,reactSource:aB}],api:{props:[{name:"content",type:"string",default:"—",description:{"zh-CN":"提示内容（content 插槽 / renderContent 优先）","en-US":"Tooltip content (the content slot / renderContent takes precedence)"}},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'top'",description:{"zh-CN":"弹出位置","en-US":"Popup placement"}},{name:"trigger",type:"'hover' | 'focus'",default:"'hover'",description:{"zh-CN":"触发方式","en-US":"Trigger mode"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态（禁用后不响应触发）","en-US":"Disabled state (stops responding to triggers)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"触发元素","en-US":"Trigger element"}},{vue:"content",react:"renderContent",description:{"zh-CN":"提示内容（优先于 content prop）","en-US":"Tooltip content (takes precedence over the content prop)"}}]},notes:[{"zh-CN":"气泡采用 CSS 包裹定位而非 portal，父容器存在 overflow: hidden 时可能被裁剪，布局时需留意。","en-US":"The bubble uses CSS wrapper positioning instead of a portal, so it can be clipped by a parent with overflow: hidden; mind your layout."},{"zh-CN":"自带视口避让：首选方位空间不足时自动翻转到对侧，横向 / 纵向溢出视口边缘时自动钳制，滚动与窗口 resize 时实时重算。","en-US":"Built-in viewport collision handling: flips to the opposite side when the preferred placement lacks space, clamps at viewport edges horizontally / vertically, and recalculates on scroll and window resize."}],a11y:[{"zh-CN":"focus 触发天然支持键盘；hover 触发元素同样可聚焦，提示与触发元素通过 aria-describedby 关联。","en-US":"The focus trigger is keyboard-friendly by nature; hover triggers are also focusable, and the tooltip is linked to its trigger via aria-describedby."}]},iB={class:"demo-row"},oB=Z({__name:"basic",setup(e){return(t,n)=>(b(),x("div",iB,[N(r(Ai),{size:"sm"}),N(r(Ai)),N(r(Ai),{size:"lg"}),N(r(Ai),{size:"lg",tip:r(T)()?"加载中...":"Loading..."},null,8,["tip"])]))}}),sB={class:"demo-column"},rB={class:"demo-panel"},uB=Z({__name:"wrapper",setup(e){const t=H(!0);return(n,a)=>(b(),x("div",sB,[N(r(Ai),{spinning:t.value,tip:r(T)()?"数据加载中":"Loading data"},{default:z(()=>[w("div",rB,[w("h4",null,U(r(T)()?"被包裹的内容区":"Wrapped content area"),1),w("p",null,U(r(T)()?"spinning 为 true 时覆盖半透明遮罩，false 时内容正常交互。":"When spinning is true, a semi-transparent overlay covers the content; when false, the content is fully interactive."),1)])]),_:1},8,["spinning","tip"]),N(r(K),{size:"sm",onClick:a[0]||(a[0]=l=>t.value=!t.value)},{default:z(()=>[L(U(t.value?r(T)()?"停止加载":"Stop loading":r(T)()?"开始加载":"Start loading"),1)]),_:1})]))}}),cB=re(uB,[["__scopeId","data-v-f7daa9fc"]]);function dB(){const e=ne();return m.jsxs("div",{className:"demo-row",children:[m.jsx(Mi,{size:"sm"}),m.jsx(Mi,{}),m.jsx(Mi,{size:"lg"}),m.jsx(Mi,{size:"lg",tip:e?"加载中...":"Loading..."})]})}function mB(){const e=ne(),[t,n]=R.useState(!0);return m.jsxs("div",{className:"demo-column",children:[m.jsx(Mi,{spinning:t,tip:e?"数据加载中":"Loading data",children:m.jsxs("div",{style:{padding:16,background:"#f8fafc",borderRadius:8},children:[m.jsx("h4",{style:{margin:"0 0 8px"},children:e?"被包裹的内容区":"Wrapped content area"}),m.jsx("p",{style:{margin:0,color:"#6b7280"},children:e?"spinning 为 true 时覆盖半透明遮罩，false 时内容正常交互。":"When spinning is true, a semi-transparent overlay covers the content; when false, the content is fully interactive."})]})}),m.jsx(P,{size:"sm",onClick:()=>n(a=>!a),children:t?e?"停止加载":"Stop loading":e?"开始加载":"Start loading"})]})}const pB=`<script setup lang="ts">
import { Spin } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-row">
    <Spin size="sm" />
    <Spin />
    <Spin size="lg" />
    <Spin size="lg" :tip="isZh() ? '加载中...' : 'Loading...'" />
  </div>
</template>
`,fB=`<script setup lang="ts">
import { ref } from 'vue';
import { Spin, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const spinning = ref(true);
<\/script>

<template>
  <div class="demo-column">
    <Spin :spinning="spinning" :tip="isZh() ? '数据加载中' : 'Loading data'">
      <div class="demo-panel">
        <h4>{{ isZh() ? '被包裹的内容区' : 'Wrapped content area' }}</h4>
        <p>
          {{
            isZh()
              ? 'spinning 为 true 时覆盖半透明遮罩，false 时内容正常交互。'
              : 'When spinning is true, a semi-transparent overlay covers the content; when false, the content is fully interactive.'
          }}
        </p>
      </div>
    </Spin>
    <Button size="sm" @click="spinning = !spinning">
      {{
        spinning ? (isZh() ? '停止加载' : 'Stop loading') : isZh() ? '开始加载' : 'Start loading'
      }}
    </Button>
  </div>
</template>

<style scoped>
.demo-panel {
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
}

.demo-panel h4 {
  margin: 0 0 8px;
}

.demo-panel p {
  margin: 0;
  color: #6b7280;
}
</style>
`,hB=`import { Spin } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function SpinBasicDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-row">
      <Spin size="sm" />
      <Spin />
      <Spin size="lg" />
      <Spin size="lg" tip={isZh ? '加载中...' : 'Loading...'} />
    </div>
  );
}
`,vB=`import { useState } from 'react';
import { Spin, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function SpinWrapperDemo() {
  const isZh = useIsZh();
  const [spinning, setSpinning] = useState(true);

  return (
    <div className="demo-column">
      <Spin spinning={spinning} tip={isZh ? '数据加载中' : 'Loading data'}>
        <div
          style={{
            padding: 16,
            background: '#f8fafc',
            borderRadius: 8,
          }}
        >
          <h4 style={{ margin: '0 0 8px' }}>{isZh ? '被包裹的内容区' : 'Wrapped content area'}</h4>
          <p style={{ margin: 0, color: '#6b7280' }}>
            {isZh
              ? 'spinning 为 true 时覆盖半透明遮罩，false 时内容正常交互。'
              : 'When spinning is true, a semi-transparent overlay covers the content; when false, the content is fully interactive.'}
          </p>
        </div>
      </Spin>
      <Button size="sm" onClick={() => setSpinning((v) => !v)}>
        {spinning ? (isZh ? '停止加载' : 'Stop loading') : isZh ? '开始加载' : 'Start loading'}
      </Button>
    </div>
  );
}
`,gB={name:"Spin",slug:"spin",title:"加载中",category:"feedback",summary:{"zh-CN":"加载状态指示器，可独立使用，也可包裹内容以遮罩形式表示区块加载。","en-US":"A loading indicator that works standalone or wraps content with a mask to indicate block-level loading."},features:[{"zh-CN":"size 支持 sm / md / lg（默认 md），tip 显示指示器下方提示文案","en-US":"size supports sm / md / lg (default md); tip shows hint text below the indicator"},{"zh-CN":"包裹内容时由 spinning 控制半透明遮罩显隐（默认 true）","en-US":"When wrapping content, spinning toggles the translucent mask (default true)"}],scenarios:[{"zh-CN":"局部数据加载、按钮 / 卡片等待状态、全屏或区块加载占位等场景。","en-US":"Local data loading, button / card pending states, full-screen or block-level loading placeholders."}],demos:[{id:"basic",title:{"zh-CN":"尺寸与提示","en-US":"Sizes & Tip"},description:{"zh-CN":"独立使用的三档指示器，tip 附带文字说明。","en-US":"Three standalone indicator sizes, with tip adding a text hint."},vueComponent:oB,reactComponent:dB,vueSource:pB,reactSource:hB},{id:"wrapper",title:{"zh-CN":"包裹内容","en-US":"Wrapping Content"},description:{"zh-CN":"spinning 时在内容上覆盖遮罩并阻止交互，结束后恢复。","en-US":"While spinning, a mask covers the content and blocks interaction; it is restored when finished."},vueComponent:cB,reactComponent:mB,vueSource:fB,reactSource:vB}],api:{props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:{"zh-CN":"尺寸","en-US":"Size"}},{name:"spinning",type:"boolean",default:"true",description:{"zh-CN":"加载中状态（包裹内容时控制遮罩显隐）","en-US":"Loading state (toggles the mask when wrapping content)"}},{name:"tip",type:"string",default:"—",description:{"zh-CN":"提示文案（显示在指示器下方，空串不渲染）","en-US":"Tip text (shown below the indicator; an empty string renders nothing)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"包裹内容（spinning 时覆盖半透明遮罩）","en-US":"Wrapped content (covered by a translucent mask while spinning)"}}]},notes:[{"zh-CN":"纯展示组件，无事件；指示器动画由样式驱动，可通过 prefers-reduced-motion 减弱。","en-US":"A purely presentational component with no events; the indicator animation is CSS-driven and can be reduced via prefers-reduced-motion."}],a11y:[{"zh-CN":'加载指示器携带 aria-live 区域与 busy 状态，读屏可感知"加载中"；tip 作为可朗读说明。',"en-US":'The indicator carries an aria-live region and busy state so screen readers can perceive "loading"; tip serves as a readable description.'}]},bB={class:"demo-column"},yB={class:"demo-text"},SB=Z({__name:"basic",setup(e){const t=H(T()?"（待操作）":"(pending)");return(n,a)=>(b(),x("div",bB,[N(r(Ja),{content:r(T)()?"确定要删除这条记录吗？删除后不可恢复。":"Are you sure you want to delete this record? This cannot be undone.",onConfirm:a[0]||(a[0]=l=>t.value=r(T)()?"已确认删除":"Deletion confirmed"),onCancel:a[1]||(a[1]=l=>t.value=r(T)()?"已取消":"Cancelled")},{default:z(()=>[N(r(K),{type:"danger"},{default:z(()=>[L(U(r(T)()?"删除记录":"Delete record"),1)]),_:1})]),_:1},8,["content"]),w("p",yB,U(r(T)()?"操作结果：":"Result: ")+U(t.value),1)]))}}),xB={class:"demo-row"},_B=Z({__name:"variants",setup(e){return(t,n)=>(b(),x("div",xB,[N(r(Ja),{content:r(T)()?"右侧弹出的气泡确认":"Popover confirm on the right",placement:"right","confirm-text":r(T)()?"好的":"OK","cancel-text":r(T)()?"再想想":"Think again"},{default:z(()=>[N(r(K),null,{default:z(()=>[L(U(r(T)()?"右侧 + 自定义按钮":"Right + custom buttons"),1)]),_:1})]),_:1},8,["content","confirm-text","cancel-text"]),N(r(Ja),{content:r(T)()?"禁用后点击无效":"No effect when disabled",disabled:""},{default:z(()=>[N(r(K),null,{default:z(()=>[L(U(r(T)()?"禁用":"Disabled"),1)]),_:1})]),_:1},8,["content"])]))}});function CB(){const e=ne(),[t,n]=R.useState(e?"（待操作）":"(pending)");return m.jsxs("div",{className:"demo-column",children:[m.jsx(sl,{content:e?"确定要删除这条记录吗？删除后不可恢复。":"Are you sure you want to delete this record? This cannot be undone.",onConfirm:()=>n(e?"已确认删除":"Deletion confirmed"),onCancel:()=>n(e?"已取消":"Cancelled"),children:m.jsx(P,{type:"danger",children:e?"删除记录":"Delete record"})}),m.jsxs("p",{className:"demo-text",children:[e?"操作结果：":"Result: ",t]})]})}function kB(){const e=ne();return m.jsxs("div",{className:"demo-row",children:[m.jsx(sl,{content:e?"右侧弹出的气泡确认":"Popover confirm on the right",placement:"right",confirmText:e?"好的":"OK",cancelText:e?"再想想":"Think again",children:m.jsx(P,{children:e?"右侧 + 自定义按钮":"Right + custom buttons"})}),m.jsx(sl,{content:e?"禁用后点击无效":"No effect when disabled",disabled:!0,children:m.jsx(P,{children:e?"禁用":"Disabled"})})]})}const wB=`<script setup lang="ts">
import { ref } from 'vue';
import { Popconfirm, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const result = ref(isZh() ? '（待操作）' : '(pending)');
<\/script>

<template>
  <div class="demo-column">
    <Popconfirm
      :content="
        isZh()
          ? '确定要删除这条记录吗？删除后不可恢复。'
          : 'Are you sure you want to delete this record? This cannot be undone.'
      "
      @confirm="result = isZh() ? '已确认删除' : 'Deletion confirmed'"
      @cancel="result = isZh() ? '已取消' : 'Cancelled'"
    >
      <Button type="danger">{{ isZh() ? '删除记录' : 'Delete record' }}</Button>
    </Popconfirm>
    <p class="demo-text">{{ isZh() ? '操作结果：' : 'Result: ' }}{{ result }}</p>
  </div>
</template>
`,NB=`<script setup lang="ts">
import { Popconfirm, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-row">
    <Popconfirm
      :content="isZh() ? '右侧弹出的气泡确认' : 'Popover confirm on the right'"
      placement="right"
      :confirm-text="isZh() ? '好的' : 'OK'"
      :cancel-text="isZh() ? '再想想' : 'Think again'"
    >
      <Button>{{ isZh() ? '右侧 + 自定义按钮' : 'Right + custom buttons' }}</Button>
    </Popconfirm>
    <Popconfirm :content="isZh() ? '禁用后点击无效' : 'No effect when disabled'" disabled>
      <Button>{{ isZh() ? '禁用' : 'Disabled' }}</Button>
    </Popconfirm>
  </div>
</template>
`,TB=`import { useState } from 'react';
import { Popconfirm, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function PopconfirmBasicDemo() {
  const isZh = useIsZh();
  const [result, setResult] = useState(isZh ? '（待操作）' : '(pending)');

  return (
    <div className="demo-column">
      <Popconfirm
        content={
          isZh
            ? '确定要删除这条记录吗？删除后不可恢复。'
            : 'Are you sure you want to delete this record? This cannot be undone.'
        }
        onConfirm={() => setResult(isZh ? '已确认删除' : 'Deletion confirmed')}
        onCancel={() => setResult(isZh ? '已取消' : 'Cancelled')}
      >
        <Button type="danger">{isZh ? '删除记录' : 'Delete record'}</Button>
      </Popconfirm>
      <p className="demo-text">
        {isZh ? '操作结果：' : 'Result: '}
        {result}
      </p>
    </div>
  );
}
`,zB=`import { Popconfirm, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function PopconfirmVariantsDemo() {
  const isZh = useIsZh();
  return (
    <div className="demo-row">
      <Popconfirm
        content={isZh ? '右侧弹出的气泡确认' : 'Popover confirm on the right'}
        placement="right"
        confirmText={isZh ? '好的' : 'OK'}
        cancelText={isZh ? '再想想' : 'Think again'}
      >
        <Button>{isZh ? '右侧 + 自定义按钮' : 'Right + custom buttons'}</Button>
      </Popconfirm>
      <Popconfirm content={isZh ? '禁用后点击无效' : 'No effect when disabled'} disabled>
        <Button>{isZh ? '禁用' : 'Disabled'}</Button>
      </Popconfirm>
    </div>
  );
}
`,UB={name:"Popconfirm",slug:"popconfirm",title:"气泡确认",category:"feedback",summary:{"zh-CN":'点击元素弹出轻量确认气泡，适合"删除"等需要二次确认但不必打断整页的操作。',"en-US":'A lightweight confirmation bubble triggered by clicking an element, ideal for actions like "delete" that need a second confirmation without interrupting the whole page.'},features:[{"zh-CN":"点击触发元素切换气泡，确定 / 取消按钮在收起后分别回调 confirm / cancel","en-US":"Clicking the trigger toggles the bubble; the OK / cancel buttons fire confirm / cancel after the bubble closes"},{"zh-CN":'confirmText / cancelText 自定义按钮文本（未提供时取全局语言包，zh-CN 默认"确定"/"取消"），placement 控制四方位',"en-US":'confirmText / cancelText customize the button labels (falling back to the global locale, zh-CN defaults to "确定"/"取消"); placement controls the four directions'},{"zh-CN":"content 属性或 content 插槽 / renderContent 自定义确认文案；disabled 关闭交互","en-US":"Confirmation text via the content prop or the content slot / renderContent; disabled turns off interaction"},{"zh-CN":"点击气泡外部仅收起，不触发任何回调","en-US":"Clicking outside only closes the bubble without firing any callback"}],scenarios:[{"zh-CN":"删除 / 提交等轻量二次确认、危险操作前置拦截等场景。","en-US":"Lightweight second confirmations for delete / submit actions, or pre-interception of dangerous operations."}],demos:[{id:"basic",title:{"zh-CN":"删除确认","en-US":"Delete Confirmation"},description:{"zh-CN":"点击触发元素弹出确认，确定与取消分别触发不同回调。","en-US":"Click the trigger to pop up the confirmation; OK and cancel fire separate callbacks."},vueComponent:SB,reactComponent:CB,vueSource:wB,reactSource:TB},{id:"variants",title:{"zh-CN":"方位 / 按钮文本 / 禁用","en-US":"Placement / Button Text / Disabled"},description:{"zh-CN":"placement 右侧弹出并自定义按钮文案；disabled 下点击无效。","en-US":"placement pops to the right with custom button text; clicks do nothing when disabled."},vueComponent:_B,reactComponent:kB,vueSource:NB,reactSource:zB}],api:{props:[{name:"content",type:"string",default:"—",description:{"zh-CN":"确认文案（content 插槽 / renderContent 可覆盖）","en-US":"Confirmation text (can be overridden by the content slot / renderContent)"}},{name:"confirmText",type:"string",default:"—",description:{"zh-CN":"确认按钮文本；未提供时取全局语言包（zh-CN：确定）","en-US":"OK button text; falls back to the global locale when omitted (zh-CN: 确定)"}},{name:"cancelText",type:"string",default:"—",description:{"zh-CN":"取消按钮文本；未提供时取全局语言包（zh-CN：取消）","en-US":"Cancel button text; falls back to the global locale when omitted (zh-CN: 取消)"}},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'top'",description:{"zh-CN":"气泡方位","en-US":"Bubble placement"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态（运行时禁用会收起已开气泡）","en-US":"Disabled state (disabling at runtime closes an open bubble)"}},{name:"onConfirm",type:"() => void",default:"—",description:{"zh-CN":"点击确定回调（气泡收起后触发）","en-US":"OK click callback (fired after the bubble closes)"}},{name:"onCancel",type:"() => void",default:"—",description:{"zh-CN":"点击取消回调（气泡收起后触发）","en-US":"Cancel click callback (fired after the bubble closes)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"confirm",react:"onConfirm",payload:"—",description:{"zh-CN":"点击确定（气泡收起后触发）","en-US":"Fired on OK click (after the bubble closes)"}},{vue:"cancel",react:"onCancel",payload:"—",description:{"zh-CN":"点击取消（气泡收起后触发）","en-US":"Fired on cancel click (after the bubble closes)"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"触发元素","en-US":"Trigger element"}},{vue:"content",react:"renderContent",description:{"zh-CN":"确认文案内容（覆盖 content prop）","en-US":"Confirmation content (overrides the content prop)"}}]},notes:[{"zh-CN":"点击外部关闭只收起气泡，不会触发 confirm 或 cancel，便于用户无副作用地放弃操作。","en-US":"Clicking outside only closes the bubble without firing confirm or cancel, letting users back out with no side effects."},{"zh-CN":"气泡为 CSS 包裹定位，与 Tooltip 类似，需注意父容器 overflow 裁剪。","en-US":"The bubble uses CSS wrapper positioning like Tooltip, so watch out for clipping by parent overflow."},{"zh-CN":"自带视口避让：首选方位空间不足时自动翻转（箭头跟随），溢出视口边缘时自动钳制，滚动与窗口 resize 时实时重算。","en-US":"Built-in viewport collision handling: flips when the preferred placement lacks space (the arrow follows), clamps at viewport edges, and recalculates on scroll and window resize."}],a11y:[{"zh-CN":"确认 / 取消为原生按钮可键盘操作，气泡打开后焦点进入弹层，Esc 可取消关闭。","en-US":"The OK / cancel buttons are native and keyboard operable; focus moves into the popup when it opens, and Esc cancels and closes it."}]},$B=Z({__name:"basic",setup(e){const t=H(null),n=a=>{alert(T()?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return(a,l)=>(b(),Q(r(Cr),{ref_key:"formRef",ref:t,"initial-values":{username:"",email:""},rules:{username:[{type:"required",message:r(T)()?"请输入用户名":"Username is required"}],email:[{type:"required",message:r(T)()?"请输入邮箱":"Email is required"},{type:"email",message:r(T)()?"邮箱格式不正确":"Invalid email format"}]},onSubmit:n},{actions:z(()=>[N(r(K),{type:"primary",onClick:l[0]||(l[0]=i=>{var o;return(o=t.value)==null?void 0:o.submit()})},{default:z(()=>[L(U(r(T)()?"提交":"Submit"),1)]),_:1}),N(r(K),{onClick:l[1]||(l[1]=i=>{var o;return(o=t.value)==null?void 0:o.resetFields()})},{default:z(()=>[L(U(r(T)()?"重置":"Reset"),1)]),_:1})]),default:z(()=>[N(r(Tt),{name:"username",label:r(T)()?"用户名":"Username"},{default:z(()=>[N(r(it),{placeholder:r(T)()?"请输入用户名":"Enter username"},null,8,["placeholder"])]),_:1},8,["label"]),N(r(Tt),{name:"email",label:r(T)()?"邮箱":"Email"},{default:z(()=>[N(r(it),{placeholder:r(T)()?"请输入邮箱":"Enter email"},null,8,["placeholder"])]),_:1},8,["label"])]),_:1},8,["rules"]))}}),EB=Z({__name:"validation",setup(e){const t=H(null),n=a=>{alert(T()?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return(a,l)=>(b(),Q(r(Cr),{ref_key:"formRef",ref:t,"initial-values":{name:"",email:"",phone:"",password:"",confirm:"",type:"personal",company:""},rules:{name:[{type:"required",message:r(T)()?"姓名必填":"Name is required"}],email:[{type:"required",message:r(T)()?"邮箱必填":"Email is required"},{type:"email",message:r(T)()?"邮箱格式不正确":"Invalid email format"}],phone:[{type:"required",message:r(T)()?"手机号必填":"Phone is required"},{type:"phone",message:r(T)()?"手机号格式不正确":"Invalid phone number"}],password:[{type:"required",message:r(T)()?"密码必填":"Password is required"},{type:"length",min:6,message:r(T)()?"密码至少6位":"Password must be 6+ chars"}],confirm:[{type:"required",message:r(T)()?"请确认密码":"Please confirm password"},{type:"custom",message:r(T)()?"两次密码不一致":"Passwords do not match",validator:(i,o)=>o.password===o.confirm}],company:[{type:"required",when:i=>i.type==="enterprise",message:r(T)()?"企业名称必填":"Company name is required"}]},onSubmit:n},{actions:z(()=>[N(r(K),{type:"primary",onClick:l[0]||(l[0]=i=>{var o;return(o=t.value)==null?void 0:o.submit()})},{default:z(()=>[L(U(r(T)()?"提交":"Submit"),1)]),_:1}),N(r(K),{onClick:l[1]||(l[1]=i=>{var o;return(o=t.value)==null?void 0:o.resetFields()})},{default:z(()=>[L(U(r(T)()?"重置":"Reset"),1)]),_:1})]),default:z(()=>[N(r(Tt),{name:"name",label:r(T)()?"姓名":"Name"},{default:z(()=>[N(r(it),{placeholder:r(T)()?"请输入姓名":"Enter name"},null,8,["placeholder"])]),_:1},8,["label"]),N(r(Tt),{name:"email",label:r(T)()?"邮箱":"Email"},{default:z(()=>[N(r(it),{placeholder:r(T)()?"请输入邮箱":"Enter email"},null,8,["placeholder"])]),_:1},8,["label"]),N(r(Tt),{name:"phone",label:r(T)()?"手机号":"Phone"},{default:z(()=>[N(r(it),{placeholder:r(T)()?"请输入手机号":"Enter phone"},null,8,["placeholder"])]),_:1},8,["label"]),N(r(Tt),{name:"type",label:r(T)()?"类型":"Type"},{default:z(()=>[N(r(fa),{options:[{label:r(T)()?"个人":"Personal",value:"personal"},{label:r(T)()?"企业":"Enterprise",value:"enterprise"}]},null,8,["options"])]),_:1},8,["label"]),N(r(Tt),{name:"company",label:r(T)()?"公司":"Company"},{default:z(()=>[N(r(it),{placeholder:r(T)()?"企业用户必填":"Required for enterprise"},null,8,["placeholder"])]),_:1},8,["label"]),N(r(Tt),{name:"password",label:r(T)()?"密码":"Password"},{default:z(()=>[N(r(it),{type:"password",placeholder:r(T)()?"至少6位":"At least 6 chars"},null,8,["placeholder"])]),_:1},8,["label"]),N(r(Tt),{name:"confirm",label:r(T)()?"确认密码":"Confirm"},{default:z(()=>[N(r(it),{type:"password",placeholder:r(T)()?"再输一次":"Re-enter password"},null,8,["placeholder"])]),_:1},8,["label"])]),_:1},8,["rules"]))}}),AB=Z({__name:"dynamic",setup(e){const t=H(null),n=H([{key:0,label:T()?"联系人 1":"Contact 1"}]);let a=1;const l=()=>{a+=1,n.value.push({key:a,label:T()?`联系人 ${n.value.length+1}`:`Contact ${n.value.length+1}`})},i=s=>{n.value.splice(s,1)},o=s=>{alert(T()?`提交成功：${JSON.stringify(s)}`:`Submitted: ${JSON.stringify(s)}`)};return(s,u)=>(b(),Q(r(Cr),{ref_key:"formRef",ref:t,"initial-values":{},onSubmit:o},{actions:z(()=>[N(r(K),{type:"primary",onClick:u[0]||(u[0]=d=>{var p;return(p=t.value)==null?void 0:p.submit()})},{default:z(()=>[L(U(r(T)()?"提交":"Submit"),1)]),_:1}),N(r(K),{onClick:u[1]||(u[1]=d=>{var p;return(p=t.value)==null?void 0:p.resetFields()})},{default:z(()=>[L(U(r(T)()?"重置":"Reset"),1)]),_:1})]),default:z(()=>[(b(!0),x(ie,null,ye(n.value,(d,p)=>(b(),Q(r(Tt),{key:d.key,name:`contact_${d.key}`,label:d.label},{extra:z(()=>[n.value.length>1?(b(),Q(r(K),{key:0,size:"sm",onClick:c=>i(p)},{default:z(()=>[L(U(r(T)()?"删除":"Remove"),1)]),_:1},8,["onClick"])):V("",!0)]),default:z(()=>[N(r(it),{placeholder:r(T)()?"请输入":"Enter value"},null,8,["placeholder"])]),_:2},1032,["name","label"]))),128)),N(r(Tt),null,{default:z(()=>[N(r(K),{type:"primary",onClick:l},{default:z(()=>[L(U(r(T)()?"添加字段":"Add Field"),1)]),_:1})]),_:1})]),_:1},512))}}),RB={class:"demo-column"},BB={style:{display:"flex",gap:"16px","align-items":"center","margin-bottom":"8px"}},OB=Z({__name:"layout",setup(e){const t=H(!1),n=H("right");return(a,l)=>(b(),x("div",RB,[w("div",BB,[w("label",null,U(r(T)()?"禁用表单":"Disabled"),1),N(r(Et),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i)},null,8,["value"]),w("label",null,U(r(T)()?"标签位置":"Label"),1),N(r(Et),{value:n.value==="top","checked-text":r(T)()?"顶部":"Top","unchecked-text":r(T)()?"右":"Right",onChange:l[1]||(l[1]=i=>n.value=i?"top":"right")},null,8,["value","checked-text","unchecked-text"])]),N(r(Cr),{disabled:t.value,"label-position":n.value,"initial-values":{name:"Alice",email:"alice@test.com"}},{actions:z(()=>[N(r(K),{type:"primary",disabled:t.value},{default:z(()=>[L(U(r(T)()?"保存":"Save"),1)]),_:1},8,["disabled"])]),default:z(()=>[N(r(Tt),{name:"name",label:r(T)()?"姓名":"Name"},{default:z(()=>[N(r(it))]),_:1},8,["label"]),N(r(Tt),{name:"email",label:r(T)()?"邮箱":"Email"},{default:z(()=>[N(r(it))]),_:1},8,["label"]),N(r(Tt),{name:"bio",label:r(T)()?"简介":"Bio"},{default:z(()=>[N(r(it),{type:"search",placeholder:r(T)()?"一句话介绍自己":"Describe yourself"},null,8,["placeholder"])]),_:1},8,["label"])]),_:1},8,["disabled","label-position"])]))}});function ZB(){const e=ne(),t=R.useRef(null),n=a=>{alert(e?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return m.jsxs(Gr,{ref:t,initialValues:{username:"",email:""},rules:{username:[{type:"required",message:e?"请输入用户名":"Username is required"}],email:[{type:"required",message:e?"请输入邮箱":"Email is required"},{type:"email",message:e?"邮箱格式不正确":"Invalid email format"}]},onSubmit:n,children:[m.jsx(Ut,{name:"username",label:e?"用户名":"Username",children:m.jsx(st,{placeholder:e?"请输入用户名":"Enter username"})}),m.jsx(Ut,{name:"email",label:e?"邮箱":"Email",children:m.jsx(st,{placeholder:e?"请输入邮箱":"Enter email"})}),m.jsxs("div",{className:"xui-form__actions",children:[m.jsx(P,{type:"primary",onClick:()=>{var a;return(a=t.current)==null?void 0:a.submit()},children:e?"提交":"Submit"}),m.jsx(P,{onClick:()=>{var a;return(a=t.current)==null?void 0:a.resetFields()},children:e?"重置":"Reset"})]})]})}function DB(){const e=ne(),t=R.useRef(null),n=a=>{alert(e?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return m.jsxs(Gr,{ref:t,initialValues:{name:"",email:"",phone:"",password:"",confirm:"",type:"personal",company:""},rules:{name:[{type:"required",message:e?"姓名必填":"Name is required"}],email:[{type:"required",message:e?"邮箱必填":"Email is required"},{type:"email",message:e?"邮箱格式不正确":"Invalid email format"}],phone:[{type:"required",message:e?"手机号必填":"Phone is required"},{type:"phone",message:e?"手机号格式不正确":"Invalid phone number"}],password:[{type:"required",message:e?"密码必填":"Password is required"},{type:"length",min:6,message:e?"密码至少6位":"Password must be 6+ chars"}],confirm:[{type:"required",message:e?"请确认密码":"Please confirm password"},{type:"custom",message:e?"两次密码不一致":"Passwords do not match",validator:(a,l)=>l.password===l.confirm}],company:[{type:"required",when:a=>a.type==="enterprise",message:e?"企业名称必填":"Company name is required"}]},onSubmit:n,children:[m.jsx(Ut,{name:"name",label:e?"姓名":"Name",children:m.jsx(st,{placeholder:e?"请输入姓名":"Enter name"})}),m.jsx(Ut,{name:"email",label:e?"邮箱":"Email",children:m.jsx(st,{placeholder:e?"请输入邮箱":"Enter email"})}),m.jsx(Ut,{name:"phone",label:e?"手机号":"Phone",children:m.jsx(st,{placeholder:e?"请输入手机号":"Enter phone"})}),m.jsx(Ut,{name:"type",label:e?"类型":"Type",children:m.jsx(ha,{options:[{label:e?"个人":"Personal",value:"personal"},{label:e?"企业":"Enterprise",value:"enterprise"}]})}),m.jsx(Ut,{name:"company",label:e?"公司":"Company",children:m.jsx(st,{placeholder:e?"企业用户必填":"Required for enterprise"})}),m.jsx(Ut,{name:"password",label:e?"密码":"Password",children:m.jsx(st,{type:"password",placeholder:e?"至少6位":"At least 6 chars"})}),m.jsx(Ut,{name:"confirm",label:e?"确认密码":"Confirm",children:m.jsx(st,{type:"password",placeholder:e?"再输一次":"Re-enter password"})}),m.jsxs("div",{className:"xui-form__actions",children:[m.jsx(P,{type:"primary",onClick:()=>{var a;return(a=t.current)==null?void 0:a.submit()},children:e?"提交":"Submit"}),m.jsx(P,{onClick:()=>{var a;return(a=t.current)==null?void 0:a.resetFields()},children:e?"重置":"Reset"})]})]})}function MB(){const e=ne(),t=R.useRef(null),[n,a]=R.useState([{key:0,label:e?"联系人 1":"Contact 1"}]),[l,i]=R.useState(1),o=()=>{const d=l+1;i(d),a(p=>[...p,{key:d,label:e?`联系人 ${p.length+1}`:`Contact ${p.length+1}`}])},s=d=>{a(p=>p.filter((c,f)=>f!==d))},u=d=>{alert(e?`提交成功：${JSON.stringify(d)}`:`Submitted: ${JSON.stringify(d)}`)};return m.jsxs(Gr,{ref:t,initialValues:{},onSubmit:u,children:[n.map((d,p)=>m.jsxs(Ut,{name:`contact_${d.key}`,label:d.label,children:[m.jsx(st,{placeholder:e?"请输入":"Enter value"}),m.jsx("div",{className:"xui-form-item__extra",children:m.jsx(P,{size:"sm",onClick:()=>s(p),children:e?"删除":"Remove"})})]},d.key)),m.jsx(Ut,{children:m.jsx(P,{type:"primary",onClick:o,children:e?"添加字段":"Add Field"})}),m.jsxs("div",{className:"xui-form__actions",children:[m.jsx(P,{type:"primary",onClick:()=>{var d;return(d=t.current)==null?void 0:d.submit()},children:e?"提交":"Submit"}),m.jsx(P,{onClick:()=>{var d;return(d=t.current)==null?void 0:d.resetFields()},children:e?"重置":"Reset"})]})]})}function jB(){const e=ne(),[t,n]=R.useState(!1),[a,l]=R.useState("right");return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",marginBottom:8},children:[m.jsx("label",{children:e?"禁用表单":"Disabled"}),m.jsx(At,{value:t,onChange:n}),m.jsx("label",{children:e?"标签位置":"Label"}),m.jsx(At,{value:a==="top",checkedText:e?"顶部":"Top",uncheckedText:e?"右":"Right",onChange:i=>l(i?"top":"right")})]}),m.jsxs(Gr,{disabled:t,labelPosition:a,initialValues:{name:"Alice",email:"alice@test.com"},children:[m.jsx(Ut,{name:"name",label:e?"姓名":"Name",children:m.jsx(st,{})}),m.jsx(Ut,{name:"email",label:e?"邮箱":"Email",children:m.jsx(st,{})}),m.jsx(Ut,{name:"bio",label:e?"简介":"Bio",children:m.jsx(st,{type:"search",placeholder:e?"一句话介绍自己":"Describe yourself"})}),m.jsx("div",{className:"xui-form__actions",children:m.jsx(P,{type:"primary",disabled:t,children:e?"保存":"Save"})})]})]})}const VB=`<script setup lang="ts">
import { ref } from 'vue';
import { Form, FormItem, Input, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formRef = ref<InstanceType<typeof Form> | null>(null);
const handleSubmit = (values: Record<string, unknown>) => {
  alert(isZh() ? \`提交成功：\${JSON.stringify(values)}\` : \`Submitted: \${JSON.stringify(values)}\`);
};
<\/script>

<template>
  <Form
    ref="formRef"
    :initial-values="{ username: '', email: '' }"
    :rules="{
      username: [{ type: 'required', message: isZh() ? '请输入用户名' : 'Username is required' }],
      email: [
        { type: 'required', message: isZh() ? '请输入邮箱' : 'Email is required' },
        { type: 'email', message: isZh() ? '邮箱格式不正确' : 'Invalid email format' },
      ],
    }"
    @submit="handleSubmit"
  >
    <FormItem name="username" :label="isZh() ? '用户名' : 'Username'">
      <Input :placeholder="isZh() ? '请输入用户名' : 'Enter username'" />
    </FormItem>
    <FormItem name="email" :label="isZh() ? '邮箱' : 'Email'">
      <Input :placeholder="isZh() ? '请输入邮箱' : 'Enter email'" />
    </FormItem>
    <template #actions>
      <Button type="primary" @click="formRef?.submit()">{{ isZh() ? '提交' : 'Submit' }}</Button>
      <Button @click="formRef?.resetFields()">{{ isZh() ? '重置' : 'Reset' }}</Button>
    </template>
  </Form>
</template>
`,LB=`<script setup lang="ts">
import { ref } from 'vue';
import { Form, FormItem, Input, Button, Select } from '@xui-design/vue';
import { isZh } from '../../../i18n';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formRef = ref<InstanceType<typeof Form> | null>(null);

const handleSubmit = (values: Record<string, unknown>) => {
  alert(isZh() ? \`提交成功：\${JSON.stringify(values)}\` : \`Submitted: \${JSON.stringify(values)}\`);
};
<\/script>

<template>
  <Form
    ref="formRef"
    :initial-values="{
      name: '',
      email: '',
      phone: '',
      password: '',
      confirm: '',
      type: 'personal',
      company: '',
    }"
    :rules="{
      name: [{ type: 'required', message: isZh() ? '姓名必填' : 'Name is required' }],
      email: [
        { type: 'required', message: isZh() ? '邮箱必填' : 'Email is required' },
        { type: 'email', message: isZh() ? '邮箱格式不正确' : 'Invalid email format' },
      ],
      phone: [
        { type: 'required', message: isZh() ? '手机号必填' : 'Phone is required' },
        { type: 'phone', message: isZh() ? '手机号格式不正确' : 'Invalid phone number' },
      ],
      password: [
        { type: 'required', message: isZh() ? '密码必填' : 'Password is required' },
        { type: 'length', min: 6, message: isZh() ? '密码至少6位' : 'Password must be 6+ chars' },
      ],
      confirm: [
        { type: 'required', message: isZh() ? '请确认密码' : 'Please confirm password' },
        {
          type: 'custom',
          message: isZh() ? '两次密码不一致' : 'Passwords do not match',
          validator: (_v: unknown, values: Record<string, unknown>) =>
            values.password === values.confirm,
        },
      ],
      company: [
        {
          type: 'required',
          when: (values: Record<string, unknown>) => values.type === 'enterprise',
          message: isZh() ? '企业名称必填' : 'Company name is required',
        },
      ],
    }"
    @submit="handleSubmit"
  >
    <FormItem name="name" :label="isZh() ? '姓名' : 'Name'">
      <Input :placeholder="isZh() ? '请输入姓名' : 'Enter name'" />
    </FormItem>
    <FormItem name="email" :label="isZh() ? '邮箱' : 'Email'">
      <Input :placeholder="isZh() ? '请输入邮箱' : 'Enter email'" />
    </FormItem>
    <FormItem name="phone" :label="isZh() ? '手机号' : 'Phone'">
      <Input :placeholder="isZh() ? '请输入手机号' : 'Enter phone'" />
    </FormItem>
    <FormItem name="type" :label="isZh() ? '类型' : 'Type'">
      <Select
        :options="[
          { label: isZh() ? '个人' : 'Personal', value: 'personal' },
          { label: isZh() ? '企业' : 'Enterprise', value: 'enterprise' },
        ]"
      />
    </FormItem>
    <FormItem name="company" :label="isZh() ? '公司' : 'Company'">
      <Input :placeholder="isZh() ? '企业用户必填' : 'Required for enterprise'" />
    </FormItem>
    <FormItem name="password" :label="isZh() ? '密码' : 'Password'">
      <Input type="password" :placeholder="isZh() ? '至少6位' : 'At least 6 chars'" />
    </FormItem>
    <FormItem name="confirm" :label="isZh() ? '确认密码' : 'Confirm'">
      <Input type="password" :placeholder="isZh() ? '再输一次' : 'Re-enter password'" />
    </FormItem>
    <template #actions>
      <Button type="primary" @click="formRef?.submit()">{{ isZh() ? '提交' : 'Submit' }}</Button>
      <Button @click="formRef?.resetFields()">{{ isZh() ? '重置' : 'Reset' }}</Button>
    </template>
  </Form>
</template>
`,HB=`<script setup lang="ts">
import { ref } from 'vue';
import { Form, FormItem, Input, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formRef = ref<InstanceType<typeof Form> | null>(null);
const fields = ref([{ key: 0, label: isZh() ? '联系人 1' : 'Contact 1' }]);
let nextKey = 1;

const addField = () => {
  nextKey += 1;
  fields.value.push({
    key: nextKey,
    label: isZh() ? \`联系人 \${fields.value.length + 1}\` : \`Contact \${fields.value.length + 1}\`,
  });
};

const removeField = (index: number) => {
  fields.value.splice(index, 1);
};

const handleSubmit = (values: Record<string, unknown>) => {
  alert(isZh() ? \`提交成功：\${JSON.stringify(values)}\` : \`Submitted: \${JSON.stringify(values)}\`);
};
<\/script>

<template>
  <Form ref="formRef" :initial-values="{}" @submit="handleSubmit">
    <FormItem
      v-for="(field, index) in fields"
      :key="field.key"
      :name="\`contact_\${field.key}\`"
      :label="field.label"
    >
      <Input :placeholder="isZh() ? '请输入' : 'Enter value'" />
      <template #extra>
        <Button v-if="fields.length > 1" size="sm" @click="removeField(index)">
          {{ isZh() ? '删除' : 'Remove' }}
        </Button>
      </template>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="addField">{{ isZh() ? '添加字段' : 'Add Field' }}</Button>
    </FormItem>
    <template #actions>
      <Button type="primary" @click="formRef?.submit()">{{ isZh() ? '提交' : 'Submit' }}</Button>
      <Button @click="formRef?.resetFields()">{{ isZh() ? '重置' : 'Reset' }}</Button>
    </template>
  </Form>
</template>
`,IB=`<script setup lang="ts">
import { ref } from 'vue';
import { Form, FormItem, Input, Switch, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const disabled = ref(false);
const labelPosition = ref<'left' | 'right' | 'top'>('right');
<\/script>

<template>
  <div class="demo-column">
    <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px">
      <label>{{ isZh() ? '禁用表单' : 'Disabled' }}</label>
      <Switch v-model:value="disabled" />
      <label>{{ isZh() ? '标签位置' : 'Label' }}</label>
      <Switch
        :value="labelPosition === 'top'"
        :checked-text="isZh() ? '顶部' : 'Top'"
        :unchecked-text="isZh() ? '右' : 'Right'"
        @change="(v: boolean) => (labelPosition = v ? 'top' : 'right')"
      />
    </div>
    <Form
      :disabled="disabled"
      :label-position="labelPosition"
      :initial-values="{ name: 'Alice', email: 'alice@test.com' }"
    >
      <FormItem name="name" :label="isZh() ? '姓名' : 'Name'">
        <Input />
      </FormItem>
      <FormItem name="email" :label="isZh() ? '邮箱' : 'Email'">
        <Input />
      </FormItem>
      <FormItem name="bio" :label="isZh() ? '简介' : 'Bio'">
        <Input type="search" :placeholder="isZh() ? '一句话介绍自己' : 'Describe yourself'" />
      </FormItem>
      <template #actions>
        <Button type="primary" :disabled="disabled">{{ isZh() ? '保存' : 'Save' }}</Button>
      </template>
    </Form>
  </div>
</template>
`,FB=`import { useRef } from 'react';
import { Form, FormItem, Input, Button } from '@xui-design/react';
import type { FormRef } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function FormBasicDemo() {
  const isZh = useIsZh();
  const formRef = useRef<FormRef>(null);

  const handleSubmit = (values: Record<string, unknown>) => {
    alert(isZh ? \`提交成功：\${JSON.stringify(values)}\` : \`Submitted: \${JSON.stringify(values)}\`);
  };

  return (
    <Form
      ref={formRef}
      initialValues={{ username: '', email: '' }}
      rules={{
        username: [{ type: 'required', message: isZh ? '请输入用户名' : 'Username is required' }],
        email: [
          { type: 'required', message: isZh ? '请输入邮箱' : 'Email is required' },
          { type: 'email', message: isZh ? '邮箱格式不正确' : 'Invalid email format' },
        ],
      }}
      onSubmit={handleSubmit}
    >
      <FormItem name="username" label={isZh ? '用户名' : 'Username'}>
        <Input placeholder={isZh ? '请输入用户名' : 'Enter username'} />
      </FormItem>
      <FormItem name="email" label={isZh ? '邮箱' : 'Email'}>
        <Input placeholder={isZh ? '请输入邮箱' : 'Enter email'} />
      </FormItem>
      <div className="xui-form__actions">
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          {isZh ? '提交' : 'Submit'}
        </Button>
        <Button onClick={() => formRef.current?.resetFields()}>{isZh ? '重置' : 'Reset'}</Button>
      </div>
    </Form>
  );
}
`,qB=`import { useRef } from 'react';
import { Form, FormItem, Input, Button, Select } from '@xui-design/react';
import type { FormRef } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function FormValidationDemo() {
  const isZh = useIsZh();
  const formRef = useRef<FormRef>(null);

  const handleSubmit = (values: Record<string, unknown>) => {
    alert(isZh ? \`提交成功：\${JSON.stringify(values)}\` : \`Submitted: \${JSON.stringify(values)}\`);
  };

  return (
    <Form
      ref={formRef}
      initialValues={{
        name: '',
        email: '',
        phone: '',
        password: '',
        confirm: '',
        type: 'personal',
        company: '',
      }}
      rules={{
        name: [{ type: 'required', message: isZh ? '姓名必填' : 'Name is required' }],
        email: [
          { type: 'required', message: isZh ? '邮箱必填' : 'Email is required' },
          { type: 'email', message: isZh ? '邮箱格式不正确' : 'Invalid email format' },
        ],
        phone: [
          { type: 'required', message: isZh ? '手机号必填' : 'Phone is required' },
          { type: 'phone', message: isZh ? '手机号格式不正确' : 'Invalid phone number' },
        ],
        password: [
          { type: 'required', message: isZh ? '密码必填' : 'Password is required' },
          { type: 'length', min: 6, message: isZh ? '密码至少6位' : 'Password must be 6+ chars' },
        ],
        confirm: [
          { type: 'required', message: isZh ? '请确认密码' : 'Please confirm password' },
          {
            type: 'custom',
            message: isZh ? '两次密码不一致' : 'Passwords do not match',
            validator: (_v: unknown, values: Record<string, unknown>) =>
              values.password === values.confirm,
          },
        ],
        company: [
          {
            type: 'required',
            when: (values: Record<string, unknown>) => values.type === 'enterprise',
            message: isZh ? '企业名称必填' : 'Company name is required',
          },
        ],
      }}
      onSubmit={handleSubmit}
    >
      <FormItem name="name" label={isZh ? '姓名' : 'Name'}>
        <Input placeholder={isZh ? '请输入姓名' : 'Enter name'} />
      </FormItem>
      <FormItem name="email" label={isZh ? '邮箱' : 'Email'}>
        <Input placeholder={isZh ? '请输入邮箱' : 'Enter email'} />
      </FormItem>
      <FormItem name="phone" label={isZh ? '手机号' : 'Phone'}>
        <Input placeholder={isZh ? '请输入手机号' : 'Enter phone'} />
      </FormItem>
      <FormItem name="type" label={isZh ? '类型' : 'Type'}>
        <Select
          options={[
            { label: isZh ? '个人' : 'Personal', value: 'personal' },
            { label: isZh ? '企业' : 'Enterprise', value: 'enterprise' },
          ]}
        />
      </FormItem>
      <FormItem name="company" label={isZh ? '公司' : 'Company'}>
        <Input placeholder={isZh ? '企业用户必填' : 'Required for enterprise'} />
      </FormItem>
      <FormItem name="password" label={isZh ? '密码' : 'Password'}>
        <Input type="password" placeholder={isZh ? '至少6位' : 'At least 6 chars'} />
      </FormItem>
      <FormItem name="confirm" label={isZh ? '确认密码' : 'Confirm'}>
        <Input type="password" placeholder={isZh ? '再输一次' : 'Re-enter password'} />
      </FormItem>
      <div className="xui-form__actions">
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          {isZh ? '提交' : 'Submit'}
        </Button>
        <Button onClick={() => formRef.current?.resetFields()}>{isZh ? '重置' : 'Reset'}</Button>
      </div>
    </Form>
  );
}
`,GB=`import { useRef, useState } from 'react';
import { Form, FormItem, Input, Button } from '@xui-design/react';
import type { FormRef } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

interface FieldItem {
  key: number;
  label: string;
}

export default function FormDynamicDemo() {
  const isZh = useIsZh();
  const formRef = useRef<FormRef>(null);
  const [fields, setFields] = useState<FieldItem[]>([
    { key: 0, label: isZh ? '联系人 1' : 'Contact 1' },
  ]);
  const [nextKey, setNextKey] = useState(1);

  const addField = () => {
    const newKey = nextKey + 1;
    setNextKey(newKey);
    setFields((prev) => [
      ...prev,
      { key: newKey, label: isZh ? \`联系人 \${prev.length + 1}\` : \`Contact \${prev.length + 1}\` },
    ]);
  };

  const removeField = (index: number) => {
    setFields((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (values: Record<string, unknown>) => {
    alert(isZh ? \`提交成功：\${JSON.stringify(values)}\` : \`Submitted: \${JSON.stringify(values)}\`);
  };

  return (
    <Form ref={formRef} initialValues={{}} onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <FormItem key={field.key} name={\`contact_\${field.key}\`} label={field.label}>
          <Input placeholder={isZh ? '请输入' : 'Enter value'} />
          <div className="xui-form-item__extra">
            <Button size="sm" onClick={() => removeField(index)}>
              {isZh ? '删除' : 'Remove'}
            </Button>
          </div>
        </FormItem>
      ))}
      <FormItem>
        <Button type="primary" onClick={addField}>
          {isZh ? '添加字段' : 'Add Field'}
        </Button>
      </FormItem>
      <div className="xui-form__actions">
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          {isZh ? '提交' : 'Submit'}
        </Button>
        <Button onClick={() => formRef.current?.resetFields()}>{isZh ? '重置' : 'Reset'}</Button>
      </div>
    </Form>
  );
}
`,YB=`import { useState } from 'react';
import { Form, FormItem, Input, Switch, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function FormLayoutDemo() {
  const isZh = useIsZh();
  const [disabled, setDisabled] = useState(false);
  const [labelPosition, setLabelPosition] = useState<'left' | 'right' | 'top'>('right');

  return (
    <div className="demo-column">
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 8 }}>
        <label>{isZh ? '禁用表单' : 'Disabled'}</label>
        <Switch value={disabled} onChange={setDisabled} />
        <label>{isZh ? '标签位置' : 'Label'}</label>
        <Switch
          value={labelPosition === 'top'}
          checkedText={isZh ? '顶部' : 'Top'}
          uncheckedText={isZh ? '右' : 'Right'}
          onChange={(v: boolean) => setLabelPosition(v ? 'top' : 'right')}
        />
      </div>
      <Form
        disabled={disabled}
        labelPosition={labelPosition}
        initialValues={{ name: 'Alice', email: 'alice@test.com' }}
      >
        <FormItem name="name" label={isZh ? '姓名' : 'Name'}>
          <Input />
        </FormItem>
        <FormItem name="email" label={isZh ? '邮箱' : 'Email'}>
          <Input />
        </FormItem>
        <FormItem name="bio" label={isZh ? '简介' : 'Bio'}>
          <Input type="search" placeholder={isZh ? '一句话介绍自己' : 'Describe yourself'} />
        </FormItem>
        <div className="xui-form__actions">
          <Button type="primary" disabled={disabled}>
            {isZh ? '保存' : 'Save'}
          </Button>
        </div>
      </Form>
    </div>
  );
}
`,KB={name:"Form",slug:"form",title:"表单",category:"form",summary:{"zh-CN":"功能完整的表单容器组件，支持字段注册、同步/异步校验、跨字段关联、条件校验、动态增删字段，以及禁用/只读/标签布局等场景。","en-US":"A full-featured form container with field registration, sync/async validation, cross-field rules, conditional validation, dynamic add/remove fields, and disabled/readonly/label layout support."},features:[{"zh-CN":"Form + FormItem 复合容器，通过 provide/inject（Vue）或 Context（React）自动连接","en-US":"Form + FormItem compound container; auto-connected via provide/inject (Vue) or Context (React)"},{"zh-CN":"FormItem 通过 VNode 克隆自动注入 value / onChange / onBlur，子组件无需手动绑定","en-US":"FormItem auto-injects value / onChange / onBlur via VNode cloning; no manual binding needed"},{"zh-CN":"内置校验规则：required / email / phone / number / length / regex / url / custom","en-US":"Built-in validators: required / email / phone / number / length / regex / url / custom"},{"zh-CN":"支持同步与异步校验、条件校验（when）、跨字段关联校验（validator 可访问全部值）","en-US":"Sync and async validation, conditional rules (when), cross-field validation (validator receives all values)"},{"zh-CN":"校验触发时机：change / blur / submit，可在规则级与表单级配置","en-US":"Validation triggers: change / blur / submit, configurable at rule and form level"},{"zh-CN":"通过 ref 暴露 validate / resetFields / getFieldValue / setFieldValue / clearValidate / submit 等命令式 API","en-US":"Imperative API via ref: validate / resetFields / getFieldValue / setFieldValue / clearValidate / submit"},{"zh-CN":"支持表单禁用、只读、标签位置（left / right / top）、标签宽度自定义","en-US":"Form-level disabled, readonly, label position (left / right / top), and custom label width"}],scenarios:[{"zh-CN":"注册表单、设置表单、多步表单、条件表单、动态字段表单等场景。","en-US":"Registration forms, settings forms, multi-step forms, conditional forms, dynamic field forms."}],demos:[{id:"basic",title:{"zh-CN":"基础用法","en-US":"Basic Usage"},description:{"zh-CN":"使用 Form + FormItem 组合，配置 rules 校验，提交后触发回调。","en-US":"Compose Form + FormItem, configure rules for validation, and handle submit callback."},vueComponent:$B,reactComponent:ZB,vueSource:VB,reactSource:FB},{id:"validation",title:{"zh-CN":"复杂校验","en-US":"Complex Validation"},description:{"zh-CN":"内置规则（required/email/phone/length）、跨字段关联（密码确认）、条件校验（when）。","en-US":"Built-in rules (required/email/phone/length), cross-field validation (password confirm), conditional rules (when)."},vueComponent:EB,reactComponent:DB,vueSource:LB,reactSource:qB},{id:"dynamic",title:{"zh-CN":"动态增删字段","en-US":"Dynamic Fields"},description:{"zh-CN":"通过 v-for 循环渲染 FormItem，动态增删字段列表。","en-US":"Render FormItems via v-for loop, dynamically add/remove field items."},vueComponent:AB,reactComponent:MB,vueSource:HB,reactSource:GB},{id:"layout",title:{"zh-CN":"禁用 / 标签布局","en-US":"Disabled / Label Layout"},description:{"zh-CN":"disabled 禁用全部字段，labelPosition 切换标签位置（left / right / top）。","en-US":"disabled disables all fields, labelPosition toggles label position (left / right / top)."},vueComponent:OB,reactComponent:jB,vueSource:IB,reactSource:YB}],api:{props:[{name:"initialValues",type:"Record<string, unknown>",default:"{}",description:{"zh-CN":"表单初始值（非受控模式下的字段初始值）","en-US":"Form initial values (non-controlled initial field values)"}},{name:"rules",type:"Record<string, ValidationRule[]>",default:"—",description:{"zh-CN":"字段级校验规则映射（key 为字段名）","en-US":"Field-level validation rules map (key is field name)"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"全局禁用","en-US":"Disable all fields"}},{name:"readonly",type:"boolean",default:"false",description:{"zh-CN":"全局只读","en-US":"Readonly for all fields"}},{name:"labelWidth",type:"string | number",default:"—",description:{"zh-CN":"标签宽度（数值按 px，字符串原样输出）","en-US":"Label width (number as px, string as-is)"}},{name:"labelPosition",type:"'left' | 'right' | 'top'",default:"'right'",description:{"zh-CN":"标签位置","en-US":"Label position"}},{name:"validateTrigger",type:"'change' | 'blur' | 'submit' | Array",default:"—",description:{"zh-CN":"校验触发时机","en-US":"Validation trigger timing"}},{name:"scrollToFirstError",type:"boolean",default:"false",description:{"zh-CN":"校验失败时滚动到第一个错误字段","en-US":"Scroll to first error field on validation failure"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"自定义类名","en-US":"Custom class name"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"自定义样式","en-US":"Custom styles"}}],events:[{vue:"submit",react:"onSubmit",payload:"FormValues",description:{"zh-CN":"提交（校验通过后）","en-US":"Submit (after validation passes)"}},{vue:"submitFail",react:"onSubmitFail",payload:"FormErrors",description:{"zh-CN":"校验失败","en-US":"Validation failed"}},{vue:"valuesChange",react:"onValuesChange",payload:"(changed, all)",description:{"zh-CN":"字段值变更","en-US":"Field value changed"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"表单内容（FormItem 列表）","en-US":"Form content (FormItem list)"}},{vue:"actions",react:"—",description:{"zh-CN":"底部操作区域","en-US":"Bottom actions area"}}],methods:[{name:"validate",signature:"(trigger?: ValidationTrigger) => Promise<FormValidationResult>",description:{"zh-CN":"校验全部字段","en-US":"Validate all fields"}},{name:"validateField",signature:"(name: string, trigger?) => Promise<string[]>",description:{"zh-CN":"校验指定字段","en-US":"Validate a specific field"}},{name:"getFieldValue",signature:"(name: string) => unknown",description:{"zh-CN":"获取字段值","en-US":"Get field value"}},{name:"getFieldsValue",signature:"() => FormValues",description:{"zh-CN":"获取全部字段值","en-US":"Get all field values"}},{name:"setFieldValue",signature:"(name: string, value: unknown) => void",description:{"zh-CN":"设置字段值","en-US":"Set field value"}},{name:"setFieldsValue",signature:"(values: FormValues) => void",description:{"zh-CN":"批量设置字段值","en-US":"Batch set field values"}},{name:"resetFields",signature:"(names?: string[]) => void",description:{"zh-CN":"重置字段","en-US":"Reset fields"}},{name:"clearValidate",signature:"(names?: string[]) => void",description:{"zh-CN":"清除校验错误","en-US":"Clear validation errors"}},{name:"submit",signature:"() => Promise<FormValidationResult>",description:{"zh-CN":"提交表单","en-US":"Submit the form"}}],types:[{name:"ValidationRule",definition:`type ValidationRule = {
  type?: 'required' | 'email' | 'phone' | 'number' | 'length' | 'regex' | 'url' | 'custom'
  message?: string
  trigger?: 'change' | 'blur' | 'submit'
  min?: number        // number/length 最小值
  max?: number        // number/length 最大值
  exact?: number      // 精确值/长度
  pattern?: string | RegExp  // regex 正则
  validator?: (value: unknown, values: FormValues) => boolean | string | Promise<boolean | string>
  when?: (values: FormValues) => boolean  // 条件校验
}`,description:{"zh-CN":"校验规则定义（validator 返回 true 表示通过，返回 string 表示错误信息）","en-US":"Validation rule definition (validator returns true for pass, string for error)"}},{name:"FormItemProps",definition:`type FormItemProps = {
  name?: string         // 字段名（对应 rules/initialValues 的 key）
  label?: string        // 标签文本
  rules?: ValidationRule[]  // 字段级规则
  required?: boolean    // 是否必填（影响星号显示）
  trigger?: ValidationTrigger | ValidationTrigger[]  // 本字段校验触发
  validateFirst?: boolean  // 仅显示第一条错误
  hidden?: boolean     // 是否隐藏
  extra?: string        // 额外提示
  labelAlign?: 'left' | 'right'
}`,description:{"zh-CN":"FormItem 属性","en-US":"FormItem props"}}]},notes:[{"zh-CN":'FormItem 通过 VNode 克隆自动注入 value 和事件，无需手动绑定——只需用 <FormItem name="xxx"> 包裹子组件即可。',"en-US":'FormItem auto-injects value and events via VNode cloning—no manual binding needed. Just wrap child components with <FormItem name="xxx">.'},{"zh-CN":"所有 XUI 表单组件（Input / Select / Checkbox / Switch / DatePicker 等）统一使用 value 作为受控 prop，因此 FormItem 可自动注入。","en-US":"All XUI form components (Input / Select / Checkbox / Switch / DatePicker) use value as the controlled prop, enabling auto-injection."},{"zh-CN":"submit 触发时机执行所有规则（忽略 trigger 过滤）；change / blur 仅执行匹配的规则。","en-US":"submit executes all rules (bypasses trigger filter); change / blur only execute matching rules."},{"zh-CN":"rules 可在 Form 级和 FormItem 级同时配置，合并执行（FormItem 规则优先在前）。","en-US":"rules can be configured at both Form and FormItem level; merged with FormItem rules first."}],a11y:[{"zh-CN":"渲染为原生 <form> 元素，标签使用 <label> 包裹，保留原生提交行为。","en-US":"Renders as a native <form> element with <label> wrapping, preserving native submit behavior."}]},py=[F2,uU,wU,IU,t$,g$,U$,L$,sE,yE,EE,IE,tA,gA,AA,HA,tR,mR,kR,ZR,YR,lB,gB,UB,KB],fy=new Map(py.map(e=>[e.slug,e])),PB=()=>Dw.map(e=>({category:e,components:Mw.filter(t=>t.category===e.key)}));function XB(e,t){const n=cy.createRoot(e);return n.render(R.createElement(t)),n}var hy={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(a){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,o={},s={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function h(y){return y instanceof u?new u(y.type,h(y.content),y.alias):Array.isArray(y)?y.map(h):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++i}),h.__id},clone:function h(y,k){k=k||{};var E,$;switch(s.util.type(y)){case"Object":if($=s.util.objId(y),k[$])return k[$];E={},k[$]=E;for(var A in y)y.hasOwnProperty(A)&&(E[A]=h(y[A],k));return E;case"Array":return $=s.util.objId(y),k[$]?k[$]:(E=[],k[$]=E,y.forEach(function(B,M){E[M]=h(B,k)}),E);default:return y}},getLanguage:function(h){for(;h;){var y=l.exec(h.className);if(y)return y[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,y){h.className=h.className.replace(RegExp(l,"gi"),""),h.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(E){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(h){var y=document.getElementsByTagName("script");for(var k in y)if(y[k].src==h)return y[k]}return null}},isActive:function(h,y,k){for(var E="no-"+y;h;){var $=h.classList;if($.contains(y))return!0;if($.contains(E))return!1;h=h.parentElement}return!!k}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(h,y){var k=s.util.clone(s.languages[h]);for(var E in y)k[E]=y[E];return k},insertBefore:function(h,y,k,E){E=E||s.languages;var $=E[h],A={};for(var B in $)if($.hasOwnProperty(B)){if(B==y)for(var M in k)k.hasOwnProperty(M)&&(A[M]=k[M]);k.hasOwnProperty(B)||(A[B]=$[B])}var D=E[h];return E[h]=A,s.languages.DFS(s.languages,function(J,de){de===D&&J!=h&&(this[J]=A)}),A},DFS:function h(y,k,E,$){$=$||{};var A=s.util.objId;for(var B in y)if(y.hasOwnProperty(B)){k.call(y,B,y[B],E||B);var M=y[B],D=s.util.type(M);D==="Object"&&!$[A(M)]?($[A(M)]=!0,h(M,k,null,$)):D==="Array"&&!$[A(M)]&&($[A(M)]=!0,h(M,k,B,$))}}},plugins:{},highlightAll:function(h,y){s.highlightAllUnder(document,h,y)},highlightAllUnder:function(h,y,k){var E={callback:k,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),s.hooks.run("before-all-elements-highlight",E);for(var $=0,A;A=E.elements[$++];)s.highlightElement(A,y===!0,E.callback)},highlightElement:function(h,y,k){var E=s.util.getLanguage(h),$=s.languages[E];s.util.setLanguage(h,E);var A=h.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(A,E);var B=h.textContent,M={element:h,language:E,grammar:$,code:B};function D(de){M.highlightedCode=de,s.hooks.run("before-insert",M),M.element.innerHTML=M.highlightedCode,s.hooks.run("after-highlight",M),s.hooks.run("complete",M),k&&k.call(M.element)}if(s.hooks.run("before-sanity-check",M),A=M.element.parentElement,A&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!M.code){s.hooks.run("complete",M),k&&k.call(M.element);return}if(s.hooks.run("before-highlight",M),!M.grammar){D(s.util.encode(M.code));return}if(y&&a.Worker){var J=new Worker(s.filename);J.onmessage=function(de){D(de.data)},J.postMessage(JSON.stringify({language:M.language,code:M.code,immediateClose:!0}))}else D(s.highlight(M.code,M.grammar,M.language))},highlight:function(h,y,k){var E={code:h,grammar:y,language:k};if(s.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=s.tokenize(E.code,E.grammar),s.hooks.run("after-tokenize",E),u.stringify(s.util.encode(E.tokens),E.language)},tokenize:function(h,y){var k=y.rest;if(k){for(var E in k)y[E]=k[E];delete y.rest}var $=new c;return f($,$.head,h),p(h,$,y,$.head,0),C($)},hooks:{all:{},add:function(h,y){var k=s.hooks.all;k[h]=k[h]||[],k[h].push(y)},run:function(h,y){var k=s.hooks.all[h];if(!(!k||!k.length))for(var E=0,$;$=k[E++];)$(y)}},Token:u};a.Prism=s;function u(h,y,k,E){this.type=h,this.content=y,this.alias=k,this.length=(E||"").length|0}u.stringify=function h(y,k){if(typeof y=="string")return y;if(Array.isArray(y)){var E="";return y.forEach(function(D){E+=h(D,k)}),E}var $={type:y.type,content:h(y.content,k),tag:"span",classes:["token",y.type],attributes:{},language:k},A=y.alias;A&&(Array.isArray(A)?Array.prototype.push.apply($.classes,A):$.classes.push(A)),s.hooks.run("wrap",$);var B="";for(var M in $.attributes)B+=" "+M+'="'+($.attributes[M]||"").replace(/"/g,"&quot;")+'"';return"<"+$.tag+' class="'+$.classes.join(" ")+'"'+B+">"+$.content+"</"+$.tag+">"};function d(h,y,k,E){h.lastIndex=y;var $=h.exec(k);if($&&E&&$[1]){var A=$[1].length;$.index+=A,$[0]=$[0].slice(A)}return $}function p(h,y,k,E,$,A){for(var B in k)if(!(!k.hasOwnProperty(B)||!k[B])){var M=k[B];M=Array.isArray(M)?M:[M];for(var D=0;D<M.length;++D){if(A&&A.cause==B+","+D)return;var J=M[D],de=J.inside,ae=!!J.lookbehind,se=!!J.greedy,ut=J.alias;if(se&&!J.pattern.global){var G=J.pattern.toString().match(/[imsuy]*$/)[0];J.pattern=RegExp(J.pattern.source,G+"g")}for(var te=J.pattern||J,W=E.next,j=$;W!==y.tail&&!(A&&j>=A.reach);j+=W.value.length,W=W.next){var q=W.value;if(y.length>h.length)return;if(!(q instanceof u)){var le=1,ue;if(se){if(ue=d(te,j,h,ae),!ue||ue.index>=h.length)break;var X=ue.index,We=ue.index+ue[0].length,Fe=j;for(Fe+=W.value.length;X>=Fe;)W=W.next,Fe+=W.value.length;if(Fe-=W.value.length,j=Fe,W.value instanceof u)continue;for(var ct=W;ct!==y.tail&&(Fe<We||typeof ct.value=="string");ct=ct.next)le++,Fe+=ct.value.length;le--,q=h.slice(j,Fe),ue.index-=j}else if(ue=d(te,0,q,ae),!ue)continue;var X=ue.index,ze=ue[0],ee=q.slice(0,X),Oe=q.slice(X+ze.length),ve=j+q.length;A&&ve>A.reach&&(A.reach=ve);var qe=W.prev;ee&&(qe=f(y,qe,ee),j+=ee.length),g(y,qe,le);var hl=new u(B,de?s.tokenize(ze,de):ze,ut,ze);if(W=f(y,qe,hl),Oe&&f(y,W,Oe),le>1){var Kr={cause:B+","+D,reach:ve};p(h,y,k,W.prev,j,Kr),A&&Kr.reach>A.reach&&(A.reach=Kr.reach)}}}}}}function c(){var h={value:null,prev:null,next:null},y={value:null,prev:h,next:null};h.next=y,this.head=h,this.tail=y,this.length=0}function f(h,y,k){var E=y.next,$={value:k,prev:y,next:E};return y.next=$,E.prev=$,h.length++,$}function g(h,y,k){for(var E=y.next,$=0;$<k&&E!==h.tail;$++)E=E.next;y.next=E,E.prev=y,h.length-=$}function C(h){for(var y=[],k=h.head.next;k!==h.tail;)y.push(k.value),k=k.next;return y}if(!a.document)return a.addEventListener&&(s.disableWorkerMessageHandler||a.addEventListener("message",function(h){var y=JSON.parse(h.data),k=y.language,E=y.code,$=y.immediateClose;a.postMessage(s.highlight(E,s.languages[k],k)),$&&a.close()},!1)),s;var S=s.util.currentScript();S&&(s.filename=S.src,S.hasAttribute("data-manual")&&(s.manual=!0));function _(){s.manual||s.highlightAll()}if(!s.manual){var v=document.readyState;v==="loading"||v==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return s}(t);e.exports&&(e.exports=n),typeof Fm<"u"&&(Fm.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(l,i){var o={};o["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};s["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var u={};u[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(a,l){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:n.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(a){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+l.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var i=a.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",l=function(S,_){return"✖ Error "+S+" while fetching file: "+_},i="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",u="loading",d="loaded",p="failed",c="pre[data-src]:not(["+s+'="'+d+'"]):not(['+s+'="'+u+'"])';function f(S,_,v){var h=new XMLHttpRequest;h.open("GET",S,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?_(h.responseText):h.status>=400?v(l(h.status,h.statusText)):v(i))},h.send(null)}function g(S){var _=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(S||"");if(_){var v=Number(_[1]),h=_[2],y=_[3];return h?y?[v,Number(y)]:[v,void 0]:[v,v]}}n.hooks.add("before-highlightall",function(S){S.selector+=", "+c}),n.hooks.add("before-sanity-check",function(S){var _=S.element;if(_.matches(c)){S.code="",_.setAttribute(s,u);var v=_.appendChild(document.createElement("CODE"));v.textContent=a;var h=_.getAttribute("data-src"),y=S.language;if(y==="none"){var k=(/\.(\w+)$/.exec(h)||[,"none"])[1];y=o[k]||k}n.util.setLanguage(v,y),n.util.setLanguage(_,y);var E=n.plugins.autoloader;E&&E.loadLanguages(y),f(h,function($){_.setAttribute(s,d);var A=g(_.getAttribute("data-range"));if(A){var B=$.split(/\r\n?|\n/g),M=A[0],D=A[1]==null?B.length:A[1];M<0&&(M+=B.length),M=Math.max(0,Math.min(M-1,B.length)),D<0&&(D+=B.length),D=Math.max(0,Math.min(D,B.length)),$=B.slice(M,D).join(`
`),_.hasAttribute("data-start")||_.setAttribute("data-start",String(M+1))}v.textContent=$,n.highlightElement(v)},function($){_.setAttribute(s,p),v.textContent=$})}}),n.plugins.fileHighlight={highlight:function(_){for(var v=(_||document).querySelectorAll(c),h=0,y;y=v[h++];)n.highlightElement(y)}};var C=!1;n.fileHighlight=function(){C||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),C=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(hy);var QB=hy.exports;const ss=Gw(QB);Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,o=0;o<l.length;o++)i[l[o]]=e.languages.bash[l[o]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const JB={nav:{start:"开始",intro:"介绍",theme:"主题定制",i18n:"国际化",floating:"浮层视口避让",soon:"待补充"},topbar:{light:"明亮",dark:"暗黑",system:"跟随系统",switchLang:"English"},component:{features:"功能特性",scenarios:"使用场景",demos:"代码演示",demosHint:"每个 demo 均可切换 Vue / React 标签页实时交互，并可展开查看对应框架源码。",api:"API 文档",notes:"注意事项",a11y:"无障碍",notFoundTitle:"该组件文档尚未上线",notFoundDesc:"组件已在规划清单中，文档正在陆续补充。",backHome:"返回首页"},demo:{showCode:"查看代码",hideCode:"隐藏代码"},code:{copy:"复制",copied:"已复制"},api:{prop:"属性",type:"类型",default:"默认值",description:"说明",required:"必填",eventsTitle:"Events / 回调",vueEvent:"Events（Vue）",reactCallback:"回调（React）",payload:"载荷",slotsTitle:"Slots / 渲染回调",vueSlot:"插槽（Vue）",methodsTitle:"命令式方法",method:"方法",signature:"签名",typesTitle:"契约类型"},toc:{title:"目录"},home:{heroDesc:"一套核心契约，Vue 3 与 React 19 双端同构的通用组件库",onlineBadge:"组件文档已上线",featuresTitle:"特性",installTitle:"安装",quickStartTitle:"快速开始",overviewTitle:"组件总览",features:[{title:"单一契约 @xui-design/core",desc:"ComponentSpec 是双端唯一合同，Props / Events / Slots 由契约层定义，适配层不得新增分歧。"},{title:"Vue / React 双端同构",desc:"同名组件、同 API 口径：Vue 事件 ↔ React 回调、Vue 插槽 ↔ React renderXxx 一一映射。"},{title:"样式单一来源",desc:"@xui-design/styles 统一输出 BEM 类名与 CSS 变量主题，双端零样式漂移。"},{title:"核心逻辑单份实现",desc:"@xui-design/shared 承载状态与交互逻辑，双端只做薄适配；TypeScript 严格模式全量类型贯通。"}],installCoreComment:"# 如需直接引用契约类型（TableColumn 等），再安装类型包",installStyleComment:"# 应用入口引入一次样式",pendingDesc:"文档建设中"}},WB={nav:{start:"Getting Started",intro:"Introduction",theme:"Theming",i18n:"Internationalization",floating:"Floating Positioning",soon:"Soon"},topbar:{light:"Light",dark:"Dark",system:"System",switchLang:"中文"},component:{features:"Features",scenarios:"When to Use",demos:"Examples",demosHint:"Each demo can be switched between Vue and React tabs for live interaction, with source code available per framework.",api:"API",notes:"Notes",a11y:"Accessibility",notFoundTitle:"Documentation for this component is not available yet",notFoundDesc:"The component is on the roadmap and its documentation is being actively written.",backHome:"Back to Home"},demo:{showCode:"Show Code",hideCode:"Hide Code"},code:{copy:"Copy",copied:"Copied"},api:{prop:"Prop",type:"Type",default:"Default",description:"Description",required:"Required",eventsTitle:"Events / Callbacks",vueEvent:"Event (Vue)",reactCallback:"Callback (React)",payload:"Payload",slotsTitle:"Slots / Render Callbacks",vueSlot:"Slot (Vue)",methodsTitle:"Imperative Methods",method:"Method",signature:"Signature",typesTitle:"Contract Types"},toc:{title:"On this page"},home:{heroDesc:"A universal component library with a single core contract, isomorphic across Vue 3 and React 19",onlineBadge:"component docs available",featuresTitle:"Features",installTitle:"Installation",quickStartTitle:"Quick Start",overviewTitle:"Components Overview",features:[{title:"Single Contract @xui-design/core",desc:"ComponentSpec is the only contract for both frameworks. Props / Events / Slots are defined at the contract layer; adapters must not diverge."},{title:"Isomorphic Vue / React",desc:"Same components, same API surface: Vue events map to React callbacks, Vue slots map to React renderXxx props one by one."},{title:"Single Source of Styles",desc:"@xui-design/styles ships unified BEM class names and CSS variable theming — zero style drift across frameworks."},{title:"Single Core Logic Implementation",desc:"@xui-design/shared holds state and interaction logic; both adapters stay thin. Fully typed under TypeScript strict mode."}],installCoreComment:"# Install the types package if you need contract types (e.g. TableColumn)",installStyleComment:"# Import styles once in your app entry",pendingDesc:"Docs in progress"}},e8={"zh-CN":JB,"en-US":WB},Yr=()=>F(()=>e8[zw.locale]),t8={class:"code-block"},n8={class:"code-block__bar"},a8={class:"code-block__lang"},l8={class:"code-block__pre"},i8=["innerHTML"],fr=Z({__name:"CodeBlock",props:{code:{},lang:{}},setup(e){const t=Yr(),n=e,a=H(!1);let l;const i={vue:"Vue",react:"React TSX",bash:"Shell"},o=F(()=>{const d={vue:ss.languages.markup,react:ss.languages.typescript,bash:ss.languages.bash}[n.lang];return d?ss.highlight(n.code,d,n.lang):n.code}),s=async()=>{try{await navigator.clipboard.writeText(n.code),a.value=!0,clearTimeout(l),l=setTimeout(()=>{a.value=!1},1500)}catch{}};return(u,d)=>(b(),x("div",t8,[w("div",n8,[w("span",a8,U(i[e.lang]),1),w("button",{type:"button",class:"code-block__copy",onClick:s},U(a.value?r(t).code.copied:r(t).code.copy),1)]),w("pre",l8,[w("code",{class:Y(["code-block__code",`language-${e.lang}`]),innerHTML:o.value},null,10,i8)])]))}}),o8={class:"demo-block"},s8={class:"demo-block__header"},r8={class:"demo-block__tabs",role:"tablist"},u8=["aria-selected"],c8=["aria-selected"],d8={class:"demo-block__stage"},m8={class:"demo-block__footer"},p8={class:"demo-block__code"},vy=Z({__name:"DemoBlock",props:{demo:{}},setup(e){const t=e,n=Yr(),a=H("vue"),l=H(!0),i=H(null);let o=null;const s=()=>{o==null||o.unmount(),o=null};return Ke(a,async u=>{u==="react"?(await Vt(),i.value!==null&&o===null&&(o=XB(i.value,t.demo.reactComponent))):s()}),md(s),(u,d)=>{const p=Ra("ClientOnly");return b(),x("section",o8,[w("div",s8,[w("div",r8,[w("button",{type:"button",class:Y(["demo-block__tab",{"is-active":a.value==="vue"}]),role:"tab","aria-selected":a.value==="vue",onClick:d[0]||(d[0]=c=>a.value="vue")}," Vue ",10,u8),w("button",{type:"button",class:Y(["demo-block__tab",{"is-active":a.value==="react"}]),role:"tab","aria-selected":a.value==="react",onClick:d[1]||(d[1]=c=>a.value="react")}," React ",10,c8)])]),N(p,null,{default:z(()=>[w("div",d8,[a.value==="vue"?(b(),Q(tn(e.demo.vueComponent),{key:0})):(b(),x("div",{key:1,ref_key:"reactHost",ref:i,class:"demo-block__react-host"},null,512))])]),_:1}),w("div",m8,[w("button",{type:"button",class:"demo-block__toggle",onClick:d[2]||(d[2]=c=>l.value=!l.value)},U(l.value?r(n).demo.hideCode:r(n).demo.showCode),1)]),Gf(w("div",p8,[N(fr,{code:a.value==="vue"?e.demo.vueSource:e.demo.reactSource,lang:a.value},null,8,["code","lang"])],512),[[Zy,l.value]])])}}}),f8=Z({__name:"ComponentDemo",props:{slug:{},demoId:{}},setup(e){const t=e,n=F(()=>{var a;return(a=fy.get(t.slug))==null?void 0:a.demos.find(l=>l.id===t.demoId)});return(a,l)=>n.value?(b(),Q(vy,{key:0,demo:n.value},null,8,["demo"])):V("",!0)}}),h8={class:"api-table-wrap"},v8={class:"api-table"},g8={class:"api-table__name"},b8=["title"],y8={class:"api-table__type"},S8={class:"api-table__default"},x8={class:"docs-subsection-title"},_8={class:"api-table-wrap"},C8={class:"api-table"},k8={class:"api-table__name"},w8={class:"api-table__name"},N8={class:"api-table__type"},T8={class:"docs-subsection-title"},z8={class:"api-table-wrap"},U8={class:"api-table"},$8={class:"api-table__name"},E8={class:"api-table__name"},A8={class:"docs-subsection-title"},R8={class:"api-table-wrap"},B8={class:"api-table"},O8={class:"api-table__name"},Z8={class:"api-table__signature"},D8={class:"docs-subsection-title"},M8={class:"api-type-block__head"},j8={class:"api-type-block__name"},V8={key:0,class:"api-type-block__desc"},gy=Z({__name:"ApiSection",props:{api:{},kind:{default:void 0}},setup(e){const t=e,n=Yr(),a=l=>t.kind===void 0||t.kind===l;return(l,i)=>(b(),x("div",null,[a("props")&&e.api.props&&e.api.props.length>0?(b(),x(ie,{key:0},[i[0]||(i[0]=w("h3",{class:"docs-subsection-title"},"Props",-1)),w("div",h8,[w("table",v8,[w("thead",null,[w("tr",null,[w("th",null,U(r(n).api.prop),1),w("th",null,U(r(n).api.type),1),w("th",null,U(r(n).api.default),1),w("th",null,U(r(n).api.description),1)])]),w("tbody",null,[(b(!0),x(ie,null,ye(e.api.props,o=>(b(),x("tr",{key:o.name},[w("td",g8,[L(U(o.name),1),o.required?(b(),x("span",{key:0,class:"api-table__required",title:r(n).api.required},"*",8,b8)):V("",!0)]),w("td",y8,U(o.type),1),w("td",S8,U(o.default),1),w("td",null,U(r(Ia)(o.description)),1)]))),128))])])])],64)):V("",!0),a("events")&&e.api.events&&e.api.events.length>0?(b(),x(ie,{key:1},[w("h3",x8,U(r(n).api.eventsTitle),1),w("div",_8,[w("table",C8,[w("thead",null,[w("tr",null,[w("th",null,U(r(n).api.vueEvent),1),w("th",null,U(r(n).api.reactCallback),1),w("th",null,U(r(n).api.payload),1),w("th",null,U(r(n).api.description),1)])]),w("tbody",null,[(b(!0),x(ie,null,ye(e.api.events,o=>(b(),x("tr",{key:o.vue},[w("td",k8,U(o.vue),1),w("td",w8,U(o.react),1),w("td",N8,U(o.payload),1),w("td",null,U(r(Ia)(o.description)),1)]))),128))])])])],64)):V("",!0),a("slots")&&e.api.slots&&e.api.slots.length>0?(b(),x(ie,{key:2},[w("h3",T8,U(r(n).api.slotsTitle),1),w("div",z8,[w("table",U8,[w("thead",null,[w("tr",null,[w("th",null,U(r(n).api.vueSlot),1),w("th",null,U(r(n).api.reactCallback),1),w("th",null,U(r(n).api.description),1)])]),w("tbody",null,[(b(!0),x(ie,null,ye(e.api.slots,o=>(b(),x("tr",{key:o.vue},[w("td",$8,U(o.vue),1),w("td",E8,U(o.react),1),w("td",null,U(r(Ia)(o.description)),1)]))),128))])])])],64)):V("",!0),a("methods")&&e.api.methods&&e.api.methods.length>0?(b(),x(ie,{key:3},[w("h3",A8,U(r(n).api.methodsTitle),1),w("div",R8,[w("table",B8,[w("thead",null,[w("tr",null,[w("th",null,U(r(n).api.method),1),w("th",null,U(r(n).api.signature),1),w("th",null,U(r(n).api.description),1)])]),w("tbody",null,[(b(!0),x(ie,null,ye(e.api.methods,o=>(b(),x("tr",{key:o.name},[w("td",O8,U(o.name),1),w("td",Z8,U(o.signature),1),w("td",null,U(r(Ia)(o.description)),1)]))),128))])])])],64)):V("",!0),a("types")&&e.api.types&&e.api.types.length>0?(b(),x(ie,{key:4},[w("h3",D8,U(r(n).api.typesTitle),1),(b(!0),x(ie,null,ye(e.api.types,o=>(b(),x("div",{key:o.name,class:"api-type-block"},[w("div",M8,[w("span",j8,U(o.name),1),o.description?(b(),x("span",V8,U(r(Ia)(o.description)),1)):V("",!0)]),N(fr,{code:o.definition,lang:"react"},null,8,["code"])]))),128))],64)):V("",!0)]))}}),L8=Z({__name:"ComponentApi",props:{slug:{},kind:{}},setup(e){const t=e,n=F(()=>fy.get(t.slug));return(a,l)=>n.value?(b(),Q(gy,{key:0,api:n.value.api,kind:e.kind},null,8,["api","kind"])):V("",!0)}}),H8={class:"demo-column"},I8={class:"demo-row"},F8={class:"demo-row"},q8=Z({__name:"dark",setup(e){const t=H(no()),n=H(!0),a=H("");(()=>{a.value=T()?"跟随主题的输入框":"Themed input"})();const i=s=>{xr(s),t.value=no()},o=()=>{t.value=uh()};return(s,u)=>(b(),x("div",H8,[w("div",I8,[N(r(K),{type:"primary",onClick:u[0]||(u[0]=d=>i("dark"))},{default:z(()=>[L(U(r(T)()?"切换为暗色":"Switch to Dark"),1)]),_:1}),N(r(K),{onClick:u[1]||(u[1]=d=>i("light"))},{default:z(()=>[L(U(r(T)()?"切换为浅色":"Switch to Light"),1)]),_:1}),N(r(K),{type:"link",onClick:o},{default:z(()=>[L(U(r(T)()?"往返切换":"Toggle"),1)]),_:1}),N(r(bn),{type:t.value==="dark"?"warning":"primary"},{default:z(()=>[L(U(r(T)()?"当前":"Current")+"："+U(t.value==="dark"?"dark":"light"),1)]),_:1},8,["type"])]),N(r(_l),{type:"info",title:r(T)()?"全局主题":"Global Theme",description:r(T)()?"Alert / Button / Input / Switch 等组件颜色全部随主题联动。":"Alert / Button / Input / Switch colors all follow the theme."},null,8,["title","description"]),w("div",F8,[N(r(it),{value:a.value,"onUpdate:value":u[2]||(u[2]=d=>a.value=d),style:{width:"220px"}},null,8,["value"]),N(r(Et),{value:n.value,"onUpdate:value":u[3]||(u[3]=d=>n.value=d)},null,8,["value"])])]))}});function G8(){const e=ne(),[t,n]=R.useState(no()),[a,l]=R.useState(!0),[i,o]=R.useState(e?"跟随主题的输入框":"Themed input"),s=u=>{xr(u),n(no())};return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{type:"primary",onClick:()=>s("dark"),children:e?"切换为暗色":"Switch to Dark"}),m.jsx(P,{onClick:()=>s("light"),children:e?"切换为浅色":"Switch to Light"}),m.jsx(P,{type:"link",onClick:()=>n(uh()),children:e?"往返切换":"Toggle"}),m.jsxs(yn,{type:t==="dark"?"warning":"primary",children:[e?"当前":"Current","：",t==="dark"?"dark":"light"]})]}),m.jsx(kl,{type:"info",title:e?"全局主题":"Global Theme",description:e?"Alert / Button / Input / Switch 等组件颜色全部随主题联动。":"Alert / Button / Input / Switch colors all follow the theme."}),m.jsxs("div",{className:"demo-row",children:[m.jsx(st,{value:i,onInput:o,style:{width:"220px"}}),m.jsx(At,{value:a,onChange:l})]})]})}const Y8={class:"demo-column"},K8={class:"demo-row"},P8={class:"demo-row"},X8=Z({__name:"tokens",setup(e){const t=H(!0),n={emerald:{"--xui-color-primary":"#10b981","--xui-color-primary-hover":"#059669","--xui-color-primary-active":"#047857"},amber:{"--xui-color-primary":"#f59e0b","--xui-color-primary-hover":"#d97706","--xui-color-primary-active":"#b45309"},rose:{"--xui-color-primary":"#f43f5e","--xui-color-primary-hover":"#e11d48","--xui-color-primary-active":"#be123c"}},a=l=>ch(n[l]);return(l,i)=>(b(),x("div",Y8,[w("div",K8,[N(r(K),{onClick:i[0]||(i[0]=o=>a("emerald"))},{default:z(()=>[L(U(r(T)()?"翡翠绿":"Emerald"),1)]),_:1}),N(r(K),{onClick:i[1]||(i[1]=o=>a("amber"))},{default:z(()=>[L(U(r(T)()?"琥珀橙":"Amber"),1)]),_:1}),N(r(K),{onClick:i[2]||(i[2]=o=>a("rose"))},{default:z(()=>[L(U(r(T)()?"玫红":"Rose"),1)]),_:1}),N(r(K),{type:"link",onClick:i[3]||(i[3]=o=>r(dh)())},{default:z(()=>[L(U(r(T)()?"恢复默认品牌色":"Reset to default brand color"),1)]),_:1})]),w("div",P8,[N(r(K),{type:"primary"},{default:z(()=>[L(U(r(T)()?"主色按钮":"Primary button"),1)]),_:1}),N(r(bn),{type:"primary"},{default:z(()=>[L(U(r(T)()?"主色标签":"Primary tag"),1)]),_:1}),N(r(Et),{value:t.value,"onUpdate:value":i[4]||(i[4]=o=>t.value=o)},null,8,["value"])])]))}}),Df={emerald:{"--xui-color-primary":"#10b981","--xui-color-primary-hover":"#059669","--xui-color-primary-active":"#047857"},amber:{"--xui-color-primary":"#f59e0b","--xui-color-primary-hover":"#d97706","--xui-color-primary-active":"#b45309"},rose:{"--xui-color-primary":"#f43f5e","--xui-color-primary-hover":"#e11d48","--xui-color-primary-active":"#be123c"}},Mf={emerald:{zh:"翡翠绿",en:"Emerald"},amber:{zh:"琥珀橙",en:"Amber"},rose:{zh:"玫红",en:"Rose"}};function Q8(){const e=ne(),[t,n]=R.useState(!0);return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{className:"demo-row",children:[Object.keys(Df).map(a=>m.jsx(P,{onClick:()=>ch(Df[a]),children:e?Mf[a].zh:Mf[a].en},a)),m.jsx(P,{type:"link",onClick:()=>dh(),children:e?"恢复默认品牌色":"Reset to default brand color"})]}),m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{type:"primary",children:e?"主色按钮":"Primary button"}),m.jsx(yn,{type:"primary",children:e?"主色标签":"Primary tag"}),m.jsx(At,{value:t,onChange:n})]})]})}const J8={class:"demo-column"},W8={class:"demo-text"},eO={class:"demo-row",style:{"--xui-color-primary":"#7c3aed","--xui-color-primary-hover":"#6d28d9","--xui-color-primary-active":"#5b21b6"}},tO={class:"demo-row",style:{"--xui-color-danger":"#0ea5e9"}},nO=Z({__name:"component",setup(e){return(t,n)=>(b(),x("div",J8,[w("p",W8,U(r(T)()?"在组件 style 上写 CSS 变量即可覆盖主题，仅作用于该组件子树：":"Write CSS variables in the component style to override the theme, scoped to that component subtree only:"),1),w("div",eO,[N(r(K),{type:"primary"},{default:z(()=>[L(U(r(T)()?"紫色子树":"Purple subtree"),1)]),_:1}),N(r(Et),{value:!0})]),w("div",tO,[N(r(K),{type:"danger"},{default:z(()=>[L(U(r(T)()?"danger 覆盖为天蓝":"danger overridden to sky blue"),1)]),_:1}),N(r(K),{type:"primary"},{default:z(()=>[L(U(r(T)()?"不受影响":"Unaffected"),1)]),_:1})])]))}});function aO(){const e=ne();return m.jsxs("div",{className:"demo-column",children:[m.jsx("p",{className:"demo-text",children:e?"在组件 style 上写 CSS 变量即可覆盖主题，仅作用于该组件子树：":"Write CSS variables in the component style to override the theme, scoped to that component subtree only:"}),m.jsxs("div",{className:"demo-row",style:{"--xui-color-primary":"#7c3aed","--xui-color-primary-hover":"#6d28d9","--xui-color-primary-active":"#5b21b6"},children:[m.jsx(P,{type:"primary",children:e?"紫色子树":"Purple subtree"}),m.jsx(At,{value:!0})]}),m.jsxs("div",{className:"demo-row",style:{"--xui-color-danger":"#0ea5e9"},children:[m.jsx(P,{type:"danger",children:e?"danger 覆盖为天蓝":"danger overridden to sky blue"}),m.jsx(P,{type:"primary",children:e?"不受影响":"Unaffected"})]})]})}const lO=`<script setup lang="ts">
import { ref } from 'vue';
import { getTheme, setTheme, toggleTheme } from '@xui-design/vue';
import { Alert, Button, Input, Switch, Tag } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const current = ref(getTheme());
const enabled = ref(true);
const text = ref('');

const updateText = () => {
  text.value = isZh() ? '跟随主题的输入框' : 'Themed input';
};
updateText();

const apply = (theme: 'light' | 'dark') => {
  setTheme(theme);
  current.value = getTheme();
};

const toggle = () => {
  current.value = toggleTheme();
};
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button type="primary" @click="apply('dark')">
        {{ isZh() ? '切换为暗色' : 'Switch to Dark' }}
      </Button>
      <Button @click="apply('light')">
        {{ isZh() ? '切换为浅色' : 'Switch to Light' }}
      </Button>
      <Button type="link" @click="toggle">
        {{ isZh() ? '往返切换' : 'Toggle' }}
      </Button>
      <Tag :type="current === 'dark' ? 'warning' : 'primary'">
        {{ isZh() ? '当前' : 'Current' }}：{{ current === 'dark' ? 'dark' : 'light' }}
      </Tag>
    </div>
    <Alert
      type="info"
      :title="isZh() ? '全局主题' : 'Global Theme'"
      :description="
        isZh()
          ? 'Alert / Button / Input / Switch 等组件颜色全部随主题联动。'
          : 'Alert / Button / Input / Switch colors all follow the theme.'
      "
    />
    <div class="demo-row">
      <Input v-model:value="text" style="width: 220px" />
      <Switch v-model:value="enabled" />
    </div>
  </div>
</template>
`,iO=`import { useState } from 'react';
import { getTheme, setTheme, toggleTheme } from '@xui-design/react';
import { Alert, Button, Input, Switch, Tag } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function ThemeDarkDemo() {
  const isZh = useIsZh();
  const [current, setCurrent] = useState(getTheme());
  const [enabled, setEnabled] = useState(true);
  const [text, setText] = useState(isZh ? '跟随主题的输入框' : 'Themed input');

  const apply = (theme: 'light' | 'dark') => {
    setTheme(theme);
    setCurrent(getTheme());
  };

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Button type="primary" onClick={() => apply('dark')}>
          {isZh ? '切换为暗色' : 'Switch to Dark'}
        </Button>
        <Button onClick={() => apply('light')}>{isZh ? '切换为浅色' : 'Switch to Light'}</Button>
        <Button type="link" onClick={() => setCurrent(toggleTheme())}>
          {isZh ? '往返切换' : 'Toggle'}
        </Button>
        <Tag type={current === 'dark' ? 'warning' : 'primary'}>
          {isZh ? '当前' : 'Current'}：{current === 'dark' ? 'dark' : 'light'}
        </Tag>
      </div>
      <Alert
        type="info"
        title={isZh ? '全局主题' : 'Global Theme'}
        description={
          isZh
            ? 'Alert / Button / Input / Switch 等组件颜色全部随主题联动。'
            : 'Alert / Button / Input / Switch colors all follow the theme.'
        }
      />
      <div className="demo-row">
        <Input value={text} onInput={setText} style={{ width: '220px' }} />
        <Switch value={enabled} onChange={setEnabled} />
      </div>
    </div>
  );
}
`,oO=`<script setup lang="ts">
import { Button, clearThemeTokens, setThemeTokens, Switch, Tag } from '@xui-design/vue';
import { ref } from 'vue';
import { isZh } from '../../../i18n';

const enabled = ref(true);

/** 品牌色预设：仅覆盖主色三态，其余 token 保持默认 */
const presets: Record<string, Record<string, string>> = {
  emerald: {
    '--xui-color-primary': '#10b981',
    '--xui-color-primary-hover': '#059669',
    '--xui-color-primary-active': '#047857',
  },
  amber: {
    '--xui-color-primary': '#f59e0b',
    '--xui-color-primary-hover': '#d97706',
    '--xui-color-primary-active': '#b45309',
  },
  rose: {
    '--xui-color-primary': '#f43f5e',
    '--xui-color-primary-hover': '#e11d48',
    '--xui-color-primary-active': '#be123c',
  },
};

const apply = (name: string) => setThemeTokens(presets[name]);
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button @click="apply('emerald')">{{ isZh() ? '翡翠绿' : 'Emerald' }}</Button>
      <Button @click="apply('amber')">{{ isZh() ? '琥珀橙' : 'Amber' }}</Button>
      <Button @click="apply('rose')">{{ isZh() ? '玫红' : 'Rose' }}</Button>
      <Button type="link" @click="clearThemeTokens()">
        {{ isZh() ? '恢复默认品牌色' : 'Reset to default brand color' }}
      </Button>
    </div>
    <div class="demo-row">
      <Button type="primary">{{ isZh() ? '主色按钮' : 'Primary button' }}</Button>
      <Tag type="primary">{{ isZh() ? '主色标签' : 'Primary tag' }}</Tag>
      <Switch v-model:value="enabled" />
    </div>
  </div>
</template>
`,sO=`import { useState } from 'react';
import { Button, clearThemeTokens, setThemeTokens, Switch, Tag } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

const PRESETS: Record<string, Record<string, string>> = {
  emerald: {
    '--xui-color-primary': '#10b981',
    '--xui-color-primary-hover': '#059669',
    '--xui-color-primary-active': '#047857',
  },
  amber: {
    '--xui-color-primary': '#f59e0b',
    '--xui-color-primary-hover': '#d97706',
    '--xui-color-primary-active': '#b45309',
  },
  rose: {
    '--xui-color-primary': '#f43f5e',
    '--xui-color-primary-hover': '#e11d48',
    '--xui-color-primary-active': '#be123c',
  },
};

const PRESET_LABELS: Record<string, { zh: string; en: string }> = {
  emerald: { zh: '翡翠绿', en: 'Emerald' },
  amber: { zh: '琥珀橙', en: 'Amber' },
  rose: { zh: '玫红', en: 'Rose' },
};

export default function ThemeTokensDemo() {
  const isZh = useIsZh();
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="demo-column">
      <div className="demo-row">
        {Object.keys(PRESETS).map((name) => (
          <Button key={name} onClick={() => setThemeTokens(PRESETS[name])}>
            {isZh ? PRESET_LABELS[name].zh : PRESET_LABELS[name].en}
          </Button>
        ))}
        <Button type="link" onClick={() => clearThemeTokens()}>
          {isZh ? '恢复默认品牌色' : 'Reset to default brand color'}
        </Button>
      </div>
      <div className="demo-row">
        <Button type="primary">{isZh ? '主色按钮' : 'Primary button'}</Button>
        <Tag type="primary">{isZh ? '主色标签' : 'Primary tag'}</Tag>
        <Switch value={enabled} onChange={setEnabled} />
      </div>
    </div>
  );
}
`,rO=`<script setup lang="ts">
import { Button, Switch } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <p class="demo-text">
      {{
        isZh()
          ? '在组件 style 上写 CSS 变量即可覆盖主题，仅作用于该组件子树：'
          : 'Write CSS variables in the component style to override the theme, scoped to that component subtree only:'
      }}
    </p>
    <div
      class="demo-row"
      style="
        --xui-color-primary: #7c3aed;
        --xui-color-primary-hover: #6d28d9;
        --xui-color-primary-active: #5b21b6;
      "
    >
      <Button type="primary">{{ isZh() ? '紫色子树' : 'Purple subtree' }}</Button>
      <Switch :value="true" />
    </div>
    <div class="demo-row" style="--xui-color-danger: #0ea5e9">
      <Button type="danger">{{
        isZh() ? 'danger 覆盖为天蓝' : 'danger overridden to sky blue'
      }}</Button>
      <Button type="primary">{{ isZh() ? '不受影响' : 'Unaffected' }}</Button>
    </div>
  </div>
</template>
`,uO=`import type { CSSProperties } from 'react';
import { Button, Switch } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function ThemeScopedDemo() {
  const isZh = useIsZh();

  return (
    <div className="demo-column">
      <p className="demo-text">
        {isZh
          ? '在组件 style 上写 CSS 变量即可覆盖主题，仅作用于该组件子树：'
          : 'Write CSS variables in the component style to override the theme, scoped to that component subtree only:'}
      </p>
      <div
        className="demo-row"
        style={
          {
            '--xui-color-primary': '#7c3aed',
            '--xui-color-primary-hover': '#6d28d9',
            '--xui-color-primary-active': '#5b21b6',
          } as CSSProperties
        }
      >
        <Button type="primary">{isZh ? '紫色子树' : 'Purple subtree'}</Button>
        <Switch value />
      </div>
      <div className="demo-row" style={{ '--xui-color-danger': '#0ea5e9' } as CSSProperties}>
        <Button type="danger">
          {isZh ? 'danger 覆盖为天蓝' : 'danger overridden to sky blue'}
        </Button>
        <Button type="primary">{isZh ? '不受影响' : 'Unaffected'}</Button>
      </div>
    </div>
  );
}
`,cO=[{id:"dark",title:{"zh-CN":"全局明暗主题切换","en-US":"Global Light & Dark Switching"},description:{"zh-CN":"setTheme 写入 <html data-theme>，全部组件的语义色联动切换；toggleTheme 在 light / dark 间往返。","en-US":"setTheme writes <html data-theme> and every component switches semantic colors accordingly; toggleTheme alternates between light and dark."},vueComponent:q8,reactComponent:G8,vueSource:lO,reactSource:iO},{id:"tokens",title:{"zh-CN":"全局品牌色 token（setThemeTokens）","en-US":"Global Brand Tokens (setThemeTokens)"},description:{"zh-CN":"setThemeTokens 将 CSS 变量写入 <html>，全站所有组件生效；clearThemeTokens 仅清除本 API 写入的 token。","en-US":"setThemeTokens writes CSS variables to <html>, affecting every component site-wide; clearThemeTokens only removes tokens written by this API."},vueComponent:X8,reactComponent:Q8,vueSource:oO,reactSource:sO},{id:"scoped",title:{"zh-CN":"组件级主题定制","en-US":"Component-Level Theming"},description:{"zh-CN":"无需任何 API：在组件 style 上直接写 CSS 变量，级联仅作用于该子树，优先级高于全局 token。","en-US":"No API needed: write CSS variables directly on a component style; the cascade applies only to that subtree and takes precedence over global tokens."},vueComponent:nO,reactComponent:aO,vueSource:rO,reactSource:uO}],dO={methods:[{name:"setTheme",signature:"(theme: XuiTheme) => void",description:{"zh-CN":"切换明暗主题（写入 <html data-theme>），值未变化时静默返回","en-US":"Switches the light/dark theme (writes <html data-theme>); returns silently when the value is unchanged"}},{name:"getTheme",signature:"() => XuiTheme",description:{"zh-CN":"读取当前主题；SSR / 无 DOM 环境返回 light","en-US":"Reads the current theme; returns light in SSR / DOM-less environments"}},{name:"toggleTheme",signature:"() => XuiTheme",description:{"zh-CN":"在 light / dark 间往返切换，返回切换后的主题","en-US":"Toggles between light and dark, returning the new theme"}},{name:"subscribeTheme",signature:"(listener: (theme: XuiTheme) => void) => () => void",description:{"zh-CN":"订阅主题变化，返回取消订阅函数","en-US":"Subscribes to theme changes; returns an unsubscribe function"}},{name:"setThemeTokens",signature:"(tokens: ThemeTokens) => void",description:{"zh-CN":"写入全局主题 token（CSS 变量，作用于 <html> 全站生效）；仅接受 -- 开头的变量名，重复调用按合并语义追加 / 覆盖","en-US":"Writes global theme tokens (CSS variables on <html>, effective site-wide); only accepts names starting with --; repeated calls merge, adding or overriding incrementally"}},{name:"clearThemeTokens",signature:"() => void",description:{"zh-CN":"清除全部通过 setThemeTokens 写入的 token（不影响 data-theme 与应用自身变量）","en-US":"Removes all tokens written by setThemeTokens (does not affect data-theme or app-defined variables)"}}],types:[{name:"XuiTheme",definition:"type XuiTheme = 'light' | 'dark';",description:{"zh-CN":"主题名（light 为默认，dark 由 tokens.scss 的 [data-theme=dark] 提供）。","en-US":"Theme name (light is the default; dark is provided by the [data-theme=dark] block in tokens.scss)."}},{name:"ThemeTokens",definition:"type ThemeTokens = Record<string, string>;",description:{"zh-CN":"主题 token 集合：键为 CSS 自定义属性名（-- 开头），值为对应 CSS 值。","en-US":"A set of theme tokens: keys are CSS custom property names (starting with --), values are the corresponding CSS values."}}]},mO={class:"demo-column"},pO={class:"demo-row"},fO={class:"demo-row"},hO=Z({__name:"switch",setup(e){const t=H(Ta()),n=H(!1),a=F(()=>[{key:"name",title:T()?"名称":"Name"},{key:"age",title:T()?"年龄":"Age"}]),l=i=>{ci(i),t.value=Ta()};return(i,o)=>(b(),x("div",mO,[w("div",pO,[N(r(K),{type:"primary",onClick:o[0]||(o[0]=s=>l("zh-CN"))},{default:z(()=>[L(U(r(T)()?"中文":"Chinese"),1)]),_:1}),N(r(K),{onClick:o[1]||(o[1]=s=>l("en-US"))},{default:z(()=>[...o[4]||(o[4]=[L("English",-1)])]),_:1}),N(r(bn),{type:"primary"},{default:z(()=>[L(U(t.value),1)]),_:1})]),w("div",fO,[N(r(K),{type:"link",onClick:o[2]||(o[2]=s=>n.value=!0)},{default:z(()=>[L(U(r(T)()?"打开 Modal":"Open Modal"),1)]),_:1})]),N(r(ko),{visible:n.value,"onUpdate:visible":o[3]||(o[3]=s=>n.value=s),title:r(T)()?"国际化演示":"i18n Demo"},{default:z(()=>[L(U(r(T)()?"底部按钮文案随全局语言切换；点击确认或取消关闭。":"Footer button text follows the global locale; click OK or Cancel to close."),1)]),_:1},8,["visible","title"]),N(r(Kl),{columns:a.value,"data-source":[]},null,8,["columns"]),N(r(Ds),{style:{width:"240px"}})]))}});function vO(){const e=ne(),[t,n]=R.useState(Ta()),[a,l]=R.useState(!1),i=[{key:"name",title:e?"名称":"Name"},{key:"age",title:e?"年龄":"Age"}],o=s=>{ci(s),n(Ta())};return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{type:"primary",onClick:()=>o("zh-CN"),children:e?"中文":"Chinese"}),m.jsx(P,{onClick:()=>o("en-US"),children:"English"}),m.jsx(yn,{type:"primary",children:t})]}),m.jsx("div",{className:"demo-row",children:m.jsx(P,{type:"link",onClick:()=>l(!0),children:e?"打开 Modal":"Open Modal"})}),m.jsx(Do,{visible:a,title:e?"国际化演示":"i18n Demo",onOk:()=>l(!1),onCancel:()=>l(!1),onClose:()=>l(!1),children:e?"底部按钮文案随全局语言切换；点击确认或取消关闭。":"Footer button text follows the global locale; click OK or Cancel to close."}),m.jsx(ri,{columns:i,dataSource:[]}),m.jsx(pr,{style:{width:"240px"}})]})}const gO={class:"demo-column"},bO={class:"demo-row"},yO={class:"demo-row"},SO=Z({__name:"custom",setup(e){const t=H(Ta()),n=H(!1),a=H(!1),l=F(()=>[{key:"name",title:T()?"名称":"Name"},{key:"age",title:T()?"年龄":"Age"}]),i=()=>{rh("ja-JP",{modal:{ok:"OK",cancel:"キャンセル"},popconfirm:{confirm:"OK",cancel:"キャンセル"},table:{empty:"データがありません"}}),a.value=!0,o("ja-JP")},o=s=>{ci(s),t.value=Ta()};return(s,u)=>(b(),x("div",gO,[w("div",bO,[N(r(K),{type:"primary",disabled:a.value,onClick:i},{default:z(()=>[L(U(a.value?r(T)()?"已注册 ja-JP":"ja-JP registered":r(T)()?"注册日语语言包":"Register Japanese locale"),1)]),_:1},8,["disabled"]),N(r(K),{onClick:u[0]||(u[0]=d=>o("zh-CN"))},{default:z(()=>[L(U(r(T)()?"回到中文":"Back to Chinese"),1)]),_:1}),N(r(bn),{type:"primary"},{default:z(()=>[L(U(t.value),1)]),_:1})]),w("div",yO,[N(r(K),{type:"link",onClick:u[1]||(u[1]=d=>n.value=!0)},{default:z(()=>[L(U(r(T)()?"打开 Modal":"Open Modal"),1)]),_:1}),N(r(Ja),{content:r(T)()?"确认删除这条数据吗？":"Are you sure you want to delete this record?"},{default:z(()=>[N(r(K),null,{default:z(()=>[L(U(r(T)()?"删除":"Delete"),1)]),_:1})]),_:1},8,["content"])]),N(r(ko),{visible:n.value,"onUpdate:visible":u[2]||(u[2]=d=>n.value=d),title:r(T)()?"自定义语言包":"Custom Locale"},{default:z(()=>[L(U(r(T)()?"注册后所有组件文案按新语言渲染，未覆盖的分组回退注册时的基底包。":"After registration, all component text renders in the new language; uncovered groups fall back to the base pack at registration time."),1)]),_:1},8,["visible","title"]),N(r(Kl),{columns:l.value,"data-source":[]},null,8,["columns"])]))}});function xO(){const e=ne(),[t,n]=R.useState(Ta()),[a,l]=R.useState(!1),[i,o]=R.useState(!1),s=[{key:"name",title:e?"名称":"Name"},{key:"age",title:e?"年龄":"Age"}],u=p=>{ci(p),n(Ta())},d=()=>{rh("ja-JP",{modal:{ok:"OK",cancel:"キャンセル"},popconfirm:{confirm:"OK",cancel:"キャンセル"},table:{empty:"データがありません"}}),o(!0),u("ja-JP")};return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{type:"primary",disabled:i,onClick:d,children:i?e?"已注册 ja-JP":"ja-JP registered":e?"注册日语语言包":"Register Japanese locale"}),m.jsx(P,{onClick:()=>u("zh-CN"),children:e?"回到中文":"Back to Chinese"}),m.jsx(yn,{type:"primary",children:t})]}),m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{type:"link",onClick:()=>l(!0),children:e?"打开 Modal":"Open Modal"}),m.jsx(sl,{content:e?"确认删除这条数据吗？":"Are you sure you want to delete this record?",children:m.jsx(P,{children:e?"删除":"Delete"})})]}),m.jsx(Do,{visible:a,title:e?"自定义语言包":"Custom Locale",onOk:()=>l(!1),onCancel:()=>l(!1),onClose:()=>l(!1),children:e?"注册后所有组件文案按新语言渲染，未覆盖的分组回退注册时的基底包。":"After registration, all component text renders in the new language; uncovered groups fall back to the base pack at registration time."}),m.jsx(ri,{columns:s,dataSource:[]})]})}const _O=`<script setup lang="ts">
import { computed, ref } from 'vue';
import { getLocale, setLocale } from '@xui-design/vue';
import { Button, DatePicker, Modal, Table, Tag } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const current = ref(getLocale());
const visible = ref(false);

const columns = computed(() => [
  { key: 'name', title: isZh() ? '名称' : 'Name' },
  { key: 'age', title: isZh() ? '年龄' : 'Age' },
]);

const apply = (locale: string) => {
  setLocale(locale);
  current.value = getLocale();
};
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button type="primary" @click="apply('zh-CN')">{{ isZh() ? '中文' : 'Chinese' }}</Button>
      <Button @click="apply('en-US')">English</Button>
      <Tag type="primary">{{ current }}</Tag>
    </div>
    <div class="demo-row">
      <Button type="link" @click="visible = true">{{
        isZh() ? '打开 Modal' : 'Open Modal'
      }}</Button>
    </div>
    <Modal v-model:visible="visible" :title="isZh() ? '国际化演示' : 'i18n Demo'">
      {{
        isZh()
          ? '底部按钮文案随全局语言切换；点击确认或取消关闭。'
          : 'Footer button text follows the global locale; click OK or Cancel to close.'
      }}
    </Modal>
    <Table :columns="columns" :data-source="[]" />
    <DatePicker style="width: 240px" />
  </div>
</template>
`,CO=`import { useState } from 'react';
import { getLocale, setLocale } from '@xui-design/react';
import { Button, DatePicker, Modal, Table, Tag } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function I18nSwitchDemo() {
  const isZh = useIsZh();
  const [current, setCurrent] = useState(getLocale());
  const [visible, setVisible] = useState(false);

  const columns = [
    { key: 'name', title: isZh ? '名称' : 'Name' },
    { key: 'age', title: isZh ? '年龄' : 'Age' },
  ];

  const apply = (locale: string) => {
    setLocale(locale);
    setCurrent(getLocale());
  };

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Button type="primary" onClick={() => apply('zh-CN')}>
          {isZh ? '中文' : 'Chinese'}
        </Button>
        <Button onClick={() => apply('en-US')}>English</Button>
        <Tag type="primary">{current}</Tag>
      </div>
      <div className="demo-row">
        <Button type="link" onClick={() => setVisible(true)}>
          {isZh ? '打开 Modal' : 'Open Modal'}
        </Button>
      </div>
      <Modal
        visible={visible}
        title={isZh ? '国际化演示' : 'i18n Demo'}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        onClose={() => setVisible(false)}
      >
        {isZh
          ? '底部按钮文案随全局语言切换；点击确认或取消关闭。'
          : 'Footer button text follows the global locale; click OK or Cancel to close.'}
      </Modal>
      <Table columns={columns} dataSource={[]} />
      <DatePicker style={{ width: '240px' }} />
    </div>
  );
}
`,kO=`<script setup lang="ts">
import { computed, ref } from 'vue';
import { getLocale, registerLocale, setLocale } from '@xui-design/vue';
import { Button, Modal, Popconfirm, Table, Tag } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const current = ref(getLocale());
const visible = ref(false);
const registered = ref(false);

const columns = computed(() => [
  { key: 'name', title: isZh() ? '名称' : 'Name' },
  { key: 'age', title: isZh() ? '年龄' : 'Age' },
]);

const registerJapanese = () => {
  registerLocale('ja-JP', {
    modal: { ok: 'OK', cancel: 'キャンセル' },
    popconfirm: { confirm: 'OK', cancel: 'キャンセル' },
    table: { empty: 'データがありません' },
  });
  registered.value = true;
  apply('ja-JP');
};

const apply = (locale: string) => {
  setLocale(locale);
  current.value = getLocale();
};
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button type="primary" :disabled="registered" @click="registerJapanese">
        {{
          registered
            ? isZh()
              ? '已注册 ja-JP'
              : 'ja-JP registered'
            : isZh()
              ? '注册日语语言包'
              : 'Register Japanese locale'
        }}
      </Button>
      <Button @click="apply('zh-CN')">{{ isZh() ? '回到中文' : 'Back to Chinese' }}</Button>
      <Tag type="primary">{{ current }}</Tag>
    </div>
    <div class="demo-row">
      <Button type="link" @click="visible = true">{{
        isZh() ? '打开 Modal' : 'Open Modal'
      }}</Button>
      <Popconfirm
        :content="isZh() ? '确认删除这条数据吗？' : 'Are you sure you want to delete this record?'"
      >
        <Button>{{ isZh() ? '删除' : 'Delete' }}</Button>
      </Popconfirm>
    </div>
    <Modal v-model:visible="visible" :title="isZh() ? '自定义语言包' : 'Custom Locale'">
      {{
        isZh()
          ? '注册后所有组件文案按新语言渲染，未覆盖的分组回退注册时的基底包。'
          : 'After registration, all component text renders in the new language; uncovered groups fall back to the base pack at registration time.'
      }}
    </Modal>
    <Table :columns="columns" :data-source="[]" />
  </div>
</template>
`,wO=`import { useState } from 'react';
import { getLocale, registerLocale, setLocale } from '@xui-design/react';
import { Button, Modal, Popconfirm, Table, Tag } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function I18nCustomDemo() {
  const isZh = useIsZh();
  const [current, setCurrent] = useState(getLocale());
  const [visible, setVisible] = useState(false);
  const [registered, setRegistered] = useState(false);

  const columns = [
    { key: 'name', title: isZh ? '名称' : 'Name' },
    { key: 'age', title: isZh ? '年龄' : 'Age' },
  ];

  const apply = (locale: string) => {
    setLocale(locale);
    setCurrent(getLocale());
  };

  const registerJapanese = () => {
    registerLocale('ja-JP', {
      modal: { ok: 'OK', cancel: 'キャンセル' },
      popconfirm: { confirm: 'OK', cancel: 'キャンセル' },
      table: { empty: 'データがありません' },
    });
    setRegistered(true);
    apply('ja-JP');
  };

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Button type="primary" disabled={registered} onClick={registerJapanese}>
          {registered
            ? isZh
              ? '已注册 ja-JP'
              : 'ja-JP registered'
            : isZh
              ? '注册日语语言包'
              : 'Register Japanese locale'}
        </Button>
        <Button onClick={() => apply('zh-CN')}>{isZh ? '回到中文' : 'Back to Chinese'}</Button>
        <Tag type="primary">{current}</Tag>
      </div>
      <div className="demo-row">
        <Button type="link" onClick={() => setVisible(true)}>
          {isZh ? '打开 Modal' : 'Open Modal'}
        </Button>
        <Popconfirm
          content={isZh ? '确认删除这条数据吗？' : 'Are you sure you want to delete this record?'}
        >
          <Button>{isZh ? '删除' : 'Delete'}</Button>
        </Popconfirm>
      </div>
      <Modal
        visible={visible}
        title={isZh ? '自定义语言包' : 'Custom Locale'}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        onClose={() => setVisible(false)}
      >
        {isZh
          ? '注册后所有组件文案按新语言渲染，未覆盖的分组回退注册时的基底包。'
          : 'After registration, all component text renders in the new language; uncovered groups fall back to the base pack at registration time.'}
      </Modal>
      <Table columns={columns} dataSource={[]} />
    </div>
  );
}
`,NO=[{id:"switch",title:{"zh-CN":"内置语言切换（setLocale）","en-US":"Built-in Locale Switching (setLocale)"},description:{"zh-CN":"setLocale('zh-CN' / 'en-US') 即时切换全部组件的内置文案：Modal 按钮、Table 空态与行选择提示、DatePicker 面板标题与星期等。","en-US":"setLocale('zh-CN' / 'en-US') instantly switches the built-in messages of every component: Modal buttons, Table empty state and row selection hints, DatePicker panel titles and weekdays, etc."},vueComponent:hO,reactComponent:vO,vueSource:_O,reactSource:CO},{id:"custom",title:{"zh-CN":"注册自定义语言包（registerLocale）","en-US":"Registering Custom Locales (registerLocale)"},description:{"zh-CN":"registerLocale 按组件分组注册任意语言（组级浅合并，未覆盖分组回退注册时的基底包），setLocale 切换后立即生效。","en-US":"registerLocale registers any language grouped by component (shallow merge per group; uncovered groups fall back to the base pack at registration time) and takes effect immediately after setLocale switches to it."},vueComponent:SO,reactComponent:xO,vueSource:kO,reactSource:wO}],TO={methods:[{name:"setLocale",signature:"(locale: string) => void",description:{"zh-CN":"切换当前语言；未注册的语言名静默忽略，值未变化时同样静默返回","en-US":"Switches the current locale; unregistered names are silently ignored, and unchanged values return silently"}},{name:"getLocale",signature:"() => string",description:{"zh-CN":"读取当前语言名（默认 DEFAULT_LOCALE）","en-US":"Reads the current locale name (defaults to DEFAULT_LOCALE)"}},{name:"getLocaleData",signature:"() => XuiLocaleData",description:{"zh-CN":"读取当前语言包（返回稳定引用，切换语言时重建）；SSR / 无 DOM 环境同样可用","en-US":"Reads the current locale pack (stable reference, rebuilt on locale change); also safe in SSR / DOM-less environments"}},{name:"registerLocale",signature:"(locale: string, data: XuiLocaleInput) => void",description:{"zh-CN":"注册或覆盖语言包：按组件分组浅合并到该语言的既有包上，未覆盖分组回退基底；无有效变更时不触发通知","en-US":"Registers or overrides a locale pack: shallow-merged per component group onto the existing pack of that locale, with uncovered groups falling back to the base; no notification when nothing actually changes"}},{name:"subscribeLocale",signature:"(listener: (locale: string) => void) => () => void",description:{"zh-CN":"订阅语言变化（回调收到新语言名），返回取消订阅函数","en-US":"Subscribes to locale changes (the callback receives the new locale name); returns an unsubscribe function"}},{name:"useLocaleData",signature:"() => XuiLocaleData",description:{"zh-CN":"双端组件级 Hook（Vue 组合式 / React useSyncExternalStore），组件内读取语言包并响应切换","en-US":"Component-level hook for both frameworks (Vue composable / React useSyncExternalStore); reads the locale pack inside components and reacts to switches"}}],types:[{name:"XuiLocaleData",definition:`type XuiLocaleData = {
  modal: { ok: string; cancel: string };
  popconfirm: { confirm: string; cancel: string };
  table: { empty: string; selectAll: string; selectRow: (index: number) => string };
  pagination: { nav: string; prev: string; next: string };
  datePicker: {
    panel: string; prevMonth: string; nextMonth: string; placeholder: string;
    titleFormat: (year: number, month: number) => string; weekdays: string[];
  };
  skeleton: { loading: string };
  breadcrumb: { nav: string };
  select: { searchPlaceholder: string; searchAriaLabel: string; triggerPlaceholder: string };
};`,description:{"zh-CN":"完整语言包结构（按组件分组；函数型字段便于跨语序翻译）。","en-US":"The full locale pack structure (grouped by component; function fields ease translation across word orders)."}},{name:"XuiLocaleInput",definition:"type XuiLocaleInput = Partial<XuiLocaleData>;",description:{"zh-CN":"registerLocale 的入参：只提供需要覆盖的分组，组内字段同为部分覆盖（浅合并）。","en-US":"The input of registerLocale: provide only the groups to override; fields within a group are also partially overridden (shallow merge)."}},{name:"DEFAULT_LOCALE",definition:"const DEFAULT_LOCALE = 'zh-CN';",description:{"zh-CN":"默认语言常量；内置 zh-CN / en-US 两套语言包。","en-US":"The default locale constant; zh-CN and en-US packs are built in."}}]},zO={class:"demo-column"},UO={class:"demo-row"},$O={style:{color:"var(--docs-text-secondary, #888)","font-size":"13px",margin:"8px 0 16px"}},EO=Z({__name:"flip",setup(e){const t=H(),n=H(),a=()=>{const i=t.value;if(!i)return;const o=i.getBoundingClientRect();window.scrollTo({top:window.scrollY+o.top-12,behavior:"smooth"})},l=()=>{const i=n.value;if(!i)return;const o=i.getBoundingClientRect();window.scrollTo({top:window.scrollY+o.top-window.innerHeight+o.height+12,behavior:"smooth"})};return(i,o)=>(b(),x("div",zO,[w("div",UO,[N(r(K),{type:"primary",onClick:a},{default:z(()=>[L(U(r(T)()?"滚动到视口顶部":"Scroll to viewport top"),1)]),_:1}),N(r(K),{onClick:l},{default:z(()=>[L(U(r(T)()?"滚动到视口底部":"Scroll to viewport bottom"),1)]),_:1})]),w("p",$O,U(r(T)()?"点击按钮将触发元素定位到视口边缘，再悬停 / 点击组件观察气泡自动翻转。":"Click a button to position the element at the viewport edge, then hover / click the component to see the popover auto-flip."),1),w("div",{ref_key:"topAnchor",ref:t,class:"demo-row",style:{padding:"8px 0"}},[N(r(On),{content:r(T)()?"上方空间不足 → 翻转到下方":"Not enough space above → flip down",placement:"top"},{default:z(()=>[N(r(K),null,{default:z(()=>[L(U(r(T)()?"Tooltip top（近顶部）":"Tooltip top (near top)"),1)]),_:1})]),_:1},8,["content"]),N(r(Ja),{content:r(T)()?"确认删除此条记录？":"Confirm delete this record?",placement:"top","confirm-text":r(T)()?"删除":"Delete","cancel-text":r(T)()?"取消":"Cancel"},{default:z(()=>[N(r(K),{type:"danger"},{default:z(()=>[...o[0]||(o[0]=[L("Popconfirm top",-1)])]),_:1})]),_:1},8,["content","confirm-text","cancel-text"])],512),o[2]||(o[2]=w("div",{style:{height:"50vh"}},null,-1)),w("div",{ref_key:"bottomAnchor",ref:n,class:"demo-row",style:{padding:"8px 0"}},[N(r(On),{content:r(T)()?"下方空间不足 → 翻转到上方":"Not enough space below → flip up",placement:"bottom"},{default:z(()=>[N(r(K),null,{default:z(()=>[L(U(r(T)()?"Tooltip bottom（近底部）":"Tooltip bottom (near bottom)"),1)]),_:1})]),_:1},8,["content"]),N(r(Ja),{content:r(T)()?"底部确认提交？":"Confirm submit at bottom?",placement:"bottom","confirm-text":r(T)()?"提交":"Submit","cancel-text":r(T)()?"取消":"Cancel"},{default:z(()=>[N(r(K),{type:"primary"},{default:z(()=>[...o[1]||(o[1]=[L("Popconfirm bottom",-1)])]),_:1})]),_:1},8,["content","confirm-text","cancel-text"])],512)]))}});function AO(){const e=ne(),t=R.useRef(null),n=R.useRef(null),a=()=>{const i=t.current;if(!i)return;const o=i.getBoundingClientRect();window.scrollTo({top:window.scrollY+o.top-12,behavior:"smooth"})},l=()=>{const i=n.current;if(!i)return;const o=i.getBoundingClientRect();window.scrollTo({top:window.scrollY+o.top-window.innerHeight+o.height+12,behavior:"smooth"})};return m.jsxs("div",{className:"demo-column",children:[m.jsxs("div",{className:"demo-row",children:[m.jsx(P,{type:"primary",onClick:a,children:e?"滚动到视口顶部":"Scroll to viewport top"}),m.jsx(P,{onClick:l,children:e?"滚动到视口底部":"Scroll to viewport bottom"})]}),m.jsx("p",{style:{color:"var(--docs-text-secondary, #888)",fontSize:"13px",margin:"8px 0 16px"},children:e?"点击按钮将触发元素定位到视口边缘，再悬停 / 点击组件观察气泡自动翻转。":"Click a button to position the element at the viewport edge, then hover / click the component to see the popover auto-flip."}),m.jsxs("div",{ref:t,className:"demo-row",style:{padding:"8px 0"},children:[m.jsx(Mn,{content:e?"上方空间不足 → 翻转到下方":"Not enough space above → flip down",placement:"top",children:m.jsx(P,{children:e?"Tooltip top（近顶部）":"Tooltip top (near top)"})}),m.jsx(sl,{content:e?"确认删除此条记录？":"Confirm delete this record?",placement:"top",confirmText:e?"删除":"Delete",cancelText:e?"取消":"Cancel",children:m.jsx(P,{type:"danger",children:"Popconfirm top"})})]}),m.jsx("div",{style:{height:"50vh"}}),m.jsxs("div",{ref:n,className:"demo-row",style:{padding:"8px 0"},children:[m.jsx(Mn,{content:e?"下方空间不足 → 翻转到上方":"Not enough space below → flip up",placement:"bottom",children:m.jsx(P,{children:e?"Tooltip bottom（近底部）":"Tooltip bottom (near bottom)"})}),m.jsx(sl,{content:e?"底部确认提交？":"Confirm submit at bottom?",placement:"bottom",confirmText:e?"提交":"Submit",cancelText:e?"取消":"Cancel",children:m.jsx(P,{type:"primary",children:"Popconfirm bottom"})})]})]})}const RO={class:"demo-column"},BO={class:"demo-row"},OO={style:{color:"var(--docs-text-secondary, #888)","font-size":"13px",margin:"8px 0 16px"}},ZO=Z({__name:"multi",setup(e){const t=H(),n=()=>{const l=t.value;if(!l)return;const i=l.getBoundingClientRect();window.scrollTo({top:window.scrollY+i.top-12,behavior:"smooth"})},a=F(()=>Array.from({length:1e3},(l,i)=>({label:T()?`选项 ${i+1}`:`Option ${i+1}`,value:String(i+1)})));return(l,i)=>(b(),x("div",RO,[w("div",BO,[N(r(K),{type:"primary",onClick:n},{default:z(()=>[L(U(r(T)()?"滚动到视口顶部":"Scroll to viewport top"),1)]),_:1})]),w("p",OO,U(r(T)()?"Tooltip / Popconfirm / Select 三组件共用 @xui-design/shared/floating 的翻转与钳制逻辑。滚动到视口顶部后操作各组件，观察气泡 / 面板自动翻转到下方。":"Tooltip / Popconfirm / Select share the flip and clamp logic of @xui-design/shared/floating. Scroll to the viewport top, then interact with each component to see the popover / panel auto-flip downward."),1),w("div",{ref_key:"anchor",ref:t,class:"demo-row",style:{padding:"8px 0",gap:"16px"}},[N(r(On),{content:r(T)()?"Tooltip 共用避让逻辑":"Tooltip shares the avoidance logic",placement:"top"},{default:z(()=>[N(r(K),null,{default:z(()=>[...i[0]||(i[0]=[L("Tooltip",-1)])]),_:1})]),_:1},8,["content"]),N(r(Ja),{content:r(T)()?"Popconfirm 共用避让逻辑":"Popconfirm shares the avoidance logic",placement:"top","confirm-text":r(T)()?"确定":"OK","cancel-text":r(T)()?"取消":"Cancel"},{default:z(()=>[N(r(K),{type:"primary"},{default:z(()=>[...i[1]||(i[1]=[L("Popconfirm",-1)])]),_:1})]),_:1},8,["content","confirm-text","cancel-text"]),N(r(fa),{options:a.value,virtual:"",placeholder:r(T)()?"Select（虚拟滚动）":"Select (virtual scroll)",style:{width:"200px"}},null,8,["options","placeholder"])],512)]))}});function DO(){const e=ne(),t=R.useRef(null),n=()=>{const l=t.current;if(!l)return;const i=l.getBoundingClientRect();window.scrollTo({top:window.scrollY+i.top-12,behavior:"smooth"})},a=Array.from({length:1e3},(l,i)=>({label:e?`选项 ${i+1}`:`Option ${i+1}`,value:String(i+1)}));return m.jsxs("div",{className:"demo-column",children:[m.jsx("div",{className:"demo-row",children:m.jsx(P,{type:"primary",onClick:n,children:e?"滚动到视口顶部":"Scroll to viewport top"})}),m.jsx("p",{style:{color:"var(--docs-text-secondary, #888)",fontSize:"13px",margin:"8px 0 16px"},children:e?"Tooltip / Popconfirm / Select 三组件共用 @xui-design/shared/floating 的翻转与钳制逻辑。滚动到视口顶部后操作各组件，观察气泡 / 面板自动翻转到下方。":"Tooltip / Popconfirm / Select share the flip and clamp logic of @xui-design/shared/floating. Scroll to the viewport top, then interact with each component to see the popover / panel auto-flip downward."}),m.jsxs("div",{ref:t,className:"demo-row",style:{padding:"8px 0",gap:"16px"},children:[m.jsx(Mn,{content:e?"Tooltip 共用避让逻辑":"Tooltip shares the avoidance logic",placement:"top",children:m.jsx(P,{children:"Tooltip"})}),m.jsx(sl,{content:e?"Popconfirm 共用避让逻辑":"Popconfirm shares the avoidance logic",placement:"top",confirmText:e?"确定":"OK",cancelText:e?"取消":"Cancel",children:m.jsx(P,{type:"primary",children:"Popconfirm"})}),m.jsx(ha,{options:a,virtual:!0,placeholder:e?"Select（虚拟滚动）":"Select (virtual scroll)",style:{width:"200px"}})]})]})}const MO=`<script setup lang="ts">
import { ref } from 'vue';
import { Tooltip, Popconfirm, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const topAnchor = ref<HTMLElement>();
const bottomAnchor = ref<HTMLElement>();

const scrollToTopEdge = () => {
  const el = topAnchor.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  window.scrollTo({ top: window.scrollY + rect.top - 12, behavior: 'smooth' });
};

const scrollToBottomEdge = () => {
  const el = bottomAnchor.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  window.scrollTo({
    top: window.scrollY + rect.top - window.innerHeight + rect.height + 12,
    behavior: 'smooth',
  });
};
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button type="primary" @click="scrollToTopEdge">
        {{ isZh() ? '滚动到视口顶部' : 'Scroll to viewport top' }}
      </Button>
      <Button @click="scrollToBottomEdge">
        {{ isZh() ? '滚动到视口底部' : 'Scroll to viewport bottom' }}
      </Button>
    </div>
    <p style="color: var(--docs-text-secondary, #888); font-size: 13px; margin: 8px 0 16px">
      {{
        isZh()
          ? '点击按钮将触发元素定位到视口边缘，再悬停 / 点击组件观察气泡自动翻转。'
          : 'Click a button to position the element at the viewport edge, then hover / click the component to see the popover auto-flip.'
      }}
    </p>
    <div ref="topAnchor" class="demo-row" style="padding: 8px 0">
      <Tooltip
        :content="isZh() ? '上方空间不足 → 翻转到下方' : 'Not enough space above → flip down'"
        placement="top"
      >
        <Button>{{ isZh() ? 'Tooltip top（近顶部）' : 'Tooltip top (near top)' }}</Button>
      </Tooltip>
      <Popconfirm
        :content="isZh() ? '确认删除此条记录？' : 'Confirm delete this record?'"
        placement="top"
        :confirm-text="isZh() ? '删除' : 'Delete'"
        :cancel-text="isZh() ? '取消' : 'Cancel'"
      >
        <Button type="danger">Popconfirm top</Button>
      </Popconfirm>
    </div>
    <div style="height: 50vh" />
    <div ref="bottomAnchor" class="demo-row" style="padding: 8px 0">
      <Tooltip
        :content="isZh() ? '下方空间不足 → 翻转到上方' : 'Not enough space below → flip up'"
        placement="bottom"
      >
        <Button>{{ isZh() ? 'Tooltip bottom（近底部）' : 'Tooltip bottom (near bottom)' }}</Button>
      </Tooltip>
      <Popconfirm
        :content="isZh() ? '底部确认提交？' : 'Confirm submit at bottom?'"
        placement="bottom"
        :confirm-text="isZh() ? '提交' : 'Submit'"
        :cancel-text="isZh() ? '取消' : 'Cancel'"
      >
        <Button type="primary">Popconfirm bottom</Button>
      </Popconfirm>
    </div>
  </div>
</template>
`,jO=`import { useRef } from 'react';
import { Tooltip, Popconfirm, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function FloatingFlipDemo() {
  const isZh = useIsZh();
  const topAnchor = useRef<HTMLDivElement>(null);
  const bottomAnchor = useRef<HTMLDivElement>(null);

  const scrollToTopEdge = () => {
    const el = topAnchor.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + rect.top - 12, behavior: 'smooth' });
  };

  const scrollToBottomEdge = () => {
    const el = bottomAnchor.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + rect.top - window.innerHeight + rect.height + 12,
      behavior: 'smooth',
    });
  };

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Button type="primary" onClick={scrollToTopEdge}>
          {isZh ? '滚动到视口顶部' : 'Scroll to viewport top'}
        </Button>
        <Button onClick={scrollToBottomEdge}>
          {isZh ? '滚动到视口底部' : 'Scroll to viewport bottom'}
        </Button>
      </div>
      <p
        style={{
          color: 'var(--docs-text-secondary, #888)',
          fontSize: '13px',
          margin: '8px 0 16px',
        }}
      >
        {isZh
          ? '点击按钮将触发元素定位到视口边缘，再悬停 / 点击组件观察气泡自动翻转。'
          : 'Click a button to position the element at the viewport edge, then hover / click the component to see the popover auto-flip.'}
      </p>
      <div ref={topAnchor} className="demo-row" style={{ padding: '8px 0' }}>
        <Tooltip
          content={isZh ? '上方空间不足 → 翻转到下方' : 'Not enough space above → flip down'}
          placement="top"
        >
          <Button>{isZh ? 'Tooltip top（近顶部）' : 'Tooltip top (near top)'}</Button>
        </Tooltip>
        <Popconfirm
          content={isZh ? '确认删除此条记录？' : 'Confirm delete this record?'}
          placement="top"
          confirmText={isZh ? '删除' : 'Delete'}
          cancelText={isZh ? '取消' : 'Cancel'}
        >
          <Button type="danger">Popconfirm top</Button>
        </Popconfirm>
      </div>
      <div style={{ height: '50vh' }} />
      <div ref={bottomAnchor} className="demo-row" style={{ padding: '8px 0' }}>
        <Tooltip
          content={isZh ? '下方空间不足 → 翻转到上方' : 'Not enough space below → flip up'}
          placement="bottom"
        >
          <Button>{isZh ? 'Tooltip bottom（近底部）' : 'Tooltip bottom (near bottom)'}</Button>
        </Tooltip>
        <Popconfirm
          content={isZh ? '底部确认提交？' : 'Confirm submit at bottom?'}
          placement="bottom"
          confirmText={isZh ? '提交' : 'Submit'}
          cancelText={isZh ? '取消' : 'Cancel'}
        >
          <Button type="primary">Popconfirm bottom</Button>
        </Popconfirm>
      </div>
    </div>
  );
}
`,VO=`<script setup lang="ts">
import { computed, ref } from 'vue';
import { Tooltip, Popconfirm, Select, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const anchor = ref<HTMLElement>();

const scrollToTopEdge = () => {
  const el = anchor.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  window.scrollTo({ top: window.scrollY + rect.top - 12, behavior: 'smooth' });
};

const options = computed(() =>
  Array.from({ length: 1000 }, (_, i) => ({
    label: isZh() ? \`选项 \${i + 1}\` : \`Option \${i + 1}\`,
    value: String(i + 1),
  })),
);
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button type="primary" @click="scrollToTopEdge">
        {{ isZh() ? '滚动到视口顶部' : 'Scroll to viewport top' }}
      </Button>
    </div>
    <p style="color: var(--docs-text-secondary, #888); font-size: 13px; margin: 8px 0 16px">
      {{
        isZh()
          ? 'Tooltip / Popconfirm / Select 三组件共用 @xui-design/shared/floating 的翻转与钳制逻辑。滚动到视口顶部后操作各组件，观察气泡 / 面板自动翻转到下方。'
          : 'Tooltip / Popconfirm / Select share the flip and clamp logic of @xui-design/shared/floating. Scroll to the viewport top, then interact with each component to see the popover / panel auto-flip downward.'
      }}
    </p>
    <div ref="anchor" class="demo-row" style="padding: 8px 0; gap: 16px">
      <Tooltip
        :content="isZh() ? 'Tooltip 共用避让逻辑' : 'Tooltip shares the avoidance logic'"
        placement="top"
      >
        <Button>Tooltip</Button>
      </Tooltip>
      <Popconfirm
        :content="isZh() ? 'Popconfirm 共用避让逻辑' : 'Popconfirm shares the avoidance logic'"
        placement="top"
        :confirm-text="isZh() ? '确定' : 'OK'"
        :cancel-text="isZh() ? '取消' : 'Cancel'"
      >
        <Button type="primary">Popconfirm</Button>
      </Popconfirm>
      <Select
        :options="options"
        virtual
        :placeholder="isZh() ? 'Select（虚拟滚动）' : 'Select (virtual scroll)'"
        style="width: 200px"
      />
    </div>
  </div>
</template>
`,LO=`import { useRef } from 'react';
import { Tooltip, Popconfirm, Select, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function FloatingMultiDemo() {
  const isZh = useIsZh();
  const anchor = useRef<HTMLDivElement>(null);

  const scrollToTopEdge = () => {
    const el = anchor.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + rect.top - 12, behavior: 'smooth' });
  };

  const options = Array.from({ length: 1000 }, (_, i) => ({
    label: isZh ? \`选项 \${i + 1}\` : \`Option \${i + 1}\`,
    value: String(i + 1),
  }));

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Button type="primary" onClick={scrollToTopEdge}>
          {isZh ? '滚动到视口顶部' : 'Scroll to viewport top'}
        </Button>
      </div>
      <p
        style={{
          color: 'var(--docs-text-secondary, #888)',
          fontSize: '13px',
          margin: '8px 0 16px',
        }}
      >
        {isZh
          ? 'Tooltip / Popconfirm / Select 三组件共用 @xui-design/shared/floating 的翻转与钳制逻辑。滚动到视口顶部后操作各组件，观察气泡 / 面板自动翻转到下方。'
          : 'Tooltip / Popconfirm / Select share the flip and clamp logic of @xui-design/shared/floating. Scroll to the viewport top, then interact with each component to see the popover / panel auto-flip downward.'}
      </p>
      <div ref={anchor} className="demo-row" style={{ padding: '8px 0', gap: '16px' }}>
        <Tooltip
          content={isZh ? 'Tooltip 共用避让逻辑' : 'Tooltip shares the avoidance logic'}
          placement="top"
        >
          <Button>Tooltip</Button>
        </Tooltip>
        <Popconfirm
          content={isZh ? 'Popconfirm 共用避让逻辑' : 'Popconfirm shares the avoidance logic'}
          placement="top"
          confirmText={isZh ? '确定' : 'OK'}
          cancelText={isZh ? '取消' : 'Cancel'}
        >
          <Button type="primary">Popconfirm</Button>
        </Popconfirm>
        <Select
          options={options}
          virtual
          placeholder={isZh ? 'Select（虚拟滚动）' : 'Select (virtual scroll)'}
          style={{ width: '200px' }}
        />
      </div>
    </div>
  );
}
`,HO=[{id:"flip",title:{"zh-CN":"方位翻转（flip）","en-US":"Placement Flipping (flip)"},description:{"zh-CN":'首选方位空间不足且对侧更充足时自动翻转：placement="top" 在视口顶部翻转到 bottom，placement="bottom" 在视口底部翻转到 top。',"en-US":'Flips automatically when the preferred placement lacks space and the opposite side has more: placement="top" flips to bottom at the top of the viewport, and placement="bottom" flips to top at the bottom.'},vueComponent:EO,reactComponent:AO,vueSource:MO,reactSource:jO},{id:"multi",title:{"zh-CN":"三组件共用避让逻辑","en-US":"Three Components, One Avoidance Logic"},description:{"zh-CN":"Tooltip / Popconfirm / Select 双端共用 @xui-design/shared/floating 的翻转与钳制算法，不重复实现。","en-US":"Tooltip / Popconfirm / Select share the flip and clamp algorithms from @xui-design/shared/floating on both frameworks — implemented once."},vueComponent:ZO,reactComponent:DO,vueSource:VO,reactSource:LO}],IO={methods:[{name:"resolveFloatingPosition",signature:"(trigger: FloatingRect, popper: FloatingRect, viewport: FloatingViewport, options: ResolveFloatingOptions) => FloatingPosition",description:{"zh-CN":"纯函数：输入触发器 / 浮层 / 视口的坐标矩形，输出最终方位（可能已翻转）与交叉轴平移量；不读 DOM、不写样式，便于单测。","en-US":"Pure function: takes the trigger / popper / viewport rects and returns the final placement (possibly flipped) plus the cross-axis shift; never reads the DOM or writes styles, making it easy to unit test."}},{name:"getViewport",signature:"() => FloatingViewport",description:{"zh-CN":"获取当前视口边界（整页可视区域）；SSR / 无 window 环境返回零矩形（计算结果等价于不翻转不偏移）。","en-US":"Returns the current viewport bounds (the visible page area); returns a zero rect in SSR / window-less environments (equivalent to no flip and no shift)."}},{name:"bindViewportUpdate",signature:"(callback: () => void) => () => void",description:{"zh-CN":"订阅视口变化（scroll capture + resize），回调经 rAF 合并（一帧最多一次）；返回解绑函数，组件卸载时调用即可彻底清理。","en-US":"Subscribes to viewport changes (scroll capture + resize) with callbacks batched via rAF (at most once per frame); returns an unbind function — call it on component unmount for full cleanup."}}],types:[{name:"FloatingPlacement",definition:"type FloatingPlacement = 'top' | 'bottom' | 'left' | 'right';",description:{"zh-CN":"四方位联合类型，与 core 契约的 placement 对齐。","en-US":"Union of the four placements, aligned with the placement contract in core."}},{name:"FloatingRect",definition:`type FloatingRect = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
};`,description:{"zh-CN":"视口坐标矩形，可直接传 getBoundingClientRect() 的结果。","en-US":"A viewport-coordinate rect; accepts the result of getBoundingClientRect() directly."}},{name:"ResolveFloatingOptions",definition:`type ResolveFloatingOptions = {
  placement: FloatingPlacement;
  gap?: number;        // 触发器与浮层间距，默认 8
  viewportPadding?: number; // 视口边缘安全区，默认 8
};`,description:{"zh-CN":"resolveFloatingPosition 的入参选项。","en-US":"Options for resolveFloatingPosition."}},{name:"FloatingPosition",definition:`type FloatingPosition = {
  placement: FloatingPlacement; // 实际方位（可能已翻转）
  shift: number;                // 交叉轴平移量（px）
};`,description:{"zh-CN":"避让计算结果：top/bottom 方位 shift 为水平位移（正向右移），left/right 方位为垂直位移（正向下移）。","en-US":"The avoidance result: for top/bottom placements, shift is horizontal (positive moves right); for left/right placements, it is vertical (positive moves down)."}}]},FO=Z({__name:"GuideDemo",props:{guide:{},demoId:{}},setup(e){const t=e,n={theme:cO,i18n:NO,floating:HO},a=F(()=>{var l;return(l=n[t.guide])==null?void 0:l.find(i=>i.id===t.demoId)});return(l,i)=>a.value?(b(),Q(vy,{key:0,demo:a.value},null,8,["demo"])):V("",!0)}}),qO=Z({__name:"GuideApi",props:{guide:{},kind:{}},setup(e){const t=e,n={theme:dO,i18n:TO,floating:IO},a=F(()=>n[t.guide]);return(l,i)=>a.value?(b(),Q(gy,{key:0,api:a.value,kind:e.kind},null,8,["api","kind"])):V("",!0)}}),GO={class:"docs-home-body"},YO={class:"home-section"},KO={class:"docs-section-title"},PO={class:"demo-block__tabs",style:{margin:"16px 0 12px"}},XO={class:"home-section"},QO={class:"docs-section-title"},JO={class:"home-section"},WO={class:"docs-section-title"},eZ={class:"docs-subsection-title"},tZ={class:"home-grid"},nZ=["href"],aZ={class:"home-card__title"},lZ={class:"home-card__en"},iZ={class:"home-card__desc"},oZ={class:"home-card__title"},sZ={class:"home-card__en"},rZ={class:"home-card__soon"},uZ={class:"home-card__desc"},cZ="<\/script>",dZ=Z({__name:"ComponentOverview",setup(e){const{lang:t}=xo(),n=Yr(),a=H("vue"),l=PB().map(f=>({...f,availableList:f.components.filter(g=>g.available),pendingList:f.components.filter(g=>!g.available)})),i=F(()=>t.value==="zh-CN"?"":"/en"),o=f=>hr(`${i.value}/components/${f}`),s=F(()=>{const f=a.value==="vue"?"main.ts":"main.tsx";return`pnpm add @xui-design/${a.value} @xui-design/styles

${n.value.home.installCoreComment}
pnpm add @xui-design/core

${n.value.home.installStyleComment}
# ${f}:  import '@xui-design/styles'`}),u=F(()=>a.value==="vue"?`<script setup lang="ts">
import { Button } from '@xui-design/vue';
import '@xui-design/styles';
${cZ}

<template>
  <Button type="primary">Hello XUI</Button>
</template>`:`import { Button } from '@xui-design/react';
import '@xui-design/styles';

export default function App() {
  return (
    <Button type="primary">Hello XUI</Button>
  );
}`),d=f=>{const g=py.find(C=>C.slug===f);return g?Ia(g.summary):""},p=f=>T()?f.title:f.name,c=f=>T()?f.name:f.title;return(f,g)=>(b(),x("div",GO,[w("section",YO,[w("h2",KO,U(r(n).home.installTitle),1),w("div",PO,[w("button",{type:"button",class:Y(["demo-block__tab",{"is-active":a.value==="vue"}]),onClick:g[0]||(g[0]=C=>a.value="vue")}," Vue ",2),w("button",{type:"button",class:Y(["demo-block__tab",{"is-active":a.value==="react"}]),onClick:g[1]||(g[1]=C=>a.value="react")}," React ",2)]),N(fr,{code:s.value,lang:"bash"},null,8,["code"])]),w("section",XO,[w("h2",QO,U(r(n).home.quickStartTitle),1),N(fr,{code:u.value,lang:a.value},null,8,["code","lang"])]),w("section",JO,[w("h2",WO,U(r(n).home.overviewTitle),1),(b(!0),x(ie,null,ye(r(l),C=>(b(),x(ie,{key:C.category.key},[w("h3",eZ,U(r(Ia)(C.category.title)),1),w("div",tZ,[(b(!0),x(ie,null,ye(C.availableList,S=>(b(),x("a",{key:S.slug,href:o(S.slug),class:"home-card"},[w("div",aZ,[L(U(p(S))+" ",1),w("span",lZ,U(c(S)),1)]),w("p",iZ,U(d(S.slug)),1)],8,nZ))),128)),(b(!0),x(ie,null,ye(C.pendingList,S=>(b(),x("div",{key:S.slug,class:"home-card is-disabled"},[w("div",oZ,[L(U(p(S))+" ",1),w("span",sZ,U(c(S)),1),w("span",rZ,U(r(n).nav.soon),1)]),w("p",uZ,U(r(n).home.pendingDesc),1)]))),128))])],64))),128))])]))}}),pZ={extends:Wf,Layout:()=>Dy(Ow),enhanceApp({app:e}){delete e._context.components.Content,e.component("Content",Zw),e.component("ComponentDemo",f8),e.component("ComponentApi",L8),e.component("GuideDemo",FO),e.component("GuideApi",qO),e.component("ComponentOverview",dZ)}};export{pZ as R,W1 as c,be as u};
