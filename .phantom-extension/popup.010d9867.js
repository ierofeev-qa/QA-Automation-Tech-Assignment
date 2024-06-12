(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequire1d24;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequire1d24=i),i.register("5V6iE",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("jVSWn",(function(t,n){e(t.exports,"default",(function(){return a}));var r=i("lDSNw");function a(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e})),t.current}})),i.register("4fwzh",(function(e,t){e.exports=Promise.all([import("./"+i("5V6iE").resolve("56yXY")),i("22S8I")(new URL(i("5V6iE").resolve("4nILq"),import.meta.url).toString()),import("./"+i("5V6iE").resolve("gXZll"))]).then((()=>i("bNkV0")))})),i.register("22S8I",(function(e,t){var n=i("bDExm");e.exports=n((function(e){return new Promise((function(t,n){var r=document.getElementsByTagName("link");if([].concat(r).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var a=document.createElement("link");a.rel="stylesheet",a.href=e,a.onerror=function(e){a.onerror=a.onload=null,a.remove(),n(e)},a.onload=function(){a.onerror=a.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(a)}}))}))})),i.register("bDExm",(function(e,t){var n={},r={},a={};e.exports=function(e,t){return function(i){var o=function(e){switch(e){case"preload":return r;case"prefetch":return a;default:return n}}(t);return o[i]?o[i]:o[i]=e.apply(null,arguments).catch((function(e){throw delete o[i],e}))}}})),i.register("hMAzI",(function(e,t){e.exports=import("./"+i("5V6iE").resolve("8PnUH")).then((()=>i("3WqdX")))})),i.register("7Fcto",(function(e,t){e.exports=import("./"+i("5V6iE").resolve("cB1wS")).then((()=>i("8FuDc")))})),i.register("dUBWK",(function(e,t){e.exports=import("./"+i("5V6iE").resolve("aGeWF")).then((()=>i("eDKJc")))})),i.register("6xG5P",(function(e,t){e.exports=import("./"+i("5V6iE").resolve("6Z3u4")).then((()=>i("Cx7PX")))})),i.register("54tAn",(function(e,t){e.exports=import("./"+i("5V6iE").resolve("lwXty")).then((()=>i("4jJyn")))})),i.register("axUHJ",(function(n,r){e(n.exports,"PTrans",(function(){return c}),(function(e){return c=e}));var a=i("lMzyG"),o=i("lDSNw"),l=i("kBpKb"),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const c=t(o).memo((e=>{const{children:n,i18nKey:r}=e,i=s(e,["children","i18nKey"]),{t:c}=(0,a.useTranslation)(),u=(0,o.useMemo)((()=>(r?`${c(r,Object.assign(Object.assign({},i),i.values))}`:"").replace(/<\/?[^>]+(>|$)/g,"")),[r,i,c]);return t(o).createElement(l.ErrorBoundary,{fallback:u},t(o).createElement(a.Trans,Object.assign({i18nKey:r},i),n))}))})),i("5V6iE").register(JSON.parse('{"loI2u":"popup.010d9867.js","gXZll":"HomeTabPage.0d4c362a.js","4nILq":"HomeTabPage.e19b9bfc.css","56yXY":"HomeTabPage.1ac78322.js","8PnUH":"CollectionsPage.163591da.js","cB1wS":"SwapTabPage.71ae0f47.js","aGeWF":"RecentActivity.dba769e7.js","6Z3u4":"ExplorePage.4e464988.js","lwXty":"SwapSettingsButton.dcca0fcd.js","9Dpy0":"notification.5cbd182e.css","j3SFb":"phishing.ee434681.js","dIWgK":"metaplex.04cfb981.js","gx39w":"metaplex.a773da4a.js","7jMPF":"collectibles.4fd9b29c.js","azrTG":"staking.037c2788.js","amlOx":"swapper.c615a942.js","fYKro":"notification.626d0955.js","aVNlB":"SettingsConnectHardware.82ec35d5.js","jVEmT":"connect_hardware.87f0ddaf.js","c9zHZ":"onboarding.3646734d.js"}'));var o=i("lDSNw"),l=i("dU2RF"),s=i("aJuCi");i("1KK14");var c=i("9ktGj"),u=i("4yY1D"),d=i("4raQz"),f=i("jlKgL"),m=i("cZIbv"),p=i("kBpKb"),h=i("b883z"),g=i("8WrfF"),v=i("bpTD2"),y=i("lBuGR"),b=i("lMzyG"),E=(o=i("lDSNw"),i("lz7nT")),w=(i("aJuCi"),i("ibYAx")),x=i("aXzxc"),k=i("gMNJN"),T=i("gdILj"),C=i("8182A"),A=i("jZyqE"),M=i("h5kyv"),F=i("d1qx3"),P=i("belzv"),S={};e(S,"useNetworkHealthQuery",(function(){return z}),(function(e){return z=e}));var B=i("lNRH9"),N={};e(N,"fetchNetworkHealth",(function(){return D}),(function(e){return D=e}));v=i("bpTD2");var j=i("8kIyR"),O=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))};const I=e=>`${(0,v.getAPIEnvironment)()}/solana/health/v1?locale=${e}`;function D(e){return O(this,void 0,void 0,(function*(){const t=yield j.rb.headers({Accept:"application/json"}).get(I(e));if(!(0,j.responseIsOkay)(t))throw new Error("Failed to retrieve Solana network health");return t.data}))}var R=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))};function z(e,t){return(0,B.useQuery)({queryKey:["solana","health",{locale:e}],refetchInterval:15e4,enabled:t,queryFn(){return R(this,void 0,void 0,(function*(){return yield(0,N.fetchNetworkHealth)(e)}))}})}function V(e,t){const{data:n}=(0,S.useNetworkHealthQuery)(e,t);return t?n:void 0}b=i("lMzyG");var L,G,$=i("4y59b"),H=i("7dqns"),W=i("c1thM"),K=(o=i("lDSNw"),m=i("cZIbv"),o=i("lDSNw"),i("8PPME"));(G=L||(L={})).NetworkHealth="network-health",G.Cluster="cluster",G.TestnetMode="testnet-mode";const q=(0,o.createContext)(null),Z=()=>{const e=(0,o.useContext)(q);if(!e)throw new Error("Missing banner context. Make sure you're wrapping your component in a <BannerProvider />");return e},J=({children:e})=>{const n=[],[r,a]=(0,o.useReducer)(((e,t)=>{switch(t.type){case"create":return e.concat(t.payload);case"delete":return e.filter((({id:e})=>e!==t.payload.id));case"reset":return n;default:throw new Error("There was an error dispatching a banner action.")}}),n),i=e=>a({type:"delete",payload:{id:e.id}});return t(o).createElement(q.Provider,{value:{banners:r,createBanner:e=>{const{type:t,variant:n,message:r,dismissable:o=!0,icon:l,autohide:s=!0,delay:c=5e3,onClick:u}=e;t&&n&&r||console.error("You must supply a type, variant and message when creating a Banner.");const d=(0,K.default)();return a({type:"create",payload:{id:d,type:t,variant:n,message:r,dismissable:o,icon:l,autohide:s,delay:c,onClick:u}}),s&&setTimeout((()=>{i({id:d})}),c),d},deleteBanner:i,resetBanners:()=>a({type:"reset"})}},e)};var U=i("7J3aJ"),_=(k=i("gMNJN"),i("2LZGp")),X=i("aPmuP"),Y=i("1yIB4"),Q=i("aanFI");const ee=m.default.button`
  cursor: ${e=>e.onClick?"pointer":"default"};
  display: flex;
  align-items: center;
  vertical-align: middle;
  overflow: visible;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  width: 100%;
  padding: 10px 16px;

  svg {
    fill: #fff;
    margin-right: 8px;
  }
`,te=(0,m.default)(W.motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>{switch(e.variant){case Y.CTAVariant.Primary:return(0,$.hexToRGB)("#AB9FF2",.7);case Y.CTAVariant.Success:return(0,$.hexToRGB)("#21E56F",.7);case Y.CTAVariant.Warning:return(0,$.hexToRGB)("#E5A221",.7);case Y.CTAVariant.Danger:return(0,$.hexToRGB)("#EB3742",.7);default:return(0,$.hexToRGB)("#E5A221",.7)}}};

  ${ee} {
    &:focus-visible {
      border-color: ${e=>{switch(e.variant){case Y.CTAVariant.Primary:return(0,$.hexToRGB)("#AB9FF2",.7);case Y.CTAVariant.Success:return(0,$.hexToRGB)("#21E56F",.7);case Y.CTAVariant.Warning:return(0,$.hexToRGB)("#E5A221",.7);case Y.CTAVariant.Danger:return(0,$.hexToRGB)("#EB3742",.7);default:return(0,$.hexToRGB)("#E5A221",.7)}}};
    }
  }
