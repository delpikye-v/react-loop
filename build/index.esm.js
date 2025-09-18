import{jsx as r,Fragment as n}from"react/jsx-runtime";import{execConditions as e}from"react-ifz";import o from"react";var i=function(r){var n=r.as,e=void 0===n?"div":n,i=r.propsTagAs,a=r.item;return o.createElement(e,i,a)},a=function(n){var o=n.as,a=void 0===o?"div":o,t=n.propsTagAs,s=n.condition,p=n.children,c=n.render,d=[],u=0;do{c?d.push(c(u)):p&&d.push(r(i,{item:p,as:a,propsTagAs:t},u)),u++}while(e(s));return d},t=function(n){var e=n.of,a=n.as,t=void 0===a?"div":a,s=n.keyName,p=n.propsTagAs,c=n.children,d=n.render;return r(o.Fragment,d?{children:e.map((function(r,n){return d(r,n)}))}:{children:e.map((function(n,e){return r(i,{item:c||(s?n[s]:n),as:t,propsTagAs:p},e)}))})};function s(e){var o=e.of,a=e.as,t=void 0===a?"div":a,s=e.propsTagAs,p=e.children,c=e.render;return r(n,{children:Array.from(o).map((function(n,e){var o=n[0],a=n[1];return c?c(a,o,e):r(i,{item:null!=p?p:a,as:t,propsTagAs:s},e)}))})}function p(e){var o=e.of,a=void 0===o?{}:o,t=e.as,s=void 0===t?"div":t,p=e.propsTagAs,c=e.children,d=e.render;return r(n,d?{children:Object.keys(a).map((function(r,n){return d(a[r],r,n)}))}:{children:Object.keys(a).map((function(n,e){return r(i,{item:null!=c?c:a[n],as:s,propsTagAs:p},e)}))})}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var c=function(){return c=Object.assign||function(r){for(var n,e=1,o=arguments.length;e<o;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i]);return r},c.apply(this,arguments)},d=function(n){var e=n.of,o=n.as,i=void 0===o?"div":o,a=n.propsTagAs,s=n.children,p=n.render;return r(t,c({of:Array.from(e),as:i,propsTagAs:a,render:p},{children:s}))},u=function(n){for(var o=n.as,a=void 0===o?"div":o,t=n.propsTagAs,s=n.condition,p=n.children,c=n.render,d=[],u=0;e(s);)c?d.push(c(u)):p&&d.push(r(i,{item:p,as:a,propsTagAs:t},u)),u++;return d};export{a as Do,a as DoLoop,t as For,t as ForEach,t as ForLoop,s as MapLoop,p as ObjectLoop,d as SetLoop,u as While,u as WhileLoop};
