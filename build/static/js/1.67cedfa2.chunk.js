(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(143),l=a.n(o);t.a=function(e){var t=null,a=[l.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(l.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textselectarea":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:l.a.Input},e.elementConfig,{value:e.value,onChange:e.changed}))}var n=null;return e.invalid&&e.touched&&(n=r.a.createElement("p",{className:l.a.ValidationError},"Please enter a valid ",e.valueType)),r.a.createElement("div",{className:l.a.Input},r.a.createElement("label",{className:l.a.label},e.label),t,n)}},143:function(e,t,a){e.exports={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d",ValidationError:"Input__ValidationError__ukId8"}},146:function(e,t,a){e.exports={checkoutContainer:"Checkout__checkoutContainer__1bPw2"}},148:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__-avOx",button:"CheckoutSummary__button__2blfG"}},150:function(e,t,a){e.exports={ContactData:"ContactData__ContactData__1whvJ",form:"ContactData__form__1Np-U"}},164:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),o=a(9),l=a(8),i=a(10),c=a(0),u=a.n(c),s=a(162),d=a(98),p=a(19),m=a(146),h=a.n(m),v=a(64),f=a(48),g=a(148),y=a.n(g),C=function(e){return u.a.createElement("div",{className:y.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes well!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(v.a,{ingredients:e.ingredients})),u.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}},u.a.createElement(f.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),u.a.createElement(f.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE")))},b=a(34),_=a(25),E=a(150),k=a.n(E),O=a(55),I=a(142),j=a(56),N=a(20),x=a(4),T=a(170),w=(a(33),a(157)),S=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",touched:!1,validation:{required:!0},valid:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",touched:!1,validation:{required:!0},valid:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",touched:!1,validation:{required:!0,minLength:5,maxLength:5},valid:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",touched:!1,validation:{required:!0},valid:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",touched:!1,validation:{required:!0},valid:!1},deliveryMethod:{elementType:"textselectarea",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"inputChangedHandler",value:function(e,t){var a=Object(x.c)(this.state.orderForm[t],{value:e.target.value,valid:Object(x.a)(e.target.value,this.state.orderForm[t].validation),touched:!0}),n=Object(x.c)(this.state.orderForm,Object(b.a)({},t,a)),r=!0;for(var o in n)r=n[o].valid&&r;this.setState({orderForm:n,formIsValid:r})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=[];for(var n in this.state.orderForm)a.push({id:n,config:this.state.orderForm[n]});var r=u.a.createElement("form",{onSubmit:this.orderHandler,className:k.a.form},a.map(function(t){return u.a.createElement(I.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,valueType:t.id,invalid:!t.config.valid,shouldValidate:t.config.validation,changed:function(a){return e.inputChangedHandler(a,t.id)},touched:t.config.touched})}),u.a.createElement(f.a,{btnType:"Success",disabled:!this.state.formIsValid,clicked:this.orderHandler},"ORDER"));return this.props.loading&&(r=u.a.createElement(O.a,null)),u.a.createElement("div",{className:k.a.ContactData},u.a.createElement(w.a,{className:t.typography},u.a.createElement("h4",null,"Enter your Contact Data")),r)}}]),t}(c.Component),V=Object(T.a)(function(){return{typography:{fontSize:"1.5em"}}})(Object(p.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,a){return e(N.g(t,a))}}})(Object(j.a)(S,_.a))),D=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(s.a,{to:"/"});if(this.props.toppings){var t=this.props.purchased?u.a.createElement(s.a,{to:"/"}):null;e=u.a.createElement("div",{className:h.a.checkoutContainer},t,u.a.createElement(C,{ingredients:this.props.toppings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(d.a,{path:this.props.match.path+"/contact-data",component:V}))}return e}}]),t}(c.Component);t.default=Object(p.b)(function(e){return{toppings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(D)}}]);
//# sourceMappingURL=1.67cedfa2.chunk.js.map