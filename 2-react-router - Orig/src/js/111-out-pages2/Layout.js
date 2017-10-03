import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {

    navigate(){
        this.props.history.pushState(null, '/settings');
    }

    render (){
        return (
            <div>
                <h1>Killer News.net</h1>
                
                {this.props.children}

                <Link to="archives" activeClassName="test" class="btn btn-danger">archives</Link>
                <Link to="featured"><button class="btn btn-success">featured</button></Link>
                <button class="btn btn-primary" onClick={this.navigate.bind(this)}>settings</button>
            </div>
        )
    }
}