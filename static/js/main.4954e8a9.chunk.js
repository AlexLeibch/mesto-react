(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),o=n.n(s),i=(n(6),n(10)),r=n(2),l=n.p+"static/media/header_logo.bbe2a6ea.svg",u=n(0);var d=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{src:l,alt:"\u043b\u043e\u0433\u043e \u0448\u0430\u043f\u043a\u0438",className:"header__logo"})})};var p=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},h=n.p+"static/media/profile__add-button.bed8c136.svg",m=c.a.createContext();var f=function(e){var t=c.a.useContext(m),n=e.card.owner._id===t._id,a="element__delete-button ".concat(n?"element__delete-button":"element__delete-button_hidden"),s=e.card.likes.some((function(e){return e._id===t._id})),o="element__like-button ".concat(s?"element__like-button_active":"");return Object(u.jsx)("div",{className:"elements-template",children:Object(u.jsxs)("div",{className:"element card",children:[Object(u.jsx)("img",{src:e.card.link,alt:e.card.name,className:"element__image",onClick:function(){e.onCardClick(e.card)}}),Object(u.jsx)("button",{className:a,onClick:function(){e.onCardDelete(e.card)},type:"button"}),Object(u.jsx)("h3",{className:"element__title",children:e.card.name}),Object(u.jsxs)("div",{className:"element__like-button-container",children:[Object(u.jsx)("button",{className:o,type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(u.jsx)("p",{className:"element__like-counter",children:e.card.likes.length})]})]})})};var _=function(e){var t=c.a.useContext(m),n=e.onEditAvatar,a=e.onAddPlace,s=e.onEditProfile,o=e.onCardClick,i=e.cards,r=e.onCardLike,l=e.onCardDelete;return Object(u.jsxs)("main",{className:"content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__avatar-container",children:[Object(u.jsx)("img",{src:"".concat(t.avatar),alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar"}),Object(u.jsx)("button",{className:"profile__avatar-edit",onClick:n})]}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__edit",children:[Object(u.jsx)("h1",{className:"profile__username",children:t.name}),Object(u.jsx)("button",{className:"profile__edit-button",type:"button",onClick:s})]}),Object(u.jsx)("p",{className:"profile__user-description",children:t.about})]}),Object(u.jsx)("button",{className:"profile__add-button",type:"button",onClick:a,children:Object(u.jsx)("img",{src:h,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",className:"profile__add-image"})})]}),Object(u.jsx)("section",{className:"elements",children:i.map((function(e){return Object(u.jsx)(f,{card:e,onCardClick:o,onCardLike:r,onCardDelete:l},e._id)}))})]})};var j=function(e){return Object(u.jsx)("div",{className:"popup popup_type_".concat(e.name," && ").concat(e.isOpen&&"popup_opened"),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsx)("button",{type:"button",className:"popup__button-close",onClick:e.onClose}),Object(u.jsx)("h2",{className:"popup__title",children:e.title}),Object(u.jsxs)("form",{className:"popup__form popup__form_".concat(e.name),name:"".concat(e.name),onSubmit:e.handleSubmit,noValidate:!0,children:[e.children,Object(u.jsx)("button",{className:"popup__button-save",type:"submit",children:e.buttonText})]})]})})};var b=function(e){return Object(u.jsx)("section",{className:"popup popup_type_imagepopup ".concat(e.card.isOpen&&"popup_opened"),children:Object(u.jsxs)("div",{className:"popup__figure-container",children:[Object(u.jsxs)("figure",{className:"popup__figure",children:[Object(u.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__image"}),Object(u.jsx)("figcaption",{className:"popup__caption",children:e.card.name})]}),Object(u.jsx)("button",{className:"popup__button-close",type:"button",onClick:e.onClose})]})})},O=n(8),v=n(9),x=new(function(){function e(t){var n=t.address,a=t.headers;Object(O.a)(this,e),this._address=n,this._headers=a}return Object(v.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:this._headers}).then(this._checkStatus)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:this._headers}).then(this._checkStatus)}},{key:"editUserInfo",value:function(e,t){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkStatus)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkStatus)}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkStatus)}},{key:"likeCard",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkStatus)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.likeCard(e):this.dislikeCard(e)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}},{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}}]),e}())({address:"https://mesto.nomoreparties.co/v1/cohort-26",headers:{authorization:"6a8d306b-88c2-4559-b9fb-ed6535e42e98","Content-type":"application/json"}});var C=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,s=c.a.useContext(m),o=c.a.useState(""),i=Object(r.a)(o,2),l=i[0],d=i[1],p=c.a.useState(""),h=Object(r.a)(p,2),f=h[0],_=h[1];return c.a.useEffect((function(){d(s.name),_(s.about)}),[s]),Object(u.jsxs)(j,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,handleSubmit:function(e){e.preventDefault(),a({name:l,about:f})},children:[Object(u.jsx)("input",{id:"form-name-input",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",value:l||"",onChange:function(e){d(e.target.value)},required:!0,minLength:"2",maxLength:"40",className:"popup__field popup__field_type_name"}),Object(u.jsx)("span",{className:"form-name-input-error"}),Object(u.jsx)("input",{id:"form-description-input",type:"text",name:"description",placeholder:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:f||"",onChange:function(e){_(e.target.value)},required:!0,minLength:"2",maxLength:"200",className:"popup__field popup__field_type_description"}),Object(u.jsx)("span",{className:"form-description-input-error"})]})};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,s=c.a.useContext(m),o=c.a.useRef("");return c.a.useEffect((function(){o.current.value=s.avatar}),[s]),Object(u.jsxs)(j,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0410\u0432\u0430\u0442\u0430\u0440",name:"avatarpopup",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,handleSubmit:function(e){e.preventDefault(),a({avatar:o.current.value})},children:[Object(u.jsx)("input",{type:"url",id:"form-avatar",className:"popup__field popup__field_avatar_imageUrl",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:o}),Object(u.jsx)("span",{className:"form-avatar-error",id:"form-avatar-error"})]})};var g=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,s=c.a.useState(""),o=Object(r.a)(s,2),i=o[0],l=o[1],d=c.a.useState(""),p=Object(r.a)(d,2),h=p[0],m=p[1];return Object(u.jsxs)(j,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"cardpopup",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,handleSubmit:function(e){e.preventDefault(),a({name:i,link:h})},children:[Object(u.jsx)("input",{type:"text",id:"form-place-input",name:"placeName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){l(e.target.value)},minLength:"2",maxLength:"30",required:!0,className:"popup__field popup__field_type_place"}),Object(u.jsx)("span",{className:"form-place-input-error"}),Object(u.jsx)("input",{type:"url",id:"form-link-input",name:"form-link-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){m(e.target.value)},required:!0,minLength:"2",className:"popup__field popup__field_type_imageUrl"}),Object(u.jsx)("span",{className:"form-link-input-error"})]})};var N=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),o=Object(r.a)(s,2),l=o[0],h=o[1],f=c.a.useState(!1),O=Object(r.a)(f,2),v=O[0],N=O[1],y=c.a.useState({isOpen:!1}),S=Object(r.a)(y,2),L=S[0],E=S[1],U=c.a.useState(""),P=Object(r.a)(U,2),T=P[0],A=P[1],D=c.a.useState([]),I=Object(r.a)(D,2),J=I[0],q=I[1];function w(){a(!1),N(!1),h(!1),E({isOpen:!1})}return c.a.useEffect((function(){x.getInitialCards().then((function(e){q(e)})).catch((function(e){console.log(e)}))}),[]),c.a.useEffect((function(){x.getUserInfo().then((function(e){A(e)})).catch((function(e){console.log(e)}))}),[]),Object(u.jsx)(m.Provider,{value:T,children:Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)("div",{className:"page__root",children:[Object(u.jsx)(d,{}),Object(u.jsx)(_,{onEditProfile:function(){a(!0)},onAddPlace:function(){h(!0)},onEditAvatar:function(){N(!0)},onCardClick:function(e){var t=e.name,n=e.link,a=e.isOpen;E({name:t,link:n,isOpen:!a})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===T._id}));x.changeLikeCardStatus(e._id,!t).then((function(t){console.log(t);var n=J.map((function(n){return n._id===e._id?t:n}));q(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){x.removeCard(e._id).then((function(){var t=J.filter((function(t){return t!==e}));q(t)}))},cards:J}),Object(u.jsx)(p,{}),Object(u.jsx)(C,{isOpen:n,onClose:w,onUpdateUser:function(e){var t=e.name,n=e.about;x.editUserInfo(t,n).then((function(e){A(e),w()})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(k,{isOpen:v,onClose:w,onUpdateAvatar:function(e){var t=e.avatar;x.editUserAvatar(t).then((function(e){A(e),w()})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(g,{isOpen:l,onClose:w,onAddPlace:function(e){var t=e.name,n=e.link;x.addCard(t,n).then((function(e){q([e].concat(Object(i.a)(J))),w()})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(j,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"remove-card",buttonText:"\u0414\u0430",onClose:w}),Object(u.jsx)(b,{card:L,onClose:w})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),y()},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.4954e8a9.chunk.js.map