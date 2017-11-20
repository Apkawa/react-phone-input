'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROPS_FUNCTION = ['getValue', 'setValue', 'resetValue', 'getErrorMessage', 'getErrorMessages', 'isValid', 'isValidValue', 'isRequired', 'showRequired', 'showError', 'isPristine', 'isFormDisabled', 'isFormSubmitted'];
var PROPS_ATTRIBUTE = ['validations', 'validationError', 'validationErrors', 'validate', 'formNoValidate'];
var EXCLUDED_PROPS = [].concat(PROPS_FUNCTION, PROPS_ATTRIBUTE, ['value', 'required']);

var BaseFormsyComponent = function (_React$Component) {
  _inherits(BaseFormsyComponent, _React$Component);

  function BaseFormsyComponent() {
    _classCallCheck(this, BaseFormsyComponent);

    return _possibleConstructorReturn(this, (BaseFormsyComponent.__proto__ || Object.getPrototypeOf(BaseFormsyComponent)).apply(this, arguments));
  }

  _createClass(BaseFormsyComponent, [{
    key: 'onChangeValue',
    value: function onChangeValue(event) {
      this.props.setValue(event.target.value);
    }
  }, {
    key: 'cleanProps',
    value: function cleanProps(props) {
      return _lodash2.default.omit(props, EXCLUDED_PROPS);
    }
  }, {
    key: 'getCleanedProps',
    value: function getCleanedProps() {
      return this.cleanProps(this.props);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.props.getValue();
    }
  }, {
    key: 'setValue',
    value: function setValue() {
      var _props;

      return (_props = this.props).setValue.apply(_props, arguments);
    }
  }, {
    key: 'resetValue',
    value: function resetValue() {
      var _props2;

      return (_props2 = this.props).resetValue.apply(_props2, arguments);
    }
  }, {
    key: 'getErrorMessage',
    value: function getErrorMessage() {
      var _props3;

      return (_props3 = this.props).getErrorMessage.apply(_props3, arguments);
    }
  }, {
    key: 'getErrorMessages',
    value: function getErrorMessages() {
      var _props4;

      return (_props4 = this.props).getErrorMessages.apply(_props4, arguments);
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      var _props5;

      return (_props5 = this.props).isValid.apply(_props5, arguments);
    }
  }, {
    key: 'isValidValue',
    value: function isValidValue() {
      var _props6;

      return (_props6 = this.props).isValidValue.apply(_props6, arguments);
    }
  }, {
    key: 'isRequired',
    value: function isRequired() {
      var _props7;

      return (_props7 = this.props).isRequired.apply(_props7, arguments);
    }
  }, {
    key: 'showRequired',
    value: function showRequired() {
      var _props8;

      return (_props8 = this.props).showRequired.apply(_props8, arguments);
    }
  }, {
    key: 'showError',
    value: function showError() {
      var _props9;

      return (_props9 = this.props).showError.apply(_props9, arguments);
    }
  }, {
    key: 'isPristine',
    value: function isPristine() {
      var _props10;

      return (_props10 = this.props).isPristine.apply(_props10, arguments);
    }
  }, {
    key: 'isFormDisabled',
    value: function isFormDisabled() {
      var _props11;

      return (_props11 = this.props).isFormDisabled.apply(_props11, arguments);
    }
  }, {
    key: 'isFormSubmitted',
    value: function isFormSubmitted() {
      return this.props.isFormSubmitted();
    }
  }]);

  return BaseFormsyComponent;
}(_react2.default.Component);

