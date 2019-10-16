webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/login/index.js":
/*!***********************************!*\
  !*** ./components/login/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../input/index */ "./components/input/index.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      login: {
        username: "",
        password: ""
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleLoginSubmit", function (e) {
      e.preventDefault(); //Call to Server

      console.log("Login Form Submitted");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e) {
      // const errors = {...this.state.errors};
      // const errorMessage = this.validateProperty(e.currentTarget);
      // if (errorMessage) errors[e.currentTarget.name] = errorMessage;
      // else delete errors[e.currentTarget.name];
      var login = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.login);

      signUp[e.currentTarget.name] = e.currentTarget.value;

      _this.setState({
        signUp: signUp,
        errors: errors
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handlelogin", function () {
      console.log("Email: " + _this.state.login.username);
      console.log("Password: " + _this.state.login.password);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "render",
    value: function render() {
      var login = this.state.login;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        className: "container"
      }, __jsx("h1", {
        className: "text-center"
      }, "Login Page..."), __jsx("form", {
        onSubmit: this.handleLoginSubmit
      }, __jsx(_input_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "username",
        value: login.username,
        label: "Email Address" // onChange={this.handleChange}

      }), __jsx(_input_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "password",
        value: login.password,
        label: "Password" // onChange={this.handleChange}

      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/home"
      }, __jsx("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Submit")), __jsx("button", {
        type: "submit",
        className: "btn btn-primary",
        onClick: this.handlelogin
      }, "Submit For Data"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/signup"
      }, __jsx("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Not A Member")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/forgot-password"
      }, __jsx("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Forgot Password")))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]); // import React from 'react';
// import Link from 'next/link';
// export default function Login() {
//     return (
//     <React.Fragment>
//         <div>
//             Login Page
//         </div>
//         <Link href="/signup"><button>Not A Member</button></Link>
//         <Link href="/forgot-password"><button>Forgot Password</button></Link>
//     </React.Fragment>
//     )
// }



{
  /* <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" name="email"/>
                        </div>
                         <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password"/>
                        </div> */
}

/***/ })

})
//# sourceMappingURL=login.js.dff61b2dab18f3632370.hot-update.js.map