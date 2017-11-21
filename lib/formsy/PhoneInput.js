'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsyReact = require('formsy-react');

var _validationRules = require('formsy-react/src/validationRules');

var _PhoneInput = require('../components/PhoneInput');

var _BaseFormsyComponent2 = require('./BaseFormsyComponent');

var _BaseFormsyComponent3 = _interopRequireDefault(_BaseFormsyComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _formsyReact.addValidationRule)('phone', function (values, value) {
  console.log(values, value);
  return !(0, _validationRules.isExisty)(values, value) || (0, _validationRules.isEmptyString)(values, value) || (0, _PhoneInput.isValidNumber)(value);
});

var PhoneInput = exports.PhoneInput = (_temp2 = _class = function (_BaseFormsyComponent) {
  _inherits(PhoneInput, _BaseFormsyComponent);

  function PhoneInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PhoneInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneInput.__proto__ || Object.getPrototypeOf(PhoneInput)).call.apply(_ref, [this].concat(args))), _this), _this.validationPhoneMessage = _this.props.validationPhoneMessage, _this.state = {
      value_state: null,
      simPhone: undefined,
      simCountry: undefined
    }, _this.onChangeValue = function (value, state) {
      _this.setValue(value);
      _this.setState(function () {
        return { value_state: state };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PhoneInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (_.isFunction(this.props.defaultFromSim)) {
        this.props.defaultFromSim().then(function (_ref2) {
          var phoneNumber = _ref2.phoneNumber,
              countryCode = _ref2.countryCode;

          _this2.setValue(phoneNumber);
          _this2.setState({ simPhone: phoneNumber, simCountry: countryCode });
        });
      }
    }
  }, {
    key: '_getErrorMessage',
    value: function _getErrorMessage() {
      return this.props.validationErrors.phone || this.validationPhoneMessage;
    }
  }, {
    key: 'renderErrorMessage',
    value: function renderErrorMessage() {
      var errorMessage = this.props.getErrorMessage();
      var value_state = this.state.value_state;

      if (!errorMessage && value_state && value_state.value && !value_state.isValid) {
        errorMessage = this._getErrorMessage();
      }
      if (!errorMessage) {
        return null;
      }
      if (_.isFunction(this.props.renderError)) {
        return this.props.renderError(errorMessage, this.props);
      }
      return _jsx('span', {
        className: 'error'
      }, void 0, errorMessage);
    }
  }, {
    key: 'validate',
    value: function validate() {
      return (0, _PhoneInput.isValidNumber)(this.getValue());
    }
  }, {
    key: 'render',
    value: function render() {
      var _getCleanedProps = this.getCleanedProps(),
          cleanedProps = _objectWithoutProperties(_getCleanedProps, []);

      return _jsx('div', {}, void 0, _react2.default.createElement(_PhoneInput.PhoneInput, _extends({}, cleanedProps, {
        value: this.getValue(),
        onValidChange: this.onChangeValue,
        invalid: !this.isPristine() && !this.isValid()
      })), this.renderErrorMessage());
    }
  }]);

  return PhoneInput;
}(_BaseFormsyComponent3.default), _class.propTypes = {
  defaultFromSim: _propTypes2.default.func,
  renderError: _propTypes2.default.func,
  validationPhoneMessage: _propTypes2.default.string
}, _class.defaultProps = {
  validationPhoneMessage: 'Неверный номер телефона'
}, _class.contextTypes = {
  formsy: _propTypes2.default.object // What about required?
}, _temp2);
exports.default = (0, _formsyReact.HOC)(PhoneInput);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3Jtc3kvUGhvbmVJbnB1dC5qc3giXSwibmFtZXMiOlsidmFsdWVzIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiUGhvbmVJbnB1dCIsInZhbGlkYXRpb25QaG9uZU1lc3NhZ2UiLCJwcm9wcyIsInN0YXRlIiwidmFsdWVfc3RhdGUiLCJzaW1QaG9uZSIsInVuZGVmaW5lZCIsInNpbUNvdW50cnkiLCJvbkNoYW5nZVZhbHVlIiwic2V0VmFsdWUiLCJzZXRTdGF0ZSIsIl8iLCJpc0Z1bmN0aW9uIiwiZGVmYXVsdEZyb21TaW0iLCJ0aGVuIiwicGhvbmVOdW1iZXIiLCJjb3VudHJ5Q29kZSIsInZhbGlkYXRpb25FcnJvcnMiLCJwaG9uZSIsImVycm9yTWVzc2FnZSIsImdldEVycm9yTWVzc2FnZSIsImlzVmFsaWQiLCJfZ2V0RXJyb3JNZXNzYWdlIiwicmVuZGVyRXJyb3IiLCJnZXRWYWx1ZSIsImdldENsZWFuZWRQcm9wcyIsImNsZWFuZWRQcm9wcyIsImlzUHJpc3RpbmUiLCJyZW5kZXJFcnJvck1lc3NhZ2UiLCJwcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiY29udGV4dFR5cGVzIiwiZm9ybXN5Iiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLG9DQUFrQixPQUFsQixFQUEyQixVQUFDQSxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDNUNDLFVBQVFDLEdBQVIsQ0FBWUgsTUFBWixFQUFvQkMsS0FBcEI7QUFDQSxTQUFPLENBQUMsK0JBQVNELE1BQVQsRUFBaUJDLEtBQWpCLENBQUQsSUFBNEIsb0NBQWNELE1BQWQsRUFBc0JDLEtBQXRCLENBQTVCLElBQTRELCtCQUFjQSxLQUFkLENBQW5FO0FBQ0QsQ0FIRDs7SUFLYUcsVSxXQUFBQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFPWEMsc0IsR0FBeUIsTUFBS0MsS0FBTCxDQUFXRCxzQixRQVVwQ0UsSyxHQUFRO0FBQ05DLG1CQUFhLElBRFA7QUFFTkMsZ0JBQVVDLFNBRko7QUFHTkMsa0JBQVlEO0FBSE4sSyxRQW9CUkUsYSxHQUFnQixVQUFDWCxLQUFELEVBQVFNLEtBQVIsRUFBa0I7QUFDaEMsWUFBS00sUUFBTCxDQUFjWixLQUFkO0FBQ0EsWUFBS2EsUUFBTCxDQUFjO0FBQUEsZUFBTyxFQUFDTixhQUFhRCxLQUFkLEVBQVA7QUFBQSxPQUFkO0FBQ0QsSzs7Ozs7d0NBakJvQjtBQUFBOztBQUNuQixVQUFJUSxFQUFFQyxVQUFGLENBQWEsS0FBS1YsS0FBTCxDQUFXVyxjQUF4QixDQUFKLEVBQTZDO0FBQzNDLGFBQUtYLEtBQUwsQ0FBV1csY0FBWCxHQUNLQyxJQURMLENBQ1UsaUJBQWdDO0FBQUEsY0FBOUJDLFdBQThCLFNBQTlCQSxXQUE4QjtBQUFBLGNBQWpCQyxXQUFpQixTQUFqQkEsV0FBaUI7O0FBQ3BDLGlCQUFLUCxRQUFMLENBQWNNLFdBQWQ7QUFDQSxpQkFBS0wsUUFBTCxDQUFjLEVBQUNMLFVBQVVVLFdBQVgsRUFBd0JSLFlBQVlTLFdBQXBDLEVBQWQ7QUFDRCxTQUpMO0FBS0Q7QUFDRjs7O3VDQUVtQjtBQUNsQixhQUFPLEtBQUtkLEtBQUwsQ0FBV2UsZ0JBQVgsQ0FBNEJDLEtBQTVCLElBQXFDLEtBQUtqQixzQkFBakQ7QUFDRDs7O3lDQU9xQjtBQUNwQixVQUFJa0IsZUFBZSxLQUFLakIsS0FBTCxDQUFXa0IsZUFBWCxFQUFuQjtBQURvQixVQUViaEIsV0FGYSxHQUVFLEtBQUtELEtBRlAsQ0FFYkMsV0FGYTs7QUFHcEIsVUFBSSxDQUFDZSxZQUFELElBQWlCZixXQUFqQixJQUFnQ0EsWUFBWVAsS0FBNUMsSUFBcUQsQ0FBQ08sWUFBWWlCLE9BQXRFLEVBQStFO0FBQzdFRix1QkFBZSxLQUFLRyxnQkFBTCxFQUFmO0FBQ0Q7QUFDRCxVQUFJLENBQUNILFlBQUwsRUFBbUI7QUFDakIsZUFBTyxJQUFQO0FBQ0Q7QUFDRCxVQUFJUixFQUFFQyxVQUFGLENBQWEsS0FBS1YsS0FBTCxDQUFXcUIsV0FBeEIsQ0FBSixFQUEwQztBQUN4QyxlQUFPLEtBQUtyQixLQUFMLENBQVdxQixXQUFYLENBQXVCSixZQUF2QixFQUFxQyxLQUFLakIsS0FBMUMsQ0FBUDtBQUNEO0FBQ0Q7QUFBQSxtQkFDa0I7QUFEbEIsaUJBQzJCaUIsWUFEM0I7QUFHRDs7OytCQUVXO0FBQ1YsYUFBTywrQkFBYyxLQUFLSyxRQUFMLEVBQWQsQ0FBUDtBQUNEOzs7NkJBRVM7QUFBQSw2QkFDa0IsS0FBS0MsZUFBTCxFQURsQjtBQUFBLFVBQ0VDLFlBREY7O0FBRVIscUNBRUksbUVBQW1CQSxZQUFuQjtBQUNlLGVBQU8sS0FBS0YsUUFBTCxFQUR0QjtBQUVlLHVCQUFlLEtBQUtoQixhQUZuQztBQUdlLGlCQUFTLENBQUMsS0FBS21CLFVBQUwsRUFBRCxJQUFzQixDQUFDLEtBQUtOLE9BQUw7QUFIL0MsU0FGSixFQU9LLEtBQUtPLGtCQUFMLEVBUEw7QUFVRDs7Ozt5Q0ExRU1DLFMsR0FBWTtBQUNqQmhCLGtCQUFnQixvQkFBVWlCLElBRFQ7QUFFakJQLGVBQWEsb0JBQVVPLElBRk47QUFHakI3QiwwQkFBd0Isb0JBQVU4QjtBQUhqQixDLFNBUVpDLFksR0FBZTtBQUNwQi9CLDBCQUF3QjtBQURKLEMsU0FJZmdDLFksR0FBZTtBQUNwQkMsVUFBUSxvQkFBVUMsTUFERSxDQUNLO0FBREwsQztrQkFpRVQsc0JBQUluQyxVQUFKLEMiLCJmaWxlIjoiUGhvbmVJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgSE9DLCBhZGRWYWxpZGF0aW9uUnVsZSB9IGZyb20gJ2Zvcm1zeS1yZWFjdCdcbmltcG9ydCB7IGlzRW1wdHlTdHJpbmcsIGlzRXhpc3R5IH0gZnJvbSAnZm9ybXN5LXJlYWN0L3NyYy92YWxpZGF0aW9uUnVsZXMnXG5cbmltcG9ydCB7IGlzVmFsaWROdW1iZXIsIFBob25lSW5wdXQgYXMgTXVpUGhvbmVJbnB1dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGhvbmVJbnB1dCdcblxuaW1wb3J0IEJhc2VGb3Jtc3lDb21wb25lbnQgZnJvbSAnLi9CYXNlRm9ybXN5Q29tcG9uZW50J1xuXG5hZGRWYWxpZGF0aW9uUnVsZSgncGhvbmUnLCAodmFsdWVzLCB2YWx1ZSkgPT4ge1xuICBjb25zb2xlLmxvZyh2YWx1ZXMsIHZhbHVlKVxuICByZXR1cm4gIWlzRXhpc3R5KHZhbHVlcywgdmFsdWUpIHx8IGlzRW1wdHlTdHJpbmcodmFsdWVzLCB2YWx1ZSkgfHwgaXNWYWxpZE51bWJlcih2YWx1ZSlcbn0pXG5cbmV4cG9ydCBjbGFzcyBQaG9uZUlucHV0IGV4dGVuZHMgQmFzZUZvcm1zeUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGVmYXVsdEZyb21TaW06IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbmRlckVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2YWxpZGF0aW9uUGhvbmVNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgdmFsaWRhdGlvblBob25lTWVzc2FnZSA9IHRoaXMucHJvcHMudmFsaWRhdGlvblBob25lTWVzc2FnZVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsaWRhdGlvblBob25lTWVzc2FnZTogJ9Cd0LXQstC10YDQvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJ1xuICB9XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBmb3Jtc3k6IFByb3BUeXBlcy5vYmplY3QgLy8gV2hhdCBhYm91dCByZXF1aXJlZD9cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHZhbHVlX3N0YXRlOiBudWxsLFxuICAgIHNpbVBob25lOiB1bmRlZmluZWQsXG4gICAgc2ltQ291bnRyeTogdW5kZWZpbmVkXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLmRlZmF1bHRGcm9tU2ltKSkge1xuICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0RnJvbVNpbSgpXG4gICAgICAgICAgLnRoZW4oKHtwaG9uZU51bWJlciwgY291bnRyeUNvZGV9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHBob25lTnVtYmVyKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2ltUGhvbmU6IHBob25lTnVtYmVyLCBzaW1Db3VudHJ5OiBjb3VudHJ5Q29kZX0pXG4gICAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfZ2V0RXJyb3JNZXNzYWdlICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy52YWxpZGF0aW9uRXJyb3JzLnBob25lIHx8IHRoaXMudmFsaWRhdGlvblBob25lTWVzc2FnZVxuICB9XG5cbiAgb25DaGFuZ2VWYWx1ZSA9ICh2YWx1ZSwgc3RhdGUpID0+IHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHt2YWx1ZV9zdGF0ZTogc3RhdGV9KSlcbiAgfVxuXG4gIHJlbmRlckVycm9yTWVzc2FnZSAoKSB7XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IHRoaXMucHJvcHMuZ2V0RXJyb3JNZXNzYWdlKClcbiAgICBjb25zdCB7dmFsdWVfc3RhdGV9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghZXJyb3JNZXNzYWdlICYmIHZhbHVlX3N0YXRlICYmIHZhbHVlX3N0YXRlLnZhbHVlICYmICF2YWx1ZV9zdGF0ZS5pc1ZhbGlkKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSB0aGlzLl9nZXRFcnJvck1lc3NhZ2UoKVxuICAgIH1cbiAgICBpZiAoIWVycm9yTWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLnJlbmRlckVycm9yKSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVuZGVyRXJyb3IoZXJyb3JNZXNzYWdlLCB0aGlzLnByb3BzKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JNZXNzYWdlfTwvc3Bhbj5cbiAgICApXG4gIH1cblxuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIGlzVmFsaWROdW1iZXIodGhpcy5nZXRWYWx1ZSgpKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Li4uY2xlYW5lZFByb3BzfSA9IHRoaXMuZ2V0Q2xlYW5lZFByb3BzKClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE11aVBob25lSW5wdXQgey4uLmNsZWFuZWRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0VmFsdWUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZENoYW5nZT17dGhpcy5vbkNoYW5nZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshdGhpcy5pc1ByaXN0aW5lKCkgJiYgIXRoaXMuaXNWYWxpZCgpfVxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJFcnJvck1lc3NhZ2UoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIT0MoUGhvbmVJbnB1dClcbiJdfQ==