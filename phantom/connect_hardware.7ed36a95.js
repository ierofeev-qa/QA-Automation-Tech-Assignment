(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=t.parcelRequire1d24;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},t.parcelRequire1d24=i),i.register("65e86",(function(e,n){e.exports=Promise.all([i("j1yuj")(i("2FqAO").getBundleURL("gF3Ru")+i("eOkdY").resolve("edq3C")),i("gx8Ji")(i("2FqAO").getBundleURL("gF3Ru")+i("eOkdY").resolve("9Dpy0")),i("j1yuj")(i("2FqAO").getBundleURL("gF3Ru")+i("eOkdY").resolve("4DuX5")),i("j1yuj")(i("2FqAO").getBundleURL("gF3Ru")+i("eOkdY").resolve("dJiOZ"))]).then((()=>i("gUsWu")))})),i.register("gx8Ji",(function(e,n){"use strict";var t=i("hE0rk");e.exports=t((function(e){return new Promise((function(n,t){var r=document.getElementsByTagName("link");if([].concat(r).some((function(n){return n.href===e&&n.rel.indexOf("stylesheet")>-1})))n();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),t(e)},o.onload=function(){o.onerror=o.onload=null,n()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),i.register("9CNaJ",(function(e,n){"use strict";var t=i("9MCQQ"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function c(e){return t.isMemo(e)?a:u[e.$$typeof]||r}u[t.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[t.Memo]=a;var l=Object.defineProperty,s=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(n,t,r){if("string"!=typeof t){if(m){var i=p(t);i&&i!==m&&e(n,i,r)}var a=s(t);f&&(a=a.concat(f(t)));for(var u=c(n),b=c(t),y=0;y<a.length;++y){var g=a[y];if(!(o[g]||r&&r[g]||b&&b[g]||u&&u[g])){var h=d(t,g);try{l(n,g,h)}catch(e){}}}}return n}})),i.register("9MCQQ",(function(e,n){"use strict";e.exports=i("dJlAX")})),i.register("dJlAX",(function(n,t){
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,o,i,a,u,c,l,s,f,d,p,m,b,y,g,h,x,v,w,k,S,O,j,E,P,$,q,M;e(n.exports,"AsyncMode",(function(){return r}),(function(e){return r=e})),e(n.exports,"ConcurrentMode",(function(){return o}),(function(e){return o=e})),e(n.exports,"ContextConsumer",(function(){return i}),(function(e){return i=e})),e(n.exports,"ContextProvider",(function(){return a}),(function(e){return a=e})),e(n.exports,"Element",(function(){return u}),(function(e){return u=e})),e(n.exports,"ForwardRef",(function(){return c}),(function(e){return c=e})),e(n.exports,"Fragment",(function(){return l}),(function(e){return l=e})),e(n.exports,"Lazy",(function(){return s}),(function(e){return s=e})),e(n.exports,"Memo",(function(){return f}),(function(e){return f=e})),e(n.exports,"Portal",(function(){return d}),(function(e){return d=e})),e(n.exports,"Profiler",(function(){return p}),(function(e){return p=e})),e(n.exports,"StrictMode",(function(){return m}),(function(e){return m=e})),e(n.exports,"Suspense",(function(){return b}),(function(e){return b=e})),e(n.exports,"isAsyncMode",(function(){return y}),(function(e){return y=e})),e(n.exports,"isConcurrentMode",(function(){return g}),(function(e){return g=e})),e(n.exports,"isContextConsumer",(function(){return h}),(function(e){return h=e})),e(n.exports,"isContextProvider",(function(){return x}),(function(e){return x=e})),e(n.exports,"isElement",(function(){return v}),(function(e){return v=e})),e(n.exports,"isForwardRef",(function(){return w}),(function(e){return w=e})),e(n.exports,"isFragment",(function(){return k}),(function(e){return k=e})),e(n.exports,"isLazy",(function(){return S}),(function(e){return S=e})),e(n.exports,"isMemo",(function(){return O}),(function(e){return O=e})),e(n.exports,"isPortal",(function(){return j}),(function(e){return j=e})),e(n.exports,"isProfiler",(function(){return E}),(function(e){return E=e})),e(n.exports,"isStrictMode",(function(){return P}),(function(e){return P=e})),e(n.exports,"isSuspense",(function(){return $}),(function(e){return $=e})),e(n.exports,"isValidElementType",(function(){return q}),(function(e){return q=e})),e(n.exports,"typeOf",(function(){return M}),(function(e){return M=e}));var T="function"==typeof Symbol&&Symbol.for,R=T?Symbol.for("react.element"):60103,C=T?Symbol.for("react.portal"):60106,F=T?Symbol.for("react.fragment"):60107,_=T?Symbol.for("react.strict_mode"):60108,L=T?Symbol.for("react.profiler"):60114,H=T?Symbol.for("react.provider"):60109,N=T?Symbol.for("react.context"):60110,A=T?Symbol.for("react.async_mode"):60111,z=T?Symbol.for("react.concurrent_mode"):60111,B=T?Symbol.for("react.forward_ref"):60112,D=T?Symbol.for("react.suspense"):60113,U=T?Symbol.for("react.suspense_list"):60120,J=T?Symbol.for("react.memo"):60115,I=T?Symbol.for("react.lazy"):60116,Q=T?Symbol.for("react.block"):60121,W=T?Symbol.for("react.fundamental"):60117,V=T?Symbol.for("react.responder"):60118,Y=T?Symbol.for("react.scope"):60119;function X(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case R:switch(e=e.type){case A:case z:case F:case L:case _:case D:return e;default:switch(e=e&&e.$$typeof){case N:case B:case I:case J:case H:return e;default:return n}}case C:return n}}}function G(e){return X(e)===z}r=A,o=z,i=N,a=H,u=R,c=B,l=F,s=I,f=J,d=C,p=L,m=_,b=D,y=function(e){return G(e)||X(e)===A},g=G,h=function(e){return X(e)===N},x=function(e){return X(e)===H},v=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===R},w=function(e){return X(e)===B},k=function(e){return X(e)===F},S=function(e){return X(e)===I},O=function(e){return X(e)===J},j=function(e){return X(e)===C},E=function(e){return X(e)===L},P=function(e){return X(e)===_},$=function(e){return X(e)===D},q=function(e){return"string"==typeof e||"function"==typeof e||e===F||e===z||e===L||e===_||e===D||e===U||"object"==typeof e&&null!==e&&(e.$$typeof===I||e.$$typeof===J||e.$$typeof===H||e.$$typeof===N||e.$$typeof===B||e.$$typeof===W||e.$$typeof===V||e.$$typeof===Y||e.$$typeof===Q)},M=X})),i("eOkdY").register(JSON.parse('{"gF3Ru":"connect_hardware.7ed36a95.js","dJiOZ":"SettingsConnectHardware.a51ea76b.js","4DuX5":"SettingsConnectHardware.6d7ba571.js","9Dpy0":"notification.5cbd182e.css","edq3C":"SettingsConnectHardware.02fd8392.js","dmmQ0":"phishing.26bf82b0.js","b0KbB":"metaplex.a7fe443c.js","8p21e":"metaplex.67571bb6.js","ulmHJ":"collectibles.f7823fac.js","a07i3":"staking.e599f575.js","fu8sn":"swapper.71addccc.js","2hiVS":"multichainMigration.8fdef09c.js"}'));var a=i("29o0l"),u=i("iQL9s"),c=i("gkfw3");i("8gulk");var l=i("csW2r"),s=i("3TM8f"),f=i("8Ub2g"),d=i("2onIY"),p=i("43063"),m=(a=i("29o0l"),c=i("gkfw3"),i("j81qC")),b=i("27SDj");const y=c.default.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`,g=c.default.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 250ms;
  transition-property: color;
  color: #aaa;
  svg {
    fill: #222222;
    color: inherit;
    * {
      color: inherit;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`,h=c.default.a`
  display: flex;
  color: #aaa;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 250ms;
  transition-property: color;
  svg {
    fill: #222222;
    color: inherit;
    * {
      color: inherit;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;var x=i("41yT6"),v=i("4K7Du"),w=i("twk6W"),k=i("gcdBN"),S=i("dNPkM"),O=i("17H3T"),j=i("2jR04"),E=(c=i("gkfw3"),{});e(E,"reset",(function(){return M}),(function(e){return M=e})),e(E,"Reset",(function(){return T}),(function(e){return T=e})),e(E,"default",(function(){return R}),(function(e){return R=e}));var P,$,q=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},M=(0,(c=i("gkfw3")).css)(P||(P=q(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),T=(0,c.createGlobalStyle)($||($=q(["",""],["",""])),M),R=M,C=i("c8OXT");const F=c.css`
  ::-webkit-scrollbar {
    background: #222;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2a2a2a;
    border-radius: 8px;
  }
`,_=c.css`
  ::-webkit-scrollbar {
    display: none;
  }
  * {
    scrollbar-width: none; /* Also needed to disable scrollbar Firefox */
  }
`,L=c.createGlobalStyle`
    ${E.default}

    body, html, * {
        box-sizing: border-box;
        font-family: 'Inter', 'Roboto', Arial;
        user-select: none;
        color: currentColor;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
        -webkit-font-smoothing: antialiased;
    }
    input, textarea {
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
    body {
        color: white;
        background: ${e=>e.backgroundColor};
        min-height: 100vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    *:focus, *:focus-within {
        outline-color: transparent !important;
        outline-style: none !important;
        outline-width: 0px !important;
    }

    ${C.BROWSER_ENV.os.name===n(j).OS_MAP.MacOS||C.BROWSER_ENV.os.name===n(j).OS_MAP.Windows?_:F}
`,H=n(a).lazy((()=>i("65e86")));l.fileLogger.init({provider:O.ClientFileLoggerProvider}),l.telemetry.init({appVersion:(0,k.getManifestVersion)()}),l.telemetry.setUser({id:w.analytics.getDeviceId()}),(0,S.initializeFeatureFlags)();const N=document.getElementById("root");(0,s.createRoot)(N).render(n(a).createElement(u.BrowserRouter,null,n(a).createElement(c.ThemeProvider,{theme:v.theme},n(a).createElement(x.QueryProvider,null,n(a).createElement(L,{backgroundColor:"#E2DFFE"}),n(a).createElement((()=>{const{t:e}=(0,p.useTranslation)();return n(a).createElement(y,null,n(a).createElement(h,{href:d.PHANTOM_WEBSITE_URL,target:"_blank",rel:"noopener noreferrer"},n(a).createElement(m.IconPhantomLogo,{width:32})),n(a).createElement(g,{"data-testid":"full-page-header-support-link",href:d.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},n(a).createElement(m.IconHelp,null),n(a).createElement(b.Text,{color:"#222222",size:16,weight:500,margin:"0 0 0 8px"},e("fullPageHeaderHelp"))))}),null),n(a).createElement(f.OnboardingAndConnectHardwareErrorBoundary,null,n(a).createElement(a.Suspense,{fallback:null},n(a).createElement(H,null))))))),w.analytics.capture("connectHardwareOpen")}();
//# sourceMappingURL=connect_hardware.7ed36a95.js.map
define=__define;})(window.define);