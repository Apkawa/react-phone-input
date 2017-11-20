'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountrySelect = exports.COUNTRIES_CODE2ISO_MAP = exports.COUNTRIES_MAP = exports.COUNTRIES = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _googleLibphonenumber = require('google-libphonenumber');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PopupSelect = require('../PopupSelect');

var _AllCountries = require('./AllCountries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COUNTRIES = exports.COUNTRIES = (0, _AllCountries.getCountries)();
var COUNTRIES_MAP = exports.COUNTRIES_MAP = _.fromPairs(_.map(COUNTRIES, function (c) {
  return [c.iso2, c];
}));
var COUNTRIES_CODE2ISO_MAP = exports.COUNTRIES_CODE2ISO_MAP = _.fromPairs(_.map(COUNTRIES, function (c) {
  return [c.dialCode, c.iso2];
}));

var CountrySelect = exports.CountrySelect = (_temp = _class = function (_React$Component) {
  _inherits(CountrySelect, _React$Component);

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
}(_react2.default.Component), _class.propTypes = {
  value: _propTypes2.default.oneOf(_.keys(COUNTRIES_MAP)),
  defaultValue: _propTypes2.default.oneOf(_.keys(COUNTRIES_MAP)),
  onChange: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  showCountryIcon: _propTypes2.default.bool
}, _temp);
exports.default = CountrySelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Bob25lSW5wdXQvQ291bnRyeVNlbGVjdC5qc3giXSwibmFtZXMiOlsiQ09VTlRSSUVTIiwiQ09VTlRSSUVTX01BUCIsIl8iLCJmcm9tUGFpcnMiLCJtYXAiLCJjIiwiaXNvMiIsIkNPVU5UUklFU19DT0RFMklTT19NQVAiLCJkaWFsQ29kZSIsIkNvdW50cnlTZWxlY3QiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiZGVmYXVsdFZhbHVlIiwic2hvd0NvdW50cnlJY29uIiwiY291bnRyeURhdGEiLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm9wdGlvbiIsInJlcXVpcmUiLCJkaXNhYmxlZCIsImdldE9wdGlvbnMiLCJyZW5kZXJPcHRpb25MYWJlbCIsInJlbmRlckZpZWxkTGFiZWwiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvbmVPZiIsImtleXMiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxnQ0FBWSxpQ0FBbEI7QUFDQSxJQUFNQyx3Q0FBZ0JDLEVBQUVDLFNBQUYsQ0FBWUQsRUFBRUUsR0FBRixDQUFNSixTQUFOLEVBQWlCLFVBQUNLLENBQUQ7QUFBQSxTQUFPLENBQUNBLEVBQUVDLElBQUgsRUFBU0QsQ0FBVCxDQUFQO0FBQUEsQ0FBakIsQ0FBWixDQUF0QjtBQUNBLElBQU1FLDBEQUF5QkwsRUFBRUMsU0FBRixDQUFZRCxFQUFFRSxHQUFGLENBQU1KLFNBQU4sRUFBaUIsVUFBQ0ssQ0FBRDtBQUFBLFNBQU8sQ0FBQ0EsRUFBRUcsUUFBSCxFQUFhSCxFQUFFQyxJQUFmLENBQVA7QUFBQSxDQUFqQixDQUFaLENBQS9COztJQUVNRyxhLFdBQUFBLGE7Ozs7Ozs7Ozs7O3dDQVNVO0FBQUEsbUJBQytCLEtBQUtDLEtBRHBDO0FBQUEsVUFDWkMsUUFEWSxVQUNaQSxRQURZO0FBQUEsVUFDRkMsWUFERSxVQUNGQSxZQURFO0FBQUEsVUFDWUMsZUFEWixVQUNZQSxlQURaOztBQUVuQixVQUFJRixZQUFZQyxZQUFaLElBQTRCWCxjQUFjVyxZQUFkLENBQWhDLEVBQTZEO0FBQzNERCxpQkFBU0MsWUFBVCxFQUF1QixFQUFDRSxhQUFhYixjQUFjVyxZQUFkLENBQWQsRUFBdkI7QUFDRDtBQUNELFVBQUlDLGVBQUosRUFBcUI7QUFDbkI7QUFDRDtBQUVGOzs7aUNBRWE7QUFDWixhQUFPWCxFQUFFRSxHQUFGLENBQU1KLFNBQU4sRUFBaUIsVUFBQ2MsV0FBRCxFQUFpQjtBQUN2QyxlQUFPO0FBQ0xDLGlCQUFPRCxZQUFZUixJQURkO0FBRUxVLGlCQUFPRixZQUFZRyxJQUZkO0FBR0xIO0FBSEssU0FBUDtBQUtELE9BTk0sQ0FBUDtBQU9EOzs7c0NBRWtCSSxNLEVBQVFSLEssRUFBTztBQUFBLFVBQ3pCSSxXQUR5QixHQUNWSSxNQURVLENBQ3pCSixXQUR5Qjs7QUFFaEM7QUFBQSw0Q0FFNENBLFlBQVlSO0FBRnhELFVBR0tZLE9BQU9GLEtBSFo7QUFBQSxtQkFJb0I7QUFKcEIsMkJBSXdDRixZQUFZTixRQUpwRDtBQU9EOzs7cUNBRWlCVSxNLEVBQVFSLEssRUFBTztBQUMvQjtBQUFBLDRDQUU0Q1EsT0FBT0osV0FBUCxDQUFtQlI7QUFGL0QsZUFHWVksT0FBT0osV0FBUCxDQUFtQk4sUUFIL0I7QUFBQSxtQkFJbUI7QUFKbkI7QUFBQSxhQUtrQlcsUUFBUSxpQkFBUjtBQUxsQjtBQVNEOzs7NkJBRVM7QUFBQSxvQkFDMEMsS0FBS1QsS0FEL0M7QUFBQSxVQUNEQyxRQURDLFdBQ0RBLFFBREM7QUFBQSxVQUNTQyxZQURULFdBQ1NBLFlBRFQ7QUFBQSxVQUN1QkcsS0FEdkIsV0FDdUJBLEtBRHZCO0FBQUEsVUFDOEJLLFFBRDlCLFdBQzhCQSxRQUQ5Qjs7QUFFUjtBQUFBLGlCQUN3QixLQUFLQyxVQUFMLEVBRHhCO0FBQUEsMkJBRWtDLEtBQUtDLGlCQUZ2QztBQUFBLDBCQUdpQyxLQUFLQyxnQkFIdEM7QUFBQSxjQUlvQixXQUpwQjtBQUFBLGVBS3NCUixLQUx0QjtBQUFBLHNCQU02QkgsWUFON0I7QUFBQSxrQkFPeUJELFFBUHpCO0FBQUEsa0JBUXlCUztBQVJ6QjtBQVdEOzs7O0VBbEVnQyxnQkFBTUksUyxVQUNoQ0MsUyxHQUFZO0FBQ2pCVixTQUFPLG9CQUFVVyxLQUFWLENBQWdCeEIsRUFBRXlCLElBQUYsQ0FBTzFCLGFBQVAsQ0FBaEIsQ0FEVTtBQUVqQlcsZ0JBQWMsb0JBQVVjLEtBQVYsQ0FBZ0J4QixFQUFFeUIsSUFBRixDQUFPMUIsYUFBUCxDQUFoQixDQUZHO0FBR2pCVSxZQUFVLG9CQUFVaUIsSUFISDtBQUlqQlIsWUFBVSxvQkFBVVMsSUFKSDtBQUtqQmhCLG1CQUFpQixvQkFBVWdCO0FBTFYsQztrQkFxRU5wQixhIiwiZmlsZSI6IkNvdW50cnlTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFBvcHVwU2VsZWN0IH0gZnJvbSAnLi4vUG9wdXBTZWxlY3QnXG5cbmltcG9ydCB7IGdldENvdW50cmllcyB9IGZyb20gJy4vQWxsQ291bnRyaWVzJ1xuXG5leHBvcnQgY29uc3QgQ09VTlRSSUVTID0gZ2V0Q291bnRyaWVzKClcbmV4cG9ydCBjb25zdCBDT1VOVFJJRVNfTUFQID0gXy5mcm9tUGFpcnMoXy5tYXAoQ09VTlRSSUVTLCAoYykgPT4gW2MuaXNvMiwgY10pKVxuZXhwb3J0IGNvbnN0IENPVU5UUklFU19DT0RFMklTT19NQVAgPSBfLmZyb21QYWlycyhfLm1hcChDT1VOVFJJRVMsIChjKSA9PiBbYy5kaWFsQ29kZSwgYy5pc28yXSkpXG5cbmV4cG9ydCBjbGFzcyBDb3VudHJ5U2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mKF8ua2V5cyhDT1VOVFJJRVNfTUFQKSksXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2YoXy5rZXlzKENPVU5UUklFU19NQVApKSxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dDb3VudHJ5SWNvbjogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCB7b25DaGFuZ2UsIGRlZmF1bHRWYWx1ZSwgc2hvd0NvdW50cnlJY29ufSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25DaGFuZ2UgJiYgZGVmYXVsdFZhbHVlICYmIENPVU5UUklFU19NQVBbZGVmYXVsdFZhbHVlXSkge1xuICAgICAgb25DaGFuZ2UoZGVmYXVsdFZhbHVlLCB7Y291bnRyeURhdGE6IENPVU5UUklFU19NQVBbZGVmYXVsdFZhbHVlXX0pXG4gICAgfVxuICAgIGlmIChzaG93Q291bnRyeUljb24pIHtcbiAgICAgIC8vIFRPRE8gdXNlIGxpdGUgcG5nIHZlcnNpb25cbiAgICB9XG5cbiAgfVxuXG4gIGdldE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBfLm1hcChDT1VOVFJJRVMsIChjb3VudHJ5RGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IGNvdW50cnlEYXRhLmlzbzIsXG4gICAgICAgIGxhYmVsOiBjb3VudHJ5RGF0YS5uYW1lLFxuICAgICAgICBjb3VudHJ5RGF0YVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW5kZXJPcHRpb25MYWJlbCAob3B0aW9uLCBwcm9wcykge1xuICAgIGNvbnN0IHtjb3VudHJ5RGF0YX0gPSBvcHRpb25cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZsYWctaWNvbiBmbGFnLWljb24tJHtjb3VudHJ5RGF0YS5pc28yfWB9Lz5cbiAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlhbENvZGVcIj4mbmJzcDsgK3tjb3VudHJ5RGF0YS5kaWFsQ29kZX08L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRmllbGRMYWJlbCAob3B0aW9uLCBwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZmxhZy1pY29uIGZsYWctaWNvbi0ke29wdGlvbi5jb3VudHJ5RGF0YS5pc28yfWB9Lz5cbiAgICAgICAgICAgICAgK3tvcHRpb24uY291bnRyeURhdGEuZGlhbENvZGV9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4vc2hvdy1tb3JlLnN2ZycpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge29uQ2hhbmdlLCBkZWZhdWx0VmFsdWUsIHZhbHVlLCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3B1cFNlbGVjdCBvcHRpb25zPXt0aGlzLmdldE9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb25MYWJlbD17dGhpcy5yZW5kZXJPcHRpb25MYWJlbH1cbiAgICAgICAgICAgICAgICAgICByZW5kZXJGaWVsZExhYmVsPXt0aGlzLnJlbmRlckZpZWxkTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgbmFtZT1cImRpYWxfY29kZVwiXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlTZWxlY3QiXX0=