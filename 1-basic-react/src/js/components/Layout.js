import React from "react";
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Welcome'
		};
	}

	changeTitle(title){
		this.setState({title});
	}

	render(){
		return (
			<div>
				<Header changeTitle={this.changeTitle.bind(this)}
				        title={this.state.title}/>
				<Footer />
			</div>
		);
	}
}