import React from "react";

export default class Archives extends React.Component {
    render (){
        console.log(this.props);
        const {query}  = this.props.location;
        const {params} = this.props;
        const {article} = params;

        return (
            <div>
                <h4>Archives Content ({article})</h4>
                <h4>Archives Content ({query.date})</h4>
            </div>
        )
    }
}