webpackJsonp([29],{2003:function(n,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e(0),i=e.n(t),o=e(3),A=e.n(o),r=e(19),s=e(23),f=e(21),l=e(2173),m=e(894),d=e(477),c=e(3248),p=(e.n(c),new d.a),u=function(n){var a=function(){p.flushNonAdvisorData(),window.location.href=s.f[n.role].adminPath};return i.a.createElement(m.a,{className:"admin-navbar parsing--hidden"},i.a.createElement(l.a,{button:!0,className:"back-button--inverse",onClick:a,name:n.t("common.backToAdmin")}),function(){return i.a.createElement("div",{className:"admin-navbar__user-info"},n.t("common.impersonatingUser")," ",n.t("roles."+n.role),"\xa0",i.a.createElement("strong",null,n.details.firstName," ",n.details.lastName),"\xa0 (ID: ",n.details.olivId,")}")}())};u.propTypes={details:A.a.shape({firstName:A.a.string,lastName:A.a.string,olivId:A.a.string}).isRequired,role:A.a.oneOf([s.f.employer.name,s.f.candidate.name]).isRequired},a.default=Object(r.g)(Object(f.a)(u))},3248:function(n,a,e){var t=e(3249);"string"===typeof t&&(t=[[n.i,t,""]]);var i={hmr:!0};i.transform=void 0;e(1999)(t,i);t.locals&&(n.exports=t.locals)},3249:function(n,a,e){a=n.exports=e(1998)(!0),a.push([n.i,".admin-navbar{position:fixed;z-index:6000;padding:0 16px;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;top:0;height:56px;background-color:#2f3233;color:#fff;width:100%;font-weight:300;font-size:14px}.main--offline .admin-navbar{top:56px}.admin-navbar .back-button,.admin-navbar a{color:#fff}.admin-navbar .back-button:hover,.admin-navbar a:hover{color:#fff;text-decoration:underline}.admin-navbar__user-info{margin-left:auto;margin-right:auto}","",{version:3,sources:["C:/projects/oliv-frontend/src/Shared/components/AdminNavbar/AdminNavbar.scss"],names:[],mappings:"AAAA,cACE,eAAgB,AAChB,aAAc,AACd,eAAgB,AAChB,8BAAgC,AAChC,uBAAyB,AACzB,sBAAuB,AACnB,8BAA+B,AACnC,sBAAuB,AACnB,mBAAoB,AACxB,MAAO,AACP,YAAa,AACb,yBAA0B,AAC1B,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,cAAgB,CAAE,AAClB,6BACE,QAAU,CAAE,AACd,2CAEE,UAAY,CAAE,AACd,uDAEE,WAAY,AACZ,yBAA2B,CAAE,AAEnC,yBACE,iBAAkB,AAClB,iBAAmB,CAAE",file:"AdminNavbar.scss",sourcesContent:[".admin-navbar {\n  position: fixed;\n  z-index: 6000;\n  padding: 0 16px;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  top: 0;\n  height: 56px;\n  background-color: #2f3233;\n  color: #fff;\n  width: 100%;\n  font-weight: 300;\n  font-size: 14px; }\n  .main--offline .admin-navbar {\n    top: 56px; }\n  .admin-navbar a,\n  .admin-navbar .back-button {\n    color: #fff; }\n    .admin-navbar a:hover,\n    .admin-navbar .back-button:hover {\n      color: #fff;\n      text-decoration: underline; }\n\n.admin-navbar__user-info {\n  margin-left: auto;\n  margin-right: auto; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=AdminNavbar.a766baf9.chunk.js.map