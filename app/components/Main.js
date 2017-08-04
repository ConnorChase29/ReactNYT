var React = require("react");

var Link = require("react-router").Link;

var Main = React.createClass({

  render: function() {

    return (

      <div className="container">

        <div className="jumbotron">

          <h1 className="text-center">New York Times Article Scrubber</h1>

          <p className="text-center"><em>Search for and annotate articles of interest!</em></p>

        </div>

        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>

      </div>

    );

  }

});

module.exports = Main;
