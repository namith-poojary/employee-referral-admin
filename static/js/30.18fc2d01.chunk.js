(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[30],{504:function(e,a,t){"use strict";var n=t(18),s=t(50),r=t(2),l=t.n(r),o=t(61),c=t.n(o),i=t(499),u=t.n(i),m=t(500),d=c.a.oneOfType([c.a.number,c.a.string]),f={tag:m.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,c=e.form,i=e.widths,d=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,t){var n=e[a];if(delete d[a],n){var s=!t;f.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var b=Object(m.m)(u()(a,r?"no-gutters":null,c?"form-row":"row",f),t);return l.a.createElement(o,Object(n.a)({},d,{className:b}))};p.propTypes=f,p.defaultProps=b,a.a=p},505:function(e,a,t){"use strict";var n=t(18),s=t(50),r=t(2),l=t.n(r),o=t(61),c=t.n(o),i=t(499),u=t.n(i),m=t(500),d=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),b={tag:m.q,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,n){var s=e[a];if(delete c[a],s||""===s){var r=!n;if(Object(m.k)(s)){var l,o=r?"-":"-"+a+"-",d=g(r,a,s.size);i.push(Object(m.m)(u()(((l={})[d]=s.size||""===s.size,l["order"+o+s.order]=s.order||0===s.order,l["offset"+o+s.offset]=s.offset||0===s.offset,l)),t))}else{var f=g(r,a,s);i.push(f)}}})),i.length||i.push("col");var d=Object(m.m)(u()(a,i),t);return l.a.createElement(o,Object(n.a)({},c,{className:d}))};h.propTypes=b,h.defaultProps=p,a.a=h},507:function(e,a,t){"use strict";var n=t(18),s=t(50),r=t(2),l=t.n(r),o=t(61),c=t.n(o),i=t(499),u=t.n(i),m=t(500),d={tag:m.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,c=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.m)(u()(a,"card",!!c&&"text-white",!!o&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return l.a.createElement(d,Object(n.a)({},b,{className:p,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},508:function(e,a,t){"use strict";var n=t(18),s=t(50),r=t(2),l=t.n(r),o=t(61),c=t.n(o),i=t(499),u=t.n(i),m=t(500),d={tag:m.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,o=e.tag,c=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.m)(u()(a,"card-body"),t);return l.a.createElement(o,Object(n.a)({},c,{className:i,ref:r}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},509:function(e,a,t){"use strict";var n=t(18),s=t(50),r=t(2),l=t.n(r),o=t(61),c=t.n(o),i=t(499),u=t.n(i),m=t(500),d={tag:m.q,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(s.a)(e,["className","cssModule","tag"]),c=Object(m.m)(u()(a,"card-header"),t);return l.a.createElement(r,Object(n.a)({},o,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},510:function(e,a,t){"use strict";var n=t(18),s=t(50),r=t(501),l=t(38),o=t(2),c=t.n(o),i=t(61),u=t.n(i),m=t(499),d=t.n(m),f=t(500),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,l=e.className,o=e.close,i=e.cssModule,u=e.color,m=e.outline,b=e.size,p=e.tag,g=e.innerRef,h=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&"undefined"===typeof h.children&&(h.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(m?"-outline":"")+"-"+u,v=Object(f.m)(d()(l,{close:o},o||"btn",o||j,!!b&&"btn-"+b,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===p&&(p="a");var N=o?"Close":null;return c.a.createElement(p,Object(n.a)({type:"button"===p&&h.onClick?"button":void 0},h,{className:v,ref:g,onClick:this.onClick,"aria-label":t||N}))},a}(c.a.Component);p.propTypes=b,p.defaultProps={color:"secondary",tag:"button"},a.a=p},819:function(e,a,t){"use strict";t.r(a);var n=t(154),s=t(155),r=t(157),l=t(156),o=t(158),c=t(2),i=t.n(c),u=t(504),m=t(505),d=t(507),f=t(509),b=t(508),p=t(18),g=t(50),h=t(61),j=t.n(h),v=t(499),N=t.n(v),E=t(500),O={tag:E.q,fluid:j.a.bool,className:j.a.string,cssModule:j.a.object},y=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=e.fluid,r=Object(g.a)(e,["className","cssModule","tag","fluid"]),l=Object(E.m)(N()(a,"jumbotron",!!s&&"jumbotron-fluid"),t);return i.a.createElement(n,Object(p.a)({},r,{className:l}))};y.propTypes=O,y.defaultProps={tag:"div"};var M=y,k=t(510),w=t(551),T=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Jumbotron"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/jumbotron/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(b.a,null,i.a.createElement(M,null,i.a.createElement("h1",{className:"display-3"},"Hello, world!"),i.a.createElement("p",{className:"lead"},"This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."),i.a.createElement("hr",{className:"my-2"}),i.a.createElement("p",null,"It uses utility classes for typgraphy and spacing to space content out within the larger container."),i.a.createElement("p",{className:"lead"},i.a.createElement(k.a,{color:"primary"},"Learn More")))))),i.a.createElement(m.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Jumbotron"),i.a.createElement("small",null," fluid")),i.a.createElement(b.a,null,i.a.createElement(M,{fluid:!0},i.a.createElement(w.a,{fluid:!0},i.a.createElement("h1",{className:"display-3"},"Fluid jumbotron"),i.a.createElement("p",{className:"lead"},"This is a modified jumbotron that occupies the entire horizontal space of its parent."))))))))}}]),a}(c.Component);a.default=T}}]);
//# sourceMappingURL=30.18fc2d01.chunk.js.map