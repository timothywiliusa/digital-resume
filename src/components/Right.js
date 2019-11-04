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
				<Route
					exact
					path={"/projects"}
					render={() => (
						<div>
							<div className="ui top attached small label">
								<p>
									Note: If you see an error related to Heroku when first loading
									a demo, please try refreshing the page.
								</p>
							</div>
							<Projects />
						</div>
					)}
				/>
				<Route exact path={"/skills"} render={() => <Skills />} />
				<Route exact path={"/education"} render={() => <Education />} />
			</div>
		)
	}
}

export default Right
