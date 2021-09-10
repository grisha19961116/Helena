(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{11:function(t,e,a){t.exports={searchBar:"SearchBar_searchBar__3KDGD",searchBar__input:"SearchBar_searchBar__input__rrhpX",searchBar__btn:"SearchBar_searchBar__btn__22GvM"}},12:function(t,e,a){t.exports={sortBarWrapper:"SortBar_sortBarWrapper__3GCSo",sortBarWrapper__btn:"SortBar_sortBarWrapper__btn__1qrEt"}},14:function(t,e,a){t.exports={logoWrapper:"Logo_logoWrapper__3bbyN",logoStatistic:"Logo_logoStatistic__2PMQp"}},2:function(t,e,a){t.exports={detailWrapper:"DetailCountry_detailWrapper__2urBV",detailNotification:"DetailCountry_detailNotification__biCLv",detailNotification__title:"DetailCountry_detailNotification__title__1UpBo",detailNotification__row:"DetailCountry_detailNotification__row__SWHtT",detailNotification__row__title:"DetailCountry_detailNotification__row__title__2K3LE",detailNotification__row__amount:"DetailCountry_detailNotification__row__amount__3ThJh",detailNotification__btn:"DetailCountry_detailNotification__btn__QWE5C"}},24:function(t,e,a){t.exports={appWrapper:"App_appWrapper__39w-7"}},25:function(t,e,a){t.exports={headerWrapper:"Header_headerWrapper__2FgT9"}},35:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var i=a(0),r=a(1),n=a.n(r),c=a(4),s=a.n(c),o=(a(33),a(26)),l=(a(34),a(35),a(27)),_=a(5),u=a.n(_),d=a(10),p=a(6),h=a(24),j=a.n(h),b=a(37);b.defaults.baseURL="https://api.covid19api.com/";var f=function(){var t=Object(d.a)(u.a.mark((function t(){var e,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/summary");case 2:return e=t.sent,a=e.data.Countries,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=a(7),x=a.n(m),O=a(2),N=a.n(O),g=a.p+"static/media/heart.8ddee724.svg",v=function(t){var e=t.country,a=t.handleCloseDetail,r=e.Country,n=e.TotalConfirmed,c=e.TotalDeaths,s=e.TotalRecovered;return Object(i.jsx)("div",{className:N.a.detailWrapper,id:"close",onClick:a,children:Object(i.jsxs)("div",{className:N.a.detailNotification,children:[Object(i.jsx)("h3",{className:N.a.detailNotification__title,children:r}),Object(i.jsxs)("div",{className:N.a.detailNotification__row,children:[Object(i.jsx)("img",{src:g,width:"30px",height:"30px",alt:"heart"}),Object(i.jsx)("h4",{className:N.a.detailNotification__row__title,children:"Total Confirmed"}),Object(i.jsx)("h4",{className:N.a.detailNotification__row__amount,children:n})]}),Object(i.jsxs)("div",{className:N.a.detailNotification__row,children:[Object(i.jsx)("img",{src:g,width:"30px",height:"30px",alt:"death"}),Object(i.jsx)("h4",{className:N.a.detailNotification__row__title,children:"Total Deaths"}),Object(i.jsx)("h4",{className:N.a.detailNotification__row__amount,children:c})]}),Object(i.jsxs)("div",{className:N.a.detailNotification__row,children:[Object(i.jsx)("img",{src:g,width:"30px",height:"30px",alt:"recovered"}),Object(i.jsx)("h4",{className:N.a.detailNotification__row__title,children:"Total Recovered"}),Object(i.jsx)("h4",{className:N.a.detailNotification__row__amount,children:s})]}),Object(i.jsx)("button",{className:N.a.detailNotification__btn,id:"close",children:"ok"})]})})},C=function(t){var e=t.filter,a=t.countries,n=Object(r.useState)(!1),c=Object(p.a)(n,2),s=c[0],o=c[1],l=Object(r.useState)({}),_=Object(p.a)(l,2),u=_[0],d=_[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("ul",{className:x.a.countriesList,onClick:function(t){var e=t.target.tagName;if("H4"===e||"LI"===e){var i=t.target.dataset.id;d(a[i]),o(!0)}},children:a.length>0&&a.filter((function(t){return t.Country.toLowerCase().includes(e.toLowerCase())})).map((function(t,e){var a=t.Country,r=t.TotalConfirmed;return Object(i.jsxs)("li",{className:x.a.countriesList_item,"data-id":String(e),children:[Object(i.jsx)("h4",{className:x.a.countriesList_item_number,"data-id":String(e),children:e+1}),Object(i.jsx)("h4",{className:x.a.countriesList_item_country,"data-id":String(e),children:a}),Object(i.jsx)("h4",{className:x.a.countriesList_item_confirmed,"data-id":String(e),children:r})]},e)}))}),s&&Object(i.jsx)(v,{handleCloseDetail:function(t){"close"===t.target.id&&o(!1)},country:u})]})},y=a(25),w=a.n(y),L=a(14),B=a.n(L),S=a.p+"static/media/logo.1993b40e.png",W=function(){return Object(i.jsxs)("div",{className:B.a.logoWrapper,children:[Object(i.jsx)("img",{src:S,alt:"logo",width:"200px",height:"200px"}),Object(i.jsx)("h1",{className:B.a.logoStatistic,children:"statistic"})]})},D=a(11),T=a.n(D),k=a.p+"static/media/magnifier.acbfeeca.svg",F=function(t){var e=t.handleFilter;return Object(i.jsxs)("form",{className:T.a.searchBar,onChange:e,children:[Object(i.jsx)("input",{type:"text",className:T.a.searchBar__input,placeholder:"Write country name..."}),Object(i.jsx)("button",{className:T.a.searchBar__btn,type:"submit",children:Object(i.jsx)("img",{src:k,alt:"magnifier",width:"30px",height:"30px"})})]})},E=function(t){var e=t.handleFilter;return Object(i.jsxs)("div",{className:w.a.headerWrapper,children:[Object(i.jsx)(W,{}),Object(i.jsx)(F,{handleFilter:e})]})},G=a(12),H=a.n(G),K=function(t){var e=t.handleSort;return Object(i.jsxs)("div",{className:H.a.sortBarWrapper,onClick:e,children:[Object(i.jsx)("button",{className:H.a.sortBarWrapper__btn,"data-sort":"Country",type:"button",children:"Sort By Country Name"}),Object(i.jsx)("button",{className:H.a.sortBarWrapper__btn,"data-sort":"TotalConfirmed",type:"button",children:"Sort By TotalConfirmed"})]})};var J=function(){var t=Object(r.useState)([]),e=Object(p.a)(t,2),a=e[0],n=e[1],c=Object(r.useState)(""),s=Object(p.a)(c,2),o=s[0],_=s[1];return Object(r.useEffect)((function(){!function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),Object(i.jsxs)("div",{className:j.a.appWrapper,children:[Object(i.jsx)(E,{handleFilter:function(t){t.preventDefault();var e=t.target.value;_(e)}}),Object(i.jsx)(K,{handleSort:function(t){var e=t.target.dataset.sort;e&&n((function(t){return Object(l.a)(t.sort((function(t,a){return t[e]<a[e]?-1:t[e]>a[e]?1:0})))}))}}),Object(i.jsx)(C,{filter:o,countries:a})]})};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsxs)(r.Suspense,{fallback:null,children:[Object(i.jsx)(J,{}),Object(i.jsx)(o.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}),document.getElementById("root"))},7:function(t,e,a){t.exports={countriesList:"CountriesList_countriesList__3VGvd",countriesList_item:"CountriesList_countriesList_item__3WeKy",countriesList_item_number:"CountriesList_countriesList_item_number__10WKl",countriesList_item_country:"CountriesList_countriesList_item_country__1prkU",countriesList_item_confirmed:"CountriesList_countriesList_item_confirmed__3t-yL"}}},[[58,1,2]]]);
//# sourceMappingURL=main.320be3a1.chunk.js.map