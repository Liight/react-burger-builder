(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"k",function(){return c}),n.d(t,"l",function(){return u}),n.d(t,"j",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"g",function(){return h}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return b}),n.d(t,"o",function(){return _});var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAIL",m="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",_="SET_AUTH_REDIRECT_PATH"},function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n(20),a=function(e,t){return Object(r.a)({},e,t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,function(e,t,n){"use strict";var r=n(2),a=n(17),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get(a.a.defaults.baseURL+"ingredients.json").then(function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))}).catch(function(t){e({type:r.f})})}},u=n(20),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then(function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))}).catch(function(e){n(function(e){return{type:r.j,error:e}}(e))})}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then(function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))}).catch(function(e){})}},p=n(30),h=n.n(p),m=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout(function(){t(f())},1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0};console.log("isSignup value after being passed into auth",n);var i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAucKkt6q6rABAh3s4W5eKOgc__dYAYGdc";n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAucKkt6q6rABAh3s4W5eKOgc__dYAYGdc"),h.a.post(i,o).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(m(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))}).catch(function(e){var t;console.log(e),a((t=e.response.data.error,{type:r.b,error:t}))})}},_=function(e){return{type:r.o,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n>new Date){var r=localStorage.getItem("userId");e(m(t,r));var a=(n.getTime()-(new Date).getTime())/1e3;e(g(a))}else e(f())}else e(f())}};n.d(t,"a",function(){return o}),n.d(t,"i",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return f}),n.d(t,"j",function(){return _}),n.d(t,"c",function(){return E})},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__2z9NQ",BreadTop:"BurgerIngredient__BreadTop__2Pkwe",Seeds1:"BurgerIngredient__Seeds1__2k2x7",Seeds2:"BurgerIngredient__Seeds2__9Mret",Meat:"BurgerIngredient__Meat__1LdrR",Cheese:"BurgerIngredient__Cheese__1eqwP",Salad:"BurgerIngredient__Salad__2WBlr",Bacon:"BurgerIngredient__Bacon__2RZZH"}},function(e,t,n){"use strict";var r=n(30),a=n.n(r).a.create({baseURL:"https://burgerbuilder-d1b0b.firebaseio.com/"});t.a=a},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__3wvlM",Open:"SideDrawer__Open__3xsf8",Close:"SideDrawer__Close__2S6c7",Logo:"SideDrawer__Logo__10IHv"}},,function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},,,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(57),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(9),u=n(0),l=n.n(u),s=n(60),d=n.n(s),p=n(12),h=n(28),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(h.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=m},,function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2hkfg",Logo:"Toolbar__Logo__24rue",DesktopOnly:"Toolbar__DesktopOnly__15Sc_"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(38),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__3YSjr",active:"NavigationItem__active__2GQz1"}},function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},function(e,t,n){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(61),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(9),u=n(0),l=n.n(u),s=n(29),d=n(12);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorComfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorComfirmedHandler},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,,function(e,t,n){"use strict";var r=n(63),a=n(0),o=n.n(a),i=n(58),c=n.n(i),u=n(5),l=n(6),s=n(8),d=n(7),p=n(9),h=n(16),m=n.n(h),f=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:m.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:m.a.BreadTop},o.a.createElement("div",{className:m.a.Seeds1}),o.a.createElement("div",{className:m.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:m.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:m.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:m.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:m.a.Bacon});break;default:e=null}return e}}]),t}(a.Component),g=n(127);t.a=Object(g.a)(function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return o.a.createElement(f,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(f,{type:"bread-top"}),t,o.a.createElement(f,{type:"bread-bottom"}))})},,,function(e,t,n){e.exports={Content:"Layout__Content__3KSp3"}},function(e,t,n){e.exports={Logo:"Logo__Logo__2A07e"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems__3HY9i"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__1eThf"}},function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop__eeZpu"}},function(e,t,n){e.exports={Burger:"Burger__Burger__2h2kL"}},,function(e,t,n){e.exports={Modal:"Modal__Modal__cd320"}},function(e,t,n){e.exports={Loader:"Spinner__Loader__3dgUo",load2:"Spinner__load2__1sg5x"}},,,function(e,t,n){e.exports=n(111)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(50),i=n.n(o),c=n(126),u=n(14),l=n(19),s=(n(73),n(5)),d=n(6),p=n(8),h=n(7),m=n(9),f=n(128),g=n(80),b=n(125),_=n(127),E=function(e){return function(t){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(m.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},v=n(12),O=n(52),j=n.n(O),k=n(31),y=n.n(k),S=n(53),C=n.n(S),w=n(54),I=n.n(w),B=function(e){return a.a.createElement("div",{className:C.a.Logo},a.a.createElement("img",{src:I.a,alt:"T-Burger"}))},A=n(55),N=n.n(A),T=n(129),D=n(36),R=n.n(D),L=function(e){return a.a.createElement("li",{className:R.a.NavigationItem},a.a.createElement(T.a,{to:e.link,exact:e.exact,activeClassName:R.a.active},e.children))},x=function(e){return a.a.createElement("ul",{className:N.a.NavigationItems},a.a.createElement(L,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(L,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(L,{link:"/logout"},"Logout"):a.a.createElement(L,{link:"/auth"},"Authenticate"))},H=n(56),P=n.n(H),U=function(e){return a.a.createElement("div",{className:P.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},M=function(e){return a.a.createElement("header",{className:y.a.Toolbar},a.a.createElement(U,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:y.a.Logo},a.a.createElement(B,null)),a.a.createElement("nav",{className:y.a.DesktopOnly},a.a.createElement(x,{isAuthenticated:e.isAuth})))},z=n(21),G=n.n(z),F=n(28),Y=function(e){var t=[G.a.SideDrawer,G.a.Close];return e.open&&(t=[G.a.SideDrawer,G.a.Open]),a.a.createElement(v.a,null,a.a.createElement(F.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:G.a.Logo},a.a.createElement(B,null)),a.a.createElement("nav",null,a.a.createElement(x,{isAuthenticated:e.isAuth}))))},q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement(v.a,null,a.a.createElement(M,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(Y,{isAuth:this.props.isAuthenticated,closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer}),a.a.createElement("main",{className:j.a.Content},this.props.children))}}]),t}(r.Component),W=Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(q),K=n(20),Q=n(49),$=n(37),V=n.n($),Z=n(23),J=n.n(Z),X=function(e){return a.a.createElement("div",{className:J.a.BuildControl},a.a.createElement("div",{className:J.a.Label},e.label),a.a.createElement("button",{className:J.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:J.a.More,onClick:e.added},"More"))},ee=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],te=function(e){return a.a.createElement("div",{className:V.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),ee.map(function(t){return a.a.createElement(X,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:V.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},ne=n(29),re=n(32),ae=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return a.a.createElement(v.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(re.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(re.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),oe=n(17),ie=n(39),ce=n(40),ue=n(15),le=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinuedHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0}},{key:"render",value:function(){var e=Object(K.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(ie.a,null);return this.props.ings&&(r=a.a.createElement(v.a,null,a.a.createElement(Q.a,{ingredients:this.props.ings}),a.a.createElement(te,{isAuth:this.props.isAuthenticated,ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,price:this.props.price})),n=a.a.createElement(ae,{ingredients:this.props.ings,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinuedHandler,price:this.props.price})),a.a.createElement(v.a,null,a.a.createElement(ne.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),se=Object(u.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(ue.a(t))},onIngredientRemoved:function(t){return e(ue.i(t))},onInitIngredients:function(){return e(ue.e())},onInitPurchase:function(){return e(ue.h())},onSetAuthRedirectPath:function(t){return e(ue.j(t))}}})(Object(ce.a)(le,oe.a)),de=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(b.a,{to:"/"})}}]),t}(r.Component),pe=Object(u.b)(null,function(e){return{onLogout:function(){return e(ue.f())}}})(de),he=E(function(){return n.e(1).then(n.bind(null,124))}),me=E(function(){return n.e(2).then(n.bind(null,130))}),fe=E(function(){return n.e(3).then(n.bind(null,123))}),ge=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(f.a,null,a.a.createElement(g.a,{path:"/auth",component:fe}),a.a.createElement(g.a,{path:"/",exact:!0,component:se}),a.a.createElement(b.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(f.a,null,a.a.createElement(g.a,{path:"/checkout",component:he}),a.a.createElement(g.a,{path:"/orders",component:me}),a.a.createElement(g.a,{path:"/logout",component:pe}),a.a.createElement(g.a,{path:"/auth",component:fe}),a.a.createElement(g.a,{path:"/",exact:!0,component:se}),a.a.createElement(b.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(W,null,e))}}]),t}(r.Component),be=Object(_.a)(Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(ue.c())}}})(ge));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=n(22),Ee=n(2),ve=n(3),Oe={ingredients:null,totalPrice:4,error:!1,building:!1},je={salad:.5,cheese:.4,meat:1.3,bacon:.7},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee.a:return function(e,t){var n=Object(_e.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(ve.b)(e.ingredients,n),totalPrice:e.totalPrice+je[t.ingredientName],building:!0};return Object(ve.b)(e,r)}(e,t);case Ee.n:return function(e,t){var n=Object(_e.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(ve.b)(e.ingredients,n),totalPrice:e.totalPrice-je[t.ingredientName],building:!0};return Object(ve.b)(e,r)}(e,t);case Ee.p:return function(e,t){return Object(ve.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})}(e,t);case Ee.f:return function(e,t){return Object(ve.b)(e,{error:!0})}(e);default:return e}},ye={orders:[],loading:!1,purchased:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee.m:return function(e,t){return Object(ve.b)(e,{purchased:!1})}(e);case Ee.k:return function(e,t){return Object(ve.b)(e,{loading:!0})}(e);case Ee.l:return function(e,t){var n=Object(ve.b)(t.orderData,{id:t.orderId});return Object(ve.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})}(e,t);case Ee.j:return function(e,t){return Object(ve.b)(e,{loading:!1})}(e);case Ee.h:return function(e,t){return Object(ve.b)(e,{loading:!0})}(e);case Ee.i:return function(e,t){return Object(ve.b)(e,{orders:t.orders,loading:!1})}(e,t);case Ee.g:return function(e,t){return Object(ve.b)(e,{loading:!1})}(e);default:return e}},Ce={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee.d:return function(e,t){return Object(ve.b)(e,{error:null,loading:!0})}(e);case Ee.e:return function(e,t){return Object(ve.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case Ee.b:return function(e,t){return Object(ve.b)(e,{error:t.error,loading:!1})}(e,t);case Ee.c:return function(e,t){return Object(ve.b)(e,{token:null,userId:null})}(e);case Ee.o:return function(e,t){return Object(ve.b)(e,{authRedirectPath:t.path})}(e,t);default:return e}},Ie=n(62),Be=l.d,Ae=Object(l.c)({burgerBuilder:ke,order:Se,auth:we}),Ne=Object(l.e)(Ae,Be(Object(l.a)(Ie.a))),Te=a.a.createElement(u.a,{store:Ne},a.a.createElement(c.a,{baseUrl:"/BurgerBuilder"},a.a.createElement(be,null)));i.a.render(Te,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[64,5,4]]]);
//# sourceMappingURL=main.2ce2cf66.chunk.js.map