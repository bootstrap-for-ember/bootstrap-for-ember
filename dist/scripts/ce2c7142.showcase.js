this.Ember=this.Ember||{},this.Ember.TEMPLATES=this.Ember.TEMPLATES||{},this.Ember.TEMPLATES.ads=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("<h1>Bootstrap for Ember</h1>")}),this.Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <!-- Meta, title, CSS, favicons, etc. -->\n    '),g={},h={},i={hash:{},contexts:[b],types:["STRING"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"header",i):k.call(b,"partial","header",i)))),e.buffer.push('\n    <!-- Place anything custom after this. -->\n  </head>\n  <body>\n    <a class="sr-only" href="#content">Skip navigation</a>\n\n    <!-- Docs master nav -->\n    '),g={},h={},i={hash:{},contexts:[b],types:["STRING"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"nav-main",i):k.call(b,"partial","nav-main",i)))),e.buffer.push('\n\n    <!-- Docs page layout -->\n    <div class="bs-header" id="content">\n      <div class="container">\n        <p>'),g={},h={},e.buffer.push(l(c._triageMustache.call(b,"page.lead",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push("</p>\n        "),g={},h={},i={hash:{},contexts:[b],types:["STRING"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"ads",i):k.call(b,"partial","ads",i)))),e.buffer.push('\n      </div>\n    </div>\n\n    <div class="container bs-docs-container">\n      <div class="row">\n        <div class="col-md-3">\n          <div class="bs-sidebar hidden-print" role="complementary">\n              <ul class="nav bs-sidenav">\n                '),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"leftnav",i):k.call(b,"partial","leftnav",i)))),e.buffer.push('\n            </ul>\n          </div>\n        </div>\n        <div class="col-md-9" role="main">\n          '),g={},h={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push('\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Footer\n    ================================================== -->\n    <footer class="bs-footer" role="contentinfo">\n      <div class="container">\n        '),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"social-buttons",i):k.call(b,"partial","social-buttons",i)))),e.buffer.push("\n      </div>\n    </footer>\n\n    <!-- JS and analytics only. -->\n    "),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"footer",i):k.call(b,"partial","footer",i)))),e.buffer.push("\n  </body>\n</html>\n"),j}),this.Ember.TEMPLATES.footer=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f="";return f}),this.Ember.TEMPLATES.header=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f="";return f}),this.Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="bs-docs-section">\n  <div class="page-header">\n    <h1 id="js-overview">Showcase</h1>\n\n    <h3 id="js-individual-compiled">Project Created!</h3>\n    <p>Please choose components from the left pane.</p>\n  </div>')}),this.Ember.TEMPLATES.leftnav=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n    <li>\n        <a "),d={},e={},b.buffer.push(j(c.action.call(a,"select","item",{hash:{},contexts:[a,a],types:["STRING","ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(' style="cursor: pointer"></button> '),d={},e={},b.buffer.push(j(c._triageMustache.call(a,"item.title",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</a>\n    </li>\n"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j=this.escapeExpression,k=this;h={},i={},g=c.each.call(b,"item","in","controller",{hash:{},inverse:k.noop,fn:k.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),g||0===g?e.buffer.push(g):e.buffer.push("")}),this.Ember.TEMPLATES["nav-main"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Bootstrap for Ember")}function g(a,b){b.buffer.push("Home")}function h(a,b){b.buffer.push("Components")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this,p=c.helperMissing;return e.buffer.push('<header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">\n  <div class="container">\n    <div class="navbar-header">\n      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      '),k={"class":b},l={"class":"STRING"},m={hash:{"class":"navbar-brand"},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:k,hashTypes:l,data:e},i=c.linkTo||b.linkTo,j=i?i.call(b,"index",m):p.call(b,"linkTo","index",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n    </div>\n    <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">\n      <ul class="nav navbar-nav">\n        <li>\n            '),l={},k={},m={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:k,hashTypes:l,data:e},i=c.linkTo||b.linkTo,j=i?i.call(b,"index",m):p.call(b,"linkTo","index",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n        </li>\n\n        <li>\n            "),l={},k={},m={hash:{},inverse:o.noop,fn:o.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:k,hashTypes:l,data:e},i=c.linkTo||b.linkTo,j=i?i.call(b,"show_components",m):p.call(b,"linkTo","show_components",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n        </li>\n      </ul>\n    </nav>\n  </div>\n</header>\n"),n}),this.Ember.TEMPLATES["show_components/alert"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n    <h4 class="alert-heading">Oh snap! You got an error!</h4>\n    <p>Alert can also be used in a <strong>block form</strong>.</p>\n    <p>\n        <button class="btn btn-danger" '),d={},e={},b.buffer.push(m(c.action.call(a,"submit",{hash:{},contexts:[a],types:["STRING"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('>Take this action</button> <a class="btn btn-default">Or do this</a>\n    </p>\n    '),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this.escapeExpression,n=c.helperMissing,o=this;return e.buffer.push('<h1>Alert</h1>\n<h2>Usage Examples</h2>\n<div class="bs-example">\n    '),i={message:b,type:b},j={message:"STRING",type:"STRING"},k={hash:{message:"A warning alert with simple message.",type:"warning"},contexts:[],types:[],hashContexts:i,hashTypes:j,data:e},e.buffer.push(m((g=c["bs-alert"]||b["bs-alert"],g?g.call(b,k):n.call(b,"bs-alert",k)))),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">&#123;&#123;bs-alert message="A warning alert with simple message." type="warning"&#125;&#125;</code></pre>\n<div class="bs-example">\n    '),i={message:b,type:b,dismiss:b},j={message:"STRING",type:"STRING",dismiss:"BOOLEAN"},k={hash:{message:"With close button",type:"warning",dismiss:!0},contexts:[],types:[],hashContexts:i,hashTypes:j,data:e},e.buffer.push(m((g=c["bs-alert"]||b["bs-alert"],g?g.call(b,k):n.call(b,"bs-alert",k)))),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">&#123;&#123;bs-alert message="With close button" type="warning" dismiss=true&#125;&#125;</code></pre>\n<div class="bs-example">\n    '),i={message:b,type:b,dismiss:b,fade:b},j={message:"STRING",type:"STRING",dismiss:"BOOLEAN",fade:"BOOLEAN"},k={hash:{message:"Close button will fade",type:"warning",dismiss:!0,fade:!0},contexts:[],types:[],hashContexts:i,hashTypes:j,data:e},e.buffer.push(m((g=c["bs-alert"]||b["bs-alert"],g?g.call(b,k):n.call(b,"bs-alert",k)))),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">    &#123;&#123;bs-alert message="Close button will fade" type="warning" dismiss=true fade=true&#125;&#125;</code></pre>\n<div class="bs-example">\n    '),i={message:b,type:b,dismissAfter:b},j={message:"STRING",type:"STRING",dismissAfter:"INTEGER"},k={hash:{message:"Dismissed after 5 seconds!!",type:"info",dismissAfter:5},contexts:[],types:[],hashContexts:i,hashTypes:j,data:e},e.buffer.push(m((g=c["bs-alert"]||b["bs-alert"],g?g.call(b,k):n.call(b,"bs-alert",k)))),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">    &#123;&#123;bs-alert message="Dismissed after 5 seconds" type="info" dismissAfter=5&#125;&#125;</code></pre>\n<div class="bs-example">\n    '),i={message:b,type:b},j={message:"STRING",type:"STRING"},k={hash:{message:"Other types such as Sucess",type:"success"},contexts:[],types:[],hashContexts:i,hashTypes:j,data:e},e.buffer.push(m((g=c["bs-alert"]||b["bs-alert"],g?g.call(b,k):n.call(b,"bs-alert",k)))),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">    &#123;&#123;bs-alert message="Other types such as Sucess" type="success"&#125;&#125;</code></pre>\n<div class="bs-example">\n    '),i={type:b},j={type:"STRING"},k={hash:{type:"danger"},inverse:o.noop,fn:o.program(1,f,e),contexts:[],types:[],hashContexts:i,hashTypes:j,data:e},g=c["bs-alert"]||b["bs-alert"],h=g?g.call(b,k):n.call(b,"bs-alert",k),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">&#123;&#123;#bs-alert type="danger"&#125;&#125;\n&lt;h4 class="alert-heading"&gt;Oh snap! You got an error!&lt;/h4&gt;\n&lt;p&gt;Alert can also be used in a &lt;strong&gt;block form&lt;/strong&gt;.&lt;/p&gt;\n&lt;p&gt;\n&lt;button class="btn btn-danger" &#123;&#123;action "submit"&#125;&#125;&gt;Take this action&lt;/button&gt; &lt;a class="btn btn-default"&gt;Or do this&lt;/a&gt;\n&lt;/p&gt;\n&#123;&#123;/bs-alert&#125;&#125;</code></pre>\n<div class="bs-example">\n    '),i={message:b,type:b,dismiss:b,closed:b,close:b},j={message:"STRING",type:"STRING",dismiss:"BOOLEAN",closed:"STRING",close:"STRING"},k={hash:{message:"Close will trigger a function in controller",type:"warning",dismiss:!0,closed:"didAlertClosed",close:"didAlertClose"},contexts:[],types:[],hashContexts:i,hashTypes:j,data:e},e.buffer.push(m((g=c["bs-alert"]||b["bs-alert"],g?g.call(b,k):n.call(b,"bs-alert",k)))),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">    &#123;&#123;bs-alert message="Close will trigger a function in controller" type="warning" dismiss=true closed="didAlertClosed" close="didAlertClose"&#125;&#125;</code></pre>\n<h2>Component Properties</h2>\n<p><div class="table-responsive">\n    <table class="table table-bordered table-striped">\n        <thead>\n            <tr>\n                <th style="width: 150px;">Property</th>\n                <th>Description</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>message</td>\n                <td>The string to display in the alert.</td>\n            </tr>\n            <tr>\n                <td>type</td>\n                <td>Alert types: success | info | warning | danger</td>\n            </tr>\n            <tr>\n                <td>dismiss</td>\n                <td>if true an <code>X</code> link is set to dismiss the alert.</td>\n            </tr>\n            <tr>\n                <td>dismissAfter</td>\n                <td>If set the alert will be automatically dismissed after the specified amount of <code>seconds</code></td>\n            </tr>\n            <tr>\n                <td>fade</td>\n                <td>If true, the dialog will be faded out when closed.</td>\n            </tr>\n            <tr>\n                <td>close</td>\n                <td>Triggers the specified function name on the <strong>controller</strong> immediately when the close instance method is called.</td>\n            </tr>\n            <tr>\n                <td>closed</td>\n                <td>Triggers the specified function name on the <strong>controller</strong> when the alert has been closed (will wait for CSS transitions to complete).</td>\n            </tr>\n        </tbody>\n    </table></p>\n'),l}),this.Ember.TEMPLATES["show_components/badge"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push('<h1>Badge</h1>\n<div class="bs-example">\n    <a href="#"> Inbox '),g={content:b},h={content:"STRING"},i={hash:{content:"42"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bs-badge"]||b["bs-badge"],f?f.call(b,i):k.call(b,"bs-badge",i)))),e.buffer.push(' </a>\n</div>\n\n<pre><code class="lang-html">&lt;a href="#"&gt; Inbox&#123;&#123;bs-badge content="42"&#125;&#125; &lt;/a&gt;</code></pre>\n<h2>Built-in styles</h2>\n<p>Works well with built-in styles that are included for placing badges in active states in pill and list navigations.</p>\n<div class="bs-example">\n    <ul class="nav nav-pills">\n        <li class="active"><a href="#">Home '),g={content:b},h={content:"INTEGER"},i={hash:{content:42},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bs-badge"]||b["bs-badge"],f?f.call(b,i):k.call(b,"bs-badge",i)))),e.buffer.push('</a></li>\n        <li><a href="#">Profile</a></li>\n        <li><a href="#">Messages '),g={content:b},h={content:"INTEGER"},i={hash:{content:3},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bs-badge"]||b["bs-badge"],f?f.call(b,i):k.call(b,"bs-badge",i)))),e.buffer.push('</a></li>\n    </ul>\n    <br>\n    <ul class="nav nav-pills nav-stacked" style="max-width: 260px;">\n        <li class="active">\n            <a href="#">\n                '),g={"class":b,content:b},h={"class":"STRING",content:"INTEGER"},i={hash:{"class":"pull-right",content:42},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bs-badge"]||b["bs-badge"],f?f.call(b,i):k.call(b,"bs-badge",i)))),e.buffer.push('\n                Home\n            </a>\n        </li>\n        <li><a href="#">Profile</a></li>\n        <li>\n            <a href="#">\n                '),g={"class":b,content:b},h={"class":"STRING",content:"INTEGER"},i={hash:{"class":"pull-right",content:3},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bs-badge"]||b["bs-badge"],f?f.call(b,i):k.call(b,"bs-badge",i)))),e.buffer.push('\n                Messages\n            </a>\n        </li>\n    </ul>\n</div>\n\n<pre><code class="lang-html">&lt;ul class="nav nav-pills"&gt;\n    &lt;li class="active"&gt;&lt;a href="#"&gt;Home &#123;&#123;bs-badge content=42&#125;&#125;&lt;/a&gt;&lt;/li&gt;\n    &lt;li&gt;&lt;a href="#"&gt;Profile&lt;/a&gt;&lt;/li&gt;\n    &lt;li&gt;&lt;a href="#"&gt;Messages &#123;&#123;bs-badge content=3&#125;&#125;&lt;/a&gt;&lt;/li&gt;\n&lt;/ul&gt;\n&lt;br&gt;\n&lt;ul class="nav nav-pills nav-stacked" style="max-width: 260px;"&gt;\n    &lt;li class="active"&gt;\n        &lt;a href="#"&gt;\n            &#123;&#123;bs-badge class="pull-right"content=42&#125;&#125;\n            Home\n        &lt;/a&gt;\n    &lt;/li&gt;\n    &lt;li&gt;&lt;a href="#"&gt;Profile&lt;/a&gt;&lt;/li&gt;\n    &lt;li&gt;\n        &lt;a href="#"&gt;\n            &#123;&#123;bs-badge class="pull-right"content=3&#125;&#125;\n            Messages\n        &lt;/a&gt;\n    &lt;/li&gt;\n&lt;/ul&gt;</code></pre>\n<h2>Component Properties</h2>\n<p><div class="table-responsive">\n    <table class="table table-bordered table-striped">\n        <thead>\n            <tr>\n                <th style="width: 150px;">Property</th>\n                <th>Description</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>content</td>\n                <td>string: The content of the badge.</td>\n            </tr>\n        </tbody>\n    </table></p>\n'),j}),this.Ember.TEMPLATES["show_components/button"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Content")}function g(a,b){b.buffer.push("Primary")}function h(a,b){b.buffer.push("Link")}function i(a,b){b.buffer.push("Default Large button")}function j(a,b){b.buffer.push("Block Button")}function k(a,b){b.buffer.push("Disabled Button")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var l,m,n,o,p,q="",r=this,s="function",t=c.blockHelperMissing,u=c.helperMissing,v=this.escapeExpression;return e.buffer.push('<h1>Button</h1>\n<h2>Types</h2>\n<div class="bs-example">\n    '),n={hash:{},inverse:r.noop,fn:r.program(1,f,e),contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},(l=c["bs-button"])?l=l.call(b,n):(l=b["bs-button"],l=typeof l===s?l.apply(b):l),o={},p={},c["bs-button"]||(l=t.call(b,l,n)),(l||0===l)&&e.buffer.push(l),e.buffer.push("\n    "),p={content:b},o={content:"STRING"},n={hash:{content:"Inline Text"},contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},e.buffer.push(v((l=c["bs-button"]||b["bs-button"],l?l.call(b,n):u.call(b,"bs-button",n)))),e.buffer.push("\n    "),p={type:b},o={type:"STRING"},n={hash:{type:"primary"},inverse:r.noop,fn:r.program(3,g,e),contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},l=c["bs-button"]||b["bs-button"],m=l?l.call(b,n):u.call(b,"bs-button",n),(m||0===m)&&e.buffer.push(m),e.buffer.push("\n    "),p={type:b},o={type:"STRING"},n={hash:{type:"link"},inverse:r.noop,fn:r.program(5,h,e),contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},l=c["bs-button"]||b["bs-button"],m=l?l.call(b,n):u.call(b,"bs-button",n),(m||0===m)&&e.buffer.push(m),e.buffer.push('\n\n    <p>All other types such as <strong>info</strong>, <strong>warning</strong>, <strong>danger</strong> are supported.</p>\n</div>\n\n\n<pre><code class="lang-html">&lt;!-- Standard gray default button with gradient --&gt;\n&#123;&#123;#bs-button&#125;&#125;Content&#123;&#123;/bs-button&#125;&#125;\n\n&lt;!--Inline text as button content--&gt;\n&#123;&#123;bs-button content="Inline Text"&#125;&#125;\n\n&lt;!-- Provides extra visual weight and identifies the primary action in a set of buttons --&gt;\n&#123;&#123;#bs-button type="primary"&#125;&#125;Primary&#123;&#123;/bs-button&#125;&#125;\n\n&lt;!-- Deemphasize a button by making it look like a link while maintaining button behavior --&gt;\n&#123;&#123;#bs-button type="link"&#125;&#125;Link&#123;&#123;/bs-button&#125;&#125;</code></pre>\n<h2>Sizes</h2>\n<p>In correspondence with bootstrap css class button sizes <code>.btn-lg</code>, <code>.btn-sm</code>, or <code>.btn-xs</code>, size can simply defined by the <em>size</em> property or use one of the size properties: <code>small=true</code>, <code>large=true</code>, <code>xs=true</code></p>\n<div class="bs-example">\n    <p>\n        '),p={type:b,size:b,content:b},o={type:"STRING",size:"STRING",content:"STRING"},n={hash:{type:"primary",size:"xs",content:"Primary Extra Small Button"},contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},e.buffer.push(v((l=c["bs-button"]||b["bs-button"],l?l.call(b,n):u.call(b,"bs-button",n)))),e.buffer.push("\n        "),p={type:b,small:b,content:b},o={type:"STRING",small:"BOOLEAN",content:"STRING"},n={hash:{type:"info",small:!0,content:"Info Small Button"},contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},e.buffer.push(v((l=c["bs-button"]||b["bs-button"],l?l.call(b,n):u.call(b,"bs-button",n)))),e.buffer.push("\n        "),p={type:b,content:b},o={type:"STRING",content:"STRING"},n={hash:{type:"danger",content:"Danger Default size button"},contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},e.buffer.push(v((l=c["bs-button"]||b["bs-button"],l?l.call(b,n):u.call(b,"bs-button",n)))),e.buffer.push("\n        "),p={size:b},o={size:"STRING"},n={hash:{size:"lg"},inverse:r.noop,fn:r.program(7,i,e),contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},l=c["bs-button"]||b["bs-button"],m=l?l.call(b,n):u.call(b,"bs-button",n),(m||0===m)&&e.buffer.push(m),e.buffer.push('\n    </p>\n</div>\n\n<pre><code class="lang-html">&#123;&#123;bs-button type="primary" size="xs" content="Primary Extra Small Button"&#125;&#125;\n&#123;&#123;bs-button type="info" small=true content="Info Small Button"&#125;&#125;\n&#123;&#123;bs-button type="danger" content="Danger Default size button"&#125;&#125;\n&#123;&#123;#bs-button size="lg"&#125;&#125;Default Large button&#123;&#123;/bs-button&#125;&#125;</code></pre>\n<h2>Block Level</h2>\n<p>block level buttons—those that span the full width of a parent— by adding <code>block=true</code></p>\n<div class="bs-example">\n    '),p={type:b,xs:b,block:b},o={type:"STRING",xs:"BOOLEAN",block:"BOOLEAN"},n={hash:{type:"primary",xs:!0,block:!0},inverse:r.noop,fn:r.program(9,j,e),contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},l=c["bs-button"]||b["bs-button"],m=l?l.call(b,n):u.call(b,"bs-button",n),(m||0===m)&&e.buffer.push(m),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">&#123;&#123;#bs-button type="primary" xs=true block=true}}Block Button&#123;&#123;/bs-button&#125;&#125;</code></pre>\n<h2>Disbled state</h2>\n<p>As in Bootstrap, set <code>disabled="disabled"</code>/<code>disabled=true</code> to make the button unclickable.</p>\n<div class="bs-example">\n    '),p={type:b,disabled:b},o={type:"STRING",disabled:"BOOLEAN"},n={hash:{type:"primary",disabled:!0},inverse:r.noop,fn:r.program(11,k,e),contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},l=c["bs-button"]||b["bs-button"],m=l?l.call(b,n):u.call(b,"bs-button",n),(m||0===m)&&e.buffer.push(m),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">&#123;&#123;#bs-button type="primary" disabled=true&#125;&#125;Disabled Button&#123;&#123;/bs-button&#125;&#125;</code></pre>\n<p>Disabled state can also be hooked to a controller property</p>\n<div class="bs-example">\n    '),p={type:b,content:b,disabled:b,clicked:b},o={type:"STRING",content:"STRING",disabled:"ID",clicked:"STRING"},n={hash:{type:"primary",content:"Click to disable",disabled:"isButtonDisabled",clicked:"disableButton"},contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},e.buffer.push(v((l=c["bs-button"]||b["bs-button"],l?l.call(b,n):u.call(b,"bs-button",n)))),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">&#123;&#123;bs-button type="primary" content="Click to disable" disabled=isButtonDisabled clicked="disableButton"&#125;&#125;</code></pre>\n<ul>\n<li><code>isButtonDisabled</code> is a boolean property on the controller</li>\n<li><code>disableButton</code> is a function on the controller that sets <code>isButtonDisabled</code> to <em>false</em></li>\n</ul>\n<h2>State</h2>\n<p>By Bootstrap:</p>\n<blockquote>\n<p>Add <code>data-loading-text="Loading..."</code> to use a loading state on a button.</p>\n</blockquote>\n<p>Then extra <code>loading=loadingState</code> is needed where <em>loadingState</em> is a property in the <em>controller</em> that returns a string which\ndefines the current state of the button:</p>\n<ul>\n<li>If <code>loadingState</code> property equals <code>loading</code> then the button will be disabled and its text will change to the value of the <code>data-loading-text</code> button property.</li>\n<li>If its value is <code>null</code> then the button will be re-enabled and its text will be modified to the original value defined in the <code>content</code> button property.</li>\n</ul>\n<div class="bs-example">\n    '),p={type:b,"data-loading-text":b,loading:b,clicked:b,content:b,clicked:b},o={type:"STRING","data-loading-text":"STRING",loading:"ID",clicked:"STRING",content:"STRING",clicked:"STRING"},n={hash:{type:"primary","data-loading-text":"Loading...",loading:"loadingState",clicked:"disableButton",content:"Submit",clicked:"startLoading"},contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},e.buffer.push(v((l=c["bs-button"]||b["bs-button"],l?l.call(b,n):u.call(b,"bs-button",n)))),e.buffer.push('\n</div>\n\n\n<pre><code class="lang-html">&#123;&#123;bs-button type="primary" data-loading-text="Loading..." loading=loadingState content="Submit" clicked="startLoading"&#125;&#125;</code></pre>\n<p>In controller:</p>\n\n<pre><code class="lang-javascript">startLoading: function() {\n    var _this = this;\n    this.set(&#39;loadingState&#39;, &#39;loading&#39;);\n    return Ember.run.later(function() {\n      return _this.set(&#39;loadingState&#39;, null);\n    }, 2000);\n}</code></pre>\n<p>The <code>loading</code> property may also return any string that matches one of the <code>data-foo-text</code> button property to render other text\nbut the original text of the button when the loading state completes.</p>\n<div class="bs-example">\n    '),p={type:b,"data-loading-text":b,"data-completed-text":b,loading:b,content:b,clicked:b},o={type:"STRING","data-loading-text":"STRING","data-completed-text":"STRING",loading:"ID",content:"STRING",clicked:"STRING"},n={hash:{type:"primary","data-loading-text":"Loading...","data-completed-text":"Completed!",loading:"loadingState1",content:"Submit!",clicked:"startLoading1"},contexts:[],types:[],hashContexts:p,hashTypes:o,data:e},e.buffer.push(v((l=c["bs-button"]||b["bs-button"],l?l.call(b,n):u.call(b,"bs-button",n)))),e.buffer.push('\n</div>\n\n<pre><code class="lang-javascript">startLoading1: function() {\n    var _this = this;\n    this.set(&#39;loadingState&#39;, &#39;loading&#39;);\n    return Ember.run.later(function() {\n      return _this.set(&#39;loadingState&#39;, &#39;completed&#39;);\n    }, 2000);\n}</code></pre>\n<p>Pay attention that this time the <code>loadingState</code> is set to <code>completed</code> and not <code>null</code>.</p>\n<h2>Component Properties</h2>\n<p><div class="table-responsive">\n    <table class="table table-bordered table-striped">\n        <thead>\n            <tr>\n                <th style="width: 150px;">Property</th>\n                <th>Description</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>type</td>\n                <td>Alert types: <em>success</em> | <em>info</em> | <em>warning</em> | <em>danger</em></td>\n            </tr>\n            <tr>\n                <td>content</td>\n                <td>A string representing the text of the button (<em>not required if component is used as a block component</em>)</td>\n            </tr>\n            <tr>\n                <td>clicked</td>\n                <td>Triggers the specified function name on the <strong>controller</strong> immediately when the button is clicked.</td>\n            </tr>\n            <tr>\n                <td>size</td>\n                <td>Can be: <em>sx</em> | <em>sm</em> | <em>lg</em></td>\n            </tr>\n            <tr>\n                <td>xs</td>\n                <td>If set to <em>true</em> it is equivalent to <code>size=xs</code></td>\n            </tr>\n            <tr>\n                <td>small</td>\n                <td>If set to <em>true</em> it is equivalent to <code>size=small</code></td>\n            </tr>\n            <tr>\n                <td>large</td>\n                <td>If set to <em>true</em> it is equivalent to <code>size=large</code></td>\n            </tr>\n            <tr>\n                <td>block</td>\n                <td>If <em>true</em> the button is a block level and will span the full width of its parent</td>\n            </tr>\n            <tr>\n                <td>disabled</td>\n                <td>If <em>true</em> the button will be disabled, can also be bound to a <em>controller</em> property</td>\n            </tr>\n            <tr>\n                <td>loading</td>\n                <td>Bound to a controller property that defines the state of the button.</td>\n            </tr>\n            <tr>\n                <td>data-loading-text</td>\n                <td>If <code>loading=foo</code> and <code>foo</code> is a property in the <em>controller</em> and <code>foo</code> property returns <code>loading</code>, then the text of the button will be changed to the value of <em>this</em> property.</td>\n            </tr>\n            <tr>\n                <td>data-xxx-text</td>\n                <td>If <code>loading=foo</code> and <code>foo</code> is a property in the <em>controller</em> and <code>foo</code> property returns <code>xxx</code>, then the text of the button will be changed to the value of <em>this</em> property.</td>\n            </tr>\n        </tbody>\n    </table></p>\n'),q}),this.Ember.TEMPLATES["show_components/label"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push('<h1>Label</h1>\n<h2>Basic</h2>\n<div class="bs-example">\n    <h4>Heading with label '),g={content:b},h={content:"STRING"},i={hash:{content:"Label"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bs-label"]||b["bs-label"],f?f.call(b,i):k.call(b,"bs-label",i)))),e.buffer.push('</h3>\n</div>\n\n<pre><code class="lang-html">    &lt;h3&gt;Heading with label &#123;&#123;bs-label content="Label"&#125;&#125;&lt;/h3&gt;</code></pre>\n<h2>With Type</h2>\n<div class="bs-example">\n    <h3>Heading with <strong>danger</strong> '),g={content:b,type:b},h={content:"STRING",type:"STRING"},i={hash:{content:"Careful!",type:"danger"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bs-label"]||b["bs-label"],f?f.call(b,i):k.call(b,"bs-label",i)))),e.buffer.push('</h3>\n</div>\n\n<pre><code class="lang-html">    &lt;h3&gt;Heading with &lt;strong&gt;danger&lt;/strong&gt; &#123;&#123;bs-label content="Careful!" type="danger"&#125;&#125;&lt;/h3&gt;</code></pre>\n<h2>Component Properties</h2>\n<p><div class="table-responsive">\n    <table class="table table-bordered table-striped">\n        <thead>\n            <tr>\n                <th style="width: 150px;">Property</th>\n                <th>Description</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>content</td>\n                <td>string: the label content.</td>\n            </tr>\n            <tr>\n                <td>type</td>\n                <td>Label types: success | info | warning | danger</td>\n            </tr>\n        </tbody>\n    </table></p>\n'),j}),this.Ember.TEMPLATES["show_components/well"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("\n    I am in a well, click me!\n    ")}function g(a,b){b.buffer.push("\n    Look, I&#39;m in a large well!\n    ")}function h(a,b){b.buffer.push("\n    Look, I&#39;m in a small well!\n    ")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this,p=c.helperMissing;return e.buffer.push('<h1>Well</h1>\n<h2>Default Well</h2>\n<p>Here is a default well, but <strong>pay attention</strong> that it is clickable, the click will be propagated to the <strong>controller</strong>.</p>\n\n<div class="bs-example">\n    '),k={clicked:b},l={clicked:"STRING"},m={hash:{clicked:"wellClick"},inverse:o.noop,fn:o.program(1,f,e),contexts:[],types:[],hashContexts:k,hashTypes:l,data:e},i=c["bs-well"]||b["bs-well"],j=i?i.call(b,m):p.call(b,"bs-well",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">&#123;&#123;#bs-well clicked="wellClick"&#125;&#125;\nI am in a well!\n&#123;&#123;/bs-well&#125;&#125;</code></pre>\n<p><code>wellClick</code> is the function name in the <strong>controller</strong>.</p>\n<h2>Optional classes</h2>\n<p>As explained by Bootstrap:</p>\n<blockquote>\n<p>Control padding and rounded corners with two optional modifier classes.</p>\n</blockquote>\n<h3>Large Well</h3>\n<div class="bs-example">\n    '),k={large:b},l={large:"BOOLEAN"},m={hash:{large:!0},inverse:o.noop,fn:o.program(3,g,e),contexts:[],types:[],hashContexts:k,hashTypes:l,data:e},i=c["bs-well"]||b["bs-well"],j=i?i.call(b,m):p.call(b,"bs-well",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">&#123;&#123;#bs-well large=true&#125;&#125;\nLook, I&#39;m in a large well!\n&#123;&#123;/bs-well&#125;&#125;</code></pre>\n<p><b>You can set large well by adding <code>class="well-lg"</code> or just set the <code>large</code> property to true</b></p>\n<h3>Small Well</h3>\n<div class="bs-example">\n    '),k={small:b},l={small:"BOOLEAN"},m={hash:{small:!0},inverse:o.noop,fn:o.program(5,h,e),contexts:[],types:[],hashContexts:k,hashTypes:l,data:e},i=c["bs-well"]||b["bs-well"],j=i?i.call(b,m):p.call(b,"bs-well",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n</div>\n\n<pre><code class="lang-html">&#123;&#123;#bs-well small=true&#125;&#125;\nLook, I&#39;m in a small well!\n&#123;&#123;/bs-well&#125;&#125;</code></pre>\n<p><b>You can set large well by adding <code>class="well-sm"</code> or just set the <code>small</code> property to true</b></p>\n<h2>Component Properties</h2>\n<p><div class="table-responsive">\n    <table class="table table-bordered table-striped">\n        <thead>\n            <tr>\n                <th style="width: 150px;">Property</th>\n                <th>Description</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>large</td>\n                <td>If true, a large well <em>will</em> be rendered by adding the <strong>well-lg</strong> class.</td>\n            </tr>\n            <tr>\n                <td>small</td>\n                <td>If true, a small <em>well</em> will be rendered by adding the <strong>well-sm</strong> class.</td>\n            </tr>\n            <tr>\n                <td>clicked</td>\n                <td>Triggers the specified function name on the <strong>controller</strong> immediately when user clicks the area of the well.</td>\n            </tr>\n        </tbody>\n    </table></p>\n'),n
}),this.Ember.TEMPLATES["social-buttons"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="bs-social">\n  <ul class="bs-social-buttons">\n    <li>\n      <iframe class="github-btn" src="http://ghbtns.com/github-btn.html?user=ember-addons&amp;repo=bootstrap-for-ember&amp;type=watch&amp;count=true" width="100" height="20" title="Star on GitHub"></iframe>\n    </li>\n    <li>\n      <iframe class="github-btn" src="http://ghbtns.com/github-btn.html?user=ember-addons&amp;repo=bootstrap-for-ember&amp;type=fork&amp;count=true" width="102" height="20" title="Fork on GitHub"></iframe>\n    </li>\n    <li class="follow-btn">\n      <a href="https://twitter.com/bs_for_ember" class="twitter-follow-button" data-link-color="#0069D6" data-show-count="true">Follow @bs_for_ember</a>\n    </li>\n  </ul>\n</div>\n')}),function(){!function(){var a,b;a=window.Bootstrap,b=window.Showcase=Ember.Application.create({LOG_TRANSITIONS:!0,LOG_VIEW_LOOKUPS:!0,LOG_ACTIVE_GENERATION:!0,BsAlertComponent:a.BsAlertComponent,BsLabelComponent:a.BsLabelComponent,BsBadgeComponent:a.BsBadgeComponent,BsWellComponent:a.BsWellComponent,BsButtonComponent:a.BsButtonComponent}),Ember.Handlebars.registerHelper("raw",function(a){return a.fn(a)})}(),function(){!function(){Showcase.Router.map(function(){return this.resource("show_components",function(){return this.route("alert"),this.route("label"),this.route("badge"),this.route("well"),this.route("button")})})}.call(this)}(),function(){!function(){Showcase.ApplicationRoute=Ember.Route.extend({model:function(){return[Ember.Object.create({title:"Alert",route:"show_components.alert"}),Ember.Object.create({title:"Label",route:"show_components.label"}),Ember.Object.create({title:"Badge",route:"show_components.badge"}),Ember.Object.create({title:"Well",route:"show_components.well"}),Ember.Object.create({title:"Button",route:"show_components.button"})]}})}.call(this)}(),function(){!function(){Showcase.ApplicationController=Ember.ArrayController.extend({select:function(a){return this.transitionToRoute(a.route)}})}.call(this)}(),function(){!function(){Showcase.ShowComponentsAlertController=Ember.Controller.extend({didAlertClosed:function(){return alert("From controller: The -closed- event was triggered.")},didAlertClose:function(){return alert("From controller: The -close- event was triggered.")},submit:function(){return alert("Action taken by controller!")}})}.call(this)}(),function(){!function(){Showcase.ShowComponentsButtonController=Ember.Controller.extend({isButtonDisabled:!1,loadingState:null,loadingState1:null,disableButton:function(){return this.set("isButtonDisabled",!0)},startLoading:function(){var a=this;return this.set("loadingState","loading"),Ember.run.later(function(){return a.set("loadingState",null)},2e3)},startLoading1:function(){var a=this;return this.set("loadingState1","loading"),Ember.run.later(function(){return a.set("loadingState1","completed")},2e3)}})}.call(this)}(),function(){!function(){Showcase.ShowComponentsWellController=Ember.Controller.extend({wellClick:function(){return alert("Hello from controller: A click in a well!")}})}.call(this)}(),function(){}.call(this)}();