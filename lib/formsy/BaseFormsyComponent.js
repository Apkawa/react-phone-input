'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROPS_FUNCTION = ['getValue', 'setValue', 'resetValue', 'getErrorMessage', 'getErrorMessages', 'isValid', 'isValidValue', 'isRequired', 'showRequired', 'showError', 'isPristine', 'isFormDisabled', 'isFormSubmitted'];
var PROPS_ATTRIBUTE = ['validations', 'validationError', 'validationErrors', 'validate', 'formNoValidate'];
var EXCLUDED_PROPS = [].concat(PROPS_FUNCTION, PROPS_ATTRIBUTE, ['value', 'required']);

var BaseFormsyComponent = function (_Component) {
  _inherits(BaseFormsyComponent, _Component);

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
      return _.omit(props, EXCLUDED_PROPS);
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
}(_react.Component);

exports.default = BaseFormsyComponent;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3Jtc3kvQmFzZUZvcm1zeUNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUFJPUFNfRlVOQ1RJT04iLCJQUk9QU19BVFRSSUJVVEUiLCJFWENMVURFRF9QUk9QUyIsIkJhc2VGb3Jtc3lDb21wb25lbnQiLCJldmVudCIsInByb3BzIiwic2V0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl8iLCJvbWl0IiwiY2xlYW5Qcm9wcyIsImdldFZhbHVlIiwiYXJndW1lbnRzIiwicmVzZXRWYWx1ZSIsImdldEVycm9yTWVzc2FnZSIsImdldEVycm9yTWVzc2FnZXMiLCJpc1ZhbGlkIiwiaXNWYWxpZFZhbHVlIiwiaXNSZXF1aXJlZCIsInNob3dSZXF1aXJlZCIsInNob3dFcnJvciIsImlzUHJpc3RpbmUiLCJpc0Zvcm1EaXNhYmxlZCIsImlzRm9ybVN1Ym1pdHRlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsQ0FDckIsVUFEcUIsRUFFckIsVUFGcUIsRUFHckIsWUFIcUIsRUFJckIsaUJBSnFCLEVBS3JCLGtCQUxxQixFQU1yQixTQU5xQixFQU9yQixjQVBxQixFQVFyQixZQVJxQixFQVNyQixjQVRxQixFQVVyQixXQVZxQixFQVdyQixZQVhxQixFQVlyQixnQkFacUIsRUFhckIsaUJBYnFCLENBQXZCO0FBZUEsSUFBTUMsa0JBQWtCLENBQ3RCLGFBRHNCLEVBRXRCLGlCQUZzQixFQUd0QixrQkFIc0IsRUFJdEIsVUFKc0IsRUFLdEIsZ0JBTHNCLENBQXhCO0FBT0EsSUFBTUMsMkJBQ0RGLGNBREMsRUFFREMsZUFGQyxHQUdKLE9BSEksRUFJSixVQUpJLEVBQU47O0lBT3FCRSxtQjs7Ozs7Ozs7Ozs7a0NBRUpDLEssRUFBTztBQUNwQixXQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLE1BQU1HLE1BQU4sQ0FBYUMsS0FBakM7QUFDRDs7OytCQUVXSCxLLEVBQU87QUFDakIsYUFBT0ksRUFBRUMsSUFBRixDQUFPTCxLQUFQLEVBQWNILGNBQWQsQ0FBUDtBQUNEOzs7c0NBRWtCO0FBQ2pCLGFBQU8sS0FBS1MsVUFBTCxDQUFnQixLQUFLTixLQUFyQixDQUFQO0FBQ0Q7OzsrQkFFVztBQUNWLGFBQU8sS0FBS0EsS0FBTCxDQUFXTyxRQUFYLEVBQVA7QUFDRDs7OytCQUVXO0FBQUE7O0FBQ1YsYUFBTyxlQUFLUCxLQUFMLEVBQVdDLFFBQVgsZUFBdUJPLFNBQXZCLENBQVA7QUFFRDs7O2lDQUVhO0FBQUE7O0FBQ1osYUFBTyxnQkFBS1IsS0FBTCxFQUFXUyxVQUFYLGdCQUF5QkQsU0FBekIsQ0FBUDtBQUVEOzs7c0NBRWtCO0FBQUE7O0FBQ2pCLGFBQU8sZ0JBQUtSLEtBQUwsRUFBV1UsZUFBWCxnQkFBOEJGLFNBQTlCLENBQVA7QUFFRDs7O3VDQUVtQjtBQUFBOztBQUNsQixhQUFPLGdCQUFLUixLQUFMLEVBQVdXLGdCQUFYLGdCQUErQkgsU0FBL0IsQ0FBUDtBQUVEOzs7OEJBRVU7QUFBQTs7QUFDVCxhQUFPLGdCQUFLUixLQUFMLEVBQVdZLE9BQVgsZ0JBQXNCSixTQUF0QixDQUFQO0FBRUQ7OzttQ0FFZTtBQUFBOztBQUNkLGFBQU8sZ0JBQUtSLEtBQUwsRUFBV2EsWUFBWCxnQkFBMkJMLFNBQTNCLENBQVA7QUFFRDs7O2lDQUVhO0FBQUE7O0FBQ1osYUFBTyxnQkFBS1IsS0FBTCxFQUFXYyxVQUFYLGdCQUF5Qk4sU0FBekIsQ0FBUDtBQUVEOzs7bUNBRWU7QUFBQTs7QUFDZCxhQUFPLGdCQUFLUixLQUFMLEVBQVdlLFlBQVgsZ0JBQTJCUCxTQUEzQixDQUFQO0FBRUQ7OztnQ0FFWTtBQUFBOztBQUNYLGFBQU8sZ0JBQUtSLEtBQUwsRUFBV2dCLFNBQVgsZ0JBQXdCUixTQUF4QixDQUFQO0FBRUQ7OztpQ0FFYTtBQUFBOztBQUNaLGFBQU8saUJBQUtSLEtBQUwsRUFBV2lCLFVBQVgsaUJBQXlCVCxTQUF6QixDQUFQO0FBRUQ7OztxQ0FFaUI7QUFBQTs7QUFDaEIsYUFBTyxpQkFBS1IsS0FBTCxFQUFXa0IsY0FBWCxpQkFBNkJWLFNBQTdCLENBQVA7QUFFRDs7O3NDQUVrQjtBQUNqQixhQUFPLEtBQUtSLEtBQUwsQ0FBV21CLGVBQVgsRUFBUDtBQUNEOzs7Ozs7a0JBM0VrQnJCLG1CIiwiZmlsZSI6IkJhc2VGb3Jtc3lDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgUFJPUFNfRlVOQ1RJT04gPSBbXG4gICdnZXRWYWx1ZScsXG4gICdzZXRWYWx1ZScsXG4gICdyZXNldFZhbHVlJyxcbiAgJ2dldEVycm9yTWVzc2FnZScsXG4gICdnZXRFcnJvck1lc3NhZ2VzJyxcbiAgJ2lzVmFsaWQnLFxuICAnaXNWYWxpZFZhbHVlJyxcbiAgJ2lzUmVxdWlyZWQnLFxuICAnc2hvd1JlcXVpcmVkJyxcbiAgJ3Nob3dFcnJvcicsXG4gICdpc1ByaXN0aW5lJyxcbiAgJ2lzRm9ybURpc2FibGVkJyxcbiAgJ2lzRm9ybVN1Ym1pdHRlZCdcbl1cbmNvbnN0IFBST1BTX0FUVFJJQlVURSA9IFtcbiAgJ3ZhbGlkYXRpb25zJyxcbiAgJ3ZhbGlkYXRpb25FcnJvcicsXG4gICd2YWxpZGF0aW9uRXJyb3JzJyxcbiAgJ3ZhbGlkYXRlJyxcbiAgJ2Zvcm1Ob1ZhbGlkYXRlJ1xuXVxuY29uc3QgRVhDTFVERURfUFJPUFMgPSBbXG4gIC4uLlBST1BTX0ZVTkNUSU9OLFxuICAuLi5QUk9QU19BVFRSSUJVVEUsXG4gICd2YWx1ZScsXG4gICdyZXF1aXJlZCdcbl1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUZvcm1zeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgb25DaGFuZ2VWYWx1ZSAoZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLnNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNsZWFuUHJvcHMgKHByb3BzKSB7XG4gICAgcmV0dXJuIF8ub21pdChwcm9wcywgRVhDTFVERURfUFJPUFMpXG4gIH1cblxuICBnZXRDbGVhbmVkUHJvcHMgKCkge1xuICAgIHJldHVybiB0aGlzLmNsZWFuUHJvcHModGhpcy5wcm9wcylcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5nZXRWYWx1ZSgpXG4gIH1cblxuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuXG4gIH1cblxuICByZXNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXNldFZhbHVlKC4uLmFyZ3VtZW50cylcblxuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5nZXRFcnJvck1lc3NhZ2UoLi4uYXJndW1lbnRzKVxuXG4gIH1cblxuICBnZXRFcnJvck1lc3NhZ2VzICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5nZXRFcnJvck1lc3NhZ2VzKC4uLmFyZ3VtZW50cylcblxuICB9XG5cbiAgaXNWYWxpZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaXNWYWxpZCguLi5hcmd1bWVudHMpXG5cbiAgfVxuXG4gIGlzVmFsaWRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaXNWYWxpZFZhbHVlKC4uLmFyZ3VtZW50cylcblxuICB9XG5cbiAgaXNSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaXNSZXF1aXJlZCguLi5hcmd1bWVudHMpXG5cbiAgfVxuXG4gIHNob3dSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2hvd1JlcXVpcmVkKC4uLmFyZ3VtZW50cylcblxuICB9XG5cbiAgc2hvd0Vycm9yICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zaG93RXJyb3IoLi4uYXJndW1lbnRzKVxuXG4gIH1cblxuICBpc1ByaXN0aW5lICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pc1ByaXN0aW5lKC4uLmFyZ3VtZW50cylcblxuICB9XG5cbiAgaXNGb3JtRGlzYWJsZWQgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmlzRm9ybURpc2FibGVkKC4uLmFyZ3VtZW50cylcblxuICB9XG5cbiAgaXNGb3JtU3VibWl0dGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pc0Zvcm1TdWJtaXR0ZWQoKVxuICB9XG5cbn1cblxuIl19