`,ne=m.default.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;

  svg {
    margin-right: 10px;
  }
`,re=m.default.button`
  cursor: pointer;
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  overflow: visible;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;

  &:focus,
  &:focus-visible {
    border-color: ${(0,$.hexToRGB)("#FFFFFF",.3)};
  }

  svg {
    fill: #ffffff;
    margin: 0;
  }
`,ae=(e,n,r)=>{const{banners:a,createBanner:i,deleteBanner:l}=Z(),s=a[a.length-1],{handleShowModalVisibility:c}=(0,_.useModals)(),{showSettingsMenu:u}=(0,U.useSettingsMenu)(),{t:d,i18n:f}=(0,b.useTranslation)(),{cluster:m}=e(),p=k.hooks.useSelectedNetworks().some((e=>P.Chains.isSolanaNetworkID(e))),h=V(f.language,p),g=n(),v=r();(0,o.useEffect)((()=>{const e=a.find((e=>e.type===L.TestnetMode));e&&l({id:e.id}),v?i({type:L.TestnetMode,variant:Y.CTAVariant.Warning,message:d("featureNotSupportedOnLocalNet"),dismissable:!1,autohide:!1,onClick:()=>u(void 0,t(o).createElement(X.MultiChainDeveloperSettings,null))}):g&&i({type:L.TestnetMode,variant:Y.CTAVariant.Warning,message:d("connectionClusterTestnetMode"),dismissable:!1,autohide:!1,onClick:()=>u(void 0,t(o).createElement(X.MultiChainDeveloperSettings,null))})}),[v,g,d]),(0,o.useEffect)((()=>{if(!m)return;const e=a.find((e=>e.type===L.NetworkHealth));if("mainnet-beta"===m){if(h){const{bannerVariant:n,bannerMessage:r,notificationMessageTitle:a,notificationMessage:s}=h;!!n&&!!r?r!==(null==e?void 0:e.message)&&i({type:L.NetworkHealth,variant:n,message:r,dismissable:!1,icon:t(o).createElement(Q.IconExclamationMarkCircle,{width:14,height:14,circleFill:"#FFFFFF",exclamationFill:"transparent"}),autohide:!1,onClick:s&&a?()=>c("networkHealth",{variant:n,title:a,message:s}):void 0}):e&&l({id:e.id})}}else e&&l({id:e.id})}),[m,h]);const y=(0,o.useCallback)((()=>{s&&l({id:s.id})}),[l,s]);return{banner:s,dismissBanner:y}},ie=t(o).memo((e=>{const{banner:n,dismissBanner:r}=e;return t(o).createElement(H.AnimatePresence,null,n&&t(o).createElement(te,{key:"banner",role:"banner","aria-live":(null==n?void 0:n.autohide)?"assertive":"polite","aria-atomic":"true",variant:n.variant,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{ease:"easeOut",duration:.2}},t(o).createElement(ee,{tabIndex:n.onClick?1:-1,onClick:n.onClick},n.icon,t(o).createElement(ne,null,n.message)),n.dismissable&&t(o).createElement(re,{onClick:r},t(o).createElement(Q.IconClose,{width:14,fill:"#FFFFFF"}))))})),oe=()=>{const e=ae(k.hooks.useSelectedSolanaConnection,k.hooks.useIsTestnetMode,k.hooks.useIsLocalnetMode);return t(o).createElement(ie,Object.assign({},e))},le=()=>t(o).createElement(oe,null);Q=i("aanFI");var se=i("ad7JL"),ce=(u=i("4yY1D"),i("6nLCM")),ue=(H=i("7dqns"),W=i("c1thM"),o=i("lDSNw"),E=i("lz7nT"),s=i("aJuCi"),i("jVSWn")),de=(m=i("cZIbv"),i("6ha3o")),fe=(M=i("h5kyv"),i("gKTq7")),me=(W=i("c1thM"),i("egSKH"));o=i("lDSNw");const pe=(0,(m=i("cZIbv")).default)(W.motion.div)`
  position: absolute;
  top: 0px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ab9ff2;
`,he=({refs:e,activeRoute:n,onFinishedAnimating:r,isAnimating:a})=>{const[{x:i,width:l},s]=(0,o.useState)({x:0,width:0}),c=(0,o.useCallback)((()=>{e&&e[n]&&e[n].current&&s({x:e[n].current.offsetLeft,width:e[n].current.getBoundingClientRect().width})}),[n,e]);return(0,o.useEffect)((()=>{c()}),[n,e,c]),(0,o.useEffect)((()=>{const e=t(me)((()=>{c()}),500);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}})),t(o).createElement(pe,{animate:{x:i,width:l},style:{opacity:a?1:0},onAnimationComplete:r,transition:{duration:.4,type:"spring"}})},ge=m.default.div`
  position: relative;
  height: ${60}px;
  display: flex;
`,ve=(0,m.default)(W.motion.div)`
  flex: 1;
  overflow-x: hidden;
  padding: ${({padding:e})=>"number"==typeof e?e:16}px;
`,ye=(0,m.default)(fe.Footer)`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
`,be=t(o).memo((({items:e})=>{const n=(0,E.useLocation)(),r=(0,ue.default)(n),[a,i]=(0,o.useState)(!1),l=(0,o.useMemo)((()=>e.find((e=>(0,s.matchPath)({path:`/${e.route}`,end:!0},n.pathname)))),[e,n.pathname]),c=l&&l.route,d=(0,o.useMemo)((()=>e.reduce(((e,t)=>(e[t.route]=(0,o.createRef)(),e)),{})),[e]),f=n.pathname!=(null==r?void 0:r.pathname)&&null!=(null==r?void 0:r.pathname),m=(0,o.useMemo)((()=>e.map((a=>{const i=t(o).memo((()=>{var i;let l=0;if(f){l=Ee(e,n.pathname,null!==(i=null==r?void 0:r.pathname)&&void 0!==i?i:"")?10:-10}return t(o).createElement(ve,{id:"tab-content","data-testid":`tab-content-${a.route}`,initial:{x:l,opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.1},padding:a.padding},t(o).createElement(de.DetailViewsProvider,{shouldResetOnAccountChange:!0},a.renderContent()))}));return t(o).createElement(s.Route,{key:a.route,path:`/${a.route}`,element:t(o).createElement(i,null)})}))),[e,n]),p=(0,o.useCallback)((e=>{i(!0),M.analytics.capture("tabPress",{data:{target:e}}),u.telemetry.addBreadcrumb(u.FeatureTag.Generic,`Tab changed to ${e}`,u.Severity.Info)}),[]);return t(o).createElement(t(o).Fragment,null,t(o).createElement(H.AnimatePresence,{mode:"wait",initial:!1},t(o).createElement(s.Routes,{location:n,key:n.pathname},m,t(o).createElement(s.Route,{key:"redirection",element:t(o).createElement(W.motion.div,{exit:{opacity:0},transition:{duration:.1}},t(o).createElement(s.Navigate,{to:e[0]?e[0].route:"/"}))}))),t(o).createElement(ge,null,t(o).createElement(he,{refs:d,activeRoute:c,onFinishedAnimating:()=>i(!1),isAnimating:a}),t(o).createElement(ye,{role:"tablist","aria-orientation":"horizontal"},e.map((e=>t(o).createElement(ke,{isActive:c===e.route,key:e.route,item:e,ref:d[e.route],isAnimating:a,onClick:()=>p(e.route)}))))),t(o).createElement("div",{"aria-hidden":!0,"data-testid":"current-route","data-location":n.pathname}))}),((e,t)=>(0,ce.dequal)(e.items.map((e=>e.route)),t.items.map((e=>e.route))))),Ee=(e,t,n)=>e.findIndex((e=>e.route===we(t)))>e.findIndex((e=>e.route===we(n))),we=e=>"/"===e?e:e.replace(/^\/+/g,""),xe=(0,m.default)(E.Link)`
  display: block;
  padding: 15px 0px;
  margin: 0px 12px;
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: white;
    svg {
      fill: white;

      path {
        fill: white;
      }
    }
  }
  :after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    ${e=>e.$isActive&&!e.$isAnimating&&"background-color: #AB9FF2;"}
    ${e=>e.$isAnimating&&"background-color: transparent;"}
  }
  svg {
    fill: #666;
    transition: fill 200ms ease;
    ${e=>e.$isActive&&"fill: white;"}

    path {
      ${e=>e.$isActive?"fill: white;":"fill: #666;"}
    }
  }
`,ke=(0,o.forwardRef)((({isActive:e,item:n,isAnimating:r,onClick:a},i)=>t(o).createElement(xe,{"aria-label":n.label,"data-testid":`bottom-tab-nav-button-${n.route}`,$isActive:e,$isAnimating:r,to:n.route,ref:i,onClick:a},n.renderButton())));var Te={};e(Te,"WhatsNewOverlay",(function(){return Fe}),(function(e){return Fe=e}));b=i("lMzyG"),o=i("lDSNw"),E=i("lz7nT"),m=i("cZIbv"),C=i("8182A");var Ce=i("laYjG"),Ae=i("kn91D"),Me=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))};const Fe=({onClose:e})=>{const{t:n}=(0,b.useTranslation)(),r=(0,E.useNavigate)();return t(o).createElement(Pe,null,t(o).createElement(Be,null,t(o).createElement(Ae.Text,{color:"#e2dffe",size:16,weight:600},n("whatsNewOverlayNew"))),t(o).createElement(Ne,null,n("whatsNewOverlayv3ActionBurnSpam")),t(o).createElement(je,null,n("whatsNewOverlayv3SecondaryText")),t(o).createElement(Oe,{color:"#e2dffe",size:16,weight:500,onClick:()=>Me(void 0,void 0,void 0,(function*(){e(),r(C.Path.Collectibles)}))},n("whatsNewOverlayv2ActionTryItNow")),t(o).createElement(Se,null),t(o).createElement(Ie,null,t(o).createElement(De,{onClick:e})))},Pe=m.default.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: 20px;
`,Se=m.default.div`
  flex: 1;
