(function(t){function e(e){for(var n,l,s=e[0],c=e[1],i=e[2],u=0,f=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,i||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},a={app:0},r=[];function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-todo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var d=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},1235:function(t,e,o){"use strict";o("2e91")},2264:function(t,e,o){},2501:function(t,e,o){"use strict";o("e8c2")},"2e91":function(t,e,o){},3389:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("TodoHeader"),o("TodoInput"),o("TodoList"),o("TodoFooter")],1)},r=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v("ToDo it!")])])}],c=(o("1235"),o("2877")),i={},d=Object(c["a"])(i,l,s,!1,null,"428a8177",null),u=d.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inputBox shadow"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),o("span",{staticClass:"addContainer",on:{click:t.addTodo}},[o("i",{staticClass:"fas fa-plus addBtn"})]),t.showModal?o("Modal",{on:{close:function(e){t.showModal=!1}}},[o("h3",{staticClass:"modalHeader",attrs:{slot:"header"},slot:"header"},[t._v(" 경 고! "),o("i",{staticClass:"closeModalBtn fas fa-times",attrs:{title:"닫기"},on:{click:function(e){t.showModal=!1}}})]),o("span",{attrs:{slot:"body"},slot:"body"},[t._v(" 아무것도 입력하지 않으셨습니다. ")])]):t._e()],1)},m=[],p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" default header ")]}))],2),o("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" default body ")]}))],2)])])])])},h=[],v=(o("a9dc"),{}),b=Object(c["a"])(v,p,h,!1,null,null,null),g=b.exports,I={data:function(){return{newTodoItem:"",showModal:!1}},methods:{addTodo:function(){""!==this.newTodoItem?(this.$store.commit("addOneItem",this.newTodoItem),this.clearInput()):this.showModal=!this.showModal},clearInput:function(){this.newTodoItem=""}},components:{Modal:g}},y=I,_=(o("2501"),Object(c["a"])(y,f,m,!1,null,"1218079d",null)),O=_.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(this.storedTodoItems,(function(e,n){return o("li",{key:e.item,staticClass:"shadow"},[o("i",{staticClass:"checkBtn fas fa-check",class:{checkBtnCompleted:e.completed},on:{click:function(o){return t.toggleComplete({todoItem:e,index:n})}}}),o("span",{class:{textCompleted:e.completed}},[t._v(" "+t._s(e.item)+" ")]),o("span",{staticClass:"removeBtn",on:{click:function(o){return t.removeTodo({todoItem:e,index:n})}}},[o("i",{staticClass:"fas fa-trash-alt"})])])})),0)],1)},T=[],C=o("5530"),x=o("2f62"),j={methods:Object(C["a"])({},Object(x["c"])({removeTodo:"removeOneItem",toggleComplete:"toggleOneItem"})),computed:Object(C["a"])({},Object(x["b"])(["storedTodoItems"]))},k=j,S=(o("f0fb"),Object(c["a"])(k,w,T,!1,null,"952e5768",null)),M=S.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearAllContainer"},[o("span",{staticClass:"clearAllBtn",on:{click:t.clearTodo}},[t._v("Clear All")])])},P=[],$={methods:Object(C["a"])({},Object(x["c"])({clearTodo:"clearAllItems"}))},B=$,A=(o("9b73"),Object(c["a"])(B,E,P,!1,null,"7b7beefa",null)),J=A.exports,N={components:{TodoHeader:u,TodoInput:O,TodoList:M,TodoFooter:J}},H=N,F=(o("034f"),Object(c["a"])(H,a,r,!1,null,null,null)),L=F.exports,D=(o("a434"),{fetch:function(){var t=[];if(localStorage.length>0)for(var e=0;e<localStorage.length;e++)"loglevel:webpack-dev-server"!==localStorage.key(e)&&t.push(JSON.parse(localStorage.getItem(localStorage.key(e))));return t}}),q={todoItems:D.fetch()},z={storedTodoItems:function(t){return t.todoItems}},G={addOneItem:function(t,e){var o={completed:!1,item:e};localStorage.setItem(e,JSON.stringify(o)),t.todoItems.push(o)},removeOneItem:function(t,e){localStorage.removeItem(e.todoItem.item),t.todoItems.splice(e.index,1)},toggleOneItem:function(t,e){t.todoItems[e.index].completed=!t.todoItems[e.index].completed,localStorage.removeItem(e.todoItem.item),localStorage.setItem(e.todoItem.item,JSON.stringify(e.todoItem))},clearAllItems:function(t){localStorage.clear(),t.todoItems=[]}},K={state:q,getters:z,mutations:G};n["a"].use(x["a"]);var Q=new x["a"].Store({modules:{todoApp:K}});new n["a"]({el:"#app",store:Q,render:function(t){return t(L)}})},"85ec":function(t,e,o){},"90bd":function(t,e,o){},"9b73":function(t,e,o){"use strict";o("90bd")},a9dc:function(t,e,o){"use strict";o("3389")},e8c2:function(t,e,o){},f0fb:function(t,e,o){"use strict";o("2264")}});
//# sourceMappingURL=app.948ba5a3.js.map