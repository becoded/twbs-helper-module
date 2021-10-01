"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[697],{9987:function(e,i,n){n.r(i),n.d(i,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return v}});var t=n(7462),s=n(3366),a=(n(7294),n(3905)),l=n(5064),u=n(8215),o=(n(6213),n(4800)),r=["components"],m={sidebar_position:13,label:"Media object"},c="Media object",d={unversionedId:"usage/components/media-object",id:"usage/components/media-object",isDocsHomePage:!1,title:"Media object",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/media-object.mdx",sourceDirName:"usage/components",slug:"/usage/components/media-object",permalink:"/twbs-helper-module/docs/usage/components/media-object",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/media-object.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,label:"Media object"},sidebar:"tutorialSidebar",previous:{title:"List group",permalink:"/twbs-helper-module/docs/usage/components/list-group"},next:{title:"Modal",permalink:"/twbs-helper-module/docs/usage/components/modal"}},p=[{value:"Example",id:"example",children:[]},{value:"Nesting",id:"nesting",children:[]},{value:"Alignment",id:"alignment",children:[]},{value:"Order",id:"order",children:[]},{value:"Media list",id:"media-list",children:[]}],b={toc:p};function v(e){var i=e.components,n=(0,s.Z)(e,r);return(0,a.kt)("wrapper",(0,t.Z)({},b,n,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"media-object"},"Media object"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/"},"Twitter bootstrap Documentation")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/#example"},"Twitter bootstrap Documentation")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,a.kt)(o.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,a.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="media">\n    <img alt="..." class="mr-3" src="/twbs-helper-module/img/docs/64x64.svg"></img>\n    <div class="media-body">\n        <h5 class="mt-0">Media heading</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n    </div>\n</div>'}}))),(0,a.kt)(u.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->media(\n    [\n        'img'   => [\n            '/twbs-helper-module/img/docs/64x64.svg',\n            [\n                'alt'   => '...',\n                'class' => 'mr-3',\n            ],\n        ],\n        'title' => 'Media heading',\n        'text'  => 'Cras sit amet nibh libero, in gravida nulla. '.'Nulla vel metus scelerisque ante sollicitudin. '.'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. '.'Fusce condimentum nunc ac nisi vulputate fringilla. '.'Donec lacinia congue felis in faucibus.',\n    ]\n);\n\n")))),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/#nesting"},"Twitter bootstrap Documentation")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,a.kt)(o.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,a.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="media">\n    <img alt="..." class="mr-3" src="/twbs-helper-module/img/docs/64x64.svg"></img>\n    <div class="media-body">\n        <h5 class="mt-0">Media heading</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        <div class="media">\n            <img alt="..." class="mr-3" src="/twbs-helper-module/img/docs/64x64.svg"></img>\n            <div class="media-body">\n                <h5 class="mt-0">Media heading</h5>\n                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n            </div>\n        </div>\n    </div>\n</div>'}}))),(0,a.kt)(u.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->media(\n    [\n        'img'   => [\n            '/twbs-helper-module/img/docs/64x64.svg',\n            [\n                'alt'   => '...',\n                'class' => 'mr-3',\n            ],\n        ],\n        'title' => 'Media heading',\n        'text'  => 'Cras sit amet nibh libero, in gravida nulla. '.'Nulla vel metus scelerisque ante sollicitudin. '.'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. '.'Fusce condimentum nunc ac nisi vulputate fringilla. '.'Donec lacinia congue felis in faucibus.',\n        'media' => [\n            'content' => [\n                'img'   => [\n                    '/twbs-helper-module/img/docs/64x64.svg',\n                    [\n                        'alt'   => '...',\n                        'class' => 'mr-3',\n                    ],\n                ],\n                'title' => 'Media heading',\n                'text'  => 'Cras sit amet nibh libero, in gravida nulla. '.'Nulla vel metus scelerisque ante sollicitudin. '.'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. '.'Fusce condimentum nunc ac nisi vulputate fringilla. '.'Donec lacinia congue felis in faucibus.',\n            ],\n        ],\n    ]\n);\n\n")))),(0,a.kt)("h2",{id:"alignment"},"Alignment"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/#alignment"},"Twitter bootstrap Documentation")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,a.kt)(o.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,a.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="media">\n    <img alt="..." class="align-self-start mr-3" src="/twbs-helper-module/img/docs/64x64.svg"></img>\n    <div class="media-body">\n        <h5 class="mt-0">Top-aligned media</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n    </div>\n</div>\n<div class="media">\n    <img alt="..." class="align-self-center mr-3" src="/twbs-helper-module/img/docs/64x64.svg"></img>\n    <div class="media-body">\n        <h5 class="mt-0">Top-aligned media</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n    </div>\n</div>\n<div class="media">\n    <img alt="..." class="align-self-end mr-3" src="/twbs-helper-module/img/docs/64x64.svg"></img>\n    <div class="media-body">\n        <h5 class="mt-0">Top-aligned media</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n    </div>\n</div>'}}))),(0,a.kt)(u.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// Top-aligned media\necho $this->media(\n    [\n        'img'   => [\n            '/twbs-helper-module/img/docs/64x64.svg',\n            [\n                'alt'   => '...',\n                'class' => 'align-self-start mr-3',\n            ],\n        ],\n        'title' => 'Top-aligned media',\n        'text'  => [\n            'Cras sit amet nibh libero, in gravida nulla. '.'Nulla vel metus scelerisque ante sollicitudin. '.'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. '.'Fusce condimentum nunc ac nisi vulputate fringilla. '.'Donec lacinia congue felis in faucibus.',\n            'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. '.'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',\n        ],\n    ]\n);\n\n// Center-aligned media\necho $this->media(\n    [\n        'img'   => [\n            '/twbs-helper-module/img/docs/64x64.svg',\n            [\n                'alt'   => '...',\n                'class' => 'align-self-center mr-3',\n            ],\n        ],\n        'title' => 'Top-aligned media',\n        'text'  => [\n            'Cras sit amet nibh libero, in gravida nulla. '.'Nulla vel metus scelerisque ante sollicitudin. '.'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. '.'Fusce condimentum nunc ac nisi vulputate fringilla. '.'Donec lacinia congue felis in faucibus.',\n            [\n                'content'    => 'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. '.'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',\n                'attributes' => ['class' => 'mb-0'],\n            ],\n        ],\n    ]\n);\n\n// Bottom-aligned media\necho $this->media(\n    [\n        'img'   => [\n            '/twbs-helper-module/img/docs/64x64.svg',\n            [\n                'alt'   => '...',\n                'class' => 'align-self-end mr-3',\n            ],\n        ],\n        'title' => 'Top-aligned media',\n        'text'  => [\n            'Cras sit amet nibh libero, in gravida nulla. '.'Nulla vel metus scelerisque ante sollicitudin. '.'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. '.'Fusce condimentum nunc ac nisi vulputate fringilla. '.'Donec lacinia congue felis in faucibus.',\n            [\n                'content'    => 'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. '.'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',\n                'attributes' => ['class' => 'mb-0'],\n            ],\n        ],\n    ]\n);\n\n")))),(0,a.kt)("h2",{id:"order"},"Order"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/#order"},"Twitter bootstrap Documentation")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,a.kt)(o.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,a.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="media">\n    <div class="media-body">\n        <h5 class="mb-1 mt-0">Media object</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n    </div>\n    <img alt="..." class="ml-3" src="/twbs-helper-module/img/docs/64x64.svg"></img>\n</div>'}}))),(0,a.kt)(u.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->media(\n    [\n        'title' => [\n            'content'    => 'Media object',\n            'attributes' => ['class' => 'mb-1'],\n        ],\n        'text'  => 'Cras sit amet nibh libero, in gravida nulla. '.'Nulla vel metus scelerisque ante sollicitudin. '.'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. '.'Fusce condimentum nunc ac nisi vulputate fringilla. '.'Donec lacinia congue felis in faucibus.',\n        'img'   => [\n            '/twbs-helper-module/img/docs/64x64.svg',\n            [\n                'alt'   => '...',\n                'class' => 'ml-3',\n            ],\n        ],\n    ]\n);\n\n")))),(0,a.kt)("h2",{id:"media-list"},"Media list"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/#media-list"},"Twitter bootstrap Documentation")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,a.kt)(o.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,a.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="list-unstyled">\n    <li class="media">\n        <img alt="..." class="mr-3" src="/twbs-helper-module/img/docs/64x64.svg"></img>\n        <div class="media-body">\n            <h5 class="mb-1 mt-0">List-based media object</h5>\n            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        </div>\n    </li>\n    <li class="media">\n        <img alt="..." class="mr-3" src="/twbs-helper-module/img/docs/64x64.svg"></img>\n        <div class="media-body">\n            <h5 class="mb-1 mt-0">List-based media object</h5>\n            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        </div>\n    </li>\n    <li class="media">\n        <img alt="..." class="mr-3" src="/twbs-helper-module/img/docs/64x64.svg"></img>\n        <div class="media-body">\n            <h5 class="mb-1 mt-0">List-based media object</h5>\n            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        </div>\n    </li>\n</ul>'}}))),(0,a.kt)(u.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->mediaList(\n    [\n        [\n            'img'   => [\n                '/twbs-helper-module/img/docs/64x64.svg',\n                [\n                    'alt'   => '...',\n                    'class' => 'mr-3',\n                ],\n            ],\n            'title' => [\n                'content'    => 'List-based media object',\n                'attributes' => ['class' => 'mb-1'],\n            ],\n            'text'  => 'Cras sit amet nibh libero, in gravida nulla. '.'Nulla vel metus scelerisque ante sollicitudin. '.'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. '.'Fusce condimentum nunc ac nisi vulputate fringilla. '.'Donec lacinia congue felis in faucibus.',\n        ],\n        [\n            'img'   => [\n                '/twbs-helper-module/img/docs/64x64.svg',\n                [\n                    'alt'   => '...',\n                    'class' => 'mr-3',\n                ],\n            ],\n            'title' => [\n                'content'    => 'List-based media object',\n                'attributes' => ['class' => 'mb-1'],\n            ],\n            'text'  => 'Cras sit amet nibh libero, in gravida nulla. '.'Nulla vel metus scelerisque ante sollicitudin. '.'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. '.'Fusce condimentum nunc ac nisi vulputate fringilla. '.'Donec lacinia congue felis in faucibus.',\n        ],\n        [\n            'img'   => [\n                '/twbs-helper-module/img/docs/64x64.svg',\n                [\n                    'alt'   => '...',\n                    'class' => 'mr-3',\n                ],\n            ],\n            'title' => [\n                'content'    => 'List-based media object',\n                'attributes' => ['class' => 'mb-1'],\n            ],\n            'text'  => 'Cras sit amet nibh libero, in gravida nulla. '.'Nulla vel metus scelerisque ante sollicitudin. '.'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. '.'Fusce condimentum nunc ac nisi vulputate fringilla. '.'Donec lacinia congue felis in faucibus.',\n        ],\n    ]\n);\n\n")))))}v.isMDXComponent=!0}}]);