`,Be=m.default.div`
  margin-top: 40px;
  align-self: center;
  width: 76px;
  height: 35px;
  background-color: rgba(138, 129, 248, 0.1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ne=(0,m.default)(Ae.Text).attrs({size:28,weight:500})`
  align-self: center;
  margin-top: 22px;
  line-height: 34px;
  max-width: 275px;
  text-align: center;
`,je=(0,m.default)(Ae.Text).attrs({size:16,color:"#777"})`
  align-self: center;
  margin-top: 22px;
  max-width: 275px;
  text-align: center;
  span {
    color: white;
  }
`,Oe=(0,m.default)(Ae.Text).attrs({color:"#e2dffe",size:16,weight:500})`
  cursor: pointer;
  margin-top: 22px;
`,Ie=m.default.div``,De=e=>{const{t:n}=(0,b.useTranslation)();return t(o).createElement(Ce.Button,Object.assign({type:"button",theme:"default"},e),n("commandClose"))},Re=t(o).lazy((()=>i("4fwzh"))),ze=t(o).lazy((()=>i("hMAzI"))),Ve=t(o).lazy((()=>i("7Fcto"))),Le=t(o).lazy((()=>i("dUBWK"))),Ge=t(o).lazy((()=>i("6xG5P"))),$e=t(o).lazy((()=>i("54tAn"))),He=()=>{const{data:e}=k.hooks.useWhatsNewOverlay(),{mutateAsync:n}=k.hooks.useSetAcknowledgeWhatsNewOverlay(),{data:r=[]}=k.hooks.useAllMultiChainAccounts(),{data:[a]}=(0,y.useFeatureFlags)(["frontend-enable-session-start"]),{mutateAsync:i}=k.hooks.usePersistApiEnvironment();return(0,T.useEffectOnce)((()=>{A.accountAnalytics.onAppSessionStart(r)}),r.length>0&&a),(0,T.useEffectOnce)((()=>{i()}),v.ENABLE_DEV_SETTINGS),(0,o.useEffect)((()=>{M.analytics.captureOptOutStatus()}),[]),k.hooks.useRemoveLegacyStorageData((0,F.getManifestVersion)()),e?t(o).createElement(t(o).Fragment,null,t(o).createElement(We,null),t(o).createElement(Te.WhatsNewOverlay,{onClose:()=>{n()}})):t(o).createElement(t(o).Fragment,null,t(o).createElement(We,null),t(o).createElement(le,null),t(o).createElement(Ke,null),t(o).createElement("div",{id:w.MODAL_ID}))},We=()=>{const e=(0,s.useMatch)(C.Path.Swap)?t(o).createElement($e,null):null;return t(o).createElement(se.MultichainAccountHeader,{enableEditAccount:!0,enableMenu:!0,rightMenuButton:e,"data-testid":"multichain-account-header"})},Ke=()=>{const{data:e}=k.hooks.useWhatsNewOverlay(),{data:n}=k.hooks.useSelectedMultiChainAccountIdentifier(),{data:r}=k.hooks.useSelectedMultiChainAccount(),a=null==r?void 0:r.isReadOnly,i=y.featureFlagClient.isFeatureEnabled("kill-swapper")||a,l=y.featureFlagClient.isFeatureEnabled("kill-explore"),s=y.featureFlagClient.isFeatureEnabled("kill-collectibles"),{t:c}=(0,b.useTranslation)(),{pathname:u}=(0,E.useLocation)(),d=(0,E.useNavigate)(),{closeAllModals:f}=(0,x.useLegacyModals)();k.hooks.useLogTimestamps(),(0,o.useEffect)((()=>{e||(f(),u!==C.Path.Wallet&&d(C.Path.Wallet))}),[n,e]);const m=(0,o.useMemo)((()=>[{label:c("homeTab"),route:C.Path.Wallet,renderButton:()=>t(o).createElement(Q.IconWallet,null),renderContent:()=>t(o).createElement(Re,null)},s?null:{label:c("collectiblesTab"),route:C.Path.Collectibles,renderButton:()=>t(o).createElement(Q.IconCollectibles,{width:22}),renderContent:()=>t(o).createElement(ze,null)},i?null:{label:c("swapTab"),route:C.Path.Swap,renderButton:()=>t(o).createElement(Q.IconArrowDouble,{width:24,height:24}),renderContent:()=>t(o).createElement(Ve,null)},{label:c("activityTab"),route:C.Path.Notifications,renderButton:()=>t(o).createElement(Q.IconNotifications,null),renderContent:()=>t(o).createElement(Le,null)},l?null:{label:c("exploreTab"),route:C.Path.Explore,renderButton:()=>t(o).createElement(Q.IconGlobeOutline,{width:34}),renderContent:()=>t(o).createElement(Ge,null),padding:0}].filter((e=>null!==e))),[s,l,i,c]);return t(o).createElement(o.Suspense,null,t(o).createElement(be,{items:m}))};w=i("ibYAx");var qe=i("6AorB"),Ze=i("eQcMe"),Je=i("5Doro"),Ue=i("8K6wD"),_e=i("GDiVM"),Xe=(_=i("2LZGp"),i("jPDaF")),Ye=i("a8kcR"),Qe=(M=i("h5kyv"),F=i("d1qx3"),i("8DCD7")),et=i("bLLpR"),tt=i("bcqzL");u.fileLogger.init({provider:et.ClientFileLoggerProvider}),u.telemetry.init({appVersion:(0,F.getManifestVersion)()}),u.telemetry.setUser({id:M.analytics.getDeviceId()}),(0,Qe.initializeFeatureFlags)(),(0,d.reconcilePendingTransactions)(new(0,Xe.LegacyIndexedDBProxy)),(0,d.addOnUpdateHandler)(((e,t)=>(0,d.updateMinedTransactionsHandler)(e,t,M.analytics))),(0,d.addOnRemoveHandler)(d.removeMinedTransactionsHandler);const nt=()=>{(0,o.useEffect)((()=>{M.analytics.capture("popupOpen")}),[]);const e=(0,o.useCallback)((()=>{(0,F.openTabAsync)({url:"onboarding.html"}),window.close()}),[]);return t(o).createElement(t(o).Fragment,null,t(o).createElement(s.MemoryRouter,{future:{v7_startTransition:!0}},t(o).createElement(m.ThemeProvider,{theme:Ye.theme},t(o).createElement(f.ThemeProvider,null,t(o).createElement(tt.ThemedGlobalStyle,{backgroundColor:"#222222"}),t(o).createElement(p.PopupAndNotificationErrorBoundary,null,t(o).createElement(h.Main,{withBorder:!0},t(o).createElement(c.AnalyticsProvider,{analytics:M.analytics},t(o).createElement(J,null,t(o).createElement(Je.QueryProvider,null,t(o).createElement(_e.ExtensionLockWrapper,{openOnboarding:e},t(o).createElement(qe.LegacyModalsProvider,null,t(o).createElement(_.Modals,null,t(o).createElement(Ue.SettingsMenuProvider,null,t(o).createElement(Ze.MenuProvider,null,t(o).createElement(He,null)))))))),t(o).createElement("div",{id:w.MODAL_ID}),t(o).createElement(g.Toaster,null))))))))},rt=document.getElementById("root");(0,l.createRoot)(rt).render(t(o).createElement(nt,null));
//# sourceMappingURL=popup.010d9867.js.map
define=__define;})(window.define);