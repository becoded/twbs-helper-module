"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4191],{7262:function(n,o,e){e.r(o),e.d(o,{assets:function(){return v},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return p}});var l=e(7462),t=e(3366),s=(e(7294),e(3905)),c=e(9877),a=e(2360),d=(e(5710),e(4321)),i=["components"],m={sidebar_position:3,label:"Columns"},r="Columns",u={unversionedId:"usage/layout/columns",id:"usage/layout/columns",title:"Columns",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/layout/columns.mdx",sourceDirName:"usage/layout",slug:"/usage/layout/columns",permalink:"/twbs-helper-module/docs/usage/layout/columns",draft:!1,editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/layout/columns.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,label:"Columns"},sidebar:"tutorialSidebar",previous:{title:"Grid",permalink:"/twbs-helper-module/docs/usage/layout/grid"},next:{title:"Gutters",permalink:"/twbs-helper-module/docs/usage/layout/gutters"}},v={},p=[{value:"Alignment",id:"alignment",level:2},{value:"Vertical alignment",id:"vertical-alignment",level:3},{value:"Horizontal alignment",id:"horizontal-alignment",level:3},{value:"Column wrapping",id:"column-wrapping",level:3},{value:"Column breaks",id:"column-breaks",level:3},{value:"Reordering",id:"reordering",level:2},{value:"Order classes",id:"order-classes",level:3},{value:"Offsetting columns",id:"offsetting-columns",level:3},{value:"Offset classes",id:"offset-classes",level:4},{value:"Margin utilities",id:"margin-utilities",level:4},{value:"Standalone column classes",id:"standalone-column-classes",level:2}],f={toc:p};function h(n){var o=n.components,e=(0,t.Z)(n,i);return(0,s.kt)("wrapper",(0,l.Z)({},f,e,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"columns"},"Columns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/"},"Twitter bootstrap Documentation")),(0,s.kt)("h2",{id:"alignment"},"Alignment"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#alignment"},"Twitter bootstrap Documentation")),(0,s.kt)("h3",{id:"vertical-alignment"},"Vertical alignment"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#vertical-alignment"},"Twitter bootstrap Documentation")),(0,s.kt)(c.Z,{mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="align-items-start row">\n        <div class="col">\n            One of three columns\n        </div>\n        <div class="col">\n            One of three columns\n        </div>\n        <div class="col">\n            One of three columns\n        </div>\n    </div>\n    <div class="align-items-center row">\n        <div class="col">\n            One of three columns\n        </div>\n        <div class="col">\n            One of three columns\n        </div>\n        <div class="col">\n            One of three columns\n        </div>\n    </div>\n    <div class="align-items-end row">\n        <div class="col">\n            One of three columns\n        </div>\n        <div class="col">\n            One of three columns\n        </div>\n        <div class="col">\n            One of three columns\n        </div>\n    </div>\n</div>\n<div class="container">\n    <div class="row">\n        <div class="align-self-start col">\n            One of three columns\n        </div>\n        <div class="align-self-center col">\n            One of three columns\n        </div>\n        <div class="align-self-end col">\n            One of three columns\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(a.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                'One of three columns',\n                'One of three columns',\n                'One of three columns',\n            ],\n            ['align' => 'start'],\n        ],\n        [\n            [\n                'One of three columns',\n                'One of three columns',\n                'One of three columns',\n            ],\n            ['align' => 'center'],\n        ],\n        [\n            [\n                'One of three columns',\n                'One of three columns',\n                'One of three columns',\n            ],\n            ['align' => 'end'],\n        ],\n    ]\n);\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    'One of three columns',\n                    ['align' => 'start'],\n                ],\n                [\n                    'One of three columns',\n                    ['align' => 'center'],\n                ],\n                [\n                    'One of three columns',\n                    ['align' => 'end'],\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h3",{id:"horizontal-alignment"},"Horizontal alignment"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#horizontal-alignment"},"Twitter bootstrap Documentation")),(0,s.kt)(c.Z,{mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="justify-content-start row">\n        <div class="col-4">\n            One of two columns\n        </div>\n        <div class="col-4">\n            One of two columns\n        </div>\n    </div>\n    <div class="justify-content-center row">\n        <div class="col-4">\n            One of two columns\n        </div>\n        <div class="col-4">\n            One of two columns\n        </div>\n    </div>\n    <div class="justify-content-end row">\n        <div class="col-4">\n            One of two columns\n        </div>\n        <div class="col-4">\n            One of two columns\n        </div>\n    </div>\n    <div class="justify-content-around row">\n        <div class="col-4">\n            One of two columns\n        </div>\n        <div class="col-4">\n            One of two columns\n        </div>\n    </div>\n    <div class="justify-content-between row">\n        <div class="col-4">\n            One of two columns\n        </div>\n        <div class="col-4">\n            One of two columns\n        </div>\n    </div>\n    <div class="justify-content-evenly row">\n        <div class="col-4">\n            One of two columns\n        </div>\n        <div class="col-4">\n            One of two columns\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(a.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n            ],\n            ['justify_content' => 'start'],\n        ],\n        [\n            [\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n            ],\n            ['justify_content' => 'center'],\n        ],\n        [\n            [\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n            ],\n            ['justify_content' => 'end'],\n        ],\n        [\n            [\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n            ],\n            ['justify_content' => 'around'],\n        ],\n        [\n            [\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n            ],\n            ['justify_content' => 'between'],\n        ],\n        [\n            [\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n                [\n                    'One of two columns',\n                    ['column' => 4],\n                ],\n            ],\n            ['justify_content' => 'evenly'],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h3",{id:"column-wrapping"},"Column wrapping"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#column-wrapping"},"Twitter bootstrap Documentation")),(0,s.kt)(c.Z,{mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col-9">\n            .col-9\n        </div>\n        <div class="col-4">\n            .col-4<br></br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.\n        </div>\n        <div class="col-6">\n            .col-6<br></br>Subsequent columns continue along the new line.\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(a.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    '.col-9',\n                    ['column' => 9],\n                ],\n                [\n                    '.col-4<br>Since 9 + 4 = 13 &gt; 12, '.'this 4-column-wide div gets wrapped onto a new line as one contiguous unit.',\n                    ['column' => 4],\n                ],\n                [\n                    '.col-6<br>Subsequent columns continue along the new line.',\n                    ['column' => 6],\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h3",{id:"column-breaks"},"Column breaks"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#column-breaks"},"Twitter bootstrap Documentation")),(0,s.kt)(c.Z,{mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col-6 col-sm-3">\n            .col-6 .col-sm-3\n        </div>\n        <div class="col-6 col-sm-3">\n            .col-6 .col-sm-3\n        </div>\n        <div class="w-100"></div>\n        <div class="col-6 col-sm-3">\n            .col-6 .col-sm-3\n        </div>\n        <div class="col-6 col-sm-3">\n            .col-6 .col-sm-3\n        </div>\n    </div>\n</div>\n<div class="container">\n    <div class="row">\n        <div class="col-6 col-sm-4">\n            .col-6 .col-sm-4\n        </div>\n        <div class="col-6 col-sm-4">\n            .col-6 .col-sm-4\n        </div>\n        <div class="d-md-block d-none w-100"></div>\n        <div class="col-6 col-sm-4">\n            .col-6 .col-sm-4\n        </div>\n        <div class="col-6 col-sm-4">\n            .col-6 .col-sm-4\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(a.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                ['.col-6 .col-sm-3'],\n                ['.col-6 .col-sm-3'],\n                [\n                    null,\n                    ['divider' => true],\n                ],\n                ['.col-6 .col-sm-3'],\n                ['.col-6 .col-sm-3'],\n            ],\n            [\n                'column' => [\n                    6,\n                    'sm-3',\n                ],\n            ],\n        ],\n    ]\n);\n\necho $this->grid(\n    [\n        [\n            [\n                ['.col-6 .col-sm-4'],\n                ['.col-6 .col-sm-4'],\n                [\n                    null,\n                    ['divider' => 'md'],\n                ],\n                ['.col-6 .col-sm-4'],\n                ['.col-6 .col-sm-4'],\n            ],\n            [\n                'column' => [\n                    6,\n                    'sm-4',\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"reordering"},"Reordering"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#reordering"},"Twitter bootstrap Documentation")),(0,s.kt)("h3",{id:"order-classes"},"Order classes"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#order-classes"},"Twitter bootstrap Documentation")),(0,s.kt)(c.Z,{mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col">\n            First in DOM, no order applied\n        </div>\n        <div class="col order-5">\n            Second in DOM, with a larger order\n        </div>\n        <div class="col order-1">\n            Third in DOM, with an order of 1\n        </div>\n    </div>\n</div>\n<div class="container">\n    <div class="row">\n        <div class="col order-last">\n            First in DOM, ordered last\n        </div>\n        <div class="col">\n            Second in DOM, unordered\n        </div>\n        <div class="col order-first">\n            Third in DOM, ordered first\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(a.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                'First in DOM, no order applied',\n                [\n                    'Second in DOM, with a larger order',\n                    ['order' => 5],\n                ],\n                [\n                    'Third in DOM, with an order of 1',\n                    ['order' => 1],\n                ],\n            ],\n        ],\n    ]\n);\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    'First in DOM, ordered last',\n                    ['order' => 'last'],\n                ],\n                'Second in DOM, unordered',\n                [\n                    'Third in DOM, ordered first',\n                    ['order' => 'first'],\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h3",{id:"offsetting-columns"},"Offsetting columns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#offsetting-columns"},"Twitter bootstrap Documentation")),(0,s.kt)("h4",{id:"offset-classes"},"Offset classes"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#offset-classes"},"Twitter bootstrap Documentation")),(0,s.kt)(c.Z,{mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col-md-4">\n            .col-md-4\n        </div>\n        <div class="col-md-4 offset-md-4">\n            .col-md-4 .offset-md-4\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-3 offset-md-3">\n            .col-md-3 .offset-md-3\n        </div>\n        <div class="col-md-3 offset-md-3">\n            .col-md-3 .offset-md-3\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-6 offset-md-3">\n            .col-md-6 .offset-md-3\n        </div>\n    </div>\n</div>\n<div class="container">\n    <div class="row">\n        <div class="col-md-6 col-sm-5">\n            .col-sm-5 .col-md-6\n        </div>\n        <div class="col-md-6 col-sm-5 offset-md-0 offset-sm-2">\n            .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-lg-6 col-md-5 col-sm-6">\n            .col-sm-6 .col-md-5 .col-lg-6\n        </div>\n        <div class="col-lg-6 col-md-5 col-sm-6 offset-lg-0 offset-md-2">\n            .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(a.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    '.col-md-4',\n                    ['column' => 'md-4'],\n                ],\n                [\n                    '.col-md-4 .offset-md-4',\n                    [\n                        'column' => 'md-4',\n                        'offset' => 'md-4',\n                    ],\n                ],\n            ],\n        ],\n        [\n            [\n                [\n                    '.col-md-3 .offset-md-3',\n                    [\n                        'column' => 'md-3',\n                        'offset' => 'md-3',\n                    ],\n                ],\n                [\n                    '.col-md-3 .offset-md-3',\n                    [\n                        'column' => 'md-3',\n                        'offset' => 'md-3',\n                    ],\n                ],\n            ],\n        ],\n        [\n            [\n                [\n                    '.col-md-6 .offset-md-3',\n                    [\n                        'column' => 'md-6',\n                        'offset' => 'md-3',\n                    ],\n                ],\n            ],\n        ],\n    ]\n);\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    '.col-sm-5 .col-md-6',\n                    [\n                        'column' => [\n                            'sm-5',\n                            'md-6',\n                        ],\n                    ],\n                ],\n                [\n                    '.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0',\n                    [\n                        'column' => [\n                            'sm-5',\n                            'md-6',\n                        ],\n                        'offset' => [\n                            'sm-2',\n                            'md-0',\n                        ],\n                    ],\n                ],\n            ],\n        ],\n        [\n            [\n                [\n                    '.col-sm-6 .col-md-5 .col-lg-6',\n                    [\n                        'column' => [\n                            'sm-6',\n                            'md-5',\n                            'lg-6',\n                        ],\n                    ],\n                ],\n                [\n                    '.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0',\n                    [\n                        'column' => [\n                            'sm-6',\n                            'md-5',\n                            'lg-6',\n                        ],\n                        'offset' => [\n                            'md-2',\n                            'lg-0',\n                        ],\n                    ],\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h4",{id:"margin-utilities"},"Margin utilities"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#margin-utilities"},"Twitter bootstrap Documentation")),(0,s.kt)(c.Z,{mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col-md-4">\n            .col-md-4\n        </div>\n        <div class="col-md-4 ms-auto">\n            .col-md-4 .ms-auto\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-3 ms-md-auto">\n            .col-md-3 .ms-md-auto\n        </div>\n        <div class="col-md-3 ms-md-auto">\n            .col-md-3 .ms-md-auto\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-auto me-auto">\n            .col-auto .me-auto\n        </div>\n        <div class="col-auto">\n            .col-auto\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(a.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    '.col-md-4',\n                    ['column' => 'md-4'],\n                ],\n                [\n                    '.col-md-4 .ms-auto',\n                    [\n                        'column' => 'md-4',\n                        'class'  => 'ms-auto',\n                    ],\n                ],\n            ],\n        ],\n        [\n            [\n                [\n                    '.col-md-3 .ms-md-auto',\n                    [\n                        'column' => 'md-3',\n                        'class'  => 'ms-md-auto',\n                    ],\n                ],\n                [\n                    '.col-md-3 .ms-md-auto',\n                    [\n                        'column' => 'md-3',\n                        'class'  => 'ms-md-auto',\n                    ],\n                ],\n            ],\n        ],\n        [\n            [\n                [\n                    '.col-auto .me-auto',\n                    [\n                        'column' => 'auto',\n                        'class'  => 'me-auto',\n                    ],\n                ],\n                [\n                    '.col-auto',\n                    ['column' => 'auto'],\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"standalone-column-classes"},"Standalone column classes"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/columns/#order-classes"},"Twitter bootstrap Documentation")),(0,s.kt)(c.Z,{mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="bg-light border col-3 p-3">\n    .col-3: width of 25%\n</div>\n<div class="bg-light border col-sm-9 p-3">\n    .col-sm-9: width of 75% above sm breakpoint\n</div>'}}))),(0,s.kt)(a.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->gridColumn(\n    '.col-3: width of 25%',\n    [\n        'column' => 3,\n        'class'  => 'bg-light border p-3',\n    ]\n);\n\necho $this->gridColumn(\n    '.col-sm-9: width of 75% above sm breakpoint',\n    [\n        'column' => 'sm-9',\n        'class'  => 'bg-light border p-3',\n    ]\n);\n\n")))))}h.isMDXComponent=!0}}]);