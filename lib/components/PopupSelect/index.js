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
        if (this.state.show_popup && this.props.onPopupOpened) {
          this.props.onPopupOpened();
        } else {
          this.props.onPopupClosed && this.props.onPopupClosed();
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
      }, i, _jsx('label', {}, void 0, _jsx('input', {
        type: 'radio',
        name: props.name,
        value: option.value,
        defaultChecked: option.value === this.state.value,
        onChange: function onChange(e) {
          _this2.setState({
            value: e.target.value,
            checked_value: e.target.value,
            checked_option: _this2.options_map.get(e.target.value)
          });
          _this2.onCloseSelect();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BvcHVwU2VsZWN0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJQb3B1cFNlbGVjdCIsIm9wdGlvbnNfbWFwIiwiTWFwIiwiZnJvbUpTIiwicHJvcHMiLCJvcHRpb25zIiwicmVkdWNlIiwicmVzdWx0IiwiaXRlbSIsImdldCIsInN0YXRlIiwic2hvd19wb3B1cCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiY2hlY2tlZF92YWx1ZSIsImNoZWNrZWRfb3B0aW9uIiwib25DaGFuZ2UiLCJvcHRpb24iLCJ0b0pTIiwib25DbG9zZVNlbGVjdCIsImUiLCJ0YXJnZXQiLCJyZWZzIiwib3ZlcmxheSIsInNldFN0YXRlIiwib25DYW5jZWxTZWxlY3QiLCJvbkNvbXBsZXRlU2VsZWN0IiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25Qb3B1cE9wZW5lZCIsIm9uUG9wdXBDbG9zZWQiLCJuZXh0UHJvcHMiLCJjaGVja2VkVmFsdWUiLCJpc1VuZGVmaW5lZCIsInJlbmRlck9wdGlvbkxhYmVsIiwibGFiZWwiLCJpIiwicmVuZGVyT3B0aW9uIiwibmFtZSIsIm1hcCIsImJpbmQiLCJwbGFjZWhvbGRlciIsInJlbmRlckZpZWxkTGFiZWwiLCJyZW5kZXJGaWVsZCIsImRpc2FibGVkIiwicmVhZE9ubHkiLCJnZXRDaGVja2VkT3B0aW9uIiwib25DbGljayIsInJlbmRlck9wdGlvbnMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCIsImZ1bmMiLCJhbnkiLCJyZWFkb25seSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFYUEsVyxXQUFBQSxXOzs7Ozs7Ozs7Ozs7OztnTUFtQlhDLFcsR0FBYyxvQkFBVUMsR0FBVixDQUNaLG9CQUFVQyxNQUFWLENB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QUNwQjVDLGdCQUFjO0FBRE0sQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgTXVpUGFuZWwgfSBmcm9tICcuLi9tdWknXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuXG5leHBvcnQgY2xhc3MgUG9wdXBTZWxlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbmRlck9wdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVuZGVyT3B0aW9uTGFiZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbmRlckZpZWxkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5kaXNhYmxlZCxcbiAgICByZWFkT25seTogUHJvcFR5cGVzLnJlYWRvbmx5LFxuICAgIG9uUG9wdXBPcGVuZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUG9wdXBDbG9zZWQ6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZmF1bHRWYWx1ZTogJ3J1J1xuICB9XG4gIG9wdGlvbnNfbWFwID0gSW1tdXRhYmxlLk1hcChcbiAgICBJbW11dGFibGUuZnJvbUpTKHRoaXMucHJvcHMub3B0aW9ucylcbiAgICAgICAgICAgICAucmVkdWNlKChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgIHJlc3VsdFtpdGVtLmdldCgndmFsdWUnKV0gPSBpdGVtXG4gICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICAgfSwge30pXG4gIClcblxuICBzdGF0ZSA9IHtcbiAgICBzaG93X3BvcHVwOiBmYWxzZSxcbiAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICBjaGVja2VkX3ZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgIGNoZWNrZWRfb3B0aW9uOiB0aGlzLm9wdGlvbnNfbWFwLmdldCh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUudmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSlcbiAgICB9XG4gICAgaWYgKHByZXZTdGF0ZS5zaG93X3BvcHVwICE9PSB0aGlzLnN0YXRlLnNob3dfcG9wdXApIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dfcG9wdXAgJiYgIHRoaXMucHJvcHMub25Qb3B1cE9wZW5lZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUG9wdXBPcGVuZWQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBvcHVwQ2xvc2VkICYmIHRoaXMucHJvcHMub25Qb3B1cENsb3NlZCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG4gICAgY29uc3Qge3ZhbHVlfSA9IG5leHRQcm9wc1xuICAgIGxldCBjaGVja2VkVmFsdWUgPSB2YWx1ZVxuICAgIGlmIChfLmlzVW5kZWZpbmVkKGNoZWNrZWRWYWx1ZSkpIHtcbiAgICAgIGNoZWNrZWRWYWx1ZSA9IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IGNoZWNrZWRWYWx1ZSxcbiAgICAgIGNoZWNrZWRfdmFsdWU6IGNoZWNrZWRWYWx1ZSxcbiAgICAgIGNoZWNrZWRfb3B0aW9uOiB0aGlzLm9wdGlvbnNfbWFwLmdldChjaGVja2VkVmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3Qge29uQ2hhbmdlfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnNfbWFwLmdldCh2YWx1ZSlcbiAgICAgIG9uQ2hhbmdlKHZhbHVlLCBvcHRpb24gJiYgb3B0aW9uLnRvSlMoKSlcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlU2VsZWN0ID0gKGUpID0+IHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gdGhpcy5yZWZzLm92ZXJsYXkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzaG93X3BvcHVwOiBmYWxzZX0pXG4gIH1cblxuICBvbkNhbmNlbFNlbGVjdCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZF92YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZX0pXG4gICAgdGhpcy5vbkNsb3NlU2VsZWN0KClcbiAgfVxuXG4gIG9uQ29tcGxldGVTZWxlY3QgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHRoaXMuc3RhdGUuY2hlY2tlZF92YWx1ZX0pXG4gICAgdGhpcy5vbkNsb3NlU2VsZWN0KClcbiAgfVxuXG4gIHJlbmRlck9wdGlvbkxhYmVsIChvcHRpb24pIHtcbiAgICBjb25zdCB7cmVuZGVyT3B0aW9uTGFiZWwsIC4uLnByb3BzfSA9IHRoaXMucHJvcHNcbiAgICBpZiAocmVuZGVyT3B0aW9uTGFiZWwpIHtcbiAgICAgIHJldHVybiByZW5kZXJPcHRpb25MYWJlbChvcHRpb24sIHByb3BzKVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uLmxhYmVsXG4gIH1cblxuICByZW5kZXJPcHRpb24gKG9wdGlvbiwgaSkge1xuICAgIGNvbnN0IHtyZW5kZXJPcHRpb24sIC4uLnByb3BzfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChyZW5kZXJPcHRpb24pIHtcbiAgICAgIHJldHVybiByZW5kZXJPcHRpb24ob3B0aW9uLCBwcm9wcylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtdWktcmFkaW9cIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e29wdGlvbi52YWx1ZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgY2hlY2tlZF92YWx1ZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgY2hlY2tlZF9vcHRpb246IHRoaXMub3B0aW9uc19tYXAuZ2V0KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2VTZWxlY3QoKVxuICAgICAgICAgICAgfX1cblxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJPcHRpb25MYWJlbChvcHRpb24pfVxuXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJPcHRpb25zICgpIHtcbiAgICBjb25zdCB7b3B0aW9uc30gPSB0aGlzLnByb3BzXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dfcG9wdXApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC13cmFwXCIgb25DbGljaz17dGhpcy5vbkNsb3NlU2VsZWN0fSByZWY9XCJvdmVybGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXBhbmVsXCI+XG4gICAgICAgICAgPE11aVBhbmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY29udGVudFwiPlxuICAgICAgICAgICAgICB7Xy5tYXAob3B0aW9ucywgdGhpcy5yZW5kZXJPcHRpb24uYmluZCh0aGlzKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L011aVBhbmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckZpZWxkTGFiZWwgKG9wdGlvbikge1xuICAgIGNvbnN0IHtwbGFjZWhvbGRlciwgcmVuZGVyRmllbGRMYWJlbH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocmVuZGVyRmllbGRMYWJlbCkge1xuICAgICAgcmV0dXJuIHJlbmRlckZpZWxkTGFiZWwob3B0aW9uLCB0aGlzLnByb3BzKVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbikge1xuICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlclxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgJ9CS0YvQsdC10YDQuNGC0LUnXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyT3B0aW9uTGFiZWwob3B0aW9uKVxuICB9XG5cbiAgZ2V0Q2hlY2tlZE9wdGlvbiAoKSB7XG4gICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgY2hlY2tlZFZhbHVlID0gdmFsdWVcbiAgICBpZiAoXy5pc1VuZGVmaW5lZChjaGVja2VkVmFsdWUpKSB7XG4gICAgICBjaGVja2VkVmFsdWUgPSB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZVxuICAgIH1cblxuICAgIGxldCBjaGVja2VkX29wdGlvbiA9IHRoaXMub3B0aW9uc19tYXAuZ2V0KGNoZWNrZWRWYWx1ZSlcbiAgICBpZiAoY2hlY2tlZF9vcHRpb24pIHtcbiAgICAgIGNoZWNrZWRfb3B0aW9uID0gY2hlY2tlZF9vcHRpb24udG9KUygpXG4gICAgfVxuICAgIHJldHVybiBjaGVja2VkX29wdGlvblxuICB9XG5cbiAgcmVuZGVyRmllbGQgKCkge1xuICAgIGNvbnN0IHtyZW5kZXJGaWVsZCwgcGxhY2Vob2xkZXIsIGRpc2FibGVkLCByZWFkT25seX0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBjaGVja2VkX29wdGlvbiA9IHRoaXMuZ2V0Q2hlY2tlZE9wdGlvbigpXG5cbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93X3BvcHVwOiAhZGlzYWJsZWR9KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVuZGVyRmllbGQpIHtcbiAgICAgIHJldHVybiByZW5kZXJGaWVsZChjaGVja2VkX29wdGlvbiwge29uQ2xpY2ssIHBsYWNlaG9sZGVyfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWZpZWxkXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIHt0aGlzLnJlbmRlckZpZWxkTGFiZWwoY2hlY2tlZF9vcHRpb24pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7dmFsdWV9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0ZXJpYWwtc2VsZWN0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3ZhbHVlfS8+XG4gICAgICAgIHt0aGlzLnJlbmRlckZpZWxkKCl9XG4gICAgICAgIHt0aGlzLnJlbmRlck9wdGlvbnMoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ==