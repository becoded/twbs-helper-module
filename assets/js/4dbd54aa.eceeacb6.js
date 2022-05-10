"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9210],{4713:function(e,s,t){t.r(s),t.d(s,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return b}});var a=t(7462),l=t(3366),n=(t(7294),t(3905)),o=t(9877),r=t(2360),i=(t(5710),t(4321)),c=["components"],d={sidebar_position:8,label:"Carousel"},u="Carousel",p={unversionedId:"usage/components/carousel",id:"usage/components/carousel",title:"Carousel",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/carousel.mdx",sourceDirName:"usage/components",slug:"/usage/components/carousel",permalink:"/twbs-helper-module/docs/usage/components/carousel",draft:!1,editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/carousel.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,label:"Carousel"},sidebar:"tutorialSidebar",previous:{title:"Card",permalink:"/twbs-helper-module/docs/usage/components/card"},next:{title:"Close button",permalink:"/twbs-helper-module/docs/usage/components/close-button"}},m={},b=[{value:"Example",id:"example",level:2},{value:"Slides only",id:"slides-only",level:3},{value:"With controls",id:"with-controls",level:3},{value:"With indicators",id:"with-indicators",level:3},{value:"With captions",id:"with-captions",level:3},{value:"Crossfade",id:"crossfade",level:3},{value:"Individual .carousel-item interval",id:"individual-carousel-item-interval",level:3},{value:"Disable touch swiping",id:"disable-touch-swiping",level:3},{value:"Dark variant",id:"dark-variant",level:2}],v={toc:b};function h(e){var s=e.components,t=(0,l.Z)(e,c);return(0,n.kt)("wrapper",(0,a.Z)({},v,t,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"carousel"},"Carousel"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/carousel/"},"Twitter bootstrap Documentation")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/carousel/#example"},"Twitter bootstrap Documentation")),(0,n.kt)("h3",{id:"slides-only"},"Slides only"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/carousel/#slides-only"},"Twitter bootstrap Documentation")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,n.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,n.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleSlidesOnly">\n    <div class="carousel-inner">\n        <div class="active carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide1.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide2.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide3.svg"></img>\n        </div>\n    </div>\n</div>'}}))),(0,n.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->carousel(\n    [\n        [\n            'src'    => '/twbs-helper-module/img/docs/slide1.svg',\n            'active' => true,\n            'alt'    => '...',\n        ],\n        [\n            'src' => '/twbs-helper-module/img/docs/slide2.svg',\n            'alt' => '...',\n        ],\n        [\n            'src' => '/twbs-helper-module/img/docs/slide3.svg',\n            'alt' => '...',\n        ],\n    ],\n    ['id' => 'carouselExampleSlidesOnly'],\n);\n\n")))),(0,n.kt)("h3",{id:"with-controls"},"With controls"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/carousel/#with-controls"},"Twitter bootstrap Documentation")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,n.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,n.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleControls">\n    <div class="carousel-inner">\n        <div class="active carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide1.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide2.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide3.svg"></img>\n        </div>\n    </div>\n    <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleControls" name="carousel-control-prev" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="visually-hidden">Previous</span>\n    </button>\n    <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleControls" name="carousel-control-next" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="visually-hidden">Next</span>\n    </button>\n</div>'}}))),(0,n.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->carousel(\n    [\n        [\n            'src'    => '/twbs-helper-module/img/docs/slide1.svg',\n            'active' => true,\n            'alt'    => '...',\n        ],\n        [\n            'src' => '/twbs-helper-module/img/docs/slide2.svg',\n            'alt' => '...',\n        ],\n        [\n            'src' => '/twbs-helper-module/img/docs/slide3.svg',\n            'alt' => '...',\n        ],\n    ],\n    [\n        'id'       => 'carouselExampleControls',\n        'controls' => true,\n    ],\n);\n\n")))),(0,n.kt)("h3",{id:"with-indicators"},"With indicators"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/carousel/#with-indicators"},"Twitter bootstrap Documentation")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,n.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,n.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">\n    <ol class="carousel-indicators">\n        <button aria-current="true" aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" name="carousel-indicator-0" type="button" value=""></button>\n        <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" name="carousel-indicator-1" type="button" value=""></button>\n        <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" name="carousel-indicator-2" type="button" value=""></button>\n    </ol>\n    <div class="carousel-inner">\n        <div class="active carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide1.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide2.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide3.svg"></img>\n        </div>\n    </div>\n    <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" name="carousel-control-prev" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="visually-hidden">Previous</span>\n    </button>\n    <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" name="carousel-control-next" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="visually-hidden">Next</span>\n    </button>\n</div>'}}))),(0,n.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->carousel(\n    [\n        [\n            'src'       => '/twbs-helper-module/img/docs/slide1.svg',\n            'active'    => true,\n            'alt'       => '...',\n            'indicator' => 'Slide 1',\n        ],\n        [\n            'src'       => '/twbs-helper-module/img/docs/slide2.svg',\n            'alt'       => '...',\n            'indicator' => 'Slide 2',\n        ],\n        [\n            'src'       => '/twbs-helper-module/img/docs/slide3.svg',\n            'alt'       => '...',\n            'indicator' => 'Slide 3',\n        ],\n    ],\n    [\n        'id'       => 'carouselExampleIndicators',\n        'controls' => true,\n    ],\n);\n\n")))),(0,n.kt)("h3",{id:"with-captions"},"With captions"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/carousel/#with-captions"},"Twitter bootstrap Documentation")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,n.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,n.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleCaptions">\n    <ol class="carousel-indicators">\n        <button aria-current="true" aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleCaptions" name="carousel-indicator-0" type="button" value=""></button>\n        <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleCaptions" name="carousel-indicator-1" type="button" value=""></button>\n        <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleCaptions" name="carousel-indicator-2" type="button" value=""></button>\n    </ol>\n    <div class="carousel-inner">\n        <div class="active carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide1.svg"></img>\n            <div class="carousel-caption d-md-block d-none">\n                <h5>First slide label</h5>\n                <p>Some representative placeholder content for the first slide.</p>\n            </div>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide2.svg"></img>\n            <div class="carousel-caption d-md-block d-none">\n                <h5>Second slide label</h5>\n                <p>Some representative placeholder content for the second slide.</p>\n            </div>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide3.svg"></img>\n            <div class="carousel-caption d-md-block d-none">\n                <h5>Third slide label</h5>\n                <p>Some representative placeholder content for the third slide.</p>\n            </div>\n        </div>\n    </div>\n    <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleCaptions" name="carousel-control-prev" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="visually-hidden">Previous</span>\n    </button>\n    <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleCaptions" name="carousel-control-next" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="visually-hidden">Next</span>\n    </button>\n</div>'}}))),(0,n.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->carousel(\n    [\n        [\n            'src'       => '/twbs-helper-module/img/docs/slide1.svg',\n            'active'    => true,\n            'alt'       => '...',\n            'indicator' => 'Slide 1',\n            'caption'   => [\n                'title' => 'First slide label',\n                'text'  => 'Some representative placeholder content for the first slide.',\n            ],\n        ],\n        [\n            'src'       => '/twbs-helper-module/img/docs/slide2.svg',\n            'alt'       => '...',\n            'indicator' => 'Slide 2',\n            'caption'   => [\n                'title' => 'Second slide label',\n                'text'  => 'Some representative placeholder content for the second slide.',\n            ],\n        ],\n        [\n            'src'       => '/twbs-helper-module/img/docs/slide3.svg',\n            'alt'       => '...',\n            'indicator' => 'Slide 3',\n            'caption'   => [\n                'title' => 'Third slide label',\n                'text'  => 'Some representative placeholder content for the third slide.',\n            ],\n        ],\n    ],\n    [\n        'id'       => 'carouselExampleCaptions',\n        'controls' => true,\n    ],\n);\n\n")))),(0,n.kt)("h3",{id:"crossfade"},"Crossfade"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/carousel/#crossfade"},"Twitter bootstrap Documentation")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,n.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,n.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="carousel carousel-fade slide" data-bs-ride="carousel" id="carouselExampleFade">\n    <div class="carousel-inner">\n        <div class="active carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide1.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide2.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide3.svg"></img>\n        </div>\n    </div>\n    <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleFade" name="carousel-control-prev" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="visually-hidden">Previous</span>\n    </button>\n    <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleFade" name="carousel-control-next" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="visually-hidden">Next</span>\n    </button>\n</div>'}}))),(0,n.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->carousel(\n    [\n        [\n            'src'    => '/twbs-helper-module/img/docs/slide1.svg',\n            'active' => true,\n            'alt'    => '...',\n        ],\n        [\n            'src' => '/twbs-helper-module/img/docs/slide2.svg',\n            'alt' => '...',\n        ],\n        [\n            'src' => '/twbs-helper-module/img/docs/slide3.svg',\n            'alt' => '...',\n        ],\n    ],\n    [\n        'id'        => 'carouselExampleFade',\n        'controls'  => true,\n        'crossfade' => true,\n    ],\n);\n\n")))),(0,n.kt)("h3",{id:"individual-carousel-item-interval"},"Individual .carousel-item interval"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/carousel/#individual-carousel-item-interval"},"Twitter bootstrap Documentation")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,n.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,n.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleInterval">\n    <div class="carousel-inner">\n        <div class="active carousel-item" data-bs-interval="10000">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide1.svg"></img>\n        </div>\n        <div class="carousel-item" data-bs-interval="2000">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide2.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide3.svg"></img>\n        </div>\n    </div>\n    <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleInterval" name="carousel-control-prev" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="visually-hidden">Previous</span>\n    </button>\n    <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleInterval" name="carousel-control-next" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="visually-hidden">Next</span>\n    </button>\n</div>'}}))),(0,n.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->carousel(\n    [\n        [\n            'src'      => '/twbs-helper-module/img/docs/slide1.svg',\n            'interval' => 10000,\n            'active'   => true,\n            'alt'      => '...',\n        ],\n        [\n            'src'      => '/twbs-helper-module/img/docs/slide2.svg',\n            'interval' => 2000,\n            'alt'      => '...',\n        ],\n        [\n            'src' => '/twbs-helper-module/img/docs/slide3.svg',\n            'alt' => '...',\n        ],\n    ],\n    [\n        'id'       => 'carouselExampleInterval',\n        'controls' => true,\n    ],\n);\n\n")))),(0,n.kt)("h3",{id:"disable-touch-swiping"},"Disable touch swiping"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/carousel/#disable-touch-swiping"},"Twitter bootstrap Documentation")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,n.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,n.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="carousel slide" data-bs-interval="false" data-bs-ride="carousel" data-bs-touch="false" id="carouselExampleControlsNoTouching">\n    <div class="carousel-inner">\n        <div class="active carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide1.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide2.svg"></img>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide3.svg"></img>\n        </div>\n    </div>\n    <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleControlsNoTouching" name="carousel-control-prev" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="visually-hidden">Previous</span>\n    </button>\n    <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleControlsNoTouching" name="carousel-control-next" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="visually-hidden">Next</span>\n    </button>\n</div>'}}))),(0,n.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->carousel(\n    [\n        [\n            'src'    => '/twbs-helper-module/img/docs/slide1.svg',\n            'active' => true,\n            'alt'    => '...',\n        ],\n        [\n            'src' => '/twbs-helper-module/img/docs/slide2.svg',\n            'alt' => '...',\n        ],\n        [\n            'src' => '/twbs-helper-module/img/docs/slide3.svg',\n            'alt' => '...',\n        ],\n    ],\n    [\n        'id'       => 'carouselExampleControlsNoTouching',\n        'controls' => true,\n        'swiping'  => false,\n        'interval' => false,\n    ],\n);\n\n")))),(0,n.kt)("h2",{id:"dark-variant"},"Dark variant"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/carousel/#dark-variant"},"Twitter bootstrap Documentation")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,n.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,n.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="carousel carousel-dark slide" data-bs-ride="carousel" id="carouselExampleCaptions">\n    <ol class="carousel-indicators">\n        <button aria-current="true" aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleCaptions" name="carousel-indicator-0" type="button" value=""></button>\n        <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleCaptions" name="carousel-indicator-1" type="button" value=""></button>\n        <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleCaptions" name="carousel-indicator-2" type="button" value=""></button>\n    </ol>\n    <div class="carousel-inner">\n        <div class="active carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide1.svg"></img>\n            <div class="carousel-caption d-md-block d-none">\n                <h5>First slide label</h5>\n                <p>Some representative placeholder content for the first slide.</p>\n            </div>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide2.svg"></img>\n            <div class="carousel-caption d-md-block d-none">\n                <h5>Second slide label</h5>\n                <p>Some representative placeholder content for the second slide.</p>\n            </div>\n        </div>\n        <div class="carousel-item">\n            <img alt="..." class="d-block w-100" src="/twbs-helper-module/img/docs/slide3.svg"></img>\n            <div class="carousel-caption d-md-block d-none">\n                <h5>Third slide label</h5>\n                <p>Some representative placeholder content for the third slide.</p>\n            </div>\n        </div>\n    </div>\n    <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleCaptions" name="carousel-control-prev" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-prev-icon"></span>\n        <span class="visually-hidden">Previous</span>\n    </button>\n    <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleCaptions" name="carousel-control-next" type="button" value="">\n        <span aria-hidden="true" class="carousel-control-next-icon"></span>\n        <span class="visually-hidden">Next</span>\n    </button>\n</div>'}}))),(0,n.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->carousel(\n    [\n        [\n            'src'       => '/twbs-helper-module/img/docs/slide1.svg',\n            'active'    => true,\n            'alt'       => '...',\n            'indicator' => 'Slide 1',\n            'caption'   => [\n                'title' => 'First slide label',\n                'text'  => 'Some representative placeholder content for the first slide.',\n            ],\n        ],\n        [\n            'src'       => '/twbs-helper-module/img/docs/slide2.svg',\n            'alt'       => '...',\n            'indicator' => 'Slide 2',\n            'caption'   => [\n                'title' => 'Second slide label',\n                'text'  => 'Some representative placeholder content for the second slide.',\n            ],\n        ],\n        [\n            'src'       => '/twbs-helper-module/img/docs/slide3.svg',\n            'alt'       => '...',\n            'indicator' => 'Slide 3',\n            'caption'   => [\n                'title' => 'Third slide label',\n                'text'  => 'Some representative placeholder content for the third slide.',\n            ],\n        ],\n    ],\n    [\n        'id'       => 'carouselExampleCaptions',\n        'controls' => true,\n        'variant'  => 'dark',\n    ],\n);\n\n")))))}h.isMDXComponent=!0}}]);