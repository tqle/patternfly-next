webpackJsonp([0xe5283f341cc3],{954:function(e,o){e.exports="<h2 id=overview>Overview</h2> <p>A popover is used to provide contextual information for another component on click. The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body. One of the directional modifiers (<code>.pf-m-left</code>, <code>.pf-m-top</code>, etc.) is required on the popover component</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applies to</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>role=&quot;dialog&quot;</code></td> <td><code>.pf-c-popover</code></td> <td>Identifies the element that serves as the popover container. <strong>Required</strong></td> </tr> <tr> <td><code>aria-labelledby=&quot;[id value of .pf-c-popover__header-title]&quot;</code></td> <td><code>.pf-c-popover</code></td> <td>Gives the popover an accessible name by referring to the element that provides the dialog title. <strong>Required when .pf-c-popover__header-title is present</strong></td> </tr> <tr> <td><code>aria-label=&quot;[title of popover]&quot;</code></td> <td><code>.pf-c-popover</code></td> <td>Gives the popover an accessible name. <strong>Required when .pf-c-popover__header-title is <em>not</em> present</strong></td> </tr> <tr> <td><code>aria-describedby=&quot;[id value of applicable content]&quot;</code></td> <td><code>.pf-c-popover</code></td> <td>Gives the popover an accessible description by referring to the popover content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the popover.</td> </tr> <tr> <td><code>aria-modal=&quot;true&quot;</code></td> <td><code>.pf-c-popover</code></td> <td>Tells assistive technologies that the windows underneath the current popover are not available for interaction. <strong>Required</strong></td> </tr> <tr> <td><code>aria-label=&quot;Close&quot;</code></td> <td><code>.pf-c-popover__close .pf-c-button</code></td> <td>Provides an accessible name for the close button as it uses an icon instead of text. <strong>Required</strong></td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-popover</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a popover. Always use it with a modifier class that positions the popover relative to the element that triggered it. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-popover__arrow</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates an arrow pointing towards the element the popover describes. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-popover__content</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates the body of the popover. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-popover__close</code></td> <td><code>&lt;div&gt;</code></td> <td>Contains and positions the close icon in the top-right corner of the popover. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-popover__header</code></td> <td><code>&lt;header&gt;</code></td> <td>The header text area of the popover.</td> </tr> <tr> <td><code>.pf-c-popover__header-title</code></td> <td><code>&lt;h1&gt;</code>,<code>&lt;h2&gt;</code>,<code>&lt;h3&gt;</code>,<code>&lt;h4&gt;</code>,<code>&lt;h5&gt;</code>,<code>&lt;h6&gt;</code></td> <td>The actual popover title.</td> </tr> <tr> <td><code>.pf-c-popover__body</code></td> <td><code>&lt;div&gt;</code></td> <td>The popover&#39;s body text. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-m-left</code></td> <td><code>.pf-c-popover</code></td> <td>Positions the popover to the left of the element.</td> </tr> <tr> <td><code>.pf-m-right</code></td> <td><code>.pf-c-popover</code></td> <td>Positions the popover to the right of the element.</td> </tr> <tr> <td><code>.pf-m-top</code></td> <td><code>.pf-c-popover</code></td> <td>Positions the popover to the top of the element.</td> </tr> <tr> <td><code>.pf-m-bottom</code></td> <td><code>.pf-c-popover</code></td> <td>Positions the popover to the bottom of the element.</td> </tr> </tbody> </table> "},331:function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0,o.Docs=void 0;var a=t(4),n=r(a),p=t(11),i=r(p),l=t(12),d=r(l),s=t(1275),u=r(s),c=t(1274),v=r(c),f=t(1271),h=r(f),m=t(1272),b=r(m),g=t(1273),y=r(g),P=t(781),x=r(P),k=t(780),_=r(k),w=t(777),q=r(w),C=t(778),D=r(C),E=t(779),N=r(E),L=t(954),R=r(L);t(1167);var M=o.Docs=R.default;o.default=function(){var e=(0,x.default)(),o=(0,_.default)(),t=(0,q.default)(),r=(0,D.default)(),a=(0,N.default)(),p="Popover";return n.default.createElement(i.default,{docs:M,heading:p},n.default.createElement(d.default,{heading:"Popover Top",handlebars:u.default},e),n.default.createElement(d.default,{heading:"Popover Right",handlebars:v.default},o),n.default.createElement(d.default,{heading:"Popover Bottom",handlebars:h.default},t),n.default.createElement(d.default,{heading:"Popover Left",handlebars:b.default},r),n.default.createElement(d.default,{heading:"Popover No Header",handlebars:y.default},a))}},1271:function(e,o){e.exports='{{#> popover popover--modifier="pf-m-bottom" popover--attribute=\'aria-labelledby="popover-bottom-header" aria-describedby="popover-bottom-body"\'}}\n  {{#> popover-content}}\n    {{#> popover-header}}\n      {{#> popover-header-title popover-header-title--attribute=\'id="popover-bottom-header"\'}}\n        Popover Header\n      {{/popover-header-title}}\n    {{/popover-header}}\n    {{#> popover-body popover-body--attribute=\'id="popover-bottom-body"\'}}\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n    {{/popover-body}}\n  {{/popover-content}}\n{{/popover}}\n'},777:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(139),o,{name:"popover-content",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},2:function(e,o,r,a,n){var p;return(null!=(p=e.invokePartial(t(165),o,{name:"popover-header",fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")+(null!=(p=e.invokePartial(t(138),o,{name:"popover-body",hash:{"popover-body--attribute":'id="popover-bottom-body"'},fn:e.program(6,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")},3:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(164),o,{name:"popover-header-title",hash:{"popover-header-title--attribute":'id="popover-bottom-header"'},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},4:function(e,o,t,r,a){return"        Popover Header\n"},6:function(e,o,t,r,a){return"      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n"},compiler:[7,">= 4.0.0"],main:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(140),o,{name:"popover",hash:{"popover--attribute":'aria-labelledby="popover-bottom-header" aria-describedby="popover-bottom-body"',"popover--modifier":"pf-m-bottom"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},usePartial:!0,useData:!0})},1272:function(e,o){e.exports='{{#> popover popover--modifier="pf-m-left" popover--attribute=\'aria-labelledby="popover-left-header" aria-describedby="popover-left-body"\'}}\n  {{#> popover-content}}\n    {{#> popover-header}}\n      {{#> popover-header-title popover-header-title--attribute=\'id="popover-left-header"\'}}\n        Popover Header\n      {{/popover-header-title}}\n    {{/popover-header}}\n    {{#> popover-body popover-body--attribute=\'id="popover-left-body"\'}}\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n    {{/popover-body}}\n  {{/popover-content}}\n{{/popover}}\n'},778:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(139),o,{name:"popover-content",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},2:function(e,o,r,a,n){var p;return(null!=(p=e.invokePartial(t(165),o,{name:"popover-header",fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")+(null!=(p=e.invokePartial(t(138),o,{name:"popover-body",hash:{"popover-body--attribute":'id="popover-left-body"'},fn:e.program(6,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")},3:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(164),o,{name:"popover-header-title",hash:{"popover-header-title--attribute":'id="popover-left-header"'},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},4:function(e,o,t,r,a){return"        Popover Header\n"},6:function(e,o,t,r,a){return"      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n"},compiler:[7,">= 4.0.0"],main:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(140),o,{name:"popover",hash:{"popover--attribute":'aria-labelledby="popover-left-header" aria-describedby="popover-left-body"',"popover--modifier":"pf-m-left"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},usePartial:!0,useData:!0})},779:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(139),o,{name:"popover-content",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},2:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(138),o,{name:"popover-body",hash:{"popover-body--attribute":'id="popover-no-header-body"'},fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},3:function(e,o,t,r,a){return"      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n"},compiler:[7,">= 4.0.0"],main:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(140),o,{name:"popover",hash:{"popover--attribute":'aria-label="Popover with no header example" aria-describedby="popover-no-header-body"',"popover--modifier":"pf-m-right"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},usePartial:!0,useData:!0})},1273:function(e,o){e.exports='{{#> popover popover--modifier="pf-m-right" popover--attribute=\'aria-label="Popover with no header example" aria-describedby="popover-no-header-body"\'}}\n  {{#> popover-content}}\n    {{#> popover-body popover-body--attribute=\'id="popover-no-header-body"\'}}\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n    {{/popover-body}}\n  {{/popover-content}}\n{{/popover}}\n'},1274:function(e,o){e.exports='{{#> popover popover--modifier="pf-m-right" popover--attribute=\'aria-labelledby="popover-right-header" aria-describedby="popover-right-body"\'}}\n  {{#> popover-content}}\n    {{#> popover-header}}\n      {{#> popover-header-title popover-header-title--attribute=\'id="popover-right-header"\'}}\n        Popover Header\n      {{/popover-header-title}}\n    {{/popover-header}}\n    {{#> popover-body popover-body--attribute=\'id="popover-right-body"\'}}\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n    {{/popover-body}}\n  {{/popover-content}}\n{{/popover}}\n'},780:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(139),o,{name:"popover-content",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},2:function(e,o,r,a,n){var p;return(null!=(p=e.invokePartial(t(165),o,{name:"popover-header",fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")+(null!=(p=e.invokePartial(t(138),o,{name:"popover-body",hash:{"popover-body--attribute":'id="popover-right-body"'},fn:e.program(6,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")},3:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(164),o,{name:"popover-header-title",hash:{"popover-header-title--attribute":'id="popover-right-header"'},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},4:function(e,o,t,r,a){return"        Popover Header\n"},6:function(e,o,t,r,a){return"      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n"},compiler:[7,">= 4.0.0"],main:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(140),o,{name:"popover",hash:{"popover--attribute":'aria-labelledby="popover-right-header" aria-describedby="popover-right-body"',"popover--modifier":"pf-m-right"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},usePartial:!0,useData:!0})},781:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(139),o,{name:"popover-content",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},2:function(e,o,r,a,n){var p;return(null!=(p=e.invokePartial(t(165),o,{name:"popover-header",fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")+(null!=(p=e.invokePartial(t(138),o,{name:"popover-body",hash:{"popover-body--attribute":'id="popover-top-body"'},fn:e.program(6,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")},3:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(164),o,{name:"popover-header-title",hash:{"popover-header-title--attribute":'id="popover-top-header"'},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},4:function(e,o,t,r,a){return"        Popover Header\n"},6:function(e,o,t,r,a){return"      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n"},compiler:[7,">= 4.0.0"],main:function(e,o,r,a,n){var p;return null!=(p=e.invokePartial(t(140),o,{name:"popover",hash:{"popover--attribute":'aria-labelledby="popover-top-header" aria-describedby="popover-top-body"',"popover--modifier":"pf-m-top"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:""},usePartial:!0,useData:!0})},1275:function(e,o){e.exports='{{#> popover popover--modifier="pf-m-top" popover--attribute=\'aria-labelledby="popover-top-header" aria-describedby="popover-top-body"\'}}\n  {{#> popover-content}}\n    {{#> popover-header}}\n      {{#> popover-header-title popover-header-title--attribute=\'id="popover-top-header"\'}}\n        Popover Header\n      {{/popover-header-title}}\n    {{/popover-header}}\n    {{#> popover-body popover-body--attribute=\'id="popover-top-body"\'}}\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n    {{/popover-body}}\n  {{/popover-content}}\n{{/popover}}\n'},782:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,t,r,a){var n;return" "+e.escapeExpression((n=null!=(n=t["popover-arrow--modifier"]||(null!=o?o["popover-arrow--modifier"]:o))?n:t.helperMissing,"function"==typeof n?n.call(null!=o?o:e.nullContext||{},{name:"popover-arrow--modifier",hash:{},data:a}):n))},3:function(e,o,t,r,a){var n,p;return"    "+(null!=(p=null!=(p=t["popover-arrow--attribute"]||(null!=o?o["popover-arrow--attribute"]:o))?p:t.helperMissing,n="function"==typeof p?p.call(null!=o?o:e.nullContext||{},{name:"popover-arrow--attribute",hash:{},data:a}):p)?n:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(e,o,t,r,a){var n,p=null!=o?o:e.nullContext||{};return'<div class="pf-c-popover__arrow'+(null!=(n=t.if.call(p,null!=o?o["popover-arrow--modifier"]:o,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+'"\n'+(null!=(n=t.if.call(p,null!=o?o["popover-arrow--attribute"]:o,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?n:"")+">\n"+(null!=(n=e.invokePartial(r["@partial-block"],o,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:r,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},138:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,t,r,a){var n;return" "+e.escapeExpression((n=null!=(n=t["popover-body--modifier"]||(null!=o?o["popover-body--modifier"]:o))?n:t.helperMissing,"function"==typeof n?n.call(null!=o?o:e.nullContext||{},{name:"popover-body--modifier",hash:{},data:a}):n))},3:function(e,o,t,r,a){var n,p;return"    "+(null!=(p=null!=(p=t["popover-body--attribute"]||(null!=o?o["popover-body--attribute"]:o))?p:t.helperMissing,n="function"==typeof p?p.call(null!=o?o:e.nullContext||{},{name:"popover-body--attribute",hash:{},data:a}):p)?n:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(e,o,t,r,a){var n,p=null!=o?o:e.nullContext||{};return'<div class="pf-c-popover__body'+(null!=(n=t.if.call(p,null!=o?o["popover-body--modifier"]:o,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+'"\n'+(null!=(n=t.if.call(p,null!=o?o["popover-body--attribute"]:o,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?n:"")+">\n"+(null!=(n=e.invokePartial(r["@partial-block"],o,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:r,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},783:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,t,r,a){return" "+e.escapeExpression(e.lambda(null!=o?o["popover-close--modifier"]:o,o))},3:function(e,o,t,r,a){var n;return"    "+(null!=(n=e.lambda(null!=o?o["popover-close--attribute"]:o,o))?n:"")+" \n  "},5:function(e,o,t,r,a){return'    <i class="fas fa-times"></i>\n'},compiler:[7,">= 4.0.0"],main:function(e,o,r,a,n){var p,i=null!=o?o:e.nullContext||{};return'<div class="pf-c-popover__close'+(null!=(p=r.if.call(i,null!=o?o["popover-close--modifier"]:o,{name:"if",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?p:"")+'"\n'+(null!=(p=r.if.call(i,null!=o?o["popover-close--attribute"]:o,{name:"if",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n}))?p:"")+">\n"+(null!=(p=e.invokePartial(t(3),o,{name:"button",hash:{"button--attribute":'aria-label="Close"',"button--modifier":"pf-m-plain"},fn:e.program(5,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")+"</div>\n"},usePartial:!0,useData:!0})},139:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,t,r,a){return" "+e.escapeExpression(e.lambda(null!=o?o["popover-content--modifier"]:o,o))},3:function(e,o,t,r,a){var n;return"    "+(null!=(n=e.lambda(null!=o?o["popover-content--attribute"]:o,o))?n:"")+" \n  "},5:function(e,o,t,r,a){return""},compiler:[7,">= 4.0.0"],main:function(e,o,r,a,n){var p,i=null!=o?o:e.nullContext||{};return'<div class="pf-c-popover__content'+(null!=(p=r.if.call(i,null!=o?o["popover-content--modifier"]:o,{name:"if",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?p:"")+'"\n'+(null!=(p=r.if.call(i,null!=o?o["popover-content--attribute"]:o,{name:"if",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n}))?p:"")+">\n"+(null!=(p=e.invokePartial(t(783),o,{name:"popover-close",fn:e.program(5,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")+(null!=(p=e.invokePartial(a["@partial-block"],o,{name:"@partial-block",data:n,indent:"  ",helpers:r,partials:a,decorators:e.decorators}))?p:"")+"</div>\n"},usePartial:!0,useData:!0})},164:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,t,r,a){var n;return" "+e.escapeExpression((n=null!=(n=t["popover-header-title--modifier"]||(null!=o?o["popover-header-title--modifier"]:o))?n:t.helperMissing,"function"==typeof n?n.call(null!=o?o:e.nullContext||{},{name:"popover-header-title--modifier",hash:{},data:a}):n))},3:function(e,o,t,r,a){var n,p;return"    "+(null!=(p=null!=(p=t["popover-header-title--attribute"]||(null!=o?o["popover-header-title--attribute"]:o))?p:t.helperMissing,n="function"==typeof p?p.call(null!=o?o:e.nullContext||{},{name:"popover-header-title--attribute",hash:{},data:a}):p)?n:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(e,o,t,r,a){var n,p=null!=o?o:e.nullContext||{};return'<h1 class="pf-c-popover__header-title'+(null!=(n=t.if.call(p,null!=o?o["popover-header-title--modifier"]:o,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+'"\n'+(null!=(n=t.if.call(p,null!=o?o["popover-header-title--attribute"]:o,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?n:"")+">\n"+(null!=(n=e.invokePartial(r["@partial-block"],o,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:r,decorators:e.decorators}))?n:"")+"</h1>\n"},usePartial:!0,useData:!0})},165:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,t,r,a){var n;return" "+e.escapeExpression((n=null!=(n=t["popover-header--modifier"]||(null!=o?o["popover-header--modifier"]:o))?n:t.helperMissing,"function"==typeof n?n.call(null!=o?o:e.nullContext||{},{name:"popover-header--modifier",hash:{},data:a}):n))},3:function(e,o,t,r,a){var n,p;return"    "+(null!=(p=null!=(p=t["popover-header--attribute"]||(null!=o?o["popover-header--attribute"]:o))?p:t.helperMissing,n="function"==typeof p?p.call(null!=o?o:e.nullContext||{},{name:"popover-header--attribute",hash:{},data:a}):p)?n:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(e,o,t,r,a){var n,p=null!=o?o:e.nullContext||{};return'<header class="pf-c-popover__header'+(null!=(n=t.if.call(p,null!=o?o["popover-header--modifier"]:o,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+'"\n'+(null!=(n=t.if.call(p,null!=o?o["popover-header--attribute"]:o,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?n:"")+">\n"+(null!=(n=e.invokePartial(r["@partial-block"],o,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:r,decorators:e.decorators}))?n:"")+"</header>\n"},usePartial:!0,useData:!0})},140:function(e,o,t){var r=t(1);e.exports=(r.default||r).template({1:function(e,o,t,r,a){return" "+e.escapeExpression(e.lambda(null!=o?o["popover--modifier"]:o,o))},3:function(e,o,t,r,a){var n;return"    "+(null!=(n=e.lambda(null!=o?o["popover--attribute"]:o,o))?n:"")+" \n  "},5:function(e,o,t,r,a){return""},compiler:[7,">= 4.0.0"],main:function(e,o,r,a,n){var p,i=null!=o?o:e.nullContext||{};return'<div class="pf-c-popover'+(null!=(p=r.if.call(i,null!=o?o["popover--modifier"]:o,{name:"if",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?p:"")+'"\n  role="dialog"\n  aria-modal="true"\n'+(null!=(p=r.if.call(i,null!=o?o["popover--attribute"]:o,{name:"if",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n}))?p:"")+">\n"+(null!=(p=e.invokePartial(t(782),o,{name:"popover-arrow",fn:e.program(5,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?p:"")+(null!=(p=e.invokePartial(a["@partial-block"],o,{name:"@partial-block",data:n,indent:"  ",helpers:r,partials:a,decorators:e.decorators}))?p:"")+"</div>\n"},usePartial:!0,useData:!0})},1167:function(e,o){}});
//# sourceMappingURL=component---src-patternfly-components-popover-examples-index-js-fc787bc16164e4f30e01.js.map