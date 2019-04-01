import React, { Component } from "react";
import './projects.scss';
import gameOfLife from "../../assets/gameOfLife.png";
import cpath from "../../assets/cpath.png";
import moodset from "../../assets/moodset.png";


export default class Projects extends Component {
	redirectTo(url, e){
		e.stopPropagation()
		window.open(url, '_blank')
	}

	componentDidMount(){
		this.props.scrollComponentIntoView(this.projectsScene, "projectsScene")
	}

	render() {
		return (
			<section className="projects" ref={el => this.projectsScene = el}>
				<div className="header">
					<p>My Personal Work</p>
				</div>
				<div className="project-images">
					<div>
						<div data-aos="fade-left" id="Eidetic">
							<a target="_blank" href="https://github.com/samcasm/Eidetic-the-beginning"></a>
							<img src="https://s3.us-east-2.amazonaws.com/samcasmbucket/eidetic.jpeg" />
							<div className="inner-box"><p>Eidetic</p></div>
						</div>
						<div data-aos="fade-right">
							<a target="_blank" href="https://github.com/samcasm/gameOfLife"></a>
							<img src={gameOfLife} />
							<div className="inner-box"><p>Game Of Life</p></div>
						</div>
					</div>
					<div>
						<div data-aos="fade-left">
							<a target="_blank" href="https://github.com/samcasm/moodset"></a>
							<img src={cpath} />
							<div className="inner-box"><p>Moodset</p></div>
						</div>
						<div data-aos="fade-right">
							<a target="_blank" href="https://github.com/samcasm/CriticalPathMethod"></a>
							<img src={moodset} />
							<div className="inner-box"><p>Critical Path</p></div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}