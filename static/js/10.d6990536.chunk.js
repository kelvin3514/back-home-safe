(this["webpackJsonpback-home-safe"]=this["webpackJsonpback-home-safe"]||[]).push([[10],{475:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a,r,i=n(3),c=(n(0),n(57)),o=n(4),s=n.p+"static/media/back.7bf7a56f.svg",d=n(1),l=function(e){var t=e.name,n=e.backPath;return Object(d.jsxs)(u,{children:[n&&Object(d.jsx)(c.b,{to:n,children:Object(d.jsx)(b,{src:s})}),t]})},b=o.b.img(a||(a=Object(i.a)(["\n  height: 20px;\n  top: 14px;\n  left: 16px;\n  position: absolute;\n"]))),u=o.b.div(r||(r=Object(i.a)(["\n  color: #ffffff;\n  background-color: #12b188;\n  text-align: center;\n  line-height: 48px;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n"])))},498:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a,r=n(3),i=n(115),c=n.n(i),o=n(155),s=n(9),d=n(600),l=n(575),b=n(576),u=n(577),p=n(578),j=n(508),h=n(0),m=n(158),f=n(433),O=n(57),v=n(574),g=n(4),x=n(154);!function(e){e.GET_USER_MEDIA_NOT_FOUND="GET_USER_MEDIA_NOT_FOUND",e.CAMERA_ACTIVATE_ERROR="CAMERA_ACTIVATE_ERROR"}(a||(a={}));var _,E,C=function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("mediaDevices"in navigator)){e.next=11;break}return e.prev=1,e.abrupt("return",navigator.mediaDevices.getUserMedia({video:t?{deviceId:t}:{facingMode:"environment"},audio:!1}));case 5:throw e.prev=5,e.t0=e.catch(1),console.log(e.t0),new Error(a.CAMERA_ACTIVATE_ERROR);case 9:e.next=12;break;case 11:throw new Error(a.GET_USER_MEDIA_NOT_FOUND);case 12:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t){return e.apply(this,arguments)}}(),I=n(1),k=function(e){var t=e.onFrame,n=e.suppressError,r=void 0!==n&&n,i=Object(f.a)("qr_reader").t,g=Object(x.b)().preferredCameraId,_=Object(h.useState)(!1),E=Object(s.a)(_,2),k=E[0],y=E[1],R=Object(h.useState)(!1),T=Object(s.a)(R,2),N=T[0],M=T[1],S=Object(h.useRef)(null),D=Object(h.useRef)(null),U=Object(v.a)((function(){var e=D.current,n=S.current;if(e&&n&&n.readyState===n.HAVE_ENOUGH_DATA){var a=e.getContext("2d");if(!a)return;e.height=n.videoHeight,e.width=n.videoWidth,a.drawImage(n,0,0,e.width,e.height);var r=a.getImageData(0,0,e.width,e.height);t&&t(r)}}),!1),F=Object(s.a)(U,2),V=F[0],G=F[1],L=Object(h.useCallback)(Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=S.current){e.next=3;break}return e.abrupt("return");case 3:return console.log("preferredCameraId",g),e.prev=4,e.next=7,C("AUTO"===g?void 0:g);case 7:if(n=e.sent){e.next=10;break}return e.abrupt("return");case 10:t.srcObject=n,t.play(),G(),e.next=27;break;case 15:e.prev=15,e.t0=e.catch(4),e.t1=e.t0.message,e.next=e.t1===a.GET_USER_MEDIA_NOT_FOUND?20:e.t1===a.CAMERA_ACTIVATE_ERROR?22:26;break;case 20:return y(!0),e.abrupt("break",27);case 22:if(!r){e.next=24;break}return e.abrupt("return");case 24:return M(!0),e.abrupt("break",27);case 26:console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[4,15]])}))),[G,g,r]);return Object(h.useEffect)((function(){var e=S.current;return L(),function(){if(V(),e){var t=e.srcObject;if(!t)return;t.getTracks().forEach((function(e){e.stop()})),e.srcObject=null}}}),[G,V,S,L,g]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(w,{ref:S,playsInline:!0}),Object(I.jsx)(A,{ref:D}),Object(I.jsxs)(d.a,{open:k,keepMounted:!0,"aria-labelledby":"unsupported-device-title","aria-describedby":"unsupported-device-description",children:[Object(I.jsx)(l.a,{id:"unsupported-device-title",children:"\u4e0d\u652f\u63f4\u7684\u88dd\u7f6e"}),Object(I.jsx)(b.a,{children:Object(I.jsxs)(u.a,{id:"unsupported-device-description",children:[i("message.doesnt_support_get_user_media"),m.isIOS&&Object(I.jsx)(I.Fragment,{children:i("message.sure_above_ios_14")})]})}),Object(I.jsx)(p.a,{children:Object(I.jsx)(O.b,{to:"/",children:Object(I.jsx)(j.a,{color:"primary",children:i("button.back_home")})})})]}),Object(I.jsxs)(d.a,{open:N,keepMounted:!0,"aria-labelledby":"camera-activation-title","aria-describedby":"camera-activation-description",children:[Object(I.jsx)(l.a,{id:"camera-activation-title",children:i("dialog.cannot_open_camera.title")}),Object(I.jsx)(b.a,{children:Object(I.jsx)(u.a,{id:"camera-activation-description",children:i("dialog.cannot_open_camera.content")})}),Object(I.jsxs)(p.a,{children:[Object(I.jsx)(O.b,{to:"/",children:Object(I.jsx)(j.a,{color:"primary",children:i("button.back_home")})}),Object(I.jsx)(O.b,{to:"/cameraSetting",children:Object(I.jsx)(j.a,{color:"primary",children:i("button.camera_setting")})})]})]})]})},w=g.b.video(_||(_=Object(r.a)(["\n  /* Make video to at least 100% wide and tall */\n  min-width: 100%;\n  min-height: 100%;\n\n  /* Setting width & height to auto prevents the browser from stretching or squishing the video */\n  width: auto;\n  height: auto;\n\n  /* Center the video */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),A=g.b.canvas(E||(E=Object(r.a)(["\n  display: none;\n"])))},541:function(e,t,n){"use strict";var a=n(2),r=n(7),i=n(0),c=(n(6),n(12)),o=n(17),s=n(432),d=n(477),l=n(44),b=n(483),u=n(30),p="undefined"===typeof window?i.useEffect:i.useLayoutEffect,j=i.forwardRef((function(e,t){var n=e.alignItems,o=void 0===n?"center":n,j=e.autoFocus,h=void 0!==j&&j,m=e.button,f=void 0!==m&&m,O=e.children,v=e.classes,g=e.className,x=e.component,_=e.ContainerComponent,E=void 0===_?"li":_,C=e.ContainerProps,I=(C=void 0===C?{}:C).className,k=Object(r.a)(C,["className"]),w=e.dense,A=void 0!==w&&w,y=e.disabled,R=void 0!==y&&y,T=e.disableGutters,N=void 0!==T&&T,M=e.divider,S=void 0!==M&&M,D=e.focusVisibleClassName,U=e.selected,F=void 0!==U&&U,V=Object(r.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),G=i.useContext(b.a),L={dense:A||G.dense||!1,alignItems:o},P=i.useRef(null);p((function(){h&&P.current&&P.current.focus()}),[h]);var H=i.Children.toArray(O),B=H.length&&Object(d.a)(H[H.length-1],["ListItemSecondaryAction"]),$=i.useCallback((function(e){P.current=u.findDOMNode(e)}),[]),q=Object(l.a)($,t),z=Object(a.a)({className:Object(c.a)(v.root,g,L.dense&&v.dense,!N&&v.gutters,S&&v.divider,R&&v.disabled,f&&v.button,"center"!==o&&v.alignItemsFlexStart,B&&v.secondaryAction,F&&v.selected),disabled:R},V),J=x||"li";return f&&(z.component=x||"div",z.focusVisibleClassName=Object(c.a)(v.focusVisible,D),J=s.a),B?(J=z.component||x?J:"div","li"===E&&("li"===J?J="div":"li"===z.component&&(z.component="div")),i.createElement(b.a.Provider,{value:L},i.createElement(E,Object(a.a)({className:Object(c.a)(v.container,I),ref:q},k),i.createElement(J,z,H),H.pop()))):i.createElement(b.a.Provider,{value:L},i.createElement(J,Object(a.a)({ref:q},z),H))}));t.a=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(j)},605:function(e,t,n){"use strict";n.r(t);var a,r,i,c,o=n(3),s=n(604),d=n(596),l=n(7),b=n(24),u=n(2),p=n(0),j=(n(6),n(12)),h=n(17),m=n(541),f=p.forwardRef((function(e,t){var n,a=e.classes,r=e.className,i=e.component,c=void 0===i?"li":i,o=e.disableGutters,s=void 0!==o&&o,d=e.ListItemClasses,b=e.role,h=void 0===b?"menuitem":b,f=e.selected,O=e.tabIndex,v=Object(l.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==O?O:-1),p.createElement(m.a,Object(u.a)({button:!0,role:h,tabIndex:n,component:c,selected:f,disableGutters:s,classes:Object(u.a)({dense:a.dense},d),className:Object(j.a)(a.root,r,f&&a.selected,!s&&a.gutters),ref:t},v))})),O=Object(h.a)((function(e){return{root:Object(u.a)({},e.typography.body1,Object(b.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(u.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(f),v=n(573),g=n(572),x=n(458),_=n(75),E=n(433),C=n(4),I=n(475),k=n(498),w=n(154),A=n(1),y=(t.default=function(){var e=Object(E.a)("camera_setting").t,t=Object(w.b)(),n=t.preferredCameraId,a=t.setPreferredCameraId,r=t.cameraList;return Object(A.jsxs)(y,{children:[Object(A.jsx)(I.a,{backPath:"/",name:e("name")}),Object(A.jsx)(T,{children:Object(A.jsxs)(N,{children:[Object(A.jsx)(s.a,{id:"cameraId",children:e("form.camera_choice.label")}),Object(A.jsxs)(d.a,{labelId:"cameraId",id:"demo-simple-select",value:n,onChange:function(e){a(e.target.value||"AUTO")},children:[Object(A.jsx)(O,{value:"AUTO",children:"\u81ea\u52d5"}),r.map((function(e){var t=e.deviceId,n=e.label;return Object(A.jsx)(O,{value:t,children:Object(x.a)(n)||Object(_.a)(n)?t:n},"deviceId")}))]}),Object(A.jsx)(v.a,{children:e("form.camera_choice.explain")})]})}),Object(A.jsx)(R,{children:Object(A.jsx)(k.a,{suppressError:!0})})]})},C.b.div(a||(a=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n"])))),R=C.b.div(r||(r=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n"]))),T=C.b.div(i||(i=Object(o.a)(["\n  width: 100%;\n  display: flex;\n"]))),N=Object(C.b)(g.a)(c||(c=Object(o.a)(["\n  width: 100%;\n\n  &.MuiFormControl-root {\n    margin: 8px;\n  }\n"])))}}]);
//# sourceMappingURL=10.d6990536.chunk.js.map