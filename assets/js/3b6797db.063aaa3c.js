"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5376],{111:function(n,t,l){l.r(t),l.d(t,{assets:function(){return v},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return p}});var o=l(7462),e=l(3366),s=(l(7294),l(3905)),d=l(9877),i=l(2360),r=(l(5710),l(4321)),a=["components"],c={sidebar_position:4,label:"Gutters"},u="Gutters",g={unversionedId:"usage/layout/gutters",id:"usage/layout/gutters",title:"Gutters",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/layout/gutters.mdx",sourceDirName:"usage/layout",slug:"/usage/layout/gutters",permalink:"/twbs-helper-module/docs/usage/layout/gutters",draft:!1,editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/layout/gutters.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,label:"Gutters"},sidebar:"tutorialSidebar",previous:{title:"Columns",permalink:"/twbs-helper-module/docs/usage/layout/columns"},next:{title:"Typography",permalink:"/twbs-helper-module/docs/usage/content/typography"}},v={},p=[{value:"Horizontal gutters",id:"horizontal-gutters",level:2},{value:"Vertical gutters",id:"vertical-gutters",level:2},{value:"Horizontal &amp; vertical gutters",id:"horizontal--vertical-gutters",level:2},{value:"Row columns gutters",id:"row-columns-gutters",level:2},{value:"No gutters",id:"no-gutters",level:2}],m={toc:p};function b(n){var t=n.components,l=(0,e.Z)(n,a);return(0,s.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"gutters"},"Gutters"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/gutters/"},"Twitter bootstrap Documentation")),(0,s.kt)("h2",{id:"horizontal-gutters"},"Horizontal gutters"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/gutters/#horizontal-gutters"},"Twitter bootstrap Documentation")),(0,s.kt)(d.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container px-4">\n    <div class="gx-5 row">\n        <div class="col">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n    </div>\n</div>\n<div class="container overflow-hidden">\n    <div class="gx-5 row">\n        <div class="col">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n            ],\n            ['gutter' => ['horizontal' => '5']],\n        ],\n    ],\n    ['class' => 'px-4']\n);\n\necho $this->grid(\n    [\n        [\n            [\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n            ],\n            ['gutter' => ['horizontal' => '5']],\n        ],\n    ],\n    ['class' => 'overflow-hidden']\n);\n\n")))),(0,s.kt)("h2",{id:"vertical-gutters"},"Vertical gutters"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/gutters/#vertical-gutters"},"Twitter bootstrap Documentation")),(0,s.kt)(d.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container overflow-hidden">\n    <div class="gy-5 row">\n        <div class="col-6">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n        <div class="col-6">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n        <div class="col-6">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n        <div class="col-6">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n            ],\n            [\n                'column' => 6,\n                'gutter' => ['vertical' => '5'],\n            ],\n        ],\n    ],\n    ['class' => 'overflow-hidden']\n);\n\n")))),(0,s.kt)("h2",{id:"horizontal--vertical-gutters"},"Horizontal & vertical gutters"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/gutters/#horizontal--vertical-gutters"},"Twitter bootstrap Documentation")),(0,s.kt)(d.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="g-2 row">\n        <div class="col-6">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n        <div class="col-6">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n        <div class="col-6">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n        <div class="col-6">\n            <div class="bg-light border p-3">\n                Custom column padding\n            </div>\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Custom column padding'.'</div>',\n            ],\n            [\n                'column' => 6,\n                'gutter' => 2,\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"row-columns-gutters"},"Row columns gutters"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/gutters/#row-columns-gutters"},"Twitter bootstrap Documentation")),(0,s.kt)(d.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="g-2 g-lg-3 row row-cols-2 row-cols-lg-5">\n        <div class="col">\n            <div class="bg-light border p-3">\n                Row column\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Row column\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Row column\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Row column\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Row column\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Row column\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Row column\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Row column\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Row column\n            </div>\n        </div>\n        <div class="col">\n            <div class="bg-light border p-3">\n                Row column\n            </div>\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                '<div class=\"bg-light border p-3\">'.'    Row column'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Row column'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Row column'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Row column'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Row column'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Row column'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Row column'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Row column'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Row column'.'</div>',\n                '<div class=\"bg-light border p-3\">'.'    Row column'.'</div>',\n            ],\n            [\n                'columns' => [\n                    2,\n                    'lg-5',\n                ],\n                'gutter'  => [\n                    2,\n                    'lg-3',\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"no-gutters"},"No gutters"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/gutters/#no-gutters"},"Twitter bootstrap Documentation")),(0,s.kt)(d.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="g-0 row">\n    <div class="col-md-8 col-sm-6">\n        .col-sm-6 .col-md-8\n    </div>\n    <div class="col-6 col-md-4">\n        .col-6 .col-md-4\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->gridRow(\n    [\n        [\n            '.col-sm-6 .col-md-8',\n            [\n                'column' => [\n                    'sm-6',\n                    'md-8',\n                ],\n            ],\n        ],\n        [\n            '.col-6 .col-md-4',\n            [\n                'column' => [\n                    6,\n                    'md-4',\n                ],\n            ],\n        ],\n    ],\n    ['gutter' => 0],\n);\n\n")))))}b.isMDXComponent=!0}}]);