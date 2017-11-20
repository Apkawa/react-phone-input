'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp3;

exports.parseNumber = parseNumber;
exports.isValidNumber = isValidNumber;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _googleLibphonenumber = require('google-libphonenumber');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MaskInput = require('../MaskInput');

var _PopupSelect = require('../PopupSelect');

var _AllCountries = require('./AllCountries');

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var phoneUtil = _googleLibphonenumber.PhoneNumberUtil.getInstance();

function parseNumber(value) {
  value = value.toString();
  if (!_.startsWith(value, '+')) {
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

var COUNTRIES = (0, _AllCountries.getCountries)();
var COUNTRIES_MAP = _.fromPairs(_.map(COUNTRIES, function (c) {
  return [c.iso2, c];
}));
var COUNTRIES_CODE2ISO_MAP = _.fromPairs(_.map(COUNTRIES, function (c) {
  return [c.dialCode, c.iso2];
}));

var CountrySelect = (_temp = _class = function (_Component) {
  _inherits(CountrySelect, _Component);

  function CountrySelect() {
    _classCallCheck(this, CountrySelect);

    return _possibleConstructorReturn(this, (CountrySelect.__proto__ || Object.getPrototypeOf(CountrySelect)).apply(this, arguments));
  }

  _createClass(CountrySelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          onChange = _props.onChange,
          defaultValue = _props.defaultValue,
          showCountryIcon = _props.showCountryIcon;

      if (onChange && defaultValue && COUNTRIES_MAP[defaultValue]) {
        onChange(defaultValue, { countryData: COUNTRIES_MAP[defaultValue] });
      }
      if (showCountryIcon) {
        // TODO use lite png version
      }
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      return _.map(COUNTRIES, function (countryData) {
        return {
          value: countryData.iso2,
          label: countryData.name,
          countryData: countryData
        };
      });
    }
  }, {
    key: 'renderOptionLabel',
    value: function renderOptionLabel(option, props) {
      var countryData = option.countryData;

      return _jsx('span', {}, void 0, _jsx('span', {
        className: 'flag-icon flag-icon-' + countryData.iso2
      }), option.label, _jsx('span', {
        className: 'dialCode'
      }, void 0, '\xA0 +', countryData.dialCode));
    }
  }, {
    key: 'renderFieldLabel',
    value: function renderFieldLabel(option, props) {
      return _jsx('span', {}, void 0, _jsx('span', {
        className: 'flag-icon flag-icon-' + option.countryData.iso2
      }), '+', option.countryData.dialCode, _jsx('div', {
        className: 'icon'
      }, void 0, _jsx('img', {
        src: require('./show-more.svg')
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          onChange = _props2.onChange,
          defaultValue = _props2.defaultValue,
          value = _props2.value,
          disabled = _props2.disabled;

      return _jsx(_PopupSelect.PopupSelect, {
        options: this.getOptions(),
        renderOptionLabel: this.renderOptionLabel,
        renderFieldLabel: this.renderFieldLabel,
        name: 'dial_code',
        value: value,
        defaultValue: defaultValue,
        onChange: onChange,
        disabled: disabled
      });
    }
  }]);

  return CountrySelect;
}(_react.Component), _class.propTypes = {
  value: _propTypes2.default.oneOf(_.keys(COUNTRIES_MAP)),
  defaultValue: _propTypes2.default.oneOf(_.keys(COUNTRIES_MAP)),
  onChange: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  showCountryIcon: _propTypes2.default.bool
}, _temp);
var PhoneInput = exports.PhoneInput = (_temp3 = _class2 = function (_Component2) {
  _inherits(PhoneInput, _Component2);

  function PhoneInput() {
    var _ref;

    var _temp2, _this2, _ret;

    _classCallCheck(this, PhoneInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref = PhoneInput.__proto__ || Object.getPrototypeOf(PhoneInput)).call.apply(_ref, [this].concat(args))), _this2), _this2.initialValue = _this2.props.value || _this2.props.defaultValue, _this2.hasCustomPlaceholder = !!_this2.props.placeholder, _this2.phoneUtil = phoneUtil, _this2.state = {
      value: _this2.formatValue(_this2.initialValue),
      isValid: false,
      isEmpty: !_this2.initialValue,
      country: COUNTRIES_MAP[_this2.parseCountry(_this2.initialValue) || _this2.props.defaultCountry],
      placeholder: _this2.props.placeholder,
      mask: null,
      invalidState: _this2.props.invalid
    }, _this2.onCountrySelect = function (value, _ref2) {
      var countryData = _ref2.countryData;

      var placeholder = phoneUtil.format(phoneUtil.getExampleNumber(countryData.iso2, false, _googleLibphonenumber.PhoneNumberFormat.MOBILE), _googleLibphonenumber.PhoneNumberFormat.MOBILE);
      var mask = _this2.placeholderToMask(placeholder);
      _this2.setState({ country: countryData, placeholder: placeholder, mask: mask });
    }, _this2.onChangeInput = function (e) {
      var value = e.target.value;
      _this2.setState(function (_ref3) {
        var country = _ref3.country;

        return {
          value: value,
          isValid: _this2.isValidNumber(value, country),
          isEmpty: _this2.isEmpty(value)
        };
      });
    }, _this2.onInputBlur = function (e) {
      var _this2$props = _this2.props,
          required = _this2$props.required,
          invalid = _this2$props.invalid;

      _this2.setState(function (_ref4) {
        var isEmpty = _ref4.isEmpty,
            value = _ref4.value,
            country = _ref4.country;

        var isValid = _this2.isValidNumber(value, country);
        return {
          isValid: isValid,
          invalidState: invalid || !isEmpty && !isValid || required && isEmpty
        };
      });
    }, _temp2), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(PhoneInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var onChange = this.props.onChange;
      var _state = this.state,
          value = _state.value,
          isValid = _state.isValid;

      if (onChange && prevState.value != value) {
        onChange(isValid ? this.getFullNumber(value) : null);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var value = nextProps.value,
          country = nextProps.country;

      var nextState = void 0;
      if (value) {
        nextState = {
          value: this.formatValue(value),
          country: COUNTRIES_MAP[this.parseCountry(value)]
        };
      } else if (country) {
        nextState = {
          value: value,
          country: COUNTRIES_MAP[country]
        };
      }
      if (nextState) {
        this.setState(function (_ref5) {
          _objectDestructuringEmpty(_ref5);

          return _extends({}, nextState, {
            isValid: _this3.isValidNumber(value, nextState.country),
            isEmpty: _this3.isEmpty(value)
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
      var mask = _.trimStart(placeholder, dialCode).replace(/\d/g, 9);
      if (dialCode) {
        dialCode = dialCode.replace(/[9]/g, '\\9');
        return '' + dialCode + mask;
      }
      return mask;
    }
  }, {
    key: 'parseNumber',
    value: function parseNumber(value, country) {
      var country_iso2 = _.get(country, 'iso2');

      if (!value) {
        return value;
      }
      try {
        // Try region value, as example 999 444-55-55
        if (country_iso2) {
          // const regionCode = phoneUtil.getRegionCodeForCountryCode(country_iso2);
          return phoneUtil.parseAndKeepRawInput(value, country_iso2);
        }
        // May be +7 ...
        return phoneUtil.parseAndKeepRawInput(value);
      } catch (ex) {
        // Try non called code 79995554433
        if (!_.startsWith(value, '+')) {
          value = '+' + value;
        }
        return phoneUtil.parseAndKeepRawInput(value);
      }
      return false;
    }
  }, {
    key: 'formatValue',
    value: function formatValue(value) {
      if (!value) {
        return '';
      }
      value = phoneUtil.format(this.parseNumber(value), _googleLibphonenumber.PhoneNumberFormat.MOBILE);
      return value || '';
    }
  }, {
    key: 'parseCountry',
    value: function parseCountry(value) {
      var number = this.parseNumber(value);
      if (!number) {
        return undefined;
      }
      return COUNTRIES_CODE2ISO_MAP[number.getCountryCode()];
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
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          defaultCountry = _props3.defaultCountry,
          invalid = _props3.invalid,
          readonly = _props3.readonly,
          disabled = _props3.disabled,
          label = _props3.label;
      // TODO Custom placeholder

      var _state2 = this.state,
          mask = _state2.mask,
          placeholder = _state2.placeholder,
          value = _state2.value,
          country = _state2.country,
          invalidState = _state2.invalidState;

      var country_iso2 = _.get(country, 'iso2');
      var maskInputProps = {
        value: value,
        placeholder: placeholder,
        mask: mask,
        readonly: readonly,
        disabled: disabled
      };
      return _jsx('div', {
        className: 'phone-input-group'
      }, void 0, _jsx('div', {
        className: 'phone-country'
      }, void 0, _react2.default.createElement(CountrySelect, {
        defaultValue: defaultCountry,
        value: country_iso2,
        onChange: this.onCountrySelect,
        ref: 'select',
        disabled: disabled || readonly
      })), _jsx('div', {
        className: 'phone-input'
      }, void 0, _react2.default.createElement(_MaskInput.MaskInput, _extends({}, maskInputProps, {
        ref: 'input',
        type: 'tel',
        maskChar: null,
        onChange: this.onChangeInput,
        label: label || 'Номер телефона',
        floatingLabel: true,
        invalid: invalidState,
        onBlur: this.onInputBlur
      }))));
    }
  }]);

  return PhoneInput;
}(_react.Component), _class2.propTypes = {
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.string,
  defaultCountry: _propTypes2.default.string,
  country: _propTypes2.default.string,
  invalid: _propTypes2.default.bool,
  readonly: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
}, _temp3);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Bob25lSW5wdXQvaW5kZXguanN4Il0sIm5hbWVzIjpbInBhcnNlTnVtYmVyIiwiaXNWYWxpZE51bWJlciIsInBob25lVXRpbCIsImdldEluc3RhbmNlIiwidmFsdWUiLCJ0b1N0cmluZyIsIl8iLCJzdGFydHNXaXRoIiwicGFyc2VBbmRLZWVwUmF3SW5wdXQiLCJleCIsIkNPVU5UUklFUyIsIkNPVU5UUklFU19NQVAiLCJmcm9tUGFpcnMiLCJtYXAiLCJjIiwiaXNvMiIsIkNPVU5UUklFU19DT0RFMklTT19NQVAiLCJkaWFsQ29kZSIsIkNvdW50cnlTZWxlY3QiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiZGVmYXVsdFZhbHVlIiwic2hvd0NvdW50cnlJY29uIiwiY291bnRyeURhdGEiLCJsYWJlbCIsIm5hbWUiLCJvcHRpb24iLCJyZXF1aXJlIiwiZGlzYWJsZWQiLCJnZXRPcHRpb25zIiwicmVuZGVyT3B0aW9uTGFiZWwiLCJyZW5kZXJGaWVsZExhYmVsIiwicHJvcFR5cGVzIiwib25lT2YiLCJrZXlzIiwiZnVuYyIsImJvb2wiLCJQaG9uZUlucHV0IiwiaW5pdGlhbFZhbHVlIiwiaGFzQ3VzdG9tUGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlciIsInN0YXRlIiwiZm9ybWF0VmFsdWUiLCJpc1ZhbGlkIiwiaXNFbXB0eSIsImNvdW50cnkiLCJwYXJzZUNvdW50cnkiLCJkZWZhdWx0Q291bnRyeSIsIm1hc2siLCJpbnZhbGlkU3RhdGUiLCJpbnZhbGlkIiwib25Db3VudHJ5U2VsZWN0IiwiZm9ybWF0IiwiZ2V0RXhhbXBsZU51bWJlciIsIk1PQklMRSIsInBsYWNlaG9sZGVyVG9NYXNrIiwic2V0U3RhdGUiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsIm9uSW5wdXRCbHVyIiwicmVxdWlyZWQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJnZXRGdWxsTnVtYmVyIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwidHJpbVN0YXJ0IiwicmVwbGFjZSIsImNvdW50cnlfaXNvMiIsImdldCIsIm51bWJlciIsInVuZGVmaW5lZCIsImdldENvdW50cnlDb2RlIiwiZ2V0TnVtYmVyIiwiRTE2NCIsInRlc3QiLCJyZWFkb25seSIsIm1hc2tJbnB1dFByb3BzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O1FBZWdCQSxXLEdBQUFBLFc7UUFRQUMsYSxHQUFBQSxhOztBQXRCaEI7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxZQUFZLHNDQUFnQkMsV0FBaEIsRUFBbEI7O0FBRU8sU0FBU0gsV0FBVCxDQUFzQkksS0FBdEIsRUFBNkI7QUFDbENBLFVBQVFBLE1BQU1DLFFBQU4sRUFBUjtBQUNBLE1BQUksQ0FBQ0MsRUFBRUMsVUFBRixDQUFhSCxLQUFiLEVBQW9CLEdBQXBCLENBQUwsRUFBK0I7QUFDN0JBLFlBQVEsTUFBTUEsS0FBZDtBQUNEO0FBQ0QsU0FBT0YsVUFBVU0sb0JBQVYsQ0FBK0JKLEtBQS9CLENBQVA7QUFDRDs7QUFFTSxTQUFTSCxhQUFULENBQXdCRyxLQUF4QixFQUErQjtBQUNwQyxNQUFJO0FBQ0YsV0FBT0YsVUFBVUQsYUFBVixDQUF3QkQsWUFBWUksS0FBWixDQUF4QixDQUFQO0FBQ0QsR0FGRCxDQUVFLE9BQU9LLEVBQVAsRUFBVyxDQUNaO0FBQ0QsU0FBTyxLQUFQO0FBRUQ7O0FBRUQsSUFBTUMsWUFBWSxpQ0FBbEI7QUFDQSxJQUFNQyxnQkFBZ0JMLEVBQUVNLFNBQUYsQ0FBWU4sRUFBRU8sR0FBRixDQUFNSCxTQUFOLEVBQWlCLFVBQUNJLENBQUQ7QUFBQSxTQUFPLENBQUNBLEVBQUVDLElBQUgsRUFBU0QsQ0FBVCxDQUFQO0FBQUEsQ0FBakIsQ0FBWixDQUF0QjtBQUNBLElBQU1FLHlCQUF5QlYsRUFBRU0sU0FBRixDQUFZTixFQUFFTyxHQUFGLENBQU1ILFNBQU4sRUFBaUIsVUFBQ0ksQ0FBRDtBQUFB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QU9FLHVCQUFlLElBUGpCO0FBUUUsaUJBQVN5QixZQVJYO0FBU0UsZ0JBQVEsS0FBS1c7QUFUZixTQVpOO0FBMkJEOzs7OzZCQTNNTTVCLFMsR0FBWTtBQUNqQlgsZ0JBQWMsb0JBQVUwRCxNQURQO0FBRWpCM0QsWUFBVSxvQkFBVWUsSUFGSDtBQUdqQi9CLFNBQU8sb0JBQVUyRSxNQUhBO0FBSWpCaEMsa0JBQWdCLG9CQUFVZ0MsTUFKVDtBQUtqQmxDLFdBQVMsb0JBQVVrQyxNQUxGO0FBTWpCN0IsV0FBUyxvQkFBVWQsSUFORjtBQU9qQnlDLFlBQVUsb0JBQVV6QyxJQVBIO0FBUWpCUixZQUFVLG9CQUFVUTtBQVJILEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgUGhvbmVOdW1iZXJGb3JtYXQgYXMgUE5GLCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBNYXNrSW5wdXQgfSBmcm9tICcuLi9NYXNrSW5wdXQnXG5cbmltcG9ydCB7IFBvcHVwU2VsZWN0IH0gZnJvbSAnLi4vUG9wdXBTZWxlY3QnXG5cbmltcG9ydCB7IGdldENvdW50cmllcyB9IGZyb20gJy4vQWxsQ291bnRyaWVzJ1xuXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcblxuY29uc3QgcGhvbmVVdGlsID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKClcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtYmVyICh2YWx1ZSkge1xuICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgaWYgKCFfLnN0YXJ0c1dpdGgodmFsdWUsICcrJykpIHtcbiAgICB2YWx1ZSA9ICcrJyArIHZhbHVlXG4gIH1cbiAgcmV0dXJuIHBob25lVXRpbC5wYXJzZUFuZEtlZXBSYXdJbnB1dCh2YWx1ZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWROdW1iZXIgKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBob25lVXRpbC5pc1ZhbGlkTnVtYmVyKHBhcnNlTnVtYmVyKHZhbHVlKSlcbiAgfSBjYXRjaCAoZXgpIHtcbiAgfVxuICByZXR1cm4gZmFsc2VcblxufVxuXG5jb25zdCBDT1VOVFJJRVMgPSBnZXRDb3VudHJpZXMoKVxuY29uc3QgQ09VTlRSSUVTX01BUCA9IF8uZnJvbVBhaXJzKF8ubWFwKENPVU5UUklFUywgKGMpID0+IFtjLmlzbzIsIGNdKSlcbmNvbnN0IENPVU5UUklFU19DT0RFMklTT19NQVAgPSBfLmZyb21QYWlycyhfLm1hcChDT1VOVFJJRVMsIChjKSA9PiBbYy5kaWFsQ29kZSwgYy5pc28yXSkpXG5cbmNsYXNzIENvdW50cnlTZWxlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2YoXy5rZXlzKENPVU5UUklFU19NQVApKSxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZihfLmtleXMoQ09VTlRSSUVTX01BUCkpLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd0NvdW50cnlJY29uOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHtvbkNoYW5nZSwgZGVmYXVsdFZhbHVlLCBzaG93Q291bnRyeUljb259ID0gdGhpcy5wcm9wc1xuICAgIGlmIChvbkNoYW5nZSAmJiBkZWZhdWx0VmFsdWUgJiYgQ09VTlRSSUVTX01BUFtkZWZhdWx0VmFsdWVdKSB7XG4gICAgICBvbkNoYW5nZShkZWZhdWx0VmFsdWUsIHtjb3VudHJ5RGF0YTogQ09VTlRSSUVTX01BUFtkZWZhdWx0VmFsdWVdfSlcbiAgICB9XG4gICAgaWYgKHNob3dDb3VudHJ5SWNvbikge1xuICAgICAgLy8gVE9ETyB1c2UgbGl0ZSBwbmcgdmVyc2lvblxuICAgIH1cblxuICB9XG5cbiAgZ2V0T3B0aW9ucyAoKSB7XG4gICAgcmV0dXJuIF8ubWFwKENPVU5UUklFUywgKGNvdW50cnlEYXRhKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogY291bnRyeURhdGEuaXNvMixcbiAgICAgICAgbGFiZWw6IGNvdW50cnlEYXRhLm5hbWUsXG4gICAgICAgIGNvdW50cnlEYXRhXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlck9wdGlvbkxhYmVsIChvcHRpb24sIHByb3BzKSB7XG4gICAgY29uc3Qge2NvdW50cnlEYXRhfSA9IG9wdGlvblxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZmxhZy1pY29uIGZsYWctaWNvbi0ke2NvdW50cnlEYXRhLmlzbzJ9YH0vPlxuICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaWFsQ29kZVwiPiZuYnNwOyAre2NvdW50cnlEYXRhLmRpYWxDb2RlfTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICApXG4gIH1cblxuICByZW5kZXJGaWVsZExhYmVsIChvcHRpb24sIHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BmbGFnLWljb24gZmxhZy1pY29uLSR7b3B0aW9uLmNvdW50cnlEYXRhLmlzbzJ9YH0vPlxuICAgICAgICAgICAgICAre29wdGlvbi5jb3VudHJ5RGF0YS5kaWFsQ29kZX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi9zaG93LW1vcmUuc3ZnJyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7b25DaGFuZ2UsIGRlZmF1bHRWYWx1ZSwgdmFsdWUsIGRpc2FibGVkfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcHVwU2VsZWN0IG9wdGlvbnM9e3RoaXMuZ2V0T3B0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbkxhYmVsPXt0aGlzLnJlbmRlck9wdGlvbkxhYmVsfVxuICAgICAgICAgICAgICAgICAgIHJlbmRlckZpZWxkTGFiZWw9e3RoaXMucmVuZGVyRmllbGRMYWJlbH1cbiAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlhbF9jb2RlXCJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRDb3VudHJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvdW50cnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVhZG9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICB9XG4gIGluaXRpYWxWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWVcbiAgaGFzQ3VzdG9tUGxhY2Vob2xkZXIgPSAhIXRoaXMucHJvcHMucGxhY2Vob2xkZXJcblxuICBwaG9uZVV0aWwgPSBwaG9uZVV0aWxcblxuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogdGhpcy5mb3JtYXRWYWx1ZSh0aGlzLmluaXRpYWxWYWx1ZSksXG4gICAgaXNWYWxpZDogZmFsc2UsXG4gICAgaXNFbXB0eTogIXRoaXMuaW5pdGlhbFZhbHVlLFxuICAgIGNvdW50cnk6IENPVU5UUklFU19NQVBbdGhpcy5wYXJzZUNvdW50cnkodGhpcy5pbml0aWFsVmFsdWUpIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvdW50cnldLFxuICAgIHBsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLFxuICAgIG1hc2s6IG51bGwsXG4gICAgaW52YWxpZFN0YXRlOiB0aGlzLnByb3BzLmludmFsaWRcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCB7b25DaGFuZ2V9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHt2YWx1ZSwgaXNWYWxpZH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKG9uQ2hhbmdlICYmIHByZXZTdGF0ZS52YWx1ZSAhPSB2YWx1ZSkge1xuICAgICAgb25DaGFuZ2UoaXNWYWxpZCA/IHRoaXMuZ2V0RnVsbE51bWJlcih2YWx1ZSkgOiBudWxsKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHt2YWx1ZSwgY291bnRyeX0gPSBuZXh0UHJvcHNcbiAgICBsZXQgbmV4dFN0YXRlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOiB0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSxcbiAgICAgICAgY291bnRyeTogQ09VTlRSSUVTX01BUFt0aGlzLnBhcnNlQ291bnRyeSh2YWx1ZSldXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb3VudHJ5KSB7XG4gICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgY291bnRyeTogQ09VTlRSSUVTX01BUFtjb3VudHJ5XVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV4dFN0YXRlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKCh7fSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLm5leHRTdGF0ZSxcbiAgICAgICAgICBpc1ZhbGlkOiB0aGlzLmlzVmFsaWROdW1iZXIodmFsdWUsIG5leHRTdGF0ZS5jb3VudHJ5KSxcbiAgICAgICAgICBpc0VtcHR5OiB0aGlzLmlzRW1wdHkodmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICBwbGFjZWhvbGRlclRvTWFzayAocGxhY2Vob2xkZXIsIGRpYWxDb2RlKSB7XG4gICAgaWYgKGRpYWxDb2RlICYmICFkaWFsQ29kZS5zdGFydHNXaXRoKCcrJykpIHtcbiAgICAgIGRpYWxDb2RlID0gYCske2RpYWxDb2RlfWBcbiAgICB9XG4gICAgbGV0IG1hc2sgPSBfLnRyaW1TdGFydChwbGFjZWhvbGRlciwgZGlhbENvZGUpLnJlcGxhY2UoL1xcZC9nLCA5KVxuICAgIGlmIChkaWFsQ29kZSkge1xuICAgICAgZGlhbENvZGUgPSBkaWFsQ29kZS5yZXBsYWNlKC9bOV0vZywgJ1xcXFw5JylcbiAgICAgIHJldHVybiBgJHtkaWFsQ29kZX0ke21hc2t9YFxuICAgIH1cbiAgICByZXR1cm4gbWFza1xuICB9XG5cbiAgb25Db3VudHJ5U2VsZWN0ID0gKHZhbHVlLCB7Y291bnRyeURhdGF9KSA9PiB7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBwaG9uZVV0aWwuZm9ybWF0KFxuICAgICAgcGhvbmVVdGlsLmdldEV4YW1wbGVOdW1iZXIoY291bnRyeURhdGEuaXNvMiwgZmFsc2UsIFBORi5NT0JJTEUpLCBQTkYuTU9CSUxFKVxuICAgIGNvbnN0IG1hc2sgPSB0aGlzLnBsYWNlaG9sZGVyVG9NYXNrKHBsYWNlaG9sZGVyKVxuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50cnk6IGNvdW50cnlEYXRhLCBwbGFjZWhvbGRlciwgbWFza30pXG4gIH1cblxuICBwYXJzZU51bWJlciAodmFsdWUsIGNvdW50cnkpIHtcbiAgICBjb25zdCBjb3VudHJ5X2lzbzIgPSBfLmdldChjb3VudHJ5LCAnaXNvMicpXG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRyeSByZWdpb24gdmFsdWUsIGFzIGV4YW1wbGUgOTk5IDQ0NC01NS01NVxuICAgICAgaWYgKGNvdW50cnlfaXNvMikge1xuICAgICAgICAvLyBjb25zdCByZWdpb25Db2RlID0gcGhvbmVVdGlsLmdldFJlZ2lvbkNvZGVGb3JDb3VudHJ5Q29kZShjb3VudHJ5X2lzbzIpO1xuICAgICAgICByZXR1cm4gcGhvbmVVdGlsLnBhcnNlQW5kS2VlcFJhd0lucHV0KHZhbHVlLCBjb3VudHJ5X2lzbzIpXG4gICAgICB9XG4gICAgICAvLyBNYXkgYmUgKzcgLi4uXG4gICAgICByZXR1cm4gcGhvbmVVdGlsLnBhcnNlQW5kS2VlcFJhd0lucHV0KHZhbHVlKVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAvLyBUcnkgbm9uIGNhbGxlZCBjb2RlIDc5OTk1NTU0NDMzXG4gICAgICBpZiAoIV8uc3RhcnRzV2l0aCh2YWx1ZSwgJysnKSkge1xuICAgICAgICB2YWx1ZSA9ICcrJyArIHZhbHVlXG4gICAgICB9XG4gICAgICByZXR1cm4gcGhvbmVVdGlsLnBhcnNlQW5kS2VlcFJhd0lucHV0KHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZvcm1hdFZhbHVlICh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICB2YWx1ZSA9IHBob25lVXRpbC5mb3JtYXQodGhpcy5wYXJzZU51bWJlcih2YWx1ZSksIFBORi5NT0JJTEUpXG4gICAgcmV0dXJuIHZhbHVlIHx8ICcnXG5cbiAgfVxuXG4gIHBhcnNlQ291bnRyeSAodmFsdWUpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLnBhcnNlTnVtYmVyKHZhbHVlKVxuICAgIGlmICghbnVtYmVyKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIHJldHVybiBDT1VOVFJJRVNfQ09ERTJJU09fTUFQW251bWJlci5nZXRDb3VudHJ5Q29kZSgpXVxuICB9XG5cbiAgZ2V0TnVtYmVyICh2YWx1ZSwgY291bnRyeSA9IG51bGwpIHtcbiAgICBpZiAoIWNvdW50cnkpIHtcbiAgICAgIGNvdW50cnkgPSB0aGlzLnN0YXRlLmNvdW50cnlcbiAgICB9XG4gICAgcmV0dXJuIGArJHtjb3VudHJ5LmRpYWxDb2RlfSAke3ZhbHVlfWBcbiAgfVxuXG4gIGdldEZ1bGxOdW1iZXIgKHZhbHVlLCBjb3VudHJ5ID0gbnVsbCkge1xuICAgIHJldHVybiBwaG9uZVV0aWwuZm9ybWF0KHRoaXMucGFyc2VOdW1iZXIodGhpcy5nZXROdW1iZXIodmFsdWUsIGNvdW50cnkpKSwgUE5GLkUxNjQpXG4gIH1cblxuICBpc1ZhbGlkTnVtYmVyICh2YWx1ZSwgY291bnRyeSA9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHBob25lVXRpbC5pc1ZhbGlkTnVtYmVyKHRoaXMucGFyc2VOdW1iZXIodmFsdWUsIGNvdW50cnkpKVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaXNFbXB0eSAodmFsdWUpIHtcbiAgICByZXR1cm4gIXZhbHVlIHx8ICEvXFxkLy50ZXN0KHZhbHVlKVxuICB9XG5cbiAgb25DaGFuZ2VJbnB1dCA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoKHtjb3VudHJ5fSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGlzVmFsaWQ6IHRoaXMuaXNWYWxpZE51bWJlcih2YWx1ZSwgY291bnRyeSksXG4gICAgICAgIGlzRW1wdHk6IHRoaXMuaXNFbXB0eSh2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25JbnB1dEJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHtyZXF1aXJlZCwgaW52YWxpZH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSgoe2lzRW1wdHksIHZhbHVlLCBjb3VudHJ5fSkgPT4ge1xuICAgICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuaXNWYWxpZE51bWJlcih2YWx1ZSwgY291bnRyeSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsXG4gICAgICAgIGludmFsaWRTdGF0ZTogaW52YWxpZCB8fCAoIWlzRW1wdHkgJiYgIWlzVmFsaWQpIHx8IChyZXF1aXJlZCAmJiBpc0VtcHR5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtkZWZhdWx0Q291bnRyeSwgaW52YWxpZCwgcmVhZG9ubHksIGRpc2FibGVkLCBsYWJlbH0gPSB0aGlzLnByb3BzXG4gICAgLy8gVE9ETyBDdXN0b20gcGxhY2Vob2xkZXJcbiAgICBjb25zdCB7bWFzaywgcGxhY2Vob2xkZXIsIHZhbHVlLCBjb3VudHJ5LCBpbnZhbGlkU3RhdGV9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGNvdW50cnlfaXNvMiA9IF8uZ2V0KGNvdW50cnksICdpc28yJylcbiAgICBjb25zdCBtYXNrSW5wdXRQcm9wcyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBtYXNrLFxuICAgICAgcmVhZG9ubHksXG4gICAgICBkaXNhYmxlZFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZS1pbnB1dC1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLWNvdW50cnlcIj5cbiAgICAgICAgICA8Q291bnRyeVNlbGVjdFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0Q291bnRyeX1cbiAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5X2lzbzJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNvdW50cnlTZWxlY3R9XG4gICAgICAgICAgICByZWY9XCJzZWxlY3RcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IHJlYWRvbmx5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLWlucHV0XCI+XG4gICAgICAgICAgPE1hc2tJbnB1dFxuICAgICAgICAgICAgey4uLm1hc2tJbnB1dFByb3BzfVxuICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICBtYXNrQ2hhcj17bnVsbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlSW5wdXR9XG4gICAgICAgICAgICBsYWJlbD17bGFiZWwgfHwgJ9Cd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCd9XG4gICAgICAgICAgICBmbG9hdGluZ0xhYmVsPXt0cnVlfVxuICAgICAgICAgICAgaW52YWxpZD17aW52YWxpZFN0YXRlfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uSW5wdXRCbHVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIH1cbn1cblxuIl19