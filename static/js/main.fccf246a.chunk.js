(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r,s=n(6),o=n.n(s),c=n(7),a=n(8),i=n(1),l=n.n(i),u=(n(13),n(14),n(4)),b=n.n(u),d=n(0),h=function(t){var e=t.goods;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})},f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.az="az",t.length="length",t.reverse="reverse",t.default=""}(r||(r={}));var g=function(){var t=l.a.useState([r.default,r.default]),e=Object(c.a)(t,2),n=e[0],s=e[1],o=function(t,e){var n=Object(a.a)(t);return e[0]===r.az&&n.sort((function(t,e){return t.localeCompare(e)})),e[0]===r.length&&n.sort((function(t,e){return t.length-e.length})),e[1]===r.reverse&&n.reverse(),n}(f,n),i=n[0]!==r.default||n[1]!==r.default;return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":n[0]!==r.az}),onClick:function(){return s([r.az,n[1]])},children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:b()("button is-success",{"is-light":n[0]!==r.length}),onClick:function(){return s([r.length,n[1]])},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:b()("button is-warning",{"is-light":n[1]!==r.reverse}),onClick:function(){return s(n[1]===r.reverse?[n[0],r.default]:[n[0],r.reverse])},children:"Reverse"}),i&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return s([r.default,r.default])},children:"Reset"})]}),Object(d.jsx)(h,{goods:o})]})};o.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fccf246a.chunk.js.map