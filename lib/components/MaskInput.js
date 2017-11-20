'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaskInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactInputMask = require('react-input-mask');

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _mui = require('./mui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// https://github.com/sanniassin/react-input-mask


var MaskInput = exports.MaskInput = function (_Component) {
  _inherits(MaskInput, _Component);

  function MaskInput() {
    _classCallCheck(this, MaskInput);

    return _possibleConstructorReturn(this, (MaskInput.__proto__ || Object.getPrototypeOf(MaskInput)).apply(this, arguments));
  }

  _createClass(MaskInput, [{
    key: 'renderInput',
    value: function renderInput(mask_props, props) {
      return _react2.default.createElement(_reactInputMask2.default, _extends({}, props, mask_props));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          mask = _props.mask,
          props = _objectWithoutProperties(_props, ['mask']);

      var maskProps = {
        mask: mask
      };
      return _react2.default.createElement(_mui.MuiInput, _extends({}, props, {
        renderInput: this.renderInput.bind(this, maskProps),
        ref: 'mui_input'
      }));
    }
  }]);

  return MaskInput;
}(_react.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01hc2tJbnB1dC5qc3giXSwibmFtZXMiOlsiTWFza0lucHV0IiwibWFza19wcm9wcyIsInByb3BzIiwibWFzayIsIm1hc2tQcm9wcyIsInJlbmRlcklucHV0IiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUhBOzs7SUFLYUEsUyxXQUFBQSxTOzs7Ozs7Ozs7OztnQ0FDRUMsVSxFQUFZQyxLLEVBQU87QUFDOUIsYUFBTyxxRUFBZUEsS0FBZixFQUEwQkQsVUFBMUIsRUFBUDtBQUNEOzs7NkJBRVM7QUFBQSxtQkFDaUIsS0FBS0MsS0FEdEI7QUFBQSxVQUNEQyxJQURDLFVBQ0RBLElBREM7QUFBQSxVQUNRRCxLQURSOztBQUVSLFVBQU1FLFlBQVk7QUFDaEJEO0FBRGdCLE9BQWxCO0FBR0EsYUFBTywwREFDREQsS0FEQztBQUVMLHFCQUFhLEtBQUtHLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCRixTQUE1QixDQUZSO0FBR0wsYUFBSTtBQUhDLFNBQVA7QUFLRCIsImZpbGUiOiJNYXNrSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Nhbm5pYXNzaW4vcmVhY3QtaW5wdXQtbWFza1xuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJ1xuXG5pbXBvcnQgeyBNdWlJbnB1dCB9IGZyb20gJy4vbXVpJ1xuXG5leHBvcnQgY2xhc3MgTWFza0lucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVySW5wdXQgKG1hc2tfcHJvcHMsIHByb3BzKSB7XG4gICAgcmV0dXJuIDxJbnB1dE1hc2sgey4uLnByb3BzfSB7Li4ubWFza19wcm9wc30vPlxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7bWFzaywgLi4ucHJvcHN9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1hc2tQcm9wcyA9IHtcbiAgICAgIG1hc2tcbiAgICB9XG4gICAgcmV0dXJuIDxNdWlJbnB1dFxuICAgICAgey4uLnByb3BzfVxuICAgICAgcmVuZGVySW5wdXQ9e3RoaXMucmVuZGVySW5wdXQuYmluZCh0aGlzLCBtYXNrUHJvcHMpfVxuICAgICAgcmVmPVwibXVpX2lucHV0XCJcbiAgICAvPlxuICB9XG5cbn0iXX0=