var React = require("react");

var Link = require("react-router").Link;

var Query = require("./grandchildren/Query");

var Results = require("./grandchildren/Results");

var Search = React.createClass({

    getInitialState: function(){

        return {shared_var: []};

    },

    render: function() {

        return (

            <div>

                <Query updateShared={this.updateShared} />

                <Results shared_var={this.state.shared_var} />

            </div>

        );

    }

});

module.exports = Search;