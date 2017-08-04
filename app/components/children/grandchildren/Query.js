var React = require("react");

var Query = React.createClass({

    updateShared: function(callback){

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

        var parameters = $.param({

            'api-key': "ab3aa28c8add469ca323c6117aeffb45",
            'q': this.state.topic,
            'begin_date': this.state.beginYear+"0101",
            'end_date': this.state.endYear+"1231"

        });

        url += '?' + parameters;

        $.ajax({

            url: url,
            method: 'GET',

        }).done(function(result) {

            console.log(result);

            console.log(result.response.docs);

            var articles = result.response.docs;

            var bundle = [];


            for(let i=0; i<articles.length; i++){

            var temp = {};

            temp.headline = articles[i].headline.main;

            temp.url = articles[i].web_url;

            bundle.push(temp);

            }

            callback(bundle);

        }).fail(function(err) {

            throw err;

        });

    },

    getInitialState: function() {

        return { topic: "", beginYear: 0, endYear: 0 };

    },

    handleChange: function(event) {

        var newState = {};

        newState[event.target.id] = event.target.value;

        this.setState(newState);

    },

    handleSubmit: function(event) {

        this.updateShared(this.props.updateShared);
        event.preventDefault();

    },

    render: function() {

        return (

        <div className="container">

            <div className="row">

            <div className="col-md-12">

                <div className="panel panel-primary">

                <div className="panel-heading">

                    <h3 className="panel-title text-center">Form</h3>

                </div>

                <div className="panel-body text-center">

                    <form onSubmit={this.handleSubmit}>

                    <div className="form-group">

                        <h4 className="">

                        <strong>Topic</strong>

                        </h4>

                        <input
                        type="text"
                        value={this.state.num1}
                        className="form-control"
                        id="topic"
                        onChange={this.handleChange}
                        required
                        />

                        <h4>

                        <strong>Begin Year</strong>

                        </h4>

                        <input
                        type="number"
                        value={this.state.num2}
                        className="form-control"
                        id="beginYear"
                        onChange={this.handleChange}
                        required
                        />

                        <h4>

                        <strong>End Year</strong>

                        </h4>

                        <input
                        type="number"
                        value={this.state.text}
                        className="form-control"
                        id="endYear"
                        onChange={this.handleChange}
                        required
                        />

                    </div>

                    <input type="submit" value="Submit" />

                    </form>

                </div>

                </div>

            </div>

            </div>

        </div>

        );

    }

});

module.exports = Query;