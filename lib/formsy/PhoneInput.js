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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneInput.__proto__ || Object.getPrototypeOf(PhoneInput)).call.apply(_ref, [this].concat(args))), _this), _this.validationPhoneMessage = 'Неправильный номер телефона', _this.state = {
      value_state: null,
      simPhone: undefined,
      simCountry: undefined
    }, _this.onChangeValue = function (value, state) {
      _this.setValue(value);
      _this.setState(function () {
        return { value_state: state };
      });
      if (!state.isValid && state.value) {
        _this.context.formsy.updateInputsWithError(_defineProperty({}, _this.props.name, _this._getErrorMessage()));
      }
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
        onValidChange: this.onChangeValue
      })), this.renderErrorMessage());
    }
  }]);

  return PhoneInput;
}(_BaseFormsyComponent3.default), _class.propTypes = {
  defaultFromSim: _propTypes2.default.func,
  renderError: _propTypes2.default.func
}, _class.defaultProps = {}, _class.contextTypes = {
  formsy: _propTypes2.default.object // What about required?
}, _temp2);
exports.default = (0, _formsyReact.HOC)(PhoneInput);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3Jtc3kvUGhvbmVJbnB1dC5qc3giXSwibmFtZXMiOlsidmFsdWVzIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiUGhvbmVJbnB1dCIsInZhbGlkYXRpb25QaG9uZU1lc3NhZ2UiLCJzdGF0ZSIsInZhbHVlX3N0YXRlIiwic2ltUGhvbmUiLCJ1bmRlZmluZWQiLCJzaW1Db3VudHJ5Iiwib25DaGFuZ2VWYWx1ZSIsInNldFZhbHVlIiwic2V0U3RhdGUiLCJpc1ZhbGlkIiwiY29udGV4dCIsImZvcm1zeSIsInVwZGF0ZUlucHV0c1dpdGhFcnJvciIsInByb3BzIiwibmFtZSIsIl9nZXRFcnJvck1lc3NhZ2UiLCJfIiwiaXNGdW5jdGlvbiIsImRlZmF1bHRGcm9tU2ltIiwidGhlbiIsInBob25lTnVtYmVyIiwiY291bnRyeUNvZGUiLCJ2YWxpZGF0aW9uRXJyb3JzIiwicGhvbmUiLCJlcnJvck1lc3NhZ2UiLCJnZXRFcnJvck1lc3NhZ2UiLCJyZW5kZXJFcnJvciIsImdldFZhbHVlIiwiZ2V0Q2xlYW5lZFByb3BzIiwiY2xlYW5lZFByb3BzIiwicmVuZGVyRXJyb3JNZXNzYWdlIiwicHJvcFR5cGVzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsImNvbnRleHRUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLG9DQUFrQixPQUFsQixFQUEyQixVQUFDQSxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDNUNDLFVBQVFDLEdBQVIsQ0FBWUgsTUFBWixFQUFvQkMsS0FBcEI7QUFDQSxTQUFPLENBQUMsK0JBQVNELE1BQVQsRUFBaUJDLEtBQWpCLENBQUQsSUFBNEIsb0NBQWNELE1BQWQsRUFBc0JDLEtBQXRCLENBQTVCLElBQTRELCtCQUFjQSxLQUFkLENBQW5FO0FBQ0QsQ0FIRDs7SUFLYUcsVSxXQUFBQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFNWEMsc0IsR0FBeUIsNkIsUUFRekJDLEssR0FBUTtBQUNOQyxtQkFBYSxJQURQO0FBRU5DLGdCQUFVQyxTQUZKO0FBR05DLGtCQUFZRDtBQUhOLEssUUFvQlJFLGEsR0FBZ0IsVUFBQ1YsS0FBRCxFQUFRSyxLQUFSLEVBQWtCO0FBQ2hDLFlBQUtNLFFBQUwsQ0FBY1gsS0FBZDtBQUNBLFlBQUtZLFFBQUwsQ0FBYztBQUFBLGVBQU8sRUFBQ04sYUFBYUQsS0FBZCxFQUFQO0FBQUEsT0FBZDtBQUNBLFVBQUksQ0FBQ0EsTUFBTVEsT0FBUCxJQUFrQlIsTUFBTUwsS0FBNUIsRUFBbUM7QUFDakMsY0FBS2MsT0FBTCxDQUFhQyxNQUFiLENBQW9CQyxxQkFBcEIscUJBQ0csTUFBS0MsS0FBTCxDQUFXQyxJQURkLEVBQ3FCLE1BQUtDLGdCQUFMLEVBRHJCO0FBR0Q7QUFDRixLOzs7Ozt3Q0F0Qm9CO0FBQUE7O0FBQ25CLFVBQUlDLEVBQUVDLFVBQUYsQ0FBYSxLQUFLSixLQUFMLENBQVdLLGNBQXhCLENBQUosRUFBNkM7QUFDM0MsYUFBS0wsS0FBTCxDQUFXSyxjQUFYLEdBQ0tDLElBREwsQ0FDVSxpQkFBZ0M7QUFBQSxjQUE5QkMsV0FBOEIsU0FBOUJBLFdBQThCO0FBQUEsY0FBakJDLFdBQWlCLFNBQWpCQSxXQUFpQjs7QUFDcEMsaUJBQUtkLFFBQUwsQ0FBY2EsV0FBZDtBQUNBLGlCQUFLWixRQUFMLENBQWMsRUFBQ0wsVUFBVWlCLFdBQVgsRUFBd0JmLFlBQVlnQixXQUFwQyxFQUFkO0FBQ0QsU0FKTDtBQUtEO0FBQ0Y7Ozt1Q0FFbUI7QUFDbEIsYUFBTyxLQUFLUixLQUFMLENBQVdTLGdCQUFYLENBQTRCQyxLQUE1QixJQUFxQyxLQUFLdkIsc0JBQWpEO0FBQ0Q7Ozt5Q0FZcUI7QUFDcEIsVUFBSXdCLGVBQWUsS0FBS1gsS0FBTCxDQUFXWSxlQUFYLEVBQW5CO0FBRG9CLFVBRWJ2QixXQUZhLEdBRUUsS0FBS0QsS0FGUCxDQUViQyxXQUZhOztBQUdwQixVQUFJLENBQUNzQixZQUFELElBQWlCdEIsV0FBakIsSUFBZ0NBLFlBQVlOLEtBQTVDLElBQXFELENBQUNNLFlBQVlPLE9BQXRFLEVBQStFO0FBQzdFZSx1QkFBZSxLQUFLVCxnQkFBTCxFQUFmO0FBQ0Q7QUFDRCxVQUFJLENBQUNTLFlBQUwsRUFBbUI7QUFDakIsZUFBTyxJQUFQO0FBQ0Q7QUFDRCxVQUFJUixFQUFFQyxVQUFGLENBQWEsS0FBS0osS0FBTCxDQUFXYSxXQUF4QixDQUFKLEVBQTBDO0FBQ3hDLGVBQU8sS0FBS2IsS0FBTCxDQUFXYSxXQUFYLENBQXVCRixZQUF2QixFQUFxQyxLQUFLWCxLQUExQyxDQUFQO0FBQ0Q7QUFDRDtBQUFBLG1CQUNrQjtBQURsQixpQkFDMkJXLFlBRDNCO0FBR0Q7OzsrQkFFVztBQUNWLGFBQU8sK0JBQWMsS0FBS0csUUFBTCxFQUFkLENBQVA7QUFDRDs7OzZCQUVTO0FBQUEsNkJBQ2tCLEtBQUtDLGVBQUwsRUFEbEI7QUFBQSxVQUNFQyxZQURGOztBQUVSLHFDQUVJLG1FQUFtQkEsWUFBbkI7QUFDZSxlQUFPLEtBQUtGLFFBQUwsRUFEdEI7QUFFZSx1QkFBZSxLQUFLckI7QUFGbkMsU0FGSixFQU1LLEtBQUt3QixrQkFBTCxFQU5MO0FBU0Q7Ozs7eUNBM0VNQyxTLEdBQVk7QUFDakJiLGtCQUFnQixvQkFBVWMsSUFEVDtBQUVqQk4sZUFBYSxvQkFBVU07QUFGTixDLFNBT1pDLFksR0FBZSxFLFNBRWZDLFksR0FBZTtBQUNwQnZCLFVBQVEsb0JBQVV3QixNQURFLENBQ0s7QUFETCxDO2tCQXFFVCxzQkFBSXBDLFVBQUosQyIsImZpbGUiOiJQaG9uZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBIT0MsIGFkZFZhbGlkYXRpb25SdWxlIH0gZnJvbSAnZm9ybXN5LXJlYWN0J1xuaW1wb3J0IHsgaXNFbXB0eVN0cmluZywgaXNFeGlzdHkgfSBmcm9tICdmb3Jtc3ktcmVhY3Qvc3JjL3ZhbGlkYXRpb25SdWxlcydcblxuaW1wb3J0IHsgaXNWYWxpZE51bWJlciwgUGhvbmVJbnB1dCBhcyBNdWlQaG9uZUlucHV0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9QaG9uZUlucHV0J1xuXG5pbXBvcnQgQmFzZUZvcm1zeUNvbXBvbmVudCBmcm9tICcuL0Jhc2VGb3Jtc3lDb21wb25lbnQnXG5cbmFkZFZhbGlkYXRpb25SdWxlKCdwaG9uZScsICh2YWx1ZXMsIHZhbHVlKSA9PiB7XG4gIGNvbnNvbGUubG9nKHZhbHVlcywgdmFsdWUpXG4gIHJldHVybiAhaXNFeGlzdHkodmFsdWVzLCB2YWx1ZSkgfHwgaXNFbXB0eVN0cmluZyh2YWx1ZXMsIHZhbHVlKSB8fCBpc1ZhbGlkTnVtYmVyKHZhbHVlKVxufSlcblxuZXhwb3J0IGNsYXNzIFBob25lSW5wdXQgZXh0ZW5kcyBCYXNlRm9ybXN5Q29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkZWZhdWx0RnJvbVNpbTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVuZGVyRXJyb3I6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICB2YWxpZGF0aW9uUGhvbmVNZXNzYWdlID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBmb3Jtc3k6IFByb3BUeXBlcy5vYmplY3QgLy8gV2hhdCBhYm91dCByZXF1aXJlZD9cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHZhbHVlX3N0YXRlOiBudWxsLFxuICAgIHNpbVBob25lOiB1bmRlZmluZWQsXG4gICAgc2ltQ291bnRyeTogdW5kZWZpbmVkXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLmRlZmF1bHRGcm9tU2ltKSkge1xuICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0RnJvbVNpbSgpXG4gICAgICAgICAgLnRoZW4oKHtwaG9uZU51bWJlciwgY291bnRyeUNvZGV9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHBob25lTnVtYmVyKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2ltUGhvbmU6IHBob25lTnVtYmVyLCBzaW1Db3VudHJ5OiBjb3VudHJ5Q29kZX0pXG4gICAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfZ2V0RXJyb3JNZXNzYWdlICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy52YWxpZGF0aW9uRXJyb3JzLnBob25lIHx8IHRoaXMudmFsaWRhdGlvblBob25lTWVzc2FnZVxuICB9XG5cbiAgb25DaGFuZ2VWYWx1ZSA9ICh2YWx1ZSwgc3RhdGUpID0+IHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHt2YWx1ZV9zdGF0ZTogc3RhdGV9KSlcbiAgICBpZiAoIXN0YXRlLmlzVmFsaWQgJiYgc3RhdGUudmFsdWUpIHtcbiAgICAgIHRoaXMuY29udGV4dC5mb3Jtc3kudXBkYXRlSW5wdXRzV2l0aEVycm9yKHtcbiAgICAgICAgW3RoaXMucHJvcHMubmFtZV06IHRoaXMuX2dldEVycm9yTWVzc2FnZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckVycm9yTWVzc2FnZSAoKSB7XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IHRoaXMucHJvcHMuZ2V0RXJyb3JNZXNzYWdlKClcbiAgICBjb25zdCB7dmFsdWVfc3RhdGV9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghZXJyb3JNZXNzYWdlICYmIHZhbHVlX3N0YXRlICYmIHZhbHVlX3N0YXRlLnZhbHVlICYmICF2YWx1ZV9zdGF0ZS5pc1ZhbGlkKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSB0aGlzLl9nZXRFcnJvck1lc3NhZ2UoKVxuICAgIH1cbiAgICBpZiAoIWVycm9yTWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLnJlbmRlckVycm9yKSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVuZGVyRXJyb3IoZXJyb3JNZXNzYWdlLCB0aGlzLnByb3BzKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JNZXNzYWdlfTwvc3Bhbj5cbiAgICApXG4gIH1cblxuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIGlzVmFsaWROdW1iZXIodGhpcy5nZXRWYWx1ZSgpKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Li4uY2xlYW5lZFByb3BzfSA9IHRoaXMuZ2V0Q2xlYW5lZFByb3BzKClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE11aVBob25lSW5wdXQgey4uLmNsZWFuZWRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0VmFsdWUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZENoYW5nZT17dGhpcy5vbkNoYW5nZVZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJFcnJvck1lc3NhZ2UoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIT0MoUGhvbmVJbnB1dClcbiJdfQ==