"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _DateTimePickerDateJs = require("./DateTimePickerDate.js");

var _DateTimePickerDateJs2 = _interopRequireDefault(_DateTimePickerDateJs);

var _DateTimePickerTimeJs = require("./DateTimePickerTime.js");

var _DateTimePickerTimeJs2 = _interopRequireDefault(_DateTimePickerTimeJs);

var _ConstantsJs = require("./Constants.js");

var _ConstantsJs2 = _interopRequireDefault(_ConstantsJs);

var DateTimePicker = (function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    var _this = this;

    _classCallCheck(this, DateTimePicker);

    _get(Object.getPrototypeOf(DateTimePicker.prototype), "constructor", this).apply(this, arguments);

    this.renderDatePicker = function () {
      if (_this.props.showDatePicker) {
        return _react2["default"].createElement(
          "li",
          null,
          _react2["default"].createElement(_DateTimePickerDateJs2["default"], {
            addDecade: _this.props.addDecade,
            addMonth: _this.props.addMonth,
            addYear: _this.props.addYear,
            daysOfWeekDisabled: _this.props.daysOfWeekDisabled,
            maxDate: _this.props.maxDate,
            minDate: _this.props.minDate,
            selectedDate: _this.props.selectedDate,
            setSelectedDate: _this.props.setSelectedDate,
            setViewMonth: _this.props.setViewMonth,
            setViewYear: _this.props.setViewYear,
            showToday: _this.props.showToday,
            subtractDecade: _this.props.subtractDecade,
            subtractMonth: _this.props.subtractMonth,
            subtractYear: _this.props.subtractYear,
            viewDate: _this.props.viewDate,
            viewMode: _this.props.viewMode
          })
        );
      }
    };

    this.renderTimePicker = function () {
      if (_this.props.showTimePicker) {
        return _react2["default"].createElement(
          "li",
          null,
          _react2["default"].createElement(_DateTimePickerTimeJs2["default"], {
            addHour: _this.props.addHour,
            addMinute: _this.props.addMinute,
            mode: _this.props.mode,
            selectedDate: _this.props.selectedDate,
            setSelectedHour: _this.props.setSelectedHour,
            setSelectedMinute: _this.props.setSelectedMinute,
            subtractHour: _this.props.subtractHour,
            subtractMinute: _this.props.subtractMinute,
            togglePeriod: _this.props.togglePeriod,
            viewDate: _this.props.viewDate
          })
        );
      }
    };

    this.renderSwitchButton = function () {
      return _this.props.mode === _ConstantsJs2["default"].MODE_DATETIME ? _react2["default"].createElement(
        "li",
        null,
        _react2["default"].createElement(
          "span",
          { className: "btn picker-switch", onClick: _this.props.togglePicker, style: { width: "100%" } },
          _react2["default"].createElement("span", { className: (0, _classnames2["default"])("glyphicon", _this.props.showTimePicker ? "glyphicon-calendar" : "glyphicon-time") })
        )
      ) : null;
    };
  }

  _createClass(DateTimePicker, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: (0, _classnames2["default"])(this.props.widgetClasses), style: this.props.widgetStyle },
        _react2["default"].createElement(
          "ul",
          { className: "list-unstyled" },
          this.renderDatePicker(),
          this.renderSwitchButton(),
          this.renderTimePicker()
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      showDatePicker: _propTypes2["default"].bool,
      showTimePicker: _propTypes2["default"].bool,
      subtractMonth: _propTypes2["default"].func.isRequired,
      addMonth: _propTypes2["default"].func.isRequired,
      viewDate: _propTypes2["default"].object.isRequired,
      selectedDate: _propTypes2["default"].object.isRequired,
      showToday: _propTypes2["default"].bool,
      viewMode: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
      mode: _propTypes2["default"].oneOf([_ConstantsJs2["default"].MODE_DATE, _ConstantsJs2["default"].MODE_DATETIME, _ConstantsJs2["default"].MODE_TIME]),
      daysOfWeekDisabled: _propTypes2["default"].array,
      setSelectedDate: _propTypes2["default"].func.isRequired,
      subtractYear: _propTypes2["default"].func.isRequired,
      addYear: _propTypes2["default"].func.isRequired,
      setViewMonth: _propTypes2["default"].func.isRequired,
      setViewYear: _propTypes2["default"].func.isRequired,
      subtractHour: _propTypes2["default"].func.isRequired,
      addHour: _propTypes2["default"].func.isRequired,
      subtractMinute: _propTypes2["default"].func.isRequired,
      addMinute: _propTypes2["default"].func.isRequired,
      addDecade: _propTypes2["default"].func.isRequired,
      subtractDecade: _propTypes2["default"].func.isRequired,
      togglePeriod: _propTypes2["default"].func.isRequired,
      minDate: _propTypes2["default"].object,
      maxDate: _propTypes2["default"].object,
      widgetClasses: _propTypes2["default"].object,
      widgetStyle: _propTypes2["default"].object,
      togglePicker: _propTypes2["default"].func,
      setSelectedHour: _propTypes2["default"].func,
      setSelectedMinute: _propTypes2["default"].func
    },
    enumerable: true
  }]);

  return DateTimePicker;
})(_react.Component);

exports["default"] = DateTimePicker;
module.exports = exports["default"];