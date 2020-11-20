(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{84:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return u})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return m}));var a=o(3),n=o(7),r=(o(0),o(90)),s=o(91),l=o.n(s),p=o(92),b=o(93),i={id:"popovers",title:"Popovers"},u={unversionedId:"rendering/popovers",id:"rendering/popovers",isDocsHomePage:!1,title:"Popovers",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/popovers.mdx",slug:"/rendering/popovers",permalink:"/twbs-helper-module/docs/rendering/popovers",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/popovers.mdx",version:"current",sidebar:"docsSidebar",previous:{title:"Pagination",permalink:"/twbs-helper-module/docs/rendering/pagination"},next:{title:"Progress",permalink:"/twbs-helper-module/docs/rendering/progress"}},c=[{value:"Example",id:"example",children:[]},{value:"Four directions",id:"four-directions",children:[]},{value:"Dismiss on next click",id:"dismiss-on-next-click",children:[]},{value:"Disabled elements",id:"disabled-elements",children:[]}],d={rightToc:c};function m(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/popovers/"}),"Twitter bootstrap Documentation")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/popovers/#example"}),"Twitter bootstrap Documentation")),Object(r.b)(p.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<button type="button" name="popover" title="Popover&#x20;title" class="btn&#x20;btn-danger&#x20;btn-lg" data-toggle="popover" data-content="And&#x20;here&#x27;s&#x20;some&#x20;amazing&#x20;content.&#x20;It&#x27;s&#x20;very&#x20;engaging.&#x20;Right&#x3F;" value="">Click to toggle popover</button>')),Object(r.b)(b.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"echo $this->formButton([\n    'name' => 'popover',\n    'options' => [\n        'label' => 'Click to toggle popover',\n        'variant' => 'danger',\n        'popover' => 'And here\\'s some amazing content. It\\'s very engaging. Right?',\n        'size' => 'lg',\n    ],\n    'attributes' => ['title' => 'Popover title'],\n]);\n")))),Object(r.b)("h2",{id:"four-directions"},"Four directions"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/popovers/#four-directions"}),"Twitter bootstrap Documentation")),Object(r.b)(p.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<button type="button" name="popover" class="btn&#x20;btn-secondary" data-toggle="popover" data-content="Vivamus&#x20;sagittis&#x20;lacus&#x20;vel&#x20;augue&#x20;laoreet&#x20;rutrum&#x20;faucibus." data-placement="top" data-container="body" value="">Popover on top</button>\n<button type="button" name="popover" class="btn&#x20;btn-secondary" data-toggle="popover" data-content="Vivamus&#x20;sagittis&#x20;lacus&#x20;vel&#x20;augue&#x20;laoreet&#x20;rutrum&#x20;faucibus." data-placement="right" data-container="body" value="">Popover on right</button>\n<button type="button" name="popover" class="btn&#x20;btn-secondary" data-toggle="popover" data-content="Vivamus&#x20;sagittis&#x20;lacus&#x20;vel&#x20;augue&#x20;laoreet&#x20;rutrum&#x20;faucibus." data-placement="bottom" data-container="body" value="">Popover on bottom</button>\n<button type="button" name="popover" class="btn&#x20;btn-secondary" data-toggle="popover" data-content="Vivamus&#x20;sagittis&#x20;lacus&#x20;vel&#x20;augue&#x20;laoreet&#x20;rutrum&#x20;faucibus." data-placement="left" data-container="body" value="">Popover on left</button>\n')),Object(r.b)(b.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"foreach ([\n    'top' => 'Popover on top',\n    'right' => 'Popover on right',\n    'bottom' => 'Popover on bottom',\n    'left' => 'Popover on left',\n] as $sPlacement => $sButtonLabel) {\n    echo $this->formButton([\n        'name' => 'popover',\n        'options' => [\n            'label' => $sButtonLabel,\n            'popover' => [\n                'placement' => $sPlacement,\n                'content' => 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',\n            ],\n        ],\n    ]) . PHP_EOL;\n}\n")))),Object(r.b)("h2",{id:"dismiss-on-next-click"},"Dismiss on next click"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/popovers/#dismiss-on-next-click"}),"Twitter bootstrap Documentation")),Object(r.b)(p.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<a title="Dismissible&#x20;popover" tabindex="0" class="btn&#x20;btn-danger&#x20;btn-lg" role="button" data-toggle="popover" data-content="And&#x20;here&#x27;s&#x20;some&#x20;amazing&#x20;content.&#x20;It&#x27;s&#x20;very&#x20;engaging.&#x20;Right&#x3F;" data-trigger="focus">Dismissible popover</a>')),Object(r.b)(b.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"echo $this->formButton([\n    'name' => 'popover',\n    'options' => [\n        'tag' => 'a',\n        'label' => 'Dismissible popover',\n        'variant' => 'danger',\n        'popover' => [\n            'trigger' => 'focus',\n            'content' => 'And here\\'s some amazing content. It\\'s very engaging. Right?',\n        ],\n        'size' => 'lg',\n    ],\n    'attributes' => ['title' => 'Dismissible popover', 'tabindex' => '0'],\n]);\n")))),Object(r.b)("h2",{id:"disabled-elements"},"Disabled elements"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/popovers/#disabled-elements"}),"Twitter bootstrap Documentation")),Object(r.b)(p.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"result",mdxType:"TabItem"},l()('<span class="d-inline-block" data-content="Disabled&#x20;popover" data-toggle="popover" tabindex="0"><button type="button" name="popover" disabled="disabled" class="btn&#x20;btn-primary" style="pointer-events&#x3A;&#x20;none&#x3B;" value="">Disabled button</button></span>')),Object(r.b)(b.a,{value:"source",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"echo $this->formButton([\n    'name' => 'popover',\n    'options' => [\n        'label' => 'Disabled button',\n        'variant' => 'primary',\n        'popover' => 'Disabled popover',\n    ],\n    'attributes' => ['disabled' => true],\n]);\n")))))}m.isMDXComponent=!0}}]);