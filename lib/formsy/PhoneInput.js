'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PhoneInput = require('../components/PhoneInput');

var _BaseFormsyComponent2 = require('./BaseFormsyComponent');

var _BaseFormsyComponent3 = _interopRequireDefault(_BaseFormsyComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_formsyReact2.default.addValidationRule('phone', function (values, value) {
  return (0, _PhoneInput.isValidNumber)(value);
});

// FIXME допилить обработку ошибок formsy
var PhoneInput = exports.PhoneInput = (_temp2 = _class = function (_BaseFormsyComponent) {
  _inherits(PhoneInput, _BaseFormsyComponent);

  function PhoneInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PhoneInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneInput.__proto__ || Object.getPrototypeOf(PhoneInput)).call.apply(_ref, [this].concat(args))), _this), _this.validationError = 'Неправильный номер телефона', _this.state = {
      simPhone: undefined,
      simCountry: undefined
    }, _this.onChangeValue = function (value) {
      _this.setValue(value);
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
    key: 'renderErrorMessage',
    value: function renderErrorMessage() {
      var errorMessage = this.props.getErrorMessage();
      if (!errorMessage) {
        return null;
      }
      // FIXME добавить стандартный стиль для ошибки
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
        onChange: this.onChangeValue })), this.renderErrorMessage());
    }
  }]);

  return PhoneInput;
}(_BaseFormsyComponent3.default), _class.propTypes = {
  defaultFromSim: _propTypes2.default.func
}, _class.defaultProps = {
  validations: 'phone'
}, _temp2);
exports.default = (0, _formsyReact.HOC)(PhoneInput);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3Jtc3kvUGhvbmVJbnB1dC5qc3giXSwibmFtZXMiOlsiYWRkVmFsaWRhdGlvblJ1bGUiLCJ2YWx1ZXMiLCJ2YWx1ZSIsIlBob25lSW5wdXQiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzdGF0ZSIsInNpbVBob25lIiwidW5kZWZpbmVkIiwic2ltQ291bnRyeSIsIm9uQ2hhbmdlVmFsdWUiLCJzZXRWYWx1ZSIsIl8iLCJpc0Z1bmN0aW9uIiwicHJvcHMiLCJkZWZhdWx0RnJvbVNpbSIsInRoZW4iLCJwaG9uZU51bWJlciIsImNvdW50cnlDb2RlIiwic2V0U3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJnZXRFcnJvck1lc3NhZ2UiLCJnZXRWYWx1ZSIsImdldENsZWFuZWRQcm9wcyIsImNsZWFuZWRQcm9wcyIsInJlbmRlckVycm9yTWVzc2FnZSIsInByb3BUeXBlcyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJ2YWxpZGF0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLHNCQUFPQSxpQkFBUCxDQUF5QixPQUF6QixFQUFrQyxVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDbkQsU0FBTywrQkFBY0EsS0FBZCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTtJQUNhQyxVLFdBQUFBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQVNYQyxlLEdBQWtCLDZCLFFBRWxCQyxLLEdBQVE7QUFDTkMsZ0JBQVVDLFNBREo7QUFFTkMsa0JBQVlEO0FBRk4sSyxRQWVSRSxhLEdBQWdCLFVBQUNQLEtBQUQsRUFBVztBQUN6QixZQUFLUSxRQUFMLENBQWNSLEtBQWQ7QUFDRCxLOzs7Ozt3Q0Fab0I7QUFBQTs7QUFDbkIsVUFBSVMsRUFBRUMsVUFBRixDQUFhLEtBQUtDLEtBQUwsQ0FBV0MsY0FBeEIsQ0FBSixFQUE2QztBQUMzQyxhQUFLRCxLQUFMLENBQVdDLGNBQVgsR0FDS0MsSUFETCxDQUNVLGlCQUFnQztBQUFBLGNBQTlCQyxXQUE4QixTQUE5QkEsV0FBOEI7QUFBQSxjQUFqQkMsV0FBaUIsU0FBakJBLFdBQWlCOztBQUNwQyxpQkFBS1AsUUFBTCxDQUFjTSxXQUFkO0FBQ0EsaUJBQUtFLFFBQUwsQ0FBYyxFQUFDWixVQUFVVSxXQUFYLEVBQXdCUixZQUFZUyxXQUFwQyxFQUFkO0FBQ0QsU0FKTDtBQUtEO0FBQ0Y7Ozt5Q0FNcUI7QUFDcEIsVUFBTUUsZUFBZSxLQUFLTixLQUFMLENBQVdPLGVBQVgsRUFBckI7QUFDQSxVQUFJLENBQUNELFlBQUwsRUFBbUI7QUFDakIsZUFBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBO0FBQUEsbUJBQ2tCO0FBRGxCLGlCQUMyQkEsWUFEM0I7QUFHRDs7OytCQUVXO0FBQ1YsYUFBTywrQkFBYyxLQUFLRSxRQUFMLEVBQWQsQ0FBUDtBQUNEOzs7NkJBRVM7QUFBQSw2QkFDa0IsS0FBS0MsZUFBTCxFQURsQjtBQUFBLFVBQ0VDLFlBREY7O0FBRVIscUNBRUksbUVBQW1CQSxZQUFuQjtBQUNlLGVBQU8sS0FBS0YsUUFBTCxFQUR0QjtBQUVlLGtCQUFVLEtBQUtaLGFBRjlCLElBRkosRUFLSyxLQUFLZSxrQkFBTCxFQUxMO0FBUUQ7Ozs7eUNBdERNQyxTLEdBQVk7QUFDakJYLGtCQUFnQixvQkFBVVk7QUFEVCxDLFNBSVpDLFksR0FBZTtBQUNwQkMsZUFBYTtBQURPLEM7a0JBcURULHNCQUFJekIsVUFBSixDIiwiZmlsZSI6IlBob25lSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmltcG9ydCBGb3Jtc3ksIHsgSE9DIH0gZnJvbSAnZm9ybXN5LXJlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBpc1ZhbGlkTnVtYmVyLCBQaG9uZUlucHV0IGFzIE11aVBob25lSW5wdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL1Bob25lSW5wdXQnXG5cbmltcG9ydCBCYXNlRm9ybXN5Q29tcG9uZW50IGZyb20gJy4vQmFzZUZvcm1zeUNvbXBvbmVudCdcblxuRm9ybXN5LmFkZFZhbGlkYXRpb25SdWxlKCdwaG9uZScsICh2YWx1ZXMsIHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc1ZhbGlkTnVtYmVyKHZhbHVlKVxufSlcblxuLy8gRklYTUUg0LTQvtC/0LjQu9C40YLRjCDQvtCx0YDQsNCx0L7RgtC60YMg0L7RiNC40LHQvtC6IGZvcm1zeVxuZXhwb3J0IGNsYXNzIFBob25lSW5wdXQgZXh0ZW5kcyBCYXNlRm9ybXN5Q29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkZWZhdWx0RnJvbVNpbTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsaWRhdGlvbnM6ICdwaG9uZSdcbiAgfVxuXG4gIHZhbGlkYXRpb25FcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJ1xuXG4gIHN0YXRlID0ge1xuICAgIHNpbVBob25lOiB1bmRlZmluZWQsXG4gICAgc2ltQ291bnRyeTogdW5kZWZpbmVkXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLmRlZmF1bHRGcm9tU2ltKSkge1xuICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0RnJvbVNpbSgpXG4gICAgICAgICAgLnRoZW4oKHtwaG9uZU51bWJlciwgY291bnRyeUNvZGV9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHBob25lTnVtYmVyKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2ltUGhvbmU6IHBob25lTnVtYmVyLCBzaW1Db3VudHJ5OiBjb3VudHJ5Q29kZX0pXG4gICAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZVZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlckVycm9yTWVzc2FnZSAoKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5wcm9wcy5nZXRFcnJvck1lc3NhZ2UoKVxuICAgIGlmICghZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICAvLyBGSVhNRSDQtNC+0LHQsNCy0LjRgtGMINGB0YLQsNC90LTQsNGA0YLQvdGL0Lkg0YHRgtC40LvRjCDQtNC70Y8g0L7RiNC40LHQutC4XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yTWVzc2FnZX08L3NwYW4+XG4gICAgKVxuICB9XG5cbiAgdmFsaWRhdGUgKCkge1xuICAgIHJldHVybiBpc1ZhbGlkTnVtYmVyKHRoaXMuZ2V0VmFsdWUoKSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qgey4uLmNsZWFuZWRQcm9wc30gPSB0aGlzLmdldENsZWFuZWRQcm9wcygpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxNdWlQaG9uZUlucHV0IHsuLi5jbGVhbmVkUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFZhbHVlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVmFsdWV9Lz5cbiAgICAgICAge3RoaXMucmVuZGVyRXJyb3JNZXNzYWdlKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSE9DKFBob25lSW5wdXQpXG4iXX0=