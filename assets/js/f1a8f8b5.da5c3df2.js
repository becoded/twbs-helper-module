"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[488],{6603:function(a,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return g},metadata:function(){return c},toc:function(){return b},default:function(){return u}});var s=n(7462),t=n(3366),r=(n(7294),n(3905)),d=n(5064),l=n(8215),o=(n(6213),n(4800)),p=["components"],i={sidebar_position:2,label:"Badges"},g="Badges",c={unversionedId:"usage/components/badges",id:"usage/components/badges",isDocsHomePage:!1,title:"Badges",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/badges.mdx",sourceDirName:"usage/components",slug:"/usage/components/badges",permalink:"/twbs-helper-module/docs/usage/components/badges",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/badges.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,label:"Badges"},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/twbs-helper-module/docs/usage/components/alerts"},next:{title:"Breadcrumb",permalink:"/twbs-helper-module/docs/usage/components/breadcrumb"}},b=[{value:"Example",id:"example",children:[]},{value:"Contextual variations",id:"contextual-variations",children:[]},{value:"Pill badges",id:"pill-badges",children:[]},{value:"Links",id:"links",children:[]}],m={toc:b};function u(a){var e=a.components,n=(0,t.Z)(a,p);return(0,r.kt)("wrapper",(0,s.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"badges"},"Badges"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/badge/"},"Twitter bootstrap Documentation")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/badge/#example"},"Twitter bootstrap Documentation")),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,r.kt)(o.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:'<h1>Example heading <span class="badge badge-secondary">New</span>\n</h1>\n<h2>Example heading <span class="badge badge-secondary">New</span>\n</h2>\n<h3>Example heading <span class="badge badge-secondary">New</span>\n</h3>\n<h4>Example heading <span class="badge badge-secondary">New</span>\n</h4>\n<h5>Example heading <span class="badge badge-secondary">New</span>\n</h5>\n<h6>Example heading <span class="badge badge-secondary">New</span>\n</h6>\n<br></br>\n<button type="button" name="button" class="btn btn-primary" value="">\n    Profile <span class="badge badge-light">9</span>\n    <span class="sr-only">unread messages</span>\n</button>'}}))),(0,r.kt)(l.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// H1\necho '<h1>Example heading '.$this->badge('New').'</h1>';\n// H2\necho '<h2>Example heading '.$this->badge('New').'</h2>';\n// H3\necho '<h3>Example heading '.$this->badge('New').'</h3>';\n// H4\necho '<h4>Example heading '.$this->badge('New').'</h4>';\n// H5\necho '<h5>Example heading '.$this->badge('New').'</h5>';\n// H6\necho '<h6>Example heading '.$this->badge('New').'</h6>';\n\necho PHP_EOL.'<br/>';\n\n// Button\necho $this->formButton(\n    [\n        'options' => [\n            'label'   => 'Profile '.$this->badge('9', 'light').'<span class=\"sr-only\">unread messages</span>',\n            'variant' => 'primary',\n        ],\n    ]\n);\n\n")))),(0,r.kt)("h2",{id:"contextual-variations"},"Contextual variations"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/badge/#contextual-variations"},"Twitter bootstrap Documentation")),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,r.kt)(o.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:'<span class="badge badge-primary">Primary</span>\n<span class="badge badge-secondary">Secondary</span>\n<span class="badge badge-success">Success</span>\n<span class="badge badge-danger">Danger</span>\n<span class="badge badge-warning">Warning</span>\n<span class="badge badge-info">Info</span>\n<span class="badge badge-light">Light</span>\n<span class="badge badge-dark">Dark</span>'}}))),(0,r.kt)(l.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nforeach ([\n    'primary',\n    'secondary',\n    'success',\n    'danger',\n    'warning',\n    'info',\n    'light',\n    'dark',\n] as $sVariant) {\n    echo $this->badge(ucfirst($sVariant), $sVariant);\n}\n\n")))),(0,r.kt)("h2",{id:"pill-badges"},"Pill badges"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/badge/#pill-badges"},"Twitter bootstrap Documentation")),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,r.kt)(o.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:'<span class="badge badge-pill badge-primary">Primary</span>\n<span class="badge badge-pill badge-secondary">Secondary</span>\n<span class="badge badge-pill badge-success">Success</span>\n<span class="badge badge-danger badge-pill">Danger</span>\n<span class="badge badge-pill badge-warning">Warning</span>\n<span class="badge badge-info badge-pill">Info</span>\n<span class="badge badge-light badge-pill">Light</span>\n<span class="badge badge-dark badge-pill">Dark</span>'}}))),(0,r.kt)(l.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nforeach ([\n    'primary',\n    'secondary',\n    'success',\n    'danger',\n    'warning',\n    'info',\n    'light',\n    'dark',\n] as $sVariant) {\n    echo $this->badge(\n        ucfirst($sVariant),\n        [\n            'type'    => 'pill',\n            'variant' => $sVariant,\n        ]\n    );\n}\n\n")))),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/badge/#links"},"Twitter bootstrap Documentation")),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,r.kt)(o.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:'<a class="badge badge-primary" href="#">Primary</a>\n<a class="badge badge-secondary" href="#">Secondary</a>\n<a class="badge badge-success" href="#">Success</a>\n<a class="badge badge-danger" href="#">Danger</a>\n<a class="badge badge-warning" href="#">Warning</a>\n<a class="badge badge-info" href="#">Info</a>\n<a class="badge badge-light" href="#">Light</a>\n<a class="badge badge-dark" href="#">Dark</a>'}}))),(0,r.kt)(l.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nforeach ([\n    'primary',\n    'secondary',\n    'success',\n    'danger',\n    'warning',\n    'info',\n    'light',\n    'dark',\n] as $sVariant) {\n    echo $this->badge(\n        ucfirst($sVariant),\n        [\n            'type'    => 'link',\n            'href'    => '#',\n            'variant' => $sVariant,\n\n        ]\n    );\n}\n\n")))))}u.isMDXComponent=!0}}]);