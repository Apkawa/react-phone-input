'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneInput = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

exports.parseNumber = parseNumber;
exports.isValidNumber = isValidNumber;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _googleLibphonenumber = require('google-libphonenumber');

var _MaskInput = require('../MaskInput');

var _CountrySelect = require('./CountrySelect');

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var phoneUtil = _googleLibphonenumber.PhoneNumberUtil.getInstance();

function parseNumber(value) {
  value = value.toString();
  if (!_lodash2.default.startsWith(value, '+')) {
    value = '+' + value;
  }
  return phoneUtil.parseAndKeepRawInput(value);
}

function isValidNumber(value) {
  try {
    return phoneUtil.isValidNumber(parseNumber(value));
  } catch (ex) {}
  return false;
}

var PhoneInput = exports.PhoneInput = (_temp2 = _class = function (_React$Component) {
  _inherits(PhoneInput, _React$Component);

  function PhoneInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PhoneInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneInput.__proto__ || Object.getPrototypeOf(PhoneInput)).call.apply(_ref, [this].concat(args))), _this), _this.initialValue = _this.props.value || _this.props.defaultValue, _this.hasCustomPlaceholder = !!_this.props.placeholder, _this.phoneUtil = phoneUtil, _this.state = {
      value: _this.formatValue(_this.initialValue),
      isValid: false,
      isEmpty: !_this.initialValue,
      country: _CountrySelect.COUNTRIES_MAP[_this.parseCountry(_this.initialValue) || _this.props.defaultCountry],
      placeholder: _this.props.placeholder,
      mask: null,
      invalidState: _this.props.invalid
    }, _this.onCountrySelect = function (value, _ref2) {
      var countryData = _ref2.countryData;

      var placeholder = phoneUtil.format(phoneUtil.getExampleNumber(countryData.iso2, false, _googleLibphonenumber.PhoneNumberFormat.MOBILE), _googleLibphonenumber.PhoneNumberFormat.MOBILE);
      var mask = _this.placeholderToMask(placeholder);
      _this.setState({ country: countryData, placeholder: placeholder, mask: mask });
    }, _this.onChangeInput = function (e) {
      var value = e.target.value;
      _this.setState(function (_ref3) {
        var country = _ref3.country;

        return {
          value: value,
          isValid: _this.isValidNumber(value, country),
          isEmpty: _this.isEmpty(value)
        };
      });
    }, _this.onInputBlur = function (e) {
      var _this$props = _this.props,
          required = _this$props.required,
          invalid = _this$props.invalid,
          onInvalid = _this$props.onInvalid;

      _this.setState(function (_ref4) {
        var isEmpty = _ref4.isEmpty,
            value = _ref4.value,
            country = _ref4.country;

        var isValid = _this.isValidNumber(value, country);
        var invalidState = invalid || !isEmpty && !isValid || required && isEmpty;
        if (!isValid && _lodash2.default.isFunction(onInvalid)) {
          onInvalid({ valid_number: false });
        }
        return {
          isValid: isValid,
          invalidState: invalidState
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PhoneInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props = this.props,
          onChange = _props.onChange,
          onValidChange = _props.onValidChange;
      var _state = this.state,
          value = _state.value,
          isValid = _state.isValid;

      if (prevState.value !== value) {
        var cleanedValue = isValid ? this.getFullNumber(value) : null;
        var state = {
          cleanedValue: cleanedValue,
          value: value,
          number: this.getNumber(value),
          isValid: isValid

        };
        if (_lodash2.default.isFunction(onChange)) {
          onChange(state.number, state);
        }
        if (_lodash2.default.isFunction(onValidChange)) {
          onValidChange(cleanedValue, state);
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var value = nextProps.value,
          country = nextProps.country;

      var nextState = void 0;
      if (value) {
        nextState = {
          value: this.formatValue(value),
          country: _CountrySelect.COUNTRIES_MAP[this.parseCountry(value)]
        };
      } else if (country) {
        nextState = {
          value: value,
          country: _CountrySelect.COUNTRIES_MAP[country]
        };
      }
      if (nextState) {
        this.setState(function (_ref5) {
          _objectDestructuringEmpty(_ref5);

          return _extends({}, nextState, {
            isValid: _this2.isValidNumber(value, nextState.country),
            isEmpty: _this2.isEmpty(value)
          });
        });
      }
    }
  }, {
    key: 'placeholderToMask',
    value: function placeholderToMask(placeholder, dialCode) {
      if (dialCode && !dialCode.startsWith('+')) {
        dialCode = '+' + dialCode;
      }
      var mask = _lodash2.default.trimStart(placeholder, dialCode).replace(/\d/g, 9);
      if (dialCode) {
        dialCode = dialCode.replace(/[9]/g, '\\9');
        return '' + dialCode + mask;
      }
      return mask;
    }
  }, {
    key: 'parseNumber',
    value: function parseNumber(value, country) {
      var country_iso2 = _lodash2.default.get(country, 'iso2', this.props.defaultCountry);

      if (!value) {
        return value;
      }
      try {
        // Try region value, as example 999 444-55-55
        if (country_iso2) {
          return phoneUtil.parseAndKeepRawInput(value, country_iso2);
        }
        // May be +7 ...
        return phoneUtil.parseAndKeepRawInput(value);
      } catch (ex) {
        // Try non called code 79995554433
        if (!_lodash2.default.startsWith(value, '+')) {
          value = '+' + value;
        }
        try {
          return phoneUtil.parseAndKeepRawInput(value);
        } catch (ex) {
          return false;
        }
      }
      return false;
    }
  }, {
    key: 'formatValue',
    value: function formatValue(value) {
      if (!value) {
        return '';
      }
      if (isValidNumber(value)) {
        value = phoneUtil.format(this.parseNumber(value), _googleLibphonenumber.PhoneNumberFormat.MOBILE);
      }
      return value || '';
    }
  }, {
    key: 'parseCountry',
    value: function parseCountry(value) {
      var number = this.parseNumber(value);
      if (!number) {
        return undefined;
      }
      return _CountrySelect.COUNTRIES_CODE2ISO_MAP[number.getCountryCode()];
    }
  }, {
    key: 'getNumber',
    value: function getNumber(value) {
      var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!country) {
        country = this.state.country;
      }
      return '+' + country.dialCode + ' ' + value;
    }
  }, {
    key: 'getFullNumber',
    value: function getFullNumber(value) {
      var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return phoneUtil.format(this.parseNumber(this.getNumber(value, country)), _googleLibphonenumber.PhoneNumberFormat.E164);
    }
  }, {
    key: 'isValidNumber',
    value: function isValidNumber(value) {
      var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      try {
        return phoneUtil.isValidNumber(this.parseNumber(value, country));
      } catch (ex) {}
      return false;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty(value) {
      return !value || !/\d/.test(value);
    }
  }, {
    key: 'renderMask',
    value: function renderMask() {
      var _props2 = this.props,
          defaultCountry = _props2.defaultCountry,
          invalid = _props2.invalid,
          readOnly = _props2.readOnly,
          disabled = _props2.disabled,
          label = _props2.label,
          showMask = _props2.showMask;
      // TODO Custom placeholder

      var _state2 = this.state,
          mask = _state2.mask,
          placeholder = _state2.placeholder,
          value = _state2.value,
          country = _state2.country,
          invalidState = _state2.invalidState;


      var maskInputProps = {
        value: value,
        placeholder: placeholder,
        mask: mask,
        readOnly: readOnly,
        disabled: disabled,
        maskChar: null
      };

      if (showMask) {
        maskInputProps.maskChar = '_';
      }

      return _react2.default.createElement(_MaskInput.MaskInput, _extends({}, maskInputProps, {
        ref: 'input',
        type: 'tel',
        onChange: this.onChangeInput,
        label: label || 'Номер телефона',
        floatingLabel: true,
        invalid: invalidState,
        onBlur: this.onInputBlur
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          defaultCountry = _props3.defaultCountry,
          readOnly = _props3.readOnly,
          disabled = _props3.disabled;
      // TODO Custom placeholder

      var country = this.state.country;

      var country_iso2 = _lodash2.default.get(country, 'iso2');
      return _jsx('div', {
        className: 'phone-input-group'
      }, void 0, _jsx('div', {
        className: 'phone-country'
      }, void 0, _react2.default.createElement(_CountrySelect.CountrySelect, {
        defaultValue: defaultCountry,
        value: country_iso2,
        onChange: this.onCountrySelect,
        ref: 'select',
        disabled: disabled || readOnly
      })), _jsx('div', {
        className: 'phone-input'
      }, void 0, this.renderMask()));
    }
  }]);

  return PhoneInput;
}(_react2.default.Component), _class.propTypes = {
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onValidChange: _propTypes2.default.func,
  onInvalid: _propTypes2.default.func,
  value: _propTypes2.default.string,
  defaultCountry: _propTypes2.default.string,
  country: _propTypes2.default.string,
  invalid: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  showMask: _propTypes2.default.bool
}, _temp2);
exports.default = PhoneInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Bob25lSW5wdXQvaW5kZXguanN4Il0sIm5hbWVzIjpbInBhcnNlTnVtYmVyIiwiaXNWYWxpZE51bWJlciIsInBob25lVXRpbCIsImdldEluc3RhbmNlIiwidmFsdWUiLCJ0b1N0cmluZyIsInN0YXJ0c1dpdGgiLCJwYXJzZUFuZEtlZXBSYXdJbnB1dCIsImV4IiwiUGhvbmVJbnB1dCIsImluaXRpYWxWYWx1ZSIsInByb3BzIiwiZGVmYXVsdFZhbHVlIiwiaGFzQ3VzdG9tUGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlciIsInN0YXRlIiwiZm9ybWF0VmFsdWUiLCJpc1ZhbGlkIiwiaXNFbXB0eSIsImNvdW50cnkiLCJwYXJzZUNvdW50cnkiLCJkZWZhdWx0Q291bnRyeSIsIm1hc2siLCJpbnZhbGlkU3RhdGUiLCJpbnZhbGlkIiwib25Db3VudHJ5U2VsZWN0IiwiY291bnRyeURhdGEiLCJmb3JtYXQiLCJnZXRFeGFtcGxlTnVtYmVyIiwiaXNvMiIsIk1PQklMRSIsInBsYWNlaG9sZGVyVG9NYXNrIiwic2V0U3RhdGUiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsIm9uSW5wdXRCbHVyIiwicmVxdWlyZWQiLCJvbkludmFsaWQiLCJpc0Z1bmN0aW9uIiwidmFsaWRfbnVtYmVyIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25DaGFuZ2UiLCJvblZhbGlkQ2hhbmdlIiwiY2xlYW5lZFZhbHVlIiwiZ2V0RnVsbE51bWJlciIsIm51bWJlciIsImdldE51bWJlciIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsImRpYWxDb2RlIiwidHJpbVN0YXJ0IiwicmVwbGFjZSIsImNvdW50cnlfaXNvMiIsImdldCIsInVuZGVmaW5lZCIsImdldENvdW50cnlDb2RlIiwiRTE2NCIsInRlc3QiLCJyZWFkT25seSIsImRpc2FibGVkIiwibGFiZWwiLCJzaG93TWFzayIsIm1hc2tJbnB1dFByb3BzIiwibWFza0NoYXIiLCJyZW5k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bUJBV21CO0FBWG5CLGlCQVlPLEtBQUtNLFVBQUwsRUFaUDtBQWlCRDs7OztFQXRQNkIsZ0JBQU1DLFMsVUFDN0JDLFMsR0FBWTtBQUNqQnhELGdCQUFjLG9CQUFVeUQsTUFEUDtBQUVqQjFCLFlBQVUsb0JBQVUyQixJQUZIO0FBR2pCMUIsaUJBQWUsb0JBQVUwQixJQUhSO0FBSWpCaEMsYUFBVyxvQkFBVWdDLElBSko7QUFLakJsRSxTQUFPLG9CQUFVaUUsTUFMQTtBQU1qQmhELGtCQUFnQixvQkFBVWdELE1BTlQ7QUFPakJsRCxXQUFTLG9CQUFVa0QsTUFQRjtBQVFqQjdDLFdBQVMsb0JBQVUrQyxJQVJGO0FBU2pCWCxZQUFVLG9CQUFVVyxJQVRIO0FBVWpCVixZQUFVLG9CQUFVVSxJQVZIO0FBV2pCUixZQUFVLG9CQUFVUTtBQVhILEM7a0JBd1BOOUQsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IFBob25lTnVtYmVyRm9ybWF0IGFzIFBORiwgUGhvbmVOdW1iZXJVdGlsIH0gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJ1xuaW1wb3J0IHsgTWFza0lucHV0IH0gZnJvbSAnLi4vTWFza0lucHV0J1xuXG5pbXBvcnQgeyBDT1VOVFJJRVNfQ09ERTJJU09fTUFQLCBDT1VOVFJJRVNfTUFQLCBDb3VudHJ5U2VsZWN0IH0gZnJvbSAnLi9Db3VudHJ5U2VsZWN0J1xuXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcblxuY29uc3QgcGhvbmVVdGlsID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKClcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtYmVyICh2YWx1ZSkge1xuICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgaWYgKCFfLnN0YXJ0c1dpdGgodmFsdWUsICcrJykpIHtcbiAgICB2YWx1ZSA9ICcrJyArIHZhbHVlXG4gIH1cbiAgcmV0dXJuIHBob25lVXRpbC5wYXJzZUFuZEtlZXBSYXdJbnB1dCh2YWx1ZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWROdW1iZXIgKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBob25lVXRpbC5pc1ZhbGlkTnVtYmVyKHBhcnNlTnVtYmVyKHZhbHVlKSlcbiAgfSBjYXRjaCAoZXgpIHtcbiAgfVxuICByZXR1cm4gZmFsc2VcblxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblZhbGlkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkludmFsaWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRDb3VudHJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvdW50cnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93TWFzazogUHJvcFR5cGVzLmJvb2xcbiAgfVxuICBpbml0aWFsVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlXG4gIGhhc0N1c3RvbVBsYWNlaG9sZGVyID0gISF0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cbiAgcGhvbmVVdGlsID0gcGhvbmVVdGlsXG5cbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IHRoaXMuZm9ybWF0VmFsdWUodGhpcy5pbml0aWFsVmFsdWUpLFxuICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgIGlzRW1wdHk6ICF0aGlzLmluaXRpYWxWYWx1ZSxcbiAgICBjb3VudHJ5OiBDT1VOVFJJRVNfTUFQW3RoaXMucGFyc2VDb3VudHJ5KHRoaXMuaW5pdGlhbFZhbHVlKSB8fCB0aGlzLnByb3BzLmRlZmF1bHRDb3VudHJ5XSxcbiAgICBwbGFjZWhvbGRlcjogdGhpcy5wcm9wcy5wbGFjZWhvbGRlcixcbiAgICBtYXNrOiBudWxsLFxuICAgIGludmFsaWRTdGF0ZTogdGhpcy5wcm9wcy5pbnZhbGlkXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgY29uc3Qge29uQ2hhbmdlLCBvblZhbGlkQ2hhbmdlfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7dmFsdWUsIGlzVmFsaWR9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChwcmV2U3RhdGUudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBjb25zdCBjbGVhbmVkVmFsdWUgPSBpc1ZhbGlkID8gdGhpcy5nZXRGdWxsTnVtYmVyKHZhbHVlKSA6IG51bGxcbiAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBjbGVhbmVkVmFsdWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBudW1iZXI6IHRoaXMuZ2V0TnVtYmVyKHZhbHVlKSxcbiAgICAgICAgaXNWYWxpZFxuXG4gICAgICB9XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9uQ2hhbmdlKSkge1xuICAgICAgICBvbkNoYW5nZShzdGF0ZS5udW1iZXIsIHN0YXRlKVxuICAgICAgfVxuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvblZhbGlkQ2hhbmdlKSkge1xuICAgICAgICBvblZhbGlkQ2hhbmdlKGNsZWFuZWRWYWx1ZSwgc3RhdGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG4gICAgY29uc3Qge3ZhbHVlLCBjb3VudHJ5fSA9IG5leHRQcm9wc1xuICAgIGxldCBuZXh0U3RhdGVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpLFxuICAgICAgICBjb3VudHJ5OiBDT1VOVFJJRVNfTUFQW3RoaXMucGFyc2VDb3VudHJ5KHZhbHVlKV1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvdW50cnkpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBjb3VudHJ5OiBDT1VOVFJJRVNfTUFQW2NvdW50cnldXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuZXh0U3RhdGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHt9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ubmV4dFN0YXRlLFxuICAgICAgICAgIGlzVmFsaWQ6IHRoaXMuaXNWYWxpZE51bWJlcih2YWx1ZSwgbmV4dFN0YXRlLmNvdW50cnkpLFxuICAgICAgICAgIGlzRW1wdHk6IHRoaXMuaXNFbXB0eSh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4gIHBsYWNlaG9sZGVyVG9NYXNrIChwbGFjZWhvbGRlciwgZGlhbENvZGUpIHtcbiAgICBpZiAoZGlhbENvZGUgJiYgIWRpYWxDb2RlLnN0YXJ0c1dpdGgoJysnKSkge1xuICAgICAgZGlhbENvZGUgPSBgKyR7ZGlhbENvZGV9YFxuICAgIH1cbiAgICBsZXQgbWFzayA9IF8udHJpbVN0YXJ0KHBsYWNlaG9sZGVyLCBkaWFsQ29kZSkucmVwbGFjZSgvXFxkL2csIDkpXG4gICAgaWYgKGRpYWxDb2RlKSB7XG4gICAgICBkaWFsQ29kZSA9IGRpYWxDb2RlLnJlcGxhY2UoL1s5XS9nLCAnXFxcXDknKVxuICAgICAgcmV0dXJuIGAke2RpYWxDb2RlfSR7bWFza31gXG4gICAgfVxuICAgIHJldHVybiBtYXNrXG4gIH1cblxuICBvbkNvdW50cnlTZWxlY3QgPSAodmFsdWUsIHtjb3VudHJ5RGF0YX0pID0+IHtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IHBob25lVXRpbC5mb3JtYXQoXG4gICAgICBwaG9uZVV0aWwuZ2V0RXhhbXBsZU51bWJlcihjb3VudHJ5RGF0YS5pc28yLCBmYWxzZSwgUE5GLk1PQklMRSksIFBORi5NT0JJTEUpXG4gICAgY29uc3QgbWFzayA9IHRoaXMucGxhY2Vob2xkZXJUb01hc2socGxhY2Vob2xkZXIpXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRyeTogY291bnRyeURhdGEsIHBsYWNlaG9sZGVyLCBtYXNrfSlcbiAgfVxuXG4gIHBhcnNlTnVtYmVyICh2YWx1ZSwgY291bnRyeSkge1xuICAgIGNvbnN0IGNvdW50cnlfaXNvMiA9IF8uZ2V0KGNvdW50cnksICdpc28yJywgdGhpcy5wcm9wcy5kZWZhdWx0Q291bnRyeSlcblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gVHJ5IHJlZ2lvbiB2YWx1ZSwgYXMgZXhhbXBsZSA5OTkgNDQ0LTU1LTU1XG4gICAgICBpZiAoY291bnRyeV9pc28yKSB7XG4gICAgICAgIHJldHVybiBwaG9uZVV0aWwucGFyc2VBbmRLZWVwUmF3SW5wdXQodmFsdWUsIGNvdW50cnlfaXNvMilcbiAgICAgIH1cbiAgICAgIC8vIE1heSBiZSArNyAuLi5cbiAgICAgIHJldHVybiBwaG9uZVV0aWwucGFyc2VBbmRLZWVwUmF3SW5wdXQodmFsdWUpXG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIC8vIFRyeSBub24gY2FsbGVkIGNvZGUgNzk5OTU1NTQ0MzNcbiAgICAgIGlmICghXy5zdGFydHNXaXRoKHZhbHVlLCAnKycpKSB7XG4gICAgICAgIHZhbHVlID0gJysnICsgdmFsdWVcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwaG9uZVV0aWwucGFyc2VBbmRLZWVwUmF3SW5wdXQodmFsdWUpXG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZvcm1hdFZhbHVlICh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAoaXNWYWxpZE51bWJlcih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gcGhvbmVVdGlsLmZvcm1hdCh0aGlzLnBhcnNlTnVtYmVyKHZhbHVlKSwgUE5GLk1PQklMRSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlIHx8ICcnXG5cbiAgfVxuXG4gIHBhcnNlQ291bnRyeSAodmFsdWUpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLnBhcnNlTnVtYmVyKHZhbHVlKVxuICAgIGlmICghbnVtYmVyKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIHJldHVybiBDT1VOVFJJRVNfQ09ERTJJU09fTUFQW251bWJlci5nZXRDb3VudHJ5Q29kZSgpXVxuICB9XG5cbiAgZ2V0TnVtYmVyICh2YWx1ZSwgY291bnRyeSA9IG51bGwpIHtcbiAgICBpZiAoIWNvdW50cnkpIHtcbiAgICAgIGNvdW50cnkgPSB0aGlzLnN0YXRlLmNvdW50cnlcbiAgICB9XG4gICAgcmV0dXJuIGArJHtjb3VudHJ5LmRpYWxDb2RlfSAke3ZhbHVlfWBcbiAgfVxuXG4gIGdldEZ1bGxOdW1iZXIgKHZhbHVlLCBjb3VudHJ5ID0gbnVsbCkge1xuICAgIHJldHVybiBwaG9uZVV0aWwuZm9ybWF0KHRoaXMucGFyc2VOdW1iZXIodGhpcy5nZXROdW1iZXIodmFsdWUsIGNvdW50cnkpKSwgUE5GLkUxNjQpXG4gIH1cblxuICBpc1ZhbGlkTnVtYmVyICh2YWx1ZSwgY291bnRyeSA9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHBob25lVXRpbC5pc1ZhbGlkTnVtYmVyKHRoaXMucGFyc2VOdW1iZXIodmFsdWUsIGNvdW50cnkpKVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaXNFbXB0eSAodmFsdWUpIHtcbiAgICByZXR1cm4gIXZhbHVlIHx8ICEvXFxkLy50ZXN0KHZhbHVlKVxuICB9XG5cbiAgb25DaGFuZ2VJbnB1dCA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoKHtjb3VudHJ5fSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGlzVmFsaWQ6IHRoaXMuaXNWYWxpZE51bWJlcih2YWx1ZSwgY291bnRyeSksXG4gICAgICAgIGlzRW1wdHk6IHRoaXMuaXNFbXB0eSh2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25JbnB1dEJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHtyZXF1aXJlZCwgaW52YWxpZCwgb25JbnZhbGlkfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnNldFN0YXRlKCh7aXNFbXB0eSwgdmFsdWUsIGNvdW50cnl9KSA9PiB7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5pc1ZhbGlkTnVtYmVyKHZhbHVlLCBjb3VudHJ5KVxuICAgICAgY29uc3QgaW52YWxpZFN0YXRlID0gaW52YWxpZCB8fCAoIWlzRW1wdHkgJiYgIWlzVmFsaWQpIHx8IChyZXF1aXJlZCAmJiBpc0VtcHR5KVxuICAgICAgaWYgKCFpc1ZhbGlkICYmIF8uaXNGdW5jdGlvbihvbkludmFsaWQpKSB7XG4gICAgICAgIG9uSW52YWxpZCh7dmFsaWRfbnVtYmVyOiBmYWxzZX0pXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxuICAgICAgICBpbnZhbGlkU3RhdGVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyTWFzayAoKSB7XG4gICAgY29uc3Qge2RlZmF1bHRDb3VudHJ5LCBpbnZhbGlkLCByZWFkT25seSwgZGlzYWJsZWQsIGxhYmVsLCBzaG93TWFza30gPSB0aGlzLnByb3BzXG4gICAgLy8gVE9ETyBDdXN0b20gcGxhY2Vob2xkZXJcbiAgICBjb25zdCB7bWFzaywgcGxhY2Vob2xkZXIsIHZhbHVlLCBjb3VudHJ5LCBpbnZhbGlkU3RhdGV9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgbWFza0lucHV0UHJvcHMgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgbWFzayxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBtYXNrQ2hhcjogbnVsbFxuICAgIH1cblxuICAgIGlmIChzaG93TWFzaykge1xuICAgICAgbWFza0lucHV0UHJvcHMubWFza0NoYXIgPSAnXydcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1hc2tJbnB1dFxuICAgICAgICB7Li4ubWFza0lucHV0UHJvcHN9XG4gICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlSW5wdXR9XG4gICAgICAgIGxhYmVsPXtsYWJlbCB8fCAn0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJ31cbiAgICAgICAgZmxvYXRpbmdMYWJlbD17dHJ1ZX1cbiAgICAgICAgaW52YWxpZD17aW52YWxpZFN0YXRlfVxuICAgICAgICBvbkJsdXI9e3RoaXMub25JbnB1dEJsdXJ9XG4gICAgICAvPlxuXG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7ZGVmYXVsdENvdW50cnksIHJlYWRPbmx5LCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzXG4gICAgLy8gVE9ETyBDdXN0b20gcGxhY2Vob2xkZXJcbiAgICBjb25zdCB7Y291bnRyeX0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgY291bnRyeV9pc28yID0gXy5nZXQoY291bnRyeSwgJ2lzbzInKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLWlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvbmUtY291bnRyeVwiPlxuICAgICAgICAgIDxDb3VudHJ5U2VsZWN0XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRDb3VudHJ5fVxuICAgICAgICAgICAgdmFsdWU9e2NvdW50cnlfaXNvMn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ291bnRyeVNlbGVjdH1cbiAgICAgICAgICAgIHJlZj1cInNlbGVjdFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgcmVhZE9ubHl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvbmUtaW5wdXRcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJNYXNrKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGhvbmVJbnB1dFxuXG4iXX0=