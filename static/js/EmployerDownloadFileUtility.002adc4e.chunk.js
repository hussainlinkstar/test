webpackJsonp([30],{2048:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o(9),r=o.n(t),a=o(10),i=o.n(a),s=o(12),c=o.n(s),l=o(4),p=o.n(l),u=o(5),d=o.n(u),m=o(13),f=o.n(m),y=o(14),w=o.n(y),v=o(0),h=o.n(v),_=o(3),A=o.n(_),b=o(19),E=o(3134),g=o.n(E),k=o(21),x=o(191),j=o(4604),C=(o.n(j),5e3),F=function(e){function n(){var e,o,t,a,s=this;p()(this,n);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return o=t=f()(this,(e=n.__proto__||c()(n)).call.apply(e,[this].concat(u))),t.downloadFiles=i()(r.a.mark(function e(){var n,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.match.params.filename,e.prev=1,e.next=4,t.props.downloadRoute(n);case 4:o=e.sent,g()(o.data,n),setTimeout(function(){window.location.href=window.location.origin+"/employer/job-offers/active"},C),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.warn("Could not download file:",e.t0),window.location.href=window.location.origin+"/employer/job-offers/active";case 13:case"end":return e.stop()}},e,s,[[1,9]])})),a=o,f()(t,a)}return w()(n,e),d()(n,[{key:"componentDidMount",value:function(){function e(){return n.apply(this,arguments)}var n=i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.downloadFiles();case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){return h.a.createElement("div",{className:"employer-payment__container parsing--hidden"},h.a.createElement("div",{className:"employer-payment-redirect-utility"},h.a.createElement(x.a,{className:"employer-plan-payment__loader",active:!0,description:this.props.t("files.downloading",{timeout:C/1e3})})))}}]),n}(v.Component);F.propTypes={downloadRoute:A.a.func.isRequired},n.default=Object(b.g)(Object(k.a)(F))},4604:function(e,n,o){var t=o(4605);"string"===typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0};r.transform=void 0;o(1999)(t,r);t.locals&&(e.exports=t.locals)},4605:function(e,n,o){n=e.exports=o(1998)(!0),n.push([e.i,".employer-payment__container{display:block!important}","",{version:3,sources:["C:/projects/oliv-frontend/src/Employer/components/EmployerDownloadFileUtility/EmployerDownloadFileUtility.scss"],names:[],mappings:"AAAA,6BACE,uBAA0B,CAAE",file:"EmployerDownloadFileUtility.scss",sourcesContent:[".employer-payment__container {\n  display: block !important; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=EmployerDownloadFileUtility.002adc4e.chunk.js.map