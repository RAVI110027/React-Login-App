webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/signup/index.js":
/*!************************************!*\
  !*** ./components/signup/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../input/index */ "./components/input/index.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var SignUp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SignUp, _React$Component);

  function SignUp() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SignUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SignUp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      signUp: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      errors: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "schema", {
      firstName: joi_browser__WEBPACK_IMPORTED_MODULE_9___default.a.string().required(),
      lastName: joi_browser__WEBPACK_IMPORTED_MODULE_9___default.a.string().required(),
      // email: Joi.email({ minDomainAtoms: 2 }).required(), 
      password: joi_browser__WEBPACK_IMPORTED_MODULE_9___default.a.string().required(),
      confirmPassword: joi_browser__WEBPACK_IMPORTED_MODULE_9___default.a.string().required()
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "validate", function () {
      var result = joi_browser__WEBPACK_IMPORTED_MODULE_9___default.a.validate(_this.state.signUp, _this.schema, {
        abor: abor
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault(); //Call to Server 

      console.log("SignUp Form Submitted");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e) {
      var signUp = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.signUp);

      signUp[e.currentTarget.name] = e.currentTarget.value;

      _this.setState({
        signUp: signUp
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSignUp", function () {
      console.log("First Name: " + _this.state.signUp.firstName);
      console.log("Last Name: " + _this.state.signUp.lastName);
      console.log("Email: " + _this.state.signUp.email);
      console.log("Password: " + _this.state.signUp.password);
      console.log("Confirm Password: " + _this.state.signUp.confirmPassword);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SignUp, [{
    key: "render",
    value: function render() {
      var signUp = this.state.signUp;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        className: "container"
      }, __jsx("h1", {
        className: "text-center"
      }, "SignUp Page"), __jsx("form", {
        onSubmit: this.handleSubmit
      }, __jsx(_input_index__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "firstName",
        value: signUp.firstName,
        label: "First Name",
        onChange: this.handleChange
      }), __jsx(_input_index__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "lastName",
        value: signUp.lastName,
        label: "Last Name",
        onChange: this.handleChange
      }), __jsx(_input_index__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "email",
        value: signUp.email,
        label: "Email Id",
        onChange: this.handleChange
      }), __jsx(_input_index__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "password",
        value: signUp.password,
        label: "Password",
        onChange: this.handleChange
      }), __jsx(_input_index__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "confirmPassword",
        value: signUp.confirmPassword,
        label: "Confirm Password",
        onChange: this.handleChange
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/login"
      }, __jsx("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Submit [Real]")), __jsx("button", {
        type: "submit",
        className: "btn btn-primary",
        onClick: this.handleSignUp
      }, "Submit For Data"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/login"
      }, __jsx("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Already A Member")))));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=signup.js.9ea2b6ae723a14f575ef.hot-update.js.map