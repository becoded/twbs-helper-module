(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{83:function(t,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return c})),e.d(n,"metadata",(function(){return i})),e.d(n,"toc",(function(){return m})),e.d(n,"default",(function(){return d}));var o=e(3),a=e(7),u=(e(0),e(94)),b=e(95),l=e.n(b),s=e(96),r=e(97),c={id:"buttons",title:"Buttons"},i={unversionedId:"rendering/buttons",id:"rendering/buttons",isDocsHomePage:!1,title:"Buttons",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/buttons.mdx",slug:"/rendering/buttons",permalink:"/twbs-helper-module/docs/rendering/buttons",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/buttons.mdx",version:"current",sidebar:"docsSidebar",previous:{title:"Breadcrumb",permalink:"/twbs-helper-module/docs/rendering/breadcrumb"},next:{title:"Button group",permalink:"/twbs-helper-module/docs/rendering/button-group"}},m=[{value:"Example",id:"example",children:[]},{value:"Button tags",id:"button-tags",children:[]},{value:"Outline buttons",id:"outline-buttons",children:[]},{value:"Sizes",id:"sizes",children:[]}],p={toc:m};function d(t){var n=t.components,e=Object(a.a)(t,["components"]);return Object(u.b)("wrapper",Object(o.a)({},p,e,{components:n,mdxType:"MDXLayout"}),Object(u.b)("p",null,Object(u.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/buttons/"},"Twitter bootstrap Documentation")),Object(u.b)("h2",{id:"example"},"Example"),Object(u.b)("p",null,Object(u.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/buttons/#example"},"Twitter bootstrap Documentation")),Object(u.b)(s.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(u.b)(r.a,{value:"result",mdxType:"TabItem"},l()('<button type="button" name="primary" class="btn&#x20;btn-primary" value="">Primary</button>\n<button type="button" name="secondary" class="btn&#x20;btn-secondary" value="">Secondary</button>\n<button type="button" name="success" class="btn&#x20;btn-success" value="">Success</button>\n<button type="button" name="danger" class="btn&#x20;btn-danger" value="">Danger</button>\n<button type="button" name="warning" class="btn&#x20;btn-warning" value="">Warning</button>\n<button type="button" name="info" class="btn&#x20;btn-info" value="">Info</button>\n<button type="button" name="light" class="btn&#x20;btn-light" value="">Light</button>\n<button type="button" name="dark" class="btn&#x20;btn-dark" value="">Dark</button>\n<button type="button" name="link" class="btn&#x20;btn-link" value="">Link</button>\n')),Object(u.b)(r.a,{value:"source",mdxType:"TabItem"},Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-php"},"foreach ([\n    'primary', 'secondary', 'success', 'danger',\n    'warning', 'info', 'light', 'dark', 'link',\n] as $sVariant) {\n    $oButton = new \\Laminas\\Form\\Element\\Button($sVariant, [\n        'label' => ucfirst($sVariant),\n        'variant' => $sVariant,\n    ]);\n    echo $this->formButton($oButton) . PHP_EOL;\n}\n")))),Object(u.b)("h2",{id:"button-tags"},"Button tags"),Object(u.b)("p",null,Object(u.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/buttons/#button-tags"},"Twitter bootstrap Documentation")),Object(u.b)(s.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(u.b)(r.a,{value:"result",mdxType:"TabItem"},l()('<a href="&#x23;" class="btn&#x20;btn-primary" role="button">Link</a>\n<button type="submit" name="Button" class="btn&#x20;btn-primary" value="">Button</button>\n')),Object(u.b)(r.a,{value:"source",mdxType:"TabItem"},Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-php"},"// Link button\n$oButton = new \\Laminas\\Form\\Element\\Button('Link', [\n    'label' => 'Link',\n    'variant' => 'primary',\n    'tag' => 'a',\n]);\n$oButton->setAttribute('href', '#');\necho $this->formButton($oButton) . PHP_EOL;\n\n// Submit button\n$oButton = new \\Laminas\\Form\\Element\\Submit('Button', [\n    'label' => 'Button',\n    'variant' => 'primary',\n]);\necho $this->formButton($oButton) . PHP_EOL;\n")))),Object(u.b)("h2",{id:"outline-buttons"},"Outline buttons"),Object(u.b)("p",null,Object(u.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/buttons/#outline-buttons"},"Twitter bootstrap Documentation")),Object(u.b)(s.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(u.b)(r.a,{value:"result",mdxType:"TabItem"},l()('<button type="button" name="primary" class="btn&#x20;btn-outline-primary" value="">Primary</button>\n<button type="button" name="secondary" class="btn&#x20;btn-outline-secondary" value="">Secondary</button>\n<button type="button" name="success" class="btn&#x20;btn-outline-success" value="">Success</button>\n<button type="button" name="danger" class="btn&#x20;btn-outline-danger" value="">Danger</button>\n<button type="button" name="warning" class="btn&#x20;btn-outline-warning" value="">Warning</button>\n<button type="button" name="info" class="btn&#x20;btn-outline-info" value="">Info</button>\n<button type="button" name="light" class="btn&#x20;btn-outline-light" value="">Light</button>\n<button type="button" name="dark" class="btn&#x20;btn-outline-dark" value="">Dark</button>\n')),Object(u.b)(r.a,{value:"source",mdxType:"TabItem"},Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-php"},"foreach ([\n    'primary', 'secondary', 'success', 'danger',\n    'warning', 'info', 'light', 'dark',\n] as $sVariant) {\n    $oButton = new \\Laminas\\Form\\Element\\Button($sVariant, [\n        'label' => ucfirst($sVariant),\n        'variant' => 'outline-' . $sVariant,\n    ]);\n    echo $this->formButton($oButton) . PHP_EOL;\n}\n")))),Object(u.b)("h2",{id:"sizes"},"Sizes"),Object(u.b)("p",null,Object(u.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/buttons/#sizes"},"Twitter bootstrap Documentation")),Object(u.b)(s.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(u.b)(r.a,{value:"result",mdxType:"TabItem"},l()('<button type="button" name="large-button" class="btn&#x20;btn-lg&#x20;btn-primary" value="">Large button</button>\n<button type="button" name="large-button" class="btn&#x20;btn-lg&#x20;btn-secondary" value="">Large button</button>\n<br/><br/>\n<button type="button" name="small-button" class="btn&#x20;btn-primary&#x20;btn-sm" value="">Small button</button>\n<button type="button" name="small-button" class="btn&#x20;btn-secondary&#x20;btn-sm" value="">Small button</button>\n<br/><br/>\n<button type="button" name="block-level-button" class="btn&#x20;btn-block&#x20;btn-lg&#x20;btn-primary" value="">Block level button</button>\n<button type="button" name="block-level-button" class="btn&#x20;btn-block&#x20;btn-lg&#x20;btn-secondary" value="">Block level button</button>\n')),Object(u.b)(r.a,{value:"source",mdxType:"TabItem"},Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-php"},"// Large buttons\n$oButton = new \\Laminas\\Form\\Element\\Button('large-button', [\n    'label' => 'Large button',\n    'variant' => 'primary',\n    'size' => 'lg',\n]);\necho $this->formButton($oButton) . PHP_EOL;\n\n$oButton = new \\Laminas\\Form\\Element\\Button('large-button', [\n    'label' => 'Large button',\n    'size' => 'lg',\n]);\necho $this->formButton($oButton) . PHP_EOL;\n\necho '<br/><br/>' . PHP_EOL;\n\n// Small buttons\n$oButton = new \\Laminas\\Form\\Element\\Button('small-button', [\n    'label' => 'Small button',\n    'variant' => 'primary',\n    'size' => 'sm',\n]);\necho $this->formButton($oButton) . PHP_EOL;\n\n$oButton = new \\Laminas\\Form\\Element\\Button('small-button', [\n    'label' => 'Small button',\n    'size' => 'sm',\n]);\necho $this->formButton($oButton) . PHP_EOL;\n\necho '<br/><br/>' . PHP_EOL;\n\n// Block level buttons\n$oButton = new \\Laminas\\Form\\Element\\Button('block-level-button', [\n    'label' => 'Block level button',\n    'variant' => 'primary',\n    'size' => 'lg',\n    'block' => true,\n]);\necho $this->formButton($oButton) . PHP_EOL;\n\n$oButton = new \\Laminas\\Form\\Element\\Button('block-level-button', [\n    'label' => 'Block level button',\n    'size' => 'lg',\n    'block' => true,\n]);\necho $this->formButton($oButton) . PHP_EOL;\n")))))}d.isMDXComponent=!0}}]);