import React, { Component } from "react"
import { Route } from "react-router-dom"

import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"
import Education from "./Education"

const styles = {
	segment: window.innerWidth >= 575.98 ? {} : { paddingBottom: "5rem" }
}

class Right extends Component {
	render() {
		return (
			<div className="ui center aligned basic segment" style={styles.segment}>
				<Route exact path="/" render={() => <Experience />} />
				<Route exact path={"/experience"} render={() => <Experience />} />
				<Route exact path={"/projects"} render={() => <Projects />} />
				<Route exact path={"/skills"} render={() => <Skills />} />
				<Route exact path={"/education"} render={() => <Education />} />
			</div>
		)
	}
}

export default Right
