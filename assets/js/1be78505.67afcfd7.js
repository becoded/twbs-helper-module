"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,75],{8704:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),l=n(6291),i=n(308),o=n(6010),c=n(941),d=n(3783),s=n(7898),m=n(5537),u=n(7462),p=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(4973),f=n(3366),b=n(6742),E=n(3919),v=n(8617),g="menuLinkText_1J2g",Z=["items"],k=["item"],_=["item","onItemClick","activePath"],C=["item","onItemClick","activePath"],N=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,Z);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(S,(0,u.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,f.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(y,(0,u.Z)({item:t},n)):a.createElement(I,(0,u.Z)({item:t},n))}function y(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,i=(0,f.Z)(e,_),d=n.items,s=n.label,m=n.collapsible,p=N(n,l),h=(0,c.uR)({initialState:function(){return!!m&&(!p&&n.collapsed)}}),b=h.collapsed,E=h.setCollapsed,v=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n])}({isActive:p,collapsed:b,setCollapsed:E}),a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},a.createElement("a",(0,u.Z)({className:(0,o.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&p},t[g]=!m,t)),onClick:m?function(e){e.preventDefault(),v()}:void 0,href:m?"#":void 0},i),s),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},a.createElement(T,{items:d,tabIndex:b?-1:0,onItemClick:r,activePath:l})))}function I(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=(0,f.Z)(e,C),i=t.href,d=t.label,s=N(t,r);return a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemLink,"menu__list-item"),key:d},a.createElement(b.Z,(0,u.Z)({className:(0,o.Z)("menu__link",{"menu__link--active":s}),"aria-current":s?"page":void 0,to:i},(0,E.Z)(i)&&{onClick:n},l),(0,E.Z)(i)?d:a.createElement("span",null,d,a.createElement(v.Z,null))))}var M="sidebar_15mo",w="sidebarWithHideableNavbar_267A",x="sidebarHidden_2kNb",A="sidebarLogo_3h0W",P="menu_Bmed",L="menuWithAnnouncementBar_2WvA",B="collapseSidebarButton_1CGd",F="collapseSidebarButtonIcon_3E-R";function H(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",B),onClick:t},a.createElement(p,{className:F}))}function D(e){var t,n,r=e.path,l=e.sidebar,i=e.onCollapse,d=e.isHidden,u=function(){var e=(0,c.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,s.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,c.LU)(),h=p.navbar.hideOnScroll,f=p.hideableSidebar,b=(0,c.nT)().isClosed;return a.createElement("div",{className:(0,o.Z)(M,(t={},t[w]=h,t[x]=d,t))},h&&a.createElement(m.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",P,(n={},n[L]=!b&&u,n))},a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(T,{items:l,activePath:r}))),f&&a.createElement(H,{onClick:i}))}var W=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(T,{items:n,activePath:r,onItemClick:function(){return t()}}))};function R(e){return a.createElement(c.Cv,{component:W,props:e})}var O=a.memo(D),z=a.memo(R);function V(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(O,e),r&&a.createElement(z,e))}var Y=n(2238),j=n(4608),J=n(5977),U="backToTopButton_35hR",K="backToTopButtonShow_18ls";function q(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,J.TH)(),n=q(),r=n.smoothScrollTop,l=n.cancelScrollToTop,i=(0,a.useState)(!1),c=i[0],d=i[1];return(0,s.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||l(),n<300)d(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&d(!0)}else d(!1)}}),[t]),a.createElement("button",{className:(0,o.Z)("clean-btn",U,(e={},e[K]=c,e)),type:"button",onClick:function(){return r()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},Q={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},X=n(9105);function $(e){var t,n,l,d=e.currentDocRoute,s=e.versionMetadata,m=e.children,u=s.pluginId,f=s.version,b=d.sidebar,E=b?s.docsSidebars[b]:void 0,v=(0,a.useState)(!1),g=v[0],Z=v[1],k=(0,a.useState)(!1),_=k[0],C=k[1],N=(0,a.useCallback)((function(){_&&C(!1),Z(!g)}),[_]);return a.createElement(i.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,c.os)(u,f)}},a.createElement("div",{className:Q.docPage},a.createElement(G,null),E&&a.createElement("aside",{className:(0,o.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&C(!0)}},a.createElement(V,{key:b,sidebar:E,path:d.path,onCollapse:N,isHidden:_}),_&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(p,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,o.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=g||!E,n))},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(l={},l[Q.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:Y.Z},m)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,J.LX)(r.pathname,e)}));return i?a.createElement(a.Fragment,null,a.createElement(X.Z,null,a.createElement("html",{className:n.className})),a.createElement($,{currentDocRoute:i,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n}))):a.createElement(j.default,e)}},6159:function(e,t,n){n.d(t,{N:function(){return u},Z:function(){return p}});var a=n(3366),r=n(7462),l=n(7294),i=n(6010),o=n(4973),c=n(941),d="anchorWithStickyNavbar_31ik",s="anchorWithHideOnScrollNavbar_3R7-",m=["id"],u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?u:(t=e,function(e){var n,r=e.id,u=(0,a.Z)(e,m),p=(0,c.LU)().navbar.hideOnScroll;return r?l.createElement(t,u,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor","anchor__"+t,(n={},n[s]=p,n[d]=!p,n)),id:r}),u.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,u)});var t}},2238:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),l=n(7294),i=n(9105),o=n(6742),c=n(6213),d=n(6159),s=n(6010),m=n(941),u="details_1VDD";function p(e){var t=Object.assign({},e);return l.createElement(m.PO,(0,a.Z)({},t,{className:(0,s.Z)("alert alert--info",u,t.className)}))}var h=["mdxType","originalType"];var f={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,r.Z)(a,h));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(c.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(o.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(c.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(p,(0,a.Z)({},e,{summary:n}),r)},h1:(0,d.Z)("h1"),h2:(0,d.Z)("h2"),h3:(0,d.Z)("h3"),h4:(0,d.Z)("h4"),h5:(0,d.Z)("h5"),h6:(0,d.Z)("h6")}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(308),l=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);