(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(e,a,t){e.exports={ordersContainer:"Orders__ordersContainer__Rpzrp"}},161:function(e,a,t){"use strict";t.r(a);var n=t(6),r=t(7),i=t(9),o=t(8),s=t(10),c=t(0),d=t.n(c),p=t(19),u=(t(152),t(170)),l=(t(33),t(157)),m=t(3),b=t(11),g=t(35),h=(t(1),t(14)),f=t(24),x=t(21),v=d.a.forwardRef(function(e,a){var t=e.classes,n=e.className,r=e.component,i=void 0===r?"div":r,o=e.disableGutters,s=void 0!==o&&o,c=e.fixed,p=void 0!==c&&c,u=e.maxWidth,l=void 0===u?"lg":u,g=Object(b.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return d.a.createElement(i,Object(m.a)({className:Object(h.a)(t.root,n,p&&t.fixed,s&&t.disableGutters,!1!==l&&t["maxWidth".concat(Object(x.a)(String(l)))]),ref:a},g))}),k=Object(f.a)(function(e){var a;return{root:(a={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},Object(g.a)(a,e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(g.a)(a,e.breakpoints.up("md"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),a),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce(function(a,t){var n=e.breakpoints.values[t];return 0!==n&&(a[e.breakpoints.up(t)]={maxWidth:n}),a},{}),maxWidthXs:Object(g.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(g.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(g.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(g.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(g.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}},{name:"MuiContainer"})(v),O=d.a.forwardRef(function(e,a){var t=e.classes,n=e.className,r=e.component,i=void 0===r?"div":r,o=e.square,s=void 0!==o&&o,c=e.elevation,p=void 0===c?1:c,u=e.variant,l=void 0===u?"elevation":u,g=Object(b.a)(e,["classes","className","component","square","elevation","variant"]);return d.a.createElement(i,Object(m.a)({className:Object(h.a)(t.root,n,"outlined"===l?t.outlined:t["elevation".concat(p)],!s&&t.rounded),ref:a},g))}),j=Object(f.a)(function(e){var a={};return e.shadows.forEach(function(e,t){a["elevation".concat(t)]={boxShadow:e}}),Object(m.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},a)},{name:"MuiPaper"})(O),y=Object(u.a)(function(){return{container:{backgroundColor:"#fff",height:"",width:"100%",padding:0,marginTop:0},paper:{marginTop:5,marginBot:5,display:"flex",padding:10,flexDirection:"column",alignItems:"flex-start",justifyContent:"center"},typography:{display:"block",lineHeight:2,fontSize:"1.4em"}}})(function(e){var a=[],t=e.classes;for(var n in e.ingredients)a.push({name:n,amount:e.ingredients[n]});var r=a.map(function(e){return d.a.createElement("span",{style:{textTransform:"capitalize",display:"inline block",margin:"0 8px 3px 0px",padding:"0px"},key:e.name},e.name," (",e.amount,")")});return d.a.createElement(k,{className:t.container},d.a.createElement(j,{className:t.paper},d.a.createElement(l.a,{className:t.typography},"Ingredients: ",r),d.a.createElement(l.a,{className:t.typography},"Price: ",d.a.createElement("strong",null,"NZD ",Number.parseFloat(e.price).toFixed(2)))))}),N=t(25),w=t(56),E=t(20),W=t(55),R=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=d.a.createElement(W.a,null),a=this.props.classes;return this.props.loading||(e=this.props.orders.map(function(e){return d.a.createElement(y,{key:e.id,ingredients:e.ingredients,price:e.price})})),d.a.createElement("div",{className:"ordersContainer"},d.a.createElement(k,{className:a.container},d.a.createElement(l.a,{className:a.typography,variant:"h4"},"Your previous burger orders"),e))}}]),a}(c.Component);a.default=Object(u.a)(function(){return{container:{backgroundColor:"#fff",maxHeight:"85vh",width:"100%",padding:5,marginTop:0,border:"1 px solid #f5f5f5"},typography:{textAlign:"center"}}})(Object(p.b)(function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onFetchOrders:function(a,t){return e(E.d(a,t))}}})(Object(w.a)(R,N.a)))}}]);
//# sourceMappingURL=2.486fd9ba.chunk.js.map