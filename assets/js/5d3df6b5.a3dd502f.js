"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[582],{1232:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return g}});var t=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(5064),s=n(8215),l=(n(6213),n(4800)),b=["components"],c={sidebar_position:3,label:"Breadcrumb"},u="Breadcrumb",m={unversionedId:"usage/components/breadcrumb",id:"usage/components/breadcrumb",isDocsHomePage:!1,title:"Breadcrumb",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/breadcrumb.mdx",sourceDirName:"usage/components",slug:"/usage/components/breadcrumb",permalink:"/twbs-helper-module/docs/usage/components/breadcrumb",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/breadcrumb.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,label:"Breadcrumb"},sidebar:"tutorialSidebar",previous:{title:"Badges",permalink:"/twbs-helper-module/docs/usage/components/badges"},next:{title:"Buttons",permalink:"/twbs-helper-module/docs/usage/components/buttons"}},d=[{value:"Example",id:"example",children:[]}],p={toc:d};function g(e){var a=e.components,n=(0,r.Z)(e,b);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"breadcrumb"},"Breadcrumb"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/breadcrumb/"},"Twitter bootstrap Documentation")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/breadcrumb/#example"},"Twitter bootstrap Documentation")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,i.kt)("div",{dangerouslySetInnerHTML:{__html:'<nav aria-label="breadcrumb">\n    <ol class="breadcrumb">\n        <li class="breadcrumb-item active" aria-current="page">Home</li>\n    </ol>\n</nav>\n<nav aria-label="breadcrumb">\n    <ol class="breadcrumb">\n        <li class="breadcrumb-item"><a href="/">Home</a></li>\n        <li class="breadcrumb-item active" aria-current="page">Library</li>\n    </ol>\n</nav>\n<nav aria-label="breadcrumb">\n    <ol class="breadcrumb">\n        <li class="breadcrumb-item"><a href="/">Home</a></li>\n        <li class="breadcrumb-item"><a href="/library">Library</a></li>\n        <li class="breadcrumb-item active" aria-current="page">Data</li>\n    </ol>\n</nav>'}}))),(0,i.kt)(s.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->breadcrumbs(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Home',\n                'uri'    => '/',\n                'active' => true,\n            ],\n        ]\n    )\n)->setMinDepth(0);\n\necho $this->breadcrumbs(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label' => 'Home',\n                'uri'   => '/',\n                'pages' => [\n                    [\n                        'label'  => 'Library',\n                        'uri'    => '/library',\n                        'active' => true,\n                    ],\n                ],\n            ],\n        ]\n    )\n)->setMinDepth(0);\n\necho $this->breadcrumbs(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label' => 'Home',\n                'uri'   => '/',\n                'pages' => [\n                    [\n                        'label' => 'Library',\n                        'uri'   => '/library',\n                        'pages' => [\n                            [\n                                'label'  => 'Data',\n                                'uri'    => '/library/data',\n                                'active' => true,\n                            ],\n                        ],\n                    ],\n                ],\n            ],\n        ]\n    )\n)->setMinDepth(0);\n\n")))))}g.isMDXComponent=!0}}]);