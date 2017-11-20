'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopupSelect = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

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

      this.setState({
        value: value,
        checked_value: value,
        checked_option: this.options_map.get(this.props.value || this.props.defaultValue)
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
        defaultChecked: option.value == this.state.value,
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
        }, void 0, _.map(options, this.renderOption.bind(this)))))
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
    key: 'renderField',
    value: function renderField() {
      var _this3 = this;

      var _props4 = this.props,
          renderField = _props4.renderField,
          placeholder = _props4.placeholder,
          disabled = _props4.disabled,
          readonly = _props4.readonly;
      var value = this.state.value;

      var checked_option = this.options_map.get(value);
      if (checked_option) {
        checked_option = checked_option.toJS();
      }

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
  readonly: _propTypes2.default.readonly,
  onPopupOpened: _propTypes2.default.func,
  onPopupClosed: _propTypes2.default.func
}, _temp2);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BvcHVwU2VsZWN0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJQb3B1cFNlbGVjdCIsIm9wdGlvbnNfbWFwIiwiTWFwIiwiZnJvbUpTIiwicHJvcHMiLCJvcHRpb25zIiwicmVkdWNlIiwicmVzdWx0IiwiaXRlbSIsImdldCIsInN0YXRlIiwic2hvd19wb3B1cCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiY2hlY2tlZF92YWx1ZSIsImNoZWNrZWRfb3B0aW9uIiwib25DaGFuZ2UiLCJvcHRpb24iLCJ0b0pTIiwib25DbG9zZVNlbGVjdCIsImUiLCJ0YXJnZXQiLCJyZWZzIiwib3ZlcmxheSIsInNldFN0YXRlIiwib25DYW5jZWxTZWxlY3QiLCJvbkNvbXBsZXRlU2VsZWN0IiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25Qb3B1cE9wZW5lZCIsIm9uUG9wdXBDbG9zZWQiLCJuZXh0UHJvcHMiLCJyZW5kZXJPcHRpb25MYWJlbCIsImxhYmVsIiwiaSIsInJlbmRlck9wdGlvbiIsIm5hbWUiLCJfIiwibWFwIiwiYmluZCIsInBsYWNlaG9sZGVyIiwicmVuZGVyRmllbGRMYWJlbCIsInJlbmRlckZpZWxkIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsIm9uQ2xpY2siLCJyZW5kZXJPcHRpb25zIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJvYmplY3QiLCJmdW5jIiwiYW55Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFYUEsVyxXQUFBQSxXOzs7Ozs7Ozs7Ozs7OztnTUFlWEMsVyxHQUFjLG9CQUFVQyxHQUFWLENBQ1osb0JBQVVDLE1BQVYsQ0FBaUIsTUFBS0MsS0FBTCxDQUFXQyxPQUE1QixFQUNVQyxNQURWLENBQ2lCLFVBQUNDLE1BQUQsRUFBU0MsSUFBVCxFQUFrQjtBQUN4QkQs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eUNLO0FBRHpDLGlCQUVLLEtBQUtKLGdCQUFMLENBQXNCMUIsY0FBdEIsQ0FGTDtBQUtEOzs7NkJBRVM7QUFBQSxVQUNESCxLQURDLEdBQ1EsS0FBS0YsS0FEYixDQUNERSxLQURDOzs7QUFHUjtBQUFBLG1CQUNpQjtBQURqQjtBQUFBLGNBRWdCLFFBRmhCO0FBQUEsZUFFZ0NBO0FBRmhDLFVBR0ssS0FBSzhCLFdBQUwsRUFITCxFQUlLLEtBQUtJLGFBQUwsRUFKTDtBQU9EOzs7OzRCQXhMTUMsUyxHQUFZO0FBQ2pCWCxRQUFNLG9CQUFVWSxNQUFWLENBQWlCQyxVQUROO0FBRWpCNUMsV0FBUyxvQkFBVTZDLE9BQVYsQ0FBa0Isb0JBQVVDLE1BQTVCLEVBQW9DRixVQUY1QjtBQUdqQmhCLFNBQU8sb0JBQVVlLE1BSEE7QUFJakJSLGVBQWEsb0JBQVVRLE1BSk47QUFLakJiLGdCQUFjLG9CQUFVaUIsSUFMUDtBQU1qQnBCLHFCQUFtQixvQkFBVW9CLElBTlo7QUFPakJWLGVBQWEsb0JBQVVVLElBUE47QUFRakJ2QyxnQkFBYyxvQkFBVXdDLEdBUlA7QUFTakJWLFlBQVUsb0JBQVVBLFFBVEg7QUFVakJDLFlBQVUsb0JBQVVBLFFBVkg7QUFXakJmLGlCQUFlLG9CQUFVdUIsSUFYUjtBQVlqQnRCLGlCQUFlLG9CQUFVc0I7QUFaUixDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSdcblxuaW1wb3J0IHsgTXVpUGFuZWwgfSBmcm9tICcuLi9tdWknXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuXG5leHBvcnQgY2xhc3MgUG9wdXBTZWxlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbmRlck9wdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVuZGVyT3B0aW9uTGFiZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbmRlckZpZWxkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5kaXNhYmxlZCxcbiAgICByZWFkb25seTogUHJvcFR5cGVzLnJlYWRvbmx5LFxuICAgIG9uUG9wdXBPcGVuZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUG9wdXBDbG9zZWQ6IFByb3BUeXBlcy5mdW5jXG4gIH1cbiAgb3B0aW9uc19tYXAgPSBJbW11dGFibGUuTWFwKFxuICAgIEltbXV0YWJsZS5mcm9tSlModGhpcy5wcm9wcy5vcHRpb25zKVxuICAgICAgICAgICAgIC5yZWR1Y2UoKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgcmVzdWx0W2l0ZW0uZ2V0KCd2YWx1ZScpXSA9IGl0ZW1cbiAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICAgICB9LCB7fSlcbiAgKVxuXG4gIHN0YXRlID0ge1xuICAgIHNob3dfcG9wdXA6IGZhbHNlLFxuICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgIGNoZWNrZWRfdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgY2hlY2tlZF9vcHRpb246IHRoaXMub3B0aW9uc19tYXAuZ2V0KHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZTdGF0ZS52YWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlKVxuICAgIH1cbiAgICBpZiAocHJldlN0YXRlLnNob3dfcG9wdXAgIT09IHRoaXMuc3RhdGUuc2hvd19wb3B1cCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd19wb3B1cCB8fCB0aGlzLnByb3BzLm9uUG9wdXBPcGVuZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBvcHVwT3BlbmVkKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Qb3B1cENsb3NlZCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG4gICAgY29uc3Qge3ZhbHVlfSA9IG5leHRQcm9wc1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWUsXG4gICAgICBjaGVja2VkX3ZhbHVlOiB2YWx1ZSxcbiAgICAgIGNoZWNrZWRfb3B0aW9uOiB0aGlzLm9wdGlvbnNfbWFwLmdldCh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHtvbkNoYW5nZX0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25zX21hcC5nZXQodmFsdWUpXG4gICAgICBvbkNoYW5nZSh2YWx1ZSwgb3B0aW9uICYmIG9wdGlvbi50b0pTKCkpXG4gICAgfVxuICB9XG5cbiAgb25DbG9zZVNlbGVjdCA9IChlKSA9PiB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IHRoaXMucmVmcy5vdmVybGF5KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd19wb3B1cDogZmFsc2V9KVxuICB9XG5cbiAgb25DYW5jZWxTZWxlY3QgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NoZWNrZWRfdmFsdWU6IHRoaXMuc3RhdGUudmFsdWV9KVxuICAgIHRoaXMub25DbG9zZVNlbGVjdCgpXG4gIH1cblxuICBvbkNvbXBsZXRlU2VsZWN0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiB0aGlzLnN0YXRlLmNoZWNrZWRfdmFsdWV9KVxuICAgIHRoaXMub25DbG9zZVNlbGVjdCgpXG4gIH1cblxuICByZW5kZXJPcHRpb25MYWJlbCAob3B0aW9uKSB7XG4gICAgY29uc3Qge3JlbmRlck9wdGlvbkxhYmVsLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzXG4gICAgaWYgKHJlbmRlck9wdGlvbkxhYmVsKSB7XG4gICAgICByZXR1cm4gcmVuZGVyT3B0aW9uTGFiZWwob3B0aW9uLCBwcm9wcylcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbi5sYWJlbFxuICB9XG5cbiAgcmVuZGVyT3B0aW9uIChvcHRpb24sIGkpIHtcbiAgICBjb25zdCB7cmVuZGVyT3B0aW9uLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocmVuZGVyT3B0aW9uKSB7XG4gICAgICByZXR1cm4gcmVuZGVyT3B0aW9uKG9wdGlvbiwgcHJvcHMpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibXVpLXJhZGlvXCI+XG4gICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZX0pXG4gICAgICAgICAgdGhpcy5vbkNsb3NlU2VsZWN0KClcbiAgICAgICAgfX0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17b3B0aW9uLnZhbHVlID09IHRoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBjaGVja2VkX3ZhbHVlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgY2hlY2tlZF9vcHRpb246IHRoaXMub3B0aW9uc19tYXAuZ2V0KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAge3RoaXMucmVuZGVyT3B0aW9uTGFiZWwob3B0aW9uKX1cblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyT3B0aW9ucyAoKSB7XG4gICAgY29uc3Qge29wdGlvbnN9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghdGhpcy5zdGF0ZS5zaG93X3BvcHVwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Qtd3JhcFwiIG9uQ2xpY2s9e3RoaXMub25DbG9zZVNlbGVjdH0gcmVmPVwib3ZlcmxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1wYW5lbFwiPlxuICAgICAgICAgIDxNdWlQYW5lbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAge18ubWFwKG9wdGlvbnMsIHRoaXMucmVuZGVyT3B0aW9uLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9NdWlQYW5lbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJGaWVsZExhYmVsIChvcHRpb24pIHtcbiAgICBjb25zdCB7cGxhY2Vob2xkZXIsIHJlbmRlckZpZWxkTGFiZWx9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHJlbmRlckZpZWxkTGFiZWwpIHtcbiAgICAgIHJldHVybiByZW5kZXJGaWVsZExhYmVsKG9wdGlvbiwgdGhpcy5wcm9wcylcbiAgICB9XG4gICAgaWYgKCFvcHRpb24pIHtcbiAgICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXJcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgICfQktGL0LHQtdGA0LjRgtC1J1xuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlbmRlck9wdGlvbkxhYmVsKG9wdGlvbilcbiAgfVxuXG4gIHJlbmRlckZpZWxkICgpIHtcbiAgICBjb25zdCB7cmVuZGVyRmllbGQsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZCwgcmVhZG9ubHl9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHt2YWx1ZX0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IGNoZWNrZWRfb3B0aW9uID0gdGhpcy5vcHRpb25zX21hcC5nZXQodmFsdWUpXG4gICAgaWYgKGNoZWNrZWRfb3B0aW9uKSB7XG4gICAgICBjaGVja2VkX29wdGlvbiA9IGNoZWNrZWRfb3B0aW9uLnRvSlMoKVxuICAgIH1cblxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dfcG9wdXA6ICFkaXNhYmxlZH0pXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyZW5kZXJGaWVsZCkge1xuICAgICAgcmV0dXJuIHJlbmRlckZpZWxkKGNoZWNrZWRfb3B0aW9uLCB7b25DbGljaywgcGxhY2Vob2xkZXJ9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtZmllbGRcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAge3RoaXMucmVuZGVyRmllbGRMYWJlbChjaGVja2VkX29wdGlvbil9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHt2YWx1ZX0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRlcmlhbC1zZWxlY3RcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17dmFsdWV9Lz5cbiAgICAgICAge3RoaXMucmVuZGVyRmllbGQoKX1cbiAgICAgICAge3RoaXMucmVuZGVyT3B0aW9ucygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuIl19