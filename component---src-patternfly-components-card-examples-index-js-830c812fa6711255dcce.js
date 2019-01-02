(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{143:function(r,a,e){"use strict";e.r(a),e.d(a,"Docs",function(){return _});var n=e(0),t=e.n(n),o=e(202),d=e(201),c=e(493),i=e.n(c),s=e(494),l=e.n(s),p=e(495),u=e.n(p),f=e(496),h=e.n(f),v=e(497),m=e.n(v),b=e(498),g=e.n(b),y=e(499),P=e.n(y),k=e(500),w=e.n(k),C=e(501),x=e.n(C),_=(e(502),m.a);a.default=function(){var r=g()(),a=P()(),e=w()(),n=x()();return t.a.createElement(o.a,{docs:_,heading:"Card"},t.a.createElement(d.a,{heading:"Card",handlebars:i.a},r),t.a.createElement(d.a,{heading:"Card with no footer",handlebars:l.a},a),t.a.createElement(d.a,{heading:"Card with no header",handlebars:u.a},e),t.a.createElement(d.a,{heading:"Card with only a content section",handlebars:h.a},n))}},493:function(r,a){r.exports="{{#> card}}\n  {{#> card-header}}\n    Header\n  {{/card-header}}\n  {{#> card-body}}\n    Body\n  {{/card-body}}\n  {{#> card-footer}}\n    Footer\n  {{/card-footer}}\n{{/card}}\n"},494:function(r,a){r.exports="{{#> card}}\n  {{#> card-header}}\n    Header\n  {{/card-header}}\n  {{#> card-body}}\n    This card has no footer\n  {{/card-body}}\n{{/card}}\n"},495:function(r,a){r.exports="{{#> card}}\n  {{#> card-body}}\n    This card has no header\n  {{/card-body}}\n  {{#> card-footer}}\n    Footer\n  {{/card-footer}}\n{{/card}}\n"},496:function(r,a){r.exports="{{#> card}}\n  {{#> card-body}}\n    Body\n  {{/card-body}}\n{{/card}}\n\n"},497:function(r,a){r.exports='<h2 id="overview">Overview</h2>\n<p>A card is a generic rectangular container that can be used to build other components. A card can have three optional sections: header, body, and footer.</p>\n<h2 id="usage">Usage</h2>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Applied</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.pf-c-card</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates a card containing content.</td>\n</tr>\n<tr>\n<td><code>.pf-c-card__header</code></td>\n<td><code>.pf-c-card</code></td>\n<td>Creates the header of a card.</td>\n</tr>\n<tr>\n<td><code>.pf-c-card__body</code></td>\n<td><code>.pf-c-card</code></td>\n<td>Creates the body of a card.</td>\n</tr>\n<tr>\n<td><code>.pf-c-card__footer</code></td>\n<td><code>.pf-c-card</code></td>\n<td>Creates the footer of a card.</td>\n</tr>\n</tbody>\n</table>\n'},498:function(r,a,e){var n=e(196);r.exports=(n.default||n).template({1:function(r,a,n,t,o){var d;return(null!=(d=r.invokePartial(e(353),a,{name:"card-header",fn:r.program(2,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:"")+(null!=(d=r.invokePartial(e(288),a,{name:"card-body",fn:r.program(4,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:"")+(null!=(d=r.invokePartial(e(354),a,{name:"card-footer",fn:r.program(6,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:"")},2:function(r,a,e,n,t){return"    Header\n"},4:function(r,a,e,n,t){return"    Body\n"},6:function(r,a,e,n,t){return"    Footer\n"},compiler:[7,">= 4.0.0"],main:function(r,a,n,t,o){var d;return null!=(d=r.invokePartial(e(289),a,{name:"card",fn:r.program(1,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:""},usePartial:!0,useData:!0})},499:function(r,a,e){var n=e(196);r.exports=(n.default||n).template({1:function(r,a,n,t,o){var d;return(null!=(d=r.invokePartial(e(353),a,{name:"card-header",fn:r.program(2,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:"")+(null!=(d=r.invokePartial(e(288),a,{name:"card-body",fn:r.program(4,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:"")},2:function(r,a,e,n,t){return"    Header\n"},4:function(r,a,e,n,t){return"    This card has no footer\n"},compiler:[7,">= 4.0.0"],main:function(r,a,n,t,o){var d;return null!=(d=r.invokePartial(e(289),a,{name:"card",fn:r.program(1,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:""},usePartial:!0,useData:!0})},500:function(r,a,e){var n=e(196);r.exports=(n.default||n).template({1:function(r,a,n,t,o){var d;return(null!=(d=r.invokePartial(e(288),a,{name:"card-body",fn:r.program(2,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:"")+(null!=(d=r.invokePartial(e(354),a,{name:"card-footer",fn:r.program(4,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:"")},2:function(r,a,e,n,t){return"    This card has no header\n"},4:function(r,a,e,n,t){return"    Footer\n"},compiler:[7,">= 4.0.0"],main:function(r,a,n,t,o){var d;return null!=(d=r.invokePartial(e(289),a,{name:"card",fn:r.program(1,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:""},usePartial:!0,useData:!0})},501:function(r,a,e){var n=e(196);r.exports=(n.default||n).template({1:function(r,a,n,t,o){var d;return null!=(d=r.invokePartial(e(288),a,{name:"card-body",fn:r.program(2,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:""},2:function(r,a,e,n,t){return"    Body\n"},compiler:[7,">= 4.0.0"],main:function(r,a,n,t,o){var d;return(null!=(d=r.invokePartial(e(289),a,{name:"card",fn:r.program(1,o,0),inverse:r.noop,data:o,helpers:n,partials:t,decorators:r.decorators}))?d:"")+"\n"},usePartial:!0,useData:!0})},502:function(r,a,e){}}]);
//# sourceMappingURL=component---src-patternfly-components-card-examples-index-js-830c812fa6711255dcce.js.map