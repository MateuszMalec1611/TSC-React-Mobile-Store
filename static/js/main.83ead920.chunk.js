(this["webpackJsonpmobile-store-app"]=this["webpackJsonpmobile-store-app"]||[]).push([[0],{15:function(e,t,r){e.exports={nav:"Navigation_nav__3eI15",logo:"Navigation_logo__2wCIm",navList:"Navigation_navList__3yYy1","navList--active":"Navigation_navList--active__FNIj-",active:"Navigation_active__FIUEH",barBox:"Navigation_barBox__251y1",bar:"Navigation_bar__1OM9z","bar--active":"Navigation_bar--active__3zabO"}},39:function(e,t,r){e.exports={container:"Layout_container__154JR",main:"Layout_main__10IBb"}},40:function(e,t,r){e.exports={formOrder:"FormOrder_formOrder__6goce",success:"FormOrder_success__3IZqI"}},41:function(e,t,r){e.exports={startingPage:"StartingPage_startingPage__1u4to",heroImage:"StartingPage_heroImage__1-pfE"}},42:function(e,t,r){e.exports={orderedProduct:"OrderedProduct_orderedProduct__3fzbo",titleDetail:"OrderedProduct_titleDetail__cImEZ"}},43:function(e,t,r){e.exports={profile:"Profile_profile__3WDcd",orderedBox:"Profile_orderedBox__2f250"}},53:function(e,t,r){e.exports={product:"Product_product__VwHbz"}},54:function(e,t,r){e.exports={loader:"Loader_loader__2UxoY","loader-roller":"Loader_loader-roller__1mutV"}},55:function(e,t,r){e.exports={products:"Products_products__3-IJd"}},56:function(e,t,r){e.exports={searchEngine:"SearchEngine_searchEngine__15MW6"}},57:function(e,t,r){e.exports={button:"Button_button__kUC3M"}},58:function(e,t,r){e.exports={errorModal:"ErrorModal_errorModal__1tFa7"}},59:function(e,t,r){e.exports={home:"Home_home__39l71"}},60:function(e,t,r){e.exports={productDetail:"ProductDetail_productDetail__2Thy4"}},61:function(e,t,r){e.exports={detailsBox:"UserDetails_detailsBox__29OS1"}},93:function(e,t,r){},94:function(e,t,r){},95:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),a=r(28),i=r.n(a),o=r(12),s=r(5),l=r(98),d=r(7),j=r(3),u=r(97),b={initial:"out",animate:"in",exit:"out",variants:{in:{opacity:1,x:0},out:{opacity:1,x:"-100vw"}},transition:{type:"tween",ease:"anticipate",duration:.55}},O=r(17),h=r.n(O),p=r(26),x=r(52),f=r.n(x),v=function(){return f.a.create({baseURL:"https://mobile-store-f3806-default-rtdb.europe-west1.firebasedatabase.app"})},m="CANCEL_ORDER",y="DISPLAY_PRODUCT",_="ERROR",g="GET_PRODUCTS",N="GET_PRODUCT_DETAIL",w="GET_ORDERED_PRODUCTS",E="IS_ORDERING",P="LOADING",D="SENT_ORDER",S=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var c=Object(p.a)(h.a.mark((function c(n){var a,i,o;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n({type:P}),c.next=4,v().get("".concat(e,".json"));case 4:if(a=c.sent,i=a.data,o=a.status,i||!r){c.next=9;break}throw new Error("Failed to get data, try again :(");case 9:if(200===o){c.next=11;break}throw new Error("Failed to get data, try again :(");case 11:r&&i&&i.shift(),n({type:t,payload:i}),c.next=18;break;case 15:c.prev=15,c.t0=c.catch(0),n({type:_,payload:c.t0.message});case 18:case"end":return c.stop()}}),c,null,[[0,15]])})));return function(e){return c.apply(this,arguments)}}()},C=r(53),k=r.n(C),I=r(1),T=function(e){var t=e.name,r=e.img,c=e.price,n=e.id,a=e.visible,i=Object(d.g)();return Object(I.jsx)("li",{style:a?{display:"block"}:{display:"none"},onClick:function(){return i.push("/product/".concat(n))},className:"".concat(k.a.product," showSlower"),children:Object(I.jsxs)("div",{children:[Object(I.jsxs)("article",{children:[Object(I.jsx)("h4",{children:t}),Object(I.jsxs)("p",{children:[c," $"]})]}),Object(I.jsx)("img",{src:r,alt:"1234"})]})})},R=r(54),A=r.n(R),F=function(){return Object(I.jsxs)("div",{className:A.a.loader,children:[Object(I.jsx)("div",{}),Object(I.jsx)("div",{}),Object(I.jsx)("div",{}),Object(I.jsx)("div",{}),Object(I.jsx)("div",{}),Object(I.jsx)("div",{}),Object(I.jsx)("div",{}),Object(I.jsx)("div",{})]})},L=r(55),B=r.n(L),M=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.mobileStore})),r=t.products,n=t.loading;Object(c.useEffect)((function(){e(S("/products-header",g))}),[e]);var a=r.map((function(e){return Object(I.jsx)(T,Object(j.a)({},e),e.id)}));return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("ul",{className:B.a.products,children:n?Object(I.jsx)(F,{}):a})})},q=r(56),U=r.n(q),V=function(){var e=Object(c.useRef)(null),t=Object(s.b)(),r=Object(s.c)((function(e){return e.mobileStore.products}));return Object(I.jsx)("div",{className:U.a.searchEngine,children:Object(I.jsx)("input",{onChange:function(){var c=e.current.value.toLocaleLowerCase(),n=r.map((function(e){return e.name.toLocaleLowerCase().includes(c)?Object(j.a)(Object(j.a)({},e),{},{visible:!0}):Object(j.a)(Object(j.a)({},e),{},{visible:!1})}));t({type:y,payload:n})},ref:e,placeholder:"Search",type:"text"})})},Y=r(57),z=r.n(Y),G=function(e){var t=e.children,r=e.click,c=e.isDisabled;return Object(I.jsx)("button",{disabled:c,onClick:function(){return r?r():null},className:z.a.button,children:t})},$=r(58),H=r.n($),J=document.getElementById("modal-root"),W=function(e){var t=e.errorText,r=Object(d.g)();return Object(I.jsx)("div",{className:H.a.errorModal,children:Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"ERROR"}),Object(I.jsx)("p",{children:t}),Object(I.jsx)(G,{click:function(){return r.replace("/")},children:"try again"})]})})},Z=function(){var e=Object(s.c)((function(e){return e.mobileStore})).error;return window.scrollTo(0,0),Object(I.jsx)(I.Fragment,{children:i.a.createPortal(Object(I.jsx)(W,{errorText:e}),J)})},K=r(59),Q=r.n(K),X=function(){var e=Object(s.c)((function(e){return e.mobileStore})).error;return Object(I.jsxs)(u.a.div,Object(j.a)(Object(j.a)({},b),{},{className:Q.a.home,children:[Object(I.jsx)(V,{}),Object(I.jsx)(M,{}),""!==e&&Object(I.jsx)(Z,{})]}))},ee=r(25),te=r.p+"static/media/exit.73de6d48.svg",re=r(15),ce=r.n(re),ne=function(){var e=Object(c.useState)(!1),t=Object(ee.a)(e,2),r=t[0],n=t[1];window.innerWidth<768&&(document.body.style.overflow=r?"hidden":"unset");var a=function(){return n((function(e){return!e}))},i=r?"".concat(ce.a.bar," ").concat(ce.a["bar--active"]):"".concat(ce.a.bar),s=r?"".concat(ce.a.navList," ").concat(ce.a["navList--active"]):"".concat(ce.a.navList);return Object(I.jsxs)("nav",{className:ce.a.nav,children:[Object(I.jsx)("div",{className:ce.a.logo,children:Object(I.jsxs)(o.b,{to:"/home",children:["Mobile",Object(I.jsx)("span",{children:" Store"})]})}),Object(I.jsx)("div",{onClick:a,className:ce.a.barBox,children:Object(I.jsx)("div",{className:i})}),Object(I.jsx)("div",{className:s,children:Object(I.jsxs)("ul",{children:[Object(I.jsx)("li",{children:Object(I.jsxs)(o.b,{onClick:a,activeClassName:ce.a.active,to:"/home",children:["H",Object(I.jsx)("span",{children:"o"}),"me"]})}),Object(I.jsx)("li",{children:Object(I.jsxs)(o.b,{onClick:a,activeClassName:ce.a.active,to:"/profile",children:["P",Object(I.jsx)("span",{children:"r"}),"ofile"]})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{onClick:a,activeClassName:ce.a.active,to:"/",exact:!0,children:Object(I.jsx)("img",{src:te,alt:""})})})]})})]})},ae=r(39),ie=r.n(ae),oe=function(e){var t=e.children,r="/"!==t.props.location.pathname;return Object(I.jsxs)("div",{className:ie.a.container,children:[r&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ne,{}),Object(I.jsx)(u.a.main,Object(j.a)(Object(j.a)({},b),{},{className:ie.a.main,children:t}))]}),!r&&t]})},se="GET_USER_DATA",le="UPDATE_TOTAL_AMOUNT",de=function(){return function(){var e=Object(p.a)(h.a.mark((function e(t){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v().get("/user/details.json");case 3:if(r=e.sent,c=r.data,200===r.status){e.next=8;break}throw new Error("Failed to get details");case 8:t({type:se,payload:null!==c&&void 0!==c?c:{totalAmount:0,quantityOfOrers:0}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:_,payload:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},je=function(e,t){return function(){var r=Object(p.a)(h.a.mark((function r(c){var n;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v().put("/user/details.json",{totalAmount:e,quantityOfOrders:t});case 3:if(n=r.sent,200===n.status){r.next=7;break}throw new Error("Failed to update");case 7:c({type:le,payload:{totalAmount:e,quantityOfOrders:t}}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),c({type:_,payload:r.t0.message});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()},ue=function(e){var t=Object(c.useState)(""),r=Object(ee.a)(t,2),n=r[0],a=r[1],i=Object(c.useState)(!1),o=Object(ee.a)(i,2),s=o[0],l=o[1],d=e(n);return{value:n,handleValue:function(e){var t=e.target;return a(t.value)},handleIsTouched:function(){return l(!0)},error:!d&&s,isValid:d}},be=r(40),Oe=r.n(be),he=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,pe=function(){var e=Object(d.i)().productName,t=Object(d.g)(),r=Object(s.b)(),n=Object(s.c)((function(e){return e.mobileStore})),a=n.products,i=n.loading,o=n.sent,l=n.error,O=Object(s.c)((function(e){return e.user})),x=O.totalAmount,f=O.quantityOfOrders;Object(c.useEffect)((function(){r(de()),r(S("/products-header",g)),r({type:D,payload:!1})}),[r]);var m=ue((function(e){return""!==e.trim()})),y=m.value,N=m.handleValue,w=m.handleIsTouched,E=m.error,C=m.isValid,k=ue((function(e){return he.test(e)})),T=k.value,R=k.handleValue,A=k.handleIsTouched,L=k.error,B=k.isValid,M=ue((function(e){return""!==e.trim()})),q=M.value,U=M.handleValue,V=M.handleIsTouched,Y=M.error,z=M.isValid,$=ue((function(e){return""!==e.trim()})),H=$.value,J=$.handleValue,W=$.handleIsTouched,K=$.error,Q=$.isValid,X=C&&B&&z&&Q,ee=E&&Object(I.jsx)("p",{children:"Please enter a valid Full Name!"}),te=L&&Object(I.jsx)("p",{children:"Please enter a valid Email!"}),re=Y&&Object(I.jsx)("p",{children:"Please enter a valid City!"}),ce=K&&Object(I.jsx)("p",{children:"Please enter a valid Postal Code!"}),ne=!X&&Object(I.jsx)("p",{children:"Please fill all required fields (*)"}),ae=Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("article",{children:[Object(I.jsx)("p",{children:"You're ordering"}),Object(I.jsx)("h2",{children:e})]}),Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=a.find((function(t){return t.id===e}));delete c.visible;var n=(new Date).toISOString().slice(0,19),i={name:y,email:T,city:q,postalCode:H},o={id:"any",productInfo:Object(j.a)({},c),userData:Object(j.a)(Object(j.a)({},i),{},{date:n})},s=x+c.price,l=f+1;r(function(e){return function(){var t=Object(p.a)(h.a.mark((function t(r){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:P}),t.next=4,v().post("/user/ordered-products.json",e);case 4:if(200===t.sent.status){t.next=8;break}throw new Error("Failed to send order");case 8:r({type:D,payload:!0}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:_,payload:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(o)),r(je(s,l))},children:[Object(I.jsxs)("label",{htmlFor:"fullname",children:["*Full Name",Object(I.jsx)("input",{onBlur:w,onChange:N,value:y,id:"fullname",type:"text"}),ee]}),Object(I.jsxs)("label",{htmlFor:"email",children:["*Email",Object(I.jsx)("input",{onBlur:A,onChange:R,value:T,id:"email",type:"text"}),te]}),Object(I.jsxs)("label",{htmlFor:"city",children:["*City",Object(I.jsx)("input",{onBlur:V,onChange:U,value:q,id:"city",type:"text"}),re]}),Object(I.jsxs)("label",{htmlFor:"postalCode",children:["*Postal Code",Object(I.jsx)("input",{onBlur:W,onChange:J,value:H,id:"postalCode",type:"text"}),ce]}),Object(I.jsx)(G,{isDisabled:!X,children:"buy"}),ne]})]}),ie=Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("p",{className:Oe.a.success,children:"Your order has been processed"}),Object(I.jsx)(G,{click:function(){return t.replace("/home")},children:"close"})]});return Object(I.jsxs)(u.a.div,Object(j.a)(Object(j.a)({},b),{},{className:Oe.a.formOrder,children:[i||o?null:ae,i?Object(I.jsx)(F,{}):null,!i&&o&&""===l?ie:null,i||""===l?null:Object(I.jsx)(Z,{})]}))},xe=r(60),fe=r.n(xe),ve=function(){var e=Object(d.i)().productName,t=Object(s.b)(),r=Object(d.g)(),n=Object(s.c)((function(e){return e.mobileStore})),a=n.productDetail,i=n.loading,o=n.error;Object(c.useEffect)((function(){t(S("/products-description/".concat(e),N,!1))}),[t,e]);var l=Object(I.jsxs)("div",{className:"showSlower",children:[Object(I.jsx)("h2",{children:null===a||void 0===a?void 0:a.name}),Object(I.jsx)("img",{src:null===a||void 0===a?void 0:a.img,alt:e}),Object(I.jsxs)("article",{children:[Object(I.jsx)("h4",{children:"Price"}),Object(I.jsxs)("p",{children:[null===a||void 0===a?void 0:a.price,"$"]})]}),Object(I.jsxs)("article",{children:[Object(I.jsx)("h4",{children:"Display"}),Object(I.jsx)("p",{children:null===a||void 0===a?void 0:a.display})]}),Object(I.jsxs)("article",{children:[Object(I.jsx)("h4",{children:"Processor"}),Object(I.jsx)("p",{children:null===a||void 0===a?void 0:a.processor})]}),Object(I.jsxs)("article",{children:[Object(I.jsx)("h4",{children:"RAM"}),Object(I.jsx)("p",{children:null===a||void 0===a?void 0:a.ram})]}),Object(I.jsx)(G,{click:function(){t({type:E,payload:!0}),r.push("/ordering/".concat(e))},children:"Order"})]});return Object(I.jsxs)(u.a.div,Object(j.a)(Object(j.a)({},b),{},{className:fe.a.productDetail,children:[i?Object(I.jsx)(F,{}):l,i||""===o?null:Object(I.jsx)(Z,{})]}))},me=r(41),ye=r.n(me),_e=(r(93),function(){var e=Object(d.g)();return Object(I.jsxs)(u.a.header,Object(j.a)(Object(j.a)({},b),{},{className:ye.a.startingPage,children:[Object(I.jsx)("div",{className:ye.a.heroImage}),Object(I.jsxs)("section",{children:[Object(I.jsxs)("h1",{className:"slideInR",children:["M",Object(I.jsx)("span",{children:"o"}),"bile Store"]}),Object(I.jsx)("h3",{className:"slideInL",children:"New phone only for you"}),Object(I.jsx)("button",{className:"show",onClick:function(){return e.push("/home")},children:"checkout"})]})]}))}),ge=r(42),Ne=r.n(ge),we=function(e){var t=e.id,r=e.productInfo,c=e.userData,n=Object(s.c)((function(e){return e.mobileStore.loading})),a=Object(s.c)((function(e){return e.user})),i=a.totalAmount,o=a.quantityOfOrders,l=Object(s.b)(),d=Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("img",{src:r.img,alt:r.name}),Object(I.jsxs)("div",{children:[Object(I.jsxs)("article",{className:Ne.a.titleDetail,children:[Object(I.jsx)("h3",{children:r.name}),Object(I.jsxs)("p",{children:[r.price," $"]})]}),Object(I.jsxs)("article",{children:[Object(I.jsx)("h4",{children:"Delivery address"}),Object(I.jsxs)("p",{children:["City: ",c.city]}),Object(I.jsxs)("p",{children:["Postal Code: ",c.postalCode]})]}),Object(I.jsxs)("article",{children:[Object(I.jsx)("h4",{children:"The recipient's details"}),Object(I.jsxs)("p",{children:["Name: ",c.name]}),Object(I.jsxs)("p",{children:["emial: ",c.email]})]}),Object(I.jsxs)("article",{children:[Object(I.jsx)("h4",{children:"Date of order:"}),Object(I.jsx)("p",{children:c.date.replace("T"," ")})]}),Object(I.jsx)(G,{click:function(){var e=i-r.price,c=o-1;l(function(e){return function(){var t=Object(p.a)(h.a.mark((function t(r){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:P}),t.next=4,v().delete("/user/ordered-products/".concat(e,".json"));case 4:if(200===t.sent.status){t.next=8;break}throw new Error("Failed to cancel the order");case 8:r({type:m,payload:e}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:_,payload:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t)),l(je(e,c))},children:"cancel the order"})]})]});return Object(I.jsx)("div",{className:"".concat(Ne.a.orderedProduct," showSlower"),children:n?Object(I.jsx)(F,{}):d})},Ee=r(61),Pe=r.n(Ee),De=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user})),r=t.totalAmount,n=t.quantityOfOrders;return Object(c.useEffect)((function(){e(de())}),[e]),Object(I.jsxs)("div",{className:Pe.a.detailsBox,children:[Object(I.jsxs)("article",{children:[Object(I.jsx)("h4",{children:"Total amount of orders"}),Object(I.jsxs)("p",{children:[r," $"]})]}),Object(I.jsxs)("article",{children:[Object(I.jsx)("h4",{children:"Number of orders"}),Object(I.jsx)("p",{children:n})]})]})},Se=r(43),Ce=r.n(Se),ke=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.mobileStore.orderedProducts})),r=Object(s.c)((function(e){return e.mobileStore})),n=r.loading,a=r.error;Object(c.useEffect)((function(){e(S("/user/ordered-products",w,!1))}),[e]);var i=null===t||void 0===t?void 0:t.map((function(e){return Object(I.jsx)(we,Object(j.a)({},e),e.id)}));return Object(I.jsxs)(u.a.div,Object(j.a)(Object(j.a)({},b),{},{className:Ce.a.profile,children:[Object(I.jsxs)("h2",{children:["Your O",Object(I.jsx)("span",{children:"r"}),"ders"]}),Object(I.jsx)(De,{}),Object(I.jsx)("div",{className:Ce.a.orderedBox,children:0!==t.length?i:Object(I.jsx)("p",{children:"You have not placed any orders yet :/"})}),!n&&a?Object(I.jsx)(Z,{}):null]}))},Ie=function(){var e=Object(d.h)(),t=Object(s.c)((function(e){return e.mobileStore.isOrdering}));return Object(I.jsx)(l.a,{exitBeforeEnter:!0,children:Object(I.jsx)(oe,{children:Object(I.jsxs)(d.d,{location:e,children:[Object(I.jsx)(d.b,{path:"/",exact:!0,children:Object(I.jsx)(_e,{})}),Object(I.jsx)(d.b,{path:"/home",children:Object(I.jsx)(X,{})}),Object(I.jsx)(d.b,{path:"/product/:productName",children:Object(I.jsx)(ve,{})}),Object(I.jsx)(d.b,{path:"/ordering/:productName",children:t?Object(I.jsx)(pe,{}):Object(I.jsx)(d.a,{to:"/home"})}),Object(I.jsx)(d.b,{path:"/profile",children:Object(I.jsx)(ke,{})}),Object(I.jsx)(d.b,{path:"*",children:Object(I.jsx)("p",{children:"not found"})})]})})})},Te=r(32),Re=r(62),Ae=function(e){if(e){for(var t=[],r=0,c=Object.entries(e);r<c.length;r++){var n=Object(ee.a)(c[r],2),a=n[0],i=n[1];t.push({id:a,productInfo:i.productInfo,userData:i.userData})}return t}},Fe={products:[],orderedProducts:[],isOrdering:!1,loading:!1,sent:!1,error:""},Le=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case m:var n=r.orderedProducts.filter((function(e){return e.id!==c.payload}));return Object(j.a)(Object(j.a)({},r),{},{loading:!1,error:"",orderedProducts:n});case y:return Object(j.a)(Object(j.a)({},r),{},{products:c.payload});case _:return Object(j.a)(Object(j.a)({},r),{},{loading:!1,error:c.payload});case g:return Object(j.a)(Object(j.a)({},r),{},{loading:!1,error:"",products:null!==(e=c.payload)&&void 0!==e?e:[]});case N:return Object(j.a)(Object(j.a)({},r),{},{loading:!1,error:"",productDetail:c.payload});case w:var a=Ae(c.payload);return Object(j.a)(Object(j.a)({},r),{},{loading:!1,error:"",orderedProducts:null!==(t=a)&&void 0!==t?t:[]});case E:return Object(j.a)(Object(j.a)({},r),{},{isOrdering:c.payload});case P:return Object(j.a)(Object(j.a)({},r),{},{loading:!0});case D:return Object(j.a)(Object(j.a)({},r),{},{loading:!1,error:"",sent:c.payload});default:return r}},Be={totalAmount:0,quantityOfOrders:0},Me=function(){var e,t,r,c,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case se:return{totalAmount:null!==(e=a.payload.totalAmount)&&void 0!==e?e:0,quantityOfOrders:null!==(t=a.payload.quantityOfOrders)&&void 0!==t?t:0};case le:return{totalAmount:null!==(r=a.payload.totalAmount)&&void 0!==r?r:0,quantityOfOrders:null!==(c=a.payload.quantityOfOrders)&&void 0!==c?c:0};default:return n}},qe=Object(Te.combineReducers)({mobileStore:Le,user:Me}),Ue=r(63),Ve=Object(Te.createStore)(qe,Object(Re.composeWithDevTools)(Object(Te.applyMiddleware)(Ue.a)));r(94);i.a.render(Object(I.jsx)(o.a,{basename:"/-TS-React-Mobile-Store",children:Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(s.a,{store:Ve,children:Object(I.jsx)(Ie,{})})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.83ead920.chunk.js.map