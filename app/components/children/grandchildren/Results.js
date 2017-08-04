var React = require("react");

var Link = require("react-router").Link;

var Results = React.createClass({

    clickButton: function(event){

        alert(event.target.value);

    },

    render: function() {
        
        var temp = this;

        var articleComponents = this.props.shared_var.map(function(article) {

            return( 

                <div className="row" key={article.url}>

                    <div className="col-md-8">

                        <h3>{article.headline}</h3>

                        <p>{article.url}</p>

                    </div>
                    
                    <br/>
                    
                </div>

            );

        });

        return (

        <div className="container">

            <div className="col-lg-12">

            <div className="panel panel-primary">

                <div className="panel-heading">

                <h3 className="panel-title text-center">Results</h3>

                </div>

                <div className="panel-body text-center">

                    {articleComponents}

                </div>

            </div>

            </div>

        </div>

        );

    }

});

module.exports = Results;