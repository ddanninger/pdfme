"use strict";(self.webpackChunk_pdfme_website=self.webpackChunk_pdfme_website||[]).push([[514,119],{8953:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7378),l=a(5318),r=a(6028),o=a(9131),i=a(8944),c=a(2054),s=a(3059),d=a(5773);var m=function(e){return n.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},u=a(9213),b=a(808),p=a(1884),f=a(5626),h=a(8458),v="menuLinkText_GpDP",E="hasHref_rMs5",g=a(6457),k=["item"],_=["item","onItemClick","activePath","level","index"],C=["item","onItemClick","activePath","level","index"];function N(e){var t=e.item,a=(0,b.Z)(e,k);return"category"===t.type?0===t.items.length?null:n.createElement(S,(0,d.Z)({item:t},a)):n.createElement(Z,(0,d.Z)({item:t},a))}function S(e){var t,a=e.item,l=e.onItemClick,r=e.activePath,o=e.level,s=e.index,m=(0,b.Z)(e,_),f=a.items,h=a.label,k=a.collapsible,C=a.className,N=a.href,S=function(e){var t=(0,g.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(a),Z=(0,c._F)(a,r),I=(0,c.uR)({initialState:function(){return!!k&&(!Z&&a.collapsed)}}),T=I.collapsed,x=I.setCollapsed;!function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,c.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:Z,collapsed:T,setCollapsed:x});var y=(0,c.fP)(),w=y.expandedItem,A=y.setExpandedItem;function P(e){void 0===e&&(e=!T),A(e?null:s),x(e)}var F=(0,c.LU)().autoCollapseSidebarCategories;return(0,n.useEffect)((function(){k&&w&&w!==s&&F&&x(!0)}),[k,w,s,x,F]),n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":T},C)},n.createElement("div",{className:"menu__list-item-collapsible"},n.createElement(p.Z,(0,d.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":k&&!N,"menu__link--active":Z},t[v]=!k,t[E]=!!S,t)),onClick:k?function(e){null==l||l(a),N?P(!1):(e.preventDefault(),P())}:function(){null==l||l(a)},"aria-current":Z?"page":void 0,href:k?null!=S?S:"#":S},m),h),N&&k&&n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:h}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),P()}})),n.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},n.createElement(M,{items:f,tabIndex:T?-1:0,onItemClick:l,activePath:r,level:o+1})))}function Z(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,o=(e.index,(0,b.Z)(e,C)),s=t.href,m=t.label,u=t.className,v=(0,c._F)(t,l);return n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),key:m},n.createElement(p.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:a?function(){return a(t)}:void 0},o),(0,f.Z)(s)?m:n.createElement("span",null,m,n.createElement(h.Z,null))))}var I=["items"];function T(e){var t=e.items,a=(0,b.Z)(e,I);return n.createElement(c.D_,null,t.map((function(e,t){return n.createElement(N,(0,d.Z)({key:t,item:e,index:t},a))})))}var M=(0,n.memo)(T),x="sidebar_hzbe",y="sidebarWithHideableNavbar_wwls",w="sidebarHidden_YxF2",A="sidebarLogo_YMz4",P="menu_kHpq",F="menuWithAnnouncementBar_vODi",L="collapseSidebarButton_e1ki",B="collapseSidebarButtonIcon_s26a";function D(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",L),onClick:t},n.createElement(m,{className:B}))}function H(e){var t,a,l=e.path,r=e.sidebar,o=e.onCollapse,d=e.isHidden,m=function(){var e=(0,c.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,c.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}(),u=(0,c.LU)(),b=u.navbar.hideOnScroll,p=u.hideableSidebar;return n.createElement("div",{className:(0,i.Z)(x,(t={},t[y]=b,t[w]=d,t))},b&&n.createElement(s.Z,{tabIndex:-1,className:A}),n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",P,(a={},a[F]=m,a))},n.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(M,{items:r,activePath:l,level:1}))),p&&n.createElement(D,{onClick:o}))}var R=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(M,{items:a,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return n.createElement(c.Cv,{component:R,props:e})}var z=n.memo(H),q=n.memo(W);function Y(e){var t=(0,c.iP)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(z,e),l&&n.createElement(q,e))}var O=a(2391),U=a(6119),G="backToTopButton_ecpa",J="backToTopButtonShow_xx7T";function K(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var V=function(){var e,t=(0,n.useState)(!1),a=t[0],l=t[1],r=(0,n.useRef)(!1),o=K(),s=o.smoothScrollTop,d=o.cancelScrollToTop;return(0,c.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(r.current)r.current=!1;else{var o=a<n;if(o||d(),a<300)l(!1);else if(o){var i=document.documentElement.scrollHeight;a+window.innerHeight<i&&l(!0)}else l(!1)}})),(0,c.SL)((function(e){e.location.hash&&(r.current=!0,l(!1))})),n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,G,(e={},e[J]=a,e)),type:"button",onClick:function(){return s()}})},X=a(5331),j={docPage:"docPage_zNSk",docMainContainer:"docMainContainer_vJqy",docSidebarContainer:"docSidebarContainer_NEdF",docMainContainerEnhanced:"docMainContainerEnhanced_Fy8f",docSidebarContainerHidden:"docSidebarContainerHidden_PWOl",collapsedDocSidebar:"collapsedDocSidebar_Yq6N",expandSidebarButtonIcon:"expandSidebarButtonIcon_bWt4",docItemWrapperEnhanced:"docItemWrapperEnhanced_bMey"},Q=a(2263);function $(e){var t,a,r,s=e.currentDocRoute,d=e.versionMetadata,b=e.children,p=e.sidebarName,f=(0,c.Vq)(),h=d.pluginId,v=d.version,E=(0,n.useState)(!1),g=E[0],k=E[1],_=(0,n.useState)(!1),C=_[0],N=_[1],S=(0,n.useCallback)((function(){C&&N(!1),k((function(e){return!e}))}),[C]);return n.createElement(o.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,c.os)(h,v)}},n.createElement("div",{className:j.docPage},n.createElement(V,null),f&&n.createElement("aside",{className:(0,i.Z)(c.kM.docs.docSidebarContainer,j.docSidebarContainer,(t={},t[j.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(j.docSidebarContainer)&&g&&N(!0)}},n.createElement(Y,{key:p,sidebar:f,path:s.path,onCollapse:S,isHidden:C}),C&&n.createElement("div",{className:j.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},n.createElement(m,{className:j.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.Z)(j.docMainContainer,(a={},a[j.docMainContainerEnhanced]=g||!f,a))},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",j.docItemWrapper,(r={},r[j.docItemWrapperEnhanced]=g,r))},n.createElement(l.Zo,{components:O.Z},b)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,o=t.find((function(e){return(0,X.LX)(l.pathname,e)}));if(!o)return n.createElement(U.default,null);var i=o.sidebar,s=i?a.docsSidebars[i]:null;return n.createElement(n.Fragment,null,n.createElement(Q.Z,null,n.createElement("html",{className:a.className})),n.createElement(c.qu,{version:a},n.createElement(c.bT,{sidebar:s},n.createElement($,{currentDocRoute:o,versionMetadata:a,sidebarName:i},(0,r.Z)(t,{versionMetadata:a})))))}},6119:function(e,t,a){a.r(t);var n=a(7378),l=a(9131),r=a(9213);t.default=function(){return n.createElement(l.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);