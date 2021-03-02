(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{81:function(e,s,a){"use strict";a.r(s),a.d(s,"frontMatter",(function(){return d})),a.d(s,"metadata",(function(){return u})),a.d(s,"toc",(function(){return p})),a.d(s,"default",(function(){return m}));var l=a(3),t=a(7),o=(a(0),a(93)),n=a(94),c=a.n(n),r=a(95),i=a(96),d={id:"carousel",title:"Carousel"},u={unversionedId:"rendering/carousel",id:"rendering/carousel",isDocsHomePage:!1,title:"Carousel",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/carousel.mdx",slug:"/rendering/carousel",permalink:"/twbs-helper-module/docs/rendering/carousel",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/carousel.mdx",version:"current",sidebar:"docsSidebar",previous:{title:"Card",permalink:"/twbs-helper-module/docs/rendering/card"},next:{title:"Dropdowns",permalink:"/twbs-helper-module/docs/rendering/dropdowns"}},p=[{value:"Example",id:"example",children:[{value:"Slides only",id:"slides-only",children:[]},{value:"With controls",id:"with-controls",children:[]},{value:"With indicators",id:"with-indicators",children:[]},{value:"With captions",id:"with-captions",children:[]},{value:"Crossfade",id:"crossfade",children:[]},{value:"Individual .carousel-item interval",id:"individual-carousel-item-interval",children:[]}]}],b={toc:p};function m(e){var s=e.components,a=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},b,a,{components:s,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/carousel/"}),"Twitter bootstrap Documentation")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/carousel/#example"}),"Twitter bootstrap Documentation")),Object(o.b)("h3",{id:"slides-only"},"Slides only"),Object(o.b)("p",null,Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/carousel/#slides-only"}),"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"result",mdxType:"TabItem"},c()('<div class="carousel&#x20;slide" data-ride="carousel" id="carouselExampleSlidesOnly">\n    <div class="carousel-inner">\n        <div class="active&#x20;carousel-item">\n            <img alt="Slide&#x20;1" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;2" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;3" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n    </div>\n</div>')),Object(o.b)(i.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->carousel([\n    [\n        'src' => '/twbs-helper-module/img/docs/400x300.svg',\n        'optionsAndAttributes' => ['active' => true, 'alt' => 'Slide 1'],\n    ],\n    ['/twbs-helper-module/img/docs/400x300.svg', ['alt' => 'Slide 2',]],\n    '/twbs-helper-module/img/docs/400x300.svg' => ['alt' => 'Slide 3',],\n], ['id' => 'carouselExampleSlidesOnly']);\n")))),Object(o.b)("h3",{id:"with-controls"},"With controls"),Object(o.b)("p",null,Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/carousel/#with-controls"}),"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"result",mdxType:"TabItem"},c()('<div class="carousel&#x20;slide" data-ride="carousel" id="carouselExampleControls">\n    <div class="carousel-inner">\n        <div class="active&#x20;carousel-item">\n            <img alt="Slide&#x20;1" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;2" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;3" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n    </div>\n    <a class="carousel-control-prev" data-slide="prev" href="&#x23;carouselExampleControls" role="button">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="sr-only">Previous</span>\n    </a>\n    <a class="carousel-control-next" data-slide="next" href="&#x23;carouselExampleControls" role="button">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="sr-only">Next</span>\n    </a>\n</div>')),Object(o.b)(i.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->carousel([\n    [\n        'src' => '/twbs-helper-module/img/docs/400x300.svg',\n        'optionsAndAttributes' => ['active' => true, 'alt' => 'Slide 1'],\n    ],\n    ['/twbs-helper-module/img/docs/400x300.svg', ['alt' => 'Slide 2',]],\n    '/twbs-helper-module/img/docs/400x300.svg' => ['alt' => 'Slide 3',],\n], ['id' => 'carouselExampleControls', 'controls' => true]);\n")))),Object(o.b)("h3",{id:"with-indicators"},"With indicators"),Object(o.b)("p",null,Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/carousel/#with-indicators"}),"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"result",mdxType:"TabItem"},c()('<div class="carousel&#x20;slide" data-ride="carousel" id="carouselExampleIndicators">\n    <ol class="carousel-indicators">\n        <li class="active" data-slide-to="0" data-target="&#x23;carouselExampleIndicators"></li>\n        <li data-slide-to="1" data-target="&#x23;carouselExampleIndicators"></li>\n        <li data-slide-to="2" data-target="&#x23;carouselExampleIndicators"></li>\n    </ol>\n    <div class="carousel-inner">\n        <div class="active&#x20;carousel-item">\n            <img alt="Slide&#x20;1" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;2" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;3" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n    </div>\n    <a class="carousel-control-prev" data-slide="prev" href="&#x23;carouselExampleIndicators" role="button">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="sr-only">Previous</span>\n    </a>\n    <a class="carousel-control-next" data-slide="next" href="&#x23;carouselExampleIndicators" role="button">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="sr-only">Next</span>\n    </a>\n</div>')),Object(o.b)(i.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->carousel([\n    [\n        'src' => '/twbs-helper-module/img/docs/400x300.svg',\n        'optionsAndAttributes' => ['active' => true, 'alt' => 'Slide 1'],\n    ],\n    ['/twbs-helper-module/img/docs/400x300.svg', ['alt' => 'Slide 2',]],\n    '/twbs-helper-module/img/docs/400x300.svg' => ['alt' => 'Slide 3',],\n], ['id' => 'carouselExampleIndicators', 'controls' => true, 'indicators' => true]);\n")))),Object(o.b)("h3",{id:"with-captions"},"With captions"),Object(o.b)("p",null,Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/carousel/#with-captions"}),"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"result",mdxType:"TabItem"},c()('<div class="carousel&#x20;slide" data-ride="carousel" id="carouselExampleCaptions">\n    <ol class="carousel-indicators">\n        <li class="active" data-slide-to="0" data-target="&#x23;carouselExampleCaptions"></li>\n        <li data-slide-to="1" data-target="&#x23;carouselExampleCaptions"></li>\n        <li data-slide-to="2" data-target="&#x23;carouselExampleCaptions"></li>\n    </ol>\n    <div class="carousel-inner">\n        <div class="active&#x20;carousel-item">\n            <img alt="Slide&#x20;1" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n            <div class="carousel-caption&#x20;d-md-block&#x20;d-none">\n                <h5>First slide label</h5>\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n            </div>\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;2" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n            <div class="carousel-caption&#x20;d-md-block&#x20;d-none">\n                <h5>Second slide label</h5>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;3" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n            <div class="carousel-caption&#x20;d-md-block&#x20;d-none">\n                <h5>Third slide label</h5>\n                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n            </div>\n        </div>\n    </div>\n    <a class="carousel-control-prev" data-slide="prev" href="&#x23;carouselExampleCaptions" role="button">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="sr-only">Previous</span>\n    </a>\n    <a class="carousel-control-next" data-slide="next" href="&#x23;carouselExampleCaptions" role="button">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="sr-only">Next</span>\n    </a>\n</div>')),Object(o.b)(i.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->carousel([\n    [\n        'src' => '/twbs-helper-module/img/docs/400x300.svg',\n        'optionsAndAttributes' => [\n            'active' => true,\n            'alt' => 'Slide 1',\n            'caption' => [\n                'title' => 'First slide label',\n                'text' => 'Nulla vitae elit libero, a pharetra augue mollis interdum.',\n            ],\n        ]\n    ],\n    [\n        '/twbs-helper-module/img/docs/400x300.svg',\n        [\n            'alt' => 'Slide 2',\n            'caption' => [\n                'title' => 'Second slide label',\n                'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',\n            ],\n        ],\n    ],\n    '/twbs-helper-module/img/docs/400x300.svg' => [\n        'alt' => 'Slide 3',\n        'caption' => [\n            'title' => 'Third slide label',\n            'text' => 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',\n        ],\n    ],\n], [\n    'id' => 'carouselExampleCaptions',\n    'controls' => true,\n    'indicators' => true,\n]);\n")))),Object(o.b)("h3",{id:"crossfade"},"Crossfade"),Object(o.b)("p",null,Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/carousel/#crossfade"}),"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"result",mdxType:"TabItem"},c()('<div class="carousel&#x20;carousel-fade&#x20;slide" data-ride="carousel" id="carouselExampleFade">\n    <div class="carousel-inner">\n        <div class="active&#x20;carousel-item">\n            <img alt="Slide&#x20;1" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;2" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;3" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n    </div>\n    <a class="carousel-control-prev" data-slide="prev" href="&#x23;carouselExampleFade" role="button">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="sr-only">Previous</span>\n    </a>\n    <a class="carousel-control-next" data-slide="next" href="&#x23;carouselExampleFade" role="button">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="sr-only">Next</span>\n    </a>\n</div>')),Object(o.b)(i.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->carousel([\n    [\n        'src' => '/twbs-helper-module/img/docs/400x300.svg',\n        'optionsAndAttributes' => ['active' => true, 'alt' => 'Slide 1'],\n    ],\n    ['/twbs-helper-module/img/docs/400x300.svg', ['alt' => 'Slide 2',]],\n    '/twbs-helper-module/img/docs/400x300.svg' => ['alt' => 'Slide 3',],\n], ['id' => 'carouselExampleFade', 'controls' => true, 'crossfade' => true]);\n")))),Object(o.b)("h3",{id:"individual-carousel-item-interval"},"Individual .carousel-item interval"),Object(o.b)("p",null,Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/carousel/#individual-carousel-item-interval"}),"Twitter bootstrap Documentation")),Object(o.b)(r.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"result",mdxType:"TabItem"},c()('<div class="carousel&#x20;slide" data-ride="carousel" id="carouselExampleControls">\n    <div class="carousel-inner">\n        <div class="active&#x20;carousel-item" data-interval="10000">\n            <img alt="Slide&#x20;1" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n        <div class="carousel-item" data-interval="2000">\n            <img alt="Slide&#x20;2" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n        <div class="carousel-item">\n            <img alt="Slide&#x20;3" class="d-block&#x20;w-100" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;400x300.svg" />\n        </div>\n    </div>\n    <a class="carousel-control-prev" data-slide="prev" href="&#x23;carouselExampleControls" role="button">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="sr-only">Previous</span>\n    </a>\n    <a class="carousel-control-next" data-slide="next" href="&#x23;carouselExampleControls" role="button">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="sr-only">Next</span>\n    </a>\n</div>')),Object(o.b)(i.a,{value:"source",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->carousel([\n    ['src' => '/twbs-helper-module/img/docs/400x300.svg', 'optionsAndAttributes' => [\n        'interval' => 10000,\n        'active' => true,\n        'alt' => 'Slide 1',\n    ]],\n    ['/twbs-helper-module/img/docs/400x300.svg', ['interval' => 2000, 'alt' => 'Slide 2',]],\n    '/twbs-helper-module/img/docs/400x300.svg' => ['alt' => 'Slide 3',],\n], ['id' => 'carouselExampleControls', 'controls' => true]);\n")))))}m.isMDXComponent=!0}}]);