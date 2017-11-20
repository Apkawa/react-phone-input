'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopupSelect = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mui = require('../mui');

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopupSelect = exports.PopupSelect = (_temp2 = _class = function (_Component) {
  _inherits(PopupSelect, _Component);

  function PopupSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PopupSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopupSelect.__proto__ || Object.getPrototypeOf(PopupSelect)).call.apply(_ref, [this].concat(args))), _this), _this.options_map = _immutable2.default.Map(_immutable2.default.fromJS(_this.props.options).reduce(function (result, item) {
      result[item.get('value')] = item;
      return result;
    }, {})), _this.state = {
      show_popup: false,
      value: _this.props.value || _this.props.defaultValue,
      checked_value: _this.props.value || _this.props.defaultValue,
      checked_option: _this.options_map.get(_this.props.value || _this.props.defaultValue)
    }, _this.onChange = function (value) {
      var onChange = _this.props.onChange;

      if (onChange) {
        var option = _this.options_map.get(value);
        onChange(value, option && option.toJS());
      }
    }, _this.onCloseSelect = function (e) {
      if (e && e.target !== _this.refs.overlay) {
        return;
      }
      _this.setState({ show_popup: false });
    }, _this.onCancelSelect = function (e) {
      _this.setState({ checked_value: _this.state.value });
      _this.onCloseSelect();
    }, _this.onCompleteSelect = function () {
      _this.setState({ value: _this.state.checked_value });
      _this.onCloseSelect();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PopupSelect, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.value !== this.state.value) {
        this.onChange(this.state.value);
      }
      if (prevState.show_popup !== this.state.show_popup) {
        if (this.state.show_popup || this.props.onPopupOpened) {
          this.props.onPopupOpened();
        } else {
          this.props.onPopupClosed();
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;

      var checkedValue = value;
      if (_lodash2.default.isUndefined(checkedValue)) {
        checkedValue = this.props.defaultValue;
      }
      this.setState({
        value: checkedValue,
        checked_value: checkedValue,
        checked_option: this.options_map.get(checkedValue)
      });
    }
  }, {
    key: 'renderOptionLabel',
    value: function renderOptionLabel(option) {
      var _props = this.props,
          renderOptionLabel = _props.renderOptionLabel,
          props = _objectWithoutProperties(_props, ['renderOptionLabel']);

      if (renderOptionLabel) {
        return renderOptionLabel(option, props);
      }
      return option.label;
    }
  }, {
    key: 'renderOption',
    value: function renderOption(option, i) {
      var _this2 = this;

      var _props2 = this.props,
          renderOption = _props2.renderOption,
          props = _objectWithoutProperties(_props2, ['renderOption']);

      if (renderOption) {
        return renderOption(option, props);
      }
      return _jsx('div', {
        className: 'mui-radio'
      }, i, _jsx('label', {
        onClick: function onClick(e) {
          _this2.setState({ value: e.target.value });
          _this2.onCloseSelect();
        }
      }, void 0, _jsx('input', {
        type: 'radio',
        name: props.name,
        value: option.value,
        defaultChecked: option.value === this.state.value,
        onChange: function onChange(e) {
          return _this2.setState({
            checked_value: e.target.value,
            checked_option: _this2.options_map.get(e.target.value)
          });
        }
      }), this.renderOptionLabel(option)));
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var options = this.props.options;

      if (!this.state.show_popup) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'select-wrap', onClick: this.onCloseSelect, ref: 'overlay' },
        _jsx('div', {
          className: 'select-panel'
        }, void 0, _jsx(_mui.MuiPanel, {}, void 0, _jsx('div', {
          className: 'select-content'
        }, void 0, _lodash2.default.map(options, this.renderOption.bind(this)))))
      );
    }
  }, {
    key: 'renderFieldLabel',
    value: function renderFieldLabel(option) {
      var _props3 = this.props,
          placeholder = _props3.placeholder,
          renderFieldLabel = _props3.renderFieldLabel;


      if (renderFieldLabel) {
        return renderFieldLabel(option, this.props);
      }
      if (!option) {
        if (placeholder) {
          return placeholder;
        }
        return 'Выберите';
      }

      return this.renderOptionLabel(option);
    }
  }, {
    key: 'getCheckedOption',
    value: function getCheckedOption() {
      var value = this.state.value;

      var checkedValue = value;
      if (_lodash2.default.isUndefined(checkedValue)) {
        checkedValue = this.props.defaultValue;
      }

      var checked_option = this.options_map.get(checkedValue);
      if (checked_option) {
        checked_option = checked_option.toJS();
      }
      return checked_option;
    }
  }, {
    key: 'renderField',
    value: function renderField() {
      var _this3 = this;

      var _props4 = this.props,
          renderField = _props4.renderField,
          placeholder = _props4.placeholder,
          disabled = _props4.disabled,
          readOnly = _props4.readOnly;


      var checked_option = this.getCheckedOption();

      var onClick = function onClick() {
        if (!disabled) {
          _this3.setState({ show_popup: !disabled });
        }
      };
      if (renderField) {
        return renderField(checked_option, { onClick: onClick, placeholder: placeholder });
      }
      return _jsx('div', {
        className: 'select-field',
        onClick: onClick
      }, void 0, this.renderFieldLabel(checked_option));
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;


      return _jsx('div', {
        className: 'material-select'
      }, void 0, _jsx('input', {
        type: 'hidden',
        value: value
      }), this.renderField(), this.renderOptions());
    }
  }]);

  return PopupSelect;
}(_react.Component), _class.propTypes = {
  name: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  renderOption: _propTypes2.default.func,
  renderOptionLabel: _propTypes2.default.func,
  renderField: _propTypes2.default.func,
  defaultValue: _propTypes2.default.any,
  disabled: _propTypes2.default.disabled,
  readOnly: _propTypes2.default.readonly,
  onPopupOpened: _propTypes2.default.func,
  onPopupClosed: _propTypes2.default.func
}, _class.defaultProps = {
  defaultValue: 'ru'
}, _temp2);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BvcHVwU2VsZWN0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJQb3B1cFNlbGVjdCIsIm9wdGlvbnNfbWFwIiwiTWFwIiwiZnJvbUpTIiwicHJvcHMiLCJvcHRpb25zIiwicmVkdWNlIiwicmVzdWx0IiwiaXRlbSIsImdldCIsInN0YXRlIiwic2hvd19wb3B1cCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiY2hlY2tlZF92YWx1ZSIsImNoZWNrZWRfb3B0aW9uIiwib25DaGFuZ2UiLCJvcHRpb24iLCJ0b0pTIiwib25DbG9zZVNlbGVjdCIsImUiLCJ0YXJnZXQiLCJyZWZzIiwib3ZlcmxheSIsInNldFN0YXRlIiwib25DYW5jZWxTZWxlY3QiLCJvbkNvbXBsZXRlU2VsZWN0IiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25Qb3B1cE9wZW5lZCIsIm9uUG9wdXBDbG9zZWQiLCJuZXh0UHJvcHMiLCJjaGVja2VkVmFsdWUiLCJpc1VuZGVmaW5lZCIsInJlbmRlck9wdGlvbkxhYmVsIiwibGFiZWwiLCJpIiwicmVuZGVyT3B0aW9uIiwibmFtZSIsIm1hcCIsImJpbmQiLCJwbGFjZWhvbGRlciIsInJlbmRlckZpZWxkTGFiZWwiLCJyZW5kZXJGaWVsZCIsImRpc2FibGVkIiwicmVhZE9ubHkiLCJnZXRDaGVja2VkT3B0aW9uIiwib25DbGljayIsInJlbmRlck9wdGlvbnMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCIsImZ1bmMiLCJhbnkiLCJyZWFkb25seSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFYUEsVyxXQUFBQSxXOzs7Ozs7Ozs7Ozs7OztnTUFtQlhDLFcsR0FBYyxvQkFBVUMsR0FBVixDQUNaLG9CQUFVQyxNQUFWLENB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akJ4QixpQkFBZSxvQkFBVXdCO0FBWlIsQyxTQWVaRyxZLEdBQWU7QUFDcEI1QyxnQkFBYztBQURNLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJ1xuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IE11aVBhbmVsIH0gZnJvbSAnLi4vbXVpJ1xuXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcblxuZXhwb3J0IGNsYXNzIFBvcHVwU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZW5kZXJPcHRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbmRlck9wdGlvbkxhYmVsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZW5kZXJGaWVsZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuZGlzYWJsZWQsXG4gICAgcmVhZE9ubHk6IFByb3BUeXBlcy5yZWFkb25seSxcbiAgICBvblBvcHVwT3BlbmVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblBvcHVwQ2xvc2VkOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWZhdWx0VmFsdWU6ICdydSdcbiAgfVxuICBvcHRpb25zX21hcCA9IEltbXV0YWJsZS5NYXAoXG4gICAgSW1tdXRhYmxlLmZyb21KUyh0aGlzLnByb3BzLm9wdGlvbnMpXG4gICAgICAgICAgICAgLnJlZHVjZSgocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICByZXN1bHRbaXRlbS5nZXQoJ3ZhbHVlJyldID0gaXRlbVxuICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgIH0sIHt9KVxuICApXG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvd19wb3B1cDogZmFsc2UsXG4gICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgY2hlY2tlZF92YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICBjaGVja2VkX29wdGlvbjogdGhpcy5vcHRpb25zX21hcC5nZXQodGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUpXG4gICAgfVxuICAgIGlmIChwcmV2U3RhdGUuc2hvd19wb3B1cCAhPT0gdGhpcy5zdGF0ZS5zaG93X3BvcHVwKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93X3BvcHVwIHx8IHRoaXMucHJvcHMub25Qb3B1cE9wZW5lZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUG9wdXBPcGVuZWQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBvcHVwQ2xvc2VkKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7dmFsdWV9ID0gbmV4dFByb3BzXG4gICAgbGV0IGNoZWNrZWRWYWx1ZSA9IHZhbHVlXG4gICAgaWYgKF8uaXNVbmRlZmluZWQoY2hlY2tlZFZhbHVlKSkge1xuICAgICAgY2hlY2tlZFZhbHVlID0gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWVcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogY2hlY2tlZFZhbHVlLFxuICAgICAgY2hlY2tlZF92YWx1ZTogY2hlY2tlZFZhbHVlLFxuICAgICAgY2hlY2tlZF9vcHRpb246IHRoaXMub3B0aW9uc19tYXAuZ2V0KGNoZWNrZWRWYWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgb25DaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCB7b25DaGFuZ2V9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMub3B0aW9uc19tYXAuZ2V0KHZhbHVlKVxuICAgICAgb25DaGFuZ2UodmFsdWUsIG9wdGlvbiAmJiBvcHRpb24udG9KUygpKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2VTZWxlY3QgPSAoZSkgPT4ge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSB0aGlzLnJlZnMub3ZlcmxheSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dfcG9wdXA6IGZhbHNlfSlcbiAgfVxuXG4gIG9uQ2FuY2VsU2VsZWN0ID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtjaGVja2VkX3ZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlfSlcbiAgICB0aGlzLm9uQ2xvc2VTZWxlY3QoKVxuICB9XG5cbiAgb25Db21wbGV0ZVNlbGVjdCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogdGhpcy5zdGF0ZS5jaGVja2VkX3ZhbHVlfSlcbiAgICB0aGlzLm9uQ2xvc2VTZWxlY3QoKVxuICB9XG5cbiAgcmVuZGVyT3B0aW9uTGFiZWwgKG9wdGlvbikge1xuICAgIGNvbnN0IHtyZW5kZXJPcHRpb25MYWJlbCwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChyZW5kZXJPcHRpb25MYWJlbCkge1xuICAgICAgcmV0dXJuIHJlbmRlck9wdGlvbkxhYmVsKG9wdGlvbiwgcHJvcHMpXG4gICAgfVxuICAgIHJldHVybiBvcHRpb24ubGFiZWxcbiAgfVxuXG4gIHJlbmRlck9wdGlvbiAob3B0aW9uLCBpKSB7XG4gICAgY29uc3Qge3JlbmRlck9wdGlvbiwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHJlbmRlck9wdGlvbikge1xuICAgICAgcmV0dXJuIHJlbmRlck9wdGlvbihvcHRpb24sIHByb3BzKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm11aS1yYWRpb1wiPlxuICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZS50YXJnZXQudmFsdWV9KVxuICAgICAgICAgIHRoaXMub25DbG9zZVNlbGVjdCgpXG4gICAgICAgIH19PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e29wdGlvbi52YWx1ZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGNoZWNrZWRfdmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICBjaGVja2VkX29wdGlvbjogdGhpcy5vcHRpb25zX21hcC5nZXQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJPcHRpb25MYWJlbChvcHRpb24pfVxuXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJPcHRpb25zICgpIHtcbiAgICBjb25zdCB7b3B0aW9uc30gPSB0aGlzLnByb3BzXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dfcG9wdXApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC13cmFwXCIgb25DbGljaz17dGhpcy5vbkNsb3NlU2VsZWN0fSByZWY9XCJvdmVybGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXBhbmVsXCI+XG4gICAgICAgICAgPE11aVBhbmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY29udGVudFwiPlxuICAgICAgICAgICAgICB7Xy5tYXAob3B0aW9ucywgdGhpcy5yZW5kZXJPcHRpb24uYmluZCh0aGlzKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L011aVBhbmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckZpZWxkTGFiZWwgKG9wdGlvbikge1xuICAgIGNvbnN0IHtwbGFjZWhvbGRlciwgcmVuZGVyRmllbGRMYWJlbH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocmVuZGVyRmllbGRMYWJlbCkge1xuICAgICAgcmV0dXJuIHJlbmRlckZpZWxkTGFiZWwob3B0aW9uLCB0aGlzLnByb3BzKVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbikge1xuICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlclxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgJ9CS0YvQsdC10YDQuNGC0LUnXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyT3B0aW9uTGFiZWwob3B0aW9uKVxuICB9XG5cbiAgZ2V0Q2hlY2tlZE9wdGlvbiAoKSB7XG4gICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgY2hlY2tlZFZhbHVlID0gdmFsdWVcbiAgICBpZiAoXy5pc1VuZGVmaW5lZChjaGVja2VkVmFsdWUpKSB7XG4gICAgICBjaGVja2VkVmFsdWUgPSB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZVxuICAgIH1cblxuICAgIGxldCBjaGVja2VkX29wdGlvbiA9IHRoaXMub3B0aW9uc19tYXAuZ2V0KGNoZWNrZWRWYWx1ZSlcbiAgICBpZiAoY2hlY2tlZF9vcHRpb24pIHtcbiAgICAgIGNoZWNrZWRfb3B0aW9uID0gY2hlY2tlZF9vcHRpb24udG9KUygpXG4gICAgfVxuICAgIHJldHVybiBjaGVja2VkX29wdGlvblxuICB9XG5cbiAgcmVuZGVyRmllbGQgKCkge1xuICAgIGNvbnN0IHtyZW5kZXJGaWVsZCwgcGxhY2Vob2xkZXIsIGRpc2FibGVkLCByZWFkT25seX0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBjaGVja2VkX29wdGlvbiA9IHRoaXMuZ2V0Q2hlY2tlZE9wdGlvbigpXG5cbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93X3BvcHVwOiAhZGlzYWJsZWR9KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVuZGVyRmllbGQpIHtcbiAgICAgIHJldHVybiByZW5kZXJGaWVsZChjaGVja2VkX29wdGlvbiwge29uQ2xpY2ssIHBsYWNlaG9sZGVyfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWZpZWxkXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIHt0aGlzLnJlbmRlckZpZWxkTGFiZWwoY2hlY2tlZF9vcHRpb24pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7dmFsdWV9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0ZXJpYWwtc2VsZWN0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3ZhbHVlfS8+XG4gICAgICAgIHt0aGlzLnJlbmRlckZpZWxkKCl9XG4gICAgICAgIHt0aGlzLnJlbmRlck9wdGlvbnMoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ==