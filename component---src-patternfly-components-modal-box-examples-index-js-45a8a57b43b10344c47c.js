webpackJsonp([0x9ff945bc8c37],{906:function(e,o){e.exports="<h2 id=overview>Overview</h2> <p>A modal box is a generic rectangular container that can be used to build modals. A modal box can have three sections: header, body, and footer. Header or body is required. If no <code>pf-c-modal-box__header-title</code> is used, <code>aria-label=&quot;[title of modal]&quot;</code> must be provided for <code>.pf-c-modal-box</code>.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applies to</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>role=&quot;dialog&quot;</code></td> <td><code>.pf-c-modal-box</code></td> <td>Identifies the element that serves as the modal container. <strong>Required</strong></td> </tr> <tr> <td><code>aria-labelledby=&quot;[id value of .pf-c-modal-box__header-title]&quot;</code></td> <td><code>.pf-c-modal-box</code></td> <td>Gives the modal an accessible name by referring to the element that provides the dialog title. <strong>Required when .pf-c-modal-box__header-title is present</strong></td> </tr> <tr> <td><code>aria-label=&quot;[title of modal]&quot;</code></td> <td><code>.pf-c-modal-box</code></td> <td>Gives the modal an accessible name. <strong>Required when .pf-c-modal-box__header-title is <em>not</em> present</strong></td> </tr> <tr> <td><code>aria-describedby=&quot;[id value of applicable content]&quot;</code></td> <td><code>.pf-c-modal-box</code></td> <td>Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal.</td> </tr> <tr> <td><code>aria-modal=&quot;true&quot;</code></td> <td><code>.pf-c-modal-box</code></td> <td>Tells assistive technologies that the windows underneath the current modal are not available for interaction. <strong>Required</strong></td> </tr> <tr> <td><code>aria-label=&quot;Close&quot;</code></td> <td><code>.pf-c-modal-box__close .pf-c-button</code></td> <td>Provides an accessible name for the close button as it uses an icon instead of text. <strong>Required</strong></td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-modal-box</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates a modal box. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-modal-box__header</code></td> <td><code>&lt;header&gt;</code></td> <td>Initiates a modal box header. A modal box header is <strong>required</strong> if there is no modal box body.</td> </tr> <tr> <td><code>.pf-c-modal-box__header-title</code></td> <td><code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code></td> <td>Initiates a modal box header title.</td> </tr> <tr> <td><code>.pf-c-modal-box__body</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates a modal box body. A modal box body is <strong>required</strong> if there is no modal box header.</td> </tr> <tr> <td><code>.pf-c-modal-box__footer</code></td> <td><code>&lt;footer&gt;</code></td> <td>Initiates a modal box footer.</td> </tr> <tr> <td><code>.pf-c-modal-box__close</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates a modal box close button container. The close container can be nested as the first item in the modal box. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-m-lg</code></td> <td><code>.pf-c-modal-box</code></td> <td>Modifies for a modal box width.</td> </tr> </tbody> </table> "},319:function(e,o,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0,o.Docs=void 0;var l=a(3),r=t(l),n=a(11),d=t(n),i=a(12),s=t(i),u=a(1195),m=t(u),c=a(1196),b=t(c),p=a(1197),f=t(p),h=a(727),x=t(h),v=a(728),g=t(v),y=a(729),q=t(y),k=a(906),P=t(k);a(1106);var _=o.Docs=P.default;o.default=function(){var e=(0,x.default)(),o=(0,g.default)(),a=(0,q.default)(),t="Modal Box";return r.default.createElement(d.default,{docs:_,heading:t},r.default.createElement(s.default,{heading:"ModalBox Basic Example",handlebars:m.default},e),r.default.createElement(s.default,{heading:"ModalBox Large Example",handlebars:b.default},o),r.default.createElement(s.default,{heading:"ModalBox No Header Example",handlebars:f.default},a))}},727:function(e,o,a){var t=a(1);e.exports=(t.default||t).template({1:function(e,o,t,l,r){var n;return(null!=(n=e.invokePartial(a(77),o,{name:"modal-box-close",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(a(99),o,{name:"modal-box-header",fn:e.program(5,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(a(76),o,{name:"modal-box-body",hash:{"modal-box-body--attribute":'id="modal-description"'},fn:e.program(8,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(a(78),o,{name:"modal-box-footer",fn:e.program(10,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")},2:function(e,o,t,l,r){var n;return null!=(n=e.invokePartial(a(4),o,{name:"button",hash:{"button--attribute":'aria-label="Close"',"button--HasTimesIcon":"true","button--modifier":"pf-m-plain"},fn:e.program(3,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},3:function(e,o,a,t,l){return""},5:function(e,o,t,l,r){var n;return null!=(n=e.invokePartial(a(98),o,{name:"modal-box-header-title",hash:{"modal-box-header-title--attribute":'id="modal-title"'},fn:e.program(6,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},6:function(e,o,a,t,l){return"      Modal Header\n"},8:function(e,o,a,t,l){return"    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.\n"},10:function(e,o,a,t,l){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(e,o,t,l,r){var n;return null!=(n=e.invokePartial(a(79),o,{name:"modal-box",hash:{"modal-box--attribute":'aria-labelledby="modal-title" aria-describedby="modal-description"'},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},usePartial:!0,useData:!0})},1195:function(e,o){e.exports='{{#> modal-box modal-box--attribute=\'aria-labelledby="modal-title" aria-describedby="modal-description"\'}}\n  {{#> modal-box-close}}\n    {{#> button button--modifier="pf-m-plain" button--HasTimesIcon="true" button--attribute=\'aria-label="Close"\'}}\n    {{/button}}\n  {{/modal-box-close}}\n  {{#> modal-box-header}}\n    {{#> modal-box-header-title modal-box-header-title--attribute=\'id="modal-title"\'}}\n      Modal Header\n    {{/modal-box-header-title}}\n  {{/modal-box-header}}\n  {{#> modal-box-body modal-box-body--attribute=\'id="modal-description"\'}}\n    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n'},1196:function(e,o){e.exports='{{#> modal-box modal-box--modifier="pf-m-lg" modal-box--attribute=\'aria-labelledby="modal-lg-title" aria-describedby="modal-lg-description"\'}}\n  {{#> modal-box-close}}\n    {{#> button button--modifier="pf-m-plain" button--HasTimesIcon="true" button--attribute=\'aria-label="Close"\'}}\n    {{/button}}\n  {{/modal-box-close}}\n  {{#> modal-box-header}}\n    {{#> modal-box-header-title  modal-box-header-title--type="h2" modal-box-header-title--attribute=\'id="modal-lg-title"\'}}\n      Modal Header\n    {{/modal-box-header-title}}\n  {{/modal-box-header}}\n  {{#> modal-box-body modal-box-body--attribute=\'id="modal-lg-description"\'}}\n    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n'},728:function(e,o,a){var t=a(1);e.exports=(t.default||t).template({1:function(e,o,t,l,r){var n;return(null!=(n=e.invokePartial(a(77),o,{name:"modal-box-close",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(a(99),o,{name:"modal-box-header",fn:e.program(5,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(a(76),o,{name:"modal-box-body",hash:{"modal-box-body--attribute":'id="modal-lg-description"'},fn:e.program(8,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(a(78),o,{name:"modal-box-footer",fn:e.program(10,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")},2:function(e,o,t,l,r){var n;return null!=(n=e.invokePartial(a(4),o,{name:"button",hash:{"button--attribute":'aria-label="Close"',"button--HasTimesIcon":"true","button--modifier":"pf-m-plain"},fn:e.program(3,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},3:function(e,o,a,t,l){return""},5:function(e,o,t,l,r){var n;return null!=(n=e.invokePartial(a(98),o,{name:"modal-box-header-title",hash:{"modal-box-header-title--attribute":'id="modal-lg-title"',"modal-box-header-title--type":"h2"},fn:e.program(6,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},6:function(e,o,a,t,l){return"      Modal Header\n"},8:function(e,o,a,t,l){return"    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n"},10:function(e,o,a,t,l){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(e,o,t,l,r){var n;return null!=(n=e.invokePartial(a(79),o,{name:"modal-box",hash:{"modal-box--attribute":'aria-labelledby="modal-lg-title" aria-describedby="modal-lg-description"',"modal-box--modifier":"pf-m-lg"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},usePartial:!0,useData:!0})},1197:function(e,o){e.exports='{{#> modal-box modal-box--attribute=\'aria-label="Example of a modal without a header" aria-describedby="modal-no-header-description"\'}}\n  {{#> modal-box-close}}\n    {{#> button button--modifier="pf-m-plain" button--HasTimesIcon="true" button--attribute=\'aria-label="Close"\'}}\n    {{/button}}\n  {{/modal-box-close}}  \n  {{#> modal-box-body}}\n    <span id="modal-no-header-description">When static text describing the modal is available, it can be wrapped with an ID referring to the modal\'s aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n'},729:function(e,o,a){var t=a(1);e.exports=(t.default||t).template({1:function(e,o,t,l,r){var n;return(null!=(n=e.invokePartial(a(77),o,{name:"modal-box-close",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(a(76),o,{name:"modal-box-body",fn:e.program(5,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(a(78),o,{name:"modal-box-footer",fn:e.program(7,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")},2:function(e,o,t,l,r){var n;return null!=(n=e.invokePartial(a(4),o,{name:"button",hash:{"button--attribute":'aria-label="Close"',"button--HasTimesIcon":"true","button--modifier":"pf-m-plain"},fn:e.program(3,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},3:function(e,o,a,t,l){return""},5:function(e,o,a,t,l){return'    <span id="modal-no-header-description">When static text describing the modal is available, it can be wrapped with an ID referring to the modal\'s aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'},7:function(e,o,a,t,l){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(e,o,t,l,r){var n;return null!=(n=e.invokePartial(a(79),o,{name:"modal-box",hash:{"modal-box--attribute":'aria-label="Example of a modal without a header" aria-describedby="modal-no-header-description"'},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},usePartial:!0,useData:!0})},76:function(e,o,a){var t=a(1);e.exports=(t.default||t).template({1:function(e,o,a,t,l){var r;return" "+e.escapeExpression((r=null!=(r=a["modal-box-body--modifier"]||(null!=o?o["modal-box-body--modifier"]:o))?r:a.helperMissing,"function"==typeof r?r.call(null!=o?o:e.nullContext||{},{name:"modal-box-body--modifier",hash:{},data:l}):r))},3:function(e,o,a,t,l){var r,n;return"    "+(null!=(n=null!=(n=a["modal-box-body--attribute"]||(null!=o?o["modal-box-body--attribute"]:o))?n:a.helperMissing,r="function"==typeof n?n.call(null!=o?o:e.nullContext||{},{name:"modal-box-body--attribute",hash:{},data:l}):n)?r:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,o,a,t,l){var r,n=null!=o?o:e.nullContext||{};return'<div class="pf-c-modal-box__body'+(null!=(r=a.if.call(n,null!=o?o["modal-box-body--modifier"]:o,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'"\n'+(null!=(r=a.if.call(n,null!=o?o["modal-box-body--attribute"]:o,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+">\n"+(null!=(r=e.invokePartial(t["@partial-block"],o,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:t,decorators:e.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},77:function(e,o,a){var t=a(1);e.exports=(t.default||t).template({1:function(e,o,a,t,l){var r;return" "+e.escapeExpression((r=null!=(r=a["modal-box-close--modifier"]||(null!=o?o["modal-box-close--modifier"]:o))?r:a.helperMissing,"function"==typeof r?r.call(null!=o?o:e.nullContext||{},{name:"modal-box-close--modifier",hash:{},data:l}):r))},3:function(e,o,a,t,l){var r,n;return"    "+(null!=(n=null!=(n=a["modal-box-close--attribute"]||(null!=o?o["modal-box-close--attribute"]:o))?n:a.helperMissing,r="function"==typeof n?n.call(null!=o?o:e.nullContext||{},{name:"modal-box-close--attribute",hash:{},data:l}):n)?r:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,o,a,t,l){var r,n=null!=o?o:e.nullContext||{};return'<div class="pf-c-modal-box__close'+(null!=(r=a.if.call(n,null!=o?o["modal-box-close--modifier"]:o,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'"\n'+(null!=(r=a.if.call(n,null!=o?o["modal-box-close--attribute"]:o,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+">\n"+(null!=(r=e.invokePartial(t["@partial-block"],o,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:t,decorators:e.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},78:function(e,o,a){var t=a(1);e.exports=(t.default||t).template({1:function(e,o,a,t,l){var r;return" "+e.escapeExpression((r=null!=(r=a["modal-box-footer--modifier"]||(null!=o?o["modal-box-footer--modifier"]:o))?r:a.helperMissing,"function"==typeof r?r.call(null!=o?o:e.nullContext||{},{name:"modal-box-footer--modifier",hash:{},data:l}):r))},3:function(e,o,a,t,l){var r,n;return"    "+(null!=(n=null!=(n=a["modal-box-footer--attribute"]||(null!=o?o["modal-box-footer--attribute"]:o))?n:a.helperMissing,r="function"==typeof n?n.call(null!=o?o:e.nullContext||{},{name:"modal-box-footer--attribute",hash:{},data:l}):n)?r:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,o,a,t,l){var r,n=null!=o?o:e.nullContext||{};return'<footer class="pf-c-modal-box__footer'+(null!=(r=a.if.call(n,null!=o?o["modal-box-footer--modifier"]:o,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'"\n'+(null!=(r=a.if.call(n,null!=o?o["modal-box-footer--attribute"]:o,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+">\n"+(null!=(r=e.invokePartial(t["@partial-block"],o,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:t,decorators:e.decorators}))?r:"")+"</footer>\n"},usePartial:!0,useData:!0})},98:function(e,o,a){var t=a(1);e.exports=(t.default||t).template({1:function(e,o,a,t,l){var r;return e.escapeExpression((r=null!=(r=a["modal-box-header-title--type"]||(null!=o?o["modal-box-header-title--type"]:o))?r:a.helperMissing,"function"==typeof r?r.call(null!=o?o:e.nullContext||{},{name:"modal-box-header-title--type",hash:{},data:l}):r))},3:function(e,o,a,t,l){return"h1"},5:function(e,o,a,t,l){var r;return" "+e.escapeExpression((r=null!=(r=a["modal-box-header-title--modifier"]||(null!=o?o["modal-box-header-title--modifier"]:o))?r:a.helperMissing,"function"==typeof r?r.call(null!=o?o:e.nullContext||{},{name:"modal-box-header-title--modifier",hash:{},data:l}):r))},7:function(e,o,a,t,l){var r,n;return"    "+(null!=(n=null!=(n=a["modal-box-header-title--attribute"]||(null!=o?o["modal-box-header-title--attribute"]:o))?n:a.helperMissing,r="function"==typeof n?n.call(null!=o?o:e.nullContext||{},{name:"modal-box-header-title--attribute",hash:{},data:l}):n)?r:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,o,a,t,l){var r,n=null!=o?o:e.nullContext||{};return"<"+(null!=(r=a.if.call(n,null!=o?o["modal-box-header-title--type"]:o,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l}))?r:"")+' class="pf-c-modal-box__header-title'+(null!=(r=a.if.call(n,null!=o?o["modal-box-header-title--modifier"]:o,{name:"if",hash:{},fn:e.program(5,l,0),inverse:e.noop,data:l}))?r:"")+'" \n'+(null!=(r=a.if.call(n,null!=o?o["modal-box-header-title--attribute"]:o,{name:"if",hash:{},fn:e.program(7,l,0),inverse:e.noop,data:l}))?r:"")+">\n"+(null!=(r=e.invokePartial(t["@partial-block"],o,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:t,decorators:e.decorators}))?r:"")+"</"+(null!=(r=a.if.call(n,null!=o?o["modal-box-header-title--type"]:o,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l}))?r:"")+">\n"},usePartial:!0,useData:!0})},99:function(e,o,a){var t=a(1);e.exports=(t.default||t).template({1:function(e,o,a,t,l){var r;return" "+e.escapeExpression((r=null!=(r=a["modal-box-header--modifier"]||(null!=o?o["modal-box-header--modifier"]:o))?r:a.helperMissing,"function"==typeof r?r.call(null!=o?o:e.nullContext||{},{name:"modal-box-header--modifier",hash:{},data:l}):r))},3:function(e,o,a,t,l){var r,n;return"    "+(null!=(n=null!=(n=a["modal-box-header--attribute"]||(null!=o?o["modal-box-header--attribute"]:o))?n:a.helperMissing,r="function"==typeof n?n.call(null!=o?o:e.nullContext||{},{name:"modal-box-header--attribute",hash:{},data:l}):n)?r:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,o,a,t,l){var r,n=null!=o?o:e.nullContext||{};return'<header class="pf-c-modal-box__header'+(null!=(r=a.if.call(n,null!=o?o["modal-box-header--modifier"]:o,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'" \n'+(null!=(r=a.if.call(n,null!=o?o["modal-box-header--attribute"]:o,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+">  \n"+(null!=(r=e.invokePartial(t["@partial-block"],o,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:t,decorators:e.decorators}))?r:"")+"</header>\n"},usePartial:!0,useData:!0})},79:function(e,o,a){var t=a(1);e.exports=(t.default||t).template({1:function(e,o,a,t,l){var r;return" "+e.escapeExpression((r=null!=(r=a["modal-box--modifier"]||(null!=o?o["modal-box--modifier"]:o))?r:a.helperMissing,"function"==typeof r?r.call(null!=o?o:e.nullContext||{},{name:"modal-box--modifier",hash:{},data:l}):r))},3:function(e,o,a,t,l){var r,n;return"    "+(null!=(n=null!=(n=a["modal-box--attribute"]||(null!=o?o["modal-box--attribute"]:o))?n:a.helperMissing,r="function"==typeof n?n.call(null!=o?o:e.nullContext||{},{name:"modal-box--attribute",hash:{},data:l}):n)?r:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(e,o,a,t,l){var r,n=null!=o?o:e.nullContext||{};return'<div class="pf-c-modal-box'+(null!=(r=a.if.call(n,null!=o?o["modal-box--modifier"]:o,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'"\n  role="dialog" \n  aria-modal="true"\n'+(null!=(r=a.if.call(n,null!=o?o["modal-box--attribute"]:o,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+">\n"+(null!=(r=e.invokePartial(t["@partial-block"],o,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:t,decorators:e.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},1106:function(e,o){}});
//# sourceMappingURL=component---src-patternfly-components-modal-box-examples-index-js-45a8a57b43b10344c47c.js.map