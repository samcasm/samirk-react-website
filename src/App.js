// import './style';
import React, { Component } from 'react';
import ParallaxScene from './scenes/ParallaxScene/ParallaxScene';
import AboutMe from './scenes/AboutScene/AboutMe';
import Projects from './scenes/ProjectsScene/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.scrollComponentIntoView = this.scrollComponentIntoView.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
  }

  componentDidMount() {
  	AOS.init({
  		duration: 1000
  	});
  }

  onNavClick(navID){
    let component = navID === 0 ? this.parallaxScene : navID === 1 ? this.projectsScene : this.aboutmeScene;
    component.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  scrollComponentIntoView(ref, componentName) {
    this[componentName] = ref;
  }

  render() {
    return (
      <div id="root">
        <ParallaxScene scrollComponentIntoView={this.scrollComponentIntoView} onNavClick={this.onNavClick}/>
				<Projects scrollComponentIntoView={this.scrollComponentIntoView} onNavClick={this.onNavClick}/>
        <AboutMe scrollComponentIntoView={this.scrollComponentIntoView} onNavClick={this.onNavClick}/>
			</div>
    )
  }
}
