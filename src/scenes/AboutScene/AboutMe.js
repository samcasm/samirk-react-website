import React, { Component } from "react";
import './aboutMe.scss';

export default class ParallaxScene extends Component {

	componentDidMount(){
		this.props.scrollComponentIntoView(this.aboutmeScene, "aboutmeScene")
	}

	render() {
		return (
			<section className="aboutMe" ref={el => this.aboutmeScene = el}>
			<p>A nutshell:</p>
				<div className="header">
					<img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/timeline.svg" />
				</div>
				<ul className="footer">
					<li><img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/GitHub-Mark-Light-120px-plus.png" alt=""/><a target="_blank" href="https://github.com/samcasm">Github</a></li>
					<li><img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/resume-icon.png" alt=""/><a href="">Resume</a></li>
					<li><img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/email-icon.png" alt=""/><a target="_top" href="mailto:samir7kutty@gmail.com">Email Me</a></li>
				</ul>
			</section>
		);
	}
}