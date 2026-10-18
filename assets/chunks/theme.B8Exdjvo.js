const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.DcXJrcis.js","assets/chunks/framework.BJZUG1M9.js"])))=>i.map(i=>d[i]);
import{d as M,o as b,c as C,r as D,n as J,a as K,t as $,b as ae,w as E,e as I,T as Ai,_ as pe,u as Ri,i as rS,f as cS,g as Ur,h as P,j as w,k as r,l as nl,m as Yc,p as q,q as Ge,s as ke,v as Vt,x as Ne,y as $d,z as uS,A as dS,B as aa,F as ne,C as me,D as $r,E as U,G as Sf,H as sn,I as xf,J as Er,K as Un,L as So,M as pS,N as he,O as Xc,P as Nt,Q as Cf,R as Ar,S as _f,U as mS,V as hS,W as kf,X as Rr,Y as fS,Z as Ss,$ as Ed,a0 as St,a1 as wf,a2 as lt,a3 as Ad,a4 as cn,a5 as to,a6 as vS,a7 as gS,a8 as bS,a9 as yS,aa as Nf,ab as SS,ac as Tf,ad as zf,ae as xS,af as CS,ag as _S,ah as kS,ai as wS,aj as NS}from"./framework.BJZUG1M9.js";const TS=M({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(b(),C("span",{class:J(["VPBadge",e.type])},[D(t.$slots,"default",{},()=>[K($(e.text),1)])],2))}}),zS={key:0,class:"VPBackdrop"},US=M({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(b(),ae(Ai,{name:"fade"},{default:E(()=>[e.show?(b(),C("div",zS)):I("",!0)]),_:1}))}}),$S=pe(US,[["__scopeId","data-v-b4eae23b"]]),ye=Ri;function ES(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),(a=!0)&&setTimeout(()=>a=!1,t))}}function Qc(e){return e.startsWith("/")?e:`/${e}`}function Rd(e){const{pathname:t,search:n,hash:a,protocol:l}=new URL(e,"http://a.com");if(rS(e)||e.startsWith("#")||!l.startsWith("http")||!cS(t))return e;const{site:o}=ye(),i=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${n}${a}`);return Ur(i)}function Bi({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:a,theme:l,hash:o}=ye(),i=P(()=>{var c,d;return{label:(c=t.value.locales[n.value])==null?void 0:c.label,link:((d=t.value.locales[n.value])==null?void 0:d.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:P(()=>Object.entries(t.value.locales).flatMap(([c,d])=>i.value.label===d.label?[]:{text:d.label,link:AS(d.link||(c==="root"?"/":`/${c}/`),l.value.i18nRouting!==!1&&e,a.value.relativePath.slice(i.value.link.length-1),!t.value.cleanUrls)+o.value})),currentLang:i}}function AS(e,t,n,a){return t?e.replace(/\/$/,"")+Qc(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):e}const RS={class:"NotFound"},BS={class:"code"},OS={class:"title"},ZS={class:"quote"},jS={class:"action"},DS=["href","aria-label"],MS=M({__name:"NotFound",setup(e){const{theme:t}=ye(),{currentLang:n}=Bi();return(a,l)=>{var o,i,s,c,d;return b(),C("div",RS,[w("p",BS,$(((o=r(t).notFound)==null?void 0:o.code)??"404"),1),w("h1",OS,$(((i=r(t).notFound)==null?void 0:i.title)??"PAGE NOT FOUND"),1),l[0]||(l[0]=w("div",{class:"divider"},null,-1)),w("blockquote",ZS,$(((s=r(t).notFound)==null?void 0:s.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),w("div",jS,[w("a",{class:"link",href:r(Ur)(r(n).link),"aria-label":((c=r(t).notFound)==null?void 0:c.linkLabel)??"go to home"},$(((d=r(t).notFound)==null?void 0:d.linkText)??"Take me home"),9,DS)])])}}}),LS=pe(MS,[["__scopeId","data-v-b6076cfe"]]);function Uf(e,t){if(Array.isArray(e))return xs(e);if(e==null)return[];t=Qc(t);const n=Object.keys(e).sort((l,o)=>o.split("/").length-l.split("/").length).find(l=>t.startsWith(Qc(l))),a=n?e[n]:[];return Array.isArray(a)?xs(a):xs(a.items,a.base)}function VS(e){const t=[];let n=0;for(const a in e){const l=e[a];if(l.items){n=t.push(l);continue}t[n]||t.push({items:[]}),t[n].items.push(l)}return t}function HS(e){const t=[];function n(a){for(const l of a)l.text&&l.link&&t.push({text:l.text,link:l.link,docFooterText:l.docFooterText}),l.items&&n(l.items)}return n(e),t}function Jc(e,t){return Array.isArray(t)?t.some(n=>Jc(e,n)):nl(e,t.link)?!0:t.items?Jc(e,t.items):!1}function xs(e,t){return[...e].map(n=>{const a={...n},l=a.base||t;return l&&a.link&&(a.link=l+a.link),a.items&&(a.items=xs(a.items,l)),a})}function la(){const{frontmatter:e,page:t,theme:n}=ye(),a=Yc("(min-width: 960px)"),l=q(!1),o=P(()=>{const x=n.value.sidebar,S=t.value.relativePath;return x?Uf(x,S):[]}),i=q(o.value);Ge(o,(x,S)=>{JSON.stringify(x)!==JSON.stringify(S)&&(i.value=o.value)});const s=P(()=>e.value.sidebar!==!1&&i.value.length>0&&e.value.layout!=="home"),c=P(()=>d?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),d=P(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),m=P(()=>s.value&&a.value),p=P(()=>s.value?VS(i.value):[]);function h(){l.value=!0}function g(){l.value=!1}function k(){l.value?g():h()}return{isOpen:l,sidebar:i,sidebarGroups:p,hasSidebar:s,hasAside:d,leftAside:c,isSidebarEnabled:m,open:h,close:g,toggle:k}}function IS(e,t){let n;ke(()=>{n=e.value?document.activeElement:void 0}),Vt(()=>{window.addEventListener("keyup",a)}),Ne(()=>{window.removeEventListener("keyup",a)});function a(l){l.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function FS(e){const{page:t,hash:n}=ye(),a=q(!1),l=P(()=>e.value.collapsed!=null),o=P(()=>!!e.value.link),i=q(!1),s=()=>{i.value=nl(t.value.relativePath,e.value.link)};Ge([t,e,n],s),Vt(s);const c=P(()=>i.value?!0:e.value.items?Jc(t.value.relativePath,e.value.items):!1),d=P(()=>!!(e.value.items&&e.value.items.length));ke(()=>{a.value=!!(l.value&&e.value.collapsed)}),$d(()=>{(i.value||c.value)&&(a.value=!1)});function m(){l.value&&(a.value=!a.value)}return{collapsed:a,collapsible:l,isLink:o,isActiveLink:i,hasActiveLink:c,hasChildren:d,toggle:m}}function KS(){const{hasSidebar:e}=la(),t=Yc("(min-width: 960px)"),n=Yc("(min-width: 1280px)");return{isAsideEnabled:P(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const qS=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Wc=[];function $f(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function Bd(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const a=Number(n.tagName[1]);return{element:n,title:PS(n),link:"#"+n.id,level:a}});return GS(t,e)}function PS(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(qS.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function GS(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[a,l]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return QS(e,a,l)}function YS(e,t){const{isAsideEnabled:n}=KS(),a=ES(o,100);let l=null;Vt(()=>{requestAnimationFrame(o),window.addEventListener("scroll",a)}),uS(()=>{i(location.hash)}),Ne(()=>{window.removeEventListener("scroll",a)});function o(){if(!n.value)return;const s=window.scrollY,c=window.innerHeight,d=document.body.offsetHeight,m=Math.abs(s+c-d)<1,p=Wc.map(({element:g,link:k})=>({link:k,top:XS(g)})).filter(({top:g})=>!Number.isNaN(g)).sort((g,k)=>g.top-k.top);if(!p.length){i(null);return}if(s<1){i(null);return}if(m){i(p[p.length-1].link);return}let h=null;for(const{link:g,top:k}of p){if(k>s+dS()+4)break;h=g}i(h)}function i(s){l&&l.classList.remove("active"),s==null?l=null:l=e.value.querySelector(`a[href="${decodeURIComponent(s)}"]`);const c=l;c?(c.classList.add("active"),t.value.style.top=c.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function XS(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function QS(e,t,n){Wc.length=0;const a=[],l=[];return e.forEach(o=>{const i={...o,children:[]};let s=l[l.length-1];for(;s&&s.level>=i.level;)l.pop(),s=l[l.length-1];if(i.element.classList.contains("ignore-header")||s&&"shouldIgnore"in s){l.push({level:i.level,shouldIgnore:!0});return}i.level>n||i.level<t||(Wc.push({element:i.element,link:i.link}),s?s.children.push(i):a.push(i),l.push(i))}),a}const JS=["href","title"],WS=M({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const a=n.href.split("#")[1],l=document.getElementById(decodeURIComponent(a));l==null||l.focus({preventScroll:!0})}return(n,a)=>{const l=aa("VPDocOutlineItem",!0);return b(),C("ul",{class:J(["VPDocOutlineItem",e.root?"root":"nested"])},[(b(!0),C(ne,null,me(e.headers,({children:o,link:i,title:s})=>(b(),C("li",null,[w("a",{class:"outline-link",href:i,onClick:t,title:s},$(s),9,JS),o!=null&&o.length?(b(),ae(l,{key:0,headers:o},null,8,["headers"])):I("",!0)]))),256))],2)}}}),Ef=pe(WS,[["__scopeId","data-v-21c134d0"]]),ex={class:"content"},tx={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},nx=M({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=ye(),a=Sf([]);$r(()=>{a.value=Bd(t.value.outline??n.value.outline)});const l=q(),o=q();return YS(l,o),(i,s)=>(b(),C("nav",{"aria-labelledby":"doc-outline-aria-label",class:J(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:l},[w("div",ex,[w("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),w("div",tx,$(r($f)(r(n))),1),U(Ef,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),ax=pe(nx,[["__scopeId","data-v-811e79c0"]]),lx={class:"VPDocAsideCarbonAds"},ox=M({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,a)=>(b(),C("div",lx,[U(r(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),ix={class:"VPDocAside"},sx=M({__name:"VPDocAside",setup(e){const{theme:t}=ye();return(n,a)=>(b(),C("div",ix,[D(n.$slots,"aside-top",{},void 0,!0),D(n.$slots,"aside-outline-before",{},void 0,!0),U(ax),D(n.$slots,"aside-outline-after",{},void 0,!0),a[0]||(a[0]=w("div",{class:"spacer"},null,-1)),D(n.$slots,"aside-ads-before",{},void 0,!0),r(t).carbonAds?(b(),ae(ox,{key:0,"carbon-ads":r(t).carbonAds},null,8,["carbon-ads"])):I("",!0),D(n.$slots,"aside-ads-after",{},void 0,!0),D(n.$slots,"aside-bottom",{},void 0,!0)]))}}),rx=pe(sx,[["__scopeId","data-v-1f35908d"]]);function cx(){const{theme:e,page:t}=ye();return P(()=>{const{text:n="Edit this page",pattern:a=""}=e.value.editLink||{};let l;return typeof a=="function"?l=a(t.value):l=a.replace(/:path/g,t.value.filePath),{url:l,text:n}})}function ux(){const{page:e,theme:t,frontmatter:n}=ye();return P(()=>{var d,m,p,h,g,k,x,S;const a=Uf(t.value.sidebar,e.value.relativePath),l=HS(a),o=dx(l,v=>v.link.replace(/[?#].*$/,"")),i=o.findIndex(v=>nl(e.value.relativePath,v.link)),s=((d=t.value.docFooter)==null?void 0:d.prev)===!1&&!n.value.prev||n.value.prev===!1,c=((m=t.value.docFooter)==null?void 0:m.next)===!1&&!n.value.next||n.value.next===!1;return{prev:s?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((p=o[i-1])==null?void 0:p.docFooterText)??((h=o[i-1])==null?void 0:h.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((g=o[i-1])==null?void 0:g.link)},next:c?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((k=o[i+1])==null?void 0:k.docFooterText)??((x=o[i+1])==null?void 0:x.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((S=o[i+1])==null?void 0:S.link)}}})}function dx(e,t){const n=new Set;return e.filter(a=>{const l=t(a);return n.has(l)?!1:n.add(l)})}const $n=M({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=P(()=>t.tag??(t.href?"a":"span")),a=P(()=>t.href&&xf.test(t.href)||t.target==="_blank");return(l,o)=>(b(),ae(sn(n.value),{class:J(["VPLink",{link:e.href,"vp-external-link-icon":a.value,"no-icon":e.noIcon}]),href:e.href?r(Rd)(e.href):void 0,target:e.target??(a.value?"_blank":void 0),rel:e.rel??(a.value?"noreferrer":void 0)},{default:E(()=>[D(l.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),px={class:"VPLastUpdated"},mx=["datetime"],hx=M({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:a}=ye(),l=P(()=>new Date(n.value.lastUpdated)),o=P(()=>l.value.toISOString()),i=q("");return Vt(()=>{ke(()=>{var s,c,d;i.value=new Intl.DateTimeFormat((c=(s=t.value.lastUpdated)==null?void 0:s.formatOptions)!=null&&c.forceLocale?a.value:void 0,((d=t.value.lastUpdated)==null?void 0:d.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(l.value)})}),(s,c)=>{var d;return b(),C("p",px,[K($(((d=r(t).lastUpdated)==null?void 0:d.text)||r(t).lastUpdatedText||"Last updated")+": ",1),w("time",{datetime:o.value},$(i.value),9,mx)])}}}),fx=pe(hx,[["__scopeId","data-v-a0add123"]]),vx={key:0,class:"VPDocFooter"},gx={key:0,class:"edit-info"},bx={key:0,class:"edit-link"},yx={key:1,class:"last-updated"},Sx={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},xx={class:"pager"},Cx=["innerHTML"],_x=["innerHTML"],kx={class:"pager"},wx=["innerHTML"],Nx=["innerHTML"],Tx=M({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:a}=ye(),l=cx(),o=ux(),i=P(()=>t.value.editLink&&a.value.editLink!==!1),s=P(()=>n.value.lastUpdated),c=P(()=>i.value||s.value||o.value.prev||o.value.next);return(d,m)=>{var p,h,g,k;return c.value?(b(),C("footer",vx,[D(d.$slots,"doc-footer-before",{},void 0,!0),i.value||s.value?(b(),C("div",gx,[i.value?(b(),C("div",bx,[U($n,{class:"edit-link-button",href:r(l).url,"no-icon":!0},{default:E(()=>[m[0]||(m[0]=w("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),K(" "+$(r(l).text),1)]),_:1},8,["href"])])):I("",!0),s.value?(b(),C("div",yx,[U(fx)])):I("",!0)])):I("",!0),(p=r(o).prev)!=null&&p.link||(h=r(o).next)!=null&&h.link?(b(),C("nav",Sx,[m[1]||(m[1]=w("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),w("div",xx,[(g=r(o).prev)!=null&&g.link?(b(),ae($n,{key:0,class:"pager-link prev",href:r(o).prev.link},{default:E(()=>{var x;return[w("span",{class:"desc",innerHTML:((x=r(t).docFooter)==null?void 0:x.prev)||"Previous page"},null,8,Cx),w("span",{class:"title",innerHTML:r(o).prev.text},null,8,_x)]}),_:1},8,["href"])):I("",!0)]),w("div",kx,[(k=r(o).next)!=null&&k.link?(b(),ae($n,{key:0,class:"pager-link next",href:r(o).next.link},{default:E(()=>{var x;return[w("span",{class:"desc",innerHTML:((x=r(t).docFooter)==null?void 0:x.next)||"Next page"},null,8,wx),w("span",{class:"title",innerHTML:r(o).next.text},null,8,Nx)]}),_:1},8,["href"])):I("",!0)])])):I("",!0)])):I("",!0)}}}),zx=pe(Tx,[["__scopeId","data-v-9efd0a2f"]]),Ux={class:"container"},$x={class:"aside-container"},Ex={class:"aside-content"},Ax={class:"content"},Rx={class:"content-container"},Bx={class:"main"},Ox=M({__name:"VPDoc",setup(e){const{theme:t}=ye(),n=Er(),{hasSidebar:a,hasAside:l,leftAside:o}=la(),i=P(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(s,c)=>{const d=aa("Content");return b(),C("div",{class:J(["VPDoc",{"has-sidebar":r(a),"has-aside":r(l)}])},[D(s.$slots,"doc-top",{},void 0,!0),w("div",Ux,[r(l)?(b(),C("div",{key:0,class:J(["aside",{"left-aside":r(o)}])},[c[0]||(c[0]=w("div",{class:"aside-curtain"},null,-1)),w("div",$x,[w("div",Ex,[U(rx,null,{"aside-top":E(()=>[D(s.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":E(()=>[D(s.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":E(()=>[D(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":E(()=>[D(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":E(()=>[D(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":E(()=>[D(s.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):I("",!0),w("div",Ax,[w("div",Rx,[D(s.$slots,"doc-before",{},void 0,!0),w("main",Bx,[U(d,{class:J(["vp-doc",[i.value,r(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),U(zx,null,{"doc-footer-before":E(()=>[D(s.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),D(s.$slots,"doc-after",{},void 0,!0)])])]),D(s.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Zx=pe(Ox,[["__scopeId","data-v-a4018fe9"]]),jx=M({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=P(()=>t.href&&xf.test(t.href)),a=P(()=>t.tag||(t.href?"a":"button"));return(l,o)=>(b(),ae(sn(a.value),{class:J(["VPButton",[e.size,e.theme]]),href:e.href?r(Rd)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:E(()=>[K($(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),Dx=pe(jx,[["__scopeId","data-v-d62b1c2f"]]),Mx=["src","alt"],Lx=M({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const a=aa("VPImage",!0);return e.image?(b(),C(ne,{key:0},[typeof e.image=="string"||"src"in e.image?(b(),C("img",Un({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:r(Ur)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Mx)):(b(),C(ne,{key:1},[U(a,Un({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),U(a,Un({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):I("",!0)}}}),qs=pe(Lx,[["__scopeId","data-v-e7ab6932"]]),Vx={class:"container"},Hx={class:"main"},Ix={class:"heading"},Fx=["innerHTML"],Kx=["innerHTML"],qx=["innerHTML"],Px={key:0,class:"actions"},Gx={key:0,class:"image"},Yx={class:"image-container"},Xx=M({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=So("hero-image-slot-exists");return(n,a)=>(b(),C("div",{class:J(["VPHero",{"has-image":e.image||r(t)}])},[w("div",Vx,[w("div",Hx,[D(n.$slots,"home-hero-info-before",{},void 0,!0),D(n.$slots,"home-hero-info",{},()=>[w("h1",Ix,[e.name?(b(),C("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,Fx)):I("",!0),e.text?(b(),C("span",{key:1,innerHTML:e.text,class:"text"},null,8,Kx)):I("",!0)]),e.tagline?(b(),C("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,qx)):I("",!0)],!0),D(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(b(),C("div",Px,[(b(!0),C(ne,null,me(e.actions,l=>(b(),C("div",{key:l.link,class:"action"},[U(Dx,{tag:"a",size:"medium",theme:l.theme,text:l.text,href:l.link,target:l.target,rel:l.rel},null,8,["theme","text","href","target","rel"])]))),128))])):I("",!0),D(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||r(t)?(b(),C("div",Gx,[w("div",Yx,[a[0]||(a[0]=w("div",{class:"image-bg"},null,-1)),D(n.$slots,"home-hero-image",{},()=>[e.image?(b(),ae(qs,{key:0,class:"image-src",image:e.image},null,8,["image"])):I("",!0)],!0)])])):I("",!0)])],2))}}),Qx=pe(Xx,[["__scopeId","data-v-c0fe9412"]]),Jx=M({__name:"VPHomeHero",setup(e){const{frontmatter:t}=ye();return(n,a)=>r(t).hero?(b(),ae(Qx,{key:0,class:"VPHomeHero",name:r(t).hero.name,text:r(t).hero.text,tagline:r(t).hero.tagline,image:r(t).hero.image,actions:r(t).hero.actions},{"home-hero-info-before":E(()=>[D(n.$slots,"home-hero-info-before")]),"home-hero-info":E(()=>[D(n.$slots,"home-hero-info")]),"home-hero-info-after":E(()=>[D(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":E(()=>[D(n.$slots,"home-hero-actions-after")]),"home-hero-image":E(()=>[D(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):I("",!0)}}),Wx={class:"box"},e0={key:0,class:"icon"},t0=["innerHTML"],n0=["innerHTML"],a0=["innerHTML"],l0={key:4,class:"link-text"},o0={class:"link-text-value"},i0=M({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(b(),ae($n,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:E(()=>[w("article",Wx,[typeof e.icon=="object"&&e.icon.wrap?(b(),C("div",e0,[U(qs,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(b(),ae(qs,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(b(),C("div",{key:2,class:"icon",innerHTML:e.icon},null,8,t0)):I("",!0),w("h2",{class:"title",innerHTML:e.title},null,8,n0),e.details?(b(),C("p",{key:3,class:"details",innerHTML:e.details},null,8,a0)):I("",!0),e.linkText?(b(),C("div",l0,[w("p",o0,[K($(e.linkText)+" ",1),n[0]||(n[0]=w("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):I("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),s0=pe(i0,[["__scopeId","data-v-b285169c"]]),r0={key:0,class:"VPFeatures"},c0={class:"container"},u0={class:"items"},d0=M({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=P(()=>{const a=t.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,l)=>e.features?(b(),C("div",r0,[w("div",c0,[w("div",u0,[(b(!0),C(ne,null,me(e.features,o=>(b(),C("div",{key:o.title,class:J(["item",[n.value]])},[U(s0,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):I("",!0)}}),p0=pe(d0,[["__scopeId","data-v-641f3c6a"]]),m0=M({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=ye();return(n,a)=>r(t).features?(b(),ae(p0,{key:0,class:"VPHomeFeatures",features:r(t).features},null,8,["features"])):I("",!0)}}),h0=M({__name:"VPHomeContent",setup(e){const{width:t}=pS({initialWidth:0,includeScrollbar:!1});return(n,a)=>(b(),C("div",{class:"vp-doc container",style:he(r(t)?{"--vp-offset":`calc(50% - ${r(t)/2}px)`}:{})},[D(n.$slots,"default",{},void 0,!0)],4))}}),f0=pe(h0,[["__scopeId","data-v-a7e7b8fa"]]),v0=M({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=ye();return(a,l)=>{const o=aa("Content");return b(),C("div",{class:J(["VPHome",{"external-link-icon-enabled":r(n).externalLinkIcon}])},[D(a.$slots,"home-hero-before",{},void 0,!0),U(Jx,null,{"home-hero-info-before":E(()=>[D(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":E(()=>[D(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":E(()=>[D(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":E(()=>[D(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":E(()=>[D(a.$slots,"home-hero-image",{},void 0,!0)]),_:3}),D(a.$slots,"home-hero-after",{},void 0,!0),D(a.$slots,"home-features-before",{},void 0,!0),U(m0),D(a.$slots,"home-features-after",{},void 0,!0),r(t).markdownStyles!==!1?(b(),ae(f0,{key:0},{default:E(()=>[U(o)]),_:1})):(b(),ae(o,{key:1}))],2)}}}),g0=pe(v0,[["__scopeId","data-v-a06b0b8e"]]),b0={},y0={class:"VPPage"};function S0(e,t){const n=aa("Content");return b(),C("div",y0,[D(e.$slots,"page-top"),U(n),D(e.$slots,"page-bottom")])}const x0=pe(b0,[["render",S0]]),C0=M({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=ye(),{hasSidebar:a}=la();return(l,o)=>(b(),C("div",{class:J(["VPContent",{"has-sidebar":r(a),"is-home":r(n).layout==="home"}]),id:"VPContent"},[r(t).isNotFound?D(l.$slots,"not-found",{},()=>[U(LS)],!0,0):r(n).layout==="page"?(b(),ae(x0,{key:1},{"page-top":E(()=>[D(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":E(()=>[D(l.$slots,"page-bottom",{},void 0,!0)]),_:3})):r(n).layout==="home"?(b(),ae(g0,{key:2},{"home-hero-before":E(()=>[D(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":E(()=>[D(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":E(()=>[D(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":E(()=>[D(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":E(()=>[D(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":E(()=>[D(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":E(()=>[D(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":E(()=>[D(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":E(()=>[D(l.$slots,"home-features-after",{},void 0,!0)]),_:3})):r(n).layout&&r(n).layout!=="doc"?(b(),ae(sn(r(n).layout),{key:3})):(b(),ae(Zx,{key:4},{"doc-top":E(()=>[D(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":E(()=>[D(l.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":E(()=>[D(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":E(()=>[D(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":E(()=>[D(l.$slots,"doc-after",{},void 0,!0)]),"aside-top":E(()=>[D(l.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":E(()=>[D(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":E(()=>[D(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":E(()=>[D(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":E(()=>[D(l.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":E(()=>[D(l.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),_0=pe(C0,[["__scopeId","data-v-e0f29958"]]),k0={class:"container"},w0=["innerHTML"],N0=["innerHTML"],T0=M({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=ye(),{hasSidebar:a}=la();return(l,o)=>r(t).footer&&r(n).footer!==!1?(b(),C("footer",{key:0,class:J(["VPFooter",{"has-sidebar":r(a)}])},[w("div",k0,[r(t).footer.message?(b(),C("p",{key:0,class:"message",innerHTML:r(t).footer.message},null,8,w0)):I("",!0),r(t).footer.copyright?(b(),C("p",{key:1,class:"copyright",innerHTML:r(t).footer.copyright},null,8,N0)):I("",!0)])],2)):I("",!0)}}),z0=pe(T0,[["__scopeId","data-v-e10f4d64"]]);function U0(){const{theme:e,frontmatter:t}=ye(),n=Sf([]),a=P(()=>n.value.length>0);return $r(()=>{n.value=Bd(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:a}}const $0={class:"menu-text"},E0={class:"header"},A0={class:"outline"},R0=M({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=ye(),a=q(!1),l=q(0),o=q(),i=q();function s(p){var h;(h=o.value)!=null&&h.contains(p.target)||(a.value=!1)}Ge(a,p=>{if(p){document.addEventListener("click",s);return}document.removeEventListener("click",s)}),Xc("Escape",()=>{a.value=!1}),$r(()=>{a.value=!1});function c(){a.value=!a.value,l.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function d(p){p.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),Nt(()=>{a.value=!1}))}function m(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(p,h)=>(b(),C("div",{class:"VPLocalNavOutlineDropdown",style:he({"--vp-vh":l.value+"px"}),ref_key:"main",ref:o},[e.headers.length>0?(b(),C("button",{key:0,onClick:c,class:J({open:a.value})},[w("span",$0,$(r($f)(r(n))),1),h[0]||(h[0]=w("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(b(),C("button",{key:1,onClick:m},$(r(n).returnToTopLabel||"Return to top"),1)),U(Ai,{name:"flyout"},{default:E(()=>[a.value?(b(),C("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:d},[w("div",E0,[w("a",{class:"top-link",href:"#",onClick:m},$(r(n).returnToTopLabel||"Return to top"),1)]),w("div",A0,[U(Ef,{headers:e.headers},null,8,["headers"])])],512)):I("",!0)]),_:1})],4))}}),B0=pe(R0,[["__scopeId","data-v-bbddb214"]]),O0={class:"container"},Z0=["aria-expanded"],j0={class:"menu-text"},D0=M({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=ye(),{hasSidebar:a}=la(),{headers:l}=U0(),{y:o}=Cf(),i=q(0);Vt(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),$r(()=>{l.value=Bd(n.value.outline??t.value.outline)});const s=P(()=>l.value.length===0),c=P(()=>s.value&&!a.value),d=P(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:s.value,fixed:c.value}));return(m,p)=>r(n).layout!=="home"&&(!c.value||r(o)>=i.value)?(b(),C("div",{key:0,class:J(d.value)},[w("div",O0,[r(a)?(b(),C("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:p[0]||(p[0]=h=>m.$emit("open-menu"))},[p[1]||(p[1]=w("span",{class:"vpi-align-left menu-icon"},null,-1)),w("span",j0,$(r(t).sidebarMenuLabel||"Menu"),1)],8,Z0)):I("",!0),U(B0,{headers:r(l),navHeight:i.value},null,8,["headers","navHeight"])])],2)):I("",!0)}}),M0=pe(D0,[["__scopeId","data-v-2f5e8597"]]);function L0(){const e=q(!1);function t(){e.value=!0,window.addEventListener("resize",l)}function n(){e.value=!1,window.removeEventListener("resize",l)}function a(){e.value?n():t()}function l(){window.outerWidth>=768&&n()}const o=Er();return Ge(()=>o.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:a}}const V0={},H0={class:"VPSwitch",type:"button",role:"switch"},I0={class:"check"},F0={key:0,class:"icon"};function K0(e,t){return b(),C("button",H0,[w("span",I0,[e.$slots.default?(b(),C("span",F0,[D(e.$slots,"default",{},void 0,!0)])):I("",!0)])])}const q0=pe(V0,[["render",K0],["__scopeId","data-v-263cf1e6"]]),P0=M({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=ye(),a=So("toggle-appearance",()=>{t.value=!t.value}),l=q("");return $d(()=>{l.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,i)=>(b(),ae(q0,{title:l.value,class:"VPSwitchAppearance","aria-checked":r(t),onClick:r(a)},{default:E(()=>[...i[0]||(i[0]=[w("span",{class:"vpi-sun sun"},null,-1),w("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Od=pe(P0,[["__scopeId","data-v-bd069591"]]),G0={key:0,class:"VPNavBarAppearance"},Y0=M({__name:"VPNavBarAppearance",setup(e){const{site:t}=ye();return(n,a)=>r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(b(),C("div",G0,[U(Od)])):I("",!0)}}),X0=pe(Y0,[["__scopeId","data-v-7aa28a41"]]),Zd=q();let Af=!1,cc=0;function Q0(e){const t=q(!1);if(Ar){!Af&&J0(),cc++;const n=Ge(Zd,a=>{var l,o,i;a===e.el.value||(l=e.el.value)!=null&&l.contains(a)?(t.value=!0,(o=e.onFocus)==null||o.call(e)):(t.value=!1,(i=e.onBlur)==null||i.call(e))});Ne(()=>{n(),cc--,cc||W0()})}return _f(t)}function J0(){document.addEventListener("focusin",Rf),Af=!0,Zd.value=document.activeElement}function W0(){document.removeEventListener("focusin",Rf)}function Rf(){Zd.value=document.activeElement}const e1={class:"VPMenuLink"},t1=["innerHTML"],n1=M({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=ye();return(n,a)=>(b(),C("div",e1,[U($n,{class:J({active:r(nl)(r(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:E(()=>[w("span",{innerHTML:e.item.text},null,8,t1)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Br=pe(n1,[["__scopeId","data-v-740b01a7"]]),a1={class:"VPMenuGroup"},l1={key:0,class:"title"},o1=M({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(b(),C("div",a1,[e.text?(b(),C("p",l1,$(e.text),1)):I("",!0),(b(!0),C(ne,null,me(e.items,a=>(b(),C(ne,null,["link"in a?(b(),ae(Br,{key:0,item:a},null,8,["item"])):I("",!0)],64))),256))]))}}),i1=pe(o1,[["__scopeId","data-v-fbf0a0d3"]]),s1={class:"VPMenu"},r1={key:0,class:"items"},c1=M({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(b(),C("div",s1,[e.items?(b(),C("div",r1,[(b(!0),C(ne,null,me(e.items,a=>(b(),C(ne,{key:JSON.stringify(a)},["link"in a?(b(),ae(Br,{key:0,item:a},null,8,["item"])):"component"in a?(b(),ae(sn(a.component),Un({key:1,ref_for:!0},a.props),null,16)):(b(),ae(i1,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):I("",!0),D(t.$slots,"default",{},void 0,!0)]))}}),u1=pe(c1,[["__scopeId","data-v-5079ecf8"]]),d1=["aria-expanded","aria-label"],p1={key:0,class:"text"},m1=["innerHTML"],h1={key:1,class:"vpi-more-horizontal icon"},f1={class:"menu"},v1=M({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=q(!1),n=q();Q0({el:n,onBlur:a});function a(){t.value=!1}return(l,o)=>(b(),C("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=i=>t.value=!0),onMouseleave:o[2]||(o[2]=i=>t.value=!1)},[w("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:o[0]||(o[0]=i=>t.value=!t.value)},[e.button||e.icon?(b(),C("span",p1,[e.icon?(b(),C("span",{key:0,class:J([e.icon,"option-icon"])},null,2)):I("",!0),e.button?(b(),C("span",{key:1,innerHTML:e.button},null,8,m1)):I("",!0),o[3]||(o[3]=w("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(b(),C("span",h1))],8,d1),w("div",f1,[U(u1,{items:e.items},{default:E(()=>[D(l.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),jd=pe(v1,[["__scopeId","data-v-d6305e53"]]),g1=["href","aria-label","innerHTML"],b1=M({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=q();Vt(async()=>{var o;await Nt();const l=(o=n.value)==null?void 0:o.children[0];l instanceof HTMLElement&&l.className.startsWith("vpi-social-")&&(getComputedStyle(l).maskImage||getComputedStyle(l).webkitMaskImage)==="none"&&l.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const a=P(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(l,o)=>(b(),C("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:a.value},null,8,g1))}}),y1=pe(b1,[["__scopeId","data-v-012cce12"]]),S1={class:"VPSocialLinks"},x1=M({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(b(),C("div",S1,[(b(!0),C(ne,null,me(e.links,({link:a,icon:l,ariaLabel:o})=>(b(),ae(y1,{key:a,icon:l,link:a,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),Dd=pe(x1,[["__scopeId","data-v-8fd41632"]]),C1={key:0,class:"group translations"},_1={class:"trans-title"},k1={key:1,class:"group"},w1={class:"item appearance"},N1={class:"label"},T1={class:"appearance-action"},z1={key:2,class:"group"},U1={class:"item social-links"},$1=M({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=ye(),{localeLinks:a,currentLang:l}=Bi({correspondingLink:!0}),o=P(()=>a.value.length&&l.value.label||t.value.appearance||n.value.socialLinks);return(i,s)=>o.value?(b(),ae(jd,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:E(()=>[r(a).length&&r(l).label?(b(),C("div",C1,[w("p",_1,$(r(l).label),1),(b(!0),C(ne,null,me(r(a),c=>(b(),ae(Br,{key:c.link,item:c},null,8,["item"]))),128))])):I("",!0),r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(b(),C("div",k1,[w("div",w1,[w("p",N1,$(r(n).darkModeSwitchLabel||"Appearance"),1),w("div",T1,[U(Od)])])])):I("",!0),r(n).socialLinks?(b(),C("div",z1,[w("div",U1,[U(Dd,{class:"social-links-list",links:r(n).socialLinks},null,8,["links"])])])):I("",!0)]),_:1})):I("",!0)}}),E1=pe($1,[["__scopeId","data-v-aa6e6ef3"]]),A1=["aria-expanded"],R1=M({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(b(),C("button",{type:"button",class:J(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=a=>t.$emit("click"))},[...n[1]||(n[1]=[w("span",{class:"container"},[w("span",{class:"top"}),w("span",{class:"middle"}),w("span",{class:"bottom"})],-1)])],10,A1))}}),B1=pe(R1,[["__scopeId","data-v-a2b2b557"]]),O1=["innerHTML"],Z1=M({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=ye();return(n,a)=>(b(),ae($n,{class:J({VPNavBarMenuLink:!0,active:r(nl)(r(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:E(()=>[w("span",{innerHTML:e.item.text},null,8,O1)]),_:1},8,["class","href","target","rel","no-icon"]))}}),j1=pe(Z1,[["__scopeId","data-v-53298616"]]),D1=M({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=ye(),a=o=>"component"in o?!1:"link"in o?nl(n.value.relativePath,o.link,!!t.item.activeMatch):o.items.some(a),l=P(()=>a(t.item));return(o,i)=>(b(),ae(jd,{class:J({VPNavBarMenuGroup:!0,active:r(nl)(r(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||l.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),M1={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},L1=M({__name:"VPNavBarMenu",setup(e){const{theme:t}=ye();return(n,a)=>r(t).nav?(b(),C("nav",M1,[a[0]||(a[0]=w("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(b(!0),C(ne,null,me(r(t).nav,l=>(b(),C(ne,{key:JSON.stringify(l)},["link"in l?(b(),ae(j1,{key:0,item:l},null,8,["item"])):"component"in l?(b(),ae(sn(l.component),Un({key:1,ref_for:!0},l.props),null,16)):(b(),ae(D1,{key:2,item:l},null,8,["item"]))],64))),128))])):I("",!0)}}),V1=pe(L1,[["__scopeId","data-v-200a2831"]]);function H1(e){const{localeIndex:t,theme:n}=ye();function a(l){var k,x,S;const o=l.split("."),i=(k=n.value.search)==null?void 0:k.options,s=i&&typeof i=="object",c=s&&((S=(x=i.locales)==null?void 0:x[t.value])==null?void 0:S.translations)||null,d=s&&i.translations||null;let m=c,p=d,h=e;const g=o.pop();for(const v of o){let f=null;const y=h==null?void 0:h[v];y&&(f=h=y);const _=p==null?void 0:p[v];_&&(f=p=_);const T=m==null?void 0:m[v];T&&(f=m=T),y||(h=f),_||(p=f),T||(m=f)}return(m==null?void 0:m[g])??(p==null?void 0:p[g])??(h==null?void 0:h[g])??""}return a}const I1=["aria-label"],F1={class:"DocSearch-Button-Container"},K1={class:"DocSearch-Button-Placeholder"},nm=M({__name:"VPNavBarSearchButton",setup(e){const n=H1({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,l)=>(b(),C("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":r(n)("button.buttonAriaLabel")},[w("span",F1,[l[0]||(l[0]=w("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),w("span",K1,$(r(n)("button.buttonText")),1)]),l[1]||(l[1]=w("span",{class:"DocSearch-Button-Keys"},[w("kbd",{class:"DocSearch-Button-Key"}),w("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,I1))}}),q1={class:"VPNavBarSearch"},P1={id:"local-search"},G1={key:1,id:"docsearch"},Y1=M({__name:"VPNavBarSearch",setup(e){const t=mS(()=>hS(()=>import("./VPLocalSearchBox.DcXJrcis.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:a}=ye(),l=q(!1),o=q(!1);Vt(()=>{});function i(){l.value||(l.value=!0,setTimeout(s,16))}function s(){const p=new Event("keydown");p.key="k",p.metaKey=!0,window.dispatchEvent(p),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||s()},16)}function c(p){const h=p.target,g=h.tagName;return h.isContentEditable||g==="INPUT"||g==="SELECT"||g==="TEXTAREA"}const d=q(!1);Xc("k",p=>{(p.ctrlKey||p.metaKey)&&(p.preventDefault(),d.value=!0)}),Xc("/",p=>{c(p)||(p.preventDefault(),d.value=!0)});const m="local";return(p,h)=>{var g;return b(),C("div",q1,[r(m)==="local"?(b(),C(ne,{key:0},[d.value?(b(),ae(r(t),{key:0,onClose:h[0]||(h[0]=k=>d.value=!1)})):I("",!0),w("div",P1,[U(nm,{onClick:h[1]||(h[1]=k=>d.value=!0)})])],64)):r(m)==="algolia"?(b(),C(ne,{key:1},[l.value?(b(),ae(r(n),{key:0,algolia:((g=r(a).search)==null?void 0:g.options)??r(a).algolia,onVnodeBeforeMount:h[2]||(h[2]=k=>o.value=!0)},null,8,["algolia"])):I("",!0),o.value?I("",!0):(b(),C("div",G1,[U(nm,{onClick:i})]))],64)):I("",!0)])}}}),X1=M({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=ye();return(n,a)=>r(t).socialLinks?(b(),ae(Dd,{key:0,class:"VPNavBarSocialLinks",links:r(t).socialLinks},null,8,["links"])):I("",!0)}}),Q1=pe(X1,[["__scopeId","data-v-72f459c3"]]),J1=["href","rel","target"],W1=["innerHTML"],eC={key:2},tC=M({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=ye(),{hasSidebar:a}=la(),{currentLang:l}=Bi(),o=P(()=>{var c;return typeof n.value.logoLink=="string"?n.value.logoLink:(c=n.value.logoLink)==null?void 0:c.link}),i=P(()=>{var c;return typeof n.value.logoLink=="string"||(c=n.value.logoLink)==null?void 0:c.rel}),s=P(()=>{var c;return typeof n.value.logoLink=="string"||(c=n.value.logoLink)==null?void 0:c.target});return(c,d)=>(b(),C("div",{class:J(["VPNavBarTitle",{"has-sidebar":r(a)}])},[w("a",{class:"title",href:o.value??r(Rd)(r(l).link),rel:i.value,target:s.value},[D(c.$slots,"nav-bar-title-before",{},void 0,!0),r(n).logo?(b(),ae(qs,{key:0,class:"logo",image:r(n).logo},null,8,["image"])):I("",!0),r(n).siteTitle?(b(),C("span",{key:1,innerHTML:r(n).siteTitle},null,8,W1)):r(n).siteTitle===void 0?(b(),C("span",eC,$(r(t).title),1)):I("",!0),D(c.$slots,"nav-bar-title-after",{},void 0,!0)],8,J1)],2))}}),nC=pe(tC,[["__scopeId","data-v-b0934674"]]),aC={class:"items"},lC={class:"title"},oC=M({__name:"VPNavBarTranslations",setup(e){const{theme:t}=ye(),{localeLinks:n,currentLang:a}=Bi({correspondingLink:!0});return(l,o)=>r(n).length&&r(a).label?(b(),ae(jd,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:r(t).langMenuLabel||"Change language"},{default:E(()=>[w("div",aC,[w("p",lC,$(r(a).label),1),(b(!0),C(ne,null,me(r(n),i=>(b(),ae(Br,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):I("",!0)}}),iC=pe(oC,[["__scopeId","data-v-715d9207"]]),sC={class:"wrapper"},rC={class:"container"},cC={class:"title"},uC={class:"content"},dC={class:"content-body"},pC=M({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=Cf(),{hasSidebar:a}=la(),{frontmatter:l}=ye(),o=q({});return $d(()=>{o.value={"has-sidebar":a.value,home:l.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(i,s)=>(b(),C("div",{class:J(["VPNavBar",o.value])},[w("div",sC,[w("div",rC,[w("div",cC,[U(nC,null,{"nav-bar-title-before":E(()=>[D(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":E(()=>[D(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),w("div",uC,[w("div",dC,[D(i.$slots,"nav-bar-content-before",{},void 0,!0),U(Y1,{class:"search"}),U(V1,{class:"menu"}),U(iC,{class:"translations"}),U(X0,{class:"appearance"}),U(Q1,{class:"social-links"}),U(E1,{class:"extra"}),D(i.$slots,"nav-bar-content-after",{},void 0,!0),U(B1,{class:"hamburger",active:e.isScreenOpen,onClick:s[0]||(s[0]=c=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),s[1]||(s[1]=w("div",{class:"divider"},[w("div",{class:"divider-line"})],-1))],2))}}),mC=pe(pC,[["__scopeId","data-v-4dd2485b"]]),hC={key:0,class:"VPNavScreenAppearance"},fC={class:"text"},vC=M({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=ye();return(a,l)=>r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(b(),C("div",hC,[w("p",fC,$(r(n).darkModeSwitchLabel||"Appearance"),1),U(Od)])):I("",!0)}}),gC=pe(vC,[["__scopeId","data-v-74df9a14"]]),bC=["innerHTML"],yC=M({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=So("close-screen");return(n,a)=>(b(),ae($n,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:r(t)},{default:E(()=>[w("span",{innerHTML:e.item.text},null,8,bC)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),SC=pe(yC,[["__scopeId","data-v-cdb49edc"]]),xC=["innerHTML"],CC=M({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=So("close-screen");return(n,a)=>(b(),ae($n,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:r(t)},{default:E(()=>[w("span",{innerHTML:e.item.text},null,8,xC)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Bf=pe(CC,[["__scopeId","data-v-b1603663"]]),_C={class:"VPNavScreenMenuGroupSection"},kC={key:0,class:"title"},wC=M({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(b(),C("div",_C,[e.text?(b(),C("p",kC,$(e.text),1)):I("",!0),(b(!0),C(ne,null,me(e.items,a=>(b(),ae(Bf,{key:a.text,item:a},null,8,["item"]))),128))]))}}),NC=pe(wC,[["__scopeId","data-v-c381fc92"]]),TC=["aria-controls","aria-expanded"],zC=["innerHTML"],UC=["id"],$C={key:0,class:"item"},EC={key:1,class:"item"},AC={key:2,class:"group"},RC=M({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=q(!1),a=P(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function l(){n.value=!n.value}return(o,i)=>(b(),C("div",{class:J(["VPNavScreenMenuGroup",{open:n.value}])},[w("button",{class:"button","aria-controls":a.value,"aria-expanded":n.value,onClick:l},[w("span",{class:"button-text",innerHTML:e.text},null,8,zC),i[0]||(i[0]=w("span",{class:"vpi-plus button-icon"},null,-1))],8,TC),w("div",{id:a.value,class:"items"},[(b(!0),C(ne,null,me(e.items,s=>(b(),C(ne,{key:JSON.stringify(s)},["link"in s?(b(),C("div",$C,[U(Bf,{item:s},null,8,["item"])])):"component"in s?(b(),C("div",EC,[(b(),ae(sn(s.component),Un({ref_for:!0},s.props,{"screen-menu":""}),null,16))])):(b(),C("div",AC,[U(NC,{text:s.text,items:s.items},null,8,["text","items"])]))],64))),128))],8,UC)],2))}}),BC=pe(RC,[["__scopeId","data-v-bf4d52fa"]]),OC={key:0,class:"VPNavScreenMenu"},ZC=M({__name:"VPNavScreenMenu",setup(e){const{theme:t}=ye();return(n,a)=>r(t).nav?(b(),C("nav",OC,[(b(!0),C(ne,null,me(r(t).nav,l=>(b(),C(ne,{key:JSON.stringify(l)},["link"in l?(b(),ae(SC,{key:0,item:l},null,8,["item"])):"component"in l?(b(),ae(sn(l.component),Un({key:1,ref_for:!0},l.props,{"screen-menu":""}),null,16)):(b(),ae(BC,{key:2,text:l.text||"",items:l.items},null,8,["text","items"]))],64))),128))])):I("",!0)}}),jC=M({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=ye();return(n,a)=>r(t).socialLinks?(b(),ae(Dd,{key:0,class:"VPNavScreenSocialLinks",links:r(t).socialLinks},null,8,["links"])):I("",!0)}}),DC={class:"list"},MC=M({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=Bi({correspondingLink:!0}),a=q(!1);function l(){a.value=!a.value}return(o,i)=>r(t).length&&r(n).label?(b(),C("div",{key:0,class:J(["VPNavScreenTranslations",{open:a.value}])},[w("button",{class:"title",onClick:l},[i[0]||(i[0]=w("span",{class:"vpi-languages icon lang"},null,-1)),K(" "+$(r(n).label)+" ",1),i[1]||(i[1]=w("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),w("ul",DC,[(b(!0),C(ne,null,me(r(t),s=>(b(),C("li",{key:s.link,class:"item"},[U($n,{class:"link",href:s.link},{default:E(()=>[K($(s.text),1)]),_:2},1032,["href"])]))),128))])],2)):I("",!0)}}),LC=pe(MC,[["__scopeId","data-v-26e9d429"]]),VC={class:"container"},HC=M({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=q(null),n=kf(Ar?document.body:null);return(a,l)=>(b(),ae(Ai,{name:"fade",onEnter:l[0]||(l[0]=o=>n.value=!0),onAfterLeave:l[1]||(l[1]=o=>n.value=!1)},{default:E(()=>[e.open?(b(),C("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[w("div",VC,[D(a.$slots,"nav-screen-content-before",{},void 0,!0),U(ZC,{class:"menu"}),U(LC,{class:"translations"}),U(gC,{class:"appearance"}),U(jC,{class:"social-links"}),D(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):I("",!0)]),_:3}))}}),IC=pe(HC,[["__scopeId","data-v-134880d5"]]),FC={key:0,class:"VPNav"},KC=M({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:a}=L0(),{frontmatter:l}=ye(),o=P(()=>l.value.navbar!==!1);return Rr("close-screen",n),ke(()=>{Ar&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(i,s)=>o.value?(b(),C("header",FC,[U(mC,{"is-screen-open":r(t),onToggleScreen:r(a)},{"nav-bar-title-before":E(()=>[D(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":E(()=>[D(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":E(()=>[D(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":E(()=>[D(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),U(IC,{open:r(t)},{"nav-screen-content-before":E(()=>[D(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":E(()=>[D(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):I("",!0)}}),qC=pe(KC,[["__scopeId","data-v-0ca8dbb3"]]),PC=["role","tabindex"],GC={key:1,class:"items"},YC=M({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:a,isLink:l,isActiveLink:o,hasActiveLink:i,hasChildren:s,toggle:c}=FS(P(()=>t.item)),d=P(()=>s.value?"section":"div"),m=P(()=>l.value?"a":"div"),p=P(()=>s.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),h=P(()=>l.value?void 0:"button"),g=P(()=>[[`level-${t.depth}`],{collapsible:a.value},{collapsed:n.value},{"is-link":l.value},{"is-active":o.value},{"has-active":i.value}]);function k(S){"key"in S&&S.key!=="Enter"||!t.item.link&&c()}function x(){t.item.link&&c()}return(S,v)=>{const f=aa("VPSidebarItem",!0);return b(),ae(sn(d.value),{class:J(["VPSidebarItem",g.value])},{default:E(()=>[e.item.text?(b(),C("div",Un({key:0,class:"item",role:h.value},fS(e.item.items?{click:k,keydown:k}:{},!0),{tabindex:e.item.items&&0}),[v[1]||(v[1]=w("div",{class:"indicator"},null,-1)),e.item.link?(b(),ae($n,{key:0,tag:m.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:E(()=>[(b(),ae(sn(p.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(b(),ae(sn(p.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(b(),C("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:x,onKeydown:Ss(x,["enter"]),tabindex:"0"},[...v[0]||(v[0]=[w("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):I("",!0)],16,PC)):I("",!0),e.item.items&&e.item.items.length?(b(),C("div",GC,[e.depth<5?(b(!0),C(ne,{key:0},me(e.item.items,y=>(b(),ae(f,{key:y.text,item:y,depth:e.depth+1},null,8,["item","depth"]))),128)):I("",!0)])):I("",!0)]),_:1},8,["class"])}}}),XC=pe(YC,[["__scopeId","data-v-8cc228a4"]]),QC=M({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=q(!0);let n=null;return Vt(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),Ed(()=>{n!=null&&(clearTimeout(n),n=null)}),(a,l)=>(b(!0),C(ne,null,me(e.items,o=>(b(),C("div",{key:o.text,class:J(["group",{"no-transition":t.value}])},[U(XC,{item:o,depth:0},null,8,["item"])],2))),128))}}),JC=pe(QC,[["__scopeId","data-v-21ed53d7"]]),WC={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},e_=M({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=la(),a=e,l=q(null),o=kf(Ar?document.body:null);Ge([a,l],()=>{var s;a.open?(o.value=!0,(s=l.value)==null||s.focus()):o.value=!1},{immediate:!0,flush:"post"});const i=q(0);return Ge(t,()=>{i.value+=1},{deep:!0}),(s,c)=>r(n)?(b(),C("aside",{key:0,class:J(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:l,onClick:c[0]||(c[0]=St(()=>{},["stop"]))},[c[2]||(c[2]=w("div",{class:"curtain"},null,-1)),w("nav",WC,[c[1]||(c[1]=w("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),D(s.$slots,"sidebar-nav-before",{},void 0,!0),(b(),ae(JC,{items:r(t),key:i.value},null,8,["items"])),D(s.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):I("",!0)}}),t_=pe(e_,[["__scopeId","data-v-e1a02360"]]),n_=M({__name:"VPSkipLink",setup(e){const{theme:t}=ye(),n=Er(),a=q();Ge(()=>n.path,()=>a.value.focus());function l({target:o}){const i=document.getElementById(decodeURIComponent(o.hash).slice(1));if(i){const s=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",s)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",s),i.focus(),window.scrollTo(0,0)}}return(o,i)=>(b(),C(ne,null,[w("span",{ref_key:"backToTop",ref:a,tabindex:"-1"},null,512),w("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:l},$(r(t).skipToContentLabel||"Skip to content"),1)],64))}}),a_=pe(n_,[["__scopeId","data-v-eb1c66e5"]]),l_=M({__name:"Layout",setup(e){const{isOpen:t,open:n,close:a}=la(),l=Er();Ge(()=>l.path,a),IS(t,a);const{frontmatter:o}=ye(),i=wf(),s=P(()=>!!i["home-hero-image"]);return Rr("hero-image-slot-exists",s),(c,d)=>{const m=aa("Content");return r(o).layout!==!1?(b(),C("div",{key:0,class:J(["Layout",r(o).pageClass])},[D(c.$slots,"layout-top",{},void 0,!0),U(a_),U($S,{class:"backdrop",show:r(t),onClick:r(a)},null,8,["show","onClick"]),U(qC,null,{"nav-bar-title-before":E(()=>[D(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":E(()=>[D(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":E(()=>[D(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":E(()=>[D(c.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":E(()=>[D(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":E(()=>[D(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),U(M0,{open:r(t),onOpenMenu:r(n)},null,8,["open","onOpenMenu"]),U(t_,{open:r(t)},{"sidebar-nav-before":E(()=>[D(c.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":E(()=>[D(c.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),U(_0,null,{"page-top":E(()=>[D(c.$slots,"page-top",{},void 0,!0)]),"page-bottom":E(()=>[D(c.$slots,"page-bottom",{},void 0,!0)]),"not-found":E(()=>[D(c.$slots,"not-found",{},void 0,!0)]),"home-hero-before":E(()=>[D(c.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":E(()=>[D(c.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":E(()=>[D(c.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":E(()=>[D(c.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":E(()=>[D(c.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":E(()=>[D(c.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":E(()=>[D(c.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":E(()=>[D(c.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":E(()=>[D(c.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":E(()=>[D(c.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":E(()=>[D(c.$slots,"doc-before",{},void 0,!0)]),"doc-after":E(()=>[D(c.$slots,"doc-after",{},void 0,!0)]),"doc-top":E(()=>[D(c.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":E(()=>[D(c.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":E(()=>[D(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":E(()=>[D(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":E(()=>[D(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":E(()=>[D(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":E(()=>[D(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":E(()=>[D(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),U(z0),D(c.$slots,"layout-bottom",{},void 0,!0)],2)):(b(),ae(m,{key:1}))}}}),o_=pe(l_,[["__scopeId","data-v-143d77da"]]),Of={Layout:o_,enhanceApp:({app:e})=>{e.component("Badge",TS)}},i_=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function s_(e){return!(e.hasAttribute("disabled")||e.getAttribute("tabindex")==="-1"||(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLButtonElement)&&e.disabled)}function Or(e,t){if(e.key!=="Tab")return!1;const n=Array.from(t.querySelectorAll(i_)).filter(s_),a=document.activeElement,l=a!==null&&a!==t&&t.contains(a);if(n.length===0)return e.preventDefault(),t.focus(),!0;const o=n[0],i=n[n.length-1];return e.shiftKey?!l||a===o?(e.preventDefault(),i.focus(),!0):!1:!l||a===i?(e.preventDefault(),o.focus(),!0):!1}const r_=["日","一","二","三","四","五","六"];function Zf(e,t,n){const a=String(t).padStart(2,"0"),l=String(n).padStart(2,"0");return`${e}-${a}-${l}`}function Qo(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const[t,n,a]=e.split("-").map(Number),l=new Date(t,n-1,a);return l.getFullYear()===t&&l.getMonth()===n-1&&l.getDate()===a}function uc(e){if(!Qo(e))return null;const[t,n,a]=e.split("-").map(Number);return{year:t,month:n,day:a}}function c_(){const e=new Date;return Zf(e.getFullYear(),e.getMonth()+1,e.getDate())}function jf(e,t){const n=new Date(e,t-1,1).getDay(),a=c_(),l=[];for(let o=0;o<42;o+=1){const i=new Date(e,t-1,1-n+o),s=Zf(i.getFullYear(),i.getMonth()+1,i.getDate());l.push({date:s,day:i.getDate(),inMonth:i.getMonth()===t-1,isToday:s===a})}return l}function no(e,t){return e===t?0:e<t?-1:1}function dc(e,t){if(e===void 0)return null;if(t==="range"){if(!Array.isArray(e)||!Qo(e[0])||!Qo(e[1]))return null;const[n,a]=e;return no(n,a)<=0?[n,a]:[a,n]}return Qo(e)?e:null}function am(e,t){return e===t?!0:e===null||t===null?!1:Array.isArray(e)||Array.isArray(t)?!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e[0]===t[0]&&e[1]===t[1]:e===t}function Df(e={}){const t=e.type==="range"?"range":"date",n=e.value!==void 0,a=dc(e.value??e.defaultValue,t),l=a&&typeof a=="string"?uc(a):a&&Array.isArray(a)?uc(a[0]):null,o=new Date,i={value:a,draft:a,open:!1,viewYear:(l==null?void 0:l.year)??o.getFullYear(),viewMonth:(l==null?void 0:l.month)??o.getMonth()+1,rangeStage:null,rangeStart:null,disabled:e.disabled??!1};let s=e.onChange,c=e.onClear;const d=new Set,m=()=>{const h={...i};d.forEach(g=>g(h))},p=()=>{const h=i.value,g=h&&typeof h=="string"?h:h&&Array.isArray(h)?h[0]:null,k=g?uc(g):null,x=new Date;i.viewYear=(k==null?void 0:k.year)??x.getFullYear(),i.viewMonth=(k==null?void 0:k.month)??x.getMonth()+1};return{subscribe(h){return d.add(h),()=>{d.delete(h)}},getState:()=>({...i}),updateOptions(h){let g=!1;const k=h.disabled??i.disabled;if(k!==i.disabled&&(i.disabled=k,g=!0,i.disabled&&i.open&&(i.open=!1)),h.value!==void 0){const x=dc(h.value,t);am(x,i.value)||(i.value=x,i.draft=x,g=!0,i.rangeStart=null,i.rangeStage=null,i.open&&p())}h.onChange!==void 0&&(s=h.onChange),h.onClear!==void 0&&(c=h.onClear),g&&m()},toggleOpen(){i.disabled||(i.open?i.draft=i.value:(p(),i.draft=i.value,i.rangeStart=null,i.rangeStage=t==="range"?"start":null),i.open=!i.open,m())},close(){i.open&&(i.open=!1,i.draft=i.value,i.rangeStart=null,i.rangeStage=null,m())},prevMonth(){i.viewMonth===1?(i.viewMonth=12,i.viewYear-=1):i.viewMonth-=1,m()},nextMonth(){i.viewMonth===12?(i.viewMonth=1,i.viewYear+=1):i.viewMonth+=1,m()},select(h){if(i.disabled||!Qo(h))return;if(t==="date"){i.draft=h,m();return}if(i.rangeStage==="start"||i.rangeStart===null){i.rangeStart=h,i.rangeStage="end",m();return}const g=i.rangeStart,k=no(g,h)<=0?[g,h]:[h,g];i.draft=k,i.rangeStart=null,i.rangeStage=null,m()},selectShortcut(h){if(i.disabled)return;const g=dc(h,t);g!==null&&(i.draft=g,i.rangeStart=null,i.rangeStage=null,m())},confirm(){if(i.disabled||!i.open)return;const h=i.draft;if(i.open=!1,i.rangeStart=null,i.rangeStage=null,h===null||am(h,i.value)){i.draft=i.value,m();return}n||(i.value=h),m(),s==null||s(h)},clear(){i.disabled||i.value!==null&&(n||(i.value=null,i.rangeStart=null,i.rangeStage=null),i.draft=null,m(),s==null||s(t==="range"?["",""]:""),c==null||c())}}}const u_=["January","February","March","April","May","June","July","August","September","October","November","December"],d_={modal:{ok:"OK",cancel:"Cancel"},popconfirm:{confirm:"OK",cancel:"Cancel"},table:{empty:"No data",selectAll:"Select all",selectRow:e=>`Select row ${e+1}`},pagination:{nav:"Pagination",prev:"Previous page",next:"Next page"},datePicker:{panel:"Select date",prevMonth:"Previous month",nextMonth:"Next month",titleFormat:(e,t)=>`${u_[t-1]} ${e}`,weekdays:["Su","Mo","Tu","We","Th","Fr","Sa"],placeholder:"Select date",confirm:"OK",cancel:"Cancel"},skeleton:{loading:"Loading"},breadcrumb:{nav:"Breadcrumb"},select:{searchPlaceholder:"Search...",searchAriaLabel:"Search options",triggerPlaceholder:"Select"},timePicker:{panel:"Select time",placeholder:"Select time",confirm:"OK",cancel:"Cancel"},cascader:{panel:"Please select",placeholder:"Please select"}},Mf={modal:{ok:"确认",cancel:"取消"},popconfirm:{confirm:"确定",cancel:"取消"},table:{empty:"暂无数据",selectAll:"全选",selectRow:e=>`选择第 ${e+1} 行`},pagination:{nav:"分页",prev:"上一页",next:"下一页"},datePicker:{panel:"选择日期",prevMonth:"上个月",nextMonth:"下个月",titleFormat:(e,t)=>`${e} 年 ${String(t).padStart(2,"0")} 月`,weekdays:r_,placeholder:"请选择日期",confirm:"确认",cancel:"取消"},skeleton:{loading:"加载中"},breadcrumb:{nav:"面包屑"},select:{searchPlaceholder:"搜索...",searchAriaLabel:"搜索选项",triggerPlaceholder:"请选择"},timePicker:{panel:"选择时间",placeholder:"请选择时间",confirm:"确认",cancel:"取消"},cascader:{panel:"请选择",placeholder:"请选择"}},p_="zh-CN",eu=new Map([["zh-CN",Mf],["en-US",d_]]);let Ps=p_,hi=Mf;const tu=new Set;function Oa(){return Ps}function Lf(){return hi}function Vf(){tu.forEach(e=>e(hi))}function Hf(e){return tu.add(e),()=>{tu.delete(e)}}function xo(e){const t=eu.get(e);!t||e===Ps||(Ps=e,hi=t,Vf())}function If(e,t){if(e.length===0||t===null||typeof t!="object")return;const n=eu.get(e)??hi,a={...n},l=a,o=n,i=t;let s=!1;Object.keys(t).forEach(c=>{const d=i[c];d===null||typeof d!="object"||(l[c]={...o[c],...d},s=!0)}),s&&(eu.set(e,a),e===Ps&&(hi=a,Vf()))}function Co(e){if(typeof window>"u")return()=>{};let t=null;const n=()=>{t===null&&(t=window.requestAnimationFrame(()=>{t=null,e()}))};return window.addEventListener("scroll",n,!0),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n,!0),window.removeEventListener("resize",n),t!==null&&(window.cancelAnimationFrame(t),t=null)}}const Ho="data-theme",m_=new Set,Oi=()=>typeof document<"u";function fi(){return Oi()&&document.documentElement.getAttribute(Ho)==="dark"?"dark":"light"}function Zr(e){if(!Oi())return;const t=document.documentElement;if(e==="dark"?t.getAttribute(Ho)==="dark":!t.hasAttribute(Ho))return;e==="dark"?t.setAttribute(Ho,"dark"):t.removeAttribute(Ho);const n=e;m_.forEach(a=>a(n))}function Ff(){if(!Oi())return"light";const e=fi()==="dark"?"light":"dark";return Zr(e),e}const nu=new Set;function Kf(e){if(!Oi())return;const t=document.documentElement;Object.entries(e).forEach(([n,a])=>{!n.startsWith("--")||typeof a!="string"||(t.style.setProperty(n,a),nu.add(n))})}function qf(){if(!Oi())return;const e=document.documentElement;nu.forEach(t=>{e.style.removeProperty(t)}),nu.clear()}function Hl(e){return!e.children||e.children.length===0}function Ln(e){const t=new Map,n=[],a=(l,o)=>{for(const i of l)t.set(i.key,{node:i,parentKey:o}),o===null&&n.push(i.key),i.children&&i.children.length>0&&a(i.children,i.key)};return a(e,null),{keyMap:t,rootKeys:n}}function h_(e,t){const{keyMap:n}=Ln(e),a=n.get(t);if(!a)return[];const l=[],o=i=>{if(l.push(i.key),i.children)for(const s of i.children)o(s)};return o(a.node),l}function f_(e,t,n=!1){const{keyMap:a}=Ln(e),l=a.get(t);if(!l)return[];const o=[],i=s=>{if(!(s.disabled&&!n)){if(Hl(s)){o.push(s.key);return}for(const c of s.children??[])i(c)}};return i(l.node),o}function au(e,t,n,a=!1){const{keyMap:l}=Ln(e),o=l.get(n);if(!o)return{checked:!1,indeterminate:!1};if(a||Hl(o.node))return{checked:t.includes(n),indeterminate:!1};const i=f_(e,n,!0);if(i.length===0)return{checked:!1,indeterminate:!1};const s=new Set(t),c=i.filter(d=>s.has(d)).length;return{checked:c===i.length,indeterminate:c>0&&c<i.length}}function lm(e,t){return e===t?!0:!e||!t||e.length!==t.length?!1:e.every((n,a)=>n===t[a])}function Pf(e={}){const t=e.expandedKeys!==void 0,n=e.checkedKeys!==void 0,a=e.selectedKey!==void 0;let l=e.data??[],o=e.checkStrictly??!1,i=e.checkable??!1;const s={expandedKeys:(()=>{if(e.expandedKeys!==void 0)return[...e.expandedKeys];if(e.defaultExpandAll){const{keyMap:S}=Ln(l),v=[];return S.forEach(({node:f},y)=>{Hl(f)||v.push(y)}),v}return e.defaultExpandedKeys?[...e.defaultExpandedKeys]:[]})(),checkedKeys:e.checkedKeys!==void 0?[...e.checkedKeys]:e.defaultCheckedKeys?[...e.defaultCheckedKeys]:[],selectedKey:e.selectedKey!==void 0?e.selectedKey:e.defaultSelectedKey??null,disabled:e.disabled??!1};let c=e.onExpand,d=e.onCheck,m=e.onSelect;const p=new Set,h=()=>{const S={expandedKeys:[...s.expandedKeys],checkedKeys:[...s.checkedKeys],selectedKey:s.selectedKey,disabled:s.disabled};p.forEach(v=>v(S))},g=S=>{var v;const{keyMap:f}=Ln(l);return((v=f.get(S))==null?void 0:v.node)??null},k=(S,v,f)=>{t||(s.expandedKeys=S),h(),c==null||c(S,{key:v,expanded:f})},x=(S,v,f)=>{n||(s.checkedKeys=S),h(),d==null||d(S,{key:v,checked:f})};return{subscribe(S){return p.add(S),()=>{p.delete(S)}},getState:()=>({expandedKeys:[...s.expandedKeys],checkedKeys:[...s.checkedKeys],selectedKey:s.selectedKey,disabled:s.disabled}),updateOptions(S){let v=!1;S.data!==void 0&&S.data!==l&&(l=S.data,v=!0),S.checkable!==void 0&&S.checkable!==i&&(i=S.checkable,v=!0),S.checkStrictly!==void 0&&S.checkStrictly!==o&&(o=S.checkStrictly,v=!0),S.disabled!==void 0&&S.disabled!==s.disabled&&(s.disabled=S.disabled,v=!0),S.expandedKeys!==void 0&&!lm(S.expandedKeys,s.expandedKeys)&&(s.expandedKeys=[...S.expandedKeys],v=!0),S.checkedKeys!==void 0&&!lm(S.checkedKeys,s.checkedKeys)&&(s.checkedKeys=[...S.checkedKeys],v=!0),S.selectedKey!==void 0&&S.selectedKey!==s.selectedKey&&(s.selectedKey=S.selectedKey,v=!0),S.onExpand!==void 0&&(c=S.onExpand),S.onCheck!==void 0&&(d=S.onCheck),S.onSelect!==void 0&&(m=S.onSelect),v&&h()},toggleExpand(S){if(s.disabled)return;const v=g(S);if(!v||v.disabled||Hl(v))return;const f=!s.expandedKeys.includes(S),y=f?[...s.expandedKeys,S]:s.expandedKeys.filter(_=>_!==S);k(y,S,f)},toggleCheck(S){if(s.disabled)return;const v=g(S);if(!v||v.disabled||v.disableCheckbox)return;const f=o?s.checkedKeys.includes(S):au(l,s.checkedKeys,S,!1).checked;if(o){const T=f?s.checkedKeys.filter(N=>N!==S):[...s.checkedKeys,S];x(T,S,!f);return}const y=h_(l,S),{keyMap:_}=Ln(l);if(f){const T=new Set(y);x(s.checkedKeys.filter(N=>!T.has(N)),S,!1)}else{const T=y.filter(A=>{const R=_.get(A);return R&&!R.node.disabled&&!R.node.disableCheckbox}),N=new Set([...s.checkedKeys,...T]);x([...N],S,!0)}},select(S){if(s.disabled)return;const v=g(S);!v||v.disabled||(a||(s.selectedKey=S),h(),m==null||m(S,{key:S}))},expandAll(){if(s.disabled)return;const{keyMap:S}=Ln(l),v=[];S.forEach(({node:f},y)=>{Hl(f)||v.push(y)}),t||(s.expandedKeys=v),h(),c==null||c(v,{key:"",expanded:!0})},collapseAll(){s.disabled||(t||(s.expandedKeys=[]),h(),c==null||c([],{key:"",expanded:!1}))},checkAll(){if(s.disabled)return;if(o){const{keyMap:f}=Ln(l),y=[];f.forEach(({node:_},T)=>{!_.disabled&&!_.disableCheckbox&&y.push(T)}),x(y,"",!0);return}const{keyMap:S}=Ln(l),v=[];S.forEach(({node:f},y)=>{!f.disabled&&!f.disableCheckbox&&v.push(y)}),x(v,"",!0)},uncheckAll(){s.disabled||x([],"",!1)},isExpanded:S=>s.expandedKeys.includes(S),getCheckState:S=>au(l,s.checkedKeys,S,o)}}function Gf(e={}){const t={visible:!0,closable:e.closable??!1};let n=e.onClose;const a=new Set,l=()=>{const o={...t};a.forEach(i=>i(o))};return{subscribe(o){return a.add(o),()=>{a.delete(o)}},getState:()=>({...t}),updateOptions(o){let i=!1;o.closable!==void 0&&o.closable!==t.closable&&(t.closable=o.closable,i=!0),o.onClose!==void 0&&(n=o.onClose),i&&l()},handleClose(){t.visible&&(t.visible=!1,l(),n==null||n())}}}function Yf(e={}){const t={failed:!1};let n=e.src,a=e.onError;const l=new Set,o=()=>{const i={...t};l.forEach(s=>s(i))};return{subscribe(i){return l.add(i),()=>{l.delete(i)}},getState:()=>({...t}),updateOptions(i){let s=!1;i.src!==void 0&&i.src!==n&&(n=i.src,t.failed&&(t.failed=!1,s=!0)),i.onError!==void 0&&(a=i.onError),s&&o()},handleError(){n!==void 0&&(t.failed||(t.failed=!0,o(),a==null||a()))}}}function Xf(e={}){const t={visible:!1,text:null},n=new Set;function a(o){const i=o.dot??!1,s=o.showZero??!1,c=typeof o.max=="number"&&Number.isFinite(o.max)&&o.max>0?o.max:99,d=o.count;if(i){t.visible=!0,t.text=null;return}if(typeof d!="number"||!Number.isFinite(d)){t.visible=!1,t.text=null;return}if(d===0&&!s){t.visible=!1,t.text=null;return}t.visible=!0,t.text=d>c?`${c}+`:String(d)}a(e);const l=()=>{const o={...t};n.forEach(i=>i(o))};return{subscribe(o){return n.add(o),()=>{n.delete(o)}},getState:()=>({...t}),updateOptions(o){const i={count:o.count!==void 0?o.count:e.count,max:o.max!==void 0?o.max:e.max,dot:o.dot!==void 0?o.dot:e.dot,showZero:o.showZero!==void 0?o.showZero:e.showZero},s=t.visible,c=t.text;a(i),(t.visible!==s||t.text!==c)&&l()}}}const v_="/";function om(e){return e||v_}function Qf(e={}){const t={items:e.items??[],separator:om(e.separator)},n=new Set,a=()=>{const l={...t};n.forEach(o=>o(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){const o=l.items!==void 0?l.items:t.items,i=l.separator!==void 0?om(l.separator):t.separator,s=o!==t.items||i!==t.separator;t.items=o,t.separator=i,s&&a()},selectItem(l){var o;const i=t.items[l];i&&(l===t.items.length-1||i.disabled||(o=e.onItemClick)==null||o.call(e,i,l))}}}function Jf(e={}){const t={disabled:e.disabled??!1,loading:e.loading??!1};let n=e.onClick;const a=new Set,l=()=>{const o={...t};a.forEach(i=>i(o))};return{subscribe(o){return a.add(o),()=>{a.delete(o)}},getState:()=>({...t}),updateOptions(o){let i=!1;o.disabled!==void 0&&o.disabled!==t.disabled&&(t.disabled=o.disabled,i=!0),o.loading!==void 0&&o.loading!==t.loading&&(t.loading=o.loading,i=!0),o.onClick!==void 0&&(n=o.onClick),i&&l()},handleClick(o){t.disabled||t.loading||n==null||n(o)}}}function lu(e){return!e.children||e.children.length===0}function Md(e,t){const n=[e];let a=e;for(const l of t){const o=a.find(i=>i.value===l);if(!o||!o.children||o.children.length===0)break;a=o.children,n.push(a)}return n}function ao(e,t){const n=[],a=[];let l=e;for(const o of t){const i=l.find(s=>s.value===o);if(!i)return null;n.push(i.value),a.push(i.label),l=i.children??[]}return{values:n,labels:a}}function Ld(e,t=[],n=!1){const a=[];for(const l of e){if(l.disabled&&!n)continue;const o=[...t,l.value];lu(l)?a.push(o):l.children&&a.push(...Ld(l.children,o,n))}return a}function Wf(e,t,n=!1){let a=e;for(const l of t){if(!a)return[];const o=a.find(i=>i.value===l);if(!o)return[];a=o.children}return a===void 0?[t]:Ld(a,t,n)}function Gs(e,t){return e?e.some(n=>n.length===t.length&&n.every((a,l)=>a===t[l])):!1}function Ys(e,t,n,a=!1){if(a)return{checked:Gs(t,n),indeterminate:!1};const l=Wf(e,n,!0);if(l.length===0)return{checked:!1,indeterminate:!1};const o=l.filter(i=>Gs(t,i)).length;return{checked:o===l.length,indeterminate:o>0&&o<l.length}}function g_(e,t){return e.length===t.length&&e.every((n,a)=>n===t[a])}function b_(e,t){return e===t?!0:e===null||t===null||e.length!==t.length?!1:e.every((n,a)=>n===t[a])}function y_(e,t){if(e===t)return!0;if(e===null||t===null||e.length!==t.length)return!1;const n=new Set(t.map(a=>a.join("/")));return e.every(a=>n.has(a.join("/")))}function pc(e){return!e||e.length===0?!1:Array.isArray(e[0])}function ev(e={}){const t=e.value!==void 0,n=e.multiple??!1,a=e.value!==void 0?e.value:e.defaultValue?e.defaultValue:null,l={value:a&&Array.isArray(a)?a:null,open:!1,activePath:n?[]:a&&!pc(a)?[...a]:[],disabled:e.disabled??!1};let o=e.onChange,i=e.onClear,s=e.options??[],c=e.changeOnSelect??!1,d=e.checkStrictly??!1;const m=new Set,p=()=>{const x={...l,value:l.value?Array.isArray(l.value[0])?l.value.map(S=>[...S]):[...l.value]:null,activePath:[...l.activePath]};m.forEach(S=>S(x))},h=()=>n&&l.value&&pc(l.value)?l.value:[],g=x=>{const S=k(x);t||(l.value=S),p();const v=S.map(f=>{var y;return(y=ao(s,f))==null?void 0:y.labels}).filter(Boolean);o==null||o(S,v)},k=x=>{const S=new Set,v=[];for(const f of x){const y=f.join("/");S.has(y)||(S.add(y),v.push(f))}return v};return{subscribe(x){return m.add(x),()=>{m.delete(x)}},getState:()=>({...l,value:l.value?Array.isArray(l.value[0])?l.value.map(x=>[...x]):[...l.value]:null,activePath:[...l.activePath]}),updateOptions(x){let S=!1;if(x.disabled!==void 0&&x.disabled!==l.disabled&&(l.disabled=x.disabled,l.disabled&&l.open&&(l.open=!1),S=!0),x.value!==void 0)if(n){const v=x.value??[];y_(v,l.value)||(l.value=v.length>0?v.map(f=>[...f]):[],S=!0)}else{const v=x.value;b_(v??null,l.value)||(l.value=v&&v.length>0?[...v]:null,l.activePath=l.value?[...l.value]:[],S=!0)}x.options!==void 0&&(s=x.options),x.changeOnSelect!==void 0&&(c=x.changeOnSelect),x.checkStrictly!==void 0&&(d=x.checkStrictly),x.onChange!==void 0&&(o=x.onChange),x.onClear!==void 0&&(i=x.onClear),S&&p()},toggleOpen(){l.disabled||(l.open||(l.activePath=n?[]:l.value&&!pc(l.value)?[...l.value]:[]),l.open=!l.open,p())},close(){l.open&&(l.open=!1,p())},select(x,S){var v;if(l.disabled)return;const f=(v=Md(s,l.activePath.slice(0,x))[x])==null?void 0:v.find(T=>T.value===S);if(!f||f.disabled)return;const y=[...l.activePath.slice(0,x),S];if(l.activePath=y,n){if(d||lu(f)){const T=h();Gs(T,y)?g(T.filter(N=>!g_(N,y))):g([...T,y])}p();return}const _=lu(f);if(c||_){const T=ao(s,y),N=(T==null?void 0:T.values)??y,A=(T==null?void 0:T.labels)??[];t||(l.value=[...N]),l.open=!1,p(),o==null||o(N,A);return}p()},clear(){l.disabled||(n?!l.value||l.value.length===0:l.value===null)||(t||(l.value=n?[]:null,l.activePath=[]),p(),n?o==null||o([],[]):o==null||o([],[]),i==null||i())},toggleCheck(x){if(!n||l.disabled)return;const S=h(),v=d?[x]:Wf(s,x),f=v.every(_=>Gs(S,_));let y;if(f){const _=new Set(v.map(T=>T.join("/")));y=S.filter(T=>!_.has(T.join("/")))}else y=k([...S,...v]);g(y)},checkAll(){if(!n||l.disabled)return;const x=Ld(s);g(x)},uncheckAll(){!n||l.disabled||g([])}}}function tv(e={}){const t=e.value!==void 0,n={checked:e.value??e.defaultValue??!1,disabled:e.disabled??!1,indeterminate:e.indeterminate??!1};let a=e.onChange;const l=new Set,o=()=>{const i={...n};l.forEach(s=>s(i))};return{subscribe(i){return l.add(i),()=>{l.delete(i)}},getState:()=>({...n}),updateOptions(i){let s=!1;i.value!==void 0&&i.value!==n.checked&&(n.checked=i.value,s=!0),i.disabled!==void 0&&i.disabled!==n.disabled&&(n.disabled=i.disabled,s=!0),i.indeterminate!==void 0&&i.indeterminate!==n.indeterminate&&(n.indeterminate=i.indeterminate,s=!0),i.onChange!==void 0&&(a=i.onChange),s&&o()},toggle(){if(n.disabled)return;const i=n.indeterminate?!0:!n.checked;t||(n.checked=i,n.indeterminate&&(n.indeterminate=!1),o()),a==null||a(i)}}}function nv(e={}){const t={visible:e.visible??e.defaultVisible??!1,closable:e.closable??!0};let n=e.maskClosable??!0,a=e.closeOnEsc??!0,l=e.onOpen,o=e.onClose;const i=new Set,s=()=>{const d={...t};i.forEach(m=>m(d))},c=d=>{t.visible!==d&&(t.visible=d,s(),d?l==null||l():o==null||o())};return{subscribe(d){return i.add(d),()=>{i.delete(d)}},getState:()=>({...t}),updateOptions(d){let m=!1;d.visible!==void 0&&d.visible!==t.visible&&(t.visible=d.visible,m=!0),d.closable!==void 0&&d.closable!==t.closable&&(t.closable=d.closable,m=!0),d.maskClosable!==void 0&&(n=d.maskClosable),d.closeOnEsc!==void 0&&(a=d.closeOnEsc),d.onOpen!==void 0&&(l=d.onOpen),d.onClose!==void 0&&(o=d.onClose),m&&s()},open:()=>c(!0),close:()=>c(!1),toggle:()=>c(!t.visible),handleMaskClick(){n&&c(!1)},handleEsc(){a&&c(!1)}}}function im(e){const t=(e==null?void 0:e.trim())??"";return t===""?null:t}function av(e={}){const t={description:im(e.description)},n=new Set,a=()=>{const l={...t};n.forEach(o=>o(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){if(l.description===void 0)return;const o=im(l.description);o!==t.description&&(t.description=o,a())}}}function ml(e){return e==null||e===""?!0:Array.isArray(e)?e.length===0:typeof e=="object"?Object.keys(e).length===0:!1}function S_(e){return typeof e=="string"?new RegExp(e):e}const x_={required:"该字段为必填项",email:"请输入有效的邮箱地址",phone:"请输入有效的手机号码",number:"请输入有效的数字",url:"请输入有效的 URL",length:"长度不符合要求",regex:"格式不正确",custom:"校验未通过"};function C_(e){return!ml(e)}const __=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;function k_(e){return ml(e)?!0:typeof e=="string"&&__.test(e)}const w_=/^1[3-9]\d{9}$/;function N_(e){return ml(e)?!0:typeof e=="string"&&w_.test(e)}function T_(e,t,n,a){if(ml(e))return!0;const l=Number(e);return!(Number.isNaN(l)||a!==void 0&&l!==a||t!==void 0&&l<t||n!==void 0&&l>n)}function z_(e,t,n,a){if(ml(e))return!0;const l=Array.isArray(e)?e.length:String(e).length;return!(a!==void 0&&l!==a||t!==void 0&&l<t||n!==void 0&&l>n)}function U_(e,t){return ml(e)?!0:S_(t).test(String(e))}const $_=/^https?:\/\/[^\s]+$/;function E_(e){return ml(e)?!0:typeof e=="string"&&$_.test(e)}async function A_(e,t,n,a){if(e.trigger&&a&&a!=="submit"&&e.trigger!==a||e.when&&!e.when(n))return null;const l=()=>e.message??x_[e.type??"custom"];switch(e.type){case"required":return C_(t)?null:l();case"email":return k_(t)?null:l();case"phone":return N_(t)?null:l();case"number":return T_(t,e.min,e.max,e.exact)?null:l();case"length":return z_(t,e.min,e.max,e.exact)?null:l();case"regex":return e.pattern?U_(t,e.pattern)?null:l():null;case"url":return E_(t)?null:l();case"custom":default:{if(!e.validator)return null;const o=await e.validator(t,n);return o===!0?null:typeof o=="string"?o:l()}}}async function sm(e,t,n,a,l=!1){const o=[];for(const i of e){const s=await A_(i,t,n,a);if(s&&(o.push(s),l))break}return{valid:o.length===0,errors:o}}function lv(e){return e?e.some(t=>t.type==="required"):!1}function ov(e={}){const t={...e.initialValues??{}},n={values:{...t},errors:{},validating:!1,submitting:!1,disabled:e.disabled??!1,readonly:e.readonly??!1};let a={...e.rules??{}},l=e.onSubmit,o=e.onSubmitFail,i=e.onValuesChange;const s=new Map,c=new Set,d=()=>{const p={values:{...n.values},errors:Object.fromEntries(Object.entries(n.errors).map(([h,g])=>[h,[...g]])),validating:n.validating,submitting:n.submitting,disabled:n.disabled,readonly:n.readonly};c.forEach(h=>h(p))},m=p=>{const h=s.get(p)??[],g=a[p]??[];return[...h,...g]};return{subscribe(p){return c.add(p),()=>{c.delete(p)}},getState:()=>({values:{...n.values},errors:Object.fromEntries(Object.entries(n.errors).map(([p,h])=>[p,[...h]])),validating:n.validating,submitting:n.submitting,disabled:n.disabled,readonly:n.readonly}),updateOptions(p){let h=!1;p.disabled!==void 0&&p.disabled!==n.disabled&&(n.disabled=p.disabled,h=!0),p.readonly!==void 0&&p.readonly!==n.readonly&&(n.readonly=p.readonly,h=!0),p.rules!==void 0&&(a={...p.rules}),p.onSubmit!==void 0&&(l=p.onSubmit),p.onSubmitFail!==void 0&&(o=p.onSubmitFail),p.onValuesChange!==void 0&&(i=p.onValuesChange),h&&d()},setFieldValue(p,h){n.values[p]!==h&&(n.values[p]=h,i==null||i({[p]:h},{...n.values}),d())},getFieldValue(p){return n.values[p]},getFieldsValue(){return{...n.values}},setFieldsValue(p){n.values={...n.values,...p},i==null||i({...p},{...n.values}),d()},async validateField(p,h){const g=m(p);if(g.length===0)return delete n.errors[p],d(),[];n.validating=!0,d();const k=n.values[p],x=await sm(g,k,{...n.values},h);return n.validating=!1,x.errors.length>0?n.errors[p]=x.errors:delete n.errors[p],d(),x.errors},async validate(p){const h=new Set([...Object.keys(a),...s.keys()]),g={};let k=!0;n.validating=!0,d();for(const x of h){const S=m(x);if(S.length===0)continue;const v=n.values[x],f=await sm(S,v,{...n.values},p);f.errors.length>0&&(g[x]=f.errors,k=!1)}return n.validating=!1,n.errors=g,d(),{valid:k,errors:g,values:{...n.values}}},resetFields(p){if(p&&p.length>0)for(const h of p)t[h]!==void 0?n.values[h]=t[h]:delete n.values[h],delete n.errors[h];else n.values={...t},n.errors={};d()},clearValidate(p){if(p&&p.length>0)for(const h of p)delete n.errors[h];else n.errors={};d()},async submit(){const p=await this.validate("submit");if(p.valid){n.submitting=!0,d();try{await(l==null?void 0:l(p.values))}finally{n.submitting=!1,d()}}else o==null||o(p.errors);return p},registerField(p,h){h&&h.length>0?s.set(p,h):s.set(p,[])},unregisterField(p){s.delete(p),delete n.errors[p],d()}}}function iv(e={}){const t=e.value!==void 0,n={value:e.value??e.defaultValue??"",focused:!1,disabled:e.disabled??!1,readonly:e.readonly??!1};let a=e.onInput,l=e.onChange,o=e.onFocus,i=e.onBlur,s=e.onClear;const c=new Set,d=()=>{const p={...n};c.forEach(h=>h(p))},m=()=>!n.disabled&&!n.readonly;return{subscribe(p){return c.add(p),()=>{c.delete(p)}},getState:()=>({...n}),updateOptions(p){let h=!1;p.value!==void 0&&p.value!==n.value&&(n.value=p.value,h=!0),p.disabled!==void 0&&p.disabled!==n.disabled&&(n.disabled=p.disabled,h=!0),p.readonly!==void 0&&p.readonly!==n.readonly&&(n.readonly=p.readonly,h=!0),p.onInput!==void 0&&(a=p.onInput),p.onChange!==void 0&&(l=p.onChange),p.onFocus!==void 0&&(o=p.onFocus),p.onBlur!==void 0&&(i=p.onBlur),p.onClear!==void 0&&(s=p.onClear),h&&d()},handleInput(p){m()&&(t||(n.value=p,d()),a==null||a(p))},handleChange(p){m()&&(l==null||l(p))},handleFocus(p){n.focused=!0,d(),o==null||o(p)},handleBlur(p){n.focused=!1,d(),i==null||i(p)},handleClear(){m()&&(t||(n.value="",d()),a==null||a(""),s==null||s())}}}function rm(e){return typeof e=="number"&&Number.isFinite(e)?e:-1/0}function cm(e){return typeof e=="number"&&Number.isFinite(e)?e:1/0}function um(e){return typeof e!="number"||!Number.isFinite(e)||e<=0?1:e}function dm(e){return typeof e!="number"||!Number.isInteger(e)||e<0||e>20?null:e}function R_(e){const t=String(e),n=t.indexOf(".");return n===-1?0:t.length-n-1}function sv(e={}){const t={value:null,disabled:e.disabled??!1,min:rm(e.min),max:cm(e.max),step:um(e.step),precision:dm(e.precision)};t.min>t.max&&([t.min,t.max]=[t.max,t.min]);const n=new Set,a=()=>{const s={...t};n.forEach(c=>c(s))};function l(s){if(s==null||typeof s!="number"||!Number.isFinite(s))return null;const c=t.precision!==null?Number(s.toFixed(t.precision)):s;return Math.min(t.max,Math.max(t.min,c))}function o(){return e.value!==void 0}function i(s){var c;t.value!==s&&(o()||(t.value=s,a()),(c=e.onChange)==null||c.call(e,s))}return t.value=l(o()?e.value:e.defaultValue),{subscribe(s){return n.add(s),()=>{n.delete(s)}},getState:()=>({...t}),updateOptions(s){s.min!==void 0&&(t.min=rm(s.min)),s.max!==void 0&&(t.max=cm(s.max)),t.min>t.max&&([t.min,t.max]=[t.max,t.min]),s.step!==void 0&&(t.step=um(s.step)),s.precision!==void 0&&(t.precision=dm(s.precision)),s.disabled!==void 0&&(t.disabled=s.disabled),s.value!==void 0?t.value=l(s.value):(s.min!==void 0||s.max!==void 0||s.precision!==void 0)&&(t.value=l(t.value)),a()},stepValue(s){if(t.disabled)return;const c=l(t.value??e.defaultValue??0)??0,d=10**Math.max(R_(t.step),t.precision??0),m=(Math.round(c*d)+s*Math.round(t.step*d))/d;i(l(m))},commitText(s){if(t.disabled)return;const c=s.trim();let d;if(c==="")d=null;else{const m=Number(c);d=Number.isFinite(m)?m:null}i(l(d))}}}const Xi={type:"info",duration:3e3,closable:!1,maxCount:5};function rv(e={}){const t={items:[]};let n=e.maxCount??Xi.maxCount,a=1;const l=new Map,o=new Map,i=new Set,s=()=>{const m={items:[...t.items]};i.forEach(p=>p(m))},c=m=>{const p=l.get(m);if(p!==void 0&&(clearTimeout(p),l.delete(m)),!t.items.some(g=>g.id===m))return;const h=o.get(m);o.delete(m),t.items=t.items.filter(g=>g.id!==m),h==null||h(),s()},d=m=>{t.items.length<=m||t.items.slice(0,t.items.length-m).forEach(p=>c(p.id))};return{subscribe(m){return i.add(m),()=>{i.delete(m)}},getState:()=>({items:[...t.items]}),updateOptions(m){let p=!1;if(m.maxCount!==void 0&&m.maxCount!==n&&(n=m.maxCount,p=!0),t.items.length>n){d(n);return}p&&s()},open(m){const p=m.duration??Xi.duration,h=k=>{if(p<=0)return;const x=setTimeout(()=>{l.delete(k),c(k)},p);l.set(k,x)};if(m.key!==void 0){const k=t.items.find(x=>x.key===m.key);if(k){const x=l.get(k.id);return x!==void 0&&(clearTimeout(x),l.delete(k.id)),t.items=t.items.map(S=>S.id===k.id?{...S,type:m.type??S.type,content:m.content,closable:m.closable??S.closable,icon:m.icon??S.icon}:S),m.onClose!==void 0&&o.set(k.id,m.onClose),s(),h(k.id),{close:()=>c(k.id)}}}const g=a;return a+=1,d(n-1),t.items=[...t.items,{id:g,type:m.type??Xi.type,content:m.content,closable:m.closable??Xi.closable,icon:m.icon,key:m.key}],m.onClose!==void 0&&o.set(g,m.onClose),s(),h(g),{close:()=>{c(g)}}},close(m){c(m)},closeAll(){if(l.forEach(p=>clearTimeout(p)),l.clear(),t.items.length===0)return;const m=[...o.values()];o.clear(),t.items=[],m.forEach(p=>p()),s()}}}function cv(e={}){const t={visible:e.visible??e.defaultVisible??!1,closable:e.closable??!0};let n=e.maskClosable??!0,a=e.closeOnEsc??!0,l=e.onOpen,o=e.onClose,i=e.onOk,s=e.onCancel;const c=new Set,d=()=>{const p={...t};c.forEach(h=>h(p))},m=p=>{t.visible!==p&&(t.visible=p,d(),p?l==null||l():o==null||o())};return{subscribe(p){return c.add(p),()=>{c.delete(p)}},getState:()=>({...t}),updateOptions(p){let h=!1;p.visible!==void 0&&p.visible!==t.visible&&(t.visible=p.visible,h=!0),p.closable!==void 0&&p.closable!==t.closable&&(t.closable=p.closable,h=!0),p.maskClosable!==void 0&&(n=p.maskClosable),p.closeOnEsc!==void 0&&(a=p.closeOnEsc),p.onOpen!==void 0&&(l=p.onOpen),p.onClose!==void 0&&(o=p.onClose),p.onOk!==void 0&&(i=p.onOk),p.onCancel!==void 0&&(s=p.onCancel),h&&d()},open:()=>m(!0),close:()=>m(!1),toggle:()=>m(!t.visible),handleOk(){i==null||i(),m(!1)},handleCancel(){s==null||s(),m(!1)},handleMaskClick(){n&&m(!1)},handleEsc(){a&&m(!1)}}}const Io=(e,t)=>Math.min(Math.max(Math.floor(e),1),t);function uv(e={}){const t=e.value!==void 0,n=(m,p)=>Math.max(1,Math.ceil(Math.max(m??0,0)/p)),a=m=>Math.max(1,Math.floor(m??10)),l=a(e.pageSize),o=n(e.total,l),i={page:Io(e.value??e.defaultValue??1,o),pageCount:o,disabled:e.disabled??!1};let s=e.onChange;const c=new Set,d=()=>{const m={...i};c.forEach(p=>p(m))};return{subscribe(m){return c.add(m),()=>{c.delete(m)}},getState:()=>({...i}),updateOptions(m){let p=!1;const h=a(m.pageSize??l),g=n(m.total??e.total,h);g!==i.pageCount&&(i.pageCount=g,p=!0);const k=m.disabled??i.disabled;if(k!==i.disabled&&(i.disabled=k,p=!0),m.value!==void 0){const S=Io(m.value,i.pageCount);S!==i.page&&(i.page=S,p=!0)}const x=Io(i.page,i.pageCount);x!==i.page&&(i.page=x,p=!0),m.onChange!==void 0&&(s=m.onChange),p&&d()},goTo(m){if(i.disabled)return;const p=Io(m,i.pageCount);p!==i.page&&(t||(i.page=p,d()),s==null||s(p))},prev(){i.page<=1||this.goTo(i.page-1)},next(){i.page>=i.pageCount||this.goTo(i.page+1)}}}function dv(e,t){const n=Math.max(1,t),a=Io(e,n);return n<=7?Array.from({length:n},(l,o)=>o+1):a<=4?[1,2,3,4,5,"ellipsis-next",n]:a>=n-3?[1,"ellipsis-prev",n-4,n-3,n-2,n-1,n]:[1,"ellipsis-prev",a-1,a,a+1,"ellipsis-next",n]}const B_=["top","bottom","left","right"];function pm(e){return e!==void 0&&B_.includes(e)?e:"top"}function pv(e={}){const t={open:!1,placement:pm(e.placement),disabled:e.disabled??!1},n=new Set,a=()=>{const o={...t};n.forEach(i=>i(o))};function l(){return t.open?(t.open=!1,a(),!0):!1}return{subscribe(o){return n.add(o),()=>{n.delete(o)}},getState:()=>({...t}),updateOptions(o){const i=o.placement!==void 0?pm(o.placement):t.placement,s=o.disabled!==void 0?o.disabled:t.disabled;let c=i!==t.placement||s!==t.disabled;t.placement=i,t.disabled=s,s&&t.open&&(t.open=!1,c=!0),c&&a()},toggle(){t.disabled||(t.open=!t.open,a())},confirm(){var o;l()&&((o=e.onConfirm)==null||o.call(e))},cancel(){var o;l()&&((o=e.onCancel)==null||o.call(e))},close(){l()}}}function mm(e){return typeof e!="number"||!Number.isFinite(e)?0:Math.min(100,Math.max(0,e))}function hm(e){return typeof e!="number"||!Number.isFinite(e)||e<=0?6:e}function mv(e={}){const t={percent:mm(e.percent),strokeWidth:hm(e.strokeWidth),status:"normal"};t.status=a(t,e.status);const n=new Set;function a(o,i){return i==="success"||i==="error"?i:o.percent>=100?"success":"normal"}const l=()=>{const o={...t};n.forEach(i=>i(o))};return{subscribe(o){return n.add(o),()=>{n.delete(o)}},getState:()=>({...t}),updateOptions(o){const i=mm(o.percent!==void 0?o.percent:t.percent),s=hm(o.strokeWidth!==void 0?o.strokeWidth:t.strokeWidth),c=a({percent:i},o.status!==void 0?o.status:void 0),d=i!==t.percent||s!==t.strokeWidth||c!==t.status;t.percent=i,t.strokeWidth=s,t.status=c,d&&l()}}}function hv(e={}){const t=e.value!==void 0,n={value:e.value??e.defaultValue??null,disabled:e.disabled??!1};let a=e.onChange;const l=new Set,o=()=>{const i={...n};l.forEach(s=>s(i))};return{subscribe(i){return l.add(i),()=>{l.delete(i)}},getState:()=>({...n}),updateOptions(i){let s=!1;i.value!==void 0&&i.value!==n.value&&(n.value=i.value,s=!0),i.disabled!==void 0&&i.disabled!==n.disabled&&(n.disabled=i.disabled,s=!0),i.onChange!==void 0&&(a=i.onChange),s&&o()},select(i){n.disabled||(!t&&n.value!==i&&(n.value=i,o()),a==null||a(i))}}}function fv(e={}){const t={disabled:e.disabled??!1},n=new Set,a=()=>{const l={...t};n.forEach(o=>o(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){l.disabled!==void 0&&l.disabled!==t.disabled&&(t.disabled=l.disabled,a())}}}function Vd(e){return Array.isArray(e.options)}function Xs(e){const t=[];for(const n of e)if(Vd(n))for(const a of n.options)t.push({...a,disabled:a.disabled||n.disabled});else t.push(n);return t}function O_(e){return e.filter(Vd)}function fm(e,t){return t?Array.isArray(e)?[...e]:e==null?[]:[e]:Array.isArray(e)?e[0]??null:e??null}function Z_(e,t){return Array.isArray(e)||Array.isArray(t)?!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,a)=>n===t[a]):e===t}function vv(e={}){const t=e.value!==void 0;let n=e.multiple??!1,a=e.searchable??!1,l=e.options??[];const o={value:fm(e.value??e.defaultValue,n),open:!1,activeIndex:-1,disabled:e.disabled??!1,searchQuery:"",filteredOptions:Xs(l),groupedOptions:O_(l)};let i=e.onChange,s=e.onClear,c=e.clearable??!1;const d=new Set,m=()=>{const x={...o,value:Array.isArray(o.value)?[...o.value]:o.value,filteredOptions:[...o.filteredOptions],groupedOptions:o.groupedOptions.map(S=>({...S,options:[...S.options]}))};d.forEach(S=>S(x))},p=()=>{const x=a?o.searchQuery.trim().toLowerCase():"",S=y=>x===""||y.toLowerCase().includes(x),v=[],f=[];for(const y of l)if(Vd(y)){const _=y.options.filter(A=>S(A.label));if(_.length===0)continue;const T=y.disabled??!1,N=_.map(A=>({...A,disabled:A.disabled||T}));f.push({label:y.label,options:N,disabled:T}),v.push(...N)}else S(y.label)&&v.push(y);return{flat:v,groups:f}},h=(x,S)=>{var v;const f=o.filteredOptions.length;if(f===0)return-1;const y=x===-1?S===1?0:f-1:x+S;for(let _=0;_<f;_+=1){const T=((y+S*_)%f+f)%f;if(!((v=o.filteredOptions[T])!=null&&v.disabled))return T}return-1},g=()=>Array.isArray(o.value)?o.value:[],k=x=>n?g().includes(x):o.value===x;return{subscribe(x){return d.add(x),()=>{d.delete(x)}},getState:()=>({...o,value:Array.isArray(o.value)?[...o.value]:o.value,filteredOptions:[...o.filteredOptions],groupedOptions:o.groupedOptions.map(x=>({...x,options:[...x.options]}))}),updateOptions(x){let S=!1;x.value!==void 0&&!Z_(x.value,o.value)&&(o.value=fm(x.value,n),S=!0),x.disabled!==void 0&&x.disabled!==o.disabled&&(o.disabled=x.disabled,o.disabled&&(o.open=!1,o.activeIndex=-1),S=!0),x.options!==void 0&&(l=x.options),x.clearable!==void 0&&(c=x.clearable),x.multiple!==void 0&&(n=x.multiple),x.searchable!==void 0&&(a=x.searchable),x.onChange!==void 0&&(i=x.onChange),x.onClear!==void 0&&(s=x.onClear);const{flat:v,groups:f}=p();(v.length!==o.filteredOptions.length||f!==o.groupedOptions)&&(o.filteredOptions=v,o.groupedOptions=f,S=!0),S&&m()},toggleOpen(){var x;if(!o.disabled){if(o.open){if(o.open=!1,o.activeIndex=-1,o.searchQuery!==""){o.searchQuery="";const{flat:S,groups:v}=p();o.filteredOptions=S,o.groupedOptions=v}}else{o.open=!0;const{flat:S,groups:v}=p();o.filteredOptions=S,o.groupedOptions=v;const f=o.filteredOptions.findIndex(y=>k(y.value));o.activeIndex=f!==-1&&!((x=o.filteredOptions[f])!=null&&x.disabled)?f:h(-1,1)}m()}},close(){if(!(!o.open&&o.activeIndex===-1&&o.searchQuery==="")){if(o.open=!1,o.activeIndex=-1,o.searchQuery!==""){o.searchQuery="";const{flat:x,groups:S}=p();o.filteredOptions=x,o.groupedOptions=S}m()}},select(x){if(o.disabled)return;const S=Xs(l).find(v=>v.value===x);if(!(!S||S.disabled)){if(n){const v=g(),f=v.includes(x)?v.filter(y=>y!==x):[...v,x];t||(o.value=f,m()),i==null||i(f);return}if(o.open=!1,o.activeIndex=-1,o.searchQuery!==""){o.searchQuery="";const{flat:v,groups:f}=p();o.filteredOptions=v,o.groupedOptions=f}o.value!==x?(t||(o.value=x,m()),i==null||i(x)):m()}},clear(){if(!o.disabled){if(n){if(g().length===0)return;t||(o.value=[]),m(),i==null||i([]),s==null||s();return}!c||o.value===null||(t||(o.value=null),m(),i==null||i(""),s==null||s())}},moveHighlight(x){if(o.disabled||!o.open||o.filteredOptions.length===0)return;const S=h(o.activeIndex,x);S!==-1&&S!==o.activeIndex&&(o.activeIndex=S,m())},confirmHighlight(){if(o.activeIndex===-1)return;const x=o.filteredOptions[o.activeIndex];x&&this.select(x.value)},setSearch(x){if(!a||o.searchQuery===x)return;o.searchQuery=x;const{flat:S,groups:v}=p();o.filteredOptions=S,o.groupedOptions=v,o.activeIndex=o.filteredOptions.length>0?h(-1,1):-1,m()}}}function vm(e){return typeof e!="number"||!Number.isFinite(e)||e<=0?3:Math.floor(e)}function gv(e={}){const t={loading:e.loading??!0,avatar:e.avatar??!1,rows:vm(e.rows)},n=new Set,a=()=>{const l={...t};n.forEach(o=>o(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){const o=l.loading!==void 0?l.loading:t.loading,i=l.avatar!==void 0?l.avatar:t.avatar,s=l.rows!==void 0?vm(l.rows):t.rows,c=o!==t.loading||i!==t.avatar||s!==t.rows;t.loading=o,t.avatar=i,t.rows=s,c&&a()}}}const j_=["sm","md","lg"];function gm(e){return e!==void 0&&j_.includes(e)?e:"md"}function bm(e){return e||null}function bv(e={}){const t={size:gm(e.size),spinning:e.spinning??!0,tip:bm(e.tip)},n=new Set,a=()=>{const l={...t};n.forEach(o=>o(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){const o=l.size!==void 0?gm(l.size):t.size,i=l.spinning!==void 0?l.spinning:t.spinning,s=l.tip!==void 0?bm(l.tip):t.tip,c=o!==t.size||i!==t.spinning||s!==t.tip;t.size=o,t.spinning=i,t.tip=s,c&&a()}}}function yv(e={}){const t=e.value!==void 0,n={checked:e.value??e.defaultValue??!1,disabled:e.disabled??!1,loading:e.loading??!1};let a=!1,l=e.beforeChange,o=e.onChange;const i=new Set,s=()=>({...n,loading:n.loading||a}),c=()=>{i.forEach(m=>m(s()))},d=m=>{t||(n.checked=m),o==null||o(m),c()};return{subscribe(m){return i.add(m),()=>{i.delete(m)}},getState:s,updateOptions(m){let p=!1;m.value!==void 0&&m.value!==n.checked&&(n.checked=m.value,p=!0),m.disabled!==void 0&&m.disabled!==n.disabled&&(n.disabled=m.disabled,p=!0),m.loading!==void 0&&m.loading!==n.loading&&(n.loading=m.loading,p=!0),m.beforeChange!==void 0&&(l=m.beforeChange),m.onChange!==void 0&&(o=m.onChange),(p||a)&&c()},toggle(){if(n.disabled||n.loading||a)return;const m=!n.checked,p=l==null?void 0:l(m);if(p!==!1){if(p instanceof Promise)return a=!0,c(),p.then(h=>{a=!1,h!==!1?d(m):c()}).catch(()=>{a=!1,c()});d(m)}}}}function Sv(e){return e==null?"":String(e)}function va(e,t,n){if(n===void 0)return t;const a=e[n];return typeof a=="string"||typeof a=="number"?a:t}const D_=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e-t;const n=String(e??""),a=String(t??"");return n<a?-1:n>a?1:0};function xv(e={}){let t=e.dataSource??[],n=e.rowKey,a=e.rowSelection;const l={sortKey:null,sortOrder:null,sortedData:t,selectedRowKeys:[],allSelected:!1,indeterminate:!1};let o=e.onSortChange;const i=new Set,s=new Set,c=()=>{const k={...l};s.forEach(x=>x(k))},d=()=>{if(l.sortKey===null||l.sortOrder===null){l.sortedData=t;return}const k=l.sortKey,x=l.sortOrder==="asc"?1:-1;l.sortedData=[...t].sort((S,v)=>D_(S[k],v[k])*x)},m=()=>{if((a==null?void 0:a.getCheckboxDisabled)===void 0)return t.map((S,v)=>va(S,v,n));const k=a.getCheckboxDisabled,x=[];return t.forEach((S,v)=>{k(S,v)||x.push(va(S,v,n))}),x},p=k=>{const x=m(),S=x.filter(v=>k.includes(v)).length;l.allSelected=x.length>0&&S===x.length,l.indeterminate=S>0&&S<x.length},h=()=>{const k=a==null?void 0:a.selectedRowKeys,x=k!==void 0?k:[...i];l.selectedRowKeys=x,p(x)},g=k=>{if((a==null?void 0:a.onChange)===void 0)return;const x=new Set(k),S=t.filter((v,f)=>x.has(va(v,f,n)));a.onChange(k,S)};return(a==null?void 0:a.selectedRowKeys)!==void 0&&(l.selectedRowKeys=a.selectedRowKeys,p(a.selectedRowKeys)),{subscribe(k){return s.add(k),()=>{s.delete(k)}},getState:()=>({...l,selectedRowKeys:[...l.selectedRowKeys]}),updateOptions(k){let x=!1;k.dataSource!==void 0&&k.dataSource!==t&&(t=k.dataSource,d(),a!==void 0&&h(),x=!0),k.rowKey!==void 0&&k.rowKey!==n&&(n=k.rowKey,a!==void 0&&h(),x=!0),k.rowSelection!==void 0&&k.rowSelection!==a&&(a=k.rowSelection,h(),x=!0),k.onSortChange!==void 0&&(o=k.onSortChange),x&&c()},toggleSort(k){let x;l.sortKey!==k?(l.sortKey=k,x="asc"):l.sortOrder==="asc"?x="desc":(l.sortOrder==="desc"&&(l.sortKey=null),x=null),l.sortOrder=x,d(),c(),o==null||o({key:k,order:x})},toggleRow(k){var x;if(a===void 0)return;const S=t.findIndex((_,T)=>va(_,T,n)===k);if(S!==-1){const _=t[S];if(((x=a.getCheckboxDisabled)==null?void 0:x.call(a,_,S))===!0)return}const v=a.selectedRowKeys,f=v!==void 0?[...v]:[...i],y=f.indexOf(k);y===-1?f.push(k):f.splice(y,1),v===void 0&&(i.clear(),f.forEach(_=>i.add(_)),h(),c()),g(f)},toggleAll(){if(a===void 0)return;const k=a.selectedRowKeys,x=k!==void 0?k:[...i],S=m(),v=S.length>0&&S.every(f=>x.includes(f))?x.filter(f=>!S.includes(f)):[...new Set([...x,...S])];k===void 0&&(i.clear(),v.forEach(f=>i.add(f)),h(),c()),g(v)}}}function Cv(e={}){const t=e.value!==void 0,n={value:e.value??e.defaultValue??null};let a=e.items??[],l=e.onChange;const o=new Set,i=()=>{const c={...n};o.forEach(d=>d(c))},s=(c,d)=>{var m;const p=a.length;if(p===0)return-1;const h=c===-1?d===1?0:p-1:c+d;for(let g=0;g<p;g+=1){const k=((h+d*g)%p+p)%p;if(!((m=a[k])!=null&&m.disabled))return k}return-1};return{subscribe(c){return o.add(c),()=>{o.delete(c)}},getState:()=>({...n}),updateOptions(c){let d=!1;c.value!==void 0&&c.value!==n.value&&(n.value=c.value,d=!0),c.items!==void 0&&(a=c.items),c.onChange!==void 0&&(l=c.onChange),d&&i()},activate(c){const d=a.find(m=>m.value===c);!d||d.disabled||n.value!==c&&(t||(n.value=c,i()),l==null||l(c))},moveActive(c){if(a.length===0)return;const d=a.findIndex(p=>p.value===n.value),m=s(d,c);m!==-1&&this.activate(a[m].value)}}}function _v(e={}){const t={visible:!0,closable:e.closable??!1};let n=e.onClose;const a=new Set,l=()=>{const o={...t};a.forEach(i=>i(o))};return{subscribe(o){return a.add(o),()=>{a.delete(o)}},getState:()=>({...t}),updateOptions(o){let i=!1;o.closable!==void 0&&o.closable!==t.closable&&(t.closable=o.closable,i=!0),o.onClose!==void 0&&(n=o.onClose),i&&l()},handleClose(){t.visible&&(t.visible=!1,l(),n==null||n())}}}function M_(e,t,n){const a=String(e).padStart(2,"0"),l=String(t).padStart(2,"0"),o=String(n).padStart(2,"0");return`${a}:${l}:${o}`}function Cs(e){if(typeof e!="string"||!/^\d{2}:\d{2}:\d{2}$/.test(e))return!1;const[t,n,a]=e.split(":").map(Number);return t>=0&&t<=23&&n>=0&&n<=59&&a>=0&&a<=59}function kv(e){if(!Cs(e))return null;const[t,n,a]=e.split(":").map(Number);return{hour:t,minute:n,second:a}}function Il(e,t){const n=Math.max(1,Math.floor(t||1)),a=[];for(let l=0;l<e;l+=n)a.push(l);return a}function Fl(e,t,n){const a=Math.max(1,Math.floor(t||1)),l=Math.round(e/a)*a;return Math.min(n-1,Math.max(0,l))}function wv(e={}){const t=e.value!==void 0,n=Cs(e.value??e.defaultValue)?e.value??e.defaultValue:null,a={value:n,draft:n,open:!1,disabled:e.disabled??!1};let l=e.onChange,o=e.onClear;const i=new Set,s=()=>{const c={...a};i.forEach(d=>d(c))};return{subscribe(c){return i.add(c),()=>{i.delete(c)}},getState:()=>({...a}),updateOptions(c){let d=!1;const m=c.disabled??a.disabled;if(m!==a.disabled&&(a.disabled=m,d=!0,a.disabled&&a.open&&(a.open=!1)),c.value!==void 0){const p=Cs(c.value)?c.value:null;p!==a.value&&(a.value=p,a.draft=p,d=!0)}c.onChange!==void 0&&(l=c.onChange),c.onClear!==void 0&&(o=c.onClear),d&&s()},toggleOpen(){a.disabled||(a.open=!a.open,a.draft=a.value,s())},close(){a.open&&(a.open=!1,a.draft=a.value,s())},selectDraft(c,d,m){a.disabled||c<0||c>23||d<0||d>59||m<0||m>59||(a.draft=M_(c,d,m),s())},confirm(){if(a.disabled||!a.open)return;const c=Cs(a.draft)?a.draft:null;if(a.open=!1,c===null||c===a.value){a.draft=a.value,s();return}t||(a.value=c),a.draft=c,s(),l==null||l(c)},clear(){a.disabled||a.value!==null&&(t||(a.value=null),a.draft=null,s(),l==null||l(""),o==null||o())}}}function Nv(e={}){const t={open:!1,disabled:e.disabled??!1},n=new Set,a=()=>{const l={...t};n.forEach(o=>o(l))};return{subscribe(l){return n.add(l),()=>{n.delete(l)}},getState:()=>({...t}),updateOptions(l){let o=!1;l.disabled!==void 0&&l.disabled!==t.disabled&&(t.disabled=l.disabled,o=!0,t.disabled&&t.open&&(t.open=!1)),o&&a()},show(){t.disabled||t.open||(t.open=!0,a())},hide(){t.open&&(t.open=!1,a())}}}let ym=0;function Sm(){return ym+=1,`upload-${Date.now()}-${ym}`}function L_(e,t){return new Promise((n,a)=>{const l=new XMLHttpRequest,o=new FormData;if(o.append("file",e.raw,e.name),l.open("POST",t.action,!0),l.upload.onprogress=i=>{if(i.lengthComputable){const s=Math.round(i.loaded/i.total*100);t.onProgress(s)}},l.onload=()=>{if(l.status>=200&&l.status<300){let i=l.responseText;try{i=JSON.parse(l.responseText)}catch{}n({response:i,url:void 0})}else a(new Error(`Upload failed with status ${l.status}`))},l.onerror=()=>a(new Error("Network error during upload")),t.signal){if(t.signal.aborted){l.abort(),a(new DOMException("Aborted","AbortError"));return}t.signal.addEventListener("abort",()=>{l.abort(),a(new DOMException("Aborted","AbortError"))})}l.send(o)})}function V_(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1){const a=e[n],l=t[n];if(a.uid!==l.uid||a.name!==l.name||a.size!==l.size||a.status!==l.status||a.percent!==l.percent)return!1}return!0}function Tv(e){const{action:t,maxCount:n,maxSize:a,autoUpload:l=!0,beforeUpload:o,requestUpload:i=L_}=e,s={fileList:e.value?[...e.value]:e.defaultValue?[...e.defaultValue]:[],disabled:e.disabled??!1};let c=e.onChange,d=e.onRemove;const m=new Set,p=new Map,h=new Map,g=()=>{const f={...s,fileList:[...s.fileList]};m.forEach(y=>y(f))},k=()=>{c==null||c(s.fileList.map(f=>({...f})))},x=(f,y)=>{s.fileList=s.fileList.map(_=>_.uid===f?{..._,...y}:_)},S=f=>{const y=s.fileList.find(T=>T.uid===f);s.fileList=s.fileList.filter(T=>T.uid!==f);const _=p.get(f);return _&&(_.abort(),p.delete(f)),h.delete(f),y},v=f=>{const y=new AbortController;p.set(f.uid,y),h.set(f.uid,{lastLoaded:0,lastTime:Date.now()}),i(f,{action:t,onProgress:_=>{const T=Date.now(),N=h.get(f.uid);let A,R;if(N&&f.size>0){const O=_/100*f.size,L=(T-N.lastTime)/1e3;L>0&&(A=(O-N.lastLoaded)/L,A>0&&(R=(f.size-O)/A)),h.set(f.uid,{lastLoaded:O,lastTime:T})}x(f.uid,{percent:_,status:"uploading",speed:A,remainingTime:R}),g(),k()},signal:y.signal}).then(_=>{x(f.uid,{status:"done",percent:100,speed:void 0,remainingTime:void 0,response:_.response,url:_.url}),p.delete(f.uid),h.delete(f.uid),g(),k()}).catch(_=>{_ instanceof DOMException&&_.name==="AbortError"?x(f.uid,{status:"cancelled",speed:void 0,remainingTime:void 0}):x(f.uid,{status:"error",percent:0,speed:void 0,remainingTime:void 0,response:_ instanceof Error?_.message:String(_)}),p.delete(f.uid),h.delete(f.uid),g(),k()})};return{subscribe(f){return m.add(f),()=>{m.delete(f)}},getState:()=>({...s,fileList:[...s.fileList]}),updateOptions(f){let y=!1;const _=f.disabled??s.disabled;_!==s.disabled&&(s.disabled=_,y=!0),f.value!==void 0&&(V_(f.value,s.fileList)||(s.fileList=f.value.map(T=>({...T})),y=!0)),f.onChange!==void 0&&(c=f.onChange),f.onRemove!==void 0&&(d=f.onRemove),y&&g()},async selectFiles(f){if(s.disabled)return;const y=Array.from(f);let _=y;if(n!==void 0){const N=n-s.fileList.length;if(N<=0)return;_=y.slice(0,N)}const T=[];for(const N of _){if(a!==void 0&&N.size>a){const A={uid:Sm(),name:N.name,size:N.size,type:N.type,status:"error",percent:0,raw:N};T.push(A);continue}if(o)try{if(await o(N)===!1)continue}catch{continue}T.push({uid:Sm(),name:N.name,size:N.size,type:N.type,status:l?"uploading":"pending",percent:0,raw:N})}T.length!==0&&(s.fileList=[...s.fileList,...T],g(),k(),T.forEach(N=>{N.status==="uploading"&&v(N)}))},remove(f){const y=S(f);y&&(g(),d==null||d(y),k())},clear(){s.fileList.length!==0&&(p.forEach(f=>f.abort()),p.clear(),h.clear(),s.fileList=[],g(),k())},submit(){s.disabled||(s.fileList.filter(f=>f.status==="pending").forEach(f=>{x(f.uid,{status:"uploading"}),v(f)}),g(),k())},cancel(f){const y=s.fileList.find(T=>T.uid===f);if(!y||y.status!=="uploading")return;const _=p.get(f);_&&_.abort()},move(f,y){const _=s.fileList.findIndex(A=>A.uid===f);if(_===-1)return;const T=_+y;if(T<0||T>=s.fileList.length)return;const N=[...s.fileList];[N[_],N[T]]=[N[T],N[_]],s.fileList=N,g(),k()}}}function jr(e={}){let t=Math.max(0,Math.floor(e.itemCount??0)),n=Math.max(1,e.itemHeight??32),a=Math.max(0,e.viewportHeight??0),l=Math.max(0,Math.floor(e.overscan??5)),o=0;const i={startIndex:0,endIndex:0,offsetY:0,fillerHeight:0,totalHeight:0,scrollTop:0},s=new Set,c=()=>{const d=t*n,m=Math.max(0,d-a),p=Math.min(Math.max(0,o),m),h=a>0?Math.ceil(a/n):0,g=Math.floor(p/n),k=Math.min(Math.max(0,g-l),Math.max(0,t-1)),x=t===0?-1:Math.min(t-1,g+h+l),S=k*n,v=Math.max(0,d-S-(x-k+1)*n);if(i.startIndex===k&&i.endIndex===x&&i.offsetY===S&&i.fillerHeight===v&&i.totalHeight===d&&i.scrollTop===p)return;i.startIndex=k,i.endIndex=x,i.offsetY=S,i.fillerHeight=v,i.totalHeight=d,i.scrollTop=p;const f={...i};s.forEach(y=>y(f))};return c(),{subscribe(d){return s.add(d),()=>{s.delete(d)}},getState:()=>({...i}),updateOptions(d){let m=!1;if(d.itemCount!==void 0){const p=Math.max(0,Math.floor(d.itemCount));p!==t&&(t=p,m=!0)}if(d.itemHeight!==void 0){const p=Math.max(1,d.itemHeight);p!==n&&(n=p,m=!0)}if(d.viewportHeight!==void 0){const p=Math.max(0,d.viewportHeight);p!==a&&(a=p,m=!0)}if(d.overscan!==void 0){const p=Math.max(0,Math.floor(d.overscan));p!==l&&(l=p,m=!0)}m&&c()},scrollTo(d){o=d,c()},scrollToIndex(d,m="auto"){if(t===0)return;const p=Math.min(Math.max(0,Math.floor(d)),t-1)*n,h=p+n;if(m==="auto"&&p>=i.startIndex*n&&h<=(i.endIndex+1)*n)return;const g=Math.max(0,t*n-a);let k;m==="end"?k=h-a:k=p,o=Math.min(Math.max(0,k),g),c()}}}function xm(e,t,n){return n<t?t:Math.min(Math.max(e,t),n)}function _o(e,t,n,a){const l=a.gap??8,o=a.viewportPadding??8,i=a.placement,s=e.top-n.top,c=n.bottom-e.bottom,d=e.left-n.left,m=n.right-e.right,p=t.height+l,h=t.width+l;let g=i;i==="top"&&s<p&&c>s?g="bottom":i==="bottom"&&c<p&&s>c?g="top":i==="left"&&d<h&&m>d?g="right":i==="right"&&m<h&&d>m&&(g="left");let k=0;if(g==="top"||g==="bottom"){const x=e.left+(e.width-t.width)/2,S=n.left+o,v=n.right-o-t.width;k=xm(x,S,Math.max(S,v))-x}else{const x=e.top+(e.height-t.height)/2,S=n.top+o,v=n.bottom-o-t.height;k=xm(x,S,Math.max(S,v))-x}return{placement:g,shift:k}}function ko(){return typeof window>"u"?{top:0,right:0,bottom:0,left:0}:{top:0,left:0,right:window.innerWidth,bottom:window.innerHeight}}const le={close:'<path d="M6 6l12 12M18 6L6 18" />',clear:'<circle cx="12" cy="12" r="10" /><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" />',loading:'<circle cx="12" cy="12" r="9" stroke-width="2.5" stroke-dasharray="40 60" />',check:'<path d="M4 12l5 5L20 7" />',search:'<circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />',plus:'<path d="M12 5v14M5 12h14" />',minus:'<path d="M5 12h14" />',"arrow-up":'<path d="M12 19V5M5 12l7-7 7 7" />',"arrow-down":'<path d="M12 5v14M19 12l-7 7-7-7" />',"arrow-left":'<path d="M19 12H5M12 19l-7-7 7-7" />',"arrow-right":'<path d="M5 12h14M12 5l7 7-7 7" />',calendar:'<rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" />',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />',inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />',info:'<circle cx="12" cy="12" r="9" /><path d="M12 8h.01" /><path d="M12 11v5" />',success:'<circle cx="12" cy="12" r="9" /><path d="M8.5 12.2l2.4 2.4 4.6-5.2" />',warning:'<path d="M10.3 4.1L2.8 17a2 2 0 001.7 3h15a2 2 0 001.7-3L13.7 4.1a2 2 0 00-3.4 0z" /><path d="M12 9v4" /><path d="M12 16.5h.01" />',error:'<circle cx="12" cy="12" r="9" /><path d="M15 9l-6 6M9 9l6 6" />',clock:'<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />'},H_=["disabled"],I_={key:0,class:"xui-button__loading-icon"},F_=["innerHTML"],K_={key:1,class:"xui-button__icon"},q_={class:"xui-button__content"},W=M({__name:"Button",props:{type:{default:"default"},size:{default:"md"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},className:{},style:{}},emits:["click"],setup(e,{expose:t,emit:n}){const a=n,l=Jf({disabled:e.disabled,loading:e.loading,onClick:p=>a("click",p)}),o=q(l.getState()),i=l.subscribe(p=>{o.value=p});Ne(()=>{i()}),ke(()=>{l.updateOptions({disabled:e.disabled,loading:e.loading})});const s=p=>{l.handleClick(p)},c=lt("btn");return t({focus:()=>{var p;(p=c.value)==null||p.focus()},setLoading:p=>{l.updateOptions({loading:p})}}),(p,h)=>(b(),C("button",{ref:"btn",type:"button",class:J([e.className,"xui-button",`xui-button--${e.type}`,`xui-button--${e.size}`,{"is-disabled":o.value.disabled,"is-loading":o.value.loading,"is-block":e.block}]),style:he(e.style),disabled:o.value.disabled||o.value.loading,onClick:s},[o.value.loading?(b(),C("span",I_,[D(p.$slots,"loadingIcon",{},()=>[(b(),C("svg",{class:"xui-button__spinner",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-linecap":"round",innerHTML:r(le).loading},null,8,F_))])])):I("",!0),!o.value.loading&&p.$slots.icon?(b(),C("span",K_,[D(p.$slots,"icon")])):I("",!0),w("span",q_,[D(p.$slots,"default")])],14,H_))}}),P_={key:0,class:"xui-input__prefix"},G_=["id","type","value","placeholder","disabled","readonly","maxlength"],Y_=["innerHTML"],X_={key:2,class:"xui-input__suffix"},rt=M({__name:"Input",props:to({type:{default:"text"},placeholder:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxLength:{},clearable:{type:Boolean,default:!1},className:{},style:{}},{value:{default:""},valueModifiers:{}}),emits:to(["input","change","focus","blur","clear"],["update:value"]),setup(e,{expose:t,emit:n}){const a=n,l=Ad(e,"value"),o=lt("input"),i=cn(),s=iv({value:l.value,disabled:e.disabled,readonly:e.readonly,onInput:v=>{l.value=v,a("input",v)},onChange:v=>a("change",v),onFocus:v=>a("focus",v),onBlur:v=>a("blur",v),onClear:()=>{l.value="",a("clear")}}),c=q(s.getState()),d=s.subscribe(v=>{c.value=v});Ne(()=>{d()}),ke(()=>{s.updateOptions({value:l.value,disabled:e.disabled,readonly:e.readonly})});const m=v=>{const f=v.target;s.handleInput(f.value)},p=v=>{const f=v.target;s.handleChange(f.value)},h=v=>{s.handleFocus(v)},g=v=>{s.handleBlur(v)},k=()=>{s.handleClear()};return t({focus:()=>{var v;(v=o.value)==null||v.focus()},blur:()=>{var v;(v=o.value)==null||v.blur()},clear:k}),(v,f)=>(b(),C("div",{class:J([e.className,"xui-input",{"is-disabled":c.value.disabled,"is-readonly":c.value.readonly,"is-focused":c.value.focused}]),style:he(e.style)},[v.$slots.prefix?(b(),C("span",P_,[D(v.$slots,"prefix")])):I("",!0),w("input",{id:r(i),ref:"input",type:e.type,value:c.value.value,placeholder:e.placeholder,disabled:c.value.disabled,readonly:c.value.readonly,maxlength:e.maxLength,class:"xui-input__inner",onInput:m,onChange:p,onFocus:h,onBlur:g},null,40,G_),e.clearable&&c.value.value&&!c.value.disabled&&!c.value.readonly?(b(),C("span",{key:1,class:"xui-input__clear",onClick:k},[D(v.$slots,"clearIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(le).clear},null,8,Y_))])])):I("",!0),v.$slots.suffix?(b(),C("span",X_,[D(v.$slots,"suffix")])):I("",!0)],6))}}),Q_=["aria-checked","aria-disabled","disabled"],J_={class:"xui-switch__core"},W_={key:0,class:"xui-switch__text-wrap"},ek=["title"],tk=["title"],nk={class:"xui-switch__thumb"},ak=["innerHTML"],lk=["innerHTML"],ok=["innerHTML"],Zt=M({__name:"Switch",props:{value:{type:Boolean,default:void 0},defaultValue:{type:Boolean,default:void 0},size:{default:"md"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},checkedText:{},uncheckedText:{},checkedColor:{},uncheckedColor:{},beforeChange:{},className:{},style:{}},emits:["change","update:value"],setup(e,{expose:t,emit:n}){const a=e,{value:l,defaultValue:o,disabled:i,loading:s}=a,c=n,d=yv({value:l,defaultValue:o,disabled:i,loading:s,beforeChange:S=>{var v;return((v=a.beforeChange)==null?void 0:v.call(a,S))??!0},onChange:S=>{c("update:value",S),c("change",S)}}),m=q(d.getState()),p=d.subscribe(S=>{m.value=S});Ne(()=>{p()}),ke(()=>{d.updateOptions({value:a.value,disabled:a.disabled,loading:a.loading})});const h=()=>{d.toggle()},g=lt("btn");return t({focus:()=>{var S;(S=g.value)==null||S.focus()},toggle:()=>{d.toggle()}}),(S,v)=>(b(),C("button",{ref:"btn",type:"button",role:"switch",class:J([e.className,"xui-switch",`xui-switch--${a.size}`,{"is-checked":m.value.checked,"is-disabled":m.value.disabled,"is-loading":m.value.loading,"xui-switch--has-text":!!(a.checkedText||a.uncheckedText)}]),style:he({...e.style,...a.checkedColor?{"--xui-switch-checked-color":a.checkedColor}:{},...a.uncheckedColor?{"--xui-switch-unchecked-color":a.uncheckedColor}:{}}),"aria-checked":m.value.checked,"aria-disabled":m.value.disabled||m.value.loading,disabled:m.value.disabled||m.value.loading,onClick:h},[w("span",J_,[a.checkedText||a.uncheckedText?(b(),C("span",W_,[a.checkedText?(b(),C("span",{key:0,class:"xui-switch__text xui-switch__text--checked",title:a.checkedText,"aria-hidden":"true"},$(a.checkedText),9,ek)):I("",!0),a.uncheckedText?(b(),C("span",{key:1,class:"xui-switch__text xui-switch__text--unchecked",title:a.uncheckedText,"aria-hidden":"true"},$(a.uncheckedText),9,tk)):I("",!0)])):I("",!0),w("span",nk,[m.value.loading?D(S.$slots,"loadingIcon",{},()=>[(b(),C("svg",{class:"xui-switch__spinner","aria-hidden":"true",viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round",innerHTML:r(le).loading},null,8,ak))],void 0,0):m.value.checked?D(S.$slots,"checkedIcon",{},()=>[(b(),C("svg",{class:"xui-switch__icon xui-switch__icon--checked","aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le).check},null,8,lk))],void 0,1):D(S.$slots,"uncheckedIcon",{},()=>[(b(),C("svg",{class:"xui-switch__icon xui-switch__icon--unchecked","aria-hidden":"true",viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round",innerHTML:r(le).close},null,8,ok))],void 0,2)])])],14,Q_))}}),ik=["checked","disabled",".indeterminate","aria-disabled"],sk={class:"xui-checkbox__box","aria-hidden":"true"},rk=["innerHTML"],ck=["innerHTML"],uk={key:0,class:"xui-checkbox__label"},_s=M({__name:"Checkbox",props:{value:{type:Boolean,default:void 0},defaultValue:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},className:{},style:{}},emits:["change","update:value"],setup(e,{expose:t,emit:n}){const a=e,{value:l,defaultValue:o,disabled:i,indeterminate:s}=a,c=n,d=tv({value:l,defaultValue:o,disabled:i,indeterminate:s,onChange:S=>{c("update:value",S),c("change",S)}}),m=q(d.getState()),p=d.subscribe(S=>{m.value=S});Ne(()=>{p()}),ke(()=>{d.updateOptions({value:a.value,disabled:a.disabled,indeterminate:a.indeterminate})});const h=()=>{d.toggle()},g=lt("input");return t({focus:()=>{var S;(S=g.value)==null||S.focus()},toggle:()=>{d.toggle()}}),(S,v)=>(b(),C("label",{class:J([e.className,"xui-checkbox",{"is-checked":m.value.checked,"is-disabled":m.value.disabled,"is-indeterminate":m.value.indeterminate}]),style:he(e.style)},[w("input",{ref:"input",class:"xui-checkbox__input",type:"checkbox",checked:m.value.checked,disabled:m.value.disabled,".indeterminate":m.value.indeterminate,"aria-disabled":m.value.disabled,onChange:h},null,40,ik),w("span",sk,[m.value.indeterminate?D(S.$slots,"indeterminateIcon",{},()=>[(b(),C("svg",{class:"xui-checkbox__icon","aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round",innerHTML:r(le).minus},null,8,rk))],void 0,0):m.value.checked?D(S.$slots,"checkIcon",{},()=>[(b(),C("svg",{class:"xui-checkbox__icon","aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round",innerHTML:r(le).check},null,8,ck))],void 0,1):I("",!0)]),S.$slots.default?(b(),C("span",uk,[D(S.$slots,"default")])):I("",!0)],6))}}),dk=["innerHTML"],Cn=M({__name:"Tag",props:{type:{default:"default"},size:{default:"md"},closable:{type:Boolean,default:!1},className:{},style:{}},emits:["close"],setup(e,{emit:t}){const n=t,a=_v({closable:e.closable,onClose:()=>n("close")}),l=q(a.getState()),o=a.subscribe(s=>{l.value=s});Ne(()=>{o()}),ke(()=>{a.updateOptions({closable:e.closable})});const i=()=>{a.handleClose()};return(s,c)=>l.value.visible?(b(),C("span",{key:0,class:J([e.className,"xui-tag",`xui-tag--${e.type}`,`xui-tag--${e.size}`]),style:he(e.style)},[D(s.$slots,"default"),l.value.closable?(b(),C("button",{key:0,type:"button",class:"xui-tag__close","aria-label":"close",onClick:i},[D(s.$slots,"closeIcon",{},()=>[(b(),C("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(le).close},null,8,dk))])])):I("",!0)],6)):I("",!0)}}),pk={key:0,class:"xui-alert__icon","aria-hidden":"true"},mk=["innerHTML"],hk={class:"xui-alert__content"},fk={key:0,class:"xui-alert__title"},vk={key:1,class:"xui-alert__description"},gk=["innerHTML"],Nl=M({__name:"Alert",props:{type:{default:"info"},title:{},description:{},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},className:{},style:{}},emits:["close"],setup(e,{emit:t}){const n=t,a=Gf({closable:e.closable,onClose:()=>n("close")}),l=q(a.getState()),o=a.subscribe(s=>{l.value=s});Ne(()=>{o()}),ke(()=>{a.updateOptions({closable:e.closable})});const i=()=>{a.handleClose()};return(s,c)=>l.value.visible?(b(),C("div",{key:0,class:J([e.className,"xui-alert",`xui-alert--${e.type}`]),style:he(e.style),role:"alert"},[e.showIcon?(b(),C("div",pk,[D(s.$slots,"icon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)[e.type]},null,8,mk))])])):I("",!0),w("div",hk,[e.title||s.$slots.title?(b(),C("div",fk,[D(s.$slots,"title",{},()=>[K($(e.title),1)])])):I("",!0),s.$slots.default||e.description?(b(),C("div",vk,[D(s.$slots,"default",{},()=>[K($(e.description),1)])])):I("",!0)]),l.value.closable?(b(),C("button",{key:1,type:"button",class:"xui-alert__close","aria-label":"close",onClick:i},[D(s.$slots,"closeIcon",{},()=>[(b(),C("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(le).close},null,8,gk))])])):I("",!0)],6)):I("",!0)}}),zv=Symbol("xui-radio-group");let Cm=0;function bk(){return Cm+=1,`xui-radio-group-${Cm}`}const yk=["name","value","checked","disabled","aria-disabled"],Sk={key:0,class:"xui-radio__label"},ks=M({__name:"Radio",props:{value:{},disabled:{type:Boolean,default:!1},className:{},style:{}},setup(e){const t=e,n=fv({disabled:t.disabled}),a=q(n.getState()),l=n.subscribe(d=>{a.value=d});Ne(()=>{l()}),ke(()=>{n.updateOptions({disabled:t.disabled})});const o=So(zv,null),i=P(()=>o?o.groupValue.value===t.value:!1),s=P(()=>a.value.disabled||(o?o.groupDisabled.value:!1)),c=d=>{const m=d.target;if(s.value){m.checked=i.value;return}if(!o){m.checked=!1;return}o.select(t.value),m.checked=o.groupValue.value===t.value};return(d,m)=>{var p;return b(),C("label",{class:J([e.className,"xui-radio",{"is-checked":i.value,"is-disabled":s.value}]),style:he(e.style)},[w("input",{class:"xui-radio__input",type:"radio",name:(p=r(o))==null?void 0:p.name,value:t.value,checked:i.value,disabled:s.value,"aria-disabled":s.value,onChange:c},null,40,yk),m[0]||(m[0]=w("span",{class:"xui-radio__dot","aria-hidden":"true"},null,-1)),d.$slots.default?(b(),C("span",Sk,[D(d.$slots,"default")])):I("",!0)],6)}}}),ou=M({__name:"RadioGroup",props:{value:{default:void 0},defaultValue:{default:void 0},disabled:{type:Boolean,default:!1},options:{default:void 0},className:{},style:{}},emits:["change","update:value"],setup(e,{emit:t}){const n=e,a=t,{value:l,defaultValue:o,disabled:i}=n,s=hv({value:l,defaultValue:o,disabled:i,onChange:m=>{a("update:value",m),a("change",m)}}),c=q(s.getState()),d=s.subscribe(m=>{c.value=m});return Ne(()=>{d()}),ke(()=>{s.updateOptions({value:n.value,disabled:n.disabled})}),Rr(zv,{name:bk(),groupValue:P(()=>c.value.value),groupDisabled:P(()=>c.value.disabled),select:m=>{s.select(m)}}),(m,p)=>(b(),C("div",{class:J(["xui-radio-group",e.className]),style:he(e.style),role:"radiogroup"},[n.options&&n.options.length>0?(b(!0),C(ne,{key:0},me(n.options,h=>(b(),ae(ks,{key:h.value,value:h.value,disabled:h.disabled},{default:E(()=>[K($(h.label),1)]),_:2},1032,["value","disabled"]))),128)):D(m.$slots,"default",{},void 0,void 0,1)],6))}}),xk=["aria-valuenow"],Ck={class:"xui-progress__svg",viewBox:"0 0 100 100","aria-hidden":"true"},_k=["r","stroke-width"],kk=["r","stroke-width","stroke-dasharray","stroke-dashoffset"],wk={key:0,class:"xui-progress__text xui-progress__text--circle"},Nk={key:0,class:"xui-progress__text"},Jo=M({__name:"Progress",props:{percent:{default:0},type:{default:"line"},strokeWidth:{default:6},showText:{type:Boolean,default:!0},status:{default:"normal"},className:{},style:{}},setup(e){const t=e,n=mv({percent:t.percent,strokeWidth:t.strokeWidth,status:t.status}),a=q(n.getState()),l=n.subscribe(s=>{a.value=s});Ne(()=>{l()}),ke(()=>{n.updateOptions({percent:t.percent,strokeWidth:t.strokeWidth,status:t.status})});const o=P(()=>`${Math.round(a.value.percent)}%`),i=P(()=>{const s=(100-a.value.strokeWidth)/2,c=2*Math.PI*s;return{radius:s,circumference:c,offset:c*(1-a.value.percent/100)}});return(s,c)=>(b(),C("div",{class:J([e.className,"xui-progress",`xui-progress--${t.type}`,`is-${a.value.status}`]),style:he(e.style),role:"progressbar","aria-valuenow":Math.round(a.value.percent),"aria-valuemin":"0","aria-valuemax":"100"},[t.type==="circle"?(b(),C(ne,{key:0},[(b(),C("svg",Ck,[w("circle",{class:"xui-progress__track",cx:50,cy:50,r:i.value.radius,fill:"none","stroke-width":a.value.strokeWidth},null,8,_k),w("circle",{class:"xui-progress__bar",cx:50,cy:50,r:i.value.radius,fill:"none","stroke-width":a.value.strokeWidth,"stroke-linecap":"round","stroke-dasharray":i.value.circumference,"stroke-dashoffset":i.value.offset,transform:"rotate(-90 50 50)"},null,8,kk)])),t.showText?(b(),C("span",wk,$(o.value),1)):I("",!0)],64)):(b(),C(ne,{key:1},[w("div",{class:"xui-progress__track",style:he({height:`${a.value.strokeWidth}px`})},[w("div",{class:"xui-progress__bar",style:he({width:`${a.value.percent}%`})},null,4)],4),t.showText?(b(),C("span",Nk,$(o.value),1)):I("",!0)],64))],14,xk))}}),Tk=["aria-hidden"],zk=["aria-hidden"],Tl=M({__name:"Badge",props:{count:{default:void 0},max:{default:99},dot:{type:Boolean,default:!1},showZero:{type:Boolean,default:!1},className:{},style:{}},setup(e){const t=e,n=Xf({count:t.count,max:t.max,dot:t.dot,showZero:t.showZero}),a=q(n.getState()),l=n.subscribe(o=>{a.value=o});return Ne(()=>{l()}),ke(()=>{n.updateOptions({count:t.count,max:t.max,dot:t.dot,showZero:t.showZero})}),(o,i)=>o.$slots.default?(b(),C("span",{key:0,class:J(["xui-badge",e.className]),style:he(e.style)},[D(o.$slots,"default"),a.value.visible?(b(),C("sup",{key:0,class:J(["xui-badge__sup",{"is-dot":t.dot}]),"aria-hidden":t.dot||void 0},$(a.value.text),11,Tk)):I("",!0)],6)):a.value.visible?(b(),C("sup",{key:1,class:J(["xui-badge__sup","xui-badge__sup--standalone",{"is-dot":t.dot}]),"aria-hidden":t.dot||void 0},$(a.value.text),11,zk)):I("",!0)}}),Uk=["src","alt"],$k={key:1,class:"xui-avatar__inner"},Ek=["innerHTML"],ga=M({__name:"Avatar",props:{size:{default:"md"},shape:{default:"circle"},src:{default:void 0},alt:{default:void 0},className:{},style:{}},emits:["error"],setup(e,{emit:t}){const n=e,a=t,l=Yf({src:n.src,onError:()=>{a("error")}}),o=q(l.getState()),i=l.subscribe(s=>{o.value=s});return Ne(()=>{i()}),ke(()=>{l.updateOptions({src:n.src})}),(s,c)=>(b(),C("span",{class:J([e.className,"xui-avatar",`xui-avatar--${n.size}`,`xui-avatar--${n.shape}`]),style:he(e.style)},[n.src&&!o.value.failed?(b(),C("img",{key:0,class:"xui-avatar__img",src:n.src,alt:n.alt??"",onError:c[0]||(c[0]=d=>r(l).handleError())},null,40,Uk)):s.$slots.default?(b(),C("span",$k,[D(s.$slots,"default")])):D(s.$slots,"icon",{},()=>[(b(),C("svg",{class:"xui-avatar__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le).user},null,8,Ek))],void 0,2)],6))}}),Ak={class:"xui-empty__image","aria-hidden":"true"},Rk=["innerHTML"],Bk={key:0,class:"xui-empty__description"},Ok={key:1,class:"xui-empty__footer"},iu=M({__name:"Empty",props:{description:{default:void 0},className:{},style:{}},setup(e){const t=e,n=av({description:t.description}),a=q(n.getState()),l=n.subscribe(o=>{a.value=o});return Ne(()=>{l()}),ke(()=>{n.updateOptions({description:t.description})}),(o,i)=>(b(),C("div",{class:J(["xui-empty",e.className]),style:he(e.style)},[w("div",Ak,[D(o.$slots,"image",{},()=>[(b(),C("svg",{class:"xui-empty__svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le).inbox},null,8,Rk))])]),a.value.description?(b(),C("div",Bk,$(a.value.description),1)):I("",!0),o.$slots.default?(b(),C("div",Ok,[D(o.$slots,"default")])):I("",!0)],6))}});function Bn(){const e=q(Lf()),t=Hf(n=>{e.value=n});return vS()?gS(t):t(),e}const Zk=["id","aria-expanded","aria-controls","aria-activedescendant","aria-disabled","tabindex"],jk={key:0,class:"xui-select__tags"},Dk={class:"xui-select__tag-label"},Mk=["onClick"],Lk=["innerHTML"],Vk={key:0,class:"xui-select__placeholder"},Hk={key:1,class:"xui-select__value"},Ik={key:2,class:"xui-select__placeholder"},Fk=["innerHTML"],Kk={key:4,class:"xui-select__arrow","aria-hidden":"true"},qk=["innerHTML"],Pk=["id","aria-labelledby","aria-multiselectable"],Gk={key:0,role:"presentation",class:"xui-select__search-item"},Yk=["placeholder","value","aria-label"],Xk={class:"xui-select__group-title"},Qk=["id","aria-selected","aria-disabled","onClick"],Jk=["id","aria-selected","aria-disabled","onClick"],Wk={key:2,class:"xui-select__empty",role:"presentation"},ew=30,Pn=M({__name:"Select",props:{value:{default:void 0},defaultValue:{default:void 0},options:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},maxHeight:{default:264},className:{default:void 0},style:{default:void 0}},emits:["change","clear","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=Bn(),i=lt("root"),s=lt("trigger"),c=lt("dropdown"),d=cn(),m=cn(),{value:p,defaultValue:h,options:g,disabled:k,clearable:x,multiple:S,searchable:v}=a,f=vv({value:p,defaultValue:h,options:g,disabled:k,clearable:x,multiple:S,searchable:v,onChange:ue=>{l("update:value",ue),l("change",ue)},onClear:()=>l("clear")}),y=q(f.getState()),_=f.subscribe(ue=>{y.value=ue}),T=jr({itemCount:0,itemHeight:ew,viewportHeight:0}),N=q(T.getState()),A=T.subscribe(ue=>{N.value=ue}),R=ue=>{y.value.open&&i.value&&!i.value.contains(ue.target)&&f.close()};Vt(()=>{document.addEventListener("mousedown",R)}),Ne(()=>{_(),A(),Q==null||Q(),document.removeEventListener("mousedown",R)}),ke(()=>{f.updateOptions({value:a.value,options:a.options,disabled:a.disabled,clearable:a.clearable,multiple:a.multiple,searchable:a.searchable})});const O=P(()=>y.value.filteredOptions),L=P(()=>y.value.groupedOptions),te=P(()=>L.value.length>0),Z=P(()=>a.virtual&&!te.value),F=P(()=>{const ue=O.value;return Z.value?ue.slice(N.value.startIndex,N.value.endIndex+1):ue}),H=P(()=>Xs(a.options??[])),ce=P(()=>H.value.find(ue=>ue.value===y.value.value)),V=P(()=>a.multiple?(Array.isArray(y.value.value)?y.value.value:[]).map(De=>{const xe=H.value.find(Ke=>Ke.value===De);return{value:De,label:(xe==null?void 0:xe.label)??De}}):[]),se=P(()=>a.multiple?V.value.length>0:y.value.value!==null),X=ue=>a.multiple?Array.isArray(y.value.value)&&y.value.value.includes(ue):y.value.value===ue,j=P(()=>[a.className,{"is-disabled":y.value.disabled,"is-open":y.value.open,"is-multiple":a.multiple,"is-virtual":Z.value,"is-drop-up":G.value}]),G=q(!1);let Q=null;function de(){const ue=i.value,De=c.value;if(!ue||!De)return;const xe=De.getBoundingClientRect();if(xe.width===0&&xe.height===0)return;const{placement:Ke}=_o(ue.getBoundingClientRect(),xe,ko(),{placement:"bottom",gap:4,viewportPadding:4});G.value=Ke==="top"}Ge(()=>y.value.open,ue=>{ue?(G.value=!1,Nt(de),Q==null||Q(),Q=Co(de)):(Q==null||Q(),Q=null,G.value=!1)});const Ie=P(()=>a.style??void 0),Fe=P(()=>{const ue={maxHeight:`${a.maxHeight}px`};return Z.value&&(ue.height=`${a.maxHeight}px`),ue});ke(()=>{Z.value&&T.updateOptions({itemCount:O.value.length,viewportHeight:a.maxHeight})}),Ge(()=>y.value.searchQuery,async()=>{Z.value&&(T.scrollTo(0),await Nt(),c.value&&(c.value.scrollTop=0))}),ke(()=>{const{open:ue,activeIndex:De}=y.value;!ue||De===-1||Nt(()=>{var Ke;const xe=document.getElementById(`${m}-option-${De}`);(Ke=xe==null?void 0:xe.scrollIntoView)==null||Ke.call(xe,{block:"nearest"})})});const pt=ue=>{T.scrollTo(ue.target.scrollTop)},Ut=ue=>{f.setSearch(ue.target.value)};Ge(()=>y.value.open,async ue=>{var De,xe;!ue||!a.searchable||(await Nt(),(xe=(De=c.value)==null?void 0:De.querySelector(".xui-select__search"))==null||xe.focus())});const ra=ue=>{switch(ue.key){case"Enter":case" ":ue.preventDefault(),y.value.open?f.confirmHighlight():f.toggleOpen();break;case"Escape":y.value.open&&(ue.preventDefault(),f.close());break;case"ArrowDown":ue.preventDefault(),y.value.open?f.moveHighlight(1):f.toggleOpen();break;case"ArrowUp":ue.preventDefault(),y.value.open?f.moveHighlight(-1):f.toggleOpen();break}},gn=ue=>{switch(ue.key){case"Enter":ue.preventDefault(),f.confirmHighlight();break;case"ArrowDown":ue.preventDefault(),f.moveHighlight(1);break;case"ArrowUp":ue.preventDefault(),f.moveHighlight(-1);break;case"Escape":ue.preventDefault(),f.close();break}};return t({focus:()=>{var ue;(ue=s.value)==null||ue.focus()},toggleOpen:()=>{f.toggleOpen()},close:()=>{f.close()}}),(ue,De)=>(b(),C("div",{ref:"root",class:J(["xui-select",j.value]),style:he(Ie.value)},[w("div",{ref:"trigger",id:r(d),class:"xui-select__trigger",role:"combobox","aria-expanded":y.value.open,"aria-haspopup":"listbox","aria-controls":y.value.open?r(m):void 0,"aria-activedescendant":y.value.open&&y.value.activeIndex!==-1?`${r(m)}-option-${y.value.activeIndex}`:void 0,"aria-disabled":y.value.disabled||void 0,tabindex:y.value.disabled?-1:0,onClick:De[1]||(De[1]=xe=>r(f).toggleOpen()),onKeydown:ra},[a.multiple?(b(),C("span",jk,[(b(!0),C(ne,null,me(V.value,xe=>(b(),C("span",{key:xe.value,class:"xui-select__tag"},[w("span",Dk,$(xe.label),1),w("span",{class:"xui-select__tag-close",role:"button","aria-label":"remove",onClick:St(Ke=>r(f).select(xe.value),["stop"])},[D(ue.$slots,"clearIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).clear},null,8,Lk))])],8,Mk)]))),128)),V.value.length===0?(b(),C("span",Vk,$(a.placeholder??r(o).select.triggerPlaceholder),1)):I("",!0)])):ce.value?(b(),C("span",Hk,$(ce.value.label),1)):(b(),C("span",Ik,$(a.placeholder??r(o).select.triggerPlaceholder),1)),a.clearable&&se.value&&!y.value.disabled?(b(),C("span",{key:3,class:"xui-select__clear",role:"button","aria-label":"clear",onClick:De[0]||(De[0]=St(xe=>r(f).clear(),["stop"]))},[D(ue.$slots,"clearIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).clear},null,8,Fk))])])):(b(),C("span",Kk,[D(ue.$slots,"suffixIcon",{},()=>[(b(),C("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)["arrow-down"]},null,8,qk))])]))],40,Zk),y.value.open?(b(),C("ul",{key:0,ref:"dropdown",id:r(m),class:"xui-select__dropdown",role:"listbox","aria-labelledby":r(d),"aria-multiselectable":a.multiple||void 0,style:he(Fe.value),onScroll:pt},[a.searchable?(b(),C("li",Gk,[w("input",{class:"xui-select__search",type:"text",role:"searchbox",placeholder:r(o).select.searchPlaceholder,value:y.value.searchQuery,"aria-label":r(o).select.searchAriaLabel,onInput:Ut,onKeydown:gn,onClick:De[2]||(De[2]=St(()=>{},["stop"]))},null,40,Yk)])):I("",!0),O.value.length>0?(b(),C(ne,{key:1},[Z.value&&N.value.offsetY>0?(b(),C("li",{key:0,class:"xui-select__spacer",style:he({height:`${N.value.offsetY}px`}),"aria-hidden":"true"},null,4)):I("",!0),te.value?(b(!0),C(ne,{key:1},me(L.value,xe=>(b(),C("li",{key:xe.label,class:"xui-select__group",role:"presentation"},[w("div",Xk,$(xe.label),1),(b(!0),C(ne,null,me(xe.options,Ke=>(b(),C("div",{key:Ke.value,id:`${r(m)}-option-${O.value.findIndex(Ro=>Ro.value===Ke.value)}`,class:J(["xui-select__option",{"is-selected":X(Ke.value),"is-active":O.value.findIndex(Ro=>Ro.value===Ke.value)===y.value.activeIndex,"is-disabled":Ke.disabled}]),role:"option","aria-selected":X(Ke.value),"aria-disabled":Ke.disabled||void 0,onClick:Ro=>r(f).select(Ke.value)},$(Ke.label),11,Qk))),128))]))),128)):(b(!0),C(ne,{key:2},me(F.value,(xe,Ke)=>(b(),C("li",{id:`${r(m)}-option-${Z.value?N.value.startIndex+Ke:Ke}`,key:xe.value,class:J(["xui-select__option",{"is-selected":X(xe.value),"is-active":(Z.value?N.value.startIndex+Ke:Ke)===y.value.activeIndex,"is-disabled":xe.disabled}]),role:"option","aria-selected":X(xe.value),"aria-disabled":xe.disabled||void 0,onClick:Ro=>r(f).select(xe.value)},$(xe.label),11,Jk))),128)),Z.value&&N.value.fillerHeight>0?(b(),C("li",{key:3,class:"xui-select__spacer",style:he({height:`${N.value.fillerHeight}px`}),"aria-hidden":"true"},null,4)):I("",!0)],64)):(b(),C("li",Wk,"无匹配结果"))],44,Pk)):I("",!0)],6))}}),tw=["id","aria-selected","aria-disabled","aria-controls","tabindex","data-value","onClick"],nw=["id","aria-labelledby"],Uv=M({__name:"Tabs",props:{value:{default:void 0},defaultValue:{default:void 0},items:{},className:{},style:{}},emits:["change","update:value"],setup(e,{emit:t}){const n=e,a=t,l=lt("root"),o=cn(),{value:i,defaultValue:s,items:c}=n,d=Cv({value:i,defaultValue:s,items:c,onChange:S=>{a("update:value",S),a("change",S)}}),m=q(d.getState()),p=d.subscribe(S=>{m.value=S});Ne(()=>{p()}),ke(()=>{d.updateOptions({value:n.value,items:n.items})});const h=P(()=>{var S;return(S=n.items)==null?void 0:S.find(v=>v.value===m.value.value)}),g=S=>{d.activate(S)},k=S=>{var v;return(v=l.value)==null?void 0:v.querySelector(`[data-value="${S.replace(/"/g,'\\"')}"]`)},x=S=>{S.key!=="ArrowRight"&&S.key!=="ArrowLeft"||(S.preventDefault(),d.moveActive(S.key==="ArrowRight"?1:-1),Nt(()=>{var f;const v=m.value.value;v!==null&&((f=k(v))==null||f.focus())}))};return(S,v)=>(b(),C("div",{ref:"root",class:J(["xui-tabs",e.className]),style:he(e.style)},[w("div",{class:"xui-tabs__list",role:"tablist",onKeydown:x},[(b(!0),C(ne,null,me(n.items,f=>(b(),C("button",{id:`${r(o)}-tab-${f.value}`,key:f.value,type:"button",class:J(["xui-tabs__tab",{"is-active":f.value===m.value.value,"is-disabled":f.disabled}]),role:"tab","aria-selected":f.value===m.value.value,"aria-disabled":f.disabled||void 0,"aria-controls":`${r(o)}-panel-${f.value}`,tabindex:f.value===m.value.value?0:-1,"data-value":f.value,onClick:y=>g(f.value)},$(f.label),11,tw))),128))],32),h.value?(b(),C("div",{key:0,id:`${r(o)}-panel-${h.value.value}`,class:"xui-tabs__panel",role:"tabpanel","aria-labelledby":`${r(o)}-tab-${h.value.value}`},[D(S.$slots,"default",{item:h.value},()=>[K($(h.value.label),1)])],8,nw)):I("",!0)],6))}}),aw={class:"xui-message","aria-live":"polite"},lw=["innerHTML"],ow={class:"xui-message__content"},iw=["onClick"],sw=["innerHTML"],rw=M({__name:"MessageHost",props:{manager:{}},setup(e){const t=e,n=q(t.manager.getState()),a=t.manager.subscribe(o=>{n.value=o});Ne(()=>{a()});const l={info:le.info,success:le.success,warning:le.warning,error:le.error};return(o,i)=>(b(),C("div",aw,[(b(!0),C(ne,null,me(n.value.items,s=>(b(),C("div",{key:s.id,class:J(["xui-message__item",`xui-message__item--${s.type}`])},[(b(),C("svg",{class:"xui-message__icon",viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:s.icon??l[s.type]},null,8,lw)),w("span",ow,$(s.content),1),s.closable?(b(),C("button",{key:0,type:"button",class:"xui-message__close","aria-label":"close",onClick:c=>t.manager.close(s.id)},[(b(),C("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).close},null,8,sw))],8,iw)):I("",!0)],2))),128))]))}});let Qi=null,_m=!1;function $v(){if(Qi===null&&(Qi=rv()),!_m&&typeof document<"u"){const e=document.createElement("div");document.body.appendChild(e),bS(rw,{manager:Qi}).mount(e),_m=!0}return Qi}function Bo(e){return $v().open(e)}const Hn={info:(e,t)=>Bo({...t,type:"info",content:e}),success:(e,t)=>Bo({...t,type:"success",content:e}),warning:(e,t)=>Bo({...t,type:"warning",content:e}),error:(e,t)=>Bo({...t,type:"error",content:e}),open:Bo,closeAll:()=>$v().closeAll()},cw=["aria-describedby"],uw=["id"],In=M({__name:"Tooltip",props:{content:{default:void 0},placement:{default:"top"},trigger:{default:"hover"},disabled:{type:Boolean,default:!1},className:{},style:{}},setup(e,{expose:t}){const n=e,a=cn(),{disabled:l}=n,o=Nv({disabled:l}),i=q(o.getState()),s=o.subscribe(_=>{i.value=_});Ne(()=>{s(),h==null||h()}),ke(()=>{o.updateOptions({disabled:n.disabled})});const c=q(null),d=q(null),m=q(n.placement),p=q(0);let h=null;function g(){const _=c.value,T=d.value;if(!_||!T)return;const N=T.getBoundingClientRect();if(N.width===0&&N.height===0)return;const{placement:A,shift:R}=_o(_.getBoundingClientRect(),N,ko(),{placement:n.placement,gap:8});m.value=A,p.value=R}Ge(()=>i.value.open,_=>{_?(m.value=n.placement,p.value=0,Nt(g),h==null||h(),h=Co(g)):(h==null||h(),h=null)}),Ge(()=>n.placement,()=>{i.value.open&&(m.value=n.placement,p.value=0,Nt(g))});const k=()=>{n.trigger==="hover"&&o.show()},x=()=>{n.trigger==="hover"&&o.hide()},S=()=>{n.trigger==="focus"&&o.show()},v=()=>{n.trigger==="focus"&&o.hide()};return t({show:()=>{o.show()},hide:()=>{o.hide()}}),(_,T)=>(b(),C("span",{class:J(["xui-tooltip",e.className]),style:he(e.style),onMouseenter:k,onMouseleave:x,onFocusin:S,onFocusout:v},[w("span",{ref_key:"triggerRef",ref:c,class:"xui-tooltip__trigger","aria-describedby":i.value.open?r(a):void 0},[D(_.$slots,"default"),i.value.open?(b(),C("span",{key:0,ref_key:"popperRef",ref:d,id:r(a),class:J(["xui-tooltip__popper",`is-${m.value}`]),style:he(m.value==="top"||m.value==="bottom"?{marginLeft:`${p.value}px`}:{marginTop:`${p.value}px`}),role:"tooltip"},[D(_.$slots,"content",{},()=>[K($(n.content),1)]),T[0]||(T[0]=w("span",{class:"xui-tooltip__arrow","aria-hidden":"true"},null,-1))],14,uw)):I("",!0)],8,cw)],38))}}),dw=["aria-label"],pw=["disabled","aria-label"],mw=["innerHTML"],hw=["aria-current","disabled","onClick"],fw={key:1,class:"xui-pagination__ellipsis","aria-hidden":"true"},vw=["disabled","aria-label"],gw=["innerHTML"],su=M({__name:"Pagination",props:{value:{default:void 0},defaultValue:{default:void 0},total:{default:void 0},pageSize:{default:10},disabled:{type:Boolean,default:!1},className:{},style:{}},emits:["change","update:value"],setup(e,{emit:t}){const n=e,a=t,{value:l,defaultValue:o,total:i,pageSize:s,disabled:c}=n,d=uv({value:l,defaultValue:o,total:i,pageSize:s,disabled:c,onChange:x=>{a("update:value",x),a("change",x)}}),m=q(d.getState()),p=d.subscribe(x=>{m.value=x});Ne(()=>{p()}),ke(()=>{d.updateOptions({value:n.value,total:n.total,pageSize:n.pageSize,disabled:n.disabled})});const h=P(()=>dv(m.value.page,m.value.pageCount)),g=Bn(),k=x=>typeof x=="number";return(x,S)=>(b(),C("nav",{class:J(["xui-pagination",[e.className,{"is-disabled":m.value.disabled}]]),style:he(e.style),role:"navigation","aria-label":r(g).pagination.nav},[w("button",{type:"button",class:J(["xui-pagination__nav",{"is-prev":!0}]),disabled:m.value.disabled||m.value.page<=1,"aria-label":r(g).pagination.prev,onClick:S[0]||(S[0]=v=>r(d).prev())},[D(x.$slots,"prevIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le)["arrow-left"]},null,8,mw))])],8,pw),(b(!0),C(ne,null,me(h.value,(v,f)=>(b(),C(ne,{key:`${v}-${f}`},[k(v)?(b(),C("button",{key:0,type:"button",class:J(["xui-pagination__page",{"is-active":v===m.value.page}]),"aria-current":v===m.value.page?"page":void 0,disabled:m.value.disabled,onClick:y=>r(d).goTo(v)},$(v),11,hw)):(b(),C("span",fw,"···"))],64))),128)),w("button",{type:"button",class:"xui-pagination__nav",disabled:m.value.disabled||m.value.page>=m.value.pageCount,"aria-label":r(g).pagination.next,onClick:S[1]||(S[1]=v=>r(d).next())},[D(x.$slots,"nextIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le)["arrow-right"]},null,8,gw))])],8,vw)],14,dw))}}),bw=["id","aria-expanded","aria-controls","aria-disabled","tabindex"],yw={key:0,class:"xui-date-picker__value"},Sw={key:1,class:"xui-date-picker__placeholder"},xw=["innerHTML"],Cw={key:3,class:"xui-date-picker__icon","aria-hidden":"true"},_w=["innerHTML"],kw=["id","aria-label"],ww={class:"xui-date-picker__header"},Nw=["aria-label"],Tw=["innerHTML"],zw={class:"xui-date-picker__title"},Uw=["aria-label"],$w=["innerHTML"],Ew={class:"xui-date-picker__weekdays","aria-hidden":"true"},Aw={class:"xui-date-picker__grid"},Rw=["aria-label","onClick"],Bw={key:0,class:"xui-date-picker__shortcuts"},Ow=["onClick"],Zw={class:"xui-date-picker__footer"},jw=["disabled"],Qs=M({__name:"DatePicker",props:{type:{default:"date"},value:{default:void 0},defaultValue:{default:void 0},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},shortcuts:{default:void 0},className:{},style:{}},emits:["change","clear","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=lt("root"),i=lt("trigger"),s=cn(),c=cn(),{value:d,defaultValue:m,disabled:p,type:h}=a,g=Df({type:h,value:d,defaultValue:m,disabled:p,shortcuts:a.shortcuts,onChange:Z=>{l("update:value",Z),l("change",Z)},onClear:()=>l("clear")}),k=q(g.getState()),x=g.subscribe(Z=>{k.value=Z}),S=Z=>{k.value.open&&o.value&&!o.value.contains(Z.target)&&g.close()};Vt(()=>{document.addEventListener("mousedown",S)}),Ne(()=>{x(),document.removeEventListener("mousedown",S)}),ke(()=>{g.updateOptions({value:a.value,disabled:a.disabled})});const v=P(()=>jf(k.value.viewYear,k.value.viewMonth)),f=Bn(),y=P(()=>f.value.datePicker.titleFormat(k.value.viewYear,k.value.viewMonth)),_=P(()=>{const Z=k.value.value;return Z?Array.isArray(Z)?`${Z[0]} ~ ${Z[1]}`:Z:null}),T=P(()=>{const Z=k.value.draft;return Z&&Array.isArray(Z)?Z:null}),N=Z=>{switch(Z.key){case"Enter":case" ":Z.preventDefault(),g.toggleOpen();break;case"Escape":k.value.open&&(Z.preventDefault(),g.close());break}},A=Z=>a.type==="date"?Z===k.value.draft:T.value?Z===T.value[0]||Z===T.value[1]:k.value.rangeStart===Z,R=Z=>a.type!=="range"||!T.value?!1:no(Z,T.value[0])>=0&&no(Z,T.value[1])<=0;return t({focus:()=>{var Z;(Z=i.value)==null||Z.focus()},toggleOpen:()=>{g.toggleOpen()},close:()=>{g.close()}}),(Z,F)=>(b(),C("div",{ref:"root",class:J(["xui-date-picker",[e.className,{"is-disabled":k.value.disabled,"is-open":k.value.open,"is-range":a.type==="range"}]]),style:he(e.style)},[w("div",{ref:"trigger",id:r(s),class:"xui-date-picker__trigger",role:"combobox","aria-expanded":k.value.open,"aria-haspopup":"dialog","aria-controls":k.value.open?r(c):void 0,"aria-disabled":k.value.disabled||void 0,tabindex:k.value.disabled?-1:0,onClick:F[1]||(F[1]=H=>r(g).toggleOpen()),onKeydown:N},[_.value?(b(),C("span",yw,$(_.value),1)):(b(),C("span",Sw,$(a.placeholder??r(f).datePicker.placeholder),1)),a.clearable&&k.value.value&&!k.value.disabled?(b(),C("span",{key:2,class:"xui-date-picker__clear",role:"button","aria-label":"clear",onClick:F[0]||(F[0]=St(H=>r(g).clear(),["stop"]))},[D(Z.$slots,"clearIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).clear},null,8,xw))])])):(b(),C("span",Cw,[D(Z.$slots,"calendarIcon",{},()=>[(b(),C("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le).calendar},null,8,_w))])]))],40,bw),k.value.open?(b(),C("div",{key:0,id:r(c),class:"xui-date-picker__panel",role:"dialog","aria-label":r(f).datePicker.panel},[w("div",ww,[w("button",{type:"button",class:"xui-date-picker__nav","aria-label":r(f).datePicker.prevMonth,onClick:F[2]||(F[2]=H=>r(g).prevMonth())},[D(Z.$slots,"prevIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le)["arrow-left"]},null,8,Tw))])],8,Nw),w("span",zw,$(y.value),1),w("button",{type:"button",class:"xui-date-picker__nav","aria-label":r(f).datePicker.nextMonth,onClick:F[3]||(F[3]=H=>r(g).nextMonth())},[D(Z.$slots,"nextIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le)["arrow-right"]},null,8,$w))])],8,Uw)]),w("div",Ew,[(b(!0),C(ne,null,me(r(f).datePicker.weekdays,H=>(b(),C("span",{key:H,class:"xui-date-picker__weekday"},$(H),1))),128))]),w("div",Aw,[(b(!0),C(ne,null,me(v.value,H=>(b(),C("button",{key:H.date,type:"button",class:J(["xui-date-picker__day",{"is-outside":!H.inMonth,"is-today":H.isToday,"is-selected":A(H.date),"is-in-range":R(H.date),"is-range-start":a.type==="range"&&T.value&&H.date===T.value[0],"is-range-end":a.type==="range"&&T.value&&H.date===T.value[1]}]),"aria-label":H.date,onClick:ce=>r(g).select(H.date)},$(H.day),11,Rw))),128))]),a.shortcuts&&a.shortcuts.length>0?(b(),C("div",Bw,[(b(!0),C(ne,null,me(a.shortcuts,H=>(b(),C("button",{key:H.label,type:"button",class:"xui-date-picker__shortcut",onClick:ce=>r(g).selectShortcut(H.value)},$(H.label),9,Ow))),128))])):I("",!0),w("div",Zw,[w("button",{type:"button",class:"xui-date-picker__footer-btn xui-date-picker__footer-btn--cancel",onClick:F[4]||(F[4]=H=>r(g).close())},$(r(f).datePicker.cancel),1),w("button",{type:"button",class:"xui-date-picker__footer-btn xui-date-picker__footer-btn--confirm",disabled:!k.value.draft,onClick:F[5]||(F[5]=H=>r(g).confirm())},$(r(f).datePicker.confirm),9,jw)])],8,kw)):I("",!0)],6))}}),Dw={class:"xui-table__table"},Mw={key:0,class:"xui-table__th",style:{width:"42px"}},Lw=["checked","indeterminate","aria-label"],Vw=["aria-sort"],Hw=["onClick"],Iw={class:"xui-table__sort-icons","aria-hidden":"true"},Fw=["innerHTML"],Kw=["innerHTML"],qw={key:1},Pw={key:0,class:"xui-table__spacer","aria-hidden":"true"},Gw=["colspan"],Yw=["onClick"],Xw=["checked","disabled","aria-label","onChange"],Qw={key:1,class:"xui-table__spacer","aria-hidden":"true"},Jw=["colspan"],Ww={key:2},eN=["colspan"],lo=M({__name:"Table",props:{columns:{default:void 0},dataSource:{default:void 0},rowKey:{default:void 0},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},height:{default:void 0},rowHeight:{default:40},rowSelection:{default:void 0},className:{default:void 0},style:{default:void 0}},emits:["sortChange","rowClick"],setup(e,{emit:t}){const n=e,a=t,l=Bn(),o=yS(),i=P(()=>o.onRowClick!==void 0),{dataSource:s}=n,c=xv({dataSource:s,rowKey:n.rowKey,rowSelection:n.rowSelection,onSortChange:j=>a("sortChange",j)}),d=q(c.getState()),m=c.subscribe(j=>{d.value=j});Ne(()=>{m()}),ke(()=>{c.updateOptions({dataSource:n.dataSource,rowKey:n.rowKey,rowSelection:n.rowSelection})});const p=jr({itemCount:0,itemHeight:n.rowHeight??40}),h=q(p.getState()),g=p.subscribe(j=>{h.value=j});Ne(()=>{g()});const k=q(null);let x;Vt(()=>{if(!n.virtual)return;const j=k.value;j&&(p.updateOptions({viewportHeight:j.clientHeight}),!(typeof ResizeObserver>"u")&&(x=new ResizeObserver(()=>{p.updateOptions({viewportHeight:j.clientHeight})}),x.observe(j)))}),Ne(()=>{x==null||x.disconnect()});const S=j=>{n.virtual&&p.scrollTo(j.target.scrollTop)};ke(()=>{n.virtual&&p.updateOptions({itemCount:d.value.sortedData.length,itemHeight:n.rowHeight??40})});const v=P(()=>{const j=d.value.sortedData;return n.virtual?h.value.endIndex<h.value.startIndex?[]:j.slice(h.value.startIndex,h.value.endIndex+1):j}),f=P(()=>[n.className,{"is-striped":n.stripe,"is-bordered":n.border,"is-virtual":n.virtual}]),y=P(()=>{const j={...n.style};return n.virtual&&(n.height!==void 0&&(j.height=typeof n.height=="number"?`${n.height}px`:n.height),j["--xui-table-row-height"]=`${n.rowHeight??40}px`),Object.keys(j).length>0?j:void 0}),_=P(()=>n.rowSelection!==void 0),T=P(()=>{var j;return(((j=n.columns)==null?void 0:j.length)??0)+(_.value?1:0)}),N=(j,G)=>{const Q=va(j,G,n.rowKey);return d.value.selectedRowKeys.includes(Q)},A=(j,G)=>{var Q,de;return((de=(Q=n.rowSelection)==null?void 0:Q.getCheckboxDisabled)==null?void 0:de.call(Q,j,G))??!1},R=(j,G,Q)=>{var de;c.toggleRow(va(j,G,n.rowKey)),((de=n.rowSelection)==null?void 0:de.selectedRowKeys)!==void 0&&(Q.target.checked=N(j,G))},O=j=>{var G;c.toggleAll(),((G=n.rowSelection)==null?void 0:G.selectedRowKeys)!==void 0&&(j.target.checked=d.value.allSelected)},L=(j,G)=>{a("rowClick",j,G)},te=(j,G)=>({"is-even":G%2===1,"is-selected":_.value&&N(j,G),"is-clickable":i.value}),Z=j=>{j.sortable&&c.toggleSort(j.key)},F=j=>{if(d.value.sortKey===j.key)return d.value.sortOrder==="asc"?"ascending":"descending"},H=j=>{const G={};return j.width!==void 0&&(G.width=typeof j.width=="number"?`${j.width}px`:j.width),j.align!==void 0&&(G.textAlign=j.align),Object.keys(G).length>0?G:void 0},ce=(j,G,Q)=>j.render?j.render(G,Q):Sv(G[j.key]),V=(j,G)=>({"is-active":d.value.sortKey===j.key&&d.value.sortOrder===(G==="up"?"asc":"desc")}),se=le["arrow-up"],X=le["arrow-down"];return(j,G)=>(b(),C("div",{ref_key:"scrollRef",ref:k,class:J(["xui-table",f.value]),style:he(y.value),onScroll:S},[w("table",Dw,[w("thead",null,[w("tr",null,[_.value?(b(),C("th",Mw,[w("input",{type:"checkbox",class:"xui-table__check",checked:d.value.allSelected,indeterminate:d.value.indeterminate,"aria-label":r(l).table.selectAll,onChange:G[0]||(G[0]=Q=>O(Q))},null,40,Lw)])):I("",!0),(b(!0),C(ne,null,me(n.columns,Q=>(b(),C("th",{key:Q.key,class:"xui-table__th",style:he(H(Q)),"aria-sort":F(Q),scope:"col"},[Q.sortable?(b(),C("button",{key:0,type:"button",class:"xui-table__sort",onClick:de=>Z(Q)},[K($(Q.title)+" ",1),w("span",Iw,[D(j.$slots,"sortIcon",{order:"asc"},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",class:J(V(Q,"up")),innerHTML:r(se)},null,10,Fw))]),D(j.$slots,"sortIcon",{order:"desc"},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",class:J(V(Q,"down")),innerHTML:r(X)},null,10,Kw))])])],8,Hw)):(b(),C("span",qw,$(Q.title),1))],12,Vw))),128))])]),w("tbody",null,[n.virtual&&h.value.offsetY>0?(b(),C("tr",Pw,[w("td",{style:he({height:`${h.value.offsetY}px`}),colspan:T.value},null,12,Gw)])):I("",!0),(b(!0),C(ne,null,me(v.value,(Q,de)=>(b(),C("tr",{key:r(va)(Q,n.virtual?h.value.startIndex+de:de,n.rowKey),class:J(te(Q,n.virtual?h.value.startIndex+de:de)),onClick:Ie=>L(Q,n.virtual?h.value.startIndex+de:de)},[_.value?(b(),C("td",{key:0,class:"xui-table__td",onClick:G[1]||(G[1]=St(()=>{},["stop"]))},[w("input",{type:"checkbox",class:"xui-table__check",checked:N(Q,n.virtual?h.value.startIndex+de:de),disabled:A(Q,n.virtual?h.value.startIndex+de:de),"aria-label":r(l).table.selectRow(n.virtual?h.value.startIndex+de:de),onChange:Ie=>R(Q,n.virtual?h.value.startIndex+de:de,Ie)},null,40,Xw)])):I("",!0),(b(!0),C(ne,null,me(n.columns,Ie=>(b(),C("td",{key:Ie.key,class:"xui-table__td",style:he(H(Ie))},$(ce(Ie,Q,n.virtual?h.value.startIndex+de:de)),5))),128))],10,Yw))),128)),n.virtual&&h.value.fillerHeight>0?(b(),C("tr",Qw,[w("td",{style:he({height:`${h.value.fillerHeight}px`}),colspan:T.value},null,12,Jw)])):I("",!0),d.value.sortedData.length===0?(b(),C("tr",Ww,[w("td",{class:"xui-table__empty",colspan:T.value},[D(j.$slots,"empty",{},()=>[K($(r(l).table.empty),1)])],8,eN)])):I("",!0)])])],38))}}),tN={key:0,class:"xui-spin__mask",role:"status","aria-live":"polite"},nN={key:0,class:"xui-spin__tip"},aN={key:0,class:"xui-spin__tip"},Fo=M({__name:"Spin",props:{size:{default:"md"},spinning:{type:Boolean,default:!0},tip:{default:void 0},className:{},style:{}},setup(e){const t=e,n=bv({size:t.size,spinning:t.spinning,tip:t.tip}),a=q(n.getState()),l=n.subscribe(o=>{a.value=o});return Ne(()=>{l()}),ke(()=>{n.updateOptions({size:t.size,spinning:t.spinning,tip:t.tip})}),(o,i)=>o.$slots.default?(b(),C("div",{key:0,class:J(["xui-spin xui-spin--wrapper",e.className]),style:he(e.style)},[w("div",{class:J(["xui-spin__content",{"is-blur":a.value.spinning}])},[D(o.$slots,"default")],2),a.value.spinning?(b(),C("div",tN,[w("span",{class:J(["xui-spin__indicator",`is-${a.value.size}`]),"aria-hidden":"true"},null,2),a.value.tip?(b(),C("span",nN,$(a.value.tip),1)):I("",!0)])):I("",!0)],6)):a.value.spinning?(b(),C("span",{key:1,class:J(["xui-spin",e.className]),style:he(e.style),role:"status","aria-live":"polite"},[w("span",{class:J(["xui-spin__indicator",`is-${a.value.size}`]),"aria-hidden":"true"},null,2),a.value.tip?(b(),C("span",aN,$(a.value.tip),1)):I("",!0)],6)):I("",!0)}}),lN=["aria-label"],oN=["aria-label"],iN={class:"xui-breadcrumb__list"},sN=["href","onClick"],rN=["aria-current","onClick"],cN={key:2,class:"xui-breadcrumb__separator","aria-hidden":"true"},ru=M({__name:"Breadcrumb",props:{items:{default:void 0},separator:{default:"/"},className:{},style:{}},emits:["itemClick"],setup(e,{emit:t}){const n=e,a=t,l=Bn(),o=Qf({items:n.items,separator:n.separator,onItemClick:(c,d)=>a("itemClick",c,d)}),i=q(o.getState()),s=o.subscribe(c=>{i.value=c});return Ne(()=>{s()}),ke(()=>{o.updateOptions({items:n.items,separator:n.separator})}),(c,d)=>c.$slots.default?(b(),C("nav",{key:0,class:J(["xui-breadcrumb",e.className]),style:he(e.style),"aria-label":r(l).breadcrumb.nav},[D(c.$slots,"default")],14,lN)):(b(),C("nav",{key:1,class:J(["xui-breadcrumb",e.className]),style:he(e.style),"aria-label":r(l).breadcrumb.nav},[w("ol",iN,[(b(!0),C(ne,null,me(i.value.items,(m,p)=>(b(),C("li",{key:p,class:J(["xui-breadcrumb__item",{"is-active":p===i.value.items.length-1,"is-disabled":m.disabled}])},[m.href&&p!==i.value.items.length-1&&!m.disabled?(b(),C("a",{key:0,class:"xui-breadcrumb__link",href:m.href,onClick:h=>r(o).selectItem(p)},$(m.label),9,sN)):(b(),C("span",{key:1,class:"xui-breadcrumb__label","aria-current":p===i.value.items.length-1?"page":void 0,onClick:h=>r(o).selectItem(p)},$(m.label),9,rN)),p!==i.value.items.length-1?(b(),C("span",cN,$(i.value.separator),1)):I("",!0)],2))),128))])],14,oN))}}),uN=["aria-label"],dN={key:0,class:"xui-skeleton__avatar","aria-hidden":"true"},pN={class:"xui-skeleton__rows","aria-hidden":"true"},cu=M({__name:"Skeleton",props:{loading:{type:Boolean,default:!0},avatar:{type:Boolean,default:!1},rows:{default:3},className:{},style:{}},setup(e){const t=e,n=gv({loading:t.loading,avatar:t.avatar,rows:t.rows}),a=Bn(),l=q(n.getState()),o=n.subscribe(i=>{l.value=i});return Ne(()=>{o()}),ke(()=>{n.updateOptions({loading:t.loading,avatar:t.avatar,rows:t.rows})}),(i,s)=>l.value.loading?(b(),C("div",{key:1,class:J(["xui-skeleton",e.className]),style:he(e.style),role:"status","aria-label":r(a).skeleton.loading},[l.value.avatar?(b(),C("span",dN)):I("",!0),w("div",pN,[(b(!0),C(ne,null,me(l.value.rows,c=>(b(),C("span",{key:c,class:J(["xui-skeleton__row",{"is-last":c===l.value.rows}])},null,2))),128))])],14,uN)):D(i.$slots,"default",{},void 0,void 0,0)}}),mN=["aria-valuenow","aria-valuemin","aria-valuemax","placeholder","disabled","onKeydown"],hN={class:"xui-input-number__step","aria-hidden":"true"},fN=["disabled"],vN=["innerHTML"],gN=["disabled"],bN=["innerHTML"],uu=M({__name:"InputNumber",props:{value:{default:void 0},defaultValue:{default:void 0},min:{default:void 0},max:{default:void 0},step:{default:1},precision:{default:void 0},disabled:{type:Boolean,default:!1},placeholder:{default:void 0},className:{},style:{}},emits:["change","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=sv({value:a.value,defaultValue:a.defaultValue,min:a.min,max:a.max,step:a.step,precision:a.precision,disabled:a.disabled,onChange:S=>{l("change",S),l("update:value",S)}}),i=q(o.getState());function s(S){if(S===null)return"";const v=o.getState().precision;return v!==null?S.toFixed(v):String(S)}const c=q(s(i.value.value)),d=o.subscribe(S=>{i.value=S,a.value===void 0&&(c.value=s(S.value))});Ne(()=>{d()}),ke(()=>{o.updateOptions({value:a.value,min:a.min,max:a.max,step:a.step,precision:a.precision,disabled:a.disabled}),a.value!==void 0&&(c.value=s(i.value.value))});function m(){o.commitText(c.value),c.value=s(i.value.value)}function p(S){o.stepValue(S),c.value=s(i.value.value)}const h=lt("input");return t({focus:()=>{var S;(S=h.value)==null||S.focus()},blur:()=>{var S;(S=h.value)==null||S.blur()},stepValue:S=>{o.stepValue(S),c.value=s(i.value.value)}}),(S,v)=>(b(),C("div",{class:J(["xui-input-number",[e.className,{"is-disabled":i.value.disabled}]]),style:he(e.style)},[Nf(w("input",{ref:"input","onUpdate:modelValue":v[0]||(v[0]=f=>c.value=f),class:"xui-input-number__input",type:"text",inputmode:"decimal",role:"spinbutton","aria-valuenow":i.value.value??void 0,"aria-valuemin":Number.isFinite(i.value.min)?i.value.min:void 0,"aria-valuemax":Number.isFinite(i.value.max)?i.value.max:void 0,placeholder:a.placeholder,disabled:i.value.disabled,onChange:m,onKeydown:[Ss(St(m,["prevent"]),["enter"]),v[1]||(v[1]=Ss(St(f=>p(1),["prevent"]),["up"])),v[2]||(v[2]=Ss(St(f=>p(-1),["prevent"]),["down"]))]},null,40,mN),[[SS,c.value]]),w("div",hN,[w("button",{class:"xui-input-number__btn",type:"button",tabindex:"-1",disabled:i.value.disabled,onClick:v[3]||(v[3]=f=>p(1))},[D(S.$slots,"upIcon",{},()=>[(b(),C("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)["arrow-up"]},null,8,vN))])],8,fN),w("button",{class:"xui-input-number__btn",type:"button",tabindex:"-1",disabled:i.value.disabled,onClick:v[4]||(v[4]=f=>p(-1))},[D(S.$slots,"downIcon",{},()=>[(b(),C("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)["arrow-down"]},null,8,bN))])],8,gN)])],6))}}),yN=["aria-describedby"],SN=["id"],xN={class:"xui-popconfirm__content"},CN={class:"xui-popconfirm__actions"},al=M({__name:"Popconfirm",props:{content:{default:void 0},confirmText:{},cancelText:{},placement:{default:"top"},disabled:{type:Boolean,default:!1},className:{},style:{}},emits:["confirm","cancel"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=Bn(),i=P(()=>a.confirmText??o.value.popconfirm.confirm),s=P(()=>a.cancelText??o.value.popconfirm.cancel),c=cn(),d=q(null),m=pv({placement:a.placement,disabled:a.disabled,onConfirm:()=>l("confirm"),onCancel:()=>l("cancel")}),p=q(m.getState()),h=m.subscribe(A=>{p.value=A}),g=A=>{const R=d.value;R&&!R.contains(A.target)&&m.close()};document.addEventListener("mousedown",g);const k=q(null),x=q(null),S=q(a.placement),v=q(0);let f=null;function y(){const A=k.value,R=x.value;if(!A||!R)return;const O=R.getBoundingClientRect();if(O.width===0&&O.height===0)return;const{placement:L,shift:te}=_o(A.getBoundingClientRect(),O,ko(),{placement:p.value.placement,gap:8});S.value=L,v.value=te}return Ge(()=>p.value.open,A=>{A?(S.value=p.value.placement,v.value=0,Nt(y),f==null||f(),f=Co(y)):(f==null||f(),f=null)}),Ge(()=>p.value.placement,A=>{p.value.open&&(S.value=A,v.value=0,Nt(y))}),Ne(()=>{h(),f==null||f(),document.removeEventListener("mousedown",g)}),ke(()=>{m.updateOptions({placement:a.placement,disabled:a.disabled})}),t({show:()=>{p.value.open||m.toggle()},hide:()=>{m.close()},toggle:()=>{m.toggle()}}),(A,R)=>(b(),C("span",{ref_key:"rootRef",ref:d,class:J(["xui-popconfirm",e.className]),style:he(e.style)},[w("span",{ref_key:"triggerRef",ref:k,class:"xui-popconfirm__trigger","aria-describedby":p.value.open?r(c):void 0,onClick:R[3]||(R[3]=O=>r(m).toggle())},[D(A.$slots,"default"),p.value.open?(b(),C("span",{key:0,ref_key:"popperRef",ref:x,id:r(c),class:J(["xui-popconfirm__popper",`is-${S.value}`]),style:he(S.value==="top"||S.value==="bottom"?{marginLeft:`${v.value}px`}:{marginTop:`${v.value}px`}),role:"tooltip",onClick:R[2]||(R[2]=St(()=>{},["stop"]))},[w("span",xN,[D(A.$slots,"content",{},()=>[K($(a.content),1)])]),w("div",CN,[w("button",{class:"xui-button xui-button--sm",type:"button",onClick:R[0]||(R[0]=O=>r(m).cancel())},$(s.value),1),w("button",{class:"xui-button xui-button--primary xui-button--sm",type:"button",onClick:R[1]||(R[1]=O=>r(m).confirm())},$(i.value),1)]),R[4]||(R[4]=w("span",{class:"xui-popconfirm__arrow","aria-hidden":"true"},null,-1))],14,SN)):I("",!0)],8,yN)],6))}}),_N=["aria-expanded","aria-selected","aria-disabled"],kN=["innerHTML"],wN=["aria-checked","aria-disabled"],NN={key:0,class:"xui-tree__children",role:"group"},TN=M({__name:"TreeNode",props:{node:{},logic:{},state:{},checkable:{type:Boolean},depth:{}},setup(e){const t=e,n=P(()=>!t.node.children||t.node.children.length===0),a=P(()=>t.state.expandedKeys.includes(t.node.key)),l=P(()=>t.state.selectedKey===t.node.key),o=P(()=>(t.state.checkedKeys,t.logic.getCheckState(t.node.key))),i=P(()=>t.state.disabled||t.node.disabled||t.node.disableCheckbox),s=()=>{n.value||t.logic.toggleExpand(t.node.key)},c=()=>{i.value||t.logic.toggleCheck(t.node.key)},d=()=>{t.logic.select(t.node.key)};return(m,p)=>{const h=aa("TreeNode",!0);return b(),C("li",{class:J(["xui-tree__node",{"is-expanded":a.value,"is-selected":l.value,"is-disabled":e.node.disabled,"is-leaf":n.value}]),role:"treeitem","aria-expanded":n.value?void 0:a.value,"aria-selected":l.value,"aria-disabled":e.node.disabled||void 0},[w("div",{class:"xui-tree__node-content",style:he({paddingLeft:`${e.depth*16}px`})},[w("span",{class:J(["xui-tree__switcher",{"is-leaf":n.value,"is-expanded":a.value}]),"aria-hidden":"true",onClick:St(s,["stop"])},[n.value?I("",!0):(b(),C("svg",{key:0,viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)["arrow-right"]},null,8,kN))],2),e.checkable?(b(),C("span",{key:0,class:J(["xui-tree__checkbox",{"is-disabled":i.value}]),role:"checkbox","aria-checked":o.value.indeterminate?"mixed":o.value.checked,"aria-disabled":i.value||void 0,onClick:St(c,["stop"])},[w("span",{class:J(["xui-tree__checkbox-inner",{"is-checked":o.value.checked,"is-indeterminate":o.value.indeterminate}])},null,2)],10,wN)):I("",!0),w("span",{class:"xui-tree__title",onClick:d},[D(m.$slots,"title",{node:e.node},()=>[K($(e.node.label),1)])])],4),!n.value&&a.value?(b(),C("ul",NN,[(b(!0),C(ne,null,me(e.node.children,g=>(b(),ae(h,{key:g.key,node:g,logic:e.logic,state:e.state,checkable:e.checkable,depth:e.depth+1},Tf({_:2},[m.$slots.title?{name:"title",fn:E(k=>[D(m.$slots,"title",Un({ref_for:!0},k))]),key:"0"}:void 0]),1032,["node","logic","state","checkable","depth"]))),128))])):I("",!0)],10,_N)}}}),zN={class:"xui-tree__list"},Hd=M({__name:"Tree",props:{data:{},expandedKeys:{default:void 0},defaultExpandedKeys:{default:void 0},checkedKeys:{default:void 0},defaultCheckedKeys:{default:void 0},selectedKey:{default:void 0},defaultSelectedKey:{default:void 0},checkable:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!1},defaultExpandAll:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},className:{},style:{}},emits:["expand","check","select","update:expandedKeys","update:checkedKeys","update:selectedKey"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=Pf({data:a.data,expandedKeys:a.expandedKeys,defaultExpandedKeys:a.defaultExpandedKeys,checkedKeys:a.checkedKeys,defaultCheckedKeys:a.defaultCheckedKeys,selectedKey:a.selectedKey,defaultSelectedKey:a.defaultSelectedKey,checkable:a.checkable,checkStrictly:a.checkStrictly,defaultExpandAll:a.defaultExpandAll,disabled:a.disabled,onExpand:(h,g)=>{l("update:expandedKeys",h),l("expand",h,g)},onCheck:(h,g)=>{l("update:checkedKeys",h),l("check",h,g)},onSelect:(h,g)=>{l("update:selectedKey",h),l("select",h,g)}}),i=q(o.getState()),s=o.subscribe(h=>{i.value=h});return Ne(s),ke(()=>{o.updateOptions({data:a.data,expandedKeys:a.expandedKeys,checkedKeys:a.checkedKeys,selectedKey:a.selectedKey,checkable:a.checkable,checkStrictly:a.checkStrictly,disabled:a.disabled})}),t({expandAll:()=>o.expandAll(),collapseAll:()=>o.collapseAll(),checkAll:()=>o.checkAll(),uncheckAll:()=>o.uncheckAll()}),(h,g)=>(b(),C("div",{class:J(["xui-tree",[e.className,{"is-disabled":i.value.disabled}]]),style:he(e.style),role:"tree"},[w("ul",zN,[(b(!0),C(ne,null,me(a.data,k=>(b(),ae(TN,{key:k.key,node:k,logic:r(o),state:i.value,checkable:a.checkable,depth:0},Tf({_:2},[h.$slots.title?{name:"title",fn:E(x=>[D(h.$slots,"title",Un({ref_for:!0},x))]),key:"0"}:void 0]),1032,["node","logic","state","checkable"]))),128))])],6))}}),UN={class:"xui-drawer__header"},$N={class:"xui-drawer__title"},EN=["innerHTML"],AN={class:"xui-drawer__body"},RN={key:0,class:"xui-drawer__footer"},Id=M({__name:"Drawer",props:to({placement:{default:"right"},size:{default:378},title:{},closable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},className:{},style:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:to(["open","close"],["update:visible"]),setup(e,{expose:t,emit:n}){const a=n,l=Ad(e,"visible"),o=lt("panel"),i=nv({visible:l.value,closable:e.closable,maskClosable:e.maskClosable,closeOnEsc:e.closeOnEsc,onOpen:()=>{l.value=!0,a("open")},onClose:()=>{l.value=!1,a("close")}}),s=q(i.getState()),c=i.subscribe(v=>{s.value=v}),d=P(()=>{const v=typeof e.size=="number"?`${e.size}px`:e.size;return e.placement==="top"||e.placement==="bottom"?{height:v}:{width:v}}),m=v=>{v.key==="Escape"&&i.handleEsc()},p=v=>{if(v.key==="Escape"){v.preventDefault(),i.handleEsc();return}e.trapFocus&&Or(v,v.currentTarget)};let h=null;Ne(()=>{c(),document.removeEventListener("keydown",m)}),ke(()=>{i.updateOptions({visible:l.value,closable:e.closable,maskClosable:e.maskClosable,closeOnEsc:e.closeOnEsc})}),Ge(()=>s.value.visible,v=>{v?(e.closeOnEsc&&document.addEventListener("keydown",m),h=document.activeElement instanceof HTMLElement?document.activeElement:null,Nt(()=>{var f;(f=o.value)==null||f.focus()})):(document.removeEventListener("keydown",m),h==null||h.focus(),h=null)});const g=()=>{i.open()},k=()=>{i.close()},x=()=>{i.toggle()},S=()=>{i.handleMaskClick()};return t({open:g,close:k,toggle:x}),(v,f)=>(b(),ae(zf,{to:"body"},[s.value.visible?(b(),C("div",{key:0,class:J(["xui-drawer",`xui-drawer--${e.placement}`])},[e.mask?(b(),C("div",{key:0,class:"xui-drawer__overlay",onClick:S})):I("",!0),w("div",{ref:"panel",class:J(["xui-drawer__panel",e.className]),style:he([d.value,e.style]),tabindex:"-1",onKeydown:p},[w("div",UN,[D(v.$slots,"title",{},()=>[w("span",$N,$(e.title),1)]),s.value.closable?(b(),C("button",{key:0,type:"button",class:"xui-drawer__close",onClick:k},[D(v.$slots,"closeIcon",{},()=>[(b(),C("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(le).close},null,8,EN))])])):I("",!0)]),w("div",AN,[D(v.$slots,"default")]),v.$slots.footer?(b(),C("div",RN,[D(v.$slots,"footer")])):I("",!0)],38)],2)):I("",!0)]))}}),BN={key:0,class:"xui-modal"},ON={class:"xui-modal__header"},ZN={class:"xui-modal__title"},jN=["innerHTML"],DN={class:"xui-modal__body"},MN={class:"xui-modal__footer"},Zi=M({__name:"Modal",props:to({title:{},width:{default:520},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},okText:{},cancelText:{},trapFocus:{type:Boolean,default:!0},className:{},style:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:to(["open","close","ok","cancel"],["update:visible"]),setup(e,{expose:t,emit:n}){const a=n,l=Ad(e,"visible"),o=lt("panel"),i=Bn(),s=P(()=>e.okText??i.value.modal.ok),c=P(()=>e.cancelText??i.value.modal.cancel),d=cv({visible:l.value,closable:e.closable,maskClosable:e.maskClosable,closeOnEsc:e.closeOnEsc,onOpen:()=>{l.value=!0,a("open")},onClose:()=>{l.value=!1,a("close")},onOk:()=>a("ok"),onCancel:()=>a("cancel")}),m=q(d.getState()),p=d.subscribe(T=>{m.value=T}),h=T=>{T.key==="Escape"&&d.handleEsc()},g=T=>{if(T.key==="Escape"){T.preventDefault(),d.handleEsc();return}e.trapFocus&&Or(T,T.currentTarget)};let k=null;Ne(()=>{p(),document.removeEventListener("keydown",h)}),ke(()=>{d.updateOptions({visible:l.value,closable:e.closable,maskClosable:e.maskClosable,closeOnEsc:e.closeOnEsc})}),Ge(()=>m.value.visible,T=>{T?(e.closeOnEsc&&document.addEventListener("keydown",h),k=document.activeElement instanceof HTMLElement?document.activeElement:null,Nt(()=>{var N;(N=o.value)==null||N.focus()})):(document.removeEventListener("keydown",h),k==null||k.focus(),k=null)});const x=()=>{d.open()},S=()=>{d.close()},v=()=>{d.toggle()},f=()=>{d.handleOk()},y=()=>{d.handleCancel()},_=()=>{d.handleMaskClick()};return t({open:x,close:S,toggle:v}),(T,N)=>(b(),ae(zf,{to:"body"},[m.value.visible?(b(),C("div",BN,[w("div",{class:"xui-modal__overlay",onClick:_}),w("div",{ref:"panel",class:J(["xui-modal__panel",e.className]),style:he([{width:typeof e.width=="number"?`${e.width}px`:e.width},e.style]),tabindex:"-1",onKeydown:g},[w("div",ON,[D(T.$slots,"title",{},()=>[w("span",ZN,$(e.title),1)]),m.value.closable?(b(),C("button",{key:0,class:"xui-modal__close",onClick:S},[D(T.$slots,"closeIcon",{},()=>[(b(),C("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",innerHTML:r(le).close},null,8,jN))])])):I("",!0)]),w("div",DN,[D(T.$slots,"default")]),w("div",MN,[D(T.$slots,"footer",{},()=>[w("button",{class:"xui-button xui-button--md",onClick:y},$(c.value),1),w("button",{class:"xui-button xui-button--primary xui-button--md",onClick:f},$(s.value),1)])])],38)])):I("",!0)]))}}),LN={key:0,class:"xui-form__actions"},Dr=M({__name:"Form",props:{initialValues:{},rules:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},labelWidth:{},labelPosition:{default:"right"},validateTrigger:{},scrollToFirstError:{type:Boolean,default:!1},className:{},style:{}},emits:["submit","submitFail","valuesChange"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=q(null);o.value===null&&(o.value=ov({initialValues:a.initialValues,rules:a.rules,disabled:a.disabled,readonly:a.readonly,validateTrigger:a.validateTrigger,onSubmit:p=>l("submit",p),onSubmitFail:p=>l("submitFail",p),onValuesChange:(p,h)=>l("valuesChange",p,h)}));const i=o.value,s=q(i.getState()),c=i.subscribe(p=>{s.value=p});Ne(()=>{c()}),ke(()=>{i.updateOptions({disabled:a.disabled,readonly:a.readonly,rules:a.rules,onSubmit:p=>l("submit",p),onSubmitFail:p=>l("submitFail",p),onValuesChange:(p,h)=>l("valuesChange",p,h)})});const d=P(()=>({logic:i,state:s.value,disabled:a.disabled,readonly:a.readonly,labelWidth:a.labelWidth,labelPosition:a.labelPosition}));Rr("xuiForm",d);const m=p=>{p.preventDefault(),i.submit()};return t({validate:p=>i.validate(p),validateField:(p,h)=>i.validateField(p,h),getFieldValue:p=>i.getFieldValue(p),getFieldsValue:()=>i.getFieldsValue(),setFieldValue:(p,h)=>i.setFieldValue(p,h),setFieldsValue:p=>i.setFieldsValue(p),resetFields:p=>i.resetFields(p),clearValidate:p=>i.clearValidate(p),submit:()=>i.submit()}),(p,h)=>(b(),C("form",{class:J(["xui-form",a.className]),style:he(a.style),onSubmit:St(m,["prevent"])},[D(p.$slots,"default"),p.$slots.actions?(b(),C("div",LN,[D(p.$slots,"actions")])):I("",!0)],38))}}),VN={class:"xui-form-item__content"},HN={key:1,class:"xui-form-item__extra"},IN={key:0,class:"xui-form-item__error"},FN={key:0,class:"xui-form-item__error-count"},At=M({__name:"FormItem",props:{label:{},required:{type:Boolean,default:!1},trigger:{},validateFirst:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},extra:{},labelAlign:{default:"right"},className:{},style:{},name:{},rules:{}},emits:["change","blur"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=wf(),i=So("xuiForm",void 0),s=P(()=>{if(!i)return;const N=i;return N&&typeof N=="object"&&"value"in N&&typeof N.value=="object"?N.value:N});s.value;const c=P(()=>a.rules??[]),d=P(()=>a.required||lv(c.value)),m=P(()=>{if(a.name&&s.value)return s.value.state.values[a.name]}),p=P(()=>!a.name||!s.value?[]:s.value.state.errors[a.name]??[]),h=P(()=>s.value?s.value.state.validating:!1),g=P(()=>{var N;return((N=s.value)==null?void 0:N.disabled)??!1}),k=P(()=>{var N;return((N=s.value)==null?void 0:N.readonly)??!1}),x=P(()=>{var R;const N=(R=s.value)==null?void 0:R.labelWidth;return N===void 0?void 0:{width:typeof N=="number"?`${N}px`:N,flexShrink:0}}),S=P(()=>{var N;return((N=s.value)==null?void 0:N.labelPosition)??"right"});Vt(()=>{a.name&&s.value&&s.value.logic.registerField(a.name,c.value)}),Ed(()=>{a.name&&s.value&&s.value.logic.unregisterField(a.name)}),Ge(()=>c.value,N=>{a.name&&s.value&&s.value.logic.registerField(a.name,N)});const v=N=>{!a.name||!s.value||(s.value.logic.setFieldValue(a.name,N),l("change",N),s.value.logic.validateField(a.name,"change"))},f=()=>{!a.name||!s.value||(l("blur",m.value),s.value.logic.validateField(a.name,"blur"))},y=()=>{var A;const N=((A=o.default)==null?void 0:A.call(o))??[];for(const R of N)if(R.type!==CS&&R.type!==null)return R;return null},_=P(()=>{const N=y();if(!N)return null;const A={value:m.value,disabled:g.value||void 0,readonly:k.value||void 0};return A["onUpdate:value"]=R=>v(R),A.onChange=R=>{v(R)},A.onBlur=()=>f(),xS(N,A)}),T=Object.assign(N=>N.node,{props:["node"]});return t({validate:N=>!a.name||!s.value?Promise.resolve([]):s.value.logic.validateField(a.name,N),clearValidation:()=>{!a.name||!s.value||s.value.logic.clearValidate([a.name])},resetField:()=>{!a.name||!s.value||s.value.logic.resetFields([a.name])}}),(N,A)=>a.hidden?I("",!0):(b(),C("div",{key:0,class:J(["xui-form-item",`xui-form-item--label-${S.value}`,{"is-error":p.value.length>0,"is-required":d.value,"is-validating":h.value},a.className]),style:he(a.style)},[a.label||N.$slots.label?(b(),C("label",{key:0,class:J(["xui-form-item__label",`xui-form-item__label--${a.labelAlign}`]),style:he(x.value)},[D(N.$slots,"label",{},()=>[K($(a.label),1)])],6)):I("",!0),w("div",VN,[_.value?(b(),ae(sn(r(T)),{key:0,node:_.value},null,8,["node"])):I("",!0),a.extra||N.$slots.extra?(b(),C("div",HN,[D(N.$slots,"extra",{},()=>[K($(a.extra),1)])])):I("",!0),U(Ai,{name:"xui-form-item-fade"},{default:E(()=>[p.value.length>0&&!N.$slots.error?(b(),C("div",IN,[K($(p.value[0])+" ",1),p.value.length>1?(b(),C("span",FN," (+"+$(p.value.length-1)+") ",1)):I("",!0)])):I("",!0)]),_:1}),N.$slots.error?D(N.$slots,"error",{errors:p.value},void 0,void 0,2):I("",!0)])],6))}}),KN=["id","aria-expanded","aria-controls","aria-disabled","tabindex"],qN={key:0,class:"xui-time-picker__value"},PN={key:1,class:"xui-time-picker__placeholder"},GN=["innerHTML"],YN={key:3,class:"xui-time-picker__icon","aria-hidden":"true"},XN=["innerHTML"],QN=["id","aria-label"],JN={class:"xui-time-picker__columns"},WN={class:"xui-time-picker__column",role:"listbox","aria-label":"hour"},eT=["aria-selected","onClick"],tT={class:"xui-time-picker__column",role:"listbox","aria-label":"minute"},nT=["aria-selected","onClick"],aT={key:0,class:"xui-time-picker__column",role:"listbox","aria-label":"second"},lT=["aria-selected","onClick"],oT={class:"xui-time-picker__footer"},iT=["disabled"],Ev=M({__name:"TimePicker",props:{value:{default:void 0},defaultValue:{default:void 0},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},format:{default:"HH:mm:ss"},hourStep:{default:1},minuteStep:{default:1},secondStep:{default:1},className:{},style:{}},emits:["change","clear","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=lt("root"),i=lt("trigger"),s=cn(),c=cn(),{value:d,defaultValue:m,disabled:p}=a,h=wv({value:d,defaultValue:m,disabled:p,format:a.format,hourStep:a.hourStep,minuteStep:a.minuteStep,secondStep:a.secondStep,onChange:Z=>{l("update:value",Z),l("change",Z)},onClear:()=>l("clear")}),g=q(h.getState()),k=h.subscribe(Z=>{g.value=Z}),x=Z=>{g.value.open&&o.value&&!o.value.contains(Z.target)&&h.close()};Vt(()=>{document.addEventListener("mousedown",x)}),Ne(()=>{k(),document.removeEventListener("mousedown",x)}),ke(()=>{h.updateOptions({value:a.value,disabled:a.disabled})}),Ge(()=>g.value.open,async Z=>{var H;if(!Z)return;await Nt();const F=(H=o.value)==null?void 0:H.querySelectorAll(".xui-time-picker__column");F==null||F.forEach(ce=>{const V=ce.querySelector(".xui-time-picker__item.is-selected");V&&typeof V.scrollIntoView=="function"&&V.scrollIntoView({block:"center",inline:"nearest"})})});const S=P(()=>Il(24,a.hourStep)),v=P(()=>Il(60,a.minuteStep)),f=P(()=>Il(60,a.secondStep)),y=P(()=>g.value.draft?kv(g.value.draft):null),_=P(()=>a.format==="HH:mm:ss"),T=P(()=>g.value.value?_.value?g.value.value:g.value.value.slice(0,5):null),N=Bn(),A=Z=>{switch(Z.key){case"Enter":case" ":Z.preventDefault(),h.toggleOpen();break;case"Escape":g.value.open&&(Z.preventDefault(),h.close());break}},R=(Z,F)=>{const ce={...y.value??{hour:0,minute:0,second:0},[Z]:F};h.selectDraft(ce.hour,ce.minute,_.value?ce.second:0)};return t({focus:()=>{var Z;(Z=i.value)==null||Z.focus()},toggleOpen:()=>{h.toggleOpen()},close:()=>{h.close()}}),(Z,F)=>(b(),C("div",{ref:"root",class:J(["xui-time-picker",[e.className,{"is-disabled":g.value.disabled,"is-open":g.value.open}]]),style:he(e.style)},[w("div",{ref:"trigger",id:r(s),class:"xui-time-picker__trigger",role:"combobox","aria-expanded":g.value.open,"aria-haspopup":"dialog","aria-controls":g.value.open?r(c):void 0,"aria-disabled":g.value.disabled||void 0,tabindex:g.value.disabled?-1:0,onClick:F[1]||(F[1]=H=>r(h).toggleOpen()),onKeydown:A},[T.value?(b(),C("span",qN,$(T.value),1)):(b(),C("span",PN,$(a.placeholder??r(N).timePicker.placeholder),1)),a.clearable&&g.value.value&&!g.value.disabled?(b(),C("span",{key:2,class:"xui-time-picker__clear",role:"button","aria-label":"clear",onClick:F[0]||(F[0]=St(H=>r(h).clear(),["stop"]))},[D(Z.$slots,"clearIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).clear},null,8,GN))])])):(b(),C("span",YN,[D(Z.$slots,"clockIcon",{},()=>[(b(),C("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le).clock},null,8,XN))])]))],40,KN),g.value.open?(b(),C("div",{key:0,id:r(c),class:"xui-time-picker__panel",role:"dialog","aria-label":r(N).timePicker.panel},[w("div",JN,[w("ul",WN,[(b(!0),C(ne,null,me(S.value,H=>{var ce,V;return b(),C("li",{key:H,class:J(["xui-time-picker__item",{"is-selected":((ce=y.value)==null?void 0:ce.hour)===r(Fl)(H,a.hourStep,24)}]),role:"option","aria-selected":((V=y.value)==null?void 0:V.hour)===H,onClick:se=>R("hour",H)},$(String(H).padStart(2,"0")),11,eT)}),128))]),w("ul",tT,[(b(!0),C(ne,null,me(v.value,H=>{var ce,V;return b(),C("li",{key:H,class:J(["xui-time-picker__item",{"is-selected":((ce=y.value)==null?void 0:ce.minute)===r(Fl)(H,a.minuteStep,60)}]),role:"option","aria-selected":((V=y.value)==null?void 0:V.minute)===H,onClick:se=>R("minute",H)},$(String(H).padStart(2,"0")),11,nT)}),128))]),_.value?(b(),C("ul",aT,[(b(!0),C(ne,null,me(f.value,H=>{var ce,V;return b(),C("li",{key:H,class:J(["xui-time-picker__item",{"is-selected":((ce=y.value)==null?void 0:ce.second)===r(Fl)(H,a.secondStep,60)}]),role:"option","aria-selected":((V=y.value)==null?void 0:V.second)===H,onClick:se=>R("second",H)},$(String(H).padStart(2,"0")),11,lT)}),128))])):I("",!0)]),w("div",oT,[w("button",{type:"button",class:"xui-time-picker__footer-btn xui-time-picker__footer-btn--cancel",onClick:F[2]||(F[2]=H=>r(h).close())},$(r(N).timePicker.cancel),1),w("button",{type:"button",class:"xui-time-picker__footer-btn xui-time-picker__footer-btn--confirm",disabled:!g.value.draft,onClick:F[3]||(F[3]=H=>r(h).confirm())},$(r(N).timePicker.confirm),9,iT)])],8,QN)):I("",!0)],6))}}),sT=["id","aria-expanded","aria-controls","aria-disabled","tabindex"],rT={key:0,class:"xui-cascader__placeholder"},cT={key:1,class:"xui-cascader__tags"},uT={class:"xui-cascader__tag-label"},dT=["onClick"],pT={key:0,class:"xui-cascader__value"},mT={key:1,class:"xui-cascader__placeholder"},hT=["innerHTML"],fT=["innerHTML"],vT=["id","aria-label"],gT={class:"xui-cascader__columns"},bT=["aria-label"],yT=["aria-selected","aria-disabled","onClick"],ST={key:0,class:"xui-cascader__checkbox","aria-hidden":"true"},xT={class:"xui-cascader__item-label"},CT={key:1,class:"xui-cascader__item-arrow","aria-hidden":"true"},_T=["innerHTML"],kT={key:0,class:"xui-cascader__footer"},Fd=M({__name:"Cascader",props:{value:{default:void 0},defaultValue:{default:void 0},options:{},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{default:" / "},changeOnSelect:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!1},className:{},style:{}},emits:["change","clear","update:value"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=lt("root"),i=lt("trigger"),s=cn(),c=cn(),{value:d,defaultValue:m,disabled:p}=a,h=ev({value:d,defaultValue:m,options:a.options,disabled:p,separator:a.separator,changeOnSelect:a.changeOnSelect,multiple:a.multiple,checkStrictly:a.checkStrictly,onChange:(Z,F)=>{l("update:value",Z),l("change",Z,F)},onClear:()=>l("clear")}),g=q(h.getState()),k=h.subscribe(Z=>{g.value=Z}),x=Z=>{g.value.open&&o.value&&!o.value.contains(Z.target)&&h.close()};Vt(()=>{document.addEventListener("mousedown",x)}),Ne(()=>{k(),document.removeEventListener("mousedown",x)}),ke(()=>{h.updateOptions({value:a.value,disabled:a.disabled,options:a.options,changeOnSelect:a.changeOnSelect,checkStrictly:a.checkStrictly})});const S=P(()=>Md(a.options,g.value.activePath)),v=P(()=>{var Z;return!a.multiple&&g.value.value?((Z=ao(a.options,g.value.value))==null?void 0:Z.labels.join(a.separator))??null:null}),f=P(()=>!a.multiple||!g.value.value?[]:g.value.value.map(F=>{const H=ao(a.options,F);return H?{path:F,label:H.labels.join(a.separator)}:null}).filter(Boolean)),y=P(()=>a.multiple?f.value.length>0:!!g.value.value),_=Bn(),T=(Z,F)=>{if(!a.multiple)return!1;const H=[...g.value.activePath.slice(0,Z),F.value];return Ys(a.options,g.value.value,H,a.checkStrictly).checked},N=(Z,F)=>{if(!a.multiple)return!1;const H=[...g.value.activePath.slice(0,Z),F.value];return Ys(a.options,g.value.value,H,a.checkStrictly).indeterminate},A=Z=>{h.toggleCheck(Z)},R=Z=>{switch(Z.key){case"Enter":case" ":Z.preventDefault(),h.toggleOpen();break;case"Escape":g.value.open&&(Z.preventDefault(),h.close());break}};return t({focus:()=>{var Z;(Z=i.value)==null||Z.focus()},toggleOpen:()=>{h.toggleOpen()},close:()=>{h.close()}}),(Z,F)=>(b(),C("div",{ref:"root",class:J(["xui-cascader",[e.className,{"is-disabled":g.value.disabled,"is-open":g.value.open,"is-multiple":a.multiple}]]),style:he(e.style)},[w("div",{ref:"trigger",id:r(s),class:"xui-cascader__trigger",role:"combobox","aria-expanded":g.value.open,"aria-haspopup":"dialog","aria-controls":g.value.open?r(c):void 0,"aria-disabled":g.value.disabled||void 0,tabindex:g.value.disabled?-1:0,onClick:F[1]||(F[1]=H=>r(h).toggleOpen()),onKeydown:R},[a.multiple?(b(),C(ne,{key:0},[f.value.length===0?(b(),C("span",rT,$(a.placeholder??r(_).cascader.placeholder),1)):(b(),C("span",cT,[(b(!0),C(ne,null,me(f.value,H=>(b(),C("span",{key:H.path.join("/"),class:"xui-cascader__tag"},[w("span",uT,$(H.label),1),w("span",{class:"xui-cascader__tag-close",role:"button","aria-label":"remove",onClick:St(ce=>A(H.path),["stop"])},"×",8,dT)]))),128))]))],64)):(b(),C(ne,{key:1},[v.value?(b(),C("span",pT,$(v.value),1)):(b(),C("span",mT,$(a.placeholder??r(_).cascader.placeholder),1))],64)),a.clearable&&y.value&&!g.value.disabled?(b(),C("span",{key:2,class:"xui-cascader__clear",role:"button","aria-label":"clear",onClick:F[0]||(F[0]=St(H=>r(h).clear(),["stop"]))},[D(Z.$slots,"clearIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true",innerHTML:r(le).clear},null,8,hT))])])):(b(),C("span",{key:3,class:J(["xui-cascader__arrow",{"is-open":g.value.open}]),"aria-hidden":"true"},[D(Z.$slots,"suffixIcon",{},()=>[(b(),C("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:r(le)["arrow-down"]},null,8,fT))])],2))],40,sT),g.value.open?(b(),C("div",{key:0,id:r(c),class:"xui-cascader__panel",role:"dialog","aria-label":r(_).cascader.panel},[w("div",gT,[(b(!0),C(ne,null,me(S.value,(H,ce)=>(b(),C("ul",{key:ce,class:"xui-cascader__column",role:"listbox","aria-label":`level-${ce}`},[(b(!0),C(ne,null,me(H,V=>(b(),C("li",{key:V.value,class:J(["xui-cascader__item",{"is-active":g.value.activePath[ce]===V.value,"is-disabled":V.disabled,"is-checked":a.multiple&&T(ce,V)}]),role:"option","aria-selected":g.value.activePath[ce]===V.value,"aria-disabled":V.disabled||void 0,onClick:se=>!V.disabled&&r(h).select(ce,V.value)},[a.multiple?(b(),C("span",ST,[w("span",{class:J(["xui-cascader__checkbox-inner",{"is-checked":T(ce,V),"is-indeterminate":N(ce,V)}])},null,2)])):I("",!0),w("span",xT,$(V.label),1),V.children&&V.children.length>0?(b(),C("span",CT,[(b(),C("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",innerHTML:r(le)["arrow-right"]},null,8,_T))])):I("",!0)],10,yT))),128))],8,bT))),128))]),a.multiple?(b(),C("div",kT,[w("button",{type:"button",class:"xui-cascader__footer-btn",onClick:F[2]||(F[2]=H=>r(h).checkAll())}," 全选 "),w("button",{type:"button",class:"xui-cascader__footer-btn",onClick:F[3]||(F[3]=H=>r(h).uncheckAll())}," 清空 ")])):I("",!0)],8,vT)):I("",!0)],6))}}),wT=["accept","multiple","disabled"],NT={class:"xui-upload__actions"},TT=["disabled"],zT={class:"xui-upload__item-main"},UT=["src","alt"],$T=["title"],ET={class:"xui-upload__status"},AT={key:0,class:"xui-upload__speed"},RT={key:1,class:"xui-upload__remaining"},BT={key:0,class:"xui-upload__progress"},OT={class:"xui-upload__item-actions"},ZT=["disabled","onClick"],jT=["disabled","onClick"],DT=["onClick"],MT=["onClick"],Kd=M({__name:"Upload",props:{action:{},accept:{default:void 0},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxCount:{default:void 0},maxSize:{default:void 0},listType:{default:"text"},autoUpload:{type:Boolean,default:!0},requestUpload:{type:Function,default:void 0},beforeUpload:{type:Function,default:void 0},value:{default:void 0},defaultValue:{default:void 0},className:{},style:{}},emits:["change","remove"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=lt("fileInput"),{value:i,defaultValue:s,disabled:c}=a,d=Tv({action:a.action,multiple:a.multiple,disabled:c,maxCount:a.maxCount,maxSize:a.maxSize,listType:a.listType,autoUpload:a.autoUpload,requestUpload:a.requestUpload,beforeUpload:a.beforeUpload,value:i,defaultValue:s,onChange:_=>{l("change",_)},onRemove:_=>l("remove",_)}),m=q(d.getState()),p=d.subscribe(_=>{m.value=_});Ne(()=>{p()}),ke(()=>{d.updateOptions({value:a.value,disabled:a.disabled})});const h=_=>{const T=_.target,N=T.files;N&&N.length>0&&d.selectFiles(N),T.value=""},g=()=>{var _;(_=o.value)==null||_.click()},k=()=>{d.clear()},x=()=>{d.submit()},S=_=>_===void 0||_<=0?"":_<1024?`${_.toFixed(0)} B/s`:_<1024*1024?`${(_/1024).toFixed(1)} KB/s`:`${(_/(1024*1024)).toFixed(1)} MB/s`,v=_=>{if(_===void 0||_<=0)return"";const T=Math.floor(_/60),N=Math.floor(_%60);return T>0?`${T}分${N}秒`:`${N}秒`},f=_=>URL.createObjectURL(_),y=P(()=>m.value.fileList.some(_=>_.status==="pending"));return t({open:g,clear:k,submit:x}),(_,T)=>(b(),C("div",{class:J(["xui-upload",e.className]),style:he(e.style)},[w("input",{ref:"fileInput",type:"file",class:"xui-upload__input",accept:a.accept,multiple:a.multiple,disabled:m.value.disabled,style:{display:"none"},onChange:h},null,40,wT),w("div",NT,[D(_.$slots,"trigger",{},()=>[w("button",{type:"button",class:J(["xui-upload__trigger",{"is-disabled":m.value.disabled}]),disabled:m.value.disabled,onClick:g}," + 点击上传 ",10,TT)]),!a.autoUpload&&y.value?(b(),C("button",{key:0,type:"button",class:"xui-upload__submit-btn",onClick:x}," 开始上传 ")):I("",!0)]),m.value.fileList.length>0?(b(),C("ul",{key:0,class:J(["xui-upload__list",`xui-upload__list--${a.listType}`])},[(b(!0),C(ne,null,me(m.value.fileList,N=>(b(),C("li",{key:N.uid,class:J(["xui-upload__item",`is-${N.status}`])},[D(_.$slots,"fileItem",{file:N},()=>{var A,R;return[w("div",zT,[a.listType==="picture"&&N.raw?(b(),C("img",{key:0,src:f(N.raw),alt:N.name,class:"xui-upload__thumbnail"},null,8,UT)):I("",!0),w("span",{class:"xui-upload__name",title:N.name},$(N.name),9,$T),w("span",ET,[N.status==="pending"?(b(),C(ne,{key:0},[K("待上传")],64)):N.status==="uploading"?(b(),C(ne,{key:1},[K($(N.percent)+"% ",1),N.speed?(b(),C("span",AT,$(S(N.speed)),1)):I("",!0),N.remainingTime?(b(),C("span",RT,"剩余 "+$(v(N.remainingTime)),1)):I("",!0)],64)):N.status==="done"?(b(),C(ne,{key:2},[K("✓ 成功")],64)):N.status==="error"?(b(),C(ne,{key:3},[K("✗ 失败")],64)):N.status==="cancelled"?(b(),C(ne,{key:4},[K("已取消")],64)):I("",!0)])]),N.status==="uploading"?(b(),C("div",BT,[w("div",{class:"xui-upload__progress-bar",style:he({width:N.percent+"%"})},null,4)])):I("",!0),w("div",OT,[m.value.fileList.length>1?(b(),C("button",{key:0,type:"button",class:"xui-upload__sort-btn","aria-label":"move up",disabled:((A=m.value.fileList[0])==null?void 0:A.uid)===N.uid,onClick:O=>r(d).move(N.uid,-1)}," ↑ ",8,ZT)):I("",!0),m.value.fileList.length>1?(b(),C("button",{key:1,type:"button",class:"xui-upload__sort-btn","aria-label":"move down",disabled:((R=m.value.fileList[m.value.fileList.length-1])==null?void 0:R.uid)===N.uid,onClick:O=>r(d).move(N.uid,1)}," ↓ ",8,jT)):I("",!0),N.status==="uploading"?(b(),C("button",{key:2,type:"button",class:"xui-upload__cancel-btn","aria-label":"cancel",onClick:O=>r(d).cancel(N.uid)}," 取消 ",8,DT)):I("",!0),w("button",{type:"button",class:"xui-upload__remove","aria-label":"remove",onClick:O=>r(d).remove(N.uid)}," × ",8,MT)])]})],2))),128))],2)):I("",!0)],6))}}),hl=_S({locale:"zh-CN"}),LT=_f(hl),Ga=e=>e[hl.locale],z=()=>hl.locale==="zh-CN",du=new Set,VT=e=>(du.add(e),()=>{du.delete(e)}),km=()=>hl.locale,HT=e=>{hl.locale=e,du.forEach(t=>t(e)),!(typeof document>"u")&&(document.documentElement.lang=e,xo(e))},IT=e=>{e!==hl.locale&&HT(e)},FT=e=>{hl.locale=e,!(typeof document>"u")&&(document.documentElement.lang=e,xo(e))},KT={hidden:"","aria-hidden":"true"},qT=M({__name:"LocaleSync",setup(e){const{lang:t}=Ri(),n=a=>a==="en-US"?"en-US":"zh-CN";return FT(n(t.value)),Ge(t,a=>IT(n(a))),(a,l)=>(b(),C("span",KT))}}),PT=M({__name:"Layout",setup(e){const{isDark:t}=Ri();return Ge(t,n=>Zr(n?"dark":"light"),{immediate:!0}),(n,a)=>(b(),ae(r(Of).Layout,null,{"layout-top":E(()=>[U(qT)]),_:1}))}}),GT=M({__name:"PageContent",setup(e){const{page:t}=Ri();return(n,a)=>(b(),ae(Ai,{name:"xui-page",mode:"out-in"},{default:E(()=>[(b(),ae(r(kS),{key:r(t).relativePath}))]),_:1}))}}),YT=[{key:"basic",title:{"zh-CN":"基础组件","en-US":"Basic"}},{key:"form",title:{"zh-CN":"表单交互","en-US":"Form"}},{key:"display",title:{"zh-CN":"数据展示","en-US":"Data Display"}},{key:"navigation",title:{"zh-CN":"导航布局","en-US":"Navigation"}},{key:"feedback",title:{"zh-CN":"反馈提示","en-US":"Feedback"}}],XT=[{name:"Button",slug:"button",title:"按钮",category:"basic",available:!0},{name:"Input",slug:"input",title:"输入框",category:"basic",available:!0},{name:"Modal",slug:"modal",title:"对话框",category:"basic",available:!0},{name:"Drawer",slug:"drawer",title:"抽屉",category:"basic",available:!0},{name:"Switch",slug:"switch",title:"开关",category:"form",available:!0},{name:"Checkbox",slug:"checkbox",title:"复选框",category:"form",available:!0},{name:"Radio",slug:"radio",title:"单选框",category:"form",available:!0},{name:"Select",slug:"select",title:"下拉选择",category:"form",available:!0},{name:"DatePicker",slug:"date-picker",title:"日期选择",category:"form",available:!0},{name:"InputNumber",slug:"input-number",title:"数字输入框",category:"form",available:!0},{name:"Form",slug:"form",title:"表单",category:"form",available:!0},{name:"Cascader",slug:"cascader",title:"级联选择",category:"form",available:!0},{name:"TimePicker",slug:"time-picker",title:"时间选择",category:"form",available:!0},{name:"Upload",slug:"upload",title:"文件上传",category:"form",available:!0},{name:"Tag",slug:"tag",title:"标签",category:"display",available:!0},{name:"Progress",slug:"progress",title:"进度条",category:"display",available:!0},{name:"Badge",slug:"badge",title:"徽标数",category:"display",available:!0},{name:"Avatar",slug:"avatar",title:"头像",category:"display",available:!0},{name:"Empty",slug:"empty",title:"空状态",category:"display",available:!0},{name:"Skeleton",slug:"skeleton",title:"骨架屏",category:"display",available:!0},{name:"Table",slug:"table",title:"表格",category:"display",available:!0},{name:"Tree",slug:"tree",title:"树形控件",category:"display",available:!0},{name:"Tabs",slug:"tabs",title:"标签页",category:"navigation",available:!0},{name:"Pagination",slug:"pagination",title:"分页",category:"navigation",available:!0},{name:"Breadcrumb",slug:"breadcrumb",title:"面包屑",category:"navigation",available:!0},{name:"Alert",slug:"alert",title:"警告提示",category:"feedback",available:!0},{name:"Message",slug:"message",title:"全局提示",category:"feedback",available:!0},{name:"Tooltip",slug:"tooltip",title:"文字提示",category:"feedback",available:!0},{name:"Spin",slug:"spin",title:"加载中",category:"feedback",available:!0},{name:"Popconfirm",slug:"popconfirm",title:"气泡确认",category:"feedback",available:!0}],QT={class:"demo-row"},JT=M({__name:"type",setup(e){return(t,n)=>(b(),C("div",QT,[U(r(W),null,{default:E(()=>[...n[0]||(n[0]=[K("Default",-1)])]),_:1}),U(r(W),{type:"primary"},{default:E(()=>[...n[1]||(n[1]=[K("Primary",-1)])]),_:1}),U(r(W),{type:"danger"},{default:E(()=>[...n[2]||(n[2]=[K("Danger",-1)])]),_:1}),U(r(W),{type:"link"},{default:E(()=>[...n[3]||(n[3]=[K("Link",-1)])]),_:1})]))}}),WT={class:"demo-column"},ez={class:"demo-row"},tz=M({__name:"size",setup(e){return(t,n)=>(b(),C("div",WT,[w("div",ez,[U(r(W),{size:"sm"},{default:E(()=>[...n[0]||(n[0]=[K("Small",-1)])]),_:1}),U(r(W),{size:"md"},{default:E(()=>[...n[1]||(n[1]=[K("Medium",-1)])]),_:1}),U(r(W),{size:"lg"},{default:E(()=>[...n[2]||(n[2]=[K("Large",-1)])]),_:1})]),U(r(W),{block:""},{default:E(()=>[K($(r(z)()?"Block（宽度撑满容器）":"Block (full width)"),1)]),_:1})]))}}),nz={class:"demo-row"},az=M({__name:"state",setup(e){const t=q(!1),n=()=>{t.value=!0,setTimeout(()=>{t.value=!1},1500)};return(a,l)=>(b(),C("div",nz,[U(r(W),{disabled:""},{default:E(()=>[...l[0]||(l[0]=[K("Disabled",-1)])]),_:1}),U(r(W),{loading:""},{default:E(()=>[...l[1]||(l[1]=[K("Loading",-1)])]),_:1}),U(r(W),{type:"primary",loading:t.value,onClick:n},{default:E(()=>[K($(t.value?r(z)()?"提交中...":"Submitting...":r(z)()?"点击模拟提交":"Click to submit"),1)]),_:1},8,["loading"])]))}});var wm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lz(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Av={exports:{}},Mr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oz=Symbol.for("react.transitional.element"),iz=Symbol.for("react.fragment");function Rv(e,t,n){var a=null;if(n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),"key"in t){n={};for(var l in t)l!=="key"&&(n[l]=t[l])}else n=t;return t=n.ref,{$$typeof:oz,type:e,key:a,ref:t!==void 0?t:null,props:n}}Mr.Fragment=iz;Mr.jsx=Rv;Mr.jsxs=Rv;Av.exports=Mr;var u=Av.exports,Bv={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=Symbol.for("react.transitional.element"),sz=Symbol.for("react.portal"),rz=Symbol.for("react.fragment"),cz=Symbol.for("react.strict_mode"),uz=Symbol.for("react.profiler"),dz=Symbol.for("react.consumer"),pz=Symbol.for("react.context"),mz=Symbol.for("react.forward_ref"),hz=Symbol.for("react.suspense"),fz=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),vz=Symbol.for("react.activity"),gz=Symbol.for("react.view_transition"),Nm=Symbol.iterator;function bz(e){return e===null||typeof e!="object"?null:(e=Nm&&e[Nm]||e["@@iterator"],typeof e=="function"?e:null)}var Zv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jv=Object.assign,Dv={};function wo(e,t,n){this.props=e,this.context=t,this.refs=Dv,this.updater=n||Zv}wo.prototype.isReactComponent={};wo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mv(){}Mv.prototype=wo.prototype;function Pd(e,t,n){this.props=e,this.context=t,this.refs=Dv,this.updater=n||Zv}var Gd=Pd.prototype=new Mv;Gd.constructor=Pd;jv(Gd,wo.prototype);Gd.isPureReactComponent=!0;var Tm=Array.isArray;function pu(){}var Ve={H:null,A:null,T:null,S:null},Lv=Object.prototype.hasOwnProperty;function Yd(e,t,n){var a=n.ref;return{$$typeof:qd,type:e,key:t,ref:a!==void 0?a:null,props:n}}function yz(e,t){return Yd(e.type,t,e.props)}function Xd(e){return typeof e=="object"&&e!==null&&e.$$typeof===qd}function Sz(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zm=/\/+/g;function mc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sz(""+e.key):t.toString(36)}function xz(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(pu,pu):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Cl(e,t,n,a,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case qd:case sz:i=!0;break;case Ov:return i=e._init,Cl(i(e._payload),t,n,a,l)}}if(i)return l=l(e),i=a===""?"."+mc(e,0):a,Tm(l)?(n="",i!=null&&(n=i.replace(zm,"$&/")+"/"),Cl(l,t,n,"",function(d){return d})):l!=null&&(Xd(l)&&(l=yz(l,n+(l.key==null||e&&e.key===l.key?"":(""+l.key).replace(zm,"$&/")+"/")+i)),t.push(l)),1;i=0;var s=a===""?".":a+":";if(Tm(e))for(var c=0;c<e.length;c++)a=e[c],o=s+mc(a,c),i+=Cl(a,t,n,o,l);else if(c=bz(e),typeof c=="function")for(e=c.call(e),c=0;!(a=e.next()).done;)a=a.value,o=s+mc(a,c++),i+=Cl(a,t,n,o,l);else if(o==="object"){if(typeof e.then=="function")return Cl(xz(e),t,n,a,l);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function Ji(e,t,n){if(e==null)return e;var a=[],l=0;return Cl(e,a,"","",function(o){return t.call(n,o,l++)}),a}function Cz(e){if(e._status===-1){var t=e._result,n=t();n.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a,n.status===void 0&&(n.status="fulfilled",n.value=a))},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a,n.status===void 0&&(n.status="rejected",n.reason=a))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Um=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vv(e){var t=Ve.T,n={};n.types=t!==null?t.types:null,Ve.T=n;try{var a=e(),l=Ve.S;l!==null&&l(n,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(pu,Um)}catch(o){Um(o)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ve.T=t}}function Hv(e){var t=Ve.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Vv(Hv.bind(null,e))}var _z={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!Xd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ve.Activity=vz;ve.Children=_z;ve.Component=wo;ve.Fragment=rz;ve.Profiler=uz;ve.PureComponent=Pd;ve.StrictMode=cz;ve.Suspense=hz;ve.ViewTransition=gz;ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ve;ve.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ve.H.useMemoCache(e)}};ve.addTransitionType=Hv;ve.cache=function(e){return function(){return e.apply(null,arguments)}};ve.cacheSignal=function(){return null};ve.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=jv({},e.props),l=e.key;if(t!=null)for(o in t.key!==void 0&&(l=""+t.key),t)!Lv.call(t,o)||o==="key"||o==="__self"||o==="__source"||o==="ref"&&t.ref===void 0||(a[o]=t[o]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var i=Array(o),s=0;s<o;s++)i[s]=arguments[s+2];a.children=i}return Yd(e.type,l,a)};ve.createContext=function(e){return e={$$typeof:pz,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:dz,_context:e},e};ve.createElement=function(e,t,n){var a,l={},o=null;if(t!=null)for(a in t.key!==void 0&&(o=""+t.key),t)Lv.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(l[a]=t[a]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(a in i=e.defaultProps,i)l[a]===void 0&&(l[a]=i[a]);return Yd(e,o,l)};ve.createRef=function(){return{current:null}};ve.forwardRef=function(e){return{$$typeof:mz,render:e}};ve.isValidElement=Xd;ve.lazy=function(e){return{$$typeof:Ov,_payload:{_status:-1,_result:e},_init:Cz}};ve.memo=function(e,t){return{$$typeof:fz,type:e,compare:t===void 0?null:t}};ve.startTransition=Vv;ve.unstable_useCacheRefresh=function(){return Ve.H.useCacheRefresh()};ve.use=function(e){return Ve.H.use(e)};ve.useActionState=function(e,t,n){return Ve.H.useActionState(e,t,n)};ve.useCallback=function(e,t){return Ve.H.useCallback(e,t)};ve.useContext=function(e){return Ve.H.useContext(e)};ve.useDebugValue=function(){};ve.useDeferredValue=function(e,t){return Ve.H.useDeferredValue(e,t)};ve.useEffect=function(e,t){return Ve.H.useEffect(e,t)};ve.useEffectEvent=function(e){return Ve.H.useEffectEvent(e)};ve.useId=function(){return Ve.H.useId()};ve.useImperativeHandle=function(e,t,n){return Ve.H.useImperativeHandle(e,t,n)};ve.useInsertionEffect=function(e,t){return Ve.H.useInsertionEffect(e,t)};ve.useLayoutEffect=function(e,t){return Ve.H.useLayoutEffect(e,t)};ve.useMemo=function(e,t){return Ve.H.useMemo(e,t)};ve.useOptimistic=function(e,t){return Ve.H.useOptimistic(e,t)};ve.useReducer=function(e,t,n){return Ve.H.useReducer(e,t,n)};ve.useRef=function(e){return Ve.H.useRef(e)};ve.useState=function(e){return Ve.H.useState(e)};ve.useSyncExternalStore=function(e,t,n){return Ve.H.useSyncExternalStore(e,t,n)};ve.useTransition=function(){return Ve.H.useTransition()};ve.version="19.3.0";Bv.exports=ve;var B=Bv.exports;function Te(e,t){const n=B.useRef(null);n.current===null&&(n.current=t());const a=B.useCallback(o=>e(i=>{n.current=i,o()}),[e]),l=B.useCallback(()=>n.current,[]);return B.useSyncExternalStore(a,l,l)}function re(...e){const t=[];for(const n of e)if(n){if(typeof n=="string"||typeof n=="number")t.push(String(n));else if(Array.isArray(n)){const a=re(...n);a&&t.push(a)}else if(typeof n=="object")for(const[a,l]of Object.entries(n))l&&t.push(a)}return t.join(" ")}function jt(e){const{value:t,defaultValue:n,size:a="md",disabled:l=!1,loading:o=!1,checkedText:i,uncheckedText:s,checkedColor:c,uncheckedColor:d,beforeChange:m,className:p,style:h,onChange:g,renderLoadingIcon:k,renderCheckedIcon:x,renderUncheckedIcon:S,ref:v}=e,f=!!(i||s),y=B.useRef(null),_=B.useRef({onChange:g,beforeChange:m});_.current={onChange:g,beforeChange:m};const T=B.useRef(null);T.current===null&&(T.current=yv({value:t,defaultValue:n,disabled:l,loading:o,beforeChange:R=>{var O,L;return((L=(O=_.current).beforeChange)==null?void 0:L.call(O,R))??!0},onChange:R=>{var O,L;return(L=(O=_.current).onChange)==null?void 0:L.call(O,R)}}));const N=T.current;B.useEffect(()=>{N.updateOptions({value:t,disabled:l,loading:o})},[N,t,l,o]);const A=Te(N.subscribe,N.getState);return B.useImperativeHandle(v,()=>({focus:()=>{var R;return(R=y.current)==null?void 0:R.focus()},toggle:()=>N.toggle()}),[N]),u.jsx("button",{ref:y,type:"button",role:"switch",className:re("xui-switch",`xui-switch--${a}`,{"is-checked":A.checked,"is-disabled":A.disabled,"is-loading":A.loading,"xui-switch--has-text":f},p),style:{...h,...c?{"--xui-switch-checked-color":c}:{},...d?{"--xui-switch-unchecked-color":d}:{}},"aria-checked":A.checked,"aria-disabled":A.disabled||A.loading,disabled:A.disabled||A.loading,onClick:()=>N.toggle(),children:u.jsxs("span",{className:"xui-switch__core",children:[f&&u.jsxs("span",{className:"xui-switch__text-wrap",children:[i&&u.jsx("span",{className:"xui-switch__text xui-switch__text--checked",title:i,"aria-hidden":"true",children:i}),s&&u.jsx("span",{className:"xui-switch__text xui-switch__text--unchecked",title:s,"aria-hidden":"true",children:s})]}),u.jsx("span",{className:"xui-switch__thumb",children:A.loading?k?k():u.jsx(kz,{}):A.checked?x?x():u.jsx(wz,{}):S?S():u.jsx(Nz,{})})]})})}function kz(){return u.jsx("svg",{className:"xui-switch__spinner",viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.loading}})}function wz(){return u.jsx("svg",{className:"xui-switch__icon xui-switch__icon--checked",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.check}})}function Nz(){return u.jsx("svg",{className:"xui-switch__icon xui-switch__icon--unchecked",viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})}function ws(e){const{value:t,defaultValue:n,disabled:a=!1,indeterminate:l=!1,className:o,style:i,onChange:s,children:c,renderCheckIcon:d,renderIndeterminateIcon:m,ref:p}=e,h=B.useRef(null),g=B.useRef({onChange:s});g.current={onChange:s};const k=B.useRef(null);k.current===null&&(k.current=tv({value:t,defaultValue:n,disabled:a,indeterminate:l,onChange:v=>{var f,y;return(y=(f=g.current).onChange)==null?void 0:y.call(f,v)}}));const x=k.current;B.useEffect(()=>{x.updateOptions({value:t,disabled:a,indeterminate:l})},[x,t,a,l]);const S=Te(x.subscribe,x.getState);return B.useEffect(()=>{h.current&&(h.current.indeterminate=S.indeterminate)},[S.indeterminate]),B.useImperativeHandle(p,()=>({focus:()=>{var v;return(v=h.current)==null?void 0:v.focus()},toggle:()=>x.toggle()}),[x]),u.jsxs("label",{className:re("xui-checkbox",{"is-checked":S.checked,"is-disabled":S.disabled,"is-indeterminate":S.indeterminate},o),style:i,children:[u.jsx("input",{ref:h,type:"checkbox",className:"xui-checkbox__input",checked:S.checked,disabled:S.disabled,"aria-disabled":S.disabled,onChange:()=>x.toggle()}),u.jsx("span",{className:"xui-checkbox__box","aria-hidden":"true",children:S.indeterminate?m?m():u.jsx($m,{name:"minus"}):S.checked?d?d():u.jsx($m,{name:"check"}):null}),c!=null&&u.jsx("span",{className:"xui-checkbox__label",children:c})]})}function $m({name:e}){return u.jsx("svg",{className:"xui-checkbox__icon",viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le[e]}})}function _n(e){const{type:t="default",size:n="md",closable:a=!1,className:l,style:o,onClose:i,renderCloseIcon:s,children:c}=e,d=B.useRef({onClose:i});d.current={onClose:i};const m=B.useRef(null);m.current===null&&(m.current=_v({closable:a,onClose:()=>{var g,k;return(k=(g=d.current).onClose)==null?void 0:k.call(g)}}));const p=m.current;B.useEffect(()=>{p.updateOptions({closable:a})},[p,a]);const h=Te(p.subscribe,p.getState);return h.visible?u.jsxs("span",{className:re("xui-tag",`xui-tag--${t}`,`xui-tag--${n}`,l),style:o,children:[c,h.closable&&u.jsx("button",{type:"button",className:"xui-tag__close","aria-label":"close",onClick:()=>p.handleClose(),children:s?s():u.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})})]}):null}function zl(e){const{type:t="info",title:n,description:a,closable:l=!1,showIcon:o=!1,className:i,style:s,onClose:c,children:d,renderTitle:m,renderIcon:p,renderCloseIcon:h}=e,g=B.useRef({onClose:c});g.current={onClose:c};const k=B.useRef(null);k.current===null&&(k.current=Gf({closable:l,onClose:()=>{var y,_;return(_=(y=g.current).onClose)==null?void 0:_.call(y)}}));const x=k.current;B.useEffect(()=>{x.updateOptions({closable:l})},[x,l]);const S=Te(x.subscribe,x.getState);if(!S.visible)return null;const v=m!==void 0||n!==void 0,f=d!=null||a!==void 0;return u.jsxs("div",{className:re("xui-alert",`xui-alert--${t}`,i),style:s,role:"alert",children:[o&&u.jsx("div",{className:"xui-alert__icon","aria-hidden":"true",children:p?p():u.jsx(Tz,{type:t})}),u.jsxs("div",{className:"xui-alert__content",children:[v&&u.jsx("div",{className:"xui-alert__title",children:m?m():n}),f&&u.jsx("div",{className:"xui-alert__description",children:d??a})]}),S.closable&&u.jsx("button",{type:"button",className:"xui-alert__close","aria-label":"close",onClick:()=>x.handleClose(),children:h?h():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})})]})}function Tz({type:e}){return u.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le[e]}})}const Iv=B.createContext(null);function Ns(e){const{value:t,disabled:n=!1,className:a,style:l,children:o}=e,i=B.useRef(null);i.current===null&&(i.current=fv({disabled:n}));const s=i.current;B.useEffect(()=>{s.updateOptions({disabled:n})},[s,n]);const c=Te(s.subscribe,s.getState),d=B.useContext(Iv),m=d?d.groupValue===t:!1,p=c.disabled||(d?d.groupDisabled:!1),h=()=>{p||d==null||d.select(t)};return u.jsxs("label",{className:re("xui-radio",{"is-checked":m,"is-disabled":p},a),style:l,children:[u.jsx("input",{className:"xui-radio__input",type:"radio",name:d==null?void 0:d.name,value:t,checked:m,disabled:p,"aria-disabled":p,onChange:h}),u.jsx("span",{className:"xui-radio__dot","aria-hidden":"true"}),o!=null&&u.jsx("span",{className:"xui-radio__label",children:o})]})}function mu(e){const{value:t,defaultValue:n,disabled:a=!1,options:l,className:o,style:i,onChange:s,children:c}=e,d=`xui-radio-${B.useId()}`,m=B.useRef({onChange:s});m.current={onChange:s};const p=B.useRef(null);p.current===null&&(p.current=hv({value:t,defaultValue:n,disabled:a,onChange:x=>{var S,v;return(v=(S=m.current).onChange)==null?void 0:v.call(S,x)}}));const h=p.current;B.useEffect(()=>{h.updateOptions({value:t,disabled:a})},[h,t,a]);const g=Te(h.subscribe,h.getState),k=B.useMemo(()=>({name:d,groupValue:g.value,groupDisabled:g.disabled,select:x=>h.select(x)}),[d,g.value,g.disabled,h]);return u.jsx(Iv.Provider,{value:k,children:u.jsx("div",{className:re("xui-radio-group",o),style:i,role:"radiogroup",children:l&&l.length>0?l.map(x=>u.jsx(Ns,{value:x.value,disabled:x.disabled,children:x.label},x.value)):c})})}function Wo(e){const{percent:t=0,type:n="line",strokeWidth:a=6,showText:l=!0,status:o="normal",className:i,style:s}=e,c=B.useRef(null);c.current===null&&(c.current=mv({percent:t,strokeWidth:a,status:o}));const d=c.current;B.useEffect(()=>{d.updateOptions({percent:t,strokeWidth:a,status:o})},[d,t,a,o]);const m=Te(d.subscribe,d.getState),p=`${Math.round(m.percent)}%`,h=(100-m.strokeWidth)/2,g=2*Math.PI*h,k=g*(1-m.percent/100);return u.jsx("div",{className:re("xui-progress",`xui-progress--${n}`,`is-${m.status}`,i),style:s,role:"progressbar","aria-valuenow":Math.round(m.percent),"aria-valuemin":0,"aria-valuemax":100,children:n==="circle"?u.jsxs(u.Fragment,{children:[u.jsxs("svg",{className:"xui-progress__svg",viewBox:"0 0 100 100","aria-hidden":"true",children:[u.jsx("circle",{className:"xui-progress__track",cx:50,cy:50,r:h,fill:"none",strokeWidth:m.strokeWidth}),u.jsx("circle",{className:"xui-progress__bar",cx:50,cy:50,r:h,fill:"none",strokeWidth:m.strokeWidth,strokeLinecap:"round",strokeDasharray:g,strokeDashoffset:k,transform:"rotate(-90 50 50)"})]}),l&&u.jsx("span",{className:"xui-progress__text xui-progress__text--circle",children:p})]}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"xui-progress__track",style:{height:`${m.strokeWidth}px`},children:u.jsx("div",{className:"xui-progress__bar",style:{width:`${m.percent}%`}})}),l&&u.jsx("span",{className:"xui-progress__text",children:p})]})})}function Ul(e){const{count:t,max:n=99,dot:a=!1,showZero:l=!1,className:o,style:i,children:s}=e,c=B.useRef(null);c.current===null&&(c.current=Xf({count:t,max:n,dot:a,showZero:l}));const d=c.current;B.useEffect(()=>{d.updateOptions({count:t,max:n,dot:a,showZero:l})},[d,t,n,a,l]);const m=Te(d.subscribe,d.getState);return s!=null?u.jsxs("span",{className:re("xui-badge",o),style:i,children:[s,m.visible?u.jsx("sup",{className:re("xui-badge__sup",{"is-dot":a}),"aria-hidden":a||void 0,children:m.text}):null]}):m.visible?u.jsx("sup",{className:re("xui-badge__sup","xui-badge__sup--standalone",{"is-dot":a}),"aria-hidden":a||void 0,children:m.text}):null}function ba(e){const{size:t="md",shape:n="circle",src:a,alt:l,className:o,style:i,onError:s,renderIcon:c,children:d}=e,m=B.useRef({onError:s});m.current={onError:s};const p=B.useRef(null);p.current===null&&(p.current=Yf({src:a,onError:()=>{var k,x;return(x=(k=m.current).onError)==null?void 0:x.call(k)}}));const h=p.current;B.useEffect(()=>{h.updateOptions({src:a})},[h,a]);const g=Te(h.subscribe,h.getState);return u.jsx("span",{className:re("xui-avatar",`xui-avatar--${t}`,`xui-avatar--${n}`,o),style:i,children:a&&!g.failed?u.jsx("img",{className:"xui-avatar__img",src:a,alt:l??"",onError:()=>h.handleError()}):d!=null?u.jsx("span",{className:"xui-avatar__inner",children:d}):c?c():u.jsx(zz,{})})}function zz(){return u.jsx("svg",{className:"xui-avatar__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.user}})}function hu(e){const{description:t,className:n,style:a,children:l,renderImage:o}=e,i=B.useRef(null);i.current===null&&(i.current=av({description:t}));const s=i.current;B.useEffect(()=>{s.updateOptions({description:t})},[s,t]);const c=Te(s.subscribe,s.getState);return u.jsxs("div",{className:re("xui-empty",n),style:a,children:[u.jsx("div",{className:"xui-empty__image","aria-hidden":"true",children:o?o():u.jsx(Uz,{})}),c.description&&u.jsx("div",{className:"xui-empty__description",children:c.description}),l!=null&&u.jsx("div",{className:"xui-empty__footer",children:l})]})}function Uz(){return u.jsx("svg",{className:"xui-empty__svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round",dangerouslySetInnerHTML:{__html:le.inbox}})}function On(){return Te(Hf,Lf)}const $z=30;function Gn(e){const{value:t,defaultValue:n,options:a,placeholder:l,disabled:o=!1,clearable:i=!1,multiple:s=!1,searchable:c=!1,virtual:d=!1,maxHeight:m=264,className:p,style:h,onChange:g,onClear:k,renderClearIcon:x,renderSuffixIcon:S,ref:v}=e,f=On(),y=B.useRef(null),_=B.useRef(null),T=B.useRef(null),N=B.useId(),A=B.useId(),R=B.useRef({onChange:g,onClear:k});R.current={onChange:g,onClear:k};const O=B.useRef(null);O.current===null&&(O.current=vv({value:t,defaultValue:n,options:a,disabled:o,clearable:i,multiple:s,searchable:c,onChange:ie=>{var Se,tt;return(tt=(Se=R.current).onChange)==null?void 0:tt.call(Se,ie)},onClear:()=>{var ie,Se;return(Se=(ie=R.current).onClear)==null?void 0:Se.call(ie)}}));const L=O.current,te=B.useRef(null);te.current===null&&(te.current=jr({itemCount:0,itemHeight:$z,viewportHeight:0}));const Z=te.current;B.useEffect(()=>{L.updateOptions({value:t,options:a,disabled:o,clearable:i,multiple:s,searchable:c})},[L,t,a,o,i,s,c]);const F=Te(L.subscribe,L.getState),H=Te(Z.subscribe,Z.getState);B.useImperativeHandle(v,()=>({focus:()=>{var ie;return(ie=_.current)==null?void 0:ie.focus()},toggleOpen:()=>L.toggleOpen(),close:()=>L.close()}),[L]);const[ce,V]=B.useState(!1);B.useLayoutEffect(()=>{if(!F.open){V(!1);return}V(!1);const ie=()=>{const ue=y.current,De=T.current;if(!ue||!De)return;const xe=De.getBoundingClientRect();if(xe.width===0&&xe.height===0)return;const{placement:Ke}=_o(ue.getBoundingClientRect(),xe,ko(),{placement:"bottom",gap:4,viewportPadding:4});V(Ke==="top")},Se=requestAnimationFrame(ie),tt=Co(ie);return()=>{cancelAnimationFrame(Se),tt()}},[F.open]),B.useEffect(()=>{d&&Z.updateOptions({itemCount:F.filteredOptions.length,viewportHeight:m})}),B.useEffect(()=>{const ie=Se=>{y.current&&!y.current.contains(Se.target)&&L.close()};return document.addEventListener("mousedown",ie),()=>document.removeEventListener("mousedown",ie)},[L]);const se=Xs(a??[]),X=se.find(ie=>ie.value===F.value),j=s?(Array.isArray(F.value)?F.value:[]).map(ie=>{const Se=se.find(tt=>tt.value===ie);return{value:ie,label:(Se==null?void 0:Se.label)??ie}}):[],G=s?j.length>0:F.value!==null,Q=F.filteredOptions,de=F.groupedOptions.length>0,Ie=d&&!de,Fe=Ie?Q.slice(H.startIndex,H.endIndex+1):Q,pt={maxHeight:`${m}px`,...d?{height:`${m}px`}:{}};B.useEffect(()=>{var ie,Se;!F.open||!c||(Se=(ie=T.current)==null?void 0:ie.querySelector(".xui-select__search"))==null||Se.focus()},[F.open,c]),B.useEffect(()=>{d&&(Z.scrollTo(0),T.current&&(T.current.scrollTop=0))},[F.searchQuery,d,Z]),B.useEffect(()=>{var ie,Se;!F.open||F.activeIndex===-1||(Se=(ie=document.getElementById(`${A}-option-${F.activeIndex}`))==null?void 0:ie.scrollIntoView)==null||Se.call(ie,{block:"nearest"})},[F.open,F.activeIndex,A]);const Ut=ie=>{switch(ie.key){case"Enter":case" ":ie.preventDefault(),F.open?L.confirmHighlight():L.toggleOpen();break;case"Escape":F.open&&(ie.preventDefault(),L.close());break;case"ArrowDown":ie.preventDefault(),F.open?L.moveHighlight(1):L.toggleOpen();break;case"ArrowUp":ie.preventDefault(),F.open?L.moveHighlight(-1):L.toggleOpen();break}},ra=ie=>{switch(ie.key){case"Enter":ie.preventDefault(),L.confirmHighlight();break;case"ArrowDown":ie.preventDefault(),L.moveHighlight(1);break;case"ArrowUp":ie.preventDefault(),L.moveHighlight(-1);break;case"Escape":ie.preventDefault(),L.close();break}},gn=ie=>s?Array.isArray(F.value)&&F.value.includes(ie):F.value===ie;return u.jsxs("div",{ref:y,className:re("xui-select",p,s&&"is-multiple",d&&"is-virtual",{"is-disabled":F.disabled,"is-open":F.open,"is-drop-up":ce}),style:h,children:[u.jsxs("div",{ref:_,id:N,className:"xui-select__trigger",role:"combobox","aria-expanded":F.open,"aria-haspopup":"listbox","aria-controls":F.open?A:void 0,"aria-activedescendant":F.open&&F.activeIndex!==-1?`${A}-option-${F.activeIndex}`:void 0,"aria-disabled":F.disabled||void 0,tabIndex:F.disabled?-1:0,onClick:()=>L.toggleOpen(),onKeyDown:Ut,children:[s?u.jsxs("span",{className:"xui-select__tags",children:[j.map(ie=>u.jsxs("span",{className:"xui-select__tag",children:[u.jsx("span",{className:"xui-select__tag-label",children:ie.label}),u.jsx("span",{className:"xui-select__tag-close",role:"button","aria-label":"remove",onClick:Se=>{Se.stopPropagation(),L.select(ie.value)},children:x?x():u.jsx("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clear}})})]},ie.value)),j.length===0&&u.jsx("span",{className:"xui-select__placeholder",children:l??f.select.triggerPlaceholder})]}):X?u.jsx("span",{className:"xui-select__value",children:X.label}):u.jsx("span",{className:"xui-select__placeholder",children:l??f.select.triggerPlaceholder}),i&&G&&!F.disabled?u.jsx("span",{className:"xui-select__clear",role:"button","aria-label":"clear",onClick:ie=>{ie.stopPropagation(),L.clear()},children:x?x():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clear}})}):u.jsx("span",{className:"xui-select__arrow","aria-hidden":"true",children:S?S():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-down"]}})})]}),F.open&&u.jsxs("ul",{ref:T,id:A,className:"xui-select__dropdown",role:"listbox","aria-labelledby":N,"aria-multiselectable":s||void 0,style:pt,onScroll:ie=>Z.scrollTo(ie.currentTarget.scrollTop),children:[c&&u.jsx("li",{role:"presentation",className:"xui-select__search-item",children:u.jsx("input",{className:"xui-select__search",type:"text",role:"searchbox",placeholder:f.select.searchPlaceholder,value:F.searchQuery,"aria-label":f.select.searchAriaLabel,onChange:ie=>L.setSearch(ie.currentTarget.value),onKeyDown:ra,onClick:ie=>ie.stopPropagation()})}),Q.length>0?u.jsxs(u.Fragment,{children:[Ie&&H.offsetY>0&&u.jsx("li",{className:"xui-select__spacer",style:{height:`${H.offsetY}px`},"aria-hidden":"true"}),de?F.groupedOptions.map(ie=>u.jsxs("li",{className:"xui-select__group",role:"presentation",children:[u.jsx("div",{className:"xui-select__group-title",children:ie.label}),ie.options.map(Se=>{const tt=Q.findIndex(ue=>ue.value===Se.value);return u.jsx("div",{id:tt>=0?`${A}-option-${tt}`:void 0,className:re("xui-select__option",{"is-selected":gn(Se.value),"is-active":tt===F.activeIndex,"is-disabled":Se.disabled}),role:"option","aria-selected":gn(Se.value),"aria-disabled":Se.disabled||void 0,onClick:()=>L.select(Se.value),children:Se.label},Se.value)})]},ie.label)):Fe.map((ie,Se)=>{const tt=Ie?H.startIndex+Se:Se;return u.jsx("li",{id:`${A}-option-${tt}`,className:re("xui-select__option",{"is-selected":gn(ie.value),"is-active":tt===F.activeIndex,"is-disabled":ie.disabled}),role:"option","aria-selected":gn(ie.value),"aria-disabled":ie.disabled||void 0,onClick:()=>L.select(ie.value),children:ie.label},ie.value)}),Ie&&H.fillerHeight>0&&u.jsx("li",{className:"xui-select__spacer",style:{height:`${H.fillerHeight}px`},"aria-hidden":"true"})]}):u.jsx("li",{className:"xui-select__empty",role:"presentation",children:"无匹配结果"})]})]})}function Fv(e){const{value:t,defaultValue:n,items:a,className:l,style:o,onChange:i,renderPanel:s}=e,c=B.useRef(null),d=B.useId(),m=B.useRef({onChange:i});m.current={onChange:i};const p=B.useRef(null);p.current===null&&(p.current=Cv({value:t,defaultValue:n,items:a,onChange:v=>{var f,y;return(y=(f=m.current).onChange)==null?void 0:y.call(f,v)}}));const h=p.current;B.useEffect(()=>{h.updateOptions({value:t,items:a})},[h,t,a]);const g=Te(h.subscribe,h.getState),k=B.useRef(g.value);B.useEffect(()=>{var v,f;g.value!==null&&g.value!==k.current&&((f=(v=c.current)==null?void 0:v.querySelector(`[data-value="${g.value.replace(/"/g,'\\"')}"]`))==null||f.focus()),k.current=g.value},[g.value]);const x=a==null?void 0:a.find(v=>v.value===g.value),S=v=>{v.key!=="ArrowRight"&&v.key!=="ArrowLeft"||(v.preventDefault(),h.moveActive(v.key==="ArrowRight"?1:-1))};return u.jsxs("div",{ref:c,className:re("xui-tabs",l),style:o,children:[u.jsx("div",{className:"xui-tabs__list",role:"tablist",onKeyDown:S,children:(a??[]).map(v=>u.jsx("button",{id:`${d}-tab-${v.value}`,type:"button",className:re("xui-tabs__tab",{"is-active":v.value===g.value,"is-disabled":v.disabled}),role:"tab","aria-selected":v.value===g.value,"aria-disabled":v.disabled||void 0,"aria-controls":`${d}-panel-${v.value}`,tabIndex:v.value===g.value?0:-1,"data-value":v.value,onClick:()=>h.activate(v.value),children:v.label},v.value))}),x&&u.jsx("div",{id:`${d}-panel-${x.value}`,className:"xui-tabs__panel",role:"tabpanel","aria-labelledby":`${d}-tab-${x.value}`,children:s?s(x):x.label})]})}var Kv={exports:{}},Lr={},qv={exports:{}},Pv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(V,se){var X=V.length;V.push(se);e:for(;0<X;){var j=X-1>>>1,G=V[j];if(0<l(G,se))V[j]=se,V[X]=G,X=j;else break e}}function n(V){return V.length===0?null:V[0]}function a(V){if(V.length===0)return null;var se=V[0],X=V.pop();if(X!==se){V[0]=X;e:for(var j=0,G=V.length,Q=G>>>1;j<Q;){var de=2*(j+1)-1,Ie=V[de],Fe=de+1,pt=V[Fe];if(0>l(Ie,X))Fe<G&&0>l(pt,Ie)?(V[j]=pt,V[Fe]=X,j=Fe):(V[j]=Ie,V[de]=X,j=de);else if(Fe<G&&0>l(pt,X))V[j]=pt,V[Fe]=X,j=Fe;else break e}}return se}function l(V,se){var X=V.sortIndex-se.sortIndex;return X!==0?X:V.id-se.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var c=[],d=[],m=1,p=null,h=3,g=!1,k=!1,x=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function _(V){for(var se=n(d);se!==null;){if(se.callback===null)a(d);else if(se.startTime<=V)a(d),se.sortIndex=se.expirationTime,t(c,se);else break;se=n(d)}}function T(V){if(x=!1,_(V),!k)if(n(c)!==null)k=!0,N||(N=!0,Z());else{var se=n(d);se!==null&&ce(T,se.startTime-V)}}var N=!1,A=-1,R=5,O=-1;function L(){return S?!0:!(e.unstable_now()-O<R)}function te(){if(S=!1,N){var V=e.unstable_now();O=V;var se=!0;try{e:{k=!1,x&&(x=!1,f(A),A=-1),g=!0;var X=h;try{t:{for(_(V),p=n(c);p!==null&&!(p.expirationTime>V&&L());){var j=p.callback;if(typeof j=="function"){p.callback=null,h=p.priorityLevel;var G=j(p.expirationTime<=V);if(V=e.unstable_now(),typeof G=="function"){p.callback=G,_(V),se=!0;break t}p===n(c)&&a(c),_(V)}else a(c);p=n(c)}if(p!==null)se=!0;else{var Q=n(d);Q!==null&&ce(T,Q.startTime-V),se=!1}}break e}finally{p=null,h=X,g=!1}se=void 0}}finally{se?Z():N=!1}}}var Z;if(typeof y=="function")Z=function(){y(te)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,H=F.port2;F.port1.onmessage=te,Z=function(){H.postMessage(null)}}else Z=function(){v(te,0)};function ce(V,se){A=v(function(){V(e.unstable_now())},se)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_next=function(V){switch(h){case 1:case 2:case 3:var se=3;break;default:se=h}var X=h;h=se;try{return V()}finally{h=X}},e.unstable_requestPaint=function(){S=!0},e.unstable_runWithPriority=function(V,se){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=h;h=V;try{return se()}finally{h=X}},e.unstable_scheduleCallback=function(V,se,X){var j=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?j+X:j):X=j,V){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=X+G,V={id:m++,callback:se,priorityLevel:V,startTime:X,expirationTime:G,sortIndex:-1},X>j?(V.sortIndex=X,t(d,V),n(c)===null&&V===n(d)&&(x?(f(A),A=-1):x=!0,ce(T,X-j))):(V.sortIndex=G,t(c,V),k||g||(k=!0,N||(N=!0,Z()))),V},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(V){var se=h;return function(){var X=h;h=se;try{return V.apply(this,arguments)}finally{h=X}}}})(Pv);qv.exports=Pv;var Ez=qv.exports,Gv={exports:{}},Ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Az=B;function Yv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ca(){}var Tt={d:{f:ca,r:function(){throw Error(Yv(522))},D:ca,C:ca,L:ca,m:ca,X:ca,S:ca,M:ca},p:0,findDOMNode:null},Rz=Symbol.for("react.portal"),Bz=Symbol.for("react.recoverable"),Em=Symbol.for("react.optimistic_key");function Oz(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rz,key:a==null?null:a===Em?Em:""+a,children:e,containerInfo:t,implementation:n}}var ei=Az.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Vr(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt;Ct.browser=function(e){return{$$typeof:Bz,_reason:e}};Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Yv(299));return Oz(e,t,null,n)};Ct.flushSync=function(e){var t=ei.T,n=Tt.p;try{if(ei.T=null,Tt.p=2,e)return e()}finally{ei.T=t,Tt.p=n,Tt.d.f()}};Ct.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Tt.d.C(e,t))};Ct.prefetchDNS=function(e){typeof e=="string"&&Tt.d.D(e)};Ct.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,a=Vr(n,t.crossOrigin),l=typeof t.integrity=="string"?t.integrity:void 0,o=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Tt.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:l,fetchPriority:o}):n==="script"&&Tt.d.X(e,{crossOrigin:a,integrity:l,fetchPriority:o,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ct.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Vr(t.as,t.crossOrigin);Tt.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Tt.d.M(e)};Ct.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,a=Vr(n,t.crossOrigin);Tt.d.L(e,n,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ct.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Vr(t.as,t.crossOrigin);Tt.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Tt.d.m(e)};Ct.requestFormReset=function(e){Tt.d.r(e)};Ct.unstable_batchedUpdates=function(e,t){return e(t)};Ct.useFormState=function(e,t,n){return ei.H.useFormState(e,t,n)};Ct.useFormStatus=function(){return ei.H.useHostTransitionStatus()};Ct.version="19.3.0";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(e){console.error(e)}}Xv(),Gv.exports=Ct;var Qd=Gv.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ot=Ez,Qv=B,Zz=Qd;function Y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Jv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Wv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eg(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Am(e){if(ji(e)!==e)throw Error(Y(188))}function jz(e){var t=e.alternate;if(!t){if(t=ji(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Am(l),e;if(o===a)return Am(l),t;o=o.sibling}throw Error(Y(188))}if(n.return!==a.return)n=l,a=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,a=o;break}if(s===a){i=!0,a=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,a=l;break}if(s===a){i=!0,a=o,n=l;break}s=s.sibling}if(!i)throw Error(Y(189))}}if(n.alternate!==a)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function tg(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=tg(e),t!==null)return t;e=e.sibling}return null}function Mt(e,t,n,a,l,o){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,a,l,o)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Mt(e.child,t,n,a,l,o))return!0;e=e.sibling}return!1}function fl(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Rm(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function ng(e){var t=[null,null],n=fl(e);return n===null||ag(t,e,n.child,{foundSelf:!1}),t}function ag(e,t,n,a){for(;n!==null;){if(n===t)a.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(a.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ag(e,t,n.child,a))return!0;n=n.sibling}return!1}function at(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Y(559))}}var $l=null,fu=null;function Dz(e,t,n){return e===n?!0:e===t?($l=e,!0):!1}function Mz(e,t,n){return e===n?(fu=e,!1):e===t?(fu!==null&&($l=e),!0):!1}function Bm(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function vu(e,t,n){for(var a=0,l=e;l;l=n(l))a++;l=0;for(var o=t;o;o=n(o))l++;for(;0<a-l;)e=n(e),a--;for(;0<l-a;)t=n(t),l--;for(;a--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var je=Object.assign,Lz=Symbol.for("react.element"),Wi=Symbol.for("react.transitional.element"),Ko=Symbol.for("react.portal"),El=Symbol.for("react.fragment"),lg=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),og=Symbol.for("react.consumer"),wn=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),yu=Symbol.for("react.suspense_list"),Wd=Symbol.for("react.memo"),ma=Symbol.for("react.lazy"),Su=Symbol.for("react.activity"),Vz=Symbol.for("react.legacy_hidden"),Hz=Symbol.for("react.memo_cache_sentinel"),xu=Symbol.for("react.view_transition"),Iz=Symbol.for("react.recoverable"),Om=Symbol.iterator;function Oo(e){return e===null||typeof e!="object"?null:(e=Om&&e[Om]||e["@@iterator"],typeof e=="function"?e:null)}var Fz=Symbol.for("react.client.reference");function Cu(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fz?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case El:return"Fragment";case gu:return"Profiler";case lg:return"StrictMode";case bu:return"Suspense";case yu:return"SuspenseList";case Su:return"Activity";case xu:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Ko:return"Portal";case wn:return e.displayName||"Context";case og:return(e._context.displayName||"Context")+".Consumer";case Jd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wd:return t=e.displayName||null,t!==null?t:Cu(e.type)||"Memo";case ma:t=e._payload,e=e._init;try{return Cu(e(t))}catch{}}return null}var qo=Array.isArray,fe=Qv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$e=Zz.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Qa={pending:!1,data:null,method:null,action:null},_u=[],Al=-1;function Zn(e){return{current:e}}function vt(e){0>Al||(e.current=_u[Al],_u[Al]=null,Al--)}function He(e,t){Al++,_u[Al]=e.current,e.current=t}var En=Zn(null),vi=Zn(null),wa=Zn(null),Js=Zn(null);function Ws(e,t){switch(He(wa,t),He(vi,e),He(En,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gh(t),e=Ty(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(En),He(En,e)}function oo(){vt(En),vt(vi),vt(wa)}function ku(e){var t=e.memoizedState;t!==null&&(vo._currentValue=t.memoizedState,He(Js,e)),t=En.current;var n=Ty(t,e.type);t!==n&&(He(vi,e),He(En,n))}function er(e){vi.current===e&&(vt(En),vt(vi)),Js.current===e&&(vt(Js),vo._currentValue=Qa)}var hc,Zm;function da(e){if(hc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hc=t&&t[1]||"",Zm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hc+e+Zm}var fc=!1;function vc(e,t){if(!e||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(k){var h=k}Reflect.construct(e,[],p)}else{try{p.call()}catch(k){h=k}p=!1;try{var g=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(g!==void 0?Object.defineProperty(e.prototype,"props",g):delete e.prototype.props)}}}else{try{throw Error()}catch(k){h=k}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(k){if(k&&h&&typeof k.stack=="string")return[k.stack,h.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),i=o[0],s=o[1];if(i&&s){var c=i.split(`
`),d=s.split(`
`);for(l=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;if(a===c.length||l===d.length)for(a=c.length-1,l=d.length-1;1<=a&&0<=l&&c[a]!==d[l];)l--;for(;1<=a&&0<=l;a--,l--)if(c[a]!==d[l]){if(a!==1||l!==1)do if(a--,l--,0>l||c[a]!==d[l]){var m=`
`+c[a].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=a&&0<=l);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?da(n):""}function Kz(e,t){switch(e.tag){case 26:case 27:case 5:return da(e.type);case 16:return da("Lazy");case 13:return e.child!==t&&t!==null?da("Suspense Fallback"):da("Suspense");case 19:return da("SuspenseList");case 0:case 15:return vc(e.type,!1);case 11:return vc(e.type.render,!1);case 1:return vc(e.type,!0);case 31:return da("Activity");case 30:return da("ViewTransition");default:return""}}function jm(e){try{var t="",n=null;do t+=Kz(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var wu=Object.prototype.hasOwnProperty,ep=ot.unstable_scheduleCallback,gc=ot.unstable_cancelCallback,qz=ot.unstable_shouldYield,Pz=ot.unstable_requestPaint,Pt=ot.unstable_now,Gz=ot.unstable_getCurrentPriorityLevel,ig=ot.unstable_ImmediatePriority,sg=ot.unstable_UserBlockingPriority,tr=ot.unstable_NormalPriority,Yz=ot.unstable_LowPriority,rg=ot.unstable_IdlePriority,Xz=ot.log,Qz=ot.unstable_setDisableYieldValue,Di=null,Gt=null;function ya(e){if(typeof Xz=="function"&&Qz(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Di,e)}catch{}}var Yt=Math.clz32?Math.clz32:e2,Jz=Math.log,Wz=Math.LN2;function e2(e){return e>>>=0,e===0?32:31-(Jz(e)/Wz|0)|0}var es=256,ts=262144,ns=4194304;function Ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hr(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~o,a!==0?l=Ka(a):(i&=s,i!==0?l=Ka(i):n||(n=s&~e,n!==0&&(l=Ka(n))))):(s=a&~o,s!==0?l=Ka(s):i!==0?l=Ka(i):n||(n=a&~e,n!==0&&(l=Ka(n)))),l===0?0:t!==0&&t!==l&&!(t&o)&&(o=l&-l,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:l}function Mi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cg(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-Yt(n),l=1<<a;t|=e[a],n&=~l}return t}function t2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ug(){var e=ns;return ns<<=1,!(ns&62914560)&&(ns=4194304),e}function bc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function n2(e,t,n,a,l,o){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,d=e.hiddenUpdates;for(n=i&~n;0<n;){var m=31-Yt(n),p=1<<m;s[m]=0,c[m]=-1;var h=d[m];if(h!==null)for(d[m]=null,m=0;m<h.length;m++){var g=h[m];g!==null&&(g.lane&=-536870913)}n&=~p}a!==0&&dg(e,a,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(i&~t))}function dg(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Yt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function pg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Yt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function mg(e,t){var n=t&-t;return n=n&42?1:tp(n),n&(e.suspendedLanes|t)?0:n}function tp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function np(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function hg(){var e=$e.p;return e!==0?e:(e=window.event,e===void 0?32:Gy(e.type))}function Dm(e,t){var n=$e.p;try{return $e.p=e,t()}finally{$e.p=n}}var oa=Math.random().toString(36).slice(2),ht="__reactFiber$"+oa,Lt="__reactProps$"+oa,No="__reactContainer$"+oa,Mm="__reactEvents$"+oa,a2="__reactListeners$"+oa,l2="__reactHandles$"+oa,Lm="__reactResources$"+oa,Vi="__reactMarker$"+oa,nr="__reactLoad$"+oa;function Ir(e){delete e[ht],delete e[Lt],delete e[a2],delete e[l2]}function Ya(e){var t;if(t=e[ht])return t;for(var n=e.parentNode;n;){if(t=n[No]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nf(e);e!==null;){if(n=e[ht])return n;e=nf(e)}return t}e=n,n=e.parentNode}return null}function To(e){if(e=e[ht]||e[No]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Po(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Y(33))}function Kl(e){var t=e[Lm];return t||(t=e[Lm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ct(e){e[Vi]=!0}function fg(e){e[nr]=void 0}var vg=new Set,gg={};function vl(e,t){io(e,t),io(e+"Capture",t)}function io(e,t){for(gg[e]=t,e=0;e<t.length;e++)vg.add(t[e])}var o2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vm={},Hm={};function i2(e){return wu.call(Hm,e)?!0:wu.call(Vm,e)?!1:o2.test(e)?Hm[e]=!0:(Vm[e]=!0,!1)}var ze=!1;function Im(){var e=ze;return ze=!1,e}function Ts(e,t,n){if(i2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function as(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Dn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,a)}}function It(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function s2(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nu(e){if(!e._valueTracker){var t=bg(e)?"checked":"value";e._valueTracker=s2(e,t,""+e[t])}}function yg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=bg(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}var r2=/[\n"\\]/g;function an(e){return e.replace(r2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Tu(e,t,n,a,l,o,i,s){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+It(t)):e.value!==""+It(t)&&(e.value=""+It(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?i==="number"&&e.value==t?yc(e,It(e.value)):yc(e,It(t)):n!=null?yc(e,It(n)):a!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+It(s):e.removeAttribute("name")}function Sg(e,t,n,a,l,o,i,s){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Nu(e);return}n=n!=null?""+It(n):"",t=t!=null?""+It(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Nu(e)}function yc(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function ql(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function xg(e,t,n){if(t!=null&&(t=""+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+It(n):""}function Cg(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(Y(92));if(qo(a)){if(1<a.length)throw Error(Y(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=It(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Nu(e)}function so(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var c2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fm(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||c2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function _g(e,t,n){if(t!=null&&typeof t!="object")throw Error(Y(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",ze=!0);for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&(Fm(e,l,a),ze=!0)}else for(var o in t)t.hasOwnProperty(o)&&Fm(e,o,t[o])}function ap(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zs(e){return d2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nn(){}var zu=null;function lp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rl=null,Pl=null;function Km(e){var t=To(e);if(t&&(e=t.stateNode)){var n=e[Lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Tu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+an(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Lt]||null;if(!l)throw Error(Y(90));Tu(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&yg(a)}break e;case"textarea":xg(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ql(e,!!n.multiple,t,!1)}}}var Sc=!1;function kg(e,t,n){if(Sc)return e(t,n);Sc=!0;try{var a=e(t);return a}finally{if(Sc=!1,(Rl!==null||Pl!==null)&&(ac(),Rl&&(t=Rl,e=Pl,Pl=Rl=null,Km(t),e)))for(t=0;t<e.length;t++)Km(e[t])}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Lt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(Qn)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{Uu=!1}var Sa=null,op=null,Us=null;function wg(){if(Us)return Us;var e,t=op,n=t.length,a,l="value"in Sa?Sa.value:Sa.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(a=1;a<=i&&t[n-a]===l[o-a];a++);return Us=l.slice(e,1<a?1-a:void 0)}function $s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function qm(){return!1}function zt(e){function t(n,a,l,o,i){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ls:qm,this.isPropagationStopped=qm,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),t}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fr=zt(Va),Hi=je({},Va,{view:0,detail:0}),p2=zt(Hi),xc,Cc,jo,Kr=je({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jo&&(jo&&e.type==="mousemove"?(xc=e.screenX-jo.screenX,Cc=e.screenY-jo.screenY):Cc=xc=0,jo=e),xc)},movementY:function(e){return"movementY"in e?e.movementY:Cc}}),Pm=zt(Kr),m2=je({},Kr,{dataTransfer:0}),h2=zt(m2),f2=je({},Hi,{relatedTarget:0}),_c=zt(f2),v2=je({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),g2=zt(v2),b2=je({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y2=zt(b2),S2=je({},Va,{data:0}),Gm=zt(S2),x2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_2[e])?!!t[e]:!1}function ip(){return k2}var w2=je({},Hi,{key:function(e){if(e.key){var t=x2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(e){return e.type==="keypress"?$s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),N2=zt(w2),T2=je({},Kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=zt(T2),z2=je({},Va,{submitter:0}),U2=zt(z2),$2=je({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),E2=zt($2),A2=je({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),R2=zt(A2),B2=je({},Kr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O2=zt(B2),Z2=je({},Va,{newState:0,oldState:0,source:0}),j2=zt(Z2),D2=[9,13,27,32],sp=Qn&&"CompositionEvent"in window,ti=null;Qn&&"documentMode"in document&&(ti=document.documentMode);var M2=Qn&&"TextEvent"in window&&!ti,Ng=Qn&&(!sp||ti&&8<ti&&11>=ti),Xm=" ",Qm=!1;function Tg(e,t){switch(e){case"keyup":return D2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bl=!1;function L2(e,t){switch(e){case"compositionend":return zg(t);case"keypress":return t.which!==32?null:(Qm=!0,Xm);case"textInput":return e=t.data,e===Xm&&Qm?null:e;default:return null}}function V2(e,t){if(Bl)return e==="compositionend"||!sp&&Tg(e,t)?(e=wg(),Us=op=Sa=null,Bl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ng&&t.locale!=="ko"?null:t.data;default:return null}}var H2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H2[e.type]:t==="textarea"}function Ug(e,t,n,a){Rl?Pl?Pl.push(a):Pl=[a]:Rl=a,t=kr(t,"onChange"),0<t.length&&(n=new Fr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ni=null,bi=null;function I2(e){ky(e,0)}function qr(e){var t=Po(e);if(yg(t))return e}function Wm(e,t){if(e==="change")return t}var $g=!1;if(Qn){var kc;if(Qn){var wc="oninput"in document;if(!wc){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),wc=typeof eh.oninput=="function"}kc=wc}else kc=!1;$g=kc&&(!document.documentMode||9<document.documentMode)}function th(){ni&&(ni.detachEvent("onpropertychange",Eg),bi=ni=null)}function Eg(e){if(e.propertyName==="value"&&qr(bi)){var t=[];Ug(t,bi,e,lp(e)),kg(I2,t)}}function F2(e,t,n){e==="focusin"?(th(),ni=t,bi=n,ni.attachEvent("onpropertychange",Eg)):e==="focusout"&&th()}function K2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qr(bi)}function q2(e,t){if(e==="click")return qr(t)}function P2(e,t){if(e==="input"||e==="change")return qr(t)}function G2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:G2;function yi(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!wu.call(t,l)||!Qt(e[l],t[l]))return!1}return!0}function $u(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ah(e,t){var n=nh(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nh(n)}}function Ag(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ag(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$u(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$u(e.document)}return t}function rp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Y2=Qn&&"documentMode"in document&&11>=document.documentMode,Ol=null,Eu=null,ai=null,Au=!1;function lh(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Au||Ol==null||Ol!==$u(a)||(a=Ol,"selectionStart"in a&&rp(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ai&&yi(ai,a)||(ai=a,a=kr(Eu,"onSelect"),0<a.length&&(t=new Fr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ol)))}function Ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zl={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},Nc={},Bg={};Qn&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete Zl.animationend.animation,delete Zl.animationiteration.animation,delete Zl.animationstart.animation),"TransitionEvent"in window||delete Zl.transitionend.transition);function gl(e){if(Nc[e])return Nc[e];if(!Zl[e])return e;var t=Zl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bg)return Nc[e]=t[n];return e}var Og=gl("animationend"),Zg=gl("animationiteration"),jg=gl("animationstart"),X2=gl("transitionrun"),Q2=gl("transitionstart"),J2=gl("transitioncancel"),Dg=gl("transitionend"),Mg=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function vn(e,t){Mg.set(e,t),vl(t,[e])}var W2=0;function Jn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=fn.identifierPrefix;var n=W2++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function oh(e){if(e==null||typeof e=="string")return e;var t=null,n=eo;if(n!==null)for(var a=0;a<n.length;a++){var l=e[n[a]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function ia(e,t){return e=oh(e),t=oh(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},en=[],jl=0,cp=0;function Pr(){for(var e=jl,t=cp=jl=0;t<e;){var n=en[t];en[t++]=null;var a=en[t];en[t++]=null;var l=en[t];en[t++]=null;var o=en[t];if(en[t++]=null,a!==null&&l!==null){var i=a.pending;i===null?l.next=l:(l.next=i.next,i.next=l),a.pending=l}o!==0&&Lg(n,l,o)}}function Gr(e,t,n,a){en[jl++]=e,en[jl++]=t,en[jl++]=n,en[jl++]=a,cp|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function up(e,t,n,a){return Gr(e,t,n,a),lr(e)}function bl(e,t){return Gr(e,null,null,t),lr(e)}function Lg(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-Yt(n),e=o.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),o):null}function lr(e){if(50<mi)throw mi=0,Ls=null,Error(Y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Dl={};function eU(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,a){return new eU(e,t,n,a)}function dp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Vg(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Es(e,t,n,a,l,o){var i=0;if(a=e,typeof a=="function")dp(a)&&(i=1);else if(typeof a=="string")i=z$(e,n,En.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case Su:return e=Ot(31,n,t,l),e.elementType=Su,e.lanes=o,e;case El:return Ja(n.children,l,o,t);case lg:i=8,l|=24;break;case gu:return e=Ot(12,n,t,l|2),e.elementType=gu,e.lanes=o,e;case bu:return e=Ot(13,n,t,l),e.elementType=bu,e.lanes=o,e;case yu:return e=Ot(19,n,t,l),e.elementType=yu,e.lanes=o,e;case Vz:case xu:return e=l|32,e=Ot(30,n,t,e),e.elementType=xu,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case wn:i=10;break e;case og:i=9;break e;case Jd:i=11;break e;case Wd:i=14;break e;case ma:i=16,a=null;break e}i=29,n=Error(Y(130,e===null?"null":typeof e,"")),a=null}return t=Ot(i,n,t,l),t.elementType=e,t.type=a,t.lanes=o,t}function Ja(e,t,n,a){return e=Ot(7,e,a,t),e.lanes=n,e}function Tc(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Hg(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function zc(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ih=new WeakMap;function ln(e,t){if(typeof e=="object"&&e!==null){var n=ih.get(e);return n!==void 0?n:(t={value:e,source:t,stack:jm(t)},ih.set(e,t),t)}return{value:e,source:t,stack:jm(t)}}var Ml=[],Ll=0,or=null,Si=0,tn=[],nn=0,Za=null,Tn=1,zn="";function Vn(e,t){Ml[Ll++]=Si,Ml[Ll++]=or,or=e,Si=t}function Ig(e,t,n){tn[nn++]=Tn,tn[nn++]=zn,tn[nn++]=Za,Za=e;var a=Tn;e=zn;var l=32-Yt(a)-1;a&=~(1<<l),n+=1;var o=32-Yt(t)+l;if(30<o){var i=l-l%5;o=(a&(1<<i)-1).toString(32),a>>=i,l-=i,Tn=1<<32-Yt(t)+l|n<<l|a,zn=o+e}else Tn=1<<o|n<<l|a,zn=e}function Yr(e){e.return!==null&&(Vn(e,1),Ig(e,1,0))}function pp(e){for(;e===or;)or=Ml[--Ll],Ml[Ll]=null,Si=Ml[--Ll],Ml[Ll]=null;for(;e===Za;)Za=tn[--nn],tn[nn]=null,zn=tn[--nn],tn[nn]=null,Tn=tn[--nn],tn[nn]=null}function Fg(e,t){tn[nn++]=Tn,tn[nn++]=zn,tn[nn++]=Za,Tn=t.id,zn=t.overflow,Za=e}var dt=null,Le=null,be=!1,Na=null,on=!1,Bu=Error(Y(519));function ja(e){var t=Error(Y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xi(ln(t,e)),Bu}function sh(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ht]=e,t[Lt]=a,n){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(n=0;n<wi.length;n++)Ce(wi[n],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),Sg(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Cg(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Ny(t.textContent,n)?(a.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),a.onScroll!=null&&Ce("scroll",t),a.onScrollEnd!=null&&Ce("scrollend",t),a.onClick!=null&&(t.onclick=Nn),t=!0):t=!1,t||ja(e,!0)}function ir(e){for(dt=e.return;dt;)switch(dt.tag){case 5:case 31:case 13:on=!1;return;case 27:case 3:on=!0;return;default:dt=dt.return}}function Sl(e){if(e!==dt)return!1;if(!be)return ir(e),be=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||bd(e.type,e.memoizedProps)),n=!n),n&&Le&&ja(e),ir(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));Le=tf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));Le=tf(e)}else t===27?(t=Le,Ha(e.type)?(e=Cd,Cd=null,Le=e):Le=t):Le=dt?rn(e.stateNode.nextSibling):null;return!0}function ll(){Le=dt=null,be=!1}function Uc(){var e=Na;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),Na=null),e}function xi(e){Na===null?Na=[e]:Na.push(e)}var Ou=Zn(null),yl=null,Fn=null;function xa(e,t,n){He(Ou,t._currentValue),t._currentValue=n}function Xn(e){e._currentValue=Ou.current,vt(Ou)}function As(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Zu(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var i=l.child;o=o.firstContext;e:for(;o!==null;){var s=o;o=l;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),As(o.return,n,e),a||(i=null);break e}o=s.next}}else if(l.tag===18){if(i=l.return,i===null)throw Error(Y(341));i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),As(i,n,e),i=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),As(l.return,n,e),i=l.child,i=i!==null?i.sibling:null):i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===e){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}}function ol(e,t,n,a){e=null;for(var l=t,o=!1;l!==null;){if(!o){if(l.flags&524288)o=!0;else if(l.flags&262144)break}if(l.tag===10){var i=l.alternate;if(i===null)throw Error(Y(387));if(i=i.memoizedProps,i!==null){var s=l.type;Qt(l.pendingProps.value,i.value)||(e!==null?e.push(s):e=[s])}}else if(l===Js.current){if(i=l.alternate,i===null)throw Error(Y(387));i.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(vo):e=[vo])}l=l.return}return e!==null&&Zu(t,e,n,a),t.flags|=262144,e!==null}function sr(e){for(e=e.firstContext;e!==null;){if(!Qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function il(e){yl=e,Fn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return Kg(yl,e)}function os(e,t){return yl===null&&il(e),Kg(e,t)}function Kg(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Fn===null){if(e===null)throw Error(Y(308));Fn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Fn=Fn.next=t;return n}var tU=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},nU=ot.unstable_scheduleCallback,aU=ot.unstable_NormalPriority,We={$$typeof:wn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mp(){return{controller:new tU,data:new Map,refCount:0}}function Ii(e){e.refCount--,e.refCount===0&&nU(aU,function(){e.controller.abort()})}function rh(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var a=t[e];n.indexOf(a)===-1&&n.push(a)}}}var Go=null;function lU(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var li=null,ju=0,sl=0,Gl=null;function oU(e,t){if(li===null){var n=li=[];ju=0,sl=Vp(),Gl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return ju++,t.then(ch,ch),t}function ch(){if(--ju===0&&(Go=null,li!==null)){Gl!==null&&(Gl.status="fulfilled");var e=li;li=null,sl=0,Gl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function iU(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var uh=fe.S;fe.S=function(e,t){if(cy=Pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&oU(e,t),Go!==null)for(var n=mo;n!==null;)rh(n,Go),n=n.next;if(n=e.types,n!==null){for(var a=mo;a!==null;)rh(a,n),a=a.next;if(sl!==0){a=Go,a===null&&(a=Go=[]);for(var l=0;l<n.length;l++){var o=n[l];a.indexOf(o)===-1&&a.push(o)}}}uh!==null&&uh(e,t)};var Wa=Zn(null);function hp(){var e=Wa.current;return e!==null?e:Ze.pooledCache}function Rs(e,t){t===null?He(Wa,Wa.current):He(Wa,t.pool)}function qg(){var e=hp();return e===null?null:{parent:We._currentValue,pool:e}}var zo=Error(Y(460)),fp=Error(Y(474)),Xr=Error(Y(542)),rr={then:function(){}};function dh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pg(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Nn,Nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mh(e),e===void 0&&!("reason"in t)?Error(Y(600)):e;default:if(typeof t.status=="string")t.then(Nn,Nn);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(Y(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mh(e),e}throw el=t,zo}}function qa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(el=n,zo):n}}var el=null;function ph(){if(el===null)throw Error(Y(459));var e=el;return el=null,e}function mh(e){if(e===zo||e===Xr)throw Error(Y(483))}var Yl=null,Ci=0;function is(e){var t=Ci;return Ci+=1,Yl===null&&(Yl=[]),Pg(Yl,e,t)}function ua(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ss(e,t){throw t.$$typeof===Lz?Error(Y(525)):(e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gg(e){function t(v,f){if(e){var y=v.deletions;y===null?(v.deletions=[f],v.flags|=16):y.push(f)}}function n(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function a(v){for(var f=new Map;v!==null;)v.key===null?f.set(v.index,v):f.set(v.key,v),v=v.sibling;return f}function l(v,f){return v=Yn(v,f),v.index=0,v.sibling=null,v}function o(v,f,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<f?(v.flags|=2,f):y):(v.flags|=134217730,f)):(v.flags|=1048576,f)}function i(v){return e&&v.alternate===null&&(v.flags|=134217730),v}function s(v,f,y,_){return f===null||f.tag!==6?(f=Tc(y,v.mode,_),f.return=v,f):(f=l(f,y),f.return=v,f)}function c(v,f,y,_){var T=y.type;return T===El?(v=m(v,f,y.props.children,_,y.key),ua(v,y),v):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ma&&qa(T)===f.type)?(f=l(f,y.props),ua(f,y),f.return=v,f):(f=Es(y.type,y.key,y.props,null,v.mode,_),ua(f,y),f.return=v,f)}function d(v,f,y,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=zc(y,v.mode,_),f.return=v,f):(f=l(f,y.children||[]),f.return=v,f)}function m(v,f,y,_,T){return f===null||f.tag!==7?(f=Ja(y,v.mode,_,T),f.return=v,f):(f=l(f,y),f.return=v,f)}function p(v,f,y){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Tc(""+f,v.mode,y),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wi:return y=Es(f.type,f.key,f.props,null,v.mode,y),ua(y,f),y.return=v,y;case Ko:return f=zc(f,v.mode,y),f.return=v,f;case ma:return f=qa(f),p(v,f,y)}if(qo(f)||Oo(f))return f=Ja(f,v.mode,y,null),f.return=v,f;if(typeof f.then=="function")return p(v,is(f),y);if(f.$$typeof===wn)return p(v,os(v,f),y);ss(v,f)}return null}function h(v,f,y,_){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:s(v,f,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wi:return y.key===T?c(v,f,y,_):null;case Ko:return y.key===T?d(v,f,y,_):null;case ma:return y=qa(y),h(v,f,y,_)}if(qo(y)||Oo(y))return T!==null?null:m(v,f,y,_,null);if(typeof y.then=="function")return h(v,f,is(y),_);if(y.$$typeof===wn)return h(v,f,os(v,y),_);ss(v,y)}return null}function g(v,f,y,_,T){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return v=v.get(y)||null,s(f,v,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wi:return v=v.get(_.key===null?y:_.key)||null,c(f,v,_,T);case Ko:return v=v.get(_.key===null?y:_.key)||null,d(f,v,_,T);case ma:return _=qa(_),g(v,f,y,_,T)}if(qo(_)||Oo(_))return v=v.get(y)||null,m(f,v,_,T,null);if(typeof _.then=="function")return g(v,f,y,is(_),T);if(_.$$typeof===wn)return g(v,f,y,os(f,_),T);ss(f,_)}return null}function k(v,f,y,_){for(var T=null,N=null,A=f,R=f=0,O=null;A!==null&&R<y.length;R++){A.index>R?(O=A,A=null):O=A.sibling;var L=h(v,A,y[R],_);if(L===null){A===null&&(A=O);break}e&&A&&L.alternate===null&&t(v,A),f=o(L,f,R),N===null?T=L:N.sibling=L,N=L,A=O}if(R===y.length)return n(v,A),be&&Vn(v,R),T;if(A===null){for(;R<y.length;R++)A=p(v,y[R],_),A!==null&&(f=o(A,f,R),N===null?T=A:N.sibling=A,N=A);return be&&Vn(v,R),T}for(A=a(A);R<y.length;R++)O=g(A,v,R,y[R],_),O!==null&&(e&&(L=O.alternate,L!==null&&A.delete(L.key===null?R:L.key)),f=o(O,f,R),N===null?T=O:N.sibling=O,N=O);return e&&A.forEach(function(te){return t(v,te)}),be&&Vn(v,R),T}function x(v,f,y,_){if(y==null)throw Error(Y(151));for(var T=null,N=null,A=f,R=f=0,O=null,L=y.next();A!==null&&!L.done;R++,L=y.next()){A.index>R?(O=A,A=null):O=A.sibling;var te=h(v,A,L.value,_);if(te===null){A===null&&(A=O);break}e&&A&&te.alternate===null&&t(v,A),f=o(te,f,R),N===null?T=te:N.sibling=te,N=te,A=O}if(L.done)return n(v,A),be&&Vn(v,R),T;if(A===null){for(;!L.done;R++,L=y.next())L=p(v,L.value,_),L!==null&&(f=o(L,f,R),N===null?T=L:N.sibling=L,N=L);return be&&Vn(v,R),T}for(A=a(A);!L.done;R++,L=y.next())L=g(A,v,R,L.value,_),L!==null&&(e&&(O=L.alternate,O!==null&&A.delete(O.key===null?R:O.key)),f=o(L,f,R),N===null?T=L:N.sibling=L,N=L);return e&&A.forEach(function(Z){return t(v,Z)}),be&&Vn(v,R),T}function S(v,f,y,_){if(typeof y=="object"&&y!==null&&y.type===El&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Wi:e:{for(var T=y.key;f!==null;){if(f.key===T){if(T=y.type,T===El){if(f.tag===7){n(v,f.sibling),_=l(f,y.props.children),ua(_,y),_.return=v,v=_;break e}}else if(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ma&&qa(T)===f.type){n(v,f.sibling),_=l(f,y.props),ua(_,y),_.return=v,v=_;break e}n(v,f);break}else t(v,f);f=f.sibling}y.type===El?(_=Ja(y.props.children,v.mode,_,y.key),ua(_,y),_.return=v,v=_):(_=Es(y.type,y.key,y.props,null,v.mode,_),ua(_,y),_.return=v,v=_)}return i(v);case Ko:e:{for(T=y.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(v,f.sibling),_=l(f,y.children||[]),_.return=v,v=_;break e}else{n(v,f);break}else t(v,f);f=f.sibling}_=zc(y,v.mode,_),_.return=v,v=_}return i(v);case ma:return y=qa(y),S(v,f,y,_)}if(qo(y))return k(v,f,y,_);if(Oo(y)){if(T=Oo(y),typeof T!="function")throw Error(Y(150));return y=T.call(y),x(v,f,y,_)}if(typeof y.then=="function")return S(v,f,is(y),_);if(y.$$typeof===wn)return S(v,f,os(v,y),_);ss(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,f!==null&&f.tag===6?(n(v,f.sibling),_=l(f,y),_.return=v,v=_):(n(v,f),_=Tc(y,v.mode,_),_.return=v,v=_),i(v)):n(v,f)}return function(v,f,y,_){try{Ci=0;var T=S(v,f,y,_);return Yl=null,T}catch(A){if(A===zo||A===Xr)throw A;var N=Ot(29,A,null,v.mode);return N.lanes=_,N.return=v,N}finally{}}}var rl=Gg(!0),Yg=Gg(!1),ha=!1;function vp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Ue&2){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=lr(e),Lg(e,null,n),t}return Gr(e,a,t,n),lr(e)}function oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,pg(e,n)}}function $c(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Mu=!1;function ii(){if(Mu){var e=Gl;if(e!==null)throw e}}function si(e,t,n,a){Mu=!1;var l=e.updateQueue;ha=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var c=s,d=c.next;c.next=null,i===null?o=d:i.next=d,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=c))}if(o!==null){var p=l.baseState;i=0,m=d=c=null,s=o;do{var h=s.lane&-536870913,g=h!==s.lane;if(g?(we&h)===h:(a&h)===h){h!==0&&h===sl&&(Mu=!0),m!==null&&(m=m.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var k=e,x=s;h=t;var S=n;switch(x.tag){case 1:if(k=x.payload,typeof k=="function"){p=k.call(S,p,h);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(S,p,h):k,h==null)break e;p=je({},p,h);break e;case 2:ha=!0}}h=s.callback,h!==null&&(e.flags|=64,g&&(e.flags|=8192),g=l.callbacks,g===null?l.callbacks=[h]:g.push(h))}else g={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=g,c=p):m=m.next=g,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);m===null&&(c=p),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=m,o===null&&(l.shared.lanes=0),La|=i,e.lanes=i,e.memoizedState=p}}function Xg(e,t){if(typeof e!="function")throw Error(Y(191,e));e.call(t)}function Qg(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xg(n[e],t)}var Da=Zn(null),cr=Zn(0);function hh(e,t){e=na,He(cr,e),He(Da,t),na=e|t.baseLanes}function Lu(){He(cr,na),He(Da,Da.current)}function gp(){na=cr.current,vt(Da),vt(cr)}var yt=Zn(null),xt=null;function Ua(e){var t=e.alternate;He(gt,gt.current&1),He(yt,e),xt===null&&(t===null||Da.current!==null||t.memoizedState!==null)&&(xt=e)}function Vu(e){He(gt,gt.current),He(yt,e),xt===null&&(xt=e)}function Jg(e){e.tag===22?(He(gt,gt.current),He(yt,e),xt===null&&(xt=e)):$a()}function $a(){He(gt,gt.current),He(yt,yt.current)}function Ft(e){vt(yt),xt===e&&(xt=null),vt(gt)}var gt=Zn(0);function _i(e,t){He(yt,yt.current),He(gt,t)}function bp(e){vt(gt),vt(yt),xt===e&&(xt=null)}function ur(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||xd(n)||Kp(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wn=0,ge=null,Oe=null,Je=null,dr=!1,Xl=!1,cl=!1,pr=0,ki=0,Ql=null,sU=0;function Ye(){throw Error(Y(321))}function yp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function Sp(e,t,n,a,l,o){return Wn=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fe.H=e===null||e.memoizedState===null?Ub:$b,cl=!1,o=n(a,l),cl=!1,Xl&&(o=eb(t,n,a,l)),Wg(e),o}function Wg(e){fe.H=mr;var t=Oe!==null&&Oe.next!==null;if(Wn=0,Je=Oe=ge=null,dr=!1,ki=0,Ql=null,t)throw Error(Y(300));e===null||et||(e=e.dependencies,e!==null&&sr(e)&&(et=!0))}function eb(e,t,n,a){ge=e;var l=0;do{if(Xl&&(Ql=null),ki=0,Xl=!1,25<=l)throw Error(Y(301));if(l+=1,Je=Oe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}fe.H=fU,o=t(n,a)}while(Xl);return o}function rU(){var e=fe.H,t=e.useState()[0];return t=typeof t.then=="function"?Fi(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ge.flags|=1024),t}function xp(){var e=pr!==0;return pr=0,e}function Cp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function _p(e){if(dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dr=!1}Wn=0,Je=Oe=ge=null,Xl=!1,ki=pr=0,Ql=null}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ge.memoizedState=Je=e:Je=Je.next=e,Je}function Qe(){if(Oe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Je===null?ge.memoizedState:Je.next;if(t!==null)Je=t,Oe=e;else{if(e===null)throw ge.alternate===null?Error(Y(467)):Error(Y(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Je===null?ge.memoizedState=Je=e:Je=Je.next=e}return Je}function Qr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fi(e){var t=ki;return ki+=1,Ql===null&&(Ql=[]),e=Pg(Ql,e,t),t=ge,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,fe.H=t===null||t.memoizedState===null?Ub:$b),e}function Jr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fi(e);if(e.$$typeof===Iz)return;if(e.$$typeof===wn)return ft(e)}throw Error(Y(438,String(e)))}function kp(e){var t=null,n=ge.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ge.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Qr(),ge.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Hz;return t.index++,n}function ea(e,t){return typeof t=="function"?t(e):t}function Bs(e){var t=Qe();return wp(t,Oe,e)}function wp(e,t,n){var a=e.queue;if(a===null)throw Error(Y(311));a.lastRenderedReducer=n;var l=e.baseQueue,o=a.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}t.baseQueue=l=o,a.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var s=i=null,c=null,d=t,m=!1;do{var p=d.lane&-536870913;if(p!==d.lane?(we&p)===p:(Wn&p)===p){var h=d.revertLane;if(h===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),p===sl&&(m=!0);else if((Wn&h)===h){d=d.next,h===sl&&(m=!0);continue}else p={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},c===null?(s=c=p,i=o):c=c.next=p,ge.lanes|=h,La|=h;p=d.action,cl&&n(o,p),o=d.hasEagerState?d.eagerState:n(o,p)}else h={lane:p,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},c===null?(s=c=h,i=o):c=c.next=h,ge.lanes|=p,La|=p;d=d.next}while(d!==null&&d!==t);if(c===null?i=o:c.next=s,!Qt(o,e.memoizedState)&&(et=!0,m&&(n=Gl,n!==null)))throw n;e.memoizedState=o,e.baseState=i,e.baseQueue=c,a.lastRenderedState=o}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ec(e){var t=Qe(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Qt(o,t.memoizedState)||(et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function tb(e,t,n){var a=ge,l=Qe(),o=be;if(o){if(n===void 0)throw Error(Y(407));n=n()}else n=t();var i=!Qt((Oe||l).memoizedState,n);if(i&&(l.memoizedState=n,et=!0),l=l.queue,Np(lb.bind(null,a,l,e),[e]),e=l.getSnapshot!==t||i||Je!==null&&(Je.memoizedState.tag&1)!==0,ro(e?9:8,{destroy:void 0},ab.bind(null,a,l,n,t),null),e){if(a.flags|=2048,Ze===null)throw Error(Y(349));o||Wn&127||nb(a,t,n)}return n}function nb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t=Qr(),ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ab(e,t,n,a){t.value=n,t.getSnapshot=a,ob(t)&&ib(e)}function lb(e,t,n){return n(function(){ob(t)&&ib(e)})}function ob(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function ib(e){var t=bl(e,2);t!==null&&Dt(t,e,2)}function Hu(e){var t=wt();if(typeof e=="function"){var n=e;if(e=n(),cl){ya(!0);try{n()}finally{ya(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function sb(e,t,n,a){return e.baseState=n,wp(e,Oe,typeof a=="function"?a:ea)}function cU(e,t,n,a,l){if(ec(e))throw Error(Y(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){o.listeners.push(i)}};fe.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,rb(t,o)):(o.next=n.next,t.pending=n.next=o)}}function rb(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var o=fe.T,i={};i.types=o!==null?o.types:null,fe.T=i;try{var s=n(l,a),c=fe.S;c!==null&&c(i,s),fh(e,t,s)}catch(d){Iu(e,t,d)}finally{o!==null&&i.types!==null&&(o.types=i.types),fe.T=o}}else try{o=n(l,a),fh(e,t,o)}catch(d){Iu(e,t,d)}}function fh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){vh(e,t,a)},function(a){return Iu(e,t,a)}):vh(e,t,n)}function vh(e,t,n){t.status="fulfilled",t.value=n,cb(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,rb(e,n)))}function Iu(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,cb(t),t=t.next;while(t!==a)}e.action=null}function cb(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ub(e,t){return t}function gh(e,t){if(be){var n=Ze.formState;if(n!==null){e:{var a=ge;if(be){if(Le){t:{for(var l=Le,o=on;l.nodeType!==8;){if(!o){l=null;break t}if(l=rn(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){Le=rn(l.nextSibling),a=l.data==="F!";break e}}ja(a)}a=!1}a&&(t=n[0])}}return n=wt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ub,lastRenderedState:t},n.queue=a,n=Nb.bind(null,ge,a),a.dispatch=n,a=Hu(!1),o=$p.bind(null,ge,!1,a.queue),a=wt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=cU.bind(null,ge,l,o,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function bh(e){var t=Qe();return db(t,Oe,e)}function db(e,t,n){if(t=wp(e,t,ub)[0],e=Bs(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fi(t)}catch(i){throw i===zo?Xr:i}else a=t;t=Qe();var l=t.queue,o=l.dispatch;return n!==t.memoizedState&&(ge.flags|=2048,ro(9,{destroy:void 0},uU.bind(null,l,n),null)),[a,o,e]}function uU(e,t){e.action=t}function yh(e){var t=Qe(),n=Oe;if(n!==null)return db(t,n,e);Qe(),t=t.memoizedState,n=Qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ro(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ge.updateQueue,t===null&&(t=Qr(),ge.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function pb(){return Qe().memoizedState}function Os(e,t,n,a){var l=wt();ge.flags|=e,l.memoizedState=ro(1|t,{destroy:void 0},n,a===void 0?null:a)}function Wr(e,t,n,a){var l=Qe();a=a===void 0?null:a;var o=l.memoizedState.inst;Oe!==null&&a!==null&&yp(a,Oe.memoizedState.deps)?l.memoizedState=ro(t,o,n,a):(ge.flags|=e,l.memoizedState=ro(1|t,o,n,a))}function Sh(e,t){Os(8390656,8,e,t)}function Np(e,t){Wr(2048,8,e,t)}function dU(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=Qr(),ge.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function mb(e){var t=Qe().memoizedState;return dU({ref:t,nextImpl:e}),function(){if(Ue&2)throw Error(Y(440));return t.impl.apply(void 0,arguments)}}function hb(e,t){return Wr(4,2,e,t)}function fb(e,t){return Wr(4,4,e,t)}function vb(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gb(e,t,n){n=n!=null?n.concat([e]):null,Wr(4,4,vb.bind(null,t,e),n)}function Tp(){}function bb(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&yp(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function yb(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&yp(t,a[1]))return a[0];if(a=e(),cl){ya(!0);try{e()}finally{ya(!1)}}return n.memoizedState=[a,t],a}function zp(e,t,n){return n===void 0||Wn&1073741824&&!(we&261930)?e.memoizedState=t:(e.memoizedState=n,e=dy(),ge.lanes|=e,La|=e,n)}function Sb(e,t,n,a){return Qt(n,t)?n:Da.current!==null?(e=zp(e,n,a),Qt(e,t)||(et=!0),e):!(Wn&106)||Wn&1073741824&&!(we&261930)?(et=!0,e.memoizedState=n):(e=dy(),ge.lanes|=e,La|=e,t)}function xb(e,t,n,a,l){var o=$e.p;$e.p=o!==0&&8>o?o:8;var i=fe.T,s={};s.types=i!==null?i.types:null,fe.T=s,$p(e,!1,t,n);try{var c=l(),d=fe.S;if(d!==null&&d(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var m=iU(c,a);ri(e,t,m,Xt(e))}else ri(e,t,a,Xt(e))}catch(p){ri(e,t,{then:function(){},status:"rejected",reason:p},Xt())}finally{$e.p=o,i!==null&&s.types!==null&&(i.types=s.types),fe.T=i}}function pU(){}function Fu(e,t,n,a){if(e.tag!==5)throw Error(Y(476));var l=Cb(e).queue;xb(e,l,t,Qa,n===null?pU:function(){return _b(e),n(a)})}function Cb(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Qa,baseState:Qa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:Qa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _b(e){var t=Cb(e);t.next===null&&(t=e.alternate.memoizedState),ri(e,t.next.queue,{},Xt())}function Up(){return ft(vo)}function kb(){return Qe().memoizedState}function wb(){return Qe().memoizedState}function mU(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Xt();e=Ta(n);var a=za(t,e,n);a!==null&&(Dt(a,t,n),oi(a,t,n)),t={cache:mp()},e.payload=t;return}t=t.return}}function hU(e,t,n){var a=Xt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ec(e)?Tb(t,n):(n=up(e,t,n,a),n!==null&&(Dt(n,e,a),zb(n,t,a)))}function Nb(e,t,n){var a=Xt();ri(e,t,n,a)}function ri(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ec(e))Tb(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Qt(s,i))return Gr(e,t,l,0),Ze===null&&Pr(),!1}catch{}finally{}if(n=up(e,t,l,a),n!==null)return Dt(n,e,a),zb(n,t,a),!0}return!1}function $p(e,t,n,a){if(a={lane:2,revertLane:Vp(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ec(e)){if(t)throw Error(Y(479))}else t=up(e,n,a,2),t!==null&&Dt(t,e,2)}function ec(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Tb(e,t){Xl=dr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zb(e,t,n){if(n&4194048){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,pg(e,n)}}var mr={readContext:ft,use:Jr,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye,useEffectEvent:Ye},Ub={readContext:ft,use:Jr,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Sh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Os(4194308,4,vb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Os(4194308,4,e,t)},useInsertionEffect:function(e,t){Os(4,2,e,t)},useMemo:function(e,t){var n=wt();t=t===void 0?null:t;var a=e();if(cl){ya(!0);try{e()}finally{ya(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=wt();if(n!==void 0){var l=n(t);if(cl){ya(!0);try{n(t)}finally{ya(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=hU.bind(null,ge,e),[a.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:function(e){e=Hu(e);var t=e.queue,n=Nb.bind(null,ge,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Tp,useDeferredValue:function(e,t){var n=wt();return zp(n,e,t)},useTransition:function(){var e=Hu(!1);return e=xb.bind(null,ge,e.queue,!0,!1),wt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ge,l=wt();if(be){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),Ze===null)throw Error(Y(349));we&127||nb(a,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Sh(lb.bind(null,a,o,e),[e]),a.flags|=2048,ro(9,{destroy:void 0},ab.bind(null,a,o,n,t),null),n},useId:function(){var e=wt(),t=Ze.identifierPrefix;if(be){var n=zn,a=Tn;n=(a&~(1<<32-Yt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=sU++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Up,useFormState:gh,useActionState:gh,useOptimistic:function(e){var t=wt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=$p.bind(null,ge,!0,n),n.dispatch=t,[e,t]},useMemoCache:kp,useCacheRefresh:function(){return wt().memoizedState=mU.bind(null,ge)},useEffectEvent:function(e){var t=wt(),n={impl:e};return t.memoizedState=n,function(){if(Ue&2)throw Error(Y(440));return n.impl.apply(void 0,arguments)}}},$b={readContext:ft,use:Jr,useCallback:bb,useContext:ft,useEffect:Np,useImperativeHandle:gb,useInsertionEffect:hb,useLayoutEffect:fb,useMemo:yb,useReducer:Bs,useRef:pb,useState:function(){return Bs(ea)},useDebugValue:Tp,useDeferredValue:function(e,t){var n=Qe();return Sb(n,Oe.memoizedState,e,t)},useTransition:function(){var e=Bs(ea)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Fi(e),t]},useSyncExternalStore:tb,useId:kb,useHostTransitionStatus:Up,useFormState:bh,useActionState:bh,useOptimistic:function(e,t){var n=Qe();return sb(n,Oe,e,t)},useMemoCache:kp,useCacheRefresh:wb,useEffectEvent:mb},fU={readContext:ft,use:Jr,useCallback:bb,useContext:ft,useEffect:Np,useImperativeHandle:gb,useInsertionEffect:hb,useLayoutEffect:fb,useMemo:yb,useReducer:Ec,useRef:pb,useState:function(){return Ec(ea)},useDebugValue:Tp,useDeferredValue:function(e,t){var n=Qe();return Oe===null?zp(n,e,t):Sb(n,Oe.memoizedState,e,t)},useTransition:function(){var e=Ec(ea)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Fi(e),t]},useSyncExternalStore:tb,useId:kb,useHostTransitionStatus:Up,useFormState:yh,useActionState:yh,useOptimistic:function(e,t){var n=Qe();return Oe!==null?sb(n,Oe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:kp,useCacheRefresh:wb,useEffectEvent:mb};function Ac(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ku={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Xt(),l=Ta(a);l.payload=t,n!=null&&(l.callback=n),t=za(e,l,a),t!==null&&(Dt(t,e,a),oi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Xt(),l=Ta(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=za(e,l,a),t!==null&&(Dt(t,e,a),oi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xt(),a=Ta(n);a.tag=2,t!=null&&(a.callback=t),t=za(e,a,n),t!==null&&(Dt(t,e,n),oi(t,e,n))}};function xh(e,t,n,a,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,i):t.prototype&&t.prototype.isPureReactComponent?!yi(n,a)||!yi(l,o):!0}function Ch(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ku.enqueueReplaceState(t,t.state,null)}function ul(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=je({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Eb(e){ar(e)}function Ab(e){console.error(e)}function Rb(e){ar(e)}function hr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function _h(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function qu(e,t,n){return n=Ta(n),n.tag=3,n.payload={element:null},n.callback=function(){hr(e,t)},n}function Bb(e){return e=Ta(e),e.tag=3,e}function Ob(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=a.value;e.payload=function(){return l(o)},e.callback=function(){_h(t,n,a)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){_h(t,n,a),typeof l!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function vU(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ol(t,n,l,!0),n=yt.current,n!==null){switch(n.tag){case 31:case 13:case 19:return xt===null?Cr():n.alternate===null&&Xe===0&&(Xe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===rr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Mc(e,a,l)),!1;case 22:return n.flags|=65536,a===rr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Mc(e,a,l)),!1}throw Error(Y(435,n.tag))}return Mc(e,a,l),Cr(),!1}if(be)return t=yt.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Bu&&(e=Error(Y(422),{cause:a}),xi(ln(e,n)))):(a!==Bu&&(t=Error(Y(423),{cause:a}),xi(ln(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=ln(a,n),l=qu(e.stateNode,a,l),$c(e,l),Xe!==4&&(Xe=2)),!1;var o=Error(Y(520),{cause:a});if(o=ln(o,n),pi===null?pi=[o]:pi.push(o),Xe!==4&&(Xe=2),t===null)return!0;a=ln(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=qu(n.stateNode,a,e),$c(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Ea===null||!Ea.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Bb(l),Ob(l,e,n,a),$c(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Ep=Error(Y(461)),et=!1;function nt(e,t,n,a){t.child=e===null?Yg(t,null,n,a):rl(t,e.child,n,a)}function kh(e,t,n,a,l){n=n.render;var o=t.ref;if("ref"in a){var i={};for(var s in a)s!=="ref"&&(i[s]=a[s])}else i=a;return il(t),a=Sp(e,t,n,i,o,l),s=xp(),e!==null&&!et?(Cp(e,t,l),ta(e,t,l)):(be&&s&&Yr(t),t.flags|=1,nt(e,t,a,l),t.child)}function wh(e,t,n,a,l){if(e===null){var o=n.type;return typeof o=="function"&&!dp(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,Zb(e,t,o,a,l)):(e=Es(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Rp(e,l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:yi,n(i,a)&&e.ref===t.ref)return ta(e,t,l)}return t.flags|=1,e=Yn(o,a),e.ref=t.ref,e.return=t,t.child=e}function Zb(e,t,n,a,l){if(e!==null){var o=e.memoizedProps;if(yi(o,a)&&e.ref===t.ref)if(et=!1,t.pendingProps=a=o,Rp(e,l))e.flags&131072&&(et=!0);else return t.lanes=e.lanes,ta(e,t,l)}return Pu(e,t,n,a,l)}function jb(e,t,n,a){var l=a.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(o=o!==null?o.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~o}else a=0,t.child=null;return Nh(e,t,o,n,a)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rs(t,o!==null?o.cachePool:null),o!==null?hh(t,o):Lu(),Jg(t);else return a=t.lanes=536870912,Nh(e,t,o!==null?o.baseLanes|n:n,n,a)}else o!==null?(Rs(t,o.cachePool),hh(t,o),$a(),t.memoizedState=null):(e!==null&&Rs(t,null),Lu(),$a());return nt(e,t,l,n),t.child}function ci(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nh(e,t,n,a,l){var o=hp();return o=o===null?null:{parent:We._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&Rs(t,null),Lu(),Jg(t),e!==null&&ol(e,t,a,!0),t.childLanes=l,null}function Zs(e,t){return t=tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Th(e,t,n){return rl(t,e.child,null,n),e=Zs(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function gU(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(be){if(a.mode==="hidden")return e=Zs(t,a),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},ci(null,e);if(Vu(t),(e=Le)?(e=Zy(e,on),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Za!==null?{id:Tn,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},n=Hg(e),n.return=t,t.child=n,dt=t,Le=null)):e=null,e===null)throw ja(t);return t.lanes=536870912,null}return Zs(t,a)}var o=e.memoizedState;if(o!==null){var i=o.dehydrated;if(Vu(t),l)if(t.flags&256)t.flags&=-257,t=Th(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Y(558));else if(et||ol(e,t,n,!1),l=(n&e.childLanes)!==0,et||l){if(Da.current===null){if(a=Ze,a!==null&&(i=mg(a,n),i!==0&&i!==o.retryLane))throw o.retryLane=i,bl(e,i),Dt(a,e,i),Ep;Cr()}t=Th(e,t,n)}else e=o.treeContext,Le=rn(i.nextSibling),dt=t,be=!0,Na=null,on=!1,e!==null&&Fg(t,e),t=Zs(t,a),t.flags|=134221824;return t}return e=Yn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _l(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Y(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Pu(e,t,n,a,l){return il(t),n=Sp(e,t,n,a,void 0,l),a=xp(),e!==null&&!et?(Cp(e,t,l),ta(e,t,l)):(be&&a&&Yr(t),t.flags|=1,nt(e,t,n,l),t.child)}function zh(e,t,n,a,l,o){return il(t),t.updateQueue=null,n=eb(t,a,n,l),Wg(e),a=xp(),e!==null&&!et?(Cp(e,t,o),ta(e,t,o)):(be&&a&&Yr(t),t.flags|=1,nt(e,t,n,o),t.child)}function Uh(e,t,n,a,l){if(il(t),t.stateNode===null){var o=Dl,i=n.contextType;typeof i=="object"&&i!==null&&(o=ft(i)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ku,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},vp(t),i=n.contextType,o.context=typeof i=="object"&&i!==null?ft(i):Dl,o.state=t.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ac(t,n,i,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(i=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),i!==o.state&&Ku.enqueueReplaceState(o,o.state,null),si(t,a,o,l),ii(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var s=t.memoizedProps,c=ul(n,s);o.props=c;var d=o.context,m=n.contextType;i=Dl,typeof m=="object"&&m!==null&&(i=ft(m));var p=n.getDerivedStateFromProps;m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s||d!==i)&&Ch(t,o,a,i),ha=!1;var h=t.memoizedState;o.state=h,si(t,a,o,l),ii(),d=t.memoizedState,s||h!==d||ha?(typeof p=="function"&&(Ac(t,n,p,a),d=t.memoizedState),(c=ha||xh(t,n,c,a,h,d,i))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),o.props=a,o.state=d,o.context=i,a=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Du(e,t),i=t.memoizedProps,m=ul(n,i),o.props=m,p=t.pendingProps,h=o.context,d=n.contextType,c=Dl,typeof d=="object"&&d!==null&&(c=ft(d)),s=n.getDerivedStateFromProps,(d=typeof s=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==p||h!==c)&&Ch(t,o,a,c),ha=!1,h=t.memoizedState,o.state=h,si(t,a,o,l),ii();var g=t.memoizedState;i!==p||h!==g||ha||e!==null&&e.dependencies!==null&&sr(e.dependencies)?(typeof s=="function"&&(Ac(t,n,s,a),g=t.memoizedState),(m=ha||xh(t,n,m,a,h,g,c)||e!==null&&e.dependencies!==null&&sr(e.dependencies))?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,g,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,g,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),o.props=a,o.state=g,o.context=c,a=m):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,_l(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=rl(t,e.child,null,l),t.child=rl(t,null,n,l)):nt(e,t,n,l),t.memoizedState=o.state,e=t.child):e=ta(e,t,l),e}function $h(e,t,n,a){return ll(),t.flags|=256,nt(e,t,n,a),t.child}var Gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yu(e){return{baseLanes:e,cachePool:qg()}}function Xu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=qt),e}function Db(e,t,n){var a=t.pendingProps,l=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),i&&(l=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(be){if(l?Ua(t):$a(),(e=Le)?(e=Zy(e,on),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Za!==null?{id:Tn,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},n=Hg(e),n.return=t,t.child=n,dt=t,Le=null)):e=null,e===null)throw ja(t);return Kp(e)?t.lanes=32:t.lanes=536870912,null}return o=a.children,a=a.fallback,l?($a(),l=t.mode,o=tc({mode:"hidden",children:o},l),a=Ja(a,l,n,null),o.return=t,a.return=t,o.sibling=a,t.child=o,a=t.child,a.memoizedState=Yu(n),a.childLanes=Xu(e,i,n),t.memoizedState=Gu,ci(null,a)):(Ua(t),Ap(t,o))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return bU(e,t,o,i,a,c,s,n)}return l?($a(),l=a.fallback,o=t.mode,s=e.child,c=s.sibling,a=Yn(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&1206910976,c!==null?l=Yn(c,l):(l=Ja(l,o,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,ci(null,a),a=t.child,l=e.child.memoizedState,l===null?l=Yu(n):(o=l.cachePool,o!==null?(s=We._currentValue,o=o.parent!==s?{parent:s,pool:s}:o):o=qg(),l={baseLanes:l.baseLanes|n,cachePool:o}),a.memoizedState=l,a.childLanes=Xu(e,i,n),t.memoizedState=Gu,ci(e.child,a)):(Ua(t),n=e.child,e=n.sibling,n=Yn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n)}function Ap(e,t){return t=tc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function tc(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function rs(e,t,n){return rl(t,e.child,null,n),e=Ap(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bU(e,t,n,a,l,o,i,s){if(n)return t.flags&256?(Ua(t),t.flags&=-257,rs(e,t,s)):t.memoizedState!==null?($a(),t.child=e.child,t.flags|=128,null):($a(),o=l.fallback,i=t.mode,l=tc({mode:"visible",children:l.children},i),o=Ja(o,i,s,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,rl(t,e.child,null,s),l=t.child,l.memoizedState=Yu(s),l.childLanes=Xu(e,a,s),t.memoizedState=Gu,ci(null,l));if(Ua(t),Kp(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;return a=c,a!==""&&(l=Error(Y(419)),l.stack="",l.digest=a,xi({value:l,source:null,stack:null})),rs(e,t,s)}if(et||ol(e,t,s,!1),a=(s&e.childLanes)!==0,et||a){if(Da.current!==null)return rs(e,t,s);if(a=Ze,a!==null&&(l=mg(a,s),l!==0&&l!==i.retryLane))throw i.retryLane=l,bl(e,l),Dt(a,e,l),Ep;return xd(o)||Cr(),rs(e,t,s)}return xd(o)?(t.flags|=192,t.child=e.child,null):(e=i.treeContext,Le=rn(o.nextSibling),dt=t,be=!0,Na=null,on=!1,e!==null&&Fg(t,e),t=Ap(t,l.children),t.flags|=134221824,t)}function Eh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),As(e.return,t,n)}function Ah(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&ur(n)===null&&(t=e),e=e.sibling}return t}function cs(e,t,n,a,l,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=l,i.treeForkCount=o)}function Rc(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Qu(e,t,n){var a=t.pendingProps,l=a.revealOrder,o=a.tail;a=a.children;var i=gt.current;if(t.flags&128)return _i(t,i),null;var s=(i&2)!==0;if(s?(i=i&1|2,t.flags|=128):i&=1,_i(t,i),l==="backwards"&&e!==null?(Rc(e),nt(e,t,a,n),Rc(e)):nt(e,t,a,n),a=be?Si:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eh(e,n,t);else if(e.tag===19)Eh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":n=Ah(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null,Rc(t)),cs(t,!0,l,null,o,a);break;case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ur(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}cs(t,!0,n,null,o,a);break;case"together":cs(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:n=Ah(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),cs(t,!1,l,n,o,a)}return t.child}function Rh(e,t,n){var a=t.pendingProps;return xa(t,t.type,a.value),nt(e,t,a.children,n),t.child}function ta(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),La|=t.lanes,!(n&t.childLanes))if(e!==null){if(ol(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&sr(e)))}function yU(e,t,n){switch(t.tag){case 3:Ws(t,t.stateNode.containerInfo),xa(t,We,e.memoizedState.cache),ll();break;case 27:case 5:ku(t);break;case 4:Ws(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vu(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return Ua(t),t.flags|=128,null;a=ol(e,t,n,!1);var l=t.child.childLanes;return a||n&l?Db(e,t,n):(Ua(t),e=ta(e,t,n),e!==null?e.sibling:null)}Ua(t);break;case 19:if(t.flags&128)return Qu(e,t,n);if(l=(e.flags&128)!==0,a=(n&t.childLanes)!==0,a||(ol(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Qu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),_i(t,gt.current),a)break;return null;case 22:return t.lanes=0,jb(e,t,n,t.pendingProps);case 24:xa(t,We,e.memoizedState.cache)}return ta(e,t,n)}function Mb(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!Rp(e,n)&&!(t.flags&128))return et=!1,yU(e,t,n);et=!!(e.flags&131072)}else et=!1,be&&t.flags&1048576&&Ig(t,Si,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e=="function")dp(e)?(a=ul(e,a),t.tag=1,t=Uh(null,t,e,a,n)):(t.tag=0,t=Pu(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===Jd){t.tag=11,t=kh(null,t,e,a,n);break e}else if(l===Wd){t.tag=14,t=wh(null,t,e,a,n);break e}else if(l===wn){t.tag=10,t.type=e,t=Rh(null,t,n);break e}}throw t=Cu(e)||e,Error(Y(306,t,""))}}return t;case 0:return Pu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=ul(a,t.pendingProps),Uh(e,t,a,l,n);case 3:e:{if(Ws(t,t.stateNode.containerInfo),e===null)throw Error(Y(387));a=t.pendingProps;var o=t.memoizedState;l=o.element,Du(e,t),si(t,a,null,n);var i=t.memoizedState;if(a=i.cache,xa(t,We,a),a!==o.cache&&Zu(t,[We],n,!0),ii(),a=i.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=$h(e,t,a,n);break e}else if(a!==l){l=ln(Error(Y(424)),t),xi(l),t=$h(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=rn(e.firstChild),dt=t,be=!0,Na=null,on=!0,n=Yg(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ll(),a===l){t=ta(e,t,n);break e}nt(e,t,a,n)}t=t.child}return t;case 26:return _l(e,t),e===null?(n=lf(t.type,null,t.pendingProps,null))?t.memoizedState=n:be||(t.stateNode=zy(t.type,t.pendingProps,wa.current,t)):t.memoizedState=lf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ku(t),e===null&&be&&(a=t.stateNode=jy(t.type,t.pendingProps,wa.current),dt=t,on=!0,l=Le,Ha(t.type)?(Cd=l,Le=rn(a.firstChild)):Le=l),nt(e,t,t.pendingProps.children,n),_l(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&be&&((l=a=Le)&&(a=m$(a,t.type,t.pendingProps,on),a!==null?(t.stateNode=a,dt=t,Le=rn(a.firstChild),on=!1,l=!0):l=!1),l||ja(t)),ku(t),l=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,bd(l,o)?a=null:i!==null&&bd(l,i)&&(t.flags|=32),t.memoizedState!==null&&(l=Sp(e,t,rU,null,null,n),vo._currentValue=l),_l(e,t),nt(e,t,a,n),t.child;case 6:return e===null&&be&&((e=n=Le)&&(n=h$(n,t.pendingProps,on),n!==null?(t.stateNode=n,dt=t,Le=null,e=!0):e=!1),e||ja(t)),null;case 13:return Db(e,t,n);case 4:return Ws(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=rl(t,null,a,n):nt(e,t,a,n),t.child;case 11:return kh(e,t,t.type,t.pendingProps,n);case 7:return a=t.pendingProps,_l(e,t),nt(e,t,a,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:return Rh(e,t,n);case 9:return l=t.type._context,a=t.pendingProps.children,il(t),l=ft(l),a=a(l),t.flags|=1,nt(e,t,a,n),t.child;case 14:return wh(e,t,t.type,t.pendingProps,n);case 15:return Zb(e,t,t.type,t.pendingProps,n);case 19:return Qu(e,t,n);case 31:return gU(e,t,n);case 22:return jb(e,t,n,t.pendingProps);case 24:return il(t),a=ft(We),e===null?(l=hp(),l===null&&(l=Ze,o=mp(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:a,cache:l},vp(t),xa(t,We,l)):(e.lanes&n&&(Du(e,t),si(t,null,null,n),ii()),l=e.memoizedState,o=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),xa(t,We,a)):(a=o.cache,xa(t,We,a),a!==l.cache&&Zu(t,[We],n,!0))),nt(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=e===null?18882560:18874368:be&&Yr(t),e!==null&&e.memoizedProps.name!==a.name?t.flags|=4194816:_l(e,t),nt(e,t,a.children,n),t.child;case 29:throw t.pendingProps}throw Error(Y(156,t.tag))}function Mn(e){e.flags|=4}function Bc(e,t,n,a,l){var o;if((o=(e.mode&32)!==0)&&(o=n===null?rf(t,a):rf(t,a)&&(a.src!==n.src||a.srcSet!==n.srcSet)),o){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(hy())e.flags|=8192;else throw el=rr,fp}else e.flags&=-16777217}function Bh(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Vy(t))if(hy())e.flags|=8192;else throw el=rr,fp}function us(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ug():536870912,e.lanes|=t,co|=t)}function Do(e,t){if(!be)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&1206910976,a|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function SU(e,t,n){var a=t.pendingProps;switch(pp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xn(We),oo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Sl(t)?Mn(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Uc())),Me(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(Mn(t),o!==null?(Me(t),Bh(t,o)):(Me(t),Bc(t,l,null,a,n))):o?o!==e.memoizedState?(Mn(t),Me(t),Bh(t,o)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Mn(t),Me(t),Bc(t,l,e,a,n)),null;case 27:if(er(t),n=wa.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(!a){if(t.stateNode===null)throw Error(Y(166));return Me(t),t.subtreeFlags&=-33554433,null}e=En.current,Sl(t)?sh(t):(e=jy(l,a,n),t.stateNode=e,Mn(t))}return Me(t),t.subtreeFlags&=-33554433,null;case 5:if(er(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(!a){if(t.stateNode===null)throw Error(Y(166));return Me(t),t.subtreeFlags&=-33554433,null}if(o=En.current,Sl(t))sh(t);else{var i=Ti(wa.current);switch(o){case 1:o=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=i.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?i.createElement(l,{is:a.is}):i.createElement(l)}}o[ht]=t,o[Lt]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)o.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=o;e:switch(bt(o,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Mn(t)}}return Me(t),t.subtreeFlags&=-33554433,Bc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(Y(166));if(e=wa.current,Sl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=dt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ny(e.nodeValue,n)),e||ja(t,!0)}else e=Ti(e).createTextNode(a),e[ht]=t,t.stateNode=e}return Me(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Sl(t),n!==null){if(e===null){if(!a)throw Error(Y(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(557));e[ht]=t}else ll(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else n=Uc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if(t.flags&128)throw Error(Y(558))}return Me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Sl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(Y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(Y(317));l[ht]=t}else ll(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),l=!1}else l=Uc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),t.flags&128?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),us(t,t.updateQueue),Me(t),null);case 4:return oo(),e===null&&Hp(t.stateNode.containerInfo),t.flags|=67108864,Me(t),null;case 10:return Xn(t.type),Me(t),null;case 19:if(bp(t),a=t.memoizedState,a===null)return Me(t),null;if(l=(t.flags&128)!==0,o=a.rendering,o===null)if(l)Do(a,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ur(e),o!==null){for(t.flags|=128,Do(a,!1),e=o.updateQueue,t.updateQueue=e,us(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Vg(n,e),n=n.sibling;return _i(t,gt.current&1|2),be&&Vn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Pt()>Sr&&(t.flags|=128,l=!0,Do(a,!1),t.lanes=4194304)}else{if(!l)if(e=ur(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,us(t,e),Do(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!o.alternate&&!be)return Me(t),null}else 2*Pt()-a.renderingStartTime>Sr&&n!==536870912&&(t.flags|=128,l=!0,Do(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e!==null?e.sibling=o:t.child=o,a.last=o)}if(a.tail!==null){e=a.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Pt(),e.sibling=null,o=gt.current,o=l?o&1|2:o&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!n||be?_i(t,o):(n=o,He(yt,t),He(gt,n),xt===null&&(xt=t)),be&&Vn(t,a.treeForkCount),e}return Me(t),null;case 22:case 23:return Ft(t),gp(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?n&536870912&&!(t.flags&128)&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&us(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&vt(Wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xn(We),Me(t),null;case 25:return null;case 30:return t.flags|=33554432,Me(t),null}throw Error(Y(156,t.tag))}function xU(e,t){switch(pp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(We),oo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return er(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(Y(340));ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));ll()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return bp(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return oo(),null;case 10:return Xn(t.type),null;case 22:case 23:return Ft(t),gp(),e!==null&&vt(Wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xn(We),null;case 25:return null;default:return null}}function Lb(e,t){switch(pp(t),t.tag){case 3:Xn(We),oo();break;case 26:case 27:case 5:er(t);break;case 4:oo();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:bp(t);break;case 10:Xn(t.type);break;case 22:case 23:Ft(t),gp(),e!==null&&vt(Wa);break;case 24:Xn(We)}}function Ki(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var o=n.create,i=n.inst;a=o(),i.destroy=a}n=n.next}while(n!==l)}}catch(s){Be(t,t.return,s)}}function Ma(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&e)===e){var i=a.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,l=t;var c=n,d=s;try{d()}catch(m){Be(l,c,m)}}}a=a.next}while(a!==o)}}catch(m){Be(t,t.return,m)}}function Vb(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qg(t,n)}catch(a){Be(e,e.return,a)}}}function Hb(e,t,n){n.props=ul(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Be(e,t,a)}}function xn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var l=e.stateNode,o=Jn(e.memoizedProps,l);(l.ref===null||l.ref.name!==o)&&(l.ref=Ey(o)),a=l.ref;break;case 7:if(e.stateNode===null){var i=new Jt(e);Mt(e.child,!1,d$,i,void 0,void 0),e.stateNode=i}a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(s){Be(e,t,s)}}function mt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Be(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Be(e,t,l)}else n.current=null}function fr(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Oy(e.stateNode,t[n])}function Oh(e){for(var t=e.return;t!==null&&(Op(t)&&Oy(e.stateNode,t.stateNode),!Bp(t));)t=t.return}function ui(e){for(var t=e.return;t!==null&&(Op(t)&&p$(e.stateNode,t.stateNode),!Bp(t));)t=t.return}function Bp(e){return e.tag===5||e.tag===3||e.tag===27}function Op(e){return e&&e.tag===7&&e.stateNode!==null}function Ju(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Be(e,e.return,l)}}function Oc(e,t,n){try{var a=e.stateNode;PU(a,e.type,n,t),a[Lt]=t}catch(l){Be(e,e.return,l)}}function Ib(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function Zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ib(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wu(e,t,n,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(l),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nn)),fr(e,a),ze=!0;else if(l!==4&&(l===27&&(fr(e,a),a=null,Ha(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Wu(e,t,n,a),e=e.sibling;e!==null;)Wu(e,t,n,a),e=e.sibling}function vr(e,t,n,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?n.insertBefore(l,t):n.appendChild(l),fr(e,a),ze=!0;else if(l!==4&&(l===27&&(fr(e,a),a=null,Ha(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(vr(e,t,n,a),e=e.sibling;e!==null;)vr(e,t,n,a),e=e.sibling}function Fb(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);bt(t,a,n),t[ht]=e,t[Lt]=n}catch(o){Be(e,e.return,o)}}var gr=!1,Kt=null;function Zh(e){(e.tag===30||e.subtreeFlags&33554432)&&(gr=!0)}var kn=null;function jh(){var e=kn;return kn=null,e}var Rt=0;function Uo(e,t,n,a,l){return Rt=0,Kb(e.child,t,n,a,l)}function Kb(e,t,n,a,l){for(var o=!1;e!==null;){if(e.tag===5){var i=e.stateNode;if(a!==null){var s=yd(i);a.push(s),s.view&&(o=!0)}else o||yd(i).view&&(o=!0);gr=!0,Uy(i,Rt===0?t:t+"_"+Rt,n),Rt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Kb(e.child,t,n,a,l)&&(o=!0));e=e.sibling}return o}function Rn(e,t){for(;e!==null;)e.tag===5?$y(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Rn(e.child,t)),e=e.sibling}function js(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(js(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Y(544));var n=t.name;t=ia(t.default,t.share),t!=="none"&&(Uo(e,n,t,null,!1)||Rn(e.child,!1))}e=e.sibling}}function ed(e,t){if(e.tag===30){var n=e.stateNode,a=e.memoizedProps,l=Jn(a,n),o=ia(a.default,n.paired?a.share:a.enter);o!=="none"?Uo(e,l,o,null,!1)?(js(e),n.paired||t||uo(e,a.onEnter)):Rn(e.child,!1):js(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ed(e,t),e=e.sibling;else js(e)}function td(e){if(Kt!==null&&Kt.size!==0){var t=Kt;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,a=n.name;if(a!=null&&a!=="auto"){var l=t.get(a);if(l!==void 0){var o=ia(n.default,n.share);if(o!=="none"&&(Uo(e,a,o,null,!1)?(o=e.stateNode,l.paired=o,o.paired=l,uo(e,n.onShare)):Rn(e.child,!1)),t.delete(a),t.size===0)break}}}td(e)}e=e.sibling}}}function nd(e){if(e.tag===30){var t=e.memoizedProps,n=Jn(t,e.stateNode),a=Kt!==null?Kt.get(n):void 0,l=ia(t.default,a!==void 0?t.share:t.exit);l!=="none"&&(Uo(e,n,l,null,!1)?a!==void 0?(l=e.stateNode,a.paired=l,l.paired=a,Kt.delete(n),uo(e,t.onShare)):uo(e,t.onExit):Rn(e.child,!1)),Kt!==null&&td(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)nd(e),e=e.sibling;else Kt!==null&&td(e)}function qb(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Jn(t,e.stateNode);t=ia(t.default,t.update),e.flags&=-5,t!=="none"&&Uo(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&qb(e);e=e.sibling}}function ad(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Rn(e.child,!1))}ad(e)}e=e.sibling}}function Ds(e){if(e.tag===30)e.stateNode.paired=null,Rn(e.child,!1),ad(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ds(e),e=e.sibling;else ad(e)}function Pb(e){for(e=e.child;e!==null;)e.tag===30?Rn(e.child,!1):e.subtreeFlags&33554432&&Pb(e),e=e.sibling}function Zp(e,t,n,a,l,o,i){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(o!==null&&Rt<o.length){var d=o[Rt],m=yd(c);(d.view||m.view)&&(s=!0);var p;if(p=(e.flags&4)===0)if(m.clip)p=!0;else{p=d.rect;var h=m.rect;p=p.y!==h.y||p.x!==h.x||p.height!==h.height||p.width!==h.width}p&&(e.flags|=4),m.abs?m=!d.abs:(d=d.rect,m=m.rect,m=d.height!==m.height||d.width!==m.width),m&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Uy(c,Rt===0?n:n+"_"+Rt,l),s&&e.flags&4||(kn===null&&(kn=[]),kn.push(c,Rt===0?a:a+"_"+Rt,t.memoizedProps)),Rt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&i?e.flags|=t.flags&32:Zp(e,t.child,n,a,l,o,i)&&(s=!0));t=t.sibling}return s}function Gb(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=e.stateNode,l=Jn(n,a),o=ia(n.default,n.update),i;i=e.memoizedState,e.memoizedState=null,a=e;var s=e.child;Rt=0,l=Zp(a,s,l,l,o,i,!1),e.flags&4&&l&&uo(e,n.onUpdate)}else e.subtreeFlags&33554432&&Gb(e);e=e.sibling}}var it=!1,Ee=!1,bn=!1,jc=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,st=null,yn=!1,Yo=!1,br=!1,ld=!1;function CU(e,t,n){if(e=e.containerInfo,vd=go,e=Rg(e),rp(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var o=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,c=-1,d=-1,m=0,p=0,h=e,g=null;t:for(;;){for(var k;h!==a||o!==0&&h.nodeType!==3||(c=s+o),h!==i||l!==0&&h.nodeType!==3||(d=s+l),h.nodeType===3&&(s+=h.nodeValue.length),(k=h.firstChild)!==null;)g=h,h=k;for(;;){if(h===e)break t;if(g===a&&++m===o&&(c=s),g===i&&++p===l&&(d=s),(k=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=k}a=c===-1||d===-1?null:{start:c,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(gd={focusedElem:e,selectionRange:a},go=!1,n=(n&335544064)===n,st=t,t=n?9270:1024;st!==null;){if(e=st,n&&(a=e.deletions,a!==null))for(o=0;o<a.length;o++)n&&nd(a[o]);if(e.alternate===null&&e.flags&2)n&&Zh(e),ds(n);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&n&&nd(a),ds(n);continue}else if(a!==null&&a.memoizedState!==null){n&&Zh(e),ds(n);continue}}a=e.child,e.subtreeFlags&t&&a!==null?(a.return=e,st=a):(n&&qb(e),ds(n))}}Kt=null}function ds(e){for(;st!==null;){var t=st,n=e,a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(l&1024&&a!==null){n=void 0,l=a.memoizedProps,a=a.memoizedState;var o=t.stateNode;try{var i=ul(t.type,l);n=o.getSnapshotBeforeUpdate(i,a),o.__reactInternalSnapshotBeforeUpdate=n}catch(s){Be(t,t.return,s)}}break;case 3:if(l&1024){if(a=t.stateNode.containerInfo,n=a.nodeType,n===9)Sd(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Sd(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&a!==null&&(n=Jn(a.memoizedProps,a.stateNode),l=t.memoizedProps,l=ia(l.default,l.update),l!=="none"&&Uo(a,n,l,a.memoizedState=[],!0));break;default:if(l&1024)throw Error(Y(163))}if(a=t.sibling,a!==null){a.return=t.return,st=a;break}st=t.return}}function Yb(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Sn(e,n),a&4&&Ki(5,n);break;case 1:if(Sn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(i){Be(n,n.return,i)}else{var l=ul(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Be(n,n.return,i)}}a&64&&Vb(n),a&512&&xn(n,n.return);break;case 3:if(Sn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qg(e,t)}catch(i){Be(n,n.return,i)}}break;case 27:t===null&&a&4&&Fb(n);case 26:case 5:Sn(e,n),t===null&&a&4&&Ju(n),a&512&&xn(n,n.return);break;case 12:Sn(e,n);break;case 31:Sn(e,n),a&4&&Wb(e,n);break;case 13:Sn(e,n),a&4&&ey(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=BU.bind(null,n),f$(e,n))));break;case 22:if(a=n.memoizedState!==null||it,!a){var o=t!==null&&t.memoizedState!==null||Ee;t=it,l=Ee,it=a,(Ee=o)&&!l?(a=2,n.subtreeFlags&8772&&(a|=1),pn(e,n,a)):Sn(e,n),it=t,Ee=l}break;case 30:Sn(e,n),a&512&&xn(n,n.return);break;case 7:a&512&&xn(n,n.return);default:Sn(e,n)}}function od(e,t){for(e=e.child;e!==null;)Xb(e,t),e=e.sibling}function Xb(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var a=n.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var l=e.stateNode,o=e.memoizedProps.style,i=o!=null&&o.hasOwnProperty("display")?o.display:null;l.style.display=i==null||typeof i=="boolean"?"":(""+i).trim()}}catch(c){Be(e,e.return,c)}id(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ze=!0}catch(c){Be(e,e.return,c)}break;case 18:try{var s=e.stateNode;t?Jh(s,!0):Jh(e.stateNode,!1)}catch(c){Be(e,e.return,c)}break;case 22:case 23:e.memoizedState===null&&od(e,t);break;default:od(e,t)}}function id(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,a=t;switch(n.tag){case 4:Xb(n,a);break e;case 22:n.memoizedState===null&&id(n,a);break e;default:id(n,a)}}e=e.sibling}}function Qb(e){var t=e.alternate;t!==null&&(e.alternate=null,Qb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ir(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,$t=!1;function dn(e,t,n){for(n=n.child;n!==null;)Jb(e,t,n),n=n.sibling}function Jb(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Di,n)}catch{}switch(n.tag){case 26:Ee||mt(n,t),dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ee&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ee||mt(n,t),ui(n);var a=qe,l=$t;Ha(n.type)&&(qe=n.stateNode,$t=!1),dn(e,t,n),Dy(n.stateNode,n.type,n.memoizedProps),qe=a,$t=l;break;case 5:Ee||mt(n,t),ui(n);case 6:if(n.tag===6&&ui(n),a=qe,l=$t,qe=null,dn(e,t,n),qe=a,$t=l,qe!==null)if($t)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(n.stateNode),ze=!0}catch(o){Be(n,t,o)}else try{qe.removeChild(n.stateNode),ze=!0}catch(o){Be(n,t,o)}break;case 18:qe!==null&&($t?(e=qe,Qh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),bo(e)):Qh(qe,n.stateNode));break;case 4:a=qe,l=$t,qe=n.stateNode.containerInfo,$t=!0,dn(e,t,n),qe=a,$t=l;break;case 0:case 11:case 14:case 15:Ma(2,n,t),Ee||Ma(4,n,t),dn(e,t,n);break;case 1:Ee||(mt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Hb(n,t,a)),dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:Ee=(a=Ee)||n.memoizedState!==null,dn(e,t,n),Ee=a;break;case 30:mt(n,t),dn(e,t,n);break;case 7:Ee||mt(n,t),dn(e,t,n);break;default:dn(e,t,n)}}function Wb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bo(e)}catch(n){Be(t,t.return,n)}}}function ey(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bo(e)}catch(n){Be(t,t.return,n)}}function _U(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Dh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Dh),t;default:throw Error(Y(435,e.tag))}}function ps(e,t){var n=_U(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=OU.bind(null,e,a);a.then(l,l)}})}function _t(e,t,n){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var o=a[l],i=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 27:if(Ha(c.type)){qe=c.stateNode,$t=!1;break e}break;case 5:qe=c.stateNode,$t=!1;break e;case 3:case 4:qe=c.stateNode.containerInfo,$t=!0;break e}c=c.return}if(qe===null)throw Error(Y(160));Jb(i,s,o),qe=null,$t=!1,i=o.alternate,i!==null&&(i.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ty(t,e,n),t=t.sibling}var mn=null;function ty(e,t,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var o=0;o<a.length;o++){var i=a[o];i.ref.impl=i.nextImpl}_t(t,e,n),kt(e),l&4&&(Ma(3,e,e.return),Ki(3,e),Ma(5,e,e.return));break;case 1:_t(t,e,n),kt(e),l&512&&(Ee||a===null||mt(a,a.return)),l&64&&it&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=mn,_t(t,e,n),kt(e),l&512&&(Ee||a===null||mt(a,a.return)),l&4)if(l=a!==null?a.memoizedState:null,n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null)if(it)e.stateNode=zy(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,l=o.ownerDocument||o;t:switch(t){case"title":a=l.getElementsByTagName("title")[0],(!a||a[Vi]||a[ht]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(t),l.head.insertBefore(a,l.querySelector("head > title"))),bt(a,t,n),a[ht]=e,ct(a),t=a;break e;case"link":if(o=sf("link","href",l).get(t+(n.href||""))){for(i=0;i<o.length;i++)if(a=o[i],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(i,1);break t}}a=l.createElement(t),bt(a,t,n),l.head.appendChild(a);break;case"meta":if(o=sf("meta","content",l).get(t+(n.content||""))){for(i=0;i<o.length;i++)if(a=o[i],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(i,1);break t}}a=l.createElement(t),bt(a,t,n),l.head.appendChild(a);break;default:throw Error(Y(468,t))}a[ht]=e,ct(a),t=a}e.stateNode=t}else it||_d(o,e.type,e.stateNode);else e.stateNode=of(o,n,e.memoizedProps);else l!==n?(l===null?(t=a.stateNode,t===null||Ee||t.parentNode.removeChild(t)):l.count--,n===null?it||_d(o,e.type,e.stateNode):of(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Oc(e,e.memoizedProps,a.memoizedProps);break;case 27:_t(t,e,n),kt(e),l&512&&(Ee||a===null||mt(a,a.return)),a!==null&&l&4&&Oc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(o=bn,bn=!1,_t(t,e,n),bn=o,kt(e),l&512&&(Ee||a===null||mt(a,a.return)),e.flags&32){t=e.stateNode;try{so(t,""),ze=!0}catch(m){Be(e,e.return,m)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,Oc(e,t,a!==null?a.memoizedProps:t)),l&1024&&(jc=!0);break;case 6:if(_t(t,e,n),kt(e),l&4){if(e.stateNode===null)throw Error(Y(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ze=!0}catch(m){Be(e,e.return,m)}}break;case 3:if(ze=!1,Hs=null,o=mn,mn=zi(t.containerInfo),_t(t,e,n),mn=o,kt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch(m){Be(e,e.return,m)}jc&&(jc=!1,ny(e)),ze=!1;break;case 4:l=bn,bn=it,a=Im(),o=mn,mn=zi(e.stateNode.containerInfo),_t(t,e,n),kt(e),mn=o,ze&&Yo&&(br=!0),ze=a,bn=l;break;case 12:_t(t,e,n),kt(e);break;case 31:_t(t,e,n),kt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ps(e,t)));break;case 13:_t(t,e,n),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=Pt()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ps(e,t)));break;case 22:o=e.memoizedState!==null,i=a!==null&&a.memoizedState!==null;var s=it,c=Ee,d=bn;it=s||o,bn=d||o,Ee=c||i,_t(t,e,n),Ee=c,bn=d,it=s,kt(e),l&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||a===null||i||it||Ee||(t=i||Ee,n=it,a=Ee,it=o||it,Ee=t,pa(e,2),it=n,Ee=a),!o&&bn||od(e,o)),l&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ps(e,n))));break;case 19:_t(t,e,n),kt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ps(e,t)));break;case 30:l&512&&(Ee||a===null||mt(a,a.return)),l=Im(),o=Yo,i=(n&335544064)===n,s=e.memoizedProps,Yo=i&&ia(s.default,s.update)!=="none",_t(t,e,n),kt(e),i&&a!==null&&ze&&(e.flags|=4),Yo=o,ze=l;break;case 21:break;case 7:l&512&&(Ee||a===null||mt(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:_t(t,e,n),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Ib(a)){n=a;break}a=a.return}a=null;for(var l=e.return;l!==null;){if(Op(l)){var o=l.stateNode;a===null?a=[o]:a.push(o)}if(Bp(l))break;l=l.return}var i=a;if(n==null)throw Error(Y(160));switch(n.tag){case 27:var s=n.stateNode,c=Zc(e);vr(e,c,s,i);break;case 5:var d=n.stateNode;n.flags&32&&(so(d,""),n.flags&=-33);var m=Zc(e);vr(e,m,d,i);break;case 3:case 4:var p=n.stateNode.containerInfo,h=Zc(e);Wu(e,h,p,i);break;default:throw Error(Y(161))}}catch(g){Be(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ny(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ny(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,go=!0,t.reset(),go=!1),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)ay(t,e),t=t.sibling;else Gb(t)}function ay(e,t){var n=e.alternate;if(n===null)ed(e,!1);else switch(e.tag){case 3:if(ld=yn=!1,jh(),xl(t,e),!yn&&!br){if(e=kn,e!==null)for(var a=0;a<e.length;a+=3){n=e[a];var l=e[a+1];$y(n,e[a+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ld=!0}kn=null;break;case 5:xl(t,e);break;case 4:a=yn,yn=!1,xl(t,e),yn&&(br=!0),yn=a;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?ed(e,!1):xl(t,e));break;case 30:a=yn,l=jh(),yn=!1,xl(t,e),yn&&(e.flags|=4);var o=e.memoizedProps,i=e.stateNode;t=Jn(o,i),i=Jn(n.memoizedProps,i);var s=ia(o.default,o.update);s==="none"?t=!1:(o=n.memoizedState,n.memoizedState=null,n=e.child,Rt=0,t=Zp(e,n,t,i,s,o,!0),Rt!==(o===null?0:o.length)&&(e.flags|=32)),e.flags&4&&t?(uo(e,e.memoizedProps.onUpdate),kn=l):l!==null&&(l.push.apply(l,kn),kn=l),yn=e.flags&32?!0:a;break;default:xl(t,e)}}function Sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yb(e,t.alternate,t),t=t.sibling}function pa(e,t){for(e=e.child;e!==null;){var n=e,a=t;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),pa(n,a);break;case 1:mt(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&Hb(n,n.return,l),pa(n,a);break;case 27:a&2&&Dy(n.stateNode,n.type,n.memoizedProps);case 5:mt(n,n.return),n.tag!==5&&n.tag!==27||ui(n),pa(n,a);break;case 6:ui(n);break;case 26:mt(n,n.return),l=n.stateNode,n.memoizedState!==null||l===null||Ee||l.parentNode.removeChild(l),pa(n,a);break;case 22:n.memoizedState===null&&pa(n,a);break;case 30:mt(n,n.return),pa(n,a);break;case 7:mt(n,n.return);default:pa(n,a)}e=e.sibling}}function pn(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var a=t.alternate,l=e,o=t,i=o.flags,s=(n&1)!==0;switch(o.tag){case 0:case 11:case 15:pn(l,o,n),Ki(4,o);break;case 1:if(pn(l,o,n),a=o,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(m){Be(a,a.return,m)}if(a=o,l=a.updateQueue,l!==null){var c=a.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)Xg(d[l],c)}catch(m){Be(a,a.return,m)}}s&&i&64&&Vb(o),xn(o,o.return);break;case 27:n&2&&Fb(o);case 5:o.tag!==5&&o.tag!==27||Oh(o),pn(l,o,n),s&&a===null&&i&4&&Ju(o),xn(o,o.return);break;case 6:Oh(o);break;case 26:c=o.stateNode,o.memoizedState!==null||c===null||it||_d(zi(c.ownerDocument),o.type,c),pn(l,o,n),s&&a===null&&i&4&&Ju(o),xn(o,o.return);break;case 12:pn(l,o,n);break;case 31:pn(l,o,n),s&&i&4&&Wb(l,o);break;case 13:pn(l,o,n),s&&i&4&&ey(l,o);break;case 22:o.memoizedState===null&&pn(l,o,n),xn(o,o.return);break;case 30:pn(l,o,n),xn(o,o.return);break;case 7:xn(o,o.return);default:pn(l,o,n)}t=t.sibling}}function jp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ii(n))}function Dp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ii(e))}function Wt(e,t,n,a){var l=(n&335544064)===n;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)ly(e,t,n,a),t=t.sibling;else l&&Pb(t)}function ly(e,t,n,a){var l=(n&335544064)===n;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ds(t);var o=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,n,a),o&2048&&Ki(9,t);break;case 1:Wt(e,t,n,a);break;case 3:Wt(e,t,n,a),l&&ld&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),o&2048&&(o=null,t.alternate!==null&&(o=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==o&&(t.refCount++,o!=null&&Ii(o)));break;case 12:if(o&2048){Wt(e,t,n,a),o=t.stateNode;try{var i=t.memoizedProps,s=i.id,c=i.onPostCommit;typeof c=="function"&&c(s,t.alternate===null?"mount":"update",o.passiveEffectDuration,-0)}catch(d){Be(t,t.return,d)}}else Wt(e,t,n,a);break;case 31:Wt(e,t,n,a);break;case 13:Wt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?(l&&s!==null&&s.memoizedState===null&&Ds(s),i._visibility&2?Wt(e,t,n,a):di(e,t)):(l&&s!==null&&s.memoizedState!==null&&Ds(t),i._visibility&2?Wt(e,t,n,a):(i._visibility|=2,kl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1))),o&2048&&jp(s,t);break;case 24:Wt(e,t,n,a),o&2048&&Dp(t.alternate,t);break;case 30:l&&(o=t.alternate,o!==null&&(Rn(o.child,!0),Rn(t.child,!0))),Wt(e,t,n,a);break;default:Wt(e,t,n,a)}}function kl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,i=t,s=n,c=a,d=i.flags;switch(i.tag){case 0:case 11:case 15:kl(o,i,s,c,l),Ki(8,i);break;case 23:break;case 22:var m=i.stateNode;i.memoizedState!==null?m._visibility&2?kl(o,i,s,c,l):di(o,i):(m._visibility|=2,kl(o,i,s,c,l)),l&&d&2048&&jp(i.alternate,i);break;case 24:kl(o,i,s,c,l),l&&d&2048&&Dp(i.alternate,i);break;default:kl(o,i,s,c,l)}t=t.sibling}}function di(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:di(n,a),l&2048&&jp(a.alternate,a);break;case 24:di(n,a),l&2048&&Dp(a.alternate,a);break;default:di(n,a)}t=t.sibling}}var Pa=8192;function Fa(e,t,n){if(e.subtreeFlags&Pa)for(e=e.child;e!==null;)oy(e,t,n),e=e.sibling}function oy(e,t,n){switch(e.tag){case 26:Fa(e,t,n),e.flags&Pa&&(e.memoizedState!==null?U$(n,mn,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&cf(n,e)));break;case 5:Fa(e,t,n),e.flags&Pa&&(e=e.stateNode,(t&335544128)===t&&cf(n,e));break;case 3:case 4:var a=mn;mn=zi(e.stateNode.containerInfo),Fa(e,t,n),mn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Pa,Pa=16777216,Fa(e,t,n),Pa=a):Fa(e,t,n));break;case 30:if(e.flags&Pa&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var l=e.stateNode;l.paired=null,Kt===null&&(Kt=new Map),Kt.set(a,l)}Fa(e,t,n);break;default:Fa(e,t,n)}}function iy(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mo(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];st=a,ry(a,e)}iy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sy(e),e=e.sibling}function sy(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ms(e)):Mo(e);break;default:Mo(e)}}function Ms(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];st=a,ry(a,e)}iy(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ma(8,t,t.return),Ms(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ms(t));break;default:Ms(t)}e=e.sibling}}function ry(e,t){for(;st!==null;){var n=st;switch(n.tag){case 0:case 11:case 15:Ma(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ii(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,st=a;else e:for(n=e;st!==null;){a=st;var l=a.sibling,o=a.return;if(Qb(a),a===n){st=null;break e}if(l!==null){l.return=o,st=l;break e}st=o}}}var kU={getCacheForType:function(e){var t=ft(We),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ft(We).controller.signal}},wU=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ze=null,_e=null,we=0,Ae=0,Ht=null,Ca=!1,$o=!1,Mp=!1,na=0,Xe=0,La=0,tl=0,yr=0,qt=0,co=0,pi=null,Et=null,sd=!1,nc=0,cy=0,Sr=1/0,xr=null,Ea=null,Pe=0,fn=null,dl=null,An=0,rd=0,cd=null,uy=null,Jl=null,Wl=null,eo=null,mi=0,Ls=null;function Xt(){return Ue&2&&we!==0?we&-we:fe.T!==null?Vp():hg()}function dy(){if(qt===0)if(!(we&536870912)||be){var e=ts;ts<<=1,!(ts&3932160)&&(ts=262144),qt=e}else qt=536870912;return e=yt.current,e!==null&&(e.flags|=32),qt}function uo(e,t){if(t!=null){var n=e.stateNode,a=n.ref;a===null&&(a=n.ref=Ey(Jn(e.memoizedProps,n))),Wl===null&&(Wl=[]),Wl.push(t.bind(null,a))}}function Dt(e,t,n){(e===Ze&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(po(e,0),_a(e,we,qt,!1)),Li(e,n),(!(Ue&2)||e!==Ze)&&(e===Ze&&(!(Ue&2)&&(tl|=n),Xe===4&&_a(e,we,qt,!1)),jn(e))}function py(e,t,n){if(Ue&6)throw Error(Y(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Mi(e,t),l=a?zU(e,t):Dc(e,t,!0),o=a;do{if(l===0){$o&&!a&&_a(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!NU(n)){l=Dc(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var s=e;l=pi;var c=s.current.memoizedState.isDehydrated;if(c&&(po(s,i).flags|=256),i=Dc(s,i,!1),i!==2&&i!==6){if(Mp&&!c){s.errorRecoveryDisabledLanes|=o,tl|=o,l=4;break e}o=Et,Et=l,o!==null&&(Et===null?Et=o:Et.push.apply(Et,o))}l=i}if(o=!1,l!==2)continue}}if(l===1){po(e,0),_a(e,t,0,!0);break}e:{switch(a=e,o=l,o){case 0:case 1:throw Error(Y(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:_a(a,t,qt,!Ca);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((t&62914560)===t&&(l=nc+300-Pt(),10<l)){if(_a(a,t,qt,!Ca),Hr(a,0,!0)!==0)break e;An=t,a.timeoutHandle=Ip(Mh.bind(null,a,n,Et,xr,sd,t,qt,tl,co,Ca,o,"Throttled",-0,0),l);break e}Mh(a,n,Et,xr,sd,t,qt,tl,co,Ca,o,null,-0,0)}}break}while(!0);jn(e)}function Mh(e,t,n,a,l,o,i,s,c,d,m,p,h,g){e.timeoutHandle=-1;var k=t.subtreeFlags,x=(o&335544064)===o;if(p=null,(x||k&8192||(k&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nn},Kt=null,oy(t,o,p),x&&(k=p,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(k.count++,k.waitingForViewTransition=!0,k=Ui.bind(k),x.finished.then(k,k))),k=(o&62914560)===o?nc-Pt():(o&4194048)===o?cy-Pt():0,k=$$(p,k),k!==null)){An=o,e.cancelPendingCommit=k(Vh.bind(null,e,t,o,n,a,l,i,s,c,d,m,p,null,h,g)),_a(e,o,i,!d);return}Vh(e,t,o,n,a,l,i,s,c,d,m,p)}function NU(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],o=l.getSnapshot;l=l.value;try{if(!Qt(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _a(e,t,n,a){t=cg(e,t),t&=~yr,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var o=31-Yt(l),i=1<<o;a[o]=-1,l&=~i}n!==0&&dg(e,n,t)}function ac(){return Ue&6?!0:(qi(0),!1)}function Lp(){if(_e!==null){if(Ae===0)var e=_e.return;else e=_e,Fn=yl=null,_p(e),Yl=null,Ci=0,e=_e;for(;e!==null;)Lb(e.alternate,e),e=e.return;_e=null}}function po(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,XU(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),An=0,Lp(),Ze=e,_e=n=Yn(e.current,null),we=t,Ae=0,Ht=null,Ca=!1,$o=Mi(e,t),Mp=!1,co=qt=yr=tl=La=Xe=0,Et=pi=null,sd=!1,na=cg(e,t),Pr(),n}function my(e,t){ge=null,fe.H=mr,t===zo||t===Xr?(t=ph(),Ae=3):t===fp?(t=ph(),Ae=4):Ae=t===Ep?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ht=t,_e===null&&(Xe=1,hr(e,ln(t,e.current)))}function hy(){var e=yt.current;return e===null?!0:(we&4194048)===we?xt===null:(we&62914560)===we||we&536870912?e===xt:!1}function fy(){var e=fe.H;return fe.H=mr,e===null?mr:e}function vy(){var e=fe.A;return fe.A=kU,e}function Cr(){Xe=4,Ca||(we&4194048)!==we&&yt.current!==null||($o=!0),!(La&134217727)&&!(tl&134217727)||Ze===null||_a(Ze,we,qt,!1)}function Dc(e,t,n){var a=Ue;Ue|=2;var l=fy(),o=vy();(Ze!==e||we!==t)&&(xr=null,po(e,t)),t=!1;var i=Xe;e:do try{if(Ae!==0&&_e!==null){var s=_e,c=Ht;switch(Ae){case 8:Lp(),i=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var d=Ae;if(Ae=0,Ht=null,Vl(e,s,c,d),n&&$o){i=0;break e}break;default:d=Ae,Ae=0,Ht=null,Vl(e,s,c,d)}}TU(),i=Xe;break}catch(m){my(e,m)}while(!0);return t&&e.shellSuspendCounter++,Fn=yl=null,Ue=a,fe.H=l,fe.A=o,_e===null&&(Ze=null,we=0,Pr()),i}function TU(){for(;_e!==null;)gy(_e)}function zU(e,t){var n=Ue;Ue|=2;var a=fy(),l=vy();Ze!==e||we!==t?(xr=null,Sr=Pt()+500,po(e,t)):$o=Mi(e,t);e:do try{if(Ae!==0&&_e!==null){t=_e;var o=Ht;t:switch(Ae){case 1:Ae=0,Ht=null,Vl(e,t,o,1);break;case 2:case 9:if(dh(o)){Ae=0,Ht=null,Lh(t);break}t=function(){Ae!==2&&Ae!==9||Ze!==e||(Ae=7),jn(e)},o.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:dh(o)?(Ae=0,Ht=null,Lh(t)):(Ae=0,Ht=null,Vl(e,t,o,7));break;case 5:var i=null;switch(_e.tag){case 26:i=_e.memoizedState;case 5:case 27:var s=_e;if(i?Vy(i):s.stateNode.complete){Ae=0,Ht=null;var c=s.sibling;if(c!==null)_e=c;else{var d=s.return;d!==null?(_e=d,lc(d)):_e=null}break t}}Ae=0,Ht=null,Vl(e,t,o,5);break;case 6:Ae=0,Ht=null,Vl(e,t,o,6);break;case 8:Lp(),Xe=6;break e;default:throw Error(Y(462))}}UU();break}catch(m){my(e,m)}while(!0);return Fn=yl=null,fe.H=a,fe.A=l,Ue=n,_e!==null?0:(Ze=null,we=0,Pr(),Xe)}function UU(){for(;_e!==null&&!qz();)gy(_e)}function gy(e){var t=Mb(e.alternate,e,na);e.memoizedProps=e.pendingProps,t===null?lc(e):_e=t}function Lh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zh(n,t,t.pendingProps,t.type,void 0,we);break;case 11:t=zh(n,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:_p(t);var a=t;a===dt&&(be?(ir(a),a.tag===5&&a.stateNode!=null&&(Le=a.stateNode)):(ir(a),be=!0));default:Lb(n,t),t=_e=Vg(t,na),t=Mb(n,t,na)}e.memoizedProps=e.pendingProps,t===null?lc(e):_e=t}function Vl(e,t,n,a){Fn=yl=null,_p(t),Yl=null,Ci=0;var l=t.return;try{if(vU(e,l,t,n,we)){Xe=1,hr(e,ln(n,e.current)),_e=null;return}}catch(o){if(l!==null)throw _e=l,o;Xe=1,hr(e,ln(n,e.current)),_e=null;return}t.flags&32768?(be||a===1?e=!0:$o||we&536870912?e=!1:(Ca=e=!0,(a===2||a===9||a===3||a===6)&&(a=yt.current,a!==null&&a.tag===13&&(a.flags|=16384))),by(t,e)):lc(t)}function lc(e){var t=e;do{if(t.flags&32768){by(t,Ca);return}e=t.return;var n=SU(t.alternate,t,na);if(n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Xe===0&&(Xe=5)}function by(e,t){do{var n=xU(e.alternate,e);if(n!==null){n.flags&=32767,_e=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){_e=e;return}_e=e=n}while(e!==null);Xe=6,_e=null}function Vh(e,t,n,a,l,o,i,s,c,d,m,p){e.cancelPendingCommit=null;do oc();while(Pe!==0);if(Ue&6)throw Error(Y(327));if(t!==null){if(t===e.current)throw Error(Y(177));e===Ze&&(_e=Ze=null,we=0),dl=t,fn=e,An=n,cd=l,uy=a,$U(e,t,n,i,s,c,p)}}function $U(e,t,n,a,l,o,i){var s=t.lanes|t.childLanes;if(rd=s,s|=cp,n2(e,n,s,a,l,o),Wl=null,(n&335544064)===n?(eo=lU(e),a=10262):(eo=null,a=10256),t.subtreeFlags&a||t.flags&a?(e.callbackNode=null,e.callbackPriority=0,ZU(tr,function(){return md(),null})):(e.callbackNode=null,e.callbackPriority=0),gr=!1,a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=fe.T,fe.T=null,l=$e.p,$e.p=2,o=Ue,Ue|=4;try{CU(e,t,n)}finally{Ue=o,$e.p=l,fe.T=a}}Pe=1,gr?Jl=n$(i,e.containerInfo,eo,ud,dd,AU,pd,md,EU):(ud(),dd(),pd())}function EU(e){if(Pe!==0){var t=fn.onRecoverableError;t(e,{componentStack:null})}}function AU(){Pe===3&&(Pe=0,ay(dl,fn),Pe=4)}function ud(){if(Pe===1){Pe=0;var e=fn,t=dl,n=An,a=(t.flags&13878)!==0;if(t.subtreeFlags&13878||a){a=fe.T,fe.T=null;var l=$e.p;$e.p=2;var o=Ue;Ue|=4;try{Yo=br=!1,ty(t,e,n),n=gd;var i=Rg(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(i!==s&&s&&s.ownerDocument&&Ag(s.ownerDocument.documentElement,s)){if(c!==null&&rp(s)){var d=c.start,m=c.end;if(m===void 0&&(m=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(m,s.value.length);else{var p=s.ownerDocument||document,h=p&&p.defaultView||window;if(h.getSelection){var g=h.getSelection(),k=s.textContent.length,x=Math.min(c.start,k),S=c.end===void 0?x:Math.min(c.end,k);!g.extend&&x>S&&(i=S,S=x,x=i);var v=ah(s,x),f=ah(s,S);if(v&&f&&(g.rangeCount!==1||g.anchorNode!==v.node||g.anchorOffset!==v.offset||g.focusNode!==f.node||g.focusOffset!==f.offset)){var y=p.createRange();y.setStart(v.node,v.offset),g.removeAllRanges(),x>S?(g.addRange(y),g.extend(f.node,f.offset)):(y.setEnd(f.node,f.offset),g.addRange(y))}}}}for(p=[],g=s;g=g.parentNode;)g.nodeType===1&&p.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<p.length;s++){var _=p[s];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}go=!!vd,gd=vd=null}finally{Ue=o,$e.p=l,fe.T=a}}e.current=t,Pe=2}}function dd(){if(Pe===2){Pe=0;var e=fn,t=dl,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=fe.T,fe.T=null;var a=$e.p;$e.p=2;var l=Ue;Ue|=4;try{Yb(e,t.alternate,t)}finally{Ue=l,$e.p=a,fe.T=n}}Pe=3}}function pd(){if(Pe===4||Pe===3){Pe=0;var e=Jl;Jl=null,Pz();var t=fn,n=dl,a=An,l=uy,o=(a&335544064)===a?10262:10256;if(n.subtreeFlags&o||n.flags&o?Pe=5:(Pe=0,dl=fn=null,yy(t,t.pendingLanes)),o=t.pendingLanes,o===0&&(Ea=null),np(a),n=n.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=fe.T,o=$e.p,$e.p=2,fe.T=null;try{for(var i=t.onRecoverableError,s=0;s<l.length;s++){var c=l[s];i(c.value,{componentStack:c.stack})}}finally{fe.T=n,$e.p=o}}if(l=Wl,i=eo,eo=null,l!==null&&(Wl=null,i===null&&(i=[]),e!==null))for(c=0;c<l.length;c++)n=(0,l[c])(i),n!==void 0&&e.finished.finally(n);An&3&&oc(),jn(t),o=t.pendingLanes,a&261930&&o&42?t===Ls?mi++:(mi=0,Ls=t):(mi=0,Ls=null),qi(0)}}function yy(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ii(t)))}function oc(){return Jl!==null&&(Jl.skipTransition(),Jl=null),ud(),dd(),pd(),md()}function md(){if(Pe!==5)return!1;var e=fn,t=rd;rd=0;var n=np(An),a=fe.T,l=$e.p;try{$e.p=32>n?32:n,fe.T=null,n=cd,cd=null;var o=fn,i=An;if(Pe=0,dl=fn=null,An=0,Ue&6)throw Error(Y(331));var s=Ue;if(Ue|=4,sy(o.current),ly(o,o.current,i,n),Ue=s,qi(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Di,o)}catch{}return!0}finally{$e.p=l,fe.T=a,yy(e,t)}}function Hh(e,t,n){t=ln(n,t),t=qu(e.stateNode,t,2),e=za(e,t,2),e!==null&&(Li(e,2),jn(e))}function Be(e,t,n){if(e.tag===3)Hh(e,e,n);else for(;t!==null;){if(t.tag===3){Hh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ea===null||!Ea.has(a))){e=ln(n,e),n=Bb(2),a=za(t,n,2),a!==null&&(Ob(n,a,t,e),Li(a,2),jn(a));break}}t=t.return}}function Mc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new wU;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Mp=!0,l.add(n),e=RU.bind(null,e,t,n),t.then(e,e))}function RU(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ze===e&&(we&n)===n&&(Xe===4||Xe===3&&(we&62914560)===we&&300>Pt()-nc?Ue&2?yr|=n:po(e,0):yr|=n,co===we&&(co=0)),jn(e)}function Sy(e,t){t===0&&(t=ug()),e=bl(e,t),e!==null&&(Li(e,t),jn(e))}function BU(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sy(e,n)}function OU(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(Y(314))}a!==null&&a.delete(t),Sy(e,n)}function ZU(e,t){return ep(e,t)}var mo=null,wl=null,hd=!1,_r=!1,Lc=!1,ka=0;function jn(e){e!==wl&&e.next===null&&(wl===null?mo=wl=e:wl=wl.next=e),_r=!0,hd||(hd=!0,DU())}function qi(e,t){if(!Lc&&_r){Lc=!0;do for(var n=!1,a=mo;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var o=0;else{var i=a.suspendedLanes,s=a.pingedLanes;o=(1<<31-Yt(42|e)+1)-1,o&=l&~(i&~s),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Ih(a,o))}else o=we,o=Hr(a,a===Ze?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(o&3)||Mi(a,o)||(n=!0,Ih(a,o));a=a.next}while(n);Lc=!1}}function jU(){xy()}function xy(){_r=hd=!1;var e=0;ka!==0&&YU()&&(e=ka);for(var t=Pt(),n=null,a=mo;a!==null;){var l=a.next,o=Cy(a,t);o===0?(a.next=null,n===null?mo=l:n.next=l,l===null&&(wl=n)):(n=a,(e!==0||o&3)&&(_r=!0)),a=l}Pe!==0&&Pe!==5||qi(e),ka!==0&&(ka=0)}function Cy(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var i=31-Yt(o),s=1<<i,c=l[i];c===-1?(!(s&n)||s&a)&&(l[i]=t2(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}if(t=Ze,n=we,n=Hr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&gc(a),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Mi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&gc(a),np(n)){case 2:case 8:n=sg;break;case 32:n=tr;break;case 268435456:n=rg;break;default:n=tr}return a=_y.bind(null,e),n=ep(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&gc(a),e.callbackPriority=2,e.callbackNode=null,2}function _y(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(oc()&&e.callbackNode!==n)return null;var a=we;return a=Hr(e,e===Ze?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(py(e,a,t),Cy(e,Pt()),e.callbackNode!=null&&e.callbackNode===n?_y.bind(null,e):null)}function Ih(e,t){if(oc())return null;py(e,t,!0)}function DU(){QU(function(){Ue&6?ep(ig,jU):xy()})}function Vp(){if(ka===0){var e=sl;e===0&&(e=es,es<<=1,!(es&261888)&&(es=256)),ka=e}return ka}function Fh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zs(e)}function MU(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var o=Fh((l[Lt]||null).action),i=a.submitter;i&&(t=(t=i[Lt]||null)?Fh(t.formAction):i.getAttribute("formAction"),t!==null&&(o=t,i=null));var s=new Fr("action","action",null,a,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ka!==0){var c=new FormData(l,i);Fu(n,{pending:!0,data:c,method:l.method,action:o},null,c)}}else typeof o=="function"&&(s.preventDefault(),c=new FormData(l,i),Fu(n,{pending:!0,data:c,method:l.method,action:o},o,c))},currentTarget:l}]})}}for(var Vc=0;Vc<Ru.length;Vc++){var Hc=Ru[Vc],LU=Hc.toLowerCase(),VU=Hc[0].toUpperCase()+Hc.slice(1);vn(LU,"on"+VU)}vn(Og,"onAnimationEnd");vn(Zg,"onAnimationIteration");vn(jg,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(X2,"onTransitionRun");vn(Q2,"onTransitionStart");vn(J2,"onTransitionCancel");vn(Dg,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);vl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vl("onBeforeInput",["compositionend","keypress","textInput","paste"]);vl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HU=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wi));function ky(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var i=a.length-1;0<=i;i--){var s=a[i],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==o&&l.isPropagationStopped())break e;o=s,l.currentTarget=d;try{o(l)}catch(m){ar(m)}l.currentTarget=null,o=c}else for(i=0;i<a.length;i++){if(s=a[i],c=s.instance,d=s.currentTarget,s=s.listener,c!==o&&l.isPropagationStopped())break e;o=s,l.currentTarget=d;try{o(l)}catch(m){ar(m)}l.currentTarget=null,o=c}}}}function Ce(e,t){var n=t[Mm];n===void 0&&(n=t[Mm]=new Set);var a=e+"__bubble";n.has(a)||(wy(t,e,2,!1),n.add(a))}function Ic(e,t,n){var a=0;t&&(a|=4),wy(n,e,a,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function Hp(e){if(!e[ms]){e[ms]=!0,vg.forEach(function(n){n!=="selectionchange"&&(HU.has(n)||Ic(n,!1,e),Ic(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,Ic("selectionchange",!1,t))}}function wy(e,t,n,a){switch(Gy(t)){case 2:var l=B$;break;case 8:l=O$;break;default:l=Yp}n=l.bind(null,t,n,e),l=void 0,!Uu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Fc(e,t,n,a,l){var o=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var s=a.stateNode.containerInfo;if(s===l)break;if(i===4)for(i=a.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===l)return;i=i.return}for(;s!==null;){if(i=Ya(s),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){a=o=i;continue e}s=s.parentNode}}a=a.return}kg(function(){var d=o,m=lp(n),p=[];e:{var h=Mg.get(e);if(h!==void 0){var g=Fr,k=e;switch(e){case"keypress":if($s(n)===0)break e;case"keydown":case"keyup":g=N2;break;case"focusin":k="focus",g=_c;break;case"focusout":k="blur",g=_c;break;case"beforeblur":case"afterblur":g=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=h2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=E2;break;case Og:case Zg:case jg:g=g2;break;case Dg:g=R2;break;case"scroll":case"scrollend":g=p2;break;case"wheel":g=O2;break;case"copy":case"cut":case"paste":g=y2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ym;break;case"submit":g=U2;break;case"toggle":case"beforetoggle":g=j2}var x=(t&4)!==0,S=!x&&(e==="scroll"||e==="scrollend"),v=x?h!==null?h+"Capture":null:h;x=[];for(var f=d,y;f!==null;){var _=f;if(y=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||y===null||v===null||(_=gi(f,v),_!=null&&x.push(Ni(f,_,y))),S)break;f=f.return}0<x.length&&(h=new g(h,k,null,n,m),p.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",g&&n!==zu&&(k=n.relatedTarget||n.fromElement)&&(Ya(k)||k[No]))break e;(h||g)&&(k=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=d,g=g?Ya(g):null,g!==null&&(S=ji(g),x=g.tag,g!==S||x!==5&&x!==27&&x!==6)&&(g=null)):(h=null,g=d),h!==g&&(x=Pm,_="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ym,_="onPointerLeave",v="onPointerEnter",f="pointer"),S=h==null?k:Po(h),y=g==null?k:Po(g),k=new x(_,f+"leave",h,n,m),k.target=S,k.relatedTarget=y,_=null,Ya(m)===d&&(x=new x(v,f+"enter",g,n,m),x.target=y,x.relatedTarget=S,_=x),S=_,x=h&&g?vu(h,g,IU):null,h!==null&&Kh(p,k,h,x,!1),g!==null&&S!==null&&Kh(p,S,g,x,!0)))}e:{if(h=d?Po(d):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=Wm;else if(Jm(h))if($g)T=P2;else{T=K2;var N=F2}else g=h.nodeName,!g||g.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?d&&ap(d.elementType)&&(T=Wm):T=q2;if(T&&(T=T(e,d))){Ug(p,T,n,m);break e}N&&N(e,h,d)}switch(N=d?Po(d):window,e){case"focusin":(Jm(N)||N.contentEditable==="true")&&(Ol=N,Eu=d,ai=null);break;case"focusout":ai=Eu=Ol=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,lh(p,n,m);break;case"selectionchange":if(Y2)break;case"keydown":case"keyup":lh(p,n,m)}var A;if(sp)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Bl?Tg(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ng&&n.locale!=="ko"&&(Bl||R!=="onCompositionStart"?R==="onCompositionEnd"&&Bl&&(A=wg()):(Sa=m,op="value"in Sa?Sa.value:Sa.textContent,Bl=!0)),N=kr(d,R),0<N.length&&(R=new Gm(R,e,null,n,m),p.push({event:R,listeners:N}),A?R.data=A:(A=zg(n),A!==null&&(R.data=A)))),(A=M2?L2(e,n):V2(e,n))&&(R=kr(d,"onBeforeInput"),0<R.length&&(N=new Gm("onBeforeInput","beforeinput",null,n,m),p.push({event:N,listeners:R}),N.data=A)),MU(p,e,d,n,m)}ky(p,t)})}function Ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=gi(e,n),l!=null&&a.unshift(Ni(e,l,o)),l=gi(e,t),l!=null&&a.push(Ni(e,l,o))),e.tag===3)return a;e=e.return}return[]}function IU(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kh(e,t,n,a,l){for(var o=t._reactName,i=[];n!==null&&n!==a;){var s=n,c=s.alternate,d=s.stateNode;if(s=s.tag,c!==null&&c===a)break;s!==5&&s!==26&&s!==27||d===null||(c=d,l?(d=gi(n,o),d!=null&&i.unshift(Ni(n,d,c))):l||(d=gi(n,o),d!=null&&i.push(Ni(n,d,c)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var FU=/\r\n?/g,KU=/\u0000|\uFFFD/g;function qh(e){return(typeof e=="string"?e:""+e).replace(FU,`
`).replace(KU,"")}function Ny(e,t){return t=qh(t),qh(e)===t}function Re(e,t,n,a,l,o){switch(n){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||so(e,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&so(e,""+a);else return;break;case"className":as(e,"class",a);break;case"tabIndex":as(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":as(e,n,a);break;case"style":_g(e,a,o);return;case"data":if(t!=="object"){as(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=zs(a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Re(e,t,"name",l.name,l,null),Re(e,t,"formEncType",l.formEncType,l,null),Re(e,t,"formMethod",l.formMethod,l,null),Re(e,t,"formTarget",l.formTarget,l,null)):(Re(e,t,"encType",l.encType,l,null),Re(e,t,"method",l.method,l,null),Re(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=zs(a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Nn);return;case"onScroll":a!=null&&Ce("scroll",e);return;case"onScrollEnd":a!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(Y(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(Y(60));(o!=null?o.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=zs(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Ts(e,"popover",a);break;case"xlinkActuate":Dn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Dn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Dn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Dn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Dn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Dn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Dn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Dn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Dn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ts(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=u2.get(n)||n,Ts(e,n,a);else return}ze=!0}function fd(e,t,n,a,l,o){switch(n){case"style":_g(e,a,o);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(Y(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(Y(60));(o!=null?o.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof a=="string")so(e,a);else if(typeof a=="number"||typeof a=="bigint")so(e,""+a);else return;break;case"onScroll":a!=null&&Ce("scroll",e);return;case"onScrollEnd":a!=null&&Ce("scrollend",e);return;case"onClick":a!=null&&(e.onclick=Nn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!gg.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),o=n.slice(2,l?n.length-7:void 0),t=e[Lt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(o,t,l),typeof a=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,a,l);break e}ze=!0,n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ts(e,n,a)}return}ze=!0}function bt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var a=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var i=n[o];if(i!=null)switch(o){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:Re(e,t,o,i,n,null)}}l&&Re(e,t,"srcSet",n.srcSet,n,null),a&&Re(e,t,"src",n.src,n,null);return;case"input":Ce("invalid",e);var s=o=i=l=null,c=null,d=null;for(a in n)if(n.hasOwnProperty(a)){var m=n[a];if(m!=null)switch(a){case"name":l=m;break;case"type":i=m;break;case"checked":c=m;break;case"defaultChecked":d=m;break;case"value":o=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(Y(137,t));break;default:Re(e,t,a,m,n,null)}}Sg(e,o,s,c,d,i,l,!1);return;case"select":Ce("invalid",e),a=i=o=null;for(l in n)if(n.hasOwnProperty(l)&&(s=n[l],s!=null))switch(l){case"value":o=s;break;case"defaultValue":i=s;break;case"multiple":a=s;default:Re(e,t,l,s,n,null)}t=o,n=i,e.multiple=!!a,t!=null?ql(e,!!a,t,!1):n!=null&&ql(e,!!a,n,!0);return;case"textarea":Ce("invalid",e),o=l=a=null;for(i in n)if(n.hasOwnProperty(i)&&(s=n[i],s!=null))switch(i){case"value":a=s;break;case"defaultValue":l=s;break;case"children":o=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Y(91));break;default:Re(e,t,i,s,n,null)}Cg(e,a,l,o);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(a=n[c],a!=null))switch(c){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Re(e,t,c,a,n,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(a=0;a<wi.length;a++)Ce(wi[a],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&(a=n[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:Re(e,t,d,a,n,null)}return;default:if(ap(t)){for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!==void 0&&fd(e,t,m,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(a=n[s],a!=null&&Re(e,t,s,a,n,null))}var qU={};function PU(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,i=null,s=null,c=null,d=null,m=null;for(g in n){var p=n[g];if(n.hasOwnProperty(g)&&p!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":c=p;default:a.hasOwnProperty(g)||Re(e,t,g,null,a,p)}}for(var h in a){var g=a[h];if(p=n[h],a.hasOwnProperty(h)&&(g!=null||p!=null))switch(h){case"type":g!==p&&(ze=!0),o=g;break;case"name":g!==p&&(ze=!0),l=g;break;case"checked":g!==p&&(ze=!0),d=g;break;case"defaultChecked":g!==p&&(ze=!0),m=g;break;case"value":g!==p&&(ze=!0),i=g;break;case"defaultValue":g!==p&&(ze=!0),s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(Y(137,t));break;default:g!==p&&Re(e,t,h,g,a,p)}}Tu(e,i,s,c,d,m,o,l);return;case"select":g=i=s=h=null;for(o in n)if(c=n[o],n.hasOwnProperty(o)&&c!=null)switch(o){case"value":break;case"multiple":g=c;default:a.hasOwnProperty(o)||Re(e,t,o,null,a,c)}for(l in a)if(o=a[l],c=n[l],a.hasOwnProperty(l)&&(o!=null||c!=null))switch(l){case"value":o!==c&&(ze=!0),h=o;break;case"defaultValue":o!==c&&(ze=!0),s=o;break;case"multiple":o!==c&&(ze=!0),i=o;default:o!==c&&Re(e,t,l,o,a,c)}t=s,n=i,a=g,h!=null?ql(e,!!n,h,!1):!!a!=!!n&&(t!=null?ql(e,!!n,t,!0):ql(e,!!n,n?[]:"",!1));return;case"textarea":g=h=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Re(e,t,s,null,a,l)}for(i in a)if(l=a[i],o=n[i],a.hasOwnProperty(i)&&(l!=null||o!=null))switch(i){case"value":l!==o&&(ze=!0),h=l;break;case"defaultValue":l!==o&&(ze=!0),g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(Y(91));break;default:l!==o&&Re(e,t,i,l,a,o)}xg(e,h,g);return;case"option":for(var k in n)if(h=n[k],n.hasOwnProperty(k)&&h!=null&&!a.hasOwnProperty(k))switch(k){case"selected":e.selected=!1;break;default:Re(e,t,k,null,a,h)}for(c in a)if(h=a[c],g=n[c],a.hasOwnProperty(c)&&h!==g&&(h!=null||g!=null))switch(c){case"selected":h!==g&&(ze=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:Re(e,t,c,h,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)h=n[x],n.hasOwnProperty(x)&&h!=null&&!a.hasOwnProperty(x)&&Re(e,t,x,null,a,h);for(d in a)if(h=a[d],g=n[d],a.hasOwnProperty(d)&&h!==g&&(h!=null||g!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Y(137,t));break;default:Re(e,t,d,h,a,g)}return;default:if(ap(t)){for(var S in n)h=n[S],n.hasOwnProperty(S)&&h!==void 0&&!a.hasOwnProperty(S)&&fd(e,t,S,void 0,a,h);for(m in a)h=a[m],g=n[m],!a.hasOwnProperty(m)||h===g||h===void 0&&g===void 0||fd(e,t,m,h,a,g);return}}for(var v in n)h=n[v],n.hasOwnProperty(v)&&h!=null&&!a.hasOwnProperty(v)&&Re(e,t,v,null,a,h);for(p in a)h=a[p],g=n[p],!a.hasOwnProperty(p)||h===g||h==null&&g==null||Re(e,t,p,h,a,g)}function Ph(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GU(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],o=l.transferSize,i=l.initiatorType,s=l.duration;if(o&&s&&Ph(i)){for(i=0,s=l.responseEnd,a+=1;a<n.length;a++){var c=n[a],d=c.startTime;if(d>s)break;var m=c.transferSize,p=c.initiatorType;m&&Ph(p)&&(c=c.responseEnd,i+=m*(c<s?1:(s-d)/(c-d)))}if(--a,t+=8*(o+i)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vd=null,gd=null;function Ti(e){return e.nodeType===9?e:e.ownerDocument}function Gh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ty(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zy(e,t,n,a){return n=Ti(n).createElement(e),n[ht]=a,n[Lt]=t,bt(n,e,t),ct(n),n}function bd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kc=null;function YU(){var e=window.event;return e&&e.type==="popstate"?e===Kc?!1:(Kc=e,!0):(Kc=null,!1)}var Ip=typeof setTimeout=="function"?setTimeout:void 0,XU=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,Xh=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ip,QU=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(e){return Yh.resolve(null).then(e).catch(JU)}:Ip;function JU(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function Qh(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),bo(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Pc(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Pc(n);for(var o=n.firstChild;o;){var i=o.nextSibling,s=o.nodeName;o[Vi]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=i}}else n==="body"&&Pc(e.ownerDocument.body);n=l}while(n);bo(t)}function Jh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Uy(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var a=1;else for(var l=a=0;l<t.length;l++){var o=t[l];0<o.width&&0<o.height&&a++}a===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function $y(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function WU(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function yd(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return WU(t,n,e)}function e$(e){return e.documentElement.clientHeight}function t$(e){this.addEventListener("load",e),this.addEventListener("error",e)}function n$(e,t,n,a,l,o,i,s,c){var d=t.nodeType===9?t:t.ownerDocument;try{var m=d.startViewTransition({update:function(){var h=d.defaultView,g=h.navigation&&h.navigation.transition,k=d.fonts.status;a();var x=[];if(k==="loaded"&&(e$(d),d.fonts.status==="loading"&&x.push(d.fonts.ready)),k=x.length,e!==null)for(var S=e.suspenseyImages,v=0,f=0;f<S.length;f++){var y=S[f];if(!y.complete){var _=y.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<h.innerHeight&&_.left<h.innerWidth){if(v+=Hy(y),v>Is){x.length=k;break}y=new Promise(t$.bind(y)),x.push(y)}}}if(0<x.length)return h=Promise.race([Promise.all(x),new Promise(function(T){return setTimeout(T,500)})]).then(l,l),(g?Promise.allSettled([g.finished,h]):h).then(o,o);if(l(),g)return g.finished.then(o,o);o()},types:n});d.__reactViewTransition=m;var p=[];return m.ready.then(function(){for(var h=d.documentElement.getAnimations({subtree:!0}),g=0;g<h.length;g++){var k=h[g],x=k.effect,S=x.pseudoElement;if(S!=null&&S.startsWith("::view-transition")){p.push(k),k=x.getKeyframes();for(var v=S=void 0,f=!0,y=0;y<k.length;y++){var _=k[y],T=_.width;if(S===void 0)S=T;else if(S!==T){f=!1;break}if(T=_.height,v===void 0)v=T;else if(v!==T){f=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}f&&S!==void 0&&v!==void 0&&(x.setKeyframes(k),f=getComputedStyle(x.target,x.pseudoElement),f.width!==S||f.height!==v)&&(f=k[0],f.width=S,f.height=v,f=k[k.length-1],f.width=S,f.height=v,x.setKeyframes(k))}}i()},function(h){d.__reactViewTransition===m&&(d.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&c(h)}finally{a(),l(),i()}}),m.finished.finally(function(){for(var h=0;h<p.length;h++)p[h].cancel();d.__reactViewTransition===m&&(d.__reactViewTransition=null),s()}),m}catch{return a(),l(),i(),null}}function Xa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Xa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:je({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Xa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),a=[],l=0;l<n.length;l++){var o=n[l].effect;o!==null&&o.target===e&&o.pseudoElement===t&&a.push(n[l])}return a};Xa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ey(e){return{name:e,group:new Xa("group",e),imagePair:new Xa("image-pair",e),old:new Xa("old",e),new:new Xa("new",e)}}function Jt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Jt.prototype.addEventListener=function(e,t,n){var a=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(a=n.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var o=this._eventListeners;if(Ay(o,e,t,n)===-1){var i=this,s=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(s=function(c){i.removeEventListener(e,t,n),typeof t=="function"?t.call(this,c):t.handleEvent(c)}),a!==null&&(l=i.removeEventListener.bind(i,e,t,n),a.addEventListener("abort",l,{once:!0}),l=a.removeEventListener.bind(a,"abort",l)),a=ho(n),o.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:l}),Mt(this._fragmentFiber.child,!1,a$,e,s,a)}this._eventListeners=o}};function a$(e,t,n,a){return at(e).addEventListener(t,n,a),!1}Jt.prototype.removeEventListener=function(e,t,n){var a=this._eventListeners;if(a!==null&&(t=Ay(a,e,t,n),t!==-1)){var l=a[t];n=l.attachedListener;var o=l.cleanup;l=ho(l.optionsOrUseCapture),Mt(this._fragmentFiber.child,!1,l$,e,n,l),a.splice(t,1),o!==null&&o()}};function l$(e,t,n,a){return at(e).removeEventListener(t,n,a),!1}function ho(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Wh(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Ay(e,t,n,a){if(e.length===0)return-1;a=Wh(a);for(var l=0;l<e.length;l++){var o=e[l];if(o.type===t&&o.listener===n&&Wh(o.optionsOrUseCapture)===a)return l}return-1}Jt.prototype.dispatchEvent=function(e){var t=fl(this._fragmentFiber);if(t===null)return!0;t=at(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var o=n[l];a.addEventListener(o.type,o.attachedListener,ho(o.optionsOrUseCapture))}if(t.appendChild(a),e=a.dispatchEvent(e),n)for(l=0;l<n.length;l++)o=n[l],a.removeEventListener(o.type,o.attachedListener,ho(o.optionsOrUseCapture));return t.removeChild(a),e}return t.dispatchEvent(e)};Jt.prototype.focus=function(e){Mt(this._fragmentFiber.child,!0,Ry,e,void 0,void 0)};function Ry(e,t){return e.tag===6?!1:(e=at(e),v$(e,t))}Jt.prototype.focusLast=function(e){var t=[];Mt(this._fragmentFiber.child,!0,Fp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Ry(t[n],e);n--);};function Fp(e,t){return t.push(e),!1}Jt.prototype.blur=function(){var e=fl(this._fragmentFiber);e!==null&&(e=at(e),e=Ti(e).activeElement,e!==null&&Mt(this._fragmentFiber.child,!1,o$,e,void 0,void 0))};function o$(e,t){return e.tag===6?!1:(e=at(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Jt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Mt(this._fragmentFiber.child,!1,i$,e,void 0,void 0)};function i$(e,t){return e.tag===6||(e=at(e),t.observe(e)),!1}Jt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Mt(this._fragmentFiber.child,!1,s$,e,void 0,void 0);for(var n=t=0;n<hn.length;n++){var a=hn[n];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):hn[t++]=a}hn.length=t}};function s$(e,t){return e.tag===6||(e=at(e),t.unobserve(e)),!1}var hn=[],qc=!1;function r$(e,t,n){hn.push({fragmentInstance:e,observer:t,instance:n}),qc||(qc=!0,g$(function(){qc=!1;var a=hn;hn=[];for(var l=0;l<a.length;l++){var o=a[l];o.observer.unobserve(o.instance)}}))}Jt.prototype.getClientRects=function(){var e=[];return Mt(this._fragmentFiber.child,!1,c$,e,void 0,void 0),e};function c$(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=at(e),t.push.apply(t,e.getClientRects());return!1}Jt.prototype.getRootNode=function(e){var t=fl(this._fragmentFiber);return t===null?this:at(t).getRootNode(e)};Jt.prototype.compareDocumentPosition=function(e){var t=fl(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Mt(this._fragmentFiber.child,!1,Fp,n,void 0,void 0);var a=at(t);if(n.length===0){if(n=a,Rm(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var l=a=n.compareDocumentPosition(e);return n===e?l=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ng(t)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=at(n).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=at(n[0]),l=at(n[n.length-1]);var o=Rm(this._fragmentFiber)?t.parentElement:a;if(o==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=o.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=t.compareDocumentPosition(e),s=l.compareDocumentPosition(e),c=i&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=a&&o&&i&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===e||o&&l===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===e||!o&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||u$(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function u$(e,t,n,a,l){var o=Ya(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!o)e:{for(;o!==null;){if(o.tag===7&&(o===t||o.alternate===t)){n=!0;break e}o=o.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(o===null)return o=l.ownerDocument,l===o||l===o.documentElement||l===o.body;e:{for(o=t,t=fl(t);o!==null;){if(!(o.tag!==5&&o.tag!==3&&o.tag!==27||o!==t&&o.alternate!==t)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!o)&&!(t=o===n)&&(t=vu(n,o,Bm),t===null?t=!1:(Mt(t,!0,Dz,o,n),o=$l,$l=null,t=o!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!o)&&!(t=o===a)&&(t=vu(a,o,Bm),t===null?t=!1:(Mt(t,!0,Mz,o,a),o=$l,fu=$l=null,t=o!==null)),t):!1}function ef(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Jt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Y(566));var t=[];Mt(this._fragmentFiber.child,!1,Fp,t,void 0,void 0);var n=e!==!1;if(t.length===0){var a=ng(this._fragmentFiber);if(a=n?a[1]||a[0]||fl(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=at(a),ef(e,n);return}if(a=at(a),a.nodeType!==9){if(a.nodeType===11){n="host"in a?a.host:null,n!==null&&n.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=n?t.length-1:0;a!==(n?-1:t.length);){var l=t[a];l.tag===6?(l=at(l),ef(l,n)):at(l).scrollIntoView(e),a+=n?-1:1}};function d$(e,t){return e=at(e),By(e,t),!1}function By(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Oy(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];e.addEventListener(l.type,l.attachedListener,ho(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(o){for(var i=0,s=0;s<hn.length;s++){var c=hn[s];(c.fragmentInstance!==t||c.observer!==o||c.instance!==e)&&(hn[i++]=c)}hn.length=i,o.observe(e)}),By(e,t))}function p$(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];e.removeEventListener(l.type,l.attachedListener,ho(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(o){typeof o.rootMargin=="string"?r$(t,o,e):o.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Sd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Sd(n),Ir(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function m$(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Vi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=rn(e.nextSibling),e===null)break}return null}function h$(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rn(e.nextSibling),e===null))return null;return e}function Zy(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=rn(e.nextSibling),e===null))return null;return e}function xd(e){return e.data==="$?"||e.data==="$~"}function Kp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function f$(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Cd=null;function tf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return rn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function v$(e,t){function n(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return a}function g$(e){Xh(function(){Xh(function(t){return e(t)})})}function jy(e,t,n){switch(t=Ti(n),e){case"html":if(e=t.documentElement,!e)throw Error(Y(452));return e;case"head":if(e=t.head,!e)throw Error(Y(453));return e;case"body":if(e=t.body,!e)throw Error(Y(454));return e;default:throw Error(Y(451))}}function Dy(e,t,n){for(var a in n){var l=n[a];n.hasOwnProperty(a)&&l!=null&&Re(e,t,a,null,qU,l)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Nn&&(e.onclick=null),Ir(e)}function Pc(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ir(e)}var un=new Map,af=new Set;function zi(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var sa=$e.d;$e.d={f:b$,r:y$,D:S$,C:x$,L:C$,m:_$,X:w$,S:k$,M:N$};function b$(){var e=sa.f(),t=ac();return e||t}function y$(e){var t=To(e);t!==null&&t.tag===5&&t.type==="form"?_b(t):sa.r(e)}var Eo=typeof document>"u"?null:document;function My(e,t,n){var a=Eo;if(a&&typeof t=="string"&&t){var l=an(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),af.has(l)||(af.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),bt(t,"link",e),ct(t),a.head.appendChild(t)))}}function S$(e){sa.D(e),My("dns-prefetch",e,null)}function x$(e,t){sa.C(e,t),My("preconnect",e,t)}function C$(e,t,n){sa.L(e,t,n);var a=Eo;if(a&&e&&t){var l='link[rel="preload"][as="'+an(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+an(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+an(n.imageSizes)+'"]')):l+='[href="'+an(e)+'"]';var o=l;switch(t){case"style":o=fo(e);break;case"script":o=Ao(e)}if(!(un.has(o)||(e=je({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),un.set(o,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Pi(o))||t==="script"&&a.querySelector(Gi(o))))){var i=a.createElement("link");bt(i,"link",e),t==="style"&&(i[nr]=!0,i.onload=i.onerror=function(){fg(i)}),ct(i),a.head.appendChild(i)}}}function _$(e,t){sa.m(e,t);var n=Eo;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+an(a)+'"][href="'+an(e)+'"]',o=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ao(e)}if(!un.has(o)&&(e=je({rel:"modulepreload",href:e},t),un.set(o,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Gi(o)))return}a=n.createElement("link"),bt(a,"link",e),ct(a),n.head.appendChild(a)}}}function k$(e,t,n){sa.S(e,t,n);var a=Eo;if(a&&e){var l=Kl(a).hoistableStyles,o=fo(e);t=t||"default";var i=l.get(o);if(!i){var s={loading:0,preload:null};if(i=a.querySelector(Pi(o)))s.loading=5;else{e=je({rel:"stylesheet",href:e,"data-precedence":t},n),(n=un.get(o))&&qp(e,n);var c=i=a.createElement("link");ct(c),bt(c,"link",e),c._p=new Promise(function(d,m){c.onload=d,c.onerror=m}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Vs(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:s},l.set(o,i)}}}function w$(e,t){sa.X(e,t);var n=Eo;if(n&&e){var a=Kl(n).hoistableScripts,l=Ao(e),o=a.get(l);o||(o=n.querySelector(Gi(l)),o||(e=je({src:e,async:!0},t),(t=un.get(l))&&Pp(e,t),o=n.createElement("script"),ct(o),bt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function N$(e,t){sa.M(e,t);var n=Eo;if(n&&e){var a=Kl(n).hoistableScripts,l=Ao(e),o=a.get(l);o||(o=n.querySelector(Gi(l)),o||(e=je({src:e,async:!0,type:"module"},t),(t=un.get(l))&&Pp(e,t),o=n.createElement("script"),ct(o),bt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function lf(e,t,n,a){var l=(l=wa.current)?zi(l):null;if(!l)throw Error(Y(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=fo(n.href),t=Kl(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=fo(n.href);var o=Kl(l).hoistableStyles,i=o.get(e);if(i||(l=l.ownerDocument||l,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,i),(o=l.querySelector(Pi(e)))?o._p||(i.instance=o,i.state.loading=5):(o=un.get(e),o||(o={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},un.set(e,o)),T$(l,e,o,i.state))),t&&a===null)throw Error(Y(528,""));return i}if(t&&a!==null)throw Error(Y(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Ao(n),t=Kl(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,e))}}function fo(e){return'href="'+an(e)+'"'}function Pi(e){return'link[rel="stylesheet"]['+e+"]"}function Ly(e){return je({},e,{"data-precedence":e.precedence,precedence:null})}function T$(e,t,n,a){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[nr]!==!0){a.loading=1;return}}else t=e.createElement("link"),t[nr]=!0,t.onload=t.onerror=fg.bind(null,t),bt(t,"link",n),ct(t),e.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function Ao(e){return'[src="'+an(e)+'"]'}function Gi(e){return"script[async]"+e}function of(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+an(n.href)+'"]');if(a)return t.instance=a,ct(a),a;var l=je({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ct(a),bt(a,"style",l),Vs(a,n.precedence,e),t.instance=a;case"stylesheet":l=fo(n.href);var o=e.querySelector(Pi(l));if(o)return t.state.loading|=4,t.instance=o,ct(o),o;a=Ly(n),(l=un.get(l))&&qp(a,l),o=(e.ownerDocument||e).createElement("link"),ct(o);var i=o;return i._p=new Promise(function(s,c){i.onload=s,i.onerror=c}),bt(o,"link",a),t.state.loading|=4,Vs(o,n.precedence,e),t.instance=o;case"script":return o=Ao(n.src),(l=e.querySelector(Gi(o)))?(t.instance=l,ct(l),l):(a=n,(l=un.get(o))&&(a=je({},n),Pp(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),ct(l),bt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(Y(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,Vs(a,n.precedence,e));return t.instance}function Vs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,o=l,i=0;i<a.length;i++){var s=a[i];if(s.dataset.precedence===t)o=s;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function qp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Pp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hs=null;function sf(e,t,n){if(Hs===null){var a=new Map,l=Hs=new Map;l.set(n,a)}else l=Hs,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var o=n[l];if(!(o[Vi]||o[ht]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var i=o.getAttribute(t)||"";i=e+i;var s=a.get(i);s?s.push(o):a.set(i,[o])}}return a}function _d(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function z$(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rf(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Vy(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Hy(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function cf(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Hy(t),e.suspenseyImages.push(t)),e=E$.bind(e),t.decode().then(e,e))}function U$(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var l=fo(a.href),o=t.querySelector(Pi(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ui.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,ct(o);return}o=t.ownerDocument||t,a=Ly(a),(l=un.get(l))&&qp(a,l),o=o.createElement("link"),ct(o);var i=o;i._p=new Promise(function(s,c){i.onload=s,i.onerror=c}),bt(o,"link",a),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Ui.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Is=0;function $$(e,t){return e.stylesheets&&e.count===0&&Fs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Fs(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Is===0&&(Is=62500*GU());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fs(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Is?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Iy(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Fs(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Ui(){this.count--,Iy(this)}function E$(){this.imgCount--,Iy(this)}var wr=null;function Fs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wr=new Map,t.forEach(A$,e),wr=null,Ui.call(e))}function A$(e,t){if(!(t.state.loading&4)){var n=wr.get(e);if(n)var a=n.get(null);else{n=new Map,wr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var i=l[o];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),a=i)}a&&n.set(null,a)}l=t.instance,i=l.getAttribute("data-precedence"),o=n.get(i)||a,o===a&&n.set(null,l),n.set(i,l),this.count++,a=Ui.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var vo={$$typeof:wn,Provider:null,Consumer:null,_currentValue:Qa,_currentValue2:Qa,_threadCount:0};function R$(e,t,n,a,l,o,i,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.hiddenUpdates=bc(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function Fy(e,t,n,a,l,o,i,s,c,d,m,p){return e=new R$(e,t,n,i,c,d,m,p,s),t=1,o===!0&&(t|=24),o=Ot(3,null,null,t),e.current=o,o.stateNode=e,t=mp(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},vp(o),e}function Ky(e){return e?(e=Dl,e):Dl}function qy(e,t,n,a,l,o){l=Ky(l),a.context===null?a.context=l:a.pendingContext=l,a=Ta(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=za(e,a,t),n!==null&&(Dt(n,e,t),oi(n,e,t))}function uf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gp(e,t){uf(e,t),(e=e.alternate)&&uf(e,t)}function Py(e){if(e.tag===13||e.tag===31){var t=bl(e,67108864);t!==null&&Dt(t,e,67108864),Gp(e,67108864)}}function df(e){if(e.tag===13||e.tag===31){var t=Xt();t=tp(t);var n=bl(e,t);n!==null&&Dt(n,e,t),Gp(e,t)}}var go=!0;function B$(e,t,n,a){var l=fe.T;fe.T=null;var o=$e.p;try{$e.p=2,Yp(e,t,n,a)}finally{$e.p=o,fe.T=l}}function O$(e,t,n,a){var l=fe.T;fe.T=null;var o=$e.p;try{$e.p=8,Yp(e,t,n,a)}finally{$e.p=o,fe.T=l}}function Yp(e,t,n,a){if(go){var l=kd(a);if(l===null)Fc(e,t,a,Nr,n),pf(e,a);else if(j$(l,e,t,n,a))a.stopPropagation();else if(pf(e,a),t&4&&-1<Z$.indexOf(e)){for(;l!==null;){var o=To(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var i=Ka(o.pendingLanes);if(i!==0){var s=o;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var c=1<<31-Yt(i);s.entanglements[1]|=c,i&=~c}jn(o),!(Ue&6)&&(Sr=Pt()+500,qi(0))}}break;case 31:case 13:s=bl(o,2),s!==null&&Dt(s,o,2),ac(),Gp(o,2)}if(o=kd(a),o===null&&Fc(e,t,a,Nr,n),o===l)break;l=o}l!==null&&a.stopPropagation()}else Fc(e,t,a,null,n)}}function kd(e){return e=lp(e),Xp(e)}var Nr=null;function Xp(e){if(Nr=null,e=Ya(e),e!==null){var t=ji(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Wv(t),e!==null)return e;e=null}else if(n===31){if(e=eg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function Gy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gz()){case ig:return 2;case sg:return 8;case tr:case Yz:return 32;case rg:return 268435456;default:return 32}default:return 32}}var wd=!1,Aa=null,Ra=null,Ba=null,$i=new Map,Ei=new Map,fa=[],Z$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pf(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":$i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Lo(e,t,n,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},t!==null&&(t=To(t),t!==null&&Py(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function j$(e,t,n,a,l){switch(t){case"focusin":return Aa=Lo(Aa,e,t,n,a,l),!0;case"dragenter":return Ra=Lo(Ra,e,t,n,a,l),!0;case"mouseover":return Ba=Lo(Ba,e,t,n,a,l),!0;case"pointerover":var o=l.pointerId;return $i.set(o,Lo($i.get(o)||null,e,t,n,a,l)),!0;case"gotpointercapture":return o=l.pointerId,Ei.set(o,Lo(Ei.get(o)||null,e,t,n,a,l)),!0}return!1}function Yy(e){var t=Ya(e.target);if(t!==null){var n=ji(t);if(n!==null){if(t=n.tag,t===13){if(t=Wv(n),t!==null){e.blockedOn=t,Dm(e.priority,function(){df(n)});return}}else if(t===31){if(t=eg(n),t!==null){e.blockedOn=t,Dm(e.priority,function(){df(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kd(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);zu=a,n.target.dispatchEvent(a),zu=null}else return t=To(n),t!==null&&Py(t),e.blockedOn=n,!1;t.shift()}return!0}function mf(e,t,n){Ks(e)&&n.delete(t)}function D$(){wd=!1,Aa!==null&&Ks(Aa)&&(Aa=null),Ra!==null&&Ks(Ra)&&(Ra=null),Ba!==null&&Ks(Ba)&&(Ba=null),$i.forEach(mf),Ei.forEach(mf)}function hs(e,t){e.blockedOn===t&&(e.blockedOn=null,wd||(wd=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,D$)))}var fs=null;function hf(e){fs!==e&&(fs=e,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,function(){fs===e&&(fs=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Xp(a||n)===null)continue;break}var o=To(n);o!==null&&(e.splice(t,3),t-=3,Fu(o,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function bo(e){function t(c){return hs(c,e)}Aa!==null&&hs(Aa,e),Ra!==null&&hs(Ra,e),Ba!==null&&hs(Ba,e),$i.forEach(t),Ei.forEach(t);for(var n=0;n<fa.length;n++){var a=fa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<fa.length&&(n=fa[0],n.blockedOn===null);)Yy(n),n.blockedOn===null&&fa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],o=n[a+1],i=l[Lt]||null;if(typeof o=="function")i||hf(n);else if(i){var s=null;if(o&&o.hasAttribute("formAction")){if(l=o,i=o[Lt]||null)s=i.formAction;else if(Xp(l)!==null)continue}else s=i.action;typeof s=="function"?n[a+1]=s:(n.splice(a,3),a-=3),hf(n)}}}function Xy(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(i){return l=i})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Qp(e){this._internalRoot=e}ic.prototype.render=Qp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));var n=t.current,a=Xt();qy(n,a,e,t,null,null)};ic.prototype.unmount=Qp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qy(e.current,2,null,e,null,null),ac(),t[No]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var t=hg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fa.length&&t!==0&&t<fa[n].priority;n++);fa.splice(n,0,e),n===0&&Yy(e)}};var ff=Qv.version;if(ff!=="19.3.0")throw Error(Y(527,ff,"19.3.0"));$e.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=jz(t),e=e!==null?tg(e):null,e=e===null?null:e.stateNode,e};var M$={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:fe,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vs.isDisabled&&vs.supportsFiber)try{Di=vs.inject(M$),Gt=vs}catch{}}Lr.createRoot=function(e,t){if(!Jv(e))throw Error(Y(299));var n=!1,a="",l=Eb,o=Ab,i=Rb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fy(e,1,!1,null,null,n,a,null,l,o,i,Xy),e[No]=t.current,Hp(e),new Qp(t)};Lr.hydrateRoot=function(e,t,n){if(!Jv(e))throw Error(Y(299));var a=!1,l="",o=Eb,i=Ab,s=Rb,c=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=Fy(e,1,!0,t,n??null,a,l,c,o,i,s,Xy),t.context=Ky(null),n=t.current,a=Xt(),a=tp(a),l=Ta(a),l.callback=null,za(n,l,a),n=a,t.current.lanes=n,Li(t,n),jn(t),e[No]=t.current,Hp(e),new ic(t)};Lr.version="19.3.0";function Qy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qy)}catch(e){console.error(e)}}Qy(),Kv.exports=Lr;var Jy=Kv.exports;const L$={info:le.info,success:le.success,warning:le.warning,error:le.error};function V$({manager:e}){const t=Te(e.subscribe,e.getState);return u.jsx("div",{className:"xui-message","aria-live":"polite",children:t.items.map(n=>u.jsxs("div",{className:re("xui-message__item",`xui-message__item--${n.type}`),children:[u.jsx("svg",{className:"xui-message__icon",viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:n.icon??L$[n.type]}}),u.jsx("span",{className:"xui-message__content",children:n.content}),n.closable&&u.jsx("button",{type:"button",className:"xui-message__close","aria-label":"close",onClick:()=>e.close(n.id),children:u.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})})]},n.id))})}let gs=null,vf=!1;function Wy(){if(gs===null&&(gs=rv()),!vf&&typeof document<"u"){const e=document.createElement("div");document.body.appendChild(e),Jy.createRoot(e).render(u.jsx(V$,{manager:gs})),vf=!0}return gs}function Vo(e){return Wy().open(e)}const Kn={info:(e,t)=>Vo({...t,type:"info",content:e}),success:(e,t)=>Vo({...t,type:"success",content:e}),warning:(e,t)=>Vo({...t,type:"warning",content:e}),error:(e,t)=>Vo({...t,type:"error",content:e}),open:Vo,closeAll:()=>Wy().closeAll()};function qn(e){const{content:t,placement:n="top",trigger:a="hover",disabled:l=!1,className:o,style:i,children:s,renderContent:c,ref:d}=e,m=B.useId(),p=B.useRef(null);p.current===null&&(p.current=Nv({disabled:l}));const h=p.current;B.useEffect(()=>{h.updateOptions({disabled:l})},[h,l]);const g=Te(h.subscribe,h.getState);B.useImperativeHandle(d,()=>({show:()=>h.show(),hide:()=>h.hide()}),[h]);const k=B.useRef(null),x=B.useRef(null),[S,v]=B.useState({placement:n,shift:0});B.useLayoutEffect(()=>{if(!g.open)return;v({placement:n,shift:0});const A=()=>{const L=k.current,te=x.current;if(!L||!te)return;const Z=te.getBoundingClientRect();Z.width===0&&Z.height===0||v(_o(L.getBoundingClientRect(),Z,ko(),{placement:n,gap:8}))},R=requestAnimationFrame(A),O=Co(A);return()=>{cancelAnimationFrame(R),O()}},[g.open,n]);const f=()=>{a==="hover"&&h.show()},y=()=>{a==="hover"&&h.hide()},_=()=>{a==="focus"&&h.show()},T=()=>{a==="focus"&&h.hide()},N=S.placement==="top"||S.placement==="bottom"?{marginLeft:`${S.shift}px`}:{marginTop:`${S.shift}px`};return u.jsx("span",{className:re("xui-tooltip",o),style:i,onMouseEnter:f,onMouseLeave:y,onFocus:_,onBlur:T,children:u.jsxs("span",{className:"xui-tooltip__trigger",ref:k,"aria-describedby":g.open?m:void 0,children:[s,g.open&&u.jsxs("span",{ref:x,id:m,className:re("xui-tooltip__popper",`is-${S.placement}`),style:N,role:"tooltip",children:[c?c():t,u.jsx("span",{className:"xui-tooltip__arrow","aria-hidden":"true"})]})]})})}const H$=e=>typeof e=="number";function Nd(e){const{value:t,defaultValue:n,total:a,pageSize:l=10,disabled:o=!1,className:i,style:s,onChange:c,renderPrevIcon:d,renderNextIcon:m}=e,p=On(),h=B.useRef({onChange:c});h.current={onChange:c};const g=B.useRef(null);g.current===null&&(g.current=uv({value:t,defaultValue:n,total:a,pageSize:l,disabled:o,onChange:v=>{var f,y;return(y=(f=h.current).onChange)==null?void 0:y.call(f,v)}}));const k=g.current;B.useEffect(()=>{k.updateOptions({value:t,total:a,pageSize:l,disabled:o})},[k,t,a,l,o]);const x=Te(k.subscribe,k.getState),S=dv(x.page,x.pageCount);return u.jsxs("nav",{className:re("xui-pagination",i,{"is-disabled":x.disabled}),style:s,role:"navigation","aria-label":p.pagination.nav,children:[u.jsx("button",{type:"button",className:"xui-pagination__nav",disabled:x.disabled||x.page<=1,"aria-label":p.pagination.prev,onClick:()=>k.prev(),children:d?d():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-left"]}})}),S.map((v,f)=>H$(v)?u.jsx("button",{type:"button",className:re("xui-pagination__page",{"is-active":v===x.page}),"aria-current":v===x.page?"page":void 0,disabled:x.disabled,onClick:()=>k.goTo(v),children:v},`${v}-${f}`):u.jsx("span",{className:"xui-pagination__ellipsis","aria-hidden":"true",children:"···"},`${v}-${f}`)),u.jsx("button",{type:"button",className:"xui-pagination__nav",disabled:x.disabled||x.page>=x.pageCount,"aria-label":p.pagination.next,onClick:()=>k.next(),children:m?m():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-right"]}})})]})}function Tr(e){const{type:t="date",value:n,defaultValue:a,placeholder:l,disabled:o=!1,clearable:i=!1,shortcuts:s,className:c,style:d,onChange:m,onClear:p,renderClearIcon:h,renderCalendarIcon:g,renderPrevIcon:k,renderNextIcon:x,ref:S}=e,v=On(),f=B.useRef(null),y=B.useRef(null),_=B.useId(),T=B.useId(),N=B.useRef({onChange:m,onClear:p});N.current={onChange:m,onClear:p};const A=B.useRef(null);A.current===null&&(A.current=Df({type:t,value:n,defaultValue:a,disabled:o,onChange:V=>{var se,X;return(X=(se=N.current).onChange)==null?void 0:X.call(se,V)},onClear:()=>{var V,se;return(se=(V=N.current).onClear)==null?void 0:se.call(V)}}));const R=A.current;B.useEffect(()=>{R.updateOptions({value:n,disabled:o})},[R,n,o]);const O=Te(R.subscribe,R.getState);B.useImperativeHandle(S,()=>({focus:()=>{var V;return(V=y.current)==null?void 0:V.focus()},toggleOpen:()=>R.toggleOpen(),close:()=>R.close()}),[R]),B.useEffect(()=>{const V=se=>{f.current&&!f.current.contains(se.target)&&R.close()};return document.addEventListener("mousedown",V),()=>document.removeEventListener("mousedown",V)},[R]);const L=jf(O.viewYear,O.viewMonth),te=O.value?Array.isArray(O.value)?`${O.value[0]} ~ ${O.value[1]}`:O.value:null,Z=O.draft&&Array.isArray(O.draft)?O.draft:null,F=V=>{switch(V.key){case"Enter":case" ":V.preventDefault(),R.toggleOpen();break;case"Escape":O.open&&(V.preventDefault(),R.close());break}},H=V=>t==="date"?V===O.draft:Z?V===Z[0]||V===Z[1]:O.rangeStart===V,ce=V=>t!=="range"||!Z?!1:no(V,Z[0])>=0&&no(V,Z[1])<=0;return u.jsxs("div",{ref:f,className:re("xui-date-picker",c,{"is-disabled":O.disabled,"is-open":O.open,"is-range":t==="range"}),style:d,children:[u.jsxs("div",{ref:y,id:_,className:"xui-date-picker__trigger",role:"combobox","aria-expanded":O.open,"aria-haspopup":"dialog","aria-controls":O.open?T:void 0,"aria-disabled":O.disabled||void 0,tabIndex:O.disabled?-1:0,onClick:()=>R.toggleOpen(),onKeyDown:F,children:[te?u.jsx("span",{className:"xui-date-picker__value",children:te}):u.jsx("span",{className:"xui-date-picker__placeholder",children:l??v.datePicker.placeholder}),i&&O.value&&!O.disabled?u.jsx("span",{className:"xui-date-picker__clear",role:"button","aria-label":"clear",onClick:V=>{V.stopPropagation(),R.clear()},children:h?h():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clear}})}):u.jsx("span",{className:"xui-date-picker__icon","aria-hidden":"true",children:g?g():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.calendar}})})]}),O.open&&u.jsxs("div",{id:T,className:"xui-date-picker__panel",role:"dialog","aria-label":v.datePicker.panel,children:[u.jsxs("div",{className:"xui-date-picker__header",children:[u.jsx("button",{type:"button",className:"xui-date-picker__nav","aria-label":v.datePicker.prevMonth,onClick:()=>R.prevMonth(),children:k?k():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-left"]}})}),u.jsx("span",{className:"xui-date-picker__title",children:v.datePicker.titleFormat(O.viewYear,O.viewMonth)}),u.jsx("button",{type:"button",className:"xui-date-picker__nav","aria-label":v.datePicker.nextMonth,onClick:()=>R.nextMonth(),children:x?x():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-right"]}})})]}),u.jsx("div",{className:"xui-date-picker__weekdays","aria-hidden":"true",children:v.datePicker.weekdays.map(V=>u.jsx("span",{className:"xui-date-picker__weekday",children:V},V))}),u.jsx("div",{className:"xui-date-picker__grid",children:L.map(V=>u.jsx("button",{type:"button",className:re("xui-date-picker__day",{"is-outside":!V.inMonth,"is-today":V.isToday,"is-selected":H(V.date),"is-in-range":ce(V.date),"is-range-start":t==="range"&&Z&&V.date===Z[0],"is-range-end":t==="range"&&Z&&V.date===Z[1]}),"aria-label":V.date,onClick:()=>R.select(V.date),children:V.day},V.date))}),s&&s.length>0&&u.jsx("div",{className:"xui-date-picker__shortcuts",children:s.map(V=>u.jsx("button",{type:"button",className:"xui-date-picker__shortcut",onClick:()=>R.selectShortcut(V.value),children:V.label},V.label))}),u.jsxs("div",{className:"xui-date-picker__footer",children:[u.jsx("button",{type:"button",className:"xui-date-picker__footer-btn xui-date-picker__footer-btn--cancel",onClick:()=>R.close(),children:v.datePicker.cancel}),u.jsx("button",{type:"button",className:"xui-date-picker__footer-btn xui-date-picker__footer-btn--confirm",disabled:!O.draft,onClick:()=>R.confirm(),children:v.datePicker.confirm})]})]})]})}const gf=e=>{const t={};return e.width!==void 0&&(t.width=typeof e.width=="number"?`${e.width}px`:e.width),e.align!==void 0&&(t.textAlign=e.align),Object.keys(t).length>0?t:void 0},I$=(e,t,n)=>{if(t===e.key)return n==="asc"?"ascending":"descending"};function yo(e){const{columns:t,dataSource:n,rowKey:a,stripe:l=!1,border:o=!1,virtual:i=!1,height:s,rowHeight:c=40,rowSelection:d,className:m,style:p,onSortChange:h,onRowClick:g,renderEmpty:k,renderSortIcon:x}=e,S=On(),v=B.useRef({onSortChange:h});v.current={onSortChange:h};const f=B.useRef(null);f.current===null&&(f.current=xv({dataSource:n,rowKey:a,rowSelection:d,onSortChange:j=>{var G,Q;return(Q=(G=v.current).onSortChange)==null?void 0:Q.call(G,j)}}));const y=f.current;B.useEffect(()=>{y.updateOptions({dataSource:n,rowKey:a,rowSelection:d})},[y,n,a,d]);const _=Te(y.subscribe,y.getState),T=B.useRef(null);T.current===null&&(T.current=jr({itemCount:0,itemHeight:c}));const N=T.current,A=Te(N.subscribe,N.getState),R=B.useRef(null);B.useEffect(()=>{if(!i)return;const j=R.current;if(!j||(N.updateOptions({viewportHeight:j.clientHeight}),typeof ResizeObserver>"u"))return;const G=new ResizeObserver(()=>{N.updateOptions({viewportHeight:j.clientHeight})});return G.observe(j),()=>{G.disconnect()}},[N,i]),B.useEffect(()=>{i&&N.updateOptions({itemCount:_.sortedData.length,itemHeight:c})},[N,i,_.sortedData.length,c]);const O=j=>{i&&N.scrollTo(j.currentTarget.scrollTop)},L=_.sortedData,te=i&&A.startIndex<=A.endIndex,Z=te?L.slice(A.startIndex,A.endIndex+1):L,F=j=>i?A.startIndex+j:j,H=d!==void 0,ce=(t??[]).length+(H?1:0),V={...p,...i?{...s!==void 0?{height:typeof s=="number"?`${s}px`:s}:{},"--xui-table-row-height":`${c}px`}:{}},se=L.length===0,X=(j,G,Q)=>j.render?j.render(G,Q):Sv(G[j.key]);return u.jsx("div",{ref:R,className:re("xui-table",m,{"is-striped":l,"is-bordered":o,"is-virtual":i}),style:Object.keys(V).length>0?V:void 0,onScroll:O,children:u.jsxs("table",{className:"xui-table__table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[H&&u.jsx("th",{className:"xui-table__th",style:{width:"42px"},children:u.jsx("input",{ref:j=>{j&&(j.indeterminate=_.indeterminate)},type:"checkbox",className:"xui-table__check",checked:_.allSelected,"aria-label":S.table.selectAll,onChange:()=>y.toggleAll()})}),(t??[]).map(j=>u.jsx("th",{className:"xui-table__th",style:gf(j),"aria-sort":I$(j,_.sortKey,_.sortOrder),scope:"col",children:j.sortable?u.jsxs("button",{type:"button",className:"xui-table__sort",onClick:()=>y.toggleSort(j.key),children:[j.title,u.jsx("span",{className:"xui-table__sort-icons","aria-hidden":"true",children:x?u.jsxs(u.Fragment,{children:[x({order:"asc"}),x({order:"desc"})]}):u.jsxs(u.Fragment,{children:[u.jsx("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:re({"is-active":_.sortKey===j.key&&_.sortOrder==="asc"}),dangerouslySetInnerHTML:{__html:le["arrow-up"]}}),u.jsx("svg",{viewBox:"0 0 24 24",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:re({"is-active":_.sortKey===j.key&&_.sortOrder==="desc"}),dangerouslySetInnerHTML:{__html:le["arrow-down"]}})]})})]}):u.jsx("span",{children:j.title})},j.key))]})}),u.jsxs("tbody",{children:[te&&A.offsetY>0&&u.jsx("tr",{className:"xui-table__spacer","aria-hidden":"true",children:u.jsx("td",{style:{height:`${A.offsetY}px`},colSpan:ce})}),Z.map((j,G)=>{var pt;const Q=F(G),de=va(j,Q,a),Ie=_.selectedRowKeys.includes(de),Fe=((pt=d==null?void 0:d.getCheckboxDisabled)==null?void 0:pt.call(d,j,Q))??!1;return u.jsxs("tr",{className:re({"is-even":Q%2===1,"is-selected":H&&Ie,"is-clickable":g!==void 0}),onClick:()=>g==null?void 0:g(j,Q),children:[H&&u.jsx("td",{className:"xui-table__td",onClick:Ut=>Ut.stopPropagation(),children:u.jsx("input",{type:"checkbox",className:"xui-table__check",checked:Ie,disabled:Fe,"aria-label":S.table.selectRow(Q),onChange:()=>y.toggleRow(de)})}),(t??[]).map(Ut=>u.jsx("td",{className:"xui-table__td",style:gf(Ut),children:X(Ut,j,Q)},Ut.key))]},de)}),te&&A.fillerHeight>0&&u.jsx("tr",{className:"xui-table__spacer","aria-hidden":"true",children:u.jsx("td",{style:{height:`${A.fillerHeight}px`},colSpan:ce})}),se&&u.jsx("tr",{children:u.jsx("td",{className:"xui-table__empty",colSpan:ce,children:k?k():S.table.empty})})]})]})})}function Xo(e){const{size:t="md",spinning:n=!0,tip:a,className:l,style:o,children:i}=e,s=B.useRef(null);s.current===null&&(s.current=bv({size:t,spinning:n,tip:a}));const c=s.current;B.useEffect(()=>{c.updateOptions({size:t,spinning:n,tip:a})},[c,t,n,a]);const d=Te(c.subscribe,c.getState);return i!==void 0?u.jsxs("div",{className:re("xui-spin","xui-spin--wrapper",l),style:o,children:[u.jsx("div",{className:re("xui-spin__content",{"is-blur":d.spinning}),children:i}),d.spinning&&u.jsxs("div",{className:"xui-spin__mask",role:"status","aria-live":"polite",children:[u.jsx("span",{className:re("xui-spin__indicator",`is-${d.size}`),"aria-hidden":"true"}),d.tip&&u.jsx("span",{className:"xui-spin__tip",children:d.tip})]})]}):d.spinning?u.jsxs("span",{className:re("xui-spin",l),style:o,role:"status","aria-live":"polite",children:[u.jsx("span",{className:re("xui-spin__indicator",`is-${d.size}`),"aria-hidden":"true"}),d.tip&&u.jsx("span",{className:"xui-spin__tip",children:d.tip})]}):null}function Td(e){const{items:t,separator:n="/",className:a,style:l,onItemClick:o,children:i}=e,s=On(),c=B.useRef({onItemClick:o});c.current={onItemClick:o};const d=B.useRef(null);d.current===null&&(d.current=Qf({items:t,separator:n,onItemClick:(g,k)=>{var x,S;return(S=(x=c.current).onItemClick)==null?void 0:S.call(x,g,k)}}));const m=d.current;B.useEffect(()=>{m.updateOptions({items:t,separator:n})},[m,t,n]);const p=Te(m.subscribe,m.getState);if(i!==void 0)return u.jsx("nav",{className:re("xui-breadcrumb",a),style:l,"aria-label":s.breadcrumb.nav,children:i});const h=p.items.length-1;return u.jsx("nav",{className:re("xui-breadcrumb",a),style:l,"aria-label":s.breadcrumb.nav,children:u.jsx("ol",{className:"xui-breadcrumb__list",children:p.items.map((g,k)=>u.jsxs("li",{className:re("xui-breadcrumb__item",{"is-active":k===h,"is-disabled":g.disabled}),children:[g.href&&k!==h&&!g.disabled?u.jsx("a",{className:"xui-breadcrumb__link",href:g.href,onClick:()=>m.selectItem(k),children:g.label}):u.jsx("span",{className:"xui-breadcrumb__label","aria-current":k===h?"page":void 0,onClick:()=>m.selectItem(k),children:g.label}),k!==h&&u.jsx("span",{className:"xui-breadcrumb__separator","aria-hidden":"true",children:p.separator})]},`${g.label}-${k}`))})})}function zd(e){const{loading:t=!0,avatar:n=!1,rows:a=3,className:l,style:o,children:i}=e,s=On(),c=B.useRef(null);c.current===null&&(c.current=gv({loading:t,avatar:n,rows:a}));const d=c.current;B.useEffect(()=>{d.updateOptions({loading:t,avatar:n,rows:a})},[d,t,n,a]);const m=Te(d.subscribe,d.getState);return m.loading?u.jsxs("div",{className:re("xui-skeleton",l),style:o,role:"status","aria-label":s.skeleton.loading,children:[m.avatar&&u.jsx("span",{className:"xui-skeleton__avatar","aria-hidden":"true"}),u.jsx("div",{className:"xui-skeleton__rows","aria-hidden":"true",children:Array.from({length:m.rows},(p,h)=>u.jsx("span",{className:h===m.rows-1?"xui-skeleton__row is-last":"xui-skeleton__row"},h))})]}):i!==void 0?u.jsx(u.Fragment,{children:i}):null}function bs(e,t){return e===null?"":t!==null?e.toFixed(t):String(e)}function Ud(e){const{value:t,defaultValue:n,min:a,max:l,step:o=1,precision:i,disabled:s=!1,placeholder:c,className:d,style:m,onChange:p,renderUpIcon:h,renderDownIcon:g,ref:k}=e,x=B.useRef({onChange:p});x.current={onChange:p};const S=B.useRef(null),v=B.useRef(null);v.current===null&&(v.current=sv({value:t,defaultValue:n,min:a,max:l,step:o,precision:i,disabled:s,onChange:R=>{var O,L;return(L=(O=x.current).onChange)==null?void 0:L.call(O,R)}}));const f=v.current;B.useEffect(()=>{f.updateOptions({value:t,min:a,max:l,step:o,precision:i,disabled:s})},[f,t,a,l,o,i,s]);const y=Te(f.subscribe,f.getState);B.useImperativeHandle(k,()=>({focus:()=>{var R;return(R=S.current)==null?void 0:R.focus()},blur:()=>{var R;return(R=S.current)==null?void 0:R.blur()},stepValue:R=>f.stepValue(R)}),[f]);const[_,T]=B.useState(()=>bs(y.value,y.precision));B.useEffect(()=>{t!==void 0&&T(bs(y.value,y.precision))},[t,y.value,y.precision]);const N=()=>{f.commitText(_);const R=f.getState();T(bs(R.value,R.precision))},A=R=>{f.stepValue(R);const O=f.getState();T(bs(O.value,O.precision))};return u.jsxs("div",{className:re("xui-input-number",d,{"is-disabled":y.disabled}),style:m,children:[u.jsx("input",{ref:S,className:"xui-input-number__input",type:"text",inputMode:"decimal",role:"spinbutton","aria-valuenow":y.value??void 0,"aria-valuemin":Number.isFinite(y.min)?y.min:void 0,"aria-valuemax":Number.isFinite(y.max)?y.max:void 0,placeholder:c,disabled:y.disabled,value:_,onChange:R=>T(R.target.value),onBlur:N,onKeyDown:R=>{R.key==="Enter"?(R.preventDefault(),N()):R.key==="ArrowUp"?(R.preventDefault(),A(1)):R.key==="ArrowDown"&&(R.preventDefault(),A(-1))}}),u.jsxs("div",{className:"xui-input-number__step","aria-hidden":"true",children:[u.jsx("button",{className:"xui-input-number__btn",type:"button",tabIndex:-1,disabled:y.disabled,onClick:()=>A(1),children:h?h():u.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-up"]}})}),u.jsx("button",{className:"xui-input-number__btn",type:"button",tabIndex:-1,disabled:y.disabled,onClick:()=>A(-1),children:g?g():u.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-down"]}})})]})]})}function pl(e){const{content:t,confirmText:n,cancelText:a,placement:l="top",disabled:o=!1,className:i,style:s,onConfirm:c,onCancel:d,children:m,renderContent:p,ref:h}=e,g=On(),k=B.useRef({onConfirm:c,onCancel:d});k.current={onConfirm:c,onCancel:d};const x=B.useRef(null);x.current===null&&(x.current=pv({placement:l,disabled:o,onConfirm:()=>{var R,O;return(O=(R=k.current).onConfirm)==null?void 0:O.call(R)},onCancel:()=>{var R,O;return(O=(R=k.current).onCancel)==null?void 0:O.call(R)}}));const S=x.current;B.useEffect(()=>{S.updateOptions({placement:l,disabled:o})},[S,l,o]);const v=Te(S.subscribe,S.getState);B.useImperativeHandle(h,()=>({show:()=>{v.open||S.toggle()},hide:()=>S.close(),toggle:()=>S.toggle()}),[S,v.open]);const f=B.useRef(null),y=B.useRef(null),_=B.useRef(null),T=B.useId(),[N,A]=B.useState({placement:l,shift:0});return B.useLayoutEffect(()=>{if(!v.open)return;A({placement:v.placement,shift:0});const R=()=>{const te=y.current,Z=_.current;if(!te||!Z)return;const F=Z.getBoundingClientRect();F.width===0&&F.height===0||A(_o(te.getBoundingClientRect(),F,ko(),{placement:v.placement,gap:8}))},O=requestAnimationFrame(R),L=Co(R);return()=>{cancelAnimationFrame(O),L()}},[v.open,v.placement]),B.useEffect(()=>{const R=O=>{const L=f.current;L&&!L.contains(O.target)&&S.close()};return document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}},[S]),u.jsx("span",{ref:f,className:re("xui-popconfirm",i),style:s,children:u.jsxs("span",{ref:y,className:"xui-popconfirm__trigger","aria-describedby":v.open?T:void 0,onClick:()=>S.toggle(),children:[m,v.open&&u.jsxs("span",{ref:_,id:T,className:`xui-popconfirm__popper is-${N.placement}`,style:N.placement==="top"||N.placement==="bottom"?{marginLeft:`${N.shift}px`}:{marginTop:`${N.shift}px`},role:"tooltip",onClick:R=>R.stopPropagation(),children:[u.jsx("span",{className:"xui-popconfirm__content",children:p?p():t}),u.jsxs("div",{className:"xui-popconfirm__actions",children:[u.jsx("button",{className:"xui-button xui-button--sm",type:"button",onClick:()=>S.cancel(),children:a??g.popconfirm.cancel}),u.jsx("button",{className:"xui-button xui-button--primary xui-button--sm",type:"button",onClick:()=>S.confirm(),children:n??g.popconfirm.confirm})]}),u.jsx("span",{className:"xui-popconfirm__arrow","aria-hidden":"true"})]})]})})}function eS(e){const{node:t,logic:n,state:a,checkable:l,checkStrictly:o,data:i,depth:s,renderTitle:c}=e,d=Hl(t),m=a.expandedKeys.includes(t.key),p=a.selectedKey===t.key,h=au(i,a.checkedKeys,t.key,o),g=a.disabled||t.disabled||t.disableCheckbox;return u.jsxs("li",{className:re("xui-tree__node",{"is-expanded":m,"is-selected":p,"is-disabled":t.disabled,"is-leaf":d}),role:"treeitem","aria-expanded":d?void 0:m,"aria-selected":p,"aria-disabled":t.disabled||void 0,children:[u.jsxs("div",{className:"xui-tree__node-content",style:{paddingLeft:`${s*16}px`},children:[u.jsx("span",{className:re("xui-tree__switcher",{"is-leaf":d,"is-expanded":m}),"aria-hidden":"true",onClick:k=>{k.stopPropagation(),d||n.toggleExpand(t.key)},children:!d&&u.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",dangerouslySetInnerHTML:{__html:le["arrow-right"]}})}),l&&u.jsx("span",{className:re("xui-tree__checkbox",{"is-disabled":g}),role:"checkbox","aria-checked":h.indeterminate?"mixed":h.checked,"aria-disabled":g||void 0,onClick:k=>{k.stopPropagation(),g||n.toggleCheck(t.key)},children:u.jsx("span",{className:re("xui-tree__checkbox-inner",{"is-checked":h.checked,"is-indeterminate":h.indeterminate})})}),u.jsx("span",{className:"xui-tree__title",onClick:()=>n.select(t.key),children:c?c(t):t.label})]}),!d&&m&&u.jsx("ul",{className:"xui-tree__children",role:"group",children:t.children.map(k=>u.jsx(eS,{node:k,logic:n,state:a,checkable:l,checkStrictly:o,data:i,depth:s+1,renderTitle:c},k.key))})]})}function Jp(e){const{data:t,expandedKeys:n,defaultExpandedKeys:a,checkedKeys:l,defaultCheckedKeys:o,selectedKey:i,defaultSelectedKey:s,checkable:c=!1,checkStrictly:d=!1,defaultExpandAll:m=!1,disabled:p=!1,className:h,style:g,onExpand:k,onCheck:x,onSelect:S,renderTitle:v,ref:f}=e,y=B.useRef({onExpand:k,onCheck:x,onSelect:S});y.current={onExpand:k,onCheck:x,onSelect:S};const _=B.useRef(null);_.current===null&&(_.current=Pf({data:t,expandedKeys:n,defaultExpandedKeys:a,checkedKeys:l,defaultCheckedKeys:o,selectedKey:i,defaultSelectedKey:s,checkable:c,checkStrictly:d,defaultExpandAll:m,disabled:p,onExpand:(A,R)=>{var O,L;return(L=(O=y.current).onExpand)==null?void 0:L.call(O,A,R)},onCheck:(A,R)=>{var O,L;return(L=(O=y.current).onCheck)==null?void 0:L.call(O,A,R)},onSelect:(A,R)=>{var O,L;return(L=(O=y.current).onSelect)==null?void 0:L.call(O,A,R)}}));const T=_.current;B.useEffect(()=>{T.updateOptions({data:t,expandedKeys:n,checkedKeys:l,selectedKey:i,checkable:c,checkStrictly:d,disabled:p})},[T,t,n,l,i,c,d,p]);const N=Te(T.subscribe,T.getState);return B.useImperativeHandle(f,()=>({expandAll:()=>T.expandAll(),collapseAll:()=>T.collapseAll(),checkAll:()=>T.checkAll(),uncheckAll:()=>T.uncheckAll()}),[T]),u.jsx("div",{className:re("xui-tree",h,{"is-disabled":N.disabled}),style:g,role:"tree",children:u.jsx("ul",{className:"xui-tree__list",children:t.map(A=>u.jsx(eS,{node:A,logic:T,state:N,checkable:c,checkStrictly:d,data:t,depth:0,renderTitle:v},A.key))})})}function Wp(e){const{visible:t,defaultVisible:n,placement:a="right",size:l=378,title:o,closable:i=!0,mask:s=!0,maskClosable:c=!0,closeOnEsc:d=!0,trapFocus:m=!0,className:p,style:h,onOpen:g,onClose:k,children:x,renderTitle:S,renderFooter:v,renderCloseIcon:f,ref:y}=e,_=B.useRef({onOpen:g,onClose:k});_.current={onOpen:g,onClose:k};const T=B.useRef(null);T.current===null&&(T.current=nv({visible:t,defaultVisible:n,closable:i,maskClosable:c,closeOnEsc:d,onOpen:()=>{var H,ce;return(ce=(H=_.current).onOpen)==null?void 0:ce.call(H)},onClose:()=>{var H,ce;return(ce=(H=_.current).onClose)==null?void 0:ce.call(H)}}));const N=T.current;B.useEffect(()=>{N.updateOptions({visible:t,closable:i,maskClosable:c,closeOnEsc:d})},[N,t,i,c,d]);const A=Te(N.subscribe,N.getState);B.useImperativeHandle(y,()=>({open:()=>N.open(),close:()=>N.close(),toggle:()=>N.toggle()}),[N]),B.useEffect(()=>{if(!A.visible||!d)return;const H=ce=>{ce.key==="Escape"&&N.handleEsc()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[A.visible,d,N]);const R=B.useRef(null),O=B.useRef(null);B.useEffect(()=>{var H,ce;if(!A.visible){(H=O.current)==null||H.focus(),O.current=null;return}O.current=document.activeElement instanceof HTMLElement?document.activeElement:null,(ce=R.current)==null||ce.focus()},[A.visible]);const L=H=>{if(H.key==="Escape"){H.preventDefault(),N.handleEsc();return}m&&Or(H.nativeEvent,H.currentTarget)},te=()=>{N.handleMaskClick()},Z=()=>{N.close()},F={};if(l!==void 0){const H=typeof l=="number"?`${l}px`:l;a==="top"||a==="bottom"?F.height=H:F.width=H}return A.visible?Qd.createPortal(u.jsxs("div",{className:re("xui-drawer",`xui-drawer--${a}`),children:[s&&u.jsx("div",{className:"xui-drawer__overlay",onClick:te}),u.jsxs("div",{ref:R,className:re("xui-drawer__panel",p),style:{...F,...h},role:"dialog","aria-modal":s?"true":void 0,tabIndex:-1,onKeyDown:L,children:[u.jsxs("div",{className:"xui-drawer__header",children:[u.jsx("span",{className:"xui-drawer__title",children:S?S():o??null}),A.closable&&u.jsx("button",{type:"button",className:"xui-drawer__close",onClick:Z,"aria-label":"close",children:f?f():u.jsx(F$,{})})]}),u.jsx("div",{className:"xui-drawer__body",children:x}),v&&u.jsx("div",{className:"xui-drawer__footer",children:v()})]})]}),document.body):null}function F$(){return u.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})}function ee(e){const{type:t="default",size:n="md",disabled:a=!1,loading:l=!1,block:o=!1,className:i,style:s,onClick:c,children:d,renderIcon:m,renderLoadingIcon:p,ref:h}=e,g=B.useRef(null),k=B.useRef(null);k.current===null&&(k.current=Jf({disabled:a,loading:l,onClick:f=>c==null?void 0:c(f)}));const x=k.current;B.useEffect(()=>{x.updateOptions({disabled:a,loading:l,onClick:f=>c==null?void 0:c(f)})},[x,a,l,c]);const S=Te(x.subscribe,x.getState);B.useImperativeHandle(h,()=>({focus:()=>{var f;return(f=g.current)==null?void 0:f.focus()},setLoading:f=>x.updateOptions({loading:f})}),[x]);const v=f=>{x.handleClick(f.nativeEvent)};return u.jsxs("button",{ref:g,type:"button",className:re("xui-button",`xui-button--${t}`,`xui-button--${n}`,{"is-disabled":S.disabled,"is-loading":S.loading,"is-block":o},i),style:s,disabled:S.disabled||S.loading,onClick:v,children:[S.loading&&u.jsx("span",{className:"xui-button__loading-icon","aria-hidden":"true",children:p?p():u.jsx(K$,{})}),!S.loading&&m&&u.jsx("span",{className:"xui-button__icon","aria-hidden":"true",children:m()}),u.jsx("span",{className:"xui-button__content",children:d})]})}function K$(){return u.jsx("svg",{className:"xui-button__spinner",viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeLinecap:"round",dangerouslySetInnerHTML:{__html:le.loading}})}function ut(e){const{type:t="text",value:n,defaultValue:a,placeholder:l,disabled:o=!1,readonly:i=!1,maxLength:s,clearable:c=!1,className:d,style:m,onInput:p,onChange:h,onFocus:g,onBlur:k,onClear:x,renderPrefix:S,renderSuffix:v,renderClearIcon:f,ref:y}=e,_=B.useRef(null),T=B.useRef(null);T.current===null&&(T.current=iv({value:n,defaultValue:a,disabled:o,readonly:i,onInput:H=>p==null?void 0:p(H),onChange:H=>h==null?void 0:h(H),onFocus:H=>g==null?void 0:g(H),onBlur:H=>k==null?void 0:k(H),onClear:()=>x==null?void 0:x()}));const N=T.current;B.useEffect(()=>{N.updateOptions({value:n,disabled:o,readonly:i,onInput:H=>p==null?void 0:p(H),onChange:H=>h==null?void 0:h(H),onFocus:H=>g==null?void 0:g(H),onBlur:H=>k==null?void 0:k(H),onClear:()=>x==null?void 0:x()})},[N,n,o,i,p,h,g,k,x]);const A=Te(N.subscribe,N.getState);B.useImperativeHandle(y,()=>({focus:()=>{var H;return(H=_.current)==null?void 0:H.focus()},blur:()=>{var H;return(H=_.current)==null?void 0:H.blur()},clear:()=>N.handleClear()}),[N]);const R=H=>{N.handleInput(H.currentTarget.value)},O=H=>{N.handleChange(H.currentTarget.value)},L=H=>{N.handleFocus(H.nativeEvent)},te=H=>{N.handleBlur(H.nativeEvent)},Z=()=>{N.handleClear()},F=c&&!!A.value&&!A.disabled&&!A.readonly;return u.jsxs("div",{className:re("xui-input",{"is-focused":A.focused,"is-disabled":A.disabled,"is-readonly":A.readonly},d),style:m,children:[S&&u.jsx("span",{className:"xui-input__prefix",children:S()}),u.jsx("input",{ref:_,className:"xui-input__inner",type:t,value:A.value,placeholder:l,disabled:A.disabled,readOnly:A.readonly,maxLength:s,onInput:R,onChange:O,onFocus:L,onBlur:te}),F&&u.jsx("button",{type:"button",className:"xui-input__clear",tabIndex:0,onClick:Z,"aria-label":"clear",children:f?f():u.jsx(q$,{})}),v&&u.jsx("span",{className:"xui-input__suffix",children:v()})]})}function q$(){return u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",dangerouslySetInnerHTML:{__html:le.clear}})}function Yi(e){const{visible:t,defaultVisible:n,title:a,width:l=520,closable:o=!0,maskClosable:i=!0,closeOnEsc:s=!0,okText:c,cancelText:d,trapFocus:m=!0,className:p,style:h,onOpen:g,onClose:k,onOk:x,onCancel:S,children:v,renderTitle:f,renderFooter:y,renderCloseIcon:_,ref:T}=e,N=On(),A=B.useRef({onOpen:g,onClose:k,onOk:x,onCancel:S});A.current={onOpen:g,onClose:k,onOk:x,onCancel:S};const R=B.useRef(null);R.current===null&&(R.current=cv({visible:t,defaultVisible:n,closable:o,maskClosable:i,closeOnEsc:s,onOpen:()=>{var j,G;return(G=(j=A.current).onOpen)==null?void 0:G.call(j)},onClose:()=>{var j,G;return(G=(j=A.current).onClose)==null?void 0:G.call(j)},onOk:()=>{var j,G;return(G=(j=A.current).onOk)==null?void 0:G.call(j)},onCancel:()=>{var j,G;return(G=(j=A.current).onCancel)==null?void 0:G.call(j)}}));const O=R.current;B.useEffect(()=>{O.updateOptions({visible:t,closable:o,maskClosable:i,closeOnEsc:s})},[O,t,o,i,s]);const L=Te(O.subscribe,O.getState);B.useImperativeHandle(T,()=>({open:()=>O.open(),close:()=>O.close(),toggle:()=>O.toggle()}),[O]),B.useEffect(()=>{if(!L.visible||!s)return;const j=G=>{G.key==="Escape"&&O.handleEsc()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[L.visible,s,O]);const te=B.useRef(null),Z=B.useRef(null);B.useEffect(()=>{var j,G;if(!L.visible){(j=Z.current)==null||j.focus(),Z.current=null;return}Z.current=document.activeElement instanceof HTMLElement?document.activeElement:null,(G=te.current)==null||G.focus()},[L.visible]);const F=j=>{if(j.key==="Escape"){j.preventDefault(),O.handleEsc();return}m&&Or(j.nativeEvent,j.currentTarget)},H=()=>{O.handleMaskClick()},ce=()=>{O.handleOk()},V=()=>{O.handleCancel()},se=()=>{O.close()},X={};return l!==void 0&&(X.width=typeof l=="number"?`${l}px`:l),L.visible?Qd.createPortal(u.jsxs("div",{className:"xui-modal",children:[u.jsx("div",{className:"xui-modal__overlay",onClick:H}),u.jsxs("div",{ref:te,className:re("xui-modal__panel",p),style:{...X,...h},role:"dialog","aria-modal":"true",tabIndex:-1,onKeyDown:F,children:[u.jsxs("div",{className:"xui-modal__header",children:[u.jsx("span",{className:"xui-modal__title",children:f?f():a??null}),L.closable&&u.jsx("button",{type:"button",className:"xui-modal__close",onClick:se,"aria-label":"close",children:_?_():u.jsx(P$,{})})]}),u.jsx("div",{className:"xui-modal__body",children:v}),y?u.jsx("div",{className:"xui-modal__footer",children:y()}):u.jsxs("div",{className:"xui-modal__footer",children:[u.jsx("button",{type:"button",className:re("xui-button","xui-button--md"),onClick:V,children:d??N.modal.cancel}),u.jsx("button",{type:"button",className:re("xui-button","xui-button--primary","xui-button--md"),onClick:ce,children:c??N.modal.ok})]})]})]}),document.body):null}function P$(){return u.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.close}})}const tS=B.createContext(void 0);function G$(){return B.useContext(tS)}function sc(e){const{initialValues:t,rules:n,disabled:a=!1,readonly:l=!1,labelWidth:o,labelPosition:i="right",validateTrigger:s,className:c,style:d,onSubmit:m,onSubmitFail:p,onValuesChange:h,children:g,ref:k}=e,x=B.useRef(null);x.current===null&&(x.current=ov({initialValues:t,rules:n,disabled:a,readonly:l,onSubmit:_=>m==null?void 0:m(_),onSubmitFail:_=>p==null?void 0:p(_),onValuesChange:(_,T)=>h==null?void 0:h(_,T)}));const S=x.current;B.useEffect(()=>{S.updateOptions({disabled:a,readonly:l,rules:n,onSubmit:_=>m==null?void 0:m(_),onSubmitFail:_=>p==null?void 0:p(_),onValuesChange:(_,T)=>h==null?void 0:h(_,T)})},[S,a,l,n,m,p,h]);const v=Te(S.subscribe,S.getState);B.useImperativeHandle(k,()=>({validate:_=>S.validate(_),validateField:(_,T)=>S.validateField(_,T),getFieldValue:_=>S.getFieldValue(_),getFieldsValue:()=>S.getFieldsValue(),setFieldValue:(_,T)=>S.setFieldValue(_,T),setFieldsValue:_=>S.setFieldsValue(_),resetFields:_=>S.resetFields(_),clearValidate:_=>S.clearValidate(_),submit:()=>S.submit()}),[S]);const f=_=>{_.preventDefault(),S.submit()},y={logic:S,disabled:v.disabled,readonly:v.readonly,labelWidth:o,labelPosition:i};return u.jsx(tS.Provider,{value:y,children:u.jsx("form",{className:re("xui-form",c),style:d,onSubmit:f,children:g})})}function Bt(e){const{name:t,label:n,rules:a,required:l=!1,validateFirst:o=!1,hidden:i=!1,extra:s,labelAlign:c="right",className:d,style:m,children:p,ref:h}=e,g=G$(),k=g==null?void 0:g.logic;B.useEffect(()=>(t&&k&&k.registerField(t,a??[]),()=>{t&&k&&k.unregisterField(t)}),[t,k,a]);const x=Te(g?g.logic.subscribe:()=>()=>{},g?g.logic.getState:()=>({values:{},errors:{},validating:!1,submitting:!1,disabled:!1,readonly:!1})),S=t?x.values[t]:void 0,v=t?x.errors[t]??[]:[],f=x.validating,y=l||lv(a),_=(g==null?void 0:g.disabled)??!1,T=(g==null?void 0:g.readonly)??!1,N=O=>{!t||!g||(g.logic.setFieldValue(t,O),g.logic.validateField(t,"change"))},A=()=>{!t||!g||g.logic.validateField(t,"blur")},R=(()=>{if(!p)return null;const O=B.Children.only(p);if(!O)return null;const L=O.props;return B.cloneElement(O,{value:S,disabled:_||void 0,readonly:T||void 0,onUpdateValue:te=>{N(te),typeof L.onUpdateValue=="function"&&L.onUpdateValue(te)},onChange:te=>{N(te),typeof L.onChange=="function"&&L.onChange(te)},onBlur:te=>{A(),typeof L.onBlur=="function"&&L.onBlur(te)}})})();return B.useImperativeHandle(h,()=>({validate:O=>!t||!g?Promise.resolve([]):g.logic.validateField(t,O),clearValidation:()=>{!t||!g||g.logic.clearValidate([t])},resetField:()=>{!t||!g||g.logic.resetFields([t])}}),[t,g]),i?null:u.jsxs("div",{className:re("xui-form-item",`xui-form-item--label-${(g==null?void 0:g.labelPosition)??"right"}`,{"is-error":v.length>0,"is-required":y,"is-validating":f},d),style:m,children:[n!==void 0&&u.jsx("label",{className:re("xui-form-item__label",`xui-form-item__label--${c}`),style:(()=>{const O=g==null?void 0:g.labelWidth;if(O!==void 0)return{width:typeof O=="number"?`${O}px`:O,flexShrink:0}})(),children:n}),u.jsxs("div",{className:"xui-form-item__content",children:[R,s&&u.jsx("div",{className:"xui-form-item__extra",children:s}),v.length>0&&u.jsxs("div",{className:"xui-form-item__error",children:[v[0],v.length>1&&u.jsxs("span",{className:"xui-form-item__error-count",children:["(+",v.length-1,")"]})]})]})]})}function nS(e){const{value:t,defaultValue:n,placeholder:a,disabled:l=!1,clearable:o=!1,format:i="HH:mm:ss",hourStep:s=1,minuteStep:c=1,secondStep:d=1,className:m,style:p,onChange:h,onClear:g,renderClearIcon:k,renderClockIcon:x,ref:S}=e,v=On(),f=B.useRef(null),y=B.useRef(null),_=B.useId(),T=B.useId(),N=B.useRef({onChange:h,onClear:g});N.current={onChange:h,onClear:g};const A=B.useRef(null);A.current===null&&(A.current=wv({value:t,defaultValue:n,disabled:l,onChange:X=>{var j,G;return(G=(j=N.current).onChange)==null?void 0:G.call(j,X)},onClear:()=>{var X,j;return(j=(X=N.current).onClear)==null?void 0:j.call(X)}}));const R=A.current;B.useEffect(()=>{R.updateOptions({value:t,disabled:l})},[R,t,l]);const O=Te(R.subscribe,R.getState);B.useImperativeHandle(S,()=>({focus:()=>{var X;return(X=y.current)==null?void 0:X.focus()},toggleOpen:()=>R.toggleOpen(),close:()=>R.close()}),[R]),B.useEffect(()=>{const X=j=>{f.current&&!f.current.contains(j.target)&&R.close()};return document.addEventListener("mousedown",X),()=>document.removeEventListener("mousedown",X)},[R]),B.useEffect(()=>{var j;if(!O.open)return;const X=(j=f.current)==null?void 0:j.querySelectorAll(".xui-time-picker__column");X==null||X.forEach(G=>{const Q=G.querySelector(".xui-time-picker__item.is-selected");Q&&typeof Q.scrollIntoView=="function"&&Q.scrollIntoView({block:"center",inline:"nearest"})})},[O.open]);const L=Il(24,s),te=Il(60,c),Z=i==="HH:mm:ss"?Il(60,d):[],F=O.draft?kv(O.draft):null,H=i==="HH:mm:ss",ce=O.value?H?O.value:O.value.slice(0,5):null,V=X=>{switch(X.key){case"Enter":case" ":X.preventDefault(),R.toggleOpen();break;case"Escape":O.open&&(X.preventDefault(),R.close());break}},se=(X,j)=>{const Q={...F??{hour:0,minute:0,second:0},[X]:j};R.selectDraft(Q.hour,Q.minute,H?Q.second:0)};return u.jsxs("div",{ref:f,className:re("xui-time-picker",m,{"is-disabled":O.disabled,"is-open":O.open}),style:p,children:[u.jsxs("div",{ref:y,id:_,className:"xui-time-picker__trigger",role:"combobox","aria-expanded":O.open,"aria-haspopup":"dialog","aria-controls":O.open?T:void 0,"aria-disabled":O.disabled||void 0,tabIndex:O.disabled?-1:0,onClick:()=>R.toggleOpen(),onKeyDown:V,children:[ce?u.jsx("span",{className:"xui-time-picker__value",children:ce}):u.jsx("span",{className:"xui-time-picker__placeholder",children:a??v.timePicker.placeholder}),o&&O.value&&!O.disabled?u.jsx("span",{className:"xui-time-picker__clear",role:"button","aria-label":"clear",onClick:X=>{X.stopPropagation(),R.clear()},children:k?k():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clear}})}):u.jsx("span",{className:"xui-time-picker__icon","aria-hidden":"true",children:x?x():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clock}})})]}),O.open&&u.jsxs("div",{id:T,className:"xui-time-picker__panel",role:"dialog","aria-label":v.timePicker.panel,children:[u.jsxs("div",{className:"xui-time-picker__columns",children:[u.jsx("ul",{className:"xui-time-picker__column",role:"listbox","aria-label":"hour",children:L.map(X=>u.jsx("li",{className:re("xui-time-picker__item",{"is-selected":(F==null?void 0:F.hour)===Fl(X,s,24)}),role:"option","aria-selected":(F==null?void 0:F.hour)===X,onClick:()=>se("hour",X),children:String(X).padStart(2,"0")},X))}),u.jsx("ul",{className:"xui-time-picker__column",role:"listbox","aria-label":"minute",children:te.map(X=>u.jsx("li",{className:re("xui-time-picker__item",{"is-selected":(F==null?void 0:F.minute)===Fl(X,c,60)}),role:"option","aria-selected":(F==null?void 0:F.minute)===X,onClick:()=>se("minute",X),children:String(X).padStart(2,"0")},X))}),H&&u.jsx("ul",{className:"xui-time-picker__column",role:"listbox","aria-label":"second",children:Z.map(X=>u.jsx("li",{className:re("xui-time-picker__item",{"is-selected":(F==null?void 0:F.second)===Fl(X,d,60)}),role:"option","aria-selected":(F==null?void 0:F.second)===X,onClick:()=>se("second",X),children:String(X).padStart(2,"0")},X))})]}),u.jsxs("div",{className:"xui-time-picker__footer",children:[u.jsx("button",{type:"button",className:"xui-time-picker__footer-btn xui-time-picker__footer-btn--cancel",onClick:()=>R.close(),children:v.timePicker.cancel}),u.jsx("button",{type:"button",className:"xui-time-picker__footer-btn xui-time-picker__footer-btn--confirm",disabled:!O.draft,onClick:()=>R.confirm(),children:v.timePicker.confirm})]})]})]})}function em(e){var X;const{value:t,defaultValue:n,options:a,placeholder:l,disabled:o=!1,clearable:i=!1,separator:s=" / ",changeOnSelect:c=!1,multiple:d=!1,checkStrictly:m=!1,className:p,style:h,onChange:g,onClear:k,renderClearIcon:x,renderSuffixIcon:S,ref:v}=e,f=On(),y=B.useRef(null),_=B.useRef(null),T=B.useId(),N=B.useId(),A=B.useRef({onChange:g,onClear:k});A.current={onChange:g,onClear:k};const R=B.useRef(null);R.current===null&&(R.current=ev({value:t,defaultValue:n,options:a,disabled:o,changeOnSelect:c,multiple:d,checkStrictly:m,onChange:(j,G)=>{var Q,de;return(de=(Q=A.current).onChange)==null?void 0:de.call(Q,j,G)},onClear:()=>{var j,G;return(G=(j=A.current).onClear)==null?void 0:G.call(j)}}));const O=R.current;B.useEffect(()=>{O.updateOptions({value:t,disabled:o,options:a,changeOnSelect:c,checkStrictly:m})},[O,t,o,a,c,m]);const L=Te(O.subscribe,O.getState);B.useImperativeHandle(v,()=>({focus:()=>{var j;return(j=_.current)==null?void 0:j.focus()},toggleOpen:()=>O.toggleOpen(),close:()=>O.close()}),[O]),B.useEffect(()=>{const j=G=>{y.current&&!y.current.contains(G.target)&&O.close()};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[O]);const te=Md(a,L.activePath),Z=!d&&L.value?((X=ao(a,L.value))==null?void 0:X.labels.join(s))??null:null,F=!d||!L.value?[]:L.value.map(G=>{const Q=ao(a,G);return Q?{path:G,label:Q.labels.join(s)}:null}).filter(Boolean),H=d?F.length>0:!!L.value,ce=(j,G)=>{if(!d)return!1;const Q=[...L.activePath.slice(0,j),G.value];return Ys(a,L.value,Q,m).checked},V=(j,G)=>{if(!d)return!1;const Q=[...L.activePath.slice(0,j),G.value];return Ys(a,L.value,Q,m).indeterminate},se=j=>{switch(j.key){case"Enter":case" ":j.preventDefault(),O.toggleOpen();break;case"Escape":L.open&&(j.preventDefault(),O.close());break}};return u.jsxs("div",{ref:y,className:re("xui-cascader",p,{"is-disabled":L.disabled,"is-open":L.open,"is-multiple":d}),style:h,children:[u.jsxs("div",{ref:_,id:T,className:"xui-cascader__trigger",role:"combobox","aria-expanded":L.open,"aria-haspopup":"dialog","aria-controls":L.open?N:void 0,"aria-disabled":L.disabled||void 0,tabIndex:L.disabled?-1:0,onClick:()=>O.toggleOpen(),onKeyDown:se,children:[d?F.length===0?u.jsx("span",{className:"xui-cascader__placeholder",children:l??f.cascader.placeholder}):u.jsx("span",{className:"xui-cascader__tags",children:F.map(j=>u.jsxs("span",{className:"xui-cascader__tag",children:[u.jsx("span",{className:"xui-cascader__tag-label",children:j.label}),u.jsx("span",{className:"xui-cascader__tag-close",role:"button","aria-label":"remove",onClick:G=>{G.stopPropagation(),O.toggleCheck(j.path)},children:"×"})]},j.path.join("/")))}):Z?u.jsx("span",{className:"xui-cascader__value",children:Z}):u.jsx("span",{className:"xui-cascader__placeholder",children:l??f.cascader.placeholder}),i&&H&&!L.disabled?u.jsx("span",{className:"xui-cascader__clear",role:"button","aria-label":"clear",onClick:j=>{j.stopPropagation(),O.clear()},children:x?x():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le.clear}})}):u.jsx("span",{className:re("xui-cascader__arrow",{"is-open":L.open}),"aria-hidden":"true",children:S?S():u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:le["arrow-down"]}})})]}),L.open&&u.jsxs("div",{id:N,className:"xui-cascader__panel",role:"dialog","aria-label":f.cascader.panel,children:[u.jsx("div",{className:"xui-cascader__columns",children:te.map((j,G)=>u.jsx("ul",{className:"xui-cascader__column",role:"listbox","aria-label":`level-${G}`,children:j.map(Q=>{const de=L.activePath[G]===Q.value,Ie=ce(G,Q),Fe=V(G,Q);return u.jsxs("li",{className:re("xui-cascader__item",{"is-active":de,"is-disabled":Q.disabled,"is-checked":d&&Ie}),role:"option","aria-selected":de,"aria-disabled":Q.disabled||void 0,onClick:()=>{Q.disabled||O.select(G,Q.value)},children:[d&&u.jsx("span",{className:"xui-cascader__checkbox","aria-hidden":"true",children:u.jsx("span",{className:re("xui-cascader__checkbox-inner",{"is-checked":Ie,"is-indeterminate":Fe})})}),u.jsx("span",{className:"xui-cascader__item-label",children:Q.label}),Q.children&&Q.children.length>0&&u.jsx("span",{className:"xui-cascader__item-arrow","aria-hidden":"true",children:u.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",dangerouslySetInnerHTML:{__html:le["arrow-right"]}})})]},Q.value)})},G))}),d&&u.jsxs("div",{className:"xui-cascader__footer",children:[u.jsx("button",{type:"button",className:"xui-cascader__footer-btn",onClick:()=>O.checkAll(),children:"全选"}),u.jsx("button",{type:"button",className:"xui-cascader__footer-btn",onClick:()=>O.uncheckAll(),children:"清空"})]})]})]})}function Y$(e){return e===void 0||e<=0?"":e<1024?`${e.toFixed(0)} B/s`:e<1024*1024?`${(e/1024).toFixed(1)} KB/s`:`${(e/(1024*1024)).toFixed(1)} MB/s`}function X$(e){if(e===void 0||e<=0)return"";const t=Math.floor(e/60),n=Math.floor(e%60);return t>0?`${t}分${n}秒`:`${n}秒`}function tm(e){const{action:t,accept:n,multiple:a=!1,disabled:l=!1,maxCount:o,maxSize:i,listType:s="text",autoUpload:c=!0,requestUpload:d,beforeUpload:m,value:p,defaultValue:h,onChange:g,onRemove:k,className:x,style:S,renderTrigger:v,renderFileItem:f,ref:y}=e,_=B.useRef(null),T=B.useRef({onChange:g,onRemove:k});T.current={onChange:g,onRemove:k};const N=B.useRef(null);N.current===null&&(N.current=Tv({action:t,disabled:l,maxCount:o,maxSize:i,autoUpload:c,requestUpload:d,beforeUpload:m,value:p,defaultValue:h,onChange:Z=>{var F,H;return(H=(F=T.current).onChange)==null?void 0:H.call(F,Z)},onRemove:Z=>{var F,H;return(H=(F=T.current).onRemove)==null?void 0:H.call(F,Z)}}));const A=N.current;B.useEffect(()=>{A.updateOptions({value:p,disabled:l})},[A,p,l]);const R=Te(A.subscribe,A.getState);B.useImperativeHandle(y,()=>({open:()=>{var Z;return(Z=_.current)==null?void 0:Z.click()},clear:()=>A.clear(),submit:()=>A.submit()}),[A]);const O=Z=>{const F=Z.target.files;F&&F.length>0&&A.selectFiles(F),Z.target.value=""},L=()=>{var Z;R.disabled||(Z=_.current)==null||Z.click()},te=R.fileList.some(Z=>Z.status==="pending");return u.jsxs("div",{className:re("xui-upload",x),style:S,children:[u.jsx("input",{ref:_,type:"file",className:"xui-upload__input",accept:n,multiple:a,disabled:R.disabled,style:{display:"none"},onChange:O}),u.jsxs("div",{className:"xui-upload__actions",children:[v?v():u.jsx("button",{type:"button",className:re("xui-upload__trigger",{"is-disabled":R.disabled}),disabled:R.disabled,onClick:L,children:"+ 点击上传"}),!c&&te&&u.jsx("button",{type:"button",className:"xui-upload__submit-btn",onClick:()=>A.submit(),children:"开始上传"})]}),R.fileList.length>0&&u.jsx("ul",{className:re("xui-upload__list",`xui-upload__list--${s}`),children:R.fileList.map((Z,F)=>f?u.jsx("li",{children:f(Z)},Z.uid):u.jsxs("li",{className:re("xui-upload__item",`is-${Z.status}`),children:[u.jsxs("div",{className:"xui-upload__item-main",children:[s==="picture"&&Z.raw&&u.jsx("img",{src:URL.createObjectURL(Z.raw),alt:Z.name,className:"xui-upload__thumbnail"}),u.jsx("span",{className:"xui-upload__name",title:Z.name,children:Z.name}),u.jsxs("span",{className:"xui-upload__status",children:[Z.status==="pending"&&"待上传",Z.status==="uploading"&&u.jsxs(u.Fragment,{children:[Z.percent,"%",Z.speed?u.jsx("span",{className:"xui-upload__speed",children:Y$(Z.speed)}):null,Z.remainingTime?u.jsxs("span",{className:"xui-upload__remaining",children:["剩余 ",X$(Z.remainingTime)]}):null]}),Z.status==="done"&&"✓ 成功",Z.status==="error"&&"✗ 失败",Z.status==="cancelled"&&"已取消"]})]}),Z.status==="uploading"&&u.jsx("div",{className:"xui-upload__progress",children:u.jsx("div",{className:"xui-upload__progress-bar",style:{width:`${Z.percent}%`}})}),u.jsxs("div",{className:"xui-upload__item-actions",children:[R.fileList.length>1&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",className:"xui-upload__sort-btn","aria-label":"move up",disabled:F===0,onClick:()=>A.move(Z.uid,-1),children:"↑"}),u.jsx("button",{type:"button",className:"xui-upload__sort-btn","aria-label":"move down",disabled:F===R.fileList.length-1,onClick:()=>A.move(Z.uid,1),children:"↓"})]}),Z.status==="uploading"&&u.jsx("button",{type:"button",className:"xui-upload__cancel-btn","aria-label":"cancel",onClick:()=>A.cancel(Z.uid),children:"取消"}),u.jsx("button",{type:"button",className:"xui-upload__remove","aria-label":"remove",onClick:()=>A.remove(Z.uid),children:"×"})]})]},Z.uid))})]})}function Q$(){return u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{children:"Default"}),u.jsx(ee,{type:"primary",children:"Primary"}),u.jsx(ee,{type:"danger",children:"Danger"}),u.jsx(ee,{type:"link",children:"Link"})]})}const J$=()=>B.useSyncExternalStore(VT,km,km),oe=()=>J$()==="zh-CN";function W$(){const e=oe();return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{size:"sm",children:"Small"}),u.jsx(ee,{size:"md",children:"Medium"}),u.jsx(ee,{size:"lg",children:"Large"})]}),u.jsx(ee,{block:!0,children:e?"Block（宽度撑满容器）":"Block (full width)"})]})}function eE(){const e=oe(),[t,n]=B.useState(!1),a=()=>{n(!0),setTimeout(()=>n(!1),1500)};return u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{disabled:!0,children:"Disabled"}),u.jsx(ee,{loading:!0,children:"Loading"}),u.jsx(ee,{type:"primary",loading:t,onClick:a,children:t?e?"提交中...":"Submitting...":e?"点击模拟提交":"Click to submit"})]})}const tE=`<script setup lang="ts">
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
`,nE=`<script setup lang="ts">
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
`,aE=`<script setup lang="ts">
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
`,lE=`import { Button } from '@xui-design/react';

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
`,oE=`import { Button } from '@xui-design/react';
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
`,iE=`import { useState } from 'react';
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
`,sE={name:"Button",slug:"button",title:"按钮",category:"basic",summary:{"zh-CN":"基础按钮组件，支持多种语义类型、尺寸、加载与禁用状态。","en-US":"A basic button component with multiple semantic types, sizes, loading and disabled states."},features:[{"zh-CN":"四种语义类型：default / primary / danger / link","en-US":"Four semantic types: default / primary / danger / link"},{"zh-CN":"三种尺寸：sm / md（默认）/ lg","en-US":"Three sizes: sm / md (default) / lg"},{"zh-CN":"disabled 禁用、loading 加载态（加载中点击被忽略）","en-US":"Disabled state and loading state (clicks are ignored while loading)"},{"zh-CN":"block 块级按钮（宽度撑满容器）","en-US":"Block-level button that stretches to the container width"},{"zh-CN":"前置图标与加载图标均可通过插槽 / 回调自定义","en-US":"Leading icon and loading icon are customizable via slot / render callback"}],scenarios:[{"zh-CN":"表单提交、操作触发、导航跳转等一切需要点击交互的场景。","en-US":"Any click-driven interaction such as form submission, action triggering, or navigation."}],demos:[{id:"type",title:{"zh-CN":"按钮类型","en-US":"Button Types"},description:{"zh-CN":"通过 type 指定语义类型，默认 default。","en-US":"Use type to set the semantic type; defaults to default."},vueComponent:JT,reactComponent:Q$,vueSource:tE,reactSource:lE},{id:"size",title:{"zh-CN":"尺寸与块级","en-US":"Sizes & Block"},description:{"zh-CN":"sm / md / lg 三档尺寸；block 使按钮宽度撑满父容器。","en-US":"Three sizes: sm / md / lg. The block prop stretches the button to its parent width."},vueComponent:tz,reactComponent:W$,vueSource:nE,reactSource:oE},{id:"state",title:{"zh-CN":"禁用与加载","en-US":"Disabled & Loading"},description:{"zh-CN":"disabled 完全禁用交互；loading 时显示加载图标且点击被忽略，适合异步提交场景。","en-US":"disabled turns off all interaction; loading shows a spinner and ignores clicks, ideal for async submissions."},vueComponent:az,reactComponent:eE,vueSource:aE,reactSource:iE}],api:{props:[{name:"type",type:"'default' | 'primary' | 'danger' | 'link'",default:"'default'",description:{"zh-CN":"按钮语义类型","en-US":"Semantic type of the button"}},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:{"zh-CN":"按钮尺寸","en-US":"Button size"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"loading",type:"boolean",default:"false",description:{"zh-CN":"加载状态（显示加载图标，点击被忽略）","en-US":"Loading state (shows a spinner; clicks are ignored)"}},{name:"block",type:"boolean",default:"false",description:{"zh-CN":"块级按钮（宽度撑满容器）","en-US":"Block button (stretches to container width)"}},{name:"onClick",type:"(event: MouseEvent) => void",default:"—",description:{"zh-CN":"点击回调（由适配层桥接为框架事件）","en-US":"Click callback (bridged to framework events by the adapter)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"click",react:"onClick",payload:"MouseEvent",description:{"zh-CN":"点击按钮时触发（disabled / loading 状态下不触发）","en-US":"Fired on click (not fired while disabled or loading)"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"按钮内容","en-US":"Button content"}},{vue:"icon",react:"renderIcon",description:{"zh-CN":"前置图标（loading 时隐藏）","en-US":"Leading icon (hidden while loading)"}},{vue:"loadingIcon",react:"renderLoadingIcon",description:{"zh-CN":"加载态图标（默认为旋转 Spinner）","en-US":"Loading icon (defaults to a spinning spinner)"}}]},notes:[{"zh-CN":"loading 状态下点击事件被忽略，避免异步提交期间重复触发。","en-US":"Clicks are ignored while loading to prevent duplicate triggers during async submission."},{"zh-CN":'type="link" 仅表现为链接样式，语义仍是 button 元素；需要原生导航请自行包裹 <a>。',"en-US":'type="link" only looks like a link; the element is still a button. Wrap an <a> yourself when native navigation is needed.'}],a11y:[{"zh-CN":"渲染为原生 <button>，disabled / loading 时携带 disabled 属性，键盘与读屏行为与原生按钮一致。","en-US":"Renders as a native <button> with the disabled attribute applied when disabled or loading, matching native keyboard and screen-reader behavior."}]},rE={class:"demo-row"},cE={class:"demo-text"},uE=M({__name:"basic",setup(e){const t=q(!1);return(n,a)=>(b(),C("div",rE,[U(r(Zt),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l)},null,8,["value"]),w("span",cE,$(r(z)()?"当前值：":"Current: ")+$(t.value?r(z)()?"开启":"On":r(z)()?"关闭":"Off"),1)]))}}),dE={class:"demo-row"},pE=M({__name:"state",setup(e){return(t,n)=>(b(),C("div",dE,[U(r(Zt),{"default-value":"",size:"sm"}),U(r(Zt),{"default-value":""}),U(r(Zt),{disabled:""}),U(r(Zt),{loading:""})]))}});function mE(){const e=oe(),[t,n]=B.useState(!1);return u.jsxs("div",{className:"demo-row",children:[u.jsx(jt,{value:t,onChange:n}),u.jsxs("span",{className:"demo-text",children:[e?"当前值：":"Current: ",t?e?"开启":"On":e?"关闭":"Off"]})]})}function hE(){return u.jsxs("div",{className:"demo-row",children:[u.jsx(jt,{defaultValue:!0,size:"sm"}),u.jsx(jt,{defaultValue:!0}),u.jsx(jt,{disabled:!0}),u.jsx(jt,{loading:!0})]})}const fE={class:"demo-column"},vE={class:"demo-row"},gE={class:"demo-row"},bE=M({__name:"text",setup(e){const t=q(!0);return(n,a)=>(b(),C("div",fE,[w("div",vE,[U(r(Zt),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),"checked-text":r(z)()?"开启":"On","unchecked-text":r(z)()?"关闭":"Off"},null,8,["value","checked-text","unchecked-text"]),U(r(Zt),{"default-value":"","checked-text":"ON","unchecked-text":"OFF"}),U(r(Zt),{size:"sm","default-value":"","checked-text":r(z)()?"是":"Yes","unchecked-text":r(z)()?"否":"No"},null,8,["checked-text","unchecked-text"])]),w("div",gE,[U(r(Zt),{"default-value":"","checked-text":r(z)()?"启用超长文本展示":"Enabled long text","unchecked-text":r(z)()?"禁用超长文本展示":"Disabled long text"},null,8,["checked-text","unchecked-text"])])]))}});function yE(){const e=oe(),[t,n]=B.useState(!0);return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(jt,{value:t,onChange:n,checkedText:e?"开启":"On",uncheckedText:e?"关闭":"Off"}),u.jsx(jt,{defaultValue:!0,checkedText:"ON",uncheckedText:"OFF"}),u.jsx(jt,{size:"sm",defaultValue:!0,checkedText:e?"是":"Yes",uncheckedText:e?"否":"No"})]}),u.jsx("div",{className:"demo-row",children:u.jsx(jt,{defaultValue:!0,checkedText:e?"启用超长文本展示":"Enabled long text",uncheckedText:e?"禁用超长文本展示":"Disabled long text"})})]})}const SE=`<script setup lang="ts">
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
`,xE=`<script setup lang="ts">
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
`,CE=`import { useState } from 'react';
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
`,_E=`<script setup lang="ts">
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
`,kE=`import { useState } from 'react';
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
`,wE=`import { Switch } from '@xui-design/react';

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
`,NE={name:"Switch",slug:"switch",title:"开关",category:"form",summary:{"zh-CN":"布尔值开关选择器，支持受控 / 非受控双模式与加载态。","en-US":"A boolean toggle switch with controlled / uncontrolled modes and a loading state."},features:[{"zh-CN":"受控 / 非受控双模式（提供 value 即受控），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes (controlled when value is provided); v-model:value on Vue"},{"zh-CN":"sm / md 两种尺寸","en-US":"Two sizes: sm / md"},{"zh-CN":"disabled 禁用、loading 加载态（加载中切换被忽略，滑块显示 Spinner）","en-US":"Disabled state and loading state (toggles are ignored while loading; the thumb shows a spinner)"},{"zh-CN":"checkedText / uncheckedText 双态文本：显示在轨道内滑块对侧，超长自动截断（title 提示）","en-US":"Dual-state text via checkedText / uncheckedText: shown inside the track on the opposite side of the thumb, auto-truncated when too long (with a title tooltip)"},{"zh-CN":"checkedColor / uncheckedColor 自定义开 / 关背景色（CSS 颜色值，透传 CSS 变量）","en-US":"checkedColor / uncheckedColor customize the on / off background colors (CSS color values, passed via CSS variables)"},{"zh-CN":"beforeChange 切换前钩子：返回 false 或 reject 的 Promise 可阻止切换","en-US":"beforeChange pre-toggle hook: returning false or a rejected promise prevents the toggle"},{"zh-CN":"通过 ref 暴露 focus() 命令式聚焦","en-US":"Imperative focus() exposed via ref"}],scenarios:[{"zh-CN":"通知开关、功能启停、协议同意等布尔设置的即时切换场景。","en-US":"Instant toggling of boolean settings such as notification switches, feature flags, and agreement consent."}],demos:[{id:"basic",title:{"zh-CN":"受控用法","en-US":"Controlled Usage"},description:{"zh-CN":"绑定 value 并监听 change 同步外部状态，Vue 端推荐 v-model:value。","en-US":"Bind value and listen to change to sync external state; v-model:value is recommended on Vue."},vueComponent:uE,reactComponent:mE,vueSource:SE,reactSource:CE},{id:"state",title:{"zh-CN":"尺寸与状态","en-US":"Sizes & States"},description:{"zh-CN":"小尺寸、非受控默认开启、禁用与加载态。","en-US":"Small size, uncontrolled default-on, disabled, and loading states."},vueComponent:pE,reactComponent:hE,vueSource:xE,reactSource:wE},{id:"text",title:{"zh-CN":"双态文本","en-US":"Dual-State Text"},description:{"zh-CN":"checkedText / uncheckedText 显示在轨道内；不传保持纯开关模式。","en-US":"checkedText / uncheckedText are shown inside the track; omit them for a plain switch."},vueComponent:bE,reactComponent:yE,vueSource:_E,reactSource:kE}],api:{props:[{name:"value",type:"boolean",default:"—",description:{"zh-CN":"受控选中状态（提供即受控）","en-US":"Controlled checked state (controlled when provided)"}},{name:"defaultValue",type:"boolean",default:"false",description:{"zh-CN":"非受控初始状态","en-US":"Uncontrolled initial state"}},{name:"size",type:"'sm' | 'md'",default:"'md'",description:{"zh-CN":"尺寸","en-US":"Switch size"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用","en-US":"Disabled state"}},{name:"loading",type:"boolean",default:"false",description:{"zh-CN":"加载中（切换被忽略）","en-US":"Loading state (toggles are ignored)"}},{name:"checkedText",type:"string",default:"—",description:{"zh-CN":"开启态文本（轨道内滑块左侧；空串视为未提供；超长截断 + title）","en-US":"On-state text (left of the thumb inside the track; an empty string is treated as not provided; truncated with a title tooltip when too long)"}},{name:"uncheckedText",type:"string",default:"—",description:{"zh-CN":"关闭态文本（轨道内滑块右侧；空串视为未提供；超长截断 + title）","en-US":"Off-state text (right of the thumb inside the track; an empty string is treated as not provided; truncated with a title tooltip when too long)"}},{name:"checkedColor",type:"string",default:"—",description:{"zh-CN":"开启态背景色（CSS 颜色值，通过 --xui-switch-checked-color 透传）","en-US":"On-state background color (CSS color value, passed via --xui-switch-checked-color)"}},{name:"uncheckedColor",type:"string",default:"—",description:{"zh-CN":"关闭态背景色（CSS 颜色值，通过 --xui-switch-unchecked-color 透传）","en-US":"Off-state background color (CSS color value, passed via --xui-switch-unchecked-color)"}},{name:"beforeChange",type:"(value: boolean) => boolean | Promise<boolean>",default:"—",description:{"zh-CN":"切换前钩子，返回 false 或 reject 的 Promise 可阻止切换","en-US":"Pre-toggle hook; returning false or a rejected promise prevents the toggle"}},{name:"onChange",type:"(value: boolean) => void",default:"—",description:{"zh-CN":"状态变更回调","en-US":"State change callback"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"boolean",description:{"zh-CN":"切换后的选中值","en-US":"Fired with the checked value after toggle"}},{vue:"update:value",react:"—",payload:"boolean",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"loadingIcon",react:"renderLoadingIcon",description:{"zh-CN":"自定义加载图标（替换内置 Spinner）","en-US":"Custom loading icon (replaces the built-in spinner)"}},{vue:"checkedIcon",react:"renderCheckedIcon",description:{"zh-CN":"自定义开启态滑块内图标（替换默认对勾）","en-US":"Custom on-state thumb icon (replaces the default checkmark)"}},{vue:"uncheckedIcon",react:"renderUncheckedIcon",description:{"zh-CN":"自定义关闭态滑块内图标（替换默认关闭图标）","en-US":"Custom off-state thumb icon (replaces the default close icon)"}}]},notes:[{"zh-CN":"受控模式下组件不自改状态，仅通过 change / update:value 回调通知外部同步。","en-US":"In controlled mode the component never changes its own state; it only notifies the external side via change / update:value."},{"zh-CN":'loading 为 true 时点击切换被忽略，但不禁用样式，适合"切换中等待异步结果"场景。',"en-US":'When loading is true, click toggles are ignored but the disabled styling is not applied — ideal for "waiting for an async result after toggling" scenarios.'},{"zh-CN":"beforeChange 返回 false 或 reject 的 Promise 时阻止切换；返回 true 或 resolve(true) 时正常切换。","en-US":"beforeChange returning false or a rejected promise prevents the toggle; returning true or resolving to true allows it."},{"zh-CN":'双态文本对读屏隐藏（状态由 role="switch" + aria-checked 传达），两文本常驻 DOM 并以 CSS Grid 重叠，轨道宽度自适应较宽文本，切换时无宽度抖动。',"en-US":'Dual-state text is hidden from screen readers (state is conveyed via role="switch" + aria-checked); both texts stay in the DOM overlapped with CSS Grid, the track width adapts to the wider text, and no width jitter occurs on toggle.'}],a11y:[{"zh-CN":'渲染为 role="switch" 的按钮，携带 aria-checked；禁用时携带 disabled，支持空格 / 回车切换。',"en-US":'Renders as a button with role="switch" and aria-checked; carries disabled when disabled, and toggles with Space / Enter.'}]},TE=M({__name:"basic",setup(e){const t=P(()=>[{key:"name",title:z()?"姓名":"Name"},{key:"age",title:z()?"年龄":"Age",sortable:!0,width:100,align:"center"},{key:"city",title:z()?"城市":"City"}]),n=P(()=>z()?[{id:1,name:"张三",age:30,city:"Beijing"},{id:2,name:"李四",age:25,city:"Shanghai"},{id:3,name:"王五",age:28,city:"Guangzhou"},{id:4,name:"赵六",age:32,city:"Shenzhen"}]:[{id:1,name:"John",age:30,city:"Beijing"},{id:2,name:"Jane",age:25,city:"Shanghai"},{id:3,name:"Mike",age:28,city:"Guangzhou"},{id:4,name:"Lily",age:32,city:"Shenzhen"}]),a=l=>{console.log("sort-change:",l.key,l.order)};return(l,o)=>(b(),ae(r(lo),{columns:t.value,"data-source":n.value,"row-key":"id",stripe:"",border:"",onSortChange:a},null,8,["columns","data-source"]))}}),zE={class:"demo-column"},UE=M({__name:"custom",setup(e){const t=P(()=>[{key:"name",title:z()?"姓名":"Name"},{key:"action",title:z()?"操作":"Action",render:a=>z()?`查看 ${String(a.name)}`:`View ${String(a.name)}`}]),n=P(()=>z()?[{id:1,name:"张三"},{id:2,name:"李四"}]:[{id:1,name:"John"},{id:2,name:"Jane"}]);return(a,l)=>(b(),C("div",zE,[U(r(lo),{columns:t.value,"data-source":n.value,"row-key":"id",border:""},null,8,["columns","data-source"]),U(r(lo),{columns:t.value,"data-source":[]},{empty:E(()=>[w("span",null,$(r(z)()?"自定义空态：没有更多数据啦":"Custom empty: no more data"),1)]),_:1},8,["columns"])]))}}),$E={class:"demo-column"},EE={class:"demo-text"},AE=M({__name:"virtual",setup(e){const t=P(()=>Array.from({length:1e3},(o,i)=>({id:i+1,name:z()?`用户${i+1}`:`User ${i+1}`,age:20+i%40,city:z()?`城市${i%20+1}`:`City ${i%20+1}`}))),n=P(()=>[{key:"name",title:z()?"姓名":"Name"},{key:"age",title:z()?"年龄":"Age",width:100,align:"center"},{key:"city",title:z()?"城市":"City"}]),a=q([]),l=o=>{a.value=o};return(o,i)=>(b(),C("div",$E,[U(r(lo),{columns:n.value,"data-source":t.value,"row-key":"id",virtual:"",height:320,"row-height":40,stripe:"","row-selection":{onChange:l}},null,8,["columns","data-source","row-selection"]),w("p",EE,$(r(z)()?`虚拟滚动 · 1000 行仅渲染可视窗口；当前选中 ${a.value.length} 行（滚动时勾选状态保持）。`:`Virtual scroll · only the visible window of 1000 rows is rendered; ${a.value.length} row(s) selected (selection preserved on scroll).`),1)]))}});function RE(){const e=oe(),t=[{key:"name",title:e?"姓名":"Name"},{key:"age",title:e?"年龄":"Age",sortable:!0,width:100,align:"center"},{key:"city",title:e?"城市":"City"}],n=e?[{id:1,name:"张三",age:30,city:"Beijing"},{id:2,name:"李四",age:25,city:"Shanghai"},{id:3,name:"王五",age:28,city:"Guangzhou"},{id:4,name:"赵六",age:32,city:"Shenzhen"}]:[{id:1,name:"John",age:30,city:"Beijing"},{id:2,name:"Jane",age:25,city:"Shanghai"},{id:3,name:"Mike",age:28,city:"Guangzhou"},{id:4,name:"Lily",age:32,city:"Shenzhen"}];return u.jsx(yo,{columns:t,dataSource:n,rowKey:"id",stripe:!0,border:!0,onSortChange:a=>console.log("sort-change:",a.key,a.order)})}function BE(){const e=oe(),t=[{key:"name",title:e?"姓名":"Name"},{key:"action",title:e?"操作":"Action",render:a=>e?`查看 ${String(a.name)}`:`View ${String(a.name)}`}],n=e?[{id:1,name:"张三"},{id:2,name:"李四"}]:[{id:1,name:"John"},{id:2,name:"Jane"}];return u.jsxs("div",{className:"demo-column",children:[u.jsx(yo,{columns:t,dataSource:n,rowKey:"id",border:!0}),u.jsx(yo,{columns:t,dataSource:[],renderEmpty:()=>u.jsx("span",{children:e?"自定义空态：没有更多数据啦":"Custom empty: no more data"})})]})}function OE(){const e=oe(),[t,n]=B.useState([]),a=Array.from({length:1e3},(o,i)=>({id:i+1,name:e?`用户${i+1}`:`User ${i+1}`,age:20+i%40,city:e?`城市${i%20+1}`:`City ${i%20+1}`})),l=[{key:"name",title:e?"姓名":"Name"},{key:"age",title:e?"年龄":"Age",width:100,align:"center"},{key:"city",title:e?"城市":"City"}];return u.jsxs("div",{className:"demo-column",children:[u.jsx(yo,{columns:l,dataSource:a,rowKey:"id",virtual:!0,height:320,rowHeight:40,stripe:!0,rowSelection:{onChange:o=>n([...o])}}),u.jsx("p",{className:"demo-text",children:e?`虚拟滚动 · 1000 行仅渲染可视窗口；当前选中 ${t.length} 行（滚动时勾选状态保持）。`:`Virtual scroll · only the visible window of 1000 rows is rendered; ${t.length} row(s) selected (selection preserved on scroll).`})]})}const ZE=`<script setup lang="ts">
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
`,jE=`<script setup lang="ts">
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
`,DE=`<script setup lang="ts">
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
`,ME=`import { Table } from '@xui-design/react';
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
`,LE=`import { Table } from '@xui-design/react';
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
`,VE=`import { useState } from 'react';
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
`,HE={name:"Table",slug:"table",title:"表格",category:"display",summary:{"zh-CN":"结构化数据表格，支持列定义、非受控排序、行选择、虚拟滚动、自定义单元格与空态。","en-US":"A structured data table with column definitions, uncontrolled sorting, row selection, virtual scrolling, custom cells, and an empty state."},features:[{"zh-CN":"columns 列定义 + dataSource 数据驱动，rowKey 指定行唯一键","en-US":"Driven by columns definitions and dataSource, with rowKey as the unique row key"},{"zh-CN":"列级排序：点击表头循环 升序 → 降序 → 取消（非受控内部排序）","en-US":"Column sorting: clicking the header cycles ascending → descending → cleared (uncontrolled internal sorting)"},{"zh-CN":"columns[].render(record, index) 自定义单元格内容（返回字符串）","en-US":"columns[].render(record, index) customizes cell content (returns a string)"},{"zh-CN":"rowSelection 行选择：全选 / 半选联动、受控 selectedRowKeys、getCheckboxDisabled 禁用行","en-US":"rowSelection row selection: linked select-all / indeterminate states, controlled selectedRowKeys, and getCheckboxDisabled for disabled rows"},{"zh-CN":"virtual 虚拟滚动：1000+ 行仅渲染可视窗口，height / rowHeight 控制视口与行高","en-US":"virtual scrolling: 1000+ rows render only the visible window; height / rowHeight control the viewport and row height"},{"zh-CN":"onRowClick 行点击事件；className / style 自定义透传（支持 CSS 变量）","en-US":"onRowClick row-click event; className / style pass-through customization (CSS variables supported)"},{"zh-CN":"stripe 斑马纹 / border 边框模式；空数据态支持插槽 / 回调覆盖","en-US":"stripe zebra striping / border mode; the empty state can be overridden via slot / render callback"}],scenarios:[{"zh-CN":"列表页、详情面板、后台管理等结构化数据的展示场景。","en-US":"Displaying structured data in list pages, detail panels, admin consoles, and more."},{"zh-CN":"大数据量表格浏览场景（配合 virtual 虚拟滚动，仅渲染可视窗口）。","en-US":"Browsing large datasets (with virtual scrolling rendering only the visible window)."},{"zh-CN":"需要勾选批量操作的列表场景（配合 rowSelection 行选择）。","en-US":"Lists that need batch operations on checked rows (with rowSelection)."}],demos:[{id:"basic",title:{"zh-CN":"基础表格","en-US":"Basic Table"},description:{"zh-CN":'列宽、对齐、斑马纹、边框与可排序列；点击"年龄"表头体验排序循环。',"en-US":'Column width, alignment, zebra striping, borders, and sortable columns; click the "Age" header to try the sort cycle.'},vueComponent:TE,reactComponent:RE,vueSource:ZE,reactSource:ME},{id:"custom",title:{"zh-CN":"自定义单元格与空态","en-US":"Custom Cells & Empty State"},description:{"zh-CN":"render 返回自定义文本；无数据时通过插槽 / renderEmpty 渲染自定义空态。","en-US":"render returns custom text; when there is no data, use the slot / renderEmpty to render a custom empty state."},vueComponent:UE,reactComponent:BE,vueSource:jE,reactSource:LE},{id:"virtual",title:{"zh-CN":"虚拟滚动与行选择","en-US":"Virtual Scrolling & Row Selection"},description:{"zh-CN":"1000 行数据仅渲染可视窗口，滚动流畅；配合 rowSelection 勾选行，滚动时勾选状态保持。","en-US":"Only the visible window of 1000 rows is rendered for smooth scrolling; with rowSelection, checked state is preserved while scrolling."},vueComponent:AE,reactComponent:OE,vueSource:DE,reactSource:VE}],api:{props:[{name:"columns",type:"TableColumn[]",default:"—",description:{"zh-CN":"列定义数组（必填）","en-US":"Column definitions (required)"},required:!0},{name:"dataSource",type:"TableRow[]",default:"—",description:{"zh-CN":"行数据数组（必填）","en-US":"Row data array (required)"},required:!0},{name:"rowKey",type:"string",default:"—",description:{"zh-CN":"行唯一键字段名（缺省用行下标；行选择建议提供）","en-US":"Field name of the unique row key (falls back to row index; recommended for row selection)"}},{name:"stripe",type:"boolean",default:"false",description:{"zh-CN":"斑马纹","en-US":"Zebra striping"}},{name:"border",type:"boolean",default:"false",description:{"zh-CN":"边框模式","en-US":"Border mode"}},{name:"virtual",type:"boolean",default:"false",description:{"zh-CN":"虚拟滚动模式（需提供 rowKey；建议同时设置 height 与 rowHeight）","en-US":"Virtual scrolling mode (requires rowKey; setting height and rowHeight is recommended)"}},{name:"height",type:"number | string",default:"—",description:{"zh-CN":"表格主体固定高度（px）","en-US":"Fixed height of the table body (px)"}},{name:"rowHeight",type:"number",default:"40",description:{"zh-CN":"虚拟模式行高（px，须与实际行高一致）","en-US":"Row height in virtual mode (px; must match the actual row height)"}},{name:"rowSelection",type:"TableRowSelection",default:"—",description:{"zh-CN":"行选择配置：selectedRowKeys（受控）/ onChange / getCheckboxDisabled","en-US":"Row selection config: selectedRowKeys (controlled) / onChange / getCheckboxDisabled"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式（支持 CSS 变量如 --xui-table-row-height）","en-US":"Inline styles appended to the root element (CSS variables such as --xui-table-row-height supported)"}},{name:"onSortChange",type:"(sort: TableSort) => void",default:"—",description:{"zh-CN":"排序变更回调","en-US":"Callback fired when sorting changes"}},{name:"onRowClick",type:"(record: TableRow, index: number) => void",default:"—",description:{"zh-CN":"行点击回调（选择列点击不触发）","en-US":"Row-click callback (clicks on the selection column do not trigger it)"}}],events:[{vue:"sortChange",react:"onSortChange",payload:"TableSort",description:{"zh-CN":"点击表头排序时触发","en-US":"Fired when a header click changes the sorting"}},{vue:"rowClick",react:"onRowClick",payload:"record: TableRow, index: number",description:{"zh-CN":"点击数据行时触发（选择列点击不冒泡）","en-US":"Fired when a data row is clicked (clicks on the selection column do not bubble)"}}],slots:[{vue:"sortIcon",react:"renderSortIcon",description:{"zh-CN":"自定义排序图标（作用域参数 order: 'asc' | 'desc'）","en-US":"Custom sort icon (scoped param order: 'asc' | 'desc')"}},{vue:"empty",react:"renderEmpty",description:{"zh-CN":'空数据内容（覆盖默认语言包 table.empty，zh-CN："暂无数据"）',"en-US":'Empty-data content (overrides the default locale entry table.empty, zh-CN: "暂无数据")'}}],types:[{name:"TableColumn",definition:`type TableColumn = {
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
};`,description:{"zh-CN":"行选择配置。提供 selectedRowKeys 即受控（内部状态不变，仅回调）；未全选含半选时点击全选选中全部可选行。","en-US":"Row selection config. Providing selectedRowKeys makes it controlled (internal state stays unchanged; callbacks only). When not all rows are selected (including the indeterminate state), clicking select-all selects every selectable row."}},{name:"TableRowKey",definition:"type TableRowKey = string | number;",description:{"zh-CN":"行唯一键（rowKey 字段取值）。","en-US":"Unique row key (value of the rowKey field)."}}]},notes:[{"zh-CN":"非受控排序：排序状态由组件内部维护，外部仅通过 sortChange 感知，不修改传入的原数组。","en-US":"Uncontrolled sorting: sort state is maintained internally; the outside only observes it via sortChange, and the original array passed in is never mutated."},{"zh-CN":"排序比较：同为 number 按数值比较，否则按字符串（码点序）稳定排序。","en-US":"Sort comparison: two numbers compare numerically; otherwise values are stably sorted as strings (by code point)."},{"zh-CN":"render 返回值仅支持字符串；单元格取值为 null / undefined 时显示为空字符串。","en-US":"render only supports returning strings; a cell value of null / undefined renders as an empty string."},{"zh-CN":"虚拟模式采用固定行高 + spacer 占位方案，保持原生 table 语义；行高必须与 rowHeight 一致。","en-US":"Virtual mode uses fixed row height plus a spacer placeholder while keeping native table semantics; the actual row height must match rowHeight."},{"zh-CN":"行选择未提供 selectedRowKeys 时为非受控（内部维护）；禁用行（getCheckboxDisabled）不参与全选。","en-US":"Row selection is uncontrolled (internally maintained) without selectedRowKeys; disabled rows (getCheckboxDisabled) are excluded from select-all."}],a11y:[{"zh-CN":"可排序列表头携带 aria-sort（ascending / descending），未排序时省略。","en-US":"Sortable column headers carry aria-sort (ascending / descending), omitted when unsorted."},{"zh-CN":'表头使用 scope="col" 与数据行关联；全选框同步 indeterminate 半选语义。',"en-US":'Headers use scope="col" to associate with data rows; the select-all checkbox syncs the indeterminate semantics.'}]},IE={class:"demo-row"},FE=M({__name:"basic",setup(e){return(t,n)=>(b(),C("div",IE,[U(r(W),{onClick:n[0]||(n[0]=a=>r(Hn).info(r(z)()?"这是一条普通提示":"A normal info message."))},{default:E(()=>[...n[4]||(n[4]=[K("Info",-1)])]),_:1}),U(r(W),{type:"primary",onClick:n[1]||(n[1]=a=>r(Hn).success(r(z)()?"保存成功":"Saved successfully"))},{default:E(()=>[...n[5]||(n[5]=[K(" Success ",-1)])]),_:1}),U(r(W),{onClick:n[2]||(n[2]=a=>r(Hn).warning(r(z)()?"磁盘空间不足":"Insufficient disk space"))},{default:E(()=>[...n[6]||(n[6]=[K(" Warning ",-1)])]),_:1}),U(r(W),{onClick:n[3]||(n[3]=a=>r(Hn).error(r(z)()?"保存失败，请重试":"Save failed, please retry"))},{default:E(()=>[...n[7]||(n[7]=[K(" Error ",-1)])]),_:1})]))}}),KE={class:"demo-row"},qE=M({__name:"options",setup(e){const t=()=>{Hn.open({content:z()?"这条消息不会自动关闭，可手动关闭":"This message will not auto-close, close it manually",duration:0,closable:!0})};return(n,a)=>(b(),C("div",KE,[U(r(W),{type:"primary",onClick:t},{default:E(()=>[K($(r(z)()?"不自动关闭":"No auto-close"),1)]),_:1}),U(r(W),{onClick:a[0]||(a[0]=l=>r(Hn).closeAll())},{default:E(()=>[K($(r(z)()?"关闭全部":"Close all"),1)]),_:1})]))}}),PE={class:"demo-column"},GE={class:"demo-row"},YE={class:"demo-text"},XE=M({__name:"update",setup(e){let t=0;const n=q(!1),a=()=>{t=0,n.value=!1,Hn.open({content:z()?`上传中 ${t}%`:`Uploading ${t}%`,key:"upload",duration:0})},l=()=>{t=Math.min(t+25,100),t<100?Hn.open({content:z()?`上传中 ${t}%`:`Uploading ${t}%`,key:"upload",duration:0}):Hn.open({content:z()?"上传完成":"Upload complete",key:"upload",type:"success",duration:3e3,onClose:()=>{n.value=!0}})};return(o,i)=>(b(),C("div",PE,[w("div",GE,[U(r(W),{type:"primary",onClick:a},{default:E(()=>[K($(r(z)()?"开始上传":"Start upload"),1)]),_:1}),U(r(W),{onClick:l},{default:E(()=>[K($(r(z)()?"推进进度":"Advance progress"),1)]),_:1})]),w("p",YE,$(r(z)()?"同 key 反复 open 原地刷新进度（不堆叠消息）；完成后自动关闭并触发 onClose（已触发：":"Repeatedly open with the same key to refresh progress in place (no message stacking); auto-closes when done and triggers onClose (triggered: ")+$(n.value?r(z)()?"是":"yes":r(z)()?"否":"no")+") ",1)]))}});function QE(){const e=oe();return u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{onClick:()=>Kn.info(e?"这是一条普通提示":"A normal info message."),children:"Info"}),u.jsx(ee,{type:"primary",onClick:()=>Kn.success(e?"保存成功":"Saved successfully"),children:"Success"}),u.jsx(ee,{onClick:()=>Kn.warning(e?"磁盘空间不足":"Insufficient disk space"),children:"Warning"}),u.jsx(ee,{onClick:()=>Kn.error(e?"保存失败，请重试":"Save failed, please retry"),children:"Error"})]})}function JE(){const e=oe(),t=()=>{Kn.open({content:e?"这条消息不会自动关闭，可手动关闭":"This message will not auto-close, close it manually",duration:0,closable:!0})};return u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{type:"primary",onClick:t,children:e?"不自动关闭":"No auto-close"}),u.jsx(ee,{onClick:()=>Kn.closeAll(),children:e?"关闭全部":"Close all"})]})}function WE(){const e=oe(),[t,n]=B.useState(!1),a=B.useRef(0),l=()=>{a.current=0,n(!1),Kn.open({content:e?"上传中 0%":"Uploading 0%",key:"upload",duration:0})},o=()=>{a.current=Math.min(a.current+25,100);const i=a.current;i<100?Kn.open({content:e?`上传中 ${i}%`:`Uploading ${i}%`,key:"upload",duration:0}):Kn.open({content:e?"上传完成":"Upload complete",key:"upload",type:"success",duration:3e3,onClose:()=>n(!0)})};return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{type:"primary",onClick:l,children:e?"开始上传":"Start upload"}),u.jsx(ee,{onClick:o,children:e?"推进进度":"Advance progress"})]}),u.jsxs("p",{className:"demo-text",children:[e?"同 key 反复 open 原地刷新进度（不堆叠消息）；完成后自动关闭并触发 onClose（已触发：":"Repeatedly open with the same key to refresh progress in place (no message stacking); auto-closes when done and triggers onClose (triggered: ",t?e?"是":"yes":e?"否":"no",")"]})]})}const eA=`<script setup lang="ts">
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
`,tA=`<script setup lang="ts">
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
`,nA=`<script setup lang="ts">
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
`,aA=`import { Button, message } from '@xui-design/react';
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
`,lA=`import { Button, message } from '@xui-design/react';
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
`,oA=`import { useRef, useState } from 'react';
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
`,iA={name:"Message",slug:"message",title:"全局提示",category:"feedback",summary:{"zh-CN":"命令式全局轻提示，双端同构 API，首次调用自动挂载容器，无需预置组件。","en-US":"Imperative global toast with an isomorphic API across frameworks; the container mounts automatically on first call, no host component needed."},features:[{"zh-CN":"命令式 API：info / success / warning / error / open / closeAll，双端同构","en-US":"Imperative API: info / success / warning / error / open / closeAll, isomorphic across frameworks"},{"zh-CN":"4 种语义类型，各配图标与色板，3s 自动关闭（duration 可配，0 为常驻）","en-US":"Four semantic types with matching icons and palettes; auto-closes after 3s (duration configurable, 0 keeps it open)"},{"zh-CN":"closable 手动关闭；open 返回 { close } 句柄，重复关闭幂等","en-US":"closable enables manual close; open returns a { close } handle and repeated closes are idempotent"},{"zh-CN":"maxCount（默认 5）同屏上限，超限自动移除最早一条","en-US":"maxCount (default 5) caps on-screen messages; the oldest is removed when exceeded"},{"zh-CN":"key 更新语义：相同 key 再次 open 原地更新该条（不新增、重置计时），适合进度类反馈","en-US":"key-based updates: calling open again with the same key updates that message in place (no new entry, timer resets), ideal for progress feedback"},{"zh-CN":"onClose 回调：消息被移除（自动 / 手动 / 挤出 / closeAll）时触发","en-US":"onClose fires whenever a message is removed (auto / manual / evicted / closeAll)"},{"zh-CN":"首次调用惰性挂载全局容器（页面顶部居中 fixed），应用中无需声明任何宿主组件","en-US":"The global container mounts lazily on first call (fixed, top-center); no host component needs to be declared"}],scenarios:[{"zh-CN":"保存成功、请求失败、复制完成等不打断操作流程的轻量全局反馈。","en-US":"Lightweight global feedback that does not interrupt the flow, such as save success, request failure, or copy completion."},{"zh-CN":"上传 / 导出等耗时任务的进度反馈（配合 key 更新语义，始终只有一条消息）。","en-US":"Progress feedback for long tasks like upload / export (with key-based updates, always a single message)."}],demos:[{id:"basic",title:{"zh-CN":"四种语义类型","en-US":"Four Semantic Types"},description:{"zh-CN":"直接从框架包导入 message 单例调用，容器首次调用时自动挂载。","en-US":"Import the message singleton from the framework package and call it directly; the container mounts on first call."},vueComponent:FE,reactComponent:QE,vueSource:eA,reactSource:aA},{id:"options",title:{"zh-CN":"常驻与关闭全部","en-US":"Persistent & Close All"},description:{"zh-CN":"duration: 0 时不自动关闭；closeAll 清空当前所有消息及其定时器。","en-US":"duration: 0 disables auto-close; closeAll clears all current messages and their timers."},vueComponent:qE,reactComponent:JE,vueSource:tA,reactSource:lA},{id:"update",title:{"zh-CN":"key 更新与 onClose","en-US":"key Updates & onClose"},description:{"zh-CN":"同 key 反复 open 原地刷新进度；消息关闭时触发 onClose 回调。","en-US":"Repeated open calls with the same key refresh progress in place; onClose fires when the message closes."},vueComponent:XE,reactComponent:WE,vueSource:nA,reactSource:oA}],api:{methods:[{name:"message.info",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 info 消息","en-US":"Open an info message"}},{name:"message.success",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 success 消息","en-US":"Open a success message"}},{name:"message.warning",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 warning 消息","en-US":"Open a warning message"}},{name:"message.error",signature:"(content: string, options?: MessageShortOptions) => MessageHandle",description:{"zh-CN":"打开 error 消息","en-US":"Open an error message"}},{name:"message.open",signature:"(options: MessageOptions) => MessageHandle",description:{"zh-CN":"按完整选项打开消息（支持 key / onClose）","en-US":"Open a message with full options (supports key / onClose)"}},{name:"message.closeAll",signature:"() => void",description:{"zh-CN":"关闭全部消息","en-US":"Close all messages"}}],types:[{name:"MessageOptions",definition:`type MessageOptions = {
  type?: 'info' | 'success' | 'warning' | 'error'; // 默认 'info'
  content: string;        // 必填
  duration?: number;      // 默认 3000，0 表示不自动关闭
  closable?: boolean;     // 默认 false
  icon?: string;          // 自定义类型图标（内层 SVG 标记，与 @xui-design/icons 数据源同构）
  key?: string | number;  // 更新键：同 key 再次 open 原地更新该条
  onClose?: () => void;   // 消息移除回调
};`,description:{"zh-CN":"open 的完整参数；快捷方法的第二参仅支持 duration / closable（type 与 content 由方法注入，key / onClose 需走 message.open）。","en-US":"Full options for open; shortcut methods only accept duration / closable as the second argument (type and content are injected by the method; key / onClose require message.open)."}},{name:"MessageHandle",definition:`type MessageHandle = {
  close: () => void;
};`,description:{"zh-CN":"open / 快捷方法返回的句柄，close() 手动关闭且幂等。","en-US":"Handle returned by open / shortcut methods; close() closes manually and is idempotent."}}]},notes:[{"zh-CN":"Message 是命令式 API 而非声明式组件：双端均未导出 Message 组件，也不进 contract-test 声明式校验矩阵。","en-US":"Message is an imperative API, not a declarative component: neither framework exports a Message component, and it is excluded from the declarative contract-test matrix."},{"zh-CN":"Vue 与 React 各自导出独立的 message 单例（@xui-design/vue / @xui-design/react），在对应框架入口直接调用即可。","en-US":"Vue and React each export their own message singleton (@xui-design/vue / @xui-design/react); call it directly from the corresponding framework entry."},{"zh-CN":"maxCount 超限时连带移除最早消息的自动关闭定时器；closeAll 同时清空全部定时器。","en-US":"When maxCount is exceeded, the oldest message is removed along with its auto-close timer; closeAll clears all timers."},{"zh-CN":"key 更新：content 必填刷新，type / closable 未传保留原值；duration 以最新值重置计时，onClose 传入时替换旧回调。","en-US":"key updates: content is required and always refreshed; type / closable keep their previous values when omitted; duration resets the timer with the latest value; onClose replaces the old callback when provided."},{"zh-CN":"onClose 触发时机统一：自动关闭 / 手动关闭 / maxCount 挤出 / closeAll 均触发。","en-US":"onClose fires consistently for auto-close / manual close / maxCount eviction / closeAll."},{"zh-CN":"icon 选项传内层 SVG 标记（不含 <svg> 壳，如 icons.close 的值），渲染时替换按 type 的内置图标。","en-US":"The icon option takes inner SVG markup (without the <svg> wrapper, e.g. the value of icons.close), replacing the built-in type icon at render."}],a11y:[{"zh-CN":'消息容器 aria-live="polite"，新消息出现时读屏播报但不打断当前朗读；关闭按钮携带 aria-label。',"en-US":'The message container uses aria-live="polite" so screen readers announce new messages without interrupting the current reading; the close button carries an aria-label.'}]},sA={class:"demo-column"},rA={class:"demo-text"},cA=M({__name:"basic",setup(e){const t=q("");return(n,a)=>(b(),C("div",sA,[U(r(rt),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),placeholder:r(z)()?"输入点内容...":"Type something...",clearable:""},null,8,["value","placeholder"]),w("p",rA,$(r(z)()?"当前值：":"Current: ")+$(t.value||(r(z)()?"（空）":"(empty)")),1)]))}}),uA={class:"demo-column"},dA=M({__name:"state",setup(e){return(t,n)=>(b(),C("div",uA,[U(r(rt),{value:r(z)()?"禁用态":"Disabled",disabled:""},null,8,["value"]),U(r(rt),{value:r(z)()?"只读态":"Read-only",readonly:""},null,8,["value"]),U(r(rt),{placeholder:r(z)()?"带前缀内容":"With prefix"},{prefix:E(()=>[...n[0]||(n[0]=[K("🔍",-1)])]),_:1},8,["placeholder"])]))}});function pA(){const e=oe(),[t,n]=B.useState("");return u.jsxs("div",{className:"demo-column",children:[u.jsx(ut,{value:t,onInput:n,placeholder:e?"输入点内容...":"Type something...",clearable:!0}),u.jsxs("p",{className:"demo-text",children:[e?"当前值：":"Current: ",t||(e?"（空）":"(empty)")]})]})}function mA(){const e=oe();return u.jsxs("div",{className:"demo-column",children:[u.jsx(ut,{value:e?"禁用态":"Disabled",disabled:!0}),u.jsx(ut,{value:e?"只读态":"Read-only",readonly:!0}),u.jsx(ut,{placeholder:e?"带前缀内容":"With prefix",renderPrefix:()=>u.jsx("span",{children:"🔍"})})]})}const hA=`<script setup lang="ts">
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
`,fA=`<script setup lang="ts">
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
`,vA=`import { useState } from 'react';
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
`,gA=`import { Input } from '@xui-design/react';
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
`,bA={name:"Input",slug:"input",title:"输入框",category:"basic",summary:{"zh-CN":"基础文本输入框，支持受控 / 非受控、清除按钮、前后缀与多种原生类型。","en-US":"A basic text input with controlled / uncontrolled modes, a clear button, prefix / suffix, and multiple native types."},features:[{"zh-CN":"受控 / 非受控双模式（提供 value 即受控），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes (controlled when value is provided); v-model:value on Vue"},{"zh-CN":"支持 text / password / number / email / search / tel / url 原生类型","en-US":"Supports native types: text / password / number / email / search / tel / url"},{"zh-CN":"disabled 禁用、readonly 只读、maxLength 最大长度","en-US":"Disabled state, read-only state, and maxLength limit"},{"zh-CN":"clearable 显示清除按钮；prefix / suffix 前后缀内容可定制","en-US":"Clear button via clearable; customizable prefix / suffix content"},{"zh-CN":"通过 ref 暴露 focus() 命令式聚焦","en-US":"Imperative focus() exposed via ref"}],scenarios:[{"zh-CN":"表单文本录入、搜索框、带图标的复合输入等场景。","en-US":"Form text entry, search boxes, composite inputs with icons, and similar scenarios."}],demos:[{id:"basic",title:{"zh-CN":"受控用法","en-US":"Controlled Usage"},description:{"zh-CN":"绑定 value 同步外部状态，clearable 提供一键清空。","en-US":"Bind value to sync external state; clearable offers one-click clearing."},vueComponent:cA,reactComponent:pA,vueSource:hA,reactSource:vA},{id:"state",title:{"zh-CN":"禁用 / 只读 / 前缀","en-US":"Disabled / Readonly / Prefix"},description:{"zh-CN":"禁用与只读均透传原生属性；prefix 插槽可放置图标等前置内容。","en-US":"Disabled and readonly pass through to native attributes; the prefix slot holds leading content such as icons."},vueComponent:dA,reactComponent:mA,vueSource:fA,reactSource:gA}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控值（提供即受控）","en-US":"Controlled value (controlled when provided)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始值","en-US":"Uncontrolled initial value"}},{name:"type",type:"'text' | 'password' | 'number' | 'email' | 'search' | 'tel' | 'url'",default:"'text'",description:{"zh-CN":"原生 input 类型","en-US":"Native input type"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文本","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"readonly",type:"boolean",default:"false",description:{"zh-CN":"只读状态（双端 prop 同名，内部映射 DOM readOnly）","en-US":"Read-only state (same prop name on both frameworks; mapped to DOM readOnly)"}},{name:"maxLength",type:"number",default:"—",description:{"zh-CN":"最大输入长度","en-US":"Maximum input length"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清除图标","en-US":"Whether to show the clear icon"}},{name:"onInput",type:"(value: string) => void",default:"—",description:{"zh-CN":"输入回调（每次键入）","en-US":"Input callback (on every keystroke)"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"值变更提交回调（失焦或回车）","en-US":"Value commit callback (on blur or Enter)"}},{name:"onFocus",type:"(event: FocusEvent) => void",default:"—",description:{"zh-CN":"聚焦回调","en-US":"Focus callback"}},{name:"onBlur",type:"(event: FocusEvent) => void",default:"—",description:{"zh-CN":"失焦回调","en-US":"Blur callback"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调（点击清除图标）","en-US":"Clear callback (fired when the clear icon is clicked)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"input",react:"onInput",payload:"string",description:{"zh-CN":"每次键入触发","en-US":"Fired on every keystroke"}},{vue:"change",react:"onChange",payload:"string",description:{"zh-CN":"失焦或回车提交时触发","en-US":"Fired when the value is committed on blur or Enter"}},{vue:"focus",react:"onFocus",payload:"FocusEvent",description:{"zh-CN":"获得焦点","en-US":"Fired on focus"}},{vue:"blur",react:"onBlur",payload:"FocusEvent",description:{"zh-CN":"失去焦点","en-US":"Fired on blur"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"点击清除图标","en-US":"Fired when the clear icon is clicked"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"prefix",react:"renderPrefix",description:{"zh-CN":"前置内容（如图标）","en-US":"Leading content (e.g. an icon)"}},{vue:"suffix",react:"renderSuffix",description:{"zh-CN":"后置内容","en-US":"Trailing content"}},{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标（clearable 模式）","en-US":"Custom clear icon (in clearable mode)"}}]},notes:[{"zh-CN":"input 事件在每次键入时触发；change 事件在失焦或回车时触发，二者语义不同，注意按需监听。","en-US":"The input event fires on every keystroke, while change fires on blur or Enter; they have different semantics, so listen as needed."},{"zh-CN":"readonly 允许聚焦与复制但不可编辑，disabled 完全不可交互且不会随表单提交。","en-US":"readonly allows focus and copying but not editing; disabled blocks all interaction and is excluded from form submission."}],a11y:[{"zh-CN":"渲染为原生 <input>，disabled / readonly 透传原生属性，保留原生焦点与键盘输入行为。","en-US":"Renders as a native <input> with disabled / readonly passed through, preserving native focus and keyboard input behavior."}]},yA={class:"demo-column"},SA=M({__name:"basic",setup(e){const t=q(!1);return(n,a)=>(b(),C("div",yA,[U(r(W),{type:"primary",onClick:a[0]||(a[0]=l=>t.value=!0)},{default:E(()=>[K($(r(z)()?"打开对话框":"Open modal"),1)]),_:1}),U(r(Zi),{visible:t.value,"onUpdate:visible":a[3]||(a[3]=l=>t.value=l),title:r(z)()?"操作确认":"Confirm action",onOk:a[4]||(a[4]=l=>t.value=!1),onCancel:a[5]||(a[5]=l=>t.value=!1)},{footer:E(()=>[U(r(W),{onClick:a[1]||(a[1]=l=>t.value=!1)},{default:E(()=>[K($(r(z)()?"取消":"Cancel"),1)]),_:1}),U(r(W),{type:"primary",onClick:a[2]||(a[2]=l=>t.value=!1)},{default:E(()=>[K($(r(z)()?"确认":"Confirm"),1)]),_:1})]),default:E(()=>[w("p",null,$(r(z)()?"这是一段对话框内容，确认后将执行对应操作。":"Modal body text. Confirm to proceed with the action."),1)]),_:1},8,["visible","title"])]))}}),xA={class:"demo-column"},CA=M({__name:"custom",setup(e){const t=q(!1);return(n,a)=>(b(),C("div",xA,[U(r(W),{type:"primary",onClick:a[0]||(a[0]=l=>t.value=!0)},{default:E(()=>[K($(r(z)()?"打开对话框":"Open modal"),1)]),_:1}),U(r(Zi),{visible:t.value,"onUpdate:visible":a[1]||(a[1]=l=>t.value=l),title:r(z)()?"删除确认":"Delete confirmation","ok-text":r(z)()?"确认删除":"Confirm delete","cancel-text":r(z)()?"再想想":"Maybe later",onOk:a[2]||(a[2]=l=>t.value=!1),onCancel:a[3]||(a[3]=l=>t.value=!1)},{default:E(()=>[w("p",null,$(r(z)()?"删除后不可恢复，请谨慎操作。底部按钮文案由 okText / cancelText 自定义。":"Deletion is irreversible, proceed with caution. Footer button text is customized via okText / cancelText."),1)]),_:1},8,["visible","title","ok-text","cancel-text"])]))}}),_A={class:"demo-column"},kA=M({__name:"ref",setup(e){const t=q(null);return(n,a)=>(b(),C("div",_A,[U(r(W),{onClick:a[0]||(a[0]=l=>{var o;return(o=t.value)==null?void 0:o.open()})},{default:E(()=>[K($(r(z)()?"通过 ref 打开":"Open via ref"),1)]),_:1}),U(r(Zi),{ref_key:"modalRef",ref:t,title:r(z)()?"命令式控制":"Imperative control",width:"420px"},{default:E(()=>[w("p",null,$(r(z)()?"不需要维护 visible 状态，直接调用实例方法 open() / close()。":"No need to manage visible state manually; call instance methods open() / close() directly."),1)]),_:1},8,["title"])]))}});function wA(){const e=oe(),[t,n]=B.useState(!1),a=()=>n(!1);return u.jsxs("div",{className:"demo-column",children:[u.jsx(ee,{type:"primary",onClick:()=>n(!0),children:e?"打开对话框":"Open modal"}),u.jsx(Yi,{visible:t,title:e?"操作确认":"Confirm action",onOk:a,onCancel:a,renderFooter:()=>u.jsxs(u.Fragment,{children:[u.jsx(ee,{onClick:a,children:e?"取消":"Cancel"}),u.jsx(ee,{type:"primary",onClick:a,children:e?"确认":"Confirm"})]}),children:u.jsx("p",{children:e?"这是一段对话框内容，确认后将执行对应操作。":"Modal body text. Confirm to proceed with the action."})})]})}function NA(){const e=oe(),[t,n]=B.useState(!1);return u.jsxs("div",{className:"demo-column",children:[u.jsx(ee,{type:"primary",onClick:()=>n(!0),children:e?"打开对话框":"Open modal"}),u.jsx(Yi,{visible:t,title:e?"删除确认":"Delete confirmation",okText:e?"确认删除":"Confirm delete",cancelText:e?"再想想":"Maybe later",onOk:()=>n(!1),onCancel:()=>n(!1),children:u.jsx("p",{children:e?"删除后不可恢复，请谨慎操作。底部按钮文案由 okText / cancelText 自定义。":"Deletion is irreversible, proceed with caution. Footer button text is customized via okText / cancelText."})})]})}function TA(){const e=oe(),t=B.useRef(null);return u.jsxs("div",{className:"demo-column",children:[u.jsx(ee,{onClick:()=>{var n;return(n=t.current)==null?void 0:n.open()},children:e?"通过 ref 打开":"Open via ref"}),u.jsx(Yi,{ref:t,title:e?"命令式控制":"Imperative control",width:"420px",children:u.jsx("p",{children:e?"不需要维护 visible 状态，直接调用实例方法 open() / close()。":"No need to manage visible state manually; call instance methods open() / close() directly."})})]})}const zA=`<script setup lang="ts">
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
`,UA=`<script setup lang="ts">
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
`,$A=`<script setup lang="ts">
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
`,EA=`import { useState } from 'react';
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
`,AA=`import { useState } from 'react';
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
`,RA=`import { useRef } from 'react';
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
`,BA={name:"Modal",slug:"modal",title:"对话框",category:"basic",summary:{"zh-CN":"模态对话框，承载需要用户明确处理的信息或操作；支持焦点陷阱 / 焦点恢复、自定义底部文案与受控、ref 命令式两种用法。","en-US":"A modal dialog for information or actions that require explicit handling, with focus trap / focus restore, customizable footer text, and both controlled and ref-based imperative usage."},features:[{"zh-CN":"受控 visible / 非受控 defaultVisible，Vue 端支持 v-model:visible","en-US":"Controlled visible or uncontrolled defaultVisible; v-model:visible on Vue"},{"zh-CN":"title 标题、width 自定义宽度（数字按 px，字符串原样输出）","en-US":"Title and custom width (numbers are treated as px; strings are applied as-is)"},{"zh-CN":"closable 关闭按钮、maskClosable 遮罩点击关闭、closeOnEsc ESC 关闭","en-US":"Close button via closable, mask click to close via maskClosable, and ESC to close via closeOnEsc"},{"zh-CN":"焦点陷阱：打开期间 Tab 循环约束在弹窗内（trapFocus 可关闭）；关闭后焦点恢复到打开前元素","en-US":"Focus trap: Tab cycles within the dialog while open (can be disabled with trapFocus); focus returns to the pre-open element after close"},{"zh-CN":"okText / cancelText 自定义默认底部按钮文案（未提供时取全局语言包，zh-CN 默认 确认 / 取消）","en-US":"Custom default footer button text via okText / cancelText (falls back to the global locale; zh-CN defaults to 确认 / 取消)"},{"zh-CN":"default / title / footer 三个插槽（React 对应 children / renderTitle / renderFooter）","en-US":"Three slots: default / title / footer (children / renderTitle / renderFooter in React)"},{"zh-CN":"通过 ref 暴露 open() / close() 命令式方法（类型 ModalRef）","en-US":"Imperative open() / close() methods exposed via ref (type ModalRef)"}],scenarios:[{"zh-CN":"操作确认、表单编辑、详情展示等需要打断主流程并聚焦用户注意力的场景。","en-US":"Confirmations, form editing, detail views, and other scenarios that interrupt the main flow to focus user attention."}],demos:[{id:"basic",title:{"zh-CN":"受控对话框","en-US":"Controlled Dialog"},description:{"zh-CN":"外部维护 visible 状态，footer 插槽自定义底部按钮。","en-US":"Maintain visible externally; customize footer buttons via the footer slot."},vueComponent:SA,reactComponent:wA,vueSource:zA,reactSource:EA},{id:"custom",title:{"zh-CN":"自定义按钮文案","en-US":"Custom Button Text"},description:{"zh-CN":"okText / cancelText 定制底部文案；ESC、遮罩、关闭按钮均可退出。","en-US":"Customize footer text with okText / cancelText; ESC, mask click, and the close button all dismiss the dialog."},vueComponent:CA,reactComponent:NA,vueSource:UA,reactSource:AA},{id:"ref",title:{"zh-CN":"ref 命令式打开","en-US":"Imperative Open via ref"},description:{"zh-CN":"无需维护 visible，直接调用实例 open() / close()。","en-US":"No need to maintain visible; call open() / close() on the instance directly."},vueComponent:kA,reactComponent:TA,vueSource:$A,reactSource:RA}],api:{props:[{name:"visible",type:"boolean",default:"—",description:{"zh-CN":"受控可见性","en-US":"Controlled visibility"}},{name:"defaultVisible",type:"boolean",default:"false",description:{"zh-CN":"非受控初始可见性","en-US":"Uncontrolled initial visibility"}},{name:"title",type:"string",default:"—",description:{"zh-CN":"标题","en-US":"Dialog title"}},{name:"width",type:"number | string",default:"520",description:{"zh-CN":"宽度（数字按 px，字符串原样输出）","en-US":"Dialog width (numbers are treated as px; strings are applied as-is)"}},{name:"closable",type:"boolean",default:"true",description:{"zh-CN":"是否显示右上角关闭按钮","en-US":"Whether to show the close button in the top-right corner"}},{name:"maskClosable",type:"boolean",default:"true",description:{"zh-CN":"点击遮罩是否关闭","en-US":"Whether clicking the mask closes the dialog"}},{name:"closeOnEsc",type:"boolean",default:"true",description:{"zh-CN":"按 ESC 是否关闭","en-US":"Whether pressing ESC closes the dialog"}},{name:"okText",type:"string",default:"—",description:{"zh-CN":"确认按钮文案；未提供时取全局语言包（zh-CN：确认 / en-US：OK）","en-US":"OK button text; falls back to the global locale (zh-CN: 确认 / en-US: OK)"}},{name:"cancelText",type:"string",default:"—",description:{"zh-CN":"取消按钮文案；未提供时取全局语言包（zh-CN：取消 / en-US：Cancel）","en-US":"Cancel button text; falls back to the global locale (zh-CN: 取消 / en-US: Cancel)"}},{name:"trapFocus",type:"boolean",default:"true",description:{"zh-CN":"打开期间 Tab 焦点是否循环约束在弹窗内","en-US":"Whether Tab focus cycles within the dialog while open"}},{name:"onOpen",type:"() => void",default:"—",description:{"zh-CN":"打开回调","en-US":"Open callback"}},{name:"onClose",type:"() => void",default:"—",description:{"zh-CN":"关闭回调","en-US":"Close callback"}},{name:"onOk",type:"() => void",default:"—",description:{"zh-CN":"确认回调（触发后自动关闭）","en-US":"OK callback (the dialog closes automatically afterwards)"}},{name:"onCancel",type:"() => void",default:"—",description:{"zh-CN":"取消回调（触发后自动关闭）","en-US":"Cancel callback (the dialog closes automatically afterwards)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到对话框面板的自定义类名","en-US":"Custom class name appended to the dialog panel"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到对话框面板的自定义样式","en-US":"Custom styles appended to the dialog panel"}}],events:[{vue:"open",react:"onOpen",payload:"—",description:{"zh-CN":"对话框打开","en-US":"Fired when the dialog opens"}},{vue:"close",react:"onClose",payload:"—",description:{"zh-CN":"对话框关闭","en-US":"Fired when the dialog closes"}},{vue:"ok",react:"onOk",payload:"—",description:{"zh-CN":"点击确认","en-US":"Fired when OK is clicked"}},{vue:"cancel",react:"onCancel",payload:"—",description:{"zh-CN":"点击取消","en-US":"Fired when Cancel is clicked"}},{vue:"update:visible",react:"—",payload:"boolean",description:{"zh-CN":"v-model:visible 回写","en-US":"Write-back for v-model:visible"}}],slots:[{vue:"closeIcon",react:"renderCloseIcon",description:{"zh-CN":"自定义关闭图标（替换右上角内置 close）","en-US":"Custom close icon (replaces the built-in top-right close)"}},{vue:"default",react:"children",description:{"zh-CN":"弹窗内容","en-US":"Dialog content"}},{vue:"title",react:"renderTitle",description:{"zh-CN":"标题（覆盖 title prop）","en-US":"Title (overrides the title prop)"}},{vue:"footer",react:"renderFooter",description:{"zh-CN":"底部操作区","en-US":"Footer action area"}}]},notes:[{"zh-CN":"onOk / onCancel 触发后组件自动关闭；若使用自定义 footer，需自行调用 close() 或更新 visible。","en-US":"The dialog closes automatically after onOk / onCancel; with a custom footer, call close() or update visible yourself."},{"zh-CN":"ref 实例类型为 ModalRef，提供 open() 与 close() 两个方法。","en-US":"The ref instance is of type ModalRef, providing open() and close() methods."},{"zh-CN":"自定义 footer 插槽时 okText / cancelText 不生效（底部完全由插槽接管）。","en-US":"okText / cancelText have no effect when a custom footer slot is used (the slot fully takes over the footer)."},{"zh-CN":"trapFocus 打开且面板内无可聚焦元素时，焦点锁定在面板自身（tabindex=-1）。","en-US":"With trapFocus enabled and no focusable elements inside, focus is locked on the panel itself (tabindex=-1)."}],a11y:[{"zh-CN":'面板携带 role="dialog" + aria-modal="true"；打开时聚焦面板，Tab / Shift+Tab 循环约束在弹窗内。',"en-US":'The panel carries role="dialog" + aria-modal="true"; it receives focus on open, and Tab / Shift+Tab cycle within the dialog.'},{"zh-CN":"关闭后焦点恢复到打开前的元素，键盘用户不会丢失位置；支持 ESC 关闭（closeOnEsc）。","en-US":"Focus returns to the pre-open element after close so keyboard users keep their place; ESC to close is supported (closeOnEsc)."}]},OA={class:"demo-column"},ZA={class:"demo-text"},jA=M({__name:"basic",setup(e){const t=q(!0);return(n,a)=>(b(),C("div",OA,[U(r(_s),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l)},{default:E(()=>[K($(r(z)()?"我已阅读并同意用户协议":"I have read and agree to the user agreement"),1)]),_:1},8,["value"]),w("p",ZA,$(r(z)()?"当前选中":"Selected")+"："+$(r(z)()?t.value?"是":"否":t.value?"Yes":"No"),1)]))}}),DA={class:"demo-column"},MA=M({__name:"state",setup(e){const t=q(!0);return(n,a)=>(b(),C("div",DA,[U(r(_s),{indeterminate:t.value,"onUpdate:indeterminate":a[0]||(a[0]=l=>t.value=l)},{default:E(()=>[K($(r(z)()?"全选（半选态，点击后变全选）":"Select all (indeterminate, click to select all)"),1)]),_:1},8,["indeterminate"]),U(r(_s),{value:"",disabled:""},{default:E(()=>[K($(r(z)()?"禁用未选":"Disabled unchecked"),1)]),_:1}),U(r(_s),{value:!0,disabled:""},{default:E(()=>[K($(r(z)()?"禁用已选":"Disabled checked"),1)]),_:1})]))}});function LA(){const e=oe(),[t,n]=B.useState(!0);return u.jsxs("div",{className:"demo-column",children:[u.jsx(ws,{value:t,onChange:n,children:e?"我已阅读并同意用户协议":"I have read and agree to the user agreement"}),u.jsxs("p",{className:"demo-text",children:[e?"当前选中":"Selected","：",e?t?"是":"否":t?"Yes":"No"]})]})}function VA(){const e=oe(),[t,n]=B.useState(!0);return u.jsxs("div",{className:"demo-column",children:[u.jsx(ws,{indeterminate:t,onChange:()=>n(!1),children:e?"全选（半选态，点击后变全选）":"Select all (indeterminate, click to select all)"}),u.jsx(ws,{value:!1,disabled:!0,children:e?"禁用未选":"Disabled unchecked"}),u.jsx(ws,{value:!0,disabled:!0,children:e?"禁用已选":"Disabled checked"})]})}const HA=`<script setup lang="ts">
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
`,IA=`<script setup lang="ts">
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
`,FA=`import { useState } from 'react';
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
`,KA=`import { useState } from 'react';
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
`,qA={name:"Checkbox",slug:"checkbox",title:"复选框",category:"form",summary:{"zh-CN":"在一组可选项中进行多选，或单独使用表示两种状态的切换，支持半选态。","en-US":"Select multiple options from a set, or use standalone as a two-state toggle, with indeterminate state support."},features:[{"zh-CN":"受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; v-model:value on Vue"},{"zh-CN":'indeterminate 半选态（常用于"全选"联动，点击后切换为全选）',"en-US":'Indeterminate state via indeterminate (often used for "select all"; clicking switches to fully checked)'},{"zh-CN":"disabled 禁用；label 文案通过默认插槽 / children 传入","en-US":"Disabled state; label text is passed via the default slot / children"}],scenarios:[{"zh-CN":"协议勾选、条件筛选、表格行选择与全选联动等场景。","en-US":"Agreement checkboxes, conditional filtering, table row selection with select-all linkage, and similar scenarios."}],demos:[{id:"basic",title:{"zh-CN":"受控复选框","en-US":"Controlled Checkbox"},description:{"zh-CN":"绑定布尔值，监听 change 获取切换后的选中状态。","en-US":"Bind a boolean and listen to change for the checked state after toggle."},vueComponent:jA,reactComponent:LA,vueSource:HA,reactSource:FA},{id:"state",title:{"zh-CN":"半选态与禁用","en-US":"Indeterminate & Disabled"},description:{"zh-CN":'indeterminate 表示"部分选中"；disabled 下点击无效。',"en-US":'indeterminate means "partially selected"; clicks have no effect when disabled.'},vueComponent:MA,reactComponent:VA,vueSource:IA,reactSource:KA}],api:{props:[{name:"value",type:"boolean",default:"—",description:{"zh-CN":"受控选中状态（提供即受控）","en-US":"Controlled checked state (controlled when provided)"}},{name:"defaultValue",type:"boolean",default:"false",description:{"zh-CN":"非受控初始状态","en-US":"Uncontrolled initial state"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"indeterminate",type:"boolean",default:"false",description:{"zh-CN":"半选状态（点击后切换为全选）","en-US":"Indeterminate state (clicking switches to fully checked)"}},{name:"onChange",type:"(value: boolean) => void",default:"—",description:{"zh-CN":"状态变更回调（载荷为切换后的选中值）","en-US":"State change callback (payload is the checked value after toggle)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: boolean",description:{"zh-CN":"选中状态变更","en-US":"Fired when the checked state changes"}},{vue:"update:value",react:"—",payload:"boolean",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"标签内容","en-US":"Label content"}},{vue:"checkIcon",react:"renderCheckIcon",description:{"zh-CN":"自定义选中勾选图标","en-US":"Custom checked checkmark icon"}},{vue:"indeterminateIcon",react:"renderIndeterminateIcon",description:{"zh-CN":"自定义半选图标","en-US":"Custom indeterminate icon"}}]},notes:[{"zh-CN":'半选（indeterminate）仅是视觉状态，表示"部分选中"；点击后半选消除并切换为全选。',"en-US":'Indeterminate is only a visual state meaning "partially selected"; clicking clears it and switches to fully checked.'},{"zh-CN":'实现"全选 / 全不选 / 半选"三态联动时，需由外部根据子项选中数量计算 indeterminate 与 value。',"en-US":'For "all / none / partial" tri-state linkage, compute indeterminate and value externally from the number of selected children.'}],a11y:[{"zh-CN":"底层使用原生 checkbox 输入语义，键盘空格可切换，禁用状态携带 disabled 属性。","en-US":"Built on native checkbox input semantics; toggles with the Space key and carries the disabled attribute when disabled."}]},PA={class:"demo-column"},GA={class:"demo-text"},YA=M({__name:"group",setup(e){const t=q("a");return(n,a)=>(b(),C("div",PA,[U(r(ou),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l)},{default:E(()=>[U(r(ks),{value:"a"},{default:E(()=>[K($(r(z)()?"选项 A":"Option A"),1)]),_:1}),U(r(ks),{value:"b"},{default:E(()=>[K($(r(z)()?"选项 B":"Option B"),1)]),_:1}),U(r(ks),{value:"c",disabled:""},{default:E(()=>[K($(r(z)()?"选项 C（禁用）":"Option C (disabled)"),1)]),_:1})]),_:1},8,["value"]),w("p",GA,$(r(z)()?"当前选中":"Selected")+"："+$(t.value),1)]))}}),XA={class:"demo-column"},QA=M({__name:"options",setup(e){const t=q("weekly"),n=P(()=>z()?[{label:"每天",value:"daily"},{label:"每周",value:"weekly"},{label:"每月",value:"monthly"},{label:"从不（禁用）",value:"never",disabled:!0}]:[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"},{label:"Monthly",value:"monthly"},{label:"Never (disabled)",value:"never",disabled:!0}]);return(a,l)=>(b(),C("div",XA,[U(r(ou),{value:t.value,"onUpdate:value":l[0]||(l[0]=o=>t.value=o),options:n.value},null,8,["value","options"]),U(r(ou),{options:n.value,disabled:""},null,8,["options"])]))}});function JA(){const e=oe(),[t,n]=B.useState("a");return u.jsxs("div",{className:"demo-column",children:[u.jsxs(mu,{value:t,onChange:n,children:[u.jsx(Ns,{value:"a",children:e?"选项 A":"Option A"}),u.jsx(Ns,{value:"b",children:e?"选项 B":"Option B"}),u.jsx(Ns,{value:"c",disabled:!0,children:e?"选项 C（禁用）":"Option C (disabled)"})]}),u.jsxs("p",{className:"demo-text",children:[e?"当前选中":"Selected","：",t]})]})}function WA(){const e=oe(),[t,n]=B.useState("weekly"),a=[{label:e?"每天":"Daily",value:"daily"},{label:e?"每周":"Weekly",value:"weekly"},{label:e?"每月":"Monthly",value:"monthly"},{label:e?"从不（禁用）":"Never (disabled)",value:"never",disabled:!0}];return u.jsxs("div",{className:"demo-column",children:[u.jsx(mu,{value:t,onChange:n,options:a}),u.jsx(mu,{options:a,disabled:!0})]})}const eR=`<script setup lang="ts">
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
`,tR=`<script setup lang="ts">
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
`,nR=`import { useState } from 'react';
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
`,aR=`import { useState } from 'react';
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
`,lR={name:"Radio",slug:"radio",title:"单选框",category:"form",summary:{"zh-CN":"在一组互斥选项中选择一个，由 RadioGroup 管理选中值，Radio 作为子项；也支持 options 数组配置。","en-US":"Select one option from a mutually exclusive set. RadioGroup manages the selected value with Radio as the child item; an options array is also supported."},features:[{"zh-CN":"RadioGroup 受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes for RadioGroup; v-model:value on Vue"},{"zh-CN":"两种渲染方式：Radio 子组件插槽，或 options 配置数组（二者取其一，options 优先）","en-US":"Two rendering approaches: Radio child components via slot, or an options config array (choose one; options takes precedence)"},{"zh-CN":"支持整组 disabled 与单个选项 disabled（叠加生效）","en-US":"Supports disabling the whole group or individual options (effects stack)"},{"zh-CN":"Radio 自身不维护状态、不发事件，选中统一由组上下文派生","en-US":"Radio itself holds no state and emits no events; selection is derived from the group context"}],scenarios:[{"zh-CN":"互斥条件选择、设置项中的单一选择、表单枚举字段等场景。","en-US":"Mutually exclusive choices, single-choice settings, enum form fields, and similar scenarios."}],demos:[{id:"group",title:{"zh-CN":"Radio 子组件","en-US":"Radio Children"},description:{"zh-CN":"在 RadioGroup 默认插槽中放置 Radio，value 为选项取值。","en-US":"Place Radio in the RadioGroup default slot; value is the option value."},vueComponent:YA,reactComponent:JA,vueSource:eR,reactSource:nR},{id:"options",title:{"zh-CN":"options 配置与整组禁用","en-US":"options Config & Group Disabled"},description:{"zh-CN":"传入 options 数组即可渲染；disabled 作用于整组。","en-US":"Pass an options array to render the group; disabled applies to the whole group."},vueComponent:QA,reactComponent:WA,vueSource:tR,reactSource:aR}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"【Group】受控选中值（提供即受控）","en-US":"[Group] Controlled selected value (controlled when provided)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"【Group】非受控初始选中值","en-US":"[Group] Uncontrolled initial selected value"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"【Group】禁用整组","en-US":"[Group] Disable the whole group"}},{name:"options",type:"RadioOption[]",default:"—",description:{"zh-CN":"【Group】选项数组（提供后忽略子组件插槽）","en-US":"[Group] Options array (the child component slot is ignored when provided)"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"【Group】选中值变更回调","en-US":"[Group] Selected value change callback"}},{name:"Radio.value",type:"string",default:"—",required:!0,description:{"zh-CN":"【Radio 子项】选项取值（必填，组内唯一）","en-US":"[Radio item] Option value (required, unique within the group)"}},{name:"Radio.disabled",type:"boolean",default:"false",description:{"zh-CN":"【Radio 子项】禁用当前选项（与组禁用叠加）","en-US":"[Radio item] Disable this option (stacks with group disabled)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"选中值变更（由 Group 触发）","en-US":"Fired when the selected value changes (emitted by the Group)"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"【Group】自定义选项（渲染 Radio 子项，options 存在时忽略）；【Radio 子项】选项文案","en-US":"[Group] Custom options (renders Radio children; ignored when options is present); [Radio item] option label"}}],types:[{name:"RadioOption",definition:`interface RadioOption {
  label: string
  value: string
  disabled?: boolean
}`,description:{"zh-CN":"options 数组中的单项配置。","en-US":"Configuration of a single item in the options array."}}]},notes:[{"zh-CN":"Radio 必须放在 RadioGroup 内使用，其选中态由组上下文决定，不要单独给 Radio 传 value 受控。","en-US":"Radio must be used inside a RadioGroup; its checked state comes from the group context, so do not control Radio with its own value."},{"zh-CN":"options 模式下单项禁用通过该选项的 disabled: true 配置；插槽模式下在 <Radio> 上设置 disabled。","en-US":"In options mode, disable an item via disabled: true on that option; in slot mode, set disabled on the <Radio> itself."}],a11y:[{"zh-CN":"组内选项使用原生 radio 语义并共享同一分组名，方向键可在组内移动选择。","en-US":"Options use native radio semantics and share one group name; arrow keys move the selection within the group."}]},oR={class:"demo-column"},iR={class:"demo-text"},sR=M({__name:"basic",setup(e){const t=q(""),n=P(()=>z()?[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳（暂不可选）",value:"shenzhen",disabled:!0}]:[{label:"Beijing",value:"beijing"},{label:"Shanghai",value:"shanghai"},{label:"Guangzhou",value:"guangzhou"},{label:"Shenzhen (unavailable)",value:"shenzhen",disabled:!0}]);return(a,l)=>(b(),C("div",oR,[U(r(Pn),{value:t.value,"onUpdate:value":l[0]||(l[0]=o=>t.value=o),options:n.value,placeholder:r(z)()?"请选择城市":"Select a city",clearable:""},null,8,["value","options","placeholder"]),w("p",iR,$(r(z)()?"当前选中":"Selected")+"："+$(t.value||(r(z)()?"（未选择）":"(none)")),1)]))}}),rR={class:"demo-column"},cR=M({__name:"state",setup(e){const t=P(()=>z()?[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}]);return(n,a)=>(b(),C("div",rR,[U(r(Pn),{options:t.value,"default-value":"1"},null,8,["options"]),U(r(Pn),{options:t.value,"default-value":"1",disabled:""},null,8,["options"])]))}}),uR={class:"demo-column"},dR={class:"demo-text"},pR={class:"demo-text"},mR={class:"demo-text"},hR=M({__name:"advanced",setup(e){const t=P(()=>z()?[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}]:[{label:"Beijing",value:"beijing"},{label:"Shanghai",value:"shanghai"},{label:"Guangzhou",value:"guangzhou"},{label:"Shenzhen",value:"shenzhen"}]),n=P(()=>Array.from({length:1e3},(i,s)=>({label:z()?`选项 ${s+1}`:`Option ${s+1}`,value:`opt-${s+1}`}))),a=q(["beijing"]),l=q(""),o=q("");return(i,s)=>(b(),C("div",uR,[U(r(Pn),{value:a.value,"onUpdate:value":s[0]||(s[0]=c=>a.value=c),options:t.value,multiple:"",placeholder:r(z)()?"多选城市":"Multi-select cities"},null,8,["value","options","placeholder"]),w("p",dR,$(r(z)()?"多选已选":"Multi-selected")+"："+$(a.value.join(r(z)()?"、":", ")||(r(z)()?"（无）":"(none)")),1),U(r(Pn),{value:l.value,"onUpdate:value":s[1]||(s[1]=c=>l.value=c),options:t.value,searchable:"",clearable:"",placeholder:r(z)()?"输入关键字过滤":"Type a keyword to filter"},null,8,["value","options","placeholder"]),w("p",pR,$(r(z)()?"可搜索当前选中":"Searchable selected")+"："+$(l.value||(r(z)()?"（未选择）":"(none)")),1),U(r(Pn),{value:o.value,"onUpdate:value":s[2]||(s[2]=c=>o.value=c),options:n.value,virtual:"","max-height":200,placeholder:r(z)()?"虚拟滚动 · 1000 项":"Virtual scroll · 1000 items"},null,8,["value","options","placeholder"]),w("p",mR,$(r(z)()?"虚拟滚动当前选中":"Virtual scroll selected")+"："+$(o.value||(r(z)()?"（未选择）":"(none)")),1)]))}}),fR={class:"demo-column"},vR={class:"demo-text"},gR=M({__name:"grouped",setup(e){const t=q(""),n=[{label:z()?"一线城市":"Tier-1 Cities",options:[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}]},{label:z()?"新一线城市":"New Tier-1 Cities",options:[{label:"杭州",value:"hangzhou"},{label:"成都",value:"chengdu"},{label:"武汉",value:"wuhan",disabled:!0}]}];return(a,l)=>(b(),C("div",fR,[U(r(Pn),{value:t.value,"onUpdate:value":l[0]||(l[0]=o=>t.value=o),options:n,clearable:""},null,8,["value"]),w("p",vR,$(r(z)()?`选中值：${t.value||"（未选择）"}`:`Value: ${t.value||"(none)"}`),1)]))}});function bR(){const e=oe(),[t,n]=B.useState(""),a=[{label:e?"北京":"Beijing",value:"beijing"},{label:e?"上海":"Shanghai",value:"shanghai"},{label:e?"广州":"Guangzhou",value:"guangzhou"},{label:e?"深圳（暂不可选）":"Shenzhen (unavailable)",value:"shenzhen",disabled:!0}];return u.jsxs("div",{className:"demo-column",children:[u.jsx(Gn,{value:t,onChange:l=>n(l),options:a,placeholder:e?"请选择城市":"Select a city",clearable:!0}),u.jsxs("p",{className:"demo-text",children:[e?"当前选中":"Selected","：",t||(e?"（未选择）":"(none)")]})]})}function yR(){const e=oe(),t=[{label:e?"选项一":"Option 1",value:"1"},{label:e?"选项二":"Option 2",value:"2"}];return u.jsxs("div",{className:"demo-column",children:[u.jsx(Gn,{options:t,defaultValue:"1"}),u.jsx(Gn,{options:t,defaultValue:"1",disabled:!0})]})}function SR(){const e=oe(),[t,n]=B.useState(["beijing"]),[a,l]=B.useState(""),[o,i]=B.useState(""),s=[{label:e?"北京":"Beijing",value:"beijing"},{label:e?"上海":"Shanghai",value:"shanghai"},{label:e?"广州":"Guangzhou",value:"guangzhou"},{label:e?"深圳":"Shenzhen",value:"shenzhen"}],c=Array.from({length:1e3},(d,m)=>({label:e?`选项 ${m+1}`:`Option ${m+1}`,value:`opt-${m+1}`}));return u.jsxs("div",{className:"demo-column",children:[u.jsx(Gn,{value:t,onChange:d=>n(Array.isArray(d)?d:[d]),options:s,multiple:!0,placeholder:e?"多选城市":"Multi-select cities"}),u.jsxs("p",{className:"demo-text",children:[e?"多选已选":"Multi-selected","：",t.join(e?"、":", ")||(e?"（无）":"(none)")]}),u.jsx(Gn,{value:a,onChange:d=>l(d),options:s,searchable:!0,clearable:!0,placeholder:e?"输入关键字过滤":"Type a keyword to filter"}),u.jsxs("p",{className:"demo-text",children:[e?"可搜索当前选中":"Searchable selected","：",a||(e?"（未选择）":"(none)")]}),u.jsx(Gn,{value:o,onChange:d=>i(d),options:c,virtual:!0,maxHeight:200,placeholder:e?"虚拟滚动 · 1000 项":"Virtual scroll · 1000 items"}),u.jsxs("p",{className:"demo-text",children:[e?"虚拟滚动当前选中":"Virtual scroll selected","：",o||(e?"（未选择）":"(none)")]})]})}function xR(){const e=oe(),[t,n]=B.useState(""),a=[{label:e?"一线城市":"Tier-1 Cities",options:[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}]},{label:e?"新一线城市":"New Tier-1 Cities",options:[{label:"杭州",value:"hangzhou"},{label:"成都",value:"chengdu"},{label:"武汉",value:"wuhan",disabled:!0}]}];return u.jsxs("div",{className:"demo-column",children:[u.jsx(Gn,{value:t,onChange:l=>n(l),options:a,clearable:!0}),u.jsx("p",{className:"demo-text",children:e?`选中值：${t||"（未选择）"}`:`Value: ${t||"(none)"}`})]})}const CR=`<script setup lang="ts">
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
`,_R=`<script setup lang="ts">
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
`,kR=`<script setup lang="ts">
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
`,wR=`<script setup lang="ts">
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
`,NR=`import { useState } from 'react';
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
`,TR=`import { Select } from '@xui-design/react';
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
`,zR=`import { useState } from 'react';
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
`,UR=`import { useState } from 'react';
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
`,$R={name:"Select",slug:"select",title:"下拉选择",category:"form",summary:{"zh-CN":"从弹出的选项面板中选择值，支持单选 / 多选 / 可搜索 / 虚拟滚动，键盘操作与 ARIA 语义完整。","en-US":"Pick values from a pop-up option panel, with single / multiple selection, search, and virtual scrolling, plus full keyboard support and ARIA semantics."},features:[{"zh-CN":"受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; v-model:value on Vue"},{"zh-CN":"multiple 多选：选中值为 string[]，点击选项切换选中且面板不关闭，tag 可单独移除","en-US":"Multiple selection via multiple: the value is a string[], clicking an option toggles it without closing the panel, and tags can be removed individually"},{"zh-CN":"searchable 可搜索：面板顶部搜索框按选项文案过滤（大小写不敏感）","en-US":"Searchable mode: a search box at the top of the panel filters options by label (case-insensitive)"},{"zh-CN":"virtual 虚拟滚动：1000+ 选项仅渲染可视窗口，maxHeight 控制面板视口高度","en-US":"Virtual scrolling via virtual: 1000+ options render only the visible window; maxHeight controls the panel viewport height"},{"zh-CN":"clearable 已选中时显示清空按钮（多选清空全部）；disabled 整体禁用","en-US":"Clear button via clearable when a value is selected (clears all in multiple mode); disabled disables the whole select"},{"zh-CN":"键盘支持：上下方向键移动高亮（跳过禁用项）、Enter 确认、Esc 关闭","en-US":"Keyboard support: ArrowUp / ArrowDown move the highlight (skipping disabled options), Enter confirms, Esc closes"},{"zh-CN":"分组选项：options 支持 SelectOptionGroup 混合结构，分组内选项统一展示","en-US":"Grouped options: options accepts a mixed SelectOptionGroup structure, rendering options within groups"}],scenarios:[{"zh-CN":"选项数量较多、不适合用 Radio 平铺的单选 / 多选表单字段。","en-US":"Single / multiple form fields with too many options to lay out with Radio."},{"zh-CN":"选项上千条的大数据量选择场景（配合 virtual 虚拟滚动）。","en-US":"Large datasets with thousands of options (with virtual scrolling)."},{"zh-CN":"需要按文案快速定位选项的检索式选择场景（配合 searchable）。","en-US":"Search-driven selection to quickly locate options by label (with searchable)."}],demos:[{id:"basic",title:{"zh-CN":"受控与清空","en-US":"Controlled & Clearable"},description:{"zh-CN":"options 中可对单项设置 disabled；clearable 支持一键清空。","en-US":"Individual options can be disabled in options; clearable offers one-click clearing."},vueComponent:sR,reactComponent:bR,vueSource:CR,reactSource:NR},{id:"state",title:{"zh-CN":"默认值与禁用","en-US":"Default Value & Disabled"},description:{"zh-CN":"defaultValue 指定初始选中；disabled 禁用整个选择器。","en-US":"defaultValue sets the initial selection; disabled disables the whole select."},vueComponent:cR,reactComponent:yR,vueSource:_R,reactSource:TR},{id:"advanced",title:{"zh-CN":"多选 / 可搜索 / 虚拟滚动","en-US":"Multiple / Searchable / Virtual"},description:{"zh-CN":"multiple 以 tag 展示选中项；searchable 按文案过滤；virtual 渲染 1000 项仅维护可视窗口。","en-US":"multiple shows selections as tags; searchable filters by label; virtual renders 1000 items while maintaining only the visible window."},vueComponent:hR,reactComponent:SR,vueSource:kR,reactSource:zR},{id:"grouped",title:{"zh-CN":"分组选项","en-US":"Grouped Options"},description:{"zh-CN":"options 传入 SelectOptionGroup 结构，分组内选项统一展示，支持分组级 disabled。","en-US":"Pass a SelectOptionGroup structure to options; options within groups are rendered together, with group-level disabled support."},vueComponent:gR,reactComponent:xR,vueSource:wR,reactSource:UR}],api:{props:[{name:"value",type:"string | string[]",default:"—",description:{"zh-CN":"受控选中值（提供即受控）；多选模式为 string[]","en-US":"Controlled selected value (controlled when provided); a string[] in multiple mode"}},{name:"defaultValue",type:"string | string[]",default:"—",description:{"zh-CN":"非受控初始选中值","en-US":"Uncontrolled initial selected value"}},{name:"options",type:"SelectSource",default:"—",required:!0,description:{"zh-CN":"选项数组（支持扁平选项 SelectOption[] 或分组混合 SelectSource）","en-US":"Options array (supports flat SelectOption[] or mixed grouped SelectSource)"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清空按钮（仅已选中时；多选清空全部）","en-US":"Whether to show the clear button (only when a value is selected; clears all in multiple mode)"}},{name:"multiple",type:"boolean",default:"false",description:{"zh-CN":"多选模式：选中值为数组，点击选项切换选中且面板不关闭","en-US":"Multiple mode: the value is an array; clicking an option toggles it without closing the panel"}},{name:"searchable",type:"boolean",default:"false",description:{"zh-CN":"可搜索模式：面板顶部显示搜索框，按选项文案过滤","en-US":"Searchable mode: shows a search box at the top of the panel and filters options by label"}},{name:"virtual",type:"boolean",default:"false",description:{"zh-CN":"虚拟滚动模式（大数据量选项）","en-US":"Virtual scrolling mode (for large option sets)"}},{name:"maxHeight",type:"number",default:"264",description:{"zh-CN":"下拉面板最大高度（px）；虚拟模式下即视口高度","en-US":"Maximum height of the dropdown panel (px); the viewport height in virtual mode"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式（支持 CSS 自定义属性）","en-US":"Custom inline styles appended to the root element (CSS custom properties supported)"}},{name:"onChange",type:"(value: string | string[]) => void",default:"—",description:{"zh-CN":"选中值变更回调（多选载荷为 string[]）","en-US":"Selected value change callback (payload is a string[] in multiple mode)"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调","en-US":"Clear callback"}}],events:[{vue:"change",react:"onChange",payload:"value: string | string[]",description:{"zh-CN":"选中值变更（多选为最新数组）","en-US":"Fired when the selected value changes (the latest array in multiple mode)"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"清空选中值","en-US":"Fired when the selected value is cleared"}},{vue:"update:value",react:"—",payload:"string | string[]",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"option",react:"renderOption",description:{"zh-CN":"自定义选项渲染（作用域参数：option）","en-US":"Custom option rendering (scoped param: option)"}},{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标（触发器 clear 与多选标签删除按钮共用）","en-US":"Custom clear icon (shared by the trigger clear button and the multiple-mode tag remove button)"}},{vue:"suffixIcon",react:"renderSuffixIcon",description:{"zh-CN":"自定义下拉箭头图标","en-US":"Custom dropdown arrow icon"}}],types:[{name:"SelectOption",definition:`interface SelectOption {
  label: string
  value: string
  disabled?: boolean
}`,description:{"zh-CN":"下拉选项配置。","en-US":"Configuration of a dropdown option."}},{name:"SelectOptionGroup",definition:`interface SelectOptionGroup {
  label: string
  options: SelectOption[]
  disabled?: boolean
}`,description:{"zh-CN":"下拉选项分组配置。","en-US":"Configuration of a dropdown option group."}},{name:"SelectSource",definition:"type SelectSource = (SelectOption | SelectOptionGroup)[];",description:{"zh-CN":"options 数据源：支持扁平选项数组或分组混合。","en-US":"options data source: supports a flat option array or a mixed grouped structure."}},{name:"SelectValue",definition:"type SelectValue = string | string[];",description:{"zh-CN":"选中值：单选为 string，多选为 string[]（向后兼容：单选行为与旧版一致）。","en-US":"Selected value: a string in single mode and a string[] in multiple mode (backward compatible: single-select behavior matches the old version)."}}]},notes:[{"zh-CN":"禁用选项不响应点击与键盘高亮，选中禁用项的操作会被静默忽略。","en-US":"Disabled options do not respond to clicks or keyboard highlighting; attempts to select them are silently ignored."},{"zh-CN":"点击组件外部会收起面板且不改变选中值；多选模式点击选项后面板保持展开。","en-US":"Clicking outside closes the panel without changing the value; in multiple mode the panel stays open after an option is clicked."},{"zh-CN":"虚拟模式要求选项行高固定（默认 30px，可用 CSS 变量 --xui-select-item-height 对齐调整）。","en-US":"Virtual mode requires a fixed option row height (30px by default; align it via the --xui-select-item-height CSS variable)."},{"zh-CN":"多选删除某个 tag 即切换取消该项，触发 onChange 携带最新数组。","en-US":"Removing a tag in multiple mode toggles that option off and fires onChange with the latest array."},{"zh-CN":"自带视口避让：视口下方空间不足时面板自动向上展开（根元素加 is-drop-up），滚动与窗口 resize 时实时重算；overflow: hidden 祖先仍可能裁剪面板。","en-US":"Built-in viewport avoidance: the panel flips upward when space below is insufficient (is-drop-up is added to the root), recalculated in real time on scroll and window resize; an overflow: hidden ancestor may still clip the panel."}],a11y:[{"zh-CN":"选择器可通过 Tab 聚焦，方向键 / Enter / Esc 完成全部键盘操作；禁用项携带禁用语义。","en-US":"The select is focusable via Tab; arrow keys / Enter / Esc cover all keyboard operations, and disabled options carry disabled semantics."},{"zh-CN":"多选面板携带 aria-multiselectable；搜索框独立 role=searchbox。","en-US":"The multiple panel carries aria-multiselectable; the search box has its own role=searchbox."}]},ER={class:"demo-column"},AR={class:"demo-text"},RR=M({__name:"basic",setup(e){const t=q("2026-10-01");return(n,a)=>(b(),C("div",ER,[U(r(Qs),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),clearable:""},null,8,["value"]),w("p",AR,$(r(z)()?"当前日期":"Current date")+"："+$(t.value||(r(z)()?"（未选择）":"(none)")),1)]))}}),BR={class:"demo-column"},OR=M({__name:"state",setup(e){return(t,n)=>(b(),C("div",BR,[U(r(Qs),{"default-value":"2026-01-15",placeholder:r(z)()?"选择日期":"Select a date"},null,8,["placeholder"]),U(r(Qs),{"default-value":"2026-01-15",disabled:""})]))}});function ZR(){const e=oe(),[t,n]=B.useState("2026-10-01");return u.jsxs("div",{className:"demo-column",children:[u.jsx(Tr,{value:t,onChange:n,clearable:!0}),u.jsxs("p",{className:"demo-text",children:[e?"当前日期":"Current date","：",t||(e?"（未选择）":"(none)")]})]})}function jR(){const e=oe();return u.jsxs("div",{className:"demo-column",children:[u.jsx(Tr,{defaultValue:"2026-01-15",placeholder:e?"选择日期":"Select a date"}),u.jsx(Tr,{defaultValue:"2026-01-15",disabled:!0})]})}const DR=`<script setup lang="ts">
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
`,MR=`<script setup lang="ts">
import { DatePicker } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <div class="demo-column">
    <DatePicker default-value="2026-01-15" :placeholder="isZh() ? '选择日期' : 'Select a date'" />
    <DatePicker default-value="2026-01-15" disabled />
  </div>
</template>
`,LR=`import { useState } from 'react';
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
`,VR=`import { DatePicker } from '@xui-design/react';
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
`,HR={name:"DatePicker",slug:"date-picker",title:"日期选择",category:"form",summary:{"zh-CN":"点击弹出月历面板选择单个日期，值统一为 YYYY-MM-DD 字符串，零日期依赖。","en-US":"Click to open a month calendar and pick a single date; the value is always a YYYY-MM-DD string, with zero date dependencies."},features:[{"zh-CN":"受控 / 非受控双模式，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; supports v-model:value on the Vue side"},{"zh-CN":"值格式统一为 'YYYY-MM-DD' 字符串（序列化友好），非法值回退 null","en-US":"Values are always 'YYYY-MM-DD' strings (serialization-friendly); invalid values fall back to null"},{"zh-CN":"月历面板支持上个月 / 下个月切换（跨年自动滚动），42 格完整周视图","en-US":"The calendar panel switches between previous / next month (scrolling across years automatically), with a full 42-cell week view"},{"zh-CN":"面板采用草稿 + 确认 / 取消模式：点选仅更新草稿，点击确认才提交值，取消或点击外部丢弃草稿","en-US":"The panel uses a draft + confirm / cancel mode: picking a date only updates the draft; the value is committed on confirm, while cancel or outside click discards the draft"},{"zh-CN":"clearable 清空、disabled 禁用；确认、取消或点击外部后自动收起","en-US":"A clearable clear button and disabled state; the panel closes on confirm, cancel, or outside click"}],scenarios:[{"zh-CN":"生日、预约、查询时间范围等需要选择某一天的表单场景。","en-US":"Form scenarios that pick a specific day, such as birthdays, reservations, or date-range queries."}],demos:[{id:"basic",title:{"zh-CN":"受控选择","en-US":"Controlled Selection"},description:{"zh-CN":"外部维护 YYYY-MM-DD 字符串，可一键清空。","en-US":"The YYYY-MM-DD string is maintained externally and can be cleared in one click."},vueComponent:RR,reactComponent:ZR,vueSource:DR,reactSource:LR},{id:"state",title:{"zh-CN":"默认值与禁用","en-US":"Default Value & Disabled"},description:{"zh-CN":"defaultValue 定位初始日期；disabled 下不可打开面板。","en-US":"defaultValue sets the initial date; the panel cannot be opened when disabled."},vueComponent:OR,reactComponent:jR,vueSource:MR,reactSource:VR}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控选中日期（'YYYY-MM-DD'）","en-US":"Controlled selected date ('YYYY-MM-DD')"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始日期（'YYYY-MM-DD'）","en-US":"Uncontrolled initial date ('YYYY-MM-DD')"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清空按钮（仅已选中时）","en-US":"Whether to show the clear button (only when a date is selected)"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"选中值变更回调","en-US":"Callback when the selected value changes"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调","en-US":"Callback on clear"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"选中日期变更","en-US":"Fired when the selected date changes"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"清空日期","en-US":"Fired when the date is cleared"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标","en-US":"Custom clear icon"}},{vue:"calendarIcon",react:"renderCalendarIcon",description:{"zh-CN":"自定义日历图标","en-US":"Custom calendar icon"}},{vue:"prevIcon",react:"renderPrevIcon",description:{"zh-CN":"自定义上一月图标","en-US":"Custom previous-month icon"}},{vue:"nextIcon",react:"renderNextIcon",description:{"zh-CN":"自定义下一月图标","en-US":"Custom next-month icon"}}]},notes:[{"zh-CN":"契约只接受 / 输出 'YYYY-MM-DD' 字符串，不引入 Date 对象；非法字符串回退为 null。","en-US":"The contract only accepts / emits 'YYYY-MM-DD' strings with no Date objects involved; invalid strings fall back to null."},{"zh-CN":"面板打开时视图自动定位到选中日期所在月份，无选中值时定位到当前月。","en-US":"When the panel opens, the view jumps to the month of the selected date, or to the current month when nothing is selected."}],a11y:[{"zh-CN":"日期按钮可通过键盘聚焦与选择，月份切换与日期格具备可读的文本语义。","en-US":"Date buttons are keyboard-focusable and selectable; month switches and date cells carry readable text semantics."}]},IR={class:"demo-column"},FR={class:"demo-text"},KR=M({__name:"basic",setup(e){const t=q(3.5);return(n,a)=>(b(),C("div",IR,[U(r(uu),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),min:0,max:10,step:.5,precision:2},null,8,["value"]),w("p",FR,$(r(z)()?`当前值：${t.value}（范围 0 - 10，步长 0.5，保留 2 位小数）`:`Current: ${t.value} (range 0-10, step 0.5, 2 decimals)`),1)]))}}),qR={class:"demo-column"},PR=M({__name:"state",setup(e){return(t,n)=>(b(),C("div",qR,[U(r(uu),{"default-value":3,min:1,max:5,placeholder:r(z)()?"非受控，1 - 5":"Uncontrolled, 1 - 5"},null,8,["placeholder"]),U(r(uu),{"default-value":8,disabled:"",placeholder:r(z)()?"禁用态":"Disabled"},null,8,["placeholder"])]))}});function GR(){const e=oe(),[t,n]=B.useState(3.5);return u.jsxs("div",{className:"demo-column",children:[u.jsx(Ud,{value:t,onChange:n,min:0,max:10,step:.5,precision:2}),u.jsx("p",{className:"demo-text",children:e?`当前值：${t}（范围 0 - 10，步长 0.5，保留 2 位小数）`:`Current: ${t} (range 0-10, step 0.5, 2 decimals)`})]})}function YR(){const e=oe();return u.jsxs("div",{className:"demo-column",children:[u.jsx(Ud,{defaultValue:3,min:1,max:5,placeholder:e?"非受控，1 - 5":"Uncontrolled, 1 - 5"}),u.jsx(Ud,{defaultValue:8,disabled:!0,placeholder:e?"禁用态":"Disabled"})]})}const XR=`<script setup lang="ts">
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
`,QR=`<script setup lang="ts">
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
`,JR=`import { useState } from 'react';
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
`,WR=`import { InputNumber } from '@xui-design/react';
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
`,eB={name:"InputNumber",slug:"input-number",title:"数字输入框",category:"form",summary:{"zh-CN":"通过步进按钮或直接键入输入数字，自动完成范围收敛、步长对齐与精度处理。","en-US":"Enter numbers via stepper buttons or direct typing, with automatic range clamping, step alignment, and precision handling."},features:[{"zh-CN":"受控 / 非受控双模式，值为 number | null（清空或非法输入为 null），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; the value is number | null (null when cleared or invalid); supports v-model:value on the Vue side"},{"zh-CN":"min / max 边界收敛，step 步长（非正数回退 1），上下步进按钮循环对齐","en-US":"min / max boundary clamping and step increments (non-positive values fall back to 1); up / down steppers keep values aligned to step multiples"},{"zh-CN":"precision 小数位数（0-20），提交时统一格式化；非法 / 越界输入自动回退或 clamp","en-US":"precision decimal places (0-20), formatted uniformly on commit; invalid or out-of-range input automatically falls back or is clamped"},{"zh-CN":"disabled 禁用与 placeholder 占位文本","en-US":"disabled state and placeholder text"}],scenarios:[{"zh-CN":"数量、金额、比例等需要精确数字输入与步进调节的场景。","en-US":"Scenarios requiring precise numeric input with stepper adjustment, such as quantities, amounts, and ratios."}],demos:[{id:"basic",title:{"zh-CN":"范围 / 步长 / 精度","en-US":"Range / Step / Precision"},description:{"zh-CN":"0-10 范围、0.5 步长、两位小数，步进与键入都会自动收敛。","en-US":"Range 0-10, step 0.5, two decimal places; both stepping and typing are clamped automatically."},vueComponent:KR,reactComponent:GR,vueSource:XR,reactSource:JR},{id:"state",title:{"zh-CN":"非受控与禁用","en-US":"Uncontrolled & Disabled"},description:{"zh-CN":"defaultValue 提供初始值；越界值在提交时 clamp 到边界。","en-US":"defaultValue provides the initial value; out-of-range values are clamped to the bounds on commit."},vueComponent:PR,reactComponent:YR,vueSource:QR,reactSource:WR}],api:{props:[{name:"value",type:"number | null",default:"—",description:{"zh-CN":"受控值（null 表示空值；非法输入回退 null）","en-US":"Controlled value (null means empty; invalid input falls back to null)"}},{name:"defaultValue",type:"number | null",default:"—",description:{"zh-CN":"非受控初始值","en-US":"Uncontrolled initial value"}},{name:"min",type:"number",default:"-Infinity",description:{"zh-CN":"最小值","en-US":"Minimum value"}},{name:"max",type:"number",default:"Infinity",description:{"zh-CN":"最大值","en-US":"Maximum value"}},{name:"step",type:"number",default:"1",description:{"zh-CN":"步长（非正数回退 1）","en-US":"Step increment (non-positive values fall back to 1)"}},{name:"precision",type:"number",default:"—",description:{"zh-CN":"小数位数（0-20，缺省不应用精度）","en-US":"Decimal places (0-20; no precision applied when omitted)"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"onChange",type:"(value: number | null) => void",default:"—",description:{"zh-CN":"值变更回调（清空 / 非法输入载荷为 null）","en-US":"Value change callback (payload is null when cleared or invalid)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: number | null",description:{"zh-CN":"值提交时触发","en-US":"Fired when a value is committed"}},{vue:"update:value",react:"—",payload:"number | null",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:"upIcon",react:"renderUpIcon",description:{"zh-CN":"自定义步进递增图标","en-US":"Custom increment stepper icon"}},{vue:"downIcon",react:"renderDownIcon",description:{"zh-CN":"自定义步进递减图标","en-US":"Custom decrement stepper icon"}}]},notes:[{"zh-CN":"输入文本在失焦或回车时提交：空串 / 非法内容收敛为 null，合法值先 clamp 到 [min, max] 再按 precision 格式化。","en-US":"Typed text is committed on blur or Enter: empty or invalid input falls back to null, while valid values are clamped to [min, max] and then formatted by precision."},{"zh-CN":"步进结果始终是 step 的整数倍并按精度显示；到达边界继续步进为 no-op。","en-US":"Stepping always lands on a multiple of step and displays at the configured precision; stepping past a boundary is a no-op."}],a11y:[{"zh-CN":"步进按钮为可聚焦的原生按钮，输入区为 number 语义，禁用状态透传 disabled。","en-US":"Stepper buttons are focusable native buttons, the input carries number semantics, and the disabled state passes through the disabled attribute."}]},tB={class:"demo-row"},nB=M({__name:"basic",setup(e){return(t,n)=>(b(),C("div",tB,[U(r(Cn),null,{default:E(()=>[K($(r(z)()?"默认":"Default"),1)]),_:1}),U(r(Cn),{type:"primary"},{default:E(()=>[K($(r(z)()?"主要":"Primary"),1)]),_:1}),U(r(Cn),{type:"success"},{default:E(()=>[K($(r(z)()?"成功":"Success"),1)]),_:1}),U(r(Cn),{type:"warning"},{default:E(()=>[K($(r(z)()?"警告":"Warning"),1)]),_:1}),U(r(Cn),{type:"danger"},{default:E(()=>[K($(r(z)()?"危险":"Danger"),1)]),_:1})]))}}),aB={class:"demo-column"},lB={class:"demo-row"},oB=M({__name:"closable",setup(e){const t=()=>z()?["前端","Vue","React","TypeScript"]:["Frontend","Vue","React","TypeScript"],n=q(t()),a=o=>{n.value.splice(o,1)},l=()=>{n.value=t()};return(o,i)=>(b(),C("div",aB,[w("div",lB,[(b(!0),C(ne,null,me(n.value,(s,c)=>(b(),ae(r(Cn),{key:s,size:"sm",closable:"",onClose:d=>a(c)},{default:E(()=>[K($(s),1)]),_:2},1032,["onClose"]))),128))]),U(r(W),{size:"sm",onClick:l},{default:E(()=>[K($(r(z)()?"重置标签":"Reset tags"),1)]),_:1})]))}});function iB(){const e=oe();return u.jsxs("div",{className:"demo-row",children:[u.jsx(_n,{children:e?"默认":"Default"}),u.jsx(_n,{type:"primary",children:e?"主要":"Primary"}),u.jsx(_n,{type:"success",children:e?"成功":"Success"}),u.jsx(_n,{type:"warning",children:e?"警告":"Warning"}),u.jsx(_n,{type:"danger",children:e?"危险":"Danger"})]})}function sB(){const e=oe(),t=()=>e?["前端","Vue","React","TypeScript"]:["Frontend","Vue","React","TypeScript"],[n,a]=B.useState(t),l=o=>{a(i=>i.filter((s,c)=>c!==o))};return u.jsxs("div",{className:"demo-column",children:[u.jsx("div",{className:"demo-row",children:n.map((o,i)=>u.jsx(_n,{size:"sm",closable:!0,onClose:()=>l(i),children:o},o))}),u.jsx(ee,{size:"sm",onClick:()=>a(t),children:e?"重置标签":"Reset tags"})]})}const rB=`<script setup lang="ts">
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
`,cB=`<script setup lang="ts">
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
`,uB=`import { Tag } from '@xui-design/react';
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
`,dB=`import { useState } from 'react';
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
`,pB={name:"Tag",slug:"tag",title:"标签",category:"display",summary:{"zh-CN":"用于标记和分类的小型标签，支持五种语义类型、两种尺寸与可关闭交互。","en-US":"A small tag for labeling and categorization, with five semantic types, two sizes, and closable interaction."},features:[{"zh-CN":"五种语义类型：default / primary / success / warning / danger","en-US":"Five semantic types: default / primary / success / warning / danger"},{"zh-CN":"sm / md 两种尺寸","en-US":"Two sizes: sm / md"},{"zh-CN":"closable 显示关闭按钮，点击后组件自动隐藏并触发 close","en-US":"closable shows a close button; clicking it hides the component and fires close"}],scenarios:[{"zh-CN":"分类标记、可删除的筛选条件、状态简要标识等场景。","en-US":"Category labels, removable filter criteria, brief status indicators, and more."}],demos:[{id:"basic",title:{"zh-CN":"语义类型","en-US":"Semantic Types"},description:{"zh-CN":"通过 type 切换五种内置色彩语义。","en-US":"Use type to switch between the five built-in color semantics."},vueComponent:nB,reactComponent:iB,vueSource:rB,reactSource:uB},{id:"closable",title:{"zh-CN":"可关闭标签","en-US":"Closable Tag"},description:{"zh-CN":"closable 标签关闭后自动隐藏；由外部在 close 中同步数据源。","en-US":"A closable tag hides itself after closing; sync the data source externally in the close handler."},vueComponent:oB,reactComponent:sB,vueSource:cB,reactSource:dB}],api:{props:[{name:"type",type:"'default' | 'primary' | 'success' | 'warning' | 'danger'",default:"'default'",description:{"zh-CN":"语义类型","en-US":"Semantic type"}},{name:"size",type:"'sm' | 'md'",default:"'md'",description:{"zh-CN":"尺寸","en-US":"Size"}},{name:"closable",type:"boolean",default:"false",description:{"zh-CN":"是否可关闭（显示关闭按钮）","en-US":"Whether the tag is closable (shows a close button)"}},{name:"onClose",type:"() => void",default:"—",description:{"zh-CN":"关闭回调（组件隐藏后触发）","en-US":"Close callback (fired after the component hides)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"close",react:"onClose",payload:"—",description:{"zh-CN":"点击关闭按钮、组件隐藏后触发","en-US":"Fired after the close button is clicked and the component hides"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"标签内容","en-US":"Tag content"}},{vue:"closeIcon",react:"renderCloseIcon",description:{"zh-CN":"自定义关闭图标（替换内置 close）","en-US":"Custom close icon (replaces the built-in close)"}}]},notes:[{"zh-CN":'点击关闭后组件内部先隐藏再回调；如需"恢复显示"（如重置示例），需重新挂载组件（Vue 用 key、React 重挂载）。',"en-US":'After the close click, the component hides internally before firing the callback; to "bring it back" (e.g. resetting a demo), remount the component (via key in Vue or a remount in React).'}],a11y:[{"zh-CN":'关闭按钮具备按钮语义与可读的"关闭"文本，键盘可聚焦操作。',"en-US":'The close button has button semantics and a readable "Close" label, and is keyboard-focusable.'}]},mB={class:"demo-column"},hB={class:"demo-row"},fB=M({__name:"basic",setup(e){const t=q(35),n=l=>{t.value=Math.min(100,Math.max(0,t.value+l))},a=P(()=>t.value);return(l,o)=>(b(),C("div",mB,[U(r(Jo),{percent:t.value},null,8,["percent"]),U(r(Jo),{type:"circle",percent:a.value,"stroke-width":8},null,8,["percent"]),w("div",hB,[U(r(W),{size:"sm",onClick:o[0]||(o[0]=i=>n(-10))},{default:E(()=>[...o[2]||(o[2]=[K("-10%",-1)])]),_:1}),U(r(W),{size:"sm",type:"primary",onClick:o[1]||(o[1]=i=>n(10))},{default:E(()=>[...o[3]||(o[3]=[K("+10%",-1)])]),_:1})])]))}}),vB={class:"demo-column"},gB=M({__name:"status",setup(e){return(t,n)=>(b(),C("div",vB,[U(r(Jo),{percent:100}),U(r(Jo),{percent:100,status:"error"}),U(r(Jo),{percent:60})]))}});function bB(){const[e,t]=B.useState(35),n=a=>{t(l=>Math.min(100,Math.max(0,l+a)))};return u.jsxs("div",{className:"demo-column",children:[u.jsx(Wo,{percent:e}),u.jsx(Wo,{type:"circle",percent:e,strokeWidth:8}),u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{size:"sm",onClick:()=>n(-10),children:"-10%"}),u.jsx(ee,{size:"sm",type:"primary",onClick:()=>n(10),children:"+10%"})]})]})}function yB(){return u.jsxs("div",{className:"demo-column",children:[u.jsx(Wo,{percent:100}),u.jsx(Wo,{percent:100,status:"error"}),u.jsx(Wo,{percent:60})]})}const SB=`<script setup lang="ts">
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
`,xB=`<script setup lang="ts">
import { Progress } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-column">
    <Progress :percent="100" />
    <Progress :percent="100" status="error" />
    <Progress :percent="60" />
  </div>
</template>
`,CB=`import { useState } from 'react';
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
`,_B=`import { Progress } from '@xui-design/react';

export default function ProgressStatusDemo() {
  return (
    <div className="demo-column">
      <Progress percent={100} />
      <Progress percent={100} status="error" />
      <Progress percent={60} />
    </div>
  );
}
`,kB={name:"Progress",slug:"progress",title:"进度条",category:"display",summary:{"zh-CN":"展示任务进度百分比，支持线性与环形两种形态及成功 / 失败状态色。","en-US":"Displays task progress as a percentage, in linear or circular form, with success / error status colors."},features:[{"zh-CN":"type 支持 'line' 线性与 'circle' 环形（SVG 描边）","en-US":"type supports 'line' (linear) and 'circle' (circular, SVG stroke)"},{"zh-CN":"percent 自动收敛到 [0, 100]，非数值按 0 处理","en-US":"percent is clamped to [0, 100] automatically; non-numeric input is treated as 0"},{"zh-CN":"status 支持 normal / success / error；percent 达到 100 且未显式指定时自动派生 success","en-US":"status supports normal / success / error; success is derived automatically when percent reaches 100 and no status is set explicitly"},{"zh-CN":"strokeWidth 自定义条粗 / 描边宽度，showText 控制百分比文本","en-US":"strokeWidth customizes the bar / stroke width; showText toggles the percentage text"}],scenarios:[{"zh-CN":"文件上传 / 下载、任务处理进度、加载完成度展示等场景。","en-US":"File upload / download, task processing progress, loading completion display, and more."}],demos:[{id:"basic",title:{"zh-CN":"线性与环形","en-US":"Line & Circle"},description:{"zh-CN":"同一百分比驱动 line 与 circle 两种形态，按钮模拟进度变化。","en-US":"One percentage drives both the line and circle forms; buttons simulate progress changes."},vueComponent:fB,reactComponent:bB,vueSource:SB,reactSource:CB},{id:"status",title:{"zh-CN":"成功与失败状态","en-US":"Success & Error States"},description:{"zh-CN":'100% 默认派生 success；显式 status="error" 显示失败色。',"en-US":'100% derives success by default; an explicit status="error" shows the error color.'},vueComponent:gB,reactComponent:yB,vueSource:xB,reactSource:_B}],api:{props:[{name:"percent",type:"number",default:"0",description:{"zh-CN":"进度百分比（0-100，越界自动收敛）","en-US":"Progress percentage (0-100; out-of-range values are clamped)"}},{name:"type",type:"'line' | 'circle'",default:"'line'",description:{"zh-CN":"进度条类型","en-US":"Progress bar type"}},{name:"strokeWidth",type:"number",default:"6",description:{"zh-CN":"条粗（px）；circle 类型为 SVG 描边宽度","en-US":"Bar thickness (px); the SVG stroke width for the circle type"}},{name:"showText",type:"boolean",default:"true",description:{"zh-CN":"是否显示百分比文本","en-US":"Whether to show the percentage text"}},{name:"status",type:"'normal' | 'success' | 'error'",default:"'normal'",description:{"zh-CN":"进度状态（100% 自动派生 success）","en-US":"Progress status (success is derived automatically at 100%)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],types:[{name:"ProgressStatus",definition:`type ProgressType = 'line' | 'circle'
type ProgressStatus = 'normal' | 'success' | 'error'`,description:{"zh-CN":"进度条形态与状态枚举。","en-US":"Enums of the progress form and status."}}]},notes:[{"zh-CN":"纯展示组件，无事件；达到 100% 时若未显式传入 status，颜色自动切换为成功色。","en-US":"A purely presentational component with no events; at 100% the color switches to the success color unless status is passed explicitly."}],a11y:[{"zh-CN":'进度根节点携带进度百分比语义（role="progressbar" 及 aria-valuenow / min / max）。',"en-US":'The root element carries progress semantics (role="progressbar" with aria-valuenow / min / max).'}]},wB={class:"demo-column"},NB={class:"demo-row"},TB={class:"demo-row"},zB=M({__name:"basic",setup(e){const t=q(5);return(n,a)=>(b(),C("div",wB,[w("div",NB,[U(r(Tl),{count:t.value},{default:E(()=>[U(r(W),null,{default:E(()=>[K($(r(z)()?"消息":"Messages"),1)]),_:1})]),_:1},8,["count"]),U(r(Tl),{count:120,max:99},{default:E(()=>[U(r(W),null,{default:E(()=>[K($(r(z)()?"通知":"Notifications"),1)]),_:1})]),_:1})]),w("div",TB,[U(r(W),{size:"sm",onClick:a[0]||(a[0]=l=>t.value=Math.max(0,t.value-1))},{default:E(()=>[...a[2]||(a[2]=[K("-1",-1)])]),_:1}),U(r(W),{size:"sm",type:"primary",onClick:a[1]||(a[1]=l=>t.value++)},{default:E(()=>[K($(r(z)()?"+1（试试超过 99）":"+1 (try over 99)"),1)]),_:1})])]))}}),UB={class:"demo-row"},$B={class:"demo-anchor"},EB={class:"demo-anchor"},AB=M({__name:"variants",setup(e){return(t,n)=>(b(),C("div",UB,[U(r(Tl),{dot:""},{default:E(()=>[w("span",$B,$(r(z)()?"小红点":"Dot"),1)]),_:1}),U(r(Tl),{count:0,"show-zero":""},{default:E(()=>[...n[0]||(n[0]=[w("span",{class:"demo-anchor"},"showZero",-1)])]),_:1}),U(r(Tl),{count:0},{default:E(()=>[w("span",EB,$(r(z)()?"零值隐藏":"Hidden when zero"),1)]),_:1}),U(r(Tl),{count:8})]))}}),RB=pe(AB,[["__scopeId","data-v-9ee9e1ed"]]);function BB(){const e=oe(),[t,n]=B.useState(5);return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(Ul,{count:t,children:u.jsx(ee,{children:e?"消息":"Messages"})}),u.jsx(Ul,{count:120,max:99,children:u.jsx(ee,{children:e?"通知":"Notifications"})})]}),u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{size:"sm",onClick:()=>n(a=>Math.max(0,a-1)),children:"-1"}),u.jsx(ee,{size:"sm",type:"primary",onClick:()=>n(a=>a+1),children:e?"+1（试试超过 99）":"+1 (try over 99)"})]})]})}const Gc={padding:"6px 12px",background:"#f1f5f9",borderRadius:"6px"};function OB(){const e=oe();return u.jsxs("div",{className:"demo-row",children:[u.jsx(Ul,{dot:!0,children:u.jsx("span",{style:Gc,children:e?"小红点":"Dot"})}),u.jsx(Ul,{count:0,showZero:!0,children:u.jsx("span",{style:Gc,children:"showZero"})}),u.jsx(Ul,{count:0,children:u.jsx("span",{style:Gc,children:e?"零值隐藏":"Hidden when zero"})}),u.jsx(Ul,{count:8})]})}const ZB=`<script setup lang="ts">
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
`,jB=`<script setup lang="ts">
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
`,DB=`import { useState } from 'react';
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
`,MB=`import { Badge } from '@xui-design/react';
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
`,LB={name:"Badge",slug:"badge",title:"徽标数",category:"display",summary:{"zh-CN":"以角标形式展示消息数量或状态红点，可包裹任意内容，也可独立使用。","en-US":"Shows a message count or status dot as a corner badge; can wrap any content or be used standalone."},features:[{"zh-CN":"包裹模式：徽标悬浮于内容右上角；无子内容时独立渲染","en-US":"Wrapper mode: the badge floats at the top-right corner of the content; renders standalone without children"},{"zh-CN":"count 超过 max 时显示 `${max}+`（max 默认 99）","en-US":"Shows `${max}+` when count exceeds max (max defaults to 99)"},{"zh-CN":"dot 点状徽标，忽略具体数值；showZero 控制 count 为 0 时是否显示","en-US":"dot renders a dot badge ignoring the numeric value; showZero controls whether a count of 0 is shown"}],scenarios:[{"zh-CN":"未读消息 / 通知数量、有新内容的状态红点等场景。","en-US":"Unread message / notification counts, status dots for new content, and more."}],demos:[{id:"basic",title:{"zh-CN":"计数与上限","en-US":"Count & Max"},description:{"zh-CN":"count 动态变化，超过 max 后折叠为 99+。","en-US":"count changes dynamically and collapses to 99+ once it exceeds max."},vueComponent:zB,reactComponent:BB,vueSource:ZB,reactSource:DB},{id:"variants",title:{"zh-CN":"红点 / 零值 / 独立","en-US":"Dot / Zero / Standalone"},description:{"zh-CN":"dot 仅提示有更新；showZero 决定 0 是否展示；无包裹内容时独立显示。","en-US":"dot only hints that there are updates; showZero decides whether 0 is shown; renders standalone without wrapped content."},vueComponent:RB,reactComponent:OB,vueSource:jB,reactSource:MB}],api:{props:[{name:"count",type:"number",default:"—",description:{"zh-CN":"徽标数值（未提供时不显示；dot 模式仅作无障碍语义）","en-US":"Badge count (hidden when not provided; only serves as accessibility semantics in dot mode)"}},{name:"max",type:"number",default:"99",description:{"zh-CN":"数值上限（超出显示 `${max}+`）","en-US":"Maximum value (shows `${max}+` when exceeded)"}},{name:"dot",type:"boolean",default:"false",description:{"zh-CN":"点状徽标（忽略 count 与 max）","en-US":"Dot badge (ignores count and max)"}},{name:"showZero",type:"boolean",default:"false",description:{"zh-CN":"count 为 0 时是否显示徽标（默认隐藏）","en-US":"Whether to show the badge when count is 0 (hidden by default)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"徽标包裹的内容（未提供时徽标独立渲染）","en-US":"Content wrapped by the badge (the badge renders standalone when not provided)"}}]},notes:[{"zh-CN":"纯展示组件，无事件；count 为 0 且未开启 showZero 时徽标不占位。","en-US":"A purely presentational component with no events; the badge takes up no space when count is 0 and showZero is off."}],a11y:[{"zh-CN":"数值徽标以可读文本暴露数量语义；dot 模式作为状态提示，装饰性内容对读屏隐藏。","en-US":"Numeric badges expose the count as readable text; dot mode acts as a status hint, and decorative content is hidden from screen readers."}]},VB={class:"demo-row"},HB="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%236366f1'/><text x='40' y='52' font-size='36' fill='white' text-anchor='middle'>X</text></svg>",IB=M({__name:"basic",setup(e){return(t,n)=>(b(),C("div",VB,[U(r(ga),{src:HB,alt:r(z)()?"X 用户头像":"X user avatar"},null,8,["alt"]),U(r(ga),null,{default:E(()=>[K($(r(z)()?"杨":"Yang"),1)]),_:1}),U(r(ga),{size:"sm"},{default:E(()=>[K($(r(z)()?"小":"Sm"),1)]),_:1}),U(r(ga),{size:"lg"},{default:E(()=>[K($(r(z)()?"大":"Lg"),1)]),_:1})]))}}),FB={class:"demo-column"},KB={class:"demo-row"},qB={class:"demo-row"},PB=M({__name:"shape",setup(e){return(t,n)=>(b(),C("div",FB,[w("div",KB,[U(r(ga),{shape:"square"},{default:E(()=>[K($(r(z)()?"方":"Square"),1)]),_:1}),U(r(ga),{shape:"circle"},{default:E(()=>[K($(r(z)()?"圆":"Circle"),1)]),_:1})]),w("div",qB,[U(r(ga),{src:"/not-exist.png",onError:n[0]||(n[0]=()=>console.log("image load failed"))},{default:E(()=>[K($(r(z)()?"失败回退":"Fallback"),1)]),_:1}),U(r(ga),{src:"/not-exist.png"})])]))}}),GB="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%236366f1'/><text x='40' y='52' font-size='36' fill='white' text-anchor='middle'>X</text></svg>";function YB(){const e=oe();return u.jsxs("div",{className:"demo-row",children:[u.jsx(ba,{src:GB,alt:e?"X 用户头像":"X user avatar"}),u.jsx(ba,{children:e?"杨":"Yang"}),u.jsx(ba,{size:"sm",children:e?"小":"Sm"}),u.jsx(ba,{size:"lg",children:e?"大":"Lg"})]})}function XB(){const e=oe();return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(ba,{shape:"square",children:e?"方":"Square"}),u.jsx(ba,{shape:"circle",children:e?"圆":"Circle"})]}),u.jsxs("div",{className:"demo-row",children:[u.jsx(ba,{src:"/not-exist.png",onError:()=>console.log("image load failed"),children:e?"失败回退":"Fallback"}),u.jsx(ba,{src:"/not-exist.png"})]})]})}const QB=`<script setup lang="ts">
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
`,JB=`<script setup lang="ts">
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
`,WB=`import { Avatar } from '@xui-design/react';
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
`,eO=`import { Avatar } from '@xui-design/react';
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
`,tO={name:"Avatar",slug:"avatar",title:"头像",category:"display",summary:{"zh-CN":"展示用户或事物的图片 / 文字头像，支持三种尺寸、圆形方形与图片失败回退。","en-US":"Displays an image or text avatar for a user or entity, with three sizes, circle / square shapes, and image-failure fallback."},features:[{"zh-CN":"size 支持 sm / md / lg，shape 支持 circle / square","en-US":"size supports sm / md / lg; shape supports circle / square"},{"zh-CN":"内容优先级：加载成功的图片 ＞ 默认插槽 / children（文字图标）＞ 默认图标","en-US":"Content priority: a successfully loaded image > default slot / children (text or icon) > default icon"},{"zh-CN":"src 加载失败自动回退并触发 error 事件","en-US":"Falls back automatically and fires the error event when src fails to load"}],scenarios:[{"zh-CN":"用户信息、评论列表、导航栏账号入口等需要形象标识的场景。","en-US":"User profiles, comment lists, navbar account entries, and other scenarios needing a visual identity."}],demos:[{id:"basic",title:{"zh-CN":"图片 / 文字 / 尺寸","en-US":"Image / Text / Sizes"},description:{"zh-CN":"src 为图片地址；无图时显示插槽文字；size 控制三档尺寸。","en-US":"src sets the image URL; slot text shows when there is no image; size controls the three size options."},vueComponent:IB,reactComponent:YB,vueSource:QB,reactSource:WB},{id:"shape",title:{"zh-CN":"形状与失败回退","en-US":"Shapes & Failure Fallback"},description:{"zh-CN":"shape 切换方形 / 圆形；图片加载失败时回退为插槽内容或默认图标。","en-US":"shape switches between square and circle; falls back to slot content or the default icon when the image fails to load."},vueComponent:PB,reactComponent:XB,vueSource:JB,reactSource:eO}],api:{props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:{"zh-CN":"头像尺寸","en-US":"Avatar size"}},{name:"shape",type:"'circle' | 'square'",default:"'circle'",description:{"zh-CN":"头像形状","en-US":"Avatar shape"}},{name:"src",type:"string",default:"—",description:{"zh-CN":"图片地址（加载失败时回退默认图标或插槽内容）","en-US":"Image URL (falls back to the default icon or slot content on load failure)"}},{name:"alt",type:"string",default:"—",description:{"zh-CN":"图片 alt（未提供时按装饰图处理，读屏跳过）","en-US":"Image alt (treated as decorative and skipped by screen readers when not provided)"}},{name:"onError",type:"() => void",default:"—",description:{"zh-CN":"图片加载失败回调","en-US":"Callback when the image fails to load"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"error",react:"onError",payload:"—",description:{"zh-CN":"图片加载失败时触发","en-US":"Fired when the image fails to load"}}],slots:[{vue:"icon",react:"renderIcon",description:{"zh-CN":"自定义占位图标（无 src / 加载失败时替换内置 user 图标）","en-US":"Custom placeholder icon (replaces the built-in user icon when there is no src or loading fails)"}},{vue:"default",react:"children",description:{"zh-CN":"自定义内容（文字 / 图标；优先级低于成功的图片）","en-US":"Custom content (text / icon; lower priority than a successfully loaded image)"}}]},notes:[{"zh-CN":"同时提供 src 与插槽内容时，图片加载成功只显示图片；失败后才显示插槽回退内容。","en-US":"When both src and slot content are provided, only the image shows on successful load; the slot fallback appears only after a failure."}],a11y:[{"zh-CN":"提供 alt 时图片具备替代文本；纯装饰头像建议省略 alt，由读屏跳过。","en-US":"The image gets alternative text when alt is provided; omit alt for purely decorative avatars so screen readers skip them."}]},nO=M({__name:"basic",setup(e){return(t,n)=>(b(),ae(r(iu),{description:r(z)()?"暂无数据，去创建第一条吧":"No data yet — create the first one"},{default:E(()=>[U(r(W),{type:"primary"},{default:E(()=>[K($(r(z)()?"立即创建":"Create now"),1)]),_:1})]),_:1},8,["description"]))}}),aO={class:"demo-column"},lO=M({__name:"image",setup(e){return(t,n)=>(b(),C("div",aO,[U(r(iu),{description:r(z)()?"自定义插画":"Custom illustration"},{image:E(()=>[...n[0]||(n[0]=[K("🔍",-1)])]),_:1},8,["description"]),U(r(iu))]))}});function oO(){const e=oe();return u.jsx(hu,{description:e?"暂无数据，去创建第一条吧":"No data yet — create the first one",children:u.jsx(ee,{type:"primary",children:e?"立即创建":"Create now"})})}function iO(){const e=oe();return u.jsxs("div",{className:"demo-column",children:[u.jsx(hu,{description:e?"自定义插画":"Custom illustration",renderImage:()=>u.jsx("span",{style:{fontSize:40},children:"🔍"})}),u.jsx(hu,{})]})}const sO=`<script setup lang="ts">
import { Empty, Button } from '@xui-design/vue';
import { isZh } from '../../../i18n';
<\/script>

<template>
  <Empty :description="isZh() ? '暂无数据，去创建第一条吧' : 'No data yet — create the first one'">
    <Button type="primary">{{ isZh() ? '立即创建' : 'Create now' }}</Button>
  </Empty>
</template>
`,rO=`<script setup lang="ts">
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
`,cO=`import { Empty, Button } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function EmptyBasicDemo() {
  const isZh = useIsZh();
  return (
    <Empty description={isZh ? '暂无数据，去创建第一条吧' : 'No data yet — create the first one'}>
      <Button type="primary">{isZh ? '立即创建' : 'Create now'}</Button>
    </Empty>
  );
}
`,uO=`import { Empty } from '@xui-design/react';
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
`,dO={name:"Empty",slug:"empty",title:"空状态",category:"display",summary:{"zh-CN":"空数据 / 无结果时的占位展示，内置默认插画，支持自定义描述、插画与操作区。","en-US":"Placeholder for empty data or no results, with a built-in default illustration and customizable description, illustration, and action area."},features:[{"zh-CN":"内置默认插画，description 提供描述文案（空白时不渲染描述，避免内置 i18n）","en-US":"Built-in default illustration; description provides the text (not rendered when blank, avoiding built-in i18n)"},{"zh-CN":"image 插槽 / renderImage 自定义插画，default 插槽放置操作按钮","en-US":"Customize the illustration via the image slot / renderImage; place action buttons in the default slot"}],scenarios:[{"zh-CN":"列表无数据、搜索无结果、首次使用引导等场景。","en-US":"Scenarios such as empty lists, no search results, or first-use onboarding."}],demos:[{id:"basic",title:{"zh-CN":"描述与操作","en-US":"Description & Action"},description:{"zh-CN":'默认插槽放置"去创建"等引导动作。',"en-US":'The default slot holds guiding actions such as "Create".'},vueComponent:nO,reactComponent:oO,vueSource:sO,reactSource:cO},{id:"image",title:{"zh-CN":"自定义插画与纯默认","en-US":"Custom Illustration & Pure Default"},description:{"zh-CN":"image 插槽覆盖默认插画；不传 description 时仅展示插画。","en-US":"The image slot overrides the default illustration; when description is omitted, only the illustration is shown."},vueComponent:lO,reactComponent:iO,vueSource:rO,reactSource:uO}],api:{props:[{name:"description",type:"string",default:"—",description:{"zh-CN":"空状态描述文案（未提供或空白时不渲染）","en-US":"Description text of the empty state (not rendered when omitted or blank)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":'底部动作区（如"去创建"按钮）',"en-US":'Bottom action area (e.g., a "Create" button)'}},{vue:"image",react:"renderImage",description:{"zh-CN":"自定义插画（覆盖默认插画）","en-US":"Custom illustration (overrides the default one)"}}]},notes:[{"zh-CN":"组件不内置任何文案，description 完全由使用方决定，便于国际化。","en-US":"The component ships no built-in text; description is fully controlled by the consumer, which simplifies internationalization."}],a11y:[{"zh-CN":"空状态作为说明性区域，描述文本可被读屏朗读，装饰性插画标注为装饰图。","en-US":"The empty state acts as a descriptive region: the description text can be read by screen readers, and the decorative illustration is marked as decorative."}]},pO={class:"demo-column"},mO={class:"demo-article"},hO=M({__name:"basic",setup(e){const t=q(!0);return(n,a)=>(b(),C("div",pO,[U(r(cu),{loading:t.value,rows:3},{default:E(()=>[w("div",mO,[w("h4",null,$(r(z)()?"加载完成后的真实内容":"Real content after loading"),1),w("p",null,$(r(z)()?"这是一段从服务端获取的数据，loading 为 false 时替换骨架屏渲染。":"This is data fetched from the server; skeleton is replaced when loading is false."),1)])]),_:1},8,["loading"]),U(r(W),{size:"sm",onClick:a[0]||(a[0]=l=>t.value=!t.value)},{default:E(()=>[K($(r(z)()?t.value?"加载完成":"重新加载":t.value?"Finish loading":"Reload"),1)]),_:1})]))}}),fO=pe(hO,[["__scopeId","data-v-4e6e0b33"]]),vO={class:"demo-column"},gO=M({__name:"variants",setup(e){return(t,n)=>(b(),C("div",vO,[U(r(cu),{avatar:"",rows:2}),U(r(cu),{rows:5})]))}});function bO(){const e=oe(),[t,n]=B.useState(!0);return u.jsxs("div",{className:"demo-column",children:[u.jsx(zd,{loading:t,rows:3,children:u.jsxs("div",{children:[u.jsx("h4",{style:{margin:"0 0 8px"},children:e?"加载完成后的真实内容":"Real content after loading"}),u.jsx("p",{style:{margin:0,color:"#6b7280"},children:e?"这是一段从服务端获取的数据，loading 为 false 时替换骨架屏渲染。":"This is data fetched from the server; skeleton is replaced when loading is false."})]})}),u.jsx(ee,{size:"sm",onClick:()=>n(a=>!a),children:e?t?"加载完成":"重新加载":t?"Finish loading":"Reload"})]})}function yO(){return u.jsxs("div",{className:"demo-column",children:[u.jsx(zd,{avatar:!0,rows:2}),u.jsx(zd,{rows:5})]})}const SO=`<script setup lang="ts">
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
`,xO=`<script setup lang="ts">
import { Skeleton } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-column">
    <Skeleton avatar :rows="2" />
    <Skeleton :rows="5" />
  </div>
</template>
`,CO=`import { useState } from 'react';
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
`,_O=`import { Skeleton } from '@xui-design/react';

export default function SkeletonVariantsDemo() {
  return (
    <div className="demo-column">
      <Skeleton avatar rows={2} />
      <Skeleton rows={5} />
    </div>
  );
}
`,kO={name:"Skeleton",slug:"skeleton",title:"骨架屏",category:"display",summary:{"zh-CN":"数据加载中的占位屏，在内容就绪前提供结构感知，支持头像占位与自定义行数。","en-US":"Placeholder screen shown while data is loading, conveying structure before content is ready, with avatar placeholder and customizable row count."},features:[{"zh-CN":"loading 控制骨架 / 真实内容切换，false 时渲染默认插槽内容","en-US":"loading toggles between skeleton and real content; renders the default slot when false"},{"zh-CN":"avatar 显示头部头像占位，rows 配置段落行数（收敛为正整数，默认 3）","en-US":"avatar shows a leading avatar placeholder; rows sets the paragraph line count (coerced to a positive integer, defaults to 3)"}],scenarios:[{"zh-CN":"卡片 / 列表 / 详情页首次加载、弱网等待数据等场景。","en-US":"First-load of cards / lists / detail pages, or waiting for data on slow networks."}],demos:[{id:"basic",title:{"zh-CN":"加载切换","en-US":"Loading Toggle"},description:{"zh-CN":"loading=true 显示骨架，false 渲染插槽中的真实内容。","en-US":"loading=true shows the skeleton; false renders the real content in the slot."},vueComponent:fO,reactComponent:bO,vueSource:SO,reactSource:CO},{id:"variants",title:{"zh-CN":"头像占位与行数","en-US":"Avatar Placeholder & Rows"},description:{"zh-CN":"avatar 渲染圆形头像占位；rows 控制文本段落条数。","en-US":"avatar renders a circular avatar placeholder; rows controls the text line count."},vueComponent:gO,reactComponent:yO,vueSource:xO,reactSource:_O}],api:{props:[{name:"loading",type:"boolean",default:"true",description:{"zh-CN":"加载中状态（true 渲染骨架，false 渲染插槽内容）","en-US":"Loading state (true renders the skeleton, false renders the slot content)"}},{name:"avatar",type:"boolean",default:"false",description:{"zh-CN":"是否显示头部头像占位","en-US":"Whether to show the leading avatar placeholder"}},{name:"rows",type:"number",default:"3",description:{"zh-CN":"段落行数（收敛为正整数）","en-US":"Paragraph line count (coerced to a positive integer)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"真实内容（loading=false 时渲染）","en-US":"Real content (rendered when loading=false)"}}]},notes:[{"zh-CN":"rows 传入 0 或负数等非法值会收敛为 1，保证至少渲染一行。","en-US":"Invalid rows values such as 0 or negatives are coerced to 1, guaranteeing at least one line."}],a11y:[{"zh-CN":"骨架区域标记为忙碌状态（aria-busy），读屏可感知内容正在加载。","en-US":"The skeleton region is marked busy (aria-busy) so screen readers can sense that content is loading."}]},wO={class:"demo-text"},NO=M({__name:"basic",setup(e){const t=q("overview"),n=P(()=>[{label:z()?"概览":"Overview",value:"overview"},{label:z()?"配置":"Config",value:"config"},{label:z()?"日志":"Logs",value:"logs",disabled:!0}]);return(a,l)=>(b(),ae(r(Uv),{value:t.value,"onUpdate:value":l[0]||(l[0]=o=>t.value=o),items:n.value},{default:E(({item:o})=>[w("p",wO,$(r(z)()?`${o.label}页的内容（value: ${o.value}）`:`${o.label} panel content (value: ${o.value})`),1)]),_:1},8,["value","items"]))}}),TO={class:"demo-text"},zO=M({__name:"uncontrolled",setup(e){const t=P(()=>[{label:z()?"章节一":"Chapter 1",value:"ch1"},{label:z()?"章节二":"Chapter 2",value:"ch2"},{label:z()?"章节三":"Chapter 3",value:"ch3"}]);return(n,a)=>(b(),ae(r(Uv),{"default-value":"ch2",items:t.value},{default:E(({item:l})=>[w("p",TO,$(r(z)()?`当前激活：${l.label}`:`Active: ${l.label}`),1)]),_:1},8,["items"]))}});function UO(){const e=oe(),[t,n]=B.useState("overview"),a=[{label:e?"概览":"Overview",value:"overview"},{label:e?"配置":"Config",value:"config"},{label:e?"日志":"Logs",value:"logs",disabled:!0}];return u.jsx(Fv,{value:t,onChange:n,items:a,renderPanel:l=>u.jsx("p",{className:"demo-text",children:e?`${l.label}页的内容（value: ${l.value}）`:`${l.label} panel content (value: ${l.value})`})})}function $O(){const e=oe(),t=[{label:e?"章节一":"Chapter 1",value:"ch1"},{label:e?"章节二":"Chapter 2",value:"ch2"},{label:e?"章节三":"Chapter 3",value:"ch3"}];return u.jsx(Fv,{defaultValue:"ch2",items:t,renderPanel:n=>u.jsx("p",{className:"demo-text",children:e?`当前激活：${n.label}`:`Active: ${n.label}`})})}const EO=`<script setup lang="ts">
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
`,AO=`<script setup lang="ts">
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
`,RO=`import { useState } from 'react';
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
`,BO=`import { Tabs } from '@xui-design/react';
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
`,OO={name:"Tabs",slug:"tabs",title:"标签页",category:"navigation",summary:{"zh-CN":"在同一区域切换多个平级内容面板，配置化标签项，支持受控 / 非受控与键盘切换。","en-US":"Switches between multiple peer content panels in the same area, with configurable tab items, controlled / uncontrolled modes, and keyboard navigation."},features:[{"zh-CN":"items 配置标签项（label / value / disabled），受控 value / 非受控 defaultValue","en-US":"items configures tabs (label / value / disabled); controlled value or uncontrolled defaultValue"},{"zh-CN":'面板内容通过作用域插槽获取当前激活项：Vue #default="{ item }"，React renderPanel(item)',"en-US":'Panel content receives the active item via a scoped slot: Vue #default="{ item }", React renderPanel(item)'},{"zh-CN":"禁用标签不可激活；方向键在可用标签间循环移动","en-US":"Disabled tabs cannot be activated; arrow keys cycle through enabled tabs"}],scenarios:[{"zh-CN":"表单分区、详情页多视图、设置项分类等内容平级切换场景。","en-US":"Switching between peer content such as form sections, multi-view detail pages, or grouped settings."}],demos:[{id:"basic",title:{"zh-CN":"受控与禁用项","en-US":"Controlled & Disabled Tabs"},description:{"zh-CN":"外部维护激活 value，disabled 标签不可点击也不参与键盘循环。","en-US":"The active value is maintained externally; disabled tabs are not clickable and are skipped in keyboard cycling."},vueComponent:NO,reactComponent:UO,vueSource:EO,reactSource:RO},{id:"uncontrolled",title:{"zh-CN":"非受控","en-US":"Uncontrolled"},description:{"zh-CN":"仅提供 defaultValue 指定初始激活项，切换由组件内部管理。","en-US":"Only defaultValue sets the initially active tab; switching is managed internally."},vueComponent:zO,reactComponent:$O,vueSource:AO,reactSource:BO}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控激活值（提供即受控）","en-US":"Controlled active value (providing it makes the component controlled)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始激活值","en-US":"Uncontrolled initial active value"}},{name:"items",type:"TabItem[]",default:"—",required:!0,description:{"zh-CN":"标签页配置","en-US":"Tab items configuration"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"激活项变更回调","en-US":"Callback fired when the active tab changes"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"激活标签变更","en-US":"Active tab changed"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:'default="{ item }"',react:"renderPanel(item)",description:{"zh-CN":"面板内容（作用域参数为当前激活的 TabItem）","en-US":"Panel content (scoped param is the currently active TabItem)"}}],types:[{name:"TabItem",definition:`interface TabItem {
  label: string
  value: string
  disabled?: boolean
}`,description:{"zh-CN":"标签页项配置。","en-US":"Tab item configuration."}}]},notes:[{"zh-CN":'Vue 端面板是 default 作用域插槽（#default="{ item }"），不存在名为 item 的具名插槽。',"en-US":'On Vue the panel is the default scoped slot (#default="{ item }"); there is no named slot called item.'},{"zh-CN":"点击禁用标签与通过键盘切换时都会跳过禁用项。","en-US":"Disabled tabs are skipped both when clicked and when switching via keyboard."}],a11y:[{"zh-CN":"标签栏具备 tablist / tab 语义，aria-selected 标识激活项，左右方向键可切换焦点。","en-US":"The tab bar has tablist / tab semantics; aria-selected marks the active tab, and left/right arrow keys move focus."}]},ZO={class:"demo-column"},jO={class:"demo-text"},DO=M({__name:"basic",setup(e){const t=q(3);return(n,a)=>(b(),C("div",ZO,[U(r(su),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),total:285},null,8,["value"]),w("p",jO,$(r(z)()?`第 ${t.value} 页 / 共 29 页（每页 10 条，共 285 条）`:`Page ${t.value} / 29 pages (10 per page, 285 total)`),1)]))}}),MO={class:"demo-column"},LO=M({__name:"variants",setup(e){return(t,n)=>(b(),C("div",MO,[U(r(su),{"default-value":1,total:80,"page-size":20}),U(r(su),{"default-value":2,total:50,disabled:""})]))}});function VO(){const e=oe(),[t,n]=B.useState(3);return u.jsxs("div",{className:"demo-column",children:[u.jsx(Nd,{value:t,onChange:n,total:285}),u.jsx("p",{className:"demo-text",children:e?`第 ${t} 页 / 共 29 页（每页 10 条，共 285 条）`:`Page ${t} / 29 pages (10 per page, 285 total)`})]})}function HO(){return u.jsxs("div",{className:"demo-column",children:[u.jsx(Nd,{defaultValue:1,total:80,pageSize:20}),u.jsx(Nd,{defaultValue:2,total:50,disabled:!0})]})}const IO=`<script setup lang="ts">
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
`,FO=`<script setup lang="ts">
import { Pagination } from '@xui-design/vue';
<\/script>

<template>
  <div class="demo-column">
    <Pagination :default-value="1" :total="80" :page-size="20" />
    <Pagination :default-value="2" :total="50" disabled />
  </div>
</template>
`,KO=`import { useState } from 'react';
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
`,qO=`import { Pagination } from '@xui-design/react';

export default function PaginationVariantsDemo() {
  return (
    <div className="demo-column">
      <Pagination defaultValue={1} total={80} pageSize={20} />
      <Pagination defaultValue={2} total={50} disabled />
    </div>
  );
}
`,PO={name:"Pagination",slug:"pagination",title:"分页",category:"navigation",summary:{"zh-CN":"数据分页导航，页码从 1 开始，自动计算总页数并收敛越界操作。","en-US":"Data pagination navigation with 1-based page numbers, automatically computing the total page count and clamping out-of-range operations."},features:[{"zh-CN":"受控 value / 非受控 defaultValue，页码从 1 开始，Vue 端支持 v-model:value","en-US":"Controlled value / uncontrolled defaultValue, 1-based page numbers, and v-model:value support on Vue"},{"zh-CN":"total 总条数 + pageSize 每页条数（默认 10）自动计算总页数","en-US":"total item count plus pageSize per-page count (default 10) automatically computes the total page count"},{"zh-CN":"上一页 / 下一页在边界自动 no-op，越界页码自动 clamp","en-US":"Prev / next become no-ops at boundaries; out-of-range page numbers are clamped automatically"},{"zh-CN":"disabled 禁用整个分页器","en-US":"disabled turns off the whole paginator"}],scenarios:[{"zh-CN":"长列表 / 表格 / 搜索结果等数据量较大需要分页浏览的场景。","en-US":"Browsing large datasets page by page, such as long lists, tables, or search results."}],demos:[{id:"basic",title:{"zh-CN":"受控分页","en-US":"Controlled Pagination"},description:{"zh-CN":"285 条数据、每页 10 条共 29 页，外部同步当前页码。","en-US":"285 items at 10 per page make 29 pages, with the current page synced externally."},vueComponent:DO,reactComponent:VO,vueSource:IO,reactSource:KO},{id:"variants",title:{"zh-CN":"每页条数与禁用","en-US":"Page Size & Disabled"},description:{"zh-CN":"pageSize 改变分页粒度；disabled 下所有翻页操作无效。","en-US":"pageSize changes the paging granularity; all paging operations are inert while disabled."},vueComponent:LO,reactComponent:HO,vueSource:FO,reactSource:qO}],api:{props:[{name:"value",type:"number",default:"—",description:{"zh-CN":"受控当前页（从 1 开始）","en-US":"Controlled current page (1-based)"}},{name:"defaultValue",type:"number",default:"1",description:{"zh-CN":"非受控初始页码","en-US":"Uncontrolled initial page number"}},{name:"total",type:"number",default:"—",required:!0,description:{"zh-CN":"数据总条数","en-US":"Total number of items"}},{name:"pageSize",type:"number",default:"10",description:{"zh-CN":"每页条数","en-US":"Items per page"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"onChange",type:"(page: number) => void",default:"—",description:{"zh-CN":"页码变更回调","en-US":"Callback fired when the page changes"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"change",react:"onChange",payload:"page: number",description:{"zh-CN":"页码变更","en-US":"Page changed"}},{vue:"update:value",react:"—",payload:"number",description:{"zh-CN":"v-model:value 回写","en-US":"v-model:value write-back"}}],slots:[{vue:"prevIcon",react:"renderPrevIcon",description:{"zh-CN":"自定义上一页图标","en-US":"Custom previous-page icon"}},{vue:"nextIcon",react:"renderNextIcon",description:{"zh-CN":"自定义下一页图标","en-US":"Custom next-page icon"}}]},notes:[{"zh-CN":"当前页超出总页数时（如 total 变小）会自动 clamp 到有效范围并触发一次 change。","en-US":"When the current page exceeds the total page count (e.g., total shrinks), it is clamped to the valid range and one change is fired."},{"zh-CN":"total 变化后总页数自动重算，无需外部维护页数。","en-US":"The total page count is recomputed automatically when total changes, so no external page-count bookkeeping is needed."}],a11y:[{"zh-CN":"导航区域具备分页语义，页码按钮可键盘聚焦，当前页携带 aria-current，边界按钮自动禁用。","en-US":"The nav region has pagination semantics; page buttons are keyboard-focusable, the current page carries aria-current, and boundary buttons disable automatically."}]},GO={class:"demo-column"},YO=M({__name:"basic",setup(e){const t=P(()=>z()?[{label:"首页"},{label:"组件库"},{label:"面包屑 Breadcrumb"}]:[{label:"Home"},{label:"Components"},{label:"Breadcrumb"}]);return(n,a)=>(b(),C("div",GO,[U(r(ru),{items:t.value},null,8,["items"]),U(r(ru),{items:t.value,separator:">"},null,8,["items"])]))}}),XO={class:"demo-column"},QO={class:"demo-text"},JO=M({__name:"click",setup(e){const t=q(z()?"（点击前级项试试）":"(Try clicking a non-last item)"),n=P(()=>z()?[{label:"首页"},{label:"归档（禁用）",disabled:!0},{label:"文章详情"}]:[{label:"Home"},{label:"Archive (disabled)",disabled:!0},{label:"Article Detail"}]),a=(l,o)=>{t.value=z()?`点击了第 ${o} 项：${l.label}`:`Clicked item ${o}: ${l.label}`};return(l,o)=>(b(),C("div",XO,[U(r(ru),{items:n.value,onItemClick:a},null,8,["items"]),w("p",QO,$(t.value)+$(r(z)()?"（末项为当前页，不可点击）":" (last item is the current page, not clickable)"),1)]))}});function WO(){const t=oe()?[{label:"首页"},{label:"组件库"},{label:"面包屑 Breadcrumb"}]:[{label:"Home"},{label:"Components"},{label:"Breadcrumb"}];return u.jsxs("div",{className:"demo-column",children:[u.jsx(Td,{items:t}),u.jsx(Td,{items:t,separator:">"})]})}function eZ(){const e=oe(),[t,n]=B.useState(e?"（点击前级项试试）":"(Try clicking a non-last item)"),a=e?[{label:"首页"},{label:"归档（禁用）",disabled:!0},{label:"文章详情"}]:[{label:"Home"},{label:"Archive (disabled)",disabled:!0},{label:"Article Detail"}];return u.jsxs("div",{className:"demo-column",children:[u.jsx(Td,{items:a,onItemClick:(l,o)=>n(e?`点击了第 ${o} 项：${l.label}`:`Clicked item ${o}: ${l.label}`)}),u.jsxs("p",{className:"demo-text",children:[t,e?"（末项为当前页，不可点击）":" (last item is the current page, not clickable)"]})]})}const tZ=`<script setup lang="ts">
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
`,nZ=`<script setup lang="ts">
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
`,aZ=`import { Breadcrumb } from '@xui-design/react';
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
`,lZ=`import { useState } from 'react';
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
`,oZ={name:"Breadcrumb",slug:"breadcrumb",title:"面包屑",category:"navigation",summary:{"zh-CN":"显示当前页面层级路径，支持链接项 / 可点击项与自定义分隔符。","en-US":"Shows the hierarchical path of the current page, supporting link items / clickable items and a custom separator."},features:[{"zh-CN":"items 配置层级，最后一项自动视为当前页（不可点击）","en-US":"items configures the hierarchy; the last item is automatically treated as the current page (not clickable)"},{"zh-CN":"item 存在 href 时渲染为 <a>，否则渲染为可点击 <span>；separator 自定义分隔符（默认 '/'）","en-US":"An item with href renders as <a>, otherwise as a clickable <span>; separator customizes the delimiter (defaults to '/')"},{"zh-CN":"disabled 项与末项不触发 itemClick","en-US":"Disabled items and the last item do not fire itemClick"}],scenarios:[{"zh-CN":"详情页层级返回、管理系统内容分区定位等场景。","en-US":"Scenarios such as hierarchical back-navigation on detail pages or section location in admin systems."}],demos:[{id:"basic",title:{"zh-CN":"基础与分隔符","en-US":"Basic & Separator"},description:{"zh-CN":"末项为当前页；separator 可替换默认斜杠。","en-US":"The last item is the current page; separator can replace the default slash."},vueComponent:YO,reactComponent:WO,vueSource:tZ,reactSource:aZ},{id:"click",title:{"zh-CN":"点击与禁用","en-US":"Click & Disabled"},description:{"zh-CN":"无 href 的项点击触发 itemClick；disabled 项与末项被忽略。","en-US":"Clicking an item without href fires itemClick; disabled items and the last item are ignored."},vueComponent:JO,reactComponent:eZ,vueSource:nZ,reactSource:lZ}],api:{props:[{name:"items",type:"BreadcrumbItem[]",default:"[]",description:{"zh-CN":"面包屑项列表（末项视为当前页）","en-US":"Breadcrumb item list (the last item is treated as the current page)"}},{name:"separator",type:"string",default:"'/'",description:{"zh-CN":"分隔符","en-US":"Separator"}},{name:"onItemClick",type:"(item: BreadcrumbItem, index: number) => void",default:"—",description:{"zh-CN":"点击可导航项回调（末项 / disabled 不触发）","en-US":"Callback for clicking a navigable item (not fired for the last item or disabled ones)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"itemClick",react:"onItemClick",payload:"item: BreadcrumbItem, index: number",description:{"zh-CN":"点击导航项","en-US":"Navigable item clicked"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"自定义内容区（覆盖 items 渲染）","en-US":"Custom content area (overrides items rendering)"}}],types:[{name:"BreadcrumbItem",definition:`interface BreadcrumbItem {
  label: string
  href?: string
  disabled?: boolean
}`,description:{"zh-CN":"面包屑层级项；href 存在渲染为链接。","en-US":"Breadcrumb hierarchy item; renders as a link when href is present."}}]},notes:[{"zh-CN":"组件本身不拦截链接默认导航（对齐 Element Plus），SPA 内路由拦截由应用层负责。","en-US":"The component does not intercept the default link navigation (aligned with Element Plus); route interception in an SPA is handled by the application layer."},{"zh-CN":"在 hash 路由应用中若不希望改变地址，可省略 href，改用 itemClick 处理跳转。","en-US":"In hash-routed apps, omit href and handle navigation via itemClick if you do not want to change the address."}],a11y:[{"zh-CN":'根节点使用 nav + aria-label="面包屑"，当前页以 aria-current 标识。',"en-US":'The root uses nav with aria-label="面包屑", and the current page is marked with aria-current.'}]},iZ={class:"demo-column"},sZ=M({__name:"basic",setup(e){return(t,n)=>(b(),C("div",iZ,[U(r(Nl),{type:"info",title:r(z)()?"信息提示":"Info",description:r(z)()?"这是一条普通的信息性说明。":"A normal informational message."},null,8,["title","description"]),U(r(Nl),{type:"success",title:r(z)()?"成功提示":"Success",description:r(z)()?"操作已成功完成。":"The operation completed successfully."},null,8,["title","description"]),U(r(Nl),{type:"warning",title:r(z)()?"警告提示":"Warning",description:r(z)()?"请注意当前操作可能产生的影响。":"Note the potential impact of the current operation."},null,8,["title","description"]),U(r(Nl),{type:"error",title:r(z)()?"错误提示":"Error",description:r(z)()?"操作失败，请稍后重试。":"Operation failed, please retry later."},null,8,["title","description"])]))}}),rZ={class:"demo-column"},cZ=M({__name:"closable",setup(e){return(t,n)=>(b(),C("div",rZ,[U(r(Nl),{type:"warning","show-icon":"",closable:""},{title:E(()=>[w("strong",null,$(r(z)()?"可关闭且带图标":"Closable with icon"),1)]),default:E(()=>[K($(r(z)()?"描述内容通过默认插槽传入，支持更灵活的排版。":"Description content is passed via the default slot, allowing flexible layout.")+" ",1)]),_:1})]))}});function uZ(){const e=oe();return u.jsxs("div",{className:"demo-column",children:[u.jsx(zl,{type:"info",title:e?"信息提示":"Info",description:e?"这是一条普通的信息性说明。":"A normal informational message."}),u.jsx(zl,{type:"success",title:e?"成功提示":"Success",description:e?"操作已成功完成。":"The operation completed successfully."}),u.jsx(zl,{type:"warning",title:e?"警告提示":"Warning",description:e?"请注意当前操作可能产生的影响。":"Note the potential impact of the current operation."}),u.jsx(zl,{type:"error",title:e?"错误提示":"Error",description:e?"操作失败，请稍后重试。":"Operation failed, please retry later."})]})}function dZ(){const e=oe();return u.jsx("div",{className:"demo-column",children:u.jsx(zl,{type:"warning",showIcon:!0,closable:!0,renderTitle:()=>u.jsx("strong",{children:e?"可关闭且带图标":"Closable with icon"}),children:e?"描述内容通过 children 传入，支持更灵活的排版。":"Description content is passed via children, allowing flexible layout."})})}const pZ=`<script setup lang="ts">
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
`,mZ=`<script setup lang="ts">
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
`,hZ=`import { Alert } from '@xui-design/react';
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
`,fZ=`import { Alert } from '@xui-design/react';
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
`,vZ={name:"Alert",slug:"alert",title:"警告提示",category:"feedback",summary:{"zh-CN":"静态内嵌的提示横幅，用于展示需用户关注的信息，支持四种语义、图标与关闭。","en-US":"A static inline banner for information that needs user attention, with four semantic types, icon and closable support."},features:[{"zh-CN":"四种语义类型：info / success / warning / error","en-US":"Four semantic types: info / success / warning / error"},{"zh-CN":"title 标题 + description 描述（描述也可用默认插槽 / children）","en-US":"title plus description (description can also use the default slot / children)"},{"zh-CN":"showIcon 显示类型图标，closable 可手动关闭（隐藏后触发 close）","en-US":"showIcon shows the type icon; closable allows manual close (close fires after hiding)"},{"zh-CN":"title / icon 均提供插槽，可完全自定义（React 对应 renderTitle / renderIcon）","en-US":"title and icon both offer slots for full customization (renderTitle / renderIcon in React)"}],scenarios:[{"zh-CN":"表单校验汇总、页面级通知、操作后果说明等常驻提示场景。","en-US":"Persistent inline notices such as form validation summaries, page-level notifications, and consequence explanations."}],demos:[{id:"basic",title:{"zh-CN":"四种语义","en-US":"Four Semantic Types"},description:{"zh-CN":"通过 type 切换 info / success / warning / error 配色与语义。","en-US":"Use type to switch between info / success / warning / error colors and semantics."},vueComponent:sZ,reactComponent:uZ,vueSource:pZ,reactSource:hZ},{id:"closable",title:{"zh-CN":"图标 / 关闭 / 自定义标题","en-US":"Icon / Closable / Custom Title"},description:{"zh-CN":"showIcon + closable，标题通过 title 插槽自定义。","en-US":"showIcon plus closable; the title is customized via the title slot."},vueComponent:cZ,reactComponent:dZ,vueSource:mZ,reactSource:fZ}],api:{props:[{name:"type",type:"'info' | 'success' | 'warning' | 'error'",default:"'info'",description:{"zh-CN":"语义类型","en-US":"Semantic type"}},{name:"title",type:"string",default:"—",description:{"zh-CN":"标题","en-US":"Title"}},{name:"description",type:"string",default:"—",description:{"zh-CN":"辅助描述（默认插槽的回退内容）","en-US":"Supporting description (fallback for the default slot)"}},{name:"closable",type:"boolean",default:"false",description:{"zh-CN":"是否可关闭","en-US":"Whether it is closable"}},{name:"showIcon",type:"boolean",default:"false",description:{"zh-CN":"是否显示类型图标","en-US":"Whether to show the type icon"}},{name:"onClose",type:"() => void",default:"—",description:{"zh-CN":"关闭回调（组件隐藏后触发）","en-US":"Close callback (fired after the component hides)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"close",react:"onClose",payload:"—",description:{"zh-CN":"点击关闭按钮、提示隐藏后触发","en-US":"Fired when the close button is clicked and the alert has hidden"}}],slots:[{vue:"closeIcon",react:"renderCloseIcon",description:{"zh-CN":"自定义关闭图标（替换内置 close）","en-US":"Custom close icon (replaces the built-in close icon)"}},{vue:"default",react:"children",description:{"zh-CN":"描述内容（覆盖 description prop）","en-US":"Description content (overrides the description prop)"}},{vue:"title",react:"renderTitle",description:{"zh-CN":"标题（覆盖 title prop）","en-US":"Title (overrides the title prop)"}},{vue:"icon",react:"renderIcon",description:{"zh-CN":"类型图标（覆盖默认图标，showIcon 开启时生效）","en-US":"Type icon (overrides the default icon when showIcon is on)"}}]},notes:[{"zh-CN":"Alert 为页面内静态提示（非浮层）；需要自动消失的全局浮层请使用 Message。","en-US":"Alert is a static in-page notice, not a floating layer. Use Message for auto-dismissing global toasts."}],a11y:[{"zh-CN":'提示区域按类型携带 role="status" / "alert" 等语义，关闭按钮可键盘操作。',"en-US":'The alert region carries role="status" / "alert" semantics per type; the close button is keyboard operable.'}]},gZ={class:"demo-row"},bZ=M({__name:"basic",setup(e){return(t,n)=>(b(),C("div",gZ,[U(r(In),{content:r(z)()?"上方提示":"Top tooltip",placement:"top"},{default:E(()=>[U(r(W),null,{default:E(()=>[...n[0]||(n[0]=[K("Top",-1)])]),_:1})]),_:1},8,["content"]),U(r(In),{content:r(z)()?"下方提示":"Bottom tooltip",placement:"bottom"},{default:E(()=>[U(r(W),null,{default:E(()=>[...n[1]||(n[1]=[K("Bottom",-1)])]),_:1})]),_:1},8,["content"]),U(r(In),{content:r(z)()?"左侧提示":"Left tooltip",placement:"left"},{default:E(()=>[U(r(W),null,{default:E(()=>[...n[2]||(n[2]=[K("Left",-1)])]),_:1})]),_:1},8,["content"]),U(r(In),{content:r(z)()?"右侧提示":"Right tooltip",placement:"right"},{default:E(()=>[U(r(W),null,{default:E(()=>[...n[3]||(n[3]=[K("Right",-1)])]),_:1})]),_:1},8,["content"])]))}}),yZ={class:"demo-column"},SZ=M({__name:"trigger",setup(e){return(t,n)=>(b(),C("div",yZ,[U(r(In),{content:r(z)()?"聚焦输入框时显示":"Shown when the input is focused",trigger:"focus"},{default:E(()=>[U(r(rt),{placeholder:r(z)()?"点击聚焦查看 focus 提示":"Click to focus and see the focus tooltip"},null,8,["placeholder"])]),_:1},8,["content"]),U(r(In),{content:r(z)()?"禁用后不再响应":"No response when disabled",disabled:""},{default:E(()=>[U(r(W),null,{default:E(()=>[K($(r(z)()?"禁用的 Tooltip":"Disabled Tooltip"),1)]),_:1})]),_:1},8,["content"])]))}});function xZ(){const e=oe();return u.jsxs("div",{className:"demo-row",children:[u.jsx(qn,{content:e?"上方提示":"Top tooltip",placement:"top",children:u.jsx(ee,{children:"Top"})}),u.jsx(qn,{content:e?"下方提示":"Bottom tooltip",placement:"bottom",children:u.jsx(ee,{children:"Bottom"})}),u.jsx(qn,{content:e?"左侧提示":"Left tooltip",placement:"left",children:u.jsx(ee,{children:"Left"})}),u.jsx(qn,{content:e?"右侧提示":"Right tooltip",placement:"right",children:u.jsx(ee,{children:"Right"})})]})}function CZ(){const e=oe();return u.jsxs("div",{className:"demo-column",children:[u.jsx(qn,{content:e?"聚焦输入框时显示":"Shown when the input is focused",trigger:"focus",children:u.jsx(ut,{placeholder:e?"点击聚焦查看 focus 提示":"Click to focus and see the focus tooltip"})}),u.jsx(qn,{content:e?"禁用后不再响应":"No response when disabled",disabled:!0,children:u.jsx(ee,{children:e?"禁用的 Tooltip":"Disabled Tooltip"})})]})}const _Z=`<script setup lang="ts">
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
`,kZ=`<script setup lang="ts">
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
`,wZ=`import { Tooltip, Button } from '@xui-design/react';
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
`,NZ=`import { Tooltip, Input, Button } from '@xui-design/react';
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
`,TZ={name:"Tooltip",slug:"tooltip",title:"文字提示",category:"feedback",summary:{"zh-CN":"鼠标悬停或聚焦时展示的简单文字气泡，CSS 包裹定位（非 portal），支持四方位与两种触发。","en-US":"A simple text bubble shown on hover or focus, positioned with a CSS wrapper (no portal), supporting four placements and two triggers."},features:[{"zh-CN":"placement 支持 top / bottom / left / right 四个方位","en-US":"placement supports top / bottom / left / right"},{"zh-CN":"trigger 支持 hover（默认）与 focus；disabled 后不再响应触发","en-US":"trigger supports hover (default) and focus; disabled stops responding to triggers"},{"zh-CN":"content 属性或 content 插槽 / renderContent 自定义提示内容","en-US":"Tooltip content via the content prop or the content slot / renderContent"}],scenarios:[{"zh-CN":"图标按钮说明、字段含义解释、快捷操作提示等轻量辅助说明场景。","en-US":"Lightweight hints such as icon button labels, field explanations, and shortcut tips."}],demos:[{id:"basic",title:{"zh-CN":"四个方位","en-US":"Four Placements"},description:{"zh-CN":"鼠标悬停（或键盘聚焦）触发元素查看对应方位的气泡。","en-US":"Hover (or keyboard-focus) the trigger elements to see the bubble at each placement."},vueComponent:bZ,reactComponent:xZ,vueSource:_Z,reactSource:wZ},{id:"trigger",title:{"zh-CN":"focus 触发与禁用","en-US":"Focus Trigger & Disabled"},description:{"zh-CN":'trigger="focus" 适合输入框；disabled 完全关闭提示能力。',"en-US":'trigger="focus" suits input fields; disabled turns the tooltip off entirely.'},vueComponent:SZ,reactComponent:CZ,vueSource:kZ,reactSource:NZ}],api:{props:[{name:"content",type:"string",default:"—",description:{"zh-CN":"提示内容（content 插槽 / renderContent 优先）","en-US":"Tooltip content (the content slot / renderContent takes precedence)"}},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'top'",description:{"zh-CN":"弹出位置","en-US":"Popup placement"}},{name:"trigger",type:"'hover' | 'focus'",default:"'hover'",description:{"zh-CN":"触发方式","en-US":"Trigger mode"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态（禁用后不响应触发）","en-US":"Disabled state (stops responding to triggers)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"触发元素","en-US":"Trigger element"}},{vue:"content",react:"renderContent",description:{"zh-CN":"提示内容（优先于 content prop）","en-US":"Tooltip content (takes precedence over the content prop)"}}]},notes:[{"zh-CN":"气泡采用 CSS 包裹定位而非 portal，父容器存在 overflow: hidden 时可能被裁剪，布局时需留意。","en-US":"The bubble uses CSS wrapper positioning instead of a portal, so it can be clipped by a parent with overflow: hidden; mind your layout."},{"zh-CN":"自带视口避让：首选方位空间不足时自动翻转到对侧，横向 / 纵向溢出视口边缘时自动钳制，滚动与窗口 resize 时实时重算。","en-US":"Built-in viewport collision handling: flips to the opposite side when the preferred placement lacks space, clamps at viewport edges horizontally / vertically, and recalculates on scroll and window resize."}],a11y:[{"zh-CN":"focus 触发天然支持键盘；hover 触发元素同样可聚焦，提示与触发元素通过 aria-describedby 关联。","en-US":"The focus trigger is keyboard-friendly by nature; hover triggers are also focusable, and the tooltip is linked to its trigger via aria-describedby."}]},zZ={class:"demo-row"},UZ=M({__name:"basic",setup(e){return(t,n)=>(b(),C("div",zZ,[U(r(Fo),{size:"sm"}),U(r(Fo)),U(r(Fo),{size:"lg"}),U(r(Fo),{size:"lg",tip:r(z)()?"加载中...":"Loading..."},null,8,["tip"])]))}}),$Z={class:"demo-column"},EZ={class:"demo-panel"},AZ=M({__name:"wrapper",setup(e){const t=q(!0);return(n,a)=>(b(),C("div",$Z,[U(r(Fo),{spinning:t.value,tip:r(z)()?"数据加载中":"Loading data"},{default:E(()=>[w("div",EZ,[w("h4",null,$(r(z)()?"被包裹的内容区":"Wrapped content area"),1),w("p",null,$(r(z)()?"spinning 为 true 时覆盖半透明遮罩，false 时内容正常交互。":"When spinning is true, a semi-transparent overlay covers the content; when false, the content is fully interactive."),1)])]),_:1},8,["spinning","tip"]),U(r(W),{size:"sm",onClick:a[0]||(a[0]=l=>t.value=!t.value)},{default:E(()=>[K($(t.value?r(z)()?"停止加载":"Stop loading":r(z)()?"开始加载":"Start loading"),1)]),_:1})]))}}),RZ=pe(AZ,[["__scopeId","data-v-f7daa9fc"]]);function BZ(){const e=oe();return u.jsxs("div",{className:"demo-row",children:[u.jsx(Xo,{size:"sm"}),u.jsx(Xo,{}),u.jsx(Xo,{size:"lg"}),u.jsx(Xo,{size:"lg",tip:e?"加载中...":"Loading..."})]})}function OZ(){const e=oe(),[t,n]=B.useState(!0);return u.jsxs("div",{className:"demo-column",children:[u.jsx(Xo,{spinning:t,tip:e?"数据加载中":"Loading data",children:u.jsxs("div",{style:{padding:16,background:"#f8fafc",borderRadius:8},children:[u.jsx("h4",{style:{margin:"0 0 8px"},children:e?"被包裹的内容区":"Wrapped content area"}),u.jsx("p",{style:{margin:0,color:"#6b7280"},children:e?"spinning 为 true 时覆盖半透明遮罩，false 时内容正常交互。":"When spinning is true, a semi-transparent overlay covers the content; when false, the content is fully interactive."})]})}),u.jsx(ee,{size:"sm",onClick:()=>n(a=>!a),children:t?e?"停止加载":"Stop loading":e?"开始加载":"Start loading"})]})}const ZZ=`<script setup lang="ts">
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
`,jZ=`<script setup lang="ts">
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
`,DZ=`import { Spin } from '@xui-design/react';
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
`,MZ=`import { useState } from 'react';
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
`,LZ={name:"Spin",slug:"spin",title:"加载中",category:"feedback",summary:{"zh-CN":"加载状态指示器，可独立使用，也可包裹内容以遮罩形式表示区块加载。","en-US":"A loading indicator that works standalone or wraps content with a mask to indicate block-level loading."},features:[{"zh-CN":"size 支持 sm / md / lg（默认 md），tip 显示指示器下方提示文案","en-US":"size supports sm / md / lg (default md); tip shows hint text below the indicator"},{"zh-CN":"包裹内容时由 spinning 控制半透明遮罩显隐（默认 true）","en-US":"When wrapping content, spinning toggles the translucent mask (default true)"}],scenarios:[{"zh-CN":"局部数据加载、按钮 / 卡片等待状态、全屏或区块加载占位等场景。","en-US":"Local data loading, button / card pending states, full-screen or block-level loading placeholders."}],demos:[{id:"basic",title:{"zh-CN":"尺寸与提示","en-US":"Sizes & Tip"},description:{"zh-CN":"独立使用的三档指示器，tip 附带文字说明。","en-US":"Three standalone indicator sizes, with tip adding a text hint."},vueComponent:UZ,reactComponent:BZ,vueSource:ZZ,reactSource:DZ},{id:"wrapper",title:{"zh-CN":"包裹内容","en-US":"Wrapping Content"},description:{"zh-CN":"spinning 时在内容上覆盖遮罩并阻止交互，结束后恢复。","en-US":"While spinning, a mask covers the content and blocks interaction; it is restored when finished."},vueComponent:RZ,reactComponent:OZ,vueSource:jZ,reactSource:MZ}],api:{props:[{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:{"zh-CN":"尺寸","en-US":"Size"}},{name:"spinning",type:"boolean",default:"true",description:{"zh-CN":"加载中状态（包裹内容时控制遮罩显隐）","en-US":"Loading state (toggles the mask when wrapping content)"}},{name:"tip",type:"string",default:"—",description:{"zh-CN":"提示文案（显示在指示器下方，空串不渲染）","en-US":"Tip text (shown below the indicator; an empty string renders nothing)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"包裹内容（spinning 时覆盖半透明遮罩）","en-US":"Wrapped content (covered by a translucent mask while spinning)"}}]},notes:[{"zh-CN":"纯展示组件，无事件；指示器动画由样式驱动，可通过 prefers-reduced-motion 减弱。","en-US":"A purely presentational component with no events; the indicator animation is CSS-driven and can be reduced via prefers-reduced-motion."}],a11y:[{"zh-CN":'加载指示器携带 aria-live 区域与 busy 状态，读屏可感知"加载中"；tip 作为可朗读说明。',"en-US":'The indicator carries an aria-live region and busy state so screen readers can perceive "loading"; tip serves as a readable description.'}]},VZ={class:"demo-column"},HZ={class:"demo-text"},IZ=M({__name:"basic",setup(e){const t=q(z()?"（待操作）":"(pending)");return(n,a)=>(b(),C("div",VZ,[U(r(al),{content:r(z)()?"确定要删除这条记录吗？删除后不可恢复。":"Are you sure you want to delete this record? This cannot be undone.",onConfirm:a[0]||(a[0]=l=>t.value=r(z)()?"已确认删除":"Deletion confirmed"),onCancel:a[1]||(a[1]=l=>t.value=r(z)()?"已取消":"Cancelled")},{default:E(()=>[U(r(W),{type:"danger"},{default:E(()=>[K($(r(z)()?"删除记录":"Delete record"),1)]),_:1})]),_:1},8,["content"]),w("p",HZ,$(r(z)()?"操作结果：":"Result: ")+$(t.value),1)]))}}),FZ={class:"demo-row"},KZ=M({__name:"variants",setup(e){return(t,n)=>(b(),C("div",FZ,[U(r(al),{content:r(z)()?"右侧弹出的气泡确认":"Popover confirm on the right",placement:"right","confirm-text":r(z)()?"好的":"OK","cancel-text":r(z)()?"再想想":"Think again"},{default:E(()=>[U(r(W),null,{default:E(()=>[K($(r(z)()?"右侧 + 自定义按钮":"Right + custom buttons"),1)]),_:1})]),_:1},8,["content","confirm-text","cancel-text"]),U(r(al),{content:r(z)()?"禁用后点击无效":"No effect when disabled",disabled:""},{default:E(()=>[U(r(W),null,{default:E(()=>[K($(r(z)()?"禁用":"Disabled"),1)]),_:1})]),_:1},8,["content"])]))}});function qZ(){const e=oe(),[t,n]=B.useState(e?"（待操作）":"(pending)");return u.jsxs("div",{className:"demo-column",children:[u.jsx(pl,{content:e?"确定要删除这条记录吗？删除后不可恢复。":"Are you sure you want to delete this record? This cannot be undone.",onConfirm:()=>n(e?"已确认删除":"Deletion confirmed"),onCancel:()=>n(e?"已取消":"Cancelled"),children:u.jsx(ee,{type:"danger",children:e?"删除记录":"Delete record"})}),u.jsxs("p",{className:"demo-text",children:[e?"操作结果：":"Result: ",t]})]})}function PZ(){const e=oe();return u.jsxs("div",{className:"demo-row",children:[u.jsx(pl,{content:e?"右侧弹出的气泡确认":"Popover confirm on the right",placement:"right",confirmText:e?"好的":"OK",cancelText:e?"再想想":"Think again",children:u.jsx(ee,{children:e?"右侧 + 自定义按钮":"Right + custom buttons"})}),u.jsx(pl,{content:e?"禁用后点击无效":"No effect when disabled",disabled:!0,children:u.jsx(ee,{children:e?"禁用":"Disabled"})})]})}const GZ=`<script setup lang="ts">
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
`,YZ=`<script setup lang="ts">
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
`,XZ=`import { useState } from 'react';
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
`,QZ=`import { Popconfirm, Button } from '@xui-design/react';
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
`,JZ={name:"Popconfirm",slug:"popconfirm",title:"气泡确认",category:"feedback",summary:{"zh-CN":'点击元素弹出轻量确认气泡，适合"删除"等需要二次确认但不必打断整页的操作。',"en-US":'A lightweight confirmation bubble triggered by clicking an element, ideal for actions like "delete" that need a second confirmation without interrupting the whole page.'},features:[{"zh-CN":"点击触发元素切换气泡，确定 / 取消按钮在收起后分别回调 confirm / cancel","en-US":"Clicking the trigger toggles the bubble; the OK / cancel buttons fire confirm / cancel after the bubble closes"},{"zh-CN":'confirmText / cancelText 自定义按钮文本（未提供时取全局语言包，zh-CN 默认"确定"/"取消"），placement 控制四方位',"en-US":'confirmText / cancelText customize the button labels (falling back to the global locale, zh-CN defaults to "确定"/"取消"); placement controls the four directions'},{"zh-CN":"content 属性或 content 插槽 / renderContent 自定义确认文案；disabled 关闭交互","en-US":"Confirmation text via the content prop or the content slot / renderContent; disabled turns off interaction"},{"zh-CN":"点击气泡外部仅收起，不触发任何回调","en-US":"Clicking outside only closes the bubble without firing any callback"}],scenarios:[{"zh-CN":"删除 / 提交等轻量二次确认、危险操作前置拦截等场景。","en-US":"Lightweight second confirmations for delete / submit actions, or pre-interception of dangerous operations."}],demos:[{id:"basic",title:{"zh-CN":"删除确认","en-US":"Delete Confirmation"},description:{"zh-CN":"点击触发元素弹出确认，确定与取消分别触发不同回调。","en-US":"Click the trigger to pop up the confirmation; OK and cancel fire separate callbacks."},vueComponent:IZ,reactComponent:qZ,vueSource:GZ,reactSource:XZ},{id:"variants",title:{"zh-CN":"方位 / 按钮文本 / 禁用","en-US":"Placement / Button Text / Disabled"},description:{"zh-CN":"placement 右侧弹出并自定义按钮文案；disabled 下点击无效。","en-US":"placement pops to the right with custom button text; clicks do nothing when disabled."},vueComponent:KZ,reactComponent:PZ,vueSource:YZ,reactSource:QZ}],api:{props:[{name:"content",type:"string",default:"—",description:{"zh-CN":"确认文案（content 插槽 / renderContent 可覆盖）","en-US":"Confirmation text (can be overridden by the content slot / renderContent)"}},{name:"confirmText",type:"string",default:"—",description:{"zh-CN":"确认按钮文本；未提供时取全局语言包（zh-CN：确定）","en-US":"OK button text; falls back to the global locale when omitted (zh-CN: 确定)"}},{name:"cancelText",type:"string",default:"—",description:{"zh-CN":"取消按钮文本；未提供时取全局语言包（zh-CN：取消）","en-US":"Cancel button text; falls back to the global locale when omitted (zh-CN: 取消)"}},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'top'",description:{"zh-CN":"气泡方位","en-US":"Bubble placement"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态（运行时禁用会收起已开气泡）","en-US":"Disabled state (disabling at runtime closes an open bubble)"}},{name:"onConfirm",type:"() => void",default:"—",description:{"zh-CN":"点击确定回调（气泡收起后触发）","en-US":"OK click callback (fired after the bubble closes)"}},{name:"onCancel",type:"() => void",default:"—",description:{"zh-CN":"点击取消回调（气泡收起后触发）","en-US":"Cancel click callback (fired after the bubble closes)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的自定义样式","en-US":"Custom styles appended to the root element"}}],events:[{vue:"confirm",react:"onConfirm",payload:"—",description:{"zh-CN":"点击确定（气泡收起后触发）","en-US":"Fired on OK click (after the bubble closes)"}},{vue:"cancel",react:"onCancel",payload:"—",description:{"zh-CN":"点击取消（气泡收起后触发）","en-US":"Fired on cancel click (after the bubble closes)"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"触发元素","en-US":"Trigger element"}},{vue:"content",react:"renderContent",description:{"zh-CN":"确认文案内容（覆盖 content prop）","en-US":"Confirmation content (overrides the content prop)"}}]},notes:[{"zh-CN":"点击外部关闭只收起气泡，不会触发 confirm 或 cancel，便于用户无副作用地放弃操作。","en-US":"Clicking outside only closes the bubble without firing confirm or cancel, letting users back out with no side effects."},{"zh-CN":"气泡为 CSS 包裹定位，与 Tooltip 类似，需注意父容器 overflow 裁剪。","en-US":"The bubble uses CSS wrapper positioning like Tooltip, so watch out for clipping by parent overflow."},{"zh-CN":"自带视口避让：首选方位空间不足时自动翻转（箭头跟随），溢出视口边缘时自动钳制，滚动与窗口 resize 时实时重算。","en-US":"Built-in viewport collision handling: flips when the preferred placement lacks space (the arrow follows), clamps at viewport edges, and recalculates on scroll and window resize."}],a11y:[{"zh-CN":"确认 / 取消为原生按钮可键盘操作，气泡打开后焦点进入弹层，Esc 可取消关闭。","en-US":"The OK / cancel buttons are native and keyboard operable; focus moves into the popup when it opens, and Esc cancels and closes it."}]},WZ=M({__name:"basic",setup(e){const t=q(null),n=a=>{alert(z()?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return(a,l)=>(b(),ae(r(Dr),{ref_key:"formRef",ref:t,"initial-values":{username:"",email:""},rules:{username:[{type:"required",message:r(z)()?"请输入用户名":"Username is required"}],email:[{type:"required",message:r(z)()?"请输入邮箱":"Email is required"},{type:"email",message:r(z)()?"邮箱格式不正确":"Invalid email format"}]},onSubmit:n},{actions:E(()=>[U(r(W),{type:"primary",onClick:l[0]||(l[0]=o=>{var i;return(i=t.value)==null?void 0:i.submit()})},{default:E(()=>[K($(r(z)()?"提交":"Submit"),1)]),_:1}),U(r(W),{onClick:l[1]||(l[1]=o=>{var i;return(i=t.value)==null?void 0:i.resetFields()})},{default:E(()=>[K($(r(z)()?"重置":"Reset"),1)]),_:1})]),default:E(()=>[U(r(At),{name:"username",label:r(z)()?"用户名":"Username"},{default:E(()=>[U(r(rt),{placeholder:r(z)()?"请输入用户名":"Enter username"},null,8,["placeholder"])]),_:1},8,["label"]),U(r(At),{name:"email",label:r(z)()?"邮箱":"Email"},{default:E(()=>[U(r(rt),{placeholder:r(z)()?"请输入邮箱":"Enter email"},null,8,["placeholder"])]),_:1},8,["label"])]),_:1},8,["rules"]))}}),e8=M({__name:"validation",setup(e){const t=q(null),n=a=>{alert(z()?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return(a,l)=>(b(),ae(r(Dr),{ref_key:"formRef",ref:t,"initial-values":{name:"",email:"",phone:"",password:"",confirm:"",type:"personal",company:""},rules:{name:[{type:"required",message:r(z)()?"姓名必填":"Name is required"}],email:[{type:"required",message:r(z)()?"邮箱必填":"Email is required"},{type:"email",message:r(z)()?"邮箱格式不正确":"Invalid email format"}],phone:[{type:"required",message:r(z)()?"手机号必填":"Phone is required"},{type:"phone",message:r(z)()?"手机号格式不正确":"Invalid phone number"}],password:[{type:"required",message:r(z)()?"密码必填":"Password is required"},{type:"length",min:6,message:r(z)()?"密码至少6位":"Password must be 6+ chars"}],confirm:[{type:"required",message:r(z)()?"请确认密码":"Please confirm password"},{type:"custom",message:r(z)()?"两次密码不一致":"Passwords do not match",validator:(o,i)=>i.password===i.confirm}],company:[{type:"required",when:o=>o.type==="enterprise",message:r(z)()?"企业名称必填":"Company name is required"}]},onSubmit:n},{actions:E(()=>[U(r(W),{type:"primary",onClick:l[0]||(l[0]=o=>{var i;return(i=t.value)==null?void 0:i.submit()})},{default:E(()=>[K($(r(z)()?"提交":"Submit"),1)]),_:1}),U(r(W),{onClick:l[1]||(l[1]=o=>{var i;return(i=t.value)==null?void 0:i.resetFields()})},{default:E(()=>[K($(r(z)()?"重置":"Reset"),1)]),_:1})]),default:E(()=>[U(r(At),{name:"name",label:r(z)()?"姓名":"Name"},{default:E(()=>[U(r(rt),{placeholder:r(z)()?"请输入姓名":"Enter name"},null,8,["placeholder"])]),_:1},8,["label"]),U(r(At),{name:"email",label:r(z)()?"邮箱":"Email"},{default:E(()=>[U(r(rt),{placeholder:r(z)()?"请输入邮箱":"Enter email"},null,8,["placeholder"])]),_:1},8,["label"]),U(r(At),{name:"phone",label:r(z)()?"手机号":"Phone"},{default:E(()=>[U(r(rt),{placeholder:r(z)()?"请输入手机号":"Enter phone"},null,8,["placeholder"])]),_:1},8,["label"]),U(r(At),{name:"type",label:r(z)()?"类型":"Type"},{default:E(()=>[U(r(Pn),{options:[{label:r(z)()?"个人":"Personal",value:"personal"},{label:r(z)()?"企业":"Enterprise",value:"enterprise"}]},null,8,["options"])]),_:1},8,["label"]),U(r(At),{name:"company",label:r(z)()?"公司":"Company"},{default:E(()=>[U(r(rt),{placeholder:r(z)()?"企业用户必填":"Required for enterprise"},null,8,["placeholder"])]),_:1},8,["label"]),U(r(At),{name:"password",label:r(z)()?"密码":"Password"},{default:E(()=>[U(r(rt),{type:"password",placeholder:r(z)()?"至少6位":"At least 6 chars"},null,8,["placeholder"])]),_:1},8,["label"]),U(r(At),{name:"confirm",label:r(z)()?"确认密码":"Confirm"},{default:E(()=>[U(r(rt),{type:"password",placeholder:r(z)()?"再输一次":"Re-enter password"},null,8,["placeholder"])]),_:1},8,["label"])]),_:1},8,["rules"]))}}),t8=M({__name:"dynamic",setup(e){const t=q(null),n=q([{key:0,label:z()?"联系人 1":"Contact 1"}]);let a=1;const l=()=>{a+=1,n.value.push({key:a,label:z()?`联系人 ${n.value.length+1}`:`Contact ${n.value.length+1}`})},o=s=>{n.value.splice(s,1)},i=s=>{alert(z()?`提交成功：${JSON.stringify(s)}`:`Submitted: ${JSON.stringify(s)}`)};return(s,c)=>(b(),ae(r(Dr),{ref_key:"formRef",ref:t,"initial-values":{},onSubmit:i},{actions:E(()=>[U(r(W),{type:"primary",onClick:c[0]||(c[0]=d=>{var m;return(m=t.value)==null?void 0:m.submit()})},{default:E(()=>[K($(r(z)()?"提交":"Submit"),1)]),_:1}),U(r(W),{onClick:c[1]||(c[1]=d=>{var m;return(m=t.value)==null?void 0:m.resetFields()})},{default:E(()=>[K($(r(z)()?"重置":"Reset"),1)]),_:1})]),default:E(()=>[(b(!0),C(ne,null,me(n.value,(d,m)=>(b(),ae(r(At),{key:d.key,name:`contact_${d.key}`,label:d.label},{extra:E(()=>[n.value.length>1?(b(),ae(r(W),{key:0,size:"sm",onClick:p=>o(m)},{default:E(()=>[K($(r(z)()?"删除":"Remove"),1)]),_:1},8,["onClick"])):I("",!0)]),default:E(()=>[U(r(rt),{placeholder:r(z)()?"请输入":"Enter value"},null,8,["placeholder"])]),_:2},1032,["name","label"]))),128)),U(r(At),null,{default:E(()=>[U(r(W),{type:"primary",onClick:l},{default:E(()=>[K($(r(z)()?"添加字段":"Add Field"),1)]),_:1})]),_:1})]),_:1},512))}}),n8={class:"demo-column"},a8={style:{display:"flex",gap:"16px","align-items":"center","margin-bottom":"8px"}},l8=M({__name:"layout",setup(e){const t=q(!1),n=q("right");return(a,l)=>(b(),C("div",n8,[w("div",a8,[w("label",null,$(r(z)()?"禁用表单":"Disabled"),1),U(r(Zt),{value:t.value,"onUpdate:value":l[0]||(l[0]=o=>t.value=o)},null,8,["value"]),w("label",null,$(r(z)()?"标签位置":"Label"),1),U(r(Zt),{value:n.value==="top","checked-text":r(z)()?"顶部":"Top","unchecked-text":r(z)()?"右":"Right",onChange:l[1]||(l[1]=o=>n.value=o?"top":"right")},null,8,["value","checked-text","unchecked-text"])]),U(r(Dr),{disabled:t.value,"label-position":n.value,"initial-values":{name:"Alice",email:"alice@test.com"}},{actions:E(()=>[U(r(W),{type:"primary",disabled:t.value},{default:E(()=>[K($(r(z)()?"保存":"Save"),1)]),_:1},8,["disabled"])]),default:E(()=>[U(r(At),{name:"name",label:r(z)()?"姓名":"Name"},{default:E(()=>[U(r(rt))]),_:1},8,["label"]),U(r(At),{name:"email",label:r(z)()?"邮箱":"Email"},{default:E(()=>[U(r(rt))]),_:1},8,["label"]),U(r(At),{name:"bio",label:r(z)()?"简介":"Bio"},{default:E(()=>[U(r(rt),{type:"search",placeholder:r(z)()?"一句话介绍自己":"Describe yourself"},null,8,["placeholder"])]),_:1},8,["label"])]),_:1},8,["disabled","label-position"])]))}});function o8(){const e=oe(),t=B.useRef(null),n=a=>{alert(e?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return u.jsxs(sc,{ref:t,initialValues:{username:"",email:""},rules:{username:[{type:"required",message:e?"请输入用户名":"Username is required"}],email:[{type:"required",message:e?"请输入邮箱":"Email is required"},{type:"email",message:e?"邮箱格式不正确":"Invalid email format"}]},onSubmit:n,children:[u.jsx(Bt,{name:"username",label:e?"用户名":"Username",children:u.jsx(ut,{placeholder:e?"请输入用户名":"Enter username"})}),u.jsx(Bt,{name:"email",label:e?"邮箱":"Email",children:u.jsx(ut,{placeholder:e?"请输入邮箱":"Enter email"})}),u.jsxs("div",{className:"xui-form__actions",children:[u.jsx(ee,{type:"primary",onClick:()=>{var a;return(a=t.current)==null?void 0:a.submit()},children:e?"提交":"Submit"}),u.jsx(ee,{onClick:()=>{var a;return(a=t.current)==null?void 0:a.resetFields()},children:e?"重置":"Reset"})]})]})}function i8(){const e=oe(),t=B.useRef(null),n=a=>{alert(e?`提交成功：${JSON.stringify(a)}`:`Submitted: ${JSON.stringify(a)}`)};return u.jsxs(sc,{ref:t,initialValues:{name:"",email:"",phone:"",password:"",confirm:"",type:"personal",company:""},rules:{name:[{type:"required",message:e?"姓名必填":"Name is required"}],email:[{type:"required",message:e?"邮箱必填":"Email is required"},{type:"email",message:e?"邮箱格式不正确":"Invalid email format"}],phone:[{type:"required",message:e?"手机号必填":"Phone is required"},{type:"phone",message:e?"手机号格式不正确":"Invalid phone number"}],password:[{type:"required",message:e?"密码必填":"Password is required"},{type:"length",min:6,message:e?"密码至少6位":"Password must be 6+ chars"}],confirm:[{type:"required",message:e?"请确认密码":"Please confirm password"},{type:"custom",message:e?"两次密码不一致":"Passwords do not match",validator:(a,l)=>l.password===l.confirm}],company:[{type:"required",when:a=>a.type==="enterprise",message:e?"企业名称必填":"Company name is required"}]},onSubmit:n,children:[u.jsx(Bt,{name:"name",label:e?"姓名":"Name",children:u.jsx(ut,{placeholder:e?"请输入姓名":"Enter name"})}),u.jsx(Bt,{name:"email",label:e?"邮箱":"Email",children:u.jsx(ut,{placeholder:e?"请输入邮箱":"Enter email"})}),u.jsx(Bt,{name:"phone",label:e?"手机号":"Phone",children:u.jsx(ut,{placeholder:e?"请输入手机号":"Enter phone"})}),u.jsx(Bt,{name:"type",label:e?"类型":"Type",children:u.jsx(Gn,{options:[{label:e?"个人":"Personal",value:"personal"},{label:e?"企业":"Enterprise",value:"enterprise"}]})}),u.jsx(Bt,{name:"company",label:e?"公司":"Company",children:u.jsx(ut,{placeholder:e?"企业用户必填":"Required for enterprise"})}),u.jsx(Bt,{name:"password",label:e?"密码":"Password",children:u.jsx(ut,{type:"password",placeholder:e?"至少6位":"At least 6 chars"})}),u.jsx(Bt,{name:"confirm",label:e?"确认密码":"Confirm",children:u.jsx(ut,{type:"password",placeholder:e?"再输一次":"Re-enter password"})}),u.jsxs("div",{className:"xui-form__actions",children:[u.jsx(ee,{type:"primary",onClick:()=>{var a;return(a=t.current)==null?void 0:a.submit()},children:e?"提交":"Submit"}),u.jsx(ee,{onClick:()=>{var a;return(a=t.current)==null?void 0:a.resetFields()},children:e?"重置":"Reset"})]})]})}function s8(){const e=oe(),t=B.useRef(null),[n,a]=B.useState([{key:0,label:e?"联系人 1":"Contact 1"}]),[l,o]=B.useState(1),i=()=>{const d=l+1;o(d),a(m=>[...m,{key:d,label:e?`联系人 ${m.length+1}`:`Contact ${m.length+1}`}])},s=d=>{a(m=>m.filter((p,h)=>h!==d))},c=d=>{alert(e?`提交成功：${JSON.stringify(d)}`:`Submitted: ${JSON.stringify(d)}`)};return u.jsxs(sc,{ref:t,initialValues:{},onSubmit:c,children:[n.map((d,m)=>u.jsxs(Bt,{name:`contact_${d.key}`,label:d.label,children:[u.jsx(ut,{placeholder:e?"请输入":"Enter value"}),u.jsx("div",{className:"xui-form-item__extra",children:u.jsx(ee,{size:"sm",onClick:()=>s(m),children:e?"删除":"Remove"})})]},d.key)),u.jsx(Bt,{children:u.jsx(ee,{type:"primary",onClick:i,children:e?"添加字段":"Add Field"})}),u.jsxs("div",{className:"xui-form__actions",children:[u.jsx(ee,{type:"primary",onClick:()=>{var d;return(d=t.current)==null?void 0:d.submit()},children:e?"提交":"Submit"}),u.jsx(ee,{onClick:()=>{var d;return(d=t.current)==null?void 0:d.resetFields()},children:e?"重置":"Reset"})]})]})}function r8(){const e=oe(),[t,n]=B.useState(!1),[a,l]=B.useState("right");return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",marginBottom:8},children:[u.jsx("label",{children:e?"禁用表单":"Disabled"}),u.jsx(jt,{value:t,onChange:n}),u.jsx("label",{children:e?"标签位置":"Label"}),u.jsx(jt,{value:a==="top",checkedText:e?"顶部":"Top",uncheckedText:e?"右":"Right",onChange:o=>l(o?"top":"right")})]}),u.jsxs(sc,{disabled:t,labelPosition:a,initialValues:{name:"Alice",email:"alice@test.com"},children:[u.jsx(Bt,{name:"name",label:e?"姓名":"Name",children:u.jsx(ut,{})}),u.jsx(Bt,{name:"email",label:e?"邮箱":"Email",children:u.jsx(ut,{})}),u.jsx(Bt,{name:"bio",label:e?"简介":"Bio",children:u.jsx(ut,{type:"search",placeholder:e?"一句话介绍自己":"Describe yourself"})}),u.jsx("div",{className:"xui-form__actions",children:u.jsx(ee,{type:"primary",disabled:t,children:e?"保存":"Save"})})]})]})}const c8=`<script setup lang="ts">
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
`,u8=`<script setup lang="ts">
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
`,d8=`<script setup lang="ts">
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
`,p8=`<script setup lang="ts">
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
`,m8=`import { useRef } from 'react';
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
`,h8=`import { useRef } from 'react';
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
`,f8=`import { useRef, useState } from 'react';
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
`,v8=`import { useState } from 'react';
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
`,g8={name:"Form",slug:"form",title:"表单",category:"form",summary:{"zh-CN":"功能完整的表单容器组件，支持字段注册、同步/异步校验、跨字段关联、条件校验、动态增删字段，以及禁用/只读/标签布局等场景。","en-US":"A full-featured form container with field registration, sync/async validation, cross-field rules, conditional validation, dynamic add/remove fields, and disabled/readonly/label layout support."},features:[{"zh-CN":"Form + FormItem 复合容器，通过 provide/inject（Vue）或 Context（React）自动连接","en-US":"Form + FormItem compound container; auto-connected via provide/inject (Vue) or Context (React)"},{"zh-CN":"FormItem 通过 VNode 克隆自动注入 value / onChange / onBlur，子组件无需手动绑定","en-US":"FormItem auto-injects value / onChange / onBlur via VNode cloning; no manual binding needed"},{"zh-CN":"内置校验规则：required / email / phone / number / length / regex / url / custom","en-US":"Built-in validators: required / email / phone / number / length / regex / url / custom"},{"zh-CN":"支持同步与异步校验、条件校验（when）、跨字段关联校验（validator 可访问全部值）","en-US":"Sync and async validation, conditional rules (when), cross-field validation (validator receives all values)"},{"zh-CN":"校验触发时机：change / blur / submit，可在规则级与表单级配置","en-US":"Validation triggers: change / blur / submit, configurable at rule and form level"},{"zh-CN":"通过 ref 暴露 validate / resetFields / getFieldValue / setFieldValue / clearValidate / submit 等命令式 API","en-US":"Imperative API via ref: validate / resetFields / getFieldValue / setFieldValue / clearValidate / submit"},{"zh-CN":"支持表单禁用、只读、标签位置（left / right / top）、标签宽度自定义","en-US":"Form-level disabled, readonly, label position (left / right / top), and custom label width"}],scenarios:[{"zh-CN":"注册表单、设置表单、多步表单、条件表单、动态字段表单等场景。","en-US":"Registration forms, settings forms, multi-step forms, conditional forms, dynamic field forms."}],demos:[{id:"basic",title:{"zh-CN":"基础用法","en-US":"Basic Usage"},description:{"zh-CN":"使用 Form + FormItem 组合，配置 rules 校验，提交后触发回调。","en-US":"Compose Form + FormItem, configure rules for validation, and handle submit callback."},vueComponent:WZ,reactComponent:o8,vueSource:c8,reactSource:m8},{id:"validation",title:{"zh-CN":"复杂校验","en-US":"Complex Validation"},description:{"zh-CN":"内置规则（required/email/phone/length）、跨字段关联（密码确认）、条件校验（when）。","en-US":"Built-in rules (required/email/phone/length), cross-field validation (password confirm), conditional rules (when)."},vueComponent:e8,reactComponent:i8,vueSource:u8,reactSource:h8},{id:"dynamic",title:{"zh-CN":"动态增删字段","en-US":"Dynamic Fields"},description:{"zh-CN":"通过 v-for 循环渲染 FormItem，动态增删字段列表。","en-US":"Render FormItems via v-for loop, dynamically add/remove field items."},vueComponent:t8,reactComponent:s8,vueSource:d8,reactSource:f8},{id:"layout",title:{"zh-CN":"禁用 / 标签布局","en-US":"Disabled / Label Layout"},description:{"zh-CN":"disabled 禁用全部字段，labelPosition 切换标签位置（left / right / top）。","en-US":"disabled disables all fields, labelPosition toggles label position (left / right / top)."},vueComponent:l8,reactComponent:r8,vueSource:p8,reactSource:v8}],api:{props:[{name:"initialValues",type:"Record<string, unknown>",default:"{}",description:{"zh-CN":"表单初始值（非受控模式下的字段初始值）","en-US":"Form initial values (non-controlled initial field values)"}},{name:"rules",type:"Record<string, ValidationRule[]>",default:"—",description:{"zh-CN":"字段级校验规则映射（key 为字段名）","en-US":"Field-level validation rules map (key is field name)"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"全局禁用","en-US":"Disable all fields"}},{name:"readonly",type:"boolean",default:"false",description:{"zh-CN":"全局只读","en-US":"Readonly for all fields"}},{name:"labelWidth",type:"string | number",default:"—",description:{"zh-CN":"标签宽度（数值按 px，字符串原样输出）","en-US":"Label width (number as px, string as-is)"}},{name:"labelPosition",type:"'left' | 'right' | 'top'",default:"'right'",description:{"zh-CN":"标签位置","en-US":"Label position"}},{name:"validateTrigger",type:"'change' | 'blur' | 'submit' | Array",default:"—",description:{"zh-CN":"校验触发时机","en-US":"Validation trigger timing"}},{name:"scrollToFirstError",type:"boolean",default:"false",description:{"zh-CN":"校验失败时滚动到第一个错误字段","en-US":"Scroll to first error field on validation failure"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"自定义类名","en-US":"Custom class name"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"自定义样式","en-US":"Custom styles"}}],events:[{vue:"submit",react:"onSubmit",payload:"FormValues",description:{"zh-CN":"提交（校验通过后）","en-US":"Submit (after validation passes)"}},{vue:"submitFail",react:"onSubmitFail",payload:"FormErrors",description:{"zh-CN":"校验失败","en-US":"Validation failed"}},{vue:"valuesChange",react:"onValuesChange",payload:"(changed, all)",description:{"zh-CN":"字段值变更","en-US":"Field value changed"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"表单内容（FormItem 列表）","en-US":"Form content (FormItem list)"}},{vue:"actions",react:"—",description:{"zh-CN":"底部操作区域","en-US":"Bottom actions area"}}],methods:[{name:"validate",signature:"(trigger?: ValidationTrigger) => Promise<FormValidationResult>",description:{"zh-CN":"校验全部字段","en-US":"Validate all fields"}},{name:"validateField",signature:"(name: string, trigger?) => Promise<string[]>",description:{"zh-CN":"校验指定字段","en-US":"Validate a specific field"}},{name:"getFieldValue",signature:"(name: string) => unknown",description:{"zh-CN":"获取字段值","en-US":"Get field value"}},{name:"getFieldsValue",signature:"() => FormValues",description:{"zh-CN":"获取全部字段值","en-US":"Get all field values"}},{name:"setFieldValue",signature:"(name: string, value: unknown) => void",description:{"zh-CN":"设置字段值","en-US":"Set field value"}},{name:"setFieldsValue",signature:"(values: FormValues) => void",description:{"zh-CN":"批量设置字段值","en-US":"Batch set field values"}},{name:"resetFields",signature:"(names?: string[]) => void",description:{"zh-CN":"重置字段","en-US":"Reset fields"}},{name:"clearValidate",signature:"(names?: string[]) => void",description:{"zh-CN":"清除校验错误","en-US":"Clear validation errors"}},{name:"submit",signature:"() => Promise<FormValidationResult>",description:{"zh-CN":"提交表单","en-US":"Submit the form"}}],types:[{name:"ValidationRule",definition:`type ValidationRule = {
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
}`,description:{"zh-CN":"FormItem 属性","en-US":"FormItem props"}}]},notes:[{"zh-CN":'FormItem 通过 VNode 克隆自动注入 value 和事件，无需手动绑定——只需用 <FormItem name="xxx"> 包裹子组件即可。',"en-US":'FormItem auto-injects value and events via VNode cloning—no manual binding needed. Just wrap child components with <FormItem name="xxx">.'},{"zh-CN":"所有 XUI 表单组件（Input / Select / Checkbox / Switch / DatePicker 等）统一使用 value 作为受控 prop，因此 FormItem 可自动注入。","en-US":"All XUI form components (Input / Select / Checkbox / Switch / DatePicker) use value as the controlled prop, enabling auto-injection."},{"zh-CN":"submit 触发时机执行所有规则（忽略 trigger 过滤）；change / blur 仅执行匹配的规则。","en-US":"submit executes all rules (bypasses trigger filter); change / blur only execute matching rules."},{"zh-CN":"rules 可在 Form 级和 FormItem 级同时配置，合并执行（FormItem 规则优先在前）。","en-US":"rules can be configured at both Form and FormItem level; merged with FormItem rules first."}],a11y:[{"zh-CN":"渲染为原生 <form> 元素，标签使用 <label> 包裹，保留原生提交行为。","en-US":"Renders as a native <form> element with <label> wrapping, preserving native submit behavior."}]},b8={class:"demo-column"},y8={class:"demo-text"},S8=M({__name:"basic",setup(e){const t=q([]),n=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin",disabled:!0}]}];return(a,l)=>(b(),C("div",b8,[U(r(Fd),{value:t.value,"onUpdate:value":l[0]||(l[0]=o=>t.value=o),options:n,clearable:""},null,8,["value"]),w("p",y8,$(r(z)()?`选中值：${JSON.stringify(t.value)}`:`Value: ${JSON.stringify(t.value)}`),1)]))}}),x8={class:"demo-column"},C8={class:"demo-text"},_8=M({__name:"state",setup(e){const t=q(["east","hangzhou"]),n=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin"}]}];return(a,l)=>(b(),C("div",x8,[U(r(Fd),{value:t.value,"onUpdate:value":l[0]||(l[0]=o=>t.value=o),options:n,"change-on-select":"",separator:" > ",placeholder:"选择任意层级"},null,8,["value"]),w("p",C8,$(r(z)()?'changeOnSelect：选中任意层级即触发，分隔符为 " > "':'changeOnSelect: select any level to trigger, separator " > "'),1)]))}}),k8={class:"demo-column"},w8={class:"demo-text"},N8=M({__name:"multiple",setup(e){const t=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"},{label:"南京",value:"nanjing"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin",disabled:!0}]}],n=q([]);return(a,l)=>(b(),C("div",k8,[U(r(Fd),{value:n.value,"onUpdate:value":l[0]||(l[0]=o=>n.value=o),options:t,multiple:"",clearable:"",placeholder:"请选择（可多选）"},null,8,["value"]),w("p",w8,"已选路径："+$(JSON.stringify(n.value)),1)]))}}),T8=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin",disabled:!0}]}];function z8(){const e=oe(),[t,n]=B.useState([]);return u.jsxs("div",{className:"demo-column",children:[u.jsx(em,{value:t,onChange:a=>n(a),options:T8,clearable:!0}),u.jsx("p",{className:"demo-text",children:e?`选中值：${JSON.stringify(t)}`:`Value: ${JSON.stringify(t)}`})]})}const U8=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin"}]}];function $8(){const e=oe(),[t,n]=B.useState(["east","hangzhou"]);return u.jsxs("div",{className:"demo-column",children:[u.jsx(em,{value:t,onChange:a=>n(a),options:U8,changeOnSelect:!0,separator:" > ",placeholder:"选择任意层级"}),u.jsx("p",{className:"demo-text",children:e?'changeOnSelect：选中任意层级即触发，分隔符为 " > "':'changeOnSelect: select any level to trigger, separator " > "'})]})}const E8=[{label:"华东",value:"east",children:[{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"},{label:"南京",value:"nanjing"}]},{label:"华北",value:"north",children:[{label:"北京",value:"beijing"},{label:"天津",value:"tianjin",disabled:!0}]}];function A8(){const[e,t]=B.useState([]);return u.jsxs("div",{className:"demo-column",children:[u.jsx(em,{value:e,onChange:n=>t(n),options:E8,multiple:!0,clearable:!0,placeholder:"请选择（可多选）"}),u.jsxs("p",{className:"demo-text",children:["已选路径：",JSON.stringify(e)]})]})}const R8=`<script setup lang="ts">
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
`,B8=`<script setup lang="ts">
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
`,O8=`<script setup lang="ts">
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
`,Z8=`import { useState } from 'react';
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
`,j8=`import { useState } from 'react';
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
`,D8=`import { useState } from 'react';
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
`,M8={name:"Cascader",slug:"cascader",title:"级联选择",category:"form",summary:{"zh-CN":"从逐级展开的树形选项中选择一条路径，支持选到叶子或任意层级即触发。","en-US":"Pick a path from a progressively expanding tree of options, either requiring a leaf or firing on any level."},features:[{"zh-CN":"受控 / 非受控双模式，值为 string[]（从根到选中节点的值路径），Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; the value is a string[] (the value path from root to the selected node); supports v-model:value on Vue"},{"zh-CN":"树形 options：通过 children 递归定义层级，叶子节点无 children","en-US":"Tree-shaped options: levels are defined recursively via children; leaf nodes have no children"},{"zh-CN":"changeOnSelect 选中任意层级即触发 onChange（默认需选到叶子节点）","en-US":"changeOnSelect fires onChange on any selected level (the default requires selecting a leaf)"},{"zh-CN":'separator 自定义路径展示分隔符（默认 " / "）；clearable 已选中时显示清空按钮',"en-US":'separator customizes the path display separator (default " / "); clearable shows a clear button when a value is selected'},{"zh-CN":"disabled 整体禁用；选项可单独禁用（disabled: true）","en-US":"disabled disables the whole component; individual options can be disabled via disabled: true"},{"zh-CN":"multiple 多选模式：value 为 string[][]，支持级联勾选（父子联动）、半选状态、全选/清空、标签管理","en-US":"multiple mode: value is string[][]; supports cascaded checking (parent-child linkage), indeterminate state, check all / clear, and tag management"},{"zh-CN":"checkStrictly 允许多选时选到任意层级（默认仅叶子节点可勾选）","en-US":"checkStrictly allows selecting any level in multiple mode (the default only allows leaf nodes)"}],scenarios:[{"zh-CN":"省市区、分类目录等具有层级关系的选择场景。","en-US":"Hierarchical selection such as province / city / district or category trees."}],demos:[{id:"basic",title:{"zh-CN":"基础用法","en-US":"Basic"},description:{"zh-CN":"树形 options，选到叶子节点触发 onChange；支持 clearable 与单项 disabled。","en-US":"Tree-shaped options; selecting a leaf fires onChange; supports clearable and per-option disabled."},vueComponent:S8,reactComponent:z8,vueSource:R8,reactSource:Z8},{id:"state",title:{"zh-CN":"任意层级选中与分隔符","en-US":"Any-level Selection & Separator"},description:{"zh-CN":"changeOnSelect 选中任意层级即触发；separator 自定义路径分隔符。","en-US":"changeOnSelect fires on any level; separator customizes the path display separator."},vueComponent:_8,reactComponent:$8,vueSource:B8,reactSource:j8},{id:"multiple",title:{"zh-CN":"多选模式","en-US":"Multiple Selection"},description:{"zh-CN":"multiple 开启多选，value 为 string[][]；支持父子级联勾选、半选状态、全选/清空，已选项以标签展示可单独删除。","en-US":"multiple enables multi-select with value as string[][]; supports parent-child cascaded checking, indeterminate state, check all / clear, and removable tags for selected items."},vueComponent:N8,reactComponent:A8,vueSource:O8,reactSource:D8}],api:{props:[{name:"value",type:"string[] | string[][]",default:"—",description:{"zh-CN":"受控选中路径（单选 string[]，多选 string[][]；提供即受控）","en-US":"Controlled selected path (string[] for single, string[][] for multiple; controlled when provided)"}},{name:"defaultValue",type:"string[]",default:"—",description:{"zh-CN":"非受控初始选中路径","en-US":"Uncontrolled initial selected path"}},{name:"options",type:"CascaderOption[]",default:"—",required:!0,description:{"zh-CN":"树形选项数据","en-US":"Tree-shaped option data"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清空按钮（仅已选中时）","en-US":"Whether to show the clear button (only when a value is selected)"}},{name:"separator",type:"string",default:"' / '",description:{"zh-CN":"选中路径展示分隔符","en-US":"Separator for displaying the selected path"}},{name:"changeOnSelect",type:"boolean",default:"false",description:{"zh-CN":"是否选中任意层级即触发 onChange（默认需选到叶子节点）","en-US":"Whether firing onChange on any selected level (the default requires selecting a leaf)"}},{name:"multiple",type:"boolean",default:"false",description:{"zh-CN":"是否多选模式（value 为 string[][]，支持级联勾选与标签管理）","en-US":"Whether to enable multiple selection (value is string[][]; supports cascaded checking and tag management)"}},{name:"checkStrictly",type:"boolean",default:"false",description:{"zh-CN":"多选模式下是否允许选到任意层级（默认仅叶子节点可勾选）","en-US":"Whether to allow selecting any level in multiple mode (the default only allows leaf nodes)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式","en-US":"Custom inline styles appended to the root element"}},{name:"onChange",type:"(value: string[] | string[][], labels: string[] | string[][]) => void",default:"—",description:{"zh-CN":"选中值变更回调（单选时为路径+文案，多选时为路径数组+文案数组）","en-US":"Selected value change callback (path + labels for single; path array + label array for multiple)"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调","en-US":"Clear callback"}}],events:[{vue:"change",react:"onChange",payload:"value: string[], labels: string[]",description:{"zh-CN":"选中值变更（值路径与文案路径）","en-US":"Fired when the selected value changes (value path and label path)"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"清空选中值","en-US":"Fired when the selected value is cleared"}},{vue:"update:value",react:"—",payload:"string[]",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标","en-US":"Custom clear icon"}},{vue:"suffixIcon",react:"renderSuffixIcon",description:{"zh-CN":"自定义后缀（下拉箭头）图标","en-US":"Custom suffix (dropdown arrow) icon"}}],types:[{name:"CascaderOption",definition:`interface CascaderOption {
  label: string
  value: string
  children?: CascaderOption[]
  disabled?: boolean
}`,description:{"zh-CN":"级联选项（树形结构，叶子节点无 children）。","en-US":"A cascader option (tree-shaped; leaf nodes have no children)."}}]},notes:[{"zh-CN":'value 为值路径数组（如 ["east", "hangzhou"]）；空数组表示未选中。多选时 value 为 string[][]（如 [["east","hangzhou"], ["north","beijing"]]）。',"en-US":'value is a value-path array (e.g. ["east", "hangzhou"]); an empty array means nothing is selected. In multiple mode value is string[][] (e.g. [["east","hangzhou"], ["north","beijing"]]).'},{"zh-CN":"点击组件外部会收起面板；单选选中叶子节点后自动收起（changeOnSelect 时选中即收起）；多选面板保持展开。","en-US":"Clicking outside closes the panel; selecting a leaf auto-closes in single mode (any selection auto-closes in changeOnSelect mode); the panel stays open in multiple mode."},{"zh-CN":"多选模式下，勾选父节点会级联勾选所有可用后代叶子（禁用项不参与级联）；子级全选时父节点显示勾选，部分勾选时显示半选。存在未勾选的禁用子级时父级最多显示半选。checkStrictly=true 时取消级联，可勾选任意层级。","en-US":"In multiple mode, checking a parent cascades to all enabled descendant leaves (disabled options are excluded); the parent shows checked when all children are checked, indeterminate when partially checked. An unchecked disabled child caps the parent at indeterminate. checkStrictly=true disables cascading and allows any level."}],a11y:[{"zh-CN":"触发器 role=combobox，面板 role=dialog；Enter/Space 展开，Esc 收起。","en-US":"The trigger has role=combobox and the panel role=dialog; Enter/Space opens and Esc closes."}]},L8={class:"demo-column"},V8={class:"demo-text"},H8=M({__name:"basic",setup(e){const t=q("");return(n,a)=>(b(),C("div",L8,[U(r(Ev),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),clearable:""},null,8,["value"]),w("p",V8,$(r(z)()?`选中时间：${t.value||"（未选择）"}`:`Selected: ${t.value||"(none)"}`),1)]))}}),I8={class:"demo-column"},F8={class:"demo-text"},K8=M({__name:"state",setup(e){const t=q("09:30");return(n,a)=>(b(),C("div",I8,[U(r(Ev),{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),format:"HH:mm","hour-step":2,"minute-step":10,clearable:""},null,8,["value"]),w("p",F8,$(r(z)()?'format="HH:mm" 仅显示时分；hourStep=2，minuteStep=10':'format="HH:mm" shows hours & minutes only; hourStep=2, minuteStep=10'),1)]))}});function q8(){const e=oe(),[t,n]=B.useState("");return u.jsxs("div",{className:"demo-column",children:[u.jsx(nS,{value:t,onChange:n,clearable:!0}),u.jsx("p",{className:"demo-text",children:e?`选中时间：${t||"（未选择）"}`:`Selected: ${t||"(none)"}`})]})}function P8(){const e=oe(),[t,n]=B.useState("09:30");return u.jsxs("div",{className:"demo-column",children:[u.jsx(nS,{value:t,onChange:n,format:"HH:mm",hourStep:2,minuteStep:10,clearable:!0}),u.jsx("p",{className:"demo-text",children:e?'format="HH:mm" 仅显示时分；hourStep=2，minuteStep=10':'format="HH:mm" shows hours & minutes only; hourStep=2, minuteStep=10'})]})}const G8=`<script setup lang="ts">
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
`,Y8=`<script setup lang="ts">
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
`,X8=`import { useState } from 'react';
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
`,Q8=`import { useState } from 'react';
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
`,J8={name:"TimePicker",slug:"time-picker",title:"时间选择",category:"form",summary:{"zh-CN":"从时 / 分 / 秒三列面板中选择时间，值为 HH:mm:ss 格式字符串，支持步长与格式配置。","en-US":"Pick a time from hour / minute / second columns; the value is a HH:mm:ss string with configurable steps and format."},features:[{"zh-CN":"受控 / 非受控双模式，值为 HH:mm:ss 字符串，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; the value is a HH:mm:ss string; supports v-model:value on Vue"},{"zh-CN":"format 支持 HH:mm:ss（默认）与 HH:mm（隐藏秒列）","en-US":"format supports HH:mm:ss (default) and HH:mm (second column hidden)"},{"zh-CN":"hourStep / minuteStep / secondStep 自定义各列步长","en-US":"hourStep / minuteStep / secondStep customize each column step"},{"zh-CN":"clearable 已选中时显示清空按钮；disabled 整体禁用","en-US":"clearable shows a clear button when a value is selected; disabled disables the picker"},{"zh-CN":"确认-取消交互：面板内选择仅更新待选值，点击「确认」提交并收起，「取消」放弃修改","en-US":'Confirm-cancel interaction: picking in the panel only updates a pending value; "OK" commits and closes, "Cancel" discards'}],scenarios:[{"zh-CN":"需要精确选择时分秒的表单字段，如预约时间、日程时间。","en-US":"Form fields requiring precise hour / minute / second selection, such as appointments."}],demos:[{id:"basic",title:{"zh-CN":"基础用法","en-US":"Basic"},description:{"zh-CN":"默认 HH:mm:ss 格式，三列滚动选择，支持 clearable。","en-US":"Default HH:mm:ss format with three scrollable columns; supports clearable."},vueComponent:H8,reactComponent:q8,vueSource:G8,reactSource:X8},{id:"state",title:{"zh-CN":"格式与步长","en-US":"Format & Steps"},description:{"zh-CN":'format="HH:mm" 仅显示时分；hourStep=2，minuteStep=10。',"en-US":'format="HH:mm" shows hours & minutes only; hourStep=2, minuteStep=10.'},vueComponent:K8,reactComponent:P8,vueSource:Y8,reactSource:Q8}],api:{props:[{name:"value",type:"string",default:"—",description:{"zh-CN":"受控选中时间（HH:mm:ss，提供即受控）","en-US":"Controlled selected time (HH:mm:ss; controlled when provided)"}},{name:"defaultValue",type:"string",default:"—",description:{"zh-CN":"非受控初始时间（HH:mm:ss）","en-US":"Uncontrolled initial time (HH:mm:ss)"}},{name:"placeholder",type:"string",default:"—",description:{"zh-CN":"占位文案","en-US":"Placeholder text"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"clearable",type:"boolean",default:"false",description:{"zh-CN":"是否显示清空按钮（仅已选中时）","en-US":"Whether to show the clear button (only when a value is selected)"}},{name:"format",type:"'HH:mm:ss' | 'HH:mm'",default:"'HH:mm:ss'",description:{"zh-CN":"显示格式（HH:mm 不渲染秒列）","en-US":"Display format (HH:mm hides the second column)"}},{name:"hourStep",type:"number",default:"1",description:{"zh-CN":"小时步长（范围 1-23）","en-US":"Hour step (range 1-23)"}},{name:"minuteStep",type:"number",default:"1",description:{"zh-CN":"分钟步长（范围 1-59）","en-US":"Minute step (range 1-59)"}},{name:"secondStep",type:"number",default:"1",description:{"zh-CN":"秒步长（范围 1-59）","en-US":"Second step (range 1-59)"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式","en-US":"Custom inline styles appended to the root element"}},{name:"onChange",type:"(value: string) => void",default:"—",description:{"zh-CN":"选中值变更回调","en-US":"Selected value change callback"}},{name:"onClear",type:"() => void",default:"—",description:{"zh-CN":"清空回调","en-US":"Clear callback"}}],events:[{vue:"change",react:"onChange",payload:"value: string",description:{"zh-CN":"选中值变更","en-US":"Fired when the selected value changes"}},{vue:"clear",react:"onClear",payload:"—",description:{"zh-CN":"清空选中值","en-US":"Fired when the selected value is cleared"}},{vue:"update:value",react:"—",payload:"string",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"clearIcon",react:"renderClearIcon",description:{"zh-CN":"自定义清除图标","en-US":"Custom clear icon"}},{vue:"clockIcon",react:"renderClockIcon",description:{"zh-CN":"自定义时钟图标","en-US":"Custom clock icon"}}]},notes:[{"zh-CN":"值统一为 HH:mm:ss 字符串；当 format 为 HH:mm 时，秒固定为 00。","en-US":"The value is always a HH:mm:ss string; when format is HH:mm, the seconds are fixed to 00."},{"zh-CN":"面板内点击时间项仅更新待选值（高亮跟随），点击「确认」提交并收起面板、触发 onChange；点击「取消」、外部点击或 Esc 收起面板并放弃未确认的修改，重新展开时回退到已选值。","en-US":'Clicking a time item only updates the pending value (highlight follows); "OK" commits it, closes the panel, and fires onChange; "Cancel", clicking outside, or Esc closes the panel and discards uncommitted changes — reopening restores the selected value.'}],a11y:[{"zh-CN":"触发器 role=combobox，面板 role=dialog；Enter/Space 展开，Esc 收起。","en-US":"The trigger has role=combobox and the panel role=dialog; Enter/Space opens and Esc closes."}]},W8={class:"demo-column"},ej={class:"demo-text"},tj=M({__name:"basic",setup(e){const t=q([]),n=(a,l)=>new Promise(o=>{let i=0;const s=setInterval(()=>{i+=20,l.onProgress(Math.min(i,100)),i>=100&&(clearInterval(s),o({url:`https://example.com/${a.name}`}))},200)});return(a,l)=>(b(),C("div",W8,[U(r(Kd),{value:t.value,"onUpdate:value":l[0]||(l[0]=o=>t.value=o),action:"/upload","request-upload":n,multiple:""},null,8,["value"]),w("p",ej,$(r(z)()?`文件数：${t.value.length}`:`File count: ${t.value.length}`),1)]))}}),nj={class:"demo-column"},aj={class:"demo-text"},lj=M({__name:"state",setup(e){const t=q([]),n=(l,o)=>new Promise(i=>{let s=0;const c=setInterval(()=>{s+=25,o.onProgress(Math.min(s,100)),s>=100&&(clearInterval(c),i({url:`https://example.com/${l.name}`}))},200)}),a=l=>l.type.startsWith("image/");return(l,o)=>(b(),C("div",nj,[U(r(Kd),{value:t.value,"onUpdate:value":o[0]||(o[0]=i=>t.value=i),action:"/upload","request-upload":n,"list-type":"picture",accept:"image/*","max-count":3,"before-upload":a},null,8,["value"]),w("p",aj,$(r(z)()?'listType="picture" 图片列表；accept 限制图片；maxCount=3；beforeUpload 校验类型':'listType="picture" image list; accept restricts to images; maxCount=3; beforeUpload validates type'),1)]))}}),oj={class:"demo-column"},ij=M({__name:"manual",setup(e){const t=(a,l)=>new Promise((o,i)=>{let s=0;const c=setInterval(()=>{var d;if((d=l.signal)!=null&&d.aborted){clearInterval(c),i(new DOMException("Aborted","AbortError"));return}s+=Math.random()*20+5,s>=100&&(s=100,clearInterval(c),Math.random()>.2?o({url:`https://example.com/${a.name}`,response:{ok:!0}}):i(new Error("模拟上传失败"))),l.onProgress(Math.min(Math.round(s),100))},300)}),n=q([]);return(a,l)=>(b(),C("div",oj,[U(r(Kd),{value:n.value,"onUpdate:value":l[0]||(l[0]=o=>n.value=o),action:"/upload",multiple:"","auto-upload":!1,"request-upload":t},null,8,["value"]),l[1]||(l[1]=w("p",{class:"demo-text"},"autoUpload=false：选中文件后进入「待上传」状态，点击「开始上传」手动触发。",-1))]))}}),sj=(e,t)=>new Promise(n=>{let a=0;const l=setInterval(()=>{a+=20,t.onProgress(Math.min(a,100)),a>=100&&(clearInterval(l),n({url:`https://example.com/${e.name}`}))},200)});function rj(){const e=oe(),[t,n]=B.useState([]);return u.jsxs("div",{className:"demo-column",children:[u.jsx(tm,{value:t,onChange:n,action:"/upload",requestUpload:sj,multiple:!0}),u.jsx("p",{className:"demo-text",children:e?`文件数：${t.length}`:`File count: ${t.length}`})]})}const cj=(e,t)=>new Promise(n=>{let a=0;const l=setInterval(()=>{a+=25,t.onProgress(Math.min(a,100)),a>=100&&(clearInterval(l),n({url:`https://example.com/${e.name}`}))},200)}),uj=e=>e.type.startsWith("image/");function dj(){const e=oe(),[t,n]=B.useState([]);return u.jsxs("div",{className:"demo-column",children:[u.jsx(tm,{value:t,onChange:n,action:"/upload",requestUpload:cj,listType:"picture",accept:"image/*",maxCount:3,beforeUpload:uj}),u.jsx("p",{className:"demo-text",children:e?'listType="picture" 图片列表；accept 限制图片；maxCount=3；beforeUpload 校验类型':'listType="picture" image list; accept restricts to images; maxCount=3; beforeUpload validates type'})]})}const pj=(e,t)=>new Promise((n,a)=>{let l=0;const o=setInterval(()=>{var i;if((i=t.signal)!=null&&i.aborted){clearInterval(o),a(new DOMException("Aborted","AbortError"));return}l+=Math.random()*20+5,l>=100&&(clearInterval(o),Math.random()>.2?n({url:`https://example.com/${e.name}`,response:{ok:!0}}):a(new Error("模拟上传失败"))),t.onProgress(Math.min(Math.round(l),100))},300)});function mj(){const[e,t]=B.useState([]);return u.jsxs("div",{className:"demo-column",children:[u.jsx(tm,{value:e,onChange:t,action:"/upload",multiple:!0,autoUpload:!1,requestUpload:pj}),u.jsx("p",{className:"demo-text",children:"autoUpload=false：选中文件后进入「待上传」状态，点击「开始上传」手动触发。"})]})}const hj=`<script setup lang="ts">
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
`,fj=`<script setup lang="ts">
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
`,vj=`<script setup lang="ts">
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
`,gj=`import { useState } from 'react';
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
`,bj=`import { useState } from 'react';
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
`,yj=`import { useState } from 'react';
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
`,Sj={name:"Upload",slug:"upload",title:"文件上传",category:"form",summary:{"zh-CN":"通过点击选择文件并上传，支持多文件、数量 / 大小限制、图片列表展示与上传前校验。","en-US":"Select and upload files by clicking; supports multiple files, count / size limits, picture list display, and pre-upload validation."},features:[{"zh-CN":"受控 / 非受控双模式，值为 UploadFile[]，Vue 端支持 v-model:value","en-US":"Controlled and uncontrolled modes; the value is UploadFile[]; supports v-model:value on Vue"},{"zh-CN":"action 上传地址；requestUpload 可覆盖默认 XMLHttpRequest 实现（便于 SSR 或自定义请求）","en-US":"action is the upload URL; requestUpload can override the default XMLHttpRequest (useful for SSR or custom requests)"},{"zh-CN":"multiple 多选；maxCount 限制文件数；maxSize 限制单文件大小","en-US":"multiple for multi-file; maxCount limits the file count; maxSize limits each file size"},{"zh-CN":"listType 支持 text（默认）与 picture（缩略图列表）","en-US":"listType supports text (default) and picture (thumbnail list)"},{"zh-CN":"beforeUpload 返回 false / reject 时中止上传；accept 限制可选文件类型","en-US":"beforeUpload returning false / a rejected promise aborts the upload; accept restricts selectable file types"},{"zh-CN":"autoUpload=false 时文件进入「待上传」状态，通过 submit() 或「开始上传」按钮手动触发","en-US":'When autoUpload=false, files enter a "pending" state and are uploaded manually via submit() or the "Start Upload" button'},{"zh-CN":"上传中可取消（cancel），状态变为 cancelled；列表项支持上移/下移排序","en-US":"In-progress uploads can be cancelled (status becomes cancelled); list items support move up / down ordering"},{"zh-CN":"上传中实时显示进度百分比、上传速率（KB/s、MB/s）与预估剩余时间","en-US":"Displays real-time progress percentage, upload speed (KB/s, MB/s), and estimated remaining time during upload"},{"zh-CN":"完整状态机：pending / uploading / done / error / cancelled","en-US":"Full state machine: pending / uploading / done / error / cancelled"}],scenarios:[{"zh-CN":"表单中需要上传附件、图片等文件的场景。","en-US":"Form scenarios requiring file uploads such as attachments and images."}],demos:[{id:"basic",title:{"zh-CN":"基础上传","en-US":"Basic Upload"},description:{"zh-CN":"点击选择文件后自动上传（示例使用模拟 requestUpload），支持多选。","en-US":"Files upload automatically after selection (the demo uses a mocked requestUpload); multiple selection supported."},vueComponent:tj,reactComponent:rj,vueSource:hj,reactSource:gj},{id:"state",title:{"zh-CN":"图片列表与上传前校验","en-US":"Picture List & Pre-upload Validation"},description:{"zh-CN":'listType="picture" 展示缩略图；beforeUpload 仅允许图片；maxCount 限制数量。',"en-US":'listType="picture" shows thumbnails; beforeUpload allows only images; maxCount limits the count.'},vueComponent:lj,reactComponent:dj,vueSource:fj,reactSource:bj},{id:"manual",title:{"zh-CN":"手动上传 / 取消 / 排序 / 速率","en-US":"Manual Upload / Cancel / Order / Speed"},description:{"zh-CN":"autoUpload=false 时文件进入待上传状态，可手动开始上传；上传中可取消、可排序，实时显示速率与剩余时间。","en-US":"With autoUpload=false files stay pending until manually started; in-progress uploads can be cancelled and reordered, with real-time speed and remaining time displayed."},vueComponent:ij,reactComponent:mj,vueSource:vj,reactSource:yj}],api:{props:[{name:"action",type:"string",default:"—",required:!0,description:{"zh-CN":"上传地址","en-US":"Upload URL"}},{name:"accept",type:"string",default:"—",description:{"zh-CN":"接受的文件类型（input accept）","en-US":"Accepted file types (input accept)"}},{name:"multiple",type:"boolean",default:"false",description:{"zh-CN":"是否多选","en-US":"Whether to allow multiple files"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用状态","en-US":"Disabled state"}},{name:"maxCount",type:"number",default:"—",description:{"zh-CN":"最大文件数（超出则忽略多余）","en-US":"Maximum file count (excess files are ignored)"}},{name:"maxSize",type:"number",default:"—",description:{"zh-CN":"单文件最大字节数（超出则报错不上传）","en-US":"Maximum size per file in bytes (excess files are rejected)"}},{name:"listType",type:"'text' | 'picture'",default:"'text'",description:{"zh-CN":"文件列表展示样式","en-US":"File list display style"}},{name:"autoUpload",type:"boolean",default:"true",description:{"zh-CN":"是否自动上传；false 时文件进入 pending，由 submit() 手动触发","en-US":"Whether to upload automatically; when false, files stay pending and are uploaded via submit()"}},{name:"requestUpload",type:"RequestUploadFn",default:"默认 XMLHttpRequest",description:{"zh-CN":"自定义上传请求（覆盖默认 XMLHttpRequest 实现）","en-US":"Custom upload request (overrides the default XMLHttpRequest implementation)"}},{name:"beforeUpload",type:"(file: File) => boolean | Promise<boolean>",default:"—",description:{"zh-CN":"上传前钩子：返回 false / reject 中止上传","en-US":"Pre-upload hook: returning false / a rejected promise aborts the upload"}},{name:"value",type:"UploadFile[]",default:"—",description:{"zh-CN":"受控文件列表","en-US":"Controlled file list"}},{name:"defaultValue",type:"UploadFile[]",default:"—",description:{"zh-CN":"非受控初始文件列表","en-US":"Uncontrolled initial file list"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式","en-US":"Custom inline styles appended to the root element"}},{name:"onChange",type:"(fileList: UploadFile[]) => void",default:"—",description:{"zh-CN":"文件列表变更回调","en-US":"File list change callback"}},{name:"onRemove",type:"(file: UploadFile) => void",default:"—",description:{"zh-CN":"删除文件回调","en-US":"File remove callback"}}],events:[{vue:"change",react:"onChange",payload:"fileList: UploadFile[]",description:{"zh-CN":"文件列表变更","en-US":"Fired when the file list changes"}},{vue:"remove",react:"onRemove",payload:"file: UploadFile",description:{"zh-CN":"删除文件","en-US":"Fired when a file is removed"}},{vue:"update:value",react:"—",payload:"UploadFile[]",description:{"zh-CN":"v-model:value 回写","en-US":"Write-back for v-model:value"}}],slots:[{vue:"trigger",react:"renderTrigger",description:{"zh-CN":"自定义上传按钮内容","en-US":"Custom upload trigger content"}},{vue:"fileItem",react:"renderFileItem",description:{"zh-CN":"自定义文件列表项（作用域参数：file）","en-US":"Custom file list item (scoped param: file)"}}],types:[{name:"UploadFile",definition:`interface UploadFile {
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
) => Promise<{ url?: string; response?: unknown }>`,description:{"zh-CN":"自定义上传请求函数签名；signal 用于支持取消上传。","en-US":"Signature of a custom upload request function; signal supports cancelling the upload."}}]},notes:[{"zh-CN":"默认使用 XMLHttpRequest 上传；SSR 或非浏览器环境需通过 requestUpload 提供实现。","en-US":"The default uses XMLHttpRequest; for SSR or non-browser environments, provide an implementation via requestUpload."},{"zh-CN":"beforeUpload 返回 false 或 reject 的 Promise 时，文件不会进入上传流程。","en-US":"When beforeUpload returns false or a rejected promise, the file does not enter the upload flow."},{"zh-CN":"maxCount 限制文件总数（含已上传），超出部分直接忽略；maxSize 超限的文件标记为 error 不上传。","en-US":"maxCount limits the total file count (including uploaded); excess files are ignored. Files exceeding maxSize are marked as error and not uploaded."},{"zh-CN":"autoUpload=false 时，文件进入 pending 状态，需调用 submit() 或点击「开始上传」触发；cancelled 状态的文件需删除后重新选择。","en-US":'When autoUpload=false, files enter pending state and require submit() or the "Start Upload" button; cancelled files must be removed and re-selected.'}],a11y:[{"zh-CN":"上传触发区域为可聚焦的原生按钮，禁用状态透传 disabled。","en-US":"The upload trigger is a focusable native button; the disabled state passes through the disabled attribute."}]},xj={class:"demo-column"},Cj={class:"demo-text"},_j=M({__name:"basic",setup(e){const t=q(null),n=[{key:"src",label:"src",children:[{key:"components",label:"components",children:[{key:"button",label:"Button.vue"},{key:"input",label:"Input.vue"}]},{key:"main",label:"main.ts"}]},{key:"readme",label:"README.md"}];return(a,l)=>(b(),C("div",xj,[U(r(Hd),{"selected-key":t.value,"onUpdate:selectedKey":l[0]||(l[0]=o=>t.value=o),data:n,"default-expand-all":""},null,8,["selected-key"]),w("p",Cj,$(r(z)()?`选中节点：${t.value??"（未选中）"}`:`Selected: ${t.value??"(none)"}`),1)]))}}),kj={class:"demo-column"},wj={class:"demo-text"},Nj=M({__name:"checkable",setup(e){const t=q([]),n=[{key:"fruit",label:z()?"水果":"Fruits",children:[{key:"apple",label:z()?"苹果":"Apple"},{key:"banana",label:z()?"香蕉":"Banana"},{key:"durian",label:z()?"榴莲（缺货）":"Durian (sold out)",disabled:!0}]},{key:"veggie",label:z()?"蔬菜":"Vegetables",children:[{key:"carrot",label:z()?"胡萝卜":"Carrot"},{key:"tomato",label:z()?"番茄":"Tomato"}]}];return(a,l)=>(b(),C("div",kj,[U(r(Hd),{"checked-keys":t.value,"onUpdate:checkedKeys":l[0]||(l[0]=o=>t.value=o),data:n,checkable:"","default-expand-all":""},null,8,["checked-keys"]),w("p",wj,$(r(z)()?`已勾选：${t.value.length?t.value.join(", "):"（无）"}`:`Checked: ${t.value.length?t.value.join(", "):"(none)"}`),1)]))}}),Tj={class:"demo-column"},zj={class:"demo-row"},Uj=M({__name:"actions",setup(e){const t=q(null),n=q([]),a=[{key:"frontend",label:"前端",children:[{key:"vue",label:"Vue"},{key:"react",label:"React"}]},{key:"backend",label:"后端",children:[{key:"node",label:"Node.js"},{key:"go",label:"Go"}]}];return(l,o)=>(b(),C("div",Tj,[w("div",zj,[U(r(W),{size:"sm",onClick:o[0]||(o[0]=i=>{var s;return(s=t.value)==null?void 0:s.expandAll()})},{default:E(()=>[K($(r(z)()?"全部展开":"Expand all"),1)]),_:1}),U(r(W),{size:"sm",onClick:o[1]||(o[1]=i=>{var s;return(s=t.value)==null?void 0:s.collapseAll()})},{default:E(()=>[K($(r(z)()?"全部收起":"Collapse all"),1)]),_:1}),U(r(W),{size:"sm",onClick:o[2]||(o[2]=i=>{var s;return(s=t.value)==null?void 0:s.checkAll()})},{default:E(()=>[K($(r(z)()?"全选":"Check all"),1)]),_:1}),U(r(W),{size:"sm",onClick:o[3]||(o[3]=i=>{var s;return(s=t.value)==null?void 0:s.uncheckAll()})},{default:E(()=>[K($(r(z)()?"清空勾选":"Uncheck all"),1)]),_:1})]),U(r(Hd),{ref_key:"treeRef",ref:t,"checked-keys":n.value,"onUpdate:checkedKeys":o[4]||(o[4]=i=>n.value=i),data:a,checkable:"","default-expand-all":""},null,8,["checked-keys"])]))}}),$j=[{key:"src",label:"src",children:[{key:"components",label:"components",children:[{key:"button",label:"Button.vue"},{key:"input",label:"Input.vue"}]},{key:"main",label:"main.ts"}]},{key:"readme",label:"README.md"}];function Ej(){const e=oe(),[t,n]=B.useState(null);return u.jsxs("div",{className:"demo-column",children:[u.jsx(Jp,{data:$j,defaultExpandAll:!0,selectedKey:t,onSelect:a=>n(a)}),u.jsx("p",{className:"demo-text",children:e?`选中节点：${t??"（未选中）"}`:`Selected: ${t??"(none)"}`})]})}function Aj(){const e=oe(),[t,n]=B.useState([]),a=[{key:"fruit",label:e?"水果":"Fruits",children:[{key:"apple",label:e?"苹果":"Apple"},{key:"banana",label:e?"香蕉":"Banana"},{key:"durian",label:e?"榴莲（缺货）":"Durian (sold out)",disabled:!0}]},{key:"veggie",label:e?"蔬菜":"Vegetables",children:[{key:"carrot",label:e?"胡萝卜":"Carrot"},{key:"tomato",label:e?"番茄":"Tomato"}]}];return u.jsxs("div",{className:"demo-column",children:[u.jsx(Jp,{data:a,checkable:!0,defaultExpandAll:!0,checkedKeys:t,onCheck:l=>n(l)}),u.jsx("p",{className:"demo-text",children:e?`已勾选：${t.length?t.join(", "):"（无）"}`:`Checked: ${t.length?t.join(", "):"(none)"}`})]})}const Rj=[{key:"frontend",label:"前端",children:[{key:"vue",label:"Vue"},{key:"react",label:"React"}]},{key:"backend",label:"后端",children:[{key:"node",label:"Node.js"},{key:"go",label:"Go"}]}];function Bj(){const e=oe(),t=B.useRef(null),[n,a]=B.useState([]);return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{size:"sm",onClick:()=>{var l;return(l=t.current)==null?void 0:l.expandAll()},children:e?"全部展开":"Expand all"}),u.jsx(ee,{size:"sm",onClick:()=>{var l;return(l=t.current)==null?void 0:l.collapseAll()},children:e?"全部收起":"Collapse all"}),u.jsx(ee,{size:"sm",onClick:()=>{var l;return(l=t.current)==null?void 0:l.checkAll()},children:e?"全选":"Check all"}),u.jsx(ee,{size:"sm",onClick:()=>{var l;return(l=t.current)==null?void 0:l.uncheckAll()},children:e?"清空勾选":"Uncheck all"})]}),u.jsx(Jp,{ref:t,data:Rj,checkable:!0,defaultExpandAll:!0,checkedKeys:n,onCheck:l=>a(l)})]})}const Oj=`<script setup lang="ts">
import { ref } from 'vue';
import { Tree } from '@xui-design/vue';
import type { TreeNode } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const selectedKey = ref<string | null>(null);

const data: TreeNode[] = [
  {
    key: 'src',
    label: 'src',
    children: [
      {
        key: 'components',
        label: 'components',
        children: [
          { key: 'button', label: 'Button.vue' },
          { key: 'input', label: 'Input.vue' },
        ],
      },
      { key: 'main', label: 'main.ts' },
    ],
  },
  { key: 'readme', label: 'README.md' },
];
<\/script>

<template>
  <div class="demo-column">
    <Tree v-model:selected-key="selectedKey" :data="data" default-expand-all />
    <p class="demo-text">
      {{
        isZh() ? \`选中节点：\${selectedKey ?? '（未选中）'}\` : \`Selected: \${selectedKey ?? '(none)'}\`
      }}
    </p>
  </div>
</template>
`,Zj=`<script setup lang="ts">
import { ref } from 'vue';
import { Tree } from '@xui-design/vue';
import type { TreeNode } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const checkedKeys = ref<string[]>([]);

const data: TreeNode[] = [
  {
    key: 'fruit',
    label: isZh() ? '水果' : 'Fruits',
    children: [
      { key: 'apple', label: isZh() ? '苹果' : 'Apple' },
      { key: 'banana', label: isZh() ? '香蕉' : 'Banana' },
      { key: 'durian', label: isZh() ? '榴莲（缺货）' : 'Durian (sold out)', disabled: true },
    ],
  },
  {
    key: 'veggie',
    label: isZh() ? '蔬菜' : 'Vegetables',
    children: [
      { key: 'carrot', label: isZh() ? '胡萝卜' : 'Carrot' },
      { key: 'tomato', label: isZh() ? '番茄' : 'Tomato' },
    ],
  },
];
<\/script>

<template>
  <div class="demo-column">
    <Tree v-model:checked-keys="checkedKeys" :data="data" checkable default-expand-all />
    <p class="demo-text">
      {{
        isZh()
          ? \`已勾选：\${checkedKeys.length ? checkedKeys.join(', ') : '（无）'}\`
          : \`Checked: \${checkedKeys.length ? checkedKeys.join(', ') : '(none)'}\`
      }}
    </p>
  </div>
</template>
`,jj=`<script setup lang="ts">
import { ref } from 'vue';
import { Button, Tree } from '@xui-design/vue';
import type { TreeNode, TreeRef } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const treeRef = ref<TreeRef | null>(null);
const checkedKeys = ref<string[]>([]);

const data: TreeNode[] = [
  {
    key: 'frontend',
    label: '前端',
    children: [
      { key: 'vue', label: 'Vue' },
      { key: 'react', label: 'React' },
    ],
  },
  {
    key: 'backend',
    label: '后端',
    children: [
      { key: 'node', label: 'Node.js' },
      { key: 'go', label: 'Go' },
    ],
  },
];
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button size="sm" @click="treeRef?.expandAll()">{{
        isZh() ? '全部展开' : 'Expand all'
      }}</Button>
      <Button size="sm" @click="treeRef?.collapseAll()">
        {{ isZh() ? '全部收起' : 'Collapse all' }}
      </Button>
      <Button size="sm" @click="treeRef?.checkAll()">{{ isZh() ? '全选' : 'Check all' }}</Button>
      <Button size="sm" @click="treeRef?.uncheckAll()">
        {{ isZh() ? '清空勾选' : 'Uncheck all' }}
      </Button>
    </div>
    <Tree
      ref="treeRef"
      v-model:checked-keys="checkedKeys"
      :data="data"
      checkable
      default-expand-all
    />
  </div>
</template>
`,Dj=`import { useState } from 'react';
import { Tree } from '@xui-design/react';
import type { TreeNode } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

const data: TreeNode[] = [
  {
    key: 'src',
    label: 'src',
    children: [
      {
        key: 'components',
        label: 'components',
        children: [
          { key: 'button', label: 'Button.vue' },
          { key: 'input', label: 'Input.vue' },
        ],
      },
      { key: 'main', label: 'main.ts' },
    ],
  },
  { key: 'readme', label: 'README.md' },
];

export default function TreeBasicDemo() {
  const isZh = useIsZh();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  return (
    <div className="demo-column">
      <Tree
        data={data}
        defaultExpandAll
        selectedKey={selectedKey}
        onSelect={(key) => setSelectedKey(key)}
      />
      <p className="demo-text">
        {isZh ? \`选中节点：\${selectedKey ?? '（未选中）'}\` : \`Selected: \${selectedKey ?? '(none)'}\`}
      </p>
    </div>
  );
}
`,Mj=`import { useState } from 'react';
import { Tree } from '@xui-design/react';
import type { TreeNode } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function TreeCheckableDemo() {
  const isZh = useIsZh();
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);

  const data: TreeNode[] = [
    {
      key: 'fruit',
      label: isZh ? '水果' : 'Fruits',
      children: [
        { key: 'apple', label: isZh ? '苹果' : 'Apple' },
        { key: 'banana', label: isZh ? '香蕉' : 'Banana' },
        { key: 'durian', label: isZh ? '榴莲（缺货）' : 'Durian (sold out)', disabled: true },
      ],
    },
    {
      key: 'veggie',
      label: isZh ? '蔬菜' : 'Vegetables',
      children: [
        { key: 'carrot', label: isZh ? '胡萝卜' : 'Carrot' },
        { key: 'tomato', label: isZh ? '番茄' : 'Tomato' },
      ],
    },
  ];

  return (
    <div className="demo-column">
      <Tree
        data={data}
        checkable
        defaultExpandAll
        checkedKeys={checkedKeys}
        onCheck={(keys) => setCheckedKeys(keys)}
      />
      <p className="demo-text">
        {isZh
          ? \`已勾选：\${checkedKeys.length ? checkedKeys.join(', ') : '（无）'}\`
          : \`Checked: \${checkedKeys.length ? checkedKeys.join(', ') : '(none)'}\`}
      </p>
    </div>
  );
}
`,Lj=`import { useRef, useState } from 'react';
import { Button, Tree } from '@xui-design/react';
import type { TreeNode, TreeRef } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

const data: TreeNode[] = [
  {
    key: 'frontend',
    label: '前端',
    children: [
      { key: 'vue', label: 'Vue' },
      { key: 'react', label: 'React' },
    ],
  },
  {
    key: 'backend',
    label: '后端',
    children: [
      { key: 'node', label: 'Node.js' },
      { key: 'go', label: 'Go' },
    ],
  },
];

export default function TreeActionsDemo() {
  const isZh = useIsZh();
  const treeRef = useRef<TreeRef>(null);
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Button size="sm" onClick={() => treeRef.current?.expandAll()}>
          {isZh ? '全部展开' : 'Expand all'}
        </Button>
        <Button size="sm" onClick={() => treeRef.current?.collapseAll()}>
          {isZh ? '全部收起' : 'Collapse all'}
        </Button>
        <Button size="sm" onClick={() => treeRef.current?.checkAll()}>
          {isZh ? '全选' : 'Check all'}
        </Button>
        <Button size="sm" onClick={() => treeRef.current?.uncheckAll()}>
          {isZh ? '清空勾选' : 'Uncheck all'}
        </Button>
      </div>
      <Tree
        ref={treeRef}
        data={data}
        checkable
        defaultExpandAll
        checkedKeys={checkedKeys}
        onCheck={(keys) => setCheckedKeys(keys)}
      />
    </div>
  );
}
`,Vj={name:"Tree",slug:"tree",title:"树形控件",category:"display",summary:{"zh-CN":"以树形结构展示层级数据，支持展开/收起、单选选中与级联勾选。","en-US":"Display hierarchical data as a tree, with expand/collapse, single selection, and cascaded checking."},features:[{"zh-CN":"树形 data：通过 children 递归定义层级，节点 key 全树唯一，叶子节点无 children","en-US":"Tree-shaped data: levels are defined recursively via children; node keys are unique across the tree; leaf nodes have no children"},{"zh-CN":"expandedKeys / checkedKeys / selectedKey 三组状态均支持受控与非受控，Vue 端支持 v-model:expanded-keys / v-model:checked-keys / v-model:selected-key","en-US":"expandedKeys / checkedKeys / selectedKey all support controlled and uncontrolled modes; Vue supports v-model:expanded-keys / v-model:checked-keys / v-model:selected-key"},{"zh-CN":"defaultExpandAll 默认展开全部非叶子节点；defaultExpandedKeys 指定初始展开集合","en-US":"defaultExpandAll expands all non-leaf nodes by default; defaultExpandedKeys specifies the initial expanded set"},{"zh-CN":"checkable 显示勾选框：父子级联勾选（禁用节点不参与）、半选状态推导、checkStrictly 父子独立","en-US":"checkable shows checkboxes: parent-child cascaded checking (disabled nodes excluded), indeterminate state derivation, and checkStrictly for independent checking"},{"zh-CN":"disabled 整体禁用；节点可单独 disabled（整节点）或 disableCheckbox（仅勾选框）","en-US":"disabled disables the whole tree; individual nodes support disabled (entire node) or disableCheckbox (checkbox only)"},{"zh-CN":"ref 命令式 API：expandAll / collapseAll / checkAll / uncheckAll，双端一致","en-US":"Imperative ref API: expandAll / collapseAll / checkAll / uncheckAll, identical on both frameworks"}],scenarios:[{"zh-CN":"文件目录、组织架构、分类树等层级数据的展示与选择场景。","en-US":"Display and selection of hierarchical data such as file directories, org charts, and category trees."}],demos:[{id:"basic",title:{"zh-CN":"基础用法","en-US":"Basic"},description:{"zh-CN":"树形 data 渲染层级结构，defaultExpandAll 展开全部，点击标题选中节点。","en-US":"Tree-shaped data renders the hierarchy; defaultExpandAll expands everything; clicking a title selects the node."},vueComponent:_j,reactComponent:Ej,vueSource:Oj,reactSource:Dj},{id:"checkable",title:{"zh-CN":"勾选模式","en-US":"Checkable"},description:{"zh-CN":"checkable 开启勾选框，勾选父级级联勾选全部非禁用后代；禁用节点不参与级联且计入父级半选推导。","en-US":"checkable enables checkboxes; checking a parent cascades to all enabled descendants; disabled nodes are excluded from cascading but counted in parent indeterminate derivation."},vueComponent:Nj,reactComponent:Aj,vueSource:Zj,reactSource:Mj},{id:"actions",title:{"zh-CN":"命令式操作","en-US":"Imperative API"},description:{"zh-CN":"通过 ref 调用 expandAll / collapseAll / checkAll / uncheckAll，受控 checkedKeys 配合 v-model 同步。","en-US":"Call expandAll / collapseAll / checkAll / uncheckAll via ref; controlled checkedKeys sync via v-model."},vueComponent:Uj,reactComponent:Bj,vueSource:jj,reactSource:Lj}],api:{props:[{name:"data",type:"TreeNode[]",default:"—",required:!0,description:{"zh-CN":"树形数据","en-US":"Tree-shaped data"}},{name:"expandedKeys",type:"string[]",default:"—",description:{"zh-CN":"受控展开的 key 列表（提供即受控）","en-US":"Controlled expanded keys (controlled when provided)"}},{name:"defaultExpandedKeys",type:"string[]",default:"—",description:{"zh-CN":"非受控初始展开的 key 列表","en-US":"Uncontrolled initial expanded keys"}},{name:"checkedKeys",type:"string[]",default:"—",description:{"zh-CN":"受控勾选的 key 列表（提供即受控；仅 checkable 时生效）","en-US":"Controlled checked keys (controlled when provided; only effective with checkable)"}},{name:"defaultCheckedKeys",type:"string[]",default:"—",description:{"zh-CN":"非受控初始勾选的 key 列表","en-US":"Uncontrolled initial checked keys"}},{name:"selectedKey",type:"string | null",default:"—",description:{"zh-CN":"受控选中的 key（提供即受控；null 表示未选中）","en-US":"Controlled selected key (controlled when provided; null means none selected)"}},{name:"defaultSelectedKey",type:"string | null",default:"—",description:{"zh-CN":"非受控初始选中的 key","en-US":"Uncontrolled initial selected key"}},{name:"checkable",type:"boolean",default:"false",description:{"zh-CN":"是否显示勾选框（支持级联勾选与半选推导）","en-US":"Whether to show checkboxes (supports cascaded checking and indeterminate derivation)"}},{name:"checkStrictly",type:"boolean",default:"false",description:{"zh-CN":"勾选父子独立（true 时不做级联勾选与勾选态推导）","en-US":"Parent-child independent checking (no cascading or state derivation when true)"}},{name:"defaultExpandAll",type:"boolean",default:"false",description:{"zh-CN":"非受控模式下默认展开全部节点","en-US":"Expand all nodes by default in uncontrolled mode"}},{name:"disabled",type:"boolean",default:"false",description:{"zh-CN":"禁用整棵树","en-US":"Disable the whole tree"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到根节点的自定义类名","en-US":"Custom class name appended to the root element"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到根节点的内联样式","en-US":"Custom inline styles appended to the root element"}},{name:"onExpand",type:"(expandedKeys: string[], info: { key: string; expanded: boolean }) => void",default:"—",description:{"zh-CN":"展开状态变更回调","en-US":"Expanded state change callback"}},{name:"onCheck",type:"(checkedKeys: string[], info: { key: string; checked: boolean }) => void",default:"—",description:{"zh-CN":"勾选状态变更回调","en-US":"Checked state change callback"}},{name:"onSelect",type:"(selectedKey: string | null, info: { key: string }) => void",default:"—",description:{"zh-CN":"选中状态变更回调","en-US":"Selected state change callback"}}],events:[{vue:"expand",react:"onExpand",payload:"expandedKeys: string[], info: { key: string; expanded: boolean }",description:{"zh-CN":"节点展开/收起时触发","en-US":"Fired when a node is expanded or collapsed"}},{vue:"check",react:"onCheck",payload:"checkedKeys: string[], info: { key: string; checked: boolean }",description:{"zh-CN":"节点勾选状态变更时触发","en-US":"Fired when a node checked state changes"}},{vue:"select",react:"onSelect",payload:"selectedKey: string | null, info: { key: string }",description:{"zh-CN":"节点选中时触发","en-US":"Fired when a node is selected"}},{vue:"update:expandedKeys / update:checkedKeys / update:selectedKey",react:"—",payload:"string[] / string[] / string | null",description:{"zh-CN":"对应 v-model:expanded-keys / v-model:checked-keys / v-model:selected-key 回写","en-US":"Write-back for v-model:expanded-keys / v-model:checked-keys / v-model:selected-key"}}],slots:[{vue:"title",react:"renderTitle",description:{"zh-CN":"自定义节点标题（Vue scope 含 node；React 为 (node) => ReactNode）","en-US":"Custom node title (Vue scope receives node; React is (node) => ReactNode)"}}],methods:[{name:"expandAll",signature:"expandAll(): void",description:{"zh-CN":"展开全部非叶子节点","en-US":"Expand all non-leaf nodes"}},{name:"collapseAll",signature:"collapseAll(): void",description:{"zh-CN":"收起全部节点","en-US":"Collapse all nodes"}},{name:"checkAll",signature:"checkAll(): void",description:{"zh-CN":"勾选全部非禁用节点（disabled / disableCheckbox 除外）","en-US":"Check all enabled nodes (excluding disabled / disableCheckbox)"}},{name:"uncheckAll",signature:"uncheckAll(): void",description:{"zh-CN":"清空全部勾选","en-US":"Clear all checks"}}],types:[{name:"TreeNode",definition:`interface TreeNode {
  key: string
  label: string
  children?: TreeNode[]
  disabled?: boolean
  disableCheckbox?: boolean
}`,description:{"zh-CN":"树节点（key 全树唯一；children 非空表示非叶子；disabled 禁用整节点；disableCheckbox 仅禁用勾选框）。","en-US":"A tree node (key is unique across the tree; non-empty children means non-leaf; disabled disables the entire node; disableCheckbox disables only the checkbox)."}}]},notes:[{"zh-CN":"三组状态（expandedKeys / checkedKeys / selectedKey）各自独立受控：提供对应 prop 即进入受控模式，未提供则内部自维护（可用 defaultXxx 指定初始值）。","en-US":"The three state groups (expandedKeys / checkedKeys / selectedKey) are independently controlled: providing the prop enters controlled mode; otherwise the component maintains internal state (defaultXxx sets the initial value)."},{"zh-CN":"级联勾选口径：勾选父级会勾选全部非禁用后代（含中间节点）；半选父级点击后勾选全部非禁用后代；取消已全选父级会移除全部后代勾选。禁用节点不参与级联勾选，但计入父级勾选态推导的分母——存在未勾选的禁用后代时父级最多显示半选。","en-US":"Cascade semantics: checking a parent checks all enabled descendants (including intermediate nodes); clicking an indeterminate parent checks all enabled descendants; unchecking a fully-checked parent removes all descendant checks. Disabled nodes are excluded from cascading but counted in the parent state derivation—an unchecked disabled descendant caps the parent at indeterminate."},{"zh-CN":"checkStrictly=true 时勾选父子完全独立，仅按自身 key 精确匹配，无级联与半选态。","en-US":"With checkStrictly=true, checking is fully independent per node, matched by its own key only, with no cascading or indeterminate state."}],a11y:[{"zh-CN":"根容器 role=tree，节点 role=treeitem，子级容器 role=group；勾选框 role=checkbox（aria-checked 支持 mixed 半选态）；非叶子节点 aria-expanded 反映展开状态。","en-US":"The root has role=tree, nodes role=treeitem, child groups role=group; checkboxes use role=checkbox (aria-checked supports mixed for indeterminate); non-leaf nodes reflect expansion via aria-expanded."}]},Hj={class:"demo-column"},Ij=M({__name:"basic",setup(e){const t=q(!1);return(n,a)=>(b(),C("div",Hj,[U(r(W),{type:"primary",onClick:a[0]||(a[0]=l=>t.value=!0)},{default:E(()=>[K($(r(z)()?"打开抽屉":"Open drawer"),1)]),_:1}),U(r(Id),{visible:t.value,"onUpdate:visible":a[3]||(a[3]=l=>t.value=l),title:r(z)()?"编辑资料":"Edit profile",onClose:a[4]||(a[4]=l=>t.value=!1)},{footer:E(()=>[U(r(W),{onClick:a[1]||(a[1]=l=>t.value=!1)},{default:E(()=>[K($(r(z)()?"取消":"Cancel"),1)]),_:1}),U(r(W),{type:"primary",onClick:a[2]||(a[2]=l=>t.value=!1)},{default:E(()=>[K($(r(z)()?"确认":"Confirm"),1)]),_:1})]),default:E(()=>[w("p",null,$(r(z)()?"这是一段抽屉内容，可承载表单或详情信息。":"Drawer body text. Use it for forms or detail information."),1)]),_:1},8,["visible","title"])]))}}),Fj={class:"demo-column"},Kj={class:"demo-row"},qj=M({__name:"placement",setup(e){const t=q(!1),n=q("right"),a=l=>{n.value=l,t.value=!0};return(l,o)=>(b(),C("div",Fj,[w("div",Kj,[U(r(W),{onClick:o[0]||(o[0]=i=>a("left"))},{default:E(()=>[K($(r(z)()?"左侧":"Left"),1)]),_:1}),U(r(W),{onClick:o[1]||(o[1]=i=>a("right"))},{default:E(()=>[K($(r(z)()?"右侧":"Right"),1)]),_:1}),U(r(W),{onClick:o[2]||(o[2]=i=>a("top"))},{default:E(()=>[K($(r(z)()?"顶部":"Top"),1)]),_:1}),U(r(W),{onClick:o[3]||(o[3]=i=>a("bottom"))},{default:E(()=>[K($(r(z)()?"底部":"Bottom"),1)]),_:1})]),U(r(Id),{visible:t.value,"onUpdate:visible":o[4]||(o[4]=i=>t.value=i),placement:n.value,title:r(z)()?"四方向抽屉":"Placements",size:n.value==="top"||n.value==="bottom"?240:320},{default:E(()=>[w("p",null,$(r(z)()?"placement 控制抽屉滑入方向：left / right / top / bottom。":"placement controls the slide-in edge: left / right / top / bottom."),1)]),_:1},8,["visible","placement","title","size"])]))}}),Pj={class:"demo-column"},Gj={class:"demo-row"},Yj=M({__name:"ref",setup(e){const t=lt("drawer");return(n,a)=>(b(),C("div",Pj,[w("div",Gj,[U(r(W),{type:"primary",onClick:a[0]||(a[0]=l=>{var o;return(o=t.value)==null?void 0:o.open()})},{default:E(()=>[K($(r(z)()?"ref 打开":"Open via ref"),1)]),_:1}),U(r(W),{onClick:a[1]||(a[1]=l=>{var o;return(o=t.value)==null?void 0:o.toggle()})},{default:E(()=>[K($(r(z)()?"切换":"Toggle"),1)]),_:1})]),U(r(Id),{ref:"drawer",title:r(z)()?"命令式抽屉":"Imperative drawer"},{footer:E(()=>[U(r(W),{type:"primary",onClick:a[2]||(a[2]=l=>{var o;return(o=t.value)==null?void 0:o.close()})},{default:E(()=>[K($(r(z)()?"关闭":"Close"),1)]),_:1})]),default:E(()=>[w("p",null,$(r(z)()?"无需维护 visible，直接调用实例 open() / close() / toggle()。":"No need to maintain visible; call open() / close() / toggle() on the instance."),1)]),_:1},8,["title"])]))}});function Xj(){const e=oe(),[t,n]=B.useState(!1),a=()=>n(!1);return u.jsxs("div",{className:"demo-column",children:[u.jsx(ee,{type:"primary",onClick:()=>n(!0),children:e?"打开抽屉":"Open drawer"}),u.jsx(Wp,{visible:t,title:e?"编辑资料":"Edit profile",onClose:a,renderFooter:()=>u.jsxs(u.Fragment,{children:[u.jsx(ee,{onClick:a,children:e?"取消":"Cancel"}),u.jsx(ee,{type:"primary",onClick:a,children:e?"确认":"Confirm"})]}),children:u.jsx("p",{children:e?"这是一段抽屉内容，可承载表单或详情信息。":"Drawer body text. Use it for forms or detail information."})})]})}function Qj(){const e=oe(),[t,n]=B.useState(!1),[a,l]=B.useState("right"),o=i=>{l(i),n(!0)};return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{onClick:()=>o("left"),children:e?"左侧":"Left"}),u.jsx(ee,{onClick:()=>o("right"),children:e?"右侧":"Right"}),u.jsx(ee,{onClick:()=>o("top"),children:e?"顶部":"Top"}),u.jsx(ee,{onClick:()=>o("bottom"),children:e?"底部":"Bottom"})]}),u.jsx(Wp,{visible:t,placement:a,title:e?"四方向抽屉":"Placements",size:a==="top"||a==="bottom"?240:320,onClose:()=>n(!1),children:u.jsx("p",{children:e?"placement 控制抽屉滑入方向：left / right / top / bottom。":"placement controls the slide-in edge: left / right / top / bottom."})})]})}function Jj(){const e=oe(),t=B.useRef(null);return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{type:"primary",onClick:()=>{var n;return(n=t.current)==null?void 0:n.open()},children:e?"ref 打开":"Open via ref"}),u.jsx(ee,{onClick:()=>{var n;return(n=t.current)==null?void 0:n.toggle()},children:e?"切换":"Toggle"})]}),u.jsx(Wp,{ref:t,title:e?"命令式抽屉":"Imperative drawer",renderFooter:()=>u.jsx(ee,{type:"primary",onClick:()=>{var n;return(n=t.current)==null?void 0:n.close()},children:e?"关闭":"Close"}),children:u.jsx("p",{children:e?"无需维护 visible，直接调用实例 open() / close() / toggle()。":"No need to maintain visible; call open() / close() / toggle() on the instance."})})]})}const Wj=`<script setup lang="ts">
import { ref } from 'vue';
import { Button, Drawer } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const visible = ref(false);
<\/script>

<template>
  <div class="demo-column">
    <Button type="primary" @click="visible = true">{{
      isZh() ? '打开抽屉' : 'Open drawer'
    }}</Button>
    <Drawer
      v-model:visible="visible"
      :title="isZh() ? '编辑资料' : 'Edit profile'"
      @close="visible = false"
    >
      <p>
        {{
          isZh()
            ? '这是一段抽屉内容，可承载表单或详情信息。'
            : 'Drawer body text. Use it for forms or detail information.'
        }}
      </p>
      <template #footer>
        <Button @click="visible = false">{{ isZh() ? '取消' : 'Cancel' }}</Button>
        <Button type="primary" @click="visible = false">{{ isZh() ? '确认' : 'Confirm' }}</Button>
      </template>
    </Drawer>
  </div>
</template>
`,eD=`<script setup lang="ts">
import { ref } from 'vue';
import { Button, Drawer } from '@xui-design/vue';
import type { DrawerPlacement } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const visible = ref(false);
const placement = ref<DrawerPlacement>('right');

const open = (next: DrawerPlacement) => {
  placement.value = next;
  visible.value = true;
};
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button @click="open('left')">{{ isZh() ? '左侧' : 'Left' }}</Button>
      <Button @click="open('right')">{{ isZh() ? '右侧' : 'Right' }}</Button>
      <Button @click="open('top')">{{ isZh() ? '顶部' : 'Top' }}</Button>
      <Button @click="open('bottom')">{{ isZh() ? '底部' : 'Bottom' }}</Button>
    </div>
    <Drawer
      v-model:visible="visible"
      :placement="placement"
      :title="isZh() ? '四方向抽屉' : 'Placements'"
      :size="placement === 'top' || placement === 'bottom' ? 240 : 320"
    >
      <p>
        {{
          isZh()
            ? 'placement 控制抽屉滑入方向：left / right / top / bottom。'
            : 'placement controls the slide-in edge: left / right / top / bottom.'
        }}
      </p>
    </Drawer>
  </div>
</template>
`,tD=`<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { Button, Drawer } from '@xui-design/vue';
import type { DrawerRef } from '@xui-design/vue';
import { isZh } from '../../../i18n';

const drawerRef = useTemplateRef<DrawerRef>('drawer');
<\/script>

<template>
  <div class="demo-column">
    <div class="demo-row">
      <Button type="primary" @click="drawerRef?.open()">{{
        isZh() ? 'ref 打开' : 'Open via ref'
      }}</Button>
      <Button @click="drawerRef?.toggle()">{{ isZh() ? '切换' : 'Toggle' }}</Button>
    </div>
    <Drawer ref="drawer" :title="isZh() ? '命令式抽屉' : 'Imperative drawer'">
      <p>
        {{
          isZh()
            ? '无需维护 visible，直接调用实例 open() / close() / toggle()。'
            : 'No need to maintain visible; call open() / close() / toggle() on the instance.'
        }}
      </p>
      <template #footer>
        <Button type="primary" @click="drawerRef?.close()">{{ isZh() ? '关闭' : 'Close' }}</Button>
      </template>
    </Drawer>
  </div>
</template>
`,nD=`import { useState } from 'react';
import { Button, Drawer } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function DrawerBasicDemo() {
  const isZh = useIsZh();
  const [visible, setVisible] = useState(false);
  const close = () => setVisible(false);

  return (
    <div className="demo-column">
      <Button type="primary" onClick={() => setVisible(true)}>
        {isZh ? '打开抽屉' : 'Open drawer'}
      </Button>
      <Drawer
        visible={visible}
        title={isZh ? '编辑资料' : 'Edit profile'}
        onClose={close}
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
            ? '这是一段抽屉内容，可承载表单或详情信息。'
            : 'Drawer body text. Use it for forms or detail information.'}
        </p>
      </Drawer>
    </div>
  );
}
`,aD=`import { useState } from 'react';
import { Button, Drawer } from '@xui-design/react';
import type { DrawerPlacement } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function DrawerPlacementDemo() {
  const isZh = useIsZh();
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<DrawerPlacement>('right');

  const open = (next: DrawerPlacement) => {
    setPlacement(next);
    setVisible(true);
  };

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Button onClick={() => open('left')}>{isZh ? '左侧' : 'Left'}</Button>
        <Button onClick={() => open('right')}>{isZh ? '右侧' : 'Right'}</Button>
        <Button onClick={() => open('top')}>{isZh ? '顶部' : 'Top'}</Button>
        <Button onClick={() => open('bottom')}>{isZh ? '底部' : 'Bottom'}</Button>
      </div>
      <Drawer
        visible={visible}
        placement={placement}
        title={isZh ? '四方向抽屉' : 'Placements'}
        size={placement === 'top' || placement === 'bottom' ? 240 : 320}
        onClose={() => setVisible(false)}
      >
        <p>
          {isZh
            ? 'placement 控制抽屉滑入方向：left / right / top / bottom。'
            : 'placement controls the slide-in edge: left / right / top / bottom.'}
        </p>
      </Drawer>
    </div>
  );
}
`,lD=`import { useRef } from 'react';
import { Button, Drawer } from '@xui-design/react';
import type { DrawerRef } from '@xui-design/react';
import { useIsZh } from '../../../i18n/use-docs-locale';

export default function DrawerRefDemo() {
  const isZh = useIsZh();
  const drawerRef = useRef<DrawerRef>(null);

  return (
    <div className="demo-column">
      <div className="demo-row">
        <Button type="primary" onClick={() => drawerRef.current?.open()}>
          {isZh ? 'ref 打开' : 'Open via ref'}
        </Button>
        <Button onClick={() => drawerRef.current?.toggle()}>{isZh ? '切换' : 'Toggle'}</Button>
      </div>
      <Drawer
        ref={drawerRef}
        title={isZh ? '命令式抽屉' : 'Imperative drawer'}
        renderFooter={() => (
          <Button type="primary" onClick={() => drawerRef.current?.close()}>
            {isZh ? '关闭' : 'Close'}
          </Button>
        )}
      >
        <p>
          {isZh
            ? '无需维护 visible，直接调用实例 open() / close() / toggle()。'
            : 'No need to maintain visible; call open() / close() / toggle() on the instance.'}
        </p>
      </Drawer>
    </div>
  );
}
`,oD={name:"Drawer",slug:"drawer",title:"抽屉",category:"basic",summary:{"zh-CN":"从屏幕边缘滑出的抽屉面板，承载表单、详情等次级内容；支持四个方向、自定义尺寸、焦点陷阱 / 焦点恢复与 ref 命令式控制。","en-US":"A drawer panel sliding in from a screen edge for forms, details, and other secondary content, with four placements, custom size, focus trap / focus restore, and ref-based imperative control."},features:[{"zh-CN":"受控 visible / 非受控 defaultVisible，Vue 端支持 v-model:visible","en-US":"Controlled visible or uncontrolled defaultVisible; v-model:visible on Vue"},{"zh-CN":"placement 四个滑入方向：left / right / top / bottom（默认 right）","en-US":"Four slide-in placements: left / right / top / bottom (defaults to right)"},{"zh-CN":"size 自定义尺寸：左右方向为宽度，上下方向为高度（数字按 px，字符串原样输出，默认 378）","en-US":"Custom size: width for left/right, height for top/bottom (numbers are treated as px; strings are applied as-is; defaults to 378)"},{"zh-CN":"mask 可关闭遮罩；maskClosable 遮罩点击关闭、closeOnEsc ESC 关闭","en-US":"Mask can be hidden via mask; mask click to close via maskClosable, and ESC to close via closeOnEsc"},{"zh-CN":"焦点陷阱：打开期间 Tab 循环约束在抽屉内（trapFocus 可关闭）；关闭后焦点恢复到打开前元素","en-US":"Focus trap: Tab cycles within the drawer while open (can be disabled with trapFocus); focus returns to the pre-open element after close"},{"zh-CN":"default / title / footer / closeIcon 插槽（React 对应 children / renderTitle / renderFooter / renderCloseIcon）","en-US":"Slots: default / title / footer / closeIcon (children / renderTitle / renderFooter / renderCloseIcon in React)"},{"zh-CN":"通过 ref 暴露 open() / close() / toggle() 命令式方法（类型 DrawerRef）","en-US":"Imperative open() / close() / toggle() methods exposed via ref (type DrawerRef)"}],scenarios:[{"zh-CN":"表单编辑、详情查看、筛选面板等不打断主流程但需要较大展示面积的场景。","en-US":"Form editing, detail views, filter panels, and other scenarios that need a larger area without fully interrupting the main flow."}],demos:[{id:"basic",title:{"zh-CN":"受控抽屉","en-US":"Controlled Drawer"},description:{"zh-CN":"外部维护 visible 状态，footer 插槽自定义底部按钮。","en-US":"Maintain visible externally; customize footer buttons via the footer slot."},vueComponent:Ij,reactComponent:Xj,vueSource:Wj,reactSource:nD},{id:"placement",title:{"zh-CN":"四个方向","en-US":"Placements"},description:{"zh-CN":"placement 控制抽屉从左 / 右 / 上 / 下哪个边缘滑入。","en-US":"placement controls which edge (left / right / top / bottom) the drawer slides in from."},vueComponent:qj,reactComponent:Qj,vueSource:eD,reactSource:aD},{id:"ref",title:{"zh-CN":"ref 命令式控制","en-US":"Imperative Control via ref"},description:{"zh-CN":"无需维护 visible，直接调用实例 open() / close() / toggle()。","en-US":"No need to maintain visible; call open() / close() / toggle() on the instance directly."},vueComponent:Yj,reactComponent:Jj,vueSource:tD,reactSource:lD}],api:{props:[{name:"visible",type:"boolean",default:"—",description:{"zh-CN":"受控可见性","en-US":"Controlled visibility"}},{name:"defaultVisible",type:"boolean",default:"false",description:{"zh-CN":"非受控初始可见性","en-US":"Uncontrolled initial visibility"}},{name:"placement",type:"'left' | 'right' | 'top' | 'bottom'",default:"'right'",description:{"zh-CN":"抽屉滑入方向","en-US":"Edge the drawer slides in from"}},{name:"size",type:"number | string",default:"378",description:{"zh-CN":"左右方向为宽度，上下方向为高度（数字按 px，字符串原样输出）","en-US":"Width for left/right, height for top/bottom (numbers are treated as px; strings are applied as-is)"}},{name:"title",type:"string",default:"—",description:{"zh-CN":"标题","en-US":"Drawer title"}},{name:"closable",type:"boolean",default:"true",description:{"zh-CN":"是否显示右上角关闭按钮","en-US":"Whether to show the close button in the top-right corner"}},{name:"mask",type:"boolean",default:"true",description:{"zh-CN":"是否显示遮罩（关闭时抽屉直接吸附在视口边缘）","en-US":"Whether to show the mask (the drawer docks to the viewport edge when off)"}},{name:"maskClosable",type:"boolean",default:"true",description:{"zh-CN":"点击遮罩是否关闭（mask 关闭时不生效）","en-US":"Whether clicking the mask closes the drawer (no effect when mask is off)"}},{name:"closeOnEsc",type:"boolean",default:"true",description:{"zh-CN":"按 ESC 是否关闭","en-US":"Whether pressing ESC closes the drawer"}},{name:"trapFocus",type:"boolean",default:"true",description:{"zh-CN":"打开期间 Tab 焦点是否循环约束在抽屉内","en-US":"Whether Tab focus cycles within the drawer while open"}},{name:"onOpen",type:"() => void",default:"—",description:{"zh-CN":"打开回调","en-US":"Open callback"}},{name:"onClose",type:"() => void",default:"—",description:{"zh-CN":"关闭回调","en-US":"Close callback"}},{name:"className",type:"string",default:"—",description:{"zh-CN":"附加到抽屉面板的自定义类名","en-US":"Custom class name appended to the drawer panel"}},{name:"style",type:"Record<string, string>",default:"—",description:{"zh-CN":"附加到抽屉面板的自定义样式","en-US":"Custom styles appended to the drawer panel"}}],events:[{vue:"open",react:"onOpen",payload:"—",description:{"zh-CN":"抽屉打开","en-US":"Fired when the drawer opens"}},{vue:"close",react:"onClose",payload:"—",description:{"zh-CN":"抽屉关闭","en-US":"Fired when the drawer closes"}},{vue:"update:visible",react:"—",payload:"boolean",description:{"zh-CN":"v-model:visible 回写","en-US":"Write-back for v-model:visible"}}],slots:[{vue:"default",react:"children",description:{"zh-CN":"抽屉内容","en-US":"Drawer content"}},{vue:"title",react:"renderTitle",description:{"zh-CN":"标题（覆盖 title prop）","en-US":"Title (overrides the title prop)"}},{vue:"footer",react:"renderFooter",description:{"zh-CN":"底部操作区","en-US":"Footer action area"}},{vue:"closeIcon",react:"renderCloseIcon",description:{"zh-CN":"自定义关闭图标（替换右上角内置 close）","en-US":"Custom close icon (replaces the built-in top-right close)"}}],methods:[{name:"open",signature:"() => void",description:{"zh-CN":"打开抽屉（ref 命令式）","en-US":"Open the drawer (via ref)"}},{name:"close",signature:"() => void",description:{"zh-CN":"关闭抽屉（ref 命令式）","en-US":"Close the drawer (via ref)"}},{name:"toggle",signature:"() => void",description:{"zh-CN":"切换显隐（ref 命令式）","en-US":"Toggle visibility (via ref)"}}]},notes:[{"zh-CN":"footer 无默认按钮（与 Modal 不同），底部操作区完全由 footer 插槽接管。","en-US":"Unlike Modal, there is no default footer; the footer area is fully controlled by the footer slot."},{"zh-CN":"ref 实例类型为 DrawerRef，提供 open() / close() / toggle() 三个方法。","en-US":"The ref instance is of type DrawerRef, providing open() / close() / toggle()."},{"zh-CN":"size 作用于交叉轴：left/right 方向设置 width，top/bottom 方向设置 height。","en-US":"size applies to the cross axis: width for left/right, height for top/bottom."}],a11y:[{"zh-CN":'面板携带 role="dialog"（mask 开启时附加 aria-modal="true"）；打开时聚焦面板，Tab / Shift+Tab 循环约束在抽屉内。',"en-US":'The panel carries role="dialog" (plus aria-modal="true" when mask is on); it receives focus on open, and Tab / Shift+Tab cycle within the drawer.'},{"zh-CN":"关闭后焦点恢复到打开前的元素，键盘用户不会丢失位置；支持 ESC 关闭（closeOnEsc）。","en-US":"Focus returns to the pre-open element after close so keyboard users keep their place; ESC to close is supported (closeOnEsc)."}]},aS=[sE,NE,HE,iA,bA,BA,qA,lR,$R,HR,eB,pB,kB,LB,tO,dO,kO,OO,PO,oZ,vZ,TZ,LZ,JZ,g8,M8,J8,Sj,Vj,oD],lS=new Map(aS.map(e=>[e.slug,e])),iD=()=>YT.map(e=>({category:e,components:XT.filter(t=>t.category===e.key)}));function sD(e,t){const n=Jy.createRoot(e);return n.render(B.createElement(t)),n}var oS={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(a){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},s={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function f(y){return y instanceof c?new c(y.type,f(y.content),y.alias):Array.isArray(y)?y.map(f):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++o}),f.__id},clone:function f(y,_){_=_||{};var T,N;switch(s.util.type(y)){case"Object":if(N=s.util.objId(y),_[N])return _[N];T={},_[N]=T;for(var A in y)y.hasOwnProperty(A)&&(T[A]=f(y[A],_));return T;case"Array":return N=s.util.objId(y),_[N]?_[N]:(T=[],_[N]=T,y.forEach(function(R,O){T[O]=f(R,_)}),T);default:return y}},getLanguage:function(f){for(;f;){var y=l.exec(f.className);if(y)return y[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,y){f.className=f.className.replace(RegExp(l,"gi"),""),f.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(T){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(f){var y=document.getElementsByTagName("script");for(var _ in y)if(y[_].src==f)return y[_]}return null}},isActive:function(f,y,_){for(var T="no-"+y;f;){var N=f.classList;if(N.contains(y))return!0;if(N.contains(T))return!1;f=f.parentElement}return!!_}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(f,y){var _=s.util.clone(s.languages[f]);for(var T in y)_[T]=y[T];return _},insertBefore:function(f,y,_,T){T=T||s.languages;var N=T[f],A={};for(var R in N)if(N.hasOwnProperty(R)){if(R==y)for(var O in _)_.hasOwnProperty(O)&&(A[O]=_[O]);_.hasOwnProperty(R)||(A[R]=N[R])}var L=T[f];return T[f]=A,s.languages.DFS(s.languages,function(te,Z){Z===L&&te!=f&&(this[te]=A)}),A},DFS:function f(y,_,T,N){N=N||{};var A=s.util.objId;for(var R in y)if(y.hasOwnProperty(R)){_.call(y,R,y[R],T||R);var O=y[R],L=s.util.type(O);L==="Object"&&!N[A(O)]?(N[A(O)]=!0,f(O,_,null,N)):L==="Array"&&!N[A(O)]&&(N[A(O)]=!0,f(O,_,R,N))}}},plugins:{},highlightAll:function(f,y){s.highlightAllUnder(document,f,y)},highlightAllUnder:function(f,y,_){var T={callback:_,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),s.hooks.run("before-all-elements-highlight",T);for(var N=0,A;A=T.elements[N++];)s.highlightElement(A,y===!0,T.callback)},highlightElement:function(f,y,_){var T=s.util.getLanguage(f),N=s.languages[T];s.util.setLanguage(f,T);var A=f.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(A,T);var R=f.textContent,O={element:f,language:T,grammar:N,code:R};function L(Z){O.highlightedCode=Z,s.hooks.run("before-insert",O),O.element.innerHTML=O.highlightedCode,s.hooks.run("after-highlight",O),s.hooks.run("complete",O),_&&_.call(O.element)}if(s.hooks.run("before-sanity-check",O),A=O.element.parentElement,A&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!O.code){s.hooks.run("complete",O),_&&_.call(O.element);return}if(s.hooks.run("before-highlight",O),!O.grammar){L(s.util.encode(O.code));return}if(y&&a.Worker){var te=new Worker(s.filename);te.onmessage=function(Z){L(Z.data)},te.postMessage(JSON.stringify({language:O.language,code:O.code,immediateClose:!0}))}else L(s.highlight(O.code,O.grammar,O.language))},highlight:function(f,y,_){var T={code:f,grammar:y,language:_};if(s.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=s.tokenize(T.code,T.grammar),s.hooks.run("after-tokenize",T),c.stringify(s.util.encode(T.tokens),T.language)},tokenize:function(f,y){var _=y.rest;if(_){for(var T in _)y[T]=_[T];delete y.rest}var N=new p;return h(N,N.head,f),m(f,N,y,N.head,0),k(N)},hooks:{all:{},add:function(f,y){var _=s.hooks.all;_[f]=_[f]||[],_[f].push(y)},run:function(f,y){var _=s.hooks.all[f];if(!(!_||!_.length))for(var T=0,N;N=_[T++];)N(y)}},Token:c};a.Prism=s;function c(f,y,_,T){this.type=f,this.content=y,this.alias=_,this.length=(T||"").length|0}c.stringify=function f(y,_){if(typeof y=="string")return y;if(Array.isArray(y)){var T="";return y.forEach(function(L){T+=f(L,_)}),T}var N={type:y.type,content:f(y.content,_),tag:"span",classes:["token",y.type],attributes:{},language:_},A=y.alias;A&&(Array.isArray(A)?Array.prototype.push.apply(N.classes,A):N.classes.push(A)),s.hooks.run("wrap",N);var R="";for(var O in N.attributes)R+=" "+O+'="'+(N.attributes[O]||"").replace(/"/g,"&quot;")+'"';return"<"+N.tag+' class="'+N.classes.join(" ")+'"'+R+">"+N.content+"</"+N.tag+">"};function d(f,y,_,T){f.lastIndex=y;var N=f.exec(_);if(N&&T&&N[1]){var A=N[1].length;N.index+=A,N[0]=N[0].slice(A)}return N}function m(f,y,_,T,N,A){for(var R in _)if(!(!_.hasOwnProperty(R)||!_[R])){var O=_[R];O=Array.isArray(O)?O:[O];for(var L=0;L<O.length;++L){if(A&&A.cause==R+","+L)return;var te=O[L],Z=te.inside,F=!!te.lookbehind,H=!!te.greedy,ce=te.alias;if(H&&!te.pattern.global){var V=te.pattern.toString().match(/[imsuy]*$/)[0];te.pattern=RegExp(te.pattern.source,V+"g")}for(var se=te.pattern||te,X=T.next,j=N;X!==y.tail&&!(A&&j>=A.reach);j+=X.value.length,X=X.next){var G=X.value;if(y.length>f.length)return;if(!(G instanceof c)){var Q=1,de;if(H){if(de=d(se,j,f,F),!de||de.index>=f.length)break;var Ut=de.index,Ie=de.index+de[0].length,Fe=j;for(Fe+=X.value.length;Ut>=Fe;)X=X.next,Fe+=X.value.length;if(Fe-=X.value.length,j=Fe,X.value instanceof c)continue;for(var pt=X;pt!==y.tail&&(Fe<Ie||typeof pt.value=="string");pt=pt.next)Q++,Fe+=pt.value.length;Q--,G=f.slice(j,Fe),de.index-=j}else if(de=d(se,0,G,F),!de)continue;var Ut=de.index,ra=de[0],gn=G.slice(0,Ut),ie=G.slice(Ut+ra.length),Se=j+G.length;A&&Se>A.reach&&(A.reach=Se);var tt=X.prev;gn&&(tt=h(y,tt,gn),j+=gn.length),g(y,tt,Q);var ue=new c(R,Z?s.tokenize(ra,Z):ra,ce,ra);if(X=h(y,tt,ue),ie&&h(y,X,ie),Q>1){var De={cause:R+","+L,reach:Se};m(f,y,_,X.prev,j,De),A&&De.reach>A.reach&&(A.reach=De.reach)}}}}}}function p(){var f={value:null,prev:null,next:null},y={value:null,prev:f,next:null};f.next=y,this.head=f,this.tail=y,this.length=0}function h(f,y,_){var T=y.next,N={value:_,prev:y,next:T};return y.next=N,T.prev=N,f.length++,N}function g(f,y,_){for(var T=y.next,N=0;N<_&&T!==f.tail;N++)T=T.next;y.next=T,T.prev=y,f.length-=N}function k(f){for(var y=[],_=f.head.next;_!==f.tail;)y.push(_.value),_=_.next;return y}if(!a.document)return a.addEventListener&&(s.disableWorkerMessageHandler||a.addEventListener("message",function(f){var y=JSON.parse(f.data),_=y.language,T=y.code,N=y.immediateClose;a.postMessage(s.highlight(T,s.languages[_],_)),N&&a.close()},!1)),s;var x=s.util.currentScript();x&&(s.filename=x.src,x.hasAttribute("data-manual")&&(s.manual=!0));function S(){s.manual||s.highlightAll()}if(!s.manual){var v=document.readyState;v==="loading"||v==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return s}(t);e.exports&&(e.exports=n),typeof wm<"u"&&(wm.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(l,o){var i={};i["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};s["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var c={};c[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(a,l){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:n.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(a){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+l.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var o=a.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",l=function(x,S){return"✖ Error "+x+" while fetching file: "+S},o="✖ Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",c="loading",d="loaded",m="failed",p="pre[data-src]:not(["+s+'="'+d+'"]):not(['+s+'="'+c+'"])';function h(x,S,v){var f=new XMLHttpRequest;f.open("GET",x,!0),f.onreadystatechange=function(){f.readyState==4&&(f.status<400&&f.responseText?S(f.responseText):f.status>=400?v(l(f.status,f.statusText)):v(o))},f.send(null)}function g(x){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x||"");if(S){var v=Number(S[1]),f=S[2],y=S[3];return f?y?[v,Number(y)]:[v,void 0]:[v,v]}}n.hooks.add("before-highlightall",function(x){x.selector+=", "+p}),n.hooks.add("before-sanity-check",function(x){var S=x.element;if(S.matches(p)){x.code="",S.setAttribute(s,c);var v=S.appendChild(document.createElement("CODE"));v.textContent=a;var f=S.getAttribute("data-src"),y=x.language;if(y==="none"){var _=(/\.(\w+)$/.exec(f)||[,"none"])[1];y=i[_]||_}n.util.setLanguage(v,y),n.util.setLanguage(S,y);var T=n.plugins.autoloader;T&&T.loadLanguages(y),h(f,function(N){S.setAttribute(s,d);var A=g(S.getAttribute("data-range"));if(A){var R=N.split(/\r\n?|\n/g),O=A[0],L=A[1]==null?R.length:A[1];O<0&&(O+=R.length),O=Math.max(0,Math.min(O-1,R.length)),L<0&&(L+=R.length),L=Math.max(0,Math.min(L,R.length)),N=R.slice(O,L).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(O+1))}v.textContent=N,n.highlightElement(v)},function(N){S.setAttribute(s,m),v.textContent=N})}}),n.plugins.fileHighlight={highlight:function(S){for(var v=(S||document).querySelectorAll(p),f=0,y;y=v[f++];)n.highlightElement(y)}};var k=!1;n.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(oS);var rD=oS.exports;const ys=lz(rD);Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=a.variable[1].inside,i=0;i<l.length;i++)o[l[i]]=e.languages.bash[l[i]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const cD={nav:{start:"开始",intro:"介绍",theme:"主题定制",i18n:"国际化",floating:"浮层视口避让",soon:"待补充"},topbar:{light:"明亮",dark:"暗黑",system:"跟随系统",switchLang:"English"},component:{features:"功能特性",scenarios:"使用场景",demos:"代码演示",demosHint:"每个 demo 均可切换 Vue / React 标签页实时交互，并可展开查看对应框架源码。",api:"API 文档",notes:"注意事项",a11y:"无障碍",notFoundTitle:"该组件文档尚未上线",notFoundDesc:"组件已在规划清单中，文档正在陆续补充。",backHome:"返回首页"},demo:{showCode:"查看代码",hideCode:"隐藏代码"},code:{copy:"复制",copied:"已复制"},api:{prop:"属性",type:"类型",default:"默认值",description:"说明",required:"必填",eventsTitle:"Events / 回调",vueEvent:"Events（Vue）",reactCallback:"回调（React）",payload:"载荷",slotsTitle:"Slots / 渲染回调",vueSlot:"插槽（Vue）",methodsTitle:"命令式方法",method:"方法",signature:"签名",typesTitle:"契约类型"},toc:{title:"目录"},home:{heroDesc:"一套核心契约，Vue 3 与 React 19 双端同构的通用组件库",onlineBadge:"组件文档已上线",featuresTitle:"特性",installTitle:"安装",quickStartTitle:"快速开始",overviewTitle:"组件总览",features:[{title:"单一契约 @xui-design/core",desc:"ComponentSpec 是双端唯一合同，Props / Events / Slots 由契约层定义，适配层不得新增分歧。"},{title:"Vue / React 双端同构",desc:"同名组件、同 API 口径：Vue 事件 ↔ React 回调、Vue 插槽 ↔ React renderXxx 一一映射。"},{title:"样式单一来源",desc:"@xui-design/styles 统一输出 BEM 类名与 CSS 变量主题，双端零样式漂移。"},{title:"核心逻辑单份实现",desc:"@xui-design/shared 承载状态与交互逻辑，双端只做薄适配；TypeScript 严格模式全量类型贯通。"}],installCoreComment:"# 如需直接引用契约类型（TableColumn 等），再安装类型包",installStyleComment:"# 应用入口引入一次样式",pendingDesc:"文档建设中"}},uD={nav:{start:"Getting Started",intro:"Introduction",theme:"Theming",i18n:"Internationalization",floating:"Floating Positioning",soon:"Soon"},topbar:{light:"Light",dark:"Dark",system:"System",switchLang:"中文"},component:{features:"Features",scenarios:"When to Use",demos:"Examples",demosHint:"Each demo can be switched between Vue and React tabs for live interaction, with source code available per framework.",api:"API",notes:"Notes",a11y:"Accessibility",notFoundTitle:"Documentation for this component is not available yet",notFoundDesc:"The component is on the roadmap and its documentation is being actively written.",backHome:"Back to Home"},demo:{showCode:"Show Code",hideCode:"Hide Code"},code:{copy:"Copy",copied:"Copied"},api:{prop:"Prop",type:"Type",default:"Default",description:"Description",required:"Required",eventsTitle:"Events / Callbacks",vueEvent:"Event (Vue)",reactCallback:"Callback (React)",payload:"Payload",slotsTitle:"Slots / Render Callbacks",vueSlot:"Slot (Vue)",methodsTitle:"Imperative Methods",method:"Method",signature:"Signature",typesTitle:"Contract Types"},toc:{title:"On this page"},home:{heroDesc:"A universal component library with a single core contract, isomorphic across Vue 3 and React 19",onlineBadge:"component docs available",featuresTitle:"Features",installTitle:"Installation",quickStartTitle:"Quick Start",overviewTitle:"Components Overview",features:[{title:"Single Contract @xui-design/core",desc:"ComponentSpec is the only contract for both frameworks. Props / Events / Slots are defined at the contract layer; adapters must not diverge."},{title:"Isomorphic Vue / React",desc:"Same components, same API surface: Vue events map to React callbacks, Vue slots map to React renderXxx props one by one."},{title:"Single Source of Styles",desc:"@xui-design/styles ships unified BEM class names and CSS variable theming — zero style drift across frameworks."},{title:"Single Core Logic Implementation",desc:"@xui-design/shared holds state and interaction logic; both adapters stay thin. Fully typed under TypeScript strict mode."}],installCoreComment:"# Install the types package if you need contract types (e.g. TableColumn)",installStyleComment:"# Import styles once in your app entry",pendingDesc:"Docs in progress"}},dD={"zh-CN":cD,"en-US":uD},rc=()=>P(()=>dD[LT.locale]),pD={class:"code-block"},mD={class:"code-block__bar"},hD={class:"code-block__lang"},fD={class:"code-block__pre"},vD=["innerHTML"],zr=M({__name:"CodeBlock",props:{code:{},lang:{}},setup(e){const t=rc(),n=e,a=q(!1);let l;const o={vue:"Vue",react:"React TSX",bash:"Shell"},i=P(()=>{const d={vue:ys.languages.markup,react:ys.languages.typescript,bash:ys.languages.bash}[n.lang];return d?ys.highlight(n.code,d,n.lang):n.code}),s=async()=>{try{await navigator.clipboard.writeText(n.code),a.value=!0,clearTimeout(l),l=setTimeout(()=>{a.value=!1},1500)}catch{}};return(c,d)=>(b(),C("div",pD,[w("div",mD,[w("span",hD,$(o[e.lang]),1),w("button",{type:"button",class:"code-block__copy",onClick:s},$(a.value?r(t).code.copied:r(t).code.copy),1)]),w("pre",fD,[w("code",{class:J(["code-block__code",`language-${e.lang}`]),innerHTML:i.value},null,10,vD)])]))}}),gD={class:"demo-block"},bD={class:"demo-block__header"},yD={class:"demo-block__tabs",role:"tablist"},SD=["aria-selected"],xD=["aria-selected"],CD={class:"demo-block__stage"},_D={class:"demo-block__footer"},kD={class:"demo-block__code"},iS=M({__name:"DemoBlock",props:{demo:{}},setup(e){const t=e,n=rc(),a=q("vue"),l=q(!0),o=q(null);let i=null;const s=()=>{i==null||i.unmount(),i=null};return Ge(a,async c=>{c==="react"?(await Nt(),o.value!==null&&i===null&&(i=sD(o.value,t.demo.reactComponent))):s()}),Ed(s),(c,d)=>{const m=aa("ClientOnly");return b(),C("section",gD,[w("div",bD,[w("div",yD,[w("button",{type:"button",class:J(["demo-block__tab",{"is-active":a.value==="vue"}]),role:"tab","aria-selected":a.value==="vue",onClick:d[0]||(d[0]=p=>a.value="vue")}," Vue ",10,SD),w("button",{type:"button",class:J(["demo-block__tab",{"is-active":a.value==="react"}]),role:"tab","aria-selected":a.value==="react",onClick:d[1]||(d[1]=p=>a.value="react")}," React ",10,xD)])]),U(m,null,{default:E(()=>[w("div",CD,[a.value==="vue"?(b(),ae(sn(e.demo.vueComponent),{key:0})):(b(),C("div",{key:1,ref_key:"reactHost",ref:o,class:"demo-block__react-host"},null,512))])]),_:1}),w("div",_D,[w("button",{type:"button",class:"demo-block__toggle",onClick:d[2]||(d[2]=p=>l.value=!l.value)},$(l.value?r(n).demo.hideCode:r(n).demo.showCode),1)]),Nf(w("div",kD,[U(zr,{code:a.value==="vue"?e.demo.vueSource:e.demo.reactSource,lang:a.value},null,8,["code","lang"])],512),[[wS,l.value]])])}}}),wD=M({__name:"ComponentDemo",props:{slug:{},demoId:{}},setup(e){const t=e,n=P(()=>{var a;return(a=lS.get(t.slug))==null?void 0:a.demos.find(l=>l.id===t.demoId)});return(a,l)=>n.value?(b(),ae(iS,{key:0,demo:n.value},null,8,["demo"])):I("",!0)}}),ND={class:"api-table-wrap"},TD={class:"api-table"},zD={class:"api-table__name"},UD=["title"],$D={class:"api-table__type"},ED={class:"api-table__default"},AD={class:"docs-subsection-title"},RD={class:"api-table-wrap"},BD={class:"api-table"},OD={class:"api-table__name"},ZD={class:"api-table__name"},jD={class:"api-table__type"},DD={class:"docs-subsection-title"},MD={class:"api-table-wrap"},LD={class:"api-table"},VD={class:"api-table__name"},HD={class:"api-table__name"},ID={class:"docs-subsection-title"},FD={class:"api-table-wrap"},KD={class:"api-table"},qD={class:"api-table__name"},PD={class:"api-table__signature"},GD={class:"docs-subsection-title"},YD={class:"api-type-block__head"},XD={class:"api-type-block__name"},QD={key:0,class:"api-type-block__desc"},sS=M({__name:"ApiSection",props:{api:{},kind:{default:void 0}},setup(e){const t=e,n=rc(),a=l=>t.kind===void 0||t.kind===l;return(l,o)=>(b(),C("div",null,[a("props")&&e.api.props&&e.api.props.length>0?(b(),C(ne,{key:0},[o[0]||(o[0]=w("h3",{class:"docs-subsection-title"},"Props",-1)),w("div",ND,[w("table",TD,[w("thead",null,[w("tr",null,[w("th",null,$(r(n).api.prop),1),w("th",null,$(r(n).api.type),1),w("th",null,$(r(n).api.default),1),w("th",null,$(r(n).api.description),1)])]),w("tbody",null,[(b(!0),C(ne,null,me(e.api.props,i=>(b(),C("tr",{key:i.name},[w("td",zD,[K($(i.name),1),i.required?(b(),C("span",{key:0,class:"api-table__required",title:r(n).api.required},"*",8,UD)):I("",!0)]),w("td",$D,$(i.type),1),w("td",ED,$(i.default),1),w("td",null,$(r(Ga)(i.description)),1)]))),128))])])])],64)):I("",!0),a("events")&&e.api.events&&e.api.events.length>0?(b(),C(ne,{key:1},[w("h3",AD,$(r(n).api.eventsTitle),1),w("div",RD,[w("table",BD,[w("thead",null,[w("tr",null,[w("th",null,$(r(n).api.vueEvent),1),w("th",null,$(r(n).api.reactCallback),1),w("th",null,$(r(n).api.payload),1),w("th",null,$(r(n).api.description),1)])]),w("tbody",null,[(b(!0),C(ne,null,me(e.api.events,i=>(b(),C("tr",{key:i.vue},[w("td",OD,$(i.vue),1),w("td",ZD,$(i.react),1),w("td",jD,$(i.payload),1),w("td",null,$(r(Ga)(i.description)),1)]))),128))])])])],64)):I("",!0),a("slots")&&e.api.slots&&e.api.slots.length>0?(b(),C(ne,{key:2},[w("h3",DD,$(r(n).api.slotsTitle),1),w("div",MD,[w("table",LD,[w("thead",null,[w("tr",null,[w("th",null,$(r(n).api.vueSlot),1),w("th",null,$(r(n).api.reactCallback),1),w("th",null,$(r(n).api.description),1)])]),w("tbody",null,[(b(!0),C(ne,null,me(e.api.slots,i=>(b(),C("tr",{key:i.vue},[w("td",VD,$(i.vue),1),w("td",HD,$(i.react),1),w("td",null,$(r(Ga)(i.description)),1)]))),128))])])])],64)):I("",!0),a("methods")&&e.api.methods&&e.api.methods.length>0?(b(),C(ne,{key:3},[w("h3",ID,$(r(n).api.methodsTitle),1),w("div",FD,[w("table",KD,[w("thead",null,[w("tr",null,[w("th",null,$(r(n).api.method),1),w("th",null,$(r(n).api.signature),1),w("th",null,$(r(n).api.description),1)])]),w("tbody",null,[(b(!0),C(ne,null,me(e.api.methods,i=>(b(),C("tr",{key:i.name},[w("td",qD,$(i.name),1),w("td",PD,$(i.signature),1),w("td",null,$(r(Ga)(i.description)),1)]))),128))])])])],64)):I("",!0),a("types")&&e.api.types&&e.api.types.length>0?(b(),C(ne,{key:4},[w("h3",GD,$(r(n).api.typesTitle),1),(b(!0),C(ne,null,me(e.api.types,i=>(b(),C("div",{key:i.name,class:"api-type-block"},[w("div",YD,[w("span",XD,$(i.name),1),i.description?(b(),C("span",QD,$(r(Ga)(i.description)),1)):I("",!0)]),U(zr,{code:i.definition,lang:"react"},null,8,["code"])]))),128))],64)):I("",!0)]))}}),JD=M({__name:"ComponentApi",props:{slug:{},kind:{}},setup(e){const t=e,n=P(()=>lS.get(t.slug));return(a,l)=>n.value?(b(),ae(sS,{key:0,api:n.value.api,kind:e.kind},null,8,["api","kind"])):I("",!0)}}),WD={class:"demo-column"},eM={class:"demo-row"},tM={class:"demo-row"},nM=M({__name:"dark",setup(e){const t=q(fi()),n=q(!0),a=q("");(()=>{a.value=z()?"跟随主题的输入框":"Themed input"})();const o=s=>{Zr(s),t.value=fi()},i=()=>{t.value=Ff()};return(s,c)=>(b(),C("div",WD,[w("div",eM,[U(r(W),{type:"primary",onClick:c[0]||(c[0]=d=>o("dark"))},{default:E(()=>[K($(r(z)()?"切换为暗色":"Switch to Dark"),1)]),_:1}),U(r(W),{onClick:c[1]||(c[1]=d=>o("light"))},{default:E(()=>[K($(r(z)()?"切换为浅色":"Switch to Light"),1)]),_:1}),U(r(W),{type:"link",onClick:i},{default:E(()=>[K($(r(z)()?"往返切换":"Toggle"),1)]),_:1}),U(r(Cn),{type:t.value==="dark"?"warning":"primary"},{default:E(()=>[K($(r(z)()?"当前":"Current")+"："+$(t.value==="dark"?"dark":"light"),1)]),_:1},8,["type"])]),U(r(Nl),{type:"info",title:r(z)()?"全局主题":"Global Theme",description:r(z)()?"Alert / Button / Input / Switch 等组件颜色全部随主题联动。":"Alert / Button / Input / Switch colors all follow the theme."},null,8,["title","description"]),w("div",tM,[U(r(rt),{value:a.value,"onUpdate:value":c[2]||(c[2]=d=>a.value=d),style:{width:"220px"}},null,8,["value"]),U(r(Zt),{value:n.value,"onUpdate:value":c[3]||(c[3]=d=>n.value=d)},null,8,["value"])])]))}});function aM(){const e=oe(),[t,n]=B.useState(fi()),[a,l]=B.useState(!0),[o,i]=B.useState(e?"跟随主题的输入框":"Themed input"),s=c=>{Zr(c),n(fi())};return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{type:"primary",onClick:()=>s("dark"),children:e?"切换为暗色":"Switch to Dark"}),u.jsx(ee,{onClick:()=>s("light"),children:e?"切换为浅色":"Switch to Light"}),u.jsx(ee,{type:"link",onClick:()=>n(Ff()),children:e?"往返切换":"Toggle"}),u.jsxs(_n,{type:t==="dark"?"warning":"primary",children:[e?"当前":"Current","：",t==="dark"?"dark":"light"]})]}),u.jsx(zl,{type:"info",title:e?"全局主题":"Global Theme",description:e?"Alert / Button / Input / Switch 等组件颜色全部随主题联动。":"Alert / Button / Input / Switch colors all follow the theme."}),u.jsxs("div",{className:"demo-row",children:[u.jsx(ut,{value:o,onInput:i,style:{width:"220px"}}),u.jsx(jt,{value:a,onChange:l})]})]})}const lM={class:"demo-column"},oM={class:"demo-row"},iM={class:"demo-row"},sM=M({__name:"tokens",setup(e){const t=q(!0),n={emerald:{"--xui-color-primary":"#10b981","--xui-color-primary-hover":"#059669","--xui-color-primary-active":"#047857"},amber:{"--xui-color-primary":"#f59e0b","--xui-color-primary-hover":"#d97706","--xui-color-primary-active":"#b45309"},rose:{"--xui-color-primary":"#f43f5e","--xui-color-primary-hover":"#e11d48","--xui-color-primary-active":"#be123c"}},a=l=>Kf(n[l]);return(l,o)=>(b(),C("div",lM,[w("div",oM,[U(r(W),{onClick:o[0]||(o[0]=i=>a("emerald"))},{default:E(()=>[K($(r(z)()?"翡翠绿":"Emerald"),1)]),_:1}),U(r(W),{onClick:o[1]||(o[1]=i=>a("amber"))},{default:E(()=>[K($(r(z)()?"琥珀橙":"Amber"),1)]),_:1}),U(r(W),{onClick:o[2]||(o[2]=i=>a("rose"))},{default:E(()=>[K($(r(z)()?"玫红":"Rose"),1)]),_:1}),U(r(W),{type:"link",onClick:o[3]||(o[3]=i=>r(qf)())},{default:E(()=>[K($(r(z)()?"恢复默认品牌色":"Reset to default brand color"),1)]),_:1})]),w("div",iM,[U(r(W),{type:"primary"},{default:E(()=>[K($(r(z)()?"主色按钮":"Primary button"),1)]),_:1}),U(r(Cn),{type:"primary"},{default:E(()=>[K($(r(z)()?"主色标签":"Primary tag"),1)]),_:1}),U(r(Zt),{value:t.value,"onUpdate:value":o[4]||(o[4]=i=>t.value=i)},null,8,["value"])])]))}}),bf={emerald:{"--xui-color-primary":"#10b981","--xui-color-primary-hover":"#059669","--xui-color-primary-active":"#047857"},amber:{"--xui-color-primary":"#f59e0b","--xui-color-primary-hover":"#d97706","--xui-color-primary-active":"#b45309"},rose:{"--xui-color-primary":"#f43f5e","--xui-color-primary-hover":"#e11d48","--xui-color-primary-active":"#be123c"}},yf={emerald:{zh:"翡翠绿",en:"Emerald"},amber:{zh:"琥珀橙",en:"Amber"},rose:{zh:"玫红",en:"Rose"}};function rM(){const e=oe(),[t,n]=B.useState(!0);return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[Object.keys(bf).map(a=>u.jsx(ee,{onClick:()=>Kf(bf[a]),children:e?yf[a].zh:yf[a].en},a)),u.jsx(ee,{type:"link",onClick:()=>qf(),children:e?"恢复默认品牌色":"Reset to default brand color"})]}),u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{type:"primary",children:e?"主色按钮":"Primary button"}),u.jsx(_n,{type:"primary",children:e?"主色标签":"Primary tag"}),u.jsx(jt,{value:t,onChange:n})]})]})}const cM={class:"demo-column"},uM={class:"demo-text"},dM={class:"demo-row",style:{"--xui-color-primary":"#7c3aed","--xui-color-primary-hover":"#6d28d9","--xui-color-primary-active":"#5b21b6"}},pM={class:"demo-row",style:{"--xui-color-danger":"#0ea5e9"}},mM=M({__name:"component",setup(e){return(t,n)=>(b(),C("div",cM,[w("p",uM,$(r(z)()?"在组件 style 上写 CSS 变量即可覆盖主题，仅作用于该组件子树：":"Write CSS variables in the component style to override the theme, scoped to that component subtree only:"),1),w("div",dM,[U(r(W),{type:"primary"},{default:E(()=>[K($(r(z)()?"紫色子树":"Purple subtree"),1)]),_:1}),U(r(Zt),{value:!0})]),w("div",pM,[U(r(W),{type:"danger"},{default:E(()=>[K($(r(z)()?"danger 覆盖为天蓝":"danger overridden to sky blue"),1)]),_:1}),U(r(W),{type:"primary"},{default:E(()=>[K($(r(z)()?"不受影响":"Unaffected"),1)]),_:1})])]))}});function hM(){const e=oe();return u.jsxs("div",{className:"demo-column",children:[u.jsx("p",{className:"demo-text",children:e?"在组件 style 上写 CSS 变量即可覆盖主题，仅作用于该组件子树：":"Write CSS variables in the component style to override the theme, scoped to that component subtree only:"}),u.jsxs("div",{className:"demo-row",style:{"--xui-color-primary":"#7c3aed","--xui-color-primary-hover":"#6d28d9","--xui-color-primary-active":"#5b21b6"},children:[u.jsx(ee,{type:"primary",children:e?"紫色子树":"Purple subtree"}),u.jsx(jt,{value:!0})]}),u.jsxs("div",{className:"demo-row",style:{"--xui-color-danger":"#0ea5e9"},children:[u.jsx(ee,{type:"danger",children:e?"danger 覆盖为天蓝":"danger overridden to sky blue"}),u.jsx(ee,{type:"primary",children:e?"不受影响":"Unaffected"})]})]})}const fM=`<script setup lang="ts">
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
`,vM=`import { useState } from 'react';
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
`,gM=`<script setup lang="ts">
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
`,bM=`import { useState } from 'react';
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
`,yM=`<script setup lang="ts">
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
`,SM=`import type { CSSProperties } from 'react';
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
`,xM=[{id:"dark",title:{"zh-CN":"全局明暗主题切换","en-US":"Global Light & Dark Switching"},description:{"zh-CN":"setTheme 写入 <html data-theme>，全部组件的语义色联动切换；toggleTheme 在 light / dark 间往返。","en-US":"setTheme writes <html data-theme> and every component switches semantic colors accordingly; toggleTheme alternates between light and dark."},vueComponent:nM,reactComponent:aM,vueSource:fM,reactSource:vM},{id:"tokens",title:{"zh-CN":"全局品牌色 token（setThemeTokens）","en-US":"Global Brand Tokens (setThemeTokens)"},description:{"zh-CN":"setThemeTokens 将 CSS 变量写入 <html>，全站所有组件生效；clearThemeTokens 仅清除本 API 写入的 token。","en-US":"setThemeTokens writes CSS variables to <html>, affecting every component site-wide; clearThemeTokens only removes tokens written by this API."},vueComponent:sM,reactComponent:rM,vueSource:gM,reactSource:bM},{id:"scoped",title:{"zh-CN":"组件级主题定制","en-US":"Component-Level Theming"},description:{"zh-CN":"无需任何 API：在组件 style 上直接写 CSS 变量，级联仅作用于该子树，优先级高于全局 token。","en-US":"No API needed: write CSS variables directly on a component style; the cascade applies only to that subtree and takes precedence over global tokens."},vueComponent:mM,reactComponent:hM,vueSource:yM,reactSource:SM}],CM={methods:[{name:"setTheme",signature:"(theme: XuiTheme) => void",description:{"zh-CN":"切换明暗主题（写入 <html data-theme>），值未变化时静默返回","en-US":"Switches the light/dark theme (writes <html data-theme>); returns silently when the value is unchanged"}},{name:"getTheme",signature:"() => XuiTheme",description:{"zh-CN":"读取当前主题；SSR / 无 DOM 环境返回 light","en-US":"Reads the current theme; returns light in SSR / DOM-less environments"}},{name:"toggleTheme",signature:"() => XuiTheme",description:{"zh-CN":"在 light / dark 间往返切换，返回切换后的主题","en-US":"Toggles between light and dark, returning the new theme"}},{name:"subscribeTheme",signature:"(listener: (theme: XuiTheme) => void) => () => void",description:{"zh-CN":"订阅主题变化，返回取消订阅函数","en-US":"Subscribes to theme changes; returns an unsubscribe function"}},{name:"setThemeTokens",signature:"(tokens: ThemeTokens) => void",description:{"zh-CN":"写入全局主题 token（CSS 变量，作用于 <html> 全站生效）；仅接受 -- 开头的变量名，重复调用按合并语义追加 / 覆盖","en-US":"Writes global theme tokens (CSS variables on <html>, effective site-wide); only accepts names starting with --; repeated calls merge, adding or overriding incrementally"}},{name:"clearThemeTokens",signature:"() => void",description:{"zh-CN":"清除全部通过 setThemeTokens 写入的 token（不影响 data-theme 与应用自身变量）","en-US":"Removes all tokens written by setThemeTokens (does not affect data-theme or app-defined variables)"}}],types:[{name:"XuiTheme",definition:"type XuiTheme = 'light' | 'dark';",description:{"zh-CN":"主题名（light 为默认，dark 由 tokens.scss 的 [data-theme=dark] 提供）。","en-US":"Theme name (light is the default; dark is provided by the [data-theme=dark] block in tokens.scss)."}},{name:"ThemeTokens",definition:"type ThemeTokens = Record<string, string>;",description:{"zh-CN":"主题 token 集合：键为 CSS 自定义属性名（-- 开头），值为对应 CSS 值。","en-US":"A set of theme tokens: keys are CSS custom property names (starting with --), values are the corresponding CSS values."}}]},_M={class:"demo-column"},kM={class:"demo-row"},wM={class:"demo-row"},NM=M({__name:"switch",setup(e){const t=q(Oa()),n=q(!1),a=P(()=>[{key:"name",title:z()?"名称":"Name"},{key:"age",title:z()?"年龄":"Age"}]),l=o=>{xo(o),t.value=Oa()};return(o,i)=>(b(),C("div",_M,[w("div",kM,[U(r(W),{type:"primary",onClick:i[0]||(i[0]=s=>l("zh-CN"))},{default:E(()=>[K($(r(z)()?"中文":"Chinese"),1)]),_:1}),U(r(W),{onClick:i[1]||(i[1]=s=>l("en-US"))},{default:E(()=>[...i[4]||(i[4]=[K("English",-1)])]),_:1}),U(r(Cn),{type:"primary"},{default:E(()=>[K($(t.value),1)]),_:1})]),w("div",wM,[U(r(W),{type:"link",onClick:i[2]||(i[2]=s=>n.value=!0)},{default:E(()=>[K($(r(z)()?"打开 Modal":"Open Modal"),1)]),_:1})]),U(r(Zi),{visible:n.value,"onUpdate:visible":i[3]||(i[3]=s=>n.value=s),title:r(z)()?"国际化演示":"i18n Demo"},{default:E(()=>[K($(r(z)()?"底部按钮文案随全局语言切换；点击确认或取消关闭。":"Footer button text follows the global locale; click OK or Cancel to close."),1)]),_:1},8,["visible","title"]),U(r(lo),{columns:a.value,"data-source":[]},null,8,["columns"]),U(r(Qs),{style:{width:"240px"}})]))}});function TM(){const e=oe(),[t,n]=B.useState(Oa()),[a,l]=B.useState(!1),o=[{key:"name",title:e?"名称":"Name"},{key:"age",title:e?"年龄":"Age"}],i=s=>{xo(s),n(Oa())};return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{type:"primary",onClick:()=>i("zh-CN"),children:e?"中文":"Chinese"}),u.jsx(ee,{onClick:()=>i("en-US"),children:"English"}),u.jsx(_n,{type:"primary",children:t})]}),u.jsx("div",{className:"demo-row",children:u.jsx(ee,{type:"link",onClick:()=>l(!0),children:e?"打开 Modal":"Open Modal"})}),u.jsx(Yi,{visible:a,title:e?"国际化演示":"i18n Demo",onOk:()=>l(!1),onCancel:()=>l(!1),onClose:()=>l(!1),children:e?"底部按钮文案随全局语言切换；点击确认或取消关闭。":"Footer button text follows the global locale; click OK or Cancel to close."}),u.jsx(yo,{columns:o,dataSource:[]}),u.jsx(Tr,{style:{width:"240px"}})]})}const zM={class:"demo-column"},UM={class:"demo-row"},$M={class:"demo-row"},EM=M({__name:"custom",setup(e){const t=q(Oa()),n=q(!1),a=q(!1),l=P(()=>[{key:"name",title:z()?"名称":"Name"},{key:"age",title:z()?"年龄":"Age"}]),o=()=>{If("ja-JP",{modal:{ok:"OK",cancel:"キャンセル"},popconfirm:{confirm:"OK",cancel:"キャンセル"},table:{empty:"データがありません"}}),a.value=!0,i("ja-JP")},i=s=>{xo(s),t.value=Oa()};return(s,c)=>(b(),C("div",zM,[w("div",UM,[U(r(W),{type:"primary",disabled:a.value,onClick:o},{default:E(()=>[K($(a.value?r(z)()?"已注册 ja-JP":"ja-JP registered":r(z)()?"注册日语语言包":"Register Japanese locale"),1)]),_:1},8,["disabled"]),U(r(W),{onClick:c[0]||(c[0]=d=>i("zh-CN"))},{default:E(()=>[K($(r(z)()?"回到中文":"Back to Chinese"),1)]),_:1}),U(r(Cn),{type:"primary"},{default:E(()=>[K($(t.value),1)]),_:1})]),w("div",$M,[U(r(W),{type:"link",onClick:c[1]||(c[1]=d=>n.value=!0)},{default:E(()=>[K($(r(z)()?"打开 Modal":"Open Modal"),1)]),_:1}),U(r(al),{content:r(z)()?"确认删除这条数据吗？":"Are you sure you want to delete this record?"},{default:E(()=>[U(r(W),null,{default:E(()=>[K($(r(z)()?"删除":"Delete"),1)]),_:1})]),_:1},8,["content"])]),U(r(Zi),{visible:n.value,"onUpdate:visible":c[2]||(c[2]=d=>n.value=d),title:r(z)()?"自定义语言包":"Custom Locale"},{default:E(()=>[K($(r(z)()?"注册后所有组件文案按新语言渲染，未覆盖的分组回退注册时的基底包。":"After registration, all component text renders in the new language; uncovered groups fall back to the base pack at registration time."),1)]),_:1},8,["visible","title"]),U(r(lo),{columns:l.value,"data-source":[]},null,8,["columns"])]))}});function AM(){const e=oe(),[t,n]=B.useState(Oa()),[a,l]=B.useState(!1),[o,i]=B.useState(!1),s=[{key:"name",title:e?"名称":"Name"},{key:"age",title:e?"年龄":"Age"}],c=m=>{xo(m),n(Oa())},d=()=>{If("ja-JP",{modal:{ok:"OK",cancel:"キャンセル"},popconfirm:{confirm:"OK",cancel:"キャンセル"},table:{empty:"データがありません"}}),i(!0),c("ja-JP")};return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{type:"primary",disabled:o,onClick:d,children:o?e?"已注册 ja-JP":"ja-JP registered":e?"注册日语语言包":"Register Japanese locale"}),u.jsx(ee,{onClick:()=>c("zh-CN"),children:e?"回到中文":"Back to Chinese"}),u.jsx(_n,{type:"primary",children:t})]}),u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{type:"link",onClick:()=>l(!0),children:e?"打开 Modal":"Open Modal"}),u.jsx(pl,{content:e?"确认删除这条数据吗？":"Are you sure you want to delete this record?",children:u.jsx(ee,{children:e?"删除":"Delete"})})]}),u.jsx(Yi,{visible:a,title:e?"自定义语言包":"Custom Locale",onOk:()=>l(!1),onCancel:()=>l(!1),onClose:()=>l(!1),children:e?"注册后所有组件文案按新语言渲染，未覆盖的分组回退注册时的基底包。":"After registration, all component text renders in the new language; uncovered groups fall back to the base pack at registration time."}),u.jsx(yo,{columns:s,dataSource:[]})]})}const RM=`<script setup lang="ts">
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
`,BM=`import { useState } from 'react';
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
`,OM=`<script setup lang="ts">
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
`,ZM=`import { useState } from 'react';
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
`,jM=[{id:"switch",title:{"zh-CN":"内置语言切换（setLocale）","en-US":"Built-in Locale Switching (setLocale)"},description:{"zh-CN":"setLocale('zh-CN' / 'en-US') 即时切换全部组件的内置文案：Modal 按钮、Table 空态与行选择提示、DatePicker 面板标题与星期等。","en-US":"setLocale('zh-CN' / 'en-US') instantly switches the built-in messages of every component: Modal buttons, Table empty state and row selection hints, DatePicker panel titles and weekdays, etc."},vueComponent:NM,reactComponent:TM,vueSource:RM,reactSource:BM},{id:"custom",title:{"zh-CN":"注册自定义语言包（registerLocale）","en-US":"Registering Custom Locales (registerLocale)"},description:{"zh-CN":"registerLocale 按组件分组注册任意语言（组级浅合并，未覆盖分组回退注册时的基底包），setLocale 切换后立即生效。","en-US":"registerLocale registers any language grouped by component (shallow merge per group; uncovered groups fall back to the base pack at registration time) and takes effect immediately after setLocale switches to it."},vueComponent:EM,reactComponent:AM,vueSource:OM,reactSource:ZM}],DM={methods:[{name:"setLocale",signature:"(locale: string) => void",description:{"zh-CN":"切换当前语言；未注册的语言名静默忽略，值未变化时同样静默返回","en-US":"Switches the current locale; unregistered names are silently ignored, and unchanged values return silently"}},{name:"getLocale",signature:"() => string",description:{"zh-CN":"读取当前语言名（默认 DEFAULT_LOCALE）","en-US":"Reads the current locale name (defaults to DEFAULT_LOCALE)"}},{name:"getLocaleData",signature:"() => XuiLocaleData",description:{"zh-CN":"读取当前语言包（返回稳定引用，切换语言时重建）；SSR / 无 DOM 环境同样可用","en-US":"Reads the current locale pack (stable reference, rebuilt on locale change); also safe in SSR / DOM-less environments"}},{name:"registerLocale",signature:"(locale: string, data: XuiLocaleInput) => void",description:{"zh-CN":"注册或覆盖语言包：按组件分组浅合并到该语言的既有包上，未覆盖分组回退基底；无有效变更时不触发通知","en-US":"Registers or overrides a locale pack: shallow-merged per component group onto the existing pack of that locale, with uncovered groups falling back to the base; no notification when nothing actually changes"}},{name:"subscribeLocale",signature:"(listener: (locale: string) => void) => () => void",description:{"zh-CN":"订阅语言变化（回调收到新语言名），返回取消订阅函数","en-US":"Subscribes to locale changes (the callback receives the new locale name); returns an unsubscribe function"}},{name:"useLocaleData",signature:"() => XuiLocaleData",description:{"zh-CN":"双端组件级 Hook（Vue 组合式 / React useSyncExternalStore），组件内读取语言包并响应切换","en-US":"Component-level hook for both frameworks (Vue composable / React useSyncExternalStore); reads the locale pack inside components and reacts to switches"}}],types:[{name:"XuiLocaleData",definition:`type XuiLocaleData = {
  modal: { ok: string; cancel: string };
  popconfirm: { confirm: string; cancel: string };
  table: { empty: string; selectAll: string; selectRow: (index: number) => string };
  pagination: { nav: string; prev: string; next: string };
  datePicker: {
    panel: string; prevMonth: string; nextMonth: string; placeholder: string;
    titleFormat: (year: number, month: number) => string; weekdays: string[];
    confirm: string; cancel: string;
  };
  skeleton: { loading: string };
  breadcrumb: { nav: string };
  select: { searchPlaceholder: string; searchAriaLabel: string; triggerPlaceholder: string };
  timePicker: { panel: string; placeholder: string; confirm: string; cancel: string };
  cascader: { panel: string; placeholder: string };
};`,description:{"zh-CN":"完整语言包结构（按组件分组；函数型字段便于跨语序翻译）。","en-US":"The full locale pack structure (grouped by component; function fields ease translation across word orders)."}},{name:"XuiLocaleInput",definition:"type XuiLocaleInput = Partial<XuiLocaleData>;",description:{"zh-CN":"registerLocale 的入参：只提供需要覆盖的分组，组内字段同为部分覆盖（浅合并）。","en-US":"The input of registerLocale: provide only the groups to override; fields within a group are also partially overridden (shallow merge)."}},{name:"DEFAULT_LOCALE",definition:"const DEFAULT_LOCALE = 'zh-CN';",description:{"zh-CN":"默认语言常量；内置 zh-CN / en-US 两套语言包。","en-US":"The default locale constant; zh-CN and en-US packs are built in."}}]},MM={class:"demo-column"},LM={class:"demo-row"},VM={style:{color:"var(--docs-text-secondary, #888)","font-size":"13px",margin:"8px 0 16px"}},HM=M({__name:"flip",setup(e){const t=q(),n=q(),a=()=>{const o=t.value;if(!o)return;const i=o.getBoundingClientRect();window.scrollTo({top:window.scrollY+i.top-12,behavior:"smooth"})},l=()=>{const o=n.value;if(!o)return;const i=o.getBoundingClientRect();window.scrollTo({top:window.scrollY+i.top-window.innerHeight+i.height+12,behavior:"smooth"})};return(o,i)=>(b(),C("div",MM,[w("div",LM,[U(r(W),{type:"primary",onClick:a},{default:E(()=>[K($(r(z)()?"滚动到视口顶部":"Scroll to viewport top"),1)]),_:1}),U(r(W),{onClick:l},{default:E(()=>[K($(r(z)()?"滚动到视口底部":"Scroll to viewport bottom"),1)]),_:1})]),w("p",VM,$(r(z)()?"点击按钮将触发元素定位到视口边缘，再悬停 / 点击组件观察气泡自动翻转。":"Click a button to position the element at the viewport edge, then hover / click the component to see the popover auto-flip."),1),w("div",{ref_key:"topAnchor",ref:t,class:"demo-row",style:{padding:"8px 0"}},[U(r(In),{content:r(z)()?"上方空间不足 → 翻转到下方":"Not enough space above → flip down",placement:"top"},{default:E(()=>[U(r(W),null,{default:E(()=>[K($(r(z)()?"Tooltip top（近顶部）":"Tooltip top (near top)"),1)]),_:1})]),_:1},8,["content"]),U(r(al),{content:r(z)()?"确认删除此条记录？":"Confirm delete this record?",placement:"top","confirm-text":r(z)()?"删除":"Delete","cancel-text":r(z)()?"取消":"Cancel"},{default:E(()=>[U(r(W),{type:"danger"},{default:E(()=>[...i[0]||(i[0]=[K("Popconfirm top",-1)])]),_:1})]),_:1},8,["content","confirm-text","cancel-text"])],512),i[2]||(i[2]=w("div",{style:{height:"50vh"}},null,-1)),w("div",{ref_key:"bottomAnchor",ref:n,class:"demo-row",style:{padding:"8px 0"}},[U(r(In),{content:r(z)()?"下方空间不足 → 翻转到上方":"Not enough space below → flip up",placement:"bottom"},{default:E(()=>[U(r(W),null,{default:E(()=>[K($(r(z)()?"Tooltip bottom（近底部）":"Tooltip bottom (near bottom)"),1)]),_:1})]),_:1},8,["content"]),U(r(al),{content:r(z)()?"底部确认提交？":"Confirm submit at bottom?",placement:"bottom","confirm-text":r(z)()?"提交":"Submit","cancel-text":r(z)()?"取消":"Cancel"},{default:E(()=>[U(r(W),{type:"primary"},{default:E(()=>[...i[1]||(i[1]=[K("Popconfirm bottom",-1)])]),_:1})]),_:1},8,["content","confirm-text","cancel-text"])],512)]))}});function IM(){const e=oe(),t=B.useRef(null),n=B.useRef(null),a=()=>{const o=t.current;if(!o)return;const i=o.getBoundingClientRect();window.scrollTo({top:window.scrollY+i.top-12,behavior:"smooth"})},l=()=>{const o=n.current;if(!o)return;const i=o.getBoundingClientRect();window.scrollTo({top:window.scrollY+i.top-window.innerHeight+i.height+12,behavior:"smooth"})};return u.jsxs("div",{className:"demo-column",children:[u.jsxs("div",{className:"demo-row",children:[u.jsx(ee,{type:"primary",onClick:a,children:e?"滚动到视口顶部":"Scroll to viewport top"}),u.jsx(ee,{onClick:l,children:e?"滚动到视口底部":"Scroll to viewport bottom"})]}),u.jsx("p",{style:{color:"var(--docs-text-secondary, #888)",fontSize:"13px",margin:"8px 0 16px"},children:e?"点击按钮将触发元素定位到视口边缘，再悬停 / 点击组件观察气泡自动翻转。":"Click a button to position the element at the viewport edge, then hover / click the component to see the popover auto-flip."}),u.jsxs("div",{ref:t,className:"demo-row",style:{padding:"8px 0"},children:[u.jsx(qn,{content:e?"上方空间不足 → 翻转到下方":"Not enough space above → flip down",placement:"top",children:u.jsx(ee,{children:e?"Tooltip top（近顶部）":"Tooltip top (near top)"})}),u.jsx(pl,{content:e?"确认删除此条记录？":"Confirm delete this record?",placement:"top",confirmText:e?"删除":"Delete",cancelText:e?"取消":"Cancel",children:u.jsx(ee,{type:"danger",children:"Popconfirm top"})})]}),u.jsx("div",{style:{height:"50vh"}}),u.jsxs("div",{ref:n,className:"demo-row",style:{padding:"8px 0"},children:[u.jsx(qn,{content:e?"下方空间不足 → 翻转到上方":"Not enough space below → flip up",placement:"bottom",children:u.jsx(ee,{children:e?"Tooltip bottom（近底部）":"Tooltip bottom (near bottom)"})}),u.jsx(pl,{content:e?"底部确认提交？":"Confirm submit at bottom?",placement:"bottom",confirmText:e?"提交":"Submit",cancelText:e?"取消":"Cancel",children:u.jsx(ee,{type:"primary",children:"Popconfirm bottom"})})]})]})}const FM={class:"demo-column"},KM={class:"demo-row"},qM={style:{color:"var(--docs-text-secondary, #888)","font-size":"13px",margin:"8px 0 16px"}},PM=M({__name:"multi",setup(e){const t=q(),n=()=>{const l=t.value;if(!l)return;const o=l.getBoundingClientRect();window.scrollTo({top:window.scrollY+o.top-12,behavior:"smooth"})},a=P(()=>Array.from({length:1e3},(l,o)=>({label:z()?`选项 ${o+1}`:`Option ${o+1}`,value:String(o+1)})));return(l,o)=>(b(),C("div",FM,[w("div",KM,[U(r(W),{type:"primary",onClick:n},{default:E(()=>[K($(r(z)()?"滚动到视口顶部":"Scroll to viewport top"),1)]),_:1})]),w("p",qM,$(r(z)()?"Tooltip / Popconfirm / Select 三组件共用 @xui-design/shared/floating 的翻转与钳制逻辑。滚动到视口顶部后操作各组件，观察气泡 / 面板自动翻转到下方。":"Tooltip / Popconfirm / Select share the flip and clamp logic of @xui-design/shared/floating. Scroll to the viewport top, then interact with each component to see the popover / panel auto-flip downward."),1),w("div",{ref_key:"anchor",ref:t,class:"demo-row",style:{padding:"8px 0",gap:"16px"}},[U(r(In),{content:r(z)()?"Tooltip 共用避让逻辑":"Tooltip shares the avoidance logic",placement:"top"},{default:E(()=>[U(r(W),null,{default:E(()=>[...o[0]||(o[0]=[K("Tooltip",-1)])]),_:1})]),_:1},8,["content"]),U(r(al),{content:r(z)()?"Popconfirm 共用避让逻辑":"Popconfirm shares the avoidance logic",placement:"top","confirm-text":r(z)()?"确定":"OK","cancel-text":r(z)()?"取消":"Cancel"},{default:E(()=>[U(r(W),{type:"primary"},{default:E(()=>[...o[1]||(o[1]=[K("Popconfirm",-1)])]),_:1})]),_:1},8,["content","confirm-text","cancel-text"]),U(r(Pn),{options:a.value,virtual:"",placeholder:r(z)()?"Select（虚拟滚动）":"Select (virtual scroll)",style:{width:"200px"}},null,8,["options","placeholder"])],512)]))}});function GM(){const e=oe(),t=B.useRef(null),n=()=>{const l=t.current;if(!l)return;const o=l.getBoundingClientRect();window.scrollTo({top:window.scrollY+o.top-12,behavior:"smooth"})},a=Array.from({length:1e3},(l,o)=>({label:e?`选项 ${o+1}`:`Option ${o+1}`,value:String(o+1)}));return u.jsxs("div",{className:"demo-column",children:[u.jsx("div",{className:"demo-row",children:u.jsx(ee,{type:"primary",onClick:n,children:e?"滚动到视口顶部":"Scroll to viewport top"})}),u.jsx("p",{style:{color:"var(--docs-text-secondary, #888)",fontSize:"13px",margin:"8px 0 16px"},children:e?"Tooltip / Popconfirm / Select 三组件共用 @xui-design/shared/floating 的翻转与钳制逻辑。滚动到视口顶部后操作各组件，观察气泡 / 面板自动翻转到下方。":"Tooltip / Popconfirm / Select share the flip and clamp logic of @xui-design/shared/floating. Scroll to the viewport top, then interact with each component to see the popover / panel auto-flip downward."}),u.jsxs("div",{ref:t,className:"demo-row",style:{padding:"8px 0",gap:"16px"},children:[u.jsx(qn,{content:e?"Tooltip 共用避让逻辑":"Tooltip shares the avoidance logic",placement:"top",children:u.jsx(ee,{children:"Tooltip"})}),u.jsx(pl,{content:e?"Popconfirm 共用避让逻辑":"Popconfirm shares the avoidance logic",placement:"top",confirmText:e?"确定":"OK",cancelText:e?"取消":"Cancel",children:u.jsx(ee,{type:"primary",children:"Popconfirm"})}),u.jsx(Gn,{options:a,virtual:!0,placeholder:e?"Select（虚拟滚动）":"Select (virtual scroll)",style:{width:"200px"}})]})]})}const YM=`<script setup lang="ts">
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
`,XM=`import { useRef } from 'react';
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
`,QM=`<script setup lang="ts">
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
`,JM=`import { useRef } from 'react';
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
`,WM=[{id:"flip",title:{"zh-CN":"方位翻转（flip）","en-US":"Placement Flipping (flip)"},description:{"zh-CN":'首选方位空间不足且对侧更充足时自动翻转：placement="top" 在视口顶部翻转到 bottom，placement="bottom" 在视口底部翻转到 top。',"en-US":'Flips automatically when the preferred placement lacks space and the opposite side has more: placement="top" flips to bottom at the top of the viewport, and placement="bottom" flips to top at the bottom.'},vueComponent:HM,reactComponent:IM,vueSource:YM,reactSource:XM},{id:"multi",title:{"zh-CN":"三组件共用避让逻辑","en-US":"Three Components, One Avoidance Logic"},description:{"zh-CN":"Tooltip / Popconfirm / Select 双端共用 @xui-design/shared/floating 的翻转与钳制算法，不重复实现。","en-US":"Tooltip / Popconfirm / Select share the flip and clamp algorithms from @xui-design/shared/floating on both frameworks — implemented once."},vueComponent:PM,reactComponent:GM,vueSource:QM,reactSource:JM}],e4={methods:[{name:"resolveFloatingPosition",signature:"(trigger: FloatingRect, popper: FloatingRect, viewport: FloatingViewport, options: ResolveFloatingOptions) => FloatingPosition",description:{"zh-CN":"纯函数：输入触发器 / 浮层 / 视口的坐标矩形，输出最终方位（可能已翻转）与交叉轴平移量；不读 DOM、不写样式，便于单测。","en-US":"Pure function: takes the trigger / popper / viewport rects and returns the final placement (possibly flipped) plus the cross-axis shift; never reads the DOM or writes styles, making it easy to unit test."}},{name:"getViewport",signature:"() => FloatingViewport",description:{"zh-CN":"获取当前视口边界（整页可视区域）；SSR / 无 window 环境返回零矩形（计算结果等价于不翻转不偏移）。","en-US":"Returns the current viewport bounds (the visible page area); returns a zero rect in SSR / window-less environments (equivalent to no flip and no shift)."}},{name:"bindViewportUpdate",signature:"(callback: () => void) => () => void",description:{"zh-CN":"订阅视口变化（scroll capture + resize），回调经 rAF 合并（一帧最多一次）；返回解绑函数，组件卸载时调用即可彻底清理。","en-US":"Subscribes to viewport changes (scroll capture + resize) with callbacks batched via rAF (at most once per frame); returns an unbind function — call it on component unmount for full cleanup."}}],types:[{name:"FloatingPlacement",definition:"type FloatingPlacement = 'top' | 'bottom' | 'left' | 'right';",description:{"zh-CN":"四方位联合类型，与 core 契约的 placement 对齐。","en-US":"Union of the four placements, aligned with the placement contract in core."}},{name:"FloatingRect",definition:`type FloatingRect = {
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
};`,description:{"zh-CN":"避让计算结果：top/bottom 方位 shift 为水平位移（正向右移），left/right 方位为垂直位移（正向下移）。","en-US":"The avoidance result: for top/bottom placements, shift is horizontal (positive moves right); for left/right placements, it is vertical (positive moves down)."}}]},t4=M({__name:"GuideDemo",props:{guide:{},demoId:{}},setup(e){const t=e,n={theme:xM,i18n:jM,floating:WM},a=P(()=>{var l;return(l=n[t.guide])==null?void 0:l.find(o=>o.id===t.demoId)});return(l,o)=>a.value?(b(),ae(iS,{key:0,demo:a.value},null,8,["demo"])):I("",!0)}}),n4=M({__name:"GuideApi",props:{guide:{},kind:{}},setup(e){const t=e,n={theme:CM,i18n:DM,floating:e4},a=P(()=>n[t.guide]);return(l,o)=>a.value?(b(),ae(sS,{key:0,api:a.value,kind:e.kind},null,8,["api","kind"])):I("",!0)}}),a4={class:"docs-home-body"},l4={class:"home-section"},o4={class:"docs-section-title"},i4={class:"demo-block__tabs",style:{margin:"16px 0 12px"}},s4={class:"home-section"},r4={class:"docs-section-title"},c4={class:"home-section"},u4={class:"docs-section-title"},d4={class:"docs-subsection-title"},p4={class:"home-grid"},m4=["href"],h4={class:"home-card__title"},f4={class:"home-card__en"},v4={class:"home-card__desc"},g4={class:"home-card__title"},b4={class:"home-card__en"},y4={class:"home-card__soon"},S4={class:"home-card__desc"},x4="<\/script>",C4=M({__name:"ComponentOverview",setup(e){const{lang:t}=Ri(),n=rc(),a=q("vue"),l=iD().map(h=>({...h,availableList:h.components.filter(g=>g.available),pendingList:h.components.filter(g=>!g.available)})),o=P(()=>t.value==="zh-CN"?"":"/en"),i=h=>Ur(`${o.value}/components/${h}`),s=P(()=>{const h=a.value==="vue"?"main.ts":"main.tsx";return`pnpm add @xui-design/${a.value} @xui-design/styles

${n.value.home.installCoreComment}
pnpm add @xui-design/core

${n.value.home.installStyleComment}
# ${h}:  import '@xui-design/styles'`}),c=P(()=>a.value==="vue"?`<script setup lang="ts">
import { Button } from '@xui-design/vue';
import '@xui-design/styles';
${x4}

<template>
  <Button type="primary">Hello XUI</Button>
</template>`:`import { Button } from '@xui-design/react';
import '@xui-design/styles';

export default function App() {
  return (
    <Button type="primary">Hello XUI</Button>
  );
}`),d=h=>{const g=aS.find(k=>k.slug===h);return g?Ga(g.summary):""},m=h=>z()?h.title:h.name,p=h=>z()?h.name:h.title;return(h,g)=>(b(),C("div",a4,[w("section",l4,[w("h2",o4,$(r(n).home.installTitle),1),w("div",i4,[w("button",{type:"button",class:J(["demo-block__tab",{"is-active":a.value==="vue"}]),onClick:g[0]||(g[0]=k=>a.value="vue")}," Vue ",2),w("button",{type:"button",class:J(["demo-block__tab",{"is-active":a.value==="react"}]),onClick:g[1]||(g[1]=k=>a.value="react")}," React ",2)]),U(zr,{code:s.value,lang:"bash"},null,8,["code"])]),w("section",s4,[w("h2",r4,$(r(n).home.quickStartTitle),1),U(zr,{code:c.value,lang:a.value},null,8,["code","lang"])]),w("section",c4,[w("h2",u4,$(r(n).home.overviewTitle),1),(b(!0),C(ne,null,me(r(l),k=>(b(),C(ne,{key:k.category.key},[w("h3",d4,$(r(Ga)(k.category.title)),1),w("div",p4,[(b(!0),C(ne,null,me(k.availableList,x=>(b(),C("a",{key:x.slug,href:i(x.slug),class:"home-card"},[w("div",h4,[K($(m(x))+" ",1),w("span",f4,$(p(x)),1)]),w("p",v4,$(d(x.slug)),1)],8,m4))),128)),(b(!0),C(ne,null,me(k.pendingList,x=>(b(),C("div",{key:x.slug,class:"home-card is-disabled"},[w("div",g4,[K($(m(x))+" ",1),w("span",b4,$(p(x)),1),w("span",y4,$(r(n).nav.soon),1)]),w("p",S4,$(r(n).home.pendingDesc),1)]))),128))])],64))),128))])]))}}),k4={extends:Of,Layout:()=>NS(PT),enhanceApp({app:e}){delete e._context.components.Content,e.component("Content",GT),e.component("ComponentDemo",wD),e.component("ComponentApi",JD),e.component("GuideDemo",t4),e.component("GuideApi",n4),e.component("ComponentOverview",C4)}};export{k4 as R,H1 as c,ye as u};
