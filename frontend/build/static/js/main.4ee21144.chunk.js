(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(20),s=n.n(o),i=n(8),r=(n(13),n(25)),l=n(2),u=n(3),p=c.a.createContext(),d=n.p+"static/media/Vector-2.3d8293a2.svg",b=n(0);var j=function(e){var t=e.userEmail,n=e.onSignOut,a=e.loggedIn;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("img",{src:d,alt:"\u041c\u0435\u0441\u0442\u043e.",className:"header__logo"}),a?Object(b.jsxs)("div",{className:"header__auth",children:[Object(b.jsx)("p",{className:"header__email",children:t}),Object(b.jsx)(i.b,{className:"header__link button header__link_exit",onClick:n,to:"/sign-up",children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/sign-in",children:Object(b.jsx)(i.b,{to:"/sign-up",className:"header__link button",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(b.jsx)(u.b,{exact:!0,path:"/sign-up",children:Object(b.jsx)(i.b,{to:"/sign-in",className:"header__link button",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})};var _=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("p",{className:"footer__text",children:"\xa9 2022 Mesto Russia"})})};var h=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,o=e.onCardDelete,s=Object(a.useContext)(p),i=t.owner===s._id,r=t.likes.some((function(e){return e===s._id})),l="".concat(i?"element__delete button":"element__delete_hidden"),u="button element__like ".concat(r&&"element__like_click");return Object(b.jsxs)("article",{className:"element",children:[Object(b.jsx)("button",{className:l,type:"button",onClick:function(){o(t._id)}}),Object(b.jsx)("img",{className:"element__img",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(b.jsxs)("div",{className:"element__title",children:[Object(b.jsx)("h2",{className:"element__name",children:t.name}),Object(b.jsxs)("div",{className:"element__like-container",children:[Object(b.jsx)("button",{className:u,type:"button",onClick:function(){c(t)}}),Object(b.jsx)("p",{className:"element__like-counter",children:t.likes.length})]})]})]})};var m=function(e){var t=e.onEditProfile,n=e.onAddPlace,c=e.onEditAvatar,o=e.onCardClick,s=e.onDeleteClick,i=e.cards,r=e.onCardLike,l=Object(a.useContext)(p);return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsxs)("div",{className:"profile__avatar-cover",children:[Object(b.jsx)("button",{className:"profile__cover-hover",type:"button",onClick:c}),Object(b.jsx)("img",{alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f.",src:l.avatar,className:"profile__avatar"})]}),Object(b.jsxs)("div",{className:"profile__info-block",children:[Object(b.jsxs)("div",{className:"profile__title",children:[Object(b.jsx)("h1",{className:"profile__name",children:l.name}),Object(b.jsx)("button",{className:"profile__edit-button button",type:"button",onClick:t})]}),Object(b.jsx)("p",{className:"profile__info",children:l.about})]}),Object(b.jsx)("button",{className:"profile__add-button button",type:"button",onClick:n})]}),Object(b.jsx)("section",{className:"elements",children:i.map((function(e){return Object(b.jsx)(h,{card:e,onCardClick:o,onCardLike:r,onCardDelete:s},e._id)}))})]})},f=n(22),O=n(23),v=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(f.a)(this,e),this._baseUrl=n,this._headers=a}return Object(O.a)(e,[{key:"_check",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{credentials:"include",headers:this._headers,method:"GET"}).then((function(t){return e._check(t)}))}},{key:"addInitialCards",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{credentials:"include",headers:this._headers,method:"POST",body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._check(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{credentials:"include",headers:this._headers,method:"GET"}).then((function(t){return e._check(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{credentials:"include",headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._check(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{credentials:"include",method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._check(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{credentials:"include",headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._check(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{credentials:"include",method:"DELETE",headers:this._headers}).then((function(e){return t._check(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{credentials:"include",method:"PUT",headers:this._headers}).then((function(e){return t._check(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{credentials:"include",method:"DELETE",headers:this._headers}).then((function(e){return t._check(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{credentials:"include",method:"".concat(t?"PUT":"DELETE"),headers:this._headers}).then((function(e){return n._check(e)}))}}]),e}())({baseUrl:"https://api.mesto.pilot.nomoredomains.icu",headers:{"Content-Type":"application/json"}});var x=function(e){var t=e.onClose,n=e.card;return Object(b.jsx)("div",{className:"popup popup_for_img  ".concat(n._id&&"popup_opened"),children:Object(b.jsxs)("div",{className:"popup__container popup__container_for_img",children:[Object(b.jsx)("button",{className:"button popup__close popup__close_for_img",type:"button",onClick:t}),Object(b.jsx)("img",{className:"popup__img",src:n.link,alt:n.name}),Object(b.jsx)("p",{className:"popup__info-img",children:n.name})]})})};var g=function(e){var t=e.name,n=e.title,a=e.button,c=e.isOpen,o=e.onClose,s=e.popupDelete,i=e.popupAvatar,r=e.children,l=e.onSubmit;return Object(b.jsx)("div",{className:"popup popup_for_".concat(t," ").concat(c&&"popup_opened"),children:Object(b.jsxs)("div",{className:"popup__container ".concat(s&&"popup__container_for_delete"," ").concat(i&&"popup__container_for_avatar"),children:[Object(b.jsx)("button",{className:"button popup__close popup__close_for_".concat(t),type:"button",onClick:o}),Object(b.jsx)("h3",{className:"popup__heading ".concat(s&&"popup__heading_for_delete"," ").concat(i&&"popup__heading_for_avatar"),children:n}),Object(b.jsx)("form",{className:"popup__form",name:"form-".concat(t),noValidate:!0,onSubmit:l,button:a,children:r})]})})};var N=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,o=e.button,s=Object(a.useContext)(p),i=Object(a.useState)(s.name),r=Object(l.a)(i,2),u=r[0],d=r[1],j=Object(a.useState)(s.description),_=Object(l.a)(j,2),h=_[0],m=_[1];return Object(a.useEffect)((function(){d(s.name),m(s.about)}),[s,t]),Object(b.jsx)(g,{isOpen:t,onClose:n,name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onSubmit:function(e){e.preventDefault(),c({name:u,about:h})},children:Object(b.jsxs)("fieldset",{className:"popup__input",children:[Object(b.jsxs)("label",{className:"popup__label",children:[Object(b.jsx)("input",{type:"text",className:"popup__item popup__item_input_name",name:"name",maxLength:"40",minLength:"2",required:!0,id:"name",placeholder:"\u0418\u043c\u044f",value:u||"",onChange:function(e){d(e.target.value)}}),Object(b.jsx)("span",{className:"popup__input-error name-error"})]}),Object(b.jsxs)("label",{className:"popup__label",children:[Object(b.jsx)("input",{type:"text",className:"popup__item popup__item_input_info",name:"info",maxLength:"200",minLength:"2",required:!0,id:"info",placeholder:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",value:h||"",onChange:function(e){m(e.target.value)}}),Object(b.jsx)("span",{className:"popup__input-error info-error"})]}),Object(b.jsx)("button",{className:"button popup__button popup__button_for_edit",type:"submit",children:o||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var k=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,o=e.button,s=Object(a.useRef)();return Object(a.useEffect)((function(){s.current.value=""}),[t]),Object(b.jsx)(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,popupAvatar:!0,onSubmit:function(e){e.preventDefault(),c({avatar:s.current.value})},children:Object(b.jsxs)("fieldset",{className:"popup__input",children:[Object(b.jsxs)("label",{className:"popup__label",children:[Object(b.jsx)("input",{ref:s,type:"url",className:"popup__item popup__item_input_link-avatar",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,id:"avatar"}),Object(b.jsx)("span",{className:"popup__input-error avatar-error"})]}),Object(b.jsx)("button",{className:"button popup__button popup__button_for_avatar",type:"submit",children:o||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var C=function(e){var t=e.onClose,n=e.isOpen,a=e.popupDelete,c=e.name,o=e.title,s=e.button,i=e.cardId,r=e.onCardDelete;return Object(b.jsx)(g,{name:c,onClose:t,title:o,buttonText:s,onSubmit:function(e){e.preventDefault(),r(i),t()},isOpen:n,popupDelete:a,children:Object(b.jsx)("fieldset",{className:"popup__input",children:Object(b.jsx)("button",{className:"button popup__button popup__button_for_".concat(c),type:"submit",children:s||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})})};var y=function(e){var t=e.isOpen,n=e.onClose,c=e.button,o=e.onAddCard,s=Object(a.useState)([]),i=Object(l.a)(s,2),r=i[0],u=i[1],p=Object(a.useState)([]),d=Object(l.a)(p,2),j=d[0],_=d[1];return Object(a.useEffect)((function(){u(""),_("")}),[t]),Object(b.jsx)(g,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:r,link:j})},children:Object(b.jsxs)("fieldset",{className:"popup__input",children:[Object(b.jsxs)("label",{className:"popup__label",children:[Object(b.jsx)("input",{onChange:function(e){u(e.target.value)},value:r||"",type:"text",className:"popup__item popup__item_input_name",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",maxLength:"30",minLength:"2",required:!0,id:"title"}),Object(b.jsx)("span",{className:"popup__input-error title-error"})]}),Object(b.jsxs)("label",{className:"popup__label",children:[Object(b.jsx)("input",{onChange:function(e){_(e.target.value)},value:j||"",type:"url",className:"popup__item popup__item_input_info",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"link"}),Object(b.jsx)("span",{className:"popup__input-error link-error"})]}),Object(b.jsx)("button",{className:"button popup__button popup__button_for_add",type:"submit",children:c||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})},S=n(10),U=n(24),E=["component"],D=function(e){var t=e.component,n=Object(U.a)(e,E);return Object(b.jsx)(u.b,{children:function(){return n.loggedIn?Object(b.jsx)(t,Object(S.a)({},n)):Object(b.jsx)(u.a,{to:"/sign-in"})}})},I=n(11);var L=function(e){var t=e.name,n=e.className,a=e.buttonName,c=e.register,o=e.userData,s=e.handleSubmit,r=e.handleChange;return Object(b.jsxs)("div",{className:"sign ".concat(n),children:[Object(b.jsx)("p",{className:"sign__welcome",children:t}),Object(b.jsxs)("form",{className:"sign__form",onSubmit:s,children:[Object(b.jsx)("input",{className:"sign__input popup__item",id:"email",name:"email",type:"email",placeholder:"Email",value:o.email||"",onChange:r,required:!0}),Object(b.jsx)("input",{className:"sign__input popup__item",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:o.password||"",onChange:r,required:!0}),Object(b.jsx)("div",{className:"sign__button-container",children:Object(b.jsx)("button",{type:"submit",className:"button popup__button sign__link",onSubmit:c&&s,children:a})})]}),c&&Object(b.jsxs)("div",{className:"sign__signin",children:[Object(b.jsx)("p",{className:"sign__signin-text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),"\xa0",Object(b.jsx)(i.b,{to:"/sign-in",className:"sign__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var T=function(e){var t=e.onRegister,n=c.a.useState({email:"",password:""}),a=Object(l.a)(n,2),o=a[0],s=a[1];return Object(b.jsx)(L,{handleSubmit:function(e){e.preventDefault();var n=o.email,a=o.password;t(n,a)},userData:o,handleChange:function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(I.a)({},n,a))}))},register:!0,className:"register",name:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonName:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})};var w=function(e){var t=e.onLogin,n=c.a.useState({email:"",password:""}),a=Object(l.a)(n,2),o=a[0],s=a[1];return Object(b.jsx)(L,{handleSubmit:function(e){e.preventDefault();var n=o.email,a=o.password;t(n,a)},userData:o,handleChange:function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(I.a)({},n,a))}))},className:"login",name:"\u0412\u0445\u043e\u0434",buttonName:"\u0412\u043e\u0439\u0442\u0438"})},P=n.p+"static/media/yes.1b6082f8.svg",A=n.p+"static/media/no.df8eddf6.svg";var J=function(e){var t=e.isOpen,n=e.onClose,a=e.loggedIn;return Object(b.jsx)("div",{className:"popup popup_for_tooltip ".concat(t&&"popup_opened"),children:Object(b.jsxs)("div",{className:"popup__container popup__container_for_tooltip",children:[Object(b.jsx)("button",{className:"button popup__close popup__close_for_tooltip",type:"button",onClick:n}),Object(b.jsx)("img",{src:a?P:A,alt:a?"\u0413\u0430\u043b\u043e\u0447\u043a\u0430.":"\u041a\u0440\u0435\u0441\u0442\u0438\u043a.",className:"popup__icon"}),Object(b.jsx)("h3",{className:"popup__heading popup__heading_for_tooltip",children:a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"})]})})},q="https://api.mesto.pilot.nomoredomains.icu";n(41).config();var F=function(){var e=Object(u.g)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),d=i[0],h=i[1],f=Object(a.useState)(!1),O=Object(l.a)(f,2),g=O[0],S=O[1],U=Object(a.useState)(!1),E=Object(l.a)(U,2),I=E[0],L=E[1],P=Object(a.useState)([]),A=Object(l.a)(P,2),F=A[0],R=A[1],G=Object(a.useState)(!1),B=Object(l.a)(G,2),H=B[0],M=B[1],V=Object(a.useState)(!1),z=Object(l.a)(V,2),K=z[0],Q=z[1],W=Object(a.useState)(!1),X=Object(l.a)(W,2),Y=X[0],Z=X[1],$=Object(a.useState)({}),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)({}),ce=Object(l.a)(ae,2),oe=ce[0],se=ce[1],ie=Object(a.useState)(!1),re=Object(l.a)(ie,2),le=re[0],ue=re[1],pe=Object(a.useState)(""),de=Object(l.a)(pe,2),be=de[0],je=de[1],_e=function(){var t=localStorage.getItem("jwt");t||(fetch("".concat(q,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(v._check).then((function(t){h(t.email),se(t),o(!0),e.push("/")})).catch((function(e){return console.log(e)})),v.getInitialCards(t).then((function(e){R(e)})).catch((function(e){return console.log(e)})))};Object(a.useEffect)((function(){_e()}),[]),Object(a.useEffect)((function(){c&&Promise.all([v.getInitialCards(),v.getUserInfo()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];R(n),se(a)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[c]);var he=function(){M(!1),Q(!1),Z(!1),ue(!1),ne({}),L(!1)};return Object(b.jsx)(p.Provider,{value:oe,children:Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)(j,{loggedIn:c,userEmail:d,onSignOut:function(){o(!1),localStorage.removeItem("jwt"),e.push("/sign-in")}}),Object(b.jsxs)(u.d,{children:[Object(b.jsx)(D,{exact:!0,path:"/",loggedIn:c,component:m,onEditProfile:function(){M(!H)},onAddPlace:function(){Q(!K)},onEditAvatar:function(){Z(!Y)},onCardClick:function(e){ne(e)},onDeleteClick:function(e){ue(!le),je(e)},onUserInfo:function(e){se(e)},cards:F,onCardLike:function(e){var t=e.likes.some((function(e){return e===oe._id}));v.changeLikeCardStatus(e._id,!t).then((function(t){R((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},cardId:be}),Object(b.jsx)(u.b,{path:"/sign-in",children:Object(b.jsx)(w,{onLogin:function(t,n){return function(e,t){return fetch("".concat(q,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t}),credentials:"include"}).then(v._check)}(t,n).then((function(n){n&&(o(!0),localStorage.setItem("jwt",n.token),h(t),e.push("/"),_e())})).catch((function(e){S(!1),L(!0),console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}})}),Object(b.jsx)(u.b,{path:"/sign-up",children:Object(b.jsx)(T,{onRegister:function(t,n){return function(e,t){return fetch("".concat(q,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(v._check)}(t,n).then((function(){S(!0),L(!0),e.push("/sign-in")})).catch((function(e){S(!1),L(!0),console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}})}),Object(b.jsx)(u.b,{children:c?Object(b.jsx)(u.a,{to:"/"}):Object(b.jsx)(u.a,{to:"/sign-in"})})]}),Object(b.jsx)(_,{}),Object(b.jsx)(J,{loggedIn:g,isOpen:I,onClose:he}),Object(b.jsx)(N,{isOpen:H,onClose:he,onUpdateUser:function(e){v.setUserInfo(e).then((function(e){se(e),he()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(b.jsx)(y,{isOpen:K,onClose:he,onAddCard:function(e){v.addCard(e).then((function(e){R([e].concat(Object(r.a)(F))),he()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(b.jsx)(C,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",button:"\u0414\u0430",onClose:he,isOpen:le,cardId:be,onCardDelete:function(e){v.deleteCard(e).then((function(){R((function(t){return t.filter((function(t){return t._id!==e}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},popupDelete:!0}),Object(b.jsx)(k,{isOpen:Y,onClose:he,onUpdateAvatar:function(e){v.setUserAvatar(e).then((function(e){se(e),he()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(b.jsx)(x,{onClose:he,card:te})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(i.a,{children:Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{})})})),R()}},[[44,1,2]]]);
//# sourceMappingURL=main.4ee21144.chunk.js.map