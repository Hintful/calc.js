(this["webpackJsonpcalc.js"]=this["webpackJsonpcalc.js"]||[]).push([[0],{18:function(_,e,t){},19:function(_,e,t){"use strict";t.p},20:function(_,e,t){},25:function(_,e,t){"use strict";t.r(e);var s=t(2),r=t.n(s),i=t(5),c=t.n(i),n=(t(18),t(6)),a=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,s=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(_),s(_),r(_),i(_),c(_)}))},u=t(0);c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(n.a,{})}),document.getElementById("root")),a()},6:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Kurt_Documents_Waterloo_Git_calc_js_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),D_Kurt_Documents_Waterloo_Git_calc_js_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),D_Kurt_Documents_Waterloo_Git_calc_js_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),D_Kurt_Documents_Waterloo_Git_calc_js_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),D_Kurt_Documents_Waterloo_Git_calc_js_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12),_logo_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(19),_App_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20),_App_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(5),react_dom__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__),react_helmet__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(9),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__),TITLE="calc.js";function isOp(_){return"+"===_||"-"===_||"/"===_||"*"===_}var Calculator=function(_React$Component){Object(D_Kurt_Documents_Waterloo_Git_calc_js_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_React$Component);var _super=Object(D_Kurt_Documents_Waterloo_Git_calc_js_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(_){var e;return Object(D_Kurt_Documents_Waterloo_Git_calc_js_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(e=_super.call(this,_)).state={history:"",value:"0",demicalUsed:!1,evaluated:!1},e.inputNumber=e.inputNumber.bind(Object(D_Kurt_Documents_Waterloo_Git_calc_js_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(D_Kurt_Documents_Waterloo_Git_calc_js_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"inputNumber",value:function(_){"."===_?"0"!==this.state.value||this.state.decimalUsed?isOp(this.state.value)?this.setState((function(_){return{value:"0.",history:_.history.concat("0."),decimalUsed:!0}})):this.state.decimalUsed||this.setState((function(e){return{value:e.value.concat(_),history:e.history.concat(_),decimalUsed:!0}})):this.setState({value:"0.",history:"0.",decimalUsed:!0}):isOp(this.state.value)?this.setState((function(e){return{value:_,history:e.history.concat(_)}})):"0"===this.state.value?this.setState({value:_,history:_}):"."!==_&&this.setState((function(e){return{value:e.value.concat(_),history:e.history.concat(_)}}))}},{key:"inputOperation",value:function(_){var e=this.state.history.length-1;if(this.state.evaluated){var t=this.state.value;this.clear(),this.setState({value:_,history:t.concat(_)})}else this.setState({value:_,decimalUsed:!1}),"-"===_?isOp(this.state.history[e])?isOp(this.state.history[e])&&!isOp(this.state.history[e-1])?this.setState((function(e){return{history:e.history.concat(_)}})):isOp(this.state.history[e])&&isOp(this.state.history[e-1])&&this.setState((function(e){return{history:e.history.substr(0,e.history.length-1).concat(_)}})):this.setState((function(e){return{history:e.history.concat(_)}})):isOp(this.state.history[e])?isOp(this.state.history[e])&&!isOp(this.state.history[e-1])?this.setState((function(e){return{history:e.history.substr(0,e.history.length-1).concat(_)}})):isOp(this.state.history[e])&&isOp(this.state.history[e-1])&&this.setState((function(e){return{history:e.history.substr(0,e.history.length-2).concat(_)}})):this.setState((function(e){return{history:e.history.concat(_)}}))}},{key:"clear",value:function(){this.setState({history:"",value:"0",decimalUsed:!1,evaluated:!1})}},{key:"evaluate",value:function evaluate(){var result=eval(this.state.history).toString();this.setState((function(_){return{value:result,history:_.history.concat("=").concat(result),evaluated:!0,decimalUsed:!1}}))}},{key:"render",value:function(){var _=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{class:"main",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{class:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{class:"display-div",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{id:"display-history",children:this.state.history}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{id:"display",children:this.state.value})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{class:"input-div",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"zero",onClick:function(){return _.inputNumber("0")},children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"one",onClick:function(){return _.inputNumber("1")},children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"two",onClick:function(){return _.inputNumber("2")},children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"three",onClick:function(){return _.inputNumber("3")},children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"four",onClick:function(){return _.inputNumber("4")},children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"five",onClick:function(){return _.inputNumber("5")},children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"six",onClick:function(){return _.inputNumber("6")},children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"seven",onClick:function(){return _.inputNumber("7")},children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"eight",onClick:function(){return _.inputNumber("8")},children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"nine",onClick:function(){return _.inputNumber("9")},children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key calc-key",id:"equals",onClick:function(){return _.evaluate()},children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key op-key",id:"add",onClick:function(){return _.inputOperation("+")},children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key op-key",id:"subtract",onClick:function(){return _.inputOperation("-")},children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key op-key",id:"multiply",onClick:function(){return _.inputOperation("*")},children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key op-key",id:"divide",onClick:function(){return _.inputOperation("/")},children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key num-key",id:"decimal",onClick:function(){return _.inputNumber(".")},children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{class:"key clear-key",id:"clear",onClick:function(){return _.clear()},children:"AC"})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{class:"credit",children:["Coded and designed by ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a",{href:"https://kurtchoi.dev",target:"_blank",children:"Kurt Choi"})]})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);function App(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"App",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_9__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("title",{children:TITLE})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Calculator,{})]})}__webpack_exports__.a=App}},[[25,1,2]]]);
//# sourceMappingURL=main.e9c57f7e.chunk.js.map