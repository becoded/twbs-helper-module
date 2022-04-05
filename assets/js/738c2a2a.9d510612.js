"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[198],{5955:function(t,e,s){s.r(e),s.d(e,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var a=s(7462),n=s(3366),o=(s(7294),s(3905)),l=s(6396),i=s(8215),r=(s(9055),s(4321)),d=["components"],m={sidebar_position:21,label:"Toasts"},u="Toasts",c={unversionedId:"usage/components/toasts",id:"usage/components/toasts",title:"Toasts",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/toasts.mdx",sourceDirName:"usage/components",slug:"/usage/components/toasts",permalink:"/twbs-helper-module/docs/usage/components/toasts",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/toasts.mdx",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,label:"Toasts"},sidebar:"tutorialSidebar",previous:{title:"Spinners",permalink:"/twbs-helper-module/docs/usage/components/spinners"},next:{title:"Tooltips",permalink:"/twbs-helper-module/docs/usage/components/tooltips"}},p=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[],level:3},{value:"Translucent",id:"translucent",children:[],level:3},{value:"Stacking",id:"stacking",children:[],level:3},{value:"Placement",id:"placement",children:[],level:3},{value:"Accessibility",id:"accessibility",children:[],level:3}],level:2}],b={toc:p};function g(t){var e=t.components,s=(0,n.Z)(t,d);return(0,o.kt)("wrapper",(0,a.Z)({},b,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"toasts"},"Toasts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/toasts/"},"Twitter bootstrap Documentation")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/toasts/#examples"},"Twitter bootstrap Documentation")),(0,o.kt)("h3",{id:"basic"},"Basic"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/toasts/#basic"},"Twitter bootstrap Documentation")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,o.kt)("div",{dangerouslySetInnerHTML:{__html:'<div aria-atomic="true" aria-live="assertive" class="toast" role="alert">\n    <div class="toast-header">\n        <img alt="..." class="mr-2 rounded" src="/twbs-helper-module/img/docs/rounded-blue.svg"></img>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small class="text-muted">11 mins ago</small>\n        <button aria-label="Close" class="close mb-1 ml-2" data-dismiss="toast" type="button"><span aria-hidden="true">\xd7</span></button>\n    </div>\n    <div class="toast-body">\n        Hello, world! This is a toast message.\n    </div>\n</div>'}}))),(0,o.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->toast(\n    [\n        'header' => [\n            'image'    => [\n                '/twbs-helper-module/img/docs/rounded-blue.svg',\n                [\n                    'alt'   => '...',\n                    'class' => 'rounded mr-2',\n                ],\n            ],\n            'title'    => 'Bootstrap',\n            'subtitle' => '11 mins ago',\n        ],\n        'body'   => 'Hello, world! This is a toast message.',\n    ]\n);\n\n")))),(0,o.kt)("h3",{id:"translucent"},"Translucent"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/toasts/#translucent"},"Twitter bootstrap Documentation")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,o.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="bg-dark">\n  <div aria-atomic="true" aria-live="assertive" class="toast" role="alert">\n    <div class="toast-header">\n        <img alt="..." class="mr-2 rounded" src="/twbs-helper-module/img/docs/rounded-blue.svg"></img>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small class="text-muted">11 mins ago</small>\n        <button aria-label="Close" class="close mb-1 ml-2" data-dismiss="toast" type="button"><span aria-hidden="true">\xd7</span></button>\n    </div>\n    <div class="toast-body">\n        Hello, world! This is a toast message.\n    </div>\n</div>\n</div>'}}))),(0,o.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n\necho '<div class=\"bg-dark\">';\n\necho $this->toast(\n    [\n        'header' => [\n            'image'    => [\n                '/twbs-helper-module/img/docs/rounded-blue.svg',\n                [\n                    'alt'   => '...',\n                    'class' => 'rounded mr-2',\n                ],\n            ],\n            'title'    => 'Bootstrap',\n            'subtitle' => '11 mins ago',\n        ],\n        'body'   => 'Hello, world! This is a toast message.',\n    ]\n);\n\necho '</div>';\n\n")))),(0,o.kt)("h3",{id:"stacking"},"Stacking"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/toasts/#stacking"},"Twitter bootstrap Documentation")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,o.kt)("div",{dangerouslySetInnerHTML:{__html:'<div aria-atomic="true" aria-live="assertive" class="toast" role="alert">\n    <div class="toast-header">\n        <img alt="..." class="mr-2 rounded" src="/twbs-helper-module/img/docs/rounded-blue.svg"></img>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small class="text-muted">just now</small>\n        <button aria-label="Close" class="close mb-1 ml-2" data-dismiss="toast" type="button"><span aria-hidden="true">\xd7</span></button>\n    </div>\n    <div class="toast-body">\n        See? Just like this.\n    </div>\n</div>\n<div aria-atomic="true" aria-live="assertive" class="toast" role="alert">\n    <div class="toast-header">\n        <img alt="..." class="mr-2 rounded" src="/twbs-helper-module/img/docs/rounded-blue.svg"></img>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small class="text-muted">2 seconds ago</small>\n        <button aria-label="Close" class="close mb-1 ml-2" data-dismiss="toast" type="button"><span aria-hidden="true">\xd7</span></button>\n    </div>\n    <div class="toast-body">\n        Heads up, toasts will stack automatically\n    </div>\n</div>'}}))),(0,o.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n\necho $this->toast(\n    [\n        'header' => [\n            'image'    => [\n                '/twbs-helper-module/img/docs/rounded-blue.svg',\n                [\n                    'alt'   => '...',\n                    'class' => 'rounded mr-2',\n                ],\n            ],\n            'title'    => 'Bootstrap',\n            'subtitle' => 'just now',\n        ],\n        'body'   => 'See? Just like this.',\n    ]\n);\n\necho $this->toast(\n    [\n        'header' => [\n            'image'    => [\n                '/twbs-helper-module/img/docs/rounded-blue.svg',\n                [\n                    'alt'   => '...',\n                    'class' => 'rounded mr-2',\n                ],\n            ],\n            'title'    => 'Bootstrap',\n            'subtitle' => '2 seconds ago',\n        ],\n        'body'   => 'Heads up, toasts will stack automatically',\n    ]\n);\n\n")))),(0,o.kt)("h3",{id:"placement"},"Placement"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/toasts/#placement"},"Twitter bootstrap Documentation")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,o.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="bg-dark" style="position:relative;min-height:200px;">\n  <div aria-atomic="true" aria-live="assertive" class="toast" role="alert" style="position: absolute;right: 0;top: 0;">\n    <div class="toast-header">\n        <img alt="..." class="mr-2 rounded" src="/twbs-helper-module/img/docs/rounded-blue.svg"></img>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small class="text-muted">11 mins ago</small>\n        <button aria-label="Close" class="close mb-1 ml-2" data-dismiss="toast" type="button"><span aria-hidden="true">\xd7</span></button>\n    </div>\n    <div class="toast-body">\n        Hello, world! This is a toast message.\n    </div>\n</div>\n</div>\n<br></br><br></br>\n<div class="bg-dark" style="position:relative;min-height:200px;">\n  <div aria-atomic="true" aria-live="assertive" class="toast" role="alert" style="left: 0;margin-left: auto;margin-right: auto;position: absolute;right: 0;top: 0;">\n    <div class="toast-header">\n        <img alt="..." class="mr-2 rounded" src="/twbs-helper-module/img/docs/rounded-blue.svg"></img>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small class="text-muted">11 mins ago</small>\n        <button aria-label="Close" class="close mb-1 ml-2" data-dismiss="toast" type="button"><span aria-hidden="true">\xd7</span></button>\n    </div>\n    <div class="toast-body">\n        Hello, world! This is a toast message.\n    </div>\n</div>\n</div>'}}))),(0,o.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n\necho '<div class=\"bg-dark\" style=\"position:relative;min-height:200px;\">';\n\necho $this->toast(\n    [\n        'placement' => 'top-right',\n        'header'    => [\n            'image'    => [\n                '/twbs-helper-module/img/docs/rounded-blue.svg',\n                [\n                    'alt'   => '...',\n                    'class' => 'rounded mr-2',\n                ],\n            ],\n            'title'    => 'Bootstrap',\n            'subtitle' => '11 mins ago',\n        ],\n        'body'      => 'Hello, world! This is a toast message.',\n    ]\n);\n\necho '</div>';\n\necho PHP_EOL.'<br/><br/>';\n\necho '<div class=\"bg-dark\" style=\"position:relative;min-height:200px;\">';\n\necho $this->toast(\n    [\n        'placement' => 'top-center',\n        'header'    => [\n            'image'    => [\n                '/twbs-helper-module/img/docs/rounded-blue.svg',\n                [\n                    'alt'   => '...',\n                    'class' => 'rounded mr-2',\n                ],\n            ],\n            'title'    => 'Bootstrap',\n            'subtitle' => '11 mins ago',\n        ],\n        'body'      => 'Hello, world! This is a toast message.',\n    ]\n);\n\necho '</div>';\n\n")))),(0,o.kt)("h3",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/toasts/#accessibility"},"Twitter bootstrap Documentation")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,o.kt)("div",{dangerouslySetInnerHTML:{__html:'<div aria-atomic="true" aria-live="assertive" class="toast" data-autohide="false" role="alert">\n    <div class="toast-header">\n        <img alt="..." class="mr-2 rounded" src="/twbs-helper-module/img/docs/rounded-blue.svg"></img>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small class="text-muted">11 mins ago</small>\n        <button aria-label="Close" class="close mb-1 ml-2" data-dismiss="toast" type="button"><span aria-hidden="true">\xd7</span></button>\n    </div>\n    <div class="toast-body">\n        Hello, world! This is a toast message.\n    </div>\n</div>'}}))),(0,o.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->toast(\n    [\n        'autohide' => false,\n        'header'   => [\n            'image'    => [\n                '/twbs-helper-module/img/docs/rounded-blue.svg',\n                [\n                    'alt'   => '...',\n                    'class' => 'rounded mr-2',\n                ],\n            ],\n            'title'    => 'Bootstrap',\n            'subtitle' => '11 mins ago',\n        ],\n        'body'     => 'Hello, world! This is a toast message.',\n    ]\n);\n\n")))))}g.isMDXComponent=!0}}]);