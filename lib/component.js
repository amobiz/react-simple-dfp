'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var dfp = require('./service');

var generateNextId = (function () {
	var _id = 0;

	return function _generateNextId(path) {
		var id = ++_id;

		return 'dfp' + path.replace(/\//g, '-') + '-' + id;
	};
})();

var Dfp = React.createClass({
	propTypes: {
		adUnitPath: PropTypes.string.isRequired,
		adSize: PropTypes.array.isRequired,
		adElementId: PropTypes.string,
		adTargeting: PropTypes.object,
		adStyle: PropTypes.object,
		adCollapse: PropTypes.bool,
		onSlotRenderEnded: PropTypes.func,
		onImpressionViewable: PropTypes.func
	},

	getInitialState: function getInitialState() {
		return {
			adElementId: this.props.adElementId || generateNextId(this.props.adUnitPath)
		};
	},

	componentDidMount: function componentDidMount() {
		dfp({
			unitPath: this.props.adUnitPath,
			size: this.props.adSize,
			elementId: this.state.adElementId,
			collapse: this.props.adCollapse,
			targeting: this.props.adTargeting,
			onSlotRenderEnded: this.props.onSlotRenderEnded,
			onImpressionViewable: this.props.onImpressionViewable
		});
	},

	shouldComponentUpdate: function shouldComponentUpdate() {
		return false;
	},

	render: function render() {
		var style = this.props.adStyle || { width: this.props.adSize[0], height: this.props.adSize[1] };

		return React.createElement('div', { id: this.state.adElementId, style: style });
	}
});

module.exports = Dfp;
