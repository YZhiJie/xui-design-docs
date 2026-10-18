const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.DNBhh0ED.js","assets/chunks/framework.DjvAMpXr.js"])))=>i.map(i=>d[i]);
import{d as D,o as g,c as x,r as M,n as J,a as G,t as $,b as ae,w as E,e as H,T as Uo,_ as de,u as $o,i as Py,f as Ky,g as Tr,h as Y,j as N,k as r,l as tl,m as Gu,p as F,q as Xe,s as Ne,v as Vt,x as we,y as wd,z as Xy,A as Qy,B as Da,F as ne,C as pe,D as zr,E as z,G as rh,H as sn,I as uh,J as Ur,K as _a,L as vi,M as Jy,N as he,O as Yu,P as Ot,Q as ch,R as $r,S as dh,U as Wy,V as eS,W as mh,X as Er,Y as tS,Z as gs,$ as Td,a0 as jt,a1 as ph,a2 as ht,a3 as fh,a4 as un,a5 as Is,a6 as nS,a7 as aS,a8 as lS,a9 as iS,aa as hh,ab as oS,ac as sS,ad as rS,ae as uS,af as cS,ag as dS,ah as mS,ai as pS}from"./framework.DjvAMpXr.js";const fS=D({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(g(),x("span",{class:J(["VPBadge",e.type])},[M(t.$slots,"default",{},()=>[G($(e.text),1)])],2))}}),hS={key:0,class:"VPBackdrop"},vS=D({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(g(),ae(Uo,{name:"fade"},{default:E(()=>[e.show?(g(),x("div",hS)):H("",!0)]),_:1}))}}),gS=de(vS,[["__scopeId","data-v-b4eae23b"]]),ye=$o;function bS(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),(a=!0)&&setTimeout(()=>a=!1,t))}}function Pu(e){return e.startsWith("/")?e:`/${e}`}function zd(e){const{pathname:t,search:n,hash:a,protocol:l}=new URL(e,"http://a.com");if(Py(e)||e.startsWith("#")||!l.startsWith("http")||!Ky(t))return e;const{site:i}=ye(),o=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${n}${a}`);return Tr(o)}function Eo({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:a,theme:l,hash:i}=ye(),o=Y(()=>{var u,d;return{label:(u=t.value.locales[n.value])==null?void 0:u.label,link:((d=t.value.locales[n.value])==null?void 0:d.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:Y(()=>Object.entries(t.value.locales).flatMap(([u,d])=>o.value.label===d.label?[]:{text:d.label,link:yS(d.link||(u==="root"?"/":`/${u}/`),l.value.i18nRouting!==!1&&e,a.value.relativePath.slice(o.value.link.length-1),!t.value.cleanUrls)+i.value})),currentLang:o}}function yS(e,t,n,a){return t?e.replace(/\/$/,"")+Pu(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):e}const SS={class:"NotFound"},xS={class:"code"},_S={class:"title"},CS={class:"quote"},kS={class:"action"},NS=["href","aria-label"],wS=D({__name:"NotFound",setup(e){const{theme:t}=ye(),{currentLang:n}=Eo();return(a,l)=>{var i,o,s,u,d;return g(),x("div",SS,[N("p",xS,$(((i=r(t).notFound)==null?void 0:i.code)??"404"),1),N("h1",_S,$(((o=r(t).notFound)==null?void 0:o.title)??"PAGE NOT FOUND"),1),l[0]||(l[0]=N("div",{class:"divider"},null,-1)),N("blockquote",CS,$(((s=r(t).notFound)==null?void 0:s.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),N("div",kS,[N("a",{class:"link",href:r(Tr)(r(n).link),"aria-label":((u=r(t).notFound)==null?void 0:u.linkLabel)??"go to home"},$(((d=r(t).notFound)==null?void 0:d.linkText)??"Take me home"),9,NS)])])}}}),TS=de(wS,[["__scopeId","data-v-b6076cfe"]]);function vh(e,t){if(Array.isArray(e))return bs(e);if(e==null)return[];t=Pu(t);const n=Object.keys(e).sort((l,i)=>i.split("/").length-l.split("/").length).find(l=>t.startsWith(Pu(l))),a=n?e[n]:[];return Array.isArray(a)?bs(a):bs(a.items,a.base)}function zS(e){const t=[];let n=0;for(const a in e){const l=e[a];if(l.items){n=t.push(l);continue}t[n]||t.push({items:[]}),t[n].items.push(l)}return t}function US(e){const t=[];function n(a){for(const l of a)l.text&&l.link&&t.push({text:l.text,link:l.link,docFooterText:l.docFooterText}),l.items&&n(l.items)}return n(e),t}function Ku(e,t){return Array.isArray(t)?t.some(n=>Ku(e,n)):tl(e,t.link)?!0:t.items?Ku(e,t.items):!1}function bs(e,t){return[...e].map(n=>{const a={...n},l=a.base||t;return l&&a.link&&(a.link=l+a.link),a.items&&(a.items=bs(a.items,l)),a})}function ta(){const{frontmatter:e,page:t,theme:n}=ye(),a=Gu("(min-width: 960px)"),l=F(!1),i=Y(()=>{const S=n.value.sidebar,C=t.value.relativePath;return S?vh(S,C):[]}),o=F(i.value);Xe(i,(S,C)=>{JSON.stringify(S)!==JSON.stringify(C)&&(o.value=i.value)});const s=Y(()=>e.value.sidebar!==!1&&o.value.length>0&&e.value.layout!=="home"),u=Y(()=>d?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),d=Y(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),p=Y(()=>s.value&&a.value),m=Y(()=>s.value?zS(o.value):[]);function h(){l.value=!0}function v(){l.value=!1}function k(){l.value?v():h()}return{isOpen:l,sidebar:o,sidebarGroups:m,hasSidebar:s,hasAside:d,leftAside:u,isSidebarEnabled:p,open:h,close:v,toggle:k}}function $S(e,t){let n;Ne(()=>{n=e.value?document.activeElement:void 0}),Vt(()=>{window.addEventListener("keyup",a)}),we(()=>{window.removeEventListener("keyup",a)});function a(l){l.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function ES(e){const{page:t,hash:n}=ye(),a=F(!1),l=Y(()=>e.value.collapsed!=null),i=Y(()=>!!e.value.link),o=F(!1),s=()=>{o.value=tl(t.value.relativePath,e.value.link)};Xe([t,e,n],s),Vt(s);const u=Y(()=>o.value?!0:e.value.items?Ku(t.value.relativePath,e.value.items):!1),d=Y(()=>!!(e.value.items&&e.value.items.length));Ne(()=>{a.value=!!(l.value&&e.value.collapsed)}),wd(()=>{(o.value||u.value)&&(a.value=!1)});function p(){l.value&&(a.value=!a.value)}return{collapsed:a,collapsible:l,isLink:i,isActiveLink:o,hasActiveLink:u,hasChildren:d,toggle:p}}function RS(){const{hasSidebar:e}=ta(),t=Gu("(min-width: 960px)"),n=Gu("(min-width: 1280px)");return{isAsideEnabled:Y(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const AS=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Xu=[];function gh(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function Ud(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const a=Number(n.tagName[1]);return{element:n,title:OS(n),link:"#"+n.id,level:a}});return BS(t,e)}function OS(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(AS.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function BS(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[a,l]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return MS(e,a,l)}function ZS(e,t){const{isAsideEnabled:n}=RS(),a=bS(i,100);let l=null;Vt(()=>{requestAnimationFrame(i),window.addEventListener("scroll",a)}),Xy(()=>{o(location.hash)}),we(()=>{window.removeEventListener("scroll",a)});function i(){if(!n.value)return;const s=window.scrollY,u=window.innerHeight,d=document.body.offsetHeight,p=Math.abs(s+u-d)<1,m=Xu.map(({element:v,link:k})=>({link:k,top:jS(v)})).filter(({top:v})=>!Number.isNaN(v)).sort((v,k)=>v.top-k.top);if(!m.length){o(null);return}if(s<1){o(null);return}if(p){o(m[m.length-1].link);return}let h=null;for(const{link:v,top:k}of m){if(k>s+Qy()+4)break;h=v}o(h)}function o(s){l&&l.classList.remove("active"),s==null?l=null:l=e.value.querySelector(`a[href="${decodeURIComponent(s)}"]`);const u=l;u?(u.classList.add("active"),t.value.style.top=u.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function jS(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function MS(e,t,n){Xu.length=0;const a=[],l=[];return e.forEach(i=>{const o={...i,children:[]};let s=l[l.length-1];for(;s&&s.level>=o.level;)l.pop(),s=l[l.length-1];if(o.element.classList.contains("ignore-header")||s&&"shouldIgnore"in s){l.push({level:o.level,shouldIgnore:!0});return}o.level>n||o.level<t||(Xu.push({element:o.element,link:o.link}),s?s.children.push(o):a.push(o),l.push(o))}),a}const DS=["href","title"],LS=D({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const a=n.href.split("#")[1],l=document.getElementById(decodeURIComponent(a));l==null||l.focus({preventScroll:!0})}return(n,a)=>{const l=Da("VPDocOutlineItem",!0);return g(),x("ul",{class:J(["VPDocOutlineItem",e.root?"root":"nested"])},[(g(!0),x(ne,null,pe(e.headers,({children:i,link:o,title:s})=>(g(),x("li",null,[N("a",{class:"outline-link",href:o,onClick:t,title:s},$(s),9,DS),i!=null&&i.length?(g(),ae(l,{key:0,headers:i},null,8,["headers"])):H("",!0)]))),256))],2)}}}),bh=de(LS,[["__scopeId","data-v-21c134d0"]]),VS={class:"content"},HS={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},IS=D({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=ye(),a=rh([]);zr(()=>{a.value=Ud(t.value.outline??n.value.outline)});const l=F(),i=F();return ZS(l,i),(o,s)=>(g(),x("nav",{"aria-labelledby":"doc-outline-aria-label",class:J(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:l},[N("div",VS,[N("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),N("div",HS,$(r(gh)(r(n))),1),z(bh,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),FS=de(IS,[["__scopeId","data-v-811e79c0"]]),qS={class:"VPDocAsideCarbonAds"},GS=D({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,a)=>(g(),x("div",qS,[z(r(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),YS={class:"VPDocAside"},PS=D({__name:"VPDocAside",setup(e){const{theme:t}=ye();return(n,a)=>(g(),x("div",YS,[M(n.$slots,"aside-top",{},void 0,!0),M(n.$slots,"aside-outline-before",{},void 0,!0),z(FS),M(n.$slots,"aside-outline-after",{},void 0,!0),a[0]||(a[0]=N("div",{class:"spacer"},null,-1)),M(n.$slots,"aside-ads-before",{},void 0,!0),r(t).carbonAds?(g(),ae(GS,{key:0,"carbon-ads":r(t).carbonAds},null,8,["carbon-ads"])):H("",!0),M(n.$slots,"aside-ads-after",{},void 0,!0),M(n.$slots,"aside-bottom",{},void 0,!0)]))}}),KS=de(PS,[["__scopeId","data-v-1f35908d"]]);function XS(){const{theme:e,page:t}=ye();return Y(()=>{const{text:n="Edit this page",pattern:a=""}=e.value.editLink||{};let l;return typeof a=="function"?l=a(t.value):l=a.replace(/:path/g,t.value.filePath),{url:l,text:n}})}function QS(){const{page:e,theme:t,frontmatter:n}=ye();return Y(()=>{var d,p,m,h,v,k,S,C;const a=vh(t.value.sidebar,e.value.relativePath),l=US(a),i=JS(l,b=>b.link.replace(/[?#].*$/,"")),o=i.findIndex(b=>tl(e.value.relativePath,b.link)),s=((d=t.value.docFooter)==null?void 0:d.prev)===!1&&!n.value.prev||n.value.prev===!1,u=((p=t.value.docFooter)==null?void 0:p.next)===!1&&!n.value.next||n.value.next===!1;return{prev:s?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((m=i[o-1])==null?void 0:m.docFooterText)??((h=i[o-1])==null?void 0:h.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((v=i[o-1])==null?void 0:v.link)},next:u?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((k=i[o+1])==null?void 0:k.docFooterText)??((S=i[o+1])==null?void 0:S.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((C=i[o+1])==null?void 0:C.link)}}})}function JS(e,t){const n=new Set;return e.filter(a=>{const l=t(a);return n.has(l)?!1:n.add(l)})}const Un=D({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=Y(()=>t.tag??(t.href?"a":"span")),a=Y(()=>t.href&&uh.test(t.href)||t.target==="_blank");return(l,i)=>(g(),ae(sn(n.value),{class:J(["VPLink",{link:e.href,"vp-external-link-icon":a.value,"no-icon":e.noIcon}]),href:e.href?r(zd)(e.href):void 0,target:e.target??(a.value?"_blank":void 0),rel:e.rel??(a.value?"noreferrer":void 0)},{default:E(()=>[M(l.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),WS={class:"VPLastUpdated"},e0=["datetime"],t0=D({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:a}=ye(),l=Y(()=>new Date(n.value.lastUpdated)),i=Y(()=>l.value.toISOString()),o=F("");return Vt(()=>{Ne(()=>{var s,u,d;o.value=new Intl.DateTimeFormat((u=(s=t.value.lastUpdated)==null?void 0:s.formatOptions)!=null&&u.forceLocale?a.value:void 0,((d=t.value.lastUpdated)==null?void 0:d.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(l.value)})}),(s,u)=>{var d;return g(),x("p",WS,[G($(((d=r(t).lastUpdated)==null?void 0:d.text)||r(t).lastUpdatedText||"Last updated")+": ",1),N("time",{datetime:i.value},$(o.value),9,e0)])}}}),n0=de(t0,[["__scopeId","data-v-a0add123"]]),a0={key:0,class:"VPDocFooter"},l0={key:0,class:"edit-info"},i0={key:0,class:"edit-link"},o0={key:1,class:"last-updated"},s0={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},r0={class:"pager"},u0=["innerHTML"],c0=["innerHTML"],d0={class:"pager"},m0=["innerHTML"],p0=["innerHTML"],f0=D({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:a}=ye(),l=XS(),i=QS(),o=Y(()=>t.value.editLink&&a.value.editLink!==!1),s=Y(()=>n.value.lastUpdated),u=Y(()=>o.value||s.value||i.value.prev||i.value.next);return(d,p)=>{var m,h,v,k;return u.value?(g(),x("footer",a0,[M(d.$slots,"doc-footer-before",{},void 0,!0),o.value||s.value?(g(),x("div",l0,[o.value?(g(),x("div",i0,[z(Un,{class:"edit-link-button",href:r(l).url,"no-icon":!0},{default:E(()=>[p[0]||(p[0]=N("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),G(" "+$(r(l).text),1)]),_:1},8,["href"])])):H("",!0),s.value?(g(),x("div",o0,[z(n0)])):H("",!0)])):H("",!0),(m=r(i).prev)!=null&&m.link||(h=r(i).next)!=null&&h.link?(g(),x("nav",s0,[p[1]||(p[1]=N("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),N("div",r0,[(v=r(i).prev)!=null&&v.link?(g(),ae(Un,{key:0,class:"pager-link prev",href:r(i).prev.link},{default:E(()=>{var S;return[N("span",{class:"desc",innerHTML:((S=r(t).docFooter)==null?void 0:S.prev)||"Previous page"},null,8,u0),N("span",{class:"title",innerHTML:r(i).prev.text},null,8,c0)]}),_:1},8,["href"])):H("",!0)]),N("div",d0,[(k=r(i).next)!=null&&k.link?(g(),ae(Un,{key:0,class:"pager-link next",href:r(i).next.link},{default:E(()=>{var S;return[N("span",{class:"desc",innerHTML:((S=r(t).docFooter)==null?void 0:S.next)||"Next page"},null,8,m0),N("span",{class:"title",innerHTML:r(i).next.text},null,8,p0)]}),_:1},8,["href"])):H("",!0)])])):H("",!0)])):H("",!0)}}}),h0=de(f0,[["__scopeId","data-v-9efd0a2f"]]),v0={class:"container"},g0={class:"aside-container"},b0={class:"aside-content"},y0={class:"content"},S0={class:"content-container"},x0={class:"main"},_0=D({__name:"VPDoc",setup(e){const{theme:t}=ye(),n=Ur(),{hasSidebar:a,hasAside:l,leftAside:i}=ta(),o=Y(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(s,u)=>{const d=Da("Content");return g(),x("div",{class:J(["VPDoc",{"has-sidebar":r(a),"has-aside":r(l)}])},[M(s.$slots,"doc-top",{},void 0,!0),N("div",v0,[r(l)?(g(),x("div",{key:0,class:J(["aside",{"left-aside":r(i)}])},[u[0]||(u[0]=N("div",{class:"aside-curtain"},null,-1)),N("div",g0,[N("div",b0,[z(KS,null,{"aside-top":E(()=>[M(s.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":E(()=>[M(s.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":E(()=>[M(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":E(()=>[M(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":E(()=>[M(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":E(()=>[M(s.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):H("",!0),N("div",y0,[N("div",S0,[M(s.$slots,"doc-before",{},void 0,!0),N("main",x0,[z(d,{class:J(["vp-doc",[o.value,r(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),z(h0,null,{"doc-footer-before":E(()=>[M(s.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),M(s.$slots,"doc-after",{},void 0,!0)])])]),M(s.$slots,"doc-bottom",{},void 0,!0)],2)}}}),C0=de(_0,[["__scopeId","data-v-a4018fe9"]]),k0=D({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=Y(()=>t.href&&uh.test(t.href)),a=Y(()=>t.tag||(t.href?"a":"button"));return(l,i)=>(g(),ae(sn(a.value),{class:J(["VPButton",[e.size,e.theme]]),href:e.href?r(zd)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:E(()=>[G($(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),N0=de(k0,[["__scopeId","data-v-d62b1c2f"]]),w0=["src","alt"],T0=D({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const a=Da("VPImage",!0);return e.image?(g(),x(ne,{key:0},[typeof e.image=="string"||"src"in e.image?(g(),x("img",_a({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:r(Tr)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,w0)):(g(),x(ne,{key:1},[z(a,_a({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),z(a,_a({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):H("",!0)}}}),Fs=de(T0,[["__scopeId","data-v-e7ab6932"]]),z0={class:"container"},U0={class:"main"},$0={class:"heading"},E0=["innerHTML"],R0=["innerHTML"],A0=["innerHTML"],O0={key:0,class:"actions"},B0={key:0,class:"image"},Z0={class:"image-container"},j0=D({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=vi("hero-image-slot-exists");return(n,a)=>(g(),x("div",{class:J(["VPHero",{"has-image":e.image||r(t)}])},[N("div",z0,[N("div",U0,[M(n.$slots,"home-hero-info-before",{},void 0,!0),M(n.$slots,"home-hero-info",{},()=>[N("h1",$0,[e.name?(g(),x("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,E0)):H("",!0),e.text?(g(),x("span",{key:1,innerHTML:e.text,class:"text"},null,8,R0)):H("",!0)]),e.tagline?(g(),x("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,A0)):H("",!0)],!0),M(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(g(),x("div",O0,[(g(!0),x(ne,null,pe(e.actions,l=>(g(),x("div",{key:l.link,class:"action"},[z(N0,{tag:"a",size:"medium",theme:l.theme,text:l.text,href:l.link,target:l.target,rel:l.rel},null,8,["theme","text","href","target","rel"])]))),128))])):H("",!0),M(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||r(t)?(g(),x("div",B0,[N("div",Z0,[a[0]||(a[0]=N("div",{class:"image-bg"},null,-1)),M(n.$slots,"home-hero-image",{},()=>[e.image?(g(),ae(Fs,{key:0,class:"image-src",image:e.image},null,8,["image"])):H("",!0)],!0)])])):H("",!0)])],2))}}),M0=de(j0,[["__scopeId","data-v-c0fe9412"]]),D0=D({__name:"VPHomeHero",setup(e){const{frontmatter:t}=ye();return(n,a)=>r(t).hero?(g(),ae(M0,{key:0,class:"VPHomeHero",name:r(t).hero.name,text:r(t).hero.text,tagline:r(t).hero.tagline,image:r(t).hero.image,actions:r(t).hero.actions},{"home-hero-info-before":E(()=>[M(n.$slots,"home-hero-info-before")]),"home-hero-info":E(()=>[M(n.$slots,"home-hero-info")]),"home-hero-info-after":E(()=>[M(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":E(()=>[M(n.$slots,"home-hero-actions-after")]),"home-hero-image":E(()=>[M(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):H("",!0)}}),L0={class:"box"},V0={key:0,class:"icon"},H0=["innerHTML"],I0=["innerHTML"],F0=["innerHTML"],q0={key:4,class:"link-text"},G0={class:"link-text-value"},Y0=D({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(g(),ae(Un,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:E(()=>[N("article",L0,[typeof e.icon=="object"&&e.icon.wrap?(g(),x("div",V0,[z(Fs,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(g(),ae(Fs,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(g(),x("div",{key:2,class:"icon",innerHTML:e.icon},null,8,H0)):H("",!0),N("h2",{class:"title",innerHTML:e.title},null,8,I0),e.details?(g(),x("p",{key:3,class:"details",innerHTML:e.details},null,8,F0)):H("",!0),e.linkText?(g(),x("div",q0,[N("p",G0,[G($(e.linkText)+" ",1),n[0]||(n[0]=N("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):H("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),P0=de(Y0,[["__scopeId","data-v-b285169c"]]),K0={key:0,class:"VPFeatures"},X0={class:"container"},Q0={class:"items"},J0=D({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=Y(()=>{const a=t.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,l)=>e.features?(g(),x("div",K0,[N("div",X0,[N("div",Q0,[(g(!0),x(ne,null,pe(e.features,i=>(g(),x("div",{key:i.title,class:J(["item",[n.value]])},[z(P0,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):H("",!0)}}),W0=de(J0,[["__scopeId","data-v-641f3c6a"]]),ex=D({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=ye();return(n,a)=>r(t).features?(g(),ae(W0,{key:0,class:"VPHomeFeatures",features:r(t).features},null,8,["features"])):H("",!0)}}),tx=D({__name:"VPHomeContent",setup(e){const{width:t}=Jy({initialWidth:0,includeScrollbar:!1});return(n,a)=>(g(),x("div",{class:"vp-doc container",style:he(r(t)?{"--vp-offset":`calc(50% - ${r(t)/2}px)`}:{})},[M(n.$slots,"default",{},void 0,!0)],4))}}),nx=de(tx,[["__scopeId","data-v-a7e7b8fa"]]),ax=D({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=ye();return(a,l)=>{const i=Da("Content");return g(),x("div",{class:J(["VPHome",{"external-link-icon-enabled":r(n).externalLinkIcon}])},[M(a.$slots,"home-hero-before",{},void 0,!0),z(D0,null,{"home-hero-info-before":E(()=>[M(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":E(()=>[M(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":E(()=>[M(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":E(()=>[M(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":E(()=>[M(a.$slots,"home-hero-image",{},void 0,!0)]),_:3}),M(a.$slots,"home-hero-after",{},void 0,!0),M(a.$slots,"home-features-before",{},void 0,!0),z(ex),M(a.$slots,"home-features-after",{},void 0,!0),r(t).markdownStyles!==!1?(g(),ae(nx,{key:0},{default:E(()=>[z(i)]),_:1})):(g(),ae(i,{key:1}))],2)}}}),lx=de(ax,[["__scopeId","data-v-a06b0b8e"]]),ix={},ox={class:"VPPage"};function sx(e,t){const n=Da("Content");return g(),x("div",ox,[M(e.$slots,"page-top"),z(n),M(e.$slots,"page-bottom")])}const rx=de(ix,[["render",sx]]),ux=D({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=ye(),{hasSidebar:a}=ta();return(l,i)=>(g(),x("div",{class:J(["VPContent",{"has-sidebar":r(a),"is-home":r(n).layout==="home"}]),id:"VPContent"},[r(t).isNotFound?M(l.$slots,"not-found",{},()=>[z(TS)],!0,0):r(n).layout==="page"?(g(),ae(rx,{key:1},{"page-top":E(()=>[M(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":E(()=>[M(l.$slots,"page-bottom",{},void 0,!0)]),_:3})):r(n).layout==="home"?(g(),ae(lx,{key:2},{"home-hero-before":E(()=>[M(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":E(()=>[M(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":E(()=>[M(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":E(()=>[M(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":E(()=>[M(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":E(()=>[M(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":E(()=>[M(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":E(()=>[M(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":E(()=>[M(l.$slots,"home-features-after",{},void 0,!0)]),_:3})):r(n).layout&&r(n).layout!=="doc"?(g(),ae(sn(r(n).layout),{key:3})):(g(),ae(C0,{key:4},{"doc-top":E(()=>[M(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":E(()=>[M(l.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":E(()=>[M(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":E(()=>[M(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":E(()=>[M(l.$slots,"doc-after",{},void 0,!0)]),"aside-top":E(()=>[M(l.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":E(()=>[M(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":E(()=>[M(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":E(()=>[M(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":E(()=>[M(l.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":E(()=>[M(l.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),cx=de(ux,[["__scopeId","data-v-e0f29958"]]),dx={class:"container"},mx=["innerHTML"],px=["innerHTML"],fx=D({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=ye(),{hasSidebar:a}=ta();return(l,i)=>r(t).footer&&r(n).footer!==!1?(g(),x("footer",{key:0,class:J(["VPFooter",{"has-sidebar":r(a)}])},[N("div",dx,[r(t).footer.message?(g(),x("p",{key:0,class:"message",innerHTML:r(t).footer.message},null,8,mx)):H("",!0),r(t).footer.copyright?(g(),x("p",{key:1,class:"copyright",innerHTML:r(t).footer.copyright},null,8,px)):H("",!0)])],2)):H("",!0)}}),hx=de(fx,[["__scopeId","data-v-e10f4d64"]]);function vx(){const{theme:e,frontmatter:t}=ye(),n=rh([]),a=Y(()=>n.value.length>0);return zr(()=>{n.value=Ud(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:a}}const gx={class:"menu-text"},bx={class:"header"},yx={class:"outline"},Sx=D({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=ye(),a=F(!1),l=F(0),i=F(),o=F();function s(m){var h;(h=i.value)!=null&&h.contains(m.target)||(a.value=!1)}Xe(a,m=>{if(m){document.addEventListener("click",s);return}document.removeEventListener("click",s)}),Yu("Escape",()=>{a.value=!1}),zr(()=>{a.value=!1});function u(){a.value=!a.value,l.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function d(m){m.target.classList.contains("outline-link")&&(o.value&&(o.value.style.transition="none"),Ot(()=>{a.value=!1}))}function p(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(m,h)=>(g(),x("div",{class:"VPLocalNavOutlineDropdown",style:he({"--vp-vh":l.value+"px"}),ref_key:"main",ref:i},[e.headers.length>0?(g(),x("button",{key:0,onClick:u,class:J({open:a.value})},[N("span",gx,$(r(gh)(r(n))),1),h[0]||(h[0]=N("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(g(),x("button",{key:1,onClick:p},$(r(n).returnToTopLabel||"Return to top"),1)),z(Uo,{name:"flyout"},{default:E(()=>[a.value?(g(),x("div",{key:0,ref_key:"items",ref:o,class:"items",onClick:d},[N("div",bx,[N("a",{class:"top-link",href:"#",onClick:p},$(r(n).returnToTopLabel||"Return to top"),1)]),N("div",yx,[z(bh,{headers:e.headers},null,8,["headers"])])],512)):H("",!0)]),_:1})],4))}}),xx=de(Sx,[["__scopeId","data-v-bbddb214"]]),_x={class:"container"},Cx=["aria-expanded"],kx={class:"menu-text"},Nx=D({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=ye(),{hasSidebar:a}=ta(),{headers:l}=vx(),{y:i}=ch(),o=F(0);Vt(()=>{o.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),zr(()=>{l.value=Ud(n.value.outline??t.value.outline)});const s=Y(()=>l.value.length===0),u=Y(()=>s.value&&!a.value),d=Y(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:s.value,fixed:u.value}));return(p,m)=>r(n).layout!=="home"&&(!u.value||r(i)>=o.value)?(g(),x("div",{key:0,class:J(d.value)},[N("div",_x,[r(a)?(g(),x("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:m[0]||(m[0]=h=>p.$emit("open-menu"))},[m[1]||(m[1]=N("span",{class:"vpi-align-left menu-icon"},null,-1)),N("span",kx,$(r(t).sidebarMenuLabel||"Menu"),1)],8,Cx)):H("",!0),z(xx,{headers:r(l),navHeight:o.value},null,8,["headers","navHeight"])])],2)):H("",!0)}}),wx=de(Nx,[["__scopeId","data-v-2f5e8597"]]);function Tx(){const e=F(!1);function t(){e.value=!0,window.addEventListener("resize",l)}function n(){e.value=!1,window.removeEventListener("resize",l)}function a(){e.value?n():t()}function l(){window.outerWidth>=768&&n()}const i=Ur();return Xe(()=>i.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:a}}const zx={},Ux={class:"VPSwitch",type:"button",role:"switch"},$x={class:"check"},Ex={key:0,class:"icon"};function Rx(e,t){return g(),x("button",Ux,[N("span",$x,[e.$slots.default?(g(),x("span",Ex,[M(e.$slots,"default",{},void 0,!0)])):H("",!0)])])}const Ax=de(zx,[["render",Rx],["__scopeId","data-v-263cf1e6"]]),Ox=D({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=ye(),a=vi("toggle-appearance",()=>{t.value=!t.value}),l=F("");return wd(()=>{l.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(i,o)=>(g(),ae(Ax,{title:l.value,class:"VPSwitchAppearance","aria-checked":r(t),onClick:r(a)},{default:E(()=>[...o[0]||(o[0]=[N("span",{class:"vpi-sun sun"},null,-1),N("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),$d=de(Ox,[["__scopeId","data-v-bd069591"]]),Bx={key:0,class:"VPNavBarAppearance"},Zx=D({__name:"VPNavBarAppearance",setup(e){const{site:t}=ye();return(n,a)=>r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(g(),x("div",Bx,[z($d)])):H("",!0)}}),jx=de(Zx,[["__scopeId","data-v-7aa28a41"]]),Ed=F();let yh=!1,ou=0;function Mx(e){const t=F(!1);if($r){!yh&&Dx(),ou++;const n=Xe(Ed,a=>{var l,i,o;a===e.el.value||(l=e.el.value)!=null&&l.contains(a)?(t.value=!0,(i=e.onFocus)==null||i.call(e)):(t.value=!1,(o=e.onBlur)==null||o.call(e))});we(()=>{n(),ou--,ou||Lx()})}return dh(t)}function Dx(){document.addEventListener("focusin",Sh),yh=!0,Ed.value=document.activeElement}function Lx(){document.removeEventListener("focusin",Sh)}function Sh(){Ed.value=document.activeElement}const Vx={class:"VPMenuLink"},Hx=["innerHTML"],Ix=D({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=ye();return(n,a)=>(g(),x("div",Vx,[z(Un,{class:J({active:r(tl)(r(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:E(()=>[N("span",{innerHTML:e.item.text},null,8,Hx)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Rr=de(Ix,[["__scopeId","data-v-740b01a7"]]),Fx={class:"VPMenuGroup"},qx={key:0,class:"title"},Gx=D({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(g(),x("div",Fx,[e.text?(g(),x("p",qx,$(e.text),1)):H("",!0),(g(!0),x(ne,null,pe(e.items,a=>(g(),x(ne,null,["link"in a?(g(),ae(Rr,{key:0,item:a},null,8,["item"])):H("",!0)],64))),256))]))}}),Yx=de(Gx,[["__scopeId","data-v-fbf0a0d3"]]),Px={class:"VPMenu"},Kx={key:0,class:"items"},Xx=D({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(g(),x("div",Px,[e.items?(g(),x("div",Kx,[(g(!0),x(ne,null,pe(e.items,a=>(g(),x(ne,{key:JSON.stringify(a)},["link"in a?(g(),ae(Rr,{key:0,item:a},null,8,["item"])):"component"in a?(g(),ae(sn(a.component),_a({key:1,ref_for:!0},a.props),null,16)):(g(),ae(Yx,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):H("",!0),M(t.$slots,"default",{},void 0,!0)]))}}),Qx=de(Xx,[["__scopeId","data-v-5079ecf8"]]),Jx=["aria-expanded","aria-label"],Wx={key:0,class:"text"},e1=["innerHTML"],t1={key:1,class:"vpi-more-horizontal icon"},n1={class:"menu"},a1=D({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=F(!1),n=F();Mx({el:n,onBlur:a});function a(){t.value=!1}return(l,i)=>(g(),x("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:i[1]||(i[1]=o=>t.value=!0),onMouseleave:i[2]||(i[2]=o=>t.value=!1)},[N("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:i[0]||(i[0]=o=>t.value=!t.value)},[e.button||e.icon?(g(),x("span",Wx,[e.icon?(g(),x("span",{key:0,class:J([e.icon,"option-icon"])},null,2)):H("",!0),e.button?(g(),x("span",{key:1,innerHTML:e.button},null,8,e1)):H("",!0),i[3]||(i[3]=N("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(g(),x("span",t1))],8,Jx),N("div",n1,[z(Qx,{items:e.items},{default:E(()=>[M(l.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Rd=de(a1,[["__scopeId","data-v-d6305e53"]]),l1=["href","aria-label","innerHTML"],i1=D({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=F();Vt(async()=>{var i;await Ot();const l=(i=n.value)==null?void 0:i.children[0];l instanceof HTMLElement&&l.className.startsWith("vpi-social-")&&(getComputedStyle(l).maskImage||getComputedStyle(l).webkitMaskImage)==="none"&&l.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const a=Y(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(l,i)=>(g(),x("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:a.value},null,8,l1))}}),o1=de(i1,[["__scopeId","data-v-012cce12"]]),s1={class:"VPSocialLinks"},r1=D({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(g(),x("div",s1,[(g(!0),x(ne,null,pe(e.links,({link:a,icon:l,ariaLabel:i})=>(g(),ae(o1,{key:a,icon:l,link:a,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),Ad=de(r1,[["__scopeId","data-v-8fd41632"]]),u1={key:0,class:"group translations"},c1={class:"trans-title"},d1={key:1,class:"group"},m1={class:"item appearance"},p1={class:"label"},f1={class:"appearance-action"},h1={key:2,class:"group"},v1={class:"item social-links"},g1=D({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=ye(),{localeLinks:a,currentLang:l}=Eo({correspondingLink:!0}),i=Y(()=>a.value.length&&l.value.label||t.value.appearance||n.value.socialLinks);return(o,s)=>i.value?(g(),ae(Rd,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:E(()=>[r(a).length&&r(l).label?(g(),x("div",u1,[N("p",c1,$(r(l).label),1),(g(!0),x(ne,null,pe(r(a),u=>(g(),ae(Rr,{key:u.link,item:u},null,8,["item"]))),128))])):H("",!0),r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(g(),x("div",d1,[N("div",m1,[N("p",p1,$(r(n).darkModeSwitchLabel||"Appearance"),1),N("div",f1,[z($d)])])])):H("",!0),r(n).socialLinks?(g(),x("div",h1,[N("div",v1,[z(Ad,{class:"social-links-list",links:r(n).socialLinks},null,8,["links"])])])):H("",!0)]),_:1})):H("",!0)}}),b1=de(g1,[["__scopeId","data-v-aa6e6ef3"]]),y1=["aria-expanded"],S1=D({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(g(),x("button",{type:"button",class:J(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=a=>t.$emit("click"))},[...n[1]||(n[1]=[N("span",{class:"container"},[N("span",{class:"top"}),N("span",{class:"middle"}),N("span",{class:"bottom"})],-1)])],10,y1))}}),x1=de(S1,[["__scopeId","data-v-a2b2b557"]]),_1=["innerHTML"],C1=D({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=ye();return(n,a)=>(g(),ae(Un,{class:J({VPNavBarMenuLink:!0,active:r(tl)(r(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:E(()=>[N("span",{innerHTML:e.item.text},null,8,_1)]),_:1},8,["class","href","target","rel","no-icon"]))}}),k1=de(C1,[["__scopeId","data-v-53298616"]]),N1=D({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=ye(),a=i=>"component"in i?!1:"link"in i?tl(n.value.relativePath,i.link,!!t.item.activeMatch):i.items.some(a),l=Y(()=>a(t.item));return(i,o)=>(g(),ae(Rd,{class:J({VPNavBarMenuGroup:!0,active:r(tl)(r(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||l.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),w1={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},T1=D({__name:"VPNavBarMenu",setup(e){const{theme:t}=ye();return(n,a)=>r(t).nav?(g(),x("nav",w1,[a[0]||(a[0]=N("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(g(!0),x(ne,null,pe(r(t).nav,l=>(g(),x(ne,{key:JSON.stringify(l)},["link"in l?(g(),ae(k1,{key:0,item:l},null,8,["item"])):"component"in l?(g(),ae(sn(l.component),_a({key:1,ref_for:!0},l.props),null,16)):(g(),ae(N1,{key:2,item:l},null,8,["item"]))],64))),128))])):H("",!0)}}),z1=de(T1,[["__scopeId","data-v-200a2831"]]);function U1(e){const{localeIndex:t,theme:n}=ye();function a(l){var k,S,C;const i=l.split("."),o=(k=n.value.search)==null?void 0:k.options,s=o&&typeof o=="object",u=s&&((C=(S=o.locales)==null?void 0:S[t.value])==null?void 0:C.translations)||null,d=s&&o.translations||null;let p=u,m=d,h=e;const v=i.pop();for(const b of i){let f=null;const y=h==null?void 0:h[b];y&&(f=h=y);const _=m==null?void 0:m[b];_&&(f=m=_);const T=p==null?void 0:p[b];T&&(f=p=T),y||(h=f),_||(m=f),T||(p=f)}return(p==null?void 0:p[v])??(m==null?void 0:m[v])??(h==null?void 0:h[v])??""}return a}const $1=["aria-label"],E1={class:"DocSearch-Button-Container"},R1={class:"DocSearch-Button-Placeholder"},Gm=D({__name:"VPNavBarSearchButton",setup(e){const n=U1({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,l)=>(g(),x("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":r(n)("button.buttonAriaLabel")},[N("span",E1,[l[0]||(l[0]=N("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),N("span",R1,$(r(n)("button.buttonText")),1)]),l[1]||(l[1]=N("span",{class:"DocSearch-Button-Keys"},[N("kbd",{class:"DocSearch-Button-Key"}),N("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,$1))}}),A1={class:"VPNavBarSearch"},O1={id:"local-search"},B1={key:1,id:"docsearch"},Z1=D({__name:"VPNavBarSearch",setup(e){const t=Wy(()=>eS(()=>import("./VPLocalSearchBox.DNBhh0ED.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:a}=ye(),l=F(!1),i=F(!1);Vt(()=>{});function o(){l.value||(l.value=!0,setTimeout(s,16))}function s(){const m=new Event("keydown");m.key="k",m.metaKey=!0,window.dispatchEvent(m),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||s()},16)}function u(m){const h=m.target,v=h.tagName;return h.isContentEditable||v==="INPUT"||v==="SELECT"||v==="TEXTAREA"}const d=F(!1);Yu("k",m=>{(m.ctrlKey||m.metaKey)&&(m.preventDefault(),d.value=!0)}),Yu("/",m=>{u(m)||(m.preventDefault(),d.value=!0)});const p="local";return(m,h)=>{var v;return g(),x("div",A1,[r(p)==="local"?(g(),x(ne,{key:0},[d.value?(g(),ae(r(t),{key:0,onClose:h[0]||(h[0]=k=>d.value=!1)})):H("",!0),N("div",O1,[z(Gm,{onClick:h[1]||(h[1]=k=>d.value=!0)})])],64)):r(p)==="algolia"?(g(),x(ne,{key:1},[l.value?(g(),ae(r(n),{key:0,algolia:((v=r(a).search)==null?void 0:v.options)??r(a).algolia,onVnodeBeforeMount:h[2]||(h[2]=k=>i.value=!0)},null,8,["algolia"])):H("",!0),i.value?H("",!0):(g(),x("div",B1,[z(Gm,{onClick:o})]))],64)):H("",!0)])}}}),j1=D({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=ye();return(n,a)=>r(t).socialLinks?(g(),ae(Ad,{key:0,class:"VPNavBarSocialLinks",links:r(t).socialLinks},null,8,["links"])):H("",!0)}}),M1=de(j1,[["__scopeId","data-v-72f459c3"]]),D1=["href","rel","target"],L1=["innerHTML"],V1={key:2},H1=D({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=ye(),{hasSidebar:a}=ta(),{currentLang:l}=Eo(),i=Y(()=>{var u;return typeof n.value.logoLink=="string"?n.value.logoLink:(u=n.value.logoLink)==null?void 0:u.link}),o=Y(()=>{var u;return typeof n.value.logoLink=="string"||(u=n.value.logoLink)==null?void 0:u.rel}),s=Y(()=>{var u;return typeof n.value.logoLink=="string"||(u=n.value.logoLink)==null?void 0:u.target});return(u,d)=>(g(),x("div",{class:J(["VPNavBarTitle",{"has-sidebar":r(a)}])},[N("a",{class:"title",href:i.value??r(zd)(r(l).link),rel:o.value,target:s.value},[M(u.$slots,"nav-bar-title-before",{},void 0,!0),r(n).logo?(g(),ae(Fs,{key:0,class:"logo",image:r(n).logo},null,8,["image"])):H("",!0),r(n).siteTitle?(g(),x("span",{key:1,innerHTML:r(n).siteTitle},null,8,L1)):r(n).siteTitle===void 0?(g(),x("span",V1,$(r(t).title),1)):H("",!0),M(u.$slots,"nav-bar-title-after",{},void 0,!0)],8,D1)],2))}}),I1=de(H1,[["__scopeId","data-v-b0934674"]]),F1={class:"items"},q1={class:"title"},G1=D({__name:"VPNavBarTranslations",setup(e){const{theme:t}=ye(),{localeLinks:n,currentLang:a}=Eo({correspondingLink:!0});return(l,i)=>r(n).length&&r(a).label?(g(),ae(Rd,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:r(t).langMenuLabel||"Change language"},{default:E(()=>[N("div",F1,[N("p",q1,$(r(a).label),1),(g(!0),x(ne,null,pe(r(n),o=>(g(),ae(Rr,{key:o.link,item:o},null,8,["item"]))),128))])]),_:1},8,["label"])):H("",!0)}}),Y1=de(G1,[["__scopeId","data-v-715d9207"]]),P1={class:"wrapper"},K1={class:"container"},X1={class:"title"},Q1={class:"content"},J1={class:"content-body"},W1=D({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=ch(),{hasSidebar:a}=ta(),{frontmatter:l}=ye(),i=F({});return wd(()=>{i.value={"has-sidebar":a.value,home:l.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(o,s)=>(g(),x("div",{class:J(["VPNavBar",i.value])},[N("div",P1,[N("div",K1,[N("div",X1,[z(I1,null,{"nav-bar-title-before":E(()=>[M(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":E(()=>[M(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),N("div",Q1,[N("div",J1,[M(o.$slots,"nav-bar-content-before",{},void 0,!0),z(Z1,{class:"search"}),z(z1,{class:"menu"}),z(Y1,{class:"translations"}),z(jx,{class:"appearance"}),z(M1,{class:"social-links"}),z(b1,{class:"extra"}),M(o.$slots,"nav-bar-content-after",{},void 0,!0),z(x1,{class:"hamburger",active:e.isScreenOpen,onClick:s[0]||(s[0]=u=>o.$emit("toggle-screen"))},null,8,["active"])])])])]),s[1]||(s[1]=N("div",{class:"divider"},[N("div",{class:"divider-line"})],-1))],2))}}),e_=de(W1,[["__scopeId","data-v-4dd2485b"]]),t_={key:0,class:"VPNavScreenAppearance"},n_={class:"text"},a_=D({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=ye();return(a,l)=>r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(g(),x("div",t_,[N("p",n_,$(r(n).darkModeSwitchLabel||"Appearance"),1),z($d)])):H("",!0)}}),l_=de(a_,[["__scopeId","data-v-74df9a14"]]),i_=["innerHTML"],o_=D({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=vi("close-screen");return(n,a)=>(g(),ae(Un,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:r(t)},{default:E(()=>[N("span",{innerHTML:e.item.text},null,8,i_)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),s_=de(o_,[["__scopeId","data-v-cdb49edc"]]),r_=["innerHTML"],u_=D({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=vi("close-screen");return(n,a)=>(g(),ae(Un,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:r(t)},{default:E(()=>[N("span",{innerHTML:e.item.text},null,8,r_)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),xh=de(u_,[["__scopeId","data-v-b1603663"]]),c_={class:"VPNavScreenMenuGroupSection"},d_={key:0,class:"title"},m_=D({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(g(),x("div",c_,[e.text?(g(),x("p",d_,$(e.text),1)):H("",!0),(g(!0),x(ne,null,pe(e.items,a=>(g(),ae(xh,{key:a.text,item:a},null,8,["item"]))),128))]))}}),p_=de(m_,[["__scopeId","data-v-c381fc92"]]),f_=["aria-controls","aria-expanded"],h_=["innerHTML"],v_=["id"],g_={key:0,class:"item"},b_={key:1,class:"item"},y_={key:2,class:"group"},S_=D({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=F(!1),a=Y(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function l(){n.value=!n.value}return(i,o)=>(g(),x("div",{class:J(["VPNavScreenMenuGroup",{open:n.value}])},[N("button",{class:"button","aria-controls":a.value,"aria-expanded":n.value,onClick:l},[N("span",{class:"button-text",innerHTML:e.text},null,8,h_),o[0]||(o[0]=N("span",{class:"vpi-plus button-icon"},null,-1))],8,f_),N("div",{id:a.value,class:"items"},[(g(!0),x(ne,null,pe(e.items,s=>(g(),x(ne,{key:JSON.stringify(s)},["link"in s?(g(),x("div",g_,[z(xh,{item:s},null,8,["item"])])):"component"in s?(g(),x("div",b_,[(g(),ae(sn(s.component),_a({ref_for:!0},s.props,{"screen-menu":""}),null,16))])):(g(),x("div",y_,[z(p_,{text:s.text,items:s.items},null,8,["text","items"])]))],64))),128))],8,v_)],2))}}),x_=de(S_,[["__scopeId","data-v-bf4d52fa"]]),__={key:0,class:"VPNavScreenMenu"},C_=D({__name:"VPNavScreenMenu",setup(e){const{theme:t}=ye();return(n,a)=>r(t).nav?(g(),x("nav",__,[(g(!0),x(ne,null,pe(r(t).nav,l=>(g(),x(ne,{key:JSON.stringify(l)},["link"in l?(g(),ae(s_,{key:0,item:l},null,8,["item"])):"component"in l?(g(),ae(sn(l.component),_a({key:1,ref_for:!0},l.props,{"screen-menu":""}),null,16)):(g(),ae(x_,{key:2,text:l.text||"",items:l.items},null,8,["text","items"]))],64))),128))])):H("",!0)}}),k_=D({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=ye();return(n,a)=>r(t).socialLinks?(g(),ae(Ad,{key:0,class:"VPNavScreenSocialLinks",links:r(t).socialLinks},null,8,["links"])):H("",!0)}}),N_={class:"list"},w_=D({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=Eo({correspondingLink:!0}),a=F(!1);function l(){a.value=!a.value}return(i,o)=>r(t).length&&r(n).label?(g(),x("div",{key:0,class:J(["VPNavScreenTranslations",{open:a.value}])},[N("button",{class:"title",onClick:l},[o[0]||(o[0]=N("span",{class:"vpi-languages icon lang"},null,-1)),G(" "+$(r(n).label)+" ",1),o[1]||(o[1]=N("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),N("ul",N_,[(g(!0),x(ne,null,pe(r(t),s=>(g(),x("li",{key:s.link,class:"item"},[z(Un,{class:"link",href:s.link},{default:E(()=>[G($(s.text),1)]),_:2},1032,["href"])]))),128))])],2)):H("",!0)}}),T_=de(w_,[["__scopeId","data-v-26e9d429"]]),z_={class:"container"},U_=D({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=F(null),n=mh($r?document.body:null);return(a,l)=>(g(),ae(Uo,{name:"fade",onEnter:l[0]||(l[0]=i=>n.value=!0),onAfterLeave:l[1]||(l[1]=i=>n.value=!1)},{default:E(()=>[e.open?(g(),x("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[N("div",z_,[M(a.$slots,"nav-screen-content-before",{},void 0,!0),z(C_,{class:"menu"}),z(T_,{class:"translations"}),z(l_,{class:"appearance"}),z(k_,{class:"social-links"}),M(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):H("",!0)]),_:3}))}}),$_=de(U_,[["__scopeId","data-v-134880d5"]]),E_={key:0,class:"VPNav"},R_=D({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:a}=Tx(),{frontmatter:l}=ye(),i=Y(()=>l.value.navbar!==!1);return Er("close-screen",n),Ne(()=>{$r&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(o,s)=>i.value?(g(),x("header",E_,[z(e_,{"is-screen-open":r(t),onToggleScreen:r(a)},{"nav-bar-title-before":E(()=>[M(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":E(()=>[M(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":E(()=>[M(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":E(()=>[M(o.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),z($_,{open:r(t)},{"nav-screen-content-before":E(()=>[M(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":E(()=>[M(o.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):H("",!0)}}),A_=de(R_,[["__scopeId","data-v-0ca8dbb3"]]),O_=["role","tabindex"],B_={key:1,class:"items"},Z_=D({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:a,isLink:l,isActiveLink:i,hasActiveLink:o,hasChildren:s,toggle:u}=ES(Y(()=>t.item)),d=Y(()=>s.value?"section":"div"),p=Y(()=>l.value?"a":"div"),m=Y(()=>s.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),h=Y(()=>l.value?void 0:"button"),v=Y(()=>[[`level-${t.depth}`],{collapsible:a.value},{collapsed:n.value},{"is-link":l.value},{"is-active":i.value},{"has-active":o.value}]);function k(C){"key"in C&&C.key!=="Enter"||!t.item.link&&u()}function S(){t.item.link&&u()}return(C,b)=>{const f=Da("VPSidebarItem",!0);return g(),ae(sn(d.value),{class:J(["VPSidebarItem",v.value])},{default:E(()=>[e.item.text?(g(),x("div",_a({key:0,class:"item",role:h.value},tS(e.item.items?{click:k,keydown:k}:{},!0),{tabindex:e.item.items&&0}),[b[1]||(b[1]=N("div",{class:"indicator"},null,-1)),e.item.link?(g(),ae(Un,{key:0,tag:p.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:E(()=>[(g(),ae(sn(m.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(g(),ae(sn(m.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(g(),x("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:S,onKeydown:gs(S,["enter"]),tabindex:"0"},[...b[0]||(b[0]=[N("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):H("",!0)],16,O_)):H("",!0),e.item.items&&e.item.items.length?(g(),x("div",B_,[e.depth<5?(g(!0),x(ne,{key:0},pe(e.item.items,y=>(g(),ae(f,{key:y.text,item:y,depth:e.depth+1},null,8,["item","depth"]))),128)):H("",!0)])):H("",!0)]),_:1},8,["class"])}}}),j_=de(Z_,[["__scopeId","data-v-8cc228a4"]]),M_=D({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=F(!0);let n=null;return Vt(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),Td(()=>{n!=null&&(clearTimeout(n),n=null)}),(a,l)=>(g(!0),x(ne,null,pe(e.items,i=>(g(),x("div",{key:i.text,class:J(["group",{"no-transition":t.value}])},[z(j_,{item:i,depth:0},null,8,["item"])],2))),128))}}),D_=de(M_,[["__scopeId","data-v-21ed53d7"]]),L_={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},V_=D({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=ta(),a=e,l=F(null),i=mh($r?document.body:null);Xe([a,l],()=>{var s;a.open?(i.value=!0,(s=l.value)==null||s.focus()):i.value=!1},{immediate:!0,flush:"post"});const o=F(0);return Xe(t,()=>{o.value+=1},{deep:!0}),(s,u)=>r(n)?(g(),x("aside",{key:0,class:J(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:l,onClick:u[0]||(u[0]=jt(()=>{},["stop"]))},[u[2]||(u[2]=N("div",{class:"curtain"},null,-1)),N("nav",L_,[u[1]||(u[1]=N("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),M(s.$slots,"sidebar-nav-before",{},void 0,!0),(g(),ae(D_,{items:r(t),key:o.value},null,8,["items"])),M(s.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):H("",!0)}}),H_=de(V_,[["__scopeId","data-v-e1a02360"]]),I_=D({__name:"VPSkipLink",setup(e){const{theme:t}=ye(),n=Ur(),a=F();Xe(()=>n.path,()=>a.value.focus());function l({target:i}){const o=document.getElementById(decodeURIComponent(i.hash).slice(1));if(o){const s=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",s)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",s),o.focus(),window.scrollTo(0,0)}}return(i,o)=>(g(),x(ne,null,[N("span",{ref_key:"backToTop",ref:a,tabindex:"-1"},null,512),N("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:l},$(r(t).skipToContentLabel||"Skip to content"),1)],64))}}),F_=de(I_,[["__scopeId","data-v-eb1c66e5"]]),q_=D({__name:"Layout",setup(e){const{isOpen:t,open:n,close:a}=ta(),l=Ur();Xe(()=>l.path,a),$S(t,a);const{frontmatter:i}=ye(),o=ph(),s=Y(()=>!!o["home-hero-image"]);return Er("hero-image-slot-exists",s),(u,d)=>{const p=Da("Content");return r(i).layout!==!1?(g(),x("div",{key:0,class:J(["Layout",r(i).pageClass])},[M(u.$slots,"layout-top",{},void 0,!0),z(F_),z(gS,{class:"backdrop",show:r(t),onClick:r(a)},null,8,["show","onClick"]),z(A_,null,{"nav-bar-title-before":E(()=>[M(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":E(()=>[M(u.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":E(()=>[M(u.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":E(()=>[M(u.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":E(()=>[M(u.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":E(()=>[M(u.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),z(wx,{open:r(t),onOpenMenu:r(n)},null,8,["open","onOpenMenu"]),z(H_,{open:r(t)},{"sidebar-nav-before":E(()=>[M(u.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":E(()=>[M(u.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),z(cx,null,{"page-top":E(()=>[M(u.$slots,"page-top",{},void 0,!0)]),"page-bottom":E(()=>[M(u.$slots,"page-bottom",{},void 0,!0)]),"not-found":E(()=>[M(u.$slots,"not-found",{},void 0,!0)]),"home-hero-before":E(()=>[M(u.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":E(()=>[M(u.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":E(()=>[M(u.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":E(()=>[M(u.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":E(()=>[M(u.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":E(()=>[M(u.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":E(()=>[M(u.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":E(()=>[M(u.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":E(()=>[M(u.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":E(()=>[M(u.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":E(()=>[M(u.$slots,"doc-before",{},void 0,!0)]),"doc-after":E(()=>[M(u.$slots,"doc-after",{},void 0,!0)]),"doc-top":E(()=>[M(u.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":E(()=>[M(u.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":E(()=>[M(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":E(()=>[M(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":E(()=>[M(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":E(()=>[M(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":E(()=>[M(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":E(()=>[M(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),z(hx),M(u.$slots,"layout-bottom",{},void 0,!0)],2)):(g(),ae(p,{key:1}))}}}),G_=de(q_,[["__scopeId","data-v-143d77da"]]),_h={Layout:G_,enhanceApp:({app:e})=>{e.component("Badge",fS)}},Y_=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function P_(e){return!(e.hasAttribute("disabled")||e.getAttribute("tabindex")==="-1"||(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLButtonElement)&&e.disabled)}function Ch(e,t){if(e.key!=="Tab")return!1;const n=Array.from(t.querySelectorAll(Y_)).filter(P_),a=document.activeElement,l=a!==null&&a!==t&&t.contains(a);if(n.length===0)return e.preventDefault(),t.focus(),!0;const i=n[0],o=n[n.length-1];return e.shiftKey?!l||a===i?(e.preventDefault(),o.focus(),!0):!1:!l||a===o?(e.preventDefault(),i.focus(),!0):!1}const K_=["日","一","二","三","四","五","六"];function kh(e,t,n){const a=String(t).padStart(2,"0"),l=String(n).padStart(2,"0");return`${e}-${a}-${l}`}function Yi(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const[t,n,a]=e.split("-").map(Number),l=new Date(t,n-1,a);return l.getFullYear()===t&&l.getMonth()===n-1&&l.getDate()===a}function su(e){if(!Yi(e))return null;const[t,n,a]=e.split("-").map(Number);return{year:t,month:n,day:a}}function X_(){const e=new Date;return kh(e.getFullYear(),e.getMonth()+1,e.getDate())}function Nh(e,t){const n=new Date(e,t-1,1).getDay(),a=X_(),l=[];for(let i=0;i<42;i+=1){const o=new Date(e,t-1,1-n+i),s=kh(o.getFullYear(),o.getMonth()+1,o.getDate());l.push({date:s,day:o.getDate(),inMonth:o.getMonth()===t-1,isToday:s===a})}return l}function Wl(e,t){return e===t?0:e<t?-1:1}function ru(e,t){if(e===void 0)return null;if(t==="range"){if(!Array.isArray(e)||!Yi(e[0])||!Yi(e[1]))return null;const[n,a]=e;return Wl(n,a)<=0?[n,a]:[a,n]}return Yi(e)?e:null}function Q_(e,t){return e===t?!0:e===null||t===null?!1:Array.isArray(e)||Array.isArray(t)?!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e[0]===t[0]&&e[1]===t[1]:e===t}function wh(e={}){const t=e.type==="range"?"range":"date",n=e.value!==void 0,a=ru(e.value??e.defaultValue,t),l=a&&typeof a=="string"?su(a):a&&Array.isArray(a)?su(a[0]):null,i=new Date,o={value:a,open:!1,viewYear:(l==null?void 0:l.year)??i.getFullYear(),viewMonth:(l==null?void 0:l.month)??i.getMonth()+1,rangeStage:null,rangeStart:null,disabled:e.disabled??!1};let s=e.onChange,u=e.onClear;const d=new Set,p=()=>{const h={...o};d.forEach(v=>v(h))},m=()=>{const h=o.value,v=h&&typeof h=="string"?h:h&&Array.isArray(h)?h[0]:null,k=v?su(v):null,S=new Date;o.viewYear=(k==null?void 0:k.year)??S.getFullYear(),o.viewMonth=(k==null?void 0:k.month)??S.getMonth()+1};return{subscribe(h){return d.add(h),()=>{d.delete(h)}},getState:()=>({...o}),updateOptions(h){let v=!1;const k=h.disabled??o.disabled;if(k!==o.disabled&&(o.disabled=k,v=!0,o.disabled&&o.open&&(o.open=!1)),h.value!==void 0){const S=ru(h.value,t);Q_(S,o.value)||(o.value=S,v=!0,o.rangeStart=null,o.rangeStage=null,o.open&&m())}h.onChange!==void 0&&(s=h.onChange),h.onClear!==void 0&&(u=h.onClear),v&&p()},toggleOpen(){o.disabled||(o.open||(m(),o.rangeStart=null,o.rangeStage=t==="range"?"start":null),o.open=!o.open,p())},close(){o.open&&(o.open=!1,o.rangeStart=null,o.rangeStage=null,p())},prevMonth(){o.viewMonth===1?(o.viewMonth=12,o.viewYear-=1):o.viewMonth-=1,p()},nextMonth(){o.viewMonth===12?(o.viewMonth=1,o.viewYear+=1):o.viewMonth+=1,p()},select(h){if(o.disabled||!Yi(h))return;if(t==="date"){n||(o.value=h),o.open=!1,p(),s==null||s(h);return}if(o.rangeStage==="start"||o.rangeStart===null){o.rangeStart=h,o.rangeStage="end",p();return}const v=o.rangeStart,k=Wl(v,h)<=0?[v,h]:[h,v];n||(o.value=k),o.open=!1,o.rangeStart=null,o.rangeStage=null,p(),s==null||s(k)},selectShortcut(h){if(o.disabled)return;const v=ru(h,t);v!==null&&(n||(o.value=v),o.open=!1,o.rangeStart=null,o.rangeStage=null,p(),s==null||s(v))},clear(){o.disabled||o.value!==null&&(n||(o.value=null,o.rangeStart=null,o.rangeStage=null),p(),s==null||s(t==="range"?["",""]:""),u==null||u())}}}const J_=["January","February","March","April","May","June","July","August","September","October","November","December"],W_={modal:{ok:"OK",cancel:"Cancel"},popconfirm:{confirm:"OK",cancel:"Cancel"},table:{empty:"No data",selectAll:"Select all",selectRow:e=>`Select row ${e+1}`},pagination:{nav:"Pagination",prev:"Previous page",next:"Next page"},datePicker:{panel:"Select date",prevMonth:"Previous month",nextMonth:"Next month",titleFormat:(e,t)=>`${J_[t-1]} ${e}`,weekdays:["Su","Mo","Tu","We","Th","Fr","Sa"],placeholder:"Select date"},skeleton:{loading:"Loading"},breadcrumb:{nav:"Breadcrumb"},select:{searchPlaceholder:"Search...",searchAriaLabel:"Search options",triggerPlaceholder:"Select"},timePicker:{panel:"Select time",placeholder:"Select time",confirm:"OK",cancel:"Cancel"},cascader:{panel:"Please select",placeholder:"Please select"}},Th={modal:{ok:"确认",cancel:"取消"},popconfirm:{confirm:"确定",cancel:"取消"},table:{empty:"暂无数据",selectAll:"全选",selectRow:e=>`选择第 ${e+1} 行`},pagination:{nav:"分页",prev:"上一页",next:"下一页"},datePicker:{panel:"选择日期",prevMonth:"上个月",nextMonth:"下个月",titleFormat:(e,t)=>`${e} 年 ${String(t).padStart(2,"0")} 月`,weekdays:K_,placeholder:"请选择日期"},skeleton:{loading:"加载中"},breadcrumb:{nav:"面包屑"},select:{searchPlaceholder:"搜索...",searchAriaLabel:"搜索选项",triggerPlaceholder:"请选择"},timePicker:{panel:"选择时间",placeholder:"请选择时间",confirm:"确认",cancel:"取消"},cascader:{panel:"请选择",placeholder:"请选择"}},eC="zh-CN",Qu=new Map([["zh-CN",Th],["en-US",W_]]);let qs=eC,co=Th;const Ju=new Set;function Aa(){return qs}function zh(){return co}function Uh(){Ju.forEach(e=>e(co))}function $h(e){return Ju.add(e),()=>{Ju.delete(e)}}function gi(e){const t=Qu.get(e);!t||e===qs||(qs=e,co=t,Uh())}function Eh(e,t){if(e.length===0||t===null||typeof t!="object")return;const n=Qu.get(e)??co,a={...n},l=a,i=n,o=t;let s=!1;Object.keys(t).forEach(u=>{const d=o[u];d===null||typeof d!="object"||(l[u]={...i[u],...d},s=!0)}),s&&(Qu.set(e,a),e===qs&&(co=a,Uh()))}function bi(e){if(typeof window>"u")return()=>{};let t=null;const n=()=>{t===null&&(t=window.requestAnimationFrame(()=>{t=null,e()}))};return window.addEventListener("scroll",n,!0),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n,!0),window.removeEventListener("resize",n),t!==null&&(window.cancelAnimationFrame(t),t=null)}}const Mi="data-theme",tC=new Set,Ro=()=>typeof document<"u";function mo(){return Ro()&&document.documentElement.getAttribute(Mi)==="dark"?"dark":"light"}function Ar(e){if(!Ro())return;const t=document.documentElement;if(e==="dark"?t.getAttribute(Mi)==="dark":!t.hasAttribute(Mi))return;e==="dark"?t.setAttribute(Mi,"dark"):t.removeAttribute(Mi);const n=e;tC.forEach(a=>a(n))}function Rh(){if(!Ro())return"light";const e=mo()==="dark"?"light":"dark";return Ar(e),e}const Wu=new Set;function Ah(e){if(!Ro())return;const t=document.documentElement;Object.entries(e).forEach(([n,a])=>{!n.startsWith("--")||typeof a!="string"||(t.style.setProperty(n,a),Wu.add(n))})}function Oh(){if(!Ro())return;const e=document.documentElement;Wu.forEach(t=>{e.style.removeProperty(t)}),Wu.clear()}function Bh(e={}){const t={visible:!0,closable:e.closable??!1};let n=e.onClose;const a=new Set,l=()=>{const i={...t};a.forEach(o=>o(i))};return{subscribe(i){return a.add(i),()=>{a.delete(i)}},getState:()=>({...t}),updateOptions(i){let o=!1;i.closable!==void 0&&i.closable!==t.closable&&(t.closable=i.closable,o=!0),i.onClose!==void 0&&(n=i.onClose),o&&l()},handleClose(){t.visible&&(t.visible=!1,l(),n==null||n())}}}function Zh(e={}){const t={failed:!1};let n=e.src,a=e.onError;const l=new Set,i=()=>{const o={...t};l.forEach(s=>s(o))};return{subscribe(o){return l.add(o),()=>{l.delete(o)}},getState:()=>({...t}),updateOptions(o){let s=!1;o.src!==void 0&&o.src!==n&&(n=o.src,t.failed&&(t.failed=!1,s=!0)),o.onError!==void 0&&(a=o.onError),s&&i()},handleError(){n!==void 0&&(t.failed||(t.failed=!0,i(),a==null||a()))}}}function jh(e={}){const t={visible:!1,text:null},n=new Set;function a(i){const o=i.dot??!1,s=i.showZero??!1,u=typeof i.max=="number"&&Number.isFinite(i.max)&&i.max>0?i.max:99,d=i.count;if(o){t.visible=!0,t.text=null;return}if(typeof d!="number"||!Number.isFinite(d)){t.visible=!1,t.text=null;return}if(d===0&&!s){t.visible=!1,t.text=null;return}t.visible=!0,t.text=d>u?`${u}+`:String(d)}a(e);const l=()=>{const i={...t};n.forEach(o=>o(i))};return{subscribe(i){return n.add(i),()=>{n.delete(i)}},getState:()=>({...t}),updateOptions(i){const o={count:i.count!==void 0?i.count:e.count,max:i.max!==void 0?i.max:e.max,dot:i.dot!==void 0?i.dot:e.dot,showZero:i.showZero!==void 0?i.showZero:e.showZero},s=t.visible,u=t.text;a(o),(t.visible!==s||t.text!==u)&&l()}}}const nC="/";function Ym(e){return e||nC}function Mh(e={}){const t={items:e.items??[],separator:Ym(e.separator)},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){const i=l.items!==void 0?l.items:t.items,o=l.separator!==void 0?Ym(l.separator):t.separator,s=i!==t.items||o!==t.separator;t.items=i,t.separator=o,s&&a()},selectItem(l){var i;const o=t.items[l];o&&(l===t.items.length-1||o.disabled||(i=e.onItemClick)==null||i.call(e,o,l))}}}function Dh(e={}){const t={disabled:e.disabled??!1,loading:e.loading??!1};let n=e.onClick;const a=new Set,l=()=>{const i={...t};a.forEach(o=>o(i))};return{subscribe(i){return a.add(i),()=>{a.delete(i)}},getState:()=>({...t}),updateOptions(i){let o=!1;i.disabled!==void 0&&i.disabled!==t.disabled&&(t.disabled=i.disabled,o=!0),i.loading!==void 0&&i.loading!==t.loading&&(t.loading=i.loading,o=!0),i.onClick!==void 0&&(n=i.onClick),o&&l()},handleClick(i){t.disabled||t.loading||n==null||n(i)}}}function ec(e){return!e.children||e.children.length===0}function Od(e,t){const n=[e];let a=e;for(const l of t){const i=a.find(o=>o.value===l);if(!i||!i.children||i.children.length===0)break;a=i.children,n.push(a)}return n}function ei(e,t){const n=[],a=[];let l=e;for(const i of t){const o=l.find(s=>s.value===i);if(!o)return null;n.push(o.value),a.push(o.label),l=o.children??[]}return{values:n,labels:a}}function Bd(e,t=[],n=!1){const a=[];for(const l of e){if(l.disabled&&!n)continue;const i=[...t,l.value];ec(l)?a.push(i):l.children&&a.push(...Bd(l.children,i,n))}return a}function Lh(e,t,n=!1){let a=e;for(const l of t){if(!a)return[];const i=a.find(o=>o.value===l);if(!i)return[];a=i.children}return a===void 0?[t]:Bd(a,t,n)}function Gs(e,t){return e?e.some(n=>n.length===t.length&&n.every((a,l)=>a===t[l])):!1}function Ys(e,t,n,a=!1){if(a)return{checked:Gs(t,n),indeterminate:!1};const l=Lh(e,n,!0);if(l.length===0)return{checked:!1,indeterminate:!1};const i=l.filter(o=>Gs(t,o)).length;return{checked:i===l.length,indeterminate:i>0&&i<l.length}}function aC(e,t){return e.length===t.length&&e.every((n,a)=>n===t[a])}function lC(e,t){return e===t?!0:e===null||t===null||e.length!==t.length?!1:e.every((n,a)=>n===t[a])}function iC(e,t){if(e===t)return!0;if(e===null||t===null||e.length!==t.length)return!1;const n=new Set(t.map(a=>a.join("/")));return e.every(a=>n.has(a.join("/")))}function uu(e){return!e||e.length===0?!1:Array.isArray(e[0])}function Vh(e={}){const t=e.value!==void 0,n=e.multiple??!1,a=e.value!==void 0?e.value:e.defaultValue?e.defaultValue:null,l={value:a&&Array.isArray(a)?a:null,open:!1,activePath:n?[]:a&&!uu(a)?[...a]:[],disabled:e.disabled??!1};let i=e.onChange,o=e.onClear,s=e.options??[],u=e.changeOnSelect??!1,d=e.checkStrictly??!1;const p=new Set,m=()=>{const S={...l,value:l.value?Array.isArray(l.value[0])?l.value.map(C=>[...C]):[...l.value]:null,activePath:[...l.activePath]};p.forEach(C=>C(S))},h=()=>n&&l.value&&uu(l.value)?l.value:[],v=S=>{const C=k(S);t||(l.value=C),m();const b=C.map(f=>{var y;return(y=ei(s,f))==null?void 0:y.labels}).filter(Boolean);i==null||i(C,b)},k=S=>{const C=new Set,b=[];for(const f of S){const y=f.join("/");C.has(y)||(C.add(y),b.push(f))}return b};return{subscribe(S){return p.add(S),()=>{p.delete(S)}},getState:()=>({...l,value:l.value?Array.isArray(l.value[0])?l.value.map(S=>[...S]):[...l.value]:null,activePath:[...l.activePath]}),updateOptions(S){let C=!1;if(S.disabled!==void 0&&S.disabled!==l.disabled&&(l.disabled=S.disabled,l.disabled&&l.open&&(l.open=!1),C=!0),S.value!==void 0)if(n){const b=S.value??[];iC(b,l.value)||(l.value=b.length>0?b.map(f=>[...f]):[],C=!0)}else{const b=S.value;lC(b??null,l.value)||(l.value=b&&b.length>0?[...b]:null,l.activePath=l.value?[...l.value]:[],C=!0)}S.options!==void 0&&(s=S.options),S.changeOnSelect!==void 0&&(u=S.changeOnSelect),S.checkStrictly!==void 0&&(d=S.checkStrictly),S.onChange!==void 0&&(i=S.onChange),S.onClear!==void 0&&(o=S.onClear),C&&m()},toggleOpen(){l.disabled||(l.open||(l.activePath=n?[]:l.value&&!uu(l.value)?[...l.value]:[]),l.open=!l.open,m())},close(){l.open&&(l.open=!1,m())},select(S,C){var b;if(l.disabled)return;const f=(b=Od(s,l.activePath.slice(0,S))[S])==null?void 0:b.find(T=>T.value===C);if(!f||f.disabled)return;const y=[...l.activePath.slice(0,S),C];if(l.activePath=y,n){if(d||ec(f)){const T=h();Gs(T,y)?v(T.filter(w=>!aC(w,y))):v([...T,y])}m();return}const _=ec(f);if(u||_){const T=ei(s,y),w=(T==null?void 0:T.values)??y,R=(T==null?void 0:T.labels)??[];t||(l.value=[...w]),l.open=!1,m(),i==null||i(w,R);return}m()},clear(){l.disabled||(n?!l.value||l.value.length===0:l.value===null)||(t||(l.value=n?[]:null,l.activePath=[]),m(),n?i==null||i([],[]):i==null||i([],[]),o==null||o())},toggleCheck(S){if(!n||l.disabled)return;const C=h(),b=d?[S]:Lh(s,S),f=b.every(_=>Gs(C,_));let y;if(f){const _=new Set(b.map(T=>T.join("/")));y=C.filter(T=>!_.has(T.join("/")))}else y=k([...C,...b]);v(y)},checkAll(){if(!n||l.disabled)return;const S=Bd(s);v(S)},uncheckAll(){!n||l.disabled||v([])}}}function Hh(e={}){const t=e.value!==void 0,n={checked:e.value??e.defaultValue??!1,disabled:e.disabled??!1,indeterminate:e.indeterminate??!1};let a=e.onChange;const l=new Set,i=()=>{const o={...n};l.forEach(s=>s(o))};return{subscribe(o){return l.add(o),()=>{l.delete(o)}},getState:()=>({...n}),updateOptions(o){let s=!1;o.value!==void 0&&o.value!==n.checked&&(n.checked=o.value,s=!0),o.disabled!==void 0&&o.disabled!==n.disabled&&(n.disabled=o.disabled,s=!0),o.indeterminate!==void 0&&o.indeterminate!==n.indeterminate&&(n.indeterminate=o.indeterminate,s=!0),o.onChange!==void 0&&(a=o.onChange),s&&i()},toggle(){if(n.disabled)return;const o=n.indeterminate?!0:!n.checked;t||(n.checked=o,n.indeterminate&&(n.indeterminate=!1),i()),a==null||a(o)}}}function Pm(e){const t=(e==null?void 0:e.trim())??"";return t===""?null:t}function Ih(e={}){const t={description:Pm(e.description)},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){if(l.description===void 0)return;const i=Pm(l.description);i!==t.description&&(t.description=i,a())}}}function ml(e){return e==null||e===""?!0:Array.isArray(e)?e.length===0:typeof e=="object"?Object.keys(e).length===0:!1}function oC(e){return typeof e=="string"?new RegExp(e):e}const sC={required:"该字段为必填项",email:"请输入有效的邮箱地址",phone:"请输入有效的手机号码",number:"请输入有效的数字",url:"请输入有效的 URL",length:"长度不符合要求",regex:"格式不正确",custom:"校验未通过"};function rC(e){return!ml(e)}const uC=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;function cC(e){return ml(e)?!0:typeof e=="string"&&uC.test(e)}const dC=/^1[3-9]\d{9}$/;function mC(e){return ml(e)?!0:typeof e=="string"&&dC.test(e)}function pC(e,t,n,a){if(ml(e))return!0;const l=Number(e);return!(Number.isNaN(l)||a!==void 0&&l!==a||t!==void 0&&l<t||n!==void 0&&l>n)}function fC(e,t,n,a){if(ml(e))return!0;const l=Array.isArray(e)?e.length:String(e).length;return!(a!==void 0&&l!==a||t!==void 0&&l<t||n!==void 0&&l>n)}function hC(e,t){return ml(e)?!0:oC(t).test(String(e))}const vC=/^https?:\/\/[^\s]+$/;function gC(e){return ml(e)?!0:typeof e=="string"&&vC.test(e)}async function bC(e,t,n,a){if(e.trigger&&a&&a!=="submit"&&e.trigger!==a||e.when&&!e.when(n))return null;const l=()=>e.message??sC[e.type??"custom"];switch(e.type){case"required":return rC(t)?null:l();case"email":return cC(t)?null:l();case"phone":return mC(t)?null:l();case"number":return pC(t,e.min,e.max,e.exact)?null:l();case"length":return fC(t,e.min,e.max,e.exact)?null:l();case"regex":return e.pattern?hC(t,e.pattern)?null:l():null;case"url":return gC(t)?null:l();case"custom":default:{if(!e.validator)return null;const i=await e.validator(t,n);return i===!0?null:typeof i=="string"?i:l()}}}async function Km(e,t,n,a,l=!1){const i=[];for(const o of e){const s=await bC(o,t,n,a);if(s&&(i.push(s),l))break}return{valid:i.length===0,errors:i}}function Fh(e){return e?e.some(t=>t.type==="required"):!1}function qh(e={}){const t={...e.initialValues??{}},n={values:{...t},errors:{},validating:!1,submitting:!1,disabled:e.disabled??!1,readonly:e.readonly??!1};let a={...e.rules??{}},l=e.onSubmit,i=e.onSubmitFail,o=e.onValuesChange;const s=new Map,u=new Set,d=()=>{const m={values:{...n.values},errors:Object.fromEntries(Object.entries(n.errors).map(([h,v])=>[h,[...v]])),validating:n.validating,submitting:n.submitting,disabled:n.disabled,readonly:n.readonly};u.forEach(h=>h(m))},p=m=>{const h=s.get(m)??[],v=a[m]??[];return[...h,...v]};return{subscribe(m){return u.add(m),()=>{u.delete(m)}},getState:()=>({values:{...n.values},errors:Object.fromEntries(Object.entries(n.errors).map(([m,h])=>[m,[...h]])),validating:n.validating,submitting:n.submitting,disabled:n.disabled,readonly:n.readonly}),updateOptions(m){let h=!1;m.disabled!==void 0&&m.disabled!==n.disabled&&(n.disabled=m.disabled,h=!0),m.readonly!==void 0&&m.readonly!==n.readonly&&(n.readonly=m.readonly,h=!0),m.rules!==void 0&&(a={...m.rules}),m.onSubmit!==void 0&&(l=m.onSubmit),m.onSubmitFail!==void 0&&(i=m.onSubmitFail),m.onValuesChange!==void 0&&(o=m.onValuesChange),h&&d()},setFieldValue(m,h){n.values[m]!==h&&(n.values[m]=h,o==null||o({[m]:h},{...n.values}),d())},getFieldValue(m){return n.values[m]},getFieldsValue(){return{...n.values}},setFieldsValue(m){n.values={...n.values,...m},o==null||o({...m},{...n.values}),d()},async validateField(m,h){const v=p(m);if(v.length===0)return delete n.errors[m],d(),[];n.validating=!0,d();const k=n.values[m],S=await Km(v,k,{...n.values},h);return n.validating=!1,S.errors.length>0?n.errors[m]=S.errors:delete n.errors[m],d(),S.errors},async validate(m){const h=new Set([...Object.keys(a),...s.keys()]),v={};let k=!0;n.validating=!0,d();for(const S of h){const C=p(S);if(C.length===0)continue;const b=n.values[S],f=await Km(C,b,{...n.values},m);f.errors.length>0&&(v[S]=f.errors,k=!1)}return n.validating=!1,n.errors=v,d(),{valid:k,errors:v,values:{...n.values}}},resetFields(m){if(m&&m.length>0)for(const h of m)t[h]!==void 0?n.values[h]=t[h]:delete n.values[h],delete n.errors[h];else n.values={...t},n.errors={};d()},clearValidate(m){if(m&&m.length>0)for(const h of m)delete n.errors[h];else n.errors={};d()},async submit(){const m=await this.validate("submit");if(m.valid){n.submitting=!0,d();try{await(l==null?void 0:l(m.values))}finally{n.submitting=!1,d()}}else i==null||i(m.errors);return m},registerField(m,h){h&&h.length>0?s.set(m,h):s.set(m,[])},unregisterField(m){s.delete(m),delete n.errors[m],d()}}}function Gh(e={}){const t=e.value!==void 0,n={value:e.value??e.defaultValue??"",focused:!1,disabled:e.disabled??!1,readonly:e.readonly??!1};let a=e.onInput,l=e.onChange,i=e.onFocus,o=e.onBlur,s=e.onClear;const u=new Set,d=()=>{const m={...n};u.forEach(h=>h(m))},p=()=>!n.disabled&&!n.readonly;return{subscribe(m){return u.add(m),()=>{u.delete(m)}},getState:()=>({...n}),updateOptions(m){let h=!1;m.value!==void 0&&m.value!==n.value&&(n.value=m.value,h=!0),m.disabled!==void 0&&m.disabled!==n.disabled&&(n.disabled=m.disabled,h=!0),m.readonly!==void 0&&m.readonly!==n.readonly&&(n.readonly=m.readonly,h=!0),m.onInput!==void 0&&(a=m.onInput),m.onChange!==void 0&&(l=m.onChange),m.onFocus!==void 0&&(i=m.onFocus),m.onBlur!==void 0&&(o=m.onBlur),m.onClear!==void 0&&(s=m.onClear),h&&d()},handleInput(m){p()&&(t||(n.value=m,d()),a==null||a(m))},handleChange(m){p()&&(l==null||l(m))},handleFocus(m){n.focused=!0,d(),i==null||i(m)},handleBlur(m){n.focused=!1,d(),o==null||o(m)},handleClear(){p()&&(t||(n.value="",d()),a==null||a(""),s==null||s())}}}function Xm(e){return typeof e=="number"&&Number.isFinite(e)?e:-1/0}function Qm(e){return typeof e=="number"&&Number.isFinite(e)?e:1/0}function Jm(e){return typeof e!="number"||!Number.isFinite(e)||e<=0?1:e}function Wm(e){return typeof e!="number"||!Number.isInteger(e)||e<0||e>20?null:e}function yC(e){const t=String(e),n=t.indexOf(".");return n===-1?0:t.length-n-1}function Yh(e={}){const t={value:null,disabled:e.disabled??!1,min:Xm(e.min),max:Qm(e.max),step:Jm(e.step),precision:Wm(e.precision)};t.min>t.max&&([t.min,t.max]=[t.max,t.min]);const n=new Set,a=()=>{const s={...t};n.forEach(u=>u(s))};function l(s){if(s==null||typeof s!="number"||!Number.isFinite(s))return null;const u=t.precision!==null?Number(s.toFixed(t.precision)):s;return Math.min(t.max,Math.max(t.min,u))}function i(){return e.value!==void 0}function o(s){var u;t.value!==s&&(i()||(t.value=s,a()),(u=e.onChange)==null||u.call(e,s))}return t.value=l(i()?e.value:e.defaultValue),{subscribe(s){return n.add(s),()=>{n.delete(s)}},getState:()=>({...t}),updateOptions(s){s.min!==void 0&&(t.min=Xm(s.min)),s.max!==void 0&&(t.max=Qm(s.max)),t.min>t.max&&([t.min,t.max]=[t.max,t.min]),s.step!==void 0&&(t.step=Jm(s.step)),s.precision!==void 0&&(t.precision=Wm(s.precision)),s.disabled!==void 0&&(t.disabled=s.disabled),s.value!==void 0?t.value=l(s.value):(s.min!==void 0||s.max!==void 0||s.precision!==void 0)&&(t.value=l(t.value)),a()},stepValue(s){if(t.disabled)return;const u=l(t.value??e.defaultValue??0)??0,d=10**Math.max(yC(t.step),t.precision??0),p=(Math.round(u*d)+s*Math.round(t.step*d))/d;o(l(p))},commitText(s){if(t.disabled)return;const u=s.trim();let d;if(u==="")d=null;else{const p=Number(u);d=Number.isFinite(p)?p:null}o(l(d))}}}const Yo={type:"info",duration:3e3,closable:!1,maxCount:5};function Ph(e={}){const t={items:[]};let n=e.maxCount??Yo.maxCount,a=1;const l=new Map,i=new Map,o=new Set,s=()=>{const p={items:[...t.items]};o.forEach(m=>m(p))},u=p=>{const m=l.get(p);if(m!==void 0&&(clearTimeout(m),l.delete(p)),!t.items.some(v=>v.id===p))return;const h=i.get(p);i.delete(p),t.items=t.items.filter(v=>v.id!==p),h==null||h(),s()},d=p=>{t.items.length<=p||t.items.slice(0,t.items.length-p).forEach(m=>u(m.id))};return{subscribe(p){return o.add(p),()=>{o.delete(p)}},getState:()=>({items:[...t.items]}),updateOptions(p){let m=!1;if(p.maxCount!==void 0&&p.maxCount!==n&&(n=p.maxCount,m=!0),t.items.length>n){d(n);return}m&&s()},open(p){const m=p.duration??Yo.duration,h=k=>{if(m<=0)return;const S=setTimeout(()=>{l.delete(k),u(k)},m);l.set(k,S)};if(p.key!==void 0){const k=t.items.find(S=>S.key===p.key);if(k){const S=l.get(k.id);return S!==void 0&&(clearTimeout(S),l.delete(k.id)),t.items=t.items.map(C=>C.id===k.id?{...C,type:p.type??C.type,content:p.content,closable:p.closable??C.closable,icon:p.icon??C.icon}:C),p.onClose!==void 0&&i.set(k.id,p.onClose),s(),h(k.id),{close:()=>u(k.id)}}}const v=a;return a+=1,d(n-1),t.items=[...t.items,{id:v,type:p.type??Yo.type,content:p.content,closable:p.closable??Yo.closable,icon:p.icon,key:p.key}],p.onClose!==void 0&&i.set(v,p.onClose),s(),h(v),{close:()=>{u(v)}}},close(p){u(p)},closeAll(){if(l.forEach(m=>clearTimeout(m)),l.clear(),t.items.length===0)return;const p=[...i.values()];i.clear(),t.items=[],p.forEach(m=>m()),s()}}}function Kh(e={}){const t={visible:e.visible??e.defaultVisible??!1,closable:e.closable??!0};let n=e.maskClosable??!0,a=e.closeOnEsc??!0,l=e.onOpen,i=e.onClose,o=e.onOk,s=e.onCancel;const u=new Set,d=()=>{const m={...t};u.forEach(h=>h(m))},p=m=>{t.visible!==m&&(t.visible=m,d(),m?l==null||l():i==null||i())};return{subscribe(m){return u.add(m),()=>{u.delete(m)}},getState:()=>({...t}),updateOptions(m){let h=!1;m.visible!==void 0&&m.visible!==t.visible&&(t.visible=m.visible,h=!0),m.closable!==void 0&&m.closable!==t.closable&&(t.closable=m.closable,h=!0),m.maskClosable!==void 0&&(n=m.maskClosable),m.closeOnEsc!==void 0&&(a=m.closeOnEsc),m.onOpen!==void 0&&(l=m.onOpen),m.onClose!==void 0&&(i=m.onClose),m.onOk!==void 0&&(o=m.onOk),m.onCancel!==void 0&&(s=m.onCancel),h&&d()},open:()=>p(!0),close:()=>p(!1),toggle:()=>p(!t.visible),handleOk(){o==null||o(),p(!1)},handleCancel(){s==null||s(),p(!1)},handleMaskClick(){n&&p(!1)},handleEsc(){a&&p(!1)}}}const Di=(e,t)=>Math.min(Math.max(Math.floor(e),1),t);function Xh(e={}){const t=e.value!==void 0,n=(p,m)=>Math.max(1,Math.ceil(Math.max(p??0,0)/m)),a=p=>Math.max(1,Math.floor(p??10)),l=a(e.pageSize),i=n(e.total,l),o={page:Di(e.value??e.defaultValue??1,i),pageCount:i,disabled:e.disabled??!1};let s=e.onChange;const u=new Set,d=()=>{const p={...o};u.forEach(m=>m(p))};return{subscribe(p){return u.add(p),()=>{u.delete(p)}},getState:()=>({...o}),updateOptions(p){let m=!1;const h=a(p.pageSize??l),v=n(p.total??e.total,h);v!==o.pageCount&&(o.pageCount=v,m=!0);const k=p.disabled??o.disabled;if(k!==o.disabled&&(o.disabled=k,m=!0),p.value!==void 0){const C=Di(p.value,o.pageCount);C!==o.page&&(o.page=C,m=!0)}const S=Di(o.page,o.pageCount);S!==o.page&&(o.page=S,m=!0),p.onChange!==void 0&&(s=p.onChange),m&&d()},goTo(p){if(o.disabled)return;const m=Di(p,o.pageCount);m!==o.page&&(t||(o.page=m,d()),s==null||s(m))},prev(){o.page<=1||this.goTo(o.page-1)},next(){o.page>=o.pageCount||this.goTo(o.page+1)}}}function Qh(e,t){const n=Math.max(1,t),a=Di(e,n);return n<=7?Array.from({length:n},(l,i)=>i+1):a<=4?[1,2,3,4,5,"ellipsis-next",n]:a>=n-3?[1,"ellipsis-prev",n-4,n-3,n-2,n-1,n]:[1,"ellipsis-prev",a-1,a,a+1,"ellipsis-next",n]}const SC=["top","bottom","left","right"];function ep(e){return e!==void 0&&SC.includes(e)?e:"top"}function Jh(e={}){const t={open:!1,placement:ep(e.placement),disabled:e.disabled??!1},n=new Set,a=()=>{const i={...t};n.forEach(o=>o(i))};function l(){return t.open?(t.open=!1,a(),!0):!1}return{subscribe(i){return n.add(i),()=>{n.delete(i)}},getState:()=>({...t}),updateOptions(i){const o=i.placement!==void 0?ep(i.placement):t.placement,s=i.disabled!==void 0?i.disabled:t.disabled;let u=o!==t.placement||s!==t.disabled;t.placement=o,t.disabled=s,s&&t.open&&(t.open=!1,u=!0),u&&a()},toggle(){t.disabled||(t.open=!t.open,a())},confirm(){var i;l()&&((i=e.onConfirm)==null||i.call(e))},cancel(){var i;l()&&((i=e.onCancel)==null||i.call(e))},close(){l()}}}function tp(e){return typeof e!="number"||!Number.isFinite(e)?0:Math.min(100,Math.max(0,e))}function np(e){return typeof e!="number"||!Number.isFinite(e)||e<=0?6:e}function Wh(e={}){const t={percent:tp(e.percent),strokeWidth:np(e.strokeWidth),status:"normal"};t.status=a(t,e.status);const n=new Set;function a(i,o){return o==="success"||o==="error"?o:i.percent>=100?"success":"normal"}const l=()=>{const i={...t};n.forEach(o=>o(i))};return{subscribe(i){return n.add(i),()=>{n.delete(i)}},getState:()=>({...t}),updateOptions(i){const o=tp(i.percent!==void 0?i.percent:t.percent),s=np(i.strokeWidth!==void 0?i.strokeWidth:t.strokeWidth),u=a({percent:o},i.status!==void 0?i.status:void 0),d=o!==t.percent||s!==t.strokeWidth||u!==t.status;t.percent=o,t.strokeWidth=s,t.status=u,d&&l()}}}function ev(e={}){const t=e.value!==void 0,n={value:e.value??e.defaultValue??null,disabled:e.disabled??!1};let a=e.onChange;const l=new Set,i=()=>{const o={...n};l.forEach(s=>s(o))};return{subscribe(o){return l.add(o),()=>{l.delete(o)}},getState:()=>({...n}),updateOptions(o){let s=!1;o.value!==void 0&&o.value!==n.value&&(n.value=o.value,s=!0),o.disabled!==void 0&&o.disabled!==n.disabled&&(n.disabled=o.disabled,s=!0),o.onChange!==void 0&&(a=o.onChange),s&&i()},select(o){n.disabled||(!t&&n.value!==o&&(n.value=o,i()),a==null||a(o))}}}function tv(e={}){const t={disabled:e.disabled??!1},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){l.disabled!==void 0&&l.disabled!==t.disabled&&(t.disabled=l.disabled,a())}}}function Zd(e){return Array.isArray(e.options)}function Ps(e){const t=[];for(const n of e)if(Zd(n))for(const a of n.options)t.push({...a,disabled:a.disabled||n.disabled});else t.push(n);return t}function xC(e){return e.filter(Zd)}function ap(e,t){return t?Array.isArray(e)?[...e]:e==null?[]:[e]:Array.isArray(e)?e[0]??null:e??null}function _C(e,t){return Array.isArray(e)||Array.isArray(t)?!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,a)=>n===t[a]):e===t}function nv(e={}){const t=e.value!==void 0;let n=e.multiple??!1,a=e.searchable??!1,l=e.options??[];const i={value:ap(e.value??e.defaultValue,n),open:!1,activeIndex:-1,disabled:e.disabled??!1,searchQuery:"",filteredOptions:Ps(l),groupedOptions:xC(l)};let o=e.onChange,s=e.onClear,u=e.clearable??!1;const d=new Set,p=()=>{const S={...i,value:Array.isArray(i.value)?[...i.value]:i.value,filteredOptions:[...i.filteredOptions],groupedOptions:i.groupedOptions.map(C=>({...C,options:[...C.options]}))};d.forEach(C=>C(S))},m=()=>{const S=a?i.searchQuery.trim().toLowerCase():"",C=y=>S===""||y.toLowerCase().includes(S),b=[],f=[];for(const y of l)if(Zd(y)){const _=y.options.filter(R=>C(R.label));if(_.length===0)continue;const T=y.disabled??!1,w=_.map(R=>({...R,disabled:R.disabled||T}));f.push({label:y.label,options:w,disabled:T}),b.push(...w)}else C(y.label)&&b.push(y);return{flat:b,groups:f}},h=(S,C)=>{var b;const f=i.filteredOptions.length;if(f===0)return-1;const y=S===-1?C===1?0:f-1:S+C;for(let _=0;_<f;_+=1){const T=((y+C*_)%f+f)%f;if(!((b=i.filteredOptions[T])!=null&&b.disabled))return T}return-1},v=()=>Array.isArray(i.value)?i.value:[],k=S=>n?v().includes(S):i.value===S;return{subscribe(S){return d.add(S),()=>{d.delete(S)}},getState:()=>({...i,value:Array.isArray(i.value)?[...i.value]:i.value,filteredOptions:[...i.filteredOptions],groupedOptions:i.groupedOptions.map(S=>({...S,options:[...S.options]}))}),updateOptions(S){let C=!1;S.value!==void 0&&!_C(S.value,i.value)&&(i.value=ap(S.value,n),C=!0),S.disabled!==void 0&&S.disabled!==i.disabled&&(i.disabled=S.disabled,i.disabled&&(i.open=!1,i.activeIndex=-1),C=!0),S.options!==void 0&&(l=S.options),S.clearable!==void 0&&(u=S.clearable),S.multiple!==void 0&&(n=S.multiple),S.searchable!==void 0&&(a=S.searchable),S.onChange!==void 0&&(o=S.onChange),S.onClear!==void 0&&(s=S.onClear);const{flat:b,groups:f}=m();(b.length!==i.filteredOptions.length||f!==i.groupedOptions)&&(i.filteredOptions=b,i.groupedOptions=f,C=!0),C&&p()},toggleOpen(){var S;if(!i.disabled){if(i.open){if(i.open=!1,i.activeIndex=-1,i.searchQuery!==""){i.searchQuery="";const{flat:C,groups:b}=m();i.filteredOptions=C,i.groupedOptions=b}}else{i.open=!0;const{flat:C,groups:b}=m();i.filteredOptions=C,i.groupedOptions=b;const f=i.filteredOptions.findIndex(y=>k(y.value));i.activeIndex=f!==-1&&!((S=i.filteredOptions[f])!=null&&S.disabled)?f:h(-1,1)}p()}},close(){if(!(!i.open&&i.activeIndex===-1&&i.searchQuery==="")){if(i.open=!1,i.activeIndex=-1,i.searchQuery!==""){i.searchQuery="";const{flat:S,groups:C}=m();i.filteredOptions=S,i.groupedOptions=C}p()}},select(S){if(i.disabled)return;const C=Ps(l).find(b=>b.value===S);if(!(!C||C.disabled)){if(n){const b=v(),f=b.includes(S)?b.filter(y=>y!==S):[...b,S];t||(i.value=f,p()),o==null||o(f);return}if(i.open=!1,i.activeIndex=-1,i.searchQuery!==""){i.searchQuery="";const{flat:b,groups:f}=m();i.filteredOptions=b,i.groupedOptions=f}i.value!==S?(t||(i.value=S,p()),o==null||o(S)):p()}},clear(){if(!i.disabled){if(n){if(v().length===0)return;t||(i.value=[]),p(),o==null||o([]),s==null||s();return}!u||i.value===null||(t||(i.value=null),p(),o==null||o(""),s==null||s())}},moveHighlight(S){if(i.disabled||!i.open||i.filteredOptions.length===0)return;const C=h(i.activeIndex,S);C!==-1&&C!==i.activeIndex&&(i.activeIndex=C,p())},confirmHighlight(){if(i.activeIndex===-1)return;const S=i.filteredOptions[i.activeIndex];S&&this.select(S.value)},setSearch(S){if(!a||i.searchQuery===S)return;i.searchQuery=S;const{flat:C,groups:b}=m();i.filteredOptions=C,i.groupedOptions=b,i.activeIndex=i.filteredOptions.length>0?h(-1,1):-1,p()}}}function lp(e){return typeof e!="number"||!Number.isFinite(e)||e<=0?3:Math.floor(e)}function av(e={}){const t={loading:e.loading??!0,avatar:e.avatar??!1,rows:lp(e.rows)},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){const i=l.loading!==void 0?l.loading:t.loading,o=l.avatar!==void 0?l.avatar:t.avatar,s=l.rows!==void 0?lp(l.rows):t.rows,u=i!==t.loading||o!==t.avatar||s!==t.rows;t.loading=i,t.avatar=o,t.rows=s,u&&a()}}}const CC=["sm","md","lg"];function ip(e){return e!==void 0&&CC.includes(e)?e:"md"}function op(e){return e||null}function lv(e={}){const t={size:ip(e.size),spinning:e.spinning??!0,tip:op(e.tip)},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){const i=l.size!==void 0?ip(l.size):t.size,o=l.spinning!==void 0?l.spinning:t.spinning,s=l.tip!==void 0?op(l.tip):t.tip,u=i!==t.size||o!==t.spinning||s!==t.tip;t.size=i,t.spinning=o,t.tip=s,u&&a()}}}function iv(e={}){const t=e.value!==void 0,n={checked:e.value??e.defaultValue??!1,disabled:e.disabled??!1,loading:e.loading??!1};let a=!1,l=e.beforeChange,i=e.onChange;const o=new Set,s=()=>({...n,loading:n.loading||a}),u=()=>{o.forEach(p=>p(s()))},d=p=>{t||(n.checked=p),i==null||i(p),u()};return{subscribe(p){return o.add(p),()=>{o.delete(p)}},getState:s,updateOptions(p){let m=!1;p.value!==void 0&&p.value!==n.checked&&(n.checked=p.value,m=!0),p.disabled!==void 0&&p.disabled!==n.disabled&&(n.disabled=p.disabled,m=!0),p.loading!==void 0&&p.loading!==n.loading&&(n.loading=p.loading,m=!0),p.beforeChange!==void 0&&(l=p.beforeChange),p.onChange!==void 0&&(i=p.onChange),(m||a)&&u()},toggle(){if(n.disabled||n.loading||a)return;const p=!n.checked,m=l==null?void 0:l(p);if(m!==!1){if(m instanceof Promise)return a=!0,u(),m.then(h=>{a=!1,h!==!1?d(p):u()}).catch(()=>{a=!1,u()});d(p)}}}}function ov(e){return e==null?"":String(e)}function pa(e,t,n){if(n===void 0)return t;const a=e[n];return typeof a=="string"||typeof a=="number"?a:t}const kC=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e-t;const n=String(e??""),a=String(t??"");return n<a?-1:n>a?1:0};function sv(e={}){let t=e.dataSource??[],n=e.rowKey,a=e.rowSelection;const l={sortKey:null,sortOrder:null,sortedData:t,selectedRowKeys:[],allSelected:!1,indeterminate:!1};let i=e.onSortChange;const o=new Set,s=new Set,u=()=>{const k={...l};s.forEach(S=>S(k))},d=()=>{if(l.sortKey===null||l.sortOrder===null){l.sortedData=t;return}const k=l.sortKey,S=l.sortOrder==="asc"?1:-1;l.sortedData=[...t].sort((C,b)=>kC(C[k],b[k])*S)},p=()=>{if((a==null?void 0:a.getCheckboxDisabled)===void 0)return t.map((C,b)=>pa(C,b,n));const k=a.getCheckboxDisabled,S=[];return t.forEach((C,b)=>{k(C,b)||S.push(pa(C,b,n))}),S},m=k=>{const S=p(),C=S.filter(b=>k.includes(b)).length;l.allSelected=S.length>0&&C===S.length,l.indeterminate=C>0&&C<S.length},h=()=>{const k=a==null?void 0:a.selectedRowKeys,S=k!==void 0?k:[...o];l.selectedRowKeys=S,m(S)},v=k=>{if((a==null?void 0:a.onChange)===void 0)return;const S=new Set(k),C=t.filter((b,f)=>S.has(pa(b,f,n)));a.onChange(k,C)};return(a==null?void 0:a.selectedRowKeys)!==void 0&&(l.selectedRowKeys=a.selectedRowKeys,m(a.selectedRowKeys)),{subscribe(k){return s.add(k),()=>{s.delete(k)}},getState:()=>({...l,selectedRowKeys:[...l.selectedRowKeys]}),updateOptions(k){let S=!1;k.dataSource!==void 0&&k.dataSource!==t&&(t=k.dataSource,d(),a!==void 0&&h(),S=!0),k.rowKey!==void 0&&k.rowKey!==n&&(n=k.rowKey,a!==void 0&&h(),S=!0),k.rowSelection!==void 0&&k.rowSelection!==a&&(a=k.rowSelection,h(),S=!0),k.onSortChange!==void 0&&(i=k.onSortChange),S&&u()},toggleSort(k){let S;l.sortKey!==k?(l.sortKey=k,S="asc"):l.sortOrder==="asc"?S="desc":(l.sortOrder==="desc"&&(l.sortKey=null),S=null),l.sortOrder=S,d(),u(),i==null||i({key:k,order:S})},toggleRow(k){var S;if(a===void 0)return;const C=t.findIndex((_,T)=>pa(_,T,n)===k);if(C!==-1){const _=t[C];if(((S=a.getCheckboxDisabled)==null?void 0:S.call(a,_,C))===!0)return}const b=a.selectedRowKeys,f=b!==void 0?[...b]:[...o],y=f.indexOf(k);y===-1?f.push(k):f.splice(y,1),b===void 0&&(o.clear(),f.forEach(_=>o.add(_)),h(),u()),v(f)},toggleAll(){if(a===void 0)return;const k=a.selectedRowKeys,S=k!==void 0?k:[...o],C=p(),b=C.length>0&&C.every(f=>S.includes(f))?S.filter(f=>!C.includes(f)):[...new Set([...S,...C])];k===void 0&&(o.clear(),b.forEach(f=>o.add(f)),h(),u()),v(b)}}}function rv(e={}){const t=e.value!==void 0,n={value:e.value??e.defaultValue??null};let a=e.items??[],l=e.onChange;const i=new Set,o=()=>{const u={...n};i.forEach(d=>d(u))},s=(u,d)=>{var p;const m=a.length;if(m===0)return-1;const h=u===-1?d===1?0:m-1:u+d;for(let v=0;v<m;v+=1){const k=((h+d*v)%m+m)%m;if(!((p=a[k])!=null&&p.disabled))return k}return-1};return{subscribe(u){return i.add(u),()=>{i.delete(u)}},getState:()=>({...n}),updateOptions(u){let d=!1;u.value!==void 0&&u.value!==n.value&&(n.value=u.value,d=!0),u.items!==void 0&&(a=u.items),u.onChange!==void 0&&(l=u.onChange),d&&o()},activate(u){const d=a.find(p=>p.value===u);!d||d.disabled||n.value!==u&&(t||(n.value=u,o()),l==null||l(u))},moveActive(u){if(a.length===0)return;const d=a.findIndex(m=>m.value===n.value),p=s(d,u);p!==-1&&this.activate(a[p].value)}}}function uv(e={}){const t={visible:!0,closable:e.closable??!1};let n=e.onClose;const a=new Set,l=()=>{const i={...t};a.forEach(o=>o(i))};return{subscribe(i){return a.add(i),()=>{a.delete(i)}},getState:()=>({...t}),updateOptions(i){let o=!1;i.closable!==void 0&&i.closable!==t.closable&&(t.closable=i.closable,o=!0),i.onClose!==void 0&&(n=i.onClose),o&&l()},handleClose(){t.visible&&(t.visible=!1,l(),n==null||n())}}}function NC(e,t,n){const a=String(e).padStart(2,"0"),l=String(t).padStart(2,"0"),i=String(n).padStart(2,"0");return`${a}:${l}:${i}`}function ys(e){if(typeof e!="string"||!/^\d{2}:\d{2}:\d{2}$/.test(e))return!1;const[t,n,a]=e.split(":").map(Number);return t>=0&&t<=23&&n>=0&&n<=59&&a>=0&&a<=59}function cv(e){if(!ys(e))return null;const[t,n,a]=e.split(":").map(Number);return{hour:t,minute:n,second:a}}function Vl(e,t){const n=Math.max(1,Math.floor(t||1)),a=[];for(let l=0;l<e;l+=n)a.push(l);return a}function Hl(e,t,n){const a=Math.max(1,Math.floor(t||1)),l=Math.round(e/a)*a;return Math.min(n-1,Math.max(0,l))}function dv(e={}){const t=e.value!==void 0,n=ys(e.value??e.defaultValue)?e.value??e.defaultValue:null,a={value:n,draft:n,open:!1,disabled:e.disabled??!1};let l=e.onChange,i=e.onClear;const o=new Set,s=()=>{const u={...a};o.forEach(d=>d(u))};return{subscribe(u){return o.add(u),()=>{o.delete(u)}},getState:()=>({...a}),updateOptions(u){let d=!1;const p=u.disabled??a.disabled;if(p!==a.disabled&&(a.disabled=p,d=!0,a.disabled&&a.open&&(a.open=!1)),u.value!==void 0){const m=ys(u.value)?u.value:null;m!==a.value&&(a.value=m,a.draft=m,d=!0)}u.onChange!==void 0&&(l=u.onChange),u.onClear!==void 0&&(i=u.onClear),d&&s()},toggleOpen(){a.disabled||(a.open=!a.open,a.draft=a.value,s())},close(){a.open&&(a.open=!1,a.draft=a.value,s())},selectDraft(u,d,p){a.disabled||u<0||u>23||d<0||d>59||p<0||p>59||(a.draft=NC(u,d,p),s())},confirm(){if(a.disabled||!a.open)return;const u=ys(a.draft)?a.draft:null;if(a.open=!1,u===null||u===a.value){a.draft=a.value,s();return}t||(a.value=u),a.draft=u,s(),l==null||l(u)},clear(){a.disabled||a.value!==null&&(t||(a.value=null),a.draft=null,s(),l==null||l(""),i==null||i())}}}function mv(e={}){const t={open:!1,disabled:e.disabled??!1},n=new Set,a=()=>{const l={...t};n.forEach(i=>i(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){let i=!1;l.disabled!==void 0&&l.disabled!==t.disabled&&(t.disabled=l.disabled,i=!0,t.disabled&&t.open&&(t.open=!1)),i&&a()},show(){t.disabled||t.open||(t.open=!0,a())},hide(){t.open&&(t.open=!1,a())}}}let sp=0;function rp(){return sp+=1,`upload-${Date.now()}-${sp}`}function wC(e,t){return new Promise((n,a)=>{const l=new XMLHttpRequest,i=new FormData;if(i.append("file",e.raw,e.name),l.open("POST",t.action,!0),l.upload.onprogress=o=>{if(o.lengthComputable){const s=Math.round(o.loaded/o.total*100);t.onProgress(s)}},l.onload=()=>{if(l.status>=200&&l.status<300){let o=l.responseText;try{o=JSON.parse(l.responseText)}catch{}n({response:o,url:void 0})}else a(new Error(`Upload failed with status ${l.status}`))},l.onerror=()=>a(new Error("Network error during upload")),t.signal){if(t.signal.aborted){l.abort(),a(new DOMException("Aborted","AbortError"));return}t.signal.addEventListener("abort",()=>{l.abort(),a(new DOMException("Aborted","AbortError"))})}l.send(i)})}function TC(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1){const a=e[n],l=t[n];if(a.uid!==l.uid||a.name!==l.name||a.size!==l.size||a.status!==l.status||a.percent!==l.percent)return!1}return!0}function pv(e){const{action:t,maxCount:n,maxSize:a,autoUpload:l=!0,beforeUpload:i,requestUpload:o=wC}=e,s={fileList:e.value?[...e.value]:e.defaultValue?[...e.defaultValue]:[],disabled:e.disabled??!1};let u=e.onChange,d=e.onRemove;const p=new Set,m=new Map,h=new Map,v=()=>{const f={...s,fileList:[...s.fileList]};p.forEach(y=>y(f))},k=()=>{u==null||u(s.fileList.map(f=>({...f})))},S=(f,y)=>{s.fileList=s.fileList.map(_=>_.uid===f?{..._,...y}:_)},C=f=>{const y=s.fileList.find(T=>T.uid===f);s.fileList=s.fileList.filter(T=>T.uid!==f);const _=m.get(f);return _&&(_.abort(),m.delete(f)),h.delete(f),y},b=f=>{const y=new AbortController;m.set(f.uid,y),h.set(f.uid,{lastLoaded:0,lastTime:Date.now()}),o(f,{action:t,onProgress:_=>{const T=Date.now(),w=h.get(f.uid);let R,A;if(w&&f.size>0){const O=_/100*f.size,L=(T-w.lastTime)/1e3;L>0&&(R=(O-w.lastLoaded)/L,R>0&&(A=(f.size-O)/R)),h.set(f.uid,{lastLoaded:O,lastTime:T})}S(f.uid,{percent:_,status:"uploading",speed:R,remainingTime:A}),v(),k()},signal:y.signal}).then(_=>{S(f.uid,{status:"done",percent:100,speed:void 0,remainingTime:void 0,response:_.response,url:_.url}),m.delete(f.uid),h.delete(f.uid),v(),k()}).catch(_=>{_ instanceof DOMException&&_.name==="AbortError"?S(f.uid,{status:"cancelled",speed:void 0,remainingTime:void 0}):S(f.uid,{status:"error",percent:0,speed:void 0,remainingTime:void 0,response:_ instanceof Error?_.message:String(_)}),m.delete(f.uid),h.delete(f.uid),v(),k()})};return{subscribe(f){return p.add(f),()=>{p.delete(f)}},getState:()=>({...s,fileList:[...s.fileList]}),updateOptions(f){let y=!1;const _=f.disabled??s.disabled;_!==s.disabled&&(s.disabled=_,y=!0),f.value!==void 0&&(TC(f.value,s.fileList)||(s.fileList=f.value.map(T=>({...T})),y=!0)),f.onChange!==void 0&&(u=f.onChange),f.onRemove!==void 0&&(d=f.onRemove),y&&v()},async selectFiles(f){if(s.disabled)return;const y=Array.from(f);let _=y;if(n!==void 0){const w=n-s.fileList.length;if(w<=0)return;_=y.slice(0,w)}const T=[];for(const w of _){if(a!==void 0&&w.size>a){const R={uid:rp(),name:w.name,size:w.size,type:w.type,status:"error",percent:0,raw:w};T.push(R);continue}if(i)try{if(await i(w)===!1)continue}catch{continue}T.push({uid:rp(),name:w.name,size:w.size,type:w.type,status:l?"uploading":"pending",percent:0,raw:w})}T.length!==0&&(s.fileList=[...s.fileList,...T],v(),k(),T.forEach(w=>{w.status==="uploading"&&b(w)}))},remove(f){const y=C(f);y&&(v(),d==null||d(y),k())},clear(){s.fileList.length!==0&&(m.forEach(f=>f.abort()),m.clear(),h.clear(),s.fileList=[],v(),k())},submit(){s.disabled||(s.fileList.filter(f=>f.status==="pending").forEach(f=>{S(f.uid,{status:"uploading"}),b(f)}),v(),k())},cancel(f){const y=s.fileList.find(T=>T.uid===f);if(!y||y.status!=="uploading")return;const _=m.get(f);_&&_.abort()},move(f,y){const _=s.fileList.findIndex(R=>R.uid===f);if(_===-1)return;const T=_+y;if(T<0||T>=s.fileList.length)return;const w=[...s.fileList];[w[_],w[T]]=[w[T],w[_]],s.fileList=w,v(),k()}}}function Or(e={}){let t=Math.max(0,Math.floor(e.itemCount??0)),n=Math.max(1,e.itemHeight??32),a=Math.max(0,e.viewportHeight??0),l=Math.max(0,Math.floor(e.overscan??5)),i=0;const o={startIndex:0,endIndex:0,offsetY:0,fillerHeight:0,totalHeight:0,scrollTop:0},s=new Set,u=()=>{const d=t*n,p=Math.max(0,d-a),m=Math.min(Math.max(0,i),p),h=a>0?Math.ceil(a/n):0,v=Math.floor(m/n),k=Math.min(Math.max(0,v-l),Math.max(0,t-1)),S=t===0?-1:Math.min(t-1,v+h+l),C=k*n,b=Math.max(0,d-C-(S-k+1)*n);if(o.startIndex===k&&o.endIndex===S&&o.offsetY===C&&o.fillerHeight===b&&o.totalHeight===d&&o.scrollTop===m)return;o.startIndex=k,o.endIndex=S,o.offsetY=C,o.fillerHeight=b,o.totalHeight=d,o.scrollTop=m;const f={...o};s.forEach(y=>y(f))};return u(),{subscribe(d){return s.add(d),()=>{s.delete(d)}},getState:()=>({...o}),updateOptions(d){let p=!1;if(d.itemCount!==void 0){const m=Math.max(0,Math.floor(d.itemCount));m!==t&&(t=m,p=!0)}if(d.itemHeight!==void 0){const m=Math.max(1,d.itemHeight);m!==n&&(n=m,p=!0)}if(d.viewportHeight!==void 0){const m=Math.max(0,d.viewportHeight);m!==a&&(a=m,p=!0)}if(d.overscan!==void 0){const m=Math.max(0,Math.floor(d.overscan));m!==l&&(l=m,p=!0)}p&&u()},scrollTo(d){i=d,u()},scrollToIndex(d,p="auto"){if(t===0)return;const m=Math.min(Math.max(0,Math.floor(d)),t-1)*n,h=m+n;if(p==="auto"&&m>=o.startIndex*n&&h<=(o.endIndex+1)*n)return;const v=Math.max(0,t*n-a);let k;p==="end"?k=h-a:k=m,i=Math.min(Math.max(0,k),v),u()}}}function up(e,t,n){return n<t?t:Math.min(Math.max(e,t),n)}function yi(e,t,n,a){const l=a.gap??8,i=a.viewportPadding??8,o=a.placement,s=e.top-n.top,u=n.bottom-e.bottom,d=e.left-n.left,p=n.right-e.right,m=t.height+l,h=t.width+l;let v=o;o==="top"&&s<m&&u>s?v="bottom":o==="bottom"&&u<m&&s>u?v="top":o==="left"&&d<h&&p>d?v="right":o==="right"&&p<h&&d>p&&(v="left");let k=0;if(v==="top"||v==="bottom"){const S=e.left+(e.width-t.width)/2,C=n.left+i,b=n.right-i-t.width;k=up(S,C,Math.max(C,b))-S}else{const S=e.top+(e.height-t.height)/2,C=n.top+i,b=n.bottom-i-t.height;k=up(S,C,Math.max(C,b))-S}return{placement:v,shift:k}}function Si(){return typeof window>"u"?{top:0,right:0,bottom:0,left:0}:{top:0,left:0,right:window.innerWidth,bottom:window.innerHeight}}const le={close:'<path d="M6 6l12 12M18 6L6 18" />',clear:'<circle cx="12" cy="12" r="10" /><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" />',loading:'<circle cx="12" cy="12" r="9" stroke-width="2.5" stroke-dasharray="40 60" />',check:'<path d="M4 12l5 5L20 7" />',search:'<circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />',plus:'<path d="M12 5v14M5 12h14" />',minus:'<path d="M5 12h14" />',"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7" />',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7" />',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7" />',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7" />',calendar:'<rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" />',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />',inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />',info:'<circle cx="12" cy="12" r="9" /><path d="M12 8h.01" /><path d="M12 11v5" />',success:'<circle cx="12" cy="12" r="9" /><path d="M8.5 12.2l2.4 2.4 4.6-5.2" />',warning:'<path d="M10.3 4.1L2.8 17a2 2 0 001.7 3h15a2 2 0 001.7-3L13.7 4.1a2 2 0 00-3.4 0z" /><path d="M12 9v4" /><path d="M12 16.5h.01" />',error:'<circle cx="12" cy="12" r="9" /><path d="M15 9l-6 6M9 9l6 6" />',clock:'<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />'},zC=["disabled"],UC={key:0,class:"xui-button__loading-icon"},$C=["innerHTML"],EC={key:1,class:"xui-button__icon"},RC={class:"xui-button__content"},W=D({__name:"Button",props:{type:{default:"default"},size:{default:"md"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},className:{},style:{}},emits:["click"],setup(e,{expose:t,emit:n}){const a=n,l=Dh({disabled:e.disabled,loading:e.loading,onClick:m=>a("click",m)}),i=F(l.getState()),o=l.subscribe(m=>{i.value=m});we(()=>{o()}),Ne(()=>{l.updateOptions({disabled:e.disabled,loading:e.loading})});const s=m=>{l.handleClick(m)},u=ht("btn");return t({focus:()=>{var m;(m=u.value)==null||m.focus()},setLoading:m=>{l.updateOptions({loading:m})}}),(m,h)=>(g(),x("button",{ref:"btn",type:"button",class:J([e.className,"xui-button",`xui-button--${e.type}`,`xui-button--${e.size}`,{"is-disabled":i.value.disabled,"is-loading":i.value.loading,"is-block":e.block}]),style:he(e.style),disabled:i.value.disabled||i.value.loading,onClick:s},[i.value.loading?(g(),x("span",UC,[M(m.$slots,"loadingIcon",{},()=>[(g(),x("svg",{class:"xui-button__spinner",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-linecap":"round",innerHTML:r(le).loading},null,8,$C))])])):H("",!0),!i.value.loading&&m.$slots.icon?(g(),x("span",EC,[M(m.$slots,"icon")])):H("",!0),N("span",RC,[M(m.$slots,"default")])],14,zC))}}),AC={key:0,class:"xui-input__prefix"},OC=["id","type","value","placeholder","disabled","readonly","maxlength"],BC=["innerHTML"],ZC={key:2,class:"xui-input__suffix"},st=D({__name:"Input",props:Is({type:{default:"text"},placeholder:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxLength:{},clearable:{type:Boolean,default:!1},className:{},style:{}},{value:{default:""},valueModifiers:{}}),emits:Is(["input","change","focus","blur","clear"],["update:value"]),setup(e,{expose:t,emit:n}){const a=n,l=fh(e,"value"),i=ht("input"),o=un(),s=Gh({value:l.value,disabled:e.disabled,readonly:e.readonly,onInput:b=>{l.value=b,a("input",b)},onChange:b=>a("change",b),onFocus:b=>a("focus",b),onBlur:b=>a("blur",b),onClear:()=>{l.value="",a("clear")}}),u=F(s.getState()),d=s.subscribe(b=>{u.value=b});we(()=>{d()}),Ne(()=>{s.updateOptions({value:l.value,disabled:e.disabled,readonly:e.readonly})});const p=b=>{const f=b.target;s.handleInput(f.value)},m=b=>{const f=b.target;s.handleChange(f.value)},h=b=>{s.handleFocus(b)},v=b=>{s.handleBlur(b)},k=()=>{s.handleClear()};return t({focus:()=>{var b;(b=i.value)==null||b.focus()},blur:()=>{var b;(b=i.value)==null||b.blur()},clear:k}),(b,f)=>(g(),x("div",{class:J([e.className,"xui-input",{"is-disabled":u.value.disabled,"is-readonly":u.value.readonly,"is-focused":u.value.focused}]),style:he(e.style)},[b.$slots.prefix?(g(),x("span",AC,[M(b.$slots,"prefix")])):H("",!0),N("input",{id:r(o),ref:"input",type:e.type,value:u.value.value,placeholder:e.placeholder,disabled:u.value.disabled,readonly:u.value.readonly,maxlength:e.maxLength,class:"xui-input__inner",onInput:p,onChange:m,onFocus:h,onBlur:v},null,40,OC),e.clearable&&u.value.value&&!u.value.disabled&&!u.value.readonly?(g(),x("span",{key:1,class:"xui-input__clear",onClick:k},[M(b.$slots,"clearIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(le).clear},null,8,BC))])])):H("",!0),b.$slots.suffix?(g(),x("span",ZC,[M(b.$slots,"suffix")])):H("",!0)],6))}}),jC=["aria-checked","aria-disabled","disabled"],MC={class:"xui-switch__core"},DC={key:0,class:"xui-switch__text-wrap"},LC=["title"],VC=["title"],HC={class:"xui-switch__thumb"},IC=["innerHTML"],FC=["innerHTML"],qC=["innerHTML"],Bt=D({__name:"Switch",props:{value:{type:Boolean,default:void 0},defaultValue:{type:Boolean,default:void 0},size:{default:"md"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},checkedText:{},uncheckedText:{},checkedColor:{},uncheckedColor:{},beforeChange:{},className:{},style:{}},emits:["change","update:value"],setup(e,{expose:t,emit:n}){const a=e,{value:l,defaultValue:i,disabled:o,loading:s}=a,u=n,d=iv({value:l,defaultValue:i,disabled:o,loading:s,beforeChange:C=>{var b;return((b=a.beforeChange)==null?void 0:b.call(a,C))??!0},onChange:C=>{u("update:value",C),u("change",C)}}),p=F(d.getState()),m=d.subscribe(C=>{p.value=C});we(()=>{m()}),Ne(()=>{d.updateOptions({value:a.value,disabled:a.disabled,loading:a.loading})});const h=()=>{d.toggle()},v=ht("btn");return t({focus:()=>{var C;(C=v.value)==null||C.focus()},toggle:()=>{d.toggle()}}),(C,b)=>(g(),x("button",{ref:"btn",type:"button",role:"switch",class:J([e.className,"xui-switch",`xui-switch--${a.size}`,{"is-checked":p.value.checked,"is-disabled":p.value.disabled,"is-loading":p.value.loading,"xui-switch--has-text":!!(a.checkedText||a.uncheckedText)}]),style:he({...e.style,...a.checkedColor?{"--xui-switch-checked-color":a.checkedColor}:{},...a.uncheckedColor?{"--xui-switch-unchecked-color":a.uncheckedColor}:{}}),"aria-checked":p.value.checked,"aria-disabled":p.value.disabled||p.value.loading,disabled:p.value.disabled||p.value.loading,onClick:h},[N("span",MC,[a.checkedText||a.uncheckedText?(g(),x("span",DC,[a.checkedText?(g(),x("span",{key:0,class:"xui-switch__text xui-switch__text--checked",title:a.checkedText,"aria-hidden":"true"},$(a.checkedText),9,LC)):H("",!0),a.uncheckedText?(g(),x("span",{key:1,class:"xui-switch__text xui-switch__text--unchecked",title:a.uncheckedText,"aria-hidden":"true"},$(a.uncheckedText),9,VC)):H("",!0)])):H("",!0),N("span",HC,[p.value.loading?M(C.$slots,"loadingIcon",{},()=>[(g(),x("svg",{class:"xui-switch__spinner","aria-hidden":"true",viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round",innerHTML:r(le).loading},null,8,IC))],void 0,0):p.value.checked?M(C.$slots,"checkedIcon",{},()=>[(g(),x("svg",{class:"xui-switch__icon xui-switch__icon--checked","aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le).check},null,8,FC))],void 0,1):M(C.$slots,"uncheckedIcon",{},()=>[(g(),x("svg",{class:"xui-switch__icon xui-switch__icon--unchecked","aria-hidden":"true",viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round",innerHTML:r(le).close},null,8,qC))],void 0,2)])])],14,jC))}}),GC=["checked","disabled",".indeterminate","aria-disabled"],YC={class:"xui-checkbox__box","aria-hidden":"true"},PC=["innerHTML"],KC=["innerHTML"],XC={key:0,class:"xui-checkbox__label"},Ss=D({__name:"Checkbox",props:{value:{type:Boolean,default:void 0},defaultValue:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},className:{},style:{}},emits:["change","update:value"],setup(e,{expose:t,emit:n}){const a=e,{value:l,defaultValue:i,disabled:o,indeterminate:s}=a,u=n,d=Hh({value:l,defaultValue:i,disabled:o,indeterminate:s,onChange:C=>{u("update:value",C),u("change",C)}}),p=F(d.getState()),m=d.subscribe(C=>{p.value=C});we(()=>{m()}),Ne(()=>{d.updateOptions({value:a.value,disabled:a.disabled,indeterminate:a.indeterminate})});const h=()=>{d.toggle()},v=ht("input");return t({focus:()=>{var C;(C=v.value)==null||C.focus()},toggle:()=>{d.toggle()}}),(C,b)=>(g(),x("label",{class:J([e.className,"xui-checkbox",{"is-checked":p.value.checked,"is-disabled":p.value.disabled,"is-indeterminate":p.value.indeterminate}]),style:he(e.style)},[N("input",{ref:"input",class:"xui-checkbox__input",type:"checkbox",checked:p.value.checked,disabled:p.value.disabled,".indeterminate":p.value.indeterminate,"aria-disabled":p.value.disabled,onChange:h},null,40,GC),N("span",YC,[p.value.indeterminate?M(C.$slots,"indeterminateIcon",{},()=>[(g(),x("svg",{class:"xui-checkbox__icon","aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round",innerHTML:r(le).minus},null,8,PC))],void 0,0):p.value.checked?M(C.$slots,"checkIcon",{},()=>[(g(),x("svg",{class:"xui-checkbox__icon","aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round",innerHTML:r(le).check},null,8,KC))],void 0,1):H("",!0)]),C.$slots.default?(g(),x("span",XC,[M(C.$slots,"default")])):H("",!0)],6))}}),QC=["innerHTML"],_n=D({__name:"Tag",props:{type:{default:"default"},size:{default:"md"},closable:{type:Boolean,default:!1},className:{},style:{}},emits:["close"],setup(e,{emit:t}){const n=t,a=uv({closable:e.closable,onClose:()=>n("close")}),l=F(a.getState()),i=a.subscribe(s=>{l.value=s});we(()=>{i()}),Ne(()=>{a.updateOptions({closable:e.closable})});const o=()=>{a.handleClose()};return(s,u)=>l.value.visible?(g(),x("span",{key:0,class:J([e.className,"xui-tag",`xui-tag--${e.type}`,`xui-tag--${e.size}`]),style:he(e.style)},[M(s.$slots,"default"),l.value.closable?(g(),x("button",{key:0,type:"button",class:"xui-tag__close","aria-label":"close",onClick:o},[M(s.$slots,"closeIcon",{},()=>[(g(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(le).close},null,8,QC))])])):H("",!0)],6)):H("",!0)}}),JC={key:0,class:"xui-alert__icon","aria-hidden":"true"},WC=["innerHTML"],ek={class:"xui-alert__content"},tk={key:0,class:"xui-alert__title"},nk={key:1,class:"xui-alert__description"},ak=["innerHTML"],Nl=D({__name:"Alert",props:{type:{default:"info"},title:{},description:{},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},className:{},style:{}},emits:["close"],setup(e,{emit:t}){const n=t,a=Bh({closable:e.closable,onClose:()=>n("close")}),l=F(a.getState()),i=a.subscribe(s=>{l.value=s});we(()=>{i()}),Ne(()=>{a.updateOptions({closable:e.closable})});const o=()=>{a.handleClose()};return(s,u)=>l.value.visible?(g(),x("div",{key:0,class:J([e.className,"xui-alert",`xui-alert--${e.type}`]),style:he(e.style),role:"alert"},[e.showIcon?(g(),x("div",JC,[M(s.$slots,"icon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)[e.type]},null,8,WC))])])):H("",!0),N("div",ek,[e.title||s.$slots.title?(g(),x("div",tk,[M(s.$slots,"title",{},()=>[G($(e.title),1)])])):H("",!0),s.$slots.default||e.description?(g(),x("div",nk,[M(s.$slots,"default",{},()=>[G($(e.description),1)])])):H("",!0)]),l.value.closable?(g(),x("button",{key:1,type:"button",class:"xui-alert__close","aria-label":"close",onClick:o},[M(s.$slots,"closeIcon",{},()=>[(g(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(le).close},null,8,ak))])])):H("",!0)],6)):H("",!0)}}),fv=Symbol("xui-radio-group");let cp=0;function lk(){return cp+=1,`xui-radio-group-${cp}`}const ik=["name","value","checked","disabled","aria-disabled"],ok={key:0,class:"xui-radio__label"},xs=D({__name:"Radio",props:{value:{},disabled:{type:Boolean,default:!1},className:{},style:{}},setup(e){const t=e,n=tv({disabled:t.disabled}),a=F(n.getState()),l=n.subscribe(d=>{a.value=d});we(()=>{l()}),Ne(()=>{n.updateOptions({disabled:t.disabled})});const i=vi(fv,null),o=Y(()=>i?i.groupValue.value===t.value:!1),s=Y(()=>a.value.disabled||(i?i.groupDisabled.value:!1)),u=d=>{const p=d.target;if(s.value){p.checked=o.value;return}if(!i){p.checked=!1;return}i.select(t.value),p.checked=i.groupValue.value===t.value};return(d,p)=>{var m;return g(),x("label",{class:J([e.className,"xui-radio",{"is-checked":o.value,"is-disabled":s.value}]),style:he(e.style)},[N("input",{class:"xui-radio__input",type:"radio",name:(m=r(i))==null?void 0:m.name,value:t.value,checked:o.value,disabled:s.value,"aria-disabled":s.value,onChange:u},null,40,ik),p[0]||(p[0]=N("span",{class:"xui-radio__dot","aria-hidden":"true"},null,-1)),d.$slots.default?(g(),x("span",ok,[M(d.$slots,"default")])):H("",!0)],6)}}}),tc=D({__name:"RadioGroup",props:{value:{default:void 0},defaultValue:{default:void 0},disabled:{type:Boolean,default:!1},options:{default:void 0},className:{},style:{}},emits:["change","update:value"],setup(e,{emit:t}){const n=e,a=t,{value:l,defaultValue:i,disabled:o}=n,s=ev({value:l,defaultValue:i,disabled:o,onChange:p=>{a("update:value",p),a("change",p)}}),u=F(s.getState()),d=s.subscribe(p=>{u.value=p});return we(()=>{d()}),Ne(()=>{s.updateOptions({value:n.value,disabled:n.disabled})}),Er(fv,{name:lk(),groupValue:Y(()=>u.value.value),groupDisabled:Y(()=>u.value.disabled),select:p=>{s.select(p)}}),(p,m)=>(g(),x("div",{class:J(["xui-radio-group",e.className]),style:he(e.style),role:"radiogroup"},[n.options&&n.options.length>0?(g(!0),x(ne,{key:0},pe(n.options,h=>(g(),ae(xs,{key:h.value,value:h.value,disabled:h.disabled},{default:E(()=>[G($(h.label),1)]),_:2},1032,["value","disabled"]))),128)):M(p.$slots,"default",{},void 0,void 0,1)],6))}}),sk=["aria-valuenow"],rk={class:"xui-progress__svg",viewBox:"0 0 100 100","aria-hidden":"true"},uk=["r","stroke-width"],ck=["r","stroke-width","stroke-dasharray","stroke-dashoffset"],dk={key:0,class:"xui-progress__text xui-progress__text--circle"},mk={key:0,class:"xui-progress__text"},Pi=D({__name:"Progress",props:{percent:{default:0},type:{default:"line"},strokeWidth:{default:6},showText:{type:Boolean,default:!0},status:{default:"normal"},className:{},style:{}},setup(e){const t=e,n=Wh({percent:t.percent,strokeWidth:t.strokeWidth,status:t.status}),a=F(n.getState()),l=n.subscribe(s=>{a.value=s});we(()=>{l()}),Ne(()=>{n.updateOptions({percent:t.percent,strokeWidth:t.strokeWidth,status:t.status})});const i=Y(()=>`${Math.round(a.value.percent)}%`),o=Y(()=>{const s=(100-a.value.strokeWidth)/2,u=2*Math.PI*s;return{radius:s,circumference:u,offset:u*(1-a.value.percent/100)}});return(s,u)=>(g(),x("div",{class:J([e.className,"xui-progress",`xui-progress--${t.type}`,`is-${a.value.status}`]),style:he(e.style),role:"progressbar","aria-valuenow":Math.round(a.value.percent),"aria-valuemin":"0","aria-valuemax":"100"},[t.type==="circle"?(g(),x(ne,{key:0},[(g(),x("svg",rk,[N("circle",{class:"xui-progress__track",cx:50,cy:50,r:o.value.radius,fill:"none","stroke-width":a.value.strokeWidth},null,8,uk),N("circle",{class:"xui-progress__bar",cx:50,cy:50,r:o.value.radius,fill:"none","stroke-width":a.value.strokeWidth,"stroke-linecap":"round","stroke-dasharray":o.value.circumference,"stroke-dashoffset":o.value.offset,transform:"rotate(-90 50 50)"},null,8,ck)])),t.showText?(g(),x("span",dk,$(i.value),1)):H("",!0)],64)):(g(),x(ne,{key:1},[N("div",{class:"xui-progress__track",style:he({height:`${a.value.strokeWidth}px`})},[N("div",{class:"xui-progress__bar",style:he({width:`${a.value.percent}%`})},null,4)],4),t.showText?(g(),x("span",mk,$(i.value),1)):H("",!0)],64))],14,sk))}}),pk=["aria-hidden"],fk=["aria-hidden"],wl=D({__name:"Badge",props:{count:{default:void 0},max:{default:99},dot:{type:Boolean,default:!1},showZero:{type:Boolean,default:!1},className:{},style:{}},setup(e){const t=e,n=jh({count:t.count,max:t.max,dot:t.dot,showZero:t.showZero}),a=F(n.getState()),l=n.subscribe(i=>{a.value=i});return we(()=>{l()}),Ne(()=>{n.updateOptions({count:t.count,max:t.max,dot:t.dot,showZero:t.showZero})}),(i,o)=>i.$slots.default?(g(),x("span",{key:0,class:J(["xui-badge",e.className]),style:he(e.style)},[M(i.$slots,"default"),a.value.visible?(g(),x("sup",{key:0,class:J(["xui-badge__sup",{"is-dot":t.dot}]),"aria-hidden":t.dot||void 0},$(a.value.text),11,pk)):H("",!0)],6)):a.value.visible?(g(),x("sup",{key:1,class:J(["xui-badge__sup","xui-badge__sup--standalone",{"is-dot":t.dot}]),"aria-hidden":t.dot||void 0},$(a.value.text),11,fk)):H("",!0)}}),hk=["src","alt"],vk={key:1,class:"xui-avatar__inner"},gk=["innerHTML"],fa=D({__name:"Avatar",props:{size:{default:"md"},shape:{default:"circle"},src:{default:void 0},alt:{default:void 0},className:{},style:{}},emits:["error"],setup(e,{emit:t}){const n=e,a=t,l=Zh({src:n.src,onError:()=>{a("error")}}),i=F(l.getState()),o=l.subscribe(s=>{i.value=s});return we(()=>{o()}),Ne(()=>{l.updateOptions({src:n.src})}),(s,u)=>(g(),x("span",{class:J([e.className,"xui-avatar",`xui-avatar--${n.size}`,`xui-avatar--${n.shape}`]),style:he(e.style)},[n.src&&!i.value.failed?(g(),x("img",{key:0,class:"xui-avatar__img",src:n.src,alt:n.alt??"",onError:u[0]||(u[0]=d=>r(l).handleError())},null,40,hk)):s.$slots.default?(g(),x("span",vk,[M(s.$slots,"default")])):M(s.$slots,"icon",{},()=>[(g(),x("svg",{class:"xui-avatar__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le).user},null,8,gk))],void 0,2)],6))}}),bk={class:"xui-empty__image","aria-hidden":"true"},yk=["innerHTML"],Sk={key:0,class:"xui-empty__description"},xk={key:1,class:"xui-empty__footer"},nc=D({__name:"Empty",props:{description:{default:void 0},className:{},style:{}},setup(e){const t=e,n=Ih({description:t.description}),a=F(n.getState()),l=n.subscribe(i=>{a.value=i});return we(()=>{l()}),Ne(()=>{n.updateOptions({description:t.description})}),(i,o)=>(g(),x("div",{class:J(["xui-empty",e.className]),style:he(e.style)},[N("div",bk,[M(i.$slots,"image",{},()=>[(g(),x("svg",{class:"xui-empty__svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le).inbox},null,8,yk))])]),a.value.description?(g(),x("div",Sk,$(a.value.description),1)):H("",!0),i.$slots.default?(g(),x("div",xk,[M(i.$slots,"default")])):H("",!0)],6))}});function An(){const e=F(zh()),t=$h(n=>{e.value=n});return nS()?aS(t):t(),e}const _k=["id","aria-expanded","aria-controls","aria-activedescendant","aria-disabled","tabindex"],Ck={key:0,class:"xui-select__tags"},kk={class:"xui-select__tag-label"},Nk=["onClick"],wk=["innerHTML"],Tk={key:0,class:"xui-select__placeholder"},zk={key:1,class:"xui-select__value"},Uk={key:2,class:"xui-select__placeholder"},$k=["innerHTML"],Ek={key:4,class:"xui-select__arrow","aria-hidden":"true"},Rk=["innerHTML"],Ak=["id","aria-labelledby","aria-multiselectable"],Ok={key:0,role:"presentation",class:"xui-select__search-item"},Bk=["placeholder","value","aria-label"],Zk={class:"xui-select__group-title"},jk=["id","aria-selected","aria-disabled","onClick"],Mk=["id","aria-selected","aria-disabled","onClick"],Dk={key:2,class:"xui-select__empty",role:"presentation"},Lk=30,qn=D({__name:"Select",props:{value:{default:void 0},defaultValue:{default:void 0},options:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},maxHeight:{default:264},className:{default:void 0},style:{default:void 0}},emits:["change","clear","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=An(),o=ht("root"),s=ht("trigger"),u=ht("dropdown"),d=un(),p=un(),{value:m,defaultValue:h,options:v,disabled:k,clearable:S,multiple:C,searchable:b}=a,f=nv({value:m,defaultValue:h,options:v,disabled:k,clearable:S,multiple:C,searchable:b,onChange:ue=>{l("update:value",ue),l("change",ue)},onClear:()=>l("clear")}),y=F(f.getState()),_=f.subscribe(ue=>{y.value=ue}),T=Or({itemCount:0,itemHeight:Lk,viewportHeight:0}),w=F(T.getState()),R=T.subscribe(ue=>{w.value=ue}),A=ue=>{y.value.open&&o.value&&!o.value.contains(ue.target)&&f.close()};Vt(()=>{document.addEventListener("mousedown",A)}),we(()=>{_(),R(),Q==null||Q(),document.removeEventListener("mousedown",A)}),Ne(()=>{f.updateOptions({value:a.value,options:a.options,disabled:a.disabled,clearable:a.clearable,multiple:a.multiple,searchable:a.searchable})});const O=Y(()=>y.value.filteredOptions),L=Y(()=>y.value.groupedOptions),te=Y(()=>L.value.length>0),j=Y(()=>a.virtual&&!te.value),I=Y(()=>{const ue=O.value;return j.value?ue.slice(w.value.startIndex,w.value.endIndex+1):ue}),q=Y(()=>Ps(a.options??[])),me=Y(()=>q.value.find(ue=>ue.value===y.value.value)),V=Y(()=>a.multiple?(Array.isArray(y.value.value)?y.value.value:[]).map(Me=>{const xe=q.value.find(qe=>qe.value===Me);return{value:Me,label:(xe==null?void 0:xe.label)??Me}}):[]),oe=Y(()=>a.multiple?V.value.length>0:y.value.value!==null),X=ue=>a.multiple?Array.isArray(y.value.value)&&y.value.value.includes(ue):y.value.value===ue,Z=Y(()=>[a.className,{"is-disabled":y.value.disabled,"is-open":y.value.open,"is-multiple":a.multiple,"is-virtual":j.value,"is-drop-up":P.value}]),P=F(!1);let Q=null;function ce(){const ue=o.value,Me=u.value;if(!ue||!Me)return;const xe=Me.getBoundingClientRect();if(xe.width===0&&xe.height===0)return;const{placement:qe}=yi(ue.getBoundingClientRect(),xe,Si(),{placement:"bottom",gap:4,viewportPadding:4});P.value=qe==="top"}Xe(()=>y.value.open,ue=>{ue?(P.value=!1,Ot(ce),Q==null||Q(),Q=bi(ce)):(Q==null||Q(),Q=null,P.value=!1)});const Ie=Y(()=>a.style??void 0),Fe=Y(()=>{const ue={maxHeight:`${a.maxHeight}px`};return j.value&&(ue.height=`${a.maxHeight}px`),ue});Ne(()=>{j.value&&T.updateOptions({itemCount:O.value.length,viewportHeight:a.maxHeight})}),Xe(()=>y.value.searchQuery,async()=>{j.value&&(T.scrollTo(0),await Ot(),u.value&&(u.value.scrollTop=0))}),Ne(()=>{const{open:ue,activeIndex:Me}=y.value;!ue||Me===-1||Ot(()=>{var qe;const xe=document.getElementById(`${p}-option-${Me}`);(qe=xe==null?void 0:xe.scrollIntoView)==null||qe.call(xe,{block:"nearest"})})});const dt=ue=>{T.scrollTo(ue.target.scrollTop)},Tt=ue=>{f.setSearch(ue.target.value)};Xe(()=>y.value.open,async ue=>{var Me,xe;!ue||!a.searchable||(await Ot(),(xe=(Me=u.value)==null?void 0:Me.querySelector(".xui-select__search"))==null||xe.focus())});const ia=ue=>{switch(ue.key){case"Enter":case" ":ue.preventDefault(),y.value.open?f.confirmHighlight():f.toggleOpen();break;case"Escape":y.value.open&&(ue.preventDefault(),f.close());break;case"ArrowDown":ue.preventDefault(),y.value.open?f.moveHighlight(1):f.toggleOpen();break;case"ArrowUp":ue.preventDefault(),y.value.open?f.moveHighlight(-1):f.toggleOpen();break}},gn=ue=>{switch(ue.key){case"Enter":ue.preventDefault(),f.confirmHighlight();break;case"ArrowDown":ue.preventDefault(),f.moveHighlight(1);break;case"ArrowUp":ue.preventDefault(),f.moveHighlight(-1);break;case"Escape":ue.preventDefault(),f.close();break}};return t({focus:()=>{var ue;(ue=s.value)==null||ue.focus()},toggleOpen:()=>{f.toggleOpen()},close:()=>{f.close()}}),(ue,Me)=>(g(),x("div",{ref:"root",class:J(["xui-select",Z.value]),style:he(Ie.value)},[N("div",{ref:"trigger",id:r(d),class:"xui-select__trigger",role:"combobox","aria-expanded":y.value.open,"aria-haspopup":"listbox","aria-controls":y.value.open?r(p):void 0,"aria-activedescendant":y.value.open&&y.value.activeIndex!==-1?`${r(p)}-option-${y.value.activeIndex}`:void 0,"aria-disabled":y.value.disabled||void 0,tabindex:y.value.disabled?-1:0,onClick:Me[1]||(Me[1]=xe=>r(f).toggleOpen()),onKeydown:ia},[a.multiple?(g(),x("span",Ck,[(g(!0),x(ne,null,pe(V.value,xe=>(g(),x("span",{key:xe.value,class:"xui-select__tag"},[N("span",kk,$(xe.label),1),N("span",{class:"xui-select__tag-close",role:"button","aria-label":"remove",onClick:jt(qe=>r(f).select(xe.value),["stop"])},[M(ue.$slots,"clearIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).clear},null,8,wk))])],8,Nk)]))),128)),V.value.length===0?(g(),x("span",Tk,$(a.placeholder??r(i).select.triggerPlaceholder),1)):H("",!0)])):me.value?(g(),x("span",zk,$(me.value.label),1)):(g(),x("span",Uk,$(a.placeholder??r(i).select.triggerPlaceholder),1)),a.clearable&&oe.value&&!y.value.disabled?(g(),x("span",{key:3,class:"xui-select__clear",role:"button","aria-label":"clear",onClick:Me[0]||(Me[0]=jt(xe=>r(f).clear(),["stop"]))},[M(ue.$slots,"clearIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).clear},null,8,$k))])])):(g(),x("span",Ek,[M(ue.$slots,"suffixIcon",{},()=>[(g(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)["arrow-down"]},null,8,Rk))])]))],40,_k),y.value.open?(g(),x("ul",{key:0,ref:"dropdown",id:r(p),class:"xui-select__dropdown",role:"listbox","aria-labelledby":r(d),"aria-multiselectable":a.multiple||void 0,style:he(Fe.value),onScroll:dt},[a.searchable?(g(),x("li",Ok,[N("input",{class:"xui-select__search",type:"text",role:"searchbox",placeholder:r(i).select.searchPlaceholder,value:y.value.searchQuery,"aria-label":r(i).select.searchAriaLabel,onInput:Tt,onKeydown:gn,onClick:Me[2]||(Me[2]=jt(()=>{},["stop"]))},null,40,Bk)])):H("",!0),O.value.length>0?(g(),x(ne,{key:1},[j.value&&w.value.offsetY>0?(g(),x("li",{key:0,class:"xui-select__spacer",style:he({height:`${w.value.offsetY}px`}),"aria-hidden":"true"},null,4)):H("",!0),te.value?(g(!0),x(ne,{key:1},pe(L.value,xe=>(g(),x("li",{key:xe.label,class:"xui-select__group",role:"presentation"},[N("div",Zk,$(xe.label),1),(g(!0),x(ne,null,pe(xe.options,qe=>(g(),x("div",{key:qe.value,id:`${r(p)}-option-${O.value.findIndex(Ui=>Ui.value===qe.value)}`,class:J(["xui-select__option",{"is-selected":X(qe.value),"is-active":O.value.findIndex(Ui=>Ui.value===qe.value)===y.value.activeIndex,"is-disabled":qe.disabled}]),role:"option","aria-selected":X(qe.value),"aria-disabled":qe.disabled||void 0,onClick:Ui=>r(f).select(qe.value)},$(qe.label),11,jk))),128))]))),128)):(g(!0),x(ne,{key:2},pe(I.value,(xe,qe)=>(g(),x("li",{id:`${r(p)}-option-${j.value?w.value.startIndex+qe:qe}`,key:xe.value,class:J(["xui-select__option",{"is-selected":X(xe.value),"is-active":(j.value?w.value.startIndex+qe:qe)===y.value.activeIndex,"is-disabled":xe.disabled}]),role:"option","aria-selected":X(xe.value),"aria-disabled":xe.disabled||void 0,onClick:Ui=>r(f).select(xe.value)},$(xe.label),11,Mk))),128)),j.value&&w.value.fillerHeight>0?(g(),x("li",{key:3,class:"xui-select__spacer",style:he({height:`${w.value.fillerHeight}px`}),"aria-hidden":"true"},null,4)):H("",!0)],64)):(g(),x("li",Dk,"无匹配结果"))],44,Ak)):H("",!0)],6))}}),Vk=["id","aria-selected","aria-disabled","aria-controls","tabindex","data-value","onClick"],Hk=["id","aria-labelledby"],hv=D({__name:"Tabs",props:{value:{default:void 0},defaultValue:{default:void 0},items:{},className:{},style:{}},emits:["change","update:value"],setup(e,{emit:t}){const n=e,a=t,l=ht("root"),i=un(),{value:o,defaultValue:s,items:u}=n,d=rv({value:o,defaultValue:s,items:u,onChange:C=>{a("update:value",C),a("change",C)}}),p=F(d.getState()),m=d.subscribe(C=>{p.value=C});we(()=>{m()}),Ne(()=>{d.updateOptions({value:n.value,items:n.items})});const h=Y(()=>{var C;return(C=n.items)==null?void 0:C.find(b=>b.value===p.value.value)}),v=C=>{d.activate(C)},k=C=>{var b;return(b=l.value)==null?void 0:b.querySelector(`[data-value="${C.replace(/"/g,'\\"')}"]`)},S=C=>{C.key!=="ArrowRight"&&C.key!=="ArrowLeft"||(C.preventDefault(),d.moveActive(C.key==="ArrowRight"?1:-1),Ot(()=>{var f;const b=p.value.value;b!==null&&((f=k(b))==null||f.focus())}))};return(C,b)=>(g(),x("div",{ref:"root",class:J(["xui-tabs",e.className]),style:he(e.style)},[N("div",{class:"xui-tabs__list",role:"tablist",onKeydown:S},[(g(!0),x(ne,null,pe(n.items,f=>(g(),x("button",{id:`${r(i)}-tab-${f.value}`,key:f.value,type:"button",class:J(["xui-tabs__tab",{"is-active":f.value===p.value.value,"is-disabled":f.disabled}]),role:"tab","aria-selected":f.value===p.value.value,"aria-disabled":f.disabled||void 0,"aria-controls":`${r(i)}-panel-${f.value}`,tabindex:f.value===p.value.value?0:-1,"data-value":f.value,onClick:y=>v(f.value)},$(f.label),11,Vk))),128))],32),h.value?(g(),x("div",{key:0,id:`${r(i)}-panel-${h.value.value}`,class:"xui-tabs__panel",role:"tabpanel","aria-labelledby":`${r(i)}-tab-${h.value.value}`},[M(C.$slots,"default",{item:h.value},()=>[G($(h.value.label),1)])],8,Hk)):H("",!0)],6))}}),Ik={class:"xui-message","aria-live":"polite"},Fk=["innerHTML"],qk={class:"xui-message__content"},Gk=["onClick"],Yk=["innerHTML"],Pk=D({__name:"MessageHost",props:{manager:{}},setup(e){const t=e,n=F(t.manager.getState()),a=t.manager.subscribe(i=>{n.value=i});we(()=>{a()});const l={info:le.info,success:le.success,warning:le.warning,error:le.error};return(i,o)=>(g(),x("div",Ik,[(g(!0),x(ne,null,pe(n.value.items,s=>(g(),x("div",{key:s.id,class:J(["xui-message__item",`xui-message__item--${s.type}`])},[(g(),x("svg",{class:"xui-message__icon",viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:s.icon??l[s.type]},null,8,Fk)),N("span",qk,$(s.content),1),s.closable?(g(),x("button",{key:0,type:"button",class:"xui-message__close","aria-label":"close",onClick:u=>t.manager.close(s.id)},[(g(),x("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).close},null,8,Yk))],8,Gk)):H("",!0)],2))),128))]))}});let Po=null,dp=!1;function vv(){if(Po===null&&(Po=Ph()),!dp&&typeof document<"u"){const e=document.createElement("div");document.body.appendChild(e),lS(Pk,{manager:Po}).mount(e),dp=!0}return Po}function $i(e){return vv().open(e)}const Ln={info:(e,t)=>$i({...t,type:"info",content:e}),success:(e,t)=>$i({...t,type:"success",content:e}),warning:(e,t)=>$i({...t,type:"warning",content:e}),error:(e,t)=>$i({...t,type:"error",content:e}),open:$i,closeAll:()=>vv().closeAll()},Kk=["aria-describedby"],Xk=["id"],Vn=D({__name:"Tooltip",props:{content:{default:void 0},placement:{default:"top"},trigger:{default:"hover"},disabled:{type:Boolean,default:!1},className:{},style:{}},setup(e,{expose:t}){const n=e,a=un(),{disabled:l}=n,i=mv({disabled:l}),o=F(i.getState()),s=i.subscribe(_=>{o.value=_});we(()=>{s(),h==null||h()}),Ne(()=>{i.updateOptions({disabled:n.disabled})});const u=F(null),d=F(null),p=F(n.placement),m=F(0);let h=null;function v(){const _=u.value,T=d.value;if(!_||!T)return;const w=T.getBoundingClientRect();if(w.width===0&&w.height===0)return;const{placement:R,shift:A}=yi(_.getBoundingClientRect(),w,Si(),{placement:n.placement,gap:8});p.value=R,m.value=A}Xe(()=>o.value.open,_=>{_?(p.value=n.placement,m.value=0,Ot(v),h==null||h(),h=bi(v)):(h==null||h(),h=null)}),Xe(()=>n.placement,()=>{o.value.open&&(p.value=n.placement,m.value=0,Ot(v))});const k=()=>{n.trigger==="hover"&&i.show()},S=()=>{n.trigger==="hover"&&i.hide()},C=()=>{n.trigger==="focus"&&i.show()},b=()=>{n.trigger==="focus"&&i.hide()};return t({show:()=>{i.show()},hide:()=>{i.hide()}}),(_,T)=>(g(),x("span",{class:J(["xui-tooltip",e.className]),style:he(e.style),onMouseenter:k,onMouseleave:S,onFocusin:C,onFocusout:b},[N("span",{ref_key:"triggerRef",ref:u,class:"xui-tooltip__trigger","aria-describedby":o.value.open?r(a):void 0},[M(_.$slots,"default"),o.value.open?(g(),x("span",{key:0,ref_key:"popperRef",ref:d,id:r(a),class:J(["xui-tooltip__popper",`is-${p.value}`]),style:he(p.value==="top"||p.value==="bottom"?{marginLeft:`${m.value}px`}:{marginTop:`${m.value}px`}),role:"tooltip"},[M(_.$slots,"content",{},()=>[G($(n.content),1)]),T[0]||(T[0]=N("span",{class:"xui-tooltip__arrow","aria-hidden":"true"},null,-1))],14,Xk)):H("",!0)],8,Kk)],38))}}),Qk=["aria-label"],Jk=["disabled","aria-label"],Wk=["innerHTML"],eN=["aria-current","disabled","onClick"],tN={key:1,class:"xui-pagination__ellipsis","aria-hidden":"true"},nN=["disabled","aria-label"],aN=["innerHTML"],ac=D({__name:"Pagination",props:{value:{default:void 0},defaultValue:{default:void 0},total:{default:void 0},pageSize:{default:10},disabled:{type:Boolean,default:!1},className:{},style:{}},emits:["change","update:value"],setup(e,{emit:t}){const n=e,a=t,{value:l,defaultValue:i,total:o,pageSize:s,disabled:u}=n,d=Xh({value:l,defaultValue:i,total:o,pageSize:s,disabled:u,onChange:S=>{a("update:value",S),a("change",S)}}),p=F(d.getState()),m=d.subscribe(S=>{p.value=S});we(()=>{m()}),Ne(()=>{d.updateOptions({value:n.value,total:n.total,pageSize:n.pageSize,disabled:n.disabled})});const h=Y(()=>Qh(p.value.page,p.value.pageCount)),v=An(),k=S=>typeof S=="number";return(S,C)=>(g(),x("nav",{class:J(["xui-pagination",[e.className,{"is-disabled":p.value.disabled}]]),style:he(e.style),role:"navigation","aria-label":r(v).pagination.nav},[N("button",{type:"button",class:J(["xui-pagination__nav",{"is-prev":!0}]),disabled:p.value.disabled||p.value.page<=1,"aria-label":r(v).pagination.prev,onClick:C[0]||(C[0]=b=>r(d).prev())},[M(S.$slots,"prevIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le)["arrow-left"]},null,8,Wk))])],8,Jk),(g(!0),x(ne,null,pe(h.value,(b,f)=>(g(),x(ne,{key:`${b}-${f}`},[k(b)?(g(),x("button",{key:0,type:"button",class:J(["xui-pagination__page",{"is-active":b===p.value.page}]),"aria-current":b===p.value.page?"page":void 0,disabled:p.value.disabled,onClick:y=>r(d).goTo(b)},$(b),11,eN)):(g(),x("span",tN,"···"))],64))),128)),N("button",{type:"button",class:"xui-pagination__nav",disabled:p.value.disabled||p.value.page>=p.value.pageCount,"aria-label":r(v).pagination.next,onClick:C[1]||(C[1]=b=>r(d).next())},[M(S.$slots,"nextIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le)["arrow-right"]},null,8,aN))])],8,nN)],14,Qk))}}),lN=["id","aria-expanded","aria-controls","aria-disabled","tabindex"],iN={key:0,class:"xui-date-picker__value"},oN={key:1,class:"xui-date-picker__placeholder"},sN=["innerHTML"],rN={key:3,class:"xui-date-picker__icon","aria-hidden":"true"},uN=["innerHTML"],cN=["id","aria-label"],dN={class:"xui-date-picker__header"},mN=["aria-label"],pN=["innerHTML"],fN={class:"xui-date-picker__title"},hN=["aria-label"],vN=["innerHTML"],gN={class:"xui-date-picker__weekdays","aria-hidden":"true"},bN={class:"xui-date-picker__grid"},yN=["aria-label","onClick"],SN={key:0,class:"xui-date-picker__shortcuts"},xN=["onClick"],Ks=D({__name:"DatePicker",props:{type:{default:"date"},value:{default:void 0},defaultValue:{default:void 0},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},shortcuts:{default:void 0},className:{},style:{}},emits:["change","clear","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=ht("root"),o=ht("trigger"),s=un(),u=un(),{value:d,defaultValue:p,disabled:m,type:h}=a,v=wh({type:h,value:d,defaultValue:p,disabled:m,shortcuts:a.shortcuts,onChange:j=>{l("update:value",j),l("change",j)},onClear:()=>l("clear")}),k=F(v.getState()),S=v.subscribe(j=>{k.value=j}),C=j=>{k.value.open&&i.value&&!i.value.contains(j.target)&&v.close()};Vt(()=>{document.addEventListener("mousedown",C)}),we(()=>{S(),document.removeEventListener("mousedown",C)}),Ne(()=>{v.updateOptions({value:a.value,disabled:a.disabled})});const b=Y(()=>Nh(k.value.viewYear,k.value.viewMonth)),f=An(),y=Y(()=>f.value.datePicker.titleFormat(k.value.viewYear,k.value.viewMonth)),_=Y(()=>{const j=k.value.value;return j?Array.isArray(j)?`${j[0]} ~ ${j[1]}`:j:null}),T=Y(()=>{const j=k.value.value;return j&&Array.isArray(j)?j:null}),w=j=>{switch(j.key){case"Enter":case" ":j.preventDefault(),v.toggleOpen();break;case"Escape":k.value.open&&(j.preventDefault(),v.close());break}},R=j=>a.type==="date"?j===k.value.value:T.value?j===T.value[0]||j===T.value[1]:k.value.rangeStart===j,A=j=>a.type!=="range"||!T.value?!1:Wl(j,T.value[0])>=0&&Wl(j,T.value[1])<=0;return t({focus:()=>{var j;(j=o.value)==null||j.focus()},toggleOpen:()=>{v.toggleOpen()},close:()=>{v.close()}}),(j,I)=>(g(),x("div",{ref:"root",class:J(["xui-date-picker",[e.className,{"is-disabled":k.value.disabled,"is-open":k.value.open,"is-range":a.type==="range"}]]),style:he(e.style)},[N("div",{ref:"trigger",id:r(s),class:"xui-date-picker__trigger",role:"combobox","aria-expanded":k.value.open,"aria-haspopup":"dialog","aria-controls":k.value.open?r(u):void 0,"aria-disabled":k.value.disabled||void 0,tabindex:k.value.disabled?-1:0,onClick:I[1]||(I[1]=q=>r(v).toggleOpen()),onKeydown:w},[_.value?(g(),x("span",iN,$(_.value),1)):(g(),x("span",oN,$(a.placeholder??r(f).datePicker.placeholder),1)),a.clearable&&k.value.value&&!k.value.disabled?(g(),x("span",{key:2,class:"xui-date-picker__clear",role:"button","aria-label":"clear",onClick:I[0]||(I[0]=jt(q=>r(v).clear(),["stop"]))},[M(j.$slots,"clearIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).clear},null,8,sN))])])):(g(),x("span",rN,[M(j.$slots,"calendarIcon",{},()=>[(g(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le).calendar},null,8,uN))])]))],40,lN),k.value.open?(g(),x("div",{key:0,id:r(u),class:"xui-date-picker__panel",role:"dialog","aria-label":r(f).datePicker.panel},[N("div",dN,[N("button",{type:"button",class:"xui-date-picker__nav","aria-label":r(f).datePicker.prevMonth,onClick:I[2]||(I[2]=q=>r(v).prevMonth())},[M(j.$slots,"prevIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le)["arrow-left"]},null,8,pN))])],8,mN),N("span",fN,$(y.value),1),N("button",{type:"button",class:"xui-date-picker__nav","aria-label":r(f).datePicker.nextMonth,onClick:I[3]||(I[3]=q=>r(v).nextMonth())},[M(j.$slots,"nextIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le)["arrow-right"]},null,8,vN))])],8,hN)]),N("div",gN,[(g(!0),x(ne,null,pe(r(f).datePicker.weekdays,q=>(g(),x("span",{key:q,class:"xui-date-picker__weekday"},$(q),1))),128))]),N("div",bN,[(g(!0),x(ne,null,pe(b.value,q=>(g(),x("button",{key:q.date,type:"button",class:J(["xui-date-picker__day",{"is-outside":!q.inMonth,"is-today":q.isToday,"is-selected":R(q.date),"is-in-range":A(q.date),"is-range-start":a.type==="range"&&T.value&&q.date===T.value[0],"is-range-end":a.type==="range"&&T.value&&q.date===T.value[1]}]),"aria-label":q.date,onClick:me=>r(v).select(q.date)},$(q.day),11,yN))),128))]),a.shortcuts&&a.shortcuts.length>0?(g(),x("div",SN,[(g(!0),x(ne,null,pe(a.shortcuts,q=>(g(),x("button",{key:q.label,type:"button",class:"xui-date-picker__shortcut",onClick:me=>r(v).selectShortcut(q.value)},$(q.label),9,xN))),128))])):H("",!0)],8,cN)):H("",!0)],6))}}),_N={class:"xui-table__table"},CN={key:0,class:"xui-table__th",style:{width:"42px"}},kN=["checked","indeterminate","aria-label"],NN=["aria-sort"],wN=["onClick"],TN={class:"xui-table__sort-icons","aria-hidden":"true"},zN=["innerHTML"],UN=["innerHTML"],$N={key:1},EN={key:0,class:"xui-table__spacer","aria-hidden":"true"},RN=["colspan"],AN=["onClick"],ON=["checked","disabled","aria-label","onChange"],BN={key:1,class:"xui-table__spacer","aria-hidden":"true"},ZN=["colspan"],jN={key:2},MN=["colspan"],ti=D({__name:"Table",props:{columns:{default:void 0},dataSource:{default:void 0},rowKey:{default:void 0},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},height:{default:void 0},rowHeight:{default:40},rowSelection:{default:void 0},className:{default:void 0},style:{default:void 0}},emits:["sortChange","rowClick"],setup(e,{emit:t}){const n=e,a=t,l=An(),i=iS(),o=Y(()=>i.onRowClick!==void 0),{dataSource:s}=n,u=sv({dataSource:s,rowKey:n.rowKey,rowSelection:n.rowSelection,onSortChange:Z=>a("sortChange",Z)}),d=F(u.getState()),p=u.subscribe(Z=>{d.value=Z});we(()=>{p()}),Ne(()=>{u.updateOptions({dataSource:n.dataSource,rowKey:n.rowKey,rowSelection:n.rowSelection})});const m=Or({itemCount:0,itemHeight:n.rowHeight??40}),h=F(m.getState()),v=m.subscribe(Z=>{h.value=Z});we(()=>{v()});const k=F(null);let S;Vt(()=>{if(!n.virtual)return;const Z=k.value;Z&&(m.updateOptions({viewportHeight:Z.clientHeight}),!(typeof ResizeObserver>"u")&&(S=new ResizeObserver(()=>{m.updateOptions({viewportHeight:Z.clientHeight})}),S.observe(Z)))}),we(()=>{S==null||S.disconnect()});const C=Z=>{n.virtual&&m.scrollTo(Z.target.scrollTop)};Ne(()=>{n.virtual&&m.updateOptions({itemCount:d.value.sortedData.length,itemHeight:n.rowHeight??40})});const b=Y(()=>{const Z=d.value.sortedData;return n.virtual?h.value.endIndex<h.value.startIndex?[]:Z.slice(h.value.startIndex,h.value.endIndex+1):Z}),f=Y(()=>[n.className,{"is-striped":n.stripe,"is-bordered":n.border,"is-virtual":n.virtual}]),y=Y(()=>{const Z={...n.style};return n.virtual&&(n.height!==void 0&&(Z.height=typeof n.height=="number"?`${n.height}px`:n.height),Z["--xui-table-row-height"]=`${n.rowHeight??40}px`),Object.keys(Z).length>0?Z:void 0}),_=Y(()=>n.rowSelection!==void 0),T=Y(()=>{var Z;return(((Z=n.columns)==null?void 0:Z.length)??0)+(_.value?1:0)}),w=(Z,P)=>{const Q=pa(Z,P,n.rowKey);return d.value.selectedRowKeys.includes(Q)},R=(Z,P)=>{var Q,ce;return((ce=(Q=n.rowSelection)==null?void 0:Q.getCheckboxDisabled)==null?void 0:ce.call(Q,Z,P))??!1},A=(Z,P,Q)=>{var ce;u.toggleRow(pa(Z,P,n.rowKey)),((ce=n.rowSelection)==null?void 0:ce.selectedRowKeys)!==void 0&&(Q.target.checked=w(Z,P))},O=Z=>{var P;u.toggleAll(),((P=n.rowSelection)==null?void 0:P.selectedRowKeys)!==void 0&&(Z.target.checked=d.value.allSelected)},L=(Z,P)=>{a("rowClick",Z,P)},te=(Z,P)=>({"is-even":P%2===1,"is-selected":_.value&&w(Z,P),"is-clickable":o.value}),j=Z=>{Z.sortable&&u.toggleSort(Z.key)},I=Z=>{if(d.value.sortKey===Z.key)return d.value.sortOrder==="asc"?"ascending":"descending"},q=Z=>{const P={};return Z.width!==void 0&&(P.width=typeof Z.width=="number"?`${Z.width}px`:Z.width),Z.align!==void 0&&(P.textAlign=Z.align),Object.keys(P).length>0?P:void 0},me=(Z,P,Q)=>Z.render?Z.render(P,Q):ov(P[Z.key]),V=(Z,P)=>({"is-active":d.value.sortKey===Z.key&&d.value.sortOrder===(P==="up"?"asc":"desc")}),oe=le["arrow-up"],X=le["arrow-down"];return(Z,P)=>(g(),x("div",{ref_key:"scrollRef",ref:k,class:J(["xui-table",f.value]),style:he(y.value),onScroll:C},[N("table",_N,[N("thead",null,[N("tr",null,[_.value?(g(),x("th",CN,[N("input",{type:"checkbox",class:"xui-table__check",checked:d.value.allSelected,indeterminate:d.value.indeterminate,"aria-label":r(l).table.selectAll,onChange:P[0]||(P[0]=Q=>O(Q))},null,40,kN)])):H("",!0),(g(!0),x(ne,null,pe(n.columns,Q=>(g(),x("th",{key:Q.key,class:"xui-table__th",style:he(q(Q)),"aria-sort":I(Q),scope:"col"},[Q.sortable?(g(),x("button",{key:0,type:"button",class:"xui-table__sort",onClick:ce=>j(Q)},[G($(Q.title)+" ",1),N("span",TN,[M(Z.$slots,"sortIcon",{order:"asc"},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",class:J(V(Q,"up")),innerHTML:r(oe)},null,10,zN))]),M(Z.$slots,"sortIcon",{order:"desc"},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",class:J(V(Q,"down")),innerHTML:r(X)},null,10,UN))])])],8,wN)):(g(),x("span",$N,$(Q.title),1))],12,NN))),128))])]),N("tbody",null,[n.virtual&&h.value.offsetY>0?(g(),x("tr",EN,[N("td",{style:he({height:`${h.value.offsetY}px`}),colspan:T.value},null,12,RN)])):H("",!0),(g(!0),x(ne,null,pe(b.value,(Q,ce)=>(g(),x("tr",{key:r(pa)(Q,n.virtual?h.value.startIndex+ce:ce,n.rowKey),class:J(te(Q,n.virtual?h.value.startIndex+ce:ce)),onClick:Ie=>L(Q,n.virtual?h.value.startIndex+ce:ce)},[_.value?(g(),x("td",{key:0,class:"xui-table__td",onClick:P[1]||(P[1]=jt(()=>{},["stop"]))},[N("input",{type:"checkbox",class:"xui-table__check",checked:w(Q,n.virtual?h.value.startIndex+ce:ce),disabled:R(Q,n.virtual?h.value.startIndex+ce:ce),"aria-label":r(l).table.selectRow(n.virtual?h.value.startIndex+ce:ce),onChange:Ie=>A(Q,n.virtual?h.value.startIndex+ce:ce,Ie)},null,40,ON)])):H("",!0),(g(!0),x(ne,null,pe(n.columns,Ie=>(g(),x("td",{key:Ie.key,class:"xui-table__td",style:he(q(Ie))},$(me(Ie,Q,n.virtual?h.value.startIndex+ce:ce)),5))),128))],10,AN))),128)),n.virtual&&h.value.fillerHeight>0?(g(),x("tr",BN,[N("td",{style:he({height:`${h.value.fillerHeight}px`}),colspan:T.value},null,12,ZN)])):H("",!0),d.value.sortedData.length===0?(g(),x("tr",jN,[N("td",{class:"xui-table__empty",colspan:T.value},[M(Z.$slots,"empty",{},()=>[G($(r(l).table.empty),1)])],8,MN)])):H("",!0)])])],38))}}),DN={key:0,class:"xui-spin__mask",role:"status","aria-live":"polite"},LN={key:0,class:"xui-spin__tip"},VN={key:0,class:"xui-spin__tip"},Li=D({__name:"Spin",props:{size:{default:"md"},spinning:{type:Boolean,default:!0},tip:{default:void 0},className:{},style:{}},setup(e){const t=e,n=lv({size:t.size,spinning:t.spinning,tip:t.tip}),a=F(n.getState()),l=n.subscribe(i=>{a.value=i});return we(()=>{l()}),Ne(()=>{n.updateOptions({size:t.size,spinning:t.spinning,tip:t.tip})}),(i,o)=>i.$slots.default?(g(),x("div",{key:0,class:J(["xui-spin xui-spin--wrapper",e.className]),style:he(e.style)},[N("div",{class:J(["xui-spin__content",{"is-blur":a.value.spinning}])},[M(i.$slots,"default")],2),a.value.spinning?(g(),x("div",DN,[N("span",{class:J(["xui-spin__indicator",`is-${a.value.size}`]),"aria-hidden":"true"},null,2),a.value.tip?(g(),x("span",LN,$(a.value.tip),1)):H("",!0)])):H("",!0)],6)):a.value.spinning?(g(),x("span",{key:1,class:J(["xui-spin",e.className]),style:he(e.style),role:"status","aria-live":"polite"},[N("span",{class:J(["xui-spin__indicator",`is-${a.value.size}`]),"aria-hidden":"true"},null,2),a.value.tip?(g(),x("span",VN,$(a.value.tip),1)):H("",!0)],6)):H("",!0)}}),HN=["aria-label"],IN=["aria-label"],FN={class:"xui-breadcrumb__list"},qN=["href","onClick"],GN=["aria-current","onClick"],YN={key:2,class:"xui-breadcrumb__separator","aria-hidden":"true"},lc=D({__name:"Breadcrumb",props:{items:{default:void 0},separator:{default:"/"},className:{},style:{}},emits:["itemClick"],setup(e,{emit:t}){const n=e,a=t,l=An(),i=Mh({items:n.items,separator:n.separator,onItemClick:(u,d)=>a("itemClick",u,d)}),o=F(i.getState()),s=i.subscribe(u=>{o.value=u});return we(()=>{s()}),Ne(()=>{i.updateOptions({items:n.items,separator:n.separator})}),(u,d)=>u.$slots.default?(g(),x("nav",{key:0,class:J(["xui-breadcrumb",e.className]),style:he(e.style),"aria-label":r(l).breadcrumb.nav},[M(u.$slots,"default")],14,HN)):(g(),x("nav",{key:1,class:J(["xui-breadcrumb",e.className]),style:he(e.style),"aria-label":r(l).breadcrumb.nav},[N("ol",FN,[(g(!0),x(ne,null,pe(o.value.items,(p,m)=>(g(),x("li",{key:m,class:J(["xui-breadcrumb__item",{"is-active":m===o.value.items.length-1,"is-disabled":p.disabled}])},[p.href&&m!==o.value.items.length-1&&!p.disabled?(g(),x("a",{key:0,class:"xui-breadcrumb__link",href:p.href,onClick:h=>r(i).selectItem(m)},$(p.label),9,qN)):(g(),x("span",{key:1,class:"xui-breadcrumb__label","aria-current":m===o.value.items.length-1?"page":void 0,onClick:h=>r(i).selectItem(m)},$(p.label),9,GN)),m!==o.value.items.length-1?(g(),x("span",YN,$(o.value.separator),1)):H("",!0)],2))),128))])],14,IN))}}),PN=["aria-label"],KN={key:0,class:"xui-skeleton__avatar","aria-hidden":"true"},XN={class:"xui-skeleton__rows","aria-hidden":"true"},ic=D({__name:"Skeleton",props:{loading:{type:Boolean,default:!0},avatar:{type:Boolean,default:!1},rows:{default:3},className:{},style:{}},setup(e){const t=e,n=av({loading:t.loading,avatar:t.avatar,rows:t.rows}),a=An(),l=F(n.getState()),i=n.subscribe(o=>{l.value=o});return we(()=>{i()}),Ne(()=>{n.updateOptions({loading:t.loading,avatar:t.avatar,rows:t.rows})}),(o,s)=>l.value.loading?(g(),x("div",{key:1,class:J(["xui-skeleton",e.className]),style:he(e.style),role:"status","aria-label":r(a).skeleton.loading},[l.value.avatar?(g(),x("span",KN)):H("",!0),N("div",XN,[(g(!0),x(ne,null,pe(l.value.rows,u=>(g(),x("span",{key:u,class:J(["xui-skeleton__row",{"is-last":u===l.value.rows}])},null,2))),128))])],14,PN)):M(o.$slots,"default",{},void 0,void 0,0)}}),QN=["aria-valuenow","aria-valuemin","aria-valuemax","placeholder","disabled","onKeydown"],JN={class:"xui-input-number__step","aria-hidden":"true"},WN=["disabled"],ew=["innerHTML"],tw=["disabled"],nw=["innerHTML"],oc=D({__name:"InputNumber",props:{value:{default:void 0},defaultValue:{default:void 0},min:{default:void 0},max:{default:void 0},step:{default:1},precision:{default:void 0},disabled:{type:Boolean,default:!1},placeholder:{default:void 0},className:{},style:{}},emits:["change","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=Yh({value:a.value,defaultValue:a.defaultValue,min:a.min,max:a.max,step:a.step,precision:a.precision,disabled:a.disabled,onChange:C=>{l("change",C),l("update:value",C)}}),o=F(i.getState());function s(C){if(C===null)return"";const b=i.getState().precision;return b!==null?C.toFixed(b):String(C)}const u=F(s(o.value.value)),d=i.subscribe(C=>{o.value=C,a.value===void 0&&(u.value=s(C.value))});we(()=>{d()}),Ne(()=>{i.updateOptions({value:a.value,min:a.min,max:a.max,step:a.step,precision:a.precision,disabled:a.disabled}),a.value!==void 0&&(u.value=s(o.value.value))});function p(){i.commitText(u.value),u.value=s(o.value.value)}function m(C){i.stepValue(C),u.value=s(o.value.value)}const h=ht("input");return t({focus:()=>{var C;(C=h.value)==null||C.focus()},blur:()=>{var C;(C=h.value)==null||C.blur()},stepValue:C=>{i.stepValue(C),u.value=s(o.value.value)}}),(C,b)=>(g(),x("div",{class:J(["xui-input-number",[e.className,{"is-disabled":o.value.disabled}]]),style:he(e.style)},[hh(N("input",{ref:"input","onUpdate:modelValue":b[0]||(b[0]=f=>u.value=f),class:"xui-input-number__input",type:"text",inputmode:"decimal",role:"spinbutton","aria-valuenow":o.value.value??void 0,"aria-valuemin":Number.isFinite(o.value.min)?o.value.min:void 0,"aria-valuemax":Number.isFinite(o.value.max)?o.value.max:void 0,placeholder:a.placeholder,disabled:o.value.disabled,onChange:p,onKeydown:[gs(jt(p,["prevent"]),["enter"]),b[1]||(b[1]=gs(jt(f=>m(1),["prevent"]),["up"])),b[2]||(b[2]=gs(jt(f=>m(-1),["prevent"]),["down"]))]},null,40,QN),[[oS,u.value]]),N("div",JN,[N("button",{class:"xui-input-number__btn",type:"button",tabindex:"-1",disabled:o.value.disabled,onClick:b[3]||(b[3]=f=>m(1))},[M(C.$slots,"upIcon",{},()=>[(g(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)["arrow-up"]},null,8,ew))])],8,WN),N("button",{class:"xui-input-number__btn",type:"button",tabindex:"-1",disabled:o.value.disabled,onClick:b[4]||(b[4]=f=>m(-1))},[M(C.$slots,"downIcon",{},()=>[(g(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)["arrow-down"]},null,8,nw))])],8,tw)])],6))}}),aw=["aria-describedby"],lw=["id"],iw={class:"xui-popconfirm__content"},ow={class:"xui-popconfirm__actions"},nl=D({__name:"Popconfirm",props:{content:{default:void 0},confirmText:{},cancelText:{},placement:{default:"top"},disabled:{type:Boolean,default:!1},className:{},style:{}},emits:["confirm","cancel"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=An(),o=Y(()=>a.confirmText??i.value.popconfirm.confirm),s=Y(()=>a.cancelText??i.value.popconfirm.cancel),u=un(),d=F(null),p=Jh({placement:a.placement,disabled:a.disabled,onConfirm:()=>l("confirm"),onCancel:()=>l("cancel")}),m=F(p.getState()),h=p.subscribe(R=>{m.value=R}),v=R=>{const A=d.value;A&&!A.contains(R.target)&&p.close()};document.addEventListener("mousedown",v);const k=F(null),S=F(null),C=F(a.placement),b=F(0);let f=null;function y(){const R=k.value,A=S.value;if(!R||!A)return;const O=A.getBoundingClientRect();if(O.width===0&&O.height===0)return;const{placement:L,shift:te}=yi(R.getBoundingClientRect(),O,Si(),{placement:m.value.placement,gap:8});C.value=L,b.value=te}return Xe(()=>m.value.open,R=>{R?(C.value=m.value.placement,b.value=0,Ot(y),f==null||f(),f=bi(y)):(f==null||f(),f=null)}),Xe(()=>m.value.placement,R=>{m.value.open&&(C.value=R,b.value=0,Ot(y))}),we(()=>{h(),f==null||f(),document.removeEventListener("mousedown",v)}),Ne(()=>{p.updateOptions({placement:a.placement,disabled:a.disabled})}),t({show:()=>{m.value.open||p.toggle()},hide:()=>{p.close()},toggle:()=>{p.toggle()}}),(R,A)=>(g(),x("span",{ref_key:"rootRef",ref:d,class:J(["xui-popconfirm",e.className]),style:he(e.style)},[N("span",{ref_key:"triggerRef",ref:k,class:"xui-popconfirm__trigger","aria-describedby":m.value.open?r(u):void 0,onClick:A[3]||(A[3]=O=>r(p).toggle())},[M(R.$slots,"default"),m.value.open?(g(),x("span",{key:0,ref_key:"popperRef",ref:S,id:r(u),class:J(["xui-popconfirm__popper",`is-${C.value}`]),style:he(C.value==="top"||C.value==="bottom"?{marginLeft:`${b.value}px`}:{marginTop:`${b.value}px`}),role:"tooltip",onClick:A[2]||(A[2]=jt(()=>{},["stop"]))},[N("span",iw,[M(R.$slots,"content",{},()=>[G($(a.content),1)])]),N("div",ow,[N("button",{class:"xui-button xui-button--sm",type:"button",onClick:A[0]||(A[0]=O=>r(p).cancel())},$(s.value),1),N("button",{class:"xui-button xui-button--primary xui-button--sm",type:"button",onClick:A[1]||(A[1]=O=>r(p).confirm())},$(o.value),1)]),A[4]||(A[4]=N("span",{class:"xui-popconfirm__arrow","aria-hidden":"true"},null,-1))],14,lw)):H("",!0)],8,aw)],6))}}),sw={key:0,class:"xui-modal"},rw={class:"xui-modal__header"},uw={class:"xui-modal__title"},cw=["innerHTML"],dw={class:"xui-modal__body"},mw={class:"xui-modal__footer"},Ao=D({__name:"Modal",props:Is({title:{},width:{default:520},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},okText:{},cancelText:{},trapFocus:{type:Boolean,default:!0},className:{},style:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:Is(["open","close","ok","cancel"],["update:visible"]),setup(e,{expose:t,emit:n}){const a=n,l=fh(e,"visible"),i=ht("panel"),o=An(),s=Y(()=>e.okText??o.value.modal.ok),u=Y(()=>e.cancelText??o.value.modal.cancel),d=Kh({visible:l.value,closable:e.closable,maskClosable:e.maskClosable,closeOnEsc:e.closeOnEsc,onOpen:()=>{l.value=!0,a("open")},onClose:()=>{l.value=!1,a("close")},onOk:()=>a("ok"),onCancel:()=>a("cancel")}),p=F(d.getState()),m=d.subscribe(T=>{p.value=T}),h=T=>{T.key==="Escape"&&d.handleEsc()},v=T=>{if(T.key==="Escape"){T.preventDefault(),d.handleEsc();return}e.trapFocus&&Ch(T,T.currentTarget)};let k=null;we(()=>{m(),document.removeEventListener("keydown",h)}),Ne(()=>{d.updateOptions({visible:l.value,closable:e.closable,maskClosable:e.maskClosable,closeOnEsc:e.closeOnEsc})}),Xe(()=>p.value.visible,T=>{T?(e.closeOnEsc&&document.addEventListener("keydown",h),k=document.activeElement instanceof HTMLElement?document.activeElement:null,Ot(()=>{var w;(w=i.value)==null||w.focus()})):(document.removeEventListener("keydown",h),k==null||k.focus(),k=null)});const S=()=>{d.open()},C=()=>{d.close()},b=()=>{d.toggle()},f=()=>{d.handleOk()},y=()=>{d.handleCancel()},_=()=>{d.handleMaskClick()};return t({open:S,close:C,toggle:b}),(T,w)=>(g(),ae(sS,{to:"body"},[p.value.visible?(g(),x("div",sw,[N("div",{class:"xui-modal__overlay",onClick:_}),N("div",{ref:"panel",class:J(["xui-modal__panel",e.className]),style:he([{width:typeof e.width=="number"?`${e.width}px`:e.width},e.style]),tabindex:"-1",onKeydown:v},[N("div",rw,[M(T.$slots,"title",{},()=>[N("span",uw,$(e.title),1)]),p.value.closable?(g(),x("button",{key:0,class:"xui-modal__close",onClick:C},[M(T.$slots,"closeIcon",{},()=>[(g(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(le).close},null,8,cw))])])):H("",!0)]),N("div",dw,[M(T.$slots,"default")]),N("div",mw,[M(T.$slots,"footer",{},()=>[N("button",{class:"xui-button xui-button--md",onClick:y},$(u.value),1),N("button",{class:"xui-button xui-button--primary xui-button--md",onClick:f},$(s.value),1)])])],38)])):H("",!0)]))}}),pw={key:0,class:"xui-form__actions"},Br=D({__name:"Form",props:{initialValues:{},rules:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},labelWidth:{},labelPosition:{default:"right"},validateTrigger:{},scrollToFirstError:{type:Boolean,default:!1},className:{},style:{}},emits:["submit","submitFail","valuesChange"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=F(null);i.value===null&&(i.value=qh({initialValues:a.initialValues,rules:a.rules,disabled:a.disabled,readonly:a.readonly,validateTrigger:a.validateTrigger,onSubmit:m=>l("submit",m),onSubmitFail:m=>l("submitFail",m),onValuesChange:(m,h)=>l("valuesChange",m,h)}));const o=i.value,s=F(o.getState()),u=o.subscribe(m=>{s.value=m});we(()=>{u()}),Ne(()=>{o.updateOptions({disabled:a.disabled,readonly:a.readonly,rules:a.rules,onSubmit:m=>l("submit",m),onSubmitFail:m=>l("submitFail",m),onValuesChange:(m,h)=>l("valuesChange",m,h)})});const d=Y(()=>({logic:o,state:s.value,disabled:a.disabled,readonly:a.readonly,labelWidth:a.labelWidth,labelPosition:a.labelPosition}));Er("xuiForm",d);const p=m=>{m.preventDefault(),o.submit()};return t({validate:m=>o.validate(m),validateField:(m,h)=>o.validateField(m,h),getFieldValue:m=>o.getFieldValue(m),getFieldsValue:()=>o.getFieldsValue(),setFieldValue:(m,h)=>o.setFieldValue(m,h),setFieldsValue:m=>o.setFieldsValue(m),resetFields:m=>o.resetFields(m),clearValidate:m=>o.clearValidate(m),submit:()=>o.submit()}),(m,h)=>(g(),x("form",{class:J(["xui-form",a.className]),style:he(a.style),onSubmit:jt(p,["prevent"])},[M(m.$slots,"default"),m.$slots.actions?(g(),x("div",pw,[M(m.$slots,"actions")])):H("",!0)],38))}}),fw={class:"xui-form-item__content"},hw={key:1,class:"xui-form-item__extra"},vw={key:0,class:"xui-form-item__error"},gw={key:0,class:"xui-form-item__error-count"},$t=D({__name:"FormItem",props:{label:{},required:{type:Boolean,default:!1},trigger:{},validateFirst:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},extra:{},labelAlign:{default:"right"},className:{},style:{},name:{},rules:{}},emits:["change","blur"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=ph(),o=vi("xuiForm",void 0),s=Y(()=>{if(!o)return;const w=o;return w&&typeof w=="object"&&"value"in w&&typeof w.value=="object"?w.value:w});s.value;const u=Y(()=>a.rules??[]),d=Y(()=>a.required||Fh(u.value)),p=Y(()=>{if(a.name&&s.value)return s.value.state.values[a.name]}),m=Y(()=>!a.name||!s.value?[]:s.value.state.errors[a.name]??[]),h=Y(()=>s.value?s.value.state.validating:!1),v=Y(()=>{var w;return((w=s.value)==null?void 0:w.disabled)??!1}),k=Y(()=>{var w;return((w=s.value)==null?void 0:w.readonly)??!1}),S=Y(()=>{var A;const w=(A=s.value)==null?void 0:A.labelWidth;return w===void 0?void 0:{width:typeof w=="number"?`${w}px`:w,flexShrink:0}}),C=Y(()=>{var w;return((w=s.value)==null?void 0:w.labelPosition)??"right"});Vt(()=>{a.name&&s.value&&s.value.logic.registerField(a.name,u.value)}),Td(()=>{a.name&&s.value&&s.value.logic.unregisterField(a.name)}),Xe(()=>u.value,w=>{a.name&&s.value&&s.value.logic.registerField(a.name,w)});const b=w=>{!a.name||!s.value||(s.value.logic.setFieldValue(a.name,w),l("change",w),s.value.logic.validateField(a.name,"change"))},f=()=>{!a.name||!s.value||(l("blur",p.value),s.value.logic.validateField(a.name,"blur"))},y=()=>{var R;const w=((R=i.default)==null?void 0:R.call(i))??[];for(const A of w)if(A.type!==uS&&A.type!==null)return A;return null},_=Y(()=>{const w=y();if(!w)return null;const R={value:p.value,disabled:v.value||void 0,readonly:k.value||void 0};return R["onUpdate:value"]=A=>b(A),R.onChange=A=>{b(A)},R.onBlur=()=>f(),rS(w,R)}),T=Object.assign(w=>w.node,{props:["node"]});return t({validate:w=>!a.name||!s.value?Promise.resolve([]):s.value.logic.validateField(a.name,w),clearValidation:()=>{!a.name||!s.value||s.value.logic.clearValidate([a.name])},resetField:()=>{!a.name||!s.value||s.value.logic.resetFields([a.name])}}),(w,R)=>a.hidden?H("",!0):(g(),x("div",{key:0,class:J(["xui-form-item",`xui-form-item--label-${C.value}`,{"is-error":m.value.length>0,"is-required":d.value,"is-validating":h.value},a.className]),style:he(a.style)},[a.label||w.$slots.label?(g(),x("label",{key:0,class:J(["xui-form-item__label",`xui-form-item__label--${a.labelAlign}`]),style:he(S.value)},[M(w.$slots,"label",{},()=>[G($(a.label),1)])],6)):H("",!0),N("div",fw,[_.value?(g(),ae(sn(r(T)),{key:0,node:_.value},null,8,["node"])):H("",!0),a.extra||w.$slots.extra?(g(),x("div",hw,[M(w.$slots,"extra",{},()=>[G($(a.extra),1)])])):H("",!0),z(Uo,{name:"xui-form-item-fade"},{default:E(()=>[m.value.length>0&&!w.$slots.error?(g(),x("div",vw,[G($(m.value[0])+" ",1),m.value.length>1?(g(),x("span",gw," (+"+$(m.value.length-1)+") ",1)):H("",!0)])):H("",!0)]),_:1}),w.$slots.error?M(w.$slots,"error",{errors:m.value},void 0,void 0,2):H("",!0)])],6))}}),bw=["id","aria-expanded","aria-controls","aria-disabled","tabindex"],yw={key:0,class:"xui-time-picker__value"},Sw={key:1,class:"xui-time-picker__placeholder"},xw=["innerHTML"],_w={key:3,class:"xui-time-picker__icon","aria-hidden":"true"},Cw=["innerHTML"],kw=["id","aria-label"],Nw={class:"xui-time-picker__columns"},ww={class:"xui-time-picker__column",role:"listbox","aria-label":"hour"},Tw=["aria-selected","onClick"],zw={class:"xui-time-picker__column",role:"listbox","aria-label":"minute"},Uw=["aria-selected","onClick"],$w={key:0,class:"xui-time-picker__column",role:"listbox","aria-label":"second"},Ew=["aria-selected","onClick"],Rw={class:"xui-time-picker__footer"},Aw=["disabled"],gv=D({__name:"TimePicker",props:{value:{default:void 0},defaultValue:{default:void 0},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},format:{default:"HH:mm:ss"},hourStep:{default:1},minuteStep:{default:1},secondStep:{default:1},className:{},style:{}},emits:["change","clear","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=ht("root"),o=ht("trigger"),s=un(),u=un(),{value:d,defaultValue:p,disabled:m}=a,h=dv({value:d,defaultValue:p,disabled:m,format:a.format,hourStep:a.hourStep,minuteStep:a.minuteStep,secondStep:a.secondStep,onChange:j=>{l("update:value",j),l("change",j)},onClear:()=>l("clear")}),v=F(h.getState()),k=h.subscribe(j=>{v.value=j}),S=j=>{v.value.open&&i.value&&!i.value.contains(j.target)&&h.close()};Vt(()=>{document.addEventListener("mousedown",S)}),we(()=>{k(),document.removeEventListener("mousedown",S)}),Ne(()=>{h.updateOptions({value:a.value,disabled:a.disabled})}),Xe(()=>v.value.open,async j=>{var q;if(!j)return;await Ot();const I=(q=i.value)==null?void 0:q.querySelectorAll(".xui-time-picker__column");I==null||I.forEach(me=>{const V=me.querySelector(".xui-time-picker__item.is-selected");V&&typeof V.scrollIntoView=="function"&&V.scrollIntoView({block:"center",inline:"nearest"})})});const C=Y(()=>Vl(24,a.hourStep)),b=Y(()=>Vl(60,a.minuteStep)),f=Y(()=>Vl(60,a.secondStep)),y=Y(()=>v.value.draft?cv(v.value.draft):null),_=Y(()=>a.format==="HH:mm:ss"),T=Y(()=>v.value.value?_.value?v.value.value:v.value.value.slice(0,5):null),w=An(),R=j=>{switch(j.key){case"Enter":case" ":j.preventDefault(),h.toggleOpen();break;case"Escape":v.value.open&&(j.preventDefault(),h.close());break}},A=(j,I)=>{const me={...y.value??{hour:0,minute:0,second:0},[j]:I};h.selectDraft(me.hour,me.minute,_.value?me.second:0)};return t({focus:()=>{var j;(j=o.value)==null||j.focus()},toggleOpen:()=>{h.toggleOpen()},close:()=>{h.close()}}),(j,I)=>(g(),x("div",{ref:"root",class:J(["xui-time-picker",[e.className,{"is-disabled":v.value.disabled,"is-open":v.value.open}]]),style:he(e.style)},[N("div",{ref:"trigger",id:r(s),class:"xui-time-picker__trigger",role:"combobox","aria-expanded":v.value.open,"aria-haspopup":"dialog","aria-controls":v.value.open?r(u):void 0,"aria-disabled":v.value.disabled||void 0,tabindex:v.value.disabled?-1:0,onClick:I[1]||(I[1]=q=>r(h).toggleOpen()),onKeydown:R},[T.value?(g(),x("span",yw,$(T.value),1)):(g(),x("span",Sw,$(a.placeholder??r(w).timePicker.placeholder),1)),a.clearable&&v.value.value&&!v.value.disabled?(g(),x("span",{key:2,class:"xui-time-picker__clear",role:"button","aria-label":"clear",onClick:I[0]||(I[0]=jt(q=>r(h).clear(),["stop"]))},[M(j.$slots,"clearIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).clear},null,8,xw))])])):(g(),x("span",_w,[M(j.$slots,"clockIcon",{},()=>[(g(),x("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le).clock},null,8,Cw))])]))],40,bw),v.value.open?(g(),x("div",{key:0,id:r(u),class:"xui-time-picker__panel",role:"dialog","aria-label":r(w).timePicker.panel},[N("div",Nw,[N("ul",ww,[(g(!0),x(ne,null,pe(C.value,q=>{var me,V;return g(),x("li",{key:q,class:J(["xui-time-picker__item",{"is-selected":((me=y.value)==null?void 0:me.hour)===r(Hl)(q,a.hourStep,24)}]),role:"option","aria-selected":((V=y.value)==null?void 0:V.hour)===q,onClick:oe=>A("hour",q)},$(String(q).padStart(2,"0")),11,Tw)}),128))]),N("ul",zw,[(g(!0),x(ne,null,pe(b.value,q=>{var me,V;return g(),x("li",{key:q,class:J(["xui-time-picker__item",{"is-selected":((me=y.value)==null?void 0:me.minute)===r(Hl)(q,a.minuteStep,60)}]),role:"option","aria-selected":((V=y.value)==null?void 0:V.minute)===q,onClick:oe=>A("minute",q)},$(String(q).padStart(2,"0")),11,Uw)}),128))]),_.value?(g(),x("ul",$w,[(g(!0),x(ne,null,pe(f.value,q=>{var me,V;return g(),x("li",{key:q,class:J(["xui-time-picker__item",{"is-selected":((me=y.value)==null?void 0:me.second)===r(Hl)(q,a.secondStep,60)}]),role:"option","aria-selected":((V=y.value)==null?void 0:V.second)===q,onClick:oe=>A("second",q)},$(String(q).padStart(2,"0")),11,Ew)}),128))])):H("",!0)]),N("div",Rw,[N("button",{type:"button",class:"xui-time-picker__footer-btn xui-time-picker__footer-btn--cancel",onClick:I[2]||(I[2]=q=>r(h).close())},$(r(w).timePicker.cancel),1),N("button",{type:"button",class:"xui-time-picker__footer-btn xui-time-picker__footer-btn--confirm",disabled:!v.value.draft,onClick:I[3]||(I[3]=q=>r(h).confirm())},$(r(w).timePicker.confirm),9,Aw)])],8,kw)):H("",!0)],6))}}),Ow=["id","aria-expanded","aria-controls","aria-disabled","tabindex"],Bw={key:0,class:"xui-cascader__placeholder"},Zw={key:1,class:"xui-cascader__tags"},jw={class:"xui-cascader__tag-label"},Mw=["onClick"],Dw={key:0,class:"xui-cascader__value"},Lw={key:1,class:"xui-cascader__placeholder"},Vw=["innerHTML"],Hw=["innerHTML"],Iw=["id","aria-label"],Fw={class:"xui-cascader__columns"},qw=["aria-label"],Gw=["aria-selected","aria-disabled","onClick"],Yw={key:0,class:"xui-cascader__checkbox","aria-hidden":"true"},Pw={class:"xui-cascader__item-label"},Kw={key:1,class:"xui-cascader__item-arrow","aria-hidden":"true"},Xw=["innerHTML"],Qw={key:0,class:"xui-cascader__footer"},jd=D({__name:"Cascader",props:{value:{default:void 0},defaultValue:{default:void 0},options:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{default:" / "},changeOnSelect:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!1},className:{},style:{}},emits:["change","clear","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=ht("root"),o=ht("trigger"),s=un(),u=un(),{value:d,defaultValue:p,disabled:m}=a,h=Vh({value:d,defaultValue:p,options:a.options,disabled:m,separator:a.separator,changeOnSelect:a.changeOnSelect,multiple:a.multiple,checkStrictly:a.checkStrictly,onChange:(j,I)=>{l("update:value",j),l("change",j,I)},onClear:()=>l("clear")}),v=F(h.getState()),k=h.subscribe(j=>{v.value=j}),S=j=>{v.value.open&&i.value&&!i.value.contains(j.target)&&h.close()};Vt(()=>{document.addEventListener("mousedown",S)}),we(()=>{k(),document.removeEventListener("mousedown",S)}),Ne(()=>{h.updateOptions({value:a.value,disabled:a.disabled,options:a.options,changeOnSelect:a.changeOnSelect,checkStrictly:a.checkStrictly})});const C=Y(()=>Od(a.options,v.value.activePath)),b=Y(()=>{var j;return!a.multiple&&v.value.value?((j=ei(a.options,v.value.value))==null?void 0:j.labels.join(a.separator))??null:null}),f=Y(()=>!a.multiple||!v.value.value?[]:v.value.value.map(I=>{const q=ei(a.options,I);return q?{path:I,label:q.labels.join(a.separator)}:null}).filter(Boolean)),y=Y(()=>a.multiple?f.value.length>0:!!v.value.value),_=An(),T=(j,I)=>{if(!a.multiple)return!1;const q=[...v.value.activePath.slice(0,j),I.value];return Ys(a.options,v.value.value,q,a.checkStrictly).checked},w=(j,I)=>{if(!a.multiple)return!1;const q=[...v.value.activePath.slice(0,j),I.value];return Ys(a.options,v.value.value,q,a.checkStrictly).indeterminate},R=j=>{h.toggleCheck(j)},A=j=>{switch(j.key){case"Enter":case" ":j.preventDefault(),h.toggleOpen();break;case"Escape":v.value.open&&(j.preventDefault(),h.close());break}};return t({focus:()=>{var j;(j=o.value)==null||j.focus()},toggleOpen:()=>{h.toggleOpen()},close:()=>{h.close()}}),(j,I)=>(g(),x("div",{ref:"root",class:J(["xui-cascader",[e.className,{"is-disabled":v.value.disabled,"is-open":v.value.open,"is-multiple":a.multiple}]]),style:he(e.style)},[N("div",{ref:"trigger",id:r(s),class:"xui-cascader__trigger",role:"combobox","aria-expanded":v.value.open,"aria-haspopup":"dialog","aria-controls":v.value.open?r(u):void 0,"aria-disabled":v.value.disabled||void 0,tabindex:v.value.disabled?-1:0,onClick:I[1]||(I[1]=q=>r(h).toggleOpen()),onKeydown:A},[a.multiple?(g(),x(ne,{key:0},[f.value.length===0?(g(),x("span",Bw,$(a.placeholder??r(_).cascader.placeholder),1)):(g(),x("span",Zw,[(g(!0),x(ne,null,pe(f.value,q=>(g(),x("span",{key:q.path.join("/"),class:"xui-cascader__tag"},[N("span",jw,$(q.label),1),N("span",{class:"xui-cascader__tag-close",role:"button","aria-label":"remove",onClick:jt(me=>R(q.path),["stop"])},"×",8,Mw)]))),128))]))],64)):(g(),x(ne,{key:1},[b.value?(g(),x("span",Dw,$(b.value),1)):(g(),x("span",Lw,$(a.placeholder??r(_).cascader.placeholder),1))],64)),a.clearable&&y.value&&!v.value.disabled?(g(),x("span",{key:2,class:"xui-cascader__clear",role:"button","aria-label":"clear",onClick:I[0]||(I[0]=jt(q=>r(h).clear(),["stop"]))},[M(j.$slots,"clearIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).clear},null,8,Vw))])])):(g(),x("span",{key:3,class:J(["xui-cascader__arrow",{"is-open":v.value.open}]),"aria-hidden":"true"},[M(j.$slots,"suffixIcon",{},()=>[(g(),x("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le)["arrow-down"]},null,8,Hw))])],2))],40,Ow),v.value.open?(g(),x("div",{key:0,id:r(u),class:"xui-cascader__panel",role:"dialog","aria-label":r(_).cascader.panel},[N("div",Fw,[(g(!0),x(ne,null,pe(C.value,(q,me)=>(g(),x("ul",{key:me,class:"xui-cascader__column",role:"listbox","aria-label":`level-${me}`},[(g(!0),x(ne,null,pe(q,V=>(g(),x("li",{key:V.value,class:J(["xui-cascader__item",{"is-active":v.value.activePath[me]===V.value,"is-disabled":V.disabled,"is-checked":a.multiple&&T(me,V)}]),role:"option","aria-selected":v.value.activePath[me]===V.value,"aria-disabled":V.disabled||void 0,onClick:oe=>!V.disabled&&r(h).select(me,V.value)},[a.multiple?(g(),x("span",Yw,[N("span",{class:J(["xui-cascader__checkbox-inner",{"is-checked":T(me,V),"is-indeterminate":w(me,V)}])},null,2)])):H("",!0),N("span",Pw,$(V.label),1),V.children&&V.children.length>0?(g(),x("span",Kw,[(g(),x("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)["arrow-right"]},null,8,Xw))])):H("",!0)],10,Gw))),128))],8,qw))),128))]),a.multiple?(g(),x("div",Qw,[N("button",{type:"button",class:"xui-cascader__footer-btn",onClick:I[2]||(I[2]=q=>r(h).checkAll())}," 全选 "),N("button",{type:"button",class:"xui-cascader__footer-btn",onClick:I[3]||(I[3]=q=>r(h).uncheckAll())}," 清空 ")])):H("",!0)],8,Iw)):H("",!0)],6))}}),Jw=["accept","multiple","disabled"],Ww={class:"xui-upload__actions"},eT=["disabled"],tT={class:"xui-upload__item-main"},nT=["src","alt"],aT=["title"],lT={class:"xui-upload__status"},iT={key:0,class:"xui-upload__speed"},oT={key:1,class:"xui-upload__remaining"},sT={key:0,class:"xui-upload__progress"},rT={class:"xui-upload__item-actions"},uT=["disabled","onClick"],cT=["disabled","onClick"],dT=["onClick"],mT=["onClick"],Md=D({__name:"Upload",props:{action:{},accept:{default:void 0},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxCount:{default:void 0},maxSize:{default:void 0},listType:{default:"text"},autoUpload:{type:Boolean,default:!0},requestUpload:{type:Function,default:void 0},beforeUpload:{type:Function,default:void 0},value:{default:void 0},defaultValue:{default:void 0},className:{},style:{}},emits:["change","remove"],setup(e,{expose:t,emit:n}){const a=e,l=n,i=ht("fileInput"),{value:o,defaultValue:s,disabled:u}=a,d=pv({action:a.action,multiple:a.multiple,disabled:u,maxCount:a.maxCount,maxSize:a.maxSize,listType:a.listType,autoUpload:a.autoUpload,requestUpload:a.requestUpload,beforeUpload:a.beforeUpload,value:o,defaultValue:s,onChange:_=>{l("change",_)},onRemove:_=>l("remove",_)}),p=F(d.getState()),m=d.subscribe(_=>{p.value=_});we(()=>{m()}),Ne(()=>{d.updateOptions({value:a.value,disabled:a.disabled})});const h=_=>{const T=_.target,w=T.files;w&&w.length>0&&d.selectFiles(w),T.value=""},v=()=>{var _;(_=i.value)==null||_.click()},k=()=>{d.clear()},S=()=>{d.submit()},C=_=>_===void 0||_<=0?"":_<1024?`${_.toFixed(0)} B/s`:_<1024*1024?`${(_/1024).toFixed(1)} KB/s`:`${(_/(1024*1024)).toFixed(1)} MB/s`,b=_=>{if(_===void 0||_<=0)return"";const T=Math.floor(_/60),w=Math.floor(_%60);return T>0?`${T}分${w}秒`:`${w}秒`},f=_=>URL.createObjectURL(_),y=Y(()=>p.value.fileList.some(_=>_.status==="pending"));return t({open:v,clear:k,submit:S}),(_,T)=>(g(),x("div",{class:J(["xui-upload",e.className]),style:he(e.style)},[N("input",{ref:"fileInput",type:"file",class:"xui-upload__input",accept:a.accept,multiple:a.multiple,disabled:p.value.disabled,style:{display:"none"},onChange:h},null,40,Jw),N("div",Ww,[M(_.$slots,"trigger",{},()=>[N("button",{type:"button",class:J(["xui-upload__trigger",{"is-disabled":p.value.disabled}]),disabled:p.value.disabled,onClick:v}," + 点击上传 ",10,eT)]),!a.autoUpload&&y.value?(g(),x("button",{key:0,type:"button",class:"xui-upload__submit-btn",onClick:S}," 开始上传 ")):H("",!0)]),p.value.fileList.length>0?(g(),x("ul",{key:0,class:J(["xui-upload__list",`xui-upload__list--${a.listType}`])},[(g(!0),x(ne,null,pe(p.value.fileList,w=>(g(),x("li",{key:w.uid,class:J(["xui-upload__item",`is-${w.status}`])},[M(_.$slots,"fileItem",{file:w},()=>{var R,A;return[N("div",tT,[a.listType==="picture"&&w.raw?(g(),x("img",{key:0,src:f(w.raw),alt:w.name,class:"xui-upload__thumbnail"},null,8,nT)):H("",!0),N("span",{class:"xui-upload__name",title:w.name},$(w.name),9,aT),N("span",lT,[w.status==="pending"?(g(),x(ne,{key:0},[G("待上传")],64)):w.status==="uploading"?(g(),x(ne,{key:1},[G($(w.percent)+"% ",1),w.speed?(g(),x("span",iT,$(C(w.speed)),1)):H("",!0),w.remainingTime?(g(),x("span",oT,"剩余 "+$(b(w.remainingTime)),1)):H("",!0)],64)):w.status==="done"?(g(),x(ne,{key:2},[G("✓ 成功")],64)):w.status==="error"?(g(),x(ne,{key:3},[G("✗ 失败")],64)):w.status==="cancelled"?(g(),x(ne,{key:4},[G("已取消")],64)):H("",!0)])]),w.status==="uploading"?(g(),x("div",sT,[N("div",{class:"xui-upload__progress-bar",style:he({width:w.percent+"%"})},null,4)])):H("",!0),N("div",rT,[p.value.fileList.length>1?(g(),x("button",{key:0,type:"button",class:"xui-upload__sort-btn","aria-label":"move up",disabled:((R=p.value.fileList[0])==null?void 0:R.uid)===w.uid,onClick:O=>r(d).move(w.uid,-1)}," ↑ ",8,uT)):H("",!0),p.value.fileList.length>1?(g(),x("button",{key:1,type:"button",class:"xui-upload__sort-btn","aria-label":"move down",disabled:((A=p.value.fileList[p.value.fileList.length-1])==null?void 0:A.uid)===w.uid,onClick:O=>r(d).move(w.uid,1)}," ↓ ",8,cT)):H("",!0),w.status==="uploading"?(g(),x("button",{key:2,type:"button",class:"xui-upload__cancel-btn","aria-label":"cancel",onClick:O=>r(d).cancel(w.uid)}," 取消 ",8,dT)):H("",!0),N("button",{type:"button",class:"xui-upload__remove","aria-label":"remove",onClick:O=>r(d).remove(w.uid)}," × ",8,mT)])]})],2))),128))],2)):H("",!0)],6))}}),pl=cS({locale:"zh-CN"}),pT=dh(pl),Ya=e=>e[pl.locale],U=()=>pl.locale==="zh-CN",sc=new Set,fT=e=>(sc.add(e),()=>{sc.delete(e)}),mp=()=>pl.locale,hT=e=>{pl.locale=e,sc.forEach(t=>t(e)),!(typeof document>"u")&&(document.documentElement.lang=e,gi(e))},vT=e=>{e!==pl.locale&&hT(e)},gT=e=>{pl.locale=e,!(typeof document>"u")&&(document.documentElement.lang=e,gi(e))},bT={hidden:"","aria-hidden":"true"},yT=D({__name:"LocaleSync",setup(e){const{lang:t}=$o(),n=a=>a==="en-US"?"en-US":"zh-CN";return gT(n(t.value)),Xe(t,a=>vT(n(a))),(a,l)=>(g(),x("span",bT))}}),ST=D({__name:"Layout",setup(e){const{isDark:t}=$o();return Xe(t,n=>Ar(n?"dark":"light"),{immediate:!0}),(n,a)=>(g(),ae(r(_h).Layout,null,{"layout-top":E(()=>[z(yT)]),_:1}))}}),xT=D({__name:"PageContent",setup(e){const{page:t}=$o();return(n,a)=>(g(),ae(Uo,{name:"xui-page",mode:"out-in"},{default:E(()=>[(g(),ae(r(dS),{key:r(t).relativePath}))]),_:1}))}}),_T=[{key:"basic",title:{"zh-CN":"基础组件","en-US":"Basic"}},{key:"form",title:{"zh-CN":"表单交互","en-US":"Form"}},{key:"display",title:{"zh-CN":"数据展示","en-US":"Data Display"}},{key:"navigation",title:{"zh-CN":"导航布局","en-US":"Navigation"}},{key:"feedback",title:{"zh-CN":"反馈提示","en-US":"Feedback"}}],CT=[{name:"Button",slug:"button",title:"按钮",category:"basic",available:!0},{name:"Input",slug:"input",title:"输入框",category:"basic",available:!0},{name:"Modal",slug:"modal",title:"对话框",category:"basic",available:!0},{name:"Switch",slug:"switch",title:"开关",category:"form",available:!0},{name:"Checkbox",slug:"checkbox",title:"复选框",category:"form",available:!0},{name:"Radio",slug:"radio",title:"单选框",category:"form",available:!0},{name:"Select",slug:"select",title:"下拉选择",category:"form",available:!0},{name:"DatePicker",slug:"date-picker",title:"日期选择",category:"form",available:!0},{name:"InputNumber",slug:"input-number",title:"数字输入框",category:"form",available:!0},{name:"Form",slug:"form",title:"表单",category:"form",available:!0},{name:"Cascader",slug:"cascader",title:"级联选择",category:"form",available:!0},{name:"TimePicker",slug:"time-picker",title:"时间选择",category:"form",available:!0},{name:"Upload",slug:"upload",title:"文件上传",category:"form",available:!0},{name:"Tag",slug:"tag",title:"标签",category:"display",available:!0},{name:"Progress",slug:"progress",title:"进度条",category:"display",available:!0},{name:"Badge",slug:"badge",title:"徽标数",category:"display",available:!0},{name:"Avatar",slug:"avatar",title:"头像",category:"display",available:!0},{name:"Empty",slug:"empty",title:"空状态",category:"display",available:!0},{name:"Skeleton",slug:"skeleton",title:"骨架屏",category:"display",available:!0},{name:"Table",slug:"table",title:"表格",category:"display",available:!0},{name:"Tabs",slug:"tabs",title:"标签页",category:"navigation",available:!0},{name:"Pagination",slug:"pagination",title:"分页",category:"navigation",available:!0},{name:"Breadcrumb",slug:"breadcrumb",title:"面包屑",category:"navigation",available:!0},{name:"Alert",slug:"alert",title:"警告提示",category:"feedback",available:!0},{name:"Message",slug:"message",title:"全局提示",category:"feedback",available:!0},{name:"Tooltip",slug:"tooltip",title:"文字提示",category:"feedback",available:!0},{name:"Spin",slug:"spin",title:"加载中",category:"feedback",available:!0},{name:"Popconfirm",slug:"popconfirm",title:"气泡确认",category:"feedback",available:!0}],kT={class:"demo-row"},NT=D({__name:"type",setup(e){return(t,n)=>(g(),x("div",kT,[z(r(W),null,{default:E(()=>[...n[0]||(n[0]=[G("Default",-1)])]),_:1}),z(r(W),{type:"primary"},{default:E(()=>[...n[1]||(n[1]=[G("Primary",-1)])]),_:1}),z(r(W),{type:"danger"},{default:E(()=>[...n[2]||(n[2]=[G("Danger",-1)])]),_:1}),z(r(W),{type:"link"},{default:E(()=>[...n[3]||(n[3]=[G("Link",-1)])]),_:1})]))}}),wT={class:"demo-column"},TT={class:"demo-row"},zT=D({__name:"size",setup(e){return(t,n)=>(g(),x("div",wT,[N("div",TT,[z(r(W),{size:"sm"},{default:E(()=>[...n[0]||(n[0]=[G("Small",-1)])]),_:1}),z(r(W),{size:"md"},{default:E(()=>[...n[1]||(n[1]=[G("Medium",-1)])]),_:1}),z(r(W),{size:"lg"},{default:E(()=>[...n[2]||(n[2]=[G("Large",-1)])]),_:1})]),z(r(W),{block:""},{default:E(()=>[G($(r(U)()?"Block（宽度撑满容器）":"Block (full width)"),1)]),_:1})]))}}),UT={class:"demo-row"},$T=D({__name:"state",setup(e){const t=F(!1),n=()=>{t.value=!0,setTimeout(()=>{t.value=!1},1500)};return(a,l)=>(g(),x("div",UT,[z(r(W),{disabled:""},{default:E(()=>[...l[0]||(l[0]=[G("Disabled",-1)])]),_:1}),z(r(W),{loading:""},{default:E(()=>[...l[1]||(l[1]=[G("Loading",-1)])]),_:1}),z(r(W),{type:"primary",loading:t.value,onClick:n},{default:E(()=>[G($(t.value?r(U)()?"提交中...":"Submitting...":r(U)()?"点击模拟提交":"Click to submit"),1)]),_:1},8,["loading"])]))}});var pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ET(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bv={exports:{}},Zr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RT=Symbol.for("react.transitional.element"),AT=Symbol.for("react.fragment");function yv(e,t,n){var a=null;if(n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),"key"in t){n={};for(var l in t)l!=="key"&&(n[l]=t[l])}else n=t;return t=n.ref,{$$typeof:RT,type:e,key:a,ref:t!==void 0?t:null,props:n}}Zr.Fragment=AT;Zr.jsx=yv;Zr.jsxs=yv;bv.exports=Zr;var c=bv.exports,Sv={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=Symbol.for("react.transitional.element"),OT=Symbol.for("react.portal"),BT=Symbol.for("react.fragment"),ZT=Symbol.for("react.strict_mode"),jT=Symbol.for("react.profiler"),MT=Symbol.for("react.consumer"),DT=Symbol.for("react.context"),LT=Symbol.for("react.forward_ref"),VT=Symbol.for("react.suspense"),HT=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),IT=Symbol.for("react.activity"),FT=Symbol.for("react.view_transition"),fp=Symbol.iterator;function qT(e){return e===null||typeof e!="object"?null:(e=fp&&e[fp]||e["@@iterator"],typeof e=="function"?e:null)}var _v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cv=Object.assign,kv={};function xi(e,t,n){this.props=e,this.context=t,this.refs=kv,this.updater=n||_v}xi.prototype.isReactComponent={};xi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nv(){}Nv.prototype=xi.prototype;function Ld(e,t,n){this.props=e,this.context=t,this.refs=kv,this.updater=n||_v}var Vd=Ld.prototype=new Nv;Vd.constructor=Ld;Cv(Vd,xi.prototype);Vd.isPureReactComponent=!0;var hp=Array.isArray;function rc(){}var Ve={H:null,A:null,T:null,S:null},wv=Object.prototype.hasOwnProperty;function Hd(e,t,n){var a=n.ref;return{$$typeof:Dd,type:e,key:t,ref:a!==void 0?a:null,props:n}}function GT(e,t){return Hd(e.type,t,e.props)}function Id(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dd}function YT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vp=/\/+/g;function cu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?YT(""+e.key):t.toString(36)}function PT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(rc,rc):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function xl(e,t,n,a,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Dd:case OT:o=!0;break;case xv:return o=e._init,xl(o(e._payload),t,n,a,l)}}if(o)return l=l(e),o=a===""?"."+cu(e,0):a,hp(l)?(n="",o!=null&&(n=o.replace(vp,"$&/")+"/"),xl(l,t,n,"",function(d){return d})):l!=null&&(Id(l)&&(l=GT(l,n+(l.key==null||e&&e.key===l.key?"":(""+l.key).replace(vp,"$&/")+"/")+o)),t.push(l)),1;o=0;var s=a===""?".":a+":";if(hp(e))for(var u=0;u<e.length;u++)a=e[u],i=s+cu(a,u),o+=xl(a,t,n,i,l);else if(u=qT(e),typeof u=="function")for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,i=s+cu(a,u++),o+=xl(a,t,n,i,l);else if(i==="object"){if(typeof e.then=="function")return xl(PT(e),t,n,a,l);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return o}function Ko(e,t,n){if(e==null)return e;var a=[],l=0;return xl(e,a,"","",function(i){return t.call(n,i,l++)}),a}function KT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a,n.status===void 0&&(n.status="fulfilled",n.value=a))},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a,n.status===void 0&&(n.status="rejected",n.reason=a))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var gp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Tv(e){var t=Ve.T,n={};n.types=t!==null?t.types:null,Ve.T=n;try{var a=e(),l=Ve.S;l!==null&&l(n,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(rc,gp)}catch(i){gp(i)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ve.T=t}}function zv(e){var t=Ve.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Tv(zv.bind(null,e))}var XT={map:Ko,forEach:function(e,t,n){Ko(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ko(e,function(){t++}),t},toArray:function(e){return Ko(e,function(t){return t})||[]},only:function(e){if(!Id(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ve.Activity=IT;ve.Children=XT;ve.Component=xi;ve.Fragment=BT;ve.Profiler=jT;ve.PureComponent=Ld;ve.StrictMode=ZT;ve.Suspense=VT;ve.ViewTransition=FT;ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ve;ve.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ve.H.useMemoCache(e)}};ve.addTransitionType=zv;ve.cache=function(e){return function(){return e.apply(null,arguments)}};ve.cacheSignal=function(){return null};ve.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=Cv({},e.props),l=e.key;if(t!=null)for(i in t.key!==void 0&&(l=""+t.key),t)!wv.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(a[i]=t[i]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var o=Array(i),s=0;s<i;s++)o[s]=arguments[s+2];a.children=o}return Hd(e.type,l,a)};ve.createContext=function(e){return e={$$typeof:DT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:MT,_context:e},e};ve.createElement=function(e,t,n){var a,l={},i=null;if(t!=null)for(a in t.key!==void 0&&(i=""+t.key),t)wv.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(l[a]=t[a]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var s=Array(o),u=0;u<o;u++)s[u]=arguments[u+2];l.children=s}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)l[a]===void 0&&(l[a]=o[a]);return Hd(e,i,l)};ve.createRef=function(){return{current:null}};ve.forwardRef=function(e){return{$$typeof:LT,render:e}};ve.isValidElement=Id;ve.lazy=function(e){return{$$typeof:xv,_payload:{_status:-1,_result:e},_init:KT}};ve.memo=function(e,t){return{$$typeof:HT,type:e,compare:t===void 0?null:t}};ve.startTransition=Tv;ve.unstable_useCacheRefresh=function(){return Ve.H.useCacheRefresh()};ve.use=function(e){return Ve.H.use(e)};ve.useActionState=function(e,t,n){return Ve.H.useActionState(e,t,n)};ve.useCallback=function(e,t){return Ve.H.useCallback(e,t)};ve.useContext=function(e){return Ve.H.useContext(e)};ve.useDebugValue=function(){};ve.useDeferredValue=function(e,t){return Ve.H.useDeferredValue(e,t)};ve.useEffect=function(e,t){return Ve.H.useEffect(e,t)};ve.useEffectEvent=function(e){return Ve.H.useEffectEvent(e)};ve.useId=function(){return Ve.H.useId()};ve.useImperativeHandle=function(e,t,n){return Ve.H.useImperativeHandle(e,t,n)};ve.useInsertionEffect=function(e,t){return Ve.H.useInsertionEffect(e,t)};ve.useLayoutEffect=function(e,t){return Ve.H.useLayoutEffect(e,t)};ve.useMemo=function(e,t){return Ve.H.useMemo(e,t)};ve.useOptimistic=function(e,t){return Ve.H.useOptimistic(e,t)};ve.useReducer=function(e,t,n){return Ve.H.useReducer(e,t,n)};ve.useRef=function(e){return Ve.H.useRef(e)};ve.useState=function(e){return Ve.H.useState(e)};ve.useSyncExternalStore=function(e,t,n){return Ve.H.useSyncExternalStore(e,t,n)};ve.useTransition=function(){return Ve.H.useTransition()};ve.version="19.3.0";Sv.exports=ve;var B=Sv.exports;function Te(e,t){const n=B.useRef(null);n.current===null&&(n.current=t());const a=B.useCallback(i=>e(o=>{n.current=o,i()}),[e]),l=B.useCallback(()=>n.current,[]);return B.useSyncExternalStore(a,l,l)}function re(...e){const t=[];for(const n of e)if(n){if(typeof n=="string"||typeof n=="number")t.push(String(n));else if(Array.isArray(n)){const a=re(...n);a&&t.push(a)}else if(typeof n=="object")for(const[a,l]of Object.entries(n))l&&t.push(a)}return t.join(" ")}function Zt(e){const{value:t,defaultValue:n,size:a="md",disabled:l=!1,loading:i=!1,checkedText:o,uncheckedText:s,checkedColor:u,uncheckedColor:d,beforeChange:p,className:m,style:h,onChange:v,renderLoadingIcon:k,renderCheckedIcon:S,renderUncheckedIcon:C,ref:b}=e,f=!!(o||s),y=B.useRef(null),_=B.useRef({onChange:v,beforeChange:p});_.current={onChange:v,beforeChange:p};const T=B.useRef(null);T.current===null&&(T.current=iv({value:t,defaultValue:n,disabled:l,loading:i,beforeChange:A=>{var O,L;return((L=(O=_.current).beforeChange)==null?void 0:L.call(O,A))??!0},onChange:A=>{var O,L;return(L=(O=_.current).onChange)==null?void 0:L.call(O,A)}}));const w=T.current;B.useEffect(()=>{w.updateOptions({value:t,disabled:l,loading:i})},[w,t,l,i]);const R=Te(w.subscribe,w.getState);return B.useImperativeHandle(b,()=>({focus:()=>{var A;return(A=y.current)==null?void 0:A.focus()},toggle:()=>w.toggle()}),[w]),c.jsx("button",{ref:y,type:"button",role:"switch",className:re("xui-switch",`xui-switch--${a}`,{"is-checked":R.checked,"is-disabled":R.disabled,"is-loading":R.loading,"xui-switch--has-text":f},m),style:{...h,...u?{"--xui-switch-checked-color":u}:{},...d?{"--xui-switch-unchecked-color":d}:{}},"aria-checked":R.checked,"aria-disabled":R.disabled||R.loading,disabled:R.disabled||R.loading,onClick:()=>w.toggle(),children:c.jsxs("span",{className:"xui-switch__core",children:[f&&c.jsxs("span",{className:"xui-switch__text-wrap",children:[o&&c.jsx("span",{className:"xui-switch__text xui-switch__text--checked",title:o,"aria-hidden":"true",children:o}),s&&c.jsx("span",{className:"xui-switch__text xui-switch__text--unchecked",title:s,"aria-hidden":"true",children:s})]}),c.jsx("span",{className:"xui-switch__thumb",children:R.loading?k?k():c.jsx(QT,{}):R.checked?S?S():c.jsx(JT,{}):C?C():c.jsx(WT,{})})]})})}function QT(){return c.jsx("svg",{className:"xui-switch__spinner",viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.loading}})}function JT(){return c.jsx("svg",{className:"xui-switch__icon xui-switch__icon--checked",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.check}})}function WT(){return c.jsx("svg",{className:"xui-switch__icon xui-switch__icon--unchecked",viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})}function _s(e){const{value:t,defaultValue:n,disabled:a=!1,indeterminate:l=!1,className:i,style:o,onChange:s,children:u,renderCheckIcon:d,renderIndeterminateIcon:p,ref:m}=e,h=B.useRef(null),v=B.useRef({onChange:s});v.current={onChange:s};const k=B.useRef(null);k.current===null&&(k.current=Hh({value:t,defaultValue:n,disabled:a,indeterminate:l,onChange:b=>{var f,y;return(y=(f=v.current).onChange)==null?void 0:y.call(f,b)}}));const S=k.current;B.useEffect(()=>{S.updateOptions({value:t,disabled:a,indeterminate:l})},[S,t,a,l]);const C=Te(S.subscribe,S.getState);return B.useEffect(()=>{h.current&&(h.current.indeterminate=C.indeterminate)},[C.indeterminate]),B.useImperativeHandle(m,()=>({focus:()=>{var b;return(b=h.current)==null?void 0:b.focus()},toggle:()=>S.toggle()}),[S]),c.jsxs("label",{className:re("xui-checkbox",{"is-checked":C.checked,"is-disabled":C.disabled,"is-indeterminate":C.indeterminate},i),style:o,children:[c.jsx("input",{ref:h,type:"checkbox",className:"xui-checkbox__input",checked:C.checked,disabled:C.disabled,"aria-disabled":C.disabled,onChange:()=>S.toggle()}),c.jsx("span",{className:"xui-checkbox__box","aria-hidden":"true",children:C.indeterminate?p?p():c.jsx(bp,{name:"minus"}):C.checked?d?d():c.jsx(bp,{name:"check"}):null}),u!=null&&c.jsx("span",{className:"xui-checkbox__label",children:u})]})}function bp({name:e}){return c.jsx("svg",{className:"xui-checkbox__icon",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le[e]}})}function Cn(e){const{type:t="default",size:n="md",closable:a=!1,className:l,style:i,onClose:o,renderCloseIcon:s,children:u}=e,d=B.useRef({onClose:o});d.current={onClose:o};const p=B.useRef(null);p.current===null&&(p.current=uv({closable:a,onClose:()=>{var v,k;return(k=(v=d.current).onClose)==null?void 0:k.call(v)}}));const m=p.current;B.useEffect(()=>{m.updateOptions({closable:a})},[m,a]);const h=Te(m.subscribe,m.getState);return h.visible?c.jsxs("span",{className:re("xui-tag",`xui-tag--${t}`,`xui-tag--${n}`,l),style:i,children:[u,h.closable&&c.jsx("button",{type:"button",className:"xui-tag__close","aria-label":"close",onClick:()=>m.handleClose(),children:s?s():c.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})})]}):null}function Tl(e){const{type:t="info",title:n,description:a,closable:l=!1,showIcon:i=!1,className:o,style:s,onClose:u,children:d,renderTitle:p,renderIcon:m,renderCloseIcon:h}=e,v=B.useRef({onClose:u});v.current={onClose:u};const k=B.useRef(null);k.current===null&&(k.current=Bh({closable:l,onClose:()=>{var y,_;return(_=(y=v.current).onClose)==null?void 0:_.call(y)}}));const S=k.current;B.useEffect(()=>{S.updateOptions({closable:l})},[S,l]);const C=Te(S.subscribe,S.getState);if(!C.visible)return null;const b=p!==void 0||n!==void 0,f=d!=null||a!==void 0;return c.jsxs("div",{className:re("xui-alert",`xui-alert--${t}`,o),style:s,role:"alert",children:[i&&c.jsx("div",{className:"xui-alert__icon","aria-hidden":"true",children:m?m():c.jsx(ez,{type:t})}),c.jsxs("div",{className:"xui-alert__content",children:[b&&c.jsx("div",{className:"xui-alert__title",children:p?p():n}),f&&c.jsx("div",{className:"xui-alert__description",children:d??a})]}),C.closable&&c.jsx("button",{type:"button",className:"xui-alert__close","aria-label":"close",onClick:()=>S.handleClose(),children:h?h():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})})]})}function ez({type:e}){return c.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le[e]}})}const Uv=B.createContext(null);function Cs(e){const{value:t,disabled:n=!1,className:a,style:l,children:i}=e,o=B.useRef(null);o.current===null&&(o.current=tv({disabled:n}));const s=o.current;B.useEffect(()=>{s.updateOptions({disabled:n})},[s,n]);const u=Te(s.subscribe,s.getState),d=B.useContext(Uv),p=d?d.groupValue===t:!1,m=u.disabled||(d?d.groupDisabled:!1),h=()=>{m||d==null||d.select(t)};return c.jsxs("label",{className:re("xui-radio",{"is-checked":p,"is-disabled":m},a),style:l,children:[c.jsx("input",{className:"xui-radio__input",type:"radio",name:d==null?void 0:d.name,value:t,checked:p,disabled:m,"aria-disabled":m,onChange:h}),c.jsx("span",{className:"xui-radio__dot","aria-hidden":"true"}),i!=null&&c.jsx("span",{className:"xui-radio__label",children:i})]})}function uc(e){const{value:t,defaultValue:n,disabled:a=!1,options:l,className:i,style:o,onChange:s,children:u}=e,d=`xui-radio-${B.useId()}`,p=B.useRef({onChange:s});p.current={onChange:s};const m=B.useRef(null);m.current===null&&(m.current=ev({value:t,defaultValue:n,disabled:a,onChange:S=>{var C,b;return(b=(C=p.current).onChange)==null?void 0:b.call(C,S)}}));const h=m.current;B.useEffect(()=>{h.updateOptions({value:t,disabled:a})},[h,t,a]);const v=Te(h.subscribe,h.getState),k=B.useMemo(()=>({name:d,groupValue:v.value,groupDisabled:v.disabled,select:S=>h.select(S)}),[d,v.value,v.disabled,h]);return c.jsx(Uv.Provider,{value:k,children:c.jsx("div",{className:re("xui-radio-group",i),style:o,role:"radiogroup",children:l&&l.length>0?l.map(S=>c.jsx(Cs,{value:S.value,disabled:S.disabled,children:S.label},S.value)):u})})}function Ki(e){const{percent:t=0,type:n="line",strokeWidth:a=6,showText:l=!0,status:i="normal",className:o,style:s}=e,u=B.useRef(null);u.current===null&&(u.current=Wh({percent:t,strokeWidth:a,status:i}));const d=u.current;B.useEffect(()=>{d.updateOptions({percent:t,strokeWidth:a,status:i})},[d,t,a,i]);const p=Te(d.subscribe,d.getState),m=`${Math.round(p.percent)}%`,h=(100-p.strokeWidth)/2,v=2*Math.PI*h,k=v*(1-p.percent/100);return c.jsx("div",{className:re("xui-progress",`xui-progress--${n}`,`is-${p.status}`,o),style:s,role:"progressbar","aria-valuenow":Math.round(p.percent),"aria-valuemin":0,"aria-valuemax":100,children:n==="circle"?c.jsxs(c.Fragment,{children:[c.jsxs("svg",{className:"xui-progress__svg",viewBox:"0 0 100 100","aria-hidden":"true",children:[c.jsx("circle",{className:"xui-progress__track",cx:50,cy:50,r:h,fill:"none",strokeWidth:p.strokeWidth}),c.jsx("circle",{className:"xui-progress__bar",cx:50,cy:50,r:h,fill:"none",strokeWidth:p.strokeWidth,strokeLinecap:"round",strokeDasharray:v,strokeDashoffset:k,transform:"rotate(-90 50 50)"})]}),l&&c.jsx("span",{className:"xui-progress__text xui-progress__text--circle",children:m})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"xui-progress__track",style:{height:`${p.strokeWidth}px`},children:c.jsx("div",{className:"xui-progress__bar",style:{width:`${p.percent}%`}})}),l&&c.jsx("span",{className:"xui-progress__text",children:m})]})})}function zl(e){const{count:t,max:n=99,dot:a=!1,showZero:l=!1,className:i,style:o,children:s}=e,u=B.useRef(null);u.current===null&&(u.current=jh({count:t,max:n,dot:a,showZero:l}));const d=u.current;B.useEffect(()=>{d.updateOptions({count:t,max:n,dot:a,showZero:l})},[d,t,n,a,l]);const p=Te(d.subscribe,d.getState);return s!=null?c.jsxs("span",{className:re("xui-badge",i),style:o,children:[s,p.visible?c.jsx("sup",{className:re("xui-badge__sup",{"is-dot":a}),"aria-hidden":a||void 0,children:p.text}):null]}):p.visible?c.jsx("sup",{className:re("xui-badge__sup","xui-badge__sup--standalone",{"is-dot":a}),"aria-hidden":a||void 0,children:p.text}):null}function ha(e){const{size:t="md",shape:n="circle",src:a,alt:l,className:i,style:o,onError:s,renderIcon:u,children:d}=e,p=B.useRef({onError:s});p.current={onError:s};const m=B.useRef(null);m.current===null&&(m.current=Zh({src:a,onError:()=>{var k,S;return(S=(k=p.current).onError)==null?void 0:S.call(k)}}));const h=m.current;B.useEffect(()=>{h.updateOptions({src:a})},[h,a]);const v=Te(h.subscribe,h.getState);return c.jsx("span",{className:re("xui-avatar",`xui-avatar--${t}`,`xui-avatar--${n}`,i),style:o,children:a&&!v.failed?c.jsx("img",{className:"xui-avatar__img",src:a,alt:l??"",onError:()=>h.handleError()}):d!=null?c.jsx("span",{className:"xui-avatar__inner",children:d}):u?u():c.jsx(tz,{})})}function tz(){return c.jsx("svg",{className:"xui-avatar__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.user}})}function cc(e){const{description:t,className:n,style:a,children:l,renderImage:i}=e,o=B.useRef(null);o.current===null&&(o.current=Ih({description:t}));const s=o.current;B.useEffect(()=>{s.updateOptions({description:t})},[s,t]);const u=Te(s.subscribe,s.getState);return c.jsxs("div",{className:re("xui-empty",n),style:a,children:[c.jsx("div",{className:"xui-empty__image","aria-hidden":"true",children:i?i():c.jsx(nz,{})}),u.description&&c.jsx("div",{className:"xui-empty__description",children:u.description}),l!=null&&c.jsx("div",{className:"xui-empty__footer",children:l})]})}function nz(){return c.jsx("svg",{className:"xui-empty__svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round",dangerouslySetInnerHTML:{__html:le.inbox}})}function On(){return Te($h,zh)}const az=30;function Gn(e){const{value:t,defaultValue:n,options:a,placeholder:l,disabled:i=!1,clearable:o=!1,multiple:s=!1,searchable:u=!1,virtual:d=!1,maxHeight:p=264,className:m,style:h,onChange:v,onClear:k,renderClearIcon:S,renderSuffixIcon:C,ref:b}=e,f=On(),y=B.useRef(null),_=B.useRef(null),T=B.useRef(null),w=B.useId(),R=B.useId(),A=B.useRef({onChange:v,onClear:k});A.current={onChange:v,onClear:k};const O=B.useRef(null);O.current===null&&(O.current=nv({value:t,defaultValue:n,options:a,disabled:i,clearable:o,multiple:s,searchable:u,onChange:ie=>{var Se,tt;return(tt=(Se=A.current).onChange)==null?void 0:tt.call(Se,ie)},onClear:()=>{var ie,Se;return(Se=(ie=A.current).onClear)==null?void 0:Se.call(ie)}}));const L=O.current,te=B.useRef(null);te.current===null&&(te.current=Or({itemCount:0,itemHeight:az,viewportHeight:0}));const j=te.current;B.useEffect(()=>{L.updateOptions({value:t,options:a,disabled:i,clearable:o,multiple:s,searchable:u})},[L,t,a,i,o,s,u]);const I=Te(L.subscribe,L.getState),q=Te(j.subscribe,j.getState);B.useImperativeHandle(b,()=>({focus:()=>{var ie;return(ie=_.current)==null?void 0:ie.focus()},toggleOpen:()=>L.toggleOpen(),close:()=>L.close()}),[L]);const[me,V]=B.useState(!1);B.useLayoutEffect(()=>{if(!I.open){V(!1);return}V(!1);const ie=()=>{const ue=y.current,Me=T.current;if(!ue||!Me)return;const xe=Me.getBoundingClientRect();if(xe.width===0&&xe.height===0)return;const{placement:qe}=yi(ue.getBoundingClientRect(),xe,Si(),{placement:"bottom",gap:4,viewportPadding:4});V(qe==="top")},Se=requestAnimationFrame(ie),tt=bi(ie);return()=>{cancelAnimationFrame(Se),tt()}},[I.open]),B.useEffect(()=>{d&&j.updateOptions({itemCount:I.filteredOptions.length,viewportHeight:p})}),B.useEffect(()=>{const ie=Se=>{y.current&&!y.current.contains(Se.target)&&L.close()};return document.addEventListener("mousedown",ie),()=>document.removeEventListener("mousedown",ie)},[L]);const oe=Ps(a??[]),X=oe.find(ie=>ie.value===I.value),Z=s?(Array.isArray(I.value)?I.value:[]).map(ie=>{const Se=oe.find(tt=>tt.value===ie);return{value:ie,label:(Se==null?void 0:Se.label)??ie}}):[],P=s?Z.length>0:I.value!==null,Q=I.filteredOptions,ce=I.groupedOptions.length>0,Ie=d&&!ce,Fe=Ie?Q.slice(q.startIndex,q.endIndex+1):Q,dt={maxHeight:`${p}px`,...d?{height:`${p}px`}:{}};B.useEffect(()=>{var ie,Se;!I.open||!u||(Se=(ie=T.current)==null?void 0:ie.querySelector(".xui-select__search"))==null||Se.focus()},[I.open,u]),B.useEffect(()=>{d&&(j.scrollTo(0),T.current&&(T.current.scrollTop=0))},[I.searchQuery,d,j]),B.useEffect(()=>{var ie,Se;!I.open||I.activeIndex===-1||(Se=(ie=document.getElementById(`${R}-option-${I.activeIndex}`))==null?void 0:ie.scrollIntoView)==null||Se.call(ie,{block:"nearest"})},[I.open,I.activeIndex,R]);const Tt=ie=>{switch(ie.key){case"Enter":case" ":ie.preventDefault(),I.open?L.confirmHighlight():L.toggleOpen();break;case"Escape":I.open&&(ie.preventDefault(),L.close());break;case"ArrowDown":ie.preventDefault(),I.open?L.moveHighlight(1):L.toggleOpen();break;case"ArrowUp":ie.preventDefault(),I.open?L.moveHighlight(-1):L.toggleOpen();break}},ia=ie=>{switch(ie.key){case"Enter":ie.preventDefault(),L.confirmHighlight();break;case"ArrowDown":ie.preventDefault(),L.moveHighlight(1);break;case"ArrowUp":ie.preventDefault(),L.moveHighlight(-1);break;case"Escape":ie.preventDefault(),L.close();break}},gn=ie=>s?Array.isArray(I.value)&&I.value.includes(ie):I.value===ie;return c.jsxs("div",{ref:y,className:re("xui-select",m,s&&"is-multiple",d&&"is-virtual",{"is-disabled":I.disabled,"is-open":I.open,"is-drop-up":me}),style:h,children:[c.jsxs("div",{ref:_,id:w,className:"xui-select__trigger",role:"combobox","aria-expanded":I.open,"aria-haspopup":"listbox","aria-controls":I.open?R:void 0,"aria-activedescendant":I.open&&I.activeIndex!==-1?`${R}-option-${I.activeIndex}`:void 0,"aria-disabled":I.disabled||void 0,tabIndex:I.disabled?-1:0,onClick:()=>L.toggleOpen(),onKeyDown:Tt,children:[s?c.jsxs("span",{className:"xui-select__tags",children:[Z.map(ie=>c.jsxs("span",{className:"xui-select__tag",children:[c.jsx("span",{className:"xui-select__tag-label",children:ie.label}),c.jsx("span",{className:"xui-select__tag-close",role:"button","aria-label":"remove",onClick:Se=>{Se.stopPropagation(),L.select(ie.value)},children:S?S():c.jsx("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clear}})})]},ie.value)),Z.length===0&&c.jsx("span",{className:"xui-select__placeholder",children:l??f.select.triggerPlaceholder})]}):X?c.jsx("span",{className:"xui-select__value",children:X.label}):c.jsx("span",{className:"xui-select__placeholder",children:l??f.select.triggerPlaceholder}),o&&P&&!I.disabled?c.jsx("span",{className:"xui-select__clear",role:"button","aria-label":"clear",onClick:ie=>{ie.stopPropagation(),L.clear()},children:S?S():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clear}})}):c.jsx("span",{className:"xui-select__arrow","aria-hidden":"true",children:C?C():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-down"]}})})]}),I.open&&c.jsxs("ul",{ref:T,id:R,className:"xui-select__dropdown",role:"listbox","aria-labelledby":w,"aria-multiselectable":s||void 0,style:dt,onScroll:ie=>j.scrollTo(ie.currentTarget.scrollTop),children:[u&&c.jsx("li",{role:"presentation",className:"xui-select__search-item",children:c.jsx("input",{className:"xui-select__search",type:"text",role:"searchbox",placeholder:f.select.searchPlaceholder,value:I.searchQuery,"aria-label":f.select.searchAriaLabel,onChange:ie=>L.setSearch(ie.currentTarget.value),onKeyDown:ia,onClick:ie=>ie.stopPropagation()})}),Q.length>0?c.jsxs(c.Fragment,{children:[Ie&&q.offsetY>0&&c.jsx("li",{className:"xui-select__spacer",style:{height:`${q.offsetY}px`},"aria-hidden":"true"}),ce?I.groupedOptions.map(ie=>c.jsxs("li",{className:"xui-select__group",role:"presentation",children:[c.jsx("div",{className:"xui-select__group-title",children:ie.label}),ie.options.map(Se=>{const tt=Q.findIndex(ue=>ue.value===Se.value);return c.jsx("div",{id:tt>=0?`${R}-option-${tt}`:void 0,className:re("xui-select__option",{"is-selected":gn(Se.value),"is-active":tt===I.activeIndex,"is-disabled":Se.disabled}),role:"option","aria-selected":gn(Se.value),"aria-disabled":Se.disabled||void 0,onClick:()=>L.select(Se.value),children:Se.label},Se.value)})]},ie.label)):Fe.map((ie,Se)=>{const tt=Ie?q.startIndex+Se:Se;return c.jsx("li",{id:`${R}-option-${tt}`,className:re("xui-select__option",{"is-selected":gn(ie.value),"is-active":tt===I.activeIndex,"is-disabled":ie.disabled}),role:"option","aria-selected":gn(ie.value),"aria-disabled":ie.disabled||void 0,onClick:()=>L.select(ie.value),children:ie.label},ie.value)}),Ie&&q.fillerHeight>0&&c.jsx("li",{className:"xui-select__spacer",style:{height:`${q.fillerHeight}px`},"aria-hidden":"true"})]}):c.jsx("li",{className:"xui-select__empty",role:"presentation",children:"无匹配结果"})]})]})}function $v(e){const{value:t,defaultValue:n,items:a,className:l,style:i,onChange:o,renderPanel:s}=e,u=B.useRef(null),d=B.useId(),p=B.useRef({onChange:o});p.current={onChange:o};const m=B.useRef(null);m.current===null&&(m.current=rv({value:t,defaultValue:n,items:a,onChange:b=>{var f,y;return(y=(f=p.current).onChange)==null?void 0:y.call(f,b)}}));const h=m.current;B.useEffect(()=>{h.updateOptions({value:t,items:a})},[h,t,a]);const v=Te(h.subscribe,h.getState),k=B.useRef(v.value);B.useEffect(()=>{var b,f;v.value!==null&&v.value!==k.current&&((f=(b=u.current)==null?void 0:b.querySelector(`[data-value="${v.value.replace(/"/g,'\\"')}"]`))==null||f.focus()),k.current=v.value},[v.value]);const S=a==null?void 0:a.find(b=>b.value===v.value),C=b=>{b.key!=="ArrowRight"&&b.key!=="ArrowLeft"||(b.preventDefault(),h.moveActive(b.key==="ArrowRight"?1:-1))};return c.jsxs("div",{ref:u,className:re("xui-tabs",l),style:i,children:[c.jsx("div",{className:"xui-tabs__list",role:"tablist",onKeyDown:C,children:(a??[]).map(b=>c.jsx("button",{id:`${d}-tab-${b.value}`,type:"button",className:re("xui-tabs__tab",{"is-active":b.value===v.value,"is-disabled":b.disabled}),role:"tab","aria-selected":b.value===v.value,"aria-disabled":b.disabled||void 0,"aria-controls":`${d}-panel-${b.value}`,tabIndex:b.value===v.value?0:-1,"data-value":b.value,onClick:()=>h.activate(b.value),children:b.label},b.value))}),S&&c.jsx("div",{id:`${d}-panel-${S.value}`,className:"xui-tabs__panel",role:"tabpanel","aria-labelledby":`${d}-tab-${S.value}`,children:s?s(S):S.label})]})}var Ev={exports:{}},jr={},Rv={exports:{}},Av={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(V,oe){var X=V.length;V.push(oe);e:for(;0<X;){var Z=X-1>>>1,P=V[Z];if(0<l(P,oe))V[Z]=oe,V[X]=P,X=Z;else break e}}function n(V){return V.length===0?null:V[0]}function a(V){if(V.length===0)return null;var oe=V[0],X=V.pop();if(X!==oe){V[0]=X;e:for(var Z=0,P=V.length,Q=P>>>1;Z<Q;){var ce=2*(Z+1)-1,Ie=V[ce],Fe=ce+1,dt=V[Fe];if(0>l(Ie,X))Fe<P&&0>l(dt,Ie)?(V[Z]=dt,V[Fe]=X,Z=Fe):(V[Z]=Ie,V[ce]=X,Z=ce);else if(Fe<P&&0>l(dt,X))V[Z]=dt,V[Fe]=X,Z=Fe;else break e}}return oe}function l(V,oe){var X=V.sortIndex-oe.sortIndex;return X!==0?X:V.id-oe.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],p=1,m=null,h=3,v=!1,k=!1,S=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function _(V){for(var oe=n(d);oe!==null;){if(oe.callback===null)a(d);else if(oe.startTime<=V)a(d),oe.sortIndex=oe.expirationTime,t(u,oe);else break;oe=n(d)}}function T(V){if(S=!1,_(V),!k)if(n(u)!==null)k=!0,w||(w=!0,j());else{var oe=n(d);oe!==null&&me(T,oe.startTime-V)}}var w=!1,R=-1,A=5,O=-1;function L(){return C?!0:!(e.unstable_now()-O<A)}function te(){if(C=!1,w){var V=e.unstable_now();O=V;var oe=!0;try{e:{k=!1,S&&(S=!1,f(R),R=-1),v=!0;var X=h;try{t:{for(_(V),m=n(u);m!==null&&!(m.expirationTime>V&&L());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,h=m.priorityLevel;var P=Z(m.expirationTime<=V);if(V=e.unstable_now(),typeof P=="function"){m.callback=P,_(V),oe=!0;break t}m===n(u)&&a(u),_(V)}else a(u);m=n(u)}if(m!==null)oe=!0;else{var Q=n(d);Q!==null&&me(T,Q.startTime-V),oe=!1}}break e}finally{m=null,h=X,v=!1}oe=void 0}}finally{oe?j():w=!1}}}var j;if(typeof y=="function")j=function(){y(te)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,q=I.port2;I.port1.onmessage=te,j=function(){q.postMessage(null)}}else j=function(){b(te,0)};function me(V,oe){R=b(function(){V(e.unstable_now())},oe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_next=function(V){switch(h){case 1:case 2:case 3:var oe=3;break;default:oe=h}var X=h;h=oe;try{return V()}finally{h=X}},e.unstable_requestPaint=function(){C=!0},e.unstable_runWithPriority=function(V,oe){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=h;h=V;try{return oe()}finally{h=X}},e.unstable_scheduleCallback=function(V,oe,X){var Z=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Z+X:Z):X=Z,V){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=X+P,V={id:p++,callback:oe,priorityLevel:V,startTime:X,expirationTime:P,sortIndex:-1},X>Z?(V.sortIndex=X,t(d,V),n(u)===null&&V===n(d)&&(S?(f(R),R=-1):S=!0,me(T,X-Z))):(V.sortIndex=P,t(u,V),k||v||(k=!0,w||(w=!0,j()))),V},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(V){var oe=h;return function(){var X=h;h=oe;try{return V.apply(this,arguments)}finally{h=X}}}})(Av);Rv.exports=Av;var lz=Rv.exports,Ov={exports:{}},xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iz=B;function Bv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function oa(){}var Nt={d:{f:oa,r:function(){throw Error(Bv(522))},D:oa,C:oa,L:oa,m:oa,X:oa,S:oa,M:oa},p:0,findDOMNode:null},oz=Symbol.for("react.portal"),sz=Symbol.for("react.recoverable"),yp=Symbol.for("react.optimistic_key");function rz(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oz,key:a==null?null:a===yp?yp:""+a,children:e,containerInfo:t,implementation:n}}var Xi=iz.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Mr(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Nt;xt.browser=function(e){return{$$typeof:sz,_reason:e}};xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Bv(299));return rz(e,t,null,n)};xt.flushSync=function(e){var t=Xi.T,n=Nt.p;try{if(Xi.T=null,Nt.p=2,e)return e()}finally{Xi.T=t,Nt.p=n,Nt.d.f()}};xt.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Nt.d.C(e,t))};xt.prefetchDNS=function(e){typeof e=="string"&&Nt.d.D(e)};xt.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,a=Mr(n,t.crossOrigin),l=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Nt.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:l,fetchPriority:i}):n==="script"&&Nt.d.X(e,{crossOrigin:a,integrity:l,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};xt.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Mr(t.as,t.crossOrigin);Nt.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Nt.d.M(e)};xt.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,a=Mr(n,t.crossOrigin);Nt.d.L(e,n,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};xt.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Mr(t.as,t.crossOrigin);Nt.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Nt.d.m(e)};xt.requestFormReset=function(e){Nt.d.r(e)};xt.unstable_batchedUpdates=function(e,t){return e(t)};xt.useFormState=function(e,t,n){return Xi.H.useFormState(e,t,n)};xt.useFormStatus=function(){return Xi.H.useHostTransitionStatus()};xt.version="19.3.0";function Zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv)}catch(e){console.error(e)}}Zv(),Ov.exports=xt;var jv=Ov.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=lz,Mv=B,uz=jv;function K(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Dv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oo(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Lv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sp(e){if(Oo(e)!==e)throw Error(K(188))}function cz(e){var t=e.alternate;if(!t){if(t=Oo(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Sp(l),e;if(i===a)return Sp(l),t;i=i.sibling}throw Error(K(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,a=i;break}if(s===a){o=!0,a=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,a=l;break}if(s===a){o=!0,a=i,n=l;break}s=s.sibling}if(!o)throw Error(K(189))}}if(n.alternate!==a)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function Hv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Hv(e),t!==null)return t;e=e.sibling}return null}function Dt(e,t,n,a,l,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,a,l,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Dt(e.child,t,n,a,l,i))return!0;e=e.sibling}return!1}function fl(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function xp(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Iv(e){var t=[null,null],n=fl(e);return n===null||Fv(t,e,n.child,{foundSelf:!1}),t}function Fv(e,t,n,a){for(;n!==null;){if(n===t)a.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(a.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Fv(e,t,n.child,a))return!0;n=n.sibling}return!1}function at(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(K(559))}}var Ul=null,dc=null;function dz(e,t,n){return e===n?!0:e===t?(Ul=e,!0):!1}function mz(e,t,n){return e===n?(dc=e,!1):e===t?(dc!==null&&(Ul=e),!0):!1}function _p(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function mc(e,t,n){for(var a=0,l=e;l;l=n(l))a++;l=0;for(var i=t;i;i=n(i))l++;for(;0<a-l;)e=n(e),a--;for(;0<l-a;)t=n(t),l--;for(;a--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var je=Object.assign,pz=Symbol.for("react.element"),Xo=Symbol.for("react.transitional.element"),Vi=Symbol.for("react.portal"),$l=Symbol.for("react.fragment"),qv=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),Gv=Symbol.for("react.consumer"),Nn=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),qd=Symbol.for("react.memo"),ca=Symbol.for("react.lazy"),vc=Symbol.for("react.activity"),fz=Symbol.for("react.legacy_hidden"),hz=Symbol.for("react.memo_cache_sentinel"),gc=Symbol.for("react.view_transition"),vz=Symbol.for("react.recoverable"),Cp=Symbol.iterator;function Ei(e){return e===null||typeof e!="object"?null:(e=Cp&&e[Cp]||e["@@iterator"],typeof e=="function"?e:null)}var gz=Symbol.for("react.client.reference");function bc(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gz?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $l:return"Fragment";case pc:return"Profiler";case qv:return"StrictMode";case fc:return"Suspense";case hc:return"SuspenseList";case vc:return"Activity";case gc:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Vi:return"Portal";case Nn:return e.displayName||"Context";case Gv:return(e._context.displayName||"Context")+".Consumer";case Fd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qd:return t=e.displayName||null,t!==null?t:bc(e.type)||"Memo";case ca:t=e._payload,e=e._init;try{return bc(e(t))}catch{}}return null}var Hi=Array.isArray,fe=Mv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$e=uz.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xa={pending:!1,data:null,method:null,action:null},yc=[],El=-1;function Bn(e){return{current:e}}function vt(e){0>El||(e.current=yc[El],yc[El]=null,El--)}function He(e,t){El++,yc[El]=e.current,e.current=t}var $n=Bn(null),po=Bn(null),Ca=Bn(null),Xs=Bn(null);function Qs(e,t){switch(He(Ca,t),He(po,e),He($n,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jf(t),e=fy(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt($n),He($n,e)}function ni(){vt($n),vt(po),vt(Ca)}function Sc(e){var t=e.memoizedState;t!==null&&(mi._currentValue=t.memoizedState,He(Xs,e)),t=$n.current;var n=fy(t,e.type);t!==n&&(He(po,e),He($n,n))}function Js(e){po.current===e&&(vt($n),vt(po)),Xs.current===e&&(vt(Xs),mi._currentValue=Xa)}var du,kp;function ra(e){if(du===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);du=t&&t[1]||"",kp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+du+e+kp}var mu=!1;function pu(e,t){if(!e||mu)return"";mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(k){var h=k}Reflect.construct(e,[],m)}else{try{m.call()}catch(k){h=k}m=!1;try{var v=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),m=!0,new e}finally{m&&(v!==void 0?Object.defineProperty(e.prototype,"props",v):delete e.prototype.props)}}}else{try{throw Error()}catch(k){h=k}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(k){if(k&&h&&typeof k.stack=="string")return[k.stack,h.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var u=o.split(`
`),d=s.split(`
`);for(l=a=0;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;for(;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;if(a===u.length||l===d.length)for(a=u.length-1,l=d.length-1;1<=a&&0<=l&&u[a]!==d[l];)l--;for(;1<=a&&0<=l;a--,l--)if(u[a]!==d[l]){if(a!==1||l!==1)do if(a--,l--,0>l||u[a]!==d[l]){var p=`
`+u[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=l);break}}}finally{mu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ra(n):""}function bz(e,t){switch(e.tag){case 26:case 27:case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return e.child!==t&&t!==null?ra("Suspense Fallback"):ra("Suspense");case 19:return ra("SuspenseList");case 0:case 15:return pu(e.type,!1);case 11:return pu(e.type.render,!1);case 1:return pu(e.type,!0);case 31:return ra("Activity");case 30:return ra("ViewTransition");default:return""}}function Np(e){try{var t="",n=null;do t+=bz(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var xc=Object.prototype.hasOwnProperty,Gd=lt.unstable_scheduleCallback,fu=lt.unstable_cancelCallback,yz=lt.unstable_shouldYield,Sz=lt.unstable_requestPaint,Yt=lt.unstable_now,xz=lt.unstable_getCurrentPriorityLevel,Yv=lt.unstable_ImmediatePriority,Pv=lt.unstable_UserBlockingPriority,Ws=lt.unstable_NormalPriority,_z=lt.unstable_LowPriority,Kv=lt.unstable_IdlePriority,Cz=lt.log,kz=lt.unstable_setDisableYieldValue,Bo=null,Pt=null;function va(e){if(typeof Cz=="function"&&kz(e),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Bo,e)}catch{}}var Kt=Math.clz32?Math.clz32:Tz,Nz=Math.log,wz=Math.LN2;function Tz(e){return e>>>=0,e===0?32:31-(Nz(e)/wz|0)|0}var Qo=256,Jo=262144,Wo=4194304;function Fa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dr(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?l=Fa(a):(o&=s,o!==0?l=Fa(o):n||(n=s&~e,n!==0&&(l=Fa(n))))):(s=a&~i,s!==0?l=Fa(s):o!==0?l=Fa(o):n||(n=a&~e,n!==0&&(l=Fa(n)))),l===0?0:t!==0&&t!==l&&!(t&i)&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Zo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xv(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-Kt(n),l=1<<a;t|=e[a],n&=~l}return t}function zz(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qv(){var e=Wo;return Wo<<=1,!(Wo&62914560)&&(Wo=4194304),e}function hu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Uz(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,u=e.expirationTimes,d=e.hiddenUpdates;for(n=o&~n;0<n;){var p=31-Kt(n),m=1<<p;s[p]=0,u[p]=-1;var h=d[p];if(h!==null)for(d[p]=null,p=0;p<h.length;p++){var v=h[p];v!==null&&(v.lane&=-536870913)}n&=~m}a!==0&&Jv(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Jv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Kt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Wv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Kt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function eg(e,t){var n=t&-t;return n=n&42?1:Yd(n),n&(e.suspendedLanes|t)?0:n}function Yd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pd(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function tg(){var e=$e.p;return e!==0?e:(e=window.event,e===void 0?32:By(e.type))}function wp(e,t){var n=$e.p;try{return $e.p=e,t()}finally{$e.p=n}}var na=Math.random().toString(36).slice(2),pt="__reactFiber$"+na,Lt="__reactProps$"+na,_i="__reactContainer$"+na,Tp="__reactEvents$"+na,$z="__reactListeners$"+na,Ez="__reactHandles$"+na,zp="__reactResources$"+na,Mo="__reactMarker$"+na,er="__reactLoad$"+na;function Lr(e){delete e[pt],delete e[Lt],delete e[$z],delete e[Ez]}function Pa(e){var t;if(t=e[pt])return t;for(var n=e.parentNode;n;){if(t=n[_i]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qf(e);e!==null;){if(n=e[pt])return n;e=qf(e)}return t}e=n,n=e.parentNode}return null}function Ci(e){if(e=e[pt]||e[_i]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ii(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(K(33))}function Il(e){var t=e[zp];return t||(t=e[zp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rt(e){e[Mo]=!0}function ng(e){e[er]=void 0}var ag=new Set,lg={};function hl(e,t){ai(e,t),ai(e+"Capture",t)}function ai(e,t){for(lg[e]=t,e=0;e<t.length;e++)ag.add(t[e])}var Rz=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Up={},$p={};function Az(e){return xc.call($p,e)?!0:xc.call(Up,e)?!1:Rz.test(e)?$p[e]=!0:(Up[e]=!0,!1)}var ze=!1;function Ep(){var e=ze;return ze=!1,e}function ks(e,t,n){if(Az(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function es(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function jn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,a)}}function It(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ig(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oz(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _c(e){if(!e._valueTracker){var t=ig(e)?"checked":"value";e._valueTracker=Oz(e,t,""+e[t])}}function og(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ig(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}var Bz=/[\n"\\]/g;function an(e){return e.replace(Bz,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cc(e,t,n,a,l,i,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+It(t)):e.value!==""+It(t)&&(e.value=""+It(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?o==="number"&&e.value==t?vu(e,It(e.value)):vu(e,It(t)):n!=null?vu(e,It(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+It(s):e.removeAttribute("name")}function sg(e,t,n,a,l,i,o,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){_c(e);return}n=n!=null?""+It(n):"",t=t!=null?""+It(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),_c(e)}function vu(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Fl(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function rg(e,t,n){if(t!=null&&(t=""+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+It(n):""}function ug(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(K(92));if(Hi(a)){if(1<a.length)throw Error(K(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=It(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),_c(e)}function li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zz=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rp(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Zz.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function cg(e,t,n){if(t!=null&&typeof t!="object")throw Error(K(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",ze=!0);for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&(Rp(e,l,a),ze=!0)}else for(var i in t)t.hasOwnProperty(i)&&Rp(e,i,t[i])}function Kd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jz=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mz=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ns(e){return Mz.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function wn(){}var kc=null;function Xd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rl=null,ql=null;function Ap(e){var t=Ci(e);if(t&&(e=t.stateNode)){var n=e[Lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+an(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Lt]||null;if(!l)throw Error(K(90));Cc(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&og(a)}break e;case"textarea":rg(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Fl(e,!!n.multiple,t,!1)}}}var gu=!1;function dg(e,t,n){if(gu)return e(t,n);gu=!0;try{var a=e(t);return a}finally{if(gu=!1,(Rl!==null||ql!==null)&&(eu(),Rl&&(t=Rl,e=ql,ql=Rl=null,Ap(t),e)))for(t=0;t<e.length;t++)Ap(e[t])}}function fo(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Lt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=!1;if(Kn)try{var Ri={};Object.defineProperty(Ri,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",Ri,Ri),window.removeEventListener("test",Ri,Ri)}catch{Nc=!1}var ga=null,Qd=null,ws=null;function mg(){if(ws)return ws;var e,t=Qd,n=t.length,a,l="value"in ga?ga.value:ga.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return ws=l.slice(e,1<a?1-a:void 0)}function Ts(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function Op(){return!1}function wt(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ts:Op,this.isPropagationStopped=Op,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vr=wt(La),Do=je({},La,{view:0,detail:0}),Dz=wt(Do),bu,yu,Ai,Hr=je({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ai&&(Ai&&e.type==="mousemove"?(bu=e.screenX-Ai.screenX,yu=e.screenY-Ai.screenY):yu=bu=0,Ai=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:yu}}),Bp=wt(Hr),Lz=je({},Hr,{dataTransfer:0}),Vz=wt(Lz),Hz=je({},Do,{relatedTarget:0}),Su=wt(Hz),Iz=je({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),Fz=wt(Iz),qz=je({},La,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gz=wt(qz),Yz=je({},La,{data:0}),Zp=wt(Yz),Pz={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xz={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qz(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xz[e])?!!t[e]:!1}function Jd(){return Qz}var Jz=je({},Do,{key:function(e){if(e.key){var t=Pz[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kz[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(e){return e.type==="keypress"?Ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wz=wt(Jz),e2=je({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=wt(e2),t2=je({},La,{submitter:0}),n2=wt(t2),a2=je({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),l2=wt(a2),i2=je({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),o2=wt(i2),s2=je({},Hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r2=wt(s2),u2=je({},La,{newState:0,oldState:0,source:0}),c2=wt(u2),d2=[9,13,27,32],Wd=Kn&&"CompositionEvent"in window,Qi=null;Kn&&"documentMode"in document&&(Qi=document.documentMode);var m2=Kn&&"TextEvent"in window&&!Qi,pg=Kn&&(!Wd||Qi&&8<Qi&&11>=Qi),Mp=" ",Dp=!1;function fg(e,t){switch(e){case"keyup":return d2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Al=!1;function p2(e,t){switch(e){case"compositionend":return hg(t);case"keypress":return t.which!==32?null:(Dp=!0,Mp);case"textInput":return e=t.data,e===Mp&&Dp?null:e;default:return null}}function f2(e,t){if(Al)return e==="compositionend"||!Wd&&fg(e,t)?(e=mg(),ws=Qd=ga=null,Al=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pg&&t.locale!=="ko"?null:t.data;default:return null}}var h2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!h2[e.type]:t==="textarea"}function vg(e,t,n,a){Rl?ql?ql.push(a):ql=[a]:Rl=a,t=_r(t,"onChange"),0<t.length&&(n=new Vr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ji=null,ho=null;function v2(e){dy(e,0)}function Ir(e){var t=Ii(e);if(og(t))return e}function Vp(e,t){if(e==="change")return t}var gg=!1;if(Kn){var xu;if(Kn){var _u="oninput"in document;if(!_u){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),_u=typeof Hp.oninput=="function"}xu=_u}else xu=!1;gg=xu&&(!document.documentMode||9<document.documentMode)}function Ip(){Ji&&(Ji.detachEvent("onpropertychange",bg),ho=Ji=null)}function bg(e){if(e.propertyName==="value"&&Ir(ho)){var t=[];vg(t,ho,e,Xd(e)),dg(v2,t)}}function g2(e,t,n){e==="focusin"?(Ip(),Ji=t,ho=n,Ji.attachEvent("onpropertychange",bg)):e==="focusout"&&Ip()}function b2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ir(ho)}function y2(e,t){if(e==="click")return Ir(t)}function S2(e,t){if(e==="input"||e==="change")return Ir(t)}function x2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:x2;function vo(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!xc.call(t,l)||!Qt(e[l],t[l]))return!1}return!0}function wc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,t){var n=Fp(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fp(n)}}function yg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wc(e.document)}return t}function em(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _2=Kn&&"documentMode"in document&&11>=document.documentMode,Ol=null,Tc=null,Wi=null,zc=!1;function Gp(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zc||Ol==null||Ol!==wc(a)||(a=Ol,"selectionStart"in a&&em(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wi&&vo(Wi,a)||(Wi=a,a=_r(Tc,"onSelect"),0<a.length&&(t=new Vr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ol)))}function Ha(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bl={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Cu={},xg={};Kn&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete Bl.animationend.animation,delete Bl.animationiteration.animation,delete Bl.animationstart.animation),"TransitionEvent"in window||delete Bl.transitionend.transition);function vl(e){if(Cu[e])return Cu[e];if(!Bl[e])return e;var t=Bl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xg)return Cu[e]=t[n];return e}var _g=vl("animationend"),Cg=vl("animationiteration"),kg=vl("animationstart"),C2=vl("transitionrun"),k2=vl("transitionstart"),N2=vl("transitioncancel"),Ng=vl("transitionend"),wg=new Map,Uc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uc.push("scrollEnd");function vn(e,t){wg.set(e,t),hl(t,[e])}var w2=0;function Xn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=hn.identifierPrefix;var n=w2++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Yp(e){if(e==null||typeof e=="string")return e;var t=null,n=Jl;if(n!==null)for(var a=0;a<n.length;a++){var l=e[n[a]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function aa(e,t){return e=Yp(e),t=Yp(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var tr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},en=[],Zl=0,tm=0;function Fr(){for(var e=Zl,t=tm=Zl=0;t<e;){var n=en[t];en[t++]=null;var a=en[t];en[t++]=null;var l=en[t];en[t++]=null;var i=en[t];if(en[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&Tg(n,l,i)}}function qr(e,t,n,a){en[Zl++]=e,en[Zl++]=t,en[Zl++]=n,en[Zl++]=a,tm|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function nm(e,t,n,a){return qr(e,t,n,a),nr(e)}function gl(e,t){return qr(e,null,null,t),nr(e)}function Tg(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-Kt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function nr(e){if(50<uo)throw uo=0,js=null,Error(K(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var jl={};function T2(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,a){return new T2(e,t,n,a)}function am(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function zg(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zs(e,t,n,a,l,i){var o=0;if(a=e,typeof a=="function")am(a)&&(o=1);else if(typeof a=="string")o=t$(e,n,$n.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case vc:return e=At(31,n,t,l),e.elementType=vc,e.lanes=i,e;case $l:return Qa(n.children,l,i,t);case qv:o=8,l|=24;break;case pc:return e=At(12,n,t,l|2),e.elementType=pc,e.lanes=i,e;case fc:return e=At(13,n,t,l),e.elementType=fc,e.lanes=i,e;case hc:return e=At(19,n,t,l),e.elementType=hc,e.lanes=i,e;case fz:case gc:return e=l|32,e=At(30,n,t,e),e.elementType=gc,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Nn:o=10;break e;case Gv:o=9;break e;case Fd:o=11;break e;case qd:o=14;break e;case ca:o=16,a=null;break e}o=29,n=Error(K(130,e===null?"null":typeof e,"")),a=null}return t=At(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Qa(e,t,n,a){return e=At(7,e,a,t),e.lanes=n,e}function ku(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function Ug(e){var t=At(18,null,null,0);return t.stateNode=e,t}function Nu(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pp=new WeakMap;function ln(e,t){if(typeof e=="object"&&e!==null){var n=Pp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Np(t)},Pp.set(e,t),t)}return{value:e,source:t,stack:Np(t)}}var Ml=[],Dl=0,ar=null,go=0,tn=[],nn=0,Oa=null,Tn=1,zn="";function Dn(e,t){Ml[Dl++]=go,Ml[Dl++]=ar,ar=e,go=t}function $g(e,t,n){tn[nn++]=Tn,tn[nn++]=zn,tn[nn++]=Oa,Oa=e;var a=Tn;e=zn;var l=32-Kt(a)-1;a&=~(1<<l),n+=1;var i=32-Kt(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Tn=1<<32-Kt(t)+l|n<<l|a,zn=i+e}else Tn=1<<i|n<<l|a,zn=e}function Gr(e){e.return!==null&&(Dn(e,1),$g(e,1,0))}function lm(e){for(;e===ar;)ar=Ml[--Dl],Ml[Dl]=null,go=Ml[--Dl],Ml[Dl]=null;for(;e===Oa;)Oa=tn[--nn],tn[nn]=null,zn=tn[--nn],tn[nn]=null,Tn=tn[--nn],tn[nn]=null}function Eg(e,t){tn[nn++]=Tn,tn[nn++]=zn,tn[nn++]=Oa,Tn=t.id,zn=t.overflow,Oa=e}var ct=null,Le=null,be=!1,ka=null,on=!1,$c=Error(K(519));function Ba(e){var t=Error(K(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(ln(t,e)),$c}function Kp(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[pt]=e,t[Lt]=a,n){case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":case"embed":_e("load",t);break;case"video":case"audio":for(n=0;n<_o.length;n++)_e(_o[n],t);break;case"source":_e("error",t);break;case"img":case"image":case"link":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"input":_e("invalid",t),sg(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":_e("invalid",t);break;case"textarea":_e("invalid",t),ug(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||py(t.textContent,n)?(a.popover!=null&&(_e("beforetoggle",t),_e("toggle",t)),a.onScroll!=null&&_e("scroll",t),a.onScrollEnd!=null&&_e("scrollend",t),a.onClick!=null&&(t.onclick=wn),t=!0):t=!1,t||Ba(e,!0)}function lr(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 31:case 13:on=!1;return;case 27:case 3:on=!0;return;default:ct=ct.return}}function yl(e){if(e!==ct)return!1;if(!be)return lr(e),be=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||fd(e.type,e.memoizedProps)),n=!n),n&&Le&&Ba(e),lr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Le=Ff(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Le=Ff(e)}else t===27?(t=Le,Va(e.type)?(e=bd,bd=null,Le=e):Le=t):Le=ct?rn(e.stateNode.nextSibling):null;return!0}function al(){Le=ct=null,be=!1}function wu(){var e=ka;return e!==null&&(Ut===null?Ut=e:Ut.push.apply(Ut,e),ka=null),e}function bo(e){ka===null?ka=[e]:ka.push(e)}var Ec=Bn(null),bl=null,Hn=null;function ba(e,t,n){He(Ec,t._currentValue),t._currentValue=n}function Pn(e){e._currentValue=Ec.current,vt(Ec)}function Us(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Rc(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=l;for(var u=0;u<t.length;u++)if(s.context===t[u]){i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Us(i.return,n,e),a||(o=null);break e}i=s.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(K(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Us(o,n,e),o=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Us(l.return,n,e),o=l.child,o=o!==null?o.sibling:null):o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function ll(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if(l.flags&524288)i=!0;else if(l.flags&262144)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(K(387));if(o=o.memoizedProps,o!==null){var s=l.type;Qt(l.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(l===Xs.current){if(o=l.alternate,o===null)throw Error(K(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}l=l.return}return e!==null&&Rc(t,e,n,a),t.flags|=262144,e!==null}function ir(e){for(e=e.firstContext;e!==null;){if(!Qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function il(e){bl=e,Hn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return Rg(bl,e)}function ns(e,t){return bl===null&&il(e),Rg(e,t)}function Rg(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Hn===null){if(e===null)throw Error(K(308));Hn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Hn=Hn.next=t;return n}var z2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},U2=lt.unstable_scheduleCallback,$2=lt.unstable_NormalPriority,We={$$typeof:Nn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function im(){return{controller:new z2,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&U2($2,function(){e.controller.abort()})}function Xp(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var a=t[e];n.indexOf(a)===-1&&n.push(a)}}}var Fi=null;function E2(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var eo=null,Ac=0,ol=0,Gl=null;function R2(e,t){if(eo===null){var n=eo=[];Ac=0,ol=Am(),Gl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ac++,t.then(Qp,Qp),t}function Qp(){if(--Ac===0&&(Fi=null,eo!==null)){Gl!==null&&(Gl.status="fulfilled");var e=eo;eo=null,ol=0,Gl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function A2(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Jp=fe.S;fe.S=function(e,t){if(Xb=Yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&R2(e,t),Fi!==null)for(var n=ui;n!==null;)Xp(n,Fi),n=n.next;if(n=e.types,n!==null){for(var a=ui;a!==null;)Xp(a,n),a=a.next;if(ol!==0){a=Fi,a===null&&(a=Fi=[]);for(var l=0;l<n.length;l++){var i=n[l];a.indexOf(i)===-1&&a.push(i)}}}Jp!==null&&Jp(e,t)};var Ja=Bn(null);function om(){var e=Ja.current;return e!==null?e:Ze.pooledCache}function $s(e,t){t===null?He(Ja,Ja.current):He(Ja,t.pool)}function Ag(){var e=om();return e===null?null:{parent:We._currentValue,pool:e}}var ki=Error(K(460)),sm=Error(K(474)),Yr=Error(K(542)),or={then:function(){}};function Wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Og(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(wn,wn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tf(e),e===void 0&&!("reason"in t)?Error(K(600)):e;default:if(typeof t.status=="string")t.then(wn,wn);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(K(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tf(e),e}throw Wa=t,ki}}function qa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Wa=n,ki):n}}var Wa=null;function ef(){if(Wa===null)throw Error(K(459));var e=Wa;return Wa=null,e}function tf(e){if(e===ki||e===Yr)throw Error(K(483))}var Yl=null,yo=0;function as(e){var t=yo;return yo+=1,Yl===null&&(Yl=[]),Og(Yl,e,t)}function sa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ls(e,t){throw t.$$typeof===pz?Error(K(525)):(e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bg(e){function t(b,f){if(e){var y=b.deletions;y===null?(b.deletions=[f],b.flags|=16):y.push(f)}}function n(b,f){if(!e)return null;for(;f!==null;)t(b,f),f=f.sibling;return null}function a(b){for(var f=new Map;b!==null;)b.key===null?f.set(b.index,b):f.set(b.key,b),b=b.sibling;return f}function l(b,f){return b=Yn(b,f),b.index=0,b.sibling=null,b}function i(b,f,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<f?(b.flags|=2,f):y):(b.flags|=134217730,f)):(b.flags|=1048576,f)}function o(b){return e&&b.alternate===null&&(b.flags|=134217730),b}function s(b,f,y,_){return f===null||f.tag!==6?(f=ku(y,b.mode,_),f.return=b,f):(f=l(f,y),f.return=b,f)}function u(b,f,y,_){var T=y.type;return T===$l?(b=p(b,f,y.props.children,_,y.key),sa(b,y),b):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ca&&qa(T)===f.type)?(f=l(f,y.props),sa(f,y),f.return=b,f):(f=zs(y.type,y.key,y.props,null,b.mode,_),sa(f,y),f.return=b,f)}function d(b,f,y,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Nu(y,b.mode,_),f.return=b,f):(f=l(f,y.children||[]),f.return=b,f)}function p(b,f,y,_,T){return f===null||f.tag!==7?(f=Qa(y,b.mode,_,T),f.return=b,f):(f=l(f,y),f.return=b,f)}function m(b,f,y){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=ku(""+f,b.mode,y),f.return=b,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xo:return y=zs(f.type,f.key,f.props,null,b.mode,y),sa(y,f),y.return=b,y;case Vi:return f=Nu(f,b.mode,y),f.return=b,f;case ca:return f=qa(f),m(b,f,y)}if(Hi(f)||Ei(f))return f=Qa(f,b.mode,y,null),f.return=b,f;if(typeof f.then=="function")return m(b,as(f),y);if(f.$$typeof===Nn)return m(b,ns(b,f),y);ls(b,f)}return null}function h(b,f,y,_){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:s(b,f,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xo:return y.key===T?u(b,f,y,_):null;case Vi:return y.key===T?d(b,f,y,_):null;case ca:return y=qa(y),h(b,f,y,_)}if(Hi(y)||Ei(y))return T!==null?null:p(b,f,y,_,null);if(typeof y.then=="function")return h(b,f,as(y),_);if(y.$$typeof===Nn)return h(b,f,ns(b,y),_);ls(b,y)}return null}function v(b,f,y,_,T){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return b=b.get(y)||null,s(f,b,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xo:return b=b.get(_.key===null?y:_.key)||null,u(f,b,_,T);case Vi:return b=b.get(_.key===null?y:_.key)||null,d(f,b,_,T);case ca:return _=qa(_),v(b,f,y,_,T)}if(Hi(_)||Ei(_))return b=b.get(y)||null,p(f,b,_,T,null);if(typeof _.then=="function")return v(b,f,y,as(_),T);if(_.$$typeof===Nn)return v(b,f,y,ns(f,_),T);ls(f,_)}return null}function k(b,f,y,_){for(var T=null,w=null,R=f,A=f=0,O=null;R!==null&&A<y.length;A++){R.index>A?(O=R,R=null):O=R.sibling;var L=h(b,R,y[A],_);if(L===null){R===null&&(R=O);break}e&&R&&L.alternate===null&&t(b,R),f=i(L,f,A),w===null?T=L:w.sibling=L,w=L,R=O}if(A===y.length)return n(b,R),be&&Dn(b,A),T;if(R===null){for(;A<y.length;A++)R=m(b,y[A],_),R!==null&&(f=i(R,f,A),w===null?T=R:w.sibling=R,w=R);return be&&Dn(b,A),T}for(R=a(R);A<y.length;A++)O=v(R,b,A,y[A],_),O!==null&&(e&&(L=O.alternate,L!==null&&R.delete(L.key===null?A:L.key)),f=i(O,f,A),w===null?T=O:w.sibling=O,w=O);return e&&R.forEach(function(te){return t(b,te)}),be&&Dn(b,A),T}function S(b,f,y,_){if(y==null)throw Error(K(151));for(var T=null,w=null,R=f,A=f=0,O=null,L=y.next();R!==null&&!L.done;A++,L=y.next()){R.index>A?(O=R,R=null):O=R.sibling;var te=h(b,R,L.value,_);if(te===null){R===null&&(R=O);break}e&&R&&te.alternate===null&&t(b,R),f=i(te,f,A),w===null?T=te:w.sibling=te,w=te,R=O}if(L.done)return n(b,R),be&&Dn(b,A),T;if(R===null){for(;!L.done;A++,L=y.next())L=m(b,L.value,_),L!==null&&(f=i(L,f,A),w===null?T=L:w.sibling=L,w=L);return be&&Dn(b,A),T}for(R=a(R);!L.done;A++,L=y.next())L=v(R,b,A,L.value,_),L!==null&&(e&&(O=L.alternate,O!==null&&R.delete(O.key===null?A:O.key)),f=i(L,f,A),w===null?T=L:w.sibling=L,w=L);return e&&R.forEach(function(j){return t(b,j)}),be&&Dn(b,A),T}function C(b,f,y,_){if(typeof y=="object"&&y!==null&&y.type===$l&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Xo:e:{for(var T=y.key;f!==null;){if(f.key===T){if(T=y.type,T===$l){if(f.tag===7){n(b,f.sibling),_=l(f,y.props.children),sa(_,y),_.return=b,b=_;break e}}else if(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ca&&qa(T)===f.type){n(b,f.sibling),_=l(f,y.props),sa(_,y),_.return=b,b=_;break e}n(b,f);break}else t(b,f);f=f.sibling}y.type===$l?(_=Qa(y.props.children,b.mode,_,y.key),sa(_,y),_.return=b,b=_):(_=zs(y.type,y.key,y.props,null,b.mode,_),sa(_,y),_.return=b,b=_)}return o(b);case Vi:e:{for(T=y.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(b,f.sibling),_=l(f,y.children||[]),_.return=b,b=_;break e}else{n(b,f);break}else t(b,f);f=f.sibling}_=Nu(y,b.mode,_),_.return=b,b=_}return o(b);case ca:return y=qa(y),C(b,f,y,_)}if(Hi(y))return k(b,f,y,_);if(Ei(y)){if(T=Ei(y),typeof T!="function")throw Error(K(150));return y=T.call(y),S(b,f,y,_)}if(typeof y.then=="function")return C(b,f,as(y),_);if(y.$$typeof===Nn)return C(b,f,ns(b,y),_);ls(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,f!==null&&f.tag===6?(n(b,f.sibling),_=l(f,y),_.return=b,b=_):(n(b,f),_=ku(y,b.mode,_),_.return=b,b=_),o(b)):n(b,f)}return function(b,f,y,_){try{yo=0;var T=C(b,f,y,_);return Yl=null,T}catch(R){if(R===ki||R===Yr)throw R;var w=At(29,R,null,b.mode);return w.lanes=_,w.return=b,w}finally{}}}var sl=Bg(!0),Zg=Bg(!1),da=!1;function rm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Ue&2){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=nr(e),Tg(e,null,n),t}return qr(e,a,t,n),nr(e)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Wv(e,n)}}function Tu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Bc=!1;function no(){if(Bc){var e=Gl;if(e!==null)throw e}}function ao(e,t,n,a){Bc=!1;var l=e.updateQueue;da=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==o&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=u))}if(i!==null){var m=l.baseState;o=0,p=d=u=null,s=i;do{var h=s.lane&-536870913,v=h!==s.lane;if(v?(ke&h)===h:(a&h)===h){h!==0&&h===ol&&(Bc=!0),p!==null&&(p=p.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var k=e,S=s;h=t;var C=n;switch(S.tag){case 1:if(k=S.payload,typeof k=="function"){m=k.call(C,m,h);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,h=typeof k=="function"?k.call(C,m,h):k,h==null)break e;m=je({},m,h);break e;case 2:da=!0}}h=s.callback,h!==null&&(e.flags|=64,v&&(e.flags|=8192),v=l.callbacks,v===null?l.callbacks=[h]:v.push(h))}else v={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=v,u=m):p=p.next=v,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;v=s,s=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);p===null&&(u=m),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=p,i===null&&(l.shared.lanes=0),Ma|=o,e.lanes=o,e.memoizedState=m}}function jg(e,t){if(typeof e!="function")throw Error(K(191,e));e.call(t)}function Mg(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)jg(n[e],t)}var Za=Bn(null),sr=Bn(0);function nf(e,t){e=ea,He(sr,e),He(Za,t),ea=e|t.baseLanes}function Zc(){He(sr,ea),He(Za,Za.current)}function um(){ea=sr.current,vt(Za),vt(sr)}var yt=Bn(null),St=null;function Ta(e){var t=e.alternate;He(gt,gt.current&1),He(yt,e),St===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(St=e)}function jc(e){He(gt,gt.current),He(yt,e),St===null&&(St=e)}function Dg(e){e.tag===22?(He(gt,gt.current),He(yt,e),St===null&&(St=e)):za()}function za(){He(gt,gt.current),He(yt,yt.current)}function Ft(e){vt(yt),St===e&&(St=null),vt(gt)}var gt=Bn(0);function So(e,t){He(yt,yt.current),He(gt,t)}function cm(e){vt(gt),vt(yt),St===e&&(St=null)}function rr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||gd(n)||jm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qn=0,ge=null,Be=null,Je=null,ur=!1,Pl=!1,rl=!1,cr=0,xo=0,Kl=null,O2=0;function Pe(){throw Error(K(321))}function dm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function mm(e,t,n,a,l,i){return Qn=i,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fe.H=e===null||e.memoizedState===null?vb:gb,rl=!1,i=n(a,l),rl=!1,Pl&&(i=Vg(t,n,a,l)),Lg(e),i}function Lg(e){fe.H=dr;var t=Be!==null&&Be.next!==null;if(Qn=0,Je=Be=ge=null,ur=!1,xo=0,Kl=null,t)throw Error(K(300));e===null||et||(e=e.dependencies,e!==null&&ir(e)&&(et=!0))}function Vg(e,t,n,a){ge=e;var l=0;do{if(Pl&&(Kl=null),xo=0,Pl=!1,25<=l)throw Error(K(301));if(l+=1,Je=Be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}fe.H=H2,i=t(n,a)}while(Pl);return i}function B2(){var e=fe.H,t=e.useState()[0];return t=typeof t.then=="function"?Vo(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ge.flags|=1024),t}function pm(){var e=cr!==0;return cr=0,e}function fm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function hm(e){if(ur){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ur=!1}Qn=0,Je=Be=ge=null,Pl=!1,xo=cr=0,Kl=null}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ge.memoizedState=Je=e:Je=Je.next=e,Je}function Qe(){if(Be===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Je===null?ge.memoizedState:Je.next;if(t!==null)Je=t,Be=e;else{if(e===null)throw ge.alternate===null?Error(K(467)):Error(K(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Je===null?ge.memoizedState=Je=e:Je=Je.next=e}return Je}function Pr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(e){var t=xo;return xo+=1,Kl===null&&(Kl=[]),e=Og(Kl,e,t),t=ge,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,fe.H=t===null||t.memoizedState===null?vb:gb),e}function Kr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vo(e);if(e.$$typeof===vz)return;if(e.$$typeof===Nn)return ft(e)}throw Error(K(438,String(e)))}function vm(e){var t=null,n=ge.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ge.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Pr(),ge.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=hz;return t.index++,n}function Jn(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=Qe();return gm(t,Be,e)}function gm(e,t,n){var a=e.queue;if(a===null)throw Error(K(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var s=o=null,u=null,d=t,p=!1;do{var m=d.lane&-536870913;if(m!==d.lane?(ke&m)===m:(Qn&m)===m){var h=d.revertLane;if(h===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),m===ol&&(p=!0);else if((Qn&h)===h){d=d.next,h===ol&&(p=!0);continue}else m={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},u===null?(s=u=m,o=i):u=u.next=m,ge.lanes|=h,Ma|=h;m=d.action,rl&&n(i,m),i=d.hasEagerState?d.eagerState:n(i,m)}else h={lane:m,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},u===null?(s=u=h,o=i):u=u.next=h,ge.lanes|=m,Ma|=m;d=d.next}while(d!==null&&d!==t);if(u===null?o=i:u.next=s,!Qt(i,e.memoizedState)&&(et=!0,p&&(n=Gl,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=u,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function zu(e){var t=Qe(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Qt(i,t.memoizedState)||(et=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Hg(e,t,n){var a=ge,l=Qe(),i=be;if(i){if(n===void 0)throw Error(K(407));n=n()}else n=t();var o=!Qt((Be||l).memoizedState,n);if(o&&(l.memoizedState=n,et=!0),l=l.queue,bm(qg.bind(null,a,l,e),[e]),e=l.getSnapshot!==t||o||Je!==null&&(Je.memoizedState.tag&1)!==0,ii(e?9:8,{destroy:void 0},Fg.bind(null,a,l,n,t),null),e){if(a.flags|=2048,Ze===null)throw Error(K(349));i||Qn&127||Ig(a,t,n)}return n}function Ig(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t=Pr(),ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fg(e,t,n,a){t.value=n,t.getSnapshot=a,Gg(t)&&Yg(e)}function qg(e,t,n){return n(function(){Gg(t)&&Yg(e)})}function Gg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function Yg(e){var t=gl(e,2);t!==null&&Mt(t,e,2)}function Mc(e){var t=kt();if(typeof e=="function"){var n=e;if(e=n(),rl){va(!0);try{n()}finally{va(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t}function Pg(e,t,n,a){return e.baseState=n,gm(e,Be,typeof a=="function"?a:Jn)}function Z2(e,t,n,a,l){if(Qr(e))throw Error(K(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};fe.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Kg(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Kg(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=fe.T,o={};o.types=i!==null?i.types:null,fe.T=o;try{var s=n(l,a),u=fe.S;u!==null&&u(o,s),af(e,t,s)}catch(d){Dc(e,t,d)}finally{i!==null&&o.types!==null&&(i.types=o.types),fe.T=i}}else try{i=n(l,a),af(e,t,i)}catch(d){Dc(e,t,d)}}function af(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){lf(e,t,a)},function(a){return Dc(e,t,a)}):lf(e,t,n)}function lf(e,t,n){t.status="fulfilled",t.value=n,Xg(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Kg(e,n)))}function Dc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Xg(t),t=t.next;while(t!==a)}e.action=null}function Xg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qg(e,t){return t}function of(e,t){if(be){var n=Ze.formState;if(n!==null){e:{var a=ge;if(be){if(Le){t:{for(var l=Le,i=on;l.nodeType!==8;){if(!i){l=null;break t}if(l=rn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Le=rn(l.nextSibling),a=l.data==="F!";break e}}Ba(a)}a=!1}a&&(t=n[0])}}return n=kt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qg,lastRenderedState:t},n.queue=a,n=pb.bind(null,ge,a),a.dispatch=n,a=Mc(!1),i=_m.bind(null,ge,!1,a.queue),a=kt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Z2.bind(null,ge,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function sf(e){var t=Qe();return Jg(t,Be,e)}function Jg(e,t,n){if(t=gm(e,t,Qg)[0],e=Es(Jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Vo(t)}catch(o){throw o===ki?Yr:o}else a=t;t=Qe();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(ge.flags|=2048,ii(9,{destroy:void 0},j2.bind(null,l,n),null)),[a,i,e]}function j2(e,t){e.action=t}function rf(e){var t=Qe(),n=Be;if(n!==null)return Jg(t,n,e);Qe(),t=t.memoizedState,n=Qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ii(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ge.updateQueue,t===null&&(t=Pr(),ge.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Wg(){return Qe().memoizedState}function Rs(e,t,n,a){var l=kt();ge.flags|=e,l.memoizedState=ii(1|t,{destroy:void 0},n,a===void 0?null:a)}function Xr(e,t,n,a){var l=Qe();a=a===void 0?null:a;var i=l.memoizedState.inst;Be!==null&&a!==null&&dm(a,Be.memoizedState.deps)?l.memoizedState=ii(t,i,n,a):(ge.flags|=e,l.memoizedState=ii(1|t,i,n,a))}function uf(e,t){Rs(8390656,8,e,t)}function bm(e,t){Xr(2048,8,e,t)}function M2(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=Pr(),ge.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function eb(e){var t=Qe().memoizedState;return M2({ref:t,nextImpl:e}),function(){if(Ue&2)throw Error(K(440));return t.impl.apply(void 0,arguments)}}function tb(e,t){return Xr(4,2,e,t)}function nb(e,t){return Xr(4,4,e,t)}function ab(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lb(e,t,n){n=n!=null?n.concat([e]):null,Xr(4,4,ab.bind(null,t,e),n)}function ym(){}function ib(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&dm(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function ob(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&dm(t,a[1]))return a[0];if(a=e(),rl){va(!0);try{e()}finally{va(!1)}}return n.memoizedState=[a,t],a}function Sm(e,t,n){return n===void 0||Qn&1073741824&&!(ke&261930)?e.memoizedState=t:(e.memoizedState=n,e=Jb(),ge.lanes|=e,Ma|=e,n)}function sb(e,t,n,a){return Qt(n,t)?n:Za.current!==null?(e=Sm(e,n,a),Qt(e,t)||(et=!0),e):!(Qn&106)||Qn&1073741824&&!(ke&261930)?(et=!0,e.memoizedState=n):(e=Jb(),ge.lanes|=e,Ma|=e,t)}function rb(e,t,n,a,l){var i=$e.p;$e.p=i!==0&&8>i?i:8;var o=fe.T,s={};s.types=o!==null?o.types:null,fe.T=s,_m(e,!1,t,n);try{var u=l(),d=fe.S;if(d!==null&&d(s,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=A2(u,a);lo(e,t,p,Xt(e))}else lo(e,t,a,Xt(e))}catch(m){lo(e,t,{then:function(){},status:"rejected",reason:m},Xt())}finally{$e.p=i,o!==null&&s.types!==null&&(o.types=s.types),fe.T=o}}function D2(){}function Lc(e,t,n,a){if(e.tag!==5)throw Error(K(476));var l=ub(e).queue;rb(e,l,t,Xa,n===null?D2:function(){return cb(e),n(a)})}function ub(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Xa,baseState:Xa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:Xa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cb(e){var t=ub(e);t.next===null&&(t=e.alternate.memoizedState),lo(e,t.next.queue,{},Xt())}function xm(){return ft(mi)}function db(){return Qe().memoizedState}function mb(){return Qe().memoizedState}function L2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Xt();e=Na(n);var a=wa(t,e,n);a!==null&&(Mt(a,t,n),to(a,t,n)),t={cache:im()},e.payload=t;return}t=t.return}}function V2(e,t,n){var a=Xt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Qr(e)?fb(t,n):(n=nm(e,t,n,a),n!==null&&(Mt(n,e,a),hb(n,t,a)))}function pb(e,t,n){var a=Xt();lo(e,t,n,a)}function lo(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qr(e))fb(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Qt(s,o))return qr(e,t,l,0),Ze===null&&Fr(),!1}catch{}finally{}if(n=nm(e,t,l,a),n!==null)return Mt(n,e,a),hb(n,t,a),!0}return!1}function _m(e,t,n,a){if(a={lane:2,revertLane:Am(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Qr(e)){if(t)throw Error(K(479))}else t=nm(e,n,a,2),t!==null&&Mt(t,e,2)}function Qr(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function fb(e,t){Pl=ur=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hb(e,t,n){if(n&4194048){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Wv(e,n)}}var dr={readContext:ft,use:Kr,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe,useEffectEvent:Pe},vb={readContext:ft,use:Kr,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:uf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Rs(4194308,4,ab.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){Rs(4,2,e,t)},useMemo:function(e,t){var n=kt();t=t===void 0?null:t;var a=e();if(rl){va(!0);try{e()}finally{va(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=kt();if(n!==void 0){var l=n(t);if(rl){va(!0);try{n(t)}finally{va(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=V2.bind(null,ge,e),[a.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:function(e){e=Mc(e);var t=e.queue,n=pb.bind(null,ge,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ym,useDeferredValue:function(e,t){var n=kt();return Sm(n,e,t)},useTransition:function(){var e=Mc(!1);return e=rb.bind(null,ge,e.queue,!0,!1),kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ge,l=kt();if(be){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),Ze===null)throw Error(K(349));ke&127||Ig(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,uf(qg.bind(null,a,i,e),[e]),a.flags|=2048,ii(9,{destroy:void 0},Fg.bind(null,a,i,n,t),null),n},useId:function(){var e=kt(),t=Ze.identifierPrefix;if(be){var n=zn,a=Tn;n=(a&~(1<<32-Kt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=O2++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:xm,useFormState:of,useActionState:of,useOptimistic:function(e){var t=kt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_m.bind(null,ge,!0,n),n.dispatch=t,[e,t]},useMemoCache:vm,useCacheRefresh:function(){return kt().memoizedState=L2.bind(null,ge)},useEffectEvent:function(e){var t=kt(),n={impl:e};return t.memoizedState=n,function(){if(Ue&2)throw Error(K(440));return n.impl.apply(void 0,arguments)}}},gb={readContext:ft,use:Kr,useCallback:ib,useContext:ft,useEffect:bm,useImperativeHandle:lb,useInsertionEffect:tb,useLayoutEffect:nb,useMemo:ob,useReducer:Es,useRef:Wg,useState:function(){return Es(Jn)},useDebugValue:ym,useDeferredValue:function(e,t){var n=Qe();return sb(n,Be.memoizedState,e,t)},useTransition:function(){var e=Es(Jn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Vo(e),t]},useSyncExternalStore:Hg,useId:db,useHostTransitionStatus:xm,useFormState:sf,useActionState:sf,useOptimistic:function(e,t){var n=Qe();return Pg(n,Be,e,t)},useMemoCache:vm,useCacheRefresh:mb,useEffectEvent:eb},H2={readContext:ft,use:Kr,useCallback:ib,useContext:ft,useEffect:bm,useImperativeHandle:lb,useInsertionEffect:tb,useLayoutEffect:nb,useMemo:ob,useReducer:zu,useRef:Wg,useState:function(){return zu(Jn)},useDebugValue:ym,useDeferredValue:function(e,t){var n=Qe();return Be===null?Sm(n,e,t):sb(n,Be.memoizedState,e,t)},useTransition:function(){var e=zu(Jn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Vo(e),t]},useSyncExternalStore:Hg,useId:db,useHostTransitionStatus:xm,useFormState:rf,useActionState:rf,useOptimistic:function(e,t){var n=Qe();return Be!==null?Pg(n,Be,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vm,useCacheRefresh:mb,useEffectEvent:eb};function Uu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Xt(),l=Na(a);l.payload=t,n!=null&&(l.callback=n),t=wa(e,l,a),t!==null&&(Mt(t,e,a),to(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Xt(),l=Na(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=wa(e,l,a),t!==null&&(Mt(t,e,a),to(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xt(),a=Na(n);a.tag=2,t!=null&&(a.callback=t),t=wa(e,a,n),t!==null&&(Mt(t,e,n),to(t,e,n))}};function cf(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!vo(n,a)||!vo(l,i):!0}function df(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Vc.enqueueReplaceState(t,t.state,null)}function ul(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=je({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function bb(e){tr(e)}function yb(e){console.error(e)}function Sb(e){tr(e)}function mr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function mf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Hc(e,t,n){return n=Na(n),n.tag=3,n.payload={element:null},n.callback=function(){mr(e,t)},n}function xb(e){return e=Na(e),e.tag=3,e}function _b(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){mf(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){mf(t,n,a),typeof l!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function I2(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ll(t,n,l,!0),n=yt.current,n!==null){switch(n.tag){case 31:case 13:case 19:return St===null?Sr():n.alternate===null&&Ke===0&&(Ke=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===or?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Zu(e,a,l)),!1;case 22:return n.flags|=65536,a===or?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Zu(e,a,l)),!1}throw Error(K(435,n.tag))}return Zu(e,a,l),Sr(),!1}if(be)return t=yt.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==$c&&(e=Error(K(422),{cause:a}),bo(ln(e,n)))):(a!==$c&&(t=Error(K(423),{cause:a}),bo(ln(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=ln(a,n),l=Hc(e.stateNode,a,l),Tu(e,l),Ke!==4&&(Ke=2)),!1;var i=Error(K(520),{cause:a});if(i=ln(i,n),ro===null?ro=[i]:ro.push(i),Ke!==4&&(Ke=2),t===null)return!0;a=ln(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Hc(n.stateNode,a,e),Tu(n,e),!1;case 1:if(t=n.type,i=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ua===null||!Ua.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=xb(l),_b(l,e,n,a),Tu(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Cm=Error(K(461)),et=!1;function nt(e,t,n,a){t.child=e===null?Zg(t,null,n,a):sl(t,e.child,n,a)}function pf(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var s in a)s!=="ref"&&(o[s]=a[s])}else o=a;return il(t),a=mm(e,t,n,o,i,l),s=pm(),e!==null&&!et?(fm(e,t,l),Wn(e,t,l)):(be&&s&&Gr(t),t.flags|=1,nt(e,t,a,l),t.child)}function ff(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!am(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Cb(e,t,i,a,l)):(e=zs(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Nm(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,a)&&e.ref===t.ref)return Wn(e,t,l)}return t.flags|=1,e=Yn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Cb(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(vo(i,a)&&e.ref===t.ref)if(et=!1,t.pendingProps=a=i,Nm(e,l))e.flags&131072&&(et=!0);else return t.lanes=e.lanes,Wn(e,t,l)}return Ic(e,t,n,a,l)}function kb(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return hf(e,t,i,n,a)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$s(t,i!==null?i.cachePool:null),i!==null?nf(t,i):Zc(),Dg(t);else return a=t.lanes=536870912,hf(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?($s(t,i.cachePool),nf(t,i),za(),t.memoizedState=null):(e!==null&&$s(t,null),Zc(),za());return nt(e,t,l,n),t.child}function io(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hf(e,t,n,a,l){var i=om();return i=i===null?null:{parent:We._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&$s(t,null),Zc(),Dg(t),e!==null&&ll(e,t,a,!0),t.childLanes=l,null}function As(e,t){return t=Jr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vf(e,t,n){return sl(t,e.child,null,n),e=As(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function F2(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(be){if(a.mode==="hidden")return e=As(t,a),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},io(null,e);if(jc(t),(e=Le)?(e=Cy(e,on),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Tn,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},n=Ug(e),n.return=t,t.child=n,ct=t,Le=null)):e=null,e===null)throw Ba(t);return t.lanes=536870912,null}return As(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(jc(t),l)if(t.flags&256)t.flags&=-257,t=vf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(K(558));else if(et||ll(e,t,n,!1),l=(n&e.childLanes)!==0,et||l){if(Za.current===null){if(a=Ze,a!==null&&(o=eg(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,gl(e,o),Mt(a,e,o),Cm;Sr()}t=vf(e,t,n)}else e=i.treeContext,Le=rn(o.nextSibling),ct=t,be=!0,ka=null,on=!1,e!==null&&Eg(t,e),t=As(t,a),t.flags|=134221824;return t}return e=Yn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _l(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ic(e,t,n,a,l){return il(t),n=mm(e,t,n,a,void 0,l),a=pm(),e!==null&&!et?(fm(e,t,l),Wn(e,t,l)):(be&&a&&Gr(t),t.flags|=1,nt(e,t,n,l),t.child)}function gf(e,t,n,a,l,i){return il(t),t.updateQueue=null,n=Vg(t,a,n,l),Lg(e),a=pm(),e!==null&&!et?(fm(e,t,i),Wn(e,t,i)):(be&&a&&Gr(t),t.flags|=1,nt(e,t,n,i),t.child)}function bf(e,t,n,a,l){if(il(t),t.stateNode===null){var i=jl,o=n.contextType;typeof o=="object"&&o!==null&&(i=ft(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},rm(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?ft(o):jl,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Uu(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Vc.enqueueReplaceState(i,i.state,null),ao(t,a,i,l),no(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,u=ul(n,s);i.props=u;var d=i.context,p=n.contextType;o=jl,typeof p=="object"&&p!==null&&(o=ft(p));var m=n.getDerivedStateFromProps;p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||d!==o)&&df(t,i,a,o),da=!1;var h=t.memoizedState;i.state=h,ao(t,a,i,l),no(),d=t.memoizedState,s||h!==d||da?(typeof m=="function"&&(Uu(t,n,m,a),d=t.memoizedState),(u=da||cf(t,n,u,a,h,d,o))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),i.props=a,i.state=d,i.context=o,a=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Oc(e,t),o=t.memoizedProps,p=ul(n,o),i.props=p,m=t.pendingProps,h=i.context,d=n.contextType,u=jl,typeof d=="object"&&d!==null&&(u=ft(d)),s=n.getDerivedStateFromProps,(d=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==m||h!==u)&&df(t,i,a,u),da=!1,h=t.memoizedState,i.state=h,ao(t,a,i,l),no();var v=t.memoizedState;o!==m||h!==v||da||e!==null&&e.dependencies!==null&&ir(e.dependencies)?(typeof s=="function"&&(Uu(t,n,s,a),v=t.memoizedState),(p=da||cf(t,n,p,a,h,v,u)||e!==null&&e.dependencies!==null&&ir(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,v,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,v,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),i.props=a,i.state=v,i.context=u,a=p):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,_l(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=sl(t,e.child,null,l),t.child=sl(t,null,n,l)):nt(e,t,n,l),t.memoizedState=i.state,e=t.child):e=Wn(e,t,l),e}function yf(e,t,n,a){return al(),t.flags|=256,nt(e,t,n,a),t.child}var Fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qc(e){return{baseLanes:e,cachePool:Ag()}}function Gc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Gt),e}function Nb(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(be){if(l?Ta(t):za(),(e=Le)?(e=Cy(e,on),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Tn,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},n=Ug(e),n.return=t,t.child=n,ct=t,Le=null)):e=null,e===null)throw Ba(t);return jm(e)?t.lanes=32:t.lanes=536870912,null}return i=a.children,a=a.fallback,l?(za(),l=t.mode,i=Jr({mode:"hidden",children:i},l),a=Qa(a,l,n,null),i.return=t,a.return=t,i.sibling=a,t.child=i,a=t.child,a.memoizedState=qc(n),a.childLanes=Gc(e,o,n),t.memoizedState=Fc,io(null,a)):(Ta(t),km(t,i))}var s=e.memoizedState;if(s!==null){var u=s.dehydrated;if(u!==null)return q2(e,t,i,o,a,u,s,n)}return l?(za(),l=a.fallback,i=t.mode,s=e.child,u=s.sibling,a=Yn(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&1206910976,u!==null?l=Yn(u,l):(l=Qa(l,i,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,io(null,a),a=t.child,l=e.child.memoizedState,l===null?l=qc(n):(i=l.cachePool,i!==null?(s=We._currentValue,i=i.parent!==s?{parent:s,pool:s}:i):i=Ag(),l={baseLanes:l.baseLanes|n,cachePool:i}),a.memoizedState=l,a.childLanes=Gc(e,o,n),t.memoizedState=Fc,io(e.child,a)):(Ta(t),n=e.child,e=n.sibling,n=Yn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function km(e,t){return t=Jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Jr(e,t){return e=At(22,e,null,t),e.lanes=0,e}function is(e,t,n){return sl(t,e.child,null,n),e=km(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function q2(e,t,n,a,l,i,o,s){if(n)return t.flags&256?(Ta(t),t.flags&=-257,is(e,t,s)):t.memoizedState!==null?(za(),t.child=e.child,t.flags|=128,null):(za(),i=l.fallback,o=t.mode,l=Jr({mode:"visible",children:l.children},o),i=Qa(i,o,s,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,sl(t,e.child,null,s),l=t.child,l.memoizedState=qc(s),l.childLanes=Gc(e,a,s),t.memoizedState=Fc,io(null,l));if(Ta(t),jm(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var u=a.dgst;return a=u,a!==""&&(l=Error(K(419)),l.stack="",l.digest=a,bo({value:l,source:null,stack:null})),is(e,t,s)}if(et||ll(e,t,s,!1),a=(s&e.childLanes)!==0,et||a){if(Za.current!==null)return is(e,t,s);if(a=Ze,a!==null&&(l=eg(a,s),l!==0&&l!==o.retryLane))throw o.retryLane=l,gl(e,l),Mt(a,e,l),Cm;return gd(i)||Sr(),is(e,t,s)}return gd(i)?(t.flags|=192,t.child=e.child,null):(e=o.treeContext,Le=rn(i.nextSibling),ct=t,be=!0,ka=null,on=!1,e!==null&&Eg(t,e),t=km(t,l.children),t.flags|=134221824,t)}function Sf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Us(e.return,t,n)}function xf(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&rr(n)===null&&(t=e),e=e.sibling}return t}function os(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function $u(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Yc(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=gt.current;if(t.flags&128)return So(t,o),null;var s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,So(t,o),l==="backwards"&&e!==null?($u(e),nt(e,t,a,n),$u(e)):nt(e,t,a,n),a=be?go:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sf(e,n,t);else if(e.tag===19)Sf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":n=xf(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null,$u(t)),os(t,!0,l,null,i,a);break;case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&rr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}os(t,!0,n,null,i,a);break;case"together":os(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:n=xf(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),os(t,!1,l,n,i,a)}return t.child}function _f(e,t,n){var a=t.pendingProps;return ba(t,t.type,a.value),nt(e,t,a.children,n),t.child}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,!(n&t.childLanes))if(e!==null){if(ll(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=Yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nm(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&ir(e)))}function G2(e,t,n){switch(t.tag){case 3:Qs(t,t.stateNode.containerInfo),ba(t,We,e.memoizedState.cache),al();break;case 27:case 5:Sc(t);break;case 4:Qs(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,jc(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return Ta(t),t.flags|=128,null;a=ll(e,t,n,!1);var l=t.child.childLanes;return a||n&l?Nb(e,t,n):(Ta(t),e=Wn(e,t,n),e!==null?e.sibling:null)}Ta(t);break;case 19:if(t.flags&128)return Yc(e,t,n);if(l=(e.flags&128)!==0,a=(n&t.childLanes)!==0,a||(ll(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Yc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),So(t,gt.current),a)break;return null;case 22:return t.lanes=0,kb(e,t,n,t.pendingProps);case 24:ba(t,We,e.memoizedState.cache)}return Wn(e,t,n)}function wb(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!Nm(e,n)&&!(t.flags&128))return et=!1,G2(e,t,n);et=!!(e.flags&131072)}else et=!1,be&&t.flags&1048576&&$g(t,go,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e=="function")am(e)?(a=ul(e,a),t.tag=1,t=bf(null,t,e,a,n)):(t.tag=0,t=Ic(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===Fd){t.tag=11,t=pf(null,t,e,a,n);break e}else if(l===qd){t.tag=14,t=ff(null,t,e,a,n);break e}else if(l===Nn){t.tag=10,t.type=e,t=_f(null,t,n);break e}}throw t=bc(e)||e,Error(K(306,t,""))}}return t;case 0:return Ic(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=ul(a,t.pendingProps),bf(e,t,a,l,n);case 3:e:{if(Qs(t,t.stateNode.containerInfo),e===null)throw Error(K(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Oc(e,t),ao(t,a,null,n);var o=t.memoizedState;if(a=o.cache,ba(t,We,a),a!==i.cache&&Rc(t,[We],n,!0),no(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=yf(e,t,a,n);break e}else if(a!==l){l=ln(Error(K(424)),t),bo(l),t=yf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=rn(e.firstChild),ct=t,be=!0,ka=null,on=!0,n=Zg(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(al(),a===l){t=Wn(e,t,n);break e}nt(e,t,a,n)}t=t.child}return t;case 26:return _l(e,t),e===null?(n=Yf(t.type,null,t.pendingProps,null))?t.memoizedState=n:be||(t.stateNode=hy(t.type,t.pendingProps,Ca.current,t)):t.memoizedState=Yf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Sc(t),e===null&&be&&(a=t.stateNode=ky(t.type,t.pendingProps,Ca.current),ct=t,on=!0,l=Le,Va(t.type)?(bd=l,Le=rn(a.firstChild)):Le=l),nt(e,t,t.pendingProps.children,n),_l(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&be&&((l=a=Le)&&(a=LU(a,t.type,t.pendingProps,on),a!==null?(t.stateNode=a,ct=t,Le=rn(a.firstChild),on=!1,l=!0):l=!1),l||Ba(t)),Sc(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,fd(l,i)?a=null:o!==null&&fd(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=mm(e,t,B2,null,null,n),mi._currentValue=l),_l(e,t),nt(e,t,a,n),t.child;case 6:return e===null&&be&&((e=n=Le)&&(n=VU(n,t.pendingProps,on),n!==null?(t.stateNode=n,ct=t,Le=null,e=!0):e=!1),e||Ba(t)),null;case 13:return Nb(e,t,n);case 4:return Qs(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=sl(t,null,a,n):nt(e,t,a,n),t.child;case 11:return pf(e,t,t.type,t.pendingProps,n);case 7:return a=t.pendingProps,_l(e,t),nt(e,t,a,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:return _f(e,t,n);case 9:return l=t.type._context,a=t.pendingProps.children,il(t),l=ft(l),a=a(l),t.flags|=1,nt(e,t,a,n),t.child;case 14:return ff(e,t,t.type,t.pendingProps,n);case 15:return Cb(e,t,t.type,t.pendingProps,n);case 19:return Yc(e,t,n);case 31:return F2(e,t,n);case 22:return kb(e,t,n,t.pendingProps);case 24:return il(t),a=ft(We),e===null?(l=om(),l===null&&(l=Ze,i=im(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},rm(t),ba(t,We,l)):(e.lanes&n&&(Oc(e,t),ao(t,null,null,n),no()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ba(t,We,a)):(a=i.cache,ba(t,We,a),a!==l.cache&&Rc(t,[We],n,!0))),nt(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=e===null?18882560:18874368:be&&Gr(t),e!==null&&e.memoizedProps.name!==a.name?t.flags|=4194816:_l(e,t),nt(e,t,a.children,n),t.child;case 29:throw t.pendingProps}throw Error(K(156,t.tag))}function Mn(e){e.flags|=4}function Eu(e,t,n,a,l){var i;if((i=(e.mode&32)!==0)&&(i=n===null?Xf(t,a):Xf(t,a)&&(a.src!==n.src||a.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(ty())e.flags|=8192;else throw Wa=or,sm}else e.flags&=-16777217}function Cf(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!zy(t))if(ty())e.flags|=8192;else throw Wa=or,sm}function ss(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Qv():536870912,e.lanes|=t,oi|=t)}function Oi(e,t){if(!be)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&1206910976,a|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Y2(e,t,n){var a=t.pendingProps;switch(lm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pn(We),ni(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(yl(t)?Mn(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wu())),De(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Mn(t),i!==null?(De(t),Cf(t,i)):(De(t),Eu(t,l,null,a,n))):i?i!==e.memoizedState?(Mn(t),De(t),Cf(t,i)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Mn(t),De(t),Eu(t,l,e,a,n)),null;case 27:if(Js(t),n=Ca.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(!a){if(t.stateNode===null)throw Error(K(166));return De(t),t.subtreeFlags&=-33554433,null}e=$n.current,yl(t)?Kp(t):(e=ky(l,a,n),t.stateNode=e,Mn(t))}return De(t),t.subtreeFlags&=-33554433,null;case 5:if(Js(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(!a){if(t.stateNode===null)throw Error(K(166));return De(t),t.subtreeFlags&=-33554433,null}if(i=$n.current,yl(t))Kp(t);else{var o=ko(Ca.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[pt]=t,i[Lt]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(bt(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Mn(t)}}return De(t),t.subtreeFlags&=-33554433,Eu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(K(166));if(e=Ca.current,yl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=ct,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||py(e.nodeValue,n)),e||Ba(t,!0)}else e=ko(e).createTextNode(a),e[pt]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=yl(t),n!==null){if(e===null){if(!a)throw Error(K(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(557));e[pt]=t}else al(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if(t.flags&128)throw Error(K(558))}return De(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=yl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(K(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(K(317));l[pt]=t}else al(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),l=!1}else l=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),t.flags&128?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ss(t,t.updateQueue),De(t),null);case 4:return ni(),e===null&&Om(t.stateNode.containerInfo),t.flags|=67108864,De(t),null;case 10:return Pn(t.type),De(t),null;case 19:if(cm(t),a=t.memoizedState,a===null)return De(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Oi(a,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=rr(e),i!==null){for(t.flags|=128,Oi(a,!1),e=i.updateQueue,t.updateQueue=e,ss(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)zg(n,e),n=n.sibling;return So(t,gt.current&1|2),be&&Dn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Yt()>br&&(t.flags|=128,l=!0,Oi(a,!1),t.lanes=4194304)}else{if(!l)if(e=rr(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ss(t,e),Oi(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!be)return De(t),null}else 2*Yt()-a.renderingStartTime>br&&n!==536870912&&(t.flags|=128,l=!0,Oi(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}if(a.tail!==null){e=a.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Yt(),e.sibling=null,i=gt.current,i=l?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!n||be?So(t,i):(n=i,He(yt,t),He(gt,n),St===null&&(St=t)),be&&Dn(t,a.treeForkCount),e}return De(t),null;case 22:case 23:return Ft(t),um(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?n&536870912&&!(t.flags&128)&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&ss(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&vt(Ja),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pn(We),De(t),null;case 25:return null;case 30:return t.flags|=33554432,De(t),null}throw Error(K(156,t.tag))}function P2(e,t){switch(lm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(We),ni(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Js(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(K(340));al()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));al()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return cm(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return ni(),null;case 10:return Pn(t.type),null;case 22:case 23:return Ft(t),um(),e!==null&&vt(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pn(We),null;case 25:return null;default:return null}}function Tb(e,t){switch(lm(t),t.tag){case 3:Pn(We),ni();break;case 26:case 27:case 5:Js(t);break;case 4:ni();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:cm(t);break;case 10:Pn(t.type);break;case 22:case 23:Ft(t),um(),e!==null&&vt(Ja);break;case 24:Pn(We)}}function Ho(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(s){Oe(t,t.return,s)}}function ja(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,l=t;var u=n,d=s;try{d()}catch(p){Oe(l,u,p)}}}a=a.next}while(a!==i)}}catch(p){Oe(t,t.return,p)}}function zb(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Mg(t,n)}catch(a){Oe(e,e.return,a)}}}function Ub(e,t,n){n.props=ul(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Oe(e,t,a)}}function xn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var l=e.stateNode,i=Xn(e.memoizedProps,l);(l.ref===null||l.ref.name!==i)&&(l.ref=by(i)),a=l.ref;break;case 7:if(e.stateNode===null){var o=new Jt(e);Dt(e.child,!1,MU,o,void 0,void 0),e.stateNode=o}a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(s){Oe(e,t,s)}}function mt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Oe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Oe(e,t,l)}else n.current=null}function pr(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)_y(e.stateNode,t[n])}function kf(e){for(var t=e.return;t!==null&&(Tm(t)&&_y(e.stateNode,t.stateNode),!wm(t));)t=t.return}function oo(e){for(var t=e.return;t!==null&&(Tm(t)&&DU(e.stateNode,t.stateNode),!wm(t));)t=t.return}function wm(e){return e.tag===5||e.tag===3||e.tag===27}function Tm(e){return e&&e.tag===7&&e.stateNode!==null}function Pc(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Oe(e,e.return,l)}}function Ru(e,t,n){try{var a=e.stateNode;SU(a,e.type,n,t),a[Lt]=t}catch(l){Oe(e,e.return,l)}}function $b(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function Au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$b(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(l),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wn)),pr(e,a),ze=!0;else if(l!==4&&(l===27&&(pr(e,a),a=null,Va(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Kc(e,t,n,a),e=e.sibling;e!==null;)Kc(e,t,n,a),e=e.sibling}function fr(e,t,n,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?n.insertBefore(l,t):n.appendChild(l),pr(e,a),ze=!0;else if(l!==4&&(l===27&&(pr(e,a),a=null,Va(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(fr(e,t,n,a),e=e.sibling;e!==null;)fr(e,t,n,a),e=e.sibling}function Eb(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);bt(t,a,n),t[pt]=e,t[Lt]=n}catch(i){Oe(e,e.return,i)}}var hr=!1,qt=null;function Nf(e){(e.tag===30||e.subtreeFlags&33554432)&&(hr=!0)}var kn=null;function wf(){var e=kn;return kn=null,e}var Et=0;function Ni(e,t,n,a,l){return Et=0,Rb(e.child,t,n,a,l)}function Rb(e,t,n,a,l){for(var i=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(a!==null){var s=hd(o);a.push(s),s.view&&(i=!0)}else i||hd(o).view&&(i=!0);hr=!0,vy(o,Et===0?t:t+"_"+Et,n),Et++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Rb(e.child,t,n,a,l)&&(i=!0));e=e.sibling}return i}function Rn(e,t){for(;e!==null;)e.tag===5?gy(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Rn(e.child,t)),e=e.sibling}function Os(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Os(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(K(544));var n=t.name;t=aa(t.default,t.share),t!=="none"&&(Ni(e,n,t,null,!1)||Rn(e.child,!1))}e=e.sibling}}function Xc(e,t){if(e.tag===30){var n=e.stateNode,a=e.memoizedProps,l=Xn(a,n),i=aa(a.default,n.paired?a.share:a.enter);i!=="none"?Ni(e,l,i,null,!1)?(Os(e),n.paired||t||si(e,a.onEnter)):Rn(e.child,!1):Os(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xc(e,t),e=e.sibling;else Os(e)}function Qc(e){if(qt!==null&&qt.size!==0){var t=qt;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,a=n.name;if(a!=null&&a!=="auto"){var l=t.get(a);if(l!==void 0){var i=aa(n.default,n.share);if(i!=="none"&&(Ni(e,a,i,null,!1)?(i=e.stateNode,l.paired=i,i.paired=l,si(e,n.onShare)):Rn(e.child,!1)),t.delete(a),t.size===0)break}}}Qc(e)}e=e.sibling}}}function Jc(e){if(e.tag===30){var t=e.memoizedProps,n=Xn(t,e.stateNode),a=qt!==null?qt.get(n):void 0,l=aa(t.default,a!==void 0?t.share:t.exit);l!=="none"&&(Ni(e,n,l,null,!1)?a!==void 0?(l=e.stateNode,a.paired=l,l.paired=a,qt.delete(n),si(e,t.onShare)):si(e,t.onExit):Rn(e.child,!1)),qt!==null&&Qc(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jc(e),e=e.sibling;else qt!==null&&Qc(e)}function Ab(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Xn(t,e.stateNode);t=aa(t.default,t.update),e.flags&=-5,t!=="none"&&Ni(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Ab(e);e=e.sibling}}function Wc(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Rn(e.child,!1))}Wc(e)}e=e.sibling}}function Bs(e){if(e.tag===30)e.stateNode.paired=null,Rn(e.child,!1),Wc(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Bs(e),e=e.sibling;else Wc(e)}function Ob(e){for(e=e.child;e!==null;)e.tag===30?Rn(e.child,!1):e.subtreeFlags&33554432&&Ob(e),e=e.sibling}function zm(e,t,n,a,l,i,o){for(var s=!1;t!==null;){if(t.tag===5){var u=t.stateNode;if(i!==null&&Et<i.length){var d=i[Et],p=hd(u);(d.view||p.view)&&(s=!0);var m;if(m=(e.flags&4)===0)if(p.clip)m=!0;else{m=d.rect;var h=p.rect;m=m.y!==h.y||m.x!==h.x||m.height!==h.height||m.width!==h.width}m&&(e.flags|=4),p.abs?p=!d.abs:(d=d.rect,p=p.rect,p=d.height!==p.height||d.width!==p.width),p&&(e.flags|=32)}else e.flags|=32;e.flags&4&&vy(u,Et===0?n:n+"_"+Et,l),s&&e.flags&4||(kn===null&&(kn=[]),kn.push(u,Et===0?a:a+"_"+Et,t.memoizedProps)),Et++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:zm(e,t.child,n,a,l,i,o)&&(s=!0));t=t.sibling}return s}function Bb(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=e.stateNode,l=Xn(n,a),i=aa(n.default,n.update),o;o=e.memoizedState,e.memoizedState=null,a=e;var s=e.child;Et=0,l=zm(a,s,l,l,i,o,!1),e.flags&4&&l&&si(e,n.onUpdate)}else e.subtreeFlags&33554432&&Bb(e);e=e.sibling}}var it=!1,Ee=!1,bn=!1,Ou=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,ot=null,yn=!1,qi=!1,vr=!1,ed=!1;function K2(e,t,n){if(e=e.containerInfo,md=pi,e=Sg(e),em(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var s=0,u=-1,d=-1,p=0,m=0,h=e,v=null;t:for(;;){for(var k;h!==a||i!==0&&h.nodeType!==3||(u=s+i),h!==o||l!==0&&h.nodeType!==3||(d=s+l),h.nodeType===3&&(s+=h.nodeValue.length),(k=h.firstChild)!==null;)v=h,h=k;for(;;){if(h===e)break t;if(v===a&&++p===i&&(u=s),v===o&&++m===l&&(d=s),(k=h.nextSibling)!==null)break;h=v,v=h.parentNode}h=k}a=u===-1||d===-1?null:{start:u,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(pd={focusedElem:e,selectionRange:a},pi=!1,n=(n&335544064)===n,ot=t,t=n?9270:1024;ot!==null;){if(e=ot,n&&(a=e.deletions,a!==null))for(i=0;i<a.length;i++)n&&Jc(a[i]);if(e.alternate===null&&e.flags&2)n&&Nf(e),rs(n);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&n&&Jc(a),rs(n);continue}else if(a!==null&&a.memoizedState!==null){n&&Nf(e),rs(n);continue}}a=e.child,e.subtreeFlags&t&&a!==null?(a.return=e,ot=a):(n&&Ab(e),rs(n))}}qt=null}function rs(e){for(;ot!==null;){var t=ot,n=e,a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(l&1024&&a!==null){n=void 0,l=a.memoizedProps,a=a.memoizedState;var i=t.stateNode;try{var o=ul(t.type,l);n=i.getSnapshotBeforeUpdate(o,a),i.__reactInternalSnapshotBeforeUpdate=n}catch(s){Oe(t,t.return,s)}}break;case 3:if(l&1024){if(a=t.stateNode.containerInfo,n=a.nodeType,n===9)vd(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":vd(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&a!==null&&(n=Xn(a.memoizedProps,a.stateNode),l=t.memoizedProps,l=aa(l.default,l.update),l!=="none"&&Ni(a,n,l,a.memoizedState=[],!0));break;default:if(l&1024)throw Error(K(163))}if(a=t.sibling,a!==null){a.return=t.return,ot=a;break}ot=t.return}}function Zb(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Sn(e,n),a&4&&Ho(5,n);break;case 1:if(Sn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Oe(n,n.return,o)}else{var l=ul(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Oe(n,n.return,o)}}a&64&&zb(n),a&512&&xn(n,n.return);break;case 3:if(Sn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Mg(e,t)}catch(o){Oe(n,n.return,o)}}break;case 27:t===null&&a&4&&Eb(n);case 26:case 5:Sn(e,n),t===null&&a&4&&Pc(n),a&512&&xn(n,n.return);break;case 12:Sn(e,n);break;case 31:Sn(e,n),a&4&&Lb(e,n);break;case 13:Sn(e,n),a&4&&Vb(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sU.bind(null,n),HU(e,n))));break;case 22:if(a=n.memoizedState!==null||it,!a){var i=t!==null&&t.memoizedState!==null||Ee;t=it,l=Ee,it=a,(Ee=i)&&!l?(a=2,n.subtreeFlags&8772&&(a|=1),mn(e,n,a)):Sn(e,n),it=t,Ee=l}break;case 30:Sn(e,n),a&512&&xn(n,n.return);break;case 7:a&512&&xn(n,n.return);default:Sn(e,n)}}function td(e,t){for(e=e.child;e!==null;)jb(e,t),e=e.sibling}function jb(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var a=n.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var l=e.stateNode,i=e.memoizedProps.style,o=i!=null&&i.hasOwnProperty("display")?i.display:null;l.style.display=o==null||typeof o=="boolean"?"":(""+o).trim()}}catch(u){Oe(e,e.return,u)}nd(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ze=!0}catch(u){Oe(e,e.return,u)}break;case 18:try{var s=e.stateNode;t?Vf(s,!0):Vf(e.stateNode,!1)}catch(u){Oe(e,e.return,u)}break;case 22:case 23:e.memoizedState===null&&td(e,t);break;default:td(e,t)}}function nd(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,a=t;switch(n.tag){case 4:jb(n,a);break e;case 22:n.memoizedState===null&&nd(n,a);break e;default:nd(n,a)}}e=e.sibling}}function Mb(e){var t=e.alternate;t!==null&&(e.alternate=null,Mb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,zt=!1;function dn(e,t,n){for(n=n.child;n!==null;)Db(e,t,n),n=n.sibling}function Db(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Bo,n)}catch{}switch(n.tag){case 26:Ee||mt(n,t),dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ee&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ee||mt(n,t),oo(n);var a=Ge,l=zt;Va(n.type)&&(Ge=n.stateNode,zt=!1),dn(e,t,n),Ny(n.stateNode,n.type,n.memoizedProps),Ge=a,zt=l;break;case 5:Ee||mt(n,t),oo(n);case 6:if(n.tag===6&&oo(n),a=Ge,l=zt,Ge=null,dn(e,t,n),Ge=a,zt=l,Ge!==null)if(zt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(n.stateNode),ze=!0}catch(i){Oe(n,t,i)}else try{Ge.removeChild(n.stateNode),ze=!0}catch(i){Oe(n,t,i)}break;case 18:Ge!==null&&(zt?(e=Ge,Lf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),fi(e)):Lf(Ge,n.stateNode));break;case 4:a=Ge,l=zt,Ge=n.stateNode.containerInfo,zt=!0,dn(e,t,n),Ge=a,zt=l;break;case 0:case 11:case 14:case 15:ja(2,n,t),Ee||ja(4,n,t),dn(e,t,n);break;case 1:Ee||(mt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Ub(n,t,a)),dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:Ee=(a=Ee)||n.memoizedState!==null,dn(e,t,n),Ee=a;break;case 30:mt(n,t),dn(e,t,n);break;case 7:Ee||mt(n,t),dn(e,t,n);break;default:dn(e,t,n)}}function Lb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fi(e)}catch(n){Oe(t,t.return,n)}}}function Vb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fi(e)}catch(n){Oe(t,t.return,n)}}function X2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tf),t;default:throw Error(K(435,e.tag))}}function us(e,t){var n=X2(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=rU.bind(null,e,a);a.then(l,l)}})}function _t(e,t,n){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],o=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(Va(u.type)){Ge=u.stateNode,zt=!1;break e}break;case 5:Ge=u.stateNode,zt=!1;break e;case 3:case 4:Ge=u.stateNode.containerInfo,zt=!0;break e}u=u.return}if(Ge===null)throw Error(K(160));Db(o,s,i),Ge=null,zt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Hb(t,e,n),t=t.sibling}var pn=null;function Hb(e,t,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var o=a[i];o.ref.impl=o.nextImpl}_t(t,e,n),Ct(e),l&4&&(ja(3,e,e.return),Ho(3,e),ja(5,e,e.return));break;case 1:_t(t,e,n),Ct(e),l&512&&(Ee||a===null||mt(a,a.return)),l&64&&it&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(i=pn,_t(t,e,n),Ct(e),l&512&&(Ee||a===null||mt(a,a.return)),l&4)if(l=a!==null?a.memoizedState:null,n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null)if(it)e.stateNode=hy(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,l=i.ownerDocument||i;t:switch(t){case"title":a=l.getElementsByTagName("title")[0],(!a||a[Mo]||a[pt]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(t),l.head.insertBefore(a,l.querySelector("head > title"))),bt(a,t,n),a[pt]=e,rt(a),t=a;break e;case"link":if(i=Kf("link","href",l).get(t+(n.href||""))){for(o=0;o<i.length;o++)if(a=i[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(o,1);break t}}a=l.createElement(t),bt(a,t,n),l.head.appendChild(a);break;case"meta":if(i=Kf("meta","content",l).get(t+(n.content||""))){for(o=0;o<i.length;o++)if(a=i[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(o,1);break t}}a=l.createElement(t),bt(a,t,n),l.head.appendChild(a);break;default:throw Error(K(468,t))}a[pt]=e,rt(a),t=a}e.stateNode=t}else it||yd(i,e.type,e.stateNode);else e.stateNode=Pf(i,n,e.memoizedProps);else l!==n?(l===null?(t=a.stateNode,t===null||Ee||t.parentNode.removeChild(t)):l.count--,n===null?it||yd(i,e.type,e.stateNode):Pf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ru(e,e.memoizedProps,a.memoizedProps);break;case 27:_t(t,e,n),Ct(e),l&512&&(Ee||a===null||mt(a,a.return)),a!==null&&l&4&&Ru(e,e.memoizedProps,a.memoizedProps);break;case 5:if(i=bn,bn=!1,_t(t,e,n),bn=i,Ct(e),l&512&&(Ee||a===null||mt(a,a.return)),e.flags&32){t=e.stateNode;try{li(t,""),ze=!0}catch(p){Oe(e,e.return,p)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,Ru(e,t,a!==null?a.memoizedProps:t)),l&1024&&(Ou=!0);break;case 6:if(_t(t,e,n),Ct(e),l&4){if(e.stateNode===null)throw Error(K(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ze=!0}catch(p){Oe(e,e.return,p)}}break;case 3:if(ze=!1,Ds=null,i=pn,pn=No(t.containerInfo),_t(t,e,n),pn=i,Ct(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(p){Oe(e,e.return,p)}Ou&&(Ou=!1,Ib(e)),ze=!1;break;case 4:l=bn,bn=it,a=Ep(),i=pn,pn=No(e.stateNode.containerInfo),_t(t,e,n),Ct(e),pn=i,ze&&qi&&(vr=!0),ze=a,bn=l;break;case 12:_t(t,e,n),Ct(e);break;case 31:_t(t,e,n),Ct(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,us(e,t)));break;case 13:_t(t,e,n),Ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wr=Yt()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,us(e,t)));break;case 22:i=e.memoizedState!==null,o=a!==null&&a.memoizedState!==null;var s=it,u=Ee,d=bn;it=s||i,bn=d||i,Ee=u||o,_t(t,e,n),Ee=u,bn=d,it=s,Ct(e),l&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||a===null||o||it||Ee||(t=o||Ee,n=it,a=Ee,it=i||it,Ee=t,ua(e,2),it=n,Ee=a),!i&&bn||td(e,i)),l&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,us(e,n))));break;case 19:_t(t,e,n),Ct(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,us(e,t)));break;case 30:l&512&&(Ee||a===null||mt(a,a.return)),l=Ep(),i=qi,o=(n&335544064)===n,s=e.memoizedProps,qi=o&&aa(s.default,s.update)!=="none",_t(t,e,n),Ct(e),o&&a!==null&&ze&&(e.flags|=4),qi=i,ze=l;break;case 21:break;case 7:l&512&&(Ee||a===null||mt(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:_t(t,e,n),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if($b(a)){n=a;break}a=a.return}a=null;for(var l=e.return;l!==null;){if(Tm(l)){var i=l.stateNode;a===null?a=[i]:a.push(i)}if(wm(l))break;l=l.return}var o=a;if(n==null)throw Error(K(160));switch(n.tag){case 27:var s=n.stateNode,u=Au(e);fr(e,u,s,o);break;case 5:var d=n.stateNode;n.flags&32&&(li(d,""),n.flags&=-33);var p=Au(e);fr(e,p,d,o);break;case 3:case 4:var m=n.stateNode.containerInfo,h=Au(e);Kc(e,h,m,o);break;default:throw Error(K(161))}}catch(v){Oe(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ib(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ib(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,pi=!0,t.reset(),pi=!1),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Fb(t,e),t=t.sibling;else Bb(t)}function Fb(e,t){var n=e.alternate;if(n===null)Xc(e,!1);else switch(e.tag){case 3:if(ed=yn=!1,wf(),Sl(t,e),!yn&&!vr){if(e=kn,e!==null)for(var a=0;a<e.length;a+=3){n=e[a];var l=e[a+1];gy(n,e[a+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ed=!0}kn=null;break;case 5:Sl(t,e);break;case 4:a=yn,yn=!1,Sl(t,e),yn&&(vr=!0),yn=a;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Xc(e,!1):Sl(t,e));break;case 30:a=yn,l=wf(),yn=!1,Sl(t,e),yn&&(e.flags|=4);var i=e.memoizedProps,o=e.stateNode;t=Xn(i,o),o=Xn(n.memoizedProps,o);var s=aa(i.default,i.update);s==="none"?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,Et=0,t=zm(e,n,t,o,s,i,!0),Et!==(i===null?0:i.length)&&(e.flags|=32)),e.flags&4&&t?(si(e,e.memoizedProps.onUpdate),kn=l):l!==null&&(l.push.apply(l,kn),kn=l),yn=e.flags&32?!0:a;break;default:Sl(t,e)}}function Sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zb(e,t.alternate,t),t=t.sibling}function ua(e,t){for(e=e.child;e!==null;){var n=e,a=t;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),ua(n,a);break;case 1:mt(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&Ub(n,n.return,l),ua(n,a);break;case 27:a&2&&Ny(n.stateNode,n.type,n.memoizedProps);case 5:mt(n,n.return),n.tag!==5&&n.tag!==27||oo(n),ua(n,a);break;case 6:oo(n);break;case 26:mt(n,n.return),l=n.stateNode,n.memoizedState!==null||l===null||Ee||l.parentNode.removeChild(l),ua(n,a);break;case 22:n.memoizedState===null&&ua(n,a);break;case 30:mt(n,n.return),ua(n,a);break;case 7:mt(n,n.return);default:ua(n,a)}e=e.sibling}}function mn(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags,s=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:mn(l,i,n),Ho(4,i);break;case 1:if(mn(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){Oe(a,a.return,p)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)jg(d[l],u)}catch(p){Oe(a,a.return,p)}}s&&o&64&&zb(i),xn(i,i.return);break;case 27:n&2&&Eb(i);case 5:i.tag!==5&&i.tag!==27||kf(i),mn(l,i,n),s&&a===null&&o&4&&Pc(i),xn(i,i.return);break;case 6:kf(i);break;case 26:u=i.stateNode,i.memoizedState!==null||u===null||it||yd(No(u.ownerDocument),i.type,u),mn(l,i,n),s&&a===null&&o&4&&Pc(i),xn(i,i.return);break;case 12:mn(l,i,n);break;case 31:mn(l,i,n),s&&o&4&&Lb(l,i);break;case 13:mn(l,i,n),s&&o&4&&Vb(l,i);break;case 22:i.memoizedState===null&&mn(l,i,n),xn(i,i.return);break;case 30:mn(l,i,n),xn(i,i.return);break;case 7:xn(i,i.return);default:mn(l,i,n)}t=t.sibling}}function Um(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Lo(n))}function $m(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lo(e))}function Wt(e,t,n,a){var l=(n&335544064)===n;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)qb(e,t,n,a),t=t.sibling;else l&&Ob(t)}function qb(e,t,n,a){var l=(n&335544064)===n;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Bs(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,n,a),i&2048&&Ho(9,t);break;case 1:Wt(e,t,n,a);break;case 3:Wt(e,t,n,a),l&&ed&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&Lo(i)));break;case 12:if(i&2048){Wt(e,t,n,a),i=t.stateNode;try{var o=t.memoizedProps,s=o.id,u=o.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(d){Oe(t,t.return,d)}}else Wt(e,t,n,a);break;case 31:Wt(e,t,n,a);break;case 13:Wt(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?(l&&s!==null&&s.memoizedState===null&&Bs(s),o._visibility&2?Wt(e,t,n,a):so(e,t)):(l&&s!==null&&s.memoizedState!==null&&Bs(t),o._visibility&2?Wt(e,t,n,a):(o._visibility|=2,Cl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1))),i&2048&&Um(s,t);break;case 24:Wt(e,t,n,a),i&2048&&$m(t.alternate,t);break;case 30:l&&(i=t.alternate,i!==null&&(Rn(i.child,!0),Rn(t.child,!0))),Wt(e,t,n,a);break;default:Wt(e,t,n,a)}}function Cl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,s=n,u=a,d=o.flags;switch(o.tag){case 0:case 11:case 15:Cl(i,o,s,u,l),Ho(8,o);break;case 23:break;case 22:var p=o.stateNode;o.memoizedState!==null?p._visibility&2?Cl(i,o,s,u,l):so(i,o):(p._visibility|=2,Cl(i,o,s,u,l)),l&&d&2048&&Um(o.alternate,o);break;case 24:Cl(i,o,s,u,l),l&&d&2048&&$m(o.alternate,o);break;default:Cl(i,o,s,u,l)}t=t.sibling}}function so(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:so(n,a),l&2048&&Um(a.alternate,a);break;case 24:so(n,a),l&2048&&$m(a.alternate,a);break;default:so(n,a)}t=t.sibling}}var Ga=8192;function Ia(e,t,n){if(e.subtreeFlags&Ga)for(e=e.child;e!==null;)Gb(e,t,n),e=e.sibling}function Gb(e,t,n){switch(e.tag){case 26:Ia(e,t,n),e.flags&Ga&&(e.memoizedState!==null?n$(n,pn,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Qf(n,e)));break;case 5:Ia(e,t,n),e.flags&Ga&&(e=e.stateNode,(t&335544128)===t&&Qf(n,e));break;case 3:case 4:var a=pn;pn=No(e.stateNode.containerInfo),Ia(e,t,n),pn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ga,Ga=16777216,Ia(e,t,n),Ga=a):Ia(e,t,n));break;case 30:if(e.flags&Ga&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var l=e.stateNode;l.paired=null,qt===null&&(qt=new Map),qt.set(a,l)}Ia(e,t,n);break;default:Ia(e,t,n)}}function Yb(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bi(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];ot=a,Kb(a,e)}Yb(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pb(e),e=e.sibling}function Pb(e){switch(e.tag){case 0:case 11:case 15:Bi(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Bi(e);break;case 12:Bi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zs(e)):Bi(e);break;default:Bi(e)}}function Zs(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];ot=a,Kb(a,e)}Yb(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),Zs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Zs(t));break;default:Zs(t)}e=e.sibling}}function Kb(e,t){for(;ot!==null;){var n=ot;switch(n.tag){case 0:case 11:case 15:ja(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Lo(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,ot=a;else e:for(n=e;ot!==null;){a=ot;var l=a.sibling,i=a.return;if(Mb(a),a===n){ot=null;break e}if(l!==null){l.return=i,ot=l;break e}ot=i}}}var Q2={getCacheForType:function(e){var t=ft(We),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ft(We).controller.signal}},J2=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ze=null,Ce=null,ke=0,Re=0,Ht=null,ya=!1,wi=!1,Em=!1,ea=0,Ke=0,Ma=0,el=0,gr=0,Gt=0,oi=0,ro=null,Ut=null,ad=!1,Wr=0,Xb=0,br=1/0,yr=null,Ua=null,Ye=0,hn=null,cl=null,En=0,ld=0,id=null,Qb=null,Xl=null,Ql=null,Jl=null,uo=0,js=null;function Xt(){return Ue&2&&ke!==0?ke&-ke:fe.T!==null?Am():tg()}function Jb(){if(Gt===0)if(!(ke&536870912)||be){var e=Jo;Jo<<=1,!(Jo&3932160)&&(Jo=262144),Gt=e}else Gt=536870912;return e=yt.current,e!==null&&(e.flags|=32),Gt}function si(e,t){if(t!=null){var n=e.stateNode,a=n.ref;a===null&&(a=n.ref=by(Xn(e.memoizedProps,n))),Ql===null&&(Ql=[]),Ql.push(t.bind(null,a))}}function Mt(e,t,n){(e===Ze&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(ri(e,0),Sa(e,ke,Gt,!1)),jo(e,n),(!(Ue&2)||e!==Ze)&&(e===Ze&&(!(Ue&2)&&(el|=n),Ke===4&&Sa(e,ke,Gt,!1)),Zn(e))}function Wb(e,t,n){if(Ue&6)throw Error(K(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Zo(e,t),l=a?tU(e,t):Bu(e,t,!0),i=a;do{if(l===0){wi&&!a&&Sa(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!W2(n)){l=Bu(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;l=ro;var u=s.current.memoizedState.isDehydrated;if(u&&(ri(s,o).flags|=256),o=Bu(s,o,!1),o!==2&&o!==6){if(Em&&!u){s.errorRecoveryDisabledLanes|=i,el|=i,l=4;break e}i=Ut,Ut=l,i!==null&&(Ut===null?Ut=i:Ut.push.apply(Ut,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){ri(e,0),Sa(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(K(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Sa(a,t,Gt,!ya);break e;case 2:Ut=null;break;case 3:case 5:break;default:throw Error(K(329))}if((t&62914560)===t&&(l=Wr+300-Yt(),10<l)){if(Sa(a,t,Gt,!ya),Dr(a,0,!0)!==0)break e;En=t,a.timeoutHandle=Bm(zf.bind(null,a,n,Ut,yr,ad,t,Gt,el,oi,ya,i,"Throttled",-0,0),l);break e}zf(a,n,Ut,yr,ad,t,Gt,el,oi,ya,i,null,-0,0)}}break}while(!0);Zn(e)}function zf(e,t,n,a,l,i,o,s,u,d,p,m,h,v){e.timeoutHandle=-1;var k=t.subtreeFlags,S=(i&335544064)===i;if(m=null,(S||k&8192||(k&16785408)===16785408)&&(m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wn},qt=null,Gb(t,i,m),S&&(k=m,S=e.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(k.count++,k.waitingForViewTransition=!0,k=wo.bind(k),S.finished.then(k,k))),k=(i&62914560)===i?Wr-Yt():(i&4194048)===i?Xb-Yt():0,k=a$(m,k),k!==null)){En=i,e.cancelPendingCommit=k($f.bind(null,e,t,i,n,a,l,o,s,u,d,p,m,null,h,v)),Sa(e,i,o,!d);return}$f(e,t,i,n,a,l,o,s,u,d,p,m)}function W2(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Qt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sa(e,t,n,a){t=Xv(e,t),t&=~gr,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-Kt(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&Jv(e,n,t)}function eu(){return Ue&6?!0:(Io(0),!1)}function Rm(){if(Ce!==null){if(Re===0)var e=Ce.return;else e=Ce,Hn=bl=null,hm(e),Yl=null,yo=0,e=Ce;for(;e!==null;)Tb(e.alternate,e),e=e.return;Ce=null}}function ri(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,CU(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),En=0,Rm(),Ze=e,Ce=n=Yn(e.current,null),ke=t,Re=0,Ht=null,ya=!1,wi=Zo(e,t),Em=!1,oi=Gt=gr=el=Ma=Ke=0,Ut=ro=null,ad=!1,ea=Xv(e,t),Fr(),n}function ey(e,t){ge=null,fe.H=dr,t===ki||t===Yr?(t=ef(),Re=3):t===sm?(t=ef(),Re=4):Re=t===Cm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ht=t,Ce===null&&(Ke=1,mr(e,ln(t,e.current)))}function ty(){var e=yt.current;return e===null?!0:(ke&4194048)===ke?St===null:(ke&62914560)===ke||ke&536870912?e===St:!1}function ny(){var e=fe.H;return fe.H=dr,e===null?dr:e}function ay(){var e=fe.A;return fe.A=Q2,e}function Sr(){Ke=4,ya||(ke&4194048)!==ke&&yt.current!==null||(wi=!0),!(Ma&134217727)&&!(el&134217727)||Ze===null||Sa(Ze,ke,Gt,!1)}function Bu(e,t,n){var a=Ue;Ue|=2;var l=ny(),i=ay();(Ze!==e||ke!==t)&&(yr=null,ri(e,t)),t=!1;var o=Ke;e:do try{if(Re!==0&&Ce!==null){var s=Ce,u=Ht;switch(Re){case 8:Rm(),o=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var d=Re;if(Re=0,Ht=null,Ll(e,s,u,d),n&&wi){o=0;break e}break;default:d=Re,Re=0,Ht=null,Ll(e,s,u,d)}}eU(),o=Ke;break}catch(p){ey(e,p)}while(!0);return t&&e.shellSuspendCounter++,Hn=bl=null,Ue=a,fe.H=l,fe.A=i,Ce===null&&(Ze=null,ke=0,Fr()),o}function eU(){for(;Ce!==null;)ly(Ce)}function tU(e,t){var n=Ue;Ue|=2;var a=ny(),l=ay();Ze!==e||ke!==t?(yr=null,br=Yt()+500,ri(e,t)):wi=Zo(e,t);e:do try{if(Re!==0&&Ce!==null){t=Ce;var i=Ht;t:switch(Re){case 1:Re=0,Ht=null,Ll(e,t,i,1);break;case 2:case 9:if(Wp(i)){Re=0,Ht=null,Uf(t);break}t=function(){Re!==2&&Re!==9||Ze!==e||(Re=7),Zn(e)},i.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Wp(i)?(Re=0,Ht=null,Uf(t)):(Re=0,Ht=null,Ll(e,t,i,7));break;case 5:var o=null;switch(Ce.tag){case 26:o=Ce.memoizedState;case 5:case 27:var s=Ce;if(o?zy(o):s.stateNode.complete){Re=0,Ht=null;var u=s.sibling;if(u!==null)Ce=u;else{var d=s.return;d!==null?(Ce=d,tu(d)):Ce=null}break t}}Re=0,Ht=null,Ll(e,t,i,5);break;case 6:Re=0,Ht=null,Ll(e,t,i,6);break;case 8:Rm(),Ke=6;break e;default:throw Error(K(462))}}nU();break}catch(p){ey(e,p)}while(!0);return Hn=bl=null,fe.H=a,fe.A=l,Ue=n,Ce!==null?0:(Ze=null,ke=0,Fr(),Ke)}function nU(){for(;Ce!==null&&!yz();)ly(Ce)}function ly(e){var t=wb(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?tu(e):Ce=t}function Uf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gf(n,t,t.pendingProps,t.type,void 0,ke);break;case 11:t=gf(n,t,t.pendingProps,t.type.render,t.ref,ke);break;case 5:hm(t);var a=t;a===ct&&(be?(lr(a),a.tag===5&&a.stateNode!=null&&(Le=a.stateNode)):(lr(a),be=!0));default:Tb(n,t),t=Ce=zg(t,ea),t=wb(n,t,ea)}e.memoizedProps=e.pendingProps,t===null?tu(e):Ce=t}function Ll(e,t,n,a){Hn=bl=null,hm(t),Yl=null,yo=0;var l=t.return;try{if(I2(e,l,t,n,ke)){Ke=1,mr(e,ln(n,e.current)),Ce=null;return}}catch(i){if(l!==null)throw Ce=l,i;Ke=1,mr(e,ln(n,e.current)),Ce=null;return}t.flags&32768?(be||a===1?e=!0:wi||ke&536870912?e=!1:(ya=e=!0,(a===2||a===9||a===3||a===6)&&(a=yt.current,a!==null&&a.tag===13&&(a.flags|=16384))),iy(t,e)):tu(t)}function tu(e){var t=e;do{if(t.flags&32768){iy(t,ya);return}e=t.return;var n=Y2(t.alternate,t,ea);if(n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Ke===0&&(Ke=5)}function iy(e,t){do{var n=P2(e.alternate,e);if(n!==null){n.flags&=32767,Ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=n}while(e!==null);Ke=6,Ce=null}function $f(e,t,n,a,l,i,o,s,u,d,p,m){e.cancelPendingCommit=null;do nu();while(Ye!==0);if(Ue&6)throw Error(K(327));if(t!==null){if(t===e.current)throw Error(K(177));e===Ze&&(Ce=Ze=null,ke=0),cl=t,hn=e,En=n,id=l,Qb=a,aU(e,t,n,o,s,u,m)}}function aU(e,t,n,a,l,i,o){var s=t.lanes|t.childLanes;if(ld=s,s|=tm,Uz(e,n,s,a,l,i),Ql=null,(n&335544064)===n?(Jl=E2(e),a=10262):(Jl=null,a=10256),t.subtreeFlags&a||t.flags&a?(e.callbackNode=null,e.callbackPriority=0,uU(Ws,function(){return ud(),null})):(e.callbackNode=null,e.callbackPriority=0),hr=!1,a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=fe.T,fe.T=null,l=$e.p,$e.p=2,i=Ue,Ue|=4;try{K2(e,t,n)}finally{Ue=i,$e.p=l,fe.T=a}}Ye=1,hr?Xl=UU(o,e.containerInfo,Jl,od,sd,iU,rd,ud,lU):(od(),sd(),rd())}function lU(e){if(Ye!==0){var t=hn.onRecoverableError;t(e,{componentStack:null})}}function iU(){Ye===3&&(Ye=0,Fb(cl,hn),Ye=4)}function od(){if(Ye===1){Ye=0;var e=hn,t=cl,n=En,a=(t.flags&13878)!==0;if(t.subtreeFlags&13878||a){a=fe.T,fe.T=null;var l=$e.p;$e.p=2;var i=Ue;Ue|=4;try{qi=vr=!1,Hb(t,e,n),n=pd;var o=Sg(e.containerInfo),s=n.focusedElem,u=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&yg(s.ownerDocument.documentElement,s)){if(u!==null&&em(s)){var d=u.start,p=u.end;if(p===void 0&&(p=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(p,s.value.length);else{var m=s.ownerDocument||document,h=m&&m.defaultView||window;if(h.getSelection){var v=h.getSelection(),k=s.textContent.length,S=Math.min(u.start,k),C=u.end===void 0?S:Math.min(u.end,k);!v.extend&&S>C&&(o=C,C=S,S=o);var b=qp(s,S),f=qp(s,C);if(b&&f&&(v.rangeCount!==1||v.anchorNode!==b.node||v.anchorOffset!==b.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)){var y=m.createRange();y.setStart(b.node,b.offset),v.removeAllRanges(),S>C?(v.addRange(y),v.extend(f.node,f.offset)):(y.setEnd(f.node,f.offset),v.addRange(y))}}}}for(m=[],v=s;v=v.parentNode;)v.nodeType===1&&m.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<m.length;s++){var _=m[s];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}pi=!!md,pd=md=null}finally{Ue=i,$e.p=l,fe.T=a}}e.current=t,Ye=2}}function sd(){if(Ye===2){Ye=0;var e=hn,t=cl,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=fe.T,fe.T=null;var a=$e.p;$e.p=2;var l=Ue;Ue|=4;try{Zb(e,t.alternate,t)}finally{Ue=l,$e.p=a,fe.T=n}}Ye=3}}function rd(){if(Ye===4||Ye===3){Ye=0;var e=Xl;Xl=null,Sz();var t=hn,n=cl,a=En,l=Qb,i=(a&335544064)===a?10262:10256;if(n.subtreeFlags&i||n.flags&i?Ye=5:(Ye=0,cl=hn=null,oy(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(Ua=null),Pd(a),n=n.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Bo,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=fe.T,i=$e.p,$e.p=2,fe.T=null;try{for(var o=t.onRecoverableError,s=0;s<l.length;s++){var u=l[s];o(u.value,{componentStack:u.stack})}}finally{fe.T=n,$e.p=i}}if(l=Ql,o=Jl,Jl=null,l!==null&&(Ql=null,o===null&&(o=[]),e!==null))for(u=0;u<l.length;u++)n=(0,l[u])(o),n!==void 0&&e.finished.finally(n);En&3&&nu(),Zn(t),i=t.pendingLanes,a&261930&&i&42?t===js?uo++:(uo=0,js=t):(uo=0,js=null),Io(0)}}function oy(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Lo(t)))}function nu(){return Xl!==null&&(Xl.skipTransition(),Xl=null),od(),sd(),rd(),ud()}function ud(){if(Ye!==5)return!1;var e=hn,t=ld;ld=0;var n=Pd(En),a=fe.T,l=$e.p;try{$e.p=32>n?32:n,fe.T=null,n=id,id=null;var i=hn,o=En;if(Ye=0,cl=hn=null,En=0,Ue&6)throw Error(K(331));var s=Ue;if(Ue|=4,Pb(i.current),qb(i,i.current,o,n),Ue=s,Io(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Bo,i)}catch{}return!0}finally{$e.p=l,fe.T=a,oy(e,t)}}function Ef(e,t,n){t=ln(n,t),t=Hc(e.stateNode,t,2),e=wa(e,t,2),e!==null&&(jo(e,2),Zn(e))}function Oe(e,t,n){if(e.tag===3)Ef(e,e,n);else for(;t!==null;){if(t.tag===3){Ef(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ua===null||!Ua.has(a))){e=ln(n,e),n=xb(2),a=wa(t,n,2),a!==null&&(_b(n,a,t,e),jo(a,2),Zn(a));break}}t=t.return}}function Zu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new J2;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Em=!0,l.add(n),e=oU.bind(null,e,t,n),t.then(e,e))}function oU(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ze===e&&(ke&n)===n&&(Ke===4||Ke===3&&(ke&62914560)===ke&&300>Yt()-Wr?Ue&2?gr|=n:ri(e,0):gr|=n,oi===ke&&(oi=0)),Zn(e)}function sy(e,t){t===0&&(t=Qv()),e=gl(e,t),e!==null&&(jo(e,t),Zn(e))}function sU(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sy(e,n)}function rU(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(K(314))}a!==null&&a.delete(t),sy(e,n)}function uU(e,t){return Gd(e,t)}var ui=null,kl=null,cd=!1,xr=!1,ju=!1,xa=0;function Zn(e){e!==kl&&e.next===null&&(kl===null?ui=kl=e:kl=kl.next=e),xr=!0,cd||(cd=!0,dU())}function Io(e,t){if(!ju&&xr){ju=!0;do for(var n=!1,a=ui;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Kt(42|e)+1)-1,i&=l&~(o&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Rf(a,i))}else i=ke,i=Dr(a,a===Ze?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(i&3)||Zo(a,i)||(n=!0,Rf(a,i));a=a.next}while(n);ju=!1}}function cU(){ry()}function ry(){xr=cd=!1;var e=0;xa!==0&&_U()&&(e=xa);for(var t=Yt(),n=null,a=ui;a!==null;){var l=a.next,i=uy(a,t);i===0?(a.next=null,n===null?ui=l:n.next=l,l===null&&(kl=n)):(n=a,(e!==0||i&3)&&(xr=!0)),a=l}Ye!==0&&Ye!==5||Io(e),xa!==0&&(xa=0)}function uy(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-Kt(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&a)&&(l[o]=zz(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}if(t=Ze,n=ke,n=Dr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&fu(a),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Zo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&fu(a),Pd(n)){case 2:case 8:n=Pv;break;case 32:n=Ws;break;case 268435456:n=Kv;break;default:n=Ws}return a=cy.bind(null,e),n=Gd(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&fu(a),e.callbackPriority=2,e.callbackNode=null,2}function cy(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(nu()&&e.callbackNode!==n)return null;var a=ke;return a=Dr(e,e===Ze?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Wb(e,a,t),uy(e,Yt()),e.callbackNode!=null&&e.callbackNode===n?cy.bind(null,e):null)}function Rf(e,t){if(nu())return null;Wb(e,t,!0)}function dU(){kU(function(){Ue&6?Gd(Yv,cU):ry()})}function Am(){if(xa===0){var e=ol;e===0&&(e=Qo,Qo<<=1,!(Qo&261888)&&(Qo=256)),xa=e}return xa}function Af(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ns(e)}function mU(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=Af((l[Lt]||null).action),o=a.submitter;o&&(t=(t=o[Lt]||null)?Af(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var s=new Vr("action","action",null,a,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(xa!==0){var u=new FormData(l,o);Lc(n,{pending:!0,data:u,method:l.method,action:i},null,u)}}else typeof i=="function"&&(s.preventDefault(),u=new FormData(l,o),Lc(n,{pending:!0,data:u,method:l.method,action:i},i,u))},currentTarget:l}]})}}for(var Mu=0;Mu<Uc.length;Mu++){var Du=Uc[Mu],pU=Du.toLowerCase(),fU=Du[0].toUpperCase()+Du.slice(1);vn(pU,"on"+fU)}vn(_g,"onAnimationEnd");vn(Cg,"onAnimationIteration");vn(kg,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(C2,"onTransitionRun");vn(k2,"onTransitionStart");vn(N2,"onTransitionCancel");vn(Ng,"onTransitionEnd");ai("onMouseEnter",["mouseout","mouseover"]);ai("onMouseLeave",["mouseout","mouseover"]);ai("onPointerEnter",["pointerout","pointerover"]);ai("onPointerLeave",["pointerout","pointerover"]);hl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hl("onBeforeInput",["compositionend","keypress","textInput","paste"]);hl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hU=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function dy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var s=a[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=d;try{i(l)}catch(p){tr(p)}l.currentTarget=null,i=u}else for(o=0;o<a.length;o++){if(s=a[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=d;try{i(l)}catch(p){tr(p)}l.currentTarget=null,i=u}}}}function _e(e,t){var n=t[Tp];n===void 0&&(n=t[Tp]=new Set);var a=e+"__bubble";n.has(a)||(my(t,e,2,!1),n.add(a))}function Lu(e,t,n){var a=0;t&&(a|=4),my(n,e,a,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function Om(e){if(!e[cs]){e[cs]=!0,ag.forEach(function(n){n!=="selectionchange"&&(hU.has(n)||Lu(n,!1,e),Lu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,Lu("selectionchange",!1,t))}}function my(e,t,n,a){switch(By(t)){case 2:var l=s$;break;case 8:l=r$;break;default:l=Vm}n=l.bind(null,t,n,e),l=void 0,!Nc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Vu(e,t,n,a,l){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===l)break;if(o===4)for(o=a.return;o!==null;){var u=o.tag;if((u===3||u===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;s!==null;){if(o=Pa(s),o===null)return;if(u=o.tag,u===5||u===6||u===26||u===27){a=i=o;continue e}s=s.parentNode}}a=a.return}dg(function(){var d=i,p=Xd(n),m=[];e:{var h=wg.get(e);if(h!==void 0){var v=Vr,k=e;switch(e){case"keypress":if(Ts(n)===0)break e;case"keydown":case"keyup":v=Wz;break;case"focusin":k="focus",v=Su;break;case"focusout":k="blur",v=Su;break;case"beforeblur":case"afterblur":v=Su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Vz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=l2;break;case _g:case Cg:case kg:v=Fz;break;case Ng:v=o2;break;case"scroll":case"scrollend":v=Dz;break;case"wheel":v=r2;break;case"copy":case"cut":case"paste":v=Gz;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jp;break;case"submit":v=n2;break;case"toggle":case"beforetoggle":v=c2}var S=(t&4)!==0,C=!S&&(e==="scroll"||e==="scrollend"),b=S?h!==null?h+"Capture":null:h;S=[];for(var f=d,y;f!==null;){var _=f;if(y=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||y===null||b===null||(_=fo(f,b),_!=null&&S.push(Co(f,_,y))),C)break;f=f.return}0<S.length&&(h=new v(h,k,null,n,p),m.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",v&&n!==kc&&(k=n.relatedTarget||n.fromElement)&&(Pa(k)||k[_i]))break e;(h||v)&&(k=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=d,v=v?Pa(v):null,v!==null&&(C=Oo(v),S=v.tag,v!==C||S!==5&&S!==27&&S!==6)&&(v=null)):(h=null,v=d),h!==v&&(S=Bp,_="onMouseLeave",b="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=jp,_="onPointerLeave",b="onPointerEnter",f="pointer"),C=h==null?k:Ii(h),y=v==null?k:Ii(v),k=new S(_,f+"leave",h,n,p),k.target=C,k.relatedTarget=y,_=null,Pa(p)===d&&(S=new S(b,f+"enter",v,n,p),S.target=y,S.relatedTarget=C,_=S),C=_,S=h&&v?mc(h,v,vU):null,h!==null&&Of(m,k,h,S,!1),v!==null&&C!==null&&Of(m,C,v,S,!0)))}e:{if(h=d?Ii(d):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var T=Vp;else if(Lp(h))if(gg)T=S2;else{T=b2;var w=g2}else v=h.nodeName,!v||v.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?d&&Kd(d.elementType)&&(T=Vp):T=y2;if(T&&(T=T(e,d))){vg(m,T,n,p);break e}w&&w(e,h,d)}switch(w=d?Ii(d):window,e){case"focusin":(Lp(w)||w.contentEditable==="true")&&(Ol=w,Tc=d,Wi=null);break;case"focusout":Wi=Tc=Ol=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Gp(m,n,p);break;case"selectionchange":if(_2)break;case"keydown":case"keyup":Gp(m,n,p)}var R;if(Wd)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Al?fg(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(pg&&n.locale!=="ko"&&(Al||A!=="onCompositionStart"?A==="onCompositionEnd"&&Al&&(R=mg()):(ga=p,Qd="value"in ga?ga.value:ga.textContent,Al=!0)),w=_r(d,A),0<w.length&&(A=new Zp(A,e,null,n,p),m.push({event:A,listeners:w}),R?A.data=R:(R=hg(n),R!==null&&(A.data=R)))),(R=m2?p2(e,n):f2(e,n))&&(A=_r(d,"onBeforeInput"),0<A.length&&(w=new Zp("onBeforeInput","beforeinput",null,n,p),m.push({event:w,listeners:A}),w.data=R)),mU(m,e,d,n,p)}dy(m,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _r(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=fo(e,n),l!=null&&a.unshift(Co(e,l,i)),l=fo(e,t),l!=null&&a.push(Co(e,l,i))),e.tag===3)return a;e=e.return}return[]}function vU(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Of(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var s=n,u=s.alternate,d=s.stateNode;if(s=s.tag,u!==null&&u===a)break;s!==5&&s!==26&&s!==27||d===null||(u=d,l?(d=fo(n,i),d!=null&&o.unshift(Co(n,d,u))):l||(d=fo(n,i),d!=null&&o.push(Co(n,d,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gU=/\r\n?/g,bU=/\u0000|\uFFFD/g;function Bf(e){return(typeof e=="string"?e:""+e).replace(gU,`
`).replace(bU,"")}function py(e,t){return t=Bf(t),Bf(e)===t}function Ae(e,t,n,a,l,i){switch(n){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||li(e,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&li(e,""+a);else return;break;case"className":es(e,"class",a);break;case"tabIndex":es(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":es(e,n,a);break;case"style":cg(e,a,i);return;case"data":if(t!=="object"){es(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ns(a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",l.name,l,null),Ae(e,t,"formEncType",l.formEncType,l,null),Ae(e,t,"formMethod",l.formMethod,l,null),Ae(e,t,"formTarget",l.formTarget,l,null)):(Ae(e,t,"encType",l.encType,l,null),Ae(e,t,"method",l.method,l,null),Ae(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ns(a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=wn);return;case"onScroll":a!=null&&_e("scroll",e);return;case"onScrollEnd":a!=null&&_e("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(K(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(K(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ns(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":_e("beforetoggle",e),_e("toggle",e),ks(e,"popover",a);break;case"xlinkActuate":jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":jn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":jn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":jn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":jn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ks(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=jz.get(n)||n,ks(e,n,a);else return}ze=!0}function dd(e,t,n,a,l,i){switch(n){case"style":cg(e,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(K(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(K(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof a=="string")li(e,a);else if(typeof a=="number"||typeof a=="bigint")li(e,""+a);else return;break;case"onScroll":a!=null&&_e("scroll",e);return;case"onScrollEnd":a!=null&&_e("scrollend",e);return;case"onClick":a!=null&&(e.onclick=wn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!lg.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),i=n.slice(2,l?n.length-7:void 0),t=e[Lt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(i,t,l),typeof a=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,a,l);break e}ze=!0,n in e?e[n]=a:a===!0?e.setAttribute(n,""):ks(e,n,a)}return}ze=!0}function bt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:Ae(e,t,i,o,n,null)}}l&&Ae(e,t,"srcSet",n.srcSet,n,null),a&&Ae(e,t,"src",n.src,n,null);return;case"input":_e("invalid",e);var s=i=o=l=null,u=null,d=null;for(a in n)if(n.hasOwnProperty(a)){var p=n[a];if(p!=null)switch(a){case"name":l=p;break;case"type":o=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(K(137,t));break;default:Ae(e,t,a,p,n,null)}}sg(e,i,s,u,d,o,l,!1);return;case"select":_e("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(s=n[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":o=s;break;case"multiple":a=s;default:Ae(e,t,l,s,n,null)}t=i,n=o,e.multiple=!!a,t!=null?Fl(e,!!a,t,!1):n!=null&&Fl(e,!!a,n,!0);return;case"textarea":_e("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case"value":a=s;break;case"defaultValue":l=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(K(91));break;default:Ae(e,t,o,s,n,null)}ug(e,a,l,i);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(a=n[u],a!=null))switch(u){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ae(e,t,u,a,n,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(a=0;a<_o.length;a++)_e(_o[a],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&(a=n[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:Ae(e,t,d,a,n,null)}return;default:if(Kd(t)){for(p in n)n.hasOwnProperty(p)&&(a=n[p],a!==void 0&&dd(e,t,p,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(a=n[s],a!=null&&Ae(e,t,s,a,n,null))}var yU={};function SU(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,s=null,u=null,d=null,p=null;for(v in n){var m=n[v];if(n.hasOwnProperty(v)&&m!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":u=m;default:a.hasOwnProperty(v)||Ae(e,t,v,null,a,m)}}for(var h in a){var v=a[h];if(m=n[h],a.hasOwnProperty(h)&&(v!=null||m!=null))switch(h){case"type":v!==m&&(ze=!0),i=v;break;case"name":v!==m&&(ze=!0),l=v;break;case"checked":v!==m&&(ze=!0),d=v;break;case"defaultChecked":v!==m&&(ze=!0),p=v;break;case"value":v!==m&&(ze=!0),o=v;break;case"defaultValue":v!==m&&(ze=!0),s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(K(137,t));break;default:v!==m&&Ae(e,t,h,v,a,m)}}Cc(e,o,s,u,d,p,i,l);return;case"select":v=o=s=h=null;for(i in n)if(u=n[i],n.hasOwnProperty(i)&&u!=null)switch(i){case"value":break;case"multiple":v=u;default:a.hasOwnProperty(i)||Ae(e,t,i,null,a,u)}for(l in a)if(i=a[l],u=n[l],a.hasOwnProperty(l)&&(i!=null||u!=null))switch(l){case"value":i!==u&&(ze=!0),h=i;break;case"defaultValue":i!==u&&(ze=!0),s=i;break;case"multiple":i!==u&&(ze=!0),o=i;default:i!==u&&Ae(e,t,l,i,a,u)}t=s,n=o,a=v,h!=null?Fl(e,!!n,h,!1):!!a!=!!n&&(t!=null?Fl(e,!!n,t,!0):Fl(e,!!n,n?[]:"",!1));return;case"textarea":v=h=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Ae(e,t,s,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":l!==i&&(ze=!0),h=l;break;case"defaultValue":l!==i&&(ze=!0),v=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(K(91));break;default:l!==i&&Ae(e,t,o,l,a,i)}rg(e,h,v);return;case"option":for(var k in n)if(h=n[k],n.hasOwnProperty(k)&&h!=null&&!a.hasOwnProperty(k))switch(k){case"selected":e.selected=!1;break;default:Ae(e,t,k,null,a,h)}for(u in a)if(h=a[u],v=n[u],a.hasOwnProperty(u)&&h!==v&&(h!=null||v!=null))switch(u){case"selected":h!==v&&(ze=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:Ae(e,t,u,h,a,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)h=n[S],n.hasOwnProperty(S)&&h!=null&&!a.hasOwnProperty(S)&&Ae(e,t,S,null,a,h);for(d in a)if(h=a[d],v=n[d],a.hasOwnProperty(d)&&h!==v&&(h!=null||v!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(K(137,t));break;default:Ae(e,t,d,h,a,v)}return;default:if(Kd(t)){for(var C in n)h=n[C],n.hasOwnProperty(C)&&h!==void 0&&!a.hasOwnProperty(C)&&dd(e,t,C,void 0,a,h);for(p in a)h=a[p],v=n[p],!a.hasOwnProperty(p)||h===v||h===void 0&&v===void 0||dd(e,t,p,h,a,v);return}}for(var b in n)h=n[b],n.hasOwnProperty(b)&&h!=null&&!a.hasOwnProperty(b)&&Ae(e,t,b,null,a,h);for(m in a)h=a[m],v=n[m],!a.hasOwnProperty(m)||h===v||h==null&&v==null||Ae(e,t,m,h,a,v)}function Zf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xU(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,s=l.duration;if(i&&s&&Zf(o)){for(o=0,s=l.responseEnd,a+=1;a<n.length;a++){var u=n[a],d=u.startTime;if(d>s)break;var p=u.transferSize,m=u.initiatorType;p&&Zf(m)&&(u=u.responseEnd,o+=p*(u<s?1:(s-d)/(u-d)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var md=null,pd=null;function ko(e){return e.nodeType===9?e:e.ownerDocument}function jf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fy(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hy(e,t,n,a){return n=ko(n).createElement(e),n[pt]=a,n[Lt]=t,bt(n,e,t),rt(n),n}function fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hu=null;function _U(){var e=window.event;return e&&e.type==="popstate"?e===Hu?!1:(Hu=e,!0):(Hu=null,!1)}var Bm=typeof setTimeout=="function"?setTimeout:void 0,CU=typeof clearTimeout=="function"?clearTimeout:void 0,Mf=typeof Promise=="function"?Promise:void 0,Df=typeof requestAnimationFrame=="function"?requestAnimationFrame:Bm,kU=typeof queueMicrotask=="function"?queueMicrotask:typeof Mf<"u"?function(e){return Mf.resolve(null).then(e).catch(NU)}:Bm;function NU(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function Lf(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),fi(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Fu(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Fu(n);for(var i=n.firstChild;i;){var o=i.nextSibling,s=i.nodeName;i[Mo]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Fu(e.ownerDocument.body);n=l}while(n);fi(t)}function Vf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function vy(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var a=1;else for(var l=a=0;l<t.length;l++){var i=t[l];0<i.width&&0<i.height&&a++}a===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function gy(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function wU(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function hd(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return wU(t,n,e)}function TU(e){return e.documentElement.clientHeight}function zU(e){this.addEventListener("load",e),this.addEventListener("error",e)}function UU(e,t,n,a,l,i,o,s,u){var d=t.nodeType===9?t:t.ownerDocument;try{var p=d.startViewTransition({update:function(){var h=d.defaultView,v=h.navigation&&h.navigation.transition,k=d.fonts.status;a();var S=[];if(k==="loaded"&&(TU(d),d.fonts.status==="loading"&&S.push(d.fonts.ready)),k=S.length,e!==null)for(var C=e.suspenseyImages,b=0,f=0;f<C.length;f++){var y=C[f];if(!y.complete){var _=y.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<h.innerHeight&&_.left<h.innerWidth){if(b+=Uy(y),b>Ls){S.length=k;break}y=new Promise(zU.bind(y)),S.push(y)}}}if(0<S.length)return h=Promise.race([Promise.all(S),new Promise(function(T){return setTimeout(T,500)})]).then(l,l),(v?Promise.allSettled([v.finished,h]):h).then(i,i);if(l(),v)return v.finished.then(i,i);i()},types:n});d.__reactViewTransition=p;var m=[];return p.ready.then(function(){for(var h=d.documentElement.getAnimations({subtree:!0}),v=0;v<h.length;v++){var k=h[v],S=k.effect,C=S.pseudoElement;if(C!=null&&C.startsWith("::view-transition")){m.push(k),k=S.getKeyframes();for(var b=C=void 0,f=!0,y=0;y<k.length;y++){var _=k[y],T=_.width;if(C===void 0)C=T;else if(C!==T){f=!1;break}if(T=_.height,b===void 0)b=T;else if(b!==T){f=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}f&&C!==void 0&&b!==void 0&&(S.setKeyframes(k),f=getComputedStyle(S.target,S.pseudoElement),f.width!==C||f.height!==b)&&(f=k[0],f.width=C,f.height=b,f=k[k.length-1],f.width=C,f.height=b,S.setKeyframes(k))}}o()},function(h){d.__reactViewTransition===p&&(d.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&u(h)}finally{a(),l(),o()}}),p.finished.finally(function(){for(var h=0;h<m.length;h++)m[h].cancel();d.__reactViewTransition===p&&(d.__reactViewTransition=null),s()}),p}catch{return a(),l(),o(),null}}function Ka(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ka.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:je({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Ka.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),a=[],l=0;l<n.length;l++){var i=n[l].effect;i!==null&&i.target===e&&i.pseudoElement===t&&a.push(n[l])}return a};Ka.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function by(e){return{name:e,group:new Ka("group",e),imagePair:new Ka("image-pair",e),old:new Ka("old",e),new:new Ka("new",e)}}function Jt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Jt.prototype.addEventListener=function(e,t,n){var a=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(a=n.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(yy(i,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(s=function(u){o.removeEventListener(e,t,n),typeof t=="function"?t.call(this,u):t.handleEvent(u)}),a!==null&&(l=o.removeEventListener.bind(o,e,t,n),a.addEventListener("abort",l,{once:!0}),l=a.removeEventListener.bind(a,"abort",l)),a=ci(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:l}),Dt(this._fragmentFiber.child,!1,$U,e,s,a)}this._eventListeners=i}};function $U(e,t,n,a){return at(e).addEventListener(t,n,a),!1}Jt.prototype.removeEventListener=function(e,t,n){var a=this._eventListeners;if(a!==null&&(t=yy(a,e,t,n),t!==-1)){var l=a[t];n=l.attachedListener;var i=l.cleanup;l=ci(l.optionsOrUseCapture),Dt(this._fragmentFiber.child,!1,EU,e,n,l),a.splice(t,1),i!==null&&i()}};function EU(e,t,n,a){return at(e).removeEventListener(t,n,a),!1}function ci(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Hf(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function yy(e,t,n,a){if(e.length===0)return-1;a=Hf(a);for(var l=0;l<e.length;l++){var i=e[l];if(i.type===t&&i.listener===n&&Hf(i.optionsOrUseCapture)===a)return l}return-1}Jt.prototype.dispatchEvent=function(e){var t=fl(this._fragmentFiber);if(t===null)return!0;t=at(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var i=n[l];a.addEventListener(i.type,i.attachedListener,ci(i.optionsOrUseCapture))}if(t.appendChild(a),e=a.dispatchEvent(e),n)for(l=0;l<n.length;l++)i=n[l],a.removeEventListener(i.type,i.attachedListener,ci(i.optionsOrUseCapture));return t.removeChild(a),e}return t.dispatchEvent(e)};Jt.prototype.focus=function(e){Dt(this._fragmentFiber.child,!0,Sy,e,void 0,void 0)};function Sy(e,t){return e.tag===6?!1:(e=at(e),IU(e,t))}Jt.prototype.focusLast=function(e){var t=[];Dt(this._fragmentFiber.child,!0,Zm,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Sy(t[n],e);n--);};function Zm(e,t){return t.push(e),!1}Jt.prototype.blur=function(){var e=fl(this._fragmentFiber);e!==null&&(e=at(e),e=ko(e).activeElement,e!==null&&Dt(this._fragmentFiber.child,!1,RU,e,void 0,void 0))};function RU(e,t){return e.tag===6?!1:(e=at(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Jt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Dt(this._fragmentFiber.child,!1,AU,e,void 0,void 0)};function AU(e,t){return e.tag===6||(e=at(e),t.observe(e)),!1}Jt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Dt(this._fragmentFiber.child,!1,OU,e,void 0,void 0);for(var n=t=0;n<fn.length;n++){var a=fn[n];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):fn[t++]=a}fn.length=t}};function OU(e,t){return e.tag===6||(e=at(e),t.unobserve(e)),!1}var fn=[],Iu=!1;function BU(e,t,n){fn.push({fragmentInstance:e,observer:t,instance:n}),Iu||(Iu=!0,FU(function(){Iu=!1;var a=fn;fn=[];for(var l=0;l<a.length;l++){var i=a[l];i.observer.unobserve(i.instance)}}))}Jt.prototype.getClientRects=function(){var e=[];return Dt(this._fragmentFiber.child,!1,ZU,e,void 0,void 0),e};function ZU(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=at(e),t.push.apply(t,e.getClientRects());return!1}Jt.prototype.getRootNode=function(e){var t=fl(this._fragmentFiber);return t===null?this:at(t).getRootNode(e)};Jt.prototype.compareDocumentPosition=function(e){var t=fl(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Dt(this._fragmentFiber.child,!1,Zm,n,void 0,void 0);var a=at(t);if(n.length===0){if(n=a,xp(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var l=a=n.compareDocumentPosition(e);return n===e?l=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Iv(t)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=at(n).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=at(n[0]),l=at(n[n.length-1]);var i=xp(this._fragmentFiber)?t.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=l.compareDocumentPosition(e),u=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=a&&i&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===e||i&&l===e||u||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===e||!i&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||jU(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function jU(e,t,n,a,l){var i=Pa(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){n=!0;break e}i=i.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=l.ownerDocument,l===i||l===i.documentElement||l===i.body;e:{for(i=t,t=fl(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(t=mc(n,i,_p),t===null?t=!1:(Dt(t,!0,dz,i,n),i=Ul,Ul=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===a)&&(t=mc(a,i,_p),t===null?t=!1:(Dt(t,!0,mz,i,a),i=Ul,dc=Ul=null,t=i!==null)),t):!1}function If(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Jt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(K(566));var t=[];Dt(this._fragmentFiber.child,!1,Zm,t,void 0,void 0);var n=e!==!1;if(t.length===0){var a=Iv(this._fragmentFiber);if(a=n?a[1]||a[0]||fl(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=at(a),If(e,n);return}if(a=at(a),a.nodeType!==9){if(a.nodeType===11){n="host"in a?a.host:null,n!==null&&n.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=n?t.length-1:0;a!==(n?-1:t.length);){var l=t[a];l.tag===6?(l=at(l),If(l,n)):at(l).scrollIntoView(e),a+=n?-1:1}};function MU(e,t){return e=at(e),xy(e,t),!1}function xy(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function _y(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];e.addEventListener(l.type,l.attachedListener,ci(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){for(var o=0,s=0;s<fn.length;s++){var u=fn[s];(u.fragmentInstance!==t||u.observer!==i||u.instance!==e)&&(fn[o++]=u)}fn.length=o,i.observe(e)}),xy(e,t))}function DU(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];e.removeEventListener(l.type,l.attachedListener,ci(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?BU(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function vd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vd(n),Lr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function LU(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Mo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=rn(e.nextSibling),e===null)break}return null}function VU(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rn(e.nextSibling),e===null))return null;return e}function Cy(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=rn(e.nextSibling),e===null))return null;return e}function gd(e){return e.data==="$?"||e.data==="$~"}function jm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function HU(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var bd=null;function Ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return rn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function IU(e,t){function n(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return a}function FU(e){Df(function(){Df(function(t){return e(t)})})}function ky(e,t,n){switch(t=ko(n),e){case"html":if(e=t.documentElement,!e)throw Error(K(452));return e;case"head":if(e=t.head,!e)throw Error(K(453));return e;case"body":if(e=t.body,!e)throw Error(K(454));return e;default:throw Error(K(451))}}function Ny(e,t,n){for(var a in n){var l=n[a];n.hasOwnProperty(a)&&l!=null&&Ae(e,t,a,null,yU,l)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===wn&&(e.onclick=null),Lr(e)}function Fu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lr(e)}var cn=new Map,Gf=new Set;function No(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var la=$e.d;$e.d={f:qU,r:GU,D:YU,C:PU,L:KU,m:XU,X:JU,S:QU,M:WU};function qU(){var e=la.f(),t=eu();return e||t}function GU(e){var t=Ci(e);t!==null&&t.tag===5&&t.type==="form"?cb(t):la.r(e)}var Ti=typeof document>"u"?null:document;function wy(e,t,n){var a=Ti;if(a&&typeof t=="string"&&t){var l=an(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Gf.has(l)||(Gf.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),bt(t,"link",e),rt(t),a.head.appendChild(t)))}}function YU(e){la.D(e),wy("dns-prefetch",e,null)}function PU(e,t){la.C(e,t),wy("preconnect",e,t)}function KU(e,t,n){la.L(e,t,n);var a=Ti;if(a&&e&&t){var l='link[rel="preload"][as="'+an(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+an(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+an(n.imageSizes)+'"]')):l+='[href="'+an(e)+'"]';var i=l;switch(t){case"style":i=di(e);break;case"script":i=zi(e)}if(!(cn.has(i)||(e=je({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),cn.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Fo(i))||t==="script"&&a.querySelector(qo(i))))){var o=a.createElement("link");bt(o,"link",e),t==="style"&&(o[er]=!0,o.onload=o.onerror=function(){ng(o)}),rt(o),a.head.appendChild(o)}}}function XU(e,t){la.m(e,t);var n=Ti;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+an(a)+'"][href="'+an(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=zi(e)}if(!cn.has(i)&&(e=je({rel:"modulepreload",href:e},t),cn.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(qo(i)))return}a=n.createElement("link"),bt(a,"link",e),rt(a),n.head.appendChild(a)}}}function QU(e,t,n){la.S(e,t,n);var a=Ti;if(a&&e){var l=Il(a).hoistableStyles,i=di(e);t=t||"default";var o=l.get(i);if(!o){var s={loading:0,preload:null};if(o=a.querySelector(Fo(i)))s.loading=5;else{e=je({rel:"stylesheet",href:e,"data-precedence":t},n),(n=cn.get(i))&&Mm(e,n);var u=o=a.createElement("link");rt(u),bt(u,"link",e),u._p=new Promise(function(d,p){u.onload=d,u.onerror=p}),u.addEventListener("load",function(){s.loading|=1}),u.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ms(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:s},l.set(i,o)}}}function JU(e,t){la.X(e,t);var n=Ti;if(n&&e){var a=Il(n).hoistableScripts,l=zi(e),i=a.get(l);i||(i=n.querySelector(qo(l)),i||(e=je({src:e,async:!0},t),(t=cn.get(l))&&Dm(e,t),i=n.createElement("script"),rt(i),bt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function WU(e,t){la.M(e,t);var n=Ti;if(n&&e){var a=Il(n).hoistableScripts,l=zi(e),i=a.get(l);i||(i=n.querySelector(qo(l)),i||(e=je({src:e,async:!0,type:"module"},t),(t=cn.get(l))&&Dm(e,t),i=n.createElement("script"),rt(i),bt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Yf(e,t,n,a){var l=(l=Ca.current)?No(l):null;if(!l)throw Error(K(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=di(n.href),t=Il(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=di(n.href);var i=Il(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Fo(e)))?i._p||(o.instance=i,o.state.loading=5):(i=cn.get(e),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},cn.set(e,i)),e$(l,e,i,o.state))),t&&a===null)throw Error(K(528,""));return o}if(t&&a!==null)throw Error(K(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=zi(n),t=Il(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,e))}}function di(e){return'href="'+an(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function Ty(e){return je({},e,{"data-precedence":e.precedence,precedence:null})}function e$(e,t,n,a){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[er]!==!0){a.loading=1;return}}else t=e.createElement("link"),t[er]=!0,t.onload=t.onerror=ng.bind(null,t),bt(t,"link",n),rt(t),e.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function zi(e){return'[src="'+an(e)+'"]'}function qo(e){return"script[async]"+e}function Pf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+an(n.href)+'"]');if(a)return t.instance=a,rt(a),a;var l=je({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),rt(a),bt(a,"style",l),Ms(a,n.precedence,e),t.instance=a;case"stylesheet":l=di(n.href);var i=e.querySelector(Fo(l));if(i)return t.state.loading|=4,t.instance=i,rt(i),i;a=Ty(n),(l=cn.get(l))&&Mm(a,l),i=(e.ownerDocument||e).createElement("link"),rt(i);var o=i;return o._p=new Promise(function(s,u){o.onload=s,o.onerror=u}),bt(i,"link",a),t.state.loading|=4,Ms(i,n.precedence,e),t.instance=i;case"script":return i=zi(n.src),(l=e.querySelector(qo(i)))?(t.instance=l,rt(l),l):(a=n,(l=cn.get(i))&&(a=je({},n),Dm(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),rt(l),bt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(K(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,Ms(a,n.precedence,e));return t.instance}function Ms(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var s=a[o];if(s.dataset.precedence===t)i=s;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Mm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ds=null;function Kf(e,t,n){if(Ds===null){var a=new Map,l=Ds=new Map;l.set(n,a)}else l=Ds,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Mo]||i[pt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var s=a.get(o);s?s.push(i):a.set(o,[i])}}return a}function yd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function t$(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Xf(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function zy(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Uy(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Qf(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Uy(t),e.suspenseyImages.push(t)),e=l$.bind(e),t.decode().then(e,e))}function n$(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var l=di(a.href),i=t.querySelector(Fo(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,rt(i);return}i=t.ownerDocument||t,a=Ty(a),(l=cn.get(l))&&Mm(a,l),i=i.createElement("link"),rt(i);var o=i;o._p=new Promise(function(s,u){o.onload=s,o.onerror=u}),bt(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=wo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ls=0;function a$(e,t){return e.stylesheets&&e.count===0&&Vs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Vs(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ls===0&&(Ls=62500*xU());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vs(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ls?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function $y(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Vs(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function wo(){this.count--,$y(this)}function l$(){this.imgCount--,$y(this)}var Cr=null;function Vs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cr=new Map,t.forEach(i$,e),Cr=null,wo.call(e))}function i$(e,t){if(!(t.state.loading&4)){var n=Cr.get(e);if(n)var a=n.get(null);else{n=new Map,Cr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=wo.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var mi={$$typeof:Nn,Provider:null,Consumer:null,_currentValue:Xa,_currentValue2:Xa,_threadCount:0};function o$(e,t,n,a,l,i,o,s,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.hiddenUpdates=hu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.transitionTypes=null,this.incompleteTransitions=new Map}function Ey(e,t,n,a,l,i,o,s,u,d,p,m){return e=new o$(e,t,n,o,u,d,p,m,s),t=1,i===!0&&(t|=24),i=At(3,null,null,t),e.current=i,i.stateNode=e,t=im(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},rm(i),e}function Ry(e){return e?(e=jl,e):jl}function Ay(e,t,n,a,l,i){l=Ry(l),a.context===null?a.context=l:a.pendingContext=l,a=Na(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=wa(e,a,t),n!==null&&(Mt(n,e,t),to(n,e,t))}function Jf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lm(e,t){Jf(e,t),(e=e.alternate)&&Jf(e,t)}function Oy(e){if(e.tag===13||e.tag===31){var t=gl(e,67108864);t!==null&&Mt(t,e,67108864),Lm(e,67108864)}}function Wf(e){if(e.tag===13||e.tag===31){var t=Xt();t=Yd(t);var n=gl(e,t);n!==null&&Mt(n,e,t),Lm(e,t)}}var pi=!0;function s$(e,t,n,a){var l=fe.T;fe.T=null;var i=$e.p;try{$e.p=2,Vm(e,t,n,a)}finally{$e.p=i,fe.T=l}}function r$(e,t,n,a){var l=fe.T;fe.T=null;var i=$e.p;try{$e.p=8,Vm(e,t,n,a)}finally{$e.p=i,fe.T=l}}function Vm(e,t,n,a){if(pi){var l=Sd(a);if(l===null)Vu(e,t,a,kr,n),eh(e,a);else if(c$(l,e,t,n,a))a.stopPropagation();else if(eh(e,a),t&4&&-1<u$.indexOf(e)){for(;l!==null;){var i=Ci(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Fa(i.pendingLanes);if(o!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var u=1<<31-Kt(o);s.entanglements[1]|=u,o&=~u}Zn(i),!(Ue&6)&&(br=Yt()+500,Io(0))}}break;case 31:case 13:s=gl(i,2),s!==null&&Mt(s,i,2),eu(),Lm(i,2)}if(i=Sd(a),i===null&&Vu(e,t,a,kr,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else Vu(e,t,a,null,n)}}function Sd(e){return e=Xd(e),Hm(e)}var kr=null;function Hm(e){if(kr=null,e=Pa(e),e!==null){var t=Oo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Lv(t),e!==null)return e;e=null}else if(n===31){if(e=Vv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return kr=e,null}function By(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xz()){case Yv:return 2;case Pv:return 8;case Ws:case _z:return 32;case Kv:return 268435456;default:return 32}default:return 32}}var xd=!1,$a=null,Ea=null,Ra=null,To=new Map,zo=new Map,ma=[],u$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eh(e,t){switch(e){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":To.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(t.pointerId)}}function Zi(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Ci(t),t!==null&&Oy(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function c$(e,t,n,a,l){switch(t){case"focusin":return $a=Zi($a,e,t,n,a,l),!0;case"dragenter":return Ea=Zi(Ea,e,t,n,a,l),!0;case"mouseover":return Ra=Zi(Ra,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return To.set(i,Zi(To.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,zo.set(i,Zi(zo.get(i)||null,e,t,n,a,l)),!0}return!1}function Zy(e){var t=Pa(e.target);if(t!==null){var n=Oo(t);if(n!==null){if(t=n.tag,t===13){if(t=Lv(n),t!==null){e.blockedOn=t,wp(e.priority,function(){Wf(n)});return}}else if(t===31){if(t=Vv(n),t!==null){e.blockedOn=t,wp(e.priority,function(){Wf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sd(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);kc=a,n.target.dispatchEvent(a),kc=null}else return t=Ci(n),t!==null&&Oy(t),e.blockedOn=n,!1;t.shift()}return!0}function th(e,t,n){Hs(e)&&n.delete(t)}function d$(){xd=!1,$a!==null&&Hs($a)&&($a=null),Ea!==null&&Hs(Ea)&&(Ea=null),Ra!==null&&Hs(Ra)&&(Ra=null),To.forEach(th),zo.forEach(th)}function ds(e,t){e.blockedOn===t&&(e.blockedOn=null,xd||(xd=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,d$)))}var ms=null;function nh(e){ms!==e&&(ms=e,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,function(){ms===e&&(ms=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Hm(a||n)===null)continue;break}var i=Ci(n);i!==null&&(e.splice(t,3),t-=3,Lc(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function fi(e){function t(u){return ds(u,e)}$a!==null&&ds($a,e),Ea!==null&&ds(Ea,e),Ra!==null&&ds(Ra,e),To.forEach(t),zo.forEach(t);for(var n=0;n<ma.length;n++){var a=ma[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ma.length&&(n=ma[0],n.blockedOn===null);)Zy(n),n.blockedOn===null&&ma.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[Lt]||null;if(typeof i=="function")o||nh(n);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Lt]||null)s=o.formAction;else if(Hm(l)!==null)continue}else s=o.action;typeof s=="function"?n[a+1]=s:(n.splice(a,3),a-=3),nh(n)}}}function jy(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Im(e){this._internalRoot=e}au.prototype.render=Im.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));var n=t.current,a=Xt();Ay(n,a,e,t,null,null)};au.prototype.unmount=Im.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ay(e.current,2,null,e,null,null),eu(),t[_i]=null}};function au(e){this._internalRoot=e}au.prototype.unstable_scheduleHydration=function(e){if(e){var t=tg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ma.length&&t!==0&&t<ma[n].priority;n++);ma.splice(n,0,e),n===0&&Zy(e)}};var ah=Mv.version;if(ah!=="19.3.0")throw Error(K(527,ah,"19.3.0"));$e.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=cz(t),e=e!==null?Hv(e):null,e=e===null?null:e.stateNode,e};var m$={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:fe,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{Bo=ps.inject(m$),Pt=ps}catch{}}jr.createRoot=function(e,t){if(!Dv(e))throw Error(K(299));var n=!1,a="",l=bb,i=yb,o=Sb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ey(e,1,!1,null,null,n,a,null,l,i,o,jy),e[_i]=t.current,Om(e),new Im(t)};jr.hydrateRoot=function(e,t,n){if(!Dv(e))throw Error(K(299));var a=!1,l="",i=bb,o=yb,s=Sb,u=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=Ey(e,1,!0,t,n??null,a,l,u,i,o,s,jy),t.context=Ry(null),n=t.current,a=Xt(),a=Yd(a),l=Na(a),l.callback=null,wa(n,l,a),n=a,t.current.lanes=n,jo(t,n),Zn(t),e[_i]=t.current,Om(e),new au(t)};jr.version="19.3.0";function My(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(My)}catch(e){console.error(e)}}My(),Ev.exports=jr;var Dy=Ev.exports;const p$={info:le.info,success:le.success,warning:le.warning,error:le.error};function f$({manager:e}){const t=Te(e.subscribe,e.getState);return c.jsx("div",{className:"xui-message","aria-live":"polite",children:t.items.map(n=>c.jsxs("div",{className:re("xui-message__item",`xui-message__item--${n.type}`),children:[c.jsx("svg",{className:"xui-message__icon",viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:n.icon??p$[n.type]}}),c.jsx("span",{className:"xui-message__content",children:n.content}),n.closable&&c.jsx("button",{type:"button",className:"xui-message__close","aria-label":"close",onClick:()=>e.close(n.id),children:c.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})})]},n.id))})}let fs=null,lh=!1;function Ly(){if(fs===null&&(fs=Ph()),!lh&&typeof document<"u"){const e=document.createElement("div");document.body.appendChild(e),Dy.createRoot(e).render(c.jsx(f$,{manager:fs})),lh=!0}return fs}function ji(e){return Ly().open(e)}const In={info:(e,t)=>ji({...t,type:"info",content:e}),success:(e,t)=>ji({...t,type:"success",content:e}),warning:(e,t)=>ji({...t,type:"warning",content:e}),error:(e,t)=>ji({...t,type:"error",content:e}),open:ji,closeAll:()=>Ly().closeAll()};function Fn(e){const{content:t,placement:n="top",trigger:a="hover",disabled:l=!1,className:i,style:o,children:s,renderContent:u,ref:d}=e,p=B.useId(),m=B.useRef(null);m.current===null&&(m.current=mv({disabled:l}));const h=m.current;B.useEffect(()=>{h.updateOptions({disabled:l})},[h,l]);const v=Te(h.subscribe,h.getState);B.useImperativeHandle(d,()=>({show:()=>h.show(),hide:()=>h.hide()}),[h]);const k=B.useRef(null),S=B.useRef(null),[C,b]=B.useState({placement:n,shift:0});B.useLayoutEffect(()=>{if(!v.open)return;b({placement:n,shift:0});const R=()=>{const L=k.current,te=S.current;if(!L||!te)return;const j=te.getBoundingClientRect();j.width===0&&j.height===0||b(yi(L.getBoundingClientRect(),j,Si(),{placement:n,gap:8}))},A=requestAnimationFrame(R),O=bi(R);return()=>{cancelAnimationFrame(A),O()}},[v.open,n]);const f=()=>{a==="hover"&&h.show()},y=()=>{a==="hover"&&h.hide()},_=()=>{a==="focus"&&h.show()},T=()=>{a==="focus"&&h.hide()},w=C.placement==="top"||C.placement==="bottom"?{marginLeft:`${C.shift}px`}:{marginTop:`${C.shift}px`};return c.jsx("span",{className:re("xui-tooltip",i),style:o,onMouseEnter:f,onMouseLeave:y,onFocus:_,onBlur:T,children:c.jsxs("span",{className:"xui-tooltip__trigger",ref:k,"aria-describedby":v.open?p:void 0,children:[s,v.open&&c.jsxs("span",{ref:S,id:p,className:re("xui-tooltip__popper",`is-${C.placement}`),style:w,role:"tooltip",children:[u?u():t,c.jsx("span",{className:"xui-tooltip__arrow","aria-hidden":"true"})]})]})})}const h$=e=>typeof e=="number";function _d(e){const{value:t,defaultValue:n,total:a,pageSize:l=10,disabled:i=!1,className:o,style:s,onChange:u,renderPrevIcon:d,renderNextIcon:p}=e,m=On(),h=B.useRef({onChange:u});h.current={onChange:u};const v=B.useRef(null);v.current===null&&(v.current=Xh({value:t,defaultValue:n,total:a,pageSize:l,disabled:i,onChange:b=>{var f,y;return(y=(f=h.current).onChange)==null?void 0:y.call(f,b)}}));const k=v.current;B.useEffect(()=>{k.updateOptions({value:t,total:a,pageSize:l,disabled:i})},[k,t,a,l,i]);const S=Te(k.subscribe,k.getState),C=Qh(S.page,S.pageCount);return c.jsxs("nav",{className:re("xui-pagination",o,{"is-disabled":S.disabled}),style:s,role:"navigation","aria-label":m.pagination.nav,children:[c.jsx("button",{type:"button",className:"xui-pagination__nav",disabled:S.disabled||S.page<=1,"aria-label":m.pagination.prev,onClick:()=>k.prev(),children:d?d():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-left"]}})}),C.map((b,f)=>h$(b)?c.jsx("button",{type:"button",className:re("xui-pagination__page",{"is-active":b===S.page}),"aria-current":b===S.page?"page":void 0,disabled:S.disabled,onClick:()=>k.goTo(b),children:b},`${b}-${f}`):c.jsx("span",{className:"xui-pagination__ellipsis","aria-hidden":"true",children:"···"},`${b}-${f}`)),c.jsx("button",{type:"button",className:"xui-pagination__nav",disabled:S.disabled||S.page>=S.pageCount,"aria-label":m.pagination.next,onClick:()=>k.next(),children:p?p():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-right"]}})})]})}function Nr(e){const{type:t="date",value:n,defaultValue:a,placeholder:l,disabled:i=!1,clearable:o=!1,shortcuts:s,className:u,style:d,onChange:p,onClear:m,renderClearIcon:h,renderCalendarIcon:v,renderPrevIcon:k,renderNextIcon:S,ref:C}=e,b=On(),f=B.useRef(null),y=B.useRef(null),_=B.useId(),T=B.useId(),w=B.useRef({onChange:p,onClear:m});w.current={onChange:p,onClear:m};const R=B.useRef(null);R.current===null&&(R.current=wh({type:t,value:n,defaultValue:a,disabled:i,onChange:V=>{var oe,X;return(X=(oe=w.current).onChange)==null?void 0:X.call(oe,V)},onClear:()=>{var V,oe;return(oe=(V=w.current).onClear)==null?void 0:oe.call(V)}}));const A=R.current;B.useEffect(()=>{A.updateOptions({value:n,disabled:i})},[A,n,i]);const O=Te(A.subscribe,A.getState);B.useImperativeHandle(C,()=>({focus:()=>{var V;return(V=y.current)==null?void 0:V.focus()},toggleOpen:()=>A.toggleOpen(),close:()=>A.close()}),[A]),B.useEffect(()=>{const V=oe=>{f.current&&!f.current.contains(oe.target)&&A.close()};return document.addEventListener("mousedown",V),()=>document.removeEventListener("mousedown",V)},[A]);const L=Nh(O.viewYear,O.viewMonth),te=O.value?Array.isArray(O.value)?`${O.value[0]} ~ ${O.value[1]}`:O.value:null,j=O.value&&Array.isArray(O.value)?O.value:null,I=V=>{switch(V.key){case"Enter":case" ":V.preventDefault(),A.toggleOpen();break;case"Escape":O.open&&(V.preventDefault(),A.close());break}},q=V=>t==="date"?V===O.value:j?V===j[0]||V===j[1]:O.rangeStart===V,me=V=>t!=="range"||!j?!1:Wl(V,j[0])>=0&&Wl(V,j[1])<=0;return c.jsxs("div",{ref:f,className:re("xui-date-picker",u,{"is-disabled":O.disabled,"is-open":O.open,"is-range":t==="range"}),style:d,children:[c.jsxs("div",{ref:y,id:_,className:"xui-date-picker__trigger",role:"combobox","aria-expanded":O.open,"aria-haspopup":"dialog","aria-controls":O.open?T:void 0,"aria-disabled":O.disabled||void 0,tabIndex:O.disabled?-1:0,onClick:()=>A.toggleOpen(),onKeyDown:I,children:[te?c.jsx("span",{className:"xui-date-picker__value",children:te}):c.jsx("span",{className:"xui-date-picker__placeholder",children:l??b.datePicker.placeholder}),o&&O.value&&!O.disabled?c.jsx("span",{className:"xui-date-picker__clear",role:"button","aria-label":"clear",onClick:V=>{V.stopPropagation(),A.clear()},children:h?h():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clear}})}):c.jsx("span",{className:"xui-date-picker__icon","aria-hidden":"true",children:v?v():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.calendar}})})]}),O.open&&c.jsxs("div",{id:T,className:"xui-date-picker__panel",role:"dialog","aria-label":b.datePicker.panel,children:[c.jsxs("div",{className:"xui-date-picker__header",children:[c.jsx("button",{type:"button",className:"xui-date-picker__nav","aria-label":b.datePicker.prevMonth,onClick:()=>A.prevMonth(),children:k?k():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-left"]}})}),c.jsx("span",{className:"xui-date-picker__title",children:b.datePicker.titleFormat(O.viewYear,O.viewMonth)}),c.jsx("button",{type:"button",className:"xui-date-picker__nav","aria-label":b.datePicker.nextMonth,onClick:()=>A.nextMonth(),children:S?S():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-right"]}})})]}),c.jsx("div",{className:"xui-date-picker__weekdays","aria-hidden":"true",children:b.datePicker.weekdays.map(V=>c.jsx("span",{className:"xui-date-picker__weekday",children:V},V))}),c.jsx("div",{className:"xui-date-picker__grid",children:L.map(V=>c.jsx("button",{type:"button",className:re("xui-date-picker__day",{"is-outside":!V.inMonth,"is-today":V.isToday,"is-selected":q(V.date),"is-in-range":me(V.date),"is-range-start":t==="range"&&j&&V.date===j[0],"is-range-end":t==="range"&&j&&V.date===j[1]}),"aria-label":V.date,onClick:()=>A.select(V.date),children:V.day},V.date))}),s&&s.length>0&&c.jsx("div",{className:"xui-date-picker__shortcuts",children:s.map(V=>c.jsx("button",{type:"button",className:"xui-date-picker__shortcut",onClick:()=>A.selectShortcut(V.value),children:V.label},V.label))})]})]})}const ih=e=>{const t={};return e.width!==void 0&&(t.width=typeof e.width=="number"?`${e.width}px`:e.width),e.align!==void 0&&(t.textAlign=e.align),Object.keys(t).length>0?t:void 0},v$=(e,t,n)=>{if(t===e.key)return n==="asc"?"ascending":"descending"};function hi(e){const{columns:t,dataSource:n,rowKey:a,stripe:l=!1,border:i=!1,virtual:o=!1,height:s,rowHeight:u=40,rowSelection:d,className:p,style:m,onSortChange:h,onRowClick:v,renderEmpty:k,renderSortIcon:S}=e,C=On(),b=B.useRef({onSortChange:h});b.current={onSortChange:h};const f=B.useRef(null);f.current===null&&(f.current=sv({dataSource:n,rowKey:a,rowSelection:d,onSortChange:Z=>{var P,Q;return(Q=(P=b.current).onSortChange)==null?void 0:Q.call(P,Z)}}));const y=f.current;B.useEffect(()=>{y.updateOptions({dataSource:n,rowKey:a,rowSelection:d})},[y,n,a,d]);const _=Te(y.subscribe,y.getState),T=B.useRef(null);T.current===null&&(T.current=Or({itemCount:0,itemHeight:u}));const w=T.current,R=Te(w.subscribe,w.getState),A=B.useRef(null);B.useEffect(()=>{if(!o)return;const Z=A.current;if(!Z||(w.updateOptions({viewportHeight:Z.clientHeight}),typeof ResizeObserver>"u"))return;const P=new ResizeObserver(()=>{w.updateOptions({viewportHeight:Z.clientHeight})});return P.observe(Z),()=>{P.disconnect()}},[w,o]),B.useEffect(()=>{o&&w.updateOptions({itemCount:_.sortedData.length,itemHeight:u})},[w,o,_.sortedData.length,u]);const O=Z=>{o&&w.scrollTo(Z.currentTarget.scrollTop)},L=_.sortedData,te=o&&R.startIndex<=R.endIndex,j=te?L.slice(R.startIndex,R.endIndex+1):L,I=Z=>o?R.startIndex+Z:Z,q=d!==void 0,me=(t??[]).length+(q?1:0),V={...m,...o?{...s!==void 0?{height:typeof s=="number"?`${s}px`:s}:{},"--xui-table-row-height":`${u}px`}:{}},oe=L.length===0,X=(Z,P,Q)=>Z.render?Z.render(P,Q):ov(P[Z.key]);return c.jsx("div",{ref:A,className:re("xui-table",p,{"is-striped":l,"is-bordered":i,"is-virtual":o}),style:Object.keys(V).length>0?V:void 0,onScroll:O,children:c.jsxs("table",{className:"xui-table__table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[q&&c.jsx("th",{className:"xui-table__th",style:{width:"42px"},children:c.jsx("input",{ref:Z=>{Z&&(Z.indeterminate=_.indeterminate)},type:"checkbox",className:"xui-table__check",checked:_.allSelected,"aria-label":C.table.selectAll,onChange:()=>y.toggleAll()})}),(t??[]).map(Z=>c.jsx("th",{className:"xui-table__th",style:ih(Z),"aria-sort":v$(Z,_.sortKey,_.sortOrder),scope:"col",children:Z.sortable?c.jsxs("button",{type:"button",className:"xui-table__sort",onClick:()=>y.toggleSort(Z.key),children:[Z.title,c.jsx("span",{className:"xui-table__sort-icons","aria-hidden":"true",children:S?c.jsxs(c.Fragment,{children:[S({order:"asc"}),S({order:"desc"})]}):c.jsxs(c.Fragment,{children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:re({"is-active":_.sortKey===Z.key&&_.sortOrder==="asc"}),dangerouslySetInnerHTML:{__html:le["arrow-up"]}}),c.jsx("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:re({"is-active":_.sortKey===Z.key&&_.sortOrder==="desc"}),dangerouslySetInnerHTML:{__html:le["arrow-down"]}})]})})]}):c.jsx("span",{children:Z.title})},Z.key))]})}),c.jsxs("tbody",{children:[te&&R.offsetY>0&&c.jsx("tr",{className:"xui-table__spacer","aria-hidden":"true",children:c.jsx("td",{style:{height:`${R.offsetY}px`},colSpan:me})}),j.map((Z,P)=>{var dt;const Q=I(P),ce=pa(Z,Q,a),Ie=_.selectedRowKeys.includes(ce),Fe=((dt=d==null?void 0:d.getCheckboxDisabled)==null?void 0:dt.call(d,Z,Q))??!1;return c.jsxs("tr",{className:re({"is-even":Q%2===1,"is-selected":q&&Ie,"is-clickable":v!==void 0}),onClick:()=>v==null?void 0:v(Z,Q),children:[q&&c.jsx("td",{className:"xui-table__td",onClick:Tt=>Tt.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"xui-table__check",checked:Ie,disabled:Fe,"aria-label":C.table.selectRow(Q),onChange:()=>y.toggleRow(ce)})}),(t??[]).map(Tt=>c.jsx("td",{className:"xui-table__td",style:ih(Tt),children:X(Tt,Z,Q)},Tt.key))]},ce)}),te&&R.fillerHeight>0&&c.jsx("tr",{className:"xui-table__spacer","aria-hidden":"true",children:c.jsx("td",{style:{height:`${R.fillerHeight}px`},colSpan:me})}),oe&&c.jsx("tr",{children:c.jsx("td",{className:"xui-table__empty",colSpan:me,children:k?k():C.table.empty})})]})]})})}function Gi(e){const{size:t="md",spinning:n=!0,tip:a,className:l,style:i,children:o}=e,s=B.useRef(null);s.current===null&&(s.current=lv({size:t,spinning:n,tip:a}));const u=s.current;B.useEffect(()=>{u.updateOptions({size:t,spinning:n,tip:a})},[u,t,n,a]);const d=Te(u.subscribe,u.getState);return o!==void 0?c.jsxs("div",{className:re("xui-spin","xui-spin--wrapper",l),style:i,children:[c.jsx("div",{className:re("xui-spin__content",{"is-blur":d.spinning}),children:o}),d.spinning&&c.jsxs("div",{className:"xui-spin__mask",role:"status","aria-live":"polite",children:[c.jsx("span",{className:re("xui-spin__indicator",`is-${d.size}`),"aria-hidden":"true"}),d.tip&&c.jsx("span",{className:"xui-spin__tip",children:d.tip})]})]}):d.spinning?c.jsxs("span",{className:re("xui-spin",l),style:i,role:"status","aria-live":"polite",children:[c.jsx("span",{className:re("xui-spin__indicator",`is-${d.size}`),"aria-hidden":"true"}),d.tip&&c.jsx("span",{className:"xui-spin__tip",children:d.tip})]}):null}function Cd(e){const{items:t,separator:n="/",className:a,style:l,onItemClick:i,children:o}=e,s=On(),u=B.useRef({onItemClick:i});u.current={onItemClick:i};const d=B.useRef(null);d.current===null&&(d.current=Mh({items:t,separator:n,onItemClick:(v,k)=>{var S,C;return(C=(S=u.current).onItemClick)==null?void 0:C.call(S,v,k)}}));const p=d.current;B.useEffect(()=>{p.updateOptions({items:t,separator:n})},[p,t,n]);const m=Te(p.subscribe,p.getState);if(o!==void 0)return c.jsx("nav",{className:re("xui-breadcrumb",a),style:l,"aria-label":s.breadcrumb.nav,children:o});const h=m.items.length-1;return c.jsx("nav",{className:re("xui-breadcrumb",a),style:l,"aria-label":s.breadcrumb.nav,children:c.jsx("ol",{className:"xui-breadcrumb__list",children:m.items.map((v,k)=>c.jsxs("li",{className:re("xui-breadcrumb__item",{"is-active":k===h,"is-disabled":v.disabled}),children:[v.href&&k!==h&&!v.disabled?c.jsx("a",{className:"xui-breadcrumb__link",href:v.href,onClick:()=>p.selectItem(k),children:v.label}):c.jsx("span",{className:"xui-breadcrumb__label","aria-current":k===h?"page":void 0,onClick:()=>p.selectItem(k),children:v.label}),k!==h&&c.jsx("span",{className:"xui-breadcrumb__separator","aria-hidden":"true",children:m.separator})]},`${v.label}-${k}`))})})}function kd(e){const{loading:t=!0,avatar:n=!1,rows:a=3,className:l,style:i,children:o}=e,s=On(),u=B.useRef(null);u.current===null&&(u.current=av({loading:t,avatar:n,rows:a}));const d=u.current;B.useEffect(()=>{d.updateOptions({loading:t,avatar:n,rows:a})},[d,t,n,a]);const p=Te(d.subscribe,d.getState);return p.loading?c.jsxs("div",{className:re("xui-skeleton",l),style:i,role:"status","aria-label":s.skeleton.loading,children:[p.avatar&&c.jsx("span",{className:"xui-skeleton__avatar","aria-hidden":"true"}),c.jsx("div",{className:"xui-skeleton__rows","aria-hidden":"true",children:Array.from({length:p.rows},(m,h)=>c.jsx("span",{className:h===p.rows-1?"xui-skeleton__row is-last":"xui-skeleton__row"},h))})]}):o!==void 0?c.jsx(c.Fragment,{children:o}):null}function hs(e,t){return e===null?"":t!==null?e.toFixed(t):String(e)}function Nd(e){const{value:t,defaultValue:n,min:a,max:l,step:i=1,precision:o,disabled:s=!1,placeholder:u,className:d,style:p,onChange:m,renderUpIcon:h,renderDownIcon:v,ref:k}=e,S=B.useRef({onChange:m});S.current={onChange:m};const C=B.useRef(null),b=B.useRef(null);b.current===null&&(b.current=Yh({value:t,defaultValue:n,min:a,max:l,step:i,precision:o,disabled:s,onChange:A=>{var O,L;return(L=(O=S.current).onChange)==null?void 0:L.call(O,A)}}));const f=b.current;B.useEffect(()=>{f.updateOptions({value:t,min:a,max:l,step:i,precision:o,disabled:s})},[f,t,a,l,i,o,s]);const y=Te(f.subscribe,f.getState);B.useImperativeHandle(k,()=>({focus:()=>{var A;return(A=C.current)==null?void 0:A.focus()},blur:()=>{var A;return(A=C.current)==null?void 0:A.blur()},stepValue:A=>f.stepValue(A)}),[f]);const[_,T]=B.useState(()=>hs(y.value,y.precision));B.useEffect(()=>{t!==void 0&&T(hs(y.value,y.precision))},[t,y.value,y.precision]);const w=()=>{f.commitText(_);const A=f.getState();T(hs(A.value,A.precision))},R=A=>{f.stepValue(A);const O=f.getState();T(hs(O.value,O.precision))};return c.jsxs("div",{className:re("xui-input-number",d,{"is-disabled":y.disabled}),style:p,children:[c.jsx("input",{ref:C,className:"xui-input-number__input",type:"text",inputMode:"decimal",role:"spinbutton","aria-valuenow":y.value??void 0,"aria-valuemin":Number.isFinite(y.min)?y.min:void 0,"aria-valuemax":Number.isFinite(y.max)?y.max:void 0,placeholder:u,disabled:y.disabled,value:_,onChange:A=>T(A.target.value),onBlur:w,onKeyDown:A=>{A.key==="Enter"?(A.preventDefault(),w()):A.key==="ArrowUp"?(A.preventDefault(),R(1)):A.key==="ArrowDown"&&(A.preventDefault(),R(-1))}}),c.jsxs("div",{className:"xui-input-number__step","aria-hidden":"true",children:[c.jsx("button",{className:"xui-input-number__btn",type:"button",tabIndex:-1,disabled:y.disabled,onClick:()=>R(1),children:h?h():c.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-up"]}})}),c.jsx("button",{className:"xui-input-number__btn",type:"button",tabIndex:-1,disabled:y.disabled,onClick:()=>R(-1),children:v?v():c.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-down"]}})})]})]})}function dl(e){const{content:t,confirmText:n,cancelText:a,placement:l="top",disabled:i=!1,className:o,style:s,onConfirm:u,onCancel:d,children:p,renderContent:m,ref:h}=e,v=On(),k=B.useRef({onConfirm:u,onCancel:d});k.current={onConfirm:u,onCancel:d};const S=B.useRef(null);S.current===null&&(S.current=Jh({placement:l,disabled:i,onConfirm:()=>{var A,O;return(O=(A=k.current).onConfirm)==null?void 0:O.call(A)},onCancel:()=>{var A,O;return(O=(A=k.current).onCancel)==null?void 0:O.call(A)}}));const C=S.current;B.useEffect(()=>{C.updateOptions({placement:l,disabled:i})},[C,l,i]);const b=Te(C.subscribe,C.getState);B.useImperativeHandle(h,()=>({show:()=>{b.open||C.toggle()},hide:()=>C.close(),toggle:()=>C.toggle()}),[C,b.open]);const f=B.useRef(null),y=B.useRef(null),_=B.useRef(null),T=B.useId(),[w,R]=B.useState({placement:l,shift:0});return B.useLayoutEffect(()=>{if(!b.open)return;R({placement:b.placement,shift:0});const A=()=>{const te=y.current,j=_.current;if(!te||!j)return;const I=j.getBoundingClientRect();I.width===0&&I.height===0||R(yi(te.getBoundingClientRect(),I,Si(),{placement:b.placement,gap:8}))},O=requestAnimationFrame(A),L=bi(A);return()=>{cancelAnimationFrame(O),L()}},[b.open,b.placement]),B.useEffect(()=>{const A=O=>{const L=f.current;L&&!L.contains(O.target)&&C.close()};return document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}},[C]),c.jsx("span",{ref:f,className:re("xui-popconfirm",o),style:s,children:c.jsxs("span",{ref:y,className:"xui-popconfirm__trigger","aria-describedby":b.open?T:void 0,onClick:()=>C.toggle(),children:[p,b.open&&c.jsxs("span",{ref:_,id:T,className:`xui-popconfirm__popper is-${w.placement}`,style:w.placement==="top"||w.placement==="bottom"?{marginLeft:`${w.shift}px`}:{marginTop:`${w.shift}px`},role:"tooltip",onClick:A=>A.stopPropagation(),children:[c.jsx("span",{className:"xui-popconfirm__content",children:m?m():t}),c.jsxs("div",{className:"xui-popconfirm__actions",children:[c.jsx("button",{className:"xui-button xui-button--sm",type:"button",onClick:()=>C.cancel(),children:a??v.popconfirm.cancel}),c.jsx("button",{className:"xui-button xui-button--primary xui-button--sm",type:"button",onClick:()=>C.confirm(),children:n??v.popconfirm.confirm})]}),c.jsx("span",{className:"xui-popconfirm__arrow","aria-hidden":"true"})]})]})})}function ee(e){const{type:t="default",size:n="md",disabled:a=!1,loading:l=!1,block:i=!1,className:o,style:s,onClick:u,children:d,renderIcon:p,renderLoadingIcon:m,ref:h}=e,v=B.useRef(null),k=B.useRef(null);k.current===null&&(k.current=Dh({disabled:a,loading:l,onClick:f=>u==null?void 0:u(f)}));const S=k.current;B.useEffect(()=>{S.updateOptions({disabled:a,loading:l,onClick:f=>u==null?void 0:u(f)})},[S,a,l,u]);const C=Te(S.subscribe,S.getState);B.useImperativeHandle(h,()=>({focus:()=>{var f;return(f=v.current)==null?void 0:f.focus()},setLoading:f=>S.updateOptions({loading:f})}),[S]);const b=f=>{S.handleClick(f.nativeEvent)};return c.jsxs("button",{ref:v,type:"button",className:re("xui-button",`xui-button--${t}`,`xui-button--${n}`,{"is-disabled":C.disabled,"is-loading":C.loading,"is-block":i},o),style:s,disabled:C.disabled||C.loading,onClick:b,children:[C.loading&&c.jsx("span",{className:"xui-button__loading-icon","aria-hidden":"true",children:m?m():c.jsx(g$,{})}),!C.loading&&p&&c.jsx("span",{className:"xui-button__icon","aria-hidden":"true",children:p()}),c.jsx("span",{className:"xui-button__content",children:d})]})}function g$(){return c.jsx("svg",{className:"xui-button__spinner",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeLinecap:"round",dangerouslySetInnerHTML:{__html:le.loading}})}function ut(e){const{type:t="text",value:n,defaultValue:a,placeholder:l,disabled:i=!1,readonly:o=!1,maxLength:s,clearable:u=!1,className:d,style:p,onInput:m,onChange:h,onFocus:v,onBlur:k,onClear:S,renderPrefix:C,renderSuffix:b,renderClearIcon:f,ref:y}=e,_=B.useRef(null),T=B.useRef(null);T.current===null&&(T.current=Gh({value:n,defaultValue:a,disabled:i,readonly:o,onInput:q=>m==null?void 0:m(q),onChange:q=>h==null?void 0:h(q),onFocus:q=>v==null?void 0:v(q),onBlur:q=>k==null?void 0:k(q),onClear:()=>S==null?void 0:S()}));const w=T.current;B.useEffect(()=>{w.updateOptions({value:n,disabled:i,readonly:o,onInput:q=>m==null?void 0:m(q),onChange:q=>h==null?void 0:h(q),onFocus:q=>v==null?void 0:v(q),onBlur:q=>k==null?void 0:k(q),onClear:()=>S==null?void 0:S()})},[w,n,i,o,m,h,v,k,S]);const R=Te(w.subscribe,w.getState);B.useImperativeHandle(y,()=>({focus:()=>{var q;return(q=_.current)==null?void 0:q.focus()},blur:()=>{var q;return(q=_.current)==null?void 0:q.blur()},clear:()=>w.handleClear()}),[w]);const A=q=>{w.handleInput(q.currentTarget.value)},O=q=>{w.handleChange(q.currentTarget.value)},L=q=>{w.handleFocus(q.nativeEvent)},te=q=>{w.handleBlur(q.nativeEvent)},j=()=>{w.handleClear()},I=u&&!!R.value&&!R.disabled&&!R.readonly;return c.jsxs("div",{className:re("xui-input",{"is-focused":R.focused,"is-disabled":R.disabled,"is-readonly":R.readonly},d),style:p,children:[C&&c.jsx("span",{className:"xui-input__prefix",children:C()}),c.jsx("input",{ref:_,className:"xui-input__inner",type:t,value:R.value,placeholder:l,disabled:R.disabled,readOnly:R.readonly,maxLength:s,onInput:A,onChange:O,onFocus:L,onBlur:te}),I&&c.jsx("button",{type:"button",className:"xui-input__clear",tabIndex:0,onClick:j,"aria-label":"clear",children:f?f():c.jsx(b$,{})}),b&&c.jsx("span",{className:"xui-input__suffix",children:b()})]})}function b$(){return c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",dangerouslySetInnerHTML:{__html:le.clear}})}function Go(e){const{visible:t,defaultVisible:n,title:a,width:l=520,closable:i=!0,maskClosable:o=!0,closeOnEsc:s=!0,okText:u,cancelText:d,trapFocus:p=!0,className:m,style:h,onOpen:v,onClose:k,onOk:S,onCancel:C,children:b,renderTitle:f,renderFooter:y,renderCloseIcon:_,ref:T}=e,w=On(),R=B.useRef({onOpen:v,onClose:k,onOk:S,onCancel:C});R.current={onOpen:v,onClose:k,onOk:S,onCancel:C};const A=B.useRef(null);A.current===null&&(A.current=Kh({visible:t,defaultVisible:n,closable:i,maskClosable:o,closeOnEsc:s,onOpen:()=>{var Z,P;return(P=(Z=R.current).onOpen)==null?void 0:P.call(Z)},onClose:()=>{var Z,P;return(P=(Z=R.current).onClose)==null?void 0:P.call(Z)},onOk:()=>{var Z,P;return(P=(Z=R.current).onOk)==null?void 0:P.call(Z)},onCancel:()=>{var Z,P;return(P=(Z=R.current).onCancel)==null?void 0:P.call(Z)}}));const O=A.current;B.useEffect(()=>{O.updateOptions({visible:t,closable:i,maskClosable:o,closeOnEsc:s})},[O,t,i,o,s]);const L=Te(O.subscribe,O.getState);B.useImperativeHandle(T,()=>({open:()=>O.open(),close:()=>O.close(),toggle:()=>O.toggle()}),[O]),B.useEffect(()=>{if(!L.visible||!s)return;const Z=P=>{P.key==="Escape"&&O.handleEsc()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[L.visible,s,O]);const te=B.useRef(null),j=B.useRef(null);B.useEffect(()=>{var Z,P;if(!L.visible){(Z=j.current)==null||Z.focus(),j.current=null;return}j.current=document.activeElement instanceof HTMLElement?document.activeElement:null,(P=te.current)==null||P.focus()},[L.visible]);const I=Z=>{if(Z.key==="Escape"){Z.preventDefault(),O.handleEsc();return}p&&Ch(Z.nativeEvent,Z.currentTarget)},q=()=>{O.handleMaskClick()},me=()=>{O.handleOk()},V=()=>{O.handleCancel()},oe=()=>{O.close()},X={};return l!==void 0&&(X.width=typeof l=="number"?`${l}px`:l),L.visible?jv.createPortal(c.jsxs("div",{className:"xui-modal",children:[c.jsx("div",{className:"xui-modal__overlay",onClick:q}),c.jsxs("div",{ref:te,className:re("xui-modal__panel",m),style:{...X,...h},role:"dialog","aria-modal":"true",tabIndex:-1,onKeyDown:I,children:[c.jsxs("div",{className:"xui-modal__header",children:[c.jsx("span",{className:"xui-modal__title",children:f?f():a??null}),L.closable&&c.jsx("button",{type:"button",className:"xui-modal__close",onClick:oe,"aria-label":"close",children:_?_():c.jsx(y$,{})})]}),c.jsx("div",{className:"xui-modal__body",children:b}),y?c.jsx("div",{className:"xui-modal__footer",children:y()}):c.jsxs("div",{className:"xui-modal__footer",children:[c.jsx("button",{type:"button",className:re("xui-button","xui-button--md"),onClick:V,children:d??w.modal.cancel}),c.jsx("button",{type:"button",className:re("xui-button","xui-button--primary","xui-button--md"),onClick:me,children:u??w.modal.ok})]})]})]}),document.body):null}function y$(){return c.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})}const Vy=B.createContext(void 0);function S$(){return B.useContext(Vy)}function lu(e){const{initialValues:t,rules:n,disabled:a=!1,readonly:l=!1,labelWidth:i,labelPosition:o="right",validateTrigger:s,className:u,style:d,onSubmit:p,onSubmitFail:m,onValuesChange:h,children:v,ref:k}=e,S=B.useRef(null);S.current===null&&(S.current=qh({initialValues:t,rules:n,disabled:a,readonly:l,onSubmit:_=>p==null?void 0:p(_),onSubmitFail:_=>m==null?void 0:m(_),onValuesChange:(_,T)=>h==null?void 0:h(_,T)}));const C=S.current;B.useEffect(()=>{C.updateOptions({disabled:a,readonly:l,rules:n,onSubmit:_=>p==null?void 0:p(_),onSubmitFail:_=>m==null?void 0:m(_),onValuesChange:(_,T)=>h==null?void 0:h(_,T)})},[C,a,l,n,p,m,h]);const b=Te(C.subscribe,C.getState);B.useImperativeHandle(k,()=>({validate:_=>C.validate(_),validateField:(_,T)=>C.validateField(_,T),getFieldValue:_=>C.getFieldValue(_),getFieldsValue:()=>C.getFieldsValue(),setFieldValue:(_,T)=>C.setFieldValue(_,T),setFieldsValue:_=>C.setFieldsValue(_),resetFields:_=>C.resetFields(_),clearValidate:_=>C.clearValidate(_),submit:()=>C.submit()}),[C]);const f=_=>{_.preventDefault(),C.submit()},y={logic:C,disabled:b.disabled,readonly:b.readonly,labelWidth:i,labelPosition:o};return c.jsx(Vy.Provider,{value:y,children:c.jsx("form",{className:re("xui-form",u),style:d,onSubmit:f,children:v})})}function Rt(e){const{name:t,label:n,rules:a,required:l=!1,validateFirst:i=!1,hidden:o=!1,extra:s,labelAlign:u="right",className:d,style:p,children:m,ref:h}=e,v=S$(),k=v==null?void 0:v.logic;B.useEffect(()=>(t&&k&&k.registerField(t,a??[]),()=>{t&&k&&k.unregisterField(t)}),[t,k,a]);const S=Te(v?v.logic.subscribe:()=>()=>{},v?v.logic.getState:()=>({values:{},errors:{},validating:!1,submitting:!1,disabled:!1,readonly:!1})),C=t?S.values[t]:void 0,b=t?S.errors[t]??[]:[],f=S.validating,y=l||Fh(a),_=(v==null?void 0:v.disabled)??!1,T=(v==null?void 0:v.readonly)??!1,w=O=>{!t||!v||(v.logic.setFieldValue(t,O),v.logic.validateField(t,"change"))},R=()=>{!t||!v||v.logic.validateField(t,"blur")},A=(()=>{if(!m)return null;const O=B.Children.only(m);if(!O)return null;const L=O.props;return B.cloneElement(O,{value:C,disabled:_||void 0,readonly:T||void 0,onUpdateValue:te=>{w(te),typeof L.onUpdateValue=="function"&&L.onUpdateValue(te)},onChange:te=>{w(te),typeof L.onChange=="function"&&L.onChange(te)},onBlur:te=>{R(),typeof L.onBlur=="function"&&L.onBlur(te)}})})();return B.useImperativeHandle(h,()=>({validate:O=>!t||!v?Promise.resolve([]):v.logic.validateField(t,O),clearValidation:()=>{!t||!v||v.logic.clearValidate([t])},resetField:()=>{!t||!v||v.logic.resetFields([t])}}),[t,v]),o?null:c.jsxs("div",{className:re("xui-form-item",`xui-form-item--label-${(v==null?void 0:v.labelPosition)??"right"}`,{"is-error":b.length>0,"is-required":y,"is-validating":f},d),style:p,children:[n!==void 0&&c.jsx("label",{className:re("xui-form-item__label",`xui-form-item__label--${u}`),style:(()=>{const O=v==null?void 0:v.labelWidth;if(O!==void 0)return{width:typeof O=="number"?`${O}px`:O,flexShrink:0}})(),children:n}),c.jsxs("div",{className:"xui-form-item__content",children:[A,s&&c.jsx("div",{className:"xui-form-item__extra",children:s}),b.length>0&&c.jsxs("div",{className:"xui-form-item__error",children:[b[0],b.length>1&&c.jsxs("span",{className:"xui-form-item__error-count",children:["(+",b.length-1,")"]})]})]})]})}function Hy(e){const{value:t,defaultValue:n,placeholder:a,disabled:l=!1,clearable:i=!1,format:o="HH:mm:ss",hourStep:s=1,minuteStep:u=1,secondStep:d=1,className:p,style:m,onChange:h,onClear:v,renderClearIcon:k,renderClockIcon:S,ref:C}=e,b=On(),f=B.useRef(null),y=B.useRef(null),_=B.useId(),T=B.useId(),w=B.useRef({onChange:h,onClear:v});w.current={onChange:h,onClear:v};const R=B.useRef(null);R.current===null&&(R.current=dv({value:t,defaultValue:n,disabled:l,onChange:X=>{var Z,P;return(P=(Z=w.current).onChange)==null?void 0:P.call(Z,X)},onClear:()=>{var X,Z;return(Z=(X=w.current).onClear)==null?void 0:Z.call(X)}}));const A=R.current;B.useEffect(()=>{A.updateOptions({value:t,disabled:l})},[A,t,l]);const O=Te(A.subscribe,A.getState);B.useImperativeHandle(C,()=>({focus:()=>{var X;return(X=y.current)==null?void 0:X.focus()},toggleOpen:()=>A.toggleOpen(),close:()=>A.close()}),[A]),B.useEffect(()=>{const X=Z=>{f.current&&!f.current.contains(Z.target)&&A.close()};return document.addEventListener("mousedown",X),()=>document.removeEventListener("mousedown",X)},[A]),B.useEffect(()=>{var Z;if(!O.open)return;const X=(Z=f.current)==null?void 0:Z.querySelectorAll(".xui-time-picker__column");X==null||X.forEach(P=>{const Q=P.querySelector(".xui-time-picker__item.is-selected");Q&&typeof Q.scrollIntoView=="function"&&Q.scrollIntoView({block:"center",inline:"nearest"})})},[O.open]);const L=Vl(24,s),te=Vl(60,u),j=o==="HH:mm:ss"?Vl(60,d):[],I=O.draft?cv(O.draft):null,q=o==="HH:mm:ss",me=O.value?q?O.value:O.value.slice(0,5):null,V=X=>{switch(X.key){case"Enter":case" ":X.preventDefault(),A.toggleOpen();break;case"Escape":O.open&&(X.preventDefault(),A.close());break}},oe=(X,Z)=>{const Q={...I??{hour:0,minute:0,second:0},[X]:Z};A.selectDraft(Q.hour,Q.minute,q?Q.second:0)};return c.jsxs("div",{ref:f,className:re("xui-time-picker",p,{"is-disabled":O.disabled,"is-open":O.open}),style:m,children:[c.jsxs("div",{ref:y,id:_,className:"xui-time-picker__trigger",role:"combobox","aria-expanded":O.open,"aria-haspopup":"dialog","aria-controls":O.open?T:void 0,"aria-disabled":O.disabled||void 0,tabIndex:O.disabled?-1:0,onClick:()=>A.toggleOpen(),onKeyDown:V,children:[me?c.jsx("span",{className:"xui-time-picker__value",children:me}):c.jsx("span",{className:"xui-time-picker__placeholder",children:a??b.timePicker.placeholder}),i&&O.value&&!O.disabled?c.jsx("span",{className:"xui-time-picker__clear",role:"button","aria-label":"clear",onClick:X=>{X.stopPropagation(),A.clear()},children:k?k():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clear}})}):c.jsx("span",{className:"xui-time-picker__icon","aria-hidden":"true",children:S?S():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clock}})})]}),O.open&&c.jsxs("div",{id:T,className:"xui-time-picker__panel",role:"dialog","aria-label":b.timePicker.panel,children:[c.jsxs("div",{className:"xui-time-picker__columns",children:[c.jsx("ul",{className:"xui-time-picker__column",role:"listbox","aria-label":"hour",children:L.map(X=>c.jsx("li",{className:re("xui-time-picker__item",{"is-selected":(I==null?void 0:I.hour)===Hl(X,s,24)}),role:"option","aria-selected":(I==null?void 0:I.hour)===X,onClick:()=>oe("hour",X),children:String(X).padStart(2,"0")},X))}),c.jsx("ul",{className:"xui-time-picker__column",role:"listbox","aria-label":"minute",children:te.map(X=>c.jsx("li",{className:re("xui-time-picker__item",{"is-selected":(I==null?void 0:I.minute)===Hl(X,u,60)}),role:"option","aria-selected":(I==null?void 0:I.minute)===X,onClick:()=>oe("minute",X),children:String(X).padStart(2,"0")},X))}),q&&c.jsx("ul",{className:"xui-time-picker__column",role:"listbox","aria-label":"second",children:j.map(X=>c.jsx("li",{className:re("xui-time-picker__item",{"is-selected":(I==null?void 0:I.second)===Hl(X,d,60)}),role:"option","aria-selected":(I==null?void 0:I.second)===X,onClick:()=>oe("second",X),children:String(X).padStart(2,"0")},X))})]}),c.jsxs("div",{className:"xui-time-picker__footer",children:[c.jsx("button",{type:"button",className:"xui-time-picker__footer-btn xui-time-picker__footer-btn--cancel",onClick:()=>A.close(),children:b.timePicker.cancel}),c.jsx("button",{type:"button",className:"xui-time-picker__footer-btn xui-time-picker__footer-btn--confirm",disabled:!O.draft,onClick:()=>A.confirm(),children:b.timePicker.confirm})]})]})]})}function Fm(e){var X;const{value:t,defaultValue:n,options:a,placeholder:l,disabled:i=!1,clearable:o=!1,separator:s=" / ",changeOnSelect:u=!1,multiple:d=!1,checkStrictly:p=!1,className:m,style:h,onChange:v,onClear:k,renderClearIcon:S,renderSuffixIcon:C,ref:b}=e,f=On(),y=B.useRef(null),_=B.useRef(null),T=B.useId(),w=B.useId(),R=B.useRef({onChange:v,onClear:k});R.current={onChange:v,onClear:k};const A=B.useRef(null);A.current===null&&(A.current=Vh({value:t,defaultValue:n,options:a,disabled:i,changeOnSelect:u,multiple:d,checkStrictly:p,onChange:(Z,P)=>{var Q,ce;return(ce=(Q=R.current).onChange)==null?void 0:ce.call(Q,Z,P)},onClear:()=>{var Z,P;return(P=(Z=R.current).onClear)==null?void 0:P.call(Z)}}));const O=A.current;B.useEffect(()=>{O.updateOptions({value:t,disabled:i,options:a,changeOnSelect:u,checkStrictly:p})},[O,t,i,a,u,p]);const L=Te(O.subscribe,O.getState);B.useImperativeHandle(b,()=>({focus:()=>{var Z;return(Z=_.current)==null?void 0:Z.focus()},toggleOpen:()=>O.toggleOpen(),close:()=>O.close()}),[O]),B.useEffect(()=>{const Z=P=>{y.current&&!y.current.contains(P.target)&&O.close()};return document.addEventListener("mousedown",Z),()=>document.removeEventListener("mousedown",Z)},[O]);const te=Od(a,L.activePath),j=!d&&L.value?((X=ei(a,L.value))==null?void 0:X.labels.join(s))??null:null,I=!d||!L.value?[]:L.value.map(P=>{const Q=ei(a,P);return Q?{path:P,label:Q.labels.join(s)}:null}).filter(Boolean),q=d?I.length>0:!!L.value,me=(Z,P)=>{if(!d)return!1;const Q=[...L.activePath.slice(0,Z),P.value];return Ys(a,L.value,Q,p).checked},V=(Z,P)=>{if(!d)return!1;const Q=[...L.activePath.slice(0,Z),P.value];return Ys(a,L.value,Q,p).indeterminate},oe=Z=>{switch(Z.key){case"Enter":case" ":Z.preventDefault(),O.toggleOpen();break;case"Escape":L.open&&(Z.preventDefault(),O.close());break}};return c.jsxs("div",{ref:y,className:re("xui-cascader",m,{"is-disabled":L.disabled,"is-open":L.open,"is-multiple":d}),style:h,children:[c.jsxs("div",{ref:_,id:T,className:"xui-cascader__trigger",role:"combobox","aria-expanded":L.open,"aria-haspopup":"dialog","aria-controls":L.open?w:void 0,"aria-disabled":L.disabled||void 0,tabIndex:L.disabled?-1:0,onClick:()=>O.toggleOpen(),onKeyDown:oe,children:[d?I.length===0?c.jsx("span",{className:"xui-cascader__placeholder",children:l??f.cascader.placeholder}):c.jsx("span",{className:"xui-cascader__tags",children:I.map(Z=>c.jsxs("span",{className:"xui-cascader__tag",children:[c.jsx("span",{className:"xui-cascader__tag-label",children:Z.label}),c.jsx("span",{className:"xui-cascader__tag-close",role:"button","aria-label":"remove",onClick:P=>{P.stopPropagation(),O.toggleCheck(Z.path)},children:"×"})]},Z.path.join("/")))}):j?c.jsx("span",{className:"xui-cascader__value",children:j}):c.jsx("span",{className:"xui-cascader__placeholder",children:l??f.cascader.placeholder}),o&&q&&!L.disabled?c.jsx("span",{className:"xui-cascader__clear",role:"button","aria-label":"clear",onClick:Z=>{Z.stopPropagation(),O.clear()},children:S?S():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clear}})}):c.jsx("span",{className:re("xui-cascader__arrow",{"is-open":L.open}),"aria-hidden":"true",children:C?C():c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-down"]}})})]}),L.open&&c.jsxs("div",{id:w,className:"xui-cascader__panel",role:"dialog","aria-label":f.cascader.panel,children:[c.jsx("div",{className:"xui-cascader__columns",children:te.map((Z,P)=>c.jsx("ul",{className:"xui-cascader__column",role:"listbox","aria-label":`level-${P}`,children:Z.map(Q=>{const ce=L.activePath[P]===Q.value,Ie=me(P,Q),Fe=V(P,Q);return c.jsxs("li",{className:re("xui-cascader__item",{"is-active":ce,"is-disabled":Q.disabled,"is-checked":d&&Ie}),role:"option","aria-selected":ce,"aria-disabled":Q.disabled||void 0,onClick:()=>{Q.disabled||O.select(P,Q.value)},children:[d&&c.jsx("span",{className:"xui-cascader__checkbox","aria-hidden":"true",children:c.jsx("span",{className:re("xui-cascader__checkbox-inner",{"is-checked":Ie,"is-indeterminate":Fe})})}),c.jsx("span",{className:"xui-cascader__item-label",children:Q.label}),Q.children&&Q.children.length>0&&c.jsx("span",{className:"xui-cascader__item-arrow","aria-hidden":"true",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",dangerouslySetInnerHTML:{__html:le["arrow-right"]}})})]},Q.value)})},P))}),d&&c.jsxs("div",{className:"xui-cascader__footer",children:[c.jsx("button",{type:"button",className:"xui-cascader__footer-btn",onClick:()=>O.checkAll(),children:"全选"}),c.jsx("button",{type:"button",className:"xui-cascader__footer-btn",onClick:()=>O.uncheckAll(),children:"清空"})]})]})]})}function x$(e){return e===void 0||e<=0?"":e<1024?`${e.toFixed(0)} B/s`:e<1024*1024?`${(e/1024).toFixed(1)} KB/s`:`${(e/(1024*1024)).toFixed(1)} MB/s`}function _$(e){if(e===void 0||e<=0)return"";const t=Math.floor(e/60),n=Math.floor(e%60);return t>0?`${t}分${n}秒`:`${n}秒`}function qm(e){const{action:t,accept:n,multiple:a=!1,disabled:l=!1,maxCount:i,maxSize:o,listType:s="text",autoUpload:u=!0,requestUpload:d,beforeUpload:p,value:m,defaultValue:h,onChange:v,onRemove:k,className:S,style:C,renderTrigger:b,renderFileItem:f,ref:y}=e,_=B.useRef(null),T=B.useRef({onChange:v,onRemove:k});T.current={onChange:v,onRemove:k};const w=B.useRef(null);w.current===null&&(w.current=pv({action:t,disabled:l,maxCount:i,maxSize:o,autoUpload:u,requestUpload:d,beforeUpload:p,value:m,defaultValue:h,onChange:j=>{var I,q;return(q=(I=T.current).onChange)==null?void 0:q.call(I,j)},onRemove:j=>{var I,q;return(q=(I=T.current).onRemove)==null?void 0:q.call(I,j)}}));const R=w.current;B.useEffect(()=>{R.updateOptions({value:m,disabled:l})},[R,m,l]);const A=Te(R.subscribe,R.getState);B.useImperativeHandle(y,()=>({open:()=>{var j;return(j=_.current)==null?void 0:j.click()},clear:()=>R.clear(),submit:()=>R.submit()}),[R]);const O=j=>{const I=j.target.files;I&&I.length>0&&R.selectFiles(I),j.target.value=""},L=()=>{var j;A.disabled||(j=_.current)==null||j.click()},te=A.fileList.some(j=>j.status==="pending");return c.jsxs("div",{className:re("xui-upload",S),style:C,children:[c.jsx("input",{ref:_,type:"file",className:"xui-upload__input",accept:n,multiple:a,disabled:A.disabled,style:{display:"none"},onChange:O}),c.jsxs("div",{className:"xui-upload__actions",children:[b?b():c.jsx("button",{type:"button",className:re("xui-upload__trigger",{"is-disabled":A.disabled}),disabled:A.disabled,onClick:L,children:"+ 点击上传"}),!u&&te&&c.jsx("button",{type:"button",className:"xui-upload__submit-btn",onClick:()=>R.submit(),children:"开始上传"})]}),A.fileList.length>0&&c.jsx("ul",{className:re("xui-upload__list",`xui-upload__list--${s}`),children:A.fileList.map((j,I)=>f?c.jsx("li",{children:f(j)},j.uid):c.jsxs("li",{className:re("xui-upload__item",`is-${j.status}`),children:[c.jsxs("div",{className:"xui-upload__item-main",children:[s==="picture"&&j.raw&&c.jsx("img",{src:URL.createObjectURL(j.raw),alt:j.name,className:"xui-upload__thumbnail"}),c.jsx("span",{className:"xui-upload__name",title:j.name,children:j.name}),c.jsxs("span",{className:"xui-upload__status",children:[j.status==="pending"&&"待上传",j.status==="uploading"&&c.jsxs(c.Fragment,{children:[j.percent,"%",j.speed?c.jsx("span",{className:"xui-upload__speed",children:x$(j.speed)}):null,j.remainingTime?c.jsxs("span",{className:"xui-upload__remaining",children:["剩余 ",_$(j.remainingTime)]}):null]}),j.status==="done"&&"✓ 成功",j.status==="error"&&"✗ 失败",j.status==="cancelled"&&"已取消"]})]}),j.status==="uploading"&&c.jsx("div",{className:"xui-upload__progress",children:c.jsx("div",{className:"xui-upload__progress-bar",style:{width:`${j.percent}%`}})}),c.jsxs("div",{className:"xui-upload__item-actions",children:[A.fileList.length>1&&c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",className:"xui-upload__sort-btn","aria-label":"move up",disabled:I===0,onClick:()=>R.move(j.uid,-1),children:"↑"}),c.jsx("button",{type:"button",className:"xui-upload__sort-btn","aria-label":"move down",disabled:I===A.fileList.length-1,onClick:()=>R.move(j.uid,1),children:"↓"})]}),j.status==="uploading"&&c.jsx("button",{type:"button",className:"xui-upload__cancel-btn","aria-label":"cancel",onClick:()=>R.cancel(j.uid),children:"取消"}),c.jsx("button",{type:"button",className:"xui-upload__remove","aria-label":"remove",onClick:()=>R.remove(j.uid),children:"×"})]})]},j.uid))})]})}function C$(){return c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{children:"Default"}),c.jsx(ee,{type:"primary",children:"Primary"}),c.jsx(ee,{type:"danger",children:"Danger"}),c.jsx(ee,{type:"link",children:"Link"})]})}const k$=()=>B.useSyncExternalStore(fT,mp,mp),se=()=>k$()==="zh-CN";function N$(){const e=se();return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{size:"sm",children:"Small"}),c.jsx(ee,{size:"md",children:"Medium"}),c.jsx(ee,{size:"lg",children:"Large"})]}),c.jsx(ee,{block:!0,children:e?"Block（宽度撑满容器）":"Block (full width)"})]})}function w$(){const e=se(),[t,n]=B.useState(!1),a=()=>{n(!0),setTimeout(()=>n(!1),1500)};return c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{disabled:!0,children:"Disabled"}),c.jsx(ee,{loading:!0,children:"Loading"}),c.jsx(ee,{type:"primary",loading:t,onClick:a,children:t?e?"提交中...":"Submitting...":e?"点击模拟提交":"Click to submit"})]})}const T$=`<script setup lang="ts">
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
`,z$=`<script setup lang="ts">
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
`,U$=`<script setup lang="ts">
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
`,$$=`import { Button } from '@xui-design/react';

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
`,E$=`import { Button } from '@xui-design/react';
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
`,R$=`import { useState } from 'react';
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
`,A$={name:"Button",slug:"button",title:"按钮",category:"basic",summary:{"zh-CN":"基础按钮组件，支持多种语义类型、尺寸、加载与禁用状态。","en-US":"A basic button component with multiple semantic types, sizes, loading and disabled states."},features:[{"zh-CN":"四种语义类型：default / primary / danger / link","en-US":"Four semantic types: default / primary / danger / link"},{"zh-CN":"三种尺寸：sm / md（默认）/ lg","en-US":"Three sizes: sm / md (default) / lg"},{"zh-CN":"disabled 禁用、loading 加载态（加载中点击被忽略）","en-US":"Disabled state and loading state (clicks are ignored while loading)"},{"zh-CN":"block 块级按钮（宽度撑满容器）","en-US":"Block-level button that stretches to the container width"},{"zh-CN":"前置图标与加载图标均可通过插槽 / 回调自定义","en-US":"Leading icon and loading icon are customizable via slot / render callback"}],scenarios:[{"zh-CN":"表单提交、操作触发、导航跳转等一切需要点击交互的场景。","en-US":"Any click-driven interaction such as form submission, action triggering, or navigation."}],demos:[{id:"type",title:{"zh-CN":"按钮类型","en-US":"Button Types"},description:{"zh-CN":"通过 type 指定语义类型，默认 default。","en-US":"Use type to set the semantic type; defaults to default."},vueComponent:NT,reactComponent:C$,vueSource:T$,reactSource:$$},{id:"size",title:{"zh-CN":"尺寸与块级","en-US":"Sizes & Block"},description:{"zh-CN":"sm / md / lg 三档尺寸；block 使按钮宽度撑满父容器。","en-US":"Three sizes: sm / md / lg. The block prop stretches the button to its parent width."},vueComponent:zT,reactComponent:N$,vueSource:z$,reactSource:E$},{id:"state",title:{"zh-CN":"禁用与加载","en-US":"Disabled & Loading"},description:{"zh-CN":"disabled 完全禁用交互；loading 时显示加载图标且点击被忽略，适合异步提交场景。","en-US":"disabled turns off all interaction; loading shows a spinner and ignores clicks, ideal for async submissions."},vueComponent:$T,reactComponent:w$,vueSource:U$,reactSource:R$}],api:{props:[{name:"type",type:"'default' | 'primary' | 'danger' | 'link'",default:"'default'",description:{"zh-CN":"按钮语义类型","en-US":"Semantic type of the button"}},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:{"zh-CN":"按钮尺寸","en-US":"Button size"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"loading",type:"boolean",default:"false",description:{"zh-CN":"加载状态（显示加载图标，点击被忽略）","en-US":"Loading state (shows a spinner; clicks are ignored)"}},{name:"block",type:"boolean",default:"false",description:{"zh-CN":"块级按钮（宽度撑满容器）","en-US":"Block button (stretches to container width)"}},{name:"onClick",type:"(event: MouseEvent) => void",default:"—",description:{"zh-CN":"点击回调（由适配层桥接为框架事件）","en-US":"Click callback (bridged to framework events by the adapter)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"click",react:"onClick",payload:"MouseEvent",description:{"zh-CN":"点击按钮时触发（disabled / loading 状态下不触发）","en-US":"Fired on click (not fired while disabled or loading)"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"按钮内容","en-US":"Button content"}},{vue:"icon",react:"renderIcon",description:{"zh-CN":"前置图标（loading 时隐藏）","en-US":"Leading icon (hidden while loading)"}},{vue:"loadingIcon",react:"renderLoadingIcon",description:{"zh-CN":"加载态图标（默认为旋转 Spinner）","en-US":"Loading icon (defaults to a spinning spinner)"}}]},notes:[{"zh-CN":"loading 状态下点击事件被忽略，避免异步提交期间重复触发。","en-US":"Clicks are ignored while loading to prevent duplicate triggers during async submission."},{"zh-CN":'type="link" 仅表现为链接样式，语义仍是 button 元素；需要原生导航请自行包裹 <a>。',"en-US":'type="link" only looks like a link; the element is still a button. Wrap an <a> yourself when native navigation is needed.'}],a11y:[{"zh-CN":"渲染为原生 <button>，disabled / loading 时携带 disabled 属性，键盘与读屏行为与原生按钮一致。","en-US":"Renders as a native <button> with the disabled attribute applied when disabled or loading, matching native keyboard and screen-reader behavior."}]},O$={class:"demo-row"},B$={class:"demo-text"},Z$=D({__name:"basic",setup(e){const t=F(!1);return(n,a)=>(g(),x("div",O$,[z(r(Bt),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l)},null,8,["value"]),N("span",B$,$(r(U)()?"当前值：":"Current: ")+$(t.value?r(U)()?"开启":"On":r(U)()?"关闭":"Off"),1)]))}}),j$={class:"demo-row"},M$=D({__name:"state",setup(e){return(t,n)=>(g(),x("div",j$,[z(r(Bt),{"default-value":"",size:"sm"}),z(r(Bt),{"default-value":""}),z(r(Bt),{disabled:""}),z(r(Bt),{loading:""})]))}});function D$(){const e=se(),[t,n]=B.useState(!1);return c.jsxs("div",{className:"demo-row",children:[c.jsx(Zt,{value:t,onChange:n}),c.jsxs("span",{className:"demo-text",children:[e?"当前值：":"Current: ",t?e?"开启":"On":e?"关闭":"Off"]})]})}function L$(){return c.jsxs("div",{className:"demo-row",children:[c.jsx(Zt,{defaultValue:!0,size:"sm"}),c.jsx(Zt,{defaultValue:!0}),c.jsx(Zt,{disabled:!0}),c.jsx(Zt,{loading:!0})]})}const V$={class:"demo-column"},H$={class:"demo-row"},I$={class:"demo-row"},F$=D({__name:"text",setup(e){const t=F(!0);return(n,a)=>(g(),x("div",V$,[N("div",H$,[z(r(Bt),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),"checked-text":r(U)()?"开启":"On","unchecked-text":r(U)()?"关闭":"Off"},null,8,["value","checked-text","unchecked-text"]),z(r(Bt),{"default-value":"","checked-text":"ON","unchecked-text":"OFF"}),z(r(Bt),{size:"sm","default-value":"","checked-text":r(U)()?"是":"Yes","unchecked-text":r(U)()?"否":"No"},null,8,["checked-text","unchecked-text"])]),N("div",I$,[z(r(Bt),{"default-value":"","checked-text":r(U)()?"启用超长文本展示":"Enabled long text","unchecked-text":r(U)()?"禁用超长文本展示":"Disabled long text"},null,8,["checked-text","unchecked-text"])])]))}});function q$(){const e=se(),[t,n]=B.useState(!0);return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{className:"demo-row",children:[c.jsx(Zt,{value:t,onChange:n,checkedText:e?"开启":"On",uncheckedText:e?"关闭":"Off"}),c.jsx(Zt,{defaultValue:!0,checkedText:"ON",uncheckedText:"OFF"}),c.jsx(Zt,{size:"sm",defaultValue:!0,checkedText:e?"是":"Yes",uncheckedText:e?"否":"No"})]}),c.jsx("div",{className:"demo-row",children:c.jsx(Zt,{defaultValue:!0,checkedText:e?"启用超长文本展示":"Enabled long text",uncheckedText:e?"禁用超长文本展示":"Disabled long text"})})]})}const G$=`<script setup lang="ts">
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
`,Y$=`<script setup lang="ts">
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
`,P$=`import { useState } from 'react';
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
`,K$=`<script setup lang="ts">
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
`,X$=`import { useState } from 'react';
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
`,Q$=`import { Switch } from '@xui-design/react';

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
`,J$={name:"Switch",slug:"switch",title:"开关",category:"form",summary:{"zh-CN":"布尔值开关选择器，支持受控 / 非受控双模式与加载态。","en-US":"A boolean toggle switch with controlled / uncontrolled modes and a loading state."},features:[{"zh-CN":"受控 / 非受控双模式（提供 value 即受控），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes (controlled when value is provided); v-model:value on Vue"},{"zh-CN":"sm / md 两种尺寸","en-US":"Two sizes: sm / md"},{"zh-CN":"disabled 禁用、loading 加载态（加载中切换被忽略，滑块显示 Spinner）","en-US":"Disabled state and loading state (toggles are ignored while loading; the thumb shows a spinner)"},{"zh-CN":"checkedText / uncheckedText 双态文本：显示在轨道内滑块对侧，超长自动截断（title 提示）","en-US":"Dual-state text via checkedText / uncheckedText: shown inside the track on the opposite side of the thumb, auto-truncated when too long (with a title tooltip)"},{"zh-CN":"checkedColor / uncheckedColor 自定义开 / 关背景色（CSS 颜色值，透传 CSS 变量）","en-US":"checkedColor / uncheckedColor customize the on / off background colors (CSS color values, passed via CSS variables)"},{"zh-CN":"beforeChange 切换前钩子：返回 false 或 reject 的 Promise 可阻止切换","en-US":"beforeChange pre-toggle hook: returning false or a rejected promise prevents the toggle"},{"zh-CN":"通过 ref 暴露 focus() 命令式聚焦","en-US":"Imperative focus() exposed via ref"}],scenarios:[{"zh-CN":"通知开关、功能启停、协议同意等布尔设置的即时切换场景。","en-US":"Instant toggling of boolean settings such as notification switches, feature flags, and agreement consent."}],demos:[{id:"basic",title:{"zh-CN":"受控用法","en-US":"Controlled Usage"},description:{"zh-CN":"绑定 value 并监听 change 同步外部状态，Vue 端推荐 v-model:value。","en-US":"Bind value and listen to change to sync external state; v-model:value is recommended on Vue."},vueComponent:Z$,reactComponent:D$,vueSource:G$,reactSource:P$},{id:"state",title:{"zh-CN":"尺寸与状态","en-US":"Sizes & States"},description:{"zh-CN":"小尺寸、非受控默认开启、禁用与加载态。","en-US":"Small size, uncontrolled default-on, disabled, and loading states."},vueComponent:M$,reactComponent:L$,vueSource:Y$,reactSource:Q$},{id:"text",title:{"zh-CN":"双态文本","en-US":"Dual-State Text"},description:{"zh-CN":"checkedText / uncheckedText 显示在轨道内；不传保持纯开关模式。","en-US":"checkedText / uncheckedText are shown inside the track; omit them for a plain switch."},vueComponent:F$,reactComponent:q$,vueSource:K$,reactSource:X$}],api:{props:[{name:"value",type:"boolean",default:"—",description:{"zh-CN":"受控选中状态（提供即受控）","en-US":"Controlled checked state (controlled when provided)"}},{name:"defaultValue",type:"boolean",default:"false",description:{"zh-CN":"非受控初始状态","en-US":"Uncontrolled initial state"}},{name:"size",type:"'sm' | 'md'",default:"'md'",description:{"zh-CN":"尺寸","en-US":"Switch size"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用","en-US":"Disabled state"}},{name:"loading",type:"boolean",default:"false",description:{"zh-CN":"加载中（切换被忽略）","en-US":"Loading state (toggles are ignored)"}},{name:"checkedText",type:"string",default:"—",description:{"zh-CN":"开启态文本（轨道内滑块左侧；空串视为未提供；超长截断 + title）","en-US":"On-state text (left of the thumb inside the track; an empty string is treated as not provided; truncated with a title tooltip when too long)"}},{name:"uncheckedText",type:"string",default:"—",description:{"zh-CN":"关闭态文本（轨道内滑块右侧；空串视为未提供；超长截断 + title）","en-US":"Off-state text (right of the thumb inside the track; an empty string is treated as not provided; truncated with a title tooltip when too long)"}},{name:"checkedColor",type:"string",default:"—",description:{"zh-CN":"开启态背景色（CSS 颜色值，通过 --xui-switch-checked-color 透传）","en-US":"On-state background color (CSS color value, passed via --xui-switch-checked-color)"}},{name:"uncheckedColor",type:"string",default:"—",description:{"zh-CN":"关闭态背景色（CSS 颜色值，通过 --xui-switch-unchecked-color 透传）","en-US":"Off-state background color (CSS color value, passed via --xui-switch-unchecked-color)"}},{name:"beforeChange",type:"(value: boolean) => boolean | Promise<boolean>",default:"—",description:{"zh-CN":"切换前钩子，返回 false 或 reject 的 Promise 可阻止切换","en-US":"Pre-toggle hook; returning false or a rejected promise prevents the toggle"}},{name:"onChange",type:"(value: boolean) => void",default:"—",description:{"zh-CN":"状态变更回调","en-US":"State change callback"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"boolean",description:{"zh-CN":"切换后的选中值","en-US":"Fired with the checked value after toggle"}},{vue:"update:value",react:"—",payload:"boolean",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"loadingIcon",react:"renderLoadingIcon",description:{"zh-CN":"自定义加载图标（替换内置 Spinner）","en-US":"Custom loading icon (replaces the built-in spinner)"}},{vue:"checkedIcon",react:"renderCheckedIcon",description:{"zh-CN":"自定义开启态滑块内图标（替换默认对勾）","en-US":"Custom on-state thumb icon (replaces the default checkmark)"}},{vue:"uncheckedIcon",react:"renderUncheckedIcon",description:{"zh-CN":"自定义关闭态滑块内图标（替换默认关闭图标）","en-US":"Custom off-state thumb icon (replaces the default close icon)"}}]},notes:[{"zh-CN":"受控模式下组件不自改状态，仅通过 change / update:value 回调通知外部同步。","en-US":"In controlled mode the component never changes its own state; it only notifies the external side via change / update:value."},{"zh-CN":'loading 为 true 时点击切换被忽略，但不禁用样式，适合"切换中等待异步结果"场景。',"en-US":'When loading is true, click toggles are ignored but the disabled styling is not applied — ideal for "waiting for an async result after toggling" scenarios.'},{"zh-CN":"beforeChange 返回 false 或 reject 的 Promise 时阻止切换；返回 true 或 resolve(true) 时正常切换。","en-US":"beforeChange returning false or a rejected promise prevents the toggle; returning true or resolving to true allows it."},{"zh-CN":'双态文本对读屏隐藏（状态由 role="switch" + aria-checked 传达），两文本常驻 DOM 并以 CSS Grid 重叠，轨道宽度自适应较宽文本，切换时无宽度抖动。',"en-US":'Dual-state text is hidden from screen readers (state is conveyed via role="switch" + aria-checked); both texts stay in the DOM overlapped with CSS Grid, the track width adapts to the wider text, and no width jitter occurs on toggle.'}],a11y:[{"zh-CN":'渲染为 role="switch" 的按钮，携带 aria-checked；禁用时携带 disabled，支持空格 / 回车切换。',"en-US":'Renders as a button with role="switch" and aria-checked; carries disabled when disabled, and toggles with Space / Enter.'}]},W$=D({__name:"basic",setup(e){const t=Y(()=>[{key:"name",title:U()?"姓名":"Name"},{key:"age",title:U()?"年龄":"Age",sortable:!0,width:100,align:"center"},{key:"city",title:U()?"城市":"City"}]),n=Y(()=>U()?[{id:1,name:"张三",age:30,city:"Beijing"},{id:2,name:"李四",age:25,city:"Shanghai"},{id:3,name:"王五",age:28,city:"Guangzhou"},{id:4,name:"赵六",age:32,city:"Shenzhen"}]:[{id:1,name:"John",age:30,city:"Beijing"},{id:2,name:"Jane",age:25,city:"Shanghai"},{id:3,name:"Mike",age:28,city:"Guangzhou"},{id:4,name:"Lily",age:32,city:"Shenzhen"}]),a=l=>{console.log("sort-change:",l.key,l.order)};return(l,i)=>(g(),ae(r(ti),{columns:t.value,"data-source":n.value,"row-key":"id",stripe:"",border:"",onSortChange:a},null,8,["columns","data-source"]))}}),eE={class:"demo-column"},tE=D({__name:"custom",setup(e){const t=Y(()=>[{key:"name",title:U()?"姓名":"Name"},{key:"action",title:U()?"操作":"Action",render:a=>U()?`查看 ${String(a.name)}`:`View ${String(a.name)}`}]),n=Y(()=>U()?[{id:1,name:"张三"},{id:2,name:"李四"}]:[{id:1,name:"John"},{id:2,name:"Jane"}]);return(a,l)=>(g(),x("div",eE,[z(r(ti),{columns:t.value,"data-source":n.value,"row-key":"id",border:""},null,8,["columns","data-source"]),z(r(ti),{columns:t.value,"data-source":[]},{empty:E(()=>[N("span",null,$(r(U)()?"自定义空态：没有更多数据啦":"Custom empty: no more data"),1)]),_:1},8,["columns"])]))}}),nE={class:"demo-column"},aE={class:"demo-text"},lE=D({__name:"virtual",setup(e){const t=Y(()=>Array.from({length:1e3},(i,o)=>({id:o+1,name:U()?`用户${o+1}`:`User ${o+1}`,age:20+o%40,city:U()?`城市${o%20+1}`:`City ${o%20+1}`}))),n=Y(()=>[{key:"name",title:U()?"姓名":"Name"},{key:"age",title:U()?"年龄":"Age",width:100,align:"center"},{key:"city",title:U()?"城市":"City"}]),a=F([]),l=i=>{a.value=i};return(i,o)=>(g(),x("div",nE,[z(r(ti),{columns:n.value,"data-source":t.value,"row-key":"id",virtual:"",height:320,"row-height":40,stripe:"","row-selection":{onChange:l}},null,8,["columns","data-source","row-selection"]),N("p",aE,$(r(U)()?`虚拟滚动 · 1000 行仅渲染可视窗口；当前选中 ${a.value.length} 行（滚动时勾选状态保持）。`:`Virtual scroll · only the visible window of 1000 rows is rendered; ${a.value.length} row(s) selected (selection preserved on scroll).`),1)]))}});function iE(){const e=se(),t=[{key:"name",title:e?"姓名":"Name"},{key:"age",title:e?"年龄":"Age",sortable:!0,width:100,align:"center"},{key:"city",title:e?"城市":"City"}],n=e?[{id:1,name:"张三",age:30,city:"Beijing"},{id:2,name:"李四",age:25,city:"Shanghai"},{id:3,name:"王五",age:28,city:"Guangzhou"},{id:4,name:"赵六",age:32,city:"Shenzhen"}]:[{id:1,name:"John",age:30,city:"Beijing"},{id:2,name:"Jane",age:25,city:"Shanghai"},{id:3,name:"Mike",age:28,city:"Guangzhou"},{id:4,name:"Lily",age:32,city:"Shenzhen"}];return c.jsx(hi,{columns:t,dataSource:n,rowKey:"id",stripe:!0,border:!0,onSortChange:a=>console.log("sort-change:",a.key,a.order)})}function oE(){const e=se(),t=[{key:"name",title:e?"姓名":"Name"},{key:"action",title:e?"操作":"Action",render:a=>e?`查看 ${String(a.name)}`:`View ${String(a.name)}`}],n=e?[{id:1,name:"张三"},{id:2,name:"李四"}]:[{id:1,name:"John"},{id:2,name:"Jane"}];return c.jsxs("div",{className:"demo-column",children:[c.jsx(hi,{columns:t,dataSource:n,rowKey:"id",border:!0}),c.jsx(hi,{columns:t,dataSource:[],renderEmpty:()=>c.jsx("span",{children:e?"自定义空态：没有更多数据啦":"Custom empty: no more data"})})]})}function sE(){const e=se(),[t,n]=B.useState([]),a=Array.from({length:1e3},(i,o)=>({id:o+1,name:e?`用户${o+1}`:`User ${o+1}`,age:20+o%40,city:e?`城市${o%20+1}`:`City ${o%20+1}`})),l=[{key:"name",title:e?"姓名":"Name"},{key:"age",title:e?"年龄":"Age",width:100,align:"center"},{key:"city",title:e?"城市":"City"}];return c.jsxs("div",{className:"demo-column",children:[c.jsx(hi,{columns:l,dataSource:a,rowKey:"id",virtual:!0,height:320,rowHeight:40,stripe:!0,rowSelection:{onChange:i=>n([...i])}}),c.jsx("p",{className:"demo-text",children:e?`虚拟滚动 · 1000 行仅渲染可视窗口；当前选中 ${t.length} 行（滚动时勾选状态保持）。`:`Virtual scroll · only the visible window of 1000 rows is rendered; ${t.length} row(s) selected (selection preserved on scroll).`})]})}const rE=`<script setup lang="ts">
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
`,uE=`<script setup lang="ts">
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
`,cE=`<script setup lang="ts">
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
`,dE=`import { Table } from '@xui-design/react';
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
`,mE=`import { Table } from '@xui-design/react';
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
`,pE=`import { useState } from 'react';
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
`,fE={name:"Table",slug:"table",title:"表格",category:"display",summary:{"zh-CN":"结构化数据表格，支持列定义、非受控排序、行选择、虚拟滚动、自定义单元格与空态。","en-US":"A structured data table with column definitions, uncontrolled sorting, row selection, virtual scrolling, custom cells, and an empty state."},features:[{"zh-CN":"columns 列定义 + dataSource 数据驱动，rowKey 指定行唯一键","en-US":"Driven by columns definitions and dataSource, with rowKey as the unique row key"},{"zh-CN":"列级排序：点击表头循环 升序 → 降序 → 取消（非受控内部排序）","en-US":"Column sorting: clicking the header cycles ascending → descending → cleared (uncontrolled internal sorting)"},{"zh-CN":"columns[].render(record, index) 自定义单元格内容（返回字符串）","en-US":"columns[].render(record, index) customizes cell content (returns a string)"},{"zh-CN":"rowSelection 行选择：全选 / 半选联动、受控 selectedRowKeys、getCheckboxDisabled 禁用行","en-US":"rowSelection row selection: linked select-all / indeterminate states, controlled selectedRowKeys, and getCheckboxDisabled for disabled rows"},{"zh-CN":"virtual 虚拟滚动：1000+ 行仅渲染可视窗口，height / rowHeight 控制视口与行高","en-US":"virtual scrolling: 1000+ rows render only the visible window; height / rowHeight control the viewport and row height"},{"zh-CN":"onRowClick 行点击事件；className / style 自定义透传（支持 CSS 变量）","en-US":"onRowClick row-click event; className / style pass-through customization (CSS variables supported)"},{"zh-CN":"stripe 斑马纹 / border 边框模式；空数据态支持插槽 / 回调覆盖","en-US":"stripe zebra striping / border mode; the empty state can be overridden via slot / render callback"}],scenarios:[{"zh-CN":"列表页、详情面板、后台管理等结构化数据的展示场景。","en-US":"Displaying structured data in list pages, detail panels, admin consoles, and more."},{"zh-CN":"大数据量表格浏览场景（配合 virtual 虚拟滚动，仅渲染可视窗口）。","en-US":"Browsing large datasets (with virtual scrolling rendering only the visible window)."},{"zh-CN":"需要勾选批量操作的列表场景（配合 rowSelection 行选择）。","en-US":"Lists that need batch operations on checked rows (with rowSelection)."}],demos:[{id:"basic",title:{"zh-CN":"基础表格","en-US":"Basic Table"},description:{"zh-CN":'列宽、对齐、斑马纹、边框与可排序列；点击"年龄"表头体验排序循环。',"en-US":'Column width, alignment, zebra striping, borders, and sortable columns; click the "Age" header to try the sort cycle.'},vueComponent:W$,reactComponent:iE,vueSource:rE,reactSource:dE},{id:"custom",title:{"zh-CN":"自定义单元格与空态","en-US":"Custom Cells & Empty State"},description:{"zh-CN":"render 返回自定义文本；无数据时通过插槽 / renderEmpty 渲染自定义空态。","en-US":"render returns custom text; when there is no data, use the slot / renderEmpty to render a custom empty state."},vueComponent:tE,reactComponent:oE,vueSource:uE,reactSource:mE},{id:"virtual",title:{"zh-CN":"虚拟滚动与行选择","en-US":"Virtual Scrolling & Row Selection"},description:{"zh-CN":"1000 行数据仅渲染可视窗口，滚动流畅；配合 rowSelection 勾选行，滚动时勾选状态保持。","en-US":"Only the visible window of 1000 rows is rendered for smooth scrolling; with rowSelection, checked state is preserved while scrolling."},vueComponent:lE,reactComponent:sE,vueSource:cE,reactSource:pE}],api:{props:[{name:"columns",type:"TableColumn[]",default:"—",description:{"zh-CN":"列定义数组（必填）","en-US":"Column definitions (required)"},required:!0},{name:"dataSource",type:"TableRow[]",default:"—",description:{"zh-CN":"行数据数组（必填）","en-US":"Row data array (required)"},required:!0},{name:"rowKey",type:"string",default:"—",description:{"zh-CN":"行唯一键字段名（缺省用行下标；行选择建议提供）","en-US":"Field name of the unique row key (falls back to row index; recommended for row selection)"}},{name:"stripe",type:"boolean",default:"false",description:{"zh-CN":"斑马纹","en-US":"Zebra striping"}},{name:"border",type:"boolean",default:"false",description:{"zh-CN":"边框模式","en-US":"Border mode"}},{name:"virtual",type:"boolean",default:"false",description:{"zh-CN":"虚拟滚动模式（需提供 rowKey；建议同时设置 height 与 rowHeight）","en-US":"Virtual scrolling mode (requires rowKey; setting height and rowHeight is recommended)"}},{name:"height",type:"number | string",default:"—",description:{"zh-CN":"表格主体固定高度（px）","en-US":"Fixed height of the table body (px)"}},{name:"rowHeight",type:"number",default:"40",description:{"zh-CN":"虚拟模式行高（px，须与实际行高一致）","en-US":"Row height in virtual mode (px; must match the actual row height)"}},{name:"rowSelection",type:"TableRowSelection",default:"—",description:{"zh-CN":"行选择配置：selectedRowKeys（受控）/ onChange / getCheckboxDisabled","en-US":"Row selection config: selectedRowKeys (controlled) / onChange / getCheckboxDisabled"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式（支持 CSS 变量如 --xui-table-row-height）","en-US":"Inline styles appended to the root element (CSS variables such as --xui-table-row-height supported)"}},{name:"onSortChange",type:"(sort: TableSort) => void",default:"—",description:{"zh-CN":"排序变更回调","en-US":"Callback fired when sorting changes"}},{name:"onRowClick",type:"(record: TableRow, index: number) => void",default:"—",description:{"zh-CN":"行点击回调（选择列点击不触发）","en-US":"Row-click callback (clicks on the selection column do not trigger it)"}}],events:[{vue:"sortChange",react:"onSortChange",payload:"TableSort",description:{"zh-CN":"点击表头排序时触发","en-US":"Fired when a header click changes the sorting"}},{vue:"rowClick",react:"onRowClick",payload:"record: TableRow, index: number",description:{"zh-CN":"点击数据行时触发（选择列点击不冒泡）","en-US":"Fired when a data row is clicked (clicks on the selection column do not bubble)"}}],slots:[{vue:"sortIcon",react:"renderSortIcon",description:{"zh-CN":"自定义排序图标（作用域参数 order: 'asc' | 'desc'）","en-US":"Custom sort icon (scoped param order: 'asc' | 'desc')"}},{vue:"empty",react:"renderEmpty",description:{"zh-CN":'空数据内容（覆盖默认语言包 table.empty，zh-CN："暂无数据"）',"en-US":'Empty-data content (overrides the default locale entry table.empty, zh-CN: "暂无数据")'}}],types:[{name:"TableColumn",definition:`type TableColumn = {
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
};`,description:{"zh-CN":"行选择配置。提供 selectedRowKeys 即受控（内部状态不变，仅回调）；未全选含半选时点击全选选中全部可选行。","en-US":"Row selection config. Providing selectedRowKeys makes it controlled (internal state stays unchanged; callbacks only). When not all rows are selected (including the indeterminate state), clicking select-all selects every selectable row."}},{name:"TableRowKey",definition:"type TableRowKey = string | number;",description:{"zh-CN":"行唯一键（rowKey 字段取值）。","en-US":"Unique row key (value of the rowKey field)."}}]},notes:[{"zh-CN":"非受控排序：排序状态由组件内部维护，外部仅通过 sortChange 感知，不修改传入的原数组。","en-US":"Uncontrolled sorting: sort state is maintained internally; the outside only observes it via sortChange, and the original array passed in is never mutated."},{"zh-CN":"排序比较：同为 number 按数值比较，否则按字符串（码点序）稳定排序。","en-US":"Sort comparison: two numbers compare numerically; otherwise values are stably sorted as strings (by code point)."},{"zh-CN":"render 返回值仅支持字符串；单元格取值为 null / undefined 时显示为空字符串。","en-US":"render only supports returning strings; a cell value of null / undefined renders as an empty string."},{"zh-CN":"虚拟模式采用固定行高 + spacer 占位方案，保持原生 table 语义；行高必须与 rowHeight 一致。","en-US":"Virtual mode uses fixed row height plus a spacer placeholder while keeping native table semantics; the actual row height must match rowHeight."},{"zh-CN":"行选择未提供 selectedRowKeys 时为非受控（内部维护）；禁用行（getCheckboxDisabled）不参与全选。","en-US":"Row selection is uncontrolled (internally maintained) without selectedRowKeys; disabled rows (getCheckboxDisabled) are excluded from select-all."}],a11y:[{"zh-CN":"可排序列表头携带 aria-sort（ascending / descending），未排序时省略。","en-US":"Sortable column headers carry aria-sort (ascending / descending), omitted when unsorted."},{"zh-CN":'表头使用 scope="col" 与数据行关联；全选框同步 indeterminate 半选语义。',"en-US":'Headers use scope="col" to associate with data rows; the select-all checkbox syncs the indeterminate semantics.'}]},hE={class:"demo-row"},vE=D({__name:"basic",setup(e){return(t,n)=>(g(),x("div",hE,[z(r(W),{onClick:n[0]||(n[0]=a=>r(Ln).info(r(U)()?"这是一条普通提示":"A normal info message."))},{default:E(()=>[...n[4]||(n[4]=[G("Info",-1)])]),_:1}),z(r(W),{type:"primary",onClick:n[1]||(n[1]=a=>r(Ln).success(r(U)()?"保存成功":"Saved successfully"))},{default:E(()=>[...n[5]||(n[5]=[G(" Success ",-1)])]),_:1}),z(r(W),{onClick:n[2]||(n[2]=a=>r(Ln).warning(r(U)()?"磁盘空间不足":"Insufficient disk space"))},{default:E(()=>[...n[6]||(n[6]=[G(" Warning ",-1)])]),_:1}),z(r(W),{onClick:n[3]||(n[3]=a=>r(Ln).error(r(U)()?"保存失败，请重试":"Save failed, please retry"))},{default:E(()=>[...n[7]||(n[7]=[G(" Error ",-1)])]),_:1})]))}}),gE={class:"demo-row"},bE=D({__name:"options",setup(e){const t=()=>{Ln.open({content:U()?"这条消息不会自动关闭，可手动关闭":"This message will not auto-close, close it manually",duration:0,closable:!0})};return(n,a)=>(g(),x("div",gE,[z(r(W),{type:"primary",onClick:t},{default:E(()=>[G($(r(U)()?"不自动关闭":"No auto-close"),1)]),_:1}),z(r(W),{onClick:a[0]||(a[0]=l=>r(Ln).closeAll())},{default:E(()=>[G($(r(U)()?"关闭全部":"Close all"),1)]),_:1})]))}}),yE={class:"demo-column"},SE={class:"demo-row"},xE={class:"demo-text"},_E=D({__name:"update",setup(e){let t=0;const n=F(!1),a=()=>{t=0,n.value=!1,Ln.open({content:U()?`上传中 ${t}%`:`Uploading ${t}%`,key:"upload",duration:0})},l=()=>{t=Math.min(t+25,100),t<100?Ln.open({content:U()?`上传中 ${t}%`:`Uploading ${t}%`,key:"upload",duration:0}):Ln.open({content:U()?"上传完成":"Upload complete",key:"upload",type:"success",duration:3e3,onClose:()=>{n.value=!0}})};return(i,o)=>(g(),x("div",yE,[N("div",SE,[z(r(W),{type:"primary",onClick:a},{default:E(()=>[G($(r(U)()?"开始上传":"Start upload"),1)]),_:1}),z(r(W),{onClick:l},{default:E(()=>[G($(r(U)()?"推进进度":"Advance progress"),1)]),_:1})]),N("p",xE,$(r(U)()?"同 key 反复 open 原地刷新进度（不堆叠消息）；完成后自动关闭并触发 onClose（已触发：":"Repeatedly open with the same key to refresh progress in place (no message stacking); auto-closes when done and triggers onClose (triggered: ")+$(n.value?r(U)()?"是":"yes":r(U)()?"否":"no")+") ",1)]))}});function CE(){const e=se();return c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{onClick:()=>In.info(e?"这是一条普通提示":"A normal info message."),children:"Info"}),c.jsx(ee,{type:"primary",onClick:()=>In.success(e?"保存成功":"Saved successfully"),children:"Success"}),c.jsx(ee,{onClick:()=>In.warning(e?"磁盘空间不足":"Insufficient disk space"),children:"Warning"}),c.jsx(ee,{onClick:()=>In.error(e?"保存失败，请重试":"Save failed, please retry"),children:"Error"})]})}function kE(){const e=se(),t=()=>{In.open({content:e?"这条消息不会自动关闭，可手动关闭":"This message will not auto-close, close it manually",duration:0,closable:!0})};return c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{type:"primary",onClick:t,children:e?"不自动关闭":"No auto-close"}),c.jsx(ee,{onClick:()=>In.closeAll(),children:e?"关闭全部":"Close all"})]})}function NE(){const e=se(),[t,n]=B.useState(!1),a=B.useRef(0),l=()=>{a.current=0,n(!1),In.open({content:e?"上传中 0%":"Uploading 0%",key:"upload",duration:0})},i=()=>{a.current=Math.min(a.current+25,100);const o=a.current;o<100?In.open({content:e?`上传中 ${o}%`:`Uploading ${o}%`,key:"upload",duration:0}):In.open({content:e?"上传完成":"Upload complete",key:"upload",type:"success",duration:3e3,onClose:()=>n(!0)})};return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{type:"primary",onClick:l,children:e?"开始上传":"Start upload"}),c.jsx(ee,{onClick:i,children:e?"推进进度":"Advance progress"})]}),c.jsxs("p",{className:"demo-text",children:[e?"同 key 反复 open 原地刷新进度（不堆叠消息）；完成后自动关闭并触发 onClose（已触发：":"Repeatedly open with the same key to refresh progress in place (no message stacking); auto-closes when done and triggers onClose (triggered: ",t?e?"是":"yes":e?"否":"no",")"]})]})}const wE=`<script setup lang="ts">
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
`,TE=`<script setup lang="ts">
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
`,zE=`<script setup lang="ts">
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
`,UE=`import { Button, message } from '@xui-design/react';
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
`,$E=`import { Button, message } from '@xui-design/react';
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
`,EE=`import { useRef, useState } from 'react';
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
`,RE={name:"Message",slug:"message",title:"全局提示",category:"feedback",summary:{"zh-CN":"命令式全局轻提示，双端同构 API，首次调用自动挂载容器，无需预置组件。","en-US":"Imperative global toast with an isomorphic API across frameworks; the container mounts automatically on first call, no host component needed."},features:[{"zh-CN":"命令式 API：info / success / warning / error / open / closeAll，双端同构","en-US":"Imperative API: info / success / warning / error / open / closeAll, isomorphic across frameworks"},{"zh-CN":"4 种语义类型，各配图标与色板，3s 自动关闭（duration 可配，0 为常驻）","en-US":"Four semantic types with matching icons and palettes; auto-closes after 3s (duration configurable, 0 keeps it open)"},{"zh-CN":"closable 手动关闭；open 返回 { close } 句柄，重复关闭幂等","en-US":"closable enables manual close; open returns a { close } handle and repeated closes are idempotent"},{"zh-CN":"maxCount（默认 5）同屏上限，超限自动移除最早一条","en-US":"maxCount (default 5) caps on-screen messages; the oldest is removed when exceeded"},{"zh-CN":"key 更新语义：相同 key 再次 open 原地更新该条（不新增、重置计时），适合进度类反馈","en-US":"key-based updates: calling open again with the same key updates that message in place (no new entry, timer resets), ideal for progress feedback"},{"zh-CN":"onClose 回调：消息被移除（自动 / 手动 / 挤出 / closeAll）时触发","en-US":"onClose fires whenever a message is removed (auto / manual / evicted / closeAll)"},{"zh-CN":"首次调用惰性挂载全局容器（页面顶部居中 fixed），应用中无需声明任何宿主组件","en-US":"The global container mounts lazily on first call (fixed, top-center); no host component needs to be declared"}],scenarios:[{"zh-CN":"保存成功、请求失败、复制完成等不打断操作流程的轻量全局反馈。","en-US":"Lightweight global feedback that does not interrupt the flow, such as save success, request failure, or copy completion."},{"zh-CN":"上传 / 导出等耗时任务的进度反馈（配合 key 更新语义，始终只有一条消息）。","en-US":"Progress feedback for long tasks like upload / export (with key-based updates, always a single message)."}],demos:[{id:"basic",title:{"zh-CN":"四种语义类型","en-US":"Four Semantic Types"},description:{"zh-CN":"直接从框架包导入 message 单例调用，容器首次调用时自动挂载。","en-US":"Import the message singleton from the framework package and call it directly; the container mounts on first call."},vueComponent:vE,reactComponent:CE,vueSource:wE,reactSource:UE},{id:"options",title:{"zh-CN":"常驻与关闭全部","en-US":"Persistent & Close All"},description:{"zh-CN":"duration: 0 时不自动关闭；closeAll 清空当前所有消息及其定时器。","en-US":"duration: 0 disables auto-close; closeAll clears all current messages and their timers."},vueComponent:bE,reactComponent:kE,vueSource:TE,reactSource:$E},{id:"update",title:{"zh-CN":"key 更新与 onClose","en-US":"key Updates & onClose"},description:{"zh-CN":"同 key 反复 open 原地刷新进度；消息关闭时触发 onClose 回调。","en-US":"Repeated open calls with the same key refresh progress in place; onClose fires when the message closes."},vueComponent:_E,reactComponent:NE,vueSource:zE,reactSource:EE}],api:{methods:[{name:"message.info",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 info 消息","en-US":"Open an info message"}},{name:"message.success",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 success 消息","en-US":"Open a success message"}},{name:"message.warning",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 warning 消息","en-US":"Open a warning message"}},{name:"message.error",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 error 消息","en-US":"Open an error message"}},{name:"message.open",signature:"(options: MessageOptions) => MessageHandle",description:{"zh-CN":"按完整选项打开消息（支持 key / onClose）","en-US":"Open a message with full options (supports key / onClose)"}},{name:"message.closeAll",signature:"() => void",description:{"zh-CN":"关闭全部消息","en-US":"Close all messages"}}],types:[{name:"MessageOptions",definition:`type MessageOptions = {
  type?: 'info' | 'success' | 'warning' | 'error'; // 默认 'info'
  content: string;        // 必填
  duration?: number;      // 默认 3000，0 表示不自动关闭
  closable?: boolean;     // 默认 false
  icon?: string;          // 自定义类型图标（内层 SVG 标记，与 @xui-design/icons 数据源同构）
  key?: string | number;  // 更新键：同 key 再次 open 原地更新该条
  onClose?: () => void;   // 消息移除回调
};`,description:{"zh-CN":"open 的完整参数；快捷方法的第二参仅支持 duration / closable（type 与 content 由方法注入，key / onClose 需走 message.open）。","en-US":"Full options for open; shortcut methods only accept duration / closable as the second argument (type and content are injected by the method; key / onClose require message.open)."}},{name:"MessageHandle",definition:`type MessageHandle = {
  close: () => void;
};`,description:{"zh-CN":"open / 快捷方法返回的句柄，close() 手动关闭且幂等。","en-US":"Handle returned by open / shortcut methods; close() closes manually and is idempotent."}}]},notes:[{"zh-CN":"Message 是命令式 API 而非声明式组件：双端均未导出 Message 组件，也不进 contract-test 声明式校验矩阵。","en-US":"Message is an imperative API, not a declarative component: neither framework exports a Message component, and it is excluded from the declarative contract-test matrix."},{"zh-CN":"Vue 与 React 各自导出独立的 message 单例（@xui-design/vue / @xui-design/react），在对应框架入口直接调用即可。","en-US":"Vue and React each export their own message singleton (@xui-design/vue / @xui-design/react); call it directly from the corresponding framework entry."},{"zh-CN":"maxCount 超限时连带移除最早消息的自动关闭定时器；closeAll 同时清空全部定时器。","en-US":"When maxCount is exceeded, the oldest message is removed along with its auto-close timer; closeAll clears all timers."},{"zh-CN":"key 更新：content 必填刷新，type / closable 未传保留原值；duration 以最新值重置计时，onClose 传入时替换旧回调。","en-US":"key updates: content is required and always refreshed; type / closable keep their previous values when omitted; duration resets the timer with the latest value; onClose replaces the old callback when provided."},{"zh-CN":"onClose 触发时机统一：自动关闭 / 手动关闭 / maxCount 挤出 / closeAll 均触发。","en-US":"onClose fires consistently for auto-close / manual close / maxCount eviction / closeAll."},{"zh-CN":"icon 选项传内层 SVG 标记（不含 <svg> 壳，如 icons.close 的值），渲染时替换按 type 的内置图标。","en-US":"The icon option takes inner SVG markup (without the <svg> wrapper, e.g. the value of icons.close), replacing the built-in type icon at render."}],a11y:[{"zh-CN":'消息容器 aria-live="polite"，新消息出现时读屏播报但不打断当前朗读；关闭按钮携带 aria-label。',"en-US":'The message container uses aria-live="polite" so screen readers announce new messages without interrupting the current reading; the close button carries an aria-label.'}]},AE={class:"demo-column"},OE={class:"demo-text"},BE=D({__name:"basic",setup(e){const t=F("");return(n,a)=>(g(),x("div",AE,[z(r(st),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),placeholder:r(U)()?"输入点内容...":"Type something...",clearable:""},null,8,["value","placeholder"]),N("p",OE,$(r(U)()?"当前值：":"Current: ")+$(t.value||(r(U)()?"（空）":"(empty)")),1)]))}}),ZE={class:"demo-column"},jE=D({__name:"state",setup(e){return(t,n)=>(g(),x("div",ZE,[z(r(st),{value:r(U)()?"禁用态":"Disabled",disabled:""},null,8,["value"]),z(r(st),{value:r(U)()?"只读态":"Read-only",readonly:""},null,8,["value"]),z(r(st),{placeholder:r(U)()?"带前缀内容":"With prefix"},{prefix:E(()=>[...n[0]||(n[0]=[G("🔍",-1)])]),_:1},8,["placeholder"])]))}});function ME(){const e=se(),[t,n]=B.useState("");return c.jsxs("div",{className:"demo-column",children:[c.jsx(ut,{value:t,onInput:n,placeholder:e?"输入点内容...":"Type something...",clearable:!0}),c.jsxs("p",{className:"demo-text",children:[e?"当前值：":"Current: ",t||(e?"（空）":"(empty)")]})]})}function DE(){const e=se();return c.jsxs("div",{className:"demo-column",children:[c.jsx(ut,{value:e?"禁用态":"Disabled",disabled:!0}),c.jsx(ut,{value:e?"只读态":"Read-only",readonly:!0}),c.jsx(ut,{placeholder:e?"带前缀内容":"With prefix",renderPrefix:()=>c.jsx("span",{children:"🔍"})})]})}const LE=`<script setup lang="ts">
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
`,VE=`<script setup lang="ts">
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
`,HE=`import { useState } from 'react';
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
`,IE=`import { Input } from '@xui-design/react';
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
`,FE={name:"Input",slug:"input",title:"输入框",category:"basic",summary:{"zh-CN":"基础文本输入框，支持受控 / 非受控、清除按钮、前后缀与多种原生类型。","en-US":"A basic text input with controlled / uncontrolled modes, a clear button, prefix / suffix, and multiple native types."},features:[{"zh-CN":"受控 / 非受控双模式（提供 value 即受控），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes (controlled when value is provided); v-model:value on Vue"},{"zh-CN":"支持 text / password / number / email / search / tel / url 原生类型","en-US":"Supports native types: text / password / number / email / search / tel / url"},{"zh-CN":"disabled 禁用、readonly 只读、maxLength 最大长度","en-US":"Disabled state, read-only state, and maxLength limit"},{"zh-CN":"clearable 显示清除按钮；prefix / suffix 前后缀内容可定制","en-US":"Clear button via clearable; customizable prefix / suffix content"},{"zh-CN":"通过 ref 暴露 focus() 命令式聚焦","en-US":"Imperative focus() exposed via ref"}],scenarios:[{"zh-CN":"表单文本录入、搜索框、带图标的复合输入等场景。","en-US":"Form text entry, search boxes, composite inputs with icons, and similar scenarios."}],demos:[{id:"basic",title:{"zh-CN":"受控用法","en-US":"Controlled Usage"},description:{"zh-CN":"绑定 value 同步外部状态，clearable 提供一键清空。","en-US":"Bind value to sync external state; clearable offers one-click clearing."},vueComponent:BE,reactComponent:ME,vueSource:LE,reactSource:HE},{id:"state",title:{"zh-CN":"禁用 / 只读 / 前缀","en-US":"Disabled / Readonly / Prefix"},description:{"zh-CN":"禁用与只读均透传原生属性；prefix 插槽可放置图标等前置内容。","en-US":"Disabled and readonly pass through to native attributes; the prefix slot holds leading content such as icons."},vueComponent:jE,reactComponent:DE,vueSource:VE,reactSource:IE}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控值（提供即受控）","en-US":"Controlled value (controlled when provided)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始值","en-US":"Uncontrolled initial value"}},{name:"type",type:"'text' | 'password' | 'number' | 'email' | 'search' | 'tel' | 'url'",default:"'text'",description:{"zh-CN":"原生 input 类型","en-US":"Native input type"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文本","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"readonly",type:"boolean",default:"false",description:{"zh-CN":"只读状态（双端 prop 同名，内部映射 DOM readOnly）","en-US":"Read-only state (same prop name on both frameworks; mapped to DOM readOnly)"}},{name:"maxLength",type:"number",default:"—",description:{"zh-CN":"最大输入长度","en-US":"Maximum input length"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清除图标","en-US":"Whether to show the clear icon"}},{name:"onInput",type:"(value: string) => void",default:"—",description:{"zh-CN":"输入回调（每次键入）","en-US":"Input callback (on every keystroke)"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"值变更提交回调（失焦或回车）","en-US":"Value commit callback (on blur or Enter)"}},{name:"onFocus",type:"(event: FocusEvent) => void",default:"—",description:{"zh-CN":"聚焦回调","en-US":"Focus callback"}},{name:"onBlur",type:"(event: FocusEvent) => void",default:"—",description:{"zh-CN":"失焦回调","en-US":"Blur callback"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调（点击清除图标）","en-US":"Clear callback (fired when the clear icon is clicked)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"input",react:"onInput",payload:"string",description:{"zh-CN":"每次键入触发","en-US":"Fired on every keystroke"}},{vue:"change",react:"onChange",payload:"string",description:{"zh-CN":"失焦或回车提交时触发","en-US":"Fired when the value is committed on blur or Enter"}},{vue:"focus",react:"onFocus",payload:"FocusEvent",description:{"zh-CN":"获得焦点","en-US":"Fired on focus"}},{vue:"blur",react:"onBlur",payload:"FocusEvent",description:{"zh-CN":"失去焦点","en-US":"Fired on blur"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"点击清除图标","en-US":"Fired when the clear icon is clicked"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"prefix",react:"renderPrefix",description:{"zh-CN":"前置内容（如图标）","en-US":"Leading content (e.g. an icon)"}},{vue:"suffix",react:"renderSuffix",description:{"zh-CN":"后置内容","en-US":"Trailing content"}},{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标（clearable 模式）","en-US":"Custom clear icon (in clearable mode)"}}]},notes:[{"zh-CN":"input 事件在每次键入时触发；change 事件在失焦或回车时触发，二者语义不同，注意按需监听。","en-US":"The input event fires on every keystroke, while change fires on blur or Enter; they have different semantics, so listen as needed."},{"zh-CN":"readonly 允许聚焦与复制但不可编辑，disabled 完全不可交互且不会随表单提交。","en-US":"readonly allows focus and copying but not editing; disabled blocks all interaction and is excluded from form submission."}],a11y:[{"zh-CN":"渲染为原生 <input>，disabled / readonly 透传原生属性，保留原生焦点与键盘输入行为。","en-US":"Renders as a native <input> with disabled / readonly passed through, preserving native focus and keyboard input behavior."}]},qE={class:"demo-column"},GE=D({__name:"basic",setup(e){const t=F(!1);return(n,a)=>(g(),x("div",qE,[z(r(W),{type:"primary",onClick:a[0]||(a[0]=l=>t.value=!0)},{default:E(()=>[G($(r(U)()?"打开对话框":"Open modal"),1)]),_:1}),z(r(Ao),{visible:t.value,"onUpdate:visible":a[3]||(a[3]=l=>t.value=l),title:r(U)()?"操作确认":"Confirm action",onOk:a[4]||(a[4]=l=>t.value=!1),onCancel:a[5]||(a[5]=l=>t.value=!1)},{footer:E(()=>[z(r(W),{onClick:a[1]||(a[1]=l=>t.value=!1)},{default:E(()=>[G($(r(U)()?"取消":"Cancel"),1)]),_:1}),z(r(W),{type:"primary",onClick:a[2]||(a[2]=l=>t.value=!1)},{default:E(()=>[G($(r(U)()?"确认":"Confirm"),1)]),_:1})]),default:E(()=>[N("p",null,$(r(U)()?"这是一段对话框内容，确认后将执行对应操作。":"Modal body text. Confirm to proceed with the action."),1)]),_:1},8,["visible","title"])]))}}),YE={class:"demo-column"},PE=D({__name:"custom",setup(e){const t=F(!1);return(n,a)=>(g(),x("div",YE,[z(r(W),{type:"primary",onClick:a[0]||(a[0]=l=>t.value=!0)},{default:E(()=>[G($(r(U)()?"打开对话框":"Open modal"),1)]),_:1}),z(r(Ao),{visible:t.value,"onUpdate:visible":a[1]||(a[1]=l=>t.value=l),title:r(U)()?"删除确认":"Delete confirmation","ok-text":r(U)()?"确认删除":"Confirm delete","cancel-text":r(U)()?"再想想":"Maybe later",onOk:a[2]||(a[2]=l=>t.value=!1),onCancel:a[3]||(a[3]=l=>t.value=!1)},{default:E(()=>[N("p",null,$(r(U)()?"删除后不可恢复，请谨慎操作。底部按钮文案由 okText / cancelText 自定义。":"Deletion is irreversible, proceed with caution. Footer button text is customized via okText / cancelText."),1)]),_:1},8,["visible","title","ok-text","cancel-text"])]))}}),KE={class:"demo-column"},XE=D({__name:"ref",setup(e){const t=F(null);return(n,a)=>(g(),x("div",KE,[z(r(W),{onClick:a[0]||(a[0]=l=>{var i;return(i=t.value)==null?void 0:i.open()})},{default:E(()=>[G($(r(U)()?"通过 ref 打开":"Open via ref"),1)]),_:1}),z(r(Ao),{ref_key:"modalRef",ref:t,title:r(U)()?"命令式控制":"Imperative control",width:"420px"},{default:E(()=>[N("p",null,$(r(U)()?"不需要维护 visible 状态，直接调用实例方法 open() / close()。":"No need to manage visible state manually; call instance methods open() / close() directly."),1)]),_:1},8,["title"])]))}});function QE(){const e=se(),[t,n]=B.useState(!1),a=()=>n(!1);return c.jsxs("div",{className:"demo-column",children:[c.jsx(ee,{type:"primary",onClick:()=>n(!0),children:e?"打开对话框":"Open modal"}),c.jsx(Go,{visible:t,title:e?"操作确认":"Confirm action",onOk:a,onCancel:a,renderFooter:()=>c.jsxs(c.Fragment,{children:[c.jsx(ee,{onClick:a,children:e?"取消":"Cancel"}),c.jsx(ee,{type:"primary",onClick:a,children:e?"确认":"Confirm"})]}),children:c.jsx("p",{children:e?"这是一段对话框内容，确认后将执行对应操作。":"Modal body text. Confirm to proceed with the action."})})]})}function JE(){const e=se(),[t,n]=B.useState(!1);return c.jsxs("div",{className:"demo-column",children:[c.jsx(ee,{type:"primary",onClick:()=>n(!0),children:e?"打开对话框":"Open modal"}),c.jsx(Go,{visible:t,title:e?"删除确认":"Delete confirmation",okText:e?"确认删除":"Confirm delete",cancelText:e?"再想想":"Maybe later",onOk:()=>n(!1),onCancel:()=>n(!1),children:c.jsx("p",{children:e?"删除后不可恢复，请谨慎操作。底部按钮文案由 okText / cancelText 自定义。":"Deletion is irreversible, proceed with caution. Footer button text is customized via okText / cancelText."})})]})}function WE(){const e=se(),t=B.useRef(null);return c.jsxs("div",{className:"demo-column",children:[c.jsx(ee,{onClick:()=>{var n;return(n=t.current)==null?void 0:n.open()},children:e?"通过 ref 打开":"Open via ref"}),c.jsx(Go,{ref:t,title:e?"命令式控制":"Imperative control",width:"420px",children:c.jsx("p",{children:e?"不需要维护 visible 状态，直接调用实例方法 open() / close()。":"No need to manage visible state manually; call instance methods open() / close() directly."})})]})}const eR=`<script setup lang="ts">
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
`,tR=`<script setup lang="ts">
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
`,nR=`<script setup lang="ts">
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
`,aR=`import { useState } from 'react';
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
`,lR=`import { useState } from 'react';
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
`,iR=`import { useRef } from 'react';
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
`,oR={name:"Modal",slug:"modal",title:"对话框",category:"basic",summary:{"zh-CN":"模态对话框，承载需要用户明确处理的信息或操作；支持焦点陷阱 / 焦点恢复、自定义底部文案与受控、ref 命令式两种用法。","en-US":"A modal dialog for information or actions that require explicit handling, with focus trap / focus restore, customizable footer text, and both controlled and ref-based imperative usage."},features:[{"zh-CN":"受控 visible / 非受控 defaultVisible，Vue 端支持 v-model:visible","en-US":"Controlled visible or uncontrolled defaultVisible; v-model:visible on Vue"},{"zh-CN":"title 标题、width 自定义宽度（数字按 px，字符串原样输出）","en-US":"Title and custom width (numbers are treated as px; strings are applied as-is)"},{"zh-CN":"closable 关闭按钮、maskClosable 遮罩点击关闭、closeOnEsc ESC 关闭","en-US":"Close button via closable, mask click to close via maskClosable, and ESC to close via closeOnEsc"},{"zh-CN":"焦点陷阱：打开期间 Tab 循环约束在弹窗内（trapFocus 可关闭）；关闭后焦点恢复到打开前元素","en-US":"Focus trap: Tab cycles within the dialog while open (can be disabled with trapFocus); focus returns to the pre-open element after close"},{"zh-CN":"okText / cancelText 自定义默认底部按钮文案（未提供时取全局语言包，zh-CN 默认 确认 / 取消）","en-US":"Custom default footer button text via okText / cancelText (falls back to the global locale; zh-CN defaults to 确认 / 取消)"},{"zh-CN":"default / title / footer 三个插槽（React 对应 children / renderTitle / renderFooter）","en-US":"Three slots: default / title / footer (children / renderTitle / renderFooter in React)"},{"zh-CN":"通过 ref 暴露 open() / close() 命令式方法（类型 ModalRef）","en-US":"Imperative open() / close() methods exposed via ref (type ModalRef)"}],scenarios:[{"zh-CN":"操作确认、表单编辑、详情展示等需要打断主流程并聚焦用户注意力的场景。","en-US":"Confirmations, form editing, detail views, and other scenarios that interrupt the main flow to focus user attention."}],demos:[{id:"basic",title:{"zh-CN":"受控对话框","en-US":"Controlled Dialog"},description:{"zh-CN":"外部维护 visible 状态，footer 插槽自定义底部按钮。","en-US":"Maintain visible externally; customize footer buttons via the footer slot."},vueComponent:GE,reactComponent:QE,vueSource:eR,reactSource:aR},{id:"custom",title:{"zh-CN":"自定义按钮文案","en-US":"Custom Button Text"},description:{"zh-CN":"okText / cancelText 定制底部文案；ESC、遮罩、关闭按钮均可退出。","en-US":"Customize footer text with okText / cancelText; ESC, mask click, and the close button all dismiss the dialog."},vueComponent:PE,reactComponent:JE,vueSource:tR,reactSource:lR},{id:"ref",title:{"zh-CN":"ref 命令式打开","en-US":"Imperative Open via ref"},description:{"zh-CN":"无需维护 visible，直接调用实例 open() / close()。","en-US":"No need to maintain visible; call open() / close() on the instance directly."},vueComponent:XE,reactComponent:WE,vueSource:nR,reactSource:iR}],api:{props:[{name:"visible",type:"boolean",default:"—",description:{"zh-CN":"受控可见性","en-US":"Controlled visibility"}},{name:"defaultVisible",type:"boolean",default:"false",description:{"zh-CN":"非受控初始可见性","en-US":"Uncontrolled initial visibility"}},{name:"title",type:"string",default:"—",description:{"zh-CN":"标题","en-US":"Dialog title"}},{name:"width",type:"number | string",default:"520",description:{"zh-CN":"宽度（数字按 px，字符串原样输出）","en-US":"Dialog width (numbers are treated as px; strings are applied as-is)"}},{name:"closable",type:"boolean",default:"true",description:{"zh-CN":"是否显示右上角关闭按钮","en-US":"Whether to show the close button in the top-right corner"}},{name:"maskClosable",type:"boolean",default:"true",description:{"zh-CN":"点击遮罩是否关闭","en-US":"Whether clicking the mask closes the dialog"}},{name:"closeOnEsc",type:"boolean",default:"true",description:{"zh-CN":"按 ESC 是否关闭","en-US":"Whether pressing ESC closes the dialog"}},{name:"okText",type:"string",default:"—",description:{"zh-CN":"确认按钮文案；未提供时取全局语言包（zh-CN：确认 / en-US：OK）","en-US":"OK button text; falls back to the global locale (zh-CN: 确认 / en-US: OK)"}},{name:"cancelText",type:"string",default:"—",description:{"zh-CN":"取消按钮文案；未提供时取全局语言包（zh-CN：取消 / en-US：Cancel）","en-US":"Cancel button text; falls back to the global locale (zh-CN: 取消 / en-US: Cancel)"}},{name:"trapFocus",type:"boolean",default:"true",description:{"zh-CN":"打开期间 Tab 焦点是否循环约束在弹窗内","en-US":"Whether Tab focus cycles within the dialog while open"}},{name:"onOpen",type:"() => void",default:"—",description:{"zh-CN":"打开回调","en-US":"Open callback"}},{name:"onClose",type:"() => void",default:"—",description:{"zh-CN":"关闭回调","en-US":"Close callback"}},{name:"onOk",type:"() => void",default:"—",description:{"zh-CN":"确认回调（触发后自动关闭）","en-US":"OK callback (the dialog closes automatically afterwards)"}},{name:"onCancel",type:"() => void",default:"—",description:{"zh-CN":"取消回调（触发后自动关闭）","en-US":"Cancel callback (the dialog closes automatically afterwards)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到对话框面板的自定义类名","en-US":"Custom class name appended to the dialog panel"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到对话框面板的自定义样式","en-US":"Custom styles appended to the dialog panel"}}],events:[{vue:"open",react:"onOpen",payload:"—",description:{"zh-CN":"对话框打开","en-US":"Fired when the dialog opens"}},{vue:"close",react:"onClose",payload:"—",description:{"zh-CN":"对话框关闭","en-US":"Fired when the dialog closes"}},{vue:"ok",react:"onOk",payload:"—",description:{"zh-CN":"点击确认","en-US":"Fired when OK is clicked"}},{vue:"cancel",react:"onCancel",payload:"—",description:{"zh-CN":"点击取消","en-US":"Fired when Cancel is clicked"}},{vue:"update:visible",react:"—",payload:"boolean",description:{"zh-CN":"v-model:visible 回写","en-US":"Write-back for v-model:visible"}}],slots:[{vue:"closeIcon",react:"renderCloseIcon",description:{"zh-CN":"自定义关闭图标（替换右上角内置 close）","en-US":"Custom close icon (replaces the built-in top-right close)"}},{vue:"default",react:"children",description:{"zh-CN":"弹窗内容","en-US":"Dialog content"}},{vue:"title",react:"renderTitle",description:{"zh-CN":"标题（覆盖 title prop）","en-US":"Title (overrides the title prop)"}},{vue:"footer",react:"renderFooter",description:{"zh-CN":"底部操作区","en-US":"Footer action area"}}]},notes:[{"zh-CN":"onOk / onCancel 触发后组件自动关闭；若使用自定义 footer，需自行调用 close() 或更新 visible。","en-US":"The dialog closes automatically after onOk / onCancel; with a custom footer, call close() or update visible yourself."},{"zh-CN":"ref 实例类型为 ModalRef，提供 open() 与 close() 两个方法。","en-US":"The ref instance is of type ModalRef, providing open() and close() methods."},{"zh-CN":"自定义 footer 插槽时 okText / cancelText 不生效（底部完全由插槽接管）。","en-US":"okText / cancelText have no effect when a custom footer slot is used (the slot fully takes over the footer)."},{"zh-CN":"trapFocus 打开且面板内无可聚焦元素时，焦点锁定在面板自身（tabindex=-1）。","en-US":"With trapFocus enabled and no focusable elements inside, focus is locked on the panel itself (tabindex=-1)."}],a11y:[{"zh-CN":'面板携带 role="dialog" + aria-modal="true"；打开时聚焦面板，Tab / Shift+Tab 循环约束在弹窗内。',"en-US":'The panel carries role="dialog" + aria-modal="true"; it receives focus on open, and Tab / Shift+Tab cycle within the dialog.'},{"zh-CN":"关闭后焦点恢复到打开前的元素，键盘用户不会丢失位置；支持 ESC 关闭（closeOnEsc）。","en-US":"Focus returns to the pre-open element after close so keyboard users keep their place; ESC to close is supported (closeOnEsc)."}]},sR={class:"demo-column"},rR={class:"demo-text"},uR=D({__name:"basic",setup(e){const t=F(!0);return(n,a)=>(g(),x("div",sR,[z(r(Ss),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l)},{default:E(()=>[G($(r(U)()?"我已阅读并同意用户协议":"I have read and agree to the user agreement"),1)]),_:1},8,["value"]),N("p",rR,$(r(U)()?"当前选中":"Selected")+"："+$(r(U)()?t.value?"是":"否":t.value?"Yes":"No"),1)]))}}),cR={class:"demo-column"},dR=D({__name:"state",setup(e){const t=F(!0);return(n,a)=>(g(),x("div",cR,[z(r(Ss),{indeterminate:t.value,"onUpdate:indeterminate":a[0]||(a[0]=l=>t.value=l)},{default:E(()=>[G($(r(U)()?"全选（半选态，点击后变全选）":"Select all (indeterminate, click to select all)"),1)]),_:1},8,["indeterminate"]),z(r(Ss),{value:"",disabled:""},{default:E(()=>[G($(r(U)()?"禁用未选":"Disabled unchecked"),1)]),_:1}),z(r(Ss),{value:!0,disabled:""},{default:E(()=>[G($(r(U)()?"禁用已选":"Disabled checked"),1)]),_:1})]))}});function mR(){const e=se(),[t,n]=B.useState(!0);return c.jsxs("div",{className:"demo-column",children:[c.jsx(_s,{value:t,onChange:n,children:e?"我已阅读并同意用户协议":"I have read and agree to the user agreement"}),c.jsxs("p",{className:"demo-text",children:[e?"当前选中":"Selected","：",e?t?"是":"否":t?"Yes":"No"]})]})}function pR(){const e=se(),[t,n]=B.useState(!0);return c.jsxs("div",{className:"demo-column",children:[c.jsx(_s,{indeterminate:t,onChange:()=>n(!1),children:e?"全选（半选态，点击后变全选）":"Select all (indeterminate, click to select all)"}),c.jsx(_s,{value:!1,disabled:!0,children:e?"禁用未选":"Disabled unchecked"}),c.jsx(_s,{value:!0,disabled:!0,children:e?"禁用已选":"Disabled checked"})]})}const fR=`<script setup lang="ts">
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
`,hR=`<script setup lang="ts">
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
`,vR=`import { useState } from 'react';
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
`,gR=`import { useState } from 'react';
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
`,bR={name:"Checkbox",slug:"checkbox",title:"复选框",category:"form",summary:{"zh-CN":"在一组可选项中进行多选，或单独使用表示两种状态的切换，支持半选态。","en-US":"Select multiple options from a set, or use standalone as a two-state toggle, with indeterminate state support."},features:[{"zh-CN":"受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; v-model:value on Vue"},{"zh-CN":'indeterminate 半选态（常用于"全选"联动，点击后切换为全选）',"en-US":'Indeterminate state via indeterminate (often used for "select all"; clicking switches to fully checked)'},{"zh-CN":"disabled 禁用；label 文案通过默认插槽 / children 传入","en-US":"Disabled state; label text is passed via the default slot / children"}],scenarios:[{"zh-CN":"协议勾选、条件筛选、表格行选择与全选联动等场景。","en-US":"Agreement checkboxes, conditional filtering, table row selection with select-all linkage, and similar scenarios."}],demos:[{id:"basic",title:{"zh-CN":"受控复选框","en-US":"Controlled Checkbox"},description:{"zh-CN":"绑定布尔值，监听 change 获取切换后的选中状态。","en-US":"Bind a boolean and listen to change for the checked state after toggle."},vueComponent:uR,reactComponent:mR,vueSource:fR,reactSource:vR},{id:"state",title:{"zh-CN":"半选态与禁用","en-US":"Indeterminate & Disabled"},description:{"zh-CN":'indeterminate 表示"部分选中"；disabled 下点击无效。',"en-US":'indeterminate means "partially selected"; clicks have no effect when disabled.'},vueComponent:dR,reactComponent:pR,vueSource:hR,reactSource:gR}],api:{props:[{name:"value",type:"boolean",default:"—",description:{"zh-CN":"受控选中状态（提供即受控）","en-US":"Controlled checked state (controlled when provided)"}},{name:"defaultValue",type:"boolean",default:"false",description:{"zh-CN":"非受控初始状态","en-US":"Uncontrolled initial state"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"indeterminate",type:"boolean",default:"false",description:{"zh-CN":"半选状态（点击后切换为全选）","en-US":"Indeterminate state (clicking switches to fully checked)"}},{name:"onChange",type:"(value: boolean) => void",default:"—",description:{"zh-CN":"状态变更回调（载荷为切换后的选中值）","en-US":"State change callback (payload is the checked value after toggle)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: boolean",description:{"zh-CN":"选中状态变更","en-US":"Fired when the checked state changes"}},{vue:"update:value",react:"—",payload:"boolean",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"标签内容","en-US":"Label content"}},{vue:"checkIcon",react:"renderCheckIcon",description:{"zh-CN":"自定义选中勾选图标","en-US":"Custom checked checkmark icon"}},{vue:"indeterminateIcon",react:"renderIndeterminateIcon",description:{"zh-CN":"自定义半选图标","en-US":"Custom indeterminate icon"}}]},notes:[{"zh-CN":'半选（indeterminate）仅是视觉状态，表示"部分选中"；点击后半选消除并切换为全选。',"en-US":'Indeterminate is only a visual state meaning "partially selected"; clicking clears it and switches to fully checked.'},{"zh-CN":'实现"全选 / 全不选 / 半选"三态联动时，需由外部根据子项选中数量计算 indeterminate 与 value。',"en-US":'For "all / none / partial" tri-state linkage, compute indeterminate and value externally from the number of selected children.'}],a11y:[{"zh-CN":"底层使用原生 checkbox 输入语义，键盘空格可切换，禁用状态携带 disabled 属性。","en-US":"Built on native checkbox input semantics; toggles with the Space key and carries the disabled attribute when disabled."}]},yR={class:"demo-column"},SR={class:"demo-text"},xR=D({__name:"group",setup(e){const t=F("a");return(n,a)=>(g(),x("div",yR,[z(r(tc),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l)},{default:E(()=>[z(r(xs),{value:"a"},{default:E(()=>[G($(r(U)()?"选项 A":"Option A"),1)]),_:1}),z(r(xs),{value:"b"},{default:E(()=>[G($(r(U)()?"选项 B":"Option B"),1)]),_:1}),z(r(xs),{value:"c",disabled:""},{default:E(()=>[G($(r(U)()?"选项 C（禁用）":"Option C (disabled)"),1)]),_:1})]),_:1},8,["value"]),N("p",SR,$(r(U)()?"当前选中":"Selected")+"："+$(t.value),1)]))}}),_R={class:"demo-column"},CR=D({__name:"options",setup(e){const t=F("weekly"),n=Y(()=>U()?[{label:"每天",value:"daily"},{label:"每周",value:"weekly"},{label:"每月",value:"monthly"},{label:"从不（禁用）",value:"never",disabled:!0}]:[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"},{label:"Monthly",value:"monthly"},{label:"Never (disabled)",value:"never",disabled:!0}]);return(a,l)=>(g(),x("div",_R,[z(r(tc),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),options:n.value},null,8,["value","options"]),z(r(tc),{options:n.value,disabled:""},null,8,["options"])]))}});function kR(){const e=se(),[t,n]=B.useState("a");return c.jsxs("div",{className:"demo-column",children:[c.jsxs(uc,{value:t,onChange:n,children:[c.jsx(Cs,{value:"a",children:e?"选项 A":"Option A"}),c.jsx(Cs,{value:"b",children:e?"选项 B":"Option B"}),c.jsx(Cs,{value:"c",disabled:!0,children:e?"选项 C（禁用）":"Option C (disabled)"})]}),c.jsxs("p",{className:"demo-text",children:[e?"当前选中":"Selected","：",t]})]})}function NR(){const e=se(),[t,n]=B.useState("weekly"),a=[{label:e?"每天":"Daily",value:"daily"},{label:e?"每周":"Weekly",value:"weekly"},{label:e?"每月":"Monthly",value:"monthly"},{label:e?"从不（禁用）":"Never (disabled)",value:"never",disabled:!0}];return c.jsxs("div",{className:"demo-column",children:[c.jsx(uc,{value:t,onChange:n,options:a}),c.jsx(uc,{options:a,disabled:!0})]})}const wR=`<script setup lang="ts">
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
`,TR=`<script setup lang="ts">
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
`,zR=`import { useState } from 'react';
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
`,UR=`import { useState } from 'react';
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
`,$R={name:"Radio",slug:"radio",title:"单选框",category:"form",summary:{"zh-CN":"在一组互斥选项中选择一个，由 RadioGroup 管理选中值，Radio 作为子项；也支持 options 数组配置。","en-US":"Select one option from a mutually exclusive set. RadioGroup manages the selected value with Radio as the child item; an options array is also supported."},features:[{"zh-CN":"RadioGroup 受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes for RadioGroup; v-model:value on Vue"},{"zh-CN":"两种渲染方式：Radio 子组件插槽，或 options 配置数组（二者取其一，options 优先）","en-US":"Two rendering approaches: Radio child components via slot, or an options config array (choose one; options takes precedence)"},{"zh-CN":"支持整组 disabled 与单个选项 disabled（叠加生效）","en-US":"Supports disabling the whole group or individual options (effects stack)"},{"zh-CN":"Radio 自身不维护状态、不发事件，选中统一由组上下文派生","en-US":"Radio itself holds no state and emits no events; selection is derived from the group context"}],scenarios:[{"zh-CN":"互斥条件选择、设置项中的单一选择、表单枚举字段等场景。","en-US":"Mutually exclusive choices, single-choice settings, enum form fields, and similar scenarios."}],demos:[{id:"group",title:{"zh-CN":"Radio 子组件","en-US":"Radio Children"},description:{"zh-CN":"在 RadioGroup 默认插槽中放置 Radio，value 为选项取值。","en-US":"Place Radio in the RadioGroup default slot; value is the option value."},vueComponent:xR,reactComponent:kR,vueSource:wR,reactSource:zR},{id:"options",title:{"zh-CN":"options 配置与整组禁用","en-US":"options Config & Group Disabled"},description:{"zh-CN":"传入 options 数组即可渲染；disabled 作用于整组。","en-US":"Pass an options array to render the group; disabled applies to the whole group."},vueComponent:CR,reactComponent:NR,vueSource:TR,reactSource:UR}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"【Group】受控选中值（提供即受控）","en-US":"[Group] Controlled selected value (controlled when provided)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"【Group】非受控初始选中值","en-US":"[Group] Uncontrolled initial selected value"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"【Group】禁用整组","en-US":"[Group] Disable the whole group"}},{name:"options",type:"RadioOption[]",default:"—",description:{"zh-CN":"【Group】选项数组（提供后忽略子组件插槽）","en-US":"[Group] Options array (the child component slot is ignored when provided)"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"【Group】选中值变更回调","en-US":"[Group] Selected value change callback"}},{name:"Radio.value",type:"string",default:"—",required:!0,description:{"zh-CN":"【Radio 子项】选项取值（必填，组内唯一）","en-US":"[Radio item] Option value (required, unique within the group)"}},{name:"Radio.disabled",type:"boolean",default:"false",description:{"zh-CN":"【Radio 子项】禁用当前选项（与组禁用叠加）","en-US":"[Radio item] Disable this option (stacks with group disabled)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"选中值变更（由 Group 触发）","en-US":"Fired when the selected value changes (emitted by the Group)"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"【Group】自定义选项（渲染 Radio 子项，options 存在时忽略）；【Radio 子项】选项文案","en-US":"[Group] Custom options (renders Radio children; ignored when options is present); [Radio item] option label"}}],types:[{name:"RadioOption",definition:`interface RadioOption {
  label: string
  value: string
  disabled?: boolean
}`,description:{"zh-CN":"options 数组中的单项配置。","en-US":"Configuration of a single item in the options array."}}]},notes:[{"zh-CN":"Radio 必须放在 RadioGroup 内使用，其选中态由组上下文决定，不要单独给 Radio 传 value 受控。","en-US":"Radio must be used inside a RadioGroup; its checked state comes from the group context, so do not control Radio with its own value."},{"zh-CN":"options 模式下单项禁用通过该选项的 disabled: true 配置；插槽模式下在 <Radio> 上设置 disabled。","en-US":"In options mode, disable an item via disabled: true on that option; in slot mode, set disabled on the <Radio> itself."}],a11y:[{"zh-CN":"组内选项使用原生 radio 语义并共享同一分组名，方向键可在组内移动选择。","en-US":"Options use native radio semantics and share one group name; arrow keys move the selection within the group."}]},ER={class:"demo-column"},RR={class:"demo-text"},AR=D({__name:"basic",setup(e){const t=F(""),n=Y(()=>U()?[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳（暂不可选）",value:"shenzhen",disabled:!0}]:[{label:"Beijing",value:"beijing"},{label:"Shanghai",value:"shanghai"},{label:"Guangzhou",value:"guangzhou"},{label:"Shenzhen (unavailable)",value:"shenzhen",disabled:!0}]);return(a,l)=>(g(),x("div",ER,[z(r(qn),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),options:n.value,placeholder:r(U)()?"请选择城市":"Select a city",clearable:""},null,8,["value","options","placeholder"]),N("p",RR,$(r(U)()?"当前选中":"Selected")+"："+$(t.value||(r(U)()?"（未选择）":"(none)")),1)]))}}),OR={class:"demo-column"},BR=D({__name:"state",setup(e){const t=Y(()=>U()?[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}]);return(n,a)=>(g(),x("div",OR,[z(r(qn),{options:t.value,"default-value":"1"},null,8,["options"]),z(r(qn),{options:t.value,"default-value":"1",disabled:""},null,8,["options"])]))}}),ZR={class:"demo-column"},jR={class:"demo-text"},MR={class:"demo-text"},DR={class:"demo-text"},LR=D({__name:"advanced",setup(e){const t=Y(()=>U()?[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}]:[{label:"Beijing",value:"beijing"},{label:"Shanghai",value:"shanghai"},{label:"Guangzhou",value:"guangzhou"},{label:"Shenzhen",value:"shenzhen"}]),n=Y(()=>Array.from({length:1e3},(o,s)=>({label:U()?`选项 ${s+1}`:`Option ${s+1}`,value:`opt-${s+1}`}))),a=F(["beijing"]),l=F(""),i=F("");return(o,s)=>(g(),x("div",ZR,[z(r(qn),{value:a.value,"onUpdate:value":s[0]||(s[0]=u=>a.value=u),options:t.value,multiple:"",placeholder:r(U)()?"多选城市":"Multi-select cities"},null,8,["value","options","placeholder"]),N("p",jR,$(r(U)()?"多选已选":"Multi-selected")+"："+$(a.value.join(r(U)()?"、":", ")||(r(U)()?"（无）":"(none)")),1),z(r(qn),{value:l.value,"onUpdate:value":s[1]||(s[1]=u=>l.value=u),options:t.value,searchable:"",clearable:"",placeholder:r(U)()?"输入关键字过滤":"Type a keyword to filter"},null,8,["value","options","placeholder"]),N("p",MR,$(r(U)()?"可搜索当前选中":"Searchable selected")+"："+$(l.value||(r(U)()?"（未选择）":"(none)")),1),z(r(qn),{value:i.value,"onUpdate:value":s[2]||(s[2]=u=>i.value=u),options:n.value,virtual:"","max-height":200,placeholder:r(U)()?"虚拟滚动 · 1000 项":"Virtual scroll · 1000 items"},null,8,["value","options","placeholder"]),N("p",DR,$(r(U)()?"虚拟滚动当前选中":"Virtual scroll selected")+"："+$(i.value||(r(U)()?"（未选择）":"(none)")),1)]))}}),VR={class:"demo-column"},HR={class:"demo-text"},IR=D({__name:"grouped",setup(e){const t=F(""),n=[{label:U()?"一线城市":"Tier-1 Cities",options:[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}]},{label:U()?"新一线城市":"New Tier-1 Cities",options:[{label:"杭州",value:"hangzhou"},{label:"成都",value:"chengdu"},{label:"武汉",value:"wuhan",disabled:!0}]}];return(a,l)=>(g(),x("div",VR,[z(r(qn),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),options:n,clearable:""},null,8,["value"]),N("p",HR,$(r(U)()?`选中值：${t.value||"（未选择）"}`:`Value: ${t.value||"(none)"}`),1)]))}});function FR(){const e=se(),[t,n]=B.useState(""),a=[{label:e?"北京":"Beijing",value:"beijing"},{label:e?"上海":"Shanghai",value:"shanghai"},{label:e?"广州":"Guangzhou",value:"guangzhou"},{label:e?"深圳（暂不可选）":"Shenzhen (unavailable)",value:"shenzhen",disabled:!0}];return c.jsxs("div",{className:"demo-column",children:[c.jsx(Gn,{value:t,onChange:l=>n(l),options:a,placeholder:e?"请选择城市":"Select a city",clearable:!0}),c.jsxs("p",{className:"demo-text",children:[e?"当前选中":"Selected","：",t||(e?"（未选择）":"(none)")]})]})}function qR(){const e=se(),t=[{label:e?"选项一":"Option 1",value:"1"},{label:e?"选项二":"Option 2",value:"2"}];return c.jsxs("div",{className:"demo-column",children:[c.jsx(Gn,{options:t,defaultValue:"1"}),c.jsx(Gn,{options:t,defaultValue:"1",disabled:!0})]})}function GR(){const e=se(),[t,n]=B.useState(["beijing"]),[a,l]=B.useState(""),[i,o]=B.useState(""),s=[{label:e?"北京":"Beijing",value:"beijing"},{label:e?"上海":"Shanghai",value:"shanghai"},{label:e?"广州":"Guangzhou",value:"guangzhou"},{label:e?"深圳":"Shenzhen",value:"shenzhen"}],u=Array.from({length:1e3},(d,p)=>({label:e?`选项 ${p+1}`:`Option ${p+1}`,value:`opt-${p+1}`}));return c.jsxs("div",{className:"demo-column",children:[c.jsx(Gn,{value:t,onChange:d=>n(Array.isArray(d)?d:[d]),options:s,multiple:!0,placeholder:e?"多选城市":"Multi-select cities"}),c.jsxs("p",{className:"demo-text",children:[e?"多选已选":"Multi-selected","：",t.join(e?"、":", ")||(e?"（无）":"(none)")]}),c.jsx(Gn,{value:a,onChange:d=>l(d),options:s,searchable:!0,clearable:!0,placeholder:e?"输入关键字过滤":"Type a keyword to filter"}),c.jsxs("p",{className:"demo-text",children:[e?"可搜索当前选中":"Searchable selected","：",a||(e?"（未选择）":"(none)")]}),c.jsx(Gn,{value:i,onChange:d=>o(d),options:u,virtual:!0,maxHeight:200,placeholder:e?"虚拟滚动 · 1000 项":"Virtual scroll · 1000 items"}),c.jsxs("p",{className:"demo-text",children:[e?"虚拟滚动当前选中":"Virtual scroll selected","：",i||(e?"（未选择）":"(none)")]})]})}function YR(){const e=se(),[t,n]=B.useState(""),a=[{label:e?"一线城市":"Tier-1 Cities",options:[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}]},{label:e?"新一线城市":"New Tier-1 Cities",options:[{label:"杭州",value:"hangzhou"},{label:"成都",value:"chengdu"},{label:"武汉",value:"wuhan",disabled:!0}]}];return c.jsxs("div",{className:"demo-column",children:[c.jsx(Gn,{value:t,onChange:l=>n(l),options:a,clearable:!0}),c.jsx("p",{className:"demo-text",children:e?`选中值：${t||"（未选择）"}`:`Value: ${t||"(none)"}`})]})}const PR=`<script setup lang="ts">
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
`,KR=`<script setup lang="ts">
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
`,XR=`<script setup lang="ts">
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
`,QR=`<script setup lang="ts">
import { ref } from 'vue';
import { Select } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref('');

const options = [
  {
    label: isZh() ? '一线城市' : 'Tier-1 Cities',
    options: [
      { label: '北京', value: 'beijing' },
      { label: '上海', value: 'shanghai' },
      { label: '广州', value: 'guangzhou' },
      { label: '深圳', value: 'shenzhen' },
    ],
  },
  {
    label: isZh() ? '新一线城市' : 'New Tier-1 Cities',
    options: [
      { label: '杭州', value: 'hangzhou' },
      { label: '成都', value: 'chengdu' },
      { label: '武汉', value: 'wuhan', disabled: true },
    ],
  },
];
<\/script>

<template>
  <div class="demo-column">
    <Select v-model:value="value" :options="options" clearable />
    <p class="demo-text">
      {{ isZh() ? \`选中值：\${value || '（未选择）'}\` : \`Value: \${value || '(none)'}\` }}
    </p>
  </div>
</template>
`,JR=`import { useState } from 'react';
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
`,WR=`import { Select } from '@xui-design/react';
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
`,eA=`import { useState } from 'react';
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
`,tA=`import { useState } from 'react';
import { Select } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function SelectGroupedDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState('');

  const options = [
    {
      label: isZh ? '一线城市' : 'Tier-1 Cities',
      options: [
        { label: '北京', value: 'beijing' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' },
        { label: '深圳', value: 'shenzhen' },
      ],
    },
    {
      label: isZh ? '新一线城市' : 'New Tier-1 Cities',
      options: [
        { label: '杭州', value: 'hangzhou' },
        { label: '成都', value: 'chengdu' },
        { label: '武汉', value: 'wuhan', disabled: true },
      ],
    },
  ];

  return (
    <div className="demo-column">
      <Select value={value} onChange={(v) => setValue(v as string)} options={options} clearable />
      <p className="demo-text">
        {isZh ? \`选中值：\${value || '（未选择）'}\` : \`Value: \${value || '(none)'}\`}
      </p>
    </div>
  );
}
`,nA={name:"Select",slug:"select",title:"下拉选择",category:"form",summary:{"zh-CN":"从弹出的选项面板中选择值，支持单选 / 多选 / 可搜索 / 虚拟滚动，键盘操作与 ARIA 语义完整。","en-US":"Pick values from a pop-up option panel, with single / multiple selection, search, and virtual scrolling, plus full keyboard support and ARIA semantics."},features:[{"zh-CN":"受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; v-model:value on Vue"},{"zh-CN":"multiple 多选：选中值为 string[]，点击选项切换选中且面板不关闭，tag 可单独移除","en-US":"Multiple selection via multiple: the value is a string[], clicking an option toggles it without closing the panel, and tags can be removed individually"},{"zh-CN":"searchable 可搜索：面板顶部搜索框按选项文案过滤（大小写不敏感）","en-US":"Searchable mode: a search box at the top of the panel filters options by label (case-insensitive)"},{"zh-CN":"virtual 虚拟滚动：1000+ 选项仅渲染可视窗口，maxHeight 控制面板视口高度","en-US":"Virtual scrolling via virtual: 1000+ options render only the visible window; maxHeight controls the panel viewport height"},{"zh-CN":"clearable 已选中时显示清空按钮（多选清空全部）；disabled 整体禁用","en-US":"Clear button via clearable when a value is selected (clears all in multiple mode); disabled disables the whole select"},{"zh-CN":"键盘支持：上下方向键移动高亮（跳过禁用项）、Enter 确认、Esc 关闭","en-US":"Keyboard support: ArrowUp / ArrowDown move the highlight (skipping disabled options), Enter confirms, Esc closes"},{"zh-CN":"分组选项：options 支持 SelectOptionGroup 混合结构，分组内选项统一展示","en-US":"Grouped options: options accepts a mixed SelectOptionGroup structure, rendering options within groups"}],scenarios:[{"zh-CN":"选项数量较多、不适合用 Radio 平铺的单选 / 多选表单字段。","en-US":"Single / multiple form fields with too many options to lay out with Radio."},{"zh-CN":"选项上千条的大数据量选择场景（配合 virtual 虚拟滚动）。","en-US":"Large datasets with thousands of options (with virtual scrolling)."},{"zh-CN":"需要按文案快速定位选项的检索式选择场景（配合 searchable）。","en-US":"Search-driven selection to quickly locate options by label (with searchable)."}],demos:[{id:"basic",title:{"zh-CN":"受控与清空","en-US":"Controlled & Clearable"},description:{"zh-CN":"options 中可对单项设置 disabled；clearable 支持一键清空。","en-US":"Individual options can be disabled in options; clearable offers one-click clearing."},vueComponent:AR,reactComponent:FR,vueSource:PR,reactSource:JR},{id:"state",title:{"zh-CN":"默认值与禁用","en-US":"Default Value & Disabled"},description:{"zh-CN":"defaultValue 指定初始选中；disabled 禁用整个选择器。","en-US":"defaultValue sets the initial selection; disabled disables the whole select."},vueComponent:BR,reactComponent:qR,vueSource:KR,reactSource:WR},{id:"advanced",title:{"zh-CN":"多选 / 可搜索 / 虚拟滚动","en-US":"Multiple / Searchable / Virtual"},description:{"zh-CN":"multiple 以 tag 展示选中项；searchable 按文案过滤；virtual 渲染 1000 项仅维护可视窗口。","en-US":"multiple shows selections as tags; searchable filters by label; virtual renders 1000 items while maintaining only the visible window."},vueComponent:LR,reactComponent:GR,vueSource:XR,reactSource:eA},{id:"grouped",title:{"zh-CN":"分组选项","en-US":"Grouped Options"},description:{"zh-CN":"options 传入 SelectOptionGroup 结构，分组内选项统一展示，支持分组级 disabled。","en-US":"Pass a SelectOptionGroup structure to options; options within groups are rendered together, with group-level disabled support."},vueComponent:IR,reactComponent:YR,vueSource:QR,reactSource:tA}],api:{props:[{name:"value",type:"string | string[]",default:"—",description:{"zh-CN":"受控选中值（提供即受控）；多选模式为 string[]","en-US":"Controlled selected value (controlled when provided); a string[] in multiple mode"}},{name:"defaultValue",type:"string | string[]",default:"—",description:{"zh-CN":"非受控初始选中值","en-US":"Uncontrolled initial selected value"}},{name:"options",type:"SelectSource",default:"—",required:!0,description:{"zh-CN":"选项数组（支持扁平选项 SelectOption[] 或分组混合 SelectSource）","en-US":"Options array (supports flat SelectOption[] or mixed grouped SelectSource)"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清空按钮（仅已选中时；多选清空全部）","en-US":"Whether to show the clear button (only when a value is selected; clears all in multiple mode)"}},{name:"multiple",type:"boolean",default:"false",description:{"zh-CN":"多选模式：选中值为数组，点击选项切换选中且面板不关闭","en-US":"Multiple mode: the value is an array; clicking an option toggles it without closing the panel"}},{name:"searchable",type:"boolean",default:"false",description:{"zh-CN":"可搜索模式：面板顶部显示搜索框，按选项文案过滤","en-US":"Searchable mode: shows a search box at the top of the panel and filters options by label"}},{name:"virtual",type:"boolean",default:"false",description:{"zh-CN":"虚拟滚动模式（大数据量选项）","en-US":"Virtual scrolling mode (for large option sets)"}},{name:"maxHeight",type:"number",default:"264",description:{"zh-CN":"下拉面板最大高度（px）；虚拟模式下即视口高度","en-US":"Maximum height of the dropdown panel (px); the viewport height in virtual mode"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式（支持 CSS 自定义属性）","en-US":"Custom inline styles appended to the root element (CSS custom properties supported)"}},{name:"onChange",type:"(value: string | string[]) => void",default:"—",description:{"zh-CN":"选中值变更回调（多选载荷为 string[]）","en-US":"Selected value change callback (payload is a string[] in multiple mode)"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调","en-US":"Clear callback"}}],events:[{vue:"change",react:"onChange",payload:"value: string | string[]",description:{"zh-CN":"选中值变更（多选为最新数组）","en-US":"Fired when the selected value changes (the latest array in multiple mode)"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"清空选中值","en-US":"Fired when the selected value is cleared"}},{vue:"update:value",react:"—",payload:"string | string[]",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"option",react:"renderOption",description:{"zh-CN":"自定义选项渲染（作用域参数：option）","en-US":"Custom option rendering (scoped param: option)"}},{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标（触发器 clear 与多选标签删除按钮共用）","en-US":"Custom clear icon (shared by the trigger clear button and the multiple-mode tag remove button)"}},{vue:"suffixIcon",react:"renderSuffixIcon",description:{"zh-CN":"自定义下拉箭头图标","en-US":"Custom dropdown arrow icon"}}],types:[{name:"SelectOption",definition:`interface SelectOption {
  label: string
  value: string
  disabled?: boolean
}`,description:{"zh-CN":"下拉选项配置。","en-US":"Configuration of a dropdown option."}},{name:"SelectOptionGroup",definition:`interface SelectOptionGroup {
  label: string
  options: SelectOption[]
  disabled?: boolean
}`,description:{"zh-CN":"下拉选项分组配置。","en-US":"Configuration of a dropdown option group."}},{name:"SelectSource",definition:"type SelectSource = (SelectOption | SelectOptionGroup)[];",description:{"zh-CN":"options 数据源：支持扁平选项数组或分组混合。","en-US":"options data source: supports a flat option array or a mixed grouped structure."}},{name:"SelectValue",definition:"type SelectValue = string | string[];",description:{"zh-CN":"选中值：单选为 string，多选为 string[]（向后兼容：单选行为与旧版一致）。","en-US":"Selected value: a string in single mode and a string[] in multiple mode (backward compatible: single-select behavior matches the old version)."}}]},notes:[{"zh-CN":"禁用选项不响应点击与键盘高亮，选中禁用项的操作会被静默忽略。","en-US":"Disabled options do not respond to clicks or keyboard highlighting; attempts to select them are silently ignored."},{"zh-CN":"点击组件外部会收起面板且不改变选中值；多选模式点击选项后面板保持展开。","en-US":"Clicking outside closes the panel without changing the value; in multiple mode the panel stays open after an option is clicked."},{"zh-CN":"虚拟模式要求选项行高固定（默认 30px，可用 CSS 变量 --xui-select-item-height 对齐调整）。","en-US":"Virtual mode requires a fixed option row height (30px by default; align it via the --xui-select-item-height CSS variable)."},{"zh-CN":"多选删除某个 tag 即切换取消该项，触发 onChange 携带最新数组。","en-US":"Removing a tag in multiple mode toggles that option off and fires onChange with the latest array."},{"zh-CN":"自带视口避让：视口下方空间不足时面板自动向上展开（根元素加 is-drop-up），滚动与窗口 resize 时实时重算；overflow: hidden 祖先仍可能裁剪面板。","en-US":"Built-in viewport avoidance: the panel flips upward when space below is insufficient (is-drop-up is added to the root), recalculated in real time on scroll and window resize; an overflow: hidden ancestor may still clip the panel."}],a11y:[{"zh-CN":"选择器可通过 Tab 聚焦，方向键 / Enter / Esc 完成全部键盘操作；禁用项携带禁用语义。","en-US":"The select is focusable via Tab; arrow keys / Enter / Esc cover all keyboard operations, and disabled options carry disabled semantics."},{"zh-CN":"多选面板携带 aria-multiselectable；搜索框独立 role=searchbox。","en-US":"The multiple panel carries aria-multiselectable; the search box has its own role=searchbox."}]},aA={class:"demo-column"},lA={class:"demo-text"},iA=D({__name:"basic",setup(e){const t=F("2026-10-01");return(n,a)=>(g(),x("div",aA,[z(r(Ks),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),clearable:""},null,8,["value"]),N("p",lA,$(r(U)()?"当前日期":"Current date")+"："+$(t.value||(r(U)()?"（未选择）":"(none)")),1)]))}}),oA={class:"demo-column"},sA=D({__name:"state",setup(e){return(t,n)=>(g(),x("div",oA,[z(r(Ks),{"default-value":"2026-01-15",placeholder:r(U)()?"选择日期":"Select a date"},null,8,["placeholder"]),z(r(Ks),{"default-value":"2026-01-15",disabled:""})]))}});function rA(){const e=se(),[t,n]=B.useState("2026-10-01");return c.jsxs("div",{className:"demo-column",children:[c.jsx(Nr,{value:t,onChange:n,clearable:!0}),c.jsxs("p",{className:"demo-text",children:[e?"当前日期":"Current date","：",t||(e?"（未选择）":"(none)")]})]})}function uA(){const e=se();return c.jsxs("div",{className:"demo-column",children:[c.jsx(Nr,{defaultValue:"2026-01-15",placeholder:e?"选择日期":"Select a date"}),c.jsx(Nr,{defaultValue:"2026-01-15",disabled:!0})]})}const cA=`<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref<string | [string, string]>('2026-10-01');
<\/script>

<template>
  <div class="demo-column">
    <DatePicker v-model:value="value" clearable />
    <p class="demo-text">
      {{ isZh() ? '当前日期' : 'Current date' }}：{{ value || (isZh() ? '（未选择）' : '(none)') }}
    </p>
  </div>
</template>
`,dA=`<script setup lang="ts">
import { DatePicker } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <DatePicker default-value="2026-01-15" :placeholder="isZh() ? '选择日期' : 'Select a date'" />
    <DatePicker default-value="2026-01-15" disabled />
  </div>
</template>
`,mA=`import { useState } from 'react';
import { DatePicker } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function DatePickerBasicDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState<string | [string, string]>('2026-10-01');

  return (
    <div className="demo-column">
      <DatePicker value={value} onChange={setValue} clearable />
      <p className="demo-text">
        {isZh ? '当前日期' : 'Current date'}：{value || (isZh ? '（未选择）' : '(none)')}
      </p>
    </div>
  );
}
`,pA=`import { DatePicker } from '@xui-design/react';
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
`,fA={name:"DatePicker",slug:"date-picker",title:"日期选择",category:"form",summary:{"zh-CN":"点击弹出月历面板选择单个日期，值统一为 YYYY-MM-DD 字符串，零日期依赖。","en-US":"Click to open a month calendar and pick a single date; the value is always a YYYY-MM-DD string, with zero date dependencies."},features:[{"zh-CN":"受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; supports v-model:value on the Vue side"},{"zh-CN":"值格式统一为 'YYYY-MM-DD' 字符串（序列化友好），非法值回退 null","en-US":"Values are always 'YYYY-MM-DD' strings (serialization-friendly); invalid values fall back to null"},{"zh-CN":"月历面板支持上个月 / 下个月切换（跨年自动滚动），42 格完整周视图","en-US":"The calendar panel switches between previous / next month (scrolling across years automatically), with a full 42-cell week view"},{"zh-CN":"clearable 清空、disabled 禁用；点击外部或选中后自动收起","en-US":"A clearable clear button and disabled state; the panel closes on outside click or after selection"}],scenarios:[{"zh-CN":"生日、预约、查询时间范围等需要选择某一天的表单场景。","en-US":"Form scenarios that pick a specific day, such as birthdays, reservations, or date-range queries."}],demos:[{id:"basic",title:{"zh-CN":"受控选择","en-US":"Controlled Selection"},description:{"zh-CN":"外部维护 YYYY-MM-DD 字符串，可一键清空。","en-US":"The YYYY-MM-DD string is maintained externally and can be cleared in one click."},vueComponent:iA,reactComponent:rA,vueSource:cA,reactSource:mA},{id:"state",title:{"zh-CN":"默认值与禁用","en-US":"Default Value & Disabled"},description:{"zh-CN":"defaultValue 定位初始日期；disabled 下不可打开面板。","en-US":"defaultValue sets the initial date; the panel cannot be opened when disabled."},vueComponent:sA,reactComponent:uA,vueSource:dA,reactSource:pA}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控选中日期（'YYYY-MM-DD'）","en-US":"Controlled selected date ('YYYY-MM-DD')"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始日期（'YYYY-MM-DD'）","en-US":"Uncontrolled initial date ('YYYY-MM-DD')"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清空按钮（仅已选中时）","en-US":"Whether to show the clear button (only when a date is selected)"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"选中值变更回调","en-US":"Callback when the selected value changes"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调","en-US":"Callback on clear"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"选中日期变更","en-US":"Fired when the selected date changes"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"清空日期","en-US":"Fired when the date is cleared"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标","en-US":"Custom clear icon"}},{vue:"calendarIcon",react:"renderCalendarIcon",description:{"zh-CN":"自定义日历图标","en-US":"Custom calendar icon"}},{vue:"prevIcon",react:"renderPrevIcon",description:{"zh-CN":"自定义上一月图标","en-US":"Custom previous-month icon"}},{vue:"nextIcon",react:"renderNextIcon",description:{"zh-CN":"自定义下一月图标","en-US":"Custom next-month icon"}}]},notes:[{"zh-CN":"契约只接受 / 输出 'YYYY-MM-DD' 字符串，不引入 Date 对象；非法字符串回退为 null。","en-US":"The contract only accepts / emits 'YYYY-MM-DD' strings with no Date objects involved; invalid strings fall back to null."},{"zh-CN":"面板打开时视图自动定位到选中日期所在月份，无选中值时定位到当前月。","en-US":"When the panel opens, the view jumps to the month of the selected date, or to the current month when nothing is selected."}],a11y:[{"zh-CN":"日期按钮可通过键盘聚焦与选择，月份切换与日期格具备可读的文本语义。","en-US":"Date buttons are keyboard-focusable and selectable; month switches and date cells carry readable text semantics."}]},hA={class:"demo-column"},vA={class:"demo-text"},gA=D({__name:"basic",setup(e){const t=F(3.5);return(n,a)=>(g(),x("div",hA,[z(r(oc),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),min:0,max:10,step:.5,precision:2},null,8,["value"]),N("p",vA,$(r(U)()?`当前值：${t.value}（范围 0 - 10，步长 0.5，保留 2 位小数）`:`Current: ${t.value} (range 0-10, step 0.5, 2 decimals)`),1)]))}}),bA={class:"demo-column"},yA=D({__name:"state",setup(e){return(t,n)=>(g(),x("div",bA,[z(r(oc),{"default-value":3,min:1,max:5,placeholder:r(U)()?"非受控，1 - 5":"Uncontrolled, 1 - 5"},null,8,["placeholder"]),z(r(oc),{"default-value":8,disabled:"",placeholder:r(U)()?"禁用态":"Disabled"},null,8,["placeholder"])]))}});function SA(){const e=se(),[t,n]=B.useState(3.5);return c.jsxs("div",{className:"demo-column",children:[c.jsx(Nd,{value:t,onChange:n,min:0,max:10,step:.5,precision:2}),c.jsx("p",{className:"demo-text",children:e?`当前值：${t}（范围 0 - 10，步长 0.5，保留 2 位小数）`:`Current: ${t} (range 0-10, step 0.5, 2 decimals)`})]})}function xA(){const e=se();return c.jsxs("div",{className:"demo-column",children:[c.jsx(Nd,{defaultValue:3,min:1,max:5,placeholder:e?"非受控，1 - 5":"Uncontrolled, 1 - 5"}),c.jsx(Nd,{defaultValue:8,disabled:!0,placeholder:e?"禁用态":"Disabled"})]})}const _A=`<script setup lang="ts">
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
`,CA=`<script setup lang="ts">
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
`,kA=`import { useState } from 'react';
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
`,NA=`import { InputNumber } from '@xui-design/react';
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
`,wA={name:"InputNumber",slug:"input-number",title:"数字输入框",category:"form",summary:{"zh-CN":"通过步进按钮或直接键入输入数字，自动完成范围收敛、步长对齐与精度处理。","en-US":"Enter numbers via stepper buttons or direct typing, with automatic range clamping, step alignment, and precision handling."},features:[{"zh-CN":"受控 / 非受控双模式，值为 number | null（清空或非法输入为 null），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; the value is number | null (null when cleared or invalid); supports v-model:value on the Vue side"},{"zh-CN":"min / max 边界收敛，step 步长（非正数回退 1），上下步进按钮循环对齐","en-US":"min / max boundary clamping and step increments (non-positive values fall back to 1); up / down steppers keep values aligned to step multiples"},{"zh-CN":"precision 小数位数（0-20），提交时统一格式化；非法 / 越界输入自动回退或 clamp","en-US":"precision decimal places (0-20), formatted uniformly on commit; invalid or out-of-range input automatically falls back or is clamped"},{"zh-CN":"disabled 禁用与 placeholder 占位文本","en-US":"disabled state and placeholder text"}],scenarios:[{"zh-CN":"数量、金额、比例等需要精确数字输入与步进调节的场景。","en-US":"Scenarios requiring precise numeric input with stepper adjustment, such as quantities, amounts, and ratios."}],demos:[{id:"basic",title:{"zh-CN":"范围 / 步长 / 精度","en-US":"Range / Step / Precision"},description:{"zh-CN":"0-10 范围、0.5 步长、两位小数，步进与键入都会自动收敛。","en-US":"Range 0-10, step 0.5, two decimal places; both stepping and typing are clamped automatically."},vueComponent:gA,reactComponent:SA,vueSource:_A,reactSource:kA},{id:"state",title:{"zh-CN":"非受控与禁用","en-US":"Uncontrolled & Disabled"},description:{"zh-CN":"defaultValue 提供初始值；越界值在提交时 clamp 到边界。","en-US":"defaultValue provides the initial value; out-of-range values are clamped to the bounds on commit."},vueComponent:yA,reactComponent:xA,vueSource:CA,reactSource:NA}],api:{props:[{name:"value",type:"number | null",default:"—",description:{"zh-CN":"受控值（null 表示空值；非法输入回退 null）","en-US":"Controlled value (null means empty; invalid input falls back to null)"}},{name:"defaultValue",type:"number | null",default:"—",description:{"zh-CN":"非受控初始值","en-US":"Uncontrolled initial value"}},{name:"min",type:"number",default:"-Infinity",description:{"zh-CN":"最小值","en-US":"Minimum value"}},{name:"max",type:"number",default:"Infinity",description:{"zh-CN":"最大值","en-US":"Maximum value"}},{name:"step",type:"number",default:"1",description:{"zh-CN":"步长（非正数回退 1）","en-US":"Step increment (non-positive values fall back to 1)"}},{name:"precision",type:"number",default:"—",description:{"zh-CN":"小数位数（0-20，缺省不应用精度）","en-US":"Decimal places (0-20; no precision applied when omitted)"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"onChange",type:"(value: number | null) => void",default:"—",description:{"zh-CN":"值变更回调（清空 / 非法输入载荷为 null）","en-US":"Value change callback (payload is null when cleared or invalid)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: number | null",description:{"zh-CN":"值提交时触发","en-US":"Fired when a value is committed"}},{vue:"update:value",react:"—",payload:"number | null",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:"upIcon",react:"renderUpIcon",description:{"zh-CN":"自定义步进递增图标","en-US":"Custom increment stepper icon"}},{vue:"downIcon",react:"renderDownIcon",description:{"zh-CN":"自定义步进递减图标","en-US":"Custom decrement stepper icon"}}]},notes:[{"zh-CN":"输入文本在失焦或回车时提交：空串 / 非法内容收敛为 null，合法值先 clamp 到 [min, max] 再按 precision 格式化。","en-US":"Typed text is committed on blur or Enter: empty or invalid input falls back to null, while valid values are clamped to [min, max] and then formatted by precision."},{"zh-CN":"步进结果始终是 step 的整数倍并按精度显示；到达边界继续步进为 no-op。","en-US":"Stepping always lands on a multiple of step and displays at the configured precision; stepping past a boundary is a no-op."}],a11y:[{"zh-CN":"步进按钮为可聚焦的原生按钮，输入区为 number 语义，禁用状态透传 disabled。","en-US":"Stepper buttons are focusable native buttons, the input carries number semantics, and the disabled state passes through the disabled attribute."}]},TA={class:"demo-row"},zA=D({__name:"basic",setup(e){return(t,n)=>(g(),x("div",TA,[z(r(_n),null,{default:E(()=>[G($(r(U)()?"默认":"Default"),1)]),_:1}),z(r(_n),{type:"primary"},{default:E(()=>[G($(r(U)()?"主要":"Primary"),1)]),_:1}),z(r(_n),{type:"success"},{default:E(()=>[G($(r(U)()?"成功":"Success"),1)]),_:1}),z(r(_n),{type:"warning"},{default:E(()=>[G($(r(U)()?"警告":"Warning"),1)]),_:1}),z(r(_n),{type:"danger"},{default:E(()=>[G($(r(U)()?"危险":"Danger"),1)]),_:1})]))}}),UA={class:"demo-column"},$A={class:"demo-row"},EA=D({__name:"closable",setup(e){const t=()=>U()?["前端","Vue","React","TypeScript"]:["Frontend","Vue","React","TypeScript"],n=F(t()),a=i=>{n.value.splice(i,1)},l=()=>{n.value=t()};return(i,o)=>(g(),x("div",UA,[N("div",$A,[(g(!0),x(ne,null,pe(n.value,(s,u)=>(g(),ae(r(_n),{key:s,size:"sm",closable:"",onClose:d=>a(u)},{default:E(()=>[G($(s),1)]),_:2},1032,["onClose"]))),128))]),z(r(W),{size:"sm",onClick:l},{default:E(()=>[G($(r(U)()?"重置标签":"Reset tags"),1)]),_:1})]))}});function RA(){const e=se();return c.jsxs("div",{className:"demo-row",children:[c.jsx(Cn,{children:e?"默认":"Default"}),c.jsx(Cn,{type:"primary",children:e?"主要":"Primary"}),c.jsx(Cn,{type:"success",children:e?"成功":"Success"}),c.jsx(Cn,{type:"warning",children:e?"警告":"Warning"}),c.jsx(Cn,{type:"danger",children:e?"危险":"Danger"})]})}function AA(){const e=se(),t=()=>e?["前端","Vue","React","TypeScript"]:["Frontend","Vue","React","TypeScript"],[n,a]=B.useState(t),l=i=>{a(o=>o.filter((s,u)=>u!==i))};return c.jsxs("div",{className:"demo-column",children:[c.jsx("div",{className:"demo-row",children:n.map((i,o)=>c.jsx(Cn,{size:"sm",closable:!0,onClose:()=>l(o),children:i},i))}),c.jsx(ee,{size:"sm",onClick:()=>a(t),children:e?"重置标签":"Reset tags"})]})}const OA=`<script setup lang="ts">
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
`,BA=`<script setup lang="ts">
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
`,ZA=`import { Tag } from '@xui-design/react';
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
`,jA=`import { useState } from 'react';
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
`,MA={name:"Tag",slug:"tag",title:"标签",category:"display",summary:{"zh-CN":"用于标记和分类的小型标签，支持五种语义类型、两种尺寸与可关闭交互。","en-US":"A small tag for labeling and categorization, with five semantic types, two sizes, and closable interaction."},features:[{"zh-CN":"五种语义类型：default / primary / success / warning / danger","en-US":"Five semantic types: default / primary / success / warning / danger"},{"zh-CN":"sm / md 两种尺寸","en-US":"Two sizes: sm / md"},{"zh-CN":"closable 显示关闭按钮，点击后组件自动隐藏并触发 close","en-US":"closable shows a close button; clicking it hides the component and fires close"}],scenarios:[{"zh-CN":"分类标记、可删除的筛选条件、状态简要标识等场景。","en-US":"Category labels, removable filter criteria, brief status indicators, and more."}],demos:[{id:"basic",title:{"zh-CN":"语义类型","en-US":"Semantic Types"},description:{"zh-CN":"通过 type 切换五种内置色彩语义。","en-US":"Use type to switch between the five built-in color semantics."},vueComponent:zA,reactComponent:RA,vueSource:OA,reactSource:ZA},{id:"closable",title:{"zh-CN":"可关闭标签","en-US":"Closable Tag"},description:{"zh-CN":"closable 标签关闭后自动隐藏；由外部在 close 中同步数据源。","en-US":"A closable tag hides itself after closing; sync the data source externally in the close handler."},vueComponent:EA,reactComponent:AA,vueSource:BA,reactSource:jA}],api:{props:[{name:"type",type:"'default' | 'primary' | 'success' | 'warning' | 'danger'",default:"'default'",description:{"zh-CN":"语义类型","en-US":"Semantic type"}},{name:"size",type:"'sm' | 'md'",default:"'md'",description:{"zh-CN":"尺寸","en-US":"Size"}},{name:"closable",type:"boolean",default:"false",description:{"zh-CN":"是否可关闭（显示关闭按钮）","en-US":"Whether the tag is closable (shows a close button)"}},{name:"onClose",type:"() => void",default:"—",description:{"zh-CN":"关闭回调（组件隐藏后触发）","en-US":"Close callback (fired after the component hides)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"close",react:"onClose",payload:"—",description:{"zh-CN":"点击关闭按钮、组件隐藏后触发","en-US":"Fired after the close button is clicked and the component hides"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"标签内容","en-US":"Tag content"}},{vue:"closeIcon",react:"renderCloseIcon",description:{"zh-CN":"自定义关闭图标（替换内置 close）","en-US":"Custom close icon (replaces the built-in close)"}}]},notes:[{"zh-CN":'点击关闭后组件内部先隐藏再回调；如需"恢复显示"（如重置示例），需重新挂载组件（Vue 用 key、React 重挂载）。',"en-US":'After the close click, the component hides internally before firing the callback; to "bring it back" (e.g. resetting a demo), remount the component (via key in Vue or a remount in React).'}],a11y:[{"zh-CN":'关闭按钮具备按钮语义与可读的"关闭"文本，键盘可聚焦操作。',"en-US":'The close button has button semantics and a readable "Close" label, and is keyboard-focusable.'}]},DA={class:"demo-column"},LA={class:"demo-row"},VA=D({__name:"basic",setup(e){const t=F(35),n=l=>{t.value=Math.min(100,Math.max(0,t.value+l))},a=Y(()=>t.value);return(l,i)=>(g(),x("div",DA,[z(r(Pi),{percent:t.value},null,8,["percent"]),z(r(Pi),{type:"circle",percent:a.value,"stroke-width":8},null,8,["percent"]),N("div",LA,[z(r(W),{size:"sm",onClick:i[0]||(i[0]=o=>n(-10))},{default:E(()=>[...i[2]||(i[2]=[G("-10%",-1)])]),_:1}),z(r(W),{size:"sm",type:"primary",onClick:i[1]||(i[1]=o=>n(10))},{default:E(()=>[...i[3]||(i[3]=[G("+10%",-1)])]),_:1})])]))}}),HA={class:"demo-column"},IA=D({__name:"status",setup(e){return(t,n)=>(g(),x("div",HA,[z(r(Pi),{percent:100}),z(r(Pi),{percent:100,status:"error"}),z(r(Pi),{percent:60})]))}});function FA(){const[e,t]=B.useState(35),n=a=>{t(l=>Math.min(100,Math.max(0,l+a)))};return c.jsxs("div",{className:"demo-column",children:[c.jsx(Ki,{percent:e}),c.jsx(Ki,{type:"circle",percent:e,strokeWidth:8}),c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{size:"sm",onClick:()=>n(-10),children:"-10%"}),c.jsx(ee,{size:"sm",type:"primary",onClick:()=>n(10),children:"+10%"})]})]})}function qA(){return c.jsxs("div",{className:"demo-column",children:[c.jsx(Ki,{percent:100}),c.jsx(Ki,{percent:100,status:"error"}),c.jsx(Ki,{percent:60})]})}const GA=`<script setup lang="ts">
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
`,YA=`<script setup lang="ts">
import { Progress } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-column">
    <Progress :percent="100" />
    <Progress :percent="100" status="error" />
    <Progress :percent="60" />
  </div>
</template>
`,PA=`import { useState } from 'react';
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
`,KA=`import { Progress } from '@xui-design/react';

export default function ProgressStatusDemo() {
  return (
    <div className="demo-column">
      <Progress percent={100} />
      <Progress percent={100} status="error" />
      <Progress percent={60} />
    </div>
  );
}
`,XA={name:"Progress",slug:"progress",title:"进度条",category:"display",summary:{"zh-CN":"展示任务进度百分比，支持线性与环形两种形态及成功 / 失败状态色。","en-US":"Displays task progress as a percentage, in linear or circular form, with success / error status colors."},features:[{"zh-CN":"type 支持 'line' 线性与 'circle' 环形（SVG 描边）","en-US":"type supports 'line' (linear) and 'circle' (circular, SVG stroke)"},{"zh-CN":"percent 自动收敛到 [0, 100]，非数值按 0 处理","en-US":"percent is clamped to [0, 100] automatically; non-numeric input is treated as 0"},{"zh-CN":"status 支持 normal / success / error；percent 达到 100 且未显式指定时自动派生 success","en-US":"status supports normal / success / error; success is derived automatically when percent reaches 100 and no status is set explicitly"},{"zh-CN":"strokeWidth 自定义条粗 / 描边宽度，showText 控制百分比文本","en-US":"strokeWidth customizes the bar / stroke width; showText toggles the percentage text"}],scenarios:[{"zh-CN":"文件上传 / 下载、任务处理进度、加载完成度展示等场景。","en-US":"File upload / download, task processing progress, loading completion display, and more."}],demos:[{id:"basic",title:{"zh-CN":"线性与环形","en-US":"Line & Circle"},description:{"zh-CN":"同一百分比驱动 line 与 circle 两种形态，按钮模拟进度变化。","en-US":"One percentage drives both the line and circle forms; buttons simulate progress changes."},vueComponent:VA,reactComponent:FA,vueSource:GA,reactSource:PA},{id:"status",title:{"zh-CN":"成功与失败状态","en-US":"Success & Error States"},description:{"zh-CN":'100% 默认派生 success；显式 status="error" 显示失败色。',"en-US":'100% derives success by default; an explicit status="error" shows the error color.'},vueComponent:IA,reactComponent:qA,vueSource:YA,reactSource:KA}],api:{props:[{name:"percent",type:"number",default:"0",description:{"zh-CN":"进度百分比（0-100，越界自动收敛）","en-US":"Progress percentage (0-100; out-of-range values are clamped)"}},{name:"type",type:"'line' | 'circle'",default:"'line'",description:{"zh-CN":"进度条类型","en-US":"Progress bar type"}},{name:"strokeWidth",type:"number",default:"6",description:{"zh-CN":"条粗（px）；circle 类型为 SVG 描边宽度","en-US":"Bar thickness (px); the SVG stroke width for the circle type"}},{name:"showText",type:"boolean",default:"true",description:{"zh-CN":"是否显示百分比文本","en-US":"Whether to show the percentage text"}},{name:"status",type:"'normal' | 'success' | 'error'",default:"'normal'",description:{"zh-CN":"进度状态（100% 自动派生 success）","en-US":"Progress status (success is derived automatically at 100%)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],types:[{name:"ProgressStatus",definition:`type ProgressType = 'line' | 'circle'
type ProgressStatus = 'normal' | 'success' | 'error'`,description:{"zh-CN":"进度条形态与状态枚举。","en-US":"Enums of the progress form and status."}}]},notes:[{"zh-CN":"纯展示组件，无事件；达到 100% 时若未显式传入 status，颜色自动切换为成功色。","en-US":"A purely presentational component with no events; at 100% the color switches to the success color unless status is passed explicitly."}],a11y:[{"zh-CN":'进度根节点携带进度百分比语义（role="progressbar" 及 aria-valuenow / min / max）。',"en-US":'The root element carries progress semantics (role="progressbar" with aria-valuenow / min / max).'}]},QA={class:"demo-column"},JA={class:"demo-row"},WA={class:"demo-row"},eO=D({__name:"basic",setup(e){const t=F(5);return(n,a)=>(g(),x("div",QA,[N("div",JA,[z(r(wl),{count:t.value},{default:E(()=>[z(r(W),null,{default:E(()=>[G($(r(U)()?"消息":"Messages"),1)]),_:1})]),_:1},8,["count"]),z(r(wl),{count:120,max:99},{default:E(()=>[z(r(W),null,{default:E(()=>[G($(r(U)()?"通知":"Notifications"),1)]),_:1})]),_:1})]),N("div",WA,[z(r(W),{size:"sm",onClick:a[0]||(a[0]=l=>t.value=Math.max(0,t.value-1))},{default:E(()=>[...a[2]||(a[2]=[G("-1",-1)])]),_:1}),z(r(W),{size:"sm",type:"primary",onClick:a[1]||(a[1]=l=>t.value++)},{default:E(()=>[G($(r(U)()?"+1（试试超过 99）":"+1 (try over 99)"),1)]),_:1})])]))}}),tO={class:"demo-row"},nO={class:"demo-anchor"},aO={class:"demo-anchor"},lO=D({__name:"variants",setup(e){return(t,n)=>(g(),x("div",tO,[z(r(wl),{dot:""},{default:E(()=>[N("span",nO,$(r(U)()?"小红点":"Dot"),1)]),_:1}),z(r(wl),{count:0,"show-zero":""},{default:E(()=>[...n[0]||(n[0]=[N("span",{class:"demo-anchor"},"showZero",-1)])]),_:1}),z(r(wl),{count:0},{default:E(()=>[N("span",aO,$(r(U)()?"零值隐藏":"Hidden when zero"),1)]),_:1}),z(r(wl),{count:8})]))}}),iO=de(lO,[["__scopeId","data-v-9ee9e1ed"]]);function oO(){const e=se(),[t,n]=B.useState(5);return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{className:"demo-row",children:[c.jsx(zl,{count:t,children:c.jsx(ee,{children:e?"消息":"Messages"})}),c.jsx(zl,{count:120,max:99,children:c.jsx(ee,{children:e?"通知":"Notifications"})})]}),c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{size:"sm",onClick:()=>n(a=>Math.max(0,a-1)),children:"-1"}),c.jsx(ee,{size:"sm",type:"primary",onClick:()=>n(a=>a+1),children:e?"+1（试试超过 99）":"+1 (try over 99)"})]})]})}const qu={padding:"6px 12px",background:"#f1f5f9",borderRadius:"6px"};function sO(){const e=se();return c.jsxs("div",{className:"demo-row",children:[c.jsx(zl,{dot:!0,children:c.jsx("span",{style:qu,children:e?"小红点":"Dot"})}),c.jsx(zl,{count:0,showZero:!0,children:c.jsx("span",{style:qu,children:"showZero"})}),c.jsx(zl,{count:0,children:c.jsx("span",{style:qu,children:e?"零值隐藏":"Hidden when zero"})}),c.jsx(zl,{count:8})]})}const rO=`<script setup lang="ts">
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
`,uO=`<script setup lang="ts">
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
`,cO=`import { useState } from 'react';
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
`,dO=`import { Badge } from '@xui-design/react';
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
`,mO={name:"Badge",slug:"badge",title:"徽标数",category:"display",summary:{"zh-CN":"以角标形式展示消息数量或状态红点，可包裹任意内容，也可独立使用。","en-US":"Shows a message count or status dot as a corner badge; can wrap any content or be used standalone."},features:[{"zh-CN":"包裹模式：徽标悬浮于内容右上角；无子内容时独立渲染","en-US":"Wrapper mode: the badge floats at the top-right corner of the content; renders standalone without children"},{"zh-CN":"count 超过 max 时显示 `${max}+`（max 默认 99）","en-US":"Shows `${max}+` when count exceeds max (max defaults to 99)"},{"zh-CN":"dot 点状徽标，忽略具体数值；showZero 控制 count 为 0 时是否显示","en-US":"dot renders a dot badge ignoring the numeric value; showZero controls whether a count of 0 is shown"}],scenarios:[{"zh-CN":"未读消息 / 通知数量、有新内容的状态红点等场景。","en-US":"Unread message / notification counts, status dots for new content, and more."}],demos:[{id:"basic",title:{"zh-CN":"计数与上限","en-US":"Count & Max"},description:{"zh-CN":"count 动态变化，超过 max 后折叠为 99+。","en-US":"count changes dynamically and collapses to 99+ once it exceeds max."},vueComponent:eO,reactComponent:oO,vueSource:rO,reactSource:cO},{id:"variants",title:{"zh-CN":"红点 / 零值 / 独立","en-US":"Dot / Zero / Standalone"},description:{"zh-CN":"dot 仅提示有更新；showZero 决定 0 是否展示；无包裹内容时独立显示。","en-US":"dot only hints that there are updates; showZero decides whether 0 is shown; renders standalone without wrapped content."},vueComponent:iO,reactComponent:sO,vueSource:uO,reactSource:dO}],api:{props:[{name:"count",type:"number",default:"—",description:{"zh-CN":"徽标数值（未提供时不显示；dot 模式仅作无障碍语义）","en-US":"Badge count (hidden when not provided; only serves as accessibility semantics in dot mode)"}},{name:"max",type:"number",default:"99",description:{"zh-CN":"数值上限（超出显示 `${max}+`）","en-US":"Maximum value (shows `${max}+` when exceeded)"}},{name:"dot",type:"boolean",default:"false",description:{"zh-CN":"点状徽标（忽略 count 与 max）","en-US":"Dot badge (ignores count and max)"}},{name:"showZero",type:"boolean",default:"false",description:{"zh-CN":"count 为 0 时是否显示徽标（默认隐藏）","en-US":"Whether to show the badge when count is 0 (hidden by default)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"徽标包裹的内容（未提供时徽标独立渲染）","en-US":"Content wrapped by the badge (the badge renders standalone when not provided)"}}]},notes:[{"zh-CN":"纯展示组件，无事件；count 为 0 且未开启 showZero 时徽标不占位。","en-US":"A purely presentational component with no events; the badge takes up no space when count is 0 and showZero is off."}],a11y:[{"zh-CN":"数值徽标以可读文本暴露数量语义；dot 模式作为状态提示，装饰性内容对读屏隐藏。","en-US":"Numeric badges expose the count as readable text; dot mode acts as a status hint, and decorative content is hidden from screen readers."}]},pO={class:"demo-row"},fO="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%236366f1'/><text x='40' y='52' font-size='36' fill='white' text-anchor='middle'>X</text></svg>",hO=D({__name:"basic",setup(e){return(t,n)=>(g(),x("div",pO,[z(r(fa),{src:fO,alt:r(U)()?"X 用户头像":"X user avatar"},null,8,["alt"]),z(r(fa),null,{default:E(()=>[G($(r(U)()?"杨":"Yang"),1)]),_:1}),z(r(fa),{size:"sm"},{default:E(()=>[G($(r(U)()?"小":"Sm"),1)]),_:1}),z(r(fa),{size:"lg"},{default:E(()=>[G($(r(U)()?"大":"Lg"),1)]),_:1})]))}}),vO={class:"demo-column"},gO={class:"demo-row"},bO={class:"demo-row"},yO=D({__name:"shape",setup(e){return(t,n)=>(g(),x("div",vO,[N("div",gO,[z(r(fa),{shape:"square"},{default:E(()=>[G($(r(U)()?"方":"Square"),1)]),_:1}),z(r(fa),{shape:"circle"},{default:E(()=>[G($(r(U)()?"圆":"Circle"),1)]),_:1})]),N("div",bO,[z(r(fa),{src:"/not-exist.png",onError:n[0]||(n[0]=()=>console.log("image load failed"))},{default:E(()=>[G($(r(U)()?"失败回退":"Fallback"),1)]),_:1}),z(r(fa),{src:"/not-exist.png"})])]))}}),SO="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%236366f1'/><text x='40' y='52' font-size='36' fill='white' text-anchor='middle'>X</text></svg>";function xO(){const e=se();return c.jsxs("div",{className:"demo-row",children:[c.jsx(ha,{src:SO,alt:e?"X 用户头像":"X user avatar"}),c.jsx(ha,{children:e?"杨":"Yang"}),c.jsx(ha,{size:"sm",children:e?"小":"Sm"}),c.jsx(ha,{size:"lg",children:e?"大":"Lg"})]})}function _O(){const e=se();return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{className:"demo-row",children:[c.jsx(ha,{shape:"square",children:e?"方":"Square"}),c.jsx(ha,{shape:"circle",children:e?"圆":"Circle"})]}),c.jsxs("div",{className:"demo-row",children:[c.jsx(ha,{src:"/not-exist.png",onError:()=>console.log("image load failed"),children:e?"失败回退":"Fallback"}),c.jsx(ha,{src:"/not-exist.png"})]})]})}const CO=`<script setup lang="ts">
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
`,kO=`<script setup lang="ts">
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
`,NO=`import { Avatar } from '@xui-design/react';
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
`,wO=`import { Avatar } from '@xui-design/react';
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
`,TO={name:"Avatar",slug:"avatar",title:"头像",category:"display",summary:{"zh-CN":"展示用户或事物的图片 / 文字头像，支持三种尺寸、圆形方形与图片失败回退。","en-US":"Displays an image or text avatar for a user or entity, with three sizes, circle / square shapes, and image-failure fallback."},features:[{"zh-CN":"size 支持 sm / md / lg，shape 支持 circle / square","en-US":"size supports sm / md / lg; shape supports circle / square"},{"zh-CN":"内容优先级：加载成功的图片 ＞ 默认插槽 / children（文字图标）＞ 默认图标","en-US":"Content priority: a successfully loaded image > default slot / children (text or icon) > default icon"},{"zh-CN":"src 加载失败自动回退并触发 error 事件","en-US":"Falls back automatically and fires the error event when src fails to load"}],scenarios:[{"zh-CN":"用户信息、评论列表、导航栏账号入口等需要形象标识的场景。","en-US":"User profiles, comment lists, navbar account entries, and other scenarios needing a visual identity."}],demos:[{id:"basic",title:{"zh-CN":"图片 / 文字 / 尺寸","en-US":"Image / Text / Sizes"},description:{"zh-CN":"src 为图片地址；无图时显示插槽文字；size 控制三档尺寸。","en-US":"src sets the image URL; slot text shows when there is no image; size controls the three size options."},vueComponent:hO,reactComponent:xO,vueSource:CO,reactSource:NO},{id:"shape",title:{"zh-CN":"形状与失败回退","en-US":"Shapes & Failure Fallback"},description:{"zh-CN":"shape 切换方形 / 圆形；图片加载失败时回退为插槽内容或默认图标。","en-US":"shape switches between square and circle; falls back to slot content or the default icon when the image fails to load."},vueComponent:yO,reactComponent:_O,vueSource:kO,reactSource:wO}],api:{props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:{"zh-CN":"头像尺寸","en-US":"Avatar size"}},{name:"shape",type:"'circle' | 'square'",default:"'circle'",description:{"zh-CN":"头像形状","en-US":"Avatar shape"}},{name:"src",type:"string",default:"—",description:{"zh-CN":"图片地址（加载失败时回退默认图标或插槽内容）","en-US":"Image URL (falls back to the default icon or slot content on load failure)"}},{name:"alt",type:"string",default:"—",description:{"zh-CN":"图片 alt（未提供时按装饰图处理，读屏跳过）","en-US":"Image alt (treated as decorative and skipped by screen readers when not provided)"}},{name:"onError",type:"() => void",default:"—",description:{"zh-CN":"图片加载失败回调","en-US":"Callback when the image fails to load"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"error",react:"onError",payload:"—",description:{"zh-CN":"图片加载失败时触发","en-US":"Fired when the image fails to load"}}],slots:[{vue:"icon",react:"renderIcon",description:{"zh-CN":"自定义占位图标（无 src / 加载失败时替换内置 user 图标）","en-US":"Custom placeholder icon (replaces the built-in user icon when there is no src or loading fails)"}},{vue:"default",react:"children",description:{"zh-CN":"自定义内容（文字 / 图标；优先级低于成功的图片）","en-US":"Custom content (text / icon; lower priority than a successfully loaded image)"}}]},notes:[{"zh-CN":"同时提供 src 与插槽内容时，图片加载成功只显示图片；失败后才显示插槽回退内容。","en-US":"When both src and slot content are provided, only the image shows on successful load; the slot fallback appears only after a failure."}],a11y:[{"zh-CN":"提供 alt 时图片具备替代文本；纯装饰头像建议省略 alt，由读屏跳过。","en-US":"The image gets alternative text when alt is provided; omit alt for purely decorative avatars so screen readers skip them."}]},zO=D({__name:"basic",setup(e){return(t,n)=>(g(),ae(r(nc),{description:r(U)()?"暂无数据，去创建第一条吧":"No data yet — create the first one"},{default:E(()=>[z(r(W),{type:"primary"},{default:E(()=>[G($(r(U)()?"立即创建":"Create now"),1)]),_:1})]),_:1},8,["description"]))}}),UO={class:"demo-column"},$O=D({__name:"image",setup(e){return(t,n)=>(g(),x("div",UO,[z(r(nc),{description:r(U)()?"自定义插画":"Custom illustration"},{image:E(()=>[...n[0]||(n[0]=[G("🔍",-1)])]),_:1},8,["description"]),z(r(nc))]))}});function EO(){const e=se();return c.jsx(cc,{description:e?"暂无数据，去创建第一条吧":"No data yet — create the first one",children:c.jsx(ee,{type:"primary",children:e?"立即创建":"Create now"})})}function RO(){const e=se();return c.jsxs("div",{className:"demo-column",children:[c.jsx(cc,{description:e?"自定义插画":"Custom illustration",renderImage:()=>c.jsx("span",{style:{fontSize:40},children:"🔍"})}),c.jsx(cc,{})]})}const AO=`<script setup lang="ts">
import { Empty, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <Empty :description="isZh() ? '暂无数据，去创建第一条吧' : 'No data yet — create the first one'">
    <Button type="primary">{{ isZh() ? '立即创建' : 'Create now' }}</Button>
  </Empty>
</template>
`,OO=`<script setup lang="ts">
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
`,BO=`import { Empty, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function EmptyBasicDemo() {
  const isZh = useIsZh();
  return (
    <Empty description={isZh ? '暂无数据，去创建第一条吧' : 'No data yet — create the first one'}>
      <Button type="primary">{isZh ? '立即创建' : 'Create now'}</Button>
    </Empty>
  );
}
`,ZO=`import { Empty } from '@xui-design/react';
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
`,jO={name:"Empty",slug:"empty",title:"空状态",category:"display",summary:{"zh-CN":"空数据 / 无结果时的占位展示，内置默认插画，支持自定义描述、插画与操作区。","en-US":"Placeholder for empty data or no results, with a built-in default illustration and customizable description, illustration, and action area."},features:[{"zh-CN":"内置默认插画，description 提供描述文案（空白时不渲染描述，避免内置 i18n）","en-US":"Built-in default illustration; description provides the text (not rendered when blank, avoiding built-in i18n)"},{"zh-CN":"image 插槽 / renderImage 自定义插画，default 插槽放置操作按钮","en-US":"Customize the illustration via the image slot / renderImage; place action buttons in the default slot"}],scenarios:[{"zh-CN":"列表无数据、搜索无结果、首次使用引导等场景。","en-US":"Scenarios such as empty lists, no search results, or first-use onboarding."}],demos:[{id:"basic",title:{"zh-CN":"描述与操作","en-US":"Description & Action"},description:{"zh-CN":'默认插槽放置"去创建"等引导动作。',"en-US":'The default slot holds guiding actions such as "Create".'},vueComponent:zO,reactComponent:EO,vueSource:AO,reactSource:BO},{id:"image",title:{"zh-CN":"自定义插画与纯默认","en-US":"Custom Illustration & Pure Default"},description:{"zh-CN":"image 插槽覆盖默认插画；不传 description 时仅展示插画。","en-US":"The image slot overrides the default illustration; when description is omitted, only the illustration is shown."},vueComponent:$O,reactComponent:RO,vueSource:OO,reactSource:ZO}],api:{props:[{name:"description",type:"string",default:"—",description:{"zh-CN":"空状态描述文案（未提供或空白时不渲染）","en-US":"Description text of the empty state (not rendered when omitted or blank)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":'底部动作区（如"去创建"按钮）',"en-US":'Bottom action area (e.g., a "Create" button)'}},{vue:"image",react:"renderImage",description:{"zh-CN":"自定义插画（覆盖默认插画）","en-US":"Custom illustration (overrides the default one)"}}]},notes:[{"zh-CN":"组件不内置任何文案，description 完全由使用方决定，便于国际化。","en-US":"The component ships no built-in text; description is fully controlled by the consumer, which simplifies internationalization."}],a11y:[{"zh-CN":"空状态作为说明性区域，描述文本可被读屏朗读，装饰性插画标注为装饰图。","en-US":"The empty state acts as a descriptive region: the description text can be read by screen readers, and the decorative illustration is marked as decorative."}]},MO={class:"demo-column"},DO={class:"demo-article"},LO=D({__name:"basic",setup(e){const t=F(!0);return(n,a)=>(g(),x("div",MO,[z(r(ic),{loading:t.value,rows:3},{default:E(()=>[N("div",DO,[N("h4",null,$(r(U)()?"加载完成后的真实内容":"Real content after loading"),1),N("p",null,$(r(U)()?"这是一段从服务端获取的数据，loading 为 false 时替换骨架屏渲染。":"This is data fetched from the server; skeleton is replaced when loading is false."),1)])]),_:1},8,["loading"]),z(r(W),{size:"sm",onClick:a[0]||(a[0]=l=>t.value=!t.value)},{default:E(()=>[G($(r(U)()?t.value?"加载完成":"重新加载":t.value?"Finish loading":"Reload"),1)]),_:1})]))}}),VO=de(LO,[["__scopeId","data-v-4e6e0b33"]]),HO={class:"demo-column"},IO=D({__name:"variants",setup(e){return(t,n)=>(g(),x("div",HO,[z(r(ic),{avatar:"",rows:2}),z(r(ic),{rows:5})]))}});function FO(){const e=se(),[t,n]=B.useState(!0);return c.jsxs("div",{className:"demo-column",children:[c.jsx(kd,{loading:t,rows:3,children:c.jsxs("div",{children:[c.jsx("h4",{style:{margin:"0 0 8px"},children:e?"加载完成后的真实内容":"Real content after loading"}),c.jsx("p",{style:{margin:0,color:"#6b7280"},children:e?"这是一段从服务端获取的数据，loading 为 false 时替换骨架屏渲染。":"This is data fetched from the server; skeleton is replaced when loading is false."})]})}),c.jsx(ee,{size:"sm",onClick:()=>n(a=>!a),children:e?t?"加载完成":"重新加载":t?"Finish loading":"Reload"})]})}function qO(){return c.jsxs("div",{className:"demo-column",children:[c.jsx(kd,{avatar:!0,rows:2}),c.jsx(kd,{rows:5})]})}const GO=`<script setup lang="ts">
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
`,YO=`<script setup lang="ts">
import { Skeleton } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-column">
    <Skeleton avatar :rows="2" />
    <Skeleton :rows="5" />
  </div>
</template>
`,PO=`import { useState } from 'react';
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
`,KO=`import { Skeleton } from '@xui-design/react';

export default function SkeletonVariantsDemo() {
  return (
    <div className="demo-column">
      <Skeleton avatar rows={2} />
      <Skeleton rows={5} />
    </div>
  );
}
`,XO={name:"Skeleton",slug:"skeleton",title:"骨架屏",category:"display",summary:{"zh-CN":"数据加载中的占位屏，在内容就绪前提供结构感知，支持头像占位与自定义行数。","en-US":"Placeholder screen shown while data is loading, conveying structure before content is ready, with avatar placeholder and customizable row count."},features:[{"zh-CN":"loading 控制骨架 / 真实内容切换，false 时渲染默认插槽内容","en-US":"loading toggles between skeleton and real content; renders the default slot when false"},{"zh-CN":"avatar 显示头部头像占位，rows 配置段落行数（收敛为正整数，默认 3）","en-US":"avatar shows a leading avatar placeholder; rows sets the paragraph line count (coerced to a positive integer, defaults to 3)"}],scenarios:[{"zh-CN":"卡片 / 列表 / 详情页首次加载、弱网等待数据等场景。","en-US":"First-load of cards / lists / detail pages, or waiting for data on slow networks."}],demos:[{id:"basic",title:{"zh-CN":"加载切换","en-US":"Loading Toggle"},description:{"zh-CN":"loading=true 显示骨架，false 渲染插槽中的真实内容。","en-US":"loading=true shows the skeleton; false renders the real content in the slot."},vueComponent:VO,reactComponent:FO,vueSource:GO,reactSource:PO},{id:"variants",title:{"zh-CN":"头像占位与行数","en-US":"Avatar Placeholder & Rows"},description:{"zh-CN":"avatar 渲染圆形头像占位；rows 控制文本段落条数。","en-US":"avatar renders a circular avatar placeholder; rows controls the text line count."},vueComponent:IO,reactComponent:qO,vueSource:YO,reactSource:KO}],api:{props:[{name:"loading",type:"boolean",default:"true",description:{"zh-CN":"加载中状态（true 渲染骨架，false 渲染插槽内容）","en-US":"Loading state (true renders the skeleton, false renders the slot content)"}},{name:"avatar",type:"boolean",default:"false",description:{"zh-CN":"是否显示头部头像占位","en-US":"Whether to show the leading avatar placeholder"}},{name:"rows",type:"number",default:"3",description:{"zh-CN":"段落行数（收敛为正整数）","en-US":"Paragraph line count (coerced to a positive integer)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"真实内容（loading=false 时渲染）","en-US":"Real content (rendered when loading=false)"}}]},notes:[{"zh-CN":"rows 传入 0 或负数等非法值会收敛为 1，保证至少渲染一行。","en-US":"Invalid rows values such as 0 or negatives are coerced to 1, guaranteeing at least one line."}],a11y:[{"zh-CN":"骨架区域标记为忙碌状态（aria-busy），读屏可感知内容正在加载。","en-US":"The skeleton region is marked busy (aria-busy) so screen readers can sense that content is loading."}]},QO={class:"demo-text"},JO=D({__name:"basic",setup(e){const t=F("overview"),n=Y(()=>[{label:U()?"概览":"Overview",value:"overview"},{label:U()?"配置":"Config",value:"config"},{label:U()?"日志":"Logs",value:"logs",disabled:!0}]);return(a,l)=>(g(),ae(r(hv),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),items:n.value},{default:E(({item:i})=>[N("p",QO,$(r(U)()?`${i.label}页的内容（value: ${i.value}）`:`${i.label} panel content (value: ${i.value})`),1)]),_:1},8,["value","items"]))}}),WO={class:"demo-text"},eB=D({__name:"uncontrolled",setup(e){const t=Y(()=>[{label:U()?"章节一":"Chapter 1",value:"ch1"},{label:U()?"章节二":"Chapter 2",value:"ch2"},{label:U()?"章节三":"Chapter 3",value:"ch3"}]);return(n,a)=>(g(),ae(r(hv),{"default-value":"ch2",items:t.value},{default:E(({item:l})=>[N("p",WO,$(r(U)()?`当前激活：${l.label}`:`Active: ${l.label}`),1)]),_:1},8,["items"]))}});function tB(){const e=se(),[t,n]=B.useState("overview"),a=[{label:e?"概览":"Overview",value:"overview"},{label:e?"配置":"Config",value:"config"},{label:e?"日志":"Logs",value:"logs",disabled:!0}];return c.jsx($v,{value:t,onChange:n,items:a,renderPanel:l=>c.jsx("p",{className:"demo-text",children:e?`${l.label}页的内容（value: ${l.value}）`:`${l.label} panel content (value: ${l.value})`})})}function nB(){const e=se(),t=[{label:e?"章节一":"Chapter 1",value:"ch1"},{label:e?"章节二":"Chapter 2",value:"ch2"},{label:e?"章节三":"Chapter 3",value:"ch3"}];return c.jsx($v,{defaultValue:"ch2",items:t,renderPanel:n=>c.jsx("p",{className:"demo-text",children:e?`当前激活：${n.label}`:`Active: ${n.label}`})})}const aB=`<script setup lang="ts">
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
`,lB=`<script setup lang="ts">
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
`,iB=`import { useState } from 'react';
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
`,oB=`import { Tabs } from '@xui-design/react';
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
`,sB={name:"Tabs",slug:"tabs",title:"标签页",category:"navigation",summary:{"zh-CN":"在同一区域切换多个平级内容面板，配置化标签项，支持受控 / 非受控与键盘切换。","en-US":"Switches between multiple peer content panels in the same area, with configurable tab items, controlled / uncontrolled modes, and keyboard navigation."},features:[{"zh-CN":"items 配置标签项（label / value / disabled），受控 value / 非受控 defaultValue","en-US":"items configures tabs (label / value / disabled); controlled value or uncontrolled defaultValue"},{"zh-CN":'面板内容通过作用域插槽获取当前激活项：Vue #default="{ item }"，React renderPanel(item)',"en-US":'Panel content receives the active item via a scoped slot: Vue #default="{ item }", React renderPanel(item)'},{"zh-CN":"禁用标签不可激活；方向键在可用标签间循环移动","en-US":"Disabled tabs cannot be activated; arrow keys cycle through enabled tabs"}],scenarios:[{"zh-CN":"表单分区、详情页多视图、设置项分类等内容平级切换场景。","en-US":"Switching between peer content such as form sections, multi-view detail pages, or grouped settings."}],demos:[{id:"basic",title:{"zh-CN":"受控与禁用项","en-US":"Controlled & Disabled Tabs"},description:{"zh-CN":"外部维护激活 value，disabled 标签不可点击也不参与键盘循环。","en-US":"The active value is maintained externally; disabled tabs are not clickable and are skipped in keyboard cycling."},vueComponent:JO,reactComponent:tB,vueSource:aB,reactSource:iB},{id:"uncontrolled",title:{"zh-CN":"非受控","en-US":"Uncontrolled"},description:{"zh-CN":"仅提供 defaultValue 指定初始激活项，切换由组件内部管理。","en-US":"Only defaultValue sets the initially active tab; switching is managed internally."},vueComponent:eB,reactComponent:nB,vueSource:lB,reactSource:oB}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控激活值（提供即受控）","en-US":"Controlled active value (providing it makes the component controlled)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始激活值","en-US":"Uncontrolled initial active value"}},{name:"items",type:"TabItem[]",default:"—",required:!0,description:{"zh-CN":"标签页配置","en-US":"Tab items configuration"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"激活项变更回调","en-US":"Callback fired when the active tab changes"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"激活标签变更","en-US":"Active tab changed"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:'default="{ item }"',react:"renderPanel(item)",description:{"zh-CN":"面板内容（作用域参数为当前激活的 TabItem）","en-US":"Panel content (scoped param is the currently active TabItem)"}}],types:[{name:"TabItem",definition:`interface TabItem {
  label: string
  value: string
  disabled?: boolean
}`,description:{"zh-CN":"标签页项配置。","en-US":"Tab item configuration."}}]},notes:[{"zh-CN":'Vue 端面板是 default 作用域插槽（#default="{ item }"），不存在名为 item 的具名插槽。',"en-US":'On Vue the panel is the default scoped slot (#default="{ item }"); there is no named slot called item.'},{"zh-CN":"点击禁用标签与通过键盘切换时都会跳过禁用项。","en-US":"Disabled tabs are skipped both when clicked and when switching via keyboard."}],a11y:[{"zh-CN":"标签栏具备 tablist / tab 语义，aria-selected 标识激活项，左右方向键可切换焦点。","en-US":"The tab bar has tablist / tab semantics; aria-selected marks the active tab, and left/right arrow keys move focus."}]},rB={class:"demo-column"},uB={class:"demo-text"},cB=D({__name:"basic",setup(e){const t=F(3);return(n,a)=>(g(),x("div",rB,[z(r(ac),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),total:285},null,8,["value"]),N("p",uB,$(r(U)()?`第 ${t.value} 页 / 共 29 页（每页 10 条，共 285 条）`:`Page ${t.value} / 29 pages (10 per page, 285 total)`),1)]))}}),dB={class:"demo-column"},mB=D({__name:"variants",setup(e){return(t,n)=>(g(),x("div",dB,[z(r(ac),{"default-value":1,total:80,"page-size":20}),z(r(ac),{"default-value":2,total:50,disabled:""})]))}});function pB(){const e=se(),[t,n]=B.useState(3);return c.jsxs("div",{className:"demo-column",children:[c.jsx(_d,{value:t,onChange:n,total:285}),c.jsx("p",{className:"demo-text",children:e?`第 ${t} 页 / 共 29 页（每页 10 条，共 285 条）`:`Page ${t} / 29 pages (10 per page, 285 total)`})]})}function fB(){return c.jsxs("div",{className:"demo-column",children:[c.jsx(_d,{defaultValue:1,total:80,pageSize:20}),c.jsx(_d,{defaultValue:2,total:50,disabled:!0})]})}const hB=`<script setup lang="ts">
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
`,vB=`<script setup lang="ts">
import { Pagination } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-column">
    <Pagination :default-value="1" :total="80" :page-size="20" />
    <Pagination :default-value="2" :total="50" disabled />
  </div>
</template>
`,gB=`import { useState } from 'react';
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
`,bB=`import { Pagination } from '@xui-design/react';

export default function PaginationVariantsDemo() {
  return (
    <div className="demo-column">
      <Pagination defaultValue={1} total={80} pageSize={20} />
      <Pagination defaultValue={2} total={50} disabled />
    </div>
  );
}
`,yB={name:"Pagination",slug:"pagination",title:"分页",category:"navigation",summary:{"zh-CN":"数据分页导航，页码从 1 开始，自动计算总页数并收敛越界操作。","en-US":"Data pagination navigation with 1-based page numbers, automatically computing the total page count and clamping out-of-range operations."},features:[{"zh-CN":"受控 value / 非受控 defaultValue，页码从 1 开始，Vue 端支持 v-model:value","en-US":"Controlled value / uncontrolled defaultValue, 1-based page numbers, and v-model:value support on Vue"},{"zh-CN":"total 总条数 + pageSize 每页条数（默认 10）自动计算总页数","en-US":"total item count plus pageSize per-page count (default 10) automatically computes the total page count"},{"zh-CN":"上一页 / 下一页在边界自动 no-op，越界页码自动 clamp","en-US":"Prev / next become no-ops at boundaries; out-of-range page numbers are clamped automatically"},{"zh-CN":"disabled 禁用整个分页器","en-US":"disabled turns off the whole paginator"}],scenarios:[{"zh-CN":"长列表 / 表格 / 搜索结果等数据量较大需要分页浏览的场景。","en-US":"Browsing large datasets page by page, such as long lists, tables, or search results."}],demos:[{id:"basic",title:{"zh-CN":"受控分页","en-US":"Controlled Pagination"},description:{"zh-CN":"285 条数据、每页 10 条共 29 页，外部同步当前页码。","en-US":"285 items at 10 per page make 29 pages, with the current page synced externally."},vueComponent:cB,reactComponent:pB,vueSource:hB,reactSource:gB},{id:"variants",title:{"zh-CN":"每页条数与禁用","en-US":"Page Size & Disabled"},description:{"zh-CN":"pageSize 改变分页粒度；disabled 下所有翻页操作无效。","en-US":"pageSize changes the paging granularity; all paging operations are inert while disabled."},vueComponent:mB,reactComponent:fB,vueSource:vB,reactSource:bB}],api:{props:[{name:"value",type:"number",default:"—",description:{"zh-CN":"受控当前页（从 1 开始）","en-US":"Controlled current page (1-based)"}},{name:"defaultValue",type:"number",default:"1",description:{"zh-CN":"非受控初始页码","en-US":"Uncontrolled initial page number"}},{name:"total",type:"number",default:"—",required:!0,description:{"zh-CN":"数据总条数","en-US":"Total number of items"}},{name:"pageSize",type:"number",default:"10",description:{"zh-CN":"每页条数","en-US":"Items per page"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"onChange",type:"(page: number) => void",default:"—",description:{"zh-CN":"页码变更回调","en-US":"Callback fired when the page changes"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"page: number",description:{"zh-CN":"页码变更","en-US":"Page changed"}},{vue:"update:value",react:"—",payload:"number",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:"prevIcon",react:"renderPrevIcon",description:{"zh-CN":"自定义上一页图标","en-US":"Custom previous-page icon"}},{vue:"nextIcon",react:"renderNextIcon",description:{"zh-CN":"自定义下一页图标","en-US":"Custom next-page icon"}}]},notes:[{"zh-CN":"当前页超出总页数时（如 total 变小）会自动 clamp 到有效范围并触发一次 change。","en-US":"When the current page exceeds the total page count (e.g., total shrinks), it is clamped to the valid range and one change is fired."},{"zh-CN":"total 变化后总页数自动重算，无需外部维护页数。","en-US":"The total page count is recomputed automatically when total changes, so no external page-count bookkeeping is needed."}],a11y:[{"zh-CN":"导航区域具备分页语义，页码按钮可键盘聚焦，当前页携带 aria-current，边界按钮自动禁用。","en-US":"The nav region has pagination semantics; page buttons are keyboard-focusable, the current page carries aria-current, and boundary buttons disable automatically."}]},SB={class:"demo-column"},xB=D({__name:"basic",setup(e){const t=Y(()=>U()?[{label:"首页"},{label:"组件库"},{label:"面包屑 Breadcrumb"}]:[{label:"Home"},{label:"Components"},{label:"Breadcrumb"}]);return(n,a)=>(g(),x("div",SB,[z(r(lc),{items:t.value},null,8,["items"]),z(r(lc),{items:t.value,separator:">"},null,8,["items"])]))}}),_B={class:"demo-column"},CB={class:"demo-text"},kB=D({__name:"click",setup(e){const t=F(U()?"（点击前级项试试）":"(Try clicking a non-last item)"),n=Y(()=>U()?[{label:"首页"},{label:"归档（禁用）",disabled:!0},{label:"文章详情"}]:[{label:"Home"},{label:"Archive (disabled)",disabled:!0},{label:"Article Detail"}]),a=(l,i)=>{t.value=U()?`点击了第 ${i} 项：${l.label}`:`Clicked item ${i}: ${l.label}`};return(l,i)=>(g(),x("div",_B,[z(r(lc),{items:n.value,onItemClick:a},null,8,["items"]),N("p",CB,$(t.value)+$(r(U)()?"（末项为当前页，不可点击）":" (last item is the current page, not clickable)"),1)]))}});function NB(){const t=se()?[{label:"首页"},{label:"组件库"},{label:"面包屑 Breadcrumb"}]:[{label:"Home"},{label:"Components"},{label:"Breadcrumb"}];return c.jsxs("div",{className:"demo-column",children:[c.jsx(Cd,{items:t}),c.jsx(Cd,{items:t,separator:">"})]})}function wB(){const e=se(),[t,n]=B.useState(e?"（点击前级项试试）":"(Try clicking a non-last item)"),a=e?[{label:"首页"},{label:"归档（禁用）",disabled:!0},{label:"文章详情"}]:[{label:"Home"},{label:"Archive (disabled)",disabled:!0},{label:"Article Detail"}];return c.jsxs("div",{className:"demo-column",children:[c.jsx(Cd,{items:a,onItemClick:(l,i)=>n(e?`点击了第 ${i} 项：${l.label}`:`Clicked item ${i}: ${l.label}`)}),c.jsxs("p",{className:"demo-text",children:[t,e?"（末项为当前页，不可点击）":" (last item is the current page, not clickable)"]})]})}const TB=`<script setup lang="ts">
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
`,zB=`<script setup lang="ts">
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
`,UB=`import { Breadcrumb } from '@xui-design/react';
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
`,$B=`import { useState } from 'react';
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
`,EB={name:"Breadcrumb",slug:"breadcrumb",title:"面包屑",category:"navigation",summary:{"zh-CN":"显示当前页面层级路径，支持链接项 / 可点击项与自定义分隔符。","en-US":"Shows the hierarchical path of the current page, supporting link items / clickable items and a custom separator."},features:[{"zh-CN":"items 配置层级，最后一项自动视为当前页（不可点击）","en-US":"items configures the hierarchy; the last item is automatically treated as the current page (not clickable)"},{"zh-CN":"item 存在 href 时渲染为 <a>，否则渲染为可点击 <span>；separator 自定义分隔符（默认 '/'）","en-US":"An item with href renders as <a>, otherwise as a clickable <span>; separator customizes the delimiter (defaults to '/')"},{"zh-CN":"disabled 项与末项不触发 itemClick","en-US":"Disabled items and the last item do not fire itemClick"}],scenarios:[{"zh-CN":"详情页层级返回、管理系统内容分区定位等场景。","en-US":"Scenarios such as hierarchical back-navigation on detail pages or section location in admin systems."}],demos:[{id:"basic",title:{"zh-CN":"基础与分隔符","en-US":"Basic & Separator"},description:{"zh-CN":"末项为当前页；separator 可替换默认斜杠。","en-US":"The last item is the current page; separator can replace the default slash."},vueComponent:xB,reactComponent:NB,vueSource:TB,reactSource:UB},{id:"click",title:{"zh-CN":"点击与禁用","en-US":"Click & Disabled"},description:{"zh-CN":"无 href 的项点击触发 itemClick；disabled 项与末项被忽略。","en-US":"Clicking an item without href fires itemClick; disabled items and the last item are ignored."},vueComponent:kB,reactComponent:wB,vueSource:zB,reactSource:$B}],api:{props:[{name:"items",type:"BreadcrumbItem[]",default:"[]",description:{"zh-CN":"面包屑项列表（末项视为当前页）","en-US":"Breadcrumb item list (the last item is treated as the current page)"}},{name:"separator",type:"string",default:"'/'",description:{"zh-CN":"分隔符","en-US":"Separator"}},{name:"onItemClick",type:"(item: BreadcrumbItem, index: number) => void",default:"—",description:{"zh-CN":"点击可导航项回调（末项 / disabled 不触发）","en-US":"Callback for clicking a navigable item (not fired for the last item or disabled ones)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"itemClick",react:"onItemClick",payload:"item: BreadcrumbItem, index: number",description:{"zh-CN":"点击导航项","en-US":"Navigable item clicked"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"自定义内容区（覆盖 items 渲染）","en-US":"Custom content area (overrides items rendering)"}}],types:[{name:"BreadcrumbItem",definition:`interface BreadcrumbItem {
  label: string
  href?: string
  disabled?: boolean
}`,description:{"zh-CN":"面包屑层级项；href 存在渲染为链接。","en-US":"Breadcrumb hierarchy item; renders as a link when href is present."}}]},notes:[{"zh-CN":"组件本身不拦截链接默认导航（对齐 Element Plus），SPA 内路由拦截由应用层负责。","en-US":"The component does not intercept the default link navigation (aligned with Element Plus); route interception in an SPA is handled by the application layer."},{"zh-CN":"在 hash 路由应用中若不希望改变地址，可省略 href，改用 itemClick 处理跳转。","en-US":"In hash-routed apps, omit href and handle navigation via itemClick if you do not want to change the address."}],a11y:[{"zh-CN":'根节点使用 nav + aria-label="面包屑"，当前页以 aria-current 标识。',"en-US":'The root uses nav with aria-label="面包屑", and the current page is marked with aria-current.'}]},RB={class:"demo-column"},AB=D({__name:"basic",setup(e){return(t,n)=>(g(),x("div",RB,[z(r(Nl),{type:"info",title:r(U)()?"信息提示":"Info",description:r(U)()?"这是一条普通的信息性说明。":"A normal informational message."},null,8,["title","description"]),z(r(Nl),{type:"success",title:r(U)()?"成功提示":"Success",description:r(U)()?"操作已成功完成。":"The operation completed successfully."},null,8,["title","description"]),z(r(Nl),{type:"warning",title:r(U)()?"警告提示":"Warning",description:r(U)()?"请注意当前操作可能产生的影响。":"Note the potential impact of the current operation."},null,8,["title","description"]),z(r(Nl),{type:"error",title:r(U)()?"错误提示":"Error",description:r(U)()?"操作失败，请稍后重试。":"Operation failed, please retry later."},null,8,["title","description"])]))}}),OB={class:"demo-column"},BB=D({__name:"closable",setup(e){return(t,n)=>(g(),x("div",OB,[z(r(Nl),{type:"warning","show-icon":"",closable:""},{title:E(()=>[N("strong",null,$(r(U)()?"可关闭且带图标":"Closable with icon"),1)]),default:E(()=>[G($(r(U)()?"描述内容通过默认插槽传入，支持更灵活的排版。":"Description content is passed via the default slot, allowing flexible layout.")+" ",1)]),_:1})]))}});function ZB(){const e=se();return c.jsxs("div",{className:"demo-column",children:[c.jsx(Tl,{type:"info",title:e?"信息提示":"Info",description:e?"这是一条普通的信息性说明。":"A normal informational message."}),c.jsx(Tl,{type:"success",title:e?"成功提示":"Success",description:e?"操作已成功完成。":"The operation completed successfully."}),c.jsx(Tl,{type:"warning",title:e?"警告提示":"Warning",description:e?"请注意当前操作可能产生的影响。":"Note the potential impact of the current operation."}),c.jsx(Tl,{type:"error",title:e?"错误提示":"Error",description:e?"操作失败，请稍后重试。":"Operation failed, please retry later."})]})}function jB(){const e=se();return c.jsx("div",{className:"demo-column",children:c.jsx(Tl,{type:"warning",showIcon:!0,closable:!0,renderTitle:()=>c.jsx("strong",{children:e?"可关闭且带图标":"Closable with icon"}),children:e?"描述内容通过 children 传入，支持更灵活的排版。":"Description content is passed via children, allowing flexible layout."})})}const MB=`<script setup lang="ts">
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
`,DB=`<script setup lang="ts">
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
`,LB=`import { Alert } from '@xui-design/react';
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
`,VB=`import { Alert } from '@xui-design/react';
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
`,HB={name:"Alert",slug:"alert",title:"警告提示",category:"feedback",summary:{"zh-CN":"静态内嵌的提示横幅，用于展示需用户关注的信息，支持四种语义、图标与关闭。","en-US":"A static inline banner for information that needs user attention, with four semantic types, icon and closable support."},features:[{"zh-CN":"四种语义类型：info / success / warning / error","en-US":"Four semantic types: info / success / warning / error"},{"zh-CN":"title 标题 + description 描述（描述也可用默认插槽 / children）","en-US":"title plus description (description can also use the default slot / children)"},{"zh-CN":"showIcon 显示类型图标，closable 可手动关闭（隐藏后触发 close）","en-US":"showIcon shows the type icon; closable allows manual close (close fires after hiding)"},{"zh-CN":"title / icon 均提供插槽，可完全自定义（React 对应 renderTitle / renderIcon）","en-US":"title and icon both offer slots for full customization (renderTitle / renderIcon in React)"}],scenarios:[{"zh-CN":"表单校验汇总、页面级通知、操作后果说明等常驻提示场景。","en-US":"Persistent inline notices such as form validation summaries, page-level notifications, and consequence explanations."}],demos:[{id:"basic",title:{"zh-CN":"四种语义","en-US":"Four Semantic Types"},description:{"zh-CN":"通过 type 切换 info / success / warning / error 配色与语义。","en-US":"Use type to switch between info / success / warning / error colors and semantics."},vueComponent:AB,reactComponent:ZB,vueSource:MB,reactSource:LB},{id:"closable",title:{"zh-CN":"图标 / 关闭 / 自定义标题","en-US":"Icon / Closable / Custom Title"},description:{"zh-CN":"showIcon + closable，标题通过 title 插槽自定义。","en-US":"showIcon plus closable; the title is customized via the title slot."},vueComponent:BB,reactComponent:jB,vueSource:DB,reactSource:VB}],api:{props:[{name:"type",type:"'info' | 'success' | 'warning' | 'error'",default:"'info'",description:{"zh-CN":"语义类型","en-US":"Semantic type"}},{name:"title",type:"string",default:"—",description:{"zh-CN":"标题","en-US":"Title"}},{name:"description",type:"string",default:"—",description:{"zh-CN":"辅助描述（默认插槽的回退内容）","en-US":"Supporting description (fallback for the default slot)"}},{name:"closable",type:"boolean",default:"false",description:{"zh-CN":"是否可关闭","en-US":"Whether it is closable"}},{name:"showIcon",type:"boolean",default:"false",description:{"zh-CN":"是否显示类型图标","en-US":"Whether to show the type icon"}},{name:"onClose",type:"() => void",default:"—",description:{"zh-CN":"关闭回调（组件隐藏后触发）","en-US":"Close callback (fired after the component hides)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"close",react:"onClose",payload:"—",description:{"zh-CN":"点击关闭按钮、提示隐藏后触发","en-US":"Fired when the close button is clicked and the alert has hidden"}}],slots:[{vue:"closeIcon",react:"renderCloseIcon",description:{"zh-CN":"自定义关闭图标（替换内置 close）","en-US":"Custom close icon (replaces the built-in close icon)"}},{vue:"default",react:"children",description:{"zh-CN":"描述内容（覆盖 description prop）","en-US":"Description content (overrides the description prop)"}},{vue:"title",react:"renderTitle",description:{"zh-CN":"标题（覆盖 title prop）","en-US":"Title (overrides the title prop)"}},{vue:"icon",react:"renderIcon",description:{"zh-CN":"类型图标（覆盖默认图标，showIcon 开启时生效）","en-US":"Type icon (overrides the default icon when showIcon is on)"}}]},notes:[{"zh-CN":"Alert 为页面内静态提示（非浮层）；需要自动消失的全局浮层请使用 Message。","en-US":"Alert is a static in-page notice, not a floating layer. Use Message for auto-dismissing global toasts."}],a11y:[{"zh-CN":'提示区域按类型携带 role="status" / "alert" 等语义，关闭按钮可键盘操作。',"en-US":'The alert region carries role="status" / "alert" semantics per type; the close button is keyboard operable.'}]},IB={class:"demo-row"},FB=D({__name:"basic",setup(e){return(t,n)=>(g(),x("div",IB,[z(r(Vn),{content:r(U)()?"上方提示":"Top tooltip",placement:"top"},{default:E(()=>[z(r(W),null,{default:E(()=>[...n[0]||(n[0]=[G("Top",-1)])]),_:1})]),_:1},8,["content"]),z(r(Vn),{content:r(U)()?"下方提示":"Bottom tooltip",placement:"bottom"},{default:E(()=>[z(r(W),null,{default:E(()=>[...n[1]||(n[1]=[G("Bottom",-1)])]),_:1})]),_:1},8,["content"]),z(r(Vn),{content:r(U)()?"左侧提示":"Left tooltip",placement:"left"},{default:E(()=>[z(r(W),null,{default:E(()=>[...n[2]||(n[2]=[G("Left",-1)])]),_:1})]),_:1},8,["content"]),z(r(Vn),{content:r(U)()?"右侧提示":"Right tooltip",placement:"right"},{default:E(()=>[z(r(W),null,{default:E(()=>[...n[3]||(n[3]=[G("Right",-1)])]),_:1})]),_:1},8,["content"])]))}}),qB={class:"demo-column"},GB=D({__name:"trigger",setup(e){return(t,n)=>(g(),x("div",qB,[z(r(Vn),{content:r(U)()?"聚焦输入框时显示":"Shown when the input is focused",trigger:"focus"},{default:E(()=>[z(r(st),{placeholder:r(U)()?"点击聚焦查看 focus 提示":"Click to focus and see the focus tooltip"},null,8,["placeholder"])]),_:1},8,["content"]),z(r(Vn),{content:r(U)()?"禁用后不再响应":"No response when disabled",disabled:""},{default:E(()=>[z(r(W),null,{default:E(()=>[G($(r(U)()?"禁用的 Tooltip":"Disabled Tooltip"),1)]),_:1})]),_:1},8,["content"])]))}});function YB(){const e=se();return c.jsxs("div",{className:"demo-row",children:[c.jsx(Fn,{content:e?"上方提示":"Top tooltip",placement:"top",children:c.jsx(ee,{children:"Top"})}),c.jsx(Fn,{content:e?"下方提示":"Bottom tooltip",placement:"bottom",children:c.jsx(ee,{children:"Bottom"})}),c.jsx(Fn,{content:e?"左侧提示":"Left tooltip",placement:"left",children:c.jsx(ee,{children:"Left"})}),c.jsx(Fn,{content:e?"右侧提示":"Right tooltip",placement:"right",children:c.jsx(ee,{children:"Right"})})]})}function PB(){const e=se();return c.jsxs("div",{className:"demo-column",children:[c.jsx(Fn,{content:e?"聚焦输入框时显示":"Shown when the input is focused",trigger:"focus",children:c.jsx(ut,{placeholder:e?"点击聚焦查看 focus 提示":"Click to focus and see the focus tooltip"})}),c.jsx(Fn,{content:e?"禁用后不再响应":"No response when disabled",disabled:!0,children:c.jsx(ee,{children:e?"禁用的 Tooltip":"Disabled Tooltip"})})]})}const KB=`<script setup lang="ts">
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
`,XB=`<script setup lang="ts">
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
`,QB=`import { Tooltip, Button } from '@xui-design/react';
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
`,JB=`import { Tooltip, Input, Button } from '@xui-design/react';
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
`,WB={name:"Tooltip",slug:"tooltip",title:"文字提示",category:"feedback",summary:{"zh-CN":"鼠标悬停或聚焦时展示的简单文字气泡，CSS 包裹定位（非 portal），支持四方位与两种触发。","en-US":"A simple text bubble shown on hover or focus, positioned with a CSS wrapper (no portal), supporting four placements and two triggers."},features:[{"zh-CN":"placement 支持 top / bottom / left / right 四个方位","en-US":"placement supports top / bottom / left / right"},{"zh-CN":"trigger 支持 hover（默认）与 focus；disabled 后不再响应触发","en-US":"trigger supports hover (default) and focus; disabled stops responding to triggers"},{"zh-CN":"content 属性或 content 插槽 / renderContent 自定义提示内容","en-US":"Tooltip content via the content prop or the content slot / renderContent"}],scenarios:[{"zh-CN":"图标按钮说明、字段含义解释、快捷操作提示等轻量辅助说明场景。","en-US":"Lightweight hints such as icon button labels, field explanations, and shortcut tips."}],demos:[{id:"basic",title:{"zh-CN":"四个方位","en-US":"Four Placements"},description:{"zh-CN":"鼠标悬停（或键盘聚焦）触发元素查看对应方位的气泡。","en-US":"Hover (or keyboard-focus) the trigger elements to see the bubble at each placement."},vueComponent:FB,reactComponent:YB,vueSource:KB,reactSource:QB},{id:"trigger",title:{"zh-CN":"focus 触发与禁用","en-US":"Focus Trigger & Disabled"},description:{"zh-CN":'trigger="focus" 适合输入框；disabled 完全关闭提示能力。',"en-US":'trigger="focus" suits input fields; disabled turns the tooltip off entirely.'},vueComponent:GB,reactComponent:PB,vueSource:XB,reactSource:JB}],api:{props:[{name:"content",type:"string",default:"—",description:{"zh-CN":"提示内容（content 插槽 / renderContent 优先）","en-US":"Tooltip content (the content slot / renderContent takes precedence)"}},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'top'",description:{"zh-CN":"弹出位置","en-US":"Popup placement"}},{name:"trigger",type:"'hover' | 'focus'",default:"'hover'",description:{"zh-CN":"触发方式","en-US":"Trigger mode"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态（禁用后不响应触发）","en-US":"Disabled state (stops responding to triggers)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"触发元素","en-US":"Trigger element"}},{vue:"content",react:"renderContent",description:{"zh-CN":"提示内容（优先于 content prop）","en-US":"Tooltip content (takes precedence over the content prop)"}}]},notes:[{"zh-CN":"气泡采用 CSS 包裹定位而非 portal，父容器存在 overflow: hidden 时可能被裁剪，布局时需留意。","en-US":"The bubble uses CSS wrapper positioning instead of a portal, so it can be clipped by a parent with overflow: hidden; mind your layout."},{"zh-CN":"自带视口避让：首选方位空间不足时自动翻转到对侧，横向 / 纵向溢出视口边缘时自动钳制，滚动与窗口 resize 时实时重算。","en-US":"Built-in viewport collision handling: flips to the opposite side when the preferred placement lacks space, clamps at viewport edges horizontally / vertically, and recalculates on scroll and window resize."}],a11y:[{"zh-CN":"focus 触发天然支持键盘；hover 触发元素同样可聚焦，提示与触发元素通过 aria-describedby 关联。","en-US":"The focus trigger is keyboard-friendly by nature; hover triggers are also focusable, and the tooltip is linked to its trigger via aria-describedby."}]},e8={class:"demo-row"},t8=D({__name:"basic",setup(e){return(t,n)=>(g(),x("div",e8,[z(r(Li),{size:"sm"}),z(r(Li)),z(r(Li),{size:"lg"}),z(r(Li),{size:"lg",tip:r(U)()?"加载中...":"Loading..."},null,8,["tip"])]))}}),n8={class:"demo-column"},a8={class:"demo-panel"},l8=D({__name:"wrapper",setup(e){const t=F(!0);return(n,a)=>(g(),x("div",n8,[z(r(Li),{spinning:t.value,tip:r(U)()?"数据加载中":"Loading data"},{default:E(()=>[N("div",a8,[N("h4",null,$(r(U)()?"被包裹的内容区":"Wrapped content area"),1),N("p",null,$(r(U)()?"spinning 为 true 时覆盖半透明遮罩，false 时内容正常交互。":"When spinning is true, a semi-transparent overlay covers the content; when false, the content is fully interactive."),1)])]),_:1},8,["spinning","tip"]),z(r(W),{size:"sm",onClick:a[0]||(a[0]=l=>t.value=!t.value)},{default:E(()=>[G($(t.value?r(U)()?"停止加载":"Stop loading":r(U)()?"开始加载":"Start loading"),1)]),_:1})]))}}),i8=de(l8,[["__scopeId","data-v-f7daa9fc"]]);function o8(){const e=se();return c.jsxs("div",{className:"demo-row",children:[c.jsx(Gi,{size:"sm"}),c.jsx(Gi,{}),c.jsx(Gi,{size:"lg"}),c.jsx(Gi,{size:"lg",tip:e?"加载中...":"Loading..."})]})}function s8(){const e=se(),[t,n]=B.useState(!0);return c.jsxs("div",{className:"demo-column",children:[c.jsx(Gi,{spinning:t,tip:e?"数据加载中":"Loading data",children:c.jsxs("div",{style:{padding:16,background:"#f8fafc",borderRadius:8},children:[c.jsx("h4",{style:{margin:"0 0 8px"},children:e?"被包裹的内容区":"Wrapped content area"}),c.jsx("p",{style:{margin:0,color:"#6b7280"},children:e?"spinning 为 true 时覆盖半透明遮罩，false 时内容正常交互。":"When spinning is true, a semi-transparent overlay covers the content; when false, the content is fully interactive."})]})}),c.jsx(ee,{size:"sm",onClick:()=>n(a=>!a),children:t?e?"停止加载":"Stop loading":e?"开始加载":"Start loading"})]})}const r8=`<script setup lang="ts">
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
`,u8=`<script setup lang="ts">
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
`,c8=`import { Spin } from '@xui-design/react';
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
`,d8=`import { useState } from 'react';
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
`,m8={name:"Spin",slug:"spin",title:"加载中",category:"feedback",summary:{"zh-CN":"加载状态指示器，可独立使用，也可包裹内容以遮罩形式表示区块加载。","en-US":"A loading indicator that works standalone or wraps content with a mask to indicate block-level loading."},features:[{"zh-CN":"size 支持 sm / md / lg（默认 md），tip 显示指示器下方提示文案","en-US":"size supports sm / md / lg (default md); tip shows hint text below the indicator"},{"zh-CN":"包裹内容时由 spinning 控制半透明遮罩显隐（默认 true）","en-US":"When wrapping content, spinning toggles the translucent mask (default true)"}],scenarios:[{"zh-CN":"局部数据加载、按钮 / 卡片等待状态、全屏或区块加载占位等场景。","en-US":"Local data loading, button / card pending states, full-screen or block-level loading placeholders."}],demos:[{id:"basic",title:{"zh-CN":"尺寸与提示","en-US":"Sizes & Tip"},description:{"zh-CN":"独立使用的三档指示器，tip 附带文字说明。","en-US":"Three standalone indicator sizes, with tip adding a text hint."},vueComponent:t8,reactComponent:o8,vueSource:r8,reactSource:c8},{id:"wrapper",title:{"zh-CN":"包裹内容","en-US":"Wrapping Content"},description:{"zh-CN":"spinning 时在内容上覆盖遮罩并阻止交互，结束后恢复。","en-US":"While spinning, a mask covers the content and blocks interaction; it is restored when finished."},vueComponent:i8,reactComponent:s8,vueSource:u8,reactSource:d8}],api:{props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:{"zh-CN":"尺寸","en-US":"Size"}},{name:"spinning",type:"boolean",default:"true",description:{"zh-CN":"加载中状态（包裹内容时控制遮罩显隐）","en-US":"Loading state (toggles the mask when wrapping content)"}},{name:"tip",type:"string",default:"—",description:{"zh-CN":"提示文案（显示在指示器下方，空串不渲染）","en-US":"Tip text (shown below the indicator; an empty string renders nothing)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"包裹内容（spinning 时覆盖半透明遮罩）","en-US":"Wrapped content (covered by a translucent mask while spinning)"}}]},notes:[{"zh-CN":"纯展示组件，无事件；指示器动画由样式驱动，可通过 prefers-reduced-motion 减弱。","en-US":"A purely presentational component with no events; the indicator animation is CSS-driven and can be reduced via prefers-reduced-motion."}],a11y:[{"zh-CN":'加载指示器携带 aria-live 区域与 busy 状态，读屏可感知"加载中"；tip 作为可朗读说明。',"en-US":'The indicator carries an aria-live region and busy state so screen readers can perceive "loading"; tip serves as a readable description.'}]},p8={class:"demo-column"},f8={class:"demo-text"},h8=D({__name:"basic",setup(e){const t=F(U()?"（待操作）":"(pending)");return(n,a)=>(g(),x("div",p8,[z(r(nl),{content:r(U)()?"确定要删除这条记录吗？删除后不可恢复。":"Are you sure you want to delete this record? This cannot be undone.",onConfirm:a[0]||(a[0]=l=>t.value=r(U)()?"已确认删除":"Deletion confirmed"),onCancel:a[1]||(a[1]=l=>t.value=r(U)()?"已取消":"Cancelled")},{default:E(()=>[z(r(W),{type:"danger"},{default:E(()=>[G($(r(U)()?"删除记录":"Delete record"),1)]),_:1})]),_:1},8,["content"]),N("p",f8,$(r(U)()?"操作结果：":"Result: ")+$(t.value),1)]))}}),v8={class:"demo-row"},g8=D({__name:"variants",setup(e){return(t,n)=>(g(),x("div",v8,[z(r(nl),{content:r(U)()?"右侧弹出的气泡确认":"Popover confirm on the right",placement:"right","confirm-text":r(U)()?"好的":"OK","cancel-text":r(U)()?"再想想":"Think again"},{default:E(()=>[z(r(W),null,{default:E(()=>[G($(r(U)()?"右侧 + 自定义按钮":"Right + custom buttons"),1)]),_:1})]),_:1},8,["content","confirm-text","cancel-text"]),z(r(nl),{content:r(U)()?"禁用后点击无效":"No effect when disabled",disabled:""},{default:E(()=>[z(r(W),null,{default:E(()=>[G($(r(U)()?"禁用":"Disabled"),1)]),_:1})]),_:1},8,["content"])]))}});function b8(){const e=se(),[t,n]=B.useState(e?"（待操作）":"(pending)");return c.jsxs("div",{className:"demo-column",children:[c.jsx(dl,{content:e?"确定要删除这条记录吗？删除后不可恢复。":"Are you sure you want to delete this record? This cannot be undone.",onConfirm:()=>n(e?"已确认删除":"Deletion confirmed"),onCancel:()=>n(e?"已取消":"Cancelled"),children:c.jsx(ee,{type:"danger",children:e?"删除记录":"Delete record"})}),c.jsxs("p",{className:"demo-text",children:[e?"操作结果：":"Result: ",t]})]})}function y8(){const e=se();return c.jsxs("div",{className:"demo-row",children:[c.jsx(dl,{content:e?"右侧弹出的气泡确认":"Popover confirm on the right",placement:"right",confirmText:e?"好的":"OK",cancelText:e?"再想想":"Think again",children:c.jsx(ee,{children:e?"右侧 + 自定义按钮":"Right + custom buttons"})}),c.jsx(dl,{content:e?"禁用后点击无效":"No effect when disabled",disabled:!0,children:c.jsx(ee,{children:e?"禁用":"Disabled"})})]})}const S8=`<script setup lang="ts">
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
`,x8=`<script setup lang="ts">
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
`,_8=`import { useState } from 'react';
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
`,C8=`import { Popconfirm, Button } from '@xui-design/react';
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
`,k8={name:"Popconfirm",slug:"popconfirm",title:"气泡确认",category:"feedback",summary:{"zh-CN":'点击元素弹出轻量确认气泡，适合"删除"等需要二次确认但不必打断整页的操作。',"en-US":'A lightweight confirmation bubble triggered by clicking an element, ideal for actions like "delete" that need a second confirmation without interrupting the whole page.'},features:[{"zh-CN":"点击触发元素切换气泡，确定 / 取消按钮在收起后分别回调 confirm / cancel","en-US":"Clicking the trigger toggles the bubble; the OK / cancel buttons fire confirm / cancel after the bubble closes"},{"zh-CN":'confirmText / cancelText 自定义按钮文本（未提供时取全局语言包，zh-CN 默认"确定"/"取消"），placement 控制四方位',"en-US":'confirmText / cancelText customize the button labels (falling back to the global locale, zh-CN defaults to "确定"/"取消"); placement controls the four directions'},{"zh-CN":"content 属性或 content 插槽 / renderContent 自定义确认文案；disabled 关闭交互","en-US":"Confirmation text via the content prop or the content slot / renderContent; disabled turns off interaction"},{"zh-CN":"点击气泡外部仅收起，不触发任何回调","en-US":"Clicking outside only closes the bubble without firing any callback"}],scenarios:[{"zh-CN":"删除 / 提交等轻量二次确认、危险操作前置拦截等场景。","en-US":"Lightweight second confirmations for delete / submit actions, or pre-interception of dangerous operations."}],demos:[{id:"basic",title:{"zh-CN":"删除确认","en-US":"Delete Confirmation"},description:{"zh-CN":"点击触发元素弹出确认，确定与取消分别触发不同回调。","en-US":"Click the trigger to pop up the confirmation; OK and cancel fire separate callbacks."},vueComponent:h8,reactComponent:b8,vueSource:S8,reactSource:_8},{id:"variants",title:{"zh-CN":"方位 / 按钮文本 / 禁用","en-US":"Placement / Button Text / Disabled"},description:{"zh-CN":"placement 右侧弹出并自定义按钮文案；disabled 下点击无效。","en-US":"placement pops to the right with custom button text; clicks do nothing when disabled."},vueComponent:g8,reactComponent:y8,vueSource:x8,reactSource:C8}],api:{props:[{name:"content",type:"string",default:"—",description:{"zh-CN":"确认文案（content 插槽 / renderContent 可覆盖）","en-US":"Confirmation text (can be overridden by the content slot / renderContent)"}},{name:"confirmText",type:"string",default:"—",description:{"zh-CN":"确认按钮文本；未提供时取全局语言包（zh-CN：确定）","en-US":"OK button text; falls back to the global locale when omitted (zh-CN: 确定)"}},{name:"cancelText",type:"string",default:"—",description:{"zh-CN":"取消按钮文本；未提供时取全局语言包（zh-CN：取消）","en-US":"Cancel button text; falls back to the global locale when omitted (zh-CN: 取消)"}},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'top'",description:{"zh-CN":"气泡方位","en-US":"Bubble placement"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态（运行时禁用会收起已开气泡）","en-US":"Disabled state (disabling at runtime closes an open bubble)"}},{name:"onConfirm",type:"() => void",default:"—",description:{"zh-CN":"点击确定回调（气泡收起后触发）","en-US":"OK click callback (fired after the bubble closes)"}},{name:"onCancel",type:"() => void",default:"—",description:{"zh-CN":"点击取消回调（气泡收起后触发）","en-US":"Cancel click callback (fired after the bubble closes)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"confirm",react:"onConfirm",payload:"—",description:{"zh-CN":"点击确定（气泡收起后触发）","en-US":"Fired on OK click (after the bubble closes)"}},{vue:"cancel",react:"onCancel",payload:"—",description:{"zh-CN":"点击取消（气泡收起后触发）","en-US":"Fired on cancel click (after the bubble closes)"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"触发元素","en-US":"Trigger element"}},{vue:"content",react:"renderContent",description:{"zh-CN":"确认文案内容（覆盖 content prop）","en-US":"Confirmation content (overrides the content prop)"}}]},notes:[{"zh-CN":"点击外部关闭只收起气泡，不会触发 confirm 或 cancel，便于用户无副作用地放弃操作。","en-US":"Clicking outside only closes the bubble without firing confirm or cancel, letting users back out with no side effects."},{"zh-CN":"气泡为 CSS 包裹定位，与 Tooltip 类似，需注意父容器 overflow 裁剪。","en-US":"The bubble uses CSS wrapper positioning like Tooltip, so watch out for clipping by parent overflow."},{"zh-CN":"自带视口避让：首选方位空间不足时自动翻转（箭头跟随），溢出视口边缘时自动钳制，滚动与窗口 resize 时实时重算。","en-US":"Built-in viewport collision handling: flips when the preferred placement lacks space (the arrow follows), clamps at viewport edges, and recalculates on scroll and window resize."}],a11y:[{"zh-CN":"确认 / 取消为原生按钮可键盘操作，气泡打开后焦点进入弹层，Esc 可取消关闭。","en-US":"The OK / cancel buttons are native and keyboard operable; focus moves into the popup when it opens, and Esc cancels and closes it."}]},N8=D({__name:"basic",setup(e){const t=F(null),n=a=>{alert(U()?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return(a,l)=>(g(),ae(r(Br),{ref_key:"formRef",ref:t,"initial-values":{username:"",email:""},rules:{username:[{type:"required",message:r(U)()?"请输入用户名":"Username is required"}],email:[{type:"required",message:r(U)()?"请输入邮箱":"Email is required"},{type:"email",message:r(U)()?"邮箱格式不正确":"Invalid email format"}]},onSubmit:n},{actions:E(()=>[z(r(W),{type:"primary",onClick:l[0]||(l[0]=i=>{var o;return(o=t.value)==null?void 0:o.submit()})},{default:E(()=>[G($(r(U)()?"提交":"Submit"),1)]),_:1}),z(r(W),{onClick:l[1]||(l[1]=i=>{var o;return(o=t.value)==null?void 0:o.resetFields()})},{default:E(()=>[G($(r(U)()?"重置":"Reset"),1)]),_:1})]),default:E(()=>[z(r($t),{name:"username",label:r(U)()?"用户名":"Username"},{default:E(()=>[z(r(st),{placeholder:r(U)()?"请输入用户名":"Enter username"},null,8,["placeholder"])]),_:1},8,["label"]),z(r($t),{name:"email",label:r(U)()?"邮箱":"Email"},{default:E(()=>[z(r(st),{placeholder:r(U)()?"请输入邮箱":"Enter email"},null,8,["placeholder"])]),_:1},8,["label"])]),_:1},8,["rules"]))}}),w8=D({__name:"validation",setup(e){const t=F(null),n=a=>{alert(U()?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return(a,l)=>(g(),ae(r(Br),{ref_key:"formRef",ref:t,"initial-values":{name:"",email:"",phone:"",password:"",confirm:"",type:"personal",company:""},rules:{name:[{type:"required",message:r(U)()?"姓名必填":"Name is required"}],email:[{type:"required",message:r(U)()?"邮箱必填":"Email is required"},{type:"email",message:r(U)()?"邮箱格式不正确":"Invalid email format"}],phone:[{type:"required",message:r(U)()?"手机号必填":"Phone is required"},{type:"phone",message:r(U)()?"手机号格式不正确":"Invalid phone number"}],password:[{type:"required",message:r(U)()?"密码必填":"Password is required"},{type:"length",min:6,message:r(U)()?"密码至少6位":"Password must be 6+ chars"}],confirm:[{type:"required",message:r(U)()?"请确认密码":"Please confirm password"},{type:"custom",message:r(U)()?"两次密码不一致":"Passwords do not match",validator:(i,o)=>o.password===o.confirm}],company:[{type:"required",when:i=>i.type==="enterprise",message:r(U)()?"企业名称必填":"Company name is required"}]},onSubmit:n},{actions:E(()=>[z(r(W),{type:"primary",onClick:l[0]||(l[0]=i=>{var o;return(o=t.value)==null?void 0:o.submit()})},{default:E(()=>[G($(r(U)()?"提交":"Submit"),1)]),_:1}),z(r(W),{onClick:l[1]||(l[1]=i=>{var o;return(o=t.value)==null?void 0:o.resetFields()})},{default:E(()=>[G($(r(U)()?"重置":"Reset"),1)]),_:1})]),default:E(()=>[z(r($t),{name:"name",label:r(U)()?"姓名":"Name"},{default:E(()=>[z(r(st),{placeholder:r(U)()?"请输入姓名":"Enter name"},null,8,["placeholder"])]),_:1},8,["label"]),z(r($t),{name:"email",label:r(U)()?"邮箱":"Email"},{default:E(()=>[z(r(st),{placeholder:r(U)()?"请输入邮箱":"Enter email"},null,8,["placeholder"])]),_:1},8,["label"]),z(r($t),{name:"phone",label:r(U)()?"手机号":"Phone"},{default:E(()=>[z(r(st),{placeholder:r(U)()?"请输入手机号":"Enter phone"},null,8,["placeholder"])]),_:1},8,["label"]),z(r($t),{name:"type",label:r(U)()?"类型":"Type"},{default:E(()=>[z(r(qn),{options:[{label:r(U)()?"个人":"Personal",value:"personal"},{label:r(U)()?"企业":"Enterprise",value:"enterprise"}]},null,8,["options"])]),_:1},8,["label"]),z(r($t),{name:"company",label:r(U)()?"公司":"Company"},{default:E(()=>[z(r(st),{placeholder:r(U)()?"企业用户必填":"Required for enterprise"},null,8,["placeholder"])]),_:1},8,["label"]),z(r($t),{name:"password",label:r(U)()?"密码":"Password"},{default:E(()=>[z(r(st),{type:"password",placeholder:r(U)()?"至少6位":"At least 6 chars"},null,8,["placeholder"])]),_:1},8,["label"]),z(r($t),{name:"confirm",label:r(U)()?"确认密码":"Confirm"},{default:E(()=>[z(r(st),{type:"password",placeholder:r(U)()?"再输一次":"Re-enter password"},null,8,["placeholder"])]),_:1},8,["label"])]),_:1},8,["rules"]))}}),T8=D({__name:"dynamic",setup(e){const t=F(null),n=F([{key:0,label:U()?"联系人 1":"Contact 1"}]);let a=1;const l=()=>{a+=1,n.value.push({key:a,label:U()?`联系人 ${n.value.length+1}`:`Contact ${n.value.length+1}`})},i=s=>{n.value.splice(s,1)},o=s=>{alert(U()?`提交成功：${JSON.stringify(s)}`:`Submitted: ${JSON.stringify(s)}`)};return(s,u)=>(g(),ae(r(Br),{ref_key:"formRef",ref:t,"initial-values":{},onSubmit:o},{actions:E(()=>[z(r(W),{type:"primary",onClick:u[0]||(u[0]=d=>{var p;return(p=t.value)==null?void 0:p.submit()})},{default:E(()=>[G($(r(U)()?"提交":"Submit"),1)]),_:1}),z(r(W),{onClick:u[1]||(u[1]=d=>{var p;return(p=t.value)==null?void 0:p.resetFields()})},{default:E(()=>[G($(r(U)()?"重置":"Reset"),1)]),_:1})]),default:E(()=>[(g(!0),x(ne,null,pe(n.value,(d,p)=>(g(),ae(r($t),{key:d.key,name:`contact_${d.key}`,label:d.label},{extra:E(()=>[n.value.length>1?(g(),ae(r(W),{key:0,size:"sm",onClick:m=>i(p)},{default:E(()=>[G($(r(U)()?"删除":"Remove"),1)]),_:1},8,["onClick"])):H("",!0)]),default:E(()=>[z(r(st),{placeholder:r(U)()?"请输入":"Enter value"},null,8,["placeholder"])]),_:2},1032,["name","label"]))),128)),z(r($t),null,{default:E(()=>[z(r(W),{type:"primary",onClick:l},{default:E(()=>[G($(r(U)()?"添加字段":"Add Field"),1)]),_:1})]),_:1})]),_:1},512))}}),z8={class:"demo-column"},U8={style:{display:"flex",gap:"16px","align-items":"center","margin-bottom":"8px"}},$8=D({__name:"layout",setup(e){const t=F(!1),n=F("right");return(a,l)=>(g(),x("div",z8,[N("div",U8,[N("label",null,$(r(U)()?"禁用表单":"Disabled"),1),z(r(Bt),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i)},null,8,["value"]),N("label",null,$(r(U)()?"标签位置":"Label"),1),z(r(Bt),{value:n.value==="top","checked-text":r(U)()?"顶部":"Top","unchecked-text":r(U)()?"右":"Right",onChange:l[1]||(l[1]=i=>n.value=i?"top":"right")},null,8,["value","checked-text","unchecked-text"])]),z(r(Br),{disabled:t.value,"label-position":n.value,"initial-values":{name:"Alice",email:"alice@test.com"}},{actions:E(()=>[z(r(W),{type:"primary",disabled:t.value},{default:E(()=>[G($(r(U)()?"保存":"Save"),1)]),_:1},8,["disabled"])]),default:E(()=>[z(r($t),{name:"name",label:r(U)()?"姓名":"Name"},{default:E(()=>[z(r(st))]),_:1},8,["label"]),z(r($t),{name:"email",label:r(U)()?"邮箱":"Email"},{default:E(()=>[z(r(st))]),_:1},8,["label"]),z(r($t),{name:"bio",label:r(U)()?"简介":"Bio"},{default:E(()=>[z(r(st),{type:"search",placeholder:r(U)()?"一句话介绍自己":"Describe yourself"},null,8,["placeholder"])]),_:1},8,["label"])]),_:1},8,["disabled","label-position"])]))}});function E8(){const e=se(),t=B.useRef(null),n=a=>{alert(e?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return c.jsxs(lu,{ref:t,initialValues:{username:"",email:""},rules:{username:[{type:"required",message:e?"请输入用户名":"Username is required"}],email:[{type:"required",message:e?"请输入邮箱":"Email is required"},{type:"email",message:e?"邮箱格式不正确":"Invalid email format"}]},onSubmit:n,children:[c.jsx(Rt,{name:"username",label:e?"用户名":"Username",children:c.jsx(ut,{placeholder:e?"请输入用户名":"Enter username"})}),c.jsx(Rt,{name:"email",label:e?"邮箱":"Email",children:c.jsx(ut,{placeholder:e?"请输入邮箱":"Enter email"})}),c.jsxs("div",{className:"xui-form__actions",children:[c.jsx(ee,{type:"primary",onClick:()=>{var a;return(a=t.current)==null?void 0:a.submit()},children:e?"提交":"Submit"}),c.jsx(ee,{onClick:()=>{var a;return(a=t.current)==null?void 0:a.resetFields()},children:e?"重置":"Reset"})]})]})}function R8(){const e=se(),t=B.useRef(null),n=a=>{alert(e?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return c.jsxs(lu,{ref:t,initialValues:{name:"",email:"",phone:"",password:"",confirm:"",type:"personal",company:""},rules:{name:[{type:"required",message:e?"姓名必填":"Name is required"}],email:[{type:"required",message:e?"邮箱必填":"Email is required"},{type:"email",message:e?"邮箱格式不正确":"Invalid email format"}],phone:[{type:"required",message:e?"手机号必填":"Phone is required"},{type:"phone",message:e?"手机号格式不正确":"Invalid phone number"}],password:[{type:"required",message:e?"密码必填":"Password is required"},{type:"length",min:6,message:e?"密码至少6位":"Password must be 6+ chars"}],confirm:[{type:"required",message:e?"请确认密码":"Please confirm password"},{type:"custom",message:e?"两次密码不一致":"Passwords do not match",validator:(a,l)=>l.password===l.confirm}],company:[{type:"required",when:a=>a.type==="enterprise",message:e?"企业名称必填":"Company name is required"}]},onSubmit:n,children:[c.jsx(Rt,{name:"name",label:e?"姓名":"Name",children:c.jsx(ut,{placeholder:e?"请输入姓名":"Enter name"})}),c.jsx(Rt,{name:"email",label:e?"邮箱":"Email",children:c.jsx(ut,{placeholder:e?"请输入邮箱":"Enter email"})}),c.jsx(Rt,{name:"phone",label:e?"手机号":"Phone",children:c.jsx(ut,{placeholder:e?"请输入手机号":"Enter phone"})}),c.jsx(Rt,{name:"type",label:e?"类型":"Type",children:c.jsx(Gn,{options:[{label:e?"个人":"Personal",value:"personal"},{label:e?"企业":"Enterprise",value:"enterprise"}]})}),c.jsx(Rt,{name:"company",label:e?"公司":"Company",children:c.jsx(ut,{placeholder:e?"企业用户必填":"Required for enterprise"})}),c.jsx(Rt,{name:"password",label:e?"密码":"Password",children:c.jsx(ut,{type:"password",placeholder:e?"至少6位":"At least 6 chars"})}),c.jsx(Rt,{name:"confirm",label:e?"确认密码":"Confirm",children:c.jsx(ut,{type:"password",placeholder:e?"再输一次":"Re-enter password"})}),c.jsxs("div",{className:"xui-form__actions",children:[c.jsx(ee,{type:"primary",onClick:()=>{var a;return(a=t.current)==null?void 0:a.submit()},children:e?"提交":"Submit"}),c.jsx(ee,{onClick:()=>{var a;return(a=t.current)==null?void 0:a.resetFields()},children:e?"重置":"Reset"})]})]})}function A8(){const e=se(),t=B.useRef(null),[n,a]=B.useState([{key:0,label:e?"联系人 1":"Contact 1"}]),[l,i]=B.useState(1),o=()=>{const d=l+1;i(d),a(p=>[...p,{key:d,label:e?`联系人 ${p.length+1}`:`Contact ${p.length+1}`}])},s=d=>{a(p=>p.filter((m,h)=>h!==d))},u=d=>{alert(e?`提交成功：${JSON.stringify(d)}`:`Submitted: ${JSON.stringify(d)}`)};return c.jsxs(lu,{ref:t,initialValues:{},onSubmit:u,children:[n.map((d,p)=>c.jsxs(Rt,{name:`contact_${d.key}`,label:d.label,children:[c.jsx(ut,{placeholder:e?"请输入":"Enter value"}),c.jsx("div",{className:"xui-form-item__extra",children:c.jsx(ee,{size:"sm",onClick:()=>s(p),children:e?"删除":"Remove"})})]},d.key)),c.jsx(Rt,{children:c.jsx(ee,{type:"primary",onClick:o,children:e?"添加字段":"Add Field"})}),c.jsxs("div",{className:"xui-form__actions",children:[c.jsx(ee,{type:"primary",onClick:()=>{var d;return(d=t.current)==null?void 0:d.submit()},children:e?"提交":"Submit"}),c.jsx(ee,{onClick:()=>{var d;return(d=t.current)==null?void 0:d.resetFields()},children:e?"重置":"Reset"})]})]})}function O8(){const e=se(),[t,n]=B.useState(!1),[a,l]=B.useState("right");return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",marginBottom:8},children:[c.jsx("label",{children:e?"禁用表单":"Disabled"}),c.jsx(Zt,{value:t,onChange:n}),c.jsx("label",{children:e?"标签位置":"Label"}),c.jsx(Zt,{value:a==="top",checkedText:e?"顶部":"Top",uncheckedText:e?"右":"Right",onChange:i=>l(i?"top":"right")})]}),c.jsxs(lu,{disabled:t,labelPosition:a,initialValues:{name:"Alice",email:"alice@test.com"},children:[c.jsx(Rt,{name:"name",label:e?"姓名":"Name",children:c.jsx(ut,{})}),c.jsx(Rt,{name:"email",label:e?"邮箱":"Email",children:c.jsx(ut,{})}),c.jsx(Rt,{name:"bio",label:e?"简介":"Bio",children:c.jsx(ut,{type:"search",placeholder:e?"一句话介绍自己":"Describe yourself"})}),c.jsx("div",{className:"xui-form__actions",children:c.jsx(ee,{type:"primary",disabled:t,children:e?"保存":"Save"})})]})]})}const B8=`<script setup lang="ts">
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
`,Z8=`<script setup lang="ts">
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
`,j8=`<script setup lang="ts">
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
`,M8=`<script setup lang="ts">
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
`,D8=`import { useRef } from 'react';
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
`,L8=`import { useRef } from 'react';
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
`,V8=`import { useRef, useState } from 'react';
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
`,H8=`import { useState } from 'react';
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
`,I8={name:"Form",slug:"form",title:"表单",category:"form",summary:{"zh-CN":"功能完整的表单容器组件，支持字段注册、同步/异步校验、跨字段关联、条件校验、动态增删字段，以及禁用/只读/标签布局等场景。","en-US":"A full-featured form container with field registration, sync/async validation, cross-field rules, conditional validation, dynamic add/remove fields, and disabled/readonly/label layout support."},features:[{"zh-CN":"Form + FormItem 复合容器，通过 provide/inject（Vue）或 Context（React）自动连接","en-US":"Form + FormItem compound container; auto-connected via provide/inject (Vue) or Context (React)"},{"zh-CN":"FormItem 通过 VNode 克隆自动注入 value / onChange / onBlur，子组件无需手动绑定","en-US":"FormItem auto-injects value / onChange / onBlur via VNode cloning; no manual binding needed"},{"zh-CN":"内置校验规则：required / email / phone / number / length / regex / url / custom","en-US":"Built-in validators: required / email / phone / number / length / regex / url / custom"},{"zh-CN":"支持同步与异步校验、条件校验（when）、跨字段关联校验（validator 可访问全部值）","en-US":"Sync and async validation, conditional rules (when), cross-field validation (validator receives all values)"},{"zh-CN":"校验触发时机：change / blur / submit，可在规则级与表单级配置","en-US":"Validation triggers: change / blur / submit, configurable at rule and form level"},{"zh-CN":"通过 ref 暴露 validate / resetFields / getFieldValue / setFieldValue / clearValidate / submit 等命令式 API","en-US":"Imperative API via ref: validate / resetFields / getFieldValue / setFieldValue / clearValidate / submit"},{"zh-CN":"支持表单禁用、只读、标签位置（left / right / top）、标签宽度自定义","en-US":"Form-level disabled, readonly, label position (left / right / top), and custom label width"}],scenarios:[{"zh-CN":"注册表单、设置表单、多步表单、条件表单、动态字段表单等场景。","en-US":"Registration forms, settings forms, multi-step forms, conditional forms, dynamic field forms."}],demos:[{id:"basic",title:{"zh-CN":"基础用法","en-US":"Basic Usage"},description:{"zh-CN":"使用 Form + FormItem 组合，配置 rules 校验，提交后触发回调。","en-US":"Compose Form + FormItem, configure rules for validation, and handle submit callback."},vueComponent:N8,reactComponent:E8,vueSource:B8,reactSource:D8},{id:"validation",title:{"zh-CN":"复杂校验","en-US":"Complex Validation"},description:{"zh-CN":"内置规则（required/email/phone/length）、跨字段关联（密码确认）、条件校验（when）。","en-US":"Built-in rules (required/email/phone/length), cross-field validation (password confirm), conditional rules (when)."},vueComponent:w8,reactComponent:R8,vueSource:Z8,reactSource:L8},{id:"dynamic",title:{"zh-CN":"动态增删字段","en-US":"Dynamic Fields"},description:{"zh-CN":"通过 v-for 循环渲染 FormItem，动态增删字段列表。","en-US":"Render FormItems via v-for loop, dynamically add/remove field items."},vueComponent:T8,reactComponent:A8,vueSource:j8,reactSource:V8},{id:"layout",title:{"zh-CN":"禁用 / 标签布局","en-US":"Disabled / Label Layout"},description:{"zh-CN":"disabled 禁用全部字段，labelPosition 切换标签位置（left / right / top）。","en-US":"disabled disables all fields, labelPosition toggles label position (left / right / top)."},vueComponent:$8,reactComponent:O8,vueSource:M8,reactSource:H8}],api:{props:[{name:"initialValues",type:"Record<string, unknown>",default:"{}",description:{"zh-CN":"表单初始值（非受控模式下的字段初始值）","en-US":"Form initial values (non-controlled initial field values)"}},{name:"rules",type:"Record<string, ValidationRule[]>",default:"—",description:{"zh-CN":"字段级校验规则映射（key 为字段名）","en-US":"Field-level validation rules map (key is field name)"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"全局禁用","en-US":"Disable all fields"}},{name:"readonly",type:"boolean",default:"false",description:{"zh-CN":"全局只读","en-US":"Readonly for all fields"}},{name:"labelWidth",type:"string | number",default:"—",description:{"zh-CN":"标签宽度（数值按 px，字符串原样输出）","en-US":"Label width (number as px, string as-is)"}},{name:"labelPosition",type:"'left' | 'right' | 'top'",default:"'right'",description:{"zh-CN":"标签位置","en-US":"Label position"}},{name:"validateTrigger",type:"'change' | 'blur' | 'submit' | Array",default:"—",description:{"zh-CN":"校验触发时机","en-US":"Validation trigger timing"}},{name:"scrollToFirstError",type:"boolean",default:"false",description:{"zh-CN":"校验失败时滚动到第一个错误字段","en-US":"Scroll to first error field on validation failure"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"自定义类名","en-US":"Custom class name"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"自定义样式","en-US":"Custom styles"}}],events:[{vue:"submit",react:"onSubmit",payload:"FormValues",description:{"zh-CN":"提交（校验通过后）","en-US":"Submit (after validation passes)"}},{vue:"submitFail",react:"onSubmitFail",payload:"FormErrors",description:{"zh-CN":"校验失败","en-US":"Validation failed"}},{vue:"valuesChange",react:"onValuesChange",payload:"(changed, all)",description:{"zh-CN":"字段值变更","en-US":"Field value changed"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"表单内容（FormItem 列表）","en-US":"Form content (FormItem list)"}},{vue:"actions",react:"—",description:{"zh-CN":"底部操作区域","en-US":"Bottom actions area"}}],methods:[{name:"validate",signature:"(trigger?: ValidationTrigger) => Promise<FormValidationResult>",description:{"zh-CN":"校验全部字段","en-US":"Validate all fields"}},{name:"validateField",signature:"(name: string, trigger?) => Promise<string[]>",description:{"zh-CN":"校验指定字段","en-US":"Validate a specific field"}},{name:"getFieldValue",signature:"(name: string) => unknown",description:{"zh-CN":"获取字段值","en-US":"Get field value"}},{name:"getFieldsValue",signature:"() => FormValues",description:{"zh-CN":"获取全部字段值","en-US":"Get all field values"}},{name:"setFieldValue",signature:"(name: string, value: unknown) => void",description:{"zh-CN":"设置字段值","en-US":"Set field value"}},{name:"setFieldsValue",signature:"(values: FormValues) => void",description:{"zh-CN":"批量设置字段值","en-US":"Batch set field values"}},{name:"resetFields",signature:"(names?: string[]) => void",description:{"zh-CN":"重置字段","en-US":"Reset fields"}},{name:"clearValidate",signature:"(names?: string[]) => void",description:{"zh-CN":"清除校验错误","en-US":"Clear validation errors"}},{name:"submit",signature:"() => Promise<FormValidationResult>",description:{"zh-CN":"提交表单","en-US":"Submit the form"}}],types:[{name:"ValidationRule",definition:`type ValidationRule = {
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
}`,description:{"zh-CN":"FormItem 属性","en-US":"FormItem props"}}]},notes:[{"zh-CN":'FormItem 通过 VNode 克隆自动注入 value 和事件，无需手动绑定——只需用 <FormItem name="xxx"> 包裹子组件即可。',"en-US":'FormItem auto-injects value and events via VNode cloning—no manual binding needed. Just wrap child components with <FormItem name="xxx">.'},{"zh-CN":"所有 XUI 表单组件（Input / Select / Checkbox / Switch / DatePicker 等）统一使用 value 作为受控 prop，因此 FormItem 可自动注入。","en-US":"All XUI form components (Input / Select / Checkbox / Switch / DatePicker) use value as the controlled prop, enabling auto-injection."},{"zh-CN":"submit 触发时机执行所有规则（忽略 trigger 过滤）；change / blur 仅执行匹配的规则。","en-US":"submit executes all rules (bypasses trigger filter); change / blur only execute matching rules."},{"zh-CN":"rules 可在 Form 级和 FormItem 级同时配置，合并执行（FormItem 规则优先在前）。","en-US":"rules can be configured at both Form and FormItem level; merged with FormItem rules first."}],a11y:[{"zh-CN":"渲染为原生 <form> 元素，标签使用 <label> 包裹，保留原生提交行为。","en-US":"Renders as a native <form> element with <label> wrapping, preserving native submit behavior."}]},F8={class:"demo-column"},q8={class:"demo-text"},G8=D({__name:"basic",setup(e){const t=F([]),n=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin",disabled:!0}]}];return(a,l)=>(g(),x("div",F8,[z(r(jd),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),options:n,clearable:""},null,8,["value"]),N("p",q8,$(r(U)()?`选中值：${JSON.stringify(t.value)}`:`Value: ${JSON.stringify(t.value)}`),1)]))}}),Y8={class:"demo-column"},P8={class:"demo-text"},K8=D({__name:"state",setup(e){const t=F(["east","hangzhou"]),n=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin"}]}];return(a,l)=>(g(),x("div",Y8,[z(r(jd),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),options:n,"change-on-select":"",separator:" > ",placeholder:"选择任意层级"},null,8,["value"]),N("p",P8,$(r(U)()?'changeOnSelect：选中任意层级即触发，分隔符为 " > "':'changeOnSelect: select any level to trigger, separator " > "'),1)]))}}),X8={class:"demo-column"},Q8={class:"demo-text"},J8=D({__name:"multiple",setup(e){const t=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"},{label:"南京",value:"nanjing"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin",disabled:!0}]}],n=F([]);return(a,l)=>(g(),x("div",X8,[z(r(jd),{value:n.value,"onUpdate:value":l[0]||(l[0]=i=>n.value=i),options:t,multiple:"",clearable:"",placeholder:"请选择（可多选）"},null,8,["value"]),N("p",Q8,"已选路径："+$(JSON.stringify(n.value)),1)]))}}),W8=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin",disabled:!0}]}];function eZ(){const e=se(),[t,n]=B.useState([]);return c.jsxs("div",{className:"demo-column",children:[c.jsx(Fm,{value:t,onChange:a=>n(a),options:W8,clearable:!0}),c.jsx("p",{className:"demo-text",children:e?`选中值：${JSON.stringify(t)}`:`Value: ${JSON.stringify(t)}`})]})}const tZ=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin"}]}];function nZ(){const e=se(),[t,n]=B.useState(["east","hangzhou"]);return c.jsxs("div",{className:"demo-column",children:[c.jsx(Fm,{value:t,onChange:a=>n(a),options:tZ,changeOnSelect:!0,separator:" > ",placeholder:"选择任意层级"}),c.jsx("p",{className:"demo-text",children:e?'changeOnSelect：选中任意层级即触发，分隔符为 " > "':'changeOnSelect: select any level to trigger, separator " > "'})]})}const aZ=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"},{label:"南京",value:"nanjing"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin",disabled:!0}]}];function lZ(){const[e,t]=B.useState([]);return c.jsxs("div",{className:"demo-column",children:[c.jsx(Fm,{value:e,onChange:n=>t(n),options:aZ,multiple:!0,clearable:!0,placeholder:"请选择（可多选）"}),c.jsxs("p",{className:"demo-text",children:["已选路径：",JSON.stringify(e)]})]})}const iZ=`<script setup lang="ts">
import { ref } from 'vue';
import { Cascader } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref<string[]>([]);

const options = [
  {
    label: '华东',
    value: 'east',
    children: [
      { label: '上海', value: 'shanghai' },
      { label: '杭州', value: 'hangzhou' },
    ],
  },
  {
    label: '华北',
    value: 'north',
    children: [
      { label: '北京', value: 'beijing' },
      { label: '天津', value: 'tianjin', disabled: true },
    ],
  },
];
<\/script>

<template>
  <div class="demo-column">
    <Cascader v-model:value="value" :options="options" clearable />
    <p class="demo-text">
      {{ isZh() ? \`选中值：\${JSON.stringify(value)}\` : \`Value: \${JSON.stringify(value)}\` }}
    </p>
  </div>
</template>
`,oZ=`<script setup lang="ts">
import { ref } from 'vue';
import { Cascader } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref<string[]>(['east', 'hangzhou']);

const options = [
  {
    label: '华东',
    value: 'east',
    children: [
      { label: '上海', value: 'shanghai' },
      { label: '杭州', value: 'hangzhou' },
    ],
  },
  {
    label: '华北',
    value: 'north',
    children: [
      { label: '北京', value: 'beijing' },
      { label: '天津', value: 'tianjin' },
    ],
  },
];
<\/script>

<template>
  <div class="demo-column">
    <Cascader
      v-model:value="value"
      :options="options"
      change-on-select
      separator=" > "
      placeholder="选择任意层级"
    />
    <p class="demo-text">
      {{
        isZh()
          ? \`changeOnSelect：选中任意层级即触发，分隔符为 " > "\`
          : \`changeOnSelect: select any level to trigger, separator " > "\`
      }}
    </p>
  </div>
</template>
`,sZ=`<script setup lang="ts">
import { ref } from 'vue';
import { Cascader } from '@xui-design/vue';

const options = [
  {
    label: '华东',
    value: 'east',
    children: [
      { label: '上海', value: 'shanghai' },
      { label: '杭州', value: 'hangzhou' },
      { label: '南京', value: 'nanjing' },
    ],
  },
  {
    label: '华北',
    value: 'north',
    children: [
      { label: '北京', value: 'beijing' },
      { label: '天津', value: 'tianjin', disabled: true },
    ],
  },
];

const value = ref<string[][]>([]);
<\/script>

<template>
  <div class="demo-column">
    <Cascader
      v-model:value="value"
      :options="options"
      multiple
      clearable
      placeholder="请选择（可多选）"
    />
    <p class="demo-text">已选路径：{{ JSON.stringify(value) }}</p>
  </div>
</template>
`,rZ=`import { useState } from 'react';
import { Cascader } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

const options = [
  {
    label: '华东',
    value: 'east',
    children: [
      { label: '上海', value: 'shanghai' },
      { label: '杭州', value: 'hangzhou' },
    ],
  },
  {
    label: '华北',
    value: 'north',
    children: [
      { label: '北京', value: 'beijing' },
      { label: '天津', value: 'tianjin', disabled: true },
    ],
  },
];

export default function CascaderBasicDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="demo-column">
      <Cascader
        value={value}
        onChange={(v) => setValue(v as string[])}
        options={options}
        clearable
      />
      <p className="demo-text">
        {isZh ? \`选中值：\${JSON.stringify(value)}\` : \`Value: \${JSON.stringify(value)}\`}
      </p>
    </div>
  );
}
`,uZ=`import { useState } from 'react';
import { Cascader } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

const options = [
  {
    label: '华东',
    value: 'east',
    children: [
      { label: '上海', value: 'shanghai' },
      { label: '杭州', value: 'hangzhou' },
    ],
  },
  {
    label: '华北',
    value: 'north',
    children: [
      { label: '北京', value: 'beijing' },
      { label: '天津', value: 'tianjin' },
    ],
  },
];

export default function CascaderStateDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState<string[]>(['east', 'hangzhou']);

  return (
    <div className="demo-column">
      <Cascader
        value={value}
        onChange={(v) => setValue(v as string[])}
        options={options}
        changeOnSelect
        separator=" > "
        placeholder="选择任意层级"
      />
      <p className="demo-text">
        {isZh
          ? \`changeOnSelect：选中任意层级即触发，分隔符为 " > "\`
          : \`changeOnSelect: select any level to trigger, separator " > "\`}
      </p>
    </div>
  );
}
`,cZ=`import { useState } from 'react';
import { Cascader } from '@xui-design/react';

const options = [
  {
    label: '华东',
    value: 'east',
    children: [
      { label: '上海', value: 'shanghai' },
      { label: '杭州', value: 'hangzhou' },
      { label: '南京', value: 'nanjing' },
    ],
  },
  {
    label: '华北',
    value: 'north',
    children: [
      { label: '北京', value: 'beijing' },
      { label: '天津', value: 'tianjin', disabled: true },
    ],
  },
];

export default function CascaderMultipleDemo() {
  const [value, setValue] = useState<string[][]>([]);

  return (
    <div className="demo-column">
      <Cascader
        value={value}
        onChange={(v) => setValue(v as string[][])}
        options={options}
        multiple
        clearable
        placeholder="请选择（可多选）"
      />
      <p className="demo-text">已选路径：{JSON.stringify(value)}</p>
    </div>
  );
}
`,dZ={name:"Cascader",slug:"cascader",title:"级联选择",category:"form",summary:{"zh-CN":"从逐级展开的树形选项中选择一条路径，支持选到叶子或任意层级即触发。","en-US":"Pick a path from a progressively expanding tree of options, either requiring a leaf or firing on any level."},features:[{"zh-CN":"受控 / 非受控双模式，值为 string[]（从根到选中节点的值路径），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; the value is a string[] (the value path from root to the selected node); supports v-model:value on Vue"},{"zh-CN":"树形 options：通过 children 递归定义层级，叶子节点无 children","en-US":"Tree-shaped options: levels are defined recursively via children; leaf nodes have no children"},{"zh-CN":"changeOnSelect 选中任意层级即触发 onChange（默认需选到叶子节点）","en-US":"changeOnSelect fires onChange on any selected level (the default requires selecting a leaf)"},{"zh-CN":'separator 自定义路径展示分隔符（默认 " / "）；clearable 已选中时显示清空按钮',"en-US":'separator customizes the path display separator (default " / "); clearable shows a clear button when a value is selected'},{"zh-CN":"disabled 整体禁用；选项可单独禁用（disabled: true）","en-US":"disabled disables the whole component; individual options can be disabled via disabled: true"},{"zh-CN":"multiple 多选模式：value 为 string[][]，支持级联勾选（父子联动）、半选状态、全选/清空、标签管理","en-US":"multiple mode: value is string[][]; supports cascaded checking (parent-child linkage), indeterminate state, check all / clear, and tag management"},{"zh-CN":"checkStrictly 允许多选时选到任意层级（默认仅叶子节点可勾选）","en-US":"checkStrictly allows selecting any level in multiple mode (the default only allows leaf nodes)"}],scenarios:[{"zh-CN":"省市区、分类目录等具有层级关系的选择场景。","en-US":"Hierarchical selection such as province / city / district or category trees."}],demos:[{id:"basic",title:{"zh-CN":"基础用法","en-US":"Basic"},description:{"zh-CN":"树形 options，选到叶子节点触发 onChange；支持 clearable 与单项 disabled。","en-US":"Tree-shaped options; selecting a leaf fires onChange; supports clearable and per-option disabled."},vueComponent:G8,reactComponent:eZ,vueSource:iZ,reactSource:rZ},{id:"state",title:{"zh-CN":"任意层级选中与分隔符","en-US":"Any-level Selection & Separator"},description:{"zh-CN":"changeOnSelect 选中任意层级即触发；separator 自定义路径分隔符。","en-US":"changeOnSelect fires on any level; separator customizes the path display separator."},vueComponent:K8,reactComponent:nZ,vueSource:oZ,reactSource:uZ},{id:"multiple",title:{"zh-CN":"多选模式","en-US":"Multiple Selection"},description:{"zh-CN":"multiple 开启多选，value 为 string[][]；支持父子级联勾选、半选状态、全选/清空，已选项以标签展示可单独删除。","en-US":"multiple enables multi-select with value as string[][]; supports parent-child cascaded checking, indeterminate state, check all / clear, and removable tags for selected items."},vueComponent:J8,reactComponent:lZ,vueSource:sZ,reactSource:cZ}],api:{props:[{name:"value",type:"string[] | string[][]",default:"—",description:{"zh-CN":"受控选中路径（单选 string[]，多选 string[][]；提供即受控）","en-US":"Controlled selected path (string[] for single, string[][] for multiple; controlled when provided)"}},{name:"defaultValue",type:"string[]",default:"—",description:{"zh-CN":"非受控初始选中路径","en-US":"Uncontrolled initial selected path"}},{name:"options",type:"CascaderOption[]",default:"—",required:!0,description:{"zh-CN":"树形选项数据","en-US":"Tree-shaped option data"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清空按钮（仅已选中时）","en-US":"Whether to show the clear button (only when a value is selected)"}},{name:"separator",type:"string",default:"' / '",description:{"zh-CN":"选中路径展示分隔符","en-US":"Separator for displaying the selected path"}},{name:"changeOnSelect",type:"boolean",default:"false",description:{"zh-CN":"是否选中任意层级即触发 onChange（默认需选到叶子节点）","en-US":"Whether firing onChange on any selected level (the default requires selecting a leaf)"}},{name:"multiple",type:"boolean",default:"false",description:{"zh-CN":"是否多选模式（value 为 string[][]，支持级联勾选与标签管理）","en-US":"Whether to enable multiple selection (value is string[][]; supports cascaded checking and tag management)"}},{name:"checkStrictly",type:"boolean",default:"false",description:{"zh-CN":"多选模式下是否允许选到任意层级（默认仅叶子节点可勾选）","en-US":"Whether to allow selecting any level in multiple mode (the default only allows leaf nodes)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式","en-US":"Custom inline styles appended to the root element"}},{name:"onChange",type:"(value: string[] | string[][], labels: string[] | string[][]) => void",default:"—",description:{"zh-CN":"选中值变更回调（单选时为路径+文案，多选时为路径数组+文案数组）","en-US":"Selected value change callback (path + labels for single; path array + label array for multiple)"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调","en-US":"Clear callback"}}],events:[{vue:"change",react:"onChange",payload:"value: string[], labels: string[]",description:{"zh-CN":"选中值变更（值路径与文案路径）","en-US":"Fired when the selected value changes (value path and label path)"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"清空选中值","en-US":"Fired when the selected value is cleared"}},{vue:"update:value",react:"—",payload:"string[]",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标","en-US":"Custom clear icon"}},{vue:"suffixIcon",react:"renderSuffixIcon",description:{"zh-CN":"自定义后缀（下拉箭头）图标","en-US":"Custom suffix (dropdown arrow) icon"}}],types:[{name:"CascaderOption",definition:`interface CascaderOption {
  label: string
  value: string
  children?: CascaderOption[]
  disabled?: boolean
}`,description:{"zh-CN":"级联选项（树形结构，叶子节点无 children）。","en-US":"A cascader option (tree-shaped; leaf nodes have no children)."}}]},notes:[{"zh-CN":'value 为值路径数组（如 ["east", "hangzhou"]）；空数组表示未选中。多选时 value 为 string[][]（如 [["east","hangzhou"], ["north","beijing"]]）。',"en-US":'value is a value-path array (e.g. ["east", "hangzhou"]); an empty array means nothing is selected. In multiple mode value is string[][] (e.g. [["east","hangzhou"], ["north","beijing"]]).'},{"zh-CN":"点击组件外部会收起面板；单选选中叶子节点后自动收起（changeOnSelect 时选中即收起）；多选面板保持展开。","en-US":"Clicking outside closes the panel; selecting a leaf auto-closes in single mode (any selection auto-closes in changeOnSelect mode); the panel stays open in multiple mode."},{"zh-CN":"多选模式下，勾选父节点会级联勾选所有可用后代叶子（禁用项不参与级联）；子级全选时父节点显示勾选，部分勾选时显示半选。存在未勾选的禁用子级时父级最多显示半选。checkStrictly=true 时取消级联，可勾选任意层级。","en-US":"In multiple mode, checking a parent cascades to all enabled descendant leaves (disabled options are excluded); the parent shows checked when all children are checked, indeterminate when partially checked. An unchecked disabled child caps the parent at indeterminate. checkStrictly=true disables cascading and allows any level."}],a11y:[{"zh-CN":"触发器 role=combobox，面板 role=dialog；Enter/Space 展开，Esc 收起。","en-US":"The trigger has role=combobox and the panel role=dialog; Enter/Space opens and Esc closes."}]},mZ={class:"demo-column"},pZ={class:"demo-text"},fZ=D({__name:"basic",setup(e){const t=F("");return(n,a)=>(g(),x("div",mZ,[z(r(gv),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),clearable:""},null,8,["value"]),N("p",pZ,$(r(U)()?`选中时间：${t.value||"（未选择）"}`:`Selected: ${t.value||"(none)"}`),1)]))}}),hZ={class:"demo-column"},vZ={class:"demo-text"},gZ=D({__name:"state",setup(e){const t=F("09:30");return(n,a)=>(g(),x("div",hZ,[z(r(gv),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),format:"HH:mm","hour-step":2,"minute-step":10,clearable:""},null,8,["value"]),N("p",vZ,$(r(U)()?'format="HH:mm" 仅显示时分；hourStep=2，minuteStep=10':'format="HH:mm" shows hours & minutes only; hourStep=2, minuteStep=10'),1)]))}});function bZ(){const e=se(),[t,n]=B.useState("");return c.jsxs("div",{className:"demo-column",children:[c.jsx(Hy,{value:t,onChange:n,clearable:!0}),c.jsx("p",{className:"demo-text",children:e?`选中时间：${t||"（未选择）"}`:`Selected: ${t||"(none)"}`})]})}function yZ(){const e=se(),[t,n]=B.useState("09:30");return c.jsxs("div",{className:"demo-column",children:[c.jsx(Hy,{value:t,onChange:n,format:"HH:mm",hourStep:2,minuteStep:10,clearable:!0}),c.jsx("p",{className:"demo-text",children:e?'format="HH:mm" 仅显示时分；hourStep=2，minuteStep=10':'format="HH:mm" shows hours & minutes only; hourStep=2, minuteStep=10'})]})}const SZ=`<script setup lang="ts">
import { ref } from 'vue';
import { TimePicker } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref('');
<\/script>

<template>
  <div class="demo-column">
    <TimePicker v-model:value="value" clearable />
    <p class="demo-text">
      {{ isZh() ? \`选中时间：\${value || '（未选择）'}\` : \`Selected: \${value || '(none)'}\` }}
    </p>
  </div>
</template>
`,xZ=`<script setup lang="ts">
import { ref } from 'vue';
import { TimePicker } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const value = ref('09:30');
<\/script>

<template>
  <div class="demo-column">
    <TimePicker v-model:value="value" format="HH:mm" :hour-step="2" :minute-step="10" clearable />
    <p class="demo-text">
      {{
        isZh()
          ? \`format="HH:mm" 仅显示时分；hourStep=2，minuteStep=10\`
          : \`format="HH:mm" shows hours & minutes only; hourStep=2, minuteStep=10\`
      }}
    </p>
  </div>
</template>
`,_Z=`import { useState } from 'react';
import { TimePicker } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TimePickerBasicDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState('');

  return (
    <div className="demo-column">
      <TimePicker value={value} onChange={setValue} clearable />
      <p className="demo-text">
        {isZh ? \`选中时间：\${value || '（未选择）'}\` : \`Selected: \${value || '(none)'}\`}
      </p>
    </div>
  );
}
`,CZ=`import { useState } from 'react';
import { TimePicker } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TimePickerStateDemo() {
  const isZh = useIsZh();
  const [value, setValue] = useState('09:30');

  return (
    <div className="demo-column">
      <TimePicker
        value={value}
        onChange={setValue}
        format="HH:mm"
        hourStep={2}
        minuteStep={10}
        clearable
      />
      <p className="demo-text">
        {isZh
          ? \`format="HH:mm" 仅显示时分；hourStep=2，minuteStep=10\`
          : \`format="HH:mm" shows hours & minutes only; hourStep=2, minuteStep=10\`}
      </p>
    </div>
  );
}
`,kZ={name:"TimePicker",slug:"time-picker",title:"时间选择",category:"form",summary:{"zh-CN":"从时 / 分 / 秒三列面板中选择时间，值为 HH:mm:ss 格式字符串，支持步长与格式配置。","en-US":"Pick a time from hour / minute / second columns; the value is a HH:mm:ss string with configurable steps and format."},features:[{"zh-CN":"受控 / 非受控双模式，值为 HH:mm:ss 字符串，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; the value is a HH:mm:ss string; supports v-model:value on Vue"},{"zh-CN":"format 支持 HH:mm:ss（默认）与 HH:mm（隐藏秒列）","en-US":"format supports HH:mm:ss (default) and HH:mm (second column hidden)"},{"zh-CN":"hourStep / minuteStep / secondStep 自定义各列步长","en-US":"hourStep / minuteStep / secondStep customize each column step"},{"zh-CN":"clearable 已选中时显示清空按钮；disabled 整体禁用","en-US":"clearable shows a clear button when a value is selected; disabled disables the picker"},{"zh-CN":"确认-取消交互：面板内选择仅更新待选值，点击「确认」提交并收起，「取消」放弃修改","en-US":'Confirm-cancel interaction: picking in the panel only updates a pending value; "OK" commits and closes, "Cancel" discards'}],scenarios:[{"zh-CN":"需要精确选择时分秒的表单字段，如预约时间、日程时间。","en-US":"Form fields requiring precise hour / minute / second selection, such as appointments."}],demos:[{id:"basic",title:{"zh-CN":"基础用法","en-US":"Basic"},description:{"zh-CN":"默认 HH:mm:ss 格式，三列滚动选择，支持 clearable。","en-US":"Default HH:mm:ss format with three scrollable columns; supports clearable."},vueComponent:fZ,reactComponent:bZ,vueSource:SZ,reactSource:_Z},{id:"state",title:{"zh-CN":"格式与步长","en-US":"Format & Steps"},description:{"zh-CN":'format="HH:mm" 仅显示时分；hourStep=2，minuteStep=10。',"en-US":'format="HH:mm" shows hours & minutes only; hourStep=2, minuteStep=10.'},vueComponent:gZ,reactComponent:yZ,vueSource:xZ,reactSource:CZ}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控选中时间（HH:mm:ss，提供即受控）","en-US":"Controlled selected time (HH:mm:ss; controlled when provided)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始时间（HH:mm:ss）","en-US":"Uncontrolled initial time (HH:mm:ss)"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清空按钮（仅已选中时）","en-US":"Whether to show the clear button (only when a value is selected)"}},{name:"format",type:"'HH:mm:ss' | 'HH:mm'",default:"'HH:mm:ss'",description:{"zh-CN":"显示格式（HH:mm 不渲染秒列）","en-US":"Display format (HH:mm hides the second column)"}},{name:"hourStep",type:"number",default:"1",description:{"zh-CN":"小时步长（范围 1-23）","en-US":"Hour step (range 1-23)"}},{name:"minuteStep",type:"number",default:"1",description:{"zh-CN":"分钟步长（范围 1-59）","en-US":"Minute step (range 1-59)"}},{name:"secondStep",type:"number",default:"1",description:{"zh-CN":"秒步长（范围 1-59）","en-US":"Second step (range 1-59)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式","en-US":"Custom inline styles appended to the root element"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"选中值变更回调","en-US":"Selected value change callback"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调","en-US":"Clear callback"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"选中值变更","en-US":"Fired when the selected value changes"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"清空选中值","en-US":"Fired when the selected value is cleared"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标","en-US":"Custom clear icon"}},{vue:"clockIcon",react:"renderClockIcon",description:{"zh-CN":"自定义时钟图标","en-US":"Custom clock icon"}}]},notes:[{"zh-CN":"值统一为 HH:mm:ss 字符串；当 format 为 HH:mm 时，秒固定为 00。","en-US":"The value is always a HH:mm:ss string; when format is HH:mm, the seconds are fixed to 00."},{"zh-CN":"面板内点击时间项仅更新待选值（高亮跟随），点击「确认」提交并收起面板、触发 onChange；点击「取消」、外部点击或 Esc 收起面板并放弃未确认的修改，重新展开时回退到已选值。","en-US":'Clicking a time item only updates the pending value (highlight follows); "OK" commits it, closes the panel, and fires onChange; "Cancel", clicking outside, or Esc closes the panel and discards uncommitted changes — reopening restores the selected value.'}],a11y:[{"zh-CN":"触发器 role=combobox，面板 role=dialog；Enter/Space 展开，Esc 收起。","en-US":"The trigger has role=combobox and the panel role=dialog; Enter/Space opens and Esc closes."}]},NZ={class:"demo-column"},wZ={class:"demo-text"},TZ=D({__name:"basic",setup(e){const t=F([]),n=(a,l)=>new Promise(i=>{let o=0;const s=setInterval(()=>{o+=20,l.onProgress(Math.min(o,100)),o>=100&&(clearInterval(s),i({url:`https://example.com/${a.name}`}))},200)});return(a,l)=>(g(),x("div",NZ,[z(r(Md),{value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),action:"/upload","request-upload":n,multiple:""},null,8,["value"]),N("p",wZ,$(r(U)()?`文件数：${t.value.length}`:`File count: ${t.value.length}`),1)]))}}),zZ={class:"demo-column"},UZ={class:"demo-text"},$Z=D({__name:"state",setup(e){const t=F([]),n=(l,i)=>new Promise(o=>{let s=0;const u=setInterval(()=>{s+=25,i.onProgress(Math.min(s,100)),s>=100&&(clearInterval(u),o({url:`https://example.com/${l.name}`}))},200)}),a=l=>l.type.startsWith("image/");return(l,i)=>(g(),x("div",zZ,[z(r(Md),{value:t.value,"onUpdate:value":i[0]||(i[0]=o=>t.value=o),action:"/upload","request-upload":n,"list-type":"picture",accept:"image/*","max-count":3,"before-upload":a},null,8,["value"]),N("p",UZ,$(r(U)()?'listType="picture" 图片列表；accept 限制图片；maxCount=3；beforeUpload 校验类型':'listType="picture" image list; accept restricts to images; maxCount=3; beforeUpload validates type'),1)]))}}),EZ={class:"demo-column"},RZ=D({__name:"manual",setup(e){const t=(a,l)=>new Promise((i,o)=>{let s=0;const u=setInterval(()=>{var d;if((d=l.signal)!=null&&d.aborted){clearInterval(u),o(new DOMException("Aborted","AbortError"));return}s+=Math.random()*20+5,s>=100&&(s=100,clearInterval(u),Math.random()>.2?i({url:`https://example.com/${a.name}`,response:{ok:!0}}):o(new Error("模拟上传失败"))),l.onProgress(Math.min(Math.round(s),100))},300)}),n=F([]);return(a,l)=>(g(),x("div",EZ,[z(r(Md),{value:n.value,"onUpdate:value":l[0]||(l[0]=i=>n.value=i),action:"/upload",multiple:"","auto-upload":!1,"request-upload":t},null,8,["value"]),l[1]||(l[1]=N("p",{class:"demo-text"},"autoUpload=false：选中文件后进入「待上传」状态，点击「开始上传」手动触发。",-1))]))}}),AZ=(e,t)=>new Promise(n=>{let a=0;const l=setInterval(()=>{a+=20,t.onProgress(Math.min(a,100)),a>=100&&(clearInterval(l),n({url:`https://example.com/${e.name}`}))},200)});function OZ(){const e=se(),[t,n]=B.useState([]);return c.jsxs("div",{className:"demo-column",children:[c.jsx(qm,{value:t,onChange:n,action:"/upload",requestUpload:AZ,multiple:!0}),c.jsx("p",{className:"demo-text",children:e?`文件数：${t.length}`:`File count: ${t.length}`})]})}const BZ=(e,t)=>new Promise(n=>{let a=0;const l=setInterval(()=>{a+=25,t.onProgress(Math.min(a,100)),a>=100&&(clearInterval(l),n({url:`https://example.com/${e.name}`}))},200)}),ZZ=e=>e.type.startsWith("image/");function jZ(){const e=se(),[t,n]=B.useState([]);return c.jsxs("div",{className:"demo-column",children:[c.jsx(qm,{value:t,onChange:n,action:"/upload",requestUpload:BZ,listType:"picture",accept:"image/*",maxCount:3,beforeUpload:ZZ}),c.jsx("p",{className:"demo-text",children:e?'listType="picture" 图片列表；accept 限制图片；maxCount=3；beforeUpload 校验类型':'listType="picture" image list; accept restricts to images; maxCount=3; beforeUpload validates type'})]})}const MZ=(e,t)=>new Promise((n,a)=>{let l=0;const i=setInterval(()=>{var o;if((o=t.signal)!=null&&o.aborted){clearInterval(i),a(new DOMException("Aborted","AbortError"));return}l+=Math.random()*20+5,l>=100&&(clearInterval(i),Math.random()>.2?n({url:`https://example.com/${e.name}`,response:{ok:!0}}):a(new Error("模拟上传失败"))),t.onProgress(Math.min(Math.round(l),100))},300)});function DZ(){const[e,t]=B.useState([]);return c.jsxs("div",{className:"demo-column",children:[c.jsx(qm,{value:e,onChange:t,action:"/upload",multiple:!0,autoUpload:!1,requestUpload:MZ}),c.jsx("p",{className:"demo-text",children:"autoUpload=false：选中文件后进入「待上传」状态，点击「开始上传」手动触发。"})]})}const LZ=`<script setup lang="ts">
import { ref } from 'vue';
import { Upload } from '@xui-design/vue';
import type { UploadFile } from '@xui-design/core';
import { isZh } from '../../../i18n';

const fileList = ref<UploadFile[]>([]);

// 文档站无真实后端，用模拟上传：1 秒后完成，进度匀速推进
const mockRequest = (
  file: UploadFile,
  options: { action: string; onProgress: (percent: number) => void },
) =>
  new Promise<{ url: string }>((resolve) => {
    let percent = 0;
    const timer = setInterval(() => {
      percent += 20;
      options.onProgress(Math.min(percent, 100));
      if (percent >= 100) {
        clearInterval(timer);
        resolve({ url: \`https://example.com/\${file.name}\` });
      }
    }, 200);
  });
<\/script>

<template>
  <div class="demo-column">
    <Upload v-model:value="fileList" action="/upload" :request-upload="mockRequest" multiple />
    <p class="demo-text">
      {{ isZh() ? \`文件数：\${fileList.length}\` : \`File count: \${fileList.length}\` }}
    </p>
  </div>
</template>
`,VZ=`<script setup lang="ts">
import { ref } from 'vue';
import { Upload } from '@xui-design/vue';
import type { UploadFile } from '@xui-design/core';
import { isZh } from '../../../i18n';

const fileList = ref<UploadFile[]>([]);

const mockRequest = (
  file: UploadFile,
  options: { action: string; onProgress: (percent: number) => void },
) =>
  new Promise<{ url: string }>((resolve) => {
    let percent = 0;
    const timer = setInterval(() => {
      percent += 25;
      options.onProgress(Math.min(percent, 100));
      if (percent >= 100) {
        clearInterval(timer);
        resolve({ url: \`https://example.com/\${file.name}\` });
      }
    }, 200);
  });

// 仅允许图片类型
const beforeUpload = (file: File) => file.type.startsWith('image/');
<\/script>

<template>
  <div class="demo-column">
    <Upload
      v-model:value="fileList"
      action="/upload"
      :request-upload="mockRequest"
      list-type="picture"
      accept="image/*"
      :max-count="3"
      :before-upload="beforeUpload"
    />
    <p class="demo-text">
      {{
        isZh()
          ? 'listType="picture" 图片列表；accept 限制图片；maxCount=3；beforeUpload 校验类型'
          : 'listType="picture" image list; accept restricts to images; maxCount=3; beforeUpload validates type'
      }}
    </p>
  </div>
</template>
`,HZ=`<script setup lang="ts">
import { ref } from 'vue';
import { Upload } from '@xui-design/vue';
import type { UploadFile } from '@xui-design/core';

// 模拟上传：50% 概率成功，随机进度
const mockRequest = (
  file: UploadFile,
  options: { onProgress: (p: number) => void; signal?: AbortSignal },
) =>
  new Promise<{ url?: string; response?: unknown }>((resolve, reject) => {
    let percent = 0;
    const timer = setInterval(() => {
      if (options.signal?.aborted) {
        clearInterval(timer);
        reject(new DOMException('Aborted', 'AbortError'));
        return;
      }
      percent += Math.random() * 20 + 5;
      if (percent >= 100) {
        percent = 100;
        clearInterval(timer);
        if (Math.random() > 0.2) {
          resolve({ url: \`https://example.com/\${file.name}\`, response: { ok: true } });
        } else {
          reject(new Error('模拟上传失败'));
        }
      }
      options.onProgress(Math.min(Math.round(percent), 100));
    }, 300);
  });

const value = ref<UploadFile[]>([]);
<\/script>

<template>
  <div class="demo-column">
    <Upload
      v-model:value="value"
      action="/upload"
      multiple
      :auto-upload="false"
      :request-upload="mockRequest"
    />
    <p class="demo-text">autoUpload=false：选中文件后进入「待上传」状态，点击「开始上传」手动触发。</p>
  </div>
</template>
`,IZ=`import { useState } from 'react';
import { Upload } from '@xui-design/react';
import type { UploadFile } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

const mockRequest = (
  file: UploadFile,
  options: { action: string; onProgress: (percent: number) => void },
) =>
  new Promise<{ url: string }>((resolve) => {
    let percent = 0;
    const timer = setInterval(() => {
      percent += 20;
      options.onProgress(Math.min(percent, 100));
      if (percent >= 100) {
        clearInterval(timer);
        resolve({ url: \`https://example.com/\${file.name}\` });
      }
    }, 200);
  });

export default function UploadBasicDemo() {
  const isZh = useIsZh();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  return (
    <div className="demo-column">
      <Upload
        value={fileList}
        onChange={setFileList}
        action="/upload"
        requestUpload={mockRequest}
        multiple
      />
      <p className="demo-text">
        {isZh ? \`文件数：\${fileList.length}\` : \`File count: \${fileList.length}\`}
      </p>
    </div>
  );
}
`,FZ=`import { useState } from 'react';
import { Upload } from '@xui-design/react';
import type { UploadFile } from '@xui-design/core';
import { useIsZh } from '../../../i18n/use-docs-locale';

const mockRequest = (
  file: UploadFile,
  options: { action: string; onProgress: (percent: number) => void },
) =>
  new Promise<{ url: string }>((resolve) => {
    let percent = 0;
    const timer = setInterval(() => {
      percent += 25;
      options.onProgress(Math.min(percent, 100));
      if (percent >= 100) {
        clearInterval(timer);
        resolve({ url: \`https://example.com/\${file.name}\` });
      }
    }, 200);
  });

// 仅允许图片类型
const beforeUpload = (file: File) => file.type.startsWith('image/');

export default function UploadStateDemo() {
  const isZh = useIsZh();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  return (
    <div className="demo-column">
      <Upload
        value={fileList}
        onChange={setFileList}
        action="/upload"
        requestUpload={mockRequest}
        listType="picture"
        accept="image/*"
        maxCount={3}
        beforeUpload={beforeUpload}
      />
      <p className="demo-text">
        {isZh
          ? 'listType="picture" 图片列表；accept 限制图片；maxCount=3；beforeUpload 校验类型'
          : 'listType="picture" image list; accept restricts to images; maxCount=3; beforeUpload validates type'}
      </p>
    </div>
  );
}
`,qZ=`import { useState } from 'react';
import { Upload } from '@xui-design/react';
import type { UploadFile } from '@xui-design/core';

// 模拟上传：随机进度，80% 成功
const mockRequest = (
  file: UploadFile,
  options: { onProgress: (p: number) => void; signal?: AbortSignal },
) =>
  new Promise<{ url?: string; response?: unknown }>((resolve, reject) => {
    let percent = 0;
    const timer = setInterval(() => {
      if (options.signal?.aborted) {
        clearInterval(timer);
        reject(new DOMException('Aborted', 'AbortError'));
        return;
      }
      percent += Math.random() * 20 + 5;
      if (percent >= 100) {
        clearInterval(timer);
        if (Math.random() > 0.2) {
          resolve({ url: \`https://example.com/\${file.name}\`, response: { ok: true } });
        } else {
          reject(new Error('模拟上传失败'));
        }
      }
      options.onProgress(Math.min(Math.round(percent), 100));
    }, 300);
  });

export default function UploadManualDemo() {
  const [value, setValue] = useState<UploadFile[]>([]);

  return (
    <div className="demo-column">
      <Upload
        value={value}
        onChange={setValue}
        action="/upload"
        multiple
        autoUpload={false}
        requestUpload={mockRequest}
      />
      <p className="demo-text">
        autoUpload=false：选中文件后进入「待上传」状态，点击「开始上传」手动触发。
      </p>
    </div>
  );
}
`,GZ={name:"Upload",slug:"upload",title:"文件上传",category:"form",summary:{"zh-CN":"通过点击选择文件并上传，支持多文件、数量 / 大小限制、图片列表展示与上传前校验。","en-US":"Select and upload files by clicking; supports multiple files, count / size limits, picture list display, and pre-upload validation."},features:[{"zh-CN":"受控 / 非受控双模式，值为 UploadFile[]，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; the value is UploadFile[]; supports v-model:value on Vue"},{"zh-CN":"action 上传地址；requestUpload 可覆盖默认 XMLHttpRequest 实现（便于 SSR 或自定义请求）","en-US":"action is the upload URL; requestUpload can override the default XMLHttpRequest (useful for SSR or custom requests)"},{"zh-CN":"multiple 多选；maxCount 限制文件数；maxSize 限制单文件大小","en-US":"multiple for multi-file; maxCount limits the file count; maxSize limits each file size"},{"zh-CN":"listType 支持 text（默认）与 picture（缩略图列表）","en-US":"listType supports text (default) and picture (thumbnail list)"},{"zh-CN":"beforeUpload 返回 false / reject 时中止上传；accept 限制可选文件类型","en-US":"beforeUpload returning false / a rejected promise aborts the upload; accept restricts selectable file types"},{"zh-CN":"autoUpload=false 时文件进入「待上传」状态，通过 submit() 或「开始上传」按钮手动触发","en-US":'When autoUpload=false, files enter a "pending" state and are uploaded manually via submit() or the "Start Upload" button'},{"zh-CN":"上传中可取消（cancel），状态变为 cancelled；列表项支持上移/下移排序","en-US":"In-progress uploads can be cancelled (status becomes cancelled); list items support move up / down ordering"},{"zh-CN":"上传中实时显示进度百分比、上传速率（KB/s、MB/s）与预估剩余时间","en-US":"Displays real-time progress percentage, upload speed (KB/s, MB/s), and estimated remaining time during upload"},{"zh-CN":"完整状态机：pending / uploading / done / error / cancelled","en-US":"Full state machine: pending / uploading / done / error / cancelled"}],scenarios:[{"zh-CN":"表单中需要上传附件、图片等文件的场景。","en-US":"Form scenarios requiring file uploads such as attachments and images."}],demos:[{id:"basic",title:{"zh-CN":"基础上传","en-US":"Basic Upload"},description:{"zh-CN":"点击选择文件后自动上传（示例使用模拟 requestUpload），支持多选。","en-US":"Files upload automatically after selection (the demo uses a mocked requestUpload); multiple selection supported."},vueComponent:TZ,reactComponent:OZ,vueSource:LZ,reactSource:IZ},{id:"state",title:{"zh-CN":"图片列表与上传前校验","en-US":"Picture List & Pre-upload Validation"},description:{"zh-CN":'listType="picture" 展示缩略图；beforeUpload 仅允许图片；maxCount 限制数量。',"en-US":'listType="picture" shows thumbnails; beforeUpload allows only images; maxCount limits the count.'},vueComponent:$Z,reactComponent:jZ,vueSource:VZ,reactSource:FZ},{id:"manual",title:{"zh-CN":"手动上传 / 取消 / 排序 / 速率","en-US":"Manual Upload / Cancel / Order / Speed"},description:{"zh-CN":"autoUpload=false 时文件进入待上传状态，可手动开始上传；上传中可取消、可排序，实时显示速率与剩余时间。","en-US":"With autoUpload=false files stay pending until manually started; in-progress uploads can be cancelled and reordered, with real-time speed and remaining time displayed."},vueComponent:RZ,reactComponent:DZ,vueSource:HZ,reactSource:qZ}],api:{props:[{name:"action",type:"string",default:"—",required:!0,description:{"zh-CN":"上传地址","en-US":"Upload URL"}},{name:"accept",type:"string",default:"—",description:{"zh-CN":"接受的文件类型（input accept）","en-US":"Accepted file types (input accept)"}},{name:"multiple",type:"boolean",default:"false",description:{"zh-CN":"是否多选","en-US":"Whether to allow multiple files"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"maxCount",type:"number",default:"—",description:{"zh-CN":"最大文件数（超出则忽略多余）","en-US":"Maximum file count (excess files are ignored)"}},{name:"maxSize",type:"number",default:"—",description:{"zh-CN":"单文件最大字节数（超出则报错不上传）","en-US":"Maximum size per file in bytes (excess files are rejected)"}},{name:"listType",type:"'text' | 'picture'",default:"'text'",description:{"zh-CN":"文件列表展示样式","en-US":"File list display style"}},{name:"autoUpload",type:"boolean",default:"true",description:{"zh-CN":"是否自动上传；false 时文件进入 pending，由 submit() 手动触发","en-US":"Whether to upload automatically; when false, files stay pending and are uploaded via submit()"}},{name:"requestUpload",type:"RequestUploadFn",default:"默认 XMLHttpRequest",description:{"zh-CN":"自定义上传请求（覆盖默认 XMLHttpRequest 实现）","en-US":"Custom upload request (overrides the default XMLHttpRequest implementation)"}},{name:"beforeUpload",type:"(file: File) => boolean | Promise<boolean>",default:"—",description:{"zh-CN":"上传前钩子：返回 false / reject 中止上传","en-US":"Pre-upload hook: returning false / a rejected promise aborts the upload"}},{name:"value",type:"UploadFile[]",default:"—",description:{"zh-CN":"受控文件列表","en-US":"Controlled file list"}},{name:"defaultValue",type:"UploadFile[]",default:"—",description:{"zh-CN":"非受控初始文件列表","en-US":"Uncontrolled initial file list"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式","en-US":"Custom inline styles appended to the root element"}},{name:"onChange",type:"(fileList: UploadFile[]) => void",default:"—",description:{"zh-CN":"文件列表变更回调","en-US":"File list change callback"}},{name:"onRemove",type:"(file: UploadFile) => void",default:"—",description:{"zh-CN":"删除文件回调","en-US":"File remove callback"}}],events:[{vue:"change",react:"onChange",payload:"fileList: UploadFile[]",description:{"zh-CN":"文件列表变更","en-US":"Fired when the file list changes"}},{vue:"remove",react:"onRemove",payload:"file: UploadFile",description:{"zh-CN":"删除文件","en-US":"Fired when a file is removed"}},{vue:"update:value",react:"—",payload:"UploadFile[]",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"trigger",react:"renderTrigger",description:{"zh-CN":"自定义上传按钮内容","en-US":"Custom upload trigger content"}},{vue:"fileItem",react:"renderFileItem",description:{"zh-CN":"自定义文件列表项（作用域参数：file）","en-US":"Custom file list item (scoped param: file)"}}],types:[{name:"UploadFile",definition:`interface UploadFile {
  uid: string
  name: string
  size: number
  type: string
  status: 'pending' | 'uploading' | 'done' | 'error' | 'cancelled'
  percent: number
  speed?: number
  remainingTime?: number
  response?: unknown
  url?: string
  raw?: File
}`,description:{"zh-CN":"上传文件项数据结构；speed 为上传速率（字节/秒），remainingTime 为预估剩余时间（秒）。","en-US":"Data structure of an uploaded file item; speed is the upload rate (bytes/s), remainingTime is the estimated remaining time (seconds)."}},{name:"RequestUploadFn",definition:`type RequestUploadFn = (
  file: UploadFile,
  options: { action: string; onProgress: (percent: number) => void; signal?: AbortSignal }
) => Promise<{ url?: string; response?: unknown }>`,description:{"zh-CN":"自定义上传请求函数签名；signal 用于支持取消上传。","en-US":"Signature of a custom upload request function; signal supports cancelling the upload."}}]},notes:[{"zh-CN":"默认使用 XMLHttpRequest 上传；SSR 或非浏览器环境需通过 requestUpload 提供实现。","en-US":"The default uses XMLHttpRequest; for SSR or non-browser environments, provide an implementation via requestUpload."},{"zh-CN":"beforeUpload 返回 false 或 reject 的 Promise 时，文件不会进入上传流程。","en-US":"When beforeUpload returns false or a rejected promise, the file does not enter the upload flow."},{"zh-CN":"maxCount 限制文件总数（含已上传），超出部分直接忽略；maxSize 超限的文件标记为 error 不上传。","en-US":"maxCount limits the total file count (including uploaded); excess files are ignored. Files exceeding maxSize are marked as error and not uploaded."},{"zh-CN":"autoUpload=false 时，文件进入 pending 状态，需调用 submit() 或点击「开始上传」触发；cancelled 状态的文件需删除后重新选择。","en-US":'When autoUpload=false, files enter pending state and require submit() or the "Start Upload" button; cancelled files must be removed and re-selected.'}],a11y:[{"zh-CN":"上传触发区域为可聚焦的原生按钮，禁用状态透传 disabled。","en-US":"The upload trigger is a focusable native button; the disabled state passes through the disabled attribute."}]},Iy=[A$,J$,fE,RE,FE,oR,bR,$R,nA,fA,wA,MA,XA,mO,TO,jO,XO,sB,yB,EB,HB,WB,m8,k8,I8,dZ,kZ,GZ],Fy=new Map(Iy.map(e=>[e.slug,e])),YZ=()=>_T.map(e=>({category:e,components:CT.filter(t=>t.category===e.key)}));function PZ(e,t){const n=Dy.createRoot(e);return n.render(B.createElement(t)),n}var qy={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(a){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,o={},s={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function f(y){return y instanceof u?new u(y.type,f(y.content),y.alias):Array.isArray(y)?y.map(f):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++i}),f.__id},clone:function f(y,_){_=_||{};var T,w;switch(s.util.type(y)){case"Object":if(w=s.util.objId(y),_[w])return _[w];T={},_[w]=T;for(var R in y)y.hasOwnProperty(R)&&(T[R]=f(y[R],_));return T;case"Array":return w=s.util.objId(y),_[w]?_[w]:(T=[],_[w]=T,y.forEach(function(A,O){T[O]=f(A,_)}),T);default:return y}},getLanguage:function(f){for(;f;){var y=l.exec(f.className);if(y)return y[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,y){f.className=f.className.replace(RegExp(l,"gi"),""),f.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(T){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(f){var y=document.getElementsByTagName("script");for(var _ in y)if(y[_].src==f)return y[_]}return null}},isActive:function(f,y,_){for(var T="no-"+y;f;){var w=f.classList;if(w.contains(y))return!0;if(w.contains(T))return!1;f=f.parentElement}return!!_}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(f,y){var _=s.util.clone(s.languages[f]);for(var T in y)_[T]=y[T];return _},insertBefore:function(f,y,_,T){T=T||s.languages;var w=T[f],R={};for(var A in w)if(w.hasOwnProperty(A)){if(A==y)for(var O in _)_.hasOwnProperty(O)&&(R[O]=_[O]);_.hasOwnProperty(A)||(R[A]=w[A])}var L=T[f];return T[f]=R,s.languages.DFS(s.languages,function(te,j){j===L&&te!=f&&(this[te]=R)}),R},DFS:function f(y,_,T,w){w=w||{};var R=s.util.objId;for(var A in y)if(y.hasOwnProperty(A)){_.call(y,A,y[A],T||A);var O=y[A],L=s.util.type(O);L==="Object"&&!w[R(O)]?(w[R(O)]=!0,f(O,_,null,w)):L==="Array"&&!w[R(O)]&&(w[R(O)]=!0,f(O,_,A,w))}}},plugins:{},highlightAll:function(f,y){s.highlightAllUnder(document,f,y)},highlightAllUnder:function(f,y,_){var T={callback:_,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),s.hooks.run("before-all-elements-highlight",T);for(var w=0,R;R=T.elements[w++];)s.highlightElement(R,y===!0,T.callback)},highlightElement:function(f,y,_){var T=s.util.getLanguage(f),w=s.languages[T];s.util.setLanguage(f,T);var R=f.parentElement;R&&R.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(R,T);var A=f.textContent,O={element:f,language:T,grammar:w,code:A};function L(j){O.highlightedCode=j,s.hooks.run("before-insert",O),O.element.innerHTML=O.highlightedCode,s.hooks.run("after-highlight",O),s.hooks.run("complete",O),_&&_.call(O.element)}if(s.hooks.run("before-sanity-check",O),R=O.element.parentElement,R&&R.nodeName.toLowerCase()==="pre"&&!R.hasAttribute("tabindex")&&R.setAttribute("tabindex","0"),!O.code){s.hooks.run("complete",O),_&&_.call(O.element);return}if(s.hooks.run("before-highlight",O),!O.grammar){L(s.util.encode(O.code));return}if(y&&a.Worker){var te=new Worker(s.filename);te.onmessage=function(j){L(j.data)},te.postMessage(JSON.stringify({language:O.language,code:O.code,immediateClose:!0}))}else L(s.highlight(O.code,O.grammar,O.language))},highlight:function(f,y,_){var T={code:f,grammar:y,language:_};if(s.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=s.tokenize(T.code,T.grammar),s.hooks.run("after-tokenize",T),u.stringify(s.util.encode(T.tokens),T.language)},tokenize:function(f,y){var _=y.rest;if(_){for(var T in _)y[T]=_[T];delete y.rest}var w=new m;return h(w,w.head,f),p(f,w,y,w.head,0),k(w)},hooks:{all:{},add:function(f,y){var _=s.hooks.all;_[f]=_[f]||[],_[f].push(y)},run:function(f,y){var _=s.hooks.all[f];if(!(!_||!_.length))for(var T=0,w;w=_[T++];)w(y)}},Token:u};a.Prism=s;function u(f,y,_,T){this.type=f,this.content=y,this.alias=_,this.length=(T||"").length|0}u.stringify=function f(y,_){if(typeof y=="string")return y;if(Array.isArray(y)){var T="";return y.forEach(function(L){T+=f(L,_)}),T}var w={type:y.type,content:f(y.content,_),tag:"span",classes:["token",y.type],attributes:{},language:_},R=y.alias;R&&(Array.isArray(R)?Array.prototype.push.apply(w.classes,R):w.classes.push(R)),s.hooks.run("wrap",w);var A="";for(var O in w.attributes)A+=" "+O+'="'+(w.attributes[O]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+A+">"+w.content+"</"+w.tag+">"};function d(f,y,_,T){f.lastIndex=y;var w=f.exec(_);if(w&&T&&w[1]){var R=w[1].length;w.index+=R,w[0]=w[0].slice(R)}return w}function p(f,y,_,T,w,R){for(var A in _)if(!(!_.hasOwnProperty(A)||!_[A])){var O=_[A];O=Array.isArray(O)?O:[O];for(var L=0;L<O.length;++L){if(R&&R.cause==A+","+L)return;var te=O[L],j=te.inside,I=!!te.lookbehind,q=!!te.greedy,me=te.alias;if(q&&!te.pattern.global){var V=te.pattern.toString().match(/[imsuy]*$/)[0];te.pattern=RegExp(te.pattern.source,V+"g")}for(var oe=te.pattern||te,X=T.next,Z=w;X!==y.tail&&!(R&&Z>=R.reach);Z+=X.value.length,X=X.next){var P=X.value;if(y.length>f.length)return;if(!(P instanceof u)){var Q=1,ce;if(q){if(ce=d(oe,Z,f,I),!ce||ce.index>=f.length)break;var Tt=ce.index,Ie=ce.index+ce[0].length,Fe=Z;for(Fe+=X.value.length;Tt>=Fe;)X=X.next,Fe+=X.value.length;if(Fe-=X.value.length,Z=Fe,X.value instanceof u)continue;for(var dt=X;dt!==y.tail&&(Fe<Ie||typeof dt.value=="string");dt=dt.next)Q++,Fe+=dt.value.length;Q--,P=f.slice(Z,Fe),ce.index-=Z}else if(ce=d(oe,0,P,I),!ce)continue;var Tt=ce.index,ia=ce[0],gn=P.slice(0,Tt),ie=P.slice(Tt+ia.length),Se=Z+P.length;R&&Se>R.reach&&(R.reach=Se);var tt=X.prev;gn&&(tt=h(y,tt,gn),Z+=gn.length),v(y,tt,Q);var ue=new u(A,j?s.tokenize(ia,j):ia,me,ia);if(X=h(y,tt,ue),ie&&h(y,X,ie),Q>1){var Me={cause:A+","+L,reach:Se};p(f,y,_,X.prev,Z,Me),R&&Me.reach>R.reach&&(R.reach=Me.reach)}}}}}}function m(){var f={value:null,prev:null,next:null},y={value:null,prev:f,next:null};f.next=y,this.head=f,this.tail=y,this.length=0}function h(f,y,_){var T=y.next,w={value:_,prev:y,next:T};return y.next=w,T.prev=w,f.length++,w}function v(f,y,_){for(var T=y.next,w=0;w<_&&T!==f.tail;w++)T=T.next;y.next=T,T.prev=y,f.length-=w}function k(f){for(var y=[],_=f.head.next;_!==f.tail;)y.push(_.value),_=_.next;return y}if(!a.document)return a.addEventListener&&(s.disableWorkerMessageHandler||a.addEventListener("message",function(f){var y=JSON.parse(f.data),_=y.language,T=y.code,w=y.immediateClose;a.postMessage(s.highlight(T,s.languages[_],_)),w&&a.close()},!1)),s;var S=s.util.currentScript();S&&(s.filename=S.src,S.hasAttribute("data-manual")&&(s.manual=!0));function C(){s.manual||s.highlightAll()}if(!s.manual){var b=document.readyState;b==="loading"||b==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",C):window.requestAnimationFrame?window.requestAnimationFrame(C):window.setTimeout(C,16)}return s}(t);e.exports&&(e.exports=n),typeof pp<"u"&&(pp.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(l,i){var o={};o["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};s["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var u={};u[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(a,l){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:n.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(a){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+l.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var i=a.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",l=function(S,C){return"✖ Error "+S+" while fetching file: "+C},i="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",u="loading",d="loaded",p="failed",m="pre[data-src]:not(["+s+'="'+d+'"]):not(['+s+'="'+u+'"])';function h(S,C,b){var f=new XMLHttpRequest;f.open("GET",S,!0),f.onreadystatechange=function(){f.readyState==4&&(f.status<400&&f.responseText?C(f.responseText):f.status>=400?b(l(f.status,f.statusText)):b(i))},f.send(null)}function v(S){var C=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(S||"");if(C){var b=Number(C[1]),f=C[2],y=C[3];return f?y?[b,Number(y)]:[b,void 0]:[b,b]}}n.hooks.add("before-highlightall",function(S){S.selector+=", "+m}),n.hooks.add("before-sanity-check",function(S){var C=S.element;if(C.matches(m)){S.code="",C.setAttribute(s,u);var b=C.appendChild(document.createElement("CODE"));b.textContent=a;var f=C.getAttribute("data-src"),y=S.language;if(y==="none"){var _=(/\.(\w+)$/.exec(f)||[,"none"])[1];y=o[_]||_}n.util.setLanguage(b,y),n.util.setLanguage(C,y);var T=n.plugins.autoloader;T&&T.loadLanguages(y),h(f,function(w){C.setAttribute(s,d);var R=v(C.getAttribute("data-range"));if(R){var A=w.split(/\r\n?|\n/g),O=R[0],L=R[1]==null?A.length:R[1];O<0&&(O+=A.length),O=Math.max(0,Math.min(O-1,A.length)),L<0&&(L+=A.length),L=Math.max(0,Math.min(L,A.length)),w=A.slice(O,L).join(`
`),C.hasAttribute("data-start")||C.setAttribute("data-start",String(O+1))}b.textContent=w,n.highlightElement(b)},function(w){C.setAttribute(s,p),b.textContent=w})}}),n.plugins.fileHighlight={highlight:function(C){for(var b=(C||document).querySelectorAll(m),f=0,y;y=b[f++];)n.highlightElement(y)}};var k=!1;n.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(qy);var KZ=qy.exports;const vs=ET(KZ);Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,o=0;o<l.length;o++)i[l[o]]=e.languages.bash[l[o]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const XZ={nav:{start:"开始",intro:"介绍",theme:"主题定制",i18n:"国际化",floating:"浮层视口避让",soon:"待补充"},topbar:{light:"明亮",dark:"暗黑",system:"跟随系统",switchLang:"English"},component:{features:"功能特性",scenarios:"使用场景",demos:"代码演示",demosHint:"每个 demo 均可切换 Vue / React 标签页实时交互，并可展开查看对应框架源码。",api:"API 文档",notes:"注意事项",a11y:"无障碍",notFoundTitle:"该组件文档尚未上线",notFoundDesc:"组件已在规划清单中，文档正在陆续补充。",backHome:"返回首页"},demo:{showCode:"查看代码",hideCode:"隐藏代码"},code:{copy:"复制",copied:"已复制"},api:{prop:"属性",type:"类型",default:"默认值",description:"说明",required:"必填",eventsTitle:"Events / 回调",vueEvent:"Events（Vue）",reactCallback:"回调（React）",payload:"载荷",slotsTitle:"Slots / 渲染回调",vueSlot:"插槽（Vue）",methodsTitle:"命令式方法",method:"方法",signature:"签名",typesTitle:"契约类型"},toc:{title:"目录"},home:{heroDesc:"一套核心契约，Vue 3 与 React 19 双端同构的通用组件库",onlineBadge:"组件文档已上线",featuresTitle:"特性",installTitle:"安装",quickStartTitle:"快速开始",overviewTitle:"组件总览",features:[{title:"单一契约 @xui-design/core",desc:"ComponentSpec 是双端唯一合同，Props / Events / Slots 由契约层定义，适配层不得新增分歧。"},{title:"Vue / React 双端同构",desc:"同名组件、同 API 口径：Vue 事件 ↔ React 回调、Vue 插槽 ↔ React renderXxx 一一映射。"},{title:"样式单一来源",desc:"@xui-design/styles 统一输出 BEM 类名与 CSS 变量主题，双端零样式漂移。"},{title:"核心逻辑单份实现",desc:"@xui-design/shared 承载状态与交互逻辑，双端只做薄适配；TypeScript 严格模式全量类型贯通。"}],installCoreComment:"# 如需直接引用契约类型（TableColumn 等），再安装类型包",installStyleComment:"# 应用入口引入一次样式",pendingDesc:"文档建设中"}},QZ={nav:{start:"Getting Started",intro:"Introduction",theme:"Theming",i18n:"Internationalization",floating:"Floating Positioning",soon:"Soon"},topbar:{light:"Light",dark:"Dark",system:"System",switchLang:"中文"},component:{features:"Features",scenarios:"When to Use",demos:"Examples",demosHint:"Each demo can be switched between Vue and React tabs for live interaction, with source code available per framework.",api:"API",notes:"Notes",a11y:"Accessibility",notFoundTitle:"Documentation for this component is not available yet",notFoundDesc:"The component is on the roadmap and its documentation is being actively written.",backHome:"Back to Home"},demo:{showCode:"Show Code",hideCode:"Hide Code"},code:{copy:"Copy",copied:"Copied"},api:{prop:"Prop",type:"Type",default:"Default",description:"Description",required:"Required",eventsTitle:"Events / Callbacks",vueEvent:"Event (Vue)",reactCallback:"Callback (React)",payload:"Payload",slotsTitle:"Slots / Render Callbacks",vueSlot:"Slot (Vue)",methodsTitle:"Imperative Methods",method:"Method",signature:"Signature",typesTitle:"Contract Types"},toc:{title:"On this page"},home:{heroDesc:"A universal component library with a single core contract, isomorphic across Vue 3 and React 19",onlineBadge:"component docs available",featuresTitle:"Features",installTitle:"Installation",quickStartTitle:"Quick Start",overviewTitle:"Components Overview",features:[{title:"Single Contract @xui-design/core",desc:"ComponentSpec is the only contract for both frameworks. Props / Events / Slots are defined at the contract layer; adapters must not diverge."},{title:"Isomorphic Vue / React",desc:"Same components, same API surface: Vue events map to React callbacks, Vue slots map to React renderXxx props one by one."},{title:"Single Source of Styles",desc:"@xui-design/styles ships unified BEM class names and CSS variable theming — zero style drift across frameworks."},{title:"Single Core Logic Implementation",desc:"@xui-design/shared holds state and interaction logic; both adapters stay thin. Fully typed under TypeScript strict mode."}],installCoreComment:"# Install the types package if you need contract types (e.g. TableColumn)",installStyleComment:"# Import styles once in your app entry",pendingDesc:"Docs in progress"}},JZ={"zh-CN":XZ,"en-US":QZ},iu=()=>Y(()=>JZ[pT.locale]),WZ={class:"code-block"},e4={class:"code-block__bar"},t4={class:"code-block__lang"},n4={class:"code-block__pre"},a4=["innerHTML"],wr=D({__name:"CodeBlock",props:{code:{},lang:{}},setup(e){const t=iu(),n=e,a=F(!1);let l;const i={vue:"Vue",react:"React TSX",bash:"Shell"},o=Y(()=>{const d={vue:vs.languages.markup,react:vs.languages.typescript,bash:vs.languages.bash}[n.lang];return d?vs.highlight(n.code,d,n.lang):n.code}),s=async()=>{try{await navigator.clipboard.writeText(n.code),a.value=!0,clearTimeout(l),l=setTimeout(()=>{a.value=!1},1500)}catch{}};return(u,d)=>(g(),x("div",WZ,[N("div",e4,[N("span",t4,$(i[e.lang]),1),N("button",{type:"button",class:"code-block__copy",onClick:s},$(a.value?r(t).code.copied:r(t).code.copy),1)]),N("pre",n4,[N("code",{class:J(["code-block__code",`language-${e.lang}`]),innerHTML:o.value},null,10,a4)])]))}}),l4={class:"demo-block"},i4={class:"demo-block__header"},o4={class:"demo-block__tabs",role:"tablist"},s4=["aria-selected"],r4=["aria-selected"],u4={class:"demo-block__stage"},c4={class:"demo-block__footer"},d4={class:"demo-block__code"},Gy=D({__name:"DemoBlock",props:{demo:{}},setup(e){const t=e,n=iu(),a=F("vue"),l=F(!0),i=F(null);let o=null;const s=()=>{o==null||o.unmount(),o=null};return Xe(a,async u=>{u==="react"?(await Ot(),i.value!==null&&o===null&&(o=PZ(i.value,t.demo.reactComponent))):s()}),Td(s),(u,d)=>{const p=Da("ClientOnly");return g(),x("section",l4,[N("div",i4,[N("div",o4,[N("button",{type:"button",class:J(["demo-block__tab",{"is-active":a.value==="vue"}]),role:"tab","aria-selected":a.value==="vue",onClick:d[0]||(d[0]=m=>a.value="vue")}," Vue ",10,s4),N("button",{type:"button",class:J(["demo-block__tab",{"is-active":a.value==="react"}]),role:"tab","aria-selected":a.value==="react",onClick:d[1]||(d[1]=m=>a.value="react")}," React ",10,r4)])]),z(p,null,{default:E(()=>[N("div",u4,[a.value==="vue"?(g(),ae(sn(e.demo.vueComponent),{key:0})):(g(),x("div",{key:1,ref_key:"reactHost",ref:i,class:"demo-block__react-host"},null,512))])]),_:1}),N("div",c4,[N("button",{type:"button",class:"demo-block__toggle",onClick:d[2]||(d[2]=m=>l.value=!l.value)},$(l.value?r(n).demo.hideCode:r(n).demo.showCode),1)]),hh(N("div",d4,[z(wr,{code:a.value==="vue"?e.demo.vueSource:e.demo.reactSource,lang:a.value},null,8,["code","lang"])],512),[[mS,l.value]])])}}}),m4=D({__name:"ComponentDemo",props:{slug:{},demoId:{}},setup(e){const t=e,n=Y(()=>{var a;return(a=Fy.get(t.slug))==null?void 0:a.demos.find(l=>l.id===t.demoId)});return(a,l)=>n.value?(g(),ae(Gy,{key:0,demo:n.value},null,8,["demo"])):H("",!0)}}),p4={class:"api-table-wrap"},f4={class:"api-table"},h4={class:"api-table__name"},v4=["title"],g4={class:"api-table__type"},b4={class:"api-table__default"},y4={class:"docs-subsection-title"},S4={class:"api-table-wrap"},x4={class:"api-table"},_4={class:"api-table__name"},C4={class:"api-table__name"},k4={class:"api-table__type"},N4={class:"docs-subsection-title"},w4={class:"api-table-wrap"},T4={class:"api-table"},z4={class:"api-table__name"},U4={class:"api-table__name"},$4={class:"docs-subsection-title"},E4={class:"api-table-wrap"},R4={class:"api-table"},A4={class:"api-table__name"},O4={class:"api-table__signature"},B4={class:"docs-subsection-title"},Z4={class:"api-type-block__head"},j4={class:"api-type-block__name"},M4={key:0,class:"api-type-block__desc"},Yy=D({__name:"ApiSection",props:{api:{},kind:{default:void 0}},setup(e){const t=e,n=iu(),a=l=>t.kind===void 0||t.kind===l;return(l,i)=>(g(),x("div",null,[a("props")&&e.api.props&&e.api.props.length>0?(g(),x(ne,{key:0},[i[0]||(i[0]=N("h3",{class:"docs-subsection-title"},"Props",-1)),N("div",p4,[N("table",f4,[N("thead",null,[N("tr",null,[N("th",null,$(r(n).api.prop),1),N("th",null,$(r(n).api.type),1),N("th",null,$(r(n).api.default),1),N("th",null,$(r(n).api.description),1)])]),N("tbody",null,[(g(!0),x(ne,null,pe(e.api.props,o=>(g(),x("tr",{key:o.name},[N("td",h4,[G($(o.name),1),o.required?(g(),x("span",{key:0,class:"api-table__required",title:r(n).api.required},"*",8,v4)):H("",!0)]),N("td",g4,$(o.type),1),N("td",b4,$(o.default),1),N("td",null,$(r(Ya)(o.description)),1)]))),128))])])])],64)):H("",!0),a("events")&&e.api.events&&e.api.events.length>0?(g(),x(ne,{key:1},[N("h3",y4,$(r(n).api.eventsTitle),1),N("div",S4,[N("table",x4,[N("thead",null,[N("tr",null,[N("th",null,$(r(n).api.vueEvent),1),N("th",null,$(r(n).api.reactCallback),1),N("th",null,$(r(n).api.payload),1),N("th",null,$(r(n).api.description),1)])]),N("tbody",null,[(g(!0),x(ne,null,pe(e.api.events,o=>(g(),x("tr",{key:o.vue},[N("td",_4,$(o.vue),1),N("td",C4,$(o.react),1),N("td",k4,$(o.payload),1),N("td",null,$(r(Ya)(o.description)),1)]))),128))])])])],64)):H("",!0),a("slots")&&e.api.slots&&e.api.slots.length>0?(g(),x(ne,{key:2},[N("h3",N4,$(r(n).api.slotsTitle),1),N("div",w4,[N("table",T4,[N("thead",null,[N("tr",null,[N("th",null,$(r(n).api.vueSlot),1),N("th",null,$(r(n).api.reactCallback),1),N("th",null,$(r(n).api.description),1)])]),N("tbody",null,[(g(!0),x(ne,null,pe(e.api.slots,o=>(g(),x("tr",{key:o.vue},[N("td",z4,$(o.vue),1),N("td",U4,$(o.react),1),N("td",null,$(r(Ya)(o.description)),1)]))),128))])])])],64)):H("",!0),a("methods")&&e.api.methods&&e.api.methods.length>0?(g(),x(ne,{key:3},[N("h3",$4,$(r(n).api.methodsTitle),1),N("div",E4,[N("table",R4,[N("thead",null,[N("tr",null,[N("th",null,$(r(n).api.method),1),N("th",null,$(r(n).api.signature),1),N("th",null,$(r(n).api.description),1)])]),N("tbody",null,[(g(!0),x(ne,null,pe(e.api.methods,o=>(g(),x("tr",{key:o.name},[N("td",A4,$(o.name),1),N("td",O4,$(o.signature),1),N("td",null,$(r(Ya)(o.description)),1)]))),128))])])])],64)):H("",!0),a("types")&&e.api.types&&e.api.types.length>0?(g(),x(ne,{key:4},[N("h3",B4,$(r(n).api.typesTitle),1),(g(!0),x(ne,null,pe(e.api.types,o=>(g(),x("div",{key:o.name,class:"api-type-block"},[N("div",Z4,[N("span",j4,$(o.name),1),o.description?(g(),x("span",M4,$(r(Ya)(o.description)),1)):H("",!0)]),z(wr,{code:o.definition,lang:"react"},null,8,["code"])]))),128))],64)):H("",!0)]))}}),D4=D({__name:"ComponentApi",props:{slug:{},kind:{}},setup(e){const t=e,n=Y(()=>Fy.get(t.slug));return(a,l)=>n.value?(g(),ae(Yy,{key:0,api:n.value.api,kind:e.kind},null,8,["api","kind"])):H("",!0)}}),L4={class:"demo-column"},V4={class:"demo-row"},H4={class:"demo-row"},I4=D({__name:"dark",setup(e){const t=F(mo()),n=F(!0),a=F("");(()=>{a.value=U()?"跟随主题的输入框":"Themed input"})();const i=s=>{Ar(s),t.value=mo()},o=()=>{t.value=Rh()};return(s,u)=>(g(),x("div",L4,[N("div",V4,[z(r(W),{type:"primary",onClick:u[0]||(u[0]=d=>i("dark"))},{default:E(()=>[G($(r(U)()?"切换为暗色":"Switch to Dark"),1)]),_:1}),z(r(W),{onClick:u[1]||(u[1]=d=>i("light"))},{default:E(()=>[G($(r(U)()?"切换为浅色":"Switch to Light"),1)]),_:1}),z(r(W),{type:"link",onClick:o},{default:E(()=>[G($(r(U)()?"往返切换":"Toggle"),1)]),_:1}),z(r(_n),{type:t.value==="dark"?"warning":"primary"},{default:E(()=>[G($(r(U)()?"当前":"Current")+"："+$(t.value==="dark"?"dark":"light"),1)]),_:1},8,["type"])]),z(r(Nl),{type:"info",title:r(U)()?"全局主题":"Global Theme",description:r(U)()?"Alert / Button / Input / Switch 等组件颜色全部随主题联动。":"Alert / Button / Input / Switch colors all follow the theme."},null,8,["title","description"]),N("div",H4,[z(r(st),{value:a.value,"onUpdate:value":u[2]||(u[2]=d=>a.value=d),style:{width:"220px"}},null,8,["value"]),z(r(Bt),{value:n.value,"onUpdate:value":u[3]||(u[3]=d=>n.value=d)},null,8,["value"])])]))}});function F4(){const e=se(),[t,n]=B.useState(mo()),[a,l]=B.useState(!0),[i,o]=B.useState(e?"跟随主题的输入框":"Themed input"),s=u=>{Ar(u),n(mo())};return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{type:"primary",onClick:()=>s("dark"),children:e?"切换为暗色":"Switch to Dark"}),c.jsx(ee,{onClick:()=>s("light"),children:e?"切换为浅色":"Switch to Light"}),c.jsx(ee,{type:"link",onClick:()=>n(Rh()),children:e?"往返切换":"Toggle"}),c.jsxs(Cn,{type:t==="dark"?"warning":"primary",children:[e?"当前":"Current","：",t==="dark"?"dark":"light"]})]}),c.jsx(Tl,{type:"info",title:e?"全局主题":"Global Theme",description:e?"Alert / Button / Input / Switch 等组件颜色全部随主题联动。":"Alert / Button / Input / Switch colors all follow the theme."}),c.jsxs("div",{className:"demo-row",children:[c.jsx(ut,{value:i,onInput:o,style:{width:"220px"}}),c.jsx(Zt,{value:a,onChange:l})]})]})}const q4={class:"demo-column"},G4={class:"demo-row"},Y4={class:"demo-row"},P4=D({__name:"tokens",setup(e){const t=F(!0),n={emerald:{"--xui-color-primary":"#10b981","--xui-color-primary-hover":"#059669","--xui-color-primary-active":"#047857"},amber:{"--xui-color-primary":"#f59e0b","--xui-color-primary-hover":"#d97706","--xui-color-primary-active":"#b45309"},rose:{"--xui-color-primary":"#f43f5e","--xui-color-primary-hover":"#e11d48","--xui-color-primary-active":"#be123c"}},a=l=>Ah(n[l]);return(l,i)=>(g(),x("div",q4,[N("div",G4,[z(r(W),{onClick:i[0]||(i[0]=o=>a("emerald"))},{default:E(()=>[G($(r(U)()?"翡翠绿":"Emerald"),1)]),_:1}),z(r(W),{onClick:i[1]||(i[1]=o=>a("amber"))},{default:E(()=>[G($(r(U)()?"琥珀橙":"Amber"),1)]),_:1}),z(r(W),{onClick:i[2]||(i[2]=o=>a("rose"))},{default:E(()=>[G($(r(U)()?"玫红":"Rose"),1)]),_:1}),z(r(W),{type:"link",onClick:i[3]||(i[3]=o=>r(Oh)())},{default:E(()=>[G($(r(U)()?"恢复默认品牌色":"Reset to default brand color"),1)]),_:1})]),N("div",Y4,[z(r(W),{type:"primary"},{default:E(()=>[G($(r(U)()?"主色按钮":"Primary button"),1)]),_:1}),z(r(_n),{type:"primary"},{default:E(()=>[G($(r(U)()?"主色标签":"Primary tag"),1)]),_:1}),z(r(Bt),{value:t.value,"onUpdate:value":i[4]||(i[4]=o=>t.value=o)},null,8,["value"])])]))}}),oh={emerald:{"--xui-color-primary":"#10b981","--xui-color-primary-hover":"#059669","--xui-color-primary-active":"#047857"},amber:{"--xui-color-primary":"#f59e0b","--xui-color-primary-hover":"#d97706","--xui-color-primary-active":"#b45309"},rose:{"--xui-color-primary":"#f43f5e","--xui-color-primary-hover":"#e11d48","--xui-color-primary-active":"#be123c"}},sh={emerald:{zh:"翡翠绿",en:"Emerald"},amber:{zh:"琥珀橙",en:"Amber"},rose:{zh:"玫红",en:"Rose"}};function K4(){const e=se(),[t,n]=B.useState(!0);return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{className:"demo-row",children:[Object.keys(oh).map(a=>c.jsx(ee,{onClick:()=>Ah(oh[a]),children:e?sh[a].zh:sh[a].en},a)),c.jsx(ee,{type:"link",onClick:()=>Oh(),children:e?"恢复默认品牌色":"Reset to default brand color"})]}),c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{type:"primary",children:e?"主色按钮":"Primary button"}),c.jsx(Cn,{type:"primary",children:e?"主色标签":"Primary tag"}),c.jsx(Zt,{value:t,onChange:n})]})]})}const X4={class:"demo-column"},Q4={class:"demo-text"},J4={class:"demo-row",style:{"--xui-color-primary":"#7c3aed","--xui-color-primary-hover":"#6d28d9","--xui-color-primary-active":"#5b21b6"}},W4={class:"demo-row",style:{"--xui-color-danger":"#0ea5e9"}},ej=D({__name:"component",setup(e){return(t,n)=>(g(),x("div",X4,[N("p",Q4,$(r(U)()?"在组件 style 上写 CSS 变量即可覆盖主题，仅作用于该组件子树：":"Write CSS variables in the component style to override the theme, scoped to that component subtree only:"),1),N("div",J4,[z(r(W),{type:"primary"},{default:E(()=>[G($(r(U)()?"紫色子树":"Purple subtree"),1)]),_:1}),z(r(Bt),{value:!0})]),N("div",W4,[z(r(W),{type:"danger"},{default:E(()=>[G($(r(U)()?"danger 覆盖为天蓝":"danger overridden to sky blue"),1)]),_:1}),z(r(W),{type:"primary"},{default:E(()=>[G($(r(U)()?"不受影响":"Unaffected"),1)]),_:1})])]))}});function tj(){const e=se();return c.jsxs("div",{className:"demo-column",children:[c.jsx("p",{className:"demo-text",children:e?"在组件 style 上写 CSS 变量即可覆盖主题，仅作用于该组件子树：":"Write CSS variables in the component style to override the theme, scoped to that component subtree only:"}),c.jsxs("div",{className:"demo-row",style:{"--xui-color-primary":"#7c3aed","--xui-color-primary-hover":"#6d28d9","--xui-color-primary-active":"#5b21b6"},children:[c.jsx(ee,{type:"primary",children:e?"紫色子树":"Purple subtree"}),c.jsx(Zt,{value:!0})]}),c.jsxs("div",{className:"demo-row",style:{"--xui-color-danger":"#0ea5e9"},children:[c.jsx(ee,{type:"danger",children:e?"danger 覆盖为天蓝":"danger overridden to sky blue"}),c.jsx(ee,{type:"primary",children:e?"不受影响":"Unaffected"})]})]})}const nj=`<script setup lang="ts">
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
`,aj=`import { useState } from 'react';
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
`,lj=`<script setup lang="ts">
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
`,ij=`import { useState } from 'react';
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
`,oj=`<script setup lang="ts">
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
`,sj=`import type { CSSProperties } from 'react';
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
`,rj=[{id:"dark",title:{"zh-CN":"全局明暗主题切换","en-US":"Global Light & Dark Switching"},description:{"zh-CN":"setTheme 写入 <html data-theme>，全部组件的语义色联动切换；toggleTheme 在 light / dark 间往返。","en-US":"setTheme writes <html data-theme> and every component switches semantic colors accordingly; toggleTheme alternates between light and dark."},vueComponent:I4,reactComponent:F4,vueSource:nj,reactSource:aj},{id:"tokens",title:{"zh-CN":"全局品牌色 token（setThemeTokens）","en-US":"Global Brand Tokens (setThemeTokens)"},description:{"zh-CN":"setThemeTokens 将 CSS 变量写入 <html>，全站所有组件生效；clearThemeTokens 仅清除本 API 写入的 token。","en-US":"setThemeTokens writes CSS variables to <html>, affecting every component site-wide; clearThemeTokens only removes tokens written by this API."},vueComponent:P4,reactComponent:K4,vueSource:lj,reactSource:ij},{id:"scoped",title:{"zh-CN":"组件级主题定制","en-US":"Component-Level Theming"},description:{"zh-CN":"无需任何 API：在组件 style 上直接写 CSS 变量，级联仅作用于该子树，优先级高于全局 token。","en-US":"No API needed: write CSS variables directly on a component style; the cascade applies only to that subtree and takes precedence over global tokens."},vueComponent:ej,reactComponent:tj,vueSource:oj,reactSource:sj}],uj={methods:[{name:"setTheme",signature:"(theme: XuiTheme) => void",description:{"zh-CN":"切换明暗主题（写入 <html data-theme>），值未变化时静默返回","en-US":"Switches the light/dark theme (writes <html data-theme>); returns silently when the value is unchanged"}},{name:"getTheme",signature:"() => XuiTheme",description:{"zh-CN":"读取当前主题；SSR / 无 DOM 环境返回 light","en-US":"Reads the current theme; returns light in SSR / DOM-less environments"}},{name:"toggleTheme",signature:"() => XuiTheme",description:{"zh-CN":"在 light / dark 间往返切换，返回切换后的主题","en-US":"Toggles between light and dark, returning the new theme"}},{name:"subscribeTheme",signature:"(listener: (theme: XuiTheme) => void) => () => void",description:{"zh-CN":"订阅主题变化，返回取消订阅函数","en-US":"Subscribes to theme changes; returns an unsubscribe function"}},{name:"setThemeTokens",signature:"(tokens: ThemeTokens) => void",description:{"zh-CN":"写入全局主题 token（CSS 变量，作用于 <html> 全站生效）；仅接受 -- 开头的变量名，重复调用按合并语义追加 / 覆盖","en-US":"Writes global theme tokens (CSS variables on <html>, effective site-wide); only accepts names starting with --; repeated calls merge, adding or overriding incrementally"}},{name:"clearThemeTokens",signature:"() => void",description:{"zh-CN":"清除全部通过 setThemeTokens 写入的 token（不影响 data-theme 与应用自身变量）","en-US":"Removes all tokens written by setThemeTokens (does not affect data-theme or app-defined variables)"}}],types:[{name:"XuiTheme",definition:"type XuiTheme = 'light' | 'dark';",description:{"zh-CN":"主题名（light 为默认，dark 由 tokens.scss 的 [data-theme=dark] 提供）。","en-US":"Theme name (light is the default; dark is provided by the [data-theme=dark] block in tokens.scss)."}},{name:"ThemeTokens",definition:"type ThemeTokens = Record<string, string>;",description:{"zh-CN":"主题 token 集合：键为 CSS 自定义属性名（-- 开头），值为对应 CSS 值。","en-US":"A set of theme tokens: keys are CSS custom property names (starting with --), values are the corresponding CSS values."}}]},cj={class:"demo-column"},dj={class:"demo-row"},mj={class:"demo-row"},pj=D({__name:"switch",setup(e){const t=F(Aa()),n=F(!1),a=Y(()=>[{key:"name",title:U()?"名称":"Name"},{key:"age",title:U()?"年龄":"Age"}]),l=i=>{gi(i),t.value=Aa()};return(i,o)=>(g(),x("div",cj,[N("div",dj,[z(r(W),{type:"primary",onClick:o[0]||(o[0]=s=>l("zh-CN"))},{default:E(()=>[G($(r(U)()?"中文":"Chinese"),1)]),_:1}),z(r(W),{onClick:o[1]||(o[1]=s=>l("en-US"))},{default:E(()=>[...o[4]||(o[4]=[G("English",-1)])]),_:1}),z(r(_n),{type:"primary"},{default:E(()=>[G($(t.value),1)]),_:1})]),N("div",mj,[z(r(W),{type:"link",onClick:o[2]||(o[2]=s=>n.value=!0)},{default:E(()=>[G($(r(U)()?"打开 Modal":"Open Modal"),1)]),_:1})]),z(r(Ao),{visible:n.value,"onUpdate:visible":o[3]||(o[3]=s=>n.value=s),title:r(U)()?"国际化演示":"i18n Demo"},{default:E(()=>[G($(r(U)()?"底部按钮文案随全局语言切换；点击确认或取消关闭。":"Footer button text follows the global locale; click OK or Cancel to close."),1)]),_:1},8,["visible","title"]),z(r(ti),{columns:a.value,"data-source":[]},null,8,["columns"]),z(r(Ks),{style:{width:"240px"}})]))}});function fj(){const e=se(),[t,n]=B.useState(Aa()),[a,l]=B.useState(!1),i=[{key:"name",title:e?"名称":"Name"},{key:"age",title:e?"年龄":"Age"}],o=s=>{gi(s),n(Aa())};return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{type:"primary",onClick:()=>o("zh-CN"),children:e?"中文":"Chinese"}),c.jsx(ee,{onClick:()=>o("en-US"),children:"English"}),c.jsx(Cn,{type:"primary",children:t})]}),c.jsx("div",{className:"demo-row",children:c.jsx(ee,{type:"link",onClick:()=>l(!0),children:e?"打开 Modal":"Open Modal"})}),c.jsx(Go,{visible:a,title:e?"国际化演示":"i18n Demo",onOk:()=>l(!1),onCancel:()=>l(!1),onClose:()=>l(!1),children:e?"底部按钮文案随全局语言切换；点击确认或取消关闭。":"Footer button text follows the global locale; click OK or Cancel to close."}),c.jsx(hi,{columns:i,dataSource:[]}),c.jsx(Nr,{style:{width:"240px"}})]})}const hj={class:"demo-column"},vj={class:"demo-row"},gj={class:"demo-row"},bj=D({__name:"custom",setup(e){const t=F(Aa()),n=F(!1),a=F(!1),l=Y(()=>[{key:"name",title:U()?"名称":"Name"},{key:"age",title:U()?"年龄":"Age"}]),i=()=>{Eh("ja-JP",{modal:{ok:"OK",cancel:"キャンセル"},popconfirm:{confirm:"OK",cancel:"キャンセル"},table:{empty:"データがありません"}}),a.value=!0,o("ja-JP")},o=s=>{gi(s),t.value=Aa()};return(s,u)=>(g(),x("div",hj,[N("div",vj,[z(r(W),{type:"primary",disabled:a.value,onClick:i},{default:E(()=>[G($(a.value?r(U)()?"已注册 ja-JP":"ja-JP registered":r(U)()?"注册日语语言包":"Register Japanese locale"),1)]),_:1},8,["disabled"]),z(r(W),{onClick:u[0]||(u[0]=d=>o("zh-CN"))},{default:E(()=>[G($(r(U)()?"回到中文":"Back to Chinese"),1)]),_:1}),z(r(_n),{type:"primary"},{default:E(()=>[G($(t.value),1)]),_:1})]),N("div",gj,[z(r(W),{type:"link",onClick:u[1]||(u[1]=d=>n.value=!0)},{default:E(()=>[G($(r(U)()?"打开 Modal":"Open Modal"),1)]),_:1}),z(r(nl),{content:r(U)()?"确认删除这条数据吗？":"Are you sure you want to delete this record?"},{default:E(()=>[z(r(W),null,{default:E(()=>[G($(r(U)()?"删除":"Delete"),1)]),_:1})]),_:1},8,["content"])]),z(r(Ao),{visible:n.value,"onUpdate:visible":u[2]||(u[2]=d=>n.value=d),title:r(U)()?"自定义语言包":"Custom Locale"},{default:E(()=>[G($(r(U)()?"注册后所有组件文案按新语言渲染，未覆盖的分组回退注册时的基底包。":"After registration, all component text renders in the new language; uncovered groups fall back to the base pack at registration time."),1)]),_:1},8,["visible","title"]),z(r(ti),{columns:l.value,"data-source":[]},null,8,["columns"])]))}});function yj(){const e=se(),[t,n]=B.useState(Aa()),[a,l]=B.useState(!1),[i,o]=B.useState(!1),s=[{key:"name",title:e?"名称":"Name"},{key:"age",title:e?"年龄":"Age"}],u=p=>{gi(p),n(Aa())},d=()=>{Eh("ja-JP",{modal:{ok:"OK",cancel:"キャンセル"},popconfirm:{confirm:"OK",cancel:"キャンセル"},table:{empty:"データがありません"}}),o(!0),u("ja-JP")};return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{type:"primary",disabled:i,onClick:d,children:i?e?"已注册 ja-JP":"ja-JP registered":e?"注册日语语言包":"Register Japanese locale"}),c.jsx(ee,{onClick:()=>u("zh-CN"),children:e?"回到中文":"Back to Chinese"}),c.jsx(Cn,{type:"primary",children:t})]}),c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{type:"link",onClick:()=>l(!0),children:e?"打开 Modal":"Open Modal"}),c.jsx(dl,{content:e?"确认删除这条数据吗？":"Are you sure you want to delete this record?",children:c.jsx(ee,{children:e?"删除":"Delete"})})]}),c.jsx(Go,{visible:a,title:e?"自定义语言包":"Custom Locale",onOk:()=>l(!1),onCancel:()=>l(!1),onClose:()=>l(!1),children:e?"注册后所有组件文案按新语言渲染，未覆盖的分组回退注册时的基底包。":"After registration, all component text renders in the new language; uncovered groups fall back to the base pack at registration time."}),c.jsx(hi,{columns:s,dataSource:[]})]})}const Sj=`<script setup lang="ts">
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
`,xj=`import { useState } from 'react';
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
`,_j=`<script setup lang="ts">
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
`,Cj=`import { useState } from 'react';
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
`,kj=[{id:"switch",title:{"zh-CN":"内置语言切换（setLocale）","en-US":"Built-in Locale Switching (setLocale)"},description:{"zh-CN":"setLocale('zh-CN' / 'en-US') 即时切换全部组件的内置文案：Modal 按钮、Table 空态与行选择提示、DatePicker 面板标题与星期等。","en-US":"setLocale('zh-CN' / 'en-US') instantly switches the built-in messages of every component: Modal buttons, Table empty state and row selection hints, DatePicker panel titles and weekdays, etc."},vueComponent:pj,reactComponent:fj,vueSource:Sj,reactSource:xj},{id:"custom",title:{"zh-CN":"注册自定义语言包（registerLocale）","en-US":"Registering Custom Locales (registerLocale)"},description:{"zh-CN":"registerLocale 按组件分组注册任意语言（组级浅合并，未覆盖分组回退注册时的基底包），setLocale 切换后立即生效。","en-US":"registerLocale registers any language grouped by component (shallow merge per group; uncovered groups fall back to the base pack at registration time) and takes effect immediately after setLocale switches to it."},vueComponent:bj,reactComponent:yj,vueSource:_j,reactSource:Cj}],Nj={methods:[{name:"setLocale",signature:"(locale: string) => void",description:{"zh-CN":"切换当前语言；未注册的语言名静默忽略，值未变化时同样静默返回","en-US":"Switches the current locale; unregistered names are silently ignored, and unchanged values return silently"}},{name:"getLocale",signature:"() => string",description:{"zh-CN":"读取当前语言名（默认 DEFAULT_LOCALE）","en-US":"Reads the current locale name (defaults to DEFAULT_LOCALE)"}},{name:"getLocaleData",signature:"() => XuiLocaleData",description:{"zh-CN":"读取当前语言包（返回稳定引用，切换语言时重建）；SSR / 无 DOM 环境同样可用","en-US":"Reads the current locale pack (stable reference, rebuilt on locale change); also safe in SSR / DOM-less environments"}},{name:"registerLocale",signature:"(locale: string, data: XuiLocaleInput) => void",description:{"zh-CN":"注册或覆盖语言包：按组件分组浅合并到该语言的既有包上，未覆盖分组回退基底；无有效变更时不触发通知","en-US":"Registers or overrides a locale pack: shallow-merged per component group onto the existing pack of that locale, with uncovered groups falling back to the base; no notification when nothing actually changes"}},{name:"subscribeLocale",signature:"(listener: (locale: string) => void) => () => void",description:{"zh-CN":"订阅语言变化（回调收到新语言名），返回取消订阅函数","en-US":"Subscribes to locale changes (the callback receives the new locale name); returns an unsubscribe function"}},{name:"useLocaleData",signature:"() => XuiLocaleData",description:{"zh-CN":"双端组件级 Hook（Vue 组合式 / React useSyncExternalStore），组件内读取语言包并响应切换","en-US":"Component-level hook for both frameworks (Vue composable / React useSyncExternalStore); reads the locale pack inside components and reacts to switches"}}],types:[{name:"XuiLocaleData",definition:`type XuiLocaleData = {
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
};`,description:{"zh-CN":"完整语言包结构（按组件分组；函数型字段便于跨语序翻译）。","en-US":"The full locale pack structure (grouped by component; function fields ease translation across word orders)."}},{name:"XuiLocaleInput",definition:"type XuiLocaleInput = Partial<XuiLocaleData>;",description:{"zh-CN":"registerLocale 的入参：只提供需要覆盖的分组，组内字段同为部分覆盖（浅合并）。","en-US":"The input of registerLocale: provide only the groups to override; fields within a group are also partially overridden (shallow merge)."}},{name:"DEFAULT_LOCALE",definition:"const DEFAULT_LOCALE = 'zh-CN';",description:{"zh-CN":"默认语言常量；内置 zh-CN / en-US 两套语言包。","en-US":"The default locale constant; zh-CN and en-US packs are built in."}}]},wj={class:"demo-column"},Tj={class:"demo-row"},zj={style:{color:"var(--docs-text-secondary, #888)","font-size":"13px",margin:"8px 0 16px"}},Uj=D({__name:"flip",setup(e){const t=F(),n=F(),a=()=>{const i=t.value;if(!i)return;const o=i.getBoundingClientRect();window.scrollTo({top:window.scrollY+o.top-12,behavior:"smooth"})},l=()=>{const i=n.value;if(!i)return;const o=i.getBoundingClientRect();window.scrollTo({top:window.scrollY+o.top-window.innerHeight+o.height+12,behavior:"smooth"})};return(i,o)=>(g(),x("div",wj,[N("div",Tj,[z(r(W),{type:"primary",onClick:a},{default:E(()=>[G($(r(U)()?"滚动到视口顶部":"Scroll to viewport top"),1)]),_:1}),z(r(W),{onClick:l},{default:E(()=>[G($(r(U)()?"滚动到视口底部":"Scroll to viewport bottom"),1)]),_:1})]),N("p",zj,$(r(U)()?"点击按钮将触发元素定位到视口边缘，再悬停 / 点击组件观察气泡自动翻转。":"Click a button to position the element at the viewport edge, then hover / click the component to see the popover auto-flip."),1),N("div",{ref_key:"topAnchor",ref:t,class:"demo-row",style:{padding:"8px 0"}},[z(r(Vn),{content:r(U)()?"上方空间不足 → 翻转到下方":"Not enough space above → flip down",placement:"top"},{default:E(()=>[z(r(W),null,{default:E(()=>[G($(r(U)()?"Tooltip top（近顶部）":"Tooltip top (near top)"),1)]),_:1})]),_:1},8,["content"]),z(r(nl),{content:r(U)()?"确认删除此条记录？":"Confirm delete this record?",placement:"top","confirm-text":r(U)()?"删除":"Delete","cancel-text":r(U)()?"取消":"Cancel"},{default:E(()=>[z(r(W),{type:"danger"},{default:E(()=>[...o[0]||(o[0]=[G("Popconfirm top",-1)])]),_:1})]),_:1},8,["content","confirm-text","cancel-text"])],512),o[2]||(o[2]=N("div",{style:{height:"50vh"}},null,-1)),N("div",{ref_key:"bottomAnchor",ref:n,class:"demo-row",style:{padding:"8px 0"}},[z(r(Vn),{content:r(U)()?"下方空间不足 → 翻转到上方":"Not enough space below → flip up",placement:"bottom"},{default:E(()=>[z(r(W),null,{default:E(()=>[G($(r(U)()?"Tooltip bottom（近底部）":"Tooltip bottom (near bottom)"),1)]),_:1})]),_:1},8,["content"]),z(r(nl),{content:r(U)()?"底部确认提交？":"Confirm submit at bottom?",placement:"bottom","confirm-text":r(U)()?"提交":"Submit","cancel-text":r(U)()?"取消":"Cancel"},{default:E(()=>[z(r(W),{type:"primary"},{default:E(()=>[...o[1]||(o[1]=[G("Popconfirm bottom",-1)])]),_:1})]),_:1},8,["content","confirm-text","cancel-text"])],512)]))}});function $j(){const e=se(),t=B.useRef(null),n=B.useRef(null),a=()=>{const i=t.current;if(!i)return;const o=i.getBoundingClientRect();window.scrollTo({top:window.scrollY+o.top-12,behavior:"smooth"})},l=()=>{const i=n.current;if(!i)return;const o=i.getBoundingClientRect();window.scrollTo({top:window.scrollY+o.top-window.innerHeight+o.height+12,behavior:"smooth"})};return c.jsxs("div",{className:"demo-column",children:[c.jsxs("div",{className:"demo-row",children:[c.jsx(ee,{type:"primary",onClick:a,children:e?"滚动到视口顶部":"Scroll to viewport top"}),c.jsx(ee,{onClick:l,children:e?"滚动到视口底部":"Scroll to viewport bottom"})]}),c.jsx("p",{style:{color:"var(--docs-text-secondary, #888)",fontSize:"13px",margin:"8px 0 16px"},children:e?"点击按钮将触发元素定位到视口边缘，再悬停 / 点击组件观察气泡自动翻转。":"Click a button to position the element at the viewport edge, then hover / click the component to see the popover auto-flip."}),c.jsxs("div",{ref:t,className:"demo-row",style:{padding:"8px 0"},children:[c.jsx(Fn,{content:e?"上方空间不足 → 翻转到下方":"Not enough space above → flip down",placement:"top",children:c.jsx(ee,{children:e?"Tooltip top（近顶部）":"Tooltip top (near top)"})}),c.jsx(dl,{content:e?"确认删除此条记录？":"Confirm delete this record?",placement:"top",confirmText:e?"删除":"Delete",cancelText:e?"取消":"Cancel",children:c.jsx(ee,{type:"danger",children:"Popconfirm top"})})]}),c.jsx("div",{style:{height:"50vh"}}),c.jsxs("div",{ref:n,className:"demo-row",style:{padding:"8px 0"},children:[c.jsx(Fn,{content:e?"下方空间不足 → 翻转到上方":"Not enough space below → flip up",placement:"bottom",children:c.jsx(ee,{children:e?"Tooltip bottom（近底部）":"Tooltip bottom (near bottom)"})}),c.jsx(dl,{content:e?"底部确认提交？":"Confirm submit at bottom?",placement:"bottom",confirmText:e?"提交":"Submit",cancelText:e?"取消":"Cancel",children:c.jsx(ee,{type:"primary",children:"Popconfirm bottom"})})]})]})}const Ej={class:"demo-column"},Rj={class:"demo-row"},Aj={style:{color:"var(--docs-text-secondary, #888)","font-size":"13px",margin:"8px 0 16px"}},Oj=D({__name:"multi",setup(e){const t=F(),n=()=>{const l=t.value;if(!l)return;const i=l.getBoundingClientRect();window.scrollTo({top:window.scrollY+i.top-12,behavior:"smooth"})},a=Y(()=>Array.from({length:1e3},(l,i)=>({label:U()?`选项 ${i+1}`:`Option ${i+1}`,value:String(i+1)})));return(l,i)=>(g(),x("div",Ej,[N("div",Rj,[z(r(W),{type:"primary",onClick:n},{default:E(()=>[G($(r(U)()?"滚动到视口顶部":"Scroll to viewport top"),1)]),_:1})]),N("p",Aj,$(r(U)()?"Tooltip / Popconfirm / Select 三组件共用 @xui-design/shared/floating 的翻转与钳制逻辑。滚动到视口顶部后操作各组件，观察气泡 / 面板自动翻转到下方。":"Tooltip / Popconfirm / Select share the flip and clamp logic of @xui-design/shared/floating. Scroll to the viewport top, then interact with each component to see the popover / panel auto-flip downward."),1),N("div",{ref_key:"anchor",ref:t,class:"demo-row",style:{padding:"8px 0",gap:"16px"}},[z(r(Vn),{content:r(U)()?"Tooltip 共用避让逻辑":"Tooltip shares the avoidance logic",placement:"top"},{default:E(()=>[z(r(W),null,{default:E(()=>[...i[0]||(i[0]=[G("Tooltip",-1)])]),_:1})]),_:1},8,["content"]),z(r(nl),{content:r(U)()?"Popconfirm 共用避让逻辑":"Popconfirm shares the avoidance logic",placement:"top","confirm-text":r(U)()?"确定":"OK","cancel-text":r(U)()?"取消":"Cancel"},{default:E(()=>[z(r(W),{type:"primary"},{default:E(()=>[...i[1]||(i[1]=[G("Popconfirm",-1)])]),_:1})]),_:1},8,["content","confirm-text","cancel-text"]),z(r(qn),{options:a.value,virtual:"",placeholder:r(U)()?"Select（虚拟滚动）":"Select (virtual scroll)",style:{width:"200px"}},null,8,["options","placeholder"])],512)]))}});function Bj(){const e=se(),t=B.useRef(null),n=()=>{const l=t.current;if(!l)return;const i=l.getBoundingClientRect();window.scrollTo({top:window.scrollY+i.top-12,behavior:"smooth"})},a=Array.from({length:1e3},(l,i)=>({label:e?`选项 ${i+1}`:`Option ${i+1}`,value:String(i+1)}));return c.jsxs("div",{className:"demo-column",children:[c.jsx("div",{className:"demo-row",children:c.jsx(ee,{type:"primary",onClick:n,children:e?"滚动到视口顶部":"Scroll to viewport top"})}),c.jsx("p",{style:{color:"var(--docs-text-secondary, #888)",fontSize:"13px",margin:"8px 0 16px"},children:e?"Tooltip / Popconfirm / Select 三组件共用 @xui-design/shared/floating 的翻转与钳制逻辑。滚动到视口顶部后操作各组件，观察气泡 / 面板自动翻转到下方。":"Tooltip / Popconfirm / Select share the flip and clamp logic of @xui-design/shared/floating. Scroll to the viewport top, then interact with each component to see the popover / panel auto-flip downward."}),c.jsxs("div",{ref:t,className:"demo-row",style:{padding:"8px 0",gap:"16px"},children:[c.jsx(Fn,{content:e?"Tooltip 共用避让逻辑":"Tooltip shares the avoidance logic",placement:"top",children:c.jsx(ee,{children:"Tooltip"})}),c.jsx(dl,{content:e?"Popconfirm 共用避让逻辑":"Popconfirm shares the avoidance logic",placement:"top",confirmText:e?"确定":"OK",cancelText:e?"取消":"Cancel",children:c.jsx(ee,{type:"primary",children:"Popconfirm"})}),c.jsx(Gn,{options:a,virtual:!0,placeholder:e?"Select（虚拟滚动）":"Select (virtual scroll)",style:{width:"200px"}})]})]})}const Zj=`<script setup lang="ts">
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
`,jj=`import { useRef } from 'react';
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
`,Mj=`<script setup lang="ts">
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
`,Dj=`import { useRef } from 'react';
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
`,Lj=[{id:"flip",title:{"zh-CN":"方位翻转（flip）","en-US":"Placement Flipping (flip)"},description:{"zh-CN":'首选方位空间不足且对侧更充足时自动翻转：placement="top" 在视口顶部翻转到 bottom，placement="bottom" 在视口底部翻转到 top。',"en-US":'Flips automatically when the preferred placement lacks space and the opposite side has more: placement="top" flips to bottom at the top of the viewport, and placement="bottom" flips to top at the bottom.'},vueComponent:Uj,reactComponent:$j,vueSource:Zj,reactSource:jj},{id:"multi",title:{"zh-CN":"三组件共用避让逻辑","en-US":"Three Components, One Avoidance Logic"},description:{"zh-CN":"Tooltip / Popconfirm / Select 双端共用 @xui-design/shared/floating 的翻转与钳制算法，不重复实现。","en-US":"Tooltip / Popconfirm / Select share the flip and clamp algorithms from @xui-design/shared/floating on both frameworks — implemented once."},vueComponent:Oj,reactComponent:Bj,vueSource:Mj,reactSource:Dj}],Vj={methods:[{name:"resolveFloatingPosition",signature:"(trigger: FloatingRect, popper: FloatingRect, viewport: FloatingViewport, options: ResolveFloatingOptions) => FloatingPosition",description:{"zh-CN":"纯函数：输入触发器 / 浮层 / 视口的坐标矩形，输出最终方位（可能已翻转）与交叉轴平移量；不读 DOM、不写样式，便于单测。","en-US":"Pure function: takes the trigger / popper / viewport rects and returns the final placement (possibly flipped) plus the cross-axis shift; never reads the DOM or writes styles, making it easy to unit test."}},{name:"getViewport",signature:"() => FloatingViewport",description:{"zh-CN":"获取当前视口边界（整页可视区域）；SSR / 无 window 环境返回零矩形（计算结果等价于不翻转不偏移）。","en-US":"Returns the current viewport bounds (the visible page area); returns a zero rect in SSR / window-less environments (equivalent to no flip and no shift)."}},{name:"bindViewportUpdate",signature:"(callback: () => void) => () => void",description:{"zh-CN":"订阅视口变化（scroll capture + resize），回调经 rAF 合并（一帧最多一次）；返回解绑函数，组件卸载时调用即可彻底清理。","en-US":"Subscribes to viewport changes (scroll capture + resize) with callbacks batched via rAF (at most once per frame); returns an unbind function — call it on component unmount for full cleanup."}}],types:[{name:"FloatingPlacement",definition:"type FloatingPlacement = 'top' | 'bottom' | 'left' | 'right';",description:{"zh-CN":"四方位联合类型，与 core 契约的 placement 对齐。","en-US":"Union of the four placements, aligned with the placement contract in core."}},{name:"FloatingRect",definition:`type FloatingRect = {
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
};`,description:{"zh-CN":"避让计算结果：top/bottom 方位 shift 为水平位移（正向右移），left/right 方位为垂直位移（正向下移）。","en-US":"The avoidance result: for top/bottom placements, shift is horizontal (positive moves right); for left/right placements, it is vertical (positive moves down)."}}]},Hj=D({__name:"GuideDemo",props:{guide:{},demoId:{}},setup(e){const t=e,n={theme:rj,i18n:kj,floating:Lj},a=Y(()=>{var l;return(l=n[t.guide])==null?void 0:l.find(i=>i.id===t.demoId)});return(l,i)=>a.value?(g(),ae(Gy,{key:0,demo:a.value},null,8,["demo"])):H("",!0)}}),Ij=D({__name:"GuideApi",props:{guide:{},kind:{}},setup(e){const t=e,n={theme:uj,i18n:Nj,floating:Vj},a=Y(()=>n[t.guide]);return(l,i)=>a.value?(g(),ae(Yy,{key:0,api:a.value,kind:e.kind},null,8,["api","kind"])):H("",!0)}}),Fj={class:"docs-home-body"},qj={class:"home-section"},Gj={class:"docs-section-title"},Yj={class:"demo-block__tabs",style:{margin:"16px 0 12px"}},Pj={class:"home-section"},Kj={class:"docs-section-title"},Xj={class:"home-section"},Qj={class:"docs-section-title"},Jj={class:"docs-subsection-title"},Wj={class:"home-grid"},eM=["href"],tM={class:"home-card__title"},nM={class:"home-card__en"},aM={class:"home-card__desc"},lM={class:"home-card__title"},iM={class:"home-card__en"},oM={class:"home-card__soon"},sM={class:"home-card__desc"},rM="<\/script>",uM=D({__name:"ComponentOverview",setup(e){const{lang:t}=$o(),n=iu(),a=F("vue"),l=YZ().map(h=>({...h,availableList:h.components.filter(v=>v.available),pendingList:h.components.filter(v=>!v.available)})),i=Y(()=>t.value==="zh-CN"?"":"/en"),o=h=>Tr(`${i.value}/components/${h}`),s=Y(()=>{const h=a.value==="vue"?"main.ts":"main.tsx";return`pnpm add @xui-design/${a.value} @xui-design/styles

${n.value.home.installCoreComment}
pnpm add @xui-design/core

${n.value.home.installStyleComment}
# ${h}:  import '@xui-design/styles'`}),u=Y(()=>a.value==="vue"?`<script setup lang="ts">
import { Button } from '@xui-design/vue';
import '@xui-design/styles';
${rM}

<template>
  <Button type="primary">Hello XUI</Button>
</template>`:`import { Button } from '@xui-design/react';
import '@xui-design/styles';

export default function App() {
  return (
    <Button type="primary">Hello XUI</Button>
  );
}`),d=h=>{const v=Iy.find(k=>k.slug===h);return v?Ya(v.summary):""},p=h=>U()?h.title:h.name,m=h=>U()?h.name:h.title;return(h,v)=>(g(),x("div",Fj,[N("section",qj,[N("h2",Gj,$(r(n).home.installTitle),1),N("div",Yj,[N("button",{type:"button",class:J(["demo-block__tab",{"is-active":a.value==="vue"}]),onClick:v[0]||(v[0]=k=>a.value="vue")}," Vue ",2),N("button",{type:"button",class:J(["demo-block__tab",{"is-active":a.value==="react"}]),onClick:v[1]||(v[1]=k=>a.value="react")}," React ",2)]),z(wr,{code:s.value,lang:"bash"},null,8,["code"])]),N("section",Pj,[N("h2",Kj,$(r(n).home.quickStartTitle),1),z(wr,{code:u.value,lang:a.value},null,8,["code","lang"])]),N("section",Xj,[N("h2",Qj,$(r(n).home.overviewTitle),1),(g(!0),x(ne,null,pe(r(l),k=>(g(),x(ne,{key:k.category.key},[N("h3",Jj,$(r(Ya)(k.category.title)),1),N("div",Wj,[(g(!0),x(ne,null,pe(k.availableList,S=>(g(),x("a",{key:S.slug,href:o(S.slug),class:"home-card"},[N("div",tM,[G($(p(S))+" ",1),N("span",nM,$(m(S)),1)]),N("p",aM,$(d(S.slug)),1)],8,eM))),128)),(g(!0),x(ne,null,pe(k.pendingList,S=>(g(),x("div",{key:S.slug,class:"home-card is-disabled"},[N("div",lM,[G($(p(S))+" ",1),N("span",iM,$(m(S)),1),N("span",oM,$(r(n).nav.soon),1)]),N("p",sM,$(r(n).home.pendingDesc),1)]))),128))])],64))),128))])]))}}),dM={extends:_h,Layout:()=>pS(ST),enhanceApp({app:e}){delete e._context.components.Content,e.component("Content",xT),e.component("ComponentDemo",m4),e.component("ComponentApi",D4),e.component("GuideDemo",Hj),e.component("GuideApi",Ij),e.component("ComponentOverview",uM)}};export{dM as R,U1 as c,ye as u};