exports.default = BaseFormsyComponent;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3Jtc3kvQmFzZUZvcm1zeUNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUFJPUFNfRlVOQ1RJT04iLCJQUk9QU19BVFRSSUJVVEUiLCJFWENMVURFRF9QUk9QUyIsIkJhc2VGb3Jtc3lDb21wb25lbnQiLCJldmVudCIsInByb3BzIiwic2V0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9taXQiLCJjbGVhblByb3BzIiwiZ2V0VmFsdWUiLCJhcmd1bWVudHMiLCJyZXNldFZhbHVlIiwiZ2V0RXJyb3JNZXNzYWdlIiwiZ2V0RXJyb3JNZXNzYWdlcyIsImlzVmFsaWQiLCJpc1ZhbGlkVmFsdWUiLCJpc1JlcXVpcmVkIiwic2hvd1JlcXVpcmVkIiwic2hvd0Vycm9yIiwiaXNQcmlzdGluZSIsImlzRm9ybURpc2FibGVkIiwiaXNGb3JtU3VibWl0dGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLENBQ3JCLFVBRHFCLEVBRXJCLFVBRnFCLEVBR3JCLFlBSHFCLEVBSXJCLGlCQUpxQixFQUtyQixrQkFMcUIsRUFNckIsU0FOcUIsRUFPckIsY0FQcUIsRUFRckIsWUFScUIsRUFTckIsY0FUcUIsRUFVckIsV0FWcUIsRUFXckIsWUFYcUIsRUFZckIsZ0JBWnFCLEVBYXJCLGlCQWJxQixDQUF2QjtBQWVBLElBQU1DLGtCQUFrQixDQUN0QixhQURzQixFQUV0QixpQkFGc0IsRUFHdEIsa0JBSHNCLEVBSXRCLFVBSnNCLEVBS3RCLGdCQUxzQixDQUF4QjtBQU9BLElBQU1DLDJCQUNERixjQURDLEVBRURDLGVBRkMsR0FHSixPQUhJLEVBSUosVUFKSSxFQUFOOztJQU9xQkUsbUI7Ozs7Ozs7Ozs7O2tDQUVKQyxLLEVBQU87QUFDcEIsV0FBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixNQUFNRyxNQUFOLENBQWFDLEtBQWpDO0FBQ0Q7OzsrQkFFV0gsSyxFQUFPO0FBQ2pCLGFBQU8saUJBQUVJLElBQUYsQ0FBT0osS0FBUCxFQUFjSCxjQUFkLENBQVA7QUFDRDs7O3NDQUVrQjtBQUNqQixhQUFPLEtBQUtRLFVBQUwsQ0FBZ0IsS0FBS0wsS0FBckIsQ0FBUDtBQUNEOzs7K0JBRVc7QUFDVixhQUFPLEtBQUtBLEtBQUwsQ0FBV00sUUFBWCxFQUFQO0FBQ0Q7OzsrQkFFVztBQUFBOztBQUNWLGFBQU8sZUFBS04sS0FBTCxFQUFXQyxRQUFYLGVBQXVCTSxTQUF2QixDQUFQO0FBRUQ7OztpQ0FFYTtBQUFBOztBQUNaLGFBQU8sZ0JBQUtQLEtBQUwsRUFBV1EsVUFBWCxnQkFBeUJELFNBQXpCLENBQVA7QUFFRDs7O3NDQUVrQjtBQUFBOztBQUNqQixhQUFPLGdCQUFLUCxLQUFMLEVBQVdTLGVBQVgsZ0JBQThCRixTQUE5QixDQUFQO0FBRUQ7Ozt1Q0FFbUI7QUFBQTs7QUFDbEIsYUFBTyxnQkFBS1AsS0FBTCxFQUFXVSxnQkFBWCxnQkFBK0JILFNBQS9CLENBQVA7QUFFRDs7OzhCQUVVO0FBQUE7O0FBQ1QsYUFBTyxnQkFBS1AsS0FBTCxFQUFXVyxPQUFYLGdCQUFzQkosU0FBdEIsQ0FBUDtBQUVEOzs7bUNBRWU7QUFBQTs7QUFDZCxhQUFPLGdCQUFLUCxLQUFMLEVBQVdZLFlBQVgsZ0JBQTJCTCxTQUEzQixDQUFQO0FBRUQ7OztpQ0FFYTtBQUFBOztBQUNaLGFBQU8sZ0JBQUtQLEtBQUwsRUFBV2EsVUFBWCxnQkFBeUJOLFNBQXpCLENBQVA7QUFFRDs7O21DQUVlO0FBQUE7O0FBQ2QsYUFBTyxnQkFBS1AsS0FBTCxFQUFXYyxZQUFYLGdCQUEyQlAsU0FBM0IsQ0FBUDtBQUVEOzs7Z0NBRVk7QUFBQTs7QUFDWCxhQUFPLGdCQUFLUCxLQUFMLEVBQVdlLFNBQVgsZ0JBQXdCUixTQUF4QixDQUFQO0FBRUQ7OztpQ0FFYTtBQUFBOztBQUNaLGFBQU8saUJBQUtQLEtBQUwsRUFBV2dCLFVBQVgsaUJBQXlCVCxTQUF6QixDQUFQO0FBRUQ7OztxQ0FFaUI7QUFBQTs7QUFDaEIsYUFBTyxpQkFBS1AsS0FBTCxFQUFXaUIsY0FBWCxpQkFBNkJWLFNBQTdCLENBQVA7QUFFRDs7O3NDQUVrQjtBQUNqQixhQUFPLEtBQUtQLEtBQUwsQ0FBV2tCLGVBQVgsRUFBUDtBQUNEOzs7O0VBM0U4QyxnQkFBTUMsUzs7a0JBQWxDckIsbUIiLCJmaWxlIjoiQmFzZUZvcm1zeUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQUk9QU19GVU5DVElPTiA9IFtcbiAgJ2dldFZhbHVlJyxcbiAgJ3NldFZhbHVlJyxcbiAgJ3Jlc2V0VmFsdWUnLFxuICAnZ2V0RXJyb3JNZXNzYWdlJyxcbiAgJ2dldEVycm9yTWVzc2FnZXMnLFxuICAnaXNWYWxpZCcsXG4gICdpc1ZhbGlkVmFsdWUnLFxuICAnaXNSZXF1aXJlZCcsXG4gICdzaG93UmVxdWlyZWQnLFxuICAnc2hvd0Vycm9yJyxcbiAgJ2lzUHJpc3RpbmUnLFxuICAnaXNGb3JtRGlzYWJsZWQnLFxuICAnaXNGb3JtU3VibWl0dGVkJ1xuXVxuY29uc3QgUFJPUFNfQVRUUklCVVRFID0gW1xuICAndmFsaWRhdGlvbnMnLFxuICAndmFsaWRhdGlvbkVycm9yJyxcbiAgJ3ZhbGlkYXRpb25FcnJvcnMnLFxuICAndmFsaWRhdGUnLFxuICAnZm9ybU5vVmFsaWRhdGUnXG5dXG5jb25zdCBFWENMVURFRF9QUk9QUyA9IFtcbiAgLi4uUFJPUFNfRlVOQ1RJT04sXG4gIC4uLlBST1BTX0FUVFJJQlVURSxcbiAgJ3ZhbHVlJyxcbiAgJ3JlcXVpcmVkJ1xuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlRm9ybXN5Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBvbkNoYW5nZVZhbHVlIChldmVudCkge1xuICAgIHRoaXMucHJvcHMuc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY2xlYW5Qcm9wcyAocHJvcHMpIHtcbiAgICByZXR1cm4gXy5vbWl0KHByb3BzLCBFWENMVURFRF9QUk9QUylcbiAgfVxuXG4gIGdldENsZWFuZWRQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYW5Qcm9wcyh0aGlzLnByb3BzKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmdldFZhbHVlKClcbiAgfVxuXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG5cbiAgfVxuXG4gIHJlc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnJlc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuXG4gIH1cblxuICBnZXRFcnJvck1lc3NhZ2UgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmdldEVycm9yTWVzc2FnZSguLi5hcmd1bWVudHMpXG5cbiAgfVxuXG4gIGdldEVycm9yTWVzc2FnZXMgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmdldEVycm9yTWVzc2FnZXMoLi4uYXJndW1lbnRzKVxuXG4gIH1cblxuICBpc1ZhbGlkICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pc1ZhbGlkKC4uLmFyZ3VtZW50cylcblxuICB9XG5cbiAgaXNWYWxpZFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pc1ZhbGlkVmFsdWUoLi4uYXJndW1lbnRzKVxuXG4gIH1cblxuICBpc1JlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pc1JlcXVpcmVkKC4uLmFyZ3VtZW50cylcblxuICB9XG5cbiAgc2hvd1JlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zaG93UmVxdWlyZWQoLi4uYXJndW1lbnRzKVxuXG4gIH1cblxuICBzaG93RXJyb3IgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNob3dFcnJvciguLi5hcmd1bWVudHMpXG5cbiAgfVxuXG4gIGlzUHJpc3RpbmUgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmlzUHJpc3RpbmUoLi4uYXJndW1lbnRzKVxuXG4gIH1cblxuICBpc0Zvcm1EaXNhYmxlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaXNGb3JtRGlzYWJsZWQoLi4uYXJndW1lbnRzKVxuXG4gIH1cblxuICBpc0Zvcm1TdWJtaXR0ZWQgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmlzRm9ybVN1Ym1pdHRlZCgpXG4gIH1cblxufVxuXG4iXX0=