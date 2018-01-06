
'use strict';

var widgets = require('@jupyter-widgets/base');
var $ = require('jquery');
var pivot_table = require('./pivot-table');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.



var PivotModel = widgets.DOMWidgetModel.extend({
	defaults: $.extend(widgets.DOMWidgetModel.prototype.defaults(), {
		_model_name: 'PivotModel',
		_view_name: 'PivotView',
		_model_module: 'ipywidget-pivot-table',
		_view_module: 'ipywidget-pivot-table',
		_model_module_version: '~0.1.0',
		_view_module_version: '~0.1.0',
		data: [],
		options_init: {},
	})
});

var PivotView = widgets.DOMWidgetView.extend({
	render: function () {

		console.log('jupyter-widget-pivot-table PivotModel start render');

		// explicit
		var that = this;

		// build pivottable and append it to dom
		pivot_table.createPivot(that);

		// event listener
		// none - case of static display

		// debug
		// window.dom = that.el;
	},
});

module.exports = {
	PivotModel: PivotModel,
	PivotView: PivotView
};
