"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3664],{2959:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return u}});var l=a(7462),n=a(3366),o=(a(7294),a(3905)),s=a(9877),p=a(2360),r=(a(5710),a(4321)),c=["components"],d={sidebar_position:18,label:"Placeholders"},i="Placeholders",h={unversionedId:"usage/components/placeholders",id:"usage/components/placeholders",title:"Placeholders",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/placeholders.mdx",sourceDirName:"usage/components",slug:"/usage/components/placeholders",permalink:"/twbs-helper-module/docs/usage/components/placeholders",draft:!1,editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/placeholders.mdx",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,label:"Placeholders"},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/twbs-helper-module/docs/usage/components/pagination"},next:{title:"Popovers",permalink:"/twbs-helper-module/docs/usage/components/popovers"}},m={},u=[{value:"Example",id:"example",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Width",id:"width",level:3},{value:"Sizing",id:"sizing",level:3},{value:"Animation",id:"animation",level:3}],b={toc:u};function k(e){var t=e.components,a=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"placeholders"},"Placeholders"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/placeholders/"},"Twitter bootstrap Documentation")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/placeholders/#example"},"Twitter bootstrap Documentation")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,o.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="card">\n    <img alt="..." class="card-img-top" src="/twbs-helper-module/img/docs/image-cap.svg"></img>\n    <div class="card-body">\n        <h5 class="card-title">Card title</h5>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n        <a class="btn btn-primary" href="#">Go somewhere</a>\n    </div>\n</div>\n<div aria-hidden="true" class="card">\n    <img alt="..." class="card-img-top" src="/twbs-helper-module/img/docs/image-cap.svg"></img>\n    <div class="card-body">\n        <div class="card-title h5 placeholder-glow">\n            <span class="col-6 placeholder"></span>\n        </div>\n        <p class="card-text placeholder-glow">\n            <span class="col-7 placeholder"></span>\n            <span class="col-4 placeholder"></span>\n            <span class="col-4 placeholder"></span>\n            <span class="col-6 placeholder"></span>\n            <span class="col-8 placeholder"></span>\n        </p>\n        <a aria-disabled="true" class="btn btn-primary col-6 disabled placeholder" href="#" role="button" tabindex="-1"></a>\n    </div>\n</div>'}}))),(0,o.kt)(p.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->card(\n    [\n        'image_top' => [\n            '/twbs-helper-module/img/docs/image-cap.svg',\n            ['alt' => '...'],\n        ],\n        'title' => 'Card title',\n        'text' => 'Some quick example text to build on the card title '.'and make up the bulk of the card\\'s content.',\n        '<a class=\"btn btn-primary\" href=\"&#x23;\">Go somewhere</a>',\n    ],\n);\n\necho $this->card(\n    [\n        'image_top' => [\n            '/twbs-helper-module/img/docs/image-cap.svg',\n            ['alt' => '...'],\n        ],\n        'title' => [\n            'attributes' => [    'class' => 'h5 placeholder-glow'    ],\n            'tag'        => 'div',\n            'content'    => $this->placeholder(6),\n        ],\n        'text' => [\n            'content'    => $this->placeholder(7).$this->placeholder(4).$this->placeholder(4).$this->placeholder(6).$this->placeholder(8),\n            'attributes' => ['class' => 'placeholder-glow'],\n        ],\n        $this->placeholder(['column' => 6, 'button' => ['options' => ['variant' => 'primary']]]),\n    ],\n    ['aria-hidden' => 'true']\n);\n\n")))),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/placeholders/#how-it-works"},"Twitter bootstrap Documentation")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,o.kt)("div",{dangerouslySetInnerHTML:{__html:'<p aria-hidden="true">\n  <span class="col-6 placeholder"></span>\n</p>\n<a aria-disabled="true" aria-hidden="true" class="btn btn-primary col-4 disabled placeholder" href="#" role="button" tabindex="-1"></a>'}}))),(0,o.kt)(p.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->placeholder(['column' => 6, 'hidden' => true]);\n\necho $this->placeholder(\n    [\n        'column' => 4,\n        'hidden' => true,\n        'button' => [\n            'options' => ['variant' => 'primary'],\n        ],\n    ]\n);\n\n")))),(0,o.kt)("h3",{id:"width"},"Width"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/placeholders/#width"},"Twitter bootstrap Documentation")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,o.kt)("div",{dangerouslySetInnerHTML:{__html:'<span class="col-6 placeholder"></span>\n<span class="placeholder w-75"></span>\n<span class="placeholder" style="width: 25%;"></span>'}}))),(0,o.kt)(p.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->placeholder(6);\n\necho $this->placeholder(['class' => 'w-75']);\n\necho $this->placeholder(['style' => 'width: 25%']);\n\n")))),(0,o.kt)("h3",{id:"sizing"},"Sizing"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/placeholders/#sizing"},"Twitter bootstrap Documentation")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,o.kt)("div",{dangerouslySetInnerHTML:{__html:'<span class="col-12 placeholder placeholder-lg"></span>\n<span class="col-12 placeholder"></span>\n<span class="col-12 placeholder placeholder-sm"></span>\n<span class="col-12 placeholder placeholder-xs"></span>'}}))),(0,o.kt)(p.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n\necho $this->placeholder(['column' => 12, 'size' => 'lg']);\n\necho $this->placeholder(12);\n\necho $this->placeholder(['column' => 12, 'size' => 'sm']);\n\necho $this->placeholder(['column' => 12, 'size' => 'xs']);\n\n")))),(0,o.kt)("h3",{id:"animation"},"Animation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/placeholders/#animation"},"Twitter bootstrap Documentation")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,o.kt)("div",{dangerouslySetInnerHTML:{__html:'<p class="placeholder-glow">\n  <span class="col-12 placeholder"></span>\n</p>\n<p class="placeholder-wave">\n  <span class="col-12 placeholder"></span>\n</p>'}}))),(0,o.kt)(p.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n\necho $this->placeholder(['column' => 12, 'animation' => 'glow']);\n\necho $this->placeholder(['column' => 12, 'animation' => 'wave']);\n\n")))))}k.isMDXComponent=!0}}]);