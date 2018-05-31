webpackJsonp([0xe4f0117a7613],{438:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>Split layouts are meant for use in positioning child elements horizontally, with one of the children being used as primary content area, and the other(s) being used as a secondary content area.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-split</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initiates the split layout</td> </tr> <tr> <td><code>.pf-l-split__primary</code></td> <td><code>&lt;div&gt;</code></td> <td>Specificies the primary child of the layout, which expands vertically when needed. The primary child will expand horizontally to fill all space not needed by the secondary children. If the primary is not explicitly set, the second child will act as the primary child.</td> </tr> <tr> <td><code>.pf-l-split__secondary</code></td> <td><code>&lt;div&gt;</code></td> <td>Specifies a secondary child of the layout, which accommodates to its content. A split can have one or more secondary children. If secondary children are not explicitly set, all children but the second will act as secondary children.</td> </tr> <tr> <td><code>.pf-m-gutter</code></td> <td><code>.pf-l-split</code></td> <td>Adds space between children</td> </tr> </tbody> </table> "},180:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var n=a(3),o=r(n),i=a(9),l=r(i),s=a(10),d=r(s),c=a(407),p=r(c),u=a(405),f=r(u),m=a(406),h=r(m),v=a(438),y=r(v);a(508);var g=t.Docs=y.default;t.default=function(){var e=(0,p.default)(),t=(0,f.default)(),a=(0,h.default)();return o.default.createElement(l.default,{docs:g,className:"is-layout-page"},o.default.createElement(d.default,{heading:"Split Example"},e),o.default.createElement(d.default,{heading:"Split Example with gutter"},t),o.default.createElement(d.default,{heading:"Split Example with no primary or secondary children specified"},a))}},405:function(e,t,a){var r=a(2);e.exports=(r.default||r).template({1:function(e,t,r,n,o){var i;return(null!=(i=e.invokePartial(a(18),t,{name:"split-item",hash:{classModifier:"pf-m-secondary"},fn:e.program(2,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:"")+"\n"+(null!=(i=e.invokePartial(a(18),t,{name:"split-item",hash:{classModifier:"pf-m-primary"},fn:e.program(4,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:"")+"\n"+(null!=(i=e.invokePartial(a(18),t,{name:"split-item",hash:{classModifier:"pf-m-secondary"},fn:e.program(2,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:"")},2:function(e,t,a,r,n){return"    secondary content\n"},4:function(e,t,a,r,n){return"    primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,n,o){var i;return null!=(i=e.invokePartial(a(101),t,{name:"split",hash:{modifierClass:"pf-m-gutter"},fn:e.program(1,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},406:function(e,t,a){var r=a(2);e.exports=(r.default||r).template({1:function(e,t,r,n,o){var i;return(null!=(i=e.invokePartial(a(18),t,{name:"split-item",fn:e.program(2,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:"")+"\n"+(null!=(i=e.invokePartial(a(18),t,{name:"split-item",fn:e.program(4,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:"")+"\n"+(null!=(i=e.invokePartial(a(18),t,{name:"split-item",fn:e.program(2,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:"")},2:function(e,t,a,r,n){return"    content\n"},4:function(e,t,a,r,n){return"    implicit primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,n,o){var i;return null!=(i=e.invokePartial(a(101),t,{name:"split",fn:e.program(1,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},407:function(e,t,a){var r=a(2);e.exports=(r.default||r).template({1:function(e,t,r,n,o){var i;return(null!=(i=e.invokePartial(a(18),t,{name:"split-item",hash:{classModifier:"pf-m-secondary"},fn:e.program(2,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:"")+"\n"+(null!=(i=e.invokePartial(a(18),t,{name:"split-item",hash:{classModifier:"pf-m-primary"},fn:e.program(4,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:"")+"\n"+(null!=(i=e.invokePartial(a(18),t,{name:"split-item",hash:{classModifier:"pf-m-secondary"},fn:e.program(2,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:"")},2:function(e,t,a,r,n){return"    secondary content\n"},4:function(e,t,a,r,n){return"    primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,n,o){var i;return null!=(i=e.invokePartial(a(101),t,{name:"split",fn:e.program(1,o,0),inverse:e.noop,data:o,helpers:r,partials:n,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},18:function(e,t,a){var r=a(2);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var o,i;return'<div class="pf-l-split__item '+e.escapeExpression((i=null!=(i=a.classModifier||(null!=t?t.classModifier:t))?i:a.helperMissing,"function"==typeof i?i.call(null!=t?t:e.nullContext||{},{name:"classModifier",hash:{},data:n}):i))+'">\n'+(null!=(o=e.invokePartial(r["@partial-block"],t,{name:"@partial-block",data:n,indent:"  ",helpers:a,partials:r,decorators:e.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},101:function(e,t,a){var r=a(2);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var o,i;return'<div class="pf-l-split '+e.escapeExpression((i=null!=(i=a.modifierClass||(null!=t?t.modifierClass:t))?i:a.helperMissing,"function"==typeof i?i.call(null!=t?t:e.nullContext||{},{name:"modifierClass",hash:{},data:n}):i))+'">\n'+(null!=(o=e.invokePartial(r["@partial-block"],t,{name:"@partial-block",data:n,indent:"  ",helpers:a,partials:r,decorators:e.decorators}))?o:"")+"</div> "},usePartial:!0,useData:!0})},508:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-layouts-split-examples-index-js-451caafd96a9e8fe89e1.js.map