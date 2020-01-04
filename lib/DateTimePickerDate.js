"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DateTimePickerDays = require("./DateTimePickerDays");

var _DateTimePickerDays2 = _interopRequireDefault(_DateTimePickerDays);

var _DateTimePickerMonths = require("./DateTimePickerMonths");

var _DateTimePickerMonths2 = _interopRequireDefault(_DateTimePickerMonths);

var _DateTimePickerYears = require("./DateTimePickerYears");

var _DateTimePickerYears2 = _interopRequireDefault(_DateTimePickerYears);

var DateTimePickerDate = (function (_Component) {
  _inherits(DateTimePickerDate, _Component);

  _createClass(DateTimePickerDate, null, [{
    key: "propTypes",
    value: {
      subtractMonth: _propTypes2["default"].func.isRequired,
      addMonth: _propTypes2["default"].func.isRequired,
      viewDate: _propTypes2["default"].object.isRequired,
      selectedDate: _propTypes2["default"].object.isRequired,
      showToday: _propTypes2["default"].bool,
      viewMode: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
      daysOfWeekDisabled: _propTypes2["default"].array,
      setSelectedDate: _propTypes2["default"].func.isRequired,
      subtractYear: _propTypes2["default"].func.isRequired,
      addYear: _propTypes2["default"].func.isRequired,
      setViewMonth: _propTypes2["default"].func.isRequired,
      setViewYear: _propTypes2["default"].func.isRequired,
      addDecade: _propTypes2["default"].func.isRequired,
      subtractDecade: _propTypes2["default"].func.isRequired,
      minDate: _propTypes2["default"].object,
      maxDate: _propTypes2["default"].object
    },
    enumerable: true
  }]);

  function DateTimePickerDate(props) {
    var _this = this;

    _classCallCheck(this, DateTimePickerDate);

    _get(Object.getPrototypeOf(DateTimePickerDate.prototype), "constructor", this).call(this, props);

    this.showMonths = function () {
      return _this.setState({
        daysDisplayed: false,
        monthsDisplayed: true
      });
    };

    this.showYears = function () {
      return _this.setState({
        monthsDisplayed: false,
        yearsDisplayed: true
      });
    };

    this.setViewYear = function (e) {
      _this.props.setViewYear(e.target.innerHTML);
      return _this.setState({
        yearsDisplayed: false,
        monthsDisplayed: true
      });
    };

    this.setViewMonth = function (e) {
      _this.props.setViewMonth(e.target.innerHTML);
      return _this.setState({
        monthsDisplayed: false,
        daysDisplayed: true
      });
    };

    this.renderDays = function () {
      if (_this.state.daysDisplayed) {
        return _react2["default"].createElement(_DateTimePickerDays2["default"], {
          addMonth: _this.props.addMonth,
          daysOfWeekDisabled: _this.props.daysOfWeekDisabled,
          maxDate: _this.props.maxDate,
          minDate: _this.props.minDate,
          selectedDate: _this.props.selectedDate,
          setSelectedDate: _this.props.setSelectedDate,
          showMonths: _this.showMonths,
          showToday: _this.props.showToday,
          subtractMonth: _this.props.subtractMonth,
          viewDate: _this.props.viewDate
        });
      } else {
        return null;
      }
    };

    this.renderMonths = function () {
      if (_this.state.monthsDisplayed) {
        return _react2["default"].createElement(_DateTimePickerMonths2["default"], {
          addYear: _this.props.addYear,
          selectedDate: _this.props.selectedDate,
          setViewMonth: _this.setViewMonth,
          showYears: _this.showYears,
          subtractYear: _this.props.subtractYear,
          viewDate: _this.props.viewDate
        });
      } else {
        return null;
      }
    };

    this.renderYears = function () {
      if (_this.state.yearsDisplayed) {
        return _react2["default"].createElement(_DateTimePickerYears2["default"], {
          addDecade: _this.props.addDecade,
          selectedDate: _this.props.selectedDate,
          setViewYear: _this.setViewYear,
          subtractDecade: _this.props.subtractDecade,
          viewDate: _this.props.viewDate
        });
      } else {
        return null;
      }
    };

    var viewModes = {
      "days": {
        daysDisplayed: true,
        monthsDisplayed: false,
        yearsDisplayed: false
      },
      "months": {
        daysDisplayed: false,
        monthsDisplayed: true,
        yearsDisplayed: false
      },
      "years": {
        daysDisplayed: false,
        monthsDisplayed: false,
        yearsDisplayed: true
      }
    };
    this.state = viewModes[this.props.viewMode] || viewModes[_Object$keys(viewModes)[this.props.viewMode]] || viewModes.days;
  }

  _createClass(DateTimePickerDate, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "datepicker" },
        this.renderDays(),
        this.renderMonths(),
        this.renderYears()
      );
    }
  }]);

  return DateTimePickerDate;
})(_react.Component);

exports["default"] = DateTimePickerDate;
module.exports = exports["default"];